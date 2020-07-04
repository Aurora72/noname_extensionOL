window.func=function(lib,game,ui,get,ai,_status){
	lib.element.player.sesx_changell=function(){
		var next=game.createEvent('sesx_changell');
		next.player=this;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='number'){
				next.num=arguments[i];
			};
		};
		var event=_status.event;
		next.source=event.player;
		next.setContent(lib.element.event.sesx_changell);
		return next;
	};
	lib.element.event.sesx_changell=function(){
		event.trigger('sesx_changell');
		if(num==undefined) num=1;
		if(player.storage.sesx_mark==undefined) player.storage.sesx_mark=0;
		player.storage.sesx_mark+=num;
		player.markSkill('sesx_mark');
		player.syncStorage('sesx_mark');
		var str='';
		if(num>0){
			str+='获得了'+num+'点灵力';
		}else{
			str+='失去了'+(-num)+'点灵力';
		};
		if(num!=0) game.log(player,str);
	};
	lib.element.player.sesx_canUse_count=function(num,card){
		var player=this;
		if(num==undefined) num=0;
		return num;
	};
	lib.element.player.sesx_canUse=function(num,card){
		var player=this;
		return player.storage.sesx_mark!=undefined&&player.storage.sesx_mark>=player.sesx_canUse_count(num,card);
	};
	lib.element.player.sesx_change=function(){
		var next=game.createEvent('sesx_change');
		next.player=this;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='number'){
				next.num=arguments[i];
			};
		};
		var event=_status.event;
		next.source=event.player;
		next.setContent(lib.element.event.sesx_change);
		return next;
	};
	lib.element.event.sesx_change=function(){
		event.trigger('sesx_change');
		if(num==2){
			if(player.name2!=undefined){
				if(player.storage[player.name2+'_changed']==false){
					game.log(player,'（'+get.translation(player.name2)+'）转化为兽形态');
					player.popup('形态转化');
					player.storage[player.name2+'_changed']=true;
				}else{
					if(player.storage[player.name2+'_changed']!=undefined){
						game.log(player,'（'+get.translation(player.name2)+'）转化为人形态');
						player.popup('形态转化');
					};
					player.storage[player.name2+'_changed']=false;
				};
			};
		}else{
			if(player.storage[player.name+'_changed']==false){
				game.log(player,'（'+get.translation(player.name)+'）转化为兽形态');
				player.popup('形态转化');
				player.storage[player.name+'_changed']=true;
			}else{
				if(player.storage[player.name+'_changed']!=undefined){
					game.log(player,'（'+get.translation(player.name)+'）转化为人形态');
					player.popup('形态转化');
				};
				player.storage[player.name+'_changed']=false;
			};
			
		};
	};
	lib.kzol_sesx_ll={
		"sesx_子鼠":5,
	};
	game.import('character',function(lib,game,ui,get,ai,_status){
		var sesx={
			name:'sesx',
			connect:true,
			character:{
				"sesx_子鼠":["female","kzol_sesx",3,["sesx_show","sesx_挑衅","sesx_机智欺诈","sesx_过街喊打","sesx_地下交易","sesx_古灵精怪","sesx_拾荒"],[]],
			},
			skill:{
				"sesx_show":{
					init:function(player){
						if(player.showCharacter) player.showCharacter(2);
					},
				},
				"sesx_mark":{
					marktext:"灵",
					intro:{
						content:function(storage){
							return '当前拥有'+storage+'点灵力';
						},
					},
				},
				"_sesx_gameStart":{
					trigger:{
						global:"gameStart",
						player:"phaseAfter",
					},
					forced:true,
					popup:false,
					priority:Infinity,
					filter:function(event,player){
						return lib.kzol_sesx_ll[player.name]!=undefined||
						(player.name2!=undefined&&lib.kzol_sesx_ll[player.name2]!=undefined);
					},
					content:function(){
						var num=0;
						if(lib.kzol_sesx_ll[player.name]!=undefined) num+=lib.kzol_sesx_ll[player.name];
						if(lib.kzol_sesx_ll[player.name]!=undefined&&player.name2!=undefined&&lib.kzol_sesx_ll[player.name2]!=undefined) num+=lib.kzol_sesx_ll[player.name2];
						if(num-player.storage.sesx_mark>0){
							num=num-player.storage.sesx_mark;
							player.sesx_changell(num);
						}else if(player.storage.sesx_mark==undefined){
							player.sesx_changell(num);
						};
					},
				},
				"_sesx_change":{
					trigger:{
						global:"gameStart",
					},
					forced:true,
					popup:false,
					priority:Infinity,
					filter:function(event,player){
						return lib.kzol_sesx_ll[player.name]!=undefined||
						(player.name2!=undefined&&lib.kzol_sesx_ll[player.name2]!=undefined);
					},
					content:function(){
						if(lib.kzol_sesx_ll[player.name]!=undefined) player.sesx_change();
						if(player.name2!=undefined&&lib.kzol_sesx_ll[player.name2]!=undefined) player.sesx_change(2);
					},
				},
				"_sesx_change1":{
					trigger:{
						player:"phaseBefore",
					},
					direct:true,
					priority:Infinity,
					filter:function(event,player){
						return lib.kzol_sesx_ll[player.name]!=undefined||
						(player.name2!=undefined&&lib.kzol_sesx_ll[player.name2]!=undefined);
					},
					content:function(){
						'step 0'
						if(lib.kzol_sesx_ll[player.name]==undefined) event.goto(3);
						'step 1'
						var list=['是','否'];
						player.chooseControl(list).set('prompt','是否转化'+get.translation(player.name)+'的形态').set('ai',function(){
							return list.randomGet();
						});
						'step 2'
						if(result.control=='是') player.sesx_change();
						if(player.name2==undefined||lib.kzol_sesx_ll[player.name2]==undefined) event.finish();
						'step 3'
						var list=['是','否'];
						player.chooseControl(list).set('prompt','是否转化'+get.translation(player.name2)+'的形态').set('ai',function(){
							return list.randomGet();
						});
						'step 4'
						if(result.control=='是') player.sesx_change(2);
					},
				},
				"_sesx_jiu":{
					mod:{
						cardUsable:function (card,player,num){
							if(card.name=='jiu'&&
							lib.kzol_sesx_ll[player.name]!=undefined||
							(player.name2!=undefined&&lib.kzol_sesx_ll[player.name2]!=undefined)) return Infinity;
						},
					},
				},
				"_sesx_useJiu":{
					trigger:{
						player:"jiuBegin",
					},
					direct:true,
					priority:Infinity,
					filter:function(event,player){
						return lib.kzol_sesx_ll[player.name]!=undefined||
						(player.name2!=undefined&&lib.kzol_sesx_ll[player.name2]!=undefined);
					},
					content:function(){
						'step 0'
						var list=['是','否'];
						player.chooseControl(list).set('prompt','是否使用该【酒】补充2点灵力').set('ai',function(){
							if(player.hp<0) return '否';
							if(player.storage.sesx_mark==undefined) return '否';
							var num=0;
							if(lib.kzol_sesx_ll[player.name]!=undefined) num+=lib.kzol_sesx_ll[player.name];
							if(lib.kzol_sesx_ll[player.name]!=undefined&&player.name2!=undefined&&lib.kzol_sesx_ll[player.name2]!=undefined) num+=lib.kzol_sesx_ll[player.name2];
							if(num-player.storage.sesx_mark>=2) return '是';
							return '否';
						});
						'step 1'
						if(result.control=='是'){
							trigger.cancel();
							player.popup('补充灵力');
							var num=0;
							if(lib.kzol_sesx_ll[player.name]!=undefined) num+=lib.kzol_sesx_ll[player.name];
							if(lib.kzol_sesx_ll[player.name]!=undefined&&player.name2!=undefined&&lib.kzol_sesx_ll[player.name2]!=undefined) num+=lib.kzol_sesx_ll[player.name2];
							if(player.storage.sesx_mark==undefined||num-player.storage.sesx_mark>=2){
								player.sesx_changell(2);
							}else{
								num=num-player.storage.sesx_mark;
								player.sesx_changell(num);
							};
						};
					},
				},
				"sesx_挑衅":{
					nobracket:true,
					enable:'phaseUse',
					usable:1,
					line:true,
					filter:function(event,player){
						if(player.storage['sesx_子鼠_changed']==true) return false;
						return player.sesx_canUse(1);
					},
					filterTarget:function(card,player,target){
						return target!=player&&target.canUse('sha',player);
					},
					content:function(){
						'step 0'
						player.sesx_changell(-player.sesx_canUse_count(1));
						target.chooseToUse('是否对'+get.translation(player.name)+'使用一张【杀】？',{name:'sha'},player);
						'step 1'
						if(!result.bool){
							player.discardPlayerCard('hej',target);
						};
					},
					ai:{
						expose:0.3,
						order:19,
						result:{
							target:function(player,target){
								if(get.attitude(player,target)>0&&target.countCards('j')>0) return 3;
								if(get.attitude(player,target)<0&&
								(target.countCards('h','sha')==0||
								(target.countCards('h','sha')>0&&player.countCards('h','shan')>=2))) return -3;
								return 0;
							},
						},
					},
				},
				"sesx_机智欺诈":{
					nobracket:true,
					trigger:{
						player:'phaseBegin',
					},
					check:function(event,player){
						return player.countCards('j')>0;
					},
					filter:function(event,player){
						if(player.storage['sesx_子鼠_changed']==true) return false;
						return player.sesx_canUse(3);
					},
					content:function(){
						'step 0'
						player.sesx_changell(-player.sesx_canUse_count(3));
						event.num=Math.min(5,game.countPlayer());
						event.cards=get.cards(event.num);
						event.chosen=[];
						event.num1=0;
						event.num2=0;
						event.bottom=-1;
						'step 1'
						var js=player.getCards('j');
						var pos;
						var choice=-1;
						var getval=function(card,pos){
							if(js[pos]){
								return (get.judge(js[pos]))(card);
							}
							else if(event.triggername=='phaseJieshuBegin'&&get.attitude(player,player.getNext())<=0){
								return 11.5-get.value(card,player);
							}
							else{
								return get.value(card,player);
							}
						};
						event.discard=false;
						var minval=6;
						for(pos=0;pos<event.cards.length;pos++){
							var max=getval(event.cards[pos],pos);
							for(var j=pos+1;j<event.cards.length;j++){
								var current=getval(event.cards[j],pos);
								if(current>max){
									choice=j;
									max=current;
								}
							}
							if(event.bottom<0){
								if(!js[pos]){
									if(max<minval){
										event.bottom=pos;
									}
								}
								else if(max<0){
									event.bottom=pos;
								}
							}
							if(event.bottom>=0&&event.bottom<=pos){
								choice=pos;
								event.discard=true;break;
							}
							if(choice!=-1){
								break;
							}
						}
						player.chooseCardButton('选择要移动的牌',event.cards).set('filterButton',function(button){
							return !_status.event.chosen.contains(button.link);
						}).set('chosen',event.chosen).set('ai',function(button){
							return button.link==_status.event.choice?1:0;
						}).set('choice',event.cards[choice]);
						event.pos=pos;
						'step 2'
						if(result.bool){
							var card=result.links[0];
							var index=event.cards.indexOf(card);
							event.card=card;
							event.chosen.push(card);
							event.cards.remove(event.card);
							var controlai=event.pos||0;
							if(event.discard){
								controlai=event.cards.length+1;
							}
							var buttons=event.cards.slice(0);
							player.chooseControl(function(){
								return _status.event.controlai;
							}).set('controlai',controlai).set('sortcard',buttons).set('tosort',card);
						}
						else{
							event.goto(4);
						}
						'step 3'
						if(typeof result.index=='number'){
							if(result.index>event.cards.length){
								ui.cardPile.appendChild(event.card);
								event.num2++;
							}
							else{
								event.cards.splice(result.index,0,event.card);
							}
							event.num--;
							if(event.num>0){
								event.goto(1);
							}
						}
						'step 4'
						while(event.cards.length){
							ui.cardPile.insertBefore(event.cards.pop(),ui.cardPile.firstChild);
							event.num1++;
						}
						player.popup(get.cnNumber(event.num1)+'上'+get.cnNumber(event.num2)+'下');
						game.log(player,'将','#y'+get.cnNumber(event.num1)+'张牌','置于牌堆顶，','#y'+get.cnNumber(event.num2)+'张牌','置于牌堆底');
					},
				},
				"sesx_过街喊打":{
					nobracket:true,
					trigger:{
						player:"sesx_changellAfter",
					},
					forced:true,
					filter:function(event,player){
						if(player.storage.sesx_mark==undefined) return false;
						if(player.storage['sesx_子鼠_changed']==true) return false;
						return player.storage.sesx_mark<=2;
					},
					content:function(){
						if(player.name=='sesx_子鼠'){
							player.sesx_change();
						};
						if(player.name2=='sesx_子鼠'){
							player.sesx_change(2);
						};
					},
				},
				"sesx_地下交易":{
					nobracket:true,
					trigger:{
						player:"phaseDrawAfter",
					},
					direct:true,
					filter:function(event,player){
						if(player.storage['sesx_子鼠_changed']==true) return false;
						return player.sesx_canUse(2);
					},
					content:function(){
						'step 0'
						player.chooseTarget(get.prompt('sesx_地下交易'),function(card,player,target){
							return player!=target;
						}).set('ai',function(target){
							//if(get.attitude(player,target)>0&&player.countCards('h')-2>target.countCards('h')) return 1;
							if(get.attitude(player,target)<0&&player.countCards('h')+2<target.countCards('h')) return 1;
							return -1;
						});
						'step 1'
						if(result.bool){
							player.sesx_changell(-player.sesx_canUse_count(2));
							player.line(result.targets);
							player.logSkill('sesx_地下交易');
							event.target=result.targets[0];
							if(event.target.get('h').length>0){
								event.target.$give(event.target.get('h').length,player);
								player.gain(event.target.get('h'));
								game.delay();
							};
						}else{
							event.finish();
						};
						if(Math.floor(player.countCards()/2)==0) event.finish();
						'step 2'
						player.chooseCard('h',Math.floor(player.countCards()/2),true).set('ai',function(card){
							return 5-get.value(card);
						});
						'step 3'
						if(result.bool){
							player.$give(result.cards.length,event.target);
							event.target.gain(result.cards);
							game.delay();
						};
					},
				},
				"sesx_古灵精怪":{
					nobracket:true,
					enable:'phaseUse',
					prompt:'请选择一张手牌',
					filter:function(event,player){
						if(player.storage['sesx_子鼠_changed']!=true) return false;
						if(game.countPlayer(function(current){
							return current.countCards('j')>0;
						})==0) return false;
						return player.sesx_canUse(3);
					},
					filterCard:function(card){
						return true;
					},
					check:function(card){
						return 6-get.value(card);
					},
					content:function(){
						'step 0'
						player.sesx_changell(-player.sesx_canUse_count(3));
						var next=player.chooseTarget(2,function(card,player,target){
							if(ui.selected.targets.length){
								var from=ui.selected.targets[0];
								var js=from.getCards('j');
								for(var i=0;i<js.length;i++){
									if(!target.storage._disableJudge&&!target.hasJudge(js[i])) return true;
								};
								return false;
							}else{
								return target.countCards('j')>0;
							};
						});
						next.set('ai',function(target){
							var player=_status.event.player;
							var att=get.attitude(player,target);
							if(ui.selected.targets.length==0){
								if(att>0){
									if(target.countCards('j')) return 14;
									if(target.countCards('e',function(card){
										return get.value(card,target)<0&&game.hasPlayer(function(current){
											return current!=target&&get.attitude(player,current)<0&&current.isEmpty(get.subtype(card))
										});
									})>0) return 9;
								};
								return 0;
							};
							return -att*get.attitude(player,ui.selected.targets[0]);
						});
						next.set('multitarget',true);
						next.set('targetprompt',_status.event.targetprompt||['被移走','移动目标']);
						next.set('prompt','移动场上判定区内的一张牌');
						'step 1'
						if(result.bool){
							player.line2(result.targets,'green');
							event.targets=result.targets;
						}
						else{
							event.finish();
						}
						'step 2'
						game.delay();
						'step 3'
						if(targets.length==2){
							player.choosePlayerCard('j',true,function(button){
								var player=_status.event.player;
								var targets0=_status.event.targets0;
								var targets1=_status.event.targets1;
								if(get.attitude(player,targets0)>get.attitude(player,targets1)){
									return (get.position(button.link)=='j'||get.value(button.link)<0)?10:0;
								}else{
									if(get.position(button.link)=='j') return -10;
									return get.equipValue(button.link);
								};
							},targets[0]).set('targets0',targets[0]).set('targets1',targets[1]).set('filterButton',function(button){
								var targets1=_status.event.targets1;
								return !targets1.storage._disableJudge&&!targets1.hasJudge(button.link);
							});
						}else{
							event.finish();
						};
						'step 4'
						if(result.bool&&result.links.length){
							var link=result.links[0];
							if(link.viewAs){
								event.targets[1].addJudge({name:link.viewAs},[link]);
							}else{
								event.targets[1].addJudge(link);
							};
							event.targets[0].$give(link,event.targets[1])
							game.delay();
							event.result={bool:true};
						};
					},
					ai:{
						expose:0.5,
						order:3,
						result:{
							player:function(player){
								if(game.countPlayer(function(current){
									return current.countCards('j')>0&&get.attitude(player,current)>0;
								})>0) return 1;
							},
						},
					},
				},
				"sesx_拾荒":{
					nobracket:true,
					trigger:{
						global:'phaseDiscardAfter'
					},
					filter:function(event,player){
						if(player.storage['sesx_子鼠_changed']!=true) return false;
						return event.cards&&event.cards.length>0&&player.sesx_canUse(2);
					},
					check:function(event,player){
						return get.attitude(player,event.player)>0&&event.cards&&event.cards.length>0&&event.cards[0].name!='du';
					},
					content:function(){
						"step 0"
						player.sesx_changell(-player.sesx_canUse_count(2));
						if(trigger.player==player){
							player.chooseCardButton(trigger.cards,'请选择需要获得的牌').set('ai',ai.get.buttonValue);
						}else{
							event.goto(2);
						};
						"step 1"
						if(result.bool){
							player.gain(result.links[0],'gain2','log');
						};
						event.finish();
						"step 2"
						player.chooseCardButton(trigger.cards,'请选择需要'+get.translation(trigger.player.name)+'获得的牌').set('ai',ai.get.buttonValue);
						"step 3"
						if(result.bool){
							event.list=[];
							for(var i=0;i<trigger.cards.length;i++){
								event.list.push(trigger.cards[i]);
							};
							trigger.player.gain(result.links[0],'gain2','log');
							event.list.remove(result.links[0]);
						}else{
							event.finish();
						};
						if(event.list.length==0) event.finish();
						"step 4"
						player.chooseCardButton(event.list,'请选择需要获得的牌').set('ai',ai.get.buttonValue);
						"step 5"
						if(result.bool){
							player.gain(result.links[0],'gain2','log');
						};
					},
				},
			},
			translate:{
				"sesx_子鼠":"子鼠",
				"sesx_mark":"灵力",
				"sesx_挑衅":"挑衅",
				"sesx_挑衅_info":"消耗:1灵力<br>条件:子鼠·人<br>出牌阶段限一次，你可以指定一名可以对你使用【杀】的其他角色，该角色需对你使用一张【杀】，若该角色不如此做，你弃掉其一张牌",
				"sesx_机智欺诈":"机智欺诈",
				"sesx_机智欺诈_info":"消耗:3灵力<br>条件:子鼠·人<br>回合开始阶段，你可以观看牌堆顶的x张牌（x为存活角色的数量且最多为5），将其中任意数量的牌以任意顺序置于牌堆顶，其余则以任意顺序置于牌堆底",
				"sesx_过街喊打":"过街喊打",
				"sesx_过街喊打_info":"消耗:0灵力<br>条件:子鼠·人<br>锁定技，当你灵力值小于或等于2时，必须转化为兽形态",
				"sesx_地下交易":"地下交易",
				"sesx_地下交易_info":"消耗:2灵力<br>条件:子鼠·人<br>摸牌阶段结束后，你可以获得一名其他角色所有手牌，然后你须将自己手牌的一半（向下取整）交还给该角色",
				"sesx_古灵精怪":"古灵精怪",
				"sesx_古灵精怪_info":"消耗:3灵力<br>条件:子鼠·兽<br>出牌阶段，你可以弃一张手牌，然后移动场上判定区内的一张牌",
				"sesx_拾荒":"拾荒",
				"sesx_拾荒_info":"消耗:2灵力<br>条件:子鼠·兽<br>弃牌阶段结束时，你可以选择其中1张牌回到你的手中；其他角色的弃牌阶段结束时，你可将此阶段中弃掉的一张牌从弃牌堆返回该角色手牌，若如此做，你可以获得弃牌堆里其此阶段中弃掉的其中1张牌",
			},
		};
		if(lib.device||lib.node){
			for(var i in sesx.character){sesx.character[i][4].push('ext:扩展ol/'+i+'.jpg');}
		}else{
			for(var i in sesx.character){sesx.character[i][4].push('db:extension-扩展ol:'+i+'.jpg');}
		}
		return sesx;
	});
	lib.config.all.characters.push('sesx');
	if(!lib.config.characters.contains('sesx')) lib.config.characters.push('sesx');
	lib.translate['sesx_character_config']='十二生肖';
	lib.group.push('kzol_sesx');
	lib.translate['kzol_sesx']='生肖';
};