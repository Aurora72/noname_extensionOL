window.func=function(lib,game,ui,get,ai,_status){
	game.import('character',function(lib,game,ui,get,ai,_status){
		var c_zx={
			name:'c_zx',
			connect:true,
			characterSort:{
				c_zx:{
					'c_zx1':['FGO_qige','FGO_maxiujilielaite','FGO_karong','FGO_haisenluobo','FGO_jierdelei'],
					'c_zx2':['ald_ailudi','NGNL_xiubi'],
				},
			},
			connectBanned:["ald_ailudi","FGO_maxiujilielaite"],
			character:{
				"ald_ailudi":["female","shen",3,["ald_yinju"],['forbidai']],
				"NGNL_xiubi":["female","shen",3,["NGNL_jinengmofang","NGNL_rengemofang","NGNL_shujulianjie"],[]],
				"FGO_qige":["male","qun",'',["FGO_longgaolingzhou","FGO_zhuorelongxi"],['FGO']],
				"FGO_maxiujilielaite":["female","qun",'',["FGO_baiyazhibi","FGO_lixiangzhicheng"],['FGO']],
				"FGO_karong":["male","qun",'',["FGO_shenshoudezhihui","FGO_yongshengdefengxian"],['FGO']],
				"FGO_haisenluobo":["male","qun",'',["FGO_duotianzhimo","FGO_chansizhiren"],['FGO']],
				"FGO_jierdelei":["male","qun",'',["FGO_shengqizhixia","FGO_jijiehousheng"],['FGO']],
			},
			skill:{
				"ald_yinju":{
					trigger:{
						global:"phaseBefore",
					},
					forced:true,
					filter:function(event,player){
						return player.storage.ald_yinju==undefined&&get.mode()!='guozhan';
					},
					content:function (){
						player.addSkill('ald_yinju2');
						if(player!=game.zhu) game.roundNumber-=1;
						game.broadcastAll(function(me){
							for(var i=0;i<game.players.length;i++){
								var player=game.players[i];
								if(player!=me) player.classList.add('out');
							};
							setTimeout(function(){
								me.removeSkill('ald_yinju2');
								for(var i=0;i<game.players.length;i++){
									var player=game.players[i];
									if(player!=me) player.classList.remove('out');
								};
								me.useSkill('ald_yinju1');
							},25000);
						},player);
						player.storage.ald_yinju=true;
					},
				},
				"ald_yinju2":{
					trigger:{
						player:"phaseBegin",
					},
					popup:false,
					forced:true,
					content:function (){
						game.roundNumber-=1;
					},
				},
				"ald_yinju1":{
					content:function(){
						'step 0'
						player.chooseControl(['相信艾德','开始狩猎人类']).prompt='请选择一项';
						'step 1'
						if(result.control=='相信艾德'){
							game.broadcastAll(function(player){
								player.clearSkills();
								if(player.name=='ald_ailudi'){
									player.node.avatar.setBackgroundImage('extension/扩展ol/ald_ailudi1.jpg');
								}else{
									player.node.avatar2.setBackgroundImage('extension/扩展ol/ald_ailudi1.jpg');
								};
								player.addSkill('ald_zhiyu');
								player.addSkill('ald_jiushu');
							},player);
						};
						if(result.control=='开始狩猎人类'){
							game.broadcastAll(function(player){
								player.clearSkills();
								if(player.name=='ald_ailudi'){
									player.node.avatar.setBackgroundImage('extension/扩展ol/ald_ailudi2.jpg');
								}else{
									player.node.avatar2.setBackgroundImage('extension/扩展ol/ald_ailudi2.jpg');
								};
								player.addSkill('ald_shoulie');
								player.addSkill('ald_xihun');
							},player);
						};
					},
				},
				"ald_zhiyu":{
					enable:'phaseUse',
					filterCard:true,
					usable:1,
					check:function(card){
						return 9-get.value(card)
					},
					filterTarget:function(card,player,target){
						if(target.hp>=target.maxHp) return false;
						return true;
					},
					content:function(){
						target.recover();
					},
					ai:{
						order:9,
						result:{
							target:function(player,target){
								if(target.hp==1) return 5;
								if(player==target&&player.countCards('h')>player.hp) return 5;
								return 2;
							},
						},
					},
				},
				"ald_jiushu":{
					trigger:{
						player:"dieBegin",
					},
					content:function (){
						player.$skill("<img src="+lib.assetURL+'extension/扩展ol/ald_ailudi1.jpg'+" width='300' height='300'>",'legend');
						player.removeSkill('ald_jiushu');
						for(var i=0;i<game.players.length;i++){
							if(game.players[i]!=player){
								game.players[i].recover();
								game.players[i].draw();
							};
						};
						trigger.untrigger();
						trigger.finish();
						player.recover(2-player.hp);
					},
				},
				"ald_shoulie":{
					trigger:{
						source:"damageBegin",
					},
					filter:function (event,player){
						return event.player.group!='shen';
					},
					forced:true,
					content:function (){
						trigger.num++;
					},
				},
				"ald_xihun":{
					init:function(player){
						player.storage.ald_xihun=0;
						player.syncStorage('ald_xihun');
					},
					marktext:"魂",
					intro:{
						content:function (storage){
							return '你拥有'+storage+'灵魂';
						},
					},
					mark:true,
					trigger:{
						global:"dieBegin",
					},
					forced:true,
					content:function (){
						var num=[1,2,3,4,5].randomGet();
						player.storage.ald_xihun+=num;
						player.syncStorage('ald_xihun');
						game.log(player,'吸收了',trigger.player,'的灵魂');
					},
				},
				"_ald_xihun":{
					enable:'phaseUse',
					filter:function (event,player){
						return player.storage.ald_xihun>=2;
					},
					content:function(){
						player.storage.ald_xihun-=2;
						player.syncStorage('ald_xihun');
						game.log(player,'吞食了灵魂');
						if(Math.random()<=0.5){
							player.gainMaxHp(1);
							player.recover();
						}else{
							if(player.storage.ald_xihun1==undefined) player.storage.ald_xihun1;
							player.storage.ald_xihun1++;
							game.log(player,'的攻击力+1');
						};
					},
					ai:{
						order:12,
						result:{
							player:1,
						},
					},
				},
				"_ald_xihun1":{
					trigger:{
						source:"damageBegin",
					},
					filter:function (event,player){
						return player.storage.ald_xihun1>0;
					},
					forced:true,
					content:function (){
						trigger.num+=player.storage.ald_xihun1;
					},
				},
				"NGNL_jinengmofang":{
					nobracket:true,
					group:["NGNL_jinengmofang_active","NGNL_jinengmofang_passive"],
					subSkill:{
						"active":{
							trigger:{
								global:"useSkillAfter",
							},
							frequent:true,
							filter:function(event,player){
								return event.targets.contains(player)&&event.player!=player;
							},
							content:function(){
								player.addSkill(trigger.skill);
								game.log(player,'获得了技能【'+get.translation(trigger.skill)+'】');
								if(player.storage.NGNL_jinengmofang==undefined) player.storage.NGNL_jinengmofang=[];
								player.storage.NGNL_jinengmofang.push(trigger.skill);
							},
						},
						"passive":{
							trigger:{
								player:"phaseEnd",
							},
							forced:true,
							filter:function(event,player){
								for(var i=0;i<game.players.length;i++){
									var pl=game.players[i];
									if(pl!=player){
										var skill=pl.get('s',false,false);
										for(j=0;j<skill.length;j++){
											if(lib.translate[skill[j]+'_info']!=undefined&&lib.translate[skill[j]+'_info'].indexOf('锁定技')!=-1) return true;
										};
									};
								};
							},
							content:function(){
								var list=[];
								for(var i=0;i<game.players.length;i++){
									var pl=game.players[i];
									if(pl!=player){
										var skill=pl.get('s',false,false);
										for(j=0;j<skill.length;j++){
											if(lib.translate[skill[j]+'_info']!=undefined&&lib.translate[skill[j]+'_info'].indexOf('锁定技')!=-1) list.push(skill[j]);
										};
									};
								};
								if(list.length>0){
									var skill=list.randomGet();
									player.addTempSkill(skill,{player:'phaseBegin'});
									game.log(player,'获得了技能【'+get.translation(skill)+'】');
								};
							},
						},
					},
				},
				"_NGNL_jinengmofang":{
					trigger:{
						player:"useSkillAfter",
					},
					forced:true,
					filter:function(event,player){
						return player.storage.NGNL_jinengmofang!=undefined&&player.storage.NGNL_jinengmofang.contains(event.skill);
					},
					content:function(){
						player.removeSkill(trigger.skill);
						game.log(player,'失去了技能【'+get.translation(trigger.skill)+'】');
						player.storage.NGNL_jinengmofang.remove(trigger.skill);
					},
				},
				"_NGNL_rengemofang":{
					trigger:{
						player:"useCardAfter",
					},
					forced:true,
					filter:function(event,player){
						return _status.currentPhase==player;
					},
					content:function(){
						if(player.storage.NGNL_rengemofang==undefined) player.storage.NGNL_rengemofang=[];
						player.storage.NGNL_rengemofang.push(trigger.card.name);
					},
				},
				"_NGNL_rengemofang1":{
					trigger:{
						player:"phaseUseBegin",
					},
					forced:true,
					filter:function(event,player){
						return player.storage.NGNL_rengemofang!=undefined;
					},
					content:function(){
						delete player.storage.NGNL_rengemofang;
					},
				},
				"_NGNL_rengemofang2":{
					trigger:{
						player:"useCardAfter",
					},
					forced:true,
					filter:function(event,player){
						var target=player.storage.NGNL_rengemofang1;
						return target!=undefined&&target.storage.NGNL_rengemofang!=undefined&&target.storage.NGNL_rengemofang.contains(event.card.name);
					},
					content:function(){
						player.draw();
					},
				},
				"NGNL_rengemofang":{
					nobracket:true,
					enable:"phaseUse",
					usable:1,
					/*filterCard:true,
					selectCard:function(){
						var player=_status.event.player;
						return player.get('s',false,false).length-1;
					},
					check:function(card){
						return 5-get.value(card);
					},*/
					filterTarget:function (card,player,target){
						return target!=player&&player.storage.NGNL_rengemofang1!=target&&target.storage.NGNL_rengemofang!=undefined;
					},
					content:function(){
						player.storage.NGNL_rengemofang1=target;
					},
					ai:{
						order:12,
						result:{
							target:function(player,target){
								if(target.storage.NGNL_rengemofang!=undefined) return -target.storage.NGNL_rengemofang.length;
							},
						},
					},
				},
				"NGNL_shujulianjie":{
					nobracket:true,
					enable:"phaseUse",
					//usable:1,
					filterCard:true,
					selectCard:function(){
						var player=_status.event.player;
						return player.get('s',false,false).length-1;
					},
					check:function(card){
						return 6-get.value(card);
					},
					content:function(){
						player.recover();
						var list=[];
						for(var i in lib.skill){
							if(lib.translate[i+'_info']!=undefined) list.push(i);
						};
						var skill=list.randomGet();
						player.addTempSkill(skill,{player:'phaseBegin'});
						game.log(player,'获得了技能【'+get.translation(skill)+'】');
					},
					ai:{
						order:13,
						result:{
							player:function(player){
								if(player.hp<=1||(player.countCards('h')>3&& player.get('s',false,false).length-1<=2&&player.hp<=2)) return 1;
							},
						},
					},
				},
				"FGO_support":{
					kzol_init:function(player){
						var bool=false;
						if((lib.character[player.name]!=undefined&&lib.character[player.name][4]!=undefined&&lib.character[player.name][4].contains('FGO'))||
						(player.name2!=undefined&&lib.character[player.name2]!=undefined&&lib.character[player.name2][4].contains('FGO'))) bool=true;
						if(bool==true){
							game.broadcastAll(function(player){
								player.maxHp=Infinity;
								player.hp=Infinity;
								player.node.hp.delete();
								var div=ui.create.div('');
								div.style.height='20px';
								//div.style.width='100px';
								div.style.left='15px';
								div.style.bottom='22px';
								if(player.node.avatar){
									var avatar=player.node.avatar;
									div.style.bottom='';
									var num=avatar.offsetWidth;
									if(num*2<player.node.avatar.parentNode.offsetWidth) num=num*2;
									if(player==game.me) num=100;
									//div.style.width=(num)+'px';
									div.style.left=(avatar.offsetLeft)+'px';
									div.style.top=(avatar.offsetHeight+avatar.offsetTop-20)+'px';
								};
								player.appendChild(div);
								player.node.FGO_condition=div;
							},player);
						};
					},
				},
				"_FGO_support1":{
					mod:{
						maxHandcard:function(player,num){
							if(((lib.character[player.name]!=undefined&&lib.character[player.name][4]!=undefined&&lib.character[player.name][4].contains('FGO'))||(player.name2!=undefined&&lib.character[player.name2]!=undefined&&lib.character[player.name2][4]!=undefined&&lib.character[player.name2][4].contains('FGO')))) return 3;
						},
					},
				},
				/*"_FGO_support2":{
					enable:'phaseUse',
					filter:function(event,player){
						return ((lib.character[player.name]!=undefined&&lib.character[player.name][4]!=undefined&&lib.character[player.name][4].contains('FGO'))||
						(player.name2!=undefined&&lib.character[player.name2]!=undefined&&lib.character[player.name2][4]!=undefined&&lib.character[player.name2][4].contains('FGO')))&&
						player.countCards('h',{name:'tao'})>0&&game.FGO_QH==true;
					},
					filterCard:function(card){
						return card.name=='tao';
					},
					check:function(card){
						return 1;
					},
					content:function(){
						player.draw();
					},
					discard:false,
					prompt:'将一张【桃】置入弃牌堆并摸一张牌',
					delay:0.5,
					prepare:function(cards,player){
						player.$throw(cards,1000);
					},
					ai:{
						basic:{
							order:15,
						},
						result:{
							player:1,
						},
					},
				},*/
				"FGO_longgaolingzhou":{
					init:function(player){
						if(player.showCharacter) player.showCharacter(2);
					},
					nobracket:true,
					group:["FGO_longgaolingzhou_1","FGO_longgaolingzhou_2","FGO_longgaolingzhou_3"],
					subSkill:{
						"1":{
							trigger:{
								global:"gameStart",
							},
							forced:true,
							content:function(){
								game.broadcastAll(function(player){
									lib.skill['FGO_support'].kzol_init(player);
									player.storage.FGO_lifeTime=0;
									var interval=setInterval(function(){
										player.storage.FGO_lifeTime++;
										var sec=Math.floor(player.storage.FGO_lifeTime%60);
										if(sec<10) sec='0'+sec;
										player.node.FGO_condition.innerHTML='存在时间：'+Math.floor(player.storage.FGO_lifeTime/60)+':'+sec;
										if(player.storage.FGO_lifeTime>180+(game.dead.length+game.players.length)*15){
											player.die();
											clearInterval(interval);
										};
									},1000);
								},player);
							},
						},
						"2":{
							trigger:{
								player:"gainAfter",
							},
							forced:true,
							popup:false,
							content:function(){
								var num=3;
								if(player.storage.FGO_lifeTime>180) num=1;
								player.storage.FGO_lifeTime-=trigger.cards.length*num;
								if(player.storage.FGO_lifeTime<0) player.storage.FGO_lifeTime=0;
							},
						},
						"3":{
							trigger:{
								player:"loseAfter",
							},
							forced:true,
							popup:false,
							content:function(){
								player.storage.FGO_lifeTime+=trigger.cards.length*1.75;
							},
						},
					},
				},
				"FGO_zhuorelongxi":{
					nobracket:true,
					group:["FGO_zhuorelongxi_1","FGO_zhuorelongxi_2"],
					subSkill:{
						"1":{
							enable:'phaseUse',
							usable:1,
							filter:function (event,player){
								return player.storage.FGO_lifeTime<180;
							},
							filterTarget:function(card,player,target){
								return target!=player&&get.distance(player,target,'attack')<=1;
							},
							content:function(){
								target.damage('fire');
								player.storage.FGO_lifeTime+=90;
							},
							ai:{
								order:11,
								result:{
									target:function(player,target){
										if(player.storage.FGO_lifeTime<=90) return -1;
									},
								},
								expose:1,
							},
						},
						"2":{
							enable:'phaseUse',
							usable:1,
							filter:function (event,player){
								return player.storage.FGO_lifeTime>=180&&player.countCards('h')>=1;
							},
							content:function(){
								player.showHandcards();
								player.storage.FGO_lifeTime-=player.countCards('h');
							},
							ai:{
								order:12,
								result:{
									player:1,
								},
							},
						},
					},
				},
				"FGO_baiyazhibi":{
					init:function(player){
						if(player.showCharacter) player.showCharacter(2);
					},
					nobracket:true,
					group:["FGO_baiyazhibi_1","FGO_baiyazhibi_2","FGO_baiyazhibi_3","FGO_baiyazhibi_4"],
					subSkill:{
						"1":{
							trigger:{
								player:"phaseAfter",
							},
							forced:true,
							popup:false,
							content:function(){
								player.storage.FGO_lifeRound++;
								if(player.storage.FGO_lifeRound%3==0) player.changeHujia();
							},
						},
						"2":{
							trigger:{
								global:"gameStart",
							},
							forced:true,
							content:function(){
								game.broadcastAll(function(player){
									lib.skill['FGO_support'].kzol_init(player);
									player.changeHujia(5);
									player.storage.FGO_lifeRound=0;
									var interval=setInterval(function(){
										var str='';
										if(player.storage.FGO_baiyazhibi!=undefined){
											if(16-player.storage.FGO_baiyazhibi1*2-player.storage.FGO_baiyazhibi>=0){
												str='剩余时间：'+Math.floor(16-player.storage.FGO_baiyazhibi1*2-player.storage.FGO_baiyazhibi)+'s';
											}else{
												str='<span style="font-weight:600;font-size:9.5px">任意事件触发后结束回合</span>';
											};
										};
										player.node.FGO_condition.innerHTML=str+'|已存在'+player.storage.FGO_lifeRound+'个回合';
										if(player.storage.FGO_lifeRound>=10&&(player.hujia==0||player.hujia==undefined)){
											player.die();
											clearInterval(interval);
										};
									},1000);
								},player);
							},
						},
						"3":{
							trigger:{
								player:"phaseUseBegin",
							},
							forced:true,
							popup:false,
							content:function (){
								player.storage.FGO_baiyazhibi=0;
								player.storage.FGO_baiyazhibi1=0;
								if(player.hujia!=undefined) player.storage.FGO_baiyazhibi1=player.hujia;
								player.storage.FGO_baiyazhibi_interval=setInterval(function(){
									if(_status.event.name=='chooseToUse'){
										player.storage.FGO_baiyazhibi+=0.1;
										if(player.storage.FGO_baiyazhibi>=16-player.storage.FGO_baiyazhibi1*2){
											var evt=_status.event;
											for(var i=0;i<10;i++){
												if(evt&&evt.getParent) evt=evt.getParent();
												if(evt.name=='phaseUse'){
													evt.skipped=true;
													break;
												};
											};
										};
									};
								},100);
							},
						},
						"4":{
							trigger:{
								player:"phaseUseEnd",
							},
							forced:true,
							popup:false,
							content:function(){
								clearInterval(player.storage.FGO_baiyazhibi_interval)
								delete player.storage.FGO_baiyazhibi;
								delete player.storage.FGO_baiyazhibi1;
								delete player.storage.FGO_baiyazhibi_interval;
							},
						},
					},
				},
				"FGO_lixiangzhicheng":{
					nobracket:true,
					enable:'phaseUse',
					usable:1,
					filter:function (event,player){
						return player.hujia>0;
					},
					filterTarget:function(card,player,target){
						return player!=target;
					},
					selectTarget:function(){
						var player=_status.event.player;
						var num=3;
						if(player.hujia<3) num=player.hujia;
						return [1,num];
					},
					content:function(){
						player.changeHujia(-1);
						target.changeHujia();
						if(player.storage.FGO_lixiangzhicheng==undefined) player.storage.FGO_lixiangzhicheng=0;
						player.storage.FGO_lixiangzhicheng++;
						if(player.storage.FGO_lixiangzhicheng>=2&&player.storage.FGO_lifeRound>0){
							player.storage.FGO_lifeRound--;
							player.storage.FGO_lixiangzhicheng-=2;
						};
						if(player.storage.FGO_lixiangzhicheng>=2&&player.storage.FGO_lifeRound>0){
							player.storage.FGO_lifeRound--;
							player.storage.FGO_lixiangzhicheng-=2;
						};
					},
					ai:{
						order:1,
						result:{
							target:function(player,target){
								if(player.hujia>5) return 1;
							},
						},
						expose:1,
					},
				},
				"FGO_shenshoudezhihui":{
					init:function(player){
						if(player.showCharacter) player.showCharacter(2);
					},
					nobracket:true,
					trigger:{
						global:"gameStart",
					},
					forced:true,
					content:function(){
						game.broadcastAll(function(player){
							lib.skill['FGO_support'].kzol_init(player);
							player.storage.FGO_lifeTime=0;
							player.storage.FGO_shenshoudezhihui=1;
							var interval=setInterval(function(){
								player.storage.FGO_lifeTime++;
								var sec=Math.floor(player.storage.FGO_lifeTime%60);
								if(sec<10) sec='0'+sec;
								player.node.FGO_condition.innerHTML='存在时间：'+Math.floor(player.storage.FGO_lifeTime/60)+':'+sec;
								if(player.storage.FGO_lifeTime>120+(game.dead.length+game.players.length)*30){
									player.die();
									clearInterval(interval);
								};
								if(player.storage.FGO_lifeTime>player.storage.FGO_shenshoudezhihui*60){
									player.logSkill('FGO_shenshoudezhihui');
									player.storage.FGO_shenshoudezhihui++;
									for(var i=0;i<game.players.length;i++){
										var pl=game.players[i];
										player.line(pl);
										if(pl.storage.FGO_lifeTime!=undefined){
											pl.storage.FGO_lifeTime-=10;
										}else{
											pl.getDebuff();
											pl.getDebuff();
										};
									};
								};
							},1000);
						},player);
					},
				},
				"FGO_yongshengdefengxian":{
					nobracket:true,
					trigger:{
						player:"turnOverBegin",
					},
					filter:function (event,player){
						return !player.isTurnedOver();
					},
					direct:true,
					content:function(){
						"step 0"
						player.chooseTarget(get.prompt('FGO_yongshengdefengxian'),function(card,player,target){
							return player!=target;
						}).ai=function(target){
							if(player.storage.FGO_lifeTime<180) return get.attitude(player,target);
						};
						"step 1"
						if(result.bool){
							trigger.cancel();
							var target=result.targets[0];
							player.line(target);
							player.popup('FGO_yongshengdefengxian');
							player.storage.FGO_lifeTime+=30;
							target.addSkill('qianxing');
							setTimeout(function(){
								target.removeSkill('qianxing');
							},20000);
						};
					},
				},
				"FGO_duotianzhimo":{
					init:function(player){
						if(player.showCharacter) player.showCharacter(2);
					},
					nobracket:true,
					group:["FGO_duotianzhimo_1","FGO_duotianzhimo_2"],
					subSkill:{
						"1":{
							trigger:{
								global:"gameStart",
							},
							forced:true,
							content:function(){
								game.broadcastAll(function(player){
									lib.skill['FGO_support'].kzol_init(player);
									player.storage.FGO_condition_damage1=0;
									var interval=setInterval(function(){
										player.node.FGO_condition.innerHTML='<span style="font-weight:600;font-size:12px">受到过'+player.storage.FGO_condition_damage1+'次雷电伤害</span>';
										if(player.storage.FGO_condition_damage1>=3){
											player.die();
											clearInterval(interval);
										};
									},1000);
								},player);
								player.gain(game.createCard({name:'sha',nature:'thunder'}),'gain2');
								for(var i=0;i<3;i++){
									ui.discardPile.appendChild(game.createCard({name:'sha',nature:'thunder'}));
								};
							},
						},
						"2":{
							trigger:{
								player:"damageAfter",
							},
							forced:true,
							filter:function (event,player){
								return event.nature=='thunder';
							},
							content:function(){
								player.storage.FGO_condition_damage1++;
								if(player.storage.FGO_condition_damage1==1){
									player.draw(3);
									for(var i=0;i<game.players.length;i++){
										var pl=game.players[i];
										if(pl!=player) pl.gain(game.createCard({name:'sha',nature:'thunder'}),'gain2');
									};
								};
								if(player.storage.FGO_condition_damage1>=2){
									var evt=_status.event;
									for(var i=0;i<10;i++){
										if(evt&&evt.getParent) evt=evt.getParent();
										if(evt.name=='phaseUse'){
											evt.skipped=true;
											break;
										};
									};
									player.insertPhase();
								};
							},
						},
					},
				},
				"FGO_chansizhiren":{
					nobracket:true,
					group:["FGO_chansizhiren_1","FGO_chansizhiren_2"],
					subSkill:{
						"1":{
							enable:'phaseUse',
							viewAs:{name:'sha'},
							prompt:'将【闪】当作【杀】使用',
							viewAsFilter:function(player){
								return player.storage.FGO_condition_damage1==0||player.storage.FGO_condition_damage1==undefined;
							},
							filterCard:function(card,player){
								return card.name=='shan';
							},
							onuse:function(result,player){
								player.addTempSkill('FGO_chansizhiren1',{player:'useCardAfter'});
							},
							ai:{
								basic:{
									order:function(name,player){
										return get.order({name:'sha'})+1;
									},
								},
								result:{
									player:1,
								},
							},
						},
						"2":{
							trigger:{
								player:'phaseEnd'
							},
							direct:true,
							filter:function(event,player){
								return player.storage.FGO_condition_damage1>0;
							},
							content:function(){
								'step 0'
								player.chooseCard(get.prompt('FGO_chansizhiren'),'he').set('ai',function(card){
									return 4-get.value(card);
								});
								'step 1'
								if(result.bool){
									player.discard(result.cards);
									player.draw();
									player.popup('FGO_chansizhiren');
								};
							},
						},
					},
				},
				"FGO_chansizhiren1":{
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
				"FGO_shengqizhixia":{
					nobracket:true,
					group:["FGO_shengqizhixia_1","FGO_shengqizhixia_2"],
					subSkill:{
						"1":{
							trigger:{
								global:"gameStart",
							},
							forced:true,
							content:function(){
								game.broadcastAll(function(player){
									lib.skill['FGO_support'].kzol_init(player);
									setTimeout(function(){
										var interval=setInterval(function(){
											if(player.countCards('e')==0){
												player.die();
												clearInterval(interval);
											};
										},1000);
									},3000);
								},player);
								var list=[];
								var list1=[];
								var list2=[];
								var list3=[];
								var list4=[];
								var list5=[];
								for(var i=0;i<lib.cardPack.standard.length;i++){
									list.push(lib.cardPack.standard[i]);
								};
								for(var i=0;i<lib.cardPack.extra.length;i++){
									list.push(lib.cardPack.extra[i]);
								};
								for(var i=0;i<lib.cardPack.sp.length;i++){
									list.push(lib.cardPack.sp[i]);
								};
								for(var i=0;i<lib.cardPack.swd.length;i++){
									list.push(lib.cardPack.swd[i]);
								};
								for(var i=0;i<lib.cardPack.gujian.length;i++){
									list.push(lib.cardPack.gujian[i]);
								};
								for(var i=0;i<list.length;i++){
									var card=lib.card[list[i]];
									if(card.type=='equip'&&card.subtype=='equip1') list1.push(list[i]);
									if(card.type=='equip'&&card.subtype=='equip2') list2.push(list[i]);
									if(card.type=='equip'&&card.subtype=='equip3') list3.push(list[i]);
									if(card.type=='equip'&&card.subtype=='equip4') list4.push(list[i]);
									if(card.type=='equip'&&card.subtype=='equip5') list5.push(list[i]);
								};
								if(list1.length>0){
									var card1=game.createCard({name:list1.randomGet()});
									player.gain(card1,'gain2');
									player.equip(card1);
								};
								if(list2.length>0){
									var card2=game.createCard({name:list2.randomGet()});
									player.gain(card2,'gain2');
									player.equip(card2);
								};
								if(list3.length>0){
									var card3=game.createCard({name:list3.randomGet()});
									player.gain(card3,'gain2');
									player.equip(card3);
								};
								if(list4.length>0){
									var card4=game.createCard({name:list4.randomGet()});
									player.gain(card4,'gain2');
									player.equip(card4);
								};
								if(list5.length>0){
									var card5=game.createCard({name:list5.randomGet()});
									player.gain(card5,'gain2');
									player.equip(card5);
								};
								for(var i=0;i<4;i++){
									ui.discardPile.appendChild(game.createCard({name:'guohe'}));
								};
								ui.discardPile.appendChild(game.createCard({name:'shunshou'}));
								/*var card1=get.cardPile(function(card){return get.type(card)=='equip'&&get.subtype(card)=='equip1'});
								if(card1!=undefined){
									player.gain(card1,'gain2');
									player.equip(card1);
								};
								var card2=get.cardPile(function(card){return get.type(card)=='equip'&&get.subtype(card)=='equip2'});
								if(card2!=undefined){
									player.gain(card2,'gain2');
									player.equip(card2);
								};
								var card3=get.cardPile(function(card){return get.type(card)=='equip'&&get.subtype(card)=='equip3'});
								if(card3!=undefined){
									player.gain(card3,'gain2');
									player.equip(card3);
								};
								var card4=get.cardPile(function(card){return get.type(card)=='equip'&&get.subtype(card)=='equip4'});
								if(card4!=undefined){
									player.gain(card4,'gain2');
									player.equip(card4);
								};
								var card5=get.cardPile(function(card){return get.type(card)=='equip'&&get.subtype(card)=='equip5'});
								if(card5!=undefined){
									player.gain(card5,'gain2');
									player.equip(card5);
								};*/
							},
						},
						"2":{
							trigger:{
								player:'equipBegin'
							},
							forced:true,
							popup:false,
							content:function(){
								'step 0'
								event.equip=[];
								for(var i=0;i<player.countCards('e');i++){
									var equip=player.get('e')[i];
									if(get.subtype(equip)==get.subtype(trigger.card)) event.equip.push(equip);
								};
								if(event.equip.length<2){
									trigger.cancel();
									player.$gain2(trigger.card);
									player.$equip(trigger.card);
									game.log(player,'装备了',trigger.card);
									event.finish();
								};
								'step 1'
								var equip=event.equip.randomGet();
								player.chooseCardButton(event.equip,'请选择替换的装备牌').ai=function(button){
									if(button.link==equip) return 1;
								};
								'step 2'
								if(result.bool){
									player.discard(result.links[0]);
									trigger.cancel();
									player.$gain2(trigger.card);
									player.$equip(trigger.card);
									game.log(player,'装备了',trigger.card);
								}else{
									trigger.cancel();
								};
							},
							ai:{
								effect:{
									player:function(card,player,target){
										if(get.subtype(card)=='equip1') return [1,10];
										if(get.subtype(card)=='equip2') return [1,10];
										if(get.subtype(card)=='equip3') return [1,10];
										if(get.subtype(card)=='equip4') return [1,10];
										if(get.subtype(card)=='equip5') return [1,10];
									},
								},
							},
						},
					},
				},
				"FGO_jijiehousheng":{
					nobracket:true,
					trigger:{
						player:'loseAfter'
					},
					filter:function(event,player){
						for(var i=0;i<event.cards.length;i++){
							if(event.cards[i].original=='e') return true;
						};
						return false;
					},
					content:function(){
						'step 0'
						var equip=player.get('e').randomGet();
						player.chooseCardButton(player.get('e'),'请选择需要替换的装备牌').ai=function(button){
							if(button.link==equip) return 1;
						};
						'step 1'
						if(result.bool){
							event.equip=result.links[0];
						}else{
							event.finish();
						};
						'step 2'
						var list=[];
						for(var i=0;i<lib.cardPack.standard.length;i++){
							var card=game.createCard({name:lib.cardPack.standard[i]})
							if(get.subtype(card)==get.subtype(event.equip)) list.push(card);
						};
						for(var i=0;i<lib.cardPack.extra.length;i++){
							var card=game.createCard({name:lib.cardPack.extra[i]})
							if(get.subtype(card)==get.subtype(event.equip)) list.push(card);
						};
						for(var i=0;i<lib.cardPack.sp.length;i++){
							var card=game.createCard({name:lib.cardPack.sp[i]})
							if(get.subtype(card)==get.subtype(event.equip)) list.push(card);
						};
						for(var i=0;i<lib.cardPack.swd.length;i++){
							var card=game.createCard({name:lib.cardPack.swd[i]})
							if(get.subtype(card)==get.subtype(event.equip)) list.push(card);
						};
						for(var i=0;i<lib.cardPack.gujian.length;i++){
							var card=game.createCard({name:lib.cardPack.gujian[i]})
							if(get.subtype(card)==get.subtype(event.equip)) list.push(card);
						};
						var equip=list.randomGet()
						player.chooseCardButton(list,'请选择目标装备牌').ai=function(button){
							if(button.link==equip) return 1;
						};
						'step 3'
						if(result.bool){
							event.equip1=game.createCard(event.equip);
							game.log(lib.translate[player.name],'将',event.equip,'重铸为',result.links[0]);
							game.broadcastAll(function(card,card1){
								card.init(card1);
							},event.equip,result.links[0]);
						}else{
							event.finish()
						};
						'step 4'
						player.chooseTarget('是否将【'+lib.translate[event.equip1.name]+'】交给一名其他角色？',function(card,player,target){
							return target!=player;
						}).ai=function(target){
							return get.attitude(player,target);
						};
						'step 5'
						if(result.bool){
							player.line(result.targets);
							player.$give(event.equip1,result.targets[0]);
							result.targets[0].gain(event.equip1,player);
						};
					},
				},
			},
			translate:{
				"c_zx1":"条件击杀",
				"c_zx2":"个人diy",
				"ald_ailudi":"艾露迪",
				"ald_yinju1":"现世",
				"ald_yinju":"隐居",
				"ald_yinju_info":"锁定技，游戏的首个回合开始前，你进入隐居状态（隐居状态下轮次数不变），25秒后，你解除隐居状态并选择发展路线",
				"ald_zhiyu":"治愈",
				"ald_zhiyu_info":"出牌阶段限一次，你可以弃置一张手牌并令一名角色回复一点体力",
				"ald_jiushu":"救赎",
				"ald_jiushu_info":"你死亡前，你可以令所有其他角色回复一点体力并摸一张牌，然后你回复体力至2点（使用后删除此技能）",
				"ald_shoulie":"狩猎",
				"ald_shoulie_info":"锁定技，你对非神势力角色造成的伤害+1",
				"_ald_xihun":"吸魂",
				"ald_xihun":"吸魂",
				"ald_xihun_info":"锁定技，当一名角色死亡时，你吸取其灵魂（灵魂可以在回合内吞食，吞食后提升自身属性）",
				"NGNL_xiubi":"休比",
				"NGNL_jinengmofang":"技能模仿",
				"NGNL_jinengmofang_info":"当其他角色使用了目标包含你的技能后，你可以模仿该技能（被模仿的技能只能发动一次）；锁定技，回合结束阶段，你随机获得其他角色的一个锁定技直至你下个回合的回合开始阶段",
				"NGNL_rengemofang":"人格模仿",
				"NGNL_rengemofang_info":"出牌阶段限一次，你可以选择一名未被模仿人格且上回合使用过手牌的其他角色并模仿其人格（当你于出牌阶段使用被模仿人格角色上个出牌阶段使用过的牌时，你摸一张牌）",
				"NGNL_shujulianjie":"数据连接",
				"NGNL_shujulianjie_info":"出牌阶段，你可以弃置X张牌，然后回复一点体力并从技能库中随机获得一个技能直至你下个回合的回合开始阶段（X为你的技能数-1）",
				"FGO_akaliusi":"阿喀琉斯",
				"FGO_jierdelei":"吉尔·德·雷",
				"FGO_shengqizhixia":"圣旗之下",
				"FGO_shengqizhixia_info":"锁定技：当没有装备时，你于任意事件结算后死亡；游戏开始时，你装备一套非扩展装备并将四张【过河拆桥】和一张【顺手牵羊】置于弃牌堆中；你可以装备两套装备",
				"FGO_jijiehousheng":"集结吼声",
				"FGO_jijiehousheng_info":"当你失去装备区内的牌后，你可以定向重铸一张装备区内的牌，若如此做，你可以将定向重铸前的同名装备牌给予一名其他角色",
				"FGO_haisenluobo":"海森·罗伯",
				"FGO_duotianzhimo":"堕天之魔",
				"FGO_duotianzhimo_info":"锁定技：当你受到3次雷电伤害后，你于任意事件结算后死亡；游戏开始时，你获得一张【雷杀】并将三张【雷杀】置于弃牌堆中；当你首次受到雷电伤害后，你摸三张牌，其他角色获得一张【雷杀】，之后受到雷电伤害则终止当前角色的回合并进行一个额外的回合",
				"FGO_chansizhiren":"缠死之人",
				"FGO_chansizhiren_info":"出牌阶段，若你没有受到过雷电伤害，你可以将【闪】当作【杀】使用，以此法使用的【杀】需要两张【闪】抵消；回合结束阶段，若你受到过雷电伤害，你可以重置一张牌",
				"FGO_karong":"喀戎",
				"FGO_shenshoudezhihui":"神授的智慧",
				"FGO_shenshoudezhihui_info":"锁定技：当你在场上存在Xs后，你于任意事件结算后死亡（X为120+总人数*30）；每存在60s（不受存在时间减免影响），所有以时间存在的武将的存在时间-10s，不以时间存在的武将获得随机的减益效果*2",
				"FGO_yongshengdefengxian":"永生的奉献",
				"FGO_yongshengdefengxian_info":"当你的武将牌从正面翻至背面时，你可以令存在时间+30s并令一名其他角色获得潜行状态20s，若如此做则取消翻面",
				"FGO_maxiujilielaite":"玛修·基列莱特",
				"FGO_baiyazhibi":"白亚之壁",
				"FGO_baiyazhibi_info":"锁定技：当你在场上存在10个回合后，若你没有护甲，你于任意事件结算后死亡；游戏开始时，你获得五点护甲，之后每三个回合获得一点护甲；出牌阶段选择卡牌的总时间变为Xs（X为16-护甲数*2）",
				"FGO_lixiangzhicheng":"理想之城",
				"FGO_lixiangzhicheng_info":"出牌阶段限一次，你可以选择一至三名其他角色并给予他们一点护甲，每给予两点护甲，你的存在回合数-1",
				"FGO_qige":"齐格飞",
				"_FGO_support2":"重铸",
				"FGO_longgaolingzhou":"龙告令咒",
				"FGO_longgaolingzhou_info":"锁定技：当你在场上存在Xs后(X为180+总人数*15)，你于任意事件结算后死亡；每当你获得一张牌后，你的存在时间-3s（当你剩余的存在时间小于120s时，该效果+2s）；每当你失去一张牌后，你的存在时间+1.75s",
				"FGO_zhuorelongxi":"灼热龙息",
				"FGO_zhuorelongxi_info":"出牌阶段限一次（若使用技能时存在时间跨过条件时间，限两次），若你的存在时间小于180s，你可以使存在时间+90s并对范围内的一名其他角色造成一点火焰伤害；若你的存在时间不小于180s，你可以展示所有手牌并使存在时间-Xs（X为你的手牌数）",
			},
		};
		if(lib.device||lib.node){
			for(var i in c_zx.character){c_zx.character[i][4].push('ext:扩展ol/'+i+'.jpg');}
		}else{
			for(var i in c_zx.character){c_zx.character[i][4].push('db:extension-扩展ol:'+i+'.jpg');}
		}
		return c_zx;
	});
	lib.config.all.characters.push('c_zx');
	if(!lib.config.characters.contains('c_zx')) lib.config.characters.push('c_zx');
	lib.translate['c_zx_character_config']='杂项';
	lib.config['extension_艾露迪_enable']=false;
	game.saveConfig('extension_艾露迪_enable',false);
	lib.config['extension_FGO_enable']=false;
	game.saveConfig('extension_FGO_enable',false);
};