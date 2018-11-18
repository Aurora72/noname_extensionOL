game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"扩展ol",content:function (config,pack){
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
	if(lib.config.mode_config.partner.mode=='jieyi'){
		lib.skill._CW_jieyi={
			mode:['partner'],
			enable:"phaseUse",
			usable:1,
			filterTarget:function (card,player,target){
				return player!=target&&player.identity==target.identity&&target.countCards('h')+player.countCards('h')>0&&_status.mode=='jieyi';
			},
			content:function(){
				'step 0'
				if(target.countCards('h')>0){
					target.$give(target.countCards('h'),player);
					player.gain(target.get('h'));
				};
				player.chooseCard('请选择给予'+get.translation(target.name)+'的牌',Math.ceil((target.countCards('h')+player.countCards('h'))/2),'h',true).set('ai',function(card){
					return 7-get.value(card);
				});
				'step 1'
				if(result.bool){
					player.$give(result.cards.length,target);
					target.gain(result.cards);
				};
			},
			ai:{
				order:2,
				result:{
					target:function(player,target){
						if(player.countCards('h')-target.countCards('h')>=2) return 1;
					},
				},
			},
		};
		lib.translate._CW_jieyi='结义';
	};
},precontent:function (extensionOL){
	if(lib.config.mode_config.partner==undefined){
		lib.config.mode_config.partner={};
		lib.config.mode_config.partner.mode='standard';
		lib.config.mode_config.partner.players=4;
		lib.config.mode_config.partner.chooseCharacterLimit='no';
		lib.config.mode_config.partner.chooseCharacterPriority='random';
		lib.config.mode_config.partner.chooseCharacterNumber=3;
	};
	game.addMode('partner',{
		start:function(){
			'step 0'
			/*var cssStyle=function(){
				var style=document.createElement('style');
				style.innerHTML="[data-number='10']>.player[data-position='1']{top:calc(200% / 3 - 145px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='2']{top:calc(100% / 3 - 120px);left:calc(95% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='3']{top:30px;left:calc(80% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='4']{top:5px;left:calc(65% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='5']{top:0;left:calc(50% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='6']{top:5px;left:calc(35% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='7']{top:30px;left:calc(20% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='8']{top:calc(100% / 3 - 120px);left:calc(5% - 75px);}";
				style.innerHTML+="[data-number='10']>.player[data-position='9']{top:calc(200% / 3 - 145px);left:calc(5% - 75px);}";
				document.head.appendChild(style);
			};
			cssStyle();*/
			'step 1'
			_status.mode=get.config('mode');
			game.prepareArena(get.config('players'));
			var num=1;
			for(var i=0;i<game.players.length;i++){
				var pl=game.players[i];
				pl.getId();
				pl.style.backgroundSize='100% 100%';
				pl.setBackgroundImage('extension/扩展ol/'+num+'.jpg');
				pl.identity=get.cnNumber(num);
				pl.setIdentity(get.cnNumber(num));
				if(num==1) pl.node.identity.dataset.color='zhu';
				if(num==2) pl.node.identity.dataset.color='friend';
				if(num==3) pl.node.identity.dataset.color='fan';
				if(num==4) pl.node.identity.dataset.color='zhong';
				if(num==5) pl.node.identity.dataset.color='nei';
				if((i+1)%2==0) num++;
			};
			'step 2'
			game.chooseCharacter();
			'step 3'
			event.trigger('gameStart');
			game.gameDraw();
			game.phaseLoop(game.players.randomGet());
		},
		game:{
			chooseCharacter:function(){
				var next=game.createEvent('chooseCharacter',false);
				next.showConfig=true;
				next.setContent(function(){
					"step 0"
					var num=get.config('chooseCharacterNumber');
					if(get.config('chooseCharacterPriority')=='yes'){
						event.bool=true;
					}else if(get.config('chooseCharacterPriority')=='no'){
						event.bool=false;
					}else{
						if(Math.random()<=0.5){
							event.bool=true;
						}else{
							event.bool=false;
						};
					};
					event.list1=[];
					event.list2=[];
					event.list3=[];
					for(var i in lib.character){
						if(lib.filter.characterDisabled(i)) continue;
						var sex=lib.character[i][0];
						if(sex=='male') event.list1.push(i);
						if(sex=='female') event.list2.push(i);
						event.list3.push(i);
					};
					if(event.bool==true){
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl!=game.me&&pl.identity==game.me.identity){
								var character=event.list3.randomGet();
								event.player=pl;
								pl.init(character);
								var DY_sex=lib.character[character][0];
								if(DY_sex=='male') event.list1.remove(character);
								if(DY_sex=='female') event.list2.remove(character);
								event.list3.remove(character);
							};
						};
					};
					var list=[];
					if(get.config('chooseCharacterLimit')=='yixing'&&event.bool==true){
						if(DY_sex=='male') list=event.list2.randomGets(num);
						if(DY_sex=='female') list=event.list1.randomGets(num);
					}else if(get.config('chooseCharacterLimit')=='tongxing'&&event.bool==true){
						if(DY_sex=='male') list=event.list1.randomGets(num);
						if(DY_sex=='female') list=event.list2.randomGets(num);
					}else{
						list=event.list3.randomGets(num);
					};
					var str='';
					var str1='';
					var list1='';
					if(event.bool==true&&lib.perfectPair[character]!=undefined){
						var partner=lib.perfectPair[character];
						var list2=[];
						for(var i=0;i<partner.length;i++){
							var pr=partner[i];
							if(lib.character[pr]!=undefined){
								var sex=lib.character[pr][0];
								if(get.config('chooseCharacterLimit')=='yixing'){
									if(sex!=DY_sex) list2.push(pr);
								}else if(get.config('chooseCharacterLimit')=='tongxing'){
									if(sex==DY_sex) list2.push(pr);
								}else{
									list2.push(pr);
								};
							};
						};
					};
					if(list2!=undefined&&list2.length>0){
						str='随机武将';
						str1='珠联璧合武将';
						list1=[list2,'character'];
					};
					var dialog=ui.create.dialog('选择角色','hidden',str,[list,'character'],str1,list1);
					dialog.setCaption('选择角色');
					game.me.chooseButton(dialog,true).set('onfree',true);
					ui.create.cheat=function(){
						_status.createControl=ui.cheat2;
						ui.cheat=ui.create.control('更换',function(){
							if(ui.cheat2&&ui.cheat2.dialog==_status.event.dialog) return;
							if(game.changeCoin) game.changeCoin(-3);
							var buttons=ui.create.div('.buttons');
							var node=_status.event.dialog.buttons[0].parentNode;
							if(get.config('chooseCharacterLimit')=='yixing'&&event.bool==true){
								if(DY_sex=='male') list=event.list2.randomGets(num);
								if(DY_sex=='female') list=event.list1.randomGets(num);
							}else if(get.config('chooseCharacterLimit')=='tongxing'&&event.bool==true){
								if(DY_sex=='male') list=event.list1.randomGets(num);
								if(DY_sex=='female') list=event.list2.randomGets(num);
							}else{
								list=event.list3.randomGets(num);
							};
							_status.event.dialog.buttons=ui.create.buttons(list,'character',buttons);
							_status.event.dialog.content.insertBefore(buttons,node);
							buttons.animate('start');
							node.remove();
							game.uncheck();
							game.check();
						});
						delete _status.createControl;
					};
					ui.create.cheat();
					"step 1"
					ui.cheat.close();
					delete ui.cheat;
					var PL_character=result.buttons[0].link;
					game.me.init(PL_character);
					var PL_sex=lib.character[PL_character][0];
					if(PL_sex=='male') event.list1.remove(PL_character);
					if(PL_sex=='female') event.list2.remove(PL_character);
					event.list3.remove(PL_character);
					for(var i=0;i<game.players.length;i++){
						var pl=game.players[i];
						if(pl!=game.me&&pl!=event.player){
							if(get.config('chooseCharacterLimit')=='yixing'){
								if(game.countPlayer(function(current){return pl.identity==current.identity&&current.sex=='male'})>0){
									var character=event.list2.randomGet();
								}else if(game.countPlayer(function(current){return pl.identity==current.identity&&current.sex=='female'})>0){
									var character=event.list1.randomGet();
								}else{
									var character=event.list3.randomGet();
								};
							}else if(get.config('chooseCharacterLimit')=='tongxing'){
								if(game.countPlayer(function(current){return pl.identity==current.identity&&current.sex=='male'})>0){
									var character=event.list1.randomGet();
								}else if(game.countPlayer(function(current){return pl.identity==current.identity&&current.sex=='female'})>0){
									var character=event.list2.randomGet();
								}else{
									var character=event.list3.randomGet();
								};
							}else{
								var character=event.list3.randomGet();
							};
							pl.init(character);
							var sex=lib.character[character][0];
							if(sex=='male') event.list1.remove(character);
							if(sex=='female') event.list2.remove(character);
							event.list3.remove(character);
						};
					};
					setTimeout(function(){
						ui.arena.classList.remove('choose-character');
					},500);
				});
			},
		},
		element:{
			player:{
				dieAfter:function(source){
					var list=[];
					for(var i=0;i<game.players.length;i++){
						var pl=game.players[i];
						if(list.contains(pl.identity)) continue;
						list.push(pl.identity);
					};
					if(game.countPlayer(function(current){
						if(list.contains(current.identity)){
							list.remove(current.identity);
							return true;
						};
					})==1){
						if(game.me.isDead()){
							game.over(false);
						}else{
							game.over(true);
						};
					};
					if(source&&this.identity==source.identity) source.discard(source.get('he'));
					if(source&&this.identity!=source.identity) source.draw(2);
					if(_status.mode=='gongsi'){
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.identity==this.identity){
								pl.popup('同生共死');
								game.delay(0.75);
								if(source) source.line(pl);
								var die=pl.die();
								if(source) die.source=source;
							};
						};
					};
				},
			},
		},
		ai:{
			get:{
				attitude:function(from,to){
					if(from.identity==to.identity) return 5;
					return -1-game.countPlayer(function(current){return to.identity==current.identity})*3;
				},
			},
		},
	},{
		translate:'成对',
		config:{
			mode:{
				name:'游戏模式',
				init:'standard',
				item:{
					'standard':'标准',
					'jieyi':'结义',
					'gongsi':'共死',
				},
				frequent:true,
				restart:true,
			},
			players:{
				name:'游戏人数',
				init:4,
				item:{
					4:'2对',
					6:'3对',
					8:'4对',
					10:'5对',
					/*12:'6对',
					14:'7对',
					16:'8对',*/
				},
				frequent:true,
				restart:true,
			},
			chooseCharacterLimit:{
				name:'成对限制',
				init:'no',
				item:{
					'no':'无',
					'tongxing':'同性',
					'yixing':'异性',
				},
				frequent:true,
				restart:true,
			},
			chooseCharacterPriority:{
				name:'队友先选',
				init:'random',
				item:{
					'random':'随机',
					'yes':'是',
					'no':'否',
				},
				frequent:true,
				restart:true,
			},
			/*seat:{
				name:'座位排列',
				init:'lianhe',
				item:{
					'lianhe':'联合',
					'jiaoti':'交替',
				},
				frequent:true,
				restart:true,
			},*/
			chooseCharacterNumber:{
				name:'候选人数',
				init:3,
				item:{
					1:'1',
					2:'2',
					3:'3',
					4:'4',
					5:'5',
					6:'6',
				},
				frequent:true,
				restart:true,
			},
		},
	});
	if(extensionOL.enable){
		if(lib.config.noname_extensionOL_version==undefined) game.saveConfig('noname_extensionOL_version','1.0.0.0');
		if(lib.config.noname_extensionOL_updateFiles==undefined) game.saveConfig('noname_extensionOL_updateFiles',{});
		if(lib.config.noname_extensionOL_version1!='1.11.6') game.saveConfig('noname_extensionOL_version1','1.11.6');
		delete lib.extensionMenu.extension_扩展ol.delete;
		delete lib.extensionMenu.extension_扩展ol.edit;
		lib.content_func=[];
		var url='https://coding.net/u/aurora72/p/noname_extensionOL/git/raw/master';
		if(lib.config.extension_扩展ol_change=='local') url=lib.assetURL+'extension/扩展ol';
		lib.init.js('https://coding.net/u/aurora72/p/noname_extensionOL/git/raw/master','program',function(){
			lib.programOL=window.program;
		});
		lib.init.js(url,'program',function(){
			lib.program=window.program;
			var list=[];
			var list1=[];
			lib.extensionMenu.extension_扩展ol.enableCharacter={
				"name":"<b><p align=center><span style=\"font-size:18px\">-----武将禁用-----</span></b>",
				"clear":true,
				"nopointer":true,
			};
			lib.extensionMenu.extension_扩展ol.enableCharacter1={
				"name":"设置后武将数据仍在，但ai禁用，玩家禁选（自由选择除外）",
				"clear":true,
				"nopointer":true,
			};
			for(var i in lib.program.character){
				list.push(i);
				lib.config['extension_'+lib.program.character[i]+'_enable']=false;
				game.saveConfig('extension_'+lib.program.character[i]+'_enable',false);
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
			lib.init.js(url,list,function(){
				window.func(lib,game,ui,get,ai,_status);
			});
			lib.init.js(url,list1,function(){
				lib.content_func.push(window.func);
			});
			lib.init.js('https://coding.net/u/aurora72/p/noname_extensionOL/git/raw/master','updateFiles',function(){
				var list2=[];
				var list3=[];
				var list4=[];
				for(var i=0;i<window.updateFiles.length;i++){
					if(lib.config['noname_extensionOL_updateFiles'][window.updateFiles[i]]!=true) list2.push(window.updateFiles[i]);
				};
				for(var i=0;i<window.updateFiles1.length;i++){
					if(lib.config['noname_extensionOL_updateFiles'][window.updateFiles1[i]]!=true) list3.push(window.updateFiles1[i]);
				};
				for(var i=0;i<window.updateFiles2.length;i++){
					if(lib.config['noname_extensionOL_updateFiles'][window.updateFiles2[i]]!=true) list4.push(window.updateFiles2[i]);
				};
				lib.extensionMenu.extension_扩展ol.download.onclick=function(){
					if(lib.extensionOL_onDownload!=true){
						lib.extensionOL_onDownload=true;
						for(var i in lib.program.character){
							for(var j in lib.characterPack[i]){
								if(i=='yl'){
									var str=j+'.png';
								}else if(i=='nyhzrlj'){
									var str='New'+j;
									str=str.slice(0,str.length-2);
									str=str+'.jpg';
								}else{
									var str=j+'.jpg';
								};
								if(lib.config['noname_extensionOL_updateFiles'][str]!=true) list2.push(str);
							};
						};
						if(list2.length==0){
							alert('素材已是最新');
							delete lib.extensionOL_onDownload;
						}else{
							var num=0;
							var num1=list2.length;
							lib.extensionOL_config=this;
							lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>正在下载："+num+"/"+num1+"</span>";
							var download=function(){
								game.download('https://raw.githubusercontent.com/aurora72/noname_extensionOL/master/image/'+list2[0],'extension/扩展ol/'+list2[0],function(){
									num++;
									lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>正在下载："+num+"/"+num1+"</span>";
									lib.config['noname_extensionOL_updateFiles'][list2[0]]=true;
									game.saveConfig('noname_extensionOL_updateFiles',lib.config['noname_extensionOL_updateFiles']);
									list2.remove(list2[0]);
									if(list2.length>0){
										download();
									}else{
										lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>下载完成，重启生效</span>";
										delete lib.extensionOL_config;
										delete lib.extensionOL_onDownload;
									};
								},function(){
									alert('下载失败');
									lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>点击重新下载</span>";
									num=0;
									num1=0;
									list2=[];
									delete lib.extensionOL_config;
									delete lib.extensionOL_onDownload;
								});
							};
							download();
						};
					}else{
						alert('请等待正在更新的内容更新结束');
					};
				};
				lib.extensionMenu.extension_扩展ol.download11.onclick=function(){
					if(lib.extensionOL_onDownload!=true){
						lib.extensionOL_onDownload=true;
						if(list3.length==0){
							alert('素材已是最新');
							delete lib.extensionOL_onDownload;
						}else{
							var num=0;
							var num1=list3.length;
							lib.extensionOL_config=this;
							lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>正在下载："+num+"/"+num1+"</span>";
							var download=function(){
								game.download('https://raw.githubusercontent.com/aurora72/noname_extensionOL/master/audio/skill/'+list3[0],'extension/扩展ol/'+list3[0],function(){
									num++;
									lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>正在下载："+num+"/"+num1+"</span>";
									lib.config['noname_extensionOL_updateFiles'][list3[0]]=true;
									game.saveConfig('noname_extensionOL_updateFiles',lib.config['noname_extensionOL_updateFiles']);
									list3.remove(list3[0]);
									if(list3.length>0){
										download();
									}else{
										lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>下载完成，重启生效</span>";
										delete lib.extensionOL_config;
										delete lib.extensionOL_onDownload;
									};
								},function(){
									alert('下载失败');
									lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>点击重新下载</span>";
									num=0;
									num1=0;
									delete lib.extensionOL_config;
									delete lib.extensionOL_onDownload;
								});
							};
							download();
						};
					}else{
						alert('请等待正在更新的内容更新结束');
					};
				};
				lib.extensionMenu.extension_扩展ol.download12.onclick=function(){
					if(lib.extensionOL_onDownload!=true){
						lib.extensionOL_onDownload=true;
						if(list4.length==0){
							alert('素材已是最新');
							delete lib.extensionOL_onDownload;
						}else{
							var num=0;
							var num1=list4.length;
							lib.extensionOL_config=this;
							lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>正在下载："+num+"/"+num1+"</span>";
							var download=function(){
								game.download('https://raw.githubusercontent.com/aurora72/noname_extensionOL/master/audio/die/'+list4[0],'audio/die/'+list4[0],function(){
									num++;
									lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>正在下载："+num+"/"+num1+"</span>";
									lib.config['noname_extensionOL_updateFiles'][list4[0]]=true;
									game.saveConfig('noname_extensionOL_updateFiles',lib.config['noname_extensionOL_updateFiles']);
									list4.remove(list4[0]);
									if(list4.length>0){
										download();
									}else{
										lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>下载完成，重启生效</span>";
										delete lib.extensionOL_config;
										delete lib.extensionOL_onDownload;
									};
								},function(){
									alert('下载失败');
									lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>点击重新下载</span>";
									num=0;
									num1=0;
									delete lib.extensionOL_config;
									delete lib.extensionOL_onDownload;
								});
							};
							download();
						};
					}else{
						alert('请等待正在更新的内容更新结束');
					};
				};
			});
		});
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
		if(!lib.device){
			lib.extensionMenu.extension_扩展ol.download1={
				"name":"<span style='text-decoration: underline'>下载扩展ol数据至本地</span>",
				"clear":true,
				"onclick":function(){
					if(lib.extensionOL_onDownload!=true){
						lib.extensionOL_onDownload=true;
						if(lib.programOL!=undefined){
							var list=[];
							for(var i in lib.programOL){
								for(var j in lib.programOL[i]){
									list.push(j);
								};
							};
							list.push('program');
							list.push('update');
							var num=0;
							var num1=list.length;
							lib.extensionOL_config=this;
							lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>正在下载："+num+"/"+num1+"</span>";
							var download=function(){
								game.download('https://coding.net/u/aurora72/p/noname_extensionOL/git/raw/master/'+list[0]+'.js','extension/扩展ol/'+list[0]+'.js',function(){
									num++;
									lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>正在下载："+num+"/"+num1+"</span>";
									list.remove(list[0]);
									if(list.length>0){
										download();
									}else{
										lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>下载完成，重启生效</span>";
										delete lib.extensionOL_config;
										delete lib.extensionOL_onDownload;
									};
								},function(){
									alert('下载失败');
									lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>点击重新下载</span>";
									num=0;
									num1=0;
									list2=[];
									delete lib.extensionOL_config;
									delete lib.extensionOL_onDownload;
								});
							};
							download();
						}else{
							alert('网络链接失败');
						};
					}else{
						alert('请等待正在更新的内容更新结束');
					};
				},
			};
		}else{
			lib.extensionMenu.extension_扩展ol.SJ_URL={
				"name":"<span style='text-decoration: underline'>数据链接</span>",
				"clear":true,
				"onclick":function(){
					window.open('https://coding.net/u/aurora72/p/noname_extensionOL/git');
				},
			};
		};
		lib.extensionMenu.extension_扩展ol.download={
			"name":"<span style='text-decoration: underline'>下载图片素材</span>",
			"clear":true,
			"onclick":function(){
				alert('网络链接失败');
			},
		};
		lib.extensionMenu.extension_扩展ol.download11={
			"name":"<span style='text-decoration: underline'>下载技能配音素材</span>",
			"clear":true,
			"onclick":function(){
				alert('网络链接失败');
			},
		};
		lib.extensionMenu.extension_扩展ol.download12={
			"name":"<span style='text-decoration: underline'>下载死亡配音素材</span>",
			"clear":true,
			"onclick":function(){
				alert('网络链接失败');
			},
		};
		lib.extensionMenu.extension_扩展ol.change={
			"name":'加载数据来源',
			"init":'ol',
			"item":{
				'ol':'coding',
			},
		};
		lib.init.js('https://coding.net/u/aurora72/p/noname_extensionOL/git/raw/master','update',function(){
			lib.extensionMenu.extension_扩展ol.version.name="coding数据版本："+window.version;
			if(lib.config.noname_extensionOL_version!=window.version){
				game.saveConfig('noname_extensionOL_version',window.version);
				lib.content_func.push(function(){
					lib.arenaReady.push(function(){
						var func=function(){
							var dialog=ui.create.dialog('hidden');
							dialog.style.height='calc(100%)';
							dialog.style.width='calc(100%)';
							dialog.style.left='0px';
							dialog.style.top='0px';
							dialog.classList.add('popped');
							dialog.classList.add('static');
							var div=ui.create.div('.menubutton.round','×',function(){
								dialog.delete();
							});
							div.style.left='calc(50% - 35px)';
							dialog.add(div);
							for(var i in window.changelog){
								var list=[];
								var list1=[];
								dialog.addText(i+'   ('+window.changelog[i].version+')'+'<br>',false);
								dialog.addText('<li>'+window.changelog[i].info,false);
								if(window.changelog[i].players.length>0){
									for(var j=0;j<window.changelog[i].players.length;j++){
										if(lib.character[window.changelog[i].players[j]]!=undefined) list.push(window.changelog[i].players[j]);
									};
								};
								if(list.length>0) dialog.addSmall([list,'character']);
								if(window.changelog[i].cards.length>0){
									for(var j=0;j<window.changelog[i].cards.length;j++){
										if(lib.card[window.changelog[i].cards[j]]!=undefined) list1.push(window.changelog[i].cards[j]);
									};
								};
								if(list1.length>0) dialog.addSmall([list1,'vcard']);
							};
							ui.window.appendChild(dialog);
						};
						ui.noname_extensionOL_update=ui.create.system('扩展ol已更新',func,true);
					});
				});
			};
			lib.extensionMenu.extension_扩展ol.changelog.onclick=function(){
				ui.click.configMenu();
				var dialog=ui.create.dialog('hidden');
				dialog.style.height='calc(100%)';
				dialog.style.width='calc(100%)';
				dialog.style.left='0px';
				dialog.style.top='0px';
				dialog.classList.add('popped');
				dialog.classList.add('static');
				var div=ui.create.div('.menubutton.round','×',function(){
					dialog.delete();
				});
				div.style.left='calc(50% - 35px)';
				dialog.add(div);
				for(var i in window.changelog){
					var list=[];
					var list1=[];
					dialog.addText(i+'   ('+window.changelog[i].version+')'+'<br>',false);
					dialog.addText('<li>'+window.changelog[i].info,false);
					if(window.changelog[i].players.length>0){
						for(var j=0;j<window.changelog[i].players.length;j++){
							if(lib.character[window.changelog[i].players[j]]!=undefined) list.push(window.changelog[i].players[j]);
						};
					};
					if(list.length>0) dialog.addSmall([list,'character']);
					if(window.changelog[i].cards.length>0){
						for(var j=0;j<window.changelog[i].cards.length;j++){
							if(lib.card[window.changelog[i].cards[j]]!=undefined) list1.push(window.changelog[i].cards[j]);
						};
					};
					if(list1.length>0) dialog.addSmall([list1,'vcard']);
				};
				ui.window.appendChild(dialog);
			};
		});
		lib.init.js(lib.assetURL+'extension/扩展ol','update',function(){
			lib.extensionMenu.extension_扩展ol.version2.name="本地数据版本："+window.version;
			if(!lib.device){
				if(lib.config.noname_extensionOL_version!=window.version){
					lib.extensionMenu.extension_扩展ol.download1.name="<span style='text-decoration: underline'>更新扩展ol数据</span>";
				};
				if(lib.config.noname_extensionOL_version==window.version){
					lib.extensionMenu.extension_扩展ol.download1.name="<span style='text-decoration: underline'>本地数据已是最新</span>";
					lib.extensionMenu.extension_扩展ol.download1.onclick=function(){
						alert('本地数据已是最新');
					};
				};
			};
			lib.extensionMenu.extension_扩展ol.change.item.local='本地';
		});
		delete lib.config.mode;
	};
},config:{
	"introduce":{
		"name":"开启该扩展且联网后加载coding上的扩展ol数据；也可将数据下载到本地，加载本地数据<br>扩展ol素材需要自行下载",
		"clear":true,
		"nopointer":true,
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
},files:{"character":[],"card":[],"skill":[]}}})
