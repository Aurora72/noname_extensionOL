window.func=function(lib,game,ui,get,ai,_status){
            game.import('character',function(lib,game,ui,get,ai,_status){
                var yys = {
                    name: 'yys',
                    connect:true,
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
							global:'yys_续命2',
						},
						"yys_续命1":{
							marktext:"魂",
							intro:{
								content:'cards',
							},
						},
						"yys_续命2":{
							group:["yys_续命2_1","yys_续命2_2"],
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
										var card=player.storage.yys_续命1[0];
										player.discard(card);
										ui.discardPile.appendChild(card);
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
										var card=player.storage.yys_续命1[0];
										player.discard(card);
										ui.discardPile.appendChild(card);
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
										player.storage.yys_花海1=true;
										player.chooseCard('h',[1,game.countPlayer(function(current){return current.isTurnedOver()})+1],get.prompt('yys_花海')).set('ai',function(card){
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
										for(var i=0;i<cards.length;i++){
											ui.discardPile.appendChild(cards[i]);
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
									ui.discardPile.appendChild(card);
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
										ui.discardPile.appendChild(card);
										player.storage.yys_风破.remove(player.storage.yys_风破[0]);
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
								ui.discardPile.appendChild(card);
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
										ui.discardPile.appendChild(card);
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
										var card=get.cards(1)[0];
										player.$give(card,player,false);
										player.storage.yys_逐流.push(card);
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
										return player.storage.yys_逐流.length>0;
									},
									content:function (){
										var card=player.storage.yys_逐流[0];
										player.discard(card);
										ui.discardPile.appendChild(card);
										player.storage.yys_逐流.remove(card);
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
								return event.card&&event.card.name=='sha'&&player.storage.yys_逐流.length>0;
							},
							check:function (event,player){
								return get.attitude(player,event.player)<0;
							},
							content:function (){
								var card=player.storage.yys_逐流[0];
								player.discard(card);
								ui.discardPile.appendChild(card);
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
								game.log(player,'冰冻了');
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
											player.storage.yys_狩界.push(card);
											player.syncStorage('yys_狩界');
										}else{
											ui.discardPile.appendChild(card);
										};
									};
									game.log(player,'将',result.links,'置于其武将牌上');
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
									player.$throw(result.links[0]);
									ui.discardPile.appendChild(result.links[0]);
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
									ui.discardPile.appendChild(cards1[i]);
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
									player.draw();
								};
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
								player.$throw(player.storage.yys_醉怒);
								for(var i=0;i<num;i++){
									ui.discardPile.appendChild(player.storage.yys_醉怒[i]);
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
usable:1,
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
ui.discardPile.appendChild(ec[0]);
ui.discardPile.appendChild(ec[1]);
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
return ((game.countPlayer(function(current){return get.attitude(current,event.player)&&current.countCards('h',{name:'tao'})>0})==0||event.player.countCards('h',{name:'jiu'})==0)&&event.source&&get.attitude(event.player,event.source)<0)||
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
						'yys_雪走_info':'当你造成伤害后，你可以令目标冰冻（复原武将；倒置武将牌；无法横置；回合开始前选择跳过摸牌阶段或出牌阶段，否则流失一点体力，然后解除冰冻）',
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
						'yys_花鸟画':'花鸟画',
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
            yys轻盈_info:"当你获得牌后，你可以将之弃置并将这些牌的复制牌置于牌堆底，然后你摸等量的牌（每阶段限一次）",					
            huyys蝴蝶精:"蝴蝶精",					
            bingyys兵佣:"兵佣",	
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
                if(lib.device||lib.node){
                    for(var i in yys.character){yys.character[i][4].push('ext:扩展ol/'+i+'.jpg');}
                }else{
                    for(var i in yys.character){yys.character[i][4].push('db:extension-扩展ol:'+i+'.jpg');}
                }
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