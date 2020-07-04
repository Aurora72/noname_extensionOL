window.func = function (lib, game, ui, get, ai, _status) {
	lib.mode.brawl.config['qunxiongzhulu']={
		name:'群雄逐鹿',
		init:true,
		frequent:true,
	};
	lib.mode.brawl.config['biaozhunmoshi']={
		name:'标准模式',
		init:false,
		frequent:true,
	};
	if(lib.config.tqk_qunxiongzhulu==undefined){
		game.saveConfig('tqk_qunxiongzhulu',{
			jc:'三国标准包',
			rs:8,
		});
	};
	if(lib.config.tqk_biaozhunmoshi==undefined){
		game.saveConfig('tqk_biaozhunmoshi',{
			rs:8,
		});
	};
	if(lib.brawl){
			var cardPack2 = [
                    ['spade', 1, 'zl_jinjun'], ['spade', 6, 'zl_zhengbing'],
                    ['spade', 1, 'juedou'], ['spade', 2, 'bagua'],
                    ['spade', 3, 'guohe'], ['spade', 4, 'guohe'],
                    ['spade', 5, 'qinglong'], ['spade', 6, 'lebu'],
                    ['spade', 5, 'zl_dazhengbian'],
                    ['spade', 7, 'sha'], ['spade', 8, 'sha'],
                    ['spade', 9, 'sha'], ['spade', 10, 'sha'],
                    ['spade', 11, 'shunshou'], ['spade', 12, 'guohe'],
                    ['spade', 13, 'nanman'], ['spade', 1, 'shandian', 'thunder'],
                    ['spade', 2, 'cixiong'], ['spade', 3, 'shunshou'],
                    ['spade', 4, 'shunshou'], ['spade', 5, 'jueying'],
                    ['spade', 6, 'qinggang'], ['spade', 7, 'nanman'],
                    ['spade', 8, 'sha'], ['spade', 9, 'sha'],
                    ['spade', 10, 'sha'], ['spade', 11, 'wuxie'],
                    ['spade', 12, 'zhangba'], ['spade', 13, 'dawan'],
                    ['club', 12, 'zl_dazhengbian'],
                    ['spade', 1, 'guding'], ['spade', 2, 'tengjia'],
                    ['spade', 1, 'zl_zhengbian'], ['spade', 3, 'sha'],
                    ['spade', 3, 'jiu'], ['spade', 4, 'sha', 'thunder'],
                    ['spade', 5, 'sha', 'thunder'], ['spade', 6, 'sha', 'thunder'],
                    ['spade', 7, 'sha', 'thunder'], ['spade', 8, 'sha', 'thunder'],
                    ['spade', 9, 'jiu'], ['spade', 10, 'bingliang'],
                    ['spade', 11, 'tiesuo'], ['spade', 12, 'tiesuo'],
                    ['spade', 13, 'nanman'], ['spade', 2, 'hanbing'],
                    ['heart', 1, 'wanjian'], ['heart', 1, 'taoyuan'],
                    ['heart', 1, 'wuxie'], ['heart', 2, 'shan'],
                    ['heart', 2, 'shan'], ['heart', 2, 'huogong'],
                    ['heart', 3, 'tao'], ['heart', 3, 'wugu'],
                    ['heart', 3, 'sha', 'fire'], ['heart', 4, 'tao'],
                    ['heart', 3, 'zl_dazhengbian'],
                    ['heart', 4, 'wugu'], ['heart', 4, 'huogong'],
                    ['heart', 5, 'qilin'], ['heart', 5, 'chitu'],
                    ['heart', 5, 'tao'], ['heart', 6, 'shan'],
                    ['heart', 6, 'lebu'], ['heart', 6, 'sha'],
                    ['heart', 7, 'tao'], ['heart', 7, 'wuzhong'],
                    ['heart', 7, 'sha', 'fire'], ['heart', 8, 'shan'],
                    ['heart', 8, 'wuzhong'], ['heart', 8, 'shan'],
                    ['heart', 9, 'tao'], ['heart', 9, 'wuzhong'],
                    ['heart', 9, 'shan'], ['heart', 10, 'tao'],
                    ['heart', 10, 'sha'], ['heart', 10, 'sha', 'fire'],
                    ['heart', 11, 'tao'], ['heart', 11, 'wuzhong'],
                    ['heart', 12, 'guohe'], ['heart', 13, 'zl_zhengbian'],
                    ['heart', 11, 'shan'], ['heart', 12, 'tao'],
                    ['heart', 12, 'guohe'], ['heart', 12, 'shan'],
                    ['heart', 12, 'shandian'], ['heart', 13, 'shan'],
                    ['heart', 13, 'zhuahuang'], ['heart', 13, 'wuxie'],
                    ['heart', 13, 'zl_zhengbing'], ['heart', 7, 'zl_jinjun'],
                    ['club', 1, 'juedou'], ['club', 1, 'liannu'],
                    ['club', 11, 'sha'], ['club', 10, 'tao'],
                    ['club', 8, 'shan'], ['club', 6, 'jiu'],
                    ['club', 1, 'baiyin'], ['club', 2, 'sha'],
                    ['club', 2, 'bagua'], ['club', 2, 'tengjia'],
                    ['club', 2, 'renwang'], ['club', 3, 'sha'],
                    ['club', 3, 'guohe'], ['club', 3, 'jiu'],
                    ['club', 4, 'zl_jinjun'], ['club', 3, 'zl_zhengbing'],
                    ['club', 4, 'sha'], ['club', 4, 'guohe'],
                    ['club', 4, 'bingliang'], ['club', 5, 'sha'],
                    ['club', 5, 'dilu'], ['club', 5, 'sha', 'thunder'],
                    ['club', 6, 'sha'], ['club', 6, 'lebu'],
                    ['club', 6, 'sha', 'thunder'], ['club', 7, 'sha'],
                    ['club', 7, 'nanman'], ['club', 7, 'sha', 'thunder'],
                    ['club', 8, 'sha'], ['club', 8, 'sha'],
                    ['club', 8, 'sha', 'thunder'], ['club', 9, 'sha'],
                    ['club', 9, 'sha'], ['club', 9, 'jiu'],
                    ['club', 10, 'sha'], ['club', 10, 'sha'],
                    ['club', 10, 'tiesuo'], ['club', 11, 'sha'],
                    ['club', 10, 'zl_zhengbian'], ['club', 11, 'shan'],
                    ['club', 11, 'sha'], ['club', 11, 'tiesuo'],
                    ['club', 12, 'jiedao'], ['club', 12, 'wuxie'],
                    ['club', 12, 'tiesuo'], ['club', 13, 'jiedao'],
                    ['club', 13, 'wuxie'], ['club', 13, 'tiesuo'],
                    ['club', 10, 'zl_zhengbing'], ['club', 9, 'zl_jinjun'],
                    ['diamond', 1, 'juedou'], ['diamond', 1, 'zhuge'],
                    ['diamond', 1, 'zhuque'], ['diamond', 2, 'shan'],
                    ['diamond', 2, 'shan'], ['diamond', 2, 'tao'],
                    ['diamond', 3, 'shan'], ['diamond', 3, 'shunshou'],
                    ['diamond', 3, 'tao'], ['diamond', 4, 'shan'],
                    ['diamond', 4, 'shunshou'], ['diamond', 4, 'sha', 'fire'],
                    ['diamond', 5, 'zl_zhengbian'], ['diamond', 6, 'qinggang'],
                    ['diamond', 5, 'shan'], ['diamond', 5, 'guanshi'],
                    ['diamond', 5, 'sha', 'fire'], ['diamond', 6, 'sha'],
                    ['diamond', 6, 'shan'], ['diamond', 6, 'shan'],
                    ['diamond', 7, 'zl_zhengbing'], ['diamond', 6, 'zl_jinjun'],
                    ['diamond', 7, 'sha'], ['diamond', 7, 'shan'],
                    ['diamond', 7, 'shan'], ['diamond', 8, 'sha'],
                    ['diamond', 8, 'shan'], ['diamond', 8, 'shan'],
                    ['diamond', 9, 'sha'], ['diamond', 9, 'shan'],
                    ['diamond', 9, 'zl_dazhengbian'],
                    ['diamond', 9, 'jiu'], ['diamond', 10, 'sha'],
                    ['diamond', 10, 'shan'], ['diamond', 10, 'shan'],
                    ['diamond', 11, 'shan'], ['diamond', 11, 'shan'],
                    ['diamond', 11, 'shan'], ['diamond', 12, 'tao'],
                    ['diamond', 12, 'fangtian'], ['diamond', 12, 'huogong'],
                    ['diamond', 12, 'wuxie'], ['diamond', 13, 'sha'],
                    ['diamond', 13, 'zixin'], ['diamond', 13, 'hualiu'],
                    ['diamond', 5, 'muniu'], ['diamond', 12, 'jiu'],
                    ['diamond', 5, 'zl_jinjun'], ['diamond', 4, 'zl_zhengbing']
             ];
			var cardPack = [
                    ['spade', 1, 'bz_zhaoxianling'], ['club', 7, 'bz_zhaoxianling'],
                    ['diamond', 3, 'bz_zhaoxianling'], ['heart', 5, 'bz_zhaoxianling'],
                    ['spade', 1, 'juedou'], ['spade', 2, 'bagua'],
                    ['spade', 3, 'guohe'], ['spade', 4, 'guohe'],
                    ['spade', 5, 'qinglong'], ['spade', 6, 'lebu'],
                    ['spade', 7, 'sha'], ['spade', 8, 'sha'],
                    ['spade', 9, 'sha'], ['spade', 10, 'sha'],
                    ['spade', 11, 'shunshou'], ['spade', 12, 'guohe'],
                    ['spade', 13, 'nanman'], ['spade', 1, 'shandian', 'thunder'],
                    ['spade', 2, 'cixiong'], ['spade', 3, 'shunshou'],
                    ['spade', 4, 'shunshou'], ['spade', 5, 'jueying'],
                    ['spade', 6, 'qinggang'], ['spade', 7, 'nanman'],
                    ['spade', 8, 'sha'], ['spade', 9, 'sha'],
                    ['spade', 10, 'sha'], ['spade', 11, 'wuxie'],
                    ['spade', 12, 'zhangba'], ['spade', 13, 'dawan'],
                    ['spade', 1, 'guding'], ['spade', 2, 'tengjia'],
                    ['spade', 3, 'jiu'], ['spade', 4, 'sha', 'thunder'],
                    ['spade', 5, 'sha', 'thunder'], ['spade', 6, 'sha', 'thunder'],
                    ['spade', 7, 'sha', 'thunder'], ['spade', 8, 'sha', 'thunder'],
                    ['spade', 9, 'jiu'], ['spade', 10, 'bingliang'],
                    ['spade', 4, 'bz_longzhongdui'], ['club', 12, 'bz_longzhongdui'],
                    ['diamond', 6, 'bz_longzhongdui'], ['heart', 10, 'bz_longzhongdui'],
                    ['spade', 11, 'tiesuo'], ['spade', 12, 'tiesuo'],
                    ['spade', 13, 'nanman'], ['spade', 2, 'hanbing'],
                    ['heart', 1, 'wanjian'], ['heart', 1, 'taoyuan'],
                    ['heart', 1, 'wuxie'], ['heart', 2, 'shan'],
                    ['heart', 2, 'shan'], ['heart', 2, 'huogong'],
                    ['heart', 3, 'tao'], ['heart', 3, 'wugu'],
                    ['heart', 3, 'sha', 'fire'], ['heart', 4, 'tao'],
                    ['heart', 4, 'wugu'], ['heart', 4, 'huogong'],
                    ['heart', 5, 'qilin'], ['heart', 5, 'chitu'],
                    ['heart', 5, 'tao'], ['heart', 6, 'tao'],
                    ['heart', 6, 'lebu'], ['heart', 6, 'tao'],
                    ['heart', 7, 'tao'], ['heart', 7, 'wuzhong'],
                    ['heart', 7, 'sha', 'fire'], ['heart', 8, 'tao'],
                    ['heart', 8, 'wuzhong'], ['heart', 8, 'shan'],
                    ['heart', 9, 'tao'], ['heart', 9, 'wuzhong'],
                    ['heart', 9, 'shan'], ['heart', 10, 'sha'],
                    ['heart', 10, 'sha'], ['heart', 10, 'sha', 'fire'],
                    ['spade', 9, 'bz_kanglongyouhui'], ['club', 11, 'bz_kanglongyouhui'],
                    ['diamond', 6, 'bz_kanglongyouhui'], ['heart', 10, 'bz_kanglongyouhui'],
                    ['heart', 11, 'sha'], ['heart', 11, 'wuzhong'],
                    ['heart', 11, 'shan'], ['heart', 12, 'tao'],
                    ['heart', 12, 'guohe'], ['heart', 12, 'shan'],
                    ['heart', 12, 'shandian'], ['heart', 13, 'shan'],
                    ['heart', 13, 'zhuahuang'], ['heart', 13, 'wuxie'],
                    ['club', 1, 'juedou'], ['club', 1, 'liannu'],
                    ['club', 1, 'baiyin'], ['club', 2, 'sha'],
                    ['club', 2, 'bagua'], ['club', 2, 'tengjia'],
                    ['club', 2, 'renwang'], ['club', 3, 'sha'],
                    ['club', 3, 'guohe'], ['club', 3, 'jiu'],
                    ['club', 4, 'sha'], ['club', 4, 'guohe'],
                    ['club', 4, 'bingliang'], ['club', 5, 'sha'],
                    ['club', 5, 'dilu'], ['club', 5, 'sha', 'thunder'],
                    ['club', 6, 'sha'], ['club', 6, 'lebu'],
                    ['club', 6, 'sha', 'thunder'], ['club', 7, 'sha'],
                    ['club', 7, 'nanman'], ['club', 7, 'sha', 'thunder'],
                    ['club', 8, 'sha'], ['club', 8, 'sha'],
                    ['club', 8, 'sha', 'thunder'], ['club', 9, 'sha'],
                    ['club', 9, 'sha'], ['club', 9, 'jiu'],
                    ['club', 10, 'sha'], ['club', 10, 'sha'],
                    ['club', 10, 'tiesuo'], ['club', 11, 'sha'],
                    ['club', 11, 'sha'], ['club', 11, 'tiesuo'],
                    ['club', 12, 'jiedao'], ['club', 12, 'wuxie'],
                    ['club', 12, 'tiesuo'], ['club', 13, 'jiedao'],
                    ['club', 13, 'wuxie'], ['club', 13, 'tiesuo'],
                    ['diamond', 1, 'juedou'], ['diamond', 1, 'zhuge'],
                    ['diamond', 1, 'zhuque'], ['diamond', 2, 'shan'],
                    ['diamond', 2, 'shan'], ['diamond', 2, 'tao'],
                    ['diamond', 3, 'shan'], ['diamond', 3, 'shunshou'],
                    ['diamond', 3, 'tao'], ['diamond', 4, 'shan'],
                    ['diamond', 4, 'shunshou'], ['diamond', 4, 'sha', 'fire'],
                    ['diamond', 5, 'shan'], ['diamond', 5, 'guanshi'],
                    ['diamond', 5, 'sha', 'fire'], ['diamond', 6, 'sha'],
                    ['diamond', 6, 'shan'], ['diamond', 6, 'shan'],
                    ['diamond', 7, 'sha'], ['diamond', 7, 'shan'],
                    ['diamond', 7, 'shan'], ['diamond', 8, 'sha'],
                    ['diamond', 8, 'shan'], ['diamond', 8, 'shan'],
                    ['diamond', 9, 'sha'], ['diamond', 9, 'shan'],
                    ['diamond', 9, 'jiu'], ['diamond', 10, 'sha'],
                    ['diamond', 10, 'shan'], ['diamond', 10, 'shan'],
                    ['diamond', 11, 'shan'], ['diamond', 11, 'shan'],
                    ['diamond', 11, 'shan'], ['diamond', 12, 'tao'],
                    ['diamond', 12, 'fangtian'], ['diamond', 12, 'huogong'],
                    ['diamond', 12, 'wuxie'], ['diamond', 13, 'sha'],
                    ['diamond', 13, 'zixin'], ['diamond', 13, 'hualiu'],
                    ['diamond', 5, 'muniu']
                ];
		var charactersyms = [
				'sy_lvbu1'
		];
		var characterbzb=[];
		for(var i in lib.characterPack.standard){
			characterbzb.push(i);
		};
		var characterSJ=[];
		for(var i in lib.characterPack.extra){
			characterSJ.push(i);
		};
		var characterList=[];
		for(var i=0;i<lib.characterSort.tqk['tqk_sgbzb'].length;i++){
			characterList.push(lib.characterSort.tqk['tqk_sgbzb'][i]);
		};
		var characterList2=[];
		for(var i=0;i<lib.characterSort.tqk['tqk_lnz'].length;i++){
			characterList2.push(lib.characterSort.tqk['tqk_lnz'][i]);
		};
		var characterwm=[];
		for(var i=0;i<lib.characterSort.tqk['tqk_wm'].length;i++){
			characterwm.push(lib.characterSort.tqk['tqk_wm'][i]);
		};
		var characterzzbj=[];
		for(var i=0;i<lib.characterSort.tqk['tqk_zzbj'].length;i++){
			characterzzbj.push(lib.characterSort.tqk['tqk_zzbj'][i]);
		};
		var characterList4=[];
		for(var i=0;i<lib.characterSort.tqk['tqk_sgbzb'].length;i++){
			characterList4.push(lib.characterSort.tqk['tqk_sgbzb'][i]);
		};
		for(var i=0;i<lib.characterSort.tqk['tqk_lnz'].length;i++){
			characterList4.push(lib.characterSort.tqk['tqk_lnz'][i]);
		};
		for(var i=0;i<lib.characterSort.tqk['tqk_wm'].length;i++){
			characterList4.push(lib.characterSort.tqk['tqk_wm'][i]);
		};
		for(var i=0;i<lib.characterSort.tqk['tqk_zzbj'].length;i++){
			characterList4.push(lib.characterSort.tqk['tqk_zzbj'][i]);
		};
		lib.brawl.sanyingmoshi = {
			name: '三英模式',
			mode: 'identity',
			intro: [
				'<font color=#FF0>模式作者</font>：天气亏',
				'<font color=#FF0>模式介绍</font>：复刻官方的"三英模式"',
				'<font color=#FF0>基本规则</font>：<br>&nbsp&nbsp共四名玩家，三名反贼（大将、中坚、先锋）一名主公，游戏开始时大将发牌5张，中坚4张，先锋3张，主公8张并由先锋（主公下家）先开始游戏，在主公未进入第二状态时，由主公和玩家轮流进行回合，当主公进入第二状态时，回合轮替正常进行。',
				'<font color=#FF0>游戏规则</font>：<br>休整：每当一名反贼阵营角色死去时，其他反贼角色摸牌一张，然后死去的角色进入“休整状态”，当该名角色处于“休整状态”的时长6回合后，其立即复活，但复活后，第一个回合无法行动。第二状态：当主公体力变为4或更低时，立即开始回合并变身。<br>游戏时手中的武器牌可以进行重铸。',
				'<font color=#FF0>胜负条件</font>：<br>主公：主公击杀所有反贼。<br>反贼：主公阵亡。',
				'<font color=#FF0>专属将池</font>：<br>三国原版：<font color=#FF0>吕布</font><br>本人（天气亏）原创：<font color=#FF0>黄帝、伏羲、炎帝、女娲、孙武、嬴政</font> ',
			],
			showcase:function(init){
				this.parentNode.style['overflow-x']='hidden';
				this.parentNode.style['overflow-y']='scroll';
				this.parentNode.childNodes[0].style.position='fixed';
			},
			content: {
				chooseCharacter: function () {
					if(game.me == game.zhu) {
						_status.event.trigger('init');
						var num = 1;
						var list=[];
						for(var i=0;i<charactersyms.length;i++){
							list.push(charactersyms[i]);
						};
						list=list.randomRemove(num);
						return list;
					}
					if(game.me != game.zhu) {
						_status.event.trigger('init2');
						var num2 = 5;
						var list = [];
						for(var i=0;i<characterbzb.length;i++){
							list.push(characterbzb[i]);
						};
						list=list.randomRemove(num2);
						return list;
					}
				},
				chooseCharacterAi: function (player) {
					if(player == game.zhu) {
						if(player == game.zhu) _status.event.trigger('init');
						else if(player != game.zhu) _status.event.trigger('init2');
						player.init(charactersyms.randomRemove());
					}else{
						if(player == game.zhu) _status.event.trigger('init');
						else if(player != game.zhu) _status.event.trigger('init2');
						player.init(characterbzb.randomRemove());
					}
				},
				gameStart: function () {
					'step 0'
					ui.backgroundMusic.src=lib.assetURL + 'extension/扩展ol/缺席.mp3';
					ui.backgroundMusic.addEventListener('ended',function(){
						if(lib.config.background_music=='music_off'){
							ui.backgroundMusic.src='';
						}else{
							ui.backgroundMusic.src=lib.assetURL+'extension/扩展ol/缺席.mp3';
						};
					});
					ui.background.setBackgroundImage("extension/扩展ol/symsct.jpg");
					for(var i = 0; i < game.players.length; i++) {
						if(game.players[i].identity == 'zhu') continue;
						game.players[i].identity = 'fan';
						game.players[i].addSkill('syms_xz');
						game.players[i].addSkill('syms_cz');
						game.players[i].awakenSkill('bz_yisha');
					};
					for(var i = 0; i < game.players.length; i++) {
						game.players[i].addSkill('syms_cc');
					}
					'step 1'
					game.zhu.addSkill('syms_th');
					game.zhu.addSkill('SYMS_BN');
					'step 2'
					game.zhu.draw(8);
					game.zhu.next.draw(3);
					game.zhu.previous.draw(5);
					game.zhu.previous.previous.draw(4);
					lib.translate.fan = '闯者'
					lib.translate.zhu = '守将';
					game.showIdentity();
					'step 3'
					game.phaseLoop(game.zhu.next);
				}
			},
			init: function () {
				game.identityVideoName='三英模式';
				game.addCharacterPack({
					skill: {
						sy_shenwei: {
							audio: "ext:扩展ol:2",
							unique: true,
							trigger: {
								player: "phaseDrawBegin",
							},
							forced: true,
							content: function () {
								trigger.num += 2;
							},
							mod: {
								maxHandcard: function (player, current) {
									return current + 2;
								},
							},
						},
						sy_shenji: {
							unique: true,
							mod: {
								selectTarget: function (card, player, range) {
									if(range[1] == -1) return;
									if(player.getEquip(1)) return;
									if(card.name == 'sha') range[1] += 2;
								},
							},
							ai: {
								effect: {
									target: function (card, player, target, current) {
										if(get.subtype(card) == 'equip1') return -1;
									},
								},
							},
						},
						sy_xiuluo: {
							audio: "ext:扩展ol:2",
							trigger: {
								player: "phaseBegin",
							},
							direct: true,
							filter: function (event, player) {
								return player.countCards('j') > 0;
							},
							content: function () {
								"step 0"
								var next = player.discardPlayerCard(player, 2, 'hj', '是否一张手牌来弃置一张花色相同的判定牌？');
								next.filterButton = function (button) {
									var card = button.link;
									if(!lib.filter.cardDiscardable(card, player)) return false;
									if(ui.selected.buttons.length == 0) return true;
									if(get.position(ui.selected.buttons[0].link) == 'h') {
										if(get.position(card) != 'j') return false;
									}
									if(get.position(ui.selected.buttons[0].link) == 'j') {
										if(get.position(card) != 'h') return false;
									}
									return get.suit(card) == get.suit(ui.selected.buttons[0].link)
								};
								next.ai = function (button) {
									var card = button.link;
									if(get.position(card) == 'h') {
										return 11 - get.value(card);
									}
									if(card.name == 'lebu') return 5;
									if(card.name == 'bingliang') return 4;
									if(card.name == 'guiyoujie') return 3;
									return 2;
								};
								next.logSkill = 'sy_xiuluo';
							},
						}
					},
					character: {
						sy_lvbu1: ['male', 'shen', 8, ['mashu', 'wushuang'], ['ext:扩展ol/sy_lvbu1.jpg']],
						sy_lvbu2: ['male', 'shen', 4, ['mashu', 'wushuang', 'sy_shenwei', 'sy_shenji', 'sy_xiuluo'], ['ext:扩展ol/sy_lvbu2.jpg']]
					},
					translate: {
						sy_lvbu1: '最强神话',
						sy_lvbu2: '暴怒战神',
						sy_shenwei: '神威',
						sy_shenji: '神戟',
						sy_xiuluo: '无前',
						'sy_xiuluo_info': '回合开始时，若你判定区内有牌，你可以弃置一张同花色的手牌将其中一张弃置',
						'sy_shenwei_info': '摸牌阶段你多摸两张牌。你的手牌上限加2',
						'sy_shenji_info': '在你没有装备武器牌时，使用的【杀】可以额外指定2名目标',
					}
				});
				/*……………………………………………………………………………技能页……………………………………………………………………………………………*/
				lib.skill.syms_zjxz = {
					mark: true,
					unique: true,
					init: function (player) {
						player.storage.syms_zjxz = 1;
						game.addVideo('storage', player, ['syms_zjxz', player.storage.syms_zjxz]);
					},
					intro: {
						content: function (storage) {
							return '中坚休整回合：' + storage + '/6';
						},
					},
					trigger: {
						player: "phaseBegin",
					},
					forced: true,
					filter: function (event, player) {
						if(player.storage.syms_zjxz >= 6) return false;
						return player.storage.syms_zjxz < 6;
					},
					content: function () {
						player.$damagepop(1, 'unknownx');
						player.storage.syms_zjxz += 1;
						if(player.storage.syms_zjxz > 6) player.storage.syms_zjxz = 6;
						game.addVideo('storage', player, ['syms_zjxz', player.storage.syms_zjxz]);
					},
				};
				lib.skill.syms_zjxz2 = {
					trigger: {
						player: 'phaseBegin'
					},
					forced: true,
					filter: function (event, player) {
						return player.storage.syms_zjxz == 6;
					},
					content: function () {
						'step 0'
						player.previousSeat.previousSeat.revive(player.previousSeat.previousSeat.hp);
						var pr = player.previousSeat.previousSeat;
						if(player.previousSeat.previousSeat.maxHp < 4) {
							pr.recover(999);
							pr.draw(4);
							pr.skip('phaseJudge');
							pr.skip('phaseDraw');
							pr.skip('phaseDiscard');
							pr.skip('phaseUse');
						} else {
							pr.recover(999);
							pr.draw(3);
							pr.skip('phaseJudge')
							pr.skip('phaseDraw')
							pr.skip('phaseDiscard');
							pr.skip('phaseUse');
						}
						'step 1'
						player.removeSkill('syms_zjxz')
						player.removeSkill('syms_zjxz2')
					}
				};
				lib.skill.syms_xfxz = {
					mark: true,
					unique: true,
					init: function (player) {
						player.storage.syms_xfxz = 1;
						game.addVideo('storage', player, ['syms_xfxz', player.storage.syms_xfxz]);
					},
					intro: {
						content: function (storage) {
							return '先锋休整回合：' + storage + '/6';
						},
					},
					trigger: {
						player: "phaseBegin",
					},
					forced: true,
					filter: function (event, player) {
						if(player.storage.syms_xfxz >= 6) return false;
						return player.storage.syms_xfxz < 6;
					},
					content: function () {
						player.$damagepop(1, 'unknownx');
						player.storage.syms_xfxz += 1;
						if(player.storage.syms_xfxz > 6) player.storage.syms_xfxz = 6;
						game.addVideo('storage', player, ['syms_xfxz', player.storage.syms_xfxz]);
					},
				};
				lib.skill.syms_xfxz2 = {
					trigger: {
						player: 'phaseBegin'
					},
					forced: true,
					filter: function (event, player) {
						return player.storage.syms_xfxz == 6;
					},
					content: function () {
						'step 0'
						player.nextSeat.revive(player.nextSeat.hp);
						var pr = player.nextSeat;
						if(player.nextSeat.maxHp < 4) {
							pr.recover(999);
							pr.draw(4);
							pr.skip('phaseJudge');
							pr.skip('phaseDraw');
							pr.skip('phaseDiscard');
							pr.skip('phaseUse');
						} else {
							pr.recover(999);
							pr.draw(3);
							pr.skip('phaseJudge')
							pr.skip('phaseDraw')
							pr.skip('phaseDiscard');
							pr.skip('phaseUse');
						}
						'step 1'
						player.removeSkill('syms_xfxz')
						player.removeSkill('syms_xfxz2')
					}
				};
				lib.skill.syms_djxz = {
					mark: true,
					unique: true,
					init: function (player) {
						player.storage.syms_djxz = 1;
						game.addVideo('storage', player, ['syms_djxz', player.storage.syms_djxz]);
					},
					intro: {
						content: function (storage) {
							return '大将休整回合：' + storage + '/6';
						},
					},
					trigger: {
						player: "phaseBegin",
					},
					forced: true,
					filter: function (event, player) {
						if(player.storage.syms_djxz >= 6) return false;
						return player.storage.syms_djxz < 6;
					},
					content: function () {
						player.$damagepop(1, 'unknownx');
						player.storage.syms_djxz += 1;
						if(player.storage.syms_djxz > 6) player.storage.syms_djxz = 6;
						game.addVideo('storage', player, ['syms_djxz', player.storage.syms_djxz]);
					},
				};
				lib.skill.syms_djxz2 = {
					trigger: {
						player: 'phaseBegin'
					},
					forced: true,
					filter: function (event, player) {
						return player.storage.syms_djxz == 6;
					},
					content: function () {
						'step 0'
						player.previousSeat.revive(player.previousSeat.hp);
						var pr = player.previousSeat;
						if(player.previousSeat.maxHp < 4) {
							pr.recover(999);
							pr.draw(4);
							pr.skip('phaseJudge');
							pr.skip('phaseDraw');
							pr.skip('phaseDiscard');
							pr.skip('phaseUse');
						} else {
							pr.recover(999);
							pr.draw(3);
							pr.skip('phaseJudge')
							pr.skip('phaseDraw')
							pr.skip('phaseDiscard');
							pr.skip('phaseUse');
						}
						'step 1'
						player.removeSkill('syms_djxz')
						player.removeSkill('syms_djxz2')
					}
				};
				lib.skill.syms_xz = {
					trigger: {
						player: "dieBegin",
					},
					forced: true,
					filter: function (event, player) {
						return player != game.zhu;
					},
					content: function () {
						'step 0'
						if(player == game.zhu.previous) game.zhu.addSkill('syms_djxz');
						if(player == game.zhu.previous) game.zhu.addSkill('syms_djxz2');
						'step 1'
						if(player == game.zhu.next) game.zhu.addSkill('syms_xfxz');
						if(player == game.zhu.next) game.zhu.addSkill('syms_xfxz2');
						'step 2'
						if(player == game.zhu.previousSeat.previous) game.zhu.addSkill('syms_zjxz');
						if(player == game.zhu.previousSeat.previous) game.zhu.addSkill('syms_zjxz2');
					}
				}
				lib.translate.syms_cc = '重铸';
				lib.translate.syms_djxz = '休整';
				lib.translate.syms_xfxz = '休整';
				lib.translate.syms_zjxz = '休整';
				lib.skill.syms_cc = {
					enable: 'phaseUse',
					filter: function (event, player) {
						return player.num('h', {
							subtype: 'equip1'
						}) > 0;
					},
					filterCard: {
						subtype: 'equip1'
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
						for(var i = 0; i < cards.length; i++) {
							ui.discardPile.appendChild(cards[i]);
						}
					},
					ai: {
						order: 3.5,
						result: {
							player: 1
						}
					}
				}
				lib.skill.syms_cz = {
					trigger: {
						global: "dieBegin"
					},
					forced: true,
					filter: function (event, player) {
						return player != event.player && event.player.identity == 'fan'
					},
					content: function () {
						'step 0'
						player.draw();
					}
				};
				lib.skill.syms_th = {
					trigger: {
						global: "phaseEnd",
					},
					forced: true,
					filter: function (event, player) {
						return player != event.player && event.player != player.previous
					},
					content: function () {
						'setp 0'
						player.insertPhase();
					}
				};
				lib.config.mode_config.identity.player_number=4;
				lib.config.mode_config.identity.identity_mode='normal';
				lib.config.mode_config.identity.enhance_zhu = false;
				lib.config.mode_config.identity.special_identity = true;
				lib.config.mode_config.identity.double_character = false;
				lib.config.mode_config.identity.free_choose = false;
				lib.config.mode_config.identity.change_choice = true;
				lib.config.mode_config.identity.change_identity = true;
				lib.config.mode_config.identity.change_card = 'twice';
			}
		};
		lib.brawl.qunxiongzhulu = {
			name: '群雄逐鹿',
			mode: 'identity',
			intro: [
				'<font color=#FF0>模式作者</font>：天气亏',
				'<font color=#FF0>游戏人数</font>：'+
				'<select size="1" style="width:40px;height:18px">'+
				'<option value=2>2</option>'+
				'<option value=3>3</option>'+
				'<option value=4>4</option>'+
				'<option value=5>5</option>'+
				'<option value=6>6</option>'+
				'<option value=7>7</option>'+
				'<option value=8>8</option>'+
				'<option value=9>9</option>'+
				'<option value=10>10</option>'+
				'<option value=11>11</option>'+
				'<option value=12>12</option>'+
				'<option value=13>13</option>'+
				'<option value=14>14</option>'+
				'<option value=15>15</option>'+
				'<option value=16>16</option>'+
				'</select>人',
				'<font color=#FF0>当前将池</font>：'+
				'<select size="1" style="width:90px;height:18px">'+
				'<option value=神将>神将</option>'+
				'<option value=标准包>标准包</option>'+
				'<option value=武庙>武庙</option>'+
				'<option value=三国标准包>三国标准包</option>'+
				'<option value=列女传>列女传</option>'+
				'<option value=诸子百家>诸子百家</option>'+
				'<option value=扩展综合>扩展综合</option>'+
				'</select>',
				'<font color=#FF0>游戏特色</font>：局势变化多端，考验玩法 ',
				'<font color=#FF0>模式简介</font>：<br>&nbsp&nbsp分为天子、诸侯、叛贼、辅臣，天子需运筹帷幄，诸侯需消灭其他势力，辅臣需协助天子，叛贼则推翻汉王朝。',
				"<font color=#FF0>规则介绍</font>：<br>诸侯有“势力兼并”,“一方霸主”,“天下至霸”三个进阶段。<br>辅臣有“一股清流”,“匡扶汉室”,“一匡天下”三个进阶段。<br>叛贼有“郡县沦陷”,“天下震动”,“气数将尽”三个进阶段。<li>其次,诸侯有[挟汉],辅臣有[丞相],叛贼有[贼首],[内乱]。",
				"<font color=#FF0>一股清流</font> 辅臣第一次击杀触发,天子摸牌一张,辅臣得技[特权]",
				"<font color=#FF0>势力兼并</font> 诸侯第一次击杀触发，得技[特权]",
				"<font color=#FF0>郡县沦陷</font> 叛贼第一次击杀触发，所有叛贼摸牌一张，天子弃牌",
				'<font color=#FF0>胜负简介</font>：<br><font color=#FF0>一统天下</font> 天子消灭所有敌人。<br><font color=#FF0>更朝换代</font> 有一诸侯最终胜利。<br><font color=#FF0>推翻统治</font> 叛贼击杀天子。',
				'<font color=#FF0>专属牌堆</font>：已加入，持续更新中。',
				'<font color=#FF0>特殊人物</font>：暂待更新。',
			],
			showcase:function(init){
				this.parentNode.style['overflow-x']='hidden';
				this.parentNode.style['overflow-y']='scroll';
				this.parentNode.childNodes[0].style.position='fixed';
				if(_status.tqk_qunxiongzhulu_bg!=true){
					_status.tqk_qunxiongzhulu_bg=true;
					var select0=this.parentNode.childNodes[2].querySelectorAll('select')[0];
					select0.onchange=function(){
						var choice=this.options[this.selectedIndex].value;
						lib.config.tqk_qunxiongzhulu.rs=choice;
						game.saveConfig('tqk_qunxiongzhulu',lib.config.tqk_qunxiongzhulu);
						game.say1('将群雄逐鹿的游戏人数设置为'+choice+'人');
					};
					for(var i=0;i<select0.options.length;i++){
						if(select0.options[i].value==lib.config.tqk_qunxiongzhulu.rs) select0.selectedIndex=i;
					};
					var select1=this.parentNode.childNodes[2].querySelectorAll('select')[1];
					select1.onchange=function(){
						var choice=this.options[this.selectedIndex].value;
						lib.config.tqk_qunxiongzhulu.jc=choice;
						game.saveConfig('tqk_qunxiongzhulu',lib.config.tqk_qunxiongzhulu);
						game.say1('将群雄逐鹿的将池设置为'+choice);
					};
					for(var i=0;i<select1.options.length;i++){
						if(select1.options[i].value==lib.config.tqk_qunxiongzhulu.jc) select1.selectedIndex=i;
					};
					
				};
			},
			content: {
				chooseCharacter: function () {
					var config=lib.config.tqk_qunxiongzhulu;
					var jc=config.jc;
					if(jc == "神将") {
						if(game.me == game.zhu) _status.event.trigger('init');
						else if(game.me != game.zhu) _status.event.trigger('init2');
						var num = game.me == game.zhu ? 1 : 1;
						var list=[];
						for(var i=0;i<characterSJ.length;i++){
							list.push(characterSJ[i]);
						};
						list=list.randomRemove(num);
						return list;
					}else if(jc == "标准包") {
						if(game.me == game.zhu) _status.event.trigger('init');
						else if(game.me != game.zhu) _status.event.trigger('init2');
						var num = game.me == game.zhu ? 5 : 4;
						var list=[];
						for(var i=0;i<characterbzb.length;i++){
							list.push(characterbzb[i]);
						};
						list=list.randomRemove(num);
						return list;
					}else if(jc == '武庙') {
						if(game.me == game.zhu) _status.event.trigger('init');
						else if(game.me != game.zhu) _status.event.trigger('init2');
						var num = game.me == game.zhu ? 5 : 3;
						var list=[];
						for(var i=0;i<characterwm.length;i++){
							list.push(characterwm[i]);
						};
						list=list.randomRemove(num);
						return list;
					}else if(jc == '诸子百家') {
						if(game.me == game.zhu) _status.event.trigger('init');
						else if(game.me != game.zhu) _status.event.trigger('init2');
						var num = game.me == game.zhu ? 32 : 30;
						var list=[];
						for(var i=0;i<characterzzbj.length;i++){
							list.push(characterzzbj[i]);
						};
						list=list.randomRemove(num);
						return list;
					}else if(jc == '扩展综合') {
						if(game.me == game.zhu) _status.event.trigger('init');
						else if(game.me != game.zhu) _status.event.trigger('init2');
						var num = game.me == game.zhu ? 80 : 70;
						var list=[];
						for(var i=0;i<characterList4.length;i++){
							list.push(characterList4[i]);
						};
						list=list.randomRemove(num);
						return list;
					}else if(jc == '列女传') {
						if(game.me == game.zhu) _status.event.trigger('init');
						else if(game.me != game.zhu) _status.event.trigger('init2');
						var num = game.me == game.zhu ? 15 : 10;
						var list=[];
						for(var i=0;i<characterList2.length;i++){
							list.push(characterList2[i]);
						};
						list=list.randomRemove(num);
						return list;
					}else{
						if(game.me == game.zhu) _status.event.trigger('init');
						else if(game.me != game.zhu) _status.event.trigger('init2');
						var num = game.me == game.zhu ? 30 : 25;
						var list=[];
						for(var i=0;i<characterList.length;i++){
							list.push(characterList[i]);
						};
						list=list.randomRemove(num);
						return list;
					};
				},
				chooseCharacterAi: function (player) {
					var config=lib.config.tqk_qunxiongzhulu;
					var jc=config.jc;
					if(jc == "神将") {
						if(player == game.zhu) _status.event.trigger('init');
						else if(player != game.zhu) _status.event.trigger('init2');
						player.init(characterSJ.randomRemove());
					}else if(jc == '标准包') {
						if(player == game.zhu) _status.event.trigger('init');
						else if(player != game.zhu) _status.event.trigger('init2');
						player.init(characterbzb.randomRemove());
					}else if(jc == '武庙') {
						if(player == game.zhu) _status.event.trigger('init');
						else if(player != game.zhu) _status.event.trigger('init2');
						player.init(characterwm.randomRemove());
					}else if(jc == '诸子百家') {
						if(player == game.zhu) _status.event.trigger('init');
						else if(player != game.zhu) _status.event.trigger('init2');
						player.init(characterzzbj.randomRemove());
					}else if(jc == '扩展综合') {
						if(player == game.zhu) _status.event.trigger('init');
						else if(player != game.zhu) _status.event.trigger('init2');
						player.init(characterList4.randomRemove());
					}else if(jc == '列女传') {
						if(player == game.zhu) _status.event.trigger('init');
						else if(player != game.zhu) _status.event.trigger('init2');
						player.init(characterList2.randomRemove());
					}else{
						if(player == game.zhu) _status.event.trigger('init');
						else if(player != game.zhu) _status.event.trigger('init2');
						player.init(characterList.randomRemove());
					}
				},
				cardPile: function () {
					return cardPack2;
				},
				gameStart: function () {
					'step 0'
					game.swapSeat = function (all) {};
					ui.backgroundMusic.src = lib.assetURL + 'extension/扩展ol/KZSM.mp3';
					ui.background.setBackgroundImage("extension/扩展ol/sskzsm.jpg");
					'step 1'
					if(game.me.identity != 'zhu') game.zhu.maxHp++;
					if(game.me.idenyity != 'zhu') game.zhu.hp++;
					game.me.maxHp++;
					game.me.hp++;
					'step 2'
					for(var i = 0; i < game.players.length; i++) {
						if(game.players[i].identity == 'zhu') continue;
						game.players[i].identity = 'nei';
						game.players[i].awakenSkill('bz_yisha');
					};
					game.zhu.addSkill('QXZL_CF')
					game.zhu.awakenSkill('bz_yisha')
					'step 3'
					lib.translate.zhu = '天子';
					lib.translate.nei = '诸侯';
					lib.translate.zhong = '辅臣';
					game.showIdentity();
					'step 4'
					for(var i = 0; i < game.players.length; i++) {
						game.players[i].addSkill('QXZL_PD');
					}
				}
			},
			init: function () {
				game.identityVideoName='群雄逐鹿';
				/*----------------技能页-----------------*/
				lib.skill.QXZL_PD = {
					forced: true,
					trigger: {
						global: "phaseBegin",
					},
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						'step 0'
						if(player.identity == 'nei') player.addSkill('ZH_JB');
						if(player.identity == 'nei') player.addSkill('zl_sljb');
						if(player.identity == 'zhong') player.addSkill('zl_ygql');
						if(player.identity == 'nei') player.addSkill('ZH_PH');
						if(player.identity == 'zhu') player.addSkill('TZ_FF');
						'step 1'
						player.awakenSkill('QXZL_PD')
					}
				}
				lib.skill.PZ_XY = {
					mark: true,
					intro: {
						content: "声势浩大"
					},
					trigger: {
						player: "phaseDiscardBefore",
					},
					filter: function (event, player) {
						return player.num('h') > player.hp;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('PZ_XY'), function (card, player, target) {
							return target != player && target.identity == 'fan';
						}).set('ai', function (target) {
							return get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('PZ_XY', result.targets);
							result.targets[0].gainPlayerCard(player, player.num('h') - player.hp, 'h', true)
						}
					}
				}
				lib.skill.ZH_JB = {
					mark: true,
					forced: true,
					intro: {
						content: "诸侯纷争"
					},
					trigger: {
						source: "dieBegin",
					},
					filter: function (event, player) {
						return event.player.num('hej') > 0
					},
					content: function () {
						'step 0'
						player.gainPlayerCard(trigger.player, 999, 'hej', true)
						'step 1'
						player.maxHp++;
					}
				}
				lib.skill.TZ_FF = {
					mark: true,
					forced: true,
					intro: {
						content: "莫非王臣"
					},
					trigger: {
						source: "dieBegin",
					},
					filter: function (event, player) {
						return event.player.identity != 'zhong' && event.player.group == player.group;
					},
					content: function () {
						'step 0'
						trigger.untrigger();
						trigger.finish();
						trigger.player.chooseToDiscard(999, 'hej', true)
						trigger.player.recover(2);
						trigger.player.draw(3);
						trigger.player.removeSkill('ZH_JB');
						trigger.player.addSkill('FC_TQ1')
						trigger.player.removeSkill('ZH_PH');
						trigger.player.removeSkill('zl_sljb');
						trigger.player.removeSkill('zl_yfbz');
						trigger.player.removeSkill('zl_txzb');
						trigger.player.removeSkill('ZH_TQ1');
						trigger.player.removeSkill('ZH_TQ2');
						trigger.player.removeSkill('zl_jxlx');
						trigger.player.removeSkill('zl_txzd');
						trigger.player.removeSkill('zl_qsjj');
						trigger.player.addSkill('zl_ygql');
						'step 1'
						trigger.player.identity = 'zhong';
						game.showIdentity();
					}
				}
				lib.skill.FC_YW = {
					mark: true,
					intro: {
						content: "笃悠之臣"
					},
					forced: true,
					trigger: {
						player: "phaseBegin",
					},
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						'step 0'
						if(game.players.length > 5) {
							if(player.maxHp > player.hp) player.recover();
							if(player.maxHp == player.hp) player.maxHp++;
						} else {
							player.draw(player.maxHp - player.hp);
						}
					},
				}
				lib.translate.PZ_XY = '响应',
				lib.translate.PZ_XY_info = '<font color=orange>叛贼技</font> ：你的回合结束时，可以令一名其他叛贼获得你多余的手牌',
				lib.translate.ZH_JB = '兼并',
				lib.translate.ZH_JB_info = '<font color=orange>诸侯技</font>、 <font color=red>锁定技</font> ：当你杀死辅臣或者诸侯时，你获得其所有牌并上升一点体力上限',
				lib.translate.TZ_FF = '分封',
				lib.translate.TZ_FF_info = '<font color=orange>天子技</font>、 <font color=red>锁定技</font> ：当你杀死一名角色时，若其势力与你一致，防止其死亡，再将其身份转为“辅臣”，并且令之回血两点以及摸牌三张（其先弃置所有牌）',
				lib.translate.FC_YW = '雅望',
				lib.translate.FC_YW_info = '<font color=orange>辅臣技</font>、 <font color=red>锁定技</font> ：你的回合开始时，若游戏人数大于5，则若你已受伤，你回血一点，若你未受伤，上升一点体力上限，若游戏人数不大于5，你摸取等同于已损失体力值的牌。',
				lib.storage.mode = "qunxiongzhulu";
				lib.config.mode_config.identity.identity_mode='normal';
				var config=lib.config.tqk_qunxiongzhulu;
				var rs=config.rs;
				lib.config.mode_config.identity.player_number=rs;
				if(rs == '2') lib.config.mode_config.identity.identity.push(['zhu', 'nei']);
				if(rs == '3') lib.config.mode_config.identity.identity.push(['zhu', 'nei', 'fan']);
				if(rs == '4') lib.config.mode_config.identity.identity.push(['zhu', 'nei', 'fan', 'zhong']);
				if(rs == '5') lib.config.mode_config.identity.identity.push(['zhu', 'nei', 'fan', 'fan', 'zhong']);
				if(rs == '6') lib.config.mode_config.identity.identity.push(['zhu', 'nei', 'zhong', 'fan', 'fan', 'fan']);
				if(rs == '7') lib.config.mode_config.identity.identity.push(['zhu', 'nei', 'fan', 'fan', 'fan', 'zhong', 'zhong']);
				if(rs == '8') lib.config.mode_config.identity.identity.push(['zhu', 'nei', 'zhong', 'zhong', 'fan', 'fan', 'fan', 'fan']);
				lib.config.mode_config.identity.enhance_zhu = false;
				lib.config.mode_config.identity.special_identity = false;
				lib.config.mode_config.identity.double_character = false;
				lib.config.mode_config.identity.free_choose = false;
				lib.config.mode_config.identity.change_choice = true;
				lib.config.mode_config.identity.change_identity = true;
				lib.config.mode_config.identity.change_card = 'twice';
				/*————————————————————————卡牌页——————————————————————————*/
				game.addCard('zl_jinjun', {
					enable: true,
					type: 'trick',
					filter: function (event, player) {
						return player.num('h') > 1;
					},
					filterTarget: function (card, player, target) {
						return target.num('he') > 0 && target != player;
					},
					content: function () {
						'step 0'
						player.chooseToDiscard('h', true);
						'step 1'
						player.discardPlayerCard(1, 'he', target, true)
					},
					ai: {
						order: 9,
						value: [8, 3],
						useful: [6, 3],
						result: {
							target: -2.5,
						},
						tag: {
							recover: 1,
						},
					},
				}, {
					translate: '进军',
					description: '在你的手牌数大于1时使用，弃置一张手牌再弃置一名其他角色的一张牌',
				});
				game.addCard('zl_zhengbing', {
					enable: true,
					type: 'basic',
					selectTarget: -1,
					modTarget: true,
					filterTarget: function (card, player, target) {
						return target == player;
					},
					content: function () {
						'step 0'
						player.gain(game.createCard('sha'));
					},
					ai: {
						order: 9,
						value: [8, 3],
						useful: [6, 3],
						result: {
							player: 2.5,
							target: 2.5,
						},
						tag: {
							recover: 1,
						},
					},
				}, {
					translate: '征兵',
					description: '使用后获得一张【杀】',
				});
				game.addCard('zl_zhengbian', {
					enable: true,
					type: "trick",
					selectTarget: -1,
					modTarget: true,
					filterTarget: function (card, player, target) {
						return target == player;
					},
					content: function () {
						'step 0'
						player.chooseToDiscard(2, 'h').ai = function (card) {
							return 6 - ai.get.value(card);
						}
						'step 1'
						if(result.bool) {
							player.draw(2)
						} else {
							event.finish();
						}
					},
					ai: {
						order: 4,
						value: [8, 3],
						useful: [6, 3],
						result: {
							player: 2.5,
							target: 1.5,
						},
						tag: {
							recover: 1,
						},
					},
				}, {
					translate: '整编',
					description: '使用后弃置两张牌，再摸两张牌',
				});
				game.addCard('zl_dazhengbian', {
					enable: true,
					type: 'trick',
					selectTarget: -1,
					modTarget: true,
					filterTarget: function (card, player, target) {
						return target == player;
					},
					content: function () {
						'step 0'
						player.chooseToDiscard([1, 3], 'h').ai = function (card) {
							return 6 - ai.get.value(card);
						}
						'step 1'
						if(result.bool) {
							var num = result.cards.length;
							player.draw(num)
						} else {
							event.finish();
						}
					},
					ai: {
						order: 4,
						value: [8, 3],
						useful: [6, 3],
						result: {
							player: 2.5,
							target: 2.5,
						},
						tag: {
							recover: 1,
						},
					},
				}, {
					translate: '大整编',
					description: '弃置一到三张手牌，再摸取等量的牌',
				});
			}
		};
		lib.brawl.biaozhunmoshi = {
			name: '标准模式',
			mode: 'identity',
			intro: [
				'<font color=#FF0>模式作者</font>：天气亏',
				'<font color=#FF0>游戏人数</font> ：' +
				'<select size="1" style="width:40px;height:18px">'+
				'<option value=2>2</option>'+
				'<option value=3>3</option>'+
				'<option value=4>4</option>'+
				'<option value=5>5</option>'+
				'<option value=6>6</option>'+
				'<option value=7>7</option>'+
				'<option value=8>8</option>'+
				'<option value=9>9</option>'+
				'<option value=10>10</option>'+
				'<option value=11>11</option>'+
				'<option value=12>12</option>'+
				'<option value=13>13</option>'+
				'<option value=14>14</option>'+
				'<option value=15>15</option>'+
				'<option value=16>16</option>'+
				'</select>人',
				'<font color=#FF0>游戏特色</font> ：<br>&nbsp&nbsp存在揭示游戏情报或者体现当前事件的动画（持续更新中），以增加趣味和策略性',
				'<font color=#FF0>模式介绍</font> ：<br>&nbsp&nbsp目的在于为《三国标准包》提供一个良好的游戏环境，且也是为了还原标准的三国杀的趣味，并在此基础上，进行了一些创新（内容、规则等并未改动）',
				'<font color=#FF0>将池</font>：《三国标准包》内角色（持续更新中）<br>注：无法自由选将',
				'<font color=#FF0>牌堆</font>：《标准包》牌堆。',
				'<font color=#FF0>人物专属牌堆</font>：<br>诸葛亮——【隆中对】<br>曹操——【招贤令】<br>关羽——【亢龙有悔】',
			],
			showcase:function(init){
				this.parentNode.style['overflow-x']='hidden';
				this.parentNode.style['overflow-y']='scroll';
				this.parentNode.childNodes[0].style.position='fixed';
				if(_status.tqk_biaozhunmoshi_bg!=true){
					_status.tqk_biaozhunmoshi_bg=true;
					var select0=this.parentNode.childNodes[2].querySelectorAll('select')[0];
					select0.onchange=function(){
						var choice=this.options[this.selectedIndex].value;
						lib.config.tqk_biaozhunmoshi.rs=choice;
						game.saveConfig('tqk_biaozhunmoshi',lib.config.tqk_biaozhunmoshi);
						game.say1('将群雄逐鹿的游戏人数设置为'+choice+'人');
					};
					for(var i=0;i<select0.options.length;i++){
						if(select0.options[i].value==lib.config.tqk_biaozhunmoshi.rs) select0.selectedIndex=i;
					};
				};
			},
			content: {
				cardPile: function () {
					return cardPack;
				},
				chooseCharacter: function () {
					if(game.me == game.zhu) _status.event.trigger('init');
					else if(game.me != game.zhu) _status.event.trigger('init2');
					characterList.randomSort();
					var num = game.me == game.zhu ? 25 : 20;
					var list = [];
					list = list.concat(characterList.randomRemove(num));
					return list;
				},
				chooseCharacterAi: function (player) {
					if(player == game.zhu) _status.event.trigger('init');
					else if(player != game.zhu) _status.event.trigger('init2');
					characterList.randomSort();
					player.init(characterList.randomRemove());
				},
				gameStart: function () {
					'step 0'
					if(game.me.identity != 'zhu') game.zhu.maxHp++;
					if(game.me.idenyity != 'zhu') game.zhu.hp++;
					'step 1'
					for(var i = 0; i < game.players.length; i++) {
						game.players[i].addSkill('BZMS_JUEDOU');
						game.players[i].addSkill('BZMS_TAO');
						game.players[i].addSkill('BZMS_BING1')
						game.players[i].addSkill('BZMS_BING2')
						game.players[i].addSkill('BZMS_FANG1')
						game.players[i].addSkill('BZMS_FANG2')
						game.players[i].addSkill('BZMS_FANG3')
						game.players[i].addSkill('BZMS_FANG4')
						game.players[i].addSkill('BZMS_BING3')
						game.players[i].addSkill('BZMS_MOU1')
						game.players[i].addSkill('BZMS_MOU2')
						game.players[i].addTempSkill('BZMS_ZSKP');
					}
					'step 2'
				}
			},
			init: function () {
				game.identityVideoName='标准模式';
				//lib.storage.mode = "biaozhunmoshi";
				lib.config.mode_config.identity.identity_mode='normal';
				var config=lib.config.tqk_biaozhunmoshi;
				var rs=config.rs;
				lib.config.mode_config.identity.player_number=rs;
				if(rs == '2') lib.config.mode_config.identity.identity.push(['zhu', 'nei']);
				if(rs == '3') lib.config.mode_config.identity.identity.push(['zhu', 'nei', 'fan']);
				if(rs == '4') lib.config.mode_config.identity.identity.push(['zhu', 'nei', 'fan', 'zhong']);
				if(rs == '5') lib.config.mode_config.identity.identity.push(['zhu', 'nei', 'fan', 'fan', 'zhong']);
				if(rs == '6') lib.config.mode_config.identity.identity.push(['zhu', 'nei', 'zhong', 'fan', 'fan', 'fan']);
				if(rs == '7') lib.config.mode_config.identity.identity.push(['zhu', 'nei', 'fan', 'fan', 'fan', 'zhong', 'zhong']);
				if(rs == '8') lib.config.mode_config.identity.identity.push(['zhu', 'nei', 'zhong', 'zhong', 'fan', 'fan', 'fan', 'fan']);
				lib.config.mode_config.identity.enhance_zhu = false;
				lib.config.mode_config.identity.special_identity = false;
				lib.config.mode_config.identity.double_character = false;
				lib.config.mode_config.identity.free_choose = false;
				lib.config.mode_config.identity.change_choice = false;
				lib.config.mode_config.identity.change_identity = false;
				lib.config.mode_config.identity.change_card = 'twice';
				game.addCard('bz_kanglongyouhui', {
					fullskin: true,
					enable: true,
					type: 'trick',
					filterTarget: function (card, player, target) {
						return target.num('h') > 4 && target != player;
					},
					content: function () {
						'step 0'
						target.chooseToDiscard('h', true);
						'step 1'
						target.skip('phaseDraw')
					},
					ai: {
						order: 8,
						value: [8, 3],
						useful: [6, 3],
						result: {
							target: function (player, target) {
								var num = target.num('h');
								if(num < 4) return -2;
								if(target.hp < 3 & num < 4) return -2.5;
								return -2;
							},
						},
						tag: {
							recover: 1,
						},
					},
					fullimage: true,
				}, {
					translate: '亢龙有悔',
					description: '出牌阶段，对一名手牌数大于4的其他角色使用，令之先弃置一张手牌再跳过其下个摸牌阶段',
					number: parseInt(config.bz_kanglongyouhui)
				});
				game.addCard('bz_longzhongdui', {
					fullskin: true,
					enable: true,
					type: 'trick',
					filterTarget: function (card, player, target) {
						return target.num('he') > 0;
					},
					selectTarget: 3,
					multitarget: true,
					targetprompt: ["得牌", "得牌弃牌", "得牌弃牌"],
					content: function () {
						'step 0'
						targets[0].gain(game.createCard('wuzhong'));
						'step 1'
						targets[1].gainPlayerCard(targets[2], 1, 'he', true);
						'step 2'
						targets[2].gainPlayerCard(targets[1], 1, 'he', true);
						'step 3'
						targets[1].chooseToDiscard(1, 'h', true);
						targets[2].chooseToDiscard(1, 'h', true);
						'step 4'
						event.finish();
					},
					ai: {
						order: 9,
						value: [8, 3],
						useful: [6, 3],
						result: {
							targets: function (player, targets) {
								var num = targets[0].num('h');
								if(num == 5) return 2;
								if(num == 4) return 2;
								if(targets[0].hp < 3) return 2.5;
								return 2;
							},
						},
						tag: {
							recover: 1,
						},
					},
					fullimage: true,
				}, {
					translate: '隆中对',
					description: '选择三名均有牌的角色，令第一名获得【无中生有】，第二名获得第三名的一张牌，然后第三名获得第二名一张牌再由他们各自弃置一张牌，，',
					//number: parseInt(config.bz_longzhongdui)
				});
				game.addCard('bz_zhaoxianling', {
					fullskin: true,
					enable: true,
					type: 'trick',
					filterTarget: true,
					content: function () {
						'step 0'
						target.draw();
						'step 1'
						player.useCard({
							name: 'wugu'
						}, game.players);
					},
					ai: {
						order: 4,
						value: [8, 3],
						useful: [6, 3],
						result: {
							target: function (player, target) {
								var eff = ai.get.recoverEffect(target, player, target);
								if(eff <= 0) return 0;
								var num = target.maxHp - target.num('h');
								if(num < 1) return 0;
								if(num == 1) return 1;
								if(target.num('h') < 2) return 2.5;
								return 2;
							},
						},
						tag: {
							recover: 1,
						},
					},
					fullimage: true,
				}, {
					translate: '招贤令',
					description: '使用后，指定角色摸取一张牌并视为你使用了一张【五谷丰登】',
					//number: parseInt(config.bz_zhaoxianling)
				});
			}
		};
	};
}