window.func = function (lib, game, ui, get, ai, _status) {
	if (lib.config.kzol_skillSkin == undefined) game.saveConfig('kzol_skillSkin', {});
	if (lib.config.kzol_skillSkinEquiping == undefined) game.saveConfig('kzol_skillSkinEquiping', {});
	lib.skillSkin = {
		'强弩神射': {
			value: 300,
			owner: 'hnyhzr后羿ol',
			skills: ['nyhzr强弩'],
		},
		'幻影射手': {
			value: 990,
			owner: 'hnyhzr后羿ol',
			skills: ['nyhzr强化'],
		},
		'银月箭华': {
			value: 500,
			owner: 'hnyhzr后羿ol',
			skills: ['nyhzr银箭ol'],
		},
		'皎月王侯': {
			value: 800,
			owner: 'hnyhzr后羿ol',
			skills: ['nhyzr皎月之力'],
		},
		'黄金之翼': {
			value: 750,
			owner: 'hnyhzr后羿ol',
			skills: ['nyhzr黄金羽翼'],
		},
		'紫耀异星': {
			value: 990,
			owner: 'hnyhzr后羿ol',
			maxHp:-1,
			skills: ['nyhzr紫耀异星','nyhzr颠倒灵魂ol'],
		},
		'妙法仙灵': {
			value: 300,
			owner: 'lnyhzr咯哩咯哩ol',
			skills: ['nyhzr仙灵妙法'],
		},
		'暗黑小魔星': {
			value: 800,
			owner: 'lnyhzr咯哩咯哩ol',
			skills: ['nyhzr回忆童年'],
		},
		'炫光精灵': {
			value: 990,
			owner: 'lnyhzr咯哩咯哩ol',
			skills: ['nyhzr炫光冲击'],
		},
		'魔女之刃': {
			value: 0,
			owner: 'lnyhzr莉莉姆.提露埃拉ol',
			skills: [],
		},
		'火神战姬': {
			value: 0,
			owner: 'lnyhzr兰ol',
			skills: [],
		},
		'影刃': {
			value: 0,
			owner: 'fnyhzr服部半藏ol',
			skills: [],
		},
	};
	lib.skillSkin_character=[];
	for(var i in lib.skillSkin){
		if(!lib.skillSkin_character.contains(lib.skillSkin[i].owner)) lib.skillSkin_character.push(lib.skillSkin[i].owner);
	};
	var bool = false;
	for (var i in lib.skillSkin) {
		if (lib.config.kzol_skillSkin[i] == undefined) {
			lib.config.kzol_skillSkin[i] = false;
			bool = true;
		};
	};
	game.saveConfig('kzol_skillSkin', lib.config.kzol_skillSkin);
	for(var i in lib.config.kzol_skillSkinEquiping){
		if(lib.character[i][4]!=undefined){
			var bool=false;
			for(var j=0;j<lib.character[i][4].length;j++){
				if(lib.character[i][4][j].indexOf('ext:扩展ol/')!=-1){
					lib.character[i][4][j]='ext:扩展ol/'+lib.config.kzol_skillSkinEquiping[i]+'.jpg';
					bool=true;
				};
			};
			if(bool==false) lib.character[i][4].push('ext:扩展ol/'+lib.config.kzol_skillSkinEquiping[i]+'.jpg');
		};
		var skills=lib.skillSkin[lib.config.kzol_skillSkinEquiping[i]].skills;
		var skills1=[];
		for(var j=0;j<skills.length;j++){
			skills1.unshift(skills[j]);
		};
		for(var j=0;j<skills1.length;j++){
			lib.character[i][3].unshift(skills1[j]);
		};
		var maxHp=lib.skillSkin[lib.config.kzol_skillSkinEquiping[i]].maxHp;
		if(maxHp!=undefined){
			lib.character[i][2]+=maxHp;
		};
	};
	var translate = {
		"nyhzr强弩": "强弩",
		"nyhzr强弩_info": "<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>当你的体力大于二时，你造成的伤害+1，你受到的伤害+1",
		"nyhzr强化":"强化",
		"nyhzr强化_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>游戏中，你可以通过提升能力等级来强化自身基本属性",
		"nyhzr银箭ol":"银箭",
		"nyhzr银箭ol_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>燎火之箭转化后的属性变为雷属性<br>当你造成雷属性伤害时，你随机复制目标一项技能",
		"nhyzr皎月之力":"皎月之力",
		"nhyzr皎月之力_info":"每个回合末，你可以流失一点体力进行一个额外的回合（无法连续使用），在额外的回合中，你使用的卡牌没有数量和距离限制",
		"nyhzr黄金羽翼":"黄金羽翼",
		"nyhzr黄金羽翼_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><li>场上除了对你造成的伤害外的伤害均视为由你造成<li>你造成伤害后，与被伤害者交换座位",
		"nyhzr紫耀异星":"紫耀异星",
		"nyhzr紫耀异星_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><li>你的体力上限-1<li>你获得技能【颠倒灵魂】",
		"nyhzr仙灵妙法1":"仙灵妙法",
		"nyhzr仙灵妙法":"仙灵妙法",
		"nyhzr仙灵妙法_info":"出牌阶段，你可以令一只妖精皮皮去治疗你选定的目标，每回合限一次",
		"nyhzr回忆童年":"回忆童年",
		"nyhzr回忆童年_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>所有人于其回合开始前进行一次判定，若判定结果为红色这该角色恢复一点体力并进入幸福童年（回合内无法使用任何牌）；为黑色则进入黑色童年（回合内手牌没有次数限制，回合结束后翻面）",
		"nyhzr幸福童年":"幸福童年",
		"nyhzr幸福童年_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>回合内无法使用任何牌",
		"nyhzr黑色童年":"黑色童年",
		"nyhzr黑色童年_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span>回合内手牌没有次数限制，回合结束后翻面",
		"nyhzr炫光冲击":"炫光冲击",
		"nyhzr炫光冲击_info":"出牌阶段，你可以对一名角色造成一点雷电伤害,使用后删除该技能",
	};
	for (var i in translate) {
		lib.translate[i] = translate[i];
	};
	var skill = {
		"nyhzr强弩": {
			nobracket: true,
			group: ["nyhzr强弩_1", "nyhzr强弩_2"],
			subSkill: {
				1: {
					trigger: {
						source: "damageBegin",
					},
					filter: function (event, player) {
						return player.hp > 2;
					},
					forced: true,
					content: function () {
						trigger.num++;
					},
				},
				2: {
					trigger: {
						player: "damageBegin",
					},
					forced: true,
					filter: function (event, player) {
						return player.hp > 2;
					},
					content: function () {
						trigger.num++;
					},
				},
			},
		},
		"nyhzr强化": {
			nobracket: true,
			group: ["nyhzr强化_攻击等级获得", "nyhzr强化_速度等级获得", "nyhzr强化_闪避等级获得", "nyhzr强化_暴击等级获得", "nyhzr强化_防御等级获得", "nyhzr强化_攻击等级", "nyhzr强化_速度等级", "nyhzr强化_闪避等级", "nyhzr强化_暴击等级", "nyhzr强化_防御等级"],
			subSkill: {
				"攻击等级获得": {
					trigger: {
						global: "gameDrawAfter",
					},
					forced: true,
					content: function () {
						if (player.storage.nyhzr强化_攻击等级获得 == undefined) player.storage.nyhzr强化_攻击等级获得 = 0;
						player.markSkill('nyhzr强化_攻击等级获得');
					},
					marktext: "攻",
					intro: {
						content: function (storage) {
							return '<li>当前攻击等级为：' + storage + '级' + '<li>攻击二级=造成伤害+1' + '<li>攻击等级最高6级' + '<li>造成伤害后攻击等级+1'
						},
					},
				},
				"速度等级获得": {
					trigger: {
						global: "gameDrawAfter",
					},
					forced: true,
					content: function () {
						if (player.storage.nyhzr强化_速度等级获得 == undefined) player.storage.nyhzr强化_速度等级获得 = 0;
						player.markSkill('nyhzr强化_速度等级获得');
					},
					marktext: "速",
					intro: {
						content: function (storage) {
							return '<li>当前速度等级为：' + storage + '级' + '<li>速度一级=回合末1%进行一个额外的回合' + '<li>速度等级最高6级' + '<li>回合末速度等级+1'
						},
					},
				},
				"闪避等级获得": {
					trigger: {
						global: "gameDrawAfter",
					},
					forced: true,
					content: function () {
						if (player.storage.nyhzr强化_闪避等级获得 == undefined) player.storage.nyhzr强化_闪避等级获得 = 0;
						player.markSkill('nyhzr强化_闪避等级获得');
					},
					marktext: "闪",
					intro: {
						content: function (storage) {
							return '<li>当前闪避等级为：' + storage + '级' + '<li>闪避一级=受到伤害1%闪避' + '<li>闪避等级最高6级' + '<li>受到伤害闪避等级+1'
						},
					},
				},
				"暴击等级获得": {
					trigger: {
						global: "gameDrawAfter",
					},
					forced: true,
					content: function () {
						if (player.storage.nyhzr强化_暴击等级获得 == undefined) player.storage.nyhzr强化_暴击等级获得 = 0;
						player.markSkill('nyhzr强化_暴击等级获得');
					},
					marktext: "暴",
					intro: {
						content: function (storage) {
							return '<li>当前暴击等级为：' + storage + '级' + '<li>暴击一级=造成伤害后1%+1' + '<li>暴击等级最高6级' + '<li>造成伤害暴击等级+1'
						},
					},
				},
				"防御等级获得": {
					trigger: {
						global: "gameDrawAfter",
					},
					forced: true,
					content: function () {
						if (player.storage.nyhzr强化_防御等级获得 == undefined) player.storage.nyhzr强化_防御等级获得 = 0;
						player.markSkill('nyhzr强化_防御等级获得');
					},
					marktext: "防",
					intro: {
						content: function (storage) {
							return '<li>当前防御等级为：' + storage + '级' + '<li>防御五级=受到伤害-1' + '<li>防御等级最高10级' + '<li>受到伤害防御等级+1'
						},
					},
				},
				"攻击等级": {
					trigger: {
						source: "damageBegin",
					},
					forced: true,
					content: function () {
						if (player.storage.nyhzr强化_暴击等级获得 <= 6) {
							player.storage.nyhzr强化_暴击等级获得 += 1;
							player.syncStorage('nyhzr强化_暴击等级获得');
						}
						if (player.storage.nyhzr强化_攻击等级获得 >= 2 && player.storage.nyhzr强化_攻击等级获得 < 4) {
							trigger.num += 1;
						}
						if (player.storage.nyhzr强化_攻击等级获得 >= 4 && player.storage.nyhzr强化_攻击等级获得 < 6) {
							trigger.num += 2;
						}
						if (player.storage.nyhzr强化_攻击等级获得 >= 6) {
							trigger.num += 3;
						}
						if (player.storage.nyhzr强化_攻击等级获得 <= 6) {
							player.storage.nyhzr强化_攻击等级获得 += 1;
							player.syncStorage('nyhzr强化_攻击等级获得');
						}
					},
				},
				"速度等级": {
					trigger: {
						player: "phaseAfter",
					},
					forced: true,
					content: function () {
						if (player.storage.nyhzr强化_速度等级获得 <= 6) {
							player.storage.nyhzr强化_速度等级获得 += 1;
							player.syncStorage('nyhzr强化_速度等级获得');
						}
						if (Math.random() <= player.storage.nyhzr强化_速度等级获得 * 0.01) {
							player.phase();
							game.log(player, '的速度快，进行一个额外的回合');
						}
					},
				},
				"闪避等级": {
					trigger: {
						player: "damageBegin",
					},
					filter: function (event, player) {
						if (Math.random() > player.storage.nyhzr强化_闪避等级获得 * 0.01) return false;
						return true;
					},
					forced: true,
					content: function () {
						trigger.untrigger();
						trigger.finish();
						game.log(player, '闪避了对方的攻击');
					},
				},
				"暴击等级": {
					trigger: {
						source: "damageBegin",
					},
					filter: function (event, player) {
						if (Math.random() > player.storage.nyhzr强化_暴击等级获得 * 0.1) return false;
						return true;
					},
					forced: true,
					content: function () {
						trigger.num += 1;
						game.log(player, '暴击了');
					},
				},
				"防御等级": {
					trigger: {
						player: "damageBegin",
					},
					forced: true,
					content: function () {
						if (player.storage.nyhzr强化_闪避等级获得 <= 6) {
							player.storage.nyhzr强化_闪避等级获得 += 1;
							player.syncStorage('nyhzr强化_闪避等级获得');
						}
						if (player.storage.nyhzr强化_防御等级获得 <= 6) {
							player.storage.nyhzr强化_防御等级获得 += 1;
							player.syncStorage('nyhzr强化_防御等级获得');
						}
						if (player.storage.nyhzr强化_防御等级获得 >= 5 && player.storage.nyhzr强化_防御等级获得 < 10) {
							trigger.num -= 1;
						}
						if (player.storage.nyhzr强化_防御等级获得 >= 10) {
							trigger.num -= 2;
						}
					},
				},
			},
		},
		"nyhzr银箭ol": {
			nobracket: true,
			trigger: {
				source: "damageEnd",
			},
			filter: function (event) {
				return event.nature == 'thunder';
			},
			forced: true,
			content: function () {
				var skill = trigger.player.get('s', false, false).randomGet();
				game.log(player, '获得了【', lib.translate[skill], '】');
				player.addSkill(skill);
			},
		},
		"nhyzr皎月之力1": {
			nobracket: true,
			mod: {
				cardUsable: function (card) {
					if (get.info(card) && get.info(card).forceUsable) return;
					return Infinity;
				},
				targetInRange: function () {
					return true;
				},
			},
			trigger: {
				player: "phaseEnd",
			},
			forced: true,
			popup:false,
			content: function () {
				player.addSkill('nhyzr皎月之力');
				player.removeSkill('nhyzr皎月之力1');
			}
		},
		"nhyzr皎月之力": {
			nobracket: true,
			trigger: {
				player: "phaseEnd",
			},
			content: function () {
				player.loseHp();
				player.phase();
				player.addSkill('nhyzr皎月之力1');
				player.removeSkill('nhyzr皎月之力');
			},
			check: function (event, player) {
				if (player.num('h') < 2) return false;
				if (player.hp < 2) return false;
				return true;
			},
		},
		"nyhzr黄金羽翼": {
			nobracket: true,
			group: ["nyhzr黄金羽翼_1", "nyhzr黄金羽翼_2"],
			subSkill: {
				1: {
					trigger: {
						global: "damageBefore",
					},
					forced: true,
					filter: function (event, player) {
						return event.source != player && event.player != player;
					},
					content: function () {
						trigger.source = player;
					},
				},
				2: {
					trigger: {
						source: 'damageEnd'
					},
					forced: true,
					content: function () {
						game.swapSeat(trigger.player, player);
					}
				},
			}
		},
		"nyhzr紫耀异星": {
			nobracket: true,
		},
		"nyhzr幸福童年": {
			nobracket: true,
			mod: {
				cardUsable: function (card) {
					if (get.info(card) && get.info(card).forceUsable) return;
					return 0;
				},
			},
			trigger: {
				player: "phaseEnd",
			},
			forced: true,
			content: function () {
				player.removeSkill('nyhzr幸福童年');
			}
		},
		"nyhzr黑色童年": {
			nobracket: true,
			mod: {
				cardUsable: function (card) {
					if (get.info(card) && get.info(card).forceUsable) return;
					return Infinity;
				},
			},
			trigger: {
				player: "phaseEnd",
			},
			forced: true,
			content: function () {
				player.turnOver();
				player.removeSkill('nyhzr黑色童年');
			}
		},
		"nyhzr回忆童年": {
			nobracket: true,
			global: "nyhzr回忆童年_1",
			subSkill: {
				1: {
					trigger: {
						player: "phaseBefore",
					},
					forced: true,
					content: function () {
						"step 0"
						player.judge(function (card) {
							return (get.color(card) == 'red') ? 1.5 : -0.5;
						});
						"step 1"
						if (result.judge > 0) {
							player.recover();
							player.addSkill('nyhzr幸福童年');
							game.log(player, '进入幸福童年');
						}
						else {
							player.addSkill('nyhzr黑色童年');
							game.log(player, '进入黑色童年');
						}
					},
				},
			},
		},
		"nyhzr仙灵妙法": {
			nobracket: true,
			enable: "phaseUse",
			usable: 1,
			filter: function (event, player) {
				return player.storage.nyhzr仙灵伙伴ol >= 1;
			},
			filterTarget: function (card, player, target) {
				return player != target;
			},
			content: function () {
				player.storage.nyhzr仙灵伙伴ol -= 1;
				player.syncStorage('nyhzr仙灵伙伴ol');
				game.log(player, '失去一只妖精皮皮');
				target.recover();
				game.log(target, '被', player, '的妖精皮皮治愈');
			},
			ai: {
				order: 2,
				result: {
					target: function (player, target) {
						if(target.hp<target.maxHp) return get.attitude(player, target);
					},
				},
			},
		},
		"nyhzr炫光冲击":{
			nobracket:true,
			enable:"phaseUse",
			usable:1,
			filterTarget:function (card,player,target){
				return player!=target;
			},
			content:function (){
				target.damage(1,'thunder');
				player.removeSkill('nyhzr炫光冲击');
			},
			ai:{
				order:15,
				result: {
					target: function (player, target) {
						return get.damageEffect(player,target);
					},
				},
			},
		},
	};
	for (var i in skill) {
		lib.skill[i] = skill[i];
	};
	lib.kzol_charactercard_func['createSkillSkin']=function(name,sourcenode,noedit,resume,avatar){
		var list=[];
		for(var i in lib.skillSkin){
			if(lib.skillSkin[i].owner==name) list.push(i);
		};
		if(list.length==0) return ;
		//game.say1('双击技能皮肤可查看其具体信息');
		var dialog=ui.create.dialog('hidden');
		dialog.classList.add('popped');
		dialog.classList.add('static');
		dialog.style.animation='fadeInDown .3s';
		dialog.style['-webkit-animation']='fadeInDown .3s';
		dialog.style.height='105px';
		dialog.style.width='500px';
		dialog.style.left='calc(50% - 250px)';
		dialog.style.top='calc(50% + 154px)';
		dialog.style['z-index']=21;
		dialog.style['overflow-x']='scroll';
		dialog.style['overflow-y']='hidden';
		dialog.style['text-align']='left';
		dialog.addEventListener('mousewheel',function(e){
			var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
			var move_s=delD>0?-30:30;
			this.scrollLeft+=move_s;
		});
		for(var i=0;i<list.length;i++){
			var name=list[i];
			var skin=lib.skillSkin[name];
			lib.character['kzol_skillSkin_'+name]=['','','',skin.skills,["ext:扩展ol/"+name+".jpg","des:"+get.translation(skin.owner)+"的技能皮肤","skillSkin","forbidai"]];
			lib.translate['kzol_skillSkin_'+name]='皮肤：'+name;
			var div=ui.create.div('.shadowed.reduce_radius');
			div.style.height='90px';
			div.style.width='75px';
			div.style.top='7.5px';
			div.style.left=(7.5+(87.5*i))+'px';
			div.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/'+name+'.jpg")';
			div.style.backgroundSize="cover";
			div.style['cursor']='pointer';
			div.link='kzol_skillSkin_'+name;
			div.link1=name;
			if(lib.config.kzol_skillSkinEquiping[lib.skillSkin[name].owner]==name) div.classList.add('selected');
			div.classList.add('character');
			lib.setIntro(div);
			div.onclick=function(){
				var name=this.link1;
				var skin=lib.skillSkin[name];
				if(lib.config.kzol_skillSkin[name]==true){
					if(lib.config.kzol_skillSkinEquiping[skin.owner]==name){
						delete lib.config.kzol_skillSkinEquiping[skin.owner];
						game.saveConfig('kzol_skillSkinEquiping',lib.config.kzol_skillSkinEquiping);
						this.classList.remove('selected');
						game.say1(get.translation(skin.owner)+'卸下了技能皮肤：'+name);
					}else{
						lib.config.kzol_skillSkinEquiping[skin.owner]=name;
						game.saveConfig('kzol_skillSkinEquiping',lib.config.kzol_skillSkinEquiping);
						for(var i=0;i<dialog.childNodes.length;i++){
							var div=dialog.childNodes[i];
							if(div.classList.contains('selected')) div.classList.remove('selected');
						};
						this.classList.add('selected');
						game.say1(get.translation(skin.owner)+'装备了技能皮肤：'+name);
					};
				}else{
					if(skin.value>=0&&game.getItem&&typeof game.getItem('shuijing')=='string'){
						if(confirm('是否花费'+skin.value+'水晶购买'+name+'?')){
							console.log(lib.config.kzol_bag[game.getItem('shuijing')].num,skin.value)
							if(lib.config.kzol_bag[game.getItem('shuijing')].num>=skin.value){
								game.loseItem('shuijing',skin.value,false);
								lib.config.kzol_skillSkin[name]=true;
								game.saveConfig('kzol_skillSkin', lib.config.kzol_skillSkin);
								game.say1('花费了'+skin.value+'水晶');
								this.value_div.innerHTML='拥有';
								game.say1('获得了技能皮肤：'+name+'（'+get.translation(skin.owner)+'）');
							}else{
								game.say1('水晶不足');
							};
						};
					}else if(skin.value<0){
						game.say1('该技能皮肤是非卖品');
					}else{
						console.log('aaa')
						if(confirm('是否花费'+skin.value+'水晶购买'+name+'?')){
							game.say1('水晶不足');
						};
					};
				};
			};
			var sname=ui.create.div(div);
			sname.style.height='calc(100% - 5px)';
			sname.style.width='16px';
			sname.style.top='2.5px';
			sname.style.left='2.5px';
			sname.style['font-size']='16px';
			//sname.style['line-height']='40px';
			sname.style['font-family']="'STXinwei','xinwei'";
			var str='';
			for(var j=0;j<name.length;j++){
				if(j>0) str+='<br>';
				str+=name[j];
			};
			sname.innerHTML=str;
			var value_div=ui.create.div(div);
			value_div.style.height='15px';
			value_div.style.width='calc(100% - 2.5px)';
			value_div.style.bottom='2.5px';
			value_div.style.left='0px';
			value_div.style['font-size']='15px';
			value_div.style['line-height']='15px';
			value_div.style['font-family']="'STXinwei','xinwei'";
			value_div.style['text-align']='right';
			var str1='拥有';
			if(lib.config.kzol_skillSkin[name]==false||lib.config.kzol_skillSkin[name]==undefined) str1=lib.skillSkin[name].value+'水晶';
			if((lib.config.kzol_skillSkin[name]==false||lib.config.kzol_skillSkin[name]==undefined)&&lib.skillSkin[name].value<0) str1='非卖品';
			value_div.innerHTML=str1;
			div.value_div=value_div;
			dialog.appendChild(div);
		};
		ui.window.appendChild(dialog);
		var interval=setInterval(function(){
			if((lib.config.theme=='simple'&&!ui.window.classList.contains('systempaused'))||(lib.config.theme!='simple'&&!ui.window.classList.contains('shortcutpaused'))){
				dialog.delete();
				for(var i in lib.character){
					if(i.indexOf('kzol_skillSkin_')!=-1) delete lib.character[i];
				};
				clearInterval(interval);
			};
		},100);
	};
}