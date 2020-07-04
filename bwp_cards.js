window.func=function(lib,game,ui,get,ai,_status){
	game.import('card',function(lib,game,ui,get,ai,_status){
		var bwp_cards={
			name:'bwp_cards',
			//connect:true,
			card:{
				'bwp_cards_坏人走开':{
					type:'bwp_zd',
					enable:function(card,player){
						return player.bwp_getNeedhuo(1,card);
					},
					bwp_lv:1,
					bwp_useHuo:1,
					bwp_gjl:3,
					bwp_from:['kzol_bwp_跳跳妹妹','kzol_bwp_番茄'],
					filterTarget:function(card,player,target){
						return target!=player;
					},
					content:function(){
						var num1=0;
						var num=player.bwp_getAttackNum();
						if(num>target.hp){
							if(game.countPlayer(function(current){
								return get.attitude(player,current)<0;
							})>0){
								num1=num-target.hp;
								num=target.hp;
							};
						};
						target.damage(num);
						var list=[];
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(get.attitude(player,pl)<0) list.push(pl);
						};
						if(list.length>0&&num1>0){
							list.randomGet().damage(num1);
							player.popup('贯穿');
						};
					},
					ai:{
						basic:{
							useful:4,
							value:4,
						},
						order:4,
						result:{
							target:-1.5,
						},
						tag:{
							damage:1,
						},
					},
				},
				'bwp_cards_去咬他':{
					type:'bwp_fs',
					enable:function(card,player){
						if(game.countPlayer(function(current){
							if(current.扩展ol_owner!=player) return false;
							return current.name=='kzol_bwp_番茄'||(current.name2!=undefined&&current.name2=='kzol_bwp_番茄')
						})>0) return false;
						return player.bwp_getNeedhuo(1,card);
					},
					bwp_lv:1,
					bwp_useHuo:1,
					bwp_from:['kzol_bwp_跳跳妹妹'],
					filterTarget:function(card,player,target){
						return target!=player;
					},
					content:function(){
						'step 0'
						var fq=game.addShibing('kzol_bwp_番茄',player);
						fq.setIdentity('召');
						fq.node.identity.dataset.color='cai';
						fq.bwp_changeHuo(2);
						if(player.bwp_fellow_fq!=undefined){
							if(player.bwp_fellow_fq.EXattack!=undefined){
								if(fq.bwp_ability==undefined) fq.bwp_ability={};
								fq.bwp_ability.attack=player.bwp_fellow_fq.EXattack;
								if(fq.storage.bwp_attack==undefined) fq.storage.bwp_attack=0;
								fq.storage.bwp_attack=fq.bwp_ability.attack;
								fq.markSkill('bwp_attack');
								fq.syncStorage('bwp_attack');
							};
							if(player.bwp_fellow_fq.mark!=undefined){
								fq.storage.bwp_cards_出击_mark=player.bwp_fellow_fq.mark;
								fq.markSkill('bwp_cards_出击_mark');
								fq.syncStorage('bwp_cards_出击_mark');
							};
						};
						event.fq=fq;
						game.delay();
						'step 1'
						event.fq.line(target);
						target.damage(event.fq.bwp_ability.attack/10).source=event.fq;
					},
					ai:{
						basic:{
							useful:2,
							value:2,
						},
						order:function(){
							var player=_status.event.player;
							if(game.countPlayer(function(current){
								if(current.扩展ol_owner!=player) return false;
								return current.name=='kzol_bwp_番茄'||(current.name2!=undefined&&current.name2=='kzol_bwp_番茄')
							})==0&&player.storage.bwp_level!=undefined&&player.storage.bwp_level==1) return 5;
							return 2;
						},
						result:{
							target:-1.5,
						},
						tag:{
							damage:1,
						},
					},
				},
				'bwp_cards_坐下':{
					type:'bwp_fs',
					enable:function(card,player){
						return player.bwp_getNeedhuo(1,card);
					},
					bwp_lv:1,
					bwp_useHuo:1,
					bwp_from:['kzol_bwp_跳跳妹妹'],
					selectTarget:-1,
					toself:true,
					filterTarget:function(card,player,target){
						return target==player;
					},
					content:function(){
						if(player.bwp_fellow_fq==undefined) player.bwp_fellow_fq={};
						if(player.bwp_fellow_fq.EXattack==undefined) player.bwp_fellow_fq.EXattack=0;
						player.bwp_fellow_fq.EXattack++;
						var targets=[];
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.扩展ol_owner!=player) continue;
							if(pl.name=='kzol_bwp_番茄'||(pl.name2!=undefined&&pl.name2=='kzol_bwp_番茄')){
								targets.push(pl);
							};
						};
						if(targets.length>0){
							var target=targets.randomGet();
							player.line(target);
							target.bwp_changeAttack();
						}else{
							if(player.bwp_getNeedhuo(1)){
								player.bwp_changeHuo(-1);
								var fq=game.addShibing('kzol_bwp_番茄',player);
								fq.setIdentity('召');
								fq.node.identity.dataset.color='cai';
								fq.bwp_changeHuo(2);
								if(player.bwp_fellow_fq!=undefined){
									if(player.bwp_fellow_fq.EXattack!=undefined){
										if(fq.bwp_ability==undefined) fq.bwp_ability={};
										fq.bwp_ability.attack=player.bwp_fellow_fq.EXattack;
										if(fq.storage.bwp_attack==undefined) fq.storage.bwp_attack=0;
										fq.storage.bwp_attack=fq.bwp_ability.attack;
										fq.markSkill('bwp_attack');
										fq.syncStorage('bwp_attack');
									};
									if(player.bwp_fellow_fq.mark!=undefined){
										fq.storage.bwp_cards_出击_mark=player.bwp_fellow_fq.mark;
										fq.markSkill('bwp_cards_出击_mark');
										fq.syncStorage('bwp_cards_出击_mark');
									};
								};
							};
						};
					},
					ai:{
						basic:{
							useful:4,
							value:4,
						},
						order:function(){
							var player=_status.event.player;
							if(game.countPlayer(function(current){
								if(current.扩展ol_owner!=player) return false;
								return current.name=='kzol_bwp_番茄'||(current.name2!=undefined&&current.name2=='kzol_bwp_番茄')
							})>0) return 1;
							return 3;
						},
						result:{
							player:2,
						},
					},
				},
				'bwp_cards_生气了啦':{
					type:'bwp_zd',
					enable:function(card,player){
						return player.bwp_getNeedhuo(1,card);
					},
					bwp_lv:2,
					bwp_useHuo:1,
					bwp_from:['kzol_bwp_跳跳妹妹','kzol_bwp_番茄'],
					filterTarget:function(card,player,target){
						return target!=player;
					},
					content:function(){
						'step 0'
						var num=player.bwp_getAttackNum();
						target.damage(num);
						'step 1'
						var num=player.bwp_getAttackNum();
						target.damage(num);
					},
					ai:{
						basic:{
							useful:5,
							value:5,
						},
						order:5,
						result:{
							target:-1.5,
						},
						tag:{
							damage:1,
						},
					},
				},
				'bwp_cards_别过来啊':{
					type:'bwp_fs',
					enable:function(card,player){
						if(game.countPlayer(function(current){
							if(current.扩展ol_owner!=player) return false;
							return current.name=='kzol_bwp_番茄'||(current.name2!=undefined&&current.name2=='kzol_bwp_番茄')
						})>0) return false;
						var bool=true;
						if(player.getStat()!=undefined){
							for(var i in player.getStat().card){
								bool=false;
							};
						};
						if(bool==true) return true;
						return player.bwp_getNeedhuo(1,card);
					},
					bwp_sf:true,
					bwp_lv:2,
					bwp_useHuo:1,
					bwp_from:['kzol_bwp_跳跳妹妹'],
					selectTarget:-1,
					toself:true,
					filterTarget:function(card,player,target){
						return target==player;
					},
					content:function(){
						var fq=game.addShibing('kzol_bwp_番茄',player);
						fq.setIdentity('召');
						fq.node.identity.dataset.color='cai';
						fq.bwp_changeHuo(2);
						if(player.bwp_fellow_fq!=undefined){
							if(player.bwp_fellow_fq.EXattack!=undefined){
								if(fq.bwp_ability==undefined) fq.bwp_ability={};
								fq.bwp_ability.attack=player.bwp_fellow_fq.EXattack;
								if(fq.storage.bwp_attack==undefined) fq.storage.bwp_attack=0;
								fq.storage.bwp_attack=fq.bwp_ability.attack;
								fq.markSkill('bwp_attack');
								fq.syncStorage('bwp_attack');
							};
							if(player.bwp_fellow_fq.mark!=undefined){
								fq.storage.bwp_cards_出击_mark=player.bwp_fellow_fq.mark;
								fq.markSkill('bwp_cards_出击_mark');
								fq.syncStorage('bwp_cards_出击_mark');
							};
						};
					},
					ai:{
						basic:{
							useful:[6,1],
							value:[6,1],
						},
						order:99,
						result:{
							player:2,
						},
					},
				},
				'bwp_cards_不玩了啦':{
					type:'bwp_zd',
					enable:function(card,player){
						return player.isDying()&&player.bwp_getNeedhuo(1,card);
					},
					bwp_lv:3,
					bwp_useHuo:1,
					bwp_gjl:2,
					bwp_from:['kzol_bwp_跳跳妹妹','kzol_bwp_番茄'],
					savable:function(card,player,dying){
						return player==dying&&player.bwp_getNeedhuo(1,card);
					},
					selectTarget:-1,
					toself:true,
					filterTarget:function(card,player,target){
						return target==player;
					},
					content:function(){
						player.recover(player.maxHp-player.hp);
						player.changeHujia(0.2);
					},
					ai:{
						basic:{
							useful:[10,0],
							value:[10,0],
						},
						order:function(){
							//var player=_status.event.player;
							return 3;
						},
						result:{
							player:2,
						},
						tag:{
							recover:1,
							save:1,
						}
					},
				},
				'bwp_cards_出击':{
					type:'bwp_fs',
					enable:function(card,player){
						return player.bwp_getNeedhuo(1,card);
					},
					bwp_lv:2,
					bwp_useHuo:1,
					bwp_from:['kzol_bwp_跳跳妹妹'],
					selectTarget:-1,
					toself:true,
					filterTarget:function(card,player,target){
						return target==player;
					},
					content:function(){
						'step 0'
						var targets=[];
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.扩展ol_owner!=player) continue;
							if(pl.name=='kzol_bwp_番茄'||(pl.name2!=undefined&&pl.name2=='kzol_bwp_番茄')){
								targets.push(pl);
							};
						};
						if(targets.length>0){
							var fq=targets.randomGet();
						}else{
							var fq=game.addShibing('kzol_bwp_番茄',player);
							fq.setIdentity('召');
							fq.node.identity.dataset.color='cai';
							fq.bwp_changeHuo(2);
							if(player.bwp_fellow_fq!=undefined){
								if(player.bwp_fellow_fq.EXattack!=undefined){
									if(fq.bwp_ability==undefined) fq.bwp_ability={};
									fq.bwp_ability.attack=player.bwp_fellow_fq.EXattack;
									if(fq.storage.bwp_attack==undefined) fq.storage.bwp_attack=0;
									fq.storage.bwp_attack=fq.bwp_ability.attack;
									fq.markSkill('bwp_attack');
									fq.syncStorage('bwp_attack');
								};
								if(player.bwp_fellow_fq.mark!=undefined){
									fq.storage.bwp_cards_出击_mark=player.bwp_fellow_fq.mark;
									fq.markSkill('bwp_cards_出击_mark');
									fq.syncStorage('bwp_cards_出击_mark');
								};
							};
						};
						event.fq=fq;
						game.delay();
						'step 1'
						var fq=event.fq;
						player.line(fq);
						if(fq.storage.bwp_cards_出击_mark==undefined) fq.storage.bwp_cards_出击_mark=0;
						fq.storage.bwp_cards_出击_mark+=3;
						fq.markSkill('bwp_cards_出击_mark');
						fq.syncStorage('bwp_cards_出击_mark');
						if(player.bwp_fellow_fq==undefined) player.bwp_fellow_fq={};
						if(player.bwp_fellow_fq.mark==undefined) player.bwp_fellow_fq.mark=0;
						player.bwp_fellow_fq.mark+=3;
					},
					ai:{
						basic:{
							useful:[6,3],
							value:[6,3],
						},
						order:8,
						result:{
							player:2,
						},
					},
				},
				'bwp_cards_觉醒X番茄':{
					type:'bwp_fs',
					enable:function(card,player){
						return (player.name=='kzol_bwp_跳跳妹妹'||
						(player.name2!=undefined&&player.name2=='kzol_bwp_跳跳妹妹'))&&
						player.bwp_getNeedhuo(1,card);
					},
					bwp_lv:3,
					bwp_useHuo:1,
					bwp_gjl:3,
					bwp_from:['kzol_bwp_跳跳妹妹'],
					selectTarget:-1,
					toself:true,
					filterTarget:function(card,player,target){
						return target==player;
					},
					content:function(){
						var originHp=player.maxHp;
						var hp=player.hp+3;
						var maxHp=player.maxHp+3;
						if(player.name=='kzol_bwp_跳跳妹妹'){
							if(player.name2==undefined){
								player.init('kzol_bwp_番茄');
							}else{
								player.init('kzol_bwp_番茄',player.name2);
							};
						};
						if(player.name2!=undefined&&player.name2=='kzol_bwp_跳跳妹妹'){
							player.init(player.name,'kzol_bwp_番茄');
						};
						/*
						if(lib.skill['_bwp_changeAvatar']!=undefined){
							if(lib.skill['_bwp_changeAvatar'].filter(undefined,player)) player.useSkill('_bwp_changeAvatar');
						};
						if(lib.skill['_bwp_changeAbility']!=undefined){
							if(lib.skill['_bwp_changeAbility'].filter(undefined,player)) player.useSkill('_bwp_changeAbility');
						};
						*/
						if(player.bwp_init_originName==undefined) player.bwp_init_originName='kzol_bwp_跳跳妹妹';
						if(player.bwp_init_originHp==undefined) player.bwp_init_originHp=originHp;
						player.bwp_init_targetName='kzol_bwp_番茄';
						if(player.bwp_init_hp==undefined) player.bwp_init_hp=0;
						player.bwp_init_hp+=3;
						player.maxHp=maxHp;
						player.hp=hp;
						player.update();
						if(player.bwp_fellow_fq!=undefined){
							if(player.bwp_fellow_fq.EXattack!=undefined){
								if(player.bwp_ability==undefined) player.bwp_ability={};
								player.bwp_ability.attack=player.bwp_fellow_fq.EXattack;
								if(player.storage.bwp_attack==undefined) player.storage.bwp_attack=0;
								player.storage.bwp_attack=player.bwp_ability.attack;
								player.markSkill('bwp_attack');
								player.syncStorage('bwp_attack');
							};
							if(player.bwp_fellow_fq.mark!=undefined){
								player.storage.bwp_cards_出击_mark=player.bwp_fellow_fq.mark;
								player.markSkill('bwp_cards_出击_mark');
								player.syncStorage('bwp_cards_出击_mark');
							};
						};
						var cards=[];
						for(var i=0;i<player.get('h').length;i++){
							var card=player.get('h')[i];
							if(lib.card[card.name].bwp_from.contains('kzol_bwp_跳跳妹妹')&&get.type(card)!='bwp_zd') cards.push(card);
						};
						var num=cards.length;
						if(num>0){
							player.discard(cards);
							player.draw(num);
						};
					},
					ai:{
						basic:{
							useful:4,
							value:4,
						},
						order:11,
						result:{
							player:2,
						},
					},
				},
			},
			skill:{
				"_bwp_cards_别过来啊_skill":{
					trigger:{
						player:'damageEnd'
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						if((player.name.indexOf('kzol_bwp_')!=-1||(player.name2!=undefined&&player.name2.indexOf('kzol_bwp_')!=-1))&&
						player.storage.bwp_level==undefined) return false;
						if(player.storage.bwp_level!=undefined&&player.storage.bwp_level<2) return false;
						if(game.countPlayer(function(current){
							if(current.扩展ol_owner!=player) return false;
							return current.name=='kzol_bwp_番茄'||(current.name2!=undefined&&current.name2=='kzol_bwp_番茄')
						})>0) return false;
						return player.countCards('h',{name:'bwp_cards_别过来啊'})>0;
					},
					content:function(){
						var card;
						for(var i=0;i<player.get('h').length;i++){
							if(player.get('h')[i].name=='bwp_cards_别过来啊') card=player.get('h')[i];
						};
						player.useCard(card,player);
					},
				},
				'bwp_cards_出击_mark':{
					marktext:"出",
					intro:{
						content:function(storage){
							return '造成战斗伤害时随机对一个敌方角色造成'+storage+'点伤害';
						},
					},
				},
				'_bwp_cards_出击_skill':{
					trigger:{
						source:"damageEnd",
					},
					forced:true,
					filter:function(event,player){
						return player.storage.bwp_cards_出击_mark!=undefined&&event.bwp_skill_from!='bwp_cards_出击_skill';
					},
					content:function(){
						var targets=[];
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(get.attitude(player,pl)<0) targets.push(pl);
						};
						if(targets.length>0){
							var target=targets.randomGet();
							player.line(target);
							var damage=target.damage(player.storage.bwp_cards_出击_mark/10);
							damage.bwp_skill_from='bwp_cards_出击_skill';
						};
					},
				},
			},
			translate:{
				'bwp_cards_出击_mark':'出击',
				'_bwp_cards_出击_skill':'出击',
				'bwp_cards_坏人走开':'坏人走开',
				'bwp_cards_去咬他':'去咬他！',
				'bwp_cards_坐下':'坐下！',
				'bwp_cards_生气了啦':'生气了啦！',
				'bwp_cards_别过来啊':'别过来啊！',
				'bwp_cards_不玩了啦':'不玩了啦！',
				'bwp_cards_出击':'出击！',
				'bwp_cards_觉醒X番茄':'觉醒·番茄',
				'bwp_zd':'百闻牌-战斗',
				'bwp_fs':'百闻牌-法术',
				'bwp_xt':'百闻牌-形态',
			},
		};
		for(var i in bwp_cards.card){
			var str="<img src="+lib.assetURL+'extension/扩展ol/'+i+'.png'+" width='100%' height='100%'>";
			/*
			if(bwp_cards.card[i].bwp_from){
				str+='<br>';
				for(var j=0;j<bwp_cards.card[i].bwp_from.length;j++){
					if(j!=0) str+='、';
					str+=bwp_cards.card[i].bwp_from[j].slice(9,bwp_cards.card[i].bwp_from[j].length);
				};
				str+='的专属卡牌';
			};
			*/
			bwp_cards.translate[i+'_info']=str;
		};
		for(var i in bwp_cards.card){
			bwp_cards.card[i].fullimage=true;
			bwp_cards.card[i].image='ext:扩展ol/'+i+'.png';
		};
		for(var i in bwp_cards.translate){
			if(i.indexOf('bwp_cards_tz_')!=-1){
				var str=i.slice(12);
				for(var j in bwp_cards.translate){
					if(j.indexOf(str)!=-1&&j.indexOf('_info')!=-1){
						bwp_cards.translate[j]+=bwp_cards.translate[i];
					};
				};
			};
		};
		return bwp_cards;
	});
	lib.translate['bwp_cards_card_config']=' 百闻牌 ';
	lib.config.all.cards.push('bwp_cards');
	if(!lib.config.cards.contains('bwp_cards')) lib.config.cards.push('bwp_cards');
}