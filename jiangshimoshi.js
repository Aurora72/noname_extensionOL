window.func = function (lib, game, ui, get, ai, _status) {
	if (lib.brawl) {
		lib.brawl.jiangshimoshi = {
			name: '僵尸模式',
			mode: 'identity',
			intro: [
				'移植神杀的僵尸模式，规则有改动。',
				'以下蓝字部分为单机模式规则，变为僵尸就是与僵尸组成双将<br><span style=\"color:#EE7621;font-size:18px\"><p align="center">规则介绍</p></span>',
				'1.在此模式中主公为领导者，忠臣为人类，反贼、内奸为僵尸。',
				'2.游戏开始时，所有非领导者角色的身份变为人类，领导者获得退治印记（退治印记数量为轮次数-退治印记的传承数）。',
				'3.若领导者死亡，则下一名人类玩家成为领导者，体力与体力上限+1，并被传承退治印记。',
				'4.第二轮的首个开始时，暗夜降临，此轮中会有X个人类变为反贼僵尸（X为存活人数/6（向上整取））。以此法变为反贼僵尸时，体力上限为5。',
				'5.人类死亡时会被病毒侵染，变为内奸僵尸，体力上限为3<span style="color:#21eed2">，若此次死亡由僵尸造成，体力上限为伤害来源体力上限的一半，向上取整。</span>',
				'6.内奸僵尸杀死领导者、人类、内奸僵尸后变为反贼僵尸<span style="color:#21eed2">，体力上限不变。</span>',
				'7.当场上没有僵尸时，不会有角色死亡。',
				'8.领导者和人类获得技能【互助】<br><span style=\"color:#EE7621;font-size:18px\"><p align="center">奖惩</p></span>',
				'1.变为僵尸时须弃置所有准备区域内的牌',
				'<span style="color:#21eed2">2.任意玩家杀死僵尸时，该玩家摸3张牌，生命值回复至上限</span><br><span style=\"color:#EE7621;font-size:18px\"><p align="center">游戏结束条件</p></span>',
				'1.退治成功，领导者和人类胜利，僵尸失败：<br>任何玩家回合开始时，领导者退治印记到达X（X为游戏人数且至少为8）。<br>击杀所有僵尸。',
				'2.退治失败，反贼僵尸胜利，其余玩家失败：<br>领导者阵亡并且场上没有可以代替领导者的人类。',
				'3.原身份局条件'
			],
			showcase:function(init){
				this.parentNode.style['overflow-x']='hidden';
				this.parentNode.style['overflow-y']='scroll';
				this.parentNode.childNodes[0].style.position='fixed';
			},
			content: {
				gameStart: function () {
					if(ui.playerids) ui.playerids.style.display='none';
					var players = [];
					for (var i = 0; i < game.players.length; i++) {
						if (game.players[i] != game.zhu) {
							players.push(game.players[i]);
							game.players[i].identity = 'zhong';
						};
					};
					game.showIdentity();
					for (var i = 0; i < game.players.length; i++) {
						var pl = game.players[i];
						if (pl.identity == 'zhong') {
							pl.node.identity.firstChild.innerHTML = '人类';
						}
						else {
							pl.node.identity.firstChild.innerHTML = '僵尸';
						};
						if (pl == game.zhu) pl.node.identity.firstChild.innerHTML = '领导者';
						pl.node.identity.dataset.color = pl.identity;
					};
					game.zhu.storage.tuizhi = 0;
					var num = 1;
					if (game.players.length > 6 && game.players.length <= 12) num = 2;
					if (game.players.length > 12 && game.players.length <= 18) num = 3;
					game.first_js = players.randomGets(num);
					var func=function(source){
						if((this.identity=='fan'||this.identity=='nei')&&source){
							source.draw(3);
							source.recover(source.maxHp-source.hp);
						};
					};
					lib.element.player.dieAfter2=func;
					for(var i=0;i<game.players.length;i++){
						game.players[i].dieAfter2=func;
					};
				},
			},
			init: function () {
				game.identityVideoName='僵尸模式';
				lib.config.mode_config.identity.special_identity=false;
				setTimeout(function(){
					lib.translate.zhu2='领导者';
					lib.translate.zhong2='人类';
					lib.translate.fan2='僵尸';
					lib.translate.nei2='僵尸';
				},500);
				if(lib.config['extension_扩展ol_ldmsxx_jsmsyx']==true){
					ui.backgroundMusic.src=lib.assetURL+'extension/扩展ol/jsmskj.mp3';
					ui.backgroundMusic.addEventListener('ended',function(){
						if(lib.config.background_music=='music_off'){
							ui.backgroundMusic.src='';
						}else{
							ui.backgroundMusic.src=lib.assetURL+'extension/扩展ol/jsmskj.mp3';
						};
					});
				};
				lib.config.mode_config.identity.identity_mode='normal';
				lib.skill._jiangshiTx = {
					trigger: {
						player: 'dieBefore'
					},
					forced: true,
					popup:false,
					filter: function (event, player) {
						return player.identity == 'fan' || (player.identity == 'nei'&&event.bianjs!='fan');
					},
					content: function () {
						var audio=game.playAudio();
						if(player.identity == 'fan'){
							audio.src=lib.assetURL+'extension/扩展ol/jssw.mp3';
						}else{
							audio.src=lib.assetURL+'extension/扩展ol/jssw1.mp3';
						};
						player.$skill('僵尸灭亡','epic','thunder',true);
						game.log('僵尸灭亡');
					}
				};
				lib.skill._jiangshiTx2 = {
					trigger: {
						player: 'phaseBegin'
					},
					filter: function (event, player) {
						return game.roundNumber == 2 && game.ayjl != true;
					},
					forced: true,
					popup:false,
					content: function () {
						player.$skill('暗夜降临','epic','thunder',false);
						if(lib.config['extension_扩展ol_ldmsxx_jsmsyx']==true){
							ui.backgroundMusic.src=lib.assetURL+'extension/扩展ol/jsmscjsh.mp3';
							ui.backgroundMusic.addEventListener('ended',function(){
								if(lib.config.background_music=='music_off'){
									ui.backgroundMusic.src='';
								}else{
									ui.backgroundMusic.src=lib.assetURL+'extension/扩展ol/jsmscjsh.mp3';
								};
							});
						};
						game.ayjl = true;
						game.log('暗夜降临');
					}
				}
				lib.skill._tuizhi = {
					trigger: {
						player: 'phaseBegin'
					},
					forced: true,
					popup: false,
					priority: 2,
					content: function () {
						var num = game.roundNumber;
						if (game.zhu.storage.tuizhi != undefined) num -= game.zhu.storage.tuizhi;
						game.zhu.storage.tuizhi1 = num;
						game.zhu.markSkill('tuizhi1');
						game.zhu.syncStorage('tuizhi1');
					},
				};
				lib.skill.tuizhi1 = {
					intro: {
						content: function (storage, player, skill) {
							return '当前有' + (game.roundNumber - player.storage.tuizhi) + '个‘退治’标记';
						},
					},
					marktext: '退',
				};
				lib.skill._tuizhi2 = {
					trigger: {
						player: 'phaseBegin'
					},
					forced: true,
					popup:false,
					priority: 1,
					filter: function (event, player) {
						var num = 8;
						if (game.players.length + game.dead.length > 8) num = game.players.length + game.dead.length;
						var num1 = game.roundNumber;
						if (game.zhu.storage.tuizhi != undefined) num1 -= game.zhu.storage.tuizhi;
						return num1 >= num;
					},
					content: function () {
						game.zhu.$skill('退治成功','legend','metal',true);
						game.log('退治成功');
						if (game.me.identity == 'zhu' || game.me.identity == 'zhong') {
							game.over(true);
						}
						else {
							game.over(false);
						};
					}
				};
				lib.skill._jiangshi = {
					trigger: {
						player: 'dieBegin'
					},
					forced: true,
					popup: false,
					filter: function (event, player) {
						return (player.identity == 'zhong'||(player.identity == 'nei'&&event.bianjs=='fan'))&& game.roundNumber >= 2;
					},
					content: function () {
						if (trigger.bianjs == "fan") {
							trigger.untrigger();
							trigger.finish();
							var audio=game.playAudio();
							audio.src=lib.assetURL+'extension/扩展ol/jscc.mp3';
							player.$skill('灵魂献祭','epic','',true);
							game.log('灵魂献祭');
							var maxHp=player.maxHp;
							player.init(player.name, 'jiangshifz');
							player.discard(player.get('e'));
							if(player.identity=='nei'){
								player.maxHp = maxHp;
								player.hp = player.maxHp;
							}else{
								player.maxHp = 5;
								player.hp = player.maxHp;
							};
							player.update();
							player.identity = 'fan';
						}
						else {
							trigger.untrigger();
							trigger.finish();
							var audio=game.playAudio();
							audio.src=lib.assetURL+'extension/扩展ol/jscc1.mp3';
							player.$skill('灵魂献祭','epic','',true);
							game.log('灵魂献祭');
							player.init(player.name, 'jiangshinj');
							player.discard(player.get('e'));
							if(trigger.source&&(trigger.source.identity=='fan'||trigger.source.identity=='nei')){
								player.maxHp=Math.ceil(trigger.source.maxHp/2);
								player.hp=player.maxHp;
							}else{
								player.hp=player.maxHp;
							};
							player.update();
							player.identity = 'nei';
						};
						game.showIdentity();
						for (var i = 0; i < game.players.length; i++) {
							var pl = game.players[i];
							if (pl.identity == 'zhong') {
								pl.node.identity.firstChild.innerHTML = '人类';
							}
							else {
								pl.node.identity.firstChild.innerHTML = '僵尸';
							};
							if (pl == game.zhu) pl.node.identity.firstChild.innerHTML = '领导者';
							pl.node.identity.dataset.color = pl.identity;
						};
						trigger.untrigger();
						trigger.finish();
					}
				};
				lib.skill._jiangshi1 = {
					trigger: {
						player: 'dieBefore'
					},
					forced: true,
					popup: false,
					priority: Infinity,
					filter: function (event, player) {
						return game.countPlayer(function (current) {
							return current.identity == 'fan' || current.identity == 'nei'
						}) == 0 && event.bianjs == undefined;
					},
					content: function () {
						player.hp = 0;
						trigger.untrigger();
						trigger.finish();
					}
				};
				lib.skill._jiangshi2 = {
					trigger: {
						player: 'phaseBefore'
					},
					forced: true,
					popup: false,
					priority: Infinity,
					filter: function (event, player) {
						return game.first_js.contains(player) && game.roundNumber == 2;
					},
					content: function () {
						player.die().bianjs = "fan";
					}
				}
				lib.skill._jiangshi3 = {
					trigger: {
						source: 'dieBefore'
					},
					forced: true,
					popup: false,
					priority:Infinity,
					filter: function (event, player) {
						return (event.player.identity == 'zhong' || event.player.identity == 'nei'|| event.player.identity == 'zhu') && player.identity == 'nei';
					},
					content: function () {
						var audio=game.playAudio();
						audio.src=lib.assetURL+'extension/扩展ol/jscc.mp3';
						player.$skill('僵尸进化','epic','thunder',true);
						game.log('僵尸进化');
						player.identity = 'fan';
						player.init(player.name, 'jiangshifz');
						player.discard(player.get('e'));
						game.showIdentity();
						for (var i = 0; i < game.players.length; i++) {
							var pl = game.players[i];
							if (pl.identity == 'zhong') {
								pl.node.identity.firstChild.innerHTML = '人类';
							}
							else {
								pl.node.identity.firstChild.innerHTML = '僵尸';
							};
							if (pl == game.zhu) pl.node.identity.firstChild.innerHTML = '领导者';
							pl.node.identity.dataset.color = pl.identity;
						};
					},
				};
				lib.skill._jiangshi4 = {
					trigger: {
						player: 'dieBegin'
					},
					forced: true,
					popup: false,
					filter: function (event, player) {
						return player == game.zhu;
					},
					content: function () {
						player.$skill('领导者阵亡','epic','metal',true);
						game.log('领导者阵亡');
						for (var i = 0; i < game.players.length; i++) {
							if (game.players[i].identity == 'zhong') {
								event.target = game.players[i];
								break;
							}
						}
						if (event.target) {
							game.zhu.line(event.target, 'thunder');
							game.log(game.zhu, '死亡<br>', event.target, '成为了新的领导者！');
							game.zhu = event.target;
							event.target.identity = 'zhu';
							event.target.gainMaxHp();
							event.target.recover();
							event.target.storage.tuizhi = player.storage.tuizhi + 1;
							event.target.markSkill('_tuizhi');
							event.target.syncStorage('_tuizhi');
							game.showIdentity();
							for (var i = 0; i < game.players.length; i++) {
								var pl = game.players[i];
								if (pl.identity == 'zhong') {
									pl.node.identity.firstChild.innerHTML = '人类';
								}
								else {
									pl.node.identity.firstChild.innerHTML = '僵尸';
								};
								if (pl.identity == 'zhu') pl.node.identity.firstChild.innerHTML = '领导者';
								pl.node.identity.dataset.color = pl.identity;
							};
						}
					}
				}
				lib.skill._huzhu = {
					enable: 'phaseUse',
					usable: 1,
					filterCard: function (card, player) {
						return card.name == 'tao';
					},
					filter: function (event, player) {
						return player.identity == 'zhong' || player.identity == 'zhu';
					},
					filterTarget: function (card, player, target) {
						if (player == target) return false;
						return get.distance(player, target) <= 1 && target.isDamaged() && (target.identity == 'zhong' || target.identity == 'zhu');
					},
					content: function () {
						player.useCard({
							name: 'tao'
						}, target)
					}
				}
				//lib.translate._tuizhi='退治'
				//lib.translate._jiangshi='僵尸'
				//lib.translate._jiangshi1='僵尸'
				//lib.translate._jiangshi2='僵尸'
				//lib.translate._jiangshi4='僵尸'
				//lib.translate._tuizhi2 = '退治成功'
				//lib.translate._jiangshi3='僵尸进化'
				//lib.translate._jiangshiTx = '灵魂献祭'
				//lib.translate._jiangshiTx2 = '僵尸灭亡'
				//lib.translate._jiangshiTx3 = '暗夜降临'
				//lib.translate._jiangshiTx4 = '僵尸进化'
				lib.translate.tuizhi1 = '退治'
				lib.translate._huzhu = '互助'
				lib.translate._huzhu_info = '出牌阶段限一次，人类玩家可以弃置一张【桃】令距离一的人类玩家恢复一点体力'
			},
		};
	};
}