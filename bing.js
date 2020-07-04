window.func=function(lib,game,ui,get,ai,_status){
	game.import('character',function(lib,game,ui,get,ai,_status){
		var bing={
			name:'bing',
			connect:true,
			character:{
				"bing_羽林卫":["male","wu",4,["bing_顽强","bing_格挡"],['shibing','des:吴国的宫廷禁卫部队，拱卫京城的，各以左部督和右部督领兵。']],
				"bing_毒齿材官":["male","wu",3,["bing_毒箭","bing_肉搏"],['shibing','des:由山越降兵组成，近身肉搏悍勇异常，远程常以毒箭攻击，令敌军闻风丧胆。']],
				"bing_宿卫虎骑":["male","wu",4,["bing_践踏","bing_虎骑"],['shibing','des:太史慈编练，常从征讨，骁果敢战，为骑兵中坚力量，后一部分调入中央禁军。']],
				"bing_丹阳兵":["male","wu",4,["bing_配发","bing_重装"],['shibing','des:丹阳出精兵，由孙策之弟孙翊编练，骁勇善战，常为军锋。']],
				"bing_蛟鳄军":["male","wu",4,["bing_战船"],['shibing','des:周瑜编练的强力水军，水战时常潜至敌船下将其凿沉，陆战亦不逊色。']],
				"bing_白耳兵":["male","shu",4,["bing_绣敌","bing_坚守"],['shibing','des:蜀国的精锐部队，也是刘备麾下的近卫军，归陈到统帅，此军曾多次救刘备于危难之时，立下赫赫功勋。']],
				"bing_夜叉行":["male","shu",3,["bing_夜袭","bing_偷袭"],['shibing','des:刘备编练的偷袭部队，使用铁剑与钩镶。常夜袭敌人，故名，极为轻捷勇武。']],
				"bing_西凉军":["male","shu",3,["bing_兵枪","bing_急行"],['shibing','des:由凉州降羌组成，为强力重甲骑兵，最精锐勇猛的骑兵部队之一。']],
				"bing_无当飞军":["male","shu",3,["bing_连射","bing_死战"],['shibing','des:王平为首任统领，飞军不愧南中勇士的威名，英勇善战，在蜀汉的历次战争中都有着出色的表现。']],
				"bing_青州兵":["male","wei",4,["bing_围攻"],['shibing','des:曹操挑选黄巾降兵中最精锐的一部分组成，战斗力极强，是主力中坚兵种。']],
				"bing_虎豹骑":["male","wei",4,["bing_追斩","bing_还徵"],['shibing','des:曹纯编练，皆着黑盔黑甲，骑黑马，以黑布裹面，使用眉尖刀，为三国骑兵部队中最骁勇。']],
				"bing_虎卫军":["male","wei",4,["bing_万军","bing_拼命"],['shibing','des:曹操心腹亲兵，历典韦、许褚属，步兵中最为骁勇无畏，作为中坚出征时屡立战功。']],
				"bing_八百死士":["male","wei",4,["bing_突击","bing_血战"],['shibing','des:张辽夜募敢从之士，得八百人，椎牛犒飨将士，八百破十万大军，从得以威震逍遥津。']],
				"bing_新募兵":["male","qun",4,["bing_逃战"],['shibing']],
				"bing_白马义从":["male","qun",3,["bing_良驹","bing_骑射"],['shibing','des:瓒好白马，屡乘以破虏，虏呼为‘白马将军’。故选精锐三千，尽乘白马，号‘白马义从’，以实禁卫也。']],
				"bing_先登死士":["male","qun",4,["bing_远射","bing_精弓"],['shibing','des:绍令麹义以八百兵为先登，强弩千张夹承之，绍自以步兵数万结阵於后。义久在凉州，晓习羌斗，兵皆骁锐。']],
				"bing_大戟士":["male","qun",4,["bing_长戟","bing_精甲"],['shibing','des:属于重装“精”步兵，归张郃统帅，是袁绍部队中的精英部队，每个士兵都配备着大戟和重甲。']],
				"bing_陷阵营":["male","qun",4,["bing_血拼","bing_攻破"],['shibing','des:全军仅有七百余人，各各骁勇善战，装备配制精良。陷阵营曾经击败过拥有关张的刘备，凶猛可见一斑。']],
				"bing_黄巾军":["male","qun",4,["bing_惊鸯","bing_鬼火"],['shibing']],
			},
			skill:{
				"bing_顽强":{
					trigger:{
						player:'dyingBefore'
					},
					direct:true,
					filter:function(event,player){
						return player.countCards('he')>0;
					},
					content:function(){
						"step 0"
						player.chooseCard('he',get.prompt('bing_顽强')).set('ai',function(card){
							if(card.name=='tao'||card.name=='jiu') return -1;
							return 1;
    					});
						"step 1"
						if(result.bool){
							player.logSkill('bing_顽强');
							player.discard(result.cards[0]);
						}else{
							event.finish();
						};
						"step 2"
						player.judge(function(card){
							if(get.color(card)=='red') return 2;
							return -1;
						});
						"step 3"
						if(get.color(result.card)=='red'){
							player.recover();
							if(player.hp>=0){
								trigger.untrigger();
								trigger.finish();
							}else{
								if(player.countCards('he')>0) event.goto(0);
							};
						};
					},
				},
				"bing_格挡":{
					trigger:{
						player:"damageBegin",
					},
					forced:true,
					filter:function (event,player){
						return event.num>1;
					},
					priority:-Infinity,
					content:function (){
						trigger.num=1;
					},
				},
				"bing_毒箭":{
					trigger:{
						player:"shaBefore",
					},
					check:function (event,player){
						return event.target!=undefined&&
						((get.attitude(player,event.target)<0&&!event.target.isTurnedOver()&&event.target.countCards('h',{name:'shan'})>0)||
						(get.attitude(player,event.target)>=0&&event.target.isTurnedOver()));
					},
					content:function (){
						"step 0"
						player.judge(function(card){
							if(get.suit(card)==get.suit(trigger.card)) return 1;
							return -0.5;
						});
						"step 1"
						if(get.suit(result.card)==get.suit(trigger.card)){
							trigger.cancel();
							trigger.target.turnOver();
							trigger.target.gain(result.card,'gain2');
						};
					},
				},
				"bing_肉搏":{
					trigger:{
						player:"damageAfter",
					},
					forced:true,
					filter:function (event,player){
						return player.countCards('h')==0&&event.source!=undefined;
					},
					content:function (){
						player.line(trigger.source);
						trigger.source.damage();
					},
				},
				"bing_践踏":{
					trigger:{
						source:"damageBefore",
					},
					priority:Infinity,
					filter:function (event,player){
						return event.card!=undefined&&event.card.name=='sha'&&_status.currentPhase==player&&player.countCards('h',{suit:get.suit(event.card)})>0;
					},
					direct:true,
					content:function (){
						"step 0"
						player.chooseToDiscard(get.prompt('bing_践踏'),1,'h',{suit:get.suit(trigger.card)}).ai=function(card){
							if(get.attitude(player,trigger.player)<0) return 6-get.value(card);
							return -1;
						};
						"step 1"
						if(result.bool){
							player.logSkill('bing_践踏');
							trigger.num++;
						};
					},
				},
				"bing_虎骑":{
					mod:{
						targetEnabled:function(card,player,target){
							if((target.get('e','3')!=undefined||target.get('e','4')!=undefined)&&(card.name=='juedou'||card.name=='huogong')) return false;
						},
					},
				},
				"bing_配发":{
					trigger:{
						player:'phaseDrawBefore'
					},
					check:function (event,player){
						return player.countCards('e')==0||player.hp<=2;
					},
					content:function(){
						"step 0"
						trigger.cancel();
						"step 1"
						event.cards=get.cards(6);
						if(event.isMine()==false){
							event.dialog=ui.create.dialog('配发',event.cards);
							game.delay(0.5);
						};
						"step 2"
						if(event.dialog) event.dialog.close();
						var dialog=ui.create.dialog('配发',event.cards);
						player.chooseButton([0,2],dialog,true).set('ai',function(button){
							return get.value(button.link);
						}).filterButton=function(button){
							return (get.color(button.link)=='red'&&get.type(button.link)=='basic')||get.type(button.link)=='equip';
						};
						"step 3"
						var cards2=[];
						for(var i=0;i<result.buttons.length;i++){
							cards2.push(result.buttons[i].link);
							cards.remove(result.buttons[i].link);
						};
						player.gain(cards2,'log');
						if(cards2.length) player.$gain2(cards2);
						for(var i=0;i<cards.length;i++){
							cards[i].discard();
						};
						game.delay(2);
					},
				},
				"bing_重装":{
					trigger:{
						player:'loseEnd'
					},
					forced:true,
					filter:function(event,player){
						if(!event.cards) return false;
						for(var i=0;i<event.cards.length;i++){
							if(event.cards[i].original=='e'&&(get.subtype(event.cards[i])=='equip1'||get.subtype(event.cards[i])=='equip2')) return true;
						};
						return false;
					},
					content:function(){
						for(var i=0;i<trigger.cards.length;i++){
							if(trigger.cards[i].original=='e'&&(get.subtype(trigger.cards[i])=='equip1'||get.subtype(trigger.cards[i])=='equip2')) player.equip(game.createCard(trigger.cards[i].name));
						};
					},
				},
				"bing_战船":{
					mod:{
						globalFrom:function (from,to,distance){
							if(from.storage.bing_战船!=undefined&&from.storage.bing_战船.length>0) return distance-2;
						},
					},
					init:function (player){
						player.storage.bing_战船=[];
					},
    				intro:{
    					content:'cards',
    				},
					marktext:"船",
					mark:true,
					enable:"phaseUse",
					discard:false,
					filter:function(event,player){
						return player.storage.bing_战船==undefined||(player.storage.bing_战船!=undefined&&player.storage.bing_战船.length==0);
					},
					filterCard:function(card){
						return get.type(card)=='basic';
					},
					check:function(card){
						return 6-get.value(card);
					},
					content:function(){
						player.storage.bing_战船.push(cards[0]);
						player.lose(cards[0],ui.special);
						player.syncStorage('bing_战船');
						game.log(player,'将',cards[0],'置于其武将牌上,称为“船”');
					},
					ai:{
						order:13,
						result:{
							player:function(player){
								if(player.countCards('h')>1) return 1;
							},
						},
						unequip:true,
						skillTagFilter:function (player,tag,arg){
							if(player.storage.bing_战船!=undefined&&player.storage.bing_战船.length>0&&arg&&arg.name=='sha') return true;
							return false;
						},
					},
				},
				"_bing_战船1":{
					trigger:{
						player:"damageAfter",
					},
					forced:true,
					popup:false,
					filter:function (event,player){
						return player.storage.bing_战船!=undefined&&player.storage.bing_战船.length>0;
					},
					content:function (){
						player.logSkill('bing_战船');
						player.$throw(player.storage.bing_战船[0]);
						player.storage.bing_战船[0].discard();
						player.storage.bing_战船.remove(player.storage.bing_战船[0]);
						player.syncStorage('bing_战船');
					},
				},
				"bing_绣敌":{
					enable:'phaseUse',
					usable:1,
					filterTarget:function(card,player,target){
						return target!=player&&get.distance(target,player,'attack')<=1;
					},
					content:function(){
						'step 0'
						player.addSkill('bing_绣敌1');
						target.chooseToUse('是否对'+get.translation(player.name)+'使用一张杀？',{name:'sha'},player);
						'step 1'
						player.removeSkill('bing_绣敌1');
					},
					ai:{
						order:12,
						result:{
							target:function(player,target){
								if(player.countCards('h',{name:'shan'})>0) return -1;
								return ;
							},
						},
					},
				},
				"bing_绣敌1":{
					trigger:{
						player:"respondAfter",
					},
					forced:true,
					popup:false,
					filter:function (event,player){
						return event.card!=undefined&&event.card.name=='shan'&&event.source!=undefined;
					},
					content:function(){
						'step 0'
						player.chooseControl(['摸两张牌','观看其所有手牌']).set('ai',function(event){
							return '摸两张牌';
						});
						'step 1'
						if(result.control=='摸两张牌') player.draw(2);
						if(result.control=='观看其所有手牌') player.viewCards(get.translation(trigger.source.name)+'的手牌',trigger.source.get('h'));
					},
				},
				"bing_坚守":{
					mod:{
						targetEnabled:function(card,player,target){
							if(card.name=='tiesuo'||card.name=='bingliang') return false;
						},
					},
				},
				"bing_夜袭":{
					trigger:{
						source:"damageAfter",
					},
					filter:function (event,player){
						return event.player!=undefined&&event.card!=undefined&&event.card.name=='sha'&&get.color(event.card)=='black';
					},
					check:function (event,player){
						return event.player!=undefined&&get.attitude(player,event.player)<=0;
					},
					content:function (){
						player.discardPlayerCard(trigger.player,1,'h');
					},
				},
				"bing_偷袭":{
					trigger:{
						player:["useCardAfter","respondAfter"],
					},
					direct:true,
					filter:function (event,player){
						return event.card!=undefined&&event.card.name=='shan'&&game.countPlayer(function(current){return current!=player&&get.distance(player,current,'attack')<=1})>0;
					},
					content:function(){
						'step 0'
						player.chooseTarget(get.prompt('bing_偷袭'),1,function(card,player,target){
							return target!=player&&get.distance(player,target,'attack')<=1;
						}).set('ai',function(target){
							return -get.attitude(player,target);
						});
						'step 1'
						if(result.bool){
							player.logSkill('jieming',result.targets);
							player.line(result.targets[0],'fire');
							result.targets[0].damage('fire');
						};
					},
				},
				"bing_兵枪":{
					trigger:{
						player:["useCardAfter","respondAfter"],
					},
					direct:true,
					filter:function (event,player){
						return player.get('e','1')==undefined&&_status.currentPhase!=player&&event.card!=undefined&&get.color(event.card)=='black';
					},
					content:function(){
						'step 0'
						player.chooseTarget(get.prompt('bing_兵枪'),1,function(card,player,target){
							return target!=player;
						}).set('ai',function(target){
							return -get.attitude(player,target);
						});
						'step 1'
						if(result.bool){
							event.target=result.targets[0];
							player.logSkill('jieming',result.targets);
							player.line(event.target);
							event.target.chooseToRespond({name:'shan'});
						}else{
							event.finish();
						};
						'step 2'
						if(!result.bool) event.target.loseHp();
					},
				},
				"bing_急行":{
					mod:{
						targetInRange:function (card,player,target,now){
							if((player.get('e','3')!=undefined||player.get('e','4')!=undefined)&&(get.type(card)=='trick'||get.type(card)=='delay')) return true;
						},
					},
				},
				"bing_连射":{
					trigger:{
						player:"phaseBegin",
					},
					check:function (event,player){
						return player.countCards('h')>2;
					},
					content:function (){
						player.skip('phaseJudge');
						player.skip('phaseDraw');
						var list=[];
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl!=player) list.push(pl);
						};
						player.addTempSkill('bing_连射1',{player:'useCardAfter'});
						player.useCard({name:'wanjian'},list);
					},
				},
				"bing_连射1":{
					trigger:{
						source:'damageBefore'
					},
					forced:true,
					popup:false,
					priority:-Infinity,
					content:function(){
						trigger.nature='thunder';
					},
				},
				"bing_死战":{
					mod:{
						cardUsable:function (card,player,num){
							if(player.hp==1&&card.name=='sha') return Infinity;
						},
					},
				},
				"bing_围攻":{
					group:["bing_围攻_1","bing_围攻_2"],
					subSkill:{
						"1":{
							trigger:{
								player:"shaBefore",
							},
							forced:true,
							filter:function (event,player){
								return event.card!=undefined;
							},
							content:function(){
								trigger.target.addSkill('bing_围攻1');
								trigger.target.storage.bing_围攻1=get.number(trigger.card);
							},
						},
						"2":{
							trigger:{
								player:"juedouBefore",
							},
							forced:true,
							filter:function (event,player){
								return event.card!=undefined;
							},
							content:function(){
								trigger.target.addSkill('bing_围攻2');
								trigger.target.storage.bing_围攻2=get.number(trigger.card);
							},
						},
					},
				},
				"bing_围攻1":{
					mod:{
						cardRespondable:function(card,player){
							if(card.name=='shan'&&get.number(card)<=player.storage.bing_围攻1) return false;
						},
					},
					trigger:{
						global:"shaAfter",
					},
					forced:true,
					popup:false,
					content:function(){
						player.removeSkill('bing_围攻1');
					},
				},
				"bing_围攻2":{
					mod:{
						cardRespondable:function(card,player){
							if(card.name=='sha'&&get.number(card)<=player.storage.bing_围攻2) return false;
						},
					},
					trigger:{
						global:"juedouAfter",
					},
					forced:true,
					popup:false,
					content:function(){
						player.removeSkill('bing_围攻2');
					},
				},
				"bing_追斩":{
					trigger:{
						global:"damageAfter",
					},
					filter:function (event,player){
						return event.card!=undefined&&
						(event.card.name=='sha'||event.card.name=='juedou'||event.card.name=='huogong')&&
						_status.currentPhase!=player&&
						event.player!=player&&
						get.distance(player,event.player,'attack')<=1&&
						player.countCards('h',{name:'sha'})>0;
					},
					direct:true,
					content:function (){
						"step 0"
						player.chooseToUse(get.prompt('bing_追斩'),{name:'sha'},trigger.player);
						"step 1"
						if(result.bool) player.logSkill('bing_追斩');
					},
				},
				"bing_还徵":{
					mod:{
						targetInRange:function (card,player,target,now){
							if((player.get('e','3')!=undefined||player.get('e','4')!=undefined)&&card.name=='sha') return true;
						},
					},
				},
				"bing_万军":{
					mod:{
						maxHandcard:function (player,num){
							return player.maxHp;
						},
					},
				},
				"bing_拼命":{
					enable:'phaseUse',
					usable:1,
					filterTarget:function(card,player,target){
						return player!=target&&get.distance(player,target,'attack')<=1;
					},
					content:function(){
						"step 0"
						player.loseHp();
						"step 1"
						target.damage();
					},
					ai:{
						damage:true,
						order:8,
						result:{
							/*
							player:function(player,target){
								if(player.hp>=target.hp) return -0.9;
								if(player.hp<=2) return -10;
								return -2;
							},
							*/
							target:function(player,target){
								if(player.hp<2) return ;
								if(player.hp==2&&target.hp>=2) return ;
								if(target.hp>player.hp) return ;
								return get.damageEffect(player,target);
							},
						},
					},
				},
				"bing_突击":{
					skillAnimation:true,
					trigger:{
						player:'phaseBegin',
					},
					forced:true,
					unique:true,
					derivation:['tuxi'],
					init:function(player){
						player.storage.bing_突击=false;
					},
					filter:function(event,player){
						return !player.storage.bing_突击&&player.isMinHp();
					},
					content:function(){
						player.storage.bing_突击=true;
						player.loseMaxHp();
						player.addSkill('tuxi');
					},
				},
				"bing_血战":{
					trigger:{
						player:"damageAfter",
					},
					filter:function (event,player){
						return event.source!=undefined&&event.num>0;
					},
					check:function (event,player){
						return event.source!=undefined&&get.attitude(player,event.source)<=0;
					},
					content:function (){
						"step 0"
						event.num=0;
						"step 1"
						player.judge(function(card){
							return 1;
						});
						"step 2"
						if(get.color(result.card)=='red') trigger.source.addJudge('lebu',[result.card]);
						if(get.color(result.card)=='black') trigger.source.addJudge('bingliang',[result.card]);
						event.num++;
						if(event.num<trigger.num) event.goto(1);
					},
				},
				"bing_逃战":{
					trigger:{
						player:'damageBefore'
					},
					direct:true,
					filter:function (event,player){
						return event.num>0&&player.countCards('h',{color:'red'})>0;
					},
					content:function(){
						"step 0"
						player.chooseCard(get.prompt('bing_逃战'),1,'h',{color:'red'}).set('ai',function(card){
							if(card.name=='tao') return -1;
							return 1;
    					});
						"step 1"
						if(result.bool){
							player.logSkill('bing_逃战');
							player.discard(result.cards);
							trigger.cancel();
						};
					},
				},
				"bing_良驹":{
					mod:{
						globalFrom:function(from,to,distance){
							return distance-1;
						},
						globalTo:function(from,to,distance){
							return distance+1;
						},
					},
				},
				"bing_骑射":{
					trigger:{
						player:"useCardBefore",
					},
					filter:function (event,player){
						return event.card!=undefined&&event.card.name=='sha'&&_status.currentPhase==player;
					},
					content:function (){
						'step 0'
						player.chooseControl('雷','火','普通').set('prompt','请选择目标属性').ai=function(event,player){
							return '火'
						};
						'step 1'
						if(result.control!=undefined) player.popup(result.control);
						if(result.control=='火'){
							trigger.card.nature='fire';
							//if(trigger.cards&&trigger.cards[0]) trigger.cards[0].nature='fire';
						};
						if(result.control=='雷'){
							trigger.card.nature='thunder';
							//if(trigger.cards&&trigger.cards[0]) trigger.cards[0].nature='thunder';
						};
						if(result.control=='普通'){
							delete trigger.card.nature;
							//if(trigger.cards&&trigger.cards[0]) delete trigger.cards[0].nature;
						};
						//if(result.control!=undefined&&trigger.cards&&trigger.cards[0]){
						//	game.broadcastAll(function(card){
						//		card.init([card.suit,card.number,card.name,card.nature]);
						//	},trigger.cards[0]);
						//};
						game.delay(1.5);
						'step 2'
						player.chooseControl('♥︎','♦︎','♠︎','♣︎').set('prompt','请选择目标花色').ai=function(event,player){
							return '♥︎'
						};
						'step 3'
						if(result.control!=undefined){
							player.popup(result.control);
							var suit='heart';
							if(result.control=='♥︎') suit='heart';
							if(result.control=='♦︎') suit='diamond';
							if(result.control=='♠︎') suit='spade';
							if(result.control=='♣︎') suit='club';
							trigger.card.suit=suit;
							//if(trigger.cards&&trigger.cards[0]){
							//	game.broadcastAll(function(card){
							//		card.init([suit,card.number,card.name,card.nature]);
							//	},trigger.cards[0]);
							//};
						};
					},
				},
				"bing_远射":{
					mod:{
						attackFrom:function(from,to,distance){
							if(from.getEquip(1)!=undefined) return distance-2;
							return distance;
						},
					},
				},
				"bing_精弓":{
					trigger:{
						player:"shaBegin",
					},
					forced:true,
					filter:function (event,player){
						return event.target!=undefined&&(event.target.get('e','2')!=undefined||event.target.get('e','3')!=undefined||event.target.get('e','4')!=undefined)
					},
					content:function (){
						trigger.directHit=true;
					},
				},
				"bing_长戟":{
					mod:{
						attackFrom:function(from,to,distance){
							return distance-2;
						},
					},
				},
				"bing_精甲":{
					enable:"phaseUse",
					filter:function (event,player){
						return player.countCards('he',{type:'equip'})>0;
					},
					filterCard:function (card){
						return get.type(card)=='equip';
					},
					check:function (card){
						return 5-get.useful(card);
					},
					content:function (){
						player.draw();
					},
					discard:false,
					prompt:"将一张装备牌置入弃牌堆并摸一张牌",
					delay:0.5,
					prepare:function (cards,player){
						player.$throw(cards,1000);
					},
					ai:{
						basic:{
							order:1,
						},
						result:{
							player:1,
						},
					},
				},
				"bing_血拼":{
					enable:'phaseUse',
					usable:1,
					filterTarget:function(card,player,target){
						return player!=target&&target.countCards('h')>0;
					},
					filter:function(event,player){
						return player.countCards('h')>0;
					},
					content:function(){
						"step 0"
						player.chooseToCompare(target);
						"step 1"
						if(result.bool){
							player.line(target,'thunder');
							target.damage('thunder');
						}else{
							target.gain([result.player,result.target],'gain2');
						};
					},
					ai:{
						order:1,
						result:{
							target:function(player,target){
								if(player.countCards('h')>1) return -1;
							},
						},
					}
				},
				"bing_攻破":{
					enable:'phaseUse',
					usable:1,
					filterCard:function(card){
						return get.color(card)=='black';
					},
					check:function(card){
						return 5-get.value(card);
					},
					filter:function(event,player){
						return player.countCards('h',{color:'black'})>0;
					},
					content:function(){
						player.addTempSkill('bing_攻破1',{player:'phaseAfter'})
					},
					ai:{
						order:16,
						result:{
							player:function(player){
								if(player.countCards('h')>2) return 1;
							},
						},
					}
				},
				"bing_攻破1":{
					trigger:{
						source:"damageBefore",
					},
					forced:true,
					popup:false,
					priority:16,
					check:function (){
						return false;
					},
					content:function (){
						trigger.cancel();
						var ex=0;
						if(trigger.card&&trigger.card.name=='sha'){
							if(player.hasSkill('jiu')) ex++;
							if(player.hasSkill('luoyi2')) ex++;
							if(player.hasSkill('reluoyi2')) ex++;
						};
						trigger.player.loseHp(trigger.num+ex);
					},
					ai:{
						jueqing:true,
					},
				},
				"bing_惊鸯":{
					trigger:{
						source:"damageAfter",
					},
					round:1,
					filter:function (event,player){
						return event.player!=undefined&&event.card!=undefined&&event.card.name=='sha';
					},
					content:function (){
						player.gainPlayerCard(trigger.player,'hj',1);
					},
				},
				"bing_鬼火":{
					group:["bing_鬼火_1","bing_鬼火_2"],
					subSkill:{
						"1":{
							name:'火杀',
							enable:['chooseToRespond','chooseToUse'],
							filterCard:{
								name:'huogong',
							},
							viewAs:{
								name:'sha',
								nature:'fire',
							},
							prompt:'将一张【火攻】当【火杀】使用或打出',
							check:function(card){
								return 1;
							},
							ai:{
								skillTagFilter:function(player){
									if(!player.countCards('h',{name:'huogong'})) return false;
								},
								respondSha:true,
							},
						},
						"2":{
							name:'火攻',
							enable:'chooseToUse',
							filterCard:function(card){
								return card.name=='sha'&&card.nature=='fire';
							},
							viewAs:{name:'huogong'},
							prompt:'将一张【火杀】当【火攻】使用',
							check:function(card){
								return 6-get.value(card);
							},
						},
					},
				},
			},
			translate:{
				'bing_黄巾军':'黄巾军',
				'bing_惊鸯':'惊鸯',
				'bing_惊鸯_info':'当你的【杀】造成伤害后，你可以获得目标手牌区或判定区内的一张牌，每轮限一次',
				'bing_鬼火':'鬼火',
				'bing_鬼火_info':'你可以将【火攻】当作【火杀】使用或打出，将【火杀】当作【火攻】使用',
				'bing_陷阵营':'陷阵营',
				'bing_血拼':'血拼',
				'bing_血拼_info':'出牌阶段限一次，你可以与一名其他角色拼点，若你赢，你对其造成一点雷电伤害，否则其获得双方的拼点牌',
				'bing_攻破':'攻破',
				'bing_攻破_info':'出牌阶段限一次，你可以弃置一张黑色手牌，然后本回合内造成的所有伤害均视为体力流失',
				'bing_大戟士':'大戟士',
				'bing_长戟':'长戟',
				'bing_长戟_info':'锁定技，你的攻击范围始终+2',
				'bing_精甲':'精甲',
				'bing_精甲_info':'出牌阶段，你可以重铸手牌中装备牌',
				'bing_先登死士':'先登死士',
				'bing_远射':'远射',
				'bing_远射_info':'锁定技，你所装备的武器的攻击范围始终+2',
				'bing_精弓':'精弓',
				'bing_精弓_info':'锁定技，你的【杀】不能被装备着防具或坐骑的角色闪避',
				'bing_白马义从':'白马义从',
				'bing_良驹':'良驹',
				'bing_良驹_info':'锁定技，你的进攻距离+1，你的防御距离+1',
				'bing_骑射':'骑射',
				'bing_骑射_info':'当你于回合内使用【杀】时，你可以选择改变此【杀】的属性（雷、火、普通）和花色',
				'bing_新募兵':'新募兵',
				'bing_逃战':'逃战',
				'bing_逃战_info':'当你受到伤害时，你可以弃置一张红色手牌并使该伤害无效',
				'bing_八百死士':'八百死士',
				'bing_突击':'突击',
				'bing_突击_info':'觉醒技，回合开始阶段，若你体力值为全场最小（或之一），你失去一点体力上限并获得技能“突袭”',
				'bing_血战':'血战',
				'bing_血战_info':'每当你受到一点伤害后，你可以进行一次判定，若判定结果为红色，你将判定牌视为【乐不思蜀】并将其置于伤害来源的判定区内；若判定结果为黑色，你将判定牌视为【兵粮寸断】并将其置于伤害来源的判定区内',
				'bing_虎卫军':'虎卫军',
				'bing_万军':'万军',
				'bing_万军_info':'锁定技，你的手牌上限始终等同于你的体力上限',
				'bing_拼命':'拼命',
				'bing_拼命_info':'出牌阶段限一次，你可以流失一点体力并对一名在你攻击范围内的其他角色造成一点伤害',
				'bing_虎豹骑':'虎豹骑',
				'bing_追斩':'追斩',
				'bing_追斩_info':'你的回合外，当一名在你攻击范围内的其他角色受到【杀】、【决斗】或【火攻】造成的伤害后，你可以对其使用一张【杀】',
				'bing_还徵':'还徵',
				'bing_还徵_info':'锁定技，当你装备着坐骑牌时，你使用的【杀】无距离限制',
				'bing_青州兵':'青州兵',
				'bing_围攻':'围攻',
				'bing_围攻_info':'锁定技，只有比你使用的【杀】点数大的【闪】才能响应此【杀】，只有比你使用的【决斗】点数大的【杀】才能响应此【决斗】',
				'bing_无当飞军':'无当飞军',
				'bing_连射':'连射',
				'bing_连射_info':'回合开始时，你可以跳过判定阶段和摸牌阶段，然后视为使用一张【万箭齐发】且该【万箭齐发】能够造成雷电伤害',
				'bing_死战':'死战',
				'bing_死战_info':'锁定技，当你体力值为1时，出牌阶段，你使用的【杀】无数量限制',
				'bing_西凉军':'西凉军',
				'bing_兵枪':'兵枪',
				'bing_兵枪_info':'当你回合外使用或打出黑色牌后，若你没有装备武器牌，你可以令一名其他角色打出一张【闪】，否则其流失一点体力',
				'bing_急行':'急行',
				'bing_急行_info':'锁定技，当你装备着坐骑牌时，你使用的锦囊牌无距离限制',
				'bing_夜叉行':'夜叉行',
				'bing_夜袭':'夜袭',
				'bing_夜袭_info':'当你使用黑色的【杀】造成伤害后，你可以弃置对方一张手牌',
				'bing_偷袭':'偷袭',
				'bing_偷袭_info':'每当你使用或打出一张【闪】时，你可以对你攻击范围内的一名其他角色造成一点火焰伤害',
				'bing_白耳兵':'白耳兵',
				'bing_绣敌':'绣敌',
				'bing_绣敌_info':'出牌阶段限一次，你可以指定一名其他角色，然后该角色可以对你使用一张【杀】，若你闪避此【杀】，你可以摸两张牌或观看其所有手牌',
				'bing_坚守':'坚守',
				'bing_坚守_info':'锁定技，你不能成为【铁索连环】和【兵粮寸断】的目标',
				'bing_蛟鳄军':'蛟鳄军',
				'bing_战船':'战船',
				'bing_战船_info':'摸牌阶段，若你的武将牌上没有“船”，你可以将一张手牌置于武将牌上，称为“船”；当你拥有“船”时，你的攻击距离+2，你使用的【杀】无视对方防具；当你受到伤害后，你须弃置你武将牌上的“船”',
				'bing_丹阳兵':'丹阳兵',
				'bing_配发':'配发',
				'bing_配发_info':'摸牌阶段，你可以放弃摸牌，改为观看牌堆顶六张牌并选择获得其中的红色基本牌和装备牌，每次最多以此法获得两张牌',
				'bing_重装':'重装',
				'bing_重装_info':'锁定技，你不会失去装备区内的武器或防具（不影响失去后的结果）',
				'bing_宿卫虎骑':'宿卫虎骑',
				'bing_践踏':'践踏',
				'bing_践踏_info':'你的回合内，你的【杀】造成伤害前，你可以弃置一张与该【杀】花色相同的手牌来令该【杀】伤害+1',
				'bing_虎骑':'虎骑',
				'bing_虎骑_info':'当你装备着坐骑时，你不能成为【决斗】和【火攻】的目标',
				'bing_毒齿材官':'毒齿材官',
				'bing_毒箭':'毒箭',
				'bing_毒箭_info':'当你的【杀】指定目标后，你可以进行一次判定，若判定结果花色与此【杀】花色相同，次【杀】无效，你令其获得判定牌并令其翻面',
				'bing_肉搏':'肉搏',
				'bing_肉搏_info':'锁定技，每次你受到伤害后，若你没有手牌，你对伤害来源造成一点伤害',
				'bing_羽林卫':'羽林卫',
				'bing_顽强':'顽强',
				'bing_顽强_info':'当你进入濒死阶段前，你可以弃置一张牌并进行一次判定，若判定结果为红色，你回复一点体力，然后你可以重复这个过程直至你脱离濒死阶段',
				'bing_格挡':'格挡',
				'bing_格挡_info':'锁定技，每次你受到伤害时，最多承受一点伤害',
			},
		};
		if(lib.device||lib.node){
			for(var i in bing.character){bing.character[i][4].push('ext:扩展ol/'+i+'.jpg');}
		}else{
			for(var i in bing.character){bing.character[i][4].push('db:extension-扩展ol:'+i+'.jpg');}
		}
		return bing;
	});
	lib.config.all.characters.push('bing');
	if(!lib.config.characters.contains('bing')) lib.config.characters.push('bing');
	lib.translate['bing_character_config']='士兵';
}