game.import("extension",function(lib,game,ui,get,ai,_status){return {
	name:"扩展ol",
	content:function (config,pack){
		if(lib.program!=undefined){
			for(var i in lib.program.character){
				if(lib.config['extension_扩展ol_'+i]==true){
					for(var j in lib.characterPack[i]) {
						if(lib.character[j][4].indexOf("forbidai")<0) lib.character[j][4].push("forbidai");
					};
				};
			};
			for(var i=0;i<lib.content_func.length;i++){
				lib.content_func[i](lib,game,ui,get,ai,_status);
			};
		};
	},
	editable:false,
	precontent:function (extensionOL){
		if(extensionOL.enable){
			if(lib.config.noname_extensionOL_version==undefined) game.saveConfig('noname_extensionOL_version','1.0.0.0');
			if(lib.config.noname_extensionOL_version1!='1.17.51') game.saveConfig('noname_extensionOL_version1','1.17.51');
			delete lib.extensionMenu.extension_扩展ol.delete;
			delete lib.extensionMenu.extension_扩展ol.edit;
			delete lib.extensionMenu.extension_扩展ol.jjxf;
			delete lib.extensionMenu.extension_扩展ol.autoUpdate1;
			delete lib.extensionMenu.extension_扩展ol.autoUpdate2;
			delete lib.extensionMenu.extension_扩展ol.redownload1_1;
			lib.content_func=[];
			//var url='https://aurora72.coding.net/p/noname_extensionOL/d/noname_extensionOL/git/raw/master';
			//if(lib.config.extension_扩展ol_change=='local') url=lib.assetURL+'extension/扩展ol';
			lib.extensionMenu.extension_扩展ol.author={
				"name":"作者：Aurora",
				"clear":true,
				"nopointer":true,
			};
			lib.extensionMenu.extension_扩展ol.version1={
				"name":"扩展版本："+lib.config.noname_extensionOL_version1,
				"clear":true,
				"nopointer":true,
			};
			lib.extensionMenu.extension_扩展ol.version={
				"name":"coding数据版本：网络链接失败",
				"clear":true,
				"nopointer":true,
			};
			lib.extensionMenu.extension_扩展ol.version2={
				"name":"本地数据版本：未下载数据",
				"clear":true,
				"nopointer":true,
			};
			lib.extensionMenu.extension_扩展ol.changelog={
				"name":"<span style='text-decoration: underline'>查看更新日志</span>",
				"clear":true,
				"onclick":function(){
					alert('网络链接失败');
				},
			};
			lib.extensionMenu.extension_扩展ol.redownload1={
				"name":"<span style='text-decoration: underline'>重新下载数据</span>",
				"clear":true,
				"onclick":function(){
					if(confirm('该操作会刷新游戏且开启自动更新，是否继续？')){
						game.saveConfig('noname_extensionOL_version','1.0.0.0');
						game.saveConfig('extension_扩展ol_autoUpdate',true);
						game.reload();
					};
				},
			};
			lib.extensionMenu.extension_扩展ol.download={
				"name":"<span style='text-decoration: underline'>下载素材</span>",
				"clear":true,
				"onclick":function(){
					var div_this=this;
					if(div_this.kzol_Dialog1==undefined){
						var url=lib.assetURL+'extension/扩展ol'
						lib.init.js(url,'updateFiles1',function(){
							ui.system.style.display='none';
							ui.menuContainer.style.display='none';
							var files=window.kzol_files;
							if(lib.kzol_kzsg_card!=undefined){
								for(var i in lib.kzol_kzsg_card){
									var kzsg_card=lib.kzol_kzsg_card[i];
									var name=kzsg_card.name;
									var bool=true;
									if(lib.config.kzol_kzsg!=undefined&&
									lib.config.kzol_kzsg.diy!=undefined&&
									lib.config.kzol_kzsg.diy[i]!=undefined) bool=false;
									if(!files['卡战模式'].contains(name+'.jpg')&&bool==true) files['卡战模式'].push(name+'.jpg');
								};
								if(lib.kzol_ALXYB!=undefined){
									for(var i in lib.kzol_ALXYB){
										if(!files['奥拉星'].contains(i+'.jpg')) files['奥拉星'].push(i+'.jpg');
									};
								};
								for(var i in lib.program.character){
									for(var j in lib.characterPack[i]){
										if(i=='yl'||i=='bwp'){
											var str=j+'.png';
										}else if(i=='nyhzrlj'){
											var str='New'+j;
											str=str.slice(0,str.length-2);
											str=str+'.jpg';
										}else{
											var str=j+'.jpg';
										};
										if(files[i]==undefined) files[i]=[];
										files[i].push(str);
									};
								};
								for(var i in lib.program.card){
									for(var j=0;j<lib.cardPack[i].length;j++){
										var str=lib.cardPack[i][j]+'.png';
										if(files[i]==undefined) files[i]=[];
										if(!files[i].contains(str)) files[i].push(str);
									};
								};
								if(lib.skillSkin!=undefined){
									if(files['技能皮肤']==undefined) files['技能皮肤']=[];
									for(var i in lib.skillSkin){
										var str=i+'.jpg';
										files['技能皮肤'].push(str);
									};
								};
								if(lib.kzol_achievement!=undefined){
									for(var i=0;i<lib.kzol_achievement.length;i++){
										var str=lib.kzol_achievement[i]+'.jpg';
										if(!files['战功任务'].contains(str)) files['战功任务'].push(str);
									};
								};
							};
							
							var bool=false;
							if(lib.config.kzol_haveFiles==undefined){
								lib.config.kzol_haveFiles={};
								bool=true;
							};
							for(var i in files){
								if(lib.config.kzol_haveFiles[i]==undefined){
									lib.config.kzol_haveFiles[i]=0;
									bool=true;
								};
							};
							if(bool==true) game.saveConfig('kzol_haveFiles',lib.config.kzol_haveFiles);
							var dialog1={};
							var background=ui.create.dialog('hidden');
							background.style.height='calc(100%)';
							background.style.width='calc(100%)';
							background.style.left='0px';
							background.style.top='0px';
							background.style.zIndex=10;
							ui.window.appendChild(background);
							dialog1.background=background;
							var dialog=ui.create.dialog('hidden');
							dialog.classList.add('popped');
							dialog.classList.add('static');
							dialog.style.height='40%';
							dialog.style.width='60%';
							dialog.style.left='20%';
							dialog.style.top='30%';
							dialog.style.zIndex=10;
							dialog.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
							dialog.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
							ui.window.appendChild(dialog);
							dialog1.dialog=dialog;
							dialog.innerHTML='';
							
							var buttons_d,button1_d,button2_d,button3_d;
							var button_d_style={
								'text-shadow':'black 0 0 2px',
								'white-space':'nowrap',
								'text-align':'center',
								'font-size':'30px',
								'line-height':'40px',
								'font-family':"'STXinwei','xinwei'",
								'background-image':'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))',
								'box-shadow':'rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px',
								'cursor':'pointer',
								'color':'white',
								'borderRadius':'5px',
							};
							var clickAnimation=function(div){
								div.style.transition='opacity 0.5s';
								div.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
									this.style.transform='scale(0.95)';
								});
								div.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
									this.style.transform='';
								});
								div.onmouseout=function(){
									this.style.transform='';
								};
							};
							var downloading=ui.create.div();
							downloading.style.overflow='hidden';
							downloading.style.display='none';
							downloading.style.height='40px';
							downloading.style.width='calc(100% - 4px)';
							downloading.style.bottom='2px';
							downloading.style.left='2px';
							downloading.style.borderRadius='40px';
							dialog.appendChild(downloading);
							var downloading_load=ui.create.div();
							downloading_load.style.height='100%';
							downloading_load.style.width='100%';
							downloading_load.style.bottom='0px';
							downloading_load.style.left='0px';
							downloading_load.style.background='#00ff00';
							downloading_load.style.transition='all 0s';
							downloading_load.style.transform='scaleX(0)';
							downloading_load.style.borderRadius='40px';
							downloading_load.style['transform-origin']='0 0';
							downloading_load.style['background-image']='linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4))';
							downloading.appendChild(downloading_load);
							var downloading_str=ui.create.div();
							downloading_str.style.height='100%';
							downloading_str.style.width='100%';
							downloading_str.style.bottom='0px';
							downloading_str.style.left='0px';
							downloading_str.style.color='white';
							downloading_str.style['text-shadow']='black 0 0 2px';
							downloading_str.style['white-space']='nowrap';
							downloading_str.style['text-align']='center';
							downloading_str.style['font-size']='18px';
							downloading_str.style['font-family']="'STXinwei','xinwei'";
							downloading_str.style['line-height']='19px';
							downloading.appendChild(downloading_str);
							var fileList_d=ui.create.div();
							fileList_d.style.display='none';
							fileList_d.style.height='calc(100% - 4px)';
							fileList_d.style.width='calc(100% - 4px)';
							fileList_d.style.left='2px';
							fileList_d.style.top='2px';
							fileList_d.style.color='white';
							fileList_d.style['text-shadow']='black 0 0 2px';
							fileList_d.style['text-align']='center';
							fileList_d.style['overflow-x']='hidden';
							fileList_d.style['overflow-y']='scroll';
							lib.setScroll(fileList_d);
							dialog.appendChild(fileList_d);
							fileList_d.onclick=function(){
								var fileList_d=this;
								if(fileList_d.cilckNum==undefined) fileList_d.cilckNum=0;
								fileList_d.cilckNum++;
								if(fileList_d.kzol_timeout!=undefined) return;
								fileList_d.kzol_timeout=setTimeout(function(){
									if(fileList_d.cilckNum>=2){
										fileList_d.style.display='none';
										buttons_d.style.display='';
										button1_d.style.display='';
										button2_d.style.display='';
										button3_d.style.display='';
									};
									delete fileList_d.cilckNum;
									delete fileList_d.kzol_timeout;
								},200);
							};
							buttons_d=ui.create.div();
							buttons_d.style.height='calc(100% - 44px)';
							buttons_d.style.width='calc(100% - 4px)';
							buttons_d.style.left='2px';
							buttons_d.style.top='2px';
							buttons_d.style.borderRadius='5px';
							buttons_d.style['text-align']='center';
							buttons_d.style['overflow-x']='hidden';
							buttons_d.style['overflow-y']='scroll';
							lib.setScroll(buttons_d);
							dialog.appendChild(buttons_d);
							for(var i in files){
								var str=i;
								if(lib.program!=undefined){
									if(lib.program.character!=undefined&&lib.program.character[i]!=undefined) str=lib.program.character[i];
									if(lib.program.card!=undefined&&lib.program.card[i]!=undefined) str=lib.program.card[i];
								};
								var button_d=ui.create.div();
								button_d.style.position='relative';
								button_d.style.margin='3px';
								button_d.style.height='25px';
								button_d.style.width=(str.length*20+4)+'px';
								button_d.style.borderRadius='5px';
								button_d.style.color='white';
								button_d.style['text-shadow']='black 0 0 2px';
								button_d.style['white-space']='nowrap';
								button_d.style['text-align']='center';
								button_d.style['font-size']='20px';
								button_d.style['line-height']='25px';
								button_d.style['font-family']="'STXinwei','xinwei'";
								button_d.style['background-image']='linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4))';
								if(files[i].length>lib.config.kzol_haveFiles[i]){
									button_d.style['box-shadow']='rgba(0, 0, 0, 0.2) 0 0 0 1px,rgba(255, 0, 0, 0.4) 0 0 2px, rgba(255, 0, 0, 0.4) 0 0 3px, rgba(255, 0, 0, 0.8) 0 0 4px';
									button_d.style.backgroundColor="#00ff00";
									button_d.link1=true;
								}else{
									button_d.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
								};
								button_d.style.cursor='pointer';
								button_d.innerHTML=str;
								button_d.link=i;
								buttons_d.appendChild(button_d);
								clickAnimation(button_d);
								button_d.onclick=function(){
									if(downloading.style.display!='none'){
										game.say1('请等待下载完成后再进行操作');
										return;
									};
									var button_d=this;
									if(button_d.cilckNum==undefined) button_d.cilckNum=0;
									button_d.cilckNum++;
									if(button_d.kzol_timeout!=undefined) return;
									button_d.kzol_timeout=setTimeout(function(){
										if(button_d.cilckNum>=2){
											var str='';
											for(var i=0;i<files[button_d.link].length;i++){
												var str1=(i==0?'':'<br>')+files[button_d.link][i];
												str+=(i+1>lib.config.kzol_haveFiles[button_d.link])?('<span style="color:red">'+str1+'</span>'):str1;
											};
											fileList_d.innerHTML=str;
											fileList_d.style.display='';
											buttons_d.style.display='none';
											button1_d.style.display='none';
											button2_d.style.display='none';
											button3_d.style.display='none';
										}else{
											if(button_d.link1!=true){
												button_d.style.backgroundColor="#00ff00";
												button_d.link1=true;
											}else{
												button_d.style.backgroundColor="";
												button_d.link1=false;
											};
										};
										delete button_d.cilckNum;
										delete button_d.kzol_timeout;
									},200);
								};
							};
							button1_d=ui.create.div();
							button1_d.style.height='40px';
							button1_d.style.width='80px';
							button1_d.style.bottom='2px';
							button1_d.style.left='calc(50% - 40px)';
							for(var i in button_d_style){
								button1_d.style[i]=button_d_style[i];
							};
							button1_d.innerHTML='下载';
							dialog.appendChild(button1_d);
							clickAnimation(button1_d);
							button1_d.onclick=function(){
								var bool=true;
								for(var i=0;i<buttons_d.childNodes.length;i++){
									var div=buttons_d.childNodes[i];
									if(div.link1==true) bool=false;
								};
								if(bool==true){
									game.say1('请先选择需要下载的素材');
									return;
								};
								var bool1=false;
								var list=[];
								for(var i=0;i<buttons_d.childNodes.length;i++){
									var div=buttons_d.childNodes[i];
									if(div.link1==true){
										for(var j=0;j<files[div.link].length;j++){
											if(!list.contains(files[div.link][j])) list.push(files[div.link][j]);
										};
										if(files[div.link].length>lib.config.kzol_haveFiles[div.link]){
											lib.config.kzol_haveFiles[div.link]=files[div.link].length;
											bool1=true;
										};
									};
								};
								if(bool1==true) game.saveConfig('kzol_haveFiles',lib.config.kzol_haveFiles);
								button1_d.style.display='none';
								button2_d.style.display='none';
								button3_d.style.display='none';
								downloading.style.display='';
								var num_search=1;
								var list_search=[];
								downloading_str.innerHTML="检索中（0/0）";
								var func_down=function(){
									if(list_search.length==0){
										alert('没有素材需要下载');
										button1_d.style.display='';
										button2_d.style.display='';
										button3_d.style.display='';
										downloading.style.display='none';
										downloading_load.style.transform='scaleX(0)';
										downloading_str.innerHTML='';
										for(var i=0;i<buttons_d.childNodes.length;i++){
											var div=buttons_d.childNodes[i];
											if(div.link1==true){
												if(files[div.link].length<=lib.config.kzol_haveFiles[div.link]){
													div.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
												};
											};
										};
									}else{
										var num=1;
										var num1=list_search.length;
										downloading_str.innerHTML="下载中（0/"+num1+"）<br><span style='font-size:16px;'>"+list_search[0]+"</span>";
										var success=function(){
											num++;
											list_search.remove(list_search[0]);
											if(list_search.length>0){
												downloading_str.innerHTML="下载中（"+num+"/"+num1+"）<br><span style='font-size:16px;'>"+list_search[0]+"</span>";
												downloading_load.style.transform='scaleX('+(num/num1)+')';
												download();
											}else{
												alert('下载完成');
												button1_d.style.display='';
												button2_d.style.display='';
												button3_d.style.display='';
												downloading.style.display='none';
												downloading_load.style.transform='scaleX(0)';
												downloading_str.innerHTML='';
												for(var i=0;i<buttons_d.childNodes.length;i++){
													var div=buttons_d.childNodes[i];
													if(div.link1==true){
														if(files[div.link].length<=lib.config.kzol_haveFiles[div.link]){
															div.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
														};
													};
												};
											};
										};
										var download=function(){
											game.download('https://aurora72.coding.net/p/noname_extensionOL/d/noname_extensionOL/git/raw/master/image/'+list_search[0],'extension/扩展ol/'+list_search[0],function(){
												success();
											},function(){
												if(confirm(list_search[0]+'下载失败，是否跳过并继续下载？')){
													success();
												}else{
													button1_d.style.display='';
													button2_d.style.display='';
													button3_d.style.display='';
													downloading.style.display='none';
													downloading_load.style.transform='scaleX(0)';
													downloading_str.innerHTML='';
													for(var i=0;i<buttons_d.childNodes.length;i++){
														var div=buttons_d.childNodes[i];
														if(div.link1==true){
															if(files[div.link].length<=lib.config.kzol_haveFiles[div.link]){
																div.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
															};
														};
													};
												};
											});
										};
										download();
									};
								};
								var func=function(){
									var url_search='extension/扩展ol/'+list[num_search-1];
									downloading_str.innerHTML="检索中（"+num_search+"/"+list.length+"）<br><span style='font-size:16px;'>"+url_search.slice(15,url_search.length)+"</span>";
									downloading_load.style.transform='scaleX('+(num_search/list.length)+')';
									game.readFile(url_search,function(){
										if(num_search<list.length){
											num_search++;
											func();
										}else{
											downloading_str.style['line-height']='40px';
											downloading_str.innerHTML="检索完成，即将开始下载";
											setTimeout(function(){
												downloading_str.style['line-height']='19px';
												downloading_load.style.transform='scaleX(0)';
												func_down();
											},500);
										};
									},function(){
										list_search.push(list[num_search-1]);
										if(num_search<list.length){
											num_search++;
											func();
										}else{
											downloading_str.style['line-height']='40px';
											downloading_str.innerHTML="检索完成，即将开始下载";
											setTimeout(function(){
												downloading_str.style['line-height']='19px';
												downloading_load.style.transform='scaleX(0)';
												func_down();
											},500);
										};
									});
								};
								func();
							};
							button2_d=ui.create.div();
							button2_d.style.height='40px';
							button2_d.style.width='80px';
							button2_d.style.bottom='2px';
							button2_d.style.left='calc(25% - 40px)';
							for(var i in button_d_style){
								button2_d.style[i]=button_d_style[i];
							};
							button2_d.innerHTML='全选';
							dialog.appendChild(button2_d);
							clickAnimation(button2_d);
							button2_d.onclick=function(){
								for(var i=0;i<buttons_d.childNodes.length;i++){
									var div=buttons_d.childNodes[i];
									div.style.backgroundColor="#00ff00";
									div.link1=true;
								};
							};
							button3_d=ui.create.div();
							button3_d.style.height='40px';
							button3_d.style.width='80px';
							button3_d.style.bottom='2px';
							button3_d.style.left='calc(75% - 40px)';
							for(var i in button_d_style){
								button3_d.style[i]=button_d_style[i];
							};
							button3_d.innerHTML='反选';
							dialog.appendChild(button3_d);
							clickAnimation(button3_d);
							button3_d.onclick=function(){
								for(var i=0;i<buttons_d.childNodes.length;i++){
									var div=buttons_d.childNodes[i];
									if(div.link1!=true){
										div.style.backgroundColor="#00ff00";
										div.link1=true;
									}else{
										div.style.backgroundColor="";
										div.link1=false;
									};
								};
							};
							
							var div=ui.create.div();
							div.style.height='calc(100%)';
							div.style.width='calc(100%)';
							div.style.left='0px';
							div.style.top='0px';
							div.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
								ui.system.style.display='';
								ui.menuContainer.style.display='';
								for(var i in dialog1){
									dialog1[i].hide();
								};
							});
							background.appendChild(div);
							//for(var i in dialog1){
							//	dialog1[i].hide();
							//};
							div_this.kzol_Dialog1=dialog1;
						},function(){
							alert('未检测到下载列表文件（updateFiles1.js）');
						});
					}else{
						var dialog1=this.kzol_Dialog1;
						ui.system.style.display='none';
						ui.menuContainer.style.display='none';
						for(var i in dialog1){
							dialog1[i].show();
						};
					};
				},
			};
			lib.extensionMenu.extension_扩展ol.fkBUG={
				"name":"<span style='text-decoration: underline'>反馈BUG</span>",
				"clear":true,
				"onclick":function(){
					game.open('https://tieba.baidu.com/p/5864374860');
				},
			};
			lib.extensionMenu.extension_扩展ol.show_dh={
				"name":"<span style='text-decoration: underline'>选项导航</span>",
				"clear":true,
				"onclick":function(){
					if(_status.kzol_openedkzjm==undefined) _status.kzol_openedkzjm=false;
					if(_status.kzol_openedkzjm==false){
						var div2=this;
						div2.innerHTML="<span  class='bluetext blueauto' style='text-decoration: underline'>选项导航</span>";
						var dialog=ui.create.dialog('hidden');
						dialog.classList.add('popped');
						dialog.classList.add('static');
						if(get.is.phoneLayout()){
							dialog.style.height='389px';
							dialog.style.top='17px';
							dialog.style.left='538px';
						}else{
							dialog.style.height='300px';
							dialog.style.top='51.5px';
							dialog.style.left='418px';
						};
						dialog.style.width='120px';
						dialog.style.animation='faderightIn .3s';
						dialog.style['-webkit-animation']='faderightIn .3s';
						dialog.style['z-index']=8;
						dialog.style['overflow-x']='hidden';
						dialog.style['overflow-y']='scroll';
						ui.window.appendChild(dialog);
						lib.setScroll(dialog);
						_status.kzol_openedkzjm=dialog;
						var list=[];
						for(var i=0;i<this.parentNode.childNodes.length;i++){
							var div=this.parentNode.childNodes[i];
							if(div.innerHTML.indexOf('---')!=-1) list.push(div);
						};
						var div1=this.parentNode.parentNode;
						var createDiv=function(str,div,func){
							var div_config=ui.create.div('.menubutton.large');
							div_config.style.height='30px';
							div_config.style.width='100px';
							div_config.style.cursor='pointer';
							div_config.style.borderRadius='5px';
							div_config.style['white-space']='nowrap';
							div_config.style.margin='5px';
							if(str.length>4){
								div_config.style['font-size']='20px';
							}else{
								div_config.style['font-size']='23px';
							};
							div_config.style['text-align']='center';
							div_config.style['line-height']='30px';
							div_config.style.transition='opacity 0.5s';
							div_config.innerHTML=str;
							if(div!=false) div_config.link=div;
							div_config.link1=div1;
							dialog.add(div_config);
							if(func==undefined){
								div_config.onclick=function(){
									this.link1.scrollTop=this.link.offsetTop;
								};
							}else{
								div_config.onclick=func;
							};
							div_config.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
								this.style.transform='scale(0.95)';
							});
							div_config.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
								this.style.transform='';
							});
						};
						createDiv('关闭',false,function(){
							div2.innerHTML="<span style='text-decoration: underline'>选项导航</span>";
							_status.kzol_openedkzjm.delete();
							_status.kzol_openedkzjm=false;
						});
						createDiv('返回顶部',false,function(){
							div1.scrollTop=0;
						});
						for(var i=0;i<list.length;i++){
							var div=list[i];
							var str=div.innerHTML.match(/[\u4e00-\u9fa5]/g).join("");
							createDiv(str,div);
						};
						createDiv('返回顶部',false,function(){
							div1.scrollTop=0;
						});
						createDiv('关闭',false,function(){
							div2.innerHTML="<span style='text-decoration: underline'>选项导航</span>";
							_status.kzol_openedkzjm.delete();
							_status.kzol_openedkzjm=false;
						});
						dialog.kzol_interval=setInterval(function(){
							if((div2.parentNode==undefined||
							div2.parentNode.parentNode==undefined||
							div2.parentNode.parentNode.parentNode==undefined||
							div2.parentNode.parentNode.parentNode.parentNode==undefined)||
							ui.menuContainer.classList.contains('hidden')||
							ui.menuContainer.style.display=='none'){
								div2.innerHTML="<span style='text-decoration: underline'>选项导航</span>";
								if(dialog.kzol_interval!=undefined){
									clearInterval(dialog.kzol_interval);
									delete dialog.kzol_interval;
								};
								if(_status.kzol_openedkzjm!=false) _status.kzol_openedkzjm.delete();
								_status.kzol_openedkzjm=false;
							};
						},100);
						/*
						var list=[];
						for(var i=0;i<this.parentNode.childNodes.length;i++){
							var div=this.parentNode.childNodes[i];
							if(div.innerHTML.indexOf('---')!=-1) list.push(div);
						};
						for(var i=list.length-1;i>=0;i--){
							var div=list[i];
							if(i==list.length-1){
								var div_config1=ui.create.div();
								for(var j in div.style){
									div_config1.style[j]=div.style[j];
								};
								div_config1.style['margin-top']='0px';
								div_config1.style['line-height']='20px';
								div_config1.style.height='20px';
								div_config1.style.width='calc(100%)';
								div_config1.style.left='0px';
								div_config1.innerHTML='<b><p align=center> ----------------------------</b>';
								div_config1.link_dh=true;
								this.parentNode.insertBefore(div_config1,this.nextSibling);
							};
							var div_config=ui.create.div('.config');
							for(var j in div.style){
								div_config.style[j]=div.style[j];
							};
							div_config.style['margin-top']='0px';
							div_config.style['line-height']='20px';
							div_config.style.height='20px';
							var str='';
							for(var j=0;j<div.innerHTML.length;j++){
								if(div.innerHTML[j]!='-') str+=div.innerHTML[j];
							};
							div_config.innerHTML='<span style="cursor:pointer;">'+str.slice(13,div.innerHTML.length-15)+'</span>';
							div_config.link_dh=true;
							div_config.link=div;
							this.parentNode.insertBefore(div_config,this.nextSibling);
							div_config.onclick=function(){
								this.parentNode.parentNode.scrollTop=this.link.offsetTop;
							};
						};
						*/
					}else{
						this.innerHTML="<span style='text-decoration: underline'>选项导航</span>";
						if(_status.kzol_openedkzjm.kzol_interval!=undefined){
							clearInterval(_status.kzol_openedkzjm.kzol_interval);
							delete _status.kzol_openedkzjm.kzol_interval;
						};
						_status.kzol_openedkzjm.delete();
						_status.kzol_openedkzjm=false;
						/*
						for(var i=0;i<this.parentNode.childNodes.length;i++){
							var div=this.parentNode.childNodes[i];
							if(div.link_dh==true){
								this.parentNode.removeChild(div);
								i--;
							};
						};
						*/
					};
				},
			};
			lib.extensionMenu.extension_扩展ol.autoUpdate={
				"name":"自动更新",
				"init":true,
				"intro":"开启后，打开游戏时自动更新"
			};
			var kzol_loading=document.createElement("div");
			var kzol_loading_style={
				width:"calc(100%)",
				height:"calc(100%)",
				display:"table",
				background:'rgba(0,0,0,0.5)',
				position:"absolute",
				top:"0px",
				left:"0px",
				zIndex:"9998",
				textAlign:"center",
				'font-size':'37px',
				'font-family':"'STXinwei','xinwei'",
			};
			for(var k in kzol_loading_style){
				kzol_loading.style[k]=kzol_loading_style[k];
			};
			kzol_loading.style.lineHeight=document.body.clientHeight+'px';
			if(lib.config['extension_扩展ol_autoUpdate']!=false){
				kzol_loading.innerHTML='正在检测更新';
			}else{
				kzol_loading.innerHTML='正在加载扩展ol模块中';
			};
			document.body.appendChild(kzol_loading);
			var kzol_loading_info=document.createElement("div");
			var kzol_loading_info_style={
				width:"calc(100%)",
				height:"20px",
				display:"table",
				position:"absolute",
				bottom:"2px",
				left:"3px",
				zIndex:"9999",
				textAlign:"left",
				'font-size':'20px',
				'font-family':"'STXinwei','xinwei'",
			};
			for(var k in kzol_loading_info_style){
				kzol_loading_info.style[k]=kzol_loading_info_style[k];
			};
			kzol_loading_info.innerHTML='本地数据版本：'+lib.config.noname_extensionOL_version;
			document.body.appendChild(kzol_loading_info);
			game.saveConfig('max_loadtime',60000);
			localStorage.setItem(lib.configprefix+'loadtime',60000);
			var ext_onload=lib.init.onload;
			lib.init.onload=function(){
				if(window.ext_loaded==true){
					lib.init.onload=ext_onload;
					lib.init.onload();
				};
			};
			var load=function(){
				var url=lib.assetURL+'extension/扩展ol';
				var load_func=function(){
					lib.program=window.program;
					var list=[];
					var list1=[];
					lib.extensionMenu.extension_扩展ol.enableCharacter={
						"name":"<b><p align=center><span style=\"font-size:18px\">-----武将禁用-----</span></b>",
						"clear":true,
						"nopointer":true,
					};
					lib.extensionMenu.extension_扩展ol.enableCharacter1={
						"name":"设置后禁用武将包（单机）",
						"clear":true,
						"nopointer":true,
					};
					for(var i in lib.program.character){
						list.push(i);
						//lib.config['extension_'+lib.program.character[i]+'_enable']=false;
						//game.saveConfig('extension_'+lib.program.character[i]+'_enable',false);
						lib.extensionMenu['extension_扩展ol'][i]={
							name:lib.program.character[i],
							intro:"将"+lib.program.character[i]+"包内武将设为禁用",
							init:false,
						};
					};
					lib.extensionMenu.extension_扩展ol.enableCard={
						"name":"<b><p align=center><span style=\"font-size:18px\">-----手牌禁用-----</span></b>",
						"clear":true,
						"nopointer":true,
					};
					lib.extensionMenu.extension_扩展ol.enableCard1={
						"name":"设置后移除牌堆中所有禁用包内的手牌",
						"clear":true,
						"nopointer":true,
					};
					for(var i in lib.program.card){
						lib.extensionMenu['extension_扩展ol'][i]={
							name:lib.program.card[i],
							intro:"移除牌堆中"+lib.program.card[i]+"包内的手牌",
							init:false,
						};
					};
					for(var i in lib.program.card){
						list.push(i);
					};
					for(var i in lib.program.mode){
						list.push(i);
					};
					for(var i in lib.program.submode){
						list1.push(i);
						lib.mode.brawl.config[i]={
							name:lib.program.submode[i],
							init:true,
							frequent:true,
						};
					};
					for(var i in lib.program.challenge){
						list1.push(i);
					};
					for(var i in lib.program.content_function){
						list1.push(i);
					};
					for(var i in lib.program.precontent_function){
						list.push(i);
						lib.config['extension_'+lib.program.precontent_function[i]+'_enable']=false;
						game.saveConfig('extension_'+lib.program.precontent_function[i]+'_enable',false);
					};
					var load_num=list.length;
					var load_num1=list1.length;
					var load_num2=list.length+list1.length;
					kzol_loading.innerHTML='正在加载扩展ol模块中（'+(load_num2-(load_num+load_num1))+'/'+(load_num2-1)+'）';
					var kzol_loading_info_str=kzol_loading_info.innerHTML;
					kzol_loading_info.innerHTML='正在加载'+list[0]+'.js<br>'+kzol_loading_info_str;
					var kzol_loading_info_load_num=0;
					var kzol_loading_info_load_num1=0;
					lib.init.js(url,list,function(){
						window.func(lib,game,ui,get,ai,_status);
						kzol_loading.innerHTML='正在加载扩展ol模块中（'+(load_num2-(load_num+load_num1))+'/'+(load_num2-1)+'）';
						load_num--;
						kzol_loading_info_load_num++;
						if(list[kzol_loading_info_load_num]){
							kzol_loading_info.innerHTML='正在加载'+list[kzol_loading_info_load_num]+'.js<br>'+kzol_loading_info_str;
						}else{
							lib.init.js(url,list1,function(){
								lib.content_func.push(window.func);
								kzol_loading.innerHTML='正在加载扩展ol模块中（'+(load_num2-(load_num+load_num1))+'/'+(load_num2-1)+'）';
								load_num1--;
								kzol_loading_info_load_num1++;
								if(list1[kzol_loading_info_load_num1]){
									kzol_loading_info.innerHTML='正在加载'+list1[kzol_loading_info_load_num1]+'.js<br>'+kzol_loading_info_str;
								}else{
									kzol_loading.innerHTML='加载完成';
									kzol_loading_info.innerHTML='加载完成<br>'+kzol_loading_info_str;
								};
							},function(){
								alert('加载失败，即将关闭扩展ol并刷新游戏');
								game.saveConfig('extension_扩展ol_enable',false);
								game.reload();
							});
						};
					},function(){
						alert('加载失败，即将关闭扩展ol并刷新游戏');
						game.saveConfig('extension_扩展ol_enable',false);
						game.reload();
					});
					var load_interval=setInterval(function(){
						if(load_num==0&&load_num1==0){
							window.ext_loaded=true;
							document.body.removeChild(kzol_loading);
							document.body.removeChild(kzol_loading_info);
							//kzol_loading.style.display="none";
							lib.init.onload();
							clearInterval(load_interval);
						};
					},1000);
				};
				lib.init.js(url,'program',load_func,function(){
					if(confirm('未检测到扩展ol模块目录文件，是否重新检测？（取消则关闭扩展ol并刷新游戏）')){
						lib.init.js(url,'program',load_func,function(){
							alert('未检测到扩展ol模块目录文件，即将关闭扩展ol并刷新游戏');
							game.saveConfig('extension_扩展ol_enable',false);
							game.reload();
						});
					}else{
						game.saveConfig('extension_扩展ol_enable',false);
						game.reload();
					};
				});
				game.kzol_showChangeLog=function(){
					var dialog=ui.create.dialog('hidden');
					dialog.style.height='calc(100%)';
					dialog.style.width='calc(100%)';
					dialog.style.left='0px';
					dialog.style.top='0px';
					dialog.style.borderRadius='0px';
					dialog.classList.add('popped');
					dialog.classList.add('static');
					var list_changelog=[];
					for(var i in window.changelog){
						list_changelog.push({
							data:i,
							info:window.changelog[i],
						});
					};
					var showMore=function(){
						var num=20;
						if(num>list_changelog.length) num=list_changelog.length;
						var bool=true;
						for(var i=0;i<num;i++){
							var data=list_changelog[0].data;
							var info=list_changelog[0].info;
							var list=[];
							var list1=[];
							dialog.addText(data+'   ('+info.version+')'+'<br>',false);
							dialog.addText('<li>'+info.info,false);
							if(info.players.length>0){
								for(var j=0;j<info.players.length;j++){
									if(lib.character[info.players[j]]!=undefined) list.push(info.players[j]);
								};
							};
							if(list.length>0) dialog.addSmall([list,'character']);
							if(info.cards.length>0){
								for(var j=0;j<info.cards.length;j++){
									if(lib.card[info.cards[j]]!=undefined) list1.push(info.cards[j]);
								};
							};
							if(list1.length>0) dialog.addSmall([list1,'vcard']);
							list_changelog.remove(list_changelog[0]);
							if(list_changelog.length==0){
								bool=false;
							};
						};
						if(bool==true){
							var div_more=ui.create.div('.menu');
							div_more.style.width='calc(100% - 20px)';
							div_more.style.height='22px';
							//div_more.style.left='-3px';
							div_more.style.cursor='pointer';
							div_more.style['font-size']='20px';
							div_more.style['text-align']='center';
							div_more.style['font-family']="'STXinwei','xinwei'";
							div_more.style['line-height']='22px';
							//div_more.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
							div_more.innerHTML='加载更多';
							dialog.add(div_more);
							div_more.onclick=function(){
								this.parentNode.removeChild(this);
								showMore();
							};
							div_more.style.transition='opacity 0.5s';
							div_more.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
								this.style.transform='scale(0.95)';
							});
							div_more.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
								this.style.transform='';
							});
							div_more.onmouseout=function(){
								this.style.transform='';
							};
						};
					};
					showMore();
					/*
					var interval=setInterval(function(){
						var num=20;
						if(num>list_changelog.length) num=list_changelog.length;
						for(var i=0;i<num;i++){
							var data=list_changelog[0].data;
							var info=list_changelog[0].info;
							var list=[];
							var list1=[];
							dialog.addText(data+'   ('+info.version+')'+'<br>',false);
							dialog.addText('<li>'+info.info,false);
							if(info.players.length>0){
								for(var j=0;j<info.players.length;j++){
									if(lib.character[info.players[j]]!=undefined) list.push(info.players[j]);
								};
							};
							if(list.length>0) dialog.addSmall([list,'character']);
							if(info.cards.length>0){
								for(var j=0;j<info.cards.length;j++){
									if(lib.card[info.cards[j]]!=undefined) list1.push(info.cards[j]);
								};
							};
							if(list1.length>0) dialog.addSmall([list1,'vcard']);
							list_changelog.remove(list_changelog[0]);
							if(list_changelog.length==0){
								clearInterval(interval);
							};
						};
					},100);
					*/
					ui.window.appendChild(dialog);
					var div=ui.create.div('.menubutton.round','×',function(){
						//clearInterval(interval);
						dialog.delete();
						ui.window.removeChild(this);
					});
					div.style.top='5px';
					div.style.left='calc(100% - 55px)';
					div.style['zIndex']=1000;
					ui.window.appendChild(div);
					div.style.transition='opacity 0.5s';
					div.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
						this.style.transform='scale(0.95)';
					});
					div.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
						this.style.transform='';
					});
					div.onmouseout=function(){
						this.style.transform='';
					};
				};
				lib.init.js(url,'update',function(){
					if(lib.config.noname_extensionOL_version!=window.version){
						game.saveConfig('noname_extensionOL_version',window.version);
						lib.content_func.push(function(){
							lib.arenaReady.push(function(){
								ui.noname_extensionOL_update=ui.create.system('扩展ol已更新',function(){
									this.style.display='none';
									game.kzol_showChangeLog();
								},true);
							});
						});
					};
					lib.extensionMenu.extension_扩展ol.changelog.onclick=function(){
						ui.click.configMenu();
						game.kzol_showChangeLog();
					};
				});
				lib.init.js(url,'update',function(){
					lib.extensionMenu.extension_扩展ol.version2.name="本地数据版本："+window.version;
				});
			};
			if(lib.config['extension_扩展ol_autoUpdate']!=false){
				var xmlHttp=new XMLHttpRequest();
				xmlHttp.onreadystatechange=function(){
					if(xmlHttp&&xmlHttp.readyState==4){
						if(xmlHttp.status==200){
							var text=xmlHttp.responseText;
							kzol_loading_info.innerHTML+="<br>coding数据版本："+text;
							lib.extensionMenu.extension_扩展ol.version.name="coding数据版本："+text;
							//console.log(lib.config.noname_extensionOL_version)
							if(lib.config.noname_extensionOL_version!=text){
								var xmlHttp1=new XMLHttpRequest();
								xmlHttp1.onreadystatechange=function(){
									if(xmlHttp1&&xmlHttp1.readyState==4){
										if(xmlHttp1.status==200){
											var list=[];
											var num=0;
											var text=xmlHttp1.responseText;
											var program=JSON.parse(text);
											for(var i in program){
												for(var j in program[i]){
													list.push(j);
												};
											};
											list.push('update');
											list.push('updateFiles1');
											list.push('program');
											list.push('pozhen');
											var num1=list.length;
											kzol_loading.innerHTML='正在更新（'+num+'/'+(num1-1)+'）';
											var kzol_loading_info_str=kzol_loading_info.innerHTML;
											kzol_loading_info.innerHTML='正在下载'+list[0]+'.js<br>'+kzol_loading_info_str;
											var download=function(){
												game.download('https://aurora72.coding.net/p/noname_extensionOL/d/noname_extensionOL/git/raw/master/'+list[0]+'.js','extension/扩展ol/'+list[0]+'.js',function(){
													num++;
													list.remove(list[0]);
													if(list.length>0){
														kzol_loading.innerHTML='正在更新（'+num+'/'+(num1-1)+'）';
														kzol_loading_info.innerHTML='正在下载'+list[0]+'.js<br>'+kzol_loading_info_str;
														download();
													}else{
														kzol_loading_info.innerHTML=kzol_loading_info_str;
														load();
													};
												},function(){
													if(confirm('下载'+list[0]+'.js失败，是否继续下载？（取消则关闭扩展ol并刷新游戏）')){
														download();
													}else{
														game.saveConfig('extension_扩展ol_enable',false);
														game.reload();
													};
												});
											};
											download();
										}else{
											alert('检测下载目录失败，即将关闭扩展ol并刷新游戏');
											game.saveConfig('extension_扩展ol_enable',false);
											game.reload();
										};
									};
								};
								xmlHttp1.open("GET",'https://aurora72.coding.net/p/noname_extensionOL/d/noname_extensionOL/git/raw/master/program1.js',true);
								xmlHttp1.send(null);
							}else{
								load();
							};
						}else{
							alert('检测更新失败，即将关闭扩展ol并刷新游戏');
							game.saveConfig('extension_扩展ol_enable',false);
							game.reload();
						};
					};
				};
				xmlHttp.open("GET",'https://aurora72.coding.net/p/noname_extensionOL/d/noname_extensionOL/git/raw/master/version.js',true);
				xmlHttp.send(null);
			}else{
				var xmlHttp=new XMLHttpRequest();
				xmlHttp.onreadystatechange=function(){
					if(xmlHttp&&xmlHttp.readyState==4){
						if(xmlHttp.status==200){
							var text=xmlHttp.responseText;
							lib.extensionMenu.extension_扩展ol.version.name="coding数据版本："+text;
						};
					};
				};
				xmlHttp.open("GET",'https://aurora72.coding.net/p/noname_extensionOL/d/noname_extensionOL/git/raw/master/version.js',true);
				xmlHttp.send(null);
				load();
			};
		};
	},config:{
		"introduce":{
			"name":"开启扩展ol后,打开游戏时会自动检测更新扩展ol，然后加载本地的扩展ol模块<br>扩展ol素材需要自行下载",
			"clear":true,
			"nopointer":true,
		},
		"jjxf":{
			"name":"<span style='text-decoration: underline'>紧急修复</span>",
			"clear":true,
			"onclick":function(){
				if(confirm('该操作会清除扩展ol本体文件并从coding上重新下载，是否继续？')){
					game.download('https://aurora72.coding.net/p/noname_extensionOL/d/noname_extensionOL/git/raw/master/extension.js','extension/扩展ol/extension.js',function(){
						alert('下载完成，重启生效');
					},function(){
						alert('下载失败');
					});
				};
			},
		},
		"redownload1_1":{
			"name":"<span style='text-decoration: underline'>初始化本地数据版本</span>",
			"clear":true,
			"onclick":function(){
				game.saveConfig('noname_extensionOL_version','1.0.0.0');
				alert('初始化成功');
			},
		},
		"autoUpdate1":{
			"name":"<span style='text-decoration: underline'>关闭自动更新</span>",
			"clear":true,
			"onclick":function(){
				game.saveConfig('extension_扩展ol_autoUpdate',false);
				alert('关闭成功');
			},
		},
		"autoUpdate2":{
			"name":"<span style='text-decoration: underline'>打开自动更新</span>",
			"clear":true,
			"onclick":function(){
				game.saveConfig('extension_扩展ol_autoUpdate',true);
				alert('打开成功');
			},
		},
	},help:{},package:{
		character:{
			character:{
			},
			translate:{
			},
		},
		card:{
			card:{
			},
			translate:{
			},
			list:[],
		},
		skill:{
			skill:{
			},
			translate:{
			},
		},
		intro:"",
		author:"",
		diskURL:"",
		forumURL:"",
		version:"",
	},
	files:{
		"character":[],
		"card":[],
		"skill":[]
	}
	}})