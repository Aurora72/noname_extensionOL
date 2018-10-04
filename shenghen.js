window.func=function(lib,game,ui,get,ai,_status){
	game.import('card',function(lib,game,ui,get,ai,_status){
		var shenghen={
			name:'shenghen',
			connect:true,
			card:{
				'SH_夏洛特1':{
					type:"equip",
					subtype:"equip6",
					ai:{
						basic:{
							equipValue:6.5,
							order:function (card,player){
								if(player&&player.hasSkillTag('reverseEquip')){
									return 8.5-get.equipValue(card,player)/20;
								}else{
									return 8+get.equipValue(card,player)/20;
								};
							},
							useful:2,
							value:function (card,player){
								var value=0;
								var info=get.info(card);
								var current=player.getEquip(info.subtype);
								if(current&&card!=current) value=get.value(current,player);
								var equipValue=info.ai.equipValue;
								if(equipValue==undefined) equipValue=info.ai.basic.equipValue;
								if(typeof equipValue=='function') return equipValue(card,player)-value;
								if(typeof equipValue!='number') equipValue=0;
								return equipValue-value;
							},
						},
						result:{
							target:function (player,target){
								return get.equipResult(player,target,name);
							},
						},
					},
					skills:["SH_夏洛特1_skill"],
					enable:true,
					selectTarget:-1,
					filterTarget:function (card,player,target){
						return target==player;
					},
					modTarget:true,
					allowMultiple:false,
					content:function (){
						target.equip(card);
					},
					toself:true,
				},
				'SH_夏洛特2':{
					type:"equip",
					subtype:"equip7",
					ai:{
						basic:{
							equipValue:6.5,
							order:function (card,player){
								if(player&&player.hasSkillTag('reverseEquip')){
									return 8.5-get.equipValue(card,player)/20;
								}else{
									return 8+get.equipValue(card,player)/20;
								};
							},
							useful:2,
							value:function (card,player){
								var value=0;
								var info=get.info(card);
								var current=player.getEquip(info.subtype);
								if(current&&card!=current) value=get.value(current,player);
								var equipValue=info.ai.equipValue;
								if(equipValue==undefined) equipValue=info.ai.basic.equipValue;
								if(typeof equipValue=='function') return equipValue(card,player)-value;
								if(typeof equipValue!='number') equipValue=0;
								return equipValue-value;
							},
						},
						result:{
							target:function (player,target){
								return get.equipResult(player,target,name);
							},
						},
					},
					skills:["SH_夏洛特2_skill"],
					enable:true,
					selectTarget:-1,
					filterTarget:function (card,player,target){
						return target==player;
					},
					modTarget:true,
					allowMultiple:false,
					content:function (){
						target.equip(card);
					},
					toself:true,
				},
				'SH_夏洛特3':{
					type:"equip",
					subtype:"equip8",
					ai:{
						basic:{
							equipValue:6.5,
							order:function (card,player){
								if(player&&player.hasSkillTag('reverseEquip')){
									return 8.5-get.equipValue(card,player)/20;
								}else{
									return 8+get.equipValue(card,player)/20;
								};
							},
							useful:2,
							value:function (card,player){
								var value=0;
								var info=get.info(card);
								var current=player.getEquip(info.subtype);
								if(current&&card!=current) value=get.value(current,player);
								var equipValue=info.ai.equipValue;
								if(equipValue==undefined) equipValue=info.ai.basic.equipValue;
								if(typeof equipValue=='function') return equipValue(card,player)-value;
								if(typeof equipValue!='number') equipValue=0;
								return equipValue-value;
							},
						},
						result:{
							target:function (player,target){
								return get.equipResult(player,target,name);
							},
						},
					},
					skills:["SH_夏洛特3_skill"],
					enable:true,
					selectTarget:-1,
					filterTarget:function (card,player,target){
						return target==player;
					},
					modTarget:true,
					allowMultiple:false,
					content:function (){
						target.equip(card);
					},
					toself:true,
				},
				'SH_芽衣暴怒2':{
					type:"equip",
					subtype:"equip7",
					ai:{
						basic:{
							equipValue:6.5,
							order:function (card,player){
								if(player&&player.hasSkillTag('reverseEquip')){
									return 8.5-get.equipValue(card,player)/20;
								}else{
									return 8+get.equipValue(card,player)/20;
								};
							},
							useful:2,
							value:function (card,player){
								var value=0;
								var info=get.info(card);
								var current=player.getEquip(info.subtype);
								if(current&&card!=current) value=get.value(current,player);
								var equipValue=info.ai.equipValue;
								if(equipValue==undefined) equipValue=info.ai.basic.equipValue;
								if(typeof equipValue=='function') return equipValue(card,player)-value;
								if(typeof equipValue!='number') equipValue=0;
								return equipValue-value;
							},
						},
						result:{
							target:function (player,target){
								return get.equipResult(player,target,name);
							},
						},
					},
					skills:["SH_芽衣暴怒2_skill"],
					enable:true,
					selectTarget:-1,
					filterTarget:function (card,player,target){
						return target==player;
					},
					modTarget:true,
					allowMultiple:false,
					content:function (){
						target.equip(card);
					},
					toself:true,
				},
			},
			skill:{
				'SH_夏洛特1_skill':{
					trigger:{
						player:'shaBegin'
					},
					check:function(event,player){
						return get.attitude(player,event.target)<=0;
					},
					round:3,
					content:function(){
						trigger.directHit=true;
					},
				},
				'SH_夏洛特2_skill':{
					mod:{
						globalFrom:function(from,to,distance){
							return distance-1;
						},
					},
				},
				'SH_夏洛特3_skill':{
					mod:{
						cardUsable:function(card,player,num){
							if(card.name=='sha') return num+1;
						},
					},
				},
				'_SH_夏洛特1':{
					trigger:{
						source:'damageAfter'
					},
					filter:function(event,player){
						var bool1=false;
						if(player.countCards('e',{name:'SH_夏洛特1'})>0) bool1=true;
						var bool2=false;
						if(player.countCards('e',{name:'SH_夏洛特2'})>0) bool2=true;
						var bool3=false;
						if(player.countCards('e',{name:'SH_夏洛特3'})>0) bool3=true;
						if((bool1&&bool2)||(bool2&&bool3)||(bool1&&bool3)) return event.card!=undefined&&event.card.name=='sha';
						return false;
					},
					check:function(event,player){
						return get.attitude(player,event.target)<=0;
					},
					content:function(){
						player.discardPlayerCard(trigger.player,'he');
					},
				},
				'_SH_夏洛特2':{
					trigger:{
						player:'useCardBefore'
					},
					filter:function(event,player){
						var bool1=false;
						if(player.countCards('e',{name:'SH_夏洛特1'})>0) bool1=true;
						var bool2=false;
						if(player.countCards('e',{name:'SH_夏洛特2'})>0) bool2=true;
						var bool3=false;
						if(player.countCards('e',{name:'SH_夏洛特3'})>0) bool3=true;
						if(bool1&&bool2&&bool3) return event.card!=undefined&&event.card.name=='sha'&&event.card.nature==undefined;
						return false;
					},
					forced:true,
					popup:false,
					priority:Infinity,
					content:function(){
						trigger.card.nature='fire';
					},
				},
				'SH_芽衣暴怒2_skill':{
					marktext:"怒",
					intro:{
						content:function (storage){
							return '当前拥有'+storage+'点怒气'
						},
					},
					group:["SH_芽衣暴怒2_skill_1","SH_芽衣暴怒2_skill_2"],
					subSkill:{
						"1":{
							trigger:{
								player:'useCardBegin'
							},
							filter:function(event,player){
								if(event.targets==undefined) return false;
								for(var i=0;i<event.targets.length;i++){
									var pl=event.targets[i];
									if(get.attitude(player,pl)<=0) return true;
								};
								return false;
							},
							forced:true,
							content:function(){
								if(player.storage.SH_芽衣暴怒2_skill==undefined) player.storage.SH_芽衣暴怒2_skill=0;
								player.markSkill('SH_芽衣暴怒2_skill');
								player.storage.SH_芽衣暴怒2_skill++;
								player.syncStorage('SH_芽衣暴怒2_skill');
								game.log(player,'的怒气值+1');
							},
						},
						"2":{
							trigger:{
								player:'damageAfter'
							},
							filter:function(event,player){
								return event.source!=undefined&&player.storage.SH_芽衣暴怒2_skill>=3;
							},
							check:function(event,player){
								return event.source!=undefined&&get.attitude(player,event.source)<=0;
							},
							content:function(){
								trigger.source.damage(Math.floor(player.storage.SH_芽衣暴怒2_skill/3),'thunder');
								player.storage.SH_芽衣暴怒2_skill=0;
								player.syncStorage('SH_芽衣暴怒2_skill');
								game.log(player,'的怒气值清空了');
							},
						},
					},
				},
			},
			translate:{
				'SH_芽衣暴怒2':'芽衣暴怒',
				'SH_芽衣暴怒2_skill':'芽衣暴怒',
				'SH_芽衣暴怒2_info':'当你使用的牌指定负面态度的角色时，你的怒气值+1;当你受到伤害后，若你的怒气值大于或等于3，你可以对伤害来源造成X点雷属性伤害（X为怒气值/3（向下取整））并清空怒气值',
				'SH_夏洛特1':'夏洛特-上',
				'SH_夏洛特1_skill':'夏洛特-上',
				'SH_夏洛特1_info':'你的【杀】不可被闪避，每三轮限一次',
				'SH_夏洛特2':'夏洛特-中',
				'SH_夏洛特2_skill':'夏洛特-中',
				'SH_夏洛特2_info':'锁定技，你的进攻距离+1',
				'SH_夏洛特3':'夏洛特-下',
				'SH_夏洛特3_skill':'夏洛特-下',
				'SH_夏洛特3_info':'出牌阶段，你的使用【杀】的次数+1',
				'_SH_夏洛特1':'夏洛特②',
				'_SH_夏洛特2':'夏洛特③',
				'shenghen_tz_夏洛特':'<br><br>套装技能：<li>两件：当你的【杀】造成伤害后，可以弃置对方一张牌<li>三件：锁定技，你使用或打出的无属性【杀】均视为【火杀】',
			},
			list:[],
		};
		for(var i in shenghen.card){
			shenghen.card[i].fullimage=true;
			shenghen.card[i].image='ext:扩展ol/'+i+'.png';
		};
		for(var i in shenghen.translate){
			if(i.indexOf('shenghen_tz_')!=-1){
				var str=i.slice(12);
				for(var j in shenghen.translate){
					if(j.indexOf(str)!=-1&&j.indexOf('_info')!=-1){
						shenghen.translate[j]+=shenghen.translate[i];
					};
				};
			};
		};
		return shenghen;
	});
	lib.translate['shenghen_card_config']='圣痕';
	lib.config.all.cards.push('shenghen');
	if(!lib.config.cards.contains('shenghen')) lib.config.cards.push('shenghen');
}