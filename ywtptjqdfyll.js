window.func=function(lib,game,ui,get,ai,_status){
	game.import('character',function(lib,game,ui,get,ai,_status){
		var ywtptjqdfyll={
			name:'ywtptjqdfyll',
			connect:true,
			/*
			characterSort:{
				ywtptjqdfyll:{},
			},
			*/
			character:{
				"mpl_梅普露":["female","mpl_dfs",Infinity,["mpl_绝不倒下的盾","mpl_保护我的伙伴"],[]],
				"mpl_莎莉":["female","mpl_dfs",3,["mpl_迅速而敏捷的闪避","mpl_多而不精"],[]],
				"mpl_霞":["female","mpl_dfs",4,["mpl_零式.虚无","mpl_五轮之妖刀"],[]],
				"mpl_结衣and麻衣":["female","mpl_dfs",'2/4',["mpl_破坏王"],[]],
				"mpl_蜜伊":["female","mpl_yzdg",3,["mpl_炎帝的愤怒","mpl_易碎的威严"],[]],
				"mpl_奏":["male","mpl_dfs",3,["mpl_神界书库"],[]],
				"mpl_克罗姆":["male","mpl_dfs",'1/2',["mpl_非死即生","mpl_死者之铠"],[]],
				"mpl_伊兹":["female","mpl_dfs",3,["mpl_搞怪炼金术","mpl_即时制造"],[]],
			},
			skill:{
				"mpl_绝不倒下的盾":{
					nobracket:true,
					intro:{
						content:'cards',
						onunmark:function(storage,player){
							if(storage&&storage.length){
								player.$throw(storage,1000);
								game.cardsDiscard(storage);
								delete player.storage.mpl_绝不倒下的盾;
							}
						}
					},
					trigger:{
						global:"useCardToTargeted",
					},
					forced:true,
					filter:function(event,player){
						if(event.player==player) return true;
						if(!event.targets) return false;
						if(!event.card.isCard) return false;
						if(!event.cards) return false;
						if(event.cards.length==0) return false;
						return event.targets.length==1&&event.targets[0]==player;
					},
					content:function(){
						"step 0"
						var card=trigger.cards[0];
						if(player.storage.mpl_绝不倒下的盾==undefined) player.storage.mpl_绝不倒下的盾=[];
						player.storage.mpl_绝不倒下的盾.push(card);
						player.syncStorage('mpl_绝不倒下的盾');
						game.cardsGotoSpecial(card);
						player.markSkill('mpl_绝不倒下的盾');
						game.log(player,'将',card,'置于武将牌上');
						event.bool=false;
						for(var i=0;i<player.storage.mpl_绝不倒下的盾.length-1;i++){
							if(get.number(card)&&get.number(card)==get.number(player.storage.mpl_绝不倒下的盾[i])){
								player.storage.mpl_绝不倒下的盾.remove(card);
								player.syncStorage('mpl_绝不倒下的盾');
								player.markSkill('mpl_绝不倒下的盾');
								game.cardsDiscard(card);
								game.log(player,'弃置了',card);
							};
						};
						"step 1"
						if(player.storage.mpl_绝不倒下的盾.length>=13){
							player.unmarkSkill('mpl_绝不倒下的盾');
							player.die();
						};
					},
				},
				"mpl_保护我的伙伴":{
					nobracket:true,
					trigger:{
						global:"dying",
					},
					priority:Infinity,
					direct:true,
					filter:function(event,player){
						if(player.storage.mpl_绝不倒下的盾==undefined) return false;
						if(event.parent==undefined) return false;
						if(event.parent.name!='damage') return false;
						if(event.parent.card==undefined) return false;
						var cards=player.storage.mpl_绝不倒下的盾;
						for(var i=0;i<cards.length;i++){
							if(cards[i].number==event.parent.card.number) return true;
						};
					},
					content:function(){
						'step 0'
						var list=[];
						var cards=player.storage.mpl_绝不倒下的盾;
						for(var i=0;i<cards.length;i++){
							if(cards[i].number==trigger.parent.card.number) list.push(cards[i]);
						};
						player.chooseCardButton(list,get.translation(trigger.player)+'濒死，是否发动技能【绝不倒下的盾】？').set('ai',function(button){
							if(get.attitude(player,trigger.player)!=0) return 1;
							return -1;
						});
						'step 1'
						if(result.bool){
							player.logSkill('mpl_保护我的伙伴');
							player.line(trigger.player);
							event.card=result.links[0];
							player.chooseControl(['令其回复体力至一','令其立即死亡']).set('ai',function(event){
								if(get.attitude(player,trigger.player)>0) return '令其回复体力至一';
								return '令其立即死亡';
							});
						}else{
							event.finish();
						};
						"step 2"
						if(result.control=='令其回复体力至一'){
							//trigger.cancel();
							trigger.player.recover(1-trigger.player.hp);
						}else{
							trigger.player.die().source=player;
						};
						player.storage.mpl_绝不倒下的盾.remove(event.card);
						player.syncStorage('mpl_绝不倒下的盾');
						player.markSkill('mpl_绝不倒下的盾');
						game.cardsDiscard(event.card);
						player.$throw(event.card);
						game.log(player,'弃置了',event.card);
					},
				},
				"mpl_迅速而敏捷的闪避":{
					nobracket:true,
					group:["mpl_迅速而敏捷的闪避_shan","mpl_迅速而敏捷的闪避_wuxie"],
					subSkill:{
						"shan":{
							enable:['chooseToRespond','chooseToUse'],
							viewAs:{name:'shan'},
							filterCard:true,
							viewAsFilter:function(player){
								return player.countCards('h')==1;
							},
							prompt:'将一张手牌当【闪】使用或打出',
							check:function(){
								return 1;
							},
							onuse:function(result,player){
								player.draw(2);
							},
							ai:{
								respondShan:true,
								skillTagFilter:function(player){
									if(player.countCards('h')!=1) return false;
								},
								effect:{
									target:function(card,player,target,current){
										if(get.tag(card,'respondShan')&&current<0) return 0.6;
									},
								},
							},
						},
						"wuxie":{
							enable:'chooseToUse',
							viewAs:{name:'wuxie'},
							filterCard:true,
							viewAsFilter:function(player){
								return player.countCards('h')==1;
							},
							prompt:'将一张手牌当【无懈可击】使用',
							check:function(card){
								var tri=_status.event.getTrigger();
								if(tri&&tri.card&&tri.card.name=='chiling') return -1;
								return 1;
							},
							onuse:function(result,player){
								player.draw(2);
								player.addTempSkill('mpl_迅速而敏捷的闪避_buff',{player:'useCardAfter'});
							},
						},
						"buff":{
							mod:{
								wuxieRespondable:function(card,player,target,current){
									return false;
								},
							},
						},
					},
				},
				"mpl_多而不精":{
					nobracket:true,
					enable:'phaseUse',
					filter:function(event,player){
						var hs=player.getCards('h');
						if(!hs.length) return false;
						for(var i=0;i<hs.length;i++){
							var mod2=game.checkMod(hs[i],player,'unchanged','cardEnabled2',player);
							if(mod2===false) return false;
						};
						return true;
					},
					filterCard:function(card,player){
						player.storage.mpl_多而不精_chosen=[];
						for(var i=0;i<ui.selected.cards.length;i++){
							player.storage.mpl_多而不精_chosen.push(ui.selected.cards[i]);
						};
						return get.type(card)=='basic'||get.type(card)=='trick'||get.type(card)=='delay';
					},
					selectCard:function(card){
						var num=1;
						for(var i=0;i<ui.selected.cards.length;i++){
							var card=ui.selected.cards[i];
							if(!lib.filter.filterCard(card,_status.event.player,_status.event)) num++;
						};
						return [num,Infinity];
					},
					complexCard:true,
					discard:false,
					lose:false,
					chooseButton:{
						dialog:function(event,player){
							return ui.create.dialog('请选择需要视为的牌',player.storage.mpl_多而不精_chosen);
						},
						filter:function(button,player){
							return lib.filter.filterCard({name:button.link.name},player,_status.event.getParent());
						},
						backup:function(links,player){
							return {
								filterCard:function(card,player){
									return player.storage.mpl_多而不精_chosen.contains(card);
								},
								selectCard:-1,
								viewAs:links[0]
							};
						},
						prompt:function(links,player){
							return '将选中手牌当作【'+get.translation(links[0].name)+'】使用';
						},
					},
					group:["mpl_多而不精_buff","mpl_多而不精_buff1","mpl_多而不精_buff2","mpl_多而不精_buff3"],
					subSkill:{
						"buff":{
							mod:{
								selectTarget:function(card,player,range){
									if(_status.event.skill!='mpl_多而不精_backup') return;
									if(player.storage.mpl_多而不精_chosen==undefined) return;
									var info=get.info(card);
									if(info.selectTarget==-1) return false;
									range[1]+=player.storage.mpl_多而不精_chosen.length-1;
								},
							},
						},
						"buff1":{
							trigger:{
								player:"shaMiss",
							},
							forced:true,
							content:function(){
								player.storage.kzol_hadMissed=true;
							},
						},
						"buff2":{
							trigger:{
								player:"useCardBefore",
							},
							forced:true,
							popup:false,
							filter:function(event,player){
								return event.card&&event.card.name=='sha';
							},
							content:function(){
								delete player.storage.kzol_hadMissed;
							},
						},
						"buff3":{
							trigger:{
								player:'shaBefore',
							},
							forced:true,
							popup:false,
							priority:Infinity,
							filter:function(event,player){
								return player.storage.kzol_hadMissed==true;
							},
							content:function(){
								trigger.cancel();
							},
						},
					},
				},
				"mpl_零式.虚无":{
					nobracket:true,
					enable:'phaseUse',
					usable:1,
					selectTarget:1,
					filterTarget:function(card,player,target){
						return player.canUse({name:'sha',isCard:true},target);
					},
					filter:function(event,player){
						var list=[];
						for(var i=1;i<6;i++){
							if(!player.isDisabled(i)) list.push(i);
						};
						return list.length>0&&lib.filter.filterCard({name:'sha',isCard:true},player,event);
					},
					content:function(){
						'step 0'
						var list=[];
						for(var i=1;i<6;i++){
							if(!player.isDisabled(i)){
								list.push('equip'+i);
							};
						};
						if(!list.length){
							event.finish();
						}else{
							var next=player.chooseControl(list);
							next.set('prompt','请选择废除一个装备栏');
							next.set('ai',function(){
								if(list.contains('equip5')) return 'equip5';
								if(list.contains('equip3')) return 'equip3';
								return list.randomGet();
							});
						};
						'step 1'
						if(result.control){
							var bool=false;
							if(!player.isEmpty(result.control)) bool=true;
							player.disableEquip(result.control);
							if(player.storage.mpl_五轮之妖刀==true) player.discardPlayerCard(target,'hej');
							if(player.canUse({name:'sha',isCard:true},target)){
								player.useCard({name:'sha',isCard:true},target);
							};
							if(bool==true) player.draw(2);
						};
					},
					ai:{
						order:1,
						result:{
							target:function(player,target){
								var list=[];
								for(var i=1;i<6;i++){
									if(!player.isDisabled(i)) list.push(i);
								};
								if(get.attitude(player,target)<0&&
								(player.storage.mpl_五轮之妖刀==true?list.length>4:list.length>0)&&
								player.canUse({name:'sha',isCard:true},target)){
									return -1;
								};
								return 0;
							},
						},
					},
				},
				"mpl_五轮之妖刀":{
					nobracket:true,
					init:function(player){
						player.storage.mpl_五轮之妖刀=false;
					},
					intro:{
						content:'limited'
					},
					mark:true,
					unique:true,
					limited:true,
					skillAnimation:true,
					animationColor:'thunder',
					enable:'phaseUse',
					filter:function(event,player){
						if(player.storage.mpl_五轮之妖刀) return false;
						return true;
					},
					content:function(){
						player.awakenSkill('mpl_五轮之妖刀');
						player.storage.mpl_五轮之妖刀=true;
						player.loseMaxHp();
						var num=0;
						for(var i=1;i<6;i++){
							if(player.isDisabled(i)){
								player.enableEquip(i);
								num++;
							};
						};
						player.draw(num);
					},
					ai:{
						order:11,
						result:{
							player:function(player){
								var list=[];
								for(var i=1;i<6;i++){
									if(!player.isDisabled(i)) list.push(i);
								};
								if(list.length==0){
									return 1;
								};
								return 0;
							},
						},
					},
				},
				"mpl_破坏王":{
					nobracket:true,
					trigger:{
						source:"damageBegin4",
					},
					priority:-Infinity,
					filter:function(event,player){
						return !player.hasSkill('mpl_破坏王_disable');
					},
					check:function(event,player){
						return get.attitude(player,event.player)<0&&player.hp>event.num;
					},
					content:function(){
						trigger.num=player.hp;
						player.addTempSkill('mpl_破坏王_disable',{player:'changeHp'});
					},
					subSkill:{
						"disable":{
							/*
							mark:true,
							content:function(){
								return '【破坏王】暂时无法发动';
							},
							*/
						},
					},
				},
				"mpl_炎帝的愤怒":{
					zhuSkill:true,
					enable:'phaseUse',
					usable:1,
					filterTarget:function(card,player,target){
						return player!=target;
					},
					selectTarget:2,
					multitarget:true,
					targetprompt:['受到伤害','回复体力'],
					line:false,
					content:function(){
						"step 0"
						player.turnOver();
						player.line(targets[0],'fire');
						targets[0].damage('fire');
						game.delay();
						"step 1"
						player.line(targets[1]);
						targets[1].recover();
					},
					ai:{
						order:1,
						result:{
							target:function(player,target){
								if(!player.isTurnedOver()&&player.countCards('h')<=2) return 0;
								if(ui.selected.targets.length==0){
									return -3;
								}else{
									if(player.isTurnedOver()) return 3;
									if(target.maxHp>target.hp) return 3;
									return 0;
								};
							},
						},
					},
				},
				"mpl_易碎的威严":{
					nobracket:true,
					init:function(player){
						player.storage.mpl_易碎的威严=[];
					},
					trigger:{
						global:"recoverAfter",
					},
					filter:function(event,player){
						if(player.storage.mpl_易碎的威严==undefined) return false;
						return !player.storage.mpl_易碎的威严.contains(event.player);
					},
					direct:true,
					content:function(){
						"step 0"
						player.chooseCard(get.prompt('mpl_易碎的威严'),1,'he',{color:'red'}).set('ai',function(card){
							if(get.attitude(player,trigger.player)<0) return 6-get.value(card);
							return -1;
						});
						"step 1"
						if(result.bool){
							player.logSkill('mpl_易碎的威严');
							player.discard(result.cards);
							player.line(trigger.player,'fire')
							trigger.player.damage('fire');
							if(player.storage.mpl_易碎的威严==undefined) player.storage.mpl_易碎的威严=[];
							player.storage.mpl_易碎的威严.push(trigger.player);
						};
					},
					group:['mpl_易碎的威严_clear'],
					subSkill:{
						"clear":{
							trigger:{
								global:"roundStart",
							},
							forced:true,
							popup:false,
							content:function(){
								player.storage.mpl_易碎的威严=[];
							},
						},
					},
				},
				"mpl_神界书库":{
					nobracket:true,
					init:function(player){
						player.storage.mpl_神界书库=[];
					},
					trigger:{
						player:"phaseUseBegin",
					},
					content:function(){
						"step 0"
						if(player.storage.mpl_神界书库==undefined) player.storage.mpl_神界书库=[];
						var list=[];
						for(var i in lib.card){
							var card=lib.card[i];
							var bool=false;
							for(var j in lib.cardPack){
								if(lib.cardPack[j].contains(i)) bool=true;
							};
							if(bool==false) continue;
							if(card.type=='basic'||card.type=='delay'){
								var str=get.translation(card.type);
								if(player.storage.mpl_神界书库.contains(i)) str+='<br>已使用';
								list.push([str,'',i]);
							};
						};
						player.chooseButton(['神界书库',[list,'vcard']]).set('filterButton',function(button,player){
							var name=button.link[2];
							return !player.storage.mpl_神界书库.contains(name)&&
							lib.filter.filterCard({name:name},player,trigger);
						}).set('ai',function(button){
							var player=_status.event.player;
							return player.getUseValue(button.link[2]);
						});
						"step 1"
						if(result.bool){
							var name=result.links[0][2];
							event.fakecard=game.createCard({name:name});
							event.fakecard.kzol_mpl_from='mpl_神界书库';
							if(get.info(event.fakecard).toself==true){
								event.goto(3);
							}else{
								player.chooseCardTarget({
									filterCard:true,
									selectCard:0,
									filterTarget:lib.filter.filterTarget,
									selectTarget:lib.filter.selectTarget,
									ai1:function(card){
										return 1;
									},
									ai2:function(target){
										var card=_status.event.fakecard;
										var player=_status.event.player;
										return get.effect(target,card,player,player);
									},
									_get_card:event.fakecard,
									prompt:'请选择【'+get.translation(name)+'】的目标',
								}).set('fakecard',event.fakecard);
							};
						}else{
							event.finish();
						};
						"step 2"
						if(result.bool){
							//player.logSkill('mpl_神界书库');
							player.useCard(event.fakecard,result.targets);
							player.storage.mpl_神界书库.push(event.fakecard.name);
						};
						event.finish();
						"step 3"
						//player.logSkill('mpl_神界书库');
						player.useCard(event.fakecard,player);
						player.storage.mpl_神界书库.push(event.fakecard.name);
					},
					group:['mpl_神界书库_viewAs','mpl_神界书库_clear'],
					subSkill:{
						"viewAs":{
							enable:'chooseToUse',
							filterCard:function(card){
								var player=get.owner(card);
								if(player.storage.mpl_神界书库==undefined) return false;
								return player.storage.mpl_神界书库.contains(card.name);
							},
							viewAsFilter:function(player){
								return player.storage.mpl_神界书库!=undefined&&player.storage.mpl_神界书库.length>0;
							},
							viewAs:{
								name:'wuxie',
							},
							prompt:'将一张以技能【神界书库】使用过的牌当【无懈可击】使用',
							check:function(card){
								var tri=_status.event.getTrigger();
								if(tri&&tri.card&&tri.card.name=='chiling') return -1;
								return 8-get.value(card)
							},
						},
						"clear":{
							trigger:{
								player:"useCardEnd",
							},
							forced:true,
							popup:false,
							filter:function(event,player){
								if(!event.card.isCard) return false;
								if(event.cards==undefined) return false;
								if(event.cards.length==0) return false;
								return player.storage.mpl_神界书库.contains(event.cards[0].name);
							},
							content:function(){
								if(trigger.cards[0].kzol_mpl_from=='mpl_神界书库'){
									delete trigger.cards[0].kzol_mpl_from;
								}else{
									//player.logSkill('mpl_神界书库');
									player.storage.mpl_神界书库.remove(trigger.cards[0].name);
									game.log(player,'的【神界书库】中【'+get.translation(trigger.cards[0].name)+'】的使用记录被重置了');
								};
							},
						},
					},
				},
				"mpl_非死即生":{
					nobracket:true,
					trigger:{
						player:"dying",
					},
					priority:-Infinity,
					forced:true,
					content:function(){
						"step 0"
						if(player.storage.mpl_非死即生==undefined) player.storage.mpl_非死即生=0;
						player.storage.mpl_非死即生++;
						if(player.storage.mpl_非死即生<=3&&player.hasSkill('mpl_死者之铠')){
							player.logSkill('mpl_死者之铠');
							player.recover(1-player.hp);
							event.finish();
						}else{
							player.judge('mpl_非死即生',function(card){
								return (get.color(card)=='black')?3:-3;
							});
						};
						"step 1"
						if(result.card){
							if(get.color(result.card)=='black'){
								//trigger.cancel();
								player.recover(1-player.hp);
							}else{
								player.gain(result.card,'gain2');
							};
						};
					},
				},
				"mpl_死者之铠":{
					nobracket:true,
					trigger:{
						player:"phaseAfter",
					},
					forced:true,
					filter:function(event,player){
						return player.storage.mpl_死者之铠_mark!=undefined;
					},
					content:function(){
						player.draw(2);
						delete player.storage.mpl_死者之铠_mark;
					},
					derivation:["tongji","mpl_死者之铠_benghuai","mpl_死者之铠_shiyong"],
					group:["mpl_死者之铠_mark","tongji","mpl_死者之铠_benghuai","mpl_死者之铠_shiyong"],
					subSkill:{
						"mark":{
							trigger:{
								player:"dying",
							},
							forced:true,
							popup:false,
							filter:function(event,player){
								return _status.currentPhase==player;
							},
							content:function(){
								player.storage.mpl_死者之铠_mark=true;
							},
						},
						"benghuai":{
							trigger:{
								player:'phaseJieshuBegin',
							},
							forced:true,
							filter:function(event,player){
								return !player.isMaxHp();
							},
							content:function(){
								"step 0"
								player.chooseControl('回复1点体力','增加1点体力上限',function(event,player){
									if(player.hp>=player.maxHp) return '增加1点体力上限';
									return '回复1点体力';
								}).set('prompt','崩坏：回复1点体力或增加1点体力上限');
								"step 1"
								if(result.control=='回复1点体力'){
									player.recover();
								}else{
									player.gainMaxHp();
								};
							},
						},
						"shiyong":{
							trigger:{
								player:'damageEnd',
							},
							forced:true,
							filter:function(event,player){
								return event.card&&event.card.name=='sha'&&(get.color(event.card)=='red'||event.getParent(2).jiu==true);
							},
							content:function(){
								player.gainMaxHp();
							},
						},
					},
				},
				"mpl_搞怪炼金术":{
					nobracket:true,
					trigger:{
						global:'loseEnd',
					},
					filter:function(event,player){
						if(event.player==player) return false;
						return event.es&&event.es.length>0&&game.countPlayer(function(current){
							return current.countCards('e')<event.player.countCards('e');
						})>0;
					},
					content:function(){
						'step 0'
						event.cards=[];
						for(var i=0;i<trigger.es.length;i++){
							event.cards.push(trigger.es[i]);
						};
						'step 1'
						event.card=event.cards[0];
						player.chooseTarget('选择【'+get.translation(event.card.name)+'】的目标',function(card,player,target){
							return target.countCards('e')<trigger.player.countCards('e')&&!target.isDisabled(get.subtype(event.card));
						}).ai=function(target){
							return get.attitude(player,target);
						};
						'step 2'
						if(result.bool){
							var target=result.targets[0];
							player.line(target);
							target.$give(event.card,player);
							target.equip(event.card);
						};
						event.cards.remove(event.card);
						if(event.cards.length>0) event.goto(1);
					},
					group:["mpl_搞怪炼金术_wuzhong"],
					subSkill:{
						"wuzhong":{
							enable:'chooseToUse',
							filterCard:function(card){
								return get.type(card)=='equip';
							},
							position:'he',
							viewAsFilter:function(player){
								return player.countCards('he',{type:'equip'})>0;
							},
							viewAs:{
								name:'wuzhong',
							},
							prompt:'将一张装备牌当【无中生有】使用',
							check:function(card){
								var player=get.owner(card);
								if(player.get('h').contains(card)&&
								(!player.isEmpty(get.subtype(card))||player.isDisabled(get.subtype(card)))){
									return 5;
								};
								return -1;
							},
						},
					},
				},
				"mpl_即时制造":{
					nobracket:true,
					trigger:{
						global:['shaBegin','useCardToTargeted'],
					},
					direct:true,
					filter:function(event,player){
						if(player.countCards('he')==0) return false;
						if(event.name=='sha'){
							return game.countPlayer(function(current){
								return !current.isEmpty(1);
							})>0;
						}else{
							return event.card&&event.card.name=='sha'&&game.countPlayer(function(current){
								return !current.isEmpty(2);
							})>0;
						};
					},
					content:function(){
						'step 0'
						var str='<br>'+get.translation(trigger.target)+'成为了【杀】的目标';
						if(trigger.name=='sha') str='<br>'+get.translation(trigger.player)+'对'+get.translation(trigger.target)+'使用了【杀】';
						player.chooseCard(get.prompt('mpl_即时制造')+str,1,'he').set('ai',function(card){
							if(trigger.name=='sha'){
								if(get.attitude(player,trigger.player)<=0) return 6-get.value(card);
							}else{
								if(get.attitude(player,trigger.player)>=0) return 6-get.value(card);
							};
							return -1;
						});
						'step 1'
						if(result.bool){
							player.discard(result.cards);
							player.draw(result.cards.length);
							var pos;
							if(trigger.name=='sha'){
								event.target=trigger.player;
								pos=1;
							}else{
								event.target=trigger.target;
								pos=2;
							};
							var list=[];
							for(var i=0;i<game.players.length;i++){
								var pl=game.players[i];
								if(pl.getEquip(pos)) list.push(pl.getEquip(pos));
							};
							player.chooseCardButton('请选择'+get.translation(event.target)+'暂时获得的技能',list).ai=function(button){
								return get.value(button.link);
							};
						}else{
							event.finish();
						};
						'step 2'
						if(result.bool){
							player.logSkill('mpl_即时制造');
							player.line(event.target);
							var card=result.links[0];
							var info=get.info(card);
							var skills;
							if(info) skills=info.skills;
							if(skills&&skills.length>0){
								for(var i=0;i<skills.length;i++){
									event.target.addTempSkill(skills[i],'shaAfter');
								};
							};
						};
					},
				},
			},
			translate:{
				"mpl_伊兹":"伊兹",
				"mpl_搞怪炼金术":"搞怪炼金术",
				"mpl_搞怪炼金术_info":"当其他角色失去装备区里的牌时，你可以改为将之移动至装备区牌数小于其的一名角色的装备区中；你可以将装备牌当【无中生有】使用",
				"mpl_即时制造":"即时制造",
				"mpl_即时制造_info":"当一名角色使用【杀】/成为【杀】的目标时，你可以重铸一张牌，令其本次结算中拥有场上一张武器牌/防具牌的装备技能",
				"mpl_克罗姆":"克罗姆",
				"mpl_非死即生":"非死即生",
				"mpl_非死即生_info":"锁定技，当你进入濒死状态时，须进行一次判定，若为黑色，你回复体力值至1；否则你获得此判定牌",
				"mpl_死者之铠":"死者之铠",
				"mpl_死者之铠_info":"锁定技，你视为拥有为【同疾】与技能效果反转的【崩坏】、【恃勇】；你脱离濒死状态的回合结束后摸两张牌；你前三次发动【非死即生】时无需判定",
				"mpl_死者之铠_benghuai":"崩坏",
				"mpl_死者之铠_benghuai_info":"锁定技，结束阶段，若你的体力值不为场上最高，你须增加1点体力上限或回复1点体力",
				"mpl_死者之铠_shiyong":"恃勇",
				"mpl_死者之铠_shiyong_info":"锁定技，你受到红色【杀】或【酒】【杀】造成的伤害后，增加1点体力上限",
				"mpl_奏":"奏",
				"mpl_神界书库":"神界书库",
				"mpl_神界书库_info":"出牌阶段开始时，你可以从【神界书库】中使用一张未被记录过使用的基本牌或非延时锦囊牌；你可以将被【神界书库】记录过使用的牌当作【无懈可击】使用；锁定技，当你使用被【神界书库】记录过使用的牌时，你重置【神界书库】中此牌的使用记录",
				"mpl_神界书库_viewAs":"神界书库",
				"mpl_神界书库_viewAs_info":"将一张以技能【神界书库】使用过的牌当【无懈可击】使用",
				"mpl_蜜伊":"蜜伊",
				"mpl_炎帝的愤怒":"炎帝的愤怒",
				"mpl_炎帝的愤怒_info":"出牌阶段限一次，你可以将武将牌翻面并对一名其他角色造成1点火焰伤害，然后你令另一名其他角色回复1点体力",
				"mpl_易碎的威严":"易碎的威严",
				"mpl_易碎的威严_info":"每轮每名角色限一次，当一名角色回复体力后，你可以弃置一张红色牌并对其造成1点火焰伤害",
				"mpl_结衣and麻衣":"结衣&麻衣",
				"mpl_破坏王":"破坏王",
				"mpl_破坏王_info":"你造成伤害时，可以将此伤害值改为你的体力值，然后“破坏王”无效直到你的体力值变化",
				"mpl_霞":"霞",
				"mpl_零式.虚无":"零式.虚无",
				"mpl_零式.虚无_info":"出牌阶段，你可以废除一个装备栏视为对一名角色使用【杀】；若你以此法失去了装备区里的牌，你可以摸两张牌",
				"mpl_五轮之妖刀":"五轮之妖刀",
				"mpl_五轮之妖刀_info":"限定技，准备阶段，你可以减少1点体力上限，恢复所有已废除的装备栏并摸等量的牌，然后你此后发动【零式.虚无】时可以弃置目标角色的一张牌",
				"mpl_莎莉":"莎莉",
				"mpl_迅速而敏捷的闪避":"迅速而敏捷的闪避",
				"mpl_迅速而敏捷的闪避_info":"你可以将最后一张手牌当【闪】或不可被抵消的【无懈可击】使用，然后摸两张牌",
				"mpl_多而不精":"多而不精",
				"mpl_多而不精_buff1":"多而不精",
				"mpl_多而不精_info":"出牌阶段，你可以将手牌中任意张基本牌或锦囊牌当作其中一张被选中的卡牌使用，目标数至多为以此法转化的牌数。锁定技，当你使用【杀】后，若其中一名目标角色使用【闪】抵消此【杀】则此【杀】对其余角色无效",
				"mpl_梅普露":"梅普露",
				"mpl_绝不倒下的盾":"绝不倒下的盾",
				"mpl_绝不倒下的盾_info":"锁定技，一张以你为使用者或唯一目标的牌生效前，你将之置于武将牌上，若之与武将牌上的牌点数重复，你移去之；当你武将牌上的[绝不倒下的盾]牌达到13张时，你死亡",
				"mpl_保护我的伙伴":"保护我的伙伴",
				"mpl_保护我的伙伴_info":"一名角色因受到伤害进入濒死状态时，你可以移去武将牌上一张与造成伤害的牌点数相同的[绝不倒下的盾]牌，然后令其回复体力至一或立即死亡",
			},
		};
		/*
		for(var i in ywtptjqdfyll.character){
			var c=ywtptjqdfyll.character[i];
			if(ywtptjqdfyll.characterSort.ywtptjqdfyll[c[1]]==undefined){
				ywtptjqdfyll.characterSort.ywtptjqdfyll[c[1]]=[];
			};
			ywtptjqdfyll.characterSort.ywtptjqdfyll[c[1]].push(i);
		};
		*/
		if(lib.device||lib.node){
			for(var i in ywtptjqdfyll.character){ywtptjqdfyll.character[i][4].push('ext:扩展ol/'+i+'.jpg');}
		}else{
			for(var i in ywtptjqdfyll.character){ywtptjqdfyll.character[i][4].push('db:extension-扩展ol:'+i+'.jpg');}
		}
		return ywtptjqdfyll;
	});
	lib.config.all.characters.push('ywtptjqdfyll');
	if(!lib.config.characters.contains('ywtptjqdfyll')) lib.config.characters.push('ywtptjqdfyll');
	//lib.translate['ywtptjqdfyll_character_config']='<div style="font-size:13px;top:-10px;">因为太怕痛就</div><div style="font-size:13px;top:5px;left:-39px;">全点防御力了</div>';
	lib.translate['ywtptjqdfyll_character_config']='MAPLE';
	lib.group.push('mpl_dfs');
	lib.translate['mpl_dfs']='大枫树';
	lib.group.push('mpl_yzdg');
	lib.translate['mpl_yzdg']='炎帝之国';
}