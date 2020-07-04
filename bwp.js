window.func=function(lib,game,ui,get,ai,_status){
	if(lib.kzol_nodeintro==undefined) lib.kzol_nodeintro={};
	lib.kzol_nodeintro['bwp']=function(uiintro,character,skills){
		if(character.indexOf('kzol_bwp_')!=-1){
			uiintro.add("<img src="+lib.assetURL+'extension/扩展ol/'+character+'.png'+" width='100%' height='100%'>");
		};
	};
	var bwp_get_cnNumber=get.cnNumber;
	get.cnNumber=function(num,two){
		if(num==Infinity) return '∞';
		if(isNaN(num)) return '';
		if(typeof num!='number') return num;
		if(typeof num=='number'&&num%1==0){
			return bwp_get_cnNumber(num,two);
		}else{
			return num;
		};
	};
	lib.element.player.bwp_changeHuo=function(){
		var next=game.createEvent('bwp_changeHuo');
		next.player=this;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='number'){
				next.num=arguments[i];
			};
		};
		var event=_status.event;
		next.source=event.player;
		next.setContent(lib.element.event.bwp_changeHuo);
		return next;
	};
	lib.element.event.bwp_changeHuo=function(){
		event.trigger('bwp_changeHuo');
		if(num==undefined) num=1;
		if(player.storage.bwp_changeHuo==undefined) player.storage.bwp_changeHuo=0;
		player.storage.bwp_changeHuo+=num;
		player.markSkill('bwp_changeHuo');
		player.syncStorage('bwp_changeHuo');
		var str='';
		if(num>0){
			str+='获得了'+num+'点鬼火';
		}else{
			str+='失去了'+(-num)+'点鬼火';
		};
		game.log(player,str);
	};
	lib.element.player.bwp_getNeedhuo_count=function(num,card){
		var player=this;
		if(num==undefined) num=0;
		if(player.name=='kzol_bwp_跳跳妹妹'||(player.name2!=undefined&&player.name2=='kzol_bwp_跳跳妹妹')){
			if(card==undefined||(card!=undefined&&get.type(card)=='bwp_zd')) num++;
		};
		return num;
	};
	lib.element.player.bwp_getNeedhuo=function(num,card){
		var player=this;
		return player.storage.bwp_changeHuo!=undefined&&player.storage.bwp_changeHuo>=player.bwp_getNeedhuo_count(num,card);
	};
	lib.element.player.bwp_changeAttack=function(){
		var next=game.createEvent('bwp_changeAttack');
		next.player=this;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='number'){
				next.num=arguments[i];
			}else if(typeof arguments[i]=='boolean'){
				next.forced=arguments[i];
			};
		};
		var event=_status.event;
		next.source=event.player;
		next.setContent(lib.element.event.bwp_changeAttack);
		return next;
	};
	lib.element.event.bwp_changeAttack=function(){
		event.trigger('bwp_changeAttack');
		if(num==undefined) num=1;
		if(player.bwp_ability==undefined) player.bwp_ability={};
		if(player.bwp_ability.attack==undefined) player.bwp_ability.attack=0;
		player.bwp_ability.attack+=num;
		if(forced==false){
			if(player.storage.bwp_EXattack==undefined) player.storage.bwp_EXattack=0;
			player.storage.bwp_EXattack+=num;
		}else{
			if(player.bwp_ability.attack>0||player.bwp_ability.attack<0){
				if(player.storage.bwp_attack==undefined) player.storage.bwp_attack=0;
				player.storage.bwp_attack+=num;
				player.markSkill('bwp_attack');
				player.syncStorage('bwp_attack');
			}else{
				player.unmarkSkill('bwp_attack');
				delete player.storage.bwp_attack;
			};
			var str='';
			if(num>0){
				str+='提升了'+num+'点攻击力';
			}else{
				str+='降低了'+(-num)+'点攻击力';
			};
			game.log(player,str);
		};
	};
	lib.element.player.bwp_getAttackNum=function(){
		var player=this;
		var num=0;
		if(player.bwp_ability!=undefined) num=player.bwp_ability.attack;
		return num/10;
	};
	lib.kzol_bwp_ability={
		'kzol_bwp_跳跳妹妹':{
			attack:3,
		},
		'kzol_bwp_番茄':{
			attack:3,
		},
	};
	game.import('character',function(lib,game,ui,get,ai,_status){
		var bwp={
			name:'bwp',
			//connect:true,
			//characterSort:{},
			//connectBanned:["kzol_bwp_跳跳妹妹"],
			character:{
				"kzol_bwp_跳跳妹妹":["female","bwp",6,[],[]],
				"kzol_bwp_番茄":["male","bwp",4,[],['forbidai']],
			},
			skill:{
				'_bwp_levelUp':{
					trigger:{
						player:"phaseBefore",
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return player.name.indexOf('kzol_bwp_')!=-1||(player.name2!=undefined&&player.name2.indexOf('kzol_bwp_')!=-1);
					},
					content:function(){
						if(player.storage.bwp_level_count==undefined) player.storage.bwp_level_count=0;
						player.storage.bwp_level_count++;
						if(player.storage.bwp_level_count==1||player.storage.bwp_level_count==5||player.storage.bwp_level_count==9){
							if(player.storage.bwp_level==undefined) player.storage.bwp_level=0;
							player.storage.bwp_level++;
							player.popup('升级');
							game.log(player,'升级了');
						};
					},
				},
				'_bwp_cardEnabled':{
					mod:{
						cardUsable:function(card,player){
							if(player.storage.bwp_level!=undefined){
								if(lib.card[card.name]!=undefined){
									if(lib.card[card.name].bwp_lv!=undefined){
										if(player.storage.bwp_level<lib.card[card.name].bwp_lv) return false;
									};
								};
							};
						},
						cardRespondable:function(card,player){
							if(player.storage.bwp_level!=undefined){
								if(lib.card[card.name]!=undefined){
									if(lib.card[card.name].bwp_lv!=undefined){
										if(player.storage.bwp_level<lib.card[card.name].bwp_lv) return false;
									};
								};
							};
						},
						cardEnabled:function(card,player){
							if(player.storage.bwp_level!=undefined){
								if(lib.card[card.name]!=undefined){
									if(lib.card[card.name].bwp_lv!=undefined){
										if(player.storage.bwp_level<lib.card[card.name].bwp_lv) return false;
									};
								};
							};
						},
						cardSavable:function(card,player){
							if(player.storage.bwp_level!=undefined){
								if(lib.card[card.name]!=undefined){
									if(lib.card[card.name].bwp_lv!=undefined){
										if(player.storage.bwp_level<lib.card[card.name].bwp_lv) return false;
									};
								};
							};
						},
					},
				},
				"_bwp_maxHandcard":{
					mod:{
						maxHandcard:function(player,num){
							if(player.name.indexOf('kzol_bwp_')!=-1||(player.name2!=undefined&&player.name2.indexOf('kzol_bwp_')!=-1)) return 4;
						},
					},
				},
				'bwp_changeHuo':{
					marktext:"火",
					intro:{
						content:function(storage){
							return '当前拥有'+storage+'点鬼火';
						},
					},
				},
				'bwp_attack':{
					marktext:"攻",
					intro:{
						content:function(storage){
							return '当前额外攻击力:'+storage+'点';
						},
					},
				},
				/*
				'_bwp_changeAvatar':{
					trigger:{
						global:"gameStart",
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						if(player.name.indexOf('kzol_bwp_')!=-1&&player.name2==undefined) return true;
						return (player.name.indexOf('kzol_bwp_')!=-1||
						(player.name2!=undefined&&player.name2.indexOf('kzol_bwp_')!=-1))&&
						lib.config.layout!='long'&&lib.config.layout!='long2';
					},
					content:function(){
						player.node.avatar.style.height='calc(100% - 6px)';
						player.node.avatar.style.width=(player.node.avatar.offsetHeight*0.55)+'px';
						player.node.avatar.style.top='3px';
						player.node.avatar.style.left=((player.node.turnedover.offsetWidth-player.node.avatar.offsetWidth)/2)+'px';
						if(player.name.indexOf('kzol_bwp_')!=-1){
							player.node.avatar.style.backgroundSize='100% 100%';
							player.node.avatar.style['box-shadow']='none';
							player.node.hp.style.bottom='5px';
							player.node.hp.style.left=(player.node.turnedover.offsetWidth-player.node.hp.offsetWidth-3)+'px';
						};
						if(player.name2!=undefined){
							player.node.avatar.style.left=((player.node.turnedover.offsetWidth/2-player.node.avatar.offsetWidth))+'px';
							player.node.avatar2.style.height='calc(100% - 6px)';
							player.node.avatar2.style.width=(player.node.avatar2.offsetHeight*0.55)+'px';
							player.node.avatar2.style.top='3px';
							player.node.avatar2.style.left=(player.node.turnedover.offsetWidth/2)+'px';
							if(player.name2.indexOf('kzol_bwp_')!=-1){
								player.node.avatar2.style.backgroundSize='100% 100%';
								player.node.avatar2.style['box-shadow']='none';
								if(player.name.indexOf('kzol_bwp_')==-1){
									player.node.hp.style.bottom='5px';
									player.node.hp.style.left=(player.node.turnedover.offsetWidth-player.node.hp.offsetWidth-3)+'px';
								};
							};
						};
					},
				},
				'_bwp_changeAbility':{
					trigger:{
						global:"gameStart",
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return player.name.indexOf('kzol_bwp_')!=-1||(player.name2!=undefined&&player.name2.indexOf('kzol_bwp_')!=-1);
					},
					content:function(){
						if(player.bwp_ability==undefined) player.bwp_ability={};
						if(player.name.indexOf('kzol_bwp_')!=-1){
							for(var i in lib.kzol_bwp_ability){
								if(i==player.name){
									if(player.bwp_ability.attack==undefined) player.bwp_ability.attack=0;
									player.bwp_ability.attack+=lib.kzol_bwp_ability[i].attack;
								};
							};
						};
						if(player.name2!=undefined){
							if(player.name2.indexOf('kzol_bwp_')!=-1){
								for(var i in lib.kzol_bwp_ability){
									if(i==player.name){
										if(player.bwp_ability.attack==undefined) player.bwp_ability.attack=0;
										player.bwp_ability.attack+=lib.kzol_bwp_ability[i].attack;
									};
								};
							};
						};
					},
				},
				*/
				'_bwp_changeHuo':{
					trigger:{
						global:"gameStart",
						player:"phaseBefore",
					},
					forced:true,
					popup:false,
					priority:Infinity,
					filter:function(event,player){
						return player.name.indexOf('kzol_bwp_')!=-1||(player.name2!=undefined&&player.name2.indexOf('kzol_bwp_')!=-1);
					},
					content:function(){
						var num=2;
						if(player.name.indexOf('kzol_bwp_')!=-1&&player.name2!=undefined&&player.name2.indexOf('kzol_bwp_')!=-1) num=4;
						if(num-player.storage.bwp_changeHuo>0){
							num=num-player.storage.bwp_changeHuo;
							player.bwp_changeHuo(num);
						}else if(player.storage.bwp_changeHuo==undefined){
							player.bwp_changeHuo(num);
						};
					},
				},
				"_bwp_attack":{
					enable:'phaseUse',
					usable:1,
					line:true,
					filter:function(event,player){
						if(player.bwp_ability==undefined||
						(player.bwp_ability!=undefined&&player.bwp_ability.attack==undefined)) return false;
						return (player.name.indexOf('kzol_bwp_')!=-1||
						(player.name2!=undefined&&player.name2.indexOf('kzol_bwp_')!=-1))&&
						player.bwp_getNeedhuo(1);
					},
					filterTarget:function(card,player,target){
						return target!=player;
					},
					content:function(){
						player.bwp_changeHuo(-player.bwp_getNeedhuo_count(1));
						target.damage(player.bwp_getAttackNum());
					},
					ai:{
						expose:0.5,
						order:1,
						result:{
							target:function(player,target){
								if((player.name=='kzol_bwp_跳跳妹妹'||(player.name2!=undefined&&player.name2=='kzol_bwp_跳跳妹妹'))){
									if(player.countCards('h',{name:'bwp_cards_别过来啊'})>0&&player.hp<=2) return ;
								};
								return get.damageEffect(player,target);
							},
						},
					},
				},
				"_bwp_gameDraw":{
					trigger:{
						global:"phaseBefore",
					},
					forced:true,
					popup:false,
					priority:Infinity,
					filter:function(event,player){
						if(event.num<=0) return false;
						if(_status.kzol_bwp_hadDiscard!=undefined) return false;
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.name.indexOf('kzol_bwp_')!=-1||(pl.name2!=undefined&&pl.name2.indexOf('kzol_bwp_')!=-1)) return true;
						};
						return false;
					},
					content:function(){
						_status.kzol_bwp_hadDiscard=true;
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.name.indexOf('kzol_bwp_')!=-1||(pl.name2!=undefined&&pl.name2.indexOf('kzol_bwp_')!=-1)){
								pl.discard(pl.get('h'));
								pl.draw(4);
							};
						};
					},
				},
				"_bwp_gain":{
					trigger:{
						player:"gainBefore",
					},
					forced:true,
					popup:false,
					priority:Infinity,
					filter:function(event,player){
						if(lib.cardPack['bwp_cards']==undefined) return false;
						if(event.cards==undefined) return false;
						if(event.cards.length==undefined||event.cards.length==0) return false;
						return player.name.indexOf('kzol_bwp_')!=-1||(player.name2!=undefined&&player.name2.indexOf('kzol_bwp_')!=-1);
					},
					content:function(){
						var list=[];
						var cards=lib.cardPack['bwp_cards'];
						for(var i=0;i<cards.length;i++){
							var froms=lib.card[cards[i]].bwp_from;
							if(froms!=undefined){
								for(var j=0;j<froms.length;j++){
									var from=froms[j];
									if(from==player.name||
									(player.name2!=undefined&&from==player.name2)) list.push(cards[i]);
								};
							};
						};
						if(list.length>0){
							for(var i=0;i<trigger.cards.length;i++){
								var card=trigger.cards[i];
								card.link_bwp_origin=card.name;
								//card.link_bwp_origin_width=card.offsetWidth;
								card.init([card.suit,card.number,list.randomGet()]);
								//card.node.background.style.width=(card.offsetHeight*0.6)+'px';
								card.link_bwp_backgroundSize=card.style.backgroundSize;
								card.style.backgroundSize='0,0';
								card.style['box-shadow']='none';
								card.node.name.style.display='none';
								card.node.info.style.display='none';
								var show=ui.create.div();
								show.style.height='calc(100%)';
								if(lib.config.cardshape=='oblong'){
									show.style.width='calc(62%)';
								}else{
									show.style.width='calc(55%)';
								};
								show.style.top='0px';
								if(lib.config.cardshape=='oblong'){
									show.style.left='calc(24% - 7px)';
								}else{
									show.style.left='calc(27.5% - 7px)';
								};
								show.style['background-image']=card.style['background-image'];
								show.style.backgroundSize='100% 100%';
								show.onmouseover=function(){
									this.style['z-index']=10;
									this.style.transform+='translateY(-'+(this.offsetHeight*0.75)+'px) scale(2.5,2.5)';
								};
								show.onmouseout=function(){
									var show=this;
									setTimeout(function(){
										show.style['z-index']=0;
										show.style.transform='';
									},100);
								};
								card.appendChild(show);
								card.node.bwp_show=show;
							};
						};
					},
				},
				"_bwp_lose":{
					trigger:{
						player:"loseAfter",
					},
					forced:true,
					popup:false,
					priority:-Infinity,
					filter:function(event,player){
						if(event.cards==undefined) return false;
						if(event.cards.length==undefined||event.cards.length==0) return false;
						var bool=false;
						for(var i=0;i<event.cards.length;i++){
							if(event.cards[i].link_bwp_origin!=undefined) bool=true;
						};
						return bool;
					},
					content:function(){
						for(var i=0;i<trigger.cards.length;i++){
							var card=trigger.cards[i];
							if(card.link_bwp_origin!=undefined){
								card.init([card.suit,card.number,card.link_bwp_origin]);
								card.removeChild(card.node.bwp_show);
								//card.node.background.style.width=(card.link_bwp_origin_width)+'px';
								card.style.backgroundSize=card.link_bwp_backgroundSize;
								card.style['box-shadow']='rgba(0, 0, 0, 0.2) 0 0 0 1px, rgba(0, 0, 0, 0.45) 0 3px 10px';
								card.node.name.style.display='';
								card.node.info.style.display='';
								delete card.link_bwp_origin;
								//delete card.link_bwp_origin_width;
								delete card.node.bwp_show;
								delete card.link_bwp_backgroundSize;
							};
						};
					},
				},
				"_bwp_lose2":{
					trigger:{
						player:["loseBefore","useCardBefore"],
					},
					forced:true,
					popup:false,
					priority:Infinity,
					filter:function(event,player){
						if(event.cards.length==undefined||event.cards.length==0) return false;
						var bool=false;
						for(var i=0;i<event.cards.length;i++){
							if(event.cards[i].node.bwp_show!=undefined) bool=true;
						};
						return bool;
					},
					content:function(){
						for(var i=0;i<trigger.cards.length;i++){
							var card=trigger.cards[i];
							if(card.node.bwp_show!=undefined){
								card.node.bwp_show.style.transform='translateY(-'+(card.node.bwp_show.offsetHeight*0.5)+'px) scale(2,2)';
							};
						};
					},
				},
				"_bwp_useCard3":{
					trigger:{
						player:"useCardBefore",
					},
					forced:true,
					popup:false,
					priority:Infinity,
					filter:function(event,player){
						var card=event.card;
						var bool=true;
						if(player.getStat()!=undefined){
							for(var i in player.getStat().card){
								bool=false;
							};
						};
						return bool==true&&card!=undefined&&lib.card[card.name]!=undefined&&lib.card[card.name].bwp_sf!=undefined;
					},
					content:function(){
						trigger.bwp_sf=true;
						player.popup('瞬发');
					},
				},
				"_bwp_useCard":{
					trigger:{
						player:"useCardEnd",
					},
					forced:true,
					popup:false,
					priority:-Infinity,
					filter:function(event,player){
						if(event.bwp_sf==true) return false;
						var card=event.card;
						return card!=undefined&&lib.card[card.name]!=undefined&&lib.card[card.name].bwp_useHuo!=undefined;
					},
					content:function(){
						var card=trigger.card;
						player.bwp_changeHuo(-player.bwp_getNeedhuo_count(lib.card[card.name].bwp_useHuo,card));
					},
				},
				"_bwp_useCard1":{
					trigger:{
						player:"useCardBefore",
					},
					forced:true,
					popup:false,
					priority:Infinity,
					filter:function(event,player){
						var card=event.card;
						return card!=undefined&&lib.card[card.name]!=undefined&&lib.card[card.name].bwp_gjl!=undefined;
					},
					content:function(){
						var card=trigger.card;
						player.bwp_changeAttack(lib.card[card.name].bwp_gjl,false);
					},
				},
				"_bwp_useCard2":{
					trigger:{
						source:"damageAfter",
					},
					forced:true,
					popup:false,
					priority:-Infinity,
					filter:function(event,player){
						return player.storage.bwp_EXattack!=undefined;
					},
					content:function(){
						if(player.bwp_ability==undefined) player.bwp_ability={};
						if(player.bwp_ability.attack==undefined) player.bwp_ability.attack=0;
						player.bwp_ability.attack-=player.storage.bwp_EXattack;
						delete player.storage.bwp_EXattack;
					},
				},
				"_bwp_dying":{
					trigger:{
						player:"dyingBefore",
					},
					forced:true,
					popup:false,
					priority:Infinity,
					filter:function(event,player){
						return player.bwp_init_originName!=undefined&&player.bwp_init_targetName!=undefined;
					},
					content:function(){
						var hp=player.hp-player.bwp_init_hp;
						var maxHp=player.bwp_init_originHp;
						if(maxHp<hp) hp=maxHp;
						if(player.name==player.bwp_init_targetName){
							if(player.name2==undefined){
								player.init(player.bwp_init_originName);
							}else{
								player.init(player.bwp_init_originName,player.name2);
							};
						};
						if(player.name2!=undefined&&player.name2==player.bwp_init_targetName){
							player.init(player.name,player.bwp_init_originName);
						};
						/*
						if(lib.skill['_bwp_changeAvatar']!=undefined){
							if(lib.skill['_bwp_changeAvatar'].filter(undefined,player)) player.useSkill('_bwp_changeAvatar');
						};
						if(lib.skill['_bwp_changeAbility']!=undefined){
							if(lib.skill['_bwp_changeAbility'].filter(undefined,player)) player.useSkill('_bwp_changeAbility');
						};
						*/
						player.maxHp=maxHp;
						player.hp=hp;
						player.update();
						delete player.bwp_init_originName;
						delete player.bwp_init_targetName;
						delete player.bwp_init_originHp;
						delete player.bwp_init_hp;
					},
				},
			},
			translate:{
				"kzol_bwp_番茄":"番茄",
				"kzol_bwp_跳跳妹妹":"跳跳妹妹",
				"bwp_changeHuo":"鬼火",
				"_bwp_attack":"出击",
				"bwp_attack":"额外攻击力",
				//"_bwp_changeAvatar":"头像适配",
				//"_bwp_changeAbility":"能力适配",
			},
		};
		if(lib.device||lib.node){
			for(var i in bwp.character){bwp.character[i][4].push('ext:扩展ol/'+i+'.png');}
		}else{
			for(var i in bwp.character){bwp.character[i][4].push('db:extension-扩展ol:'+i+'.png');}
		}
		return bwp;
	});
	lib.config.all.characters.push('bwp');
	if(!lib.config.characters.contains('bwp')) lib.config.characters.push('bwp');
	lib.translate['bwp_character_config']='百闻牌';
	lib.group.push('bwp');
	lib.translate.bwp='百闻牌';
	game.bwp_changeAvatar=function(player){
		if(player.name==undefined) return;
		if((player.name.indexOf('kzol_bwp_')!=-1&&player.name2==undefined)||
		((player.name.indexOf('kzol_bwp_')!=-1||
		(player.name2!=undefined&&player.name2.indexOf('kzol_bwp_')!=-1))&&
		lib.config.layout!='long'&&lib.config.layout!='long2')){
			setTimeout(function(){
				player.node.avatar.style.height='calc(100% - 6px)';
				player.node.avatar.style.width=(player.node.avatar.offsetHeight*0.55)+'px';
				player.node.avatar.style.top='3px';
				player.node.avatar.style.left=((player.node.turnedover.offsetWidth-player.node.avatar.offsetWidth)/2)+'px';
				if(player.name.indexOf('kzol_bwp_')!=-1){
					player.node.avatar.style.backgroundSize='100% 100%';
					player.node.avatar.style['box-shadow']='none';
					player.node.hp.style.bottom='5px';
					player.node.hp.style.left=(player.node.turnedover.offsetWidth-player.node.hp.offsetWidth-3)+'px';
				};
				if(player.name2!=undefined){
					player.node.avatar.style.left=((player.node.turnedover.offsetWidth/2-player.node.avatar.offsetWidth))+'px';
					player.node.avatar2.style.height='calc(100% - 6px)';
					player.node.avatar2.style.width=(player.node.avatar2.offsetHeight*0.55)+'px';
					player.node.avatar2.style.top='3px';
					player.node.avatar2.style.left=(player.node.turnedover.offsetWidth/2)+'px';
					if(player.name2.indexOf('kzol_bwp_')!=-1){
						player.node.avatar2.style.backgroundSize='100% 100%';
						player.node.avatar2.style['box-shadow']='none';
						if(player.name.indexOf('kzol_bwp_')==-1){
							player.node.hp.style.bottom='5px';
							player.node.hp.style.left=(player.node.turnedover.offsetWidth-player.node.hp.offsetWidth-3)+'px';
						};
					};
				};
				//if(player!=game.me){
				//	player.style['box-shadow']='none';
				//	player.style['background-image']='none';
				//};
				//if(player.扩展ol_type=='fellow') player.classList.add('minskin');
			},1000);
		};
	};
	var bwp_init=lib.element.player.init;
	lib.element.player.init=function(character,character2,skill){
		bwp_init.apply(this,arguments);
		var player=this;
		game.bwp_changeAvatar(player);
		if(player.name.indexOf('kzol_bwp_')!=-1||(player.name2!=undefined&&player.name2.indexOf('kzol_bwp_')!=-1)){
			if(player.bwp_ability==undefined) player.bwp_ability={};
			if(player.name.indexOf('kzol_bwp_')!=-1){
				for(var i in lib.kzol_bwp_ability){
					if(i==player.name){
						if(player.bwp_ability.attack==undefined) player.bwp_ability.attack=0;
						player.bwp_ability.attack+=lib.kzol_bwp_ability[i].attack;
					};
				};
			};
			if(player.name2!=undefined){
				if(player.name2.indexOf('kzol_bwp_')!=-1){
					for(var i in lib.kzol_bwp_ability){
						if(i==player.name){
							if(player.bwp_ability.attack==undefined) player.bwp_ability.attack=0;
							player.bwp_ability.attack+=lib.kzol_bwp_ability[i].attack;
						};
					};
				};
			};
		};
		return this;
	};
	lib.kzol_nodeintro['bwp1']=function(uiintro,character,skills){
		if(!uiintro||!character) return ;
		if(lib.cardPack['bwp_cards']==undefined) return ;
		if(character.indexOf('kzol_bwp_')==-1) return ;
		var list=[];
		for(var i=0;i<lib.cardPack['bwp_cards'].length;i++){
			var name=lib.cardPack['bwp_cards'][i];
			var card=lib.card[name];
			if(card.bwp_from==undefined) continue;
			if(card.bwp_from.contains(character)) list.push(name);
		};
		if(list.length==0) return ;
		var div1=ui.create.div('.menu');
		div1.style.width='415px';
		div1.style.position='fixed';
		div1.style.borderRadius='5px';
		div1.style.transition='all 0s';
		div1.style.animation='fadeShow .3s';
		div1.style['-webkit-animation']='fadeShow .3s';
		div1.style['pointer-events']='none';
		if(list.length>=4){
			div1.style['text-align']='left';
		}else{
			div1.style['text-align']='center';
		};
		for(var i=0;i<list.length;i++){
			var name=list[i];
			var button=ui.create.button(name,'vcard',div1,false);
		};
		var div=ui.create.div();
		//div.style.right='3px';
		//if(lib.config['extension_扩展ol_zxhxsl_show']=='img'){
		//暂无图片显示
		if(false){
			div.style.height='30px';
			div.style.width='30px';
			div.style.top='0px';
			if(lib.config['extension_扩展ol_zxhxsl_pos']=='left'||lib.config['extension_扩展ol_zxhxsl_pos']=='right'){
				div.style['margin-top']='-3px';
				div.style['margin-left']='-1px';
			}else{
				div.style['margin-top']='-1px';
				div.style['margin-left']='1px';
			};
			div.setBackgroundImage('extension/扩展ol/zhulianbihe.png');
			div.style.backgroundSize="100% 100%";
		}else{
			div.style.height='25px';
			div.style.width='25px';
			if(lib.config['extension_扩展ol_zxhxsl_pos']=='top'||lib.config['extension_扩展ol_zxhxsl_pos']=='bottom_in') div.style.top='8px';
			if(lib.config['extension_扩展ol_zxhxsl_pos']=='left') div.style.left='3px';
			if(lib.config['extension_扩展ol_zxhxsl_pos']=='right') div.style.left='-3px';
			div.style['font-size']='20px';
			div.style['text-align']='center';
			div.style['font-family']='shousha';
			div.style['line-height']='25px';
			div.style['text-shadow']='black 0 0 2px';
			div.style['font-weight']='600';
			div.style.color='white';
			div.innerHTML='专';
		};
		div.style.position='relative';
		div.onclick=function(e){
			e.stopPropagation();
		};
		div.onmouseover=function(){
			div1.style.left=(event.clientX/game.documentZoom+10+document.body.scrollLeft-div1.offsetWidth/2)+'px';
			div1.style.top=(event.clientY/game.documentZoom+document.body.scrollTop+(lib.device?0:20))+'px';
			if(div1.offsetTop+div1.offsetHeight>ui.window.offsetTop+ui.window.offsetHeight){
				var num=(div1.offsetTop+div1.offsetHeight)-(ui.window.offsetTop+ui.window.offsetHeight);
				div1.style.top=(div1.offsetTop-num)+'px';
			};
			if(div1.offsetTop<0) div1.style.top='0px';
			if(div1.offsetLeft+div1.offsetWidth>ui.window.offsetLeft+ui.window.offsetWidth){
				var num=(div1.offsetLeft+div1.offsetWidth)-(ui.window.offsetLeft+ui.window.offsetWidth);
				div1.style.left=(div1.offsetLeft-num)+'px';
			};
			if(div1.offsetLeft<0) div1.style.left='0px';
			uiintro.appendChild(div1);
		};
		div.onmousemove=function(){
			div1.style.left=(event.clientX/game.documentZoom+10+document.body.scrollLeft-div1.offsetWidth/2)+'px';
			div1.style.top=(event.clientY/game.documentZoom+document.body.scrollTop+(lib.device?0:20))+'px';
			if(div1.offsetTop+div1.offsetHeight>ui.window.offsetTop+ui.window.offsetHeight){
				var num=(div1.offsetTop+div1.offsetHeight)-(ui.window.offsetTop+ui.window.offsetHeight);
				div1.style.top=(div1.offsetTop-num)+'px';
			};
			if(div1.offsetTop<0) div1.style.top='0px';
			if(div1.offsetLeft+div1.offsetWidth>ui.window.offsetLeft+ui.window.offsetWidth){
				var num=(div1.offsetLeft+div1.offsetWidth)-(ui.window.offsetLeft+ui.window.offsetWidth);
				div1.style.left=(div1.offsetLeft-num)+'px';
			};
			if(div1.offsetLeft<0) div1.style.left='0px';
		};
		div.onmouseout=function(){
			uiintro.removeChild(div1);
		};
		uiintro.kzol_nodeintro.appendChild(div);
	};
};