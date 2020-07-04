window.func=function(lib,game,ui,get,ai,_status){
	if(lib.config.mode_config.partner==undefined){
		lib.config.mode_config.partner={};
		lib.config.mode_config.partner.mode='standard';
		game.saveConfig('mode','standard','partner');
		lib.config.mode_config.partner.players=4;
		game.saveConfig('players',4,'partner');
		lib.config.mode_config.partner.chooseCharacterLimit='no';
		game.saveConfig('chooseCharacterLimit','no','partner');
		lib.config.mode_config.partner.chooseCharacterPriority='random';
		game.saveConfig('chooseCharacterPriority','random','partner');
		lib.config.mode_config.partner.chooseCharacterNumber=3;
		game.saveConfig('chooseCharacterNumber',3,'partner');
		lib.config.mode_config.partner.free_choose=true;
		game.saveConfig('free_choose',true,'partner');
		lib.config.mode_config.partner.change_choice=true;
		game.saveConfig('change_choice',true,'partner');
	};
	if(lib.config['extension_扩展ol_mode_hide_partner']==true) return ;
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
		lib.translate._CW_jieyi_info='出牌阶段限一次，你可以令你的队友将其所有手牌给予你，然后由你分配双方手牌（给予队友的牌不能小于X，X为分配时你手牌数的一半（向上取整））';
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
						str1='与队友珠联璧合的武将';
						list1=[list2,'character'];
					};
					var dialog=ui.create.dialog('选择角色','hidden',str,[list,'character'],str1,list1);
					dialog.setCaption('选择角色');
					game.me.chooseButton(dialog,true).set('onfree',true);
					if(lib.config.mode_config.partner.change_choice==true){
						ui.create.cheat=function(){
							_status.createControl=ui.cheat2;
							ui.cheat=ui.create.control('更换',function(){
								if(ui.cheat2&&ui.cheat2.dialog==_status.event.dialog) return;
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
					};
					if(lib.config.mode_config.partner.free_choose==true){
						event.dialogxx=ui.create.characterDialog('heightset');
						ui.create.cheat2=function(){
							ui.cheat2=ui.create.control('自由选将',function(){
								if(this.dialog==_status.event.dialog){
									this.dialog.close();
									_status.event.dialog=this.backup;
									this.backup.open();
									delete this.backup;
									game.uncheck();
									game.check();
								}
								else{
									this.backup=_status.event.dialog;
									_status.event.dialog.close();
									_status.event.dialog=_status.event.parent.dialogxx;
									this.dialog=_status.event.dialog;
									this.dialog.open();
									game.uncheck();
									game.check();
								}
							});
						};
						ui.create.cheat2();
					};
					"step 1"
					if(ui.cheat){
						ui.cheat.close();
						delete ui.cheat;
					};
					if(ui.cheat2){
						ui.cheat2.close();
						delete ui.cheat2;
					};
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
			content:{
				gameDraw:function(){
					"step 0"
					if(_status.brawl&&_status.brawl.noGameDraw){
						event.finish();
						return;
					}
					var end=player;
					var numx=num;
					do{
						if(typeof num=='function'){
							numx=num(player);
						}
						player.directgain(get.cards(numx));
						if(player.singleHp===true&&get.mode()!='guozhan'){
							player.doubleDraw();
						}
						player=player.next;
					}
					while(player!=end);
					event.changeCard=get.config('change_card');
					"step 1"
					if(event.changeCard!='disabled'&&!_status.auto){
						event.dialog=ui.create.dialog('是否使用手气卡？');
						ui.create.confirm('oc');
						event.custom.replace.confirm=function(bool){
							_status.event.bool=bool;
							game.resume();
						}
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.changeCard=='once'){
						event.changeCard='disabled';
					}
					else if(event.changeCard=='twice'){
						event.changeCard='once';
					}
					else if(event.changeCard=='disabled'){
						event.bool=false;
						return;
					}
					_status.imchoosing=true;
					event.switchToAuto=function(){
						_status.event.bool=false;
						game.resume();
					}
					game.pause();
					"step 3"
					_status.imchoosing=false;
					if(event.bool){
						if(game.changeCoin){
							game.changeCoin(-3);
						}
						var hs=game.me.getCards('h');
						game.addVideo('lose',game.me,[get.cardsInfo(hs),[],[]]);
						for(var i=0;i<hs.length;i++){
							hs[i].discard(false);
						}
						game.me.directgain(get.cards(hs.length));
						event.goto(2);
					}
					else{
						if(event.dialog) event.dialog.close();
						if(ui.confirm) ui.confirm.close();
						event.finish();
					}
				},
			},
		},
		ai:{
			get:{
				rawAttitude:function(from,to){
					if(from==undefined||to==undefined) return 0;
					if(from.identity==to.identity) return 5;
					return -1-game.countPlayer(function(current){return to.identity==current.identity})*3;
				},
			},
		},
		help:{
			'成对模式':'简介：<ul><li>两人组成一队进行混战，存活到最后的一队胜出<li>选择武将时，若你的队友先行选择，你的选将栏内会添加与其选择武将珠联璧合的武将</ul>击杀：<ul><li>奖励：<br>击杀其他队伍角色时触发，摸两张牌<li>惩罚：<br>击杀队友时触发，弃置所有手牌和装备区内的牌</ul>模式：<ul><li>结义：<br>所有玩家获得技能【结义】（出牌阶段限一次，你可以令你的队友将其所有手牌给予你，然后由你分配双方手牌（给予队友的牌不能小于X，X为分配时你手牌数的一半（向上取整）））<li>共死：<br>当一名角色死亡后，此角色的队友跟着死亡（造成死亡的来源与此角色相同）</ul>',
		},
	},{
		translate:'成对',
		extension:'扩展ol',
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
				name:'候选随机武将数',
				init:3,
				item:{
					1:'1',
					2:'2',
					3:'3',
					4:'4',
					5:'5',
					6:'6',
					7:'7',
					8:'8',
					9:'9',
					10:'10',
				},
				frequent:true,
				restart:true,
			},
			free_choose:{
				name:'自由选将',
				init:true,
				onclick:function(bool){
					game.saveConfig('free_choose',bool,'partner');
				}
			},
			change_choice:{
				name:'开启换将卡',
				init:true,
				onclick:function(bool){
					game.saveConfig('change_choice',bool,'partner');
					if(!ui.cheat&&get.config('change_choice')) ui.create.cheat();
					else if(ui.cheat&&!get.config('change_choice')){
						ui.cheat.close();
						delete ui.cheat;
					}
				},
			},
			change_card:{
				name:'开启手气卡',
				init:'disabled',
				item:{
					disabled:'禁用',
					once:'一次',
					twice:'两次',
					unlimited:'无限',
				},
			},
			kzol_weather:{
				name:'天气变化',
				init:false,
				restart:true,
				frequent:true,
			},
		},
	});
}