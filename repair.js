window.func=function(lib,game,ui,get,ai,_status){
			lib.skill.huimin={
				trigger:{player:'phaseEnd'},
				check:function(event,player){
					return game.countPlayer(function(current){
						if(current.countCards('h')<current.hp){
							return get.sgn(get.attitude(player,current));
						}
					})>=0;
				},
				filter:function(event,player){
					return game.countPlayer(function(current){
						return current.countCards('h')<current.hp;
					})>0;
				},
				content:function(){
					'step 0'
					event.list=game.filterPlayer(function(current){
						return current.countCards('h')<current.hp;
					}).sortBySeat();
					player.draw(event.list.length);
					'step 1'
					player.chooseTarget(true,function(card,player,target){
						var list=_status.event.list;
						return list.contains(target);
					},'选择一名角色作为分牌起点').set('ai',function(target){
						var player=_status.event.player;
						var att=get.attitude(player,target);
						if(att<=0) return att;
						var list=_status.event.list;
						var index=list.indexOf(target);
						var prev;
						if(index==0){
							prev=list[list.length-1];
						}
						else{
							prev=list[index-1];
						}
						if(get.attitude(player,prev)<0) return att;
						return 0;
					}).set('list',event.list);
					'step 2'
					var index=event.list.indexOf(result.targets[0]);
					if(index<0) index=0;
					var tmp=event.list.splice(index);
					event.list=tmp.concat(event.list);
					player.line(result.targets,'green');
					player.chooseCard('h','选择要分配的手牌',event.list.length,true);
					'step 3'
					var cards=result.cards;
					player.lose(cards,ui.special);
					event.togain=cards;
					if(result.bool&&cards.length){
						var dialog=ui.create.dialog('惠民',cards,true);
						_status.dieClose.push(dialog);
						dialog.videoId=lib.status.videoId++;
						event.preResult=dialog.videoId;
						game.addVideo('cardDialog',null,['惠民',get.cardsInfo(cards),dialog.videoId]);
						game.broadcast(function(cards,id){
							var dialog=ui.create.dialog('惠民',cards,true);
							_status.dieClose.push(dialog);
							dialog.videoId=id;
						},cards,dialog.videoId);
					}
					else{
						event.finish();
					}
					'step 4'
					game.delay();
					'step 5'
					if(event.list.length&&event.togain.length){
						event.current=event.list.shift();
						var next=event.current.chooseButton(true,function(button){
							return get.value(button.link,_status.event.player);
						});
						next.set('dialog',event.preResult);
						next.set('closeDialog',false);
						next.set('dialogdisplay',true);
						next.set('cardFilter',event.togain.slice(0));
						next.set('filterButton',function(button){
							return _status.event.cardFilter.contains(button.link);
						})
					}
					else{
						for(var i=0;i<ui.dialogs.length;i++){
							if(ui.dialogs[i].videoId==event.preResult){
								var dialog=ui.dialogs[i];
								dialog.close();
								_status.dieClose.remove(dialog);
								break;
							}
						}
						if(event.togain.length){
							for(var i=0;i<dialog.buttons.length;i++){
								event.togain[i].discard();
							}
						}
						game.broadcast(function(id){
							var dialog=get.idDialog(id);
							if(dialog){
								dialog.close();
								_status.dieClose.remove(dialog);
							}
						},event.preResult);
						game.addVideo('cardDialog',null,event.preResult);
						event.finish();
					}
					'step 6'
					var card=result.links[0];
					if(card){
						event.current.gain(card);
						event.current.$gain2(card);
						event.togain.remove(card);
					}
					game.log(event.current,'选择了',card);
					game.delay();
					event.goto(5);
				}
			};
}