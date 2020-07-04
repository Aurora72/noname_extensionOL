window.func=function(lib,game,ui,get,ai,_status){
	if(lib.brawl){
		lib.brawl.lswz={
			name:'乱世王者',
			mode:'identity',
			intro:[
				'游戏人数：八人',
				'身份：一主两忠五反，明身份牌',
				'游戏结束条件：当场上没有反贼时，游戏结束，主忠方为赢家',
				'增加身份技:<ul><li>招降（主）：<br>&nbsp&nbsp身份技，准备阶段开始时，若忠臣数少于二，可以对所有反贼发动，你可以在响应的人中选一个作为忠臣'+
				'<li>承立（忠）：<br>&nbsp&nbsp身份技，出牌阶段限一次，若场上没有主公，你可以成为主公，对所有其他角色发动，每有一人响应，你摸一张牌，然后你在响应的人中至多选择两个作为忠臣，其余存活角色身份改为反贼;当你成为主公时，增加一点体力上限'+
				'<li>称王（反）：<br>&nbsp&nbsp身份技，出牌阶段限一次，若场上没有主公，你可以成为主公，对所有其他角色发动，每有一人响应，你摸一张牌，然后你在响应的人中至多选择两个作为忠臣，其余角色身份改为反贼（包括死亡角色）;当你成为主公时，增加一点体力上限'+
				'</ul>',
				'死亡奖励：杀死主公摸3张牌，忠臣2张牌，反贼1张牌',
			],
			showcase:function(init){
				this.parentNode.style['overflow-x']='hidden';
				this.parentNode.style['overflow-y']='scroll';
				this.parentNode.childNodes[0].style.position='fixed';
			},
			content:{
				chooseCharacterBefore:function(){
					game.checkResult=function(){
						if(game.countPlayer(function(current){
							return current.identity=='fan';
						})==0){
							if(game.me.identity=='fan'){
								game.over(false);
							}else{
								game.over(true);
							};
						};
					};
				},
				gameStart:function(){
					if(ui.playerids) ui.playerids.style.display='none';
					game.showIdentity();
					var func=function(source){
						if(this.identity=='zhu'&&source) source.draw(3);
						if(this.identity=='zhong'&&source) source.draw(2);
						if(this.identity=='fan'&&source) source.draw(1);
					};
					lib.element.player.dieAfter2=func;
					for(var i=0;i<game.players.length;i++){
						game.players[i].dieAfter2=func;
					};
				},
			},
			init:function(){
				game.identityVideoName='乱世王者';
				lib.config.mode_config.identity.player_number=8;
				lib.config.mode_config.identity.special_identity=false;
				lib.config.mode_config.identity.identity_mode='normal';
				lib.config.mode_config.identity.identity[6]=['zhu','zhong','zhong','fan','fan','fan','fan','fan'];
				lib.skill['_lswz_招降']={
					trigger:{
						player:"phaseBegin",
					},
					filter:function (event,player){
						return game.countPlayer(function(current){
							return current.identity=='zhong';
						})<2&&player.identity=='zhu';
					},
					content:function(){
						'step 0'
						event.list=[];
						event.list1=[];
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.identity=='fan'){
								event.list.push(pl);
							};
						};
						'step 1'
						var pl=event.list[0];
						var list=['响应','不响应'];
						pl.chooseControl(list).set('ai',function(){
							return list.randomGet();
						}).set('prompt','主公发动了【招降】，是否响应？');
						'step 2'
						var pl=event.list[0];
						if(result.control=='响应'){
							pl.popup('响应');
							event.list1.push(pl);
						}else{
							pl.popup('不响应');
						};
						event.list.remove(pl);
						if(event.list.length>0) event.goto(1);
						'step 3'
						game.delay();
						if(event.list1.length>0){
							player.chooseTarget('请选择一个响应【招降】的角色成为忠臣',1,function(card,player,target){
								return event.list1.contains(target);
							}).ai=function(target){
								if(target==event.list1[event.list1.length-1]) return 1;
								return [-1,1].randomGet();
							};
						}else{
							event.finish();
						};
						'step 4'
						if(result.bool){
							var target=result.targets[0];
							player.line(target);
							target.identity='zhong';
							target.setIdentity();
							game.log(target,'被',player,'招降了');
						};
						'step 5'
						game.checkResult();
					},
				};
				lib.translate['_lswz_招降']='招降';
				lib.translate['_lswz_招降_info']='身份技，准备阶段开始时，若忠臣数少于二，可以对所有反贼发动，你可以在响应的人中选一个作为忠臣';
				lib.skill['_lswz_承立']={
					enable:"phaseUse",
					usable:1,
					filter:function (event,player){
						return game.countPlayer(function(current){
							return current.identity=='zhu';
						})==0&&player.identity=='zhong';
					},
					content:function(){
						'step 0'
						event.list=[];
						event.list1=[];
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl!=player){
								event.list.push(pl);
							};
						};
						player.line(event.list);
						player.identity='zhu';
						player.setIdentity();
						player.gainMaxHp();
						game.log(player,'成为主公');
						if(event.list.length==0){
							if(player==game.me){
								game.over(true);
							}else{
								game.over(false);
							};
							event.finish();
						};
						'step 1'
						var pl=event.list[0];
						var list=['响应','不响应'];
						pl.chooseControl(list).set('ai',function(){
							return list.randomGet();
						}).set('prompt','主公发动了【招降】，是否响应？');
						'step 2'
						var pl=event.list[0];
						if(result.control=='响应'){
							pl.popup('响应');
							event.list1.push(pl);
						}else{
							pl.popup('不响应');
						};
						event.list.remove(pl);
						if(event.list.length>0) event.goto(1);
						'step 3'
						game.delay();
						if(event.list1.length>0){
							var num=event.list1.length;
							if(num>2) num=2;
							player.chooseTarget('请选择一个响应【招降】的角色成为忠臣',[1,num],function(card,player,target){
								return event.list1.contains(target);
							}).ai=function(target){
								if(target==event.list1[event.list1.length-1]) return 1;
								return [-1,1].randomGet();
							};
						}else{
							event.finish();
						};
						'step 4'
						if(result.bool){
							player.draw(event.list1.length);
							for(var i=0;i<result.targets.length;i++){
								var target=result.targets[i];
								player.line(target);
								target.identity='zhong';
								target.setIdentity();
								game.log(target,'成为忠臣');
							};
							for(var i=0;i<game.players.length;i++){
								var pl=game.players[i];
								if(pl!=player&&!event.list1.contains(pl)&&!result.targets.contains(pl)){
									pl.identity='fan';
									pl.setIdentity();
									game.log(pl,'成为反贼');
								};
							};
						};
						'step 5'
						game.checkResult();
					},
					ai:{
						order:99,
						result:{
							player:1,
						},
					},
				};
				lib.translate['_lswz_承立']='承立';
				lib.translate['_lswz_承立_info']='身份技，出牌阶段限一次，若场上没有主公，你可以成为主公，对所有其他角色发动，每有一人响应，你摸一张牌，然后你在响应的人中至多选择两个作为忠臣，其余存活角色身份改为反贼;当你成为主公时，增加一点体力上限';
				lib.skill['_lswz_称王']={
					enable:"phaseUse",
					usable:1,
					filter:function (event,player){
						return game.countPlayer(function(current){
							return current.identity=='zhu';
						})==0&&player.identity=='fan';
					},
					content:function(){
						'step 0'
						event.list=[];
						event.list1=[];
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl!=player){
								event.list.push(pl);
							};
						};
						player.line(event.list);
						player.identity='zhu';
						player.setIdentity();
						player.gainMaxHp();
						game.log(player,'成为主公');
						if(event.list.length==0){
							if(player==game.me){
								game.over(true);
							}else{
								game.over(false);
							};
							event.finish();
						};
						'step 1'
						var pl=event.list[0];
						var list=['响应','不响应'];
						pl.chooseControl(list).set('ai',function(){
							return list.randomGet();
						}).set('prompt','主公发动了【招降】，是否响应？');
						'step 2'
						var pl=event.list[0];
						if(result.control=='响应'){
							pl.popup('响应');
							event.list1.push(pl);
						}else{
							pl.popup('不响应');
						};
						event.list.remove(pl);
						if(event.list.length>0) event.goto(1);
						'step 3'
						game.delay();
						if(event.list1.length>0){
							var num=event.list1.length;
							if(num>2) num=2;
							player.chooseTarget('请选择一个响应【招降】的角色成为忠臣',[1,num],function(card,player,target){
								return event.list1.contains(target);
							}).ai=function(target){
								if(target==event.list1[event.list1.length-1]) return 1;
								return [-1,1].randomGet();
							};
						}else{
							event.finish();
						};
						'step 4'
						if(result.bool){
							player.draw(event.list1.length);
							for(var i=0;i<result.targets.length;i++){
								var target=result.targets[i];
								player.line(target);
								target.identity='zhong';
								target.setIdentity();
								game.log(target,'成为忠臣');
							};
							var list=game.players.concat(game.dead);
							for(var i=0;i<list.length;i++){
								var pl=list[i];
								if(pl!=player&&!event.list1.contains(pl)&&!result.targets.contains(pl)){
									pl.identity='fan';
									pl.setIdentity();
									game.log(pl,'成为反贼');
									if(game.dead.contains(pl)){
										pl.node.dieidentity.innerHTML='反贼';
									};
								};
							};
						};
						'step 5'
						game.checkResult();
					},
					ai:{
						order:99,
						result:{
							player:1,
						},
					},
				};
				lib.translate['_lswz_称王']='称王';
				lib.translate['_lswz_称王_info']='身份技，出牌阶段限一次，若场上没有主公，你可以成为主公，对所有其他角色发动，每有一人响应，你摸一张牌，然后你在响应的人中至多选择两个作为忠臣，其余角色身份改为反贼（包括死亡角色）;当你成为主公时，增加一点体力上限';
			},
		};
	};
}