window.func=function(lib,game,ui,get,ai,_status){
	game.import('character',function(lib,game,ui,get,ai,_status){
		var xhly={
			name:'xhly',
			connect:true,
			character:{
				"xhly_严畯":["male","wu",3,["xhly_观潮","xhly_逊贤"],[]],
				"xhly_杜畿":["male","wei",3,["xhly_安东","xhly_应势"],[]],
				"xhly_刘焉":["male","qun",3,["xhly_图射","xhly_立牧"],[]],
				"xhly_潘濬":["male","wu",3,["xhly_观微","xhly_公清"],[]],
			},
			skill:{
				"xhly_观潮":{
					trigger:{
						player:"phaseUseBegin",
					},
					content:function(){
						'step 0'
						player.chooseControl(function(){
							return Math.random()<0.5?'选项一':'选项二';
						}).set('prompt','观潮').set('choiceList',['当你使用牌时，若你此阶段使用过的所有牌的点数为递增，你摸一张牌','当你使用牌时，若你此阶段使用过的所有牌的点数为递减，你摸一张牌']);
						'step 1'
						if(result.control) delete player.storage.xhly_观潮;
						if(result.control=='选项一') player.addTempSkill('xhly_观潮1',{player:'phaseUseAfter'});
						if(result.control=='选项二') player.addTempSkill('xhly_观潮2',{player:'phaseUseAfter'});
					},
				},
				"xhly_观潮1":{
					trigger:{
						player:"useCardEnd",
					},
					forced:true,
					popup:false,
					filter:function (event,player){
						return event.card!=undefined&&get.number(event.card)!=undefined;
					},
					content:function(){
						var num=get.number(trigger.card);
						if(num>player.storage.xhly_观潮){
							player.logSkill('xhly_观潮');
							player.draw();
						}else if(player.storage.xhly_观潮!=undefined){
							player.removeSkill('xhly_观潮1');
						};
						player.storage.xhly_观潮=num;
					},
				},
				"xhly_观潮2":{
					trigger:{
						player:"useCardEnd",
					},
					forced:true,
					popup:false,
					filter:function (event,player){
						return event.card!=undefined&&get.number(event.card)!=undefined;
					},
					content:function(){
						var num=get.number(trigger.card);
						if(num<player.storage.xhly_观潮){
							player.logSkill('xhly_观潮');
							player.draw();
						}else if(player.storage.xhly_观潮!=undefined){
							player.removeSkill('xhly_观潮2');
						};
						player.storage.xhly_观潮=num;
					},
				},
				"xhly_逊贤":{
					trigger:{
						player:["useCardEnd","respondAfter"],
					},
					direct:true,
					filter:function (event,player){
						return _status.currentPhase!=player&&player.storage.xhly_逊贤!=true&&game.countPlayer(function(current){return current.countCards('h')>player.countCards('h')})>0;
					},
					content:function(){
						'step 0'
						player.chooseTarget(get.prompt('xhly_逊贤'),function(card,player,target){
							return target!=player;
						}).ai=function(target){
							return get.attitude(player,target);
						};
						'step 1'
						if(result.bool){
							player.line(result.targets);
							player.logSkill('xhly_逊贤');
							result.targets[0].gain(trigger.card,'gain2');
							player.storage.xhly_逊贤=true;
						}else{
							event.finish();
						};
					},
					group:["xhly_逊贤_1"],
					subSkill:{
						"1":{
							trigger:{
								global:"phaseBefore",
							},
							forced:true,
							popup:false,
							content:function(){
								delete player.storage.xhly_逊贤;
							},
						},
					},
				},
				"xhly_安东":{
					trigger:{
						player:"damageBegin",
					},
					filter:function (event,player){
						return event.source!=undefined&&event.source!=player;
					},
					check:function (event,player){
						return event.source!=undefined&&get.attitude(player,event.source)>=0;
					},
					content:function(){
						'step 0'
						trigger.source.chooseControl(function(){
							if(get.attitude(trigger.source,player)>=0) return '选项一';
							return '选项二';
						}).set('prompt','安东').set('choiceList',['防止此伤害，本回合弃牌阶段<span style=\"color:red\">♥</span>牌不计入手牌上限','观看其手牌，若其中有<span style=\"color:red\">♥</span>牌则你获得这些<span style=\"color:red\">♥</span>牌']);
						'step 1'
						if(result.control=='选项一'){
							trigger.cancel();
							trigger.source.addTempSkill('xhly_安东1',{player:'phaseUseAfter'});
						};
						if(result.control=='选项二'&&player.countCards('h')>0){
							trigger.source.viewCards(get.translation(player.name)+'的手牌',player.get('h'));
						}else{
							event.finish();
						};
						'step 2'
						var list=[];
						for(var i=0;i<player.get('h').length;i++){
							var card=player.get('h')[i];
							if(get.suit(card)=='heart') list.push(card);
						};
						if(list.length>0){
							player.$give(list.length,trigger.source)
							trigger.source.gain(list,player);
						};
					},
				},
				"xhly_安东1":{
					mod:{
						maxHandcard:function (player,num){
							return num+player.countCards('h',{suit:'heart'});
						},
					},
				},
				"xhly_应势":{
					init:function (player){
						player.storage.xhly_应势=[];
					},
    				intro:{
    					content:'cards',
    				},
					marktext:"应",
					mark:true,
					trigger:{
						player:"phaseUseBegin",
					},
					direct:true,
					filter:function (event,player){
						return player.countCards('h',{suit:'heart'})>0&&player.storage.xhly_应势.length==0;
					},
					content:function(){
						'step 0'
						player.chooseCard(get.prompt('xhly_应势'),'h',[1,Infinity],{suit:'heart'}).set('ai',function(card){
							return 4-get.value(card);
    					});
						'step 1'
						if(result.bool){
							player.storage.xhly_应势=result.cards;
							player.syncStorage('xhly_应势');
							game.log(player,'将',result.cards,'置于其武将牌上');
							player.lose(result.cards,ui.special);
							player.chooseTarget('请选择【应势】的目标',function(card,player,target){
								return target!=player;
							},true).ai=function(target){
								return -get.attitude(player,target);
							};
						}else{
							event.finish();
						};
						'step 2'
						if(result.bool){
							player.line(result.targets);
							player.logSkill('xhly_应势');
							player.storage.xhly_应势1=result.targets[0];
							result.targets[0].markSkillCharacter('_xhly_应势',player,'应势','已成为【应势】的目标');
						};
					},
				},
				"_xhly_应势":{
					trigger:{
						source:"damageAfter",
					},
					filter:function (event,player){
						return game.countPlayer(function(current){return current.storage.xhly_应势1==event.player})>0&&event.card!=undefined&&event.card.name=='sha';
					},
					direct:true,
					content:function(){
						'step 0'
						for(var i=0;i<game.players.length;i++){
							if(game.players[i].storage.xhly_应势1==trigger.player) event.pl=game.players[i];
						};
						if(event.pl==undefined) event.finish();
						'step 1'
						player.chooseCardButton(event.pl.storage.xhly_应势,'请选择需要获得的牌');
						'step 2'
						if(result.bool){
							player.gain(result.links[0],'gain2');
							event.pl.storage.xhly_应势.remove(result.links[0]);
							event.pl.syncStorage('yl_明任');
							if(event.pl.storage.xhly_应势.length==0){
								delete event.pl.storage.xhly_应势1;
								trigger.player.unmarkSkill('_xhly_应势');
							};
						};
						
					},
				},
				"xhly_图射":{
					trigger:{
						player:"useCardEnd",
					},
					filter:function (event,player){
						return player.countCards('h',{type:'basic'})==0&&event.targets!=undefined&&event.targets.length>0;
					},
					frequent:true,
					content:function(){
						player.draw(trigger.targets.length)
					},
				},
				"xhly_立牧":{
					mod:{
						cardUsable:function (card,player,num){
							if(player.countCards('j')>0) return Infinity;
						},
						targetInRange:function(card,player,target,now){
							if(player!=target&&get.distance(player,target,'attack')<=1&&player.countCards('j')>0) return true;
						}
					},
					filter:function(event,player){
						return player.countCards('he',{suit:'diamond'})>0;
					},
					enable:'phaseUse',
					filterCard:function(card){
						return get.suit(card)=='diamond';
					},
					filterTarget:function(card,player,target){
						return target==player;
					},
					position:'he',
					viewAs:{name:'lebu'},
					prompt:'将一张<span style="color:red">♦</span>牌当【乐不思蜀】对自己使用，然后回复一点体力',
					check:function(card){
						return 6-get.value(card);
					},
					onuse:function(result,player){
						player.recover();
					},
				},
				"xhly_观微":{
					trigger:{
						global:"phaseUseEnd",
					},
					filter:function (event,player){
						if(event.player.storage.countHasUsedCard==undefined) return false;
						if(event.player.storage.countHasUsedCard.length<=1) return false;
						var chuc=event.player.storage.countHasUsedCard;
						var list=[];
						for(var i=0;i<chuc.length;i++){
							var suit=get.suit(chuc[i]);
							if(!list.contains(suit)) list.push(suit);
						};
						return list.length==1&&player.storage.xhly_观微==undefined;
					},
					content:function(){
						'step 0'
						player.chooseToDiscard(1,'he').ai=function(card){
							if(get.attitude(player,trigger.player)>0) return 6-get.value(card);
							return -1;
						};
						'step 1'
						if(result.bool){
							player.line(trigger.player);
							trigger.player.draw(2);
							trigger.player.phaseUse();
							player.storage.xhly_观微=true;
							player.markSkillCharacter('xhly_观微',player,'观微','本回合已发动【观微】');
						};
					},
					group:["xhly_观微_removeMark"],
					subSkill:{
						'removeMark':{
							trigger:{
								global:"phaseAfter",
							},
							forced:true,
							popup:false,
							filter:function (event,player){
								return player.storage.xhly_观微!=undefined;
							},
							content:function (){
								delete player.storage.xhly_观微;
								player.unmarkSkill('xhly_观微');
							},
						},
					},
				},
				"xhly_公清":{
					trigger:{
						player:"damageBegin",
					},
					forced:true,
					filter:function (event,player){
						if(event.source==undefined) return false;
						return (event.source.getAttackRange()<3)||event.source.getAttackRange()>3;
					},
					priority:-9.9,
					content:function (){
						if(trigger.source.getAttackRange()<3) trigger.num=1;
						if(trigger.source.getAttackRange()>3) trigger.num++;
					},
				},
			},
			translate:{
				'xhly_潘濬':'潘濬',
				'xhly_观微':'观微',
				'xhly_观微_info':'一名角色的出牌阶段结束时，若其于此回合使用过的牌数大于1&其于此回合使用过的牌花色均相同&你于此回合未发动过此技能，你可以弃置一张牌，然后其摸两张牌并获得一个额外的出牌阶段',
				'xhly_公清':'公清',
				'xhly_公清_info':'锁定技，当你受到伤害时，若伤害来源的攻击范围小于3，则你只受到一点伤害；若伤害来源的攻击范围大于3，则此伤害+1',
				'xhly_刘焉':'刘焉',
				'xhly_图射':'图射',
				'xhly_图射_info':'当你使用牌后，若你没有基本牌，则你可以摸X张牌（X为此牌指定的目标数）',
				'xhly_立牧':'立牧',
				'xhly_立牧_info':'出牌阶段，你可以将一张<span style="color:red">♦</span>牌当【乐不思蜀】对自己使用，然后回复一点体力；你的判定区内有牌时，你使用的牌没有数量限制，你对攻击范围内的其他角色使用的牌没有距离限制',
				'xhly_杜畿':'杜畿',
				'xhly_严畯':'严畯',
				'xhly_观潮':'观潮',
				'xhly_观潮_info':'出牌阶段开始时，你可以选择一项直到回合结束：1.当你使用牌时，若你此阶段使用过的所有牌的点数为递增，你摸一张牌；2.当你使用牌时，若你此阶段使用过的所有牌的点数为递减，你摸一张牌',
				'xhly_逊贤':'逊贤',
				'xhly_逊贤_info':'每名其他角色的回合限一次，你使用或打出的牌置入弃牌堆时，你可以将之交给一名手牌比你多的角色',
				'xhly_安东':'安东',
				'xhly_安东_info':'当你受到其他角色造成的伤害时，你可以令伤害来源选择一项：1.防止此伤害，本回合弃牌阶段<span style=\"color:red\">♥</span>牌不计入手牌上限；2.观看其手牌，若其中有<span style=\"color:red\">♥</span>牌则你获得这些<span style=\"color:red\">♥</span>牌',
				'xhly_应势':'应势',
				'xhly_应势_info':'出牌阶段开始时，若你武将牌上没有牌，你可以将任意张<span style=\"color:red\">♥</span>牌置于武将牌上并选择一名其他角色。当有角色使用【杀】对你选择的角色造成伤害后，其可以获得你武将牌上的一张牌',
			},
		};
		if(lib.device||lib.node){
			for(var i in xhly.character){xhly.character[i][4].push('ext:扩展ol/'+i+'.jpg');}
		}else{
			for(var i in xhly.character){xhly.character[i][4].push('db:extension-扩展ol:'+i+'.jpg');}
		}
		return xhly;
	});
	lib.config.all.characters.push('xhly');
	if(!lib.config.characters.contains('xhly')) lib.config.characters.push('xhly');
	lib.translate['xhly_character_config']='星火燎原';
}