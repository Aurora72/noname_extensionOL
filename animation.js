window.func=function(lib,game,ui,get,ai,_status){
	/*
	game.kzol_getBase64Image=function(url,callback){
		var canvas=document.createElement("canvas");
		var img=new Image();
		img.src=lib.assetURL+'extension/扩展ol/animation_image/'+url;
		img.onload=function(){
			canvas.getContext("2d").drawImage(img,0,0);
			var dataURL=canvas.toDataURL();
			callback?callback(dataURL):null;
		};
	};
	game.kzol_importSkillAnimation=function(){
		if(!window.JSZip){
			lib.init.js(lib.assetURL+'game','jszip',function(){
				game.kzol_importSkillAnimation();
			});
		}else{
			var zip=new JSZip();
			zip.file("config.js",JSON.stringify(lib.config.kzol_skillAnimation));
			var folder=zip.folder("animation_image");
			var file_list=[];
			for(var i in lib.config.kzol_skillAnimation){
				var animation=lib.config.kzol_skillAnimation[i];
				if(animation.image==undefined) continue;
				file_list.push(animation.image);
			};
			var importZip=function(){
				var blob=zip.generate({type:"blob"});
				var fileNameToSaveAs='特效合集';
				fileNameToSaveAs=fileNameToSaveAs.replace(/\\|\/|\:|\?|\"|\*|<|>|\|/g,'.');
				fileNameToSaveAs+='.zip';
				if(lib.device){
					var directory;
					if(lib.device=='android'){
						directory=cordova.file.externalDataDirectory;
					}else{
						directory=cordova.file.documentsDirectory;
					};
					window.resolveLocalFileSystemURL(directory,function(entry){
						entry.getFile(fileNameToSaveAs,{create:true},function(fileEntry){
							fileEntry.createWriter(function(fileWriter){
								fileWriter.onwriteend=function(){
									alert('文件已导出至'+directory+fileNameToSaveAs);
								};
								fileWriter.write(blob)
							});
						});
					});
				}else{
					var downloadLink=document.createElement("a");
					downloadLink.download=fileNameToSaveAs;
					downloadLink.innerHTML="Download File";
					downloadLink.href=window.URL.createObjectURL(blob);
					downloadLink.click();
				};
			};
			if(file_list.length>0){
				var getBase64Image=function(){
					game.kzol_getBase64Image(file_list[0],function(dataURL){
                        var img_arr=dataURL.split(',');
						folder.file(file_list[0],img_arr[1],{base64:true});
						file_list.remove(file_list[0]);
						if(file_list.length>0){
							getBase64Image();
						}else{
							importZip();
						};
					});
				};
				getBase64Image();
			}else{
				importZip();
			};
		};
	};
	*/
	lib.kzol_animations={};
	if(lib.config.kzol_skillAnimation==undefined) game.saveConfig('kzol_skillAnimation',{});
	game.kzol_loadSkillAnimationImg=function(){
		var animations=[];
		var folders1=[];
		if(lib.config.kzol_skillAnimation_createFiles==true){
			for(var i in lib.config.kzol_skillAnimation){
				var animation=lib.config.kzol_skillAnimation[i];
				if(animation.forbid==true) continue;
				if(animation.image==undefined) continue;
				if(animation.image.indexOf('.')!=-1) continue;
				animations.push(animation.image);
			};
			game.getFileList('extension/扩展ol/animation_image',function(folders,files){
				for(var i=0;i<folders.length;i++){
					var folder=folders[i];
					if(animations.contains(folder)) folders1.push(folder);
				};
				var loadImage=function(){
					var folder=folders1[0];
					game.getFileList('extension/扩展ol/animation_image/'+folder,function(folders,files){
						var type='.jpg';
						var num=files.length;
						if(lib.kzol_animations[folder]==undefined||
						(lib.kzol_animations[folder]!=undefined&&lib.kzol_animations[folder].num!=num)){
							for(var i=0;i<files.length;i++){
								var file=files[i];
								if(file.indexOf('.jpg')!=-1){
									type='.jpg';
								}else if(file.indexOf('.JPG')!=-1){
									type='.JPG';
								}else if(file.indexOf('.png')!=-1){
									type='.png';
								}else if(file.indexOf('.PNG')!=-1){
									type='.PNG';
								}else{
									continue;
								};
								var img=document.createElement('img');
								img.src=lib.assetURL+'extension/扩展ol/animation_image/'+folder+'/'+file;
								img.style.display="none";
								document.body.appendChild(img);
							};
							lib.kzol_animations[folder]={
								type:type,
								num:num,
							};
						};
						folders1.remove(folder);
						if(folders1.length>0) loadImage();
					});
				};
				if(folders1.length>0) loadImage();
			});
		};
	};
	game.kzol_loadSkillAnimationImg();
	lib.extensionMenu.extension_扩展ol.tx_title={
		"name":"<b><p align=center><span style=\"font-size:18px\">------插件与特效------</span></b>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol.tx_info={
		"name":"<p align=center>插件下载</p>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol.tx_download={
		"name":"<span style='text-decoration: underline'>下载html2canvas插件（123KB）</span>",
		"clear":true,
		"onclick":function(){
			var node=this;
			if(node.downloading!=undefined){
				game.say1('正在下载html2canvas插件，请稍候');
				return;
			};
			node.downloading=true;
			var download=function(){
				game.download('https://aurora72.coding.net/p/noname_extensionOL/d/noname_extensionOL/git/raw/master/html2canvas.js','extension/扩展ol/html2canvas.js',function(){
					game.say1('下载完成');
					delete node.downloading;
				},function(){
					game.say1('下载失败');
					delete node.downloading;
				});
			};
			game.readFile('extension/扩展ol/html2canvas.js',function(){
				if(confirm('已拥有html2canvas插件，是否重新下载？')){
					download();
				}else{
					delete node.downloading;
				};
			},function(){
				download();
			});
		},
	};
	lib.extensionMenu.extension_扩展ol.tx_download1={
		"name":"<span style='text-decoration: underline'>下载delaunay插件（8.22KB）</span>",
		"clear":true,
		"onclick":function(){
			var node=this;
			if(node.downloading!=undefined){
				game.say1('正在下载delaunay插件，请稍候');
				return;
			};
			node.downloading=true;
			var download=function(){
				game.download('https://aurora72.coding.net/p/noname_extensionOL/d/noname_extensionOL/git/raw/master/delaunay.js','extension/扩展ol/delaunay.js',function(){
					game.say1('下载完成');
					delete node.downloading;
				},function(){
					game.say1('下载失败');
					delete node.downloading;
				});
			};
			game.readFile('extension/扩展ol/delaunay.js',function(){
				if(confirm('已拥有delaunay插件，是否重新下载？')){
					download();
				}else{
					delete node.downloading;
				};
			},function(){
				download();
			});
		},
	};
	lib.extensionMenu.extension_扩展ol.tx_info1={
		"name":"<p align=center>插件管理</p>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol.tx_open={
		"name":"html2canvas插件",
		"init":true,
		"intro":"用于DOM转canvas",
	};
	lib.extensionMenu.extension_扩展ol.tx_open1={
		"name":"delaunay插件",
		"init":true,
		"intro":"用于计算三角形路径",
	};
	lib.extensionMenu.extension_扩展ol.tx_info2={
		"name":"<p align=center>特效管理</p>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol.tx_tx_open={
		"name":"随从退场",
		"init":true,
		"intro":"简介:<br>&nbspgame.addShibing添加的随从退场时触发<br>效果:<br>&nbsp破碎、上升、渐隐<br>插件:<br>&nbsphtml2canvas<br>&nbspdelaunay",
	};
	lib.extensionMenu.extension_扩展ol.tx_tx_set={
		"name":"↑碎片顶点数量",
		"init":2,
		"item":{
			1:'4个',
			2:'5个',
			3:'6个',
			3:'7个',
			4:'8个',
			5:'9个',
			6:'10个',
			7:'11个',
			8:'12个',
			9:'13个',
			10:'14个',
			11:'15个',
		},
		"intro":"设置随从退场特效破碎后的碎片顶点数量",
	};
	lib.extensionMenu.extension_扩展ol.tx_tx_set1={
		"name":"↑游戏延时",
		"init":2,
		"item":{
			0.5:'500ms',
			1:'1000ms',
			1.5:'1500ms',
			2:'2000ms',
			2.5:'2500ms',
			3:'3000ms',
		},
		"intro":"设置随从退场特效播放时暂停游戏的时间",
	};
	lib.extensionMenu.extension_扩展ol.tx_tx_set2={
		"name":"↑绘制内容",
		"init":'avatar',
		"item":{
			'card':'武将牌',
			'avatar':'武将头像'
		},
		//"intro":"设置随从退场特效破碎前canvas绘制的内容，仅绘制武将头像不需要html2canvas插件",
		"intro":"设置随从退场特效破碎前canvas绘制的内容",
	};
	lib.extensionMenu.extension_扩展ol.tx_tx1_open={
		"name":"翻面动作",
		"init":true,
		"intro":"简介:<br>&nbsp武将翻面且没有副将时触发<br>效果:<br>&nbsp反转、设置图片<br>注:<br>&nbsp需要奈何花落包正常加载",
	};
	lib.extensionMenu.extension_扩展ol.tx_tx1_set={
		"name":"↑使用范围",
		"init":'nhhl',
		"item":{
			'nhhl':'仅奈何花落包武将',
			'all':'全部',
		},
		"intro":"设置武将翻面特效的使用范围",
	};
	lib.extensionMenu.extension_扩展ol.tx_tx2_open={
		"name":"进攻动作",
		"init":false,
		"intro":"简介:<br>&nbsp组成伤害前触发<br>效果:<br>&nbsp移动、摆动",
	};
	lib.extensionMenu.extension_扩展ol.tx_info3={
		"name":"<p align=center>图片特效</p>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol.tx_info31={
		"name":"联机不会显示此类型的图片特效",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol.tx_skillAnimation_enable={
		"name":"关闭图片特效",
		"init":false,
		"intro":"关闭后，不再显示图片特效",
    };
	lib.extensionMenu.extension_扩展ol.tx_skillAnimation_viewAs={
		"name":"视为类卡牌不显示特效",
		"init":false,
    };
	lib.extensionMenu.extension_扩展ol.tx_skillAnimation_canvas={
		"name":"动画使用canvas绘制播放",
		"init":false,
		"intro":"开启后，序列帧动画使用canvas绘制播放",
    };
	lib.extensionMenu.extension_扩展ol.tx_skillAnimation_judgeEvent={
		"name":"涉及判定结果的特效播放",
		"init":'skill',
		"item":{
			'skill':'技能',
			'event':'时机',
		}
	};
	lib.extensionMenu.extension_扩展ol.tx_skillAnimation_show={
		"name":"菜单内添加特效界面按钮",
		"init":true,
		"intro":"菜单（右上）内添加特效界面按钮",
    };
	lib.extensionMenu.extension_扩展ol.tx_skillAnimation={
		"name":"图片特效界面<div>&gt;</div>",
		"clear":true,
		"onclick":function(){
			ui.click.configMenu();
			game.openskillAnimationEditor();
		},
	};
	lib.extensionMenu.extension_扩展ol.tx_skillAnimation_zd={
		"name":"特效界面内容折叠",
		"init":false,
		"intro":"开启后，折叠特效界面内容，首次点击时展开",
    };
	lib.extensionMenu.extension_扩展ol.tx_skillAnimation_zd1={
		"name":"特效界面内容展开动画",
		"init":false,
		"intro":"开启后，展开特效界面内容时不显示动画（展开卡顿时开启）",
    };
	lib.extensionMenu.extension_扩展ol.tx_skillAnimation_stop={
		"name":"打开特效界面时暂停游戏",
		"init":true,
		"intro":"打开特效界面时暂停游戏",
    };
	lib.extensionMenu.extension_扩展ol.tx_skillAnimation_dr={
		"name":'导入特效设置',
		"clear":true,
		"onclick":function(){
			if(this.kzol_openedjm==undefined){
				var div=ui.create.div();
				div.link_XX=true;
				div.innerHTML='<div style="white-space:nowrap;width:calc(100% - 10px)">'+
				'<input type="file" style="width:calc(100% - 40px)">'+
				'<button style="width:40px">导入</button></div>';
				div.querySelector('button').onclick=function(){
					var fileToLoad=this.previousSibling.files[0];
					if(fileToLoad){
						if(!confirm('是否导入该特效设置？（导入后会覆盖同名特效）')) return ;
						var fileReader=new FileReader();
						fileReader.onload=function(fileLoadedEvent){
							var data=fileLoadedEvent.target.result;
							if(!data) return;
							try{
								data=JSON.parse(data);
								if(!data||typeof data!='object') throw('err');
							}catch(e){
								alert('导入失败');
								return;
							};
							game.say1('导入成功');
							if(lib.config.kzol_skillAnimation==undefined) lib.config.kzol_skillAnimation={};
							for(var i in data){
								if(lib.config.kzol_skillAnimation[i]!=undefined&&!confirm('已存在同名特效-'+i+'，是否覆盖？')) continue;
								lib.config.kzol_skillAnimation[i]=data[i];
							};
							game.saveConfig('kzol_skillAnimation',lib.config.kzol_skillAnimation);
							game.kzol_loadSkillAnimationImg();
						};
						fileReader.readAsText(fileToLoad, "UTF-8");
					}else{
						game.say1('请先选择文件');
					};
				};
				this.parentNode.insertBefore(div,this.nextSibling);
				this.kzol_openedjm=div;
			}else{
				this.parentNode.removeChild(this.kzol_openedjm);
				delete this.kzol_openedjm;
			};
		}
	};
	lib.extensionMenu.extension_扩展ol.tx_skillAnimation_dc={
		"name":'导出特效设置',
		"clear":true,
		"onclick":function(){
			if(lib.config.kzol_skillAnimation==undefined){
				game.say1('未检测到特效设置');
				return ;
			};
			game.export(JSON.stringify(lib.config.kzol_skillAnimation),'特效设置 - '+(new Date()).toLocaleString());
		}
	};
	lib.extensionMenu.extension_扩展ol.tx_skillAnimation_jc={
		"name":"<span style='text-decoration:underline'>查看教程</span>",
		"clear":true,
		"onclick":function(){
			game.open('https://aurora72.coding.net/s/a5ffa43e-fee1-409a-88e0-71c113de18d9/99');
		},
	};
	lib.extensionMenu.extension_扩展ol.tx_skillAnimation_showFps={
		"name":"FPS显示",
		"init":false,
		"intro":"刷新生效",
	};
	lib.extensionMenu.extension_扩展ol.tx_skillAnimation_showFpsP={
		"name":"FPS显示位置",
		"init":'rd',
		"item":{
			'rd':'右下',
			'cd':'中下',
			'ld':'左下',
			'ru':'右上',
			'cu':'中上',
			'lu':'左上',
		},
	};
	lib.skill['_kzol_playSkillAnimation']={
		trigger:{
			player:['logSkillBefore','useSkillBefore','damageBegin'],
			global:'gameStart',
		},
		priority:-Infinity,
		forced:true,
		popup:false,
		filter:function(event,player){
			//if(_status.connectMode) return;
			if(lib.config['extension_扩展ol_tx_skillAnimation_enable']==true) return false;
			if(event.name=='game'&&event.kzol_hadAnimation==true) return false;
			for(var i in lib.config.kzol_skillAnimation){
				if(event.name=='game'){
					if(lib.config.kzol_skillAnimation[i].skills.contains('gameStart')) return true;
				}else if(event.name=='damage'){
					if(lib.config.kzol_skillAnimation[i].skills.contains('damage')) return true;
				}else{
					if(lib.config.kzol_skillAnimation[i].skills.contains(event.skill)) return true;
				};
			};
			return false;
		},
		content:function(){
			var animations=[];
			for(var i in lib.config.kzol_skillAnimation){
				if(lib.config.kzol_skillAnimation[i].forbid==true) continue;
				if(trigger.name=='game'){
					if(lib.config.kzol_skillAnimation[i].skills.contains('gameStart')) animations.push(i);
				}else if(trigger.name=='damage'){
					if(lib.config.kzol_skillAnimation[i].skills.contains('damage')) animations.push(i);
				}else{
					if(lib.config.kzol_skillAnimation[i].skills.contains(trigger.skill)) animations.push(i);
				};
			};
			if(trigger.name=='game') trigger.kzol_hadAnimation=true;
			if(animations.length>0){
				for(var i=0;i<animations.length;i++){
					var name=animations[i];
					var animation=lib.config.kzol_skillAnimation[name];
					if(animation.position=='target'){
						if(trigger.targets!=undefined){
							for(var j=0;j<trigger.targets.length;j++){
								game.kzol_playSkillAnimation(name,trigger.targets[j]);
							};
						}else if(trigger.target!=undefined){
							game.kzol_playSkillAnimation(name,trigger.target);
						};
					}else if(animation.position=='target_avatar'){
						if(trigger.targets!=undefined){
							for(var j=0;j<trigger.targets.length;j++){
								game.kzol_playSkillAnimation(name,trigger.targets[j].node.avatar);
							};
						}else if(trigger.target!=undefined){
							game.kzol_playSkillAnimation(name,trigger.target.node.avatar);
						};
					}else if(animation.position=='player'){
						game.kzol_playSkillAnimation(name,player);
					}else if(animation.position=='player_avatar'){
						game.kzol_playSkillAnimation(name,player.node.avatar);
					}else if(animation.position=='target_fake'){
						if(trigger.targets!=undefined){
							for(var j=0;j<trigger.targets.length;j++){
								game.kzol_playSkillAnimation(name,trigger.targets[j],true);
							};
						}else if(trigger.target!=undefined){
							game.kzol_playSkillAnimation(name,trigger.target,true);
						};
					}else if(animation.position=='target_avatar_fake'){
						if(trigger.targets!=undefined){
							for(var j=0;j<trigger.targets.length;j++){
								game.kzol_playSkillAnimation(name,trigger.targets[j].node.avatar,true);
							};
						}else if(trigger.target!=undefined){
							game.kzol_playSkillAnimation(name,trigger.target.node.avatar,true);
						};
					}else if(animation.position=='player_fake'){
						game.kzol_playSkillAnimation(name,player,true);
					}else if(animation.position=='player_avatar_fake'){
						game.kzol_playSkillAnimation(name,player.node.avatar,true);
					}else{
						game.kzol_playSkillAnimation(name);
					};
				};
			};
		},
	};
	lib.skill['_kzol_playSkillAnimation1']={
		trigger:{
			player:'judgeEnd',
		},
		priority:-Infinity,
		forced:true,
		popup:false,
		filter:function(event,player){
			//if(_status.connectMode) return;
			if(lib.config['extension_扩展ol_tx_skillAnimation_enable']==true) return false;
			if(lib.config['extension_扩展ol_tx_skillAnimation_judgeEvent']!='skill') return false;
			if(event.result==undefined) return false;
			for(var i in lib.config.kzol_skillAnimation){
				var animation=lib.config.kzol_skillAnimation[i];
				if(animation.forbid==true) continue;
				if(animation.cards==undefined) continue;
				for(var j=0;j<animation.cards.length;j++){
					var card1=animation.cards[j];
					if(typeof card1!='object') continue;
					if(card1.event=='judge'&&card1.bool==event.result.bool) return true;
				};
			};
			return false;
		},
		content:function(){
			var animations=[];
			for(var i in lib.config.kzol_skillAnimation){
				var animation=lib.config.kzol_skillAnimation[i];
				if(animation.forbid==true) continue;
				for(var j=0;j<animation.cards.length;j++){
					var card1=animation.cards[j];
					if(typeof card1=='object'){
						if(card1.event=='judge'&&card1.bool==trigger.result.bool&&!animations.contains(i)) animations.push(i);
					};
				};
			};
			if(animations.length>0){
				for(var i=0;i<animations.length;i++){
					var name=animations[i];
					var animation=lib.config.kzol_skillAnimation[name];
					if(animation.position=='target'){
						if(trigger.targets!=undefined){
							for(var j=0;j<trigger.targets.length;j++){
								game.kzol_playSkillAnimation(name,trigger.targets[j]);
							};
						}else if(trigger.target!=undefined){
							game.kzol_playSkillAnimation(name,trigger.target);
						};
					}else if(trigger.position=='target_avatar'){
						if(trigger.targets!=undefined){
							for(var j=0;j<trigger.targets.length;j++){
								game.kzol_playSkillAnimation(name,trigger.targets[j].node.avatar);
							};
						}else if(trigger.target!=undefined){
							game.kzol_playSkillAnimation(name,trigger.target.node.avatar);
						};
					}else if(animation.position=='player'){
						if(trigger.player) game.kzol_playSkillAnimation(name,trigger.player);
					}else if(animation.position=='player_avatar'){
						if(trigger.player) game.kzol_playSkillAnimation(name,trigger.player.node.avatar);
					}else if(animation.position=='player1'){
						game.kzol_playSkillAnimation(name,ui.arena);
					}else if(animation.position=='target_fake'){
						if(trigger.targets!=undefined){
							for(var j=0;j<trigger.targets.length;j++){
								game.kzol_playSkillAnimation(name,trigger.targets[j],true);
							};
						}else if(trigger.target!=undefined){
							game.kzol_playSkillAnimation(name,trigger.target,true);
						};
					}else if(trigger.position=='target_avatar_fake'){
						if(trigger.targets!=undefined){
							for(var j=0;j<trigger.targets.length;j++){
								game.kzol_playSkillAnimation(name,trigger.targets[j].node.avatar,true);
							};
						}else if(trigger.target!=undefined){
							game.kzol_playSkillAnimation(name,trigger.target.node.avatar,true);
						};
					}else if(animation.position=='player_fake'){
						if(trigger.player) game.kzol_playSkillAnimation(name,trigger.player,true);
					}else if(animation.position=='player_avatar_fake'){
						if(trigger.player) game.kzol_playSkillAnimation(name,trigger.player.node.avatar,true);
					}else{
						game.kzol_playSkillAnimation(name);
					};
				};
			};
		},
	};
	lib.arenaReady.push(function(){
	var player_throwordered2=lib.element.player.$throwordered2;
	lib.element.player.$throwordered2=function(node,nosource){
		player_throwordered2.apply(this,arguments);
		if(lib.config['extension_扩展ol_tx_skillAnimation_enable']==true) return node;
		var animations1=[];
		if(lib.config['extension_扩展ol_tx_skillAnimation_judgeEvent']=='event'&&_status.event.name=='judge'){
			if(!lib.element.content['kzol_skillAnimation_judge']){
				lib.element.content['kzol_skillAnimation_judge']=function(event,step,source,player,target,targets,card,cards,skill,forced,num,trigger,result,_status,lib,game,ui,get,ai){
					var callback=event.parent.kzol_over.callback;
					if(callback){
						if(!callback._parsed){
							event.parent.kzol_over.callback=lib.init.parse(callback);
							event.parent.kzol_over.callback._parsed=true;
							callback=event.parent.kzol_over.callback;
							var steps=callback.toString().match(/case(.*?)(?=:)/g);
							if (steps&&steps.length){
								event.parent.kzol_over.step=parseInt(steps[steps.length - 1].replace('case', '')) + 1;
							};
						};
					};
					if(event.parent.kzol_over.step==step){
						event.finish();
						return;
					};
					if(callback) callback.apply(this,arguments);
					
					var animations=[];
					for(var i in lib.config.kzol_skillAnimation){
						var animation=lib.config.kzol_skillAnimation[i];
						if(animation.forbid==true) continue;
						for(var j=0;j<animation.cards.length;j++){
							var card1=animation.cards[j];
							if(typeof card1=='object'){
								if(card1.event=='judge'&&card1.bool==event.judgeResult.bool&&!animations.contains(i)) animations.push(i);
							};
						};
					};
					if(animations.length>0){
						for(var i=0;i<animations.length;i++){
							var name=animations[i];
							var animation=lib.config.kzol_skillAnimation[name];
							if(animation.position=='target'){
								if(_status.event.targets!=undefined){
									for(var j=0;j<_status.event.targets.length;j++){
										game.kzol_playSkillAnimation(name,_status.event.targets[j]);
									};
								}else if(_status.event.target!=undefined){
									game.kzol_playSkillAnimation(name,_status.event.target);
								};
							}else if(_status.event.position=='target_avatar'){
								if(_status.event.targets!=undefined){
									for(var j=0;j<_status.event.targets.length;j++){
										game.kzol_playSkillAnimation(name,_status.event.targets[j].node.avatar);
									};
								}else if(_status.event.target!=undefined){
									game.kzol_playSkillAnimation(name,_status.event.target.node.avatar);
								};
							}else if(animation.position=='player'){
								if(_status.event.player) game.kzol_playSkillAnimation(name,_status.event.player);
							}else if(animation.position=='player_avatar'){
								if(_status.event.player) game.kzol_playSkillAnimation(name,_status.event.player.node.avatar);
							}else if(animation.position=='player1'){
								game.kzol_playSkillAnimation(name,ui.arena);
							}else if(animation.position=='target_fake'){
								if(_status.event.targets!=undefined){
									for(var j=0;j<_status.event.targets.length;j++){
										game.kzol_playSkillAnimation(name,_status.event.targets[j],true);
									};
								}else if(_status.event.target!=undefined){
									game.kzol_playSkillAnimation(name,_status.event.target,true);
								};
							}else if(_status.event.position=='target_avatar_fake'){
								if(_status.event.targets!=undefined){
									for(var j=0;j<_status.event.targets.length;j++){
										game.kzol_playSkillAnimation(name,_status.event.targets[j].node.avatar,true);
									};
								}else if(_status.event.target!=undefined){
									game.kzol_playSkillAnimation(name,_status.event.target.node.avatar,true);
								};
							}else if(animation.position=='player_fake'){
								if(_status.event.player) game.kzol_playSkillAnimation(name,_status.event.player,true);
							}else if(animation.position=='player_avatar_fake'){
								if(_status.event.player) game.kzol_playSkillAnimation(name,_status.event.player.node.avatar,true);
							}else{
								game.kzol_playSkillAnimation(name);
							};
						};
					};
				};
				lib.element.content['kzol_skillAnimation_judge']._parsed = true;
			};
			if(!_status.event.kzol_over) _status.event.kzol_over={};
			_status.event.kzol_over.callback=_status.event.callback;
			_status.event.kzol_over.step=1;
			_status.event.callback='kzol_skillAnimation_judge';
		};
		if(_status.event.card!=undefined){
			var card1=_status.event.card;
			var animations=[];
			if(!_status.connectMode&&card1.name!=undefined){
				for(var i in lib.config.kzol_skillAnimation){
					var animation=lib.config.kzol_skillAnimation[i];
					if(animation.forbid==true) continue;
					for(var j=0;j<animation.cards.length;j++){
						var card=animation.cards[j];
						if(typeof card=='object'){
							if(_status.event.name=='judge'&&card.bool!=undefined) continue;
							if(card.event==undefined){
								if(_status.event.name!='useCard'&&_status.event.name!='respond') continue;
							}else{
								if(card.event=='discard'){
									if(_status.event.name!=card.event){
										if(_status.event.parent==undefined) continue;
										if(_status.event.parent.name!='discard') continue;
									};
								}else{
									if(_status.event.name!=card.event) continue;
								};
							};
							if(card.name==card1.name&&(lib.config['extension_扩展ol_tx_skillAnimation_viewAs']==true?card.name==node.name:true)&&
							(card.nature==undefined||(card.nature!=undefined&&(card.nature=='none'?card1.nature==undefined:card.nature==card1.nature)))&&
							(card.color==undefined||(card.color!=undefined&&card.color==get.color(card1)&&card.color==get.color(node)))&&
							!animations.contains(i)) animations.push(i);
						}else{
							if(_status.event.name!='useCard'&&_status.event.name!='respond') continue;
							if(card==card1.name&&(lib.config['extension_扩展ol_tx_skillAnimation_viewAs']==true?card.name==node.name:true)&&!animations.contains(i)) animations.push(i);
						};
					};
				};
			};
			if(animations.length>0){
				animations1.push(animations);
			};
		}else if(_status.event.cards!=undefined&&_status.event.cards.length>0){
			var cards=_status.event.cards;
			for(var a=0;a<cards.length;a++){
				var card1=cards[a];
				var animations=[];
				if(!_status.connectMode&&card1.name!=undefined){
					for(var i in lib.config.kzol_skillAnimation){
						var animation=lib.config.kzol_skillAnimation[i];
						if(animation.forbid==true) continue;
						for(var j=0;j<animation.cards.length;j++){
							var card=animation.cards[j];
							if(typeof card=='object'){
								if(_status.event.name=='judge'&&card.bool!=undefined) continue;
								if(card.event==undefined){
									if(_status.event.name!='useCard'&&_status.event.name!='respond') continue;
								}else{
									if(card.event=='discard'){
										if(_status.event.name!=card.event){
											if(_status.event.parent==undefined) continue;
											if(_status.event.parent.name!='discard') continue;
										};
									}else{
										if(_status.event.name!=card.event) continue;
									};
								};
								if(card.name==card1.name&&(lib.config['extension_扩展ol_tx_skillAnimation_viewAs']==true?card.name==node.name:true)&&
								(card.nature==undefined||(card.nature!=undefined&&(card.nature=='none'?card1.nature==undefined:card.nature==card1.nature)))&&
								(card.color==undefined||(card.color!=undefined&&card.color==get.color(card1)&&card.color==get.color(node)))&&
								!animations.contains(i)) animations.push(i);
							}else{
								if(_status.event.name!='useCard'&&_status.event.name!='respond') continue;
								if(card==card1.name&&(lib.config['extension_扩展ol_tx_skillAnimation_viewAs']==true?card.name==node.name:true)&&!animations.contains(i)) animations.push(i);
							};
						};
					};
				};
				if(animations.length>0){
					animations1.push(animations);
				};
			};
		};
		if(animations1.length>0){
			for(var a=0;a<animations1.length;a++){
				var animations=animations1[a];
				for(var i=0;i<animations.length;i++){
					var name=animations[i];
					var animation=lib.config.kzol_skillAnimation[name];
					if(animation.position=='target'){
						if(_status.event.targets!=undefined){
							for(var j=0;j<_status.event.targets.length;j++){
								game.kzol_playSkillAnimation(name,_status.event.targets[j]);
							};
						}else if(_status.event.target!=undefined){
							game.kzol_playSkillAnimation(name,_status.event.target);
						};
					}else if(_status.event.position=='target_avatar'){
						if(_status.event.targets!=undefined){
							for(var j=0;j<_status.event.targets.length;j++){
								game.kzol_playSkillAnimation(name,_status.event.targets[j].node.avatar);
							};
						}else if(_status.event.target!=undefined){
							game.kzol_playSkillAnimation(name,_status.event.target.node.avatar);
						};
					}else if(animation.position=='player'){
						if(_status.event.player) game.kzol_playSkillAnimation(name,_status.event.player);
					}else if(animation.position=='player_avatar'){
						if(_status.event.player) game.kzol_playSkillAnimation(name,_status.event.player.node.avatar);
					}else if(animation.position=='player1'){
						game.kzol_playSkillAnimation(name,node);
					}else if(animation.position=='target_fake'){
						if(_status.event.targets!=undefined){
							for(var j=0;j<_status.event.targets.length;j++){
								game.kzol_playSkillAnimation(name,_status.event.targets[j],true);
							};
						}else if(_status.event.target!=undefined){
							game.kzol_playSkillAnimation(name,_status.event.target,true);
						};
					}else if(_status.event.position=='target_avatar_fake'){
						if(_status.event.targets!=undefined){
							for(var j=0;j<_status.event.targets.length;j++){
								game.kzol_playSkillAnimation(name,_status.event.targets[j].node.avatar,true);
							};
						}else if(_status.event.target!=undefined){
							game.kzol_playSkillAnimation(name,_status.event.target.node.avatar,true);
						};
					}else if(animation.position=='player_fake'){
						if(_status.event.player) game.kzol_playSkillAnimation(name,_status.event.player,true);
					}else if(animation.position=='player_avatar_fake'){
						if(_status.event.player) game.kzol_playSkillAnimation(name,_status.event.player.node.avatar,true);
					}else{
						game.kzol_playSkillAnimation(name);
					};
				};
			};
		};
		return node;
	};
	});
	game.kzol_playSkillAnimation=function(name,node,fake){
		var animation=lib.config.kzol_skillAnimation[name];
		if(animation==undefined) return;
		if(animation.time<=100000){
			if(animation.pause!=false&&!_status.paused2&&!_status.nopause){
				_status.kzol_onAnimationPause=true;
				game.pause2();
			};
			if(_status.kzol_onAnimation==undefined) _status.kzol_onAnimation=0;
			_status.kzol_onAnimation++;
		};
		var src;
		if(animation.image!=undefined) src='extension/扩展ol/animation_image/'+animation.image+'?'+new Date().getTime();
		if(fake==true){
			var top=node.offsetTop+node.offsetHeight/2;
			var left=node.offsetLeft+node.offsetWidth/2;
			if(node.parentNode!=undefined){
				top+=node.parentNode.offsetTop;
				left+=node.parentNode.offsetLeft;
				if(node.parentNode.parentNode!=undefined){
					top+=node.parentNode.parentNode.offsetTop;
					left+=node.parentNode.parentNode.offsetLeft;
					if(node.parentNode.parentNode.parentNode!=undefined){
						top+=node.parentNode.parentNode.parentNode.offsetTop;
						left+=node.parentNode.parentNode.parentNode.offsetLeft;
					};
				};
			};
		};
		var finish=function(){
			var interval;
			var div=ui.create.div();
			if(fake==true){
				ui.window.appendChild(div);
			}else{
				if(node==undefined||node==false){
					ui.window.appendChild(div);
				}else{
					node.appendChild(div);
				};
			};
			if(animation.style!=undefined){
				for(var i in animation.style){
					if(i=='innerHTML') continue;
					div.style[i]=animation.style[i];
				};
			};
			var judgeStyle=function(style){
				if(animation.style==undefined||(animation.style!=undefined&&animation.style[style]!=undefined)) return true;
				return false;
			};
			if(judgeStyle('innerHTML')) div.innerHTML=animation.style.innerHTML;
			if(judgeStyle('animation')==false&&judgeStyle('-webkit-animation')==false){
				if(animation.show=='fade'){
					div.style.animation='fadeShow .3s';
					div.style['-webkit-animation']='fadeShow .3s';
				}else if(animation.show=='up'){
					div.style.animation='fadelogIn .3s';
					div.style['-webkit-animation']='fadelogIn .3s';
				}else if(animation.show=='down'){
					div.style.animation='fadeInDown .3s';
					div.style['-webkit-animation']='fadeInDown .3s';
				}else if(animation.show=='left'){
					div.style.animation='fadeleftIn1 .3s';
					div.style['-webkit-animation']='fadeleftIn1 .3s';
				}else if(animation.show=='right'){
					div.style.animation='faderightIn .3s';
					div.style['-webkit-animation']='faderightIn .3s';
				};
			};
			if(judgeStyle('width')==false) div.style.width=animation.width;
			if(judgeStyle('height')==false) div.style.height=animation.height;
			if(judgeStyle('backgroundSize')==false&&judgeStyle('background-size')==false) div.style.backgroundSize=animation.backgroundSize;
			if(judgeStyle('opacity')==false) div.style.opacity=animation.opacity;
			if(judgeStyle('zIndex')==false&&judgeStyle('z-index')==false) div.style.zIndex=1001;
			if(judgeStyle('borderRadius')==false&&judgeStyle('border-radius')==false) div.style.borderRadius='5px';
			if(judgeStyle('box-shadow')==false&&judgeStyle('boxShadow')==false) div.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			if(judgeStyle('pointer-events')==false&&judgeStyle('pointerEvents')==false) div.style['pointer-events']='none';
			if(src!=undefined){
				if(animation.image.indexOf('.')!=-1){
					div.setBackgroundImage(src);
				}else{
					var type_frame1=0;
					var type_frame='.jpg';
					var num_frame=1;
					if(lib.kzol_animations[animation.image]!=undefined){
						type_frame=lib.kzol_animations[animation.image].type;
						num_frame=lib.kzol_animations[animation.image].num;
					};
					var folder_frame=lib.assetURL+'extension/扩展ol/animation_image/'+animation.image+'/';
					var div1=ui.create.div();
					div1.style.height='100%';
					div1.style.width='100%';
					div1.style.top='0px';
					div1.style.left='0px';
					div.appendChild(div1);
					if(lib.config['extension_扩展ol_tx_skillAnimation_canvas']!=true){
						interval=setInterval(function(){
							div1.innerHTML="<img width=100% height=100% src='"+folder_frame+
							(animation.qianzhui==undefined?'':animation.qianzhui)+
							(animation.liang==true?(type_frame1<10?'0'+type_frame1:type_frame1):type_frame1)+type_frame+"'></img>";
							type_frame1++;
							if(animation.jump_zhen==true&&type_frame1+1!=num_frame) type_frame1++;
							if(type_frame1>=num_frame){
								clearInterval(interval);
							};
						},animation.rate_zhen==undefined?45:(1000/animation.rate_zhen));
					}else{
						var canvas=document.createElement("canvas");
						canvas.width=div1.offsetWidth;
						canvas.height=div1.offsetHeight;
						div1.appendChild(canvas);
						var context=canvas.getContext("2d");
						var start;
						var imgs=[];
						for(var i=0;i<num_frame;i++){
							var img=new Image();
							img.src=folder_frame+(animation.qianzhui==undefined?'':animation.qianzhui)+
							(animation.liang==true?(i<10?'0'+i:i):i)+type_frame;
							if(i>=num_frame-1) img.kzol_final=true;
							img.onload=function(){
								imgs.push(this);
								if(this.kzol_final==true) start();
							};
							img.onerror=function(){
								if(this.kzol_final==true) start();
							};
						};
						start=function(){
							interval=setInterval(function(){
								var img=imgs[0];
								context.clearRect(0,0,img.width,img.height);
								context.drawImage(img,0,0,img.width,img.height,0,0,div1.offsetWidth,div1.offsetHeight);
								imgs.remove(img);
								if(animation.jump_zhen==true&&imgs[1]!=undefined) imgs.remove(imgs[1]);
								if(imgs.length==0) clearInterval(interval);
							},animation.rate_zhen==undefined?45:(1000/animation.rate_zhen));
						};
						
					};
				};
			};
			if(fake==true){
				div.style.top=(top-div.offsetHeight/2)+'px';
				div.style.left=(left-div.offsetWidth/2)+'px';
			}else{
				if(judgeStyle('top')==false) div.style.top='calc(50% - '+(div.offsetHeight/2)+'px)';
				if(judgeStyle('left')==false) div.style.left='calc(50% - '+(div.offsetWidth/2)+'px)';
			};
			if(animation.time<=100000){
				if(animation.fade==true){
					setTimeout(function(){
						div.hide();
					},animation.time-350);
				};
				setTimeout(function(){
					if(interval!=undefined) clearInterval(interval);
					if(fake==true){
						ui.window.removeChild(div);
					}else{
						if(node==undefined||node==false){
							ui.window.removeChild(div);
						}else{
							node.removeChild(div);
						};
					};
					_status.kzol_onAnimation--;
					if(_status.kzol_onAnimationPause==true&&_status.kzol_onAnimation==0){
						delete _status.kzol_onAnimationPause;
						game.resume2();
					};
				},animation.time);
			};
		};
		if(src!=undefined&&animation.image.indexOf('.')!=-1){
			var img=new Image();
			var src='extension/扩展ol/animation_image/'+animation.image+'?'+new Date().getTime();
			img.src=lib.assetURL+src;
			img.onload=function(){
				if(animation.delay!=undefined){
					setTimeout(finish,animation.delay);
				}else{
					finish();
				};
			};
			if(node==false){
				img.onerror=function(){
					game.say1('特效图片缺失');
				};
			};
		}else{
			if(animation.delay!=undefined){
				setTimeout(finish,animation.delay);
			}else{
				finish();
			};
		};
	};
	game.openskillAnimationEditor=function(){
		if(lib.config['extension_扩展ol_tx_skillAnimation_stop']!=false) game.pause2();
		var dialogs1={};
		var background=ui.create.dialog('hidden');
		background.style.height='calc(100%)';
		background.style.width='calc(100%)';
		background.style.left='0px';
		background.style.top='0px';
		ui.window.appendChild(background);
		dialogs1.background=background;
		
		var dialog=ui.create.dialog('hidden');
		dialog.classList.add('popped');
		dialog.classList.add('static');
		dialog.style.animation='fadeInDown .3s';
		dialog.style['-webkit-animation']='fadeInDown .3s';
		dialog.style.height='calc(90%)';
		dialog.style.width='830px';
		dialog.style.top='calc(5%)';
		dialog.style.left='calc(50% - 415px)';
		dialog.style['overflow-x']='hidden';
		dialog.style['overflow-y']='scroll';
		ui.window.appendChild(dialog);
		lib.setScroll(dialog);
		dialogs1.dialog=dialog;
		
		var update;
		var func=function(name){
			var div=ui.create.div('.menu');
			if(lib.config['extension_扩展ol_tx_skillAnimation_zd1']==true) div.style.transition='all 0s';
			div.style.width='400px';
			var config_zd=false;
			if(lib.config['extension_扩展ol_tx_skillAnimation_zd']!=undefined) config_zd=lib.config['extension_扩展ol_tx_skillAnimation_zd'];
			if(config_zd==true){
				div.style.height='40px';
			}else{
				div.style.height='150px';
			};
			div.style.top='10px';
			div.style.left='0px';
			div.style.position='relative';
			//div.style['cursor']='pointer';
			div.style['margin']='3px';
			if(name==undefined){
				//div.style['margin-bottom']='10px';
				var div1=ui.create.div();
				div1.style.width='100%';
				div1.style.height='100%';
				div1.style.top='0px';
				div1.style.left='0px';
				div1.style['cursor']='pointer';
				if(config_zd==true){
					div1.style['font-size']='35px';
					div1.style['line-height']='40px';
				}else{
					div1.style['font-size']='65px';
					div1.style['line-height']='150px';
				};
				div1.style['text-align']='center';
				div1.style['font-family']="'STXinwei','xinwei'";
				div1.innerHTML='新建特效';
				div1.onclick=enter;
				div1.style.transition='opacity 0.5s';
				div1.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
					this.style.transform='scale(0.95)';
				});
				div1.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
					this.style.transform='';
				});
				div.appendChild(div1);
			}else{
				var animation=lib.config.kzol_skillAnimation[name];
				//div.style['margin-bottom']='3px';
				var name_div=ui.create.div('.menu');
				name_div.style.width='390px';
				name_div.style.height='30px';
				name_div.style.top='5px';
				name_div.style.left='5px';
				name_div.style.cursor='pointer';
				name_div.style['white-space']='nowrap';
				name_div.style['font-size']='25px';
				name_div.style['text-align']='center';
				name_div.style['font-family']='shousha';
				name_div.style['line-height']='30px';
				name_div.style['white-space']='nowrap';
				if(animation.forbid==true){
					name_div.innerHTML=name+'&nbsp&nbsp|&nbsp禁用';
				}else{
					name_div.innerHTML=name;
				};
				div.appendChild(name_div);
				
				var linkSkill_div=ui.create.div('.menu');
				linkSkill_div.style.width='275px';
				linkSkill_div.style.height='105px';
				linkSkill_div.style.top='40px';
				linkSkill_div.style.left='5px';
				if(config_zd==true) linkSkill_div.style.display='none';
				div.appendChild(linkSkill_div);
				var linkSkill_title_div=ui.create.div('.menu');
				linkSkill_title_div.style.width='100%';
				linkSkill_title_div.style.height='22.5px';
				linkSkill_title_div.style.top='0px';
				linkSkill_title_div.style.left='0px';
				linkSkill_title_div.style['white-space']='nowrap';
				linkSkill_title_div.style['font-size']='18px';
				linkSkill_title_div.style['text-align']='center';
				linkSkill_title_div.style['font-family']='shousha';
				linkSkill_title_div.style['line-height']='22.5px';
				linkSkill_title_div.style['box-shadow']='none';
				linkSkill_title_div.style['background-image']='none';
				linkSkill_title_div.innerHTML='绑定技能:&nbsp<input type="text" value="" style="width:120px;"></input>&nbsp<button style="width:45px;font-family:shousha;cursor:pointer;">绑定</button>';
				linkSkill_div.appendChild(linkSkill_title_div);
				var linkSkill_info_div=ui.create.div('.menu');
				linkSkill_info_div.style.width='100%';
				linkSkill_info_div.style.height='30px';
				linkSkill_info_div.style.top='22.5px';
				linkSkill_info_div.style.left='0px';
				linkSkill_info_div.style['box-shadow']='none';
				linkSkill_info_div.style['background-image']='none';
				linkSkill_info_div.style['overflow-x']='hidden';
				linkSkill_info_div.style['overflow-y']='scroll';
				linkSkill_div.appendChild(linkSkill_info_div);
				lib.setScroll(linkSkill_info_div);
				linkSkill_info_div.addEventListener('mousewheel',function(e){
					e.stopPropagation();
				});
				var update_linkSkill=function(){
					for(var j=0;j<linkSkill_info_div.childNodes.length;j++){
						linkSkill_info_div.removeChild(linkSkill_info_div.childNodes[j]);
						j--;
					};
					var skills=animation.skills;
					for(var i=0;i<skills.length;i++){
						var skills_div=ui.create.div('.menu');
						skills_div.style.height='20px';
						skills_div.style.width=(get.translation(skills[i]).length*15+4)+'px';
						//skills_div.style.top='3px';
						skills_div.style.position='relative';
						skills_div.style.margin='5px';
						skills_div.style.borderRadius='6px';
						skills_div.style['font-size']='15px';
						skills_div.style['text-align']='center';
						skills_div.style['font-family']='shousha';
						skills_div.style['line-height']='20px';
						skills_div.style['cursor']='pointer';
						skills_div.link=skills[i];
						skills_div.innerHTML=get.translation(skills[i]);
						skills_div.onclick=function(){
							if(confirm('是否移除绑定技能【'+get.translation(this.link)+'】？')){
								lib.config.kzol_skillAnimation[name].skills.remove(this.link);
								game.saveConfig('kzol_skillAnimation',lib.config.kzol_skillAnimation);
								linkSkill_info_div.removeChild(this);
								game.say1('移除成功');
							};
						};
						linkSkill_info_div.appendChild(skills_div);
					};
				};
				update_linkSkill();
				var add_func=function(){
					var skill=linkSkill_title_div.querySelector('input').value;
					if(skill==undefined||skill.length==0){
						game.say1('未输入技能名称');
						return;
					};
					if(skill!='gameStart'&&skill!='damage'&&lib.skill[skill]==undefined){
						if(!confirm('技能库中无技能【'+get.translation(skill)+'】，是否继续？')){
							return;
						};
					};
					if(lib.config.kzol_skillAnimation[name].skills.contains(skill)){
						game.say1('该技能已被绑定');
						return;
					};
					lib.config.kzol_skillAnimation[name].skills.push(skill);
					game.saveConfig('kzol_skillAnimation',lib.config.kzol_skillAnimation);
					linkSkill_title_div.querySelector('input').value='';
					game.say1('绑定成功');
					update_linkSkill();
				};
				linkSkill_title_div.querySelector('input').onkeydown=function(e){
					e.stopPropagation();
					if(e.keyCode==13){
						add_func();
					};
				};
				linkSkill_title_div.querySelector('button').onclick=add_func;
				var linkCard_title_div=ui.create.div('.menu');
				linkCard_title_div.style.width='100%';
				linkCard_title_div.style.height='22.5px';
				linkCard_title_div.style.top='52.5px';
				linkCard_title_div.style.left='0px';
				linkCard_title_div.style['white-space']='nowrap';
				linkCard_title_div.style['font-size']='18px';
				linkCard_title_div.style['text-align']='center';
				linkCard_title_div.style['font-family']='shousha';
				linkCard_title_div.style['line-height']='22.5px';
				linkCard_title_div.style['box-shadow']='none';
				linkCard_title_div.style['background-image']='none';
				linkCard_title_div.innerHTML='绑定卡牌:&nbsp<input type="text" value="" style="width:120px;"></input>&nbsp<button style="width:45px;font-family:shousha;cursor:pointer;">绑定</button>';
				linkSkill_div.appendChild(linkCard_title_div);
				var linkCard_info_div=ui.create.div('.menu');
				linkCard_info_div.style.width='100%';
				linkCard_info_div.style.height='30px';
				linkCard_info_div.style.top='75px';
				linkCard_info_div.style.left='0px';
				linkCard_info_div.style['box-shadow']='none';
				linkCard_info_div.style['background-image']='none';
				linkCard_info_div.style['overflow-x']='hidden';
				linkCard_info_div.style['overflow-y']='scroll';
				linkSkill_div.appendChild(linkCard_info_div);
				lib.setScroll(linkCard_info_div);
				linkCard_info_div.addEventListener('mousewheel',function(e){
					e.stopPropagation();
				});
				var update_linkCard=function(){
					for(var j=0;j<linkCard_info_div.childNodes.length;j++){
						linkCard_info_div.removeChild(linkCard_info_div.childNodes[j]);
						j--;
					};
					var cards=animation.cards;
					for(var i=0;i<cards.length;i++){
						var cards_div=ui.create.div('.menu');
						cards_div.style.height='20px';
						//cards_div.style.width=(get.translation(cards[i]).length*15+4)+'px';
						//cards_div.style.top='3px';
						cards_div.style.position='relative';
						cards_div.style.margin='5px';
						cards_div.style.borderRadius='6px';
						cards_div.style['font-size']='15px';
						cards_div.style['text-align']='center';
						cards_div.style['font-family']='shousha';
						cards_div.style['line-height']='20px';
						cards_div.style['cursor']='pointer';
						cards_div.link=cards[i];
						if(typeof cards[i]=='object'){
							var str='';
							var str1='';
							if(cards[i].name!=undefined) str1+=' 名称:'+cards[i].name;
							if(cards[i].nature!=undefined) str+=' 属性:'+cards[i].nature;
							if(cards[i].color!=undefined) str+=' 颜色:'+cards[i].color;
							if(cards[i].event!=undefined) str+=' 时机:'+cards[i].event;
							if(cards[i].bool!=undefined) str+=' 结果:'+cards[i].bool;
							cards_div.innerHTML='<a title="'+str1+str+'">'+(cards[i].name!=undefined?get.translation(cards[i].name):'')+str+'</a>';
						}else{
							cards_div.innerHTML=get.translation(cards[i]);
						};
						cards_div.onclick=function(){
							var card=this.link;
							var str='';
							if(typeof card=='object'){
								if(card.name!=undefined) str+=get.translation(card.name);
								if(card.nature!=undefined) str+=' 属性:'+card.nature;
								if(card.color!=undefined) str+=' 颜色:'+card.color;
								if(card.event!=undefined) str+=' 时机:'+card.event;
								if(card.bool!=undefined) str+=' 结果:'+card.bool;
							}else{
								str=get.translation(card);
							};
							if(confirm('是否移除绑定卡牌【'+str+'】？')){
								lib.config.kzol_skillAnimation[name].cards.remove(this.link);
								game.saveConfig('kzol_skillAnimation',lib.config.kzol_skillAnimation);
								linkCard_info_div.removeChild(this);
								game.say1('移除成功');
							};
						};
						linkCard_info_div.appendChild(cards_div);
					};
				};
				update_linkCard();
				var add_func1=function(){
					var card=linkCard_title_div.querySelector('input').value;
					if(card==undefined||card.length==0){
						game.say1('未输入卡牌名称');
						return;
					};
					try{
						card=JSON.parse(card);
					}catch(e){};
					/*{"name":"sha","nature":"fire"} 绑定带属性的卡牌*/
					if(typeof card=='object'){
						if(card.name!=undefined&&lib.card[card.name]==undefined){
							if(!confirm('卡牌库中无卡牌【'+get.translation(card)+'】，是否继续？')){
								return;
							};
						};
						var bool=false;
						for(var i in lib.config.kzol_skillAnimation[name].cards){
							var card1=lib.config.kzol_skillAnimation[name].cards[i];
							if(typeof card1=='object'){
								if(card.name==card1.name&&card.nature==card1.nature&&card.color==card1.color&&card.event==card1.event&&card.bool==card1.bool) bool=true;
							};
						};
						if(bool){
							game.say1('该卡牌已被绑定');
							return;
						};
					}else{
						if(lib.card[card]==undefined){
							if(!confirm('卡牌库中无卡牌【'+get.translation(card)+'】，是否继续？')){
								return;
							};
						};
						if(lib.config.kzol_skillAnimation[name].cards.contains(card)){
							game.say1('该卡牌已被绑定');
							return;
						};
					};
					lib.config.kzol_skillAnimation[name].cards.push(card);
					game.saveConfig('kzol_skillAnimation',lib.config.kzol_skillAnimation);
					linkCard_title_div.querySelector('input').value='';
					game.say1('绑定成功');
					update_linkCard();
				};
				linkCard_title_div.querySelector('input').onkeydown=function(e){
					e.stopPropagation();
					if(e.keyCode==13){
						add_func1();
					};
				};
				linkCard_title_div.querySelector('button').onclick=add_func1;
				
				var edit_div=ui.create.div('.menu');
				edit_div.style.width='110px';
				edit_div.style.height='30px';
				edit_div.style.top='40px';
				edit_div.style.right='5px';
				edit_div.style['white-space']='nowrap';
				edit_div.style['font-size']='22px';
				edit_div.style['text-align']='center';
				edit_div.style['font-family']='shousha';
				edit_div.style['line-height']='30px';
				edit_div.style['cursor']='pointer';
				edit_div.innerHTML='编辑';
				if(config_zd==true) edit_div.style.display='none';
				div.appendChild(edit_div);
				edit_div.style.transition='opacity 0.5s';
				edit_div.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
					this.style.transform='scale(0.95)';
				});
				edit_div.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
					this.style.transform='';
				});
				edit_div.link=name;
				edit_div.onclick=enter;
				
				var show_div=ui.create.div('.menu');
				show_div.style.width='110px';
				show_div.style.height='30px';
				show_div.style.top='77.5px';
				show_div.style.right='5px';
				show_div.style['white-space']='nowrap';
				show_div.style['font-size']='22px';
				show_div.style['text-align']='center';
				show_div.style['font-family']='shousha';
				show_div.style['line-height']='30px';
				show_div.style['cursor']='pointer';
				show_div.innerHTML='预览';
				if(config_zd==true) show_div.style.display='none';
				div.appendChild(show_div);
				show_div.style.transition='opacity 0.5s';
				show_div.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
					this.style.transform='scale(0.95)';
				});
				show_div.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
					this.style.transform='';
				});
				show_div.link=name;
				show_div.onclick=function(){
					game.kzol_playSkillAnimation(this.link,false);
				};
				
				var delete_div=ui.create.div('.menu');
				delete_div.style.width='110px';
				delete_div.style.height='30px';
				delete_div.style.top='115px';
				delete_div.style.right='5px';
				delete_div.style['white-space']='nowrap';
				delete_div.style['font-size']='22px';
				delete_div.style['text-align']='center';
				delete_div.style['font-family']='shousha';
				delete_div.style['line-height']='30px';
				delete_div.style['cursor']='pointer';
				delete_div.innerHTML='删除';
				if(config_zd==true) delete_div.style.display='none';
				div.appendChild(delete_div);
				delete_div.style.transition='opacity 0.5s';
				delete_div.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
					this.style.transform='scale(0.95)';
				});
				delete_div.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
					this.style.transform='';
				});
				delete_div.link=name;
				delete_div.onclick=function(){
					if(confirm('是否删除特效-'+this.link+'？')){
						delete lib.config.kzol_skillAnimation[this.link];
						game.saveConfig('kzol_skillAnimation',lib.config.kzol_skillAnimation);
						game.say1('删除成功');
						update();
					};
				};
				if(config_zd==true) name_div.link_zd=true;
				name_div.onclick=function(){
					if(this.link_zd==true){
						div.style.height='150px';
						linkSkill_div.style.display='';
						edit_div.style.display='';
						show_div.style.display='';
						delete_div.style.display='';
						delete this.link_zd;
					}else{
						var bool=false;
						var str='禁用特效-'+name+'成功';
						if(lib.config.kzol_skillAnimation[name].forbid==true){
							bool=true;
							str='解除'+str;
						};
						this.innerHTML=name+(bool==true?'':'&nbsp&nbsp|&nbsp禁用');
						lib.config.kzol_skillAnimation[name].forbid=bool==true?false:true;
						game.saveConfig('kzol_skillAnimation',lib.config.kzol_skillAnimation);
						game.say1(str);
						if(lib.config.kzol_skillAnimation[name].forbid!=true) game.kzol_loadSkillAnimationImg();
					};
				};
			};
			dialog.appendChild(div);
		};
		update=function(){
			for(var i=0;i<dialog.childNodes.length;i++){
				dialog.removeChild(dialog.childNodes[i]);
				i--;
			};
			for(var i in lib.config.kzol_skillAnimation){
				var animation=lib.config.kzol_skillAnimation[i];
				func(i);
			};
			func();
		};
		var enter=function(){
			var onEdit=false;
			for(var i in dialogs1){
				dialogs1[i].style.display='none';
			};
			var dialogs2={};
			var name=this.link;
			var animation=lib.config.kzol_skillAnimation[name];
			var background=ui.create.dialog('hidden');
			background.style.height='calc(100%)';
			background.style.width='calc(100%)';
			background.style.left='0px';
			background.style.top='0px';
			ui.window.appendChild(background);
			dialogs2.background=background;
			
			var dialog=ui.create.dialog('hidden');
			dialog.classList.add('popped');
			dialog.classList.add('static');
			dialog.style.animation='fadeShow .3s';
			dialog.style['-webkit-animation']='fadeShow .3s';
			dialog.style.height='400px';
			dialog.style.width='802.5px';
			dialog.style.left='calc(50% - 401.25px)';
			dialog.style.top='calc(50% - 200px)';
			ui.window.appendChild(dialog);
			dialogs2.dialog=dialog;
			
			var edit=ui.create.div('.menu');
			edit.style.width='782.5px';
			edit.style.height='380px';
			edit.style.left='10px';
			edit.style.top='10px';
			edit.style['text-align']='left';
			edit.style.borderRadius='8px';
			dialog.appendChild(edit);
			
			var avatar=ui.create.div('.menu');
			avatar.style.height='310px';
			avatar.style.width='530px';
			avatar.style.left='240px';
			avatar.style.top='10px';
			avatar.style.backgroundSize='cover';
			avatar.kzol_saveImg=avatar.style.backgroundImage;
			if(name!=undefined&&animation!=undefined&&animation.image!=undefined){
				avatar.setBackgroundImage("extension/扩展ol/animation_image/"+animation.image);
				avatar.image1=animation.image;
			};
			avatar.kzol_saveImg1=avatar.style.backgroundImage;
			var avatar_info1=ui.create.div();
			avatar_info1.style.height='100%';
			avatar_info1.style.width='100%';
			avatar_info1.style.top='0px';
			avatar_info1.style.left='0px';
			avatar_info1.style['white-space']='nowrap';
			avatar_info1.style['font-size']='40px';
			avatar_info1.style['text-align']='center';
			avatar_info1.style['font-family']='shousha';
			avatar_info1.style['line-height']='310px';
			avatar_info1.innerHTML='<span style="font-weight:600;">点击选择图片</span>';
			avatar_info1.style.display=avatar.image1==undefined?'':'none';
			avatar.appendChild(avatar_info1);
			var input=document.createElement('input');
			input.type='file';
			input.accept='image/*';
			input.className='fileinput';
			input.onchange=function(){
				var fileToLoad=input.files[0];
				if(fileToLoad){
					var fileReader=new FileReader();
					fileReader.onload=function(fileLoadedEvent){
						var data=fileLoadedEvent.target.result;
						avatar_info1.style.display='none';
						avatar.style.backgroundImage='url('+data+')';
						avatar.kzol_saveImg1=avatar.style.backgroundImage;
						avatar.image64=data;
						avatar.classList.add('inited');
						avatar.image1=fileToLoad.name;
						avatar.files=input.files;
					};
					fileReader.readAsDataURL(fileToLoad, "UTF-8");
				};
			};
			avatar.appendChild(input);
			var avatar_title=ui.create.div();
			avatar_title.style.height='25px';
			avatar_title.style.width='100%';
			avatar_title.style.left='0px';
			avatar_title.style.top='0px';
			avatar_title.style.display='none';
			avatar_title.style['white-space']='nowrap';
			avatar_title.style['font-size']='20px';
			avatar_title.style['text-align']='left';
			avatar_title.style['font-family']="'STXinwei','xinwei'";
			avatar_title.style['line-height']='25px';
			avatar_title.innerHTML='<span style="font-weight:600;">无名杀根目录/extension/扩展ol/animation_image/</span>';
			avatar.appendChild(avatar_title);
			var avatar_info=ui.create.div();
			avatar_info.style.height='calc(100% - 65px)';
			avatar_info.style.width='100%';
			avatar_info.style.left='0px';
			avatar_info.style.top='25px';
			avatar_info.style.display='none';
			avatar_info.style['text-align']='left';
			avatar_info.style['overflow-x']='hidden';
			avatar_info.style['overflow-y']='scroll';
			avatar.appendChild(avatar_info);
			lib.setScroll(avatar_info);
			if(lib.config.kzol_skillAnimation_createFiles==true){
				game.getFileList('extension/扩展ol/animation_image',function(folders,files){
					for(var i=0;i<folders.length;i++){
						var folder=folders[i];
						var div_folder=ui.create.div('.menu');
						//div_folder.style.top='5px';
						div_folder.style.height='20px';
						div_folder.style.width='calc(25% - 4px)';
						div_folder.style.margin='2px';
						div_folder.style.position='relative';
						div_folder.style['white-space']='nowrap';
						div_folder.style['font-size']='17px';
						div_folder.style['text-align']='center';
						div_folder.style['font-family']='shousha';
						div_folder.style['line-height']='20px';
						div_folder.style['cursor']='pointer';
						div_folder.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
						div_folder.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
						if(name!=undefined&&animation!=undefined&&animation.image==folder) div_folder.style.backgroundColor="#E00000";
						div_folder.style.borderRadius='3px';
						div_folder.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;font-weight:300;">'+folder+'</span>';
						div_folder.link=folder;
						avatar_info.appendChild(div_folder);
						div_folder.onclick=function(){
							for(var i=0;i<avatar_info.childNodes.length;i++){
								avatar_info.childNodes[i].style.backgroundColor='';
							};
							this.style.backgroundColor="#E00000";
							avatar.image1=this.link;
							avatar.style.backgroundImage=avatar.kzol_saveImg;
							avatar.kzol_saveImg1=avatar.style.backgroundImage;
						};
					};
				});
			}else{
				avatar_info.style['white-space']='nowrap';
				avatar_info.style['font-size']='40px';
				avatar_info.style['text-align']='center';
				avatar_info.style['font-family']='shousha';
				avatar_info.style['line-height']='245px';
				avatar_info.innerHTML='<span style="font-weight:600;">未通过无名杀创建此文件夹</span>';
			};
			var xlzt=ui.create.div('.menu');
			xlzt.style.height='40px';
			xlzt.style.width='190px';
			xlzt.style.left='5px';
			xlzt.style.bottom='5px';
			xlzt.style['white-space']='nowrap';
			xlzt.style['font-size']='35px';
			xlzt.style['text-align']='center';
			xlzt.style['font-family']="'STXinwei','xinwei'";
			xlzt.style['line-height']='40px';
			xlzt.style['cursor']='pointer';
			var judgeType=function(){
				if(name==undefined) return true;
				if(animation==undefined) return true;
				if(animation.image==undefined) return true;
				if(animation.image.indexOf('.')!=-1) return true;
				return false;
			};
			if(judgeType()){
				xlzt.innerHTML='序列帧动画';
			}else{
				avatar.style.backgroundImage=avatar.kzol_saveImg;
				xlzt.innerHTML='图片动画';
				avatar_info1.style.display='none';
				input.style.display='none';
				avatar_title.style.display='';
				avatar_info.style.display='';
			};
			xlzt.onclick=function(){
				if(this.innerHTML=='图片动画'){
					//if(confirm('是否切换使用图片动画？')){
						avatar.style.backgroundImage=avatar.kzol_saveImg1;
						this.innerHTML='序列帧动画';
						avatar_title.style.display='none';
						avatar_info.style.display='none';
						avatar_info1.style.display='';
						input.style.display='';
					//};
				}else{
					//if(confirm('是否切换使用序列帧动画？')){
						avatar.style.backgroundImage=avatar.kzol_saveImg;
						this.innerHTML='图片动画';
						avatar_info1.style.display='none';
						input.style.display='none';
						avatar_title.style.display='';
						avatar_info.style.display='';
					//};
				};
			};
			xlzt.style.transition='opacity 0.5s';
			xlzt.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
				this.style.transform='scale(0.95)';
			});
			xlzt.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
				this.style.transform='';
			});
			avatar.appendChild(xlzt);
			var clear=ui.create.div('.menu');
			clear.style.height='40px';
			clear.style.width='160px';
			clear.style.right='5px';
			clear.style.bottom='5px';
			clear.style['white-space']='nowrap';
			clear.style['font-size']='35px';
			clear.style['text-align']='center';
			clear.style['font-family']="'STXinwei','xinwei'";
			clear.style['line-height']='40px';
			clear.style['cursor']='pointer';
			clear.innerHTML='清除图片';
			clear.style.transition='opacity 0.5s';
			clear.onclick=function(){
				if(confirm('是否清除特效图片？')){
					avatar.style.backgroundImage=avatar.kzol_saveImg;
					avatar.kzol_saveImg1=avatar.style.backgroundImage;
					for(var i=0;i<avatar_info.childNodes.length;i++){
						avatar_info.childNodes[i].style.backgroundColor='';
					};
					delete avatar.image1;
					if(xlzt.innerHTML=='序列帧动画') avatar_info1.style.display='';
				};
			};
			clear.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
				this.style.transform='scale(0.95)';
			});
			clear.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
				this.style.transform='';
			});
			avatar.appendChild(clear);
			edit.appendChild(avatar);
			
			var name1=ui.create.div('.menu');
			name1.style.height='30px';
			name1.style.width='210px';
			name1.style.left='12.5px';
			name1.style.top='10px';
			name1.style['white-space']='nowrap';
			name1.style['font-size']='15px';
			name1.style['text-align']='center';
			name1.style['font-family']="'STXinwei','xinwei'";
			name1.style['line-height']='30px';
			edit.appendChild(name1);
			var str='';
			if(name!=undefined) str=name;
			name1.innerHTML='特效名称：<input type="text" value="'+str+'" style="width:120px"></input>';
			
			var time=ui.create.div('.menu');
			time.style.height='30px';
			time.style.width='210px';
			time.style.left='12.5px';
			time.style.top='50px';
			time.style['white-space']='nowrap';
			time.style['font-size']='15px';
			time.style['text-align']='center';
			time.style['font-family']="'STXinwei','xinwei'";
			time.style['line-height']='30px';
			edit.appendChild(time);
			var str=1000;
			if(name!=undefined&&animation!=undefined) str=animation.time;
			time.innerHTML='播放时间：<input type="text" value='+str+' style="width:120px"></input>';
			
			var position=ui.create.div('.menu');
			position.style.height='30px';
			position.style.width='210px';
			position.style.left='12.5px';
			position.style.top='90px';
			position.style['white-space']='nowrap';
			position.style['font-size']='15px';
			position.style['text-align']='center';
			position.style['font-family']="'STXinwei','xinwei'";
			position.style['line-height']='30px';
			edit.appendChild(position);
			var str='screen';
			if(name!=undefined&&animation!=undefined) str=animation.position;
			position.innerHTML='区域位置：<select size="1" style="width:125px">'+
			'<option value="info1">-----------通用------------</option>'+
			'<option value="screen">屏幕中心（默认）</option>'+
			'<option value="player">使用者中心</option>'+
			'<option value="target">目标中心</option>'+
			'<option value="player_avatar">使用者头像中心</option>'+
			'<option value="target_avatar">目标头像中心</option>'+
			'<option value="player_fake">使用者中心(伪)</option>'+
			'<option value="target_fake">目标中心(伪)</option>'+
			'<option value="player_avatar_fake">使用者头像中心(伪)</option>'+
			'<option value="target_avatar_fake">目标头像中心(伪)</option>'+
			'<option value="info2">--------绑定卡牌---------</option>'+
			'<option value="player1">卡牌中心</option>'+
			'</select>';
			for(var i=0;i<position.querySelector('select').options.length;i++){
				if(position.querySelector('select').options[i].value==str) position.querySelector('select').selectedIndex=i;
			};
			
			var width=ui.create.div('.menu');
			width.style.height='30px';
			width.style.width='100px';
			width.style.left='122.5px';
			width.style.top='130px';
			width.style['white-space']='nowrap';
			width.style['font-size']='15px';
			width.style['text-align']='center';
			width.style['font-family']="'STXinwei','xinwei'";
			width.style['line-height']='30px';
			edit.appendChild(width);
			var str='100%';
			if(name!=undefined&&animation!=undefined) str=animation.width;
			width.innerHTML='宽：<input type="text" value="'+str+'" style="width:55px"></input>';
			
			var height=ui.create.div('.menu');
			height.style.height='30px';
			height.style.width='100px';
			height.style.left='12.5px';
			height.style.top='130px';
			height.style['white-space']='nowrap';
			height.style['font-size']='15px';
			height.style['text-align']='center';
			height.style['font-family']="'STXinwei','xinwei'";
			height.style['line-height']='30px';
			edit.appendChild(height);
			var str='100%';
			if(name!=undefined&&animation!=undefined) str=animation.height;
			height.innerHTML='长：<input type="text" value="'+str+'" style="width:55px"></input>';
			
			var backgroundSize=ui.create.div('.menu');
			backgroundSize.style.height='30px';
			backgroundSize.style.width='210px';
			backgroundSize.style.left='12.5px';
			backgroundSize.style.top='170px';
			backgroundSize.style['white-space']='nowrap';
			backgroundSize.style['font-size']='15px';
			backgroundSize.style['text-align']='center';
			backgroundSize.style['font-family']="'STXinwei','xinwei'";
			backgroundSize.style['line-height']='30px';
			edit.appendChild(backgroundSize);
			var str='100% 100%';
			if(name!=undefined&&animation!=undefined) str=animation.backgroundSize;
			backgroundSize.innerHTML='图片大小：<select size="1" style="width:125px">'+
			'<option value="100% 100%">全图</option>'+
			'<option value="cover">覆盖</option>'+
			'</select>';
			for(var i=0;i<backgroundSize.querySelector('select').options.length;i++){
				if(backgroundSize.querySelector('select').options[i].value==str) backgroundSize.querySelector('select').selectedIndex=i;
			};
			
			var opacity=ui.create.div('.menu');
			opacity.style.height='30px';
			opacity.style.width='210px';
			opacity.style.left='12.5px';
			opacity.style.top='210px';
			opacity.style['white-space']='nowrap';
			opacity.style['font-size']='15px';
			opacity.style['text-align']='center';
			opacity.style['font-family']="'STXinwei','xinwei'";
			opacity.style['line-height']='30px';
			edit.appendChild(opacity);
			var str=1;
			if(name!=undefined&&animation!=undefined) str=animation.opacity;
			opacity.innerHTML='区域透明度：<input type="text" value='+str+' style="width:105px"></input>';
			
			var show=ui.create.div('.menu');
			show.style.height='30px';
			show.style.width='210px';
			show.style.left='12.5px';
			show.style.top='250px';
			show.style['white-space']='nowrap';
			show.style['font-size']='15px';
			show.style['text-align']='center';
			show.style['font-family']="'STXinwei','xinwei'";
			show.style['line-height']='30px';
			edit.appendChild(show);
			var str='无';
			if(name!=undefined&&animation!=undefined) str=animation.show;
			show.innerHTML='出现方式：<select size="1" style="width:125px">'+
			'<option value="none">无</option>'+
			'<option value="fade">渐显</option>'+
			'<option value="up">上滑</option>'+
			'<option value="down">下滑</option>'+
			'<option value="left">左滑</option>'+
			'<option value="right">右滑</option>'+
			'</select>';
			for(var i=0;i<show.querySelector('select').options.length;i++){
				if(show.querySelector('select').options[i].value==str) show.querySelector('select').selectedIndex=i;
			};
			
			var fade=ui.create.div('.menu');
			fade.style.height='30px';
			fade.style.width='100px';
			fade.style.left='12.5px';
			fade.style.top='290px';
			fade.style['white-space']='nowrap';
			fade.style['font-size']='15px';
			fade.style['text-align']='center';
			fade.style['font-family']="'STXinwei','xinwei'";
			fade.style['line-height']='30px';
			edit.appendChild(fade);
			var bool=false;
			if(name!=undefined&&animation!=undefined&&animation.fade!=undefined) bool=animation.fade;
			fade.innerHTML='关闭时渐隐&nbsp&nbsp<div style="top:2.5px;right:1px;"><input type="checkbox" value="true" style="cursor:pointer;"></input></div>';
			fade.querySelector('input').checked=bool;
			
			var pause=ui.create.div('.menu');
			pause.style.height='30px';
			pause.style.width='100px';
			pause.style.left='122.5px';
			pause.style.top='290px';
			pause.style['white-space']='nowrap';
			pause.style['font-size']='15px';
			pause.style['text-align']='center';
			pause.style['font-family']="'STXinwei','xinwei'";
			pause.style['line-height']='30px';
			edit.appendChild(pause);
			var bool=true;
			if(name!=undefined&&animation!=undefined) bool=animation.pause==undefined?true:animation.pause;
			pause.innerHTML='播放时暂停&nbsp&nbsp<div style="top:2.5px;right:1px;"><input type="checkbox" value="true" style="cursor:pointer;"></input></div>';
			pause.querySelector('input').checked=bool;
			
			var rate_zhen=ui.create.div('.menu');
			rate_zhen.style.height='30px';
			rate_zhen.style.width='100px';
			rate_zhen.style.left='12.5px';
			rate_zhen.style.top='10px';
			rate_zhen.style['white-space']='nowrap';
			rate_zhen.style['font-size']='15px';
			rate_zhen.style['text-align']='center';
			rate_zhen.style['font-family']="'STXinwei','xinwei'";
			rate_zhen.style['line-height']='30px';
			rate_zhen.style.display='none';
			edit.appendChild(rate_zhen);
			var str=24;
			if(name!=undefined&&animation!=undefined&&animation.rate_zhen!=undefined) str=animation.rate_zhen;
			rate_zhen.innerHTML='帧率：<input type="text" value='+str+' style="width:45px"></input>';
			
			var jump_zhen=ui.create.div('.menu');
			jump_zhen.style.height='30px';
			jump_zhen.style.width='100px';
			jump_zhen.style.left='122.5px';
			jump_zhen.style.top='10px';
			jump_zhen.style['white-space']='nowrap';
			jump_zhen.style['font-size']='15px';
			jump_zhen.style['text-align']='center';
			jump_zhen.style['font-family']="'STXinwei','xinwei'";
			jump_zhen.style['line-height']='30px';
			jump_zhen.style.display='none';
			edit.appendChild(jump_zhen);
			var bool=false;
			if(name!=undefined&&animation!=undefined) bool=animation.jump_zhen==undefined?false:animation.jump_zhen;
			jump_zhen.innerHTML='播放时跳帧&nbsp&nbsp<div style="top:2.5px;right:1px;"><input type="checkbox" value="true" style="cursor:pointer;"></input></div>';
			jump_zhen.querySelector('input').checked=bool;
			
			var qianzhui=ui.create.div('.menu');
			qianzhui.style.height='30px';
			qianzhui.style.width='210px';
			qianzhui.style.left='12.5px';
			qianzhui.style.top='50px';
			qianzhui.style['white-space']='nowrap';
			qianzhui.style['font-size']='15px';
			qianzhui.style['text-align']='center';
			qianzhui.style['font-family']="'STXinwei','xinwei'";
			qianzhui.style['line-height']='30px';
			qianzhui.style.display='none';
			edit.appendChild(qianzhui);
			var str='';
			if(name!=undefined&&animation!=undefined&&animation.qianzhui!=undefined) str=animation.qianzhui;
			qianzhui.innerHTML='序列帧前缀：<input type="text" value="'+str+'" style="width:105px"></input>';
			
			var liang=ui.create.div('.menu');
			liang.style.height='30px';
			liang.style.width='210px';
			liang.style.left='12.5px';
			liang.style.top='90px';
			liang.style['white-space']='nowrap';
			liang.style['font-size']='15px';
			liang.style['text-align']='center';
			liang.style['font-family']="'STXinwei','xinwei'";
			liang.style['line-height']='30px';
			liang.style.display='none';
			edit.appendChild(liang);
			var bool=false;
			if(name!=undefined&&animation!=undefined) bool=animation.liang==undefined?false:animation.liang;
			liang.innerHTML='序列帧序列编号总是两位数&nbsp&nbsp<div style="top:2.5px;right:1px;"><input type="checkbox" value="true" style="cursor:pointer;"></input></div>';
			liang.querySelector('input').checked=bool;
			
			var delay=ui.create.div('.menu');
			delay.style.height='30px';
			delay.style.width='210px';
			delay.style.left='12.5px';
			delay.style.top='130px';
			delay.style['white-space']='nowrap';
			delay.style['font-size']='15px';
			delay.style['text-align']='center';
			delay.style['font-family']="'STXinwei','xinwei'";
			delay.style['line-height']='30px';
			delay.style.display='none';
			edit.appendChild(delay);
			var str=1;
			if(name!=undefined&&animation!=undefined&&animation.delay!=undefined) str=animation.delay;
			delay.innerHTML='播放前延时：<input type="text" value='+str+' style="width:105px"></input>';
			
			var moreConfig=ui.create.div('.menu');
			moreConfig.style.height='40px';
			moreConfig.style.width='160px';
			moreConfig.style.left='35px';
			moreConfig.style.top='330px';
			moreConfig.style['white-space']='nowrap';
			moreConfig.style['font-size']='35px';
			moreConfig.style['text-align']='center';
			moreConfig.style['font-family']="'STXinwei','xinwei'";
			moreConfig.style['line-height']='40px';
			moreConfig.style['cursor']='pointer';
			moreConfig.innerHTML='更多参数';
			moreConfig.style.transition='opacity 0.5s';
			moreConfig.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
				this.style.transform='scale(0.95)';
			});
			moreConfig.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
				this.style.transform='';
			});
			edit.appendChild(moreConfig);
			moreConfig.link=true;
			moreConfig.onclick=function(){
				if(this.link==true){
					name1.style.display='none';
					time.style.display='none';
					position.style.display='none';
					height.style.display='none';
					width.style.display='none';
					backgroundSize.style.display='none';
					opacity.style.display='none';
					show.style.display='none';
					fade.style.display='none';
					pause.style.display='none';
					rate_zhen.style.display='';
					jump_zhen.style.display='';
					qianzhui.style.display='';
					liang.style.display='';
					delay.style.display='';
					this.link=false;
				}else{
					name1.style.display='';
					time.style.display='';
					position.style.display='';
					height.style.display='';
					width.style.display='';
					backgroundSize.style.display='';
					opacity.style.display='';
					show.style.display='';
					fade.style.display='';
					pause.style.display='';
					rate_zhen.style.display='none';
					jump_zhen.style.display='none';
					qianzhui.style.display='none';
					liang.style.display='none';
					delay.style.display='none';
					this.link=true;
				};
			};
			
			var styleOwn=ui.create.div('.menu');
			styleOwn.style.height='40px';
			styleOwn.style.width='190px';
			styleOwn.style.left='calc(75% - 80px)';
			styleOwn.style.top='330px';
			styleOwn.style['white-space']='nowrap';
			styleOwn.style['font-size']='35px';
			styleOwn.style['text-align']='center';
			styleOwn.style['font-family']="'STXinwei','xinwei'";
			styleOwn.style['line-height']='40px';
			styleOwn.style['cursor']='pointer';
			styleOwn.innerHTML='自定义样式';
			styleOwn.style.transition='opacity 0.5s';
			styleOwn.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
				this.style.transform='scale(0.95)';
			});
			styleOwn.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
				this.style.transform='';
			});
			if(name!=undefined&&animation.style!=undefined){
				styleOwn.style1=animation.style;
			}else{
				styleOwn.style1={};
			};
			edit.appendChild(styleOwn);
			var container=ui.create.div('.popup-container.editor');
			var editorpage=ui.create.div(container);
			var discardConfig=ui.create.div('.editbutton','取消',editorpage,function(){
				ui.window.classList.remove('shortcutpaused');
				ui.window.classList.remove('systempaused');
				container.delete(null);
				delete window.saveNonameInput;
				for(var i in dialogs2){
					dialogs2[i].style.display='';
				};
				setTimeout(function(){
					onEdit=false;
				},250);
			});
			discardConfig.style['font-family']='shousha';
			//discardConfig.addEventListener(lib.config.touchscreen?'touchend':'click',function(e){
			//	e.stopPropagation();
			//});
			var saveInput=function(){
				var code;
				if(container.editor){
					code=container.editor.getValue();
				}else if(container.textarea){
					code=container.textarea.value;
				};
				try{
					var style=null;
					eval(code);
					if(style==null||typeof style!='object'){
						throw('err');
					}
				}catch(e){
					if(e=='err'){
						alert('代码格式有错误，请对比示例代码仔细检查');
					}else{
						alert('代码语法有错误，请仔细检查（'+e+'）')
					};
					return;
				};
				styleOwn.style1=style;
				ui.window.classList.remove('shortcutpaused');
				ui.window.classList.remove('systempaused');
				container.delete();
				container.code=code;
				delete window.saveNonameInput;
				for(var i in dialogs2){
					dialogs2[i].style.display='';
				};
				setTimeout(function(){
					onEdit=false;
				},250);
			};
			var saveConfig=ui.create.div('.editbutton','保存',editorpage,saveInput);
			saveConfig.style['font-family']='shousha';
			//saveConfig.addEventListener(lib.config.touchscreen?'touchend':'click',function(e){
			//	e.stopPropagation();
			//});
			var editor=ui.create.div(editorpage);
			container.code='style='+get.stringify(styleOwn.style1)+'\n\n\/*\n示例：\nstyle={\n    "text-align":"center",\n    color:"white",\n    "text-shadow":"black 0 0 2px",\n    "font-size":"50px",\n    "font-family":"'+"'STXinwei','xinwei'"+'",\n    animation:"kzol_scale .4s",\n    "-webkit-animation":"kzol_scale .4s",\n    width:"100px",\n    height:"100px",\n    "line-height":"100px",\n    "box-shadow":"none",\n    "innerHTML":"杀"\n}\n在播放区域内添加一个50px大小、新魏字体、白色、黑色阴影、位置居中的“杀”字\n播放区域大小为100px*100px\n动画为400毫秒的缩放（大→小）\n导出时本段代码中的换行、缩进以及注释将被清除\n*\/';
			styleOwn.onclick=function(){
				for(var i in dialogs2){
					dialogs2[i].style.display='none';
				};
				var node=container;
				ui.window.classList.add('shortcutpaused');
				ui.window.classList.add('systempaused');
				window.saveNonameInput=saveInput;
				if(node.aced){
					ui.window.appendChild(node);
					node.editor.setValue(node.code,1);
				}else if(lib.device=='ios'){
					ui.window.appendChild(node);
					if(!node.textarea){
						var textarea=document.createElement('textarea');
						editor.appendChild(textarea);
						node.textarea=textarea;
						lib.setScroll(textarea);
					}
					node.textarea.value=node.code;
				}else{
					var aceReady=function(){
						ui.window.appendChild(node);
						var mirror = window.CodeMirror(editor, {
							value:node.code,
							mode:"javascript",
							lineWrapping:!lib.config.touchscreen&&lib.config.mousewheel,
							lineNumbers:true,
							indentUnit:4,
							autoCloseBrackets:true,
							theme:'mdn-like'
						});
						lib.setScroll(editor.querySelector('.CodeMirror-scroll'));
						node.aced=true;
						node.editor=mirror;
					}
					if(!window.ace){
						lib.init.js(lib.assetURL+'game','codemirror',aceReady);
						lib.init.css(lib.assetURL+'layout/default','codemirror');
					}else{
						aceReady();
					};
				};
				onEdit=true;
			};
			
			var create=ui.create.div('.menu');
			create.style.height='40px';
			create.style.width='160px';
			create.style.left='calc(50% - 80px)';
			create.style.top='330px';
			create.style['white-space']='nowrap';
			create.style['font-size']='35px';
			create.style['text-align']='center';
			create.style['font-family']="'STXinwei','xinwei'";
			create.style['line-height']='40px';
			create.style['cursor']='pointer';
			var str='创建特效';
			if(name!=undefined) str='修改特效';
			create.innerHTML=str;
			create.style.transition='opacity 0.5s';
			create.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
				this.style.transform='scale(0.95)';
			});
			create.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
				this.style.transform='';
			});
			edit.appendChild(create);
			create.link_avatar=avatar;
			create.link_name1=name1;
			create.link_time=time;
			create.link_position=position;
			create.link_width=width;
			create.link_height=height;
			create.link_backgroundSize=backgroundSize;
			create.link_opacity=opacity;
			create.link_show=show;
			create.link_fade=fade;
			create.link_pause=pause;
			create.link_styleOwn=styleOwn;
			create.link_rate_zhen=rate_zhen;
			create.link_jump_zhen=jump_zhen;
			create.link_qianzhui=qianzhui;
			create.link_liang=liang;
			create.link_delay=delay;
			create.onclick=function(){
				var avatar=this.link_avatar;
				var name1=this.link_name1;
				var time=this.link_time;
				var position=this.link_position;
				var width=this.link_width;
				var height=this.link_height;
				var backgroundSize=this.link_backgroundSize;
				var opacity=this.link_opacity;
				var show=this.link_show;
				var fade=this.link_fade;
				var pause=this.link_pause;
				var styleOwn=this.link_styleOwn;
				var rate_zhen=this.link_rate_zhen;
				var jump_zhen=this.link_jump_zhen;
				var qianzhui=this.link_qianzhui;
				var liang=this.link_liang;
				var delay=this.link_delay;
				var str_name1=name1.querySelector('input').value;
				if(str_name1==undefined||str_name1.length==0){
					game.say1('未输入特效名称');
					return;
				};
				var str_time=time.querySelector('input').value;
				var reg=/^[0-9]*[1-9][0-9]*$/;
				if(!reg.test(str_time)){
					game.say1('输入的播放时间不是正整数');
					return;
				};
				str_time=parseInt(str_time);
				if(str_time<100){
					game.say1('输入的播放时间不能小于100毫秒');
					return;
				};
				var str_position=position.querySelector('select').options[position.querySelector('select').selectedIndex].value;
				var str_width=width.querySelector('input').value;
				if(str_width==undefined||str_width.length==0){
					game.say1('未输入区域宽度');
					return;
				};
				var str_height=height.querySelector('input').value;
				if(str_height==undefined||str_height.length==0){
					game.say1('未输入区域长度');
					return;
				};
				var str_backgroundSize=backgroundSize.querySelector('select').options[backgroundSize.querySelector('select').selectedIndex].value;
				var str_opacity=opacity.querySelector('input').value;
				var reg=/^\d+(\.\d+)?$/;
				if(!reg.test(str_opacity)){
					game.say1('输入的图片透明度不是数字');
					return;
				};
				str_opacity=parseFloat(str_opacity);
				if(str_opacity>1||str_opacity<0){
					game.say1('输入的图片透明度必须为0-1内的数字');
					return;
				};
				var str_show=show.querySelector('select').options[show.querySelector('select').selectedIndex].value;
				var str_fade=fade.querySelector('input').checked;
				if(str_fade==true&&str_time<400){
					game.say1('关闭时渐隐开启时,输入的播放时间不能小于400毫秒');
					return;
				};
				if(str_time>100000){
					if(!confirm('输入的播放时间大于100秒则不会移除特效，是否继续？')) return;
				};
				var str_pause=pause.querySelector('input').checked;
				var str_rate_zhen=rate_zhen.querySelector('input').value;
				var reg=/^[0-9]*[1-9][0-9]*$/;
				if(!reg.test(str_rate_zhen)){
					game.say1('输入的帧率不是正整数');
					return;
				};
				str_rate_zhen=parseInt(str_rate_zhen);
				var str_jump_zhen=jump_zhen.querySelector('input').checked;
				var str_qianzhui=qianzhui.querySelector('input').value;
				var str_liang=liang.querySelector('input').checked;
				var str_delay=delay.querySelector('input').value;
				var reg=/^[0-9]*[1-9][0-9]*$/;
				if(!reg.test(str_delay)){
					game.say1('输入的播放前延迟时间不是正整数');
					return;
				};
				str_delay=parseInt(str_delay);
				if(str_delay>=str_time){
					game.say1('输入的播放前延迟时间不能超过播放时间');
					return;
				};
				var object_style=styleOwn.style1;
				var tx={
					time:str_time,
					position:str_position,
					width:str_width,
					height:str_height,
					backgroundSize:str_backgroundSize,
					opacity:str_opacity,
					show:str_show,
					fade:str_fade,
					pause:str_pause,
					rate_zhen:str_rate_zhen,
					jump_zhen:str_jump_zhen,
					qianzhui:str_qianzhui,
					liang:str_liang,
					style:object_style,
				};
				if(str_delay>10) tx.delay=str_delay;
				if(animation==undefined){
					tx.skills=[];
					tx.cards=[];
					tx.forbid=false;
				}else{
					tx.skills=animation.skills;
					tx.cards=animation.cards;
					tx.forbid=animation.forbid;
				};
				if(avatar.image1!=undefined){
					if(avatar.image1.indexOf('.')!=-1){
						if(avatar.files!=undefined&&avatar.files[0]!=undefined){
							var file=avatar.files[0];
							tx.image=file.name;
							var func=function(){
								var fileToLoad=file;
								if(fileToLoad){
									var fileReader = new FileReader();
									fileReader.onload = function(e){
										game.writeFile(e.target.result,'extension/扩展ol/animation_image',fileToLoad.name,function(){});
									};
									fileReader.readAsArrayBuffer(fileToLoad, "UTF-8");
								};
							};
							if(lib.config.kzol_skillAnimation_createFiles!=true){
								if(lib.node&&lib.node.fs){
									lib.node.fs.mkdir(__dirname+'/extension/扩展ol/animation_image',function(){
										game.saveConfig('kzol_skillAnimation_createFiles',true);
										func();
									});
								}else{
									window.resolveLocalFileSystemURL(lib.assetURL+'extension/扩展ol',function(entry){
										entry.getDirectory('animation_image',{create:true},function(){
											game.saveConfig('kzol_skillAnimation_createFiles',true);
											func();
										});
									});
								};
							}else{
								func();
							};
						}else{
							tx.image=animation.image;
						};
					}else{
						tx.image=avatar.image1;
					};
				};
				if(name!=undefined&&str_name1!=name){
					if(!confirm('修改特效名称会新建一个新的特效，是否继续？')){
						return ;
					};
					var tx1={
						skills:[],
						cards:[],
						style:{},
					};
					for(var i=0;i<tx.skills.length;i++){
						tx1.skills.push(tx.skills[i]);
					};
					tx.skills=tx1.skills;
					for(var i=0;i<tx.cards.length;i++){
						if(typeof tx.cards[i]=='object'){
							var card={};
							for(var j in tx.cards[i]){
								card[j]=tx.cards[i][j];
							};
							tx1.cards.push(card);
						}else{
							tx1.cards.push(tx.cards[i]);
						};
					};
					tx.cards=tx1.cards;
					for(var i in tx.style){
						tx1.style[i]=tx.style[i];
					};
					tx.style=tx1.style;
				};
				if(str_name1!=name){
					var bool=false;
					for(var i in lib.config.kzol_skillAnimation){
						if(i==str_name1) bool=true;
					};
				};
				if(bool){
					if(!confirm('已存在同名特效，是否覆盖？')) return;
				};
				lib.config.kzol_skillAnimation[str_name1]=tx;
				game.saveConfig('kzol_skillAnimation',lib.config.kzol_skillAnimation);
				game.kzol_loadSkillAnimationImg();
				if(name==undefined){
					game.say1('创建成功');
				}else{
					game.say1('修改成功');
				};
				update();
				for(var i in dialogs2){
					dialogs2[i].delete();
					delete dialogs2[i];
				};
				for(var i in dialogs1){
					dialogs1[i].style.display='';
				};
			};
			
			var div=ui.create.div();
			div.style.height='calc(100%)';
			div.style.width='calc(100%)';
			div.style.left='0px';
			div.style.top='0px';
			var func1=function(){
				if(onEdit==true) return;
				if(!confirm('是否退出编辑？')) return;
				for(var i in dialogs2){
					dialogs2[i].delete();
					delete dialogs2[i];
				};
				for(var i in dialogs1){
					dialogs1[i].style.display='';
				};
			};
			setTimeout(function(){
				div.onclick=function(){
					func1();
				};
			},750);
			background.appendChild(div);
		};
		update();
		
		var div=ui.create.div();
		div.style.height='calc(100%)';
		div.style.width='calc(100%)';
		div.style.left='0px';
		div.style.top='0px';
		var func1=function(){
			if(lib.config['extension_扩展ol_tx_skillAnimation_stop']!=false) game.resume2();
			for(var i in dialogs1){
				dialogs1[i].delete();
				delete dialogs1[i];
			};
		};
		setTimeout(function(){
			div.onclick=function(){
				func1();
			};
		},750);
		background.appendChild(div);
	};
	lib.element.player.$kzol_break=function(bool){
		var player=this;
		if(bool==true) game.removePlayer1(player,true);
		var num1=2;
		if(lib.config['extension_扩展ol_tx_tx_set1']!=undefined) num1=lib.config['extension_扩展ol_tx_tx_set1'];
		game.delay(num1);
		if(lib.config['extension_扩展ol_tx_tx_set2']=='avatar'){
			var width=player.offsetWidth;
			var height=player.offsetHeight;
			var getUrl=function(name,type,ext,subfolder){
				var src;
				if(ext=='noskin'){
					ext='.jpg';
				}
				ext=ext||'.jpg';
				subfolder=subfolder||'default'
				if(type){
					var dbimage=null,extimage=null,modeimage=null;
					var nameinfo;
					var gzbool=false;
					var mode=get.mode();
					if(type=='character'){
						if(lib.characterPack['mode_'+mode]&&lib.characterPack['mode_'+mode][name]){
							if(mode=='guozhan'){
								if(name.indexOf('gz_shibing')==0){
									name=name.slice(3,11);
								}
								else{
									if(lib.config.mode_config.guozhan.guozhanSkin&&lib.character[name]&&lib.character[name][4].contains('gzskin'))  gzbool=true;
									name=name.slice(3);
								}
							}
							else{
								modeimage=mode;
							}
						}
						else if(lib.character[name]){
							nameinfo=lib.character[name];
						}
						else if(name.indexOf('::')!=-1){
							name=name.split('::');
							modeimage=name[0];
							name=name[1];
						}
					}
					if(!modeimage&&nameinfo&&nameinfo[4]){
						for(var i=0;i<nameinfo[4].length;i++){
							if(nameinfo[4][i].indexOf('ext:')==0){
								extimage=nameinfo[4][i];break;
							}
							else if(nameinfo[4][i].indexOf('db:')==0){
								dbimage=nameinfo[4][i];break;
							}
							else if(nameinfo[4][i].indexOf('mode:')==0){
								modeimage=nameinfo[4][i].slice(5);break;
							}
							else if(nameinfo[4][i].indexOf('character:')==0){
								name=nameinfo[4][i].slice(10);break;
							}
						}
					}
					if(extimage){
						src=extimage.replace(/ext:/,'extension/');
					}
					else if(dbimage){
						this.setBackgroundDB(dbimage.slice(3));
						return this;
					}
					else if(modeimage){
						src='image/mode/'+modeimage+'/character/'+name+ext;
					}
					else if(type=='character'&&lib.config.skin[name]&&arguments[2]!='noskin'){
						src='image/skin/'+name+'/'+lib.config.skin[name]+ext;
					}
					else{
						if(type=='character'){
							src='image/character/'+(gzbool?'gz_':'')+name+ext;
						}
						else{
							src='image/'+type+'/'+subfolder+'/'+name+ext;
						}
					}
				}
				else{
					src='image/'+name+ext;
				}
				return src;
			};
			var image=new Image();
			image.src=getUrl(player.name,'character');
			var div_player=ui.create.div();
			div_player.style.width=player.offsetWidth+'px';
			div_player.style.height=player.offsetHeight+'px';
			div_player.style.borderRadius='3px';
			var l=player.offsetLeft;
			var t=player.offsetTop;
			if(player.parentNode!=undefined){
				l+=player.parentNode.offsetLeft;
				t+=player.parentNode.offsetTop;
			};
			if(player.parentNode.parentNode!=undefined){
				l+=player.parentNode.parentNode.offsetLeft;
				t+=player.parentNode.parentNode.offsetTop;
			};
			if(player.parentNode.parentNode.parentNode!=undefined){
				l+=player.parentNode.parentNode.parentNode.offsetLeft;
				t+=player.parentNode.parentNode.parentNode.offsetTop;
			};
			div_player.style.left=l+'px';
			div_player.style.top=t+'px';
			div_player.style['z-index']=2;
			player.hide();
			ui.window.appendChild(div_player);
			var num=2;
			if(lib.config['extension_扩展ol_tx_tx_set']!=undefined) num=parseInt(lib.config['extension_扩展ol_tx_tx_set']);
			var vertices=new Array(num);
			var i,x,y;
			for(i=vertices.length;i--;){
				do{
					x=Math.random()-0.5;
					y=Math.random()-0.5;
				}while(x*x+y*y>0.25);
				x=(x+0.5)*width;
				y=(y+0.5)*height;
				vertices[i]=[x,y];
			};
			vertices.push([0,0]);
			vertices.push([width,0]);
			vertices.push([0,height]);
			vertices.push([width,height]);
			var triangles=Delaunay.triangulate(vertices);
			var canvas2=[];
			for(i=triangles.length;i;){
				var canvas1=document.createElement('canvas');
				canvas1.width=width;
				canvas1.height=height;
				canvas1.style.width=width+'px';
				canvas1.style.height=height+'px';
				canvas1.style.left='0px';
				canvas1.style.top='0px';
				canvas1.style.position='absolute';
				div_player.appendChild(canvas1);
				var ctx=canvas1.getContext('2d');
				ctx.beginPath();
				--i;
				ctx.moveTo(vertices[triangles[i]][0],vertices[triangles[i]][1]);
				--i;
				ctx.lineTo(vertices[triangles[i]][0],vertices[triangles[i]][1]);
				--i;
				ctx.lineTo(vertices[triangles[i]][0],vertices[triangles[i]][1]);
				ctx.closePath();
				ctx.clip();
				ctx.drawImage(image,0,0,width,height);
				canvas2.push(canvas1);
			};
			var interval=setInterval(function(){
				if(canvas2.length>0){
					var canvas1=canvas2.randomGet();
					canvas1.style.transition='all 1.5s';
					canvas1.style['z-index']=4;
					canvas1.style.opacity=0;
					canvas1.style.transform='perspective(1em) rotateX(1.25deg) translateY(-90px)';
					canvas2.remove(canvas1);
				}else{
					clearInterval(interval);
					setTimeout(function(){
						for(var i in player.node){
							if(i=='avatar') continue;
							if(i=='avatar2') continue;
							if(i=='name') continue;
							if(i=='name2') continue;
							player.node[i].style.display='';
						};
						ui.window.removeChild(div_player);
						if(bool==true){
							player.delete();
						}else{
							player.show();
						};
					},1600);
				};
			},100);
		}else{
		//创建
		for(var i in player.node){
			if(i=='avatar') continue;
			if(i=='avatar2') continue;
			if(i=='name') continue;
			if(i=='name2') continue;
			player.node[i].style.display='none';
		};
		var width=player.offsetWidth;
		var height=player.offsetHeight;
		var scale=1;
		var canvas=document.createElement("canvas");
		var rect=player.getBoundingClientRect();
		canvas.width=width*scale;
		canvas.height=height*scale;
		var context=canvas.getContext("2d");
		context.scale(scale,scale);
		context.translate(-rect.left,-rect.top);
		var options={
			scale:scale,
			canvas:canvas,
			width:width,
			height:height,
			taintTest:true,
			useCORS:true,
			dpi:window.devicePixelRatio,
		};
		html2canvas(player,options).then(function(canvas){
			var image=new Image();
			image.src=canvas.toDataURL("image/png");
			var div_player=ui.create.div();
			div_player.style.width=player.offsetWidth+'px';
			div_player.style.height=player.offsetHeight+'px';
			var l=player.offsetLeft;
			var t=player.offsetTop;
			if(player.parentNode!=undefined){
				l+=player.parentNode.offsetLeft;
				t+=player.parentNode.offsetTop;
			};
			if(player.parentNode.parentNode!=undefined){
				l+=player.parentNode.parentNode.offsetLeft;
				t+=player.parentNode.parentNode.offsetTop;
			};
			if(player.parentNode.parentNode.parentNode!=undefined){
				l+=player.parentNode.parentNode.parentNode.offsetLeft;
				t+=player.parentNode.parentNode.parentNode.offsetTop;
			};
			div_player.style.left=l+'px';
			div_player.style.top=t+'px';
			div_player.style['z-index']=2;
			player.hide();
			ui.window.appendChild(div_player);
			//动画
			var num=2;
			if(lib.config['extension_扩展ol_tx_tx_set']!=undefined) num=parseInt(lib.config['extension_扩展ol_tx_tx_set']);
			var vertices=new Array(num);
			var i,x,y;
			for(i=vertices.length;i--;){
				do{
					x=Math.random()-0.5;
					y=Math.random()-0.5;
				}while(x*x+y*y>0.25);
				x=(x+0.5)*width;
				y=(y+0.5)*height;
				vertices[i]=[x,y];
			};
			vertices.push([0,0]);
			vertices.push([width,0]);
			vertices.push([0,height]);
			vertices.push([width,height]);
			var triangles=Delaunay.triangulate(vertices);
			var canvas2=[];
			for(i=triangles.length;i;){
				var canvas1=document.createElement('canvas');
				canvas1.width=width;
				canvas1.height=height;
				canvas1.style.width=width+'px';
				canvas1.style.height=height+'px';
				canvas1.style.left='0px';
				canvas1.style.top='0px';
				canvas1.style.position='absolute';
				div_player.appendChild(canvas1);
				var ctx=canvas1.getContext('2d');
				ctx.beginPath();
				--i;
				ctx.moveTo(vertices[triangles[i]][0],vertices[triangles[i]][1]);
				--i;
				ctx.lineTo(vertices[triangles[i]][0],vertices[triangles[i]][1]);
				--i;
				ctx.lineTo(vertices[triangles[i]][0],vertices[triangles[i]][1]);
				ctx.closePath();
				ctx.clip();
				ctx.drawImage(image,0,0,width,height);
				canvas2.push(canvas1);
			};
			var interval=setInterval(function(){
				if(canvas2.length>0){
					var canvas1=canvas2.randomGet();
					canvas1.style.transition='all 1.5s';
					canvas1.style['z-index']=4;
					canvas1.style.opacity=0;
					canvas1.style.transform='perspective(1em) rotateX(1.25deg) translateY(-90px)';
					canvas2.remove(canvas1);
				}else{
					clearInterval(interval);
					setTimeout(function(){
						//结束
						for(var i in player.node){
							if(i=='avatar') continue;
							if(i=='avatar2') continue;
							if(i=='name') continue;
							if(i=='name2') continue;
							player.node[i].style.display='';
						};
						ui.window.removeChild(div_player);
						if(bool==true){
							player.delete();
						}else{
							player.show();
						};
					},1600);
				};
			},100);
		});
		};
	};
	game.readFile('extension/扩展ol/html2canvas.js',function(){
		if(lib.config['extension_扩展ol_tx_open']!=false){
			var script=document.createElement("script");
			script.setAttribute("type","text/javascript");
			script.setAttribute("src",lib.assetURL+"extension/扩展ol/html2canvas.js");
			document.head.appendChild(script);
		}else{
			delete lib.element.player.$kzol_break;
		};
	},function(){
		delete lib.element.player.$kzol_break;
	});
	game.readFile('extension/扩展ol/delaunay.js',function(){
		if(lib.config['extension_扩展ol_tx_open1']!=false){
			var script=document.createElement("script");
			script.setAttribute("type","text/javascript");
			script.setAttribute("src",lib.assetURL+"extension/扩展ol/delaunay.js");
			document.head.appendChild(script);
		}else{
			delete lib.element.player.$kzol_break;
		};
	},function(){
		delete lib.element.player.$kzol_break;
	});
	if(lib.config['extension_扩展ol_tx_tx2_open']!=false){
		lib.skill["_Aurora_attackAct"]={
			trigger:{
				source:"damageBefore",
			},
			forced:true,
			priority:null,
			filter:function (event,player){
				if(lib.config['extension_扩展ol_tx_tx2_open']!=true) return false;
				return player!=game.me&&player!=event.player&&player.storage.Aurora_attackAct!=true;
			},
			content:function (){
				player.storage.Aurora_attackAct=true;
				game.delay(2.5);
				//game.pause();
				var a=player.style.transform;
				var b=trigger.player.offsetTop;
				var c=trigger.source.offsetTop;
				var d=trigger.source.offsetHeight;
				var e=trigger.player.offsetLeft;
				var f=trigger.source.offsetLeft;
				var g=trigger.source.offsetWidth;
				player.style['z-index']=4;
				if(b-c>300||b-c<300){
					player.style.transform='translateY('+(b-c)+'px)';
				}else if(b-c>300){
					player.style.transform='translateY('+(b-c+d)+'px)';
				}else{
					player.style.transform='translateY('+(b-c-d)+'px)';
				};
				if(e>f){
					player.style.transform+='translateX('+((e-f)-g-5)+'px)';
				}else if(e==f){
					if(e==0){
						player.style.transform+='translateX('+((e-f)+g+5)+'px)';
					}else{
						player.style.transform+='translateX('+((e-f)-g-5)+'px)';
					};
				}else{
					player.style.transform+='translateX('+((e-f)+g+5)+'px)';
				};
				setTimeout(function(){
					if(e<f){
						player.style.transform+=' rotate(30deg)';
					}else if(e==f){
						if(e==0){
							player.style.transform+=' rotate(30deg)';
						}else{
							player.style.transform+=' rotate(-30deg)';
						};
					}else{
						player.style.transform+=' rotate(-30deg)';
					};
					setTimeout(function(){
						if(e<f){
							player.style.transform+=' rotate(-60deg)';
						}else if(e==f){
							if(e==0){
								player.style.transform+=' rotate(-60deg)';
							}else{
								player.style.transform+=' rotate(60deg)';
							};
						}else{
							player.style.transform+=' rotate(60deg)';
						};
						//game.resume();
					},500);
				},700);
				setTimeout(function(){
					player.style.transform=a;
					player.style['z-index']=2;
				},1850);
				setTimeout(function(){
					delete player.storage.Aurora_attackAct;
				},2000);
			},
		};
	};
	game.kzol_showFps=function(id){
		var requestAnimationFrame=window.requestAnimationFrame||
		window.webkitRequestAnimationFrame||
		window.mozRequestAnimationFrame||
		window.oRequestAnimationFrame||
		window.msRequestAnimationFrame||
		function(callback){
			window.setTimeout(callback,1000/60);
		};
		var div;
		if(document.getElementById(id)==undefined){
			div=document.createElement('div');
			div.setAttribute('id','kzol_showFPS');
			div.style.zIndex=999;
			div.style['pointer-events']='none';
			var config=lib.config['extension_扩展ol_tx_skillAnimation_showFpsP'];
			if(config=='cd'){
				div.style.left='calc(50% - '+(div.offsetWidth/2)+'px)';
				div.style.bottom='0px';
			}else if(config=='ld'){
				div.style.left='0px';
				div.style.bottom='0px';
			}else if(config=='ru'){
				div.style.right='0px';
				div.style.top='0px';
			}else if(config=='cu'){
				div.style.left='calc(50% - '+(div.offsetWidth/2)+'px)';
				div.style.top='0px';
			}else if(config=='lu'){
				div.style.left='0px';
				div.style.top='0px';
			}else{
				div.style.right='0px';
				div.style.bottom='0px';
			};
			ui.window.appendChild(div);
		}else{
			div=document.getElementById(id);
		};
		var fps=0;
		var last=Date.now();
		var offset;
		var step=function(){
			offset=Date.now()-last;
			fps+=1;
			if(offset>=1000){
				last+=offset;
				if(fps>60) fps=60;
				div.innerHTML='FPS:'+fps;
				fps=0;
			}
			requestAnimationFrame(step);
		};
		step();
	};
	lib.arenaReady.push(function(){
		if(lib.config['extension_扩展ol_tx_skillAnimation_showFps']==true){
			game.kzol_showFps('document.getElementById(id)');
		};
	});
}