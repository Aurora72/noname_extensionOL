window.func=function(lib,game,ui,get,ai,_status){
	lib.element.player.isXlsh_c=function(){
		if(lib.character[this.name]==undefined) return false;
		if(lib.character[this.name][4].contains('xlsh_c')) return true;
		return false;
	};
	game.import('character',function(){
		var xlsh={
			name:'xlsh',
			connect:true,
			character:{
				"xlsh_宙斯":["male","shen",3,["xlsh_王岭","xlsh_天权","xlsh_暴怒"],['xlsh_c']],
				"xlsh_赫拉":["female","shen",3,["xlsh_善妒","xlsh_繁荣"],['xlsh_c']],
				"xlsh_波塞冬":["male","shen",4,["xlsh_域洋"],['xlsh_c']],
				"xlsh_哈里斯":["male","shen",3,["xlsh_冥谕","xlsh_冥界"],['xlsh_c']],
				"xlsh_阿波罗":["male","shen",3,["xlsh_灿俊","xlsh_艺司"],['xlsh_c']],
				"xlsh_阿瑞斯":["male","shen",4,["xlsh_厄战"],['xlsh_c']],
				"xlsh_阿芙罗狄忒":["female","shen",3,["xlsh_欲带","xlsh_玫血"],['xlsh_c']],
				"xlsh_德墨忒尔":["female","shen",3,["xlsh_谷咏","xlsh_粲杖"],['xlsh_c']],
				"xlsh_赫尔墨斯":["male","shen",3,["xlsh_商盗","xlsh_翼履"],['xlsh_c']],
				"xlsh_赫菲斯托斯":["male","shen",4,["xlsh_匠佑"],['xlsh_c']],
				"xlsh_狄俄尼索斯":["male","shen",4,["xlsh_酿授"],['xlsh_c']],
				"xlsh_阿尔忒弥斯":["female","shen",4,["xlsh_月悯"],['xlsh_c']],
				"xlsh_雅典娜":["female","shen",3,["xlsh_秩律"],['xlsh_c']],
			},
			characterTitle:{
				"xlsh_宙斯":"奥林匹斯之王",
				"xlsh_赫拉":"神后",
				"xlsh_波塞冬":"海神",
				"xlsh_哈里斯":"冥王",
				"xlsh_阿波罗":"奥林匹斯之光",
				"xlsh_阿瑞斯":"战争之神",
				"xlsh_阿芙罗狄忒":"爱与美之神",
				"xlsh_德墨忒尔":"丰饶女神",
				"xlsh_赫尔墨斯":"奥林匹斯神使",
				"xlsh_赫菲斯托斯":"锻造之神",
				"xlsh_狄俄尼索斯":"狂欢之神",
				"xlsh_阿尔忒弥斯":"狩猎女神",
				"xlsh_雅典娜":"智慧女神",
			},
			skill:{
				"xlsh_王岭":{
					trigger:{
						global:"damageBefore",
					},
					filter:function (event,player){
						return event.player!=player&&get.distance(player,event.player,'attack')<=1;
					},
					content:function (){
						'step 0'
						trigger.player.chooseCard('he','请选择给予'+get.translation(player.name)+'牌，否则此次伤害变为雷属性伤害').set('ai',function(card){
							if(trigger.player.isLinked()) return 6-get.value(card);
							return 0;
						});
						'step 1'
						if(result.bool){
							trigger.player.$give(result.cards[0],player);
							player.gain(result.cards[0]);
						}else{
							trigger.nature='thunder';
						};
					},
				},
				"xlsh_天权":{
					trigger:{
						global:"damageBefore",
					},
					filter:function (event,player){
						return event.player!=player&&get.distance(player,event.player,'attack')<=1;
					},
					direct:true,
					content:function (){
						'step 0'
						player.chooseCard('he',get.prompt('xlsh_天权')).set('ai',function(card){
							if(game.countPlayer(function(current){return get.attitude(player,current)>0&&current.isLinked()})>=2||game.countPlayer(function(current){return get.attitude(player,current)<=0&&!current.isLinked()})>=2) return 5-get.value(card);
						});
						'step 1'
						if(result.bool){
							player.discard(result.cards[0]);
							player.chooseTarget([1,2],'请选择【铁索连环】的目标').ai=function(target){
								if(get.attitude(player,target)>0&&target.isLinked()) return 1;
								if(get.attitude(player,target)<=0&&!target.isLinked()) return -1;
							};
						}else{
							event.finish();
						};
						'step 2'
						if(result.bool){
							player.logSkill('xlsh_天权');
							player.useCard({name:'tiesuo'},result.targets);
						};
					},
				},
				"xlsh_暴怒":{
					unique:true,
					global:'xlsh_暴怒1',
					zhuSkill:true,
				},
				"xlsh_暴怒1":{
					trigger:{
						player:"damageAfter",
						source:"damageAfter",
					},
					filter:function (event,player){
						return player.isXlsh_c()&&game.zhu&&game.zhu.hasSkill('xlsh_暴怒')&&game.zhu!=undefined&&game.zhu.isAlive();
					},
					content:function (){
						'step 0'
						game.zhu.chooseTarget('请选择目标').ai=function(target){
							if(game.countPlayer(function(current){return get.attitude(player,current)>0&&(current.countCards('j',{name:'lebu'})>0||current.countCards('j',{name:'bingliang'})>0||current.countCards('j',{name:'shandian'})>0)})>0) return 1;
							return -get.attitude(player,target)+1;
						};
						'step 1'
						if(result.bool){
							game.zhu.logSkill('xlsh_暴怒');
							game.zhu.gainPlayerCard(result.targets[0],'hej',1);
						};
					},
				},
				"xlsh_善妒":{
					trigger:{
						global:"recoverAfter",
					},
					filter:function (event,player){
						return event.player!=player&&event.player.hp-event.num>0;
					},
					direct:true,
					content:function (){
						'step 0'
						player.chooseCard('h',get.prompt('xlsh_善妒')).set('ai',function(card){
							if(get.attitude(player,trigger.player)<0) return 6-get.value(card);
return 0;
						});
						'step 1'
						if(result.bool){
							player.line(trigger.player);
							player.logSkill('xlsh_善妒');
							player.discard(result.cards[0]);
							trigger.player.chooseCard('h',{suit:get.suit(result.cards[0])},'给予'+get.translation(player.name)+'一张同花色手牌，否则流失一点体力').set('ai',function(card){
								return 7-get.value(card);
							});
						}else{
							event.finish();
						};
						'step 2'
						if(result.bool){
							trigger.player.$give(result.cards[0],player);
							player.gain(result.cards[0]);
						}else{
							trigger.player.loseHp();
						};
					},
				},
				"xlsh_繁荣":{
					unique:true,
					global:'xlsh_繁荣1',
				},
				"xlsh_繁荣1":{
					trigger:{
						player:"phaseDrawBegin",
					},
					filter:function (event,player){
						return !player.hasSkill('xlsh_繁荣')&&player.countCards('h')>0&&game.hasPlayer(function(target){return target!=player&&target.hasSkill('xlsh_繁荣');});
					},
					direct:true,
					content:function (){
						'step 0'
						for(var i=0;i<game.players.length;i++){
							if(game.players[i].hasSkill('xlsh_繁荣')) event.pl=game.players[i];
						};
						trigger.player.chooseCard('h','是否将一张手给予'+get.translation(event.pl)+'然后摸一张牌').set('ai',function(card){
							if(card.name=='du'||(event.pl!=undefined&&get.attitude(player,event.pl)>=0)) return 1;
							return 0;
						});
						'step 1'
						if(result.bool){
							event.pl.logSkill('xlsh_繁荣');
							if(event.pl!=undefined){
								player.$give(result.cards[0],event.pl);
								event.pl.gain(result.cards[0]);
							};
							player.draw();
						};
					},
				},
				"xlsh_域洋":{
					trigger:{
						global:"phaseBegin",
					},
					filter:function (event,player){
						return event.player!=player&&get.distance(player,event.player,'attack')<=1&&event.player.countCards('hej')>0;
					},
					forced:true,
					content:function (){
						'step 0'
						trigger.player.chooseCard('hej','请选择给予'+get.translation(player.name)+'牌，否则其弃置你一张牌').set('ai',function(card){
							return 5-get.value(card);
						});
						'step 1'
						if(result.bool){
							trigger.player.$give(result.cards[0],player);
							player.gain(result.cards[0]);
						}else{
							player.line(trigger.player);
							player.discardPlayerCard(trigger.player,'hej',true);
						};
					},
				},
				"xlsh_冥谕":{
					trigger:{
						global:"phaseEnd",
					},
					filter:function (event,player){
						return event.player!=player;
					},
					check:function (event,player){
						return false;
					},
					content:function (){
						'step 0'
						var list=['流失一点体力'];
						if(player.countCards('he')>=2) list.push('弃置两张牌');
						player.chooseControl(list).set('ai',function(event){
							return list.randomGet();;
						});
						'step 1'
						if(result.control=='流失一点体力') player.loseHp();
						if(result.control=='弃置两张牌') player.chooseToDiscard('he',2,true);
						trigger.player.turnOver();
					},
				},
				"xlsh_冥界":{
					marktext:"冥",
					intro:{
						content:function(storage,player,skill){
							return '冥界标记';
						},
					},
					trigger:{
						player:"phaseEnd",
					},
					forced:true,
					content:function (){
						if(player.storage.xlsh_冥界==undefined){
							player.storage.xlsh_冥界=true;
							player.markSkill('xlsh_冥界');
							for(var i=0;i<game.players.length;i++){
								var pl=game.players[i];
								if(pl!=player) pl.turnOver();
							};
						}else{
							delete player.storage.xlsh_冥界;
							player.unmarkSkill('xlsh_冥界');
						};
					},
				},
				"xlsh_灿俊":{
					trigger:{
						global:"phaseBegin",
					},
					filter:function (event,player){
						return event.player!=player&&get.distance(player,event.player,'attack')<=1;
					},
					forced:true,
					content:function (){
						'step 0'
						trigger.player.chooseControl(['令'+get.translation(player.name)+'摸两张牌并获得其一张手牌','失去一点体力并对'+get.translation(player.name)+'造成一点伤害']).set('ai',function(event){
							if(get.attitude(trigger.player,player)<0&&trigger.player.hp>trigger.player.maxHp-1&&trigger.player.hp>1) return '失去一点体力并对'+get.translation(player.name)+'造成一点伤害';
							return '令'+get.translation(player.name)+'摸两张牌并获得其一张手牌';
						});
						'step 1'
						trigger.player.line(player);
						if(result.control=='令'+get.translation(player.name)+'摸两张牌并获得其一张手牌'){
							player.draw(2);
							trigger.player.gainPlayerCard('hej',player,1,true);
						}else{
							trigger.player.loseHp();
							player.damage().source=trigger.player;
						};
					},
				},
				"xlsh_艺司":{
					enable:"phaseUse",
					usable:1,
					discard:false,
					filterCard:true,
					check:function (card){
						return 7-get.value(card)
					},
					filterTarget:function (card,player,target){
						return target!=player&&target.countCards('h')>0;
					},
					content:function (){
						'step 0'
						target.chooseCard('h','请选择展示并给予的手牌',true).set('ai',function(card){
							return 7-get.value(card);
						});
						'step 1'
						if(result.bool){
							target.$give(result.cards[0],player);
							player.gain(result.cards[0]);
							game.delay(1.5);
							player.$give(cards[0],target);
							target.gain(cards[0]);
							if(get.color(result.cards[0])==get.color(cards[0])){
								target.draw();
								player.draw();
							};
						};
					},
					ai:{
						order:11,
						result:{
							target:1,
						},
					},
				},
				"xlsh_厄战":{
					trigger:{
						global:"phaseBegin",
					},
					filter:function (event,player){
						return event.player!=player&&get.distance(player,event.player,'attack')<=1;
					},
					forced:true,
					content:function (){
						'step 0'
						var list=['对'+get.translation(trigger.player.name)+'使用一张【杀】'];
						if(trigger.player.countCards('he')>0) list.push('令'+get.translation(trigger.player.name)+'给予你一张牌并视为对你使用一张【杀】');
						player.chooseControl(list).set('ai',function(event){
							if(trigger.player.countCards('he')>0&&trigger.player.countCards('h',{name:'shan'})>=2) return '令'+get.translation(trigger.player.name)+'给予你一张牌并视为对你使用一张【杀】';
							return '对'+get.translation(trigger.player.name)+'使用一张【杀】';
						});
						'step 1'
						player.line(trigger.player);
						if(result.control=='对'+get.translation(trigger.player.name)+'使用一张【杀】'){
							player.chooseToUse('请使用一张【杀】',{name:'sha'},trigger.player);
							event.finish();
						}else{
							trigger.player.chooseCard('he','请选择给予'+get.translation(player.name)+'的牌',true).set('ai',function(card){
								return 5-get.value(card);
							});
						};
						'step 2'
						if(result.bool){
							trigger.player.$give(result.cards[0],player);
							player.gain(result.cards[0]);
							trigger.player.useCard({name:'sha'},player);
						};
					},
				},
				"xlsh_欲带":{
					enable:'phaseUse',
					usable:1,
					filter:function(event,player){
						return game.players.length>=3;
					},
					filterTarget:function(card,player,target){
						return target!=player;
					},
					targetprompt:['弃牌','回血'],
					selectTarget:2,
					multitarget:true,
					multiline:true,
					content:function(){
						'step 0'
						targets[0].chooseToDiscard('h',2).ai=function(card){
							if(get.attitude(targets[0],player)>0&&player.hp<player.maxHp) return 6-get.value(card);
							return -1;
						};
						'step 1'
						if(result.bool){
							//targets[0].line(player,'green');
							targets[1].recover();
							player.recover();
						};
					},
					ai:{
						order:1,
						result:{
							target:function(player,target){
								if(player.hp<player.maxHp) return 1;
								//if(ui.selected.targets.length==0){
								//	return -1;
								//}else{
								//	return 1;
								//};
							},
						},
					},
				},
				"xlsh_玫血":{
					trigger:{
						player:"damageAfter",
					},
					direct:true,
					content:function (){
						'step 0'
						player.chooseTarget(1,get.prompt('xlsh_玫血')).ai=function(target){
							if(target.hp<target.maxHp&&target.countCards('he')==0&&get.attitude(player,target)>0) return get.attitude(player,target);
							return -get.attitude(player,target);
						};
						'step 1'
						if(result.bool){
							event.target=result.targets[0];
							player.line(event.target);
							player.logSkill('xlsh_玫血');
							player.chooseControl(['令其摸两张牌并受到来自你的一点伤害','弃置其两张牌并令其回复一点体力']).set('ai',function(event){
								if(get.attitude(player,event.target)>0) return '弃置其两张牌并令其回复一点体力';
								if(event.target.hp==event.target.maxHp) return '弃置其两张牌并令其回复一点体力';
								return '令其摸两张牌并受到来自你的一点伤害';
							});
						}else{
							event.finish();
						};
						'step 2'
						if(result.control=='弃置其两张牌并令其回复一点体力'){
							player.discardPlayerCard(event.target,'he',2);
							event.target.recover();
						}else{
							event.target.draw(2);
							event.target.damage();
						};
					},
				},
				"xlsh_谷咏":{
					trigger:{
						global:"phaseEnd",
					},
					filter:function (event,player){
						return event.player!=player&&get.distance(player,event.player,'attack')<=1&&player.countCards('he')>0;
					},
					check:function (event,player){
						return get.attitude(player,event.player)>=0;
					},
					content:function (){
						'step 0'
						player.chooseToDiscard('he',true,1);
						'step 1'
						if(result.bool){
							player.gainPlayerCard(trigger.player,'he',1);
							trigger.player.draw(2);
						};
					},
				},
				"xlsh_粲杖":{
					enable:"phaseUse",
					usable:1,
					filterTarget:function (card,player,target){
						return target!=player;
					},
					filter:function (event,player){
						return ui.discardPile.childNodes.length>0;
					},
					content:function (){
						"step 0"
						player.discardPlayerCard(target,'he',1);
						var cards=[];
						for(var i=0;i<ui.discardPile.childNodes.length;i++){
							cards.push(ui.discardPile.childNodes[i]);
						}
						target.chooseCardButton(cards,'选择卡牌并获得之',1,true).ai=function(button){return 1};
						"step 1"
						if(result.bool){
							for(var i=0;i<result.links.length;i++){
								target.gain(result.links[i]);
								target.$gain2(result.links[i]);
								game.log(target,'获得了',result.links[i]);
							};
						};
					},
					ai:{
						order:1,
						result:{
							target:1,
						},
					},
				},
				"xlsh_商盗":{
					enable:"phaseUse",
					usable:1,
					discard:false,
					filterCard:true,
					position:'he',
					check:function (card){
						return 5-get.value(card)
					},
					filterTarget:function (card,player,target){
						return target!=player;
					},
					content:function (){
						'step 0'
						player.showCards(cards);
						game.delay(1);
						player.$give(cards[0],target);
						target.gain(cards[0]);
						game.delay(1);
						player.gainPlayerCard(target,1,'h');
						'step 1'
						if(result.bool){
							player.showCards(result.cards);
							if(get.color(cards[0])==get.color(result.cards[0])) player.gainPlayerCard(target,1,'hej');
						};
					},
					ai:{
						order:11,
						result:{
							target:-1,
						},
					},
				},
				"xlsh_翼履":{
					trigger:{
						global:"useCardBefore",
					},
					filter:function (event,player){
						return event.targets&&event.targets.contains(player);
					},
					content:function (){
						player.draw(2);
						player.addSkill('xlsh_翼履1');
					},
				},
				"xlsh_翼履1":{
					trigger:{
						global:"useCardAfter",
					},
					forced:true,
					popup:false,
					content:function (){
						player.chooseToDiscard('he',2,true);
						player.removeSkill('xlsh_翼履1');
					},
				},
				"xlsh_匠佑":{
					trigger:{
						player:'phaseAfter',
						global:'gameStart',
					},
					content:function(){
						'step 0'
						var list=[];
						for(var i=0;i<lib.cardPack.standard.length;i++){
							var card=game.createCard({name:lib.cardPack.standard[i]})
							if(get.type(card)=='equip'&&get.subtype(card)!='equip3'&&get.subtype(card)!='equip4') list.push(card);
						};
						for(var i=0;i<lib.cardPack.extra.length;i++){
							var card=game.createCard({name:lib.cardPack.extra[i]})
							if(get.type(card)=='equip'&&get.subtype(card)!='equip3'&&get.subtype(card)!='equip4') list.push(card);
						};
						for(var i=0;i<lib.cardPack.sp.length;i++){
							var card=game.createCard({name:lib.cardPack.sp[i]})
							if(get.type(card)=='equip'&&get.subtype(card)!='equip3'&&get.subtype(card)!='equip4') list.push(card);
						};
						for(var i=0;i<lib.cardPack.swd.length;i++){
							var card=game.createCard({name:lib.cardPack.swd[i]})
							if(get.type(card)=='equip'&&get.subtype(card)!='equip3'&&get.subtype(card)!='equip4') list.push(card);
						};
						for(var i=0;i<lib.cardPack.gujian.length;i++){
							var card=game.createCard({name:lib.cardPack.gujian[i]})
							if(get.type(card)=='equip'&&get.subtype(card)!='equip3'&&get.subtype(card)!='equip4') list.push(card);
						};
						player.chooseCardButton(list,[0,3],'请选择需要获得的装备技能');
						'step 1'
						if(result.bool){
							for(var i=0;i<result.links.length;i++){
								if(lib.card[result.links[i].name].skills!=undefined){
									var skills=lib.card[result.links[i].name].skills;
									for(var j=0;j<skills.length;j++){
										if(lib.skill[skills[j]]!=undefined) player.addTempSkill(skills[j],{player:'phaseEnd'});
										game.log(player,'获得了装备技能【',get.translation(skills[j]),'】');
									};
								};
							};
						};
					},
				},
				"xlsh_酿授":{
					trigger:{
						global:"phaseUseBefore",
					},
					direct:true,
					content:function (){
						'step 0'
						trigger.player.chooseCard('he','是否给予'+get.translation(player.name)+'一张手牌并视为你使用了【酒】').set('ai',function(card){
							if(trigger.player.countCards('h',{name:'sha'})>=2&&game.countPlayer(function(current){return get.distance(trigger.player,current,'attack')<=1&&get.attitude(trigger.player,current)<0})>0) return 6-get.value(card);
							return 0;
						});
						'step 1'
						if(result.bool){
							player.logSkill('xlsh_酿授');
							trigger.player.$give(result.cards[0],player);
							player.gain(result.cards[0]);
							trigger.player.useCard({name:'jiu'},trigger.player);
						};
					},
				},
				"xlsh_月悯":{
					mod:{
						attackFrom:function(from,to,distance){
							return distance-2;
						},
					},
					trigger:{
						source:"damageBegin",
					},
					filter:function (event,player){
						return event.card&&event.card.name=='sha';
					},
					check:function (event,player){
						return (event.num==1&&event.player.getEquip(2))||get.attitude(player,event.player)>0;
					},
					content:function (){
						'step 0'
						trigger.cancel();
						player.gainPlayerCard(trigger.player,'hej',1);
						player.chooseTarget(1,function(card,player,target){
							return target==trigger.player.previous||target==trigger.player.next;
						},'请选择【月悯】的目标').ai=function(target){
							return -get.attitude(player,target);
						};
						'step 1'
						if(result.bool){
							player.line(result.targets[0]);
							result.targets[0].damage();
						};
					},
				},
				"xlsh_秩律":{
					init:function (player){
						player.storage.xlsh_秩律=[];
					},
					marktext:"律",
					intro:{
						content:'cards',
					},
					mark:true,
					group:["xlsh_秩律_1","xlsh_秩律_2","xlsh_秩律_3"],
					subSkill:{
						'1':{
							trigger:{
								global:'gameDrawAfter',
							},
							forced:true,
							content:function (){
								'step 0'
								player.draw();
								'step 1'
								player.chooseCard('h','请选择一张手牌作为“律”',true).set('ai',function(card){
									return 6-get.value(card);;
								});
								'step 2'
								if(result.bool){
									player.storage.xlsh_秩律.push(result.cards[0]);
									player.syncStorage('xlsh_秩律');
									game.log(player,'将',result.cards[0],'置于其武将牌上');
									player.lose(result.cards[0],ui.special);
								};
							},
						},
						'2':{
							trigger:{
								player:'phaseDrawAfter',
							},
							direct:true,
							content:function (){
								'step 0'
								player.chooseCard('h','是否用一张手牌替换“律”？').set('ai',function(card){
									return 6-get.value(card);;
								});
								'step 1'
								if(result.bool){
									player.logSkill('xlsh_秩律');
									player.gain(player.storage.xlsh_秩律[0],'gain2');
									player.storage.xlsh_秩律.remove(player.storage.xlsh_秩律[0]);
									player.syncStorage('xlsh_秩律');
									player.storage.xlsh_秩律.push(result.cards[0]);
									player.syncStorage('xlsh_秩律');
									game.log(player,'将',result.cards[0],'置于其武将牌上');
									player.lose(result.cards[0],ui.special);
								};
							},
						},
						'3':{
							trigger:{
								global:"phaseBegin",
							},
							filter:function (event,player){
								return event.player!=player&&get.distance(player,event.player,'attack')<=1;
							},
							forced:true,
							content:function (){
								'step 0'
								trigger.player.chooseControl(['给予'+get.translation(player.name)+'一张牌','本回合内每使用一张与“律”类型相同的牌须弃置一张牌']).set('ai',function(event){
									return '本回合内其每使用一张与“律”类型相同的牌须弃置一张牌'
								});
								'step 1'
								if(result.control=='给予'+get.translation(player.name)+'一张牌'){
									trigger.player.chooseCard('he','请选择给予'+get.translation(player.name)+'的牌',true).set('ai',function(card){
										return 6-get.value(card);
									});
								}else{
									player.line(trigger.player);
									trigger.player.storage.xlsh_秩律1=player.storage.xlsh_秩律[0];
									trigger.player.addTempSkill('xlsh_秩律1',{player:'phaseEnd'});
									event.finish();
								};
								'step 2'
								if(result.bool){
									trigger.player.$give(result.cards[0],player);
									player.gain(result.cards[0]);
								};
							},
						},
					},
				},
				"xlsh_秩律1":{
					trigger:{
						player:"useCardAfter",
					},
					forced:true,
					filter:function (event,player){
						return event.card&&get.type(event.card)==get.type(player.storage.xlsh_秩律1);
					},
					content:function (){
						player.chooseToDiscard('he',1,true);
					},
				},
			},
			translate:{
				"xlsh_雅典娜":"雅典娜",
				"xlsh_秩律":"秩律",
				"xlsh_秩律1":"秩律",
				"xlsh_秩律_info":"分发起始手牌后，你摸一张牌，你选择一张手牌置于你的武将牌上称为“律”；摸牌阶段结束时，你可以用一张手牌替换“律”；你的攻击范围的其他角色在其准备阶段须选择一项：1.给予你一张牌，2.本回合内其每使用一张与“律”类型相同的牌须弃置一张牌",
				"xlsh_阿尔忒弥斯":"阿尔忒弥斯",
				"xlsh_月悯":"月悯",
				"xlsh_月悯_info":"你的初始攻击范围为3；当你使用的【杀】造成伤害时，你可以防止此伤害改为获得目标区域内的一张牌，并对与该角色距离为1的一名其他角色造成一点伤害",
				"xlsh_狄俄尼索斯":"狄俄尼索斯",
				"xlsh_酿授":"酿授",
				"xlsh_酿授_info":"任意一名角色的出牌阶段开始时，其可给予你一张手牌视为其使用了一张【酒】",
				"xlsh_赫菲斯托斯":"赫菲斯托斯",
				"xlsh_匠佑":"匠佑",
				"xlsh_匠佑_info":"游戏开始时或回合结束后，你可以选择0-3件装备的装备技能并获得之，这些装备技能将持续到你的回合结束阶段",
				"xlsh_赫尔墨斯":"赫尔墨斯",
				"xlsh_商盗":"商盗",
				"xlsh_商盗_info":"出牌阶段限一次，你可以展示并给予一名角色一张牌然后你展示并获得该角色的一张手牌，若两张牌的颜色相同，你获得该角色区域内的一张牌",
				"xlsh_翼履":"翼履",
				"xlsh_翼履_info":"当你成为一张牌的目标前，你可以摸两张牌，若如此做，在此牌结算后你须弃置两张牌",
				"xlsh_德墨忒尔":"德墨忒尔",
				"xlsh_谷咏":"谷咏",
				"xlsh_谷咏_info":"当一名处于你攻击范围内的角色的结束阶段开始时，你可以弃一张牌并获得该角色一张牌然后令该角色摸两张牌",
				"xlsh_粲杖":"粲杖",
				"xlsh_粲杖_info":"出牌阶段限一次，你可以弃置一名其他角色一张牌令其从弃牌堆选一张牌加入手牌",
				"xlsh_阿芙罗狄忒":"阿芙罗狄忒",
				"xlsh_欲带":"欲带",
				"xlsh_欲带_info":"出牌阶段限一次，你可以令一名其他角色弃置两张手牌，然后你指定另一名其他角色与其各回复一点体力",
				"xlsh_玫血":"玫血",
				"xlsh_玫血_info":"当你受到伤害后，你可以指定一名角色并选择一项：1.令其摸两张牌并受到来自你的一点伤害，2.弃置其两张牌令其回复一点体力",
				"xlsh_阿瑞斯":"阿瑞斯",
				"xlsh_厄战":"厄战",
				"xlsh_厄战_info":"你攻击范围内的其他角色的准备阶段开始时，你须选择一项：1.令其给予你一张牌视为对你使用一张【杀】；2.你对其使用一张【杀】",
				"xlsh_阿波罗":"阿波罗",
				"xlsh_灿俊":"灿俊",
				"xlsh_灿俊_info":"锁定技，你攻击范围内的其他角色的准备阶段开始时，该角色须选择一项：1.令你摸两张牌并获得你一张手牌；2.失去一点体力并对你造成一点伤害",
				"xlsh_艺司":"艺司",
				"xlsh_艺司_info":"出牌阶段限一次，你可以指定一名有手牌角色然后与该角色同时给予对方一张手牌，若两张牌的颜色相同，你与该角色各摸一张牌",
				"xlsh_哈里斯":"哈里斯",
				"xlsh_冥谕":"冥谕",
				"xlsh_冥谕_info":"其他角色结束阶段，你可弃两张牌或流失一点体力令其翻面",
				"xlsh_冥界":"冥界",
				"xlsh_冥界_info":"锁定技，你的结束阶段，若你没有冥界标记，除你以外的全部角色须将武将牌翻面，然后你获得冥界标记；若你已拥有冥界标记，你失去冥界标记结束回合",
				"xlsh_波塞冬":"波塞冬",
				"xlsh_域洋":"域洋",
				"xlsh_域洋_info":"锁定技，你攻击范围内的角色的准备阶段开始时，须给予你一张牌，否则你弃置该角色区域内的一张牌",
				"xlsh_赫拉":"赫拉",
				"xlsh_善妒":"善妒",
				"xlsh_善妒_info":"当场上一名非濒死状态角色回复体力后，你可以弃置一张手牌，令其选择一项：1.给予你一张相同颜色的手牌；2.减少1点体力",
				"xlsh_繁荣":"繁荣",
				"xlsh_繁荣_info":"任意一名其他角色的摸牌阶段开始前，该角色可给予你一张手牌，若其如此做，该角色摸一张牌",
				"xlsh_宙斯":"宙斯",
				"xlsh_王岭":"王岭",
				"xlsh_王岭_info":"当你的攻击范围内的角色受到伤害时，需给予你一张牌，否则此伤害将变为雷属性伤害",
				"xlsh_天权":"天权",
				"xlsh_天权_info":"当你的攻击范围内的角色受到伤害时，你可以弃置一张牌，视为使用了一次【铁索连环】",
				"xlsh_暴怒":"暴怒",
				"xlsh_暴怒1":"暴怒",
				"xlsh_暴怒_info":"主公技，每当场上的希腊神话体系角色受到或造成一点雷属性伤害时，该角色可令你获得场上的一张牌",
			},
		};
		if(lib.device||lib.node){
			for(var i in xlsh.character){xlsh.character[i][4].push('ext:扩展ol/'+i+'.jpg');}
		}else{
			for(var i in xlsh.character){xlsh.character[i][4].push('db:extension-扩展ol:'+i+'.jpg');}
		}
		return xlsh;
	});
	lib.config.all.characters.push('xlsh');
	if(!lib.config.characters.contains('xlsh')) lib.config.characters.push('xlsh');
	lib.translate['xlsh_character_config']='希腊神话';
}