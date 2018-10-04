window.func=function(lib,game,ui,get,ai,_status){
		lib.element.player.lose_pos_equip=function(){
			var next=game.createEvent('lose_pos_equip');
			next.player=this;
			for(var i=0;i<arguments.length;i++){
				if(typeof arguments[i]=='string'){
					next.skill=arguments[i];
				};
			};
			var event=_status.event;
			next.source=event.player;
			next.setContent(lib.element.event.lose_pos_equip);
			return next;
		};
		lib.element.event.lose_pos_equip=function(){
			event.trigger('lose_pos_equip');
			if(!player.storage.lose_pos_equip.contains(skill)){
				player.storage.lose_pos_equip.push(skill);
				player.markSkill('_support');
				player.syncStorage('_support');
				var str=skill.slice(skill.length-1,skill.length);
				if(player.get('e',str)!=undefined) player.discard(player.get('e',str));
			};
			game.log(player,'废除了',get.translation(skill),'栏');
		};
		lib.element.player.recover_pos_equip=function(){
			var next=game.createEvent('recover_pos_equip');
			next.player=this;
			for(var i=0;i<arguments.length;i++){
				if(typeof arguments[i]=='string'){
					next.skill=arguments[i];
				};
			};
			var event=_status.event;
			next.source=event.player;
			next.setContent(lib.element.event.recover_pos_equip);
			return next;
		};
		lib.element.event.recover_pos_equip=function(){
			event.trigger('recover_pos_equip');
			if(player.storage.lose_pos_equip.contains(skill)){
				player.storage.lose_pos_equip.remove(skill);
				player.syncStorage('_support');
				if(player.storage.lose_pos_equip.length==0) player.unmarkSkill('_support');
			};
			game.log(player,'恢复了',get.translation(skill),'栏');
		};
		game.import('character',function(){
			var yl={
				name:'yl',
				connect:true,
				character:{
					"yin_严颜":["male","shu",4,["yl_拒战"],[]],
					"yin_王平":["male","shu",4,["yl_飞军","yl_兵略"],[]],
					"yin_陆绩":["male","wu",3,["yl_怀橘","yl_遗礼","yl_整论"],[]],
					"yin_孙亮":["male","wu",3,["yl_溃诛","yl_掣政","yl_立军"],['zhu']],
					"yin_许攸":["male","qun",3,["yl_成略","yl_恃才","yl_寸目"],[]],
					"yin_卢植":["male","qun",3,["yl_明任","yl_贞良"],[]],
					"yin_神刘备":["male","shen",6,["yl_龙怒","yl_结营"],[]],
					"yin_神陆逊":["male","shen",4,["yl_军略","yl_摧克","yl_绽火"],[]],
					"yin_蒯良蒯越":["male","wei",3,["yl_荐降","yl_审时"],[]],
					"lei_毋丘俭":["male","wei",4,["yl_徵荣","yl_鸿举"],[]],
					"lei_郝昭":["male","wei",4,["yl_镇骨"],[]],
					"lei_诸葛瞻":["male","shu",3,["yl_罪论","yl_父荫"],[]],
					"lei_周妃":["female","wu",3,["yl_良姻","yl_箜声"],[]],
					"lei_陆抗":["male","wu",4,["yl_谦节","yl_决堰","yl_破势"],[]],
					"lei_袁术":["male","qun",4,["yl_庸肆","yl_伪帝"],[]],
					"lei_张绣":["male","qun",4,["yl_雄乱","yl_从谏"],[]],
					"lei_陈到":["male","shu",4,["yl_往烈"],[]],
					"lei_神张辽":["male","shen",4,["yl_夺锐","yl_止啼"],[]],
					"lei_神甘宁":["male","shen","3<img src='"+lib.assetURL+"theme/style/hp/image/official4.png' width='12' height='12'>3",["yl_魄袭","yl_劫营"],[]],
				},
				skill:{
					"_support":{
						marktext:"废",
						intro:{
							content:function(storage,player,skill){
								var str='';
								for(var i=0;i<player.storage.lose_pos_equip.length;i++){
									str+='、'+get.translation(player.storage.lose_pos_equip[i])+'栏';
								};
								str=str.slice(1,str.length)
								str='已经废除了'+str;
								return str;
							},
						},
						mod:{
							cardEnabled:function(card,player){
								if(player.storage.lose_pos_equip!=undefined&&player.storage.lose_pos_equip.contains(get.subtype(card))) return false;
							},
						},
						trigger:{
							player:['lose_pos_equipBefore','recover_pos_equipBefore'],
						},
						forced:true,
						popup:false,
						filter:function(event,player){
							return player.storage.lose_pos_equip==undefined;
						},
						content:function(){
							player.storage.lose_pos_equip=[];
						},
					},
					"yl_拒战":{
						mark:true,
						locked:true,
						marktext:'拒',
						intro:{
							content:function(storage,player,skill){
								if(player.storage.yl_拒战1==true) return '当你使用【杀】指定一名角色为目标后，你可以获得其一张牌，然后你本回合内不能再对其使用牌';
								return '当你成为其他角色【杀】的目标后，你可以与其各摸一张牌，然后其本回合内不能再对你使用牌';
							},
						},
						mod:{
							targetEnabled:function(card,player,target){
								if(player.storage.yl_拒战==true) return false;
							},
						},
						group:["yl_拒战_1","yl_拒战_2"],
						subSkill:{
							'1':{
								trigger:{
									global:'shaBegin'
								},
								filter:function (event,player){
									return event.targets&&event.targets.contains(player)&&(player.storage.yl_拒战1==false||player.storage.yl_拒战1==undefined);
								},
								content:function(){
									player.draw();
									trigger.player.draw();
									trigger.player.storage.yl_拒战=true;
									trigger.player.markSkill('yl_拒战1');
									player.storage.yl_拒战1=true;
								},
							},
							'2':{
								trigger:{
									player:'shaBegin'
								},
								filter:function (event,player){
									return player.storage.yl_拒战1==true;
								},
								check:function (event,player){
									return event.player.countCards('he')>0&&event.targets&&event.targets.length==1;
								},
								content:function(){
									player.gainPlayerCard(trigger.targets[0],'he');
									player.storage.yl_拒战1=false;
									player.markSkill('yl_拒战1');
									player.storage.yl_拒战2=true;
								},
							},
						},
					},
					"yl_拒战1":{
						marktext:'拒',
						intro:{
							content:'',
						},
					},
					"_yl_拒战":{
						mod:{
							targetEnabled:function(card,player,target){
								if(player.storage.yl_拒战2==true) return false;
							},
						},
						trigger:{
							player:'phaseAfter'
						},
						filter:function (event,player){
							return player.storage.yl_拒战==true||player.storage.yl_拒战2==true;
						},
						forced:true,
						popup:false,
						content:function(){
							if(player.storage.yl_拒战==true) delete player.storage.yl_拒战;
							if(player.storage.yl_拒战2==true) delete player.storage.yl_拒战2;
							player.unmarkSkill('yl_拒战1');
						},
					},
					"yl_飞军":{
						init:function(player){
							player.storage.yl_飞军=[];
						},
						marktext:"飞",
						intro:{
							content:function(storage){
								var str='';
								for(var i=0;i<storage.length;i++){
									str+='、';
									str+=get.translation(storage[i].name);
								};
								str=str.slice(1);
								return '已对'+str+'发动';
							},
						},
						mark:true,
						enable:"phaseUse",
						usable:1,
						filter:function(event,player){
							return game.countPlayer(function(current){return current.countCards('h')>player.countCards('h')})>0||game.countPlayer(function(current){return current.countCards('e')>player.countCards('e')})>0;
						},
						filterCard:true,
						check:function(card){
							return 5-get.value(card);
						},
						content:function(){
							'step 0'
							var list=[];
							if(game.countPlayer(function(current){return current.countCards('h')>player.countCards('h')})>0) list.push('令一名手牌数大于你的角色交给你一张牌');
							if(game.countPlayer(function(current){return current.countCards('e')>player.countCards('e')})>0) list.push('令一名装备区里牌数大于你的角色弃置一张装备牌');
							player.chooseControl(list).set('ai',function(){
								if(game.countPlayer(function(current){return current.countCards('h')>player.countCards('h')&&get.attitude(player,current)<0})>0) return '令一名手牌数大于你的角色交给你一张牌';
								return '令一名装备区里牌数大于你的角色弃置一张装备牌';
							});
							'step 1'
							if(result.control=='令一名手牌数大于你的角色交给你一张牌'){
								event.control='令一名手牌数大于你的角色交给你一张牌';
								player.chooseTarget(function(card,player,target){
									return target.countCards('h')>player.countCards('h')&&target!=player;
								},'请选择【飞军】的目标').ai=function(target){
									return -get.attitude(player,target)
								};
							}else{
								event.control='令一名装备区里牌数大于你的角色弃置一张装备牌';
								player.chooseTarget(function(card,player,target){
									return target.countCards('e')>player.countCards('e')&&target!=player;
								},'请选择【飞军】的目标').ai=function(target){
									return -get.attitude(player,target)
								};
							};
							'step 2'
							if(result.bool){
								event.target=result.targets[0];
								if(player.hasSkill('yl_兵略')&&!player.storage.yl_飞军.contains(event.target)){
									player.draw(2);
									player.storage.yl_飞军.push(event.target);
									player.syncStorage('yl_飞军');
									player.logSkill('yl_兵略');
								};
								player.line(event.target);
								if(event.control=='令一名手牌数大于你的角色交给你一张牌'){
									event.target.chooseCard(1,'h',true).set('ai',function(card){
										return 6-get.value(card);
    								});
								}else{
									event.target.chooseToDiscard(1,'e',true);
									event.finish();
								};
							}else{
								event.finish();
							};
							'step 3'
							if(result.bool){
								event.target.$give(result.cards.length,player);
								player.gain(result.cards,event.target);
							};
						},
						ai:{
							order:11,
							result:{
								player:function(player){
									if(game.countPlayer(function(current){return (current.countCards('h')>player.countCards('h')||current.countCards('e')>player.countCards('e'))&&get.attitude(player,current)<0&&!player.storage.yl_飞军.contains(current)})>0||game.countPlayer(function(current){return current.countCards('h')>player.countCards('h')&&get.attitude(player,current)<0})>0||(player.countCards('h')>=2&&game.countPlayer(function(current){return current.countCards('e')>player.countCards('e')&&get.attitude(player,current)<0})>0)) return 1;
								},
							},
						},
					},
					"yl_兵略":{},
					"yl_怀橘":{
						marktext:"橘",
						init:function(player){
							player.storage.yl_怀橘=0;
						},
						intro:{
							content:function(storage){
								return '当前有'+storage+'个“橘”';
							},
						},
						mark:true,
						trigger:{
							global:'gameStart'
						},
						forced:true,
						content:function(){
							player.storage.yl_怀橘+=3;
							player.syncStorage('yl_怀橘');
							game.log(player,'获得了3个“橘”');
						},	
					},
					"_yl_怀橘":{
						trigger:{
							player:'damageBefore'
						},
						forced:true,
						filter:function (event,player){
							return player.storage.yl_怀橘>0;
						},
						content:function(){
							trigger.cancel();
							player.storage.yl_怀橘--;
							player.syncStorage('yl_怀橘');
							if(player.storage.yl_怀橘<=0) player.unmarkSkill('yl_怀橘');
							game.log(player,'移去了1个“橘”');
						},	
					},
					"_yl_怀橘1":{
						trigger:{
							player:'phaseDrawBegin'
						},
						forced:true,
						filter:function (event,player){
							return player.storage.yl_怀橘>0;
						},
						content:function(){
							trigger.num++;
						},	
					},
					"yl_遗礼":{
						trigger:{
							player:'phaseUseBegin'
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('yl_遗礼'),function(card,player,target){
								return target!=player
							}).ai=function(target){
								if(player.storage.yl_怀橘>1) return get.attitude(player,target);
								return -1;
							};
							'step 1'
							if(result.bool){
								event.target=result.targets[0];
								var list=['流失一点体力'];
								if(player.storage.yl_怀橘>0) list.push('移去一个“橘”');
								player.chooseControl(list).set('ai',function(){
									if(player.storage.yl_怀橘>0) return '移去一个“橘”';
									return '流失一点体力';
								});
							}else{
								event.finish();
							};
							'step 2'
							if(result.control=='移去一个“橘”'){
								player.storage.yl_怀橘--;
								player.syncStorage('yl_怀橘');
								if(player.storage.yl_怀橘<=0) player.unmarkSkill('yl_怀橘');
								game.log(player,'移去了1个“橘”');
							}else{
								player.loseHp();
							};
							player.line(event.target);
							player.logSkill('yl_怀橘');
							if(event.target.storage.yl_怀橘==undefined) event.target.storage.yl_怀橘=0;
							event.target.markSkill('yl_怀橘');
							event.target.storage.yl_怀橘++;
							event.target.syncStorage('yl_怀橘');
							game.log(event.target,'获得了1个“橘”');
						},	
					},
					"yl_整论":{
						trigger:{
							player:'phaseDrawBefore'
						},
						filter:function (event,player){
							return player.storage.yl_怀橘==undefined||player.storage.yl_怀橘==0;
						},
						check:function (event,player){
							return player.countCards('h')>=2||player.skipList.contains('phaseUse');
						},
						content:function(){
							trigger.cancel();
							if(player.storage.yl_怀橘==undefined) player.storage.yl_怀橘=0;
							player.markSkill('yl_怀橘');
							player.storage.yl_怀橘++;
							player.syncStorage('yl_怀橘');
							game.log(player,'获得了1个“橘”');
						},	
					},
					"yl_溃诛":{
						trigger:{
							player:'phaseDiscardAfter'
						},
						direct:true,
						filter:function (event,player){
							return event.num>0;
						},
						content:function(){
							'step 0'
							event.str1='令至多'+trigger.num+'名角色摸一张牌';
							event.str2='对任意名体力值之和为'+trigger.num+'的角色造成一点伤害';
							player.chooseControl([event.str1,event.str2]).set('ai',function(){
								if(game.countPlayer(function(current){return get.attitude(player,current)<0&&current.hp==trigger.num})>0&&trigger.num<=3) return event.str2;
								return event.str1;
							});
							'step 1'
							event.control=result.control;
							'step 2'
							var str='请选择【溃诛】的目标';
							if(event.bool==false) str='所选目标体力之和不足'+trigger.num+'，请重选';
							if(event.control==event.str2){
								player.chooseTarget(str,[1,Infinity],function(card,player,target){
									var targets=ui.selected.targets;
									var num=0;
									for(var i=0;i<targets.length;i++){
										num+=targets[i].hp;
									};
									return num+target.hp<=trigger.num;
								}).ai=function(target){
									if(ui.selected.targets[0]!=undefined) return -1;
									return get.attitude(player,target)<0;
								};
							}else{
								player.chooseTarget('请选择【溃诛】的目标',[1,trigger.num]).ai=function(target){
									return get.attitude(player,target);
								};
							};
							'step 3'
							if(result.bool){
								var targets=result.targets;
								if(event.control==event.str1){
									player.line(targets);
									player.logSkill('yl_溃诛');
									for(var i=0;i<targets.length;i++){
										targets[i].draw();
									};
								}else{
									var num=0;
									for(var i=0;i<targets.length;i++){
										num+=targets[i].hp;
									};
									if(num<trigger.num){
										event.bool=false;
										event.goto(2);
									}else{
										player.line(targets);
										player.logSkill('yl_溃诛');
										for(var i=0;i<targets.length;i++){
											targets[i].damage();
										};
										if(targets.length>=2) player.damage();
									};
								};
							};
						},	
					},
					"yl_掣政":{
						group:["yl_掣政_1","yl_掣政_2","yl_掣政_3"],
						subSkill:{
							"1":{
								trigger:{
									player:'phaseUseBefore'
								},
								forced:true,
								popup:false,
								content:function(){
									player.storage.yl_掣政=0;
								},	
							},
							"2":{
								trigger:{
									player:'phaseUseEnd'
								},
								direct:true,
								filter:function (event,player){
									return player.storage.yl_掣政<game.countPlayer(function(current){return get.distance(current,player,'attack')>1});
								},
								content:function(){
									'step 0'
									player.chooseTarget(get.prompt('yl_掣政'),function(card,player,target){
										return get.distance(target,player,'attack')>1;
									}).ai=function(target){
										return -get.attitude(player,target);
									};
									'step 1'
									if(result.bool){
										player.line(result.targets);
										player.logSkill('yl_掣政');
										player.discardPlayerCard(result.targets[0],'he',1);
									};
								},	
							},
							"3":{
								trigger:{
									player:'phaseUseAfter'
								},
								forced:true,
								popup:false,
								content:function(){
									delete player.storage.yl_掣政;
								},	
							},
						},
					},
					"_yl_掣政":{
						mod:{
							targetEnabled:function(card,player,target){
								if(player.storage.yl_掣政>=0&&get.distance(target,player,'attack')>1) return false;
							},
						},
						trigger:{
							player:'useCardAfter'
						},
						filter:function (event,player){
							return player.storage.yl_掣政>=0;
						},
						forced:true,
						popup:false,
						content:function(){
							player.storage.yl_掣政++;
						},
					},
					"yl_立军":{
						unique:true,
						global:'yl_立军1',
						zhuSkill:true,
					},
					"yl_立军1":{
						trigger:{
							player:'shaAfter'
						},
						filter:function(event,player){
							if(player.group!='wu') return false;
							if(_status.currentPhase!=player) return false;
							return game.hasPlayer(function(target){
								return player!=target&&target.hasZhuSkill('yl_立军',player);
							});
						},
						prompt:'是否将此【杀】交给主公？',
						check:function(event,player){
							return game.zhu!=undefined&&get.attitude(player,game.zhu)>0;
						},
						content:function(){
							'step 0'
							player.$give(trigger.card,game.zhu);
							game.zhu.gain(trigger.card);
							game.zhu.chooseControl(['是','否']).set('ai',function(){
								if(get.attitude(game.zhu,player)>0) return '是';
								return '否';
							}).set('prompt','是否令'+get.translation(player.name)+'摸一张牌？');
							'step 1'
							if(result.control=='是') player.draw();
						},
					},
					"yl_成略":{
						mark:true,
						locked:true,
						marktext:'成',
						intro:{
							content:function(storage,player,skill){
								if(player.storage.yl_成略==true) return '出牌阶段限一次，你可以摸两张牌，然后弃置一张手牌。若如此做，直到本回合结束，你使用与弃置牌花色相同的牌无距离和次数限制';
								return '出牌阶段限一次，你可以摸一张牌，然后弃置两张手牌。若如此做，直到本回合结束，你使用与弃置牌花色相同的牌无距离和次数限制';
							},
						},
						enable:"phaseUse",
						usable:1,
						filter:function(event,player){
							var num=1;
							if(player.storage.yl_成略==true) num=0;
							return player.countCards('h')>=num;
						},
						content:function(){
							'step 0'
							if(player.storage.yl_成略==true){
								player.storage.yl_成略=false;
								player.draw(2);
								player.chooseToDiscard('h',true);
							}else{
								player.storage.yl_成略=true;
								player.draw();
								player.chooseToDiscard('h',2,true);
							};
							'step 1'
							if(result.bool){
								player.storage.yl_成略1=result.cards;
								player.addTempSkill('yl_成略1',{player:'phaseAfter'});
							};
						},
						ai:{
							order:13,
							result:{
								player:function(player){
									if((player.storage.yl_成略==undefined||player.storage.yl_成略==false)&&player.countCards('h')<3) return 0;
									return 1;
								},
							},
						},
					},
					"yl_成略1":{
						marktext:"成",
						intro:{
							content:'cards',
						},
						mark:true,
						mod:{
							cardUsable:function(card,player){
								var cards=player.storage.yl_成略1;
								for(var i=0;i<cards.length;i++){
									if(get.suit(cards[i])==get.suit(card)) return Infinity;
								};
							},
							targetInRange:function(card,player){
								var cards=player.storage.yl_成略1;
								for(var i=0;i<cards.length;i++){
									if(get.suit(cards[i])==get.suit(card)) return true;
								};
							}
						},
					},
					"yl_恃才":{
						group:["yl_恃才_1","yl_恃才_2","yl_恃才_3"],
						subSkill:{
							"1":{
								trigger:{
									player:'phaseBefore'
								},
								forced:true,
								popup:false,
								content:function(){
									player.storage.yl_恃才=[];
								},	
							},
							"2":{
								trigger:{
									player:'useCardAfter'
								},
								filter:function (event,player){
									return player.storage.yl_恃才!=undefined&&!player.storage.yl_恃才.contains(get.type(event.card));
								},
								check:function (event,player){
									return get.type(event.card)!='equip'&&get.type(event.card)!='delay';
								},
								content:function(){
									player.storage.yl_恃才.push(get.type(trigger.card));
									for(var i=0;i<trigger.cards.length;i++){
										ui.cardPile.insertBefore(trigger.cards[i],ui.cardPile.firstChild);
										if(ui.cardPileNumber) ui.cardPileNumber.innerHTML=game.roundNumber+'轮 剩余牌: '+ui.cardPile.childNodes.length;
										game.log(player,'将',trigger.cards[i],'置于牌堆顶');
										player.lose(trigger.cards[i],ui.special);
									};
									player.draw();
								},	
							},
							"3":{
								trigger:{
									player:'phaseAfter'
								},
								forced:true,
								popup:false,
								content:function(){
									delete player.storage.yl_恃才;
								},	
							},
						},
					},
					"yl_寸目":{
						trigger:{
							player:'drawBegin'
						},
						forced:true,
						content:function(){
							'step 0'
							trigger.cancel();
							event.list=[];
							event.num=0;
							'step 1'
							event.list.push(ui.cardPile.removeChild(ui.cardPile.lastChild));
							event.num++;
							if(event.num<trigger.num) event.redo();
							'step 2'
							if(ui.cardPileNumber) ui.cardPileNumber.innerHTML=game.roundNumber+'轮 剩余牌: '+ui.cardPile.childNodes.length;
							player.gain(event.list);
							player.$draw(trigger.num);
							game.log(player,'从牌堆底摸'+get.cnNumber(trigger.num)+'张牌');
						},	
					},
					"yl_明任":{
						init:function (player){
							player.storage.yl_明任=[];
						},
						marktext:"任",
						intro:{
							content:'cards',
						},
						mark:true,
						group:["yl_明任_1","yl_明任_2"],
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
									player.chooseCard('h','请选择一张手牌置于你的武将牌上，称为“任”',true).set('ai',function(card){
										return 6-get.value(card);
    								});
									'step 2'
									if(result.bool){
										player.storage.yl_明任.push(result.cards[0]);
										player.syncStorage('yl_明任');
										game.log(player,'将',result.cards[0],'置于其武将牌上');
										player.lose(result.cards[0],ui.special);
									};
								},
							},
							'2':{
								trigger:{
									player:'phaseEnd',
								},
								direct:true,
								content:function (){
									'step 0'
									player.chooseCard('h','是否用一张手牌替换“任”？').set('ai',function(card){
										return 5-get.value(card);
    								});
									'step 1'
									if(result.bool){
										player.logSkill('yl_明任');
										if(player.storage.yl_明任!=undefined&&player.storage.yl_明任[0]!=undefined){
											player.gain(player.storage.yl_明任[0],'gain2');
											player.storage.yl_明任.remove(player.storage.yl_明任[0]);
										};
										player.syncStorage('yl_明任');
										player.storage.yl_明任.push(result.cards[0]);
										player.syncStorage('yl_明任');
										game.log(player,'将',result.cards[0],'置于其武将牌上');
										player.lose(result.cards[0],ui.special);
									};
								},
							},
						},
					},
					"yl_贞良":{
						mark:true,
						locked:true,
						marktext:'贞',
						intro:{
							content:function(storage,player,skill){
								if(player.storage.yl_贞良==true) return '你的回合外，当你使用或打出牌进入弃牌堆时，若此牌与“任”类型相同，则你可以令一名角色摸一张牌';
								return '出牌阶段限一次，你可以选择一名攻击范围内的其他角色，然后弃置X张与“任”颜色相同的牌并对其造成一点伤害（X为你与其的体力差且至少为1）';
							},
						},
						group:["yl_贞良_1","yl_贞良_2"],
						subSkill:{
							'1':{
								enable:'phaseUse',
								usable:1,
								filter:function(event,player){
									return game.countPlayer(function(current){
										return current!=player&&
										get.distance(player,current,'attack')<=1&&
										Math.abs(current.hp-player.hp)>=1&&
										player.storage.yl_明任!=undefined&&
										player.countCards('he',{color:get.color(player.storage.yl_明任[0])})>=Math.abs(current.hp-player.hp);
									})>0&&player.storage.yl_贞良!=true;
								},
								filterTarget:function(card,player,target){
									return player.storage.yl_明任!=undefined&&
									target!=player&&
									get.distance(player,target,'attack')<=1&&
									Math.abs(target.hp-player.hp)>=1&&
									player.countCards('he',{color:get.color(player.storage.yl_明任[0])})>=Math.abs(target.hp-player.hp);
								},
								content:function(){
									'step 0'
									player.chooseCard('请发动【贞良】的牌',Math.abs(target.hp-player.hp),'he',{color:get.color(player.storage.yl_明任[0])},true).set('ai',function(card){
										return 6-get.value(card);
									});
									'step 1'
									if(result.bool){
										player.storage.yl_贞良=true;
										player.discard(result.cards);
										target.damage();
									};
								},
								ai:{
									order:5,
									result:{
										target:function(player,target){
											if(Math.abs(target.hp-player.hp)<=1) return -1;
										},
									},
								},
							},
							'2':{
								trigger:{
									player:['useCardAfter','respondAfter'],
								},
								filter:function (event,player){
									return _status.currentPhase!=player&&
									player.storage.yl_明任!=undefined&&
									player.storage.yl_明任[0]!=undefined&&
									get.type(player.storage.yl_明任[0])==get.type(event.card)&&
									player.storage.yl_贞良==true;
								},
								direct:true,
								content:function(){
									"step 0"
									player.chooseTarget(get.prompt('yl_贞良')).ai=function(target){
										return get.attitude(player,target)
									};
									"step 1"
									if(result.bool){
										player.storage.yl_贞良=false;
										player.line(result.targets);
										player.logSkill('yl_贞良');
										result.targets[0].draw();
									}else{
										event.finish();
									};
								},
							},
						},
					},
					"yl_龙怒":{
						mark:true,
						locked:true,
						marktext:'龙',
						intro:{
							content:function(storage,player,skill){
								if(player.storage.yl_龙怒==true) return '锁定技，出牌阶段开始时，你减1点体力上限并摸一张牌，然后本回合你的锦囊牌均视为雷杀且无使用次数限制';
								return '锁定技，出牌阶段开始时，你流失一点体力并摸一张牌，然后本回合你的红色手牌均视为火杀且无距离限制';
							},
						},
						trigger:{
							player:'phaseUseBegin'
						},
						forced:true,
						content:function(){
							if(player.storage.yl_龙怒==true){
								player.storage.yl_龙怒=false;
								player.loseMaxHp();
								player.draw();
								player.addTempSkill('yl_龙怒_2',{player:'phaseAfter'});
							}else{
								player.storage.yl_龙怒=true;
								player.loseHp();
								player.draw();
								player.addTempSkill('yl_龙怒_1',{player:'phaseAfter'});
							};
						},
						subSkill:{
							'1':{
								mod:{
									cardEnabled:function(card,player){
										if(_status.event.skill!='yl_龙怒_1'&&(card.name!='sha'||card.nature!='fire')&&get.color(card)=='red') return false;
									},
									cardUsable:function(card,player){
										if(_status.event.skill!='yl_龙怒_1'&&(card.name!='sha'||card.nature!='fire')&&get.color(card)=='red') return false;
									},
									cardRespondable:function(card,player){
										if(_status.event.skill!='yl_龙怒_1'&&(card.name!='sha'||card.nature!='fire')&&get.color(card)=='red') return false;
									},
									cardSavable:function(card,player){
										if(_status.event.skill!='yl_龙怒_1'&&(card.name!='sha'||card.nature!='fire')&&get.color(card)=='red') return false;
									},
									targetInRange:function(card){
										if((card.name=='sha'&&card.nature=='fire')||_status.event.skill=='yl_龙怒_1') return true;
									},
								},
								enable:['chooseToUse','chooseToRespond'],
								filterCard:{color:'red'},
								viewAs:{name:'sha',nature:'fire'},
								check:function(){return 1},
								ai:{
									effect:{
										target:function(card,player,target,current){
											if(get.tag(card,'respondSha')&&current<0) return 0.6
										}
									},
									respondSha:true,
									order:4,
									useful:-1,
									value:-1
								},
							},
							'2':{
								mod:{
									cardEnabled:function(card,player){
										if(_status.event.skill!='yl_龙怒_2'&&get.type(card)=='trick') return false;
									},
									cardUsable:function(card,player){
										if(_status.event.skill!='yl_龙怒_2'&&get.type(card)=='trick') return false;
									},
									cardRespondable:function(card,player){
										if(_status.event.skill!='yl_龙怒_2'&&get.type(card)=='trick') return false;
									},
									cardSavable:function(card,player){
										if(_status.event.skill!='yl_龙怒_2'&&get.type(card)=='trick') return false;
									},
									cardUsable:function(card,player){
										if(card.name=='sha'&&card.nature=='thunder') return Infinity;
									},
								},
								enable:['chooseToUse','chooseToRespond'],
								filterCard:{type:'trick'},
								viewAs:{name:'sha',nature:'thunder'},
								check:function(){return 1},
								ai:{
									effect:{
										target:function(card,player,target,current){
											if(get.tag(card,'respondSha')&&current<0) return 0.6
										}
									},
									respondSha:true,
									order:4,
									useful:-1,
									value:-1
								},
							},
						},
					},
					"yl_结营":{
						init:function(player){
							if(!player.isLinked()){
								player.link();
								player.logSkill('yl_结营');
							};
						},
						group:["yl_结营_1","yl_结营_2"],
						subSkill:{
							'1':{
								trigger:{
									player:'linkAfter'
								},
								forced:true,
								filter:function (event,player){
									return !player.isLinked();
								},
								content:function(){
									setTimeout(function(){
										if(!player.isLinked()) player.link();
									},2000);
								},	
							},
							'2':{
								trigger:{
									player:'phaseEnd',
								},
								direct:true,
								content:function(){
									"step 0"
									player.chooseTarget(get.prompt('yl_结营'),function(card,player,target){
										return target!=player;
									}).ai=function(target){
										if(!target.isLinked()) return get.attitude(player,target);
										return -1;
									};
									"step 1"
									if(result.bool){
										player.line(result.targets);
										player.logSkill('yl_结营');
										result.targets[0].link();
									}else{
										event.finish();
									};
								},
							},
						},
					},
					"_yl_结营":{
						mod:{
							maxHandcard:function (player,num){
								if(game.countPlayer(function(current){return current.hasSkill('yl_结营')})>0&&player.isLinked()) return num+2;
							},
						},
					},
					"yl_军略":{
						init:function(player){
							player.storage.yl_军略=0;
						},
						marktext:"军",
						intro:{
							content:function(storage){
								return '当前有'+storage+'个“军略”标记';
							},
						},
						mark:true,
						trigger:{
							player:"damageAfter",
							source:"damageAfter",
						},
						forced:true,
						content:function(){
							player.storage.yl_军略++;
							player.syncStorage('yl_军略');
							game.log(player,'获得一个“军略”标记');
						},
					},
					"yl_摧克":{
						trigger:{
							player:"phaseUseBegin",
						},
						direct:true,
						content:function(){
							'step 0'
							if(player.storage.yl_军略%2==1){
								player.chooseTarget('是否发动【摧克】来对一名角色造成一点伤害？').ai=function(target){
									return -get.attitude(player,target);
								};
							}else if(player.storage.yl_军略%2==0){
								player.chooseTarget('是否发动【摧克】来横置一名角色并弃置其区域内的一张牌？').ai=function(target){
									return -get.attitude(player,target);
								};
							}else{
								event.finish();
							};
							'step 1'
							if(result.bool){
								player.line(result.targets);
								player.logSkill('yl_摧克');
								if(player.storage.yl_军略%2==1){
									result.targets[0].damage();
								}else{
									result.targets[0].link();
									player.discardPlayerCard(result.targets[0],1,'hej');
								};
							};
							'step 2'
							if(player.storage.yl_军略>7){
								player.chooseControl(['是','否']).set('ai',function(){
									return '是';
								}).set('prompt','是否弃置所有“军略”标记并对所有其他角色造成一点伤害？');
							}else{
								event.finish();
							};
							'step 3'
							if(result.control=='是'){
								player.line(game.players);
								player.logSkill('yl_摧克');
								player.storage.yl_军略=0;
								player.syncStorage('yl_军略');
								game.log(player,'移去了所有“军略”标记');
								for(var i=0;i<game.players.length;i++){
									if(game.players[i]!=player) game.players[i].damage();
								};
							};
						},
					},
					"yl_绽火":{
						init:function (player){
							player.storage.yl_绽火=false;
						},
						intro:{
							content:"limited",
						},
						unique:true,
						mark:true,
						skillAnimation:true,
						trigger:{
							player:"phaseUseBegin",
						},
						filter:function (event,player){
							return !player.storage.yl_绽火&&player.storage.yl_军略>0;
						},
						check:function (event,player){
							var num=game.countPlayer(function(current){return get.attitude(player,current)<0&&current.isLinked()});
							return player.storage.yl_军略>=num&&num==game.countPlayer(function(current){return get.attitude(player,current)<0});
						},
						content:function (){
							'step 0'
							player.awakenSkill('yl_绽火');
							player.storage.yl_绽火=true;
							player.chooseTarget([0,player.storage.yl_军略],'请选择【绽火】的目标',function(card,player,target){
								return target.isLinked();
							}).ai=function(target){
								return -get.attitude(player,target);
							};
							'step 1'
							if(result.bool){
								player.line(result.targets);
								player.storage.yl_军略=0;
								player.syncStorage('yl_军略');
								game.log(player,'移去了所有“军略”标记');
								for(var i=0;i<result.targets.length;i++){
									result.targets[i].discard(result.targets[i].get('e'));
									result.targets[i].damage('fire');
								};
							};
						},
					},
					'yl_荐降':{
						trigger:{
							global:'useCardBefore',
						},
						filter:function (event,player){
							return event.player!=player&&event.targets&&event.targets.contains(player);
						},
						direct:true,
						content:function(){
							"step 0"
							player.chooseTarget(get.prompt('yl_荐降'),function(card,player,target){
								return target.isMinHandcard();
							}).ai=function(target){
								return get.attitude(player,target)
							};
							"step 1"
							if(result.bool){
								player.line(result.targets);
								player.logSkill('yl_荐降');
								result.targets[0].draw();
							}else{
								event.finish();
							};
						},
					},
					"yl_审时":{
						mark:true,
						locked:true,
						marktext:'审',
						intro:{
							content:function(storage,player,skill){
								if(player.storage.yl_审时==true) return '其他角色对你造成伤害后，你可以观看该角色的手牌，然后交给其一张牌，当前角色回合结束时，若该角色未失去此牌，你将手牌摸至四张';
								return '出牌阶段限一次，你可以将一张牌交给一名手牌数最多的角色，然后对其造成一点伤害，若该角色因此死亡，则你可以令一名角色将手牌摸至四张';
							},
						},
						group:["yl_审时_1","yl_审时_2"],
						subSkill:{
							'1':{
								enable:'phaseUse',
								usable:1,
								filter:function(event,player){
									return player.countCards('h')>0&&player.storage.yl_审时!=true;
								},
								discard:false,
								line:true,
								prepare:'give',
								position:'he',
								filterCard:true,
								filterTarget:function(card,player,target){
									return target.isMaxHandcard();
								},
								check:function(card){
									return 5-get.value(card);
								},
								content:function(){
									'step 0'
									player.storage.yl_审时=true;
									target.gain(cards,player);
									target.damage();
									'step 1'
									if(!target.isAlive()){
										player.chooseTarget('请选择一名角色并令其将手牌摸至四张',function(card,player,target){
											return target.countCards('h')<4;
										}).ai=function(target){
											return get.attitude(player,target)
										};
									}else{
										event.finish();
									};
									'step 2'
									if(result.bool){
										player.line(result.targets);
										result.targets[0].draw(4-result.targets[0].countCards('h'))
									};
								},
								ai:{
									order:1,
									result:{
										target:function(player,target){
											return -1;
										},
									},
								},
							},
							'2':{
								trigger:{
									player:'damageAfter',
								},
								filter:function (event,player){
									return player.countCards('he')>0&&event.source&&event.source!=player&&player.storage.yl_审时==true;
								},
								check:function (event,player){
									return event.source&&event.source.countCards('h')<=2&&player.countCards('h')<4;
								},
								content:function(){
									"step 0"
									player.storage.yl_审时=false;
									player.viewHandcards(trigger.source);
									player.chooseCard('he',true).set('ai',function(card){
										return 5-get.value(card);
									});
									"step 1"
									if(result.bool){
										player.$give(result.cards.length,trigger.source);
										trigger.source.gain(result.cards);
										trigger.source.storage.yl_审时1=result.cards[0];
										trigger.source.storage.yl_审时2=player;
										trigger.source.addSkill('yl_审时1');
									};
								},
							},
						},
					},
					"yl_审时1":{
						trigger:{
							global:'phaseEnd',
						},
						forced:true,
						popup:false,
						filter:function (event,player){
							return player.storage.yl_审时1!=undefined&&player.storage.yl_审时2!=undefined;
						},
						content:function(){
							var pl=player.storage.yl_审时2;
							var card=player.storage.yl_审时1;
							if(player.get('hej').contains(card)&&4-pl.countCards('h')>0){
								pl.draw(4-pl.countCards('h'));
								pl.logSkill('yl_审时');
							};
							player.removeSkill('yl_审时1');
							delete player.storage.yl_审时1;
							delete player.storage.yl_审时2;
						},
					},
					"yl_徵荣":{
						init:function (player){
							player.storage.yl_徵荣=[];
						},
						marktext:"荣",
						intro:{
							content:'cards',
						},
						mark:true,
						trigger:{
							source:'damageAfter',
						},
						filter:function(event,player){
							return event.player!=player&&event.player.countCards('h')>player.countCards('h');
						},
						direct:true,
						content:function (){
							'step 0'
							player.choosePlayerCard('hej',get.prompt('yl_徵荣'),trigger.player).set('ai',function(button){
								return -get.attitude(player,trigger.player)+1;
    						});
							'step 1'
							if(result&&result.links&&result.links.length){
								player.line(player,trigger.player);
								player.logSkill('yl_徵荣');
								player.storage.yl_徵荣.push(result.links[0]);
								player.syncStorage('yl_徵荣');
								trigger.player.lose(result.links[0],ui.special);
								trigger.player.$give(result.links,player);
								game.log(player,'将',result.links[0],'置于其武将牌上');
							};
						},
					},
					"yl_鸿举":{
						skillAnimation:true,
						trigger:{
							player:'phaseBegin',
						},
						forced:true,
						unique:true,
						derivation:['yl_清侧'],
						init:function(player){
							player.storage.zbaijiang=false;
						},
						filter:function(event,player){
							return !player.storage.zbaijiang&&player.storage.yl_徵荣&&player.storage.yl_徵荣.length>=3&&game.dead.length>0;
						},
						content:function(){
							'step 0'
							player.storage.zbaijiang=true;
							var num=player.storage.yl_徵荣.length;
							if(num>player.countCards('h')) num=player.countCards('h');
							player.chooseCard('h',[1,num],'请选择需要替换“荣”的手牌').set('ai',function(card){
								return 5-get.value(card);
							});
							'step 1'
							if(result.bool){
								event.cards=result.cards;
								if(player.storage.yl_徵荣.length>0){
									player.chooseCardButton(player.storage.yl_徵荣,result.cards.length,'请选择需要替换的“荣”',true).ai=function(button){
										return 6-get.value(button.link);
									};
								}else{
									player.addSkill('yl_清侧');
									player.loseMaxHp();
									for(var i=0;i<event.cards.length;i++){
										player.storage.yl_徵荣.push(event.cards[i]);
									};
									player.syncStorage('yl_徵荣');
									player.lose(event.cards,ui.special);
									game.log(player,'将',event.cards,'置于其武将牌上');
									event.finish();
								}
							}else{
								player.addSkill('yl_清侧');
								player.loseMaxHp();
								event.finish();
							};
							'step 2'
							if(result.bool){
								var cards=result.links;
								for(var i=0;i<event.cards.length;i++){
									player.storage.yl_徵荣.push(event.cards[i]);
								};
								player.syncStorage('yl_徵荣');
								player.lose(event.cards,ui.special);
								game.log(player,'将',event.cards,'置于其武将牌上');
								for(var i=0;i<cards.length;i++){
									player.storage.yl_徵荣.remove(cards[i]);
								};
								player.syncStorage('yl_徵荣');
								player.gain(cards,'gain2');
							};
							player.addSkill('yl_清侧');
							player.loseMaxHp();
						},
					},
					'yl_清侧':{
						enable:'phaseUse',
						filter:function(event,player){
							return player.storage.yl_徵荣&&player.storage.yl_徵荣.length>0;
						},
						filterTarget:function(card,player,target){
							return target.countCards('hej')>0;
						},
						content:function(){
							'step 0'
							player.chooseCardButton(player.storage.yl_徵荣,1,'请选择需要弃置的“荣”',true).ai=function(button){
								return 6-get.value(button.link);
							};
							'step 1'
							if(result.bool){
								var cards=result.links;
								for(var i=0;i<cards.length;i++){
									player.storage.yl_徵荣.remove(cards[i]);
								};
								player.syncStorage('yl_徵荣');
								player.$throw(cards);
								player.discardPlayerCard(target,'hej',1);
							};
						},
						ai:{
							order:13,
							result:{
								target:function(player,target){
									if(get.attitude(player,target)>0&&target.countCards('j')>0) return 1;
									return -1;
								},
							},
						},
					},
					"yl_镇骨":{
						trigger:{
							player:"phaseEnd",
						},
						direct:true,
						content:function(){
							"step 0"
							player.chooseTarget(get.prompt('yl_镇骨'),function(card,player,target){
								return target!=player;
							}).ai=function(target){
								if(player.countCards('h')>target.countCards('h')) return get.attitude(player,target);
								if(player.countCards('h')<target.countCards('h')) return -get.attitude(player,target);
							};
							"step 1"
							if(result.bool){
								var target=result.targets[0];
								player.line(target);
								player.logSkill('yl_镇骨');
								trigger.untrigger();
								trigger.finish();
								player.storage.yl_镇骨1=target;
								target.storage.yl_镇骨=player;
							}else{
								event.finish();
							};
						},
					},
					"_yl_镇骨":{
						trigger:{
							player:"phaseAfter",
						},
						forced:true,
						popup:false,
						filter:function(event,player){
							return player.storage.yl_镇骨!=undefined||player.storage.yl_镇骨1!=undefined;
						},
						content:function(){
							if(player.storage.yl_镇骨!=undefined){
								var pl=player.storage.yl_镇骨;
								var num=pl.countCards('h');
								var num1=0;
								if(num-player.countCards('h')>0) num1=num-player.countCards('h');
								if(num-player.countCards('h')<0) num1=num-player.countCards('h');
								if(num1<0) player.chooseToDiscard('h',-num1,true);
								if(num1>0) player.draw(num1);
								pl.logSkill('yl_镇骨');
								delete player.storage.yl_镇骨;
							};
							if(player.storage.yl_镇骨1!=undefined){
								var pl=player.storage.yl_镇骨1;
								var num=pl.countCards('h');
								var num1=0;
								if(player.countCards('h')-num>0) num1=player.countCards('h')-num;
								if(player.countCards('h')-num<0) num1=player.countCards('h')-num;
								if(num1<0) pl.chooseToDiscard('h',-num1,true);
								if(num1>0) pl.draw(num1);
								delete player.storage.yl_镇骨1;
							};
						},
					},
					'yl_罪论':{
						enable:'phaseUse',
                        filter:function(event,player){
                            var num=game.countPlayer(function(current){return current!=player&&current.countCards('h')>0});
                            var num1=game.countPlayer(function(current){return current!=player&&current.countCards('e')>0});
                            return (num>0&&player.storage.yl_罪论!=true)||(num1>0&&player.storage.yl_罪论1!=true);
                        },
						filterTarget:function(card,player,target){
							return target!=player&&
							((target.countCards('h')>0&&player.storage.yl_罪论!=true)||
							(target.countCards('e')>0&&player.storage.yl_罪论1!=true));
						},
						content:function(){
							'step 0'
							var pos='';
							if(player.storage.yl_罪论!=true) pos+='h';
							if(player.storage.yl_罪论1!=true) pos+='e';
							player.gainPlayerCard(target,pos,true);
							'step 1'
							if(result.bool){
								player.line(target);
								var card=result.links[0];
								target.draw();
								if(card.original=='h') player.storage.yl_罪论=true;
								if(card.original=='e') player.storage.yl_罪论1=true;
							}else{
								event.finish();
							};
						},
						ai:{
							order:13,
							result:{
								target:function(player,target){
									return -1;
								},
							},
						},
					},
					"_yl_罪论":{
						trigger:{
							player:"phaseUseBefore",
						},
						forced:true,
						popup:false,
						filter:function(event,player){
							return player.hasSkill('yl_罪论');
						},
						content:function(){
							delete player.storage.yl_罪论;
							delete player.storage.yl_罪论1;
						},
					},
					"yl_父荫":{
						mod:{
							targetEnabled:function(card,player,target){
								if((card.name=='juedou'||card.name=='sha'||card.name=='huogong')&&player!=target&&player.countCards('h')>=target.countCards('h')&&!target.getEquip(2)) return false;
							},
						},
					},
					"yl_良姻":{
						group:["yl_良姻_1","yl_良姻_2","yl_良姻_3"],
						subSkill:{
							'1':{
								trigger:{
									global:'loseAfter'
								},
								filter:function (event,player){
									var list=[];
									for(var i in event.player.storage){
										var bool=false;
										for(var j=0;j<event.player.node.marks.childNodes.length;j++){
											if(event.player.node.marks.childNodes[j].name==i) bool=true;
										};
										if(get.itemtype(event.player.storage[i])=='cards'&&bool==true){
											for(var j=0;j<event.player.storage[i].length;j++){
												list.push(event.player.storage[i][j]);
											};
										};
									};
									for(var i=0;i<event.cards.length;i++){
										if(list.contains(event.cards[i])&&game.countPlayer(function(current){return current!=player&&current.countCards('h')>player.countCards('h')})>0) return true;
									};
									return false;
								},
								direct:true,
								content:function(){
									"step 0"
									player.chooseTarget('是否发动【良姻】令手牌数大于你的一名角色摸一张牌？',function(card,player,target){
										return target!=player&&target.countCards('h')>player.countCards('h');
									}).ai=function(target){
										return get.attitude(player,target);
									};
									"step 1"
									if(result.bool){
										player.line(result.targets);
										player.logSkill('yl_良姻');
										result.targets[0].draw();
									}else{
										event.finish();
									};
								},
							},
							'2':{
								trigger:{
									global:'gainBefore'
								},
								filter:function (event,player){
									var list=[];
									for(var i in event.player.storage){
										var bool=false;
										for(var j=0;j<event.player.node.marks.childNodes.length;j++){
											if(event.player.node.marks.childNodes[j].name==i) bool=true;
										};
										if(get.itemtype(event.player.storage[i])=='cards'&&bool==true){
											for(var j=0;j<event.player.storage[i].length;j++){
												list.push(event.player.storage[i][j]);
											};
										};
									};
									for(var i=0;i<event.cards.length;i++){
										if(list.contains(event.cards[i])) return true;
									};
									return false;
								},
								forced:true,
								popup:false,
								content:function(){
									trigger.yl_良姻_source='s';
								},
							},
							'3':{
								trigger:{
									global:'gainAfter'
								},
								filter:function (event,player){
									return event.yl_良姻_source=='s'&&game.countPlayer(function(current){return current!=player&&current.countCards('h')<player.countCards('h')&&current.countCards('he')>0})>0;
								},
								direct:true,
								content:function(){
									"step 0"
									player.chooseTarget('是否发动【良姻】令手牌数小于你的一名角色弃置一张牌？',function(card,player,target){
										return target!=player&&target.countCards('h')<player.countCards('h')&&target.countCards('he')>0;
									}).ai=function(target){
										return -get.attitude(player,target);
									};
									"step 1"
									if(result.bool){
										player.line(result.targets);
										player.logSkill('yl_良姻');
										result.targets[0].chooseToDiscard('he',1,true);
									}else{
										event.finish();
									};
								},
							},
						},
					},
					"yl_箜声":{
						trigger:{
							player:"phaseBegin",
						},
						direct:true,
						filter:function (event,player){
							return player.countCards('he')>0;
						},
						content:function(){
							'step 0'
							player.chooseCard(get.prompt('yl_箜声'),'he',[1,player.countCards('he')]).set('ai',function(card){
								if(card.name=='shan'||card.name=='du') return 1;
								return 5-get.value(card);
							});
							'step 1'
							if(result.bool){
								player.logSkill('yl_箜声');
								if(player.storage.yl_箜声1==undefined) player.storage.yl_箜声1=result.cards;
								player.lose(result.cards,ui.special);
								game.log(player,'将',result.cards,'置于其武将牌上');
								player.addSkill('yl_箜声1');
							}else{
								event.finish();
							};
						},
					},
					"yl_箜声1":{
						marktext:"箜",
						intro:{
							content:'cards',
						},
						mark:true,
						trigger:{
							player:'phaseEnd',
						},
						filter:function(event,player){
							return player.storage.yl_箜声1!=undefined&&player.storage.yl_箜声1.length>0;
						},
						forced:true,
						popup:false,
						content:function (){
							'step 0'
							player.logSkill('yl_箜声');
							event.list=[];
							for(var i=0;i<player.storage.yl_箜声1.length;i++){
								if(get.type(player.storage.yl_箜声1[i])=='equip'){
									player.useCard(player.storage.yl_箜声1[i],player);
									event.list.push(player.storage.yl_箜声1[i]);
								};
							};
							'step 1'
							for(var i=0;i<event.list.length;i++){
								player.storage.yl_箜声1.remove(event.list[i]);
							};
							'step 2'
							player.gain(player.storage.yl_箜声1,'gain2');
							'step 3'
							for(var i=0;i<player.storage.yl_箜声1.length;i++){
								player.storage.yl_箜声1.remove(player.storage.yl_箜声1[i]);
							};
							player.removeSkill('yl_箜声1');
							delete player.storage.yl_箜声1;
						},
					},
					"yl_谦节":{
						group:["yl_谦节_1","yl_谦节_2","yl_谦节_3"],
						subSkill:{
							'1':{
								trigger:{
									player:'linkBegin'
								},
								forced:true,
								content:function(){
									trigger.cancel();
								},
							},
							'2':{
								mod:{
									targetEnabled:function(card,player,target){
										if(get.type(card)=='delay') return false;
									},
								},
							},
							'3':{
								trigger:{
									global:'chooseToCompareBegin'
								},
								forced:true,
								filter:function(event,player){
									return event.target==player;
								},
								content:function(){
									trigger.cancel();
								},
							},
						},
					},
					'yl_决堰':{
						init:function(player){
							player.storage.lose_pos_equip=[];
						},
						enable:'phaseUse',
						usable:1,
						filter:function(event,player){
							return player.storage.lose_pos_equip!=undefined&&player.storage.lose_pos_equip.length<5;
						},
						content:function(){
							'step 0'
							var list=['武器','防具','坐骑','宝物'];
							for(var i=0;i<player.storage.lose_pos_equip.length;i++){
								if(get.translation(player.storage.lose_pos_equip[i])=='防御马'||get.translation(player.storage.lose_pos_equip[i])=='攻击马'){
									list.remove('坐骑');
								}else{
									list.remove(get.translation(player.storage.lose_pos_equip[i]));
								};
							};
							var list1=['equip1','equip2','equip3','equip4','equip5'];
							for(var i=0;i<player.storage.lose_pos_equip.length;i++){
								list1.remove(player.storage.lose_pos_equip[i]);
							};
							player.chooseControl(list).set('ai',function(event){
								if(list1.contains('equip1')&&player.countCards('h',{name:'sha'})>2) return '武器';
								if(list1.contains('equip2')&&player.get('e','2')!=undefined) return '防具';
								if(list1.contains('equip5')&&player.countCards('h',{type:'trick'})>=1) return '宝物';
							}).set('prompt','请选择需要废除的栏位');
							'step 1'
							if(result.control=='武器'){
								player.addTempSkill('yl_决堰1',{player:'phaseAfter'});
								player.lose_pos_equip('equip1');
							};
							if(result.control=='防具'){
								player.lose_pos_equip('equip2');
								player.draw(3);
								player.addTempSkill('yl_决堰3',{player:'phaseAfter'});
							};
							if(result.control=='坐骑'){
								player.addTempSkill('yl_决堰2',{player:'phaseAfter'});
								player.lose_pos_equip('equip3');
								player.lose_pos_equip('equip4');
							};
							if(result.control=='宝物'){
								player.addTempSkill('jizhi',{player:'phaseAfter'});
								player.lose_pos_equip('equip5');
							};
						},
						ai:{
							order:13,
							result:{
								player:function(player){
									if(player.storage.lose_pos_equip==undefined) return -1;
									var list=['equip1','equip2','equip3','equip4','equip5'];
									for(var i=0;i<player.storage.lose_pos_equip.length;i++){
										list.remove(player.storage.lose_pos_equip[i]);
									};
									if(list.contains('equip1')&&player.countCards('h',{name:'sha'})>2) return 1;
									if(list.contains('equip2')&&player.get('e','2')!=undefined) return 1;
									if(list.contains('equip5')&&player.countCards('h',{type:'trick'})>=1) return 1;
									return -1;
								},
							},
						},
					},
					'yl_决堰1':{
						mod:{
							cardUsable:function (card,player,num){
								if(card.name=='sha') return num+3;
							},
						},
					},
					'yl_决堰2':{
						mod:{
							targetInRange:function (card,player,target,now){
								return true;
							},
						},
					},
					'yl_决堰3':{
						mod:{
							maxHandcard:function (player,num){
								return num+3;
							},
						},
					},
					"yl_破势":{
						skillAnimation:true,
						trigger:{
							player:'phaseBegin',
						},
						forced:true,
						unique:true,
						derivation:['yl_怀柔'],
						init:function(player){
							player.storage.yl_破势=false;
						},
						filter:function(event,player){
							return !player.storage.yl_破势&&((player.storage.lose_pos_equip!=undefined&&player.storage.lose_pos_equip.length==5)||player.hp==1);
						},
						content:function(){
							player.storage.yl_破势=true;
							player.loseMaxHp();
							var num=player.maxHp-player.countCards('h');
							if(num>0) player.draw(num);
							player.removeSkill('yl_决堰');
							player.addSkill('yl_怀柔');
						},
					},
					"yl_怀柔":{
						enable:"phaseUse",
						filter:function (event,player){
							return player.countCards('h',{type:'equip'})>0;
						},
						filterCard:function (card){
							return get.type(card)=='equip';
						},
						check:function (card){
							return 1;
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
					},
					"yl_庸肆":{
						group:["yl_庸肆_1","yl_庸肆_2"],
						subSkill:{
							'1':{
								trigger:{
									player:'phaseDrawBegin'
								},
								forced:true,
								content:function(){
									trigger.num=game.countGroup();
								},
							},
							'2':{
								trigger:{
									player:'phaseDiscardBegin'
								},
								forced:true,
								popup:false,
								/*filter:function(event,player){
									return player.storage.yl_庸肆==0||player.storage.yl_庸肆>1;
								},*/
								content:function(){
									if(player.storage.yl_庸肆==undefined){
										var num=player.hp-player.countCards('h');
										if(num>0) player.draw(num);
									}else if(player.storage.yl_庸肆>1){
										player.addTempSkill('yl_庸肆1',{player:'phaseAfter'});
									};
									delete player.storage.yl_庸肆;
								},
							},
						},
					},
					'yl_庸肆1':{
						mod:{
							maxHandcard:function (player,num){
								return player.maxHp-player.hp;
							},
						},
					},
					"_yl_庸肆":{
						trigger:{
							source:"damageAfter",
						},
						forced:true,
						popup:false,
						filter:function (event,player){
							return player.hasSkill('yl_庸肆')&&_status.currentPhase==player;
						},
						content:function(){
							if(player.storage.yl_庸肆==undefined) player.storage.yl_庸肆=0;
							player.storage.yl_庸肆+=trigger.num;
						},
					},
					"yl_伪帝":{
						unique:true,
						zhuSkill:true,
						trigger:{
							player:"phaseDiscardAfter",
						},
						direct:true,
						filter:function (event,player){
							return event.cards&&event.cards.length>0&&game.countPlayer(function(current){return current!=player&&current.group=='qun'})>0&&game.zhu==player;
						},
						content:function(){
							'step 0'
							event.cards=trigger.cards;
							'step 1'
							player.chooseTarget('是否将【'+get.translation(event.cards[0].name)+'】给予其他群雄角色？',function(card,player,target){
								return target!=player&&target.group=='qun';
							},true).ai=function(target){
								if(event.cards[0].name=='du') return -get.attitude(player,target);
								return get.attitude(player,target);
							};
							'step 2'
							if(result.bool){
								player.line(result.targets);
								player.$give(event.cards[0],result.targets[0]);
								result.targets[0].gain(event.cards[0],player);
							};
							event.cards.remove(event.cards[0]);
							if(event.cards.length>0) event.goto(1);
						},
					},
					"yl_雄乱":{
						unique:true,
						enable:'phaseUse',
						mark:true,
						animationStr:'雄乱',
						init:function(player){
							player.storage.yl_雄乱=false;
						},
						filter:function(event,player){
							if(player.storage.yl_雄乱) return false;
							return true;
						},
						filterTarget:function(card,player,target){
							return target!=player;
						},
						content:function(){
							player.awakenSkill('yl_雄乱');
							player.storage.yl_雄乱=true;
							player.lose_pos_equip('equip1');
							player.lose_pos_equip('equip2');
							player.lose_pos_equip('equip3');
							player.lose_pos_equip('equip4');
							player.lose_pos_equip('equip5');
							player.storage.lose_pos_judge=true;
							if(player.countCards('j')>0) player.discard(player.get('j'));
							game.log(player,'废除了判定区');
							player.addTempSkill('yl_雄乱1',{player:'phaseAfter'});
							player.storage.yl_雄乱1=target;
							target.addSkill('yl_雄乱2');
							target.markSkillCharacter('yl_雄乱1',player,'雄乱','无法使用或打出任何牌');
						},
						ai:{
							order:13,
							result:{
								player:function(player){
									if(player.countCards('h',{name:'sha'})>=2&&game.countPlayer(function(current){return get.attitude(player,current)<0})>0) return 1;
								},
							},
						},
						intro:{
							content:'limited'
						},
					},
					'yl_雄乱1':{
						mod:{
							cardUsable:function (card,player,num){
								return Infinity;
							},
							targetInRange:function (card,player,target,now){
								return true;
							},
						},
					},
					'yl_雄乱2':{
						mod:{
							cardEnabled:function(card,player){
								return false;
							},
							cardUsable:function(card,player){
								return false;
							},
							cardRespondable:function(card,player){
								return false;
							},
							cardSavable:function(card,player){
								return false;
							},
						},
					},
					"_lose_pos_judge":{
						mod:{
							targetEnabled:function(card,player,target){
								if(get.type(card)=='delay'&&target.storage.lose_pos_judge==true) return false;
							},
						},
					},
					"_yl_雄乱":{
						trigger:{
							player:"phaseAfter",
						},
						forced:true,
						popup:false,
						filter:function (event,player){
							return player.storage.yl_雄乱1!=undefined;
						},
						content:function(){
							player.storage.yl_雄乱1.removeSkill('yl_雄乱2');
							player.storage.yl_雄乱1.unmarkSkill('yl_雄乱1');
							delete player.storage.yl_雄乱1;
						},
					},
					"yl_从谏":{
						trigger:{
							global:"useCardBegin",
						},
						direct:true,
						filter:function (event,player){
							return event.targets&&get.type(event.card)=='trick'&&event.targets.contains(player)&&event.targets.length>1&&player.countCards('he')>0;
						},
						content:function(){
							'step 0'
							player.chooseTarget(get.translation(trigger.player.name)+'使用了【'+get.translation(trigger.card.name)+'】<br>是否发动【从谏】？',function(card,player,target){
								return target!=player&&trigger.targets.contains(target);
							}).ai=function(target){
								//if(player.countCards('h',{name:'du'})>0) return -get.attitude(player,target);
								return get.attitude(player,target);
							};
							'step 1'
							if(result.bool){
								event.target=result.targets[0];
								player.chooseCard('请选择给予'+get.translation(event.target.name)+'的牌','he').set('ai',function(card){
									//if(get.attitude(player,target)<0&&card.name=='du') return 1;
									if(get.type(card)=='equip') return 1;
									return 7-get.value(card);
    							});
							}else{
								event.finish();
							};
							'step 2'
							if(result.bool){
								player.line(event.target);
								player.logSkill('yl_从谏')
								player.$give(result.cards[0],event.target);
								event.target.gain(result.cards[0],player);
								var num=1;
								if(get.type(result.cards[0])=='equip') num=2;
								player.draw(num);
							};
						},
					},
					"yl_往烈":{
						trigger:{
							player:"phaseBefore",
						},
						forced:true,
						popup:false,
						content:function(){
							player.storage.yl_往烈=true;
							player.markSkillCharacter('yl_往烈',player,'往烈','回合内使用的第一张牌无距离限制');
						},
					},
					'_yl_往烈':{
						mod:{
							targetInRange:function (card,player,target,now){
								if(player.storage.yl_往烈==true) return true;
							},
						},
						trigger:{
							player:"useCardBegin",
						},
						filter:function (event,player){
							return player.hasSkill('yl_往烈')&&_status.currentPhase==player;
						},
						forced:true,
						popup:false,
						content:function(){
							'step 0'
							if(player.storage.yl_往烈==true){
								delete player.storage.yl_往烈;
								player.unmarkSkill('yl_往烈');
							};
							player.chooseControl(['是','否']).set('ai',function(){
								if(player.countCards('h')<=player.hp+1&&((get.type(trigger.card)=='trick'&&game.countPlayer(function(current){return get.attitude(current,player)<=0&&current.countCards('h',{name:'wuxie'})})>0)||trigger.card.name=='sha')) return '是';
								return '否';
							}).set('prompt','是否令此牌不能被响应');
							'step 1'
							if(result.control=='是'){
								player.storage.yl_往烈1=trigger.card.name;
								player.addTempSkill('yl_往烈1',{player:'useCardAfter'});
								player.addTempSkill('yl_往烈2',{player:'phaseAfter'});
							};
						},
					},
					"yl_往烈1":{
						mod:{
							wuxieRespondable:function(card,player,target,current){
								if(player!=current&&player.storage.yl_往烈1==card.name) return false;
							},
						},
						ai:{
							norespond:true,
							skillTagFilter:function(player,tag,arg){
								if(tag=='norespond'&&Array.isArray(arg)){
									var evt=arg[2].getParent();
									if(evt.type=='card'&&evt.name==player.storage.yl_往烈1) return true;
								};
								return false;
							},
						},
					},
					"yl_往烈2":{
						mod:{
							cardEnabled:function(card,player){
								return false;
							},
						},
					},
					"yl_夺锐":{
						init:function(player){
							player.storage.lose_pos_equip=[];
						},
						trigger:{
							source:'damageAfter'
						},
						filter:function(event,player){
							return player!=event.player&&_status.currentPhase==player&&player.storage.lose_pos_equip.length<5;
						},
						check:function(event,player){
							var list=[];
							var skills=event.player.get('s',false,false);
							for(var i=0;i<skills.length;i++){
								if(get.info(skills[i])!=undefined&&get.info(skills[i]).usable==1||(lib.translate[skills[i]+'_info']!=undefined&&(lib.translate[skills[i]+'_info'].indexOf('出牌阶段限一次')!=-1||lib.translate[skills[i]+'_info'].indexOf('出牌阶段限1次')!=-1))) list.push(skills[i]);
							};
							return !player.storage.lose_pos_equip.contains('equip5')&&list.length>0;
						},
						round:1,
						content:function(){
							'step 0'
							var list=['武器','防具','防御马','攻击马','宝物'];
							for(var i=0;i<player.storage.lose_pos_equip.length;i++){
								list.remove(get.translation(player.storage.lose_pos_equip[i]));
							};
							var list1=['equip1','equip2','equip3','equip4','equip5'];
							for(var i=0;i<player.storage.lose_pos_equip.length;i++){
								list1.remove(player.storage.lose_pos_equip[i]);
							};
							event.skills=[];
							var skills=trigger.player.get('s',false,false);
							for(var i=0;i<skills.length;i++){
								//if(lib.translate[skills[i]+'_info']!=undefined&&lib.translate[skills[i]+'_info'].indexOf('出牌阶段限一次')!=0) event.skills.push(skills[i]);
								if(get.info(skills[i])!=undefined&&get.info(skills[i]).usable==1||(lib.translate[skills[i]+'_info']!=undefined&&(lib.translate[skills[i]+'_info'].indexOf('出牌阶段限一次')!=-1||lib.translate[skills[i]+'_info'].indexOf('出牌阶段限1次')!=-1))) event.skills.push(skills[i]);
							};
							player.chooseControl(list).set('ai',function(event){
								if(list1.contains('equip5')&&event.skills.length>0) return '宝物';
								return list.randomGet();
							}).set('prompt','请选择需要废除的栏位');
							'step 1'
							if(result.control=='武器') player.lose_pos_equip('equip1');
							if(result.control=='防具') player.lose_pos_equip('equip2');
							if(result.control=='防御马') player.lose_pos_equip('equip3');
							if(result.control=='攻击马') player.lose_pos_equip('equip4');
							if(result.control=='宝物') player.lose_pos_equip('equip5');
							if(result.control!=undefined&&event.skills.length>0){
								for(var i=0;i<event.skills.length;i++){
									player.addTempSkill(event.skills[i],{player:'phaseAfter'});
								};
								trigger.player.storage.yl_夺锐=event.skills;
								trigger.player.addTempSkill('yl_夺锐1',{player:'phaseAfter'});
							};
						},	
					},
					"yl_夺锐1":{
						init:function(player,skill){
							player.disableSkill(skill,player.storage.yl_夺锐);
						},
						onremove:function(player,skill){
							player.enableSkill(skill);
							delete player.storage.yl_夺锐;
						},
						locked:true,
						mark:true,
						intro:{
							content:function(storage,player,skill){
								var list=[];
								for(var i in player.disabledSkills){
									if(player.disabledSkills[i].contains(skill)) list.push(i);
								};
								if(list.length){
									var str='失效技能：';
									for(var i=0;i<list.length;i++){
										if(lib.translate[list[i]+'_info']) str+=get.translation(list[i])+'、';
									};
									return str.slice(0,str.length-1);
								};
							},
						},
					},
					"yl_止啼":{
						group:["yl_止啼_1","yl_止啼_2","yl_止啼_3","yl_止啼_4"],
						subSkill:{
							'1':{
								trigger:{
									global:'juedouAfter'
								},
								forced:true,
								filter:function(event,player){
									return event.targets&&event.targets.contains(player)&&event.turn!=player&&player.storage.lose_pos_equip!=undefined&&player.storage.lose_pos_equip.length>0;
								},
								content:function(){
									'step 0'
									var list=[];
									for(var i=0;i<player.storage.lose_pos_equip.length;i++){
										list.push(get.translation(player.storage.lose_pos_equip[i]));
									};
									player.chooseControl(list).set('ai',function(event){
										return list.randomGet();
									}).set('prompt','请选择需要恢复的栏位');;
									'step 1'
									if(result.control=='武器') player.recover_pos_equip('equip1');
									if(result.control=='防具') player.recover_pos_equip('equip2');
									if(result.control=='防御马') player.recover_pos_equip('equip3');
									if(result.control=='攻击马') player.recover_pos_equip('equip4');
									if(result.control=='宝物') player.recover_pos_equip('equip5');
								},
							},
							'2':{
								trigger:{
									player:'juedouAfter'
								},
								forced:true,
								filter:function(event,player){
									return event.turn!=player&&player.storage.lose_pos_equip!=undefined&&player.storage.lose_pos_equip.length>0;
								},
								content:function(){
									'step 0'
									var list=[];
									for(var i=0;i<player.storage.lose_pos_equip.length;i++){
										list.push(get.translation(player.storage.lose_pos_equip[i]));
									};
									player.chooseControl(list).set('ai',function(event){
										return list.randomGet();
									}).set('prompt','请选择需要恢复的栏位');;
									'step 1'
									if(result.control=='武器') player.recover_pos_equip('equip1');
									if(result.control=='防具') player.recover_pos_equip('equip2');
									if(result.control=='防御马') player.recover_pos_equip('equip3');
									if(result.control=='攻击马') player.recover_pos_equip('equip4');
									if(result.control=='宝物') player.recover_pos_equip('equip5');
								},
							},
							'3':{
								trigger:{
									player:'chooseToCompareAfter'
								},
								forced:true,
								filter:function(event,player){
									return event.result.bool==true&&player.storage.lose_pos_equip!=undefined&&player.storage.lose_pos_equip.length>0;
								},
								content:function(){
									'step 0'
									var list=[];
									for(var i=0;i<player.storage.lose_pos_equip.length;i++){
										list.push(get.translation(player.storage.lose_pos_equip[i]));
									};
									player.chooseControl(list).set('ai',function(event){
										return list.randomGet();
									}).set('prompt','请选择需要恢复的栏位');;
									'step 1'
									if(result.control=='武器') player.recover_pos_equip('equip1');
									if(result.control=='防具') player.recover_pos_equip('equip2');
									if(result.control=='防御马') player.recover_pos_equip('equip3');
									if(result.control=='攻击马') player.recover_pos_equip('equip4');
									if(result.control=='宝物') player.recover_pos_equip('equip5');
								},
							},
							'4':{
								trigger:{
									global:'chooseToCompareAfter'
								},
								forced:true,
								filter:function(event,player){
									return (event.targets!=undefined&&event.targets.contains(player)||event.target==player)&&event.result.bool==false&&player.storage.lose_pos_equip!=undefined&&player.storage.lose_pos_equip.length>0;
								},
								content:function(){
									'step 0'
									var list=[];
									for(var i=0;i<player.storage.lose_pos_equip.length;i++){
										list.push(get.translation(player.storage.lose_pos_equip[i]));
									};
									player.chooseControl(list).set('ai',function(event){
										return list.randomGet();
									}).set('prompt','请选择需要恢复的栏位');;
									'step 1'
									if(result.control=='武器') player.recover_pos_equip('equip1');
									if(result.control=='防具') player.recover_pos_equip('equip2');
									if(result.control=='防御马') player.recover_pos_equip('equip3');
									if(result.control=='攻击马') player.recover_pos_equip('equip4');
									if(result.control=='宝物') player.recover_pos_equip('equip5');
								},
							},
						},
					},
					"_yl_止啼":{
						mod:{
							maxHandcard:function (player,num){
								if(player.maxHp>player.hp&&game.countPlayer(function(current){return current!=player&&current.hasSkill('yl_止啼')&&get.distance(current,player,'attack')<=1})) return num-1;
							},
						},
					},
					"_gainMaxHp":{
						trigger:{
							global:'gameStart'
						},
						forced:true,
						popup:false,
						filter:function(event,player){
							return player.name=='lei_神甘宁'||player.name2=='lei_神甘宁';
						},
						content:function(){
                            var num=6;
                            var num1=3;
                            if(game.zhu==player&&game.players.length>=5){
                                num++;
                                num1++;
                            };
							player.maxHp=num;
							player.hp=num1;
							player.update();
						},
					},
					'yl_魄袭':{
						enable:'phaseUse',
						usable:1,
						/*filterCard:true,
						selectCard:[0,4],
						check:function(card){
							return 5-get.value(card);
						},*/
						filterTarget:function(card,player,target){
							//return target!=player&&target.countCards('h')>0;
							return target!=player;
						},
						content:function(){
							'step 0'
							event.list1=[];
							event.list2=[];
							if(target.countCards('h')>0){
								var chooseButton=player.chooseButton(4,'hidden',['你的手牌',player.get('h'),get.translation(target.name)+'的手牌',target.get('h'),'hidden']);
							}else{
								var chooseButton=player.chooseButton(4,'hidden',['你的手牌',player.get('h'),'hidden']);
							}
							chooseButton.set('ai',function(button){
								//if(button.link.name=='du') return 1;
								return 0;
							});
							chooseButton.filterButton=function(button){
								for(var i=0;i<ui.selected.buttons.length;i++){
									if(get.suit(button.link)==get.suit(ui.selected.buttons[i].link)) return false;
								};
								return true;
							};
							'step 1'
							if(result.bool){
								var list=result.links;
								for(var i=0;i<list.length;i++){
									if(get.owner(list[i])==player){
										event.list1.push(list[i]);
									}else{
										event.list2.push(list[i]);
									};
								};
								target.discard(event.list2);
								player.discard(event.list1);
							};
							'step 2'
							if(event.list1.length+event.list2.length==4){
								if(event.list1.length==0) player.loseMaxHp();
								if(event.list1.length==1){
									var evt=_status.event;
									for(var i=0;i<10;i++){
										if(evt&&evt.getParent)evt=evt.getParent();
										if(evt.name=='phaseUse'){
										evt.skipped=true;
											break;
										};
									};
									player.addTempSkill('yl_魄袭1',{player:'phaseAfter'});
								};
								if(event.list1.length==3) player.recover();
								if(event.list1.length==4) player.draw(4);
							};
						},
						ai:{
							order:13,
							result:{
								target:function(target,player){
									return -1;
								},
							},
						},
					},
					'yl_魄袭1':{
						mod:{
							maxHandcard:function (player,num){
								return num-1;
							},
						},
					},
					'yl_劫营':{
						init:function (player){
							player.storage.yl_劫营=0;
						},
						marktext:"营",
						intro:{
							content:function(storage){
								return '当前有'+storage+'个“营”';
							},
						},
						mark:true,
						group:["yl_劫营_1","yl_劫营_2","yl_劫营_3"],
						subSkill:{
							'1':{
								trigger:{
									global:'gameStart'
								},
								forced:true,
								content:function(){
									player.storage.yl_劫营++;
									player.syncStorage('yl_劫营');
									game.log(player,'获得了“营”标记');
								},
							},
							'2':{
								trigger:{
									player:"phaseEnd",
								},
								direct:true,
								content:function(){
									'step 0'
									player.chooseTarget(get.prompt('yl_劫营'),function(card,player,target){
										return target.storage.yl_劫营==undefined;
									}).ai=function(target){
										/*if(target.countCards('j',{name:'lebu'})>0) return -get.attitude(player,target);
										if(target.countCards('h')>target.hp) return get.attitude(player,target);
										if(target.countCards('h')<target.hp) return -get.attitude(player,target);*/
										return -1;
									};
									'step 1'
									if(result.bool){
										var target=result.targets[0];
										player.line(target);
										player.logSkill('yl_劫营');
										if(player.storage.yl_劫营1!=undefined){
											var pl=player.storage.yl_劫营1;
											delete pl.storage.yl_劫营;
											pl.unmarkSkill('yl_劫营');
											game.log(pl,'失去了“营”标记');
										}else{
											delete player.storage.yl_劫营;
											player.unmarkSkill('yl_劫营');
											game.log(player,'失去了“营”标记');
										};
										player.storage.yl_劫营1=target;
										if(target.storage.yl_劫营==undefined) target.storage.yl_劫营=0;
										target.storage.yl_劫营++;
										target.markSkill('yl_劫营');
										game.log(target,'获得了“营”标记');
									};
								},
							},
							'3':{
								trigger:{
									global:'phaseAfter'
								},
								forced:true,
								filter:function(event,player){
									return event.player!=player&&event.player.storage.yl_劫营!=undefined&&event.player.countCards('h')>0;
								},
								content:function(){
									trigger.player.$give(trigger.player.get('h'),player);
									player.gain(trigger.player.get('h'),trigger.player);
								},
							},
						},
					},
					'_yl_劫营':{
						mod:{
							cardUsable:function (card,player,num){
								if(player.storage.yl_劫营!=undefined&&card.name=='sha') return num+1;
							},
							maxHandcard:function (player,num){
								if(player.storage.yl_劫营!=undefined) return num+1;
							},
						},
						trigger:{
							player:'phaseDrawBegin'
						},
						forced:true,
						filter:function(event,player){
							return player.storage.yl_劫营!=undefined;
						},
						content:function(){
							trigger.num++;
						},
					},
				},
				translate:{
					"lei_神甘宁":"神甘宁",
					"yl_魄袭":"魄袭",
					"yl_魄袭_info":"出牌阶段限一次，你可以观看一名其他角色的手牌，然后你可以弃置你与其手里共计四张不同花色的牌。若如此做，根据此次弃置你的牌的数量执行以下效果：1.没有，扣减一点体力上限；2.一张，立即结束出牌阶段且本回合手牌上限-1；三张，恢复一点体力；四张，摸四张牌",
					"yl_劫营":"劫营",
					"yl_劫营_info":"游戏开始时，你获得一个“营”标记。结束阶段，你可以将“营”标记置于一名角色的武将牌旁；有“营”标记的角色摸牌阶段多摸一张牌、出牌阶段可多使用一张【杀】、手牌上限+1。有“营”标记的其他角色的回合结束后，你获得其所有手牌",
					"lei_神张辽":"神张辽",
					"yl_夺锐1":"失效技能",
					"yl_夺锐":"夺锐",
					"yl_夺锐_info":"每轮限一次，当你于出牌阶段内对一名其他角色造成伤害后，你可以废除你准备区内的一个装备栏，然后获得其“出牌阶段限一次”的技能直到回合结束，若如此做该角色该技能失效直到其回合结束",
					"yl_止啼":"止啼",
					"yl_止啼_info":"锁定技，你范围内已受伤的其他角色手牌上限-1；当你拼点或【决斗】胜利时，你恢复一个装备栏",
					"lei_陈到":"陈到",
					"yl_往烈":"往烈",
					"yl_往烈_info":"出牌阶段，你使用的第一张牌无距离限制；当你于出牌阶段使用一张牌时，你可以令此牌不能被响应，若如此做，本回合内你不能再使用牌",
					"lei_张绣":"张绣",
					"yl_雄乱":"雄乱",
					"yl_雄乱_info":"限定技，出牌阶段，你可以废除你的判定区内装备区，然后指定一名其他角色，直到回合结束，你使用的牌无距离和次数限制，其不能使用和打出手牌",
					"yl_从谏":"从谏",
					"yl_从谏_info":"当你成为锦囊牌的目标时，若此牌的目标数大于1，则你可以交给其中一名其他目标角色一张牌，然后摸一张牌，若你给出的是装备牌，改为摸两张牌",
					"lei_袁术":"袁术",
					"yl_庸肆":"庸肆",
					"yl_庸肆_info":"锁定技，摸牌阶段，你改为摸X张牌（X为存活势力数）；弃牌阶段，若你本回合：1.没有造成伤害，将手牌摸至当前体力值；2.造成的伤害超过1点，本回合手牌上限改为已损失体力值",
					"yl_伪帝":"伪帝",
					"yl_伪帝_info":"主公技，你于弃牌阶段弃置的牌可以交给任意名其他群雄角色",
					"_support":"装备区内被废除的部位",
					"lei_陆抗":"陆抗",
					"yl_谦节":"谦节",
					"yl_谦节_info":"锁定技，你不能被横置，且不能成为延时类锦囊或其他角色拼点的目标",
					"yl_决堰":"决堰",
					"yl_决堰_info":"出牌阶段限一次，你可以废除一个装备栏，然后执行对应一项：武器栏，本回合内你可以多使用三张【杀】；防具栏，摸三张牌，本回合手牌上限+3；2个坐骑栏，本回合你使用的牌无距离限制；宝物栏，本回合获得技能集智",
					"yl_破势":"破势",
					"yl_破势_info":"觉醒技，准备阶段开始时，若你的装备栏均已被废除或体力值为1，则你扣减一点体力上限，失去技能“决堰”并获得技能“怀柔”",
					"yl_破势_append":"怀柔：出牌阶段，你可以重铸装备牌",
					"yl_怀柔":"怀柔",
					"yl_怀柔_info":"出牌阶段，你可以重铸装备牌",
					"lei_周妃":"周妃",
					"yl_良姻":"良姻",
					"yl_良姻_info":"当有牌移至武将牌上时，你可以令手牌数大于你的一名角色摸一张牌；当有牌从武将牌上加入任意角色的手牌时，你可以令手牌数小于你的一名角色弃置一张牌",
					"yl_箜声1":"箜声",
					"yl_箜声":"箜声",
					"yl_箜声_info":"准备阶段，你可以将任意张牌置于你的武将牌上；结束阶段，你使用武将牌上的装备牌，并获得武将牌上的其他牌",
					"lei_诸葛瞻":"诸葛瞻",
					"yl_罪论":"罪论",
					"yl_罪论_info":"出牌阶段，你可以获得一名其他角色一张牌（手牌、装备区各一次），然后该角色摸一张牌",
					"yl_父荫":"父荫",
					"yl_父荫_info":"锁定技，若你的装备区内没有防具牌，手牌数大于或等于你的其他角色不能使用【杀】、【决斗】或【火攻】指定你为目标",
					"lei_郝昭":"郝昭",
					"yl_镇骨":"镇骨",
					"yl_镇骨_info":"结束阶段，你可以选择一名其他角色，你的回合结束后和该角色的下个回合结束时，其将手牌摸至或弃至与你手牌数相同",
					"lei_毋丘俭":"毋丘俭",
					"yl_徵荣":"徵荣",
					"yl_徵荣_info":"当你对其他角色造成伤害后，若其手牌比你多，你可以将其一张牌置于你的武将牌上，称为“荣”",
					"yl_鸿举":"鸿举",
					"yl_鸿举_info":"觉醒技，准备阶段，若“荣”的数量大于或等于3且场上有角色死亡，则你可以用任意张手牌替换等量的“荣”，然后扣减一点体力上限并获得技能“清侧”",
					"yl_鸿举_append":"清侧：出牌阶段，你可以移去一张“荣”，然后弃置场上一张牌",
					"yl_清侧":"清侧",
					"yl_清侧_info":"出牌阶段，你可以移去一张“荣”，然后弃置场上一张牌",
					"yin_蒯良蒯越":"蒯良蒯越",
					"yl_荐降":"荐降",
					"yl_荐降_info":"当你成为其他角色使用牌的目标前，你可令手牌数最少的一名角色摸一张牌",
					"yl_审时1":"审时",
					"yl_审时":"审时",
					"yl_审时_info":"转换技，①出牌阶段限一次，你可以将一张牌交给一名手牌数最多的角色，然后对其造成一点伤害，若该角色因此死亡，则你可以令一名角色将手牌摸至四张。②其他角色对你造成伤害后，你可以观看该角色的手牌，然后交给其一张牌，当前角色回合结束时，若该角色未失去此牌，你将手牌摸至四张",
					"yin_神陆逊":"神陆逊",
					"yl_军略":"军略",
					"yl_军略_info":"锁定技，当你受到或造成伤害后，你获得一个“军略”标记",
					"yl_摧克":"摧克",
					"yl_摧克_info":"出牌阶段开始时，若“军略”标记的数量为奇数，你可以对一名角色造成一点伤害;若“军略”标记的数量为偶数，你可以横置一名角色并弃置其区域内的一张牌。若“军略”标记的数量超过7个，你可以移去全部“军略”标记并对所有其他角色造成一点伤害",
					"yl_绽火":"绽火",
					"yl_绽火_info":"限定技，出牌阶段开始时，你可以移去全部“军略”标记，令至多等量的已横置角色弃置所有装备区内的牌，然后受到1点火焰伤害",
					"yin_神刘备":"神刘备",
					"yl_龙怒":"龙怒",
					"yl_龙怒_info":"转换技，锁定技，①出牌阶段开始时，你流失一点体力并摸一张牌，然后本回合你的红色手牌均视为火杀且无距离限制。②出牌阶段开始时，你减1点体力上限并摸一张牌，然后本回合你的锦囊牌均视为雷杀且无使用次数限制",
					"yl_结营":"结营",
					"yl_结营_info":"锁定技，你始终处于横置状态（解除横置状态2s后再次进入横置状态）;已横置的角色手牌上限+2;结束阶段，你横置一名其他角色",
					"yin_卢植":"卢植",
					"yl_明任":"明任",
					"yl_明任_info":"游戏开始时，你摸一张牌，然后将你的一张手牌至于你的武将牌上，称为“任”。结束阶段，你可以用手牌替换“任”",
					"yl_贞良":"贞良",
					"yl_贞良_info":"转换技，①出牌阶段限一次，你可以选择一名攻击范围内的其他角色，然后弃置X张与“任”颜色相同的牌并对其造成一点伤害（X为你与其的体力差且至少为1）。②你的回合外，当你使用或打出牌进入弃牌堆时，若此牌与“任”类型相同，则你可以令一名角色摸一张牌",
					"yin_许攸":"许攸",
					"yl_成略1":"成略",
					"yl_成略":"成略",
					"yl_成略_info":"转换技，出牌阶段限一次，①你可以摸一张牌，然后弃置两张手牌。②你可以摸两张牌，然后弃置一张手牌。若如此做，直到本回合结束，你使用与弃置牌花色相同的牌无距离和次数限制",
					"yl_恃才":"恃才",
					"yl_恃才_info":"当你使用一张牌结算后，若此牌与你本回合使用的牌类型均不同（包括装备牌），你可以将此牌置于牌堆顶，然后摸一张牌",
					"yl_寸目":"寸目",
					"yl_寸目_info":"锁定技，当你摸牌时，改为从牌堆底摸牌",
					"yin_孙亮":"孙亮",
					"yl_溃诛":"溃诛",
					"yl_溃诛_info":"弃牌阶段结束后，你可以选择一项：令至多X名角色个摸一张牌，对任意名体力值之和为X的角色造成一点伤害，若不少于2名角色，你须受到一点伤害（X为你此阶段弃置的牌数）",
					"yl_掣政":"掣政",
					"yl_掣政_info":"锁定技，你的出牌阶段内，攻击范围内不包含你的角色不能成为你使用牌的目标。出牌阶段结束时，若你本阶段内使用的牌数小于这些角色数，你弃置其中一名角色一张牌",
					"yl_立军1":"立军",
					"yl_立军":"立军",
					"yl_立军_info":"主公技，其他吴势力角色与其回合内使用【杀】结算后，其可以将此【杀】交给你，然后你可以令其摸一张牌",
					"yin_陆绩":"陆绩",
					"yl_怀橘":"怀橘",
					"yl_怀橘_info":"锁定技，游戏开始时，你获得3个“橘”标记。（有“橘”的角色受到伤害时，防止此伤害，然后移去一个“橘”；有“橘”的角色摸牌阶段额外摸一张牌）",
					"_yl_怀橘":"怀橘",
					"_yl_怀橘_info":"有“橘”的角色受到伤害时，防止此伤害，然后移去一个“橘”",
					"_yl_怀橘1":"怀橘",
					"_yl_怀橘1_info":"有“橘”的角色摸牌阶段额外摸一张牌",
					"yl_遗礼":"遗礼",
					"yl_遗礼_info":"出牌阶段开始时，你可以失去一点体力或移去一个“橘”，然后令一名其他角色获得一个“橘”",
					"yl_整论":"整论",
					"yl_整论_info":"若你没有“橘”，你可以跳过摸牌阶段然后获得一个“橘”",
					"yin_王平":"王平",
					"yl_飞军":"飞军",
					"yl_飞军_info":"出牌阶段限一次，你可以弃置一张牌，然后选择一项：令一名手牌数大于你的角色交给你一张牌；或令一名装备区里牌数大于你的角色弃置一张装备牌",
					"yl_兵略":"兵略",
					"yl_兵略_info":"锁定技，当你发动“飞军”时，若目标与你之前指定的目标均不相同，则你摸两张牌",
					"yin_严颜":"严颜",
					"yl_拒战1":"拒战",
					"yl_拒战":"拒战",
					"yl_拒战_info":"转换技，①当你成为其他角色【杀】的目标后，你可以与其各摸一张牌，然后其本回合内不能再对你使用牌。②当你使用【杀】指定一名角色为目标后，你可以获得其一张牌，然后你本回合内不能再对其使用牌",
				},
			};
			if(lib.device||lib.node){
				for(var i in yl.character){yl.character[i][4].push('ext:扩展ol/'+i+'.png');}
			}else{
				for(var i in yl.character){yl.character[i][4].push('db:extension-扩展ol:'+i+'.png');}
			}
			return yl;
		});
		lib.config.all.characters.push('yl');
		if(!lib.config.characters.contains('yl')) lib.config.characters.push('yl');
		lib.translate['yl_character_config']='阴雷';
}