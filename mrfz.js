window.func=function(lib,game,ui,get,ai,_status){
	lib.element.player.mrfz_hasCDSkill=function(){
		var player=this;
		var skills=player.get('s');
		for(var i=0;i<skills.length;i++){
			var skill=skills[i];
			if(lib.skill[skill]!=undefined&&lib.skill[skill].mrfz_cd>0) return true;
		};
		return false;
	};
	lib.element.player.mrfz_coldDown=function(){
		var next=game.createEvent('mrfz_coldDown');
		next.player=this;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='string'){
				next.skill=arguments[i];
			};
		};
		var event=_status.event;
		next.source=event.player;
		next.setContent(lib.element.event.mrfz_coldDown);
		return next;
	};
	lib.element.event.mrfz_coldDown=function(){
		event.trigger('mrfz_coldDown');
		if(player.mrfz_hasCDSkill()){
			if(player.storage.mrfz_cd_skill==undefined) player.storage.mrfz_cd_skill={};
			if(skill!=undefined){
				if(skill=='all'){
					var skills=player.get('s');
					for(var i=0;i<skills.length;i++){
						var skill=skills[i];
						if(lib.skill[skill]!=undefined&&lib.skill[skill].mrfz_cd>0) player.storage.mrfz_cd_skill[skill]=lib.skill[skill].mrfz_cd;
					};
				}else{
					player.storage.mrfz_cd_skill[skill]=lib.skill[skill].mrfz_cd;
				};
				player.markSkill('_mrfz_cd_skill');
			};
		};
	};
	lib.element.player.mrfz_changeColdDown=function(){
		var next=game.createEvent('mrfz_changeColdDown');
		next.player=this;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='string'){
				next.skill=arguments[i];
			};
			if(typeof arguments[i]=='number'){
				next.num=arguments[i];
			};
		};
		var event=_status.event;
		next.source=event.player;
		next.setContent(lib.element.event.mrfz_changeColdDown);
		return next;
	};
	lib.element.event.mrfz_changeColdDown=function(){
		event.trigger('mrfz_changeColdDown');
		if(num==undefined) num=-1;
		if(player.storage.mrfz_cd_skill==undefined) player.storage.mrfz_cd_skill={};
		var storage=player.storage.mrfz_cd_skill;
		if(skill!=undefined){
			if(skill=='all'){
				for(var i in storage){
					player.storage.mrfz_cd_skill[i]+=num;
					if(player.storage.mrfz_cd_skill[i]<0) player.storage.mrfz_cd_skill[i]=0;
				};
			}else{
				if(storage[skill]==undefined) player.storage.mrfz_cd_skill[skill]=0;
				player.storage.mrfz_cd_skill[skill]+=num;
				if(player.storage.mrfz_cd_skill[skill]<0) player.storage.mrfz_cd_skill[skill]=0;
			};
			player.markSkill('_mrfz_cd_skill');
			var bool=false;
			for(var i in player.storage.mrfz_cd_skill){
				if(player.storage.mrfz_cd_skill[i]>0) bool=true;
			};
			if(bool==false||storage=={}) player.unmarkSkill('_mrfz_cd_skill');
		};
	};
	game.import('character',function(lib,game,ui,get,ai,_status){
		var mrfz={
			name:'mrfz',
			connect:true,
			//connectBanned:[],
			character:{
				"mrfz_能天使":["female","mrfz_qewl",4,["mrfz_快速弹匣","mrfz_扫射模式"],['职业:狙击']],
				"mrfz_斯卡蒂":["female","mrfz_shlr",4,["mrfz_跃浪击","mrfz_暗涌悲歌","mrfz_深海掠食者"],['职业:近卫']],
				"mrfz_诗怀雅":["female","mrfz_lm",3,["mrfz_协同作战","mrfz_指挥调度"],['职业:近卫']],
				"mrfz_星熊":["female","mrfz_lm",4,["mrfz_般若之盾"],['职业:重装']],
			},
			characterIntro:{
				'mrfz_能天使':'能天使，拉特兰公民，适用拉特兰一至十三项公民权益。企鹅物流公司成员。从事秘密联络，武装押运等非公开活动，推测身份：信使。<br>于合约期内任企鹅快递驻罗德岛联络人员，同时为罗德岛多项行动提供协助。',
				'mrfz_斯卡蒂':'斯卡蒂，赏金猎人，现为罗德岛所雇佣。在过去完成的赏金任务中，于对抗大型生物，破坏硬目标，攻坚战，歼灭战等多类行动中展现出强劲实力，推测与其过往战斗经验相关。成为赏金猎人之前的履历缺失。<br>现于罗德岛某攻坚小队供职，同时身兼单兵任务预备执行干员一职。<br>对应物种：虎鲸',
				'mrfz_诗怀雅':'诗怀雅，龙门近卫局高级警司。龙门富豪家族千金，众人的掌上明珠。肉眼可见的努力和天赋使得她节节高升，家族带来的财力也能帮助她在近卫局面对的事务中采取不一样的手段。由于风格截然不同，存在竞争关系的诗怀雅与陈警官二人在事件解决方案上常有分歧。她看不惯陈的死板，陈则看不惯诗怀雅的跳脱。<br>对应物种：虎（不知道是不是华南虎）',
				'mrfz_星熊':'星熊，龙门近卫局特别任务组精英干员，龙门督察。龙门近卫局依星熊的优异能力与良好表现，破格将其吸纳进近卫局特别督查组。在处理高危险性犯罪事件、要员保护、灾害紧急救援等领域表现出较高专业性。<br>在职位上，陈长官是星熊小姐的上司，不过根据履历，星熊小姐加入近卫局时间还要在陈长官之前，并且两人共事了很久，也无怪乎相互之间完全没有上下级应有的疏离感。<br>另外，出人意料的是，在对龙门的了解上，星熊小姐要远胜陈长官，黑道、白道、政治、经济、教育、外交等等等等，龙门的方方面面，她都看在眼里，并且有自己的想法。<br>是个文武双全的人才。<br>即使是黑帮打手时期的星熊小姐就显得十分独特，绝不欺压弱小，从不为非作歹，为人讲义气，有人情味，千杯不倒，简直就像是在东国都已经被时代所抛弃的任侠一般光明磊落。<br>对应物种：日本传说中的鬼族',
			},
			skill:{
				"_mrfz_cd_skill":{
					marktext:'CD',
					intro:{
						content:function(storage,player,skill){
							var str='无技能冷却中';
							if(player.storage.mrfz_cd_skill==undefined) return str;
							for(var i in player.storage.mrfz_cd_skill){
								if(player.storage.mrfz_cd_skill[i]>0){
									if(str=='无技能冷却中') str='';
									str+=get.translation(i)+'：'+player.storage.mrfz_cd_skill[i]+'个回合<br>';
								};
							};
							if(str!='无技能冷却中') str=str.slice(0,str.length-4);
							return str;
						},
					},
					trigger:{
						global:'gameStart'
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return game.countPlayer(function(current){return current.mrfz_hasCDSkill()})>0;
					},
					content:function(){
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.mrfz_hasCDSkill()) pl.mrfz_coldDown('all');
						};
					},
				},
				"_mrfz_cd_skill1":{
					trigger:{
						player:'phaseBegin'
					},
					priority:Infinity,
					forced:true,
					popup:false,
					filter:function(event,player){
						return player.mrfz_hasCDSkill();
					},
					content:function(){
						player.mrfz_changeColdDown('all');
					},
				},
				"mrfz_狙击":{
					nobracket:true,
					mod:{
						attackFrom:function(from,to,distance){
							return -Infinity;
						},
					},
				},
				"mrfz_近卫":{
					nobracket:true,
					mod:{
						cardUsable:function (card,player,num){
							//var num1=game.countPlayer(function(current){return get.attitude(player,current)<0});
							//if(num1>2) num1=2;
							if(card.name=='sha') return num+1;
						},
					},
				},
				"_mrfz_近卫":{
					nobracket:true,
					mod:{
						cardUsable:function (card,player,num){
							if(card.name=='sha'&&game.countPlayer(function(current){return current.hasSkill('mrfz_近卫')&&get.attitude(current,player)<0})>0) return num+1;
						},
						playerEnabled:function(card,player,target){
							if(game.countPlayer(function(current){return current.hasSkill('mrfz_近卫')&&get.attitude(current,player)<0})>0){
								if(card.name=='sha'){
									if(!player.hasSkill('mrfz_近卫')){
										if(get.attitude(target,player)<0){
											if(!target.hasSkill('mrfz_近卫')){
												var num=player.getCardUsable(card)-1;
												if(num<=0) return false;
											};
										}else{
											var num=player.getCardUsable(card)-1;
											if(num<=0) return false;
										};
									};
								};
							};
						},
					},
				},
				"mrfz_重装":{
					nobracket:true,
				},
				"_mrfz_重装":{
					mod:{
						targetInRange:function (card,player,target,now){
							if(card.name=='sha'&&game.countPlayer(function(current){return current.hasSkill('mrfz_重装')&&get.attitude(current,player)<0})>0){
								for(var i=0;i<game.players.length;i++){
									var pl=game.players[i];
									if(pl.hasSkill('mrfz_重装')&&get.attitude(pl,player)<0&&target!=pl) return false;
								};
							};
						},
					},
				},
				"mrfz_跃浪击":{
					nobracket:true,
					trigger:{
						player:'useCardToPlayer'
					},
					filter:function(event,player){
						if(event.targets.length>1) return false;
						if(event.card.name!='sha') return false;
						if(get.distance(player,event.target)<=1) return false;
						return true;
					},
					check:function(event,player){
						if(get.attitude(player,event.target)>=0) return false;
						return true;
					},
					content:function(){
						player.discardPlayerCard(trigger.target,1,'he');
					},
				},
				"mrfz_暗涌悲歌":{
					nobracket:true,
					marktext:'暗',
					intro:{
						content:'cards',
					},
					trigger:{
						global:'discardAfter'
					},
					forced:true,
					filter:function(event,player){
						if(get.attitude(player,event.player)>=0) return false;
						if(event.cards==undefined) return false;
						for(var i=0;i<event.cards.length;i++){
							if(get.color(event.cards[i])=='black') return true;
						};
						return false;
					},
					content:function(){
						if(trigger.player.storage.mrfz_暗涌悲歌==undefined) trigger.player.storage.mrfz_暗涌悲歌=[];
						for(var i=0;i<trigger.cards.length;i++){
							if(get.color(trigger.cards[i])=='black') trigger.player.storage.mrfz_暗涌悲歌.push(trigger.cards[i]);
						};
						trigger.player.markSkill('mrfz_暗涌悲歌');
					},
				},
				"_mrfz_暗涌悲歌":{
					trigger:{
						player:'useCardAfter'
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						if(event.card==undefined) return false;
						return player.storage.mrfz_暗涌悲歌!=undefined;
					},
					content:function(){
						var cards=player.storage.mrfz_暗涌悲歌;
						var types=[];
						for(var i=0;i<cards.length;i++){
							var type=get.type(cards[i]);
							if(!types.contains(type)) types.push(type);
						};
						if(types.contains(get.type(trigger.card))){
							if(player.getStat().card.sha==undefined) player.getStat().card.sha=0;
							player.getStat().card.sha++;
							player.unmarkSkill('mrfz_暗涌悲歌');
							delete player.storage.mrfz_暗涌悲歌;
							player.logSkill('暗涌悲歌');
						};
					},
				},
				"mrfz_深海掠食者":{
					nobracket:true,
					trigger:{
						player:'turnOverAfter'
					},
					forced:true,
					filter:function(event,player){
						return !player.isTurnedOver();
					},
					content:function(){
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if((pl.group=='mrfz_shlr'||(pl.name2!=undefined&&pl.group=='mrfz_shlr'))&&get.attitude(player,pl)>0){
								var card=ui.cardPile.removeChild(ui.cardPile.lastChild);
								if(ui.cardPileNumber) ui.cardPileNumber.innerHTML=game.roundNumber+'轮 剩余牌: '+ui.cardPile.childNodes.length;
								pl.gain(card);
								pl.$draw(1);
								game.log(pl,'从牌堆底获得一张牌');
							};
						};
					},
				},
				"mrfz_快速弹匣":{
					nobracket:true,
					group:["mrfz_快速弹匣_1","mrfz_快速弹匣_2"],
					subSkill:{
						"1":{
							trigger:{
								player:'useCardBegin',
							},
							forced:true,
							popup:false,
							content:function(){
								if(trigger.card&&trigger.card.name=='sha'){
									if(player.storage.mrfz_快速弹匣==undefined) player.storage.mrfz_快速弹匣=0;
									player.storage.mrfz_快速弹匣++;
								}else{
									if(player.storage.mrfz_快速弹匣>1){
										player.draw(player.storage.mrfz_快速弹匣);
										player.logSkill('mrfz_快速弹匣');
									};
									delete player.storage.mrfz_快速弹匣;
								};
							},
						},
						"2":{
							trigger:{
								player:'useCardAfter',
							},
							forced:true,
							priority:-Infinity,
							filter:function(event,player){
								return event.card&&event.card.name=='sha'&&player.storage.mrfz_快速弹匣>1&&!player.hasSha();
							},
							content:function(){
								player.draw(player.storage.mrfz_快速弹匣);
								delete player.storage.mrfz_快速弹匣;
							},
						},
					},
				},
				"mrfz_扫射模式":{
					nobracket:true,
					group:["mrfz_扫射模式_1","mrfz_扫射模式_2","mrfz_扫射模式_3","mrfz_扫射模式_4","mrfz_扫射模式_5","mrfz_扫射模式_6"],
					subSkill:{
						"1":{
							trigger:{
								player:'useCardBegin',
							},
							forced:true,
							popup:false,
							content:function(){
								if(trigger.card&&trigger.card.name=='sha'){
									if(player.storage.mrfz_扫射模式_1==undefined) player.storage.mrfz_扫射模式_1=0;
									player.storage.mrfz_扫射模式_1++;
								}else{
									delete player.storage.mrfz_扫射模式_1;
								};
							},
						},
						"6":{
							trigger:{
								player:'useCardAfter',
							},
							forced:true,
							popup:false,
							priority:-Infinity,
							filter:function(event,player){
								return !player.hasSha();
							},
							content:function(){
								delete player.storage.mrfz_扫射模式_1;
							},
						},
						"2":{
							trigger:{
								player:'useCardAfter',
							},
							forced:true,
							filter:function(event,player){
								return event.card&&event.card.name=='sha'&&player.storage.mrfz_扫射模式_2==undefined;
							},
							content:function(){
								player.getStat().card.sha--;
								player.storage.mrfz_扫射模式_2=true;
							},
						},
						"3":{
							trigger:{
								player:'useCardAfter',
							},
							forced:true,
							filter:function(event,player){
								return event.card&&event.card.name=='sha'&&player.storage.mrfz_扫射模式_1>1;
							},
							content:function(){
								player.getStat().card.sha--;
							},
						},
						"4":{
							mod:{
								cardUsable:function (card,player,num){
									if(card.name=='sha'&&player.storage.mrfz_扫射模式_4!=undefined) return num+player.storage.mrfz_扫射模式_4;
								},
							},
							trigger:{
								player:'useCardAfter',
							},
							forced:true,
							filter:function(event,player){
								return event.card&&event.card.name=='sha'&&player.countCards('h')==0;
							},
							content:function(){
								if(player.storage.mrfz_扫射模式_4==undefined) player.storage.mrfz_扫射模式_4=0;
								player.storage.mrfz_扫射模式_4++;
							},
						},
						"5":{
							trigger:{
								player:'phaseUseAfter',
							},
							forced:true,
							popup:false,
							content:function(){
								delete player.storage.mrfz_扫射模式_2;
								delete player.storage.mrfz_扫射模式_4;
							},
						},
					},
				},
				"mrfz_协同作战":{
					nobracket:true,
					trigger:{
						global:'phaseDrawBegin'
					},
					forced:true,
					filter:function(event,player){
						return game.countPlayer(function(current){return current.isLinked()&&get.attitude(player,current)>0})>0&&get.attitude(player,event.player)>0;
					},
					content:function(){
						trigger.num+=game.countPlayer(function(current){return current.isLinked()&&get.attitude(player,current)>0});
					},
				},
				"mrfz_指挥调度":{
					nobracket:true,
					trigger:{
						global:'roundStart'
					},
					forced:true,
					filter:function(event,player){
						return game.countPlayer(function(current){return get.attitude(player,current)>0})>=2&&game.players.length>2;
					},
					content:function(){
						'step 0'
						player.chooseTarget(get.prompt('mrfz_指挥调度'),2,function(card,player,target){
							return get.attitude(player,target)>0;
						}).ai=function(target){
							return 0;
						};
						'step 1'
						if(result.bool){
							player.line(result.targets);
							player.logSkill('mrfz_指挥调度');
							game.swapSeat(result.targets[0],result.targets[1]);
						};
					},
				},
				"mrfz_般若之盾":{
					nobracket:true,
					trigger:{
						global:'damageBegin'
					},
					mrfz_cd:2,
					filter:function(event,player){
						return event.source&&player.countCards('he')>=2&&get.attitude(player,event.player)>0;
					},
					content:function(){
						trigger.untrigger();
						trigger.finish();
						trigger.source.discardPlayerCard(2,'hej',player,true);
						player.discardPlayerCard(trigger.source,2,'hej');
					},
				},
			},
			translate:{
				"mrfz_重装":"重装",
				"mrfz_重装_info":"锁定技，你存活时，你是敌方使用【杀】的唯一合法目标",
				"mrfz_星熊":"星熊",
				"mrfz_般若之盾":"般若之盾",
				"mrfz_般若之盾_info":"冷却技（2），已方一名角色受到伤害时，若你区域内的牌数不少于２，你可将该次伤害的伤害效果改为伤害来源弃置你的两张牌，然后你弃置伤害来源两张牌",
				"mrfz_指挥调度":"指挥调度",
				"mrfz_诗怀雅":"诗怀雅",
				"mrfz_协同作战":"协同作战",
				"mrfz_协同作战_info":"锁定技，已方角色的摸牌阶段的摸牌数+X（X为已方横置的角色数）",
				"mrfz_指挥调度":"指挥调度",
				"mrfz_指挥调度_info":"一个轮次开始时，你可以令两名己方角色互换位置",
				"mrfz_斯卡蒂":"斯卡蒂",
				"mrfz_跃浪击":"跃浪击",
				"mrfz_跃浪击_info":"你使用一张【杀】指定一名距离一以外的角色为唯一目标后，你可以弃置其一张牌",
				"mrfz_暗涌悲歌":"暗涌悲歌",
				"mrfz_暗涌悲歌_info":"锁定技，当一名敌方角色弃置黑色牌后，其须将这些黑色牌记录在其武将牌上，称为“暗”；当一名角色使用牌后，若“暗”中有与此牌类型相同的牌，其使用【杀】的次数-1，然后其消除武将牌上的“暗”",
				"mrfz_深海掠食者":"深海掠食者",
				"mrfz_深海掠食者_info":"锁定技，此角色牌正置后，己方所有【深海猎人】阵营的角色各从牌堆底获得一张牌",
				"mrfz_近卫":"近卫",
				"mrfz_近卫_info":"锁定技，你使用【杀】的次数+1；所有敌方角色对你使用【杀】的数量+1",
				"mrfz_狙击":"狙击",
				"mrfz_狙击_info":"锁定技，对方所有角色始终视为在你的攻击范围内",
				"mrfz_能天使":"能天使",
				"mrfz_快速弹匣":"快速弹匣",
				"mrfz_快速弹匣_info":"锁定技，你终止连续使用【杀】后，你摸等同于此次因使用【杀】而失去牌数的牌",
				"mrfz_扫射模式":"扫射模式",
				"mrfz_扫射模式_info":"锁定技，你于同一个你的出牌阶段内首次及连续使用的【杀】不计入次数限制里；你因使用【杀】而失去最后的手牌后，则你此回合内使用【杀】的次数+1",
			},
		};
		if(lib.device||lib.node){
			for(var i in mrfz.character){mrfz.character[i][4].push('ext:扩展ol/'+i+'.jpg');}
		}else{
			for(var i in mrfz.character){mrfz.character[i][4].push('db:extension-扩展ol:'+i+'.jpg');}
		};
		for(var i in mrfz.character){
			var character=mrfz.character[i];
			for(var j=0;j<character[4].length;j++){
				if(character[4][j].indexOf('职业:')!=-1){
					var occupation=character[4][j].slice(3,character[4][j].length);
					character[3].unshift('mrfz_'+occupation);
				};
			};
		};
		for(var i in mrfz.skill){
			var skill=mrfz.skill[i];
			if(skill.mrfz_cd!=undefined&&skill.filter!=undefined){
				var filter=skill.filter;
				filter=filter.toString();
				filter=filter.slice(0,24)+'if(player.storage.mrfz_cd_skill!=undefined&&player.storage.mrfz_cd_skill["'+i+'"]>0) return false;'+filter.slice(24,filter.length);
				filter='('+filter+')';
				skill.filter=eval(filter);
			};
			if(skill.mrfz_cd!=undefined&&skill.content!=undefined){
				var content=skill.content;
				content=content.toString();
				content=content.slice(0,content.length-1)+'player.mrfz_changeColdDown("'+i+'",'+skill.mrfz_cd+');}';
				content='('+content+')';
				skill.content=eval(content);
			};
		};
		return mrfz;
	});
	lib.config.all.characters.push('mrfz');
	if(!lib.config.characters.contains('mrfz')) lib.config.characters.push('mrfz');
	lib.group.push('mrfz_ldd');
	lib.translate.mrfz_ldd='<img src="'+lib.assetURL+'extension/扩展ol/mrfz_ldd.png" width="26" height="22">';
	lib.group.push('mrfz_qewl');
	lib.translate.mrfz_qewl='<img src="'+lib.assetURL+'extension/扩展ol/mrfz_qewl.png" width="24" height="32">';
	lib.group.push('mrfz_hggj');
	lib.translate.mrfz_hggj='<img src="'+lib.assetURL+'extension/扩展ol/mrfz_hggj.png" width="26.5" height="17">';
	lib.group.push('mrfz_lysm');
	lib.translate.mrfz_lysm='<img src="'+lib.assetURL+'extension/扩展ol/mrfz_lysm.png" width="25" height="17">';
	lib.group.push('mrfz_shlr');
	lib.translate.mrfz_shlr='<img src="'+lib.assetURL+'extension/扩展ol/mrfz_shlr.png" width="26" height="24">';
	lib.group.push('mrfz_klmy');
	lib.translate.mrfz_klmy='<img src="'+lib.assetURL+'extension/扩展ol/mrfz_klmy.png" width="26" height="26">';
	lib.group.push('mrfz_glsb');
	lib.translate.mrfz_glsb='<img src="'+lib.assetURL+'extension/扩展ol/mrfz_glsb.png" width="26" height="24">';
	//lib.group.push('mrfz_st');
	//lib.translate.mrfz_st='圣徒';
	lib.group.push('mrfz_lm');
	lib.translate.mrfz_lm='<img src="'+lib.assetURL+'extension/扩展ol/mrfz_lm.png" width="24" height="28">';
	lib.group.push('mrfz_wssxszzt');
	lib.translate.mrfz_wssxszzt='<img src="'+lib.assetURL+'extension/扩展ol/mrfz_wssxszzt.png" width="26" height="18">';
	//lib.group.push('mrfz_wdly');
	//lib.translate.mrfz_wdly='维多利亚';
	lib.translate['mrfz_character_config']='明日方舟';
};