window.func = function (lib, game, ui, get, ai, _status) {
	if(lib.config.尸魂==undefined) game.saveConfig('尸魂',0);
	lib.extensionMenu.extension_扩展ol.boss_title={
		"name":"<b><p align=center><span style=\"font-size:18px\">----BOSS（挑战模式）----</span></b>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol.boss_enable={
		"name":"<span style=\"font-size:13px;\">非专属模式启用扩展ol-BOSS包</span>",
		"init":false,
		"intro":"开启后，非专属模式启用扩展ol-BOSS包"
	};
	if(lib.config['extension_扩展ol_boss_enable']!=true&&lib.config.mode!='boss') return ;
	lib.group.push('nyhzrlong');
	lib.translate.nyhzrlong = '<span style="color:#FF7E15">龙</span>';
	if(lib.boss!=undefined){
		//var boss1='mnyhzr灭世魔星BOSS';
		if(lib.boss['mnyhzr灭世魔星BOSS']==undefined) lib.boss['mnyhzr灭世魔星BOSS']={};
		lib.boss['mnyhzr灭世魔星BOSS'].control=function(type,control){
			if(type=='cancel'){
				if(!control.classList.contains('glow')) return;
				game.uncheck();
				game.check();
			}else{
				var control=ui.create.control('尸魂换水晶',function(){
					if(lib.config.尸魂>0){
						var num=lib.config.尸魂;
						if(confirm('是否用'+num+'个尸魂换取'+(num*10)+'水晶？')){
							game.say1('失去了所有尸魂');
							game.gainItem('shuijing',lib.config.尸魂*10);
							game.saveConfig('尸魂',0);
						};
					}else{
						game.say1('尸魂不足');
					};
				});
				return control;
			};
		};
		if(lib.boss['ly_junshenbao_sociatyBeast_qiuniu']==undefined) lib.boss['ly_junshenbao_sociatyBeast_qiuniu']={
			chongzheng:0,
			loopFirst:function(){
				return game.boss.nextSeat.nextSeat;
			},
			controlid:'sociatyBeast',
			control:function(type,control){
				if(type=='cancel'){
					if(!control.classList.contains('glow')) return;
					_status.event.filterButton=function(){
						return true;
					};
					var dialog=control.dialog;
					dialog.content.removeChild(control.backup1);
					dialog.buttons.removeArray(control.backup2);
					game.uncheck();
					game.check();
				}else{
					var control=ui.create.control('携带神兽战斗',function(){
						if(ui.cheat2&&ui.cheat2.dialog==_status.event.dialog) return;
						var dialog=_status.event.dialog;
						this.dialog=dialog;
						if(this.classList.contains('glow')){
							_status.event.filterButton=function(){
								return true;
							};
							this.backup1.remove();
							dialog.buttons.removeArray(this.backup2);
						}else{
							var control1=this;
							_status.event.filterButton=function(button){
								if(ui.selected.buttons.length){
									var bool=true;
									for(var i=0;i<ui.selected.buttons.length;i++){
										if(control1.backup2.contains(ui.selected.buttons[i])) bool=false;
									};
									if(bool==false){
										if(control1.backup2.contains(button)) return false;
									};
								};
								if(!ui.selected.buttons.length||ui.selected.buttons.length==0||ui.selected.buttons.length==2){
									if(control1.backup2.contains(button)) return false;
								};
								if(ui.selected.buttons.length>0&&ui.selected.buttons[0]){
									if(control1.backup2.contains(ui.selected.buttons[0])) return false;
								};
								return true;
							};
							var links=[];
							for(var i=0;i<dialog.buttons.length;i++){
								links.push(dialog.buttons[i].link);
							};
							for(var i=0;i<this.backup2.length;i++){
								if(links.contains(this.backup2[i].link)){
									this.backup2[i].style.display='none';
								}else{
									this.backup2[i].style.display='';
								};
							};
							dialog.content.insertBefore(this.backup1,dialog.buttons[0].parentNode);
							dialog.buttons.addArray(this.backup2);
						};
						this.classList.toggle('glow');
						game.uncheck();
						game.check();
					});
					control.backup1=ui.create.div('.buttons','挑战方携带神兽战斗时，若挑战方神兽阵亡，游戏结束<br>携带的神兽只能在第二位<br><br>');
					control.backup2=ui.create.buttons(['ly_junshenbao_sociatyBeast_qiuniu','ly_junshenbao_sociatyBeast_yazi','ly_junshenbao_sociatyBeast_suanni','ly_junshenbao_sociatyBeast_pulao','ly_junshenbao_sociatyBeast_fuxi','ly_junshenbao_sociatyBeast_chiwen','ly_junshenbao_sociatyBeast_chaofeng','ly_junshenbao_sociatyBeast_baxia','ly_junshenbao_sociatyBeast_bian'],'character',control.backup1);
					return control;
				};
			},
			init:function(){
				lib.inpile.remove('muniu');
				lib.skill['ly_junshenbao_sociatyBeast_finish']={
					trigger: {
						player:"dieBegin",
					},
					popup:false,
					forced:true,
					priority:-Infinity,
					filter:function(event,player){
						console.log(player.side,player.group)
						return player.side==false&&player.group=='ly_junshenbao_sociatyBeast';
					},
					content: function () {
						if(game.me.side==true){
							game.over(true);
						}else{
							game.over(false);
						};
					},
				};
				lib.skill['environment']={
					trigger: {
						global: "roundStart",
					},
					popup: false,
					forced: true,
					unique: true,
					content: function () {
						"step 0"
						player.$skill('环境变换','epic','thunder',false);
						var list = [];
						list.push("land");
						list.push("sea");
						list.push("sky");
						game.countPlayer(function (current) {
							current.removeSkill(list);
						});
						var num = [1, 2, 3].randomGet();
						if (num == 1) event.goto(1);
						if (num == 2) event.goto(2);
						if (num == 3) event.goto(3);
						"step 1"
						game.countPlayer(function (current) {
							current.addSkill('land');
							event.finish();
						});
						game.log('环境变换为陆地');
						"step 2"
						game.countPlayer(function (current) {
							current.addSkill('sea');
							event.finish();
						});
						game.log('环境变换为海洋');
						"step 3"
						game.countPlayer(function (current) {
							current.addSkill('sky');
							event.finish();
						});
						game.log('环境变换为天空');
					},
					global:"ly_junshenbao_sociatyBeast_finish",
				};
				var next=game.createEvent('chooseCharacter',false);
				next.showConfig=true;
				next.setContent(function(){
					"step 0"
					var num=20;
					event.list=[];
					for(var i in lib.character){
						if(lib.filter.characterDisabled(i)) continue;
						if(lib.character[i][4]==undefined) continue;
						if(lib.character[i][4]!=undefined&&lib.character[i][4].contains('forbidai')) continue;
						if(lib.character[i][4]!=undefined&&lib.character[i][4].contains('boss')) continue;
						if(lib.character[i][4]!=undefined&&lib.character[i][4].contains('bossallowed')) continue;
						if(lib.character[i][4]!=undefined&&lib.character[i][4].contains('hiddenboss')) continue;
						if(lib.character[i][4]!=undefined&&lib.character[i][4].contains('chessboss')) continue;
						event.list.push(i);
					};
					var list=event.list.randomGets(num);
					var dialog=ui.create.dialog('请选择BOSS方随从','hidden',[list,'character']);
					dialog.setCaption('请选择BOSS方随从');
					game.me.chooseButton(dialog,[0,2],true).set('onfree',true);
					if(lib.config.mode_config.boss.change_choice==true){
						ui.create.cheat=function(){
							_status.createControl=ui.cheat2;
							ui.cheat=ui.create.control('更换',function(){
								if(ui.cheat2&&ui.cheat2.dialog==_status.event.dialog) return;
								var buttons=ui.create.div('.buttons');
								var node=_status.event.dialog.buttons[0].parentNode;
								list=event.list.randomGets(num);
								_status.event.dialog.buttons=ui.create.buttons(list,'character',buttons);
								_status.event.dialog.content.insertBefore(buttons,node);
								buttons.animate('start');
								node.remove();
								game.uncheck();
								game.check();
							});
							delete _status.createControl;
						};
						ui.create.cheat();
					};
					if(lib.config.mode_config.boss.free_choose==true){
						event.dialogxx=ui.create.characterDialog('heightset');
						ui.create.cheat2=function(){
							ui.cheat2=ui.create.control('自由选将',function(){
								if(this.dialog==_status.event.dialog){
									this.dialog.close();
									_status.event.dialog=this.backup;
									this.backup.open();
									delete this.backup;
									game.uncheck();
									game.check();
								}
								else{
									this.backup=_status.event.dialog;
									_status.event.dialog.close();
									_status.event.dialog=_status.event.parent.dialogxx;
									this.dialog=_status.event.dialog;
									this.dialog.open();
									game.uncheck();
									game.check();
								}
							});
						};
						ui.create.cheat2();
					};
					"step 1"
					if(ui.cheat){
						ui.cheat.close();
						delete ui.cheat;
					};
					if(ui.cheat2){
						ui.cheat2.close();
						delete ui.cheat2;
					};
					if(game.me!=game.boss) game.boss.dataset.position=6;
					var func=function(pos,name){
						var player=ui.create.player();
						player.getId();
						player.init(name);
						if(game.boss.bossinginfo){
							player.animate('bossing');
							player.node.hp.animate('start');
							player.style.transition='all 0s';
						}else{
							player.animate('start');
						};
						player.setIdentity('zhong');
						player.identity='zhong';
						player.side=true;
						game.players.push(player);
						var num=parseInt(pos);
						if(game.me==game.boss){
							player.dataset.position=num-1;
						}else{
							if(num==2){
								player.dataset.position=7;
							}else{
								player.dataset.position=num-3;
							};
						};
						ui.arena.appendChild(player);
						if(game.boss.bossinginfo){
							var rect=player.getBoundingClientRect();
							player.style.transform='translate('+(game.boss.bossinginfo[0]-rect.left-rect.width/2)+'px,'+(game.boss.bossinginfo[1]-rect.top-rect.height/2)+'px) scale(1.1)';
							ui.refresh(player);
							player.style.transition='';
							player.style.transform='';
						};
					};
					var name1=event.list.randomGet();
					if(result.buttons[0]) name1=result.buttons[0].link;
					func(2,name1);
					if(result.buttons[0]) event.list.remove(name1);
					var name2=event.list.randomGet();
					if(result.buttons[1]) name2=result.buttons[1].link;
					func(8,name2);
					if(result.buttons[1]) event.list.remove(name2);
					game.arrangePlayers();
					"step 2"
					var list=['一','二','三','四','五','六','七','八','九','随机'];
					game.me.chooseControl(list).set('prompt','请选择BOSS方神兽等级<br>'+
					'<table style="width:100%;" border="1">'+
					'<tr><td width="15%" style="text-align:center;vertical-align:middle;">等级</td><td width="90%" style="text-align:middle;">能力</td></tr>'+
					'<tr><td width="15%" style="text-align:center;vertical-align:middle;">一</td><td width="90%" style="text-align:left;font-size:16px;">神兽血量上限+1</td></tr>'+
					'<tr><td width="15%" style="text-align:center;vertical-align:middle;">二</td><td width="90%" style="text-align:left;font-size:16px;">神兽血量上限+1、神兽起始手牌+1</td><tr>'+
					'<tr><td width="15%" style="text-align:center;vertical-align:middle;">三</td><td width="90%" style="text-align:left;font-size:16px;">神兽血量上限+1、神兽起始手牌+1、己方角色起始手牌+1</td><tr>'+
					'<tr><td width="15%" style="text-align:center;vertical-align:middle;">四</td><td width="90%" style="text-align:left;font-size:16px;">神兽血量上限+2、神兽起始手牌+1、己方角色起始手牌+1</td><tr>'+
					'<tr><td width="15%" style="text-align:center;vertical-align:middle;">五</td><td width="90%" style="text-align:left;font-size:16px;">神兽血量上限+2、神兽起始手牌+2、己方角色起始手牌+2</td><tr>'+
					'<tr><td width="15%" style="text-align:center;vertical-align:middle;">六</td><td width="90%" style="text-align:left;font-size:16px;">神兽血量上限+2、神兽起始手牌+2、己方角色起始手牌+2</td><tr>'+
					'<tr><td width="15%" style="text-align:center;vertical-align:middle;">七</td><td width="90%" style="text-align:left;font-size:16px;">神兽血量上限+3、神兽起始手牌+2、己方角色起始手牌+2</td><tr>'+
					'<tr><td width="15%" style="text-align:center;vertical-align:middle;">八</td><td width="90%" style="text-align:left;font-size:16px;">神兽血量上限+3、神兽起始手牌+3、己方角色起始手牌+2</td><tr>'+
					'<tr><td width="15%" style="text-align:center;vertical-align:middle;">九</td><td width="90%" style="text-align:left;font-size:16px;">神兽血量上限+3、神兽起始手牌+3、己方角色起始手牌+3</td><tr>'+
					'</table>').set('ai',function(){
						return list.randomGet();
					});
					"step 3"
					var choice;
					if(result.control=='一'||
					result.control=='二'||
					result.control=='三'||
					result.control=='四'||
					result.control=='五'||
					result.control=='六'||
					result.control=='七'||
					result.control=='八'||
					result.control=='九'){
						choice=result.control;
					}else{
						choice=['一','二','三','四','五','六','七','八','九'].randomGet();
					};
					game.boss.setNickname(choice+'级');
					if(choice=='一'){
						game.boss.maxHp+=1;
						game.boss.hp+=1;
						game.boss.update();
					}else if(choice=='二'){
						game.boss.maxHp+=1;
						game.boss.hp+=1;
						game.boss.update();
						game.boss.draw(1);
					}else if(choice=='三'){
						game.boss.maxHp+=1;
						game.boss.hp+=1;
						game.boss.update();
						game.boss.draw(1);
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.side==false||pl==game.boss) continue;
							pl.draw(1);
						};
					}else if(choice=='四'){
						game.boss.maxHp+=2;
						game.boss.hp+=2;
						game.boss.update();
						game.boss.draw(1);
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.side==false||pl==game.boss) continue;
							pl.draw(1);
						};
					}else if(choice=='五'){
						game.boss.maxHp+=2;
						game.boss.hp+=2;
						game.boss.update();
						game.boss.draw(2);
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.side==false||pl==game.boss) continue;
							pl.draw(1);
						};
					}else if(choice=='六'){
						game.boss.maxHp+=2;
						game.boss.hp+=2;
						game.boss.update();
						game.boss.draw(2);
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.side==false||pl==game.boss) continue;
							pl.draw(2);
						};
					}else if(choice=='七'){
						game.boss.maxHp+=3;
						game.boss.hp+=3;
						game.boss.update();
						game.boss.draw(2);
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.side==false||pl==game.boss) continue;
							pl.draw(2);
						};
					}else if(choice=='八'){
						game.boss.maxHp+=3;
						game.boss.hp+=3;
						game.boss.update();
						game.boss.draw(3);
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.side==false||pl==game.boss) continue;
							pl.draw(2);
						};
					}else{
						game.boss.maxHp+=3;
						game.boss.hp+=3;
						game.boss.update();
						game.boss.draw(3);
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.side==false||pl==game.boss) continue;
							pl.draw(3);
						};
					};
					"step 4"
					if(game.countPlayer(function(current){
						return current.group=='ly_junshenbao_sociatyBeast'&&current.side==false;
					})==0) event.finish();
					"step 5"
					var list=['一','二','三','四','五','六','七','八','九','随机'];
					game.me.chooseControl(list).set('prompt','请选择挑战方神兽等级<br>'+
					'<table style="width:100%;" border="1">'+
					'<tr><td width="15%" style="text-align:center;vertical-align:middle;">等级</td><td width="90%" style="text-align:middle;">能力</td></tr>'+
					'<tr><td width="15%" style="text-align:center;vertical-align:middle;">一</td><td width="90%" style="text-align:left;font-size:16px;">神兽血量上限+1</td></tr>'+
					'<tr><td width="15%" style="text-align:center;vertical-align:middle;">二</td><td width="90%" style="text-align:left;font-size:16px;">神兽血量上限+1、神兽起始手牌+1</td><tr>'+
					'<tr><td width="15%" style="text-align:center;vertical-align:middle;">三</td><td width="90%" style="text-align:left;font-size:16px;">神兽血量上限+1、神兽起始手牌+1、己方角色起始手牌+1</td><tr>'+
					'<tr><td width="15%" style="text-align:center;vertical-align:middle;">四</td><td width="90%" style="text-align:left;font-size:16px;">神兽血量上限+2、神兽起始手牌+1、己方角色起始手牌+1</td><tr>'+
					'<tr><td width="15%" style="text-align:center;vertical-align:middle;">五</td><td width="90%" style="text-align:left;font-size:16px;">神兽血量上限+2、神兽起始手牌+2、己方角色起始手牌+2</td><tr>'+
					'<tr><td width="15%" style="text-align:center;vertical-align:middle;">六</td><td width="90%" style="text-align:left;font-size:16px;">神兽血量上限+2、神兽起始手牌+2、己方角色起始手牌+2</td><tr>'+
					'<tr><td width="15%" style="text-align:center;vertical-align:middle;">七</td><td width="90%" style="text-align:left;font-size:16px;">神兽血量上限+3、神兽起始手牌+2、己方角色起始手牌+2</td><tr>'+
					'<tr><td width="15%" style="text-align:center;vertical-align:middle;">八</td><td width="90%" style="text-align:left;font-size:16px;">神兽血量上限+3、神兽起始手牌+3、己方角色起始手牌+2</td><tr>'+
					'<tr><td width="15%" style="text-align:center;vertical-align:middle;">九</td><td width="90%" style="text-align:left;font-size:16px;">神兽血量上限+3、神兽起始手牌+3、己方角色起始手牌+3</td><tr>'+
					'</table>').set('ai',function(){
						return list.randomGet();
					});
					"step 6"
					var choice;
					if(result.control=='一'||
					result.control=='二'||
					result.control=='三'||
					result.control=='四'||
					result.control=='五'||
					result.control=='六'||
					result.control=='七'||
					result.control=='八'||
					result.control=='九'){
						choice=result.control;
					}else{
						choice=['一','二','三','四','五','六','七','八','九'].randomGet();
					};
					var shenshou;
					for(var i=0;i<game.players.length;i++){
						var pl=game.players[i];
						if(pl.group=='ly_junshenbao_sociatyBeast'&&pl.side==false) shenshou=pl;
					};
					shenshou.setNickname(choice+'级');
					if(choice=='一'){
						shenshou.maxHp+=1;
						shenshou.hp+=1;
						shenshou.update();
					}else if(choice=='二'){
						shenshou.maxHp+=1;
						shenshou.hp+=1;
						shenshou.update();
						shenshou.draw(1);
					}else if(choice=='三'){
						shenshou.maxHp+=1;
						shenshou.hp+=1;
						shenshou.update();
						shenshou.draw(1);
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.side==true||pl==shenshou) continue;
							pl.draw(1);
						};
					}else if(choice=='四'){
						shenshou.maxHp+=2;
						shenshou.hp+=2;
						shenshou.update();
						shenshou.draw(1);
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.side==true||pl==shenshou) continue;
							pl.draw(1);
						};
					}else if(choice=='五'){
						shenshou.maxHp+=2;
						shenshou.hp+=2;
						shenshou.update();
						shenshou.draw(2);
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.side==true||pl==shenshou) continue;
							pl.draw(1);
						};
					}else if(choice=='六'){
						shenshou.maxHp+=2;
						shenshou.hp+=2;
						shenshou.update();
						shenshou.draw(2);
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.side==true||pl==shenshou) continue;
							pl.draw(2);
						};
					}else if(choice=='七'){
						shenshou.maxHp+=3;
						shenshou.hp+=3;
						shenshou.update();
						shenshou.draw(2);
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.side==true||pl==shenshou) continue;
							pl.draw(2);
						};
					}else if(choice=='八'){
						shenshou.maxHp+=3;
						shenshou.hp+=3;
						shenshou.update();
						shenshou.draw(3);
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.side==true||pl==shenshou) continue;
							pl.draw(2);
						};
					}else{
						shenshou.maxHp+=3;
						shenshou.hp+=3;
						shenshou.update();
						shenshou.draw(3);
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.side==true||pl==shenshou) continue;
							pl.draw(3);
						};
					};
				});
				game.boss.addSkill('environment');
			},
		};
		if(lib.boss['ly_junshenbao_sociatyBeast_yazi']==undefined) lib.boss['ly_junshenbao_sociatyBeast_yazi']=lib.boss['ly_junshenbao_sociatyBeast_qiuniu'];
		if(lib.boss['ly_junshenbao_sociatyBeast_suanni']==undefined) lib.boss['ly_junshenbao_sociatyBeast_suanni']=lib.boss['ly_junshenbao_sociatyBeast_qiuniu'];
		if(lib.boss['ly_junshenbao_sociatyBeast_pulao']==undefined) lib.boss['ly_junshenbao_sociatyBeast_pulao']=lib.boss['ly_junshenbao_sociatyBeast_qiuniu'];
		if(lib.boss['ly_junshenbao_sociatyBeast_fuxi']==undefined) lib.boss['ly_junshenbao_sociatyBeast_fuxi']=lib.boss['ly_junshenbao_sociatyBeast_qiuniu'];
		if(lib.boss['ly_junshenbao_sociatyBeast_chiwen']==undefined) lib.boss['ly_junshenbao_sociatyBeast_chiwen']=lib.boss['ly_junshenbao_sociatyBeast_qiuniu'];
		if(lib.boss['ly_junshenbao_sociatyBeast_chaofeng']==undefined) lib.boss['ly_junshenbao_sociatyBeast_chaofeng']=lib.boss['ly_junshenbao_sociatyBeast_qiuniu'];
		if(lib.boss['ly_junshenbao_sociatyBeast_baxia']==undefined) lib.boss['ly_junshenbao_sociatyBeast_baxia']=lib.boss['ly_junshenbao_sociatyBeast_qiuniu'];
		if(lib.boss['ly_junshenbao_sociatyBeast_bian']==undefined) lib.boss['ly_junshenbao_sociatyBeast_bian']=lib.boss['ly_junshenbao_sociatyBeast_qiuniu'];
	};
	var characterPack={
		characterSort: {
			'mode_extension_<span style=\"font-size:17px;font-weight:600\">扩展ol-BOSS</span>': {
				'nyhzrlielong': ['nyhzrlielong', 'nyhzr火龙', 'nyhzr水龙', 'nyhzr雷龙', 'nyhzr土龙', 'nyhzr木龙', 'nyhzr风龙', 'nyhzr冰龙'],
				'mnyhzr灭世魔星BOSS': ['mnyhzr灭世魔星BOSS', 'nyhzr小僵尸'],
				'nyhzr_zq': ['hnyhzr后羿Chessboss', 'gnyhzr宫本武藏Chessboss'],
				'ly_junshenbao_sociatyBeast1':['ly_junshenbao_sociatyBeast_qiuniu','ly_junshenbao_sociatyBeast_yazi','ly_junshenbao_sociatyBeast_suanni','ly_junshenbao_sociatyBeast_pulao','ly_junshenbao_sociatyBeast_fuxi','ly_junshenbao_sociatyBeast_chiwen','ly_junshenbao_sociatyBeast_chaofeng','ly_junshenbao_sociatyBeast_baxia','ly_junshenbao_sociatyBeast_bian'],
			},
		},
		character: {
			"nyhzrlielong":["male","nyhzrlong",' ',["nyhzrlielong1"],['forbidai','boss','bossallowed','des:不同日子出现不同属性的龙'],'wu'],
			"nyhzr火龙":["male","nyhzrlong",7,["lielonghuolongjia","lielongweiyan","lielongbaoyan","niepan"],['forbidai']],
			"nyhzr水龙":["male","nyhzrlong",6,["lielongshuilongjia","lielongshilan","lielongxuanwo","lielonghaige","lielongjiliu"],['forbidai']],
			"nyhzr雷龙":["male","nyhzrlong",3,["lielongleilongjia","lielongjilei","lielongqianniao","lielongchaofu"],['forbidai']],
			"nyhzr土龙":["male","nyhzrlong",12,["lielongtulongjia","lielongmoyan","lielonghuachen","lielongdinu"],['forbidai']],
			"nyhzr木龙":["male","nyhzrlong",9,["lielongmulongjia","lielonglongxi","lielongduhua","lielongshenggen"],['forbidai']],
			"nyhzr风龙":["male","nyhzrlong",8,["lielongfenglongjia","lielongfengbao","lielongfengdun","lielongfengshi"],['forbidai']],
			"nyhzr冰龙":["male","nyhzrlong",5,["lielongbinglongjia","lielonghanxi","lielonghangu","lielongyondong"],['forbidai']],
			"mnyhzr灭世魔星BOSS":["male","li",'',["nyhzr亡者之碑BOSS","nyhzr小僵尸BOSS"],['ext:扩展ol/mnyhzr灭世魔星.jpg','forbidai','boss','bossallowed','des:<li>并不是每一个婴孩的诞生都得到祝福，犼面锁灵想起初见破靡的景象，一念竟觉已千年。<li>是时魔星出世，天象异乱，来自于太虚混沌的上神们急于知寻襁褓下落，围攻走影谷。破靡双亲虽贵为尸王尸后，也难敌神罚，不死之身归于尘土。谷中密道内通洪流，怒江之水直逼外界天地，肤体冥蓝的婴孩安睡于骨床中顺流疾走，周身尸气盘附，水不沾襟。上神们逐密道而出，却看那安胎骨床经过之处水流一退千里，河岸接壤处草被衰败，这刚出世的尸气便要枯了一整条水路，好在方圆几里渺无人畜，上神们及时截下这灭世胎，护天地人间一份安宁。<li>尸者，集天界晦气,取阴界死气,汇人界怨气而生。僵尸与僵尸所诞之子，溶混沌为体肉，赤瞳冥肤，无魄却任可生长，有别于一般走尸，唤为魔星。所幸世上仅会存有一位魔星，破靡不死，便无后者。上神们为绝后患，决定以神力铸成犼面锁缠绕骨床，贴附上古灵文封印魔星尸气，使其不生不长，永为婴孩，隐于落神坡。<li>当犼面锁因神力产生灵识之时，它陪护破靡已有数百年，从锁孔释放幽蓝色魂光，生成双手，小心翼翼地包裹着破靡。怀里的婴孩由于封印已无尸气，柔弱地好似一般胎儿，时而清醒，因双手被缠住有些恼怒，锁灵便偷偷放松链条，让他动个快活，这泼劲差点没把符文给撕扯坏；如若昏睡，锁灵便为他挡雨遮阳，驱虫赶兽，图个安眠。年华见长，符文越发残破，封印渐失，锁链被尸气灼断，本应及时向上神传信的锁灵，却有了心事，看着魔星从牙牙学语到少年模样，一拖再拖。不知是天资过人还是其他，破靡学话极快，缠着锁灵说自己会乖乖的不想再被捆着，心软彻底变为宠溺。<li>锁灵从初见继续想到破靡第一次落地。那时破靡跑到落神坡脚的花田，脚踏处花草枯竭，他开始意识到自己的尸气会给周围带来不幸，一路大跑直入锁灵怀抱哭诉，让尸气烧坏了犼面锁身的其他地方，发现后懊恼的趴在地上捶骂自己，他抬头，瞪着赤红大眼小心翼翼地问，“我以后还能抱你吗。”真是无可奈何，锁灵花了好久的功夫刚把这小东西哄好，破靡立马又被蛇吞兔吸引了注意，一个飞扑上前，用尸气让两者皆幻为走影，赋予永生，他拍拍蛇与兔的头告诫二位要友好往来，完后对锁灵挑着眉毛，“我的尸气有时候还是蛮有用的嘛！”。<li>眼下犼面锁身已千穿百孔，破靡忧心忡忡，碰也不是不碰也不是。锁灵暗暗决定要保护这个少年，哪怕要违逆上神，它也愿意相信自己所看到的纯粹。它对破靡说，“我的身已残败不堪，一旦损毁，上神便会有所感应。你虽有不死之身却盖不住尸气，而我的灵力可助你迷惑上神，无论你逃之何处，我只愿你童心依旧，天真长久。”语罢，魂光移体，那锁不再是锁，在灵气与尸气交融下越长越大，附着于破靡肩背，灵志尽失。<li>待合魂完毕，破靡方才露出一丝邪魅的笑容。对空一声口哨，唤来了尸蛇与兔，蹲下不耐烦地歪着头，听着尸兽的倾吐。末了兴奋地一拍腿，“找到村庄了？好啊，这场戏演了千年，终于可以吃人了。”<li>只见少年走向落神坡脚，信步缓缓，踩蔫了整片花田。'],'wei'],
			"nyhzr小僵尸":["male","li",3,['nyhzr迅猛','nyhzr噬魂'],['forbidai']],
			"hnyhzr后羿Chessboss": ["male", "min", 11, ["nyzhr逐阳Chessboss", "nyhzr穿云箭Chessboss", "nyhzr燎火之箭"],
				["ext:扩展ol/Newhnyhzr后羿.jpg", "forbidai", "chessboss", "des:<li>后羿环顾着四周，目力可及之处，只有龟裂的大地。匍匐在他脚下的老妪已经被灼热的太阳晒脱了水分，恍惚间就像一段焦枯树干。 <li>天空中的太阳们依旧嚣张地散发着全部的热量。<li>是的，太阳们。<li>它们是天帝的儿子，每日有一人化身为太阳穿过天空，撒下光热，哺育世间万物。然而，周而复始的日子令它们觉得厌烦。于是，再一个黎明到来时，它们一起出现在天空中， <li>太阳们散发出的热量烤焦了大地，树木庄稼化为灰烬，人间瞬时化为炼狱…… <li>不能再这样了，总得有个人站出来，帮助大家脱离苦海。<li>后羿回过神来，他按了按腰间的箭囊，那是最后的希望……不能再等待了！他从肩上取下那张红色的弓，抽出了箭矢。 <li>满弓！射出！ <li>奇迹出现了！骄横的太阳纷纷坠落，当第九个太阳落下之时，世界再度恢复了原貌。 <li>人们铭记着他的威能，自此，“神射手”之名名垂千古！"]
			],
			"gnyhzr宫本武藏Chessboss": ["female", "min", 10, ["nyhzr剑客横行Chessboss", "nyhzr千叶斩Chessboss", "nyhzr乱刃影舞"],
				["ext:扩展ol/Newgnyhzr宫本武藏.jpg", "forbidai", "chessboss", "des:<li>黑夜深沉，参天宫殿伫立于阴影之中。传说中拥有巨大力量的天照宝珠就被魔王藏在这里。<li>女剑客静静潜伏在悬崖边上，隐藏在狐面下的冰冷双瞳远远向宫殿凝望。<li>几支巡逻队打着火把如往常一般在宫殿外巡视，她低下身子，轻巧地绕过他们潜入宫殿之中。阴森幽暗的建筑中遍布重重机关，稍一不慎就将死无葬身之地。上下摇摆的抡锤、瞬时淹没的流沙、地底渗出的剧毒、诡异的谜题之门……这些都难不倒这个美艳冷酷的女子。双刀在手，一路过关斩将。<li>暗夜中的潜伏者最终来到了她的终点——某个宫殿深处的密室，悄无声息地划开的机关门后，一片黑暗中的石台上，天照宝珠正在绽放光华。<li>目标就在眼前，她不由加快脚步，但突然觉察到什么又立即停下，双手交错反握刀柄，伏身露出戒备的神情。“真可惜，再往前一步，你就死了。”魔王鼓着掌，从黑暗中露出身形，嘴角扯出一道狰狞的笑。“重重关卡都被你闯过，真是精彩。宫本武藏，你果然不愧传说中的盛名……但你注定拿不到它，因为我会在你拿到之前毁掉它。”<li>“可惜我的目标不是它。”武藏冷冷一笑：“是你！”<li>刀光闪过，天照宝珠仍静静地光华四射，魔王还留存着讶异表情的人头已落地。<li>双刀入鞘，身形一晃，天照宝珠落入腰囊，而武藏，已重新隐入黑暗之中……"]
			],
			"ly_junshenbao_sociatyBeast_qiuniu":["male","ly_junshenbao_sociatyBeast",4,["ly_junshenbao_sociatyBeast_qiuniu_longxuan","ly_junshenbao_sociatyBeast_qiuniu_lige","ly_junshenbao_sociatyBeast_qiuniu_heming","ly_junshenbao_sociatyBeast_qiuniu_jilv"],['forbidai','boss','bossallowed'],'qun'],
			"ly_junshenbao_sociatyBeast_yazi":["male","ly_junshenbao_sociatyBeast",4,["ly_junshenbao_sociatyBeast_yazi_longlie","ly_junshenbao_sociatyBeast_yazi_chaiyue","ly_junshenbao_sociatyBeast_yazi_langri","ly_junshenbao_sociatyBeast_yazi_bibao"],['forbidai','boss','bossallowed'],'wei'],
			"ly_junshenbao_sociatyBeast_suanni":["male","ly_junshenbao_sociatyBeast",4,["ly_junshenbao_sociatyBeast_suanni_longzhen","ly_junshenbao_sociatyBeast_suanni_ruiyan","ly_junshenbao_sociatyBeast_suanni_raoleng","ly_junshenbao_sociatyBeast_suanni_xiangjin"],['forbidai','boss','bossallowed'],'shu'],
			"ly_junshenbao_sociatyBeast_pulao":["male","ly_junshenbao_sociatyBeast",4,["ly_junshenbao_sociatyBeast_pulao_longhou","ly_junshenbao_sociatyBeast_pulao_qiejing","ly_junshenbao_sociatyBeast_pulao_mingyin","ly_junshenbao_sociatyBeast_pulao_duyuan"],['forbidai','boss','bossallowed'],'wu'],
			"ly_junshenbao_sociatyBeast_fuxi":["male","ly_junshenbao_sociatyBeast",4,["ly_junshenbao_sociatyBeast_fuxi_longzhi","ly_junshenbao_sociatyBeast_fuxi_lingjie","ly_junshenbao_sociatyBeast_fuxi_feizhang","ly_junshenbao_sociatyBeast_fuxi_bowen"],['forbidai','boss','bossallowed'],'wu'],
			"ly_junshenbao_sociatyBeast_chiwen":["male","ly_junshenbao_sociatyBeast",4,["ly_junshenbao_sociatyBeast_chiwen_longao","ly_junshenbao_sociatyBeast_chiwen_quyan","ly_junshenbao_sociatyBeast_chiwen_yuhuo","ly_junshenbao_sociatyBeast_chiwen_fubing"],['forbidai','boss','bossallowed'],'shu'],
			"ly_junshenbao_sociatyBeast_chaofeng":["male","ly_junshenbao_sociatyBeast",4,["ly_junshenbao_sociatyBeast_chaofeng_longlin","ly_junshenbao_sociatyBeast_chaofeng_zhijiao","ly_junshenbao_sociatyBeast_chaofeng_zhixie","ly_junshenbao_sociatyBeast_chaofeng_haoxian"],['forbidai','boss','bossallowed'],'qun'],
			"ly_junshenbao_sociatyBeast_baxia":["male","ly_junshenbao_sociatyBeast",4,["ly_junshenbao_sociatyBeast_baxia_longxuan","ly_junshenbao_sociatyBeast_baxia_lingxi","ly_junshenbao_sociatyBeast_baxia_shuliu","ly_junshenbao_sociatyBeast_baxia_jienu"],['forbidai','boss','bossallowed'],'wei'],
			"ly_junshenbao_sociatyBeast_bian":["male","ly_junshenbao_sociatyBeast",4,["ly_junshenbao_sociatyBeast_bian_longshi","ly_junshenbao_sociatyBeast_bian_songyan","ly_junshenbao_sociatyBeast_bian_suwei","ly_junshenbao_sociatyBeast_bian_hualao"],['forbidai','boss','bossallowed'],'qun'],
		},
		skill: {
			"nyhzr尸王降世BOSS": {
				nobracket: true,
				enable: "phaseUse",
				usable: 1,
				filterCard: function (card) {
					return true;
				},
				check: function (card) {
					return 6 - ai.get.value(card);
				},
				content: function () {
					for (var i = 0; i < game.players.length; i++) {
						if (game.players[i].name != 'mnyhzr灭世魔星BOSS') {
							if (game.players[i].name != 'nyhzr小僵尸') {
								game.players[i].damage();
							}
							else {
								game.players[i].recover();
							};
						}
						else {
							game.players[i].recover();
						};
					};
				},
				ai: {
					order: 8,
					result: {
						player: function (player, target) {
							return 1;
						},
					},
				},
			},
			"_timeLimit": {
				mode: ['boss'],
				trigger: {
					player: "phaseUseBegin",
				},
				forced: true,
				filter: function (event, player) {
					return player.storage.亡者之碑time != 1 && game.boss.name == 'mnyhzr灭世魔星BOSS';
				},
				content: function () {
					'step 0'
					_status.timeCount = 3;
					player.addTempSkill('_timeLimit_timeOver', 'phaseUseAfter');
				},
				subSkill: {
					timeOver: {
						trigger: {
							player: "useCardAfter",
						},
						popup: false,
						forced: true,
						content: function () {
							if (_status.timeCount <= 0) {
								delete _status.timeCount;
								game.stopCountChoose();
								var evt = _status.event;
								for (var i = 0; i < 10; i++) {
									if (evt && evt.getParent) {
										evt = evt.getParent();
									};
									if (evt.name == 'phaseUse') {
										evt.skipped = true;
										break;
									};
								};
							};
						},
					},
				},
			},
			"nyhzr迅猛": {
				nobracket: true,
				mod: {
					cardUsable: function (card, player, num) {
						if (card.name == 'sha') return Infinity;
					},
				},
				ai: {
					unequip: true,
					skillTagFilter: function (player, tag, arg) {
						if (!get.zhu(player, 'shouyue')) return false;
						if (arg && arg.name == 'sha') return true;
						return false;
					},
				},
				trigger: {
					player: "phaseDrawBegin",
				},
				forecd: true,
				content: function () {
					trigger.num++;
				},
			},
			"nyhzr噬魂": {
				nobracket: true,
				mode: ['boss'],
				trigger: {
					source: "damageAfter",
				},
				forced: true,
				content: function () {
					if (_status.亡者之碑time)_status.亡者之碑time += 4;
				},
			},
			"_nyhzr小僵尸minskinEquip": {
				mode: ['boss'],
				mod: {
					cardEnabled: function (card, player) {
						if (player.name == 'nyhzr小僵尸') {
							if (get.type(card) == 'equip') return true;
						}
					}
				}
			},
			"_nyhzr小僵尸minskinEquip1": {
				mode: ['boss'],
				trigger: {
					player: "equipBefore",
				},
				filter: function (event, player) {
					return player.name == 'nyhzr小僵尸';
				},
				forced: true,
				content: function () {
					player.classList.remove('minskin');
				},
			},
			"_nyhzr小僵尸minskinEquip2": {
				mode: ['boss'],
				trigger: {
					player: "equipAfter",
				},
				filter: function (event, player) {
					return player.name == 'nyhzr小僵尸';
				},
				forced: true,
				content: function () {
					player.classList.add('minskin');
				},
			},
			"_nyhzr小僵尸undist":{
				mod:{
					targetInRange:function (card,player,target,now){
						if(target.name=='nyhzr小僵尸'&&target.hasSkill('undist')) return true;
					},
				},
			},
			"nyhzr亡者之碑BOSS": {
				mode:['boss'],
				mod: {
					cardEnabled: function (card, player) {
						if (get.type(card) != 'equip' && player.storage.亡者之碑time != 1) return false;
					},
				},
				nobracket: true,
				trigger: {
					global: "gameStart",
				},
				forced: true,
				content: function () {
					game.countChoose=function(clear){
						if(_status.imchoosing){
							return;
						}
						_status.imchoosing=true;
						if(game.hasPlayer(function(target){return target.hasSkill('_timeLimit_timeOver')})&&!_status.countDown){
							ui.timer.show();
							var num=_status.timeCount;
								game.countDown(parseInt(num),function(){
								ui.timer.hide();
								delete _status.timeCount;
								game.stopCountChoose();
								var evt=_status.event;
								for(var i=0;i<10;i++){
									if(evt&&evt.getParent){
										evt=evt.getParent();
									}
									if(evt.name=='phaseUse'){
										evt.skipped=true;
										break;
									}
								}
								ui.click.auto();
							});
							if(!game.online&&game.me){
								if(_status.event.getParent().skillHidden){
									for(var i=0;i<game.players.length;i++){
										game.players[i].showTimer();
									}
									game.me._hide_all_timer=true;
								}
								else if(!_status.event._global_waiting){
									game.me.showTimer();
								}
							}
						}
						if(_status.connectMode&&!_status.countDown){
						    ui.timer.show();
						    var num;
						    if(_status.connectMode){
						        num=lib.configOL.choose_timeout;
						    }
						    else{
						        num=get.config('choose_timeout');
						    }
						    game.countDown(parseInt(num),function(){
						        ui.click.auto();
						        ui.timer.hide();
						    });
						    if(!game.online&&game.me){
						        if(_status.event.getParent().skillHidden){
						            for(var i=0;i<game.players.length;i++){
						                game.players[i].showTimer();
						            }
						            game.me._hide_all_timer=true;
						        }
						        else if(!_status.event._global_waiting){
						            game.me.showTimer();
						        }
						    }
						}
					};
					player.die = function (all) {},
					player.init = function (all) {},
					player.storage.nyhzr小僵尸BOSSadd = 0;
					game.bossinfo.chongzheng = 0;
					var 亡者之碑 = ui.create.player(null, true);亡者之碑.node.avatar.style.backgroundSize = 'cover';
					亡者之碑.node.avatar.setBackgroundImage('extension/扩展ol/亡者之碑.png');
					亡者之碑.node.avatar.show();
					亡者之碑.style.left = 'calc(45% - 75px)';
					亡者之碑.style.top = 'calc(40%)';
					亡者之碑.node.count.remove();
					亡者之碑.node.hp.remove();
					亡者之碑.classList.add('minskin');
					var nyhzr亡者之碑BOSSD = ui.create.div('', '');
					nyhzr亡者之碑BOSSD.innerHTML = '<span style="cursor:pointer;">尸魂：' + lib.config.尸魂 + '/100</span>';
					nyhzr亡者之碑BOSSD.style.left = '8px';
					nyhzr亡者之碑BOSSD.style.top = '6px';
					setInterval(function () {
						nyhzr亡者之碑BOSSD.innerHTML = '<span style="cursor:pointer;">尸魂：' + lib.config.尸魂 + '/100</span>';
						if (lib.config.尸魂 >= 100&&lib.config.kzol_jswj!=undefined&&lib.config.kzol_jswj.mnyhzr灭世魔星!=true) {
							lib.config.kzol_jswj.mnyhzr灭世魔星=true;
							game.saveConfig('kzol_jswj', lib.config.kzol_jswj);
							game.say1('解锁英魂之刃武将——灭世魔星');
							game.saveConfig('尸魂', lib.config.尸魂 - 100);
						};
					}, 100);
					亡者之碑.appendChild(nyhzr亡者之碑BOSSD);
					ui.window.appendChild(亡者之碑);亡者之碑.node.name.innerHTML = '<br><br><br>第一阶段';亡者之碑.node.name.style.fontFamily = 'huangcao';
					player.maxHp = Infinity;
					player.hp = Infinity;
					player.update();
					player.node.hp.hide();
					player.addSkill('qianxing');
					player.node.action.classList.add('freecolor');
					player.node.action.style.opacity = 1;
					player.node.action.style.letterSpacing = '4px';
					player.node.action.style.marginRight = 0;
					player.node.action.style.fontFamily = 'huangcao';
					player.node.action.innerHTML = '';
					_status.亡者之碑time = 240;
					var interval = setInterval(function () {
						if (_status.over) {
							clearInterval(interval);
							return;
						}
						var sec = _status.亡者之碑time % 60;
						if (sec < 10) {
							sec = '0' + sec;
						}
						player.node.action.innerHTML = Math.floor(_status.亡者之碑time / 60) + ':' + sec;
						if (_status.亡者之碑time <= 0 && player.storage.亡者之碑time != 1) {
							player.removeSkill('qianxing');亡者之碑.node.name.innerHTML = '<br><br><br>第二阶段';
							player.node.hp.show();
							player.maxHp = 10;
							if (4 + player.storage.nyhzr小僵尸BOSSadd > 10) {
								player.hp = 10;
								player.changeHujia(player.storage.nyhzr小僵尸BOSSadd - 6)
							}
							else {
								player.hp = 4 + player.storage.nyhzr小僵尸BOSSadd;
							};
							player.update();
							player.removeSkill('nyhzr小僵尸BOSS');
							player.storage.亡者之碑time = 1;
							player.addSkill('nyhzr生命凋零ol');
							player.addSkill('nyhzr尸王降世BOSS');
							for (var i = 0; i < game.players.length; i++) {
								if (game.players[i] != player && game.players[i].name != 'nyhzr小僵尸') {
									game.players[i].recover(2);
									game.players[i].draw(3);
								};
							};
							player.die =lib.element.player.die;
						}
						if (player.storage.亡者之碑time == 1) player.node.action.innerHTML = '';
						if(_status.paused2==false) _status.亡者之碑time--;
					}, 1000);
				},
			},
			"nyhzr小僵尸BOSS": {
				mode:['boss'],
				nobracket: true,
				trigger: {
					player: "phaseEnd",
				},
				forced: true,
				filter: function (event, player) {
					return player.storage.nyhzr小僵尸BOSS1 != false || player.storage.nyhzr小僵尸BOSS2 != false || player.storage.nyhzr小僵尸BOSS3 != false;
				},
				content: function () {
					if (player.storage.nyhzr小僵尸BOSS1 != false) {
						player.storage.nyhzr小僵尸BOSSadd++;
						if (_status.亡者之碑time)_status.亡者之碑time -= 10;
						var fellow = game.addFellow(1, 'nyhzr小僵尸');
						fellow.style.left = 'calc(55% - 75px)';
						fellow.style.top = 'calc(25%)';
						fellow.classList.add('minskin');
						fellow.side = player.side;
						fellow.identity = player.identity;
						if (fellow.identity == 'zhu') fellow.identity = 'zhong';
						fellow.setIdentity('僵尸');
						fellow.node.identity.dataset.color = 'zhu';
						fellow.draw(1);
						fellow.addSkill('undist');
						fellow.storage.nyhzr小僵尸BOSS1 = false;
						player.storage.nyhzr小僵尸BOSS1 = false;
					};
					if (player.storage.nyhzr小僵尸BOSS2 != false) {
						player.storage.nyhzr小僵尸BOSSadd++;
						if (_status.亡者之碑time)_status.亡者之碑time -= 10;
						var fellow = game.addFellow(1, 'nyhzr小僵尸');
						fellow.style.left = 'calc(40% - 75px)';
						fellow.style.top = 'calc(50%)';
						fellow.classList.add('minskin');
						fellow.side = player.side;
						fellow.identity = player.identity;
						if (fellow.identity == 'zhu') fellow.identity = 'zhong';
						fellow.setIdentity('僵尸');
						fellow.node.identity.dataset.color = 'zhu';
						fellow.draw(1);
						fellow.addSkill('undist');
						fellow.storage.nyhzr小僵尸BOSS2 = false;
						player.storage.nyhzr小僵尸BOSS2 = false;
					};
					if (player.storage.nyhzr小僵尸BOSS3 != false) {
						player.storage.nyhzr小僵尸BOSSadd++;
						if (_status.亡者之碑time)_status.亡者之碑time -= 10;
						var fellow = game.addFellow(1, 'nyhzr小僵尸');
						fellow.style.left = 'calc(35% - 75px)';
						fellow.style.top = 'calc(20%)';
						fellow.classList.add('minskin');
						fellow.side = player.side;
						fellow.identity = player.identity;
						if (fellow.identity == 'zhu') fellow.identity = 'zhong';
						fellow.setIdentity('僵尸');
						fellow.node.identity.dataset.color = 'zhu';
						fellow.draw(1);
						fellow.addSkill('undist');
						fellow.storage.nyhzr小僵尸BOSS3 = false;
						player.storage.nyhzr小僵尸BOSS3 = false;
					};
				},
			},
			"_nyhzr小僵尸BOSS1": {
				mode: ['boss'],
				trigger: {
					player: 'dieBefore'
				},
				filter: function (event, player) {
					return player.name == 'nyhzr小僵尸';
				},
				forced: true,
				content: function () {
					for (var i = 0; i < game.players.length; i++) {
						if (game.players[i].name == 'mnyhzr灭世魔星BOSS') {
							if (player.storage.nyhzr小僵尸BOSS1 == false) game.players[i].storage.nyhzr小僵尸BOSS1 = true;
							if (player.storage.nyhzr小僵尸BOSS2 == false) game.players[i].storage.nyhzr小僵尸BOSS2 = true;
							if (player.storage.nyhzr小僵尸BOSS3 == false) game.players[i].storage.nyhzr小僵尸BOSS3 = true;
						};
					};
				},
			},
			"nyhzrlielong1": {
				nobracket: true,
			},
			"_nyhzrlielong2": {
				trigger: {
					global: "gameStart",
				},
				forced: true,
				popup: false,
				filter: function (event, player) {
					return player.hasSkill('nyhzrlielong1');
				},
				content: function () {
					if(player!=game.me){
						ui.backgroundMusic.src=lib.assetURL+'extension/扩展ol/ll.mp3';
						ui.backgroundMusic.addEventListener('ended',function(){
							if(lib.config.background_music=='music_off'){
								ui.backgroundMusic.src='';
							}else{
								ui.backgroundMusic.src=lib.assetURL+'extension/扩展ol/ll.mp3';
							};
						});
					};
					//var audio=game.playAudio();
					//audio.src=lib.assetURL+'extension/扩展ol/lcc.mp3';
					if (new Date().getDay() == 1) {
						player.init('nyhzr火龙');
						if (game.bossinfo != undefined) game.bossinfo.chongzheng = 4;
					};
					if (new Date().getDay() == 2) {
						player.init('nyhzr水龙');
						if (game.bossinfo != undefined) game.bossinfo.chongzheng = 10;
					};
					if (new Date().getDay() == 3) {
						player.init('nyhzr雷龙');
						if (game.bossinfo != undefined) game.bossinfo.chongzheng = 5;
					};
					if (new Date().getDay() == 4) {
						player.init('nyhzr土龙');
						if (game.bossinfo != undefined) game.bossinfo.chongzheng = 20;
					};
					if (new Date().getDay() == 5) {
						player.init('nyhzr木龙');
						if (game.bossinfo != undefined) game.bossinfo.chongzheng = 5;
					};
					if (new Date().getDay() == 6) {
						player.init('nyhzr风龙');
						if (game.bossinfo != undefined) game.bossinfo.chongzheng = 8;
					};
					if (new Date().getDay() == 0) {
						player.init('nyhzr冰龙');
						if (game.bossinfo != undefined) game.bossinfo.chongzheng = 4;
					};
				},
			},
			"lielonghuolongjia": {
				group: ["lielonghuolongjia_heart", "lielonghuolongjia_diamond"],
				subSkill: {
					heart: {
						trigger: {
							target: "shaBefore",
						},
						forced: true,
						priority: 6,
						filter: function (event) {
							return event.card && event.card.name == 'sha' && get.suit(event.card) == 'heart'
						},
						content: function () {
							trigger.untrigger();
							trigger.finish();
						},
					},
					diamond: {
						trigger: {
							player: "damageBegin",
						},
						forced: true,
						filter: function (event, player) {
							return event.card && event.card.name == 'sha' && get.suit(event.card) == 'diamond'
						},
						content: function () {
							trigger.num -= 1;
						}
					},
				},
			},
			"lielongweiyan": {
				trigger: {
					global: "gameDrawBefore",
				},
				forced: true,
				content: function () {
					for (var i = 0; i < game.players.length; i++) {
						if (game.players[i] != player) game.players[i].damage(1, 'fire');
					};
				},
			},
			"lielongbaoyan": {
				enable: "phaseUse",
				usable: 1,
				filterTarget: function (card, player, target) {
					return player != target;
				},
				content: function () {
					target.damage(3, 'fire');
					player.loseHp();
				},
				ai: {
					order: 5,
					result: {
						player: function (player, target) {
							return player.hp - 2;
						},
					},
				},
			},
			"lielongshuilongjia": {
				trigger: {
					player: "damageBegin",
				},
				forced: true,
				filter: function (event, player) {
					return event.nature == 'fire';
				},
				content: function () {
					trigger.num -= 1;
				}
			},
			"lielongshilan": {
				trigger: {
					global: "phaseBefore",
				},
				forced: true,
				filter: function (event, player) {
					return event.player != player;
				},
				content: function () {
					'step 0'
					var list = ['流失一点体力'];
					if (trigger.player.num('h') >= 1) list.push('弃置一张手牌');
					trigger.player.chooseControl(list).set('ai', function () {
						if (trigger.player.num('h') >= 1) return '弃置一张手牌'
						return '流失一点体力'
					});
					'step 1'
					if (result.control == '流失一点体力') trigger.player.loseHp();
					if (result.control == '弃置一张手牌') trigger.player.chooseToDiscard(1, 'h', true);
				}

			},
			"lielongxuanwo": {
				trigger: {
					player: "changeHp",
				},
				direct: true,
				filter: function (event, player) {
					return event.num != 0;
				},
				content: function () {
					"step 0"
					player.chooseTarget(get.prompt('lielongxuanwo'), function (card, player, target) {
						return player != target
					}).ai = function (target) {
						if (target.hasSkillTag('noturn')) return 0;
						var player = _status.event.player;
						if (get.attitude(_status.event.player, target) == 0) return 0;
						if (get.attitude(_status.event.player, target) > 0) {
							if (target.classList.contains('turnedover')) return 1000 - target.countCards('h');
							if (player.maxHp - player.hp < 3) return -1;
							return 100 - target.countCards('h');
						}
						else {
							if (target.classList.contains('turnedover')) return -1;
							if (player.maxHp - player.hp >= 3) return -1;
							return 1 + target.countCards('h');
						}
					}
					"step 1"
					if (result.bool) {
						player.logSkill('lielongxuanwo', result.targets);
						result.targets[0].draw(result.targets[0].maxHp - result.targets[0].hp);
						result.targets[0].turnOver();
					}
				},
				ai: {
					effect: {
						target: function (card, player, target) {
							if (get.tag(card, 'damage')) {
								if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
								if (target.hp <= 1) return;
								if (!target.hasFriend()) return;
								var hastarget = false;
								var turnfriend = false;
								var players = game.filterPlayer();
								for (var i = 0; i < players.length; i++) {
									if (get.attitude(target, players[i]) < 0 && !players[i].isTurnedOver()) {
										hastarget = true;
									}
									if (get.attitude(target, players[i]) > 0 && players[i].isTurnedOver()) {
										hastarget = true;
										turnfriend = true;
									}
								}
								if (get.attitude(player, target) > 0 && !hastarget) return;
								if (turnfriend || target.hp == target.maxHp) return [0.5, 1];
								if (target.hp > 1) return [1, 0.5];
							}
						},
					},
				},
			},
			"lielonghaige": {
				trigger: {
					player: "phaseEnd",
				},
				forced: true,
				content: function () {
					player.useCard({
						name: 'tao'
					}, player);;
				}
			},
			"lielongjiliu": {
				init: function (player) {
					player.storage.lielongjiliu = 0;
				},
				marktext: "激",
				intro: {
					content: function (storage) {
						return '当前拥有' + storage + '个激流标记'
					},
				},
				mark: true,
				group: ["lielongjiliu_lose", "lielongjiliu_use"],
				subSkill: {
					lose: {
						trigger: {
							player: 'loseAfter'
						},
						filter: function (event, player) {
							return _status.currentPhase != player;
						},
						forced: true,
						content: function () {
							player.storage.lielongjiliu++;
							player.syncStorage('lielongjiliu');
						}
					},
					use: {
						enable: "phaseUse",
						filterTarget: function (card, player, target) {
							return target != player;
						},
						filter: function (event, player) {
							return player.storage.lielongjiliu > 0;
						},
						content: function () {
							target.damage(player.storage.lielongjiliu);
							player.storage.lielongjiliu = 0;
							player.syncStorage('lielongjiliu');
						},
						ai: {
							order: 9,
							result: {
								player: function (player) {
									return 1;
								},
							},
						},
					},
				},
			},
			"lielongleilongjia": {
				trigger: {
					player: "damageBegin",
				},
				forced: true,
				filter: function (event, player) {
					return event.card && get.color(event.card) == 'black'
				},
				content: function () {
					trigger.untrigger();
					trigger.finish();
				}
			},
			"lielongjilei": {
				group: ["lielongjilei_Begin", "lielongjilei_After"],
				subSkill: {
					Begin: {
						trigger: {
							player: "phaseDrawBegin",
						},
						forced: true,
						content: function () {
							trigger.num += player.hp;
						},
					},
					After: {
						trigger: {
							player: "phaseDrawAfter",
						},
						forced: true,
						filter: function (event, player) {
							return player.num('h') > player.hp * 2
						},
						content: function () {
							player.skip('phaseUse');
							player.skip('phaseDiscard');
							for (var i = 0; i < game.players.length; i++) {
								if (game.players[i] != player) game.players[i].damage(1, 'thunder');
							};
						},
					},
				},
			},
			"lielongqianniao": {
				trigger: {
					player: "damageAfter",
				},
				filter: function (event, player) {
					return event.source && _status.currentPhase != player && player.num('h') >= 2;
				},
				content: function () {
					player.chooseToDiscard(2, 'h', true);
					trigger.source.damage(2, 'thunder');
				}
			},
			"lielongchaofu": {
				trigger: {
					player: "phaseBegin",
				},
				forced: true,
				filter: function (event, player) {
					return player.hp == 1;
				},
				content: function () {
					for (var i = 0; i < game.players.length; i++) {
						if (game.players[i] != player) player.useCard({
							name: 'sha',
							nature: 'thunder'
						}, game.players[i]);
					};
					player.recover();
				}
			},
			"lielongtulongjia": {
				group: ["lielongtulongjia_card", "lielongtulongjia_loseHp"],
				subSkill: {
					card: {
						trigger: {
							player: "damageBegin",
						},
						forced: true,
						filter: function (event, player) {
							return event.card && (event.card.name == 'nanman' || event.card.name == 'wanjian')
						},
						content: function () {
							trigger.untrigger();
							trigger.finish();
						}
					},
					loseHp: {
						trigger: {
							player: "loseHpBegin",
						},
						forced: true,
						content: function () {
							trigger.num++;
						}
					},
				},
			},
			"lielongmoyan": {
				trigger: {
					player: "damageAfter",
				},
				forced: true,
				filter: function (event, player) {
					return event.nature;
				},
				content: function () {
					if (trigger.nature == 'fire') player.chooseToDiscard(2, 'h', true);
					if (trigger.nature == 'thunder') player.draw();
				}
			},
			"lielonghuachen": {
				unique: true,
				mark: true,
				skillAnimation: true,
				animationStr: "化尘",
				animationColor: "thunder",
				enable: "phaseUse",
				init: function (player) {
					player.storage.lielonghuachen = false;
				},
				filter: function (event, player) {
					if (player.storage.lielonghuachen) return false;
					return true;
				},
				filterTarget: function (card, player, target) {
					return player != target;
				},
				content: function () {
					player.awakenSkill('lielonghuachen');
					player.storage.lielonghuachen = true;
					player.loseHp();
					target.discard(target.get("he"));
					target.damage();
				},
				ai: {
					order: 13,
					result: {
						player: function (player, target) {
							return 1;
						},
					},
				},
				intro: {
					content: "limited",
				},
			},
			"lielongdinu": {
				trigger: {
					player: "phaseBegin",
				},
				forced: true,
				filter: function (event, player) {
					return player.hp < 5;
				},
				content: function () {
					for (var i = 0; i < game.players.length; i++) {
						if (game.players[i] != player) player.useCard({
							name: 'nanman'
						}, game.players[i]);
					};
					player.recover();
				}
			},
			"lielongmulongjia": {
				trigger: {
					player: "damageBegin",
				},
				forced: true,
				content: function () {
					if (trigger.nature != 'fire') {
						trigger.untrigger();
						trigger.finish();
					}
					else {
						trigger.num++
					}
				}
			},
			"lielonglongxi": {
				trigger: {
					player: "phaseBegin",
				},
				forced: true,
				content: function () {
					if (player.hp <= 5) {
						player.recover();
					}
					else {
						for (var i = 0; i < game.players.length; i++) {
							if (game.players[i] != player) game.players[i].loseHp();
						};
					};
				}
			},
			"lielongduhua": {
				trigger: {
					player: "phaseEnd",
				},
				content: function () {
					"step 0"
					player.chooseTarget('选择【毒花】的目标', function (card, player, target) {
						return player != target
					}).ai = function (target) {
						return -ai.get.attitude(player, target)
					};
					"step 1"
					if (result.bool) {
						result.targets[0].damage();
						player.loseHp();
					}
					else {
						event.finish();
					}
				},
				check: function (event, player) {
					return player.hp > 3;
				},
			},
			"lielongshenggen": {
				unique: true,
				mark: true,
				skillAnimation: true,
				animationStr: "生根",
				enable: "phaseUse",
				init: function (player) {
					player.storage.lielongshenggen = false;
				},
				filter: function (event, player) {
					if (player.storage.lielongshenggen) return false;
					return true;
				},
				filterTarget: function (card, player, target) {
					return player != target;
				},
				content: function () {
					player.awakenSkill('lielongshenggen');
					player.storage.lielongshenggen = true;
					target.loseHp();
					player.storage.lielongshenggen1 = target.num('h');
					player.discard(player.get('h'));
					player.recover(2);
					player.addSkill('lielongshenggen1');
				},
				ai: {
					order: 1,
					result: {
						player: function (player, target) {
							if (player.hp <= 7) return 1;
							return 0;
						},
					},
				},
				intro: {
					content: "limited",
				},
			},
			"lielongshenggen1": {
				trigger: {
					player: "phaseEnd",
				},
				forced: true,
				content: function () {
					player.removeSkill("lielongshenggen1");
					player.draw(player.storage.lielongshenggen1);
					player.storage.lielongshenggen1 = 0;
				}
			},
			"lielongfenglongjia": {
				trigger: {
					player: "damageBegin",
				},
				forced: true,
				filter: function (event, player) {
					return event.nature;
				},
				content: function () {
					player.next.damage(trigger.nature);
					player.previous.damage(trigger.nature);
				},
			},
			"lielongfengbao": {
				mod: {
					cardUsable: function (card, player, num) {
						if (card.name == 'sha') return Infinity;
					},
				},
				enable: ['chooseToRespond', 'chooseToUse'],
				filterCard: function (card) {
					return get.color(card) == 'black';
				},
				position: 'he',
				viewAs: {
					name: 'sha',
					nature: 'thunder'
				},
				prompt: '将一张黑色牌当作雷杀使用或打出',
				ai: {
					respondSha: true,
				}
			},
			"lielongfengdun": {
				mod: {
					globalTo: function (from, to, distance) {
						return distance + 3;
					},
				},
			},
			"lielongfengshi": {
				trigger: {
					player: "useCardAfter",
				},
				filter: function (event, player) {
					return event.card.name == 'wanjian';
				},
				forced: true,
				content: function () {
					for (var i = 0; i < game.players.length; i++) {
						if (game.players[i] != player) game.players[i].loseHp();
					};
				},
			},
			"lielongbinglongjia": {
				trigger: {
					player: "damageBefore",
				},
				forced: true,
				filter: function (event, player) {
					return event.source;
				},
				content: function () {
					trigger.source.discard(trigger.source.get('h'));
				},
			},
			"lielonghanxi": {
				trigger: {
					player: "phaseBefore",
				},
				forced: true,
				content: function () {
					game.players.randomGet(player).turnOver();
				},
			},
			"lielonghangu": {
				trigger: {
					player: "phaseAfter",
				},
				forced: true,
				content: function () {
					for (var i = 0; i < game.players.length; i++) {
						if (game.players[i].isTurnedOver()) {
							game.players[i].loseHp();
							game.players[i].discard(game.players[i].get('h'));
							player.recover();
						};
					};
				},
			},
			"lielongyondong": {
				unique: true,
				mark: true,
				skillAnimation: true,
				animationStr: "永冻",
				animationColor: "thunder",
				enable: "phaseUse",
				init: function (player) {
					player.storage.lielongyondong = false;
				},
				filter: function (event, player) {
					if (player.storage.lielongyondong) return false;
					return true;
				},
				content: function () {
					player.awakenSkill('lielongyondong');
					player.storage.lielongyondong = true;
					for (var i = 0; i < game.players.length; i++) {
						if (game.players[i] != player && !game.players[i].isTurnedOver()) game.players[i].turnOver();
					};
				},
				ai: {
					order: 1,
					result: {
						player: function (player, target) {
							return 1;
						},
					},
				},
				intro: {
					content: "limited",
				},
			},
			"_Gainshihun": {
				mode: ['boss'],
				trigger: {
					source: 'dieBefore'
				},
				filter: function (event, player) {
					return event.player.name == 'nyhzr小僵尸' && player.identity == game.me.identity;
				},
				forced: true,
				content: function () {
					var num=[1,2,3,4,5,6,7,8,9,10].randomGet();
					game.saveConfig('尸魂', lib.config.尸魂 + num);
					game.say1('获得'+num+'个尸魂');
				},
			},
			"nyzhr逐阳Chessboss": {
				mode: ['chess'],
				nobracket: true,
				mod: {
					chessMove: function (player, current) {
						return current + 3;
					},
				},
				enable: 'phaseUse',
				usable: 1,
				direct: true,
				delay: false,
				preservecancel: true,
				filter: function (event, player) {
					if (!player.movable(0, 1) && !player.movable(0, -1) && !player.movable(1, 0) && !player.movable(-1, 0)) {
						return false;
					}
					var move = 2;
					move = game.checkMod(player, move, 'chessMove', player);
					return move > 0;
				},
				content: function () {
					"step 0"
					var move = 2;
					move = game.checkMod(player, move, 'chessMove', player);
					player.chooseToMove(move).phasing = true;
					"step 1"
					if (ui.confirm) {
						ui.confirm.classList.add('removing');
					}
					if (!result.bool) {
						var skill = player.getStat().skill;
						skill._chessmove--;
						if (typeof skill._chessmovetried == 'number') {
							skill._chessmovetried++;
						}
						else {
							skill._chessmovetried = 1;
						}
					}
				},
				ai: {
					order: 5,
					result: {
						playerx: function (player) {
							if (get.mode() == 'tafang' && _status.enemies.contains(player)) {
								return 1;
							}
							var nh = player.countCards('h');
							if (!player.countCards('h', 'sha') && !player.countCards('h', 'shunshou') && !player.countCards('h', 'bingliang')) {
								if (nh <= Math.min(3, player.hp)) return Math.random() - 0.3;
								else if (nh <= Math.min(2, player.hp)) return Math.random() - 0.4;
								return Math.random() - 0.5;
							}
							var neighbour;
							neighbour = player.getNeighbour(0, 1);
							if (neighbour && game.players.contains(neighbour) && neighbour.side != player.side) {
								if (get.distance(player, neighbour, 'attack') < 1) return 1;
								return 0;
							}
							neighbour = player.getNeighbour(0, -1);
							if (neighbour && game.players.contains(neighbour) && neighbour.side != player.side) {
								if (get.distance(player, neighbour, 'attack') < 1) return 1;
								return 0;
							}
							neighbour = player.getNeighbour(1, 0);
							if (neighbour && game.players.contains(neighbour) && neighbour.side != player.side) {
								if (get.distance(player, neighbour, 'attack') < 1) return 1;
								return 0;
							}
							neighbour = player.getNeighbour(-1, 0);
							if (neighbour && game.players.contains(neighbour) && neighbour.side != player.side) {
								if (get.distance(player, neighbour, 'attack') < 1) return 1;
								return 0;
							}
							return 1;
						},
						player: function (player) {
							if (player.getStat().skill._chessmovetried >= 10) {
								return 0;
							}
							var x = lib.skill._chessmove.ai.result.playerx(player);
							if (player.isMad()) return -x;
							return x;
						}
					}
				}
			},
			"nyhzr穿云箭Chessboss": {
				mode: ['chess'],
				nobracket: true,
				enable: 'phaseUse',
				usable: 1,
				filter: function (event, player) {
					return player.num('h') > 0;
				},
				filterCard: {
					name: 'sha'
				},
				selectCard: 1,
				content: function () {
					'step 0'
					player.chooseControl('上', '下', '左', '右').set('ai', function () {
						for (var i = 0; i < game.players.length; i++) {
							var xy1 = player.getXY();
							var xy2 = game.players[i].getXY();
							if (xy1[0] == xy2[0] && xy1[1] > xy2[1]) {
								var aiChooseControl = '上';
							};
							if (xy1[0] == xy2[0] && xy1[1] < xy2[1]) {
								var aiChooseControl = '下';
							};
							if (xy1[0] > xy2[0] && xy1[1] == xy2[1]) {
								var aiChooseControl = '左';
							};
							if (xy1[0] < xy2[0] && xy1[1] == xy2[1]) {
								var aiChooseControl = '右';
							};
						};
						return aiChooseControl;
					})
						'step 1'
					if (result.control == '上') {
						game.log(player, '向上射出穿云箭');
						for (var i = 0; i < game.players.length; i++) {
							var xy1 = player.getXY();
							var xy2 = game.players[i].getXY();
							if (xy1[0] == xy2[0] && xy1[1] > xy2[1]) {
								game.players[i].damage();
								game.players[i].getDebuff();
							};
						};
					};
					if (result.control == '下') {
						game.log(player, '向下射出穿云箭');
						for (var i = 0; i < game.players.length; i++) {
							var xy1 = player.getXY();
							var xy2 = game.players[i].getXY();
							if (xy1[0] == xy2[0] && xy1[1] < xy2[1]) {
								game.players[i].damage();
								game.players[i].getDebuff();
							};
						};
					};
					if (result.control == '左') {
						game.log(player, '向左射出穿云箭');
						for (var i = 0; i < game.players.length; i++) {
							var xy1 = player.getXY();
							var xy2 = game.players[i].getXY();
							if (xy1[0] > xy2[0] && xy1[1] == xy2[1]) {
								game.players[i].damage();
								game.players[i].getDebuff();
							};
						};
					};
					if (result.control == '右') {
						game.log(player, '向右射出穿云箭');
						for (var i = 0; i < game.players.length; i++) {
							var xy1 = player.getXY();
							var xy2 = game.players[i].getXY();
							if (xy1[0] < xy2[0] && xy1[1] == xy2[1]) {
								game.players[i].damage();
								game.players[i].getDebuff();
							};
						};
					};
				},
				ai: {
					result: {
						player: function (player) {
							for (var i = 0; i < game.players.length; i++) {
								var xy1 = player.getXY();
								var xy2 = game.players[i].getXY();
								if (xy1[0] == xy2[0] && xy1[1] > xy2[1]) {
									var aiChooseControl = '上';
								};
								if (xy1[0] == xy2[0] && xy1[1] < xy2[1]) {
									var aiChooseControl = '下';
								};
								if (xy1[0] > xy2[0] && xy1[1] == xy2[1]) {
									var aiChooseControl = '左';
								};
								if (xy1[0] < xy2[0] && xy1[1] == xy2[1]) {
									var aiChooseControl = '右';
								};
							};
							if (aiChooseControl == '上' || aiChooseControl == '下' || aiChooseControl == '左' || aiChooseControl == '右') return 1;
							return 0;
						},
					},
					order: 4.8,
				},
			},
			"nyhzr剑客横行Chessboss": {
				mode: ['chess'],
				nobracket: true,
				group: ["nyhzr剑客横行Chessboss_1111", "nyhzr剑客横行Chessboss_2222"],
				subSkill: {
					1111: {
						trigger: {
							player: "phaseAfter",
						},
						forced: true,
						content: function () {
							if (game.me.hasSkill('nyhzr剑客横行Chessboss')) {
								nyhzr上 = ui.create.div('.menubutton.large', '↑', function () {
									if (game.me.storage.nyhzr上 == undefined || game.me.storage.nyhzr上 == 1) {
										game.me.storage.nyhzr上 = 0;
										game.me.moveUp();
										setTimeout(function () {
											game.me.storage.nyhzr上 = 1;
										}, 1000);
									};
								});
								nyhzr上.style.height = '30px';
								nyhzr上.style.width = '30px';
								nyhzr上.style.left = '17px';
								nyhzr上.style.top = '0px';
								nyhzr下 = ui.create.div('.menubutton.large', '↓', function () {
									if (game.me.storage.nyhzr下 == undefined || game.me.storage.nyhzr下 == 1) {
										game.me.storage.nyhzr下 = 0;
										game.me.moveDown();
										setTimeout(function () {
											game.me.storage.nyhzr下 = 1;
										}, 1000);
									};
								});
								nyhzr下.style.height = '30px';
								nyhzr下.style.width = '30px';
								nyhzr下.style.right = '39px';
								nyhzr下.style.top = '90px';
								nyhzr左 = ui.create.div('.menubutton.large', '←', function () {
									if (game.me.storage.nyhzr左 == undefined || game.me.storage.nyhzr左 == 1) {
										game.me.storage.nyhzr左 = 0;
										game.me.moveLeft();
										setTimeout(function () {
											game.me.storage.nyhzr左 = 1;
										}, 1000);
									};
								});
								nyhzr左.style.height = '30px';
								nyhzr左.style.width = '30px';
								nyhzr左.style.right = '135px';
								nyhzr左.style.top = '45px';
								nyhzr右 = ui.create.div('.menubutton.large', '→', function () {
									if (game.me.storage.nyhzr右 == undefined || game.me.storage.nyhzr右 == 1) {
										game.me.storage.nyhzr右 = 0;
										game.me.moveRight();
										setTimeout(function () {
											game.me.storage.nyhzr右 = 1;
										}, 1000);
									};
								});
								nyhzr右.style.height = '30px';
								nyhzr右.style.width = '30px';
								nyhzr右.style.right = '-2px';
								nyhzr右.style.top = '-11px';
								ui.nyhzr控制器 = ui.create.dialog('hidden');
								ui.nyhzr控制器.add(nyhzr上);
								ui.nyhzr控制器.add(nyhzr下);
								ui.nyhzr控制器.add(nyhzr左);
								ui.nyhzr控制器.add(nyhzr右);
								ui.window.appendChild(ui.nyhzr控制器);
								ui.nyhzr控制器.style.height = '200px';
								ui.nyhzr控制器.style.width = '200px';
								ui.nyhzr控制器.style.left = '50px';
								ui.nyhzr控制器.style.top = 'calc(100% - 300px)';
							}
							else {
								player.storage.nyhzr剑客横行Chessboss = 1;
								player.useSkill('nyhzr剑客横行Chessboss1');
							};
						},
					},
					2222: {
						trigger: {
							player: "phaseBefore",
						},
						forced: true,
						content: function () {
							if (game.me.hasSkill('nyhzr剑客横行Chessboss') && ui.nyhzr控制器) {
								ui.nyhzr控制器.remove();
							};
							player.storage.nyhzr剑客横行Chessboss = 0;
						},
					},
				},
			},
			"nyhzr剑客横行Chessboss1": {
				mode: ['chess'],
				nobracket: true,
				content: function () {
					if (Math.random() <= 0.25) {
						player.moveUp();
					}
					else if (Math.random() <= 0.25) {
						player.moveDown();
					}
					else if (Math.random() <= 0.25) {
						player.moveRight();
					}
					else {
						player.moveLeft();
					}
					if (player.storage.nyhzr剑客横行Chessboss == 1) {
						setTimeout(function () {
							player.useSkill('nyhzr剑客横行Chessboss1');
						}, 1500);
					};
				},
			},
			"nyhzr千叶斩Chessboss": {
				nobracket: true,
				enable: "phaseUse",
				filterTarget: function (card, player, target) {
					return player != target;
				},
				filter: function (event, player) {
					return player.num('h') > player.num('e');
				},
				content: function () {
					"step 0"
					if (player.hasSkill('nyhzr勾玉魂刀') && !player.hasSkill('nyhzr勾玉魂刀1')) player.addSkill('nyhzr勾玉魂刀1');
					var qyzsha = get.cardPile(function (card) {
						return card.name == 'sha'
					});
					if (qyzsha && player.num('h') > player.num('e') && target.hp > 0) {
						player.gain(qyzsha, 'gain2');
						player.useCard(qyzsha, target);
						player.chooseToDiscard(1, 'h', true);
					}
					else {
						event.finish();
						player.removeSkill('nyhzr勾玉魂刀1');
						if (player.hasSkill('nyhzr幻之分身2')) {
							player.useCard(qyzsha, target);
						};
					};
					"step 1"
					event.goto(0);
				},
				ai: {
					result: {
						player: 1,
					},
					order: 31,
				},
			},
            "nyhzr燎火之箭": {
            	nobracket: true,
            	trigger: {
            		source: "damageBegin",
            	},
            	content: function () {
            		if (!player.hasSkill('nyhzr银箭')) {
            			trigger.nature = 'fire';
            		}
            		else {
            			trigger.nature = 'thunder';
            		}
            		trigger.player.discard(trigger.player.get('e'));
            	},
            	check: function (event, player) {
            		if (player.identity == event.player.identity) return false;
            		if (event.player.identity == 'zhu' && player.identity == 'zhong') return false;
            		if (player.identity == 'zhu' && event.player.identity == 'zhong') return false;
            		return true;
            	},
            },
            "nyhzr乱刃影舞": {
            	nobracket: true,
            	unique: true,
            	trigger: {
            		player: "dyingBegin",
            	},
            	mark: true,
            	skillAnimation: true,
            	animationStr: "乱刃影舞",
            	animationColor: "thunder",
            	init: function (player) {
            		player.storage.nyhzr乱刃影舞 = false;
            	},
            	filter: function (event, player) {
            		if (player.storage.nyhzr乱刃影舞) return false;
            		return true;
            	},
            	content: function () {
            		if (player.hasSkill('nyhzr勾玉魂刀') && !player.hasSkill('nyhzr勾玉魂刀2')) player.addSkill('nyhzr勾玉魂刀2');
            		player.awakenSkill('nyhzr乱刃影舞');
            		player.storage.nyhzr乱刃影舞 = true;
            		player.recover();
            		for (i = 0; i < 3; i++) {
            			player.useCard({
            				name: 'sha'
            			}, game.players.randomGet());
            		};
            	},
            	intro: {
            		content: "limited",
            	},
            },
			"ly_junshenbao_sociatyBeast_fuxi_longzhi": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				init: function (player) {
					player.storage.ly_junshenbao_sociatyBeast_fuxi_longzhi = [];
				},
				intro: {
					content: "cards",
				},
				marktext: "<span style=\"color: gold\">章</span>",
				trigger: {
					player: "phaseDrawBegin",
				},
				forced: true,
				content: function () {
					trigger.num += Math.min(3, player.storage.ly_junshenbao_sociatyBeast_fuxi_longzhi.length);
				},
				ai: {
					moreDraw: true,
					threaten: 2,
				},
				global: "ly_junshenbao_sociatyBeast_fuxi_longzhi_gain",
			},
			"ly_junshenbao_sociatyBeast_fuxi_longzhi_gain": {
				locked: true,
				popup: false,
				silent: true,
				enable: "phaseUse",
				usable: 1,
				line: false,
				filter: function (event, player) {
					if(game.countPlayer(function(current){
						return current.hasSkill("ly_junshenbao_sociatyBeast_fuxi_longzhi")&&current.getFriends().contains(player);
					})==0) return false;
					return player.countCards('h', {
						type: "trick"
					}) > 0;
				},
				filterTarget: function (card, player, target) {
					if (player.getEnemies().contains(target)) return false;
					return target.hasSkill("ly_junshenbao_sociatyBeast_fuxi_longzhi");
				},
				filterCard: function (card) {
					return get.type(card) == "trick";
				},
				check: function (card) {
					if (card.name == "wanjian" || card.name == "juedou" || card.name == "wuzhong" || card.name == "zengbing" || card.name == "nanman" || card.name == "guohe" || card.name == "shunshou" || card.name == "yuanjiao" || card.name == "yiyi") return 100;
					return 8 - get.value(card);
				},
				discard: false,
				prepare: "give",
				content: function () {
					"step 0"
					player.line(target, ["fire", "thunder", "green", "white"].randomGet());
					target.logSkill("ly_junshenbao_sociatyBeast_fuxi_longzhi");
					if (target.storage.ly_junshenbao_sociatyBeast_fuxi_longzhi.length > 4) {
						player.gain(cards);
						player.$gain(cards);
						game.log(target, "<span style=\"color: red\">\"章\"数已达上限</span>");
						event.finish();
					}
					"step 1"
					target.storage.ly_junshenbao_sociatyBeast_fuxi_longzhi = target.storage.ly_junshenbao_sociatyBeast_fuxi_longzhi.concat(cards);
					target.syncStorage('ly_junshenbao_sociatyBeast_fuxi_longzhi');
					target.markSkill('ly_junshenbao_sociatyBeast_fuxi_longzhi');
					game.log(player, '将', cards, '置于', target, '武将牌上作为“章”');
					"step 2"
					player.draw();
				},
				ai: {
					threaten: 2,
					order: 9,
					result: {
						player: function (player, target) {
							if (player.getEnemies().contains(target)) {
								if (player.hp < 3) return 1;
								return -1;
							}
							return 1;
						},
					},
				},
			},
			"ly_junshenbao_sociatyBeast_fuxi_lingjie": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				enable: "chooseToUse",
				unique: true,
				init: function (player) {
					player.storage.ly_junshenbao_sociatyBeast_fuxi_lingjie = [];
				},
				filter: function (event, player) {
					return player.storage.ly_junshenbao_sociatyBeast_fuxi_longzhi.length > 0;
				},
				chooseButton: {
					dialog: function (event, player) {
						return ui.create.dialog('灵碣', player.storage.ly_junshenbao_sociatyBeast_fuxi_longzhi, 'hidden');
					},
					filter: function (button, player) {
						var evt = _status.event.getParent();
						if (player.storage.ly_junshenbao_sociatyBeast_fuxi_lingjie && player.storage.ly_junshenbao_sociatyBeast_fuxi_lingjie.contains(button.link)) {
							return false;
						}
						if (evt && evt.filterCard) {
							return evt.filterCard(button.link, player, evt);
						}
						return true;
					},
					check: function (button) {
						if (button.link.name == 'du') return -2;
						var player = _status.event.player;
						if (button.link.name == 'xingjiegoutong' && player.countCards('h') > 1) return -2;
						if (get.select(get.info(button.link).selectTarget)[1] == -1) {
							if (get.type(button.link) == 'delay') return -1;
							if (get.type(button.link) == 'equip') {
								var current = player.getCards('e', {
									subtype: get.subtype(button.link)
								})[0];
								if (current && get.equipValue(current) >= get.equipValue(button.link)) return -1;
								return 1;
							}
							if (get.tag(button.link, 'multitarget')) return -1;
							if (button.link.name == 'huoshaolianying') return -1;
						}
						if (button.link.name == 'jiu') {
							if (get.effect(player, {
								name: 'jiu'
							}, player) > 0) {
								return 1;
							}
							return -1;
						}
						return 1;
					},
					backup: function (links, player) {
						return {
							filterCard: function () {
								return true
							},
							selectCard: 1,
							viewAs: links[0],
							onuse: function (result, player) {
								player.logSkill('ly_junshenbao_sociatyBeast_fuxi_lingjie');
								if (!player.storage.ly_junshenbao_sociatyBeast_fuxi_lingjie) player.storage.ly_junshenbao_sociatyBeast_fuxi_lingjie = [];
								player.storage.ly_junshenbao_sociatyBeast_fuxi_lingjie.push(result.card);
								if (player.hasSkill("sky")) player.draw();
							}
						}
					},
					prompt: function (links, player) {
						return '选择' + get.translation(links) + '的目标';
					},
				},
				ai: {
					threaten: 2.1,
					order: 6,
					result: {
						player: function (player) {
							if (_status.event.dying) return get.attitude(player, _status.event.dying);
							return 1;
						},
					},
					useful: -1,
					value: -1,
				},
				group: "ly_junshenbao_sociatyBeast_fuxi_lingjie_delete",
				subSkill: {
					delete: {
						popup: false,
						forced: true,
						trigger: {
							global: "phaseEnd",
						},
						content: function () {
							delete player.storage.ly_junshenbao_sociatyBeast_fuxi_lingjie;
						},
						sub: true,
					},
				},
			},
			"ly_junshenbao_sociatyBeast_fuxi_feizhang": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				trigger: {
					player: "useCard",
				},
				usable: 1,
				direct: true,
				filter: function (event, player) {
					return get.type(event.card) == "trick" && event.targets.length > 0;
				},
				content: function () {
					"step 0"
					player.chooseTarget("<span style=\"color: red\">斐章</span>:是否指定1名不是" + get.translation(trigger.card) + "目标的其他角色成为此牌<span style=\"color: red\">额外目标</span>", function (card, player, target) {
						var trigger = _status.event.getTrigger();
						return target != trigger.targets[0];
					}).set('autodelay', true).set('ai', function (target) {
						var trigger = _status.event.getTrigger();
						var player = _status.event.player;
						return get.effect(target, trigger.card, player, player);
					});
					"step 1"
					if (result.bool) {
						player.logSkill("ly_junshenbao_sociatyBeast_fuxi_feizhang", result.targets);
						event.targets = result.targets[0];
						player.line(event.targets, ["fire", "thunder", "green", "white"].randomGet());
						trigger.targets.push(event.targets);
						game.log(event.targets, "<span style=\"color: red\">成为</span>", trigger.card, "<span style=\"color: red\">额外目标</span>");
					}
				},
				ai: {
					threaten: 2,
				},
			},
			"ly_junshenbao_sociatyBeast_fuxi_bowen": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				init: function (player) {
					player.storage.ly_junshenbao_sociatyBeast_fuxi_bowen = 0;
				},
				popup: false,
				forced: true,
				trigger: {
					player: "useCard",
				},
				filter: function (event, player) {
					return get.type(event.card) == "trick";
				},
				content: function () {
					player.storage.ly_junshenbao_sociatyBeast_fuxi_bowen++;
				},
				mod: {
					maxHandcard: function (player, num) {
						return num += player.storage.ly_junshenbao_sociatyBeast_fuxi_bowen;
					},
				},
				group: ["ly_junshenbao_sociatyBeast_fuxi_bowen_delete", "ly_junshenbao_sociatyBeast_fuxi_bowen_effect"],
				subSkill: {
					delete: {
						popup: false,
						forced: true,
						trigger: {
							player: "phaseEnd",
						},
						content: function () {
							player.storage.ly_junshenbao_sociatyBeast_fuxi_bowen -= player.storage.ly_junshenbao_sociatyBeast_fuxi_bowen;
						},
						sub: true,
					},
					effect: {
						popup: false,
						forced: true,
						trigger: {
							player: "phaseDiscardBegin",
						},
						content: function () {
							player.logSkill("ly_junshenbao_sociatyBeast_fuxi_bowen");
						},
						sub: true,
					},
				},
			},
			"ly_junshenbao_sociatyBeast_baxia_longxuan": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				init: function (player) {
					player.storage.ly_junshenbao_sociatyBeast_baxia_longxuan = [];
				},
				intro: {
					content: "cards",
				},
				marktext: "<span style=\"color: gold\">铭</span>",
				trigger: {
					player: "phaseDrawBegin",
				},
				forced: true,
				content: function () {
					trigger.num--;
				},
				mod: {
					maxHandcard: function (player, num) {
						return num - player.storage.ly_junshenbao_sociatyBeast_baxia_longxuan.length;
					},
				},
				global: "ly_junshenbao_sociatyBeast_baxia_longxuan_gain",
			},
			"ly_junshenbao_sociatyBeast_baxia_longxuan_gain": {
				locked: true,
				popup: false,
				silent: true,
				enable: "phaseUse",
				usable: 1,
				line: false,
				filter: function (event, player) {
					if(game.countPlayer(function(current){
						return current.hasSkill("ly_junshenbao_sociatyBeast_baxia_longxuan")&&current.getFriends().contains(player);
					})==0) return false;
					return player.countCards('h', {
						type: "trick"
					}) > 0;
				},
				filterTarget: function (card, player, target) {
					if (player == target) return false;
					if (player.getEnemies().contains(target)) return false;
					return target.hasSkill("ly_junshenbao_sociatyBeast_baxia_longxuan");
				},
				filterCard: function (card) {
					return get.type(card) == "trick";
				},
				discard: false,
				prepare: "give",
				content: function () {
					"step 0"
					player.line(target, ["fire", "thunder", "green", "white"].randomGet());
					target.logSkill("ly_junshenbao_sociatyBeast_baxia_longxuan");
					target.storage.ly_junshenbao_sociatyBeast_baxia_longxuan = target.storage.ly_junshenbao_sociatyBeast_baxia_longxuan.concat(cards);
					target.syncStorage('ly_junshenbao_sociatyBeast_baxia_longxuan');
					target.markSkill('ly_junshenbao_sociatyBeast_baxia_longxuan');
					game.log(player, '将', cards, '置于', target, '武将牌上作为“铭”');
					"step 1"
					player.recover();
					target.gainMaxHp();
				},
				ai: {
					threaten: 2,
					order: 9,
					result: {
						player: function (player, target) {
							if (player.getEnemies().contains(target)) {
								if (player.hp < 3) return 1;
								return -1;
							}
							return 1;
						},
					},
				},
			},
			"ly_junshenbao_sociatyBeast_baxia_lingxi": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				forced: true,
				unique: true,
				trigger: {
					player: "damageEnd",
				},
				filter: function (event, player) {
					return event.num > 0 && player.storage.ly_junshenbao_sociatyBeast_baxia_longxuan.length > 0;
				},
				content: function () {
					'step 0'
					event.num = trigger.num;
					'step 1'
					player.chooseCardButton('<span style=\"color: red\">弃置1张"铭"</span>', true, player.storage.ly_junshenbao_sociatyBeast_baxia_longxuan);
					'step 2'
					var card = result.links[0];
					player.storage.ly_junshenbao_sociatyBeast_baxia_longxuan.remove(card);
					card.discard();
					player.$throw(card);
					game.log(player, '将', card, '置入弃牌堆');
					player.syncStorage('ly_junshenbao_sociatyBeast_baxia_longxuan');
					if (player.storage.ly_junshenbao_sociatyBeast_baxia_longxuan.length == 0) {
						player.unmarkSkill('ly_junshenbao_sociatyBeast_baxia_longxuan');
					}
					player.loseMaxHp();
					'step 3'
					game.countPlayer(function (current) {
						if (player.getFriends().contains(current) || current == player) {
							player.line(current, ["fire", "thunder", "green", "white"].randomGet());
							if (player.hasSkill("sea")) current.draw(2);
							else current.draw();
						}
					});
					'step 4'
					event.num--;
					if (event.num > 0) event.goto(1);
				},
				ai: {
					threaten: 2,
					maixie: true,
						"maixie_hp": true,
					effect: {
						target: function (card, player, target) {
							if (get.tag(card, 'damage')) {
								if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
								if (target.storage.ly_junshenbao_sociatyBeast_baxia_longxuan.length == 0) return;
								if (!target.hasFriend()) return;
								var num = 1;
								if (get.attitude(player, target) > 0) {
									if (player.needsToDiscard()) {
										num = 0.7;
									}
									else {
										num = 0.5;
									}
								}
								if (target.hp >= 4) return [1, num * 2];
								if (target.hp == 3) return [1, num * 1.5];
								if (target.hp == 2) return [1, num * 0.5];
							}
						},
					},
				},
			},
			"ly_junshenbao_sociatyBeast_baxia_shuliu": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				forced: true,
				unique: true,
				trigger: {
					player: "useCardAfter",
				},
				filter: function (event, player) {
					return get.type(event.card) == "trick";
				},
				content: function () {
					var card = trigger.card;
					player.$gain(card);
					player.storage.ly_junshenbao_sociatyBeast_baxia_longxuan = player.storage.ly_junshenbao_sociatyBeast_baxia_longxuan.concat(card);
					player.syncStorage('ly_junshenbao_sociatyBeast_baxia_longxuan');
					player.markSkill('ly_junshenbao_sociatyBeast_baxia_longxuan');
					game.log(player, '将', card, '置于武将牌上作为“铭”');
					player.gainMaxHp();
				},
			},
			"ly_junshenbao_sociatyBeast_baxia_jienu": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				forced: true,
				unique: true,
				trigger: {
					player: "phaseUseBegin",
				},
				filter: function (event, player) {
					return player.storage.ly_junshenbao_sociatyBeast_baxia_longxuan.length >= 7;
				},
				content: function () {
					"step 0"
					event.num = player.storage.ly_junshenbao_sociatyBeast_baxia_longxuan.length;
					"step 1"
					if (event.num > 0) {
						player.recover();
						player.damage();
						event.num--;
						event.redo();
					}
				},
				ai: {
					moreDraw: true,
					threaten: 2,
				},
			},
			"ly_junshenbao_sociatyBeast_bian_longshi": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				forced: true,
				init: function (player) {
					player.storage.ly_junshenbao_sociatyBeast_bian_longshi = 0;
				},
				trigger: {
					global: "useCard",
				},
				filter: function (event, player) {
					if (player.storage.ly_junshenbao_sociatyBeast_bian_longshi > 0) return false;
					if (get.type(event.card) != "basic") return false;
					if (event.targets.length < 1) return false;
					return true;
				},
				content: function () {
					"step 0"
					if (trigger.targets.length) {
						player.line(trigger.targets, ["fire", "thunder", "green", "white"].randomGet());
						for (var i = 0; i < trigger.targets.length; i++) {
							trigger.targets[i].draw();
						}
					}
					if (!player.hasSkill('land')) event.finish();
					"step 1"
					game.countPlayer(function (current) {
						if (player.getFriends().contains(current) || current == player) {
							player.line(current, ["fire", "thunder", "green", "white"].randomGet());
							current.draw();
						}
					});
				},
				group: ["ly_junshenbao_sociatyBeast_bian_longshi_judge", "ly_junshenbao_sociatyBeast_bian_longshi_clear"],
				subSkill: {
					judge: {
						popup: false,
						forced: true,
						trigger: {
							global: "damageEnd",
						},
						filter: function (event, player) {
							return event.num > 0;
						},
						content: function () {
							player.storage.ly_junshenbao_sociatyBeast_bian_longshi++;
						},
						sub: true,
					},
					clear: {
						popup: false,
						forced: true,
						trigger: {
							global: "phaseEnd",
						},
						content: function () {
							if (player.storage.ly_junshenbao_sociatyBeast_bian_longshi > 0) player.storage.ly_junshenbao_sociatyBeast_bian_longshi -= player.storage.ly_junshenbao_sociatyBeast_bian_longshi;
						},
						sub: true,
					},
				},
				ai: {
					moreDraw: true,
					threaten: 2,
				},
			},
			"ly_junshenbao_sociatyBeast_bian_songyan": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				forced: true,
				init: function (player) {
					player.storage.ly_junshenbao_sociatyBeast_bian_songyan = 0;
				},
				trigger: {
					global: "useCard",
				},
				filter: function (event, player) {
					if (player.storage.ly_junshenbao_sociatyBeast_bian_songyan > 0) return false;
					if (get.type(event.card) != "trick") return false;
					if (event.targets.length < 1) return false;
					return true;
				},
				content: function () {
					"step 0"
					if (trigger.targets.length) {
						player.line(trigger.targets, ["fire", "thunder", "green", "white"].randomGet());
						for (var i = 0; i < trigger.targets.length; i++) {
							trigger.targets[i].draw();
						}
					}
					if (!player.hasSkill('land')) event.finish();
					"step 1"
					game.countPlayer(function (current) {
						if (player.getFriends().contains(current) || current == player) {
							player.line(current, ["fire", "thunder", "green", "white"].randomGet());
							current.draw();
						}
					});
				},
				group: ["ly_junshenbao_sociatyBeast_bian_songyan_judge", "ly_junshenbao_sociatyBeast_bian_songyan_clear"],
				subSkill: {
					judge: {
						popup: false,
						forced: true,
						trigger: {
							global: "damageEnd",
						},
						filter: function (event, player) {
							return event.num > 0;
						},
						content: function () {
							player.storage.ly_junshenbao_sociatyBeast_bian_songyan++;
						},
						sub: true,
					},
					clear: {
						popup: false,
						forced: true,
						trigger: {
							global: "phaseEnd",
						},
						content: function () {
							if (player.storage.ly_junshenbao_sociatyBeast_bian_songyan > 0) player.storage.ly_junshenbao_sociatyBeast_bian_songyan -= player.storage.ly_junshenbao_sociatyBeast_bian_songyan;
						},
						sub: true,
					},
				},
				ai: {
					moreDraw: true,
					threaten: 2,
				},
			},
			"ly_junshenbao_sociatyBeast_bian_suwei": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				forced: true,
				trigger: {
					global: "useCard",
				},
				filter: function (event, player) {
					if (!player.getEnemies().contains(event.player)) return false;
					if (!event.targets.contains(player)) return false;
					if (_status.currentPhase != event.player) return false;
					return true;
				},
				content: function () {
					player.discardPlayerCard('h', trigger.player, true);
				},
				ai: {
					threaten: 2,
				},
			},
			"ly_junshenbao_sociatyBeast_bian_hualao": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				forced: true,
				trigger: {
					global: ["gameStart", "changeHp"],
					player: "enterGame",
				},
				filter: function (event, player) {
					var num = game.countPlayer(function (current) {
						return player.getFriends().contains(current) && current.hp;
					});
					if (event.player) {
						if (!player.getFriends().contains(event.player)) return false;
					}
					if (num == 0) return false;
					if (num <= 3) return true;
					return false;
				},
				content: function () {
					game.countPlayer(function (current) {
						if (player.getFriends().contains(current)) {
							player.line(current, ["fire", "thunder", "green", "white"].randomGet());
							current.addSkill("ly_junshenbao_sociatyBeast_bian_hualao_protect");
						}
					});
				},
				group: "ly_junshenbao_sociatyBeast_bian_hualao_clear",
				subSkill: {
					protect: {
						mod: {
							targetEnabled: function (card, player, target) {
								if (player.getEnemies().contains(target)) return false;
							},
						},
						sub: true,
					},
					clear: {
						popup: false,
						forced: true,
						trigger: {
							global: ["gameStart", "changeHp"],
							player: ["enterGame", "dieBegin"],
						},
						filter: function (event, player) {
							var num = game.countPlayer(function (current) {
								return player.getFriends().contains(current) && current.hp;
							});
							if (num > 3) return true;
							return false;
						},
						content: function () {
							game.countPlayer(function (current) {
								if (player.getFriends().contains(current)) {
									current.removeSkill("ly_junshenbao_sociatyBeast_bian_hualao_protect");
								}
							});
						},
						sub: true,
					},
				},
				ai: {
					threaten: 2,
				},
			},
			"ly_junshenbao_sociatyBeast_pulao_longhou": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				forced: true,
				trigger: {
					player: "phaseEnd",
				},
				content: function () {
					var list = game.filterPlayer(function (current) {
						return player.canUse('wanjian', current);
					});
					list.sort(lib.sort.seat);
					player.useCard({
						name: 'wanjian'
					}, list);
				},
				ai: {
					threaten: 2,
				},
			},
			"ly_junshenbao_sociatyBeast_pulao_qiejing": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				forced: true,
				trigger: {
					global: "useCard",
				},
				filter: function (event, player) {
					return event.targets.length > 2;
				},
				content: function () {
					"step 0"
					player.chooseToDiscard('he', true);
					player.loseHp();
					"step 1"
					if (player.hasSkill("sea")) player.draw();
				},
			},
			"ly_junshenbao_sociatyBeast_pulao_mingyin": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				forced: true,
				priority: -100,
				trigger: {
					source: "damageBegin",
				},
				content: function () {
					player.line(trigger.player, ["fire", "thunder", "green", "white"].randomGet());
					var num = trigger.num;
					trigger.cancel();
					trigger.player.loseHp(num);
				},
				ai: {
					jueqing: true,
				},
			},
			"ly_junshenbao_sociatyBeast_pulao_duyuan": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				forced: true,
				trigger: {
					source: "damageBefore",
				},
				priority: 100,
				content: function () {
					player.line(trigger.player, ["fire", "thunder", "green", "white"].randomGet());
					trigger.num++;
				},
				mod: {
					playerEnabled: function (card, player, target) {
						if (player.getFriends().contains(target)) return false;
					},
				},
				ai: {
					threaten: 2,
				},
			},
			"ly_junshenbao_sociatyBeast_chaofeng_longlin": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				enable: "phaseUse",
				usable: 1,
				filter: function (event, player) {
					return player.countCards('h', {
						subtype: "equip2"
					}) > 0;
				},
				filterCard: function (card) {
					return get.subtype(card) == "equip2";
				},
				discard: false,
				prepare: "throw",
				content: function () {
					"step 0"
					player.lose(cards[0], ui.special)._triggered = null;
					"step 1"
					game.countPlayer(function (current) {
						if ((current == player || player.getFriends().contains(current)) && current.isDamaged()) {
							player.line(current, ["fire", "thunder", "green", "white"].randomGet());
							current.recover();
						}
					});
					if (!player.hasSkill("sky")) event.finish();
					"step 2"
					game.countPlayer(function (current) {
						if (current == player || player.getFriends().contains(current)) {
							var list = [];
							list.push("bagua");
							list.push("tengjia");
							list.push("baiyin");
							list.push("renwang");
							var link = list.randomGet();
							var card = game.createCard({
								name: link
							});
							current.equip(card);
						}
					});
				},
				ai: {
					order: 4,
					threaten: 2,
					result: {
						player: 1,
					},
					effect: {
						target: function (card, player, target) {
							if (player == target && get.subtype(card) == 'equip2') {
								if (get.equipValue(card) <= 7.5) return 0;
							}
							if (target.getEquip(2)) return;
							return lib.skill.bagua_skill.ai.effect.target.apply(this, arguments);
						},
					},
				},
			},
			"ly_junshenbao_sociatyBeast_chaofeng_zhijiao": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				enable: "phaseUse",
				usable: 1,
				line: false,
				filter: function (event, player) {
					return player.countCards('h', {
						subtype: "equip3"
					}) > 0 || player.countCards('h', {
						subtype: "equip4"
					}) > 0;
				},
				filterCard: function (card) {
					return get.subtype(card) == "equip3" || get.subtype(card) == "equip4";
				},
				discard: false,
				prepare: "give",
				filterTarget: function (card, player, target) {
					return target != player && (!target.get("e", "3") || !target.get("e", "4"));
				},
				content: function () {
					"step 0"
					player.line(target, ["fire", "thunder", "green", "white"].randomGet());
					target.equip(cards[0]);
					"step 1"
					player.gain(get.cardPile(function (card) {
						return get.color(card) == 'red';
					}), 'gain2');
					"step 2"
					target.gain(get.cardPile(function (card) {
						return get.color(card) == 'red';
					}), 'gain2');
				},
				ai: {
					order: 10,
					threaten: 2,
					result: {
						target: 1,
					},
				},
			},
			"ly_junshenbao_sociatyBeast_chaofeng_zhixie": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				trigger: {
					global: "phaseEnd",
				},
				filter: function (event, player) {
					return event.player != player && !event.player.getStat('damage');
				},
				direct: true,
				content: function () {
					"step 0"
					player.chooseTarget('<span style=\"color: red\">止邪:是否获得场上1张装备牌</span>', function (card, player, target) {
						return target.countCards('e') > 0;
					}).set('ai', function (target) {
						if (player.getFriends().contains(target)) {
							if (target.isDamaged() && target.getEquip('baiyin')) return 10;
							if (target.hasSkillTag("equipDraw")) return 9;
							return false;
						}
						if (player.getEnemies().contains(target)) {
							if (!target.hasSkillTag("equipDraw")) {
								if (target.isDamaged() && target.countCards('e') < 1 && target.getEquip("baiyin")) return false;
								return 11;
							}
							return false;
						}
						return false;
					});
					"step 1"
					if (result.bool) {
						var target = result.targets[0];
						player.line(target, ["fire", "thunder", "green", "white"].randomGet());
						player.logSkill("ly_junshenbao_sociatyBeast_chaofeng_zhixie", target);
						player.gainPlayerCard('e', target, true);
					}
				},
			},
			"ly_junshenbao_sociatyBeast_chaofeng_haoxian": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				forced: true,
				trigger: {
					player: "phaseEnd",
				},
				filter: function (event, player) {
					var num = game.countPlayer(function (current) {
						return player.getEnemies().contains(current) && current.countCards('e');
					});
					if (num >= 4) return true;
					return false;
				},
				content: function () {
					"step 0"
					event.num = game.countPlayer(function (current) {
						return player.getEnemies().contains(current) && current.countCards('e');
					});
					game.countPlayer(function (current) {
						if (player.getEnemies().contains(current) && current.countCards('e') > 0) {
							var card = current.getCards('e');
							current.discard(card);
						}
					});
					"step 1"
					player.draw(event.num);
				},
				ai: {
					moreDraw: true,
					threaten: 2,
				},
			},
			"ly_junshenbao_sociatyBeast_yazi_longlie": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				forced: true,
				trigger: {
					player: "shaBegin",
				},
				content: function () {
					if (!player.hasSkill("land")) trigger.directHit = true;
					else player.addTempSkill("ly_junshenbao_sociatyBeast_yazi_longlie_damage", {
						player: "shaAfter"
					});
				},
				subSkill: {
					damage: {
						popup: false,
						forced: true,
						trigger: {
							source: "damageBegin",
						},
						filter: function (event) {
							return event.card && event.card.name == "sha";
						},
						content: function () {
							trigger.num++;
							game.log(player, "<span style=\"color: red\">龙烈技能效果生效，此杀伤害+1</span>");
						},
						sub: true,
					},
				},
				ai: {
					shaHit: true,
					threaten: 2,
				},
			},
			"ly_junshenbao_sociatyBeast_yazi_chaiyue": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				forced: true,
				trigger: {
					player: "useCard",
				},
				filter: function (event, player) {
					return event.card.name == "sha";
				},
				content: function () {
					game.countPlayer(function (current) {
						if (player.getEnemies().contains(current) && !trigger.targets.contains(current)) {
							player.line(current, ["fire", "thunder", "green", "white"].randomGet());
							trigger.targets.push(current);
						}
					});
				},
			},
			"ly_junshenbao_sociatyBeast_yazi_langri": {
				nobracket: true,
				mod: {
					targetInRange: function (card, player, target, now) {
						if (card.name == 'sha') return true;
					},
				},
				ai: {
					unequip: true,
					skillTagFilter: function (player, tag, arg) {
						if (arg && arg.name == 'sha' && player.hasSkill && player.hasSkill("land")) return true;
						return false;
					},
				},
			},
			"ly_junshenbao_sociatyBeast_yazi_bibao": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				forced: true,
				trigger: {
					player: "phaseBegin",
				},
				content: function () {
					"step 0"
					player.loseHp();
					event.targets = game.filterPlayer(function (current) {
						return player.getEnemies().contains(current) && player.canUse({
							name: "sha"
						}, current);
					}).sortBySeat();
					"step 1"
					if (event.targets.length) {
						var target = event.targets.randomGet();
						player.line(target, ["fire", "thunder", "green", "white"].randomGet());
						player.useCard({
							name: "sha"
						}, target, false);
					}
					game.delay(0.5);
				},
			},
			"ly_junshenbao_sociatyBeast_chiwen_longao": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				trigger: {
					global: ["gameStart", "phaseBefore"],
					player: "enterGame",
				},
				popup: false,
				forced: true,
				content: function () {
					game.countPlayer(function (current) {
						if (player.getFriends().contains(current) && !current.hasSkill("ly_junshenbao_sociatyBeast_chiwen_longao_cancel")) {
							current.addSkill("ly_junshenbao_sociatyBeast_chiwen_longao_cancel");
						}
					});
				},
				subSkill: {
					cancel: {
						popup: false,
						forced: true,
						trigger: {
							player: 'damageBefore'
						},
						filter: function (event) {
							if (!event.nature) return false;
							return true;
						},
						content: function () {
							game.log(player, "<span style=\"color: red\">龙鳌技能效果生效</span>");
							if (player.hasSkill("sea")) {
								trigger.num -= 2;
								game.log(player, "<span style=\"color: red\">受到伤害-2</span>");
							}
							else {
								trigger.num--;
								game.log(player, "<span style=\"color: red\">受到伤害-1</span>");
							}
						},
						ai: {
							nothunder: true,
							nofire: true,
							effect: {
								target: function (card, player, target, current) {
									if (get.tag(card, 'fireDamage') || get.tag(card, 'thunderDamage')) return 0;
								},
							},
						},
						sub: true,
					},
				},
			},
			"ly_junshenbao_sociatyBeast_chiwen_quyan": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				trigger: {
					global: "damageBegin",
				},
				forced: true,
				filter: function (event, player) {
					if (!event.nature) return false;
					if (player.hasSkill("sea") && player.getFriends().contains(event.source)) return true;
					if (!player.hasSkill("sea") && event.source == player) return true;
					return false;
				},
				content: function () {
					trigger.num++;
				},
				ai: {
					threaten: 2,
				},
			},
			"ly_junshenbao_sociatyBeast_chiwen_yuhuo": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				enable: ["chooseToRespond", "chooseToUse"],
				filterCard: function (card) {
					return get.suit(card) == 'diamond';
				},
				viewAs: {
					name: "sha",
					nature: "fire",
					suit: "heart",
					number: 7,
					viewAsFilter: function (player) {
						if (!player.countCards('h', {
							suit: 'diamond'
						})) return false;
					},
					prompt: "<span style=\"color: red\">将1张♢牌当火杀使用或打出</span>",
					check: function (card) {
						return 7 - get.value(card)
					},
					cards: [{
						"node": {
							"image": {},
							"info": {},
							"name": {},
							"name2": {},
							"background": {},
							"intro": {},
							"range": {}
						},
						"storage": {},
						"vanishtag": [],
						"_uncheck": [],
						"suit": "heart",
						"number": 7,
						"name": "tao",
						"cardid": "2759387371",
						"clone": {
							"name": "tao",
							"suit": "heart",
							"number": 7,
							"node": {
								"name": {},
								"info": {},
								"intro": {},
								"background": {},
								"image": {}
							},
							"_transitionEnded": true
						},
						"timeout": 1288,
						"original": "h"
					}],
				},
				sub: true,
				ai: {
					basic: {
						useful: [5, 1],
						value: [5, 1],
					},
					order: function () {
						if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
						return 3;
					},
					result: {
						target: function (player, target) {
							if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
								if (get.attitude(player, target) > 0) {
									return -6;
								}
								else {
									return -3;
								}
							}
							return -1.5;
						},
					},
					tag: {
						respond: 1,
						respondShan: 1,
						damage: function (card) {
							if (card.nature == 'poison') return;
							return 1;
						},
						natureDamage: function (card) {
							if (card.nature) return 1;
						},
						fireDamage: function (card, nature) {
							if (card.nature == 'fire') return 1;
						},
						thunderDamage: function (card, nature) {
							if (card.nature == 'thunder') return 1;
						},
						poisonDamage: function (card, nature) {
							if (card.nature == 'poison') return 1;
						},
					},
				},
				group: "ly_junshenbao_sociatyBeast_chiwen_yuhuo_tiesuo",
				subSkill: {
					tiesuo: {
						popup: false,
						enable: "phaseUse",
						line: false,
						discard: false,
						filter: function (event, player) {
							return player.countCards('he', {
								suit: 'diamond'
							}) > 0;
						},
						prompt: "<span style=\"color: red\">是否将1张黑色牌当\"铁索连环\"使用</span>",
						prepare: "throw",
						position: "h",
						filterCard: {
							color: "black",
						},
						selectTarget: [1, 2],
						filterTarget: function (card, player, target) {
							return lib.filter.targetEnabled({
								name: 'tiesuo'
							}, player, target);
						},
						check: function (card) {
							return 7 - get.value(card);
						},
						content: function () {
							player.logSkill("ly_junshenbao_sociatyBeast_chiwen_yuhuo", target);
							player.line(target, ["fire", "thunder", "green", "white"].randomGet());
							var next = player.useCard({
								name: 'tiesuo'
							}, target, cards);
							next.animate = false;
							next.audio = false;
						},
						ai: {
							threaten: 2,
							result: {
								target: function (player, target) {
									if (target.isLinked()) return 1;
									return get.effect(target, {
										name: 'tiesuo'
									}, player, target);
								},
							},
							order: 9,
						},
						sub: true,
					},
				},
			},
			"ly_junshenbao_sociatyBeast_chiwen_fubing": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				forced: true,
				trigger: {
					player: "phaseUseBegin",
				},
				content: function () {
					"step 0"
					event.targets = game.filterPlayer(function (current) {
						return player.getEnemies().contains(current) && !current.isLinked();
					}).sortBySeat();
					"step 1"
					if (event.targets.length) {
						var target = event.targets.randomGet();
						player.line(target, ["fire", "thunder", "green", "white"].randomGet());
						target.link();
					}
					game.delay(0.5);
					"step 2"
					event.targets = game.filterPlayer(function (current) {
						return player.getFriends().contains(current) && current.isLinked();
					}).sortBySeat();
					"step 3"
					if (event.targets.length) {
						var target = event.targets.randomGet();
						player.line(target, ["fire", "thunder", "green", "white"].randomGet());
						target.link();
					}
					game.delay(0.5);
				},
			},
			"ly_junshenbao_sociatyBeast_suanni_longzhen": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				forced: true,
				trigger: {
					global: "gainEnd",
				},
				usable: 1,
				filter: function (event, player) {
					if (!player.getFriends().contains(event.player)) return false;
					if (_status.currentPhase == event.player) return false;
					return true;
				},
				content: function () {
					var target = trigger.player;
					player.line(target, ["fire", "thunder", "green", "white"].randomGet());
					target.draw(2);
				},
				ai: {
					threaten: 2,
				},
			},
			"ly_junshenbao_sociatyBeast_suanni_ruiyan": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				forced: true,
				trigger: {
					player: "phaseEnd",
				},
				content: function () {
					if (player.hasSkill("land")) player.draw(3);
					else player.draw(1);
				},
				ai: {
					threaten: 2,
					moreDraw: true,
				},
			},
			"ly_junshenbao_sociatyBeast_suanni_raoleng": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				enable: "phaseUse",
				line: false,
				usable: 2,
				filter: function (event, player) {
					return player.countCards('h') > 0;
				},
				selectTarget: 1,
				filterTarget: function (card, player, target) {
					return target != player;
				},
				filterCard: true,
				discard: false,
				prepare: "give",
				selectCard: 1,
				check: function (card) {
					return 8 - get.value(card);
				},
				content: function () {
					player.line(target, ["fire", "thunder", "green", "white"].randomGet());
					target.gain(cards, player);
				},
				ai: {
					order: 7,
					result: {
						target: 1,
					},
				},
			},
			"ly_junshenbao_sociatyBeast_suanni_xiangjin": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				enable: "phaseUse",
				usable: 1,
				line: false,
				filterTarget: function (card, player, target) {
					return target.countCards('h') != player.countCards('h');
				},
				selectTarget: 1,
				content: function () {
					player.line(target, ["fire", "thunder", "green", "white"].randomGet());
					var num = player.countCards('h');
					var nh = target.countCards('h');
					if (num < nh) target.chooseToDiscard(nh - num, true);
					else target.draw(num - nh);
				},
				ai: {
					order: 2,
					result: {
						target: function (player, target) {
							return player.countCards('h') - target.countCards('h');
						},
					},
					threaten: 2,
				},
			},
			"ly_junshenbao_sociatyBeast_qiuniu_jilv": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				forced: true,
				trigger: {
					global: "judgeEnd",
				},
				filter: function (event, player) {
					if (player.getEnemies().contains(event.player)) return false;
					if (get.owner(event.result.card)) {
						return false;
					}
					if (event.nogain && event.nogain(event.result.card)) {
						return false;
					}
					return true;
				},
				content: function () {
					player.gain(trigger.result.card);
					player.$gain2(trigger.result.card);
				},
			},
			"ly_junshenbao_sociatyBeast_qiuniu_heming": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				trigger: {
					global: ["phaseDrawSkipped", "phaseDrawCancelled", "phaseJudgeSkipped", "phaseJudgeCancelled", "phaseUseSkipped", "phaseUseCancelled", "phaseDiscardSkipped", "phaseDiscardCancelled"],
				},
				direct: true,
				filter: function (event, player) {
					return event.player != player;
				},
				content: function () {
					"step 0"
					player.chooseTarget("<span style=\"color: red\">和鸣:是否令1名角色摸1张牌</span>", function (card, player, target) {
						return true;
					}).set('ai', function (target) {
						if (player == target || player.getFriends().contains(target)) {
							if (!target.hasJudge("lebu")) {
								if (target.countCards('h') < 4) return 10;
								return 9;
							}
							return 5;
						}
						return false;
					});
					"step 1"
					if (result.bool) {
						var target = result.targets[0];
						player.logSkill("ly_junshenbao_sociatyBeast_qiuniu_heming", target);
						player.line(target, ["fire", "thunder", "green", "white"].randomGet());
						target.draw();
					}
				},
			},
			"ly_junshenbao_sociatyBeast_qiuniu_lige": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				trigger: {
					global: "judge",
				},
				direct: true,
				content: function () {
					"step 0"
					player.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + '，是否发动【<span style=\"color: red\">离歌</span>】？', 'he').ai = function (card) {
						var trigger = _status.event.parent._trigger;
						var player = _status.event.player;
						var result = trigger.judge(card) - trigger.judge(trigger.player.judging[0]);
						var attitude = ai.get.attitude(player, trigger.player);
						if (attitude == 0 || result == 0) return 0;
						if (attitude > 0) {
							return result;
						}
						else {
							return -result;
						}
					};
					"step 1"
					if (result.bool) {
						player.respond(result.cards, 'highlight');
					}
					else {
						event.finish();
					}
					"step 2"
					if (result.bool) {
						player.logSkill('ly_junshenbao_sociatyBeast_qiuniu_lige');
						player.$gain2(trigger.player.judging[0]);
						player.gain(trigger.player.judging[0]);
						trigger.player.judging[0] = result.cards[0];
						trigger.position.appendChild(result.cards[0]);
						game.log(trigger.player, '的判定牌改为', result.cards[0]);
					}
					"step 3"
					game.delay(2);
				},
				ai: {
					tag: {
						rejudge: 1,
					},
					threaten: 2,
				},
			},
			"ly_junshenbao_sociatyBeast_qiuniu_longxuan": {
				nobracket: true,
				audio: "ext:扩展ol:1",
				group: ["ly_junshenbao_sociatyBeast_qiuniu_longxuan_lebu", "ly_junshenbao_sociatyBeast_qiuniu_longxuan_bingliang"],
				subSkill: {
					lebu: {
						popup: false,
						enable: "phaseUse",
						usable: 1,
						line: false,
						discard: false,
						filter: function (event, player) {
							return player.countCards('he', {
								suit: 'diamond'
							}) > 0;
						},
						prompt: "<span style=\"color: red\">是否将1张♢牌当\"乐不思蜀\"使用</span>",
						prepare: "throw",
						position: "he",
						filterCard: {
							suit: "diamond",
						},
						filterTarget: function (card, player, target) {
							if (player == target) return false;
							return lib.filter.targetEnabled({
								name: 'lebu'
							}, player, target);
						},
						check: function (card) {
							return 7 - get.value(card);
						},
						content: function () {
							player.logSkill("ly_junshenbao_sociatyBeast_qiuniu_longxuan", target);
							player.line(target, ["fire", "thunder", "green", "white"].randomGet());
							var next = player.useCard({
								name: 'lebu'
							}, target, cards);
							next.animate = false;
							next.audio = false;
						},
						ai: {
							threaten: 2,
							result: {
								target: function (player, target) {
									return get.effect(target, {
										name: 'lebu'
									}, player, target);
								},
							},
							order: 9,
						},
						sub: true,
					},
					bingliang: {
						enable: "phaseUse",
						usable: 1,
						line: false,
						discard: false,
						filter: function (event, player) {
							if (!player.hasSkill("sky")) return false;
							return player.countCards('he', {
								suit: 'club'
							}) > 0;
						},
						prepare: "throw",
						position: "he",
						filterCard: {
							suit: "club",
						},
						prompt: "<span style=\"color: red\">是否将1张♧牌当\"兵粮寸断\"使用</span>",
						filterTarget: function (card, player, target) {
							if (player == target) return false;
							return lib.filter.targetEnabled({
								name: 'bingliang'
							}, player, target);
						},
						check: function (card) {
							return 7 - get.value(card);
						},
						content: function () {
							player.logSkill("ly_junshenbao_sociatyBeast_qiuniu_longxuan", target);
							player.line(target, ["fire", "thunder", "green", "white"].randomGet());
							var next = player.useCard({
								name: 'bingliang'
							}, target, cards);
							next.animate = false;
							next.audio = false;
						},
						ai: {
							threaten: 1.5,
							result: {
								target: function (player, target) {
									return get.effect(target, {
										name: 'bingliang'
									}, player, target);
								},
							},
							order: 9,
						},
						sub: true,
					},
				},
			},
			"land":{
				mark: true,
				marktext: "陆",
				intro: {
					content: "当前环境为<span style=\"color: yellow\">陆地</span>"
				},
			},
			"sea":{
				mark: true,
				marktext: "海",
				intro: {
					content: "当前环境为<span style=\"color: yellow\">海洋</span>"
				},
			},
			"sky":{
				mark: true,
				marktext: "天",
				intro: {
					content: "当前环境为<span style=\"color: yellow\">天空</span>"
				},
			},
		},
		translate: {
			"mnyhzr灭世魔星BOSS":"灭世魔星",
			"nyhzr小僵尸":"小僵尸",
            "nyhzr尸王降世BOSS":"尸王降世",
            "nyhzr尸王降世BOSS_info":"出牌阶段，你可以弃置一张手牌并对所有挑战者造成一点伤害，若如此做你与所有小僵尸恢复一点体力",
            "nyhzr亡者之碑BOSS":"亡者之碑",
            "nyhzr亡者之碑BOSS_info":"<span style=\"color:#EE7621\">被动：</span><br>游戏开始时，你放下亡者之碑，亡者之碑释放尸气，所有人无法重整",
            "nyhzr小僵尸BOSS":"小僵尸",
            "nyhzr小僵尸BOSS_info":"<span style=\"color:#EE7621\">被动：</span><br>回合结束阶段，若场上小僵尸数目不足三，你在亡者之碑附近召唤小僵尸至三只，每召唤一只小僵尸，第一阶段时间减少十秒",
            "nyhzr小僵尸BOSS_append":"<b><p align=center><span style=\"font-size:25px\">挑战规则</span></b><br><b><p align=center><span style=\"font-size:20px\">全部阶段</span></b><li>击杀小僵尸获得1-10个尸魂<li>尸魂达到100时，获得灭世魔星（武将）<li>当前拥有"+lib.config.尸魂+"个尸魂<br><b><p align=center><span style=\"font-size:20px\">第一阶段</span></b><li>灭世魔星处于无敌状态<li>灭世魔星处于潜行状态且无法使用除装备牌以外的牌<li>玩家的响应时间变为3秒<li>第一阶段持续四分钟，挑战者需要在灭世魔星召唤的僵尸群中生存下来<br></b><br><b><p align=center><span style=\"font-size:20px\">第二阶段</span></b><li>灭世魔星失去技能【小僵尸】和【潜行】，获得技能【生命凋零】和【尸王降世】，体力上限变为10，体力变为4+X，X为第一阶段召唤的小僵尸数（体力大于10的部分转化为护甲）<li>所有挑战者恢复两点体力并摸三张牌",
            "nyhzr迅猛":"迅猛",
            "nyhzr迅猛_info":"<span style=\"color:#EE7621\">被动：</span><br>出牌阶段，你使用的【杀】没有数量限制<br>摸牌阶段，你多摸一张牌",
            "nyhzr噬魂":"噬魂",
            "nyhzr噬魂_info":"<span style=\"color:#EE7621\">被动：</span><br>挑战模式下，你每次造成伤害后，第一阶段增加四秒",
			"mnyhzr灭世魔星BOSS": "灭世魔星",
			"nyhzr小僵尸": "小僵尸",
			"nyhzr火龙": "火龙",
			"nyhzr水龙": "水龙",
			"nyhzr雷龙": "雷龙",
			"nyhzr土龙": "土龙",
			"nyhzr木龙": "木龙",
			"nyhzr风龙": "风龙",
			"nyhzr冰龙": "冰龙",
			"lielongbinglongjia": "龙甲",
			"lielongbinglongjia_info": "锁定技，当你受到伤害前，伤害来源弃置所有手牌",
			"lielonghanxi": "寒袭",
			"lielonghanxi_info": "锁定技，回合开始前，你随机令一名其他角色翻面",
			"lielonghangu": "寒骨",
			"lielonghangu_info": "锁定技，回合开始结束后，场上所有翻面角色流失一点体力并弃置所有手牌；场上每有一名翻面角色，你恢复一点体力",
			"lielonghangu": "寒骨",
			"lielonghangu_info": "锁定技，回合开始结束后，场上所有翻面角色流失一点体力并弃置所有手牌；场上每有一名翻面角色，你恢复一点体力",
			"lielongyondong": "永冻",
			"lielongyondong_info": "限定技，出牌阶段，你可以令所有其他未翻面的角色翻面",
			"lielongfenglongjia": "龙甲",
			"lielongfenglongjia_info": "锁定技，当你受到属性伤害时，你对你的上家与下家个造成一点属性伤害（属性为你受到的伤害属性）",
			"lielongfengbao": "风暴",
			"lielongfengbao_info": "你可以将一张黑色牌当作雷杀使用或打出<br>锁定技，出牌阶段，你使用的【杀】没有数量限制",
			"lielongfengdun": "风盾",
			"lielongfengdun_info": "锁定技，你的防御距离+3",
			"lielongfengshi": "风矢",
			"lielongfengshi_info": "锁定技，你使用【万箭齐发】后，其他角色流失一点体力",
			"lielongmulongjia": "龙甲",
			"lielongmulongjia_info": "锁定技，你不会受到非火焰伤害，你受到的火焰伤害+1",
			"lielonglongxi": "龙息",
			"lielonglongxi_info": "锁定技，准备阶段，若你的体力值不大于5，你恢复1点体力；若你的体力值大于5，你令其他角色流失一点体力",
			"lielongduhua": "毒花",
			"lielongduhua_info": "结束阶段，你可以对一名角色造成一点伤害，然后你失去一点体力",
			"lielongshenggen": "生根",
			"lielongshenggen1": "生根",
			"lielongshenggen_info": "限定技，出牌阶段，你可以弃置所有手牌并令一名角色流失一点体力，然后你恢复两点体力，若如此做，回合结束阶段，你摸X张牌（X为发动【生根】时，【生根】目标的手牌数）",
			"lielongtulongjia": "龙甲",
			"lielongtulongjia_info": "锁定技，【南蛮入侵】和【万箭齐发】无法对你造成伤害；你流失体力时，流失量+1",
			"lielongmoyan": "魔岩",
			"lielongmoyan_info": "锁定技，当你受到雷属性伤害后，你摸一张牌，当你受到火属性伤害后，你弃置两张手牌",
			"lielonghuachen": "化尘",
			"lielonghuachen_info": "限定技，出牌阶段，你可以弃置一名角色手牌区和装备区内的所有牌，若如此做，你失去一点体力并对其造成一点伤害",
			"lielongdinu": "地怒",
			"lielongdinu_info": "锁定技，准备阶段，若你的体力值小于五，则视为你使用了1张【南蛮入侵】，然后你恢复一点体力",
			"lielonghuolongjia": "龙甲",
			"lielonghuolongjia_info": "锁定技，红桃【杀】对你无效，方片【杀】对你造成的伤害-1",
			"lielongweiyan": "威焰",
			"lielongweiyan_info": "锁定技，游戏开始时，你对所有其他角色造成一点火焰伤害",
			"lielongbaoyan": "爆炎",
			"lielongbaoyan_info": "回合开始阶段，你可以流失一点体力并对一名角色造成三点火焰伤害，每回合限一次",
			"lielongshuilongjia": "龙甲",
			"lielongshuilongjia_info": "锁定技，当你受到火焰伤害时，伤害-1",
			"lielongshilan": "噬浪",
			"lielongshilan_info": "锁定技，其他角色的回合开始前，其须选择一项：<br>1.弃置一张手牌<br>2.流失一点体力",
			"lielongxuanwo": "漩涡",
			"lielongxuanwo_info": "当你改变体力时，你可以将一名角色的武将牌翻面并令其摸X张牌。X为其当前已损失体力值",
			"lielonghaige": "海歌",
			"lielonghaige_info": "锁定技，结束阶段，你视为使用了一张【桃】",
			"lielongjiliu": "激流",
			"lielongjiliu_info": "锁定技，当你于回合外失去手牌后，你获得一个【激流】标记<br>出牌阶段，你可以清空【激流】标记，然后对一名角色造成X点伤害。X为“激流”牌的数量",
			"lielongleilongjia": "龙甲",
			"lielongleilongjia_info": "锁定技，你免疫黑色卡牌造成的伤害（免疫后仍可触发【千鸟】）",
			"lielongjilei": "疾雷",
			"lielongjilei_info": "锁定技，摸牌阶段，你多摸X张牌，若此时你的手牌数大于2X，你可以跳过出牌阶段和弃牌阶段并视为对所有其他角色造成一点雷电伤害。X为你当前体力值",
			"lielongqianniao": "千鸟",
			"lielongqianniao_info": "当你于回合外受到伤害后，你可以弃两张手牌牌并对伤害来源造成两点雷电伤害",
			"lielongchaofu": "超伏",
			"lielongchaofu_info": "锁定技，准备阶段，若你的体力值为一，你视为对所有其他角色使用了一张【雷杀】，然后你恢复一点体力",
			"nyhzrlielong": "猎龙战役",
			"nyhzrlielong1": "规则：",
			"nyhzrlielong1_info": "每天猎杀不同的龙",
			"nyhzrlielong1_append": '若今天是：<li>周一，猎火龙（4）<li>周二，猎水龙（10）<li>周三，猎雷龙（5）<li>周四，猎土龙（20）<li>周五，猎木龙（5）<li>周六，猎风龙（8）<li>周日，猎冰龙（4）<br>重整回合数为X<br>X为龙后面小括号内的数<br><br>猎杀当天的龙或猎龙方全军覆没，游戏结束',
			"nyhzr_zq":'<span style="font-size:25px;">战旗BOSS</span>',
			"hnyhzr后羿Chessboss": "♜后羿",
			"gnyhzr宫本武藏Chessboss": "♜宫本武藏",
			"nyzhr逐阳Chessboss": "逐阳",
			"nyzhr逐阳Chessboss_info": "<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>你回合内的移动距离+3<br>出牌阶段，你可以移动两次",
			"nyhzr穿云箭Chessboss": "穿云箭",
			"nyhzr穿云箭Chessboss_info": "出牌阶段，你可以弃置一张【杀】并选择穿云箭的释放方向，被穿云箭击中的人会获得一个随机的负面效果，每回合限一次",
			"nyhzr剑客横行Chessboss1": "剑客横行",
			"nyhzr剑客横行Chessboss": "剑客横行",
			"nyhzr剑客横行Chessboss_info": "<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>回合结束后，你可以点击按钮移动（移动冷却：1s）<br>回合开始前，你移除按钮",
			"nyhzr千叶斩Chessboss": "千叶斩",
			"nyhzr千叶斩Chessboss_info": "出牌阶段，若你的手牌数大于装备区内的牌数，你可以在牌堆中获得一张【杀】并使用，此【杀】结算后，你弃置一张手牌。若你弃置手牌后，手牌数依然大于装备区内的牌数，你再使用一次【千叶斩】",
            "nyhzr燎火之箭":"燎火之箭",
            "nyhzr燎火之箭_info":"你造成伤害前，可以令伤害变为火属性伤害，同时弃置受伤角色装备区所有牌",
            "nyhzr乱刃影舞":"乱刃影舞",
            "nyhzr乱刃影舞_info":"限定技，你进入濒死阶段前,你可以恢复一点体力并对三个随机目标使用【杀】",
			"ly_junshenbao_sociatyBeast1":"<span style=\"color: yellow\">神</span><span style=\"color: red\">兽</span><span style=\"color: blue\">篇</span>",
			"ly_junshenbao_sociatyBeast_qiuniu":"囚牛",
			"ly_junshenbao_sociatyBeast_baxia":"赑屃",
			"ly_junshenbao_sociatyBeast_bian":"狴犴",
			"ly_junshenbao_sociatyBeast_chaofeng":"嘲风",
			"ly_junshenbao_sociatyBeast_chiwen":"螭吻",
			"ly_junshenbao_sociatyBeast_fuxi":"负屃",
			"ly_junshenbao_sociatyBeast_pulao":"蒲牢",
			"ly_junshenbao_sociatyBeast_yazi":"睚眦",
			"ly_junshenbao_sociatyBeast_suanni":"狻猊",
			"ly_junshenbao_sociatyBeast_fuxi_longzhi":"<span style=\"color: yellow\">龙识</span>",
			"ly_junshenbao_sociatyBeast_fuxi_longzhi_info":"<span style=\"color: red\"><li>友方角色出牌阶段限1次，若你\"章\"的数量不大于4张，其可以将1张非延时锦囊置于你的武将牌上，称为\"章\"，若如此做，其摸1张牌。<li>锁定技，摸牌阶段你额外摸X张牌(X为你\"章\"的数量且至多为3)。</span>",
			"ly_junshenbao_sociatyBeast_fuxi_longzhi_gain":"<span style=\"color: yellow\">龙识</span>",
			"ly_junshenbao_sociatyBeast_fuxi_longzhi_gain_info":"",
			"ly_junshenbao_sociatyBeast_fuxi_lingjie":"<span style=\"color: yellow\">灵碣</span>",
			"ly_junshenbao_sociatyBeast_fuxi_lingjie_info":"<span style=\"color: red\">出牌阶段，你可以将1张手牌当做一张\"章\"使用(每张\"章\"每回合限1次)，若当前环境为天空，你摸1张牌。</span>",
			"ly_junshenbao_sociatyBeast_fuxi_feizhang":"<span style=\"color: yellow\">斐章</span>",
			"ly_junshenbao_sociatyBeast_fuxi_feizhang_info":"<span style=\"color: red\">每回合限1次，你使用非延时锦囊指定目标后，你可以令1名不为此牌目标的角色成为此牌额外目标。</span>",
			"ly_junshenbao_sociatyBeast_fuxi_bowen":"<span style=\"color: yellow\">博文</span>",
			"ly_junshenbao_sociatyBeast_fuxi_bowen_info":"<span style=\"color: red\">锁定技，你每使用1张非延时锦囊牌，你的手牌上限+1直到你的回合结束。</span>",
			"ly_junshenbao_sociatyBeast_baxia_longxuan":"<span style=\"color: yellow\">龙玄</span>",
			"ly_junshenbao_sociatyBeast_baxia_longxuan_info":"<span style=\"color: red\"><li>其他友方角色出牌阶段限1次，其可以将1张非延时锦囊置于你的武将牌上，称为\"铭\"，若如此做其回复1点体力且你增加1点体力上限。<li>锁定技，摸牌阶段你摸牌数始终-1;你的手牌上限始终-X(X为你\"铭\"的数量)。</span>",
			"ly_junshenbao_sociatyBeast_baxia_longxuan_gain":"<span style=\"color: yellow\">龙玄</span>",
			"ly_junshenbao_sociatyBeast_baxia_longxuan_gain_info":"",
			"ly_junshenbao_sociatyBeast_baxia_lingxi":"<span style=\"color: yellow\">灵屃</span>",
			"ly_junshenbao_sociatyBeast_baxia_lingxi_info":"<span style=\"color: red\">锁定技，你每受到1点伤害，须弃置1张\"铭\"，失去1点体力上限并令全体友方角色摸1张牌，若当前环境为海洋，则改为摸2张牌。</span>",
			"ly_junshenbao_sociatyBeast_baxia_shuliu":"<span style=\"color: yellow\">疏流</span>",
			"ly_junshenbao_sociatyBeast_baxia_shuliu_info":"<span style=\"color: red\">锁定技，你使用的非延时锦囊结算后，你将此牌作为\"铭\"置于武将牌上并增加1点体力上限。</span>",
			"ly_junshenbao_sociatyBeast_baxia_jienu":"<span style=\"color: yellow\">介怒</span>",
			"ly_junshenbao_sociatyBeast_baxia_jienu_info":"<span style=\"color: red\">锁定技，出牌阶段开始时，若你\"铭\"的数量不小于7张，你回复等同于\"铭\"数量的体力值并对自己造成等量的伤害。</span>",
			"ly_junshenbao_sociatyBeast_bian_longshi":"<span style=\"color: yellow\">龙视</span>",
			"ly_junshenbao_sociatyBeast_bian_longshi_info":"<span style=\"color: red\">锁定技，其他角色成为基本牌的目标时，若当前回合未有角色受到过伤害，其摸1张牌，且若当前环境为陆地，你令全体友方角色各摸1张牌。</span>",
			"ly_junshenbao_sociatyBeast_bian_songyan":"<span style=\"color: yellow\">讼言</span>",
			"ly_junshenbao_sociatyBeast_bian_songyan_info":"<span style=\"color: red\">锁定技，其他角色成为非延时锦囊的目标时，若当前回合未有角色受到过伤害，其摸1张牌，且若当前环境为陆地，你令全体友方角色各摸1张牌。</span>",
			"ly_junshenbao_sociatyBeast_bian_suwei":"<span style=\"color: yellow\">肃威</span>",
			"ly_junshenbao_sociatyBeast_bian_suwei_info":"<span style=\"color: red\">锁定技，敌方角色于其回合内对你使用牌时，你弃置其1张手牌。</span>",
			"ly_junshenbao_sociatyBeast_bian_hualao":"<span style=\"color: yellow\">画牢</span>",
			"ly_junshenbao_sociatyBeast_bian_hualao_info":"<span style=\"color: red\">锁定技，当其他友方角色体力值总和不大于3点时，其他友方角色不能成为敌方角色使用牌的合法目标。</span>",
			"ly_junshenbao_sociatyBeast_pulao_longhou":"<span style=\"color: yellow\">龙吼</span>",
			"ly_junshenbao_sociatyBeast_pulao_longhou_info":"<span style=\"color: red\">锁定技，回合结束时，你视为使用1张\"万箭齐发\"。</span>",
			"ly_junshenbao_sociatyBeast_pulao_qiejing":"<span style=\"color: yellow\">怯鲸</span>",
			"ly_junshenbao_sociatyBeast_pulao_qiejing_info":"<span style=\"color: red\">锁定技，当1张牌至少指定3名角色为目标时，你须弃置1张牌并失去1点体力，若当前环境为海洋，你摸1张牌。</span>",
			"ly_junshenbao_sociatyBeast_pulao_mingyin":"<span style=\"color: yellow\">鸣音</span>",
			"ly_junshenbao_sociatyBeast_pulao_mingyin_info":"<span style=\"color: red\">锁定技，你造成的伤害均视为体力流失。</span>",
			"ly_junshenbao_sociatyBeast_pulao_duyuan":"<span style=\"color: yellow\">独远</span>",
			"ly_junshenbao_sociatyBeast_pulao_duyuan_info":"<span style=\"color: red\"><li>锁定技，其他友方角色不能成为你使用牌的目标。<li>锁定技，你造成伤害始终+1。</span>",
			"ly_junshenbao_sociatyBeast_chaofeng_longlin":"<span style=\"color: yellow\">龙鳞</span>",
			"ly_junshenbao_sociatyBeast_chaofeng_longlin_info":"<span style=\"color: red\">出牌阶段限1次，你可以展示1张防具牌，若如此做，所有友方角色依次回复1点体力，然后你将此牌移出游戏，若当前环境为天空，所有友方角色依次随机装备1张防具牌。</span>",
			"ly_junshenbao_sociatyBeast_chaofeng_zhijiao":"<span style=\"color: yellow\">置角</span>",
			"ly_junshenbao_sociatyBeast_chaofeng_zhijiao_info":"<span style=\"color: red\">出牌阶段限1次，你可以将1张坐骑牌置于1名其他角色装备区内，若如此做，你与其各随机获得1张红色牌。</span>",
			"ly_junshenbao_sociatyBeast_chaofeng_zhixie":"<span style=\"color: yellow\">止邪</span>",
			"ly_junshenbao_sociatyBeast_chaofeng_zhixie_info":"<span style=\"color: red\">其他角色的回合结束时，若其于本回合内未造成过伤害，你可以获得场上1张装备牌。</span>",
			"ly_junshenbao_sociatyBeast_chaofeng_haoxian":"<span style=\"color: yellow\">好险</span>",
			"ly_junshenbao_sociatyBeast_chaofeng_haoxian_info":"<span style=\"color: red\">锁定技，回合结束时，若敌方角色装备区内牌数总和不小于4张，你令所有敌方角色依次弃置装备区内所有牌，然后你摸等量的牌。</span>",
			"ly_junshenbao_sociatyBeast_yazi_longlie":"<span style=\"color: yellow\">龙烈</span>",
			"ly_junshenbao_sociatyBeast_yazi_longlie_info":"<span style=\"color: red\">锁定技，你使用杀指定目标后，若当前环境不为陆地，则此杀不可被响应，否则此杀伤害+1。</span>",
			"ly_junshenbao_sociatyBeast_yazi_chaiyue":"<span style=\"color: yellow\">豺月</span>",
			"ly_junshenbao_sociatyBeast_yazi_chaiyue_info":"<span style=\"color: red\">锁定技，你使用的杀始终指定全体敌方角色为目标。</span>",
			"ly_junshenbao_sociatyBeast_yazi_langri":"<span style=\"color: yellow\">狼日</span>",
			"ly_junshenbao_sociatyBeast_yazi_langri_info":"<span style=\"color: red\">锁定技，你使用杀无距离限制;若当前环境为陆地，你使用杀无视防具。</span>",
			"ly_junshenbao_sociatyBeast_yazi_bibao":"<span style=\"color: yellow\">必报</span>",
			"ly_junshenbao_sociatyBeast_yazi_bibao_info":"<span style=\"color: red\">锁定技，回合开始时，你失去1点体力，视为对随机1名敌方角色使用1张杀。</span>",
			"ly_junshenbao_sociatyBeast_chiwen_longao":"<span style=\"color: yellow\">龙鳌</span>",
			"ly_junshenbao_sociatyBeast_chiwen_longao_info":"<span style=\"color: red\">锁定技，其他友方角色受到属性伤害时，此伤害-1，若当前环境为海洋，则此伤害-2。</span>",
			"ly_junshenbao_sociatyBeast_chiwen_quyan":"<span style=\"color: yellow\">驱炎</span>",
			"ly_junshenbao_sociatyBeast_chiwen_quyan_info":"<span style=\"color: red\">锁定技，若当前环境为海洋，则其他友方角色造成的属性伤害+1，否则你造成的属性伤害+1。</span>",
			"ly_junshenbao_sociatyBeast_chiwen_yuhuo":"<span style=\"color: yellow\">鱼火</span>",
			"ly_junshenbao_sociatyBeast_chiwen_yuhuo_info":"<span style=\"color: red\"><li>你可以将1张♢手牌当\"火杀\"使用。<li>出牌阶段，你可以将1张黑色手牌当\"铁索连环\"使用。</span>",
			"ly_junshenbao_sociatyBeast_chiwen_fubing":"<span style=\"color: yellow\">负兵</span>",
			"ly_junshenbao_sociatyBeast_chiwen_fubing_info":"<span style=\"color: red\">锁定技，出牌阶段开始时，你随机横置1名敌方角色并随机重置1名友方角色。</span>",
			"ly_junshenbao_sociatyBeast_suanni_longzhen":"<span style=\"color: yellow\">龙镇</span>",
			"ly_junshenbao_sociatyBeast_suanni_longzhen_info":"<span style=\"color: red\">锁定技，每回合限1次，其他友方角色于其回合外获得牌后，你令其摸2张牌。</span>",
			"ly_junshenbao_sociatyBeast_suanni_ruiyan":"<span style=\"color: yellow\">瑞烟</span>",
			"ly_junshenbao_sociatyBeast_suanni_ruiyan_info":"<span style=\"color: red\">锁定技，回合结束时，你摸1张牌，若当前环境为陆地，则改为摸3张牌。</span>",
			"ly_junshenbao_sociatyBeast_suanni_raoleng":"<span style=\"color: yellow\">绕棱</span>",
			"ly_junshenbao_sociatyBeast_suanni_raoleng_info":"<span style=\"color: red\">出牌阶段限2次，你可以将1张手牌交给1名其他角色。</span>",
			"ly_junshenbao_sociatyBeast_suanni_xiangjin":"<span style=\"color: yellow\">香巾</span>",
			"ly_junshenbao_sociatyBeast_suanni_xiangjin_info":"<span style=\"color: red\">出牌阶段限1次，你可以令1名手牌数不等于你的其他角色将手牌调整至与你相同。</span>",
			"ly_junshenbao_sociatyBeast_qiuniu_longxuan":"<span style=\"color: yellow\">龙弦</span>",
			"ly_junshenbao_sociatyBeast_qiuniu_longxuan_info":"<span style=\"color: red\"><li>出牌阶段限1次，你可以将1张♢牌当\"乐不思蜀\"使用。</span><span style=\"color: red\"><li>出牌阶段限1次，若当前环境为天空，你可以将1张♧牌当\"兵粮寸断\"使用。</span>",
			"ly_junshenbao_sociatyBeast_qiuniu_lige":"<span style=\"color: yellow\">离歌</span>",
			"ly_junshenbao_sociatyBeast_qiuniu_lige_info":"<span style=\"color: red\">场上判定牌生效时，你可以打出1张牌替换之。</span>",
			"ly_junshenbao_sociatyBeast_qiuniu_heming":"<span style=\"color: yellow\">和鸣</span>",
			"ly_junshenbao_sociatyBeast_qiuniu_heming_info":"<span style=\"color: red\">其他角色每跳过1个阶段，你可令1名角色摸1张牌。</span>",
			"ly_junshenbao_sociatyBeast_qiuniu_jilv":"<span style=\"color: yellow\">集律</span>",
			"ly_junshenbao_sociatyBeast_qiuniu_jilv_info":"<span style=\"color: red\">锁定技，你立即获得己方其他角色的判定牌。</span>",
			"land":"陆地",
			"land_info":"",
			"sea":"海洋",
			"sea_info":"",
			"sky":"天空",
			"sky_info":"",
		},
	};
	if(lib.config.mode=='boss'){
		for(var i in characterPack.character){
			var character=characterPack.character[i];
			if(character[4]!=undefined&&character[4].contains('boss')&&character[4].contains('bossallowed')){
				lib.mode.boss.config[i+'_boss_config']={
					name:characterPack.translate[i],
					init:true,
					unfrequent:true,
				};
				if(get.config(i+'_boss_config')==false){
					character[4].remove('boss');
					character[4].remove('bossallowed');
				};
			};
		};
	};
   	lib.group.push('ly_junshenbao_sociatyBeast');
    lib.translate.ly_junshenbao_sociatyBeast='<span style=\"color: yellow\">神兽</span>';
	game.addCharacterPack(characterPack,'<span style=\"font-size:17px;font-weight:600\">扩展ol-BOSS</span>');
}