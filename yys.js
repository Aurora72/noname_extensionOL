window.func=function(lib,game,ui,get,ai,_status){
	game.import('character',function(lib,game,ui,get,ai,_status){
		var yys = {
			name: 'yys',
			connect:true,
			/*characterSort:{
				yys:{
					'kzol_yys_fei':[],
				},
			},*/
			character:{
				baiyys白狼:["female","sr",4,["yys无我","yys冥想"],[]],
				yanyys烟烟罗:["female","sr",3,["yys扑朔","yys迷离"],[]],
				bingyys兵佣:["male","r",4,["yys挥斩"],[]],
				huyys蝴蝶精:["female","r",3,["yys祈愿","yys轻盈"],[]],
				huangyys荒:["male","ssr",4,["yys星轨","yys天罚"],[]],
				jinyys金鱼姬:["female","sr",3,["yys扇舞","yys助阵"],[]],
				jiuyys九命猫:["female","r",3,["yys报复","yys九命"],[]],
				huangyys荒川之主:["male","ssr",4,["yys逐流","yys游鱼"],[]],
				guiyys鬼使白:["male","sr",3,["yys魂狩","yys夺命"],[]],
				tiaoyys跳跳妹妹:["female","r",3,["yys卖萌","yys撒娇"],[]],
				ciyys茨木童子:["male","ssr",6,["yys黑焰","yys迁怒","yys鬼手"],[]],
				yaoyys妖狐:["male","sr",4,["yys狂刃"],[]],
				guiyys鬼使黑:["male","sr",4,["yys索命"],[]],
				qingyys青行灯:["female","ssr",3,["yys幽明","yys吸魂"],[]],
				taoyys桃花妖:["female","sr",3,["yys花舞","yys桃华"],[]],
				shouyys首无:["male","r",3,["yys虚无","yys冥火"],[]],
				yys_大天狗:["male","ssr",3,["yys_逆羽","yys_风袭"],[]],
				yys_酒吞童子:["male","ssr",4,["yys_醉怒","yys_狂啸"],[]],
				yys_辉夜姬:["female","ssr",3,["yys_蓬莱","yys_玉裘"],[]],
				yys_茨木童子:["male","ssr",4,["yys_迁怒","yys_鬼手"],[]],
				yys_玉藻前:["female","ssr",3,["yys_灵击","yys_狐火","yys_堕天"],[]],
				yys_妖刀姬:["female","ssr",3,["yys_连斩","yys_杀戮"],[]],
				yys_青行灯:["female","ssr",3,["yys_幽光","yys_明灯"],[]],
				yys_花鸟画:["female","ssr",3,["yys_归鸟","yys_画境"],[]],
				yys_荒:["male","ssr",3,["yys_星轨","yys_天罚"],[]],
				yys_御馔津:["female","ssr",3,["yys_狩界","yys_一矢"],[]],
				yys_小鹿男:["male","ssr",3,["yys_生息","yys_冲撞"],[]],
				yys_雪童子:["male","ssr",4,["yys_雪走","yys_碎冰"],[]],
				yys_荒川之主:["male","ssr",4,["yys_逐流","yys_吞噬"],[]],
				yys_彼岸花:["female","ssr",3,["yys_血葬","yys_花海"],[]],
				yys_一目连:["male","ssr",4,["yys_风破","yys_风佑"],[]],
				yys_山颪:["male","ssr",4,["yys_斩风","yys_撕裂"],[]],
				yys_两面佛:["male","ssr",4,["yys_怒目","yys_神罪"],[]],
				yys_阎魔:["female","ssr",3,["yys_夺魂","yys_怨厌"],[]],
				yys_雪女:["female","sr",3,["yys_风雪","yys_冰甲"],[]],
				yys_神乐:["female","ssr",3,["yys_疾风","yys_续命","yys_神火"],[]],
				yys_座敷童子:["female","r",3,["yys_福祸","yys_鸿运"],[]],
				yys_椒图:["female","r",3,["yys_涓流","yys_滋养"],[]],
			},
			characterIntro:{
				"yys_神乐":'<img width="290" src="'+lib.assetURL+'extension/扩展ol/role_sl.png">',
			},
			skill:{
				"yys_涓流":{
					group:["yys_涓流_1","yys_涓流_2"],
					subSkill:{
						"1":{
							enable:"phaseUse",
							usable:1,
							filterCard:true,
							position:'he',
							check:function(card){
								return 5-get.value(card);
							},
							filterTarget:function (card,player,target){
								return player!=target;
							},
							selectTarget:function(){
								return [1,2];
							},
							multitarget:true,
							multiline:true,
							content:function(){
								'step 0'
								event.num=0;
								player.link();
								'step 1'
								targets[event.num].link();
								'step 2'
								if(event.num<targets.length-1){
									event.num++;
									event.goto(1);
								};
							},
							ai:{
								order:1,
								result:{
									target:function(player,target){
										if(player.countCards('h')>1&&!target.isLinked()) return -1;
									},
								},
							},
						},
						"2":{
							trigger:{
								global:"damageBegin",
							},
							filter:function(event,player){
								return event.player.isLinked()&&event.num>1;
							},
							priority:-Infinity,
							direct:true,
							content:function (){
								'step 0'
								player.chooseTarget([1,trigger.num],get.prompt('yys_涓流'),function(card,player,target){
									return target!=player&&target.isLinked();
								}).set('ai',function(target){
									return -get.attitude(player,target);
								});
								'step 1'
								if(result.bool){
									var targets=result.targets;
									player.line(targets);
									player.logSkill('yys_涓流',targets);
									for(var i=0;i<targets.length;i++){
										targets[i].damage();
									};
									trigger.num-=targets.length;
								};
							},
						},
					},
				},
				"yys_滋养":{
					trigger:{
						global:"phaseUseBegin",
					},
					filter:function(event,player){
						return event.player!=player&&player.countCards('he')>=player.hp;
					},
					direct:true,
					content:function(){
						'step 0'
						player.chooseCard('he',player.hp,get.prompt('yys_滋养')).set('ai',function(card){
							if(get.attitude(player,trigger.player)>0&&player.hp<2&&player.countCards('h')>1) return 6-get.value(card);
							return 0;
						});
						'step 1'
						if(result.bool){
							player.line(trigger.player);
							player.logSkill('yys_滋养',trigger.player);
							player.discard(result.cards);
							player.useCard({name:'jiu'},trigger.player);
						};
					},
				},
				"yys_福祸":{
					trigger:{
						global:"phaseUseBegin",
					},
					filter:function(event,player){
						return event.player!=player;
					},
					check:function(event,player){
						return get.attitude(player,event.player)>0&&player.hp>2&&event.player.countCards('j',{name:'lebu'})==0;
					},
					content:function(){
						'step 0'
						player.loseHp();
						player.line(trigger.player);
						trigger.player.chooseControl(['摸牌','【杀】的使用次数增加']).set('ai',function(){
							return '摸牌';
						});
						'step 1'
						trigger.player.popup(result.control);
						if(result.control=='摸牌') trigger.player.draw(player.maxHp-player.hp+1);
						if(result.control=='【杀】的使用次数增加'){
							trigger.player.storage.yys_福祸=player.maxHp-player.hp+1;
							trigger.player.addTempSkill('yys_福祸1',{player:'phaseAfter'});
						};
					},
				},
				"yys_福祸1":{
					mod:{
						cardUsable:function(card,player,num){
							if(card.name=='sha'&&player.storage.yys_福祸!=undefined) return num+player.storage.yys_福祸;
						},
					},
				},
				"yys_鸿运":{
					group:["yys_鸿运_1","yys_鸿运_2"],
					subSkill:{
						"1":{
							trigger:{
								global:"gameStart",
							},
							direct:true,
							content:function (){
								'step 0'
								player.chooseTarget(get.prompt('yys_鸿运')).set('ai',function(target){
									return get.attitude(player,target);
								});
								'step 1'
								if(result.bool){
									player.line(result.targets);
									player.logSkill('yys_鸿运');
									result.targets[0].draw(3)
								};
							},
						},
						"2":{
							trigger:{
								player:"phaseBegin",
							},
							direct:true,
							content:function (){
								'step 0'
								player.chooseTarget(get.prompt('yys_鸿运'),function(card,player,target){
									return target!=player;
								}).set('ai',function(target){
									return get.attitude(player,target);
								});
								'step 1'
								if(result.bool){
									player.line(result.targets);
									player.logSkill('yys_鸿运',result.targets);
									result.targets[0].draw()
								};
							},
						},
					},
				},
				"yys_疾风":{
					trigger:{
						player:'phaseUseBefore'
					},
					filter:function(event,player){
						return player.countCards('he')>0;
					},
					direct:true,
					content:function(){
						"step 0"
						player.chooseTarget(get.prompt('yys_疾风'),function(card,player,target){
							return target!=player;
						}).set('ai',function(target){
							if(target.hasJudge('lebu')) return -1;
							return get.attitude(player,target)-4;
						});
						"step 1"
						if(result.bool){
							player.line(result.targets);
							player.logSkill('yys_疾风',result.targets);
							trigger.cancel();
							player.chooseToDiscard('he',1,true);
							result.targets[0].insertPhase();
						};
					},
				},
				"yys_续命":{
					init:function (player){
						player.storage.yys_续命=false;
					},
					intro:{
						content:"limited",
					},
					mark:true,
					unique:true,
					skillAnimation:true,
					animationStr:"续命",
					animationColor:"fire",
					trigger:{
						player:"phaseEnd",
					},
					filter:function(event,player){
						if(player.storage.yys_续命) return false;
						return true;
					},
					check:function(event,player){
						return game.countPlayer(function(current){return get.attitude(player,current)>0&&current.hp<2})>0;
					},
					content:function(){
						"step 0"
						player.chooseTarget('选择【续命】的目标').ai=function(target){
							if(get.attitude(player,target)>0&&target.hp<2) return 1;
							return -1;
						};
						"step 1"
						if(result.bool){
							var target=result.targets[0];
							var cards=get.cards(5);
							player.line(target);
							player.awakenSkill('yys_续命');
							player.storage.yys_续命=true;
							target.storage.yys_续命1=[];
							target.markSkill('yys_续命1');
							player.$give(cards,target,false);
							for(var i=0;i<cards.length;i++){
								target.storage.yys_续命1.push(cards[i]);
								target.syncStorage('yys_续命1');
							};
							game.log(player,'将',cards,'置于',target,'的武将牌上');
							game.delay(0.5);
						}else{
							event.finish();
						};
					},
					global:['yys_续命2_1','yys_续命2_2'],
				},
				"yys_续命1":{
					marktext:"魂",
					intro:{
						content:'cards',
					},
				},
				"yys_续命2":{
					//group:["yys_续命2_1","yys_续命2_2"],
					subSkill:{
						"1":{
							trigger:{
								player:"damageBefore",
							},
							filter:function (event,player){
								return player.storage.yys_续命1&&player.storage.yys_续命1.length>0;
							},
							forced:true,
							content:function (){
								//player.logSkill('yys_续命');
								var card=player.storage.yys_续命1[0];
								player.discard(card);
								game.cardsDiscard(card);
								//ui.discardPile.appendChild(card);
								player.storage.yys_续命1.remove(card);
								player.syncStorage('yys_续命1');
								if(player.storage.yys_续命1.length==0){
									delete player.storage.yys_续命1;
									player.unmarkSkill('yys_续命1');
								};
								trigger.cancel();
							},
						},
						"2":{
							trigger:{
								player:"phaseEnd",
							},
							filter:function (event,player){
								return player.storage.yys_续命1&&player.storage.yys_续命1.length>0;
							},
							forced:true,
							content:function (){
								//player.logSkill('yys_续命');
								var card=player.storage.yys_续命1[0];
								player.discard(card);
								game.cardsDiscard(card);
								//ui.discardPile.appendChild(card);
								player.storage.yys_续命1.remove(card);
								player.syncStorage('yys_续命1');
								if(player.storage.yys_续命1.length==0){
									delete player.storage.yys_续命1;
									player.unmarkSkill('yys_续命1');
								};
							},
						},
					},
				},
				"yys_神火":{
					trigger:{
						player:"damageAfter",
					},
					filter:function(event,player){
						return event.source&&event.source!=player&&_status.currentPhase==event.source;
					},
					check:function(event,player){
						return event.source&&get.attitude(player,event.source)<0;
					},
					content:function(){
						'step 0'
						trigger.source.chooseControl(['弃置装备区内的所有牌','结束出牌阶段']).set('ai',function(){
							if(trigger.source.countCards('e')==0) return '弃置装备区内的所有牌';
							return '结束出牌阶段';
						});
						'step 1'
						trigger.source.popup(result.control);
						if(result.control=='弃置装备区内的所有牌') trigger.source.discard(trigger.source.get('e'));
						if(result.control=='结束出牌阶段'){
							var evt=_status.event;
							for(var i=0;i<10;i++){
								if(evt&&evt.getParent) evt=evt.getParent();
								if(evt.name=='phaseUse'){
									evt.skipped=true;
									break;
								};
							};
						};
					},
				},
				"yys_风雪":{
					enable:"phaseUse",
					usable:1,
					filterCard:function(card){
						var suit=get.suit(card);
						for(var i=0;i<ui.selected.cards.length;i++){
							if(get.suit(ui.selected.cards[i])==suit) return false;
						};
						return true;
					},
					selectCard:[1,Infinity],
					check:function(card){
						return 5-get.value(card);
					},
					complexCard:true,
					filterTarget:function (card,player,target){
						return player!=target;
					},
					selectTarget:function(){
						if(ui.selected.cards.length<ui.selected.targets.length){
							game.uncheck('target');
						};
						return [1,ui.selected.cards.length];
					},
					multitarget:true,
					multiline:true,
					content:function(){
						'step 0'
						event.num=0;
						'step 1'
						targets[event.num].chooseControl(['受到伤害','翻面']).set('ai',function(){
							if(targets[event.num].isTurnedOver()) return '翻面';
							if(((targets[event.num].countCards('h')>2&&targets[event.num].hp>1)||targets[event.num].countCards('h',{name:'tao'})>0)&&targets[event.num].countCards('j',{name:'lebu'})==0) return '受到伤害';
							return '翻面';
						});
						'step 2'
						targets[event.num].popup(result.control);
						if(result.control=='受到伤害') targets[event.num].damage();
						if(result.control=='翻面') targets[event.num].turnOver();
						if(event.num<targets.length-1){
							event.num++;
							event.goto(1);
						};
					},
					ai:{
						order:13,
						result:{
							target:function(player,target){
								if(player.countCards('h')>1){
									if(get.attitude(player,target)>=0&&target.isTurnedOver()) return 1;
									if(get.attitude(player,target)<0&&!target.isTurnedOver()) return -1;
								};
							},
						},
					},
				},
				"yys_冰甲":{
					init:function (player){
						player.storage.yys_冰甲=[];
					},
					marktext:"冰",
					intro:{
						content:'cards',
					},
					mark:true,
					group:["yys_冰甲_1","yys_冰甲_2"],
					subSkill:{
						"1":{
							trigger:{
								player:"phaseEnd",
							},
							filter:function (event,player){
								return player.countCards('h')>0;
							},
							direct:true,
							content:function (){
								'step 0'
								player.chooseCard('h',[1,game.countPlayer(function(current){return current.isTurnedOver()})+1],get.prompt('yys_冰甲')).set('ai',function(card){
									return 5-get.value(card);
								});
								'step 1'
								if(result.bool){
									var cards=result.cards;
									player.$give(cards,player,false);
									player.lose(cards,ui.special);
									for(var i=0;i<cards.length;i++){
										player.storage.yys_冰甲.push(cards[i]);
										player.syncStorage('yys_冰甲');
									};
									game.log(player,'将',cards,'置于其武将牌上');
									game.delay(0.5);
								};
							},
						},
						"2":{
							trigger:{
								player:"damageBegin",
							},
							filter:function (event,player){
								return player.storage.yys_冰甲.length>=player.hp;
							},
							content:function (){
								var cards=[];
								for(var i=0;i<player.hp;i++){
									cards.push(player.storage.yys_冰甲[i]);
								};
								player.discard(cards);
								player.$throw(cards,1000);
								game.cardsDiscard(cards);
								for(var i=0;i<cards.length;i++){
									//ui.discardPile.appendChild(cards[i]);
									player.storage.yys_冰甲.remove(cards[i]);
									player.syncStorage('yys_冰甲');
								};
								trigger.num--;
							},
						},
					},
				},
				"yys_夺魂":{
					group:["yys_夺魂_1","yys_夺魂_2"],
					subSkill:{
						"1":{
							trigger:{
								global:"dieBefore",
							},
							priority:-Infinity,
							filter:function(event,player){
								return event.player!=player&&event.player.storage.yys_夺魂==undefined;
							},
							forced:true,
							content:function (){
								trigger.cancel();
								trigger.player.storage.yys_夺魂=player;
								trigger.player.storage.yys_夺魂1=trigger.player.identity;
								game.broadcastAll(function(pl,pl1){
									pl.identity=pl1.identity;
									pl.setIdentity('鬼');
									pl.node.identity.dataset.color=pl1.identity;
									pl.node.name.innerHTML='鬼';
									if(pl.name2!=undefined) pl.node.name2.innerHTML='鬼';
								},trigger.player,player);
								trigger.player.clearSkills();
								trigger.player.discard(trigger.player.get('hej'));
								trigger.player.recover(trigger.player.maxHp-trigger.player.hp);
								game.log(trigger.player,'变成了鬼');
								setInterval(function(){
									if(game.countPlayer(function(current){return get.attitude(player,current)<0})==0){
										for(var i=0;i<game.players.length;i++){
											var pl=game.players[i];
											if(pl.storage.yys_夺魂!=undefined) pl.die();
										};
									};
								},500);
							},
						},
						"2":{
							trigger:{
								player:'dieAfter'
							},
							forced:true,
							popup:false,
							filter:function(event,player){
								return game.countPlayer(function(current){return current.storage.yys_夺魂==player})>0;
							},
							content:function(){
								for(var i=0;i<game.players.length;i++){
									var pl=game.players[i];
									if(pl.storage.yys_夺魂==player) pl.die();
								};
							},
						},
					},
					global:['yys_夺魂1','yys_夺魂2'],
				},
				"yys_夺魂1":{
					trigger:{
						player:'phaseDrawBegin'
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return player.storage.yys_夺魂!=undefined;
					},
					content:function(){
						trigger.cancel();
						player.line(player.storage.yys_夺魂);
						player.logSkill('yys_夺魂');
						player.storage.yys_夺魂.draw();
					},
				},
				"yys_夺魂2":{
					trigger:{
						player:'dieBefore'
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return player.storage.yys_夺魂1!=undefined;
					},
					content:function(){
						game.broadcastAll(function(pl){
							pl.identity=pl.storage.yys_夺魂1;
							pl.setIdentity(pl.storage.yys_夺魂1);
							pl.node.identity.dataset.color=pl.storage.yys_夺魂1;
						},player);
					},
				},
				"yys_怨厌":{
					enable:"phaseUse",
					usable:1,
					filterTarget:function (card,player,target){
						return player!=target;
					},
					content:function(){
						'step 0'
						player.chooseTarget('请选择流失体力的目标',1,function(card,player,target){return player==target||target.storage.yys_夺魂!=undefined}).ai=function(target){
							if(game.countPlayer(function(current){return current.storage.yys_夺魂==player})>0&&target!=player) return 1;
							if(game.countPlayer(function(current){return current.storage.yys_夺魂==player})==0&&target==player) return 1;
						};
						'step 1'
						if(result.bool){
							player.line(result.targets[0]);
							result.targets[0].loseHp();
							//game.delay(1);
							//player.line(target);
							target.damage();
							target.addTempSkill('fengyin',{player:'phaseEnd'});
						};
					},
					ai:{
						order:1,
						result:{
							target:function(player,target){
								if(player.hp>2) return -1;
							},
						},
					},
				},
				"yys_怒目":{
					group:["yys_怒目_1","yys_怒目_2"],
					subSkill:{
						"1":{
							trigger:{
								player:"useCardBefore",
							},
							forced:true,
							filter:function(event,player){
								return event.card&&event.card.name=='sha'&&event.card.nature==undefined;
							},
							content:function (){
								if(get.color(trigger.card)=='red'){
									trigger.card.nature='fire';
								}else{
									trigger.card.nature='thunder';
								};
							},
						},
						"2":{
							trigger:{
								source:"damageEnd",
							},
							forced:true,
							filter:function(event,player){
								return event.nature!=undefined&&event.player.countCards('he')>0;
							},
							content:function (){
								trigger.player.chooseToDiscard(1,'he',true);
							},
						},
					},
				},
				"yys_神罪":{
					init:function (player){
						player.storage.yys_神罪=false;
					},
					intro:{
						content:"limited",
					},
					mark:true,
					unique:true,
					enable:"phaseUse",
					usable:1,
					filterTarget:true,
					selectTarget:-1,
					filter:function (event,player){
						return !player.storage.yys_神罪;
					},
					content:function (){
						'step 0'
						if(target==player){
							player.awakenSkill('yys_神罪');
							player.storage.yys_神罪=true;
							var card=get.cards(1)[0];
							player.showCards(card);
							player.storage.yys_神罪1=get.color(card);
							game.cardsDiscard(card);
							//ui.discardPile.appendChild(card);
						};
						'step 1'
						if(target!=player){
							target.chooseCard(1,'h',function(card){return get.color(card)!=player.storage.yys_神罪1}).set('ai',function(card){
								return 1;
							});
						}else{
							event.finish();
						};
						'step 2'
						if(result.bool){
							player.line(target);
							target.discard(result.cards[0]);
							player.storage.yys_神罪1=get.color(result.cards[0]);
						}else{
							player.line(target);
							target.damage();
						};
					},
					ai:{
						order:1,
						result:{
							player:function (player){
								return 1;
							},
						},
					},
				},
				"yys_斩风":{
					trigger:{
						player:"shaBefore",
					},
					filter:function(event,player){
						return _status.currentPhase==player&&player.countCards('h')>0;
					},
					direct:true,
					content:function (){
						'step 0'
						player.chooseCard(get.prompt('yys_斩风'),1,'h').set('ai',function(card){
							if(get.attitude(player,trigger.target)<0&&player.countCards('h')>=2) return 5-get.value(card);
						});
						'step 1'
						if(result.bool){
							player.logSkill('yys_斩风');
							player.discard(result.cards);
							player.addTempSkill('yys_斩风1',{player:'useCardAfter'});
							player.addTempSkill('yys_斩风2',{player:'useCardAfter'});
						};
					},
				},
				"yys_斩风1":{
					trigger:{
						player:'shaBegin'
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return !event.directHit;
					},
					priority:-1,
					content:function(){
						if(typeof trigger.shanRequired=='number'){
							trigger.shanRequired++;
						}else{
							trigger.shanRequired=2;
						};
					},
				},
				"yys_斩风2":{
					trigger:{
						source:'damageBegin'
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return event.card&&event.card.name=='sha';
					},
					content:function(){
						trigger.num++;
					},
				},
				"yys_撕裂2":{
					trigger:{
						player:'phaseBefore'
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return player.hasSkill('yys_撕裂');
					},
					content:function(){
						player.storage.yys_撕裂=0;
						player.syncStorage('yys_撕裂');
					},
				},
				"yys_撕裂1":{
					trigger:{
						source:'damageAfter'
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return _status.currentPhase==player&&player.hasSkill('yys_撕裂');
					},
					content:function(){
						player.storage.yys_撕裂+=trigger.num;
						player.syncStorage('yys_撕裂');
					},
				},
				"yys_撕裂":{
					global:['yys_撕裂1','yys_撕裂2'],
					init:function (player){
						player.storage.yys_撕裂=0;
					},
					marktext:"怨",
					intro:{
						content:function(storage){
							return '回合内造成了'+storage+'点伤害';
						},
					},
					mark:true,
					trigger:{
						player:"phaseEnd",
					},
					filter:function(event,player){
						return player.storage.yys_撕裂>=2;
					},
					direct:true,
					content:function (){
						'step 0'
						player.chooseTarget(get.prompt('yys_撕裂')).ai=function(target){
							return -get.attitude(player,target);
						};
						'step 1'
						if(result.bool){
							player.logSkill('yys_撕裂');
							target=result.targets[0];
							player.useCard({name:'sha'},target);
						};
					},
				},
				"yys_风破":{
					init:function (player){
						player.storage.yys_风破=[];
					},
					marktext:"破",
					intro:{
						content:'cards',
					},
					mark:true,
					group:["yys_风破_1","yys_风破_2"],
					subSkill:{
						"1":{
							trigger:{
								source:"damageAfter",
							},
							filter:function(event,player){
								return event.card&&event.card.name=='sha';
							},
							content:function (){
								'step 0'
								player.gain(trigger.card,'gain2');
								'step 1'
								player.lose(trigger.card);
								player.storage.yys_风破.push(trigger.card);
								player.markSkill('yys_风破');
								player.syncStorage('yys_风破');
								game.log(player,'将',trigger.card,'置于其武将牌上');
							},
						},
						"2":{
							trigger:{
								global:"damageBegin",
							},
							filter:function(event,player){
								return event.card&&event.card.name=='sha'&&player.storage.yys_风破.length>0;
							},
							check:function(event,player){
								return get.attitude(player,event.player)>0;
							},
							content:function (){
								player.line(trigger.player);
								var card=player.storage.yys_风破[0];
								if(get.itemtype(card)!='card') card=game.createCard({name:card});
								player.discard(card);
								game.cardsDiscard(card);
								//ui.discardPile.appendChild(card);
								player.storage.yys_风破.remove(player.storage.yys_风破[0]);
								player.markSkill('yys_风破');
								player.syncStorage('yys_风破');
								trigger.num--;
							},
						},
					},
				},
				"yys_风佑":{
					marktext:"佑",
					intro:{
						content:'cards',
					},
					trigger:{
						player:["useCardAfter","respondAfter"],
					},
					filter:function(event,player){
						return event.card&&event.card.name=='shan';
					},
					direct:true,
					content:function (){
						'step 0'
						player.chooseTarget(get.prompt('yys_风佑')).ai=function(target){
							return get.attitude(player,target);
						};
						'step 1'
						if(result.bool){
							player.logSkill('yys_风佑');
							var target=result.targets[0];
							player.line(target);
							target.storage.yys_风佑=[];
							target.markSkill('yys_风佑');
							player.$give(trigger.card,target,false);
							target.storage.yys_风佑.push(trigger.card);
							target.syncStorage('yys_风佑');
							game.log(player,'将',trigger.card,'置于',target,'的武将牌上');
						};
					},
					global:'yys_风佑1',
				},
				"yys_风佑1":{
					trigger:{
						player:"damageBegin",
					},
					filter:function(event,player){
						return player.storage.yys_风佑!=undefined&&player.storage.yys_风佑.length>0;
					},
					/*check:function(event,player){
						return event.num>0;
					},*/
					priority:1,
					content:function (){
						var card=player.storage.yys_风佑[0];
						player.discard(card);
						game.cardsDiscard(card);
						//ui.discardPile.appendChild(card);
						player.storage.yys_风佑.remove(card);
						player.syncStorage('yys_风佑');
						if(player.storage.yys_风佑.length==0){
							delete player.storage.yys_风佑;
							player.unmarkSkill('yys_风佑');
						};
						trigger.cancel();
					},
				},
				"yys_血葬":{
					trigger:{
						player:"damageAfter",
					},
					content:function (){
						'step 0'
						cards=get.cards(2);
						player.gain(cards,'gain2');
						player.chooseCard('请选择置于武将牌上的牌',1,'h',true).set('ai',function(card){
							return 6-get.value(card);
						});
						'step 1'
						if(result.bool){
							var card=result.cards[0];
							player.$give(card,player,false);
							player.lose(card,ui.special);
							player.storage.yys_花海.push(card);
							player.syncStorage('yys_花海');
							game.log(player,'将',card,'置于其武将牌上');
							game.delay(0.5);
						};
					},
				},
				"yys_花海":{
					init:function (player){
						player.storage.yys_花海=[];
					},
					marktext:"花",
					intro:{
						content:'cards',
					},
					mark:true,
					group:["yys_花海_1","yys_花海_2"],
					subSkill:{
						"1":{
							trigger:{
								global:"phaseBefore",
							},
							filter:function (event,player){
								return player.storage.yys_花海1==undefined;
							},
							direct:true,
							content:function (){
								'step 0'
								player.storage.yys_花海1=true;
								player.chooseCard('h',[1,Infinity],get.prompt('yys_花海')).set('ai',function(card){
									return 4-get.value(card);
								});
								'step 1'
								if(result.bool){
									var cards=result.cards;
									player.$give(cards,player,false);
									player.lose(cards,ui.special);
									for(var i=0;i<cards.length;i++){
										player.storage.yys_花海.push(cards[i]);
										player.syncStorage('yys_花海');
									};
									game.log(player,'将',cards,'置于其武将牌上');
									game.delay(0.5);
								};
							},
						},
						"2":{
							trigger:{
								global:"phaseBegin",
							},
							filter:function (event,player){
								return player.storage.yys_花海.length>0&&event.player!=player;
							},
							check:function (event,player){
								return get.attitude(player,event.player)<0&&event.player.countCards('e',{name:'tengjia'})==0;
							},
							content:function (){
								var card=player.storage.yys_花海[0];
								player.discard(card);
								game.cardsDiscard(card);
								//ui.discardPile.appendChild(card);
								player.storage.yys_花海.remove(card);
								player.syncStorage('yys_花海');
								player.addTempSkill('yys_花海1',{player:'useCardAfter'});
								player.useCard({name:'sha'},trigger.player);
							},
						},
					},
				},
				"yys_花海1":{
					trigger:{
						player:"shaBegin",
					},
					forced:true,
					popup:false,
					content:function (){
						trigger.directHit=true;
					},
				},
				"yys_逐流":{
					init:function (player){
						player.storage.yys_逐流=[];
					},
					marktext:"怒",
					intro:{
						content:'cards',
					},
					mark:true,
					group:["yys_逐流_1","yys_逐流_2","yys_逐流_3"],
					subSkill:{
						"1":{
							trigger:{
								player:"phaseDrawEnd",
							},
							forced:true,
							content:function (){
								if(player.storage.yys_逐流==undefined) player.storage.yys_逐流=[];
								var card=get.cards(1)[0];
								player.$give(card,player,false);
								player.storage.yys_逐流.push(card);
								player.markSkill('yys_逐流');
								player.syncStorage('yys_逐流');
								game.log(player,'将',card,'置于其武将牌上');
							},
						},
						"2":{
							trigger:{
								player:"phaseBegin",
							},
							forced:true,
							filter:function (event,player){
								if(player.storage.yys_逐流==undefined) return false;
								return player.storage.yys_逐流.length>0;
							},
							content:function (){
								var card=player.storage.yys_逐流[0];
								player.discard(card);
								game.cardsDiscard(card);
								//ui.discardPile.appendChild(card);
								player.storage.yys_逐流.remove(card);
								player.markSkill('yys_逐流');
								player.syncStorage('yys_逐流');
								player.draw();
							},
						},
						"3":{
							trigger:{
								source:"damageBegin",
								player:"damageBegin",
							},
							forced:true,
							filter:function (event,player){
								if(player.storage.yys_逐流==undefined) return false;
								return player.storage.yys_逐流.length>0;
							},
							content:function (){
								trigger.num++;
							},
						},
					},
				},
				"yys_吞噬":{
					trigger:{
						source:"damageAfter",
					},
					filter:function (event,player){
						if(player.storage.yys_逐流==undefined) return false;
						return event.card&&event.card.name=='sha'&&player.storage.yys_逐流.length>0;
					},
					check:function (event,player){
						return get.attitude(player,event.player)<0;
					},
					content:function (){
						var card=player.storage.yys_逐流[0];
						player.discard(card);
						game.cardsDiscard(card);
						//ui.discardPile.appendChild(card);
						player.storage.yys_逐流.remove(card);
						player.syncStorage('yys_逐流');
						player.addTempSkill('yys_吞噬1',{player:'useCardAfter'});
						player.useCard(trigger.card,trigger.player);
					},
				},
				"yys_吞噬1":{
					trigger:{
						source:"damageAfter",
					},
					forced:true,
					popup:false,
					filter:function (event,player){
						return event.player.countCards('e')>0;
					},
					content:function (){
						player.discardPlayerCard(trigger.player,1,'e');
					},
				},
				"yys_雪走":{
					marktext:"冻",
					intro:{
						content:function (storage){
							return '冰冻'
						},
					},
					trigger:{
						source:"damageAfter",
					},
					filter:function(event,player){
						return event.player.isFrozen!=true&&event.player.isAlive();
					},
					check:function(event,player){
						return get.attitude(player,event.player)<0;
					},
					content:function(){
						trigger.player.link(false);
						trigger.player.turnOver(false);
						trigger.player.isFrozen=true;
						trigger.player.markSkill('yys_雪走');
						/*game.broadcastAll(function(pl){
							if(pl!=game.me){
								pl.style.transform+=' rotate(180deg)';
							}else{
								pl.node.avatar.style.transform+=' rotate(180deg)';
							};
						},trigger.player);*/
						game.log(trigger.player,'冰冻了');
					},
					global:['yys_雪走1','yys_雪走2'],
				},
				"yys_雪走1":{
					trigger:{
						player:"linkBefore",
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return player.isFrozen==true;
					},
					content:function(){
						trigger.cancel();
					},
				},
				"yys_雪走2":{
					trigger:{
						player:"phaseBefore",
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return player.isFrozen==true;
					},
					content:function(){
						'step 0'
						player.chooseControl(['摸牌阶段','出牌阶段','取消']).set('ai',function(){
							return '出牌阶段';
						});
						'step 1'
						if(result.control=='摸牌阶段'){
							player.skip('phaseDraw');
							player.popup('跳过摸牌阶段');
						}else if(result.control=='出牌阶段'){
							player.skip('phaseUse');
							player.popup('跳过出牌阶段');
						}else{
							player.loseHp();
						};
						delete player.isFrozen;
						player.unmarkSkill('yys_雪走');
						/*game.broadcastAll(function(pl){
							if(pl!=game.me){
								pl.style.transform+=' rotate(-180deg)';
							}else{
								pl.node.avatar.style.transform+=' rotate(-180deg)';
							};
						},player);*/
						game.log(player,'解除了冰冻');
					},
				},
				"yys_碎冰":{
					trigger:{
						source:"damageBegin",
					},
					priority:-Infinity,
					filter:function(event,player){
						return event.player.isFrozen==true||event.player.isTurnedOver()||event.player.isLinked();
					},
					check:function(event,player){
						return get.attitude(player,event.player)<0;
					},
					content:function(){
						trigger.num=trigger.num*2;
					},
				},
				"yys_生息":{
					group:["yys_生息_1","yys_生息_2"],
					subSkill:{
						"1":{
							trigger:{
								player:"phaseEnd",
								global:"dieAfter",
							},
							content:function(){
								player.useCard(game.createCard({name:'lebu'}),player);
							},
						},
						"2":{
							trigger:{
								player:"phaseJudgeBegin",
							},
							forced:true,
							filter:function(event,player){
								return player.countCards('j')>0;
							},
							content:function(){
								var num=player.countCards('j');
								player.discard(player.get('j'));
								player.recover(num);
							},
						},
					},
				},
				"yys_冲撞":{
					trigger:{
						player:"phaseBegin",
					},
					filter:function(event,player){
						return player.countCards('j')>0;
					},
					direct:true,
					content:function(){
						'step 0'
						player.chooseCardButton(get.prompt('yys_冲撞'),1,player.get('j')).set('ai',function(card){
							if(player.maxHp==player.hp) return 1;
							return ;
						});
						'step 1'
						if(result.bool){
							player.discard(result.links[0]);
							player.chooseTarget(function(card,player,target){
								return player!=target;
							},'请选择一名其他角色').ai=function(target){
								if(target.isTurnedOver()) return get.attitude(player,target);
								if(!target.isTurnedOver()) return -get.attitude(player,target);
							};
						}else{
							event.finish();
						};
						'step 2'
						if(result.bool){
							var target=result.targets[0];
							player.line(target);
							player.logSkill('yys_冲撞');
							if(target.countCards('h')>0){
								player.discardPlayerCard(target,1,'he');
							}else{
								target.draw(target.maxHp-target.hp);
								target.turnOver();
							};
						};
					},
				},
				"yys_狩界":{
					mod:{
						maxHandcard:function (player,num){
							return num+player.storage.yys_狩界.length;
						},
						globalFrom:function(from,to,distance){
							return distance-from.storage.yys_狩界.length;
						},
					},
					init:function (player){
						player.storage.yys_狩界=[];
					},
					marktext:"符",
					intro:{
						content:'cards',
					},
					mark:true,
					trigger:{
						player:'phaseEnd'
					},
					check:function(event,player){
						return player.storage.yys_狩界.length<8;
					},
					content:function(){
						"step 0"
						event.cards=get.cards(3)
						player.chooseCardButton([1,3],event.cards).set('ai',function(button){
							return 100-get.number(button.link);
						}).filterButton=function(button){
							var num=get.number(button.link);
							for(var i=0;i<player.storage.yys_狩界.length;i++){
								if(num==get.number(player.storage.yys_狩界[i])) return false;
							};
							for(var i=0;i<ui.selected.buttons.length;i++){
								num+=get.number(ui.selected.buttons[i].link);
							};
							if(num>=13) return false;
							return true;
						};
						"step 1"
						if(result.bool){
							for(var i=0;i<event.cards.length;i++){
								var card=event.cards[i];
								if(result.links.contains(card)){
									event.cards.remove(card);
									i--;
								};
							};
							if(result.links.length>0){
								player.$gain2(result.links);
								for(var i=0;i<result.links.length;i++){
									var card=result.links[i];
									player.storage.yys_狩界.push(card);
								};
								player.syncStorage('yys_狩界');
								game.log(player,'将',result.links,'置于其武将牌上');
							};
						};
						if(event.cards.length>0){
							player.$throw(event.cards,1000);
							game.cardsDiscard(event.cards);
							//ui.discardPile.appendChild(card);
						};
					},
				},
				"yys_一矢":{
					trigger:{
						global:"phaseUseEnd",
					},
					filter:function(event,player){
						return get.distance(player,event.player,'attack')<=1&&player.countCards('h')>0&&player!=event.player&&player.storage.yys_狩界.length>0;
					},
					check:function(event,player){
						return get.attitude(player,event.player)<0&&player.countCards('h')>1&&event.player.countCards('h',{name:'shan'})==0;
					},
					content:function(){
						'step 0'
						trigger.player.line(player);
						trigger.player.discardPlayerCard(player,'h');
						player.chooseCardButton(1,player.storage.yys_狩界).set('ai',function(button){
							return 1;
						});
						'step 1'
						if(result.bool){
							player.$throw(result.links[0],1000);
							game.cardsDiscard(result.links[0]);
							//ui.discardPile.appendChild(result.links[0]);
							player.storage.yys_狩界.remove(result.links[0]);
							player.syncStorage('yys_狩界');
							trigger.player.addTempSkill('fengyin',{player:'phaseUseBegin'});
							player.useCard({name:'sha'},trigger.player);
						};
					},
				},
				"yys_星轨":{
					trigger:{
						global:'judgeBefore'
					},
					direct:true,
					content:function(){
						"step 0"
						event.cards=get.cards(2);
						player.chooseCardButton(true,event.cards,'选择一张牌作为'+get.translation(trigger.player)+'的'+trigger.judgestr+'判定结果').ai=function(button){
							if(get.attitude(player,trigger.player)>0) return 1+trigger.judge(button.link);
							if(get.attitude(player,trigger.player)<0) return 1-trigger.judge(button.link);
							return 0;
						};
						"step 1"
						if(!result.bool){
							event.finish();
							return;
						};
						player.logSkill('yys_星轨',trigger.player);
						var card=result.links[0];
						event.cards.remove(card);
						var judgestr=get.translation(trigger.player)+'的'+trigger.judgestr+'判定';
						event.videoId=lib.status.videoId++;
						event.dialog=ui.create.dialog(judgestr);
						event.dialog.classList.add('center');
						event.dialog.videoId=event.videoId;
						game.addVideo('judge1',player,[get.cardInfo(card),judgestr,event.videoId]);
						for(var i=0;i<event.cards.length;i++) event.cards[i].discard();
						var node;
						if(game.chess){
							node=card.copy('thrown','center',ui.arena).animate('start');
						}else{
							node=player.$throwordered(card.copy(),true);
						};
						node.classList.add('thrownhighlight');
						ui.arena.classList.add('thrownhighlight');
						if(card){
							trigger.cancel();
							trigger.result={
								card:card,
								judge:trigger.judge(card),
								node:node,
								number:get.number(card),
								suit:get.suit(card),
								color:get.color(card),
							};
							if(trigger.result.judge>0){
								trigger.result.bool=true;
								trigger.player.popup('洗具');
							};
							if(trigger.result.judge<0){
								trigger.result.bool=false;
								trigger.player.popup('杯具');
							};
							game.log(trigger.player,'的判定结果为',card);
							trigger.direct=true;
							trigger.position.appendChild(card);
							game.delay(0.5);
						}else{
							event.finish();
						};
						"step 2"
						ui.arena.classList.remove('thrownhighlight');
						event.dialog.close();
						game.addVideo('judge2',null,event.videoId);
						ui.clear();
						var card=trigger.result.card;
						trigger.position.appendChild(card);
						trigger.result.node.delete();
						game.delay();
					},
					ai:{
						tag:{
							rejudge:1,
						},
					},
				},
				"yys_天罚":{
					trigger:{
						global:"damageAfter",
					},
					filter:function(event,player){
						return get.distance(player,event.player,'attack')<=1&&player.countCards('h')>0&&player!=event.player&&event.player.isAlive()&&event.yys_天罚!=true;
					},
					direct:true,
					content:function(){
						'step 0'
						player.chooseCard(get.prompt('yys_天罚'),1,'h').set('ai',function(card){
							if(get.attitude(player,trigger.player)<0) return 5-get.value(card);
							return false;
						});
						'step 1'
						if(result.bool){
							player.discard(result.cards);
							player.line(trigger.player);
							player.logSkill('yys_天罚');
							trigger.player.judge(function(card){
								if(get.color(card)=='black') return -1;
								return 1;
							});
						}else{
							event.finish();
						};
						'step 2'
						if(get.color(result.card)=='black') trigger.player.damage('thunder').yys_天罚=true;
					},
				},
				"yys_归鸟":{
					mod:{
						targetInRange:function(card,player,target,now){
							if(card.name=='sha') return true;
						},
					},
					trigger:{
						source:"damageAfter",
					},
					filter:function (event,player){
						return event.card&&event.card.name=='sha'&&event.num==1;
					},
					forced:true,
					content:function(){
						'step 0'
						player.chooseControl('令一名角色恢复一点体力','令一名角色摸一张牌').set('ai',function(event){
							if(game.countPlayer(function(current){return get.attitude(player,current)>0&&current.maxHp>current.hp})>0) return '令一名角色恢复一点体力';
							return '令一名角色摸一张牌';
						});
						'step 1'
						event.control=result.control;
						player.chooseTarget('请选择一名角色',true).ai=function(target){
							return get.attitude(player,target);
						};
						'step 2'
						if(result.bool){
							target=result.targets[0];
							player.line(target);
							if(event.control=='令一名角色恢复一点体力'){
								target.recover();
							}else{
								target.draw();
							};
						};
					},
				},
				"yys_画境":{
					group:["yys_画境_1","yys_画境_2"],
					subSkill:{
						"1":{
							trigger:{
								global:"phaseAfter",
							},
							filter:function (event,player){
								return event.player!=player&&!player.isTurnedOver();
							},
							/*check:function (event,player){
								return false;
							},*/
							content:function (){
								player.insertPhase();
								player.addTempSkill('yys_画境1',{player:'phaseAfter'});
							},
						},
						"2":{
							trigger:{
								player:"damageBegin",
							},
							prompt:'是否发动【画境】来防止多余的伤害？',
							filter:function (event,player){
								if(event.num<=1) return false;
								if(!player.isTurnedOver()) return false;
								return true;
							},
							priority:-10,
							content:function (){
								trigger.num=1;
							},
						},
					},
				},
				"yys_画境1":{
					trigger:{
						player:"phaseEnd",
					},
					forced:true,
					popup:false,
					content:function(){
						player.turnOver();
					},
				},
				"yys_幽光":{
					trigger:{
						player:"phaseEnd",
					},
					filter:function (event,player){
						return game.countPlayer(function(current){return current!=player&&current.countCards('h')>0})>0&&player.maxHp-player.hp>=1;
					},
					direct:true,
					content:function(){
						"step 0"
						player.chooseTarget(get.prompt('yys_幽光'),[1,player.maxHp-player.hp],function(card,player,target){
							return target!=player&&target.countCards('h')>0;
						}).ai=function(target){
							return -get.attitude(player,target)-1;
						};
						"step 1"
						if(result.bool){
							for(var i=0;i<result.targets.length;i++){
								var pl=result.targets[i];
								var card=pl.get('h').randomGet();
								player.showCards(card,get.translation(pl.name)+'的一张牌');
								if(get.color(card)=='red'){
									pl.$give(card,player);
									player.gain(card,pl);
								}else{
									player.discardPlayerCard(pl,'h',1);
								};
							};
						};
					},
				},
				"yys_明灯":{
					trigger:{
						player:"discardPlayerCardEnd",
					},
					filter:function (event,player){
						return event.target!=undefined;
					},
					check:function(event,player){
						return event.target!=undefined&&get.attitude(player,event.target)<0;
					},
					content:function(){
						'step 0'
						player.chooseControl('火杀','火攻').set('ai',function(event){
							return '火杀';
						});
						'step 1'
						if(result.control=='火杀'){
							player.useCard({name:'sha',nature:'fire'},trigger.target);
						}else{
							player.useCard({name:'huogong'},trigger.target);
						};
					},
				},
				'yys_连斩':{
					trigger:{
						global:"dieAfter",
					},
					filter:function (event,player){
						return event.source==player;
					},
					forced:true,
					content:function (){
						player.storage.yys_杀戮=false;
						player.markSkill('yys_杀戮');
						player.enableSkill('yys_杀戮_awake');
						player.syncStorage('yys_杀戮');
						player.awakenedSkills.remove('yys_杀戮');
						game.log(player,'重置了技能【杀戮】');
					},
				},
				"yys_杀戮":{
					init:function (player){
						player.storage.yys_杀戮=false;
					},
					intro:{
						content:"limited",
					},
					mark:true,
					unique:true,
					enable:"phaseUse",
					usable:1,
					filterCard:true,
					selectCard:[1,Infinity],
					check:function(card){
						var suit=get.suit(card);
						for(var i=0;i<ui.selected.cards.length;i++){
							if(get.suit(ui.selected.cards[i])==suit) return -1;
						};
						return 1;
					},
					filterTarget:function (card,player,target){
						return player!=target&&get.distance(player,target,'attack')<=1;
					},
					filter:function (event,player){
						return !player.storage.yys_杀戮;
					},
					content:function (){
						player.awakenSkill('yys_杀戮');
						player.storage.yys_杀戮=true;
						var list=[];
						for(var i=0;i<cards.length;i++){
							list.push(get.suit(cards[i]));
						};
						var cards1=get.cards(3);
						player.showCards(cards1);
						for(var i=0;i<cards1.length;i++){
							if(list.contains(get.suit(cards1[i]))) target.damage();
							game.cardsDiscard(cards1[i]);
							//ui.discardPile.appendChild(cards1[i]);
						};
					},
					ai:{
						order:13,
						result:{
							target:function (player,target){
								if(player.countCards('h')>2) return -1;
							},
						},
					},
				},
				'yys_灵击':{
					trigger:{
						global:"damageAfter",
					},
					filter:function (event,player){
						return _status.currentPhase==player;
					},
					forced:true,
					content:function (){
						player.draw();
					},
				},
				"yys_狐火":{
					enable:"phaseUse",
					usable:1,
					filterCard:true,
					position:'h',
					check:function(card){
						return 6-get.value(card);
					},
					filterTarget:function (card,player,target){
						return player!=target;
					},
					content:function(){
						player.addSkill('yys_狐火1');
						player.useCard({name:'juedou'},target);
					},
					ai:{
						order:3,
						result:{
							target:function(player,target){
								if(player.hp>1&&player.countCards('h',{name:'sha'})>=target.countCards('h',{name:'sha'})) return -1;
							},
						},
					},
				},
				'yys_狐火1':{
					trigger:{
						player:"juedouAfter",
					},
					forced:true,
					popup:false,
					content:function (){
						if(trigger.turn==player) player.draw();
						player.removeSkill('yys_狐火1');
					},
				},
				"yys_堕天":{
					enable:"phaseUse",
					usable:1,
					content:function(){
						player.loseHp();
						var players=[];
						for(var i=0;i<game.players.length;i++){
							if(game.players[i]!=player) players.push(game.players[i]);
						};
						player.useCard({name:'nanman'},players);
					},
					ai:{
						order:11,
						result:{
							player:function(player){
								if(player.hp>2&&game.countPlayer(function(current){return get.attitude(player,current)>=0&&current!=player&&current.countCards('h',{name:'sha'})==0})==0&&game.countPlayer(function(current){return get.attitude(player,current)<0&&current.countCards('h',{name:'sha'})==0})>0) return 1;
							},
						},
					},
				},
				'yys_迁怒':{
					trigger:{
						source:"damageAfter",
					},
					filter:function (event,player){
						return _status.currentPhase==player;
					},
					round:1,
					check:function (event,player){
						return game.countPlayer(function(current){
							return get.attitude(player,current)<0&&current!=event.player;
						})>0;
					},
					content:function (){
						'step 0'
						player.chooseTarget('请选择[迁怒]的目标',function(card,player,target){
							return target!=player&&target!=trigger.player;
						}).ai=function(target){
							return -get.attitude(player,target);
						};
						'step 1'
						if(result.bool){
							event.target=result.targets[0];
							player.line(event.target);
							event.target.chooseToRespond({name:'shan'});
						}else{
							event.finish();
						};
						'step 2'
						if(result.bool==false) event.target.damage();
					},
				},
				'yys_鬼手':{
					trigger:{
						global:"phaseEnd",
					},
					round:1,
					filter:function (event,player,card){
						return _status.currentPhase!=player&&player.countCards('h',{name:'sha'})>0&&get.distance(player,event.player,'attack')<=1;
					},
					check:function (event,player){
						return get.attitude(player,event.player)<0&&player.canUse('sha',event.player);
					},
					content:function (){
						player.addTempSkill('yys_鬼手1',{player:'chooseToUseAfter'});
						player.chooseToUse({name:'sha'},trigger.player);
					},
				},
				'yys_鬼手1':{
					trigger:{
						player:'shaBegin'
					},
					forced:true,
					popup:false,
					content:function(){
						trigger.card.nature='fire';
					},
				},
				'yys_蓬莱':{
					init:function (player){
						player.storage.yys_蓬莱=[];
						player.storage.yys_蓬莱1=[];
					},
					marktext:"竹",
					intro:{
						content:function(storage,player){
							var cards=[];
							var cards1=[];
							for(var i=0;i<player.storage.yys_蓬莱.length;i++){
								if(!player.storage.yys_蓬莱1.contains(player.storage.yys_蓬莱[i])){
									cards.push(player.storage.yys_蓬莱[i]);
								}else{
									cards1.push(player.storage.yys_蓬莱[i]);
								};
							};
							var str='';
							for(var i=0;i<player.storage.yys_蓬莱1.length;i++){
								var card=player.storage.yys_蓬莱1[i];
								str+=get.translation(card.name)+'【'+get.translation(get.suit(card))+(get.number(card))+'】';
								if(i<player.storage.yys_蓬莱1.length-1) str+='、';
							};
							if(player.storage.yys_蓬莱1.length==0){
								str='无';
							}else{
								str='<br>'+str;
							};
							return '未翻开的牌有'+cards.length+'张<br>已翻开的牌：'+str;
						},
					},
					mark:true,
					group:["yys_蓬莱_1","yys_蓬莱_2"],
					subSkill:{
						"1":{
							trigger:{
								player:'phaseBegin',
							},
							check:function(event,player){
								return player.storage.yys_蓬莱.length-player.storage.yys_蓬莱1.length<=10;
							},
							content:function(){
								'step 0'
								var cards=get.cards(player.hp);
								for(var i=0;i<cards.length;i++){
									player.gain(cards[i]);
									player.$draw();
									/*game.broadcastAll(function(card){
										card.node.image.hide();
										card.node.info.hide();
										card.node.name.hide();
										card.node.name2.hide();
										card.node.background.hide();
										card.node.intro.hide();
										card.node.range.hide();
									},cards[i]);*/
									player.storage.yys_蓬莱.push(cards[i]);
									player.syncStorage('yys_蓬莱');
								};
								event.cards=cards;
								'step 1'
								player.lose(event.cards,ui.special);
								game.log(player,'将',event.cards.length,'张牌置于其武将牌上');
							},
						},
						"2":{
							trigger:{
								global:'phaseBegin',
							},
							priority:-1,
							filter:function(event,player){
								return player.storage.yys_蓬莱.length-player.storage.yys_蓬莱1.length>0;
							},
							check:function(event,player){
								return get.attitude(player,event.player)>=0;
							},
							prompt:'是否翻开一张"竹"？',
							content:function(){
								var cards=[];
								for(var i=0;i<player.storage.yys_蓬莱.length;i++){
									if(!player.storage.yys_蓬莱1.contains(player.storage.yys_蓬莱[i])) cards.push(player.storage.yys_蓬莱[i]);
								};
								var card=cards.randomGet();
								/*game.broadcastAll(function(card){
									card.node.image.show();
									card.node.info.show();
									card.node.name.show();
									card.node.name2.show();
									card.node.background.show();
									card.node.intro.show();
									card.node.range.show();
								},card);*/
								player.storage.yys_蓬莱1.push(card);
								player.syncStorage('yys_蓬莱');
								game.log(player,'翻开了',card);
								if(get.suit(card)!='spade'){
									if(player!=trigger.player){
										player.$give(card,trigger.player);
										trigger.player.gain(card);
									}else{
										player.gain(card,'gain2');
									};
									player.storage.yys_蓬莱.remove(card);
									player.storage.yys_蓬莱1.remove(card);
									player.syncStorage('yys_蓬莱');
								};
							},
						},
					},
				},
				'yys_玉裘':{
					enable:'chooseToUse',
					filterCard:true,
					viewAs:{name:'wuxie'},
					viewAsFilter:function(player){
						return player.storage.yys_蓬莱1.length>0;
					},
					position:'he',
					prompt:'将一张牌当无懈可击使用',
					check:function(card){return 7-get.value(card)},
					onuse:function(result,player){
						player.useSkill('yys_玉裘1');
					},
				},
				'yys_玉裘1':{
					content:function(){
						'step 0'
						player.chooseCardButton(player.storage.yys_蓬莱1,1,true);
						'step 1'
						if(result.bool){
							var card=result.links[0];
							player.gain(card,'gain2');
							player.storage.yys_蓬莱.remove(card);
							player.storage.yys_蓬莱1.remove(card);
							player.syncStorage('yys_蓬莱');
						};
						player.draw();
					},
				},
				'yys_醉怒':{
					mod:{
						cardUsable:function (card,player,num){
							if(card.name=='sha') return num+player.storage.yys_醉怒.length;
						},
					},
					init:function (player){
						player.storage.yys_醉怒=[];
					},
					marktext:"狂",
					intro:{
						content:'cards',
					},
					mark:true,
					group:["yys_醉怒_1","yys_醉怒_2"],
					subSkill:{
						"1":{
							trigger:{
								player:['phaseAfter','damageAfter'],
							},
							forced:true,
							filter:function(event,player){
								return player.storage.yys_醉怒.length<4;
							},
							content:function(){
								'step 0'
								player.judge(function(card){
									if(get.color(card)=='black') return 1;
									return 0;
								});
								'step 1'
								if(get.color(result.card)=='black'){
									event.card=result.card;
									player.gain(event.card,'gain2');
								}else{
									event.finish();
								};
								'step 2'
								if(event.card){
									player.lose(event.card,ui.special);
									player.storage.yys_醉怒.push(event.card);
									player.syncStorage('yys_醉怒');
									game.log(player,'将',event.card,'置于其武将牌上');
								};
							},
						},
						"2":{
							trigger:{
								player:'useCardAfter',
							},
							forced:true,
							filter:function(event,player){
								return event.card!=undefined&&event.card.name=='jiu'&&player.storage.yys_醉怒.length<4;
							},
							content:function(){
								'step 0'
								player.judge(function(card){
									if(get.color(card)=='black') return 1;
									return 0;
								});
								'step 1'
								if(get.color(result.card)=='black'){
									event.card=result.card;
									player.gain(event.card,'gain2');
								}else{
									event.finish();
								};
								'step 2'
								if(event.card){
									player.lose(event.card,ui.special);
									player.storage.yys_醉怒.push(event.card);
									player.syncStorage('yys_醉怒');
									game.log(player,'将',event.card,'置于其武将牌上');
								};
							},
						},
					},
				},
				"yys_狂啸":{
					enable:"phaseUse",
					filter:function(event,player){
						return player.storage.yys_醉怒!=undefined&&player.storage.yys_醉怒.length>0;
					},
					content:function(){
						'step 0'
						var list=['伤害增加'];
						if(player.maxHp>player.hp&&player.hp<2) list.push('恢复体力');
						player.chooseControl(list).set('ai',function(){
							if(list.contains('恢复体力')) return '恢复体力';
							return '伤害增加';
						});
						'step 1'
						var num=player.storage.yys_醉怒.length;
						player.$throw(player.storage.yys_醉怒,1000);
						for(var i=0;i<num;i++){
							game.cardsDiscard(player.storage.yys_醉怒[i]);
							//ui.discardPile.appendChild(player.storage.yys_醉怒[i]);
						};
						player.storage.yys_醉怒=[];
						player.syncStorage('yys_醉怒');
						if(result.control=='恢复体力') player.recover(num);
						if(result.control=='伤害增加'){
							player.storage.yys_狂啸=Math.ceil(num/2);
							player.addTempSkill('yys_狂啸1',{player:'phaseEnd'});
						};
					},
					ai:{
						order:13,
						result:{
							player:function(player){
								if(player.countCards('h',{name:'sha'})>0||player.maxHp>player.hp) return 1;
							},
						},
					},
				},
				'yys_狂啸1':{
					trigger:{
						source:'damageBegin',
					},
					forced:true,
					filter:function(event,player){
						return event.card&&event.card.name=='sha'&&player.storage.yys_狂啸>0;
					},
					content:function(){
						trigger.num+=player.storage.yys_狂啸;
						player.storage.yys_狂啸=0;
					},
				},
				'yys_逆羽':{
					trigger:{
						global:'useCardBegin',
					},
					filter:function (event,player){
						return (get.type(event.card)=='trick'||get.type(event.card)=='delay')&&event.targets.contains(player)&&_status.currentPhase!=player;
					},
					check:function(event,player){
						return event.card.name=='wanjian'||event.card.name=='nanman'||event.card.name=='lebu'||event.card.name=='bingliang'||event.card.name=='shunshou'||event.card.name=='guohe'||event.card.name=='juedou';
					},
					prompt:function(event){
						return get.translation(event.player.name)+'对你使用了【'+get.translation(event.card.name)+'】<br>是否发动【逆羽】防止之？'
					},
					content:function(){
						trigger.targets.remove(player);
						player.removeSkill('yys_逆羽');
						player.addSkill('yys_逆羽1');
					},
				},
				'yys_逆羽1':{
					trigger:{
						player:'phaseBegin',
					},
					forced:true,
					popup:false,
					content:function(){
						player.addSkill('yys_逆羽');
						player.removeSkill('yys_逆羽1');
					},
				},
				"yys_风袭":{
					enable:"phaseUse",
					usable:1,
					filterCard:true,
					selectCard:function(){
						var player=_status.event.player;
						var num=player.hp;
						if(num>game.players.length) num=game.players.length-1;
						return [1,num];
					},
					check:function(card){
						return 5-get.value(card);
					},
					filterTarget:function (card,player,target){
						return player!=target;
					},
					selectTarget:function(){
						return [1,ui.selected.cards.length];
					},
					multitarget:true,
					multiline:true,
					content:function(){
						'step 0'
						event.num=0;
						'step 1'
						targets[event.num].judge(function(card){
							if(get.color(card)=='black') return -2;
							return -0.5;
						});
						'step 2'
						if(get.color(result.card)=='black'){
							targets[event.num].damage();
						}else{
							player.discardPlayerCard(targets[event.num],'he',1);
						};
						if(event.num<targets.length-1){
							event.num++;
							event.goto(1);
						};
					},
					ai:{
						order:2,
						result:{
							target:function(player,target){
								if(player.countCards('h')>1&&player.countCards('h')<4) return -1;
							},
						},
					},
				},
				yys无我:{
unique:true,
trigger:{
player:"phaseUseBegin",
},
mark:true,
skillAnimation:true,
animationStr:"无我",
animationColor:"water",
init:function (player){
player.storage.yys无我=false;
},
filter:function(event,player){
if(player.storage.yys无我) return false;
if(player.num('h')<2) return false;
return true;
},
check:function(event,player){
return game.countPlayer(function(current){return get.attitude(player,current)<0&&current.hp>2})>0;
},
content:function(){
"step 0"
player.chooseTarget('选择【无我】的目标',function(card,player,target){
return target!=player;
}).ai=function(target){
return -get.attitude(player,target);
}
"step 1"
if(result.bool){
event.target=result.targets[0];
}
else{
event.finish();
}
"step 2"
if(event.target){
player.line(event.target);
event.target.damage(target.hp-1);
player.chooseToDiscard(2,true,'h');	
player.awakenSkill('yys无我');
player.storage.yys无我=true;		
trigger.untrigger();
trigger.finish();	  		
}		
},
intro:{
content:"limited",
},							
			},	
				yys冥想:{
group:["yys冥想_M","yys冥想_S"],
subSkill:{
M:{		
trigger:{
global:"changeHp",
},
filter:function (event,player){       
return _status.currentPhase==player&&player.storage.yys冥想_M==undefined;
}, 
forced:true,
popup:false,
content:function (){
player.storage.yys冥想_M=1;
},	
},
S:{
trigger:{
player:"phaseEnd",
},
filter:function (event,player){       
return player.storage.yys冥想_M==1;
},
direct:true,
content:function (){
"step 0"
player.chooseTarget('选择【冥想】的目标',function(card,player,target){
return target;
}).ai=function(target){
return get.attitude(player,target);
}
"step 1"
if(result.bool){
event.target=result.targets[0];
}
else{
event.finish();
}
"step 2"
if(event.target){
player.line(event.target);
player.logSkill('yys冥想');
event.target.draw();
delete player.storage.yys冥想_M;	  		
}	
},	
},
},							
				},					
				yys扑朔:{
trigger:{
player:"damageBegin",
},
forced:true,
filter:function (event,player){
return event.source&&event.source.hp==player.num('h');
},
content:function (){
trigger.num-=1;
}
				},										
				yys迷离:{
trigger:{
player:"phaseEnd",
},
check:function (event,player){
return player.hp>2&&game.countPlayer(function(current){return get.attitude(player,current)<0})>0;
},
content:function (){
"step 0"	
player.loseHp();
"step 1"
var list=["选择至多X名角色","选择一名角色"];
player.chooseControl(list)
'step 2'
if (result.control=='选择至多X名角色'){                
player.useSkill('yys迷离1');
}	
if (result.control=='选择一名角色'){                
player.useSkill('yys迷离2');	
}	
}
				},						
				yys迷离1:{
content:function (){
"step 0"
player.chooseTarget('选择【迷离】的目标',function(card,player,target){
return target!=player;
},[1,player.maxHp-player.hp]).ai=function(target){
return -get.attitude(player,target);
}
"step 1"
if(result.bool){
if(result.targets){	
for(var t=0;t<result.targets.length;t++){
player.line(result.targets[t]);
result.targets[t].damage();
}
}
}
else{
event.finish();
}	
}							
				},	
				yys迷离2:{
content:function (){
"step 0"
player.chooseTarget('选择【迷离】的目标',function(card,player,target){
return target!=player;
}).ai=function(target){
return -get.attitude(player,target);
}
"step 1"
if(result.bool){
event.target=result.targets[0];
}
else{
event.finish();
}
"step 2"
if(event.target){
player.line(event.target);
event.target.damage(player.maxHp-player.hp);
}	
}							
				},							
				yys挥斩:{
enable:"phaseUse",
usable:1,
filterCard:true,
selectCard:1,
discard:false,
prepare:"give",
filterTarget:function (card,player,target){
return player!=target;
},	
check:function (card){		
return 15-get.value(card);
if(player.hp==player.maxHp){
return 1;
};
},
content:function (){
target.gain(cards,player);
target.addTempSkill('yys挥斩3',{player:'phaseEnd'});
target.addTempSkill('yys挥斩1',{player:'phaseEnd'});		
},			          							
				},					
				yys挥斩1:{
	trigger:{
		player:'useCardToBefore'
		},
	filter:function(event,player){
		return event.card&&event.card.name=='sha'&&!player.hasSkill('yys挥斩2');
	},
	forced:true,
	content:function(){
for(var i=0;i<game.players.length;i++){			
if(game.players[i].hasSkill('yys挥斩')){
player.useCard({name:'sha'},game.players[i]);
trigger.untrigger();
trigger.finish();
player.addTempSkill('yys挥斩2',{player:'useCardToBegin'});
};
}				
	}			
},		
				yys挥斩2:{},		
				yys挥斩3:{
		init:function(player,skill){
			var skills=player.getSkills(true,false);
			player.disableSkill(skill,skills);
		},
		onremove:function(player,skill){
			player.enableSkill(skill);
		},
		locked:true,
		mark:true,
		intro:{
			content:function(storage,player,skill){
				var list=[];
				for(var i in player.disabledSkills){
					if(player.disabledSkills[i].contains(skill)){
						list.push(i)
					}
				}
				if(list.length){
					var str='失效技能：';
					for(var i=0;i<list.length;i++){
						if(lib.translate[list[i]+'_info']){
							str+=get.translation(list[i])+'、';
						}
					}
					return str.slice(0,str.length-1);
				}
			}
		}
	},					
				yys祈愿:{
enable:"phaseUse",
usable:1,
filterCard:true,	
selectCard:1,
filterTarget:function (card,player,target){
return target.num('j')>0&&player!=target;
},	
check:function (card){		
return 15-get.value(card);
if(player.hp==player.maxHp){
return 1;
};
},
content:function (){
target.discard(target.getCards('j'));
target.recover();
},
ai:{
order:16,
result:{
	target:1,			
},		
},	
				},												
				yys轻盈:{
trigger:{
player:'gainAfter'
},
round:1,
content:function (){
var cards=[];
for(i=0;i<trigger.cards.length;i++){
cards.push(trigger.cards[i]);	
ui.cardPile.appendChild(game.createCard(trigger.cards[i]));
game.log(player,'将',trigger.cards[i],'放入牌堆底');
}
player.discard(cards);
player.draw(trigger.cards.length);
}						
				},					
				yys星轨:{							
trigger:{
player:"damageEnd",
},
forced:true,
filter:function (event,player){
return event.source;
},
content:function (){
if (trigger.source.storage.yys星轨1==undefined) trigger.source.storage.yys星轨1=0;
trigger.source.addSkill('yys星轨1');
trigger.source.storage.yys星轨1+=1;
trigger.source.syncStorage('yys星轨1');		
}						
				},
				yys星轨1:{
		marktext:"月",
		intro:{
		},
		mark:true,													
				},						
				yys天罚:{
enable:"phaseUse",
filterTarget:function (card,player,target){
return target.hasSkill('yys星轨1');
},
content:function (){
target.damage(target.storage.yys星轨1);
target.removeSkill('yys星轨1');	
delete target.storage.yys星轨1;
},
ai:{
order:9,
result:{		
	player:function (player){
		return 1;
	},				
},		
},														
				},
				yys扇舞:{
trigger:{
source:"damageEnd",
},
filter:function (event,player){
return event.card&&event.card.name=='sha'&&player.num('h')+player.num('e')>0;
},
check:function (event,player){
return game.countPlayer(function(current){return get.attitude(player,current)>0&&current.maxHp>current.hp&&current!=player})>0
},
content:function (){
"step 0"
player.chooseTarget('选择【扇舞】的目标',function(card,player,target){
return target!=player;
}).ai=function(target){
return get.attitude(player,target);
}
"step 1"
if(result.bool){
player.chooseToDiscard(1,'he',true);
event.target=result.targets[0];
}
else{
event.finish();
}
"step 2"
if(event.target){
player.line(event.target);
event.target.recover(1);
}
}							
				},
				yys助阵:{
trigger:{
global:"recoverAfter",
},
frequent:true,
filter:function (event,player){
return event.player!=player;
},
content:function (){
"step 0"
player.chooseTarget('选择【助阵】的目标',function(card,player,target){
return target;
}).ai=function(target){
return get.attitude(player,target);
}
"step 1"
if(result.bool){
event.target=result.targets[0];
}
else{
event.finish();
}
"step 2"
if(event.target){
player.line(event.target);
event.target.draw(1);
}
}
},
				yys九命:{
unique:true,
trigger:{
player:"dyingBegin",
},
mark:true,
skillAnimation:true,
animationStr:"九命",
animationColor:"fire",
init:function (player){
player.storage.yys九命=false;
},
filter:function (event,player){
if(player.storage.yys九命) return false;
return true;
},	
content:function (){
game.delay(1.3)
player.awakenSkill('yys九命');
player.storage.yys九命=true;			
var ec=get.cards(2);
player.showCards(ec,'九命');
if (get.number(ec[0])+get.number(ec[1])>=9){
trigger.untrigger();
trigger.finish();	
//game.log('判定结果',get.number(ec[0])+get.number(ec[1]),'点')	
player.gainMaxHp(1);
player.recover(player.maxHp-player.hp+1);
}
game.cardsDiscard(ec[0]);
game.cardsDiscard(ec[1]);
//ui.discardPile.appendChild(ec[0]);
//ui.discardPile.appendChild(ec[1]);
},
ai:{
order:2,
result:{
	player:function (player){
		return 1;
	},			
},
},
intro:{
content:"limited",
},							
			
},
				yys报复:{
trigger:{
player:"damageAfter",
},
forced:true,
filter:function (event,player,card){
return event.source&&player.hasSha();
},
content:function (){
player.addSkill('yys报复1');	
player.chooseToUse(get.prompt('yys报复'),{name:'sha'},trigger.source).logSkill='yys报复';
}
},
				yys报复1:{
		trigger:{
			player:'shaBegin'
			},
		forced:true,	
		content:function(){
			trigger.directHit=true;
			player.removeSkill('yys报复1');
		}
				},
				yys游鱼:{
		mod:{
			maxHandcard:function (player,num){
				return num+player.countCards('h',{name:'sha'});
			},
		},
trigger:{
player:"phaseUseBefore",
},
forced:true,
content:function (){
player.addTempSkill('yys游鱼1',{player:'phaseUseAfter'});
}				
				},
				yys游鱼1:{
		mod:{
			cardEnabled:function (card,player){
	if(player.hp>2&&card.name=='sha'){
		return false; 
	}
			}
		},					
				},						
				yys逐流:{
enable:"phaseUse",
filterCard:function (card){
return card.name=='sha';
},
selectCard:[1,Infinity],
discard:false,
prepare:"give",
filterTarget:function (card,player,target){
return player!=target;
},
check:function (card){
if(ui.selected.cards.length>1) return 0;
if(ui.selected.cards.length&&ui.selected.cards[0].name=='du') return 0;
if(!ui.selected.cards.length&&card.name=='du') return 20;
var player=get.owner(card);
if(player.hp==player.maxHp||player.storage.yys逐流<0||player.countCards('h')<=1){
	if(ui.selected.cards.length){
		return -1;
	}
	var players=game.filterPlayer();
	for(var i=0;i<players.length;i++){
		if(players[i].hasSkill('haoshi')&&
			!players[i].isTurnedOver()&&
			!players[i].hasJudge('lebu')&&
			get.attitude(player,players[i])>=3&&
			get.attitude(players[i],player)>=3){
			return 11-get.value(card);
		}
	}
	if(player.countCards('h')>player.hp) return 10-get.value(card);
	if(player.countCards('h')>2) return 6-get.value(card);
	return -1;
}
return 10-get.value(card);
},
content:function (){
target.gain(cards,player);
if(typeof player.storage.yys逐流!='number'){
	player.storage.yys逐流=0;
}
if(player.storage.yys逐流>=0){
	player.storage.yys逐流+=cards.length;
	if(player.storage.yys逐流>1){
		player.storage.yys逐流=-1;
		player.useSkill('yys逐流1');
	}
}
},
ai:{
order:0.5,
result:{
	target:function (player,target){
		if(target.hasJudge('lebu')) return 0;
		var nh=target.countCards('h');
		var np=player.countCards('h');
		if(player.hp==player.maxHp||player.storage.yys逐流<0||player.countCards('h')<=1){
			if(nh>=np-1&&np<=player.hp&&!target.hasSkill('haoshi')) return 0;
		}
		return Math.max(1,5-nh);
	},
},
},			
				},
				yys逐流1:{
content:function (){
"step 0"
player.chooseTarget('选择【逐流】的目标',function(card,player,target){
return player!=target&&get.distance(player,target,'attack')<=1;
}).ai=function(target){
return -get.attitude(player,target);
}
"step 1"
if(result.bool){
event.target=result.targets[0];
}
else{
event.finish();
}
"step 2"
if(event.target){
player.line(event.target);
event.target.damage();	  		
}		
	
},					
				},
				yys魂狩:{
trigger:{
source:"damageEnd",
},
filter:function (event,player){
return event.card&&event.card.name=='sha'&&event.player!=player;
},
forced:true,
content:function (){
trigger.player.addTempSkill('yys魂狩1',{player:'recoverEnd'});
}							
				},
				yys魂狩1:{
		marktext:"魂",
		intro:{
		},
		mark:true,							
trigger:{
player:"recoverBegin",
},
forced:true,
content:function (){
game.log(player,'恢复体力失败');	
trigger.untrigger();
trigger.finish();	
}							
				},
				yys夺命:{
trigger:{
global:"dyingBegin",
},
filter:function (event,player){
return event.player!=player&&event.source;
},
filter:function (event,player){
return ((game.countPlayer(function(current){return get.attitude(current,event.player)&&current.countCards('h',{name:'tao'})>0})==0||event.player.countCards('h',{name:'jiu'})==0)&&event.source&&get.attitude(event.player,event.source)==0)||
((game.countPlayer(function(current){return get.attitude(current,event.player)&&current.countCards('h',{name:'tao'})>0})>0||event.player.countCards('h',{name:'jiu'})>0)&&event.source&&get.attitude(event.player,event.source)>=0);
},
content:function (){
player.line([trigger.source,trigger.player]);
trigger.source.draw(trigger.player.maxHp);
trigger.player.addTempSkill('yys夺命1',{player:'dieBegin'});
},							
				},
				yys夺命1:{
		marktext:"夺",
		intro:{
		},
		mark:true,							
trigger:{
player:"dieBefore",
},
forced:true,
filter:function (event,player){
return event.source;
},
content:function (){
trigger.source.discard(trigger.source.getCards('h'));
player.unmarkSkill('yys夺命1');
}							
				},	
				yys撒娇:{
		mod:{
			globalFrom:function (from,to,current){
			if (game.dead.length==0) return current-1;
			return current;
			},
			globalTo:function (from,to,current){
			if (game.dead.length>0) return current+1;
			return current;
			},
		},
	},
				yys卖萌:{
trigger:{
player:"damageBegin",
},
filter:function (event,player){
return event.card&&event.card.name!='sha';
},
forced:true,
content:function (){
"step 0"
player.judge(function(card){return (get.color(card)=='black')?1.5:-0.5});
"step 1"
if(result.judge>0){
trigger.num-=1;    
}
}							
				},
				yys黑焰:{
trigger:{
source:"damageBegin",
},
filter:function (event,player){
return event.card&&event.card.name=='sha'&&!player.isMaxHp();
},
forced:true,
content:function (){
trigger.num+=1;	
}																				
				},
				yys迁怒:{
trigger:{
player:"dieBefore",
},
forced:true,
content:function (){
player.line(game.players);
for(var i=0;i<game.players.length;i++){
game.players[i].loseMaxHp();
};
}																				
				},
				yys鬼手:{
enable:"phaseUse",
usable:1,
filter:function (event,player){
return player.maxHp!=1;
},
filterTarget:function (card,player,target){
return target!=player&&target.hp>1;
},	
content:function (){
if (Math.ceil(player.maxHp/3)<3){	
player.loseMaxHp(Math.ceil(player.maxHp/3));
target.loseHp(Math.ceil(player.maxHp/3));
}else{
player.loseMaxHp(2);
target.loseHp(2);	
}
},																				
ai:{
order:11,
result:{
	target:function (player,target){
		if(player.maxHp>4) return -1;
	},            
}, 
				},
				},
				yys狂刃:{
trigger:{
player:"useCardEnd",
},
filter:function (event,player){
return event.card.name=='sha'&&_status.currentPhase==player&&event.targets[0].isAlive();
},
check:function (event,player){
return get.attitude(player,event.targets[0])<0;
},
content:function (){
"step 0"
player.judge(function(card){return (get.color(card)=='red')?1.5:-0.5});
"step 1"
if(result.judge>0){
player.useCard({name:'sha'},trigger.targets);    
} else{
var evt=_status.event;
for(var i=0;i<10;i++){
if(evt&&evt.getParent){
evt=evt.getParent();
}
if(evt.name=='phaseUse'){
evt.skipped=true;
break;
}
}
}
}																				
				},
				yys索命:{
		trigger:{
			source:'dieAfter'
			},
		forced:true,	
		content:function(){
			player.phase();
		}							
				},
				yys幽明:{
group:["yys幽明_1111","yys幽明_2222"],
subSkill:{
1111:{
trigger:{
global:"phaseBefore",
},
forced:true,
popup:false,
filter:function (event,player){
return event.player!=player;
},
content:function (){
player.storage.yys幽明_a=0;
} 
},
2222:{
trigger:{
global:"discardBegin",
},
filter:function (event,player){
return player.storage.yys幽明_a==0&&event.player!=player&&_status.currentPhase==event.player;
},
check:function (event,player){
return get.attitude(player,event.player)>0;
},
content:function (){
player.line(trigger.player);
player.storage.yys幽明_a=1;	
trigger.untrigger();
trigger.finish();	
}         
},
},
				},
				yys吸魂:{
trigger:{
player:"damageEnd",
},
direct:true,
content:function (){
"step 0"
player.chooseTarget('选择【吸魂】的目标',function(card,player,target){
return target;
}).ai=function(target){
if(!target.isTurnedOver()) return -get.attitude(player,target);	
return get.attitude(player,target);	
}
"step 1"
if(result.bool){
event.target=result.targets[0];
}
else{
event.finish();
}
"step 2"
if(event.target){
player.line(event.target);
player.logSkill('yys吸魂');
event.target.turnOver();
if (player.hp<event.target.num('h')&&player.hp>2){
player.recover();	
}	  		
}		    
}
},
				yys花舞:{
trigger:{
player:"loseEnd",
},
forced:true,
filter:function (event,player){
for(var i=0;i<event.cards.length;i++){
	if(event.cards[i].original=='e') return true;
}
return false;
},
content:function (){
"step 1"
var list=["令一名角色摸牌","弃置一名其他有装备牌或判定牌角色的装备牌或判定牌"];
player.chooseControl(list)
'step 2'
if (result.control=='令一名角色摸牌'){                
player.useSkill('yys花舞1');
}	
if (result.control=='弃置一名其他有装备牌或判定牌角色的装备牌或判定牌'){                
player.useSkill('yys花舞2');	
}	
},							
				},
				yys花舞1:{
content:function (){
"step 0"
player.chooseTarget('选择【花舞】的目标',function(card,player,target){
return target;
}).ai=function(target){
return get.attitude(player,target);
}
"step 1"
if(result.bool){
if(result.targets){
player.line(result.targets[0]);
result.targets[0].draw();
}
}
else{
event.finish();
}	
}																				
				},
				yys花舞2:{

content:function (){
"step 0"
player.chooseTarget('选择【花舞】的目标',function(card,player,target){
return target.num('e')+target.num('j')>0&&target!=player;
}).ai=function(target){
return -get.attitude(player,target);
}
"step 1"
if(result.bool){
if(result.targets){
player.line(result.targets[0]);
player.discardPlayerCard(1,result.targets[0],'ej'); 
}
}
else{
event.finish();
}	
}																				
											
				},						
				yys桃华:{
unique:true,
trigger:{
global:"dyingBegin",
},
priority:-1,	
mark:true,
skillAnimation:true,
animationStr:"桃华",
animationColor:"fire",
check:function (event,player){
return get.attitude(player,event.player)>0;
},	
init:function (player){
player.storage.yys桃华=false;
},
filter:function (event,player){
if(player.storage.yys桃华) return false;
return event.player!=player;
},	
content:function (){
player.discard(player.get("e"));
trigger.player.recover(trigger.player.maxHp-trigger.player.hp);
trigger.player.addTempSkill('yys桃华1',{player:'dieBegin'});
player.awakenSkill('yys桃华');
player.storage.yys桃华=true;			  			
},
ai:{
order:2,
result:{
	player:function (player){
		return 1;
	},			
},
},
intro:{
content:"limited",
},							                    							
				},						
				yys桃华1:{
		marktext:"桃",
		intro:{
		},
		mark:true,								
trigger:{
player:"phaseEnd",
},
forced:true,
content:function (){
player.die();
}							
				},	
				yys虚无:{
enable:"phaseUse",
usable:1,
filterCard:function (card){
return card.name=='sha';
},	
selectCard:1,
content:function (){
"step 0"		    		
player.lose(cards);
player.chooseTarget('选择【虚无】的目标',function(card,player,target){
return target!=player;
}).ai=function(target){
return -get.attitude(player,target);
}
"step 1"
if(result.bool){
event.target=result.targets[0];
}
else{
event.finish();
}
"step 2"
if(event.target){
event.target.damage();
player.addTempSkill('yys虚无1',{player:'phaseEnd'})	  		
}			
},			
		ai:{
			order:0,
			result:{
				player:function (player){
	return  player.num('h');
	 },
			},
		},	
				},		
				yys虚无1:{
		mod:{
			cardEnabled:function (card,player){
	if(card.name=='sha'){
		return false; 
	}
			}
		},					
				},							
				yys冥火:{
				trigger:{
source:"damageEnd",
},
forced:true,
filter:function (event,player){
if (event.card)	{
return get.type(event.card)!='trick'&&event.player!=player;
};	
return true;
},
content:function (){
if(trigger.player.hp>=player.hp){
player.draw();	
};
if(trigger.player.hp<player.hp&&trigger.player.num('h')>0){
trigger.player.chooseToDiscard(1,'h',true);
};
}
},
			},
			translate:{
				//"kzol_yys_fei":'<span style="font-size:20px">非本人设计</span>',
				'yys_椒图':'椒图',
				'yys_涓流':'涓流',
				'yys_涓流_info':'出牌阶段限一次，你可以弃置一张牌然后横置你在内的至多三名角色；当横置角色受到大于一的伤害时，你可以对至多X名横置角色造成一点伤害，然后伤害-Y（X为伤害值，Y为目标数）',
				'yys_滋养':'滋养',
				'yys_滋养_info':'其他角色的出牌阶段开始时，你可以弃置X张牌，视为对其使用一张【酒】（X为你的体力值）',
				'yys_座敷童子':'座敷童子',
				'yys_福祸1':'福祸',
				'yys_福祸':'福祸',
				'yys_福祸_info':'其他角色的出牌阶段开始时，你可以流失一点体力，然后令其选择一项：1.摸X张牌；2.本回合内【杀】的使用次数+X（X为你已损失体力+1）',
				'yys_鸿运':'鸿运',
				'yys_鸿运_info':'游戏开始时，你可以令一名角色摸三张牌；准备阶段，你可以令一名其他其他角色摸一张牌',
				'yys_神乐':'神乐',
				'yys_疾风':'疾风',
				'yys_疾风_info':'出牌阶段开始前，你可以弃置一张牌并跳过出牌阶段，然后令一名其他角色执行一个额外的回合',
				'_yys_续命':'续命',
				'yys_续命1':'魂',
				'yys_续命':'续命',
				'yys_续命_info':'限定技，回合结束阶段你可以将牌堆顶五张牌置于一名角色的武将牌上，称为“魂”，该角色受到伤害前可以弃置一张“魂”，防止此伤害，其回合结束后，弃置一张“魂”',
				'yys_神火':'神火',
				'yys_神火_info':'当一名其他角色在其回合内对你造成伤害后，你可以令其选择一项：1.弃置装备区内的所有牌；2.结束出牌阶段',
				'yys_雪女':'雪女',
				'yys_风雪':'风雪',
				'yys_风雪_info':'出牌阶段限一次，你可以弃置任意张不同花色的牌（至少一张），然后令等量其他角色选择一项：1.受到一点伤害；2.翻面',
				'yys_冰甲':'冰甲',
				'yys_冰甲_info':'回合结束阶段，你可以将至多X张手牌置于武将牌上，称为“冰甲”；当你受到伤害时，你可以弃置等同于你的体力值张“冰甲”使伤害-1（X为场上背面朝上的角色数+1）',
				'yys_阎魔':'阎魔',
				'yys_夺魂':'夺魂',
				'yys_夺魂_info':'锁定技，当其他曾经非鬼角色死亡时，你防止之，其清空技能，弃置区域内的所有牌并重置体力牌，然后变为鬼（鬼身份与你一致；鬼始终跳过摸牌阶段，其跳过摸牌阶段时令你摸一张牌；你死亡后，鬼死亡；当没有与你态度敌对的角色时，鬼依次死亡；鬼死亡前，变回原来的身份）',
				'yys_怨厌':'怨厌',
				'yys_怨厌_info':'出牌阶段限一次，你可以指定一名其他角色，然后令你或鬼流失一点体力来对目标造成一点伤害，以此法造成伤害时封印其非锁定技直至其回合结束阶段',
				'yys_两面佛':'两面佛',
				'yys_怒目':'怒目',
				'yys_怒目_info':'锁定技，你的红色【杀】视为【火杀】；你的黑色【杀】视为【雷杀】；当你造成属性伤害后，目标角色须弃置一张牌',
				'yys_神罪':'神罪',
				'yys_神罪_info':'限定技，出牌阶段，你可以展示牌堆顶一张牌并弃置之，然后其他角色依次弃置一张与上家弃置牌（没有则为展示的牌）颜色不同的手牌，否则你对其造成一点伤害',
				'yys_山颪':'山颪',
				'yys_斩风':'斩风',
				'yys_斩风_info':'回合内，当你使用【杀】指定一名角色后，你可以弃置一张手牌并令此【杀】伤害+1且需要两张【闪】抵消',
				'yys_撕裂':'撕裂',
				'yys_撕裂_info':'回合结束阶段，若你于回合内造成了不小于2点伤害，你可以视为对一名角色使用一张【杀】',
				'yys_一目连':'一目连',
				'yys_风破':'风破',
				'yys_风破_info':'当你的【杀】造成伤害后，你可以将此【杀】置于你的武将牌上，称为‘破’；当其他角色使用【杀】造成伤害时，你可以弃置一张‘破’并令伤害-1',
				'_yys_风佑':'风佑',
				'yys_风佑':'风佑',
				'yys_风佑1':'风佑',
				'yys_风佑_info':'当你使用或打出一张【闪】后，你可以将此【闪】置于一名角色的武将牌上，该角色受到伤害时可以弃置此【闪】防止伤害',
				'yys_彼岸花':'彼岸花',
				'yys_血葬':'血葬',
				'yys_血葬_info':'当你受到伤害后，你可以获得牌堆顶两张牌，然后一张手牌置于武将牌上，称为‘花’',
				'yys_花海1':'花海',
				'yys_花海':'花海',
				'yys_花海_info':'全局首个回合开始前，你可以将任意张手牌置于武将牌上，称为‘花’；其他角色的回合开始时，你可以弃置一张‘花’，视为对其使用一张【杀】，此【杀】不可闪避',
				'yys_荒川之主':'荒川之主',
				'yys_逐流':'逐流',
				'yys_逐流_info':'锁定技，摸牌阶段结束时，将牌堆顶一张牌置于武将牌上，称为‘怒’；准备阶段，弃置一张‘怒’并摸一张牌；当你受到或造成伤害时，若武将牌上有‘怒’，伤害+1',
				'yys_吞噬1':'吞噬',
				'yys_吞噬':'吞噬',
				'yys_吞噬_info':'当你的【杀】造成伤害后，你可以弃置一张‘怒’使此【杀】额外结算一次，以此法造成伤害后，可以弃置目标角色装备区内的一张牌',
				'yys_雪童子':'雪童子',
				'yys_雪走':'雪走',
				'yys_雪走_info':'当你造成伤害后，你可以令目标冰冻（复原武将并令其武将牌无法横置；回合开始前选择跳过摸牌阶段或出牌阶段，否则流失一点体力，然后解除冰冻）',
				'yys_碎冰':'碎冰',
				'yys_碎冰_info':'当你对翻面/连环/冰冻角色造成伤害时，你可以令此伤害加倍（独立加倍）',
				'yys_小鹿男':'小鹿男',
				'yys_生息':'生息',
				'yys_生息_info':'回合结束阶段/任意一名角色死亡后，你可以将一张【乐不思蜀】置于你的判定区内；判定阶段开始时，你须弃置判定区内的所有牌并恢复等量体力',
				'yys_冲撞':'冲撞',
				'yys_冲撞_info':'准备阶段，你可以弃置判定区内的一张牌，然后弃置一名其他角色的一张牌，若其没有牌，其翻面并摸X张牌（X为其已损失体力值）',
				'yys_御馔津':'御馔津',
				'yys_狩界':'狩界',
				'yys_狩界_info':'回合结束阶段，你可以展示牌堆顶三张牌，将其中点数不同于武将牌上的"符"且和小于13的牌置于你的武将牌上，称为"符"，其余弃置；每有一张"符"，你的手牌上限和攻击距离+1',
				'yys_一矢':'一矢',
				'yys_一矢_info':'当你攻击范围内的其他角色的出牌阶段结束时，你可以令其弃置你一张手牌，然后你弃置一张"符"，封印其非锁定技直至其回合开始阶段并对其使用一张【杀】',
				'yys_荒':'荒',
				'yys_星轨':'星轨',
				'yys_星轨_info':'锁定技，当任意一名角色进行判定前，你取消之，然后从牌堆顶两张牌选择一张作为判定结果，另一张牌则置于弃牌堆中，然后执行判定内容',
				'yys_天罚':'天罚',
				'yys_天罚_info':'当你攻击范围内的一名其他角色受到非【天罚】伤害后，你可以弃置一张牌并令其进行一下判定，若判定结果为黑色，你对其造成一点雷电伤害',
				'yys_花鸟画':'花鸟卷',
				'yys_归鸟':'归鸟',
				'yys_归鸟_info':'锁定技，你使用的【杀】没有距离限制；当你使用的【杀】造成一点伤害后，你须令一名角色恢复一点体力或摸一张牌',
				'yys_画境1':'画境',
				'yys_画境':'画境',
				'yys_画境_info':'其他角色的回合结束后，若你的武将牌正面朝上，你可以进行一个额外的回合，若如此做，额外回合结束后，你翻面；当你受到大于一的伤害时，你可以防止多余的伤害',
				'yys_青行灯':'青行灯',
				'yys_幽光':'幽光',
				'yys_幽光_info':'回合结束阶段，你可以指定至多X名其他角色并分别展示其任意一张手牌，若此牌颜色为红色，你获得之，若为黑色，你弃置其一张手牌（X为你已损失的体力值）',
				'yys_明灯':'明灯',
				'yys_明灯_info':'当你弃置一名角色的牌时，你可以视为对其使用一张【火杀】或【火攻】',
				'yys_妖刀姬':'妖刀姬',
				'yys_连斩':'连斩',
				'yys_连斩_info':'锁定技，当你杀死一名角色后，你重置技能【杀戮】',
				'yys_杀戮':'杀戮',
				'yys_杀戮_info':'限定技，出牌阶段限一次，你可以弃置任意张牌并指定攻击范围内的一名其他角色，然后展示牌堆顶3张牌并弃置之，其中每有一张与你弃置的牌花色相同的牌，你对目标造成一点伤害',
				'yys_玉藻前':'玉藻前',
				'yys_灵击':'灵击',
				'yys_灵击_info':'锁定技，你的回合内，任意一名角色受到伤害后，你摸一张牌',
				'yys_狐火':'狐火',
				'yys_狐火_info':'出牌阶段限一次，你可以弃置一张手牌，视为对一名其他角色使用一张【决斗】，若目标决斗胜利，你摸一张牌',
				'yys_堕天':'堕天',
				'yys_堕天_info':'出牌阶段限一次，你可以流失一点体力，视为使用一张【南蛮入侵】',
				'yys_茨木童子':'茨木童子',
				'yys_迁怒':'迁怒',
				'yys_迁怒_info':'当你于回合内造成伤害后，你可以令除目标外的一名其他角色打出一张【闪】，否则你对其造成一点伤害，每轮限一次',
				'yys_鬼手1':'鬼手',
				'yys_鬼手':'鬼手',
				'yys_鬼手_info':'其他角色的回合结束阶段，你可以对其使用一张【杀】，若如此做，此【杀】附带火属性，每轮限一次',
				'yys_辉夜姬':'辉夜姬',
				'yys_蓬莱':'蓬莱',
				'yys_蓬莱_info':'准备阶段，你可以将牌堆顶X张牌背面置于你的武将牌上，称为"竹"；任意一名角色的回合开始时，你可以翻开一张"竹"，若"竹"的花色不为黑桃，你将此"竹"给予该角色（X为你的体力值）',
				'yys_玉裘':'玉裘',
				'yys_玉裘1':'玉裘',
				'yys_玉裘_info':'当你的武将牌上有已翻开的"竹"时，你可以将一张牌当作【无懈可击】使用，若如此做，你获得一张"竹"并摸一张牌',
				'yys_酒吞童子':'酒吞童子',
				'yys_醉怒':'醉怒',
				'yys_醉怒_info':'锁定技，当你受到伤害/的回合结束/使用【酒】后，进行一次判定，若判定结果黑色，你将判定结果置于你的武将牌上成为"狂"；每张"狂"令你出牌阶段使用【杀】次数+1；最多拥有4张"狂"',
				'yys_狂啸':'狂啸',
				'yys_狂啸1':'狂啸',
				'yys_狂啸_info':'出牌阶段，你可以弃置所有"狂"，然后选择一项：（1）若体力值小于2，恢复X点体力；（2）本回合内下次使用的【杀】造成的伤害+X/2（向上整取）（X为你以此法弃置"狂"的数量）',
				'yys_大天狗':'大天狗',
				'yys_逆羽':'逆羽',
				'yys_逆羽_info':'你的回合外，当你成为锦囊牌的目标时，你可以令此牌对你无效，若如此做，你失去【逆羽】直到你的回合开始',
				'yys_风袭':'风袭',
				'yys_风袭_info':'出牌阶段限一次，你可以弃置至多X张牌，然后选择至多X名其他角色，这些角色依次进行判定，若判定结果为红色，你弃置其一张牌，若为黑色，你对其造成一点伤害（X为你的体力值）',
	shouyys首无:"首无",
	yys虚无1:"虚无",
	yys虚无:"虚无",
	yys虚无_info:"出牌阶段限一次，你可以弃置一张【杀】并令一名其他角色受到一点伤害。若如此做，本回合内你不能再使用【杀】",
	yys冥火:"冥火",
	yys冥火_info:"锁定技，当你使用除锦囊牌以外的牌对其他角色造成伤害后，若其体力大于等于你，你摸一张牌，否则其弃置一张牌",
	taoyys桃花妖:"桃花妖",
	yys花舞1:"花舞",
	yys花舞2:"花舞",
	yys花舞:"花舞",
	yys花舞_info:"锁定技，每当你失去装备区内的牌后，可以选择：（1）令一名角色摸牌；（2）弃置一名其他角色的装备牌或判定牌",
	yys桃华1:"桃华",
	yys桃华:"桃华",
	yys桃华_info:"限定技，其他角色濒死阶段求【桃】前，你可以弃置你装备区内的所有牌（没有则不弃），若如此做，该角色恢复体力至体力上限并于其回合结束后死亡",
	qingyys青行灯:"青行灯",
	yys幽明:"幽明",
	yys幽明_info:"其他角色回合内限一次，当该角色弃牌时，你可以取消之",
	yys吸魂:"吸魂",
	yys吸魂_info:"当你受到伤害后，你可以令一名角色翻面，若你如此做且体力值大于2、小于该角色的手牌数，你恢复一点体力",
	guiyys鬼使黑:"鬼使黑",
	yys索命:"索命",
	yys索命_info:"锁定技，当你杀死一名角色后，你立即执行一个新的回合",
	yaoyys妖狐:"妖狐",
	yys狂刃:"狂刃",
	yys狂刃_info:"你的回合内，你打出的【杀】结算后可以进行一次判定，若为红色，则视为你对目标使用一张【杀】，否则你结束出牌阶段",	
	ciyys茨木童子:"茨木童子",
	yys黑焰:"黑焰",
	yys黑焰_info:"锁定技，若你的体力不是全场最多（或之一），则你使用的【杀】造成的伤害+1",
	yys迁怒:"迁怒",
	yys迁怒_info:"锁定技，你死亡时，所有角色失去一点体力上限",					
	yys鬼手:"鬼手",
	yys鬼手_info:"出牌阶段限一次，若你体力上限大于1，则你可以失去三分之一点体力上限（向上整取，最多失去两点），令一名体力大于1的其他角色流失X点体力（X为你以此法失去的体力上限）",						
	tiaoyys跳跳妹妹:"跳跳妹妹",					
	yys卖萌:"卖萌",
	yys卖萌_info:"当你即将受到非【杀】造成的伤害时，可以进行一次判定，若结果为黑色，则伤害-1",					
	yys撒娇:"撒娇",
	yys撒娇_info:"锁定技，若场上没有死亡的角色，默认你装备一匹进攻马，否则默认你装备一匹防御马",
	guiyys鬼使白:"鬼使白",						
	yys夺命1:"夺命",					
	yys夺命:"夺命",
	yys夺命_info:"其他角色进入濒死阶段求【桃】前，你可以令伤害来源摸X张牌，若如此做，该角色死亡时，伤害来源弃置所有手牌（X为该角色的体力上限）",			
	yys魂狩1:"魂狩",					
	yys魂狩:"魂狩",
	yys魂狩_info:"锁定技，当你使用的【杀】对其他角色造成伤害后，目标下次恢复体力无效",	
	huangyys荒川之主:"荒川之主",	
	yys逐流1:"逐流",					
	yys逐流:"逐流",
	yys逐流_info:"出牌阶段，你可以把手牌中任意数量的【杀】交给其他角色。若你交出的【杀】的数量大于一，你可以对一名攻击范围内的其他角色造成一点伤害",					
	yys游鱼:"游鱼",					
	yys游鱼1:"游鱼",
	yys游鱼_info:"锁定技，出牌阶段，若你的体力大于2，你不能使用【杀】，你的【杀】不计入手牌数",
	jiuyys九命猫:"九命猫",			
	yys报复1:"报复",					
	yys报复:"报复",
	yys报复_info:"当你受到伤害后，你可以对伤害来源使用一张【杀】，若如此做，你的下一张【杀】不可闪避",						
	yys九命:"九命",
	yys九命_info:"限定技，你进入濒死阶段前，你可以展示牌堆顶两张牌并弃置之，若两张牌的点数之和大于等于9，则你增加一点体力上限并将体力恢复至体力上限",
	jinyys金鱼姬:"金鱼姬",						
	yys扇舞:"扇舞",
	yys扇舞_info:"当【杀】造成伤害后，你可以弃置一张牌并令一名其他角色恢复一点体力",						
	yys助阵:"助阵",
	yys助阵_info:"每当其他角色恢复体力时，你可以令任意一名角色摸一张牌",	
	huangyys荒:"荒",						
	yys星轨1:"星轨",
	yys星轨:"星轨",			
	yys星轨_info:"锁定技，每当你受到伤害后，伤害来源获得一枚“月”标记",
	yys天罚1:"天罚",
	yys天罚:"天罚",
	yys天罚_info:"出牌阶段，你可以弃置一名角色所有的“月”标记，并对该角色造成X点伤害（X为你弃置其“月”标记的数量）",			
	yys祈愿:"祈愿",
	yys祈愿_info:"出牌阶段限一次，你可以弃置一张手牌并选择一名判定区内有牌的其他角色，该角色恢复一点体力并弃置其判定区域内的牌",	
	yys轻盈:"轻盈",
	yys轻盈_info:"当你获得牌后，你可以将之弃置并将这些牌的复制牌置于牌堆底，然后你摸等量的牌（每轮限一次）",					
	huyys蝴蝶精:"蝴蝶精",					
	bingyys兵佣:"兵俑",	
	yys挥斩1:"挥斩",		
	yys挥斩2:"挥斩",
	yys挥斩3:"挥斩",
	yys挥斩:"挥斩",
	yys挥斩_info:"出牌阶段限一次，你可以交给一名其他角色一张手牌。若如此做，该角色所有技能失效且使用的【杀】的目标会变为你，持续至其回合结束阶段",				
	baiyys白狼:"白狼",
	yys无我:"无我",
	yys无我_info:"限定技，出牌阶段开始时，你可以对一名其他角色造成X点伤害（X为该角色体力值-1），若如此做，你弃置两张手牌并结束出牌阶段",		
	yys冥想:"冥想",
	yys冥想_info:"若于你的回合内有角色的体力值发生变化，那么你可以在回合结束后令一名角色摸一张牌",
	yanyys烟烟罗:"烟烟罗",			
	yys扑朔:"扑朔",
	yys扑朔_info:"锁定技，体力等于你的手牌数的角色对你造成的伤害-1",						
	yys迷离1:"迷离",			
	yys迷离2:"迷离",			
	yys迷离:"迷离",
	yys迷离_info:"回合结束阶段，你可以失去一点体力。若如此做，你：（1）选择至多X名角色，令其受到一点伤害;（2）选择一名角色，令其受到X点伤害（X为你已损失体力）",
			},
		};
		var yys_characterIntro={
			"baiyys白狼":{
				"式神介绍":"学习弓术的狼族少女。曾经是晴明的式神，但后来选择了离开。与源博雅也有过不解之缘。同为弓箭手，一直很欣赏博雅的弓术。但也为自己迟迟不进步的弓术而苦恼……最后终于找到了原因。",
				"传记一":"在我初次化形的时候，一位结界师救了我的命。那只污秽的怪物对我张开了血盆大口，我自己就会这样死掉了。下一瞬间，他的箭准确无误地贯穿了怪物的喉咙。这只庞然大物轰然倒下。身后的结界师还保持着举弓的动作。",
				"传记二":"我完全被他吸引住了，忘却了差点被怪物吞食的恐惧，只能看着他淡然地调整气息，收弓，转身离开。后来我才知道，那叫「残心」。我开始学习弓道。用足、胴造、备弓、起弓、拉弓、会、离。最后是，残心。",
				"传记三":"我不停地重复练习着，无论族人怎么耻笑我学习「弱小的人类伎俩」，我都不停地重复练习着。这跟我是否是一匹狼没有关系。弓道使我感到宁静，也让我从内心开始，渐渐变得强大。我是否能变成，像那位结界师一样威风凛凛的、正直的妖怪呢?再见面时，希望我强大得足以帮助他。",
			},
			"yanyys烟烟罗":{
				"式神介绍":"名为烟烟罗的妖怪。传闻是一位容姿妩媚的美人。却极少有人见过她真正的样子。她平日里都化作烟雾，将自己藏匿在不起眼的地方，暗中观察这世界上的每一个角落。",
				"传记一":"食发鬼：姐姐？！你为什么会在这里？<br>烟烟罗：怎么了……我不可以来看你吗？听说之前你招惹到了阴阳师晴明，不过看上去你好像没事嘛，呵呵，让我白担心了。<br>食发鬼：那已经是很久以前的事情了，姐姐。就算我有事，你现在来看我，也已经晚了吧？<br>烟烟罗：呵呵，我本来就是想看你被晴明欺负的样子，结果你这不是好好的嘛，真是失望。<br>食发鬼：……姐姐！你真是的！",
				"传记二":"烟烟罗：哎呀哎呀，闹别扭了吗？真可爱呢。<br>食发鬼：人家不想理你了啦！<br>烟烟罗：不过我是真的很想见见那个晴明，好像是个很有趣的人。<br>食发鬼：我也想再见到晴明大人呢。<br>烟烟罗：哦？那是为什么？他不是之前还欺负过你了吗？<br>食发鬼：因为晴明大人真的……真的太美了！那美丽的秀发、帅气的身姿，英俊的脸庞……我从未见过那样美丽的男人！",
				"传记三":"烟烟罗：呵呵，看来我的弟弟长大了呢。<br>食发鬼：才不是那样呢，姐姐。<br>烟烟罗：那我带你去见见他吧，要感谢姐姐哦？<br>食发鬼：……姐姐!<br>烟烟罗：对，这时候就应该坦率地谢谢我呢。<br>食发鬼：最喜欢姐姐了！<br>烟烟罗：姐姐也最喜欢你了哦。",
			},
			"bingyys兵佣":{
				"式神介绍":"他最初是在墓中的一只兵俑，以守护主人永远安眠为己任。但最终离开了主人，寻找其他应该保护之人。逝者已矣，是时候向主人告别了。还有其他人需要他的保护，还有其他人在等待着他。",
				"传记一":"终于又安静下来了，在下保护了主人一辈子，现在他死了，在下也绝不会允许其他人来打扰他。刚才那个家伙，似乎和之前的盗墓贼不一样，看到在下之后，她并没有像其他盗墓贼那样攻击在下或者尖叫着逃跑。她只是问了在下一个问题。",
				"传记二":"「你明明有能力帮助更多的人，但你却要把自己困在这里，守护这个腐朽的墓穴?」现在回想起来，那种眼神……主人教过在下，那叫怜悯。在下很久没有去过外面的世界了，外面也会有人需要在下的力量吗?主人曾说过，世界很大，他很想到再远一些的地方去看看。",
				"传记三":"也许在下可以代替主人去走一走。也许，在下还可以帮助一些，需要在下的人。就像主人一起做的一样。在下决定离开，到外面的世界看一看。再见了，主人。",
			},
			"huyys蝴蝶精":{
				"式神介绍":"居住在梦境世界的蝴蝶妖精。用自己的鼓声去指引在梦中迷路的人们。有时也会一边演奏一边起舞，十分可爱。如果在梦中迷失了自己的话，不用害怕，小小的蝴蝶精一定会来到身边，请仔细听她那沙拉啦啦啦的演奏声吧。",
				"传记一":"姐姐们离开的时候，脸上总是带着笑。回来的时候，却总是伤痕累累。是人类让大家受伤的吗?人类……好像很可怕……明明看到我这么害怕了，姐姐们还是坚决地把我送向了人类的领地。我很抗拒，姐姐却对我说「不亲眼看看，怎么能一口断定呢?」。平时温柔的大姐姐，难得地强硬了起来。",
				"传记二":"我终于明白，这回再怎么撒娇也无济于事，最终我还是煽动翅膀……飞向了人类的领地。路过寺庙时，我听到了好听的木鱼声。那节奏平缓，安定，就像姐姐们跳舞时拍铃鼓的声音一样。让我觉得心安。路过山洞时，我碰到了跟我们气味相近的人。恩……其实我也不知道那位爷爷是不是人类。但是他细心呵护虫茧的模样，让我觉得好亲切。",
				"传记三":"我也意识到了，人类并不一定会让我们受伤……？后来，我遇到了一个被称作大阴阳师的人。他带着好多好多妖怪，那些妖怪纷纷向我保证，在这里，我会是安全的。「别担心，有我在。」那个大阴阳师的声音，比姐姐们的铃鼓声还好听！那么……我就暂时留在这里吧？也许，这就是姐姐们想让我看的风景。",
			},
			"huangyys荒":{
				"式神介绍":"行踪不定，从不表露内心的神秘之人。言行中透露着不可侵犯的威严。有着强大的实力，连阎魔也对他十分恭敬。他没有对任何人说起过自己是谁，又来自何处。",
				"传记一":"从前有一座海边的村庄。村庄饱受海啸的侵袭。但全村人依海而生，不愿搬离海边。于是他们祈求神明，保佑他们平安，终于，神明赐给了他们一个孩子。这孩子有着独特的才能----预知。他知道一切即将发生的事情，从窗边何时会落下一只蝴蝶，到海啸何时会毁灭村庄，他都知道。他指导着村子中的人避开灾祸，而村子中的人们也都十分尊敬他，大家安安稳稳地生活着。",
				"传记二":"预言第一次出现错误的时候，大家也只是笑笑，并没有责怪这个孩子。但是慢慢地，责怪也开始了，甚至还有打骂，孩子的身上遍布伤痕。害怕受到惩罚的孩子，哭着预知着一切．预言却还是越来越不准。终于，有人提出，这孩子既然已经失去了预知的能力，不如就放弃这个孩子，将他献给海神，或许还能平息灾祸，第一次听到这个提议时，人们纷纷反对．认为这对孩子太残忍了，可是第二次、第三次的时候，反对的人越来越少。最后，没有人反对，所有人都同意了。",
				"传记三":"这个孩子带着浑身的伤痛，在全村人的注视下，呜咽着，走向无边的夜色里，走进冰冷的浪潮中。当海水淹没孩子的时候，海中掀起滔天巨浪，也淹没了村子和所有人。愚蠢的人类啊，你们知道亵渎神的恩惠要付出多大的代价吗？或许从最初就不应该温柔地对待人类，而是强硬地控制他们就好了。天真的孩子，享受到一点点虚伪的善意就对人类产生了感情，而感情终究会影响判断，铸成大错。那个天真的孩子也永远地消失在那晚的夜色中了。是啊……那样冰冷的海水……我可是再也不想体会第二次了。",
			},
			"jinyys金鱼姬":{
				"式神介绍":"可爱的小妖怪，生活在荒川。似乎和荒川之主有些不愉快，但和辉夜姬是好朋友。梦想是统治世界，但不会对陌生人轻易提起自己的梦想。每一天都在为了统治世界而努力加油。",
				"传记一":"哼！为什么都不带上我啦～！那个笑眯眯的金鱼老头！说好带上我的，结果又一个人跑了～啊啊啊，我要生气了，我下次绝对要真的生气了，无论他怎么哄我我都不管！笑眯眯的人，绝对都是一肚子坏水！还有河童哥哥，约好了在池塘边见面，他却和鲤鱼精姐姐在一起玩，完全忘记了和我的约定！虽然鲤鱼精姐姐是很可爱啦……但是我也很可爱呀，为什么会忘记我啦～难道是因为我没有鲤鱼精姐姐可爱吗？……才、才不会呢！我才是天下第一可爱的！",
				"传记二":"还有那个臭青蛙，本来还想好心帮他，在雨女大姐姐的面前说他几句好话，结果却欺负我，我怎么可能一直输啦，一定是他出千了！让我赢一把不好吗，明明只是打来玩玩而已，为什么要那么认真啦！大家明明都是水里的妖怪，怎么一点都不友好呀？像这样可是不行的哦～这样怎么能统治世界啦！",
				"传记三":"诶……统治世界？我刚刚说出来了吗？什么、什么呀，我什么都没有说，一定是你听错了，像我这么可爱，怎么会想着统治世界什么的这么可怕的事情啦，我只会想着怎么变得，更可爱哦～诶……什么？你要请我吃东西吗？好呀好呀……这是……刺身？呜哇！！你们每个人都好讨厌啊！！",
			},
			"jiuyys九命猫":{
				"式神介绍":"长着猫耳朵和猫尾巴的猫娘。连说话的时候都会在句尾加上「喵」。因此就算是生气起来，也毫无震慑力。可是性格却很难缠，要小心不要惹到她。万一惹到了的话，也许温柔地摸摸她的脑袋会有效哦……？毕竟无论多么暴躁，到底也还是可爱的小猫。",
				"传记一":"九命猫：没想到英明神勇帅气完美的本喵居然在这森林里迷路了!啊啊啊啊喵!本喵是绝对不会承认的!诶……那边的!等等呀喵!<br>九命猫：咳咳……这位先生，请问，这里要怎么出去呀喵?<br>铁鼠：……<br>九命猫：喂!!你这耗子!问你话呢喵!<br>铁鼠：给我一千两黄金的话，我就给你带路。",
				"传记二":"九命猫：喵!你看!本喵像是!有钱的!喵!吗!<br>铁鼠：咳咳!!!喘……喘不过气来了!!我带路!我带路!<br>九命猫：最开始这样不就好了，喵喵。<br>铁鼠：跟你这种暴力狂没法交流。<br>九命猫：嗯?<br>铁鼠：没……没啥!<br>九命猫：诶，你那个轮子好像很好玩呀喵。<br>铁鼠：哼，这可是我重要的赶路工具哦!",
				"传记三":"九命猫：给本喵玩玩！<br>铁鼠：不行……<br>九命猫：嗯？<br>铁鼠：请……请。<br>九命猫：喵哈哈哈哈哈哈果然很好玩！这个轮子以后就归我了！！！<br>就叫「猫车」吧！！！<br>铁鼠：等等……那对我来说很重要！<br>九命猫：啊！！喵呀！！！",
			},
			"huangyys荒川之主":{
				"式神介绍":"远在东方的荒川的守护者与主宰者。经历过岁月变迁、沧海桑田，荒川流域一直平静而繁荣。虽然他是个专制的暴君，却不得不承认他的实力足以称王。他却很少有笑容，也许无上的权力带给他的，并不是快乐。",
				"传记一":"荒川，源起甲武信岳，引入秩父山，经盆地，过长瀞溪谷，北行带大里郡、寄居町入关东平原。下游于熊谷转东南向，流入间川于川越市，过埼玉后再度东流，出隅田川，终入江户湾。",
				"传记二":"其中主宰，名为：荒川之主。坊间传说，荒川之主暴烈，性躁。故此荒川虽闹水凶猛，水中妖物亦不敢轻易作乱。更有云，荒川几度将竭未竭，全赖荒川之主术法所救。荒川岸旁以居之人，将之奉若神明，祈求保佑。",
				"传记三":"然则，荒川之主行事从来只凭喜好，未将此等供奉放入眼内，只将便利，予以施行水利之人。「吾乃荒川之主，只有心镇此一方水土，更无他意照拂旁人。独行水利者，善。」",
			},
			"guiyys鬼使白":{
				"式神介绍":"冥界的引路人，鬼使兄弟中的弟弟。身为弟弟，要比哥哥要沉稳可靠得多。工作和答应的事情都会好好地完成，为人严谨恭谦，滴水不漏。却唯独常常无视哥哥的示好和关心，还会习惯性地拒绝和否定哥哥。其实有些事情不用那么严谨也可以，不是吗？",
				"传记一":"人死后，灵魂就能从肉体中解放出来。我的工作是引导彷徨的灵魂前往冥府，也就是「灵魂的引渡人」。有时，人的灵魂会以各种各样的形式滞留在人间。执着于一方土地的地缚灵、心怀怨恨和嫉妒的怨灵、还有对世界仍有留恋而四处徘徊的孤魂野鬼……因为这些没有肉体的亡魂，人间和鬼界的分界线变得模糊了起来。所以我才必须将这些灵魂引导至冥府。有时候会出现一些不愿遵守规定的亡魂，无论如何都想实现生前的愿望。如果不如它所愿，它就绝对不会 前往冥府。对于这种亡魂，我向他们提出了一个条件。",
				"传记二":"那个条件就是，在我帮它完成了生前的遗愿之后，它也必须代替我、完成我的工作。这样的话，我就可以离开这里，重获自由。我就能踏上寻找记忆的旅途了。是的，要变成冥界的鬼使，就必须清除自己所有的记忆。但是，看来还是有例外……指派给我的继任人，不知道为何他还保留着自己的记忆。「喂喂，要把我们的回忆清除什么的这点我可是绝对不会同意的啊。」他总是用这种语气，说这种话。「你也是，别整天一副苦瓜脸了，我们还是像以前那样一起开开心心的吧，你说怎么样？」我有些困惑，为什么他对我这么亲近？不过令我惊讶的，并不是他那大大咧咧的态度。",
				"传记三":"我对他……不知为何，总有一种怀念的感觉。简直就像我们以前一直都生活在一起一样……让人觉得十分怀念。「我们就保持着现在这个样子也不错嘛？」看着他这幅散漫的样子，我没有办法放心把工作交给他，所以我现在也还跟他一起行动。但是，我们这样一起行动，我就总感觉要想起些什么。我总有种感觉，这个难以捉摸的男人将会是唤醒我记忆的关键。",
			},
			"tiaoyys跳跳妹妹":{
				"式神介绍":"肩扛狼牙棒的少女。一头粉红色的头发让她格外显眼。同样令人深刻的是她的毒舌。不过有时候，并不说着狠毒的话，就代表心里也是这么想的哦？对于「口不对心」的人，这也是一种温柔。想想也觉得挺可爱的，不是吗？",
				"传记一":"童女：小觉~跳跳妹妹让我来问问，你觉得跳跳哥哥怎么样?<br>觉：脑子有坑。<br>童女：他只是头上插了根箭嘛!那狸猫先生呢?<br>觉：酒鬼。<br>童女：那……河童呢?<br>觉：偷窥狂。<br>童女：那那那……鲤鱼精?<br>觉：笨蛋。",
				"传记二":"童女：小觉嘴巴真的好毒诶……<br>觉：爱哭鬼。<br>童女：诶!?<br>觉：我说你是，爱哭鬼。<br>童女：我……才不是爱哭鬼呢!呜呜呜!<br>觉：啊啊……怪不得晴明那个面瘫讨厌小孩子……吵死了……",
				"传记三":"神乐：觉也是，小孩子。<br>觉：你才是小孩子!你全家都是小孩子!<br>神乐：晴明、博雅……不是小孩子。<br>觉：你……<br>神乐：觉也是吵闹的小孩子。<br>觉：啊啊啊啊啊啊啊啊啊啊啊啊啊我不跟你说话了!<br>神乐：嗯，你真的好吵。",
			},
			"ciyys茨木童子":{
				"式神介绍":"十分强大的妖怪，一只手臂被鬼切砍下。一直追逐着酒吞童子。对他来说，酒吞童子既是唯一的友人，也是他心目中最欣赏的男人。但酒吞童子却对他的示好毫不在意，不知他何时才能再次和酒吞童子一起，在那森林中，对酒当歌，如同往昔。",
				"传记一":"六道众生，万物生灵都不过是这三千世界中的沧海一粟，妖怪亦然。一旦松懈，就会被其他的种族欺凌，玩弄，甚至屠戮。所以他们必须有一个领导者来指导他们。为了在这弱肉强食的世界中活下去，匍匐在强者的脚下吧！",
				"传记二":"他，就像一片混沌中的明亮灯塔。他实力超群，头脑聪明、还冷静谨慎得令人可怕！这就是我的挚友，酒吞童子！君临妖族巅峰的男人！但，令人恼火的是，如今的他却被两样东西冲昏了头脑。那就是女人和酒。",
				"传记三":"名叫红叶的女鬼，就是因为那女人，酒吞童子才会……！我要快点帮助他找回自己……从哪着手好呢？对了，安倍晴明！这个与红叶有关的人类阴阳师，只要找到他，想必酒吞童子一定能够取回失去的怒火与憎恨！",
			},
			"yaoyys妖狐":{
				"式神介绍":"带着面具的男子狐妖，手持折扇。自称「小生」，似乎十分风雅有礼。爱好特长都很多，也喜欢交谈。但是，真面目一般都和看上去不一样呢，不管是人、还是妖怪。还请多加小心。",
				"传记一":"七月二十日虽然我不能摘下自己的面具，但我知道，她就是我一直在寻找的命中注定之人!待字闺中的少女，就像含苞待放的花儿，让人不禁要期待绽放后的美。她眼角带泪，娇羞地欲拒还迎，那副模样真美啊。小生将她拥入怀中，在她的耳边呢喃轻语。在我的爱意中安眠吧，我的爱人。",
				"传记二":"七月二十一日果然命运是无法违背的，小生又遇到了我的的命中注定之人。她千娇百媚地为小生倒酒，并用深情的目光与小生对视。她用最美最狂放的姿态取走了小生的面具。啊啊，这简直就是命运的时刻，我嗅着酒与血液的芬芳，再一次，放纵自己沉沦于爱的深渊之中。在我的怀中，在我的爱意中安眠吧，我的爱人。",
				"传记三":"七月二十二日今天遇到的命运之人，和之前的都不一样……",
			},
			"guiyys鬼使黑":{
				"式神介绍":"冥界的引路人，鬼使兄弟中的哥哥。身为哥哥，常常需要弟弟的监督和提醒。虽然豪爽好战，但却敏锐冷静却和性格完全相反的弟弟相处得很好。除了对弟弟十分关爱和珍惜之外，也随时做好了为弟弟牺牲一切的准备，就算弟弟一直在无视和拒绝，他也毫不气馁。这就是哥哥的爱与坚强呢。",
				"传记一":"啊哈······你总是这么啰嗦，听你说话我都要睡着了。我是为了弟弟，才到这冥府这鬼地方来的。死后变成鬼还是变成别的什么，这种事情我才无所谓。「只要能够夺回弟弟的幸福，让我做什么都行。」正当我心里这么想的时候。你却出现在我面前。还都我说「你和以前不一样了，现在我无法放心地把工作交给你。」帮助我实现愿望的冥府鬼使，居然就是你。",
				"传记二":"真是的，这是哪门子的玩笑啊。你还是和以前一样，老是一副认真的样子，一点都没变。就不能偶尔也放松一下嘛。你对我说「只有实现了你的愿望，我就可以离开这里，重获自由」。知道啊，我早就知道了。我一开始就是这么打算的。你不该留在这种又窄又湿的地方。",
				"传记三":"我变成亡魂也无所谓。如果你能够回到人间、实现还没完成的遗愿的话，就算变成怪物，我也愿意。「你是······我的······」喂喂，你可别在意我的事情啊。我不是说过了么，只要是为了你，我什么都可以做，变成什么都！「哥哥」本来就应该为了弟弟，拼上一切的啊。",
			},
			"qingyys青行灯":{
				"式神介绍":"掌灯的女子，面容清丽。她最喜欢听怪谈故事、也喜欢说怪谈故事给别人听。她说的故事都十分有趣，绘声绘色。但是可不要听入迷了哦，如果一不小心连着听了一百个故事的话……不知道会发生什么事情呢。",
				"传记一":"哎呀，怎么了，你说想听我的故事？真的要听吗？你应该已经做好相应的觉悟了吧？如果你那么想听我说的怪谈故事，那么你就得做好听到日出的准备了。我最喜欢怪谈了，无论是说给别人、还是听别人说，都很喜欢。每天晚上，我都会寻找和我一样喜欢怪谈的人，把他们招待到屋子里面，和他们一起聊怪谈故事。屋里只有一盏亮着的油纸灯。",
				"传记二":"我记录了很多、很多怪谈故事，我反复地练习讲述这些故事，直到能够脱口而出。那真是最快乐的时光啊。日出来临就代表这快乐的长夜要结束了，我觉得那日出可真是讨厌啊。就这样度过了九十九个夜晚。可是我向人们说完「二口女」的故事、并告诉他们这是第九十九个故事的时候，有人突然劝告我不要再收集妖怪的故事了，因为这已经是「百物语」了。可我并没有把他的话听进去……",
				"传记三":"那些人突然害怕起来，慌慌张张地走掉了。我目送他们离开之后，然后拿出一面镜子，对着镜中的自己熟练地述说起一则怪谈。我对自己创作的怪谈故事感到很满意。说完之后，我正准备走出屋子、熄灭油灯。我想，这时外面应该已经是白天了吧。但是……在那以后，我就再也没有见过日出，而且也无法舍弃手边的纸灯了。我在黑暗中游荡，在有人述说怪谈的地方潜伏起来，细心地倾听着。然后，当他们说完第九十九个怪谈之后，我就向他们述说我为之骄傲的怪谈。我收获了许多怪谈，自己却变成了潜伏在黑暗中的妖怪……这就是「青行灯」的怪谈。",
			},
			"taoyys桃花妖":{
				"式神介绍":"桃花化成的妖怪，活泼温柔的少女。对她来说，樱是十分重要的好友。她见证了樱的爱情，也一直担心樱受到伤害。樱失去了爱人之后，她也作为友人、支持和保护着樱，并决定和樱共同生活下去。樱能得一友如此，实乃一件幸事。对于桃而言，能保护重要的友人，也很幸福。",
				"传记一":"我的名字是「桃花」，是桃花的妖怪。当我还是桃花树的时候，就经常被认成樱花。所以在化成人形的时候，特地变成了和「樱」完全不一样的样子。我不是讨厌「樱」哦!可是她居然爱上人类，她还是早点放弃比较好!因为，「想要和人类结成夫妇」什么的，怎么可能啦……!",
				"传记二":"樱她最后，也一定会因为这个受到伤害的。……诶?如果「妖怪能和人类结成夫妇」的话?我又不是什么不讲理的恶鬼，如果真的出现那种奇迹的话，我也会好好地、真心真意地祝福她。但这只是「妖怪能和人类结成夫妇」的假设而已!不过如果樱是真的想要和那个人在起的话，我也不得不认真起来了。因为樱她真的只知道一根筋地努力向前，那个笨蛋……!",
				"传记三":"我必须看好她，帮她善后。在危机关头，我要保护她才行!……嗯，我变成什么样都可以，没关系的。而且以后不跟樱在一起，我就再也不用担心被认错了，整个人都轻松起来了!……樱，你一定要幸福啊。",
			},
			"shouyys首无":{
				"式神介绍":"身首分离的妖怪，脖子处有一圈火焰。原本是人类，因为遭受了斩首之刑，现在才变成了这种奇怪的模样。他自己也很在意这一点，所以一直都在思考如何能看上去正常一些。其实，只要是妖怪，都会有哪里有点奇怪，人不是也一样吗？",
				"传记一":"手中提着自己的头四处张望，却无处可去。我的方向感很好，所以我不曾迷失过方向。无论是脚下的路，还是心中的路。战火纷飞的时代里，好男儿必须为家国而战。我义无反顾地投身战争，成为了军队的信使。我的方向感总是帮我快速地找到送信的目的地，将领们很快就记住了我——一个不会迷路的可靠信使。",
				"传记二":"于是我送信的内容，从普通士兵的家书，渐渐变成了军队的文书，甚至紧急的战报。这是对我最高的奖赏。将军说，只要我的信及时送到，我们的军队将无往不利。于是我不停地奔跑着，奔跑着，奔跑着。",
				"传记三":"可是为什么，我如此卖力地奔跑，我们还是输掉了战争?为什么，送对了地方的信，内容却不对?啊!!!!!延误了战机，就必须有人负起责任。我被赶出了军营。于是，我提着自己的头，不知道前方应去何处。",
			},
			"yys_大天狗":{
				"式神介绍":"面容清秀，背上长有翅膀的大天狗。擅长吹奏笛子，他的笛声能使人心情平静。性格固执而冷傲，因此也很容易被人利用、误入歧途。但实际上是个很有原则、也非常正直的妖怪。一旦认定了自己的主人，就会十分忠心。",
				"传记一":"我就是正义的化身。手刃过无数恶鬼，还曾与同样出身高贵的人类皇族武士并肩作战过。与怪物搏斗之人，必须要时刻提醒自己不要成为怪物。但是我，我要让所有人都臣服于我，我要给世界带去新的秩序。",
				"传记二":"为此，我需要力量，更多的力量！黑夜山的骤变，引诱着我那颗渴望变强的心，我心中不断地骚动着。那个男人，他一定在那个地方一边居高临下地笑着，一边等着我去见他吧。「成为我的仆人，为我效忠吧！」「我知道你想要什么，我会把比你想要的还多的力量给你！」",
				"传记三":"「然后，我们一起去完成大义吧！」我听到他对我这么说。我看到他站在山顶上，背后的空气中有一道裂缝。就像被刀切开一样，从那里涌出的无尽的阴界的力量。我想象着他对我所说的那副图景，激动得浑身都在颤抖。是的，这就是我想要的，全部！",
			},
			"yys_酒吞童子":{
				"式神介绍":"传说中站在鬼族顶点的妖怪。曾经冷静而残酷，具有王者风范。但现在却整日借酒消愁，除了酒，再也没有什么能够引起他的兴趣。他所钟情的红叶也对他毫无好感，不过逃避终究会有结束的一天，昔日的酒吞童子总会归来。",
				"传记一":"虽然人们常说「喝酒伤身」，但本大爷不这么觉得。对本大爷来说，「酒治百病」。只要一起喝一杯，就能知道对方是什么器量。看看那些不沾酒的家伙，简直是无聊透顶！阎魔那混蛋还留在另一个世界啊？还真亏她在那种阴湿狭窄的地方还能呆的住啊。大天狗那个笨蛋，还在追随着那个蠢货吧？也是不像样子啊。",
				"传记二":"剩下的就是荒川主，听说那家伙也加入了大天狗一伙吧？那可真是够闲的。说到底，都是那个安倍晴明吧。那个渺小的人类，居然掀起了这么大的风浪。那家伙身边也全是怪胎……八百比丘尼到底在想什么啊。晴明分离出来的黑影……暂时先叫他「黑晴明」吧。那东西究竟是什么啊？就连本大爷也完全搞不懂。",
				"传记三":"看来在这一系列事件的背后，还有我不知道的阴谋啊。一想起鬼女红叶的事情，本大爷就一肚子火！看来在这乱世，本大爷也不能只考虑自己的事情了。烦死了，之后的事情之后再想好了。",
			},
			"yys_辉夜姬":{
				"式神介绍":"沉睡在竹节中的少女。偶然才被人们发现，因为相貌清丽、性格温和，而受到大家的疼爱和照顾。平时有些沉默不语，也常常一个人待在房间里。",
				"传记一":"我被困在这一小节竹子里，在这片竹林里，一直、一直沉睡着。有一天，一阵突兀的笛声将我唤醒。我从梦中醒来，听着这陌生而清冷的声音，心里却变得温暖了起来。原来这竹林中，除了我，还有其他人在啊……从那天起，我不再是独自一人，还有那笛声一直陪伴着我。它有时在夜晚响起，有时是白天，笛声将我从梦境中唤醒，又伴我入睡。",
				"传记二":"想见见那个吹笛子的人啊……那么美的笛声，一定是个很温柔的人吧。不过到底是什么人，会一直待在竹林里呢？难道竹林中有他的朋友吗？还是说，他和我一样，也被困在了这竹林中呢？我有很多很多问题想问他，有很多很多话想和他说。终于，我从竹子里被解放出来了。我期待地看着四周．竹林中却没有任何人的身影。但是我能感觉到，他一定就在这竹林内，那熟悉的、温柔的氛围，他就在我的身边。可我没有来得及找到他，就被带离了竹林。",
				"传记三":"之后啊，我一直，一直被关在房间里。虽然大家都对我很温柔，但我还是会想念那片竹林，和竹林中那吹笛子的人。可是我到最后，都不知道他到底是谁……真想见到他，对他说一句，“谢谢”。还有，“你的笛声真好听”。",
			},
			"yys_玉藻前":{
				"式神介绍":"深不可测的大妖怪玉藻前，拥有绝美的容颜和强大的妖力。与同是狐妖的葛叶有着深厚的友情，曾与葛叶定下某种约定。虽然常以盛装女子的形象出现，其真实面目并非如此。",
				"传记一":"给葛叶：<br>见信如唔。……突然不知道说什么好了，那我就想到哪里写到哪里吧，还请你不要介意。葛叶，我见到你的孩子了。宫廷里的人们都在谈论他，我想替你去看看那孩子，毕竟我答应过你要好好照顾他。但那孩子，一直以守护京都为己任。他那么单纯，一定会与我为敌的。这应该就是你所说的命运吧。",
				"传记二":"最近宫廷中来了一位大人物，他见到我的时候，问我为什么要打扮成女人的模样。看来这副美貌，并不能蒙蔽所有人呢。你的孩子，长得十分像你，我好高兴，葛叶。在那孩子面前，在那副与你相似的面孔面前，我不想扮演另一个人。我会以我原本的姿态去见他。去见他，就如同见到了你。",
				"传记三":"葛叶，原谅我。我不得不给你的孩子出一个难题。事实上，连我自己都不确定这难题是否有答案，答案又是什么……不过，如果是你的孩子，一定能给我一个满意的答案。你一直以那孩子为骄傲呢。我也一直以你为骄傲，葛叶。你所说的命运，哪怕一次也好，我想要战胜它。为我祝福吧，葛叶。",
			},
			"yys_妖刀姬":{
				"式神介绍":"手持巨大妖刀的少女。原本是人类，却不知为何与妖刀相互依存。平时看上去有些阴郁，也很少会和他人说话。但战斗时却会变成另一个人，残暴又恋战，没有人能躲下她的妖刀，刀下亡魂累累，平静下来后，她又会因伤害了太多人而自责。有时候“强大”并不是一件好事，必须有承受和控制这份“强大”的能力才行。",
				"传记一":"你也看到了吗……？当我遭遇危险的时候，就会变成那样……变成兵器，这把妖刀。很可怕，对吧？「强」的话，会伤害别人；「弱」的话，会被人伤害——「力量」就是这样的东西。「强者」和「弱者」，到底哪一边比较幸福呢？你也不知道答案吗？……也许没有谁知道吧。",
				"传记二":"人类和我完全不一样，他们很「弱」。但我却觉得有些熟悉。我平时很少说话，也不知道要怎么诉说。可是我想试着和他们交谈，也想试着靠近他们，还想试着去理解他们。也许那么做之后，我就能知道为什么我会觉得那么熟悉了。但我却不能靠近他们。……很想，可是不能。",
				"传记三":"虽然不想遭遇「危险」，才会变成那个样子。不过对许多人来说，我才是「危险」。为了保护自己不受「伤害」，而「伤害」他人……就是我的宿命。所以，不要和我交谈，不要理解我，也不要靠近……如果你不想，被我「伤害」的话。善良？……不，我想我并不是善良。要说的话……或许「弱」的人是我也说不定只有「弱者」，才会害怕被「伤害」并为此不惜去「伤害」其他人。我好像说的太多了，下次再会。……或许不再会对你来说，反而比较好。那么还是，后会无期吧。",
			},
			"yys_花鸟画":{
				"式神介绍":"花鸟卷，相传由一位天才画家绘成。他绘制它的时候，倾注了毕生心血。画成后，他日日留在书房内，与画相伴。但画卷终非活物，少女无法回应画家。他便心含幽怨，郁郁而逝。终于画卷有了灵气，变为活物。而他却早已化为尘土。",
				"传记一":"画中少女，青丝如瀑，花鸟环绕，点点樱唇，盈盈眼波，似有邀君入画之意。久视之，不觉心神恍惚，身陷云雾，转瞬之间，已至画中，画中鸟语花香，远山如黛，天水一色。有溪潺潺，碧波青滟，清冽见底。其中游鱼十余头，时静时动，自有一番趣致也。",
				"传记二":"夹岸而行，少女声如铃，放歌遂溪水。莺莺燕燕相闻，花花草草相生。顾盼而含羞，笑而不语。曲调将半，天色渐晚，转身不见少女，虽憾而无悔。沿溪而寻，得见一山，遂越山，自画而下，复归人世。",
				"传记三":"与画中人对望之，只见少女笑语嫣然，眉眼脉脉，宛如初。时人有云，幻由心生，喜静者便见寒潭幽竹；心怀惧者，便生愚鬼刹！心中万象，眼前千景。幻境所遇种种不过心之所向也。",
			},
			"yys_御馔津":{
				//"式神介绍":"暂无",
				"传记一":"在出发前，那位大人曾问我，「平和美好的京都已经不在了，你所要前往的地方是人间地狱，你做好准备了吗 ？」 。我看着他威严而冷酷的面庞，坚定地答道，「我明白。」可我的手心却忍不住出了汗、连弓箭也差一点滑落。那位大人叹了叹气，说，「如果有危险的话，你一个人逃掉吧。你的使命是在一切结束后出现、给这片废墟重新带来生机和福祉。在那之前，你只需要偷偷藏起来、保全自己就可以了。」我正要说话，他又接着说，「必要的时候，我会保护你的。」我握紧了手中的弓，沉默地点了点头。",
				"传记二":"当我的脚一踏上京都的土地，人们的哀怨和思念像箭雨一般向我袭来。我被人们的情绪和祈愿包围着，几乎要无法承受这份重量。那位大人居高临下地对我说，「对你来说还是太重了吧，一下子接受这么多人的心意。」<br>「~  ~ 是有些辛苦，不过这是我的工作，我会慢慢化解人们心中的绝望的。」我勉强支撑着，「温柔与恩惠一定能给人们带来幸福，这就是我来到这里的使命 ~  ~」<br>「温柔与恩惠带来的不是幸福，」那位大人冷漠的声音就像结了冰，「在这种人间地狱，只有残酷无情的制度才能保证暂时的秩序。你也感受到了吧 ？ 人们心中的想法，可不是对未来的祈愿，而是对现状的仇恨、绝望、甚至是报复之心 ~  ~」",
				"传记三":"「虽然 ~  ~ 虽然 ~  ~」我鼓起勇气，向那位大人诉说我的心愿，「虽然京都的人们现在一时被心中的阴暗所蛊惑，但我相信 ~  ~」<br>「胆敢反驳我的话，」他走近我，「不能看见命运轨迹的你永远不会知道你自己有多无知。别让人类虚伪的温柔蒙蔽了你的理智和判断。」<br>那位大人的声音变得有些低沉和沙哑，他说，「人间 ~  ~ 一直都是地狱、无论在哪里、无论是什么时代。」<br>那位大人 ~  ~ 原来他所处的地方一直都是地狱吗？",
				"传记四":"到了第七天清晨，屋里已经没有了大天狗的身影。七天前，为了让那孩子安心疗伤，我欺骗他说，作为对他大闹神社的惩罚，封印了他的翅膀，必须在这里干活七天才能复原。<br>他当时怒而不言，扭头走进屋子，只留下了一个重重的关门声。<br>「虽说是命令他打扫院子，但却每天都搞得一团糟。」我带着福福走向后院，「不知道今天又是怎样地大闹了一场呢？」<br>可当我拉开后院的门时，映入眼帘的却是无比整洁的庭院。红黄的落叶全被扫到了角落上，砖瓦如白玉，与前几日狂风过境般的凄惨景象完全不同。<br>我怔怔地看着这一切，终是不自觉地笑了起来。「果然要做的话，还是能行的嘛。」",
			},
			"yys_小鹿男":{
				"式神介绍":"半身是人，半身是鹿的妖怪。从小便是孤儿，父母被人类所害。孤独的他，却没有放弃寻找伙伴的信念。有了伙伴之后，应该会比一个人的时候，要轻松很多吧？同伴可是非常重要的哦，一定要好好珍惜。",
				"传记一":"我从小就是孤儿，养育我的父母，就像脚下的山川林地一样，在我出生不久便被长相奇怪直立行走的生物毁坏了。后来在随着族人迁徙的过程中，身边的同伴越来越少，最后只剩下我一人……在溪边饮水的时候，我会望着自己的影子，我这样告诉自己，我要变得更强才行。「一太郎哥哥，这边有个落单的小鹿，老规矩，三太郎你先把它绊倒，我趁机割伤……」",
				"传记二":"「等等，二太郎！你还记得家训第二条是什么吗？！」「不能恃强凌弱！」「亏你们还记得！不枉祖爷爷太爷爷爷爷大伯父二伯父父亲小叔……「一太郎哥哥！他在往这边看了！」",
				"传记三":"其实，我从一开始就注意到了他们，也一字不漏地听到了所有对话，我有足够的时间和信心跑掉，或者迎头将他们撞翻……但我都没有做，而是向着他们走了过去，我能看到藏在斗篷后面的小眼睛在不安地打量着我。我坚信，这次相遇，一定会改变我的一生。",
			},
			"yys_雪童子":{
				"式神介绍":"雪化成的妖怪，生活在遥远的雪国。冬天来临之时会来到孤独的人们的家中，给他们带去欢笑。雪童子原本在春天到来之时就会消失，但却因为沾染了玉藻前的妖气，而获得了长久的生命。",
				"传记一":"当你看到这封信的时候，我应该已经不在了吧。其实我很久以前就知道这里，因为这里也是我的哥哥姐姐们最后待过的地方。他们先是化成了水，落在窗台和屋前；太阳暖暖地照耀着他们，于是他们又慢慢地升起、变成了空中的云朵。云朵最后化作雨，回到了大地、回到了他们曾经停留过的地方。我想，我一定也会和他们一样。",
				"传记二":"我曾经很疑惑，为什么哥哥姐姐们要离开寒冷而安稳的家园；为什么他们明明知道自己会消失，还是选择来到这里。当我看到你的笑容的时候，我就知道自己会和他们一样，做出相同的选择……你的心，散发着温柔的光芒；就算我会消失，我也想要陪伴你。现在终于到了告别的时刻……",
				"传记三":"虽然和你在一起的时光很短暂，但我一直都在看着你哦。也许之后也会有令人难过的事情发生，但也请你一定无论如何也要坚持下去。抱歉，之后不能继续陪伴你了。但是，就算只能陪你一个冬天，我也觉得非常、非常高兴。",
			},
			"yys_彼岸花":{
				"式神介绍":"居住在冥界的妖怪。外表美艳动人，性格却难以捉摸。她美丽的身影常常出现在三途川边的彼岸花海中。虽然她曾经在人界生活过，但却很少提起自己的过去。",
				"传记一":"呵呵，人类总是把誓言和承诺挂在嘴边。如果你真的如你所起誓的那样，那就先和我一起下黄泉吧。不，我不是开玩笑，我是认真的哦。我有说过自己是人类吗，看来你是误会了什么呢……我住在黄泉的河岸，那里有一片彼岸花海。从春天到夏天，从秋天到冬天，四季盛开的花朵，就像火焰一样，染红了整个河川。那可真是十分壮观的景象呢……不过人们只有在死后，才能看到这盛况了。",
				"传记二":"害怕了吗？不过这也是自然的吧，人类啊，既怕「死亡」、又怕「妖怪」，是非常软弱的生物。但是我曾经认识一个人，他可是和其他人类不一样。是的，那是个又勇敢、又坚忍的人类。他对我起誓，他毫不畏惧，最后也和我一起，去了黄泉，看到了那片美丽的花海。",
				"传记三":"你问那个人现在在哪里吗？呵呵……对了，你看不见他。他就是这里——在我的身体里哦。他成为了我的花泥，变成了我的养分，流入我的身体，给我提供了源源不断的能量。那真是个意志坚定的人呢……嗯？你怎么不说话了……呵呵，你也想成为我的养分吗？",
			},
			"yys_一目连":{
				"式神介绍":"沉默而寡言，用头发遮住了一只受伤的眼睛的青年。陪伴着他的只有他身后的龙。曾是守护一方水土的风神。而如今却堕为妖怪。到底是什么让他放弃了作为神明的高贵？或者又是，神放逐了他？",
				"传记一":"从这里能看到森林中有一根腐朽的柱子，对吧？那里以前有一座神社。供奉着风神的、十分壮丽的神社。有一次，连续几日风雨不断，洪水将要淹没山下的村子。村民们纷纷来这里祭拜，祈求神明能够保护他们。不过风神掌管的是风，而不是水，原本是无法抵御洪水的。但风神还是强行让洪水改道，最终保护了这座村子。代价是牺牲了自己的一只眼睛。当灾难过去，人们却逐渐忘记了这位神明，他们慢慢地都离开了这里，神社也渐渐地放弃了。",
				"传记二":"不过神明并没有忘记自己的信徒。他仍然每天都会在这条路上、这座神设边，等待着信徒的到来。可是却没有人来，一个都没有。神明日复一日，年复一年地等着，直到路上的石阶长满青苔，神社里落满了灰尘。原本壮丽的神社，也只剩下这一根腐朽的柱子了。神明独自一人，在这里度过了漫长、漫长的岁月。最终没有信徒的他，失去了作为神的资格，他本来应该孤独地消失在这森林里。",
				"传记三":"可神明却选择了堕为妖怪。堕为妖的风神，无法再给他的子民带来福祉。但他却仍然希望，用自己的力量，继续庇佑大家。即便是作为妖怪，他也会继续守护在这里。故事说完了。……原来我这几百年的岁月，不过只是这样一个简单的故事。",
			},
			"yys_山颪":{
				"式神介绍":"有兽名豪猪称山颪，周身遍布毛针，此妖怪或因名形相符故得此名于梦中思于此。",
			},
			"yys_两面佛":{
				"式神介绍":"一面是风神，另一面是雷神的两面佛，在力量上足以与神明抗衡。因此，也十分蔑视凡人。但往往最不可能打败自己的对手，才是最可能的那一个。就算力量强大，也不可掉以轻心。",
				"传记一":"风神：吾等既为神明。<br>雷神：岂会召之即来。<br>风神：吾等若听你召唤，你必付出代价。<br>雷神：吾等无所畏惧。",
				"传记二":"风神：等等……你该不会是……<br>雷神：就是他!!就是他!!<br>风神：可怕的阴阳师!!<br>雷神：将吾等封印了百余年!!!",
				"传记三":"风神：你叫做，不，您曾经的尊名是……<br>雷神：尊、尊名……是…………<br>风神：啊!!!您是!!!!<br>合声：安倍晴明!!!!",
			},
			"yys_阎魔":{
				"式神介绍":"冥界的掌管者，同时也是审判之神。无论何时都极具威严，与之相对的，也是她那足以配得上这份威严的能力。虽然拥有能看透一切灵魂的「阎魔之目」，但她也有看不透的东西呢，或者说，不愿动用自己的能力去看的东西呢。",
				"传记一":"我的阎罗殿，真是个无聊的地方啊。里面只有一对不可靠的兄弟，一个古怪的锅子，跟一座冰山。那对兄弟眼里只有彼此。锅子被我欺负怕了，别说来见我了，连找她都找不到。那就只好欺负欺负那座冰山来找点乐子了。但是这冰山真是最无聊的那一个。无论我怎么欺负他，他都永远是一副样子。真是的，就不能稍微有点变化吗？",
				"传记二":"冰山喜静？那就抓个粗野山童回来与他作伴。冰山沉默不语？那我就赏只叽叽喳喳的小鸟陪你聊聊天？啧，这鸟可真是够叽叽喳喳的……冰山喜怒不形于色？那我命令你笑，你从不从？好吧，这强颜欢笑一点也不适合你，白费了一张漂亮的脸……算了！真是无趣。",
				"传记三":"刚刚才打算不理他，他的脸上就愁云密布的……等等！你要去哪里？哈哈哈哈哈这冰山太有趣了！终于，这里也不算太无聊了。快来帮我想想，今天要怎么捉弄那冰山？不折腾折腾他，怎么对得起我等他开口等的这几百年岁月呢？",
			},
			"yys_雪女":{
				"式神介绍":"浑身冰凉的雪之少女，似乎一碰就会被冻住。一举手便可呼风唤雨，一投足既能覆雪结霜。而她却从来都不哭不笑，不悲不喜。她的内心是否也跟她的外表一样冰冷？没有人知道她过去曾经历过什么。不知道有没有人能找到化开她心中的层层冰霜的办法呢。",
				"传记一":"九月二十三日雪雪原的雪永远不会停止，今天也是，和昨天一样。不过今天，我在雪原里发现了一个瘦弱的人类。他一步、一步地向前拔步，最后倒在了茫茫大雪之中。为什么在这大雪纷飞的时候，他还要到雪原来？我忍不住好奇了起来。九月二十五日雪今天，那个人醒了。不过他也不算完全醒来，也仅仅是艰难地睁开了眼睛而已，在这冰天雪地之中。意外的是，他看到我的时候一点都没有害怕。[请问，你知道哪里有雪莲吗？]他突然这么问我。我回答了他。因为我很好其他想做什么，就和他一起去了。我没有说谎，我只是好奇而已。",
				"传记二":"九月二十六日雪人类真的太脆弱了。如果没有我跟着他、呼风唤雪为他开路，他绝对不可能走到这里来。不过遗憾的是，我能为他做的也仅仅只有这些而已。他的病痛……我没有办法治好。九月二十七日雪他应该就快死了吧。九月二十八日雪他都快要死了，可还是坚持要去采雪莲。如果他死了，雪山之巅就不再是净土了，我还是把他带到别的地方埋葬他吧。",
				"传记三":"九月二十九日雪他果然真的死了。但是他不让我把他埋在别的地方，只是请求我将雪山之巅的雪莲带到他妻子坟前。为了这样一个无聊的承诺，他居然付出了自己的性命。我是感受不到温暖的，但是这个男人递过来的雪莲，却让我觉得手心烫得就要燃烧了起来。连我的心都要融化了……为什么人类会喜欢这种感觉呢？",
			},
			"yys_座敷童子":{
				"式神介绍":"身为能为人们带来福运的座敷童子，却受尽了不公与磨难，脸上也很少会有笑容。终于遇到了疼爱她的「母亲」。可她又选择了错误的方式来报答「母亲」。所幸还有很长的时间，让她去思考正确的生活方式。也有了友人，能与她分担这份迷茫。",
				"传记一":"我是座敷童子。藏到人们的家里，给他们带去财富和幸运，就是我的职责哦。所以呀，大家都拼命想把我招到家里面去。像是多准备一个小孩的房间啦、在地板下藏钱什么的，人们会这么做，全都是为了引起我的兴趣。不过最后，那些人都只是为了自己的幸福。而我的感受，他们根本就不在乎!「他们想要的，是我带去的好运，并不是我!」……就是从那个时候，我有了这种想法。",
				"传记二":"「啊呀，真是可爱。」她一边对我这么说，一边笑得连脸上的皱纹都堆在一起了。这种笑脸，我太熟悉了。她肯定是想要把我留在家里，才故意对我笑的。「你又来啦，我好高兴。给，要吃点心吗?」哼，像这种虚伪的笑脸，我才不会被骗呢!……不过我喜欢零食，既然你一定要给我，那我就收下好啦。「你已经是我们家的孩子了呢。」你这种谎话，我才不会相信呢!不过……要是真的能见到我的母亲，我是不是也有这种心情呢?哼，我只是想象了一下而已。",
				"传记三":"「咳，咳咳……啊，你在帮我拍拍背吗?谢谢你。」她的身体越来越不好了……怎么会这样!?我明明给这户人家带来了这么多好运!为什么我不能治愈疾病，消除饥饿!看来我是没办法化解这场灾祸了，但是，我可不会就这么什么都不反抗的!母亲她……她就由我来守护!",
			},
			"yys_椒图":{
				"式神介绍":"坐在贝壳之中，人身鱼尾的少女。对人间的一切都充满了好奇心，似乎十分喜欢这个世界。不过这个世界其实并没有她想的，那么美好和充满惊喜。但也正是这样，才会在遇到美好的时候，觉得格外惊喜呢。",
				"传记一":"呐呐~你听说了吗?最近人类那边的世界，好玩的东西越来越多了。有水一样的胭脂，有会闪闪发光的米粉，还有一条一条的口脂!我真的好想去看一看呀。可是，我家住在这么远这么远的深海里，根本……出不去。谁都好，带我离开这牢笼般的深海，带我去看看人类的世界吧?",
				"传记二":"到您，真的太幸运了!我以我的名字作交换，成为您的侍从，请带我到外面的世界看一看吧!但是，为什么您带我来了，又离开了?是我不够听话吗?是我太喜欢摆弄胭脂?还是我不够强大，不能帮助您了?",
				"传记三":"我会忍住的，不会总想着要新的玩具。我会乖乖的，客人来时不会躲进壳里。我会听话的!当您需要时，绝不吝啬我的力量。求求您，不要抛弃我。还有，我找不到我的主人了，也找不到回家的路。您可以，收留我吗……?",
			},
		};
		yys_characterIntro['yys_茨木童子']=yys_characterIntro['ciyys茨木童子'];
		yys_characterIntro['yys_青行灯']=yys_characterIntro['qingyys青行灯'];
		yys_characterIntro['yys_荒']=yys_characterIntro['huangyys荒'];
		yys_characterIntro['yys_荒川之主']=yys_characterIntro['huangyys荒川之主'];
		for(var i in yys_characterIntro){
			var str='<table style="width:100%;" border="1">';
			for(var j in yys_characterIntro[i]){
				var str1='';
				for(var x=0;x<j.length;x++){
					if(x==0){
						str1+=j[x];
					}else{
						str1+='<br>'+j[x];
					};
				};
				str+='<tr><td width="10%" style="text-align:center;vertical-align:middle;">'+str1+'</td>';
				str+='<td width="90%" style="text-align:left;">'+yys_characterIntro[i][j]+'</td></tr>';
			};
			str+='</table>';
			yys.characterIntro[i]=str;
		};
		if(lib.device||lib.node){
			for(var i in yys.character){yys.character[i][4].push('ext:扩展ol/'+i+'.jpg');}
		}else{
			for(var i in yys.character){yys.character[i][4].push('db:extension-扩展ol:'+i+'.jpg');}
		}
		/*for(var i in yys.character){
			if(yys.character[i][4]!=undefined&&!yys.character[i][4].contains('kzol_me')) yys.characterSort.yys['kzol_yys_fei'].push(i);
		};*/
		return yys;
	});
	lib.group.push('ssr');
	lib.translate.ssr='SSR';
	lib.group.push('sr');
	lib.translate.sr='SR';
	lib.group.push('r');
	lib.translate.r='R';			
	lib.config.all.characters.push('yys');
	if(!lib.config.characters.contains('yys')){
		lib.config.characters.push('yys');
	}
	lib.translate['yys_character_config'] = '阴阳杀';
}