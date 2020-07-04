window.func=function(lib,game,ui,get,ai,_status){
	if(lib.config['extension_扩展ol_ALX_first']!=true){
		game.saveConfig('extension_扩展ol_ALX',true);
		game.saveConfig('extension_扩展ol_ALX_first',true);
		//lib.config.characters.remove(i);
	};
	lib.extensionMenu.extension_扩展ol.ALX_title={
		"name":"<b><p align=center><span style=\"font-size:18px\">--------奥拉星--------</span></b>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol.ALX_nlbhxs={
		name:'能力变化显示',
		init:true,
		intro:"开启后，奥拉星武将变动能力等级和能力时在武将牌上显示变动数字"
	};
	lib.extensionMenu.extension_扩展ol.alx_falxmsqyalxs={
		"name":"非专属模式启用奥拉星S包",
		"init":false,
		intro:"不建议开启"
	};
	lib.kzol_ALXYB={
		"ALX_bingshenhanxin":{
			hp:1434,
			attackC:961,
			attackE:521,
			defenseC:773,
			defenseE:769,
			speed:901,
		},
		"ALX_dinvsu":{
			hp:1355,
			attackC:501,
			attackE:885,
			defenseC:689,
			defenseE:725,
			speed:849,
		},
		"ALX_senluokelan":{
			hp:1657,
			attackC:789,
			attackE:461,
			defenseC:749,
			defenseE:757,
			speed:693,
		},
		"ALX_heiyixinghuang":{
			hp:1405,
			attackC:521,
			attackE:837,
			defenseC:661,
			defenseE:813,
			speed:741,
		},
		"ALX_weituoer":{
			hp:1434,
			attackC:430,
			attackE:834,
			defenseC:650,
			defenseE:681,
			speed:756,
		},
		"ALX_xuewuhanling":{
			hp:1650,
			attackC:521,
			attackE:961,
			defenseC:753,
			defenseE:801,
			speed:741,
		},
		"ALX_shirenlong":{
			hp:1413,
			attackC:861,
			attackE:541,
			defenseC:665,
			defenseE:691,
			speed:837,
		},
		"ALX_senluokelanwanquanti":{
			hp:1729,
			attackC:889,
			attackE:481,
			defenseC:769,
			defenseE:777,
			speed:713,
		},
		"ALX_fulai":{
			hp:1326,
			attackC:581,
			attackE:711,
			defenseC:741,
			defenseE:745,
			speed:677,
		},
		"ALX_chaojuyan":{
			hp:1398,
			attackC:801,
			attackE:541,
			defenseC:781,
			defenseE:621,
			speed:621,
		},
		"ALX_shixinheilong":{
			hp:1398,
			attackC:881,
			attackE:501,
			defenseC:685,
			defenseE:701,
			speed:801,
		},
		"ALX_gangtiexianfeng":{
			hp:1391,
			attackC:501,
			attackE:805,
			defenseC:661,
			defenseE:661,
			speed:805,
		},
		"ALX_shangguxinglong":{
			hp:1441,
			attackC:481,
			attackE:961,
			defenseC:661,
			defenseE:641,
			speed:881,
		},
		"ALX_shengjunqianmo":{
			hp:1362,
			attackC:521,
			attackE:861,
			defenseC:681,
			defenseE:681,
			speed:881,
		},
		"ALX_zhulong":{
			hp:1143,
			attackC:501,
			attackE:941,
			defenseC:821,
			defenseE:789,
			speed:661,
		},
		"ALX_yisaerS":{
			hp:1398,
			attackC:703,
			attackE:401,
			defenseC:776,
			defenseE:751,
			speed:956,
		},
		"ALX_yandi":{
			hp:1528,
			attackC:501,
			attackE:801,
			defenseC:685,
			defenseE:689,
			speed:845,
		},
		"ALX_yueshen":{
			hp:1434,
			attackC:861,
			attackE:501,
			defenseC:729,
			defenseE:721,
			speed:761,
		},
		"ALX_qiankunxiuluoshen":{
			hp:1398,
			attackC:853,
			attackE:501,
			defenseC:681,
			defenseE:712,
			speed:845,
		},
		"ALX_duotiankaisadi":{
			hp:1384,
			attackC:501,
			attackE:837,
			defenseC:709,
			defenseE:685,
			speed:869,
		},
		"ALX_mojunyewang":{
			hp:1369,
			attackC:821,
			attackE:501,
			defenseC:681,
			defenseE:713,
			speed:893,
		},
		"ALX_chizunlangwang":{
			hp:1441,
			attackC:501,
			attackE:893,
			defenseC:717,
			defenseE:685,
			speed:773,
		},
		"ALX_yiciyuanshengtianyi":{
			hp:2154,
			attackC:1050,
			attackE:701,
			defenseC:689,
			defenseE:689,
			speed:1049,
		},
		"ALX_shenjilingfeng":{
			hp:1384,
			attackC:444,
			attackE:886,
			defenseC:654,
			defenseE:689,
			speed:922,
		},
		"ALX_shenjidika":{
			hp:1506,
			attackC:433,
			attackE:733,
			defenseC:689,
			defenseE:752,
			speed:736,
		},
		"ALX_longtaizi":{
			hp:1405,
			attackC:786,
			attackE:500,
			defenseC:681,
			defenseE:712,
			speed:688,
		},
		"ALX_shenjimingwang":{
			hp:1571,
			attackC:831,
			attackE:466,
			defenseC:700,
			defenseE:700,
			speed:669,
		},
		"ALX_cangtian":{
			hp:1355,
			attackC:771,
			attackE:555,
			defenseC:712,
			defenseE:688,
			speed:769,
		},
		"ALX_shenjixinge":{
			hp:1758,
			attackC:411,
			attackE:744,
			defenseC:731,
			defenseE:721,
			speed:645,
		},
		"ALX_guiminghu":{
			hp:1391,
			attackC:776,
			attackE:522,
			defenseC:766,
			defenseE:764,
			speed:699,
		},
		"ALX_huayingji":{
			hp:1557,
			attackC:422,
			attackE:825,
			defenseC:648,
			defenseE:678,
			speed:733,
		},
		"ALX_yanyunana":{
			hp:1355,
			attackC:456,
			attackE:788,
			defenseC:689,
			defenseE:767,
			speed:831,
		},
		"ALX_heiyitiannu":{
			hp:1377,
			attackC:400,
			attackE:876,
			defenseC:700,
			defenseE:720,
			speed:755,
		},
		"ALX_heiyitongling":{
			hp:1348,
			attackC:499,
			attackE:789,
			defenseC:735,
			defenseE:745,
			speed:710,
		},
		"ALX_heiyitiansha":{
			hp:1348,
			attackC:877,
			attackE:444,
			defenseC:721,
			defenseE:701,
			speed:867,
		},
		"ALX_shengtangbojue":{
			hp:1557,
			attackC:381,
			attackE:893,
			defenseC:733,
			defenseE:739,
			speed:812,
		},
		"ALX_shenjibosaidong":{
			hp:1564,
			attackC:741,
			attackE:401,
			defenseC:713,
			defenseE:714,
			speed:666,
		},
		"ALX_sanjieshishen":{
			hp:1369,
			attackC:955,
			attackE:477,
			defenseC:709,
			defenseE:681,
			speed:787,
		},
		"ALX_heiyileiting":{
			hp:1384,
			attackC:817,
			attackE:581,
			defenseC:689,
			defenseE:651,
			speed:869,
		},
		"ALX_heiyiwanjun":{
			hp:1557,
			attackC:581,
			attackE:817,
			defenseC:765,
			defenseE:784,
			speed:671,
		},
		"ALX_moyuxingjun":{
			hp:1355,
			attackC:835,
			attackE:488,
			defenseC:763,
			defenseE:754,
			speed:793,
		},
		"ALX_heiyijixing":{
			hp:1492,
			attackC:779,
			attackE:469,
			defenseC:752,
			defenseE:716,
			speed:888,
		},
		"ALX_wuyaowang":{
			hp:1362,
			attackC:421,
			attackE:866,
			defenseC:721,
			defenseE:721,
			speed:763,
		},
		"ALX_shenjishengtianyi":{
			hp:1477,
			attackC:851,
			attackE:402,
			defenseC:631,
			defenseE:699,
			speed:839,
		},
		"ALX_haotian":{
			hp:1492,
			attackC:831,
			attackE:421,
			defenseC:795,
			defenseE:781,
			speed:613,
		},
		"ALX_tianshiwang":{
			hp:1377,
			attackC:531,
			attackE:899,
			defenseC:766,
			defenseE:713,
			speed:833,
		},
		"ALX_shenliaoyue":{
			hp:1384,
			attackC:431,
			attackE:864,
			defenseC:766,
			defenseE:751,
			speed:741,
		},
		"ALX_baiyecha":{
			hp:1354,
			attackC:984,
			attackE:461,
			defenseC:761,
			defenseE:753,
			speed:843,
		},
		"ALX_chaofanguiliwanquanti":{
			hp:1521,
			attackC:761,
			attackE:521,
			defenseC:761,
			defenseE:753,
			speed:931,
		},
		"ALX_shenjiyanwang":{
			hp:1362,
			attackC:843,
			attackE:531,
			defenseC:716,
			defenseE:703,
			speed:800,
		},
		"ALX_heiyiwang":{
			hp:1362,
			attackC:951,
			attackE:521,
			defenseC:719,
			defenseE:684,
			speed:848,
		},
		"ALX_shenjitianbeilong":{
			hp:1506,
			attackC:795,
			attackE:436,
			defenseC:698,
			defenseE:688,
			speed:731,
		},
		"ALX_yantian":{
			hp:1377,
			attackC:761,
			attackE:450,
			defenseC:831,
			defenseE:811,
			speed:853,
		},
		"ALX_axiuluo":{
			hp:1398,
			attackC:878,
			attackE:496,
			defenseC:809,
			defenseE:733,
			speed:864,
		},
		"ALX_shenjibingluohuang":{
			hp:1441,
			attackC:556,
			attackE:893,
			defenseC:779,
			defenseE:798,
			speed:813,
		},
		"ALX_chuanqishengyunvhuang":{
			hp:1441,
			attackC:937,
			attackE:501,
			defenseC:745,
			defenseE:725,
			speed:953,
		},
		"ALX_yisaer":{
			hp:2341,
			attackC:1181,
			attackE:661,
			defenseC:789,
			defenseE:789,
			speed:1009,
		},
		"ALX_heitaoK":{
			hp:1564,
			attackC:544,
			attackE:988,
			defenseC:733,
			defenseE:734,
			speed:899,
		},
		"ALX_yiciyuanzhihuiwang":{
			hp:2341,
			attackC:433,
			attackE:1103,
			defenseC:677,
			defenseE:698,
			speed:898,
		},
		"ALX_yuzaohuang":{
			hp:2017,
			attackC:665,
			attackE:669,
			defenseC:983,
			defenseE:921,
			speed:863,
		},
		"ALX_youying":{
			hp:2226,
			attackC:668,
			attackE:1053,
			defenseC:701,
			defenseE:708,
			speed:833,
		},
		"ALX_datiangou":{
			hp:2190,
			attackC:1221,
			attackE:664,
			defenseC:741,
			defenseE:741,
			speed:1031,
		},
		"ALX_zhurong":{
			hp:2154,
			attackC:934,
			attackE:456,
			defenseC:801,
			defenseE:801,
			speed:1002,
		},
		"ALX_heerweier":{
			hp:2082,
			attackC:661,
			attackE:661,
			defenseC:957,
			defenseE:953,
			speed:635,
		},
		"ALX_zhuzhao":{
			hp:2226,
			attackC:1053,
			attackE:669,
			defenseC:789,
			defenseE:789,
			speed:825,
		},
		"ALX_lingyezhanqi":{
			hp:939,
			attackC:643,
			attackE:864,
			defenseC:688,
			defenseE:703,
			speed:776,
		},
		"ALX_huiyuezhanqi":{
			hp:1229,
			attackC:901,
			attackE:531,
			defenseC:653,
			defenseE:689,
			speed:753,
		},
		"ALX_xuejingnvhuang":{
			hp:1204,
			attackC:633,
			attackE:886,
			defenseC:756,
			defenseE:733,
			speed:619,
		},
		"EX_ALX_xuejingnvhuang":{
			hp:1336,
			attackC:633,
			attackE:1100,
			defenseC:800,
			defenseE:800,
			speed:737,
		},
		"ALX_lingyezhanqiZ":{
			hp:1429,
			attackC:643,
			attackE:864,
			defenseC:688,
			defenseE:703,
			speed:776,
		},
		"ALX_huiyuezhanqiZ":{
			hp:1397,
			attackC:901,
			attackE:531,
			defenseC:653,
			defenseE:689,
			speed:753,
		},
		"ALX_shizujulong":{
			hp:1772,
			attackC:846,
			attackE:511,
			defenseC:766,
			defenseE:732,
			speed:697,
		},
		"ALX_wuyaowangwanquanti":{
			hp:1772,
			attackC:421,
			attackE:1020,
			defenseC:703,
			defenseE:688,
			speed:773,
		},
		"ALX_chuanqibolu":{
			hp:1636,
			attackC:421,
			attackE:866,
			defenseC:533,
			defenseE:566,
			speed:703,
		},
		"ALX_chuanqishasha":{
			hp:1679,
			attackC:566,
			attackE:756,
			defenseC:685,
			defenseE:688,
			speed:677,
		},
		"ALX_chuanqimiao":{
			hp:1542,
			attackC:421,
			attackE:802,
			defenseC:567,
			defenseE:556,
			speed:862,
		},





	};
	if(lib.config['extension_扩展ol_alx_falxmsqyalxs']!=true&&lib.config.mode!='aolaStar') return ;
	var createPlayer=ui.create.player;
	ui.create.player=function(position,noclick){
		var node=createPlayer.apply(this,arguments);
		node.ability={
			attackC:0,
			attackE:0,
			defenseC:0,
			defenseE:0,
			speed:0,
		};
		node.addedAbility={
			attackC:0,
			attackE:0,
			defenseC:0,
			defenseE:0,
			speed:0,
		};
		node.reducedAbility={
			attackC:0,
			attackE:0,
			defenseC:0,
			defenseE:0,
			speed:0,
		};
		node.abilityRank={
			attackC:0,
			attackE:0,
			defenseC:0,
			defenseE:0,
			speed:0,
			crit:0,
			hit:0,
			dodge:0,
		};
		node.abnormalState={};
		node.persistentSkill={};
		node.pp={};
		node.lastUsedSkill='';
		return node;
	};
	var ALX_init=lib.element.player.init;
	lib.element.player.init=function(character,character2,skill){
		ALX_init.apply(this,arguments);
		var ALX_bool=false;
		if(typeof character=='string'){
			if(lib.kzol_ALXYB[character]!=undefined){
				this.ability={
					attackC:lib.kzol_ALXYB[character].attackC,
					attackE:lib.kzol_ALXYB[character].attackE,
					defenseC:lib.kzol_ALXYB[character].defenseC,
					defenseE:lib.kzol_ALXYB[character].defenseE,
					speed:lib.kzol_ALXYB[character].speed,
				};
				ALX_bool=true;
			};
		};
		if(typeof character2=='string'&&ALX_bool==false){
			if(lib.kzol_ALXYB[character2]!=undefined){
				this.ability={
					attackC:lib.kzol_ALXYB[character2].attackC,
					attackE:lib.kzol_ALXYB[character2].attackE,
					defenseC:lib.kzol_ALXYB[character2].defenseC,
					defenseE:lib.kzol_ALXYB[character2].defenseE,
					speed:lib.kzol_ALXYB[character2].speed,
				};
			};
		};
		for(var j=0;j<this.get('s').length;j++){
			var skill_alx=this.get('s')[j];
			if(lib.skill[skill_alx].pp!=undefined&&this.pp[skill_alx]==undefined&&this.storage[skill_alx+'_pp']==undefined){
				this.pp[skill_alx]=lib.skill[skill_alx].pp;
				this.storage[skill_alx+'_pp']=lib.skill[skill_alx].pp;
			};
		};
		if(this.kzol_alx_hadShowMark!=true){
			this.kzol_alx_hadShowMark=true;
			this.markSkill('ALX_mark');
		};
		if(_status.kzol_alx_onBattle!=undefined){
			var player=this;
			if(player==game.me){
				var pet=lib.config.save_alx.pet[_status.kzol_alx_onBattle];
				player.ability.attackC=Math.round(pet.attackC);
				player.ability.attackE=Math.round(pet.attackE);
				player.ability.defenseC=Math.round(pet.defenseC);
				player.ability.defenseE=Math.round(pet.defenseE);
				player.ability.speed=Math.round(pet.speed);
				if(_status.mode=='ex'){
					player.maxHp=Math.round(pet.hp)/1000;
					player.hp=player.maxHp;
				};
				player.storage.ALX_lv=pet.lv;
				//player.setNickname('Lv:'+pet.lv+'级');
			}else{
				var list=[];
				var num_level=get.config('level');
				if(_status.mode=='ex') num_level=get.config('level_ex');
				for(var i=(num_level-1)*10+1;i<num_level*10;i++){
					list.push(i);
				};
				var num=list.randomGet();
				player.storage.ALX_lv=num;
				player.setNickname('Lv:'+num+'级');
				for(var i in player.ability){
					var ability=player.ability[i];
					player.ability[i]=Math.round(ability/10+(ability*9/10)*num/100);
				};
				if(_status.mode=='ex'){
					var num_pet_hp=lib.kzol_ALXYB[player.name].hp;
					player.maxHp=Math.round(num_pet_hp/10+(num_pet_hp*9/10)*num/100)/1000;
					player.hp=player.maxHp;
				};
				if(Math.random()<0.05){
					player.setNickname('<span style="color:#27ff00;">Lv:'+num+'级</span>');
					player.storage.alx_can_catch=true;
				};
			};
		};
		return this;
	};
	lib.ALX_ability=['attackC','attackE','defenseC','defenseE','speed','crit','hit','dodge'];
	lib.ALX_abnormalState=['poisoning','burn','paralysis','weak','damnation','frostbite','sleep','shackles','mad','afaid','parasitic'];
	lib.ALX_starRank={
		"aola_star_6":'<img src='+lib.assetURL+"extension/扩展ol/aola_star_6.png"+' width="32" height="28">',
		"aola_star_7":'<img src='+lib.assetURL+"extension/扩展ol/aola_star_7.png"+' width="28" height="28">',
		"aola_star_8":'<img src='+lib.assetURL+"extension/扩展ol/aola_star_8.png"+' width="29" height="28">',
		"aola_star_9":'<img src='+lib.assetURL+"extension/扩展ol/aola_star_9.png"+' width="30" height="29">',
		"aola_star_10":'<img src='+lib.assetURL+"extension/扩展ol/aola_star_10.png"+' width="29" height="28">',
		"aola_star_11":'<img src='+lib.assetURL+"extension/扩展ol/aola_star_11.png"+' width="29" height="28">',
		"aola_star_12":'<img src='+lib.assetURL+"extension/扩展ol/aola_star_12.png"+' width="28" height="28">',
		"aola_star_13":'<img src='+lib.assetURL+"extension/扩展ol/aola_star_13.png"+' width="29" height="28">',
		"aola_star_14":'<img src='+lib.assetURL+"extension/扩展ol/aola_star_14.png"+' width="30" height="28">',
		"aola_star_15":'<img src='+lib.assetURL+"extension/扩展ol/aola_star_15.png"+' width="28" height="28">',
		"aola_star_16":'<img src='+lib.assetURL+"extension/扩展ol/aola_star_16.png"+' width="38" height="30">',
	};
	lib.element.player.isALXYB=function(){
		if(this.name2!=undefined&&
		lib.character[this.name2]!=undefined&&
		lib.character[this.name2][4]!=undefined&&
		lib.character[this.name2][4].contains('ALXYB')) return true;
		if(lib.character[this.name]!=undefined&&
		lib.character[this.name][4]!=undefined&&
		lib.character[this.name][4].contains('ALXYB')) return true;
		return false;
	};
	lib.element.player.changeAbilityRank=function(){
		var next=game.createEvent('changeAbilityRank');
		next.player=this;
		next.num=1;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='number'){
				next.num=arguments[i];
			};
			if(typeof arguments[i]=='object'){
				var list=[];
				var object=arguments[i];
				for(var j=object[0];j<=object[1];j++){
					list.push(j);
				};
				next.num=list.randomGet();
			};
			if(typeof arguments[i]=='string'){
				next.skill=arguments[i];
			};
		};
		var event=_status.event;
		next.source=event.player;
		next.setContent(lib.element.event.changeAbilityRank);
		return next;
	};
	lib.element.event.changeAbilityRank=function(){
		event.trigger('changeAbilityRank');
		var abilityRank=player.abilityRank[skill];
		var num1=6;
		if(player.persistentSkill.ALX_EX_abilityRankI!=undefined) num1+=player.persistentSkill.ALX_EX_abilityRankI[0];
		var num2=6;
		if(player.persistentSkill.ALX_EX_abilityRankD!=undefined) num2+=player.persistentSkill.ALX_EX_abilityRankD[0];
		if(abilityRank+num>num1){
			num=num1-abilityRank;
		};
		if(abilityRank+num<-num2){
			num=-(num2+abilityRank);
		};
		if(skill!=undefined&&num!=0){
			player.abilityRank[skill]+=num;
			var str='';
			if(skill=='attackC') str='攻击等级';
			if(skill=='attackE') str='特攻等级';
			if(skill=='defenseC') str='防御等级';
			if(skill=='defenseE') str='特防等级';
			if(skill=='speed') str='速度等级';
			if(skill=='crit') str='暴击等级';
			if(skill=='hit') str='命中等级';
			if(skill=='dodge') str='闪避等级';
			var str1='';
			var str2='';
			if(num>0){
				str1='提升';
				str2='fire';
			};
			if(num<0){
				str1='降低';
				str2='thunder';
			};
			game.log(player,'的',str,str1,'了',get.cnNumber(Math.abs(num)),'级');
			if(str2!=''&&lib.config['extension_扩展ol_ALX_nlbhxs']==true) player.$damagepop(num,str2);
			game.delay(0.3);
		};
	};
	lib.element.player.recoverAbilityRank=function(){
		var next=game.createEvent('recoverAbilityRank');
		next.player=this;
		var event=_status.event;
		next.setContent(lib.element.event.recoverAbilityRank);
		return next;
	};
	lib.element.event.recoverAbilityRank=function(){
		event.trigger('recoverAbilityRank');
		for(var i in player.abilityRank){
			if(player.abilityRank[i]<0) player.changeAbilityRank(-player.abilityRank[i],i);
		};
	};
	lib.element.player.changeAllAbilityRank=function(){
		var next=game.createEvent('changeAllAbilityRank');
		next.player=this;
		next.num=1;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='number'){
				next.num=arguments[i];
			};
			if(typeof arguments[i]=='object'){
				var list=[];
				var object=arguments[i];
				for(var j=object[0];j<=object[1];j++){
					list.push(j);
				};
				next.num=list.randomGet();
			};
			if(typeof arguments[i]=='boolean'){
				next.forced=arguments[i];
			};
		};
		var event=_status.event;
		next.setContent(lib.element.event.changeAllAbilityRank);
		return next;
	};
	lib.element.event.changeAllAbilityRank=function(){
		event.trigger('changeAllAbilityRank');
		if(forced!=true){
			player.changeAbilityRank(num,'attackC');
			player.changeAbilityRank(num,'attackE');
			player.changeAbilityRank(num,'defenseC');
			player.changeAbilityRank(num,'defenseE');
			player.changeAbilityRank(num,'speed');
			player.changeAbilityRank(num,'crit');
			player.changeAbilityRank(num,'hit');
			player.changeAbilityRank(num,'dodge');
		}else{
			player.changeAbilityRank(num,'attackC').ignore=true;
			player.changeAbilityRank(num,'attackE').ignore=true;
			player.changeAbilityRank(num,'defenseC').ignore=true;
			player.changeAbilityRank(num,'defenseE').ignore=true;
			player.changeAbilityRank(num,'speed').ignore=true;
			player.changeAbilityRank(num,'crit').ignore=true;
			player.changeAbilityRank(num,'hit').ignore=true;
			player.changeAbilityRank(num,'dodge').ignore=true;
		};
	};
	lib.element.player.clearAbilityRank=function(){
		var next=game.createEvent('clearAbilityRank');
		next.player=this;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='boolean'){
				next.forced=arguments[i];
			};
		};
		var event=_status.event;
		next.setContent(lib.element.event.clearAbilityRank);
		return next;
	};
	lib.element.event.clearAbilityRank=function(){
		event.trigger('clearAbilityRank');
		for(var i in player.abilityRank){
			if(forced!=true){
				if(player.abilityRank[i]!=0) player.changeAbilityRank(-player.abilityRank[i],i);
			}else{
				if(player.abilityRank[i]!=0) player.changeAbilityRank(-player.abilityRank[i],i).ignore=true;
			};
		};
	};
	lib.element.player.clearUseAbilityRank=function(){
		var next=game.createEvent('clearUseAbilityRank');
		next.player=this;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='boolean'){
				next.forced=arguments[i];
			};
		};
		var event=_status.event;
		next.setContent(lib.element.event.clearUseAbilityRank);
		return next;
	};
	lib.element.event.clearUseAbilityRank=function(){
		event.trigger('clearUseAbilityRank');
		for(var i in player.abilityRank){
			if(forced!=true){
				if(player.abilityRank[i]>0) player.changeAbilityRank(-player.abilityRank[i],i);
			}else{
				if(player.abilityRank[i]>0) player.changeAbilityRank(-player.abilityRank[i],i).ignore=true;
			};
		};
	};
	lib.element.player.copyUseAbilityRank=function(){
		var next=game.createEvent('copyUseAbilityRank');
		next.num=1;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='number'){
				next.num=arguments[i];
			};
			if(get.itemtype(arguments[i])=='player'){
				next.target=arguments[i];
			};
		};
		var num1=0;
		for(var i in next.target.abilityRank){
			if(next.target.abilityRank[i]>0) num1++;
		};
		if(num1==0) next.result='noAbilityRank';
		next.player=this;
		var event=_status.event;
		next.setContent(lib.element.event.copyUseAbilityRank);
		return next;
	};
	lib.element.event.copyUseAbilityRank=function(){
		event.trigger('copyUseAbilityRank');
		for(var i in target.abilityRank){
			if(target.abilityRank[i]>0) player.changeAbilityRank(target.abilityRank[i]*num,i);
		};
	};
	lib.element.player.inversionAbilityRank=function(){
		var next=game.createEvent('inversionAbilityRank');
		next.player=this;
		var event=_status.event;
		next.setContent(lib.element.event.inversionAbilityRank);
		return next;
	};
	lib.element.event.inversionAbilityRank=function(){
		event.trigger('inversionAbilityRank');
		for(var i in player.abilityRank){
			player.changeAbilityRank(-player.abilityRank[i]*2,i);
		};
	};
	lib.element.player.inversionUnuseAbilityRank=function(){
		var next=game.createEvent('inversionUnuseAbilityRank');
		next.player=this;
		var event=_status.event;
		next.setContent(lib.element.event.inversionUnuseAbilityRank);
		return next;
	};
	lib.element.event.inversionUnuseAbilityRank=function(){
		event.trigger('inversionUnuseAbilityRank');
		for(var i in player.abilityRank){
			if(player.abilityRank[i]<0) player.changeAbilityRank(-player.abilityRank[i]*2,i);
		};
	};
	lib.element.player.inversionUseAbilityRank=function(){
		var next=game.createEvent('inversionUseAbilityRank');
		next.player=this;
		var event=_status.event;
		next.setContent(lib.element.event.inversionUseAbilityRank);
		return next;
	};
	lib.element.event.inversionUseAbilityRank=function(){
		event.trigger('inversionUseAbilityRank');
		for(var i in player.abilityRank){
			if(player.abilityRank[i]>0) player.changeAbilityRank(-player.abilityRank[i]*2,i);
		};
	};
	lib.element.player.gainPlayerAbilityRank=function(){
		var next=game.createEvent('gainPlayerAbilityRank');
		next.num=1;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='number'){
				next.num=arguments[i];
			};
			if(typeof arguments[i]=='string'){
				next.skill=arguments[i];
			};
			if(get.itemtype(arguments[i])=='player'){
				next.target=arguments[i];
			};
		};
		next.player=this;
		var event=_status.event;
		next.setContent(lib.element.event.gainPlayerAbilityRank);
		return next;
	};
	lib.element.event.gainPlayerAbilityRank=function(){
		event.trigger('gainPlayerAbilityRank');
		if(-num<-(6+target.abilityRank[skill])) num=-(6+target.abilityRank[skill]);
		target.changeAbilityRank(-num,skill);
		player.changeAbilityRank(num,skill);
	};
	lib.element.player.changeAbility=function(){
		var next=game.createEvent('changeAbility');
		next.player=this;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='number'){
				next.num=arguments[i];
			};
			if(typeof arguments[i]=='string'){
				next.skill=arguments[i];
			};
		};
		var event=_status.event;
		next.setContent(lib.element.event.changeAbility);
		return next;
	};
	lib.element.event.changeAbility=function(){
		event.trigger('changeAbility');
		if(skill!=undefined&&num!=undefined&&num!=0){
			num=Math.round(num);
			var str='';
			if(skill=='attackC') str='攻击数值';
			if(skill=='attackE') str='特攻数值';
			if(skill=='defenseC') str='防御数值';
			if(skill=='defenseE') str='特防数值';
			if(skill=='speed') str='速度数值';
			var str1='';
			var str2='';
			if(player.ability[skill]+player.addedAbility[skill]-player.reducedAbility[skill]+num<=0) num=-(player.ability[skill]+player.addedAbility[skill]-player.reducedAbility[skill]);
			if(num>0){
				player.addedAbility[skill]+=num;
				str1='提升';
				str2='fire';
			};
			if(num<0){
				player.reducedAbility[skill]-=num;
				str1='降低';
				str2='thunder';
			};
			game.log(player,'的',str,str1,'了',Math.abs(num));
			if(str2!=''&&lib.config['extension_扩展ol_ALX_nlbhxs']==true) player.$damagepop(num,str2);
			game.delay(0.3);
		};
	};
	lib.element.player.changeAllAbility=function(){
		var next=game.createEvent('changeAllAbility');
		next.player=this;
		next.num=100;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='number'){
				next.num=arguments[i];
			};
		};
		var event=_status.event;
		next.setContent(lib.element.event.changeAllAbility);
		return next;
	};
	lib.element.event.changeAllAbility=function(){
		event.trigger('changeAllAbility');
		player.changeAbility(num,'attackC');
		player.changeAbility(num,'attackE');
		player.changeAbility(num,'defenseC');
		player.changeAbility(num,'defenseE');
		player.changeAbility(num,'speed');
	};
	lib.element.player.gainPlayerAbility=function(){
		var next=game.createEvent('gainPlayerAbility');
		next.num=100;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='number'){
				next.num=arguments[i];
			};
			if(typeof arguments[i]=='string'){
				next.skill=arguments[i];
			};
			if(get.itemtype(arguments[i])=='player'){
				next.target=arguments[i];
			};
		};
		next.player=this;
		var event=_status.event;
		next.setContent(lib.element.event.gainPlayerAbility);
		return next;
	};
	lib.element.event.gainPlayerAbility=function(){
		event.trigger('gainPlayerAbility');
		if(num>target.getAbility()[skill]) num=target.getAbility()[skill];
		target.changeAbility(-num,skill);
		player.changeAbility(num,skill);
	};
	lib.element.player.changeHun=function(){
		var next=game.createEvent('changeHun');
		next.player=this;
		next.num=1;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='number'){
				next.num=arguments[i];
			};
		};
		var event=_status.event;
		next.setContent(lib.element.event.changeHun);
		return next;
	};
	lib.element.event.changeHun=function(){
		event.trigger('changeHun');
		if(player.storage.ALX_CQhun==undefined) player.storage.ALX_CQhun=0;
		player.storage.ALX_CQhun+=num;
		var str='';
		if(num>0) str='获得';
		if(num<0) str='失去';
		game.log(player,str,'了',get.cnNumber(Math.abs(num)),'个魂');
		player.syncStorage('ALX_CQhun');
	};
	lib.element.player.changePersistentSkill=function(){
		var next=game.createEvent('changePersistentSkill');
		next.player=this;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='number'){
				next.num=arguments[i];
			};
			if(typeof arguments[i]=='string'){
				if(arguments[i].indexOf('phaseBefore')!=-1){
					next.player.storage[next.skill+'phaseBefore']=true;
				}else if(arguments[i].indexOf('str_')!=-1){
					next.cards=arguments[i].slice(4);
				}else{
					next.skill=arguments[i];
				};
			};
			if(typeof arguments[i]=='object'){
				next.card=arguments[i];
			};
			if(typeof arguments[i]=='boolean'){
				next.forced=arguments[i];
			};
		};
		var event=_status.event;
		next.setContent(lib.element.event.changePersistentSkill);
		return next;
	};
	lib.element.event.changePersistentSkill=function(){
		event.trigger('changePersistentSkill');
		var skillName=lib.translate[skill];
		if(skill.indexOf('ALX_resistance')!=-1) skillName='伤害抗性';
		if(skill.indexOf('ALX_attackRate')!=-1) skillName='伤害提升';
		if(num!=undefined){
			if(card==undefined){
				if(player.persistentSkill[skill]==undefined) player.persistentSkill[skill]=0;
				player.persistentSkill[skill]+=num;
				var str='';
				if(num>=0) str='获得';
				if(num<0) str='失去';
				if(forced==true){
					skillName='<span style="color:#FC5E15">'+skillName+'</span>';
					game.log(player,str,skillName,'效果');
				}else{
					skillName='<span style="color:#FC5E15">'+skillName+'</span>';
					game.log(player,str,skillName,'效果',get.cnNumber(Math.abs(num)),'个回合');
				};
			}else{
				if(player.persistentSkill[skill]==undefined) player.persistentSkill[skill]=[0,0];
				if(card[1]!=0){
					player.persistentSkill[skill][1]+=card[1];
					var str='';
					if(card[1]>=0) str='获得';
					if(card[1]<0) str='失去';
					if(forced==true){
						skillName='<span style="color:#FC5E15">'+skillName+'</span>';
						game.log(player,str,skillName,'效果');
					}else{
						skillName='<span style="color:#FC5E15">'+skillName+'</span>';
						game.log(player,str,skillName,'效果',get.cnNumber(Math.abs(card[1])),'个回合');
					};
				};
				if(card[0]!=0){
					player.persistentSkill[skill][0]+=card[0];
					var str='';
					if(card[0]>=0) str='提升';
					if(card[0]<0) str='降低';
					if(card[0]>-1&&card[0]<1){
						str1=Math.abs(card[0])*100+'%';
					}else{
						str1=Math.abs(card[0]);
					};
					if(skill!='ALX_EX_abilityRankI'&&skill!='ALX_EX_abilityRankD'){
						if(cards==undefined){
							skillName='<span style="color:#FC5E15">'+skillName+'</span>';
							game.log(player,'的',skillName,'效果',str,str1);
						}else{
							game.log(player,cards);
						};
					}else if(skill=='ALX_EX_abilityRankI'){
						game.log(player,'的能力等级上限',str,'了',get.cnNumber(card[0]),'级');
					}else{
						game.log(player,'的能力等级下限',str,'了',get.cnNumber(card[0]),'级');
					};
				};
			};
		}else{
			if(player.storage[skill+'phaseBefore']==true) delete player.storage[skill+'phaseBefore'];
			if(player.persistentSkill[skill]!=undefined) delete player.persistentSkill[skill];
			skillName='<span style="color:#FC5E15">'+skillName+'</span>';
			game.log(player,'失去了',skillName,'效果');
			if(skill=='ALX_EX_abilityRankI'){
				for(var i in player.abilityRank){
					if(player.abilityRank[i]>6) player.changeAbilityRank(6-player.abilityRank[i],i);
				};
			};
			if(skill=='ALX_EX_abilityRankD'){
				for(var i in player.abilityRank){
					if(player.abilityRank[i]<-6) player.changeAbilityRank(-6-player.abilityRank[i],i);
				};
			};
		};
	};
	lib.element.player.clearPersistentSkill=function(){
		var next=game.createEvent('clearPersistentSkill');
		next.player=this;
		var event=_status.event;
		next.setContent(lib.element.event.clearPersistentSkill);
		return next;
	};
	lib.element.event.clearPersistentSkill=function(){
		event.trigger('clearPersistentSkill');
		var num=0;
		for(var i in player.persistentSkill){
			if(player.storage[i+'phaseBefore']==true) delete player.storage[i+'phaseBefore'];
			delete player.persistentSkill[i];
			num++;
		};
		if(num>0) game.log(player,'的持续技能效果被清空了');
	};
	lib.element.player.gainAbnormalState=function(){
		var next=game.createEvent('gainAbnormalState');
		next.player=this;
		next.num=1;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='number'){
				next.num=arguments[i];
			};
			if(typeof arguments[i]=='string'){
				next.skill=arguments[i];
			};
		};
		var event=_status.event;
		next.source=event.player;
		next.setContent(lib.element.event.gainAbnormalState);
		return next;
	};
	lib.element.event.gainAbnormalState=function(){
		event.trigger('gainAbnormalState');
		if(skill=='poisoning'||skill=='burn'||skill=='paralysis'||skill=='weak'||skill=='damnation'||skill=='frostbite'||skill=='sleep'||skill=='shackles'||skill=='mad'||skill=='parasitic'){
			if(player.abnormalState['ALX_'+skill]==undefined) player.abnormalState['ALX_'+skill]=0;
			player.abnormalState['ALX_'+skill]+=num;
			game.log(player,'<span style="color:#9972FC">'+lib.translate['ALX_'+skill]+'</span>了');
		}else{
			if(player.abnormalState['ALX_afaid']==undefined) player.abnormalState['ALX_afaid']=0;
			player.abnormalState['ALX_afaid']+=num;
			game.log(player,'<span style="color:#9972FC">害怕</span>了');
		};
		if(skill=='parasitic'&&source!=undefined) player.storage.ALX_parasitic=source;
	};
	lib.element.player.loseAbnormalState=function(){
		var next=game.createEvent('loseAbnormalState');
		next.player=this;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='string'){
				next.skill=arguments[i];
			};
		};
		var event=_status.event;
		next.setContent(lib.element.event.loseAbnormalState);
		return next;
	};
	lib.element.event.loseAbnormalState=function(){
		event.trigger('loseAbnormalState');
		if(player.abnormalState[skill]!=undefined){
			delete player.abnormalState[skill];
			game.log(player,'解除了<span style="color:#9972FC">'+lib.translate[skill]+'</span>');
		};
		/*if(skill=='ALX_fear'){
			if(player.isTurnedOver()){
				player.turnOver();
				game.log(player,'解除了害怕');
			};
		};*/
	};
	lib.element.player.clearAbnormalState=function(){
		var next=game.createEvent('clearAbnormalState');
		next.player=this;
		var event=_status.event;
		next.setContent(lib.element.event.clearAbnormalState);
		return next;
	};
	lib.element.event.clearAbnormalState=function(){
		event.trigger('clearAbnormalState');
		for(var i in player.abnormalState){
			delete player.abnormalState[i];
			game.log(player,'解除了<span style="color:#9972FC">'+lib.translate[i]+'</span>了');
		};
		/*if(player.isTurnedOver()){
			player.turnOver();
			game.log(player,'解除了害怕');
		};*/
	};
	lib.element.player.changePP=function(){
		var next=game.createEvent('changePP');
		next.player=this;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='number'){
				next.num=arguments[i];
			};
			if(typeof arguments[i]=='string'){
				next.skill=arguments[i];
			};
		};
		var event=_status.event;
		next.setContent(lib.element.event.changePP);
		return next;
	};
	lib.element.event.changePP=function(){
		event.trigger('changePP');
		if(player.storage[skill+'_pp']+num<0) num=-player.storage[skill+'_pp'];
		player.storage[skill+'_pp']+=num;
		if(player.storage[skill+'_pp']>player.pp[skill]) player.storage[skill+'_pp']=player.pp[skill];
	};
	lib.element.player.changeAllPP=function(){
		var next=game.createEvent('changeAllPP');
		next.player=this;
		next.num=1;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='number'){
				next.num=arguments[i];
			};
		};
		var event=_status.event;
		next.setContent(lib.element.event.changeAllPP);
		return next;
	};
	lib.element.event.changeAllPP=function(){
		event.trigger('changeAllPP');
		var num1=0;
		for(var i in player.storage){
			if(i.indexOf('_pp')!=-1){
				var str=i.substr(0,i.length-3);
				player.changePP(num,str);
				num1++;
			};
		};
		if(num<9999){
			if(num>0) num='+'+num;
			if(num1>0) game.log(player,'所有PP值',num);
		}else{
			game.log(player,'回复了所有技能的PP值');
		};
	};
	lib.element.player.haveLostAllPP=function(){
		for(var i in this.pp){
			if(this.storage[i+'_pp']>0) return false;
		};
		return true;
	};
	lib.element.player.haveLostOnePP=function(){
		for(var i in this.pp){
			if(this.storage[i+'_pp']<=0) return true;
		};
		return false;
	};
	lib.element.player.fastKill=function(){
		var next=game.createEvent('fastKill');
		next.player=this;
		for(var i=0;i<arguments.length;i++){
			if(get.itemtype(arguments[i])=='player'){
				next.target=arguments[i];
			};
		};
		var event=_status.event;
		next.setContent(lib.element.event.fastKill);
		return next;
	};
	lib.element.event.fastKill=function(){
		event.trigger('fastKill');
		target.die().source=player;
		game.log(player,'<span style="color:#FF2D1A">秒杀</span>了',target);
	};
	lib.element.player.getAbility=function(){
		var ability={};
		ability.attackC=this.ability.attackC+this.addedAbility.attackC-this.reducedAbility.attackC;
		ability.attackE=this.ability.attackE+this.addedAbility.attackE-this.reducedAbility.attackE;
		ability.defenseC=this.ability.defenseC+this.addedAbility.defenseC-this.reducedAbility.defenseC;
		ability.defenseE=this.ability.defenseE+this.addedAbility.defenseE-this.reducedAbility.defenseE;
		ability.speed=this.ability.speed+this.addedAbility.speed-this.reducedAbility.speed;
		return ability;
	};
	lib.element.player.popupTX=function(){
		var next=game.createEvent('popupTX');
		next.player=this;
		var event=_status.event;
		next.setContent(lib.element.event.popupTX);
		return next;
	};
	lib.element.event.popupTX=function(){
		event.trigger('popupTX');
		var dialog=ui.create.dialog('hidden');
		dialog.style.width='80px';
		dialog.style.height='100px';
		dialog.style.left='calc(50% - 40px)';
		dialog.style.top='calc(50% - 50px)';
		dialog.style.backgroundSize='cover';
		dialog.setBackgroundImage('extension/扩展ol/wuxiao.jpg');
		player.node.avatar.appendChild(dialog);
		setTimeout(function(){
			dialog.delete();
		},75);
	};
	lib.element.player.PPSkill=function(){
		var list=[];
		for(var i in this.pp){
			list.push(i+'_pp');
		};
		return list;
	};
	lib.element.player.swapHp=function(){
		var next=game.createEvent('swapHp');
		next.player=this;
		for(var i=0;i<arguments.length;i++){
			if(get.itemtype(arguments[i])=='player'){
				next.target=arguments[i];
			};
		};
		var event=_status.event;
		next.setContent(lib.element.event.swapHp);
		return next;
	};
	lib.element.event.swapHp=function(){
		event.trigger('swapHp');
		var num=player.hp;
		var num1=target.hp;
		player.hp=num1;
		player.update();
		target.hp=num;
		target.update();
		game.log(player,'与',target,'交换了体力');
	};
	lib.element.player.changeHuDun=function(){
		var next=game.createEvent('changeHuDun');
		next.player=this;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='number'){
				next.num=arguments[i];
			};
		};
		var event=_status.event;
		next.setContent(lib.element.event.changeHuDun);
		return next;
	};
	lib.element.event.changeHuDun=function(){
		event.trigger('changeHuDun');
		'step 0'
		if(num>0&&player.persistentSkill.ALX_huDun==undefined) player.changePersistentSkill(0,[0,99999],'ALX_huDun',true);
		'step 1'
		if(player.persistentSkill.ALX_huDun!=undefined){
			var num1=player.persistentSkill.ALX_huDun[0];
			if(num1+num<0) num=-num1;
			var str='';
			if(num>0) str='获得';
			if(num<0) str='失去';
			if(str!='') player.changePersistentSkill(0,[num,0],'ALX_huDun','str_的护盾'+str+'了'+Math.abs(num)+'点体力');
		};
		'step 2'
		if(player.persistentSkill.ALX_huDun!=undefined&&player.persistentSkill.ALX_huDun[0]<=0) player.changePersistentSkill('ALX_huDun');
	};
	lib.element.player.degeneratorPetSkill=function(name,time,time1){
		game.broadcastAll(function(player,name,time,time1){
			player.playerfocus(time*time1);
			//game.pause();
			var num=1;
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='calc(100%)';
			dialog.style.width='calc(100%)';
			dialog.style.top='0px';
			dialog.style.left='0px';
			dialog.classList.add('fixed');
			dialog.style.backgroundSize='100% 100%';
			dialog.innerHTML='<img src='+lib.assetURL+"image/degeneratorPetSkill/"+name+"/"+num+".png"+' width="100%" height="100%">';
			//dialog.setBackgroundImage('extension/扩展ol/degeneratorPetSkill/'+name+num+'.png');
			ui.window.appendChild(dialog);
			var interval=setInterval(function(){
				num++;
				dialog.innerHTML='<img src='+lib.assetURL+"image/degeneratorPetSkill/"+name+"/"+num+".png"+' width="100%" height="100%">';
				//dialog.setBackgroundImage('extension/扩展ol/degeneratorPetSkill/'+name+num+'.png');
				if(num>=time){
					dialog.delete();
					clearInterval(interval);
					//game.resume();
				};
			},time1);
		},this,name,time,time1)
	};
	lib.element.player.changeyuanQi=function(){
		var next=game.createEvent('changeyuanQi');
		next.player=this;
		next.num=1;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='number'){
				next.num=arguments[i];
			};
		};
		var event=_status.event;
		next.setContent(lib.element.event.changeyuanQi);
		return next;
	};
	lib.element.event.changeyuanQi=function(){
		event.trigger('changeyuanQi');
		if(player.storage.ALX_yuanQi==undefined) player.storage.ALX_yuanQi=0;
		player.storage.ALX_yuanQi+=num;
		var str='';
		if(num>0) str='获得';
		if(num<0) str='失去';
		game.log(player,str,'了',get.cnNumber(Math.abs(num)),'元气');
		player.syncStorage('ALX_yuanQi');
	};
	lib.element.player.gainMaxHpS=function(){
		var next=game.createEvent('gainMaxHpS');
		next.player=this;
		next.num=1;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='number'){
				next.num=arguments[i];
			};
		};
		var event=_status.event;
		next.setContent(lib.element.event.gainMaxHpS);
		return next;
	};
	lib.element.event.gainMaxHpS=function(){
		'step 0'
		event.trigger('gainMaxHpS');
		if(player.storage.gainMaxHpS==undefined) player.storage.gainMaxHpS=0;
		player.storage.gainMaxHpS+=num;
		'step 1'
		if(player.storage.gainMaxHpS>=1){
			player.storage.gainMaxHpS--;
			player.gainMaxHp();
			event.bool=true;
		};
		'step 2'
		if(player.storage.gainMaxHpS>=1){
			event.goto(1);
		}else{
			if(event.bool!=true) game.log(player,'增加体力上限数量不足1，暂时储存');
		};
	};
	lib.element.player.randomGetPlayer=function(){
		var list=[];
		for(var i=0;i<game.players.length;i++){
			if(game.players[i]!=this) list.push(game.players[i]);
		};
		return list.randomGet();
	};
	lib.element.player.qiyue=function(){
		var next=game.createEvent('qiyue');
		next.player=this;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='string'){
				next.skill=arguments[i];
			};
		};
		var event=_status.event;
		next.setContent(lib.element.event.qiyue);
		return next;
	};
	lib.element.event.qiyue=function(){
		event.trigger('qiyue');
		player.markSkill('ALX_qiyue_mark');
		player.storage.ALX_qiyue=skill;
		for(var i=0;i<player.node.marks.childNodes.length;i++){
			if(player.node.marks.childNodes[i].name=='ALX_qiyue_mark'){
				player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/'+skill+'.jpg');
				player.node.marks.childNodes[i].innerHTML='';
			};
		};
		game.log(player,'召唤了<span style="color:#8DFF92">'+skill+'</span>');
		player.changeAllPP(9999);
	};
	lib.element.player.bianshen=function(){
		var next=game.createEvent('bianshen');
		next.player=this;
		next.skill=['',''];
		next.num=1;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='number'){
				next.num=arguments[i];
			};
			if(typeof arguments[i]=='string'){
				if(arguments[i].indexOf('ROOT_')!=-1){
					next.skill[0]=arguments[i].slice(5);
				}else{
					next.skill[1]=arguments[i];
				};
			};
		};
		var event=_status.event;
		next.setContent(lib.element.event.bianshen);
		return next;
	};
	lib.element.event.bianshen=function(){
		event.trigger('bianshen');
		var str='';
		if(player.name==skill[0]){
			game.broadcastAll(function(player){
				player.node.avatar.hide();
				setTimeout(function(){
					player.node.avatar.setBackgroundImage('extension/扩展ol/'+skill[1]+'.jpg');
					player.node.avatar.show();
				},150);
			},player);
		};
		if(player.name2==skill[0]){
			game.broadcastAll(function(player){
				player.node.avatar2.hide();
				setTimeout(function(){
					player.node.avatar2.setBackgroundImage('extension/扩展ol/'+skill[1]+'.jpg');
					player.node.avatar2.show();
				},150);
			},player);
			str='2';
		};
		player.storage.ALX_bianshen=skill[0];
		player.storage.ALX_bianshen1=skill[1];
		player.storage.ALX_bianshen_avatar=str;
		player.changePersistentSkill(num,'ALX_bianshen');
		player.ability=lib.kzol_ALXYB[skill[1]];
		player.maxHp=player.maxHp+1;
		player.hp=player.hp+1;
		player.update();
		player.changeAllPP(9999);
		game.log(player,'<span style="color:#FF1515">究极变身</span>');
	};
	lib.element.player.gainTuteng=function(){
		var next=game.createEvent('gainTuteng');
		next.player=this;
		next.num=[0,0];
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='number'){
				next.num[0]=arguments[i];
			};
			if(typeof arguments[i]=='string'){
				if(arguments[i].indexOf('hp_')!=-1){
					next.num[1]=arguments[i].slice(3);
				}else{
					next.skill=arguments[i];
				};
			};
			if(typeof arguments[i]=='function'){
				next.card=arguments[i];
			};
		};
		var event=_status.event;
		next.setContent(lib.element.event.gainTuteng);
		return next;
	};
	lib.element.event.gainTuteng=function(){
		event.trigger('gainTuteng');
		player.storage['ALX_Tuteng_hp'+skill]=num[1];
		player.storage['ALX_Tuteng_RE'+skill]=num[0];
		player.markSkill(skill);
		for(var i=0;i<player.node.marks.childNodes.length;i++){
			if(player.node.marks.childNodes[i].name==skill){
				player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/'+skill+'.jpg');
				player.node.marks.childNodes[i].innerHTML='';
			};
		};
		player.Tuteng=card;
		player.Tuteng();
		delete player.Tuteng;
		game.log(player,'开启图腾—<span style="color:#AB1E17">'+lib.translate[skill]+'</span>');
		game.log('<span style="color:#AB1E17">'+lib.translate[skill]+'</span>的体力值为',num[1],'点');
	};
	var ALX={
		character:{
			"ALX_bingshenhanxin":["male","ALX_chaowangxi",3,['ALX_bushengwugui','ALX_yinguangshuangshan','ALX_shenyonyinghunji','ALX_binghun'],["ALXYB"]],
			"ALX_dinvsu":["female","ALX_chaowangxi",3,['ALX_nvdizhifeng','ALX_xushidaifa','ALX_lianhuazhanfang','ALX_suyelunhui','ALX_mixinmojing'],["ALXYB"]],
			"ALX_senluokelan":["female","ALX_chaocaoxi",3,['ALX_chunmuzhixin','ALX_wanwuganzhao','ALX_shenfengjianling','ALX_jinglingwangzhifeng','ALX_lingfengsuxing'],["ALXYB"]],
			"ALX_heiyixinghuang":["male","ALX_chaoguangxi",3,['ALX_beidouqunxing','ALX_wanzhangxinghe','ALX_yifanxingtianhuang'],["ALXYB"]],
			"ALX_weituoer":["male","ALX_chaohuoxi",3,['ALX_ranshaodadi','ALX_shensimingxiang','ALX_shenquyishini','ALX_shenquershizhan'],["ALXYB"]],
			"ALX_xuewuhanling":["female","ALX_chaobingxi",3,['ALX_bingposhehun','ALX_huanlingshu','ALX_hanlingshunsha','ALX_xuewuzhiwei'],["ALXYB"]],
			"ALX_shirenlong":["male","ALX_chaolongxi",3,['ALX_chaolongxuemai','ALX_wushuang','ALX_miesha','ALX_shiyuezhiren'],["ALXYB"]],
			"ALX_senluokelanwanquanti":["female","ALX_chaocaoxiALX_wanquanxi",3,['ALX_chunmuzhixin','ALX_wanwuganzhao','ALX_shenfengjianling','ALX_jinglingwangzhifeng','ALX_lingfengsuxing','ALX_senluonailuo'],["ALXYB"]],
			"ALX_fulai":["male","ALX_chaodianxi",3,['ALX_leitingmaichong','ALX_cichangbaozou','ALX_shandianliansuo','ALX_chaonengfute','ALX_leitingzhangbi'],["ALXYB"]],
			"ALX_chaojuyan":["male","ALX_chaotuxi",3,['ALX_longnuwanzhang','ALX_chaoyanbi','ALX_balongchaoyanji','ALX_chaoyanposui'],["ALXYB"]],
			"ALX_shixinheilong":["male","ALX_chaoanxi",3,['ALX_chaomoneng','ALX_chaohuanyi','ALX_chaomingyan','ALX_chaoyingyan','ALX_heilongxin'],["ALXYB"]],
			"ALX_gangtiexianfeng":["male","ALX_chaoshumaxi",3,['ALX_chaoshumalingyu','ALX_chaoshumabenghuai','ALX_chaoshumaguangpao','ALX_chaoshumahuanxiang'],["ALXYB"]],
			"ALX_shangguxinglong":["male","ALX_chaoshangguxi",3,['ALX_xingshenzhiyu','ALX_zhiminglongying','ALX_guyanwushuang','ALX_yuanhunzhansha','ALX_xingshenguhun'],["ALXYB"]],
			"ALX_shengjunqianmo":["male","ALX_chaoshenglingxi",3,['ALX_shengjun','ALX_mojun','ALX_liuhuofeitong','ALX_qishashengcai','ALX_shengmoniepan'],["ALXYB"]],
			"ALX_zhulong":["male","ALX_qiankunxi",3,['ALX_xifengyu','ALX_shixingchen','ALX_chihongzhitong','ALX_zhujiuyin'],["ALXYB"]],
			"ALX_yisaerS":["male","ALX_chaoshangguxi",3,['ALX_yiciyuanshalu','ALX_jinglingwangguilai','ALX_yiciyuanliliang'],["ALXYB"]],
			"ALX_yandi":["male","ALX_chaoshangguxi",3,['ALX_chaoshangguzhixin','ALX_zhanshenlieyang','ALX_cangqiongpo','ALX_cangyan','ALX_huangyanyang'],["ALXYB"]],
			"ALX_yueshen":["male","ALX_chaoshangguxi",3,['ALX_chaoshangguzhixin','ALX_wushencangyue','ALX_xingchensui','ALX_shiyue','ALX_aoyuehua'],["ALXYB"]],
			"ALX_qiankunxiuluoshen":["male","ALX_chaoguangxi",3,['ALX_yuangushenghun','ALX_zhenshishenguang','ALX_hengsaoqiankun','ALX_tiandishenchengjie','ALX_xiuluoaohunjue'],["ALXYB"]],
			"ALX_duotiankaisadi":["male","ALX_chaoanxi",3,['ALX_wujianhundun','ALX_anyingwangzhe','ALX_emengzhongyan','ALX_yinghuanjiaozhi','ALX_kaisashiyijue'],["ALXYB"]],
			"ALX_mojunyewang":["male","ALX_chaoshenglingxi",3,['ALX_mowanglingyu','ALX_yejunqiyue','ALX_wangmingduanzui','ALX_yeyingwange','ALX_xueyuxitiandi'],["ALXYB"]],
			"ALX_chizunlangwang":["male","ALX_chaoshenglingxi",3,['ALX_gengunuhao','ALX_langzunchiyan','ALX_shenyutianyan','ALX_yinyueshalu','ALX_lietiandanijian'],["ALXYB"]],
			"ALX_yiciyuanshengtianyi":["male","ALX_chaoguangxi",3,['ALX_shenglonghuiyao','ALX_jibanxinxing','ALX_ciyuanjinghua','ALX_ciyuanjinghuaQH','ALX_tianzhaoshenghen','ALX_wangzhezhiguang'],["ALXYB"]],
			"ALX_shenjilingfeng":["male","ALX_chaodianxi",3,['ALX_shenjihunyou','ALX_longhunyoushi','ALX_yidilongyou'],["ALXYB"]],
			"ALX_shenjidika":["male","ALX_chaoshumaxi",3,['ALX_shenjihunshan','ALX_longhunshanshi','ALX_yingdilongshan'],["ALXYB"]],
			"ALX_longtaizi":["male","ALX_chaolongxi",3,['ALX_fanyunhaixiao','ALX_longtengfuhai','ALX_donghaixuetong'],["ALXYB"]],
			"ALX_shenjimingwang":["male","ALX_chaotuxi",3,['ALX_shenjihunpo','ALX_longhunposhi','ALX_judilongpo'],["ALXYB"]],
			"ALX_cangtian":["male","ALX_chaoshenglingxi",3,['ALX_canghuaxu','ALX_tianduhuaxu','ALX_dongfangtaixuan'],["ALXYB"]],
			"ALX_shenjixinge":["male","ALX_chaoshangguxi",3,['ALX_shengmingzhige','ALX_dadikuangxiao','ALX_shengsiwuji'],["ALXYB"]],
			"ALX_guiminghu":["male","ALX_chaoanxi",3,['ALX_mingkongwujin','ALX_guimingjianfa','ALX_baiguiyujian'],["ALXYB"]],
			"ALX_huayingji":["female","ALX_chaoguangxi",3,['ALX_huaguangqingshi','ALX_fuguangmeiying','ALX_yanguangliusu'],["ALXYB"]],
			"ALX_yanyunana":["female","ALX_chaohuoxi",3,['ALX_yanyubilei','ALX_mahoushaojiu','ALX_huoyandediyu'],["ALXYB"]],
			"ALX_heiyitiannu":["male","ALX_chaoanxi",3,['ALX_tiannuguanghui','ALX_shenmiaoshu','ALX_yixinlingxishou'],["ALXYB"]],
			"ALX_heiyitongling":["male","ALX_chaohuoxi",3,['ALX_huanhuaxutong','ALX_tongmengqitan','ALX_yijileshengling'],["ALXYB"]],
			"ALX_heiyitiansha":["male","ALX_chaoshumaxi",3,['ALX_feisuozhanyi','ALX_chaolizifengbao','ALX_yijisutineng'],["ALXYB"]],
			"ALX_shengtangbojue":["male","ALX_chaowangxi",3,['ALX_bojueshengxue','ALX_wangluncaijue','ALX_heiyichitongwang'],["ALXYB"]],
			"ALX_shenjibosaidong":["male","ALX_chaoshangguxi",3,['ALX_shenshengbihu','ALX_juewangtunshi','ALX_wujinzhilang'],["ALXYB"]],
			"ALX_sanjieshishen":["male","ALX_chaoshenglingxi",3,['ALX_sanjiehunzhuan','ALX_hunduantianzhao','ALX_heiyizihunwang'],["ALXYB"]],
			"ALX_heiyileiting":["male","ALX_chaodianxi",3,['ALX_hongleizhanjia','ALX_leijieliujie','ALX_yicidianlieshen'],["ALXYB"]],
			"ALX_heiyiwanjun":["male","ALX_chaoshuixi",3,['ALX_bujuezhanyi','ALX_yangtaowanji','ALX_yijiliutianmo'],["ALXYB"]],
			"ALX_moyuxingjun":["male","ALX_chaoanxi",3,['ALX_sadanzhihuo','ALX_yanxinglingdao','ALX_heiyilanyanwang'],["ALXYB"]],
			"ALX_heiyijixing":["male","ALX_chaocaoxi",3,['ALX_fanxingjishan','ALX_lvrenbaoji','ALX_yixianzongmiying'],["ALXYB"]],
			"ALX_wuyaowang":["male","ALX_chaobingxi",3,['ALX_bingfengwangzuo','ALX_linliehandong','ALX_hanshuangaishang'],["ALXYB"]],
			"ALX_shenjishengtianyi":["male","ALX_chaoguangxi",3,['ALX_shenjihunyao','ALX_longhunyaoshi','ALX_guangdilongyao'],["ALXYB"]],
			"ALX_haotian":["male","ALX_chaolongxi",3,['ALX_haoyuanpo','ALX_tianlongtuxi','ALX_xifangtaichen'],["ALXYB"]],
			"ALX_tianshiwang":["male","ALX_chaowangxi",3,['ALX_shengtangzhimen','ALX_tiantangzhijian','ALX_shengxuetianwei'],["ALXYB"]],
			"ALX_shenliaoyue":["male","ALX_chaoguangxi",3,['ALX_yinzhishalu','ALX_qiongcangliuxing','ALX_heiyibailingwang'],["ALXYB"]],
			"ALX_baiyecha":["male","ALX_chaoshangguxi",3,['ALX_mumowushi','ALX_dongyehuzhidao','ALX_baiseemo'],["ALXYB"]],
			"ALX_chaofanguiliwanquanti":["male","ALX_chaoanxiALX_wanquanxi",3,['ALX_xuegongzi','ALX_chaofanguizong','ALX_fodaomosanjue'],["ALXYB"]],
			"ALX_shenjiyanwang":["male","ALX_chaohuoxi",3,['ALX_shenjihunbao','ALX_longhunbaoshi','ALX_yandilongbao'],["ALXYB"]],
			"ALX_heiyiwang":["male","ALX_chaoshenglingxi",3,['ALX_shenghenzhixin','ALX_duohunzhiying','ALX_heiyiwangSkill'],["ALXYB"]],
			"ALX_shenjitianbeilong":["male","ALX_chaolongxi",3,['ALX_longzhiyao','ALX_longquanchuxian','ALX_hunluanzhifeng'],["ALXYB"]],
			"ALX_yantian":["male","ALX_chaohuoxi",3,['ALX_yanqianling','ALX_tianjinmiejie','ALX_nanfangtaiji'],["ALXYB"]],
			"ALX_axiuluo":["male","ALX_chaoanxi",3,['ALX_axiuluoshenpan','ALX_diyuzhishou','ALX_kuangnuyanwei'],["ALXYB"]],
			"ALX_shenjibingluohuang":["male","ALX_chaobingxi",3,['ALX_shenjihunfeng','ALX_longhunfengshi','ALX_bingdilongfeng'],["ALXYB"]],
			"ALX_chuanqishengyunvhuang":["female","ALX_chaofeixingxi",3,['ALX_tianjianluanshen','ALX_baiheqingyu','ALX_qianshunfenghou','ALX_shengyulingdong'],["ALXYB"]],
			"ALX_yisaer":["male","ALX_chaolongxi",3,['ALX_jinglingwangzhijian','ALX_ciyuanzhuanhua','ALX_shengyuanlongpo','ALX_shengyuanlongpoQH','ALX_nizhuanqiankun','ALX_tianxuanzhizi'],["ALXYB"]],
			"ALX_heitaoK":["male","ALX_chaoanxi",3,['ALX_heitaokapai','ALX_qianfu','ALX_yijialuanzhen','ALX_yijialuanzhenQH','ALX_huoluanxuanshang','ALX_yaoyizhixin'],["ALXYB"]],
			"ALX_yiciyuanzhihuiwang":["male","ALX_chaowangxi",3,['ALX_qixing','ALX_linglong','ALX_xingjieyuansha','ALX_xingjieyuanshaQH','ALX_nizhuanweilai','ALX_juelun'],["ALXYB"]],
			"ALX_yuzaohuang":["male","ALX_chaoshangguxi",3,['ALX_yaohulingyu','ALX_shenzhimeihuo','ALX_jiuweibihu','ALX_jiuweibihuQH','ALX_xuyezhishang','ALX_shashengyizhi'],["ALXYB"]],
			"ALX_youying":["female","ALX_chaoshuixi",3,['ALX_zuihuayin','ALX_liuyingfeiwu','ALX_qietingfengyin','ALX_qietingfengyinQH','ALX_menghuanmili','ALX_taiyinzhishen'],["ALXYB"]],
			"ALX_datiangou":["male","ALX_chaoshangguxi",3,['ALX_luanjianshenyin','ALX_yuhuazhongsheng','ALX_xuerenfengbao','ALX_xuerenfengbaoQH','ALX_ningshenchuanxin','ALX_shihunzhiyi'],["ALXYB"]],
			"ALX_zhurong":["male","ALX_chaohuoxi",3,['ALX_yanzhibaopo','ALX_huolingrusui','ALX_shenghuocuixin','ALX_shenghuocuixinQH','ALX_fentianzhinu','ALX_shenzhijuangu'],["ALXYB"]],
			"ALX_heerweier":["female","ALX_chaojixiexi",3,['ALX_henengbaohu','ALX_jisutuijin','ALX_chaoguangsuhuopao','ALX_chaoguangsuhuopaoQH','ALX_jiujibaopo','ALX_zhongduanjijia'],["ALXYB"]],
			"ALX_zhuzhao":["male","ALX_chaohuoxi",3,['ALX_liehuofen','ALX_huowuyingfei','ALX_yehuocongsheng','ALX_yehuocongshengQH','ALX_luanshilieyan','ALX_taiyangzhihun'],["ALXYB"]],
			"ALX_lingyezhanqi":["male","ALX_shenmixiALX_guangxi",3,['ALX_qijihujia','ALX_qishipaoxiao','ALX_xinyuepoyun','ALX_jilezhiren','ALX_lingyezhanqi_qishiqiyue'],["ALXYB"]],
			"ALX_huiyuezhanqi":["male","ALX_shenmixiALX_shenglingxi",3,['ALX_baizhanbudai','ALX_qishiyizhi','ALX_yuhongguanri','ALX_jianyingwuhen','ALX_huiyuezhanqi_qishiqiyue'],["ALXYB"]],
			"ALX_xuejingnvhuang":["female","ALX_bingxi",3,['ALX_zhuzaizhiyin','ALX_miguanglingyu','ALX_shuanglingpo','ALX_tianbingjue','ALX_xuejingnvhuang_bianshen'],["ALXYB"]],
			"ALX_lingyezhanqiZ":["male","ALX_shenmixiALX_guangxi",3,['ALX_qijihujia','ALX_qishipaoxiao','ALX_xinyuepoyun','ALX_jilezhiren','ALX_lingyezhanqi_qishiqiyueZ'],["ALXYB"]],
			"ALX_huiyuezhanqiZ":["male","ALX_shenmixiALX_shenglingxi",3,['ALX_baizhanbudai','ALX_qishiyizhi','ALX_yuhongguanri','ALX_jianyingwuhen','ALX_huiyuezhanqi_qishiqiyueZ'],["ALXYB"]],
			"ALX_shizujulong":["male","ALX_chaotuxi",3,['ALX_zhonglibenghuai','ALX_wujinfenzheng','ALX_julongtuteng','ALX_julongzuhun'],["ALXYB"]],
			"ALX_wuyaowangwanquanti":["male","ALX_chaobingxiALX_wanquanxi",3,['ALX_bingfengwangzuo','ALX_W_linliehandong','ALX_hanshuangaishang'],["ALXYB"]],
			"ALX_chuanqibolu":["male","ALX_chaohuoxi",3,['ALX_ranshaozhixin','ALX_fentian','ALX_luhuojinghunren','ALX_lingyanzhihun'],["ALXYB"]],
			"ALX_chuanqishasha":["female","ALX_chaoshuixi",3,['ALX_chunjingzhixin','ALX_yanmei','ALX_shenyangchaohunzhou','ALX_lingtaozhihun'],["ALXYB"]],
			"ALX_chuanqimiao":["male","ALX_chaocaoxi",3,['ALX_chunmuzhixin1','ALX_fusu','ALX_linzongmihunjue','ALX_senluozhihun'],["ALXYB"]],
		},
		characterIntro:{
			"ALX_chuanqibolu":"曾经陪伴我们的三主宠开启了传奇的力量，波鲁带着最炙热的火焰传奇归来！",
			"ALX_chuanqishasha":"获得了传奇力量的莎莎，越来越有女神范啦！",
			"ALX_chuanqimiao":"开启传奇力量的米奥，坚硬的盾，锋利的爪，所向披靡！",
			"ALX_wuyaowangwanquanti":"为了实现庞大的野心，巫妖王获得了完全体之力，开启了更加强大的巫妖之力！",
			"ALX_shizujulong":"为始祖龙六个灵魂之巨魂，看起来本体是个小亚比，可是身具翻天覆地之力，千万别说他可爱，他会很生气的。",
			"ALX_lingyezhanqiZ":"在和夜丸签订了契约之后，杰洛爆发了真正的契约骑士力量！零夜战骑飒爽登场！",
			"ALX_huiyuezhanqiZ":"辉月战骑不仅拥有了生命之笛的力量，还拥有了满月族的圣杯之力，为了伙伴，为了族人，它发誓要将黑魔法彻底封印!",
			"ALX_xuejingnvhuang":"雪净女皇摘下了神秘的面纱，在美丽中多了一丝霸气。究极之力让她变得更强。",
			"ALX_lingyezhanqi":"在和夜丸签订了契约之后，杰洛爆发了真正的契约骑士力量！零夜战骑飒爽登场！",
			"ALX_huiyuezhanqi":"辉月战骑不仅拥有了生命之笛的力量，还拥有了满月族的圣杯之力，为了伙伴，为了族人，它发誓要将黑魔法彻底封印!",
			"ALX_chuanqishengyunvhuang":"圣羽王族的女皇，突破了圣羽之剑的极限，实现传奇进化，力量到达巅峰，护佑圣羽山河。",
			"ALX_bingshenhanxin":"“用兵如神，战无不胜，国士无双，兵神韩信。”这可是流传在世间的传说！传奇武将降临，你是否愿意随它出征！？",
			"ALX_dinvsu":"帝女夙拥有强大的魔界力量，是整个帝魔界的力量中心，肩负帝魔界之主的使命！因为拥有了麟儿，它的生命有了全新的涵义，“娘亲”才是它一生最重要的责任和使命！",
			"ALX_senluokelan":"可兰超系觉醒降临奥拉，继续和英雄王弗洛拉一起守护奥拉星！",
			"ALX_heiyixinghuang":"能看穿星宿运行的轨迹，继而预知很多事情。获得神迹力量之后更是大大增强了纵星的力量！",
			"ALX_weituoer":"维托尔相信自由是相对的，强者才有自由，成为和平组织的一员。但其实他最初的梦想很简单，便是带着但丁滑翔世界。",
			"ALX_xuewuhanling":"经历了种种后，寒灵知道了自身的秘密，不愿再做温室里的花朵，希望用自己的力量保护重要的人。完美驾驭了逆水寒的力量，在冰雪中美丽地绽放！",
			"ALX_shirenlong":"誓刃龙誓要斩破世间一切邪恶！霸气冲出云霄！为最强而生！",
			"ALX_senluokelanwanquanti":"超木英雄王可兰终于开启了完全体力量，继续保护着重要的事物！",
			"ALX_fulai":"超电守护者——弗莱！用强大的电流守卫着超梦之域！默默地维护着正义和安宁。",
			"ALX_chaojuyan":"巨岩实现了超系觉醒！爆发出无尽的超土系潜力！誓要消灭世间一些邪恶！",
			"ALX_shixinheilong":"噬心黑龙在星魔力量下复生了，超暗觉醒的力量让它更加强大，更加令人恐惧！",
			"ALX_gangtiexianfeng":"钢铁先锋实现了超数码觉醒！成为了一个高大上超数码英雄！拥有一堆粉丝呢！",
			"ALX_shangguxinglong":"上古星龙是超时空中最古老的神，引领着十三位超时空的星神维持着世界的平衡。",
			"ALX_shengjunqianmo":"异界霸主，圣君来临，脚踏凌云，身绕火凤，只有我负天下人，绝不容天下人负我的霸气与潇洒。",
			"ALX_zhulong":"乾坤座下四君之一的兽君，掌握天道中的万兽之道。位列众兽之首，威风凛凛！",
			"ALX_yisaerS":"原创亚比，为纪念异次元时代的到来。",
			"ALX_yandi":"苍炎战神实现了超系觉醒——炎帝！最强战神，非它莫属！",
			"ALX_yueshen":"噬月武神实现了超系觉醒，化身更加强大的存在——月神，守望着上古天地。",
			"ALX_qiankunxiuluoshen":"圣光修罗得到天道无极力量，开启超奥义，化身乾坤修罗神。强大的力量令人震慑不已，一如既往地守护六芒星系！",
			"ALX_duotiankaisadi":"凯撒开启超奥义，获得了全新的力量。昔日的恶魔之子，今日的凯撒大帝。",
			"ALX_mojunyewang":"夜之主宰，黑夜中至高无上的帝王，强大的力量将吞噬光明，永夜将降临于世界。",
			"ALX_chizunlangwang":"炽热之焰，燃烧不息，伫立于魂塔之巅，用强大的力量阻挡邪恶的力量。",
			"ALX_yiciyuanshengtianyi":"伊乐带着即将爆炸的祖龙躯体去向宇宙深处拯救了大家！",
			"ALX_shenjilingfeng":"获得神迹力量的神迹凌风，双生之力再度爆发，在力量上到达巅峰！",
			"ALX_shenjidika":"神迹帝卡完美继承了影龙的力量，加上强大的神迹力量，成为影龙一族千百年来最强的继承人！",
			"ALX_longtaizi":"龙宫太子，自降生以来就带有神力，拥有翻云覆雨的超强力量，龙太子经过之地，必定天降甘霖，滋润万物！",
			"ALX_shenjimingwang":"扼住命运，握紧巨拳，神迹明王霸气降临，既然被神迹力量选中，那就试试能达到怎样的境界吧！",
			"ALX_cangtian":"苍天为九天之一，诞于苍穹，神力无边，自由自在翱翔于天际！",
			"ALX_shenjixinge":"对于年轻人的浪漫和疯狂特别欣赏！神迹觉醒获得强大的力量，掌握着大地之脉，继续默默守护着大家！",
			"ALX_guiminghu":"妖族的血脉蠢蠢欲动，强大的妖力爆发化身鬼冥冴，完美继承前任妖王之力，纯垢的妖力会否吞噬理智和情感呢？",
			"ALX_huayingji":"无论发生什么事，萤都那么坚定和无畏！巫女血脉完全觉醒，它希望能用自己的力量守护着最重要的冴！",
			"ALX_yanyunana":"娜娜终于成为了出色的火焰魔法师！成为了天空魔法学院建校以来，最最优秀的火焰魔法师！它的火焰魔法就像有生命一样熠熠生辉！",
			"ALX_heiyitiannu":"天怒获得了盘古的认可，成功的实现了神迹觉醒！拥有了神迹力量的他将更好的守护黑翼社的大家！",
			"ALX_heiyitongling":"在黑翼社一位“大人物”帮助下，瞳灵获得了与他契合的神迹力量。将无限幻瞳与神迹之力凝合，变成了黑翼终极神武----神•无限幻瞳，生之极乐，死之噩梦，尽在瞳灵掌握！",
			"ALX_heiyitiansha":"获得神迹力量的天煞，融合了鞭术和箭术的力量，变得更加强大！黑翼·天怒发现了黑翼·天煞默默地掌握了新武器用法，友谊的小船说翻就翻！",
			"ALX_shengtangbojue":"黑翼五王之一，赤瞳王！拥有不死不灭的王轮贵族血脉，已经存活超过千年！其身体里的王轮之力，足以让星球覆灭！",
			"ALX_shenjibosaidong":"神迹波塞冬成为了海神镇的守护神，它倾听愿望，默默护佑，适时出现指点一二！海神镇的大家都非常喜欢和崇拜它！",
			"ALX_sanjieshishen":"光暗双分身合体的弑神获得神迹力量之后，掌握了强大的混沌之力，共掌冥府和仙府之门，两种力量互补互斥而生的混沌之力足以葬送一切！",
			"ALX_heiyileiting":"在黑翼社一位“大人物”帮助下，雷霆获得了与他契合的神迹力量。降下暴怒之雷，横扫大地！为黑翼社扫清障碍，哪怕是神，也是它的猎物！",
			"ALX_heiyiwanjun":"在黑翼社一位“大人物”帮助下，万钧获得了与他契合的神迹力量。锤定世间正义与邪恶。与神迹后的雷霆一起，能将两者力量发挥到极致！",
			"ALX_moyuxingjun":"完美继承魔王撒旦的魔力，魔力精华化作纯蓝的地狱之火，与恶魔界传说中的魔刀融合，能使出恶魔界最强大的力量！燃尽一切！",
			"ALX_heiyijixing":"将宇宙所有的星辰与神迹之力凝和，变成了黑翼终极神武——神·斩星飞刀。十步斩一人，千里不留行！",
			"ALX_wuyaowang":"巫妖一族至高无上之王，拥有强大的黑暗能量，能够控制世间的生物思想，建立了强大并忠心耿耿的亡灵军团，而这只是它实现野心的第一步…",
			"ALX_shenjishengtianyi":"盘古开天，神迹力量觉醒并降临于被选中的伊乐身上，化身神迹圣天伊，开启超强的力量！",
			"ALX_haotian":"浩天为九天之一，诞于龙脉，它掌握着整个宇宙星辰龙脉的力量，掌握着世间的兴与衰！",
			"ALX_tianshiwang":"天使王听过很多很多愿望，也用它强大的力量实现了很多很多愿望，它想告诉大家，如果你的愿望足够强烈，很多事情你就可以做到！",
			"ALX_shenliaoyue":"白灵族始祖，第一代狼王！力量强大，武器能吸收满月之力，箭矢为月之灵箭！能按白灵王的意思调整可见度、杀伤力、速度、距离，几乎无法躲避！被称为黑翼社最可怕的暗杀者！",
			"ALX_baiyecha":"“现在……我已化为鬼神!”白夜叉实现了神迹进化完成了复仇，但是为什么，白夜叉得到的只有空虚呢？",
			"ALX_chaofanguiliwanquanti":"为了心中最深爱的碧瑶，鬼厉不惜任何代价!“如果天命难违，我就破了这天！如果仅靠光明无法拯救它，我堕入魔道又何妨……”",
			"ALX_shenjiyanwang":"炎龙之子，与上古神的力量融合，爆发出能燃尽世间一切的不灭火焰，火焰之王，神迹降临！",
			"ALX_heiyiwang":"黑翼展翅，世界上的一切秘密都触手可及，变得更加艺术！自由！震撼！",
			"ALX_shenjitianbeilong":"贝贝龙神迹觉醒化身神迹天贝龙，有着独特的紫色，是帅气小清新的代言人！",
			"ALX_yantian":"炎天为九天之一，诞于烈日，涤净邪恶，照耀着整个奥拉星！",
			"ALX_axiuluo":"没人知道它想做什么，只是它似乎一直在寻找着什么……",
			"ALX_shenjibingluohuang":"冰龙之子被神迹力量选中，神迹突破获得全新力量！冰龙流下了欣慰的眼泪呢！",
			"ALX_zhuzhao":"[太阳]烛照是由混沌一炁所化两仪中的至阳之炁与太阳之精共同所化的圣灵，守护天地的灵。千万年来轮回不断，守护天地。时间对他而言没有意义，直到遇到了她！",
			"ALX_heerweier":"拥有“神格”的【神辅】联盟中的一员，萝莉的外表，却是战场上赫赫有名的女武神！令人闻风丧胆！",
			"ALX_zhurong":"身为火神，掌管火炎，喜欢酒，认为酒与火是绝配，酒能让火燃烧得更旺！曾被大天狗用清酒欺骗，于是发誓不再喝日式清酒！",
			"ALX_datiangou":"远古大妖——“大天狗”称号现世继承者，拥有一脉史上最强的实力，以及一脉史上最高的颜值，从小在伊邪那美身边长大，冷傲不羁，喜欢喝酒！",
			"ALX_youying":"[太阴]幽荧是由混沌开辟后产生的至阴之炁与太阴之精共同所化的圣灵，千万年来轮回不断，守护天地，保护世间。直到遇到了他，生命泛起了波澜…",
			"ALX_yuzaohuang":"远古大妖玉藻前的后人玉藻皇，与大阴阳师晴明一同长大，情同手足，为保护晴明愿成为他的式神，完全继承其先祖绝无仅有的惑乱凶命，是神刹中的一员！",
			"ALX_yiciyuanzhihuiwang":"保护伙伴的信念促使智慧王与异次元核心产生共鸣，开启异次元进化，更加强大的力量，只为守护！",
			"ALX_heitaoK":"始祖翼龙给予了怀特全知之眼，自此找到了自己的光明，为了报恩成为了翼龙的骑士。不知从何时开始，身份被斗篷人窃取，成为在背后操纵一切的幕后玩家。",
			"ALX_yisaer":"亿万年前的远古精灵王重现世间!突破次元的界限，[远古精灵王]伊撒尔强力来袭!",
		},
		characterTitle:{
			"Aurora":lib.ALX_starRank.aola_star_15,
			"ALX_chuanqibolu":lib.ALX_starRank.aola_star_14,
			"ALX_chuanqishasha":lib.ALX_starRank.aola_star_14,
			"ALX_chuanqimiao":lib.ALX_starRank.aola_star_14,
			"ALX_wuyaowangwanquanti":lib.ALX_starRank.aola_star_14,
			"ALX_shizujulong":lib.ALX_starRank.aola_star_15,
			"ALX_lingyezhanqiZ":lib.ALX_starRank.aola_star_11,
			"ALX_huiyuezhanqiZ":lib.ALX_starRank.aola_star_11,
			"ALX_xuejingnvhuang":lib.ALX_starRank.aola_star_11,
			"ALX_lingyezhanqi":lib.ALX_starRank.aola_star_11,
			"ALX_huiyuezhanqi":lib.ALX_starRank.aola_star_11,
			"ALX_chuanqishengyunvhuang":lib.ALX_starRank.aola_star_15,
			"ALX_bingshenhanxin":lib.ALX_starRank.aola_star_15,
			"ALX_dinvsu":lib.ALX_starRank.aola_star_13,
			"ALX_senluokelan":lib.ALX_starRank.aola_star_13,
			"ALX_heiyixinghuang":lib.ALX_starRank.aola_star_14,
			"ALX_weituoer":lib.ALX_starRank.aola_star_11,
			"ALX_xuewuhanling":lib.ALX_starRank.aola_star_15,
			"ALX_shirenlong":lib.ALX_starRank.aola_star_11,
			"ALX_senluokelanwanquanti":lib.ALX_starRank.aola_star_13,
			"ALX_fulai":lib.ALX_starRank.aola_star_9,
			"ALX_chaojuyan":lib.ALX_starRank.aola_star_10,
			"ALX_shixinheilong":lib.ALX_starRank.aola_star_11,
			"ALX_gangtiexianfeng":lib.ALX_starRank.aola_star_10,
			"ALX_shangguxinglong":lib.ALX_starRank.aola_star_13,
			"ALX_shengjunqianmo":lib.ALX_starRank.aola_star_13,
			"ALX_zhulong":lib.ALX_starRank.aola_star_15,
			"ALX_yisaerS":lib.ALX_starRank.aola_star_16,
			"ALX_yandi":lib.ALX_starRank.aola_star_13,
			"ALX_yueshen":lib.ALX_starRank.aola_star_13,
			"ALX_qiankunxiuluoshen":lib.ALX_starRank.aola_star_13,
			"ALX_duotiankaisadi":lib.ALX_starRank.aola_star_13,
			"ALX_mojunyewang":lib.ALX_starRank.aola_star_13,
			"ALX_chizunlangwang":lib.ALX_starRank.aola_star_13,
			"ALX_yiciyuanshengtianyi":lib.ALX_starRank.aola_star_16,
			"ALX_shenjilingfeng":lib.ALX_starRank.aola_star_14,
			"ALX_shenjidika":lib.ALX_starRank.aola_star_14,
			"ALX_longtaizi":lib.ALX_starRank.aola_star_14,
			"ALX_shenjimingwang":lib.ALX_starRank.aola_star_14,
			"ALX_cangtian":lib.ALX_starRank.aola_star_14,
			"ALX_shenjixinge":lib.ALX_starRank.aola_star_14,
			"ALX_guiminghu":lib.ALX_starRank.aola_star_14,
			"ALX_huayingji":lib.ALX_starRank.aola_star_14,
			"ALX_yanyunana":lib.ALX_starRank.aola_star_14,
			"ALX_heiyitiannu":lib.ALX_starRank.aola_star_14,
			"ALX_heiyitongling":lib.ALX_starRank.aola_star_14,
			"ALX_heiyitiansha":lib.ALX_starRank.aola_star_14,
			"ALX_shengtangbojue":lib.ALX_starRank.aola_star_14,
			"ALX_shenjibosaidong":lib.ALX_starRank.aola_star_14,
			"ALX_sanjieshishen":lib.ALX_starRank.aola_star_14,
			"ALX_heiyileiting":lib.ALX_starRank.aola_star_14,
			"ALX_heiyiwanjun":lib.ALX_starRank.aola_star_14,
			"ALX_moyuxingjun":lib.ALX_starRank.aola_star_14,
			"ALX_heiyijixing":lib.ALX_starRank.aola_star_14,
			"ALX_wuyaowang":lib.ALX_starRank.aola_star_14,
			"ALX_shenjishengtianyi":lib.ALX_starRank.aola_star_14,
			"ALX_haotian":lib.ALX_starRank.aola_star_14,
			"ALX_tianshiwang":lib.ALX_starRank.aola_star_14,
			"ALX_shenliaoyue":lib.ALX_starRank.aola_star_14,
			"ALX_baiyecha":lib.ALX_starRank.aola_star_14,
			"ALX_chaofanguiliwanquanti":lib.ALX_starRank.aola_star_14,
			"ALX_shenjiyanwang":lib.ALX_starRank.aola_star_14,
			"ALX_heiyiwang":lib.ALX_starRank.aola_star_14,
			"ALX_shenjitianbeilong":lib.ALX_starRank.aola_star_14,
			"ALX_yantian":lib.ALX_starRank.aola_star_14,
			"ALX_axiuluo":lib.ALX_starRank.aola_star_14,
			"ALX_shenjibingluohuang":lib.ALX_starRank.aola_star_14,
			"ALX_zhuzhao":lib.ALX_starRank.aola_star_16,
			"ALX_heerweier":lib.ALX_starRank.aola_star_16,
			"ALX_zhurong":lib.ALX_starRank.aola_star_16,
			"ALX_datiangou":lib.ALX_starRank.aola_star_16,
			"ALX_youying":lib.ALX_starRank.aola_star_16,
			"ALX_yuzaohuang":lib.ALX_starRank.aola_star_16,
			"ALX_yiciyuanzhihuiwang":lib.ALX_starRank.aola_star_16,
			"ALX_heitaoK":lib.ALX_starRank.aola_star_16,
			"ALX_yisaer":lib.ALX_starRank.aola_star_16,
		},
		skill:{
			"_ALX_Tuteng":{
				trigger:{
					source:"damageBegin",
				},
				forced:true,
				priority:-99.5,
				filter:function (event,player){
					for(var i in event.player.storage){
						if(i.indexOf('ALX_Tuteng_hp')!=-1) return true;
					};
				},
				content:function (){
					'step 0'
					var list=[];
					for(var i in trigger.player.storage){
						if(i.indexOf('ALX_Tuteng_hp')!=-1) list.push(lib.translate[i.slice(13)]);
					};
					list.push(lib.translate[trigger.player.name]);
					player.chooseControl(list).set('ai',function(event){
						return list.randomGet();
					}).set('prompt','请选择目标');
					'step 1'
					if(result.control!=lib.translate[trigger.player.name]){
						var list=[];
						for(var i in trigger.player.storage){
							if(i.indexOf('ALX_Tuteng_hp')!=-1) list.push(i.slice(13));
						};
						for(var i=0;i<list.length;i++){
							if(lib.translate[list[i]]==result.control){
								trigger.untrigger();
								trigger.finish();
								var num=trigger.num;
								num=num*1000;
								num=Math.round(num);
								num=num/1000;
								trigger.player.storage['ALX_Tuteng_hp'+list[i]]-=num;
								game.log('图腾—<span style="color:#AB1E17">'+lib.translate[list[i]]+'</span>失去了',num,'点体力');
								if(trigger.player.storage['ALX_Tuteng_hp'+list[i]]<=0){
									trigger.player.unmarkSkill(list[i]);
									if(trigger.player.loseTuteng!=undefined){
										trigger.player.loseTuteng();
										delete trigger.player.loseTuteng;
										delete trigger.player.storage['ALX_Tuteng_hp'+list[i]];
										delete trigger.player.storage['ALX_Tuteng_RE'+list[i]];
									};
									game.log(trigger.player,'失去了图腾—<span style="color:#AB1E17">'+lib.translate[list[i]]+'</span>');
								};
							};
						};
					};
				},
			},
			"_ALX_Tuteng1":{
				trigger:{
					player:"damageBegin",
				},
				forced:true,
				priority:-Infinity,
				filter:function (event,player){
					for(var i in player.storage){
						if(i.indexOf('ALX_Tuteng_RE')!=-1){
							if(player.storage[i]>0){
								return true;
							};
						};
					};
					return false;
				},
				content:function (){
					var num=trigger.num;
					for(var i in player.storage){
						if(i.indexOf('ALX_Tuteng_RE')!=-1){
							num=num*(1-player.storage[i]);
							num=num*1000;
							num=Math.round(num);
							num=num/1000;
							player.storage['ALX_Tuteng_hp'+i.slice(13)]-=num;
							game.log('图腾—<span style="color:#AB1E17">'+lib.translate[i.slice(13)]+'</span>失去了',num,'点体力');
							if(player.storage['ALX_Tuteng_hp'+i.slice(13)]<=0){
								player.unmarkSkill(i.slice(13));
								if(player.loseTuteng!=undefined){
									player.loseTuteng();
									delete player.loseTuteng;
									delete player.storage['ALX_Tuteng_hp'+i.slice(13)];
									delete player.storage[i];
								};
								game.log(player,'失去了图腾—<span style="color:#AB1E17">'+lib.translate[i.slice(13)]+'</span>');
							};
						};
						trigger.num=num;
					};
				},
			},
			"_ALX_bianshen":{
				trigger:{
					player:"changePersistentSkillEnd",
				},
				forced:true,
				filter:function (event,player){
					return event.skill=='ALX_bianshen'&&event.num==undefined;
				},
				content:function (){
					var name=player.storage.ALX_bianshen;
					var str=player.storage.ALX_bianshen_avatar;
					player.ability=lib.kzol_ALXYB[name];
					game.broadcastAll(function(player,name,str){
						player.node['avatar'+str].hide();
						setTimeout(function(){
							player.node['avatar'+str].setBackgroundImage('extension/扩展ol/'+name+'.jpg');
							player.node['avatar'+str].show();
						},400);
					},player,name,str);
					delete player.storage.ALX_bianshen;
					delete player.storage.ALX_bianshen1;
					delete player.storage.ALX_bianshen_avatar;
					player.maxHp=player.maxHp-1;
					player.hp=player.hp-1;
					player.update();
					player.changeAllPP(9999);
					game.log(player,'变身结束');
				},
			},
			"_ALX_huDun":{
				trigger:{
					player:"damageBegin",
				},
				forced:true,
				priority:-100,
				filter:function (event,player){
					if(event.num<=0) return false;
					return player.persistentSkill.ALX_huDun&&player.persistentSkill.ALX_huDun[1]>0;
				},
				content:function (){
					var num=trigger.num;
					var num1=player.persistentSkill.ALX_huDun[0];
					if(num>num1) num=num1;
					var num2=trigger.num-num;
					num2=num2*1000;
					num2=Math.round(num2);
					num2=num2/1000;
					trigger.num=num2;
					player.changeHuDun(-num);
				},
			},
			"_ALX_attributeRestraint":{
				trigger:{
					source:"damageBefore",
				},
				forced:true,
				filter:function (event,player){
					if(event.type==undefined) return false;
					var a=player.group;
					var b=event.player.group;
					return (a.indexOf('ALX_chaohuoxi')!=-1&&(b.indexOf('ALX_chaoshumaxi')!=-1||b.indexOf('ALX_chaocaoxi')!=-1||b.indexOf('ALX_chaolongxi')!=-1||b.indexOf('ALX_chaojixiexi')!=-1))||
					(a.indexOf('ALX_chaoshuixi')!=-1&&(b.indexOf('ALX_chaotuxi')!=-1||b.indexOf('ALX_chaohuoxi')!=-1||b.indexOf('ALX_chaoanxi')!=-1))||
					(a.indexOf('ALX_chaocaoxi')!=-1&&(b.indexOf('ALX_qiankunxi')!=-1||b.indexOf('ALX_chaoshuixi')!=-1||b.indexOf('ALX_chaodianxi')!=-1||b.indexOf('ALX_chaoguangxi')!=-1))||
					(a.indexOf('ALX_chaoshangguxi')!=-1&&b.indexOf('ALX_chaowangxi')!=-1)||
					(a.indexOf('ALX_chaolongxi')!=-1&&(b.indexOf('ALX_chaotuxi')!=-1||b.indexOf('ALX_chaoshumaxi')!=-1||b.indexOf('ALX_chaoguangxi')!=-1))||
					(a.indexOf('ALX_chaodianxi')!=-1&&(b.indexOf('ALX_wanquanxi')!=-1||b.indexOf('ALX_chaowangxi')!=-1||b.indexOf('ALX_chaoshuixi')!=-1||b.indexOf('ALX_chaofeixingxi')!=-1))||
					(a.indexOf('ALX_chaotuxi')!=-1&&(b.indexOf('ALX_wanquanxi')!=-1||b.indexOf('ALX_chaohuoxi')!=-1||b.indexOf('ALX_chaoshenglingxi')!=-1||b.indexOf('ALX_chaobingxi')!=-1||b.indexOf('ALX_chaofeixingxi')!=-1))||
					(a.indexOf('ALX_chaoguangxi')!=-1&&(b.indexOf('ALX_chaoanxi')!=-1||b.indexOf('ALX_chaodianxi')!=-1||b.indexOf('ALX_chaoshumaxi')!=-1))||
					(a.indexOf('ALX_chaoanxi')!=-1&&(b.indexOf('ALX_chaodianxi')!=-1||b.indexOf('ALX_chaotuxi')!=-1||b.indexOf('ALX_chaolongxi')!=-1))||
					(a.indexOf('ALX_chaoshumaxi')!=-1&&(b.indexOf('ALX_wanquanxi')!=-1||b.indexOf('ALX_chaocaoxi')!=-1||b.indexOf('ALX_chaoshangguxi')!=-1))||
					(a.indexOf('ALX_chaoshenglingxi')!=-1&&(b.indexOf('ALX_chaodianxi')!=-1||b.indexOf('ALX_chaoshangguxi')!=-1||b.indexOf('ALX_chaojixiexi')!=-1))||
					(a.indexOf('ALX_chaowangxi')!=-1&&(b.indexOf('ALX_qiankunxi')!=-1||b.indexOf('ALX_chaoshenglingxi')!=-1||b.indexOf('ALX_chaohuoxi')!=-1||b.indexOf('ALX_chaocaoxi')!=-1))||
					(a.indexOf('ALX_qiankunxi')!=-1&&(b.indexOf('ALX_wanquanxi')!=-1||b.indexOf('ALX_chaolongxi')!=-1||b.indexOf('ALX_chaoanxi')!=-1||b.indexOf('ALX_chaoguangxi')!=-1))||
					(a.indexOf('ALX_chaobingxi')!=-1&&(b.indexOf('ALX_chaofeixingxi')!=-1||b.indexOf('ALX_chaocaoxi')!=-1||b.indexOf('ALX_chaoshangguxi')!=-1))||
					(a.indexOf('ALX_chaojixiexi')!=-1&&(b.indexOf('ALX_chaobingxi')!=-1||b.indexOf('ALX_chaotuxi')!=-1))||
					(a.indexOf('ALX_chaofeixingxi')!=-1&&b.indexOf('ALX_chaocaoxi')!=-1)||
					(a.indexOf('ALX_wanquanxi')!=-1&&(b.indexOf('ALX_chaowangxi')!=-1||b.indexOf('ALX_chaoshangguxi')!=-1||b.indexOf('ALX_chaoshenglingxi')!=-1));
				},
				content:function (){
					trigger.num=trigger.num*2;
				},
			},
			"_ALX_attributeWeak":{
				trigger:{
					source:"damageBefore",
				},
				forced:true,
				filter:function (event,player){
					if(event.type==undefined) return false;
					var a=player.group;
					var b=event.player.group;
					return (a.indexOf('ALX_chaohuoxi')!=-1&&(b.indexOf('ALX_chaotuxi')!=-1||b.indexOf('ALX_chaoshuixi')!=-1||b.indexOf('ALX_chaoshangguxi')!=-1))||
					(a.indexOf('ALX_chaoshuixi')!=-1&&(b.indexOf('ALX_chaocaoxi')!=-1||b.indexOf('ALX_chaoshangguxi')!=-1||b.indexOf('ALX_chaoshenglingxi')!=-1||b.indexOf('ALX_chaodianxi')!=-1))||
					(a.indexOf('ALX_chaocaoxi')!=-1&&(b.indexOf('ALX_chaoshumaxi')!=-1||b.indexOf('ALX_chaohuoxi')!=-1||b.indexOf('ALX_chaoshangguxi')!=-1||b.indexOf('ALX_chaojixiexi')!=-1||b.indexOf('ALX_chaofeixingxi')!=-1))||
					(a.indexOf('ALX_chaoshangguxi')!=-1&&(b.indexOf('ALX_wanquanxi')!=-1||b.indexOf('ALX_chaoshumaxi')!=-1||b.indexOf('ALX_chaoshenglingxi')!=-1||b.indexOf('ALX_chaojixiexi')!=-1))||
					(a.indexOf('ALX_chaolongxi')!=-1&&b.indexOf('ALX_chaoanxi')!=-1)||
					(a.indexOf('ALX_chaodianxi')!=-1&&b.indexOf('ALX_chaocaoxi')!=-1)||
					(a.indexOf('ALX_chaotuxi')!=-1&&(b.indexOf('ALX_chaoshuixi')!=-1||b.indexOf('ALX_chaowangxi')!=-1||b.indexOf('ALX_chaojixiexi')!=-1))||
					(a.indexOf('ALX_chaoguangxi')!=-1&&(b.indexOf('ALX_chaolongxi')!=-1||b.indexOf('ALX_chaobingxi')!=-1||b.indexOf('ALX_chaojixiexi')!=-1))||
					(a.indexOf('ALX_chaoanxi')!=-1&&(b.indexOf('ALX_chaoguangxi')!=-1||b.indexOf('ALX_chaojixiexi')!=-1))||
					(a.indexOf('ALX_chaoshumaxi')!=-1&&(b.indexOf('ALX_chaohuoxi')!=-1||b.indexOf('ALX_chaoshenglingxi')!=-1||b.indexOf('ALX_chaojixiexi')!=-1))||
					(a.indexOf('ALX_chaoshenglingxi')!=-1&&(b.indexOf('ALX_chaotuxi')!=-1||b.indexOf('ALX_chaowangxi')!=-1||b.indexOf('ALX_wanquanxi')!=-1))||
					(a.indexOf('ALX_chaowangxi')!=-1&&(b.indexOf('ALX_chaoshangguxi')!=-1||b.indexOf('ALX_chaodianxi')!=-1||b.indexOf('ALX_wanquanxi')!=-1))||
					(a.indexOf('ALX_qiankunxi')!=-1&&b.indexOf('ALX_chaocaoxi')!=-1)||
					(a.indexOf('ALX_chaobingxi')!=-1&&(b.indexOf('ALX_chaoshuixi')!=-1||b.indexOf('ALX_chaohuoxi')!=-1||b.indexOf('ALX_chaojixiexi')!=-1))||
					(a.indexOf('ALX_chaojixiexi')!=-1&&(b.indexOf('ALX_chaojixiexi')!=-1||b.indexOf('ALX_chaodianxi')!=-1||b.indexOf('ALX_chaoshenglingxi')!=-1||b.indexOf('ALX_chaoshuixi')!=-1||b.indexOf('ALX_chaohuoxi')!=-1||b.indexOf('ALX_chaolongxi')!=-1||b.indexOf('ALX_chaowangxi')!=-1))||
					(a.indexOf('ALX_chaofeixingxi')!=-1&&(b.indexOf('ALX_chaojixiexi')!=-1||b.indexOf('ALX_chaotuxi')!=-1||b.indexOf('ALX_chaodianxi')!=-1))||
					(a.indexOf('ALX_wanquanxi')!=-1&&(b.indexOf('ALX_chaoshumaxi')!=-1||b.indexOf('ALX_chaodianxi')!=-1||b.indexOf('ALX_chaotuxi')!=-1||b.indexOf('ALX_wanquanxi')!=-1||b.indexOf('ALX_qiankunxi')!=-1));
				},
				content:function (){
					trigger.num=trigger.num/2;
				},
			},
			"_ALX_skillFDamage":{
				trigger:{
					source:"damageAfter",
				},
				forced:true,
				filter:function (event,player){
					return event.source&&
					event.source.persistentSkill.ALX_skillFDamage&&
					event.source.persistentSkill.ALX_skillFDamage[1]>0&&
					(event.type=='common'||event.type=='exceptional');
				},
				content:function (){
					trigger.player.loseHp(trigger.source.persistentSkill.ALX_skillFDamage[0]);
				},
			},
			"_ALX_gainCQhun":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					for(var i=0;i<player.get('s').length;i++){
						var skill=player.get('s')[i];
						if(lib.skill[skill].CQhunPerPhase!=undefined) return true;
					};
					return false;
				},
				content:function (){
					for(var i=0;i<player.get('s').length;i++){
						var skill=player.get('s')[i];
						if(lib.skill[skill].CQhunPerPhase!=undefined) player.changeHun(lib.skill[skill].CQhunPerPhase);
					};
				},
			},
			"_ALX_gainYuanQi":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					for(var i=0;i<player.get('s').length;i++){
						var skill=player.get('s')[i];
						if(lib.skill[skill].yuanQiPerPhase!=undefined) return true;
					};
					return false;
				},
				content:function (){
					for(var i=0;i<player.get('s').length;i++){
						var skill=player.get('s')[i];
						if(lib.skill[skill].yuanQiPerPhase!=undefined) player.changeyuanQi(lib.skill[skill].yuanQiPerPhase);
					};
				},
			},
			"_ALX_immuneToAbnormalState":{
				trigger:{
					player:"gainAbnormalStateBegin",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_immuneToAbnormalState>0;
				},
				content:function (){
					trigger.cancel();
					game.log(player,'免疫异常状态效果触发');
					player.popup('免疫');
				},
			},
			"_ALX_resistance":{
				trigger:{
					player:"damageBegin",
				},
				forced:true,
				priority:-99.6,
				filter:function (event,player){
					for(var i in player.persistentSkill){
						if(i.indexOf('ALX_resistance')!=-1){
							if(player.persistentSkill[i][1]>0){
								return true;
							};
						};
					};
					return false;
				},
				content:function (){
					var num=trigger.num;
					for(var i in player.persistentSkill){
						if(i.indexOf('ALX_resistance')!=-1){
							if(player.persistentSkill[i][1]>0){
								num=num*(1-player.persistentSkill[i][0]);
							};
						};
					};
					num=num*1000;
					num=Math.round(num);
					num=num/1000;
					trigger.num=num;
				},
			},
			"_ALX_attackRate":{
				trigger:{
					source:"damageBegin",
				},
				forced:true,
				filter:function (event,player){
					for(var i in player.persistentSkill){
						if(i.indexOf('ALX_attackRate')!=-1){
							if(player.persistentSkill[i][1]>0){
								return true;
							};
						};
					};
					return false;
				},
				content:function (){
					var num=trigger.num;
					for(var i in player.persistentSkill){
						if(i.indexOf('ALX_attackRate')!=-1){
							if(player.persistentSkill[i][1]>0){
								num=num*(1+player.persistentSkill[i][0]);
							};
						};
					};
					num=num*1000;
					num=Math.round(num);
					num=num/1000;
					trigger.num=num;
				},
			},
			"_ALX_canntAct":{
				trigger:{
					player:"phaseBegin",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_canntAct>0;
				},
				content:function (){
					trigger.untrigger();
					trigger.finish();
					game.log(player,'无法行动');
				},
			},
			"_ALX_keepAbilityRank":{
				trigger:{
					player:"changeAbilityRankBegin",
				},
				forced:true,
				filter:function (event,player){
					return event.num<0&&event.ignore!=true&&player.persistentSkill.ALX_keepAbilityRank>0;
				},
				content:function (){
					trigger.cancel();
					game.log(player,'保护属性效果触发');
					player.popup('护属');
				},
			},
			"_ALX_keepAbilityRank1":{
				trigger:{
					player:"changeAbilityRankBegin",
				},
				forced:true,
				filter:function (event,player){
					return event.num>0&&event.ignore!=true&&player.persistentSkill.ALX_keepAbilityRank1>0;
				},
				content:function (){
					trigger.cancel();
					game.log(player,'提属无效效果触发');
					player.popup('提属无效');
				},
			},
			"_ALX_forcedAbilityRank":{
				trigger:{
					player:"changeAbilityRankBegin",
				},
				forced:true,
				filter:function (event,player){
					return event.ignore!=true&&player.persistentSkill.ALX_forcedAbilityRank>0;
				},
				content:function (){
					trigger.cancel();
					game.log(player,'锁定属性效果触发');
					player.popup('锁属');
				},
			},
			"_ALX_keepAttackRank":{
				trigger:{
					player:"changeAbilityRankBegin",
				},
				forced:true,
				filter:function (event,player){
					return (event.skill=='attackC'||event.skill=='attackE')&&event.ignore!=true&&event.num>0&&player.persistentSkill.ALX_keepAttackRank>0;
				},
				content:function (){
					trigger.cancel();
					game.log(player,'无法提升双攻等级');
					player.popup('提攻无效');
				},
			},
			"_ALX_keepAbility1":{
				trigger:{
					player:"changeAbilityBegin",
				},
				forced:true,
				filter:function (event,player){
					return event.num>0&&event.ignore!=true&&player.persistentSkill.ALX_keepAbility1>0;
				},
				content:function (){
					trigger.cancel();
					game.log(player,'提数值无效效果触发');
					player.popup('提数值无效');
				},
			},
			"_ALX_poisoning":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.abnormalState.ALX_poisoning>0;
				},
				content:function (){
					player.loseHp(player.maxHp/8).type='poisoning';
					game.log(player,'<span style="color:#24FF10">中毒</span>了');
				},
			},
			"_ALX_burn":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.abnormalState.ALX_burn>0;
				},
				content:function (){
					player.loseHp(player.maxHp/8).type='burn';
					game.log(player,'<span style="color:#FF0000">烧伤</span>了');
				},
			},
			"_ALX_weak":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.abnormalState.ALX_weak>0;
				},
				content:function (){
					player.loseHp((player.maxHp-player.hp)*0.25+0.1);
					game.log(player,'<span style="color:#31CBFF">衰弱</span>了');
				},
			},
			"_ALX_damnation":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.abnormalState.ALX_damnation>0;
				},
				content:function (){
					player.loseHp(player.maxHp/4);
					game.log(player,'被<span style="color:#A40BB2">诅咒</span>了');
				},
			},
			"_ALX_frostbite":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.abnormalState.ALX_frostbite>0;
				},
				content:function (){
					player.loseHp(player.maxHp/8);
					game.log(player,'<span style="color:#C2F4FF">冻伤</span>了');
				},
			},
			"_ALX_shackles":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.abnormalState.ALX_shackles>0;
				},
				content:function (){
					player.loseHp(player.maxHp/16).type='shackles';
					game.log(player,'<span style="color:#0318FF">束缚</span>了');
				},
			},
			"_ALX_paralysis":{
				trigger:{
					player:"phaseBegin",
				},
				forced:true,
				filter:function (event,player){
					return Math.random()<=0.4&&player.abnormalState.ALX_paralysis>0;
				},
				content:function (){
					trigger.untrigger();
					trigger.finish();
					game.log(player,'<span style="color:#F3FF08">麻痹</span>得无法动弹');
				},
			},
			"_ALX_sleep":{
				trigger:{
					player:"phaseBegin",
				},
				forced:true,
				filter:function (event,player){
					return player.abnormalState.ALX_sleep>0;
				},
				content:function (){
					trigger.untrigger();
					trigger.finish();
					game.log(player,'睡着了');
				},
			},
			"_ALX_sleep1":{
				trigger:{
					player:"damageEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.abnormalState.ALX_sleep>0;
				},
				content:function (){
					player.loseAbnormalState('ALX_sleep');
				},
			},
			"_ALX_afaid":{
				trigger:{
					player:"phaseBegin",
				},
				forced:true,
				filter:function (event,player){
					return player.abnormalState.ALX_afaid>0;
				},
				content:function (){
					trigger.untrigger();
					trigger.finish();
					player.loseAbnormalState('ALX_afaid');
					game.log(player,'<span style="color:#090A00">害怕</span>了');
				},
			},
			"_ALX_mad":{
				trigger:{
					player:"useSkillBefore",
				},
				forced:true,
				filter:function (event,player){
					return player.abnormalState.ALX_mad>0&&Math.random()<=0.75;
				},
				content:function (){
					if(lib.skill[trigger.skill].ALX_skill_type!=undefined){
						if(lib.skill[trigger.skill].ALX_skill_type.contains('ALX_noTarget')){
							trigger.player=player.randomGetPlayer();
						}else{
							if(trigger.targets!=undefined) trigger.targets[0]=trigger.targets[0].randomGetPlayer();
						};
					};
					trigger.mad=true;
					player.addTempSkill('ALX_usedSkill',{player:'phaseEnd'});
					game.log(player,'<span style="color:#E3FF7D">混乱</span>了');
				},
			},
			"_ALX_parasitic":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.abnormalState.ALX_parasitic>0;
				},
				content:function(){
					var target=player.storage.ALX_parasitic;
					var num=player.maxHp/10;
					player.loseHp(num);
					target.recover(num);
					game.log(player,'被<span style="color:#85FF55">寄生</span>了');
				},
			},
			"ALX_mark":{
				marktext:"状",
				locked:true,
				intro:{
					content:function (storage,player,skill){
						var str='';
						str+='PP值：';
						var num2=0;
						for(var i in player.pp){
							str+='<br>'+lib.translate[i]+':'+player.storage[i+'_pp']+'/'+player.pp[i];
							num2++;
						};
						if(num2==0) str+='无PP值技能';
						str+='<br>能力：<br>攻击：'+(player.ability.attackC+player.addedAbility.attackC-player.reducedAbility.attackC)+
						'  特攻：'+(player.ability.attackE+player.addedAbility.attackE-player.reducedAbility.attackE)+
						'<br>防御：'+(player.ability.defenseC+player.addedAbility.defenseC-player.reducedAbility.defenseC)+
						'  特防：'+(player.ability.defenseE+player.addedAbility.defenseE-player.reducedAbility.defenseE)+
						'<br>速度：'+(player.ability.speed+player.addedAbility.speed-player.reducedAbility.speed);
						str+='<br>能力等级：<br>攻击：'+player.abilityRank.attackC+'级'+
						'  特攻：'+player.abilityRank.attackE+'级'+
						'<br>防御：'+player.abilityRank.defenseC+'级'+
						'  特防：'+player.abilityRank.defenseE+'级'+
						'<br>速度：'+player.abilityRank.speed+'级'+
						'  暴击：'+player.abilityRank.crit+'级'+
						'<br>命中：'+player.abilityRank.hit+'级'+
						'  闪避：'+player.abilityRank.dodge+'级';
						str+='<br>异常状态：';
						var num=0;
						for(var i in player.abnormalState){
							if(player.abnormalState[i]>999){
								str+='<br>'+lib.translate[i]+':无限回合';
							}else{
								str+='<br>'+lib.translate[i]+':剩余'+player.abnormalState[i]+'个回合';
							};
							num++;
						};
						if(num==0) str+='无异常状态';
						str+='<br>持续性技能：';
						var num1=0;
						for(var i in player.persistentSkill){
							if(typeof player.persistentSkill[i]!='object'){
								if(player.persistentSkill[i]>999){
									str+='<br>'+lib.translate[i]+':无限回合';
								}else{
									str+='<br>'+lib.translate[i]+':剩余'+player.persistentSkill[i]+'个回合';
									str+='<li>结算时机:';
									if(player.storage[i+'phaseBefore']==true){
										str+='回合开始';
									}else{
										str+='回合结束';
									};
								};
							}else{
								var num2=player.persistentSkill[i][0];
								num2=num2*1000;
								num2=Math.round(num2);
								num2=num2/1000;
								if(i.indexOf('ALX_resistance')!=-1||i=='ALX_crit'||i=='ALX_dodge'||i.indexOf('ALX_attackRate')!=-1){
									num2=(num2*100)+'%';
								}else if(i=='ALX_chaoyanbi'||i=='ALX_huDun'){
									num2=num2+'点体力';
								}else if(i=='ALX_EX_abilityRankI'||i=='ALX_EX_abilityRankD'){
									num2=num2+'级';
								}else {
									num2=num2+'点';
								};
								if(player.persistentSkill[i][1]>999){
									if(i.indexOf('ALX_resistance')!=-1||i.indexOf('ALX_attackRate')!=-1){
										str+='<br>'+lib.translate[i.slice(0,14)]+':无限回合';
										str+='<li>来源:'+lib.translate[i.slice(15)];
										str+='<li>效果:'+num2;
									}else{
										str+='<br>'+lib.translate[i]+':无限回合';
										str+='<li>效果:'+num2;
									};
								}else{
									if(i.indexOf('ALX_resistance')!=-1||i.indexOf('ALX_attackRate')!=-1){
										str+='<br>'+lib.translate[i.slice(0,14)]+':剩余'+player.persistentSkill[i][1]+'个回合';
										str+='<li>来源:'+lib.translate[i.slice(15)];
										str+='<li>效果:'+num2;
									}else{
										str+='<br>'+lib.translate[i]+':剩余'+player.persistentSkill[i][1]+'个回合';
										str+='<li>效果:'+num2;
									};
									str+='<li>结算时机:';
									if(player.storage[i+'phaseBefore']==true){
										str+='回合开始';
									}else{
										str+='回合结束';
									};
								};
							};
							num1++;
						};
						if(num1==0) str+='无持续性技能';
						return str;
					},
				},
			},
			/*
			"_ALX_support":{
				trigger:{
					global:"gameStart",
				},
				forced:true,
				priority:Infinity,
				filter:function(){
					return _status.kzol_alx_xh==undefined;
				},
				content:function(){
					var func=function(){
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.ability==undefined) pl.ability={};
							if(pl.ability.attackC==undefined&&lib.kzol_ALXYB[pl.name]!=undefined) pl.ability.attackC=lib.kzol_ALXYB[pl.name].attackC;
							if(pl.ability.attackC==undefined&&lib.kzol_ALXYB[pl.name2]!=undefined) pl.ability.attackC=lib.kzol_ALXYB[pl.name2].attackC;
							if(pl.ability.attackE==undefined&&lib.kzol_ALXYB[pl.name]!=undefined) pl.ability.attackE=lib.kzol_ALXYB[pl.name].attackE;
							if(pl.ability.attackE==undefined&&lib.kzol_ALXYB[pl.name2]!=undefined) pl.ability.attackE=lib.kzol_ALXYB[pl.name2].attackE;
							if(pl.ability.defenseC==undefined&&lib.kzol_ALXYB[pl.name]!=undefined) pl.ability.defenseC=lib.kzol_ALXYB[pl.name].defenseC;
							if(pl.ability.defenseC==undefined&&lib.kzol_ALXYB[pl.name2]!=undefined) pl.ability.defenseC=lib.kzol_ALXYB[pl.name2].defenseC;
							if(pl.ability.defenseE==undefined&&lib.kzol_ALXYB[pl.name]!=undefined) pl.ability.defenseE=lib.kzol_ALXYB[pl.name].defenseE;
							if(pl.ability.defenseE==undefined&&lib.kzol_ALXYB[pl.name2]!=undefined) pl.ability.defenseE=lib.kzol_ALXYB[pl.name2].defenseE;
							if(pl.ability.speed==undefined&&lib.kzol_ALXYB[pl.name]!=undefined) pl.ability.speed=lib.kzol_ALXYB[pl.name].speed;
							if(pl.ability.speed==undefined&&lib.kzol_ALXYB[pl.name2]!=undefined) pl.ability.speed=lib.kzol_ALXYB[pl.name2].speed;
							if(pl.ability.attackC==undefined) pl.ability.attackC=0;
							if(pl.ability.attackE==undefined) pl.ability.attackE=0;
							if(pl.ability.defenseC==undefined) pl.ability.defenseC=0;
							if(pl.ability.defenseE==undefined) pl.ability.defenseE=0;
							if(pl.ability.speed==undefined) pl.ability.speed=0;
							if(pl.addedAbility==undefined) pl.addedAbility={};
							if(pl.addedAbility.attackC==undefined) pl.addedAbility.attackC=0;
							if(pl.addedAbility.attackE==undefined) pl.addedAbility.attackE=0;
							if(pl.addedAbility.defenseC==undefined) pl.addedAbility.defenseC=0;
							if(pl.addedAbility.defenseE==undefined) pl.addedAbility.defenseE=0;
							if(pl.addedAbility.speed==undefined) pl.addedAbility.speed=0;
							if(pl.reducedAbility==undefined) pl.reducedAbility={};
							if(pl.reducedAbility.attackC==undefined) pl.reducedAbility.attackC=0;
							if(pl.reducedAbility.attackE==undefined) pl.reducedAbility.attackE=0;
							if(pl.reducedAbility.defenseC==undefined) pl.reducedAbility.defenseC=0;
							if(pl.reducedAbility.defenseE==undefined) pl.reducedAbility.defenseE=0;
							if(pl.reducedAbility.speed==undefined) pl.reducedAbility.speed=0;
							if(pl.abilityRank==undefined) pl.abilityRank={};
							if(pl.abilityRank.attackC==undefined) pl.abilityRank.attackC=0;
							if(pl.abilityRank.attackE==undefined) pl.abilityRank.attackE=0;
							if(pl.abilityRank.defenseC==undefined) pl.abilityRank.defenseC=0;
							if(pl.abilityRank.defenseE==undefined) pl.abilityRank.defenseE=0;
							if(pl.abilityRank.speed==undefined) pl.abilityRank.speed=0;
							if(pl.abilityRank.crit==undefined) pl.abilityRank.crit=0;
							if(pl.abilityRank.hit==undefined) pl.abilityRank.hit=0;
							if(pl.abilityRank.dodge==undefined) pl.abilityRank.dodge=0;
							if(pl.abnormalState==undefined) pl.abnormalState={};
							if(pl.persistentSkill==undefined) pl.persistentSkill={};
							if(pl.pp==undefined) pl.pp={};
							for(var j=0;j<pl.get('s').length;j++){
								var skill=pl.get('s')[j];
								if(lib.skill[skill].pp!=undefined&&pl.pp[skill]==undefined&&pl.storage[skill+'_pp']==undefined){
									pl.pp[skill]=lib.skill[skill].pp;
									pl.storage[skill+'_pp']=lib.skill[skill].pp;
								};
							};
							if(pl.storage.lastUsedSkill==undefined) pl.storage.lastUsedSkill='';
							if(pl.kzol_alx_hadShowMark!=true){
								pl.kzol_alx_hadShowMark=true;
								pl.markSkill('ALX_mark');
							};
						};
					};
					func();
					_status.kzol_alx_xh=true;
					//_status.kzol_alx_xh=setInterval(func,5000);
				},
			},
			*/
			"_ALX_attack":{
				trigger:{
					source:"damageBegin",
				},
				forced:true,
				priority:-98,
				filter:function (event,player){
					return event.type!=undefined;
				},
				content:function (){
					var num=trigger.num;
					if(trigger.type=='common'){
						num+=player.ability.attackC;
						num+=player.addedAbility.attackC;
						num-=player.reducedAbility.attackC;
						var attackCRank=player.abilityRank.attackC;
						if(attackCRank>0) num=num*(attackCRank*attackCRank/10+1);
						if(attackCRank<0) num=num*(1+attackCRank*0.12);
					};
					if(trigger.type=='exceptional'){
						num+=player.ability.attackE;
						num+=player.addedAbility.attackE;
						num-=player.reducedAbility.attackE;
						var attackERank=player.abilityRank.attackE;
						if(attackERank>0) num=num*(attackERank*attackERank/10+1);
						if(attackERank<0) num=num*(1+attackERank*0.12);
					};
					num=num/2000;
					num=num*1000;
					num=Math.round(num);
					num=num/1000;
					trigger.num=num;
				},
			},
			"_ALX_attack1":{
				trigger:{
					source:"damageBefore",
				},
				forced:true,
				priority:Infinity,
				content:function (){
					trigger.result={};
				},
			},
			"_ALX_attack2":{
				trigger:{
					source:"damageAfter",
				},
				forced:true,
				priority:-Infinity,
				content:function (){
					trigger.result.num=trigger.num;
				},
			},
			"_ALX_attack3":{
				trigger:{
					source:"damageBegin",
				},
				forced:true,
				priority:-Infinity,
				filter:function (event,player){
					return event.type!=undefined&&event.num>1&&!event.player.isALXYB();
				},
				content:function (){
					trigger.num=1;
				},
			},
			"_ALX_defense":{
				trigger:{
					player:"damageBegin",
				},
				forced:true,
				priority:-99,
				filter:function (event,player){
					return event.type!=undefined;
				},
				content:function (){
					var num=trigger.num;
					num=num*2000;
					if(trigger.type=='common'){
						var defenseCRank=player.abilityRank.defenseC;
						if(defenseCRank>0){
							if(defenseCRank<=6){
								num=num*(1-defenseCRank*0.12);
							}else{
								num=num*(1-6*0.12)-(defenseCRank-6)*0.35;
							};
						};
						if(defenseCRank<0) num=num*(defenseCRank*defenseCRank/10+1);
						num-=player.ability.defenseC;
						num-=player.addedAbility.defenseC;
						num+=player.reducedAbility.defenseC;
					};
					if(trigger.type=='exceptional'){
						var defenseERank=player.abilityRank.defenseE;
						if(defenseERank>0&&trigger.ignore!='defenseE'){
							if(defenseERank<=6){
								num=num*(1-defenseERank*0.12);
							}else{
								num=num*(1-6*0.12)-(defenseERank-6)*0.35;
							};
						};
						if(defenseERank<0) num=num*(defenseERank*defenseERank/10+1);
						if(trigger.ignore!='defenseES1') num-=player.getAbility().defenseE;
						if(trigger.ignore=='defenseES1') num-=player.getAbility().defenseE*0.5;
					};
					num=num/2000;
					num=num*1000;
					num=Math.round(num);
					num=num/1000;
					trigger.num=num;
				},
			},
			"_ALX_speed":{
				trigger:{
					player:"phaseAfter",
				},
				forced:true,
				filter:function (event,player){
					return Math.random()<=(player.ability.speed+player.addedAbility.speed-player.reducedAbility.speed)*(1+player.abilityRank.speed*0.2)/15000;
				},
				content:function (){
					player.insertPhase();
				},
			},
			"_ALX_crit":{
				trigger:{
					source:"damageBegin",
				},
				forced:true,
				filter:function (event,player){
					var num=player.abilityRank.crit*0.1;
					if(event.critRate!=undefined) num+=event.critRate;
					if(player.persistentSkill.ALX_crit&&player.persistentSkill.ALX_crit[1]>0) num+=player.persistentSkill.ALX_crit[0];
					return Math.random()<=num;
				},
				content:function (){
					trigger.result.crit=true;
					if(trigger.type!=undefined){
						trigger.num=trigger.num*2;
					}else{
						trigger.num+=0.25;
					};
					game.log(player,'<span style="color:#F3FF0B">暴击</span>了');
					player.popup('<img src='+lib.assetURL+"extension/扩展ol/crit.png"+' width="100" height="50">');
				},
			},
			"_ALX_hit":{
				trigger:{
					player:"shaBefore",
				},
				forced:true,
				filter:function (event,player){
					return Math.random()<=player.abilityRank.hit*0.1;
				},
				content:function (){
					trigger.directHit=true;
				},
			},
			"_ALX_dodge":{
				trigger:{
					player:"damageBefore",
				},
				forced:true,
				filter:function (event,player){
					if(event.hit==true) return false;
					var num=player.abilityRank.dodge;
					if(event.source!=undefined) num-=event.source.abilityRank.hit;
					num=num*0.075;
					if(player.persistentSkill.ALX_dodge&&player.persistentSkill.ALX_dodge[1]>0) num+=player.persistentSkill.ALX_dodge[0];
					return Math.random()<=num;
				},
				content:function (){
					trigger.untrigger();
					trigger.finish();
					player.$damage();
					game.log(player,'<span style="color:#12EBFF">闪避</span>了攻击');
					trigger.result.miss=true;
					player.popup('<img src='+lib.assetURL+"extension/扩展ol/dodge.png"+' width="107" height="37">');
				},
			},
			"_ALX_usedSkill":{
				trigger:{
					player:"useSkillAfter",
				},
				forced:true,
				filter:function (event,player){
					return event.mad!=true&&lib.skill[event.skill].ALX_skill_type!=undefined&&lib.skill[event.skill].ALX_skill_type.contains('ALX_enable');
				},
				content:function (){
					player.addTempSkill('ALX_usedSkill',{player:'phaseEnd'});
					player.storage.lastUsedSkill=trigger.skill;
				},
			},
			"ALX_usedSkill":{
				init:function(player,skill){
					var skills=player.getSkills(true,false);
					var list=[];
					for(var i=0;i<skills.length;i++){
						if(lib.skill[skills[i]].ALX_skill_type!=undefined&&lib.skill[skills[i]].ALX_skill_type.contains('ALX_enable')) list.push(skills[i]);
					};
					player.disableSkill(skill,list);
				},
				onremove:function(player,skill){
					player.enableSkill(skill);
				},
				locked:true,
				mark:true,
				intro:{
					content:function(storage,player,skill){
						return '已使用技能';
					},
				},
			},
			"_ALX_usedSkill1":{
				trigger:{
					player:"useSkillBefore",
				},
				forced:true,
				filter:function (event,player){
					return lib.skill[event.skill].pp!=undefined;
				},
				content:function (){
					player.changePP(-1,trigger.skill);
				},
			},
			"_ALX_gainPP":{
				nobracket:true,
				enable:'phaseUse',
				filterCard:true,
				check:function(card){
					return 6-get.value(card);
				},
				filter:function (event,player){
					return _status.mode!='ex'&&player.haveLostOnePP()&&!player.hasSkill('ALX_usedSkill');
				},
				content:function(){
					for(var i in player.pp){
						player.changePP(2,i);
					};
					player.addTempSkill('ALX_usedSkill',{player:'phaseEnd'});
					game.log(player,'恢复了PP值');
				},
				ai:{
					order:20,
					result:{
						player:function(player){
							if(player.haveLostOnePP()) return 1;
						},
					},
				},
			},
			"_ALX_gainPP1":{
				nobracket:true,
				enable:'phaseUse',
				filter:function (event,player){
					return _status.mode=='ex'&&player.haveLostOnePP()&&!player.hasSkill('ALX_usedSkill');
				},
				content:function(){
					for(var i in player.pp){
						player.changePP(2,i);
					};
					player.addTempSkill('ALX_usedSkill',{player:'phaseEnd'});
					game.log(player,'恢复了PP值');
				},
				ai:{
					order:20,
					result:{
						player:function(player){
							if(player.haveLostOnePP()) return 1;
						},
					},
				},
			},
			"ALX_CQhun":{
				marktext:" ",
				intro:{
					content:function (storage){
						return '当前拥有'+storage+'个魂';
					},
				},
			},
			"ALX_yuanQi":{
				marktext:" ",
				intro:{
					content:function (storage){
						return '当前拥有'+storage+'元气';
					},
				},
			},
			"_ALX_loseMark":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				priority:-1,
				content:function (){
					for(var i in player.persistentSkill){
						if(player.storage[i+'phaseBefore']!=true){
							if(typeof player.persistentSkill[i]!='object'){
								player.persistentSkill[i]--;
								if(player.persistentSkill[i]<=0) player.changePersistentSkill(i);
							}else{
								player.persistentSkill[i][1]--;
								if(player.persistentSkill[i][1]<=0) player.changePersistentSkill(i);
							};
						};
					};
					for(var i in player.abnormalState){
						player.abnormalState[i]--;
						if(player.abnormalState[i]<=0) player.loseAbnormalState(i);
					};
				},
			},
			"_ALX_loseMark2":{
				trigger:{
					player:"phaseBefore",
				},
				forced:true,
				priority:-1,
				content:function (){
					for(var i in player.persistentSkill){
						if(player.storage[i+'phaseBefore']==true){
							if(typeof player.persistentSkill[i]!='object'){
								player.persistentSkill[i]--;
								if(player.persistentSkill[i]<=0) player.changePersistentSkill(i);
							}else{
								player.persistentSkill[i][1]--;
								if(player.persistentSkill[i][1]<=0) player.changePersistentSkill(i);
							};
						};
					};
				},
			},
			"_ALX_recover":{
				trigger:{
					player:"recoverBegin",
				},
				forced:true,
				priority:-Infinity,
				content:function (){
					var num=trigger.num;
					num=num*1000;
					num=Math.round(num);
					num=num/1000;
					trigger.num=num;
					if(player.persistentSkill.ALX_canntRecover>0){
						trigger.untrigger();
						trigger.finish();
						game.log(player,'无法回复体力');
						player.popup('无法回血');
					};
				},
			},
			"_ALX_loseHp":{
				trigger:{
					player:"loseHpBegin",
				},
				forced:true,
				priority:-Infinity,
				content:function (){
					var num=trigger.num;
					num=num*1000;
					num=Math.round(num);
					num=num/1000;
					trigger.num=num;
				},
			},
			"_ALX_draw":{
				trigger:{
					player:"drawBegin",
				},
				forced:true,
				content:function (){
					trigger.num=Math.round(trigger.num);
				},
			},
			"ALX_qiyue_mark":{
				marktext:"契",
				intro:{
					content:'契约坐骑',
				},
			},
			"ALX_bushengwugui":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_bushengwugui'+'_pp']>0;
				},
				content:function(){
					player.recover((player.maxHp-player.hp)*0.4);
					player.recoverAbilityRank();
				},
				ai:{
					order:11,
					result:{
						player:function(player){
							if(player.maxHp-player.hp>0) return 1;
						},
					},
				},
			},
			"ALX_yinguangshuangshan":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_yinguangshuangshan'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;;
				},
				content:function(){
					'step 0'
					event.num=0;
					'step 1'
					target.damage(200).type='common';
					'step 2'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(Math.random()<=0.85){
								target.changeAbility(-(target.ability.defenseC+target.addedAbility.defenseC-target.reducedAbility.defenseC)*0.35,'defenseC');
								target.changeAbility(-(target.ability.defenseE+target.addedAbility.defenseE-target.reducedAbility.defenseE)*0.35,'defenseE');
								player.changeHun();
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					event.num++;
					if(event.num<2) event.goto(1);
				},
				ai:{
					order:10,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_shenyonyinghunji":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_CQhun>=5;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(1000).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(target.hp<=0.8) player.fastKill(target);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeHun(-5);
				},
				ai:{
					order:12,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_binghun":{
				nobracket:true,
				marktext:"兵",
				intro:{
					content:'兵神韩信的传奇魂',
				},
				mark:true,
				init:function(player,skill){
					player.storage.ALX_CQhun=0;
					player.syncStorage('ALX_CQhun');
					player.markSkill('ALX_CQhun');
					setTimeout(function(){
						game.log(player,'开启了传奇魂：兵魂');
						for(var i=0;i<player.node.marks.childNodes.length;i++){
							if(player.node.marks.childNodes[i].name=='ALX_binghun'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_binghun.jpg');
								player.node.marks.childNodes[i].innerHTML='';
							};
							if(player.node.marks.childNodes[i].name=='ALX_CQhun'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_CQhun.jpg');
							};
						};
					},100);
				},
				CQhunPerPhase:1,
				group:["ALX_binghun_damaged"],
				subSkill:{
					"damaged":{
						trigger:{
							player:"damageBegin",
						},
						forced:true,
						content:function (){
							player.changeHun();
							player.changeAbility(200,'speed');
							player.changeAbility(200,'attackC');
						},
					},
				},
			},
			"ALX_nvdizhifeng":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:1,
				filter:function (event,player){
					return player.storage['ALX_nvdizhifeng'+'_pp']>0;
				},
				content:function(){
					player.changePersistentSkill(99999,'ALX_nvdizhifeng',true);
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.persistentSkill.ALX_nvdizhifeng==undefined) return 1;
						},
					},
				},
			},
			"_ALX_nvdizhifeng":{
				trigger:{
					player:"changeAbilityRankBegin",
				},
				forced:true,
				filter:function (event,player){
					return event.num<0&&player.persistentSkill.ALX_nvdizhifeng>0&&!player.isMaxHp();
				},
				content:function (){
					trigger.cancel();
					game.log(player,'女帝之风效果触发');
					player.popup('护属');
				},
			},
			"ALX_xushidaifa":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_xushidaifa'+'_pp']>0;
				},
				content:function(){
					player.changeAbilityRank(2,'defenseC');
					player.changeAbilityRank(2,'defenseE');
					player.changeAbilityRank(2,'hit');
				},
				ai:{
					order:13,
					result:{
						player:function(player){
							if(player.abilityRank.defenseC<2||player.abilityRank.defenseE<2) return 1;
						},
					},
				},
			},
			"ALX_lianhuazhanfang":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.persistentSkill.ALX_lianhuazhanfang==undefined&&player.storage['ALX_lianhuazhanfang'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(350).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeAbilityRank(1,'speed');
							player.changePersistentSkill(2,'ALX_lianhuazhanfang');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:12,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"_ALX_lianhuazhanfang":{
				group:["_ALX_lianhuazhanfang_loseMark","_ALX_lianhuazhanfang_damaged"],
				subSkill:{
					"loseMark":{
						trigger:{
							player:"changePersistentSkill",
						},
						forced:true,
						filter:function (event,player){
							return event.skill=='ALX_lianhuazhanfang'&&event.num==undefined;
						},
						content:function (){
							if(player.storage.ALX_lianhuazhanfang==undefined){
								player.changeAllAbilityRank();
							}else{
								delete player.storage.ALX_lianhuazhanfang;
							};
						},
					},
					"damaged":{
						trigger:{
							player:"damageEnd",
						},
						forced:true,
						filter:function (event,player){
							return player.persistentSkill.ALX_lianhuazhanfang>0;
						},
						content:function (){
							player.storage.ALX_lianhuazhanfang=true;
						},
					},
				},
			},
			"ALX_suyelunhui":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_suyelunhui'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(350);
					damage.type='exceptional';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var num=Math.abs(player.hp-target.hp)/3;
							if(num>1.2) num=1.2;
							if(num>0){
								target.loseHp(num);
								player.recover(num);
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_mixinmojing":{
				nobracket:true,
				init:function(player,skill){
					setTimeout(function(){
						if(player.persistentSkill==undefined) player.persistentSkill={};
						player.changePersistentSkill(20,'ALX_mixinmojing');
						player.$skill('迷心魔境','legend','thunder');
					},100);
				},
			},
			"_ALX_mixinmojing":{
				trigger:{
					player:"damageBefore",
				},
				forced:true,
				filter:function (event,player){
					return Math.random()<=0.15&&player.persistentSkill.ALX_mixinmojing>0;
				},
				content:function (){
					trigger.untrigger();
					trigger.finish();
					trigger.result.invalid=true;
					player.$damage();
					game.log(player,'免疫了伤害');
					player.popup('<img src='+lib.assetURL+"extension/扩展ol/invalid.png"+' width="52" height="27">');
				},
			},
			"ALX_chunmuzhixin":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_chunmuzhixin'+'_pp']>0;
				},
				content:function(){
					if(player.hp<0.8){
						player.recover((player.maxHp-player.hp)*0.5);
						player.changeAbilityRank(2,'defenseC');
						player.changeAbilityRank(2,'defenseE');
					};
					player.recover((player.maxHp-player.hp)*0.5);
					player.changeAbilityRank(2,'defenseC');
					player.changeAbilityRank(2,'defenseE');
				},
				ai:{
					order:11,
					result:{
						player:function(player){
							if(player.maxHp-player.hp>0) return 1;
						},
					},
				},
			},
			"ALX_wanwuganzhao":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_wanwuganzhao'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(150).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeAbilityRank(1,lib.ALX_ability.randomGet());
							player.changeAbilityRank(1,lib.ALX_ability.randomGet());
							target.gainAbnormalState(4,lib.ALX_abnormalState.randomGet());
							if(target.storage.ALX_wanwuganzhao==undefined) target.storage.ALX_wanwuganzhao=0;
							target.storage.ALX_wanwuganzhao++;
							if(target.storage.ALX_wanwuganzhao>=2){
								delete target.storage.ALX_wanwuganzhao;
								target.gainAbnormalState(2,'damnation');
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:10,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_shenfengjianling":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_shenfengjianling'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(350);
					damage.type='common';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(player.maxHp>player.hp){
								player.changePersistentSkill(3,'ALX_keepAbilityRank');
								player.changeAbilityRank(1,lib.ALX_ability.randomGet());
								player.changeAbilityRank(1,lib.ALX_ability.randomGet());
								target.gainAbnormalState(4,lib.ALX_abnormalState.randomGet());
								if(target.storage.ALX_wanwuganzhao==undefined) target.storage.ALX_wanwuganzhao=0;
								target.storage.ALX_wanwuganzhao++;
								if(target.storage.ALX_wanwuganzhao>=2){
									delete target.storage.ALX_wanwuganzhao;
									target.gainAbnormalState(2,'damnation');
								};
								game.log(player,'触发万物感召效果');
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:10.5,
					result:{
						target:function(player,target){
							if(player.maxHp>player.hp) return -1;
							return ;
						},
					},
					expose:0.75,
				},
			},
			"ALX_jinglingwangzhifeng":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_jinglingwangzhifeng'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(350).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							target.storage.ALX_jinglingwangzhifeng=true;
							game.log(target,'获得风灵印记');
							if(player.persistentSkill.ALX_jinglingwangzhifeng==undefined) player.changePersistentSkill(99999,'ALX_jinglingwangzhifeng',true);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:13,
					result:{
						target:function(player,target){
							if(game.countPlayer(function(current){return current.storage.ALX_jinglingwangzhifeng==true})==0) return -1;
							return ;
						},
					},
					expose:0.75,
				},
			},
			"_ALX_jinglingwangzhifeng":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.hasSkill('ALX_jinglingwangzhifeng')&&game.countPlayer(function(current){return current.storage.ALX_jinglingwangzhifeng==true})>0&&player.persistentSkill.ALX_jinglingwangzhifeng>0;
				},
				content:function (){
					var list=[0.25,0.5,0.75,1];
					player.recover(list.randomGet());
				},
			},
			"ALX_lingfengsuxing":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					var num=target.hp*0.3;
					target.loseHp(num);
					player.recover(num);
					for(var i=0;i<game.players.length;i++){
						var pl=game.players[i];
						pl.changeAbilityRank(-pl.abilityRank.attackC,'attackC');
						pl.changeAbilityRank(-pl.abilityRank.attackE,'attackE');
						pl.changePersistentSkill(99999,'ALX_keepAttackRank',true);
					};
					player.changePersistentSkill(99999,'ALX_lingfengsuxing',true);
					player.removeSkill('ALX_lingfengsuxing');
				},
				ai:{
					order:13,
					result:{
						target:function(player,target){
							return -1;
						},
					},
					expose:0.75,
				},
			},
			"_ALX_lingfengsuxing":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_lingfengsuxing>0;
				},
				content:function (){
					player.recover(0.2);
				},
			},
			"ALX_beidouqunxing":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:3,
				filter:function (event,player){
					return player.storage['ALX_beidouqunxing'+'_pp']>0;
				},
				content:function(){
					player.changePersistentSkill(3,'ALX_beidouqunxing');
					player.changePersistentSkill(3,'ALX_immuneToAbnormalState');
				},
				ai:{
					order:11,
					result:{
						player:function(player){
							if(player.persistentSkill.ALX_immuneToAbnormalState==undefined) return 1;
						},
					},
				},
			},
			"_ALX_beidouqunxing":{
				trigger:{
					player:"damageEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_beidouqunxing>0;
				},
				content:function (){
					if(Math.random()<=0.5){
						player.recover(player.maxHp/4);
					}else{
						player.changeAbilityRank(1,'attackE');
					};
				},
			},
			"ALX_wanzhangxinghe":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_wanzhangxinghe'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='exceptional';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(Math.random()<=0.4) target.clearUseAbilityRank();
							if(target.abilityRank.defenseE<0) player.recover(0.9);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:10,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_yifanxingtianhuang":{
				nobracket:true,
				group:["ALX_yifanxingtianhuang_shackles","ALX_yifanxingtianhuang_shacklesDamage"],
				subSkill:{
					"shackles":{
						trigger:{
							player:"phaseEnd",
						},
						forced:true,
						content:function (){
							for(var i=0;i<game.players.length;i++){
								if(game.players[i]!=player) game.players[i].gainAbnormalState(1,'shackles');
							};
						},
					},
					"shacklesDamage":{
						trigger:{
							global:"loseHpEnd",
						},
						forced:true,
						filter:function (event,player){
							return event.player!=player&&event.type=='shackles'&&Math.random()<=0.6;
						},
						content:function (){
							trigger.player.changeAbilityRank(-1,'defenseE');
						},
					},
				},
			},
			"ALX_ranshaodadi":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:2,
				filter:function (event,player){
					return player.storage['ALX_ranshaodadi'+'_pp']>0;
				},
				content:function(){
					player.changePersistentSkill(0,[0,5],'ALX_ranshaodadi');
					player.changePersistentSkill(5,'ALX_ranshaodadi1');
					
				},
				ai:{
					order:11,
					result:{
						player:function(player){
							if(player.persistentSkill.ALX_ranshaodadi==undefined) return 1;
						},
					},
				},
			},
			"_ALX_ranshaodadi":{
				trigger:{
					source:"damageBegin",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_ranshaodadi&&player.persistentSkill.ALX_ranshaodadi[1]>0;
				},
				content:function (){
					var num=trigger.num;
					num=num*(1+player.persistentSkill.ALX_ranshaodadi[0]);
					num=num*1000;
					num=Math.round(num);
					num=num/1000;
					trigger.num=num;
				},
			},
			"_ALX_ranshaodadi1":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_ranshaodadi1>0;
				},
				content:function (){
					player.changePersistentSkill(0,[0.1,0],'ALX_ranshaodadi');
				},
			},
			"ALX_shensimingxiang":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_shensimingxiang'+'_pp']>0;
				},
				content:function(){
					if(player.persistentSkill.ALX_nimoshi!=undefined) player.changePersistentSkill('ALX_nimoshi');
					if(player.persistentSkill.ALX_zhanmoshi!=undefined) player.changePersistentSkill('ALX_zhanmoshi');
					for(var i=0;i<game.players.length;i++){
						game.players[i].clearAbilityRank();
					};
					if(Math.random()<=0.5){
						player.changePersistentSkill(99999,'ALX_nimoshi',true);
					}else{
						player.changePersistentSkill(99999,'ALX_zhanmoshi',true);
					};
					player.changePersistentSkill(2,'ALX_shensimingxiang');
				},
				ai:{
					order:10,
					result:{
						player:function(player){
							if(player.persistentSkill.ALX_shensimingxiang==undefined&&(player.abilityRank.attackE<=0||player.persistentSkill.ALX_nimoshi==undefined||player.persistentSkill.ALX_zhanmoshi==undefined)) return 1;
						},
					},
				},
			},
			"_ALX_shensimingxiang":{
				trigger:{
					player:"changePersistentSkill",
				},
				forced:true,
				filter:function (event,player){
					return event.skill=='ALX_shensimingxiang'&&event.num==undefined;
				},
				content:function (){
					player.recover(player.maxHp/2);
					player.changeAllAbilityRank();
				},
			},
			"ALX_shenquyishini":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_shenquyishini'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					event.num=0;
					'step 1'
					target.damage(50).type='exceptional';
					'step 2'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var abilityRank=lib.ALX_ability.randomGet();
							target.changeAbilityRank(-1,abilityRank);
							if(Math.random()<=0.65&&player.persistentSkill.ALX_nimoshi!=undefined) player.changeAbilityRank(1,abilityRank);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					event.num++;
					if(event.num<4) event.goto(1);
				},
				ai:{
					order:9,
					result:{
						target:function(player,target){
							if(player.persistentSkill.ALX_nimoshi==undefined) return '';
							return -1;
						},
					},
					expose:0.75,
				},
			},
			"ALX_shenquershizhan":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_shenquershizhan'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(320).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var num=0;
							player.recover(player.maxHp/4);
							if(Math.random()<0.45){
								target.damage(320).type='exceptional';
								if(player.persistentSkill.ALX_zhanmoshi!=undefined) num=1;
							};
							if(num==1) player.fastKill(target);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:9.5,
					result:{
						target:function(player,target){
							if(player.persistentSkill.ALX_zhanmoshi==undefined&&player.maxHp==player.hp) return '';
							return -1;
						},
					},
					expose:0.75,
				},
			},
			"ALX_bingposhehun":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_bingposhehun'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(100).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							target.changeAbilityRank(-1,'hit');
							player.changeAbilityRank(1,'hit');
							target.changeAbilityRank(-1,'dodge');
							player.changeAbilityRank(1,'dodge');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:9,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_huanlingshu":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_huanlingshu'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(400).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeHun();
							if(Math.random()<=0.8){
								target.changeHun(-1);
								player.changeAllAbility();
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:10,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_hanlingshunsha":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_CQhun>=5;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(1000).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var num=0;
							if(Math.random()<=0.5) num++;
							if(Math.random()<=0.5) num+=2;
							if(num>0) target.changePersistentSkill(num,'ALX_canntAct');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeHun(-5);
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_xuewuzhiwei":{
				nobracket:true,
				marktext:"逆",
				intro:{
					content:'雪无寒灵的传奇魂',
				},
				mark:true,
				init:function(player,skill){
					player.storage.ALX_CQhun=0;
					player.syncStorage('ALX_CQhun');
					player.markSkill('ALX_CQhun');
					setTimeout(function(){
						game.log(player,'开启了传奇魂：逆水寒');
						for(var i=0;i<player.node.marks.childNodes.length;i++){
							if(player.node.marks.childNodes[i].name=='ALX_xuewuzhiwei'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_nishuihan.jpg');
								player.node.marks.childNodes[i].innerHTML='';
							};
							if(player.node.marks.childNodes[i].name=='ALX_CQhun'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_CQhun.jpg');
							};
						};
					},100);
				},
				CQhunPerPhase:1,
				group:["ALX_xuewuzhiwei_changeAbility","ALX_xuewuzhiwei_changeAbility1"],
				subSkill:{
					"changeAbility":{
						trigger:{
							global:"gameStart",
						},
						forced:true,
						content:function (){
							for(var i=0;i<game.players.length;i++){
								var pl=game.players[i];
								if(pl.group.indexOf('ALX_chaobingxi')==-1){
									pl.changeAbility(-300,'speed');
									pl.changeAbility(-300,'attackC');
									pl.changeAbility(-300,'attackE');
								};
							};
						},
					},
					"changeAbility1":{
						trigger:{
							global:"phaseEnd",
						},
						forced:true,
						filter:function (event,player){
							return event.player.group.indexOf('ALX_chaobingxi')==-1;
						},
						content:function (){
							var ability=trigger.player.getAbility();
							trigger.player.changeAbility(-ability.speed*0.2,'speed');
							trigger.player.changeAbility(-ability.attackC*0.2,'attackC');
							trigger.player.changeAbility(-ability.attackE*0.2,'attackE');
						},
					},
				},
			},
			"ALX_chaolongxuemai":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_chaolongxuemai'+'_pp']>0;
				},
				content:function(){
					player.changeAbilityRank(1,'attackC');
					player.changeAbilityRank(1,'attackE');
					player.changeAbilityRank(1,'speed');
					player.changeAbilityRank(1,'dodge');
				},
				ai:{
					order:11,
					result:{
						player:function(player){
							if(player.abilityRank.attackC<=0) return 1;
						},
					},
				},
			},
			"ALX_wushuang":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_wushuang'+'_pp']>0;
				},
				content:function(){
					var abilityRank=player.abilityRank;
					if(abilityRank.attackC>0) player.changeAbilityRank(abilityRank.attackC,'attackC');
					if(abilityRank.attackE>0) player.changeAbilityRank(abilityRank.attackE,'attackE');
					if(abilityRank.defenseC>0) player.changeAbilityRank(abilityRank.defenseC,'defenseC');
					if(abilityRank.defenseE>0) player.changeAbilityRank(abilityRank.defenseE,'defenseE');
					if(abilityRank.speed>0) player.changeAbilityRank(abilityRank.speed,'speed');
					if(abilityRank.hit>0) player.changeAbilityRank(abilityRank.hit,'hit');
					if(abilityRank.dodge>0) player.changeAbilityRank(abilityRank.dodge,'dodge');
					if(abilityRank.crit>0) player.changeAbilityRank(abilityRank.crit,'crit');
					player.changePersistentSkill(4,'ALX_keepAbilityRank');
				},
				ai:{
					order:10,
					result:{
						player:function(player){
							if(player.abilityRank.dodge>0&&player.abilityRank.dodge<6) return 1;
						},
					},
				},
			},
			"ALX_miesha":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_miesha'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(150).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var random=player.hp-target.hp;
							random=random/10;
							if(Math.random()<=random) player.fastKill(target);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:9,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_shiyuezhiren":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_shiyuezhiren'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					if(player.maxHp>player.hp&&target.persistentSkill.disableEffect==undefined){
						target.damage(525).type='common';
					}else{
						target.damage(350).type='common';
					};
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.recover(result.num/2);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:9.5,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_senluonailuo":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_senluonailuo'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(700);
					damage.type='common';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.recover(result.num*2);
							if(player.storage.ALX_senluonailuo==undefined) player.storage.ALX_senluonailuo=0;
							player.storage.ALX_senluonailuo++;
							if(player.storage.ALX_senluonailuo>=2){
								delete player.storage.ALX_senluonailuo;
								var num=[1,2].randomGet();
								player.gainPlayerAbilityRank(num,'attackC',target);
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:10.25,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_leitingmaichong":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_leitingmaichong'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].abnormalState.ALX_paralysis>0){
							for(j=0;j<4;j++){
								game.players[i].changeAbilityRank(-1,lib.ALX_ability.randomGet());
							};
						};
					};
				},
				ai:{
					order:5,
				},
			},
			"ALX_cichangbaozou":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_cichangbaozou'+'_pp']>0;
				},
				content:function(){
					player.changePersistentSkill(3,'ALX_cichangbaozou');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.persistentSkill.ALX_cichangbaozou==undefined) return 1;
						},
					},
				},
			},
			"_ALX_cichangbaozou":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_cichangbaozou>0;
				},
				content:function (){
					var pl=game.players.randomGet();;
					for(i=0;i<4;i++){
						pl.changeAbilityRank(1,lib.ALX_ability.randomGet());
					};
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].group.indexOf('ALX_chaodianxi')==-1){
							game.players[i].gainAbnormalState(2,'paralysis');
						};
					};
				},
			},
			"ALX_shandianliansuo":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_shandianliansuo'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					event.num=0;
					'step 1'
					target.damage(200).type='exceptional';
					'step 2'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.recover(result.num*0.3);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					event.num++;
					if(event.num<2&&target.abnormalState.ALX_paralysis>0) event.goto(1);
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_chaonengfute":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_chaonengfute'+'_pp']>0&&player.persistentSkill.ALX_chaonengfute==undefined;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					player.storage.ALX_chaonengfute=target;
					player.changePersistentSkill(2,'ALX_chaonengfute');
				},
				ai:{
					order:11.5,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"_ALX_chaonengfute":{
				trigger:{
					player:"changePersistentSkill",
				},
				forced:true,
				filter:function (event,player){
					return event.num==undefined&&event.skill=='ALX_chaonengfute';
				},
				content:function (){
					var list=[2,3,4,5,6];
					player.storage.ALX_chaonengfute.damage(280*list.randomGet()).type='exceptional';
				},
			},
			"ALX_leitingzhangbi":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				content:function(){
					player.changePersistentSkill(99999,'ALX_leitingzhangbi',true);
					player.removeSkill('ALX_leitingzhangbi');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							return 1;
						},
					},
				},
			},
			"_ALX_leitingzhangbi":{
				trigger:{
					player:"useSkillBefore",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_leitingzhangbi>0;
				},
				content:function (){
					if(player.storage.ALX_leitingzhangbi==undefined) player.storage.ALX_leitingzhangbi=0;
					player.storage.ALX_leitingzhangbi++;
					if(player.storage.ALX_leitingzhangbi>=4){
						delete player.storage.ALX_leitingzhangbi;
						var list=[];
						for(var i=40;i<59;i++){
							list.push(i);
						};
						player.changeHuDun(list.randomGet()/100*2);
					};
				},
			},
			"ALX_longnuwanzhang":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_longnuwanzhang'+'_pp']>0;
				},
				content:function(){
					player.changeAbilityRank(2,'attackC');
					if(Math.random()<=0.5){
						player.changeAbilityRank(2,'defenseC');
					}else{
						player.changeAbilityRank(2,'defenseE');
					};
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.abilityRank.attackC<=0) return 1;
						},
					},
				},
			},
			"ALX_chaoyanbi":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_chaoyanbi'+'_pp']>0;
				},
				content:function(){
					var num=99999;
					if(player.persistentSkill.ALX_chaoyanbi!=undefined) num=0;
					player.changePersistentSkill(0,[1,num],'ALX_chaoyanbi',true,'str_的超岩壁获得了1点体力');
				},
				ai:{
					order:11,
					result:{
						player:function(player){
							if(player.persistentSkill.ALX_chaoyanbi==undefined) return 1;
						},
					},
				},
			},
			"_ALX_chaoyanbi":{
				trigger:{
					player:"damageBegin",
				},
				forced:true,
				priority:-100,
				filter:function (event,player){
					return player.persistentSkill.ALX_chaoyanbi&&player.persistentSkill.ALX_chaoyanbi[1]>0;
				},
				content:function (){
					'step 0'
					var num=trigger.num;
					var num1=num*0.5;
					if(num1>player.persistentSkill.ALX_chaoyanbi[0]) num1=player.persistentSkill.ALX_chaoyanbi[0];
					num-=num1;
					player.changePersistentSkill(0,[-num1,0],'ALX_chaoyanbi','str_的超岩壁失去了'+num1+'点体力');
					num=num*1000;
					num=Math.round(num);
					num=num/1000;
					trigger.num=num;
					'step 1'
					if(player.persistentSkill.ALX_chaoyanbi[0]<=0) player.changePersistentSkill('ALX_chaoyanbi');
				},
			},
			"ALX_balongchaoyanji":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_balongchaoyanji'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(280).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeAbilityRank(-1,'speed');
							if(Math.random()<=0.2) player.changeAllAbilityRank();
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:10.5,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_chaoyanposui":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_chaoyanposui'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(400).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(Math.random()<=0.4){
								player.gainAbnormalState(3,lib.ALX_abnormalState.randomGet());
								player.recover(0.3);
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:10,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_chaomoneng":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_chaomoneng'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					var num=1;
					if(Math.random()<=0.3) num=2;
					player.copyUseAbilityRank(target,num);
				},
			},
			"ALX_chaohuanyi":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_chaohuanyi'+'_pp']>0;
				},
				content:function(){
					var num=0.4;
					if(player.persistentSkill.ALX_resistance_ALX_chaohuanyi!=undefined) num=0;
					player.changePersistentSkill(0,[num,3],'ALX_resistance_ALX_chaohuanyi');
					player.changePersistentSkill(3,'ALX_chaohuanyi');
					var num1=99999;
					if(player.persistentSkill.ALX_skillFDamage!=undefined) num1=0;
					player.changePersistentSkill(0,[0,num1],'ALX_skillFDamage',true);
				},
				ai:{
					order:11,
					result:{
						player:function(player){
							if(player.persistentSkill.ALX_chaohuanyi==undefined) return 1;
						},
					},
				},
			},
			"_ALX_chaohuanyi":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_chaohuanyi>0;
				},
				content:function (){
					if(player.persistentSkill.ALX_skillFDamage[0]<1.2) player.changePersistentSkill(0,[0.2,0],'ALX_skillFDamage');
					player.changeAbility(300,'speed');
				},
			},
			"ALX_chaomingyan":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_chaomingyan'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(320).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var list=[-3,-4,-5];
							var skill=target.storage.lastUsedSkill;
							var num=list.randomGet();
							if(target.PPSkill().contains(skill+'_pp')){
								target.changePP(num,skill);
								game.log(target,lib.translate[skill],'的PP值',num);
								player.recover(-num*0.2);
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:9,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_chaoyingyan":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_chaoyingyan'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(320).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var num=0.45;
							if(target.group.indexOf('ALX_chaoanxi')==-1) num+=0.2;
							if(Math.random()<=num) target.gainAbnormalState('fear');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:10,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_heilongxin":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				content:function(){
					player.useSkill('ALX_chaohuanyi');
					player.changePersistentSkill(99999,'ALX_heilongxin',true);
					player.removeSkill('ALX_heilongxin');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							return 1;
						},
					},
				},
			},
			"_ALX_heilongxin":{
				trigger:{
					source:"damageEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_heilongxin>0;
				},
				content:function (){
					trigger.player.storage.ALX_heilongxin=true;
					game.log(trigger.player,'获得了龙心黑印');
					if(Math.random()<=0.1) trigger.player.gainAbnormalState('fear');
					if(trigger.player.storage.ALX_heilongxin==true&&player.maxHp==player.hp){
						game.log(player,'引爆了龙心黑印');
						delete trigger.player.storage.ALX_heilongxin;
						player.gainPlayerAbility(200,'defenseC',trigger.player);
						player.gainPlayerAbility(200,'defenseE',trigger.player);
					};
				},
			},
			"ALX_chaoshumalingyu":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_chaoshumalingyu'+'_pp']>0;
				},
				content:function(){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].group.indexOf('ALX_chaoshumaxi')!=-1) game.players[i].changeAbilityRank(2,'dodge');
					};
					player.changePersistentSkill(5,'ALX_chaoshumalingyu');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.persistentSkill.ALX_chaoshumalingyu==undefined) return 1;
						},
					},
				},
			},
			"_ALX_chaoshumalingyu":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_chaoshumalingyu>0;
				},
				content:function (){
					player.recover(0.4);
				},
			},
			"ALX_chaoshumabenghuai":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_chaoshumabenghuai'+'_pp']>0;
				},
				content:function(){
					player.loseHp(0.4);
					var list=lib.ALX_ability;
					list.remove('attackC');
					for(var i=0;i<6;i++){
						player.changeAbilityRank(1,list.randomGet());
					};
				},
				ai:{
					order:11.5,
					result:{
						player:function(player){
							if(player.abilityRank.attackE<=0&&player.hp>2) return 1;
						},
					},
				},
			},
			"ALX_chaoshumaguangpao":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_chaoshumaguangpao'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					if(player.hp>target.hp&&target.persistentSkill.disableEffect==undefined){
						target.damage(450).type='exceptional';
					}else{
						target.damage(300).type='exceptional';
					};
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:10,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_chaoshumahuanxiang":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_chaoshumahuanxiang'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(300).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(player.hp<target.hp) player.swapHp(target);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_xingshenzhiyu":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_xingshenzhiyu'+'_pp']>0;
				},
				content:function(){
					player.changeAllAbilityRank();
					player.changePersistentSkill(4,'ALX_xingshenzhiyu');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.persistentSkill.ALX_xingshenzhiyu==undefined) return 1;
						},
					},
				},
			},
			"_ALX_xingshenzhiyu":{
				trigger:{
					player:"damageBefore",
				},
				forced:true,
				filter:function (event,player){
					if(event.type==undefined) return false;
					if(event.source){
						return event.source.group.indexOf('ALX_chaoshangguxi')==-1&&Math.random()<=0.45&&player.persistentSkill.ALX_xingshenzhiyu>0;
					}else{
						return Math.random()<=0.45&&player.persistentSkill.ALX_xingshenzhiyu>0;
					};
				},
				content:function (){
					trigger.untrigger();
					trigger.finish();
					trigger.result.invalid=true;
					player.$damage();
					game.log(player,'免疫了伤害');
					player.popup('<img src='+lib.assetURL+"extension/扩展ol/invalid.png"+' width="52" height="27">');
				},
			},
			"ALX_zhiminglongying":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_zhiminglongying'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(200).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changePersistentSkill(4,'ALX_zhiminglongying');
							player.storage.ALX_zhiminglongying=target;
							player.changePersistentSkill(0,[0,4],'ALX_resistance_ALX_zhiminglongying');
							target.changePersistentSkill(0,[0,4],'ALX_resistance_ALX_zhiminglongying');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11.5,
					result:{
						target:function(player,target){
							if(player.persistentSkill.ALX_resistance_ALX_zhiminglongying==undefined) return -1;
							return ;
						},
					},
					expose:0.75,
				},
			},
			"_ALX_zhiminglongying":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_zhiminglongying>0;
				},
				content:function(){
					var target=player.storage.ALX_zhiminglongying;
					var num=target.maxHp/10;
					player.changePersistentSkill(0,[0.1,0],'ALX_resistance_ALX_zhiminglongying');
					target.changePersistentSkill(0,[-0.1,0],'ALX_resistance_ALX_zhiminglongying');
					target.loseHp(num);
					player.recover(num);
				},
			},
			"ALX_guyanwushuang":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_guyanwushuang'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(300).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(player.maxHp==player.hp){
								target.changePersistentSkill(4,'ALX_forcedAbilityRank');
								player.changePersistentSkill(4,'ALX_keepAbilityRank');
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:10,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_yuanhunzhansha":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_yuanhunzhansha'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(400);
					damage.type='exceptional';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(target.hp>1) target.loseHp(0.6);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_xingshenguhun":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				content:function(){
					player.storage.ALX_xingshenguhun=3;
					game.log(player,'获得3层星神古魂');
					player.changePersistentSkill(99999,'ALX_xingshenguhun',true);
					player.removeSkill('ALX_xingshenguhun');
				},
				ai:{
					order:13,
					result:{
						player:function(player){
							return 1;
						},
					},
				},
			},
			"_ALX_xingshenguhun":{
				trigger:{
					player:"changeHp",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_xingshenguhun>0&&player.hp<player.maxHp*0.4;
				},
				content:function(){
					player.storage.ALX_xingshenguhun--;
					if(player.storage.ALX_xingshenguhun<=0){
						delete player.storage.ALX_xingshenguhun;
						player.changePersistentSkill('ALX_xingshenguhun');
					};
					player.recover(player.maxHp*0.4);
					player.changeAllAbilityRank();
					game.log(player,'消耗1层星神古魂');
				},
			},
			"ALX_shengjun":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_shengjun'+'_pp']>0;
				},
				content:function(){
					var list=lib.ALX_ability;
					list.remove('attackC');
					for(var i=0;i<7;i++){
						player.changeAbilityRank(1,list.randomGet());
					};
					if(player.persistentSkill.ALX_mojun!=undefined) player.changePersistentSkill('ALX_mojun');
					player.changePersistentSkill(2,'ALX_shengjun');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.persistentSkill.ALX_shengjun==undefined) return 1;
						},
					},
				},
			},
			"_ALX_shengjun":{
				trigger:{
					player:"useSkillBegin",
				},
				forced:true,
				filter:function (event,player){
					return game.countPlayer(function(current){return current.persistentSkill.ALX_shengjun>0})>0&&
					lib.skill[event.skill].ALX_skill_type!=undefined&&
					lib.skill[event.skill].ALX_skill_type.contains('ALX_attribute')&&
					player.group.indexOf('ALX_chaotuxi')==-1&&
					player.persistentSkill.ALX_shengjun==undefined&&
					Math.random()<=0.4;
				},
				content:function(){
					trigger.skill='ALX_none';
					player.addTempSkill('ALX_usedSkill',{player:'phaseEnd'});
				},
			},
			"ALX_none":{
				content:function(){},
			},
			"ALX_mojun":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_mojun'+'_pp']>0;
				},
				content:function(){
					if(player.persistentSkill.ALX_shengjun!=undefined) player.changePersistentSkill('ALX_shengjun');
					player.changePersistentSkill(2,'ALX_mojun');
				},
				ai:{
					order:9,
					result:{
						player:1,
					},
				},
			},
			"_ALX_mojun":{
				trigger:{
					player:"useSkillBegin",
				},
				forced:true,
				filter:function (event,player){
					return game.countPlayer(function(current){return current.persistentSkill.ALX_mojun>0})>0&&
					lib.skill[event.skill].ALX_skill_type!=undefined&&
					lib.skill[event.skill].ALX_skill_type.contains('ALX_attack')&&
					player.group.indexOf('ALX_chaotuxi')==-1&&
					player.persistentSkill.ALX_mojun==undefined&&
					Math.random()<=0.4;
				},
				content:function(){
					trigger.skill='ALX_none';
					player.addTempSkill('ALX_usedSkill',{player:'phaseEnd'});
				},
			},
			"_ALX_mojun1":{
				trigger:{
					source:"damageAfter",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_mojun>0;
				},
				content:function(){
					trigger.player.clearUseAbilityRank();
				},
			},
			"ALX_liuhuofeitong":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_liuhuofeitong'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(250).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeAbilityRank(1,'crit');
							if(player.hp<target.hp) target.damage(250).type='exceptional';
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_qishashengcai":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_qishashengcai'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(350).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.recover(result.num*0.3);
							if(result.num*1000%2==0) target.changeAbilityRank(-1,'defenseE');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:10,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_shengmoniepan":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				content:function(){
					game.log(player,'获得了圣魔印记');
					player.changePersistentSkill(4,'ALX_shengmoniepan');
					player.removeSkill('ALX_shengmoniepan');
				},
				ai:{
					order:13,
					result:{
						player:function(player){
							return 1;
						},
					},
				},
			},
			"_ALX_shengmoniepan":{
				trigger:{
					player:"dyingBegin",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_shengmoniepan>0;
				},
				content:function(){
					player.changePersistentSkill('ALX_shengmoniepan').type='remove';
					player.recover(player.maxHp*0.5-player.hp);
					game.log(player,'消耗了圣魔印记');
					trigger.untrigger();
					trigger.finish();
				},
			},
			"_ALX_shengmoniepan1":{
				trigger:{
					player:"changePersistentSkill",
				},
				forced:true,
				filter:function (event,player){
					return event.num==undefined&&event.skill=='ALX_shengmoniepan'&&event.type!='remove';
				},
				content:function (){
					game.log(player,'吸收了圣魔印记');
					player.changeAllAbilityRank();
				},
			},
			"ALX_xifengyu":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_xifengyu'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					if(target.abnormalState.ALX_mad>0&&target.persistentSkill.disableEffect==undefined){
						target.damage(750).type='exceptional';
					}else{
						target.damage(150).type='exceptional';
					};
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeHun();
							if(Math.random()<=0.6) target.gainAbnormalState(5,'mad');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:10,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_shixingchen":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_shixingchen'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(400).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeHun();
							if(target.abnormalState.ALX_poisoning>0){
								var num=0.15;
								if(target.hp<target.maxHp*0.5) num=0.3
								target.loseHp(target.maxHp*num);
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_chihongzhitong":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_CQhun>=5;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(1200);
					damage.type='exceptional';
					if(target.persistentSkill.disableEffect==undefined&&Math.random()<=0.5) damage.ignore='defenseE';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.copyUseAbilityRank(target);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeHun(-5);
				},
				ai:{
					order:12,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_zhujiuyin":{
				nobracket:true,
				marktext:"烛",
				intro:{
					content:'烛龙的传奇魂',
				},
				mark:true,
				init:function(player,skill){
					player.storage.ALX_CQhun=0;
					player.syncStorage('ALX_CQhun');
					player.markSkill('ALX_CQhun');
					setTimeout(function(){
						game.log(player,'开启了传奇魂：烛九阴');
						for(var i=0;i<player.node.marks.childNodes.length;i++){
							if(player.node.marks.childNodes[i].name=='ALX_zhujiuyin'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_zhujiuyin.jpg');
								player.node.marks.childNodes[i].innerHTML='';
							};
							if(player.node.marks.childNodes[i].name=='ALX_CQhun'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_CQhun.jpg');
							};
						};
					},100);
				},
				CQhunPerPhase:1,
				group:["ALX_zhujiuyin_damaged"],
				subSkill:{
					"damaged":{
						trigger:{
							player:"damageBegin",
						},
						forced:true,
						filter:function (event,player){
							return event.source;
						},
						content:function (){
							if(trigger.source.abnormalState.ALX_poisoning>0) trigger.num-=trigger.num*0.6;
							if(trigger.source.abnormalState.ALX_poisoning==undefined||trigger.source.abnormalState.ALX_poisoning<100) trigger.source.gainAbnormalState(99999,'poisoning');
						},
					},
				},
			},
			"ALX_yiciyuanliliang":{
				nobracket:true,
				group:["ALX_yiciyuanliliang_keepAbility","ALX_yiciyuanliliang_damage"],
				subSkill:{
					"keepAbility":{
						trigger:{
							player:["changeAbilityBegin","changeAbilityRankBegin"],
						},
						forced:true,
						filter:function (event,player){
							return event.num<0;
						},
						content:function (){
							trigger.cancel();
						},
					},
					"damage":{
						trigger:{
							source:"damageBefore",
						},
						forced:true,
						priority:Infinity,
						content:function (){
							if(trigger.type==undefined){
								trigger.num=trigger.num*2500;
								trigger.type='common';
							};
							trigger.hit=true;
							player.changeAbilityRank(2,lib.ALX_ability.randomGet());
							if(Math.random()<=0.25) trigger.player.changePersistentSkill(1,'ALX_canntAct');
						},
					},
				},
			},
			"ALX_yiciyuanshalu":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_yiciyuanshalu'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(500).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.recover(result.num*0.35);
							target.changeAbilityRank(-1,'defenseC');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:12,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_jinglingwangguilai":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				content:function(){
					player.changePersistentSkill(0,[0.25,8],'ALX_resistance_ALX_jinglingwangguilai');
					player.changePersistentSkill(99999,'ALX_xingshenzhiyu',true);
					//player.degeneratorPetSkill('ALX_yisaer',31,125);
					player.removeSkill('ALX_jinglingwangguilai');
				},
				ai:{
					order:13,
					result:{
						player:function(player){
							return 1;
						},
					},
				},
			},
			"ALX_chaoshangguzhixin":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_chaoshangguzhixin'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					player.changeAllAbilityRank();
					var num=99999;
					if(target.persistentSkill.ALX_chaoshangguzhixin>0) num=0;
					target.changePersistentSkill(num,'ALX_chaoshangguzhixin',true);
					target.storage.ALX_chaoshangguzhixin1=player;
				},
				ai:{
					order:12,
					result:{
						target:function(player,target){
							if(player.abilityRank.defenseC<=1) return -1;
							return ;
						},
					},
					expose:0.55,
				},
			},
			"_ALX_chaoshangguzhixin":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return (player.persistentSkill.ALX_chaoshangguzhixin>0||player.persistentSkill.ALX_aoyuehua>0)&&
					game.countPlayer(function(current){return player.storage.ALX_chaoshangguzhixin1&&current==player.storage.ALX_chaoshangguzhixin1})>0;
				},
				content:function (){
					if(player.storage.ALX_chaoshangguzhixin==undefined) player.storage.ALX_chaoshangguzhixin=0;
					var num=[1,2].randomGet();
					if(game.countPlayer(function(current){return current.persistentSkill.ALX_huangyanyang>0||current.persistentSkill.ALX_aoyuehua>0})>0) num+=1;
					if(player.storage.ALX_chaoshangguzhixin+num>6) num=6-player.storage.ALX_chaoshangguzhixin;
					player.storage.ALX_chaoshangguzhixin+=num;
					if(num>0) game.log(player,'获得了',get.cnNumber(num),'层古魂印记');
				},
			},
			"ALX_zhanshenlieyang":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_zhanshenlieyang'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(350).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(Math.random()<=0.85) target.changeAbilityRank(-1,'defenseE');
							player.changePersistentSkill(2,'ALX_zhanshenlieyang');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"_ALX_zhanshenlieyang":{
				trigger:{
					global:"dieBefore",
				},
				forced:true,
				filter:function (event,player){
					return event.source&&event.source==player&&player.persistentSkill.ALX_zhanshenlieyang>0;
				},
				content:function (){
					player.changeAllAbilityRank();
					player.recover(0.8);
				},
			},
			"ALX_cangqiongpo":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_cangqiongpo'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(150).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(target.storage.ALX_chaoshangguzhixin>0){
								var num=target.storage.ALX_chaoshangguzhixin;
								delete target.storage.ALX_chaoshangguzhixin;
								game.log(target,'失去了',get.cnNumber(num),'层古魂印记');
								player.changeAbility(num*200,'attackE');
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:10.5,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_cangyan":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_cangyan'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(350).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var num=0.45;
							if(target.storage.ALX_chaoshangguzhixin>0) num+=target.storage.ALX_chaoshangguzhixin*0.06;
							if(Math.random()<=num) target.gainAbnormalState(3,'mad');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:10,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_huangyanyang":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					player.changePersistentSkill(99999,'ALX_huangyanyang',true);
					if(target.storage.ALX_chaoshangguzhixin>0){
						var num=target.storage.ALX_chaoshangguzhixin;
						if(target.storage.ALX_chaoshangguzhixin+num>6) num=6-target.storage.ALX_chaoshangguzhixin;
						target.storage.ALX_chaoshangguzhixin+=num;
						if(num>0) game.log(target,'获得了',get.cnNumber(num),'层古魂印记');
					};
					player.removeSkill('ALX_huangyanyang');
				},
				ai:{
					order:13,
					result:{
						player:function(player){
							return 1;
						},
					},
				},
			},
			"_ALX_zhanshenlieyang":{
				trigger:{
					source:"damageEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_huangyanyang>0;
				},
				content:function (){
					player.recover(trigger.num*0.3);
				},
			},
			"ALX_wushencangyue":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_wushencangyue'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(350).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.recover(result.num*0.4);
							if(target.storage.ALX_chaoshangguzhixin>0) player.recover(player.maxHp*target.storage.ALX_chaoshangguzhixin/10);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:12,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_xingchensui":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_xingchensui'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(150).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(target.storage.ALX_chaoshangguzhixin>0){
								var num=target.storage.ALX_chaoshangguzhixin;
								delete target.storage.ALX_chaoshangguzhixin;
								game.log(target,'失去了',get.cnNumber(num),'层古魂印记');
								player.changeAbility(num*200,'attackC');
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_shiyue":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_shiyue'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(350).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(Math.random()<=0.3) target.gainAbnormalState();
							if(player.maxHp==player.hp) player.changePersistentSkill(4,'ALX_keepAbilityRank');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:10,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_aoyuehua":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					player.changePersistentSkill(99999,'ALX_aoyuehua',true);
					if(target.storage.ALX_chaoshangguzhixin>0){
						var num=target.storage.ALX_chaoshangguzhixin;
						if(target.storage.ALX_chaoshangguzhixin+num>6) num=6-target.storage.ALX_chaoshangguzhixin;
						target.storage.ALX_chaoshangguzhixin+=num;
						if(num>0) game.log(target,'获得了',get.cnNumber(num),'层古魂印记');
					};
					player.removeSkill('ALX_aoyuehua');
				},
				ai:{
					order:13,
					result:{
						player:function(player){
							return 1;
						},
					},
				},
			},
			"_ALX_aoyuehua":{
				trigger:{
					player:"damageBefore",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_aoyuehua>0&&event.source&&event.source.group.indexOf('ALX_chaoshumaxi')!=-1;
				},
				content:function (){
					trigger.num=trigger.num*0.7;
				},
			},
			"ALX_yuangushenghun":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_yuangushenghun'+'_pp']>0;
				},
				content:function(){
					var list=lib.ALX_ability;
					list.remove('dodge');
					for(var i=0;i<list.length;i++){
						player.changeAbilityRank(1,list[i]);
					};
					player.changePersistentSkill(4,'ALX_yuangushenghun');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.persistentSkill.ALX_yuangushenghun==undefined) return 1;
						},
					},
				},
			},
			"_ALX_yuangushenghun":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_yuangushenghun>0;
				},
				content:function (){
					if(Math.random()<=0.5){
						var list=lib.ALX_ability;
						list.remove('dodge');
						for(var i=0;i<list.length;i++){
							player.changeAbilityRank(1,list[i]);
						};
					}else{
						player.recover(player.maxHp*0.25);
					};
				},
			},
			"ALX_zhenshishenguang":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_zhenshishenguang'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(100).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changePersistentSkill(2,'ALX_zhenshishenguang');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:function(player,target){
							if(player.persistentSkill.ALX_yuangushenghun>0&&Math.random()<=0.5) return -1;
							return ;
						},
					},
					expose:0.75,
				},
			},
			"_ALX_zhenshishenguang":{
				trigger:{
					global:"recoverEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_zhenshishenguang>0&&event.player!=player;
				},
				content:function (){
					player.changeHuDun(trigger.num);
				},
			},
			"_ALX_zhenshishenguang1":{
				trigger:{
					player:"changePersistentSkill",
				},
				forced:true,
				filter:function (event,player){
					return event.num==undefined&&event.skill=='ALX_huDun'&&player.hasSkill('ALX_zhenshishenguang');
				},
				content:function (){
					var list=lib.ALX_ability;
					list.remove('dodge');
					for(var i=0;i<list.length;i++){
						player.changeAbilityRank(1,list[i]);
					};
				},
			},
			"ALX_hengsaoqiankun":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_hengsaoqiankun'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					event.num=[3,4,5].randomGet();
					event.num1=0;
					if(event.num<5) target.changeAbilityRank(-1,'defenseC');
					'step 1'
					target.damage(100).type='common';
					'step 2'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.recover(result.num*0.3);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					event.num1++;
					if(event.num1<event.num) event.goto(1);
				},
				ai:{
					order:10.5,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_tiandishenchengjie":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_tiandishenchengjie'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(350);
					damage.type='common';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							target.gainAbnormalState(4,'shackles');
							target.changePersistentSkill(4,'ALX_tiandishenchengjie');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:10,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"_ALX_tiandishenchengjie":{
				trigger:{
					player:"loseHpEnd",
				},
				forced:true,
				filter:function (event,player){
					return Math.random()<=0.78&&player.persistentSkill.ALX_tiandishenchengjie>0&&event.type=='shackles';
				},
				content:function (){
					player.clearUseAbilityRank();
				},
			},
			"ALX_xiuluoaohunjue":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(400).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var num=0.5;
							if(player.persistentSkill.ALX_xiuluoaohunjue&&player.persistentSkill.ALX_xiuluoaohunjue[1]>0){
								num+=player.persistentSkill.ALX_xiuluoaohunjue[0];
							};
							if(target.hp<num) player.fastKill(target);
							player.changePersistentSkill('ALX_xiuluoaohunjue');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					player.removeSkill('ALX_xiuluoaohunjue');
				},
				ai:{
					order:13,
					result:{
						target:function(player,target){
							if(player.persistentSkill.ALX_xiuluoaohunjue&&player.persistentSkill.ALX_xiuluoaohunjue[0]>=2) return -1;
							return ;
						},
					},
				},
			},
			"_ALX_xiuluoaohunjue":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.hasSkill('ALX_xiuluoaohunjue');
				},
				content:function (){
					var num=99999;
					if(player.persistentSkill.ALX_xiuluoaohunjue&&player.persistentSkill.ALX_xiuluoaohunjue[1]>0) num=0;
					player.changePersistentSkill(0,[0.1,num],'ALX_xiuluoaohunjue','str_的【修罗奥魂诀】斩杀能力提升0.1',true);
				},
			},
			"ALX_wujianhundun":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_wujianhundun'+'_pp']>0;
				},
				content:function(){
					for(var i=0;i<game.players.length;i++){
						var pl=game.players[i];
						pl.clearPersistentSkill();
						pl.clearAbilityRank();
						if(pl.group.indexOf('ALX_chaoanxi')==-1) pl.gainAbnormalState(1,'mad');
					};
				},
				ai:{
					order:5,
					result:{
						player:function(player){
							return 1;
						},
					},
				},
			},
			"ALX_anyingwangzhe":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_anyingwangzhe'+'_pp']>0;
				},
				content:function(){
					player.changeAllAbilityRank();
					player.changePersistentSkill(3,'ALX_anyingwangzhe');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.persistentSkill.ALX_anyingwangzhe==undefined) return 1;
						},
					},
				},
			},
			"_ALX_anyingwangzhe":{
				trigger:{
					player:"damageEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_anyingwangzhe>0&&event.source;
				},
				content:function (){
					game.log(player,'反弹了',trigger.source,'的伤害');
					trigger.source.loseHp(trigger.num*0.35);
				},
			},
			"ALX_emengzhongyan":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_emengzhongyan'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					event.num=[2,4,5].randomGet();
					event.num1=0;
					if(event.num<4){
						target.gainAbnormalState(3,'shackles');
						target.changeAllAbilityRank(-1);
					};
					'step 1'
					target.damage(100).type='exceptional';
					'step 2'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					event.num1++;
					if(event.num1<event.num) event.goto(1);
				},
				ai:{
					order:10.5,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_yinghuanjiaozhi":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_yinghuanjiaozhi'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(350);
					damage.type='exceptional';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.recover(result.num*0.5);
							if(Math.random()<=0.5){
								target.changePersistentSkill(1,'ALX_forcedAbilityRank');
							}else{
								var num=[1,2].randomGet();
								player.changeAbilityRank(num,'speed');
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:function(player,target){
							if(player.maxHp>player.hp) return -1;
							return ;
						},
					},
					expose:0.75,
				},
			},
			"ALX_kaisashiyijue":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(400).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var num=3;
							if(player.persistentSkill.ALX_kaisashiyijue&&player.persistentSkill.ALX_kaisashiyijue[1]>0){
								num+=player.persistentSkill.ALX_kaisashiyijue[0];
							};
							for(var i=0;i<num;i++){
								var list=lib.ALX_ability;
								list.remove('attackC');
								var ability=list.randomGet();
								target.changeAbilityRank(-1,ability);
								player.changeAbilityRank(1,ability);
							};
							player.changePersistentSkill('ALX_kaisashiyijue');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					player.removeSkill('ALX_kaisashiyijue');
				},
				ai:{
					order:13,
					result:{
						target:function(player,target){
							if(player.persistentSkill.ALX_kaisashiyijue&&player.persistentSkill.ALX_kaisashiyijue[0]>=6) return -1;
							return ;
						},
					},
				},
			},
			"_ALX_kaisashiyijue":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.hasSkill('ALX_kaisashiyijue');
				},
				content:function (){
					var num=99999;
					if(player.persistentSkill.ALX_kaisashiyijue&&player.persistentSkill.ALX_kaisashiyijue[1]>0) num=0;
					player.changePersistentSkill(0,[1,num],'ALX_kaisashiyijue','str_的【凯撒弑义诀】吸取能力+1',true);
				},
			},
			"ALX_mowanglingyu":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:4,
				filter:function (event,player){
					return player.storage['ALX_mowanglingyu'+'_pp']>0;
				},
				content:function(){
					for(var i=0;i<game.players.length;i++){
						var pl=game.players[i];
						pl.clearAbilityRank(true);
						pl.gainAbnormalState(2,'shackles');
					};
					player.changePersistentSkill(4,'ALX_mowanglingyu');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.persistentSkill.ALX_mowanglingyu==undefined&&player.hp>=2) return 1;
						},
					},
				},
			},
			"_ALX_mowanglingyu":{
				trigger:{
					player:"damageAfter",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_mowanglingyu>0;
				},
				content:function (){
					if(trigger.num<0.5){
						player.changeAbilityRank(1,'speed');
						player.changeAbilityRank(1,'dodge');
						player.changeAbilityRank(1,'hit');
					}else{
						player.changeAbilityRank(1,'defenseC');
						player.changeAbilityRank(1,'defenseE');
					};
				},
			},
			"ALX_yejunqiyue":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_yejunqiyue'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(150);
					damage.type='common';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var list=[-1,-2];
							target.changeAbilityRank(list.randomGet(),'defenseC');
							target.changeAbilityRank(list.randomGet(),'dodge');
							target.changeAbilityRank(list.randomGet(),'hit');
							target.changeAbilityRank(list.randomGet(),'speed');
							if(player.storage.ALX_yejunqiyue==undefined) player.storage.ALX_yejunqiyue=0;
							player.storage.ALX_yejunqiyue+=1;
							game.log(player,'获得1层夜君之印');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:function(player,target){
							if(player.hasSkill('ALX_xueyuxitiandi')) return -1;
							return ;
						},
					},
					expose:0.75,
				},
			},
			"ALX_wangmingduanzui":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_wangmingduanzui'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					event.num=0;
					event.num1=2;
					if(Math.random()<=player.getAbility().speed/10000) event.num1++;
					'step 1'
					target.damage(150).type='common';
					'step 2'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var list=['attackC','hit','crit','speed'];
							player.changeAbilityRank(1,list.randomGet());
							player.changeAbilityRank(1,list.randomGet());
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					event.num++;
					if(event.num<event.num1) event.goto(1);
				},
				ai:{
					order:10.5,
					result:{
						target:function(player,target){
							if(player.abilityRank.attackC<=2) return -1;
							return ;
						},
					},
					expose:0.75,
				},
			},
			"ALX_yeyingwange":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_yeyingwange'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(350);
					damage.type='common';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.recover(result.num*0.4);
							var num=0.3;
							if(player.maxHp-player.hp>1) num*(player.maxHp-player.hp);
							if(Math.random()<=num){
								target.gainAbnormalState();
								target.changeAllAbilityRank(-1);
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:10,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_xueyuxitiandi":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var num=100;
					if(target.persistentSkill.disableEffect==undefined){
						if(player.storage.ALX_yejunqiyue>0){
							num+=player.storage.ALX_yejunqiyue*100;
							delete player.storage.ALX_yejunqiyue;
							game.log(player,'消耗自身所有夜君之印');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					target.damage(num).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(target.isDead()){
								var num=99999;
								if(player.persistentSkill.ALX_resistance_ALX_xueyuxitiandi&&player.persistentSkill.ALX_resistance_ALX_xueyuxitiandi[1]>999) num=0;
								player.changePersistentSkill(0,[0.2,num],'ALX_resistance_ALX_xueyuxitiandi',true);
								player.recover(player.maxHp*0.1);
								player.changePersistentSkill(99999,'ALX_xueyuxitiandi',true);
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					player.removeSkill('ALX_xueyuxitiandi');
				},
				ai:{
					order:13,
					result:{
						target:function(player,target){
							if(player.storage.ALX_yejunqiyue>=3) return -1;
							return ;
						},
					},
				},
			},
			"_ALX_xueyuxitiandi":{
				trigger:{
					player:"damageAfter",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_xueyuxitiandi>0;
				},
				content:function (){
					var num=99999;
					if(player.persistentSkill.ALX_resistance_ALX_xueyuxitiandi&&player.persistentSkill.ALX_resistance_ALX_xueyuxitiandi[1]>999) num=0;
					player.changePersistentSkill(0,[0.2,num],'ALX_resistance_ALX_xueyuxitiandi',true);
					player.recover(player.maxHp*0.1);
				},
			},
			"ALX_gengunuhao":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:4,
				filter:function (event,player){
					return player.storage['ALX_gengunuhao'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					player.changePersistentSkill(4,'ALX_keepAbilityRank');
					player.copyUseAbilityRank(target);
					'step 1'
					if(result=='noAbilityRank') player.recover([0.1,0.3,0.5,0.7,1].randomGet());
				},
				ai:{
					order:5,
					result:{
						player:1,
					},
				},
			},
			"ALX_langzunchiyan":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_langzunchiyan'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(150).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var list=[-1,-2];
							target.changeAbilityRank(list.randomGet(),'attackC');
							target.changeAbilityRank(list.randomGet(),'attackE');
							target.changeAbilityRank(list.randomGet(),'defenseE');
							target.changeAbilityRank(list.randomGet(),'dodge');
							if(player.storage.ALX_langzunchiyan==undefined) player.storage.ALX_langzunchiyan=0;
							player.storage.ALX_langzunchiyan+=1;
							game.log(player,'获得1层狼尊之印');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:12,
					result:{
						target:function(player,target){
							if(player.hasSkill('ALX_lietiandanijian')) return -1;
							return ;
						},
					},
					expose:0.75,
				},
			},
			"ALX_shenyutianyan":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_shenyutianyan'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(350).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeAbilityRank(1,'speed');
							if(Math.random()<=0.49){
								target.gainAbnormalState(5,'burn');
							}else{
								var list=[-1,-2];
								target.changeAbilityRank(list.randomGet(),'attackC');
								target.changeAbilityRank(list.randomGet(),'attackE');
								target.changeAbilityRank(list.randomGet(),'defenseE');
								target.changeAbilityRank(list.randomGet(),'dodge');
								if(player.storage.ALX_langzunchiyan==undefined) player.storage.ALX_langzunchiyan=0;
								player.storage.ALX_langzunchiyan+=1;
								game.log(player,'获得1层狼尊之印');
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:function(player,target){
							if(player.abilityRank.speed<=0) return -1;
							return ;
						},
					},
					expose:0.75,
				},
			},
			"ALX_yinyueshalu":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_yinyueshalu'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(350);
					damage.type='exceptional';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.recover(result.num*0.4);
							if(player.hp<player.maxHp/3) target.gainAbnormalState(3,'paralysis');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:10,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_lietiandanijian":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var num=100;
					if(target.persistentSkill.disableEffect==undefined){
						if(player.storage.ALX_langzunchiyan>0){
							num+=player.storage.ALX_langzunchiyan*100;
							delete player.storage.ALX_langzunchiyan;
							game.log(player,'消耗自身所有狼尊之印');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					target.damage(num).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(target.isDead()) player.changePersistentSkill(4,'ALX_lietiandanijian');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					player.removeSkill('ALX_lietiandanijian');
				},
				ai:{
					order:13,
					result:{
						target:function(player,target){
							if(player.storage.ALX_langzunchiyan>=3) return -1;
							return ;
						},
					},
				},
			},
			"_ALX_lietiandanijian":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_lietiandanijian>0;
				},
				content:function (){
					player.changeAllAbilityRank();
				},
			},
			"ALX_shenglonghuiyao":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_shenglonghuiyao'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(500).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeyuanQi();
							player.recover(result.num*0.5);
							player.changePersistentSkill(3,'ALX_shenglonghuiyao');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:12,
					result:{
						target:function(player,target){
							if(player.hp<player.maxHp) return -1;
							return ;
						},
					},
					expose:0.75,
				},
			},
			"_ALX_shenglonghuiyao":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_shenglonghuiyao>0;
				},
				content:function (){
					player.recover(0.4);
				},
			},
			"ALX_jibanxinxing":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_jibanxinxing'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(500).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeyuanQi();
							if(player.hp==player.maxHp){
								player.changeAbilityRank(2,'attackC');
								player.changeAbilityRank(2,'hit');
							}else{
								player.changeAbilityRank(1,'speed');
								player.changeAbilityRank(1,'defenseC');
								player.changeAbilityRank(1,'defenseE');
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_ciyuanjinghua":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_ciyuanjinghua'+'_pp']>0&&(player.storage.ALX_yuanQi==undefined||player.storage.ALX_yuanQi<5);
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					target.clearUseAbilityRank();
				},
				ai:{
					order:5,
					result:{
						player:1,
					},
				},
			},
			"ALX_ciyuanjinghuaQH":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_yuanQi>=5;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(1200).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							target.clearUseAbilityRank();
							target.loseHp(0.5);
							player.recover(0.5);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeyuanQi(-5);
				},
				ai:{
					order:13,
					result:{
						target:function(player,target){
							if(player.hp<player.maxHp) return -1;
							return ;
						},
					},
					expose:0.75,
				},
			},
			"ALX_tianzhaoshenghen":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_yuanQi>=5;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(1200).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(Math.random()<=0.6) player.changeAllAbilityRank();
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeyuanQi(-5);
				},
				ai:{
					order:12.5,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_wangzhezhiguang":{
				nobracket:true,
				init:function(player,skill){
					player.storage.ALX_yuanQi=0;
					player.syncStorage('ALX_yuanQi');
					player.markSkill('ALX_yuanQi');
					setTimeout(function(){
						for(var i=0;i<player.node.marks.childNodes.length;i++){
							if(player.node.marks.childNodes[i].name=='ALX_yuanQi'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_yuanQi.jpg');
							};
						};
					},100);
				},
				yuanQiPerPhase:1,
				group:["ALX_wangzhezhiguang_changeAbilityRank","ALX_wangzhezhiguang_gainYuanQi"],
				subSkill:{
					"changeAbilityRank":{
						trigger:{
							player:"phaseEnd",
						},
						forced:true,
						filter:function (event,player){
							return Math.random()<=0.3;
						},
						content:function (){
							player.changeAllAbilityRank();
						},
					},
					"gainYuanQi":{
						trigger:{
							player:"changeAbilityRankEnd",
						},
						forced:true,
						popup:false,
						filter:function (event,player){
							return Math.random()<=0.25&&event.num>0;
						},
						content:function (){
							player.changeyuanQi();
						},
					},
				},
			},
			"ALX_shenjihunfeng":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_shenjihunfeng'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					target.changeAbilityRank(-1,'attackC');
					target.changeAbilityRank(-1,'attackE');
					target.changeAbilityRank(-1,'hit');
					target.changeAbilityRank(-1,'speed');
					var num=player.maxHp*0.2;
					if(target.abnormalState.ALX_frostbite>0) num=num*2;
					player.recover(num);
				},
				ai:{
					order:12,
					result:{
						target:function(player,target){
							if(player.hp<player.maxHp) return -1;
							return ;
						},
					},
				},
			},
			"ALX_longhunfengshi":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_longhunfengshi'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='exceptional';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(player.hp==player.maxHp&&Math.random()<=0.35) target.gainAbnormalState();
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_bingdilongfeng":{
				nobracket:true,
				group:["ALX_bingdilongfeng_damage","ALX_bingdilongfeng_damaged"],
				subSkill:{
					"damage":{
						trigger:{
							player:"damageEnd",
						},
						forced:true,
						filter:function (event,player){
							return Math.random()<=0.5&&event.source;
						},
						content:function (){
							trigger.source.gainAbnormalState(3,'frostbite');
						},
					},
					"damaged":{
						trigger:{
							source:"damageEnd",
						},
						forced:true,
						filter:function (event,player){
							return Math.random()<=0.5;
						},
						content:function (){
							trigger.player.gainAbnormalState(3,'frostbite');
						},
					},
				},
			},
			"ALX_axiuluoshenpan":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_axiuluoshenpan'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					for(var i=0;i<game.players.length;i++){
						game.players[i].changePersistentSkill(5,'ALX_forcedAbilityRank');
					};
					var num=-200;
					if(target.group.indexOf('ALX_chaoguangxi')!=-1) num=num*2;
					target.changeAbility(num,'attackC');
					target.changeAbility(num,'attackE');
					target.changeAbility(num,'speed');
				},
				ai:{
					order:12,
					result:{
						target:function(player,target){
							if(player.persistentSkill.ALX_forcedAbilityRank==undefined) return -1;
							return ;
						},
					},
				},
			},
			"ALX_diyuzhishou":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_diyuzhishou'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='common';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var num=target.maxHp*0.1;
							if(player.storage.ALX_kuangnuyanwei>0) num+=target.maxHp*player.storage.ALX_kuangnuyanwei*0.05;
							target.loseHp(num);
							if(result.crit==true) num=num*2;
							player.recover(num);
							/*if(player.storage.ALX_kuangnuyanwei>0){
								num=player.storage.ALX_kuangnuyanwei;
								delete player.storage.ALX_kuangnuyanwei;
								var num1=99999;
								if(player.persistentSkill.ALX_crit&&player.persistentSkill.ALX_crit[1]>0) num1=0;
								player.changePersistentSkill(0,[-num*0.2,num1],'ALX_crit',true);
								player.changeAbility(-300*num,'attackC');
								player.changeAbility(-300*num,'speed');
								game.log(player,'失去'+num+'层狂怒');
								
							};*/
							if(result.crit==true) target.changePersistentSkill(3,'ALX_diyuzhishou');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"_ALX_diyuzhishou":{
				trigger:{
					player:"recoverBegin",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_diyuzhishou>0;
				},
				content:function (){
					trigger.untrigger();
					trigger.finish();
					game.log(player,'无法回复体力');
				},
			},
			"ALX_kuangnuyanwei":{
				nobracket:true,
				group:["ALX_kuangnuyanwei_gameStart","ALX_kuangnuyanwei_damaged","ALX_kuangnuyanwei_useSkill"],
				subSkill:{
					"gameStart":{
						trigger:{
							global:"gameStart",
						},
						forced:true,
						content:function (){
							player.changePersistentSkill(0,[0.5,99999],'ALX_resistance_ALX_kuangnuyanwei',true);
							player.changePersistentSkill(0,[0.2,99999],'ALX_crit','ALX_crit','str_的暴击率上升了20%',true);
						},
					},
					"damaged":{
						trigger:{
							player:"damageEnd",
						},
						forced:true,
						filter:function (event,player){
							return Math.random()<=0.5;
						},
						content:function (){
							if(player.storage.ALX_kuangnuyanwei==undefined) player.storage.ALX_kuangnuyanwei=0;
							if(player.storage.ALX_kuangnuyanwei<3){
								player.storage.ALX_kuangnuyanwei++;
								var num=99999;
								if(player.persistentSkill.ALX_crit&&player.persistentSkill.ALX_crit[1]>0) num=0;
								player.changePersistentSkill(0,[0.2,num],'ALX_crit','str_的暴击率上升了20%',true);
								player.changeAbility(300,'attackC');
								player.changeAbility(300,'speed');
								game.log(player,'获得1层狂怒');
							};
						},
					},
					"useSkill":{
						trigger:{
							player:"useSkillAfter",
						},
						forced:true,
						filter:function (event,player){
							return lib.skill[event.skill].ALX_skill_type!=undefined&&lib.skill[event.skill].ALX_skill_type.contains('ALX_enable');
						},
						content:function (){
							if(player.storage.ALX_kuangnuyanwei==undefined) player.storage.ALX_kuangnuyanwei=0;
							if(player.storage.ALX_kuangnuyanwei<3){
								player.storage.ALX_kuangnuyanwei++;
								var num=99999;
								if(player.persistentSkill.ALX_crit&&player.persistentSkill.ALX_crit[1]>0) num=0;
								player.changePersistentSkill(0,[0.2,num],'ALX_crit','str_的暴击率上升了20%',true);
								player.changeAbility(300,'attackC');
								player.changeAbility(300,'speed');
								game.log(player,'获得1层狂怒');
							};
						},
					},
				},
			},
			"_ALX_kuangnuyanwei":{
				trigger:{
					player:"clearPersistentSkillBegin",
				},
				forced:true,
				filter:function (event,player){
					return player.storage.ALX_kuangnuyanwei>0;
				},
				content:function (){
					var num=player.storage.ALX_kuangnuyanwei;
					delete player.storage.ALX_kuangnuyanwei;
					if(player.persistentSkill.ALX_crit&&player.persistentSkill.ALX_crit[1]>0) player.changePersistentSkill(0,[-num*0.2,0],'ALX_crit','str_的暴击率下降了'+num*20+'%',true);
					player.changeAbility(-300*num,'attackC');
					player.changeAbility(-300*num,'speed');
					game.log(player,'失去'+num+'层狂怒');
				},
			},
			"ALX_yanqianling":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_yanqianling'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					if(target.abnormalState.ALX_burn>0){
					target.loseAbnormalState('ALX_burn');
					target.loseHp(0.5);
					player.recover(0.5);
					};
				},
				ai:{
					order:12,
					result:{
						target:function(player,target){
							if(player.hp<player.maxHp&&target.abnormalState.ALX_burn>0) return -1;
							return ;
						},
					},
				},
			},
			"ALX_tianjinmiejie":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_tianjinmiejie'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='common';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.recover(result.num*0.25);
							if(target.abnormalState.ALX_burn>0) player.changeHuDun(result.num*0.25);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_nanfangtaiji":{
				nobracket:true,
				group:["ALX_nanfangtaiji_damaged","ALX_nanfangtaiji_burn"],
				subSkill:{
					"damaged":{
						trigger:{
							player:"damageEnd",
						},
						forced:true,
						filter:function (event,player){
							return Math.random()<=0.7&&event.source;
						},
						content:function (){
							trigger.source.gainAbnormalState(4,'burn');
						},
					},
					"burn":{
						trigger:{
							global:"loseHpEnd",
						},
						forced:true,
						filter:function (event,player){
							return event.type=='burn';
						},
						content:function (){
							player.changeAbility(200,'attackC');
						},
					},
				},
			},
			"ALX_longzhiyao":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_longzhiyao'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					target.clearUseAbilityRank();
					player.changePersistentSkill(2,'ALX_keepAbilityRank');
					player.changePersistentSkill(2,'ALX_longzhiyao');
				},
				ai:{
					order:12,
					result:{
						target:function(player,target){
							if(player.hp<player.maxHp) return -1;
							return ;
						},
					},
				},
			},
			"_ALX_longzhiyao":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_longzhiyao>0;
				},
				content:function (){
					player.recover((player.maxHp-player.hp)*0.3);
				},
			},
			"ALX_longquanchuxian":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_longquanchuxian'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='common';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
						var num=0.2;
						for(var i in target.abnormalState){
						num+=0.1;
						};
						if(Math.random()<=num) player.changeAllAbilityRank();
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_hunluanzhifeng":{
				nobracket:true,
				trigger:{
					player:"phaseAfter",
				},
				forced:true,
				filter:function (event,player){
					return Math.random()<=0.5;
				},
				content:function (){
					player.randomGetPlayer().gainAbnormalState(4,lib.ALX_abnormalState.randomGet());
				},
			},
			"ALX_shenghenzhixin":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_shenghenzhixin'+'_pp']>0;
				},
				content:function(){
					var num=0.4;
					if(player.persistentSkill.ALX_resistance_ALX_shenghenzhixin&&player.persistentSkill.ALX_resistance_ALX_shenghenzhixin[1]>0) num=0;
					player.changePersistentSkill(0,[num,4],'ALX_resistance_ALX_shenghenzhixin');
					player.changePersistentSkill(4,'ALX_shenghenzhixin');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.persistentSkill.ALX_shenghenzhixin==undefined) return 1;
						},
					},
				},
			},
			"_ALX_shenghenzhixin":{
				trigger:{
					player:"damageEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_shenghenzhixin>0;
				},
				content:function (){
					player.recoverAbilityRank();
					player.recover(0.5);
				},
			},
			"_ALX_shenghenzhixin1":{
				trigger:{
					global:"useSkillBegin",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_shenghenzhixin>0&&
					player.getAbility().speed-event.player.getAbility().speed>100&&
					lib.skill[event.skill].ALX_skill_type!=undefined&&
					lib.skill[event.skill].ALX_skill_type.contains('ALX_attribute');
				},
				content:function (){
					trigger.skill='ALX_none';
					trigger.player.addTempSkill('ALX_usedSkill',{player:'phaseEnd'});
				},
			},
			"ALX_duohunzhiying":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_duohunzhiying'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='common';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var num=0.3;
							if(player.persistentSkill.ALX_duohunzhiying&&player.persistentSkill.ALX_duohunzhiying[1]>0){
								num+=player.persistentSkill.ALX_duohunzhiying[0];
							};
							if(target.hp<num){
								player.fastKill(target);
								player.changePersistentSkill('ALX_duohunzhiying');
							}else{
								var num=99999;
								if(player.persistentSkill.ALX_duohunzhiying&&player.persistentSkill.ALX_duohunzhiying[1]>0) num=0;
								player.changePersistentSkill(0,[0.3,num],'ALX_duohunzhiying','str_的【夺魂之影】斩杀能力提升0.3',true);
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_heiyiwangSkill":{
				nobracket:true,
				trigger:{
					player:"useSkillEnd",
				},
				forced:true,
				filter:function (event,player){
					return lib.skill[event.skill].ALX_skill_type!=undefined;
				},
				content:function (){
					if(lib.skill[trigger.skill].ALX_skill_type.contains('ALX_attribute')){
						player.changeAbility(300,'attackC');
					}else{
						player.changeAbility(300,'speed');
					};
				},
			},
			"ALX_shenjihunbao":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_shenjihunbao'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					player.recover(player.maxHp*0.25);
					target.gainAbnormalState(6,'burn');
					player.changePersistentSkill(6,'ALX_shenjihunbao');
				},
				ai:{
					order:12,
					result:{
						target:function(player,target){
							if(player.hp<player.maxHp) return -1;
							return ;
						},
					},
				},
			},
			"_ALX_shenjihunbao":{
				trigger:{
					global:"loseHpEnd",
				},
				forced:true,
				filter:function (event,player){
					return event.type=='burn'&&player.persistentSkill.ALX_shenjihunbao>0;
				},
				content:function (){
					player.recover(trigger.num*1.2);
				},
			},
			"ALX_longhunbaoshi":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_longhunbaoshi'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='common';
					damage.hit=true;
					damage.critRate=0.3;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(Math.random()<=0.4) player.recoverAbilityRank();
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_yandilongbao":{
				nobracket:true,
				trigger:{
					player:"phaseAfter",
				},
				forced:true,
				filter:function (event,player){
					return Math.random()<=0.4;
				},
				content:function (){
					if(Math.random()<=0.5){
						player.changeAbilityRank(1,'attackC');
					}else{
						player.changeAbilityRank(1,'speed');
					};
				},
			},
			"ALX_xuegongzi":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_xuegongzi'+'_pp']>0;
				},
				content:function(){
					player.changePersistentSkill(3,'ALX_xuegongzi');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.hp<player.maxHp) return 1;
							return ;
						},
					},
				},
			},
			"_ALX_xuegongzi":{
				trigger:{
					global:"damageAfter",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_xuegongzi>0;
				},
				content:function (){
					player.recover(trigger.num*0.4);
				},
			},
			"_ALX_xuegongzi1":{
				trigger:{
					player:"recoverEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_xuegongzi>0;
				},
				content:function (){
					player.changeAbilityRank(1,'defenseC');
					player.changeAbilityRank(1,'defenseE');
				},
			},
			"ALX_chaofanguizong":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_chaofanguizong'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(1000);
					damage.type='common';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(player.storage.ALX_chaofanguizong==undefined) player.storage.ALX_chaofanguizong=0;
							player.storage.ALX_chaofanguizong++;
							if(player.storage.ALX_chaofanguizong>=2){
								var num=(player.maxHp-player.hp)*0.25;
								target.loseHp(num);
								player.recover(num);
								delete player.storage.ALX_chaofanguizong;
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_fodaomosanjue":{
				nobracket:true,
				trigger:{
					player:"phaseAfter",
				},
				forced:true,
				priority:-Infinity,
				content:function (){
					var list=['fo','dao','mo'];
					var pattern=list.randomGet();
					var str='';
					if(pattern=='fo') str='佛';
					if(pattern=='dao') str='道';
					if(pattern=='mo') str='魔';
					player.storage.ALX_fodaomosanjue=pattern;
					game.log(player,'进入',str,'模式');
					if(pattern=='fo') player.changePersistentSkill(1,'ALX_fodaomosanjue');
					if(pattern=='dao') player.changePersistentSkill(0,[0.4,1],'ALX_resistance_ALX_fodaomosanjue');
					if(pattern=='mo') player.changePersistentSkill(1,'ALX_fodaomosanjue');
				},
			},
			"_ALX_fodaomosanjue":{
				trigger:{
					source:"damageAfter",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_fodaomosanjue>0&&
					player.storage.ALX_fodaomosanjue=='mo'&&
					event.player.hp<0.8;
				},
				content:function (){
					player.fastKill(trigger.player);
				},
			},
			"_ALX_fodaomosanjue1":{
				trigger:{
					player:"changeAbilityRankEnd",
				},
				forced:true,
				filter:function (event,player){
					return event.num<0&&
					player.persistentSkill.ALX_fodaomosanjue>0&&
					player.storage.ALX_fodaomosanjue=='fo';
				},
				content:function (){
					if(player.storage.ALX_fodaomosanjue1==undefined) player.storage.ALX_fodaomosanjue1={};
					player.storage.ALX_fodaomosanjue1[trigger.skill]=trigger.num;
				},
			},
			"_ALX_fodaomosanjue2":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_fodaomosanjue>0&&
					player.storage.ALX_fodaomosanjue=='fo'&&
					player.storage.ALX_fodaomosanjue1!=undefined;
				},
				content:function (){
					var A=player.storage.ALX_fodaomosanjue1;
					for(var i in A){
						player.changeAbilityRank(-A[i]*2,i);
					};
					delete player.storage.ALX_fodaomosanjue1;
				},
			},
			"ALX_mumowushi":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_mumowushi'+'_pp']>0;
				},
				content:function(){
					player.changePersistentSkill(5,'disableEffect');
					player.changePersistentSkill(5,'ALX_mumowushi');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.persistentSkill.ALX_mumowushi==undefined) return 1;
						},
					},
				},
			},
			"_ALX_mumowushi":{
				trigger:{
					player:"damageBegin",
				},
				forced:true,
				filter:function (event,player){
					return event.source&&
					event.source.group.indexOf('ALX_chaoshumaxi')!=-1&&
					event.type!=undefined&&
					player.persistentSkill.ALX_mumowushi>0;
				},
				content:function (){
					trigger.num=trigger.num*0.3;
				},
			},
			"ALX_dongyehuzhidao":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_dongyehuzhidao'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='common';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
						if(Math.random()<=0.5) target.clearUseAbilityRank(true);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_baiseemo":{
				nobracket:true,
				group:["ALX_baiseemo_attack","ALX_baiseemo_phaseEnd"],
				subSkill:{
					"attack":{
						trigger:{
							source:"damageAfter",
						},
						forced:true,
						filter:function (event,player){
							return !event.player.isDead();
						},
						content:function (){
							player.changeAbility(100,'attackC');
						},
					},
					"phaseEnd":{
						trigger:{
							player:"phaseEnd",
						},
						forced:true,
						content:function (){
							player.recover(player.getAbility().attackC*0.45/1000);
						},
					},
				},
			},
			"ALX_yinzhishalu":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_yinzhishalu'+'_pp']>0;
				},
				content:function(){
					'step 0'
					event.players=[];
					for(var i=0;i<game.players.length;i++){
						var pl=game.players[i];
						if(pl.storage.ALX_qiongcangliuxing!=undefined){
							var num=pl.maxHp*0.15*pl.storage.ALX_qiongcangliuxing;
							pl.loseHp(num);
							player.recover(num);
							event.players.push(pl);
							delete pl.storage.ALX_qiongcangliuxing;
							game.log(player,'引爆了',pl,'身上的银月之箭');
						};
					};
					'step 1'
					for(var i=0;i<event.players.length;i++){
						var pl=event.players[i];
						if(pl.isDead()) player.changeAbility(300,'attackE');
					};
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.hp<player.maxHp&&game.countPlayer(function(current){return current.storage.ALX_qiongcangliuxing!=undefined&&get.attitude(player,current)<0})>0) return 1;
						},
					},
				},
			},
			"ALX_qiongcangliuxing":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_qiongcangliuxing'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='exceptional';
					damage.hit=true;
					damage.critRate=0.25;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(target.storage.ALX_qiongcangliuxing==undefined) target.storage.ALX_qiongcangliuxing=0;
							target.storage.ALX_qiongcangliuxing++;
							game.log(target,'被银月之箭射中了');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_heiyibailingwang":{
				nobracket:true,
				trigger:{
					player:"phaseAfter",
				},
				forced:true,
				filter:function (event,player){
					return game.countPlayer(function(current){return current.storage.ALX_qiongcangliuxing!=undefined})>0;
				},
				content:function (){
					var num=0.4*game.countPlayer(function(current){return current.storage.ALX_qiongcangliuxing!=undefined});
					var num1=3*game.countPlayer(function(current){return current.storage.ALX_qiongcangliuxing!=undefined});
					var list=lib.ALX_ability;
					list.remove('attackC');
					for(var i=0;i<num1;i++){
						player.changeAbilityRank(1,list.randomGet());
					};
					player.recover(num);
				},
			},
			"ALX_shengtangzhimen":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_shengtangzhimen'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					target.clearPersistentSkill();
					player.changePersistentSkill(3,'ALX_shengtangzhimen');
					if(target.hp>2){
						var num=0.5;
						if(player.persistentSkill.ALX_resistance_ALX_shengtangzhimen&&player.persistentSkill.ALX_resistance_ALX_shengtangzhimen[1]>0) num=0;
						player.changePersistentSkill(0,[num,3],'ALX_resistance_ALX_shengtangzhimen');
					};
				},
				ai:{
					order:12,
					result:{
						target:function(player,target){
							if(player.hp<2) return -1;
							return ;
						},
					},
				},
			},
			"_ALX_shengtangzhimen":{
				trigger:{
					player:"damageAfter",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_shengtangzhimen>0;
				},
				content:function (){
					player.storage.ALX_shengtangzhimen=true;
				},
			},
			"_ALX_shengtangzhimen1":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.storage.ALX_shengtangzhimen==true;
				},
				content:function (){
					player.recover(0.5);
					delete player.storage.ALX_shengtangzhimen
				},
			},
			"ALX_tiantangzhijian":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_tiantangzhijian'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='exceptional';
					damage.hit=true;
					if(Math.random()<=0.4) damage.ignore='defenseES1';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var num=result.num-0.5;
							if(num>0) player.recover(num);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_shengxuetianwei":{
				nobracket:true,
				trigger:{
					player:"changeHp",
				},
				forced:true,
				filter:function (event,player){
					return (player.storage.ALX_shengxuetianwei==undefined||
					player.storage.ALX_shengxuetianwei<10)&&event.num<=-0.2;
				},
				content:function (){
					'step 0'
					event.num=0;
					'step 1'
					if(player.storage.ALX_shengxuetianwei==undefined) player.storage.ALX_shengxuetianwei=0;
					if(player.storage.ALX_shengxuetianwei<10){
						player.changeAbility(100,'attackE');
						player.storage.ALX_shengxuetianwei++
					};
					event.num-=0.2;
					if(event.num>trigger.num) event.redo();
				},
			},
			"ALX_haoyuanpo":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_haoyuanpo'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					for(var i=0;i<game.players.length;i++){
						game.players[i].clearUseAbilityRank();
					};
					target.changeAbilityRank(-2,'speed');
				},
				ai:{
					order:5,
					result:{
						target:-1,
					},
				},
			},
			"ALX_tianlongtuxi":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_tianlongtuxi'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='common';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var num=player.getAbility().attackC*0.1/200;
							target.loseHp(num);
							if(player.hp<target.hp) player.recover(num*2);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_xifangtaichen":{
				nobracket:true,
				trigger:{
					player:"damageAfter",
				},
				forced:true,
				filter:function (event,player){
					return Math.random()<0.5&&event.source;
				},
				content:function (){
					trigger.source.changeAbilityRank(-2,'defenseC');
					trigger.source.changeAbilityRank(-2,'defenseE');
				},
			},
			"ALX_shenjihunyao":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_shenjihunyao'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					target.clearUseAbilityRank();
					player.recover(player.maxHp*0.3);
					var num=0.3;
					if(player.persistentSkill.ALX_resistance_ALX_shenjihunyao&&player.persistentSkill.ALX_resistance_ALX_shenjihunyao[1]>0) num=0;
					player.changePersistentSkill(0,[num,1],'ALX_resistance_ALX_shenjihunyao','phaseBefore');
				},
				ai:{
					order:12,
					result:{
						target:function(player,target){
							if(player.hp<player.maxHp) return -1;
							return ;
						},
					},
				},
			},
			"ALX_longhunyaoshi":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_longhunyaoshi'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='common';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(Math.random()<=0.36) target.changeAbilityRank(-2,'defenseC');
							var num=result.num-0.5;
							if(num>0) player.recover(num);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_guangdilongyao":{
				nobracket:true,
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.hp<player.maxHp/2&&Math.random()<0.5;
				},
				content:function (){
					player.changeAllAbilityRank();
				},
			},
			"ALX_bingfengwangzuo":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_bingfengwangzuo'+'_pp']>0;
				},
				content:function(){
					player.recover(0.7);
					var num=0.7;
					if(player.persistentSkill.ALX_resistance_ALX_bingfengwangzuo&&player.persistentSkill.ALX_resistance_ALX_bingfengwangzuo[1]>0) num=0;
					player.changePersistentSkill(0,[num,2],'ALX_resistance_ALX_bingfengwangzuo');
					player.changePersistentSkill(2,'ALX_bingfengwangzuo');
					player.changePersistentSkill(2,'ALX_canntAct');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.hp<player.maxHp-1) return 1;
						},
					},
				},
			},
			"_ALX_bingfengwangzuo":{
				trigger:{
					player:"phaseAfter",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_bingfengwangzuo>0;
				},
				content:function (){
					var list=lib.ALX_ability;
					list.remove('attackC');
					for(var i=0;i<4;i++){
						player.changeAbilityRank(1,list.randomGet());
					};
				},
			},
			"ALX_linliehandong":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_linliehandong'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='exceptional';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(target.abnormalState.ALX_frostbite>0){
								target.loseAbnormalState('ALX_frostbite');
								player.changeAbility(200,'attackE');
							};
							if(Math.random()<=0.8) target.gainAbnormalState(4,'frostbite');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_hanshuangaishang":{
				nobracket:true,
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				content:function (){
					'step 0'
					event.player1=player;
					event.player=player.randomGetPlayer();
					event.num=event.player.hp*0.3;
					event.player.loseHp(event.num);
					'step 1'
					if(event.player.abnormalState.ALX_frostbite>0) event.player1.recover(event.num);
				},
			},
			"ALX_fanxingjishan":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_fanxingjishan'+'_pp']>0;
				},
				content:function(){
					var list=['attackC','speed'];
					for(var i=0;i<3;i++){
						player.changeAbilityRank(1,list.randomGet());
					};
					player.changePersistentSkill(2,'ALX_fanxingjishan');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.abilityRank.attackC<=1) return 1;
						},
					},
				},
			},
			"_ALX_fanxingjishan":{
				trigger:{
					player:"damageBegin",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_fanxingjishan>0;
				},
				content:function (){
					trigger=trigger*0.5;
				},
			},
			"ALX_lvrenbaoji":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_lvrenbaoji'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='common';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(target.abnormalState.ALX_poisoning>0){
								var num=result.num*0.35
								target.loseHp(num);
								player.recover(num);
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_yixianzongmiying":{
				nobracket:true,
				group:["ALX_yixianzongmiying_damage","ALX_yixianzongmiying_poison"],
				subSkill:{
					"damage":{
						trigger:{
							player:"damageAfter",
						},
						forced:true,
						filter:function (event,player){
							return Math.random()<=0.6&&event.source;
						},
						content:function (){
							trigger.source.gainAbnormalState(3,'poisoning');
						},
					},
					"poison":{
						trigger:{
							global:"loseHpEnd",
						},
						forced:true,
						filter:function (event,player){
							return event.type=='poisoning';
						},
						content:function (){
							player.recover(trigger.num);
						},
					},
				},
			},
			"ALX_sadanzhihuo":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_sadanzhihuo'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					player.changePersistentSkill(3,'ALX_sadanzhihuo');
					player.storage.ALX_sadanzhihuo=target;
				},
				ai:{
					order:12,
					result:{
						target:function(player,target){
							if(player.hp<player.maxHp&&player.persistentSkill.ALX_sadanzhihuo==undefined) return -1;
							return ;
						},
					},
				},
			},
			"_ALX_sadanzhihuo":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_sadanzhihuo>0;
				},
				content:function (){
					var target=player.storage.ALX_sadanzhihuo;
					var num=target.maxHp*0.15;
					if(player.storage.ALX_sadanzhihuo1!=undefined){
						num=num*2;
						delete player.storage.ALX_sadanzhihuo1;
					};
					target.loseHp(num);
					player.recover(num);
				},
			},
			"_ALX_sadanzhihuo1":{
				trigger:{
					global:"useSkillEnd",
				},
				forced:true,
				filter:function (event,player){
					return lib.skill[event.skill].ALX_skill_type!=undefined&&
					lib.skill[event.skill].ALX_skill_type.contains('ALX_attribute')&&
					player.persistentSkill.ALX_sadanzhihuo>0&&
					event.player==player.storage.ALX_sadanzhihuo;
				},
				content:function (){
					player.storage.ALX_sadanzhihuo1=true;
				},
			},
			"ALX_yanxinglingdao":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_yanxinglingdao'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='common';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var list=lib.ALX_ability;
							list.remove('attackE');
							list.remove('dodge');
							list.remove('hit');
							player.changeAbilityRank(1,list.randomGet());
							if(target.storage.ALX_heiyilanyanwang!=undefined) player.fastKill(target);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_heiyilanyanwang":{
				nobracket:true,
				trigger:{
					player:"dyingBegin",
				},
				forced:true,
				filter:function (event,player){
					return Math.random()<0.3;
				},
				content:function (){
					trigger.untrigger();
					trigger.finish();
					player.hp=1;
					player.update();
					if(trigger.source){
						trigger.source.storage.ALX_heiyilanyanwang=true;
						game.log(trigger.source,'获得蓝焰之印');
					};
				},
			},
			"ALX_bujuezhanyi":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_bujuezhanyi'+'_pp']>0;
				},
				content:function(){
					for(var i=0;i<game.players.length;i++){
						var pl=game.players[i];
						if(pl.group.indexOf('ALX_chaoshuixi')!=-1||pl.group.indexOf('ALX_chaodianxi')!=-1){
							var num=0.35;
							if(pl.persistentSkill.ALX_attackRate_ALX_bujuezhanyi&&pl.persistentSkill.ALX_attackRate_ALX_bujuezhanyi[1]>0) num=0;
							pl.changePersistentSkill(0,[num,3],'ALX_attackRate_ALX_bujuezhanyi');
							var num1=0.35;
							if(pl.persistentSkill.ALX_resistance_ALX_bujuezhanyi&&pl.persistentSkill.ALX_resistance_ALX_bujuezhanyi[1]>0) num1=0;
							pl.changePersistentSkill(0,[num1,3],'ALX_resistance_ALX_bujuezhanyi');
						};
					};
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.persistentSkill.ALX_resistance_ALX_bujuezhanyi==undefined) return 1;
						},
					},
				},
			},
			"ALX_yangtaowanji":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_yangtaowanji'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='exceptional';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(Math.random()<=0.24) player.recover(result.num);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_yijiliutianmo":{
				nobracket:true,
				trigger:{
					player:"damageBegin",
				},
				forced:true,
				filter:function (event,player){
					return event.source&&player.hp<1.8&&Math.random()<=0.5;
				},
				content:function (){
					trigger.source.gainAbnormalState();
				},
			},
			"ALX_hongleizhanjia":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_hongleizhanjia'+'_pp']>0&&
					player.persistentSkill.ALX_hongleizhanjia==undefined;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					player.changeAbilityRank(2,'defenseC');
					player.changeAbilityRank(2,'defenseE');
					player.changePersistentSkill(3,'ALX_hongleizhanjia');
					if(target.abnormalState.ALX_paralysis>0){
						target.loseAbnormalState('ALX_paralysis');
						player.recover(0.5);
					};
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.abilityRank.defenseC<2||player.abilityRank.defenseE<2) return 1;
						},
					},
				},
			},
			"_ALX_hongleizhanjia":{
				trigger:{
					player:"changePersistentSkillEnd",
				},
				forced:true,
				filter:function (event,player){
					return event.skill=='ALX_hongleizhanjia'&&event.num==undefined;
				},
				content:function (){
					player.changeAbilityRank(-2,'defenseC');
					player.changeAbilityRank(-2,'defenseE');
				},
			},
			"ALX_leijieliujie":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_leijieliujie'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					event.num1=0;
					event.num=1;
					if(Math.random()<=0.16) event.num++;
					'step 1'
					var damage=target.damage(800);
					damage.type='common';
					damage.hit=true;
					'step 2'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					event.num1++
					if(event.num1<event.num) event.goto(1);
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_yicidianlieshen":{
				nobracket:true,
				trigger:{
					player:"damageBegin",
				},
				forced:true,
				filter:function (event,player){
					return event.source&&player.hp<1.8&&Math.random()<=0.7;
				},
				content:function (){
					trigger.source.gainAbnormalState(5,'paralysis');
				},
			},
			"ALX_sanjiehunzhuan":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_sanjiehunzhuan'+'_pp']>0;
				},
				content:function(){
					if(player.persistentSkill.ALX_resistance_ALX_sanjiehunzhuan!=undefined) player.changePersistentSkill('ALX_resistance_ALX_sanjiehunzhuan');
					if(player.storage.ALX_sanjiehunzhuan1==true){
						player.changeAbility(-700,'attackC');
						delete player.storage.ALX_sanjiehunzhuan1;
					};
					player.changePersistentSkill(99999,'ALX_sanjiehunzhuan',true);
					var list=['ren','shen','mo'];
					var pattern=list.randomGet();
					var str='';
					if(pattern=='ren') str='人魂';
					if(pattern=='shen') str='神魂';
					if(pattern=='mo') str='魔魂';
					player.storage.ALX_sanjiehunzhuan=pattern;
					game.log(player,'进入',str,'状态');
					if(pattern=='ren') player.changePersistentSkill(0,[0.5,99999],'ALX_resistance_ALX_sanjiehunzhuan',true);
					if(pattern=='shen'){
						player.changeAbility(700,'attackC');
						player.storage.ALX_sanjiehunzhuan1=true;
					};
					if(player.hasSkill('ALX_heiyizihunwang')){
						player.recover(0.6);
						player.changeAbilityRank(1,lib.ALX_ability.randomGet());
					};
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.persistentSkill.ALX_sanjiehunzhuan==undefined) return 1;
						},
					},
				},
			},
			"_ALX_sanjiehunzhuan":{
				trigger:{
					player:"changeAbilityRankBegin",
				},
				forced:true,
				filter:function (event,player){
					return event.num<0&&
					event.ignore!=true&&
					player.persistentSkill.ALX_sanjiehunzhuan>0&&
					player.storage.ALX_sanjiehunzhuan=='ren';
				},
				content:function (){
					trigger.cancel();
					game.log(player,'保护属性效果触发');
					player.popup('护属');
				},
			},
			"_ALX_sanjiehunzhuan1":{
				trigger:{
					player:"gainAbnormalStateBegin",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_sanjiehunzhuan>0&&
					player.storage.ALX_sanjiehunzhuan=='shen';
				},
				content:function (){
					trigger.cancel();
					game.log(player,'免疫异常状态效果触发');
					player.popup('免疫');
				},
			},
			"_ALX_sanjiehunzhuan2":{
				trigger:{
					source:"damageEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_sanjiehunzhuan>0&&
					player.storage.ALX_sanjiehunzhuan=='mo';
				},
				content:function (){
					trigger.player.changeAbilityRank(-1,'defenseC');
					if(Math.random()<=0.5) trigger.player.gainAbnormalState(3,'mad');
				},
			},
			"ALX_hunduantianzhao":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_hunduantianzhao'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='common';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(Math.random()<=0.5) target.changeAbilityRank(-1,'speed');
							player.recover(result.num*0.15);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_heiyizihunwang":{
				nobracket:true,
			},
			"ALX_shenshengbihu":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:3,
				filter:function (event,player){
					return player.storage['ALX_shenshengbihu'+'_pp']>0;
				},
				content:function(){
					player.recover(player.maxHp*0.35);
					player.changePersistentSkill(2,'disableEffect');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.hp<player.maxHp-1) return 1;
						},
					},
				},
			},
			"ALX_juewangtunshi":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_juewangtunshi'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='common';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							target.gainAbnormalState(3,'shackles');
							if(Math.random()<=0.7){
								if(Math.random()<=0.5){
									target.changeAbilityRank(-1,'defenseC');
									target.changeAbilityRank(-1,'defenseE');
								}else{
									target.changeAbilityRank(-1,'attackC');
									target.changeAbilityRank(-1,'attackE');
								};
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_wujinzhilang":{
				nobracket:true,
				trigger:{
					player:"damageEnd",
				},
				forced:true,
				filter:function (event,player){
					return event.source&&event.num>=player.maxHp*0.08;
				},
				content:function (){
					'step 0'
					event.num=0;
					'step 1'
					trigger.source.changeAllPP(-1);
					player.changeAllPP();
					event.num+=player.maxHp*0.08;
					if(event.num<trigger.num) event.redo();
				},
			},
			"ALX_bojueshengxue":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_bojueshengxue'+'_pp']>0;
				},
				content:function(){
					var num=0.4;
					if(player.persistentSkill.ALX_resistance_ALX_bojueshengxue&&player.persistentSkill.ALX_resistance_ALX_bojueshengxue[1]>0) num=0;
					player.changePersistentSkill(0,[num,3],'ALX_resistance_ALX_bojueshengxue');
					player.changePersistentSkill(3,'ALX_bojueshengxue');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.persistentSkill.ALX_bojueshengxue==undefined) return 1;
						},
					},
				},
			},
			"_ALX_bojueshengxue":{
				trigger:{
					player:"damageAfter",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_bojueshengxue>0&&event.num>0.7;
				},
				content:function (){
					var list=lib.ALX_ability;
					list.remove('attackC');
					for(var i=0;i<5;i++){
						player.changeAbilityRank(1,list.randomGet());
					};
				},
			},
			"ALX_wangluncaijue":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_wangluncaijue'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='exceptional';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var num=0.1;
							if(player.persistentSkill.ALX_wangluncaijue&&player.persistentSkill.ALX_wangluncaijue[1]>0){
								num+=player.persistentSkill.ALX_wangluncaijue[0];
							};
							if(target.hp<num){
								player.fastKill(target);
								player.changePersistentSkill('ALX_wangluncaijue');
							}else{
								var num=99999;
								if(player.persistentSkill.ALX_wangluncaijue&&player.persistentSkill.ALX_wangluncaijue[1]>0) num=0;
								player.changePersistentSkill(0,[0.1,num],'ALX_wangluncaijue','str_的【王轮裁决】斩杀能力提升0.1',true);
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_heiyichitongwang":{
				nobracket:true,
				group:["ALX_heiyichitongwang_attack","ALX_heiyichitongwang_recover"],
				subSkill:{
					"attack":{
						trigger:{
							source:"damageAfter",
						},
						forced:true,
						filter:function (event,player){
							return Math.random()<=0.7;
						},
						content:function (){
							if(player.storage.ALX_heiyichitongwang==undefined) player.storage.ALX_heiyichitongwang=0;
							player.storage.ALX_heiyichitongwang++;
							game.log(player,'获得1层赤瞳血印');
						},
					},
					"recover":{
						trigger:{
							player:"changeHp",
						},
						forced:true,
						filter:function (event,player){
							return player.storage.ALX_heiyichitongwang>0&&player.hp<player.maxHp/2;
						},
						content:function (){
							player.storage.ALX_heiyichitongwang--;
							game.log(player,'消耗1层赤瞳之印');
							player.recover(player.maxHp*0.4);
							player.changePersistentSkill(2,'ALX_keepAbilityRank');
						},
					},
				},
			},
			"ALX_feisuozhanyi":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_feisuozhanyi'+'_pp']>0;
				},
				content:function(){
					player.changeAbilityRank(2,'speed');
					player.changePersistentSkill(2,'ALX_feisuozhanyi');
				},
				ai:{
					order:5,
					result:{
						player:1,
					},
				},
			},
			"ALX_chaolizifengbao":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_chaolizifengbao'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var num=800;
					if(player.persistentSkill.ALX_feisuozhanyi>0) num+=200;
					var damage=target.damage(num);
					damage.type='common';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(result.num<0.8) target.changeAbilityRank(-1,'defenseC');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_yijisutineng":{
				nobracket:true,
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				content:function (){
					var num=player.abilityRank.speed*0.05;
					if(num<0) num=0
					player.recover(player.getAbility().speed*0.3/1000+num);
				},
			},
			"ALX_huanhuaxutong":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_huanhuaxutong'+'_pp']>0;
				},
				content:function(){
					player.changePersistentSkill(3,'ALX_huanhuaxutong');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.persistentSkill.ALX_huanhuaxutong==undefined) return 1;
						},
					},
				},
			},
			"_ALX_huanhuaxutong":{
				trigger:{
					player:"damageBefore",
				},
				forced:true,
				filter:function (event,player){
					return Math.random()<=0.35&&player.persistentSkill.ALX_huanhuaxutong>0;
				},
				content:function (){
					trigger.untrigger();
					trigger.finish();
					trigger.result.invalid=true;
					player.$damage();
					game.log(player,'免疫了伤害');
					player.popup('<img src='+lib.assetURL+"extension/扩展ol/invalid.png"+' width="52" height="27">');
				},
			},
			"ALX_tongmengqitan":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_tongmengqitan'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var num=800;
					var damage=target.damage(num);
					damage.type='exceptional';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(Math.random()<0.5){
								if(Math.random()<0.5){
									target.gainAbnormalState(4,'shackles');
								}else{
									target.gainAbnormalState(4,'mad');
								};
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_yijileshengling":{
				nobracket:true,
				group:["ALX_yijileshengling_damage","ALX_yijileshengling_recover"],
				subSkill:{
					"damage":{
						trigger:{
							player:"damageEnd",
						},
						forced:true,
						content:function (){
							player.storage.ALX_yijileshengling=true;
						},
					},
					"recover":{
						trigger:{
							player:"phaseEnd",
						},
						forced:true,
						content:function (){
							var num=0.7;
							if(player.storage.ALX_yijileshengling!=undefined){
								num=num/2;
								delete player.storage.ALX_yijileshengling;
							};
							player.recover(num);
						},
					},
				},
			},
			"ALX_tiannuguanghui":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_tiannuguanghui'+'_pp']>0;
				},
				content:function(){
					player.changeHuDun(1);
					player.changePersistentSkill(2,'ALX_tiannuguanghui');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.hp<player.maxHp-1) return 1;
						},
					},
				},
			},
			"_ALX_tiannuguanghui":{
				trigger:{
					player:"phaseBegin",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_huDun&&
					player.persistentSkill.ALX_huDun[1]>0&&
					player.persistentSkill.ALX_tiannuguanghui>0;
				},
				content:function (){
					player.recover(player.persistentSkill.ALX_huDun[0]);
					player.changePersistentSkill('ALX_huDun');
					player.changePersistentSkill('ALX_tiannuguanghui');
				},
			},
			"ALX_shenmiaoshu":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_shenmiaoshu'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var num=800;
					var damage=target.damage(num);
					damage.type='exceptional';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(Math.random()<=0.5){
								target.changeAbilityRank(-1,'defenseE');
								target.changeAbilityRank(-1,'speed');
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_yixinlingxishou":{
				nobracket:true,
				trigger:{
					player:"phaseAfter",
				},
				forced:true,
				content:function (){
					var num=[-1,-2].randomGet();
					var list=lib.ALX_ability;
					list.remove('attackC');
					var ability=list.randomGet();
					player.randomGetPlayer().changeAbilityRank(num,ability);
					player.changeAbilityRank(-num,ability);
				},
			},
			"ALX_yanyubilei":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_yanyubilei'+'_pp']>0;
				},
				content:function(){
					var num=0.35;
					if(player.storage.ALX_huoyandediyu>0){
						num=num*2;
						player.storage.ALX_huoyandediyu--;
						game.log(player,'消耗1层焰语印记');
					};
					player.recover(player.maxHp*num);
					if(player.persistentSkill.ALX_resistance_ALX_yanyubilei&&player.persistentSkill.ALX_resistance_ALX_yanyubilei[1]>0) num=0;
					player.changePersistentSkill(0,[num,2],'ALX_resistance_ALX_yanyubilei');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.hp<player.maxHp-1) return 1;
						},
					},
				},
			},
			"ALX_mahoushaojiu":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_mahoushaojiu'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var num=800;
					var damage=target.damage(num);
					damage.type='exceptional';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(target.hp<player.hp*0.2) player.fastKill(target);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_huoyandediyu":{
				nobracket:true,
				trigger:{
					player:"phaseBegin",
				},
				forced:true,
				filter:function (event,player){
					return player.hp<player.maxHp*0.35;
				},
				content:function (){
					if(player.storage.ALX_huoyandediyu==undefined) player.storage.ALX_huoyandediyu=0;
					player.storage.ALX_huoyandediyu++;
					game.log(player,'获得1层焰语印记');
				},
			},
			"ALX_huaguangqingshi":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_huaguangqingshi'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					var num=0.4;
					if(player.persistentSkill.ALX_resistance_ALX_huaguangqingshi&&player.persistentSkill.ALX_resistance_ALX_huaguangqingshi[1]>0) num=0;
					player.changePersistentSkill(0,[num,2],'ALX_resistance_ALX_huaguangqingshi');
					target.changeAbilityRank([-1,-2].randomGet(),'defenseE');
					player.changeAbilityRank([-1,-2].randomGet(),'attackE');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.abilityRank.attackE<1) return 1;
						},
					},
				},
			},
			"ALX_fuguangmeiying":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_fuguangmeiying'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='exceptional';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(result.num>0.8) player.recover((player.maxHp-player.hp)*0.4);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_yanguangliusu":{
				nobracket:true,
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return Math.random()<=0.6;
				},
				content:function (){
					player.inversionUnuseAbilityRank();
				},
			},
			"ALX_mingkongwujin":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_mingkongwujin'+'_pp']>0;
				},
				content:function(){
					player.recover(player.maxHp*0.45);
					player.changePersistentSkill(3,'ALX_keepAbilityRank');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.hp<player.maxHp-1) return 1;
						},
					},
				},
			},
			"ALX_guimingjianfa":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_guimingjianfa'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var num=800;
					var damage=target.damage(num);
					damage.type='common';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(player.hp==player.maxHp){
								if(Math.random()<=0.45){
									target.changeAbilityRank(-1,'attackC');
									target.changeAbilityRank(-1,'attackE');
								};
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_baiguiyujian":{
				nobracket:true,
				trigger:{
					player:"damageAfter",
				},
				forced:true,
				filter:function (event,player){
					return event.source&&Math.random()<=0.25;
				},
				content:function (){
					trigger.source.gainAbnormalState(2,'damnation');
				},
			},
			"ALX_shengmingzhige":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_shengmingzhige'+'_pp']>0;
				},
				content:function(){
					player.recover(player.maxHp*0.4);
					if(Math.random()<=0.6){
						player.changeAbilityRank(1,'defenseC');
						player.changeAbilityRank(1,'defenseE');
					};
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.hp<player.maxHp-1) return 1;
						},
					},
				},
			},
			"ALX_dadikuangxiao":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_dadikuangxiao'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var num=800;
					if(player.hasSkill('ALX_shengsiwuji')) num+=(player.maxHp-player.hp)/player.maxHp*200;
					var damage=target.damage(num);
					damage.type='exceptional';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var num=result.num*0.3;
							num=num*1000;
							num=Math.round(num);
							num=num/1000;
							player.recover(num);
							if(Math.random()<=0.25){
								player.changeHuDun(num);
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_shengsiwuji":{
				nobracket:true,
			},
			"ALX_shenjihunpo":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_shenjihunpo'+'_pp']>0;
				},
				content:function(){
					player.recover(player.maxHp*0.35);
					player.recoverAbilityRank();
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.hp<player.maxHp-1) return 1;
						},
					},
				},
			},
			"ALX_longhunposhi":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_longhunposhi'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='common';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.recover(result.num*0.4);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_judilongpo":{
				nobracket:true,
				group:["ALX_judilongpo_damage","ALX_judilongpo_recover"],
				subSkill:{
					"damage":{
						trigger:{
							player:"damageEnd",
						},
						forced:true,
						content:function (){
							player.storage.ALX_judilongpo=true;
						},
					},
					"recover":{
						trigger:{
							player:"phaseEnd",
						},
						forced:true,
						filter:function (event,player){
							return player.storage.ALX_judilongpo!=undefined;
						},
						content:function (){
							player.gainMaxHpS(0.5);
							player.recover(0.5);
							delete player.storage.ALX_judilongpo;
						},
					},
				},
			},
			"ALX_canghuaxu":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_canghuaxu'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					player.recover(0.6);
					player.changePersistentSkill(3,'ALX_canghuaxu');
					player.storage.ALX_canghuaxu=target;
					var num=99999;
					if(player.persistentSkill.ALX_resistance_ALX_canghuaxu&&player.persistentSkill.ALX_resistance_ALX_canghuaxu[1]>999) num=0;
					player.changePersistentSkill(0,[0,num],'ALX_resistance_ALX_canghuaxu',true);
					var num1=99999;
					if(target.persistentSkill.ALX_resistance_ALX_canghuaxu&&target.persistentSkill.ALX_resistance_ALX_canghuaxu[1]>999) num1=0;
					target.changePersistentSkill(0,[0,num1],'ALX_resistance_ALX_canghuaxu',true);
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.hp<player.maxHp-1) return 1;
						},
					},
				},
			},
			"_ALX_canghuaxu":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_canghuaxu>0;
				},
				content:function (){
					player.changePersistentSkill(0,[0.2,0],'ALX_resistance_ALX_canghuaxu');
					player.storage.ALX_canghuaxu.changePersistentSkill(0,[-0.2,0],'ALX_resistance_ALX_canghuaxu');
				},
			},
			"ALX_tianduhuaxu":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_tianduhuaxu'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='common';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeAbilityRank(1,'speed');
							if(player.abilityRank.speed>0) target.loseHp(player.abilityRank.speed*0.15);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_dongfangtaixuan":{
				nobracket:true,
				trigger:{
					player:"damageEnd",
				},
				forced:true,
				filter:function (event,player){
					return Math.random()<=0.7;
				},
				content:function (){
					if(player.storage.ALX_dongfangtaixuan==undefined) player.storage.ALX_dongfangtaixuan=0;
					player.storage.ALX_dongfangtaixuan++;
					game.log(player,'获得一个东方太玄印记');
					if(player.storage.ALX_dongfangtaixuan>=4){
						player.changeAllAbilityRank(2);
						delete player.storage.ALX_dongfangtaixuan;
						game.log(player,'的东方太玄印记清空了');
					};
				},
			},
			"ALX_fanyunhaixiao":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_fanyunhaixiao'+'_pp']>0;
				},
				content:function(){
					player.changePersistentSkill(3,'ALX_keepAbilityRank');
					var num=0.2;
					if(player.persistentSkill.ALX_resistance_ALX_fanyunhaixiao&&player.persistentSkill.ALX_resistance_ALX_fanyunhaixiao[1]>0) num=0;
					player.changePersistentSkill(0,[num,3],'ALX_resistance_ALX_fanyunhaixiao',true);
				},
				ai:{
					order:5,
					result:{
						player:1,
					},
				},
			},
			"ALX_longtengfuhai":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_longtengfuhai'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='common';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(Math.random()<=0.4) target.inversionUseAbilityRank();
							player.recover(result.num*0.2);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_donghaixuetong":{
				nobracket:true,
				group:["ALX_donghaixuetong_changeHp","ALX_donghaixuetong_recover"],
				subSkill:{
					"changeHp":{
						trigger:{
							player:"changeHp",
						},
						forced:true,
						filter:function (event,player){
							return player.hp<player.maxHp/2;
						},
						content:function (){
							for(var i=0;i<3;i++){
								player.changeAbilityRank(1,lib.ALX_ability.randomGet());
							};
						},
					},
					"recover":{
						trigger:{
							player:"phaseEnd",
						},
						forced:true,
						content:function (){
							player.recover((player.maxHp-player.hp)*0.35);
						},
					},
				},
			},
			"ALX_shenjihunshan":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_shenjihunshan'+'_pp']>0;
				},
				content:function(){
					player.changePersistentSkill(3,'ALX_immuneToAbnormalState');
					player.changePersistentSkill(2,'ALX_shenjihunshan');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.persistentSkill.ALX_shenjihunshan==undefined) return 1;
						},
					},
				},
			},
			"_ALX_shenjihunshan":{
				trigger:{
					player:"damageBefore",
				},
				forced:true,
				filter:function (event,player){
					return Math.random()<=0.5&&player.persistentSkill.ALX_shenjihunshan>0;
				},
				content:function (){
					trigger.untrigger();
					trigger.finish();
					trigger.result.invalid=true;
					player.$damage();
					game.log(player,'使用闪影抵挡攻击');
					player.popup('<img src='+lib.assetURL+"extension/扩展ol/invalid.png"+' width="52" height="27">');
				},
			},
			"ALX_longhunshanshi":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_longhunshanshi'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(800);
					damage.type='exceptional';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(Math.random()<=0.4) target.gainAbnormalState(4,'mad');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_yingdilongshan":{
				nobracket:true,
				group:["ALX_yingdilongshan_damage","ALX_yingdilongshan_recover"],
				subSkill:{
					"damage":{
						trigger:{
							player:"damageEnd",
						},
						forced:true,
						content:function (){
							player.storage.ALX_yingdilongshan=true;
						},
					},
					"recover":{
						trigger:{
							player:"phaseEnd",
						},
						forced:true,
						filter:function (event,player){
							return player.storage.ALX_yingdilongshan!=true;
						},
						content:function (){
							player.recover(player.maxHp/4);
							delete player.storage.ALX_yingdilongshan;
						},
					},
				},
			},
			"ALX_shenjihunyou":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_shenjihunyou'+'_pp']>0;
				},
				content:function(){
					for(var i=0;i<game.players.length;i++){
						game.players[i].changePersistentSkill(2,'ALX_forcedAbilityRank');
					};
					var num=player.abilityRank.speed*player.maxHp*0.06;
					if(num<0) num=0;
					player.recover(0.3+num);
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.hp<player.maxHp-1) return 1;
						},
					},
				},
			},
			"ALX_longhunyoushi":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_longhunyoushi'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(800).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(Math.random()<=0.4) target.gainAbnormalState(4,'paralysis');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_yidilongyou":{
				nobracket:true,
				trigger:{
					player:"phaseAfter",
				},
				forced:true,
				filter:function (event,player){
					return Math.random()<=0.7;
				},
				content:function (){
					player.changeAbilityRank([1,2].randomGet(),'speed');
				},
			},
			"ALX_tianjianluanshen":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_tianjianluanshen'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;;
				},
				content:function(){
					if(target==undefined) var target=player.storage.ALX_qianshunfenghou;
					player.changeHun();
					player.changePersistentSkill(1,'disableEffect','phaseBefore');
					var num=0.7;
					if(player.persistentSkill.ALX_resistance_ALX_tianjianluanshen&&player.persistentSkill.ALX_resistance_ALX_tianjianluanshen[1]>0) num=0;
					player.changePersistentSkill(0,[num,1],'ALX_resistance_ALX_tianjianluanshen','phaseBefore');
					target.loseHp(target.maxHp*0.1);
					player.changeAllAbilityRank();
				},
				ai:{
					order:11,
					result:{
						target:function(player,target){
							if(player.maxHp==player.hp) return -1;
							return ;
						},
					},
				},
			},
			"ALX_baiheqingyu":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_baiheqingyu'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;;
				},
				content:function(){
					'step 0'
					var damage=target.damage(400);
					damage.type='common';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeHun();
							var num=0.5+(result.num*1000)%10*0.12;
							target.loseHp(num);
							player.recover(num);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:10,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_qianshunfenghou":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_CQhun>=4;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(1000).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							target.changePersistentSkill(3,'ALX_keepAbility1');
							target.changePersistentSkill(3,'ALX_keepAbilityRank1');
							target.changePersistentSkill(3,'ALX_canntRecover');
							player.storage.ALX_qianshunfenghou=target;
							player.useSkill('ALX_tianjianluanshen');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeHun(-4);
				},
				ai:{
					order:12,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_shengyulingdong":{
				nobracket:true,
				marktext:"羽",
				intro:{
					content:'圣羽女皇的传奇魂',
				},
				mark:true,
				init:function(player,skill){
					player.storage.ALX_CQhun=0;
					player.syncStorage('ALX_CQhun');
					player.markSkill('ALX_CQhun');
					setTimeout(function(){
						game.log(player,'开启了传奇魂：圣羽之心');
						for(var i=0;i<player.node.marks.childNodes.length;i++){
							if(player.node.marks.childNodes[i].name=='ALX_shengyulingdong'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_shengyulingdong.jpg');
								player.node.marks.childNodes[i].innerHTML='';
							};
							if(player.node.marks.childNodes[i].name=='ALX_CQhun'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_CQhun.jpg');
							};
						};
					},100);
				},
				CQhunPerPhase:1,
				group:["ALX_shengyulingdong_gameStart","ALX_shengyulingdong_attack"],
				subSkill:{
					"gameStart":{
						trigger:{
							global:"gameStart",
						},
						forced:true,
						content:function (){
							player.changeAllAbility(500);
							player.changeAbility(1000,'speed');
						},
					},
					"attack":{
						trigger:{
							source:"damageEnd",
						},
						forced:true,
						filter:function (event,player){
							var a=player.abilityRank;
							return a.attackC+a.attackE+a.defenseC+a.defenseE+a.speed+a.hit+a.dodge+a.crit<=16;
						},
						content:function (){
							player.storage.ALX_qianshunfenghou=trigger.player;
							player.useSkill('ALX_tianjianluanshen');
						},
					},
				},
			},
			"ALX_jinglingwangzhijian":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_jinglingwangzhijian'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(500).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeyuanQi();
							if(Math.random()<=0.25) target.changePersistentSkill(1,'ALX_canntAct');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:10,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_ciyuanzhuanhua":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_ciyuanzhuanhua'+'_pp']>0&&player.storage.ALX_yuanQi<5;
				},
				content:function(){
					player.changeAbilityRank(2,'attackC');
					player.changePersistentSkill(2,'ALX_ciyuanzhuanhua');
				},
				ai:{
					order:11.5,
					result:{
						player:function(player){
							if(player.changeAbilityRank.attackC<1) return 1;
						},
					},
				},
			},
			"_ALX_ciyuanzhuanhua":{
				trigger:{
					player:"damageBefore",
				},
				forced:true,
				filter:function (event,player){
					return event.source&&player.persistentSkill.ALX_ciyuanzhuanhua>0;
				},
				content:function (){
					player.copyUseAbilityRank(trigger.source);
					trigger.source.clearUseAbilityRank();
					player.changePersistentSkill(2,'ALX_keepAbilityRank');
				},
			},
			"ALX_shengyuanlongpo":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_shengyuanlongpo'+'_pp']>0&&(player.storage.ALX_yuanQi==undefined||player.storage.ALX_yuanQi<4);
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(500).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeyuanQi();
							target.changeAbilityRank(-2,'defenseC');
							target.changeAbilityRank(-2,'dodge');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_shengyuanlongpoQH":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_yuanQi>=4;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(1300).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var num=-2;
							if(result.crit==true) num=num*2;
							target.changeAbilityRank(num,'defenseC').ignore=true;
							target.changeAbilityRank(num,'dodge').ignore=true;
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeyuanQi(-4);
				},
				ai:{
					order:12,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_nizhuanqiankun":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_yuanQi>=4;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var num=1300;
					if(player.hp<player.maxHp/2) num=num*2;
					target.damage(num).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.recover(1.5);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeyuanQi(-5);
				},
				ai:{
					order:13,
					result:{
						target:function(player,target){
							if(player.hp<player.maxHp) return -1;
							return ;
						},
					},
					expose:0.75,
				},
			},
			"ALX_tianxuanzhizi":{
				nobracket:true,
				init:function(player,skill){
					player.storage.ALX_yuanQi=0;
					player.syncStorage('ALX_yuanQi');
					player.markSkill('ALX_yuanQi');
					setTimeout(function(){
						for(var i=0;i<player.node.marks.childNodes.length;i++){
							if(player.node.marks.childNodes[i].name=='ALX_yuanQi'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_yuanQi.jpg');
							};
						};
					},100);
				},
				yuanQiPerPhase:1,
				group:["ALX_tianxuanzhizi_gameStart","ALX_tianxuanzhizi_changePSkill"],
				subSkill:{
					"gameStart":{
						trigger:{
							global:"gameStart",
						},
						forced:true,
						content:function (){
							player.changePersistentSkill(0,[0.3,99999],'ALX_crit',true);
						},
					},
					"changePSkill":{
						trigger:{
							player:"changePersistentSkillBegin",
						},
						forced:true,
						popup:false,
						filter:function (event,player){
							return event.skill.indexOf('ALX_resistance')!=-1||event.skill.indexOf('ALX_attackRate')!=-1;
						},
						content:function (){
							trigger.card[0]+=0.15;
						},
					},
				},
			},
			"ALX_heitaokapai":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_heitaokapai'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(500).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeyuanQi();
							player.recover(result.num*0.5);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11.5,
					result:{
						target:function(target,player){
							if(player.hp<player.maxHp-1) return -1;
							return ;
						},
					},
					expose:0.75,
				},
			},
			"ALX_qianfu":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_qianfu'+'_pp']>0;
				},
				content:function(){
					var num=0.3;
					if(player.persistentSkill.ALX_resistance_ALX_qianfu&&player.persistentSkill.ALX_resistance_ALX_qianfu[1]>0) num=0;
					player.changePersistentSkill(0,[num,5],'ALX_resistance_ALX_qianfu');
					player.changePersistentSkill(5,'ALX_qianfu');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.persistentSkill.ALX_qianfu==undefined) return 1;
						},
					},
				},
			},
			"_ALX_qianfu":{
				trigger:{
					source:"damageBegin",
				},
				forced:true,
				filter:function (event,player){
					var b=event.player.group;
					return player.persistentSkill.ALX_qianfu>0&&event.type!=undefined&&(b.indexOf('ALX_chaodianxi')!=-1||b.indexOf('ALX_chaotuxi')!=-1||b.indexOf('ALX_chaolongxi')!=-1);
				},
				content:function (){
					trigger.num=trigger.num*3;
				},
			},
			"ALX_yijialuanzhen":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_yijialuanzhen'+'_pp']>0&&(player.storage.ALX_yuanQi==undefined||player.storage.ALX_yuanQi<5);
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(500).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeyuanQi();
							player.changeAbilityRank(1,'attackE');
							player.changeAbilityRank(1,'defenseC');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_yijialuanzhenQH":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_yuanQi>=5;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(800).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeAbilityRank(1,'attackE');
							player.changeAbilityRank(1,'defenseC');
							player.changePersistentSkill(0,[0.5,2],'ALX_dodge');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeyuanQi(-5);
				},
				ai:{
					order:13,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_huoluanxuanshang":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_yuanQi>=5;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(800).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(result.num>0.5) player.changeAllAbilityRank();
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeyuanQi(-5);
				},
				ai:{
					order:12.5,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_yaoyizhixin":{
				nobracket:true,
				init:function(player,skill){
					player.storage.ALX_yuanQi=0;
					player.syncStorage('ALX_yuanQi');
					player.markSkill('ALX_yuanQi');
					setTimeout(function(){
						for(var i=0;i<player.node.marks.childNodes.length;i++){
							if(player.node.marks.childNodes[i].name=='ALX_yuanQi'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_yuanQi.jpg');
							};
						};
					},100);
				},
				yuanQiPerPhase:1,
				group:["ALX_yaoyizhixin_changeAR"],
				subSkill:{
					"changeAR":{
						trigger:{
							player:"changeAbilityRankBegin",
						},
						forced:true,
						filter:function (event,player){
							return event.num<0&&Math.random()<=0.5;
						},
						content:function (){
							trigger.num=-trigger.num*2;
						},
					},
				},
			},
			"ALX_qixing":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_qixing'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(500).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeyuanQi();
							for(var i=0;i<4;i++){
								player.gainPlayerAbilityRank(1,lib.ALX_ability.randomGet(),target);
							};
							if(target.storage.ALX_qixing==undefined) target.storage.ALX_qixing=0;
							target.storage.ALX_qixing++;
							game.log(target,'的智慧印记+1');
						};
						if(player.maxHp==player.hp&&event.bool!=true){
							event.bool=true;
							event.goto(0);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11.5,
					result:{
						target:function(target,player){
							if(player.hp==player.maxHp) return -1;
							return ;
						},
					},
					expose:0.75,
				},
			},
			"ALX_linglong":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:1,
				filter:function (event,player){
					return player.storage['ALX_linglong'+'_pp']>0;
				},
				content:function(){
					player.changePersistentSkill(1,'ALX_linglong','phaseBefore');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.hp<=1) return 1;
						},
					},
				},
			},
			"_ALX_linglong":{
				trigger:{
					player:"damageBegin",
				},
				forced:true,
				priority:-105,
				filter:function (event,player){
					return player.persistentSkill.ALX_linglong>0&&event.type!=undefined;
				},
				content:function (){
					trigger.untrigger();
					trigger.finish();
					if(trigger.source){
						trigger.source.loseHp(trigger.num*2);
						if(trigger.source.storage.ALX_qixing==undefined) trigger.source.storage.ALX_qixing=0;
						trigger.source.storage.ALX_qixing++;
						game.log(trigger.source,'的智慧印记+1');
					};
					player.changeAllPP();
					player.recover(player.maxHp-player.hp);
				},
			},
			"ALX_xingjieyuansha":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_xingjieyuansha'+'_pp']>0&&(player.storage.ALX_yuanQi==undefined||player.storage.ALX_yuanQi<4);
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var num=500;
					if(target.storage.ALX_qixing!=undefined) num=num*(1+target.storage.ALX_qixing/2);
					target.damage(num).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeyuanQi();
							if(target.storage.ALX_qixing!=undefined){
								num=num*(1+target.storage.ALX_qixing/2);
								player.changeAllPP(1+target.storage.ALX_qixing);
								delete target.storage.ALX_qixing;
								game.log(target,'身上的智慧印记被清空了');
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_xingjieyuanshaQH":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_yuanQi>=4;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var num=1300;
					if(target.storage.ALX_qixing!=undefined) num=num*(1+target.storage.ALX_qixing/2);
					target.damage(num).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(target.storage.ALX_qixing!=undefined){
								num=num*(1+target.storage.ALX_qixing/2);
								player.changeAllPP(1+target.storage.ALX_qixing);
								player.changeyuanQi(1+target.storage.ALX_qixing);
								delete target.storage.ALX_qixing;
								game.log(target,'身上的智慧印记被清空了');
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeyuanQi(-4);
				},
				ai:{
					order:13,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_nizhuanweilai":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_yuanQi>=4;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(1300).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							target.inversionUseAbilityRank();
							player.changePersistentSkill(1,'ALX_linglong','phaseBefore');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeyuanQi(-4);
				},
				ai:{
					order:12.5,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_juelun":{
				nobracket:true,
				init:function(player,skill){
					player.storage.ALX_yuanQi=0;
					player.syncStorage('ALX_yuanQi');
					player.markSkill('ALX_yuanQi');
					setTimeout(function(){
						for(var i=0;i<player.node.marks.childNodes.length;i++){
							if(player.node.marks.childNodes[i].name=='ALX_yuanQi'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_yuanQi.jpg');
							};
						};
					},100);
				},
				yuanQiPerPhase:1,
				group:["ALX_juelun_changeAR"],
				subSkill:{
					"changeAR":{
						trigger:{
							global:"changeAbilityRankEnd",
						},
						forced:true,
						filter:function (event,player){
							return event.num>0&&get.attitude(player,event.player)<0;
						},
						content:function (){
							var num=trigger.num;
							if(Math.random()<=0.5) num=num*2;
							player.changeAbilityRank(num,trigger.skill);
						},
					},
				},
			},
			"ALX_yaohulingyu":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_yaohulingyu'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(500).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeyuanQi();
							target.changeyuanQi(-1);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_shenzhimeihuo":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_shenzhimeihuo'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;;
				},
				content:function(){
					player.changeyuanQi();
					target.changePersistentSkill(1,'ALX_shenzhimeihuo');
				},
				ai:{
					order:11.5,
					result:{
						target:function(player,target){
							if(target.isALXYB()) return -1;
							return ;
						},
					},
				},
			},
			"_ALX_shenzhimeihuo":{
				trigger:{
					player:"useSkillBefore",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_shenzhimeihuo>0&&Math.random()<=0.3;
				},
				content:function (){
					if(lib.skill[trigger.skill].ALX_skill_type!=undefined){
						if(lib.skill[trigger.skill].ALX_skill_type.contains('ALX_noTarget')){
							trigger.player=player.randomGetPlayer();
						}else{
							if(trigger.targets!=undefined) trigger.targets[0]=trigger.targets[0].randomGetPlayer();
						};
					};
					trigger.mad=true;
					player.addTempSkill('ALX_usedSkill',{player:'phaseEnd'});
					game.log(player,'技能作用了错误目标');
				},
			},
			"ALX_jiuweibihu":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_jiuweibihu'+'_pp']>0&&(player.storage.ALX_yuanQi==undefined||player.storage.ALX_yuanQi<5);
				},
				content:function(){
					player.changeyuanQi();
					player.recover(player.maxHp*0.5);
				},
				ai:{
					order:14,
					result:{
						player:function(player){
							if(player.hp<player.maxHp*0.5) return 1;
						},
					},
					expose:0.75,
				},
			},
			"ALX_jiuweibihuQH":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_yuanQi>=5;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(1200).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.recover(player.maxHp*0.5);
							player.changeAbilityRank(1,'defenseC');
							player.changeAbilityRank(1,'defenseE');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeyuanQi(-5);
				},
				ai:{
					order:13,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_xuyezhishang":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_yuanQi>=5;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(1200).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var num=-0.5;
							if(target.persistentSkill.ALX_attackRate_ALX_xuyezhishang&&target.persistentSkill.ALX_attackRate_ALX_xuyezhishang[1]>0) num=0;
							target.changePersistentSkill(0,[num,5],'ALX_attackRate_ALX_xuyezhishang');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeyuanQi(-5);
				},
				ai:{
					order:12.5,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_shashengyizhi":{
				nobracket:true,
				init:function(player,skill){
					player.storage.ALX_yuanQi=0;
					player.syncStorage('ALX_yuanQi');
					player.markSkill('ALX_yuanQi');
					setTimeout(function(){
						for(var i=0;i<player.node.marks.childNodes.length;i++){
							if(player.node.marks.childNodes[i].name=='ALX_yuanQi'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_yuanQi.jpg');
							};
						};
					},100);
				},
				yuanQiPerPhase:1,
				group:["ALX_shashengyizhi_changeFZ"],
				subSkill:{
					"changeFZ":{
						trigger:{
							global:"changeAbilityRankBegin",
						},
						forced:true,
						filter:function (event,player){
							return event.num>0&&get.attitude(player,event.player)<0;
						},
						content:function (){
							trigger.cancel();
							game.log(trigger.player,'属性提升失败');
						},
					},
				},
			},
			"ALX_zuihuayin":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_zuihuayin'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(500).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeyuanQi();
							target.changeAbilityRank(-2,'defenseE');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:12,
					result:{
						target:function(player,target){
							if(target.abilityRank.defenseE>-2) return -1;
							return ;
						},
					},
					expose:0.75,
				},
			},
			"ALX_liuyingfeiwu":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_liuyingfeiwu'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var num=500;
					if(target.abilityRank.defenseE<=-2) num=num*2;
					target.damage(num).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeyuanQi();
							if(target.abilityRank.defenseE<=-2){
								target.changeAbilityRank(-2,'attackC');
								player.changeAbilityRank(2,'attackC');
								target.changeAbilityRank(-2,'attackE');
								player.changeAbilityRank(2,'attackE');
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_qietingfengyin":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_qietingfengyin'+'_pp']>0&&(player.storage.ALX_yuanQi==undefined||player.storage.ALX_yuanQi<5);
				},
				content:function(){
					player.changeyuanQi();
					player.recover((player.maxHp-player.hp)*0.6);
				},
				ai:{
					order:12.5,
					result:{
						player:function(player){
							if(player.hp<=1.3) return 1;
						},
					},
					expose:0.75,
				},
			},
			"ALX_qietingfengyinQH":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_yuanQi>=5;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(1200).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.recover((player.maxHp-player.hp)*0.6);
							var num=0.5;
							if(player.persistentSkill.ALX_resistance_ALX_qietingfengyinQH&&player.persistentSkill.ALX_resistance_ALX_qietingfengyinQH[1]>0) num=0;
							player.changePersistentSkill(0,[num,3],'ALX_resistance_ALX_qietingfengyinQH');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeyuanQi(-5);
				},
				ai:{
					order:13,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_menghuanmili":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_yuanQi>=5;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(1200).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							target.changeAllAbilityRank(-1);
							target.gainAbnormalState(3,'sleep');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeyuanQi(-5);
				},
				ai:{
					order:12.7,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_taiyinzhishen":{
				nobracket:true,
				init:function(player,skill){
					player.storage.ALX_yuanQi=0;
					player.syncStorage('ALX_yuanQi');
					player.markSkill('ALX_yuanQi');
					setTimeout(function(){
						for(var i=0;i<player.node.marks.childNodes.length;i++){
							if(player.node.marks.childNodes[i].name=='ALX_yuanQi'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_yuanQi.jpg');
							};
						};
					},100);
				},
				yuanQiPerPhase:1,
				group:["ALX_taiyinzhishen_changeAR"],
				subSkill:{
					"changeAR":{
						trigger:{
							global:"changeAbilityRankEnd",
						},
						forced:true,
						filter:function (event,player){
							return event.num<0&&event.player!=player&&event.skill=='defenseE';
						},
						content:function (){
							for(var i=0;i<-trigger.num;i++){
								player.changeAbilityRank(2,lib.ALX_ability.randomGet());
							};
						},
					},
				},
			},
			"ALX_luanjianshenyin":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_luanjianshenyin'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(500).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeyuanQi();
							if(player.getAbility().speed>target.getAbility().speed){
								if(Math.random()<=0.3) target.changePersistentSkill(1,'ALX_canntAct');
							}else{
								player.changeAbility(100,'speed');
								player.changeAbilityRank(1,'speed');
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:12,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_yuhuazhongsheng":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:3,
				filter:function (event,player){
					return player.storage['ALX_yuhuazhongsheng'+'_pp']>0;
				},
				content:function(){
					if(player.storage.ALX_yuhuazhongsheng==undefined) player.storage.ALX_yuhuazhongsheng=1.2;
					if(player.storage.ALX_yuhuazhongsheng>0.2) player.storage.ALX_yuhuazhongsheng-=0.2;
					if(Math.random()<=player.storage.ALX_yuhuazhongsheng){
						player.changePersistentSkill(1,'ALX_yuhuazhongsheng','phaseBefore');
					}else{
						game.log(player,'使用羽化重生失败');
					};
				},
				ai:{
					order:13,
					result:{
						player:function(player){
							if(player.hp<=1.3&&(player.storage.ALX_yuhuazhongsheng==undefined||player.storage.ALX_yuhuazhongsheng>0.8)) return 1;
						},
					},
				},
			},
			"_ALX_yuhuazhongsheng":{
				trigger:{
					player:"damageBegin",
				},
				forced:true,
				priority:-105,
				filter:function (event,player){
					return player.persistentSkill.ALX_yuhuazhongsheng>0;
				},
				content:function (){
					trigger.untrigger();
					trigger.finish();
					player.recover(player.maxHp-player.hp);
					player.changeAllPP(9999);
					player.changePersistentSkill('ALX_yuhuazhongsheng').reason='active';
				},
			},
			"_ALX_yuhuazhongsheng1":{
				trigger:{
					player:"changePersistentSkillEnd",
				},
				forced:true,
				filter:function (event,player){
					return event.skill=='ALX_yuhuazhongsheng'&&event.num==undefined&&event.reason!='active';
				},
				content:function (){
					player.changeAllAbilityRank(3);
				},
			},
			"ALX_xuerenfengbao":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_xuerenfengbao'+'_pp']>0&&(player.storage.ALX_yuanQi==undefined||player.storage.ALX_yuanQi<4);
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					event.num=0;
					'step 1'
					target.damage(125).type='common';
					'step 2'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(Math.random()<=0.35){
								player.changeyuanQi();
								target.gainAbnormalState(2,'mad');
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					event.num++;
					if(event.num<4) event.goto(1);
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_xuerenfengbaoQH":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_yuanQi>=4;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					event.num=0;
					'step 1'
					target.damage(130).type='common';
					'step 2'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(Math.random()<=0.35){
								player.changeyuanQi();
								target.gainAbnormalState(2,'mad');
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					event.num++;
					var num=10;
					if(target.abnormalState.ALX_mad>0) num=20;
					if(event.num<num) event.goto(1);
					'step 3'
					player.changeyuanQi(-4);
				},
				ai:{
					order:14,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_ningshenchuanxin":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_yuanQi>=4;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(1300).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var num=player.maxHp-player.hp;
							player.recover(num);
							target.loseHp(num);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeyuanQi(-4);
				},
				ai:{
					order:12.5,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_shihunzhiyi":{
				nobracket:true,
				init:function(player,skill){
					player.storage.ALX_yuanQi=0;
					player.syncStorage('ALX_yuanQi');
					player.markSkill('ALX_yuanQi');
					setTimeout(function(){
						for(var i=0;i<player.node.marks.childNodes.length;i++){
							if(player.node.marks.childNodes[i].name=='ALX_yuanQi'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_yuanQi.jpg');
							};
						};
					},100);
				},
				yuanQiPerPhase:1,
				group:["ALX_shihunzhiyi_changeCrit","ALX_shihunzhiyi_addD"],
				subSkill:{
					"changeCrit":{
						trigger:{
							player:"phaseEnd",
						},
						forced:true,
						content:function (){
							var num=99999;
							if(player.persistentSkill.ALX_crit&&player.persistentSkill.ALX_crit[1]>0) num=0;
							player.changePersistentSkill(0,[0.2,num],'ALX_crit','str_的暴击率上升了20%',true);
						},
					},
					"addD":{
						trigger:{
							source:"damageAfter",
						},
						forced:true,
						filter:function (event,player){
							return event.result.crit==true;
						},
						content:function (){
							trigger.player.changePersistentSkill(0,[-0.5,2],'ALX_resistance_ALX_shihunzhiyi');
						},
					},
				},
			},
			"ALX_yanzhibaopo":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_yanzhibaopo'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(500).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeyuanQi();
							target.changePersistentSkill(3,'ALX_yanzhibaopoZS');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:12,
					result:{
						target:function(player,target){
							if(target.persistentSkill.ALX_yanzhibaopoZS==undefined&&player.hp<2) return -1;
							return ;
						},
					},
					expose:0.75,
				},
			},
			"_ALX_yanzhibaopo":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_yanzhibaopoZS>0;
				},
				content:function (){
					player.loseHp(player.hp/4);
					game.log(player,'被灼烧了');
				},
			},
			"ALX_huolingrusui":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_huolingrusui'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(500).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeyuanQi();
							target.changeAbilityRank(-2,'attackC');
							player.changeAbilityRank(2,'attackC');
							player.changeHuDun(player.maxHp*0.2);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11.5,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_shenghuocuixin":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_shenghuocuixin'+'_pp']>0&&(player.storage.ALX_yuanQi==undefined||player.storage.ALX_yuanQi<5);
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;;
				},
				content:function(){
					player.changeyuanQi();
					target.changeAbilityRank(-2,'defenseC');
					player.changeAbilityRank(2,'defenseC');
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
				},
			},
			"ALX_shenghuocuixinQH":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_yuanQi>=5;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(1200).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(Math.random()<=0.35){
								target.changeAbilityRank(-2,'defenseC');
								player.changeAbilityRank(2,'defenseC');
								player.changePersistentSkill(5,'ALX_keepAbilityRank');
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeyuanQi(-5);
				},
				ai:{
					order:14,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_fentianzhinu":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_yuanQi>=5;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					event.num=0;
					event.num1=[2,3,4,5,6].randomGet();
					'step 1'
					var damage=target.damage(300);
					damage.type='common';
					damage.critRate=1;
					'step 2'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					event.num++;
					if(event.num<event.num1) event.goto(1);
					'step 3'
					player.changeyuanQi(-5);
				},
				ai:{
					order:12.5,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_shenzhijuangu":{
				nobracket:true,
				init:function(player,skill){
					player.storage.ALX_yuanQi=0;
					player.syncStorage('ALX_yuanQi');
					player.markSkill('ALX_yuanQi');
					setTimeout(function(){
						for(var i=0;i<player.node.marks.childNodes.length;i++){
							if(player.node.marks.childNodes[i].name=='ALX_yuanQi'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_yuanQi.jpg');
							};
						};
					},100);
				},
				yuanQiPerPhase:1,
				group:["ALX_shenzhijuangu_DZS"],
				subSkill:{
					"DZS":{
						trigger:{
							source:"damageBegin",
						},
						forced:true,
						priority:-105,
						content:function (){
							if(trigger.player.persistentSkill.ALX_yanzhibaopoZS>0){
								trigger.num=trigger.num*2;
							}else{
								player.recover(trigger.num);
							};
						},
					},
				},
			},
			"ALX_henengbaohu":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_henengbaohu'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(500).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeyuanQi();
							player.changeHuDun(0.8);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:12,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_jisutuijin":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_jisutuijin'+'_pp']>0;
				},
				content:function(){
					player.changeAbilityRank(4,'speed');
					player.changeAbilityRank(2,'hit');
				},
				ai:{
					order:11.5,
					result:{
						player:1,
					},
				},
			},
			"ALX_chaoguangsuhuopao":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_chaoguangsuhuopao'+'_pp']>0&&(player.storage.ALX_yuanQi==undefined||player.storage.ALX_yuanQi<5);
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(200).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeyuanQi();
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_chaoguangsuhuopaoQH":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_yuanQi>=5;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(1200).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							target.changePersistentSkill(3,'ALX_chaoguangsuhuopaoQH');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeyuanQi(-5);
				},
				ai:{
					order:14,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"_ALX_chaoguangsuhuopaoQH":{
				trigger:{
					source:"damageBegin",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_chaoguangsuhuopaoQH>0;
				},
				content:function (){
					trigger.num-=1;
				},
			},
			"ALX_jiujibaopo":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_yuanQi>=5;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var num=1200;
					if(player.abilityRank.speed>target.abilityRank.speed) num=num*1.5;
					target.damage(num).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeyuanQi(-5);
				},
				ai:{
					order:12.5,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_zhongduanjijia":{
				nobracket:true,
				init:function(player,skill){
					player.storage.ALX_yuanQi=0;
					player.syncStorage('ALX_yuanQi');
					player.markSkill('ALX_yuanQi');
					setTimeout(function(){
						for(var i=0;i<player.node.marks.childNodes.length;i++){
							if(player.node.marks.childNodes[i].name=='ALX_yuanQi'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_yuanQi.jpg');
							};
						};
					},100);
				},
				yuanQiPerPhase:1,
				group:["ALX_zhongduanjijia_exYQ","ALX_zhongduanjijia_decAR"],
				subSkill:{
					"exYQ":{
						trigger:{
							global:"gameStart",
						},
						forced:true,
						content:function (){
							player.changeyuanQi(2);
						},
					},
					"decAR":{
						trigger:{
							source:"damageAfter",
						},
						forced:true,
						content:function (){
							trigger.player.changeAllAbility(-100);
						},
					},
				},
			},
			"ALX_liehuofen":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_liehuofen'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(500).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeyuanQi();
							player.changeAbilityRank(2,'attackC');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:12,
					result:{
						target:function(player,target){
							if(player.abilityRank.attackC<2) return -1;
							return ;
						},
					},
					expose:0.75,
				},
			},
			"ALX_huowuyingfei":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_huowuyingfei'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var num=500;
					if(player.abilityRank.attackC>-2) num=num*2;
					target.damage(num).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeyuanQi();
							if(player.abilityRank.attackC>-2){
								target.changeAbilityRank(-2,'defenseC');
								player.changeAbilityRank(2,'defenseC');
								target.changeAbilityRank(-2,'defenseE');
								player.changeAbilityRank(2,'defenseE');
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_yehuocongsheng":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_yehuocongsheng'+'_pp']>0&&(player.storage.ALX_yuanQi==undefined||player.storage.ALX_yuanQi<5);
				},
				content:function(){
					player.changeyuanQi();
					player.recover(player.maxHp*0.5);
				},
				ai:{
					order:12.5,
					result:{
						player:function(player){
							if(player.hp<=1.3) return 1;
						},
					},
					expose:0.75,
				},
			},
			"ALX_yehuocongshengQH":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_yuanQi>=5;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(1200).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.recover(player.maxHp*0.5);
							var num=0.5;
							if(player.persistentSkill.ALX_attackRate_ALX_yehuocongshengQH&&player.persistentSkill.ALX_attackRate_ALX_yehuocongshengQH[1]>0) num=0;
							player.changePersistentSkill(0,[num,3],'ALX_attackRate_ALX_yehuocongshengQH');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeyuanQi(-5);
				},
				ai:{
					order:12.7,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_luanshilieyan":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_yuanQi>=5;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(1200).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeAllAbilityRank();
							target.gainAbnormalState(3,'mad');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeyuanQi(-5);
				},
				ai:{
					order:13,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_taiyangzhihun":{
				nobracket:true,
				init:function(player,skill){
					player.storage.ALX_yuanQi=0;
					player.syncStorage('ALX_yuanQi');
					player.markSkill('ALX_yuanQi');
					setTimeout(function(){
						for(var i=0;i<player.node.marks.childNodes.length;i++){
							if(player.node.marks.childNodes[i].name=='ALX_yuanQi'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_yuanQi.jpg');
							};
						};
					},100);
				},
				yuanQiPerPhase:1,
				group:["ALX_taiyangzhihun_changeAR"],
				subSkill:{
					"changeAR":{
						trigger:{
							player:"changeAbilityRankEnd",
						},
						forced:true,
						filter:function (event,player){
							return event.num>0&&event.skill=='attackC';
						},
						content:function (){
							for(var i=0;i<trigger.num;i++){
								player.changeAbilityRank(2,lib.ALX_ability.randomGet());
							};
						},
					},
				},
			},
			"ALX_qijihujia":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_qijihujia'+'_pp']>0;
				},
				content:function(){
					player.changeAbilityRank(2,'attackE');
					var num=1;
					if(player.storage.ALX_qiyue=='夜丸') num=2;
					player.changeAbilityRank(num,'defenseC');
					player.changeAbilityRank(num,'defenseE');
					player.changeAbilityRank(num,'crit');
					player.changeAbilityRank(num,'speed');
					player.changePersistentSkill(1,'ALX_qijihujia','phaseBefore');
				},
				ai:{
					order:12.5,
					result:{
						player:function(player){
							if(player.attackE<2) return 1;
						},
					},
					expose:0.75,
				},
			},
			"_ALX_qijihujia":{
				trigger:{
					player:"damageAfter",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_qijihujia>0;
				},
				content:function (){
					player.changePersistentSkill('ALX_qijihujia').reason='active';
				},
			},
			"_ALX_qijihujia1":{
				trigger:{
					player:"changePersistentSkillEnd",
				},
				forced:true,
				filter:function (event,player){
					return event.skill=='ALX_qijihujia'&&event.num==undefined&&event.reason!='active';
				},
				content:function (){
					var num=0.7;
					if(player.storage.ALX_qiyue=='夜丸') num=1.4;
					player.recover(num);
				},
			},
			"ALX_qishipaoxiao":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_qishipaoxiao'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(300).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var object=[-4,-1];
							if(player.storage.ALX_qiyue=='夜丸') object=[-4,-2];
							target.changeAbilityRank(object,'defenseE');
							var num=0.7;
							if(player.storage.ALX_qiyue=='夜丸') num=0.75;
							if(player.maxHp==player.hp&&Math.random()<=num) target.gainAbnormalState('afaid');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:12,
					result:{
						target:function(player,target){
							if(player.maxHp==player.hp||target.abilityRank.defenseE>-2) return -1;
							return ;
						},
					},
					expose:0.75,
				},
			},
			"ALX_xinyuepoyun":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_xinyuepoyun'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var num=300;
					if(player.getAbility().speed>target.getAbility().speed&&player.storage.ALX_qiyue!='夜丸'){
						num=num*1.5;
					}else if(player.getAbility().speed>target.getAbility().speed&&player.storage.ALX_qiyue=='夜丸'){
						num=num*2.5;
					};
					target.damage(num).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var object=[-2,-1];
							if(player.storage.ALX_qiyue=='夜丸') object=[-4,-3];
							target.changeAbilityRank(object,'hit');
							if(player.getAbility().speed>target.getAbility().speed) player.changeAbilityRank(2,'dodge');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_jilezhiren":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_jilezhiren'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(400).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							target.clearUseAbilityRank();
							var num=0.4;
							if(player.storage.ALX_qiyue=='夜丸') num=0.75;
							target.loseHp(num);
							player.recover(num);
							player.changePersistentSkill(1,'ALX_jilezhiren','phaseBefore');
						}else{
							event.finish();
						};
					}else{
						event.finish();
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					if(target.isDead()){
						var num=2;
						if(player.storage.ALX_qiyue=='夜丸') num=3;
						player.changeAllAbilityRank(num);
					};
				},
				ai:{
					order:11.5,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"_ALX_jilezhiren":{
				trigger:{
					global:"dieBefore",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_jilezhiren>0&&event.source==player;
				},
				content:function (){
					var num=2;
					if(player.storage.ALX_qiyue=='夜丸') num=3;
					player.changeAllAbilityRank(num);
				},
			},
			"ALX_lingyezhanqi_qishiqiyue":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				filter:function (event,player){
					return player.storage.ALX_qiyue==undefined;
				},
				content:function(){
					player.qiyue('夜丸');
					player.changePersistentSkill(0,[0.35,99999],'ALX_resistance_ALX_qiyue',true);
					player.changeAbility(200,'attackE');
					player.changeAbility(300,'speed');
				},
				ai:{
					order:14,
					result:{
						player:1,
					},
				},
			},
			"ALX_baizhanbudai":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_baizhanbudai'+'_pp']>0;
				},
				content:function(){
					var num=10;
					if(player.storage.ALX_qiyue=='白犽') num=13;
					player.changePersistentSkill(num,'ALX_baizhanbudai');
				},
				ai:{
					order:12.5,
					result:{
						player:function(player){
							if(player.persistentSkill.ALX_baizhanbudai==undefined) return 1;
						},
					},
					expose:0.75,
				},
			},
			"_ALX_baizhanbudai":{
				trigger:{
					player:"damageBegin",
				},
				forced:true,
				priority:-105,
				filter:function (event,player){
					return player.persistentSkill.ALX_baizhanbudai>0;
				},
				content:function (){
					var num1=0.5;
					if(player.storage.ALX_qiyue=='白犽') num1=0.75;
					var num=(trigger.num-player.hp*0.1)*num1;
					if(num>0){
						trigger.num-=num;
						num2=trigger.num;
						num2=num2*1000;
						num2=Math.round(num2);
						num2=num2/1000;
						trigger.num=num2;
					};
				},
			},
			"ALX_qishiyizhi":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_qishiyizhi'+'_pp']>0;
				},
				content:function(){
					player.changeAbilityRank(2,'attackC');
					var num=1;
					if(player.storage.ALX_qiyue=='白犽') num=2;
					player.changeAbilityRank(num,'defenseC');
					player.changeAbilityRank(num,'defenseE');
					player.changeAbilityRank(num,'crit');
					player.changeAbilityRank(num,'speed');
					var num1=0.5;
					if(player.persistentSkill.ALX_attackRate_ALX_qishiyizhi&&player.persistentSkill.ALX_attackRate_ALX_qishiyizhi[1]>0) num1=0;
					player.changePersistentSkill(0,[num1,2],'ALX_attackRate_ALX_qishiyizhi');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.abilityRank.attackC<2) return 1;
						},
					},
					expose:0.75,
				},
			},
			"ALX_yuhongguanri":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_yuhongguanri'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var num=400;
					if(player.hp/player.maxHp>target.hp/target.maxHp&&player.storage.ALX_qiyue!='白犽'){
						num=num*1.5;
					}else if(player.hp/player.maxHp>target.hp/target.maxHp&&player.storage.ALX_qiyue=='白犽'){
						num=num*2.5;
					};
					target.damage(num).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var num=0.4;
							if(player.storage.ALX_qiyue=='白犽') num=1;
							player.recover(result.num*num);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11.5,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_jianyingwuhen":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_jianyingwuhen'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(300).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							var num=3;
							if(player.storage.ALX_qiyue=='白犽') num=5;
							player.changePersistentSkill(num,'ALX_immuneToAbnormalState');
							player.changePersistentSkill(num,'ALX_jianyingwuhen');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"_ALX_jianyingwuhen":{
				trigger:{
					player:"changeAbilityRankAfter",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_jianyingwuhen>0&&event.num<0;
				},
				content:function (){
					trigger.source.changeAllAbilityRank(-1);
				},
			},
			"ALX_huiyuezhanqi_qishiqiyue":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				filter:function (event,player){
					return player.storage.ALX_qiyue==undefined;
				},
				content:function(){
					player.qiyue('白犽');
					player.changePersistentSkill(0,[0.4,99999],'ALX_attackRate_ALX_qiyue',true);
					player.changeAbility(150,'attackC');
					player.changeAbility(200,'defenseC');
					player.changeAbility(200,'defenseE');
				},
				ai:{
					order:14,
					result:{
						player:1,
					},
				},
			},
			"ALX_zhuzaizhiyin":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:1,
				filter:function (event,player){
					return player.storage['ALX_zhuzaizhiyin'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;;
				},
				content:function(){
					player.changePersistentSkill(1,'ALX_zhuzaizhiyin','phaseBefore');
					var num=-0.5;
					if(player.storage.ALX_bianshen1=='EX_ALX_xuejingnvhuang') num=-0.8;
					if(target.persistentSkill.ALX_attackRate_ALX_zhuzaizhiyin&&target.persistentSkill.ALX_attackRate_ALX_zhuzaizhiyin[1]>0) num=0;
					target.changePersistentSkill(0,[num,4],'ALX_attackRate_ALX_zhuzaizhiyin');
				},
				ai:{
					order:12.5,
					result:{
						target:function(player,target){
							if(player.hp<1) return -1;
						},
					},
					expose:0.75,
				},
			},
			"_ALX_zhuzaizhiyin":{
				trigger:{
					player:"damageBefore",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_zhuzaizhiyin>0;
				},
				content:function (){
					trigger.untrigger();
					trigger.finish();
					trigger.result.invalid=true;
					player.$damage();
					game.log(player,'免疫了伤害');
					player.popup('<img src='+lib.assetURL+"extension/扩展ol/invalid.png"+' width="52" height="27">');
				},
			},
			"ALX_miguanglingyu":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_miguanglingyu'+'_pp']>0;
				},
				content:function(){
					player.changePersistentSkill(1,'ALX_miguanglingyu','phaseBefore');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.hp<=2&&player.storage.ALX_bianshen1=='EX_ALX_xuejingnvhuang') return 1;
						},
					},
					expose:0.75,
				},
			},
			"_ALX_miguanglingyu":{
				trigger:{
					player:"damageAfter",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_miguanglingyu>0;
				},
				content:function (){
					if(trigger.source){
						trigger.source.changeAbilityRank(-3,'attackC');
						trigger.source.changeAbilityRank(-3,'attackE');
					};
					if(player.storage.ALX_bianshen1=='EX_ALX_xuejingnvhuang') player.recover(0.8);
				},
			},
			"ALX_shuanglingpo":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:5,
				filter:function (event,player){
					return player.storage['ALX_shuanglingpo'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;;
				},
				content:function(){
					target.changeAllAbilityRank(-2);
					if(player.storage.ALX_bianshen1=='EX_ALX_xuejingnvhuang'){
						player.loseHp(2);
					}else{
						player.die();
					};
				},
				ai:{
					order:13,
					result:{
						target:function(player,target){
							if(player.hp>=3) return -1;
						},
					},
					expose:0.75,
				},
			},
			"ALX_tianbingjue":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_tianbingjue'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(300);
					damage.type='exceptional';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							target.gainAbnormalState(3,'frostbite');
							if(player.storage.ALX_bianshen1=='EX_ALX_xuejingnvhuang'){
								target.changePersistentSkill(3,'ALX_tianbingjue');
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11.5,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"_ALX_tianbingjue":{
				trigger:{
					player:"phaseBegin",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_tianbingjue>0&&Math.random()<=0.44;
				},
				content:function (){
					trigger.untrigger();
					trigger.finish();
					game.log(player,'无法行动了');
				},
			},
			"ALX_xuejingnvhuang_bianshen":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				filter:function (event,player){
					return player.storage.ALX_bianshen1==undefined;
				},
				content:function(){
					player.bianshen(6,'ROOT_ALX_xuejingnvhuang','EX_ALX_xuejingnvhuang');
				},
				ai:{
					order:14,
					result:{
						player:1,
					},
				},
			},
			"ALX_lingyezhanqi_qishiqiyueZ":{
				nobracket:true,
				trigger:{
					global:'gameStart',
				},
				forced:true,
				content:function(){
					player.qiyue('夜丸');
					player.changePersistentSkill(0,[0.35,99999],'ALX_resistance_ALX_qiyue',true);
					player.changeAbility(200,'attackE');
					player.changeAbility(300,'speed');
				},
			},
			"ALX_huiyuezhanqi_qishiqiyueZ":{
				nobracket:true,
				trigger:{
					global:'gameStart',
				},
				forced:true,
				content:function(){
					player.qiyue('白犽');
					player.changePersistentSkill(0,[0.4,99999],'ALX_attackRate_ALX_qiyue',true);
					player.changeAbility(150,'attackC');
					player.changeAbility(200,'defenseC');
					player.changeAbility(200,'defenseE');
				},
			},
			"ALX_zhonglibenghuai":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_zhonglibenghuai'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;;
				},
				content:function(){
					target.changeAbility(-target.getAbility().defenseC*0.25,'defenseC');
					target.changeAbility(-target.getAbility().speed*0.25,'speed');
					if(player.storage.ALX_julongzuhun1!=undefined) target.loseHp(player.storage.ALX_julongzuhun1);
					if(player.storage.ALX_Tuteng_REALX_julongtuteng!=undefined&&player.storage.ALX_julongzuhun1>1){
						target.clearUseAbilityRank();
						player.changePersistentSkill(5,'ALX_keepAbilityRank');
					};
				},
				ai:{
					order:11,
					result:{
						target:function(player,target){
							if(player.storage.ALX_julongzuhun1>1) return -1;
							return ;
						},
					},
				},
			},
			"ALX_wujinfenzheng":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_wujinfenzheng'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;;
				},
				content:function(){
					'step 0'
					target.damage(400).type='common';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeHun();
							player.changeAbilityRank(2,'attackC');
							player.changeAbilityRank(2,'defenseC');
							player.changeAbilityRank(2,'defenseE');
							player.recover(result.num*1.5+player.maxHp*0.2);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11.5,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_julongtuteng":{
				nobracket:true,
				marktext:"巨",
				locked:true,
				intro:{
					content:function (storage,player,skill){
						var num=player.storage.ALX_Tuteng_hpALX_julongtuteng;
						num=Math.round(num*1000)/1000;
						return '体力：'+num+'点<br>图腾效果：<li>承受我方亚比受到伤害的50%<li>图腾存在时我方回复体力时获得回复值（包括溢出部分）*50%的护盾';
					},
				},
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute','ALX_noTarget'],
				filterTarget:function(card,player,target){
					return target==player;
				},
				filter:function (event,player){
					return player.storage.ALX_CQhun>=9;
				},
				content:function(){
					player.changeHun(-9);
					player.gainTuteng(0.5,'hp_'+player.maxHp*0.5,'ALX_julongtuteng',function(){
						this.storage.ALX_julongtuteng=true
						this.loseTuteng=function(){
							delete this.storage.ALX_julongtuteng;
						};
					});
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.storage.ALX_Tuteng_REALX_julongtuteng==undefined) return 1;
						},
					},
				},
			},
			"_ALX_julongtuteng":{
				trigger:{
					player:"recoverAfter",
				},
				forced:true,
				filter:function (event,player){
					return player.storage.ALX_julongtuteng==true;
				},
				content:function(){
					player.changeHuDun(trigger.num*0.5);
				},
			},
			"ALX_julongzuhun":{
				nobracket:true,
				marktext:"龙",
				intro:{
					content:'始祖巨龙的传奇魂',
				},
				mark:true,
				init:function(player,skill){
					player.storage.ALX_CQhun=9;
					player.syncStorage('ALX_CQhun');
					player.markSkill('ALX_CQhun');
					setTimeout(function(){
						game.log(player,'开启了传奇魂：巨龙祖魂');
						for(var i=0;i<player.node.marks.childNodes.length;i++){
							if(player.node.marks.childNodes[i].name=='ALX_julongzuhun'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_julongzuhun.jpg');
								player.node.marks.childNodes[i].innerHTML='';
							};
							if(player.node.marks.childNodes[i].name=='ALX_CQhun'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_CQhun.jpg');
							};
						};
					},100);
				},
				CQhunPerPhase:1,
				group:["ALX_julongzuhun_GST","ALX_julongzuhun_RE","ALX_julongzuhun_DA"],
				subSkill:{
					"GST":{
						trigger:{
							global:"gameStart",
						},
						forced:true,
						content:function(){
							player.changeAbility(300,'attackC');
							player.changeAbility(300,'defenseC');
							player.changeAbility(300,'defenseE');
						},
					},
					"RE":{
						trigger:{
							player:"damageBegin",
						},
						forced:true,
						priority:-99.8,
						content:function(){
							var num=trigger.num*0.4;
							num=num*1000;
							num=Math.round(num);
							num=num/1000;
							trigger.num-=num;
							if(num>0){
								if(player.storage.ALX_julongzuhun1==undefined) player.storage.ALX_julongzuhun1=0;
								player.storage.ALX_julongzuhun1+=num;
								game.log(player,'的巨龙祖魂累积的伤害为',player.storage.ALX_julongzuhun1,'点');
							};
						},
					},
					"DA":{
						trigger:{
							player:"changeHp",
						},
						forced:true,
						filter:function(event,player){
							return event.num<0&&event.num<event.num/player.maxHp
						},
						content:function(){
							player.changeAbility(Math.ceil(player.getAbility().defenseC*(-trigger.num/player.maxHp)),'defenseC');
							player.changeAbility(Math.ceil(player.getAbility().speed*(-trigger.num/player.maxHp)),'speed');
						},
					},
				},
			},
			"ALX_W_linliehandong":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:10,
				filter:function (event,player){
					return player.storage['ALX_W_linliehandong'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var damage=target.damage(1000);
					damage.type='exceptional';
					damage.hit=true;
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							if(target.abnormalState.ALX_frostbite>0){
								target.loseAbnormalState('ALX_frostbite');
								player.changeAbility(300,'attackE');
							};
							target.gainAbnormalState(4,'frostbite');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_ranshaozhixin":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_ranshaozhixin'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target==player;
				},
				content:function(){
					player.changePersistentSkill(4,'ALX_ranshaozhixin')
				},
				ai:{
					order:11,
					result:{
						player:function(player){
							if(player.persistentSkill.ALX_ranshaozhixin==undefined) return 1;
							return ;
						},
					},
				},
			},
			"_ALX_ranshaozhixin":{
				trigger:{
					player:"damageAfter",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_ranshaozhixin>0&&event.source;
				},
				content:function (){
					trigger.player.changeAbilityRank(lib.ALX_ability.randomGet(),-1);
					trigger.player.changeAbilityRank(lib.ALX_ability.randomGet(),-1);
				},
			},
			"ALX_fentian":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_fentian'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;;
				},
				content:function(){
					'step 0'
					target.damage(400).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeHun();
							player.changeAbilityRank('attackE',1);
							player.changeAbilityRank('crit',1);
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:12,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_luhuojinghunren":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_CQhun>=5;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					var num=1000;
					if(target.persistentSkill.ALX_immuneToAbnormalState>0) num=num*1.5;
					target.damage(num).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							target.gainAbnormalState(4,'burn');
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeHun(-5);
				},
				ai:{
					order:12.5,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_lingyanzhihun":{
				nobracket:true,
				marktext:"灵",
				intro:{
					content:'传奇波鲁的传奇魂',
				},
				mark:true,
				init:function(player,skill){
					player.storage.ALX_CQhun=0;
					player.syncStorage('ALX_CQhun');
					player.markSkill('ALX_CQhun');
					setTimeout(function(){
						game.log(player,'开启了传奇魂：灵焰之魂');
						for(var i=0;i<player.node.marks.childNodes.length;i++){
							if(player.node.marks.childNodes[i].name=='ALX_lingyanzhihun'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_lingyanzhihun.jpg');
								player.node.marks.childNodes[i].innerHTML='';
							};
							if(player.node.marks.childNodes[i].name=='ALX_CQhun'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_CQhun.jpg');
							};
						};
					},100);
				},
				CQhunPerPhase:1,
				group:["ALX_lingyanzhihun_gameStart","ALX_lingyanzhihun_attack"],
				subSkill:{
					"gameStart":{
						trigger:{
							global:"gameStart",
						},
						forced:true,
						content:function (){
							player.changeAllAbilityRank();
						},
					},
					"attack":{
						trigger:{
							source:"damageEnd",
						},
						forced:true,
						content:function (){
							player.recover(trigger.num*0.17);
						},
					},
				},
			},
			"ALX_chunjingzhixin":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_chunjingzhixin'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target==player;
				},
				content:function(){
					player.clearAbnormalState();
					player.changePersistentSkill(5,'ALX_immuneToAbnormalState')
				},
				ai:{
					order:11,
					result:{
						player:function(player){
							return 1;
						},
					},
				},
			},
			"ALX_yanmei":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_yanmei'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;;
				},
				content:function(){
					'step 0'
					target.damage(400).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeHun();
							if(Math.random()<=0.5){
								var a=lib.ALX_ability.randomGet();
								var b=lib.ALX_ability.randomGet();
								target.changeAbilityRank(a,-1);
								player.changeAbilityRank(a,1);
								target.changeAbilityRank(b,-1);
								player.changeAbilityRank(b,1);
							}else{
								target.loseHp(0.4);
								player.recover(0.4);
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:12,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_shenyangchaohunzhou":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_CQhun>=5;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(1000).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							target.gainAbnormalState(4,'weak');
							if(target.persistentSkill.ALX_immuneToAbnormalState>0){
								target.changePersistentSkill(3,'ALX_shenyangchaohunzhou');
								target.storage.ALX_shenyangchaohunzhou=player;
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeHun(-5);
				},
				ai:{
					order:12.5,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"_ALX_shenyangchaohunzhou":{
				trigger:{
					player:"phaseEnd",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_shenyangchaohunzhou>0;
				},
				content:function(){
					var target=player.storage.ALX_shenyangchaohunzhou;
					player.loseHp(0.3);
					target.recover(0.3);
				},
			},
			"ALX_lingtaozhihun":{
				nobracket:true,
				marktext:"灵",
				intro:{
					content:'传奇莎莎的传奇魂',
				},
				mark:true,
				init:function(player,skill){
					player.storage.ALX_CQhun=0;
					player.syncStorage('ALX_CQhun');
					player.markSkill('ALX_CQhun');
					setTimeout(function(){
						game.log(player,'开启了传奇魂：灵涛之魂');
						for(var i=0;i<player.node.marks.childNodes.length;i++){
							if(player.node.marks.childNodes[i].name=='ALX_lingtaozhihun'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_lingtaozhihun.jpg');
								player.node.marks.childNodes[i].innerHTML='';
							};
							if(player.node.marks.childNodes[i].name=='ALX_CQhun'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_CQhun.jpg');
							};
						};
					},100);
				},
				CQhunPerPhase:1,
				group:["ALX_lingtaozhihun_gameStart","ALX_lingtaozhihun_recover"],
				subSkill:{
					"gameStart":{
						trigger:{
							global:"gameStart",
						},
						forced:true,
						content:function (){
							player.changeAllAbilityRank();
						},
					},
					"recover":{
						trigger:{
							player:"recoverBegin",
						},
						forced:true,
						content:function (){
							trigger.num=trigger.num*3;
						},
					},
				},
			},
			"ALX_chunmuzhixin1":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_chunmuzhixin1'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target==player;
				},
				content:function(){
					player.recover(player.maxHp*0.5);
					player.changePersistentSkill(4,'ALX_chunmuzhixin1');
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.hp<=1) return 1;
							return ;
						},
					},
				},
			},
			"_ALX_chunmuzhixin1":{
				trigger:{
					player:"damageAfter",
				},
				forced:true,
				filter:function (event,player){
					return player.persistentSkill.ALX_chunmuzhixin1>0;
				},
				content:function (){
					player.recover(player.maxHp*0.2);
				},
			},
			"ALX_fusu":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_fusu'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;;
				},
				content:function(){
					'step 0'
					target.damage(400).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeHun();
							target.changeAbilityRank('defenseE',[-1,-2].randomGet());
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_linzongmihunjue":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_CQhun>=5;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(1000).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							target.gainAbnormalState(4,'parasitic');
							if(target.persistentSkill.ALX_immuneToAbnormalState>0&&Math.random()<=0.5){
								target.clearPersistentSkill();
							};
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeHun(-5);
				},
				ai:{
					order:12.5,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_senluozhihun":{
				nobracket:true,
				marktext:"森",
				intro:{
					content:'传奇米奥的传奇魂',
				},
				mark:true,
				init:function(player,skill){
					player.storage.ALX_CQhun=0;
					player.syncStorage('ALX_CQhun');
					player.markSkill('ALX_CQhun');
					setTimeout(function(){
						game.log(player,'开启了传奇魂：森罗之魂');
						for(var i=0;i<player.node.marks.childNodes.length;i++){
							if(player.node.marks.childNodes[i].name=='ALX_senluozhihun'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_senluozhihun.jpg');
								player.node.marks.childNodes[i].innerHTML='';
							};
							if(player.node.marks.childNodes[i].name=='ALX_CQhun'){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_CQhun.jpg');
							};
						};
					},100);
				},
				CQhunPerPhase:1,
				group:["ALX_senluozhihun_gameStart","ALX_senluozhihun_attack"],
				subSkill:{
					"gameStart":{
						trigger:{
							global:"gameStart",
						},
						forced:true,
						content:function (){
							player.changeAllAbilityRank();
						},
					},
					"attack":{
						trigger:{
							source:"damageEnd",
						},
						forced:true,
						content:function (){
							trigger.num=trigger.num*2;
						},
					},
				},
			},
			"ALX_ningbing":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attribute'],
				pp:8,
				filter:function (event,player){
					return player.storage['ALX_ningbing'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target==player;
				},
				content:function(){
					player.recover(player.maxHp*0.3);
					player.changeAbilityRank('defenseC',1);
					player.changeAbilityRank('defenseE',1);
				},
				ai:{
					order:12,
					result:{
						player:function(player){
							if(player.hp<=1) return 1;
							return ;
						},
					},
				},
			},
			"ALX_jingqiliangchen":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				pp:6,
				filter:function (event,player){
					return player.storage['ALX_jingqiliangchen'+'_pp']>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(500).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							player.changeHun();
							target.changeAbilityRank('defenseE',[-2,-3].randomGet());
							if(Math.random()<=0.65) target.clearPersistentSkill();
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
				},
				ai:{
					order:11,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_hanbinghualian":{
				nobracket:true,
				enable:'phaseUse',
				ALX_skill_type:['ALX_enable','ALX_attack'],
				filter:function (event,player){
					return player.storage.ALX_CQhun>=5;
				},
				filterTarget:function(card,player,target){
					return target!=player&&get.distance(player,target,'attack')<=1;
				},
				content:function(){
					'step 0'
					target.damage(1200).type='exceptional';
					'step 1'
					if(target.persistentSkill.disableEffect==undefined){
						if(result.miss!=true&&result.invalid!=true){
							target.gainAbnormalState(3,'frostbite');
							player.changeAbilityRank(Math.round((player.storage.ALX_CQhun-5)/2));
						};
					}else{
						game.log(player,'的技能附加效果失效');
					};
					'step 2'
					player.changeHun(-5);
				},
				ai:{
					order:12.5,
					result:{
						target:-1,
					},
					expose:0.75,
				},
			},
			"ALX_yueguangweiqing":{
				nobracket:true,
				marktext:"月",
				intro:{
					content:'极光的传奇魂',
				},
				mark:true,
				init:function(player,skill){
				player.storage.ALX_CQhun=0;
				player.syncStorage('ALX_CQhun');
				player.markSkill('ALX_CQhun');
				setTimeout(function(){
					game.log(player,'开启了传奇魂：月光尾琴');
					for(var i=0;i<player.node.marks.childNodes.length;i++){
						if(player.node.marks.childNodes[i].name=='ALX_yueguangweiqing'){
							player.node.marks.childNodes[i].style.backgroundImage='url("https://coding.net/u/aurora72/p/weeklyBoss/git/raw/master/yueguangweiqing.jpg")';
							player.node.marks.childNodes[i].innerHTML='';
						};
						if(player.node.marks.childNodes[i].name=='ALX_CQhun'){
							player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/ALX_CQhun.jpg');
						};
					};
				},100);
				},
				CQhunPerPhase:1,
				group:["ALX_yueguangweiqing_phaseEnd","ALX_yueguangweiqing_attack"],
				subSkill:{
					"phaseEnd":{
						trigger:{
							player:"phaseEnd",
						},
						forced:true,
						filter:function(event,player){
						    return Math.random()<=0.13;
						},
						content:function (){
							for(var i=0;i<game.players.length;i++){
								 if(game.players[i]!=player) game.players[i].gainAbnormalState(2,'sleep');
							};
							player.chat('聆听乐声，睡去');
						},
					},
					"attack":{
						trigger:{
							source:"damageEnd",
						},
						forced:true,
						filter:function(event,player){
							return event.type!=undefined;
						},
						content:function (){
							player.changeAllAbility(234);
						},
					},
				},
			},
			
		},
		translate:{
			"Aurora":'极光',
			"ALX_ningbing":"凝冰",
			"ALX_ningbing_info":"威力：-1<br>PP：8<br>属性攻击<br>使用后回复自身30%最大体力值并提升双防一级",
			"ALX_jingqiliangchen":"惊起梁尘",
			"ALX_jingqiliangchen_info":"威力：500<br>PP：6<br>特殊攻击<br>获得1魂。削弱对方特防2-3级。50%清空对方技能持续性效果",
			"ALX_hanbinghualian":"寒冰化莲",
			"ALX_hanbinghualian_info":"威力：1200<br>特殊攻击<br>传奇必杀<br>消耗5魂。令对方冻伤，持续3个回合，提升自身全属性（魂/2）级",
			"ALX_yueguangweiqing":"月光尾琴",
			"ALX_yueguangweiqing_info":"威力：-1<br>传奇被动<br>每回合末获得1魂。回合结束后有13%概率使其他角色睡眠，持续2个回合。每次造成伤害时提升全能力234点",
			"ALX_chuanqibolu":"传奇波鲁",
			"ALX_ranshaozhixin":"燃烧之心",
			"ALX_ranshaozhixin_info":"威力：-1<br>PP：6<br>属性攻击<br>使用后4回合，受到攻击时削弱对方任意2项属性1级",
			"ALX_fentian":"焚天",
			"ALX_fentian_info":"威力：400<br>PP：6<br>特殊攻击<br>攻击对方单体，获得1魂。100%概率提升特攻和暴击1级",
			"ALX_luhuojinghunren":"戮火净魂刃",
			"ALX_luhuojinghunren_info":"威力：1000<br>特殊攻击<br>传奇必杀<br>消耗5魂。令对方烧伤，对免疫目标造成额外50%伤害",
			"ALX_lingyanzhihun":"灵焰之魂",
			"ALX_lingyanzhihun_info":"威力：-1<br>传奇被动<br>每回合末获得1魂。上场即获得全属性1级且造成伤害的17%用于回复自己",
			"ALX_chuanqishasha":"传奇莎莎",
			"ALX_chunjingzhixin":"纯净之心",
			"ALX_chunjingzhixin_info":"威力：-1<br>PP：6<br>属性攻击<br>解除自身异常状态并免疫5回合",
			"ALX_yanmei":"湮没",
			"ALX_yanmei_info":"威力：400<br>PP：6<br>特殊攻击<br>攻击对方单体，获得1魂。吸取对方任意属性2项1级或0.4点体力值",
			"ALX_shenyangchaohunzhou":"深洋超魂咒",
			"ALX_shenyangchaohunzhou_info":"威力：1000<br>特殊攻击<br>传奇必杀<br>消耗5魂。令对方衰弱，吸取免疫目标0.3点体力值，持续3回合",
			"ALX_lingtaozhihun":"灵涛之魂",
			"ALX_lingtaozhihun_info":"威力：-1<br>传奇被动<br>每回合末获得1魂。上场即获得全属性1级且回复效果提升至3倍",
			"ALX_chuanqimiao":"传奇米奥",
			"ALX_chunmuzhixin1":"春沐之心",
			"ALX_chunmuzhixin1_info":"威力：-1<br>PP：6<br>属性攻击<br>回复自己一半体力值。4回合内，每次被攻击回复自己20%最大体力值",
			"ALX_fusu":"复苏",
			"ALX_fusu_info":"威力：400<br>PP：6<br>特殊攻击<br>攻击对方单体，获得1魂。削弱对方特防1-2级",
			"ALX_linzongmihunjue":"林踪迷魂诀",
			"ALX_linzongmihunjue_info":"威力：1000<br>特殊攻击<br>传奇必杀<br>消耗5魂。令对方寄生，50%概率清空免疫目标持续效果",
			"ALX_senluozhihun":"森罗之魂",
			"ALX_senluozhihun_info":"威力：-1<br>传奇被动<br>每回合末获得1魂。上场即获得全属性1级且伤害增加100%",
			"ALX_wuyaowangwanquanti":"巫妖王",
			"ALX_W_linliehandong":"凛冽寒冬",
			"ALX_W_linliehandong_info":"威力：1000<br>PP：10<br>完全体必杀技<br>特殊攻击<br>必中，令对方冰冻；若对方已冰冻则清除对方冰冻提升自身特攻数值300点",
			"ALX_shizujulong":"始祖巨龙",
			"ALX_zhonglibenghuai":"重力崩坏",
			"ALX_zhonglibenghuai_info":"威力：-1<br>PP：6<br>属性攻击<br>削弱对方速度和防御数值25%，附带巨龙祖魂累积的伤害。图腾存在时若附带伤害高于1则清空目标增益属性等级并保护属性5回合",
			"ALX_wujinfenzheng":"无尽纷争",
			"ALX_wujinfenzheng_info":"威力：400<br>PP：6<br>普通攻击<br>获得1魂。提升双防和攻击2级。回复自己伤害*150%+20%最大体力值",
			"ALX_julongtuteng":"巨龙图腾",
			"ALX_julongtuteng_info":"威力：-1<br>属性攻击<br>传奇图腾<br>消耗9魂。召唤图腾-巨龙图腾。图腾效果：承受我方亚比受到伤害的50%；图腾存在时我方回复体力时获得回复值（包括溢出部分）*50%的护盾",
			"ALX_julongzuhun":"巨龙祖魂",
			"ALX_julongzuhun_info":"威力：-1<br>传奇被动<br>上场9魂，每回合1魂。上场获得双防和攻击300点。受到伤害减免40%且减免部分自动累积在使用重力崩坏时全数反击给对方。每受到1%最大体力值伤害提升1%双防数值",
			"ALX_lingyezhanqiZ":"零夜战骑",
			"ALX_lingyezhanqi_qishiqiyueZ":"坐骑召唤",
			"ALX_lingyezhanqi_qishiqiyueZ_info":"威力：-1<br>坐骑召唤<br>游戏开始，召唤契约坐骑，提升35%伤害抗性、200点特攻和300点速度",
			"ALX_huiyuezhanqiZ":"辉月战骑",
			"ALX_huiyuezhanqi_qishiqiyueZ":"坐骑召唤",
			"ALX_huiyuezhanqi_qishiqiyueZ_info":"威力：-1<br>坐骑召唤<br>游戏开始，召唤契约坐骑，提升40%伤害、150点普攻和200点双防",
			"ALX_xuejingnvhuang":"雪净女皇",
			"ALX_zhuzaizhiyin":"主宰之印",
			"ALX_zhuzaizhiyin_info":"威力：-1<br>PP：1<br>属性攻击<br>本回合免受伤害，降低对方伤害能力50%（80%），持续4回合",
			"ALX_miguanglingyu":"迷光领域",
			"ALX_miguanglingyu_info":"威力：-1<br>PP：5<br>属性攻击<br>受到攻击则削弱对方双攻3级（受到攻击则回复自己0.8体力值并削弱对方双攻3级）",
			"ALX_shuanglingpo":"霜灵破",
			"ALX_shuanglingpo_info":"威力：-1<br>PP：5<br>属性攻击<br>牺牲自己（失去2点体力），削弱对方全属性2级",
			"ALX_tianbingjue":"天冰诀",
			"ALX_tianbingjue_info":"威力：300<br>PP：10<br>特殊攻击<br>必中，令对方冰冻（令对方冰冻并有一定概率停止行动，持续3回合）",
			"ALX_xuejingnvhuang_bianshen":"究极变身",
			"ALX_xuejingnvhuang_bianshen_info":"威力：-1<br>究极变身<br>究极变身，全方面提升自身能力并回复全PP值",
			"ALX_lingyezhanqi":"零夜战骑",
			"ALX_qijihujia":"奇迹护甲",
			"ALX_qijihujia_info":"威力：-1<br>PP：5<br>属性攻击<br>提升自身特攻2级，双防、暴击和速度1（2）级；若本回合未受到伤害则回复0.7（1.4）点体力值",
			"ALX_qishipaoxiao":"骑士咆哮",
			"ALX_qishipaoxiao_info":"威力：300<br>PP：10<br>特殊攻击<br>削弱对方特防1-4（2-4）级，若使用技能前未受到伤害，则70%（75%）概率令对方害怕",
			"ALX_xinyuepoyun":"新月破云",
			"ALX_xinyuepoyun_info":"威力：300<br>PP：5<br>特殊攻击<br>命中则削弱对方命中1-2（3-4）级，若速度比对方快则伤害提升50%（150%）并且提升自身闪避2级",
			"ALX_jilezhiren":"极乐之刃",
			"ALX_jilezhiren_info":"威力：400<br>PP：5<br>特殊攻击<br>清空对方增益属性并吸取对方0.4（0.75）点体力值，本回合完全击杀对方则提升全属性2（3）级",
			"ALX_lingyezhanqi_qishiqiyue":"坐骑召唤",
			"ALX_lingyezhanqi_qishiqiyue_info":"威力：-1<br>坐骑召唤<br>召唤契约坐骑，提升35%伤害抗性、200点特攻和300点速度",
			"ALX_huiyuezhanqi":"辉月战骑",
			"ALX_baizhanbudai":"百战不殆",
			"ALX_baizhanbudai_info":"威力：-1<br>PP：5<br>属性攻击<br>超过自己当前体力值10%的部分伤害降低50%（75%），持续10（13）回合",
			"ALX_qishiyizhi":"骑士意志",
			"ALX_qishiyizhi_info":"威力：-1<br>PP：5<br>属性攻击<br>提升自身攻击2级，双防、暴击和速度1（2）级；下回合技能威力提高50%",
			"ALX_yuhongguanri":"玉虹贯日",
			"ALX_yuhongguanri_info":"威力：400<br>PP：10<br>普通攻击<br>40%（100%）的伤害转化回复自己，体力比例比对方高则伤害提升50%（150%）",
			"ALX_jianyingwuhen":"剑影无痕",
			"ALX_jianyingwuhen_info":"威力：300<br>PP：5<br>普通攻击<br>命中后3（5）回合免疫异常状态，属性被削弱则削弱对方全属性1级",
			"ALX_huiyuezhanqi_qishiqiyue":"坐骑召唤",
			"ALX_huiyuezhanqi_qishiqiyue_info":"威力：-1<br>坐骑召唤<br>召唤契约坐骑，提升40%伤害、150点普攻和200点双防",
			"ALX_zhuzhao":"烛照",
			"ALX_liehuofen":"烈火焚",
			"ALX_liehuofen_info":"威力：500<br>PP：6<br>普通攻击<br>获得1元气。提升自身攻击2级",
			"ALX_huowuyingfei":"火舞鹰飞",
			"ALX_huowuyingfei_info":"威力：500<br>PP：6<br>普通攻击<br>获得1元气。自身攻击等级高于2时造成2倍伤害且吸取双防各2级",
			"ALX_yehuocongsheng":"野火丛生",
			"ALX_yehuocongsheng_info":"威力：-1<br>PP：6<br>属性攻击<br>获得1元气并回复自身最大血量50%（5元气时，超元气强化）",
			"ALX_yehuocongshengQH":"野火丛生",
			"ALX_yehuocongshengQH_info":"威力：1200<br>普通攻击<br>超元气·破<br>消耗5元气。回复自身最大血量50%且提升50%自身伤害3回合",
			"ALX_luanshilieyan":"乱世烈炎",
			"ALX_luanshilieyan_info":"威力：1200<br>普通攻击<br>异次元必杀<br>消耗5元气。提升自身全属性1级且使对方混乱",
			"ALX_taiyangzhihun":"太阳之魂",
			"ALX_taiyangzhihun_info":"威力：-1<br>异次元被动<br>每回合末1元气。自身攻击每提升1级，则我方任意属性提升2级",
			"ALX_heerweier":"赫尔薇尔",
			"ALX_henengbaohu":"核能保护",
			"ALX_henengbaohu_info":"威力：500<br>PP：6<br>普通攻击<br>获得1元气。获得0.8点护盾",
			"ALX_jisutuijin":"急速推进",
			"ALX_jisutuijin_info":"威力：-1<br>PP：6<br>属性攻击<br>提升自己速度4级和命中2级",
			"ALX_chaoguangsuhuopao":"超光速火炮",
			"ALX_chaoguangsuhuopao_info":"威力：200<br>PP：6<br>普通攻击<br>攻击对方单体，获得1元气（5元气时，超元气强化）",
			"ALX_chaoguangsuhuopaoQH":"超光速火炮",
			"ALX_chaoguangsuhuopaoQH_info":"威力：1200<br>普通攻击<br>超元气·破<br>消耗5元气。攻击对方单体，令目标伤害降低1点，持续3回合",
			"ALX_jiujibaopo":"究极爆破",
			"ALX_jiujibaopo_info":"威力：1200<br>普通攻击<br>异次元必杀<br>消耗5元气。速度等级比对方高则威力提升至1.5倍",
			"ALX_zhongduanjijia":"终端机甲",
			"ALX_zhongduanjijia_info":"威力：-1<br>异次元被动<br>每回合末1元气。上场额外获得2元气，每次攻击使对方全属性降低100点",
			"ALX_zhurong":"祝融",
			"ALX_yanzhibaopoZS":"灼烧",
			"ALX_yanzhibaopo":"炎之爆破",
			"ALX_yanzhibaopo_info":"威力：500<br>PP：6<br>普通攻击<br>获得1元气。对对方单体附加灼烧状态",
			"ALX_huolingrusui":"火灵入髓",
			"ALX_huolingrusui_info":"威力：500<br>PP：6<br>普通攻击<br>获得1元气。吸取对方攻击2级且获得自身最大血量20%的护盾",
			"ALX_shenghuocuixin":"圣火摧心",
			"ALX_shenghuocuixin_info":"威力：-1<br>PP：6<br>属性攻击<br>获得1元气并吸取对方双御2级（5元气时，超元气强化）",
			"ALX_shenghuocuixinQH":"圣火摧心",
			"ALX_shenghuocuixinQH_info":"威力：1200<br>普通攻击<br>超元气·破<br>消耗5元气。吸取对方防御2级且保护属性5回合",
			"ALX_fentianzhinu":"焚天之怒",
			"ALX_fentianzhinu_info":"威力：300<br>普通攻击<br>异次元必杀<br>消耗5元气。攻击目标2-6次，必定暴击",
			"ALX_shenzhijuangu":"神之眷顾",
			"ALX_shenzhijuangu_info":"威力：-1<br>异次元被动<br>每回合末1元气。攻击附带灼烧状态的敌人伤害翻倍，攻击无灼烧的目标则伤害的100%转化回复自己",
			"ALX_datiangou":"大天狗",
			"ALX_luanjianshenyin":"乱剑神隐",
			"ALX_luanjianshenyin_info":"威力：500<br>PP：6<br>普通攻击<br>获得1元气。速度比对方快则概率令目标停止行动1回合，否则提升速度1级和速度100点",
			"ALX_yuhuazhongsheng":"羽化重生",
			"ALX_yuhuazhongsheng_info":"威力：-1<br>PP：3<br>属性攻击<br>本回合若受到攻击则免疫此次伤害并回复满状态。若未受到攻击则提升全属性3级。使用次数越多，成功率越低",
			"ALX_xuerenfengbao":"血刃风暴",
			"ALX_xuerenfengbao_info":"威力：125<br>PP：6<br>普通攻击<br>攻击目标4次，每次35%概率获得1元气并使目标混乱（4元气时，超元气强化）",
			"ALX_xuerenfengbaoQH":"血刃风暴",
			"ALX_xuerenfengbaoQH_info":"威力：130<br>普通攻击<br>超元气·破<br>消耗4元气。攻击目标10次，若目标混乱则提升至20次",
			"ALX_ningshenchuanxin":"凝神穿心",
			"ALX_ningshenchuanxin_info":"威力：1300<br>普通攻击<br>异次元必杀<br>消耗4元气。回复60%已损失体力值，附带60%已损失体力值的伤害",
			"ALX_shihunzhiyi":"蚀魂之翼",
			"ALX_shihunzhiyi_info":"威力：-1<br>异次元被动<br>每回合末1元气。每在场1回合，暴击率+20%。每次攻击暴击则令目标2回合受到的伤害增加50%，可叠加",
			"ALX_youying":"幽荧",
			"ALX_zuihuayin":"醉花阴",
			"ALX_zuihuayin_info":"威力：500<br>PP：6<br>特殊攻击<br>获得1元气。削弱对方特防2级",
			"ALX_liuyingfeiwu":"流荧飞舞",
			"ALX_liuyingfeiwu_info":"威力：500<br>PP：6<br>特殊攻击<br>获得1元气。对特防等级不高于-2的角色造成2倍伤害且吸取双攻各2级",
			"ALX_qietingfengyin":"且听风吟",
			"ALX_qietingfengyin_info":"威力：-1<br>PP：6<br>属性攻击<br>获得1元气并回复已损失血量60%（5元气时，超元气强化）",
			"ALX_qietingfengyinQH":"且听风吟",
			"ALX_qietingfengyinQH_info":"威力：1200<br>特殊攻击<br>超元气·破<br>消耗5元气。回复已损失血量60%且减少50%自身所受伤害3回合",
			"ALX_menghuanmili":"梦幻迷离",
			"ALX_menghuanmili_info":"威力：1200<br>特殊攻击<br>异次元必杀<br>消耗5元气。降低对方全属性1级且使对方睡眠3回合",
			"ALX_taiyinzhishen":"太阴之身",
			"ALX_taiyinzhishen_info":"威力：-1<br>异次元被动<br>每回合末1元气。其他角色特防每降低1级，则我方任意属性提升2级",
			"ALX_yuzaohuang":"玉藻皇",
			"ALX_yaohulingyu":"妖狐灵玉",
			"ALX_yaohulingyu_info":"威力：500<br>PP：6<br>特殊攻击<br>获得1元气。扣除目标1元气",
			"ALX_shenzhimeihuo":"神之魅惑",
			"ALX_shenzhimeihuo_info":"威力：-1<br>PP：6<br>属性攻击<br>获得1元气。令目标下回合30%概率命中错误目标",
			"ALX_jiuweibihu":"九尾庇护",
			"ALX_jiuweibihu_info":"威力：-1<br>PP：6<br>属性攻击<br>获得1元气并回复50%最大体力值（5元气时，超元气强化）",
			"ALX_jiuweibihuQH":"九尾庇护",
			"ALX_jiuweibihuQH_info":"威力：1200<br>特殊攻击<br>超元气·破<br>消耗5元气。回复50%最大体力值并提升双防1级",
			"ALX_xuyezhishang":"须野之殇",
			"ALX_xuyezhishang_info":"威力：1200<br>特殊攻击<br>异次元必杀<br>消耗5元气。令目标伤害降低50%，持续5回合",
			"ALX_shashengyizhi":"杀生意志",
			"ALX_shashengyizhi_info":"威力：-1<br>异次元被动<br>每回合末1元气。若自身在场，则敌方全场属性无法提升",
			"ALX_yiciyuanzhihuiwang":"智慧王",
			"ALX_qixing":"七星",
			"ALX_qixing_info":"威力：500<br>PP：6<br>特殊攻击<br>获得1元气。吸取目标任意4项属性1级令目标附带智慧标记，出手时未受伤害则额外攻击一次",
			"ALX_linglong":"玲珑",
			"ALX_linglong_info":"威力：-1<br>PP：1<br>属性攻击<br>本回合反弹2倍所有攻击技能造成的伤害，反弹成功则回复所有技能pp值1点和已损失血量并令攻击者附带智慧标记",
			"ALX_xingjieyuansha":"星界元刹",
			"ALX_xingjieyuansha_info":"威力：500<br>PP：6<br>特殊攻击<br>获得1元气。消耗目标智慧标记，伤害提升至（1+智慧标记数/2）倍并回复（1+智慧标记数）*1点全PP（4元气时，超元气强化）",
			"ALX_xingjieyuanshaQH":"星界元刹",
			"ALX_xingjieyuanshaQH_info":"威力：1300<br>特殊攻击<br>超元气·破<br>消耗4元气。消耗目标智慧标记，伤害提升至（1+智慧标记数/2）倍并回复（1+智慧标记数）*1点全PP和元气",
			"ALX_nizhuanweilai":"逆转未来",
			"ALX_nizhuanweilai_info":"威力：1300<br>特殊攻击<br>异次元必杀<br>消耗4元气。倒置目标增益属性，并触发技能玲珑",
			"ALX_juelun":"绝伦",
			"ALX_juelun_info":"威力：-1<br>异次元被动<br>每回合末1元气。敌方任意目标属性提升则自身作同样提升，50%概率翻倍提升",
			"ALX_heitaoK":"黑桃K",
			"ALX_heitaokapai":"黑桃卡牌",
			"ALX_heitaokapai_info":"威力：500<br>PP：6<br>特殊攻击<br>获得1元气。伤害的50%转化回复自己",
			"ALX_qianfu":"潜伏",
			"ALX_qianfu_info":"威力：-1<br>PP：6<br>属性攻击<br>使用后5回合受到伤害降低30%，对超暗系克制的角色造成的伤害提升至3倍",
			"ALX_yijialuanzhen":"以假乱真",
			"ALX_yijialuanzhen_info":"威力：500<br>PP：6<br>特殊攻击<br>获得1元气。提升特攻和防御1级（5元气时，超元气强化）",
			"ALX_yijialuanzhenQH":"以假乱真",
			"ALX_yijialuanzhenQH_info":"威力：800<br>特殊攻击<br>超元气·破<br>消耗5元气。提升特攻和防御1级，50%概率本回合不被命中",
			"ALX_huoluanxuanshang":"祸乱悬赏",
			"ALX_huoluanxuanshang_info":"威力：800<br>特殊攻击<br>异次元必杀<br>消耗5元气。伤害超过0.5则提升全属性1级",
			"ALX_yaoyizhixin":"妖异之心",
			"ALX_yaoyizhixin_info":"威力：-1<br>异次元被动<br>每回合末1元气。当自己被削弱的属性时，50%概率翻倍提升",
			"ALX_yisaer":"伊撒尔",
			"ALX_jinglingwangzhijian":"精灵王之剑",
			"ALX_jinglingwangzhijian_info":"威力：500<br>PP：6<br>普通攻击<br>获得1元气。25%概率召唤剑阵控制目标，令其停止行动1回合",
			"ALX_ciyuanzhuanhua":"次元转化",
			"ALX_ciyuanzhuanhua_info":"威力：-1<br>PP：6<br>属性攻击<br>提升自己攻击2级，若2回合内被攻击则吸取攻击者增益属性并保护2回合",
			"ALX_shengyuanlongpo":"圣元·龙破",
			"ALX_shengyuanlongpo_info":"威力：500<br>PP：6<br>普通攻击<br>获得1元气。削弱目标防御和闪避2级（4元气时，超元气强化）",
			"ALX_shengyuanlongpoQH":"圣元·龙破",
			"ALX_shengyuanlongpoQH_info":"威力：1300<br>普通攻击<br>超元气·破<br>消耗4元气。无视护属削弱目标防御和闪避2级，暴击则削弱效果翻倍",
			"ALX_nizhuanqiankun":"逆转乾坤",
			"ALX_nizhuanqiankun_info":"威力：1300<br>普通攻击<br>异次元必杀<br>消耗4元气。威力巨大，回复自己1.5点体力值，使用时若体力低于一半则威力翻倍",
			"ALX_tianxuanzhizi":"天选之子",
			"ALX_tianxuanzhizi_info":"威力：-1<br>异次元被动<br>每回合末1元气。技能暴击率+30%。获得伤害抗性与伤害提升效果提升15%",
			"ALX_chuanqishengyunvhuang":"圣羽女皇",
			"ALX_tianjianluanshen":"天剑乱神",
			"ALX_tianjianluanshen_info":"威力：-1<br>PP：6<br>属性攻击<br>获得1魂。1回合内免疫攻击特效且获得70%伤害抗性，扣除目标最大体力值的10%并提升自己全属性1级",
			"ALX_baiheqingyu":"白荷轻语",
			"ALX_baiheqingyu_info":"威力：400<br>PP：6<br>普通攻击<br>必中，获得1魂。命中必定触发：额外吸取0.5+伤害*1000个位数×0.12点体力值",
			"ALX_qianshunfenghou":"千瞬封喉",
			"ALX_qianshunfenghou_info":"威力：1000<br>普通攻击<br>传奇必杀<br>消耗4魂。3回合内目标数值和属性等级无法提升，体力无法回复。触发技能天剑乱神",
			"ALX_shengyulingdong":"圣羽灵动",
			"ALX_shengyulingdong_info":"威力：-1<br>传奇被动<br>每回合末获得1魂。上场获得全属性数值500点和速度1000点。攻击时增益属性等级之和不超过16则触发技能天剑乱神",
			"ALX_shenjilingfeng":"凌风",
			"ALX_shenjihunyou":"神迹魂佑",
			"ALX_shenjihunyou_info":"威力：-1<br>PP：10<br>属性攻击<br>锁定全场属性等级2回合，回复自身0.3点加最大体力值6%X速度等级（速度等级为负数时，速度等级不影响回复量）",
			"ALX_longhunyoushi":"龙魂佑世",
			"ALX_longhunyoushi_info":"威力：800<br>PP：10<br>特殊攻击<br>40%概率令对方麻痹",
			"ALX_yidilongyou":"翼帝龙佑",
			"ALX_yidilongyou_info":"威力：-1<br>神迹天赋<br>每回合70%概率提升自身速度等级1-2级",
			"ALX_shenjidika":"帝卡",
			"ALX_shenjihunshan":"神迹魂闪",
			"ALX_shenjihunshan_info":"威力：-1<br>PP：10<br>属性攻击<br>免疫异常状态3回合，2回合内受到攻击时50%概率使用闪影抵挡攻击",
			"ALX_longhunshanshi":"龙魂闪世",
			"ALX_longhunshanshi_info":"威力：800<br>PP：10<br>特殊攻击<br>必中，40%概率令对方混乱",
			"ALX_yingdilongshan":"影帝龙闪",
			"ALX_yingdilongshan_info":"威力：-1<br>神迹天赋<br>若回合中未受到直接攻击则回合末回复25%最大体力值",
			"ALX_longtaizi":"龙太子",
			"ALX_fanyunhaixiao":"翻云海啸",
			"ALX_fanyunhaixiao_info":"威力：-1<br>PP：10<br>属性攻击<br>3回合内保护自身属性并提升自身20%伤害抗性",
			"ALX_longtengfuhai":"龙腾覆海",
			"ALX_longtengfuhai_info":"威力：800<br>PP：10<br>普通攻击<br>必中，40%倒置对方增益属性，伤害的20%用于回复自身体力值",
			"ALX_donghaixuetong":"东海血统",
			"ALX_donghaixuetong_info":"威力：-1<br>神迹天赋<br>每回合回复自身35%已损失体力值，当自身体力值低于50%时提升自身任意属性共3级",
			"ALX_shenjimingwang":"明王",
			"ALX_shenjihunpo":"神迹魂破",
			"ALX_shenjihunpo_info":"威力：-1<br>PP：10<br>属性攻击<br>回复自身35%最大体力值并恢复自身被削弱的属性",
			"ALX_longhunposhi":"龙魂破世",
			"ALX_longhunposhi_info":"威力：800<br>PP：10<br>普通攻击<br>必中，伤害的40%用于回复自身",
			"ALX_judilongpo":"巨帝龙破",
			"ALX_judilongpo_info":"威力：-1<br>神迹天赋<br>当受到攻击则回合末提升自身0.5点最大体力值并回复0.5点体力",
			"ALX_cangtian":"苍天",
			"ALX_canghuaxu":"苍华旭",
			"ALX_canghuaxu_info":"威力：-1<br>PP：10<br>属性攻击<br>回复自身0.6点体力值，持续吸取对方20%伤害抗性3回合",
			"ALX_tianduhuaxu":"天渡化虚",
			"ALX_tianduhuaxu_info":"威力：800<br>PP：10<br>普通攻击<br>必中，100%提升自身速度1级，自身速度等级越高造成越高的额外伤害",
			"ALX_dongfangtaixuan":"东方太玄",
			"ALX_dongfangtaixuan_info":"威力：-1<br>神迹天赋<br>每次受到攻击则70%获得东方太玄印记，当印记叠满4层时则消耗印记提升自身全属性2级",
			"ALX_shenjixinge":"辛格",
			"ALX_shengmingzhige":"生命之歌",
			"ALX_shengmingzhige_info":"威力：-1<br>PP：10<br>属性攻击<br>回复自身40%最大体力值，60%提升自身双防1级",
			"ALX_dadikuangxiao":"大地狂啸",
			"ALX_dadikuangxiao_info":"威力：800<br>PP：10<br>特殊攻击<br>必中，伤害的30%用于回复自身，若25%概率制造一个与回复量一致护盾",
			"ALX_shengsiwuji":"生死无极",
			"ALX_shengsiwuji_info":"威力：-1<br>神迹天赋<br>每损失5%最大体力值则技能大地狂啸威力提升10点",
			"ALX_guiminghu":"鬼冥冴",
			"ALX_mingkongwujin":"冥空无尽",
			"ALX_mingkongwujin_info":"威力：-1<br>PP：10<br>属性攻击<br>回复自身45%最大体力值，保护自身属性3回合",
			"ALX_guimingjianfa":"鬼冥剑法",
			"ALX_guimingjianfa_info":"威力：800<br>PP：10<br>普通攻击<br>必中，若出手时未受到过伤害则45%削弱对方双攻1级",
			"ALX_baiguiyujian":"百鬼御剑",
			"ALX_baiguiyujian_info":"威力：-1<br>神迹天赋<br>每次受到攻击则25%令对方诅咒",
			"ALX_huayingji":"花萤姬",
			"ALX_huaguangqingshi":"华光倾世",
			"ALX_huaguangqingshi_info":"威力：-1<br>PP：10<br>属性攻击<br>提升自身40%伤害抗性2回合，削弱对方特防1-2级和自身特攻1-2级",
			"ALX_fuguangmeiying":"浮光魅影",
			"ALX_fuguangmeiying_info":"威力：800<br>PP：10<br>特殊攻击<br>必中，若伤害超过0.8则回复自身40%已损失的体力值",
			"ALX_yanguangliusu":"艳光流苏",
			"ALX_yanguangliusu_info":"威力：-1<br>神迹天赋<br>每回合末60%概率倒置自身属性被削弱的属性",
			"ALX_yanyunana":"焰语娜娜",
			"ALX_yanyubilei":"焰狱壁垒",
			"ALX_yanyubilei_info":"威力：-1<br>PP：10<br>属性攻击<br>2回合内提升自身伤害抗性35%并回复自身35%最大体力值，若自身存在焰语印记则消耗1层使效果翻倍",
			"ALX_mahoushaojiu":"马猴烧酒",
			"ALX_mahoushaojiu_info":"威力：800<br>PP：10<br>特殊攻击<br>必中，斩杀体力低于对方自身最大体力值20%的亚比",
			"ALX_huoyandediyu":"火焰的低语",
			"ALX_huoyandediyu_info":"威力：-1<br>神迹天赋<br>回合开始时，当自身体力值低于最大值35%则获得1层焰语印记",
			"ALX_heiyitiannu":"黑翼·天怒",
			"ALX_tiannuguanghui":"天怒光辉",
			"ALX_tiannuguanghui_info":"威力：-1<br>PP：10<br>属性攻击<br>制造一个1点护盾抵挡伤害，回合开始时将剩余护盾值回复自身",
			"ALX_shenmiaoshu":"神秘奥术",
			"ALX_shenmiaoshu_info":"威力：800<br>PP：10<br>特殊攻击<br>必中，60%概率削弱对方特防和速度各1级",
			"ALX_yixinlingxishou":"翼·心灵吸收",
			"ALX_yixinlingxishou_info":"威力：-1<br>神迹天赋<br>每回合100%概率吸取任意其他亚比攻击外任意属性1-2级",
			"ALX_heiyitongling":"黑翼·瞳灵",
			"ALX_huanhuaxutong":"幻化虚瞳",
			"ALX_huanhuaxutong_info":"威力：-1<br>PP：10<br>属性攻击<br>3回合内每回合35%无效对方攻击",
			"ALX_tongmengqitan":"瞳梦奇谭",
			"ALX_tongmengqitan_info":"威力：800<br>PP：10<br>特殊攻击<br>必中，命中则50%令对方束缚或混乱",
			"ALX_yijileshengling":"翼·极乐生灵",
			"ALX_yijileshengling_info":"威力：-1<br>神迹天赋<br>每回合回复自身0.35点体力值，若本回合未受到攻击则回复效果翻倍",
			"ALX_heiyitiansha":"黑翼·天煞",
			"ALX_feisuozhanyi":"飞梭战意",
			"ALX_feisuozhanyi_info":"威力：-1<br>PP：10<br>属性攻击<br>提升自身速度2级，下回合使用超离子风暴时提升威力200点",
			"ALX_chaolizifengbao":"超离子风暴",
			"ALX_chaolizifengbao_info":"威力：800<br>PP：10<br>普通攻击<br>必中，伤害低于0.8则削弱对方防御1级",
			"ALX_yijisutineng":"翼·极速体能",
			"ALX_yijisutineng_info":"威力：-1<br>神迹天赋<br>每回合末回复自身体力值，回复量为0.03%的速度数值+0.05*速度等级（速度等级为负数时，速度等级不影响回复量）",
			"ALX_shengtangbojue":"圣堂伯爵",
			"ALX_bojueshengxue":"伯爵圣血",
			"ALX_bojueshengxue_info":"威力：-1<br>PP：10<br>属性攻击<br>提升自身抗性40%且当自身受到0.7点以上伤害时提升自身攻击外任意属性5级，持续3回合",
			"ALX_wangluncaijue":"王轮裁决",
			"ALX_wangluncaijue_info":"威力：800<br>PP：10<br>特殊攻击<br>必中，斩杀体力值低于0.1点的亚比，若未触发斩杀则斩杀能力提升0.1点，斩杀成功后重置",
			"ALX_heiyichitongwang":"黑翼·赤瞳王",
			"ALX_heiyichitongwang_info":"威力：-1<br>神迹天赋<br>每次攻击70%概率获得1层赤瞳血印，当自身体力值低于最大值50%时，消耗1层赤瞳之印回复自身40%最大体力值并保护自身属性2回合",
			"ALX_shenjibosaidong":"波塞冬",
			"ALX_shenshengbihu":"神圣庇护",
			"ALX_shenshengbihu_info":"威力：-1<br>PP：3<br>属性攻击<br>回复自己35%最大体力值，下回合免受敌方所有技能效果的影响",
			"ALX_juewangtunshi":"绝望吞噬",
			"ALX_juewangtunshi_info":"威力：800<br>PP：10<br>普通攻击<br>必中，束缚对方并有70%概率削弱对方双攻或双防1级",
			"ALX_wujinzhilang":"无尽之浪",
			"ALX_wujinzhilang_info":"威力：-1<br>神迹天赋<br>每次受到攻击损失8%最大体力值则吸取对方全技能PP1点",
			"ALX_sanjieshishen":"三界弑神",
			"ALX_sanjiehunzhuan":"三界魂转",
			"ALX_sanjiehunzhuan_info":"威力：-1<br>PP：10<br>属性攻击<br>使自身进入人魂或神魂或魔魂状态；人魂状态保护自身属性并提升自身抗性50%；神魂状态提升攻击数值700并免疫异常状态；魔魂状态攻击附带削弱对方防御1级并50%概率令对方混乱",
			"ALX_hunduantianzhao":"魂断天照",
			"ALX_hunduantianzhao_info":"威力：800<br>PP：10<br>普通攻击<br>必中，命中则概率削弱对方速度1级且伤害的15%用于回复自身体力值",
			"ALX_heiyizihunwang":"黑翼·紫魂王",
			"ALX_heiyizihunwang_info":"威力：-1<br>神迹天赋<br>每次使用三界魂转则回复自身0.6点体力值并提升自身任意属性1级",
			"ALX_heiyileiting":"黑翼·雷霆",
			"ALX_hongleizhanjia":"轰雷战甲",
			"ALX_hongleizhanjia_info":"威力：-1<br>PP：10<br>属性攻击<br>技能持续时无法使用，提升自身双防2级，持续3回合；若对方已麻痹则清除对方麻痹回复自身0.5点体力值",
			"ALX_leijieliujie":"雷劫六界",
			"ALX_leijieliujie_info":"威力：800<br>PP：10<br>普通攻击<br>必中，16%概率攻击2次",
			"ALX_yicidianlieshen":"翼·磁电猎神",
			"ALX_yicidianlieshen_info":"威力：-1<br>神迹天赋<br>当自身体力值低于1.8点时，每次受到攻击70%概率令对方麻痹",
			"ALX_heiyiwanjun":"黑翼·万钧",
			"ALX_bujuezhanyi":"不绝战意",
			"ALX_bujuezhanyi_info":"威力：-1<br>PP：10<br>属性攻击<br>提升全场超水系和超电系亚比伤害和伤害抗性35%，持续3回合",
			"ALX_yangtaowanji":"洋涛万际",
			"ALX_yangtaowanji_info":"威力：800<br>PP：10<br>特殊攻击<br>必中，24%概率伤害的全部回复自己",
			"ALX_yijiliutianmo":"翼·激流天魔",
			"ALX_yijiliutianmo_info":"威力：-1<br>神迹天赋<br>当自身体力值低于1.8点时，每次受到攻击50%概率令对方害怕",
			"ALX_moyuxingjun":"魔域星君",
			"ALX_sadanzhihuo":"撒旦之火",
			"ALX_sadanzhihuo_info":"威力：-1<br>PP：10<br>属性攻击<br>3回合内每回合末吸取对方15%最大体力值，若持续回合内对方使用属性技能则本回合吸取效果翻倍",
			"ALX_yanxinglingdao":"焰星凌刀",
			"ALX_yanxinglingdao_info":"威力：800<br>PP：10<br>普通攻击<br>必中，提升自身特攻、命中、闪避外任意属性1级，斩杀具有蓝焰之印的亚比",
			"ALX_heiyilanyanwang":"黑翼·蓝焰王",
			"ALX_heiyilanyanwang_info":"威力：-1<br>神迹天赋<br>每次受到致命攻击时有30%概率不死并保留自身1点体力值，令攻击的亚比获得蓝焰之印",
			"ALX_heiyijixing":"黑翼·疾星",
			"ALX_fanxingjishan":"繁星疾闪",
			"ALX_fanxingjishan_info":"威力：-1<br>PP：10<br>属性攻击<br>提升攻击和速度共3级，下回合受到的伤害减少50%",
			"ALX_lvrenbaoji":"绿刃暴击",
			"ALX_lvrenbaoji_info":"威力：800<br>PP：10<br>普通攻击<br>必中，若对方已中毒则额外造成35%固定伤害并转化回复自己",
			"ALX_yixianzongmiying":"翼·仙踪迷影",
			"ALX_yixianzongmiying_info":"威力：-1<br>神迹天赋<br>每回合受到攻击则60%概率令对方中毒，中毒造成的伤害用于回复自身体力值",
			"ALX_wuyaowang":"巫妖王",
			"ALX_bingfengwangzuo":"冰封王座",
			"ALX_bingfengwangzuo_info":"威力：-1<br>PP：10<br>属性攻击<br>回复自身0.7点体力值；提升自身70%伤害抗性且每回合提升自身攻击外任意属性共4级，持续2回合；使用后下回合不能行动",
			"ALX_linliehandong":"凛冽寒冬",
			"ALX_linliehandong_info":"威力：800<br>PP：10<br>特殊攻击<br>必中，80%令对方冰冻；若对方已冰冻则清除对方冰冻提升自身特攻数值200点",
			"ALX_hanshuangaishang":"寒霜哀伤",
			"ALX_hanshuangaishang_info":"威力：-1<br>神迹天赋<br>每回合末扣除任一其他亚比当前体力值30%，若对方已冰冻则扣除的体力用于回复自身",
			"ALX_shenjishengtianyi":"圣天伊",
			"ALX_shenjihunyao":"神迹魂耀",
			"ALX_shenjihunyao_info":"威力：-1<br>PP：10<br>属性攻击<br>清空对方增益属性，1回合内提升自身30%伤害抗性并回复自身30%最大体力值",
			"ALX_longhunyaoshi":"龙魂耀世",
			"ALX_longhunyaoshi_info":"威力：800<br>PP：10<br>普通攻击<br>必中，概率削弱对方防御2级；伤害超过0.5点的部分用于回复自身体力值",
			"ALX_guangdilongyao":"光帝龙耀",
			"ALX_guangdilongyao_info":"威力：-1<br>神迹天赋<br>当自身体力值低于1/2时则概率提升自身全属性1级",
			"ALX_haotian":"浩天",
			"ALX_haoyuanpo":"浩渊破",
			"ALX_haoyuanpo_info":"威力：-1<br>PP：10<br>属性攻击<br>清空全场提升的属性后100%削弱对方速度2级",
			"ALX_tianlongtuxi":"天龙吐息",
			"ALX_tianlongtuxi_info":"威力：800<br>PP：10<br>普通攻击<br>必中，附带自身攻击数值0.05%的额外固定伤害，若当前体力比对方低则同时将额外伤害的2倍回复自己",
			"ALX_xifangtaichen":"西方太辰",
			"ALX_xifangtaichen_info":"威力：-1<br>神迹天赋<br>受到攻击50%概率削弱对方双防2级",
			"ALX_tianshiwang":"天使王",
			"ALX_shengtangzhimen":"圣堂之门",
			"ALX_shengtangzhimen_info":"威力：-1<br>PP：10<br>属性攻击<br>清除对方身上所有持续性技能效果；3回合内受到攻击则回合末回复自身0.5点体力值，若使用时对方体力值超过2则提升自身50%伤害抗性",
			"ALX_tiantangzhijian":"天堂之剑",
			"ALX_tiantangzhijian_info":"威力：800<br>PP：10<br>特殊攻击<br>必中，伤害超过0.5的部分用于回复自身体力值，40%概率无视对方50%的特防数值",
			"ALX_shengxuetianwei":"圣血天威",
			"ALX_shengxuetianwei_info":"威力：-1<br>神迹天赋<br>每损失0.2点体力值则永久提升自身特攻数值100点，最大提升1000点",
			"ALX_shenliaoyue":"神獠月",
			"ALX_yinzhishalu":"银之杀戮",
			"ALX_yinzhishalu_info":"威力：-1<br>PP：10<br>属性攻击<br>引爆全场亚比身上的银月之箭，每引爆1支则吸取对方15%的最大体力值；若完全击杀对方则提升自身特攻数值300点",
			"ALX_qiongcangliuxing":"穹苍流星",
			"ALX_qiongcangliuxing_info":"威力：800<br>PP：10<br>特殊攻击<br>必中，容易暴击；每次命中则令对方附加1支银月之箭",
			"ALX_heiyibailingwang":"黑翼·白灵王",
			"ALX_heiyibailingwang_info":"威力：-1<br>神迹天赋<br>回合末，每当场上有一个单位附加我方的银月之箭时，回复自身0.4点体力值并提升自身攻击外任意属性共3级",
			"ALX_baiyecha":"白夜叉",
			"ALX_mumowushi":"幕末武士",
			"ALX_mumowushi_info":"威力：-1<br>PP：10<br>属性攻击<br>每次受到攻击令技能附加效果无效且提升自身数码系攻击伤害抗性70%，持续5回合",
			"ALX_dongyehuzhidao":"洞爷湖之刀",
			"ALX_dongyehuzhidao_info":"威力：800<br>PP：10<br>普通攻击<br>必中，50%概率无视对方保护属性清空对方增益属性",
			"ALX_baiseemo":"白色恶魔",
			"ALX_baiseemo_info":"威力：-1<br>神迹天赋<br>若攻击未将对方击杀则提升自身100点攻击数值，每回合末回复自己与攻击数值0.045%等量的体力值",
			"ALX_chaofanguiliwanquanti":"超凡鬼厉",
			"ALX_xuegongzi":"血公子",
			"ALX_xuegongzi_info":"威力：-1<br>PP：10<br>属性攻击<br>3回合内全场亚比受到的伤害40%转化为自己体力值，回复体力同时提升自身防御和特防1级",
			"ALX_chaofanguizong":"超凡鬼宗",
			"ALX_chaofanguizong_info":"威力：1000<br>PP：10<br>普通攻击<br>必中，每第2次命中吸取与我方25%已损失体力等量的体力值",
			"ALX_fodaomosanjue":"佛道魔三绝",
			"ALX_fodaomosanjue_info":"威力：-1<br>神迹天赋<br>每回合进入佛、道或魔任意1种模式；佛模式：本回合被削弱的属性回合末翻倍提升；道模式：本回合伤害抗性提升40%；魔模式：攻击斩杀体力值低于0.8点的亚比",
			"ALX_shenjiyanwang":"炎王",
			"ALX_shenjihunbao":"神迹魂爆",
			"ALX_shenjihunbao_info":"威力：-1<br>PP：10<br>属性攻击<br>回复自身25%最大体力值并令对方烧伤，6回合内，烧伤造成的伤害120%用于回复自身",
			"ALX_longhunbaoshi":"龙魂爆世",
			"ALX_longhunbaoshi_info":"威力：800<br>PP：10<br>普通攻击<br>必中，40%恢复自身被削弱的属性，30%暴击",
			"ALX_yandilongbao":"炎帝龙爆",
			"ALX_yandilongbao_info":"威力：-1<br>神迹天赋<br>每回合40%概率提升自身攻击或速度1级",
			"ALX_heiyiwang":"黑翼王",
			"ALX_shenghenzhixin":"圣痕之心",
			"ALX_shenghenzhixin_info":"威力：-1<br>PP：10<br>属性攻击<br>4回合内提升40%伤害抗性，受到攻击时恢复被削弱的属性和自身0.5点体力值，若一名角色速度数值低于我方100点则使用属性技能无效",
			"ALX_duohunzhiying":"夺魂之影",
			"ALX_duohunzhiying_info":"威力：800<br>PP：10<br>普通攻击<br>必中，斩杀体力值低于0.3点的亚比，若斩杀失败则提升斩杀能力0.3点；斩杀后重置",
			"ALX_heiyiwangSkill":"黑翼王",
			"ALX_heiyiwangSkill_info":"威力：-1<br>神迹天赋<br>每回合若回合中自身使用属性技能则回合末提升自身攻击数值300点，否则提升自身速度数值300点",
			"ALX_shenjitianbeilong":"天贝龙",
			"ALX_longzhiyao":"龙之耀",
			"ALX_longzhiyao_info":"威力：-1<br>PP：10<br>属性攻击<br>清空对方增益属性等级；并保护自身属性回合末回复自身30%已损失体力值，持续2回合",
			"ALX_longquanchuxian":"龙权初现",
			"ALX_longquanchuxian_info":"威力：800<br>PP：10<br>普通攻击<br>必中，20%概率提升自身全属性1级，对方每个异常状态提升10%概率",
			"ALX_hunluanzhifeng":"混乱之风",
			"ALX_hunluanzhifeng_info":"威力：-1<br>神迹天赋<br>每回合50%概率给予任意一名其他角色任意异常状态",
			"ALX_yantian":"炎天",
			"ALX_yanqianling":"炎乾令",
			"ALX_yanqianling_info":"威力：-1<br>PP：10<br>属性攻击<br>若对方已烧伤，清空对方身上的烧伤状态并吸取对方0.5点体力值",
			"ALX_tianjinmiejie":"天烬灭劫",
			"ALX_tianjinmiejie_info":"威力：800<br>PP：10<br>普通攻击<br>必中，伤害值的25%用于回复自身体力值，若对方已烧伤则制造一个与回复量一致护盾",
			"ALX_nanfangtaiji":"南方太极",
			"ALX_nanfangtaiji_info":"威力：-1<br>神迹天赋<br>受到攻击70%概率令对方烧伤,当一名角色受到烧伤伤害时提升200点攻击数值",
			"ALX_axiuluo":"阿修罗",
			"ALX_axiuluoshenpan":"阿修罗审判",
			"ALX_axiuluoshenpan_info":"威力：-1<br>PP：10<br>属性攻击<br>锁定全场属性5回合并削弱对方双攻、速度数值200点，对超光系亚比削弱翻倍",
			"ALX_diyuzhishou":"地狱之手",
			"ALX_diyuzhishou_info":"威力：800<br>PP：10<br>普通攻击<br>必中，额外吸取对方10%+5%×狂怒层数最大体力值，暴击则自己回复量翻倍，目标无法回复体力，持续3回合",
			"ALX_kuangnuyanwei":"狂怒阎威",
			"ALX_kuangnuyanwei_info":"威力：-1<br>神迹天赋<br>开局提升50%伤害抗性和20%暴击率。出手时与每次被攻击时分别有100%和50%概率获得1层狂怒，每层提供20%暴击率和300点攻击、速度数值加成，最多叠加3层。当自身持续性技能被清空时，狂怒也会被清空",
			"ALX_shenjibingluohuang":"冰罗皇",
			"ALX_shenjihunfeng":"神迹魂封",
			"ALX_shenjihunfeng_info":"威力：-1<br>PP：10<br>属性攻击<br>削弱对方双攻、命中和速度各1级并回复自身20%最大体力值，若对方冰冻则回复效果翻倍",
			"ALX_longhunfengshi":"龙魂封世",
			"ALX_longhunfengshi_info":"威力：800<br>PP：10<br>特殊攻击<br>必中，若使用前未受到过伤害则35%概率令对方害怕",
			"ALX_bingdilongfeng":"冰帝龙封",
			"ALX_bingdilongfeng_info":"威力：-1<br>神迹天赋<br>每次攻击或受到攻击都有50%概率令对方冰冻",
			"ALX_yiciyuanshengtianyi":"圣天伊",
			"ALX_shenglonghuiyao":"圣龙辉耀",
			"ALX_shenglonghuiyao_info":"威力：500<br>PP：6<br>普通攻击<br>获得1元气。伤害的50%转化回复自己，3回合内每回合回复0.4点体力",
			"ALX_jibanxinxing":"羁绊新星",
			"ALX_jibanxinxing_info":"威力：500<br>PP：6<br>普通攻击<br>获得1元气。出手时未受过攻击则提升攻击和命中2级，否则提升速度和双防1级",
			"ALX_ciyuanjinghua":"次元净化",
			"ALX_ciyuanjinghua_info":"威力：-1<br>PP：6<br>属性攻击<br>清空目标提升的属性等级（5元气时，超元气强化）",
			"ALX_ciyuanjinghuaQH":"次元净化",
			"ALX_ciyuanjinghuaQH_info":"威力：1200<br>普通攻击<br>超元气·破<br>消耗5元气。清空目标提升的增益属性等级并吸取0.5点体力值",
			"ALX_tianzhaoshenghen":"天照圣痕",
			"ALX_tianzhaoshenghen_info":"威力：1200<br>普通攻击<br>异次元必杀<br>消耗5元气。60%概率提升全属性1级",
			"ALX_wangzhezhiguang":"王者之光",
			"ALX_wangzhezhiguang_info":"威力：-1<br>异次元被动<br>每回合末1元气。每回合30%概率提升全属性1级且任意方式提升属性概率获得1元气",
			"ALX_yandi":"炎帝",
			"ALX_chaoshangguzhixin":"超上古之心",
			"ALX_chaoshangguzhixin_info":"威力：-1<br>PP：5<br>属性攻击<br>提升全属性1级，自身不死则每回合令对方附带1-2层古魂印记，同一目标最多叠加6层",
			"ALX_zhanshenlieyang":"战神烈阳",
			"ALX_zhanshenlieyang_info":"威力：350<br>PP：6<br>特殊攻击<br>概率削弱对方特防1级，下回合击败对方提升自己全属性1级并回复0.8体力值",
			"ALX_cangqiongpo":"苍穹破",
			"ALX_cangqiongpo_info":"威力：150<br>PP：6<br>特殊攻击<br>消耗目标所有古魂印记，每层印记提升自己特攻数值200点",
			"ALX_cangyan":"苍炎",
			"ALX_cangyan_info":"威力：350<br>PP：10<br>特殊攻击<br>45%概率令对方混乱，每层古魂印记提高6%概率",
			"ALX_huangyanyang":"煌炎阳",
			"ALX_huangyanyang_info":"威力：-1<br>属性攻击<br>战界奥义<br>攻击附带30%伤害转化回复体力效果，使对方身上古魂印记翻倍；每次令对方附带印记时额外多附带1层",
			"ALX_yueshen":"月神",
			"ALX_wushencangyue":"武神沧月",
			"ALX_wushencangyue_info":"威力：350<br>PP：6<br>普通攻击<br>伤害的40%用于回复自身体力，每层古魂印记额外回复自身最大体力值10%",
			"ALX_xingchensui":"星辰碎",
			"ALX_xingchensui_info":"威力：150<br>PP：6<br>普通攻击<br>消耗目标所有古魂印记，每层印记提升自己攻击数值200点",
			"ALX_shiyue":"噬月",
			"ALX_shiyue_info":"威力：350<br>PP：10<br>普通攻击<br>命中有30%令对方害怕，出手时未受伤害则保护属性4回合",
			"ALX_aoyuehua":"傲月华",
			"ALX_aoyuehua_info":"威力：-1<br>属性攻击<br>战界奥义<br>提升自身超数码系抗性30%，使对方身上古魂印记翻倍；每次令对方附带印记时额外多附带1层",
			"ALX_qiankunxiuluoshen":"乾坤修罗神",
			"ALX_yuangushenghun":"远古圣魂",
			"ALX_yuangushenghun_info":"威力：-1<br>PP：6<br>属性攻击<br>提升自身闪避外全属性1级，4回合内每回合额外提升1次或回复自身25%体力值",
			"ALX_zhenshishenguang":"镇世神光",
			"ALX_zhenshishenguang_info":"威力：100<br>PP：6<br>普通攻击<br>2回合内当一名其他角色回复体力值时自身制造一个等量护盾抵挡攻击，护盾效果可叠加，护盾被击破时提升自身闪避外全属性1级",
			"ALX_hengsaoqiankun":"横扫乾坤",
			"ALX_hengsaoqiankun_info":"威力：100<br>PP：6<br>普通攻击<br>攻击对方单体3-5次，伤害的30%转化来回复自身，若攻击次数少于5次则削弱对方防御1级",
			"ALX_tiandishenchengjie":"天地神惩戒",
			"ALX_tiandishenchengjie_info":"威力：350<br>PP：10<br>普通攻击<br>必中，束缚对方4回合，对方每次受到束缚伤害则概率清空增益属性，持续4回合",
			"ALX_xiuluoaohunjue":"修罗奥魂诀",
			"ALX_xiuluoaohunjue_info":"威力：400<br>普通攻击<br>强袭奥义<br>斩杀0.5点体力以下亚比，每在场1回合提升斩杀能力0.1点",
			"ALX_duotiankaisadi":"堕天凯撒帝",
			"ALX_wujianhundun":"无间混沌",
			"ALX_wujianhundun_info":"威力：-1<br>PP：6<br>属性攻击<br>重置全场持续技能效果和属性等级并令全场非超暗黑亚比本回合混乱",
			"ALX_anyingwangzhe":"暗影王者",
			"ALX_anyingwangzhe_info":"威力：-1<br>PP：6<br>属性攻击<br>提升自身全属性1级，3回合内受到伤害35%返回给对方",
			"ALX_emengzhongyan":"恶梦终焉",
			"ALX_emengzhongyan_info":"威力：100<br>PP：6<br>特殊攻击<br>攻击2-5次，若攻击次数少于4则束缚对方并削弱对方全属性1级",
			"ALX_yinghuanjiaozhi":"影幻交织",
			"ALX_yinghuanjiaozhi_info":"威力：350<br>PP：10<br>特殊攻击<br>必中，命中则伤害的50%用于回复自身并本回合锁定对方属性等级或提升自身速度1-2级",
			"ALX_kaisashiyijue":"凯撒弑义诀",
			"ALX_kaisashiyijue_info":"威力：400<br>特殊攻击<br>强袭奥义<br>命中则吸取攻击外任意属性3级，每在场1回合提升吸取能力1级",
			"ALX_mojunyewang":"魔君夜王",
			"ALX_mowanglingyu":"魔王领域",
			"ALX_mowanglingyu_info":"威力：-1<br>PP：4<br>属性攻击<br>无视保护属性重置全场亚比能力等级并束缚全场亚比；4回合内每次受到伤害低于0.5点则提升自身速度、闪避、命中各1级，否则提升双防各1级",
			"ALX_yejunqiyue":"夜君契约",
			"ALX_yejunqiyue_info":"威力：150<br>PP：5<br>普通攻击<br>必中，削弱对方防御、闪避、命中和速度1-2级并使自身获得1层夜君之印",
			"ALX_wangmingduanzui":"亡命断罪",
			"ALX_wangmingduanzui_info":"威力：150<br>PP：6<br>普通攻击<br>攻击对方2次，每次命中随机提升攻击、命中、暴击和速度任意项属性共2级；概率额外再攻击1次，自身速度数值越高概率越高",
			"ALX_yeyingwange":"夜影挽歌",
			"ALX_yeyingwange_info":"威力：350<br>PP：10<br>普通攻击<br>必中，伤害的40%用于回复自身，概率令对方害怕并削弱对方全属性1级，自身体力值越低概率越高",
			"ALX_xueyuxitiandi":"血雨袭天地",
			"ALX_xueyuxitiandi_info":"威力：100<br>普通攻击<br>强袭奥义<br>消耗自身所有夜君之印，每层使技能威力提升100；若击败对方则提升自身伤害抗性20%并回复10%最大体力值，受到攻击则叠加效果",
			"ALX_chizunlangwang":"炽尊狼王",
			"ALX_gengunuhao":"亘古怒嚎",
			"ALX_gengunuhao_info":"威力：-1<br>PP：4<br>属性攻击<br>4回合内保护自身属性并复制对方提升的能力等级，若无属性提升则回复自身一定体力值",
			"ALX_langzunchiyan":"狼尊炽焰",
			"ALX_langzunchiyan_info":"威力：150<br>PP：5<br>特殊攻击<br>削弱对方双攻、特防和闪避各1-2级并使自身获得1层狼尊之印",
			"ALX_shenyutianyan":"神域天炎",
			"ALX_shenyutianyan_info":"威力：350<br>PP：6<br>特殊攻击<br>命中则提升自身速度1级并概率令对方烧伤否则触发技能狼尊炽焰的效果",
			"ALX_yinyueshalu":"银月杀戮",
			"ALX_yinyueshalu_info":"威力：350<br>PP：10<br>特殊攻击<br>必中，伤害的40%用于回复自身，若出手前自身体力值低于最大值1/3则令对方麻痹",
			"ALX_lietiandanijian":"裂天大逆剑",
			"ALX_lietiandanijian_info":"威力：100<br>特殊攻击<br>强袭奥义<br>消耗自身所有狼尊之印，每层使技能威力提升100，若击败对方则4回合内每回合提升自身全属性1级",
			"ALX_yisaerS":"伊撒尔S",
			"ALX_yiciyuanliliang":"异次元力量",
			"ALX_yiciyuanliliang_info":"威力：-1<br>异次元被动<br>你的能力数值与能力等级不能被降低（不可被无视）。你的所有攻击视为普通攻击且必定命中。你造成伤害前提升任意属性2级并有概率令对方无法行动一个回合",
			"ALX_yiciyuanshalu":"异次元杀戮",
			"ALX_yiciyuanshalu_info":"威力：500<br>PP：10<br>普通攻击<br>伤害的35%用于回复自身，削弱目标防御1级",
			"ALX_jinglingwangguilai":"精灵王归来",
			"ALX_jinglingwangguilai_info":"威力：-1<br>属性攻击<br>异次元必杀<br>提升25%抗性，持续8个回合。获得星神之域效果无限回合",
			"ALX_chaojuyan":"超巨岩",
			"ALX_longnuwanzhang":"龙怒万丈",
			"ALX_longnuwanzhang_info":"威力：-1<br>PP：5<br>属性攻击<br>提升攻击2级，防御或特防2级",
			"ALX_chaoyanbi":"超岩壁",
			"ALX_chaoyanbi_info":"威力：-1<br>PP：5<br>属性攻击<br>创造出1点体力的超岩壁，超岩壁存在时可吸收50%的伤害",
			"ALX_balongchaoyanji":"霸龙超岩击",
			"ALX_balongchaoyanji_info":"威力：280<br>PP：6<br>普通攻击<br>削弱自己速度1级，20%概率提全属性1级",
			"ALX_chaoyanposui":"超岩破碎",
			"ALX_chaoyanposui_info":"威力：400<br>PP：6<br>普通攻击<br>爆发巨大威力，一定概率自己进入异常状态并回复150体力",
			"ALX_shixinheilong":"噬心黑龙",
			"ALX_chaomoneng":"超·魔能",
			"ALX_chaomoneng_info":"威力：-1<br>PP：5<br>属性攻击<br>复制对方提升的属性加给自己，30%效果翻倍",
			"ALX_chaohuanyi":"超·幻翼",
			"ALX_chaohuanyi_info":"威力：-1<br>PP：5<br>属性攻击<br>使用后3回合提升伤害抗性40%，每回合提升技能固伤0.2点和速度300点（固伤上限1.2，速度无上限；固定数值提升了不会掉回来，但抗性只持续3回合）",
			"ALX_chaomingyan":"超·冥焰",
			"ALX_chaomingyan_info":"威力：320<br>PP：6<br>普通攻击<br>燃烧对方的灵魂，扣除对方最后使用的技能3-5点PP值并回复扣除PP值*0.2点体力值",
			"ALX_chaoyingyan":"超·影炎",
			"ALX_chaoyingyan_info":"威力：320<br>PP：6<br>普通攻击<br>45%概率令对方害怕，对超暗黑系以外亚比概率提升20%",
			"ALX_heilongxin":"黑·龙心",
			"ALX_heilongxin_info":"威力：-1<br>属性攻击<br>潜能奥义<br>触发技能超·幻翼；使用后每次攻击令对方附加龙心黑印且概率害怕，出手前未受到伤害过则引爆龙心黑印吸取对方200点双防数值",
			"ALX_gangtiexianfeng":"钢铁先锋",
			"ALX_chaoshumalingyu":"超数码领域",
			"ALX_chaoshumalingyu_info":"威力：-1<br>PP：5<br>属性攻击<br>全场超数码系亚比闪避提升2级并每回合回复0.4点体力，持续5回合",
			"ALX_chaoshumabenghuai":"超数码崩坏",
			"ALX_chaoshumabenghuai_info":"威力：-1<br>PP：5<br>属性攻击<br>扣除自己0.4点体力，提升自己攻击外任意6项属性1级",
			"ALX_chaoshumaguangpao":"超数码光炮",
			"ALX_chaoshumaguangpao_info":"威力：300<br>PP：6<br>特殊攻击<br>若体力比对方高则打出压制性伤害，威力提升50%！！",
			"ALX_chaoshumahuanxiang":"超数码幻想",
			"ALX_chaoshumahuanxiang_info":"威力：300<br>PP：6<br>特殊攻击<br>若体力比对方低则交换双方血量",
			"ALX_shangguxinglong":"上古星龙",
			"ALX_xingshenzhiyu":"星神之域",
			"ALX_xingshenzhiyu_info":"威力：-1<br>PP：10<br>属性攻击<br>提升全属性1级，4回合内概率免疫超上古系以外技能",
			"ALX_zhiminglongying":"致命龙影",
			"ALX_zhiminglongying_info":"威力：200<br>PP：10<br>特殊攻击<br>吸取对方最大体力值10%和10%伤害抗性，持续4回合，可叠加使用",
			"ALX_guyanwushuang":"古炎无双",
			"ALX_guyanwushuang_info":"威力：300<br>PP：10<br>特殊攻击<br>出手时未受到过伤害则保护属性并锁定对方属性4回合",
			"ALX_yuanhunzhansha":"元魂斩杀",
			"ALX_yuanhunzhansha_info":"威力：400<br>PP：10<br>特殊攻击<br>必中，目标体力大于1则造成额外0.6点伤害",
			"ALX_xingshenguhun":"星神古魂",
			"ALX_xingshenguhun_info":"威力：-1<br>属性攻击<br>潜能奥义<br>使自身获得3层星神古魂，当自身体力低于40%时则消耗1层古魂回复自身最大体力40%并提升全属性1级",
			"ALX_shengjunqianmo":"圣君阡陌",
			"ALX_shengjun":"圣君",
			"ALX_shengjun_info":"威力：-1<br>PP：5<br>属性攻击<br>提升攻击外任意7项属性1级，2回合概率使对方全场非超土系属性技能无效；效果不可与魔君叠加",
			"ALX_mojun":"魔君",
			"ALX_mojun_info":"威力：-1<br>PP：5<br>属性攻击<br>2回合内，攻击清空对方属性等级，概率使对方全场非超土系攻击技能无效；效果不可与圣君叠加",
			"ALX_liuhuofeitong":"流火绯瞳",
			"ALX_liuhuofeitong_info":"威力：250<br>PP：10<br>特殊攻击<br>命中则提升自身暴击1级，若体力比对方低则额外再攻击1次",
			"ALX_qishashengcai":"七杀圣裁",
			"ALX_qishashengcai_info":"威力：350<br>PP：10<br>特殊攻击<br>伤害的30%用于回复自身，若伤害*1000为偶数则削弱对方特防1级",
			"ALX_shengmoniepan":"圣魔涅槃",
			"ALX_shengmoniepan_info":"威力：-1<br>属性攻击<br>强袭奥义<br>使自身获得圣魔印记，当自身被击败时消耗印记复活回复自身50%体力值，否则4回合后吸收印记提升自身全属性1级",
			"ALX_zhulong":"烛龙",
			"ALX_xifengyu":"戏风雨",
			"ALX_xifengyu_info":"威力：150<br>PP：6<br>特殊攻击<br>攻击对方单体，获得1魂。60%概率令对方混乱，对混乱目标造成5倍伤害",
			"ALX_shixingchen":"噬星辰",
			"ALX_shixingchen_info":"威力：400<br>PP：6<br>特殊攻击<br>攻击对方单体，获得1魂。吞噬中毒目标对方15%最大体力值，若目标血量低于50%则提升至30%",
			"ALX_chihongzhitong":"赤红之瞳",
			"ALX_chihongzhitong_info":"威力：1200<br>特殊攻击<br>传奇必杀<br>消耗5魂。复制对方增益属性，50%概率无视对方提升的特防等级",
			"ALX_zhujiuyin":"烛九阴",
			"ALX_zhujiuyin_info":"威力：-1<br>传奇被动<br>每回合末获得1魂。被攻击时令对方中毒，无限回合。受到中毒目标的伤害降低60%",
			"ALX_fulai":"弗莱",
			"ALX_leitingmaichong":"雷霆脉冲",
			"ALX_leitingmaichong_info":"威力：-1<br>PP：5<br>属性攻击<br>若对方已麻痹则削弱对方任意4项属性1级",
			"ALX_cichangbaozou":"磁场暴走",
			"ALX_cichangbaozou_info":"威力：-1<br>PP：5<br>属性攻击<br>使用后3回合内，每回合随机提升1只亚比任意4项属性1级，全场非超电系角色麻痹",
			"ALX_shandianliansuo":"闪电链锁",
			"ALX_shandianliansuo_info":"威力：200<br>PP：5<br>特殊攻击<br>伤害的30%用于回复我方体力，若对方已麻痹则额外多攻击1次",
			"ALX_chaonengfute":"超能伏特",
			"ALX_chaonengfute_info":"威力：280<br>PP：6<br>特殊攻击<br>使用后蓄能1回合，下回合爆发2-6倍威力！（蓄能期间无法使用此技能）",
			"ALX_leitingzhangbi":"雷霆障壁",
			"ALX_leitingzhangbi_info":"威力：-1<br>属性攻击<br>潜能奥义<br>使用后每次自身使用技能则获得1层雷霆障壁，当雷霆障壁4层时消耗4层障壁生成一个0.8-1.2点的护盾抵挡伤害",
			"ALX_senluokelanwanquanti":"森罗可兰",
			"ALX_senluonailuo":"森罗·奈落",
			"ALX_senluonailuo_info":"威力：700<br>PP：10<br>普通攻击<br>完全体必杀技<br>必中，伤害的200%用于回复自身体力值；每第2次使用则吸取对方攻击等级1-2级",
			"ALX_shirenlong":"誓刃龙",
			"ALX_chaolongxuemai":"超龙血脉",
			"ALX_chaolongxuemai_info":"威力：-1<br>PP：5<br>属性攻击<br>提升自己双攻、速度和闪避1级",
			"ALX_wushuang":"无双",
			"ALX_wushuang_info":"威力：-1<br>PP：5<br>属性攻击<br>使自己当前增益属性翻倍并保护属性4回合",
			"ALX_miesha":"灭杀",
			"ALX_miesha_info":"威力：150<br>PP：6<br>普通攻击<br>一定概率斩杀体力比自己低的目标，体力差越大斩杀概率越高",
			"ALX_shiyuezhiren":"誓约之刃",
			"ALX_shiyuezhiren_info":"威力：350<br>PP：10<br>普通攻击<br>出手时已受到过伤害则造成1.5倍伤害并将伤害的50%转化回复自己",
			"ALX_bingshenhanxin":"兵神韩信",
			"ALX_bushengwugui":"不胜无归",
			"ALX_bushengwugui_info":"威力：-1<br>PP：6<br>属性攻击<br>恢复40%最大体力值和被削弱的属性等级",
			"ALX_yinguangshuangshan":"银光双闪",
			"ALX_yinguangshuangshan_info":"威力：200<br>PP：6<br>普通攻击<br>攻击对方2次，每次命中85%概率获得1魂并削弱对方35%当前防御值",
			"ALX_shenyonyinghunji":"兵神英魂击",
			"ALX_shenyonyinghunji_info":"威力：1000<br>普通攻击<br>传奇必杀<br>消耗5魂。斩杀体力值0.8或以下目标",
			"ALX_binghun":"兵魂",
			"ALX_binghun_info":"威力：-1<br>传奇被动<br>每回合末获得1魂。每回合受击100%概率获得1魂并提升速度和攻击数值200点",
			"ALX_dinvsu":"帝女夙",
			"ALX_nvdizhifeng":"女帝之风",
			"ALX_nvdizhifeng_info":"威力：-1<br>PP：1<br>属性攻击<br>当自己当前体力值不是全场最高时，保护属性不被削弱，无限回合",
			"ALX_xushidaifa":"积蓄待发",
			"ALX_xushidaifa_info":"威力：-1<br>PP：6<br>属性攻击<br>提升自己双防和命中2级",
			"ALX_lianhuazhanfang":"莲花绽放",
			"ALX_lianhuazhanfang_info":"威力：350<br>PP：6<br>特殊攻击<br>此技能持续期间无法使用，提升速度1级，若下个回合前未受伤害则提升自身全属性1级",
			"ALX_suyelunhui":"夙夜轮回",
			"ALX_suyelunhui_info":"威力：350<br>PP：10<br>特殊攻击<br>必中，额外吸取对方体力值，数值为双方体力值之差的1/3，上限1.2",
			"ALX_mixinmojing":"迷心魔境",
			"ALX_mixinmojing_info":"威力：-1<br>被动<br>战界奥义<br>15%免疫伤害，持续20个回合",
			"ALX_senluokelan":"森罗可兰",
			"ALX_chunmuzhixin":"春沐之心",
			"ALX_chunmuzhixin_info":"威力：-1<br>PP：10<br>属性攻击<br>提升自身双防2级，回复自身50%的已损失体力值，若使用时自身体力值低于0.8点则再触发一次效果",
			"ALX_wanwuganzhao":"万物感召",
			"ALX_wanwuganzhao_info":"威力：150<br>PP：10<br>普通攻击<br>命中后提升自身随机2项属性各1级令对方获得1层感召印记和1种异常状态；当印记叠加至2层时消耗2层令对方诅咒",
			"ALX_shenfengjianling":"神风箭灵",
			"ALX_shenfengjianling_info":"威力：350<br>PP：10<br>普通攻击<br>必中，出手前已受到过伤害则保护属性3回合并触发技能万物感召效果",
			"ALX_jinglingwangzhifeng":"精灵王之风",
			"ALX_jinglingwangzhifeng_info":"威力：350<br>PP：10<br>普通攻击<br>命中令对方附带风灵标记，当对方拥有灵风标记的亚比在场时，若体力未满每回合末恢复自身一定体力值",
			"ALX_lingfengsuxing":"灵风甦醒",
			"ALX_lingfengsuxing_info":"威力：-1<br>属性攻击<br>潜能奥义<br>吸取对方最大体力值的30%，清空全场双攻等级，全场双攻等级无法提升；使用后，每回合回复自身0.2点体力值",
			"ALX_heiyixinghuang":"黑翼·星皇",
			"ALX_beidouqunxing":"北斗群星",
			"ALX_beidouqunxing_info":"威力：-1<br>PP：3<br>属性攻击<br>免疫异常状态且每次受到攻击回复自身25%最大体力值或提升自身特攻1级，持续3回合",
			"ALX_wanzhangxinghe":"万丈星河",
			"ALX_wanzhangxinghe_info":"威力：800<br>PP：10<br>特殊攻击<br>必中，40%概率清空对方增益属性；若对方特防等级小于0级则回复自身0.9点体力值",
			"ALX_yifanxingtianhuang":"翼·繁星天皇",
			"ALX_yifanxingtianhuang_info":"威力：-1<br>神迹天赋<br>每回合令其他角色束缚，其他角色每次受到束缚伤害则60%概率削弱其特防1级",
			"ALX_weituoer":"维托尔",
			"ALX_ranshaodadi1":"燃烧大地+",
			"ALX_ranshaodadi":"燃烧大地",
			"ALX_ranshaodadi_info":"威力：-1<br>PP：2<br>属性攻击<br>5回合内每回合提升自身伤害10%",
			"ALX_zhanmoshi":"斩模式",
			"ALX_nimoshi":"逆模式",
			"ALX_shensimingxiang":"神思冥想",
			"ALX_shensimingxiang_info":"威力：-1<br>PP：5<br>属性攻击<br>重置全场属性等级、进入逆或斩模式，下回合末回复自身最大体力值1/2并提升全属性1级",
			"ALX_shenquyishini":"神曲Ⅰ式·逆",
			"ALX_shenquyishini_info":"威力：50<br>PP：6<br>特殊攻击<br>快速出刀连击4次，每次命中削弱任意属性1级；逆模式下每次削弱属性有概率转化给自身",
			"ALX_shenquershizhan":"神曲Ⅱ式·斩",
			"ALX_shenquershizhan_info":"威力：320<br>PP：6<br>特殊攻击<br>命中则回复自身25%的最大体力值并有概率再攻击一次；斩模式下此技能进行了两次攻击则将对方斩杀",
			"ALX_xuewuhanling":"雪无寒灵",
			"ALX_bingposhehun":"冰魄摄魂",
			"ALX_bingposhehun_info":"威力：100<br>PP：6<br>特殊攻击<br>100%偷取对方闪避和命中1级",
			"ALX_huanlingshu":"缓灵术",
			"ALX_huanlingshu_info":"威力：400<br>PP：6<br>特殊攻击<br>攻击对方单体，获得1魂。80%概率扣除对方1魂，扣除成功提升自己全属性数值100点",
			"ALX_hanlingshunsha":"寒灵瞬杀",
			"ALX_hanlingshunsha_info":"威力：1000<br>特殊攻击<br>传奇必杀<br>消耗5魂。50%概率令对方停止行动1回合，50%概率2回合",
			"ALX_xuewuzhiwei":"雪无之威",
			"ALX_xuewuzhiwei_info":"威力：-1<br>传奇被动<br>每回合末获得1魂。全场超冰系以外亚比上场时降低速度和双攻300点，每回合末再降低20%速度和双攻",
			"ALX_crit":"暴击率提升",
			"ALX_dodge":"闪避率提升",
			"_ALX_gainPP":"恢复PP值",
			"_ALX_gainPP1":"恢复PP值",
			"ALX_skillFDamage":"技能固伤",
			"ALX_keepAbilityRank":"保护属性",
			"ALX_keepAbilityRank1":"提属无效",
			"ALX_forcedAbilityRank":"锁定属性",
			"ALX_keepAbility1":"提数值无效",
			"ALX_keepAbility1":"提数值无效",
			"ALX_canntRecover":"无法回血",
			"ALX_canntAct":"无法行动",
			"ALX_resistance":"伤害抗性",
			"ALX_attackRate":"伤害提升",
			"disableEffect":"防技能附效",
			"ALX_keepAttackRank":"提攻无效",
			"ALX_huDun":"护盾",
			"ALX_none":"失效",
			"ALX_immuneToAbnormalState":"免疫异常",
			"ALX_mark":"状态",
			"ALX_CQhun":"魂",
			"ALX_yuanQi":"元气",
			"ALX_usedSkill":"禁",
			"ALX_poisoning":"中毒",
			"ALX_burn":"烧伤",
			"ALX_paralysis":"麻痹",
			"ALX_weak":"衰弱",
			"ALX_damnation":"诅咒",
			"ALX_frostbite":"冻伤",
			"ALX_sleep":"睡眠",
			"ALX_shackles":"束缚",
			"ALX_mad":"混乱",
			"ALX_afaid":"害怕",
			"ALX_parasitic":"寄生",
			"ALX_qiyue":"骑士契约",
			"ALX_qiyue_mark":"坐骑",
			"ALX_bianshen":"究极变身",
			"ALX_EX_abilityRankI":"提升等级上限",
			"ALX_EX_abilityRankD":"降低等级下限",
		},
	};
	for(var i in ALX.character){
		if(ALX.characterTitle[i]==undefined) ALX.characterTitle[i]='';
		ALX.characterTitle[i]+='<br>攻击：'+lib.kzol_ALXYB[i].attackC+
		'   特攻：'+lib.kzol_ALXYB[i].attackE+
		'<br>防御：'+lib.kzol_ALXYB[i].defenseC+
		'   特防：'+lib.kzol_ALXYB[i].defenseE+
		'<br>速度：'+lib.kzol_ALXYB[i].speed;
	};
	if(lib.device||lib.node){
		for(var i in ALX.character){ALX.character[i][4].push('ext:扩展ol/'+i+'.jpg');}
	}else{
		for(var i in ALX.character){ALX.character[i][4].push('db:extension-扩展ol:'+i+'.jpg');}
	};
	game.addCharacterPack(ALX,'奥拉星S');
	lib.group.push('ALX_chaofeixingxi');
	lib.translate.ALX_chaofeixingxi='<img src='+lib.assetURL+"extension/扩展ol/ALX_chaofeixingxi.png"+' width="28" height="28">';
	lib.group.push('ALX_chaojixiexi');
	lib.translate.ALX_chaojixiexi='<img src='+lib.assetURL+"extension/扩展ol/ALX_chaojixiexi.png"+' width="28" height="28">';
	lib.group.push('ALX_chaobingxi');
	lib.translate.ALX_chaobingxi='<img src='+lib.assetURL+"extension/扩展ol/ALX_chaobingxi.png"+' width="28" height="28">';
	lib.group.push('ALX_chaowangxi');
	lib.translate.ALX_chaowangxi='<img src='+lib.assetURL+"extension/扩展ol/ALX_chaowangxi.png"+' width="28" height="28">';
	lib.group.push('ALX_chaocaoxi');
	lib.translate.ALX_chaocaoxi='<img src='+lib.assetURL+"extension/扩展ol/ALX_chaocaoxi.png"+' width="28" height="28">';
	lib.group.push('ALX_chaoguangxi');
	lib.translate.ALX_chaoguangxi='<img src='+lib.assetURL+"extension/扩展ol/ALX_chaoguangxi.png"+' width="28" height="28">';
	lib.group.push('ALX_chaohuoxi');
	lib.translate.ALX_chaohuoxi='<img src='+lib.assetURL+"extension/扩展ol/ALX_chaohuoxi.png"+' width="28" height="28">';
	lib.group.push('ALX_chaoshuixi');
	lib.translate.ALX_chaoshuixi='<img src='+lib.assetURL+"extension/扩展ol/ALX_chaoshuixi.png"+' width="28" height="28">';
	lib.group.push('ALX_chaolongxi');
	lib.translate.ALX_chaolongxi='<img src='+lib.assetURL+"extension/扩展ol/ALX_chaolongxi.png"+' width="27" height="29">';
	lib.group.push('ALX_chaodianxi');
	lib.translate.ALX_chaodianxi='<img src='+lib.assetURL+"extension/扩展ol/ALX_chaodianxi.png"+' width="28" height="28">';
	lib.group.push('ALX_chaotuxi');
	lib.translate.ALX_chaotuxi='<img src='+lib.assetURL+"extension/扩展ol/ALX_chaotuxi.png"+' width="28" height="28">';
	lib.group.push('ALX_chaoanxi');
	lib.translate.ALX_chaoanxi='<img src='+lib.assetURL+"extension/扩展ol/ALX_chaoanxi.png"+' width="28" height="28">';
	lib.group.push('ALX_chaoshumaxi');
	lib.translate.ALX_chaoshumaxi='<img src='+lib.assetURL+"extension/扩展ol/ALX_chaoshumaxi.png"+' width="28" height="28">';
	lib.group.push('ALX_chaoshenglingxi');
	lib.translate.ALX_chaoshenglingxi='<img src='+lib.assetURL+"extension/扩展ol/ALX_chaoshenglingxi.png"+' width="28" height="28">';
	lib.group.push('ALX_chaoshangguxi');
	lib.translate.ALX_chaoshangguxi='<img src='+lib.assetURL+"extension/扩展ol/ALX_chaoshangguxi.png"+' width="28" height="28">';
	lib.group.push('ALX_qiankunxi');
	lib.translate.ALX_qiankunxi='<img src='+lib.assetURL+"extension/扩展ol/ALX_qiankunxi.png"+' width="28" height="28">';
	lib.group.push('ALX_chaocaoxiALX_wanquanxi');
	lib.translate.ALX_chaocaoxiALX_wanquanxi='<img src='+lib.assetURL+"extension/扩展ol/ALX_chaocaoxi.png"+' width="28" height="28"><img src='+lib.assetURL+"extension/扩展ol/ALX_wanquanxi.png"+' width="28" height="28">';
	lib.group.push('ALX_chaoanxiALX_wanquanxi');
	lib.translate.ALX_chaoanxiALX_wanquanxi='<img src='+lib.assetURL+"extension/扩展ol/ALX_chaoanxi.png"+' width="28" height="28"><img src='+lib.assetURL+"extension/扩展ol/ALX_wanquanxi.png"+' width="28" height="28">';
	lib.group.push('ALX_shenmixiALX_guangxi');
	lib.translate.ALX_shenmixiALX_guangxi='<img src='+lib.assetURL+"extension/扩展ol/ALX_shenmixi.png"+' width="28" height="28"><img src='+lib.assetURL+"extension/扩展ol/ALX_guangxi.png"+' width="28" height="28">';
	lib.group.push('ALX_shenmixiALX_shenglingxi');
	lib.translate.ALX_shenmixiALX_shenglingxi='<img src='+lib.assetURL+"extension/扩展ol/ALX_shenmixi.png"+' width="28" height="28"><img src='+lib.assetURL+"extension/扩展ol/ALX_shenglingxi.png"+' width="28" height="28">';
	lib.group.push('ALX_bingxi');
	lib.translate.ALX_bingxi='<img src='+lib.assetURL+"extension/扩展ol/ALX_bingxi.png"+' width="28" height="28">';
	lib.group.push('ALX_chaobingxiALX_wanquanxi');
	lib.translate.ALX_chaobingxiALX_wanquanxi='<img src='+lib.assetURL+"extension/扩展ol/ALX_chaobingxi.png"+' width="28" height="28"><img src='+lib.assetURL+"extension/扩展ol/ALX_wanquanxi.png"+' width="28" height="28">';
	lib.group.push('ALX_chaoshuixiALX_wanquanxi');
	lib.translate.ALX_chaoshuixiALX_wanquanxi='<img src='+lib.assetURL+"extension/扩展ol/ALX_chaoshuixi.png"+' width="28" height="28"><img src='+lib.assetURL+"extension/扩展ol/ALX_wanquanxi.png"+' width="28" height="28">';
}