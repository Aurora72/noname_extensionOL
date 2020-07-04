window.func = function (lib, game, ui, get, ai, _status) {
	game.kzol_modeOL_over=game.over;
	game.over=function(result){
		if(_status.connectMode==true){
			lib.config.kzol_connect.all++;
			if(game.online){
				if(arguments[1]==true) lib.config.kzol_connect.win++;
			}else{
				if(result==true) lib.config.kzol_connect.win++;
			};
			game.saveConfig('kzol_connect',lib.config.kzol_connect);
		};
		game.kzol_modeOL_over.apply(this,arguments);
	};
	if(lib.config.kzol_connect==undefined){
		lib.config.kzol_connect={
			all:0,
			win:0,
		};
		game.saveConfig('kzol_connect',lib.config.kzol_connect);
	};
	lib.message.server.kzol_show_sl=function(num,sl){
		game.broadcastAll(function(num,sl){
			var player=game.connectPlayers[num];
			if(player!=undefined&&player.node!=undefined&&player.node.kzol_info==undefined){
				var info=ui.create.div('');
				info.style.width='calc(100%)';
				info.style.height='28px';
				info.style.left='0px';
				info.style.bottom='0px';
				info.style.display='';
				info.style['text-align']='center';
				info.style['font-size']='14px';
				info.style['font-family']="'STXinwei','xinwei'";
				info.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
				info.style.borderRadius='8px';
				player.node.kzol_info=info;
				var num=Math.round(sl.win/sl.all*10000)/100;
				if(sl.all==0) num=0;
				info.innerHTML='场数:'+sl.all+'<br>胜率:'+num+'%';
				player.node.avatar.appendChild(info);
			};
		},num,sl);
	};
	ui.create.connectPlayers = function (ip) {
		game.connectPlayers=[];
		for(var i=0;i<15;i++){
			var player=ui.create.player();
			player.classList.add('minskin');
			player.style.left='calc('+((100/6)*((i%5)+1))+'% - 60px)';
			if(lib.device){
				player.style.top=(ui.window.offsetHeight*0.17+130*Math.floor(i/5))+'px';
			}else{
				player.style.top=(ui.window.offsetHeight*0.2+130*Math.floor(i/5))+'px';
			};
			player.style.width='120px';
			player.node.name.style.left='10px'
			player.node.name.style.top='10px'
			ui.window.appendChild(player);
			
			player.dataset.position=i;
			player.classList.add('connect');
			game.connectPlayers.push(player);
			if(i>=lib.configOL.number){
				player.classList.add('unselectable2');
			}
		};
		var bar=ui.create.div(ui.window);
		bar.style.height='20px';
		bar.style.width='80%';
		bar.style.left='10%';
		bar.style.top='calc(200% / 7 - 120px + 5px)';
		bar.style.textAlign='center';
		var ipbar=ui.create.div('.shadowed',ip,bar);
		ipbar.style.padding='4px';
		ipbar.style.borderRadius='2px';
		ipbar.style.position='relative';

		var button_show=ui.create.div('.menubutton.large.highlight.connectbutton.pointerdiv','展示战绩',ui.window,function(){
			if(game.online==true){
				for(var i=0;i<15;i++){
					if(game.connectPlayers[i]!=undefined&&game.connectPlayers[i].playerid==game.onlineID){
						game.send('kzol_show_sl',i,lib.config.kzol_connect);
					};
				};
			}else{
				game.broadcastAll(function(sl){
					var player=game.connectPlayers[0];
					if(player.node.kzol_info==undefined){
						var info=ui.create.div('');
						info.style.width='calc(100%)';
						info.style.height='28px';
						info.style.left='0px';
						info.style.bottom='0px';
						info.style.display='';
						info.style['text-align']='center';
						info.style['font-size']='14px';
						info.style['font-family']="'STXinwei','xinwei'";
						info.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
						info.style.borderRadius='8px';
						player.node.kzol_info=info;
						var num=Math.round(sl.win/sl.all*10000)/100;
						if(sl.all==0) num=0;
						info.innerHTML='场数:'+sl.all+'<br>胜率:'+num+'%';
						player.node.avatar.appendChild(info);
					};
				},lib.config.kzol_connect);
			};
		});
		button_show.style.left='calc(50% + 10px)';

		var button=ui.create.div('.menubutton.large.highlight.connectbutton.pointerdiv',game.online?'退出联机':'开始游戏',ui.window,function(){
			if(button.clicked) return;
			if(game.online){
				if(game.onlinezhu){
					game.send('startGame');
				}
				else{
					game.saveConfig('tmp_owner_roomId');
					game.saveConfig('tmp_user_roomId');
					game.saveConfig('reconnect_info');
					game.reload();
				}
			}
			else{
				game.resume();
			}
			game.broadcastAll(function(){
				game.kzol_connect_button.delete();
				game.kzol_connect_button_show.delete();
				game.kzol_connect_bar.delete();
			});
			delete ui.connectStartButton;
			delete ui.connectStartBar;
			button.clicked=true;
		});
		
		button.style.left='calc(50% - 150px)';
		game.kzol_connect_button=button;
		game.kzol_connect_button_show=button_show;
		game.kzol_connect_bar=bar;
	};
	var kzol_getModetrans=get.modetrans;
	get.modetrans = function (config, server) {
		var result=kzol_getModetrans(config, server);
		if (config.mode == 'identity' && config.identity_mode == 'zombie') {
			result='僵尸狂潮';
		}else if (config.mode == 'identity' && config.identity_mode == 'strong') {
			result='兵精粮足';
		}else if (config.mode == 'guozhan' && config.guozhan_mode == 'combine') {
			result='一统天下';
		}else if (config.mode == 'guozhan' && config.guozhan_mode == 'qxhz') {
			result='群雄混战';
		};
		return result;
	};
	game.import('character', function () {
		zombie = {
			name: 'zombie',
			connect: true,
			character: {
				jiangshifz: ["male", "qun", 5, ["xunmeng", "zaibian", "ganran", "kzol_wansha", "kzol_paoxiao"],
					["ext:扩展ol/jiangshifz.jpg", "forbidai", "des:僵尸模式配套武将"]
				],
				jiangshinj: ["male", "qun", 3, ["baozou", "kzol_wansha", "kzol_xueji", "shishi", "ganran"],
					["ext:扩展ol/jiangshinj.jpg", "forbidai", "des:僵尸模式配套武将"]
				],
			},
			skill: {
				baozou: {
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
				},
				shishi: {
					trigger: {
						source: 'dieAfter'
					},
					forced: true,
					content: function () {
						player.gainMaxHp(1);
						player.recover();
					}
				},
				xunmeng: {
					trigger: {
						source: 'damageBegin'
					},
					filter: function (event) {
						return event.card && event.card.name == 'sha' && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
					},
					forced: true,
					content: function () {
						trigger.num++;
						if (player.hp > 1) player.loseHp();
					}
				},
				zaibian: {
					trigger: {
						player: 'phaseUseBegin'
					},
					filter: function (event, player) {
						return get.population('zhong') - get.population('fan') - get.population('nei') + 2 > 0;
					},
					forced: true,
					content: function () {
						var num = get.population('zhong') - get.population('fan') - get.population('nei') + 2;
						player.draw(num);
					}
				},
				ganran: {
					mod: {
						cardEnabled: function (card, player) {
							if (get.type(card) == 'equip') return false;
						},
						cardRespondable: function (card, player) {
							if (get.type(card) == 'equip') return false;
						},
						cardSavable: function (card, player) {
							if (get.type(card) == 'equip') return false;
						},
					},
					enable: ['chooseToUse'],
					filterCard: {
						type: 'equip'
					},
					viewAsFilter: function (player) {
						return player.num('h', {
							type: 'equip'
						}) > 0;
					},
					viewAs: {
						name: 'tiesuo'
					},
					check: function () {
						return 1
					},
					group: 'ganran2',
					ai: {
						order: 4,
						useful: -1,
						value: -1
					}
				},
				ganran2: {
					enable: 'phaseUse',
					filter: function (event, player) {
						return player.num('h', {
							type: 'equip'
						}) > 0;
					},
					filterCard: {
						type: 'equip'
					},
					prepare: function (cards, player) {
						player.$throw(cards, 1000);
					},
					discard: false,
					delay: 0.5,
					content: function () {
						"step 0"
						player.draw();
						"step 1"
						for (var i = 0; i < cards.length; i++) {
							ui.discardPile.appendChild(cards[i]);
						}
					},
					ai: {
						order: 3.5,
						result: {
							player: 1
						}
					}
				},
				kzol_wansha:{
					locked:true,
					global:'kzol_wansha2',
					trigger:{global:'dying'},
					priority:15,
					forced:true,
					filter:function(event,player,name){
						return _status.currentPhase==player&&event.player!=player;
					},
					content:function(){}
				},
				kzol_wansha2:{
					mod:{
						cardSavable:function(card,player){
							if(!_status.currentPhase) return;
							if(_status.currentPhase.isAlive()&&_status.currentPhase.hasSkill('kzol_wansha')&&_status.currentPhase!=player){
								if(card.name=='tao'&&!player.isDying()) return false;
							}
						},
						cardEnabled:function(card,player){
							if(!_status.currentPhase) return;
							if(_status.currentPhase.isAlive()&&_status.currentPhase.hasSkill('kzol_wansha')&&_status.currentPhase!=player){
								if(card.name=='tao'&&!player.isDying()) return false;
							}
						}
					}
				},
				kzol_paoxiao:{
					mod:{
						cardUsable:function(card,player,num){
							if(card.name=='sha') return Infinity;
						}
					},
					ai:{
						unequip:true,
						skillTagFilter:function(player,tag,arg){
							if(!get.zhu(player,'shouyue')) return false;
							if(arg&&arg.name=='sha') return true;
							return false;
						}
					}
				},
				kzol_xueji:{
					enable:'phaseUse',
					usable:1,
					filter:function(event,player){
						return player.countCards('he',{color:'red'})>0;
					},
					filterTarget:true,
					selectTarget:function(){
						var player=_status.event.player
						return [1,Math.max(1,player.getDamagedHp())];
					},
					position:'he',
					filterCard:{color:'red'},
					check:function(card){
						return 8-get.value(card);
					},
					multitarget:true,
					multiline:true,
					line:'fire',
					content:function(){
						'step 0'
						event.delay=false;
						for(var i=0;i<targets.length;i++){
							if(!targets[i].isLinked()){
								targets[i].link(true);
								event.delay=true;
							}
						}
						'step 1'
						if(event.delay){
							game.delay();
						}
						'step 2'
						targets[0].damage('fire','nocard');
					},
					ai:{
						damage:true,
						threaten:1.5,
						order:7,
						result:{
							target:function(player,target){
								var eff=get.damageEffect(target,player,target,'fire');
								if(target.isLinked()){
									return eff/10;
								}
								else{
									return eff;
								}
							}
						},
					}
				},
			},
			translate: {
				jiangshifz: '僵尸',
				jiangshinj: '僵尸',
				kzol_xueji:'雪恨',
				kzol_xueji_info:'出牌阶段限一次，你可以弃置一张红色牌，然后选择至多X名角色，横置这些角色并对其中一名角色造成1点火焰伤害。（X为你已损失的体力值数且至少为1）',
				kzol_paoxiao:'咆哮',
				kzol_paoxiao_info:'锁定技，出牌阶段，你使用【杀】没有数量限制。',
				kzol_wansha:'完杀',
				kzol_wansha_info:'锁定技，你的回合内，除你以外，不处于濒死状态的角色不能使用【桃】。',
				baozou: '暴走',
				baozou_info: ' 锁定技，出牌阶段，你可以使用任意数量的【杀】。 ',
				shishi: '噬尸',
				shishi_info: ' 锁定技，当你杀死一名角色后，你获得一点体力上限并回复一点体力。 ',
				xunmeng: '迅猛',
				xunmeng_info: ' 锁定技，你的杀造成的伤害+1。你的杀造成伤害时，若你体力大于1，你流失1点体力。 ',
				zaibian: '灾变',
				zaibian_info: ' 锁定技，你的出牌阶段开始时，若人类玩家数-僵尸玩家数+1大于0，则你摸取该数目的牌。 ',
				ganran: '感染',
				ganran_info: ' 锁定技，你的装备牌都视为铁锁连环',
				ganran2: '感染·重铸',
			},
		};
		return zombie;
	});
	lib.config.all.characters.push('zombie');
	if (!lib.config.characters.contains('zombie')) lib.config.characters.add('zombie');
	lib.translate['zombie_character_config'] = '僵尸';
	lib.mode.identity.connect.connect_identity_mode = {
		name: '游戏模式',
		init: 'normal',
		item: {
			normal: '标准',
			zhong: '明忠',
			purple:'3v3v2',
			zombie: '僵尸',
			strong: '强兵'
		},
		restart: true,
		frequent: true,
		intro: '明忠和3v3v2模式详见帮助<br>僵尸详见僵尸模式<br>强兵详见兵精粮足'
	};
	lib.skill._zombieSupport = {
		trigger: {
			global: 'gameStart'
		},
		forced: true,
		filter: function (event, player) {
			if (_status.mode != 'zombie') return false;
			return true;
		},
		content: function () {
			var players = [];
			for (var i = 0; i < game.players.length; i++) {
				if (game.players[i] != game.zhu) {
					players.push(game.players[i]);
					game.players[i].identity = 'zhong';
				};
			};
			game.broadcastAll(function (game) {
				setInterval(function(){
					game.showIdentity();
					for (var i = 0; i < game.players.length; i++) {
						var pl=game.players[i];
						if (pl.identity == 'zhong') {
							pl.node.identity.firstChild.innerHTML = '人类';
						}
						else {
							pl.node.identity.firstChild.innerHTML = '僵尸';
						};
						if (pl == game.zhu) pl.node.identity.firstChild.innerHTML = '领导者';
						pl.node.identity.dataset.color = pl.identity;
					};
				},500);
			},game);
			game.zhu.storage.tuizhi = 0;
			var num = 1;
			if (game.players.length > 6 && game.players.length <= 12) num = 2;
			if (game.players.length > 12 && game.players.length <= 18) num = 3;
			game.first_js = players.randomGets(num);
		},
	};
	lib.skill._jiangshiTx = {
		skillAnimation: 'epic',
		animationStr: '灵魂献祭',
		forced: true,
		trigger: {
			player: 'dieBefore'
		},
		filter: function (event, player) {
			if (_status.mode != 'zombie') return false;
			return player.identity == 'zhong' && game.roundNumber >= 2;
		},
		content: function () {
			game.log('灵魂献祭');
		}
	};
	lib.skill._jiangshiTx2 = {
		skillAnimation: 'epic',
		animationStr: '僵尸灭亡',
		animationColor: 'thunder',
		forced: true,
		trigger: {
			player: 'dieBefore'
		},
		filter: function (event, player) {
			if (_status.mode != 'zombie') return false;
			return player.identity == 'fan' || (player.identity == 'nei'&&event.bianjs!='fan');
		},
		content: function () {
			game.log('僵尸灭亡');
		}
	};
	lib.skill._jiangshiTx4 = {
		skillAnimation: 'epic',
		animationStr: '僵尸进化',
		animationColor: 'thunder',
		forced: true,
		trigger: {
			player: 'dieBefore'
		},
		filter: function (event, player) {
			if (_status.mode != 'zombie') return false;
			return player.identity == 'nei'&&event.bianjs=='fan';
		},
		content: function () {
			game.log('僵尸进化');
		}
	};
	lib.skill._jiangshiTx3 = {
		skillAnimation: 'epic',
		animationStr: '暗夜降临',
		animationColor: 'thunder',
		trigger: {
			player: 'phaseBegin'
		},
		forced: true,
		filter: function (event, player) {
			if (_status.mode != 'zombie') return false;
			return game.roundNumber == 2 && game.ayjl != true;
		},
		content: function () {
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
		filter: function (event, player) {
			if (_status.mode != 'zombie') return false;
			return true;
		},
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
		skillAnimation: 'epic',
		animationStr: '退治成功',
		animationColor: 'metal',
		trigger: {
			player: 'phaseBegin'
		},
		forced: true,
		priority: 1,
		filter: function (event, player) {
			if (_status.mode != 'zombie') return false;
			var num = 8;
			if (game.players.length + game.dead.length > 8) num = game.players.length + game.dead.length;
			var num1 = game.roundNumber;
			if (game.zhu.storage.tuizhi != undefined) num1 -= game.zhu.storage.tuizhi;
			return num1 >= num;
		},
		content: function () {
			for(var i=0;i<game.players.length;i++){
				var pl=game.players[i];
				if(pl.identity=='fan'||pl.identity=='nei') pl.die();
			};
			/*
			if (game.me.identity == 'zhu' || game.me.identity == 'zhong') {
				game.over(true);
			}
			else {
				game.over(false);
			};
			*/
		}
	};
	lib.skill._jiangshi = {
		trigger: {
			player: 'dieBegin'
		},
		forced: true,
		popup: false,
		filter: function (event, player) {
			if (_status.mode != 'zombie') return false;
			return (player.identity == 'zhong'||(player.identity == 'nei'&&event.bianjs=='fan'))&& game.roundNumber >= 2;
		},
		content: function () {
			if (trigger.bianjs == "fan") {
				trigger.untrigger();
				trigger.finish();
				//player.draw(4);
				//player.discard(player.get("hej"));
				//player.revive();
				game.broadcastAll(function (player) {
					player.init(player.name, 'jiangshifz');
				}, player);
				player.discard(player.get('e'));
				player.maxHp = 5;
				player.hp = player.maxHp;
				player.update();
				player.identity = 'fan';
			}
			else {
				trigger.untrigger();
				trigger.finish();
				//player.draw(4);
				//player.discard(player.get("hej"));
				//player.revive();
				game.broadcastAll(function (player) {
					player.init(player.name, 'jiangshinj');
				}, player);
				player.discard(player.get('e'));
				player.hp = player.maxHp;
				player.update();
				player.identity = 'nei';
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
			if (_status.mode != 'zombie') return false;
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
			if (_status.mode != 'zombie') return false;
			return game.first_js.contains(player) && game.roundNumber == 2;
		},
		content: function () {
			player.die().bianjs = "fan";
		}
	}
	lib.skill._jiangshi3 = {
		skillAnimation: 'epic',
		animationStr: '僵尸进化',
		animationColor: 'thunder',
		trigger: {
			source: 'dieBefore'
		},
		forced: true,
		popup: false,
		filter: function (event, player) {
			if (_status.mode != 'zombie') return false;
			return (event.player.identity == 'zhong' || event.player.identity == 'nei' || event.player.identity == 'zhu') && player.identity == 'nei';
		},
		content: function () {
			player.identity = 'fan';
			game.broadcastAll(function (player) {
				player.init(player.name, 'jiangshifz');
			}, player);
			player.discard(player.get('e'));
		},
	};
	lib.skill._jiangshi4 = {
		skillAnimation: 'epic',
		animationStr: '领导者阵亡',
		animationColor: 'metal',
		trigger: {
			player: 'dieBegin'
		},
		forced: true,
		popup: false,
		filter: function (event, player) {
			if (_status.mode != 'zombie') return false;
			return player == game.zhu;
		},
		content: function () {
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
			if (_status.mode != 'zombie') return false;
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
	/*lib.translate._tuizhi='退治'
	lib.translate._jiangshi='僵尸'
	lib.translate._jiangshi1='僵尸'
	lib.translate._jiangshi2='僵尸'
	lib.translate._jiangshi3='僵尸'
	lib.translate._jiangshi4='僵尸'*/
	lib.translate._tuizhi2 = '退治成功'
	lib.translate._jiangshi3='僵尸进化'
	lib.translate._jiangshiTx = '灵魂献祭'
	lib.translate._jiangshiTx2 = '僵尸灭亡'
	lib.translate._jiangshiTx3 = '暗夜降临'
	lib.translate._jiangshiTx4 = '僵尸进化'
	lib.translate.tuizhi1 = '退治'
	lib.translate._huzhu = '互助'
	lib.translate._huzhu_info = '出牌阶段限一次，人类玩家可以弃置一张【桃】令距离一的人类玩家恢复一点体力'
	lib.skill._mopaishuzengjia = {
		trigger: {
			player: "phaseDrawBegin",
		},
		forced: true,
		filter: function (event, player) {
			return _status.mode == 'strong';
		},
		content: function () {
			trigger.num++;
		},
	};
	lib.skill._chushashuzengjia = {
		mod: {
			cardUsable: function (card, player, num) {
				if (card.name == 'sha' && _status.mode == 'strong') return num + 1;
			},
		},
	};
	lib.mode.identity.connect.connect_player_number.item = {
		'2': '两人',
			'3': '三人',
			'4': '四人',
			'5': '五人',
			'6': '六人',
			'7': '七人',
			'8': '八人',
			'9': '九人',
			'10': '十人',
			'11': '十一人',
			'12': '十二人',
			'13': '十三人',
			'14': '十四人',
			'15': '十五人',
	};
	lib.mode.guozhan.connect.connect_player_number.item = {
		'2': '两人',
			'3': '三人',
			'4': '四人',
			'5': '五人',
			'6': '六人',
			'7': '七人',
			'8': '八人',
			'9': '九人',
			'10': '十人',
			'11': '十一人',
			'12': '十二人',
			'13': '十三人',
			'14': '十四人',
			'15': '十五人',
	};
	if (get.mode() == 'connect'){
		lib.translate.unknown8 = '九号位';
		lib.translate.unknown9 = '十号位';
		lib.translate.unknown10 = '十一号位';
		lib.translate.unknown11 = '十二号位';
		lib.translate.unknown12 = '十三号位';
		lib.translate.unknown13 = '十四号位';
		lib.translate.unknown14 = '十五号位';
		lib.translate.unknown15 = '十六号位';
		lib.translate.chanceIdentity0 = '自立为国';
		lib.translate.chanceIdentity = '自立为国';
		lib.translate.chanceIdentity1 = '自立为国';
		lib.translate.chanceIdentity2 = '自立为国';
		lib.translate.chanceIdentity3 = '自立为国';
		lib.translate.chanceIdentity4 = '自立为国';
		lib.translate.chanceIdentity5 = '自立为国';
		lib.translate.chanceIdentity6 = '自立为国';
		lib.translate.chanceIdentity7 = '自立为国';
		lib.translate.chanceIdentity8 = '自立为国';
		lib.translate.chanceIdentity9 = '自立为国';
		lib.translate.chanceIdentity10 = '自立为国';
		lib.translate.chanceIdentity11 = '自立为国';
		lib.translate.chanceIdentity12 = '自立为国';
		lib.translate.chanceIdentity13 = '自立为国';
		lib.translate.chanceIdentity14 = '自立为国';
		lib.translate.chanceIdentity15 = '自立为国';
		lib.group.push('er');
		lib.translate.er = '国';
		lib.translate.erColor = "#990099"
		lib.group.push('san');
		lib.translate.san = '国';
		lib.translate.sanColor = "#990099"
		lib.group.push('si');
		lib.translate.si = '国';
		lib.translate.siColor = "#990099"
		lib.group.push('wu1');
		lib.translate.wu1 = '国';
		lib.translate.wu1Color = "#990099"
		lib.group.push('liu');
		lib.translate.liu = '国';
		lib.translate.liuColor = "#990099"
		lib.group.push('qi');
		lib.translate.qi = '国';
		lib.translate.qiColor = "#990099"
		lib.group.push('ba');
		lib.translate.ba = '国';
		lib.translate.baColor = "#990099"
		lib.group.push('jiu1');
		lib.translate.jiu1 = '国';
		lib.translate.jiu1Color = "#990099"
		lib.group.push('shi');
		lib.translate.shi = '国';
		lib.translate.shiColor = "#990099"
		lib.group.push('shiyi');
		lib.translate.shiyi = '国';
		lib.translate.shiyiColor = "#990099"
		lib.group.push('shier');
		lib.translate.shier = '国';
		lib.translate.shierColor = "#990099"
		lib.group.push('shisan');
		lib.translate.shisan = '国';
		lib.translate.shisanColor = "#990099"
		lib.group.push('shisi');
		lib.translate.shisi = '国';
		lib.translate.shisiColor = "#990099"
		lib.group.push('shiwu');
		lib.translate.shiwu = '国';
		lib.translate.shiwuColor = "#990099"
		lib.group.push('shiliu');
		lib.translate.shiliu = '国';
		lib.translate.shiliuColor = "#990099"
		lib.group.push('yi');
		lib.translate.yi = '国';
		lib.translate.yiColor = "#990099"
		lib.config.mode_config.identity.identity.push(['zhu', 'zhong', 'zhong', 'zhong', 'nei', 'fan', 'fan', 'fan', 'fan'], ['zhu', 'zhong', 'zhong', 'zhong', 'nei', 'nei', 'fan', 'fan', 'fan', 'fan'], ['zhu', 'zhong', 'zhong', 'zhong', 'zhong', 'nei', 'fan', 'fan', 'fan', 'fan', 'fan'], ['zhu', 'zhong', 'zhong', 'zhong', 'zhong', 'nei', 'nei', 'fan', 'fan', 'fan', 'fan', 'fan'], ['zhu', 'zhong', 'zhong', 'zhong', 'zhong', 'zhong', 'nei', 'fan', 'fan', 'fan', 'fan', 'fan', 'fan'], ['zhu', 'zhong', 'zhong', 'zhong', 'zhong', 'zhong', 'nei', 'nei', 'fan', 'fan', 'fan', 'fan', 'fan', 'fan'], ['zhu', 'zhong', 'zhong', 'zhong', 'zhong', 'zhong', 'zhong', 'nei', 'fan', 'fan', 'fan', 'fan', 'fan', 'fan', 'fan'], ['zhu', 'zhong', 'zhong', 'zhong', 'zhong', 'zhong', 'zhong', 'nei', 'nei', 'fan', 'fan', 'fan', 'fan', 'fan', 'fan', 'fan']);
	};
	lib.mode.guozhan.connect.connect_guozhan_mode = {
		name: '游戏模式',
		init: 'normal',
		item: {
			normal: '标准',
			combine: '兼并',
			qxhz: '混战'
		},
		frequent: true,
		restart: true,
		intro: '兼并详见兼并模式<br>混战详见群雄混战'
	};
	lib.skill._combineSupport = {
		trigger: {
			player: 'phaseBefore'
		},
		forced: true,
		filter: function (event, player) {
			if (_status.mode != 'combine') return false;
			return player.storage.combineSupport != 0;
		},
		content: function () {
			game.broadcastAll(function () {
				for (var i = 0; i < game.players.length; i++) {
					game.players[i].group = get.cnNumber(i + 1);
					game.players[i].identity = get.cnNumber(i + 1);
					game.players[i]._group = get.cnNumber(i + 1);
					game.players[i].storage.combineSupport = 0;
					game.players[i].node.identity.firstChild.innerHTML = '国';
					game.players[i].node.identity.dataset.color = 'zhu';
				};
			});
			game.broadcastAll(function (game) {
				setInterval(function(){
					for (var i = 0; i < game.players.length; i++) {
						game.players[i].node.identity.firstChild.innerHTML = '国';
						game.players[i].node.identity.dataset.color = 'zhu';
					};
				},500);
			},game);
		},  	
	};
	lib.skill._combine = {
		trigger: {
			player: "dieBegin",
		},
		forced: true,
		filter: function (event) {
			if (_status.mode != 'combine') return false;
			return event.source && event.source.isIn();
		},
		content: function () {
			game.log(trigger.source, '获得了', player.get('s', false, false));
			trigger.source.addSkill(player.get('s', false, false));
		},
	};
	lib.skill._kzol_qxhzSupport={
		trigger:{
			global:"gameStart",
		},
		forced:true,
		popup:false,
		filter:function(event,player){
			if (_status.mode != 'qxhz') return false;
			return _status.kzol_qxhz!=true;
		},
		content:function (){
			_status.kzol_qxhz=true;
			lib.element.content.showCharacter=function(){
				if(player.identity=='ye'){
					game.broadcastAll(function(player){
						player.setIdentity();
					},player);
				};
				lib.element.player.$showCharacter.apply(player,event._args);
			};
			for(var i=0;i<game.players.length;i++){
				var pl=game.players[i];
				var group=lib.character[pl.name1][1];
				var group1=lib.translate[group];
				if(group1!='吴'&&group1!='蜀'&&group1!='魏'&&group1.indexOf('晋')==-1){
					pl.identity='ye';
					//pl.setIdentity();
				};
			};
		},
	};
}