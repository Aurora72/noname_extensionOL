window.func = function (lib, game, ui, get, ai, _status) {
	if (lib.brawl) {
		lib.brawl.jianbingmoshi = {
			name: '兼并模式',
			mode: 'guozhan',
			intro: [
				'游戏开始，每个玩家自立为国，各自为战。',
				'每当有一个国家灭亡时，造成其灭亡的国家可以获得灭亡的国家的明置武将技能。',
			],
			showcase:function(init){
				if(_status.kzol_kzol_jianbingmoshi_bg!=true){
					_status.kzol_kzol_jianbingmoshi_bg=true;
					this.parentNode.childNodes[2].innerHTML='<input type="checkbox" value="false" style="width:13px"></input>&nbsp只有国战武将'+this.parentNode.childNodes[2].innerHTML;
					if(lib.config.kzol_jianbingmoshi_gzwj==true) this.parentNode.childNodes[2].querySelector('input').checked=true;
					this.parentNode.childNodes[2].querySelector('input').onclick=function(){
						var bool=true;
						if(lib.config.kzol_jianbingmoshi_gzwj==true) bool=false;
						game.saveConfig('kzol_jianbingmoshi_gzwj',bool);
					};
				};
			},
			content: {
				chooseCharacterBefore:function(){
					if(lib.config.kzol_jianbingmoshi_gzwj==true){
						for(var i in lib.characterPack.mode_guozhan){
							lib.character[i]=lib.characterPack.mode_guozhan[i];
							if(!lib.character[i][4]){
								lib.character[i][4]=[];
							}
							if(!lib.translate[i]){
								lib.translate[i]=lib.translate[i.slice(3)];
							}
						}
						for(var i in lib.character){
							if(lib.character[i][1]=='shen'){
								if(lib.character[i][4]&&(lib.group.contains(lib.character[i][4][0])||lib.character[i][4][0]=='key')){
									lib.character[i][1]=lib.character[i][4][0];
								}
								else{
									lib.character[i][1]='qun';
								}
							}
						}
						for(var i in lib.character){
							var bool=false;
							if(i.indexOf('gz_shibing')==0) bool=true;
							if(!lib.characterPack.mode_guozhan[i]) bool=true;
							if(get.is.jun(i)) bool=true;
							if(bool==true){
								if(lib.character[i][4]!=undefined){
									lib.character[i][4].push('forbidai');
								}else{
									lib.character[i][4]=['forbidai'];
								};
							};
						};
						
					};
				},
				/*
				chooseCharacter:function(list,player){
					if(lib.config.kzol_jianbingmoshi_gzwj==true){
						var list1=[];
						for(var i=0;i<list.length;i++){
							var bool=false;
							if(list[i].indexOf('gz_shibing')==0) bool=true;
							if(!lib.characterPack.mode_guozhan[list[i]]) bool=true;
							if(get.is.jun(list[i])) bool=true;
							if(bool==false) list1.push(list[i]);
						};
						var num=lib.config.mode_config.guozhan['choice_num'];
						if(num==undefined) num='7';
						if(num>list1.length) num=list1.length;
						return list1.randomGets(num);
					};
					return list;
				},
				*/
				gameStart: function () {
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
					game.me.useSkill('chanceIdentity0');
				}
			},
			init: function () {
				game.identityVideoName='兼并模式';
				lib.config.mode_config.guozhan.onlyguozhan=false;
				//game.saveConfig('onlyguozhan', false, 'guozhan');
				//game.saveConfig('guozhanpile', false, 'guozhan');
				lib.skill.chanceIdentity = {
					content: function () {
						player.next.group = 'er';
						player.next.identity = 'er';
						player.next._group = 'er';
						player.next.node.identity.firstChild.innerHTML = get.translation('er');
						player.next.node.identity.dataset.color = 'zhu';
						if (game.players.length > 2) {
							player.next.useSkill("chanceIdentity2")
						}
					},
				};
				lib.skill.chanceIdentity2 = {
					content: function () {
						player.next.group = 'san';
						player.next.identity = 'san';
						player.next._group = 'san';
						player.next.node.identity.firstChild.innerHTML = get.translation('san');
						player.next.node.identity.dataset.color = 'zhu';
						if (game.players.length > 3) {
							player.next.useSkill("chanceIdentity3")
						}
					},
				};
				lib.skill.chanceIdentity3 = {
					content: function () {
						player.next.group = 'si';
						player.next.identity = 'si';
						player.next._group = 'si';
						player.next.node.identity.firstChild.innerHTML = get.translation('si');
						player.next.node.identity.dataset.color = 'zhu';
						if (game.players.length > 4) {
							player.next.useSkill("chanceIdentity4")
						}
					},
				};
				lib.skill.chanceIdentity4 = {
					content: function () {
						player.next.group = 'wu1';
						player.next.identity = 'wu1';
						player.next._group = 'wu1';
						player.next.node.identity.firstChild.innerHTML = get.translation('wu1');
						player.next.node.identity.dataset.color = 'zhu';
						if (game.players.length > 5) {
							player.next.useSkill("chanceIdentity5")
						}
					},
				};
				lib.skill.chanceIdentity5 = {
					content: function () {
						player.next.group = 'liu';
						player.next.identity = 'liu';
						player.next._group = 'liu';
						player.next.node.identity.firstChild.innerHTML = get.translation('liu');
						player.next.node.identity.dataset.color = 'zhu';
						if (game.players.length > 6) {
							player.next.useSkill("chanceIdentity6")
						}
					},
				};
				lib.skill.chanceIdentity6 = {
					content: function () {
						player.next.group = 'qi';
						player.next.identity = 'qi';
						player.next._group = 'qi';
						player.next.node.identity.firstChild.innerHTML = get.translation('qi');
						player.next.node.identity.dataset.color = 'zhu';
						if (game.players.length > 7) {
							player.next.useSkill("chanceIdentity7")
						}
					},
				};
				lib.skill.chanceIdentity7 = {
					content: function () {
						player.next.group = 'ba';
						player.next.identity = 'ba';
						player.next._group = 'ba';
						player.next.node.identity.firstChild.innerHTML = get.translation('ba');
						player.next.node.identity.dataset.color = 'zhu';
						if (game.players.length > 8) {
							player.next.useSkill("chanceIdentity8")
						}
					},
				};
				lib.skill.chanceIdentity8 = {
					content: function () {
						player.next.group = 'jiu1';
						player.next.identity = 'jiu1';
						player.next._group = 'jiu1';
						player.next.node.identity.firstChild.innerHTML = get.translation('jiu1');
						player.next.node.identity.dataset.color = 'zhu';
						if (game.players.length > 9) {
							player.next.useSkill("chanceIdentity9")
						}
					},
				};
				lib.skill.chanceIdentity9 = {
					content: function () {
						player.next.group = 'shi';
						player.next.identity = 'shi';
						player.next._group = 'shi';
						player.next.node.identity.firstChild.innerHTML = get.translation('shi');
						player.next.node.identity.dataset.color = 'zhu';
						if (game.players.length > 10) {
							player.next.useSkill("chanceIdentity10")
						}
					},
				};
				lib.skill.chanceIdentity10 = {
					content: function () {
						player.next.group = 'shiyi';
						player.next.identity = 'shiyi';
						player.next._group = 'shiyi';
						player.next.node.identity.firstChild.innerHTML = get.translation('shiyi');
						player.next.node.identity.dataset.color = 'zhu';
						if (game.players.length > 11) {
							player.next.useSkill("chanceIdentity11")
						}
					},
				};
				lib.skill.chanceIdentity11 = {
					content: function () {
						player.next.group = 'shier';
						player.next.identity = 'shier';
						player.next._group = 'shier';
						player.next.node.identity.firstChild.innerHTML = get.translation('shier');
						player.next.node.identity.dataset.color = 'zhu';
						if (game.players.length > 12) {
							player.next.useSkill("chanceIdentity12")
						}
					},
				};
				lib.skill.chanceIdentity12 = {
					content: function () {
						player.next.group = 'shisan';
						player.next.identity = 'shisan';
						player.next._group = 'shisan';
						player.next.node.identity.firstChild.innerHTML = get.translation('shisan');
						player.next.node.identity.dataset.color = 'zhu';
						if (game.players.length > 13) {
							player.next.useSkill("chanceIdentity13")
						}
					},
				};
				lib.skill.chanceIdentity13 = {
					content: function () {
						player.next.group = 'shisi';
						player.next.identity = 'shisi';
						player.next._group = 'shisi';
						player.next.node.identity.firstChild.innerHTML = get.translation('shisi');
						player.next.node.identity.dataset.color = 'zhu';
						if (game.players.length > 14) {
							player.next.useSkill("chanceIdentity14")
						}
					},
				};
				lib.skill.chanceIdentity14 = {
					content: function () {
						player.next.group = 'shiwu';
						player.next.identity = 'shiwu';
						player.next._group = 'shiwu';
						player.next.node.identity.firstChild.innerHTML = get.translation('shiwu');
						player.next.node.identity.dataset.color = 'zhu';
						if (game.players.length > 15) {
							player.next.useSkill("chanceIdentity15")
						}
					},
				};
				lib.skill.chanceIdentity15 = {
					content: function () {
						player.next.group = 'shiliu';
						player.next.identity = 'shiliu';
						player.next._group = 'shiliu';
						player.next.node.identity.firstChild.innerHTML = get.translation('shiliu');
						player.next.node.identity.dataset.color = 'zhu';
						if (game.players.length > 16) {
							player.next.useSkill("chanceIdentity16")
						}
					},
				};
				lib.skill.chanceIdentity0 = {
					content: function () {
						player.next.group = 'yi';
						player.next.identity = 'yi';
						player.next._group = 'yi';
						player.next.node.identity.firstChild.innerHTML = get.translation('yi');
						player.next.node.identity.dataset.color = 'zhu';
						player.next.useSkill("chanceIdentity")
					},
				};
				lib.skill._gainSkill = {
					trigger: {
						player: "dieBegin",
					},
					forced: true,
					filter: function (event) {
						return event.source && event.source.isIn();
					},
					content: function () {
						var list=[];
						var skills=player.get('s', false, false);
						for(var i=0;i<skills.length;i++){
							if(lib.translate[skills[i]+'_info']!=undefined){
								list.push(skills[i]);
							};
						};
						trigger.source.addSkill(list);
						game.log(trigger.source, '获得了', list);
					},
				};
			}
		}
	}
}