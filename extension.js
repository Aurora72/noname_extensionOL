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
			lib.init.onload=function(){
				ui.updated();
				game.documentZoom=game.deviceZoom;
				if(game.documentZoom!=1){
					ui.updatez();
				}
				ui.background=ui.create.div('.background');
				ui.background.style.backgroundSize="cover";
				ui.background.style.backgroundPosition='50% 50%';
				if(lib.config.image_background&&lib.config.image_background!='default'&&lib.config.image_background.indexOf('custom_')!=0){
					ui.background.setBackgroundImage('image/background/'+lib.config.image_background+'.jpg');
					if(lib.config.image_background_blur){
						ui.background.style.filter='blur(8px)';
						ui.background.style.webkitFilter='blur(8px)';
						ui.background.style.transform='scale(1.05)';
					}
				}
				document.documentElement.style.backgroundImage='';
				document.documentElement.style.backgroundSize='';
				document.documentElement.style.backgroundPosition='';
				document.body.insertBefore(ui.background,document.body.firstChild);
				document.body.onresize=ui.updatexr;
				if(lib.config.touchscreen){
					document.body.addEventListener('touchstart',function(e){
						this.startX=e.touches[0].clientX/game.documentZoom;
						this.startY=e.touches[0].clientY/game.documentZoom;
						_status.dragged=false;
					});
					document.body.addEventListener('touchmove',function(e){
						if(_status.dragged) return;
						if (Math.abs(e.touches[0].clientX/game.documentZoom - this.startX) > 10 ||
							Math.abs(e.touches[0].clientY/game.documentZoom - this.startY) > 10) {
							_status.dragged=true;
						}
					});
				}

				if(lib.config.image_background.indexOf('custom_')==0){
					ui.background.style.backgroundImage="none";
					game.getDB('image',lib.config.image_background,function(fileToLoad){
						if(!fileToLoad) return;
						var fileReader = new FileReader();
						fileReader.onload = function(fileLoadedEvent)
						{
							var data = fileLoadedEvent.target.result;
							ui.background.style.backgroundImage='url('+data+')';
							if(lib.config.image_background_blur){
								ui.background.style.filter='blur(8px)';
								ui.background.style.webkitFilter='blur(8px)';
								ui.background.style.transform='scale(1.05)';
							}
						};
						fileReader.readAsDataURL(fileToLoad, "UTF-8");
					});
				}
				if(lib.config.card_style=='custom'){
					game.getDB('image','card_style',function(fileToLoad){
						if(!fileToLoad) return;
						var fileReader = new FileReader();
						fileReader.onload = function(fileLoadedEvent){
							if(ui.css.card_stylesheet){
								ui.css.card_stylesheet.remove();
							}
							ui.css.card_stylesheet=lib.init.sheet('.card:not(*:empty){background-image:url('+fileLoadedEvent.target.result+')}');
						};
						fileReader.readAsDataURL(fileToLoad, "UTF-8");
					});
				}
				if(lib.config.cardback_style=='custom'){
					game.getDB('image','cardback_style',function(fileToLoad){
						if(!fileToLoad) return;
						var fileReader = new FileReader();
						fileReader.onload = function(fileLoadedEvent){
							if(ui.css.cardback_stylesheet){
								ui.css.cardback_stylesheet.remove();
							}
							ui.css.cardback_stylesheet=lib.init.sheet('.card:empty,.card.infohidden{background-image:url('+fileLoadedEvent.target.result+')}');
						};
						fileReader.readAsDataURL(fileToLoad, "UTF-8");
					});
					game.getDB('image','cardback_style2',function(fileToLoad){
						if(!fileToLoad) return;
						var fileReader = new FileReader();
						fileReader.onload = function(fileLoadedEvent){
							if(ui.css.cardback_stylesheet2){
								ui.css.cardback_stylesheet2.remove();
							}
							ui.css.cardback_stylesheet2=lib.init.sheet('.card.infohidden:not(.infoflip){background-image:url('+fileLoadedEvent.target.result+')}');
						};
						fileReader.readAsDataURL(fileToLoad, "UTF-8");
					});
				}
				if(lib.config.hp_style=='custom'){
					game.getDB('image','hp_style1',function(fileToLoad){
						if(!fileToLoad) return;
						var fileReader = new FileReader();
						fileReader.onload = function(fileLoadedEvent){
							if(ui.css.hp_stylesheet1){
								ui.css.hp_stylesheet1.remove();
							}
							ui.css.hp_stylesheet1=lib.init.sheet('.hp:not(.text):not(.actcount)[data-condition="high"]>div:not(.lost){background-image:url('+fileLoadedEvent.target.result+')}');
						};
						fileReader.readAsDataURL(fileToLoad, "UTF-8");
					});
					game.getDB('image','hp_style2',function(fileToLoad){
						if(!fileToLoad) return;
						var fileReader = new FileReader();
						fileReader.onload = function(fileLoadedEvent){
							if(ui.css.hp_stylesheet2){
								ui.css.hp_stylesheet2.remove();
							}
							ui.css.hp_stylesheet2=lib.init.sheet('.hp:not(.text):not(.actcount)[data-condition="mid"]>div:not(.lost){background-image:url('+fileLoadedEvent.target.result+')}');
						};
						fileReader.readAsDataURL(fileToLoad, "UTF-8");
					});
					game.getDB('image','hp_style3',function(fileToLoad){
						if(!fileToLoad) return;
						var fileReader = new FileReader();
						fileReader.onload = function(fileLoadedEvent){
							if(ui.css.hp_stylesheet3){
								ui.css.hp_stylesheet3.remove();
							}
							ui.css.hp_stylesheet3=lib.init.sheet('.hp:not(.text):not(.actcount)[data-condition="low"]>div:not(.lost){background-image:url('+fileLoadedEvent.target.result+')}');
						};
						fileReader.readAsDataURL(fileToLoad, "UTF-8");
					});
					game.getDB('image','hp_style4',function(fileToLoad){
						if(!fileToLoad) return;
						var fileReader = new FileReader();
						fileReader.onload = function(fileLoadedEvent){
							if(ui.css.hp_stylesheet4){
								ui.css.hp_stylesheet4.remove();
							}
							ui.css.hp_stylesheet4=lib.init.sheet('.hp:not(.text):not(.actcount)>.lost{background-image:url('+fileLoadedEvent.target.result+')}');
						};
						fileReader.readAsDataURL(fileToLoad, "UTF-8");
					});
				}
				if(lib.config.player_style=='custom'){
					ui.css.player_stylesheet=lib.init.sheet('#window .player{background-image:none;background-size:100% 100%;}');
					game.getDB('image','player_style',function(fileToLoad){
						if(!fileToLoad) return;
						var fileReader = new FileReader();
						fileReader.onload = function(fileLoadedEvent){
							if(ui.css.player_stylesheet){
								ui.css.player_stylesheet.remove();
							}
							ui.css.player_stylesheet=lib.init.sheet('#window .player{background-image:url("'+fileLoadedEvent.target.result+'");background-size:100% 100%;}');
						};
						fileReader.readAsDataURL(fileToLoad, "UTF-8");
					});
				}
				if(lib.config.border_style=='custom'){
					game.getDB('image','border_style',function(fileToLoad){
						if(!fileToLoad) return;
						var fileReader = new FileReader();
						fileReader.onload = function(fileLoadedEvent){
							if(ui.css.border_stylesheet){
								ui.css.border_stylesheet.remove();
							}
							ui.css.border_stylesheet=lib.init.sheet();
							ui.css.border_stylesheet.sheet.insertRule('#window .player>.framebg{display:block;background-image:url("'+fileLoadedEvent.target.result+'")}',0);
							ui.css.border_stylesheet.sheet.insertRule('.player>.count{z-index: 3 !important;border-radius: 2px !important;text-align: center !important;}',0);
						};
						fileReader.readAsDataURL(fileToLoad, "UTF-8");
					});
				}
				if(lib.config.control_style=='custom'){
					game.getDB('image','control_style',function(fileToLoad){
						if(!fileToLoad) return;
						var fileReader = new FileReader();
						fileReader.onload = function(fileLoadedEvent){
							if(ui.css.control_stylesheet){
								ui.css.control_stylesheet.remove();
							}
							ui.css.control_stylesheet=lib.init.sheet('#window .control,.menubutton:not(.active):not(.highlight):not(.red):not(.blue),#window #system>div>div{background-image:url("'+fileLoadedEvent.target.result+'")}');
						};
						fileReader.readAsDataURL(fileToLoad, "UTF-8");
					});
				}
				if(lib.config.menu_style=='custom'){
					game.getDB('image','menu_style',function(fileToLoad){
						if(!fileToLoad) return;
						var fileReader = new FileReader();
						fileReader.onload = function(fileLoadedEvent){
							if(ui.css.menu_stylesheet){
								ui.css.menu_stylesheet.remove();
							}
							ui.css.menu_stylesheet=lib.init.sheet('html #window>.dialog.popped,html .menu,html .menubg{background-image:url("'+fileLoadedEvent.target.result+'");background-size:cover}');
						};
						fileReader.readAsDataURL(fileToLoad, "UTF-8");
					});
				}

				var proceed2=function(){
					var mode=lib.imported.mode;
					var card=lib.imported.card;
					var character=lib.imported.character;
					var play=lib.imported.play;
					delete window.game;
					var i,j,k;
					for(i in mode[lib.config.mode].element){
						if(!lib.element[i]) lib.element[i]=[];
						for(j in mode[lib.config.mode].element[i]){
							if(j=='init'){
								if(!lib.element[i].inits) lib.element[i].inits=[];
								lib.element[i].inits.push(mode[lib.config.mode].element[i][j]);
							}
							else{
								lib.element[i][j]=mode[lib.config.mode].element[i][j];
							}
						}
					}
					for(i in mode[lib.config.mode].ai){
						if(typeof mode[lib.config.mode].ai[i]=='object'){
							if(ai[i]==undefined) ai[i]={};
							for(j in mode[lib.config.mode].ai[i]){
								ai[i][j]=mode[lib.config.mode].ai[i][j];
							}
						}
						else{
							ai[i]=mode[lib.config.mode].ai[i];
						}
					}
					for(i in mode[lib.config.mode].ui){
						if(typeof mode[lib.config.mode].ui[i]=='object'){
							if(ui[i]==undefined) ui[i]={};
							for(j in mode[lib.config.mode].ui[i]){
								ui[i][j]=mode[lib.config.mode].ui[i][j];
							}
						}
						else{
							ui[i]=mode[lib.config.mode].ui[i];
						}
					}
					for(i in mode[lib.config.mode].game){
						game[i]=mode[lib.config.mode].game[i];
					}
					for(i in mode[lib.config.mode].get){
						get[i]=mode[lib.config.mode].get[i];
					}
					lib.init.start=mode[lib.config.mode].start;
					lib.init.startBefore=mode[lib.config.mode].startBefore;
					if(game.onwash){
						lib.onwash.push(game.onwash);
						delete game.onwash;
					}
					if(game.onover){
						lib.onover.push(game.onover);
						delete game.onover;
					}
					lib.config.banned=lib.config[lib.config.mode+'_banned']||[];
					lib.config.bannedcards=lib.config[lib.config.mode+'_bannedcards']||[];

					lib.rank=window.noname_character_rank;
					delete window.noname_character_rank;
					for(i in mode[lib.config.mode]){
						if(i=='element') continue;
						if(i=='game') continue;
						if(i=='ai') continue;
						if(i=='ui') continue;
						if(i=='get') continue;
						if(i=='config') continue;
						if(i=='onreinit') continue;
						if(i=='start') continue;
						if(i=='startBefore') continue;
						if(lib[i]==undefined) lib[i]=(Array.isArray(mode[lib.config.mode][i]))?[]:{};
						for(j in mode[lib.config.mode][i]){
							lib[i][j]=mode[lib.config.mode][i][j];
						}
					}
					if(typeof mode[lib.config.mode].init=='function'){
						mode[lib.config.mode].init();
					}

					var connectCharacterPack=[];
					var connectCardPack=[];
					for(i in character){
						if(character[i].character){
							lib.characterPack[i]=character[i].character
						}
						for(j in character[i]){
							if(j=='mode'||j=='forbid') continue;
							if(j=='connect'){
								connectCharacterPack.push(i);
								continue;
							}
							if(j=='character'&&!lib.config.characters.contains(i)&&lib.config.mode!='connect'){
								if(lib.config.mode=='chess'&&get.config('chess_mode')=='leader'){
									for(k in character[i][j]){
										lib.hiddenCharacters.push(k);
									}
								}
								else if(lib.config.mode!='boss'||i!='boss'){
									continue;
								}
							}
							if(Array.isArray(lib[j])&&Array.isArray(character[i][j])){
								lib[j].addArray(character[i][j]);
								continue;
							}
							for(k in character[i][j]){
								if(j=='character'){
									if(!character[i][j][k][4]){
										character[i][j][k][4]=[];
									}
									if(character[i][j][k][4].contains('boss')||
										character[i][j][k][4].contains('hiddenboss')){
										lib.config.forbidai.add(k);
									}
									if(lib.config.forbidai_user&&lib.config.forbidai_user.contains(k)){
										lib.config.forbidai.add(k);
									}
									for(var l=0;l<character[i][j][k][3].length;l++){
										lib.skilllist.add(character[i][j][k][3][l]);
									}
								}
								if(j=='skill'&&k[0]=='_'&&(!lib.config.characters.contains(i)||(lib.config.mode=='connect'&&!character[i].connect))){
									continue;
								}
								if(j=='translate'&&k==i){
									lib[j][k+'_character_config']=character[i][j][k];
								}
								else{
									if(lib[j][k]==undefined){
										if(j=='skill'&&lib.config.mode=='connect'&&!character[i].connect){
											lib[j][k]={
												nopop:character[i][j][k].nopop,
												derivation:character[i][j][k].derivation
											};
										}
										else{
											lib[j][k]=character[i][j][k];
										}
										if(j=='card'&&lib[j][k].derivation){
											if(!lib.cardPack.mode_derivation){
												lib.cardPack.mode_derivation=[k];
											}
											else{
												lib.cardPack.mode_derivation.push(k);
											}
										}
									}
									else if(Array.isArray(lib[j][k])&&Array.isArray(character[i][j][k])){
										lib[j][k].addArray(character[i][j][k]);
									}
									else{
										console.log('dublicate '+j+' in character '+i+':\n'+k+'\n'+': '+lib[j][k]+'\n'+character[i][j][k]);
									}
								}
							}
						}
					}
					var connect_avatar_list=[];
					for(var i in lib.character){
						connect_avatar_list.push(i);
					}
					connect_avatar_list.sort(lib.sort.capt);
					for(var i=0;i<connect_avatar_list.length;i++){
						var ia=connect_avatar_list[i];
						lib.mode.connect.config.connect_avatar.item[ia]=lib.translate[ia];
					}
					if(lib.config.mode!='connect'){
						var pilecfg=lib.config.customcardpile[get.config('cardpilename')||'当前牌堆'];
						if(pilecfg){
							lib.config.bannedpile=get.copy(pilecfg[0]||{});
							lib.config.addedpile=get.copy(pilecfg[1]||{});
						}
						else{
							lib.config.bannedpile={};
							lib.config.addedpile={};
						}
					}
					else{
						lib.cardPackList={};
					}
					for(i in card){
						lib.cardPack[i]=[];
						if(card[i].card){
							for(var j in card[i].card){
								if(!card[i].card[j].hidden&&card[i].translate[j+'_info']){
									lib.cardPack[i].push(j);
								}
							}
						}
						for(j in card[i]){
							if(j=='mode'||j=='forbid') continue;
							if(j=='connect'){
								connectCardPack.push(i);
								continue;
							}
							if(j=='list'){
								if(lib.config.mode=='connect'){
									lib.cardPackList[i]=card[i][j];
								}
								else{
									if(lib.config.cards.contains(i)){
										var pile;
										if(typeof card[i][j]=='function'){
											pile=card[i][j]();
										}
										else{
											pile=card[i][j];
										}
										lib.cardPile[i]=pile.slice(0);
										if(lib.config.bannedpile[i]){
											for(var k=0;k<lib.config.bannedpile[i].length;k++){
												pile[lib.config.bannedpile[i][k]]=null;
											}
										}
										for(var k=0;k<pile.length;k++){
											if(!pile[k]){
												pile.splice(k--,1);
											}
										}
										if(lib.config.addedpile[i]){
											for(var k=0;k<lib.config.addedpile[i].length;k++){
												pile.push(lib.config.addedpile[i][k]);
											}
										}
										lib.card.list=lib.card.list.concat(pile);
									}
								}
							}
							else{
								for(k in card[i][j]){
									if(j=='skill'&&k[0]=='_'&&(!lib.config.cards.contains(i)||(lib.config.mode=='connect'&&!card[i].connect))){
										continue;
									}
									if(j=='translate'&&k==i){
										lib[j][k+'_card_config']=card[i][j][k];
									}
									else{
										if(lib[j][k]==undefined){
											if(j=='skill'&&lib.config.mode=='connect'&&!card[i].connect){
												lib[j][k]={
													nopop:card[i][j][k].nopop,
													derivation:card[i][j][k].derivation
												};
											}
											else{
												lib[j][k]=card[i][j][k];
											}
										}
										else console.log('dublicate '+j+' in card '+i+':\n'+k+'\n'+lib[j][k]+'\n'+card[i][j][k]);
										if(j=='card'&&lib[j][k].derivation){
											if(!lib.cardPack.mode_derivation){
												lib.cardPack.mode_derivation=[k];
											}
											else{
												lib.cardPack.mode_derivation.push(k);
											}
										}
									}
								}
							}
						}
					}
					if(lib.cardPack.mode_derivation){
						for(var i=0;i<lib.cardPack.mode_derivation.length;i++){
							if(typeof lib.card[lib.cardPack.mode_derivation[i]].derivation=='string'&&!lib.character[lib.card[lib.cardPack.mode_derivation[i]].derivation]){
								lib.cardPack.mode_derivation.splice(i--,1);
							}
							else if(typeof lib.card[lib.cardPack.mode_derivation[i]].derivationpack=='string'&&!lib.config.cards.contains(lib.card[lib.cardPack.mode_derivation[i]].derivationpack)){
								lib.cardPack.mode_derivation.splice(i--,1);
							}
						}
						if(lib.cardPack.mode_derivation.length==0){
							delete lib.cardPack.mode_derivation;
						}
					}
					if(lib.config.mode!='connect'){
						for(i in play){
							if(lib.config.hiddenPlayPack.contains(i)) continue;
							if(play[i].forbid&&play[i].forbid.contains(lib.config.mode)) continue;
							if(play[i].mode&&play[i].mode.contains(lib.config.mode)==false) continue;
							for(j in play[i].element){
								if(!lib.element[j]) lib.element[j]=[];
								for(k in play[i].element[j]){
									if(k=='init'){
										if(!lib.element[j].inits) lib.element[j].inits=[];
										lib.element[j].inits.push(play[i].element[j][k]);
									}
									else{
										lib.element[j][k]=play[i].element[j][k];
									}
								}
							}
							for(j in play[i].ui){
								if(typeof play[i].ui[j]=='object'){
									if(ui[j]==undefined) ui[j]={};
									for(k in play[i].ui[j]){
										ui[j][k]=play[i].ui[j][k];
									}
								}
								else{
									ui[j]=play[i].ui[j];
								}
							}
							for(j in play[i].game){
								game[j]=play[i].game[j];
							}
							for(j in play[i].get){
								get[j]=play[i].get[j];
							}
							for(j in play[i]){
								if(j=='mode'||j=='forbid'||j=='init'||j=='element'||
								j=='game'||j=='get'||j=='ui'||j=='arenaReady') continue;
								for(k in play[i][j]){
									if(j=='translate'&&k==i){
										// lib[j][k+'_play_config']=play[i][j][k];
									}
									else{
										if(lib[j][k]!=undefined){
											console.log('dublicate '+j+' in play '+i+':\n'+k+'\n'+': '+lib[j][k]+'\n'+play[i][j][k]);
										}
										lib[j][k]=play[i][j][k];
									}
								}
							}
							if(typeof play[i].init=='function') play[i].init();
							if(typeof play[i].arenaReady=='function') lib.arenaReady.push(play[i].arenaReady);
						}
					}

					lib.connectCharacterPack=[];
					lib.connectCardPack=[];
					for(var i=0;i<lib.config.all.characters.length;i++){
						var packname=lib.config.all.characters[i];
						if(connectCharacterPack.contains(packname)){
							lib.connectCharacterPack.push(packname)
						}
					}
					for(var i=0;i<lib.config.all.cards.length;i++){
						var packname=lib.config.all.cards[i];
						if(connectCardPack.contains(packname)){
							lib.connectCardPack.push(packname)
						}
					}
					if(lib.config.mode!='connect'){
						for(i=0;i<lib.card.list.length;i++){
							if(lib.card.list[i][2]=='huosha'){
								lib.card.list[i]=lib.card.list[i].slice(0);
								lib.card.list[i][2]='sha';
								lib.card.list[i][3]='fire';
							}
							else if(lib.card.list[i][2]=='leisha'){
								lib.card.list[i]=lib.card.list[i].slice(0);
								lib.card.list[i][2]='sha';
								lib.card.list[i][3]='thunder';
							}
							if(!lib.card[lib.card.list[i][2]]){
								lib.card.list.splice(i,1);i--;
							}
							else if(lib.card[lib.card.list[i][2]].mode&&
								lib.card[lib.card.list[i][2]].mode.contains(lib.config.mode)==false){
								lib.card.list.splice(i,1);i--;
							}
						}
					}

					if(lib.config.mode=='connect'){
						_status.connectMode=true;
					}
					if(window.isNonameServer){
						lib.cheat.i();
					}
					else if(lib.config.dev&&(!_status.connectMode||lib.config.debug)){
						lib.cheat.i();
					}
					lib.config.sort_card=get.sortCard(lib.config.sort);
					delete lib.imported.character;
					delete lib.imported.card;
					delete lib.imported.mode;
					delete lib.imported.play;
					for(var i in lib.init){
						if(i.indexOf('setMode_')==0){
							delete lib.init[i];
						}
					}
					if(!_status.connectMode){
						for(var i=0;i<lib.extensions.length;i++){
							try{
								_status.extension=lib.extensions[i][0];
								_status.evaluatingExtension=lib.extensions[i][3];
								lib.extensions[i][1](lib.extensions[i][2],lib.extensions[i][4]);
								if(lib.extensions[i][4]){
									if(lib.extensions[i][4].character){
										for(var j in lib.extensions[i][4].character.character){
											game.addCharacterPack(get.copy(lib.extensions[i][4].character));
											break;
										}
									}
									if(lib.extensions[i][4].card){
										for(var j in lib.extensions[i][4].card.card){
											game.addCardPack(get.copy(lib.extensions[i][4].card));
											break;
										}
									}
									if(lib.extensions[i][4].skill){
										for(var j in lib.extensions[i][4].skill.skill){
											game.addSkill(j,lib.extensions[i][4].skill.skill[j],
											lib.extensions[i][4].skill.translate[j],lib.extensions[i][4].skill.translate[j+'_info']);
										}
									}
								}
								delete _status.extension;
								delete _status.evaluatingExtension;
							}
							catch(e){
								console.log(e);
							}
						}
					}
					delete lib.extensions;

					if(lib.init.startBefore){
						lib.init.startBefore();
						delete lib.init.startBefore;
					}
					ui.create.arena();
					game.createEvent('game',false).setContent(lib.init.start);
					if(lib.mode[lib.config.mode]&&lib.mode[lib.config.mode].fromextension){
						var startstr=mode[lib.config.mode].start.toString();
						if(startstr.indexOf('onfree')==-1){
							setTimeout(lib.init.onfree,500);
						}
					}
					delete lib.init.start;
					game.loop();
				}
				var proceed=function(){
					if(!lib.db){
						try{
							lib.storage=JSON.parse(localStorage.getItem(lib.configprefix+lib.config.mode));
							if(typeof lib.storage!='object') throw('err');
							if(lib.storage==null) throw('err');
						}
						catch(err){
							lib.storage={};
							localStorage.setItem(lib.configprefix+lib.config.mode,"{}");
						}
						proceed2();
					}
					else{
						game.getDB('data',lib.config.mode,function(obj){
							lib.storage=obj||{};
							proceed2();
						});
					}
				};
				if(!lib.imported.mode||!lib.imported.mode[lib.config.mode]){
					window.inSplash=true;
					clearTimeout(window.resetGameTimeout);
					delete window.resetGameTimeout;
					var clickedNode=false;
					var clickNode=function(){
						if(window.ext_loaded==true){
							if(clickedNode) return;
							this.classList.add('clicked');
							clickedNode=true;
							lib.config.mode=this.link;
							game.saveConfig('mode',this.link);
							if(game.layout!='mobile'&&lib.layoutfixed.indexOf(lib.config.mode)!==-1){
								game.layout='mobile';
								ui.css.layout.href=lib.assetURL+'layout/'+game.layout+'/layout.css';
							}
							else if(game.layout=='mobile'&&lib.config.layout!='mobile'&&lib.layoutfixed.indexOf(lib.config.mode)===-1){
								game.layout=lib.config.layout;
								if(game.layout=='default'){
									ui.css.layout.href='';
								}
								else{
									ui.css.layout.href=lib.assetURL+'layout/'+game.layout+'/layout.css';
								}
							}
							splash.delete(1000);
							delete window.inSplash;
							window.resetGameTimeout=setTimeout(lib.init.reset,5000);

							this.listenTransition(function(){
								lib.init.js(lib.assetURL+'mode',lib.config.mode,proceed);
							},500);
						}else{
							alert('扩展ol的模块加载中...')
						};
					}
					var downNode=function(){
						this.classList.add('glow');
					}
					var upNode=function(){
						this.classList.remove('glow');
					}
					var splash=ui.create.div('#splash',document.body);
					if(lib.config.touchscreen){
						splash.classList.add('touch');
						lib.setScroll(splash);
					}
					if(lib.config.player_border!='wide'){
						splash.classList.add('slim');
					}
					splash.dataset.radius_size=lib.config.radius_size;
					for(var i=0;i<lib.config.all.mode.length;i++){
						var node=ui.create.div('.hidden',splash,clickNode);
						node.link=lib.config.all.mode[i];
						ui.create.div(node,'.splashtext',get.verticalStr(get.translation(lib.config.all.mode[i])));
						if(lib.config.all.stockmode.indexOf(lib.config.all.mode[i])!=-1){
							ui.create.div(node,'.avatar').setBackgroundImage('image/splash/'+lib.config.all.mode[i]+'.jpg');
						}
						else{
							var avatarnode=ui.create.div(node,'.avatar');
							var avatarbg=lib.mode[lib.config.all.mode[i]].splash;
							if(avatarbg.indexOf('ext:')==0){
								avatarnode.setBackgroundImage(avatarbg.replace(/ext:/,'extension/'));
							}
							else{
								avatarnode.setBackgroundDB(avatarbg);
							}
						}
						if(!lib.config.touchscreen){
							node.addEventListener('mousedown',downNode);
							node.addEventListener('mouseup',upNode);
							node.addEventListener('mouseleave',upNode);
						}
						setTimeout((function(node){
							return function(){
								node.show();
							}
						}(node)),i*100);
					}
					if(lib.config.mousewheel){
						splash.onmousewheel=ui.click.mousewheel;
					}
				}
				else{
					proceed();
				}
				localStorage.removeItem(lib.configprefix+'directstart');
				delete lib.init.init;
			};
	if(extensionOL.enable){
		if(lib.config.noname_extensionOL_version==undefined) game.saveConfig('noname_extensionOL_version','1.0.0.0');
		if(lib.config.noname_extensionOL_updateFiles==undefined) game.saveConfig('noname_extensionOL_updateFiles',{});
		if(lib.config.noname_extensionOL_version1!='1.11.9') game.saveConfig('noname_extensionOL_version1','1.11.9');
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
				"name":"设置后禁用武将包",
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
			var load_num=list.length;
			var load_num1=list1.length;
			lib.init.js(url,list,function(){
				window.func(lib,game,ui,get,ai,_status);
				load_num--;
			});
			lib.init.js(url,list1,function(){
				lib.content_func.push(window.func);
				load_num1--;
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
						if(lib.achievement!=undefined){
							for(var i in lib.achievement.course){
								var str=i+'.jpg';
								if(lib.config['noname_extensionOL_updateFiles'][str]!=true) list2.push(str);
							};
							for(var i in lib.achievement.wu){
								var str=i+'.jpg';
								if(lib.config['noname_extensionOL_updateFiles'][str]!=true) list2.push(str);
							};
							for(var i in lib.achievement.shu){
								var str=i+'.jpg';
								if(lib.config['noname_extensionOL_updateFiles'][str]!=true) list2.push(str);
							};
							for(var i in lib.achievement.wei){
								var str=i+'.jpg';
								if(lib.config['noname_extensionOL_updateFiles'][str]!=true) list2.push(str);
							};
							for(var i in lib.achievement.qun){
								var str=i+'.jpg';
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
			var load_interval=setInterval(function(){
				if(load_num==0&&load_num1==0){
					window.ext_loaded=true;
					clearInterval(load_interval);
				};
			},1000);
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
