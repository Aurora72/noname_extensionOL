window.func=function(lib,game,ui,get,ai,_status){
	if(lib.config.mode_config.kzsg==undefined){
		lib.config.mode_config.kzsg={};
		lib.config.mode_config.kzsg.ckjc=true;
		game.saveConfig('ckjc',true,'kzsg');
		lib.config.mode_config.kzsg.ydfj=1;
		game.saveConfig('ydfj',1,'kzsg');
		lib.config.mode_config.kzsg.mykps=18;
		game.saveConfig('mykps',18,'kzsg');
		lib.config.mode_config.kzsg.jmsf=false;
		game.saveConfig('jmsf',false,'kzsg');
		lib.config.mode_config.kzsg.jmsf_zd=true;
		game.saveConfig('jmsf_zd',true,'kzsg');
		lib.config.mode_config.kzsg.zdgbxzjssd=true;
		game.saveConfig('zdgbxzjssd',true,'kzsg');
		lib.config.mode_config.kzsg.zdgblsjll=true;
		game.saveConfig('zdgblsjll',true,'kzsg');
		lib.config.mode_config.kzsg.yddwfhd=false;
		game.saveConfig('yddwfhd',false,'kzsg');
		lib.config.mode_config.kzsg.acbj_3d=false;
		game.saveConfig('acbj_3d',false,'kzsg');
		lib.config.mode_config.kzsg.yxsd=1;
		game.saveConfig('yxsd',1,'kzsg');
		game.saveConfig('duidan',false,'kzsg');
		lib.config.mode_config.kzsg.duidan=false;
		game.saveConfig('swljxc',true,'kzsg');
		lib.config.mode_config.kzsg.swljxc=true;
		game.saveConfig('zdjmdxgd',false,'kzsg');
		lib.config.mode_config.kzsg.zdjmdxgd=false;
	};
	if(lib.config.kzol_kzsg==undefined) game.saveConfig('kzol_kzsg',{});
	var bool=false;
	if(lib.config.kzol_kzsg.name==undefined){
		lib.config.kzol_kzsg.name='无名玩家';
		bool=true;
	};
	if(lib.config.kzol_kzsg.coin==undefined){
		lib.config.kzol_kzsg.coin=1000;
		bool=true;
	};
	if(lib.config.kzol_kzsg.coin1==undefined){
		lib.config.kzol_kzsg.coin1=0;
		bool=true;
	};
	if(lib.config.kzol_kzsg.kb==undefined){
		lib.config.kzol_kzsg.kb=[];
		bool=true;
	};
	if(lib.config.kzol_kzsg.ck2==undefined){
		lib.config.kzol_kzsg.ck2={};
		bool=true;
	};
	if(lib.config.kzol_kzsg.sd==undefined){
		lib.config.kzol_kzsg.sd={};
		bool=true;
	};
	if(lib.config.kzol_kzsg.ggl==undefined){
		lib.config.kzol_kzsg.ggl={};
		bool=true;
	};
	if(lib.config.kzol_kzsg.avatar==undefined){
		lib.config.kzol_kzsg.avatar='liubei';
		bool=true;
	};
	if(lib.config.kzol_kzsg.card==undefined){
		lib.config.kzol_kzsg.card={};
		bool=true;
	};
	if(lib.config.kzol_kzsg.card_num==undefined){
		lib.config.kzol_kzsg.card_num=0;
		bool=true;
	};
	if(lib.config.kzol_kzsg.army==undefined){
		lib.config.kzol_kzsg.army={};
		bool=true;
	};
	if(lib.config.kzol_kzsg.army_num==undefined){
		lib.config.kzol_kzsg.army_num=0;
		bool=true;
	};
	if(lib.kzol_kzsg_card==undefined) lib.kzol_kzsg_card={};
	if(lib.config.kzol_kzsg.diy!=undefined){
		for(var i in lib.config.kzol_kzsg.diy){
			if(lib.config.kzol_kzsg.diy[i].jy==true) continue;
			lib.kzol_kzsg_card[i]=lib.config.kzol_kzsg.diy[i];
			lib.characterTitle[i]=lib.kzol_kzsg_card[i].author+'<br>'+lib.kzol_kzsg_card[i].info;
		};
	};
	var card={
		//灰、白、绿、蓝、紫、橙、 红
		//1 、2 、3 、4 、5 、6 、 7 
		//50  100 150 300 500 1000 2000
		'kzsg_曹操7':{
			name:'kzsg_曹操',
			translate:'曹操',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'武将',
			hp:8,
			attack:2,
			prepareRound:10,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_激励骑兵','kzsg_刃甲2'],
		},
		'kzsg_曹仁6':{
			name:'kzsg_曹仁',
			translate:'曹仁',
			sex:'male',
			group:'wei',
			quailty:6,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:4,
			bing:4,
			bao:2,
			shu:0,
			skills:['kzsg_毒刃2'],
		},
		'kzsg_夏侯惇5':{
			name:'kzsg_夏侯惇',
			translate:'夏侯惇',
			sex:'male',
			group:'wei',
			quailty:5,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:8,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_嗜血术1','kzsg_狂暴'],
		},
		'kzsg_曹操4':{
			name:'kzsg_曹操',
			translate:'曹操',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'武将',
			hp:8,
			attack:2,
			prepareRound:12,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_激励骑兵','kzsg_刃甲2'],
		},
		'kzsg_司马懿7':{
			name:'kzsg_司马懿',
			translate:'司马懿',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'武将',
			hp:5,
			attack:0,
			prepareRound:6,
			bing:4,
			bao:0,
			shu:2,
			skills:['kzsg_水镜术1','kzsg_闪电2'],
		},
		'kzsg_司马懿4':{
			name:'kzsg_司马懿',
			translate:'司马懿',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'武将',
			hp:5,
			attack:0,
			prepareRound:8,
			bing:4,
			bao:0,
			shu:2,
			skills:['kzsg_水镜术1','kzsg_闪电2'],
		},
		'kzsg_郭嘉7':{
			name:'kzsg_郭嘉',
			translate:'郭嘉',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'武将',
			hp:4,
			attack:0,
			prepareRound:4,
			bing:4,
			bao:0,
			shu:2,
			skills:['kzsg_战魂召唤','kzsg_闪电3'],
		},
		'kzsg_郭嘉4':{
			name:'kzsg_郭嘉',
			translate:'郭嘉',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'武将',
			hp:4,
			attack:0,
			prepareRound:6,
			bing:4,
			bao:0,
			shu:2,
			skills:['kzsg_战魂召唤','kzsg_闪电3'],
		},
		'kzsg_程昱7':{
			name:'kzsg_程昱',
			translate:'程昱',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:4,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_瘟疫','kzsg_重生'],
		},
		'kzsg_程昱4':{
			name:'kzsg_程昱',
			translate:'程昱',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:6,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_瘟疫','kzsg_重生'],
		},
		'kzsg_甄姬7':{
			name:'kzsg_甄姬',
			translate:'甄姬',
			sex:'female',
			group:'wei',
			quailty:7,
			type:'武将',
			hp:5,
			attack:1,
			prepareRound:4,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_嗜血术2','kzsg_陷阱1'],
		},
		'kzsg_甄姬4':{
			name:'kzsg_甄姬',
			translate:'甄姬',
			sex:'female',
			group:'wei',
			quailty:4,
			type:'武将',
			hp:5,
			attack:1,
			prepareRound:6,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_嗜血术2','kzsg_陷阱1'],
		},
		'kzsg_张辽7':{
			name:'kzsg_张辽',
			translate:'张辽',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'武将',
			hp:7,
			attack:2,
			prepareRound:8,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_洞察','kzsg_狂暴'],
		},
		'kzsg_张辽4':{
			name:'kzsg_张辽',
			translate:'张辽',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'武将',
			hp:7,
			attack:2,
			prepareRound:10,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_洞察','kzsg_狂暴'],
		},
		'kzsg_夏侯惇7':{
			name:'kzsg_夏侯惇',
			translate:'夏侯惇',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:6,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_嗜血术1','kzsg_狂暴'],
		},
		'kzsg_张郃7':{
			name:'kzsg_张郃',
			translate:'张郃',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:8,
			bing:4,
			bao:0,
			shu:2,
			skills:['kzsg_削弱'],
		},
		'kzsg_张郃4':{
			name:'kzsg_张郃',
			translate:'张郃',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:10,
			bing:4,
			bao:0,
			shu:2,
			skills:['kzsg_削弱'],
		},
		'kzsg_满宠7':{
			name:'kzsg_满宠',
			translate:'满宠',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:6,
			bing:4,
			bao:2,
			shu:0,
			skills:['kzsg_召唤'],
		},
		'kzsg_满宠4':{
			name:'kzsg_满宠',
			translate:'满宠',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:8,
			bing:4,
			bao:2,
			shu:0,
			skills:['kzsg_召唤'],
		},
		'kzsg_荀彧7':{
			name:'kzsg_荀彧',
			translate:'荀彧',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:4,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_丹术1','kzsg_重生'],
		},
		'kzsg_荀彧4':{
			name:'kzsg_荀彧',
			translate:'荀彧',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:6,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_丹术1','kzsg_重生'],
		},
		'kzsg_骨龙王7':{
			name:'kzsg_骨龙王',
			translate:'骨龙王',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:12,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_嗜血术2','kzsg_飞行'],
		},
		'kzsg_骨龙王4':{
			name:'kzsg_骨龙王',
			translate:'骨龙王',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:14,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_嗜血术2','kzsg_飞行'],
		},
		'kzsg_夏侯渊6':{
			name:'kzsg_夏侯渊',
			translate:'夏侯渊',
			sex:'male',
			group:'wei',
			quailty:6,
			type:'武将',
			hp:5,
			attack:2,
			prepareRound:4,
			bing:4,
			bao:2,
			shu:0,
			skills:['kzsg_吸血'],
		},
		'kzsg_夏侯渊3':{
			name:'kzsg_夏侯渊',
			translate:'夏侯渊',
			sex:'male',
			group:'wei',
			quailty:3,
			type:'武将',
			hp:5,
			attack:2,
			prepareRound:6,
			bing:4,
			bao:2,
			shu:0,
			skills:['kzsg_吸血'],
		},
		'kzsg_曹仁3':{
			name:'kzsg_曹仁',
			translate:'曹仁',
			sex:'male',
			group:'wei',
			quailty:3,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:6,
			bing:4,
			bao:2,
			shu:0,
			skills:['kzsg_毒刃2'],
		},
		'kzsg_羊祜6':{
			name:'kzsg_羊祜',
			translate:'羊祜',
			sex:'male',
			group:'wei',
			quailty:6,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:6,
			bing:4,
			bao:0,
			shu:2,
			skills:['kzsg_急救2'],
		},
		'kzsg_羊祜3':{
			name:'kzsg_羊祜',
			translate:'羊祜',
			sex:'male',
			group:'wei',
			quailty:3,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:8,
			bing:4,
			bao:0,
			shu:2,
			skills:['kzsg_急救2'],
		},
		'kzsg_范增6':{
			name:'kzsg_范增',
			translate:'范增',
			sex:'male',
			group:'wei',
			quailty:6,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:10,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_丹术2'],
		},
		'kzsg_范增3':{
			name:'kzsg_范增',
			translate:'范增',
			sex:'male',
			group:'wei',
			quailty:3,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:12,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_丹术2'],
		},
		'kzsg_荀攸6':{
			name:'kzsg_荀攸',
			translate:'荀攸',
			sex:'male',
			group:'wei',
			quailty:6,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:6,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_瘟疫'],
		},
		'kzsg_荀攸3':{
			name:'kzsg_荀攸',
			translate:'荀攸',
			sex:'male',
			group:'wei',
			quailty:3,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:8,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_瘟疫'],
		},
		'kzsg_亡者之心7':{
			name:'kzsg_亡者之心',
			translate:'亡者之心',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'亡灵',
			hp:5,
			attack:3,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_洞察'],
		},
		'kzsg_亡者之心4':{
			name:'kzsg_亡者之心',
			translate:'亡者之心',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'亡灵',
			hp:5,
			attack:3,
			prepareRound:12,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_洞察'],
		},
		'kzsg_地狱使者7':{
			name:'kzsg_地狱使者',
			translate:'地狱使者',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'亡灵',
			hp:5,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生','kzsg_丹术1'],
		},
		'kzsg_地狱使者4':{
			name:'kzsg_地狱使者',
			translate:'地狱使者',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'亡灵',
			hp:5,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生','kzsg_丹术1'],
		},
		'kzsg_巫术使者7':{
			name:'kzsg_巫术使者',
			translate:'巫术使者',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'步兵',
			hp:5,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生','kzsg_水镜术1'],
		},
		'kzsg_巫术使者4':{
			name:'kzsg_巫术使者',
			translate:'巫术使者',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'步兵',
			hp:5,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生','kzsg_水镜术1'],
		},
		'kzsg_幽冥盾卫7':{
			name:'kzsg_幽冥盾卫',
			translate:'幽冥盾卫',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'亡灵',
			hp:5,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_自残1','kzsg_盾防2'],
		},
		'kzsg_幽冥盾卫4':{
			name:'kzsg_幽冥盾卫',
			translate:'幽冥盾卫',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'亡灵',
			hp:5,
			attack:2,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_自残1','kzsg_盾防2'],
		},
		'kzsg_幽冥卫7':{
			name:'kzsg_幽冥卫',
			translate:'幽冥卫',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'亡灵',
			hp:4,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生','kzsg_洞察'],
		},
		'kzsg_幽冥卫4':{
			name:'kzsg_幽冥卫',
			translate:'幽冥卫',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'亡灵',
			hp:4,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生','kzsg_洞察'],
		},
		'kzsg_火炎雷卫7':{
			name:'kzsg_火炎雷卫',
			translate:'火炎雷卫',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'亡灵',
			hp:5,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生','kzsg_横扫'],
		},
		'kzsg_火炎雷卫4':{
			name:'kzsg_火炎雷卫',
			translate:'火炎雷卫',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'亡灵',
			hp:5,
			attack:2,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生','kzsg_横扫'],
		},
		'kzsg_幽鬼7':{
			name:'kzsg_幽鬼',
			translate:'幽鬼',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'亡灵',
			hp:3,
			attack:2,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_飞行'],
		},
		'kzsg_幽鬼4':{
			name:'kzsg_幽鬼',
			translate:'幽鬼',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'亡灵',
			hp:3,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_飞行'],
		},
		'kzsg_火焰使者7':{
			name:'kzsg_火焰使者',
			translate:'火焰使者',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'步兵',
			hp:3,
			attack:2,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_吸血','kzsg_炎流星1'],
		},
		'kzsg_火焰使者4':{
			name:'kzsg_火焰使者',
			translate:'火焰使者',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'步兵',
			hp:3,
			attack:2,
			prepareRound:12,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_吸血','kzsg_炎流星1'],
		},
		'kzsg_烈雀骑7':{
			name:'kzsg_烈雀骑',
			translate:'烈雀骑',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'骑兵',
			hp:6,
			attack:1,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_狂暴','kzsg_丹术1'],
		},
		'kzsg_烈雀骑4':{
			name:'kzsg_烈雀骑',
			translate:'烈雀骑',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'骑兵',
			hp:6,
			attack:1,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_狂暴','kzsg_丹术1'],
		},
		'kzsg_轻骨弓7':{
			name:'kzsg_轻骨弓',
			translate:'轻骨弓',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'弓手',
			hp:4,
			attack:2,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生','kzsg_冷箭'],
		},
		'kzsg_轻骨弓4':{
			name:'kzsg_轻骨弓',
			translate:'轻骨弓',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'弓手',
			hp:4,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生','kzsg_冷箭'],
		},
		'kzsg_骨盾医师7':{
			name:'kzsg_骨盾医师',
			translate:'骨盾医师',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'亡灵',
			hp:4,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_丹术1','kzsg_盾防1'],
		},
		'kzsg_骨盾医师4':{
			name:'kzsg_骨盾医师',
			translate:'骨盾医师',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'亡灵',
			hp:4,
			attack:2,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_丹术1','kzsg_盾防1'],
		},
		'kzsg_骨灵师7':{
			name:'kzsg_骨灵师',
			translate:'骨灵师',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'亡灵',
			hp:4,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_瘟疫','kzsg_丹术1'],
		},
		'kzsg_骨灵师4':{
			name:'kzsg_骨灵师',
			translate:'骨灵师',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'亡灵',
			hp:4,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_瘟疫','kzsg_丹术1'],
		},
		'kzsg_骨灵骑士7':{
			name:'kzsg_骨灵骑士',
			translate:'骨灵骑士',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'骑兵',
			hp:5,
			attack:2,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生','kzsg_践踏'],
		},
		'kzsg_骨灵骑士4':{
			name:'kzsg_骨灵骑士',
			translate:'骨灵骑士',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'骑兵',
			hp:5,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生','kzsg_践踏'],
		},
		'kzsg_骨医灵7':{
			name:'kzsg_骨医灵',
			translate:'骨医灵',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'亡灵',
			hp:3,
			attack:2,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生','kzsg_丹术1'],
		},
		'kzsg_骨医灵4':{
			name:'kzsg_骨医灵',
			translate:'骨医灵',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'亡灵',
			hp:3,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生','kzsg_丹术1'],
		},
		'kzsg_骨龙7':{
			name:'kzsg_骨龙',
			translate:'骨龙',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'龙',
			hp:5,
			attack:2,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_嗜血术1','kzsg_飞行'],
		},
		'kzsg_骨龙4':{
			name:'kzsg_骨龙',
			translate:'骨龙',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'龙',
			hp:5,
			attack:2,
			prepareRound:12,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_嗜血术1','kzsg_飞行'],
		},
		'kzsg_骨龙骑士7':{
			name:'kzsg_骨龙骑士',
			translate:'骨龙骑士',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'骑兵',
			hp:6,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_飞行','kzsg_长枪击'],
		},
		'kzsg_骨龙骑士4':{
			name:'kzsg_骨龙骑士',
			translate:'骨龙骑士',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'骑兵',
			hp:6,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_飞行','kzsg_长枪击'],
		},
		'kzsg_骷髅王7':{
			name:'kzsg_骷髅王',
			translate:'骷髅王',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'亡灵',
			hp:5,
			attack:3,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生'],
		},
		'kzsg_骷髅王4':{
			name:'kzsg_骷髅王',
			translate:'骷髅王',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'亡灵',
			hp:5,
			attack:3,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生'],
		},
		'kzsg_鬼玄武7':{
			name:'kzsg_鬼玄武',
			translate:'鬼玄武',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'异兽',
			hp:8,
			attack:2,
			prepareRound:18,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_嗜血术3','kzsg_飞行'],
		},
		'kzsg_刺盾兵6':{
			name:'kzsg_刺盾兵',
			translate:'刺盾兵',
			sex:'male',
			group:'wei',
			quailty:6,
			type:'步兵',
			hp:6,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_诅咒','kzsg_刃甲1'],
		},
		'kzsg_刺盾兵3':{
			name:'kzsg_刺盾兵',
			translate:'刺盾兵',
			sex:'male',
			group:'wei',
			quailty:3,
			type:'步兵',
			hp:6,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_诅咒','kzsg_刃甲1'],
		},
		'kzsg_天鉴者6':{
			name:'kzsg_天鉴者',
			translate:'天鉴者',
			sex:'male',
			group:'wei',
			quailty:6,
			type:'步兵',
			hp:4,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_洞察'],
		},
		'kzsg_天鉴者3':{
			name:'kzsg_天鉴者',
			translate:'天鉴者',
			sex:'male',
			group:'wei',
			quailty:3,
			type:'步兵',
			hp:4,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_洞察'],
		},
		'kzsg_尸兵6':{
			name:'kzsg_尸兵',
			translate:'尸兵',
			sex:'male',
			group:'wei',
			quailty:6,
			type:'亡灵',
			hp:3,
			attack:2,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_瘟疫'],
		},
		'kzsg_尸兵3':{
			name:'kzsg_尸兵',
			translate:'尸兵',
			sex:'male',
			group:'wei',
			quailty:3,
			type:'亡灵',
			hp:3,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_瘟疫'],
		},
		'kzsg_尸魔6':{
			name:'kzsg_尸魔',
			translate:'尸魔',
			sex:'male',
			group:'wei',
			quailty:6,
			type:'亡灵',
			hp:6,
			attack:3,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_降士气2','kzsg_重生'],
		},
		'kzsg_尸魔3':{
			name:'kzsg_尸魔',
			translate:'尸魔',
			sex:'male',
			group:'wei',
			quailty:3,
			type:'亡灵',
			hp:6,
			attack:3,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_降士气2','kzsg_重生'],
		},
		'kzsg_毒液铁壁6':{
			name:'kzsg_毒液铁壁',
			translate:'毒液铁壁',
			sex:'male',
			group:'wei',
			quailty:6,
			type:'军备',
			hp:6,
			attack:0,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_万毒阵'],
		},
		'kzsg_毒液铁壁3':{
			name:'kzsg_毒液铁壁',
			translate:'毒液铁壁',
			sex:'male',
			group:'wei',
			quailty:3,
			type:'军备',
			hp:6,
			attack:0,
			prepareRound:12,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_万毒阵'],
		},
		'kzsg_血池镜6':{
			name:'kzsg_血池镜',
			translate:'血池镜',
			sex:'male',
			group:'wei',
			quailty:6,
			type:'军备',
			hp:6,
			attack:0,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_水镜术1','kzsg_洞察'],
		},
		'kzsg_血池镜3':{
			name:'kzsg_血池镜',
			translate:'血池镜',
			sex:'male',
			group:'wei',
			quailty:3,
			type:'军备',
			hp:6,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_水镜术1','kzsg_洞察'],
		},
		'kzsg_血魔6':{
			name:'kzsg_血魔',
			translate:'血魔',
			sex:'male',
			group:'wei',
			quailty:6,
			type:'亡灵',
			hp:5,
			attack:1,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_嗜血术1','kzsg_丹术1'],
		},
		'kzsg_血魔3':{
			name:'kzsg_血魔',
			translate:'血魔',
			sex:'male',
			group:'wei',
			quailty:3,
			type:'亡灵',
			hp:5,
			attack:1,
			prepareRound:12,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_嗜血术1','kzsg_丹术1'],
		},
		'kzsg_青州重骑6':{
			name:'kzsg_青州重骑',
			translate:'青州重骑',
			sex:'male',
			group:'wei',
			quailty:6,
			type:'骑兵',
			hp:4,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_削弱'],
		},
		'kzsg_青州重骑3':{
			name:'kzsg_青州重骑',
			translate:'青州重骑',
			sex:'male',
			group:'wei',
			quailty:3,
			type:'骑兵',
			hp:4,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_削弱'],
		},
		'kzsg_骨弩6':{
			name:'kzsg_骨弩',
			translate:'骨弩',
			sex:'male',
			group:'wei',
			quailty:6,
			type:'弓手',
			hp:4,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生','kzsg_冷箭'],
		},
		'kzsg_骨弩3':{
			name:'kzsg_骨弩',
			translate:'骨弩',
			sex:'male',
			group:'wei',
			quailty:3,
			type:'弓手',
			hp:4,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生','kzsg_冷箭'],
		},
		'kzsg_骨法6':{
			name:'kzsg_骨法',
			translate:'骨法',
			sex:'male',
			group:'wei',
			quailty:6,
			type:'亡灵',
			hp:5,
			attack:2,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_丹术2'],
		},
		'kzsg_骨法3':{
			name:'kzsg_骨法',
			translate:'骨法',
			sex:'male',
			group:'wei',
			quailty:3,
			type:'亡灵',
			hp:5,
			attack:2,
			prepareRound:12,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_丹术2'],
		},
		'kzsg_骨盾卫6':{
			name:'kzsg_骨盾卫',
			translate:'骨盾卫',
			sex:'male',
			group:'wei',
			quailty:6,
			type:'亡灵',
			hp:5,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生','kzsg_盾防1'],
		},
		'kzsg_骨盾卫3':{
			name:'kzsg_骨盾卫',
			translate:'骨盾卫',
			sex:'male',
			group:'wei',
			quailty:3,
			type:'亡灵',
			hp:5,
			attack:2,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生','kzsg_盾防1'],
		},
		'kzsg_骨矛手6':{
			name:'kzsg_骨矛手',
			translate:'骨矛手',
			sex:'male',
			group:'wei',
			quailty:6,
			type:'步兵',
			hp:4,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_削弱'],
		},
		'kzsg_骨矛手3':{
			name:'kzsg_骨矛手',
			translate:'骨矛手',
			sex:'male',
			group:'wei',
			quailty:3,
			type:'步兵',
			hp:4,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_削弱'],
		},
		'kzsg_蛊惑之石5':{
			name:'kzsg_蛊惑之石',
			translate:'蛊惑之石',
			sex:'male',
			group:'wei',
			quailty:5,
			type:'军备',
			hp:6,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_蛊惑2'],
		},
		'kzsg_蛊惑之石2':{
			name:'kzsg_蛊惑之石',
			translate:'蛊惑之石',
			sex:'male',
			group:'wei',
			quailty:2,
			type:'军备',
			hp:6,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_蛊惑2'],
		},
		'kzsg_血枪卫5':{
			name:'kzsg_血枪卫',
			translate:'血枪卫',
			sex:'male',
			group:'wei',
			quailty:5,
			type:'步兵',
			hp:4,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_吸血'],
		},
		'kzsg_血枪卫2':{
			name:'kzsg_血枪卫',
			translate:'血枪卫',
			sex:'male',
			group:'wei',
			quailty:2,
			type:'步兵',
			hp:4,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_吸血'],
		},
		'kzsg_血骑5':{
			name:'kzsg_血骑',
			translate:'血骑',
			sex:'male',
			group:'wei',
			quailty:5,
			type:'骑兵',
			hp:4,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_吸血'],
		},
		'kzsg_血骑3':{
			name:'kzsg_血骑',
			translate:'血骑',
			sex:'male',
			group:'wei',
			quailty:3,
			type:'骑兵',
			hp:4,
			attack:1,
			prepareRound:3,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_吸血'],
		},
		'kzsg_血骑2':{
			name:'kzsg_血骑',
			translate:'血骑',
			sex:'male',
			group:'wei',
			quailty:2,
			type:'骑兵',
			hp:4,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_吸血'],
		},
		'kzsg_链球兵5':{
			name:'kzsg_链球兵',
			translate:'链球兵',
			sex:'male',
			group:'wei',
			quailty:5,
			type:'步兵',
			hp:3,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生'],
		},
		'kzsg_链球兵2':{
			name:'kzsg_链球兵',
			translate:'链球兵',
			sex:'male',
			group:'wei',
			quailty:2,
			type:'步兵',
			hp:3,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生'],
		},
		'kzsg_青州兵5':{
			name:'kzsg_青州兵',
			translate:'青州兵',
			sex:'male',
			group:'wei',
			quailty:5,
			type:'步兵',
			hp:4,
			attack:0,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_索命1'],
		},
		'kzsg_青州兵2':{
			name:'kzsg_青州兵',
			translate:'青州兵',
			sex:'male',
			group:'wei',
			quailty:2,
			type:'步兵',
			hp:4,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_索命1'],
		},
		'kzsg_青州暗骑5':{
			name:'kzsg_青州暗骑',
			translate:'青州暗骑',
			sex:'male',
			group:'wei',
			quailty:5,
			type:'骑兵',
			hp:4,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_索命2'],
		},
		'kzsg_青州暗骑2':{
			name:'kzsg_青州暗骑',
			translate:'青州暗骑',
			sex:'male',
			group:'wei',
			quailty:2,
			type:'骑兵',
			hp:4,
			attack:0,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_索命2'],
		},
		'kzsg_骨骑5':{
			name:'kzsg_骨骑',
			translate:'骨骑',
			sex:'male',
			group:'wei',
			quailty:5,
			type:'骑兵',
			hp:5,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生','kzsg_践踏'],
		},
		'kzsg_骨骑2':{
			name:'kzsg_骨骑',
			translate:'骨骑',
			sex:'male',
			group:'wei',
			quailty:2,
			type:'骑兵',
			hp:5,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生','kzsg_践踏'],
		},
		'kzsg_幽冥狼4':{
			name:'kzsg_幽冥狼',
			translate:'幽冥狼',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'亡灵',
			hp:2,
			attack:1,
			prepareRound:0,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_毒刃2'],
		},
		'kzsg_幽冥狼1':{
			name:'kzsg_幽冥狼',
			translate:'幽冥狼',
			sex:'male',
			group:'wei',
			quailty:1,
			type:'亡灵',
			hp:2,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_毒刃2'],
		},
		'kzsg_骷髅兵4':{
			name:'kzsg_骷髅兵',
			translate:'骷髅兵',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'亡灵',
			hp:3,
			attack:1,
			prepareRound:0,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生'],
		},
		'kzsg_骷髅兵1':{
			name:'kzsg_骷髅兵',
			translate:'骷髅兵',
			sex:'male',
			group:'wei',
			quailty:1,
			type:'亡灵',
			hp:3,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生'],
		},
		'kzsg_毒雾阵7':{
			name:'kzsg_毒雾阵',
			translate:'毒雾阵',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_瘟疫蔓延'],
		},
		'kzsg_毒雾阵4':{
			name:'kzsg_毒雾阵',
			translate:'毒雾阵',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_瘟疫蔓延'],
		},
		'kzsg_亡灵诅咒6':{
			name:'kzsg_亡灵诅咒',
			translate:'亡灵诅咒',
			sex:'male',
			group:'wei',
			quailty:6,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_瘟疫蔓延','kzsg_重生'],
		},
		'kzsg_复活咒4':{
			name:'kzsg_复活咒',
			translate:'复活咒',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_召唤','kzsg_重生'],
		},
		'kzsg_灭军魂咒4':{
			name:'kzsg_灭军魂咒',
			translate:'灭军魂咒',
			sex:'male',
			group:'wei',
			quailty:4,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_残废敌军','kzsg_降士气2'],
		},
		'kzsg_周瑜7':{
			name:'kzsg_周瑜',
			translate:'周瑜',
			sex:'male',
			group:'wu',
			quailty:7,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:16,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_火龙息4','kzsg_飞行'],
		},
		'kzsg_吕蒙7':{
			name:'kzsg_吕蒙',
			translate:'吕蒙',
			sex:'male',
			group:'wu',
			quailty:7,
			type:'武将',
			hp:5,
			attack:2,
			prepareRound:8,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_急救3','kzsg_自残1'],
		},
		'kzsg_吕蒙4':{
			name:'kzsg_吕蒙',
			translate:'吕蒙',
			sex:'male',
			group:'wu',
			quailty:4,
			type:'武将',
			hp:5,
			attack:2,
			prepareRound:10,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_急救3','kzsg_自残1'],
		},
		'kzsg_大乔7':{
			name:'kzsg_大乔',
			translate:'大乔',
			sex:'female',
			group:'wu',
			quailty:7,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:6,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_召唤'],
		},
		'kzsg_大乔4':{
			name:'kzsg_大乔',
			translate:'大乔',
			sex:'female',
			group:'wu',
			quailty:4,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:8,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_召唤'],
		},
		'kzsg_孙尚香7':{
			name:'kzsg_孙尚香',
			translate:'孙尚香',
			sex:'female',
			group:'wu',
			quailty:7,
			type:'武将',
			hp:5,
			attack:2,
			prepareRound:6,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_急救1','kzsg_冷箭'],
		},
		'kzsg_孙尚香4':{
			name:'kzsg_孙尚香',
			translate:'孙尚香',
			sex:'female',
			group:'wu',
			quailty:4,
			type:'武将',
			hp:5,
			attack:2,
			prepareRound:8,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_急救1','kzsg_冷箭'],
		},
		'kzsg_孙策7':{
			name:'kzsg_孙策',
			translate:'孙策',
			sex:'male',
			group:'wu',
			quailty:7,
			type:'武将',
			hp:9,
			attack:2,
			prepareRound:12,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_毒刃3'],
		},
		'kzsg_孙策4':{
			name:'kzsg_孙策',
			translate:'孙策',
			sex:'male',
			group:'wu',
			quailty:4,
			type:'武将',
			hp:9,
			attack:2,
			prepareRound:14,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_毒刃3'],
		},
		'kzsg_小乔7':{
			name:'kzsg_小乔',
			translate:'小乔',
			sex:'female',
			group:'wu',
			quailty:7,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:8,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_冰封2','kzsg_急救1'],
		},
		'kzsg_小乔4':{
			name:'kzsg_小乔',
			translate:'小乔',
			sex:'female',
			group:'wu',
			quailty:4,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:10,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_冰封2','kzsg_急救1'],
		},
		'kzsg_甘宁7':{
			name:'kzsg_甘宁',
			translate:'甘宁',
			sex:'male',
			group:'wu',
			quailty:7,
			type:'武将',
			hp:5,
			attack:2,
			prepareRound:6,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_削弱2'],
		},
		'kzsg_甘宁4':{
			name:'kzsg_甘宁',
			translate:'甘宁',
			sex:'male',
			group:'wu',
			quailty:4,
			type:'武将',
			hp:5,
			attack:2,
			prepareRound:8,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_削弱2'],
		},
		'kzsg_陆逊7':{
			name:'kzsg_陆逊',
			translate:'陆逊',
			sex:'male',
			group:'wu',
			quailty:7,
			type:'武将',
			hp:5,
			attack:1,
			prepareRound:8,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_炎流星1'],
		},
		'kzsg_陆逊4':{
			name:'kzsg_陆逊',
			translate:'陆逊',
			sex:'male',
			group:'wu',
			quailty:4,
			type:'武将',
			hp:5,
			attack:1,
			prepareRound:10,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_炎流星1'],
		},
		'kzsg_黄盖7':{
			name:'kzsg_黄盖',
			translate:'黄盖',
			sex:'male',
			group:'wu',
			quailty:7,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:8,
			bing:4,
			bao:2,
			shu:0,
			skills:['kzsg_激励弓手','kzsg_冷箭'],
		},
		'kzsg_黄盖4':{
			name:'kzsg_黄盖',
			translate:'黄盖',
			sex:'male',
			group:'wu',
			quailty:4,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:10,
			bing:4,
			bao:2,
			shu:0,
			skills:['kzsg_激励弓手','kzsg_冷箭'],
		},
		'kzsg_黑蛟龙7':{
			name:'kzsg_黑蛟龙',
			translate:'黑蛟龙',
			sex:'male',
			group:'wu',
			quailty:7,
			type:'武将',
			hp:8,
			attack:2,
			prepareRound:18,
			bing:4,
			bao:2,
			shu:0,
			skills:['kzsg_万毒阵','kzsg_飞行'],
		},
		'kzsg_丁奉6':{
			name:'kzsg_丁奉',
			translate:'丁奉',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'武将',
			hp:5,
			attack:2,
			prepareRound:6,
			bing:4,
			bao:0,
			shu:2,
			skills:['kzsg_冲阵2'],
		},
		'kzsg_丁奉3':{
			name:'kzsg_丁奉',
			translate:'丁奉',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'武将',
			hp:5,
			attack:2,
			prepareRound:8,
			bing:4,
			bao:0,
			shu:2,
			skills:['kzsg_冲阵2'],
		},
		'kzsg_周泰6':{
			name:'kzsg_周泰',
			translate:'周泰',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'武将',
			hp:5,
			attack:3,
			prepareRound:6,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_刃甲1'],
		},
		'kzsg_周泰3':{
			name:'kzsg_周泰',
			translate:'周泰',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'武将',
			hp:5,
			attack:3,
			prepareRound:8,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_刃甲1'],
		},
		'kzsg_太史慈6':{
			name:'kzsg_太史慈',
			translate:'太史慈',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'武将',
			hp:5,
			attack:2,
			prepareRound:6,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_毒刃2'],
		},
		'kzsg_太史慈3':{
			name:'kzsg_太史慈',
			translate:'太史慈',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'武将',
			hp:5,
			attack:2,
			prepareRound:8,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_毒刃2'],
		},
		'kzsg_张昭6':{
			name:'kzsg_张昭',
			translate:'张昭',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'武将',
			hp:5,
			attack:2,
			prepareRound:10,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_急救2'],
		},
		'kzsg_张昭3':{
			name:'kzsg_张昭',
			translate:'张昭',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'武将',
			hp:5,
			attack:2,
			prepareRound:12,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_急救1'],
		},
		'kzsg_朱治6':{
			name:'kzsg_朱治',
			translate:'朱治',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'武将',
			hp:5,
			attack:2,
			prepareRound:6,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_毒刃2'],
		},
		'kzsg_朱治3':{
			name:'kzsg_朱治',
			translate:'朱治',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'武将',
			hp:5,
			attack:2,
			prepareRound:8,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_毒刃2'],
		},
		'kzsg_鲁肃6':{
			name:'kzsg_鲁肃',
			translate:'鲁肃',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'武将',
			hp:5,
			attack:2,
			prepareRound:10,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_丹术2'],
		},
		'kzsg_鲁肃3':{
			name:'kzsg_鲁肃',
			translate:'鲁肃',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'武将',
			hp:5,
			attack:2,
			prepareRound:12,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_丹术2'],
		},
		'kzsg_吕范6':{
			name:'kzsg_吕范',
			translate:'吕范',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'武将',
			hp:4,
			attack:2,
			prepareRound:8,
			bing:4,
			bao:2,
			shu:0,
			skills:['kzsg_陷阱1'],
		},
		'kzsg_吕范3':{
			name:'kzsg_吕范',
			translate:'吕范',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'武将',
			hp:4,
			attack:2,
			prepareRound:10,
			bing:4,
			bao:2,
			shu:0,
			skills:['kzsg_陷阱1'],
		},
		'kzsg_毒海蜇5':{
			name:'kzsg_毒海蜇',
			translate:'毒海蜇',
			sex:'male',
			group:'wu',
			quailty:5,
			type:'异兽',
			hp:3,
			attack:1,
			prepareRound:0,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_毒刃2'],
		},
		'kzsg_毒海蜇2':{
			name:'kzsg_毒海蜇',
			translate:'毒海蜇',
			sex:'male',
			group:'wu',
			quailty:2,
			type:'异兽',
			hp:3,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_毒刃2'],
		},
		'kzsg_妖术师7':{
			name:'kzsg_妖术师',
			translate:'妖术师',
			sex:'male',
			group:'wu',
			quailty:7,
			type:'步兵',
			hp:5,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_横扫','kzsg_闪电1'],
		},
		'kzsg_妖术师4':{
			name:'kzsg_妖术师',
			translate:'妖术师',
			sex:'male',
			group:'wu',
			quailty:4,
			type:'步兵',
			hp:5,
			attack:2,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_横扫','kzsg_闪电1'],
		},
		'kzsg_宝石海星7':{
			name:'kzsg_宝石海星',
			translate:'宝石海星',
			sex:'male',
			group:'wu',
			quailty:7,
			type:'异兽',
			hp:4,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救1'],
		},
		'kzsg_宝石海星4':{
			name:'kzsg_宝石海星',
			translate:'宝石海星',
			sex:'male',
			group:'wu',
			quailty:4,
			type:'异兽',
			hp:4,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救1'],
		},
		'kzsg_掷斧手7':{
			name:'kzsg_掷斧手',
			translate:'掷斧手',
			sex:'male',
			group:'wu',
			quailty:7,
			type:'弓手',
			hp:4,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_削弱','kzsg_冷箭'],
		},
		'kzsg_掷斧手4':{
			name:'kzsg_掷斧手',
			translate:'掷斧手',
			sex:'male',
			group:'wu',
			quailty:4,
			type:'弓手',
			hp:4,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_削弱','kzsg_冷箭'],
		},
		'kzsg_朱雀骑兵7':{
			name:'kzsg_朱雀骑兵',
			translate:'朱雀骑兵',
			sex:'male',
			group:'wu',
			quailty:7,
			type:'骑兵',
			hp:5,
			attack:1,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救2','kzsg_践踏'],
		},
		'kzsg_朱雀骑兵4':{
			name:'kzsg_朱雀骑兵',
			translate:'朱雀骑兵',
			sex:'male',
			group:'wu',
			quailty:4,
			type:'骑兵',
			hp:5,
			attack:1,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救2','kzsg_践踏'],
		},
		'kzsg_海刺龙7':{
			name:'kzsg_海刺龙',
			translate:'海刺龙',
			sex:'male',
			group:'wu',
			quailty:7,
			type:'异兽',
			hp:4,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_奋击','kzsg_践踏'],
		},
		'kzsg_海刺龙4':{
			name:'kzsg_海刺龙',
			translate:'海刺龙',
			sex:'male',
			group:'wu',
			quailty:4,
			type:'异兽',
			hp:4,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_奋击','kzsg_践踏'],
		},
		'kzsg_游侠7':{
			name:'kzsg_游侠',
			translate:'游侠',
			sex:'male',
			group:'wu',
			quailty:7,
			type:'弓手',
			hp:6,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_盾防1','kzsg_冷箭'],
		},
		'kzsg_游侠4':{
			name:'kzsg_游侠',
			translate:'游侠',
			sex:'male',
			group:'wu',
			quailty:4,
			type:'弓手',
			hp:6,
			attack:2,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_盾防1','kzsg_冷箭'],
		},
		'kzsg_玉笛仙7':{
			name:'kzsg_玉笛仙',
			translate:'玉笛仙',
			sex:'female',
			group:'wu',
			quailty:7,
			type:'步兵',
			hp:5,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封1'],
		},
		'kzsg_玉笛仙4':{
			name:'kzsg_玉笛仙',
			translate:'玉笛仙',
			sex:'female',
			group:'wu',
			quailty:4,
			type:'步兵',
			hp:5,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封1'],
		},
		'kzsg_青龙7':{
			name:'kzsg_青龙',
			translate:'青龙',
			sex:'male',
			group:'wu',
			quailty:7,
			type:'异兽',
			hp:8,
			attack:2,
			prepareRound:18,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_削弱2','kzsg_飞行'],
		},
		'kzsg_冰剑卫6':{
			name:'kzsg_冰剑卫',
			translate:'冰剑卫',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'步兵',
			hp:4,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封2'],
		},
		'kzsg_冰剑卫3':{
			name:'kzsg_冰剑卫',
			translate:'冰剑卫',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'步兵',
			hp:4,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封2'],
		},
		'kzsg_刺客6':{
			name:'kzsg_刺客',
			translate:'刺客',
			sex:'female',
			group:'wu',
			quailty:6,
			type:'步兵',
			hp:4,
			attack:2,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_偷袭2'],
		},
		'kzsg_刺客3':{
			name:'kzsg_刺客',
			translate:'刺客',
			sex:'female',
			group:'wu',
			quailty:3,
			type:'步兵',
			hp:4,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_偷袭2'],
		},
		'kzsg_剑鱼卫6':{
			name:'kzsg_剑鱼卫',
			translate:'剑鱼卫',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'步兵',
			hp:4,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_奋击'],
		},
		'kzsg_剑鱼卫3':{
			name:'kzsg_剑鱼卫',
			translate:'剑鱼卫',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'步兵',
			hp:4,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_奋击'],
		},
		'kzsg_妙手医师6':{
			name:'kzsg_妙手医师',
			translate:'妙手医师',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'步兵',
			hp:4,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救2'],
		},
		'kzsg_妙手医师3':{
			name:'kzsg_妙手医师',
			translate:'妙手医师',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'步兵',
			hp:4,
			attack:1,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救2'],
		},
		'kzsg_格挡屏6':{
			name:'kzsg_格挡屏',
			translate:'格挡屏',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'军备',
			hp:6,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_保护弓手','kzsg_洞察'],
		},
		'kzsg_格挡屏3':{
			name:'kzsg_格挡屏',
			translate:'格挡屏',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'军备',
			hp:6,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_保护弓手','kzsg_洞察'],
		},
		'kzsg_毒刀卫6':{
			name:'kzsg_毒刀卫',
			translate:'毒刀卫',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'步兵',
			hp:4,
			attack:3,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_削弱'],
		},
		'kzsg_毒刀卫3':{
			name:'kzsg_毒刀卫',
			translate:'毒刀卫',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'步兵',
			hp:4,
			attack:3,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_削弱'],
		},
		'kzsg_毒蛟6':{
			name:'kzsg_毒蛟',
			translate:'毒蛟',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'龙',
			hp:4,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_毒刃2'],
		},
		'kzsg_毒蛟3':{
			name:'kzsg_毒蛟',
			translate:'毒蛟',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'龙',
			hp:4,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_毒刃2'],
		},
		'kzsg_水曼蛇6':{
			name:'kzsg_水曼蛇',
			translate:'水曼蛇',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'异兽',
			hp:4,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_奋击','kzsg_丹术1'],
		},
		'kzsg_水曼蛇3':{
			name:'kzsg_水曼蛇',
			translate:'水曼蛇',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'异兽',
			hp:4,
			attack:1,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_奋击','kzsg_丹术1'],
		},
		'kzsg_水毒龙6':{
			name:'kzsg_水毒龙',
			translate:'水毒龙',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'龙',
			hp:6,
			attack:2,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_毒刃3'],
		},
		'kzsg_水毒龙3':{
			name:'kzsg_水毒龙',
			translate:'水毒龙',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'龙',
			hp:6,
			attack:2,
			prepareRound:12,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_毒刃3'],
		},
		'kzsg_水骑兵6':{
			name:'kzsg_水骑兵',
			translate:'水骑兵',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'骑兵',
			hp:5,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_践踏'],
		},
		'kzsg_水骑兵3':{
			name:'kzsg_水骑兵',
			translate:'水骑兵',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'骑兵',
			hp:5,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_践踏'],
		},
		'kzsg_海刺鱼6':{
			name:'kzsg_海刺鱼',
			translate:'海刺鱼',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'异兽',
			hp:4,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_奋击'],
		},
		'kzsg_海刺鱼3':{
			name:'kzsg_海刺鱼',
			translate:'海刺鱼',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'异兽',
			hp:4,
			attack:1,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_奋击'],
		},
		'kzsg_炼药师6':{
			name:'kzsg_炼药师',
			translate:'炼药师',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'步兵',
			hp:5,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_丹术1'],
		},
		'kzsg_炼药师3':{
			name:'kzsg_炼药师',
			translate:'炼药师',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'步兵',
			hp:5,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_丹术1'],
		},
		'kzsg_皇家水卫6':{
			name:'kzsg_皇家水卫',
			translate:'皇家水卫',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'步兵',
			hp:5,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_威势2'],
		},
		'kzsg_皇家水卫3':{
			name:'kzsg_皇家水卫',
			translate:'皇家水卫',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'步兵',
			hp:5,
			attack:2,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_威势2'],
		},
		'kzsg_皇家预言师6':{
			name:'kzsg_皇家预言师',
			translate:'皇家预言师',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'步兵',
			hp:5,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_丹术1','kzsg_水镜术1'],
		},
		'kzsg_皇家预言师3':{
			name:'kzsg_皇家预言师',
			translate:'皇家预言师',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'步兵',
			hp:5,
			attack:1,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_丹术1','kzsg_水镜术1'],
		},
		'kzsg_药尊者6':{
			name:'kzsg_药尊者',
			translate:'药尊者',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'步兵',
			hp:5,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救2','kzsg_自残1'],
		},
		'kzsg_药尊者3':{
			name:'kzsg_药尊者',
			translate:'药尊者',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'步兵',
			hp:5,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救2','kzsg_自残1'],
		},
		'kzsg_蒙冲船6':{
			name:'kzsg_蒙冲船',
			translate:'蒙冲船',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'军备',
			hp:6,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冲阵2'],
		},
		'kzsg_蒙冲船3':{
			name:'kzsg_蒙冲船',
			translate:'蒙冲船',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'军备',
			hp:6,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冲阵2'],
		},
		'kzsg_游方术士6':{
			name:'kzsg_游方术士',
			translate:'游方术士',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'步兵',
			hp:4,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封1','kzsg_闪电1'],
		},
		'kzsg_游方术士3':{
			name:'kzsg_游方术士',
			translate:'游方术士',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'步兵',
			hp:4,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封1','kzsg_闪电1'],
		},
		'kzsg_隐刀卫6':{
			name:'kzsg_隐刀卫',
			translate:'隐刀卫',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'步兵',
			hp:4,
			attack:2,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_偷袭2'],
		},
		'kzsg_隐刀卫3':{
			name:'kzsg_隐刀卫',
			translate:'隐刀卫',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'步兵',
			hp:4,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_偷袭2'],
		},
		'kzsg_霸王骑6':{
			name:'kzsg_霸王骑',
			translate:'霸王骑',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'骑兵',
			hp:5,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_威势2'],
		},
		'kzsg_霸王骑3':{
			name:'kzsg_霸王骑',
			translate:'霸王骑',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'骑兵',
			hp:5,
			attack:2,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_威势2'],
		},
		'kzsg_马弓手6':{
			name:'kzsg_马弓手',
			translate:'马弓手',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'弓手',
			hp:6,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冷箭'],
		},
		'kzsg_马弓手3':{
			name:'kzsg_马弓手',
			translate:'马弓手',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'弓手',
			hp:6,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冷箭'],
		},
		'kzsg_医师5':{
			name:'kzsg_医师',
			translate:'医师',
			sex:'male',
			group:'wu',
			quailty:5,
			type:'步兵',
			hp:5,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救1'],
		},
		'kzsg_医师2':{
			name:'kzsg_医师',
			translate:'医师',
			sex:'male',
			group:'wu',
			quailty:2,
			type:'步兵',
			hp:5,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救1'],
		},
		'kzsg_咒术士5':{
			name:'kzsg_咒术士',
			translate:'咒术士',
			sex:'male',
			group:'wu',
			quailty:5,
			type:'步兵',
			hp:3,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_炎流星1'],
		},
		'kzsg_咒术士2':{
			name:'kzsg_咒术士',
			translate:'咒术士',
			sex:'male',
			group:'wu',
			quailty:2,
			type:'步兵',
			hp:3,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_炎流星1'],
		},
		'kzsg_天雷卫5':{
			name:'kzsg_天雷卫',
			translate:'天雷卫',
			sex:'male',
			group:'wu',
			quailty:5,
			type:'步兵',
			hp:5,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_闪电1'],
		},
		'kzsg_天雷卫2':{
			name:'kzsg_天雷卫',
			translate:'天雷卫',
			sex:'male',
			group:'wu',
			quailty:2,
			type:'步兵',
			hp:5,
			attack:1,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_闪电1'],
		},
		'kzsg_游方雷卫5':{
			name:'kzsg_游方雷卫',
			translate:'游方雷卫',
			sex:'male',
			group:'wu',
			quailty:5,
			type:'步兵',
			hp:3,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_连锁枪1'],
		},
		'kzsg_游方雷卫2':{
			name:'kzsg_游方雷卫',
			translate:'游方雷卫',
			sex:'male',
			group:'wu',
			quailty:2,
			type:'步兵',
			hp:3,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_连锁枪1'],
		},
		'kzsg_火雷5':{
			name:'kzsg_火雷',
			translate:'火雷',
			sex:'male',
			group:'wu',
			quailty:5,
			type:'军备',
			hp:2,
			attack:0,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火龙息4','kzsg_自残1'],
		},
		'kzsg_火雷2':{
			name:'kzsg_火雷',
			translate:'火雷',
			sex:'male',
			group:'wu',
			quailty:2,
			type:'军备',
			hp:2,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火龙息4','kzsg_自残1'],
		},
		'kzsg_预言师5':{
			name:'kzsg_预言师',
			translate:'预言师',
			sex:'male',
			group:'wu',
			quailty:5,
			type:'步兵',
			hp:3,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_闪电3','kzsg_自残1'],
		},
		'kzsg_预言师2':{
			name:'kzsg_预言师',
			translate:'预言师',
			sex:'male',
			group:'wu',
			quailty:2,
			type:'步兵',
			hp:3,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_闪电3','kzsg_自残1'],
		},
		'kzsg_水矛手4':{
			name:'kzsg_水矛手',
			translate:'水矛手',
			sex:'male',
			group:'wu',
			quailty:4,
			type:'弓手',
			hp:4,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冷箭'],
		},
		'kzsg_水矛手1':{
			name:'kzsg_水矛手',
			translate:'水矛手',
			sex:'male',
			group:'wu',
			quailty:1,
			type:'弓手',
			hp:4,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冷箭'],
		},
		'kzsg_浪人4':{
			name:'kzsg_浪人',
			translate:'浪人',
			sex:'male',
			group:'wu',
			quailty:4,
			type:'步兵',
			hp:2,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_陷阱1'],
		},
		'kzsg_浪人1':{
			name:'kzsg_浪人',
			translate:'浪人',
			sex:'male',
			group:'wu',
			quailty:1,
			type:'步兵',
			hp:2,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_陷阱1'],
		},
		'kzsg_浮木针1':{
			name:'kzsg_浮木针',
			translate:'浮木针',
			sex:'male',
			group:'wu',
			quailty:1,
			type:'军备',
			hp:2,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_陷阱1','kzsg_刃甲1'],
		},
		'kzsg_观星者4':{
			name:'kzsg_观星者',
			translate:'观星者',
			sex:'male',
			group:'wu',
			quailty:4,
			type:'步兵',
			hp:3,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救1','kzsg_闪电1'],
		},
		'kzsg_观星者1':{
			name:'kzsg_观星者',
			translate:'观星者',
			sex:'male',
			group:'wu',
			quailty:1,
			type:'步兵',
			hp:3,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救1','kzsg_闪电1'],
		},
		'kzsg_近卫水兵1':{
			name:'kzsg_近卫水兵',
			translate:'近卫水兵',
			sex:'male',
			group:'wu',
			quailty:1,
			type:'步兵',
			hp:5,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:[],
		},
		'kzsg_近身兵1':{
			name:'kzsg_近身兵',
			translate:'近身兵',
			sex:'male',
			group:'wu',
			quailty:1,
			type:'步兵',
			hp:3,
			attack:2,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:[],
		},
		'kzsg_八卦阴阳阵7':{
			name:'kzsg_八卦阴阳阵',
			translate:'八卦阴阳阵',
			sex:'male',
			group:'wu',
			quailty:7,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_群疗','kzsg_残废敌军'],
		},
		'kzsg_水牢阵7':{
			name:'kzsg_水牢阵',
			translate:'水牢阵',
			sex:'male',
			group:'wu',
			quailty:7,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_陷阱连阵'],
		},
		'kzsg_水牢阵4':{
			name:'kzsg_水牢阵',
			translate:'水牢阵',
			sex:'male',
			group:'wu',
			quailty:4,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_陷阱连阵'],
		},
		'kzsg_狂雷天网6':{
			name:'kzsg_狂雷天网',
			translate:'狂雷天网',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_闪电3'],
		},
		'kzsg_狂雷天网3':{
			name:'kzsg_狂雷天网',
			translate:'狂雷天网',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_闪电3'],
		},
		'kzsg_幻雾毒阵4':{
			name:'kzsg_幻雾毒阵',
			translate:'幻雾毒阵',
			sex:'male',
			group:'wu',
			quailty:4,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_万毒阵','kzsg_重生'],
		},
		'kzsg_刘备7':{
			name:'kzsg_刘备',
			translate:'刘备',
			sex:'male',
			group:'shu',
			quailty:7,
			type:'武将',
			hp:8,
			attack:2,
			prepareRound:8,
			bing:4,
			bao:2,
			shu:0,
			skills:['kzsg_激励全军'],
		},
		'kzsg_刘备4':{
			name:'kzsg_刘备',
			translate:'刘备',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'武将',
			hp:8,
			attack:2,
			prepareRound:10,
			bing:4,
			bao:2,
			shu:0,
			skills:['kzsg_激励全军'],
		},
		'kzsg_关羽7':{
			name:'kzsg_关羽',
			translate:'关羽',
			sex:'male',
			group:'shu',
			quailty:7,
			type:'武将',
			hp:8,
			attack:3,
			prepareRound:12,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_威势2','kzsg_横扫'],
		},
		'kzsg_关羽4':{
			name:'kzsg_关羽',
			translate:'关羽',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'武将',
			hp:8,
			attack:3,
			prepareRound:14,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_威势2','kzsg_横扫'],
		},
		'kzsg_张飞7':{
			name:'kzsg_张飞',
			translate:'张飞',
			sex:'male',
			group:'shu',
			quailty:7,
			type:'武将',
			hp:8,
			attack:3,
			prepareRound:6,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_奋击','kzsg_自残1'],
		},
		'kzsg_张飞4':{
			name:'kzsg_张飞',
			translate:'张飞',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'武将',
			hp:8,
			attack:3,
			prepareRound:8,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_奋击','kzsg_自残1'],
		},
		'kzsg_赵云7':{
			name:'kzsg_赵云',
			translate:'赵云',
			sex:'male',
			group:'shu',
			quailty:7,
			type:'武将',
			hp:8,
			attack:3,
			prepareRound:12,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_连锁枪2','kzsg_盾防1'],
		},
		'kzsg_赵云4':{
			name:'kzsg_赵云',
			translate:'赵云',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'武将',
			hp:8,
			attack:3,
			prepareRound:14,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_连锁枪2','kzsg_盾防1'],
		},
		'kzsg_马超7':{
			name:'kzsg_马超',
			translate:'马超',
			sex:'male',
			group:'shu',
			quailty:7,
			type:'武将',
			hp:8,
			attack:3,
			prepareRound:8,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_冲阵2','kzsg_刃甲2'],
		},
		'kzsg_马超5':{
			name:'kzsg_马超',
			translate:'马超',
			sex:'male',
			group:'shu',
			quailty:5,
			type:'武将',
			hp:8,
			attack:3,
			prepareRound:10,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_冲阵2','kzsg_刃甲2'],
		},
		'kzsg_黄忠7':{
			name:'kzsg_黄忠',
			translate:'黄忠',
			sex:'male',
			group:'shu',
			quailty:7,
			type:'武将',
			hp:8,
			attack:2,
			prepareRound:8,
			bing:4,
			bao:2,
			shu:0,
			skills:['kzsg_冷箭'],
		},
		'kzsg_黄忠4':{
			name:'kzsg_黄忠',
			translate:'黄忠',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'武将',
			hp:8,
			attack:2,
			prepareRound:10,
			bing:4,
			bao:2,
			shu:0,
			skills:['kzsg_冷箭'],
		},
		'kzsg_诸葛亮7':{
			name:'kzsg_诸葛亮',
			translate:'诸葛亮',
			sex:'male',
			group:'shu',
			quailty:7,
			type:'武将',
			hp:8,
			attack:2,
			prepareRound:18,
			bing:4,
			bao:2,
			shu:0,
			skills:['kzsg_冰封4','kzsg_飞行'],
		},
		'kzsg_诸葛亮4':{
			name:'kzsg_诸葛亮',
			translate:'诸葛亮',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:20,
			bing:4,
			bao:2,
			shu:0,
			skills:['kzsg_冰封3','kzsg_飞行'],
		},
		'kzsg_姜维7':{
			name:'kzsg_姜维',
			translate:'姜维',
			sex:'male',
			group:'shu',
			quailty:7,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:10,
			bing:4,
			bao:0,
			shu:2,
			skills:['kzsg_冰封3','kzsg_飞行'],
		},
		'kzsg_姜维4':{
			name:'kzsg_姜维',
			translate:'姜维',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:12,
			bing:4,
			bao:0,
			shu:2,
			skills:['kzsg_冰封3','kzsg_飞行'],
		},
		'kzsg_魏延7':{
			name:'kzsg_魏延',
			translate:'魏延',
			sex:'male',
			group:'shu',
			quailty:7,
			type:'武将',
			hp:8,
			attack:3,
			prepareRound:10,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_激励骑兵','kzsg_践踏'],
		},
		'kzsg_魏延4':{
			name:'kzsg_魏延',
			translate:'魏延',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'武将',
			hp:8,
			attack:3,
			prepareRound:12,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_激励骑兵','kzsg_践踏'],
		},
		'kzsg_黄月英7':{
			name:'kzsg_黄月英',
			translate:'黄月英',
			sex:'female',
			group:'shu',
			quailty:7,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:8,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_冰封2','kzsg_急救1'],
		},
		'kzsg_黄月英4':{
			name:'kzsg_黄月英',
			translate:'黄月英',
			sex:'female',
			group:'shu',
			quailty:4,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:10,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_冰封2','kzsg_急救1'],
		},
		'kzsg_周仓6':{
			name:'kzsg_周仓',
			translate:'周仓',
			sex:'male',
			group:'shu',
			quailty:6,
			type:'武将',
			hp:8,
			attack:3,
			prepareRound:8,
			bing:6,
			bao:0,
			shu:0,
			skills:[],
		},
		'kzsg_周仓3':{
			name:'kzsg_周仓',
			translate:'周仓',
			sex:'male',
			group:'shu',
			quailty:3,
			type:'武将',
			hp:8,
			attack:3,
			prepareRound:10,
			bing:6,
			bao:0,
			shu:0,
			skills:[],
		},
		'kzsg_张苞6':{
			name:'kzsg_张苞',
			translate:'张苞',
			sex:'male',
			group:'shu',
			quailty:6,
			type:'武将',
			hp:8,
			attack:2,
			prepareRound:8,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_刃甲1'],
		},
		'kzsg_张苞3':{
			name:'kzsg_张苞',
			translate:'张苞',
			sex:'male',
			group:'shu',
			quailty:3,
			type:'武将',
			hp:8,
			attack:2,
			prepareRound:10,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_刃甲1'],
		},
		'kzsg_法正6':{
			name:'kzsg_法正',
			translate:'法正',
			sex:'male',
			group:'shu',
			quailty:6,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:8,
			bing:4,
			bao:2,
			shu:0,
			skills:['kzsg_急救2'],
		},
		'kzsg_法正3':{
			name:'kzsg_法正',
			translate:'法正',
			sex:'male',
			group:'shu',
			quailty:3,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:10,
			bing:4,
			bao:2,
			shu:0,
			skills:['kzsg_急救2'],
		},
		'kzsg_蒋琬6':{
			name:'kzsg_蒋琬',
			translate:'蒋琬',
			sex:'male',
			group:'shu',
			quailty:6,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:8,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_闪电2'],
		},
		'kzsg_蒋琬3':{
			name:'kzsg_蒋琬',
			translate:'蒋琬',
			sex:'male',
			group:'shu',
			quailty:3,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:10,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_闪电2'],
		},
		'kzsg_关平6':{
			name:'kzsg_关平',
			translate:'关平',
			sex:'male',
			group:'shu',
			quailty:6,
			type:'武将',
			hp:6,
			attack:3,
			prepareRound:6,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_践踏'],
		},
		'kzsg_关平3':{
			name:'kzsg_关平',
			translate:'关平',
			sex:'male',
			group:'shu',
			quailty:3,
			type:'武将',
			hp:6,
			attack:3,
			prepareRound:8,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_践踏'],
		},
		'kzsg_庞统6':{
			name:'kzsg_庞统',
			translate:'庞统',
			sex:'male',
			group:'shu',
			quailty:6,
			type:'武将',
			hp:5,
			attack:2,
			prepareRound:8,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_陷阱1'],
		},
		'kzsg_庞统3':{
			name:'kzsg_庞统',
			translate:'庞统',
			sex:'male',
			group:'shu',
			quailty:3,
			type:'武将',
			hp:5,
			attack:2,
			prepareRound:10,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_陷阱1'],
		},
		'kzsg_冰纹豹7':{
			name:'kzsg_冰纹豹',
			translate:'冰纹豹',
			sex:'male',
			group:'shu',
			quailty:7,
			type:'异兽',
			hp:4,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封2'],
		},
		'kzsg_冰纹豹4':{
			name:'kzsg_冰纹豹',
			translate:'冰纹豹',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'异兽',
			hp:4,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封2'],
		},
		'kzsg_斧头兵7':{
			name:'kzsg_斧头兵',
			translate:'斧头兵',
			sex:'male',
			group:'shu',
			quailty:7,
			type:'步兵',
			hp:5,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_狂暴'],
		},
		'kzsg_斧头兵4':{
			name:'kzsg_斧头兵',
			translate:'斧头兵',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'步兵',
			hp:5,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_狂暴'],
		},
		'kzsg_流浪剑侠7':{
			name:'kzsg_流浪剑侠',
			translate:'流浪剑侠',
			sex:'male',
			group:'shu',
			quailty:7,
			type:'步兵',
			hp:5,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_横扫'],
		},
		'kzsg_流浪剑侠4':{
			name:'kzsg_流浪剑侠',
			translate:'流浪剑侠',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'步兵',
			hp:5,
			attack:2,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_横扫'],
		},
		'kzsg_雪翼虎7':{
			name:'kzsg_雪翼虎',
			translate:'雪翼虎',
			sex:'male',
			group:'shu',
			quailty:7,
			type:'异兽',
			hp:5,
			attack:1,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封2','kzsg_飞行'],
		},
		'kzsg_雪翼虎4':{
			name:'kzsg_雪翼虎',
			translate:'雪翼虎',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'异兽',
			hp:5,
			attack:1,
			prepareRound:12,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封2','kzsg_飞行'],
		},
		'kzsg_鹿号手7':{
			name:'kzsg_鹿号手',
			translate:'鹿号手',
			sex:'male',
			group:'shu',
			quailty:7,
			type:'步兵',
			hp:5,
			attack:0,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_军魂','kzsg_横扫'],
		},
		'kzsg_鹿号手4':{
			name:'kzsg_鹿号手',
			translate:'鹿号手',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'步兵',
			hp:5,
			attack:0,
			prepareRound:12,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_军魂','kzsg_横扫'],
		},
		'kzsg_龙之铁骑7':{
			name:'kzsg_龙之铁骑',
			translate:'龙之铁骑',
			sex:'male',
			group:'shu',
			quailty:7,
			type:'骑兵',
			hp:4,
			attack:3,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_盾防1','kzsg_践踏'],
		},
		'kzsg_龙之铁骑4':{
			name:'kzsg_龙之铁骑',
			translate:'龙之铁骑',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'骑兵',
			hp:4,
			attack:3,
			prepareRound:12,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_盾防1','kzsg_践踏'],
		},
		'kzsg_兵车6':{
			name:'kzsg_兵车',
			translate:'兵车',
			sex:'male',
			group:'shu',
			quailty:6,
			type:'军备',
			hp:6,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_保护步兵','kzsg_洞察'],
		},
		'kzsg_兵车3':{
			name:'kzsg_兵车',
			translate:'兵车',
			sex:'male',
			group:'shu',
			quailty:3,
			type:'军备',
			hp:6,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_保护步兵','kzsg_洞察'],
		},
		'kzsg_刺甲盾卫6':{
			name:'kzsg_刺甲盾卫',
			translate:'刺甲盾卫',
			sex:'male',
			group:'shu',
			quailty:6,
			type:'步兵',
			hp:4,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_刃甲1','kzsg_盾防1'],
		},
		'kzsg_刺甲盾卫3':{
			name:'kzsg_刺甲盾卫',
			translate:'刺甲盾卫',
			sex:'male',
			group:'shu',
			quailty:3,
			type:'步兵',
			hp:4,
			attack:1,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_刃甲1','kzsg_盾防1'],
		},
		'kzsg_巨鹿角阵6':{
			name:'kzsg_巨鹿角阵',
			translate:'巨鹿角阵',
			sex:'male',
			group:'shu',
			quailty:6,
			type:'军备',
			hp:6,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_刃甲2'],
		},
		'kzsg_巨鹿角阵3':{
			name:'kzsg_巨鹿角阵',
			translate:'巨鹿角阵',
			sex:'male',
			group:'shu',
			quailty:3,
			type:'军备',
			hp:6,
			attack:1,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_刃甲2'],
		},
		'kzsg_冲阵车6':{
			name:'kzsg_冲阵车',
			translate:'冲阵车',
			sex:'male',
			group:'shu',
			quailty:6,
			type:'军备',
			hp:4,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冲阵4'],
		},
		'kzsg_冲阵车3':{
			name:'kzsg_冲阵车',
			translate:'冲阵车',
			sex:'male',
			group:'shu',
			quailty:3,
			type:'军备',
			hp:4,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冲阵4'],
		},
		'kzsg_皇家雷卫6':{
			name:'kzsg_皇家雷卫',
			translate:'皇家雷卫',
			sex:'male',
			group:'shu',
			quailty:6,
			type:'步兵',
			hp:4,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_闪电1','kzsg_水镜术1'],
		},
		'kzsg_皇家雷卫3':{
			name:'kzsg_皇家雷卫',
			translate:'皇家雷卫',
			sex:'male',
			group:'shu',
			quailty:3,
			type:'步兵',
			hp:4,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_闪电1','kzsg_水镜术1'],
		},
		'kzsg_突袭铁骑6':{
			name:'kzsg_突袭铁骑',
			translate:'突袭铁骑',
			sex:'male',
			group:'shu',
			quailty:6,
			type:'骑兵',
			hp:4,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_偷袭2','kzsg_践踏'],
		},
		'kzsg_突袭铁骑3':{
			name:'kzsg_突袭铁骑',
			translate:'突袭铁骑',
			sex:'male',
			group:'shu',
			quailty:3,
			type:'骑兵',
			hp:4,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_偷袭2','kzsg_践踏'],
		},
		'kzsg_翼白虎6':{
			name:'kzsg_翼白虎',
			translate:'翼白虎',
			sex:'male',
			group:'shu',
			quailty:6,
			type:'异兽',
			hp:3,
			attack:1,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封1','kzsg_飞行'],
		},
		'kzsg_翼白虎3':{
			name:'kzsg_翼白虎',
			translate:'翼白虎',
			sex:'male',
			group:'shu',
			quailty:3,
			type:'异兽',
			hp:3,
			attack:1,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封1','kzsg_飞行'],
		},
		'kzsg_舞娘6':{
			name:'kzsg_舞娘',
			translate:'舞娘',
			sex:'female',
			group:'shu',
			quailty:6,
			type:'步兵',
			hp:4,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_闪电1'],
		},
		'kzsg_舞娘3':{
			name:'kzsg_舞娘',
			translate:'舞娘',
			sex:'female',
			group:'shu',
			quailty:3,
			type:'步兵',
			hp:4,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_闪电1'],
		},
		'kzsg_郎中6':{
			name:'kzsg_郎中',
			translate:'郎中',
			sex:'male',
			group:'shu',
			quailty:6,
			type:'步兵',
			hp:4,
			attack:1,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救2'],
		},
		'kzsg_郎中3':{
			name:'kzsg_郎中',
			translate:'郎中',
			sex:'male',
			group:'shu',
			quailty:3,
			type:'步兵',
			hp:4,
			attack:1,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救2'],
		},
		'kzsg_医侠6':{
			name:'kzsg_医侠',
			translate:'医侠',
			sex:'male',
			group:'shu',
			quailty:6,
			type:'步兵',
			hp:5,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救1','kzsg_保护步兵'],
		},
		'kzsg_医侠3':{
			name:'kzsg_医侠',
			translate:'医侠',
			sex:'male',
			group:'shu',
			quailty:3,
			type:'步兵',
			hp:5,
			attack:1,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救1','kzsg_保护步兵'],
		},
		'kzsg_重甲精骑6':{
			name:'kzsg_重甲精骑',
			translate:'重甲精骑',
			sex:'male',
			group:'shu',
			quailty:6,
			type:'骑兵',
			hp:4,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_盾防1','kzsg_践踏'],
		},
		'kzsg_重甲精骑3':{
			name:'kzsg_重甲精骑',
			translate:'重甲精骑',
			sex:'male',
			group:'shu',
			quailty:3,
			type:'骑兵',
			hp:4,
			attack:2,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_盾防1','kzsg_践踏'],
		},
		'kzsg_银枪卫6':{
			name:'kzsg_银枪卫',
			translate:'银枪卫',
			sex:'male',
			group:'shu',
			quailty:6,
			type:'步兵',
			hp:4,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_盾防1','kzsg_长枪击'],
		},
		'kzsg_银枪卫3':{
			name:'kzsg_银枪卫',
			translate:'银枪卫',
			sex:'male',
			group:'shu',
			quailty:3,
			type:'步兵',
			hp:4,
			attack:2,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_盾防1','kzsg_长枪击'],
		},
		'kzsg_雪狮6':{
			name:'kzsg_雪狮',
			translate:'雪狮',
			sex:'male',
			group:'shu',
			quailty:6,
			type:'异兽',
			hp:3,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封1'],
		},
		'kzsg_雪狮3':{
			name:'kzsg_雪狮',
			translate:'雪狮',
			sex:'male',
			group:'shu',
			quailty:3,
			type:'异兽',
			hp:3,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封1'],
		},
		'kzsg_霹雳卫6':{
			name:'kzsg_霹雳卫',
			translate:'霹雳卫',
			sex:'male',
			group:'shu',
			quailty:6,
			type:'步兵',
			hp:3,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_闪电2','kzsg_丹术1'],
		},
		'kzsg_霹雳卫3':{
			name:'kzsg_霹雳卫',
			translate:'霹雳卫',
			sex:'male',
			group:'shu',
			quailty:3,
			type:'步兵',
			hp:3,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_闪电2','kzsg_丹术1'],
		},
		'kzsg_青州盟兵6':{
			name:'kzsg_青州盟兵',
			translate:'青州盟兵',
			sex:'male',
			group:'shu',
			quailty:6,
			type:'步兵',
			hp:4,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_毒刃2','kzsg_丹术1'],
		},
		'kzsg_青州盟兵3':{
			name:'kzsg_青州盟兵',
			translate:'青州盟兵',
			sex:'male',
			group:'shu',
			quailty:3,
			type:'步兵',
			hp:4,
			attack:1,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_毒刃2','kzsg_丹术1'],
		},
		'kzsg_守望塔5':{
			name:'kzsg_守望塔',
			translate:'守望塔',
			sex:'male',
			group:'shu',
			quailty:5,
			type:'军备',
			hp:6,
			attack:0,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_保护步兵'],
		},
		'kzsg_守望塔2':{
			name:'kzsg_守望塔',
			translate:'守望塔',
			sex:'male',
			group:'shu',
			quailty:2,
			type:'军备',
			hp:6,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_保护步兵'],
		},
		'kzsg_暴风鹰5':{
			name:'kzsg_暴风鹰',
			translate:'暴风鹰',
			sex:'male',
			group:'shu',
			quailty:5,
			type:'异兽',
			hp:4,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_飞行'],
		},
		'kzsg_暴风鹰2':{
			name:'kzsg_暴风鹰',
			translate:'暴风鹰',
			sex:'male',
			group:'shu',
			quailty:2,
			type:'异兽',
			hp:4,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_飞行'],
		},
		'kzsg_木盾兵5':{
			name:'kzsg_木盾兵',
			translate:'木盾兵',
			sex:'male',
			group:'shu',
			quailty:5,
			type:'步兵',
			hp:3,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_盾防1'],
		},
		'kzsg_木盾兵2':{
			name:'kzsg_木盾兵',
			translate:'木盾兵',
			sex:'male',
			group:'shu',
			quailty:2,
			type:'步兵',
			hp:3,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_盾防1'],
		},
		'kzsg_枪骑兵5':{
			name:'kzsg_枪骑兵',
			translate:'枪骑兵',
			sex:'male',
			group:'shu',
			quailty:5,
			type:'骑兵',
			hp:3,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冲阵2'],
		},
		'kzsg_枪骑兵2':{
			name:'kzsg_枪骑兵',
			translate:'枪骑兵',
			sex:'male',
			group:'shu',
			quailty:2,
			type:'骑兵',
			hp:3,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冲阵2'],
		},
		'kzsg_皇家术师5':{
			name:'kzsg_皇家术师',
			translate:'皇家术师',
			sex:'male',
			group:'shu',
			quailty:5,
			type:'步兵',
			hp:3,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_闪电2'],
		},
		'kzsg_皇家术师2':{
			name:'kzsg_皇家术师',
			translate:'皇家术师',
			sex:'male',
			group:'shu',
			quailty:2,
			type:'步兵',
			hp:3,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_闪电2'],
		},
		'kzsg_藏獒5':{
			name:'kzsg_藏獒',
			translate:'藏獒',
			sex:'male',
			group:'shu',
			quailty:5,
			type:'异兽',
			hp:1,
			attack:4,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:[],
		},
		'kzsg_藏獒2':{
			name:'kzsg_藏獒',
			translate:'藏獒',
			sex:'male',
			group:'shu',
			quailty:2,
			type:'异兽',
			hp:1,
			attack:4,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:[],
		},
		'kzsg_血剑卫5':{
			name:'kzsg_血剑卫',
			translate:'血剑卫',
			sex:'male',
			group:'shu',
			quailty:5,
			type:'步兵',
			hp:4,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_横扫'],
		},
		'kzsg_血剑卫2':{
			name:'kzsg_血剑卫',
			translate:'血剑卫',
			sex:'male',
			group:'shu',
			quailty:2,
			type:'步兵',
			hp:4,
			attack:1,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_横扫'],
		},
		'kzsg_轻骑兵5':{
			name:'kzsg_轻骑兵',
			translate:'轻骑兵',
			sex:'male',
			group:'shu',
			quailty:5,
			type:'骑兵',
			hp:5,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_践踏'],
		},
		'kzsg_轻骑兵2':{
			name:'kzsg_轻骑兵',
			translate:'轻骑兵',
			sex:'male',
			group:'shu',
			quailty:2,
			type:'骑兵',
			hp:5,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_践踏'],
		},
		'kzsg_长枪卫5':{
			name:'kzsg_长枪卫',
			translate:'长枪卫',
			sex:'male',
			group:'shu',
			quailty:5,
			type:'步兵',
			hp:5,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_长枪击'],
		},
		'kzsg_长枪卫2':{
			name:'kzsg_长枪卫',
			translate:'长枪卫',
			sex:'male',
			group:'shu',
			quailty:2,
			type:'步兵',
			hp:5,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_长枪击'],
		},
		'kzsg_伏击兵4':{
			name:'kzsg_伏击兵',
			translate:'伏击兵',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'步兵',
			hp:2,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_陷阱1'],
		},
		'kzsg_伏击兵1':{
			name:'kzsg_伏击兵',
			translate:'伏击兵',
			sex:'male',
			group:'shu',
			quailty:1,
			type:'步兵',
			hp:2,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_陷阱1'],
		},
		'kzsg_妖师4':{
			name:'kzsg_妖师',
			translate:'妖师',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'步兵',
			hp:3,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_蛊惑1'],
		},
		'kzsg_妖师1':{
			name:'kzsg_妖师',
			translate:'妖师',
			sex:'male',
			group:'shu',
			quailty:1,
			type:'步兵',
			hp:3,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_蛊惑1'],
		},
		'kzsg_拒马阵地1':{
			name:'kzsg_拒马阵地',
			translate:'拒马阵地',
			sex:'male',
			group:'shu',
			quailty:1,
			type:'军备',
			hp:4,
			attack:0,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_刃甲2'],
		},
		'kzsg_暗器手4':{
			name:'kzsg_暗器手',
			translate:'暗器手',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'步兵',
			hp:4,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_索命1'],
		},
		'kzsg_暗器手1':{
			name:'kzsg_暗器手',
			translate:'暗器手',
			sex:'male',
			group:'shu',
			quailty:1,
			type:'步兵',
			hp:4,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_索命1'],
		},
		'kzsg_号角手4':{
			name:'kzsg_号角手',
			translate:'号角手',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'步兵',
			hp:4,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_激励步兵'],
		},
		'kzsg_号角手1':{
			name:'kzsg_号角手',
			translate:'号角手',
			sex:'male',
			group:'shu',
			quailty:1,
			type:'步兵',
			hp:4,
			attack:0,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_激励步兵'],
		},
		'kzsg_蜀兵4':{
			name:'kzsg_蜀兵',
			translate:'蜀兵',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'步兵',
			hp:3,
			attack:2,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:[],
		},
		'kzsg_蜀兵1':{
			name:'kzsg_蜀兵',
			translate:'蜀兵',
			sex:'male',
			group:'shu',
			quailty:1,
			type:'步兵',
			hp:3,
			attack:2,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:[],
		},
		'kzsg_刀车兵4':{
			name:'kzsg_刀车兵',
			translate:'刀车兵',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'步兵',
			hp:2,
			attack:2,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_刃甲1'],
		},
		'kzsg_刀车兵1':{
			name:'kzsg_刀车兵',
			translate:'刀车兵',
			sex:'male',
			group:'shu',
			quailty:1,
			type:'步兵',
			hp:2,
			attack:2,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_刃甲1'],
		},
		'kzsg_民卫4':{
			name:'kzsg_民卫',
			translate:'民卫',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'步兵',
			hp:5,
			attack:1,
			prepareRound:0,
			bing:0,
			bao:0,
			shu:0,
			skills:[],
		},
		'kzsg_民卫1':{
			name:'kzsg_民卫',
			translate:'民卫',
			sex:'male',
			group:'shu',
			quailty:1,
			type:'步兵',
			hp:5,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:[],
		},
		'kzsg_一字长蛇6':{
			name:'kzsg_一字长蛇',
			translate:'一字长蛇',
			sex:'male',
			group:'shu',
			quailty:6,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_群疗'],
		},
		'kzsg_一字长蛇3':{
			name:'kzsg_一字长蛇',
			translate:'一字长蛇',
			sex:'male',
			group:'shu',
			quailty:3,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_群疗'],
		},
		'kzsg_迷魂阵5':{
			name:'kzsg_迷魂阵',
			translate:'迷魂阵',
			sex:'male',
			group:'shu',
			quailty:5,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:0,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_蛊惑1'],
		},
		'kzsg_迷魂阵2':{
			name:'kzsg_迷魂阵',
			translate:'迷魂阵',
			sex:'male',
			group:'shu',
			quailty:2,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_蛊惑1'],
		},
		'kzsg_兵书4':{
			name:'kzsg_兵书',
			translate:'兵书',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冲阵4','kzsg_重生'],
		},
		'kzsg_八卦图4':{
			name:'kzsg_八卦图',
			translate:'八卦图',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_闪电3','kzsg_重生'],
		},
		'kzsg_卑弥呼7':{
			name:'kzsg_卑弥呼',
			translate:'卑弥呼',
			sex:'female',
			group:'qun',
			quailty:7,
			type:'武将',
			hp:6,
			attack:0,
			prepareRound:8,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_召唤','kzsg_火龙息2'],
		},
		'kzsg_卑弥呼4':{
			name:'kzsg_卑弥呼',
			translate:'卑弥呼',
			sex:'female',
			group:'qun',
			quailty:4,
			type:'武将',
			hp:6,
			attack:0,
			prepareRound:10,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_召唤','kzsg_火龙息2'],
		},
		'kzsg_张南7':{
			name:'kzsg_张南',
			translate:'张南',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:12,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_炎流星1','kzsg_丹术2'],
		},
		'kzsg_张南4':{
			name:'kzsg_张南',
			translate:'张南',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:14,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_炎流星1','kzsg_丹术2'],
		},
		'kzsg_于吉7':{
			name:'kzsg_于吉',
			translate:'于吉',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:10,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_索命2','kzsg_龙怒'],
		},
		'kzsg_于吉4':{
			name:'kzsg_于吉',
			translate:'于吉',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:12,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_索命2','kzsg_龙怒'],
		},
		'kzsg_袁术6':{
			name:'kzsg_袁术',
			translate:'袁术',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'武将',
			hp:5,
			attack:1,
			prepareRound:4,
			bing:4,
			bao:0,
			shu:2,
			skills:['kzsg_火龙息1'],
		},
		'kzsg_袁术3':{
			name:'kzsg_袁术',
			translate:'袁术',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'武将',
			hp:5,
			attack:1,
			prepareRound:6,
			bing:4,
			bao:0,
			shu:2,
			skills:['kzsg_火龙息1'],
		},
		'kzsg_袁绍6':{
			name:'kzsg_袁绍',
			translate:'袁绍',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:6,
			bing:4,
			bao:2,
			shu:0,
			skills:['kzsg_火龙息2'],
		},
		'kzsg_袁绍3':{
			name:'kzsg_袁绍',
			translate:'袁绍',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:8,
			bing:4,
			bao:2,
			shu:0,
			skills:['kzsg_火龙息2'],
		},
		'kzsg_巨鼓手5':{
			name:'kzsg_巨鼓手',
			translate:'巨鼓手',
			sex:'male',
			group:'qun',
			quailty:5,
			type:'异族',
			hp:5,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_激励步兵','kzsg_鸣鼓2'],
		},
		'kzsg_巨鼓手2':{
			name:'kzsg_巨鼓手',
			translate:'巨鼓手',
			sex:'male',
			group:'qun',
			quailty:2,
			type:'异族',
			hp:5,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_激励步兵','kzsg_鸣鼓2'],
		},
		'kzsg_西凉鹰骑5':{
			name:'kzsg_西凉鹰骑',
			translate:'西凉鹰骑',
			sex:'male',
			group:'qun',
			quailty:5,
			type:'异族',
			hp:2,
			attack:1,
			prepareRound:0,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_飞行'],
		},
		'kzsg_西凉鹰骑2':{
			name:'kzsg_西凉鹰骑',
			translate:'西凉鹰骑',
			sex:'male',
			group:'qun',
			quailty:2,
			type:'异族',
			hp:2,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_飞行'],
		},
		'kzsg_月术士7':{
			name:'kzsg_月术士',
			translate:'月术士',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'异族',
			hp:5,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火龙息1'],
		},
		'kzsg_月术士4':{
			name:'kzsg_月术士',
			translate:'月术士',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'异族',
			hp:5,
			attack:2,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火龙息1'],
		},
		'kzsg_冰火魔师7':{
			name:'kzsg_冰火魔师',
			translate:'冰火魔师',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'异族',
			hp:4,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火焰','kzsg_冰封1'],
		},
		'kzsg_冰火魔师4':{
			name:'kzsg_冰火魔师',
			translate:'冰火魔师',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'异族',
			hp:4,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火焰','kzsg_冰封1'],
		},
		'kzsg_冰系咒法7':{
			name:'kzsg_冰系咒法',
			translate:'冰系咒法',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'军备',
			hp:3,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封1'],
		},
		'kzsg_冰系咒法4':{
			name:'kzsg_冰系咒法',
			translate:'冰系咒法',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'军备',
			hp:3,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封1'],
		},
		'kzsg_火炎兽7':{
			name:'kzsg_火炎兽',
			translate:'火炎兽',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'异兽',
			hp:4,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_炎流星1','kzsg_火焰'],
		},
		'kzsg_火炎兽3':{
			name:'kzsg_火炎兽',
			translate:'火炎兽',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'异兽',
			hp:4,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_炎流星1','kzsg_火焰'],
		},
		'kzsg_火焰兽骑7':{
			name:'kzsg_火焰兽骑',
			translate:'火焰兽骑',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'骑兵',
			hp:4,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火焰','kzsg_践踏'],
		},
		'kzsg_火焰兽骑4':{
			name:'kzsg_火焰兽骑',
			translate:'火焰兽骑',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'骑兵',
			hp:4,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火焰','kzsg_践踏'],
		},
		'kzsg_火翼玄蛇7':{
			name:'kzsg_火翼玄蛇',
			translate:'火翼玄蛇',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'异兽',
			hp:4,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火焰','kzsg_飞行'],
		},
		'kzsg_火翼玄蛇4':{
			name:'kzsg_火翼玄蛇',
			translate:'火翼玄蛇',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'异兽',
			hp:4,
			attack:2,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火焰','kzsg_飞行'],
		},
		'kzsg_江湖神算7':{
			name:'kzsg_江湖神算',
			translate:'江湖神算',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'异族',
			hp:4,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救2'],
		},
		'kzsg_江湖神算4':{
			name:'kzsg_江湖神算',
			translate:'江湖神算',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'异族',
			hp:4,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救2'],
		},
		'kzsg_控火异士7':{
			name:'kzsg_控火异士',
			translate:'控火异士',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'异族',
			hp:4,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火龙息1'],
		},
		'kzsg_控火异士4':{
			name:'kzsg_控火异士',
			translate:'控火异士',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'异族',
			hp:4,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火龙息1'],
		},
		'kzsg_烈焰凤骑7':{
			name:'kzsg_烈焰凤骑',
			translate:'烈焰凤骑',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'骑兵',
			hp:5,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火焰','kzsg_飞行'],
		},
		'kzsg_烈焰凤骑4':{
			name:'kzsg_烈焰凤骑',
			translate:'烈焰凤骑',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'骑兵',
			hp:5,
			attack:1,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火焰','kzsg_飞行'],
		},
		'kzsg_圣兽朱雀7':{
			name:'kzsg_圣兽朱雀',
			translate:'圣兽朱雀',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'异兽',
			hp:6,
			attack:1,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火龙息2','kzsg_飞行'],
		},
		'kzsg_圣兽朱雀4':{
			name:'kzsg_圣兽朱雀',
			translate:'圣兽朱雀',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'异兽',
			hp:6,
			attack:1,
			prepareRound:12,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火龙息2','kzsg_飞行'],
		},
		'kzsg_走轲6':{
			name:'kzsg_走轲',
			translate:'走轲',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'军备',
			hp:5,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冲阵2'],
		},
		'kzsg_走轲3':{
			name:'kzsg_走轲',
			translate:'走轲',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'军备',
			hp:5,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冲阵2'],
		},
		'kzsg_猎鹰4':{
			name:'kzsg_猎鹰',
			translate:'猎鹰',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'异兽',
			hp:4,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_飞行'],
		},
		'kzsg_猎鹰1':{
			name:'kzsg_猎鹰',
			translate:'猎鹰',
			sex:'male',
			group:'qun',
			quailty:1,
			type:'异兽',
			hp:4,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_飞行'],
		},
		'kzsg_冰雀5':{
			name:'kzsg_冰雀',
			translate:'冰雀',
			sex:'male',
			group:'qun',
			quailty:5,
			type:'异兽',
			hp:3,
			attack:0,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封1'],
		},
		'kzsg_冰雀2':{
			name:'kzsg_冰雀',
			translate:'冰雀',
			sex:'male',
			group:'qun',
			quailty:2,
			type:'异兽',
			hp:3,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封1'],
		},
		'kzsg_雪烈熊6':{
			name:'kzsg_雪烈熊',
			translate:'雪烈熊',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'异兽',
			hp:3,
			attack:2,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封1'],
		},
		'kzsg_雪烈熊3':{
			name:'kzsg_雪烈熊',
			translate:'雪烈熊',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'异兽',
			hp:3,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封1'],
		},
		'kzsg_双头火蛇6':{
			name:'kzsg_双头火蛇',
			translate:'双头火蛇',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'异兽',
			hp:4,
			attack:2,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火焰'],
		},
		'kzsg_双头火蛇3':{
			name:'kzsg_双头火蛇',
			translate:'双头火蛇',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'异兽',
			hp:4,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火焰'],
		},
		'kzsg_雍凉弓骑7':{
			name:'kzsg_雍凉弓骑',
			translate:'雍凉弓骑',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'弓手',
			hp:6,
			attack:3,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冷箭'],
		},
		'kzsg_雍凉弓骑4':{
			name:'kzsg_雍凉弓骑',
			translate:'雍凉弓骑',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'弓手',
			hp:6,
			attack:3,
			prepareRound:12,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冷箭'],
		},
		'kzsg_雍凉投手6':{
			name:'kzsg_雍凉投手',
			translate:'雍凉投手',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'弓手',
			hp:4,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冷箭','kzsg_丹术1'],
		},
		'kzsg_雍凉投手3':{
			name:'kzsg_雍凉投手',
			translate:'雍凉投手',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'弓手',
			hp:4,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冷箭','kzsg_丹术1'],
		},
		'kzsg_火龙卫6':{
			name:'kzsg_火龙卫',
			translate:'火龙卫',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'异族',
			hp:6,
			attack:2,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火焰','kzsg_降士气2'],
		},
		'kzsg_火龙卫3':{
			name:'kzsg_火龙卫',
			translate:'火龙卫',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'异族',
			hp:6,
			attack:2,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火焰','kzsg_降士气2'],
		},
		'kzsg_猎捕者5':{
			name:'kzsg_猎捕者',
			translate:'捕猎者',
			sex:'male',
			group:'qun',
			quailty:5,
			type:'异族',
			hp:3,
			attack:1,
			prepareRound:0,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_陷阱1'],
		},
		'kzsg_猎捕者2':{
			name:'kzsg_猎捕者',
			translate:'捕猎者',
			sex:'male',
			group:'qun',
			quailty:2,
			type:'异族',
			hp:3,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_陷阱1'],
		},
		'kzsg_急先锋5':{
			name:'kzsg_急先锋',
			translate:'急先锋',
			sex:'male',
			group:'qun',
			quailty:5,
			type:'异族',
			hp:3,
			attack:1,
			prepareRound:0,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火焰'],
		},
		'kzsg_急先锋2':{
			name:'kzsg_急先锋',
			translate:'急先锋',
			sex:'male',
			group:'qun',
			quailty:2,
			type:'异族',
			hp:3,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火焰'],
		},
		'kzsg_挫骨卫6':{
			name:'kzsg_挫骨卫',
			translate:'挫骨卫',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'异族',
			hp:6,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_削弱'],
		},
		'kzsg_挫骨卫3':{
			name:'kzsg_挫骨卫',
			translate:'挫骨卫',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'异族',
			hp:6,
			attack:1,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_削弱'],
		},
		'kzsg_黄巾妖师6':{
			name:'kzsg_黄巾妖师',
			translate:'黄巾妖师',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'异族',
			hp:4,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_嗜血术2'],
		},
		'kzsg_黄巾妖师3':{
			name:'kzsg_黄巾妖师',
			translate:'黄巾妖师',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'异族',
			hp:4,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_嗜血术2'],
		},
		'kzsg_驱魔道人5':{
			name:'kzsg_驱魔道人',
			translate:'驱魔道人',
			sex:'male',
			group:'qun',
			quailty:5,
			type:'异族',
			hp:4,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生'],
		},
		'kzsg_驱魔道人2':{
			name:'kzsg_驱魔道人',
			translate:'驱魔道人',
			sex:'male',
			group:'qun',
			quailty:2,
			type:'异族',
			hp:4,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生'],
		},
		'kzsg_西凉谋士5':{
			name:'kzsg_西凉谋士',
			translate:'西凉谋士',
			sex:'male',
			group:'qun',
			quailty:5,
			type:'异族',
			hp:3,
			attack:0,
			prepareRound:0,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封1'],
		},
		'kzsg_西凉谋士2':{
			name:'kzsg_西凉谋士',
			translate:'西凉谋士',
			sex:'male',
			group:'qun',
			quailty:2,
			type:'异族',
			hp:3,
			attack:0,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封1'],
		},
		'kzsg_西凉狂战6':{
			name:'kzsg_西凉狂战',
			translate:'西凉狂战',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'异族',
			hp:2,
			attack:3,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火焰'],
		},
		'kzsg_西凉狂战3':{
			name:'kzsg_西凉狂战',
			translate:'西凉狂战',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'异族',
			hp:2,
			attack:3,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火焰'],
		},
		'kzsg_西凉投手3':{
			name:'kzsg_西凉投手',
			translate:'西凉投手',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'异族',
			hp:3,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_索命2'],
		},
		'kzsg_西凉勇者5':{
			name:'kzsg_西凉勇者',
			translate:'西凉勇者',
			sex:'male',
			group:'qun',
			quailty:5,
			type:'异族',
			hp:3,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火焰','kzsg_保护步兵'],
		},
		'kzsg_西凉勇者2':{
			name:'kzsg_西凉勇者',
			translate:'西凉勇者',
			sex:'male',
			group:'qun',
			quailty:2,
			type:'异族',
			hp:3,
			attack:1,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火焰','kzsg_保护步兵'],
		},
		'kzsg_重戟兵4':{
			name:'kzsg_重戟兵',
			translate:'重戟兵',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'异族',
			hp:4,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_吸血'],
		},
		'kzsg_江湖卦师3':{
			name:'kzsg_江湖卦师',
			translate:'江湖卦师',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'异族',
			hp:4,
			attack:2,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_横扫'],
		},
		'kzsg_双股剑6':{
			name:'kzsg_双股剑',
			translate:'双股剑',
			sex:'male',
			group:'xia',
			quailty:6,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_攻击3'],
		},
		'kzsg_火焰诀5':{
			name:'kzsg_火焰诀',
			translate:'火焰诀',
			sex:'male',
			group:'xia',
			quailty:5,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_炎流星1'],
		},
		'kzsg_青囊书7':{
			name:'kzsg_青囊书',
			translate:'青囊书',
			sex:'male',
			group:'xia',
			quailty:7,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救2','kzsg_血量2'],
		},
		'kzsg_青囊书4':{
			name:'kzsg_青囊书',
			translate:'青囊书',
			sex:'male',
			group:'xia',
			quailty:4,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救2','kzsg_血量2'],
		},
		'kzsg_七星刀7':{
			name:'kzsg_七星刀',
			translate:'七星刀',
			sex:'male',
			group:'xia',
			quailty:7,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_削弱','kzsg_血量2'],
		},
		'kzsg_七星刀4':{
			name:'kzsg_七星刀',
			translate:'七星刀',
			sex:'male',
			group:'xia',
			quailty:4,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_削弱','kzsg_血量2'],
		},
		'kzsg_雷电符7':{
			name:'kzsg_雷电符',
			translate:'雷电符',
			sex:'male',
			group:'xia',
			quailty:4,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_闪电3'],
		},
		'kzsg_雷电符4':{
			name:'kzsg_雷电符',
			translate:'雷电符',
			sex:'male',
			group:'xia',
			quailty:4,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_闪电3'],
		},
		'kzsg_仙鹤7':{
			name:'kzsg_仙鹤',
			translate:'仙鹤',
			sex:'male',
			group:'xia',
			quailty:7,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_飞行'],
		},
		'kzsg_仙鹤4':{
			name:'kzsg_仙鹤',
			translate:'仙鹤',
			sex:'male',
			group:'xia',
			quailty:4,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_飞行'],
		},
		'kzsg_凤凰号角7':{
			name:'kzsg_凤凰号角',
			translate:'凤凰号角',
			sex:'male',
			group:'xia',
			quailty:7,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生','kzsg_战魂召唤'],
		},
		'kzsg_凤凰号角4':{
			name:'kzsg_凤凰号角',
			translate:'凤凰号角',
			sex:'male',
			group:'xia',
			quailty:4,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生','kzsg_战魂召唤'],
		},
		'kzsg_轰天雷7':{
			name:'kzsg_轰天雷',
			translate:'轰天雷',
			sex:'male',
			group:'xia',
			quailty:7,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_闪电3','kzsg_重生'],
		},
		'kzsg_轰天雷4':{
			name:'kzsg_轰天雷',
			translate:'轰天雷',
			sex:'male',
			group:'xia',
			quailty:4,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_闪电3','kzsg_重生'],
		},
		'kzsg_救治药箱6':{
			name:'kzsg_救治药箱',
			translate:'救治药箱',
			sex:'male',
			group:'xia',
			quailty:6,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救2'],
		},
		'kzsg_救治药箱3':{
			name:'kzsg_救治药箱',
			translate:'救治药箱',
			sex:'male',
			group:'xia',
			quailty:3,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救2'],
		},
		'kzsg_阔剑7':{
			name:'kzsg_阔剑',
			translate:'阔剑',
			sex:'male',
			group:'xia',
			quailty:7,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_盾防1','kzsg_攻击2'],
		},
		'kzsg_阔剑4':{
			name:'kzsg_阔剑',
			translate:'阔剑',
			sex:'male',
			group:'xia',
			quailty:4,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_盾防1','kzsg_攻击2'],
		},
		'kzsg_丈八蛇矛7':{
			name:'kzsg_丈八蛇矛',
			translate:'丈八蛇矛',
			sex:'male',
			group:'xia',
			quailty:7,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_诅咒','kzsg_攻击2'],
		},
		'kzsg_丈八蛇矛4':{
			name:'kzsg_丈八蛇矛',
			translate:'丈八蛇矛',
			sex:'male',
			group:'xia',
			quailty:4,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_诅咒','kzsg_攻击2'],
		},
		'kzsg_火焰扇4':{
			name:'kzsg_火焰扇',
			translate:'火焰扇',
			sex:'male',
			group:'xia',
			quailty:4,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_炎流星1'],
		},
		'kzsg_续命灯7':{
			name:'kzsg_续命灯',
			translate:'续命灯',
			sex:'male',
			group:'xia',
			quailty:7,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:0,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_血量4'],
		},
		'kzsg_续命灯4':{
			name:'kzsg_续命灯',
			translate:'续命灯',
			sex:'male',
			group:'xia',
			quailty:4,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_血量4'],
		},
		'kzsg_荆棘鞭4':{
			name:'kzsg_荆棘鞭',
			translate:'荆棘鞭',
			sex:'male',
			group:'xia',
			quailty:4,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_毒刃2'],
		},
		'kzsg_倚天剑4':{
			name:'kzsg_倚天剑',
			translate:'倚天剑',
			sex:'male',
			group:'xia',
			quailty:4,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_毒刃2'],
		},
		'kzsg_火焰诀2':{
			name:'kzsg_火焰诀',
			translate:'火焰诀',
			sex:'male',
			group:'xia',
			quailty:2,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_炎流星1'],
		},
		'kzsg_伏兵萦5':{
			name:'kzsg_伏兵萦',
			translate:'伏兵萦',
			sex:'male',
			group:'xia',
			quailty:5,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_洞察'],
		},
		'kzsg_伏兵萦2':{
			name:'kzsg_伏兵萦',
			translate:'伏兵萦',
			sex:'male',
			group:'xia',
			quailty:2,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_洞察'],
		},
		'kzsg_古錠刀7':{
			name:'kzsg_古錠刀',
			translate:'古錠刀',
			sex:'male',
			group:'xia',
			quailty:7,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封2','kzsg_洞察'],
		},
		'kzsg_古錠刀4':{
			name:'kzsg_古錠刀',
			translate:'古錠刀',
			sex:'male',
			group:'xia',
			quailty:4,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冰封2','kzsg_洞察'],
		},
		'kzsg_青龙偃月刀7':{
			name:'kzsg_青龙偃月刀',
			translate:'青龙偃月刀',
			sex:'male',
			group:'xia',
			quailty:7,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_攻击3','kzsg_火焰'],
		},
		'kzsg_青龙偃月刀4':{
			name:'kzsg_青龙偃月刀',
			translate:'青龙偃月刀',
			sex:'male',
			group:'xia',
			quailty:4,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_攻击3','kzsg_火焰'],
		},
		'kzsg_南蛮怪象7':{
			name:'kzsg_南蛮怪象',
			translate:'南蛮怪象',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_盾防1','kzsg_血量4'],
		},
		'kzsg_南蛮怪象4':{
			name:'kzsg_南蛮怪象',
			translate:'南蛮怪象',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_盾防1','kzsg_血量4'],
		},
		'kzsg_的卢7':{
			name:'kzsg_的卢',
			translate:'的卢',
			sex:'male',
			group:'xia',
			quailty:7,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冲阵2','kzsg_急救1'],
		},
		'kzsg_的卢4':{
			name:'kzsg_的卢',
			translate:'的卢',
			sex:'male',
			group:'xia',
			quailty:4,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冲阵2','kzsg_急救1'],
		},
		'kzsg_绝影7':{
			name:'kzsg_绝影',
			translate:'绝影',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冲阵4'],
		},
		'kzsg_绝影4':{
			name:'kzsg_绝影',
			translate:'绝影',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冲阵4'],
		},
		'kzsg_爪黄飞电7':{
			name:'kzsg_爪黄飞电',
			translate:'爪黄飞电',
			sex:'male',
			group:'xia',
			quailty:7,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冲阵2','kzsg_闪电2'],
		},
		'kzsg_爪黄飞电4':{
			name:'kzsg_爪黄飞电',
			translate:'爪黄飞电',
			sex:'male',
			group:'xia',
			quailty:4,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冲阵2','kzsg_闪电2'],
		},
		'kzsg_鹊画弓6':{
			name:'kzsg_鹊画弓',
			translate:'鹊画弓',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火龙息1','kzsg_激励弓手'],
		},
		'kzsg_鹊画弓3':{
			name:'kzsg_鹊画弓',
			translate:'鹊画弓',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火龙息1','kzsg_激励弓手'],
		},
		'kzsg_三尖两刃刀6':{
			name:'kzsg_三尖两刃刀',
			translate:'三尖两刃刀',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_丹术1','kzsg_攻击2'],
		},
		'kzsg_三尖两刃刀3':{
			name:'kzsg_三尖两刃刀',
			translate:'三尖两刃刀',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_丹术1','kzsg_攻击2'],
		},
		'kzsg_铁脊蛇矛6':{
			name:'kzsg_铁脊蛇矛',
			translate:'铁脊蛇矛',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_攻击2','kzsg_死战1'],
		},
		'kzsg_铁脊蛇矛3':{
			name:'kzsg_铁脊蛇矛',
			translate:'铁脊蛇矛',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_攻击2','kzsg_死战1'],
		},
		'kzsg_毁灭烈焰7':{
			name:'kzsg_毁灭烈焰',
			translate:'毁灭烈焰',
			sex:'male',
			group:'xia',
			quailty:7,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:12,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_炎流星2'],
		},
		'kzsg_毁灭烈焰4':{
			name:'kzsg_毁灭烈焰',
			translate:'毁灭烈焰',
			sex:'male',
			group:'xia',
			quailty:4,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:14,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_炎流星2'],
		},
		'kzsg_软骨术6':{
			name:'kzsg_软骨术',
			translate:'软骨术',
			sex:'male',
			group:'xia',
			quailty:6,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_削弱_zd'],
		},
		'kzsg_软骨术3':{
			name:'kzsg_软骨术',
			translate:'软骨术',
			sex:'male',
			group:'xia',
			quailty:3,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_削弱_zd'],
		},
		'kzsg_圣光7':{
			name:'kzsg_圣光',
			translate:'圣光',
			sex:'male',
			group:'xia',
			quailty:7,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_全军突击','kzsg_群疗'],
		},
		'kzsg_圣光5':{
			name:'kzsg_圣光',
			translate:'圣光',
			sex:'male',
			group:'xia',
			quailty:5,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_全军突击','kzsg_群疗'],
		},
		'kzsg_土隐杀6':{
			name:'kzsg_土隐杀',
			translate:'土隐杀',
			sex:'male',
			group:'xia',
			quailty:6,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_全军突击'],
		},
		'kzsg_土隐杀4':{
			name:'kzsg_土隐杀',
			translate:'土隐杀',
			sex:'male',
			group:'xia',
			quailty:4,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_全军突击'],
		},
		'kzsg_灭翼咒6':{
			name:'kzsg_灭翼咒',
			translate:'灭翼咒',
			sex:'male',
			group:'xia',
			quailty:6,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_驱空','kzsg_重生'],
		},
		'kzsg_灭翼咒3':{
			name:'kzsg_灭翼咒',
			translate:'灭翼咒',
			sex:'male',
			group:'xia',
			quailty:3,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_驱空','kzsg_重生'],
		},
		'kzsg_天雷诀5':{
			name:'kzsg_天雷诀',
			translate:'天雷诀',
			sex:'male',
			group:'xia',
			quailty:5,
			type:'术',
			hp:0,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_闪电3'],
		},
		'kzsg_血刃之壁6':{
			name:'kzsg_血刃之壁',
			translate:'血刃之壁',
			sex:'male',
			group:'wei',
			quailty:6,
			type:'军备',
			hp:6,
			attack:0,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_丹术1','kzsg_刃甲1'],
		},
		'kzsg_血刃之壁3':{
			name:'kzsg_血刃之壁',
			translate:'血刃之壁',
			sex:'male',
			group:'wei',
			quailty:3,
			type:'军备',
			hp:6,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_丹术1','kzsg_刃甲1'],
		},
		'kzsg_程普6':{
			name:'kzsg_程普',
			translate:'程普',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'武将',
			hp:4,
			attack:3,
			prepareRound:6,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_冷箭'],
		},
		'kzsg_程普3':{
			name:'kzsg_程普',
			translate:'程普',
			sex:'male',
			group:'wu',
			quailty:3,
			type:'武将',
			hp:4,
			attack:3,
			prepareRound:8,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_冷箭'],
		},
		'kzsg_李大目6':{
			name:'kzsg_李大目',
			translate:'李大目',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'武将',
			hp:5,
			attack:2,
			prepareRound:8,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_火龙息1'],
		},
		'kzsg_李大目3':{
			name:'kzsg_李大目',
			translate:'李大目',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'武将',
			hp:5,
			attack:2,
			prepareRound:10,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_火龙息1'],
		},
		'kzsg_李儒7':{
			name:'kzsg_李儒',
			translate:'李儒',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'武将',
			hp:5,
			attack:0,
			prepareRound:6,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_索命2','kzsg_闪电1'],
		},
		'kzsg_李儒4':{
			name:'kzsg_李儒',
			translate:'李儒',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'武将',
			hp:5,
			attack:0,
			prepareRound:8,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_索命2','kzsg_闪电1'],
		},
		'kzsg_李肃6':{
			name:'kzsg_李肃',
			translate:'李肃',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'武将',
			hp:5,
			attack:0,
			prepareRound:6,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_火龙息2','kzsg_水镜术1'],
		},
		'kzsg_李肃3':{
			name:'kzsg_李肃',
			translate:'李肃',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'武将',
			hp:5,
			attack:0,
			prepareRound:8,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_火龙息2','kzsg_水镜术1'],
		},
		'kzsg_吕布7':{
			name:'kzsg_吕布',
			translate:'吕布',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'武将',
			hp:8,
			attack:3,
			prepareRound:10,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_狂暴','kzsg_横扫'],
		},
		'kzsg_吕布4':{
			name:'kzsg_吕布',
			translate:'吕布',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'武将',
			hp:8,
			attack:3,
			prepareRound:12,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_狂暴','kzsg_横扫'],
		},
		'kzsg_牛辅6':{
			name:'kzsg_牛辅',
			translate:'牛辅',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:6,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_火焰'],
		},
		'kzsg_牛辅3':{
			name:'kzsg_牛辅',
			translate:'牛辅',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:8,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_火焰'],
		},
		'kzsg_裴元绍6':{
			name:'kzsg_裴元绍',
			translate:'裴元绍',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'武将',
			hp:8,
			attack:3,
			prepareRound:8,
			bing:4,
			bao:0,
			shu:2,
			skills:['kzsg_盾防1'],
		},
		'kzsg_裴元绍3':{
			name:'kzsg_裴元绍',
			translate:'裴元绍',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'武将',
			hp:8,
			attack:3,
			prepareRound:10,
			bing:4,
			bao:0,
			shu:2,
			skills:['kzsg_盾防1'],
		},
		'kzsg_彭脱6':{
			name:'kzsg_彭脱',
			translate:'彭脱',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'武将',
			hp:7,
			attack:3,
			prepareRound:6,
			bing:6,
			bao:0,
			shu:0,
			skills:[],
		},
		'kzsg_彭脱3':{
			name:'kzsg_彭脱',
			translate:'彭脱',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'武将',
			hp:7,
			attack:3,
			prepareRound:8,
			bing:6,
			bao:0,
			shu:0,
			skills:[],
		},
		'kzsg_颜良7':{
			name:'kzsg_颜良',
			translate:'颜良',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'武将',
			hp:6,
			attack:3,
			prepareRound:6,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_铁壁'],
		},
		'kzsg_颜良4':{
			name:'kzsg_颜良',
			translate:'颜良',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'武将',
			hp:6,
			attack:3,
			prepareRound:8,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_铁壁'],
		},
		'kzsg_文丑7':{
			name:'kzsg_文丑',
			translate:'文丑',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:10,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_冰封2'],
		},
		'kzsg_文丑4':{
			name:'kzsg_文丑',
			translate:'文丑',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:12,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_冰封2'],
		},
		'kzsg_徐荣6':{
			name:'kzsg_徐荣',
			translate:'徐荣',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:8,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_急救3'],
		},
		'kzsg_徐荣3':{
			name:'kzsg_徐荣',
			translate:'徐荣',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:10,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_急救3'],
		},
		'kzsg_杨奉6':{
			name:'kzsg_杨奉',
			translate:'杨奉',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'武将',
			hp:7,
			attack:3,
			prepareRound:10,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_横扫','kzsg_刃甲1'],
		},
		'kzsg_杨奉3':{
			name:'kzsg_杨奉',
			translate:'杨奉',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'武将',
			hp:7,
			attack:3,
			prepareRound:12,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_横扫','kzsg_刃甲1'],
		},
		'kzsg_张宝6':{
			name:'kzsg_张宝',
			translate:'张宝',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'武将',
			hp:8,
			attack:3,
			prepareRound:10,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_盾防1'],
		},
		'kzsg_张宝3':{
			name:'kzsg_张宝',
			translate:'张宝',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'武将',
			hp:8,
			attack:3,
			prepareRound:12,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_盾防1'],
		},
		'kzsg_张济6':{
			name:'kzsg_张济',
			translate:'张济',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:8,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_刃甲3'],
		},
		'kzsg_张济3':{
			name:'kzsg_张济',
			translate:'张济',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:10,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_刃甲3'],
		},
		'kzsg_张角7':{
			name:'kzsg_张角',
			translate:'张角',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'武将',
			hp:8,
			attack:1,
			prepareRound:10,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_蛊惑1','kzsg_火龙息2'],
		},
		'kzsg_张角4':{
			name:'kzsg_张角',
			translate:'张角',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'武将',
			hp:8,
			attack:1,
			prepareRound:12,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_蛊惑1','kzsg_火龙息2'],
		},
		'kzsg_张梁6':{
			name:'kzsg_张梁',
			translate:'张梁',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:6,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_吸血'],
		},
		'kzsg_张梁3':{
			name:'kzsg_张梁',
			translate:'张梁',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:8,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_吸血'],
		},
		'kzsg_张曼成7':{
			name:'kzsg_张曼成',
			translate:'张曼成',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'武将',
			hp:6,
			attack:3,
			prepareRound:6,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_死战2'],
		},
		'kzsg_张曼成4':{
			name:'kzsg_张曼成',
			translate:'张曼成',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'武将',
			hp:6,
			attack:3,
			prepareRound:8,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_死战2'],
		},
		'kzsg_张燕6':{
			name:'kzsg_张燕',
			translate:'张燕',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:8,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_洞察'],
		},
		'kzsg_张燕3':{
			name:'kzsg_张燕',
			translate:'张燕',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:10,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_洞察'],
		},
		'kzsg_赵弘6':{
			name:'kzsg_赵弘',
			translate:'赵弘',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:8,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_刃甲2','kzsg_丹术1'],
		},
		'kzsg_赵弘3':{
			name:'kzsg_赵弘',
			translate:'赵弘',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:10,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_刃甲2','kzsg_丹术1'],
		},
		'kzsg_波才7':{
			name:'kzsg_波才',
			translate:'波才',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'武将',
			hp:7,
			attack:3,
			prepareRound:8,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_死战1'],
		},
		'kzsg_波才4':{
			name:'kzsg_波才',
			translate:'波才',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'武将',
			hp:7,
			attack:3,
			prepareRound:10,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_死战1'],
		},
		'kzsg_程志远6':{
			name:'kzsg_程志远',
			translate:'程远志',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:6,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_奋击'],
		},
		'kzsg_程志远3':{
			name:'kzsg_程志远',
			translate:'程远志',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:8,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_奋击'],
		},
		'kzsg_邓蔵6':{
			name:'kzsg_邓蔵',
			translate:'邓蔵',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:6,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_索命2'],
		},
		'kzsg_邓蔵3':{
			name:'kzsg_邓蔵',
			translate:'邓蔵',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'武将',
			hp:6,
			attack:1,
			prepareRound:8,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_索命2'],
		},
		'kzsg_貂蝉7':{
			name:'kzsg_貂蝉',
			translate:'貂蝉',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'武将',
			hp:6,
			attack:0,
			prepareRound:6,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_魅惑','kzsg_火龙息3'],
		},
		'kzsg_貂蝉4':{
			name:'kzsg_貂蝉',
			translate:'貂蝉',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'武将',
			hp:6,
			attack:0,
			prepareRound:8,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_魅惑','kzsg_火龙息1'],
		},
		'kzsg_董卓7':{
			name:'kzsg_董卓',
			translate:'董卓',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:8,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_火焰','kzsg_狂暴'],
		},
		'kzsg_董卓4':{
			name:'kzsg_董卓',
			translate:'董卓',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:10,
			bing:5,
			bao:1,
			shu:0,
			skills:['kzsg_火焰','kzsg_狂暴'],
		},
		'kzsg_樊稠6':{
			name:'kzsg_樊稠',
			translate:'樊稠',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:4,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_铁壁'],
		},
		'kzsg_樊稠3':{
			name:'kzsg_樊稠',
			translate:'樊稠',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:6,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_铁壁'],
		},
		'kzsg_管亥6':{
			name:'kzsg_管亥',
			translate:'管亥',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'武将',
			hp:4,
			attack:3,
			prepareRound:6,
			bing:4,
			bao:2,
			shu:0,
			skills:['kzsg_吸血'],
		},
		'kzsg_管亥3':{
			name:'kzsg_管亥',
			translate:'管亥',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'武将',
			hp:4,
			attack:3,
			prepareRound:8,
			bing:4,
			bao:2,
			shu:0,
			skills:['kzsg_吸血'],
		},
		'kzsg_郭汜6':{
			name:'kzsg_郭汜',
			translate:'郭汜',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'武将',
			hp:5,
			attack:1,
			prepareRound:8,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_盾防1','kzsg_毒刃2'],
		},
		'kzsg_郭汜3':{
			name:'kzsg_郭汜',
			translate:'郭汜',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'武将',
			hp:5,
			attack:1,
			prepareRound:10,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_盾防1','kzsg_毒刃2'],
		},
		'kzsg_胡轸6':{
			name:'kzsg_胡轸',
			translate:'胡轸',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:6,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_冲阵2'],
		},
		'kzsg_胡轸3':{
			name:'kzsg_胡轸',
			translate:'胡轸',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:8,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_冲阵2'],
		},
		'kzsg_华雄7':{
			name:'kzsg_华雄',
			translate:'华雄',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'武将',
			hp:6,
			attack:3,
			prepareRound:6,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_火焰'],
		},
		'kzsg_华雄4':{
			name:'kzsg_华雄',
			translate:'华雄',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'武将',
			hp:6,
			attack:3,
			prepareRound:8,
			bing:6,
			bao:0,
			shu:0,
			skills:['kzsg_火焰'],
		},
		'kzsg_李傕6':{
			name:'kzsg_李傕',
			translate:'李傕',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'武将',
			hp:6,
			attack:3,
			prepareRound:8,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_刃甲2'],
		},
		'kzsg_李傕3':{
			name:'kzsg_李傕',
			translate:'李傕',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'武将',
			hp:6,
			attack:3,
			prepareRound:10,
			bing:5,
			bao:0,
			shu:1,
			skills:['kzsg_刃甲2'],
		},
		'kzsg_侦查卫4':{
			name:'kzsg_侦查卫',
			translate:'侦查卫',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'步兵',
			hp:4,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_洞察'],
		},
		'kzsg_侦查卫7':{
			name:'kzsg_侦查卫',
			translate:'侦查卫',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'步兵',
			hp:4,
			attack:1,
			prepareRound:0,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_洞察'],
		},
		'kzsg_纵火兵5':{
			name:'kzsg_纵火兵',
			translate:'纵火兵',
			sex:'male',
			group:'qun',
			quailty:5,
			type:'步兵',
			hp:3,
			attack:1,
			prepareRound:0,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火焰'],
		},
		'kzsg_纵火兵2':{
			name:'kzsg_纵火兵',
			translate:'纵火兵',
			sex:'male',
			group:'qun',
			quailty:2,
			type:'步兵',
			hp:3,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火焰'],
		},
		'kzsg_洛阳兵4':{
			name:'kzsg_洛阳兵',
			translate:'洛阳兵',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'步兵',
			hp:3,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:[],
		},
		'kzsg_洛阳兵1':{
			name:'kzsg_洛阳兵',
			translate:'洛阳兵',
			sex:'male',
			group:'qun',
			quailty:1,
			type:'步兵',
			hp:3,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:[],
		},
		'kzsg_蛮兵5':{
			name:'kzsg_蛮兵',
			translate:'蛮兵',
			sex:'male',
			group:'qun',
			quailty:5,
			type:'步兵',
			hp:1,
			attack:2,
			prepareRound:0,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生'],
		},
		'kzsg_蛮兵2':{
			name:'kzsg_蛮兵',
			translate:'蛮兵',
			sex:'male',
			group:'qun',
			quailty:2,
			type:'步兵',
			hp:1,
			attack:2,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_重生'],
		},
		'kzsg_天雷禁军7':{
			name:'kzsg_天雷禁军',
			translate:'天雷禁军',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'异族',
			hp:6,
			attack:2,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火焰','kzsg_闪电1'],
		},
		'kzsg_天雷禁军4':{
			name:'kzsg_天雷禁军',
			translate:'天雷禁军',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'异族',
			hp:6,
			attack:2,
			prepareRound:12,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_火焰','kzsg_闪电1'],
		},
		'kzsg_西凉射手6':{
			name:'kzsg_西凉射手',
			translate:'西凉射手',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'异族',
			hp:3,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_索命2'],
		},
		'kzsg_西凉射手3':{
			name:'kzsg_西凉射手',
			translate:'西凉射手',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'异族',
			hp:3,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_索命2'],
		},
		'kzsg_黄巾枪兵5':{
			name:'kzsg_黄巾枪兵',
			translate:'黄巾枪兵',
			sex:'male',
			group:'qun',
			quailty:5,
			type:'步兵',
			hp:3,
			attack:2,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_长枪击'],
		},
		'kzsg_黄巾枪兵2':{
			name:'kzsg_黄巾枪兵',
			translate:'黄巾枪兵',
			sex:'male',
			group:'qun',
			quailty:2,
			type:'步兵',
			hp:3,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_长枪击'],
		},
		'kzsg_烈火紫晶狮7':{
			name:'kzsg_烈火紫晶狮',
			translate:'烈火紫晶狮',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'异兽',
			hp:8,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_践踏','kzsg_火焰'],
		},
		'kzsg_烈火紫晶狮4':{
			name:'kzsg_烈火紫晶狮',
			translate:'烈火紫晶狮',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'异兽',
			hp:8,
			attack:2,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_践踏','kzsg_火焰'],
		},
		'kzsg_并州铁骑7':{
			name:'kzsg_并州铁骑',
			translate:'并州铁骑',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'骑兵',
			hp:5,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_践踏','kzsg_冲阵2'],
		},
		'kzsg_并州铁骑4':{
			name:'kzsg_并州铁骑',
			translate:'并州铁骑',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'骑兵',
			hp:5,
			attack:2,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_践踏','kzsg_冲阵2'],
		},
		'kzsg_黑魔法师7':{
			name:'kzsg_黑魔法师',
			translate:'黑魔法师',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'异族',
			hp:4,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_嗜血术2'],
		},
		'kzsg_黑魔法师4':{
			name:'kzsg_黑魔法师',
			translate:'黑魔法师',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'异族',
			hp:4,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_嗜血术2'],
		},
		'kzsg_分筋手5':{
			name:'kzsg_分筋手',
			translate:'分筋手',
			sex:'male',
			group:'qun',
			quailty:5,
			type:'步兵',
			hp:3,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_削弱'],
		},
		'kzsg_分筋手2':{
			name:'kzsg_分筋手',
			translate:'分筋手',
			sex:'male',
			group:'qun',
			quailty:2,
			type:'步兵',
			hp:3,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_削弱'],
		},
		'kzsg_黄巾兵4':{
			name:'kzsg_黄巾兵',
			translate:'黄巾兵',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'步兵',
			hp:3,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_吸血'],
		},
		'kzsg_黄巾兵1':{
			name:'kzsg_黄巾兵',
			translate:'黄巾兵',
			sex:'male',
			group:'qun',
			quailty:1,
			type:'步兵',
			hp:3,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_吸血'],
		},
		'kzsg_黄巾大斧兵6':{
			name:'kzsg_黄巾大斧兵',
			translate:'黄巾大斧兵',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'步兵',
			hp:4,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_横扫','kzsg_死战1'],
		},
		'kzsg_黄巾大斧兵3':{
			name:'kzsg_黄巾大斧兵',
			translate:'黄巾大斧兵',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'步兵',
			hp:4,
			attack:2,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_横扫','kzsg_死战1'],
		},
		'kzsg_黄巾刀盾兵6':{
			name:'kzsg_黄巾刀盾兵',
			translate:'黄巾刀盾兵',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'步兵',
			hp:5,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_盾防1'],
		},
		'kzsg_黄巾刀盾兵3':{
			name:'kzsg_黄巾刀盾兵',
			translate:'黄巾刀盾兵',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'步兵',
			hp:5,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_盾防1'],
		},
		'kzsg_黄巾骑兵6':{
			name:'kzsg_黄巾骑兵',
			translate:'黄巾骑兵',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'骑兵',
			hp:4,
			attack:2,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_死战1','kzsg_长枪击'],
		},
		'kzsg_黄巾骑兵3':{
			name:'kzsg_黄巾骑兵',
			translate:'黄巾骑兵',
			sex:'male',
			group:'qun',
			quailty:3,
			type:'骑兵',
			hp:4,
			attack:2,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_死战1','kzsg_长枪击'],
		},
		'kzsg_赤兔7':{
			name:'kzsg_赤兔',
			translate:'赤兔',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冲阵2','kzsg_攻击2'],
		},
		'kzsg_赤兔4':{
			name:'kzsg_赤兔',
			translate:'赤兔',
			sex:'male',
			group:'qun',
			quailty:4,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:8,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冲阵2','kzsg_攻击2'],
		},
		'kzsg_孔明灯5':{
			name:'kzsg_孔明灯',
			translate:'孔明灯',
			sex:'male',
			group:'xia',
			quailty:5,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_飞行翼'],
		},
		'kzsg_青釭剑5':{
			name:'kzsg_青釭剑',
			translate:'青釭剑',
			sex:'male',
			group:'xia',
			quailty:5,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_削弱'],
		},
		'kzsg_青釭剑2':{
			name:'kzsg_青釭剑',
			translate:'青釭剑',
			sex:'male',
			group:'xia',
			quailty:2,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_削弱'],
		},
		'kzsg_血刃5':{
			name:'kzsg_血刃',
			translate:'血刃',
			sex:'male',
			group:'xia',
			quailty:5,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_吸血'],
		},
		'kzsg_血刃2':{
			name:'kzsg_血刃',
			translate:'血刃',
			sex:'male',
			group:'xia',
			quailty:2,
			type:'宝物',
			hp:0,
			attack:0,
			prepareRound:6,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_吸血'],
		},
		'kzsg_水疗卫5':{
			name:'kzsg_水疗卫',
			translate:'水疗卫',
			sex:'male',
			group:'wu',
			quailty:5,
			type:'步兵',
			hp:3,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救1'],
		},
		'kzsg_水疗卫2':{
			name:'kzsg_水疗卫',
			translate:'水疗卫',
			sex:'male',
			group:'wu',
			quailty:2,
			type:'步兵',
			hp:3,
			attack:1,
			prepareRound:4,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_急救1'],
		},
		'kzsg_圣白虎7':{
			name:'kzsg_圣白虎',
			translate:'圣白虎',
			sex:'male',
			group:'shu',
			quailty:7,
			type:'异兽',
			hp:8,
			attack:2,
			prepareRound:16,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_闪电2','kzsg_飞行'],
		},
		'kzsg_废城7':{
			name:'kzsg_废城',
			translate:'废城',
			sex:'male',
			group:'shu',
			quailty:7,
			type:'武将',
			hp:8,
			attack:2,
			prepareRound:6,
			bing:4,
			bao:2,
			shu:2,
			skills:['kzsg_幻·势力','kzsg_幻·技能'],
			forbidai:true,
		},
		'kzsg_废城6':{
			name:'kzsg_废城',
			translate:'废城',
			sex:'male',
			group:'shu',
			quailty:6,
			type:'武将',
			hp:8,
			attack:1,
			prepareRound:8,
			bing:4,
			bao:2,
			shu:2,
			skills:['kzsg_幻·势力','kzsg_幻·技能'],
			forbidai:true,
		},
		'kzsg_废城a7':{
			name:'kzsg_废城a',
			translate:'废城',
			sex:'male',
			group:'wu',
			quailty:7,
			type:'武将',
			hp:8,
			attack:2,
			prepareRound:6,
			bing:4,
			bao:2,
			shu:2,
			skills:['kzsg_幻·势力','kzsg_幻·技能'],
			forbidai:true,
		},
		'kzsg_废城a6':{
			name:'kzsg_废城a',
			translate:'废城',
			sex:'male',
			group:'wu',
			quailty:6,
			type:'武将',
			hp:8,
			attack:1,
			prepareRound:8,
			bing:4,
			bao:2,
			shu:2,
			skills:['kzsg_幻·势力','kzsg_幻·技能'],
			forbidai:true,
		},
		'kzsg_废城b7':{
			name:'kzsg_废城b',
			translate:'废城',
			sex:'male',
			group:'wei',
			quailty:7,
			type:'武将',
			hp:8,
			attack:2,
			prepareRound:6,
			bing:4,
			bao:2,
			shu:2,
			skills:['kzsg_幻·势力','kzsg_幻·技能'],
			forbidai:true,
		},
		'kzsg_废城b6':{
			name:'kzsg_废城b',
			translate:'废城',
			sex:'male',
			group:'wei',
			quailty:6,
			type:'武将',
			hp:8,
			attack:1,
			prepareRound:8,
			bing:4,
			bao:2,
			shu:2,
			skills:['kzsg_幻·势力','kzsg_幻·技能'],
			forbidai:true,
		},
		'kzsg_废城c7':{
			name:'kzsg_废城c',
			translate:'废城',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'武将',
			hp:8,
			attack:2,
			prepareRound:6,
			bing:4,
			bao:2,
			shu:2,
			skills:['kzsg_幻·势力','kzsg_幻·技能'],
			forbidai:true,
		},
		'kzsg_废城c6':{
			name:'kzsg_废城c',
			translate:'废城',
			sex:'male',
			group:'qun',
			quailty:6,
			type:'武将',
			hp:8,
			attack:1,
			prepareRound:8,
			bing:4,
			bao:2,
			shu:2,
			skills:['kzsg_幻·势力','kzsg_幻·技能'],
			forbidai:true,
		},
		'kzsg_连弩兵6':{
			name:'kzsg_连弩兵',
			translate:'连弩兵',
			sex:'male',
			group:'shu',
			quailty:6,
			type:'弓手',
			hp:3,
			attack:1,
			prepareRound:10,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冷箭','kzsg_连击'],
			forbidai:true,
		},
		'kzsg_连弩兵5':{
			name:'kzsg_连弩兵',
			translate:'连弩兵',
			sex:'male',
			group:'shu',
			quailty:5,
			type:'弓手',
			hp:3,
			attack:1,
			prepareRound:12,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_冷箭','kzsg_连击'],
			forbidai:true,
		},
		'kzsg_马谡7':{
			name:'kzsg_马谡',
			translate:'马谡',
			sex:'male',
			group:'shu',
			quailty:7,
			type:'武将',
			hp:5,
			attack:0,
			prepareRound:6,
			bing:4,
			bao:0,
			shu:2,
			skills:['kzsg_闪电2','kzsg_盾防1'],
		},
		'kzsg_马谡4':{
			name:'kzsg_马谡',
			translate:'马谡',
			sex:'male',
			group:'shu',
			quailty:4,
			type:'武将',
			hp:5,
			attack:0,
			prepareRound:8,
			bing:4,
			bao:0,
			shu:2,
			skills:['kzsg_闪电2','kzsg_盾防1'],
		},
		'kzsg_团结7':{
			name:'kzsg_团结',
			translate:'团结',
			sex:'male',
			group:'xia',
			quailty:7,
			type:'步兵',
			hp:5,
			attack:1,
			prepareRound:2,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_团结'],
			forbidai:true,
			inKb:false,
		},
		'kzsg_摇钱树7':{
			name:'kzsg_摇钱树',
			translate:'摇钱树',
			sex:'male',
			group:'qun',
			quailty:7,
			type:'BOSS',
			hp:Infinity,
			attack:0,
			prepareRound:0,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_零距离','kzsg_摇钱树','kzsg_限时挑战'],
			forbidai:true,
			inKb:false,
			boss:true,
		},
		'kzsg_克瑞斯6':{
			name:'kzsg_克瑞斯',
			translate:'克瑞斯',
			sex:'female',
			group:'shu',
			quailty:6,
			type:'BOSS',
			hp:15,
			attack:2,
			prepareRound:0,
			bing:0,
			bao:0,
			shu:0,
			skills:['kzsg_永恒生命'],
			forbidai:true,
			inKb:false,
			boss:true,
		},
		'kzsg_克瑞斯7':{
			name:'kzsg_克瑞斯',
			translate:'克瑞斯',
			sex:'female',
			group:'shu',
			quailty:7,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:4,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_永恒生命_noBoss'],
			forbidai:true,
			inKb:false,
		},
		'kzsg_克瑞斯4':{
			name:'kzsg_克瑞斯',
			translate:'克瑞斯',
			sex:'female',
			group:'shu',
			quailty:4,
			type:'武将',
			hp:6,
			attack:2,
			prepareRound:6,
			bing:4,
			bao:1,
			shu:1,
			skills:['kzsg_永恒生命_noBoss'],
			forbidai:true,
			inKb:false,
		},
	};
	for(var i in card){
		lib.kzol_kzsg_card[i]=card[i];
	};
	if(lib.characterPack_mode_kzsg==undefined) lib.characterPack_mode_kzsg={};
	for(var i in lib.kzol_kzsg_card){
		var card9=lib.kzol_kzsg_card[i];
		var str="ext:扩展ol/"+card9.name+".jpg";
		if(card9.image!=undefined){
			str="ext:扩展ol/kzsg_image/"+card9.image;
		};
		lib.characterPack_mode_kzsg[card9.name+card9.quailty]=[card9.sex,card9.group,card9.hp,card9.skills,[str,"des:卡战模式配套武将",'forbidai']];
		lib.translate[card9.name+card9.quailty]=card9.translate;
	};
	if(lib.kzol_kzsg_battle==undefined) lib.kzol_kzsg_battle={};
	if(lib.config.kzol_kzsg.battle==undefined){
		lib.config.kzol_kzsg.battle={};
		bool=true;
	};
	if(lib.config.kzol_kzsg.daily_reward==undefined){
		lib.config.kzol_kzsg.daily_reward={};
		bool=true;
	};
	var battle={
		'初出茅庐':{
			'1':{
				name:'初出茅庐',
				limit:1,
				reward:{
					'kzsg_coin':100,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':75,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_蜀兵1',
							'1':'kzsg_蜀兵1',
							'2':'kzsg_蜀兵1',
						},
					},
				},
				//finish:function(bool){},
			},
			'2':{
				name:'招募蜀兵',
				limit:1,
				reward:{
					'kzsg_coin':100,
					'kzsg_蜀兵1':4,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':75,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_蜀兵1',
							'1':'kzsg_蜀兵1',
							'2':'kzsg_蜀兵1',
							'3':'kzsg_郎中3',
						},
					},
				},
			},
			'3':{
				name:'初遇吴探',
				limit:1,
				reward:{
					'kzsg_coin':250,
					'kzsg_关平3':1,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':100,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_水矛手1',
							'1':'kzsg_水矛手1',
							'2':'kzsg_水矛手1',
							'3':'kzsg_水矛手1',
						},
					},
				},
			},
			'4':{
				name:'吴蜀联军',
				limit:2,
				reward:{
					'进阶池':1,
					'kzsg_coin':250,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':100,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_张昭3',
						},
						number:{
							'0':'kzsg_近身兵1',
							'1':'kzsg_近身兵1',
							'2':'kzsg_近身兵1',
							'3':'kzsg_近身兵1',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_周仓3',
						},
						number:{
							'0':'kzsg_民卫1',
							'1':'kzsg_民卫1',
							'2':'kzsg_民卫1',
						},
					},
				},
			},
			'5':{
				name:'吴军狙击队',
				limit:1,
				reward:{
					'进阶池':1,
					'kzsg_coin':250,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':100,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_水矛手1',
							'1':'kzsg_水矛手1',
							'2':'kzsg_水矛手1',
							'3':'kzsg_水矛手1',
							'4':'kzsg_水矛手1',
						},
					},
				},
			},
			'6':{
				name:'蜀国追兵',
				limit:1,
				reward:{
					'进阶池':1,
					'kzsg_coin':250,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':100,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_张苞3',
						},
						number:{
							'0':'kzsg_民卫1',
							'1':'kzsg_民卫1',
							'2':'kzsg_刀车兵1',
							'3':'kzsg_刀车兵1',
							'4':'kzsg_刀车兵1',
						},
					},
				},
			},
			'7':{
				name:'吴国先锋',
				limit:2,
				reward:{
					'进阶池':1,
					'kzsg_coin':250,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':150,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_鲁肃3',
						},
						number:{
							'0':'kzsg_炼药师3',
							'1':'kzsg_近卫水兵1',
							'2':'kzsg_近卫水兵1',
							'3':'kzsg_近卫水兵1',
						},
					},
					'2':{
						leader:{},
						number:{
							'0':'kzsg_炼药师3',
							'1':'kzsg_炼药师3',
							'2':'kzsg_近卫水兵1',
						},
					},
				},
			},
		},
		'占山为王':{
			'1':{
				name:'毒刃海蜇',
				limit:1,
				reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':125,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_太史慈3',
						},
						number:{
							'0':'kzsg_近卫水兵1',
							'1':'kzsg_近卫水兵1',
							'2':'kzsg_近卫水兵1',
							'3':'kzsg_毒海蜇2',
							'4':'kzsg_毒海蜇2',
						},
					},
				},
			},
			'2':{
				name:'毒军大队',
				limit:1,
				reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':125,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_太史慈3',
						},
						number:{
							'0':'kzsg_毒海蜇2',
							'1':'kzsg_毒海蜇2',
							'2':'kzsg_毒海蜇2',
							'3':'kzsg_毒海蜇2',
						},
					},
				},
			},
			'3':{
				name:'蜀国术士出击',
				limit:1,
				reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':125,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_民卫1',
							'1':'kzsg_民卫1',
							'2':'kzsg_民卫1',
							'3':'kzsg_皇家术师2',
						},
					},
				},
			},
			'4':{
				name:'暗器手初现',
				limit:1,
				reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':125,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_暗器手1',
							'1':'kzsg_暗器手1',
							'2':'kzsg_暗器手1',
							'3':'kzsg_暗器手1',
							'4':'kzsg_民卫1',
							'5':'kzsg_民卫1',
						},
					},
				},
			},
			'5':{
				name:'火法出动',
				limit:1,
				reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':125,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_咒术士2',
							'1':'kzsg_咒术士2',
							'2':'kzsg_咒术士2',
							'3':'kzsg_近卫水兵1',
							'4':'kzsg_近卫水兵1',
							'5':'kzsg_近卫水兵1',
						},
					},
				},
			},
			'6':{
				name:'血剑之威',
				limit:1,
				reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':125,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_血剑卫2',
							'1':'kzsg_血剑卫2',
							'2':'kzsg_血剑卫2',
							'3':'kzsg_血剑卫2',
							'4':'kzsg_民卫1',
							'5':'kzsg_民卫1',
						},
					},
				},
			},
			'7':{
				name:'勇士无双',
				limit:1,
				reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':125,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_剑鱼卫3',
							'1':'kzsg_剑鱼卫3',
							'2':'kzsg_剑鱼卫3',
							'3':'kzsg_剑鱼卫3',
							'4':'kzsg_近卫水兵1',
							'5':'kzsg_近卫水兵1',
						},
					},
				},
			},
			'8':{
				name:'突袭部队',
				limit:2,
				reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':125,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_隐刀卫3',
							'1':'kzsg_隐刀卫3',
							'2':'kzsg_隐刀卫3',
							'3':'kzsg_隐刀卫3',
						},
					},
					'2':{
						leader:{},
						number:{
							'0':'kzsg_近卫水兵1',
							'1':'kzsg_近卫水兵1',
							'2':'kzsg_近卫水兵1',
							'3':'kzsg_近卫水兵1',
						},
					},
				},
			},
			'9':{
				name:'陷阱部队',
				limit:1,
				reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':125,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_浪人1',
							'1':'kzsg_浪人1',
							'2':'kzsg_浪人1',
							'3':'kzsg_浪人1',
							'4':'kzsg_近卫水兵1',
							'5':'kzsg_近卫水兵1',
						},
					},
				},
			},
			'10':{
				name:'蜀国雪狮',
				limit:1,
				reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':125,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_雪狮3',
							'1':'kzsg_雪狮3',
							'2':'kzsg_雪狮3',
							'3':'kzsg_近卫水兵1',
							'4':'kzsg_近卫水兵1',
							'5':'kzsg_近卫水兵1',
						},
					},
				},
			},
			'11':{
				name:'突袭军团',
				limit:1,
				reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':125,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_隐刀卫3',
							'1':'kzsg_隐刀卫3',
							'2':'kzsg_隐刀卫3',
							'3':'kzsg_隐刀卫3',
							'4':'kzsg_掷斧手4',
							'5':'kzsg_掷斧手4',
						},
					},
				},
			},
			'12':{
				name:'皇家水卫',
				limit:1,
				reward:{
					'kzsg_coin':500,
					'kzsg_coin1':25,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':125,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_近卫水兵1',
							'1':'kzsg_近卫水兵1',
							'2':'kzsg_近卫水兵1',
							'3':'kzsg_近卫水兵1',
							'4':'kzsg_皇家水卫3',
							'5':'kzsg_皇家水卫3',
						},
					},
				},
			},
		},
		'初为诸侯':{
			'1':{
				name:'守望之塔',
				limit:1,
				reward:{
					'基础池':1,
					'进阶池':1,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':150,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_蜀兵1',
							'1':'kzsg_蜀兵1',
							'2':'kzsg_民卫1',
							'3':'kzsg_民卫1',
							'4':'kzsg_民卫1',
							'5':'kzsg_守望塔2',
						},
					},
				},
			},
			'2':{
				name:'飞行术',
				limit:1,
				reward:{
					'基础池':1,
					'进阶池':1,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':150,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_民卫1',
							'1':'kzsg_民卫1',
							'2':'kzsg_民卫1',
							'3':'kzsg_民卫1',
							'4':'kzsg_翼白虎3',
							'5':'kzsg_翼白虎3',
						},
					},
				},
			},
			'3':{
				name:'蜀国宣战',
				limit:1,
				reward:{
					'基础池':1,
					'进阶池':1,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':150,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_翼白虎3',
							'1':'kzsg_刺甲盾卫3',
							'2':'kzsg_郎中3',
							'3':'kzsg_郎中3',
							'4':'kzsg_民卫1',
							'5':'kzsg_民卫1',
						},
					},
				},
			},
			'4':{
				name:'医疗小队',
				limit:1,
				reward:{
					'基础池':1,
					'进阶池':1,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':150,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_法正3',
						},
						number:{
							'0':'kzsg_民卫1',
							'1':'kzsg_民卫1',
							'2':'kzsg_郎中3',
							'3':'kzsg_郎中3',
							'4':'kzsg_雪狮3',
							'5':'kzsg_雪狮3',
						},
					},
				},
			},
			'5':{
				name:'反击',
				limit:2,
				reward:{
					'基础池':1,
					'进阶池':1,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':150,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_雪狮3',
							'1':'kzsg_雪狮3',
							'2':'kzsg_藏獒2',
							'3':'kzsg_藏獒2',
						},
					},
					'2':{
						leader:{},
						number:{
							'0':'kzsg_刺甲盾卫3',
							'1':'kzsg_刺甲盾卫3',
							'2':'kzsg_蜀兵1',
							'3':'kzsg_蜀兵1',
							'4':'kzsg_翼白虎3',
						},
					},
				},
			},
			'6':{
				name:'进军遇袭',
				limit:1,
				reward:{
					'基础池':1,
					'进阶池':1,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':150,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_木盾兵2',
							'1':'kzsg_木盾兵2',
							'2':'kzsg_刺甲盾卫3',
							'3':'kzsg_翼白虎3',
							'4':'kzsg_翼白虎3',
							'5':'kzsg_藏獒2',
							'6':'kzsg_藏獒2',
						},
					},
				},
			},
			'7':{
				name:'吴军现身',
				limit:1,
				reward:{
					'基础池':1,
					'进阶池':1,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':150,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_毒海蜇2',
							'1':'kzsg_毒海蜇2',
							'2':'kzsg_皇家水卫3',
							'3':'kzsg_皇家水卫3',
							'4':'kzsg_浪人1',
							'5':'kzsg_浪人1',
						},
					},
				},
			},
			'8':{
				name:'蜀境异兽',
				limit:1,
				reward:{
					'基础池':1,
					'进阶池':1,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':150,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_翼白虎3',
							'1':'kzsg_翼白虎3',
							'2':'kzsg_冰纹豹4',
							'3':'kzsg_冰纹豹4',
							'4':'kzsg_藏獒2',
						},
					},
				},
			},
			'9':{
				name:'攻陷上庸',
				limit:2,
				reward:{
					'基础池':1,
					'进阶池':1,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':150,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_法正3',
						},
						number:{
							'0':'kzsg_藏獒2',
							'1':'kzsg_藏獒2',
							'2':'kzsg_翼白虎3',
							'3':'kzsg_翼白虎3',
						},
					},
					'2':{
						leader:{},
						number:{
							'0':'kzsg_毒海蜇2',
							'1':'kzsg_毒海蜇2',
							'2':'kzsg_蜀兵1',
							'3':'kzsg_蜀兵1',
						},
					},
				},
			},
			'10':{
				name:'吴蜀联盟',
				limit:2,
				reward:{
					'进阶池':3,
					'kzsg_coin1':25,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':150,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_鲁肃3',
						},
						number:{
							'0':'kzsg_枪骑兵2',
							'1':'kzsg_枪骑兵2',
							'2':'kzsg_舞娘3',
							'3':'kzsg_舞娘3',
							'4':'kzsg_舞娘3',
							'5':'kzsg_近身兵1',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_张苞3',
						},
						number:{
							'0':'kzsg_近身兵1',
							'1':'kzsg_近身兵1',
							'2':'kzsg_近身兵1',
							'3':'kzsg_皇家术师2',
							'4':'kzsg_皇家术师2',
							'5':'kzsg_蜀兵1',
						},
					},
					'3':{
						leader:{},
						number:{
							'0':'kzsg_蜀兵1',
							'1':'kzsg_郎中3',
							'2':'kzsg_郎中3',
						},
					},
				},
			},
			
		},
		'魏国强攻':{
			'1':{
				name:'魏国来袭',
				limit:1,
				reward:{
					'进阶池':1,
					'kzsg_coin1':15,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':175,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_幽冥狼1',
							'1':'kzsg_幽冥狼1',
							'2':'kzsg_血魔3',
							'3':'kzsg_血魔3',
							'4':'kzsg_尸兵3',
							'5':'kzsg_尸兵3',
						},
					},
				},
			},
			'2':{
				name:'魏国先锋',
				limit:2,
				reward:{
					'进阶池':1,
					'kzsg_coin1':15,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':175,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_尸兵3',
							'1':'kzsg_尸兵3',
							'2':'kzsg_尸兵3',
							'3':'kzsg_青州兵2',
							'4':'kzsg_青州兵2',
							'5':'kzsg_青州兵2',
							'6':'kzsg_青州兵2',
						},
					},
					'2':{
						leader:{},
						number:{
							'0':'kzsg_血魔3',
							'1':'kzsg_血魔3',
							'2':'kzsg_青州重骑3',
							'3':'kzsg_青州重骑3',
							'4':'kzsg_青州重骑3',
						},
					},
				},
			},
			'3':{
				name:'曹仁大军',
				limit:1,
				reward:{
					'进阶池':1,
					'kzsg_coin1':15,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':175,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_曹仁3',
						},
						number:{
							'0':'kzsg_双股剑6',
							'1':'kzsg_血魔3',
							'2':'kzsg_血魔3',
							'3':'kzsg_血魔3',
							'4':'kzsg_血魔3',
							'5':'kzsg_尸兵3',
						},
					},
					'2':{
						leader:{},
						number:{
							'0':'kzsg_尸兵3',
							'1':'kzsg_刺盾兵3',
							'2':'kzsg_刺盾兵3',
						},
					},
				},
			},
			'4':{
				name:'天鉴者',
				limit:1,
				reward:{
					'进阶池':1,
					'kzsg_coin1':15,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':175,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_天鉴者3',
							'1':'kzsg_天鉴者3',
							'2':'kzsg_天鉴者3',
							'3':'kzsg_天鉴者3',
							'4':'kzsg_天鉴者3',
							'5':'kzsg_天鉴者3',
						},
					},
				},
			},
			'5':{
				name:'夜袭陈留',
				limit:2,
				reward:{
					'进阶池':1,
					'kzsg_coin1':15,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':175,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_张郃4',
						},
						number:{
							'0':'kzsg_火焰诀2',
							'1':'kzsg_软骨术3',
							'2':'kzsg_骷髅兵1',
							'3':'kzsg_骷髅兵1',
							'4':'kzsg_骷髅兵1',
							'5':'kzsg_骷髅兵1',
						},
					},
					'2':{
						leader:{},
						number:{
							'0':'kzsg_血魔3',
							'1':'kzsg_血魔3',
							'2':'kzsg_血魔3',
							'3':'kzsg_血魔3',
							'4':'kzsg_尸兵3',
							'5':'kzsg_尸兵3',
							'6':'kzsg_骨龙4',
						},
					},
				},
			},
			'6':{
				name:'吴军加盟',
				limit:1,
				reward:{
					'进阶池':1,
					'kzsg_coin1':15,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':175,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_周瑜7',
						},
						number:{
							'0':'kzsg_荆棘鞭4',
							'1':'kzsg_水牢阵4',
							'2':'kzsg_海刺鱼3',
							'3':'kzsg_海刺鱼3',
							'4':'kzsg_宝石海星4',
							'5':'kzsg_朱雀骑兵4',
						},
					},
				},
			},
			'7':{
				name:'大军来袭',
				limit:2,
				reward:{
					'进阶池':1,
					'kzsg_coin1':15,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':175,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_夏侯渊3',
						},
						number:{
							'0':'kzsg_水牢阵4',
							'1':'kzsg_双股剑6',
							'2':'kzsg_血枪卫2',
							'3':'kzsg_血枪卫2',
							'4':'kzsg_骷髅兵1',
							'5':'kzsg_骷髅兵1',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_荀攸3',
						},
						number:{
							'0':'kzsg_水牢阵4',
							'1':'kzsg_阔剑4',
							'2':'kzsg_骷髅兵1',
							'3':'kzsg_骷髅兵1',
							'4':'kzsg_青州重骑3',
							'5':'kzsg_青州重骑3',
						},
					},
					'2':{
						leader:{},
						number:{
							'0':'kzsg_天鉴者3',
							'1':'kzsg_天鉴者3',
							'2':'kzsg_天鉴者3',
							'3':'kzsg_天鉴者3',
						},
					},
				},
			},
			'8':{
				name:'烟消云散',
				limit:2,
				reward:{
					'kzsg_coin':1000,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':175,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_夏侯渊3',
						},
						number:{
							'0':'kzsg_水牢阵4',
							'1':'kzsg_双股剑6',
							'2':'kzsg_天鉴者3',
							'3':'kzsg_天鉴者3',
							'4':'kzsg_天鉴者3',
							'5':'kzsg_天鉴者3',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_荀攸3',
						},
						number:{
							'0':'kzsg_水牢阵4',
							'1':'kzsg_阔剑4',
							'2':'kzsg_骨龙4',
							'3':'kzsg_轻骨弓4',
							'4':'kzsg_轻骨弓4',
						},
					},
					'3':{
						leader:{},
						number:{
							'0':'kzsg_地狱使者4',
							'1':'kzsg_地狱使者4',
							'2':'kzsg_血魔3',
							'3':'kzsg_血魔3',
						},
					},
				},
			},
		},
		'联合蜀吴':{
			'1':{
				name:'魏军骚扰',
				limit:2,
				reward:{
					'进阶池':2,
					'kzsg_coin':100,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':200,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_荀攸3',
						},
						number:{
							'0':'kzsg_阔剑4',
							'1':'kzsg_天鉴者3',
							'2':'kzsg_天鉴者3',
							'3':'kzsg_天鉴者3',
							'4':'kzsg_天鉴者3',
						},
					},
					'2':{
						leader:{},
						number:{
							'0':'kzsg_地狱使者4',
							'1':'kzsg_地狱使者4',
							'2':'kzsg_轻骨弓4',
							'3':'kzsg_轻骨弓4',
							'4':'kzsg_血魔3',
							'5':'kzsg_血魔3',
						},
					},
				},
			},
			'2':{
				name:'吴蜀矛盾',
				limit:2,
				reward:{
					'进阶池':2,
					'kzsg_coin':100,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':200,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_庞统3',
						},
						number:{
							'0':'kzsg_双股剑6',
							'1':'kzsg_重甲精骑3',
							'2':'kzsg_重甲精骑3',
							'3':'kzsg_翼白虎3',
							'4':'kzsg_翼白虎3',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_吕蒙4',
						},
						number:{
							'0':'kzsg_毒蛟3',
							'1':'kzsg_毒蛟3',
							'2':'kzsg_毒蛟3',
							'3':'kzsg_毒蛟3',
							'4':'kzsg_水骑兵3',
							'5':'kzsg_水骑兵3',
						},
					},
				},
			},
			'3':{
				name:'魏国密探',
				limit:1,
				reward:{
					'进阶池':2,
					'kzsg_coin':100,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':200,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_荀攸3',
						},
						number:{
							'0':'kzsg_骨灵师4',
							'1':'kzsg_骨灵师4',
							'2':'kzsg_幽冥狼4',
							'3':'kzsg_链球兵2',
							'4':'kzsg_链球兵2',
						},
					},
				},
			},
			'4':{
				name:'魏国重兵',
				limit:2,
				reward:{
					'进阶池':2,
					'kzsg_coin':100,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':200,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_荀攸3',
						},
						number:{
							'0':'kzsg_天鉴者3',
							'1':'kzsg_天鉴者3',
							'2':'kzsg_天鉴者3',
							'3':'kzsg_天鉴者3',
							'4':'kzsg_幽冥盾卫4',
							'5':'kzsg_幽冥盾卫4',
						},
					},
					'2':{
						leader:{},
						number:{
							'0':'kzsg_链球兵2',
							'1':'kzsg_链球兵2',
							'2':'kzsg_骨灵师4',
							'3':'kzsg_骨灵师4',
							'4':'kzsg_轻骨弓4',
							'5':'kzsg_轻骨弓4',
							'6':'kzsg_幽冥狼1',
						},
					},
				},
			},
			'5':{
				name:'拒之门外',
				limit:3,
				reward:{
					'进阶池':2,
					'kzsg_coin':100,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':200,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_张飞4',
						},
						number:{
							'0':'kzsg_丈八蛇矛4',
							'1':'kzsg_妖师1',
							'2':'kzsg_妖师1',
							'3':'kzsg_妖师1',
							'4':'kzsg_银枪卫3',
							'5':'kzsg_银枪卫3',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_甘宁4',
						},
						number:{
							'0':'kzsg_浪人1',
							'1':'kzsg_浪人1',
							'2':'kzsg_浪人1',
							'3':'kzsg_浪人1',
							'4':'kzsg_游侠4',
							'5':'kzsg_游侠4',
						},
					},
					'3':{
						leader:{},
						number:{
							'0':'kzsg_霹雳卫3',
							'1':'kzsg_霹雳卫3',
							'2':'kzsg_霹雳卫3',
							'3':'kzsg_毒蛟3',
							'4':'kzsg_毒蛟3',
							'5':'kzsg_毒蛟3',
							'6':'kzsg_银枪卫3',
						},
					},
				},
			},
			'6':{
				name:'前后夹击',
				limit:3,
				reward:{
					'进阶池':2,
					'kzsg_coin':100,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':200,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_张飞4',
						},
						number:{
							'0':'kzsg_丈八蛇矛4',
							'1':'kzsg_妖师1',
							'2':'kzsg_妖师1',
							'3':'kzsg_银枪卫3',
							'4':'kzsg_银枪卫3',
							'5':'kzsg_霹雳卫3',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_荀攸3',
						},
						number:{
							'0':'kzsg_骨灵师4',
							'1':'kzsg_骨灵师4',
							'2':'kzsg_链球兵2',
							'3':'kzsg_链球兵2',
							'4':'kzsg_幽冥狼1',
							'5':'kzsg_霹雳卫3',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_甘宁4',
						},
						number:{
							'0':'kzsg_浪人1',
							'1':'kzsg_浪人1',
							'2':'kzsg_毒蛟3',
							'3':'kzsg_毒蛟3',
							'4':'kzsg_游侠4',
							'5':'kzsg_游侠4',
						},
					},
				},
			},
			'7':{
				name:'混入魏军',
				limit:1,
				reward:{
					'进阶池':2,
					'kzsg_coin':100,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':200,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_荀攸3',
						},
						number:{
							'0':'kzsg_骨灵骑士4',
							'1':'kzsg_骨灵骑士4',
							'2':'kzsg_血骑2',
							'3':'kzsg_血骑2',
							'4':'kzsg_骨盾卫3',
							'5':'kzsg_骨盾卫3',
						},
					},
				},
			},
			'8':{
				name:'后方突围',
				limit:2,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':200,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_荀攸3',
						},
						number:{
							'0':'kzsg_水牢阵4',
							'1':'kzsg_双股剑6',
							'2':'kzsg_天鉴者3',
							'3':'kzsg_天鉴者3',
							'4':'kzsg_天鉴者3',
							'5':'kzsg_天鉴者3',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_夏侯渊3',
						},
						number:{
							'0':'kzsg_阔剑4',
							'1':'kzsg_水牢阵4',
							'2':'kzsg_骷髅兵1',
							'3':'kzsg_骷髅兵1',
							'4':'kzsg_骷髅兵1',
							'5':'kzsg_骷髅兵1',
						},
					},
					'3':{
						leader:{},
						number:{
							'0':'kzsg_青州重骑3',
							'1':'kzsg_青州重骑3',
							'2':'kzsg_血枪卫2',
							'3':'kzsg_血枪卫2',
						},
					},
				},
			},
		},
		'联军内讧':{
			'1':{
				name:'夺取荆州',
				limit:3,
				reward:{
					'进阶池':1,
					'基础池':2,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':225,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_蒋琬3',
						},
						number:{
							'0':'kzsg_翼白虎3',
							'1':'kzsg_翼白虎3',
							'2':'kzsg_翼白虎3',
							'3':'kzsg_枪骑兵2',
							'4':'kzsg_枪骑兵2',
							'5':'kzsg_枪骑兵2',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_法正3',
						},
						number:{
							'0':'kzsg_暗器手1',
							'1':'kzsg_暗器手1',
							'2':'kzsg_拒马阵地1',
							'3':'kzsg_拒马阵地1',
							'4':'kzsg_医侠3',
							'5':'kzsg_医侠3',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_张苞3',
						},
						number:{
							'0':'kzsg_刺甲盾卫3',
							'1':'kzsg_刺甲盾卫3',
							'2':'kzsg_重甲精骑3',
							'3':'kzsg_重甲精骑3',
							'4':'kzsg_冰纹豹4',
							'5':'kzsg_冰纹豹4',
						},
					},
					'4':{
						leader:{},
						number:{
							'0':'kzsg_藏獒2',
						},
					},
				},
			},
			'2':{
				name:'魏国示好',
				limit:3,
				reward:{
					'进阶池':1,
					'基础池':2,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':225,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_蒋琬3',
						},
						number:{
							'0':'kzsg_翼白虎3',
							'1':'kzsg_翼白虎3',
							'2':'kzsg_医侠3',
							'3':'kzsg_医侠3',
							'4':'kzsg_重甲精骑3',
							'5':'kzsg_重甲精骑3',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_法正3',
						},
						number:{
							'0':'kzsg_枪骑兵2',
							'1':'kzsg_枪骑兵2',
							'2':'kzsg_枪骑兵2',
							'3':'kzsg_拒马阵地1',
							'4':'kzsg_拒马阵地1',
							'5':'kzsg_巨鹿角阵3',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_庞统3',
						},
						number:{
							'0':'kzsg_巨鹿角阵3',
							'1':'kzsg_暗器手1',
							'2':'kzsg_暗器手1',
							'3':'kzsg_刺甲盾卫3',
							'4':'kzsg_刺甲盾卫3',
							'5':'kzsg_冰纹豹4',
						},
					},
					'4':{
						leader:{},
						number:{
							'0':'kzsg_冰纹豹4',
						},
					},
				},
			},
			'3':{
				name:'与魏结盟',
				limit:1,
				reward:{
					'进阶池':1,
					'基础池':2,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':225,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_姜维4',
						},
						number:{
							'0':'kzsg_翼白虎3',
							'1':'kzsg_枪骑兵2',
							'2':'kzsg_雪狮3',
							'3':'kzsg_暴风鹰2',
							'4':'kzsg_暴风鹰2',
							'5':'kzsg_暴风鹰2',
						},
					},
				},
			},
			'4':{
				name:'驻军小沛',
				limit:2,
				reward:{
					'进阶池':1,
					'基础池':2,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':225,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_庞统3',
						},
						number:{
							'0':'kzsg_冰纹豹4',
							'1':'kzsg_冰纹豹4',
							'2':'kzsg_拒马阵地1',
							'3':'kzsg_拒马阵地1',
							'4':'kzsg_枪骑兵2',
							'5':'kzsg_枪骑兵2',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_蒋琬3',
						},
						number:{
							'0':'kzsg_枪骑兵2',
							'1':'kzsg_枪骑兵2',
							'2':'kzsg_暗器手1',
							'3':'kzsg_暗器手1',
							'4':'kzsg_翼白虎3',
							'5':'kzsg_翼白虎3',
						},
					},
					'3':{
						leader:{},
						number:{
							'0':'kzsg_巨鹿角阵3',
							'1':'kzsg_巨鹿角阵3',
							'2':'kzsg_重甲精骑3',
							'3':'kzsg_重甲精骑3',
						},
					},
				},
			},
			'5':{
				name:'吴国使者',
				limit:1,
				reward:{
					'进阶池':1,
					'基础池':2,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':225,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_吕范6',
						},
						number:{
							'0':'kzsg_霸王骑3',
							'1':'kzsg_霸王骑3',
							'2':'kzsg_冰剑卫3',
							'3':'kzsg_冰剑卫3',
							'4':'kzsg_妙手医师3',
							'5':'kzsg_妙手医师3',
						},
					},
				},
			},
			'6':{
				name:'按兵不动',
				limit:2,
				reward:{
					'进阶池':1,
					'基础池':2,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':225,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_庞统3',
						},
						number:{
							'0':'kzsg_皇家雷卫3',
							'1':'kzsg_皇家雷卫3',
							'2':'kzsg_拒马阵地1',
							'3':'kzsg_拒马阵地1',
							'4':'kzsg_巨鹿角阵3',
							'5':'kzsg_巨鹿角阵3',
						},
					},
					'2':{
						leader:{},
						number:{
							'0':'kzsg_巨鹿角阵3',
							'1':'kzsg_巨鹿角阵3',
							'2':'kzsg_巨鹿角阵3',
							'3':'kzsg_巨鹿角阵3',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_蒋琬3',
						},
						number:{
							'0':'kzsg_暴风鹰2',
							'1':'kzsg_暴风鹰2',
							'2':'kzsg_冰纹豹4',
							'3':'kzsg_冰纹豹4',
							'4':'kzsg_翼白虎3',
							'5':'kzsg_翼白虎3',
						},
					},
				},
			},
			'7':{
				name:'蜀国败退',
				limit:3,
				reward:{
					'进阶池':1,
					'基础池':2,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':225,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_法正3',
						},
						number:{
							'0':'kzsg_巨鹿角阵3',
							'1':'kzsg_巨鹿角阵3',
							'2':'kzsg_巨鹿角阵3',
							'3':'kzsg_巨鹿角阵3',
							'4':'kzsg_巨鹿角阵3',
							'5':'kzsg_巨鹿角阵3',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_张苞3',
						},
						number:{
							'0':'kzsg_重甲精骑3',
							'1':'kzsg_重甲精骑3',
							'2':'kzsg_医侠3',
							'3':'kzsg_医侠3',
							'4':'kzsg_皇家雷卫3',
							'5':'kzsg_皇家雷卫3',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_蒋琬3',
						},
						number:{
							'0':'kzsg_刺甲盾卫3',
							'1':'kzsg_刺甲盾卫3',
							'2':'kzsg_翼白虎3',
							'3':'kzsg_翼白虎3',
							'4':'kzsg_拒马阵地1',
							'5':'kzsg_拒马阵地1',
						},
					},
					'4':{
						leader:{},
						number:{
							'0':'kzsg_冰纹豹4',
							'1':'kzsg_冰纹豹4',
							'2':'kzsg_暴风鹰2',
							'3':'kzsg_暴风鹰2',
						},
					},
				},
			},
			'8':{
				name:'常胜将军',
				limit:2,
				reward:{
					'进阶池':3,
					'基础池':5,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':225,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_姜维7',
						},
						number:{
							'0':'kzsg_凤凰号角4',
							'1':'kzsg_火焰诀5',
							'2':'kzsg_雪翼虎4',
							'3':'kzsg_雪翼虎4',
							'4':'kzsg_暴风鹰2',
							'5':'kzsg_暴风鹰2',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_赵云7',
						},
						number:{
							'0':'kzsg_突袭铁骑6',
							'1':'kzsg_突袭铁骑6',
							'2':'kzsg_冲阵车3',
							'3':'kzsg_冲阵车3',
							'4':'kzsg_巨鹿角阵3',
							'5':'kzsg_巨鹿角阵3',
						},
					},
				},
			},
		},
		'离间蜀吴':{
			'1':{
				name:'求贤若渴',
				limit:3,
				reward:{
					'进阶池':1,
					'kzsg_coin':500,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':250,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_庞统3',
						},
						number:{
							'0':'kzsg_突袭铁骑6',
							'1':'kzsg_突袭铁骑6',
							'2':'kzsg_突袭铁骑6',
							'3':'kzsg_暗器手4',
							'4':'kzsg_暗器手4',
							'5':'kzsg_暗器手4',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_蒋琬3',
						},
						number:{
							'0':'kzsg_冲阵车3',
							'1':'kzsg_冲阵车3',
							'2':'kzsg_雪狮3',
							'3':'kzsg_雪狮3',
							'4':'kzsg_翼白虎3',
							'5':'kzsg_翼白虎3',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_关平3',
							'1':'kzsg_张苞3',
						},
						number:{
							'0':'kzsg_翼白虎3',
							'1':'kzsg_巨鹿角阵3',
							'2':'kzsg_巨鹿角阵3',
							'3':'kzsg_暴风鹰5',
							'4':'kzsg_暴风鹰5',
						},
					},
				},
			},
			'2':{
				name:'迷惑吴军',
				limit:3,
				reward:{
					'进阶池':1,
					'kzsg_coin':500,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':250,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_鲁肃3',
						},
						number:{
							'0':'kzsg_火焰诀5',
							'1':'kzsg_雷电符4',
							'2':'kzsg_药尊者3',
							'3':'kzsg_药尊者3',
							'4':'kzsg_药尊者3',
							'5':'kzsg_药尊者3',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_周瑜7',
						},
						number:{
							'0':'kzsg_毒蛟3',
							'1':'kzsg_毒蛟3',
							'2':'kzsg_毒蛟3',
							'3':'kzsg_毒蛟3',
							'4':'kzsg_朱雀骑兵7',
							'5':'kzsg_朱雀骑兵7',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_张昭3',
						},
						number:{
							'0':'kzsg_朱雀骑兵7',
							'1':'kzsg_朱雀骑兵7',
							'2':'kzsg_皇家水卫3',
							'3':'kzsg_皇家水卫3',
							'4':'kzsg_天雷卫5',
							'5':'kzsg_天雷卫5',
						},
					},
				},
			},
			'3':{
				name:'柴桑先锋',
				limit:1,
				reward:{
					'进阶池':1,
					'kzsg_coin':500,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':250,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_张昭3',
						},
						number:{
							'0':'kzsg_皇家水卫3',
							'1':'kzsg_皇家水卫3',
							'2':'kzsg_毒蛟3',
							'3':'kzsg_毒蛟3',
							'4':'kzsg_朱雀骑兵7',
							'5':'kzsg_朱雀骑兵7',
						},
					},
				},
			},
			'4':{
				name:'艨冲船',
				limit:2,
				reward:{
					'进阶池':1,
					'kzsg_coin':500,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':250,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_张昭3',
						},
						number:{
							'0':'kzsg_蒙冲船3',
							'1':'kzsg_蒙冲船3',
							'2':'kzsg_水曼蛇3',
							'3':'kzsg_水曼蛇3',
							'4':'kzsg_毒刀卫3',
							'5':'kzsg_毒刀卫3',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_鲁肃3',
						},
						number:{
							'0':'kzsg_海刺龙4',
							'1':'kzsg_海刺龙4',
							'2':'kzsg_马弓手3',
							'3':'kzsg_马弓手3',
							'4':'kzsg_咒术士2',
							'5':'kzsg_咒术士2',
						},
					},
				},
			},
			'5':{
				name:'水中异兽',
				limit:3,
				reward:{
					'进阶池':1,
					'kzsg_coin':500,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':250,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_皇家水卫3',
							'1':'kzsg_皇家水卫3',
							'2':'kzsg_皇家水卫3',
							'3':'kzsg_青龙7',
							'4':'kzsg_青龙7',
							'5':'kzsg_青龙7',
							'6':'kzsg_海刺鱼3',
						},
					},
					'2':{
						leader:{},
						number:{
							'0':'kzsg_海刺鱼3',
							'1':'kzsg_海刺鱼3',
							'2':'kzsg_毒蛟3',
							'3':'kzsg_毒蛟3',
							'4':'kzsg_毒蛟3',
							'5':'kzsg_医师2',
							'6':'kzsg_医师2',
						},
					},
					'3':{
						leader:{},
						number:{
							'0':'kzsg_医师2',
							'1':'kzsg_医师2',
							'2':'kzsg_游方雷卫2',
							'3':'kzsg_游方雷卫2',
							'4':'kzsg_冰剑卫3',
							'5':'kzsg_冰剑卫3',
							'6':'kzsg_冰剑卫3',
						},
					},
					'4':{
						leader:{},
						number:{
							'0':'kzsg_冰剑卫3',
							'1':'kzsg_海刺龙4',
							'2':'kzsg_海刺龙4',
							'3':'kzsg_海刺龙4',
						},
					},
				},
			},
			'6':{
				name:'进军柴桑',
				limit:2,
				reward:{
					'进阶池':1,
					'kzsg_coin':500,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':250,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_黄盖4',
						},
						number:{
							'0':'kzsg_火焰扇4',
							'1':'kzsg_救治药箱3',
							'2':'kzsg_游侠4',
							'3':'kzsg_游侠4',
							'4':'kzsg_游侠4',
							'5':'kzsg_游侠4',
						},
					},
					'2':{
						leader:{},
						number:{
							'0':'kzsg_毒蛟3',
							'1':'kzsg_毒蛟3',
							'2':'kzsg_预言师2',
							'3':'kzsg_预言师2',
							'4':'kzsg_妖术师4',
							'5':'kzsg_妖术师4',
							'6':'kzsg_霸王骑6',
						},
					},
				},
			},
			'7':{
				name:'都督周瑜',
				limit:3,
				reward:{
					'进阶池':1,
					'kzsg_coin':500,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':250,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_朱治3',
						},
						number:{
							'0':'kzsg_救治药箱3',
							'1':'kzsg_毒蛟3',
							'2':'kzsg_毒蛟3',
							'3':'kzsg_毒蛟3',
							'4':'kzsg_刺客3',
							'5':'kzsg_刺客3',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_周瑜7',
						},
						number:{
							'0':'kzsg_毁灭烈焰7',
							'1':'kzsg_朱雀骑兵4',
							'2':'kzsg_朱雀骑兵4',
							'3':'kzsg_朱雀骑兵4',
							'4':'kzsg_冰剑卫3',
							'5':'kzsg_冰剑卫3',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_周泰3',
						},
						number:{
							'0':'kzsg_宝石海星4',
							'1':'kzsg_宝石海星4',
							'2':'kzsg_宝石海星4',
							'3':'kzsg_海刺龙4',
							'4':'kzsg_海刺龙4',
							'5':'kzsg_海刺龙4',
						},
					},
					'4':{
						leader:{},
						number:{
							'0':'kzsg_马弓手3',
							'1':'kzsg_马弓手3',
							'2':'kzsg_马弓手3',
							'3':'kzsg_火雷2',
							'4':'kzsg_火雷2',
							'5':'kzsg_火雷2',
						},
					},
				},
			},
			'8':{
				name:'柴桑转蜀',
				limit:1,
				reward:{
					'进阶池':3,
					'kzsg_coin1':75,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin':250,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_张苞3',
						},
						number:{
							'0':'kzsg_巨鹿角阵3',
							'1':'kzsg_巨鹿角阵3',
							'2':'kzsg_巨鹿角阵3',
							'3':'kzsg_冲阵车3',
							'4':'kzsg_冲阵车3',
							'5':'kzsg_冲阵车3',
						},
					},
					'2':{
						leader:{},
						number:{
							'0':'kzsg_翼白虎3',
							'1':'kzsg_翼白虎3',
							'2':'kzsg_翼白虎3',
							'3':'kzsg_暴风鹰2',
							'4':'kzsg_暴风鹰2',
						},
					},
				},
			},
		},
		'魏国反攻':{
			'1':{
				name:'魏军突袭',
				limit:3,
				reward:{
					'进阶池':1,
					'kzsg_coin1':20,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin1':5,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_夏侯惇5',
						},
						number:{
							'0':'kzsg_阔剑4',
							'1':'kzsg_阔剑4',
							'2':'kzsg_天鉴者6',
							'3':'kzsg_天鉴者6',
							'4':'kzsg_天鉴者6',
							'5':'kzsg_天鉴者6',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_荀攸3',
						},
						number:{
							'0':'kzsg_双股剑6',
							'1':'kzsg_双股剑6',
							'2':'kzsg_幽冥盾卫4',
							'3':'kzsg_幽冥盾卫4',
							'4':'kzsg_地狱使者4',
							'5':'kzsg_地狱使者4',
						},
					},
					'3':{
						leader:{},
						number:{
							'0':'kzsg_血魔3',
							'1':'kzsg_血魔3',
							'2':'kzsg_骨龙4',
							'3':'kzsg_骨龙4',
							'4':'kzsg_轻骨弓4',
							'5':'kzsg_轻骨弓4',
						},
					},
				},
			},
			'2':{
				name:'死亡军团',
				limit:2,
				reward:{
					'进阶池':1,
					'kzsg_coin1':20,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin1':5,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_程昱4',
						},
						number:{
							'0':'kzsg_骨弩3',
							'1':'kzsg_骨弩3',
							'2':'kzsg_骨弩3',
							'3':'kzsg_骨弩3',
							'4':'kzsg_骨骑2',
							'5':'kzsg_骨骑2',
						},
					},
					'2':{
						leader:{},
						number:{
							'0':'kzsg_骨骑2',
							'1':'kzsg_骨骑2',
							'2':'kzsg_骨龙4',
							'3':'kzsg_骨龙4',
							'4':'kzsg_地狱使者4',
							'5':'kzsg_血魔6',
						},
					},
				},
			},
			'3':{
				name:'亡灵巨龙',
				limit:2,
				reward:{
					'进阶池':1,
					'kzsg_coin1':20,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin1':5,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_骨龙王7',
						},
						number:{
							'0':'kzsg_救治药箱3',
							'1':'kzsg_毁灭烈焰7',
							'2':'kzsg_骷髅兵4',
							'3':'kzsg_骷髅兵4',
							'4':'kzsg_骷髅兵4',
							'5':'kzsg_骷髅兵4',
						},
					},
					'2':{
						leader:{},
						number:{
							'0':'kzsg_骨灵师4',
							'1':'kzsg_骨灵师4',
							'2':'kzsg_骨灵师4',
							'3':'kzsg_骨灵师4',
							'4':'kzsg_骨盾医师4',
							'5':'kzsg_骨盾医师4',
							'6':'kzsg_毒液铁壁3',
						},
					},
					'3':{
						leader:{},
						number:{
							'0':'kzsg_骨龙4',
							'1':'kzsg_骨龙4',
							'2':'kzsg_骨龙骑士7',
							'3':'kzsg_骨龙骑士7',
						},
					},
				},
			},
			'4':{
				name:'反攻五丈原',
				limit:3,
				reward:{
					'进阶池':1,
					'kzsg_coin1':20,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin1':5,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_郭嘉4',
						},
						number:{
							'0':'kzsg_救治药箱3',
							'1':'kzsg_毁灭烈焰7',
							'2':'kzsg_骷髅兵4',
							'3':'kzsg_骷髅兵4',
							'4':'kzsg_骷髅兵4',
							'5':'kzsg_骷髅兵4',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_骨龙王7',
						},
						number:{
							'0':'kzsg_骨龙4',
							'1':'kzsg_骨龙4',
							'2':'kzsg_骨龙骑士7',
							'3':'kzsg_骨龙骑士7',
							'4':'kzsg_骨弩3',
							'5':'kzsg_骨弩3',
						},
					},
					'3':{
						leader:{},
						number:{
							'0':'kzsg_天鉴者3',
							'1':'kzsg_天鉴者3',
							'2':'kzsg_骨盾医师4',
							'3':'kzsg_骨盾医师4',
							'4':'kzsg_骨灵师4',
							'5':'kzsg_骨灵师4',
							'6':'kzsg_毒液铁壁3',
						},
					},
					'4':{
						leader:{},
						number:{
							'0':'kzsg_刺盾兵3',
							'1':'kzsg_刺盾兵3',
						},
					},
				},
			},
			'5':{
				name:'五丈原守军',
				limit:3,
				reward:{
					'进阶池':1,
					'kzsg_coin1':20,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin1':5,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_夏侯惇5',
						},
						number:{
							'0':'kzsg_救治药箱3',
							'1':'kzsg_毁灭烈焰7',
							'2':'kzsg_骨龙4',
							'3':'kzsg_骨龙4',
							'4':'kzsg_骨灵师4',
							'5':'kzsg_骨灵师4',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_郭嘉4',
						},
						number:{
							'0':'kzsg_骨灵师4',
							'1':'kzsg_骷髅兵4',
							'2':'kzsg_骷髅兵4',
							'3':'kzsg_骷髅兵4',
							'4':'kzsg_骨弩3',
							'5':'kzsg_骨弩3',
						},
					},
					'3':{
						leader:{},
						number:{
							'0':'kzsg_骨龙骑士4',
							'1':'kzsg_骨龙骑士4',
							'2':'kzsg_刺盾兵3',
							'3':'kzsg_刺盾兵3',
							'4':'kzsg_天鉴者3',
							'5':'kzsg_天鉴者3',
							'6':'kzsg_毒液铁壁3',
						},
					},
				},
			},
			'6':{
				name:'连取陈仓',
				limit:2,
				reward:{
					'进阶池':1,
					'kzsg_coin1':20,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin1':5,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_夏侯惇5',
						},
						number:{
							'0':'kzsg_骨龙骑士7',
							'1':'kzsg_骨龙骑士7',
							'2':'kzsg_链球兵2',
							'3':'kzsg_链球兵2',
							'4':'kzsg_骨骑2',
							'5':'kzsg_骨骑2',
						},
					},
					'2':{
						leader:{},
						number:{
							'0':'kzsg_血魔6',
							'1':'kzsg_血魔6',
							'2':'kzsg_血魔6',
							'3':'kzsg_骷髅兵1',
							'4':'kzsg_骷髅兵1',
							'5':'kzsg_骷髅兵1',
							'6':'kzsg_骷髅兵1',
						},
					},
				},
			},
			'7':{
				name:'再夺天水',
				limit:3,
				reward:{
					'进阶池':1,
					'kzsg_coin1':20,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin1':5,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_郭嘉4',
						},
						number:{
							'0':'kzsg_救治药箱3',
							'1':'kzsg_毁灭烈焰7',
							'2':'kzsg_骨盾医师4',
							'3':'kzsg_骨盾医师4',
							'4':'kzsg_天鉴者3',
							'5':'kzsg_天鉴者3',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_夏侯惇5',
						},
						number:{
							'0':'kzsg_骨龙4',
							'1':'kzsg_骨龙4',
							'2':'kzsg_骨龙骑士4',
							'3':'kzsg_骨龙骑士4',
							'4':'kzsg_骨弩3',
							'5':'kzsg_骨弩3',
						},
					},
					'3':{
						leader:{},
						number:{
							'0':'kzsg_刺盾兵3',
							'1':'kzsg_刺盾兵3',
							'2':'kzsg_地狱使者4',
							'3':'kzsg_地狱使者4',
							'4':'kzsg_骨盾卫3',
							'5':'kzsg_骨盾卫3',
							'6':'kzsg_骨盾卫3',
						},
					},
					'4':{
						leader:{},
						number:{
							'0':'kzsg_毒液铁壁3',
						},
					},
				},
			},
			'8':{
				name:'稳固守城',
				limit:4,
				reward:{
					'进阶池':3,
					'kzsg_coin1':100,
				},
				daily_reward:{
					'基础池':1,
					'kzsg_coin1':5,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_夏侯惇7',
						},
						number:{
							'0':'kzsg_救治药箱3',
							'1':'kzsg_毁灭烈焰7',
							'2':'kzsg_尸兵6',
							'3':'kzsg_尸兵6',
							'4':'kzsg_轻骨弓4',
							'5':'kzsg_轻骨弓4',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_曹操7',
						},
						number:{
							'0':'kzsg_救治药箱3',
							'1':'kzsg_青州重骑6',
							'2':'kzsg_青州重骑6',
							'3':'kzsg_青州重骑6',
							'4':'kzsg_青州暗骑5',
							'5':'kzsg_青州暗骑5',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_荀攸6',
						},
						number:{
							'0':'kzsg_毁灭烈焰7',
							'1':'kzsg_幽冥狼4',
							'2':'kzsg_幽冥狼4',
							'3':'kzsg_幽冥狼4',
							'4':'kzsg_骨龙骑士4',
							'5':'kzsg_骨龙骑士4',
						},
					},
					'4':{
						leader:{
							'0':'kzsg_骨龙王7',
						},
						number:{
							'0':'kzsg_骷髅王4',
							'1':'kzsg_骷髅王4',
							'2':'kzsg_骨龙7',
							'3':'kzsg_骨龙7',
							'4':'kzsg_骨龙骑士7',
							'5':'kzsg_骨龙骑士7',
						},
					},
				},
			},
		},
		'七出祁山':{
			'1':{
				name:'蜀国动向',
				limit:2,
				reward:{
					'进阶池':2,
					'kzsg_coin':500,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin1':5,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_蒋琬6',
						},
						number:{
							'0':'kzsg_冰纹豹7',
							'1':'kzsg_冰纹豹7',
							'2':'kzsg_冰纹豹7',
							'3':'kzsg_冰纹豹7',
							'4':'kzsg_暴风鹰5',
							'5':'kzsg_暴风鹰5',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_张苞6',
						},
						number:{
							'0':'kzsg_暴风鹰5',
							'1':'kzsg_暴风鹰5',
							'2':'kzsg_突袭铁骑6',
							'3':'kzsg_突袭铁骑6',
							'4':'kzsg_舞娘6',
							'5':'kzsg_舞娘6',
						},
					},
				},
			},
			'2':{
				name:'卧龙诸葛',
				limit:4,
				reward:{
					'进阶池':2,
					'kzsg_coin':500,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin1':5,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_张苞6',
						},
						number:{
							'0':'kzsg_冲阵车6',
							'1':'kzsg_冲阵车6',
							'2':'kzsg_冲阵车6',
							'3':'kzsg_冲阵车6',
							'4':'kzsg_救治药箱3',
							'5':'kzsg_救治药箱3',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_诸葛亮7',
						},
						number:{
							'0':'kzsg_雪翼虎7',
							'1':'kzsg_雪翼虎7',
							'2':'kzsg_银枪卫6',
							'3':'kzsg_银枪卫6',
							'4':'kzsg_银枪卫6',
							'5':'kzsg_霹雳卫6',
						},
					},
					'3':{
						leader:{},
						number:{
							'0':'kzsg_霹雳卫6',
							'1':'kzsg_霹雳卫6',
							'2':'kzsg_翼白虎6',
							'3':'kzsg_翼白虎6',
							'4':'kzsg_暴风鹰5',
							'5':'kzsg_暴风鹰5',
							'6':'kzsg_木盾兵5',
						},
					},
					'4':{
						leader:{},
						number:{
							'0':'kzsg_木盾兵5',
							'1':'kzsg_木盾兵5',
							'2':'kzsg_木盾兵5',
							'3':'kzsg_医侠6',
							'4':'kzsg_医侠6',
							'5':'kzsg_医侠6',
							'6':'kzsg_医侠6',
						},
					},
				},
			},
			'3':{
				name:'全才姜维',
				limit:2,
				reward:{
					'进阶池':2,
					'kzsg_coin':500,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin1':5,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_周仓6',
						},
						number:{
							'0':'kzsg_暗器手4',
							'1':'kzsg_暗器手4',
							'2':'kzsg_暗器手4',
							'3':'kzsg_暗器手4',
							'4':'kzsg_木盾兵5',
							'5':'kzsg_木盾兵5',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_姜维7',
						},
						number:{
							'0':'kzsg_翼白虎6',
							'1':'kzsg_翼白虎6',
							'2':'kzsg_雪翼虎7',
							'3':'kzsg_雪翼虎7',
							'4':'kzsg_号角手4',
							'5':'kzsg_号角手4',
						},
					},
				},
			},
			'4':{
				name:'子龙来袭',
				limit:2,
				reward:{
					'进阶池':2,
					'kzsg_coin':500,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin1':5,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_赵云7',
						},
						number:{
							'0':'kzsg_突袭铁骑6',
							'1':'kzsg_突袭铁骑6',
							'2':'kzsg_枪骑兵5',
							'3':'kzsg_枪骑兵5',
							'4':'kzsg_舞娘6',
							'5':'kzsg_舞娘6',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_姜维7',
						},
						number:{
							'0':'kzsg_皇家雷卫6',
							'1':'kzsg_皇家雷卫6',
							'2':'kzsg_霹雳卫6',
							'3':'kzsg_霹雳卫6',
							'4':'kzsg_暴风鹰5',
							'5':'kzsg_号角手4',
						},
					},
				},
			},
			'5':{
				name:'武圣关羽',
				limit:2,
				reward:{
					'进阶池':2,
					'kzsg_coin':500,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin1':5,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_关羽7',
						},
						number:{
							'0':'kzsg_救治药箱3',
							'1':'kzsg_毁灭烈焰7',
							'2':'kzsg_血剑卫5',
							'3':'kzsg_血剑卫5',
							'4':'kzsg_暴风鹰5',
							'5':'kzsg_暴风鹰5',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_赵云7',
						},
						number:{
							'0':'kzsg_救治药箱3',
							'1':'kzsg_暴风鹰5',
							'2':'kzsg_暴风鹰5',
							'3':'kzsg_雪翼虎7',
							'4':'kzsg_雪翼虎7',
							'5':'kzsg_号角手4',
						},
					},
				},
			},
			'6':{
				name:'猛将张飞',
				limit:3,
				reward:{
					'进阶池':2,
					'kzsg_coin':500,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin1':5,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_张飞7',
						},
						number:{
							'0':'kzsg_毁灭烈焰7',
							'1':'kzsg_毁灭烈焰7',
							'2':'kzsg_翼白虎6',
							'3':'kzsg_翼白虎6',
							'4':'kzsg_雪翼虎7',
							'5':'kzsg_雪翼虎7',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_关羽7',
						},
						number:{
							'0':'kzsg_毁灭烈焰7',
							'1':'kzsg_救治药箱3',
							'2':'kzsg_雪翼虎7',
							'3':'kzsg_雪翼虎7',
							'4':'kzsg_暴风鹰5',
							'5':'kzsg_暴风鹰5',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_赵云7',
						},
						number:{
							'0':'kzsg_救治药箱3',
							'1':'kzsg_暴风鹰5',
							'2':'kzsg_暴风鹰5',
							'3':'kzsg_血剑卫5',
							'4':'kzsg_血剑卫5',
							'5':'kzsg_号角手4',
						},
					},
				},
			},
			'7':{
				name:'马超军团',
				limit:2,
				reward:{
					'进阶池':2,
					'kzsg_coin':500,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin1':5,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_马超7',
						},
						number:{
							'0':'kzsg_圣光5',
							'1':'kzsg_突袭铁骑6',
							'2':'kzsg_突袭铁骑6',
							'3':'kzsg_突袭铁骑6',
							'4':'kzsg_突袭铁骑6',
							'5':'kzsg_突袭铁骑6',
						},
					},
					'2':{
						leader:{},
						number:{
							'0':'kzsg_突袭铁骑6',
							'1':'kzsg_暗器手4',
							'2':'kzsg_暗器手4',
							'3':'kzsg_重甲精骑6',
							'4':'kzsg_重甲精骑6',
							'5':'kzsg_枪骑兵5',
							'6':'kzsg_枪骑兵5',
						},
					},
				},
			},
			'8':{
				name:'七出祁山',
				limit:4,
				reward:{
					'进阶池':5,
					'kzsg_coin1':100,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin1':5,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_赵云7',
						},
						number:{
							'0':'kzsg_圣光5',
							'1':'kzsg_救治药箱3',
							'2':'kzsg_枪骑兵5',
							'3':'kzsg_枪骑兵5',
							'4':'kzsg_重甲精骑6',
							'5':'kzsg_重甲精骑6',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_关羽7',
						},
						number:{
							'0':'kzsg_圣光5',
							'1':'kzsg_救治药箱3',
							'2':'kzsg_暗器手4',
							'3':'kzsg_暗器手4',
							'4':'kzsg_暗器手4',
							'5':'kzsg_暗器手4',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_诸葛亮7',
						},
						number:{
							'0':'kzsg_毁灭烈焰7',
							'1':'kzsg_雪翼虎7',
							'2':'kzsg_雪翼虎7',
							'3':'kzsg_翼白虎6',
							'4':'kzsg_翼白虎6',
							'5':'kzsg_突袭铁骑6',
						},
					},
					'4':{
						leader:{
							'0':'kzsg_马超7',
						},
						number:{
							'0':'kzsg_毁灭烈焰7',
							'1':'kzsg_突袭铁骑6',
							'2':'kzsg_突袭铁骑6',
							'3':'kzsg_突袭铁骑6',
							'4':'kzsg_突袭铁骑6',
							'5':'kzsg_突袭铁骑6',
						},
					},
				},
			},
		},
		'动乱局势':{
			'1':{
				name:'游兵散勇',
				limit:2,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_张飞7',
						},
						number:{
							'0':'kzsg_青囊书4',
							'1':'kzsg_突袭铁骑6',
							'2':'kzsg_暴风鹰5',
							'3':'kzsg_冲阵车6',
							'4':'kzsg_巨鹿角阵6',
							'5':'kzsg_翼白虎6',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_曹操7',
						},
						number:{
							'0':'kzsg_青囊书4',
							'1':'kzsg_轰天雷4',
							'2':'kzsg_轻骨弓7',
							'3':'kzsg_轻骨弓7',
							'4':'kzsg_骨灵骑士7',
							'5':'kzsg_骨灵骑士7',
						},
					},
				},
			},
			'2':{
				name:'绝对优势',
				limit:2,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_隐刀卫6',
							'1':'kzsg_隐刀卫6',
							'2':'kzsg_游侠7',
							'3':'kzsg_马弓手6',
							'4':'kzsg_霸王骑6',
							'5':'kzsg_霸王骑6',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_姜维7',
						},
						number:{
							'0':'kzsg_凤凰号角4',
							'1':'kzsg_轰天雷4',
							'2':'kzsg_雪翼虎7',
							'3':'kzsg_雪翼虎7',
							'4':'kzsg_暴风鹰5',
							'5':'kzsg_暴风鹰5',
						},
					},
				},
			},
			'3':{
				name:'山雨欲来',
				limit:3,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_姜维7',
						},
						number:{
							'0':'kzsg_凤凰号角4',
							'1':'kzsg_兵书4',
							'2':'kzsg_雪翼虎7',
							'3':'kzsg_雪翼虎7',
							'4':'kzsg_暴风鹰5',
							'5':'kzsg_暴风鹰5',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_阔剑4',
							'1':'kzsg_青囊书4',
							'2':'kzsg_妙手医师6',
							'3':'kzsg_妙手医师6',
							'4':'kzsg_皇家水卫6',
							'5':'kzsg_皇家水卫6',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_满宠7',
						},
						number:{
							'0':'kzsg_轰天雷4',
							'1':'kzsg_青囊书4',
							'2':'kzsg_轻骨弓7',
							'3':'kzsg_轻骨弓7',
							'4':'kzsg_骨龙7',
							'5':'kzsg_骨龙7',
						},
					},
					'4':{
						leader:{},
						number:{
							'0':'kzsg_马弓手6',
							'1':'kzsg_马弓手6',
							'2':'kzsg_骨矛手6',
							'3':'kzsg_骨矛手6',
						},
					},
				},
			},
			'4':{
				name:'三国联军',
				limit:3,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_马超7',
						},
						number:{
							'0':'kzsg_兵书4',
							'1':'kzsg_阔剑4',
							'2':'kzsg_雪翼虎7',
							'3':'kzsg_雪翼虎7',
							'4':'kzsg_暴风鹰5',
							'5':'kzsg_暴风鹰5',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_周泰6',
						},
						number:{
							'0':'kzsg_妙手医师6',
							'1':'kzsg_妙手医师6',
							'2':'kzsg_皇家水卫6',
							'3':'kzsg_皇家水卫6',
							'4':'kzsg_马弓手6',
							'5':'kzsg_马弓手6',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_满宠7',
						},
						number:{
							'0':'kzsg_轻骨弓7',
							'1':'kzsg_轻骨弓7',
							'2':'kzsg_骨龙7',
							'3':'kzsg_骨龙7',
							'4':'kzsg_骨矛手6',
							'5':'kzsg_骨矛手6',
						},
					},
				},
			},
			'5':{
				name:'飞行奇袭',
				limit:4,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_姜维7',
						},
						number:{
							'0':'kzsg_暴风鹰5',
							'1':'kzsg_暴风鹰5',
							'2':'kzsg_暴风鹰5',
							'3':'kzsg_暴风鹰5',
							'4':'kzsg_雪翼虎7',
							'5':'kzsg_雪翼虎7',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_马超7',
						},
						number:{
							'0':'kzsg_兵书4',
							'1':'kzsg_阔剑4',
							'2':'kzsg_阔剑4',
							'3':'kzsg_凤凰号角4',
							'4':'kzsg_雪翼虎7',
							'5':'kzsg_雪翼虎7',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_满宠7',
						},
						number:{
							'0':'kzsg_青囊书4',
							'1':'kzsg_骨矛手6',
							'2':'kzsg_骨矛手6',
							'3':'kzsg_轻骨弓7',
							'4':'kzsg_轻骨弓7',
							'5':'kzsg_青囊书4',
						},
					},
					'4':{
						leader:{
							'0':'kzsg_满宠7',
						},
						number:{
							'0':'kzsg_骨龙7',
							'1':'kzsg_骨龙7',
							'2':'kzsg_骨龙7',
							'3':'kzsg_骨龙7',
							'4':'kzsg_骨龙7',
							'5':'kzsg_骨龙7',
						},
					},
				},
			},
			'6':{
				name:'强势水军',
				limit:4,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_张飞7',
						},
						number:{
							'0':'kzsg_冲阵车6',
							'1':'kzsg_暴风鹰5',
							'2':'kzsg_突袭铁骑6',
							'3':'kzsg_巨鹿角阵6',
							'4':'kzsg_翼白虎6',
							'5':'kzsg_青囊书4',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_妙手医师6',
							'1':'kzsg_妙手医师6',
							'2':'kzsg_马弓手6',
							'3':'kzsg_马弓手6',
							'4':'kzsg_游侠7',
							'5':'kzsg_游侠7',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_周泰6',
						},
						number:{
							'0':'kzsg_隐刀卫6',
							'1':'kzsg_隐刀卫6',
							'2':'kzsg_霸王骑6',
							'3':'kzsg_霸王骑6',
							'4':'kzsg_皇家水卫6',
							'5':'kzsg_皇家水卫6',
						},
					},
					'4':{
						leader:{
							'0':'kzsg_曹操7',
						},
						number:{
							'0':'kzsg_青囊书4',
							'1':'kzsg_轰天雷4',
							'2':'kzsg_轻骨弓7',
							'3':'kzsg_轻骨弓7',
							'4':'kzsg_骨灵骑士7',
							'5':'kzsg_骨灵骑士7',
						},
					},
				},
			},
			'7':{
				name:'灵魂召唤',
				limit:3,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_郭嘉7',
						},
						number:{
							'0':'kzsg_青囊书4',
							'1':'kzsg_阔剑4',
							'2':'kzsg_续命灯4',
							'3':'kzsg_轻骨弓7',
							'4':'kzsg_轻骨弓7',
							'5':'kzsg_轻骨弓7',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_满宠7',
						},
						number:{
							'0':'kzsg_青囊书4',
							'1':'kzsg_骨矛手6',
							'2':'kzsg_骨矛手6',
							'3':'kzsg_骨矛手6',
							'4':'kzsg_骨龙7',
							'5':'kzsg_骨龙7',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_满宠7',
						},
						number:{
							'0':'kzsg_骨龙7',
							'1':'kzsg_骨灵师7',
							'2':'kzsg_骨灵师7',
							'3':'kzsg_骨灵师7',
							'4':'kzsg_骷髅兵4',
							'5':'kzsg_骷髅兵4',
						},
					},
				},
			},
			'8':{
				name:'青龙偃月',
				limit:3,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_关羽7',
						},
						number:{
							'0':'kzsg_青龙偃月刀7',
							'1':'kzsg_突袭铁骑6',
							'2':'kzsg_突袭铁骑6',
							'3':'kzsg_突袭铁骑6',
							'4':'kzsg_突袭铁骑6',
							'5':'kzsg_突袭铁骑6',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_马超7',
						},
						number:{
							'0':'kzsg_凤凰号角4',
							'1':'kzsg_皇家雷卫6',
							'2':'kzsg_皇家雷卫6',
							'3':'kzsg_突袭铁骑6',
							'4':'kzsg_突袭铁骑6',
							'5':'kzsg_突袭铁骑6',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_赵云7',
						},
						number:{
							'0':'kzsg_凤凰号角4',
							'1':'kzsg_暴风鹰5',
							'2':'kzsg_暴风鹰5',
							'3':'kzsg_暴风鹰5',
							'4':'kzsg_雪翼虎7',
							'5':'kzsg_雪翼虎7',
						},
					},
				},
			},
			'9':{
				name:'霸王出马',
				limit:3,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_孙策7',
						},
						number:{
							'0':'kzsg_阔剑4',
							'1':'kzsg_霸王骑6',
							'2':'kzsg_霸王骑6',
							'3':'kzsg_皇家水卫6',
							'4':'kzsg_皇家水卫6',
							'5':'kzsg_游侠7',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_周泰6',
						},
						number:{
							'0':'kzsg_马弓手6',
							'1':'kzsg_马弓手6',
							'2':'kzsg_马弓手6',
							'3':'kzsg_咒术士5',
							'4':'kzsg_冰剑卫6',
							'5':'kzsg_冰剑卫6',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_隐刀卫6',
							'1':'kzsg_隐刀卫6',
							'2':'kzsg_妙手医师6',
							'3':'kzsg_妙手医师6',
							'4':'kzsg_宝石海星7',
							'5':'kzsg_宝石海星7',
						},
					},
				},
			},
			'10':{
				name:'弓手军团',
				limit:4,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_黄忠7',
						},
						number:{
							'0':'kzsg_马弓手6',
							'1':'kzsg_马弓手6',
							'2':'kzsg_马弓手6',
							'3':'kzsg_马弓手6',
							'4':'kzsg_游侠7',
							'5':'kzsg_游侠7',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_黄盖7',
						},
						number:{
							'0':'kzsg_阔剑4',
							'1':'kzsg_朱雀骑兵7',
							'2':'kzsg_朱雀骑兵7',
							'3':'kzsg_朱雀骑兵7',
							'4':'kzsg_宝石海星7',
							'5':'kzsg_宝石海星7',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_张昭6',
						},
						number:{
							'0':'kzsg_轰天雷4',
							'1':'kzsg_青囊书4',
							'2':'kzsg_暴风鹰5',
							'3':'kzsg_暴风鹰5',
							'4':'kzsg_雪翼虎7',
							'5':'kzsg_雪翼虎7',
						},
					},
					'4':{
						leader:{
							'0':'kzsg_夏侯惇7',
						},
						number:{
							'0':'kzsg_轰天雷4',
							'1':'kzsg_青囊书4',
							'2':'kzsg_轻骨弓7',
							'3':'kzsg_轻骨弓7',
							'4':'kzsg_轻骨弓7',
							'5':'kzsg_轻骨弓7',
						},
					},
				},
			},
			'11':{
				name:'空陆骑兵',
				limit:3,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_姜维7',
						},
						number:{
							'0':'kzsg_暴风鹰5',
							'1':'kzsg_暴风鹰5',
							'2':'kzsg_暴风鹰5',
							'3':'kzsg_暴风鹰5',
							'4':'kzsg_雪翼虎7',
							'5':'kzsg_雪翼虎7',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_赵云7',
						},
						number:{
							'0':'kzsg_凤凰号角4',
							'1':'kzsg_藏獒5',
							'2':'kzsg_藏獒5',
							'3':'kzsg_藏獒5',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_张昭6',
						},
						number:{
							'0':'kzsg_轰天雷4',
							'1':'kzsg_轰天雷4',
							'2':'kzsg_凤凰号角4',
							'3':'kzsg_阔剑4',
						},
					},
					'4':{
						leader:{
							'0':'kzsg_黄盖7',
						},
						number:{
							'0':'kzsg_游侠7',
							'1':'kzsg_游侠7',
							'2':'kzsg_宝石海星7',
							'3':'kzsg_宝石海星7',
							'4':'kzsg_朱雀骑兵7',
							'5':'kzsg_朱雀骑兵7',
						},
					},
				},
			},
			'12':{
				name:'伪军令',
				limit:4,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_马超7',
						},
						number:{
							'0':'kzsg_兵车6',
							'1':'kzsg_阔剑4',
							'2':'kzsg_暴风鹰5',
							'3':'kzsg_暴风鹰5',
							'4':'kzsg_雪翼虎7',
							'5':'kzsg_雪翼虎7',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_阔剑4',
							'1':'kzsg_隐刀卫6',
							'2':'kzsg_隐刀卫6',
							'3':'kzsg_游侠7',
							'4':'kzsg_马弓手6',
							'5':'kzsg_霸王骑6',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_满宠7',
						},
						number:{
							'0':'kzsg_阔剑4',
							'1':'kzsg_霸王骑6',
							'2':'kzsg_骨龙7',
							'3':'kzsg_骨龙7',
							'4':'kzsg_骨龙7',
							'5':'kzsg_轻骨弓7',
						},
					},
					'4':{
						leader:{
							'0':'kzsg_满宠7',
						},
						number:{
							'0':'kzsg_青囊书4',
							'1':'kzsg_轻骨弓7',
							'2':'kzsg_轻骨弓7',
							'3':'kzsg_骨矛手6',
							'4':'kzsg_骨矛手6',
							'5':'kzsg_骨矛手6',
						},
					},
				},
			},
			'13':{
				name:'弃守五丈原',
				limit:2,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_郭嘉7',
						},
						number:{
							'0':'kzsg_轰天雷4',
							'1':'kzsg_凤凰号角4',
							'2':'kzsg_轻骨弓7',
							'3':'kzsg_轻骨弓7',
							'4':'kzsg_轻骨弓7',
							'5':'kzsg_轻骨弓7',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_程昱7',
						},
						number:{
							'0':'kzsg_轰天雷4',
							'1':'kzsg_骨龙4',
							'2':'kzsg_骨龙4',
							'3':'kzsg_骨龙4',
							'4':'kzsg_骨灵骑士7',
							'5':'kzsg_骨灵骑士7',
						},
					},
				},
			},
			'14':{
				name:'神将断路',
				limit:3,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin1':10,
				},
				army:{
					'1':{
						leader:{},
						number:{
							'0':'kzsg_轰天雷4',
							'1':'kzsg_阔剑4',
							'2':'kzsg_冲阵车6',
							'3':'kzsg_冲阵车6',
							'4':'kzsg_雪翼虎7',
							'5':'kzsg_雪翼虎7',
							'6':'kzsg_雪翼虎7',
						},
					},
					'2':{
						leader:{},
						number:{
							'0':'kzsg_凤凰号角4',
							'1':'kzsg_雪翼虎7',
							'2':'kzsg_拒马阵地1',
							'3':'kzsg_藏獒5',
							'4':'kzsg_藏獒5',
							'5':'kzsg_藏獒5',
							'6':'kzsg_藏獒5',
						},
					},
					'3':{
						leader:{},
						number:{
							'0':'kzsg_凤凰号角4',
							'1':'kzsg_突袭铁骑6',
							'2':'kzsg_突袭铁骑6',
							'3':'kzsg_舞娘6',
							'4':'kzsg_兵车6',
							'5':'kzsg_暴风鹰5',
							'6':'kzsg_暴风鹰5',
						},
					},
					'4':{
						leader:{},
						number:{
							'0':'kzsg_暴风鹰5',
							'1':'kzsg_暴风鹰5',
							'2':'kzsg_守望塔5',
						},
					},
				},
			},
			'15':{
				name:'无限重生',
				limit:2,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':500,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_郭嘉7',
						},
						number:{
							'0':'kzsg_轰天雷4',
							'1':'kzsg_凤凰号角4',
							'2':'kzsg_轻骨弓7',
							'3':'kzsg_轻骨弓7',
							'4':'kzsg_轻骨弓7',
							'5':'kzsg_轻骨弓7',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_郭嘉7',
						},
						number:{
							'0':'kzsg_轰天雷4',
							'1':'kzsg_凤凰号角4',
							'2':'kzsg_骨龙4',
							'3':'kzsg_骨龙4',
							'4':'kzsg_骨龙4',
							'5':'kzsg_骨龙4',
						},
					},
					'3':{
						leader:{},
						number:{
							'0':'kzsg_骨灵骑士7',
							'1':'kzsg_骨灵骑士7',
						},
					},
				},
			},
			'16':{
				name:'冲阵之兵',
				limit:3,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':500,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_马超7',
						},
						number:{
							'0':'kzsg_凤凰号角4',
							'1':'kzsg_青囊书4',
							'2':'kzsg_冲阵车6',
							'3':'kzsg_冲阵车6',
							'4':'kzsg_突袭铁骑6',
							'5':'kzsg_突袭铁骑6',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_马超7',
						},
						number:{
							'0':'kzsg_突袭铁骑6',
							'1':'kzsg_突袭铁骑6',
							'2':'kzsg_重甲精骑6',
							'3':'kzsg_重甲精骑6',
							'4':'kzsg_突袭铁骑6',
							'5':'kzsg_突袭铁骑6',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_孙策7',
						},
						number:{
							'0':'kzsg_突袭铁骑6',
							'1':'kzsg_突袭铁骑6',
							'2':'kzsg_水骑兵6',
							'3':'kzsg_水骑兵6',
							'4':'kzsg_霸王骑6',
							'5':'kzsg_霸王骑6',
						},
					},
				},
			},
			'17':{
				name:'退守天水',
				limit:4,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':500,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_郭嘉7',
						},
						number:{
							'0':'kzsg_毁灭烈焰7',
							'1':'kzsg_轰天雷4',
							'2':'kzsg_骨龙7',
							'3':'kzsg_骨龙7',
							'4':'kzsg_轻骨弓7',
							'5':'kzsg_轻骨弓7',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_郭嘉7',
						},
						number:{
							'0':'kzsg_毁灭烈焰7',
							'1':'kzsg_轰天雷4',
							'2':'kzsg_骨灵骑士7',
							'3':'kzsg_骨灵骑士7',
							'4':'kzsg_骨灵骑士7',
							'5':'kzsg_骨灵骑士7',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_马超7',
						},
						number:{
							'0':'kzsg_凤凰号角4',
							'1':'kzsg_青囊书4',
							'2':'kzsg_突袭铁骑6',
							'3':'kzsg_突袭铁骑6',
							'4':'kzsg_突袭铁骑6',
							'5':'kzsg_突袭铁骑6',
						},
					},
					'4':{
						leader:{
							'0':'kzsg_马超7',
						},
						number:{
							'0':'kzsg_凤凰号角4',
							'1':'kzsg_青囊书4',
							'2':'kzsg_冲阵车6',
							'3':'kzsg_冲阵车6',
							'4':'kzsg_重甲精骑6',
							'5':'kzsg_重甲精骑6',
						},
					},
				},
			},
			'18':{
				name:'奇门遁甲',
				limit:2,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':500,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_诸葛亮7',
						},
						number:{
							'0':'kzsg_青囊书4',
							'1':'kzsg_阔剑4',
							'2':'kzsg_暴风鹰5',
							'3':'kzsg_暴风鹰5',
							'4':'kzsg_突袭铁骑6',
							'5':'kzsg_突袭铁骑6',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_郭嘉7',
						},
						number:{
							'0':'kzsg_阔剑4',
							'1':'kzsg_凤凰号角4',
							'2':'kzsg_冰纹豹7',
							'3':'kzsg_冰纹豹7',
							'4':'kzsg_雪翼虎7',
							'5':'kzsg_雪翼虎7',
						},
					},
				},
			},
			'19':{
				name:'谋士程昱',
				limit:4,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':500,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_曹操7',
						},
						number:{
							'0':'kzsg_轰天雷4',
							'1':'kzsg_圣光5',
							'2':'kzsg_青州重骑6',
							'3':'kzsg_青州重骑6',
							'4':'kzsg_青州暗骑5',
							'5':'kzsg_青州暗骑5',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_荀彧7',
						},
						number:{
							'0':'kzsg_轰天雷4',
							'1':'kzsg_青囊书4',
							'2':'kzsg_骨灵骑士7',
							'3':'kzsg_骨灵骑士7',
							'4':'kzsg_骨龙7',
							'5':'kzsg_骨龙7',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_程昱7',
						},
						number:{
							'0':'kzsg_凤凰号角4',
							'1':'kzsg_青囊书4',
							'2':'kzsg_骨龙7',
							'3':'kzsg_轻骨弓7',
							'4':'kzsg_轻骨弓7',
							'5':'kzsg_轻骨弓7',
						},
					},
					'4':{
						leader:{
							'0':'kzsg_郭嘉7',
						},
						number:{
							'0':'kzsg_凤凰号角4',
							'1':'kzsg_青囊书4',
							'2':'kzsg_轻骨弓7',
							'3':'kzsg_刺盾兵6',
							'4':'kzsg_刺盾兵6',
							'5':'kzsg_亡者之心7',
						},
					},
					'5':{
						leader:{},
						number:{
							'0':'kzsg_亡者之心7',
							'1':'kzsg_骷髅兵4',
							'2':'kzsg_骷髅兵4',
						},
					},
				},
			},
			'20':{
				name:'鬼龙王之怒',
				limit:3,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':500,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_骨龙王7',
						},
						number:{
							'0':'kzsg_阔剑4',
							'1':'kzsg_青囊书4',
							'2':'kzsg_天鉴者6',
							'3':'kzsg_天鉴者6',
							'4':'kzsg_骨灵师7',
							'5':'kzsg_毒液铁壁6',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_骨龙王7',
						},
						number:{
							'0':'kzsg_阔剑4',
							'1':'kzsg_青囊书4',
							'2':'kzsg_骨龙7',
							'3':'kzsg_骨龙7',
							'4':'kzsg_骨龙骑士7',
							'5':'kzsg_骨龙骑士7',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_鬼玄武7',
						},
						number:{
							'0':'kzsg_伏兵萦5',
							'1':'kzsg_圣光5',
							'2':'kzsg_轻骨弓7',
							'3':'kzsg_轻骨弓7',
							'4':'kzsg_轻骨弓7',
							'5':'kzsg_轻骨弓7',
						},
					},
				},
			},
			'21':{
				name:'法师集聚',
				limit:3,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':500,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_蒋琬6',
						},
						number:{
							'0':'kzsg_舞娘6',
							'1':'kzsg_舞娘6',
							'2':'kzsg_舞娘6',
							'3':'kzsg_舞娘6',
							'4':'kzsg_皇家术师5',
							'5':'kzsg_皇家术师5',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_凤凰号角4',
							'1':'kzsg_轰天雷4',
							'2':'kzsg_冰剑卫6',
							'3':'kzsg_冰剑卫6',
							'4':'kzsg_预言师5',
							'5':'kzsg_预言师5',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_郭嘉7',
						},
						number:{
							'0':'kzsg_咒术士5',
							'1':'kzsg_咒术士5',
							'2':'kzsg_血魔6',
							'3':'kzsg_血魔6',
							'4':'kzsg_骨法6',
							'5':'kzsg_毒液铁壁6',
						},
					},
				},
			},
			'22':{
				name:'刘备分身',
				limit:3,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':500,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_刘备7',
						},
						number:{
							'0':'kzsg_阔剑4',
							'1':'kzsg_青囊书4',
							'2':'kzsg_医侠6',
							'3':'kzsg_医侠6',
							'4':'kzsg_雪狮6',
							'5':'kzsg_雪狮6',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_刘备7',
						},
						number:{
							'0':'kzsg_阔剑4',
							'1':'kzsg_伏兵萦5',
							'2':'kzsg_暴风鹰5',
							'3':'kzsg_暴风鹰5',
							'4':'kzsg_暴风鹰5',
							'5':'kzsg_暴风鹰5',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_刘备7',
						},
						number:{
							'0':'kzsg_雷电符4',
							'1':'kzsg_冰纹豹7',
							'2':'kzsg_冰纹豹7',
							'3':'kzsg_银枪卫6',
							'4':'kzsg_银枪卫6',
							'5':'kzsg_银枪卫6',
						},
					},
				},
			},
			'23':{
				name:'曹操之逆鳞',
				limit:4,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':500,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_夏侯惇7',
						},
						number:{
							'0':'kzsg_阔剑4',
							'1':'kzsg_救治药箱3',
							'2':'kzsg_骨龙骑士7',
							'3':'kzsg_骨龙骑士7',
							'4':'kzsg_骨龙骑士7',
							'5':'kzsg_骨龙7',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_羊祜6',
						},
						number:{
							'0':'kzsg_火焰诀5',
							'1':'kzsg_火焰诀5',
							'2':'kzsg_骨龙7',
							'3':'kzsg_骨龙7',
							'4':'kzsg_骨灵骑士7',
							'5':'kzsg_骨灵骑士7',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_曹操4',
						},
						number:{
							'0':'kzsg_轰天雷4',
							'1':'kzsg_烈雀骑7',
							'2':'kzsg_烈雀骑7',
							'3':'kzsg_轻骨弓7',
							'4':'kzsg_轻骨弓7',
							'5':'kzsg_轻骨弓7',
						},
					},
					'4':{
						leader:{
							'0':'kzsg_郭嘉7',
						},
						number:{
							'0':'kzsg_凤凰号角4',
							'1':'kzsg_轻骨弓7',
							'2':'kzsg_血魔6',
							'3':'kzsg_血魔6',
							'4':'kzsg_血魔6',
							'5':'kzsg_血魔6',
						},
					},
				},
			},
			'24':{
				name:'江东之城',
				limit:4,
				reward:{
					'进阶池':3,
					'kzsg_coin1':50,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':500,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_孙策7',
						},
						number:{
							'0':'kzsg_阔剑4',
							'1':'kzsg_冰剑卫6',
							'2':'kzsg_冰剑卫6',
							'3':'kzsg_冰剑卫6',
							'4':'kzsg_马弓手6',
							'5':'kzsg_马弓手6',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_马弓手6',
							'1':'kzsg_游侠7',
							'2':'kzsg_游侠7',
							'3':'kzsg_游侠7',
							'4':'kzsg_霸王骑6',
							'5':'kzsg_霸王骑6',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_程普6',
						},
						number:{
							'0':'kzsg_皇家水卫6',
							'1':'kzsg_皇家水卫6',
							'2':'kzsg_皇家水卫6',
							'3':'kzsg_隐刀卫6',
							'4':'kzsg_隐刀卫6',
							'5':'kzsg_宝石海星7',
						},
					},
					'4':{
						leader:{
							'0':'kzsg_周泰6',
						},
						number:{
							'0':'kzsg_宝石海星7',
							'1':'kzsg_咒术士5',
							'2':'kzsg_咒术士5',
							'3':'kzsg_咒术士5',
							'4':'kzsg_咒术士5',
							'5':'kzsg_咒术士5',
						},
					},
				},
			},
			'25':{
				name:'三国联军',
				limit:5,
				reward:{
					'进阶池':5,
					'kzsg_coin1':100,
				},
				daily_reward:{
					'进阶池':2,
					'kzsg_coin':1000,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_刘备7',
						},
						number:{
							'0':'kzsg_轰天雷4',
							'1':'kzsg_救治药箱3',
							'2':'kzsg_雪翼虎7',
							'3':'kzsg_舞娘6',
							'4':'kzsg_暴风鹰5',
							'5':'kzsg_医侠6',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_凤凰号角4',
							'1':'kzsg_隐刀卫6',
							'2':'kzsg_游侠7',
							'3':'kzsg_马弓手6',
							'4':'kzsg_霸王骑6',
							'5':'kzsg_霸王骑6',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_程昱7',
						},
						number:{
							'0':'kzsg_骨灵骑士7',
							'1':'kzsg_骨灵骑士7',
							'2':'kzsg_轻骨弓7',
							'3':'kzsg_轻骨弓7',
							'4':'kzsg_轻骨弓7',
							'5':'kzsg_轻骨弓7',
						},
					},
					'4':{
						leader:{
							'0':'kzsg_郭嘉7',
						},
						number:{
							'0':'kzsg_阔剑4',
							'1':'kzsg_轻骨弓7',
							'2':'kzsg_骨龙7',
							'3':'kzsg_骨龙7',
							'4':'kzsg_骨龙7',
							'5':'kzsg_骨龙7',
						},
					},
					'5':{
						leader:{
							'0':'kzsg_曹操7',
						},
						number:{
							'0':'kzsg_青囊书4',
							'1':'kzsg_青州暗骑5',
							'2':'kzsg_青州暗骑5',
							'3':'kzsg_青州重骑6',
							'4':'kzsg_青州重骑6',
							'5':'kzsg_咒术士5',
						},
					},
				},
			},
		},
		'吴国崛起':{
			'1':{
				name:'吴国弓手',
				limit:2,
				reward:{
					'进阶池':3,
					'kzsg_coin':700,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':300,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_黄盖7',
						},
						number:{
							'0':'kzsg_掷斧手7',
							'1':'kzsg_掷斧手7',
							'2':'kzsg_掷斧手7',
							'3':'kzsg_掷斧手7',
							'4':'kzsg_掷斧手7',
							'5':'kzsg_掷斧手7',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_程普6',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_阔剑7',
							'2':'kzsg_马弓手6',
							'3':'kzsg_马弓手6',
							'4':'kzsg_海刺龙7',
							'5':'kzsg_水曼蛇6',
						},
					},
				},
			},
			'2':{
				name:'马弓之威',
				limit:2,
				reward:{
					'进阶池':3,
					'kzsg_coin':700,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':300,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_黄盖7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_阔剑7',
							'2':'kzsg_马弓手6',
							'3':'kzsg_马弓手6',
							'4':'kzsg_马弓手6',
							'5':'kzsg_马弓手6',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_黄盖7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_阔剑7',
							'2':'kzsg_马弓手6',
							'3':'kzsg_马弓手6',
							'4':'kzsg_马弓手6',
							'5':'kzsg_马弓手6',
						},
					},
				},
			},
			'3':{
				name:'火焰流星',
				limit:3,
				reward:{
					'进阶池':3,
					'kzsg_coin':700,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':300,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_阔剑7',
							'2':'kzsg_游侠7',
							'3':'kzsg_游侠7',
							'4':'kzsg_游侠7',
							'5':'kzsg_游侠7',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_黄盖7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_阔剑7',
							'2':'kzsg_马弓手6',
							'3':'kzsg_马弓手6',
							'4':'kzsg_马弓手6',
							'5':'kzsg_马弓手6',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_阔剑7',
							'2':'kzsg_掷斧手7',
							'3':'kzsg_掷斧手7',
							'4':'kzsg_火雷5',
							'5':'kzsg_火雷5',
						},
					},
					'4':{
						leader:{},
						number:{
							'0':'kzsg_冰剑卫6',
							'1':'kzsg_朱雀骑兵7',
							'2':'kzsg_朱雀骑兵7',
							'3':'kzsg_水曼蛇6',
						},
					},
				},
			},
			'4':{
				name:'连锁之弓',
				limit:3,
				reward:{
					'进阶池':3,
					'kzsg_coin':700,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':300,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_黄盖7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_阔剑7',
							'2':'kzsg_掷斧手7',
							'3':'kzsg_掷斧手7',
							'4':'kzsg_掷斧手7',
							'5':'kzsg_掷斧手7',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_周瑜7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_轰天雷7',
							'2':'kzsg_游侠7',
							'3':'kzsg_朱雀骑兵7',
							'4':'kzsg_朱雀骑兵7',
							'5':'kzsg_天雷卫5',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_黄盖7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_阔剑7',
							'2':'kzsg_掷斧手7',
							'3':'kzsg_掷斧手7',
							'4':'kzsg_掷斧手7',
							'5':'kzsg_掷斧手7',
						},
					},
				},
			},
			'5':{
				name:'火烧新野',
				limit:3,
				reward:{
					'进阶池':3,
					'kzsg_coin':700,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':300,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_火雷5',
							'1':'kzsg_火雷5',
							'2':'kzsg_掷斧手7',
							'3':'kzsg_掷斧手7',
							'4':'kzsg_掷斧手7',
							'5':'kzsg_掷斧手7',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_游侠7',
							'1':'kzsg_游侠7',
							'2':'kzsg_游侠7',
							'3':'kzsg_游侠7',
							'4':'kzsg_游侠7',
							'5':'kzsg_游侠7',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_朱雀骑兵7',
							'1':'kzsg_朱雀骑兵7',
							'2':'kzsg_朱雀骑兵7',
							'3':'kzsg_火雷5',
							'4':'kzsg_水曼蛇6',
							'5':'kzsg_冰剑卫6',
						},
					},
				},
			},
			'6':{
				name:'强力进攻',
				limit:2,
				reward:{
					'进阶池':3,
					'kzsg_coin':700,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':300,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_周瑜7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_轰天雷7',
							'2':'kzsg_游侠7',
							'3':'kzsg_朱雀骑兵7',
							'4':'kzsg_朱雀骑兵7',
							'5':'kzsg_天雷卫5',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_黄盖7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_阔剑7',
							'2':'kzsg_马弓手6',
							'3':'kzsg_马弓手6',
							'4':'kzsg_马弓手6',
							'5':'kzsg_马弓手6',
						},
					},
				},
			},
			'7':{
				name:'无奈突围',
				limit:4,
				reward:{
					'进阶池':3,
					'kzsg_coin':700,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':300,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_黄盖7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_阔剑7',
							'2':'kzsg_游侠7',
							'3':'kzsg_游侠7',
							'4':'kzsg_马弓手6',
							'5':'kzsg_马弓手6',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_黄盖7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_阔剑7',
							'2':'kzsg_马弓手6',
							'3':'kzsg_马弓手6',
							'4':'kzsg_马弓手6',
							'5':'kzsg_马弓手6',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_火雷5',
							'1':'kzsg_冰剑卫6',
							'2':'kzsg_朱雀骑兵7',
							'3':'kzsg_水曼蛇6',
							'4':'kzsg_火雷5',
							'5':'kzsg_朱雀骑兵7',
						},
					},
					'4':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_火雷5',
							'1':'kzsg_冰剑卫6',
							'2':'kzsg_朱雀骑兵7',
							'3':'kzsg_水曼蛇6',
							'4':'kzsg_火雷5',
							'5':'kzsg_朱雀骑兵7',
						},
					},
				},
			},
			'8':{
				name:'再遇法师',
				limit:3,
				reward:{
					'进阶池':3,
					'kzsg_coin':700,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':300,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_游侠7',
							'1':'kzsg_冰剑卫6',
							'2':'kzsg_火雷5',
							'3':'kzsg_朱雀骑兵7',
							'4':'kzsg_朱雀骑兵7',
							'5':'kzsg_水曼蛇6',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_游侠7',
							'1':'kzsg_冰剑卫6',
							'2':'kzsg_火雷5',
							'3':'kzsg_朱雀骑兵7',
							'4':'kzsg_朱雀骑兵7',
							'5':'kzsg_水曼蛇6',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_游侠7',
							'1':'kzsg_冰剑卫6',
							'2':'kzsg_火雷5',
							'3':'kzsg_朱雀骑兵7',
							'4':'kzsg_朱雀骑兵7',
							'5':'kzsg_水曼蛇6',
						},
					},
				},
			},
			'9':{
				name:'游侠再显',
				limit:3,
				reward:{
					'进阶池':3,
					'kzsg_coin':700,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':300,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_掷斧手7',
							'1':'kzsg_掷斧手7',
							'2':'kzsg_掷斧手7',
							'3':'kzsg_掷斧手7',
							'4':'kzsg_朱雀骑兵7',
							'5':'kzsg_朱雀骑兵7',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_游侠7',
							'1':'kzsg_游侠7',
							'2':'kzsg_游侠7',
							'3':'kzsg_火雷5',
							'4':'kzsg_火雷5',
							'5':'kzsg_火雷5',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_黄盖7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_阔剑7',
							'2':'kzsg_朱雀骑兵7',
							'3':'kzsg_马弓手6',
							'4':'kzsg_马弓手6',
							'5':'kzsg_马弓手6',
						},
					},
				},
			},
			'10':{
				name:'弓手混合',
				limit:4,
				reward:{
					'进阶池':3,
					'kzsg_coin':700,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':300,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_朱雀骑兵7',
							'1':'kzsg_朱雀骑兵7',
							'2':'kzsg_海刺龙7',
							'3':'kzsg_海刺龙7',
							'4':'kzsg_火雷5',
							'5':'kzsg_火雷5',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_程普6',
						},
						number:{
							'0':'kzsg_水曼蛇6',
							'1':'kzsg_水曼蛇6',
							'2':'kzsg_马弓手6',
							'3':'kzsg_马弓手6',
							'4':'kzsg_马弓手6',
							'5':'kzsg_马弓手6',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_黄盖7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_阔剑7',
							'2':'kzsg_掷斧手7',
							'3':'kzsg_掷斧手7',
							'4':'kzsg_掷斧手7',
							'5':'kzsg_掷斧手7',
						},
					},
					'4':{
						leader:{
							'0':'kzsg_黄盖7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_阔剑7',
							'2':'kzsg_掷斧手7',
							'3':'kzsg_掷斧手7',
							'4':'kzsg_游侠7',
							'5':'kzsg_游侠7',
						},
					},
				},
			},
			'11':{
				name:'勇者侍卫',
				limit:3,
				reward:{
					'进阶池':3,
					'kzsg_coin':700,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':300,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_黄盖7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_阔剑7',
							'2':'kzsg_马弓手6',
							'3':'kzsg_马弓手6',
							'4':'kzsg_马弓手6',
							'5':'kzsg_马弓手6',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_游侠7',
							'1':'kzsg_游侠7',
							'2':'kzsg_冰剑卫6',
							'3':'kzsg_冰剑卫6',
							'4':'kzsg_火雷5',
							'5':'kzsg_火雷5',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_水曼蛇6',
							'1':'kzsg_水曼蛇6',
							'2':'kzsg_朱雀骑兵7',
							'3':'kzsg_朱雀骑兵7',
							'4':'kzsg_朱雀骑兵7',
							'5':'kzsg_火雷5',
						},
					},
				},
			},
			'12':{
				name:'神秘异兽',
				limit:3,
				reward:{
					'进阶池':3,
					'kzsg_coin':700,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':300,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_水曼蛇6',
							'1':'kzsg_水曼蛇6',
							'2':'kzsg_冰剑卫6',
							'3':'kzsg_冰剑卫6',
							'4':'kzsg_冰剑卫6',
							'5':'kzsg_冰剑卫6',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_朱雀骑兵7',
							'1':'kzsg_朱雀骑兵7',
							'2':'kzsg_朱雀骑兵7',
							'3':'kzsg_朱雀骑兵7',
							'4':'kzsg_游侠7',
							'5':'kzsg_游侠7',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_火雷5',
							'1':'kzsg_火雷5',
							'2':'kzsg_火雷5',
							'3':'kzsg_火雷5',
							'4':'kzsg_水曼蛇6',
							'5':'kzsg_水曼蛇6',
						},
					},
				},
			},
			'13':{
				name:'马弓连营',
				limit:4,
				reward:{
					'进阶池':3,
					'kzsg_coin':700,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':300,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_黄盖7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_阔剑7',
							'2':'kzsg_马弓手6',
							'3':'kzsg_马弓手6',
							'4':'kzsg_马弓手6',
							'5':'kzsg_马弓手6',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_黄盖7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_阔剑7',
							'2':'kzsg_马弓手6',
							'3':'kzsg_马弓手6',
							'4':'kzsg_马弓手6',
							'5':'kzsg_马弓手6',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_黄盖7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_阔剑7',
							'2':'kzsg_马弓手6',
							'3':'kzsg_马弓手6',
							'4':'kzsg_马弓手6',
							'5':'kzsg_马弓手6',
						},
					},
					'4':{
						leader:{
							'0':'kzsg_黄盖7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_阔剑7',
							'2':'kzsg_马弓手6',
							'3':'kzsg_马弓手6',
							'4':'kzsg_马弓手6',
							'5':'kzsg_马弓手6',
						},
					},
				},
			},
			'14':{
				name:'游侠方阵',
				limit:4,
				reward:{
					'进阶池':3,
					'kzsg_coin':700,
				},
				daily_reward:{
					'进阶池':1,
					'kzsg_coin':300,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_掷斧手7',
							'1':'kzsg_掷斧手7',
							'2':'kzsg_游侠7',
							'3':'kzsg_朱雀骑兵7',
							'4':'kzsg_朱雀骑兵7',
							'5':'kzsg_火雷5',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_掷斧手7',
							'1':'kzsg_掷斧手7',
							'2':'kzsg_游侠7',
							'3':'kzsg_朱雀骑兵7',
							'4':'kzsg_朱雀骑兵7',
							'5':'kzsg_火雷5',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_掷斧手7',
							'1':'kzsg_游侠7',
							'2':'kzsg_游侠7',
							'3':'kzsg_朱雀骑兵7',
							'4':'kzsg_火雷5',
							'5':'kzsg_火雷5',
						},
					},
					'4':{
						leader:{
							'0':'kzsg_陆逊7',
						},
						number:{
							'0':'kzsg_掷斧手7',
							'1':'kzsg_游侠7',
							'2':'kzsg_游侠7',
							'3':'kzsg_朱雀骑兵7',
							'4':'kzsg_火雷5',
							'5':'kzsg_火雷5',
						},
					},
				},
			},
			'15':{
				name:'绝命的黑夜',
				limit:4,
				reward:{
					'进阶池':5,
					'kzsg_coin':2000,
				},
				daily_reward:{
					'进阶池':2,
					'kzsg_coin':1000,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_黄盖7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_阔剑7',
							'2':'kzsg_掷斧手7',
							'3':'kzsg_掷斧手7',
							'4':'kzsg_掷斧手7',
							'5':'kzsg_掷斧手7',
						},
					},
					'2':{
						leader:{
							'0':'kzsg_黄盖7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_阔剑7',
							'2':'kzsg_掷斧手7',
							'3':'kzsg_掷斧手7',
							'4':'kzsg_掷斧手7',
							'5':'kzsg_掷斧手7',
						},
					},
					'3':{
						leader:{
							'0':'kzsg_黄盖7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_阔剑7',
							'2':'kzsg_掷斧手7',
							'3':'kzsg_掷斧手7',
							'4':'kzsg_掷斧手7',
							'5':'kzsg_掷斧手7',
						},
					},
					'4':{
						leader:{
							'0':'kzsg_黄盖7',
						},
						number:{
							'0':'kzsg_青囊书7',
							'1':'kzsg_阔剑7',
							'2':'kzsg_掷斧手7',
							'3':'kzsg_掷斧手7',
							'4':'kzsg_掷斧手7',
							'5':'kzsg_掷斧手7',
						},
					},
				},
			},
		},
		//'番外篇':{},
		//'噬天':{},
	};
	for(var i in battle){
		lib.kzol_kzsg_battle[i]=battle[i];
		if(lib.config.kzol_kzsg.battle[i]==undefined){
			lib.config.kzol_kzsg.battle[i]={};
			bool=true;
		};
		if(lib.config.kzol_kzsg.daily_reward[i]==undefined){
			lib.config.kzol_kzsg.daily_reward[i]={};
			bool=true;
		};
		for(var j in battle[i]){
			if(lib.config.kzol_kzsg.battle[i][j]==undefined){
				lib.config.kzol_kzsg.battle[i][j]=false;
				bool=true;
			};
		};
	};
	if(lib.kzol_kzsg_kb==undefined) lib.kzol_kzsg_kb={};
	var kb={
		'基础包（蜀）':{
			info:'此卡包可以开出蜀国灰卡、白卡、绿卡、蓝卡、紫卡，每包两张卡牌',
			value:500,
			num:2,
			item:function(){
				var list=[];
				for(var i in lib.kzol_kzsg_card){
					var card=lib.kzol_kzsg_card[i];
					if(card.inKb==false) continue;
					if(card.group!='shu') continue;
					if(card.quailty==1){
						list.push(card);
						if(Math.random()<0.5) list.push(card);
					};
					if(card.quailty==2){
						list.push(card);
						list.push(card);
					};
					if(card.quailty==3){
						if(Math.random()<0.5) list.push(card);
					};
					if(card.quailty==4){
						if(Math.random()<0.25) list.push(card);
					};
					if(card.quailty==5){
						if(Math.random()<0.1) list.push(card);
					};
				};
				return list;
			},
		},
		'进阶包（蜀）':{
			info:'此卡包可以开出蜀国绿卡、蓝卡、紫卡、橙卡、红卡，每包两张卡牌',
			value:2000,
			num:2,
			item:function(){
				var list=[];
				for(var i in lib.kzol_kzsg_card){
					var card=lib.kzol_kzsg_card[i];
					if(card.inKb==false) continue;
					if(card.group!='shu') continue;
					if(card.quailty==3){
						list.push(card);
						if(Math.random()<0.5) list.push(card);
					};
					if(card.quailty==4){
						list.push(card);
						list.push(card);
					};
					if(card.quailty==5){
						list.push(card);
					};
					if(card.quailty==6){
						if(card.name.indexOf('kzsg_废城')!=-1){
							if(Math.random()<0.1) list.push(card);
						}else{
							if(Math.random()<0.3) list.push(card);
						};
					};
					if(card.quailty==7){
						if(card.name.indexOf('kzsg_废城')!=-1){
							if(Math.random()<0.1) list.push(card);
						}else{
							if(Math.random()<0.2) list.push(card);
						};
					};
				};
				return list;
			},
		},
		'基础包（吴）':{
			info:'此卡包可以开出吴国灰卡、白卡、绿卡、蓝卡、紫卡，每包两张卡牌',
			value:500,
			num:2,
			item:function(){
				var list=[];
				for(var i in lib.kzol_kzsg_card){
					var card=lib.kzol_kzsg_card[i];
					if(card.inKb==false) continue;
					if(card.group!='wu') continue;
					if(card.quailty==1){
						list.push(card);
						if(Math.random()<0.5) list.push(card);
					};
					if(card.quailty==2){
						list.push(card);
						list.push(card);
					};
					if(card.quailty==3){
						if(Math.random()<0.5) list.push(card);
					};
					if(card.quailty==4){
						if(Math.random()<0.25) list.push(card);
					};
					if(card.quailty==5){
						if(Math.random()<0.1) list.push(card);
					};
				};
				return list;
			},
		},
		'进阶包（吴）':{
			info:'此卡包可以开出吴国绿卡、蓝卡、紫卡、橙卡、红卡，每包两张卡牌',
			value:2000,
			num:2,
			item:function(){
				var list=[];
				for(var i in lib.kzol_kzsg_card){
					var card=lib.kzol_kzsg_card[i];
					if(card.inKb==false) continue;
					if(card.group!='wu') continue;
					if(card.quailty==3){
						list.push(card);
						if(Math.random()<0.5) list.push(card);
					};
					if(card.quailty==4){
						list.push(card);
						list.push(card);
					};
					if(card.quailty==5){
						list.push(card);
					};
					if(card.quailty==6){
						if(card.name.indexOf('kzsg_废城')!=-1){
							if(Math.random()<0.1) list.push(card);
						}else{
							if(Math.random()<0.3) list.push(card);
						};
					};
					if(card.quailty==7){
						if(card.name.indexOf('kzsg_废城')!=-1){
							if(Math.random()<0.1) list.push(card);
						}else{
							if(Math.random()<0.2) list.push(card);
						};
					};
				};
				return list;
			},
		},
		'基础包（魏）':{
			info:'此卡包可以开出魏国灰卡、白卡、绿卡、蓝卡、紫卡，每包两张卡牌',
			value:500,
			num:2,
			item:function(){
				var list=[];
				for(var i in lib.kzol_kzsg_card){
					var card=lib.kzol_kzsg_card[i];
					if(card.inKb==false) continue;
					if(card.group!='wei') continue;
					if(card.quailty==1){
						list.push(card);
						if(Math.random()<0.5) list.push(card);
					};
					if(card.quailty==2){
						list.push(card);
						list.push(card);
					};
					if(card.quailty==3){
						if(Math.random()<0.5) list.push(card);
					};
					if(card.quailty==4){
						if(Math.random()<0.25) list.push(card);
					};
					if(card.quailty==5){
						if(Math.random()<0.1) list.push(card);
					};
				};
				return list;
			},
		},
		'进阶包（魏）':{
			info:'此卡包可以开出魏国绿卡、蓝卡、紫卡、橙卡、红卡，每包两张卡牌',
			value:2000,
			num:2,
			item:function(){
				var list=[];
				for(var i in lib.kzol_kzsg_card){
					var card=lib.kzol_kzsg_card[i];
					if(card.inKb==false) continue;
					if(card.group!='wei') continue;
					if(card.quailty==3){
						list.push(card);
						if(Math.random()<0.5) list.push(card);
					};
					if(card.quailty==4){
						list.push(card);
						list.push(card);
					};
					if(card.quailty==5){
						list.push(card);
					};
					if(card.quailty==6){
						if(card.name.indexOf('kzsg_废城')!=-1){
							if(Math.random()<0.1) list.push(card);
						}else{
							if(Math.random()<0.3) list.push(card);
						};
					};
					if(card.quailty==7){
						if(card.name.indexOf('kzsg_废城')!=-1){
							if(Math.random()<0.1) list.push(card);
						}else{
							if(Math.random()<0.2) list.push(card);
						};
					};
				};
				return list;
			},
		},
		'基础包（群）':{
			info:'此卡包可以开出群雄灰卡、白卡、绿卡、蓝卡、紫卡，每包两张卡牌',
			value:500,
			num:2,
			item:function(){
				var list=[];
				for(var i in lib.kzol_kzsg_card){
					var card=lib.kzol_kzsg_card[i];
					if(card.inKb==false) continue;
					if(card.group!='qun') continue;
					if(card.quailty==1){
						list.push(card);
						if(Math.random()<0.5) list.push(card);
					};
					if(card.quailty==2){
						list.push(card);
						list.push(card);
					};
					if(card.quailty==3){
						if(Math.random()<0.5) list.push(card);
					};
					if(card.quailty==4){
						if(Math.random()<0.25) list.push(card);
					};
					if(card.quailty==5){
						if(Math.random()<0.1) list.push(card);
					};
				};
				return list;
			},
		},
		'进阶包（群）':{
			info:'此卡包可以开出群雄绿卡、蓝卡、紫卡、橙卡、红卡，每包两张卡牌',
			value:2000,
			num:2,
			item:function(){
				var list=[];
				for(var i in lib.kzol_kzsg_card){
					var card=lib.kzol_kzsg_card[i];
					if(card.inKb==false) continue;
					if(card.group!='qun') continue;
					if(card.quailty==3){
						list.push(card);
						if(Math.random()<0.5) list.push(card);
					};
					if(card.quailty==4){
						list.push(card);
						list.push(card);
					};
					if(card.quailty==5){
						list.push(card);
					};
					if(card.quailty==6){
						if(card.name.indexOf('kzsg_废城')!=-1){
							if(Math.random()<0.1) list.push(card);
						}else{
							if(Math.random()<0.3) list.push(card);
						};
					};
					if(card.quailty==7){
						if(card.name.indexOf('kzsg_废城')!=-1){
							if(Math.random()<0.1) list.push(card);
						}else{
							if(Math.random()<0.2) list.push(card);
						};
					};
				};
				return list;
			},
		},
		'基础包（全）':{
			info:'此卡包可以开出灰卡、白卡、绿卡、蓝卡、紫卡，每包两张卡牌',
			value:500,
			num:2,
			item:function(){
				var list=[];
				for(var i in lib.kzol_kzsg_card){
					var card=lib.kzol_kzsg_card[i];
					if(card.inKb==false) continue;
					if(card.quailty==1){
						list.push(card);
						if(Math.random()<0.5) list.push(card);
					};
					if(card.quailty==2){
						list.push(card);
						list.push(card);
					};
					if(card.quailty==3){
						if(Math.random()<0.5) list.push(card);
					};
					if(card.quailty==4){
						if(Math.random()<0.25) list.push(card);
					};
					if(card.quailty==5){
						if(Math.random()<0.1) list.push(card);
					};
				};
				return list;
			},
		},
		'进阶包（全）':{
			info:'此卡包可以开出绿卡、蓝卡、紫卡、橙卡、红卡，每包两张卡牌',
			value:2000,
			num:2,
			item:function(){
				var list=[];
				for(var i in lib.kzol_kzsg_card){
					var card=lib.kzol_kzsg_card[i];
					if(card.inKb==false) continue;
					if(card.quailty==3){
						list.push(card);
						if(Math.random()<0.5) list.push(card);
					};
					if(card.quailty==4){
						list.push(card);
						list.push(card);
					};
					if(card.quailty==5){
						list.push(card);
					};
					if(card.quailty==6){
						if(card.name.indexOf('kzsg_废城')!=-1){
							if(Math.random()<0.1) list.push(card);
						}else{
							if(Math.random()<0.3) list.push(card);
						};
					};
					if(card.quailty==7){
						if(card.name.indexOf('kzsg_废城')!=-1){
							if(Math.random()<0.1) list.push(card);
						}else{
							if(Math.random()<0.2) list.push(card);
						};
					};
				};
				return list;
			},
		},
		'基础包（侠）':{
			info:'此卡包可以开出侠客灰卡、白卡、绿卡、蓝卡、紫卡，每包两张卡牌',
			value:500,
			num:2,
			item:function(){
				var list=[];
				for(var i in lib.kzol_kzsg_card){
					var card=lib.kzol_kzsg_card[i];
					if(card.inKb==false) continue;
					if(card.group!='xia') continue;
					if(card.quailty==1){
						list.push(card);
						if(Math.random()<0.5) list.push(card);
					};
					if(card.quailty==2){
						list.push(card);
						list.push(card);
					};
					if(card.quailty==3){
						if(Math.random()<0.5) list.push(card);
					};
					if(card.quailty==4){
						if(Math.random()<0.25) list.push(card);
					};
					if(card.quailty==5){
						if(Math.random()<0.1) list.push(card);
					};
				};
				return list;
			},
		},
		'进阶包（侠）':{
			info:'此卡包可以开出侠客绿卡、蓝卡、紫卡、橙卡、红卡，每包两张卡牌',
			value:2000,
			num:2,
			item:function(){
				var list=[];
				for(var i in lib.kzol_kzsg_card){
					var card=lib.kzol_kzsg_card[i];
					if(card.inKb==false) continue;
					if(card.group!='xia') continue;
					if(card.quailty==3){
						list.push(card);
						if(Math.random()<0.5) list.push(card);
					};
					if(card.quailty==4){
						list.push(card);
						list.push(card);
					};
					if(card.quailty==5){
						list.push(card);
					};
					if(card.quailty==6){
						if(Math.random()<0.3) list.push(card);
					};
					if(card.quailty==7){
						if(Math.random()<0.2) list.push(card);
					};
				};
				return list;
			},
		},
	};
	for(var i in kb){
		lib.kzol_kzsg_kb[i]=kb[i];
	};
	if(lib.kzol_kzsg_ck==undefined) lib.kzol_kzsg_ck={};
	if(lib.config.kzol_kzsg.ck==undefined){
		lib.config.kzol_kzsg.ck={};
		bool=true;
	};
	var ck={
		'基础池':{
			info:'此卡池可以抽出五铢钱、古币、灰卡、白卡、绿卡',
			item:function(){
				var list1=[];
				var list2=[];
				var list3=[];
				for(var i in lib.kzol_kzsg_card){
					var card=lib.kzol_kzsg_card[i];
					if(card.inKb==false) continue;
					if(card.quailty==1){
						list1.push(card);
						if(Math.random()<0.5) list1.push(card);
					};
					if(card.quailty==2){
						list2.push(card);
						list2.push(card);
					};
					if(card.quailty==3){
						if(Math.random()<0.5) list3.push(card);
					};
				};
				var list=[];
				var item={};
				for(var i=0;i<5;i++){
					if(Math.random()<0.01){
						list.push('古币');
					}else if(Math.random()<0.01){
						list.push('绿卡');
					}else if(Math.random()<0.05){
						list.push('白卡');
					}else if(Math.random()<0.05){
						list.push('灰卡');
					}else{
						list.push('五铢钱');
					};
				};
				for(var i=0;i<list.length;i++){
					if(list[i]=='五铢钱'){
						var num=[500,200,200,200,100,100,100,100,100,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50].randomGet();
						item[i]={
							'coin':num,
						};
					}else if(list[i]=='古币'){
						var num=[20,15,15,10,10,10,5,5,5,5].randomGet();
						item[i]={
							'coin1':num,
						};
					}else if(list[i]=='灰卡'){
						var card=list1.randomGet();
						var card_name=card.name+card.quailty;
						item[i]=card_name;
					}else if(list[i]=='白卡'){
						var card=list2.randomGet();
						var card_name=card.name+card.quailty;
						item[i]=card_name;
					}else{
						var card=list3.randomGet();
						var card_name=card.name+card.quailty;
						item[i]=card_name;
					};
				};
				return item;
			},
		},
		'进阶池':{
			info:'此卡池可以抽出五铢钱、古币、绿卡、蓝卡、紫卡',
			item:function(){
				var list1=[];
				var list2=[];
				var list3=[];
				for(var i in lib.kzol_kzsg_card){
					var card=lib.kzol_kzsg_card[i];
					if(card.inKb==false) continue;
					if(card.quailty==3){
						list1.push(card);
						if(Math.random()<0.5) list1.push(card);
					};
					if(card.quailty==4){
						list2.push(card);
						list2.push(card);
					};
					if(card.quailty==5){
						if(Math.random()<0.5) list3.push(card);
					};
				};
				var list=[];
				var item={};
				for(var i=0;i<5;i++){
					if(Math.random()<0.01){
						list.push('古币');
					}else if(Math.random()<0.01){
						list.push('绿卡');
					}else if(Math.random()<0.05){
						list.push('蓝卡');
					}else if(Math.random()<0.05){
						list.push('紫卡');
					}else{
						list.push('五铢钱');
					};
				};
				for(var i=0;i<list.length;i++){
					if(list[i]=='五铢钱'){
						var num=[500,200,200,200,100,100,100,100,100].randomGet();
						item[i]={
							'coin':num,
						};
					}else if(list[i]=='古币'){
						var num=[20,15,15,10,10,10].randomGet();
						item[i]={
							'coin1':num,
						};
					}else if(list[i]=='绿卡'){
						var card=list1.randomGet();
						var card_name=card.name+card.quailty;
						item[i]=card_name;
					}else if(list[i]=='蓝卡'){
						var card=list2.randomGet();
						var card_name=card.name+card.quailty;
						item[i]=card_name;
					}else{
						var card=list3.randomGet();
						var card_name=card.name+card.quailty;
						item[i]=card_name;
					};
				};
				return item;
			},
		},
	};
	for(var i in ck){
		lib.kzol_kzsg_ck[i]=ck[i];
		if(lib.config.kzol_kzsg.ck[i]==undefined){
			lib.config.kzol_kzsg.ck[i]=0;
			bool=true;
		};
	};
	if(lib.config.kzol_kzsg.jj==undefined){
		lib.config.kzol_kzsg.jj={};
		bool=true;
	};
	if(lib.config.kzol_kzsg.displayType==undefined){
		lib.config.kzol_kzsg.displayType='normal';
		bool=true;
	};
	if(lib.config.kzol_kzsg.boss==undefined){
		lib.config.kzol_kzsg.boss={};
		bool=true;
	};
	if(lib.kzol_kzsg_boss==undefined) lib.kzol_kzsg_boss={};
	if(lib.config.kzol_kzsg.diy!=undefined){
		for(var i in lib.config.kzol_kzsg.diy){
			if(lib.config.kzol_kzsg.diy[i].jy==true) continue;
			if(lib.config.kzol_kzsg.diy[i].boss!=true) continue;
			var card=lib.config.kzol_kzsg.diy[i];
			lib.kzol_kzsg_boss[i]={
				'times':1,
				'info':card.info,
				'battle':{
					name:i,
					type:'boss',
					limit:3,
					reward:{},
					army:{
						'1':{
							leader:{
								'0':i,
							},
							number:{},
						},
					},
				},
				'battle_pt':{
					limit:2,
				},
				'battle_kn':{
					limit:1,
				},
			};
		};
	};
	var boss={
		'kzsg_摇钱树7':{
			'times':3,
			'info':'规定轮次内对摇钱树造成越多伤害，奖励越丰富',
			'battle':{
				name:'kzsg_摇钱树7',
				type:'boss',
				center:true,
				limit:1,
				e_hp:Infinity,
				//p_hp:50,
				reward:{
					'kzsg_coin1':5,
				},
				reward_info:'<br>&nbsp-五铢钱若干',
				army:{
					'1':{
						leader:{
							'0':'kzsg_摇钱树7',
						},
						number:{},
					},
				},
			},
		},
		'kzsg_克瑞斯6':{
			'times':1,
			'info':'暂无<br>设计来源：浅笑心柔(群友)',
			'battle':{
				name:'kzsg_克瑞斯6',
				type:'boss',
				limit:1,
				e_hp:100,
				p_hp:60,
				reward:{
					'kzsg_克瑞斯4':1,
				},
				army:{
					'1':{
						leader:{
							'0':'kzsg_克瑞斯6',
						},
						number:{},
					},
				},
			},
			'battle_pt':{
				p_hp:45,
				reward:{
					'kzsg_克瑞斯4':1,
					'进阶池':1,
				},
			},
			'battle_kn':{
				p_hp:30,
				reward:{
					'kzsg_克瑞斯4':2,
				},
			},
		},
	};
	for(var i in boss){
		lib.kzol_kzsg_boss[i]=boss[i];
	};
	for(var i in lib.kzol_kzsg_boss){
		if(lib.config.kzol_kzsg.boss[i]==undefined){
			lib.config.kzol_kzsg.boss[i]=0;
			bool=true;
		};
	};
	if(lib.config.kzol_kzsg.diy==undefined){
		lib.config.kzol_kzsg.diy={};
		bool=true;
	};
	if(bool==true) game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
	lib.arenaReady.push(function(){
		ui.kzol_kzsg_coin=ui.create.system('',null,true);
		ui.kzol_kzsg_coin.style.display='none';
		ui.kzol_kzsg_coin.innerHTML='五铢钱:'+lib.config.kzol_kzsg.coin+'&nbsp'+'古币:'+lib.config.kzol_kzsg.coin1;
		lib.setPopped(ui.kzol_kzsg_coin,function(){
			var uiintro=ui.create.dialog('hidden');
			uiintro.listen(function(e){
				e.stopPropagation();
			});
			var dh=ui.create.div('.menubutton.large','<span style="cursor:pointer;font-size:28px">水晶换五铢钱</span>',function(){
				if(_status.kzol_kzsg_dialogs17!=undefined&&_status.kzol_kzsg_dialogs17.dialog!=undefined&&_status.kzol_kzsg_dialogs17.dialog.onShow!=true){
					game.kzol_dialogs_open(_status.kzol_kzsg_dialogs17);
					_status.kzol_kzsg_dialogs17.dialog.onShow=true;
				};
			});
			dh.style.height='30px';
			dh.style.width='175px';
			dh.style.borderRadius='8px';
			dh.style.backgroundColor="#E00000";
			uiintro.add(dh);
			return uiintro;
		},220);
	});
	lib.kzol_daily_zxjl={
		1:{
			time:300,
			reward:{
				'kzsg_coin':200,
			},
		},
		2:{
			time:600,
			reward:{
				'kzsg_coin':500,
			},
		},
		3:{
			time:900,
			reward:{
				'kzsg_coin1':5,
			},
		},
		4:{
			time:900,
			reward:{
				'kzsg_coin1':10,
			},
		},
		5:{
			time:900,
			reward:{
				'kzsg_coin':200,
				'kzsg_coin1':10,
			},
		},
		6:{
			time:1800,
			reward:{
				'基础池':1,
				'随机卡牌':1,
			},
		},
		7:{
			time:1800,
			reward:{
				'进阶池':1,
				'随机卡牌':1,
			},
		},
	};
	game.kzol_getBase64Image=function(url,callback,onerror){
		var canvas=document.createElement("canvas");
		var img=new Image();
		img.src=lib.assetURL+'extension/扩展ol/kzsg_image/'+url;
		img.onload=function(){
			canvas.width=this.width;
			canvas.height=this.height;
			canvas.getContext("2d").drawImage(img,0,0,this.width,this.height);
			var dataURL=canvas.toDataURL();
			callback?callback(dataURL):null;
		};
		if(onerror!=undefined) img.onerror=onerror;
	};
	game.kzol_importDiyCard=function(finish){
		if(!window.JSZip){
			lib.init.js(lib.assetURL+'game','jszip',function(){
				game.kzol_importDiyCard(finish);
			});
		}else{
			var zip=new JSZip();
			zip.file("config.js",JSON.stringify(lib.config.kzol_kzsg.diy));
			//var folder=zip.folder("kzsg_image");
			var file_list=[];
			for(var i in lib.config.kzol_kzsg.diy){
				var diy=lib.config.kzol_kzsg.diy[i];
				if(diy.image==undefined) continue;
				file_list.push(diy.image);
			};
			var importZip=function(){
				var blob=zip.generate({type:"blob"});
				var fileNameToSaveAs='DIY卡牌包';
				fileNameToSaveAs=fileNameToSaveAs.replace(/\\|\/|\:|\?|\"|\*|<|>|\|/g,'.');
				fileNameToSaveAs+='.zip';
				if(lib.device){
					var directory;
					if(lib.device=='android'){
						directory=cordova.file.externalDataDirectory;
					}else{
						directory=cordova.file.documentsDirectory;
					};
					window.resolveLocalFileSystemURL(directory,function(entry){
						entry.getFile(fileNameToSaveAs,{create:true},function(fileEntry){
							fileEntry.createWriter(function(fileWriter){
								fileWriter.onwriteend=function(){
									alert('文件已导出至'+directory+fileNameToSaveAs);
									if(finish!=undefined) finish();
								};
								fileWriter.write(blob);
							});
						});
					});
				}else{
					var downloadLink=document.createElement("a");
					downloadLink.download=fileNameToSaveAs;
					downloadLink.innerHTML="Download File";
					downloadLink.href=window.URL.createObjectURL(blob);
					downloadLink.click();
					if(finish!=undefined) finish();
				};
			};
			if(file_list.length>0){
				var getBase64Image=function(){
					game.kzol_getBase64Image(file_list[0],function(dataURL){
                        var img_arr=dataURL.split(',');
						zip.file(file_list[0],img_arr[1],{base64:true});
						file_list.remove(file_list[0]);
						if(file_list.length>0){
							getBase64Image();
						}else{
							importZip();
						};
					},function(){
						file_list.remove(file_list[0]);
						if(file_list.length>0){
							getBase64Image();
						}else{
							importZip();
						};
					});
				};
				getBase64Image();
			}else{
				importZip();
			};
		};
	};
	game.kzol_loadDiyCard=function(data){
		if(!window.JSZip){
			lib.init.js(lib.assetURL+'game','jszip',function(){
				game.kzol_loadDiyCard(data);
			});
		}else{
			var zip=new JSZip();
			try{
				zip.load(data);
				var str=zip.file('config.js').asText();
				var data=JSON.parse(str);
				var bool=false;
				for(var i in data){
					if(data[i].author!=undefined&&data[i].info!=undefined){
						bool=true;
					};
				};
				if(bool==false){
					alert('导入失败');
					return;
				};
				if(lib.config.kzol_kzsg.diy==undefined) lib.config.kzol_kzsg.diy={};
				for(var i in data){
					if(lib.config.kzol_kzsg.diy[i]!=undefined&&!confirm('已存在同名DIY卡牌-'+i+'，是否覆盖？')) continue;
					lib.config.kzol_kzsg.diy[i]=data[i];
				};
				game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
				if(game.download){
					var filelist=[];
					for(var i in zip.files){
						if(i[0]!='.'&&i[0]!='_'&&i!='config.js'){
							filelist.push(i);
						};
					};
					if(lib.node&&lib.node.fs){
						game.ensureDirectory('extension/扩展ol/kzsg_image',function(){
							var writeFile=function(){
								if(filelist.length){
									var filename=filelist.shift();
									lib.node.fs.writeFile(__dirname+'/extension/扩展ol/kzsg_image/'+filename,zip.files[filename].asNodeBuffer(),null,writeFile);
								};
							};
							writeFile();
						});
					}else{
						window.resolveLocalFileSystemURL(lib.assetURL,function(entry){
							entry.getDirectory('extension/扩展ol/kzsg_image',{create:true},function(dirEntry){
								var writeFile=function(){
									if(filelist.length){
										var filename=filelist.shift();
										dirEntry.getFile(filename,{create:true},function(fileEntry){
											fileEntry.createWriter(function(fileWriter){
												fileWriter.onwriteend=writeFile;
												fileWriter.write(zip.files[filename].asArrayBuffer());
											});
										});
									};
								};
								writeFile();
							});
						});
					};
				};
				alert('导入成功');
			}catch(e){
				console.log(e);
				alert('导入失败');
				return false;
			};
		};
	};
	if(lib.config['extension_扩展ol_mode_hide_kzsg']==true) return ;
	game.addMode('kzsg',{
		start:function(){
			'step 0'
			game.kzol_kzsg_hyDiy();
			ui.sidebar.style.width='calc(100%)';
			ui.pause.style.display='none';
			ui.kzsg_giveup=ui.create.system('投降',function(){
				if(_status.kzol_kzsg_onGiveUp==undefined){
					if(confirm('是否投降？')){
						game.kzol_winWar(false);
						_status.kzol_kzsg_onGiveUp=true;
					};
				};
			},true);
			ui.kzsg_giveup.style.display='none';
			if(lib.config['extension_十周年UI_enable']==true){
				game.say1('该模式暂不支持十周年UI扩展，刷新后将关闭十周年UI扩展');
				lib.config['extension_十周年UI_enable']=false;
				game.saveConfig('extension_十周年UI_enable',false);
			};
			if(lib.config.mode_config.kzsg.jmsf==true){
				if(ui.window.offsetWidth<1000){
					var sf_num=ui.window.offsetWidth/1000;
					game.documentZoom=Math.round(game.documentZoom*sf_num*10)/10;
					ui.updatez();
				};
				if(ui.window.offsetHeight<600){
					var sf_num=ui.window.offsetHeight/600;
					game.documentZoom=Math.round(game.documentZoom*sf_num*10)/10;
					ui.updatez();
				};
			};
			if(lib.config.mode_config.kzsg.zdgbxzjssd==true){
				lib.config.sync_speed=false;
			};
			ui.kzol_kzsg_coin.style.display='';
			ui.pause.classList.remove('hidden');
			setInterval(function(){
				ui.kzol_kzsg_coin.innerHTML='五铢钱:'+lib.config.kzol_kzsg.coin+'&nbsp'+'古币:'+lib.config.kzol_kzsg.coin1;
			},500);
			setTimeout(function(){
				if(lib.config.kzol_kzsg.first==undefined){
					game.say1('获得初始卡牌');
					setTimeout(function(){
						game.kzol_kzsg_gainCard('kzsg_关平',3);
						game.kzol_kzsg_gainCard('kzsg_民卫',1);
						game.kzol_kzsg_gainCard('kzsg_民卫',1);
						game.kzol_kzsg_gainCard('kzsg_民卫',1);
						game.kzol_kzsg_gainCard('kzsg_民卫',1);
						lib.config.kzol_kzsg.first=true;
						game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
					},250);
				};
			},500);
			setInterval(function(){
				var date=new Date();
				var year=date.getFullYear();
				var month=date.getMonth()+1;
				var day=date.getDate();
				for(var i in lib.config.kzol_kzsg.daily_reward){
					var battles=lib.config.kzol_kzsg.daily_reward[i];
					for(var j in battles){
						var reward=battles[j];
						if(reward.year!=year||reward.month!=month||reward.day!=day){
							delete lib.config.kzol_kzsg.daily_reward[i][j];
							game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
						};
					};
				};
			},1000);
			if(lib.config.kzol_kzsg.sd.item==undefined){
				lib.config.kzol_kzsg.sd.item=[];
				var list1=[];
				var list2=[];
				var list3=[];
				var list4=[];
				var list5=[];
				var list6=[];
				var list7=[];
				for(var i in lib.kzol_kzsg_card){
					var card=lib.kzol_kzsg_card[i];
					if(card.inKb==false) continue;
					if(card.quailty==1) list1.push(card);
					if(card.quailty==2) list2.push(card);
					if(card.quailty==3) list3.push(card);
					if(card.quailty==4) list4.push(card);
					if(card.quailty==5) list5.push(card);
					if(card.quailty==6) list6.push(card);
					if(card.quailty==7) list7.push(card);
				};
				var value=0;
				var value1=0;
				for(var i=0;i<8;i++){
					if(Math.random()<0.05){
						var card=list7.randomGet();
						var list_t=list7;
						value=[20000,19000,18000,17000,16000].randomGet();
						value1=150;
					}else if(Math.random()<0.05){
						var card=list6.randomGet();
						var list_t=list6;
						value=[15000,14000,13000,12000,11000,10000].randomGet();
						value1=100;
					}else if(Math.random()<0.1){
						var card=list5.randomGet();
						var list_t=list5;
						value=[9000,8500,8000,7500,7000].randomGet();
						value1=75;
					}else if(Math.random()<0.1){
						var card=list4.randomGet();
						var list_t=list4;
						value=[7000,6500,6000,5500,5000].randomGet();
						value1=50;
					}else if(Math.random()<0.2){
						var card=list3.randomGet();
						var list_t=list3;
						value=[5000,4750,4500,4250,4000].randomGet();
						value1=25;
					}else if(Math.random()<0.4){
						var card=list2.randomGet();
						var list_t=list2;
						value=[3000,2750,2500,2250,2000].randomGet();
						value1=10;
					}else{
						var card=list1.randomGet();
						var list_t=list1;
						value=[2000,1750,1500,1250,1000,750].randomGet();
						value1=5;
					};
					var value2=[value,value,value,value1].randomGet();
					card.value={};
					if(value2==value) card.value.coin=value2;
					if(value2==value1) card.value.coin1=value2;
					lib.config.kzol_kzsg.sd.item.push(card);
					list_t.remove(card);
				};
				var date=new Date();
				var year=date.getFullYear();
				var month=date.getMonth()+1;
				var day=date.getDate();
				lib.config.kzol_kzsg.sd.year=year;
				lib.config.kzol_kzsg.sd.month=month;
				lib.config.kzol_kzsg.sd.day=day;
				game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
			};
			if(lib.config.kzol_kzsg.boss_time==undefined){
				lib.config.kzol_kzsg.boss_time={};
				var date=new Date();
				var year=date.getFullYear();
				var month=date.getMonth()+1;
				var day=date.getDate();
				lib.config.kzol_kzsg.boss_time.year=year;
				lib.config.kzol_kzsg.boss_time.month=month;
				lib.config.kzol_kzsg.boss_time.day=day;
				game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
			};
			if(lib.config.kzol_kzsg.ggl.item==undefined){
				lib.config.kzol_kzsg.ggl.item=[];
				var list=[];
				for(var i in lib.kzol_kzsg_card){
					var card=lib.kzol_kzsg_card[i];
					if(card.inKb==false) continue;
					if(!list.contains(card.translate)) list.push(card.translate);
				};
				for(var i=0;i<36;i++){
					var name=list.randomGet();
					lib.config.kzol_kzsg.ggl.item.push(name);
					list.remove(name);
				};
				var list1=[];
				for(var i in lib.kzol_kzsg_card){
					var card=lib.kzol_kzsg_card[i];
					if(card.inKb==false) continue;
					if(!list1.contains(card.translate)) list1.push(card.translate);
				};
				lib.config.kzol_kzsg.ggl.result=list1.randomGet()
				var date=new Date();
				var year=date.getFullYear();
				var month=date.getMonth()+1;
				var day=date.getDate();
				lib.config.kzol_kzsg.ggl.year=year;
				lib.config.kzol_kzsg.ggl.month=month;
				lib.config.kzol_kzsg.ggl.day=day;
				lib.config.kzol_kzsg.ggl.finish=false;
				game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
			};
			if(lib.config.kzol_kzsg_daily_zxjl==undefined) lib.config.kzol_kzsg_daily_zxjl={
				num:1,
				time:lib.kzol_daily_zxjl[1].time,
			};
			game.saveConfig('kzol_kzsg_daily_zxjl',lib.config.kzol_kzsg_daily_zxjl);
			setInterval(function(){
				if(lib.kzol_daily_zxjl[lib.config.kzol_kzsg_daily_zxjl.num]!=undefined){
					if(lib.config.kzol_kzsg_daily_zxjl.time>0) lib.config.kzol_kzsg_daily_zxjl.time-=1;
				};
			},1000);
			setInterval(function(){
				if(lib.kzol_daily_zxjl[lib.config.kzol_kzsg_daily_zxjl.num]!=undefined) game.saveConfig('kzol_kzsg_daily_zxjl',lib.config.kzol_kzsg_daily_zxjl);
			},10000);
			var func_update=function(){
				var sd=lib.config.kzol_kzsg.sd;
				var date=new Date();
				var year=date.getFullYear();
				var month=date.getMonth()+1;
				var day=date.getDate();
				if(sd.year!=year||sd.month!=month||sd.day!=day){
					lib.config.kzol_kzsg.sd.item=[];
					var list1=[];
					var list2=[];
					var list3=[];
					var list4=[];
					var list5=[];
					var list6=[];
					var list7=[];
					for(var i in lib.kzol_kzsg_card){
						var card=lib.kzol_kzsg_card[i];
						if(card.inKb==false) continue;
						if(card.quailty==1) list1.push(card);
						if(card.quailty==2) list2.push(card);
						if(card.quailty==3) list3.push(card);
						if(card.quailty==4) list4.push(card);
						if(card.quailty==5) list5.push(card);
						if(card.quailty==6) list6.push(card);
						if(card.quailty==7) list7.push(card);
					};
					var value=0;
					var value1=0;
					for(var i=0;i<8;i++){
						if(Math.random()<0.05){
							var card=list7.randomGet();
							var list_t=list7;
							value=[20000,19000,18000,17000,16000].randomGet();
							value1=150;
						}else if(Math.random()<0.05){
							var card=list6.randomGet();
							var list_t=list6;
							value=[15000,14000,13000,12000,11000,10000].randomGet();
							value1=100;
						}else if(Math.random()<0.1){
							var card=list5.randomGet();
							var list_t=list5;
							value=[9000,8500,8000,7500,7000].randomGet();
							value1=75;
						}else if(Math.random()<0.1){
							var card=list4.randomGet();
							var list_t=list4;
							value=[7000,6500,6000,5500,5000].randomGet();
							value1=50;
						}else if(Math.random()<0.2){
							var card=list3.randomGet();
							var list_t=list3;
							value=[5000,4750,4500,4250,4000].randomGet();
							value1=25;
						}else if(Math.random()<0.4){
							var card=list2.randomGet();
							var list_t=list2;
							value=[3000,2750,2500,2250,2000].randomGet();
							value1=10;
						}else{
							var card=list1.randomGet();
							var list_t=list1;
							value=[2000,1750,1500,1250,1000,750].randomGet();
							value1=5;
						};
						var value2=[value,value,value,value1].randomGet();
						card.value={};
						if(value2==value) card.value.coin=value2;
						if(value2==value1) card.value.coin1=value2;
						lib.config.kzol_kzsg.sd.item.push(card);
						list_t.remove(card);
					};
					lib.config.kzol_kzsg.sd.year=year;
					lib.config.kzol_kzsg.sd.month=month;
					lib.config.kzol_kzsg.sd.day=day;
					game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
					if(_status!=undefined&&_status.kzol_kzsg_divs11!=undefined&&_status.kzol_kzsg_divs11.a_div!=undefined) _status.kzol_kzsg_divs11.a_div.onclick();
					lib.config.kzol_kzsg_daily_zxjl={
						num:1,
						time:lib.kzol_daily_zxjl[1].time,
					};
				};
				var ggl=lib.config.kzol_kzsg.ggl;
				if(ggl.year!=year||ggl.month!=month||ggl.day!=day){
					lib.config.kzol_kzsg.ggl.item=[];
					var list=[];
					for(var i in lib.kzol_kzsg_card){
						var card=lib.kzol_kzsg_card[i];
						if(card.inKb==false) continue;
						if(!list.contains(card.translate)) list.push(card.translate);
					};
					for(var i=0;i<36;i++){
						var name=list.randomGet();
						lib.config.kzol_kzsg.ggl.item.push(name);
						list.remove(name);
					};
					var list1=[];
					for(var i in lib.kzol_kzsg_card){
						var card=lib.kzol_kzsg_card[i];
						if(card.inKb==false) continue;
						if(!list1.contains(card.translate)) list1.push(card.translate);
					};
					lib.config.kzol_kzsg.ggl.result=list1.randomGet()
					lib.config.kzol_kzsg.ggl.year=year;
					lib.config.kzol_kzsg.ggl.month=month;
					lib.config.kzol_kzsg.ggl.day=day;
					lib.config.kzol_kzsg.ggl.finish=false;
					game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
				};
				var boss_time=lib.config.kzol_kzsg.boss_time;
				if(boss_time.year!=year||boss_time.month!=month||boss_time.day!=day){
					for(var i in lib.config.kzol_kzsg.boss){
						lib.config.kzol_kzsg.boss[i]=0;
					};
					lib.config.kzol_kzsg.boss_time.year=year;
					lib.config.kzol_kzsg.boss_time.month=month;
					lib.config.kzol_kzsg.boss_time.day=day;
					game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
				};
			};
			func_update();
			setInterval(func_update,60000);
			setTimeout(function(){
				ui.arena.classList.remove('oblongcard');
				ui.window.classList.remove('oblongcard');
			},1000);
			lib.config.swipe=false;
			lib.config.swipe_down='off';
			lib.config.swipe_up='off';
			lib.config.swipe_left='off';
			lib.config.swipe_right='off';
			if(ui.sortCard!=undefined) ui.sortCard.style.display='none';
			lib.layoutfixed.push('kzsg');
			//lib.config.layout='mobile';
			var layout=lib.config.layout;
			lib.init.layout('mobile');
			game.saveConfig('layout',layout);
			lib.config.phonelayout=false;
			ui.css.phone.href='';
			ui.arena.classList.remove('phone');
			lib.sort.seat=function(a,b){
				var player=lib.tempSortSeat||_status.event.player;
				var delta=get.distance(player,a,'absolute')-get.distance(player,b,'absolute');
				if(delta) return delta;
				delta=parseInt(a.dataset.position)-parseInt(b.dataset.position);
				return -delta;
			};
			ui.create.player1=function(position,style,noclick){
				var node=ui.create.player(position,noclick);
				for(var i in style){
					node.style[i]=style[i]+'px';
				};
				
				node.node.marks.style.left=(node.offsetWidth-30)+'px';
				node.node.marks.style.height='34px';
				node.node.marks.style['overflow-x']='hidden';
				node.node.marks.style['overflow-y']='scroll';
				
				
				node.node.prepareRound=ui.create.div('',node);
				node.node.prepareRound_str=ui.create.div('',node);
				node.node.attack=ui.create.div('',node);
				node.node.attack_str=ui.create.div('',node);
				node.node.type=ui.create.div('.nameol',node);
				
				node.node.type.style.top='5px';
				node.node.type.style['font-size']='16px';
				node.node.type.style['text-align']='center';
				node.node.type.style['font-family']="'STXinwei','xinwei'";
				node.node.type.style['line-height']='20px';
				node.node.type.innerHTML='';
				
				node.node.prepareRound.style.height='30px';
				node.node.prepareRound.style.width='30px';
				node.node.prepareRound.style.bottom='5px';
				node.node.prepareRound.style.left='35px';
				node.node.prepareRound.style['font-size']='10px';
				node.node.prepareRound.style['text-align']='center';
				node.node.prepareRound.style['font-family']="'STXinwei','xinwei'";
				node.node.prepareRound.style['line-height']='30px';
				node.node.prepareRound.setBackgroundImage('extension/扩展ol/框.png');
				node.node.prepareRound.style.backgroundSize="100% 100%";
				node.node.prepareRound.innerHTML='';
				
				node.node.prepareRound_str.style.height='10px';
				node.node.prepareRound_str.style.width='10px';
				node.node.prepareRound_str.style.bottom='10px';
				node.node.prepareRound_str.style.left='50px';
				node.node.prepareRound_str.style['font-family']="'STXinwei','xinwei'";
				node.node.prepareRound_str.innerHTML='回';
				
				node.node.attack.style.height='30px';
				node.node.attack.style.width='30px';
				node.node.attack.style.bottom='5px';
				node.node.attack.style.left='5px';
				node.node.attack.style['font-size']='10px';
				node.node.attack.style['text-align']='center';
				node.node.attack.style['font-family']="'STXinwei','xinwei'";
				node.node.attack.style['line-height']='30px';
				node.node.attack.setBackgroundImage('extension/扩展ol/框.png');
				node.node.attack.style.backgroundSize="100% 100%";
				node.node.attack.innerHTML='';
				
				node.node.attack_str.style.height='10px';
				node.node.attack_str.style.width='10px';
				node.node.attack_str.style.bottom='10px';
				node.node.attack_str.style.left='20px';
				node.node.attack_str.style['font-family']="'STXinwei','xinwei'";
				node.node.attack_str.innerHTML='攻';
				for(var i in style){
					if(i=='height'){
						node.node.avatar.style[i]=(style[i]-9)+'px';
						node.node.avatar.style[i]=(style[i]-9)+'px';
						node.node.avatar.style.top='5px';
						node.node.equips.style.bottom='2px';
						node.node.name.style.top='6.5px';
						node.node.name2.style.top='6.5px';
						node.node.count.style.bottom='20px';
						node.node.hp.style.bottom='2px';
						node.node.marks.style.top='5px';
						node.node.judges.style.top='5px';
					};
					if(i=='width'){
						node.node.avatar.style[i]=(style[i]-10)+'px';
						node.node.equips.style[i]=(style[i]-10)+'px';
						node.node.avatar.style.left='5px';
						node.node.equips.style.left='5px';
						node.node.name.style.left='6.5px';
						node.node.name2.style.right='6.5px';
						node.node.count.style.left='-7px';
						if(lib.config.mode_config.kzsg.zdjmdxgd==true){
							node.node.hp.style.left='69px';
						}else{
							node.node.hp.style.left=(node.node.avatar.offsetWidth-11)+'px';
						};
					};
				};
				return node;
			};
			lib.config.show_history='off';
			//lib.config.show_log='off';
			lib.config.damage_shake=false;
			_status.kzol_kzsg_war=event;
			_status.prepareArena=true;
			game.showHistory(false);
			game.finishCards();
			ui.auto.delete();
			ui.autonode.delete();
			game.kzol_p_card_wait1=[];
			game.kzol_p_card_wait=[];
			game.kzol_p_card=[];
			game.kzol_p_card_md=[];
			game.kzol_p_card_bw=[];
			game.kzol_e_card_wait1=[];
			game.kzol_e_card_wait=[];
			game.kzol_e_card=[];
			game.kzol_e_card_md=[];
			game.kzol_e_card_bw=[];
			game.kzol_p_maxHp=30;
			game.kzol_e_maxHp=30;
			game.kzol_p_hp=30;
			game.kzol_e_hp=30;
			'step 1'
			ui.window.hide();
			setTimeout(function(){
				ui.window.show();
			},500);
			if(lib.config.mode_config.kzsg.jmsf_zd==true){
				if(ui.arena.offsetWidth>ui.arena.offsetHeight*10/5.8){
					ui.arena.style.width=(ui.arena.offsetHeight*10/5.8)+'px';
					ui.arena.style.left='calc(47% - '+(ui.arena.offsetHeight*5/5.8)+'px)';
				};
			};
			_status.kzol_kzsg_arenaTop=ui.arena.offsetTop;
			if(lib.config.mode_config.kzsg.acbj_3d==true){
				ui.arena.style.top='calc(50% - '+(ui.arena.offsetHeight/1.6-60)+'px)';
				ui.arena.style.transform='scale(0.9, 0.9) perspective(1em) rotateX(0.6deg)';
			};
			_status.kzol_kzsg_divs={};
			var e_hp=ui.create.div('');
			e_hp.style.width='calc(5%)';
			e_hp.style.height='calc(42.5%)';
			e_hp.style.left='calc(2.5%)';
			e_hp.style.top='calc(2.5%)';
			e_hp.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			e_hp.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			e_hp.style.borderRadius='8px';
			e_hp.style.transform='rotate(180deg)';
			ui.arena.appendChild(e_hp);
			_status.kzol_kzsg_divs.e_hp=e_hp;
			var e_hp1=ui.create.div('');
			e_hp1.style.width='calc(100%)';
			e_hp1.style.height='calc(100%)';
			e_hp1.style.left='0px';
			e_hp1.style.top='0px';
			e_hp1.style.borderRadius='8px';
			e_hp1.setBackgroundImage('extension/扩展ol/血条.jpg');
			e_hp1.style.backgroundSize="100% 100%";
			e_hp.appendChild(e_hp1);
			setInterval(function(){
				if(e_hp1!=undefined&&e_hp!=undefined){
					if(game.kzol_e_maxHp==Infinity){
						p=100;
					}else{
						var p=game.kzol_e_hp/game.kzol_e_maxHp*100;
						if(p>100) p=100;
					};
					e_hp1.style.height='calc('+p+'%)';
				};
			},100);
			_status.kzol_kzsg_divs.e_hp1=e_hp1;
			var e_hp2=ui.create.div('');
			e_hp2.style.width='calc(100%)';
			e_hp2.style.height='24px';
			e_hp2.style.left='0px';
			e_hp2.style.top='calc(50% - 12px)';
			e_hp2.style['white-space']='nowrap';
			e_hp2.style['font-size']='24px';
			e_hp2.style['text-align']='center';
			e_hp2.style['font-family']="'STXinwei','xinwei'";
			e_hp2.style.transform='rotate(180deg)';
			e_hp2.style.borderRadius='8px';
			e_hp.appendChild(e_hp2);
			setInterval(function(){
				if(e_hp2!=undefined&&e_hp!=undefined){
					if(game.kzol_e_maxHp==Infinity){
						e_hp2.innerHTML='∞';
					}else{
						e_hp2.innerHTML=game.kzol_e_hp;
					};
				};
			},100);
			_status.kzol_kzsg_divs.e_hp2=e_hp2;
			var p_hp=ui.create.div('');
			p_hp.style.width='calc(5%)';
			p_hp.style.height='calc(42.5%)';
			p_hp.style.left='calc(2.5%)';
			p_hp.style.top='calc(50%)';
			p_hp.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			p_hp.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			p_hp.style.borderRadius='8px';
			ui.arena.appendChild(p_hp);
			_status.kzol_kzsg_divs.p_hp=p_hp;
			var p_hp1=ui.create.div('');
			p_hp1.style.width='calc(100%)';
			p_hp1.style.height='calc(100%)';
			p_hp1.style.left='0px';
			p_hp1.style.top='0px';
			p_hp1.style.borderRadius='8px';
			p_hp1.setBackgroundImage('extension/扩展ol/血条.jpg');
			p_hp1.style.backgroundSize="100% 100%";
			p_hp.appendChild(p_hp1);
			setInterval(function(){
				if(p_hp1!=undefined&&p_hp!=undefined){
					if(game.kzol_p_maxHp==Infinity){
						p=100;
					}else{
						var p=game.kzol_p_hp/game.kzol_p_maxHp*100;
						if(p>100) p=100;
					};
					p_hp1.style.height='calc('+p+'%)';
				};
			},100);
			_status.kzol_kzsg_divs.p_hp1=p_hp1;
			var p_hp2=ui.create.div('');
			p_hp2.style.width='calc(100%)';
			p_hp2.style.height='24px';
			p_hp2.style.left='0px';
			p_hp2.style.top='calc(50% - 12px)';
			p_hp2.style['white-space']='nowrap';
			p_hp2.style['font-size']='24px';
			p_hp2.style['text-align']='center';
			p_hp2.style['font-family']="'STXinwei','xinwei'";
			p_hp2.style.borderRadius='8px';
			p_hp.appendChild(p_hp2);
			setInterval(function(){
				if(p_hp2!=undefined&&p_hp!=undefined){
					if(game.kzol_p_maxHp==Infinity){
						p_hp2.innerHTML='∞';
					}else{
						p_hp2.innerHTML=game.kzol_p_hp;
					};
				};
			},100);
			_status.kzol_kzsg_divs.p_hp2=p_hp2;
			var vs1=ui.create.div('');
			vs1.style.height='calc(5%)';
			vs1.style.width='60px';
			vs1.style.left='calc(5% - 30px)';
			vs1.style['font-size']='30px';
			vs1.style['text-align']='center';
			vs1.style['font-family']="'STXinwei','xinwei'";
			vs1.style.borderRadius='8px';
			vs1.style.backgroundSize='100% 100%';
			vs1.setBackgroundImage('extension/扩展ol/vs.png');
			ui.arena.appendChild(vs1);
			vs1.style['line-height']=(vs1.offsetHeight+5)+'px';
			vs1.style.top='calc(45%)';
			//vs1.innerHTML='VS';
			_status.kzol_kzsg_divs.vs1=vs1;
			var p_cs=ui.create.div('');
			if(lib.config.mode_config.kzsg.zdjmdxgd==true){
				p_cs.style.width='90px';
				p_cs.style.height='108px';
				p_cs.style['line-height']='108px';
			}else{
				p_cs.style.width='calc(10%)';
			};
			p_cs.style.left='calc(10%)';
			p_cs.style.bottom='calc(7.5%)';
			p_cs.style['font-size']='18px';
			p_cs.style['text-align']='center';
			p_cs.style['font-family']="'STXinwei','xinwei'";
			p_cs.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			p_cs.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			p_cs.style.borderRadius='8px';
			ui.arena.appendChild(p_cs);
			if(lib.config.mode_config.kzsg.zdjmdxgd!=true){
				p_cs.style.height=(p_cs.offsetWidth*1.2)+'px';
				p_cs.style['line-height']=p_cs.offsetHeight+'px';
			};
			p_cs.innerHTML='牌堆('+game.kzol_p_card_wait1.length+')';
			setInterval(function(){
				if(p_cs!=undefined) p_cs.innerHTML='牌堆('+game.kzol_p_card_wait1.length+')';
			},100);
			_status.kzol_kzsg_divs.p_cs=p_cs;
			var p_wait=ui.create.div('');
			p_wait.style.width='calc(62.5%)';
			p_wait.style.height=(p_cs.offsetWidth*1.2)+'px';
			p_wait.style.left='calc(22.5%)';
			p_wait.style.bottom='calc(7.5%)';
			p_wait.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			p_wait.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			p_wait.style['overflow-x']='scroll';
			p_wait.style['overflow-y']='hidden';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(p_wait);
			p_wait.style.borderRadius='8px';
			p_wait.addEventListener('mousewheel',function(e){
				var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
				var move_s=delD>0?-30:30;
				this.scrollLeft+=move_s;
			});
			ui.arena.appendChild(p_wait);
			_status.kzol_kzsg_divs.p_wait=p_wait;
			var p_md=ui.create.div('');
			if(lib.config.mode_config.kzsg.zdjmdxgd==true){
				p_md.style.width='90px';
				p_md.style.height='108px';
				p_md.style['line-height']='108px';
			}else{
				p_md.style.width='calc(10%)';
				p_md.style.height=(p_cs.offsetWidth*1.2)+'px';
			};
			p_md.style.left='calc(87.5%)';
			p_md.style.bottom='calc(7.5%)';
			p_md.style['font-size']='18px';
			p_md.style['text-align']='center';
			p_md.style['font-family']="'STXinwei','xinwei'";
			p_md.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			p_md.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			p_md.style.borderRadius='8px';
			ui.arena.appendChild(p_md);
			if(lib.config.mode_config.kzsg.zdjmdxgd!=true) p_md.style['line-height']=p_md.offsetHeight+'px';
			p_md.innerHTML='墓地('+game.kzol_p_card_md.length+')';
			setInterval(function(){
				if(p_md!=undefined) p_md.innerHTML='墓地('+game.kzol_p_card_md.length+')';
			},100);
			_status.kzol_kzsg_divs.p_md=p_md;
			var p_bw=ui.create.div('');
			if(lib.config.mode_config.kzsg.zdjmdxgd==true){
				p_bw.style.width='90px';
				p_bw.style.height='108px';
				p_bw.style.bottom='calc(8.5% + 108px)';
			}else{
				p_bw.style.width='calc(10%)';
				p_bw.style.bottom='calc(8.5% + '+(p_cs.offsetHeight)+'px'+')';
			};
			p_bw.style.left='calc(10%)';
			p_bw.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			p_bw.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			p_bw.style['overflow-x']='scroll';
			p_bw.style['overflow-y']='hidden';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(p_bw);
			p_bw.style.borderRadius='8px';
			p_bw.addEventListener('mousewheel',function(e){
				var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
				var move_s=delD>0?-30:30;
				this.scrollLeft+=move_s;
			});
			ui.arena.appendChild(p_bw);
			if(lib.config.mode_config.kzsg.zdjmdxgd!=true) p_bw.style.height=(p_bw.offsetWidth*1.2)+'px';
			_status.kzol_kzsg_divs.p_bw=p_bw;
			var p_war=ui.create.div('');
			p_war.style.width='calc(75%)';
			if(lib.config.mode_config.kzsg.zdjmdxgd==true){
				p_war.style.height='108px';
				p_war.style.bottom='calc(8.5% + 108px)';
			}else{
				p_war.style.height=(p_bw.offsetWidth*1.2)+'px';
				p_war.style.bottom='calc(8.5% + '+(p_cs.offsetHeight)+'px'+')';
			};
			p_war.style.left='calc(22.5%)';
			p_war.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			p_war.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			p_war.style['overflow-x']='scroll';
			p_war.style['overflow-y']='hidden';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(p_war);
			p_war.style.borderRadius='8px';
			p_war.addEventListener('mousewheel',function(e){
				var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
				var move_s=delD>0?-30:30;
				this.scrollLeft+=move_s;
			});
			ui.arena.appendChild(p_war);
			_status.kzol_kzsg_divs.p_war=p_war;
			var e_cs=ui.create.div('');
			if(lib.config.mode_config.kzsg.zdjmdxgd==true){
				e_cs.style.width='90px';
				e_cs.style.height='108px';
				e_cs.style['line-height']='108px';
			}else{
				e_cs.style.width='calc(10%)';
			};
			e_cs.style.left='calc(10%)';
			e_cs.style.top='calc(2.5%)';
			e_cs.style['font-size']='18px';
			e_cs.style['text-align']='center';
			e_cs.style['font-family']="'STXinwei','xinwei'";
			e_cs.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			e_cs.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			e_cs.style.borderRadius='8px';
			ui.arena.appendChild(e_cs);
			if(lib.config.mode_config.kzsg.zdjmdxgd!=true){
				e_cs.style.height=(e_cs.offsetWidth*1.2)+'px';
				e_cs.style['line-height']=e_cs.offsetHeight+'px';
			};
			e_cs.innerHTML='牌堆('+game.kzol_e_card_wait1.length+')';
			setInterval(function(){
				if(e_cs!=undefined) e_cs.innerHTML='牌堆('+game.kzol_e_card_wait1.length+')';
			},100);
			_status.kzol_kzsg_divs.e_cs=e_cs;
			var e_wait=ui.create.div('');
			e_wait.style.width='calc(62.5%)';
			e_wait.style.height=(e_cs.offsetWidth*1.2)+'px';
			e_wait.style.left='calc(22.5%)';
			e_wait.style.top='calc(2.5%)';
			e_wait.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			e_wait.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			e_wait.style['overflow-x']='scroll';
			e_wait.style['overflow-y']='hidden';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(e_wait);
			e_wait.style.borderRadius='8px';
			e_wait.addEventListener('mousewheel',function(e){
				var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
				var move_s=delD>0?-30:30;
				this.scrollLeft+=move_s;
			});
			ui.arena.appendChild(e_wait);
			_status.kzol_kzsg_divs.e_wait=e_wait;
			var e_md=ui.create.div('');
			if(lib.config.mode_config.kzsg.zdjmdxgd==true){
				e_md.style.width='90px';
				e_md.style.height='108px';
				e_md.style['line-height']='108px';
			}else{
				e_md.style.width='calc(10%)';
				e_md.style.height=(e_cs.offsetWidth*1.2)+'px';
			};
			e_md.style.left='calc(87.5%)';
			e_md.style.top='calc(2.5%)';
			e_md.style['font-size']='18px';
			e_md.style['text-align']='center';
			e_md.style['font-family']="'STXinwei','xinwei'";
			e_md.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			e_md.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			e_md.style.borderRadius='8px';
			ui.arena.appendChild(e_md);
			if(lib.config.mode_config.kzsg.zdjmdxgd!=true) e_md.style['line-height']=e_md.offsetHeight+'px';
			e_md.innerHTML='墓地('+game.kzol_e_card_md.length+')';
			setInterval(function(){
				if(e_md!=undefined) e_md.innerHTML='墓地('+game.kzol_e_card_md.length+')';
			},100);
			_status.kzol_kzsg_divs.e_md=e_md;
			var e_bw=ui.create.div('');
			if(lib.config.mode_config.kzsg.zdjmdxgd==true){
				e_bw.style.width='90px';
				e_bw.style.height='108px';
				e_bw.style.top='calc(3.5% + 108px)';
			}else{
				e_bw.style.width='calc(10%)';
				e_bw.style.top='calc(3.5% + '+(e_cs.offsetHeight)+'px'+')';
			};
			e_bw.style.left='calc(10%)';
			e_bw.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			e_bw.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			e_bw.style['overflow-x']='scroll';
			e_bw.style['overflow-y']='hidden';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(e_bw);
			e_bw.style.borderRadius='8px';
			e_bw.addEventListener('mousewheel',function(e){
				var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
				var move_s=delD>0?-30:30;
				this.scrollLeft+=move_s;
			});
			ui.arena.appendChild(e_bw);
			if(lib.config.mode_config.kzsg.zdjmdxgd!=true) e_bw.style.height=(e_bw.offsetWidth*1.2)+'px';
			_status.kzol_kzsg_divs.e_bw=e_bw;
			var e_war=ui.create.div('');
			e_war.style.width='calc(75%)';
			if(lib.config.mode_config.kzsg.zdjmdxgd==true){
				e_war.style.height='108px';
				e_war.style.top='calc(3.5% + 108px)';
			}else{
				e_war.style.height=(e_bw.offsetWidth*1.2)+'px';
				e_war.style.top='calc(3.5% + '+(e_cs.offsetHeight)+'px'+')';
			};
			e_war.style.left='calc(22.5%)';
			e_war.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			e_war.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			e_war.style['overflow-x']='scroll';
			e_war.style['overflow-y']='hidden';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(e_war);
			e_war.style.borderRadius='8px';
			e_war.addEventListener('mousewheel',function(e){
				var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
				var move_s=delD>0?-30:30;
				this.scrollLeft+=move_s;
			});
			ui.arena.appendChild(e_war);
			_status.kzol_kzsg_divs.e_war=e_war;
			var vs=ui.create.div('');
			vs.style.height='30px';
			vs.style.width='300px';
			vs.style.left='calc(57.5% - 150px)';
			vs.style.top='calc(45%)';
			vs.style['font-size']='30px';
			vs.style['text-align']='center';
			vs.style['font-family']="'STXinwei','xinwei'";
			vs.style['line-height']='30px';
			vs.style.borderRadius='8px';
			ui.arena.appendChild(vs);
			vs.innerHTML='第'+game.roundNumber+'轮';
			setInterval(function(){
				if(game.roundNumber!=undefined&&vs!=undefined){
					vs.innerHTML='第'+game.roundNumber+'轮';
					if(_status.kzol_kzsg_roundCount!=undefined){
						if(_status.kzol_kzsg_isMoving==true){
							vs.innerHTML=vs.innerHTML+'(卡牌移动中)';
						}else{
							vs.innerHTML=vs.innerHTML+'('+_status.kzol_kzsg_roundCount+'s)';
						};
					};
				};
			},200);
			_status.kzol_kzsg_divs.vs=vs;
			ui.arena.delete();
			
			
			
			var list_battle_name=[];
			var list_battle=[];
			for(var i in lib.kzol_kzsg_battle){
				var battle=lib.kzol_kzsg_battle[i];
				list_battle_name.push(i);
				list_battle.push(battle);
				game.kzol_loadImage(lib.assetURL+'extension/扩展ol/'+i+'.png');
			};
			game.kzol_loadImage(lib.assetURL+'extension/扩展ol/jjc.png');
			for(var i in lib.kzol_kzsg_card){
				var card=lib.kzol_kzsg_card[i];
				var url=lib.assetURL+'extension/扩展ol/'+card.name+'.jpg';
				if(card.image!=undefined) url=lib.assetURL+'extension/扩展ol/kzsg_image/'+card.image;
				game.kzol_loadImage(url);
			};
			game.kzol_loadImage(lib.assetURL+"extension/扩展ol/框.png");
			
			
			_status.kzol_kzsg_dialogs1={};
			_status.kzol_kzsg_divs1={};
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='500px';
			dialog.style.width='720px';
			dialog.style.left='calc(50% - 360px)';
			dialog.style.top='calc(50% - 250px)';
			dialog.classList.add('popped');
			dialog.classList.add('static');
			dialog.style.animation='fadeInDown .3s';
			dialog.style['-webkit-animation']='fadeInDown .3s';
			_status.kzol_kzsg_dialogs1.dialog=dialog;
			var avatar=ui.create.div('.player');
			avatar.style.cursor='pointer';
			avatar.onclick=function(){
				if(_status.kzol_kzsg_divs1_avatar_click==undefined) _status.kzol_kzsg_divs1_avatar_click=0;
				_status.kzol_kzsg_divs1_avatar_click++;
				setTimeout(function(){
					if(_status.kzol_kzsg_divs1_avatar_click>=2){
						game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs1);
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs3);
					};
					delete _status.kzol_kzsg_divs1_avatar_click;
				},350);
			};
			avatar.style.width='290px';
			avatar.style.height='330px';
			avatar.style.left='30px';
			avatar.style.top='10px';
			if(lib.config.kzol_kzsg.avatar!=undefined) avatar.setBackground(lib.config.kzol_kzsg.avatar,'character');
			dialog.appendChild(avatar);
			_status.kzol_kzsg_divs1.avatar=avatar;
			var name=ui.create.div('','<span style="font-family:xinwei;font-size:35px;cursor:pointer;">'+lib.config.kzol_kzsg.name+'</span>');
			name.onclick=function(){
				game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs1);
				game.kzol_dialogs_open(_status.kzol_kzsg_dialogs2);
			};
			name.style.width='35px';
			name.style.height=(avatar.offsetHeight-20)+'px';
			name.style.left='10px';
			name.style.top='10px';
			avatar.appendChild(name);
			_status.kzol_kzsg_divs1.name=name;
			var zy=ui.create.div('.menubutton.large','<span style="cursor:pointer;">战役</span>');
			zy.onclick=function(){
				game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs1);
				if(_status.kzol_kzsg_divs9.battle_div.link!=undefined){
					var name=list_battle_name[_status.kzol_kzsg_divs9.battle_div.link];
					if(name!=undefined) ui.background.setBackgroundImage('extension/扩展ol/'+name+'.png');
				};
				game.kzol_dialogs_show(_status.kzol_kzsg_dialogs9);
			};
			zy.style.width='150px';
			zy.style.height='30px';
			zy.style.left='355px';
			zy.style.top='40px';
			zy.style.cursor='pointer';
			dialog.appendChild(zy);
			game.kzol_kzsg_clickFk(zy);
			_status.kzol_kzsg_divs1.zy=zy;
			var tz=ui.create.div('.menubutton.large','<span style="cursor:pointer;">挑战</span>');
			tz.onclick=function(){
				game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs1);
				game.kzol_openMode('tz');
			};
			tz.style.width='150px';
			tz.style.height='30px';
			tz.style.left='525px';
			tz.style.top='40px';
			tz.style.cursor='pointer';
			dialog.appendChild(tz);
			game.kzol_kzsg_clickFk(tz);
			_status.kzol_kzsg_divs1.tz=tz;
			var jd=ui.create.div('.menubutton.large','<span style="cursor:pointer;">军队</span>');
			jd.onclick=function(){
				game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs1);
				delete _status.kzol_kzsg_changeCK1;
				game.kzol_dialogs_show(_status.kzol_kzsg_dialogs6);
			};
			jd.style.width='150px';
			jd.style.height='30px';
			jd.style.left='355px';
			jd.style.top='90px';
			jd.style.cursor='pointer';
			dialog.appendChild(jd);
			game.kzol_kzsg_clickFk(jd);
			_status.kzol_kzsg_divs1.jd=jd;
			var sd=ui.create.div('.menubutton.large','<span style="cursor:pointer;">商店</span>');
			sd.onclick=function(){
				if(_status!=undefined&&_status.kzol_kzsg_divs11!=undefined&&_status.kzol_kzsg_divs11.a_div!=undefined) _status.kzol_kzsg_divs11.a_div.onclick();
				game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs1);
				game.kzol_dialogs_show(_status.kzol_kzsg_dialogs11);
			};
			sd.style.width='150px';
			sd.style.height='30px';
			sd.style.left='525px';
			sd.style.top='90px';
			sd.style.cursor='pointer';
			dialog.appendChild(sd);
			game.kzol_kzsg_clickFk(sd);
			_status.kzol_kzsg_divs1.sd=sd;
			var hc=ui.create.div('.menubutton.large','<span style="cursor:pointer;">合成</span>');
			hc.onclick=function(){
				game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs1);
				game.kzol_dialogs_show(_status.kzol_kzsg_dialogs14);
			};
			hc.style.width='150px';
			hc.style.height='30px';
			hc.style.left='355px';
			hc.style.top='140px';
			hc.style.cursor='pointer';
			dialog.appendChild(hc);
			game.kzol_kzsg_clickFk(hc);
			_status.kzol_kzsg_divs1.hc=hc;
			var jj=ui.create.div('.menubutton.large','<span style="cursor:pointer;">破阵</span>');
			jj.onclick=function(){
				/*if(lib.device){
					game.say1('移动端无法进入');
					return ;
				};*/
				game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs1);
				ui.background.setBackgroundImage('extension/扩展ol/jjc.png');
				game.kzol_dialogs_show(_status.kzol_kzsg_dialogs16);
			};
			jj.style.width='150px';
			jj.style.height='30px';
			jj.style.left='525px';
			jj.style.top='140px';
			jj.style.cursor='pointer';
			dialog.appendChild(jj);
			game.kzol_kzsg_clickFk(jj);
			_status.kzol_kzsg_divs1.jj=jj;
			var army_choose=ui.create.div('.menu');
			army_choose.style.width='330px';
			army_choose.style.height='120px';
			army_choose.style.left='355px';
			army_choose.style.top='205px';
			army_choose.style['overflow-x']='scroll';
			army_choose.style['overflow-y']='hidden';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(army_choose);
			//army_choose.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			//army_choose.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			army_choose.style.borderRadius='8px';
			army_choose.addEventListener('mousewheel',function(e){
				var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
				var move_s=delD>0?-30:30;
				this.scrollLeft+=move_s;
			});
			dialog.appendChild(army_choose);
			_status.kzol_kzsg_divs1.army_choose=army_choose;
			var army_detail=ui.create.div('.menu');
			army_detail.style.width='calc(100%)';
			army_detail.style.height='150px';
			army_detail.style.left='0px';
			army_detail.style.bottom='0px';
			army_detail.style['text-align']='left';
			army_detail.style['overflow-x']='hidden';
			army_detail.style['overflow-y']='scroll';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(army_detail);
			//army_detail.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			//army_detail.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			army_detail.style.borderRadius='8px';
			dialog.appendChild(army_detail);
			setInterval(function(){
				if(_status.kzol_kzsg_changeCK1!=true){
					_status.kzol_kzsg_divs1_army_divs_num=0;
					army_choose.scrollLeft=0;
					var num=0;
					for(var i=0;i<army_choose.childNodes.length;i++){
						num++
					};
					for(var i=0;i<num;i++){
						army_choose.removeChild(army_choose.childNodes[0]);
					};
					var num=0;
					for(var i=0;i<army_detail.childNodes.length;i++){
						num++
					};
					for(var i=0;i<num;i++){
						army_detail.removeChild(army_detail.childNodes[0]);
					};
					for(var i in lib.config.kzol_kzsg.army){
						var cards=lib.config.kzol_kzsg.army[i].leader;
						var list=[];
						for(var x in cards){
							list.push(lib.config.kzol_kzsg.card[cards[x]]);
						};
						var card=list[0];
						if(card==undefined) continue;
						var army_div=ui.create.div('.player');
						army_div.style.width='90px';
						army_div.style.height='105px';
						army_div.style.left=(15+105*(_status.kzol_kzsg_divs1_army_divs_num))+'px';
						army_div.style.top='7.5px';
						army_div.style.cursor='-webkit-zoom-in';
						army_div.link=i;
						army_div.link1=lib.config.kzol_kzsg.army[i];
						army_div.link2=card;
						army_div.onmouseover=function(){
							var num=0;
							for(var i=0;i<army_detail.childNodes.length;i++){
								num++
							};
							for(var i=0;i<num;i++){
								army_detail.removeChild(army_detail.childNodes[0]);
							};
							var avatar=_status.kzol_kzsg_divs6.avatar;
							var name=_status.kzol_kzsg_divs6.name;
							var army_num=this.link;
							var army=this.link1;
							var card=this.link2;
							name.innerHTML='<span style="font-family:xinwei;font-size:35px;cursor:pointer;">'+army.name+'</span>';
							name.link=army_num;
							avatar.setBackground(card.name+card.quailty,'character');
							var list3=[];
							for(var j in army.leader){
								list3.push(army.leader[j]);
							};
							for(var j in army.number){
								list3.push(army.number[j]);
							};
							for(var i=0;i<list3.length;i++){
								var card1=lib.config.kzol_kzsg.card[list3[i]];
								var card_div=ui.create.button(card1.name+card1.quailty,'character');
								game.changeButtonInfo(card_div,list3[i]);
								card_div.style.width='90px';
								card_div.style.height='120px';
								card_div.style.left='2.5px';
								card_div.style.top='10px';
								card_div.link=card1.name+card1.quailty;
								army_detail.appendChild(card_div);
							};
						};
						army_div.setBackground(card.name+card.quailty,'character');
						army_choose.appendChild(army_div);
						var army_div_name=ui.create.div('');
						army_div_name.style.width='15px';
						army_div_name.style.height=(army_div.offsetHeight-10)+'px';
						army_div_name.style.left='5px';
						army_div_name.style.top='5px';
						army_div_name.style['font-size']='15px';
						army_div_name.style['font-family']="'STXinwei','xinwei'";
						army_div_name.innerHTML=lib.config.kzol_kzsg.army[i].name;
						army_div.appendChild(army_div_name);
						_status.kzol_kzsg_divs1_army_divs_num++;
					};
				};
			},50);
			zy.style.top='20px';
			tz.style.top='20px';
			jd.style.top='70px';
			sd.style.top='70px';
			hc.style.top='120px';
			jj.style.top='120px';
			army_choose.style.top='220px';
			var diy=ui.create.div('.menubutton.large','<span style="cursor:pointer;">DIY</span>');
			diy.onclick=function(){
				/*
				var chapter=[];
				var battle=[];
				for(var i in lib.config.kzol_kzsg.battle){
					chapter.push(i);
				};
				for(var j in lib.config.kzol_kzsg.battle[chapter[chapter.length-1]]){
					battle.push(j);
				};
				if(lib.config.kzol_kzsg.battle[chapter[chapter.length-1]][battle.length]==false){
					game.say1('通关战役后开启');
					return ;
				};
				*/
				game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs1);
				game.kzol_dialogs_show(_status.kzol_kzsg_dialogs23);
			};
			diy.style.width='150px';
			diy.style.height='30px';
			diy.style.left='355px';
			diy.style.top='170px';
			diy.style.cursor='pointer';
			dialog.appendChild(diy);
			game.kzol_kzsg_clickFk(diy);
			_status.kzol_kzsg_divs1.diy=diy;
			if(!lib.device){
				var pk=ui.create.div('.menubutton.large','<span style="cursor:pointer;">竞技</span>');
				pk.onclick=function(){
					if(_status.kzsg_mysql==undefined) game.connectMysql();
					game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs1);
					ui.background.setBackgroundImage('extension/扩展ol/jjc.png');
					game.kzol_dialogs_show(_status.kzol_kzsg_dialogs18);
					//game.say1('暂时关闭');
				};
				pk.style.width='150px';
				pk.style.height='30px';
				pk.style.left='525px';
				pk.style.top='170px';
				pk.style.cursor='pointer';
				dialog.appendChild(pk);
				game.kzol_kzsg_clickFk(pk);
				_status.kzol_kzsg_divs1.pk=pk;
			};
			_status.kzol_kzsg_divs1.army_detail=army_detail;
			game.kzol_dialogs_open(_status.kzol_kzsg_dialogs1);
			
			_status.kzol_kzsg_dialogs2={};
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='150px';
			dialog.style.width='300px';
			dialog.style.top='calc(50% - 75px)';
			dialog.style.left='calc(50% - 150px)';
			dialog.setBackgroundImage('extension/扩展ol/Background3.jpg');
			dialog.style.backgroundSize="100% 100%";
			dialog.classList.add('popped');
			dialog.classList.add('static');
			dialog.style.animation='fadeInDown .3s';
			dialog.style['-webkit-animation']='fadeInDown .3s';
			_status.kzol_kzsg_dialogs2.dialog=dialog;
			var div=ui.create.div('','<span style="font-size:30px;color:white;text-shadow:black 0 0 2px;font-weight:600;font-family:xinwei">更改名称</span><br><br><input type="text" id="kzsg_name">');
			div.style.width='300px';
			dialog.add(div);
			var div1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">确认</span>',function(){
				var name=document.getElementById('kzsg_name').value;
				if(name==undefined||name.length==0){
					game.say1('请填入名称');
					return ;
				};
				if(_status.kzol_kzsg_editArmyName!=undefined){
					lib.config.kzol_kzsg.army[_status.kzol_kzsg_editArmyName].name=name;
					game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
					delete _status.kzol_kzsg_changeCK1;
					game.say1('更改名称成功');
					game.kzol_dialogs_delete(_status.kzol_kzsg_dialogs2);
					game.kzol_dialogs_show(_status.kzol_kzsg_dialogs6);
					delete _status.kzol_kzsg_editArmyName;
				}else{
					lib.config.kzol_kzsg.name=name;
					game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
					_status.kzol_kzsg_divs1.name.innerHTML='<span style="font-family:xinwei;font-size:35px;cursor:pointer;">'+name+'</span>';
					game.say1('更改名称成功');
					game.kzol_dialogs_delete(_status.kzol_kzsg_dialogs2);
					game.kzol_dialogs_show(_status.kzol_kzsg_dialogs1);
				};
				document.getElementById('kzsg_name').value='';
			});
			div1.style.left='-35px'
			dialog.add(div1);
			game.kzol_kzsg_clickFk(div1);
			var div2=ui.create.div('.menubutton.large','<span style="cursor:pointer;">返回</span>',function(){
				game.kzol_dialogs_delete(_status.kzol_kzsg_dialogs2);
				if(_status.kzol_kzsg_editArmyName!=undefined){
					game.kzol_dialogs_show(_status.kzol_kzsg_dialogs6);
					delete _status.kzol_kzsg_editArmyName;
				}else{
					game.kzol_dialogs_show(_status.kzol_kzsg_dialogs1);
				};
				document.getElementById('kzsg_name').value='';
			});
			div2.style.left='35px'
			dialog.add(div2);
			game.kzol_kzsg_clickFk(div2);
			
			_status.kzol_kzsg_dialogs3={};
			var background=ui.create.dialog('hidden');
			background.style.height='calc(100%)';
			background.style.width='calc(100%)';
			background.style.left='0px';
			background.style.top='0px';
			background.style['zIndex']=0;
			_status.kzol_kzsg_dialogs3.background=background;
			var div1=ui.create.div();
			div1.style.height='2000px';
			div1.style.width='2000px';
			div1.style.left='-10px';
			div1.style.top='-10px';
			setTimeout(function(){
				div1.onclick=function(){
					game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs3);
					game.kzol_dialogs_show(_status.kzol_kzsg_dialogs1);
				};
			},500);
			background.add(div1);
			var b1=ui.create.characterDialog('heightset');
			b1.style.height='calc(85%)';
			b1.style.width='calc(90%)';
			b1.style.top='calc(15%)';
			b1.style.left='calc(5%)';
			b1.style.animation='fadeShow .3s';
			b1.style['-webkit-animation']='fadeShow .3s';
			_status.kzol_kzsg_dialogs3.b1=b1;
			for(var i=0;i<b1.buttons.length;i++){
				var button=b1.buttons[i];
				button.style.cursor='pointer';
				button.onclick=function(){
					var name=this.link;
					if(lib.character[name]!=undefined&&lib.character[name][2]=='未解锁') return;
					if(_status.kzol_kzsg_clicknum1a==undefined) _status.kzol_kzsg_clicknum1a=0;
					_status.kzol_kzsg_clicknum1a++;
					_status.kzol_kzsg_clicknum1a_timeout=setTimeout(function(){
						if(_status.kzol_kzsg_clicknum1a>=2){
							lib.config.kzol_kzsg.avatar=name;
							game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
							_status.kzol_kzsg_divs1.avatar.setBackground(name,'character');
							game.say1('更换头像成功');
							game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs3);
							game.kzol_dialogs_show(_status.kzol_kzsg_dialogs1);
						};
						clearTimeout(_status.kzol_kzsg_clicknum1a_timeout);
						delete _status.kzol_kzsg_clicknum1a;
						delete _status.kzol_kzsg_clicknum1a_timeout;
					},250);
				};
			};
			var t1=ui.create.dialog('hidden');
			t1.style.height='30px';
			t1.style.width='calc(90%)';
			t1.style.top='calc(10% - 15px)';
			t1.style.left='calc(5%)';
			t1.style['font-size']='30px';
			t1.style['text-align']='center';
			t1.style['font-family']="'STXinwei','xinwei'";
			t1.style['line-height']='30px';
			t1.style.animation='fadeShow .3s';
			t1.style['-webkit-animation']='fadeShow .3s';
			t1.innerHTML='更换头像（双击选择）';
			_status.kzol_kzsg_dialogs3.t1=t1;
			game.kzol_dialogs_open(_status.kzol_kzsg_dialogs3);
			game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs3);
			
			_status.kzol_kzsg_dialogs4={};
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='100px';
			dialog.style.width='200px';
			dialog.style.top='calc(50% - 50px)';
			dialog.style.left='calc(50% - 100px)';
			dialog.setBackgroundImage('extension/扩展ol/Background3.jpg');
			dialog.style.backgroundSize="100% 100%";
			dialog.classList.add('popped');
			dialog.classList.add('static');
			dialog.style.animation='fadeInDown .3s';
			dialog.style['-webkit-animation']='fadeInDown .3s';
			_status.kzol_kzsg_dialogs4.dialog=dialog;
			var div=ui.create.div('','<span style="font-size:30px;color:white;text-shadow:black 0 0 2px;font-weight:600;font-family:xinwei">我军胜利</span>');
			div.style.width='180px';
			dialog.add(div);
			var div2=ui.create.div('.menubutton.large','<span style="cursor:pointer;">确认</span>',function(){
				if(_status.kzol_kzsg_onSC2==true){
					game.say1('请等待数据上传完成');
					return ;
				};
				game.kzol_clearWar();
				ui.arena.delete();
				setTimeout(function(){
					game.kzol_dialogs_delete(_status.kzol_kzsg_dialogs4);
					if(_status.kzol_kzsg_onJJC!=undefined){
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs16);
						delete _status.kzol_kzsg_onJJC;
					}else if(_status.kzol_kzsg_onPKC!=undefined){
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs18);
						delete _status.kzol_kzsg_onPKC;
						delete _status.kzol_kzsg_PKC_pm;
						delete _status.kzol_kzsg_PKC_name;
					}else if(_status.kzol_kzsg_onWJbattle!=undefined){
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs21);
						delete _status.kzol_kzsg_onWJbattle;
					}else if(_status.kzol_kzsg_onBoss!=undefined){
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs22);
						delete _status.kzol_kzsg_onBoss;
					}else{
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs9);
					};
				},350);
			});
			dialog.add(div2);
			game.kzol_kzsg_clickFk(div2);
			
			_status.kzol_kzsg_dialogs5={};
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='100px';
			dialog.style.width='200px';
			dialog.style.top='calc(50% - 50px)';
			dialog.style.left='calc(50% - 100px)';
			dialog.setBackgroundImage('extension/扩展ol/Background3.jpg');
			dialog.style.backgroundSize="100% 100%";
			dialog.classList.add('popped');
			dialog.classList.add('static');
			dialog.style.animation='fadeInDown .3s';
			dialog.style['-webkit-animation']='fadeInDown .3s';
			_status.kzol_kzsg_dialogs5.dialog=dialog;
			var div=ui.create.div('','<span style="font-size:30px;color:white;text-shadow:black 0 0 2px;font-weight:600;font-family:xinwei">敌军胜利</span>');
			div.style.width='180px';
			dialog.add(div);
			var div2=ui.create.div('.menubutton.large','<span style="cursor:pointer;">确认</span>',function(){
				if(_status.kzol_kzsg_onSC2==true){
					game.say1('请等待数据上传完成');
					return ;
				};
				game.kzol_clearWar();
				ui.arena.delete();
				setTimeout(function(){
					game.kzol_dialogs_delete(_status.kzol_kzsg_dialogs5);
					if(_status.kzol_kzsg_onJJC!=undefined){
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs16);
						delete _status.kzol_kzsg_onJJC;
					}else if(_status.kzol_kzsg_onPKC!=undefined){
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs18);
						delete _status.kzol_kzsg_onPKC;
						delete _status.kzol_kzsg_PKC_pm;
						delete _status.kzol_kzsg_PKC_name;
					}else if(_status.kzol_kzsg_onWJbattle!=undefined){
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs21);
						delete _status.kzol_kzsg_onWJbattle;
					}else if(_status.kzol_kzsg_onBoss!=undefined){
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs22);
						delete _status.kzol_kzsg_onBoss;
					}else{
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs9);
					};
				},350);
			});
			dialog.add(div2);
			game.kzol_kzsg_clickFk(div2);
			
			_status.kzol_kzsg_dialogs8={};
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='100px';
			dialog.style.width='200px';
			dialog.style.top='calc(50% - 50px)';
			dialog.style.left='calc(50% - 100px)';
			dialog.setBackgroundImage('extension/扩展ol/Background3.jpg');
			dialog.style.backgroundSize="100% 100%";
			dialog.classList.add('popped');
			dialog.classList.add('static');
			dialog.style.animation='fadeInDown .3s';
			dialog.style['-webkit-animation']='fadeInDown .3s';
			_status.kzol_kzsg_dialogs8.dialog=dialog;
			var div=ui.create.div('','<span style="font-size:30px;color:white;text-shadow:black 0 0 2px;font-weight:600;font-family:xinwei">难分难解</span>');
			div.style.width='180px';
			dialog.add(div);
			var div2=ui.create.div('.menubutton.large','<span style="cursor:pointer;">确认</span>',function(){
				if(_status.kzol_kzsg_onSC2==true){
					game.say1('请等待数据上传完成');
					return ;
				};
				game.kzol_clearWar();
				ui.arena.delete();
				setTimeout(function(){
					game.kzol_dialogs_delete(_status.kzol_kzsg_dialogs8);
					if(_status.kzol_kzsg_onJJC!=undefined){
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs16);
						delete _status.kzol_kzsg_onJJC;
					}else if(_status.kzol_kzsg_onPKC!=undefined){
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs18);
						delete _status.kzol_kzsg_onPKC;
						delete _status.kzol_kzsg_PKC_pm;
						delete _status.kzol_kzsg_PKC_name;
					}else if(_status.kzol_kzsg_onWJbattle!=undefined){
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs21);
						delete _status.kzol_kzsg_onWJbattle;
					}else if(_status.kzol_kzsg_onBoss!=undefined){
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs22);
						delete _status.kzol_kzsg_onBoss;
					}else{
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs9);
					};
				},350);
			});
			dialog.add(div2);
			game.kzol_kzsg_clickFk(div2);
			
			_status.kzol_kzsg_dialogs6={};
			_status.kzol_kzsg_divs6={};
			var background=ui.create.dialog('hidden');
			background.style.height='calc(100%)';
			background.style.width='calc(100%)';
			background.style.left='0px';
			background.style.top='0px';
			background.style['zIndex']=0;
			_status.kzol_kzsg_dialogs6.background=background;
			var div3=ui.create.div();
			div3.style.height='2000px';
			div3.style.width='2000px';
			div3.style.left='-10px';
			div3.style.top='-10px';
			setTimeout(function(){
				div3.onclick=function(){
					var army_show=_status.kzol_kzsg_divs21.army_show;
					var num=0;
					for(var i=0;i<army_show.childNodes.length;i++){
						num++;
					};
					for(var i=0;i<num;i++){
						army_show.removeChild(army_show.childNodes[0]);
					};
					if(_status.kzol_kzsg_onSC==true){
						game.say1('请等待数据上传完成');
						return ;
					};
					if(_status.kzol_kzsg_onChooseArmy_wj==undefined) game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs6);
					if(_status.kzol_kzsg_onChoosePKArmy!=undefined){
						delete _status.kzol_kzsg_onChoosePKArmy;
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs19);
					}else if(_status.kzol_kzsg_onChooseArmy_wj!=undefined){
						if(_status.kzol_kzsg_army_wj!=undefined&&_status.kzol_kzsg_army_wj.length>0){
							if(confirm('是否以当前选择军队来进行无尽模式？\n注：编辑含有正在进行无尽模式卡牌的军队时无法选择不处于无尽模式的卡牌')){
								lib.config.kzol_kzsg.wuZL=5;
								game.kzol_changeDXL(1);
								lib.config.kzol_kzsg.army_wj={};
								lib.config.kzol_kzsg.army_wj_num=_status.kzol_kzsg_army_wj.length;
								for(var i=0;i<_status.kzol_kzsg_army_wj.length;i++){
									var army=lib.config.kzol_kzsg.army[_status.kzol_kzsg_army_wj[i]];
									lib.config.kzol_kzsg.army[_status.kzol_kzsg_army_wj[i]].onWJ=true;
									lib.config.kzol_kzsg.army_wj[i]=army;
									for(var j in army.leader){
										lib.config.kzol_kzsg.card[army.leader[j]].onWJ=true;
										lib.config.kzol_kzsg.card[army.leader[j]].hp_wj=lib.config.kzol_kzsg.card[army.leader[j]].hp;
										lib.config.kzol_kzsg.card[army.leader[j]].attack_wj=lib.config.kzol_kzsg.card[army.leader[j]].attack;
										lib.config.kzol_kzsg.card[army.leader[j]].prepareRound_wj=lib.config.kzol_kzsg.card[army.leader[j]].prepareRound;
									};
									for(var j in army.number){
										lib.config.kzol_kzsg.card[army.number[j]].onWJ=true;
										lib.config.kzol_kzsg.card[army.number[j]].hp_wj=lib.config.kzol_kzsg.card[army.number[j]].hp;
										lib.config.kzol_kzsg.card[army.number[j]].attack_wj=lib.config.kzol_kzsg.card[army.number[j]].attack;
										lib.config.kzol_kzsg.card[army.number[j]].prepareRound_wj=lib.config.kzol_kzsg.card[army.number[j]].prepareRound;
									};
								};
								game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
								game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs6);
								delete _status.kzol_kzsg_onChooseArmy_wj;
								delete _status.kzol_kzsg_army_wj;
								delete _status.kzol_kzsg_changeWJArmy;
								delete _status.kzol_kzsg_changeCK1;
								game.kzol_changeEnemy_wj(lib.config.kzol_kzsg.army_wj_num);
								_status.kzol_kzsg_divs21.info_wj_start.style.display='';
								_status.kzol_kzsg_divs21.info_wj_info.style.display='';
								game.kzol_dialogs_show(_status.kzol_kzsg_dialogs21);
							};
						}else{
							game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs6);
							delete _status.kzol_kzsg_onChooseArmy_wj;
							game.kzol_dialogs_show(_status.kzol_kzsg_dialogs21);
						};
					}else if(_status.kzol_kzsg_onEditArmy_wj!=undefined){
						delete _status.kzol_kzsg_onEditArmy_wj;
						delete _status.kzol_kzsg_changeCK1;
						delete _status.kzol_kzsg_changeCK;
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs21);
					}else{
						if(_status.kzol_kzsg_onChooseArmy==undefined){
							game.kzol_dialogs_show(_status.kzol_kzsg_dialogs1);
						}else{
							delete _status.kzol_kzsg_onChooseArmy;
							game.kzol_dialogs_show(_status.kzol_kzsg_dialogs10);
						};
					};
				};
			},750);
			_status.kzol_kzsg_divs6.div3=div3;
			background.add(div3);
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='500px';
			dialog.style.width='720px';
			dialog.style.left='calc(50% - 355px)';
			dialog.style.top='calc(50% - 250px)';
			dialog.classList.add('popped');
			dialog.classList.add('static');
			dialog.style.animation='fadeInDown .3s';
			dialog.style['-webkit-animation']='fadeInDown .3s';
			_status.kzol_kzsg_dialogs6.dialog=dialog;
			var avatar=ui.create.div('.player');
			avatar.style.width='250px';
			avatar.style.height='300px';
			avatar.style.left='30px';
			avatar.style.top='25px';
			dialog.appendChild(avatar);
			_status.kzol_kzsg_divs6.avatar=avatar;
			var name=ui.create.div('');
			name.style.width='35px';
			name.style.height=(avatar.offsetHeight-20)+'px';
			name.style.left='10px';
			name.style.top='10px';
			name.onclick=function(){
				if(_status.kzol_kzsg_onChooseArmy!=undefined){
					game.say1('选择军队时无法修改军队名称');
					return ;
				};
				var name1=this.link;
				if(name1!=undefined){
					_status.kzol_kzsg_editArmyName=name1;
					game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs6);
					game.kzol_dialogs_open(_status.kzol_kzsg_dialogs2);
				};
			};
			avatar.appendChild(name);
			_status.kzol_kzsg_divs6.name=name;
			var army_divs=ui.create.div('.menu');
			army_divs.style.width='390px';
			army_divs.style.height='300px';
			army_divs.style.left='300px';
			army_divs.style.top='25px';
			army_divs.style['overflow-x']='hidden';
			army_divs.style['overflow-y']='scroll';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(army_divs);
			//army_divs.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			//army_divs.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			army_divs.style.borderRadius='8px';
			dialog.appendChild(army_divs);
			_status.kzol_kzsg_divs6.army_divs=army_divs;
			var army_divs1=ui.create.div('.menu');
			army_divs1.style.width='calc(100%)';
			army_divs1.style.height='150px';
			army_divs1.style.left='0px';
			army_divs1.style.bottom='0px';
			army_divs1.style['text-align']='left';
			army_divs1.style['overflow-x']='hidden';
			army_divs1.style['overflow-y']='scroll';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(army_divs1);
			//army_divs1.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			//army_divs1.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			army_divs1.style.borderRadius='8px';
			dialog.appendChild(army_divs1);
			_status.kzol_kzsg_divs6.army_divs1=army_divs1;
			setInterval(function(){
				if(_status.kzol_kzsg_changeCK1!=true){
					_status.kzol_kzsg_divs6_army_divs_num=0;
					var num=0;
					for(var i=0;i<army_divs.childNodes.length;i++){
						num++
					};
					for(var i=0;i<num;i++){
						army_divs.removeChild(army_divs.childNodes[0]);
					};
					var num=0;
					for(var i=0;i<army_divs1.childNodes.length;i++){
						num++
					};
					for(var i=0;i<num;i++){
						army_divs1.removeChild(army_divs1.childNodes[0]);
					};
					avatar.style.background='';
					name.innerHTML='';
					for(var i in lib.config.kzol_kzsg.army){
						if(_status.kzol_kzsg_onEditArmy_wj!=undefined&&lib.config.kzol_kzsg.army[i].onWJ==undefined) continue; 
						var cards=lib.config.kzol_kzsg.army[i].leader;
						var list=[];
						for(var x in cards){
							list.push(lib.config.kzol_kzsg.card[cards[x]]);
						};
						var card=list[0];
						if(card==undefined) continue;
						var army_div=ui.create.div('.player');
						army_div.style.width='90px';
						army_div.style.height='105px';
						army_div.style.left=(7.5+95*(_status.kzol_kzsg_divs6_army_divs_num%4))+'px';
						army_div.style.top=(7.5+112.5*Math.floor(_status.kzol_kzsg_divs6_army_divs_num/4))+'px';
						army_div.style['cursor']='pointer';
						army_div.link=i;
						army_div.link1=lib.config.kzol_kzsg.army[i];
						army_div.link2=card;
						army_div.onclick=function(){
							var army_div=this;
							var army_num=this.link;
							var army=this.link1;
							var card=this.link2;
							if(_status.kzol_kzsg_clickNum==undefined) _status.kzol_kzsg_clickNum=0;
							_status.kzol_kzsg_clickNum++;
							setTimeout(function(){
								if(_status.kzol_kzsg_onSC==true){
									game.say1('请等待数据上传完成');
									return ;
								};
								if((_status.kzol_kzsg_clickNum==1&&
								_status.kzol_kzsg_onChooseArmy==undefined&&
								_status.kzol_kzsg_onChoosePKArmy==undefined&&
								_status.kzol_kzsg_onChooseArmy_wj==undefined)||
								(_status.kzol_kzsg_clickNum>1)){
									game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs6);
									game.kzol_dialogs_show(_status.kzol_kzsg_dialogs7);
									_status.kzol_kzsg_editOld=true;
									delete _status.kzol_kzsg_changeCK;
									_status.kzol_kzsg_onEditNum=army_num;
								};
								if(_status.kzol_kzsg_clickNum==1&&_status.kzol_kzsg_onChooseArmy!=undefined){
									if(game.kzol_cheekArmy(army_num)&&_status.kzol_kzsg_onPKC==true){
										game.say1('该军队中有禁用卡牌，无法进入竞技场');
										delete _status.kzol_kzsg_clickNum;
										return ;
									};
									if(_status.kzol_kzsg_armyToBattle.contains(army_num)){
										game.say1('这支军队已被选择');
									}else{
										if(_status.kzol_kzsg_armyToBattle[_status.kzol_kzsg_onChooseArmy]==undefined){
											_status.kzol_kzsg_armyToBattle.push(army_num);
										}else{
											_status.kzol_kzsg_armyToBattle[_status.kzol_kzsg_onChooseArmy]=army_num;
										};
										delete _status.kzol_kzsg_changeCA;
										game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs6);
										delete _status.kzol_kzsg_onChooseArmy;
										game.kzol_dialogs_show(_status.kzol_kzsg_dialogs10);
									};
								};
								if(_status.kzol_kzsg_clickNum==1&&_status.kzol_kzsg_onChoosePKArmy!=undefined){
									if(game.kzol_cheekArmy(army_num)){
										game.say1('该军队中有禁用卡牌，无法进入竞技场');
										delete _status.kzol_kzsg_clickNum;
										return ;
									};
									_status.kzol_kzsg_onSC=true;
									var sj=game.kzol_changeTobattle1(army_num);
									sj=JSON.stringify(sj);
									_status.kzsg_mysql_onLoad=true;
									var interval_func;
									var interval=setInterval(interval_func,1000);
									interval_func=function(){
										if(_status.kzsg_mysql!=undefined){
											clearInterval(interval);
											_status.kzsg_mysql.query('UPDATE 数据 SET 军队'+_status.kzol_kzsg_onChoosePKArmy+'='+"'"+sj+"'"+
											' WHERE 用户="'+lib.config.kzol_kzsg.user+'"',function(err,result){
												if(err){
													alert('上传失败（'+err+'）');
												}else{
													var yh_num;
													for(var i=0;i<_status.kzsg_mysql_users.length;i++){
														if(_status.kzsg_mysql_users[i].用户==lib.config.kzol_kzsg.user) yh_num=i;
													};
													if(yh_num!=undefined&&_status.kzsg_mysql_users[yh_num].排名<=0){
														var pm_num=1;
														for(var i=0;i<_status.kzsg_mysql_users.length;i++){
															if(_status.kzsg_mysql_users[i].排名>0) pm_num++;
														};
														_status.kzsg_mysql.query('UPDATE 数据 SET 排名='+pm_num+
														' WHERE 用户="'+lib.config.kzol_kzsg.user+'"',function(err,result){
															if(err){
																alert('更新排名失败（'+err+'）');
															}else{
																game.say1('更新排名成功');
																game.re_connectMysql();
															};
															delete _status.kzol_kzsg_onSC;
														});
													};
													game.say1('上传成功');
													game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs6);
													delete _status.kzol_kzsg_onChoosePKArmy;
													game.kzol_dialogs_show(_status.kzol_kzsg_dialogs19);
													game.re_connectMysql();
												};
												delete _status.kzol_kzsg_onSC;
												delete _status.kzsg_mysql_onLoad;
											});
										};
									};
									interval_func();
								};
								if(_status.kzol_kzsg_clickNum==1&&_status.kzol_kzsg_onChooseArmy_wj!=undefined){
									if(_status.kzol_kzsg_army_wj==undefined) _status.kzol_kzsg_army_wj=[];
									if(army_div.army_div_chosen.style.display=='none'){
										if(_status.kzol_kzsg_army_wj.length>=4){
											game.say1('最多选择四支军队进入无尽模式');
											delete _status.kzol_kzsg_clickNum;
											return ;
										};
										_status.kzol_kzsg_army_wj.push(army_num);
										army_div.army_div_chosen.style.display='';
									}else{
										_status.kzol_kzsg_army_wj.remove(army_num);
										army_div.army_div_chosen.style.display='none';
									};
								};
								delete _status.kzol_kzsg_clickNum;
							},350);
						};
						army_div.onmouseover=function(){
							var num=0;
							for(var i=0;i<army_divs1.childNodes.length;i++){
								num++
							};
							for(var i=0;i<num;i++){
								army_divs1.removeChild(army_divs1.childNodes[0]);
							};
							var avatar=_status.kzol_kzsg_divs6.avatar;
							var name=_status.kzol_kzsg_divs6.name;
							var army_num=this.link;
							var army=this.link1;
							var card=this.link2;
							name.innerHTML='<span style="font-family:xinwei;font-size:35px;cursor:pointer;">'+army.name+'</span>';
							name.link=army_num;
							avatar.setBackground(card.name+card.quailty,'character');
							var list3=[];
							for(var j in army.leader){
								list3.push(army.leader[j]);
							};
							for(var j in army.number){
								list3.push(army.number[j]);
							};
							for(var i=0;i<list3.length;i++){
								var card1=lib.config.kzol_kzsg.card[list3[i]];
								var card_div=ui.create.button(card1.name+card1.quailty,'character');
								if(_status.kzol_kzsg_onEditArmy_wj!=undefined){
									game.changeButtonInfo(card_div,list3[i],false,true);
								}else{
									game.changeButtonInfo(card_div,list3[i]);
								};
								card_div.style.width='90px';
								card_div.style.height='120px';
								card_div.style.left='2.5px';
								card_div.style.top='10px';
								card_div.link=card1.name+card1.quailty;
								army_divs1.appendChild(card_div);
							};
						};
						army_div.setBackground(card.name+card.quailty,'character');
						army_divs.appendChild(army_div);
						var army_div_name=ui.create.div('');
						army_div_name.style.width='15px';
						army_div_name.style.height=(army_div.offsetHeight-10)+'px';
						army_div_name.style.left='5px';
						army_div_name.style.top='5px';
						army_div_name.style['font-size']='15px';
						army_div_name.style['font-family']="'STXinwei','xinwei'";
						//army_div_name.style['line-height']=(army_div.offsetHeight-10)+'px';
						army_div_name.innerHTML=lib.config.kzol_kzsg.army[i].name;
						army_div.appendChild(army_div_name);
						var army_div_chosen=ui.create.div('');
						army_div_chosen.style.height='25px';
						army_div_chosen.style.width='90px';
						army_div_chosen.style.top='47.5px';
						army_div_chosen.style.left='0px';
						army_div_chosen.style['font-size']='25px';
						army_div_chosen.style['text-align']='center';
						army_div_chosen.style['font-family']="'STXinwei','xinwei'";
						army_div_chosen.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
						army_div_chosen.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
						army_div_chosen.style['line-height']='25px';
						army_div_chosen.style.display='none';
						if(_status.kzol_kzsg_army_wj!=undefined&&_status.kzol_kzsg_army_wj.contains(i)) army_div_chosen.style.display='';
						army_div_chosen.innerHTML='已选择';
						army_div.appendChild(army_div_chosen);
						game.kzol_kzsg_clickFk(army_div);
						army_div.army_div_chosen=army_div_chosen;
						if(lib.config.kzol_kzsg.army[i].onWJ!=undefined){
							army_div.style['box-shadow']='rgba(0, 0, 0, 0.2) 0 0 0 1px,rgba(255, 0, 0, 0.4) 0 0 5px, rgba(255, 0, 0, 0.4) 0 0 12px, rgba(255, 0, 0, 0.8) 0 0 15px';
						};
						_status.kzol_kzsg_divs6_army_divs_num++;
					};
					var army_div=ui.create.div('.player');
					army_div.style.width='90px';
					army_div.style.height='105px';
					army_div.style.left=(7.5+95*(_status.kzol_kzsg_divs6_army_divs_num%4))+'px';
					army_div.style.top=(7.5+112.5*Math.floor(_status.kzol_kzsg_divs6_army_divs_num/4))+'px';
					army_div.style['cursor']='pointer';
					army_div.style['font-size']='30px';
					army_div.style['text-align']='center';
					army_div.style['font-family']="'STXinwei','xinwei'";
					army_div.style['line-height']='100px';
					army_div.innerHTML='<span style="cursor:pointer;">新建</span>';
					army_div.link=i;
					army_div.link1=lib.config.kzol_kzsg.army[i];
					army_div.onclick=function(){
						if(_status.kzol_kzsg_onSC==true){
							game.say1('请等待数据上传完成');
							return ;
						};
						game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs6);
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs7);
						_status.kzol_kzsg_editNew=true;
						_status.kzol_kzsg_onEditNum=lib.config.kzol_kzsg.army_num;
						if(_status.kzol_kzsg_onYS==true){
							game.kzol_focus('none');
							setTimeout(function(){
								game.kzol_chat1('极光','然后选择这支队伍的领将。',function(){
									var list=[];
									var bool=false;
									for(var i in lib.config.kzol_kzsg.army){
										var army=lib.config.kzol_kzsg.army[i];
										for(var j in army.leader){
											list.push(army.leader[j]);
										};
									};
									for(var i in lib.config.kzol_kzsg.card){
										var card=lib.config.kzol_kzsg.card[i];
										if(!list.contains(i)&&card.type=='武将') bool=true;
									};
									if(bool==true){
										game.kzol_focus(_status.kzol_kzsg_dialogs7.dialog);
										game.kzol_chat1();
									}else{
										game.kzol_focus('none');
										game.kzol_chat1('极光','刚刚瞟了一眼卡牌列表，我发现你没有未编制的武将卡。',function(){
											game.kzol_chat1('极光','我们就跳过这一步，直接开始讲解战斗界面吧。【尴尬】',function(){
												game.kzol_focus('none');
												game.kzol_chat1();
												_status.kzol_kzsg_divs7.div4.onclick();
												setTimeout(function(){
													_status.kzol_kzsg_divs6.div3.onclick();
													setTimeout(function(){
														game.kzol_ys_zy();
													},500);
												},500);
											});
										});
									};
								});
							},500);
						};
					};
					_status.kzol_kzsg_divs6.army_divs.link_ys_div=army_div;
					army_divs.appendChild(army_div);
					game.kzol_kzsg_clickFk(army_div);
					_status.kzol_kzsg_divs6_army_divs_num++;
					_status.kzol_kzsg_changeCK1=true;
				};
			},50);
			var clearArmy=ui.create.dialog('hidden');
			clearArmy.classList.add('popped');
			clearArmy.classList.add('static');
			clearArmy.style.animation='fadelogIn .4s';
			clearArmy.style['-webkit-animation']='fadelogIn .4s';
			clearArmy.style.height='40px';
			clearArmy.style.width='110px';
			clearArmy.style.bottom='0px';
			clearArmy.style.left='45px';
			clearArmy.style.borderRadius='5px';
			clearArmy.style['text-align']='center';
			clearArmy.style['font-size']='25px';
			clearArmy.style['line-height']='40px';
			clearArmy.style['font-family']="'STXinwei','xinwei'";
			clearArmy.style['background-image']='linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))';
			clearArmy.style['cursor']='pointer';
			clearArmy.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">清空军队</span>';
			clearArmy.onclick=function(){
				if(confirm('是否清空所有军队？')){
					lib.config.kzol_kzsg.army={};
					game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
					game.kzol_update_armyWj();
					delete _status.kzol_kzsg_army_wj;
					delete _status.kzol_kzsg_changeCK1;
					delete _status.kzol_kzsg_changeCK;
					delete _status.kzol_kzsg_changeCardCK;
				};
			};
			ui.window.appendChild(clearArmy);
			_status.kzol_kzsg_dialogs6.clearArmy=clearArmy;
			game.kzol_dialogs_open(_status.kzol_kzsg_dialogs6);
			game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs6);
			
			
			_status.kzol_kzsg_dialogs7={};
			_status.kzol_kzsg_divs7={};
			var background=ui.create.dialog('hidden');
			background.style.height='calc(100%)';
			background.style.width='calc(100%)';
			background.style.left='0px';
			background.style.top='0px';
			background.style['zIndex']=0;
			_status.kzol_kzsg_dialogs7.background=background;
			var div4=ui.create.div();
			div4.style.height='2000px';
			div4.style.width='2000px';
			div4.style.left='-10px';
			div4.style.top='-10px';
			setTimeout(function(){
				div4.onclick=function(){
					game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs7);
					delete _status.kzol_kzsg_changeCK;
					delete _status.kzol_kzsg_changeCK1;
					delete _status.kzol_kzsg_editNew;
					delete _status.kzol_kzsg_editOld;
					delete _status.kzol_kzsg_swithGroup;
					delete _status.kzol_kzsg_swithType;
					delete _status.kzol_kzsg_swithquailty;
					delete _status.kzol_kzsg_onEditNum;
					game.kzol_dialogs_show(_status.kzol_kzsg_dialogs6);
				};
			},750);
			_status.kzol_kzsg_divs7.div4=div4;
			background.add(div4);
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='500px';
			dialog.style.width='720px';
			dialog.style.left='calc(50% - 360px)';
			dialog.style.top='calc(50% - 250px)';
			dialog.classList.add('popped');
			dialog.classList.add('static');
			dialog.style.animation='fadeInDown .3s';
			dialog.style['-webkit-animation']='fadeInDown .3s';
			_status.kzol_kzsg_dialogs7.dialog=dialog;
			var card_divs=ui.create.div('.menu');
			card_divs.style.width='680px';
			card_divs.style.height='320px';
			card_divs.style.left='20px';
			card_divs.style.top='15px';
			card_divs.style['text-align']='left';
			card_divs.style['overflow-x']='hidden';
			card_divs.style['overflow-y']='scroll';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(card_divs);
			//card_divs.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			//card_divs.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			card_divs.style.borderRadius='8px';
			dialog.appendChild(card_divs);
			_status.kzol_kzsg_divs7.card_divs=card_divs;
			setInterval(function(){
				if(_status.kzol_kzsg_changeCK!=true){
					_status.kzol_kzsg_changeCK_load=true;
					delete _status.kzol_kzsg_interval2_num;
					clearInterval(_status.kzol_kzsg_interval2);
					delete _status.kzol_kzsg_interval2;
					_status.kzol_kzsg_dialogs7.dialog_page.link=1;
					var num=0;
					for(var i=0;i<army_divs12.childNodes.length;i++){
						num++
					};
					for(var i=0;i<num;i++){
						army_divs12.removeChild(army_divs12.childNodes[0]);
					};
					var num=0;
					for(var i=0;i<card_divs.childNodes.length;i++){
						num++
					};
					for(var i=0;i<num;i++){
						card_divs.removeChild(card_divs.childNodes[0]);
					};
					var list5=[];
					if(_status.kzol_kzsg_editOld==true){
						for(var i in lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum].leader){
							list5.push(lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum].leader[i]);
						};
						for(var i in lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum].number){
							list5.push(lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum].number[i]);
						};
					};
					var list3=[];
					for(var i in lib.config.kzol_kzsg.army){
						var army=lib.config.kzol_kzsg.army[i];
						for(var j in army.leader){
							list3.push(army.leader[j]);
						};
						for(var j in army.number){
							list3.push(army.number[j]);
						};
					};
					//_status.kzol_kzsg_divs7_card_divs_num=0;
					var object_cards_num=0;
					var object_cards={};
					for(var i in lib.config.kzol_kzsg.card){
						if(_status.kzol_kzsg_onEditArmy_wj!=undefined&&lib.config.kzol_kzsg.card[i].onWJ==undefined) continue;
						if(_status.kzol_kzsg_onEditNum!=undefined&&lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum]!=undefined&&lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum].onWJ!=undefined&&lib.config.kzol_kzsg.card[i].onWJ==undefined) continue;
						var bool=true;
						for(var j in object_cards){
							if(object_cards[j]==i) bool=false;
						};
						if(bool!=true) continue;
						var card=lib.config.kzol_kzsg.card[i];
						object_cards[object_cards_num]=i;
						object_cards_num++;
						for(var j in lib.config.kzol_kzsg.card){
							if(_status.kzol_kzsg_onEditArmy_wj!=undefined&&lib.config.kzol_kzsg.card[j].onWJ==undefined) continue;
							if(_status.kzol_kzsg_onEditNum!=undefined&&lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum]!=undefined&&lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum].onWJ!=undefined&&lib.config.kzol_kzsg.card[j].onWJ==undefined) continue;
							var card1=lib.config.kzol_kzsg.card[j];
							if(card1.name==card.name&&i!=j){
								object_cards[object_cards_num]=j;
								object_cards_num++;
							};
						};
					};
					var list51=[];
					var card_unArmy=[];
					for(var a in object_cards){
						var i=object_cards[a];
						if(!list3.contains(i)||(list3.contains(i)&&_status.kzol_kzsg_editOld==true&&list5.contains(i))){
							card_unArmy.push(i);
						};
					};
					if(card_unArmy.length>0){
						_status.kzol_kzsg_interval2_num=1;
						setTimeout(function(){
						_status.kzol_kzsg_interval2=setInterval(function(){
							var num=50;
							if(num>card_unArmy.length) num=card_unArmy.length;
							for(var j=0;j<num;j++){
								var i=card_unArmy[0];
								var card=lib.config.kzol_kzsg.card[i];
								var card_div=ui.create.button(card.name+card.quailty,'character');
								game.kzol_kzsg_clickFk(card_div);
								card_div.style['cursor']='pointer';
								card_div.onclick=function(e){
									if(_status.kzol_kzsg_changeCK_load==true){
										game.say1('请等待加载完毕后再进行编辑');
										return ;
									};
									/*if(_status.kzol_kzsg_onClick==true) return ;
									_status.kzol_kzsg_onClick=true;
									setTimeout(function(){
										console.log(_status.kzol_kzsg_onClick)
										delete _status.kzol_kzsg_onClick;
									},300);*/
									var army=lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum];
									var list=[];
									var list1=[];
									if(_status.kzol_kzsg_editNew!=true){
										for(var j in army.leader){
											list.push(army.leader[j]);
										};
										for(var j in army.number){
											list1.push(army.number[j]);
										};
									};
									if(!list.contains(this.link1)&&!list1.contains(this.link1)){
										if(list.length==0&&lib.kzol_kzsg_card[this.link2.name+this.link2.quailty].type!='武将'){
											game.say1('请先选择这支军队的领将');
											return ;
										};
										if(list.length!=0&&lib.kzol_kzsg_card[this.link2.name+this.link2.quailty].type=='武将'){
											game.say1('这支军队已有领将');
											return ;
										};
										if(lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum]==undefined) lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum]={
											name:'无名军队',
											leader:{},
											number:{},
										};
										if(list.length>0){
											var bool2=true;
											for(var a=0;a<list.length;a++){
												var c=lib.config.kzol_kzsg.card[list[a]];
												var c1=lib.config.kzol_kzsg.card[this.link1];
												var bool4=false;
												for(var b=0;b<list.length;b++){
													var c_b=lib.config.kzol_kzsg.card[list[b]];
													if(c_b.skills.contains('kzsg_团结')) bool4=true;
												};
												for(var b=0;b<list1.length;b++){
													var c_b=lib.config.kzol_kzsg.card[list1[b]];
													if(c_b.skills.contains('kzsg_团结')) bool4=true;
												};
												if(c1.group=='wu'||c1.group=='shu'||c1.group=='wei'||c1.group=='qun'){
													if(bool4==false&&c1.group!=c.group) bool2=false;
												};
											};
											if(bool2!=true){
												game.say1('这个武将不适合这支军队');
												return ;
											};
											var num=0;
											var num1=0;
											var num2=0;
											var numa=0;
											var num1a=0;
											var num2a=0;
											for(var i in lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum].leader){
												var leader=lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum].leader[i];
												num+=lib.config.kzol_kzsg.card[leader].bing;
												num1+=lib.config.kzol_kzsg.card[leader].bao;
												num2+=lib.config.kzol_kzsg.card[leader].shu;
											};
											for(var i in lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum].number){
												var card=lib.config.kzol_kzsg.card[lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum].number[i]];
												if(lib.kzol_kzsg_card[card.name+card.quailty].type!='宝物'&&lib.kzol_kzsg_card[card.name+card.quailty].type!='术') numa++;
												if(lib.kzol_kzsg_card[card.name+card.quailty].type=='宝物') num1a++;
												if(lib.kzol_kzsg_card[card.name+card.quailty].type=='术') num2a++;
											};
											if(lib.kzol_kzsg_card[this.link2.name+this.link2.quailty].type!='宝物'&&lib.kzol_kzsg_card[this.link2.name+this.link2.quailty].type!='术'&&numa>=num){
												game.say1('这支军队已容不下更多士兵');
												return ;
											};
											if(lib.kzol_kzsg_card[this.link2.name+this.link2.quailty].type=='宝物'&&num1a>=num1){
												game.say1('这支军队已容不下更多宝物');
												return ;
											};
											if(lib.kzol_kzsg_card[this.link2.name+this.link2.quailty].type=='术'&&num2a>=num2){
												game.say1('这支军队已容不下更多术');
												return ;
											};
										};
										if(lib.kzol_kzsg_card[this.link2.name+this.link2.quailty].type=='武将'){
											if(_status.kzol_kzsg_editNew==true){
												lib.config.kzol_kzsg.army_num++;
												delete _status.kzol_kzsg_editNew;
											};
										};
										card_divs.removeChild(this);
										this.style.left='0px';
										army_divs12.appendChild(this);
										var list_d=_status.kzol_kzsg_divs7.army_divs12.childNodes;
										var list_l=[];
										var list_n=[];
										for(var a=0;a<list_d.length;a++){
											var card_num=list_d[a].link1;
											var card=list_d[a].link2;
											if(card.type=='武将'){
												list_l.push(card_num);
											}else{
												list_n.push(card_num);
											};
										};
										lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum].leader={};
										lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum].number={};
										var bool_chosenWJCard=false;
										for(var a=0;a<list_l.length;a++){
											var card_num=list_l[a];
											lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum].leader[a]=card_num;
											if(lib.config.kzol_kzsg.card[card_num].onWJ==true){
												bool_chosenWJCard=true;
											};
										};
										for(var a=0;a<list_n.length;a++){
											var card_num=list_n[a];
											lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum].number[a]=card_num;
										};
										game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
										if(bool_chosenWJCard==true){
											lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum].onWJ=true;
											var num_WJCard=0;
											for(var a=0;a<card_divs.childNodes.length;a++){
												if(lib.config.kzol_kzsg.card[card_divs.childNodes[a].link1].onWJ!=true){
													card_divs.removeChild(card_divs.childNodes[a]);
													num_WJCard++;
													a--;
												};
											};
											if(num_WJCard>0){
												_status.kzol_kzsg_dialogs7.dialog_page.link=1;
												delete _status.kzol_kzsg_swithGroup;
												delete _status.kzol_kzsg_swithType;
												delete _status.kzol_kzsg_swithquailty;
												game.kzol_swithCard(card_divs);
											};
										};
										if(lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum].onWJ==true){
											game.kzol_update_armyWj();
										};
										if(_status.kzol_kzsg_onYS==true){
											if(card.type=='武将'){
												game.kzol_chat1('极光','最后选择这支军队的成员。吴国、蜀国、魏国、群雄的士兵牌、宝物牌、术牌只能放在对应势力的军队中。',function(){
													game.kzol_chat1('极光','【看了看时间】',function(){
														setTimeout(function(){
															game.kzol_chat1('极光','啊！留给我讲解的时间不多了！我们现在必须开始讲解战斗界面！',function(){
																game.kzol_focus('none');
																game.kzol_chat1();
																_status.kzol_kzsg_divs7.div4.onclick();
																setTimeout(function(){
																	_status.kzol_kzsg_divs6.div3.onclick();
																	setTimeout(function(){
																		game.kzol_ys_zy();
																	},500);
																},500);
															});
														},500);
													});
												});
											};
										};
									}else{
										if(_status.kzol_kzsg_onYS==true){
											game.say1('讲解时无法撤下卡牌');
											return ;
										};
										for(var j in army.number){
											if(army.number[j]==this.link1){
												var card=lib.config.kzol_kzsg.card[this.link1];
												if(card.skills.contains('kzsg_团结')){
													if(confirm('直接撤下拥有技能【团结】的卡牌会解散军队，是否继续？')){
														if(_status.kzol_kzsg_armyToBattle!=undefined&&_status.kzol_kzsg_armyToBattle.contains(_status.kzol_kzsg_onEditNum)){
															game.say1('这支军队已被选择，无法解散');
															return ;
														};
														if(_status.kzol_kzsg_army_wj!=undefined&&_status.kzol_kzsg_army_wj.contains(_status.kzol_kzsg_onEditNum)){
															_status.kzol_kzsg_army_wj.remove(_status.kzol_kzsg_onEditNum);
														};
														if(lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum].onWJ==true){
															delete lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum];
															game.kzol_update_armyWj();
														}else{
															delete lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum];
														};
														game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
														//army_divs12.removeChild(this);
														this.style.left='35px';
														card_divs.appendChild(this);
														game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs7);
														delete _status.kzol_kzsg_changeCK;
														delete _status.kzol_kzsg_changeCK1;
														delete _status.kzol_kzsg_editNew;
														delete _status.kzol_kzsg_editOld;
														delete _status.kzol_kzsg_swithGroup;
														delete _status.kzol_kzsg_swithType;
														delete _status.kzol_kzsg_swithquailty;
														delete _status.kzol_kzsg_onEditNum;
														game.kzol_dialogs_show(_status.kzol_kzsg_dialogs6);
													};
												}else{
													delete lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum].number[j];
													if(lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum].onWJ==true){
														game.kzol_update_armyWj();
													};
													game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
													//army_divs12.removeChild(this);
													this.style.left='35px';
													card_divs.appendChild(this);
												};
											};
										};
										for(var j in army.leader){
											if(army.leader[j]==this.link1){
												if(confirm('直接撤下武将会解散军队，是否继续？')){
													if(_status.kzol_kzsg_armyToBattle!=undefined&&_status.kzol_kzsg_armyToBattle.contains(_status.kzol_kzsg_onEditNum)){
														game.say1('这支军队已被选择，无法解散');
														return ;
													};
													if(_status.kzol_kzsg_army_wj!=undefined&&_status.kzol_kzsg_army_wj.contains(_status.kzol_kzsg_onEditNum)){
														_status.kzol_kzsg_army_wj.remove(_status.kzol_kzsg_onEditNum);
													};
													if(lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum].onWJ==true){
														delete lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum];
														game.kzol_update_armyWj();
													}else{
														delete lib.config.kzol_kzsg.army[_status.kzol_kzsg_onEditNum];
													};
													game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
													//army_divs12.removeChild(this);
													this.style.left='35px';
													card_divs.appendChild(this);
													game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs7);
													delete _status.kzol_kzsg_changeCK;
													delete _status.kzol_kzsg_changeCK1;
													delete _status.kzol_kzsg_editNew;
													delete _status.kzol_kzsg_editOld;
													delete _status.kzol_kzsg_swithGroup;
													delete _status.kzol_kzsg_swithType;
													delete _status.kzol_kzsg_swithquailty;
													delete _status.kzol_kzsg_onEditNum;
													game.kzol_dialogs_show(_status.kzol_kzsg_dialogs6);
												};
											};
										};
										for(var i=0;i<card_divs.childNodes.length;i++){
											card_divs.childNodes[i].style.display='none';
										};
										game.kzol_swithCard(card_divs);
									};
								};
								if(_status.kzol_kzsg_onEditArmy_wj!=undefined){
									game.changeButtonInfo(card_div,i,true,true);
								}else{
									game.changeButtonInfo(card_div,i,true);
								};
								card_div.style.width='90px';
								card_div.style.height='120px';
								card_div.style.left='35px';
								card_div.style.top='10px';
								//card_div.style.left=(7.5+95*(_status.kzol_kzsg_divs7_card_divs_num%7))+'px';
								//card_div.style.top=(7.5+112.5*Math.floor(_status.kzol_kzsg_divs7_card_divs_num/7))+'px';
								card_div.link=card.name+card.quailty;
								card_div.link1=i;
								card_div.link2=card;
								if(card.onWJ!=undefined){
									card_div.style['box-shadow']='rgba(0, 0, 0, 0.2) 0 0 0 1px,rgba(255, 0, 0, 0.4) 0 0 5px, rgba(255, 0, 0, 0.4) 0 0 12px, rgba(255, 0, 0, 0.8) 0 0 15px';
								};
								if(_status.kzol_kzsg_editOld==true&&list5.contains(i)){
									list51.push({card:card_div,num:i});
								}else{
									var num_mykps=lib.config.mode_config.kzsg.mykps;
									if(num_mykps==undefined) num_mykps=18;
									if(_status.kzol_kzsg_interval2_num>num_mykps) card_div.style.display='none';
									_status.kzol_kzsg_interval2_num++;
									card_divs.appendChild(card_div);
								};
								card_unArmy.remove(card_unArmy[0]);
								//_status.kzol_kzsg_divs7_card_divs_num++;
							};
							if(card_unArmy.length==0){
								clearInterval(_status.kzol_kzsg_interval2);
								var list52=[];
								for(var i=0;i<list5.length;i++){
									for(var j=0;j<list51.length;j++){
										if(list5[i]==list51[j].num) list52.push(list51[j].card);
									};
								};
								for(var i=0;i<list52.length;i++){
									//card_divs.removeChild(list52[i]);
									list52[i].style.left='0px';
									army_divs12.appendChild(list52[i]);
								};
								delete _status.kzol_kzsg_changeCK_load;
							};
						},100);
						},400);
					};
					_status.kzol_kzsg_changeCK=true;
				};
			},50);
			var army_divs12=ui.create.div('.menu');
			army_divs12.style.width='calc(100%)';
			army_divs12.style.height='150px';
			army_divs12.style.left='0px';
			army_divs12.style.bottom='0px';
			army_divs12.style['text-align']='left';
			army_divs12.style['overflow-x']='hidden';
			army_divs12.style['overflow-y']='scroll';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(army_divs12);
			//army_divs12.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			//army_divs12.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			army_divs12.style.borderRadius='8px';
			dialog.appendChild(army_divs12);
			_status.kzol_kzsg_divs7.army_divs12=army_divs12;
			var dialog_swith1=ui.create.dialog('hidden');
			dialog_swith1.style.height='calc(50% - 57.5px)';
			dialog_swith1.style.width='125px';
			dialog_swith1.style.left='-5px';
			dialog_swith1.style.top='50px';
			dialog_swith1.classList.add('popped');
			dialog_swith1.classList.add('static');
			dialog_swith1.style.animation='faderightIn .3s';
			dialog_swith1.style['-webkit-animation']='faderightIn .3s';
			_status.kzol_kzsg_dialogs7.dialog_swith1=dialog_swith1;
			var dialog_swith1_div=ui.create.div('.menu','<span style="cursor:pointer;">全部</span>');
			dialog_swith1_div.style['font-size']='30px';
			dialog_swith1_div.style['line-height']='40px';
			dialog_swith1_div.style['font-family']="'STXinwei','xinwei'";
			dialog_swith1_div.style.height='40px';
			dialog_swith1_div.style.width='110px';
			dialog_swith1_div.style.borderRadius='5px';
			dialog_swith1_div.onclick=function(){
				delete _status.kzol_kzsg_swithGroup;
				var card_divs=_status.kzol_kzsg_divs7.card_divs;
				for(var i=0;i<card_divs.childNodes.length;i++){
					card_divs.childNodes[i].style.display='none';
				};
				_status.kzol_kzsg_dialogs7.dialog_page.link=1;
				game.kzol_swithCard(card_divs);
			};
			dialog_swith1.add(dialog_swith1_div);
			game.kzol_kzsg_clickFk(dialog_swith1_div);
			var dialog_swith1_list=[];
			for(var i in lib.kzol_kzsg_card){
				var group=lib.kzol_kzsg_card[i].group;
				if(!dialog_swith1_list.contains(group)) dialog_swith1_list.push(group);
			};
			for(var i=0;i<dialog_swith1_list.length;i++){
				var str='国';
				var group=dialog_swith1_list[i];
				if(group=='qun') str='雄';
				if(group=='xia') str='客';
				var dialog_swith1_div=ui.create.div('.menu','<span style="cursor:pointer;">'+get.translation(group)+str+'</span>');
				dialog_swith1_div.style['font-size']='30px';
				dialog_swith1_div.style['line-height']='40px';
				dialog_swith1_div.style['font-family']="'STXinwei','xinwei'";
				dialog_swith1_div.style.height='40px';
				dialog_swith1_div.style.width='110px';
				dialog_swith1_div.style.borderRadius='5px';
				dialog_swith1_div.link=group;
				dialog_swith1_div.onclick=function(){
					var group=this.link;
					_status.kzol_kzsg_swithGroup=group;
					var card_divs=_status.kzol_kzsg_divs7.card_divs;
					for(var i=0;i<card_divs.childNodes.length;i++){
						card_divs.childNodes[i].style.display='none';
					};
					_status.kzol_kzsg_dialogs7.dialog_page.link=1;
					game.kzol_swithCard(card_divs);
				};
				dialog_swith1.add(dialog_swith1_div);
				game.kzol_kzsg_clickFk(dialog_swith1_div);
			};
			var dialog_swith2=ui.create.dialog('hidden');
			dialog_swith2.style.height='calc(100% - 115px)';
			dialog_swith2.style.width='125px';
			dialog_swith2.style.left='calc(100% - 120px)';
			dialog_swith2.style.top='50px';
			dialog_swith2.classList.add('popped');
			dialog_swith2.classList.add('static');
			dialog_swith2.style.animation='fadeleftIn1 .3s';
			dialog_swith2.style['-webkit-animation']='fadeleftIn1 .3s';
			var dialog_swith2_div=ui.create.div('.menu','<span style="cursor:pointer;">全部</span>');
			dialog_swith2_div.style['font-size']='30px';
			dialog_swith2_div.style['line-height']='40px';
			dialog_swith2_div.style['font-family']="'STXinwei','xinwei'";
			dialog_swith2_div.style.height='40px';
			dialog_swith2_div.style.width='110px';
			dialog_swith2_div.style.borderRadius='5px';
			dialog_swith2_div.onclick=function(){
				delete _status.kzol_kzsg_swithType;
				var card_divs=_status.kzol_kzsg_divs7.card_divs;
				for(var i=0;i<card_divs.childNodes.length;i++){
					card_divs.childNodes[i].style.display='none';
				};
				_status.kzol_kzsg_dialogs7.dialog_page.link=1;
				game.kzol_swithCard(card_divs);
			};
			dialog_swith2.add(dialog_swith2_div);
			game.kzol_kzsg_clickFk(dialog_swith2_div);
			var dialog_swith2_list=[];
			for(var i in lib.kzol_kzsg_card){
				var type=lib.kzol_kzsg_card[i].type;
				if(!dialog_swith2_list.contains(type)) dialog_swith2_list.push(type);
			};
			for(var i=0;i<dialog_swith2_list.length;i++){
				var type=dialog_swith2_list[i];
				var dialog_swith2_div=ui.create.div('.menu','<span style="cursor:pointer;">'+type+'</span>');
				dialog_swith2_div.style['font-size']='30px';
				dialog_swith2_div.style['line-height']='40px';
				dialog_swith2_div.style['font-family']="'STXinwei','xinwei'";
				dialog_swith2_div.style.height='40px';
				dialog_swith2_div.style.width='110px';
				dialog_swith2_div.style.borderRadius='5px';
				dialog_swith2_div.link=type;
				dialog_swith2_div.onclick=function(){
					var type=this.link;
					_status.kzol_kzsg_swithType=type;
					var card_divs=_status.kzol_kzsg_divs7.card_divs;
					for(var i=0;i<card_divs.childNodes.length;i++){
						card_divs.childNodes[i].style.display='none';
					};
					_status.kzol_kzsg_dialogs7.dialog_page.link=1;
					game.kzol_swithCard(card_divs);
				};
				dialog_swith2.add(dialog_swith2_div);
				game.kzol_kzsg_clickFk(dialog_swith2_div);
			};
			_status.kzol_kzsg_dialogs7.dialog_swith2=dialog_swith2;
			var dialog_swith3=ui.create.dialog('hidden');
			dialog_swith3.style.height='calc(50% - 57.5px)';
			dialog_swith3.style.width='125px';
			dialog_swith3.style.left='-5px';
			dialog_swith3.style.top='calc(50%)';
			dialog_swith3.classList.add('popped');
			dialog_swith3.classList.add('static');
			dialog_swith3.style.animation='faderightIn .3s';
			dialog_swith3.style['-webkit-animation']='faderightIn .3s';
			var dialog_swith3_div=ui.create.div('.menu','<span style="cursor:pointer;">全部</span>');
			dialog_swith3_div.style['font-size']='30px';
			dialog_swith3_div.style['line-height']='40px';
			dialog_swith3_div.style['font-family']="'STXinwei','xinwei'";
			dialog_swith3_div.style.height='40px';
			dialog_swith3_div.style.width='110px';
			dialog_swith3_div.style.borderRadius='5px';
			dialog_swith3_div.onclick=function(){
				delete _status.kzol_kzsg_swithquailty;
				var card_divs=_status.kzol_kzsg_divs7.card_divs;
				for(var i=0;i<card_divs.childNodes.length;i++){
					card_divs.childNodes[i].style.display='none';
				};
				_status.kzol_kzsg_dialogs7.dialog_page.link=1;
				game.kzol_swithCard(card_divs);
			};
			dialog_swith3.add(dialog_swith3_div);
			game.kzol_kzsg_clickFk(dialog_swith3_div);
			var dialog_swith3_list=[];
			for(var i in lib.kzol_kzsg_card){
				var quailty=lib.kzol_kzsg_card[i].quailty;
				if(!dialog_swith3_list.contains(quailty)) dialog_swith3_list.push(quailty);
			};
			for(var i=0;i<dialog_swith3_list.length;i++){
				var quailty=dialog_swith3_list[i];
				var str_quailty='';
				if(quailty==7){
					str_quailty='红卡';
				}else if(quailty==6){
					str_quailty='橙卡';
				}else if(quailty==5){
					str_quailty='紫卡';
				}else if(quailty==4){
					str_quailty='蓝卡';
				}else if(quailty==3){
					str_quailty='绿卡';
				}else if(quailty==2){
					str_quailty='白卡';
				}else{
					str_quailty='灰卡';
				};
				var dialog_swith3_div=ui.create.div('.menu','<span style="cursor:pointer;">'+str_quailty+'</span>');
				dialog_swith3_div.style['font-size']='30px';
				dialog_swith3_div.style['line-height']='40px';
				dialog_swith3_div.style['font-family']="'STXinwei','xinwei'";
				dialog_swith3_div.style.height='40px';
				dialog_swith3_div.style.width='110px';
				dialog_swith3_div.style.borderRadius='5px';
				dialog_swith3_div.link=quailty;
				dialog_swith3_div.onclick=function(){
					var quailty=this.link;
					_status.kzol_kzsg_swithquailty=quailty;
					var card_divs=_status.kzol_kzsg_divs7.card_divs;
					for(var i=0;i<card_divs.childNodes.length;i++){
						card_divs.childNodes[i].style.display='none';
					};
					_status.kzol_kzsg_dialogs7.dialog_page.link=1;
					game.kzol_swithCard(card_divs);
				};
				dialog_swith3.add(dialog_swith3_div);
				game.kzol_kzsg_clickFk(dialog_swith3_div);
			};
			_status.kzol_kzsg_dialogs7.dialog_swith3=dialog_swith3;
			var dialog_page=ui.create.dialog('hidden');
			dialog_page.style.height='40px';
			dialog_page.style.width='200px';
			dialog_page.style.left='0px';
			dialog_page.style.bottom='-2.5px';
			dialog_page.link=1;
			dialog_page.link_max=100;
			setInterval(function(){
				var card_divs=_status.kzol_kzsg_divs7.card_divs;
				var army_divs12=_status.kzol_kzsg_divs7.army_divs12;
				if(card_divs!=undefined){
					var num=0;
					for(var i=0;i<card_divs.childNodes.length;i++){
						var card=card_divs.childNodes[i].link2;
						if(_status.kzol_kzsg_swithGroup==undefined||(_status.kzol_kzsg_swithGroup!=undefined&&card.group==_status.kzol_kzsg_swithGroup)){
							if(_status.kzol_kzsg_swithType==undefined||(_status.kzol_kzsg_swithType!=undefined&&card.type==_status.kzol_kzsg_swithType)){
								if(_status.kzol_kzsg_swithquailty==undefined||(_status.kzol_kzsg_swithquailty!=undefined&&card.quailty==_status.kzol_kzsg_swithquailty)){
									num++;
								};
							};
						};
					};
					for(var i=0;i<army_divs12.childNodes.length;i++){
						num++;
					};
					var num_mykps=lib.config.mode_config.kzsg.mykps;
					if(num_mykps==undefined) num_mykps=18;
					dialog_page.link_max=Math.ceil(num/num_mykps);
				};
			},250);
			dialog_page.classList.add('popped');
			dialog_page.classList.add('static');
			dialog_page.style.animation='fadelogIn .4s';
			dialog_page.style['-webkit-animation']='fadelogIn .4s';
			_status.kzol_kzsg_dialogs7.dialog_page=dialog_page;
			var dialog_page_previous=ui.create.div('');
			dialog_page_previous.style.height='calc(100%)';
			dialog_page_previous.style.width='40px';
			dialog_page_previous.style.left='0px';
			dialog_page_previous.style.top='0px';
			dialog_page_previous.style['text-align']='center';
			//dialog_page_previous.style['font-family']="'STXinwei','xinwei'";
			dialog_page_previous.style.borderRadius='3px';
			dialog_page_previous.innerHTML='<span style="cursor:pointer;font-size:25px;line-height:40px"><</span>';
			dialog_page_previous.onclick=function(){
				var page=_status.kzol_kzsg_dialogs7.dialog_page;
				var card_divs=_status.kzol_kzsg_divs7.card_divs;
				if(page.link<=1){
					game.say1('这已是第一页');
					return ;
				};
				page.link--;
				for(var i=0;i<card_divs.childNodes.length;i++){
					card_divs.childNodes[i].style.display='none';
				};
				game.kzol_swithCard(card_divs);
			};
			dialog_page.appendChild(dialog_page_previous);
			game.kzol_kzsg_clickFk(dialog_page_previous);
			var dialog_page_next=ui.create.div('');
			dialog_page_next.style.height='calc(100%)';
			dialog_page_next.style.width='40px';
			dialog_page_next.style.right='0px';
			dialog_page_next.style.top='0px';
			dialog_page_next.style['text-align']='center';
			//dialog_page_next.style['font-family']="'STXinwei','xinwei'";
			dialog_page_next.style.borderRadius='3px';
			dialog_page_next.innerHTML='<span style="cursor:pointer;font-size:25px;line-height:40px">></span>';
			dialog_page_next.onclick=function(){
				var page=_status.kzol_kzsg_dialogs7.dialog_page;
				var card_divs=_status.kzol_kzsg_divs7.card_divs;
				if(page.link>=page.link_max){
					game.say1('这已是最后一页');
					return ;
				};
				page.link++;
				for(var i=0;i<card_divs.childNodes.length;i++){
					card_divs.childNodes[i].style.display='none';
				};
				game.kzol_swithCard(card_divs);
			};
			dialog_page.appendChild(dialog_page_next);
			game.kzol_kzsg_clickFk(dialog_page_next);
			var page_info=ui.create.dialog('hidden');;
			page_info.classList.add('popped');
			page_info.classList.add('static');
			page_info.style.animation='fadelogIn1 .4s';
			page_info.style['-webkit-animation']='fadelogIn1 .4s';
			page_info.style.height='300px';
			page_info.style.width='200px';
			page_info.style.bottom='39px';
			page_info.style.left='2.5px';
			page_info.style.borderRadius='5px';
			page_info.style['zIndex']=995;
			ui.window.appendChild(page_info);
			_status.kzol_kzsg_dialogs7.page_info=page_info;
			var page_info_div=ui.create.dialog('hidden');;
			page_info_div.classList.add('popped');
			page_info_div.classList.add('static');
			page_info_div.style.height='calc(100%)';
			page_info_div.style.width='calc(100%)';
			page_info_div.style.top='0px';
			page_info_div.style.left='0px';
			page_info_div.style['text-align']='left';
			page_info_div.style['overflow-x']='hidden';
			page_info_div.style['overflow-y']='scroll';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(page_info_div);
			page_info.appendChild(page_info_div);
			_status.kzol_kzsg_divs7.page_info_div=page_info_div;
			var dialog_page_show=ui.create.div('');
			dialog_page_show.style.height='calc(100%)';
			dialog_page_show.style.width='120px';
			dialog_page_show.style.left='40px';
			dialog_page_show.style.top='0px';
			dialog_page_show.style['text-align']='center';
			dialog_page_show.style['font-size']='25px';
			dialog_page_show.style['line-height']='40px';
			//dialog_page_show.style['font-family']="'STXinwei','xinwei'";
			dialog_page_show.style['cursor']='pointer';
			dialog_page_show.innerHTML=dialog_page.link+'/'+dialog_page.link_max;
			setInterval(function(){
				dialog_page_show.innerHTML=dialog_page.link+'/'+dialog_page.link_max;
			},50);
			dialog_page_show.onclick=function(){
				var dialogs=_status.kzol_kzsg_dialogs7;
				var divs=_status.kzol_kzsg_divs7;
				var num=0;
				for(var i=0;i<divs.page_info_div.childNodes.length;i++){
					num++;
				};
				for(var i=0;i<num;i++){
					divs.page_info_div.removeChild(divs.page_info_div.childNodes[0]);
				};
				if(dialogs.page_info.style.display=='none'){
					dialogs.page_info.style.display='';
					for(var i=0;i<dialogs.dialog_page.link_max;i++){
						var div=ui.create.div('.menu');
						div.style.height='50px';
						div.style.width='50px';
						div.style.top=(Math.floor(i/4)*50)+'px';
						div.style.left=(i%4*50)+'px';
						div.style['cursor']='pointer';
						div.style['text-align']='center';
						div.style['font-size']='25px';
						div.style['line-height']='50px';
						div.style.borderRadius='0px';
						div.style['box-shadow']='rgba(0, 0, 0, 0.55) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 3px 10px';
						div.innerHTML=i+1;
						div.link=i+1;
						div.onclick=function(){
							var card_divs=_status.kzol_kzsg_divs7.card_divs;
							for(var i=0;i<card_divs.childNodes.length;i++){
								card_divs.childNodes[i].style.display='none';
							};
							_status.kzol_kzsg_dialogs7.dialog_page.link=this.link;
							game.kzol_swithCard(card_divs);
						};
						divs.page_info_div.appendChild(div);
					};
				}else{
					dialogs.page_info.style.display='none';
				};
			};
			dialog_page.appendChild(dialog_page_show);
			game.kzol_kzsg_clickFk(dialog_page_show);
			game.kzol_dialogs_open(_status.kzol_kzsg_dialogs7);
			game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs7);
			
			
			_status.kzol_kzsg_dialogs9={};
			_status.kzol_kzsg_divs9={};
			var background=ui.create.dialog('hidden');
			background.style.height='calc(100%)';
			background.style.width='calc(100%)';
			background.style.left='0px';
			background.style.top='0px';
			background.style['zIndex']=0;
			_status.kzol_kzsg_dialogs9.background=background;
			var div5=ui.create.div();
			div5.style.height='2000px';
			div5.style.width='2000px';
			div5.style.left='-10px';
			div5.style.top='-10px';
			setTimeout(function(){
				div5.onclick=function(){
					game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs9);
					ui.background.setBackgroundImage('image/background/'+lib.config.image_background+'.jpg');
					game.kzol_dialogs_show(_status.kzol_kzsg_dialogs1);
				};
			},750);
			background.add(div5);
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='420px';
			dialog.style.width='800px';
			dialog.style.left='calc(50% - 400px)';
			dialog.style.top='calc(50% - 210px)';
			dialog.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			dialog.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			dialog.style['overflow-x']='hidden';
			dialog.style['overflow-y']='scroll';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(dialog);
			dialog.classList.add('popped');
			dialog.classList.add('static');
			dialog.style.animation='fadeInDown .3s';
			dialog.style['-webkit-animation']='fadeInDown .3s';
			_status.kzol_kzsg_dialogs9.dialog=dialog;
			var battle_div=ui.create.div('.menu');
			battle_div.style.height='calc(90%)';
			battle_div.style.width='calc(80%)';
			battle_div.style.left='calc(10%)';
			battle_div.style.top='calc(5%)';
			battle_div.style.cursor='pointer';
			battle_div.style.borderRadius='5px';
			battle_div.innerHTML='<span style="font-size:35px;color:white;text-shadow:black 0 0 2px;line-height:378px;font-family:xinwei">第1章 初出茅庐</span>';
			battle_div.link=0;
			battle_div.setBackgroundImage('extension/扩展ol/初出茅庐.png');
			battle_div.style.backgroundSize="100% 100%";
			battle_div.onclick=function(){
				var dialog=_status.kzol_kzsg_dialogs9.dialog;
				var name=list_battle_name[this.link];
				var battle=list_battle[this.link];
				var battle1=[];
				for(var i in battle){
					battle1.push(battle[i]);
				};
				if(battle1.length==0){
					game.say1('该章节未开放');
					return ;
				};
				if(list_battle[this.link-1]!=undefined){
					var battle2=[];
					for(var i in list_battle[this.link-1]){
						battle2.push(list_battle[this.link-1][i]);
					};
					if(lib.config.kzol_kzsg.battle[list_battle_name[this.link-1]][battle2.length]==false){
						game.say1('未通关前一章');
						return ;
					};
				};
				var num=0;
				for(var i=0;i<dialog.childNodes.length;i++){
					num++
				};
				for(var i=0;i<num;i++){
					dialog.removeChild(dialog.childNodes[0]);
				};
				var battle_div2=ui.create.div('.menu');
				battle_div2.style.height='30px';
				battle_div2.style.top='10px';
				battle_div2.style.width='calc(95%)';
				battle_div2.style.left='calc(2.5%)';
				battle_div2.style.cursor='pointer';
				battle_div2.style['font-size']='25px';
				battle_div2.style['line-height']='30px';
				battle_div2.style['text-align']='center';
				battle_div2.style['font-family']="'STXinwei','xinwei'";
				battle_div2.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
				battle_div2.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
				battle_div2.style.borderRadius='3px';
				battle_div2.innerHTML='<span style="cursor:pointer;color:white;text-shadow:black 0 0 2px;">返回</span>';
				battle_div2.onclick=function(){
					var dialogs=_status.kzol_kzsg_dialogs9;
					var divs=_status.kzol_kzsg_divs9;
					var dialog=dialogs.dialog;
					var num=0;
					for(var i=0;i<dialog.childNodes.length;i++){
						num++
					};
					for(var i=0;i<num;i++){
						dialog.removeChild(dialog.childNodes[0]);
					};
					dialog.appendChild(divs.battle_div);
					dialog.appendChild(divs.previous);
					dialog.appendChild(divs.next);
				};
				dialog.appendChild(battle_div2);
				game.kzol_kzsg_clickFk(battle_div2);
				_status.kzol_kzsg_divs9.battle_div2=battle_div2;
				var num1=0;
				for(var i in battle){
					var battle_div3=ui.create.div('.menu');
					battle_div3.style.height='120px';
					battle_div3.style.top=(50+130*num1)+'px';
					battle_div3.style.width='calc(95%)';
					battle_div3.style.left='calc(2.5%)';
					battle_div3.style.cursor='pointer';
					//battle_div3.style['font-size']='20px';
					//battle_div3.style['line-height']='30px';
					//battle_div3.style['text-align']='left';
					//battle_div3.style['font-family']="'STXinwei','xinwei'";
					battle_div3.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
					battle_div3.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
					battle_div3.style.borderRadius='3px';
					battle_div3.link=battle[i];
					battle_div3.link1=name;
					battle_div3.link2=i;
					battle_div3.onclick=function(){
						if(lib.config.kzol_kzsg.battle[this.link1]!=undefined&&lib.config.kzol_kzsg.battle[this.link1][this.link2-1]!=undefined&&lib.config.kzol_kzsg.battle[this.link1][this.link2-1]==false){
							game.say1('请先通关前一关');
							return ;
						};
						var battle=this.link;
						var limit=battle.limit;
						_status.kzol_kzsg_divs10.div_chooseArmy.link=limit;
						_status.kzol_kzsg_divs10.div11.link=battle;
						_status.kzol_kzsg_armyToBattle=[];
						_status.kzol_kzsg_onChapter=this.link1;
						_status.kzol_kzsg_onGk=this.link2;
						_status.kzol_kzsg_onbattle_div_name=this.link_name;
						_status.kzol_kzsg_onbattle_div_reward1=this.link_reward1;
						_status.kzol_kzsg_onbattle_div_reward=this.link_reward;
						delete _status.kzol_kzsg_changeCA;
						game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs9);
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs10);
					};
					dialog.appendChild(battle_div3);
					game.kzol_kzsg_clickFk(battle_div3);
					var battle_div3_name=ui.create.div('');
					battle_div3_name.style.height='35px';
					battle_div3_name.style.top='5px';
					battle_div3_name.style.width='calc(40%)';
					battle_div3_name.style.left='2.5px';
					battle_div3_name.style['font-size']='35px';
					battle_div3_name.style['text-align']='left';
					battle_div3_name.style['font-family']="'STXinwei','xinwei'";
					battle_div3.link_name=battle_div3_name;
					var color1='#00FF00';
					if(lib.config.kzol_kzsg.battle[name][i]!=true) color1='#FF0000';
					battle_div3_name.innerHTML='<span style="color:'+color1+'">'+battle[i].name+'</span>';
					battle_div3.appendChild(battle_div3_name);
					var battle_div3_reward=ui.create.div('');
					battle_div3_reward.style.height='45px';
					battle_div3_reward.style.top='70px';
					battle_div3_reward.style.width='calc(17.5%)';
					battle_div3_reward.style.left='7.5px';
					battle_div3_reward.style['font-size']='15px';
					battle_div3_reward.style['text-align']='left';
					battle_div3_reward.style['font-family']="'STXinwei','xinwei'";
					battle_div3_reward.style['overflow-x']='hidden';
					battle_div3_reward.style['overflow-y']='scroll';
					if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(battle_div3_reward);
					battle_div3.link_reward=battle_div3_reward;
					var str='首通奖励：';
					var str_bool=true;
					for(var j in battle[i].reward){
						var str1='';
						var bool_a=false;
						for(var b in lib.kzol_kzsg_ck){
							if(b==j) bool_a=true;
						};
						if(j=='kzsg_coin'){
							str1+='<br>&nbsp-五铢钱x'+battle[i].reward[j];
						}else if(j=='kzsg_coin1'){
							str1+='<br>&nbsp-古币x'+battle[i].reward[j];
						}else if(bool_a==true){
							str1+='<br>&nbsp-'+j+'抽卡x'+battle[i].reward[j];
						}else{
							str1+='<br>&nbsp-'+game.kzol_kzsg_changeStr(get.translation(j),j.slice(j.length-1,j.length))+'x'+battle[i].reward[j];
						};
						str+=str1;
						str_bool=false;
					};
					if(lib.config.kzol_kzsg.battle[name][i]==true) str='首通奖励：<br>&nbsp-已获得';
					if(str_bool==true) str+='<br>&nbsp-无';
					battle_div3_reward.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">'+str+'</span>';
					battle_div3.appendChild(battle_div3_reward);
					var battle_div3_reward1=ui.create.div('');
					battle_div3_reward1.style.height='45px';
					battle_div3_reward1.style.top='70px';
					battle_div3_reward1.style.width='calc(17.5%)';
					battle_div3_reward1.style.left='calc(17.5% + 7.5px)';
					battle_div3_reward1.style['font-size']='15px';
					battle_div3_reward1.style['text-align']='left';
					battle_div3_reward1.style['font-family']="'STXinwei','xinwei'";
					battle_div3_reward1.style['overflow-x']='hidden';
					battle_div3_reward1.style['overflow-y']='scroll';
					if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(battle_div3_reward1);
					battle_div3.link_reward1=battle_div3_reward1;
					var str='每日通关奖励：';
					var str_bool=true;
					for(var j in battle[i].daily_reward){
						var str1='';
						var bool_a=false;
						for(var b in lib.kzol_kzsg_ck){
							if(b==j) bool_a=true;
						};
						if(j=='kzsg_coin'){
							str1+='<br>&nbsp-五铢钱x'+battle[i].daily_reward[j];
						}else if(j=='kzsg_coin1'){
							str1+='<br>&nbsp-古币x'+battle[i].daily_reward[j];
						}else if(bool_a==true){
							str1+='<br>&nbsp-'+j+'抽卡x'+battle[i].daily_reward[j];
						}else{
							str1+='<br>&nbsp-'+game.kzol_kzsg_changeStr(get.translation(j),j.slice(j.length-1,j.length))+'x'+battle[i].daily_reward[j];
						};
						str+=str1;
						str_bool=false;
					};
					if(str_bool==true) str+='<br>&nbsp-无';
					if(lib.config.kzol_kzsg.daily_reward[name][i]!=undefined) str='每日通关奖励：<br>&nbsp-今日已获得';
					battle_div3_reward1.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">'+str+'</span>';
					battle_div3.appendChild(battle_div3_reward1);
					var battle_div3_army=ui.create.div('.menu');
					battle_div3_army.style.height='calc(100%)';
					battle_div3_army.style.top='0px';
					battle_div3_army.style.width='calc(60%)';
					battle_div3_army.style.right='0px';
					battle_div3_army.style['text-align']='left';
					battle_div3_army.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
					battle_div3_army.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
					battle_div3_army.style['overflow-x']='scroll';
					battle_div3_army.style['overflow-y']='hidden';
					if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(battle_div3_army);
					battle_div3_army.addEventListener('mousewheel',function(e){
						var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
						var move_s=delD>0?-30:30;
						this.scrollLeft+=move_s;
					});
					battle_div3.appendChild(battle_div3_army);
					var num2=0;
					for(var j in battle[i].army){
						var leader1=battle[i].army[j].leader[0];
						if(leader1==undefined){
							leader1=battle[i].army[j].number[0];
						};
						var leader2=leader1.slice(0,leader1.length-1);
						var battle_div3_armya=ui.create.div('.menu');
						battle_div3_armya.style.height='calc(100%)';
						battle_div3_armya.style.top='0px';
						battle_div3_armya.style.width='100px';
						battle_div3_armya.style.left=(105*num2)+'px';
						battle_div3_armya.style.cursor='-webkit-zoom-in';
						battle_div3_armya.setBackgroundImage('extension/扩展ol/'+leader2+'.jpg');
						battle_div3_armya.style.backgroundSize='cover';
						battle_div3_armya.link=battle[i].army[j];
						battle_div3_armya.onmouseover=function(){
							var info=_status.kzol_kzsg_dialogs9.info;
							var info_div=_status.kzol_kzsg_divs9.info_div;
							var army=this.link;
							info.style.top=window.event.clientY/game.documentZoom+'px';
							info.style.display='';
							var num3=0;
							for(var i=0;i<info_div.childNodes.length;i++){
								num3++
							};
							for(var i=0;i<num3;i++){
								info_div.removeChild(info_div.childNodes[0]);
							};
							for(var i in army.leader){
								var info_div_card=ui.create.button(army.leader[i],'character');
								info_div_card.style.width='90px';
								info_div_card.style.height='120px';
								info_div_card.style.left='2.5px';
								info_div_card.style.top='10px';
								info_div.appendChild(info_div_card);
							};
							for(var i in army.number){
								var info_div_card=ui.create.button(army.number[i],'character');
								info_div_card.style.width='90px';
								info_div_card.style.height='120px';
								info_div_card.style.left='2.5px';
								info_div_card.style.top='10px';
								info_div.appendChild(info_div_card);
							};
							info.show();
						};
						battle_div3_armya.onmouseout=function(){
							var info=_status.kzol_kzsg_dialogs9.info;
							var info_div=_status.kzol_kzsg_divs9.info_div;
							info.style.display='none';
						};
						var battle_div3_armya_name=ui.create.div('');
						battle_div3_armya_name.style.height='calc(100% - 10px)';
						battle_div3_armya_name.style.top='2.5px';
						battle_div3_armya_name.style.width='20px';
						battle_div3_armya_name.style.left='2.5px';
						battle_div3_armya_name.style['font-size']='20px';
						//battle_div3_armya_name.style['text-align']='left';
						battle_div3_armya_name.style['font-family']="'STXinwei','xinwei'";
						if(battle[i].army[j].leader[0]!=undefined){
							battle_div3_armya_name.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">'+get.translation(leader1)+'军</span>';
						}else{
							battle_div3_armya_name.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">无主军队</span>';
						};
						battle_div3_armya.appendChild(battle_div3_armya_name);
						battle_div3_army.appendChild(battle_div3_armya);
						num2++;
					};
					num1++;
				};
			};
			dialog.appendChild(battle_div);
			game.kzol_kzsg_clickFk(battle_div);
			_status.kzol_kzsg_divs9.battle_div=battle_div;
			var previous=ui.create.div('');
			previous.style.height='calc(90%)';
			previous.style.width='calc(10%)';
			previous.style.left='0px';
			previous.style.top='calc(5%)';
			previous.style['text-align']='center';
			previous.style['font-family']="'STXinwei','xinwei'";
			//previous.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			//previous.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			previous.style.borderRadius='3px';
			previous.innerHTML='<span style="cursor:pointer;font-size:55px;color:white;text-shadow:black 0 0 2px;line-height:378px;font-family:xinwei"><</span>';
			previous.onclick=function(){
				if(battle_div.link-1<0){
					game.say1('这已是第一章');
				}else{
					battle_div.link-=1;
					battle_div.innerHTML='<span style="font-size:35px;color:white;text-shadow:black 0 0 2px;line-height:378px;font-family:xinwei">第'+(battle_div.link+1)+'章 '+list_battle_name[battle_div.link]+'</span>';
					battle_div.setBackgroundImage('extension/扩展ol/'+list_battle_name[battle_div.link]+'.png');
					ui.background.setBackgroundImage('extension/扩展ol/'+list_battle_name[battle_div.link]+'.png');
				};
			};
			dialog.appendChild(previous);
			game.kzol_kzsg_clickFk(previous);
			_status.kzol_kzsg_divs9.previous=previous;
			var next=ui.create.div('');
			next.style.height='calc(90%)';
			next.style.width='calc(10%)';
			next.style.right='0px';
			next.style.top='calc(5%)';
			next.style['text-align']='center';
			next.style['font-family']="'STXinwei','xinwei'";
			//next.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			//next.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			next.style.borderRadius='3px';
			next.innerHTML='<span style="cursor:pointer;font-size:55px;color:white;text-shadow:black 0 0 2px;line-height:378px;font-family:xinwei">></span>';
			next.onclick=function(){
				if(list_battle_name[battle_div.link+1]==undefined){
					game.say1('这已是最后一章');
				}else{
					battle_div.link+=1;
					battle_div.innerHTML='<span style="font-size:35px;color:white;text-shadow:black 0 0 2px;line-height:378px;font-family:xinwei">第'+(battle_div.link+1)+'章 '+list_battle_name[battle_div.link]+'</span>';
					battle_div.setBackgroundImage('extension/扩展ol/'+list_battle_name[battle_div.link]+'.png');
					ui.background.setBackgroundImage('extension/扩展ol/'+list_battle_name[battle_div.link]+'.png');
				};
			};
			dialog.appendChild(next);
			game.kzol_kzsg_clickFk(next);
			_status.kzol_kzsg_divs9.next=next;
			var info=ui.create.dialog('hidden');
			info.classList.add('popped');
			info.classList.add('static');
			info.style.animation='fadeShow .3s';
			info.style['-webkit-animation']='fadeShow .3s';
			info.style.height='150px';
			info.style.width='720px';
			info.style.left='calc(50% - 360px)';
			info.style['pointer-events']='none';
			info.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			info.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			var info_div=ui.create.div('.menu');
			info_div.style.height='calc(100%)';
			info_div.style.width='calc(100%)';
			info_div.style.left='0px';
			info_div.style.top='0px';
			info_div.style['text-align']='left';
			info_div.style['pointer-events']='none';
			info_div.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			info_div.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			//info_div.style['overflow-x']='hidden';
			//info_div.style['overflow-y']='scroll';
			info.appendChild(info_div);
			_status.kzol_kzsg_dialogs9.info=info;
			_status.kzol_kzsg_divs9.info_div=info_div;
			game.kzol_dialogs_open(_status.kzol_kzsg_dialogs9);
			game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs9);
			
			
			_status.kzol_kzsg_dialogs10={};
			_status.kzol_kzsg_divs10={};
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='235px';
			dialog.style.width='390px';
			dialog.style.top='calc(50% - 117.5px)';
			dialog.style.left='calc(50% - 195px)';
			dialog.setBackgroundImage('extension/扩展ol/Background3.jpg');
			dialog.style.backgroundSize="100% 100%";
			dialog.classList.add('popped');
			dialog.classList.add('static');
			dialog.style.animation='fadeInDown .3s';
			dialog.style['-webkit-animation']='fadeInDown .3s';
			_status.kzol_kzsg_dialogs10.dialog=dialog;
			var div10=ui.create.div('','<span style="font-size:30px;color:white;text-shadow:black 0 0 2px;font-weight:600;font-family:xinwei">请选择出战军队</span>');
			div10.style.height='30px';
			div10.style.width='390px';
			div10.style.left='0px';
			div10.style.top='10px';
			dialog.appendChild(div10);
			var div_chooseArmy=ui.create.div('');
			div_chooseArmy.style.height='125px';
			div_chooseArmy.style.width='390px';
			div_chooseArmy.style.top='50px';
			div_chooseArmy.style.left='0px';
			div_chooseArmy.style['text-align']='center';
			div_chooseArmy.style['overflow-x']='scroll';
			div_chooseArmy.style['overflow-y']='hidden';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(div_chooseArmy);
			div_chooseArmy.addEventListener('mousewheel',function(e){
				var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
				var move_s=delD>0?-30:30;
				this.scrollLeft+=move_s;
			});
			dialog.appendChild(div_chooseArmy);
			_status.kzol_kzsg_divs10.div_chooseArmy=div_chooseArmy;
			setInterval(function(){
				var div_chooseArmy=_status.kzol_kzsg_divs10.div_chooseArmy;
				if(_status.kzol_kzsg_changeCA!=true){
					var num=0;
					for(var i=0;i<div_chooseArmy.childNodes.length;i++){
						num++
					};
					for(var i=0;i<num;i++){
						div_chooseArmy.removeChild(div_chooseArmy.childNodes[0]);
					};
					if(div_chooseArmy.link!=undefined&&_status.kzol_kzsg_armyToBattle!=undefined){
						var limit=div_chooseArmy.link;
						if(limit==1){
							div_chooseArmy.style.width='105px';
							div_chooseArmy.style.left='142.5px';
						}else if(limit==2){
							div_chooseArmy.style.width='200px';
							div_chooseArmy.style.left='95px';
						}else if(limit==3){
							div_chooseArmy.style.width='295px';
							div_chooseArmy.style.left='47.5px';
						}else if(limit>=4){
							div_chooseArmy.style.width='390px';
							div_chooseArmy.style.left='0px';
						};
						for(var i=0;i<limit;i++){
							var div=ui.create.div('.player');
							div.style.width='90px';
							div.style.height='105px';
							div.style.left=(7.5+95*i)+'px';
							div.style.top='10px';
							div.style['cursor']='pointer';
							div.link=i;
							if(_status.kzol_kzsg_armyToBattle[i]==undefined){
								div.style['font-size']='30px';
								div.style['text-align']='center';
								div.style['font-family']="'STXinwei','xinwei'";
								div.style['line-height']='100px';
								div.innerHTML='<span style="cursor:pointer;">选择</span>';
							}else{
								var army_num=_status.kzol_kzsg_armyToBattle[i];
								var army=lib.config.kzol_kzsg.army[army_num];
								var leaders=[];
								for(var j in army.leader){
									leaders.push(army.leader[j]);
								};
								var leader=lib.config.kzol_kzsg.card[leaders[0]];
								div.setBackground(leader.name+leader.quailty,'character');
								var div_name=ui.create.div('');
								div_name.style.width='15px';
								div_name.style.height=(div.offsetHeight-10)+'px';
								div_name.style.left='5px';
								div_name.style.top='5px';
								div_name.style['font-size']='15px';
								div_name.style['font-family']="'STXinwei','xinwei'";
								div_name.innerHTML=army.name;
								div.appendChild(div_name);
							};
							div.onclick=function(){
								//delete _status.kzol_kzsg_changeCK1;
								_status.kzol_kzsg_onChooseArmy=this.link;
								game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs10);
								game.kzol_dialogs_show(_status.kzol_kzsg_dialogs6);
							};
							div_chooseArmy.appendChild(div);
						};
					};
					_status.kzol_kzsg_changeCA=true;
				};
			},50);
			var div11=ui.create.div('.menubutton.large','<span style="cursor:pointer;">出战</span>',function(){
				var army={};
				var num=1;
				var divs10=_status.kzol_kzsg_divs10;
				var battle=divs10.div11.link;
				var army1=battle.army;
				var armyToBattle=_status.kzol_kzsg_armyToBattle;
				if(armyToBattle.length==0){
					game.say1('未选择出战军队');
					return ;
				};
				_status.kzol_kzsg_onbattle=battle;
				game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs10);
				ui.window.appendChild(ui.arena);
				for(var i=0;i<armyToBattle.length;i++){
					var army_num=armyToBattle[i];
					army[num]=lib.config.kzol_kzsg.army[army_num];
					num++;
				};
				game.kzol_playerAwar(army,army1);
				delete divs10.div_chooseArmy.link;
				delete divs10.div11.link;
				delete _status.kzol_kzsg_armyToBattle;
				delete _status.kzol_kzsg_changeCA;
			});
			div11.style.left='83.3px'
			div11.style.top='185px'
			dialog.appendChild(div11);
			game.kzol_kzsg_clickFk(div11);
			_status.kzol_kzsg_divs10.div11=div11;
			var div12=ui.create.div('.menubutton.large','<span style="cursor:pointer;">撤退</span>',function(){
				var divs10=_status.kzol_kzsg_divs10;
				delete divs10.div_chooseArmy.link;
				delete divs10.div11.link;
				delete _status.kzol_kzsg_onChapter;
				delete _status.kzol_kzsg_onGk;
				delete _status.kzol_kzsg_onbattle_div_name;
				delete _status.kzol_kzsg_onbattle_div_reward;
				delete _status.kzol_kzsg_onbattle_div_reward1;
				delete _status.kzol_kzsg_armyToBattle;
				delete _status.kzol_kzsg_changeCA;
				game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs10);
				if(_status.kzol_kzsg_onJJC!=undefined){
					game.kzol_dialogs_show(_status.kzol_kzsg_dialogs16);
					delete _status.kzol_kzsg_onJJC;
				}else if(_status.kzol_kzsg_onPKC!=undefined){
					game.kzol_dialogs_show(_status.kzol_kzsg_dialogs18);
					delete _status.kzol_kzsg_onPKC;
					delete _status.kzol_kzsg_PKC_pm;
					delete _status.kzol_kzsg_PKC_name;
				}else if(_status.kzol_kzsg_onBoss!=undefined){
					game.kzol_dialogs_show(_status.kzol_kzsg_dialogs22);
					delete _status.kzol_kzsg_onBoss;
				}else{
					game.kzol_dialogs_show(_status.kzol_kzsg_dialogs9);
				};
			});
			div12.style.left='236.6px'
			div12.style.top='185px'
			dialog.appendChild(div12);
			game.kzol_kzsg_clickFk(div12);
			game.kzol_dialogs_open(_status.kzol_kzsg_dialogs10);
			game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs10);
			
			
			_status.kzol_kzsg_dialogs11={};
			_status.kzol_kzsg_divs11={};
			var background=ui.create.dialog('hidden');
			background.style.height='calc(100%)';
			background.style.width='calc(100%)';
			background.style.left='0px';
			background.style.top='0px';
			background.style['zIndex']=0;
			_status.kzol_kzsg_dialogs11.background=background;
			var div6=ui.create.div();
			div6.style.height='2000px';
			div6.style.width='2000px';
			div6.style.left='-10px';
			div6.style.top='-10px';
			setTimeout(function(){
				div6.onclick=function(){
					game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs11);
					game.kzol_dialogs_show(_status.kzol_kzsg_dialogs1);
				};
			},750);
			background.add(div6);
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='500px';
			dialog.style.width='720px';
			dialog.style.left='calc(50% - 360px)';
			dialog.style.top='calc(50% - 250px)';
			dialog.classList.add('popped');
			dialog.classList.add('static');
			dialog.style.animation='fadeInDown .3s';
			dialog.style['-webkit-animation']='fadeInDown .3s';
			_status.kzol_kzsg_dialogs11.dialog=dialog;
			var alternative=ui.create.div('.menu');
			alternative.style.height='60px';
			alternative.style.width='calc(100% - 20px)';
			alternative.style.top='10px';
			alternative.style.left='10px';
			alternative.style['text-align']='left';
			alternative.style['overflow-x']='scroll';
			alternative.style['overflow-y']='hidden';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(alternative);
			alternative.addEventListener('mousewheel',function(e){
				var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
				var move_s=delD>0?-30:30;
				this.scrollLeft+=move_s;
			});
			dialog.appendChild(alternative);
			_status.kzol_kzsg_divs11.alternative=alternative;
			var a_div=ui.create.div('.menubutton.large','<span style="cursor:pointer;">单卡</span>');
			a_div.style['font-size']='30px';
			a_div.style['line-height']='40px';
			a_div.style['font-family']="'STXinwei','xinwei'";
			a_div.style.top='5px';
			a_div.style.left='5px';
			a_div.style.height='40px';
			a_div.style.width='110px';
			a_div.style.borderRadius='5px';
			a_div.onclick=function(){
				_status.kzol_kzsg_dialogs11.yjgk.style.display='none';
				if(_status.kzol_kzsg_dialogs11.dialog.style.display!='none'){
					_status.kzol_kzsg_dialogs11.rushSD.style.display='';
				};
				var menu=_status.kzol_kzsg_divs11.menu;
				var num=0;
				for(var i=0;i<menu.childNodes.length;i++){
					num++
				};
				for(var i=0;i<num;i++){
					menu.removeChild(menu.childNodes[0]);
				};
				for(var i=1;i<9;i++){
					var card=lib.config.kzol_kzsg.sd.item[i-1];
					var m_div=ui.create.div('.menu');
					m_div.style.height='calc(50%)';
					m_div.style.width='calc(25%)';
					if(i<=4){
						m_div.style.top='0px';
					}else{
						m_div.style.top='calc(50%)';
					};
					m_div.style.left='calc('+(25*((i-1)%4))+'%)';
					m_div.style.borderRadius='0px';
					m_div.style['box-shadow']='rgba(0, 0, 0, 0.55) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 3px 10px';
					menu.appendChild(m_div);
					if(card!=undefined){
						var m_div_card=ui.create.button(card.name+card.quailty,'character');
						m_div_card.style.width='90px';
						m_div_card.style.height='120px';
						m_div_card.style.left='0px';
						m_div_card.style.top='6.25px';
						m_div.appendChild(m_div_card);
						var m_div_value=ui.create.div('');
						m_div_value.style.height='20px';
						m_div_value.style.width='calc(100%)';
						m_div_value.style.top='136px';
						m_div_value.style.left='0px';
						m_div_value.style['font-size']='16px';
						m_div_value.style['text-align']='center';
						m_div_value.style['font-family']="'STXinwei','xinwei'";
						m_div_value.style['line-height']='20px';
						var str='';
						for(var j in card.value){
							if(j=='coin'){
								str+=card.value[j]+'五铢钱';
							}else{
								str+=card.value[j]+'古币';
							};
						};
						m_div_value.innerHTML=str;
						m_div.appendChild(m_div_value);
						var m_div_buy=ui.create.div('.menu');
						m_div_buy.style.height='40px';
						m_div_buy.style.width='120px';
						m_div_buy.style.top='158.75px';
						m_div_buy.style.left='27.5px';
						m_div_buy.style['font-size']='30px';
						m_div_buy.style['text-align']='center';
						m_div_buy.style['font-family']="'STXinwei','xinwei'";
						m_div_buy.style['line-height']='40px';
						m_div_buy.innerHTML='<span style="cursor:pointer;">购买</span>';
						m_div_buy.link=card;
						m_div_buy.onclick=function(){
							var card=this.link;
							var bool=true;
							var bool1=true;
							if(card.value!=undefined){
								if(card.value.coin!=undefined&&lib.config.kzol_kzsg.coin<card.value.coin) bool=false;
								if(card.value.coin1!=undefined&&lib.config.kzol_kzsg.coin1<card.value.coin1) bool1=false;
							}else{
								return ;
							};
							if(bool==false){
								game.say1('五铢钱不足');
								return ;
							};
							if(bool1==false){
								game.say1('古币不足');
								return ;
							};
							if(confirm('是否购买'+get.translation(card.name+card.quailty)+'？')){
								if(card.value.coin!=undefined){
									game.kzol_changeCoin(-card.value.coin);
								}else if(card.value.coin1!=undefined){
									game.kzol_changeCoin(-card.value.coin1,'coin1');
								};
								game.kzol_kzsg_gainCard(card.name,card.quailty);
								lib.config.kzol_kzsg.sd.item.remove(card);
								game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
								if(_status!=undefined&&_status.kzol_kzsg_divs11!=undefined&&_status.kzol_kzsg_divs11.a_div!=undefined) _status.kzol_kzsg_divs11.a_div.onclick();
							};
						};
						m_div.appendChild(m_div_buy);
						game.kzol_kzsg_clickFk(m_div_buy);
					};
				};
			};
			alternative.appendChild(a_div);
			game.kzol_kzsg_clickFk(a_div);
			_status.kzol_kzsg_divs11.a_div=a_div;
			var a_div1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">卡包</span>');
			a_div1.style['font-size']='30px';
			a_div1.style['line-height']='40px';
			a_div1.style['font-family']="'STXinwei','xinwei'";
			a_div1.style.top='5px';
			a_div1.style.left='130px';
			a_div1.style.height='40px';
			a_div1.style.width='110px';
			a_div1.style.borderRadius='5px';
			a_div1.onclick=function(){
				_status.kzol_kzsg_dialogs11.rushSD.style.display='none';
				_status.kzol_kzsg_dialogs11.yjgk.style.display='none';
				var menu=_status.kzol_kzsg_divs11.menu;
				var num=0;
				for(var i=0;i<menu.childNodes.length;i++){
					num++
				};
				for(var i=0;i<num;i++){
					menu.removeChild(menu.childNodes[0]);
				};
				var num=0;
				for(var i in lib.kzol_kzsg_kb){
					var kb=lib.kzol_kzsg_kb[i];
					var m_div=ui.create.div('.menu');
					m_div.style.height='calc(100%)';
					m_div.style.width='calc(30%)';
					m_div.style.top='0px';
					m_div.style.left='calc('+(33.3*num)+'%)';
					m_div.style.borderRadius='0px';
					menu.appendChild(m_div);
					var m_div_name=ui.create.div('');
					m_div_name.style.height='40px';
					m_div_name.style.width='calc(100%)';
					m_div_name.style.top='40px';
					m_div_name.style.left='0px';
					m_div_name.style['font-size']='35px';
					m_div_name.style['text-align']='center';
					m_div_name.style['font-family']="'STXinwei','xinwei'";
					m_div_name.style['line-height']='40px';
					m_div_name.innerHTML=i;
					m_div.appendChild(m_div_name);
					var m_div_info=ui.create.div('');
					m_div_info.style.height='200px';
					m_div_info.style.width='calc(100% - 5px)';
					m_div_info.style.top='100px';
					m_div_info.style.left='5px';
					m_div_info.style['font-size']='18px';
					m_div_info.style['text-align']='left';
					m_div_info.style['font-family']="'STXinwei','xinwei'";
					var str='';
					if(kb.info!=undefined) str+='介绍:<br>&nbsp&nbsp'+kb.info+'<br><br>';
					if(kb.value!=undefined){
						str+='价格:每包'+kb.value;
						if(kb.value_type==undefined){
							str+='五铢钱';
						}else{
							str+='古币';
						};
					};
					m_div_info.innerHTML=str;
					m_div.appendChild(m_div_info);
					var m_div_buy=ui.create.div('.menu');
					m_div_buy.style.height='40px';
					m_div_buy.style.width='120px';
					m_div_buy.style.top='310px';
					m_div_buy.style.left='45px';
					m_div_buy.style['font-size']='23px';
					m_div_buy.style['text-align']='center';
					m_div_buy.style['font-family']="'STXinwei','xinwei'";
					m_div_buy.style['line-height']='40px';
					m_div_buy.innerHTML='<span style="cursor:pointer;">购买1包</span>';
					m_div_buy.link=kb;
					m_div_buy.onclick=function(){
						var kb=this.link;
						var value=kb.value;
						if(lib.config.kzol_kzsg.coin<value){
							game.say1('五铢钱不足');
							return ;
						};
						var item=kb.item();
						var num=kb.num;
						var result=item.randomGets(num);
						game.kzol_changeCoin(-value);
						for(var i=0;i<result.length;i++){
							lib.config.kzol_kzsg.kb.push(result[i]);
						};
						delete _status.kzol_kzsg_changeKP;
						game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs11);
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs12);
						game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
					};
					m_div.appendChild(m_div_buy);
					game.kzol_kzsg_clickFk(m_div_buy);
					var m_div_buy1=ui.create.div('.menu');
					m_div_buy1.style.height='40px';
					m_div_buy1.style.width='120px';
					m_div_buy1.style.top='360px';
					m_div_buy1.style.left='45px';
					m_div_buy1.style['font-size']='23px';
					m_div_buy1.style['text-align']='center';
					m_div_buy1.style['font-family']="'STXinwei','xinwei'";
					m_div_buy1.style['line-height']='40px';
					m_div_buy1.innerHTML='<span style="cursor:pointer;">购买5包</span>';
					m_div_buy1.link=kb;
					m_div_buy1.onclick=function(){
						var kb=this.link;
						var value=kb.value*5;
						if(lib.config.kzol_kzsg.coin<value){
							game.say1('五铢钱不足');
							return ;
						};
						var item=kb.item();
						var num=kb.num*5;
						var result=item.randomGets(num);
						game.kzol_changeCoin(-value);
						for(var i=0;i<result.length;i++){
							lib.config.kzol_kzsg.kb.push(result[i]);
						};
						delete _status.kzol_kzsg_changeKP;
						game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs11);
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs12);
						game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
					};
					m_div.appendChild(m_div_buy1);
					game.kzol_kzsg_clickFk(m_div_buy);
					num++;
				};
			};
			alternative.appendChild(a_div1);
			game.kzol_kzsg_clickFk(a_div1);
			_status.kzol_kzsg_divs11.a_div1=a_div1;
			var a_div2=ui.create.div('.menubutton.large','<span style="cursor:pointer;">抽卡</span>');
			a_div2.style['font-size']='30px';
			a_div2.style['line-height']='40px';
			a_div2.style['font-family']="'STXinwei','xinwei'";
			a_div2.style.top='5px';
			a_div2.style.left='255px';
			a_div2.style.height='40px';
			a_div2.style.width='110px';
			a_div2.style.borderRadius='5px';
			a_div2.onclick=function(){
				_status.kzol_kzsg_dialogs11.rushSD.style.display='none';
				_status.kzol_kzsg_dialogs11.yjgk.style.display='none';
				var menu=_status.kzol_kzsg_divs11.menu;
				var num=0;
				for(var i=0;i<menu.childNodes.length;i++){
					num++
				};
				for(var i=0;i<num;i++){
					menu.removeChild(menu.childNodes[0]);
				};
				var num=0;
				for(var i in lib.kzol_kzsg_ck){
					var ck=lib.kzol_kzsg_ck[i];
					var m_div=ui.create.div('.menu');
					m_div.style.height='calc(100%)';
					m_div.style.width='calc(30%)';
					m_div.style.top='0px';
					m_div.style.left='calc('+(33.3*num)+'%)';
					m_div.style.borderRadius='0px';
					menu.appendChild(m_div);
					var m_div_name=ui.create.div('');
					m_div_name.style.height='40px';
					m_div_name.style.width='calc(100%)';
					m_div_name.style.top='40px';
					m_div_name.style.left='0px';
					m_div_name.style['font-size']='35px';
					m_div_name.style['text-align']='center';
					m_div_name.style['font-family']="'STXinwei','xinwei'";
					m_div_name.style['line-height']='40px';
					m_div_name.innerHTML=i;
					m_div.appendChild(m_div_name);
					var m_div_info=ui.create.div('');
					m_div_info.style.height='200px';
					m_div_info.style.width='calc(100% - 5px)';
					m_div_info.style.top='100px';
					m_div_info.style.left='5px';
					m_div_info.style['font-size']='18px';
					m_div_info.style['text-align']='left';
					m_div_info.style['font-family']="'STXinwei','xinwei'";
					var str='';
					if(ck.info!=undefined) str+='介绍:<br>&nbsp&nbsp'+ck.info+'<br><br>';
					if(lib.config.kzol_kzsg.ck[i]!=undefined) str+='拥有次数:'+lib.config.kzol_kzsg.ck[i]+'次';
					m_div_info.innerHTML=str;
					m_div.appendChild(m_div_info);
					var m_div_buy=ui.create.div('.menu');
					m_div_buy.style.height='40px';
					m_div_buy.style.width='120px';
					m_div_buy.style.top='310px';
					m_div_buy.style.left='45px';
					m_div_buy.style['font-size']='23px';
					m_div_buy.style['text-align']='center';
					m_div_buy.style['font-family']="'STXinwei','xinwei'";
					m_div_buy.style['line-height']='40px';
					m_div_buy.innerHTML='<span style="cursor:pointer;">抽卡</span>';
					m_div_buy.link=ck;
					m_div_buy.link1=i;
					m_div_buy.link_div=m_div_info;
					m_div_buy.onclick=function(){
						var ck=this.link;
						var name=this.link1;
						var bool=false;
						for(var i in lib.config.kzol_kzsg.ck2){
							bool=true;
						};
						if(bool==true){
							game.say1('请先完成上次抽卡');
						}else{
							if(lib.config.kzol_kzsg.ck[name]<=0){
								game.say1('次数不足');
								return ;
							};
							lib.config.kzol_kzsg.ck[name]-=1;
							var str='';
							if(ck.info!=undefined) str+='介绍:<br>&nbsp&nbsp'+ck.info+'<br><br>';
							if(lib.config.kzol_kzsg.ck[name]!=undefined) str+='拥有次数:'+lib.config.kzol_kzsg.ck[name]+'次';
							this.link_div.innerHTML=str;
							var item=ck.item();
							lib.config.kzol_kzsg.ck2=item;
							game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
						};
						delete _status.kzol_kzsg_changeCK2;
						game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs11);
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs13);
					};
					m_div.appendChild(m_div_buy);
					game.kzol_kzsg_clickFk(m_div_buy);
					num++;
				};
			};
			alternative.appendChild(a_div2);
			game.kzol_kzsg_clickFk(a_div2);
			_status.kzol_kzsg_divs11.a_div2=a_div2;
			var a_div3=ui.create.div('.menubutton.large','<span style="cursor:pointer;">刮刮乐</span>');
			a_div3.style['font-size']='30px';
			a_div3.style['line-height']='40px';
			a_div3.style['font-family']="'STXinwei','xinwei'";
			a_div3.style.top='5px';
			a_div3.style.left='380px';
			a_div3.style.height='40px';
			a_div3.style.width='110px';
			a_div3.style.borderRadius='5px';
			a_div3.onclick=function(){
				_status.kzol_kzsg_dialogs11.rushSD.style.display='none';
				_status.kzol_kzsg_dialogs11.yjgk.style.display='';
				var menu=_status.kzol_kzsg_divs11.menu;
				var num=0;
				for(var i=0;i<menu.childNodes.length;i++){
					num++
				};
				for(var i=0;i<num;i++){
					menu.removeChild(menu.childNodes[0]);
				};
				var title=ui.create.div('.menu');
				title.style.height='50px';
				title.style.width='360px';
				title.style.top='0px';
				title.style.left='0px';
				title.style['box-shadow']='rgb(0, 0, 0) 0 0 0 1px, rgba(0, 0, 0, 0) 0 3px 10px';
				title.style.borderRadius='0px';
				title.style['text-align']='center';
				title.style['font-size']='30px';
				title.style['line-height']='50px';
				title.style['font-family']="'STXinwei','xinwei'";
				title.innerHTML='今日奖池';
				menu.appendChild(title);
				var m_div=ui.create.div('.menu');
				m_div.style.height='360px';
				m_div.style.width='360px';
				m_div.style.top='50px';
				m_div.style.left='0px';
				m_div.style['box-shadow']='rgb(0, 0, 0) 0 0 0 1px, rgba(0, 0, 0, 0) 0 3px 10px';
				m_div.style.borderRadius='0px';
				menu.appendChild(m_div);
				var items=lib.config.kzol_kzsg.ggl.item;
				var items1=[];
				for(var i=0;i<items.length;i++){
					items1.push(items[i]);
				};
				var num_count=0;
				var interval=setInterval(function(){
					var num=6;
					if(num>items1.length) num=items1.length;
					for(var i=0;i<num;i++){
						var item=items1[0];
						var item_div=ui.create.div('.menu');
						item_div.style.height='60px';
						item_div.style.width='60px';
						item_div.style.top=(Math.floor(num_count/6)*60)+'px';
						item_div.style.left=(num_count%6*60)+'px';
						item_div.style['box-shadow']='rgb(0, 0, 0) 0 0 0 1px, rgba(0, 0, 0, 0) 0 3px 10px';
						item_div.style.borderRadius='0px';
						item_div.style.backgroundSize='cover';
						var div_image='extension/扩展ol/kzsg_'+item+'.jpg';
						for(var i in lib.kzol_kzsg_card){
							if(lib.kzol_kzsg_card[i].translate==item&&lib.kzol_kzsg_card[i].image!=undefined){
								div_image='extension/扩展ol/kzsg_image/'+lib.kzol_kzsg_card[i].image;
							};
						};
						item_div.setBackgroundImage(div_image);
						item_div.link=item;
						if(m_div) m_div.appendChild(item_div);
						items1.remove(item);
						num_count++;
						if(items1.length==0) clearInterval(interval);
					};
				},100);
				var m_div1=ui.create.div('.menu');
				m_div1.style.height='calc(100%)';
				m_div1.style.width='340px';
				m_div1.style.top='0px';
				m_div1.style.left='360px';
				m_div1.style['box-shadow']='rgb(0, 0, 0) 0 0 0 1px, rgba(0, 0, 0, 0) 0 3px 10px';
				m_div1.style.borderRadius='0px';
				m_div1.style['text-align']='left';
				menu.appendChild(m_div1);
				var ggk_result=ui.create.div();
				ggk_result.style.width='180px';
				ggk_result.style.height='240px';
				ggk_result.style.left='calc(50% - 90px)';
				ggk_result.style.top='calc(50% - 120px)';
				ggk_result.style.backgroundSize='cover';
				var div_image='extension/扩展ol/kzsg_'+lib.config.kzol_kzsg.ggl.result+'.jpg';
				for(var i in lib.kzol_kzsg_card){
					if(lib.kzol_kzsg_card[i].translate==lib.config.kzol_kzsg.ggl.result&&lib.kzol_kzsg_card[i].image!=undefined){
						div_image='extension/扩展ol/kzsg_image/'+lib.kzol_kzsg_card[i].image;
					};
				};
				ggk_result.setBackgroundImage(div_image);
				ggk_result.style.borderRadius='5px';
				m_div1.appendChild(ggk_result);
				if(lib.config.kzol_kzsg.ggl.finish!=true){
					var ggk_cover=document.createElement('canvas');
					ggk_result.appendChild(ggk_cover);
					ggk_cover.width=180;
					ggk_cover.height=240;
					var ctx=ggk_cover.getContext("2d");
					ctx.globalCompositeOperation="source-over";
					ctx.fillStyle='#aaaaaa';
					ctx.fillRect(0,0,180,240);
					ctx.fill();
					ctx.font="Bold 30px xinwei";
					ctx.textAlign="center";
					ctx.fillStyle="#999999";
					ctx.fillText("刮一刮",90,120);
					ctx.globalCompositeOperation='destination-out';
					var eventDown=function(e){
						e.preventDefault();
						this.ismousedown=true;
					};
					var eventMove=function(e){
						e.preventDefault();
						if(this.ismousedown&&this.finish!=true){
							if(e.changedTouches) e=e.changedTouches[e.changedTouches.length-1];
							var oX=ggk_result.offsetLeft;
							var oY=ggk_result.offsetTop;
							if(ggk_result.parentNode!=undefined){
								oX+=ggk_result.parentNode.offsetLeft;
								oY+=ggk_result.parentNode.offsetTop;
							};
							if(ggk_result.parentNode.parentNode!=undefined){
								oX+=ggk_result.parentNode.parentNode.offsetLeft;
								oY+=ggk_result.parentNode.parentNode.offsetTop;
							};
							if(ggk_result.parentNode.parentNode.parentNode!=undefined){
								oX+=ggk_result.parentNode.parentNode.offsetLeft;
								oY+=ggk_result.parentNode.parentNode.offsetTop;
							};
							var x=e.clientX/game.documentZoom+document.body.scrollLeft-oX-145;
							var y=e.clientY/game.documentZoom+document.body.scrollTop-oY+10;
							ctx.beginPath();
							ctx.arc(x,y,parseInt(window.getComputedStyle(document.documentElement, null)["font-size"])*1.2,0,Math.PI*2,true);
							ctx.fill();
						};
					};
					var eventUp=function(e){
						e.preventDefault();
						var a=ctx.getImageData(0,0,180,240);
						var j=0;
						for(var i=3;i<a.data.length;i+=4){
							if(a.data[i]==0) j++;
						}
						if(j>=a.data.length/5&&this.finish!=true){
							this.finish=true;
							ctx.clearRect(0,0,180,240);
							var list=[];
							for(var i in lib.kzol_kzsg_card){
								var card=lib.kzol_kzsg_card[i];
								if(lib.config.kzol_kzsg.ggl.result==card.translate&&
								lib.config.kzol_kzsg.ggl.item.contains(card.translate)){
									list.push(card);
								};
							};
							if(list.length>0){
								lib.config.kzol_kzsg.ggl.finish=true;
								game.say1('恭喜你，中奖了');
								game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
								var card=list.randomGet();
								game.kzol_kzsg_gainCard(card.name,card.quailty);
							}else{
								lib.config.kzol_kzsg.ggl.finish=true;
								game.say1('很可惜，没有中奖');
								game.kzol_changeCoin(100);
								game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
							};
						};
						this.ismousedown=false;
					};
					ggk_result.addEventListener("mousedown",eventDown,false);
					ggk_result.addEventListener("mousemove",eventMove,false);
					ggk_result.addEventListener("mouseup",eventUp,false);
					ggk_result.addEventListener('touchstart',eventDown, false);
					ggk_result.addEventListener('touchmove',eventMove,false);
					ggk_result.addEventListener('touchend',eventUp,false);
					_status.kzol_kzsg_div_ggk_result=ggk_result;
					_status.kzol_kzsg_div_ctx=ctx;
				};
			};
			alternative.appendChild(a_div3);
			game.kzol_kzsg_clickFk(a_div3);
			_status.kzol_kzsg_divs11.a_div3=a_div3;
			var menu=ui.create.div('.menu');
			menu.style.height='410px';
			menu.style.width='calc(100% - 20px)';
			menu.style.top='80px';
			menu.style.left='10px';
			menu.style['overflow-x']='scroll';
			menu.style['overflow-y']='hidden';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(menu);
			menu.addEventListener('mousewheel',function(e){
				var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
				var move_s=delD>0?-30:30;
				this.scrollLeft+=move_s;
			});
			dialog.appendChild(menu);
			for(var i=1;i<9;i++){
				var card=lib.config.kzol_kzsg.sd.item[i-1];
				var m_div=ui.create.div('.menu');
				m_div.style.height='calc(50%)';
				m_div.style.width='calc(25%)';
				if(i<=4){
					m_div.style.top='0px';
				}else{
					m_div.style.top='calc(50%)';
				};
				m_div.style.left='calc('+(25*((i-1)%4))+'%)';
				m_div.style.borderRadius='0px';
				m_div.style['box-shadow']='rgba(0, 0, 0, 0.55) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 3px 10px';
				menu.appendChild(m_div);
				if(card!=undefined){
					var m_div_card=ui.create.button(card.name+card.quailty,'character');
					m_div_card.style.width='90px';
					m_div_card.style.height='120px';
					m_div_card.style.left='0px';
					m_div_card.style.top='6.25px';
					m_div.appendChild(m_div_card);
					var m_div_value=ui.create.div('');
					m_div_value.style.height='20px';
					m_div_value.style.width='calc(100%)';
					m_div_value.style.top='136px';
					m_div_value.style.left='0px';
					m_div_value.style['font-size']='16px';
					m_div_value.style['text-align']='center';
					m_div_value.style['font-family']="'STXinwei','xinwei'";
					m_div_value.style['line-height']='20px';
					var str='';
					for(var j in card.value){
						if(j=='coin'){
							str+=card.value[j]+'五铢钱';
						}else{
							str+=card.value[j]+'古币';
						};
					};
					m_div_value.innerHTML=str;
					m_div.appendChild(m_div_value);
					var m_div_buy=ui.create.div('.menu');
					m_div_buy.style.height='40px';
					m_div_buy.style.width='120px';
					m_div_buy.style.top='158.75px';
					m_div_buy.style.left='27.5px';
					m_div_buy.style['font-size']='30px';
					m_div_buy.style['text-align']='center';
					m_div_buy.style['font-family']="'STXinwei','xinwei'";
					m_div_buy.style['line-height']='40px';
					m_div_buy.innerHTML='<span style="cursor:pointer;">购买</span>';
					m_div_buy.link=card;
					m_div_buy.onclick=function(){
						var card=this.link;
						var bool=true;
						var bool1=true;
						if(card.value!=undefined){
							if(card.value.coin!=undefined&&lib.config.kzol_kzsg.coin<card.value.coin) bool=false;
							if(card.value.coin1!=undefined&&lib.config.kzol_kzsg.coin1<card.value.coin1) bool1=false;
						}else{
							return ;
						};
						if(bool==false){
							game.say1('五铢钱不足');
							return ;
						};
						if(bool1==false){
							game.say1('古币不足');
							return ;
						};
						if(confirm('是否购买'+get.translation(card.name+card.quailty)+'？')){
							if(card.value.coin!=undefined){
								game.kzol_changeCoin(-card.value.coin);
							}else if(card.value.coin1!=undefined){
								game.kzol_changeCoin(-card.value.coin1,'coin1');
							};
							game.kzol_kzsg_gainCard(card.name,card.quailty);
							lib.config.kzol_kzsg.sd.item.remove(card);
							game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
							if(_status!=undefined&&_status.kzol_kzsg_divs11!=undefined&&_status.kzol_kzsg_divs11.a_div!=undefined) _status.kzol_kzsg_divs11.a_div.onclick();
						};
					};
					m_div.appendChild(m_div_buy);
				};
			};
			_status.kzol_kzsg_divs11.menu=menu;
			var rushSD=ui.create.dialog('hidden');
			rushSD.classList.add('popped');
			rushSD.classList.add('static');	
			rushSD.style.animation='fadelogIn .4s';
			rushSD.style['-webkit-animation']='fadelogIn .4s';
			rushSD.style.height='40px';
			rushSD.style.width='110px';
			rushSD.style.bottom='0px';
			rushSD.style.left='45px';
			rushSD.style.borderRadius='5px';
			rushSD.style['text-align']='center';
			rushSD.style['font-size']='25px';
			rushSD.style['line-height']='40px';
			rushSD.style['font-family']="'STXinwei','xinwei'";
			rushSD.style['background-image']='linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))';
			rushSD.style['cursor']='pointer';
			rushSD.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">刷新商店</span>';
			rushSD.onclick=function(){
				var coin1=lib.config.kzol_kzsg.coin1;
				if(coin1<15){
					game.say1('古币不足');
					return ;
				};
				if(confirm('是否花费15古币来刷新商店？')){
					game.kzol_changeCoin(-15,'coin1');
					var date=new Date();
					var year=date.getFullYear();
					var month=date.getMonth()+1;
					var day=date.getDate();
					lib.config.kzol_kzsg.sd.item=[];
					var list1=[];
					var list2=[];
					var list3=[];
					var list4=[];
					var list5=[];
					var list6=[];
					var list7=[];
					for(var i in lib.kzol_kzsg_card){
						var card=lib.kzol_kzsg_card[i];
						if(card.inKb==false) continue;
						if(card.quailty==1) list1.push(card);
						if(card.quailty==2) list2.push(card);
						if(card.quailty==3) list3.push(card);
						if(card.quailty==4) list4.push(card);
						if(card.quailty==5) list5.push(card);
						if(card.quailty==6) list6.push(card);
						if(card.quailty==7) list7.push(card);
					};
					var value=0;
					var value1=0;
					for(var i=0;i<8;i++){
						if(Math.random()<0.05){
							var card=list7.randomGet();
							var list_t=list7;
							value=[20000,19000,18000,17000,16000].randomGet();
							value1=150;
						}else if(Math.random()<0.05){
							var card=list6.randomGet();
							var list_t=list6;
							value=[15000,14000,13000,12000,11000,10000].randomGet();
							value1=100;
						}else if(Math.random()<0.1){
							var card=list5.randomGet();
							var list_t=list5;
							value=[9000,8500,8000,7500,7000].randomGet();
							value1=75;
						}else if(Math.random()<0.1){
							var card=list4.randomGet();
							var list_t=list4;
							value=[7000,6500,6000,5500,5000].randomGet();
							value1=50;
						}else if(Math.random()<0.2){
							var card=list3.randomGet();
							var list_t=list3;
							value=[5000,4750,4500,4250,4000].randomGet();
							value1=25;
						}else if(Math.random()<0.4){
							var card=list2.randomGet();
							var list_t=list2;
							value=[3000,2750,2500,2250,2000].randomGet();
							value1=10;
						}else{
							var card=list1.randomGet();
							var list_t=list1;
							value=[2000,1750,1500,1250,1000,750].randomGet();
							value1=5;
						};
						var value2=[value,value,value,value1].randomGet();
						card.value={};
						if(value2==value) card.value.coin=value2;
						if(value2==value1) card.value.coin1=value2;
						lib.config.kzol_kzsg.sd.item.push(card);
						list_t.remove(card);
					};
					lib.config.kzol_kzsg.sd.year=year;
					lib.config.kzol_kzsg.sd.month=month;
					lib.config.kzol_kzsg.sd.day=day;
					game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
					if(_status!=undefined&&_status.kzol_kzsg_divs11!=undefined&&_status.kzol_kzsg_divs11.a_div!=undefined) _status.kzol_kzsg_divs11.a_div.onclick();
					game.say1('刷新成功');
				};
				//_status.kzol_kzsg_divs11.a_div.onclick();
			};
			ui.window.appendChild(rushSD);
			_status.kzol_kzsg_dialogs11.rushSD=rushSD;
			var yjgk=ui.create.dialog('hidden');
			yjgk.classList.add('popped');
			yjgk.classList.add('static');
			yjgk.style.animation='fadelogIn .4s';
			yjgk.style['-webkit-animation']='fadelogIn .4s';
			yjgk.style.height='40px';
			yjgk.style.width='110px';
			yjgk.style.bottom='0px';
			yjgk.style.left='45px';
			yjgk.style.borderRadius='5px';
			yjgk.style['text-align']='center';
			yjgk.style['font-size']='25px';
			yjgk.style['line-height']='40px';
			yjgk.style['font-family']="'STXinwei','xinwei'";
			yjgk.style['background-image']='linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))';
			yjgk.style['cursor']='pointer';
			yjgk.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">自动刮开</span>';
			yjgk.onclick=function(){
				if(lib.config.kzol_kzsg.ggl.finish==true){
					game.say1('今日刮刮乐已刮开');
					return ;
				};
				if(_status.kzol_kzsg_div_ggk_result==undefined||_status.kzol_kzsg_div_ctx==undefined) return ;
				_status.kzol_kzsg_div_ggk_result.finish=true;
				_status.kzol_kzsg_div_ctx.clearRect(0,0,180,240);
				var list=[];
				for(var i in lib.kzol_kzsg_card){
					var card=lib.kzol_kzsg_card[i];
					if(lib.config.kzol_kzsg.ggl.result==card.translate&&
					lib.config.kzol_kzsg.ggl.item.contains(card.translate)){
						list.push(card);
					};
				};
				if(list.length>0){
					lib.config.kzol_kzsg.ggl.finish=true;
					game.say1('恭喜你，中奖了');
					game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
					var card=list.randomGet();
					game.kzol_kzsg_gainCard(card.name,card.quailty);
				}else{
					lib.config.kzol_kzsg.ggl.finish=true;
					game.say1('很可惜，没有中奖');
					game.kzol_changeCoin(100);
					game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
				};
			};
			ui.window.appendChild(yjgk);
			_status.kzol_kzsg_dialogs11.yjgk=yjgk;
			game.kzol_dialogs_open(_status.kzol_kzsg_dialogs11);
			game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs11);
			
			
			_status.kzol_kzsg_dialogs12={};
			_status.kzol_kzsg_divs12={};
			var background=ui.create.dialog('hidden');
			background.style.height='calc(100%)';
			background.style.width='calc(100%)';
			background.style.left='0px';
			background.style.top='0px';
			background.style['zIndex']=0;
			_status.kzol_kzsg_dialogs12.background=background;
			var div7=ui.create.div();
			div7.style.height='2000px';
			div7.style.width='2000px';
			div7.style.left='-10px';
			div7.style.top='-10px';
			setTimeout(function(){
				div7.onclick=function(){
					game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs12);
					game.kzol_dialogs_show(_status.kzol_kzsg_dialogs11);
				};
			},750);
			background.add(div7);
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='300px';
			dialog.style.width='720px';
			dialog.style.left='calc(50% - 360px)';
			dialog.style.top='calc(50% - 135px)';
			dialog.classList.add('popped');
			dialog.classList.add('static');
			dialog.style.animation='fadeInDown .3s';
			dialog.style['-webkit-animation']='fadeInDown .3s';
			_status.kzol_kzsg_dialogs12.dialog=dialog;
			var c_div=ui.create.div('');
			c_div.style.height='300px';
			c_div.style.width='720px';
			c_div.style.left='2.5px';
			c_div.style.top='0px';
			c_div.style['text-align']='left';
			c_div.style['overflow-x']='hidden';
			c_div.style['overflow-y']='scroll';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(c_div);
			dialog.appendChild(c_div);
			_status.kzol_kzsg_divs12.c_div=c_div;
			setInterval(function(){
				if(_status.kzol_kzsg_changeKP!=true){
					var c_div=_status.kzol_kzsg_divs12.c_div;
					var kb=lib.config.kzol_kzsg.kb;
					var num=0;
					for(var i=0;i<c_div.childNodes.length;i++){
						num++
					};
					for(var i=0;i<num;i++){
						c_div.removeChild(c_div.childNodes[0]);
					};
					for(var i=0;i<kb.length;i++){
						var card=kb[i];
						var card_div=ui.create.button(card.name+card.quailty,'character');
						card_div.style.width='90px';
						card_div.style.height='120px';
						card_div.style.left='0px';
						card_div.style.top='10px';
						card_div.style['cursor']='pointer';
						for(var j in card_div.node){
							card_div.node[j].hide();
						};
						card_div.setBackgroundImage('extension/扩展ol/characterBackground.jpg');
						card_div.link=card.name+card.quailty;
						card_div.link1=card;
						card_div.onclick=function(){
							var card=this.link1;
							if(this.kzol_kzsg_hadClicked!=undefined) return ;
							this.kzol_kzsg_hadClicked=true;
							var card_div=this;
							card_div.style.transform='rotateY(90deg)';
							setTimeout(function(){
								card_div.style.transform='none';
								for(var j in card_div.node){
									card_div.node[j].show();
								};
								card_div.setBackground(card.name+card.quailty,'character');
								setTimeout(function(){
									lib.config.kzol_kzsg.kb.remove(card);
									game.kzol_kzsg_gainCard(card.name,card.quailty);
								},100);
							},500);
						};
						c_div.appendChild(card_div);
					};
					_status.kzol_kzsg_changeKP=true;
				};
			},50);
			var turnAll=ui.create.dialog('hidden');
			turnAll.classList.add('popped');
			turnAll.classList.add('static');
			turnAll.style.animation='fadelogIn .4s';
			turnAll.style['-webkit-animation']='fadelogIn .4s';
			turnAll.style.height='40px';
			turnAll.style.width='110px';
			turnAll.style.bottom='0px';
			turnAll.style.left='45px';
			turnAll.style.borderRadius='5px';
			turnAll.style['text-align']='center';
			turnAll.style['font-size']='25px';
			turnAll.style['line-height']='40px';
			turnAll.style['font-family']="'STXinwei','xinwei'";
			turnAll.style['background-image']='linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))';
			turnAll.style['cursor']='pointer';
			turnAll.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">翻开全部</span>';
			turnAll.onclick=function(){
				var c_div=_status.kzol_kzsg_divs12.c_div;
				var num=0;
				var num1=0;
				for(var i=0;i<c_div.childNodes.length;i++){
					num++;
					if(c_div.childNodes[i].kzol_kzsg_hadClicked==undefined) num1++;
				};
				if(num==0){
					game.say1('没有卡牌');
					return ;
				};
				if(num>0&&num1==0){
					game.say1('卡牌已全部翻开');
					return ;
				};
				if(_status.kzol_kzsg_onTurnAll==true){
					game.say1('正在翻开卡牌');
					return ;
				};
				_status.kzol_kzsg_onTurnAll=true;
				var num2=0;
				var func=function(){
					var card_div=c_div.childNodes[num2];
					if(card_div.kzol_kzsg_hadClicked==undefined){
						var card=card_div.link1;
						if(card_div.kzol_kzsg_hadClicked!=undefined) return ;
						card_div.kzol_kzsg_hadClicked=true;
						card_div.style.transform='rotateY(90deg)';
						setTimeout(function(){
							card_div.style.transform='none';
							for(var j in card_div.node){
								card_div.node[j].show();
							};
							card_div.setBackground(card.name+card.quailty,'character');
							setTimeout(function(){
								lib.config.kzol_kzsg.kb.remove(card);
								game.kzol_kzsg_gainCard(card.name,card.quailty);
							},100);
						},500);
						setTimeout(function(){
							num2++;
							if(c_div.childNodes[num2]!=undefined){
								func();
							}else{
								delete _status.kzol_kzsg_onTurnAll;
							};
						},250);
					}else{
						num2++;
						if(c_div.childNodes[num2]!=undefined){
							func()
						}else{
							delete _status.kzol_kzsg_onTurnAll;
						};
					};
				};
				func();
			};
			ui.window.appendChild(turnAll);
			_status.kzol_kzsg_dialogs12.turnAll=turnAll;
			game.kzol_dialogs_open(_status.kzol_kzsg_dialogs12);
			game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs12);
			
			
			_status.kzol_kzsg_dialogs13={};
			_status.kzol_kzsg_divs13={};
			var background=ui.create.dialog('hidden');
			background.style.height='calc(100%)';
			background.style.width='calc(100%)';
			background.style.left='0px';
			background.style.top='0px';
			background.style['zIndex']=0;
			_status.kzol_kzsg_dialogs13.background=background;
			var div8=ui.create.div();
			div8.style.height='2000px';
			div8.style.width='2000px';
			div8.style.left='-10px';
			div8.style.top='-10px';
			setTimeout(function(){
				div8.onclick=function(){
					delete _status.kzol_kzsg_hadStartCK;
					delete _status.kzol_kzsg_hadOverCK;
					game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs13);
					game.kzol_dialogs_show(_status.kzol_kzsg_dialogs11);
				};
			},750);
			background.add(div8);
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='200px';
			dialog.style.width='545px';
			dialog.style.left='calc(50% - 272.5px)';
			dialog.style.top='calc(50% - 100px)';
			dialog.classList.add('popped');
			dialog.classList.add('static');
			dialog.style.animation='fadeInDown .3s';
			dialog.style['-webkit-animation']='fadeInDown .3s';
			_status.kzol_kzsg_dialogs13.dialog=dialog;
			var c_div=ui.create.div('');
			c_div.style.height='150px';
			c_div.style.width='525px';
			c_div.style.left='10px';
			c_div.style.top='0px';
			c_div.style['text-align']='center';
			dialog.appendChild(c_div);
			_status.kzol_kzsg_divs13.c_div=c_div;
			setInterval(function(){
				if(_status.kzol_kzsg_changeCK2!=true){
					_status.kzol_kzsg_divs13.c_div1.innerHTML='<span style="cursor:pointer;">开始抽卡</span>';
					var c_div=_status.kzol_kzsg_divs13.c_div;
					var kb=lib.config.kzol_kzsg.kb;
					var num=0;
					for(var i=0;i<c_div.childNodes.length;i++){
						num++
					};
					for(var i=0;i<num;i++){
						c_div.removeChild(c_div.childNodes[0]);
					};
					var num=0;
					for(var i in lib.config.kzol_kzsg.ck2){
						var item=lib.config.kzol_kzsg.ck2[i];
						if(item.coin!=undefined||item.coin1!=undefined){
							var card_div=ui.create.div('.menu');
							card_div.style.width='90px';
							card_div.style.height='120px';
							card_div.style.left=(12.5+102.5*num)+'px';
							card_div.style.top='15px';
							card_div.style['font-size']='18px';
							card_div.style['text-align']='center';
							card_div.style['font-family']="'STXinwei','xinwei'";
							card_div.style['line-height']='120px';
							card_div.style['cursor']='pointer';
							var str='';
							if(item.coin!=undefined){
								str+=item.coin+'五铢钱';
							}else{
								str+=item.coin1+'古币';
							};
							card_div.innerHTML=str;
							card_div.link=item;
							card_div.link1=i;
							card_div.onclick=function(){
								if(_status.kzol_kzsg_hadOverCK==true) return ;
								var item=this.link;
								if(_status.kzol_kzsg_hadStartCK!=true){
									var num=0;
									for(var i in lib.config.kzol_kzsg.ck2){
										num++;
									};
									if(num<=1){
										game.say1('住手！这是最后一张了QAQ');
										return ;
									};
									var coin1=lib.config.kzol_kzsg.coin1;
									if(coin1<10){
										game.say1('古币不足');
										return ;
									};
									if(confirm('是否花费10古币来去除这张卡牌？')){
										game.kzol_changeCoin(-10,'coin1');
										delete lib.config.kzol_kzsg.ck2[this.link1];
										this.style.display='none';
									};
								}else{
									if(item.coin!=undefined){
										game.kzol_changeCoin(item.coin);
										this.style['font-size']='18px';
										this.style['text-align']='center';
										this.style['font-family']="'STXinwei','xinwei'";
										this.style['line-height']='120px';
										this.innerHTML=item.coin+'五铢钱';
									}else if(item.coin1!=undefined){
										game.kzol_changeCoin(item.coin1,'coin1');
										this.style['font-size']='18px';
										this.style['text-align']='center';
										this.style['font-family']="'STXinwei','xinwei'";
										this.style['line-height']='120px';
										this.innerHTML=item.coin1+'古币';
									}else{
										game.kzol_kzsg_gainCard(item.slice(0,item.length-1),item.slice(item.length-1,item.length));
										var div=ui.create.button(item,'character');
										div.style.width='90px';
										div.style.height='120px';
										div.style.left='-6px';
										div.style.top='-6px';
										div.link=item;
										this.appendChild(div);
									};
									delete _status.kzol_kzsg_hadStartCK;
									_status.kzol_kzsg_hadOverCK=true;
									_status.kzol_kzsg_divs13.c_div1.innerHTML='抽卡结束';
									lib.config.kzol_kzsg.ck2={};
									game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
								};
							};
							c_div.appendChild(card_div);
						}else{
							var card=lib.kzol_kzsg_card[item];
							var card_div=ui.create.div('.menu');
							card_div.style.width='90px';
							card_div.style.height='120px';
							card_div.style.left=(12.5+102.5*num)+'px';
							card_div.style.top='15px';
							card_div.style['cursor']='pointer';
							c_div.appendChild(card_div);
							var card_div_card=ui.create.button(card.name+card.quailty,'character');
							card_div_card.style.width='90px';
							card_div_card.style.height='120px';
							card_div_card.style.left='-6px';
							card_div_card.style.top='-6px';
							card_div_card.link=card.name+card.quailty;
							card_div.link=item;
							card_div.link1=i;
							card_div.onclick=function(){
								if(_status.kzol_kzsg_hadOverCK==true) return ;
								var item=this.link;
								if(_status.kzol_kzsg_hadStartCK!=true){
									var num=0;
									for(var i in lib.config.kzol_kzsg.ck2){
										num++;
									};
									if(num<=1){
										game.say1('住手！这是最后一张了QAQ');
										return ;
									};
									var coin1=lib.config.kzol_kzsg.coin1;
									if(coin1<10){
										game.say1('古币不足');
										return ;
									};
									if(confirm('是否花费10古币来去除这张卡牌？')){
										game.kzol_changeCoin(-10,'coin1');
										delete lib.config.kzol_kzsg.ck2[this.link1];
										this.style.display='none';
									};
								}else{
									if(item.coin!=undefined){
										game.kzol_changeCoin(item.coin);
										this.style['font-size']='18px';
										this.style['text-align']='center';
										this.style['font-family']="'STXinwei','xinwei'";
										this.style['line-height']='120px';
										this.innerHTML=item.coin+'五铢钱';
									}else if(item.coin1!=undefined){
										game.kzol_changeCoin(item.coin1,'coin1');
										this.style['font-size']='18px';
										this.style['text-align']='center';
										this.style['font-family']="'STXinwei','xinwei'";
										this.style['line-height']='120px';
										this.innerHTML=item.coin+'古币';
									}else{
										game.kzol_kzsg_gainCard(item.slice(0,item.length-1),item.slice(item.length-1,item.length));
										var div=ui.create.button(item,'character');
										div.style.width='90px';
										div.style.height='120px';
										div.style.left='-6px';
										div.style.top='-6px';
										div.link=item;
										this.appendChild(div);
									};
									delete _status.kzol_kzsg_hadStartCK;
									_status.kzol_kzsg_hadOverCK=true;
									_status.kzol_kzsg_divs13.c_div1.innerHTML='抽卡结束';
									lib.config.kzol_kzsg.ck2={};
									game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
								};
							};
							card_div.appendChild(card_div_card);
						};
						num++;
					};
					_status.kzol_kzsg_changeCK2=true;
				};
			},50);
			var c_div1=ui.create.div('.menu');
			c_div1.style.height='40px';
			c_div1.style.width='calc(100%)';
			c_div1.style.left='0px';
			c_div1.style.top='150px';
			c_div1.style['font-size']='30px';
			c_div1.style['text-align']='center';
			c_div1.style['font-family']="'STXinwei','xinwei'";
			c_div1.style['line-height']='40px';
			c_div1.style['cursor']='pointer';
			c_div1.innerHTML='<span style="cursor:pointer;">开始抽卡</span>';
			c_div1.onclick=function(){
				if(_status.kzol_kzsg_hadOverCK==true) return ;
				if(_status.kzol_kzsg_hadStartCK!=true){
					var c_div=_status.kzol_kzsg_divs13.c_div;
					var list=[];
					var list1=[];
					for(var i=0;i<c_div.childNodes.length;i++){
						var c=c_div.childNodes[i];
						if(c.style.display=='none') continue;
						var item=c.link;
						list.push(item);
						if(item.coin!=undefined||item.coin1!=undefined){
							c.style['font-size']='';
							c.style['text-align']='';
							c.style['font-family']='';
							c.style['line-height']='';
							c.innerHTML='';
						}else{
							c.removeChild(c.childNodes[0]);
						};
						c.hide();
					};
					var func=function(){
						var item=list.randomGet();
						list.remove(item);
						list1.push(item);
						if(list.length>0) func();
					};
					if(list.length>0) func();
					var num=0;
					for(var i=0;i<c_div.childNodes.length;i++){
						var c=c_div.childNodes[i];
						if(c.style.display=='none') continue;
						c.link=list1[num];
						num++;
					};
					setTimeout(function(){
						for(var i=0;i<c_div.childNodes.length;i++){
							var c=c_div.childNodes[i];
							c.show();
						};
						_status.kzol_kzsg_hadStartCK=true;
						c_div1.innerHTML='请选择一张卡牌';
					},250);
				};
			};
			dialog.appendChild(c_div1);
			_status.kzol_kzsg_divs13.c_div1=c_div1;
			game.kzol_dialogs_open(_status.kzol_kzsg_dialogs13);
			game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs13);
			
			
			_status.kzol_kzsg_dialogs14={};
			_status.kzol_kzsg_divs14={};
			var background=ui.create.dialog('hidden');
			background.style.height='calc(100%)';
			background.style.width='calc(100%)';
			background.style.left='0px';
			background.style.top='0px';
			background.style['zIndex']=0;
			_status.kzol_kzsg_dialogs14.background=background;
			var div9=ui.create.div();
			div9.style.height='2000px';
			div9.style.width='2000px';
			div9.style.left='-10px';
			div9.style.top='-10px';
			setTimeout(function(){
				div9.onclick=function(){
					game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs14);
					delete _status.kzol_kzsg_onChosenCard;
					var divs=_status.kzol_kzsg_divs14;
					delete divs.div_hc_choose1.link;
					delete divs.div_hc_choose2.link;
					delete divs.div_hc_choose3.link;
					var num=0;
					for(var i=0;i<divs.div_hc_choose1.childNodes.length;i++){
						num++
					};
					for(var i=0;i<num;i++){
						divs.div_hc_choose1.removeChild(divs.div_hc_choose1.childNodes[0]);
					};
					divs.div_hc_choose1.innerHTML='<span style="cursor:pointer;font-size:35px;font-family:xinwei;line-height:120px">选择</span>';
					var num=0;
					for(var i=0;i<divs.div_hc_choose2.childNodes.length;i++){
						num++
					};
					for(var i=0;i<num;i++){
						divs.div_hc_choose2.removeChild(divs.div_hc_choose2.childNodes[0]);
					};
					divs.div_hc_choose2.innerHTML='<span style="cursor:pointer;font-size:35px;font-family:xinwei;line-height:120px">选择</span>';
					var num=0;
					for(var i=0;i<divs.div_hc_choose3.childNodes.length;i++){
						num++
					};
					for(var i=0;i<num;i++){
						divs.div_hc_choose3.removeChild(divs.div_hc_choose3.childNodes[0]);
					};
					divs.div_hc_choose3.innerHTML='<span style="cursor:pointer;font-size:35px;font-family:xinwei;line-height:120px">选择</span>';
					game.kzol_dialogs_show(_status.kzol_kzsg_dialogs1);
				};
			},750);
			background.add(div9);
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='190px';
			dialog.style.width='490px';
			dialog.style.left='calc(50% - 245px)';
			dialog.style.top='calc(50% - 95px)';
			dialog.classList.add('popped');
			dialog.classList.add('static');
			dialog.style.animation='fadeInDown .3s';
			dialog.style['-webkit-animation']='fadeInDown .3s';
			_status.kzol_kzsg_dialogs14.dialog=dialog;
			var div_hc_func=function(){
				game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs14);
				delete _status.kzol_kzsg_changeCardCK;
				game.kzol_dialogs_show(_status.kzol_kzsg_dialogs15);
			};
			var div_hc1=ui.create.div('.menu');
			div_hc1.style.height='120px';
			div_hc1.style.width='90px';
			div_hc1.style.left='10px';
			div_hc1.style.top='10px';
			div_hc1.innerHTML='<span style="cursor:pointer;font-size:35px;font-family:xinwei;line-height:120px">选择</span>';
			div_hc1.onclick=div_hc_func;
			dialog.appendChild(div_hc1);
			_status.kzol_kzsg_divs14.div_hc_choose1=div_hc1;
			var div_hc2=ui.create.div('.menu');
			div_hc2.style.height='120px';
			div_hc2.style.width='90px';
			div_hc2.style.left='110px';
			div_hc2.style.top='10px';
			div_hc2.innerHTML='<span style="cursor:pointer;font-size:35px;font-family:xinwei;line-height:120px">选择</span>';
			div_hc2.onclick=div_hc_func;
			dialog.appendChild(div_hc2);
			_status.kzol_kzsg_divs14.div_hc_choose2=div_hc2;
			var div_hc3=ui.create.div('.menu');
			div_hc3.style.height='120px';
			div_hc3.style.width='90px';
			div_hc3.style.left='210px';
			div_hc3.style.top='10px';
			div_hc3.innerHTML='<span style="cursor:pointer;font-size:35px;font-family:xinwei;line-height:120px">选择</span>';
			div_hc3.onclick=div_hc_func;
			dialog.appendChild(div_hc3);
			_status.kzol_kzsg_divs14.div_hc_choose3=div_hc3;
			var div_hc4=ui.create.div();
			div_hc4.style.height='120px';
			div_hc4.style.width='90px';
			div_hc4.style.left='300px';
			div_hc4.style.top='10px';
			div_hc4.style['font-size']='50px';
			div_hc4.style['text-align']='center';
			div_hc4.style['font-family']="'STXinwei','xinwei'";
			div_hc4.style['line-height']='120px';
			div_hc4.innerHTML='→';
			dialog.appendChild(div_hc4);
			var div_hc5=ui.create.div('.menu');
			div_hc5.style.height='120px';
			div_hc5.style.width='90px';
			div_hc5.style.left='390px';
			div_hc5.style.top='10px';
			div_hc5.innerHTML='<span style="font-size:35px;font-family:xinwei;line-height:120px">结果</span>';;
			dialog.appendChild(div_hc5);
			_status.kzol_kzsg_divs14.div_hc5=div_hc5;
			var div_hc6=ui.create.div('.menu');
			div_hc6.style.height='40px';
			div_hc6.style.width='470px';
			div_hc6.style.left='10px';
			div_hc6.style.top='140px';
			div_hc6.innerHTML='<span style="cursor:pointer;font-size:35px;font-family:xinwei;line-height:40px">合成</span>';
			div_hc6.onclick=function(){
				var divs=_status.kzol_kzsg_divs14;
				if(divs.div_hc_choose1.link==undefined||divs.div_hc_choose2.link==undefined||divs.div_hc_choose3.link==undefined){
					game.say1('请先放入合成所需的卡牌素材');
					return ;
				};
				if(_status.kzol_kzsg_dialogs14.showResult_info.style.display!='none'){
					_status.kzol_kzsg_dialogs14.showResult_info.style.display='none';
				};
				var bool3=false;
				if(lib.config.kzol_kzsg.card[divs.div_hc_choose1.link].translate==lib.config.kzol_kzsg.card[divs.div_hc_choose2.link].translate&&
				lib.config.kzol_kzsg.card[divs.div_hc_choose2.link].translate==lib.config.kzol_kzsg.card[divs.div_hc_choose3.link].translate){
					var list=[];
					var card_name1=lib.config.kzol_kzsg.card[divs.div_hc_choose1.link].translate;
					var card_quailty=lib.config.kzol_kzsg.card[divs.div_hc_choose1.link].quailty;
					for(var i in lib.kzol_kzsg_card){
						var card3=lib.kzol_kzsg_card[i];
						if(card3.translate==card_name1&&card3.quailty>card_quailty&&!list.contains(card3.quailty)&&lib.kzol_kzsg_boss[i]==undefined){
							list.push(lib.kzol_kzsg_card[i]);
							bool3=true;
						};
					};
				};
				if(bool3==false){
					var list1=[];
					var list2=[];
					var list3=[];
					var list4=[];
					var list5=[];
					var list6=[];
					var list7=[];
					var value=0;
					value+=Math.pow(3,lib.config.kzol_kzsg.card[divs.div_hc_choose1.link].quailty-1);
					value+=Math.pow(3,lib.config.kzol_kzsg.card[divs.div_hc_choose2.link].quailty-1);
					value+=Math.pow(3,lib.config.kzol_kzsg.card[divs.div_hc_choose3.link].quailty-1);
					for(var i in lib.kzol_kzsg_card){
						var card=lib.kzol_kzsg_card[i];
						if(card.inKb==false) continue;
						if(card.quailty==1) list1.push(card);
						if(card.quailty==2) list2.push(card);
						if(card.quailty==3) list3.push(card);
						if(card.quailty==4) list4.push(card);
						if(card.quailty==5) list5.push(card);
						if(card.quailty==6) list6.push(card);
						if(card.quailty==7) list7.push(card);
					};
					if(Math.random()<value/2187){
						var list=list7;
					}else if(Math.random()<value/729){
						var list=list6;
					}else if(Math.random()<value/243){
						var list=list5;
					}else if(Math.random()<value/81){
						var list=list4;
					}else if(Math.random()<value/27){
						var list=list3;
					}else if(Math.random()<value/9){
						var list=list2;
					}else{
						var list=list1;
					};
					var card=list.randomGet();
				}else{
					var card;
					for(var i=0;i<list.length;i++){
						if(card==undefined||(card!=undefined&&card.quailty>list[i].quailty)) card=list[i]
					};
					var list_tj=[];
					for(var i in lib.kzol_kzsg_card){
						var card4=lib.kzol_kzsg_card[i];
						if(card!=undefined&&card.translate==card4.translate&&card.quailty==card4.quailty) list_tj.push(card4);
					};
					if(list_tj.length>0){
						card=list_tj.randomGet();
					};
				};
				delete lib.config.kzol_kzsg.card[divs.div_hc_choose1.link];
				delete lib.config.kzol_kzsg.card[divs.div_hc_choose2.link];
				delete lib.config.kzol_kzsg.card[divs.div_hc_choose3.link];
				game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
				delete _status.kzol_kzsg_onChosenCard;
				delete divs.div_hc_choose1.link;
				delete divs.div_hc_choose2.link;
				delete divs.div_hc_choose3.link;
				var num=0;
				for(var i=0;i<divs.div_hc_choose1.childNodes.length;i++){
					num++
				};
				for(var i=0;i<num;i++){
					divs.div_hc_choose1.removeChild(divs.div_hc_choose1.childNodes[0]);
				};
				divs.div_hc_choose1.innerHTML='<span style="cursor:pointer;font-size:35px;font-family:xinwei;line-height:120px">选择</span>';
				var num=0;
				for(var i=0;i<divs.div_hc_choose2.childNodes.length;i++){
					num++
				};
				for(var i=0;i<num;i++){
					divs.div_hc_choose2.removeChild(divs.div_hc_choose2.childNodes[0]);
				};
				divs.div_hc_choose2.innerHTML='<span style="cursor:pointer;font-size:35px;font-family:xinwei;line-height:120px">选择</span>';
				var num=0;
				for(var i=0;i<divs.div_hc_choose3.childNodes.length;i++){
					num++
				};
				for(var i=0;i<num;i++){
					divs.div_hc_choose3.removeChild(divs.div_hc_choose3.childNodes[0]);
				};
				divs.div_hc_choose3.innerHTML='<span style="cursor:pointer;font-size:35px;font-family:xinwei;line-height:120px">选择</span>';
				var num=0;
				for(var i=0;i<divs.div_hc5.childNodes.length;i++){
					num++
				};
				for(var i=0;i<num;i++){
					divs.div_hc5.removeChild(divs.div_hc5.childNodes[0]);
				};
				divs.div_hc5.innerHTML='';
				var button=ui.create.button(card.name+card.quailty,'character');
				button.style.width='90px';
				button.style.height='120px';
				button.style.left='-6px';
				button.style.top='-6px';
				button.link=card.name+card.quailty;
				divs.div_hc5.appendChild(button);
				game.kzol_kzsg_gainCard(card.name,card.quailty);
			};
			dialog.appendChild(div_hc6);
			_status.kzol_kzsg_divs14.div_hc6=div_hc6;
			var showResult_info=ui.create.dialog('hidden');;
			showResult_info.classList.add('popped');
			showResult_info.classList.add('static');
			showResult_info.style.animation='fadelogIn1 .4s';
			showResult_info.style['-webkit-animation']='fadelogIn1 .4s';
			showResult_info.style.height='130px';
			showResult_info.style.width='480px';
			showResult_info.style.bottom='42.5px';
			showResult_info.style.left='0px';
			//showResult_info.style['zIndex']=995;
			showResult_info.style.borderRadius='5px';
			ui.window.appendChild(showResult_info);
			_status.kzol_kzsg_dialogs14.showResult_info=showResult_info;
			var showResult_info_div=ui.create.dialog('hidden');;
			showResult_info_div.classList.add('popped');
			showResult_info_div.classList.add('static');
			showResult_info_div.style.height='calc(100%)';
			showResult_info_div.style.width='calc(100%)';
			showResult_info_div.style.top='0px';
			showResult_info_div.style.left='0px';
			showResult_info_div.style['text-align']='center';
			showResult_info_div.style['overflow-x']='scroll';
			showResult_info_div.style['overflow-y']='hidden';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(showResult_info_div);
			showResult_info_div.addEventListener('mousewheel',function(e){
				var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
				var move_s=delD>0?-30:30;
				this.scrollLeft+=move_s;
			});
			showResult_info.appendChild(showResult_info_div);
			_status.kzol_kzsg_divs14.showResult_info_div=showResult_info_div;
			var showResult=ui.create.dialog('hidden');
			showResult.classList.add('popped');
			showResult.classList.add('static');
			showResult.style.animation='fadelogIn .4s';
			showResult.style['-webkit-animation']='fadelogIn .4s';
			showResult.style.height='40px';
			showResult.style.width='220px';
			showResult.style.bottom='0px';
			showResult.style.left='45px';
			showResult.style.borderRadius='5px';
			showResult.style['text-align']='center';
			showResult.style['font-size']='25px';
			showResult.style['line-height']='40px';
			showResult.style['font-family']="'STXinwei','xinwei'";
			showResult.style['background-image']='linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))';
			showResult.style['cursor']='pointer';
			showResult.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">可能合成的卡牌</span>';
			showResult.onclick=function(){
				var divs=_status.kzol_kzsg_divs14;
				if(divs.div_hc_choose1.link==undefined||divs.div_hc_choose2.link==undefined||divs.div_hc_choose3.link==undefined){
					game.say1('请先放入合成所需的卡牌素材');
					return ;
				};
				if(_status.kzol_kzsg_dialogs14.showResult_info.style.display=='none'){
					_status.kzol_kzsg_dialogs14.showResult_info.style.display='';
				}else{
					_status.kzol_kzsg_dialogs14.showResult_info.style.display='none';
				};
				var num=0;
				for(var i=0;i<divs.showResult_info_div.childNodes.length;i++){
					num++;
				};
				for(var i=0;i<num;i++){
					divs.showResult_info_div.removeChild(divs.showResult_info_div.childNodes[0]);
				};
				var num1=0;
				var func=function(str,bool){
					var div=ui.create.div('.menu');
					div.style.width='90px';
					div.style.height='120px';
					div.style.left=(5+95*num1)+'px';
					div.style.top='5px';
					if(bool==true){
						var card=str;
						var div_card=ui.create.button(card.name+card.quailty,'character');
						div_card.style.width='90px';
						div_card.style.height='120px';
						div_card.style.left='-6px';
						div_card.style.top='-6px';
						div_card.link=card.name+card.quailty;
						div.appendChild(div_card);
					}else{
						div.style['font-size']='18px';
						div.style['text-align']='center';
						div.style['font-family']="'STXinwei','xinwei'";
						div.style['line-height']='120px';
						div.innerHTML=str;
					};
					divs.showResult_info_div.appendChild(div);
				};
				var bool1=false;
				if(lib.config.kzol_kzsg.card[divs.div_hc_choose1.link].translate==lib.config.kzol_kzsg.card[divs.div_hc_choose2.link].translate&&
				lib.config.kzol_kzsg.card[divs.div_hc_choose2.link].translate==lib.config.kzol_kzsg.card[divs.div_hc_choose3.link].translate){
					var list=[];
					var card_name1=lib.config.kzol_kzsg.card[divs.div_hc_choose1.link].translate;
					var card_quailty=lib.config.kzol_kzsg.card[divs.div_hc_choose1.link].quailty;
					for(var i in lib.kzol_kzsg_card){
						var card3=lib.kzol_kzsg_card[i];
						if(card3.translate==card_name1&&card3.quailty>card_quailty&&!list.contains(card3.quailty)&&lib.kzol_kzsg_boss[i]==undefined){
							list.push(lib.kzol_kzsg_card[i]);
							bool1=true;
						};
					};
				};
				if(bool1==false){
					var value=0;
					value+=Math.pow(3,lib.config.kzol_kzsg.card[divs.div_hc_choose1.link].quailty-1);
					value+=Math.pow(3,lib.config.kzol_kzsg.card[divs.div_hc_choose2.link].quailty-1);
					value+=Math.pow(3,lib.config.kzol_kzsg.card[divs.div_hc_choose3.link].quailty-1);
					if(value/3<3){
						var num2=Math.ceil(value/3*10000)/100;
						if(num2>100) num2=100
						var str=game.kzol_kzsg_changeStr(num2+'%',1);
						func(str,false);
						num1++;
					};
					if(value/9<3){
						var num2=Math.ceil(value/9*10000)/100;
						if(num2>100) num2=100
						var str=game.kzol_kzsg_changeStr(num2+'%',2);
						func(str,false);
						num1++;
					};
					if(value/27<3){
						var num2=Math.ceil(value/27*10000)/100;
						if(num2>100) num2=100
						var str=game.kzol_kzsg_changeStr(num2+'%',3);
						func(str,false);
						num1++;
					};
					if(value/81<3){
						var num2=Math.ceil(value/81*10000)/100;
						if(num2>100) num2=100
						var str=game.kzol_kzsg_changeStr(num2+'%',4);
						func(str,false);
						num1++;
					};
					if(value/243<3){
						var num2=Math.ceil(value/243*10000)/100;
						if(num2>100) num2=100
						var str=game.kzol_kzsg_changeStr(num2+'%',5);
						func(str,false);
						num1++;
					};
					if(value/729<3){
						var num2=Math.ceil(value/729*10000)/100;
						if(num2>100) num2=100
						var str=game.kzol_kzsg_changeStr(num2+'%',6);
						func(str,false);
						num1++;
					};
					if(value/2187<3){
						var num2=Math.ceil(value/2187*10000)/100;
						if(num2>100) num2=100
						var str=game.kzol_kzsg_changeStr(num2+'%',7);
						func(str,false);
						num1++;
					};
				}else{
					var card;
					for(var i=0;i<list.length;i++){
						if(card==undefined||(card!=undefined&&card.quailty>list[i].quailty)) card=list[i]
					};
					var list_tj=[];
					for(var i in lib.kzol_kzsg_card){
						var card4=lib.kzol_kzsg_card[i];
						if(card!=undefined&&card.translate==card4.translate&&card.quailty==card4.quailty) list_tj.push(card4);
					};
					if(list_tj.length>0){
						for(var i=0;i<list_tj.length;i++){
							func(list_tj[i],true);
							num1++;
						};
					}else{
						func(card,true);
						num1++;
					};
				};
			};
			ui.window.appendChild(showResult);
			_status.kzol_kzsg_dialogs14.showResult=showResult;
			game.kzol_dialogs_open(_status.kzol_kzsg_dialogs14);
			game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs14);
			
			
			_status.kzol_kzsg_dialogs15={};
			_status.kzol_kzsg_divs15={};
			var background=ui.create.dialog('hidden');
			background.style.height='calc(100%)';
			background.style.width='calc(100%)';
			background.style.left='0px';
			background.style.top='0px';
			background.style['zIndex']=0;
			_status.kzol_kzsg_dialogs15.background=background;
			var diva=ui.create.div();
			diva.style.height='2000px';
			diva.style.width='2000px';
			diva.style.left='-10px';
			diva.style.top='-10px';
			setTimeout(function(){
				diva.onclick=function(){
					game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs15);
					delete _status.kzol_kzsg_swithGroup1;
					delete _status.kzol_kzsg_swithType1;
					delete _status.kzol_kzsg_swithquailty1;
					game.kzol_dialogs_show(_status.kzol_kzsg_dialogs14);
				};
			},750);
			background.add(diva);
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='500px';
			dialog.style.width='720px';
			dialog.style.left='calc(50% - 360px)';
			dialog.style.top='calc(50% - 250px)';
			dialog.classList.add('popped');
			dialog.classList.add('static');
			dialog.style.animation='fadeInDown .3s';
			dialog.style['-webkit-animation']='fadeInDown .3s';
			_status.kzol_kzsg_dialogs15.dialog=dialog;
			var card_divs1=ui.create.div('.menu');
			card_divs1.style.width='680px';
			card_divs1.style.height='470px';
			card_divs1.style.left='20px';
			card_divs1.style.top='15px';
			card_divs1.style['text-align']='left';
			card_divs1.style['overflow-x']='hidden';
			card_divs1.style['overflow-y']='scroll';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(card_divs1);
			card_divs1.style.borderRadius='8px';
			dialog.appendChild(card_divs1);
			_status.kzol_kzsg_divs15.card_divs1=card_divs1;
			setInterval(function(){
				if(_status.kzol_kzsg_changeCardCK!=true){
					delete _status.kzol_kzsg_interval3_num;
					clearInterval(_status.kzol_kzsg_interval3);
					delete _status.kzol_kzsg_interval3;
					_status.kzol_kzsg_dialogs15.dialog_pagea.link=1;
					var num=0;
					for(var i=0;i<card_divs1.childNodes.length;i++){
						num++
					};
					for(var i=0;i<num;i++){
						card_divs1.removeChild(card_divs1.childNodes[0]);
					};
					var list=[];
					for(var i in lib.config.kzol_kzsg.army){
						var army=lib.config.kzol_kzsg.army[i];
						for(var j in army.leader){
							list.push(army.leader[j]);
						};
						for(var j in army.number){
							list.push(army.number[j]);
						};
					};
					var object_cards_num=0;
					var object_cards={};
					for(var i in lib.config.kzol_kzsg.card){
						var bool=true;
						for(var j in object_cards){
							if(object_cards[j]==i) bool=false;
						};
						if(bool!=true) continue;
						var card=lib.config.kzol_kzsg.card[i];
						object_cards[object_cards_num]=i;
						object_cards_num++;
						for(var j in lib.config.kzol_kzsg.card){
							var card1=lib.config.kzol_kzsg.card[j];
							if(card1.name==card.name&&i!=j){
								object_cards[object_cards_num]=j;
								object_cards_num++;
							};
						};
					};
					var card_unArmy=[];
					for(var a in object_cards){
						var i=object_cards[a];
						var card=lib.config.kzol_kzsg.card[i];
						if(!list.contains(i)){
							card_unArmy.push(i);
						};
					};
					if(card_unArmy.length>0){
						_status.kzol_kzsg_interval3_num=1;
						setTimeout(function(){
						_status.kzol_kzsg_interval3=setInterval(function(){
							var num=50;
							if(num>card_unArmy.length) num=card_unArmy.length;
							for(var j=0;j<num;j++){
								var i=card_unArmy[0];
								var card=lib.config.kzol_kzsg.card[i];
								var card_div=ui.create.button(card.name+card.quailty,'character');
								game.changeButtonInfo(card_div,i);
								card_div.style.width='90px';
								card_div.style.height='120px';
								card_div.style.left='35px';
								card_div.style.top='10px';
								card_div.style.cursor='pointer';
								var num_mykps=lib.config.mode_config.kzsg.mykps;
								if(num_mykps==undefined) num_mykps=18;
								if(_status.kzol_kzsg_interval3_num>num_mykps) card_div.style.display='none';
								card_div.link=card.name+card.quailty;
								card_div.link1=i;
								card_div.link2=card;
								card_div.onclick=function(){
									var divs=_status.kzol_kzsg_divs14;
									var num=0;
									for(var i=0;i<divs.div_hc5.childNodes.length;i++){
										num++
									};
									for(var i=0;i<num;i++){
										divs.div_hc5.removeChild(divs.div_hc5.childNodes[0]);
									};
									divs.div_hc5.innerHTML='<span style="font-size:35px;font-family:xinwei;line-height:120px">结果</span>';
									if(_status.kzol_kzsg_onChosenCard==undefined) _status.kzol_kzsg_onChosenCard=[];
									if(_status.kzol_kzsg_onChosenCard.contains(this.link1)){
										_status.kzol_kzsg_onChosenCard.remove(this.link1);
										this.chosen_div.style.display='none';
									}else{
										if(_status.kzol_kzsg_onChosenCard.length>=3){
											game.say1('卡牌素材已满，无法继续选择');
											return ;
										};
										_status.kzol_kzsg_onChosenCard.push(this.link1);
										this.chosen_div.style.display='';
									};
									for(var i in _status.kzol_kzsg_divs14){
										if(i.indexOf('div_hc_choose')!=-1){
											var div=_status.kzol_kzsg_divs14[i];
											var num=0;
											for(var j=0;j<div.childNodes.length;j++){
												num++
											};
											for(var j=0;j<num;j++){
												div.removeChild(div.childNodes[0]);
											};
											delete div.link;
											var num=parseInt(i.slice(i.length-1,i.length))-1;
											var card_num=_status.kzol_kzsg_onChosenCard[num];
											if(card_num==undefined){
												div.innerHTML='<span style="cursor:pointer;font-size:35px;font-family:xinwei;line-height:120px">选择</span>';
											}else{
												var card=lib.config.kzol_kzsg.card[card_num];
												var button=ui.create.button(card.name+card.quailty,'character');
												game.changeButtonInfo(button,card_num);
												button.style.width='90px';
												button.style.height='120px';
												button.style.left='-6px';
												button.style.top='-6px';
												button.link=card.name+card.quailty;
												div.appendChild(button);
												div.link=card_num;
											};
										};
									};
								};
								card_divs1.appendChild(card_div);
								game.kzol_kzsg_clickFk(card_div);
								var skill=ui.create.div('');
								skill.style.height='25px';
								skill.style.width='90px';
								skill.style.top='47.5px';
								skill.style.left='0px';
								skill.style['font-size']='25px';
								skill.style['text-align']='center';
								skill.style['font-family']="'STXinwei','xinwei'";
								skill.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
								skill.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
								skill.style['line-height']='25px';
								skill.style.display='none';
								skill.innerHTML='已选择';
								card_div.appendChild(skill);
								card_div.chosen_div=skill;
								if(_status.kzol_kzsg_onChosenCard!=undefined&&_status.kzol_kzsg_onChosenCard.contains(i)){
									card_div.chosen_div.style.display='';
								};
								card_unArmy.remove(card_unArmy[0]);
								_status.kzol_kzsg_interval3_num++;
							};
							if(card_unArmy.length==0) clearInterval(_status.kzol_kzsg_interval3);
						},100);
						},400);
					};
					_status.kzol_kzsg_changeCardCK=true;
				};
			},50);
			var dialog_swith1a=ui.create.dialog('hidden');
			dialog_swith1a.style.height='calc(50% - 57.5px)';
			dialog_swith1a.style.width='125px';
			dialog_swith1a.style.left='-5px';
			dialog_swith1a.style.top='50px';
			dialog_swith1a.classList.add('popped');
			dialog_swith1a.classList.add('static');
			dialog_swith1a.style.animation='faderightIn .3s';
			dialog_swith1a.style['-webkit-animation']='faderightIn .3s';
			_status.kzol_kzsg_dialogs15.dialog_swith1a=dialog_swith1a;
			var dialog_swith1a_div=ui.create.div('.menu','<span style="cursor:pointer;">全部</span>');
			dialog_swith1a_div.style['font-size']='30px';
			dialog_swith1a_div.style['line-height']='40px';
			dialog_swith1a_div.style['font-family']="'STXinwei','xinwei'";
			dialog_swith1a_div.style.height='40px';
			dialog_swith1a_div.style.width='110px';
			dialog_swith1a_div.style.borderRadius='5px';
			dialog_swith1a_div.onclick=function(){
				delete _status.kzol_kzsg_swithGroup1;
				var card_divs=_status.kzol_kzsg_divs15.card_divs1;
				for(var i=0;i<card_divs.childNodes.length;i++){
					card_divs.childNodes[i].style.display='none';
				};
				_status.kzol_kzsg_dialogs15.dialog_pagea.link=1;
				game.kzol_swithCard1(card_divs);
			};
			dialog_swith1a.add(dialog_swith1a_div);
			game.kzol_kzsg_clickFk(dialog_swith1a_div);
			var dialog_swith1a_list=[];
			for(var i in lib.kzol_kzsg_card){
				var group=lib.kzol_kzsg_card[i].group;
				if(!dialog_swith1a_list.contains(group)) dialog_swith1a_list.push(group);
			};
			for(var i=0;i<dialog_swith1a_list.length;i++){
				var str='国';
				var group=dialog_swith1a_list[i];
				if(group=='qun') str='雄';
				if(group=='xia') str='客';
				var dialog_swith1a_div=ui.create.div('.menu','<span style="cursor:pointer;">'+get.translation(group)+str+'</span>');
				dialog_swith1a_div.style['font-size']='30px';
				dialog_swith1a_div.style['line-height']='40px';
				dialog_swith1a_div.style['font-family']="'STXinwei','xinwei'";
				dialog_swith1a_div.style.height='40px';
				dialog_swith1a_div.style.width='110px';
				dialog_swith1a_div.style.borderRadius='5px';
				dialog_swith1a_div.link=group;
				dialog_swith1a_div.onclick=function(){
					var group=this.link;
					_status.kzol_kzsg_swithGroup1=group;
					var card_divs=_status.kzol_kzsg_divs15.card_divs1;
					for(var i=0;i<card_divs.childNodes.length;i++){
						card_divs.childNodes[i].style.display='none';
					};
					_status.kzol_kzsg_dialogs15.dialog_pagea.link=1;
					game.kzol_swithCard1(card_divs);
				};
				dialog_swith1a.add(dialog_swith1a_div);
				game.kzol_kzsg_clickFk(dialog_swith1a_div);
			};
			var dialog_swith2a=ui.create.dialog('hidden');
			dialog_swith2a.style.height='calc(100% - 115px)';
			dialog_swith2a.style.width='125px';
			dialog_swith2a.style.left='calc(100% - 120px)';
			dialog_swith2a.style.top='50px';
			dialog_swith2a.classList.add('popped');
			dialog_swith2a.classList.add('static');
			dialog_swith2a.style.animation='fadeleftIn1 .3s';
			dialog_swith2a.style['-webkit-animation']='fadeleftIn1 .3s';
			var dialog_swith2a_div=ui.create.div('.menu','<span style="cursor:pointer;">全部</span>');
			dialog_swith2a_div.style['font-size']='30px';
			dialog_swith2a_div.style['line-height']='40px';
			dialog_swith2a_div.style['font-family']="'STXinwei','xinwei'";
			dialog_swith2a_div.style.height='40px';
			dialog_swith2a_div.style.width='110px';
			dialog_swith2a_div.style.borderRadius='5px';
			dialog_swith2a_div.onclick=function(){
				delete _status.kzol_kzsg_swithType1;
				var card_divs=_status.kzol_kzsg_divs15.card_divs1;
				for(var i=0;i<card_divs.childNodes.length;i++){
					card_divs.childNodes[i].style.display='none';
				};
				_status.kzol_kzsg_dialogs15.dialog_pagea.link=1;
				game.kzol_swithCard1(card_divs);
			};
			dialog_swith2a.add(dialog_swith2a_div);
			game.kzol_kzsg_clickFk(dialog_swith2a_div);
			var dialog_swith2a_list=[];
			for(var i in lib.kzol_kzsg_card){
				var type=lib.kzol_kzsg_card[i].type;
				if(!dialog_swith2a_list.contains(type)) dialog_swith2a_list.push(type);
			};
			for(var i=0;i<dialog_swith2a_list.length;i++){
				var type=dialog_swith2a_list[i];
				var dialog_swith2a_div=ui.create.div('.menu','<span style="cursor:pointer;">'+type+'</span>');
				dialog_swith2a_div.style['font-size']='30px';
				dialog_swith2a_div.style['line-height']='40px';
				dialog_swith2a_div.style['font-family']="'STXinwei','xinwei'";
				dialog_swith2a_div.style.height='40px';
				dialog_swith2a_div.style.width='110px';
				dialog_swith2a_div.style.borderRadius='5px';
				dialog_swith2a_div.link=type;
				dialog_swith2a_div.onclick=function(){
					var type=this.link;
					_status.kzol_kzsg_swithType1=type;
					var card_divs=_status.kzol_kzsg_divs15.card_divs1;
					for(var i=0;i<card_divs.childNodes.length;i++){
						card_divs.childNodes[i].style.display='none';
					};
					_status.kzol_kzsg_dialogs15.dialog_pagea.link=1;
					game.kzol_swithCard1(card_divs);
				};
				dialog_swith2a.add(dialog_swith2a_div);
				game.kzol_kzsg_clickFk(dialog_swith2a_div);
			};
			_status.kzol_kzsg_dialogs15.dialog_swith2a=dialog_swith2a;
			var dialog_swith3a=ui.create.dialog('hidden');
			dialog_swith3a.style.height='calc(50% - 57.5px)';
			dialog_swith3a.style.width='125px';
			dialog_swith3a.style.left='-5px';
			dialog_swith3a.style.top='calc(50%)';
			dialog_swith3a.classList.add('popped');
			dialog_swith3a.classList.add('static');
			dialog_swith3a.style.animation='faderightIn .3s';
			dialog_swith3a.style['-webkit-animation']='faderightIn .3s';
			var dialog_swith3a_div=ui.create.div('.menu','<span style="cursor:pointer;">全部</span>');
			dialog_swith3a_div.style['font-size']='30px';
			dialog_swith3a_div.style['line-height']='40px';
			dialog_swith3a_div.style['font-family']="'STXinwei','xinwei'";
			dialog_swith3a_div.style.height='40px';
			dialog_swith3a_div.style.width='110px';
			dialog_swith3a_div.style.borderRadius='5px';
			dialog_swith3a_div.onclick=function(){
				delete _status.kzol_kzsg_swithquailty1;
				var card_divs=_status.kzol_kzsg_divs15.card_divs1;
				for(var i=0;i<card_divs.childNodes.length;i++){
					card_divs.childNodes[i].style.display='none';
				};
				_status.kzol_kzsg_dialogs15.dialog_pagea.link=1;
				game.kzol_swithCard1(card_divs);
			};
			dialog_swith3a.add(dialog_swith3a_div);
			game.kzol_kzsg_clickFk(dialog_swith3a_div);
			var dialog_swith3a_list=[];
			for(var i in lib.kzol_kzsg_card){
				var quailty=lib.kzol_kzsg_card[i].quailty;
				if(!dialog_swith3a_list.contains(quailty)) dialog_swith3a_list.push(quailty);
			};
			for(var i=0;i<dialog_swith3a_list.length;i++){
				var quailty=dialog_swith3a_list[i];
				var str_quailty='';
				if(quailty==7){
					str_quailty='红卡';
				}else if(quailty==6){
					str_quailty='橙卡';
				}else if(quailty==5){
					str_quailty='紫卡';
				}else if(quailty==4){
					str_quailty='蓝卡';
				}else if(quailty==3){
					str_quailty='绿卡';
				}else if(quailty==2){
					str_quailty='白卡';
				}else{
					str_quailty='灰卡';
				};
				var dialog_swith3a_div=ui.create.div('.menu','<span style="cursor:pointer;">'+str_quailty+'</span>');
				dialog_swith3a_div.style['font-size']='30px';
				dialog_swith3a_div.style['line-height']='40px';
				dialog_swith3a_div.style['font-family']="'STXinwei','xinwei'";
				dialog_swith3a_div.style.height='40px';
				dialog_swith3a_div.style.width='110px';
				dialog_swith3a_div.style.borderRadius='5px';
				dialog_swith3a_div.link=quailty;
				dialog_swith3a_div.onclick=function(){
					var quailty=this.link;
					_status.kzol_kzsg_swithquailty1=quailty;
					var card_divs=_status.kzol_kzsg_divs15.card_divs1;
					for(var i=0;i<card_divs.childNodes.length;i++){
						card_divs.childNodes[i].style.display='none';
					};
					_status.kzol_kzsg_dialogs15.dialog_pagea.link=1;
					game.kzol_swithCard1(card_divs);
				};
				dialog_swith3a.add(dialog_swith3a_div);
				game.kzol_kzsg_clickFk(dialog_swith3a_div);
			};
			_status.kzol_kzsg_dialogs15.dialog_swith3a=dialog_swith3a;
			var dialog_pagea=ui.create.dialog('hidden');
			dialog_pagea.style.height='40px';
			dialog_pagea.style.width='200px';
			dialog_pagea.style.left='0px';
			dialog_pagea.style.bottom='-2.5px';
			dialog_pagea.link=1;
			dialog_pagea.link_max=100;
			setInterval(function(){
				var card_divs=_status.kzol_kzsg_divs15.card_divs1;
				if(card_divs!=undefined){
					var num=0;
					for(var i=0;i<card_divs.childNodes.length;i++){
						var card=card_divs.childNodes[i].link2;
						if(_status.kzol_kzsg_swithGroup1==undefined||(_status.kzol_kzsg_swithGroup1!=undefined&&card.group==_status.kzol_kzsg_swithGroup1)){
							if(_status.kzol_kzsg_swithType1==undefined||(_status.kzol_kzsg_swithType1!=undefined&&card.type==_status.kzol_kzsg_swithType1)){
								if(_status.kzol_kzsg_swithquailty1==undefined||(_status.kzol_kzsg_swithquailty1!=undefined&&card.quailty==_status.kzol_kzsg_swithquailty1)){
									num++;
								};
							};
						};
					};
					var num_mykps=lib.config.mode_config.kzsg.mykps;
					if(num_mykps==undefined) num_mykps=18;
					dialog_pagea.link_max=Math.ceil(num/num_mykps);
				};
			},250);
			dialog_pagea.classList.add('popped');
			dialog_pagea.classList.add('static');
			dialog_pagea.style.animation='fadelogIn .4s';
			dialog_pagea.style['-webkit-animation']='fadelogIn .4s';
			_status.kzol_kzsg_dialogs15.dialog_pagea=dialog_pagea;
			var dialog_pagea_previous=ui.create.div('');
			dialog_pagea_previous.style.height='calc(100%)';
			dialog_pagea_previous.style.width='40px';
			dialog_pagea_previous.style.left='0px';
			dialog_pagea_previous.style.top='0px';
			dialog_pagea_previous.style['text-align']='center';
			//dialog_pagea_previous.style['font-family']="'STXinwei','xinwei'";
			dialog_pagea_previous.style.borderRadius='3px';
			dialog_pagea_previous.innerHTML='<span style="cursor:pointer;font-size:25px;line-height:40px"><</span>';
			dialog_pagea_previous.onclick=function(){
				var pagea=_status.kzol_kzsg_dialogs15.dialog_pagea;
				var card_divs=_status.kzol_kzsg_divs15.card_divs1;
				if(pagea.link<=1){
					game.say1('这已是第一页');
					return ;
				};
				pagea.link--;
				for(var i=0;i<card_divs.childNodes.length;i++){
					card_divs.childNodes[i].style.display='none';
				};
				game.kzol_swithCard1(card_divs);
			};
			dialog_pagea.appendChild(dialog_pagea_previous);
			game.kzol_kzsg_clickFk(dialog_pagea_previous);
			var dialog_pagea_next=ui.create.div('');
			dialog_pagea_next.style.height='calc(100%)';
			dialog_pagea_next.style.width='40px';
			dialog_pagea_next.style.right='0px';
			dialog_pagea_next.style.top='0px';
			dialog_pagea_next.style['text-align']='center';
			//dialog_pagea_next.style['font-family']="'STXinwei','xinwei'";
			dialog_pagea_next.style.borderRadius='3px';
			dialog_pagea_next.innerHTML='<span style="cursor:pointer;font-size:25px;line-height:40px">></span>';
			dialog_pagea_next.onclick=function(){
				var pagea=_status.kzol_kzsg_dialogs15.dialog_pagea;
				var card_divs=_status.kzol_kzsg_divs15.card_divs1;
				if(pagea.link>=pagea.link_max){
					game.say1('这已是最后一页');
					return ;
				};
				pagea.link++;
				for(var i=0;i<card_divs.childNodes.length;i++){
					card_divs.childNodes[i].style.display='none';
				};
				game.kzol_swithCard1(card_divs);
			};
			dialog_pagea.appendChild(dialog_pagea_next);
			game.kzol_kzsg_clickFk(dialog_pagea_next);
			var pagea_info=ui.create.dialog('hidden');;
			pagea_info.classList.add('popped');
			pagea_info.classList.add('static');
			pagea_info.style.animation='fadelogIn1 .4s';
			pagea_info.style['-webkit-animation']='fadelogIn1 .4s';
			pagea_info.style.height='300px';
			pagea_info.style.width='200px';
			pagea_info.style.bottom='39px';
			pagea_info.style.left='2.5px';
			pagea_info.style.borderRadius='5px';
			pagea_info.style['zIndex']=995;
			ui.window.appendChild(pagea_info);
			_status.kzol_kzsg_dialogs15.pagea_info=pagea_info;
			var pagea_info_div=ui.create.dialog('hidden');;
			pagea_info_div.classList.add('popped');
			pagea_info_div.classList.add('static');
			pagea_info_div.style.height='calc(100%)';
			pagea_info_div.style.width='calc(100%)';
			pagea_info_div.style.top='0px';
			pagea_info_div.style.left='0px';
			pagea_info_div.style['text-align']='left';
			pagea_info_div.style['overflow-x']='hidden';
			pagea_info_div.style['overflow-y']='scroll';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(pagea_info_div);
			pagea_info.appendChild(pagea_info_div);
			_status.kzol_kzsg_divs15.pagea_info_div=pagea_info_div;
			var dialog_pagea_show=ui.create.div('');
			dialog_pagea_show.style.height='calc(100%)';
			dialog_pagea_show.style.width='120px';
			dialog_pagea_show.style.left='40px';
			dialog_pagea_show.style.top='0px';
			dialog_pagea_show.style['text-align']='center';
			dialog_pagea_show.style['font-size']='25px';
			dialog_pagea_show.style['line-height']='40px';
			//dialog_pagea_show.style['font-family']="'STXinwei','xinwei'";
			dialog_pagea_show.style['cursor']='pointer';
			dialog_pagea_show.innerHTML=dialog_pagea.link+'/'+dialog_pagea.link_max;
			setInterval(function(){
				dialog_pagea_show.innerHTML=dialog_pagea.link+'/'+dialog_pagea.link_max;
			},50);
			dialog_pagea_show.onclick=function(){
				var dialogs=_status.kzol_kzsg_dialogs15;
				var divs=_status.kzol_kzsg_divs15;
				var num=0;
				for(var i=0;i<divs.pagea_info_div.childNodes.length;i++){
					num++;
				};
				for(var i=0;i<num;i++){
					divs.pagea_info_div.removeChild(divs.pagea_info_div.childNodes[0]);
				};
				if(dialogs.pagea_info.style.display=='none'){
					dialogs.pagea_info.style.display='';
					for(var i=0;i<dialogs.dialog_pagea.link_max;i++){
						var div=ui.create.div('.menu');
						div.style.height='50px';
						div.style.width='50px';
						div.style.top=(Math.floor(i/4)*50)+'px';
						div.style.left=(i%4*50)+'px';
						div.style['cursor']='pointer';
						div.style['text-align']='center';
						div.style['font-size']='25px';
						div.style['line-height']='50px';
						div.style.borderRadius='0px';
						div.style['box-shadow']='rgba(0, 0, 0, 0.55) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 3px 10px';
						div.innerHTML=i+1;
						div.link=i+1;
						div.onclick=function(){
							var card_divs=_status.kzol_kzsg_divs15.card_divs1;
							for(var i=0;i<card_divs.childNodes.length;i++){
								card_divs.childNodes[i].style.display='none';
							};
							_status.kzol_kzsg_dialogs15.dialog_pagea.link=this.link;
							game.kzol_swithCard1(card_divs);
						};
						divs.pagea_info_div.appendChild(div);
					};
				}else{
					dialogs.pagea_info.style.display='none';
				};
			};
			dialog_pagea.appendChild(dialog_pagea_show);
			game.kzol_kzsg_clickFk(dialog_pagea_show);
			game.kzol_dialogs_open(_status.kzol_kzsg_dialogs15);
			game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs15);
			
			
			_status.kzol_kzsg_dialogs16={};
			_status.kzol_kzsg_divs16={};
			var background=ui.create.dialog('hidden');
			background.style.height='calc(100%)';
			background.style.width='calc(100%)';
			background.style.left='0px';
			background.style.top='0px';
			background.style['zIndex']=0;
			_status.kzol_kzsg_dialogs16.background=background;
			var divb=ui.create.div();
			divb.style.height='2000px';
			divb.style.width='2000px';
			divb.style.left='-10px';
			divb.style.top='-10px';
			setTimeout(function(){
				divb.onclick=function(){
					game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs16);
					ui.background.setBackgroundImage('image/background/'+lib.config.image_background+'.jpg');
					game.kzol_dialogs_show(_status.kzol_kzsg_dialogs1);
				};
			},750);
			background.add(divb);
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='420px';
			dialog.style.width='800px';
			dialog.style.left='calc(50% - 400px)';
			dialog.style.top='calc(50% - 210px)';
			dialog.style['text-align']='center';
			dialog.style['font-size']='30px';
			dialog.style['line-height']='400px';
			dialog.style['font-family']="'STXinwei','xinwei'";
			dialog.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			dialog.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			dialog.style['overflow-x']='hidden';
			dialog.style['overflow-y']='scroll';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(dialog);
			dialog.classList.add('popped');
			dialog.classList.add('static');
			dialog.style.animation='fadeInDown .3s';
			dialog.style['-webkit-animation']='fadeInDown .3s';
			dialog.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">加载中</span>';
			_status.kzol_kzsg_dialogs16.dialog=dialog;
			if(lib.device!=undefined){
				//game.kzol_gainWeb_coding('https://aurora72.coding.net/p/noname_extensionOL/d/noname_extensionOL/git/raw/master');
				game.kzol_gainWeb_coding(lib.assetURL+'extension/扩展ol');
			}else{
				game.kzol_gainWeb('https://tieba.baidu.com/p/6514157787');
			};
			var info=ui.create.dialog('hidden');
			info.classList.add('popped');
			info.classList.add('static');
			info.style.animation='fadeShow .3s';
			info.style['-webkit-animation']='fadeShow .3s';
			info.style.height='150px';
			info.style.width='720px';
			info.style.left='calc(50% - 360px)';
			info.style['pointer-events']='none';
			info.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			info.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			var info_div=ui.create.div('.menu');
			info_div.style.height='calc(100%)';
			info_div.style.width='calc(100%)';
			info_div.style.left='0px';
			info_div.style.top='0px';
			info_div.style['text-align']='left';
			info_div.style['pointer-events']='none';
			info_div.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			info_div.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			info.appendChild(info_div);
			_status.kzol_kzsg_dialogs16.info=info;
			_status.kzol_kzsg_divs16.info_div=info_div;
			var changeFrom=ui.create.dialog('hidden');
			changeFrom.classList.add('popped');
			changeFrom.classList.add('static');
			changeFrom.style.animation='fadelogIn .4s';
			changeFrom.style['-webkit-animation']='fadelogIn .4s';
			changeFrom.style.height='40px';
			changeFrom.style.width='220px';
			changeFrom.style.bottom='0px';
			changeFrom.style.left='45px';
			changeFrom.style.borderRadius='5px';
			changeFrom.style['text-align']='center';
			changeFrom.style['font-size']='25px';
			changeFrom.style['line-height']='40px';
			changeFrom.style['font-family']="'STXinwei','xinwei'";
			changeFrom.style['background-image']='linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))';
			changeFrom.style['cursor']='pointer';
			if(lib.device!=undefined){
				changeFrom.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">获取来源:本地</span>';
			}else{
				changeFrom.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">获取来源:百度贴吧</span>';
			};
			changeFrom.onclick=function(){
				if(lib.device!=undefined){
					game.say1('移动端无法切换');
					return ;
				};
				if(_status.kzol_kzsg_onCreatingJJC!=undefined){
					game.say1('加载中，请稍候');
					return ;
				};
				clearTimeout(_status.kzol_kzsg_onCreatingJJC_timeout);
				delete _status.kzol_kzsg_onCreatingJJC_timeout;
				_status.kzol_kzsg_onCreatingJJC=true;
				game.kzol_clearJJC();
				if(this.innerHTML=='<span style="color:white;text-shadow:black 0 0 2px;">获取来源:本地</span>'){
					this.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">获取来源:百度贴吧</span>';
					game.kzol_gainWeb('https://tieba.baidu.com/p/6514157787',true);
				}else{
					this.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">获取来源:本地</span>';
					//game.kzol_gainWeb_coding('https://aurora72.coding.net/p/noname_extensionOL/d/noname_extensionOL/git/raw/master',true);
					game.kzol_gainWeb_coding(lib.assetURL+'extension/扩展ol');
				};
				_status.kzol_kzsg_onCreatingJJC_timeout=setTimeout(function(){
					if(_status.kzol_kzsg_onCreatingJJC!=undefined){
						if(_status.kzol_kzsg_dialogs16!=undefined&&_status.kzol_kzsg_dialogs16.dialog!=undefined){
							_status.kzol_kzsg_dialogs16.dialog.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">加载失败</span>';
						}else{
							game.say1('加载失败');
						};
						delete _status.kzol_kzsg_onCreatingJJC;
					};
				},5000);
			};
			ui.window.appendChild(changeFrom);
			_status.kzol_kzsg_dialogs16.changeFrom=changeFrom;
			var goToSend=ui.create.dialog('hidden');
			goToSend.classList.add('popped');
			goToSend.classList.add('static');
			goToSend.style.animation='fadelogIn .4s';
			goToSend.style['-webkit-animation']='fadelogIn .4s';
			goToSend.style.height='40px';
			goToSend.style.width='105px';
			goToSend.style.bottom='0px';
			goToSend.style.left='270px';
			goToSend.style.borderRadius='5px';
			goToSend.style['text-align']='center';
			goToSend.style['font-size']='25px';
			goToSend.style['line-height']='40px';
			goToSend.style['font-family']="'STXinwei','xinwei'";
			goToSend.style['background-image']='linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))';
			goToSend.style['cursor']='pointer';
			goToSend.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">发布阵容</span>';
			goToSend.onclick=function(){
				game.open('https://tieba.baidu.com/p/6514157787');
			};
			ui.window.appendChild(goToSend);
			_status.kzol_kzsg_dialogs16.goToSend=goToSend;
			game.kzol_dialogs_open(_status.kzol_kzsg_dialogs16);
			game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs16);
			
			
			_status.kzol_kzsg_dialogs17={};
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='150px';
			dialog.style.width='300px';
			dialog.style.top='calc(50% - 75px)';
			dialog.style.left='calc(50% - 150px)';
			dialog.setBackgroundImage('extension/扩展ol/Background3.jpg');
			dialog.style.backgroundSize="100% 100%";
			dialog.classList.add('popped');
			dialog.classList.add('static');
			dialog.style.animation='fadeInDown .3s';
			dialog.style['-webkit-animation']='fadeInDown .3s';
			_status.kzol_kzsg_dialogs17.dialog=dialog;
			var div=ui.create.div('','<span style="font-size:30px;color:white;text-shadow:black 0 0 2px;font-weight:600;font-family:xinwei">水晶兑换五铢钱</span><br><br><input type="text" id="kzsg_sjhwzq">');
			div.style.width='300px';
			dialog.add(div);
			//game.kzol_kzsg_clickFk(div);
			var divd=ui.create.div('.menubutton.large','<span style="cursor:pointer;">兑换</span>',function(){
				var value=document.getElementById('kzsg_sjhwzq').value;
				if(value==undefined||value.length==0){
					game.say1('请填入兑换数量');
					return ;
				};
				var num=parseInt(value);
				if(num<0||isNaN(num)){
					game.say1('请填入正确的数字');
					return ;
				};
				if(lib.config.kzol_bag!=undefined){
					var num1=0;
					var item_num=-1;
					for(var i in lib.config.kzol_bag){
						var bag_item=lib.config.kzol_bag[i];
						if(bag_item.name=='shuijing') item_num=i;
					};
					if(item_num!=-1){
						num1=lib.config.kzol_bag[item_num].num;
					};
					if(confirm('是否使用'+num+'水晶（扩展ol代币）兑换'+(num*1.5)+'五铢钱？（当前拥有'+num1+'水晶）')){
						if(item_num!=-1){
							var shuijing=lib.config.kzol_bag[item_num];
							if(shuijing.num<num){
								game.say1('水晶不足');
							}else{
								game.loseItem('shuijing',num);
								game.kzol_changeCoin(num*1.5);
							};
						}else{
							game.say1('水晶不足');
						};
					};
				}else{
					game.say1('未发现背包模块');
				};
				document.getElementById('kzsg_sjhwzq').value='';
				delete _status.kzol_kzsg_dialogs17.dialog.onShow;
			});
			divd.style.left='-35px'
			dialog.add(divd);
			game.kzol_kzsg_clickFk(divd);
			var divc=ui.create.div('.menubutton.large','<span style="cursor:pointer;">返回</span>',function(){
				game.kzol_dialogs_delete(_status.kzol_kzsg_dialogs17);
				document.getElementById('kzsg_sjhwzq').value='';
				delete _status.kzol_kzsg_dialogs17.dialog.onShow;
			});
			divc.style.left='35px'
			dialog.add(divc);
			game.kzol_kzsg_clickFk(divc);
			
			
			_status.kzol_kzsg_dialogs18={};
			_status.kzol_kzsg_divs18={};
			var background=ui.create.dialog('hidden');
			background.style.height='calc(100%)';
			background.style.width='calc(100%)';
			background.style.left='0px';
			background.style.top='0px';
			background.style['zIndex']=0;
			_status.kzol_kzsg_dialogs18.background=background;
			var dive=ui.create.div();
			dive.style.height='2000px';
			dive.style.width='2000px';
			dive.style.left='-10px';
			dive.style.top='-10px';
			setTimeout(function(){
				dive.onclick=function(){
					game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs18);
					ui.background.setBackgroundImage('image/background/'+lib.config.image_background+'.jpg');
					game.kzol_dialogs_show(_status.kzol_kzsg_dialogs1);
				};
			},750);
			background.add(dive);
			_status.kzol_kzsg_divs18.dive=dive;
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='420px';
			dialog.style.width='800px';
			dialog.style.left='calc(50% - 400px)';
			dialog.style.top='calc(50% - 210px)';
			dialog.style['text-align']='center';
			dialog.style['font-size']='30px';
			dialog.style['line-height']='400px';
			dialog.style['font-family']="'STXinwei','xinwei'";
			dialog.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			dialog.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			dialog.style['overflow-x']='hidden';
			dialog.style['overflow-y']='scroll';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(dialog);
			dialog.classList.add('popped');
			dialog.classList.add('static');
			dialog.style.animation='fadeInDown .3s';
			dialog.style['-webkit-animation']='fadeInDown .3s';
			dialog.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">连接中</span>';
			_status.kzol_kzsg_dialogs18.dialog=dialog;
			var zh=ui.create.dialog('hidden');
			zh.classList.add('popped');
			zh.classList.add('static');
			zh.style.animation='fadelogIn .4s';
			zh.style['-webkit-animation']='fadelogIn .4s';
			zh.style.height='40px';
			zh.style.width='60px';
			zh.style.bottom='0px';
			zh.style.left='45px';
			zh.style.borderRadius='5px';
			zh.style['text-align']='center';
			zh.style['font-size']='25px';
			zh.style['line-height']='40px';
			zh.style['font-family']="'STXinwei','xinwei'";
			zh.style['background-image']='linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))';
			zh.style['cursor']='pointer';
			zh.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">账号</span>';
			zh.onclick=function(){
				if(_status.kzsg_mysql_connection!=true){
					game.say1('当前正在连接中');
					return ;
				};
				game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs18);
				game.makeUser();
			};
			ui.window.appendChild(zh);
			_status.kzol_kzsg_dialogs18.zh=zh;
			var editArmy=ui.create.dialog('hidden');
			editArmy.classList.add('popped');
			editArmy.classList.add('static');
			editArmy.style.animation='fadelogIn .4s';
			editArmy.style['-webkit-animation']='fadelogIn .4s';
			editArmy.style.height='40px';
			editArmy.style.width='110px';
			editArmy.style.bottom='0px';
			editArmy.style.left='110px';
			editArmy.style.borderRadius='5px';
			editArmy.style['text-align']='center';
			editArmy.style['font-size']='25px';
			editArmy.style['line-height']='40px';
			editArmy.style['font-family']="'STXinwei','xinwei'";
			editArmy.style['background-image']='linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))';
			editArmy.style['cursor']='pointer';
			editArmy.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">设置守军</span>';
			editArmy.onclick=function(){
				if(_status.kzsg_mysql_connection!=true){
					game.say1('当前正在连接中');
					return ;
				};
				if(lib.config.kzol_kzsg.user==undefined){
					game.say1('未 登 录');
					return ;
				};
				game.kzsg_changeArmy_pk();
				game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs18);
				game.kzol_dialogs_show(_status.kzol_kzsg_dialogs19);
				
			};
			ui.window.appendChild(editArmy);
			_status.kzol_kzsg_dialogs18.editArmy=editArmy;
			var reConnect=ui.create.dialog('hidden');
			reConnect.classList.add('popped');
			reConnect.classList.add('static');
			reConnect.style.animation='fadelogIn .4s';
			reConnect.style['-webkit-animation']='fadelogIn .4s';
			reConnect.style.height='40px';
			reConnect.style.width='60px';
			reConnect.style.bottom='0px';
			reConnect.style.left='225px';
			reConnect.style.borderRadius='5px';
			reConnect.style['text-align']='center';
			reConnect.style['font-size']='25px';
			reConnect.style['line-height']='40px';
			reConnect.style['font-family']="'STXinwei','xinwei'";
			reConnect.style['background-image']='linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))';
			reConnect.style['cursor']='pointer';
			reConnect.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">刷新</span>';
			reConnect.onclick=function(){
				if(_status.kzsg_mysql_connection==true){
					game.re_connectMysql();
				}else{
					game.say1('当前正在连接中');
				};
			};
			ui.window.appendChild(reConnect);
			_status.kzol_kzsg_dialogs18.reConnect=reConnect;
			var info=ui.create.dialog('hidden');
			info.classList.add('popped');
			info.classList.add('static');
			info.style.animation='fadeShow .3s';
			info.style['-webkit-animation']='fadeShow .3s';
			info.style.height='150px';
			info.style.width='720px';
			info.style.left='calc(50% - 360px)';
			info.style['pointer-events']='none';
			info.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			info.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			var info_div=ui.create.div('.menu');
			info_div.style.height='calc(100%)';
			info_div.style.width='calc(100%)';
			info_div.style.left='0px';
			info_div.style.top='0px';
			info_div.style['text-align']='left';
			info_div.style['pointer-events']='none';
			info_div.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			info_div.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			info.appendChild(info_div);
			_status.kzol_kzsg_dialogs18.info=info;
			_status.kzol_kzsg_divs18.info_div=info_div;
			game.kzol_dialogs_open(_status.kzol_kzsg_dialogs18);
			game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs18);
			
			
			_status.kzol_kzsg_dialogs19={};
			_status.kzol_kzsg_divs19={};
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='235px';
			dialog.style.width='390px';
			dialog.style.top='calc(50% - 117.5px)';
			dialog.style.left='calc(50% - 195px)';
			dialog.setBackgroundImage('extension/扩展ol/Background3.jpg');
			dialog.style.backgroundSize="100% 100%";
			dialog.classList.add('popped');
			dialog.classList.add('static');
			dialog.style.animation='fadeInDown .3s';
			dialog.style['-webkit-animation']='fadeInDown .3s';
			_status.kzol_kzsg_dialogs19.dialog=dialog;
			var div10=ui.create.div('','<span style="font-size:30px;color:white;text-shadow:black 0 0 2px;font-weight:600;font-family:xinwei">请设置守卫军队</span>');
			div10.style.height='30px';
			div10.style.width='390px';
			div10.style.left='0px';
			div10.style.top='10px';
			dialog.appendChild(div10);
			var div_chooseArmy_sj=ui.create.div('');
			div_chooseArmy_sj.style.height='125px';
			div_chooseArmy_sj.style.width='390px';
			div_chooseArmy_sj.style.top='50px';
			div_chooseArmy_sj.style.left='0px';
			div_chooseArmy_sj.style['text-align']='center';
			//div_chooseArmy_sj.style['font-size']='30px';
			//div_chooseArmy_sj.style['line-height']='125px';
			//div_chooseArmy_sj.style['font-family']="'STXinwei','xinwei'";
			//div_chooseArmy_sj.innerHTML='<span style="color:white;text-shadow:black 0 0 2px">加载中</span>';
			div_chooseArmy_sj.style['overflow-x']='scroll';
			div_chooseArmy_sj.style['overflow-y']='hidden';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(div_chooseArmy_sj);
			div_chooseArmy_sj.addEventListener('mousewheel',function(e){
				var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
				var move_s=delD>0?-30:30;
				this.scrollLeft+=move_s;
			});
			dialog.appendChild(div_chooseArmy_sj);
			_status.kzol_kzsg_divs19.div_chooseArmy_sj=div_chooseArmy_sj;
			var divg=ui.create.div('.menubutton.large','<span style="cursor:pointer;">返回</span>',function(){
				if(_status.kzol_kzsg_onSC1==true){
					game.say1('请等待数据上传完成');
					return ;
				};
				game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs19);
				game.kzol_dialogs_show(_status.kzol_kzsg_dialogs18);
			});
			divg.style.left='calc(50% - 35px)';
			divg.style.top='185px';
			dialog.appendChild(divg);
			game.kzol_dialogs_open(_status.kzol_kzsg_dialogs19);
			game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs19);
			
			
			_status.kzol_kzsg_dialogs20={};
			_status.kzol_kzsg_divs20={};
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='calc(100%)';
			dialog.style.width='calc(100%)';
			dialog.style.left='0px';
			dialog.style.top='0px';
			dialog.style['zIndex']=0;
			_status.kzol_kzsg_dialogs20.dialog=dialog;
			var challenge_buttons=ui.create.div('');
			challenge_buttons.style.height='calc(100%)';
			challenge_buttons.style.width='calc(100%)';
			challenge_buttons.style.top='0px';
			challenge_buttons.style.left='0px';
			//challenge_buttons.style['overflow-x']='scroll';
			//challenge_buttons.style['overflow-y']='hidden';
			//if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(challenge_buttons);
			challenge_buttons.onmousedown=function(e){
				e.stopPropagation();
			};
			dialog.appendChild(challenge_buttons);
			_status.kzol_kzsg_divs20.challenge_buttons=challenge_buttons;
			var left_move=ui.create.div('');
			left_move.style.height='calc(100%)';
			left_move.style.width='calc(10%)';
			left_move.style.top='0px';
			left_move.style.left='0px';
			if(lib.device){
				left_move.addEventListener('touchstart',function(e){
					this.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
					_status.kzol_kzsg_left_move_interval=setInterval(function(){
						var div=_status.kzol_kzsg_divs20.challenge_buttons;
						div.style.left=(div.offsetLeft+250)+'px';
					},250);
					e.stopPropagation();
				});
				left_move.addEventListener('touchend',function(e){
					clearInterval(_status.kzol_kzsg_left_move_interval);
					delete _status.kzol_kzsg_left_move_interval;
					this.style['background-image']='';
				});
			}else{
				left_move.onmouseover=function(e){
					this.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
					_status.kzol_kzsg_left_move_interval=setInterval(function(){
						var div=_status.kzol_kzsg_divs20.challenge_buttons;
						div.style.left=(div.offsetLeft+250)+'px';
					},250);
					e.stopPropagation();
				};
				left_move.onmouseout=function(){
					clearInterval(_status.kzol_kzsg_left_move_interval);
					delete _status.kzol_kzsg_left_move_interval;
					this.style['background-image']='';
				};
			};
			dialog.appendChild(left_move);
			var right_move=ui.create.div('');
			right_move.style.height='calc(100%)';
			right_move.style.width='calc(10%)';
			right_move.style.top='0px';
			right_move.style.right='0px';
			if(lib.device){
				right_move.addEventListener('touchstart',function(e){
					this.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
					_status.kzol_kzsg_right_move_interval=setInterval(function(){
						var div=_status.kzol_kzsg_divs20.challenge_buttons;
						div.style.left=(div.offsetLeft-250)+'px';
					},250);
					e.stopPropagation();
				});
				right_move.addEventListener('touchend',function(e){
					clearInterval(_status.kzol_kzsg_right_move_interval);
					delete _status.kzol_kzsg_right_move_interval;
					this.style['background-image']='';
				});
			}else{
				right_move.onmouseover=function(e){
					this.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
					_status.kzol_kzsg_right_move_interval=setInterval(function(){
						var div=_status.kzol_kzsg_divs20.challenge_buttons;
						div.style.left=(div.offsetLeft-250)+'px';
					},250);
					e.stopPropagation();
				};
				right_move.onmouseout=function(){
					clearInterval(_status.kzol_kzsg_right_move_interval);
					delete _status.kzol_kzsg_right_move_interval;
					this.style['background-image']='';
				};
			};
			dialog.appendChild(right_move);
			var cancel=ui.create.dialog('hidden');
			cancel.classList.add('popped');
			cancel.classList.add('static');
			cancel.style.animation='fadelogIn .4s';
			cancel.style['-webkit-animation']='fadelogIn .4s';
			cancel.style.height='40px';
			cancel.style.width='60px';
			cancel.style.bottom='0px';
			cancel.style.left='45px';
			cancel.style.borderRadius='5px';
			cancel.style['text-align']='center';
			cancel.style['font-size']='25px';
			cancel.style['line-height']='40px';
			cancel.style['font-family']="'STXinwei','xinwei'";
			cancel.style['background-image']='linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))';
			cancel.style['cursor']='pointer';
			cancel.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">返回</span>';
			cancel.onclick=function(){
				game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs20);
				//ui.background.setBackgroundImage('image/background/'+lib.config.image_background+'.jpg');
				game.kzol_dialogs_show(_status.kzol_kzsg_dialogs1);
			};
			ui.window.appendChild(cancel);
			_status.kzol_kzsg_dialogs20.cancel=cancel;
			game.kzol_dialogs_open(_status.kzol_kzsg_dialogs20);
			game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs20);
			
			
			_status.kzol_kzsg_dialogs21={};
			_status.kzol_kzsg_divs21={};
			var background=ui.create.dialog('hidden');
			background.style.height='calc(100%)';
			background.style.width='calc(100%)';
			background.style.left='0px';
			background.style.top='0px';
			background.style['zIndex']=0;
			_status.kzol_kzsg_dialogs21.background=background;
			var divf=ui.create.div();
			divf.style.height='2000px';
			divf.style.width='2000px';
			divf.style.left='-10px';
			divf.style.top='-10px';
			setTimeout(function(){
				divf.onclick=function(){
					game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs21);
					ui.background.setBackgroundImage('image/background/'+lib.config.image_background+'.jpg');
					game.kzol_dialogs_show(_status.kzol_kzsg_dialogs20);
				};
			},750);
			_status.kzol_kzsg_divs21.divf=divf;
			background.add(divf);
			var dialog=ui.create.dialog('hidden');
			dialog.classList.add('popped');
			dialog.classList.add('static');
			dialog.style.animation='fadeInDown .3s';
			dialog.style['-webkit-animation']='fadeInDown .3s';
			dialog.style.height='500px';
			dialog.style.width='720px';
			dialog.style.left='calc(50% - 360px)';
			dialog.style.top='calc(50% - 250px)';
			_status.kzol_kzsg_dialogs21.dialog=dialog;
			var army_show=ui.create.div('.menu');
			army_show.style.width='calc(100%)';
			army_show.style.height='150px';
			army_show.style.left='0px';
			army_show.style.bottom='0px';
			army_show.style['text-align']='left';
			army_show.style['overflow-x']='hidden';
			army_show.style['overflow-y']='scroll';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(army_show);
			army_show.style.borderRadius='0px';
			dialog.appendChild(army_show);
			_status.kzol_kzsg_divs21.army_show=army_show;
			var army_enemy=ui.create.div('.menu');
			army_enemy.style.width='500px';
			army_enemy.style.height='150px';
			army_enemy.style.left='210px';
			army_enemy.style.top='10px';
			army_enemy.style.borderRadius='0px';
			army_enemy.style['box-shadow']='rgb(0, 0, 0) 0 0 0 1px, rgba(0, 0, 0, 0) 0 3px 10px';
			dialog.appendChild(army_enemy);
			_status.kzol_kzsg_divs21.army_enemy=army_enemy;
			setInterval(function(){
				if(_status.kzol_kzsg_changeWJArmy_e==undefined){
					var num=0;
					for(var i=0;i<army_show.childNodes.length;i++){
						num++;
					};
					for(var i=0;i<num;i++){
						army_show.removeChild(army_show.childNodes[0]);
					};
					if(lib.config.kzol_kzsg.army_wj_num!=undefined){
						var num=0;
						for(var i=0;i<army_enemy.childNodes.length;i++){
							num++;
						};
						for(var i=0;i<num;i++){
							army_enemy.removeChild(army_enemy.childNodes[0]);
						};
						army_enemy.style['text-align']='';
						army_enemy.style['font-size']='';
						army_enemy.style['line-height']='';
						army_enemy.style['font-family']='';
						army_enemy.innerHTML='';
						if(lib.config.kzol_kzsg.army_wj_e==undefined) game.kzol_changeEnemy_wj(lib.config.kzol_kzsg.army_wj_num);
						var num=0;
						for(var i in lib.config.kzol_kzsg.army_wj_e){
							num++;
						};
						var num2=0;
						for(var i in lib.config.kzol_kzsg.army_wj_e){
							var army=lib.config.kzol_kzsg.army_wj_e[i];
							var div=ui.create.div('.player');
							div.style.width='90px';
							div.style.height='105px';
							var num1=500-num*90;
							div.style.left=(num1/(num+1)*(num2+1)+90*num2)+'px';
							div.style.top='22.5px';
							div.style['cursor']='-webkit-zoom-in';
							var leaders=[];
							for(var j in army.leader){
								leaders.push(army.leader[j]);
							};
							var leader=lib.kzol_kzsg_card[leaders[0]];
							div.setBackground(leader.name+leader.quailty,'character');
							var div_name=ui.create.div('');
							div_name.style.width='15px';
							div_name.style.height=(div.offsetHeight-10)+'px';
							div_name.style.left='5px';
							div_name.style.top='5px';
							div_name.style['font-size']='15px';
							div_name.style['font-family']="'STXinwei','xinwei'";
							div_name.innerHTML=leader.translate+'军';
							div.appendChild(div_name);
							div.link=army;
							div.onmouseover=function(){
								var num=0;
								for(var i=0;i<army_show.childNodes.length;i++){
									num++
								};
								for(var i=0;i<num;i++){
									army_show.removeChild(army_show.childNodes[0]);
								};
								var army=this.link;
								var list=[];
								for(var j in army.leader){
									list.push(army.leader[j]);
								};
								for(var j in army.number){
									list.push(army.number[j]);
								};
								for(var i=0;i<list.length;i++){
									var card1=lib.kzol_kzsg_card[list[i]];
									var card_div=ui.create.button(card1.name+card1.quailty,'character');
									if(lib.config.kzol_kzsg.dxl>100){
										var prepareRound=card1.prepareRound;
										if(prepareRound>2){
											prepareRound-=2;
										}else{
											prepareRound=0;
										};
										card_div.node.prepareRound.innerHTML=prepareRound;
									};
									card_div.style.width='90px';
									card_div.style.height='120px';
									card_div.style.left='2.5px';
									card_div.style.top='10px';
									card_div.link=card1.name+card1.quailty;
									army_show.appendChild(card_div);
								};
							};
							army_enemy.appendChild(div);
							num2++;
						};
					}else{
						army_enemy.style['text-align']='center';
						army_enemy.style['font-size']='40px';
						army_enemy.style['line-height']='150px';
						army_enemy.style['font-family']="'STXinwei','xinwei'";
						army_enemy.innerHTML='未开始';
					};
					_status.kzol_kzsg_changeWJArmy_e=true;
				};
			},100);
			var army_me=ui.create.div('.menu');
			army_me.style.width='500px';
			army_me.style.height='150px';
			army_me.style.left='210px';
			army_me.style.top='190px';
			army_me.style.borderRadius='0px';
			army_me.style['box-shadow']='rgb(0, 0, 0) 0 0 0 1px, rgba(0, 0, 0, 0) 0 3px 10px';
			dialog.appendChild(army_me);
			_status.kzol_kzsg_divs21.army_me=army_me;
			setInterval(function(){
				if(_status.kzol_kzsg_changeWJArmy==undefined){
					/*
					var num=0;
					for(var i=0;i<army_show.childNodes.length;i++){
						num++;
					};
					for(var i=0;i<num;i++){
						army_show.removeChild(army_show.childNodes[0]);
					};
					*/
					var num=0;
					for(var i=0;i<army_me.childNodes.length;i++){
						num++;
					};
					for(var i=0;i<num;i++){
						army_me.removeChild(army_me.childNodes[0]);
					};
					var num=4;
					if(lib.config.kzol_kzsg.army_wj_num!=undefined) num=lib.config.kzol_kzsg.army_wj_num;
					for(var i=0;i<num;i++){
						var div=ui.create.div('.player');
						div.style.width='90px';
						div.style.height='105px';
						var num1=500-num*90;
						div.style.left=(num1/(num+1)*(i+1)+90*i)+'px';
						div.style.top='22.5px';
						div.style['cursor']='pointer';
						if(lib.config.kzol_kzsg.army_wj==undefined||lib.config.kzol_kzsg.army_wj[i]==undefined){
							div.style['font-size']='30px';
							div.style['text-align']='center';
							div.style['font-family']="'STXinwei','xinwei'";
							div.style['line-height']='100px';
							div.innerHTML='<span style="cursor:pointer;">选择</span>';
						}else{
							var army=lib.config.kzol_kzsg.army_wj[i];
							var leaders=[];
							for(var j in army.leader){
								leaders.push(army.leader[j]);
							};
							var leader=lib.config.kzol_kzsg.card[leaders[0]];
							div.setBackground(leader.name+leader.quailty,'character');
							var div_name=ui.create.div('');
							div_name.style.width='15px';
							div_name.style.height=(div.offsetHeight-10)+'px';
							div_name.style.left='5px';
							div_name.style.top='5px';
							div_name.style['font-size']='15px';
							div_name.style['font-family']="'STXinwei','xinwei'";
							div_name.innerHTML=army.name;
							div.appendChild(div_name);
							div.link=army;
							div.link1=i;
							div.onmouseover=function(){
								var num=0;
								for(var i=0;i<army_show.childNodes.length;i++){
									num++
								};
								for(var i=0;i<num;i++){
									army_show.removeChild(army_show.childNodes[0]);
								};
								var army=this.link;
								var list=[];
								for(var j in army.leader){
									list.push(army.leader[j]);
								};
								for(var j in army.number){
									list.push(army.number[j]);
								};
								for(var i=0;i<list.length;i++){
									var card1=lib.config.kzol_kzsg.card[list[i]];
									var card_div=ui.create.button(card1.name+card1.quailty,'character')
									game.changeButtonInfo(card_div,list[i],false,true,true);
									card_div.style.width='90px';
									card_div.style.height='120px';
									card_div.style.left='2.5px';
									card_div.style.top='10px';
									card_div.link=card1.name+card1.quailty;
									army_show.appendChild(card_div);
								};
							};
							var eventDown=function(e){
								e.preventDefault();
								this.ismousedown=true;
								var div=this;
								div.onmouseover();
								div.link_timeout=setTimeout(function(){
									if(div.ismousedown==true){
										div.style['box-shadow']='rgba(0, 0, 0, 0.2) 0 0 0 1px,rgba(255, 0, 0, 0.4) 0 0 5px, rgba(255, 0, 0, 0.4) 0 0 12px, rgba(255, 0, 0, 0.8) 0 0 15px';
										div.style['cursor']='auto';
										div.style['zIndex']=9999;
										div.style.transition='all 0s';
										var move_bg=ui.create.div();
										move_bg.style.height='calc(100%)';
										move_bg.style.width='calc(100%)';
										move_bg.style.left='0px';
										move_bg.style.top='0px';
										move_bg.style['zIndex']=9998;
										div.link_move_bg=move_bg;
										ui.window.appendChild(move_bg);
										var eventMove=function(e){
											e.preventDefault();
											div.ismousemove=true;
											if(e.changedTouches) e=e.changedTouches[e.changedTouches.length-1];
											var l=0;
											var t=0;
											if(div.parentNode!=undefined){
												l+=div.parentNode.offsetLeft;
												t+=div.parentNode.offsetTop;
											};
											if(div.parentNode.parentNode!=undefined){
												l+=div.parentNode.parentNode.offsetLeft;
												t+=div.parentNode.parentNode.offsetTop;
											};
											div.style.left=(e.clientX/game.documentZoom+document.body.scrollLeft-l-45)+'px';
											div.style.top=(e.clientY/game.documentZoom+document.body.scrollTop-t-52.5)+'px';
										};
										var eventUp=function(e){
											e.preventDefault();
											div.ismousedown=false;
											div.style['box-shadow']='';
											div.style['cursor']='pointer';
											div.style['zIndex']=2;
											div.style.transition='';
											ui.window.removeChild(div.link_move_bg);
											delete div.link_move_bg;
											var army_me=_status.kzol_kzsg_divs21.army_me;
											var num=0;
											for(var i=0;i<army_me.childNodes.length;i++){
												var div_me=army_me.childNodes[i];
												var l=div_me.offsetLeft+div_me.offsetWidth/2;
												var bool=true;
												for(var j=0;j<army_me.childNodes.length;j++){
													var div_me1=army_me.childNodes[j];
													if(div_me1.link_id_wj==undefined){
														var l1=div_me1.offsetLeft+div_me1.offsetWidth/2;
														if(l>l1) bool=false;
													};
												};
												if(bool==true){
													div_me.link_id_wj=num;
													lib.config.kzol_kzsg.army_wj[div_me.link1].id_wj=num;
													num++;
												};
											};
											for(var i=0;i<army_me.childNodes.length;i++){
												var div_me=army_me.childNodes[i];
												if(div_me.link_id_wj==undefined){
													div_me.link_id_wj=num;
													lib.config.kzol_kzsg.army_wj[div_me.link1].id_wj=num;
													num++;
												};
											};
											game.kzol_update_armyWj();
										};
										move_bg.addEventListener("mousemove",eventMove,false);
										move_bg.addEventListener('touchmove',eventMove,false);
										move_bg.addEventListener("mouseup",eventUp,false);
										move_bg.addEventListener('touchend',eventUp,false);
									};
								},100);
							};
							div.addEventListener("mousedown",eventDown,false);
							div.addEventListener('touchstart',eventDown, false);
						};
						var eventUp=function(e){
							e.preventDefault();
							this.ismousedown=false;
							if(this.link_timeout!=undefined){
								clearTimeout(this.link_timeout);
								delete this.link_timeout;
							};
							if(this.ismousemove==true){
								this.ismousemove=false;
								return ;
							};
							if(this.style['zIndex']!=9999){
								if(lib.config.kzol_kzsg.dxl==undefined){
									_status.kzol_kzsg_onChooseArmy_wj=true;
								}else{
									_status.kzol_kzsg_onEditArmy_wj=true;
									delete _status.kzol_kzsg_changeCK;
									delete _status.kzol_kzsg_changeCK1;
								};
								game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs21);
								game.kzol_dialogs_show(_status.kzol_kzsg_dialogs6);
							};
						};
						div.addEventListener("mouseup",eventUp,false);
						div.addEventListener('touchend',eventUp,false);
						army_me.appendChild(div);
						game.kzol_kzsg_clickFk(div);
					};
					_status.kzol_kzsg_changeWJArmy=true;
				};
			},100);
			var dxl=ui.create.div('.menu');
			dxl.style.width='500px';
			dxl.style.height='30px';
			dxl.style.left='210px';
			dxl.style.top='160px';
			dxl.style['text-align']='center';
			dxl.style['font-size']='25px';
			dxl.style['line-height']='30px';
			dxl.style['font-family']="'STXinwei','xinwei'";
			dxl.style.borderRadius='0px';
			dxl.style['box-shadow']='rgb(0, 0, 0) 0 0 0 1px, rgba(0, 0, 0, 0) 0 3px 10px';
			var str='未开始';
			if(lib.config.kzol_kzsg.dxl!=undefined) str='第'+lib.config.kzol_kzsg.dxl+'波';
			if(lib.config.kzol_kzsg.maxDxl!=undefined) str+='（最高到达第'+lib.config.kzol_kzsg.maxDxl+'波）';
			dxl.innerHTML=str;
			setInterval(function(){
				var str='未开始';
				if(lib.config.kzol_kzsg.dxl!=undefined) str='第'+lib.config.kzol_kzsg.dxl+'波';
				if(lib.config.kzol_kzsg.maxDxl!=undefined) str+='（最高到达第'+lib.config.kzol_kzsg.maxDxl+'波）';
				dxl.innerHTML=str;
			},500);
			dialog.appendChild(dxl);
			_status.kzol_kzsg_divs21.dxl=dxl;
			var info_wj=ui.create.div('.menu');
			info_wj.style.width='200px';
			info_wj.style.height='330px';
			info_wj.style.left='10px';
			info_wj.style.top='10px';
			info_wj.style.borderRadius='0px';
			info_wj.style['box-shadow']='rgb(0, 0, 0) 0 0 0 1px, rgba(0, 0, 0, 0) 0 3px 10px';
			dialog.appendChild(info_wj);
			_status.kzol_kzsg_divs21.info_wj=info_wj;
			var info_wj_info=ui.create.div('.menu');
			info_wj_info.style.width='200px';
			info_wj_info.style.height='280px';
			info_wj_info.style.left='0px';
			info_wj_info.style.top='0px';
			info_wj_info.style.borderRadius='0px';
			info_wj_info.style['text-align']='left';
			info_wj_info.style['font-size']='18px';
			info_wj_info.style['font-family']="'STXinwei','xinwei'";
			info_wj_info.style['overflow-x']='hidden';
			info_wj_info.style['overflow-y']='scroll';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(info_wj_info);
			info_wj_info.style['box-shadow']='rgb(0, 0, 0) 0 0 0 1px, rgba(0, 0, 0, 0) 0 3px 10px';
			info_wj_info.style['background-image']='linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))';
			if(lib.config.kzol_kzsg.dxl!=undefined){
				info_wj_info.style.display='';
			}else{
				info_wj_info.style.display='none';
			};
			info_wj.appendChild(info_wj_info);
			_status.kzol_kzsg_divs21.info_wj_info=info_wj_info;
			info_wj_info.innerHTML=game.kzol_wjInfo();
			setInterval(function(){
				info_wj_info.innerHTML=game.kzol_wjInfo();
			},500);
			var info_wj_start=ui.create.div('.menu');
			info_wj_start.style.width='200px';
			info_wj_start.style.height='50px';
			info_wj_start.style.left='0px';
			info_wj_start.style.top='280px';
			info_wj_start.style.borderRadius='0px';
			info_wj_start.style['text-align']='center';
			info_wj_start.style['font-size']='40px';
			info_wj_start.style['line-height']='50px';
			info_wj_start.style['font-family']="'STXinwei','xinwei'";
			info_wj_start.style['box-shadow']='rgb(0, 0, 0) 0 0 0 1px, rgba(0, 0, 0, 0) 0 3px 10px';
			info_wj_start.style['cursor']='pointer';
			if(lib.config.kzol_kzsg.dxl!=undefined){
				info_wj_start.style.display='';
			}else{
				info_wj_start.style.display='none';
			};
			info_wj_start.innerHTML='迎战';
			info_wj_start.onclick=function(){
				_status.kzol_kzsg_onWJbattle=true;
				game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs21);
				ui.window.appendChild(ui.arena);
				game.kzol_playerAwar( lib.config.kzol_kzsg.army_wj, lib.config.kzol_kzsg.army_wj_e);
			};
			info_wj.appendChild(info_wj_start);
			_status.kzol_kzsg_divs21.info_wj_start=info_wj_start;
			var clearWJ=ui.create.dialog('hidden');
			clearWJ.classList.add('popped');
			clearWJ.classList.add('static');
			clearWJ.style.animation='fadelogIn .4s';
			clearWJ.style['-webkit-animation']='fadelogIn .4s';
			clearWJ.style.height='40px';
			clearWJ.style.width='110px';
			clearWJ.style.bottom='0px';
			clearWJ.style.left='45px';
			clearWJ.style.borderRadius='5px';
			clearWJ.style['text-align']='center';
			clearWJ.style['font-size']='25px';
			clearWJ.style['line-height']='40px';
			clearWJ.style['font-family']="'STXinwei','xinwei'";
			clearWJ.style['background-image']='linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))';
			clearWJ.style['cursor']='pointer';
			clearWJ.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">重新开始</span>';
			clearWJ.onclick=function(){
				if(confirm('是否重新开始？')){
					game.kzol_clearWj();
				};
			};
			ui.window.appendChild(clearWJ);
			_status.kzol_kzsg_dialogs21.clearWJ=clearWJ;
			game.kzol_dialogs_open(_status.kzol_kzsg_dialogs21);
			game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs21);
			
			
			_status.kzol_kzsg_dialogs22={};
			_status.kzol_kzsg_divs22={};
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='calc(100%)';
			dialog.style.width='calc(100%)';
			dialog.style.animation='fadeShow .3s';
			dialog.style['-webkit-animation']='fadeShow .3s';
			dialog.style.left='0px';
			dialog.style.top='0px';
			dialog.style['zIndex']=0;
			_status.kzol_kzsg_dialogs22.dialog=dialog;
			var boss_buttons=ui.create.div('');
			boss_buttons.style.height='calc(100%)';
			boss_buttons.style.width='calc(100%)';
			boss_buttons.style.top='0px';
			boss_buttons.style.left='0px';
			boss_buttons.style['overflow-x']='scroll';
			boss_buttons.style['overflow-y']='hidden';
			boss_buttons.addEventListener('mousewheel',function(e){
				var delD=e.wheelDelta?e.wheelDelta:-e.detail*40;
				var move_s=delD>0?-75:75;
				this.scrollLeft+=move_s;
			});
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(boss_buttons);
			boss_buttons.style['text-align']='left';
			boss_buttons.onmousedown=function(e){
				e.stopPropagation();
			};
			dialog.appendChild(boss_buttons);
			_status.kzol_kzsg_divs22.boss_buttons=boss_buttons;
			setInterval(function(){
				if(_status.kzol_kzsg_changeBoss!=true){
					for(var i=0;i<boss_buttons.childNodes.length;i++){
						boss_buttons.removeChild(boss_buttons.childNodes[i]);
						i--;
					};
					var num_boss=0;
					var get_str=function(boss,name,div){
						var str='';
						if(boss.times!=undefined){
							str+='结算次数：'+lib.config.kzol_kzsg.boss[name]+'/'+boss.times;
						};
						if(boss.battle!=undefined){
							var battle={};
							for(var i in boss.battle){
								battle[i]=boss.battle[i];
							};
							if(div!=undefined&&div.node.info_nd!=undefined){
								if(div.node.info_nd.link=='pt'){
									for(var i in boss.battle_pt){
										battle[i]=boss.battle_pt[i];
									};
								};
								if(div.node.info_nd.link=='kn'){
									for(var i in boss.battle_kn){
										battle[i]=boss.battle_kn[i];
									};
								};
							};
							if(battle.limit!=undefined){
								str+='<br>对战军队数：'+battle.limit;
							};
							if(battle.e_hp!=undefined){
								if(battle.e_hp==Infinity){
									str+='<br>敌方士气：∞';
								}else{
									str+='<br>敌方士气：'+battle.e_hp;
								};
							}else{
								str+='<br>敌方士气：'+battle.limit*30;
							};
							if(battle.p_hp!=undefined){
								if(battle.p_hp==Infinity){
									str+='<br>己方士气：∞';
								}else{
									str+='<br>己方士气：'+battle.p_hp;
								};
							}else{
								str+='<br>己方士气：'+battle.limit*30;
							};
							if(battle.reward!=undefined){
								var reward=battle.reward;
								var str_bool=true;
								str+='<br>通关奖励：';
								for(var j in reward){
									var str1='';
									var bool_a=false;
									for(var b in lib.kzol_kzsg_ck){
										if(b==j) bool_a=true;
									};
									if(j=='kzsg_coin'){
										str1+='<br>&nbsp-五铢钱x'+reward[j];
									}else if(j=='kzsg_coin1'){
										str1+='<br>&nbsp-古币x'+reward[j];
									}else if(bool_a==true){
										str1+='<br>&nbsp-'+j+'抽卡x'+reward[j];
									}else{
										str1+='<br>&nbsp-'+game.kzol_kzsg_changeStr(get.translation(j),j.slice(j.length-1,j.length))+'x'+reward[j];
									};
									str+=str1;
									str_bool=false;
								};
								if(battle.reward_info!=undefined){
									str_bool=false;
									str+=battle.reward_info;
								};
								if(str_bool==true) str+='<br>&nbsp-无';
							};
						};
						if(boss.info!=undefined){
							str+='<br>简介：<br>&nbsp&nbsp'+boss.info;
						};
						//if(str=="") boss.node.info.style.display='none';
						return str;
					};

					for(var i in lib.kzol_kzsg_card){
						var card=lib.kzol_kzsg_card[i];
						if(card.boss==true&&lib.kzol_kzsg_boss[i]!=undefined){
							var boss=ui.create.button(i,'character');
							boss.style.width='180px';
							boss.style.height='240px';
							boss.style.left=(20+200*num_boss)+'px';
							boss.style.top='calc(50% - 120px)';
							boss.style.position='absolute';
							boss.style['cursor']='pointer';
							boss.node.type.style.display='none';
							boss.node.skill.style.display='none';
							if(boss.node.bing)boss.node.bing.style.display='none';
							if(boss.node.bing_str)boss.node.bing_str.style.display='none';
							if(boss.node.bao) boss.node.bao.style.display='none';
							if(boss.node.bao_str)boss.node.bao_str.style.display='none';
							if(boss.node.shu)boss.node.shu.style.display='none';
							if(boss.node.shu_str)boss.node.shu_str.style.display='none';
							boss.node.prepareRound.style.top='210px';
							boss.node.prepareRound_str.style.top='225px';
							boss.node.attack.style.top='210px';
							boss.node.attack_str.style.top='225px';
							boss.node.hp.style.top='210px';
							boss.node.hp_str.style.top='225px';
							boss.node.group.style.height='25px';
							boss.node.group.style.width='25px';
							boss.node.group.style['font-size']='25px';
							boss.node.group.style['line-height']='25px';
							boss.node.name.style.top='30px';
							boss.node.name.style.width='25px';
							boss.node.name.style.height='200px';
							boss.node.name.style['max-height']='200px';
							boss.node.name.style['font-size']='25px';
							
							if(lib.kzol_kzsg_boss[i].battle_pt!=undefined||lib.kzol_kzsg_boss[i].battle_kn!=undefined){
								boss.node.info_nd=ui.create.div('','<span style="cursor:pointer;color:#FFFFFF;">简单</span>',boss);
								boss.node.info_nd.style.height='25px';
								boss.node.info_nd.style.width='45px';
								boss.node.info_nd.style.top='0px';
								boss.node.info_nd.style.right='0px';
								boss.node.info_nd.style['font-size']='20px';
								boss.node.info_nd.style['line-height']='25px';
								boss.node.info_nd.style['font-family']="'STXinwei','xinwei'";
								boss.node.info_nd.style['text-align']='center';
								boss.node.info_nd.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
								boss.node.info_nd.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
								boss.node.info_nd.style.borderRadius='8px';
								boss.node.info_nd.style.backgroundColor="rgb(4,255,0)";
								boss.node.info_nd.link='jd';
								boss.node.info_nd.link1=lib.kzol_kzsg_boss[i];
								boss.node.info_nd.link2=i;
								if(lib.kzol_kzsg_boss[i].battle_pt!=undefined) boss.node.info_nd.link_pt=true;
								if(lib.kzol_kzsg_boss[i].battle_kn!=undefined) boss.node.info_nd.link_kn=true;
								boss.node.info_nd.onclick=function(){
									if(this.link_pt!=undefined&&this.link_kn!=undefined){
										if(this.link=='kn'){
											this.link='jd';
											this.style.backgroundColor="rgb(4,255,0)";
											this.innerHTML='<span style="cursor:pointer;color:#FFFFFF;">简单</span>';
										}else if(this.link=='pt'){
											this.link='kn';
											this.style.backgroundColor="red";
											this.innerHTML='<span style="cursor:pointer;color:#FFFFFF;">困难</span>';
										}else{
											this.link='pt';
											this.style.backgroundColor="rgb(255,251,0)";
											this.innerHTML='<span style="cursor:pointer;color:#FFFFFF;">普通</span>';
										};
									}else{
										if(this.link_pt!=undefined){
											if(this.link=='pt'){
												this.link='jd';
												this.style.backgroundColor="rgb(4,255,0)";
												this.innerHTML='<span style="cursor:pointer;color:#FFFFFF;">简单</span>';
											}else{
												this.link='pt';
												this.style.backgroundColor="rgb(255,251,0)";
												this.innerHTML='<span style="cursor:pointer;color:#FFFFFF;">普通</span>';
											};
										};
										if(this.link_kn!=undefined){
											if(this.link=='kn'){
												this.link='jd';
												this.style.backgroundColor="rgb(4,255,0)";
												this.innerHTML='<span style="cursor:pointer;color:#FFFFFF;">简单</span>';
											}else{
												this.link='kn';
												this.style.backgroundColor="red";
												this.innerHTML='<span style="cursor:pointer;color:#FFFFFF;">困难</span>';
											};
										};
									};
									this.parentNode.node.info.innerHTML=get_str(this.link1,this.link2,this.parentNode);
								};
							};
							
							boss.node.info=ui.create.div('',boss);									
							boss.node.info.style.height='75px';
							boss.node.info.style.width='calc(100%)';
							boss.node.info.style.bottom='30px';
							boss.node.info.style.left='0px';
							boss.node.info.style['font-size']='15px';
							boss.node.info.style['text-align']='left';
							boss.node.info.style['font-family']="'STXinwei','xinwei'";
							boss.node.info.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
							boss.node.info.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
							boss.node.info.style['line-height']='15px';
							boss.node.info.style['overflow-x']='hidden';
							boss.node.info.style['overflow-y']='scroll';
							boss.node.info.innerHTML=get_str(lib.kzol_kzsg_boss[i],i,boss);
							boss.onmouseover=function(){
								var boss_buttons=_status.kzol_kzsg_divs22.boss_buttons;
								for(var i=0;i<boss_buttons.childNodes.length;i++){
									if(boss_buttons.childNodes[i]==this){
										boss_buttons.childNodes[i].style['z-index']=10;
										boss_buttons.childNodes[i].style.transform='scale(1.2,1.2)';
									}else{
										boss_buttons.childNodes[i].style['z-index']=1;
										boss_buttons.childNodes[i].style.transform='';
									};
								};
							};
							boss.onmouseout=function(){
								var boss_buttons=_status.kzol_kzsg_divs22.boss_buttons;
								for(var i=0;i<boss_buttons.childNodes.length;i++){
									boss_buttons.childNodes[i].style['z-index']=1;
									boss_buttons.childNodes[i].style.transform='';
								};
							};
							boss_buttons.appendChild(boss);
							boss.link_boss_name=i;
							boss.link_boss=lib.kzol_kzsg_boss[i];
							//boss.ondblclick
							boss.onclick=function(){
								var name=this.link_boss_name;
								var boss=this.link_boss;
								var boss_div=this;
								if(_status.kzol_kzsg_clickNumBoss==undefined) _status.kzol_kzsg_clickNumBoss=0;
								_status.kzol_kzsg_clickNumBoss++;
								_status.kzsg_timeoutBoss=setTimeout(function(){
									if(_status.kzol_kzsg_clickNumBoss>=2){
										if(boss.times!=undefined){
											if(lib.config.kzol_kzsg.boss[name]>=boss.times){
												clearTimeout(_status.kzsg_timeoutBoss);
												delete _status.kzsg_timeoutBoss;
												delete _status.kzol_kzsg_clickNumBoss;
												game.say1('今日结算次数已用完，无法进入');
												return ;
											};
										};
										var battle={};
										for(var i in boss.battle){
											battle[i]=boss.battle[i];
										};
										if(boss_div.node.info_nd!=undefined){
											if(boss_div.node.info_nd.link=='pt'){
												for(var i in boss.battle_pt){
													battle[i]=boss.battle_pt[i];
												};
											};
											if(boss_div.node.info_nd.link=='kn'){
												for(var i in boss.battle_kn){
													battle[i]=boss.battle_kn[i];
												};
											};
										};
										var limit=battle.limit;
										_status.kzol_kzsg_divs10.div_chooseArmy.link=limit;
										_status.kzol_kzsg_divs10.div11.link=battle;
										_status.kzol_kzsg_armyToBattle=[];
										delete _status.kzol_kzsg_changeCA;
										_status.kzol_kzsg_onBoss=true;
										game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs22);
										game.kzol_dialogs_show(_status.kzol_kzsg_dialogs10);
										
									};
									clearTimeout(_status.kzsg_timeoutBoss);
									delete _status.kzsg_timeoutBoss;
									delete _status.kzol_kzsg_clickNumBoss;
								},250);
							};
							num_boss++;
						};
					};
					_status.kzol_kzsg_changeBoss=true;
				};
			},100);
			var cancel=ui.create.dialog('hidden');
			cancel.classList.add('popped');
			cancel.classList.add('static');
			cancel.style.animation='fadelogIn .4s';
			cancel.style['-webkit-animation']='fadelogIn .4s';
			cancel.style.height='40px';
			cancel.style.width='60px';
			cancel.style.bottom='0px';
			cancel.style.left='45px';
			cancel.style.borderRadius='5px';
			cancel.style['text-align']='center';
			cancel.style['font-size']='25px';
			cancel.style['line-height']='40px';
			cancel.style['font-family']="'STXinwei','xinwei'";
			cancel.style['background-image']='linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))';
			cancel.style['cursor']='pointer';
			cancel.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">返回</span>';
			cancel.onclick=function(){
				game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs22);
				ui.background.setBackgroundImage('image/background/'+lib.config.image_background+'.jpg');
				game.kzol_dialogs_show(_status.kzol_kzsg_dialogs20);
			};
			ui.window.appendChild(cancel);
			_status.kzol_kzsg_dialogs22.cancel=cancel;
			game.kzol_dialogs_open(_status.kzol_kzsg_dialogs22);
			game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs22);
			
			
			_status.kzol_kzsg_dialogs23={};
			_status.kzol_kzsg_divs23={};
			var background=ui.create.dialog('hidden');
			background.style.height='calc(100%)';
			background.style.width='calc(100%)';
			background.style.left='0px';
			background.style.top='0px';
			background.style['zIndex']=0;
			_status.kzol_kzsg_dialogs23.background=background;
			var divg=ui.create.div();
			divg.style.height='2000px';
			divg.style.width='2000px';
			divg.style.left='-10px';
			divg.style.top='-10px';
			divg.onclick=function(){
				game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs23);
				game.kzol_dialogs_show(_status.kzol_kzsg_dialogs1);
			};
			_status.kzol_kzsg_divs23.divg=divg;
			background.add(divg);
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='500px';
			dialog.style.width='720px';
			dialog.style.left='calc(50% - 360px)';
			dialog.style.top='calc(50% - 250px)';
			dialog.classList.add('popped');
			dialog.classList.add('static');
			dialog.style.animation='fadeInDown .3s';
			dialog.style['-webkit-animation']='fadeInDown .3s';
			_status.kzol_kzsg_dialogs23.dialog=dialog;
			var diy_card_divs=ui.create.div('.menu');
			diy_card_divs.style.width='680px';
			diy_card_divs.style.height='470px';
			diy_card_divs.style.left='20px';
			diy_card_divs.style.top='15px';
			diy_card_divs.style['text-align']='left';
			diy_card_divs.style['overflow-x']='hidden';
			diy_card_divs.style['overflow-y']='scroll';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(diy_card_divs);
			diy_card_divs.style.borderRadius='8px';
			dialog.appendChild(diy_card_divs);
			_status.kzol_kzsg_divs23.diy_card_divs=diy_card_divs;
			setInterval(function(){
				if(_status.kzol_kzsg_changeDiyjm!=true){
					var kzol_kzsg_divs23=_status.kzol_kzsg_divs23;
					var diy_card_divs=kzol_kzsg_divs23.diy_card_divs;
					for(var i=0;i<diy_card_divs.childNodes.length;i++){
						diy_card_divs.removeChild(diy_card_divs.childNodes[0]);
						i--;
					};
					var num=0;
					for(var i in lib.config.kzol_kzsg.diy){
						var card=lib.config.kzol_kzsg.diy[i];
						if(card.jy==undefined){
							var button=ui.create.button(i,'character');
							button.style.width='90px';
							button.style.height='120px';
							button.style.left=(1+98*(num%7))+'px';
							button.style.top=(7.5+127.5*Math.floor(num/7))+'px';
							button.style.position='absolute';
							button.style.margin='0px';
							button.style.cursor='pointer';
							button.link=i;
							button.onclick=function(){
								_status.kzol_kzsg_onEditDiy=this.link;
								delete _status.kzol_kzsg_changeDiyjm1;
								game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs23);
								game.kzol_dialogs_show(_status.kzol_kzsg_dialogs24);
								
							};
							diy_card_divs.appendChild(button);
							game.kzol_kzsg_clickFk(button);
						}else{
							var div=ui.create.div('.player');
							div.style.width='90px';
							div.style.height='120px';
							div.style.left=(1+98*(num%7))+'px';
							div.style.top=(7.5+127.5*Math.floor(num/7))+'px';
							div.style['font-size']='30px';
							div.style['text-align']='center';
							div.style['font-family']="'STXinwei','xinwei'";
							div.style['line-height']='120px';
							div.style.cursor='pointer';
							div.style.backgroundSize='cover';
							div.innerHTML='<span style="cursor:pointer;">禁用</span>';
							div.link=i;
							var str="extension/扩展ol/"+card.name+".jpg";
							if(card.image!=undefined) str="extension/扩展ol/kzsg_image/"+card.image;
							div.setBackgroundImage(str);
							div.onclick=function(){
								_status.kzol_kzsg_onEditDiy=this.link;
								delete _status.kzol_kzsg_changeDiyjm1;
								game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs23);
								game.kzol_dialogs_show(_status.kzol_kzsg_dialogs24);
							};
							diy_card_divs.appendChild(div);
							game.kzol_kzsg_clickFk(div);
						};
						num++;
					};
					var cardPack=lib.config.kzol_kzsg.diy[i];
					var div=ui.create.div('.player');
					div.style.width='90px';
					div.style.height='120px';
					div.style.left=(1+98*(num%7))+'px';
					div.style.top=(7.5+127.5*Math.floor(num/7))+'px';
					div.style['font-size']='30px';
					div.style['text-align']='center';
					div.style['font-family']="'STXinwei','xinwei'";
					div.style['line-height']='120px';
					div.style.cursor='pointer';
					div.innerHTML='<span style="cursor:pointer;">新建</span>';
					div.onclick=function(){
						delete _status.kzol_kzsg_onEditDiy;
						delete _status.kzol_kzsg_changeDiyjm1;
						game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs23);
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs24);
					};
					diy_card_divs.appendChild(div);
					game.kzol_kzsg_clickFk(div);
					_status.kzol_kzsg_changeDiyjm=true;
				};
			},100);
			var rushDIY=ui.create.dialog('hidden');
			rushDIY.classList.add('popped');
			rushDIY.classList.add('static');
			rushDIY.style.animation='fadelogIn .4s';
			rushDIY.style['-webkit-animation']='fadelogIn .4s';
			rushDIY.style.height='40px';
			rushDIY.style.width='60px';
			rushDIY.style.bottom='0px';
			rushDIY.style.left='45px';
			rushDIY.style.borderRadius='5px';
			rushDIY.style['text-align']='center';
			rushDIY.style['font-size']='25px';
			rushDIY.style['line-height']='40px';
			rushDIY.style['font-family']="'STXinwei','xinwei'";
			rushDIY.style['background-image']='linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))';
			rushDIY.style['cursor']='pointer';
			rushDIY.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">刷新</span>';
			rushDIY.onclick=function(){
				delete _status.kzol_kzsg_changeDiyjm;
			};
			ui.window.appendChild(rushDIY);
			_status.kzol_kzsg_dialogs23.rushDIY=rushDIY;
			game.kzol_dialogs_open(_status.kzol_kzsg_dialogs23);
			game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs23);
			
			
			_status.kzol_kzsg_dialogs24={};
			_status.kzol_kzsg_divs24={};
			var background=ui.create.dialog('hidden');
			background.style.height='calc(100%)';
			background.style.width='calc(100%)';
			background.style.left='0px';
			background.style.top='0px';
			background.style['zIndex']=0;
			_status.kzol_kzsg_dialogs24.background=background;
			var divh=ui.create.div();
			divh.style.height='2000px';
			divh.style.width='2000px';
			divh.style.left='-10px';
			divh.style.top='-10px';
			setTimeout(function(){
				divh.onclick=function(){
					if(_status.kzol_kzsg_forceDIY==true){
						game.say1('关闭界面失败，请先解除界面锁定');
						return ;
					};
					game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs24);
					game.kzol_dialogs_show(_status.kzol_kzsg_dialogs23);
				};
			},750);
			_status.kzol_kzsg_divs24.divh=divh;
			background.add(divh);
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='320px';
			dialog.style.width='802.5px';
			dialog.style.left='calc(50% - 401.25px)';
			dialog.style.top='calc(50% - 160px)';
			dialog.classList.add('popped');
			dialog.classList.add('static');
			dialog.style.animation='fadeInDown .3s';
			dialog.style['-webkit-animation']='fadeInDown .3s';
			_status.kzol_kzsg_dialogs24.dialog=dialog;
			var diy_edit=ui.create.div('.menu');
			diy_edit.style.width='782.5px';
			diy_edit.style.height='300px';
			diy_edit.style.left='10px';
			diy_edit.style.top='10px';
			diy_edit.style['text-align']='left';
			diy_edit.style['overflow-x']='hidden';
			diy_edit.style['overflow-y']='scroll';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(diy_edit);
			diy_edit.style.borderRadius='8px';
			dialog.appendChild(diy_edit);
			_status.kzol_kzsg_divs24.diy_edit=diy_edit;
			setInterval(function(){
				if(_status.kzol_kzsg_changeDiyjm1!=true){
					var kzol_kzsg_divs24=_status.kzol_kzsg_divs24;
					var diy_edit=kzol_kzsg_divs24.diy_edit;
					for(var i=0;i<diy_edit.childNodes.length;i++){
						diy_edit.removeChild(diy_edit.childNodes[0]);
						i--;
					};
					var list=[];
					for(var i in lib.kzol_kzsg_card){
						var card=lib.kzol_kzsg_card[i];
						if(!list.contains(card.type)) list.push(card.type);
					};
					var config=lib.config.kzol_kzsg.diy;
					var diy_num=_status.kzol_kzsg_onEditDiy;
					var avatar1=ui.create.div('.player');
					avatar1.style.height='120px';
					avatar1.style.width='90px';
					avatar1.style.left='680px';
					avatar1.style.top='65px';
					avatar1.style.backgroundSize='cover';
					if(diy_num!=undefined&&config[diy_num]!=undefined&&config[diy_num].image!=undefined){
						avatar1.setBackgroundImage("extension/扩展ol/kzsg_image/"+config[diy_num].image);
					};
					//avatar1.style['font-size']='40px';
					//avatar1.style['text-align']='center';
					//avatar1.style['font-family']="'STXinwei','xinwei'";
					//avatar1.style['line-height']='120px';
					//avatar1.innerHTML='图片';
					var input=document.createElement('input');
					input.type='file';
					input.accept='image/*';
					input.className='fileinput';
					input.onchange=function(){
						var fileToLoad=input.files[0];
						if(fileToLoad){
							var fileReader = new FileReader();
							fileReader.onload = function(fileLoadedEvent){
								var data = fileLoadedEvent.target.result;
								avatar1.style.backgroundImage='url('+data+')';
								avatar1.image64=data;
								avatar1.classList.add('inited');
								var fileReader = new FileReader();
								fileReader.onload = function(fileLoadedEvent){
									avatar1.image=fileLoadedEvent.target.result;
								};
								fileReader.readAsArrayBuffer(fileToLoad, "UTF-8");
							};
							fileReader.readAsDataURL(fileToLoad, "UTF-8");
						};
					};
					avatar1.appendChild(input);
					diy_edit.appendChild(avatar1);
					var name1=ui.create.div('.menu');
					name1.style.height='30px';
					name1.style.width='210px';
					name1.style.left='12.5px';
					name1.style.top='10px';
					name1.style['font-size']='15px';
					name1.style['text-align']='center';
					name1.style['font-family']="'STXinwei','xinwei'";
					name1.style['line-height']='30px';
					diy_edit.appendChild(name1);
					var str='';
					if(diy_num!=undefined&&config[diy_num]!=undefined) str=config[diy_num].name.slice(5,config[diy_num].name.length);
					name1.innerHTML='名字：<input type="text" value="'+str+'" style="width:150px"></input>';
					var translate1=ui.create.div('.menu');
					translate1.style.height='30px';
					translate1.style.width='210px';
					translate1.style.left='12.5px';
					translate1.style.top='50px';
					translate1.style['font-size']='15px';
					translate1.style['text-align']='center';
					translate1.style['font-family']="'STXinwei','xinwei'";
					translate1.style['line-height']='30px';
					diy_edit.appendChild(translate1);
					var str='';
					if(diy_num!=undefined&&config[diy_num]!=undefined) str=config[diy_num].translate;
					translate1.innerHTML='翻译：<input type="text" value="'+str+'" style="width:150px"></input>';
					var sex=ui.create.div('.menu');
					sex.style.height='30px';
					sex.style.width='210px';
					sex.style.left='12.5px';
					sex.style.top='90px';
					sex.style['font-size']='15px';
					sex.style['text-align']='center';
					sex.style['font-family']="'STXinwei','xinwei'";
					sex.style['line-height']='30px';
					diy_edit.appendChild(sex);
					var str='无';
					if(diy_num!=undefined&&config[diy_num]!=undefined) str=config[diy_num].sex;
					sex.innerHTML='性别：<select size="1" style="width:150px">'+
					'<option value="male">男</option>'+
					'<option value="female">女</option>'+
					'<option selected="selected" value="none">无</option>'+
					'</select>';
					for(var i=0;i<sex.querySelector('select').options.length;i++){
						if(sex.querySelector('select').options[i].value==str) sex.querySelector('select').selectedIndex=i;
					};
					var group=ui.create.div('.menu');
					group.style.height='30px';
					group.style.width='210px';
					group.style.left='12.5px';
					group.style.top='130px';
					group.style['font-size']='15px';
					group.style['text-align']='center';
					group.style['font-family']="'STXinwei','xinwei'";
					group.style['line-height']='30px';
					diy_edit.appendChild(group);
					var str='群雄';
					if(diy_num!=undefined&&config[diy_num]!=undefined) str=config[diy_num].group;
					group.innerHTML='势力：<select size="1" style="width:150px">'+
					'<option value="shu">蜀国</option>'+
					'<option value="wu">吴国</option>'+
					'<option value="wei">魏国</option>'+
					'<option selected="selected" value="qun">群雄</option>'+
					'<option value="xia">侠客</option>'+
					'</select>';
					for(var i=0;i<group.querySelector('select').options.length;i++){
						if(group.querySelector('select').options[i].value==str) group.querySelector('select').selectedIndex=i;
					};
					var quailty=ui.create.div('.menu');
					quailty.style.height='30px';
					quailty.style.width='210px';
					quailty.style.left='12.5px';
					quailty.style.top='170px';
					quailty.style['font-size']='15px';
					quailty.style['text-align']='center';
					quailty.style['font-family']="'STXinwei','xinwei'";
					quailty.style['line-height']='30px';
					diy_edit.appendChild(quailty);
					var str='灰';
					if(diy_num!=undefined&&config[diy_num]!=undefined) str=config[diy_num].quailty;
					quailty.innerHTML='品质：<select size="1" style="width:150px">'+
					'<option selected="selected" value="1">灰</option>'+
					'<option value="2">白</option>'+
					'<option value="3">绿</option>'+
					'<option value="4">蓝</option>'+
					'<option value="5">紫</option>'+
					'<option value="6">橙</option>'+
					'<option value="7">红</option>'+
					'</select>';
					for(var i=0;i<quailty.querySelector('select').options.length;i++){
						if(quailty.querySelector('select').options[i].value==str) quailty.querySelector('select').selectedIndex=i;
					};
					var type=ui.create.div('.menu');
					type.style.height='30px';
					type.style.width='210px';
					type.style.left='235px';
					type.style.top='10px';
					type.style['font-size']='15px';
					type.style['text-align']='center';
					type.style['font-family']="'STXinwei','xinwei'";
					type.style['line-height']='30px';
					diy_edit.appendChild(type);
					var str='步兵';
					if(diy_num!=undefined&&config[diy_num]!=undefined) str=config[diy_num].type;
					str1='类型：<select size="1" style="width:150px">';
					for(var i=0;i<list.length;i++){
						str1+='<option value="'+list[i]+'">'+list[i]+'</option>';
					};
					str1+='</select>';
					type.innerHTML=str1;
					for(var i=0;i<type.querySelector('select').options.length;i++){
						if(type.querySelector('select').options[i].value==str) type.querySelector('select').selectedIndex=i;
					};
					var hp=ui.create.div('.menu');
					hp.style.height='30px';
					hp.style.width='210px';
					hp.style.left='235px';
					hp.style.top='50px';
					hp.style['font-size']='15px';
					hp.style['text-align']='center';
					hp.style['font-family']="'STXinwei','xinwei'";
					hp.style['line-height']='30px';
					diy_edit.appendChild(hp);
					var str=0;
					if(diy_num!=undefined&&config[diy_num]!=undefined) str=config[diy_num].hp;
					hp.innerHTML='体力：<input type="text" value="'+str+'" style="width:150px"></input>';
					var attack=ui.create.div('.menu');
					attack.style.height='30px';
					attack.style.width='210px';
					attack.style.left='235px';
					attack.style.top='90px';
					attack.style['font-size']='15px';
					attack.style['text-align']='center';
					attack.style['font-family']="'STXinwei','xinwei'";
					attack.style['line-height']='30px';
					diy_edit.appendChild(attack);
					var str=0;
					if(diy_num!=undefined&&config[diy_num]!=undefined) str=config[diy_num].attack;
					attack.innerHTML='攻击力：<input type="text" value="'+str+'" style="width:135px"></input>';
					var prepareRound=ui.create.div('.menu');
					prepareRound.style.height='30px';
					prepareRound.style.width='210px';
					prepareRound.style.left='235px';
					prepareRound.style.top='130px';
					prepareRound.style['font-size']='15px';
					prepareRound.style['text-align']='center';
					prepareRound.style['font-family']="'STXinwei','xinwei'";
					prepareRound.style['line-height']='30px';
					diy_edit.appendChild(prepareRound);
					var str=0;
					if(diy_num!=undefined&&config[diy_num]!=undefined) str=config[diy_num].prepareRound;
					prepareRound.innerHTML='等待回合数：<input type="text" value="'+str+'" style="width:105px"></input>';
					var bing=ui.create.div('.menu');
					bing.style.height='30px';
					bing.style.width='210px';
					bing.style.left='235px';
					bing.style.top='170px';
					bing.style['font-size']='15px';
					bing.style['text-align']='center';
					bing.style['font-family']="'STXinwei','xinwei'";
					bing.style['line-height']='30px';
					diy_edit.appendChild(bing);
					var str=0;
					if(diy_num!=undefined&&config[diy_num]!=undefined) str=config[diy_num].bing;
					bing.innerHTML='带兵数：<input type="text" value="'+str+'" style="width:135px"></input>';
					_status.kzol_kzsg_changeDiyjm1=true;
					var bao=ui.create.div('.menu');
					bao.style.height='30px';
					bao.style.width='210px';
					bao.style.left='457.5px';
					bao.style.top='10px';
					bao.style['font-size']='15px';
					bao.style['text-align']='center';
					bao.style['font-family']="'STXinwei','xinwei'";
					bao.style['line-height']='30px';
					diy_edit.appendChild(bao);
					var str=0;
					if(diy_num!=undefined&&config[diy_num]!=undefined) str=config[diy_num].bao;
					bao.innerHTML='带宝数：<input type="text" value="'+str+'" style="width:135px"></input>';
					var shu=ui.create.div('.menu');
					shu.style.height='30px';
					shu.style.width='210px';
					shu.style.left='457.5px';
					shu.style.top='50px';
					shu.style['font-size']='15px';
					shu.style['text-align']='center';
					shu.style['font-family']="'STXinwei','xinwei'";
					shu.style['line-height']='30px';
					diy_edit.appendChild(shu);
					var str=0;
					if(diy_num!=undefined&&config[diy_num]!=undefined) str=config[diy_num].shu;
					shu.innerHTML='带术数：<input type="text" value="'+str+'" style="width:135px"></input>';
					var inKb=ui.create.div('.menu');
					inKb.style.height='30px';
					inKb.style.width='210px';
					inKb.style.left='457.5px';
					inKb.style.top='90px';
					inKb.style['font-size']='15px';
					inKb.style['text-align']='center';
					inKb.style['font-family']="'STXinwei','xinwei'";
					inKb.style['line-height']='30px';
					diy_edit.appendChild(inKb);
					var bool=true;
					if(diy_num!=undefined&&config[diy_num]!=undefined) bool=config[diy_num].inKb;
					inKb.innerHTML='是否可以获得？：<input type="checkbox" value="true" style="width:13px"></input>';
					inKb.querySelector('input').checked=bool;
					var boss=ui.create.div('.menu');
					boss.style.height='30px';
					boss.style.width='210px';
					boss.style.left='457.5px';
					boss.style.top='130px';
					boss.style['font-size']='15px';
					boss.style['text-align']='center';
					boss.style['font-family']="'STXinwei','xinwei'";
					boss.style['line-height']='30px';
					diy_edit.appendChild(boss);
					var bool=false;
					if(diy_num!=undefined&&config[diy_num]!=undefined) bool=config[diy_num].boss;
					boss.innerHTML='是否为BOSS？：<input type="checkbox" value="true" style="width:13px"></input>';
					boss.querySelector('input').checked=bool;
					var info=ui.create.div('.menu');
					info.style.height='30px';
					info.style.width='210px';
					info.style.left='457.5px';
					info.style.top='170px';
					info.style['font-size']='15px';
					info.style['text-align']='center';
					info.style['font-family']="'STXinwei','xinwei'";
					info.style['line-height']='30px';
					diy_edit.appendChild(info);
					var str='';
					if(diy_num!=undefined&&config[diy_num]!=undefined) str=config[diy_num].info;
					info.innerHTML='简介：<input type="text" value="'+str+'" style="width:150px"></input>';
					var skills=ui.create.div('.menu');
					skills.style.height='30px';
					skills.style.width='100px';
					skills.style.left='12.5px';
					skills.style.top='210px';
					skills.style['font-size']='20px';
					skills.style['text-align']='center';
					skills.style['font-family']="'STXinwei','xinwei'";
					skills.style['line-height']='30px';
					diy_edit.appendChild(skills);
					skills.innerHTML='技能';
					var skills2=ui.create.div('.menu');
					skills2.style.height='30px';
					skills2.style.width='310px';
					skills2.style.left='357.5px';
					skills2.style.top='210px';
					skills2.style['text-align']='left';
					skills2.style['overflow-x']='hidden';
					skills2.style['overflow-y']='scroll';
					if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(skills2);
					diy_edit.appendChild(skills2);
					var func=function(name){
						var div=ui.create.div('.menu');
						div.style.height='20px'
						div.style.width=(get.translation(name).length*15+2)+'px';
						div.style.top='3px'
						div.style.position='relative';
						div.style.margin='2px';
						div.style['font-size']='15px';
						div.style['text-align']='center';
						div.style['font-family']="'STXinwei','xinwei'";
						div.style['line-height']='20px';
						div.style['cursor']='pointer';
						div.link=name;
						div.innerHTML=get.translation(name);
						div.onclick=function(){
							skills2.removeChild(this);
						};
						skills2.appendChild(div);
					};
					var skills_list=[];
					if(diy_num!=undefined&&config[diy_num]!=undefined) skills_list=config[diy_num].skills;
					for(var i=0;i<skills_list.length;i++){
						func(skills_list[i]);
					};
					var skills1=ui.create.div('.menu');
					skills1.style.height='30px';
					skills1.style.width='220px';
					skills1.style.left='125px';
					skills1.style.top='210px';
					skills1.style['font-size']='15px';
					skills1.style['text-align']='center';
					skills1.style['font-family']="'STXinwei','xinwei'";
					skills1.style['line-height']='30px';
					diy_edit.appendChild(skills1);
					var str='冲阵1';
					str1='<select size="1" style="width:150px">';
					for(var i in lib.skill){
						var KZ_skill=lib.skill[i];
						if(i.indexOf('kzsg')!=-1&&KZ_skill.mode!=undefined&&KZ_skill.mode.contains('kzsg')){
							str1+='<option value="'+i+'">'+get.translation(i)+'</option>';
						};
					};
					str1+='</select>&nbsp<button style="width:45px">确定</button>';
					skills1.innerHTML=str1;
					for(var i=0;i<skills1.querySelector('select').options.length;i++){
						if(skills1.querySelector('select').options[i].innerText==str) skills1.querySelector('select').selectedIndex=i;
					};
					skills1.querySelector('button').onclick=function(){
						var skill=skills1.querySelector('select').options[skills1.querySelector('select').selectedIndex].value;
						var bool=true;
						for(var i=0;i<skills2.childNodes.length;i++){
							if(skills2.childNodes[i].link==skill) bool=false;
						};
						if(bool==false){
							game.say1('该卡牌已拥有技能【'+get.translation(skill)+'】');
							return ;
						};
						func(skill);
					};
					var cjkp=ui.create.div('.menu');
					cjkp.style.height='40px';
					cjkp.style.width='160px';
					if(diy_num!=undefined&&config[diy_num]!=undefined){
						cjkp.style.left='calc(25% - 80px)';
					}else{
						cjkp.style.left='calc(50% - 80px)';
					};
					cjkp.style.top='250px';
					cjkp.style['font-size']='35px';
					cjkp.style['text-align']='center';
					cjkp.style['font-family']="'STXinwei','xinwei'";
					cjkp.style['line-height']='40px';
					cjkp.style['cursor']='pointer';
					str='创建卡牌';
					if(diy_num!=undefined&&config[diy_num]!=undefined){
						str='修改卡牌';
						cjkp.link_xg=true;
					};
					cjkp.innerHTML=str;
					diy_edit.appendChild(cjkp);
					game.kzol_kzsg_clickFk(cjkp);
					cjkp.avatar1=input;
					cjkp.name1=name1;
					cjkp.translate1=translate1;
					cjkp.sex=sex;
					cjkp.group=group;
					cjkp.quailty=quailty;
					cjkp.type=type;
					cjkp.hp=hp;
					cjkp.attack=attack;
					cjkp.prepareRound=prepareRound;
					cjkp.bing=bing;
					cjkp.bao=bao;
					cjkp.shu=shu;
					cjkp.skills2=skills2;
					cjkp.boss=boss;
					cjkp.inKb=inKb;
					cjkp.info=info;
					if(diy_num!=undefined&&config[diy_num]!=undefined){
						cjkp.link_name=config[diy_num].name;
						cjkp.link_diy_num=diy_num;
					};
					cjkp.onclick=function(){
						var name1=this.name1;
						var translate1=this.translate1;
						var sex=this.sex;
						var group=this.group;
						var quailty=this.quailty;
						var type=this.type;
						var hp=this.hp;
						var attack=this.attack;
						var prepareRound=this.prepareRound;
						var bing=this.bing;
						var bao=this.bao;
						var shu=this.shu;
						var skills2=this.skills2;
						var boss=this.boss;
						var inKb=this.inKb;
						var info=this.info;
						if(name1.querySelector('input').value==undefined||name1.querySelector('input').value.length==0){
							game.say1('请先填入卡牌名字');
							return ;
						};
						if(translate1.querySelector('input').value==undefined||translate1.querySelector('input').value.length==0){
							game.say1('请先填入卡牌名字翻译');
							return ;
						};
						var name2_str=this.link_name;
						var name_str='kzsg_'+name1.querySelector('input').value;
						var translate_str=translate1.querySelector('input').value;
						var sex_str=sex.querySelector('select').options[sex.querySelector('select').selectedIndex].value;
						var group_str=group.querySelector('select').options[group.querySelector('select').selectedIndex].value;
						var quailty_str=parseInt(quailty.querySelector('select').options[quailty.querySelector('select').selectedIndex].value);
						var type_str=type.querySelector('select').options[type.querySelector('select').selectedIndex].value;
						var hp_str=hp.querySelector('input').value;
						var reg=/^[0-9]+$/;
						if(!reg.test(hp_str)){
							game.say1('填入的体力不是一个数字');
							return ;
						};
						hp_str=parseInt(hp_str);
						var attack_str=attack.querySelector('input').value;
						var reg=/^[0-9]+$/;
						if(!reg.test(attack_str)){
							game.say1('填入的攻击力不是一个数字');
							return ;
						};
						attack_str=parseInt(attack_str);
						var prepareRound_str=prepareRound.querySelector('input').value;
						var reg=/^[0-9]+$/;
						if(!reg.test(prepareRound_str)){
							game.say1('填入的等待回合数不是一个数字');
							return ;
						};
						prepareRound_str=parseInt(prepareRound_str);
						var bing_str=bing.querySelector('input').value;
						var reg=/^[0-9]+$/;
						if(!reg.test(bing_str)){
							game.say1('填入的带兵数不是一个数字');
							return ;
						};
						bing_str=parseInt(bing_str);
						var bao_str=bao.querySelector('input').value;
						var reg=/^[0-9]+$/;
						if(!reg.test(bao_str)){
							game.say1('填入的带宝数不是一个数字');
							return ;
						};
						bao_str=parseInt(bao_str);
						var shu_str=shu.querySelector('input').value;
						var reg=/^[0-9]+$/;
						if(!reg.test(shu_str)){
							game.say1('填入的带术数不是一个数字');
							return ;
						};
						shu_str=parseInt(shu_str);
						var boss_str=boss.querySelector('input').checked;
						var inKb_str=inKb.querySelector('input').checked;
						var info_str=info.querySelector('input').value;
						var skills_list=[];
						for(var i=0;i<skills2.childNodes.length;i++){
							skills_list.push(skills2.childNodes[i].link);
						};
						var name1_str=name_str+quailty_str;
						if(this.link_xg==undefined){
							var list=[];
							for(var i in lib.kzol_kzsg_card){
								list.push(i);
							};
							for(var i in lib.config.kzol_kzsg.diy){
								list.push(i);
							};
							if(list.contains(name1_str)){
								game.say1('当前图鉴中已有该卡牌，创建失败');
								return ;
							};
						}else{
							if(name_str!=name2_str){
								game.say1('请不要改动卡牌名字');
								return ;
							};
						};
						if(this.link_diy_num!=undefined&&lib.config.kzol_kzsg.diy[this.link_diy_num].jy!=undefined){
							if(!confirm('修改卡牌会解除禁用，是否继续？')){
								return ;
							};
						};
						var card={
							name:name_str,
							translate:translate_str,
							sex:sex_str,
							group:group_str,
							quailty:quailty_str,
							type:type_str,
							hp:hp_str,
							attack:attack_str,
							prepareRound:prepareRound_str,
							bing:bing_str,
							bao:bao_str,
							shu:shu_str,
							skills:skills_list,
							info:info_str,
							inKb:inKb_str,
							forbidai:true,
						};
						if(boss_str==true){
							card.boss=true;
						};
						if(this.link_xg==undefined){
							card.author=lib.config.kzol_kzsg.name;
						}else{
							card.author=config[diy_num].author;
						};
						if(this.link_diy_num!=undefined&&lib.config.kzol_kzsg.diy[this.link_diy_num].quailty!=card.quailty){
							if(!confirm('修改卡牌品质会新建一张卡牌，是否继续？')){
								return ;
							};
							var list_skill=[];
							for(var i=0;i<card.skills.length;i++){
								list_skill.push(card.skills[i]);
							};
							card.skills=list_skill;
						};
						if(this.avatar1.files!=undefined&&this.avatar1.files[0]!=undefined){
							var file=this.avatar1.files[0];
							card.image=file.name;
							var func=function(){
								var fileToLoad=file;
								if(fileToLoad){
									var fileReader = new FileReader();
									fileReader.onload = function(e){
										game.writeFile(e.target.result,'extension/扩展ol/kzsg_image',fileToLoad.name,function(){});
									};
									fileReader.readAsArrayBuffer(fileToLoad, "UTF-8");
								};
							};
							if(lib.config.kzol_kzsg_createImageFiles!=true){
								if(lib.node&&lib.node.fs){
									lib.node.fs.mkdir(__dirname+'/extension/扩展ol/kzsg_image',function(){
										game.saveConfig('kzol_kzsg_createImageFiles',true);
										func();
									});
								}else{
									window.resolveLocalFileSystemURL(lib.assetURL+'extension/扩展ol',function(entry){
										entry.getDirectory('kzsg_image',{create:true},function(){
											game.saveConfig('kzol_kzsg_createImageFiles',true);
											func();
										});
									});
								};
							}else{
								func();
							};
						}else{
							if(config[diy_num]==undefined){
								game.say1('请先选择卡牌图片');
								return ;
							}else{
								card.image=config[diy_num].image;
							};
						};
						if(card.boss==true){
							if(lib.config.kzol_kzsg.boss[name1_str]==undefined) lib.config.kzol_kzsg.boss[name1_str]=0;
							lib.kzol_kzsg_boss[name1_str]={
								'times':1,
								'info':card.info,
								'battle':{
									name:name1_str,
									type:'boss',
									limit:3,
									reward:{},
									army:{
										'1':{
											leader:{
												'0':name1_str,
											},
											number:{},
										},
									},
								},
								'battle_pt':{
									limit:2,
								},
								'battle_kn':{
									limit:1,
								},
							};
						};
						if(this.link_xg!=undefined&&card.boss!=true&&lib.kzol_kzsg_boss[name1_str]!=undefined){
							delete lib.kzol_kzsg_boss[name1_str];
							delete _status.kzol_kzsg_changeBoss;
						};
						lib.config.kzol_kzsg.diy[name1_str]=card;
						game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
						lib.kzol_kzsg_card[name1_str]=card;
						var str="ext:扩展ol/kzsg_image/"+card.name+".jpg";
						if(card.image!=undefined) str="ext:扩展ol/kzsg_image/"+card.image;
						lib.characterPack['mode_extension_卡战图鉴'][name1_str]=[card.sex,card.group,card.hp,card.skills,[str,"des:卡战模式配套武将",'forbidai']];
						lib.character[name1_str]=lib.characterPack['mode_extension_卡战图鉴'][name1_str];
						lib.translate[name1_str]=card.translate;
						lib.characterSort['mode_extension_卡战图鉴']['kzsg_list'+card.quailty].push(name1_str);
						lib.characterTitle[name1_str]=card.author+'<br>'+card.info;
						delete _status.kzol_kzsg_changeDiyjm;
						if(card.boss==true) delete _status.kzol_kzsg_changeBoss;
						if(this.link_xg==undefined){
							game.say1('创建成功');
							game.kzol_kzsg_hyDiy();
						}else{
							game.say1('修改成功');
						};
						game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs24);
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs23);
					};
					if(diy_num!=undefined&&config[diy_num]!=undefined){
						var jykp=ui.create.div('.menu');
						jykp.style.height='40px';
						jykp.style.width='160px';
						jykp.style.left='calc(50% - 80px)';
						jykp.style.top='250px';
						jykp.style['font-size']='35px';
						jykp.style['text-align']='center';
						jykp.style['font-family']="'STXinwei','xinwei'";
						jykp.style['line-height']='40px';
						jykp.style['cursor']='pointer';
						jykp.innerHTML='禁用卡牌';
						if(config[diy_num].jy!=undefined) jykp.innerHTML='解除禁用';
						jykp.link=diy_num;
						jykp.onclick=function(){
							var name=this.link;
							var card=lib.config.kzol_kzsg.diy[name];
							if(this.innerHTML=='禁用卡牌'){
								if(card.boss==true&&lib.kzol_kzsg_boss[name]!=undefined){
									delete lib.kzol_kzsg_boss[name];
									delete _status.kzol_kzsg_changeBoss;
								};
								lib.config.kzol_kzsg.diy[name].jy=true;
								delete lib.kzol_kzsg_card[name];
								delete lib.characterPack['mode_extension_卡战图鉴'][name];
								delete lib.character[name];
								delete lib.translate[name];
								lib.characterSort['mode_extension_卡战图鉴']['kzsg_list'+card.quailty].remove(name);
								delete lib.characterTitle[name];
								game.kzol_kzsg_changeToMB(name);
								game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
								delete _status.kzol_kzsg_changeDiyjm;
								game.say1('禁用成功');
								this.innerHTML='解除禁用';
							}else{
								if(card.boss==true){
									if(lib.config.kzol_kzsg.boss[name]==undefined) lib.config.kzol_kzsg.boss[name]=0;
									lib.kzol_kzsg_boss[name]={
										'times':1,
										'info':card.info,
										'battle':{
											name:name,
											type:'boss',
											limit:3,
											reward:{},
											army:{
												'1':{
													leader:{
														'0':name,
													},
													number:{},
												},
											},
										},
										'battle_pt':{
											limit:2,
										},
										'battle_kn':{
											limit:1,
										},
									};
								};
								delete lib.config.kzol_kzsg.diy[name].jy;
								game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
								lib.kzol_kzsg_card[name]=card;
								var str="ext:扩展ol/kzsg_image/"+card.name+".jpg";
								if(card.image!=undefined) str="ext:扩展ol/kzsg_image/"+card.image;
								lib.characterPack['mode_extension_卡战图鉴'][name]=[card.sex,card.group,card.hp,card.skills,[str,"des:卡战模式配套武将",'forbidai']];
								lib.character[name]=lib.characterPack['mode_extension_卡战图鉴'][name];
								lib.translate[name]=card.translate;
								lib.characterSort['mode_extension_卡战图鉴']['kzsg_list'+card.quailty].push(name);
								lib.characterTitle[name]=card.author+'<br>'+card.info;
								game.kzol_kzsg_hyDiy();
								game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
								delete _status.kzol_kzsg_changeDiyjm;
								if(card.boss==true) delete _status.kzol_kzsg_changeBoss;
								game.say1('解除成功');
								this.innerHTML='禁用卡牌';
							};
						};
						diy_edit.appendChild(jykp);
						game.kzol_kzsg_clickFk(jykp);
						var sckp=ui.create.div('.menu');
						sckp.style.height='40px';
						sckp.style.width='160px';
						sckp.style.left='calc(75% - 80px)';
						sckp.style.top='250px';
						sckp.style['font-size']='35px';
						sckp.style['text-align']='center';
						sckp.style['font-family']="'STXinwei','xinwei'";
						sckp.style['line-height']='40px';
						sckp.style['cursor']='pointer';
						sckp.innerHTML='删除卡牌';
						sckp.link=diy_num;
						sckp.onclick=function(){
							game.kzol_kzsg_deleteDiy(this.link);
						};
						diy_edit.appendChild(sckp);
						game.kzol_kzsg_clickFk(sckp);
					};
					_status.kzol_kzsg_changeDiyjm1=true;
				};
			},100);
			var forceDIY=ui.create.dialog('hidden');
			forceDIY.classList.add('popped');
			forceDIY.classList.add('static');
			forceDIY.style.animation='fadelogIn .4s';
			forceDIY.style['-webkit-animation']='fadelogIn .4s';
			forceDIY.style.height='40px';
			forceDIY.style.width='110px';
			forceDIY.style.bottom='0px';
			forceDIY.style.left='5px';
			forceDIY.style.borderRadius='5px';
			forceDIY.style['text-align']='center';
			forceDIY.style['font-size']='25px';
			forceDIY.style['line-height']='40px';
			forceDIY.style['font-family']="'STXinwei','xinwei'";
			forceDIY.style['background-image']='linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))';
			forceDIY.style['cursor']='pointer';
			forceDIY.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">锁定界面</span>';
			forceDIY.onclick=function(){
				if(_status.kzol_kzsg_forceDIY==true){
					delete _status.kzol_kzsg_forceDIY;
					this.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">锁定界面</span>';
				}else{
					_status.kzol_kzsg_forceDIY=true;
					this.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">解除锁定</span>';
				};
			};
			ui.window.appendChild(forceDIY);
			_status.kzol_kzsg_dialogs24.forceDIY=forceDIY;
			game.kzol_dialogs_open(_status.kzol_kzsg_dialogs24);
			game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs24);
			
			
			var changeCardDisplay=ui.create.dialog('hidden');
			changeCardDisplay.classList.add('popped');
			changeCardDisplay.classList.add('static');
			changeCardDisplay.style.animation='fadelogIn .4s';
			changeCardDisplay.style['-webkit-animation']='fadelogIn .4s';
			changeCardDisplay.style.display='none';
			changeCardDisplay.style.height='40px';
			changeCardDisplay.style.width='120px';
			changeCardDisplay.style.bottom='0px';
			changeCardDisplay.style.left='45px';
			changeCardDisplay.style.borderRadius='5px';
			changeCardDisplay.style['text-align']='center';
			changeCardDisplay.style['font-size']='25px';
			changeCardDisplay.style['line-height']='40px';
			changeCardDisplay.style['font-family']="'STXinwei','xinwei'";
			changeCardDisplay.style['background-image']='linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))';
			changeCardDisplay.style['cursor']='pointer';
			if(lib.config.kzol_kzsg.displayType=='random'){
				changeCardDisplay.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">牌序:混乱</span>';
			}else{
				changeCardDisplay.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">牌序:正常</span>';
			};
			changeCardDisplay.onclick=function(){
				if(lib.config.kzol_kzsg.displayType=='random'){
					lib.config.kzol_kzsg.displayType='normal';
					this.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">牌序:正常</span>';
				}else{
					lib.config.kzol_kzsg.displayType='random';
					this.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">牌序:混乱</span>';
				};
				game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
			};
			ui.window.appendChild(changeCardDisplay);
			_status.kzol_kzsg_dialogs9.changeCardDisplay=changeCardDisplay;
			_status.kzol_kzsg_dialogs16.changeCardDisplay=changeCardDisplay;
			_status.kzol_kzsg_dialogs21.changeCardDisplay=changeCardDisplay;
			_status.kzol_kzsg_dialogs22.changeCardDisplay=changeCardDisplay;
			
			
			_status.kzol_kzsg_help=ui.create.dialog('hidden');
			var help=_status.kzol_kzsg_help;
			help.classList.add('popped');
			help.classList.add('static');
			help.style.animation='fadelogIn .4s';
			help.style['-webkit-animation']='fadelogIn .4s';
			help.style.height='40px';
			help.style.width='40px';
			help.style.bottom='0px';
			help.style.left='0px';
			help.style['font-family']="'STXinwei','xinwei'";
			help.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			help.style.borderRadius='5px';
			var help_div=ui.create.div('.menu','<span style="cursor:pointer;color:white;text-shadow:black 0 0 2px;">?</span>');
			help_div.style.height='calc(100%)';
			help_div.style.width='calc(100%)';
			help_div.style.top='0px';
			help_div.style.left='0px';
			help_div.style['text-align']='center';
			help_div.style['font-size']='30px';
			help_div.style['line-height']='40px';
			help_div.style['font-family']="'STXinwei','xinwei'";
			help_div.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			help_div.onclick=function(){
				var help_info=_status.kzol_kzsg_help_info
				if(help_info.style.display=='none'){
					this.innerHTML='<span style="cursor:pointer;color:white;text-shadow:black 0 0 2px;">X</span>';
					help_info.style.display='';
				}else{
					this.innerHTML='<span style="cursor:pointer;color:white;text-shadow:black 0 0 2px;">?</span>';
					help_info.style.display='none';
				};
			};
			help.link_div=help_div;
			help.appendChild(help_div);
			ui.window.appendChild(help);
			_status.kzol_kzsg_help_info=ui.create.dialog('hidden');
			var help_info=_status.kzol_kzsg_help_info;
			help_info.classList.add('popped');
			help_info.classList.add('static');
			help_info.style.animation='fadelogIn1 .4s';
			help_info.style['-webkit-animation']='fadelogIn1 .4s';
			help_info.style.height='200px';
			help_info.style.width='300px';
			help_info.style.bottom='42.5px';
			help_info.style.left='0px';
			help_info.style['text-align']='left';
			help_info.style['font-size']='18px';
			help_info.style['overflow-x']='hidden';
			help_info.style['overflow-y']='scroll';
			if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(help_info);
			help_info.style['zIndex']=996;
			//help_info.style['font-family']="'STXinwei','xinwei'";
			help_info.style.borderRadius='5px';
			help_info.style.display='none';
			help_info.innerHTML='<ul><li>头像：<br>双击进入头像选择界面<li>名字：<br>点击进入改名界面<li>战役等按钮：<br>进入对应界面<li>军队展示框:<br>鼠标移动至（电脑）/长按（手机）展示框内军队时在军队展示栏内显示军队成员<li>军队展示栏-卡牌：<br>右键（电脑）/长按（手机）可以查看卡牌技能</ul>';
			ui.window.appendChild(help_info);
			
			
			var mrjl_str=ui.create.dialog('hidden');
			mrjl_str.style.height='15px';
			mrjl_str.style.width='60px';
			mrjl_str.style.bottom='1px';
			mrjl_str.style.left='calc(100% - 60px)';
			mrjl_str.style['text-align']='center';
			mrjl_str.style['font-size']='15px';
			//mrjl_str.style['line-height']='15px';
			mrjl_str.style['font-family']="'STXinwei','xinwei'";
			mrjl_str.style['zIndex']=991;
			if(lib.kzol_daily_zxjl[lib.config.kzol_kzsg_daily_zxjl.num]==undefined){
				mrjl_str.innerHTML='已领完';
			}else{
				mrjl_str.innerHTML=game.kzol_changeTomin(lib.config.kzol_kzsg_daily_zxjl.time);
				if(lib.config.kzol_kzsg_daily_zxjl.time<=0) mrjl_str.innerHTML='可领取';
			};
			ui.window.appendChild(mrjl_str);
			setInterval(function(){
				if(lib.kzol_daily_zxjl[lib.config.kzol_kzsg_daily_zxjl.num]==undefined){
					mrjl_str.innerHTML='已领完';
				}else{
					mrjl_str.innerHTML=game.kzol_changeTomin(lib.config.kzol_kzsg_daily_zxjl.time);
					if(lib.config.kzol_kzsg_daily_zxjl.time<=0) mrjl_str.innerHTML='可领取';
				};
			},1000);
			var mrjl=ui.create.dialog('hidden');
			mrjl.style.height='45px';
			mrjl.style.width='60px';
			mrjl.style.bottom='15px';
			mrjl.style.left='calc(100% - 59px)';
			mrjl.style['cursor']='pointer';
			mrjl.style['zIndex']=991;
			mrjl.style.backgroundSize='100% 100%';
			mrjl.setBackgroundImage('extension/扩展ol/银宝箱.png');
			mrjl.onclick=function(){
				if(lib.kzol_daily_zxjl[lib.config.kzol_kzsg_daily_zxjl.num]!=undefined){
					var reward=lib.kzol_daily_zxjl[lib.config.kzol_kzsg_daily_zxjl.num].reward;
					if(lib.config.kzol_kzsg_daily_zxjl.time==0){
						for(var i in reward){
							var num=reward[i];
							var bool_a=false;
							for(var b in lib.kzol_kzsg_ck){
								if(b==i) bool_a=true;
							};
							if(i=='kzsg_coin'){
								game.kzol_changeCoin(num);
							}else if(i=='kzsg_coin1'){
								game.kzol_changeCoin(num,'coin1');
							}else if(i=='随机卡牌'){
								var list=[];
								for(var a in lib.kzol_kzsg_card){
									if(lib.kzol_kzsg_card[a].inKb==false) continue;
									list.push(a);
								};
								for(var j=0;j<reward[i];j++){
									var card=list.randomGet();
									game.kzol_kzsg_gainCard(card.slice(0,card.length-1),card.slice(card.length-1,card.length));
								};
							}else if(bool_a==true){
								lib.config.kzol_kzsg.ck[i]+=num;
								game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
								game.say1('获得'+i+'抽卡'+num+'次');
							}else{
								for(var j=0;j<reward[i];j++){
									game.kzol_kzsg_gainCard(i.slice(0,i.length-1),i.slice(i.length-1,i.length));
								};
							};
						};
						lib.config.kzol_kzsg_daily_zxjl.num+=1;
						if(lib.kzol_daily_zxjl[lib.config.kzol_kzsg_daily_zxjl.num]!=undefined){
							lib.config.kzol_kzsg_daily_zxjl.time=lib.kzol_daily_zxjl[lib.config.kzol_kzsg_daily_zxjl.num].time;
						};
						game.saveConfig('kzol_kzsg_daily_zxjl',lib.config.kzol_kzsg_daily_zxjl);
					}else{
						var str='';
						for(var j in reward){
							var str1='';
							var bool_a=false;
							for(var b in lib.kzol_kzsg_ck){
								if(b==j) bool_a=true;
							};
							if(j=='kzsg_coin'){
								str1+=reward[j]+'五铢钱';
							}else if(j=='kzsg_coin1'){
								str1+=reward[j]+'古币';
							}else if(j=='随机卡牌'){
								str1+=reward[j]+'张'+j;
							}else if(bool_a==true){
								str1+=reward[j]+'次'+j+'抽卡';
							}else{
								str1+=reward[j]+'张'+game.kzol_kzsg_changeStr(get.translation(j),j.slice(j.length-1,j.length));
							};
							str+=str1+'、';
						};
						str=str.slice(0,str.length-1);
						game.say1(game.kzol_changeTomin(lib.config.kzol_kzsg_daily_zxjl.time)+'后可领取'+str);
					};
				}else{
					game.say1('今日在线奖励已领完');
				};
			};
			ui.window.appendChild(mrjl);
			
			
			ui.arenalog.style.width='calc(100% + '+(ui.arena.offsetLeft*2)+'px)';
			ui.arenalog.style.height='calc(95%)';
			ui.arenalog.style.left=(-ui.arena.offsetLeft)+'px';
			//ui.arenalog.style.left='0px';
			ui.arenalog.style.top='0px';
			ui.arenalog.style['text-align']='center';
			ui.arenalog.onclick=function(){
				if(this.style['zIndex']==undefined||this.style['zIndex']==0){
					this.style['zIndex']=990;
				}else{
					this.style['zIndex']=0;
				};
			};
			if(lib.config.mode_config.kzsg.zdgblsjll==true){
				ui.arenalog.style.display='none';
			};
			
			if(lib.config.mode_config.kzsg.ckjc==true){
				game.kzol_focus('none');
				setTimeout(function(){
					game.kzol_chat1('----','欢迎来到卡战模式。',function(){
						game.kzol_chat1('极光','我是扩展ol的作者——极光。',function(){
							game.kzol_chat1('极光','接下来将由我来为你讲解卡战模式的玩法。',function(){
								game.kzol_chat1('极光','ememem...',function(){
									game.kzol_chat1('极光','我就先从卡牌部分开始讲起吧！',function(){
										game.kzol_chat1('极光','卡战卡牌分为武将牌、士兵牌、宝物牌、术牌。',function(){
											game.kzol_chat1('极光','卡牌有血量、攻击力、等待回合数、技能、带士兵数、带宝物数和带术数等属性。',function(){
												var ys_card=ui.create.button('kzsg_关平3','character');
												ys_card.style.width='90px';
												ys_card.style.height='120px';
												ys_card.style.left='calc(50% - 45px)';
												ys_card.style.top='calc(50% - 60px)';
												ys_card.link='kzsg_关平3';
												ys_card.style['zIndex']=995;
												ui.window.appendChild(ys_card);
												game.kzol_chat1('极光','接下来我将用上面的武将牌来举例说明各种卡牌属性的作用。',function(){
													game.kzol_focus(ys_card.node.hp);
													game.kzol_chat1('极光','血量——即三国杀中的体力。对战中卡牌血量降为零时，该卡牌从战斗区域移动至墓地。',function(){
														game.kzol_focus(ys_card.node.attack);
														game.kzol_chat1('极光','攻击力——对战中以普通方式造成的伤害基础数，同时也影响着【威慑】的效果。对战中，卡牌攻击力最低为0。',function(){
															game.kzol_focus(ys_card.node.prepareRound);
															game.kzol_chat1('极光','等待回合数——对战中从准备区域到对战区域的等待时间。',function(){
																game.kzol_focus(ys_card.node.bing);
																game.kzol_chat1('极光','带士兵数——由该武将牌为领将的军队可以携带多少士兵牌。',function(){
																	game.kzol_focus(ys_card.node.bao);
																	game.kzol_chat1('极光','带宝物数——由该武将牌为领将的军队可以携带多少宝物牌。',function(){
																		game.kzol_focus(ys_card.node.shu);
																		game.kzol_chat1('极光','带术数——由该武将牌为领将的军队可以携带多少术牌。',function(){
																			ui.window.removeChild(ys_card);
																			game.kzol_focus('none');
																			game.kzol_chat1('极光','呼~卡牌部分介绍完毕。接着请随我移步至军队界面。',function(){
																				_status.kzol_kzsg_divs1.jd.onclick();
																				setTimeout(function(){
																					game.kzol_chat1('极光','这里是军队界面。',function(){
																						game.kzol_chat1('极光','我们现在尝试着创建一支军队。',function(){
																							game.kzol_chat1('极光','首先点击“新建”。',function(){},false);
																							setTimeout(function(){
																								game.kzol_focus(_status.kzol_kzsg_divs6.army_divs.link_ys_div);
																								_status.kzol_kzsg_onYS=true;
																							},500);
																						});
																					});
																				},500);
																			});
																		});
																	});
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				},3000);
			};
			
			
			
			setInterval(function(){
				for(var i=0;i<ui.discardPile.childNodes.length;i++){
					if(ui.discardPile.childNodes[i].kzol_needToRemove==true) ui.discardPile.removeChild(ui.discardPile.childNodes[i]);
				};
			},1000);
		},
		game:{
			kzol_kzsg_getCard:function(size){
				var list=[];
				var target;
				if(size=='p'){
					for(var i=0;i<game.kzol_p_card.length;i++){
						var pl=game.kzol_p_card[i];
						if(pl.classList.contains('out')) continue;
						list.push(pl);
					};
				};
				if(size=='e'){
					for(var i=0;i<game.kzol_e_card.length;i++){
						var pl=game.kzol_e_card[i];
						if(pl.classList.contains('out')) continue;
						list.push(pl);
					};
				};
				return list;
			},
			kzol_kzsg_clickFk:function(div){
				div.style.transition='opacity 0.5s';
				div.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
					this.style.transform='scale(0.95)';
				});
				div.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
					this.style.transform='';
				});
				div.onmouseout=function(){
					this.style.transform='';
				};
			},
			kzol_kzsg_hyDiy:function(){
				var bool=false;
				for(var i in lib.config.kzol_kzsg.card){
					var card=lib.config.kzol_kzsg.card[i];
					if(card.yuanKp!=undefined){
						if(lib.kzol_kzsg_card[card.yuanKp.name+card.yuanKp.quailty]!=undefined){
							bool=true;
							for(var j in card.yuanKp){
								card[j]=card.yuanKp[j];
							};
							delete card.yuanKp;
						};
					};
				};
				if(bool==true) game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
			},
			kzol_kzsg_deleteDiy:function(name){
				var card=lib.config.kzol_kzsg.diy[name];
				if(confirm('是否删除DIY卡牌【'+card.translate+'】（'+name+'）？')){
					if(card.boss==true&&lib.kzol_kzsg_boss[name]!=undefined){
						delete lib.kzol_kzsg_boss[name];
						delete _status.kzol_kzsg_changeBoss;
					};
					delete lib.config.kzol_kzsg.diy[name];
					delete lib.kzol_kzsg_card[name];
					delete lib.characterPack['mode_extension_卡战图鉴'][name];
					delete lib.character[name];
					delete lib.translate[name];
					lib.characterSort['mode_extension_卡战图鉴']['kzsg_list'+card.quailty].remove(name);
					delete lib.characterTitle[name];
					game.kzol_kzsg_changeToMB(name);
					game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
					delete _status.kzol_kzsg_changeDiyjm;
					game.say1('删除成功');
					game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs24);
					game.kzol_dialogs_show(_status.kzol_kzsg_dialogs23);
				};
			},
			kzol_kzsg_changeToMB:function(name){
				var bool=false;
				for(var i in lib.config.kzol_kzsg.card){
					var card1=lib.config.kzol_kzsg.card[i];
					if(card1.name+card1.quailty==name){
						bool=true;
						var sx={};
						for(var j in card1){
							sx[j]=card1[j];
						};
						card1.yuanKp=sx;
						for(var j in lib.kzol_kzsg_card['kzsg_民卫1']){
							card1[j]=lib.kzol_kzsg_card['kzsg_民卫1'][j];
						};
					};
				};
				for(var i in lib.config.kzol_kzsg.ck2){
					if(lib.config.kzol_kzsg.ck2[i]==name){
						bool=true;
						lib.config.kzol_kzsg.ck2[i]='kzsg_民卫1';
					};
				};
				if(lib.config.kzol_kzsg.army_wj_e!=undefined){
					for(var i in lib.config.kzol_kzsg.army_wj_e){
						var army=lib.config.kzol_kzsg.army_wj_e[i];
						for(var j in army.leader){
							if(army.leader[j]==name){
								bool=true;
								army.leader[j]='kzsg_民卫1';
							};
						};
						for(var j in army.number){
							if(army.number[j]==name){
								bool=true;
								army.number[j]='kzsg_民卫1';
							};
						};
					};
				};
				for(var i in lib.config.kzol_kzsg.sd.item){
					var card1=lib.config.kzol_kzsg.sd.item[i];
					if(card1.name+card1.quailty==name){
						bool=true;
						for(var j in lib.kzol_kzsg_card['kzsg_民卫1']){
							card1[j]=lib.kzol_kzsg_card['kzsg_民卫1'][j];
						};
						console.log(card1)
					};
				};
				if(bool==true){
					delete _status.kzol_kzsg_changeCK;
					delete _status.kzol_kzsg_changeCK1;
					delete _status.kzol_kzsg_changeCK2;
					delete _status.kzol_kzsg_changeCardCK;
					delete _status.kzol_kzsg_changeWJArmy_e;
					game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
				};
			},
			kzol_clearMode:function(){
				var challenge_buttons=_status.kzol_kzsg_divs20.challenge_buttons;
				for(var i=0;i<challenge_buttons.childNodes.length;i++){
					challenge_buttons.removeChild(challenge_buttons.childNodes[i]);
					i--;
				};
			},
			kzol_openMode:function(str){
				game.kzol_clearMode();
				game.kzol_dialogs_show(_status.kzol_kzsg_dialogs20);
				var challenge_buttons=_status.kzol_kzsg_divs20.challenge_buttons;
				var func_createChallenge_num=0;
				var func_createChallenge=function(name,func){
					var div=ui.create.div();
					div.style.height='280px';
					div.style.width='200px';
					div.style.top='calc(50% - 150px)';
					if(func_createChallenge_num%2==1){
						div.style.left='calc(50% + '+(110+(Math.ceil(func_createChallenge_num/2)-1)*210)+'px';
					}else{
						div.style.left='calc(50% - '+(100+(func_createChallenge_num/2)*210)+'px';
					};
					if(func_createChallenge_num==0) div.style.left='calc(50% -100px)';
					div.style['cursor']='pointer';
					div.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
					div.style.borderRadius='5px';
					div.style.backgroundSize='100% 100%';
					div.setBackgroundImage('extension/扩展ol/kzsg_challenge_'+name+'.jpg');
					_status.kzol_kzsg_div_clicked=false;
					div.onclick=function(){
						if(_status.kzol_kzsg_div_clicked==true) return ;
						_status.kzol_kzsg_div_clicked=true;
						var div=this;
						div.classList.add('zoomin3');
						div.hide();
						div.style.transitionDuration='0.7s';
						div.style.zIndex=5;
						setTimeout(function(){
							div.style.transitionProperty='none';
							div.classList.remove('zoomin3');
							div.classList.add('zoomout2');
							func();
							setTimeout(function(){
								div.style.transitionProperty='';
								div.style.zIndex=0;
								div.classList.remove('zoomout2');
								div.show();
								setTimeout(function(){
									_status.kzol_kzsg_div_clicked=false;
								},250);
							},500);
						},700);
					};
					challenge_buttons.appendChild(div);
					var div_name=ui.create.div('');
					div_name.style.width='50px';
					div_name.style.height=(div.offsetHeight-20)+'px';
					div_name.style.left='10px';
					div_name.style.top='10px';
					div_name.style['font-size']='50px';
					div_name.style['font-family']="'STXinwei','xinwei'";
					div_name.innerHTML=name;
					div.appendChild(div_name);
					func_createChallenge_num++;
				};
				if(str=='tz'){
					func_createChallenge('无尽',function(){
						game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs20);
						ui.background.setBackgroundImage('extension/扩展ol/kzsg_mode_无尽.jpg');
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs21);
					});
					func_createChallenge('BOSS',function(){
						game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs20);
						ui.background.setBackgroundImage('extension/扩展ol/kzsg_mode_BOSS.jpg');
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs22);
					});
				};
			},
			kzol_wjInfo:function(){
				var str='';
				var num=lib.config.kzol_kzsg.dxl*lib.config.kzol_kzsg.army_wj_num*5;
				if(num>1000) num=1000;
				if(lib.config.kzol_kzsg.dxl!=undefined){
					str='<span style="font-size:20px">第'+lib.config.kzol_kzsg.dxl+'波</span>'+
					'<br><br><span style="font-size:20px">奖励：</span>'+
					'<br>&nbsp&nbsp五铢钱X'+num;
					if(lib.config.kzol_kzsg.dxl%5==0) str+='<br>&nbsp&nbsp进阶池抽卡X1';
					if(lib.config.kzol_kzsg.dxl==100) str+='<br>&nbsp&nbsp'+game.kzol_kzsg_changeStr('团结',7)+'X1';
					str+='<br>&nbsp&nbsp'+game.kzol_kzsg_changeStr('灰卡',1)+'X1('+(Math.ceil(game.kzol_getGL_card_wj(1)*100))+'%)'+
					'<br>&nbsp&nbsp'+game.kzol_kzsg_changeStr('白卡',2)+'X1('+(Math.ceil(game.kzol_getGL_card_wj(2)*100))+'%)'+
					'<br>&nbsp&nbsp'+game.kzol_kzsg_changeStr('绿卡',3)+'X1('+(Math.ceil(game.kzol_getGL_card_wj(3)*100))+'%)'+
					'<br>&nbsp&nbsp'+game.kzol_kzsg_changeStr('蓝卡',4)+'X1('+(Math.ceil(game.kzol_getGL_card_wj(4)*100))+'%)'+
					'<br>&nbsp&nbsp'+game.kzol_kzsg_changeStr('紫卡',5)+'X1('+(Math.ceil(game.kzol_getGL_card_wj(5)*100))+'%)'+
					'<br>&nbsp&nbsp'+game.kzol_kzsg_changeStr('橙卡',6)+'X1('+(Math.ceil(game.kzol_getGL_card_wj(6)*100))+'%)'+
					'<br>&nbsp&nbsp'+game.kzol_kzsg_changeStr('红卡',7)+'X1('+(Math.ceil(game.kzol_getGL_card_wj(7)*100))+'%)';
				};
				return '<span style="color:white;text-shadow:black 0 0 2px;">'+str+'</span>';
			},
			kzol_getGL_card_wj:function(quailty){
				var num=0.01;
				if(lib.config.kzol_kzsg.dxl!=undefined){
					if(quailty==1){
						num+=lib.config.kzol_kzsg.dxl*0.02;
					}else if(quailty==2){
						if(lib.config.kzol_kzsg.dxl>20) num+=(lib.config.kzol_kzsg.dxl-20)*0.02;
					}else if(quailty==3){
						if(lib.config.kzol_kzsg.dxl>40) num+=(lib.config.kzol_kzsg.dxl-40)*0.02;
					}else if(quailty==4){
						if(lib.config.kzol_kzsg.dxl>60) num+=(lib.config.kzol_kzsg.dxl-60)*0.02;
					}else if(quailty==5){
						if(lib.config.kzol_kzsg.dxl>80) num+=(lib.config.kzol_kzsg.dxl-80)*0.02;
					}else if(quailty==6){
						if(lib.config.kzol_kzsg.dxl>100) num+=(lib.config.kzol_kzsg.dxl-100)*0.02;
					}else{
						if(lib.config.kzol_kzsg.dxl>120) num+=(lib.config.kzol_kzsg.dxl-120)*0.02;
					};
				};
				if(num>0.4) num=0.4;
				return num;
			},
			kzol_changeDXL:function(num){
				if(lib.config.kzol_kzsg.dxl==undefined) lib.config.kzol_kzsg.dxl=0;
				if(lib.config.kzol_kzsg.maxDxl==undefined) lib.config.kzol_kzsg.maxDxl=0;
				lib.config.kzol_kzsg.dxl+=num;
				if(lib.config.kzol_kzsg.dxl>lib.config.kzol_kzsg.maxDxl) lib.config.kzol_kzsg.maxDxl=lib.config.kzol_kzsg.dxl;
				game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
			},
			kzol_changeEnemy_wj:function(num){
				var leaders=[];
				var numbers=[];
				for(var i in lib.kzol_kzsg_card){
					var card=lib.kzol_kzsg_card[i];
					if(lib.kzol_kzsg_boss[i]!=undefined) continue;
					if(card.type=='武将'){
						leaders.push(i);
					}else{
						numbers.push(i);
					};
				};
				var armys={};
				for(var i=0;i<num;i++){
					armys[i]={
						leader:{
							'0':leaders.randomGet(),
						},
						number:{
							'0':numbers.randomGet(),
							'1':numbers.randomGet(),
							'2':numbers.randomGet(),
							'3':numbers.randomGet(),
							'4':numbers.randomGet(),
							'5':numbers.randomGet(),
						},
					};
				};
				lib.config.kzol_kzsg.army_wj_e=armys;
				game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
				delete _status.kzol_kzsg_changeWJArmy_e;
			},
			kzol_update_armyWj:function(){
				lib.config.kzol_kzsg.army_wj={};
				var list={};
				var list1={};
				var num1=0;
				for(var i in lib.config.kzol_kzsg.army){
					if(lib.config.kzol_kzsg.army[i].onWJ==true){
						if(lib.config.kzol_kzsg.army[i].id_wj==undefined){
							list[num1]=lib.config.kzol_kzsg.army[i];
							num1++;
						}else{
							list1[lib.config.kzol_kzsg.army[i].id_wj]=lib.config.kzol_kzsg.army[i];
						};
					};
				};
				var num=0;
				for(var i in list1){
					lib.config.kzol_kzsg.army_wj[num]=list1[i];
					num++;
				};
				for(var i in list){
					lib.config.kzol_kzsg.army_wj[num]=list[i];
					num++;
				};
				if(num>0) game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
				delete _status.kzol_kzsg_changeWJArmy;
			},
			kzol_clearWj:function(){
				_status.kzol_kzsg_divs21.info_wj_info.style.display='none';
				_status.kzol_kzsg_divs21.info_wj_start.style.display='none';
				delete lib.config.kzol_kzsg.dxl;
				delete lib.config.kzol_kzsg.army_wj;
				delete lib.config.kzol_kzsg.army_wj_e;
				delete lib.config.kzol_kzsg.army_wj_num;
				delete lib.config.kzol_kzsg.wuZL;
				for(var i in lib.config.kzol_kzsg.army){
					if(lib.config.kzol_kzsg.army[i].onWJ!=undefined){
						delete lib.config.kzol_kzsg.army[i].onWJ;
						delete lib.config.kzol_kzsg.army[i].id_wj;
					};
				};
				for(var i in lib.config.kzol_kzsg.card){
					if(lib.config.kzol_kzsg.card[i].onWJ!=undefined){
						delete lib.config.kzol_kzsg.card[i].onWJ;
						delete lib.config.kzol_kzsg.card[i].hp_wj;
						delete lib.config.kzol_kzsg.card[i].attack_wj;
						delete lib.config.kzol_kzsg.card[i].prepareRound_wj;
					};
				};
				game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
				delete _status.kzol_kzsg_changeWJArmy;
				delete _status.kzol_kzsg_changeWJArmy_e;
				delete _status.kzol_kzsg_changeCK;
				delete _status.kzol_kzsg_changeCK1;
			},
			kzol_cheekArmy:function(army_num){
				var bool=false;
				var army=lib.config.kzol_kzsg.army[army_num];
				for(var i in army.leader){
					var card=lib.config.kzol_kzsg.card[army.leader[i]];
					var card_tj=lib.kzol_kzsg_card[card.name+card.quailty];
					if(card_tj.forbidai!=undefined) bool=true;
				};
				for(var i in army.number){
					var card=lib.config.kzol_kzsg.card[army.number[i]];
					var card_tj=lib.kzol_kzsg_card[card.name+card.quailty];
					if(card_tj.forbidai!=undefined) bool=true;
				};
				return bool;
			},
			kzsg_changePm:function(target_name){
				var yh_num;
				var me;
				for(var i=0;i<_status.kzsg_mysql_users.length;i++){
					if(_status.kzsg_mysql_users[i].用户==lib.config.kzol_kzsg.user) yh_num=i;
				};
				if(yh_num!=undefined){
					me=_status.kzsg_mysql_users[yh_num];
				};
				var target_num;
				var target;
				for(var i=0;i<_status.kzsg_mysql_users.length;i++){
					if(_status.kzsg_mysql_users[i].用户==target_name) target_num=i;
				};
				if(target_num!=undefined){
					target=_status.kzsg_mysql_users[target_num];
				};
				if(target!=undefined&&me!=undefined&&me.排名>=target.排名){
					_status.kzol_kzsg_onSC2=true;
					_status.kzsg_mysql_onLoad=true;
					if(me.排名==target.排名){
						var num_pm1=me.排名+1;
						var interval_func;
						var interval=setInterval(interval_func,1000);
						interval_func=function(){
							if(_status.kzsg_mysql!=undefined){
								clearInterval(interval);
								_status.kzsg_mysql.query('UPDATE 数据 SET 排名='+num_pm1+
								' WHERE 用户="'+target.用户+'"',function(err,result){
									if(err){
										alert('更新排名失败（'+err+'）');
									}else{
										game.say1(target.用户+'排名降至第'+num_pm1+'名');
										game.re_connectMysql();
									};
									delete _status.kzol_kzsg_onSC2;
									delete _status.kzsg_mysql_onLoad;
								});
							};
						};
						interval_func();
					}else{
						var interval_func;
						var interval=setInterval(interval_func,1000);
						interval_func=function(){
							if(_status.kzsg_mysql!=undefined){
								clearInterval(interval);
								_status.kzsg_mysql.query('UPDATE 数据 SET 排名='+me.排名+
								' WHERE 用户="'+target.用户+'"',function(err,result){
									if(err){
										alert('更新排名失败（'+err+'）');
										delete _status.kzol_kzsg_onSC2;
										delete _status.kzsg_mysql_onLoad;
									}else{
										game.say1(target.用户+'排名降至第'+me.排名+'名');
										_status.kzsg_mysql.query('UPDATE 数据 SET 排名='+target.排名+
										' WHERE 用户="'+me.用户+'"',function(err,result){
											if(err){
												alert('更新排名失败（'+err+'）');
											}else{
												game.say1(me.用户+'排名升至第'+target.排名+'名');
												game.re_connectMysql();
											};
											delete _status.kzol_kzsg_onSC2;
											delete _status.kzsg_mysql_onLoad;
										});
									};
								});
							};
						};
						interval_func();
					};
				};
			},
			kzol_changeTobattle1:function(army_num){
				var army=lib.config.kzol_kzsg.army[army_num];
				var result={
					'name':army.name,
					'leader':{},
					'number':{}
				};
				for(var i in army.leader){
					var card=lib.config.kzol_kzsg.card[army.leader[i]];
					result['leader'][i]=card.name+card.quailty;
				};
				for(var i in army.number){
					var card=lib.config.kzol_kzsg.card[army.number[i]];
					result['number'][i]=card.name+card.quailty;
				};
				return result;
			},
			kzsg_changeArmy_pk:function(){
				var div_sj=_status.kzol_kzsg_divs19.div_chooseArmy_sj;
				var num=0;
				for(var i=0;i<div_sj.childNodes.length;i++){
					num++
				};
				for(var i=0;i<num;i++){
					div_sj.removeChild(div_sj.childNodes[0]);
				};
				//div_sj.style['font-size']='30px';
				//div_sj.style['line-height']='125px';
				//div_sj.style['font-family']="'STXinwei','xinwei'";
				//div_sj.innerHTML='<span style="color:white;text-shadow:black 0 0 2px">加载中</span>';
				var users=_status.kzsg_mysql_users;
				var me;
				for(var i=0;i<users.length;i++){
					var user=users[i];
					if(user.用户==lib.config.kzol_kzsg.user) me=user;
				};
				if(me){
					var name=me.用户;
					var jd1=me.军队1;
					var jd2=me.军队2;
					var jd3=me.军队3;
					var jd4=me.军队4;
					var pm=me.排名;
					jd1=JSON.parse(jd1);
					jd2=JSON.parse(jd2);
					jd3=JSON.parse(jd3);
					jd4=JSON.parse(jd4);
					var armys={
						'1':jd1,
						'2':jd2,
						'3':jd3,
						'4':jd4,
					};
					for(var i=1;i<=4;i++){
						var army=armys[i];
						if(typeof army=='object'){
							var div=ui.create.div('.player');
							div.style.width='90px';
							div.style.height='105px';
							div.style.left=(7.5+95*(i-1))+'px';
							div.style.top='10px';
							div.style['cursor']='pointer';
							div.link=i;
							_status.kzol_kzsg_divs19['jd'+i]=div;
							if(army.leader==undefined){
								div.style['font-size']='30px';
								div.style['text-align']='center';
								div.style['font-family']="'STXinwei','xinwei'";
								div.style['line-height']='100px';
								div.innerHTML='<span style="cursor:pointer;">设置</span>';
							}else{
								var leaders=[];
								for(var j in army.leader){
									leaders.push(army.leader[j]);
								};
								var leader=lib.kzol_kzsg_card[leaders[0]];
								div.setBackground(leader.name+leader.quailty,'character');
								var div_name=ui.create.div('');
								div_name.style.width='15px';
								div_name.style.height=(div.offsetHeight-10)+'px';
								div_name.style.left='5px';
								div_name.style.top='5px';
								div_name.style['font-size']='15px';
								div_name.style['font-family']="'STXinwei','xinwei'";
								div_name.innerHTML=army.name;
								div.appendChild(div_name);
							};
							div.onclick=function(){
								if(_status.kzol_kzsg_onSC1==true){
									game.say1('请等待数据上传完成');
									return ;
								};
								if(_status.kzsg_timeout!=undefined){
									clearTimeout(_status.kzsg_timeout);
									delete _status.kzsg_timeout;
								};
								var num=this.link;
								if(_status.kzol_kzsg_clickNum1==undefined) _status.kzol_kzsg_clickNum1=0;
								_status.kzol_kzsg_clickNum1++;
								_status.kzsg_timeout=setTimeout(function(){
									if(_status.kzol_kzsg_clickNum1==1){
										_status.kzol_kzsg_onChoosePKArmy=num;
										game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs19);
										game.kzol_dialogs_show(_status.kzol_kzsg_dialogs6);
									}else{
										_status.kzol_kzsg_onSC1=true;
										_status.kzsg_mysql_onLoad=true;
										var interval_func;
										var interval=setInterval(interval_func,1000);
										interval_func=function(){
											if(_status.kzsg_mysql!=undefined){
												clearInterval(interval);
												_status.kzsg_mysql.query('UPDATE 数据 SET 军队'+num+'='+"'{}'"+
												' WHERE 用户="'+lib.config.kzol_kzsg.user+'"',function(err,result){
													if(err){
														alert('上传失败（'+err+'）');
													}else{
														game.say1('上传成功');
														game.re_connectMysql();
													};
													delete _status.kzol_kzsg_onSC1;
													delete _status.kzsg_mysql_onLoad;
												});
											};
										};
										interval_func();
									};
									clearTimeout(_status.kzsg_timeout);
									delete _status.kzsg_timeout;
									delete _status.kzol_kzsg_clickNum1;
								},250);
							};
							div_sj.appendChild(div);
						};
					};
				}else{
					//game.say1('数据库中暂无已登陆角色');
				};
			},
			connectMysql:function(){
				delete _status.kzsg_mysql_connection;
				lib.init.js(lib.assetURL+'node_modules/mysql','confirm',function(){
					var mysql=require('mysql');
					_status.kzsg_mysql=mysql.createConnection({
						host:'23.224.53.118',
						user:'s2624973',		
						password:'13536201722',
						port:'3306',
						database:'s2624973'
					});
					var kzsg_mysql=_status.kzsg_mysql;
					kzsg_mysql.connect();
					_status.kzsg_mysql_interval=setInterval(function(){
						if(_status.kzsg_mysql_onLoad==undefined){
							clearInterval(_status.kzsg_mysql_interval);
							delete _status.kzsg_mysql_interval;
							_status.kzsg_mysql.end();
							delete _status.kzsg_mysql;
							game.kzsg_clearConnectDiv();
							_status.kzol_kzsg_dialogs18.dialog.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">刷新中</span>';
						};
						game.connectMysql();
					},60000);
					kzsg_mysql.query('SELECT 1 + 1 AS solution',function(error,results,fields){
						if(error){
							alert('连接失败（'+error+'）');
							_status.kzol_kzsg_dialogs18.dialog.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">连接失败</span>';
							delete lib.config.kzol_kzsg.user;
						}else{
							_status.kzsg_mysql_connection=true;
							_status.kzsg_mysql_users=[];
							_status.kzsg_mysql.query('SELECT 用户,密码,军队1,军队2,军队3,军队4,排名 FROM 数据',function(err,result){
								if(err){
									alert('连接失败（'+err+'）');
									_status.kzol_kzsg_dialogs18.dialog.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">连接失败</span>';
								}else{
									_status.kzsg_mysql_users=result;
									var bool=false;
									for(var i=0;i<result.length;i++){
										if(result[i].用户==lib.config.kzol_kzsg.user) bool=true;
									};
									if(bool==false) delete lib.config.kzol_kzsg.user;
									game.kzsg_clearConnectDiv();
									game.kzsg_connectFinish();
									game.kzsg_changeArmy_pk();
								};
							});
						};
						if(results) console.log('连接完成');
					});
				},function(){
					if(confirm('检测到未安装mySQL模块，是否前往下载？（下载后须手动解压至游戏根目录/node_modules下）（提取码：5rby）')){
						window.open('https://pan.baidu.com/s/1-jo3dzzZ1iVMAN3vY4F_WQ');
					};
				});
			},
			re_connectMysql:function(){
				//_status.kzsg_mysql_users=[];
				game.kzsg_clearConnectDiv();
				_status.kzsg_mysql_onLoad=true;
				var interval_func;
				var interval=setInterval(interval_func,1000);
				interval_func=function(){
					if(_status.kzsg_mysql!=undefined){
						clearInterval(interval);
						_status.kzsg_mysql.query('SELECT 用户,密码,军队1,军队2,军队3,军队4,排名 FROM 数据',function(err,result){
							if(err){
								alert('连接失败（'+err+'）');
								_status.kzol_kzsg_dialogs18.dialog.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">连接失败</span>';
							}else{
								_status.kzsg_mysql_users=result;
								//game.say1('重新连接成功');
								game.kzsg_connectFinish();
								game.kzsg_changeArmy_pk();
							};
							delete _status.kzsg_mysql_onLoad;
						});
					};
				};
				interval_func();
			},
			makeUser:function(){
				var background=ui.create.dialog('hidden');
				background.style.height='calc(100%)';
				background.style.width='calc(100%)';
				background.style.left='0px';
				background.style.top='0px';
				background.style['zIndex']=0;
				ui.window.appendChild(background);
				var div=ui.create.div();
				div.style.height='2000px';
				div.style.width='2000px';
				div.style.left='-10px';
				div.style.top='-10px';
				background.add(div);
				var dialog=ui.create.dialog('hidden');
				dialog.style.height='170px';
				dialog.style.width='350px';
				dialog.style.top='calc(50% - 90px)';
				dialog.style.left='calc(50% - 175px)';
				//dialog.setBackgroundImage('extension/扩展ol/Background3.jpg');
				dialog.style.backgroundSize="cover";
				dialog.classList.add('popped');
				dialog.classList.add('static');
				dialog.style.animation='fadeInDown .3s';
				dialog.style['-webkit-animation']='fadeInDown .3s';
				var str='<span style="cursor:pointer;">登录</span>';
				if(lib.config.kzol_kzsg.user!=undefined) str=get.translation(lib.config.kzol_kzsg.user);
				var div1=ui.create.div('.menubutton.large',str,function(){
					if(lib.config.kzol_kzsg.user==undefined){
						background.delete();
						dialog.delete();
						game.kzsg_dl();
					}else{
						game.say1('欢迎你，'+get.translation(lib.config.kzol_kzsg.user));
					};
				});
				div1.style.height='30px';
				div1.style.width='300px';
				dialog.add(div1);
				game.kzol_kzsg_clickFk(div1);
				var div2=ui.create.div('.menubutton.large','<span style="cursor:pointer;">注册</span>',function(){
					background.delete();
					dialog.delete();
					game.kzsg_zc();
				});
				div2.style.height='30px';
				div2.style.width='300px';
				dialog.add(div2);
				game.kzol_kzsg_clickFk(div2);
				var div5=ui.create.div('.menubutton.large','<span style="cursor:pointer;">退出登录</span>',function(){
					if(lib.config.kzol_kzsg.user==undefined){
						game.say1('请先登录');
					}else{
						div1.innerHTML='<span style="cursor:pointer;">登录</span>'
						lib.config.kzol_kzsg.user=undefined;
						game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
						alert('退出登录成功');
						game.re_connectMysql();
					};
				});
				div5.style.height='30px';
				div5.style.width='300px';
				dialog.add(div5);
				game.kzol_kzsg_clickFk(div5);
				ui.window.appendChild(dialog);
				setTimeout(function(){
					div.onclick=function(){
						background.delete();
						dialog.delete();
						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs18);
					};
				},750);
			},
			kzsg_dl:function(){
				var dialog=ui.create.dialog('hidden');
				dialog.style.height='170px';
				dialog.style.width='350px';
				dialog.style.top='calc(50% - 85px)';
				dialog.style.left='calc(50% - 175px)';
				//dialog.setBackgroundImage('extension/扩展ol/Background3.jpg');
				dialog.style.backgroundSize="cover";
				dialog.classList.add('popped');
				dialog.classList.add('static');
				dialog.style.animation='fadeInDown .3s';
				dialog.style['-webkit-animation']='fadeInDown .3s';
				var div=ui.create.div('','<span style="font-size:30px;font-weight:600;font-family:xinwei"> 登 录 </span><br><br>用户：<input type="text" id="user"><br>密码：<input type="text" id="password">');
				div.style.width='300px';
				dialog.add(div);
				var div1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">确认</span>',function(){
					var user=document.getElementById('user').value;
					var password=document.getElementById('password').value;
					var reg=/^[a-zA-Z0-9]+$/;
					var bool=false;
					var bool1=false;
					for(var i=0;i<_status.kzsg_mysql_users.length;i++){
						if(_status.kzsg_mysql_users[i].用户==user){
							bool=true;
						};
						if(_status.kzsg_mysql_users[i].密码==password){
							bool1=true;
						};
					};
					if(user==''){
						alert('请输入用户名');
					}else if(password==''){
						alert('请输入密码');
					}else if(!reg.test(password)){
						alert('密码只能为数字或字母');
					}else if(user.length>15){
						alert('用户名只能在15个字以内');
					}else if(password.length>15){
						alert('密码只能在15个字以内');
					}else if(bool==false){
						alert('不存在该用户名');
					}else if(bool1==false){
						alert('密码错误');
					}else{
						lib.config.kzol_kzsg.user=user;
						game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
						alert('登录成功');
						dialog.delete();
						game.makeUser();
						game.re_connectMysql();
					};
				});
				div1.style.left='-35px'
				dialog.add(div1);
				game.kzol_kzsg_clickFk(div1);
				var div2=ui.create.div('.menubutton.large','<span style="cursor:pointer;">返回</span>',function(){
					dialog.delete();
					game.makeUser();
				});
				div2.style.left='35px'
				dialog.add(div2);
				game.kzol_kzsg_clickFk(div2);
				ui.window.appendChild(dialog);
			},
			kzsg_zc:function(){
				var dialog=ui.create.dialog('hidden');
				dialog.style.height='185px';
				dialog.style.width='350px';
				//dialog.style.top=event.clientY+document.body.scrollTop+'px';
				//dialog.style.left=event.clientX+document.body.scrollLeft+'px';
				dialog.style.top='calc(50% - 92.5px)';
				dialog.style.left='calc(50% - 175px)';
				//dialog.setBackgroundImage('extension/扩展ol/Background3.jpg');
				dialog.style.backgroundSize="cover";
				dialog.classList.add('popped');
				dialog.classList.add('static');
				dialog.style.animation='fadeInDown .3s';
				dialog.style['-webkit-animation']='fadeInDown .3s';
				var div=ui.create.div('','<span style="font-size:30px;font-weight:600;font-family:xinwei"> 注 册 </span><br><br>用&nbsp&nbsp&nbsp&nbsp户：<input type="text" id="user"><br>密&nbsp&nbsp&nbsp&nbsp码：<input type="text" id="password"><br>确认密码：<input type="text" id="password1">');
				div.style.width='300px';
				dialog.add(div);
				var div1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">确认</span>',function(){
					if(game.kzsg_onSignUp==true){
						game.say1('请耐心等待注册完成');
						return ;
					};
					var user=document.getElementById('user').value;
					var password=document.getElementById('password').value;
					var password1=document.getElementById('password1').value;
					var reg=/^[a-zA-Z0-9]+$/;
					var bool=true;
					for(var i=0;i<_status.kzsg_mysql_users.length;i++){
						if(_status.kzsg_mysql_users[i].用户==user) bool=false;
					};
					if(user==''){
						alert('请输入用户名');
					}else if(password==''){
						alert('请输入密码');
					}else if(password1==''){
						alert('请确认密码');
					}else if(!reg.test(password)){
						alert('密码只能为数字或字母');
					}else if(user.length>10){
						alert('用户名只能在10个字以内');
					}else if(password.length>15){
						alert('密码只能在15个字以内');
					}else if(bool==false){
						alert('用户名已存在');
					}else if(password!=password1){
						alert('重复密码不相同');
					}else{
						game.kzsg_onSignUp=true;
						_status.kzsg_mysql_onLoad=true;
						var st={用户:user,密码:password,军队1:'{}',军队2:'{}',军队3:'{}',军队4:'{}',排名:-1};
						var interval_func;
						var interval=setInterval(interval_func,1000);
						interval_func=function(){
							if(_status.kzsg_mysql!=undefined){
								clearInterval(interval);
								_status.kzsg_mysql.query('insert into 数据 set ?',st,function(err, result){
									if(err){
										alert('注册失败（'+err+'）');
									}else{
										lib.config.kzol_kzsg.user=user;
										game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
										alert('注册成功');
										dialog.delete();
										game.makeUser();
										game.re_connectMysql();
									};
									delete game.kzsg_onSignUp;
									delete _status.kzsg_mysql_onLoad;
								});
							};
						};
						interval_func();
					};
				});
				div1.style.left='-35px'
				dialog.add(div1);
				game.kzol_kzsg_clickFk(div1);
				var div2=ui.create.div('.menubutton.large','<span style="cursor:pointer;">返回</span>',function(){
					if(game.kzsg_onSignUp==true){
						game.say1('请耐心等待注册完成');
						return ;
					};
					dialog.delete();
					game.makeUser();
				});
				div2.style.left='35px'
				dialog.add(div2);
				game.kzol_kzsg_clickFk(div2);
				ui.window.appendChild(dialog);
			},
			kzsg_clearConnectDiv:function(){
				var dialogs=_status.kzol_kzsg_dialogs18;
				var dialog=dialogs.dialog;
				var info=dialogs.info;
				info.style.display='none';
				var num=0;
				for(var i=0;i<dialog.childNodes.length;i++){
					num++;
				};
				for(var i=0;i<num;i++){
					dialog.removeChild(dialog.childNodes[0]);
				};
				dialog.style['text-align']='center';
				dialog.style['font-size']='30px';
				dialog.style['line-height']='400px';
				dialog.style['font-family']="'STXinwei','xinwei'";
				dialog.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">连接中</span>';
			},
			kzsg_connectFinish:function(){
				var dialogs=_status.kzol_kzsg_dialogs18;
				var divs=_status.kzol_kzsg_divs18;
				var dialog=dialogs.dialog;
				dialog.style['text-align']='';
				dialog.style['font-size']='';
				dialog.style['line-height']='';
				dialog.style['font-family']='';
				dialog.innerHTML='';
				var switch1=ui.create.div('.menu');
				switch1.style.height='calc(100% - 20px)';
				switch1.style.top='10px';
				switch1.style.width='120px';
				switch1.style.left='10px';
				switch1.style['overflow-x']='hidden';
				switch1.style['overflow-y']='scroll';
				if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(switch1);
				switch1.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
				switch1.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
				switch1.style.borderRadius='3px';
				dialog.appendChild(switch1);
				divs.switch1=switch1;
				var switch1_div_num=0;
				var switch1_div=ui.create.div('.menu','<span style="cursor:pointer;color:white;text-shadow:black 0 0 2px;">全部</span>');
				switch1_div.style['font-size']='30px';
				switch1_div.style['line-height']='40px';
				switch1_div.style['font-family']="'STXinwei','xinwei'";
				switch1_div.style.height='40px';
				switch1_div.style.width='110px';
				switch1_div.style.left='5px';
				switch1_div.style.top=(10+50*switch1_div_num)+'px';
				switch1_div.style.borderRadius='5px';
				switch1_div.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
				switch1_div.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
				switch1_div.onclick=function(){
					var divs=_status.kzol_kzsg_divs18;
					var battle_div=divs.battle_div;
					var battle_num=0;
					for(var i=0;i<battle_div.childNodes.length;i++){
						var div=battle_div.childNodes[i];
						div.style.display='';
						div.style.top=(5+125*battle_num)+'px';
						battle_num++;
					};
				};
				switch1.appendChild(switch1_div);
				game.kzol_kzsg_clickFk(switch1_div);
				switch1_div_num++;
				for(var i=1;i<=4;i++){
					var switch1_div=ui.create.div('.menu','<span style="cursor:pointer;color:white;text-shadow:black 0 0 2px;">'+i+'V'+i+'</span>');
					switch1_div.style['font-size']='30px';
					switch1_div.style['line-height']='43px';
					switch1_div.style['font-family']="'STXinwei','xinwei'";
					switch1_div.style.height='40px';
					switch1_div.style.width='110px';
					switch1_div.style.left='5px';
					switch1_div.style.top=(10+50*switch1_div_num)+'px';
					switch1_div.style.borderRadius='5px';
					switch1_div.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
					switch1_div.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
					switch1_div.link=i;
					switch1_div.onclick=function(){
						var divs=_status.kzol_kzsg_divs18;
						var battle_div=divs.battle_div;
						var math_armyNum=function(div){
							var battle=div.link;
							var num=0;
							for(var i in battle){
								if(battle[i].leader!=undefined){
									num++;
								};
							};
							return num;
						};
						var user_divs=[];
						for(var i=0;i<battle_div.childNodes.length;i++){
							var div=battle_div.childNodes[i];
							div.style.display='none';
							if(math_armyNum(div)==this.link) user_divs.push(div);
						};
						for(var i=0;i<user_divs.length;i++){
							var div=user_divs[i];
							div.style.display='';
							div.style.top=(5+125*i)+'px';
						};
					};
					switch1.appendChild(switch1_div);
					game.kzol_kzsg_clickFk(switch1_div);
					switch1_div_num++;
				};
				var battle_div=ui.create.div('.menu');
				battle_div.style.height='260px';
				battle_div.style.top='10px';
				battle_div.style.width='650px';
				battle_div.style.left='140px';
				battle_div.style['overflow-x']='hidden';
				battle_div.style['overflow-y']='scroll';
				if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(battle_div);
				battle_div.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
				battle_div.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
				battle_div.style.borderRadius='3px';
				dialog.appendChild(battle_div);
				divs.battle_div=battle_div;
				var me=ui.create.div('.menu');
				me.style.height='130px';
				me.style.top='280px';
				me.style.width='650px';
				me.style.left='140px';
				//me.style['overflow-x']='hidden';
				//me.style['overflow-y']='scroll';
				me.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
				me.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
				me.style.borderRadius='3px';
				me.style['text-align']='center'
				me.style['font-size']='40px';
				me.style['line-height']='130px';
				me.style['font-family']="'STXinwei','xinwei'";
				me.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">未登录</span>';
				dialog.appendChild(me);
				divs.me=me;
				var func=function(user){
					var name=user.用户;
					var jd1=user.军队1;
					var jd2=user.军队2;
					var jd3=user.军队3;
					var jd4=user.军队4;
					var pm=user.排名;
					jd1=JSON.parse(jd1);
					jd2=JSON.parse(jd2);
					jd3=JSON.parse(jd3);
					jd4=JSON.parse(jd4);
					var battle={
						'1':jd1,
						'2':jd2,
						'3':jd3,
						'4':jd4,
					};
					var div=ui.create.div('.menu');
					div.style.height='120px';
					div.style.width='calc(100%)';
					div.style.left='0px';
					div.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
					div.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
					div.style.borderRadius='3px';
					if(name!=lib.config.kzol_kzsg.user) div.style['cursor']='pointer';
					div.link=battle;
					div.link_pm=pm;
					div.link_name=name;
					div.onclick=function(){
						if(this.link_name!=lib.config.kzol_kzsg.user){
							var bool=false;
							for(var i=0;i<_status.kzsg_mysql_users.length;i++){
								if(_status.kzsg_mysql_users[i].用户==lib.config.kzol_kzsg.user){
									if(_status.kzsg_mysql_users[i].排名<0) bool=true;
								};
							};
							if(bool==true){
								game.say1('请设置守军后再进行攻打');
								return ;
							};
							var battle1=this.link;
							var battle={};
							battle.army={};
							var num=0;
							for(var i in battle1){
								if(battle1[i].leader!=undefined){
									battle.army[i]=battle1[i];
									num++;
								};
							};
							battle.limit=num;
							battle.type='pkc';
							if(num>0){
								var limit=num;
								_status.kzol_kzsg_divs10.div_chooseArmy.link=limit;
								_status.kzol_kzsg_divs10.div11.link=battle;
								_status.kzol_kzsg_armyToBattle=[];
								delete _status.kzol_kzsg_changeCA;
								_status.kzol_kzsg_onPKC=true;
								_status.kzol_kzsg_PKC_pm=this.link_pm;
								_status.kzol_kzsg_PKC_name=this.link_name;
								game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs18);
								game.kzol_dialogs_show(_status.kzol_kzsg_dialogs10);
							}else{
								game.kzsg_changePm(this.link_name);
							};
						};
					};
					dialog.appendChild(div);
					game.kzol_kzsg_clickFk(div);
					var div_pm=ui.create.div('');
					div_pm.style.height='120px';
					div_pm.style.top='0px';
					div_pm.style.width='85px';
					div_pm.style.left='0px';
					div_pm.style['font-size']='40px';
					div_pm.style['text-align']='center';
					div_pm.style['line-height']='121px';
					div_pm.style['font-family']="'STXinwei','xinwei'";
					var str=pm;
					if(str<=0){
						div_pm.style['line-height']='119px';
						div_pm.style['font-size']='26px';
						str='未上榜';
					};
					div_pm.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">'+str+'</span>';
					div.appendChild(div_pm);
					var div_name=ui.create.div('');
					div_name.style.height='22px';
					div_name.style.top='calc(50% - 11px)';
					div_name.style.width='150px';
					div_name.style.left='85px';
					div_name.style['font-size']='22px';
					div_name.style['text-align']='left';
					div_name.style['font-family']="'STXinwei','xinwei'";
					div_name.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">'+name+'</span>';
					div.appendChild(div_name);
					var div_army=ui.create.div('.menu');
					div_army.style.height='120px';
					div_army.style.top='0px';
					div_army.style.width='415px';
					div_army.style.right='0px';
					div_army.style['text-align']='left';
					div_army.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
					div_army.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
					div_army.style['overflow-x']='scroll';
					div_army.style['overflow-y']='hidden';
					if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(div_army);
					div_army.addEventListener('mousewheel',function(e){
						var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
						var move_s=delD>0?-30:30;
						this.scrollLeft+=move_s;
					});
					div.appendChild(div_army);
					for(var i=1;i<=4;i++){
						var army=battle[i];
						if(army.leader==undefined) continue;
						var leader1=army.leader[0];
						var leader2=leader1.slice(0,leader1.length-1);
						var div_armya=ui.create.div('.menu');
						div_armya.style.height='calc(100%)';
						div_armya.style.top='0px';
						div_armya.style.width='100px';
						div_armya.style.left=(105*(i-1))+'px';
						div_armya.style['cursor']='-webkit-zoom-in';
						div_armya.setBackgroundImage('extension/扩展ol/'+leader2+'.jpg');
						div_armya.style.backgroundSize='cover';
						div_armya.link=army;
						div_armya.onmouseover=function(){
							var info=_status.kzol_kzsg_dialogs18.info;
							var info_div=_status.kzol_kzsg_divs18.info_div;
							var army=this.link;
							info.style.top=window.event.clientY/game.documentZoom+'px';
							info.style.display='';
							var num3=0;
							for(var i=0;i<info_div.childNodes.length;i++){
								num3++
							};
							for(var i=0;i<num3;i++){
								info_div.removeChild(info_div.childNodes[0]);
							};
							for(var i in army.leader){
								var info_div_card=ui.create.button(army.leader[i],'character');
								info_div_card.style.width='90px';
								info_div_card.style.height='120px';
								info_div_card.style.left='2.5px';
								info_div_card.style.top='10px';
								info_div.appendChild(info_div_card);
							};
							for(var i in army.number){
								var info_div_card=ui.create.button(army.number[i],'character');
								info_div_card.style.width='90px';
								info_div_card.style.height='120px';
								info_div_card.style.left='2.5px';
								info_div_card.style.top='10px';
								info_div.appendChild(info_div_card);
							};
							info.show();
						};
						div_armya.onmouseout=function(){
							var info=_status.kzol_kzsg_dialogs18.info;
							var info_div=_status.kzol_kzsg_divs18.info_div;
							info.style.display='none';
						};
						var div_armya_name=ui.create.div('');
						div_armya_name.style.height='calc(100% - 10px)';
						div_armya_name.style.top='2.5px';
						div_armya_name.style.width='20px';
						div_armya_name.style.left='2.5px';
						div_armya_name.style['font-size']='20px';
						//div_armya_name.style['text-align']='left';
						div_armya_name.style['font-family']="'STXinwei','xinwei'";
						div_armya_name.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">'+army.name+'</span>';
						div_armya.appendChild(div_armya_name);
						div_army.appendChild(div_armya);
					};
					return div;
				};
				var battle_divs=[];
				var battle_divs_num=1;
				for(var i=0;i<_status.kzsg_mysql_users.length;i++){
					if(_status.kzsg_mysql_users[i].排名>0||_status.kzsg_mysql_users[i].用户==lib.config.kzol_kzsg.user){
						var div=func(_status.kzsg_mysql_users[i]);
						battle_divs.push({pm:_status.kzsg_mysql_users[i].排名,yh:_status.kzsg_mysql_users[i].用户,div:div});
					};
				};
				var func2=function(pm){
					return function(obj1,obj2){
						var pm1=obj1[pm]; 
						var pm2=obj2[pm];
						if(pm1<pm2){
							return -1; 
						}else if(pm1>pm2 ){ 
							return 1; 
						}else{ 
							return 0; 
						};
					};
				};
				var battle_num=0;
				battle_divs.sort(func2("pm"));
				for(var i=0;i<battle_divs.length;i++){
					var user=battle_divs[i];
					var div=user.div;
					if(user.pm>0){
						if(user.yh!=lib.config.kzol_kzsg.user){
							div.style.top=(5+125*battle_num)+'px';
							battle_num++;
							battle_div.appendChild(div);
						}else{
							me.style['text-align']='';
							me.style['font-size']='';
							me.style['line-height']='';
							me.style['font-family']='';
							me.innerHTML='';
							div.style.top='5px';
							me.appendChild(div);
						};
					}else{
						me.style['text-align']='';
						me.style['font-size']='';
						me.style['line-height']='';
						me.style['font-family']='';
						me.innerHTML='';
						div.style.top='5px';
						me.appendChild(div);
					};
				};
			},
			kzol_swithCard:function(card_divs){
				if(card_divs==undefined) return ;
				if(_status.kzol_kzsg_dialogs7==undefined||_status.kzol_kzsg_dialogs7.dialog_page==undefined) return ;
				var page=_status.kzol_kzsg_dialogs7.dialog_page.link;
				var num_mykps=lib.config.mode_config.kzsg.mykps;
				if(num_mykps==undefined) num_mykps=18;
				var num1=0;
				for(var i=0;i<card_divs.childNodes.length;i++){
					var card=card_divs.childNodes[i].link2;
					if(_status.kzol_kzsg_swithGroup==undefined||(_status.kzol_kzsg_swithGroup!=undefined&&card.group==_status.kzol_kzsg_swithGroup)){
						if(_status.kzol_kzsg_swithType==undefined||(_status.kzol_kzsg_swithType!=undefined&&card.type==_status.kzol_kzsg_swithType)){
							if(_status.kzol_kzsg_swithquailty==undefined||(_status.kzol_kzsg_swithquailty!=undefined&&card.quailty==_status.kzol_kzsg_swithquailty)){
								num1++;
								if(num1<=(page)*num_mykps&&num1>(page-1)*num_mykps){
									card_divs.childNodes[i].style.display='';
								};
							};
						};
					};
				};
				var dialogs=_status.kzol_kzsg_dialogs7;
				if(dialogs.page_info.style.display!='none'){
					dialogs.page_info.style.display='none';
				};
			},
			kzol_swithCard1:function(card_divs){
				if(card_divs==undefined) return ;
				if(_status.kzol_kzsg_dialogs15==undefined||_status.kzol_kzsg_dialogs15.dialog_pagea==undefined) return ;
				var page=_status.kzol_kzsg_dialogs15.dialog_pagea.link;
				var num_mykps=lib.config.mode_config.kzsg.mykps;
				if(num_mykps==undefined) num_mykps=18;
				var num1=0;
				for(var i=0;i<card_divs.childNodes.length;i++){
					var card=card_divs.childNodes[i].link2;
					if(_status.kzol_kzsg_swithGroup1==undefined||(_status.kzol_kzsg_swithGroup1!=undefined&&card.group==_status.kzol_kzsg_swithGroup1)){
						if(_status.kzol_kzsg_swithType1==undefined||(_status.kzol_kzsg_swithType1!=undefined&&card.type==_status.kzol_kzsg_swithType1)){
							if(_status.kzol_kzsg_swithquailty1==undefined||(_status.kzol_kzsg_swithquailty1!=undefined&&card.quailty==_status.kzol_kzsg_swithquailty1)){
								num1++;
								if(num1<=(page)*num_mykps&&num1>(page-1)*num_mykps){
									card_divs.childNodes[i].style.display='';
								};
							};
						};
					};
				};
				var dialogs=_status.kzol_kzsg_dialogs15;
				if(dialogs.pagea_info.style.display!='none'){
					dialogs.pagea_info.style.display='none';
				};
			},
			changeButtonInfo:function(node,num,bool,bool2,bool3){
				var card=lib.config.kzol_kzsg.card[num];
				node.node.prepareRound.innerHTML=card.prepareRound;
				node.node.attack.innerHTML=card.attack;
				node.node.hp.innerHTML=card.hp;
				if(card.onWJ!=undefined&&bool2==true){
					node.node.prepareRound.innerHTML=card.prepareRound_wj;
					node.node.attack.innerHTML=card.attack_wj;
					node.node.hp.innerHTML=card.hp_wj;
					if(card.hp_wj<card.hp||card.hp_wj=='X'){
						node.node.hp.innerHTML='<span style="color:#FF3232;">'+node.node.hp.innerHTML+'</span>';
						if(bool3==true){
							node.style['cursor']='pointer';
							node.onclick=function(){
								var zl_num1=(card.hp-card.hp_wj)*3;
								if(card.hp_wj=='X') zl_num1=card.hp*3+10;
								var zl_num=5;
								if(lib.config.kzol_kzsg.wuZL==undefined){
									lib.config.kzol_kzsg.wuZL=5;
									game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
								}else{
									zl_num=lib.config.kzol_kzsg.wuZL;
								};
								if(zl_num1<=0){
									return ;
								};
								if(confirm('是否花费'+zl_num1+'古币来治疗'+card.translate+'?（剩余治疗次数：'+zl_num+'次）')){
									if(zl_num<=0){
										game.say1('治疗次数不足');
										return ;
									};
									if(lib.config.kzol_kzsg.coin1>=zl_num1){
										lib.config.kzol_kzsg.coin1-=zl_num1;
										lib.config.kzol_kzsg.wuZL-=1;
										lib.config.kzol_kzsg.card[num].hp_wj=card.hp;
										node.node.hp.innerHTML=card.hp;
										game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
										game.say1('治疗成功');
									}else{
										game.say1('古币不足');
									};
								};
							};
						};
					};
				}else{
					node.node.prepareRound.innerHTML=card.prepareRound;
					node.node.attack.innerHTML=card.attack;
					node.node.hp.innerHTML=card.hp;
					if(node.node.bing!=undefined) node.node.bing.innerHTML=card.bing;
					if(node.node.bao!=undefined) node.node.bao.innerHTML=card.bao;
					if(node.node.shu!=undefined) node.node.shu.innerHTML=card.shu;
				};
				var str='';
				for(var i=0;i<card.skills.length;i++){
					if(i>0) str+='、'
					str+=get.translation(card.skills[i]);
				};
				if(str==""){
					node.node.skill.style.display='none';
				}else{
					node.node.skill.style.display='';
					node.node.skill.innerHTML=str;
				};
				node.node.group.innerHTML='<div>'+get.translation(card.group)+'</div>';
				if(bool==true){
					if(lib.kzol_kzsg_card[card.name+card.quailty]!=undefined&&lib.kzol_kzsg_card[card.name+card.quailty].skills.contains('kzsg_幻·势力')){
						node.node.group.style['cursor']='pointer';
						node.node.group.onclick=function(e){
							var list=[];
							for(var i in lib.config.kzol_kzsg.army){
								var army=lib.config.kzol_kzsg.army[i];
								for(var j in army.leader){
									list.push(army.leader[j]);
								};
								for(var j in army.number){
									list.push(army.number[j]);
								};
							};
							if(this.parentNode.link1!=undefined&&!list.contains(this.parentNode.link1)){
								var card_num=this.parentNode.link1;
								game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs7);
								var dialogs={};
								var divs={};
								var background=ui.create.dialog('hidden');
								background.style.height='calc(100%)';
								background.style.width='calc(100%)';
								background.style.left='0px';
								background.style.top='0px';
								background.style['zIndex']=0;
								dialogs.background=background;
								var div=ui.create.div();
								div.style.height='2000px';
								div.style.width='2000px';
								div.style.left='-10px';
								div.style.top='-10px';
								setTimeout(function(){
									div.onclick=function(){
										game.kzol_dialogs_delete(dialogs);
										setTimeout(function(){
											game.kzol_dialogs_show(_status.kzol_kzsg_dialogs7);
										},250);
									};
								},500);
								background.add(div);
								var dialog=ui.create.dialog('hidden');
								dialog.style.height='180px';
								dialog.style.width='490px';
								dialog.style.left='calc(50% - 245px)';
								dialog.style.top='calc(50% - 95px)';
								dialog.classList.add('popped');
								dialog.classList.add('static');
								dialogs.dialog=dialog;
								var title=ui.create.div('');
								title.style.height='30px';
								title.style.width='490px';
								title.style.left='0px';
								title.style.top='10px';
								title.innerHTML='<span style="font-size:30px;font-family:xinwei;line-height:30px">改变势力</span>';
								dialog.appendChild(title);
								var choice_div=ui.create.div('');
								choice_div.style.height='120px';
								choice_div.style.width='480px';
								choice_div.style.left='5px';
								choice_div.style.top='50px';
								choice_div.style['overflow-x']='scroll';
								choice_div.style['overflow-y']='hidden';
								if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(choice_div);
								choice_div.addEventListener('mousewheel',function(e){
									var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
									var move_s=delD>0?-30:30;
									this.scrollLeft+=move_s;
								});
								dialog.appendChild(choice_div);
								var groups=[];
								for(var i in lib.kzol_kzsg_card){
									var group=lib.kzol_kzsg_card[i].group;
									if(!groups.contains(group)) groups.push(group);
								};
								for(var i=0;i<groups.length;i++){
									var str='国';
									var group=groups[i];
									if(group=='qun') str='雄';
									if(group=='xia') str='客';
									var choice=ui.create.div('.menu');
									choice.style.height='120px';
									choice.style.width='90px';
									choice.style.left=(5+95*i)+'px';
									choice.style.top='0px';
									choice.innerHTML='<span style="cursor:pointer;font-size:35px;font-family:xinwei;line-height:120px">'+get.translation(group)+str+'</span>';
									choice.link=card_num;
									choice.link_button=this.parentNode;
									choice.link_group=group;
									choice.onclick=function(){
										lib.config.kzol_kzsg.card[this.link].group=this.link_group;
										game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
										game.changeButtonInfo(this.link_button,this.link);
										game.kzol_dialogs_delete(dialogs);
										setTimeout(function(){
											game.kzol_dialogs_show(_status.kzol_kzsg_dialogs7);
										},250);
									};
									choice_div.appendChild(choice);
								};
								game.kzol_dialogs_open(dialogs);
							}else{
								game.say1('该武将已在军队中，无法改变其势力');
							};
							e.stopPropagation();
						};
					};
					if(lib.kzol_kzsg_card[card.name+card.quailty]!=undefined&&lib.kzol_kzsg_card[card.name+card.quailty].skills.contains('kzsg_幻·技能')){
						node.node.skill.style['cursor']='pointer';
						node.node.skill.onclick=function(e){
							if(this.parentNode.link1!=undefined){
								var card_num=this.parentNode.link1;
								var card=lib.config.kzol_kzsg.card[card_num];
								game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs7);
								var dialogs={};
								var divs={};
								var background=ui.create.dialog('hidden');
								background.style.height='calc(100%)';
								background.style.width='calc(100%)';
								background.style.left='0px';
								background.style.top='0px';
								background.style['zIndex']=0;
								dialogs.background=background;
								var div=ui.create.div();
								div.style.height='2000px';
								div.style.width='2000px';
								div.style.left='-10px';
								div.style.top='-10px';
								setTimeout(function(){
									div.onclick=function(){
										game.kzol_dialogs_delete(dialogs);
										setTimeout(function(){
											game.kzol_dialogs_show(_status.kzol_kzsg_dialogs7);
										},250);
									};
								},500);
								background.add(div);
								var dialog=ui.create.dialog('hidden');
								dialog.style.height='100px';
								dialog.style.width='490px';
								dialog.style.left='calc(50% - 245px)';
								dialog.style.top='calc(50% - 50px)';
								dialog.classList.add('popped');
								dialog.classList.add('static');
								dialogs.dialog=dialog;
								var title=ui.create.div('');
								title.style.height='30px';
								title.style.width='490px';
								title.style.left='0px';
								title.style.top='10px';
								title.innerHTML='<span style="font-size:30px;font-family:xinwei;line-height:30px">改变技能</span>';
								dialog.appendChild(title);
								var choice_div=ui.create.div('');
								choice_div.style.height='40px';
								choice_div.style.width='480px';
								choice_div.style.left='5px';
								choice_div.style.top='50px';
								choice_div.style['overflow-x']='scroll';
								choice_div.style['overflow-y']='hidden';
								if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(choice_div);
								choice_div.addEventListener('mousewheel',function(e){
									var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
									var move_s=delD>0?-30:30;
									this.scrollLeft+=move_s;
								});
								dialog.appendChild(choice_div);
								var parentNode=this.parentNode;
								var createSkillDiv=function(){
									var skills=lib.kzol_kzsg_card[card.name+card.quailty].skills;
									for(var i=0;i<skills.length;i++){
										var str='选择';
										if(card.skills[i]!=undefined) str=get.translation(card.skills[i]);
										var choice=ui.create.div('.menu');
										choice.style.height='25px';
										choice.style.width='90px';
										choice.style.left=(5+95*i)+'px';
										choice.style.top='7.5px';
										choice.innerHTML='<span style="cursor:pointer;font-size:17px;font-family:xinwei;line-height:25px">'+str+'</span>';
										choice.link=card_num;
										choice.link_button=parentNode;
										choice.link_num=i;
										choice.onclick=function(){
											game.kzol_dialogs_hide(dialogs);
											var dialog=ui.create.dialog('hidden');
											dialog.style.height='calc(100% - 50px)';
											dialog.style.top='50px';
											var item=dialog.add('<div class="popup pointerdiv" style="width:50%;display:inline-block"><div>返回</div></div>');
											item.firstChild.style['text-align']='center';
											item.firstChild.addEventListener('click',function(){
												game.kzol_dialogs_show(dialogs);
												dialog.delete();
											});
											var KZ_skills=[];
											for(var i in lib.skill){
												var KZ_skill=lib.skill[i];
												if(i.indexOf('kzsg')!=-1&&i[i.length-1]!='2'&&i[i.length-1]!='3'&&i[i.length-1]!='4'&&
												KZ_skill.mode!=undefined&&KZ_skill.mode.contains('kzsg')&&KZ_skill.kzol_cannotInit==undefined){
													KZ_skills.push(i);
												};
											};
											for(i=0;i<KZ_skills.length;i++){
												if(lib.translate[KZ_skills[i]+'_info']){
													var translation=get.translation(KZ_skills[i]);
													var item=dialog.add('<div class="popup pointerdiv" style="width:50%;display:inline-block"><div class="skill">'+translation+'</div><div>'+lib.translate[KZ_skills[i]+'_info']+'</div></div>');
													item.firstChild.link=this.link;
													item.firstChild.link_button=this.link_button;
													item.firstChild.link_skill=KZ_skills[i];
													item.firstChild.link_num=this.link_num;
													item.firstChild.addEventListener('click',function(){
														var skill=this.link_skill;
														var num=this.link_num;
														var bool=false;
														for(var i=0;i<num;i++){
															var skills=lib.config.kzol_kzsg.card[this.link].skills;
															if(skills[i]==undefined){
																lib.config.kzol_kzsg.card[this.link].skills[i]=skill;
																bool=true;
															};
														};
														if(bool==false) lib.config.kzol_kzsg.card[this.link].skills[num]=skill;
														game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
														game.changeButtonInfo(this.link_button,this.link);
														var div_num=0;
														for(var i=0;i<choice_div.childNodes.length;i++){
															div_num++
														};
														for(var i=0;i<div_num;i++){
															choice_div.removeChild(choice_div.childNodes[0]);
														};
														createSkillDiv();
														game.kzol_dialogs_show(dialogs);
														dialog.delete();
													});
												};
											};
											dialog.add(ui.create.div('placeholder'));
											ui.window.appendChild(dialog);
										};
										choice_div.appendChild(choice);
									};
								};
								createSkillDiv();
								game.kzol_dialogs_open(dialogs);
							};
							e.stopPropagation();
						};
					};
				};
			},
			kzol_gainWeb:function(url,bool){
				if(bool==true){
					//delete _status.kzol_kzsg_jjnr;
					delete _status.kzol_kzsg_jjnr_num;
					delete _status.kzol_kzsg_jjnr_cardnum;
				};
				//if(_status.kzol_kzsg_jjnr==undefined) _status.kzol_kzsg_jjnr=[];
				if(_status.kzol_kzsg_jjnr_num==undefined) _status.kzol_kzsg_jjnr_num=1;
				if(_status.kzol_kzsg_jjnr_cardnum==undefined) _status.kzol_kzsg_jjnr_cardnum=0;
				var xmlHttp=new XMLHttpRequest();
				xmlHttp.onreadystatechange=function(){
					if(xmlHttp.readyState==4){
						var text=xmlHttp.responseText;
						if(_status.kzol_kzsg_jjnr_maxnum==undefined){
							for(var i=0;i<text.length;i++){
								if(text[i]=='回'&&
								text[i+1]!=undefined&&text[i+1]=='复'&&
								text[i+2]!=undefined&&text[i+2]=='贴'&&
								text[i+3]!=undefined&&text[i+3]=='，'&&
								text[i+4]!=undefined&&text[i+4]=='共'&&
								_status.kzol_kzsg_jjnr_maxnum==undefined
								){
									_status.kzol_kzsg_jjnr_maxnum=text[i+23];
								};
							};
						};
						var list=text.match(/<div.id="post_content_\d.*?>(.*?)<\/div>/g);
						if(list!=null){
							if(_status.kzol_kzsg_jjnr_num<=_status.kzol_kzsg_jjnr_maxnum){
								for(var i=0;i<list.length;i++){
									var div=document.createElement("div");
									div.innerHTML=list[i];
									if(_status.kzol_kzsg_dialogs16!=undefined&&_status.kzol_kzsg_dialogs16.dialog!=undefined){
										var str=div.innerText;
										try{
											var battle1=game.kzol_changeTobattle(str);
											if(!battle1||typeof battle1!='object') throw 'err'
										}
										catch(err){
											battle1=null;
										};
										if(battle1){
											game.kzol_createJJC_zr(battle1);
										};
									};
									//_status.kzol_kzsg_jjnr.push(div.innerText);
								};
								_status.kzol_kzsg_jjnr_num++;
								game.kzol_gainWeb(url);
							}else{
								delete _status.kzol_kzsg_onCreatingJJC;
							};
						};
					};
				};
				xmlHttp.open("GET",url+'?pn='+_status.kzol_kzsg_jjnr_num,true);
				xmlHttp.send(null);
			},
			kzol_gainWeb_coding:function(url,bool){
				if(bool==true){
					//delete _status.kzol_kzsg_jjnr;
					delete _status.kzol_kzsg_jjnr_num;
					delete _status.kzol_kzsg_jjnr_cardnum;
				};
				//if(_status.kzol_kzsg_jjnr==undefined) _status.kzol_kzsg_jjnr=[];
				if(_status.kzol_kzsg_jjnr_num==undefined) _status.kzol_kzsg_jjnr_num=1;
				if(_status.kzol_kzsg_jjnr_cardnum==undefined) _status.kzol_kzsg_jjnr_cardnum=0;
				lib.init.js(url,'pozhen',function(){
					if(_status.kzol_kzsg_dialogs16!=undefined&&_status.kzol_kzsg_dialogs16.dialog!=undefined){
						var zr=window.zr;
						for(var b in zr){
							var battle1=zr[b];
							game.kzol_createJJC_zr(battle1);
						};
					};
				},function(){
					_status.kzol_kzsg_dialogs16.dialog.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">未找到pozhen.js文件</span>';
					delete _status.kzol_kzsg_onCreatingJJC;
				});
			},
			kzol_createJJC_zr:function(battle1){
				if(typeof battle1!='object') return ;
				var battle={
					type:'jjc',
				};
				if(battle1['名字']!=undefined){
					battle.name=battle1['名字'];
				}else{
					if(battle1['作者']!=undefined){
						battle.name=battle1['作者']+'的阵容';
					}else{
						battle.name='无名阵容';
					};
				};
				if(battle1['作者']!=undefined){
					battle.author=battle1['作者'];
				}else{
					battle.author='无名氏';
				};
				if(battle1['介绍']!=undefined){
					battle.info=battle1['介绍'];
				}else{
					battle.info='无';
				};
				if(battle1['对战军队数']!=undefined&&typeof battle1['对战军队数']=='number'){
					battle.limit=battle1['对战军队数'];
					if(battle.limit>4) battle.limit=4;
				}else{
					battle.limit=1;
				};
				if(battle1['军队']!=undefined&&typeof battle1['军队']=='object'){
					battle.army=battle1['军队'];
				};
				var bool1=true;
				for(var j in battle.army){
					var army=battle.army[j];
					if(typeof army['领将']!='object'||typeof army['成员']!='object'){
						bool1=false;
					}else{
						for(var k in army['领将']){
							var card=army['领将'][k];
							if(lib.kzol_kzsg_card['kzsg_'+card]==undefined) bool1=false;
						};
						for(var k in army['成员']){
							var card=army['成员'][k];
							if(lib.kzol_kzsg_card['kzsg_'+card]==undefined) bool1=false;
						};
					};
				};
				if(bool1==true){
					var name=battle.name+'_'+battle.author;
					var dialog=_status.kzol_kzsg_dialogs16.dialog;
					dialog.style['text-align']='';
					dialog.style['font-size']='';
					dialog.style['line-height']='';
					dialog.style['font-family']='';
					if(dialog.innerHTML=='<span style="color:white;text-shadow:black 0 0 2px;">加载中</span>') dialog.innerHTML='';
					if(dialog.showJJC==undefined){
						var jjc=ui.create.div('.menu');
						jjc.style.height='30px';
						jjc.style.top='10px';
						jjc.style.width='calc(95%)';
						jjc.style.left='calc(2.5%)';
						jjc.style['font-size']='25px';
						jjc.style['line-height']='30px';
						jjc.style['text-align']='center';
						jjc.style['font-family']="'STXinwei','xinwei'";
						jjc.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
						jjc.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
						jjc.style.borderRadius='3px';
						jjc.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">破阵</span>';
						dialog.appendChild(jjc);
						dialog.showJJC=true;
					};
					for(var j in battle.army){
						var card_num=0;
						battle.army[j].leader=battle.army[j]['领将'];
						battle.army[j].number=battle.army[j]['成员'];
						delete battle.army[j]['领将'];
						delete battle.army[j]['成员'];
						for(var k in battle.army[j].leader){
							card_num++;
							var card=battle.army[j].leader[k];
							if(lib.kzol_kzsg_card['kzsg_'+card]!=undefined){
								battle.army[j].leader[k]='kzsg_'+card;
							}else{
								delete battle.army[j].leader[k];
							};
						};
						for(var k in battle.army[j].number){
							card_num++;
							var card=battle.army[j].number[k];
							if(lib.kzol_kzsg_card['kzsg_'+card]!=undefined){
								battle.army[j].number[k]='kzsg_'+card;
							}else{
								delete battle.army[j].number[k];
							};
						};
						if(card_num==0) delete battle.army[j];
					};
					var battle_num=0;
					for(var j in battle.army){
						battle_num++;
					};
					if(battle_num>0){
						var div=ui.create.div('.menu');
						div.style.height='120px';
						div.style.top=(50+130*_status.kzol_kzsg_jjnr_cardnum)+'px';
						div.style.width='calc(95%)';
						div.style.left='calc(2.5%)';
						div.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
						div.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
						div.style.borderRadius='3px';
						div.style.cursor='pointer';
						div.link=battle;
						div.link1=name;
						div.onclick=function(){
							var battle=this.link;
							var limit=battle.limit;
							_status.kzol_kzsg_divs10.div_chooseArmy.link=limit;
							_status.kzol_kzsg_divs10.div11.link=battle;
							_status.kzol_kzsg_armyToBattle=[];
							_status.kzol_kzsg_onJJC=this.link1;
							_status.kzol_kzsg_onbattle_div_name=this.link_name;
							delete _status.kzol_kzsg_changeCA;
							game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs16);
							game.kzol_dialogs_show(_status.kzol_kzsg_dialogs10);
						};
						dialog.appendChild(div);
						var div_name=ui.create.div('');
						div_name.style.height='35px';
						div_name.style.top='5px';
						div_name.style.width='calc(40%)';
						div_name.style.left='2.5px';
						div_name.style['font-size']='35px';
						div_name.style['text-align']='left';
						div_name.style['font-family']="'STXinwei','xinwei'";
						div.link_name=div_name;
						var color1='#00FF00';
						if(lib.config.kzol_kzsg.jj[name]!=true) color1='#FF0000';
						div_name.innerHTML='<span style="color:'+color1+'">'+battle.name+'</span>';
						div.appendChild(div_name);
						var div_info=ui.create.div('');
						div_info.style.height='75px';
						div_info.style.top='40px';
						div_info.style.width='calc(40% - 5px)';
						div_info.style.left='2.5px';
						div_info.style['font-size']='15px';
						div_info.style['text-align']='left';
						div_info.style['font-family']="'STXinwei','xinwei'";
						var str1='';
						str1+='&nbsp作者:'+battle.author;
						str1+='<br>&nbsp介绍:<br>&nbsp&nbsp'+battle.info;
						div_info.innerHTML='<span style="color:white">'+str1+'</span>';
						div.appendChild(div_info);
						var div_army=ui.create.div('.menu');
						div_army.style.height='calc(100%)';
						div_army.style.top='0px';
						div_army.style.width='calc(60%)';
						div_army.style.right='0px';
						div_army.style['text-align']='left';
						div_army.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
						div_army.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
						div_army.style['overflow-x']='scroll';
						div_army.style['overflow-y']='hidden';
						if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(div_army);
						div_army.addEventListener('mousewheel',function(e){
							var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
							var move_s=delD>0?-30:30;
							this.scrollLeft+=move_s;
						});
						div.appendChild(div_army);
						game.kzol_kzsg_clickFk(div);
						var num2=0;
						for(var j in battle.army){
							var leader1=battle.army[j].leader[0];
							if(leader1==undefined){
								leader1=battle.army[j].number[0];
							};
							var leader2=leader1.slice(0,leader1.length-1);
							var div_armya=ui.create.div('.menu');
							div_armya.style.height='calc(100%)';
							div_armya.style.top='0px';
							div_armya.style.width='100px';
							div_armya.style.left=(105*num2)+'px';
							div_armya.style.cursor='-webkit-zoom-in';
							div_armya.setBackgroundImage('extension/扩展ol/'+leader2+'.jpg');
							div_armya.style.backgroundSize='cover';
							div_armya.link=battle.army[j];
							div_armya.onmouseover=function(){
								var info=_status.kzol_kzsg_dialogs16.info;
								var info_div=_status.kzol_kzsg_divs16.info_div;
								var army=this.link;
								info.style.top=window.event.clientY/game.documentZoom+'px';
								info.style.display='';
								var num3=0;
								for(var i=0;i<info_div.childNodes.length;i++){
									num3++
								};
								for(var i=0;i<num3;i++){
									info_div.removeChild(info_div.childNodes[0]);
								};
								for(var i in army.leader){
									var info_div_card=ui.create.button(army.leader[i],'character');
									info_div_card.style.width='90px';
									info_div_card.style.height='120px';
									info_div_card.style.left='2.5px';
									info_div_card.style.top='10px';
									info_div.appendChild(info_div_card);
								};
								for(var i in army.number){
									var info_div_card=ui.create.button(army.number[i],'character');
									info_div_card.style.width='90px';
									info_div_card.style.height='120px';
									info_div_card.style.left='2.5px';
									info_div_card.style.top='10px';
									info_div.appendChild(info_div_card);
								};
								info.show();
							};
							div_armya.onmouseout=function(){
								var info=_status.kzol_kzsg_dialogs16.info;
								var info_div=_status.kzol_kzsg_divs16.info_div;
								info.style.display='none';
							};
							var div_armya_name=ui.create.div('');
							div_armya_name.style.height='calc(100% - 10px)';
							div_armya_name.style.top='2.5px';
							div_armya_name.style.width='20px';
							div_armya_name.style.left='2.5px';
							div_armya_name.style['font-size']='20px';
							//div_armya_name.style['text-align']='left';
							div_armya_name.style['font-family']="'STXinwei','xinwei'";
							if(battle.army[j].leader[0]!=undefined){
								div_armya_name.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">'+get.translation(leader1)+'军</span>';
							}else{
								div_armya_name.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">无主军队<span>';
							};
							div_armya.appendChild(div_armya_name);
							div_army.appendChild(div_armya);
							num2++;
						};
						_status.kzol_kzsg_jjnr_cardnum++;
					};
				};
			},
			kzol_clearJJC:function(){
				if(_status.kzol_kzsg_dialogs16!=undefined&&_status.kzol_kzsg_dialogs16.dialog!=undefined){
					var dialog=_status.kzol_kzsg_dialogs16.dialog;
					delete dialog.showJJC;
					var num=0;
					for(var j=0;j<dialog.childNodes.length;j++){
						num++
					};
					for(var j=0;j<num;j++){
						dialog.removeChild(dialog.childNodes[0]);
					};
					dialog.style['text-align']='center';
					dialog.style['font-size']='30px';
					dialog.style['line-height']='400px';
					dialog.style['font-family']="'STXinwei','xinwei'";
					dialog.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">加载中</span>';
				};
			},
			kzol_changeTobattle:function(str){
				var start,end;
				for(var i=0;i<str.length;i++){
					if(str[i]=='{'&&start==undefined) start=i;
					if(str[i]=='}') end=i;
				};
				if(start!=undefined&&end!=undefined){
					var str1=str.slice(start,end+1);
					return JSON.parse(str1);
				};
			},
			kzol_changeTomin:function(num){
				var str=Math.floor(num/60);
				if(str<10) str='0'+str;
				var str1=num%60;
				if(str1<10) str1='0'+str1;
				return str+':'+str1;
			},
			kzol_changeCoin:function(num,type){
				var str='';
				if(num<0){
					str+='失去了'+(-num);
				}else{
					str+='获得了'+num;
				};
				if(type=='coin1'){
					lib.config.kzol_kzsg.coin1+=num;
					str+='古币';
				}else{
					lib.config.kzol_kzsg.coin+=num;
					str+='五铢钱';
				};
				game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
				game.say1(str);
			},
			kzol_dialogs_delete:function(dialogs){
				if(_status.kzol_kzsg_help!=undefined&&_status.kzol_kzsg_help_info!=undefined&&dialogs!=_status.kzol_kzsg_dialogs17){
					var help=_status.kzol_kzsg_help;
					var help_div=help.link_div;
					var help_info=_status.kzol_kzsg_help_info;
					if(help_info.style.display!='none'){
						help_div.innerHTML='<span style="cursor:pointer;">?</span>';
						help_info.style.display='none';
					};
					help.style.display='none';
				};
				for(var i in dialogs){
					dialogs[i].delete();
				};
			},
			kzol_dialogs_hide:function(dialogs){
				if(dialogs==_status.kzol_kzsg_dialogs24){
					delete _status.kzol_kzsg_forceDIY;
					_status.kzol_kzsg_dialogs24.forceDIY.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">锁定界面</span>';
				};
				if(_status.kzol_kzsg_help!=undefined&&_status.kzol_kzsg_help_info!=undefined){
					var help=_status.kzol_kzsg_help;
					var help_div=help.link_div;
					var help_info=_status.kzol_kzsg_help_info;
					if(help_info.style.display!='none'){
						help_div.innerHTML='<span style="cursor:pointer;">?</span>';
						help_info.style.display='none';
					};
					help.style.display='none';
				};
				for(var i in dialogs){
					if(dialogs==_status.kzol_kzsg_dialogs14) _status.kzol_kzsg_dialogs14.showResult_info.style.display='none';
					if(_status.kzol_kzsg_dialogs20!=undefined&&dialogs[i]==_status.kzol_kzsg_dialogs20.dialog){
						dialogs[i].hide();
					}else{
						dialogs[i].style.display='none';
					};
				};
			},
			kzol_dialogs_show:function(dialogs){
				if(dialogs==_status.kzol_kzsg_dialogs7){
					delete _status.kzol_kzsg_changeCK;
				};
				if(dialogs==_status.kzol_kzsg_dialogs15) delete _status.kzol_kzsg_changeCardCK;
				if(dialogs==_status.kzol_kzsg_dialogs9) dialogs.changeCardDisplay.style.left='45px';
				if(dialogs==_status.kzol_kzsg_dialogs16) dialogs.changeCardDisplay.style.left='380px';
				if(dialogs==_status.kzol_kzsg_dialogs21) dialogs.changeCardDisplay.style.left='160px';
				if(dialogs==_status.kzol_kzsg_dialogs22) dialogs.changeCardDisplay.style.left='110px';
				setTimeout(function(){
					if(_status.kzol_kzsg_help!=undefined&&_status.kzol_kzsg_help_info!=undefined){
						var help=_status.kzol_kzsg_help;
						var help_div=help.link_div;
						var help_info=_status.kzol_kzsg_help_info;
						if(dialogs==_status.kzol_kzsg_dialogs1){
							help.style.display='';
							help_info.innerHTML='<ul><li>头像：<br>双击进入头像选择界面<li>名字：<br>点击进入改名界面<li>战役等按钮：<br>进入对应界面<li>军队展示框:<br>鼠标移动至（电脑）/长按（手机）展示框内军队时在军队展示栏内显示军队成员<li>军队展示栏-卡牌：<br>右键（电脑）/长按（手机）可以查看卡牌技能</ul>';
						}else if(dialogs==_status.kzol_kzsg_dialogs6){
							help.style.display='';
							help_info.innerHTML='<ul><li>军队按钮：<ul><li>查看军队时：<br>点击进入军队编辑界面<li>选择军队时：<br>点击选择军队<br>双击进入军队编辑界面<li>无论何时：<br>鼠标移动至（电脑）/长按（手机）军队按钮时，军队展示栏内显示军队成员、军队封面显示该军队首个领将的头像和该军队的名字</ul><li>军队封面-名字：<br>点击进入改名界面</ul>';
						}else if(dialogs==_status.kzol_kzsg_dialogs9){
							help.style.display='';
							help_info.innerHTML='<ul><li>战役界面：<br>背景替换为战役背景<li>章节：<br>点击进入<li>关卡-军队展示框：<br>鼠标移动至（电脑）/长按（手机）军队按钮时显示军队成员（此时的军队展示栏不会影响关卡的点击事件）<li>注意：<br>手机滑动时应避开首通奖励区域和每日通关奖励区域</ul>';
						}else if(dialogs==_status.kzol_kzsg_dialogs11){
							help.style.display='';
							help_info.innerHTML='<ul><li>商店-单卡：<br>每张卡牌限购一次<br>每天24:00自动刷新，或者花费15古币手动刷新<li>商店-卡包：<br>若开包过程中退出开包界面，下次开包时补回<li>商店-抽卡<br>抽卡前可以花费10古币去除一张不想要的卡牌<br>若抽卡过程中退出抽卡界面，下次抽卡时会先要求完成上次抽卡<li>商店-刮刮乐：<br>每天24:00自动刷新<br>刮开后，若结果卡牌名字在今日奖池中则获得该卡牌（品质随机），否则获得五铢钱X100</ul>';
						}else if(dialogs==_status.kzol_kzsg_dialogs12){
							help.style.display='';
							help_info.innerHTML='<ul><li>点击即可翻开并获得卡牌<li>开包结束后点击空白区域退出开包界面</ul>';
						}else if(dialogs==_status.kzol_kzsg_dialogs13){
							help.style.display='';
							help_info.innerHTML='<ul><li>可以花费10古币去除不想抽到的卡牌<li>抽卡结束后点击空白区域退出抽卡界面</ul>';
						}else if(dialogs==_status.kzol_kzsg_dialogs14){
							help.style.display='';
							help_info.innerHTML='<span style="padding-left:5px;line-height:23px;">合成规则：</span><ul><li>每种品质的卡牌都有一个固定价值，当三张所选卡牌的总价值达到某一品质的对应价值X3时，该品质（取价值所达到最高品质）即为保底品质<li>有概率合成出比保底品质更高品质的卡牌，品质越高概率越低<li>若三张所选卡牌的名字相同且图鉴内有比第一张所选卡牌更高品质的同名卡牌时，合成结果必定为该同名卡牌但品质为更高品质中的最低品质</ul>';
						}else if(dialogs==_status.kzol_kzsg_dialogs16){
							help.style.display='';
							help_info.innerHTML='<span style="padding-left:5px;line-height:23px;">破阵：</span><ul><li>这是一个由玩家给出阵容来供其他玩家破解的地方<li>当获取来源为百度贴吧时，将阵容发布贴的评论转化为阵容供玩家破解，这些阵容信息是最新的<li>当获取来源为coding时，读取coding上阵容信息并将其转化为阵容供玩家破解，这些阵容信息是扩展ol作者根据阵容发布贴录入的，是给无法获取百度贴吧评论的设备使用的<li>移动端无法将获取来源设置为百度贴吧</ul>';
						}else if(dialogs==_status.kzol_kzsg_dialogs18){
							help.style.display='';
							help_info.innerHTML='<span style="padding-left:5px;line-height:23px;">竞技场：</span><ul><li>需要mySQL模块才能连接到竞技场数据库<li>连接后每一分钟更新一次连接<li>这是一个注册账号后可以与所有玩家对战的地方<li>初次登入时，需要上榜后才能进行攻打（初次设置守军后上榜）<li>设置守军时，同一支军队可被重复使用<li>若被挑战方没有守军，则视为挑战方获得胜利<li>非原卡战三国卡牌无法进入竞技场<li>竞技场对战时，牌序必定为混乱<li>所有对战榜（1V1、2V2等）共用一个排名<li>挑战成功后，挑战者与被挑战者互换排名<li>排名比自身低的也能被挑战，挑战成功后排名不变化</ul>';
						}else if(dialogs==_status.kzol_kzsg_dialogs19){
							help.style.display='';
							help_info.innerHTML='<ul><li>设置：<br>单击设置军队，双击撤下军队</ul>';
						}else if(dialogs==_status.kzol_kzsg_dialogs20){
							help.style.display='';
							help_info.innerHTML='<ul><li>屏幕左右两端有移动区域，将鼠标移动至其上（电脑）/长按（手机）即可移动</ul>';
						}else if(dialogs==_status.kzol_kzsg_dialogs21){
							help.style.display='';
							help_info.innerHTML='<span style="padding-left:5px;line-height:23px;">无尽模式：</span><ul><li>选择军队后开启无尽的旅途<li>无尽模式中，对战军队数等于初始选择的军队数且遭遇的军队的领将与成员全部随机（可突破领将带卡限制）<li>第一百波以后，敌方军队所有卡牌准备回合数-2<li>编辑含有正在进行无尽模式卡牌的军队时无法选择不处于无尽模式的卡牌<li>进行无尽模式的军队和卡牌在仓库中会有特殊标记（红边框）<li>无尽模式战斗结束后，类型非术非宝物的卡牌的血量会被保留到下一次战斗；若类型非术非宝物的卡牌已经死亡（位于墓地），则在下一次战斗中，其初始位置为墓地而不是牌堆<li>鼠标移动至（电脑）/长按（手机）军队时，军队展示栏内显示军队成员<li>点击军队可进入军队编辑界面<li>拖动（电脑）/长按军队显示红框后长按的手指不放，用另一只手指点击屏幕后拖动（手机）调整无尽军队的顺序<li>在军队显示栏内，点击已受伤卡牌可以对其进行治疗；每次无尽模式有5次治疗机会<li>无尽奖励与通关波数、初始选择军队数有关<li>第一百波奖励：'+game.kzol_kzsg_changeStr('团结',7)+'X1</ul>';
						}else if(dialogs==_status.kzol_kzsg_dialogs22){
							help.style.display='';
							help_info.innerHTML='<span style="padding-left:5px;line-height:23px;">挑战boss：</span><ul><li>双击进入挑战<li>右键（电脑）/长按（手机）可以查看boss技能<li>boss介绍框可下滑<li>boss右上角的难度可以可以通过点击调节<li>每天24:00自动结算次数</ul>';
						}else if(dialogs==_status.kzol_kzsg_dialogs23){
							help.style.display='';
							help_info.innerHTML='<ul><li>移动端修改卡牌图片后需刷新才能显示出来<li>禁用/删除DIY卡牌时，已拥有的该DIY卡牌将会变成民卫；解除禁用/重新创建后恢复<li>改变DIY卡牌属性时，已拥有的该DIY卡牌属性不会随之变化（图片显示、类型显示、简介显示、翻译显示不会随之改变）<li>若想添加卡战技能，需要通过无名杀扩展制作功能添加；技能名（非翻译）中含有“kzsg_”且技能mode属性中含有“kzsg”才能被检测为卡战技能，才能在DIY卡牌时被选择添加<li>DIY卡牌BOSS的挑战内容固定（每天限结算一次，困难限一支军队、普通限两支军队、简单限三支军队，结算无奖励）；若需改动挑战内容，需要通过无名杀扩展制作功能实现<li>添加的图片位于无名杀根目录/extension/扩展ol/kzsg_image内</ul>';
						}else if(dialogs==_status.kzol_kzsg_dialogs3){
							help.style.display='';
							help_info.innerHTML='<ul><li>头像按钮：<br>点击设置头像<li>空白区域：<br>退出头像界面</ul>';
						};
					};
					for(var i in dialogs){
						if(_status.kzol_kzsg_dialogs7!=undefined&&_status.kzol_kzsg_dialogs7.page_info==dialogs[i]) continue;
						if(_status.kzol_kzsg_dialogs15!=undefined&&_status.kzol_kzsg_dialogs15.pagea_info==dialogs[i]) continue;
						if(_status.kzol_kzsg_dialogs14!=undefined&&_status.kzol_kzsg_dialogs14.showResult_info==dialogs[i]) continue;
						if(_status.kzol_kzsg_dialogs9!=undefined&&_status.kzol_kzsg_dialogs9.info==dialogs[i]) continue;
						if(_status.kzol_kzsg_dialogs16!=undefined&&_status.kzol_kzsg_dialogs16.info==dialogs[i]) continue;
						if(_status.kzol_kzsg_dialogs18!=undefined&&_status.kzol_kzsg_dialogs18.info==dialogs[i]) continue;
						if(_status.kzol_kzsg_dialogs11!=undefined&&_status.kzol_kzsg_dialogs11.yjgk==dialogs[i]) continue;
						if(_status.kzol_kzsg_dialogs6!=undefined&&_status.kzol_kzsg_dialogs6.clearArmy==dialogs[i]){
							if(_status.kzol_kzsg_onChooseArmy!=undefined||
							_status.kzol_kzsg_onChoosePKArmy!=undefined||
							_status.kzol_kzsg_onChooseArmy_wj!=undefined) continue;
						};
						if(_status.kzol_kzsg_dialogs20!=undefined&&_status.kzol_kzsg_dialogs20.dialog==dialogs[i]){
							dialogs[i].show();
						}else{
							dialogs[i].style.display='';
						};
					};
				},100);
			},
			kzol_dialogs_open:function(dialogs){
				if(_status.kzol_kzsg_help!=undefined&&_status.kzol_kzsg_help_info!=undefined){
					var help=_status.kzol_kzsg_help;
					var help_div=help.link_div;
					var help_info=_status.kzol_kzsg_help_info;
					/*
					if(dialogs==_status.kzol_kzsg_dialogs3){
						help.style.display='';
						help_info.innerHTML='<ul><li>头像按钮：<br>点击设置头像<li>空白区域：<br>退出头像界面</ul>';
					};
					*/
				};
				for(var i in dialogs){
					ui.window.appendChild(dialogs[i]);
				};
			},
			kzol_kzsg_stratWar:function(){
				_status.kzol_kzsg_hadStart=true;
				game.kzol_kzsg_arrangePlayers();
				/*
				if(_status.kzol_kzsg_stopLoop==true){
					delete _status.kzol_kzsg_stopLoop;
					game.phaseLoop(game.players[0]);
					game.loop=game.kzol_loop;
					game.loop();
				};
				*/
				_status.kzol_kzsg_war.trigger('gameStart');
				game.phaseLoop(game.players[0]);
				game.delay(1);
				setTimeout(function(){
					game.loop=game.kzol_loop;
					game.loop();
				},2000);
			},
			kzol_kzsg_changeSeat:function(){
				//对打，死亡不影响上下的回合执行
				game.kzol_kzsg_arrangePlayers();
				if(_status.kzol_kzsg_stopLoop==true){
					delete _status.kzol_kzsg_stopLoop;
					game.phaseLoop(game.players[0]);
					game.loop=game.kzol_loop;
					game.loop();
				};
			},
			kzol_kzsg_arrangePlayers:function(){
				game.players=[];
				if(_status.kzol_kzsg_xs=='p'){
					var num=0;
					var func=function(){
						if(game.kzol_p_card[num]!=undefined) game.players.push(game.kzol_p_card[num]);
						if(game.kzol_e_card[num]!=undefined) game.players.push(game.kzol_e_card[num]);
						num++;
						if(game.kzol_p_card.length+game.kzol_e_card.length>game.players.length) func();
					};
					func();
				}else{
					var num=0;
					var func=function(){
						if(game.kzol_e_card[num]!=undefined) game.players.push(game.kzol_e_card[num]);
						if(game.kzol_p_card[num]!=undefined) game.players.push(game.kzol_p_card[num]);
						num++;
						if(game.kzol_p_card.length+game.kzol_e_card.length>game.players.length) func();
					};
					func();
				};
				var players=game.players;
				for(var i=0;i<players.length;i++){
					if(i==0){
						players[i].previousSeat=players[players.length-1];
					}
					else{
						players[i].previousSeat=players[i-1];
					}
					if(i==players.length-1){
						players[i].nextSeat=players[0];
					}
					else{
						players[i].nextSeat=players[i+1];
					}
				}
				for(var i=0;i<game.players.length;i++){
					if(i==0){
						game.players[i].previous=game.players[game.players.length-1];
					}
					else{
						game.players[i].previous=game.players[i-1];
					}
					if(i==game.players.length-1){
						game.players[i].next=game.players[0];
					}
					else{
						game.players[i].next=game.players[i+1];
					}
				}
				_status.roundStart=game.players[0];
			},
			kzol_kzsg_move:function(from,to,who,player){
				/*if(who=='p'){
					if(to==_status.kzol_kzsg_divs.p_wait&&game.kzol_p_card_wait.length>=1) to.scrollLeft=99999;
				}else{
					if(to==_status.kzol_kzsg_divs.e_wait&&game.kzol_e_card_wait.length>=1) to.scrollLeft=99999;
				};*/
				//var num=3;
				//if(lib.config.game_speed=='vvfast') num=9;
				
				//if(lib.config.mode_config.kzsg.yxsd==undefined) lib.config.mode_config.kzsg.yxsd=1;
				//var num_yxsd=3/parseInt(lib.config.mode_config.kzsg.yxsd);
				if(player!=undefined&&player.kzol_isMoving==true){
					game.delay(2);
				}else{
					game.delay(1);
				};
				if(lib.config.mode_config.kzsg.ydfj==undefined) lib.config.mode_config.kzsg.ydfj=2;
				var ydfj_num=parseInt(lib.config.mode_config.kzsg.ydfj);
				var func=function(){
					if(who=='p'){
						if(from==_status.kzol_kzsg_divs.p_cs&&to==_status.kzol_kzsg_divs.p_wait){
							var list=game.kzol_p_card_wait1;
							var list1=game.kzol_p_card_wait;
							if(list.length>0){
								var card=list[0];
								if(lib.config.kzol_kzsg.displayType=='random'||_status.kzol_kzsg_onPKC!=undefined) card=list.randomGet();
								var num=list1.length;
								var num1=num;
								if(to.scrollLeft>200) num1=num+1
								list1.push(card);
								list.remove(card);
								card.show();
								game.log(card,'（己方）进入了准备区域');
								setTimeout(function(){
									var num_left=from.offsetLeft-(10+(10+card.kzol_offsetWidth)*num1+to.offsetLeft-to.scrollLeft);
									card.style.left=from.offsetLeft+'px';
									card.style.top=from.offsetTop+'px';
									ui.arena.appendChild(card);
									card.kzol_timeId_num=0;
									card.kzol_timeId=setInterval(function(){
										card.kzol_timeId_num++;
										//card.style.left=(from.offsetLeft-num_left/ydfj_num*card.kzol_timeId_num)+'px';
										card.style.transform='translateX('+(-num_left/ydfj_num*card.kzol_timeId_num)+'px)';
										if(card.kzol_timeId_num==ydfj_num) clearInterval(card.kzol_timeId);
									},200/ydfj_num);
								},100);
								setTimeout(function(){
									clearInterval(card.kzol_timeId);
									delete card.kzol_timeId_num;
									card.style.transform='';
									card.style.left=(10+(10+card.kzol_offsetWidth)*num)+'px';
									card.style.top='0px';
									to.appendChild(card);
									setTimeout(function(){
										for(var i=0;i<list1.length;i++){
											var card1=list1[i];
											card1.style.left=(10+(10+card1.kzol_offsetWidth)*i)+'px';
										};
									},50);
								},750);
							};
						};
						if(from==_status.kzol_kzsg_divs.p_wait&&to==_status.kzol_kzsg_divs.p_war){
							var list=game.kzol_p_card_wait;
							var list1=game.kzol_p_card;
							if(list.length>0){
								var num1=list1.length;
								var card=list[list.length-1];
								if(player!=undefined) card=player;
								//from.scrollLeft=from.offsetWidth/2-card.offsetWidth/2+card.offsetLeft;
								var num=card.offsetLeft;
								list1.push(card);
								list.remove(card);
								game.log(card,'（己方）离开准备区域，进入了战斗区域');
								setTimeout(function(){
									var num_left=(from.offsetLeft+num)-from.scrollLeft-(to.offsetLeft+10+(10+card.offsetWidth)*num1-to.scrollLeft);
									var num_top=from.offsetTop-to.offsetTop;
									card.style.left=(from.offsetLeft+num-from.scrollLeft)+'px';
									card.style.top=from.offsetTop+'px';
									ui.arena.appendChild(card);
									card.kzol_timeId_num=0;
									card.kzol_timeId=setInterval(function(){
										card.kzol_timeId_num++;
										//card.style.left=((from.offsetLeft+num-from.scrollLeft)-num_left/ydfj_num*card.kzol_timeId_num)+'px';
										//card.style.top=(from.offsetTop-num_top/ydfj_num*card.kzol_timeId_num)+'px';
										card.style.transform='translate('+(-num_left/ydfj_num*card.kzol_timeId_num)+
										'px,'+(-num_top/ydfj_num*card.kzol_timeId_num)+'px)';
										if(card.kzol_timeId_num==ydfj_num) clearInterval(card.kzol_timeId);
									},200/ydfj_num);
								},100);
								setTimeout(function(){
									clearInterval(card.kzol_timeId);
									delete card.kzol_timeId_num;
									for(var i=0;i<list1.length;i++){
										var card1=list1[i];
										card1.style.left=(10+(10+card1.offsetWidth)*i)+'px';
									};
									for(var i=0;i<list.length;i++){
										var card2=list[i];
										card2.style.left=(10+(10+card2.kzol_offsetWidth)*i)+'px';
									};
									card.style.transform='';
									card.style.top='0px';
									to.appendChild(card);
									/*setTimeout(function(){
										if(card.kzsg.type=='术'){
											var skills=card.getSkills();
											for(var i=0;i<skills.length;i++){
												var skill=skills[i];
												if(lib.skill[skill].enable!=undefined&&lib.skill[skill].filter!=undefined&&lib.skill[skill].filter(card)){
													//card.useSkill(skill);
												};
											};
											card.die();
										};
									},450);*/
								},800);
								if(_status.kzol_kzsg_hadStart!=true){
									game.kzol_kzsg_stratWar();
								}else{
									game.kzol_kzsg_changeSeat();
								};
								if(_status.kzol_kzsg_interval1!=undefined) clearInterval(_status.kzol_kzsg_interval1);
								delete _status.kzol_kzsg_roundCount;
							};
						};
						if(from==_status.kzol_kzsg_divs.p_war&&to==_status.kzol_kzsg_divs.p_md&&player!=undefined){
							var list=game.kzol_p_card;
							var list1=game.kzol_p_card_md;
							var card=player;
							var num=card.offsetLeft;
							game.players.remove(card);
							list1.push(card);
							list.remove(card);
							game.kzol_kzsg_changeSeat();
							game.log(card,'（己方）离开战斗区域，进入了墓地');
							var num_left=(from.offsetLeft+num-from.scrollLeft)-to.offsetLeft;
							var num_top=from.offsetTop-to.offsetTop;
							card.style.left=(from.offsetLeft+num-from.scrollLeft)+'px';
							card.style.top=from.offsetTop+'px';
							ui.arena.appendChild(card);
							card.kzol_timeId_num=0;
							card.kzol_timeId=setInterval(function(){
								card.kzol_timeId_num++;
								card.style.left=((from.offsetLeft+num-from.scrollLeft)-num_left/ydfj_num*card.kzol_timeId_num)+'px';
								card.style.top=(from.offsetTop-num_top/ydfj_num*card.kzol_timeId_num)+'px';
								//card.style.transform='translate('+(-num_left/ydfj_num*card.kzol_timeId_num)+
								//'px,'+(-num_top/ydfj_num*card.kzol_timeId_num)+'px)';
								if(card.kzol_timeId_num==ydfj_num) clearInterval(card.kzol_timeId);
							},200/ydfj_num);
							setTimeout(function(){
								for(var i=0;i<list.length;i++){
									var card1=list[i];
									card1.style.left=(10+(10+card1.offsetWidth)*i)+'px';
								};
							},100);
							setTimeout(function(){
								clearInterval(card.kzol_timeId);
								delete card.kzol_timeId_num;
								card.hide();
							},800);
							setTimeout(function(){
								//card.style.transform='';
								setTimeout(function(){
									card.style.left='0px';
									card.style.top='0px';
									to.appendChild(card);
								},250);
								setTimeout(function(){
									var n1=game.kzol_p_card_wait.length;
									for(var i=0;i<game.kzol_p_card_wait.length;i++){
										if(game.kzol_p_card_wait[i].kzsg.type=='术'||game.kzol_p_card_wait[i].kzsg.type=='宝物') n1--;
									};
									if(game.kzol_p_card_wait1.length+n1+game.kzol_p_card.length==0){
										game.kzol_winWar(false);
									};
									var n2=game.kzol_e_card_wait.length;
									for(var i=0;i<game.kzol_e_card_wait.length;i++){
										if(game.kzol_e_card_wait[i].kzsg.type=='术'||game.kzol_e_card_wait[i].kzsg.type=='宝物') n2--;
									};
									if(game.kzol_e_card_wait1.length+n2+game.kzol_e_card.length==0){
										game.kzol_winWar(true);
									};
								},1250);
							},800);
							if(game.players.length==0){
								_status.kzol_kzsg_stopLoop=true;
								game.loop=function(){};
							};
						};
						if(from==_status.kzol_kzsg_divs.p_md&&to==_status.kzol_kzsg_divs.p_wait&&player!=undefined){
							var list=game.kzol_p_card_md;
							var list1=game.kzol_p_card_wait;
							var card=player;
							var num=list1.length;
							var num1=num;
							if(to.scrollLeft>200) num1=num+1
							list1.push(card);
							list.remove(card);
							card.show();
							game.log(card,'（己方）离开墓地，进入了准备区域');
							setTimeout(function(){
								var num_left=from.offsetLeft-(10+(10+card.kzol_offsetWidth)*num1+to.offsetLeft-to.scrollLeft);
								card.style.left=from.offsetLeft+'px';
								card.style.top=from.offsetTop+'px';
								ui.arena.appendChild(card);
								card.kzol_timeId_num=0;
								card.kzol_timeId=setInterval(function(){
									card.kzol_timeId_num++;
									//card.style.left=(from.offsetLeft-num_left/ydfj_num*card.kzol_timeId_num)+'px';
									card.style.transform='translateX('+(-num_left/ydfj_num*card.kzol_timeId_num)+'px)';
									if(card.kzol_timeId_num==ydfj_num) clearInterval(card.kzol_timeId);
								},200/ydfj_num);
							},100);
							setTimeout(function(){
								clearInterval(card.kzol_timeId);
								delete card.kzol_timeId_num;
								card.style.transform='';
								card.style.left=(10+(10+card.kzol_offsetWidth)*num)+'px';
								card.style.top='0px';
								to.appendChild(card);
							},800);
						};
						if(from==_status.kzol_kzsg_divs.p_wait&&to==_status.kzol_kzsg_divs.p_bw&&player!=undefined){
							var list=game.kzol_p_card_wait;
							var list1=game.kzol_p_card_bw;
							var card=player;
							var num=card.offsetLeft;
							list1.push(card);
							list.remove(card);
							game.log(card,'（己方）离开准备区域，进入了军备区');
							var num_left=(from.offsetLeft+num-from.scrollLeft)-to.offsetLeft;
							var num_top=from.offsetTop-to.offsetTop;
							card.style.left=(from.offsetLeft+num-from.scrollLeft)+'px';
							card.style.top=from.offsetTop+'px';
							ui.arena.appendChild(card);
							card.kzol_timeId_num=0;
							card.kzol_timeId=setInterval(function(){
								card.kzol_timeId_num++;
								//card.style.left=((from.offsetLeft+num-from.scrollLeft)-num_left/ydfj_num*card.kzol_timeId_num)+'px';
								//card.style.top=(from.offsetTop-num_top/ydfj_num*card.kzol_timeId_num)+'px';
								card.style.transform='translate('+(-num_left/ydfj_num*card.kzol_timeId_num)+
								'px,'+(-num_top/ydfj_num*card.kzol_timeId_num)+'px)';
								if(card.kzol_timeId_num==ydfj_num) clearInterval(card.kzol_timeId);
							},200/ydfj_num);
							setTimeout(function(){
								for(var i=0;i<list.length;i++){
									var card1=list[i];
									card1.style.left=(10+(10+card1.offsetWidth)*i)+'px';
								};
							},100);
							setTimeout(function(){
								clearInterval(card.kzol_timeId);
								delete card.kzol_timeId_num;
							},300);
							setTimeout(function(){
								card.style.transform='';
								card.style.left='0px';
								card.style.top='0px';
								to.appendChild(card);
								for(var i=0;i<list1.length;i++){
									var card1=list1[i];
									card1.style.left=(card1.offsetWidth*i)+'px';
								};
							},800);
						};
						if(from==_status.kzol_kzsg_divs.p_bw&&to==_status.kzol_kzsg_divs.p_md&&player!=undefined){
							var list=game.kzol_p_card_bw;
							var list1=game.kzol_p_card_md;
							var card=player;
							var num=card.offsetLeft;
							list1.push(card);
							list.remove(card);
							game.log(card,'（己方）离开军备区，进入了墓地');
							var num_left=(from.offsetLeft+num-from.scrollLeft)-to.offsetLeft;
							var num_top=from.offsetTop-to.offsetTop;
							card.style.left=(from.offsetLeft+num-from.scrollLeft)+'px';
							card.style.top=from.offsetTop+'px';
							ui.arena.appendChild(card);
							card.kzol_timeId_num=0;
							card.kzol_timeId=setInterval(function(){
								card.kzol_timeId_num++;
								//card.style.left=((from.offsetLeft+num-from.scrollLeft)-num_left/ydfj_num*card.kzol_timeId_num)+'px';
								//card.style.top=(from.offsetTop-num_top/ydfj_num*card.kzol_timeId_num)+'px';
								card.style.transform='translate('+(-num_left/ydfj_num*card.kzol_timeId_num)+
								'px,'+(-num_top/ydfj_num*card.kzol_timeId_num)+'px)';
								if(card.kzol_timeId_num==ydfj_num) clearInterval(card.kzol_timeId);
							},200/ydfj_num);
							setTimeout(function(){
								for(var i=0;i<list.length;i++){
									var card1=list[i];
									card1.style.left=(card1.offsetWidth*i)+'px';
								};
							},100);
							setTimeout(function(){
								clearInterval(card.kzol_timeId);
								delete card.kzol_timeId_num;
								card.hide();
							},800);
							setTimeout(function(){
								card.style.transform='';
								card.style.left='0px';
								card.style.top='0px';
								to.appendChild(card);
							},800);
						};
					}else{
						if(from==_status.kzol_kzsg_divs.e_cs&&to==_status.kzol_kzsg_divs.e_wait){
							var list=game.kzol_e_card_wait1;
							var list1=game.kzol_e_card_wait;
							if(list.length>0){
								var card=list[0];
								if(lib.config.kzol_kzsg.displayType=='random'||_status.kzol_kzsg_onPKC!=undefined) card=list.randomGet();
								var num=list1.length;
								var num1=num;
								if(to.scrollLeft>200) num1=num+1
								list1.push(card);
								list.remove(card);
								card.show();
								game.log(card,'（敌方）进入了准备区域');
								setTimeout(function(){
									var num_left=from.offsetLeft-(10+(10+card.kzol_offsetWidth)*num1+to.offsetLeft-to.scrollLeft);
									card.style.left=from.offsetLeft+'px';
									card.style.top=from.offsetTop+'px';
									ui.arena.appendChild(card);
									card.kzol_timeId_num=0;
									card.kzol_timeId=setInterval(function(){
										card.kzol_timeId_num++;
										//card.style.left=(from.offsetLeft-num_left/ydfj_num*card.kzol_timeId_num)+'px';
										card.style.transform='translateX('+(-num_left/ydfj_num*card.kzol_timeId_num)+'px)';
										if(card.kzol_timeId_num==ydfj_num) clearInterval(card.kzol_timeId);
									},200/ydfj_num);
								},100);
								setTimeout(function(){
									clearInterval(card.kzol_timeId);
									delete card.kzol_timeId_num;
									card.style.transform='';
									card.style.left=(10+(10+card.kzol_offsetWidth)*num)+'px';
									card.style.top='0px';
									to.appendChild(card);
									setTimeout(function(){
										for(var i=0;i<list1.length;i++){
											var card1=list1[i];
											card1.style.left=(10+(10+card1.kzol_offsetWidth)*i)+'px';
										};
									},50);
								},750);
							};
						};
						if(from==_status.kzol_kzsg_divs.e_wait&&to==_status.kzol_kzsg_divs.e_war){
							var list=game.kzol_e_card_wait;
							var list1=game.kzol_e_card;
							if(list.length>0){
								var num1=list1.length;
								var card=list[list.length-1];
								if(player!=undefined) card=player;
								//from.scrollLeft=from.offsetWidth/2-card.offsetWidth/2+card.offsetLeft;
								var num=card.offsetLeft;
								list1.push(card);
								list.remove(card);
								game.log(card,'（敌方）离开准备区域，进入了战斗区域');
								setTimeout(function(){
									var num_left=(from.offsetLeft+num)-from.scrollLeft-(to.offsetLeft+10+(10+card.offsetWidth)*num1-to.scrollLeft);
									if(_status.kzol_kzsg_onbattle!=undefined&&_status.kzol_kzsg_onbattle.center==true){
										num_left=(from.offsetLeft+num)-from.scrollLeft-(to.offsetLeft+(to.offsetWidth-card.offsetWidth)*0.5-to.scrollLeft);
									};
									var num_top=from.offsetTop-to.offsetTop;
									card.style.left=(from.offsetLeft+num-from.scrollLeft)+'px';
									card.style.top=from.offsetTop+'px';
									ui.arena.appendChild(card);
									card.kzol_timeId_num=0;
									card.kzol_timeId=setInterval(function(){
										card.kzol_timeId_num++;
										//card.style.left=((from.offsetLeft+num-from.scrollLeft)-num_left/ydfj_num*card.kzol_timeId_num)+'px';
										//card.style.top=(from.offsetTop-num_top/ydfj_num*card.kzol_timeId_num)+'px';
										card.style.transform='translate('+(-num_left/ydfj_num*card.kzol_timeId_num)+
										'px,'+(-num_top/ydfj_num*card.kzol_timeId_num)+'px)';
										if(card.kzol_timeId_num==ydfj_num) clearInterval(card.kzol_timeId);
									},200/ydfj_num);
								},100);
								setTimeout(function(){
									clearInterval(card.kzol_timeId);
									delete card.kzol_timeId_num;
									for(var i=0;i<list1.length;i++){
										var card1=list1[i];
										if(_status.kzol_kzsg_onbattle!=undefined&&_status.kzol_kzsg_onbattle.center==true){
											card1.style.left=((to.offsetWidth-card1.offsetWidth)*0.5)+'px';
										}else{
											card1.style.left=(10+(10+card1.offsetWidth)*i)+'px';
										};
									};
									for(var i=0;i<list.length;i++){
										var card2=list[i];
										card2.style.left=(10+(10+card2.kzol_offsetWidth)*i)+'px';
									};
									card.style.transform='';
									card.style.top='0px';
									to.appendChild(card);
									/*setTimeout(function(){
										if(card.kzsg.type=='术'){
											var skills=card.getSkills();
											for(var i=0;i<skills.length;i++){
												var skill=skills[i];
												if(lib.skill[skill].enable!=undefined&&lib.skill[skill].filter!=undefined&&lib.skill[skill].filter(card)){
													//card.useSkill(skill);
												};
											};
											card.die();
										};
									},450);*/
								},800);
								if(_status.kzol_kzsg_hadStart!=true){
									game.kzol_kzsg_stratWar();
								}else{
									game.kzol_kzsg_changeSeat();
								};
								if(_status.kzol_kzsg_interval1!=undefined) clearInterval(_status.kzol_kzsg_interval1);
								delete _status.kzol_kzsg_roundCount;
							};
						};
						if(from==_status.kzol_kzsg_divs.e_war&&to==_status.kzol_kzsg_divs.e_md&&player!=undefined){
							var list=game.kzol_e_card;
							var list1=game.kzol_e_card_md;
							var card=player;
							var num=card.offsetLeft;
							game.players.remove(card);
							list1.push(card);
							list.remove(card);
							game.kzol_kzsg_changeSeat();
							game.log(card,'（敌方）离开战斗区域，进入了墓地');
							var num_left=(from.offsetLeft+num-from.scrollLeft)-to.offsetLeft;
							var num_top=from.offsetTop-to.offsetTop;
							card.style.left=(from.offsetLeft+num-from.scrollLeft)+'px';
							card.style.top=from.offsetTop+'px';
							ui.arena.appendChild(card);
							card.kzol_timeId_num=0;
							card.kzol_timeId=setInterval(function(){
								card.kzol_timeId_num++;
								card.style.left=((from.offsetLeft+num-from.scrollLeft)-num_left/ydfj_num*card.kzol_timeId_num)+'px';
								card.style.top=(from.offsetTop-num_top/ydfj_num*card.kzol_timeId_num)+'px';
								//card.style.transform='translate('+(-num_left/ydfj_num*card.kzol_timeId_num)+
								//'px,'+(-num_top/ydfj_num*card.kzol_timeId_num)+'px)';
								if(card.kzol_timeId_num==ydfj_num) clearInterval(card.kzol_timeId);
							},200/ydfj_num);
							setTimeout(function(){
								for(var i=0;i<list.length;i++){
									var card1=list[i];
									if(_status.kzol_kzsg_onbattle!=undefined&&_status.kzol_kzsg_onbattle.center==true){
										card1.style.left=((from.offsetWidth-card1.offsetWidth)*0.5)+'px';
									}else{
										card1.style.left=(10+(10+card1.offsetWidth)*i)+'px';
									};
								};
							},100);
							setTimeout(function(){
								clearInterval(card.kzol_timeId);
								delete card.kzol_timeId_num;
								card.hide();
							},800);
							setTimeout(function(){
								//card.style.transform='';
								setTimeout(function(){
									card.style.left='0px';
									card.style.top='0px';
									to.appendChild(card);
								},250);
								setTimeout(function(){
									var n1=game.kzol_p_card_wait.length;
									for(var i=0;i<game.kzol_p_card_wait.length;i++){
										if(game.kzol_p_card_wait[i].kzsg.type=='术'||game.kzol_p_card_wait[i].kzsg.type=='宝物') n1--;
									};
									if(game.kzol_p_card_wait1.length+n1+game.kzol_p_card.length==0){
										game.kzol_winWar(false);
									};
									var n2=game.kzol_e_card_wait.length;
									for(var i=0;i<game.kzol_e_card_wait.length;i++){
										if(game.kzol_e_card_wait[i].kzsg.type=='术'||game.kzol_e_card_wait[i].kzsg.type=='宝物') n2--;
									};
									if(game.kzol_e_card_wait1.length+n2+game.kzol_e_card.length==0){
										game.kzol_winWar(true);
									};
								},1250);
							},800);
							if(game.players.length==0){
								_status.kzol_kzsg_stopLoop=true;
								game.loop=function(){};
							};
						};
						if(from==_status.kzol_kzsg_divs.e_md&&to==_status.kzol_kzsg_divs.e_wait&&player!=undefined){
							var list=game.kzol_e_card_md;
							var list1=game.kzol_e_card_wait;
							var card=player;
							var num=list1.length;
							var num1=num;
							if(to.scrollLeft>200) num1=num+1
							list1.push(card);
							list.remove(card);
							card.show();
							game.log(card,'（敌方）离开墓地，进入了准备区域');
							setTimeout(function(){
								var num_left=from.offsetLeft-(10+(10+card.kzol_offsetWidth)*num1+to.offsetLeft-to.scrollLeft);
								card.style.left=from.offsetLeft+'px';
								card.style.top=from.offsetTop+'px';
								ui.arena.appendChild(card);
								card.kzol_timeId_num=0;
								card.kzol_timeId=setInterval(function(){
									card.kzol_timeId_num++;
									//card.style.left=(from.offsetLeft-num_left/ydfj_num*card.kzol_timeId_num)+'px';
									card.style.transform='translateX('+(-num_left/ydfj_num*card.kzol_timeId_num)+'px)';
									if(card.kzol_timeId_num==ydfj_num) clearInterval(card.kzol_timeId);
								},200/ydfj_num);
							},100);
							setTimeout(function(){
								clearInterval(card.kzol_timeId);
								delete card.kzol_timeId_num;
								card.style.transform='';
								card.style.left=(10+(10+card.kzol_offsetWidth)*num)+'px';
								card.style.top='0px';
								to.appendChild(card);
							},800);
						};
						if(from==_status.kzol_kzsg_divs.e_wait&&to==_status.kzol_kzsg_divs.e_bw&&player!=undefined){
							var list=game.kzol_e_card_wait;
							var list1=game.kzol_e_card_bw;
							var card=player;
							var num=card.offsetLeft;
							list1.push(card);
							list.remove(card);
							game.log(card,'（敌方）离开准备区域，进入了军备区');
							var num_left=(from.offsetLeft+num-from.scrollLeft)-to.offsetLeft;
							var num_top=from.offsetTop-to.offsetTop;
							card.style.left=(from.offsetLeft+num-from.scrollLeft)+'px';
							card.style.top=from.offsetTop+'px';
							ui.arena.appendChild(card);
							card.kzol_timeId_num=0;
							card.kzol_timeId=setInterval(function(){
								card.kzol_timeId_num++;
								//card.style.left=((from.offsetLeft+num-from.scrollLeft)-num_left/ydfj_num*card.kzol_timeId_num)+'px';
								//card.style.top=(from.offsetTop-num_top/ydfj_num*card.kzol_timeId_num)+'px';
								card.style.transform='translate('+(-num_left/ydfj_num*card.kzol_timeId_num)+
								'px,'+(-num_top/ydfj_num*card.kzol_timeId_num)+'px)';
								if(card.kzol_timeId_num==ydfj_num) clearInterval(card.kzol_timeId);
							},200/ydfj_num);
							setTimeout(function(){
								for(var i=0;i<list.length;i++){
									var card1=list[i];
									card1.style.left=(10+(10+card1.offsetWidth)*i)+'px';
								};
							},100);
							setTimeout(function(){
								clearInterval(card.kzol_timeId);
								delete card.kzol_timeId_num;
							},300);
							setTimeout(function(){
								card.style.transform='';
								card.style.left='0px';
								card.style.top='0px';
								to.appendChild(card);
								for(var i=0;i<list1.length;i++){
									var card1=list1[i];
									card1.style.left=(card1.offsetWidth*i)+'px';
								};
							},800);
						};
						if(from==_status.kzol_kzsg_divs.e_bw&&to==_status.kzol_kzsg_divs.e_md&&player!=undefined){
							var list=game.kzol_e_card_bw;
							var list1=game.kzol_e_card_md;
							var card=player;
							var num=card.offsetLeft;
							list1.push(card);
							list.remove(card);
							game.log(card,'（敌方）离开军备区，进入了墓地');
							var num_left=(from.offsetLeft+num-from.scrollLeft)-to.offsetLeft;
							var num_top=from.offsetTop-to.offsetTop;
							card.style.left=(from.offsetLeft+num-from.scrollLeft)+'px';
							card.style.top=from.offsetTop+'px';
							ui.arena.appendChild(card);
							card.kzol_timeId_num=0;
							card.kzol_timeId=setInterval(function(){
								card.kzol_timeId_num++;
								//card.style.left=((from.offsetLeft+num-from.scrollLeft)-num_left/ydfj_num*card.kzol_timeId_num)+'px';
								//card.style.top=(from.offsetTop-num_top/ydfj_num*card.kzol_timeId_num)+'px';
								card.style.transform='translate('+(-num_left/ydfj_num*card.kzol_timeId_num)+
								'px,'+(-num_top/ydfj_num*card.kzol_timeId_num)+'px)';
								if(card.kzol_timeId_num==ydfj_num) clearInterval(card.kzol_timeId);
							},200/ydfj_num);
							setTimeout(function(){
								for(var i=0;i<list.length;i++){
									var card1=list[i];
									card1.style.left=(card1.offsetWidth*i)+'px';
								};
							},100);
							setTimeout(function(){
								clearInterval(card.kzol_timeId);
								delete card.kzol_timeId_num;
								card.hide();
							},800);
							setTimeout(function(){
								card.style.transform='';
								card.style.left='0px';
								card.style.top='0px';
								to.appendChild(card);
							},800);
						};
					};
					if(card!=undefined){
						card.kzol_isMoving=true;
						_status.kzol_kzsg_isMoving=true;
						setTimeout(function(){
							delete card.kzol_isMoving;
							delete _status.kzol_kzsg_isMoving;
						},800);
					};
				};
				if(player!=undefined&&player.kzol_isMoving==true){
					setTimeout(func,800);
				}else{
					func();
				};
			},
			kzol_playerAwar:function(p_armys,e_armys,bool){
				//ui.arena.hide();
				game.roundNumber=1;
				delete _status.kzol_kzsg_hadover;
				if(lib.config.mode_config.kzsg.kzol_weather==true){
					if(game.changeWeather){
						ui.weather.style.display='';
						game.changeWeather();
					};
				};
				ui.cardPileButton.style.display='';
				ui.kzsg_giveup.style.display='';
				ui.pause.style.display='';
				ui.create.cardsAsync();
				_status.kzol_onWar=true;
				if(_status.kzol_kzsg_onbattle!=undefined){
					if(_status.kzol_kzsg_onbattle.p_hp!=undefined){
						game.kzol_p_maxHp=_status.kzol_kzsg_onbattle.p_hp;
						game.kzol_p_hp=_status.kzol_kzsg_onbattle.p_hp;
					}else if(_status.kzol_kzsg_onbattle.limit!=undefined){
						game.kzol_p_maxHp=30*_status.kzol_kzsg_onbattle.limit;
						game.kzol_p_hp=30*_status.kzol_kzsg_onbattle.limit;
					};
					if(_status.kzol_kzsg_onbattle.e_hp!=undefined){
						game.kzol_e_maxHp=_status.kzol_kzsg_onbattle.e_hp;
						game.kzol_e_hp=_status.kzol_kzsg_onbattle.e_hp;
					}else if(_status.kzol_kzsg_onbattle.limit!=undefined){
						game.kzol_e_maxHp=30*_status.kzol_kzsg_onbattle.limit;
						game.kzol_e_hp=30*_status.kzol_kzsg_onbattle.limit;
					};
				};
				if(_status.kzol_kzsg_onWJbattle==true){
					game.kzol_p_maxHp=30*lib.config.kzol_kzsg.army_wj_num;
					game.kzol_e_maxHp=30*lib.config.kzol_kzsg.army_wj_num;
					game.kzol_p_hp=30*lib.config.kzol_kzsg.army_wj_num;
					game.kzol_e_hp=30*lib.config.kzol_kzsg.army_wj_num;
				};
				_status.kzol_kzsg_xs=['p','e'].randomGet();
				var divs=_status.kzol_kzsg_divs;
				var p_card=[];
				var e_card=[];
				var p_card1=[];
				var e_card1=[];
				var p_card2=[];
				var e_card2=[];
				for(var a in p_armys){
					var p_armys1=p_armys[a];
					for(var j in p_armys1.leader){
						if(lib.config.kzol_kzsg.card[p_armys1.leader[j]]!=undefined){
							p_card1.push(p_armys1.leader[j]);
						}else{
							p_card1.push(p_armys1.leader[j]);
						};
					};
					for(var j in p_armys1.number){
						if(lib.config.kzol_kzsg.card[p_armys1.number[j]]!=undefined){
							p_card2.push(p_armys1.number[j]);
						}else{
							p_card2.push(p_armys1.number[j]);
						};
					};
					var p_func=function(){
						if(p_card1.length>0){
							if(bool==true){
								var card=p_card1.randomGet();
							}else{
								var card=p_card1[0];
							};
							p_card1.remove(card);
							p_card.push(card);
							if(p_card1.length>0) p_func();
						};
					};
					var p_func1=function(){
						if(p_card2.length>0){
							if(bool==true){
								var card=p_card2.randomGet();
							}else{
								var card=p_card2[0];
							};
							p_card2.remove(card);
							p_card.push(card);
							if(p_card2.length>0) p_func1();
						};
					};
					p_func();
					p_func1();
				};
				for(var a in e_armys){
					var e_armys1=e_armys[a];
					for(var j in e_armys1.leader){
						if(lib.config.kzol_kzsg.card[e_armys1.leader[j]]!=undefined){
							e_card1.push(e_armys1.leader[j]);
						}else{
							e_card1.push(e_armys1.leader[j]);
						};
					};
					for(var j in e_armys1.number){
						if(lib.config.kzol_kzsg.card[e_armys1.number[j]]!=undefined){
							e_card2.push(e_armys1.number[j]);
						}else{
							e_card2.push(e_armys1.number[j]);
						};
					};
					var e_func=function(){
						if(e_card1.length>0){
							if(bool==true){
								var card=e_card1.randomGet();
							}else{
								var card=e_card1[0];
							};
							e_card1.remove(card);
							e_card.push(card);
							if(e_card1.length>0) e_func();
						};
					};
					var e_func1=function(){
						if(e_card2.length>0){
							if(bool==true){
								var card=e_card2.randomGet();
							}else{
								var card=e_card2[0];
							};
							e_card2.remove(card);
							e_card.push(card);
							if(e_card2.length>0) e_func1();
						};
					};
					e_func();
					e_func1();
				};
				for(var i=0;i<p_card.length;i++){
					var card=lib.config.kzol_kzsg.card[p_card[i]];
					if(card==undefined) card=lib.kzol_kzsg_card[p_card[i]];
					var player=ui.create.player1(_status.kzol_kzsg_divs.p_cs,{
						height:_status.kzol_kzsg_divs.p_cs.offsetHeight,
						width:_status.kzol_kzsg_divs.p_cs.offsetWidth,
						top:0,
						left:0,
					},true).animate('start');
					player.kzol_offsetWidth=_status.kzol_kzsg_divs.p_cs.offsetWidth;
					player.getId();
					player.init(card.name+card.quailty);
					var prepareRound=[3,4,5,6].randomGet();
					var attack=[1,2].randomGet();
					prepareRound=card.prepareRound;
					attack=card.attack;
					player.maxHp=card.hp;
					player.hp=card.hp;
					if(card.onWJ!=undefined&&_status.kzol_kzsg_onWJbattle==true){
						attack=card.attack_wj;
						prepareRound=card.prepareRound_wj;
						player.hp=card.hp_wj;
						player.kzol_kzsg_wjLink=p_card[i];
					};
					player.clearSkills();
					player.addSkill(card.skills);
					player.group=card.group;
					player.update();
					player.node.prepareRound.innerHTML=prepareRound;
					player.node.attack.innerHTML=attack;
					player.node.type.innerHTML=game.kzol_kzsg_changeStr(lib.kzol_kzsg_card[player.name].type,card.quailty);
					if(lib.kzol_kzsg_card[player.name].type=='术'||lib.kzol_kzsg_card[player.name].type=='宝物'){
						player.node.prepareRound.style.bottom='5px';
						player.node.prepareRound.style.left=(player.offsetWidth-35)+'px';
						player.node.prepareRound_str.style.bottom='10px';
						player.node.prepareRound_str.style.left=(player.offsetWidth-20)+'px';
						player.node.attack.hide();
						player.node.attack_str.hide();
						player.node.count.hide();
					};
					player.hide();
					player.kzsg={};
					player.kzsg.prepareRound=prepareRound;
					player.kzsg.prepareRound1=prepareRound;
					player.kzsg.attack=attack;
					player.kzsg.type=lib.kzol_kzsg_card[player.name].type;
					//player.die=function(){};
					player.getLeft=function(){
						if(this.parentNode==undefined) return this.offsetLeft;
						return -this.parentNode.scrollLeft+this.offsetLeft+this.parentNode.offsetLeft;
					};
					player.getTop=function(){
						if(this.parentNode==undefined) return this.offsetTop;
						return this.offsetTop+this.parentNode.offsetTop;
					};
					player.$draw=function(num,init,config){
						if(init!==false&&init!=='nobroadcast'){
							game.broadcast(function(player,num,init,config){
								player.$draw(num,init,config)
							},this,num,init,config);
						}
						var cards,node;
						if(get.itemtype(num)=='cards'){
							cards=num;
							num=cards.length;
						}
						else if(get.itemtype(num)=='card'){
							cards=[num];
							num=1;
						}
						if(init!==false){
							if(cards){
								game.addVideo('drawCard',this,get.cardsInfo(cards));
							}
							else{
								game.addVideo('draw',this,num);
							}
						}
						if(cards){
							cards=cards.slice(0);
							node=cards.shift().copy('thrown','drawingcard');
						}
						else{
							node=ui.create.div('.card.thrown.drawingcard');
						}
						node.fixed=true;
						node.hide();
            
						var dx,dy;
						if(game.chess){
							var rect=this.getBoundingClientRect();
            
							if(rect.left<=80){
								dx=-10;
								if(rect.top<=80){
									dy=-10;
								}
								else if(rect.top+rect.height+80>=ui.chessContainer.offsetHeight){
									dy=10;
								}
								else{
									dy=0;
								}
							}
							else if(rect.left+rect.width+80>=ui.chessContainer.offsetWidth){
								dx=10;
								if(rect.top<=80){
									dy=-10;
								}
								else if(rect.top+rect.height+80>=ui.chessContainer.offsetHeight){
									dy=10;
								}
								else{
									dy=0;
								}
							}
							else if(rect.top<=80){
								dx=0;
								dy=-10;
							}
							else if(rect.top+rect.height+80>=ui.chessContainer.offsetHeight){
								dx=0;
								dy=10;
							}
							else{
								dx=rect.left+this.offsetWidth/2-ui.arena.offsetWidth/2;
								dy=rect.top+this.offsetHeight/2-ui.arena.offsetHeight/2;
							}
            
							var coeff=240/Math.sqrt(dx*dx+dy*dy);
							dx*=coeff;
							dy*=coeff;
            
							node.style.left=(this.getLeft()+this.offsetWidth/2-52-dx)+'px';
							node.style.top=(this.getTop()+this.offsetHeight/2-52-dy)+'px';
							this.parentNode.appendChild(node);
						}
						else{
							if(this.parentNode!=undefined) this.parentNode.appendChild(node);
							node.style.left='calc(50% - 52px)';
							node.style.top='calc(50% - 52px)';
            
							dx=this.offsetLeft+this.offsetWidth/2-52-node.offsetLeft;
							dy=this.offsetHeight/2-52-node.offsetTop;
            
							if(get.is.mobileMe(this)){
								dx+=get.cardOffset();
								if(ui.arena.classList.contains('oblongcard')){
									dy-=16;
								}
							}
						}
						node.style.transitionDuration='0.8s';
						ui.refresh(node);
						if(typeof num=='number'&&init!==false){
							config={
								total:num,
								current:1
							}
						}
						if(config&&config.total>1){
							var total=config.total,current=config.current;
							var dxtotal;
							if(total<=5){
								dxtotal=Math.min(80,(total-1)*20);
								dx+=-dxtotal+2*dxtotal*(current-1)/(total-1)
							}
							else{
								var total2=Math.floor(total/2);
								if(current<=total2){
									total=total2;
									dy-=20;
								}
								else{
									current-=total2;
									total-=total2;
									dy+=20;
								}
								dxtotal=Math.min(80,(total-1)*20);
								dx+=-dxtotal+2*dxtotal*(current-1)/(total-1)
							}
							config.current++;
						}
						if(node.style.transform&&node.style.transform!='none'&&node.style.transform.indexOf('translate')==-1){
							node.style.transform+=' translate('+dx+'px,'+dy+'px)';
						}
						else{
							node.style.transform='translate('+dx+'px,'+dy+'px)';
						}
						node.show();
            
						node.listenTransition(function(){
							node.style.transitionDuration='0.5s';
							ui.refresh(node);
							node.delete();
						});
						var that=this;
						if(num&&num>1){
							if(config&&config.total>1){
								setTimeout(function(){
									if(cards){
										that.$draw(cards,false,config)
									}
									else{
										that.$draw(num-1,false,config)
									}
								},50)
							}
							else{
								setTimeout(function(){
									if(cards){
										that.$draw(cards,false,config)
									}
									else{
										that.$draw(num-1,false,config)
									}
								},200);
							}
						}
					};
					if(player.hp=='X'){
						player.node.prepareRound.hide();
						player.node.prepareRound_str.hide();
						game.kzol_p_card_md.push(player);
					}else{
						game.kzol_p_card_wait1.push(player);
					};
				};
				for(var i=0;i<e_card.length;i++){
					var card=lib.config.kzol_kzsg.card[e_card[i]];
					if(card==undefined) card=lib.kzol_kzsg_card[e_card[i]];
					var player=ui.create.player1(_status.kzol_kzsg_divs.e_cs,{
						height:_status.kzol_kzsg_divs.e_cs.offsetHeight,
						width:_status.kzol_kzsg_divs.e_cs.offsetWidth,
						top:0,
						left:0,
					},true).animate('start');
					player.kzol_offsetWidth=_status.kzol_kzsg_divs.e_cs.offsetWidth;
					player.getId();
					player.init(card.name+card.quailty);
					var prepareRound=[3,4,5,6].randomGet();
					var attack=[1,2].randomGet();
					prepareRound=card.prepareRound;
					attack=card.attack;
					player.maxHp=card.hp;
					player.hp=card.hp;
					if(_status.kzol_kzsg_onWJbattle==true&&lib.config.kzol_kzsg.dxl>100){
						if(prepareRound>2){
							prepareRound-=2;
						}else{
							prepareRound=0;
						};
					};
					player.clearSkills();
					player.addSkill(card.skills);
					player.group=card.group;
					player.update();
					player.node.prepareRound.innerHTML=prepareRound;
					player.node.attack.innerHTML=attack;
					player.node.type.innerHTML=game.kzol_kzsg_changeStr(lib.kzol_kzsg_card[player.name].type,card.quailty);
					if(lib.kzol_kzsg_card[player.name].type=='术'||lib.kzol_kzsg_card[player.name].type=='宝物'){
						player.node.prepareRound.style.bottom='5px';
						player.node.prepareRound.style.left=(player.offsetWidth-35)+'px';
						player.node.prepareRound_str.style.bottom='10px';
						player.node.prepareRound_str.style.left=(player.offsetWidth-20)+'px';
						player.node.attack.hide();
						player.node.attack_str.hide();
						player.node.count.hide();
					};
					player.hide();
					player.kzsg={};
					player.kzsg.prepareRound=prepareRound;
					player.kzsg.prepareRound1=prepareRound;
					player.kzsg.attack=attack;
					player.kzsg.type=lib.kzol_kzsg_card[player.name].type;
					//player.die=function(){};
					player.getLeft=function(){
						if(this.parentNode==undefined) return this.offsetLeft;
						return -this.parentNode.scrollLeft+this.offsetLeft+this.parentNode.offsetLeft;
					};
					player.getTop=function(){
						if(this.parentNode==undefined) return this.offsetTop;
						return this.offsetTop+this.parentNode.offsetTop;
					};
					player.$draw=function(num,init,config){
						if(init!==false&&init!=='nobroadcast'){
							game.broadcast(function(player,num,init,config){
								player.$draw(num,init,config)
							},this,num,init,config);
						}
						var cards,node;
						if(get.itemtype(num)=='cards'){
							cards=num;
							num=cards.length;
						}
						else if(get.itemtype(num)=='card'){
							cards=[num];
							num=1;
						}
						if(init!==false){
							if(cards){
								game.addVideo('drawCard',this,get.cardsInfo(cards));
							}
							else{
								game.addVideo('draw',this,num);
							}
						}
						if(cards){
							cards=cards.slice(0);
							node=cards.shift().copy('thrown','drawingcard');
						}
						else{
							node=ui.create.div('.card.thrown.drawingcard');
						}
						node.fixed=true;
						node.hide();
            
						var dx,dy;
						if(game.chess){
							var rect=this.getBoundingClientRect();
            
							if(rect.left<=80){
								dx=-10;
								if(rect.top<=80){
									dy=-10;
								}
								else if(rect.top+rect.height+80>=ui.chessContainer.offsetHeight){
									dy=10;
								}
								else{
									dy=0;
								}
							}
							else if(rect.left+rect.width+80>=ui.chessContainer.offsetWidth){
								dx=10;
								if(rect.top<=80){
									dy=-10;
								}
								else if(rect.top+rect.height+80>=ui.chessContainer.offsetHeight){
									dy=10;
								}
								else{
									dy=0;
								}
							}
							else if(rect.top<=80){
								dx=0;
								dy=-10;
							}
							else if(rect.top+rect.height+80>=ui.chessContainer.offsetHeight){
								dx=0;
								dy=10;
							}
							else{
								dx=rect.left+this.offsetWidth/2-ui.arena.offsetWidth/2;
								dy=rect.top+this.offsetHeight/2-ui.arena.offsetHeight/2;
							}
            
							var coeff=240/Math.sqrt(dx*dx+dy*dy);
							dx*=coeff;
							dy*=coeff;
            
							node.style.left=(this.getLeft()+this.offsetWidth/2-52-dx)+'px';
							node.style.top=(this.getTop()+this.offsetHeight/2-52-dy)+'px';
							this.parentNode.appendChild(node);
						}
						else{
							if(this.parentNode!=undefined) this.parentNode.appendChild(node);
							node.style.left='calc(50% - 52px)';
							node.style.top='calc(50% - 52px)';
            
							dx=this.offsetLeft+this.offsetWidth/2-52-node.offsetLeft;
							dy=this.offsetHeight/2-52-node.offsetTop;
            
							if(get.is.mobileMe(this)){
								dx+=get.cardOffset();
								if(ui.arena.classList.contains('oblongcard')){
									dy-=16;
								}
							}
						}
						node.style.transitionDuration='0.8s';
						ui.refresh(node);
						if(typeof num=='number'&&init!==false){
							config={
								total:num,
								current:1
							}
						}
						if(config&&config.total>1){
							var total=config.total,current=config.current;
							var dxtotal;
							if(total<=5){
								dxtotal=Math.min(80,(total-1)*20);
								dx+=-dxtotal+2*dxtotal*(current-1)/(total-1)
							}
							else{
								var total2=Math.floor(total/2);
								if(current<=total2){
									total=total2;
									dy-=20;
								}
								else{
									current-=total2;
									total-=total2;
									dy+=20;
								}
								dxtotal=Math.min(80,(total-1)*20);
								dx+=-dxtotal+2*dxtotal*(current-1)/(total-1)
							}
							config.current++;
						}
						if(node.style.transform&&node.style.transform!='none'&&node.style.transform.indexOf('translate')==-1){
							node.style.transform+=' translate('+dx+'px,'+dy+'px)';
						}
						else{
							node.style.transform='translate('+dx+'px,'+dy+'px)';
						}
						node.show();
            
						node.listenTransition(function(){
							node.style.transitionDuration='0.5s';
							ui.refresh(node);
							node.delete();
						});
						var that=this;
						if(num&&num>1){
							if(config&&config.total>1){
								setTimeout(function(){
									if(cards){
										that.$draw(cards,false,config)
									}
									else{
										that.$draw(num-1,false,config)
									}
								},50)
							}
							else{
								setTimeout(function(){
									if(cards){
										that.$draw(cards,false,config)
									}
									else{
										that.$draw(num-1,false,config)
									}
								},200);
							}
						}
					};
					game.kzol_e_card_wait1.push(player);
				};
				setTimeout(function(){
					//ui.arena.show();
					//game.kzol_noCard();
					if(lib.config.mode_config.kzsg.yxsd==undefined) lib.config.mode_config.kzsg.yxsd=1;
					var num_yxsd=500/parseInt(lib.config.mode_config.kzsg.yxsd);
					_status.kzol_kzsg_interval=setInterval(function(){
						if(_status.kzol_kzsg_isMoving!=true) game.kzol_noCard();
					},num_yxsd);
				},1000);
				var node=ui.create.div('.damage');
				node.innerHTML='对战开始';
				node.dataset.nature='fire';
				ui.window.appendChild(node);
				ui.refresh(node);
				node.classList.add('damageadded');
				setTimeout(function(){
					node.delete();
					node.style.transform='scale(1.5)';
				},1000);
			},
			kzol_noCard:function(){
				if(_status.kzol_kzsg_LCtime==undefined) _status.kzol_kzsg_LCtime=0;
				_status.kzol_kzsg_LCtime++;
				if(_status.kzol_kzsg_LCtime>=4){
					_status.kzol_kzsg_LCtime=0;
				};
				if(_status.kzol_kzsg_LCtime!=1) return ;
				if(game.players.length==0&&_status.kzol_onWar==true){
					for(var i=0;i<game.players.length;i++){
						var pl=game.players[i];
						if(!pl.classList.contains('out')) continue;
						pl.classList.remove('out');
						game.players.remove(pl);
						if(game.kzol_e_card.contains(pl)){
							game.kzol_kzsg_move(_status.kzol_kzsg_divs.e_war,_status.kzol_kzsg_divs.e_md,'e',pl);
						};
						if(game.kzol_p_card.contains(pl)){
							game.kzol_kzsg_move(_status.kzol_kzsg_divs.p_war,_status.kzol_kzsg_divs.p_md,'p',pl);
						};
						var gl=0;
						var skills=pl.getSkills();
						for(var i=0;i<skills.length;i++){
							var skill=skills[i];
							if(lib.skill[skill].kzsg_revive!=undefined) gl+=lib.skill[skill].kzsg_revive;
						};
						if(gl>0&&Math.random()<gl){
							setTimeout(function(){
								pl.kzsg_revive();
							},1900);
						};
					};
					var bool_roundNumber=true;
					_status.kzol_kzsg_roundCount=2;
					if(_status.kzol_kzsg_interval1!=undefined) clearInterval(_status.kzol_kzsg_interval1);
					if(lib.config.mode_config.kzsg.yxsd==undefined) lib.config.mode_config.kzsg.yxsd=1;
					var num_yxsd=1000/parseInt(lib.config.mode_config.kzsg.yxsd);
					_status.kzol_kzsg_interval1=setInterval(function(){
						_status.kzol_kzsg_roundCount--;
						if(_status.kzol_kzsg_roundCount==0){
							clearInterval(_status.kzol_kzsg_interval1);
							delete _status.kzol_kzsg_roundCount;
						};
					},num_yxsd);
					if(game.kzol_p_card_wait1.length>0) game.kzol_kzsg_move(_status.kzol_kzsg_divs.p_cs,_status.kzol_kzsg_divs.p_wait,'p');
					if(game.kzol_e_card_wait1.length>0) game.kzol_kzsg_move(_status.kzol_kzsg_divs.e_cs,_status.kzol_kzsg_divs.e_wait,'e');
					//setTimeout(function(){
						var list_allMD=[];
						for(var i=0;i<game.kzol_p_card_md.length;i++){
							var pl=game.kzol_p_card_md[i];
							list_allMD.push(pl);
						};
						for(var i=0;i<game.kzol_e_card_md.length;i++){
							var pl=game.kzol_e_card_md[i];
							list_allMD.push(pl);
						};
						for(var i=0;i<game.kzol_p_card_wait.length;i++){
							var pl=game.kzol_p_card_wait[i];
							list_allMD.push(pl);
						};
						for(var i=0;i<game.kzol_e_card_wait.length;i++){
							var pl=game.kzol_e_card_wait[i];
							list_allMD.push(pl);
						};
						for(var i=0;i<list_allMD.length;i++){
							var pl=list_allMD[i];
							/*
							if(pl.storage.kzsg_燃烧!=undefined){
								pl.storage.kzsg_燃烧--;
								pl.syncStorage('kzsg_燃烧');
								if(pl.storage.kzsg_燃烧<=0){
									pl.unmarkSkill('kzsg_燃烧');
									delete pl.storage.kzsg_燃烧;
								};
							};
							*/
							if(pl.storage.kzsg_毒刃1!=undefined){
								pl.storage.kzsg_毒刃1--;
								pl.syncStorage('kzsg_毒刃1');
								if(pl.storage.kzsg_毒刃1<=0){
									pl.unmarkSkill('kzsg_毒刃1');
									delete pl.storage.kzsg_毒刃1;
								};
							};
							if(pl.storage.kzsg_毒刃2!=undefined){
								pl.storage.kzsg_毒刃2--;
								pl.syncStorage('kzsg_毒刃2');
								if(pl.storage.kzsg_毒刃2<=0){
									pl.unmarkSkill('kzsg_毒刃2');
									delete pl.storage.kzsg_毒刃2;
								};
							};
							if(pl.storage.kzsg_毒刃3!=undefined){
								pl.storage.kzsg_毒刃3--;
								pl.syncStorage('kzsg_毒刃3');
								if(pl.storage.kzsg_毒刃3<=0){
									pl.unmarkSkill('kzsg_毒刃3');
									delete pl.storage.kzsg_毒刃3;
								};
							};
							if(pl.storage.kzsg_冰封1!=undefined){
								pl.storage.kzsg_冰封1--;
								pl.syncStorage('kzsg_冰封1');
								if(pl.storage.kzsg_冰封1<=0){
									pl.unmarkSkill('kzsg_冰封1');
									delete pl.storage.kzsg_冰封1;
								};
							};
						};
						var list=[];
						var list1=[];
						var kzsg_changePrepareRound=function(pl,num,side){
							pl.kzsg.prepareRound-=num;
							pl.node.prepareRound.innerHTML=pl.kzsg.prepareRound;
							if(pl.kzsg.prepareRound<=0){
								pl.node.prepareRound.hide();
								pl.node.prepareRound_str.hide();
								//pl.node.prepareRound.hidding=true;
								var skills=pl.getSkills();
								for(var i=0;i<skills.length;i++){
									var skill=skills[i];
									if(side=='p'){
										var list3=[];
										for(var j=0;j<game.kzol_p_card_wait.length;j++){
											if(game.kzol_p_card_wait[j].kzsg.prepareRound>0) list3.push(game.kzol_p_card_wait[j]);
										};
										if(lib.skill[skill].DprepareRound!=undefined&&list3.length>0){
											var pl1=list3.randomGet();
											kzsg_changePrepareRound(pl1,lib.skill[skill].DprepareRound);
											pl.popup('冲阵'+lib.skill[skill].DprepareRound);
											game.log(pl,'发动技能【冲阵'+lib.skill[skill].DprepareRound+'】');
											game.log(pl1,'发起冲锋');
										};
										if(lib.skill[skill].IprepareRound!=undefined&&game.kzol_e_card_wait.length>0){
											var pl1=game.kzol_e_card_wait.randomGet();
											kzsg_changePrepareRound(pl1,-lib.skill[skill].IprepareRound);
											pl.popup('蛊惑'+lib.skill[skill].IprepareRound);
											game.log(pl,'蛊惑了',pl1);
										};
										if(lib.skill[skill].kzsg_Catt!=undefined){
											var sz=lib.skill[skill].kzsg_Catt;
											for(var j in sz){
												for(var a=0;a<game.kzol_p_card.length;a++){
													var pl2=game.kzol_p_card[a];
													if(j=='all'){
														if(pl2.kzsg.type!='宝物'&&pl2.kzsg.type!='术'){
															pl2.kzsg_addAttack(sz[j]);
															game.log(pl,'激励了',pl2);
														};
													}else{
														if(pl2.kzsg.type==j){
															pl2.kzsg_addAttack(sz[j]);
															game.log(pl,'激励了',pl2);
														};
													};
												};
											};
											pl.popup('激励');
										};
										if(lib.skill[skill].kzsg_CmaxHp!=undefined){
											var sz=lib.skill[skill].kzsg_CmaxHp;
											for(var j in sz){
												for(var a=0;a<game.kzol_p_card.length;a++){
													var pl2=game.kzol_p_card[a];
													if(pl2.kzsg.type==j){
														if(sz[j]>0){
															pl2.gainMaxHp(sz[j]);
															game.log(pl,'保护了',pl2);
														};
														if(sz[j]<0){
															var num=sz[j];
															if(num>pl2.maxHp) num=pl2.maxHp;
															if(num>0){
																pl2.loseMaxHp(num);
																if(pl2.maxHp==0) pl2.die();
															};
															pl2.gainMaxHp(sz[j]);
														};
													};
												};
											};
											pl.popup(get.translation(skill));
											game.log(pl,'发动技能【'+get.translation(skill)+'】');
										};
										if(lib.skill[skill].kzsg_Chp!=undefined){
											var sz=lib.skill[skill].kzsg_Chp;
											for(var j in sz){
												for(var a=0;a<game.kzol_p_card.length;a++){
													var pl2=game.kzol_p_card[a];
													if(pl2.kzsg.type==j){
														if(sz[j]>0){
															pl2.recover(sz[j]);
															game.log(pl,'保护了',pl2);
														};
														if(sz[j]<0){
															pl2.loseHp(sz[j]);
														};
													};
												};
											};
											pl.popup(get.translation(skill));
											game.log(pl,'发动技能【'+get.translation(skill)+'】');
										};
									}else{
										var list3=[];
										for(var j=0;j<game.kzol_e_card_wait.length;j++){
											if(game.kzol_e_card_wait[j].kzsg.prepareRound>0) list3.push(game.kzol_e_card_wait[j]);
										};
										if(lib.skill[skill].DprepareRound!=undefined&&list3.length>0){
											var pl1=list3.randomGet();
											kzsg_changePrepareRound(pl1,lib.skill[skill].DprepareRound);
											pl.popup('冲阵'+lib.skill[skill].DprepareRound);
											game.log(pl,'发动技能【冲阵'+lib.skill[skill].DprepareRound+'】');
											game.log(pl1,'发起冲锋');
										};
										if(lib.skill[skill].IprepareRound!=undefined&&game.kzol_p_card_wait.length>0){
											var pl1=game.kzol_p_card_wait.randomGet();
											kzsg_changePrepareRound(pl1,-lib.skill[skill].IprepareRound);
											pl.popup('蛊惑'+lib.skill[skill].IprepareRound);
											game.log(pl,'蛊惑了',pl1);
										};
										if(lib.skill[skill].kzsg_Catt!=undefined){
											var sz=lib.skill[skill].kzsg_Catt;
											for(var j in sz){
												for(var a=0;a<game.kzol_e_card.length;a++){
													var pl2=game.kzol_e_card[a];
													if(j=='all'){
														if(pl2.kzsg.type!='宝物'&&pl2.kzsg.type!='术'){
															pl2.kzsg_addAttack(sz[j]);
															game.log(pl,'激励了',pl2);
														};
													}else{
														if(pl2.kzsg.type==j){
															pl2.kzsg_addAttack(sz[j]);
															game.log(pl,'激励了',pl2);
														};
													};
												};
											};
											pl.popup('激励');
										};
										if(lib.skill[skill].kzsg_CmaxHp!=undefined){
											var sz=lib.skill[skill].kzsg_CmaxHp;
											for(var j in sz){
												for(var a=0;a<game.kzol_e_card.length;a++){
													var pl2=game.kzol_e_card[a];
													if(pl2.kzsg.type==j){
														if(sz[j]>0){
															pl2.gainMaxHp(sz[j]);
															game.log(pl,'保护了',pl2);
														};
														if(sz[j]<0){
															var num=sz[j];
															if(num>pl2.maxHp) num=pl2.maxHp;
															if(num>0){
																pl2.loseMaxHp(num);
																if(pl2.maxHp==0) pl2.die();
															};
															pl2.gainMaxHp(sz[j]);
														};
													};
												};
											};
											pl.popup(get.translation(skill));
											game.log(pl,'发动技能【'+get.translation(skill)+'】');
										};
										if(lib.skill[skill].kzsg_Chp!=undefined){
											var sz=lib.skill[skill].kzsg_Chp;
											for(var j in sz){
												for(var a=0;a<game.kzol_e_card.length;a++){
													var pl2=game.kzol_e_card[a];
													if(pl2.kzsg.type==j){
														if(sz[j]>0){
															pl2.recover(sz[j]);
															game.log(pl,'保护了',pl2);
														};
														if(sz[j]<0){
															pl2.loseHp(sz[j]);
														};
													};
												};
											};
											pl.popup(get.translation(skill));
											game.log(pl,'发动技能【'+get.translation(skill)+'】');
										};
									};
									if(lib.skill[skill].CSQ!=undefined){
										var sz=lib.skill[skill].CSQ;
										for(var j in sz){
											pl.kzsg_damageSQ(sz[j],j);
											if(sz[j]>0){
												setTimeout(function(){
													pl.popup('降士气');
													game.log(pl,'发动技能【降士气】');
												},500);
											};
										};
										pl.popup(get.translation(skill));
										game.log(pl,'发动技能【'+get.translation(skill)+'】');
									};
								};
								if(pl.hasSkill('kzsg_军魂')){
									if(side=='p'){
										var target=game.kzol_p_card;
									}else{
										var target=game.kzol_e_card;
									};
									pl.kzsg_addAttack(target.length);
									pl.popup('军魂');
									game.log(pl,'发动技能【军魂】');
								};
								if(pl.hasSkill('kzsg_联盟')){
									if(side=='p'){
										var target=game.kzol_p_card;
									}else{
										var target=game.kzol_e_card;
									};
									var bool=false;
									for(var i=0;i<target.length;i++){
										if(target[i].group==pl.group) bool=true;
									};
									if(bool==true){
										var list4=['kzsg_横扫','kzsg_丹术2'];
										var skill1=list4.randomGet();
										pl.addSkill(skill1);
										pl.popup('联盟');
										game.log(pl,'发动技能【联盟】');
									};
								};
								if(side=='p'){
									var target=game.kzol_p_card;
								}else{
									var target=game.kzol_e_card;
								};
								for(var i=0;i<target.length;i++){
									var skills=target[i].getSkills();
									for(var x=0;x<skills.length;x++){
										var skill=skills[x];
										if(lib.skill[skill].kzsg_Catt!=undefined){
											var sz=lib.skill[skill].kzsg_Catt;
											for(var j in sz){
												if(j=='all'){
													if(pl.kzsg.type!='宝物'&&pl.kzsg.type!='术'){
														pl.kzsg_addAttack(sz[j]);
														pl.popup('受激励');
														game.log(pl,'受到',target[i],'的激励');
													};
												}else{
													if(pl.kzsg.type==j){
														pl.kzsg_addAttack(sz[j]);
														pl.popup('受激励');
														game.log(pl,'受到',target[i],'的激励');
													};
												};
											};
										};
										if(lib.skill[skill].kzsg_CmaxHp!=undefined){
											var sz=lib.skill[skill].kzsg_CmaxHp;
											for(var j in sz){
												if(pl.kzsg.type==j){
													if(sz[j]>0){
														pl.gainMaxHp(sz[j]);
														pl.popup('受保护');
														game.log(pl,'受到',target[i],'的保护');
													};
													if(sz[j]<0){
														var num=sz[j];
														if(num>pl.maxHp) num=pl.maxHp;
														if(num>0){
															pl.loseMaxHp(num);
															if(pl.maxHp==0) pl.die();
														};
														pl.gainMaxHp(sz[j]);
													};
												};
											};
											
										};
										if(lib.skill[skill].kzsg_Chp!=undefined){
											var sz=lib.skill[skill].kzsg_Chp;
											for(var j in sz){
												if(pl.kzsg.type==j){
													if(sz[j]>0){
														pl.recover(sz[j]);
														pl.popup('受保护');
														game.log(pl,'受到',target[i],'的保护');
													};
													if(sz[j]<0){
														pl.loseHp(sz[j]);
													};
												};
											};
										};
									};
								};
							};
						};
						if(game.kzsg_changePrepareRound==undefined) game.kzsg_changePrepareRound=kzsg_changePrepareRound;
						for(var i=0;i<game.kzol_p_card_wait.length;i++){
							var pl=game.kzol_p_card_wait[i];
							kzsg_changePrepareRound(pl,1,'p');
						};
						for(var i=0;i<game.kzol_p_card_wait.length;i++){
							var pl=game.kzol_p_card_wait[i];
							if(pl.kzsg.prepareRound<=0) list.push(pl);
						};
						for(var i=0;i<list.length;i++){
							if(list[i].kzsg.type=='术'||list[i].kzsg.type=='宝物'){
								game.kzol_kzsg_move(_status.kzol_kzsg_divs.p_wait,_status.kzol_kzsg_divs.p_bw,'p',list[i]);
							}else{
								bool_roundNumber=false;
								game.kzol_kzsg_move(_status.kzol_kzsg_divs.p_wait,_status.kzol_kzsg_divs.p_war,'p',list[i]);
							};
						};
						for(var i=0;i<game.kzol_e_card_wait.length;i++){
							var pl=game.kzol_e_card_wait[i];
							kzsg_changePrepareRound(pl,1,'e');
						};
						for(var i=0;i<game.kzol_e_card_wait.length;i++){
							var pl=game.kzol_e_card_wait[i];
							if(pl.kzsg.prepareRound<=0) list1.push(pl);
						};
						for(var i=0;i<list1.length;i++){
							if(list1[i].kzsg.type=='术'||list1[i].kzsg.type=='宝物'){
								game.kzol_kzsg_move(_status.kzol_kzsg_divs.e_wait,_status.kzol_kzsg_divs.e_bw,'e',list1[i]);
							}else{
								bool_roundNumber=false;
								game.kzol_kzsg_move(_status.kzol_kzsg_divs.e_wait,_status.kzol_kzsg_divs.e_war,'e',list1[i]);
							};
						};
						if(bool_roundNumber==true){
							game.roundNumber++;
							game.updateRoundNumber();
							_status.kzol_kzsg_roundNumber=game.roundNumber;
						};
					//},800);
				};
			},
			kzol_clearWar:function(){
				var num10=0;
				for(var i=0;i<ui.sidebar.childElementCount;i++){
					num10++;
				};
				for(var i=0;i<num10;i++){
					ui.sidebar.removeChild(ui.sidebar.childNodes[0]);
				};
				var num11=0;
				for(var i=0;i<ui.arenalog.childElementCount;i++){
					num11++;
				};
				for(var i=0;i<num11;i++){
					ui.arenalog.removeChild(ui.arenalog.childNodes[0]);
				};
				game.loop=function(){};
				var wait1=game.kzol_p_card_wait1;
				for(var i=0;i<wait1.length;i++){
					wait1[i].delete();
				};
				var wait=game.kzol_p_card_wait;
				for(var i=0;i<wait.length;i++){
					wait[i].delete();
				};
				var war=game.kzol_p_card;
				for(var i=0;i<war.length;i++){
					war[i].delete();
				};
				var md=game.kzol_p_card_md;
				for(var i=0;i<md.length;i++){
					md[i].delete();
				};
				var bw=game.kzol_p_card_bw;
				for(var i=0;i<bw.length;i++){
					bw[i].delete();
				};
				var wait1=game.kzol_e_card_wait1;
				for(var i=0;i<wait1.length;i++){
					wait1[i].delete();
				};
				var wait=game.kzol_e_card_wait;
				for(var i=0;i<wait.length;i++){
					wait[i].delete();
				};
				var war=game.kzol_e_card;
				for(var i=0;i<war.length;i++){
					war[i].delete();
				};
				var md=game.kzol_e_card_md;
				for(var i=0;i<md.length;i++){
					md[i].delete();
				};
				var bw=game.kzol_e_card_bw;
				for(var i=0;i<bw.length;i++){
					bw[i].delete();
				};
				delete _status.kzol_kzsg_round;
				delete _status.kzol_onWar;
				delete _status.kzol_kzsg_hadStart;
				delete _status.kzol_kzsg_stopLoop;
				//delete _status.kzol_kzsg_hadover;
				_status.kzol_kzsg_xs=['p','e'].randomGet();
				if(_status.kzol_kzsg_cardUsing!=undefined){
					for(var i=0;i<_status.kzol_kzsg_cardUsing.length;i++){
						_status.kzol_kzsg_cardUsing[i].delete();
					};
					delete _status.kzol_kzsg_cardUsing;
				};
				if(_status.kzol_kzsg_cardUsing_timeout!=undefined){
					for(var i=0;i<_status.kzol_kzsg_cardUsing_timeout.length;i++){
						clearTimeout(_status.kzol_kzsg_cardUsing_timeout[i]);
					};
					delete _status.kzol_kzsg_cardUsing_timeout;
				};
				game.kzol_p_card_wait1=[];
				game.kzol_p_card_wait=[];
				game.kzol_p_card=[];
				game.kzol_p_card_md=[];
				game.kzol_p_card_bw=[];
				game.kzol_e_card_wait1=[];
				game.kzol_e_card_wait=[];
				game.kzol_e_card=[];
				game.kzol_e_card_md=[];
				game.kzol_e_card_bw=[];
				game.kzol_p_maxHp=30;
				game.kzol_e_maxHp=30;
				game.kzol_p_hp=30;
				game.kzol_e_hp=30;
				game.players.length=0;
				game.dead.length=0;
				game.playerid={};
				game.roundNumber=1;
				game.updateRoundNumber();
				ui.cardPile.innerHTML='';
				ui.discardPile.innerHTML='';
				ui.cardPileButton.style.display='none';
				ui.kzsg_giveup.style.display='none';
				if(ui.weather) ui.weather.style.display='none';
				ui.pause.style.display='none';
				delete _status.kzol_kzsg_onGiveUp;
				delete _status.over;
			},
			kzol_winWar:function(result){
				if(_status.kzol_kzsg_hadover==true) return ;
				_status.over=true;
				delete _status.kzol_kzsg_stopLoop;
				game.loop=function(){};
				if(_status.kzol_kzsg_onbattle!=undefined){
					var battle=_status.kzol_kzsg_onbattle;
					if(result==true){
						if(battle.type==undefined){
							var chapter=_status.kzol_kzsg_onChapter;
							var gk=_status.kzol_kzsg_onGk;
							if(chapter!=undefined&&gk!=undefined){
								var config=lib.config.kzol_kzsg.battle[chapter][gk];
								if(config==false){
									if(battle.reward!=undefined){
										for(var i in battle.reward){
											var num=battle.reward[i];
											var bool_a=false;
											for(var b in lib.kzol_kzsg_ck){
												if(b==i) bool_a=true;
											};
											if(i=='kzsg_coin'){
												game.kzol_changeCoin(num);
											}else if(i=='kzsg_coin1'){
												game.kzol_changeCoin(num,'coin1');
											}else if(bool_a==true){
												lib.config.kzol_kzsg.ck[i]+=num;
												game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
												game.say1('获得'+i+'抽卡'+num+'次');
											}else{
												for(var j=0;j<battle.reward[i];j++){
													game.kzol_kzsg_gainCard(i.slice(0,i.length-1),i.slice(i.length-1,i.length));
												};
											};
										};
									};
									lib.config.kzol_kzsg.battle[chapter][gk]=true;
									game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
									var div_name=_status.kzol_kzsg_onbattle_div_name;
									if(div_name!=undefined) div_name.innerHTML='<span style="color:#00FF00">'+battle.name+'</span>';
									var div_reward=_status.kzol_kzsg_onbattle_div_reward;
									if(div_reward!=undefined) div_reward.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">首通奖励：<br>&nbsp-已获得</span>';
								};
								var config1=lib.config.kzol_kzsg.daily_reward[chapter][gk];
								if(config1==undefined&&battle.daily_reward!=undefined){
									var bool_daily_reward=false;
									for(var i in battle.daily_reward){
										var num=battle.daily_reward[i];
										var bool_a=false;
										for(var b in lib.kzol_kzsg_ck){
											if(b==i) bool_a=true;
										};
										if(i=='kzsg_coin'){
											game.kzol_changeCoin(num);
										}else if(i=='kzsg_coin1'){
											game.kzol_changeCoin(num,'coin1');
										}else if(bool_a==true){
											lib.config.kzol_kzsg.ck[i]+=num;
											game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
											game.say1('获得'+i+'抽卡'+num+'次');
										}else{
											for(var j=0;j<battle.daily_reward[i];j++){
												game.kzol_kzsg_gainCard(i.slice(0,i.length-1),i.slice(i.length-1,i.length));
											};
										};
										bool_daily_reward=true;
									};
									if(bool_daily_reward==true){
										var date=new Date();
										var year=date.getFullYear();
										var month=date.getMonth()+1;
										var day=date.getDate();
										lib.config.kzol_kzsg.daily_reward[chapter][gk]={};
										lib.config.kzol_kzsg.daily_reward[chapter][gk].year=year;
										lib.config.kzol_kzsg.daily_reward[chapter][gk].month=month;
										lib.config.kzol_kzsg.daily_reward[chapter][gk].day=day;
										game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
										var div_reward1=_status.kzol_kzsg_onbattle_div_reward1;
										if(div_reward1!=undefined) div_reward1.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">每日通关奖励：<br>&nbsp-今日已获得</span>';
									};
								};
							};
						}else if(battle.type=='jjc'){
							var jjc=_status.kzol_kzsg_onJJC;
							if(jjc!=undefined){
								var config=lib.config.kzol_kzsg.jj[jjc];
								if(config!=true){
									lib.config.kzol_kzsg.jj[jjc]=true;
									game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
									var div_name=_status.kzol_kzsg_onbattle_div_name;
									if(div_name!=undefined) div_name.innerHTML='<span style="color:#00FF00">'+battle.name+'</span>';
								};
							};
						}else if(battle.type=='pkc'){
							var target_pm=_status.kzol_kzsg_PKC_pm;
							var target_name=_status.kzol_kzsg_PKC_name;
							game.say1('恭喜你战胜了'+target_name);
							game.kzsg_changePm(target_name);
						}else if(battle.type=='boss'){
							if(battle.reward!=undefined){
								for(var i in battle.reward){
									var num=battle.reward[i];
									var bool_a=false;
									for(var b in lib.kzol_kzsg_ck){
										if(b==i) bool_a=true;
									};
									if(i=='kzsg_coin'){
										game.kzol_changeCoin(num);
									}else if(i=='kzsg_coin1'){
										game.kzol_changeCoin(num,'coin1');
									}else if(bool_a==true){
										lib.config.kzol_kzsg.ck[i]+=num;
										game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
										game.say1('获得'+i+'抽卡'+num+'次');
									}else{
										for(var j=0;j<battle.reward[i];j++){
											game.kzol_kzsg_gainCard(i.slice(0,i.length-1),i.slice(i.length-1,i.length));
										};
									};
								};
							};
							lib.config.kzol_kzsg.boss[battle.name]++;
							game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
							delete _status.kzol_kzsg_changeBoss;
						};
					};
					if(battle.finish!=undefined) battle.finish(result);
					delete _status.kzol_kzsg_onChapter;
					delete _status.kzol_kzsg_onGk;
					delete _status.kzol_kzsg_onbattle_div_name;
					delete _status.kzol_kzsg_onbattle_div_reward;
					delete _status.kzol_kzsg_onbattle_div_reward1;
					delete _status.kzol_kzsg_onbattle;
				};
				if(_status.kzol_kzsg_onWJbattle==true){
					if(result==true){
						var num=lib.config.kzol_kzsg.dxl*lib.config.kzol_kzsg.army_wj_num*5;
						if(num>1000) num=1000;
						if(num>0) game.kzol_changeCoin(num);
						reward_func=function(quailty){
							var list=[];
							for(var i in lib.kzol_kzsg_card){
								var card=lib.kzol_kzsg_card[i];
								if(card.inKb==false) continue;
								if(card.quailty==quailty) list.push(card.name);
							};
							if(list.length>0) game.kzol_kzsg_gainCard(list.randomGet(),quailty);
						};
						if(lib.config.kzol_kzsg.dxl%5==0){
							lib.config.kzol_kzsg.ck['进阶池']+=1;
							game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
							game.say1('获得进阶池抽卡1次');
						};
						if(lib.config.kzol_kzsg.dxl==100){
							game.kzol_kzsg_gainCard('kzsg_团结',7);
						};
						if(Math.random()<game.kzol_getGL_card_wj(7)) reward_func(7);
						if(Math.random()<game.kzol_getGL_card_wj(6)) reward_func(6);
						if(Math.random()<game.kzol_getGL_card_wj(5)) reward_func(5);
						if(Math.random()<game.kzol_getGL_card_wj(4)) reward_func(4);
						if(Math.random()<game.kzol_getGL_card_wj(3)) reward_func(3);
						if(Math.random()<game.kzol_getGL_card_wj(2)) reward_func(2);
						if(Math.random()<game.kzol_getGL_card_wj(1)) reward_func(1);
						for(var i=0;i<game.kzol_p_card_wait1.length;i++){
							var pl=game.kzol_p_card_wait1[i];
							if(pl.kzol_kzsg_wjLink==undefined) continue;
							if(pl.hp<=lib.config.kzol_kzsg.card[pl.kzol_kzsg_wjLink].hp) lib.config.kzol_kzsg.card[pl.kzol_kzsg_wjLink].hp_wj=pl.hp;
						};
						for(var i=0;i<game.kzol_p_card_wait.length;i++){
							var pl=game.kzol_p_card_wait[i];
							if(pl.kzol_kzsg_wjLink==undefined) continue;
							if(pl.hp<=lib.config.kzol_kzsg.card[pl.kzol_kzsg_wjLink].hp) lib.config.kzol_kzsg.card[pl.kzol_kzsg_wjLink].hp_wj=pl.hp;
						};
						for(var i=0;i<game.kzol_p_card.length;i++){
							var pl=game.kzol_p_card[i];
							if(pl.kzol_kzsg_wjLink==undefined) continue;
							if(pl.hp<=lib.config.kzol_kzsg.card[pl.kzol_kzsg_wjLink].hp) lib.config.kzol_kzsg.card[pl.kzol_kzsg_wjLink].hp_wj=pl.hp;
						};
						for(var i=0;i<game.kzol_p_card_bw.length;i++){
							var pl=game.kzol_p_card_bw[i];
							if(pl.kzol_kzsg_wjLink==undefined) continue;
							if(pl.hp<=lib.config.kzol_kzsg.card[pl.kzol_kzsg_wjLink].hp) lib.config.kzol_kzsg.card[pl.kzol_kzsg_wjLink].hp_wj=pl.hp;
						};
						for(var i=0;i<game.kzol_p_card_md.length;i++){
							var pl=game.kzol_p_card_md[i];
							if(pl.kzol_kzsg_wjLink==undefined) continue;
							if(pl.kzsg.type!='术'&&pl.kzsg.type!='宝物') lib.config.kzol_kzsg.card[pl.kzol_kzsg_wjLink].hp_wj='X';
						};
						game.kzol_update_armyWj();
						game.kzol_changeDXL(1);
						game.kzol_changeEnemy_wj(lib.config.kzol_kzsg.army_wj_num);
					};
					if(result==false){
						game.say1('挑战失败，重置无尽');
						game.kzol_clearWj();
					};
				};
				setTimeout(function(){
					if(result==true){
						game.kzol_dialogs_open(_status.kzol_kzsg_dialogs4);
					}else if(result==false){
						game.kzol_dialogs_open(_status.kzol_kzsg_dialogs5);
					}else{
						game.kzol_dialogs_open(_status.kzol_kzsg_dialogs8);
					};
				},1750);
				_status.kzol_kzsg_hadover=true;
				clearInterval(_status.kzol_kzsg_interval);
				delete _status.kzol_kzsg_interval;
				delete _status.kzol_kzsg_LCtime;
			},
			kzol_moveDiv:function(element,target){
				clearInterval(element.kzol_timeId);
				element.kzol_timeId= setInterval(function(){
					var current = element.offsetLeft;
					var step = 100;
					step=target>current?step:-step;
					current+=step;
					if(Math.abs(current-target)>Math.abs(step)){
						element.style.left=current+"px";
					}else{
						clearInterval(element.kzol_timeId);
						element.style.left=target+"px";
					};
				},1);
			},
			kzol_loop:game.loop,
			kzol_kzsg_gainCard:function(name,quailty){
				var bool=false;
				for(var i in lib.kzol_kzsg_card){
					var card=lib.kzol_kzsg_card[i];
					if(card.name==name&&card.quailty==quailty){
						var card1=card;
						bool=true;
					};
				};
				if(bool==false) return false;
				lib.config.kzol_kzsg.card[lib.config.kzol_kzsg.card_num]={};
				for(var i in card1){
					if(i=='skills'){
						lib.config.kzol_kzsg.card[lib.config.kzol_kzsg.card_num][i]=[];
						for(var j=0;j<card1[i].length;j++){
							lib.config.kzol_kzsg.card[lib.config.kzol_kzsg.card_num][i].push(card1[i][j]);
						};
					}else{
						lib.config.kzol_kzsg.card[lib.config.kzol_kzsg.card_num][i]=card1[i];
					};
				};
				//lib.config.kzol_kzsg.card[lib.config.kzol_kzsg.card_num].id=lib.config.kzol_kzsg.card_num;
				lib.config.kzol_kzsg.card_num++;
				game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
				game.say1('获得了'+game.kzol_kzsg_changeStr(get.translation(name+quailty),quailty),35);
				if(_status.kzol_kzsg_dialogs7.dialog.style.display!='none'){
					delete _status.kzol_kzsg_changeCK;
				};
				if(_status.kzol_kzsg_dialogs15.dialog.style.display!='none') delete _status.kzol_kzsg_changeCardCK;
			},
			kzol_kzsg_changeCard:function(){
				var cards={};
				for(var i in lib.config.kzol_kzsg.card){
					var card=lib.config.kzol_kzsg.card[i];
					cards[i]={};
					for(var j in card){
						if(j=='skills'){
							cards[i][j]=[];
							for(var x=0;x<card[j].length;x++){
								cards[i][j].push(card[j][x]);
							};
						}else{
							cards[i][j]=card[j];
						};
					};
				};
				lib.config.kzol_kzsg.card=cards;
				game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
				game.say1('复位成功');
			},
			kzol_kzsg_changeStr:function(str,quailty){
				//var str=get.translation(name+quailty);
				if(quailty<=1){
					str='<span style="color:#CCCCCC">'+str+'</span>';
				}else if(quailty>1&&quailty<=2){
					str='<span style="color:#FFFFFF">'+str+'</span>';
				}else if(quailty>2&&quailty<=3){
					str='<span style="color:#33FF00">'+str+'</span>';
				}else if(quailty>3&&quailty<=4){
					str='<span style="color:#0000FF">'+str+'</span>';
				}else if(quailty>4&&quailty<=5){
					str='<span style="color:#CC00FF">'+str+'</span>';
				}else if(quailty>5&&quailty<=6){
					str='<span style="color:#EE7621">'+str+'</span>';
				}else{
					str='<span style="color:#FF0000">'+str+'</span>';
				};
				return str;
			},
			kzol_focus:function(div){
				if(_status.kzol_focus_divs==undefined) _status.kzol_focus_divs={};
				for(var i in _status.kzol_focus_divs){
					ui.window.removeChild(_status.kzol_focus_divs[i]);
					delete _status.kzol_focus_divs[i];
				};
				if(div==undefined) return ;
				if(div!='none'){
					var w=div.offsetWidth;
					var h=div.offsetHeight;
					var t=div.offsetTop;
					var l=div.offsetLeft;
					var w1=ui.window.offsetWidth;
					var h1=ui.window.offsetHeight;
					if(div.parentNode!=ui.window){
						t+=div.parentNode.offsetTop;
						l+=div.parentNode.offsetLeft;
						if(div.parentNode.parentNode!=ui.window){
							t+=div.parentNode.parentNode.offsetTop;
							l+=div.parentNode.parentNode.offsetLeft;
						};
					};
					var div1=ui.create.div('');
					div1.style.height='calc(100%)';
					div1.style.width=(l)+'px';
					div1.style.top='0px';
					div1.style.left='0px';
					div1.style['zIndex']=997;
					div1.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
					ui.window.appendChild(div1);
					_status.kzol_focus_divs.div1=div1;
					var div2=ui.create.div('');
					div2.style.height='calc(100%)';
					div2.style.width=(w1-(l+w))+'px';
					div2.style.top='0px';
					div2.style.left=(l+w)+'px';
					div2.style['zIndex']=997;
					div2.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
					ui.window.appendChild(div2);
					_status.kzol_focus_divs.div2=div2;
					var div3=ui.create.div('');
					div3.style.height=(t)+'px';
					div3.style.width=(w)+'px';
					div3.style.top='0px';
					div3.style.left=(l)+'px';
					div3.style['zIndex']=997;
					div3.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
					ui.window.appendChild(div3);
					_status.kzol_focus_divs.div3=div3;
					var div4=ui.create.div('');
					div4.style.height=(h1-(t+h))+'px';
					div4.style.width=(w)+'px';
					div4.style.bottom='0px';
					div4.style.left=(l)+'px';
					div4.style['zIndex']=997;
					div4.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
					ui.window.appendChild(div4);
					_status.kzol_focus_divs.div4=div4;
				}else{
					var div=ui.create.div('');
					div.style.height='calc(100%)';
					div.style.width='calc(100%)';
					div.style.bottom='0px';
					div.style.left='0px';
					div.style['zIndex']=997;
					//div.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
					ui.window.appendChild(div);
					_status.kzol_focus_divs.div=div;
				};
			},
			kzol_chat1:function(avatar,str,func,bool){
				if(_status.kzol_chat1_divs==undefined) _status.kzol_chat1_divs={};
				for(var i in _status.kzol_chat1_divs){
					ui.window.removeChild(_status.kzol_chat1_divs[i]);
					delete _status.kzol_chat1_divs[i];
				};
				if(avatar!=undefined){
					var avatar_div=ui.create.div('');
					avatar_div.style.height='192px';
					avatar_div.style.width='172px';
					avatar_div.style.bottom='-5px';
					avatar_div.style.left='0px';
					avatar_div.style['zIndex']=998;
					avatar_div.style['text-align']='center';
					avatar_div.style['font-size']='20px';
					avatar_div.style['line-height']='30px';
					avatar_div.style['font-family']="'STXinwei','xinwei'";
					avatar_div.style['box-shadow']='none';
					avatar_div.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
					avatar_div.setBackgroundImage('extension/扩展ol/'+avatar+'.jpg');
					avatar_div.style.backgroundSize="cover";
					avatar_div.style.borderRadius='5px';
					avatar_div.innerHTML=avatar;
					ui.window.appendChild(avatar_div);
					_status.kzol_chat1_divs.avatar_div=avatar_div;
					var chat=ui.create.div('');
					chat.style.height='160px';
					chat.style.width='calc(100% - 172px)';
					chat.style.bottom='-5px';
					chat.style.left='172px';
					chat.style['overflow-x']='hidden';
					chat.style['overflow-y']='scroll';
					if(lib.config.mode_config.kzsg.yddwfhd==true) lib.setScroll(chat);
					chat.style['zIndex']=998;
					chat.style['box-shadow']='none';
					chat.style['background-image']='linear-gradient(rgba(0, 0, 0, 0.71), rgb(0, 0, 0))';
					chat.style['text-align']='left';
					chat.style['font-size']='20px';
					chat.style['font-family']="'STXinwei','xinwei'";
					//chat.style.borderRadius='5px';
					chat.innerHTML='<br>';
					var num=0;
					var interval=setInterval(function(){
						chat.innerHTML+=str[num];
						num++;
						if(num>=str.length){
							if(bool!=false) chat.innerHTML+='（点击对话框继续）';
							clearInterval(interval);
							if(func!=undefined) chat.onclick=func;
						};
					},150);
					chat.onclick=function(){
						clearInterval(interval);
						setTimeout(function(){
							var str1='<br>'+str;
							if(bool!=false) str1+='（点击对话框继续）';
							chat.innerHTML=str1;
							if(func!=undefined) chat.onclick=func;
						},200);
					};
					ui.window.appendChild(chat);
					_status.kzol_chat1_divs.chat=chat;
				};
			},
			kzol_ys_zy:function(){
				game.kzol_dialogs_hide(_status.kzol_kzsg_dialogs1);
				ui.window.appendChild(ui.arena);
				game.kzol_chat1('极光','这里就是战斗界面。',function(){
					game.kzol_chat1('极光','上半部分为敌方区域，下半部分为己方区域。',function(){
						game.kzol_chat1('极光','接下来以敌方区域为例来讲解其中各个子区域的作用。',function(){
							game.kzol_focus(_status.kzol_kzsg_divs.e_hp);
							game.kzol_chat1('极光','士气条——士气值的显示区域。士气值默认为30，若本次战斗限制出战军队数，则士气值为限制出战军队数X30。',function(){
								game.kzol_chat1('极光','对战中，当一方士气将为零时，另一方获胜。',function(){
									game.kzol_focus(_status.kzol_kzsg_divs.e_cs);
									game.kzol_chat1('极光','牌堆——对战卡组。',function(){
										game.kzol_chat1('极光','每一轮开始时，系统将翻开牌堆顶一张卡牌并将其移动至准备区域。',function(){
											game.kzol_focus(_status.kzol_kzsg_divs.e_wait);
											game.kzol_chat1('极光','准备区域——每一轮开始时，准备区域内的所有卡牌的等待回合数-1。若有士兵牌或武将牌的等待回合数小于或等于0，这些士兵牌移动至对战区域，即上场；若有宝物牌或术牌的等待回合数小于或等于0，这些牌移动至军备区，供对战区域的卡牌使用',function(){
												game.kzol_focus(_status.kzol_kzsg_divs.e_war);
												game.kzol_chat1('极光','对战区域——双方卡牌相互厮杀的区域。在该区域中，卡牌死亡后进入墓地。',function(){
													game.kzol_chat1('极光','对战区域内的卡牌活动顺序固定，总是卡牌-该卡牌的对面位-该卡牌所在区域中的下一位。',function(){
														game.kzol_chat1('极光','对战区域内的卡牌活动即为执行回合，与三国杀不同的是，卡牌执行回合时跳过摸牌阶段，若该卡牌攻击力大于0则获得一张不会进入弃牌堆的【杀】；出牌阶段，若卡牌对面位没有卡牌，则该卡牌可以使用【杀】来降低敌方的士气，即【震慑】；距离计算也有改动。',function(){
															game.kzol_chat1('极光','对战中哪一方卡牌先手活动是随机的。',function(){
																game.kzol_focus(_status.kzol_kzsg_divs.e_bw);
																game.kzol_chat1('极光','军备区——存放上场宝物牌和术牌的区域。在该区域中，宝物牌会随着其准备者的死亡进入墓地、术牌被使用后也会进入墓地',function(){
																	game.kzol_focus(_status.kzol_kzsg_divs.e_md);
																	game.kzol_chat1('极光','墓地——存放死亡卡牌区域。',function(){
																		game.kzol_focus(_status.kzol_kzsg_divs.vs);
																		game.kzol_chat1('极光','中间为游戏轮数。若双方对战区域都没有卡牌则两秒为一轮。当游戏轮数大于或等于一百时，对局结束，依据双方士气值判断胜负。',function(){
																			game.kzol_chat1('极光','若历史记录栏处于打开状态，则历史记录栏居中。且点击空白区域时将历史记录栏置于最顶层，再次点击则使其回归到原来层级。',function(){
																				game.kzol_chat1('极光','战斗区域讲解完成。教程到此结束，感谢你的耐心聆听。',function(){
																					game.kzol_chat1('极光','听说最近战卡工作室《故国神游》也在还原卡战三国，感兴趣的可以去卡战三国吧看看哦。',function(){
																						delete _status.kzol_kzsg_onYS;
																						game.saveConfig('ckjc',false,'kzsg');
																						ui.arena.delete();
																						game.kzol_dialogs_show(_status.kzol_kzsg_dialogs1);
																						setTimeout(function(){
																							game.kzol_focus();
																							game.kzol_chat1();
																						},300);
																					});
																				});
																			});
																		});
																	});
																});
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			},
			log:function(){
				var str='',logvid=null;
				for(var i=0;i<arguments.length;i++){
					var itemtype=get.itemtype(arguments[i]);
					if(itemtype=='player'||itemtype=='players'){
						if(lib.config.log_highlight){
							str+='<span class="bluetext">'+get.translation(arguments[i])+'</span>';
						}
						else{
							str+=get.translation(arguments[i]);
						}
					}
					else if(itemtype=='cards'||itemtype=='card'||(typeof arguments[i]=='object'&&arguments[i]&&arguments[i].name)){
						if(lib.config.log_highlight){
							str+='<span class="yellowtext">'+get.translation(arguments[i])+'</span>';
						}
						else{
							str+=get.translation(arguments[i]);
						}
					}
					else if(typeof arguments[i]=='object'){
						if(arguments[i]){
							if(arguments[i].parentNode==ui.historybar){
								logvid=arguments[i].logvid;
							}
							else{
								str+=get.translation(arguments[i]);
							}
						}
					}
					else if(typeof arguments[i]=='string'){
						if(lib.config.log_highlight){
							if(arguments[i][0]=='【'&&arguments[i][arguments[i].length-1]=='】'){
								str+='<span class="greentext">'+get.translation(arguments[i])+'</span>';
							}
							else if(arguments[i][0]=='#'){
								var color='';
								switch(arguments[i][1]){
									case 'b':color='blue';break;
									case 'y':color='yellow';break;
									case 'g':color='green';break;
								}
								str+='<span class="'+color+'text">'+get.translation(arguments[i].slice(2))+'</span>';
							}
							else{
								str+=get.translation(arguments[i]);
							}
						}
						else{
							str+=get.translation(arguments[i]);
						}
					}
					else{
						str+=arguments[i];
					}
    
				}
				var node=ui.create.div();
				node.innerHTML=str;
				ui.sidebar.insertBefore(node,ui.sidebar.firstChild);
				game.addVideo('log',null,str);
				game.broadcast(function(str){
					game.log(str);
				},str);
				if(!_status.video&&!game.online){
					if(!logvid){
						if(_status.event!=undefined&&typeof _status.event.getLogv=='function') logvid=_status.event.getLogv();
					}
					if(logvid){
						game.logv(logvid,'<div class="text center">'+str+'</div>');
					}
				}
				// if(lib.config.title) document.title=str;
				if(lib.config.show_log!='off'&&!game.chess){
					var nodeentry=node.cloneNode(true);
					ui.arenalog.insertBefore(nodeentry,ui.arenalog.firstChild);
					if(!lib.config.clear_log){
						while(ui.arenalog.childNodes.length&&ui.arenalog.scrollHeight>ui.arenalog.offsetHeight){
							ui.arenalog.lastChild.remove();
						}
					}
					if(!lib.config.low_performance){
						nodeentry.style.transition='all 0s';
						nodeentry.style.marginBottom=(-nodeentry.offsetHeight)+'px';
						ui.refresh(nodeentry);
						nodeentry.style.transition='';
						nodeentry.style.marginBottom='';
					}
					if(lib.config.clear_log){
						nodeentry.timeout=setTimeout(function(){
							nodeentry.delete();
						},1000);
						for(var i=0;i<ui.arenalog.childElementCount;i++){
							if(!ui.arenalog.childNodes[i].timeout){
								ui.arenalog.childNodes[i].remove();
							}
						}
					}
				}
			},
			kzol_loadImage:function(url){
				var img=document.createElement('img');
				img.src=url;
				img.style.display='none';
				document.body.appendChild(img);
			},
			delay:function(time,time2){
				if(_status.paused) return;
				game.pause();
				if(typeof time!='number') time=1;
				if(typeof time2!='number') time2=0;
				//time=time*lib.config.duration+time2;
				//if(lib.config.speed=='vvfast') time/=3;
				time=time*1000+time2;
				_status.timeout=setTimeout(game.resume,time);
			},
			delayx:function(time,time2){
				if(typeof time!='number') time=1;
				switch(lib.config.game_speed){
					case 'vslow':time*=2.5;break;
					case 'slow':time*=1.5;break;
					case 'fast':time*=0.7;break;
					case 'vfast':time*=0.4;break;
					case 'vvfast':time*=0.2;break;
				}
				if(lib.config.mode_config.kzsg.yxsd==undefined) lib.config.mode_config.kzsg.yxsd=1;
				var num=parseInt(lib.config.mode_config.kzsg.yxsd);
				time=time/num;
				return game.delay(time,time2);
			},
		},
		element:{
			player:{
				kzsg_revive:function(){
					var next=game.createEvent('kzsg_revive');
					next.player=this;
					for(var i=0;i<arguments.length;i++){
						if(typeof arguments[i]=='number'){
							next.num=arguments[i];
						};
					};
					next.setContent(lib.element.event.kzsg_revive);
					return next;
				},
				kzsg_addAttack:function(){
					var next=game.createEvent('kzsg_addAttack');
					next.player=this;
					for(var i=0;i<arguments.length;i++){
						if(typeof arguments[i]=='number'){
							next.num=arguments[i];
						};
					};
					next.setContent(lib.element.event.kzsg_addAttack);
					return next;
				},
				kzsg_getSeat:function(player,side){
					var num=-1;
					if(!player.classList.contains('out')){
						if(side=='p'){
							if(game.kzol_p_card==undefined) return num;
							for(i=0;i<game.kzol_p_card.length;i++){
								var pl=game.kzol_p_card[i];
								if(pl==player) num=i;
							};
						};
						if(side=='e'){
							if(game.kzol_e_card==undefined) return num;
							for(i=0;i<game.kzol_e_card.length;i++){
								var pl=game.kzol_e_card[i];
								if(pl==player) num=i;
							};
						};
					};
					return num;
				},
				kzsg_damageSQ:function(){
					var next=game.createEvent('kzsg_damageSQ');
					next.player=this;
					for(var i=0;i<arguments.length;i++){
						if(typeof arguments[i]=='number'){
							next.num=arguments[i];
						};
						if(typeof arguments[i]=='boolean'){
							next.forced=arguments[i];
						};
					};
					next.setContent(lib.element.event.kzsg_damageSQ);
					return next;
				},
				kzsg_changePrepareRound:function(){//无用
					var next=game.createEvent('kzsg_changePrepareRound');
					next.player=this;
					for(var i=0;i<arguments.length;i++){
						if(typeof arguments[i]=='number'){
							next.num=arguments[i];
						};
					};
					next.setContent(lib.element.event.kzsg_changePrepareRound);
					return next;
				},
				dieAfter:function(source){
					if(this==game.me) return ;
				},
				$throw:function(card,time,init,nosource){
					if(typeof card=='number'){
						var tmp=card;
						card=[];
						while(tmp--){
							var cardx=ui.create.card();
							cardx.classList.add('infohidden');
							cardx.classList.add('infoflip');
							card.push(cardx);
						}
					}
					if(init!==false){
						if(init!=='nobroadcast'){
							game.broadcast(function(player,card,time,init,nosource){
								player.$throw(card,time,init,nosource);
							},this,card,time,init);
						}
						if(get.itemtype(card)!='cards'){
							if(get.itemtype(card)=='card'){
								card=[card];
							}
							else{
								return;
							}
						}
						game.addVideo('throw',this,[get.cardsInfo(card),time,nosource]);
					}
					if(game.chess){
						this.chessFocus();
					}
					if(get.itemtype(card)=='cards'){
						var node;
						for(var i=0;i<card.length;i++){
							node=this.$throw(card[i],time,false,nosource);
						}
						if(_status.kzol_kzsg_cardUsing==undefined) _status.kzol_kzsg_cardUsing=[];
						_status.kzol_kzsg_cardUsing.push(node);
						return node;
					}
					else{
						var node;
						if(card==undefined||card.length==0) return;
						node=this.$throwordered(card.copy('thrown'),nosource);
						if(time!=undefined){
							node.fixed=true;
							if(_status.kzol_kzsg_cardUsing_timeout==undefined) _status.kzol_kzsg_cardUsing_timeout=[];
							_status.kzol_kzsg_cardUsing_timeout.push(setTimeout(function(){node.delete()},time));
						}
						lib.listenEnd(node);
						if(_status.kzol_kzsg_cardUsing==undefined) _status.kzol_kzsg_cardUsing=[];
						_status.kzol_kzsg_cardUsing.push(node);
						return node;
					}
				},
				update:function(){
					if(_status.video&&arguments.length==0) return;
					if(this.hp>=this.maxHp) this.hp=this.maxHp;
					var hp=this.node.hp;
					hp.style.transition='none';
					game.broadcast(function(player,hp,maxHp,hujia){
						player.hp=hp;
						player.maxHp=maxHp;
						player.hujia=hujia;
						player.update();
					},this,this.hp,this.maxHp,this.hujia);
					if(!_status.video){
						if(this.hujia){
							this.markSkill('ghujia');
						}
						else{
							this.unmarkSkill('ghujia');
						}
					}
					if(this.maxHp==Infinity){
						hp.innerHTML='∞';
					}
					else if(game.layout=='default'&&this.maxHp>4){
						hp.innerHTML=this.hp+'/'+this.maxHp;
						hp.classList.add('text');
					}
					else if(get.is.newLayout()&&
					(
						this.maxHp>4||
						(this.maxHp>4&&this.classList.contains('minskin'))||
						((game.layout=='mobile'||game.layout=='long')&&this.dataset.position==0&&this.maxHp>4)
					)){
						hp.innerHTML=this.hp+'<br>/<br>'+this.maxHp+'<div></div>';
						if(this.hp==0){
							hp.lastChild.classList.add('lost');
						}
						hp.classList.add('textstyle');
						// hp.classList.remove('long');
					}
					else{
						hp.innerHTML='';
						hp.classList.remove('text');
						hp.classList.remove('textstyle');
						while(this.maxHp>hp.childNodes.length){
							ui.create.div(hp);
						}
						while(this.maxHp<hp.childNodes.length){
							hp.removeChild(hp.lastChild);
						}
						for(var i=0;i<this.maxHp;i++){
							var index=i;
							if(get.is.newLayout()){
								index=this.maxHp-i-1;
							}
							if(i<this.hp){
								hp.childNodes[index].classList.remove('lost');
							}
							else{
								hp.childNodes[index].classList.add('lost');
							}
						}
						// if(this.maxHp==9){
						// 	hp.classList.add('long');
						// }
						// else{
						// 	hp.classList.remove('long');
						// }
					}
					if(hp.classList.contains('room')){
						hp.dataset.condition='high';
					}
					else if(this.hp==0){
						hp.dataset.condition='';
					}
					else if(this.hp>Math.round(this.maxHp/2)||this.hp===this.maxHp){
						hp.dataset.condition='high';
					}
					else if(this.hp>Math.floor(this.maxHp/3)){
						hp.dataset.condition='mid';
					}
					else{
						hp.dataset.condition='low';
					}

					setTimeout(function(){
						hp.style.transition='';
					});
					var numh=this.countCards('h');
					if(_status.video){
						numh=arguments[0];
					}
					if(numh>=10){
						numh=numh.toString();
						this.node.count.dataset.condition='low';
						this.node.count.innerHTML=numh[0]+'<br>'+numh[1];
					}
					else{
						if(numh>5){
							this.node.count.dataset.condition='higher';
						}
						else if(numh>2){
							this.node.count.dataset.condition='high';
						}
						else if(numh>0){
							this.node.count.dataset.condition='mid';
						}
						else{
							this.node.count.dataset.condition='none';
						}
						this.node.count.innerHTML=numh;
					}
					if(this.updates){
						for(var i=0;i<lib.element.player.updates.length;i++){
							lib.element.player.updates[i](this);
						}
					}
					if(!_status.video){
						game.addVideo('update',this,[this.countCards('h'),this.hp,this.maxHp,this.hujia]);
					}
					this.updateMarks();
					return this;
				},
				line:function(target,config){
					if(get.itemtype(target)=='players'){
						for(var i=0;i<target.length;i++){
							this.line(target[i],config);
						}
					}
					else if(get.itemtype(target)=='player'){
						if(target!=undefined){
							var p_war=_status.kzol_kzsg_divs.p_war;
							var e_war=_status.kzol_kzsg_divs.e_war;
							if(game.kzol_p_card.contains(target)){
								if(target.offsetLeft>=p_war.offsetWidth){
									var num=p_war.offsetWidth/2-target.offsetWidth/2+target.offsetLeft;
									p_war.scrollLeft=num;
								}else{
									p_war.scrollLeft=0;
								};
							}else{
								if(target.offsetLeft>=e_war.offsetWidth){
									var num=e_war.offsetWidth/2-target.offsetWidth/2+target.offsetLeft;
									e_war.scrollLeft=num;
								}else{
									e_war.scrollLeft=0;
								};
							};
						};
						if(target==this) return;
						game.broadcast(function(player,target,config){
							player.line(target,config);
						},this,target,config);
						game.addVideo('line',this,[target.dataset.position,config]);
						game.linexy([
							this.getLeft()+this.offsetWidth/2,
							this.getTop()+this.offsetHeight/2,
							target.getLeft()+target.offsetWidth/2,
							target.getTop()+target.offsetHeight/2
						],config,true);
					}
				},
				zhaohuan:function(){
					var next=game.createEvent('zhaohuan');
					next.player=this;
					for(var i=0;i<arguments.length;i++){
						if(typeof arguments[i]=='string'){
							next.skill=arguments[i];
						};
						if(typeof arguments[i]=='boolean'){
							next.forced=arguments[i];
						};
						if(typeof arguments[i]=='function'){
							next.num=arguments[i];
						};
					};
					next.setContent(lib.element.event.zhaohuan);
					return next;
				},
				inRange:function(target){
					var player=this;
					if(player==target||player.hasSkill('undist')||target.hasSkill('undist')) return false;
					var range2=player.getAttackRange();
					var distance=get.distance(player,target);
					return distance<=range2;
				},
			},
			event:{
				kzsg_revive:function(){
					event.trigger('kzsg_revive');
					if(num==undefined) var num=player.kzsg.prepareRound1;
					player.hp=player.maxHp;
					player.update();
					if(num>0){
						player.kzsg.prepareRound=num;
						player.node.prepareRound.innerHTML=num;
						player.node.prepareRound.show();
						player.node.prepareRound_str.show();
					};
					if(game.kzol_e_card_md.contains(player)){
						game.kzol_kzsg_move(_status.kzol_kzsg_divs.e_md,_status.kzol_kzsg_divs.e_wait,'e',player);
					};
					if(game.kzol_p_card_md.contains(player)){
						game.kzol_kzsg_move(_status.kzol_kzsg_divs.p_md,_status.kzol_kzsg_divs.p_wait,'p',player);
					};
					if(num<=0){
						setTimeout(function(){
							if(game.kzol_p_card_wait.contains(player)){
								if(player.kzsg.type=='术'||player.kzsg.type=='宝物'){
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.p_wait,_status.kzol_kzsg_divs.p_bw,'p',player);
								}else{
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.p_wait,_status.kzol_kzsg_divs.p_war,'p',player);
								};
							};
							if(game.kzol_e_card_wait.contains(player)){
								if(player.kzsg.type=='术'||player.kzsg.type=='宝物'){
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.e_wait,_status.kzol_kzsg_divs.e_bw,'e',player);
								}else{
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.e_wait,_status.kzol_kzsg_divs.e_war,'e',player);
								};
							};
						},2000);
					};
					setTimeout(function(){
						player.popup('重生');
						game.log(player,'重生了');
					},500);
				},
				kzsg_addAttack:function(){
					event.trigger('kzsg_addAttack');
					if(num==undefined) num=1;
					var attack=player.kzsg.attack;
					if(attack+num<=0) num=-attack;
					attack+=num;
					player.kzsg.attack=attack;
					player.node.attack.innerHTML=attack;
					if(num>0){
						game.log(player,'攻击力+'+num);
					};
					if(num<0){
						game.log(player,'攻击力-'+(-num));
					};
				},
				kzsg_damageSQ:function(){
					event.trigger('kzsg_damageSQ');
					//if(player.kzsg!=undefined&&player.kzsg.attack!=undefined) num+=player.kzsg.attack-1;
					var side=forced;
					if(side==true){
						if(game.kzol_p_card.contains(player)||game.kzol_p_card_bw.contains(player)||game.kzol_p_card_wait.contains(player)){
							if(game.kzol_e_hp-num>game.kzol_e_maxHp) num=game.kzol_e_maxHp-game.kzol_e_hp;
							game.kzol_e_hp-=num;
						}else{
							if(game.kzol_p_hp-num>game.kzol_p_maxHp) num=game.kzol_p_maxHp-game.kzol_p_hp;
							game.kzol_p_hp-=num;
						};
					}else{
						if(game.kzol_p_card.contains(player)||game.kzol_p_card_bw.contains(player)||game.kzol_p_card_wait.contains(player)){
							if(game.kzol_p_hp-num>game.kzol_p_maxHp) num=game.kzol_p_maxHp-game.kzol_p_hp;
							game.kzol_p_hp-=num;
						}else{
							if(game.kzol_e_hp-num>game.kzol_e_maxHp) num=game.kzol_e_maxHp-game.kzol_e_hp;
							game.kzol_e_hp-=num;
						};
					};
					if(num<0){
						if(side==true){
							game.log(player,'令敌方士气+'+(-num));
						}else{
							game.log(player,'令己方士气+'+(-num));
						};
					};
					if(num>0){
						if(side==true){
							game.log(player,'令敌方士气-'+(num));
						}else{
							game.log(player,'令己方士气-'+(num));
						};
					};
					if(game.kzol_p_hp<=0) game.kzol_winWar(false);
					if(game.kzol_e_hp<=0) game.kzol_winWar(true);
				},
				kzsg_changePrepareRound:function(){//无用
					event.trigger('kzsg_changePrepareRound');
					player.kzsg.prepareRound+=num;
					player.node.prepareRound.innerHTML=player.kzsg.prepareRound;
					if(player.kzsg.prepareRound<=0){
						player.node.prepareRound.hide();
						player.node.prepareRound_str.hide();
						player.node.prepareRound.hidding=true;
					};
					if(player.kzsg.prepareRound>0&&player.node.prepareRound.hidding==true){
						player.node.prepareRound.show();
						player.node.prepareRound_str.show();
						delete player.node.prepareRound.hidding;
					};
				},
				zhaohuan:function(){
					event.trigger('kzsg_damageSQ');
					//if(player.kzsg!=undefined&&player.kzsg.attack!=undefined) num+=player.kzsg.attack-1;
					var side=forced;
					var name=skill;
					var func=num;
					var card=lib.kzol_kzsg_card[name];
					if(game.kzol_p_card.contains(player)){
						var target_war=_status.kzol_kzsg_divs.p_war;
					}else{
						var target_war=_status.kzol_kzsg_divs.e_war;
					};
					var pl=ui.create.player1(target_war,{
						height:player.offsetHeight,
						width:player.offsetWidth,
						top:0,
						left:'10px',
					},true).animate('start');
					pl.kzol_offsetWidth=player.offsetWidth;
					pl.getId();
					pl.init(card.name+card.quailty);
					var prepareRound=[3,4,5,6].randomGet();
					var attack=[1,2].randomGet();
					prepareRound=card.prepareRound;
					attack=card.attack;
					pl.maxHp=card.hp;
					pl.hp=card.hp;
					if(_status.kzol_kzsg_onWJbattle==true&&lib.config.kzol_kzsg.dxl>100){
						if(prepareRound>2){
							prepareRound-=2;
						}else{
							prepareRound=0;
						};
					};
					pl.clearSkills();
					pl.addSkill(card.skills);
					pl.group=card.group;
					pl.update();
					pl.node.prepareRound.innerHTML=prepareRound;
					pl.node.attack.innerHTML=attack;
					pl.node.type.innerHTML=game.kzol_kzsg_changeStr('召唤物',card.quailty);
					if(lib.kzol_kzsg_card[pl.name].type=='术'||lib.kzol_kzsg_card[pl.name].type=='宝物'){
						pl.node.prepareRound.style.bottom='5px';
						pl.node.prepareRound.style.left=(pl.offsetWidth-35)+'px';
						pl.node.prepareRound_str.style.bottom='10px';
						pl.node.prepareRound_str.style.left=(pl.offsetWidth-20)+'px';
						pl.node.attack.hide();
						pl.node.attack_str.hide();
						pl.node.count.hide();
					};
					pl.node.prepareRound.hide();
					pl.node.prepareRound_str.hide();
					pl.kzsg={};
					pl.kzsg.prepareRound=prepareRound;
					pl.kzsg.prepareRound1=prepareRound;
					pl.kzsg.attack=attack;
					pl.kzsg.type='召唤物';
					pl.getLeft=function(){
						if(this.parentNode==undefined) return this.offsetLeft;
						return -this.parentNode.scrollLeft+this.offsetLeft+this.parentNode.offsetLeft;
					};
					pl.getTop=function(){
						if(this.parentNode==undefined) return this.offsetTop;
						return this.offsetTop+this.parentNode.offsetTop;
					};
					pl.$draw=function(num,init,config){
						if(init!==false&&init!=='nobroadcast'){
							game.broadcast(function(player,num,init,config){
								player.$draw(num,init,config)
							},this,num,init,config);
						}
						var cards,node;
						if(get.itemtype(num)=='cards'){
							cards=num;
							num=cards.length;
						}
						else if(get.itemtype(num)=='card'){
							cards=[num];
							num=1;
						}
						if(init!==false){
							if(cards){
								game.addVideo('drawCard',this,get.cardsInfo(cards));
							}
							else{
								game.addVideo('draw',this,num);
							}
						}
						if(cards){
							cards=cards.slice(0);
							node=cards.shift().copy('thrown','drawingcard');
						}
						else{
							node=ui.create.div('.card.thrown.drawingcard');
						}
						node.fixed=true;
						node.hide();
                
						var dx,dy;
						if(game.chess){
							var rect=this.getBoundingClientRect();
                
							if(rect.left<=80){
								dx=-10;
								if(rect.top<=80){
									dy=-10;
								}
								else if(rect.top+rect.height+80>=ui.chessContainer.offsetHeight){
									dy=10;
								}
								else{
									dy=0;
								}
							}
							else if(rect.left+rect.width+80>=ui.chessContainer.offsetWidth){
								dx=10;
								if(rect.top<=80){
									dy=-10;
								}
								else if(rect.top+rect.height+80>=ui.chessContainer.offsetHeight){
									dy=10;
								}
								else{
									dy=0;
								}
							}
							else if(rect.top<=80){
								dx=0;
								dy=-10;
							}
							else if(rect.top+rect.height+80>=ui.chessContainer.offsetHeight){
								dx=0;
								dy=10;
							}
							else{
								dx=rect.left+this.offsetWidth/2-ui.arena.offsetWidth/2;
								dy=rect.top+this.offsetHeight/2-ui.arena.offsetHeight/2;
							}
                
							var coeff=240/Math.sqrt(dx*dx+dy*dy);
							dx*=coeff;
							dy*=coeff;
                
							node.style.left=(this.getLeft()+this.offsetWidth/2-52-dx)+'px';
							node.style.top=(this.getTop()+this.offsetHeight/2-52-dy)+'px';
							this.parentNode.appendChild(node);
						}
						else{
							if(this.parentNode!=undefined) this.parentNode.appendChild(node);
							node.style.left='calc(50% - 52px)';
							node.style.top='calc(50% - 52px)';
                
							dx=this.offsetLeft+this.offsetWidth/2-52-node.offsetLeft;
							dy=this.offsetHeight/2-52-node.offsetTop;
                
							if(get.is.mobileMe(this)){
								dx+=get.cardOffset();
								if(ui.arena.classList.contains('oblongcard')){
									dy-=16;
								}
							}
						}
						node.style.transitionDuration='0.8s';
						ui.refresh(node);
						if(typeof num=='number'&&init!==false){
							config={
								total:num,
								current:1
							}
						}
						if(config&&config.total>1){
							var total=config.total,current=config.current;
							var dxtotal;
							if(total<=5){
								dxtotal=Math.min(80,(total-1)*20);
								dx+=-dxtotal+2*dxtotal*(current-1)/(total-1)
							}
							else{
								var total2=Math.floor(total/2);
								if(current<=total2){
									total=total2;
									dy-=20;
								}
								else{
									current-=total2;
									total-=total2;
									dy+=20;
								}
								dxtotal=Math.min(80,(total-1)*20);
								dx+=-dxtotal+2*dxtotal*(current-1)/(total-1)
							}
							config.current++;
						}
						if(node.style.transform&&node.style.transform!='none'&&node.style.transform.indexOf('translate')==-1){
							node.style.transform+=' translate('+dx+'px,'+dy+'px)';
						}
						else{
							node.style.transform='translate('+dx+'px,'+dy+'px)';
						}
						node.show();
                
						node.listenTransition(function(){
							node.style.transitionDuration='0.5s';
							ui.refresh(node);
							node.delete();
						});
						var that=this;
						if(num&&num>1){
							if(config&&config.total>1){
								setTimeout(function(){
									if(cards){
										that.$draw(cards,false,config)
									}
									else{
										that.$draw(num-1,false,config)
									}
								},50)
							}
							else{
								setTimeout(function(){
									if(cards){
										that.$draw(cards,false,config)
									}
									else{
										that.$draw(num-1,false,config)
									}
								},200);
							}
						}
					};
					if(game.kzol_p_card.contains(player)){
						if(side==true){
							game.kzol_p_card.push(pl);
						}else{
							game.kzol_p_card.unshift(pl);
						};
						game.kzol_kzsg_changeSeat();
						for(var i=0;i<game.kzol_p_card.length;i++){
							var card1=game.kzol_p_card[i];
							card1.style.left=(10+(10+card1.offsetWidth)*i)+'px';
						};
					}else{
						if(side==true){
							game.kzol_e_card.push(pl);
						}else{
							game.kzol_e_card.unshift(pl);
						};
						game.kzol_kzsg_changeSeat();
						for(var i=0;i<game.kzol_e_card.length;i++){
							var card1=game.kzol_e_card[i];
							card1.style.left=(10+(10+card1.offsetWidth)*i)+'px';
						};
					};
					func(pl);
				},
			},
			content:{
				phaseLoop:function(){
					"step 0"
					for(var i=0;i<lib.onphase.length;i++){
						lib.onphase[i]();
					}
					if(player!=undefined){
						player.phase();
					};
					"step 1"
					//if(_status.kzol_kzsg_hadover==true) event.finish();
					if(player==game.players[game.players.length-1]){
						event.finish();
						lib.skill['_kzol_kzsg_roundStart'].content();
						if(_status.kzol_kzsg_hadover!=true) game.loop=function(){};
						setTimeout(function(){
							var interval=setInterval(function(){
								if(_status.kzol_kzsg_isMoving!=true){
									clearInterval(interval);
									game.phaseLoop(game.players[0]);
									if(_status.kzol_kzsg_hadover!=true){
										game.loop=game.kzol_loop;
										game.loop();
									};
								};
							},100);
						},800);
					}else{
						if(!game.players.contains(event.player.next)){
							event.player=game.findNext(event.player.next);
						}
						else{
							event.player=event.player.next;
						}
						event.goto(0);
					};
				},
			},
		},
		/*characterPack:{
			mode_kzsg:lib.characterPack_mode_kzsg,
		},*/
		skill:{
			'_kzol_kzsg_phaseForce':{
				trigger:{
					player:'phaseBefore'
				},
				forced:true,
				popup:false,
				content:function(){
					var p_war=_status.kzol_kzsg_divs.p_war;
					var e_war=_status.kzol_kzsg_divs.e_war;
					if(game.kzol_p_card.contains(player)){
						if(player.offsetLeft>=p_war.offsetWidth){
							var num=p_war.offsetWidth/2-player.offsetWidth/2+player.offsetLeft;
							p_war.scrollLeft=num;
						}else{
							p_war.scrollLeft=0;
						};
					}else{
						if(player.offsetLeft>=e_war.offsetWidth){
							var num=e_war.offsetWidth/2-player.offsetWidth/2+player.offsetLeft;
							e_war.scrollLeft=num;
						}else{
							e_war.scrollLeft=0;
						};
					};
				},
			},
			'_kzol_kzsg_dieBegin':{
				trigger:{
					player:'dieBegin'
				},
				forced:true,
				popup:false,
				priority:-Infinity,
				content:function(){
					'step 0'
					player.lose(player.get('hej'));
					if(_status.kzol_kzsg_cardUsing!=undefined){
						for(var i=0;i<_status.kzol_kzsg_cardUsing.length;i++){
							_status.kzol_kzsg_cardUsing[i].delete();
						};
						delete _status.kzol_kzsg_cardUsing;
					};
					if(_status.kzol_kzsg_cardUsing_timeout!=undefined){
						for(var i=0;i<_status.kzol_kzsg_cardUsing_timeout.length;i++){
							clearTimeout(_status.kzol_kzsg_cardUsing_timeout[i]);
						};
						delete _status.kzol_kzsg_cardUsing_timeout;
					};
					trigger.untrigger();
					trigger.finish();
					if(player.storage.kzol_kzsg_useBW!=undefined){
						var target=player.storage.kzol_kzsg_useBW;
						var skills=target.getSkills();
						for(var i=0;i<skills.length;i++){
							var skill=skills[i];
							if(lib.skill[skill].kzsg_Catt_E!=undefined||lib.skill[skill].kzsg_CmaxHp_E!=undefined||lib.skill[skill].kzsg_Chp_E!=undefined){
								if(lib.skill[skill].kzsg_Catt_E!=undefined) player.kzsg_addAttack(-lib.skill[skill].kzsg_Catt_E);
								if(lib.skill[skill].kzsg_CmaxHp_E!=undefined){
									var sz=-lib.skill[skill].kzsg_CmaxHp_E;
									if(sz>0){
										player.gainMaxHp(sz);
									};
									if(sz<0){
										var num=sz;
										if(num>player.maxHp) num=player.maxHp;
										if(num>0){
											player.loseMaxHp(num);
											if(player.maxHp==0) player.die();
										};
										player.gainMaxHp(sz);
									};
								};
								if(lib.skill[skill].kzsg_Chp_E!=undefined){
									var sz=-lib.skill[skill].kzsg_Chp_E;
									if(sz>0) player.recover(sz);
									if(sz<0) player.loseHp(sz);
								};
							};
						};
						delete player.storage.kzol_kzsg_useBW;
						delete target.storage.kzol_kzsg_useBW;
						player.unmarkSkill('_kzol_kzsg_useBW');
						target.unmarkSkill('_kzol_kzsg_useBW');
						if(game.kzol_e_card_bw.contains(target)){
							game.kzol_kzsg_move(_status.kzol_kzsg_divs.e_bw,_status.kzol_kzsg_divs.e_md,'e',target);
						};
						if(game.kzol_p_card_bw.contains(target)){
							game.kzol_kzsg_move(_status.kzol_kzsg_divs.p_bw,_status.kzol_kzsg_divs.p_md,'p',target);
						};
						var gl=0;
						var skills=target.getSkills();
						for(var i=0;i<skills.length;i++){
							var skill=skills[i];
							if(lib.skill[skill].kzsg_revive!=undefined) gl+=lib.skill[skill].kzsg_revive;
						};
						if(gl>0&&Math.random()<gl){
							setTimeout(function(){
								target.kzsg_revive();
							},1900);
						};
					};
					'step 1'
					if(lib.config.mode_config.kzsg.swljxc==false&&_status.kzol_kzsg_onPKC==undefined){
						player.classList.add('out');
					}else{
						game.players.remove(player);
						if(game.kzol_e_card.contains(player)){
							game.kzol_kzsg_move(_status.kzol_kzsg_divs.e_war,_status.kzol_kzsg_divs.e_md,'e',player);
						};
						if(game.kzol_p_card.contains(player)){
							game.kzol_kzsg_move(_status.kzol_kzsg_divs.p_war,_status.kzol_kzsg_divs.p_md,'p',player);
						};
						var gl=0;
						var skills=player.getSkills();
						for(var i=0;i<skills.length;i++){
							var skill=skills[i];
							if(lib.skill[skill].kzsg_revive!=undefined) gl+=lib.skill[skill].kzsg_revive;
						};
						if(gl>0&&Math.random()<gl){
							setTimeout(function(){
								player.kzsg_revive();
							},1900);
						};
					};
				},
			},
			'_kzol_kzsg_roundStart':{
				/*
				trigger:{
					player:'phaseAfter'
				},
				forced:true,
				popup:false,
				filter:function(event,player){
					if(player!=game.players[game.players.length-1]) return false
					return game.players.length>0&&_status.kzol_kzsg_roundNumber!=game.roundNumber-1;
				},
				*/
				content:function(){
					var needToRemove=[];
					for(var i=0;i<game.players.length;i++){
						var pl=game.players[i];
						if(pl.classList.contains('out')){
							needToRemove.push(pl);
						};
					};
					for(var i=0;i<needToRemove.length;i++){
						var pl=needToRemove[i];
						pl.classList.remove('out');
						game.players.remove(pl);
						if(game.kzol_e_card.contains(pl)){
							game.kzol_kzsg_move(_status.kzol_kzsg_divs.e_war,_status.kzol_kzsg_divs.e_md,'e',pl);
						};
						if(game.kzol_p_card.contains(pl)){
							game.kzol_kzsg_move(_status.kzol_kzsg_divs.p_war,_status.kzol_kzsg_divs.p_md,'p',pl);
						};
						var gl=0;
						var skills=pl.getSkills();
						for(var j=0;j<skills.length;j++){
							var skill=skills[j];
							if(lib.skill[skill].kzsg_revive!=undefined) gl+=lib.skill[skill].kzsg_revive;
						};
						if(gl>0&&Math.random()<gl){
							setTimeout(function(){
								pl.kzsg_revive();
							},1900);
						};
					};
					if(game.roundNumber>=100){
						if(game.kzol_p_hp>game.kzol_e_hp){
							game.kzol_winWar(true);
						}else if(game.kzol_p_hp<game.kzol_e_hp){
							game.kzol_winWar(false);
						}else{
							game.kzol_winWar();
						};
					};
					if(_status.kzol_kzsg_round==undefined) _status.kzol_kzsg_round={};
					if(_status.kzol_kzsg_round[game.roundNumber]==undefined){
						_status.kzol_kzsg_round[game.roundNumber]=true;
						if(game.kzol_p_card_wait1.length>0) game.kzol_kzsg_move(_status.kzol_kzsg_divs.p_cs,_status.kzol_kzsg_divs.p_wait,'p');
						if(game.kzol_e_card_wait1.length>0) game.kzol_kzsg_move(_status.kzol_kzsg_divs.e_cs,_status.kzol_kzsg_divs.e_wait,'e');
						//setTimeout(function(){
							var list_allMD=[];
							for(var i=0;i<game.kzol_p_card_md.length;i++){
								var pl=game.kzol_p_card_md[i];
								list_allMD.push(pl);
							};
							for(var i=0;i<game.kzol_e_card_md.length;i++){
								var pl=game.kzol_e_card_md[i];
								list_allMD.push(pl);
							};
							for(var i=0;i<game.kzol_p_card_wait.length;i++){
								var pl=game.kzol_p_card_wait[i];
								list_allMD.push(pl);
							};
							for(var i=0;i<game.kzol_e_card_wait.length;i++){
								var pl=game.kzol_e_card_wait[i];
								list_allMD.push(pl);
							};
							for(var i=0;i<list_allMD.length;i++){
								var pl=list_allMD[i];
								/*
								if(pl.storage.kzsg_燃烧!=undefined){
									pl.storage.kzsg_燃烧--;
									pl.syncStorage('kzsg_燃烧');
									if(pl.storage.kzsg_燃烧<=0){
										pl.unmarkSkill('kzsg_燃烧');
										delete pl.storage.kzsg_燃烧;
									};
								};
								*/
								if(pl.storage.kzsg_毒刃1!=undefined){
									pl.storage.kzsg_毒刃1--;
									pl.syncStorage('kzsg_毒刃1');
									if(pl.storage.kzsg_毒刃1<=0){
										pl.unmarkSkill('kzsg_毒刃1');
										delete pl.storage.kzsg_毒刃1;
									};
								};
								if(pl.storage.kzsg_毒刃2!=undefined){
									pl.storage.kzsg_毒刃2--;
									pl.syncStorage('kzsg_毒刃2');
									if(pl.storage.kzsg_毒刃2<=0){
										pl.unmarkSkill('kzsg_毒刃2');
										delete pl.storage.kzsg_毒刃2;
									};
								};
								if(pl.storage.kzsg_毒刃3!=undefined){
									pl.storage.kzsg_毒刃3--;
									pl.syncStorage('kzsg_毒刃3');
									if(pl.storage.kzsg_毒刃3<=0){
										pl.unmarkSkill('kzsg_毒刃3');
										delete pl.storage.kzsg_毒刃3;
									};
								};
								if(pl.storage.kzsg_冰封1!=undefined){
									pl.storage.kzsg_冰封1--;
									pl.syncStorage('kzsg_冰封1');
									if(pl.storage.kzsg_冰封1<=0){
										pl.unmarkSkill('kzsg_冰封1');
										delete pl.storage.kzsg_冰封1;
									};
								};
							};
							var list=[];
							var list1=[];
							var kzsg_changePrepareRound=function(pl,num,side){
								pl.kzsg.prepareRound-=num;
								pl.node.prepareRound.innerHTML=pl.kzsg.prepareRound;
								if(pl.kzsg.prepareRound<=0){
									pl.node.prepareRound.hide();
									pl.node.prepareRound_str.hide();
									//pl.node.prepareRound.hidding=true;
									var skills=pl.getSkills();
									for(var i=0;i<skills.length;i++){
										var skill=skills[i];
										if(side=='p'){
											var list3=[];
											for(var j=0;j<game.kzol_p_card_wait.length;j++){
												if(game.kzol_p_card_wait[j].kzsg.prepareRound>0) list3.push(game.kzol_p_card_wait[j]);
											};
											if(lib.skill[skill].DprepareRound!=undefined&&list3.length>0){
												var pl1=list3.randomGet();
												kzsg_changePrepareRound(pl1,lib.skill[skill].DprepareRound);
												pl.popup('冲阵'+lib.skill[skill].DprepareRound);
												game.log(pl,'发动技能【冲阵'+lib.skill[skill].DprepareRound+'】');
												game.log(pl1,'发起冲锋');
											};
											if(lib.skill[skill].IprepareRound!=undefined&&game.kzol_e_card_wait.length>0){
												var pl1=game.kzol_e_card_wait.randomGet();
												kzsg_changePrepareRound(pl1,-lib.skill[skill].IprepareRound);
												pl.popup('蛊惑'+lib.skill[skill].IprepareRound);
												game.log(pl,'蛊惑了',pl1);
											};
											if(lib.skill[skill].kzsg_Catt!=undefined){
												var sz=lib.skill[skill].kzsg_Catt;
												for(var j in sz){
													for(var a=0;a<game.kzol_p_card.length;a++){
														var pl2=game.kzol_p_card[a];
														if(j=='all'){
															if(pl2.kzsg.type!='宝物'&&pl2.kzsg.type!='术'){
																pl2.kzsg_addAttack(sz[j]);
																game.log(pl,'激励了',pl2);
															};
														}else{
															if(pl2.kzsg.type==j){
																pl2.kzsg_addAttack(sz[j]);
																game.log(pl,'激励了',pl2);
															};
														};
													};
												};
												pl.popup('激励');
											};
											if(lib.skill[skill].kzsg_CmaxHp!=undefined){
												var sz=lib.skill[skill].kzsg_CmaxHp;
												for(var j in sz){
													for(var a=0;a<game.kzol_p_card.length;a++){
														var pl2=game.kzol_p_card[a];
														if(pl2.kzsg.type==j){
															if(sz[j]>0){
																pl2.gainMaxHp(sz[j]);
																game.log(pl,'保护了',pl2);
															};
															if(sz[j]<0){
																var num=sz[j];
																if(num>pl2.maxHp) num=pl2.maxHp;
																if(num>0){
																	pl2.loseMaxHp(num);
																	if(pl2.maxHp==0) pl2.die();
																};
																pl2.gainMaxHp(sz[j]);
															};
														};
													};
												};
												pl.popup(get.translation(skill));
												game.log(pl,'发动技能【'+get.translation(skill)+'】');
											};
											if(lib.skill[skill].kzsg_Chp!=undefined){
												var sz=lib.skill[skill].kzsg_Chp;
												for(var j in sz){
													for(var a=0;a<game.kzol_p_card.length;a++){
														var pl2=game.kzol_p_card[a];
														if(pl2.kzsg.type==j){
															if(sz[j]>0){
																pl2.recover(sz[j]);
																game.log(pl,'保护了',pl2);
															};
															if(sz[j]<0){
																pl2.loseHp(sz[j]);
															};
														};
													};
												};
												pl.popup(get.translation(skill));
												game.log(pl,'发动技能【'+get.translation(skill)+'】');
											};
										}else{
											var list3=[];
											for(var j=0;j<game.kzol_e_card_wait.length;j++){
												if(game.kzol_e_card_wait[j].kzsg.prepareRound>0) list3.push(game.kzol_e_card_wait[j]);
											};
											if(lib.skill[skill].DprepareRound!=undefined&&list3.length>0){
												var pl1=list3.randomGet();
												kzsg_changePrepareRound(pl1,lib.skill[skill].DprepareRound);
												pl.popup('冲阵'+lib.skill[skill].DprepareRound);
												game.log(pl,'发动技能【冲阵'+lib.skill[skill].DprepareRound+'】');
												game.log(pl1,'发起冲锋');
											};
											if(lib.skill[skill].IprepareRound!=undefined&&game.kzol_p_card_wait.length>0){
												var pl1=game.kzol_p_card_wait.randomGet();
												kzsg_changePrepareRound(pl1,-lib.skill[skill].IprepareRound);
												pl.popup('蛊惑'+lib.skill[skill].IprepareRound);
												game.log(pl,'蛊惑了',pl1);
											};
											if(lib.skill[skill].kzsg_Catt!=undefined){
												var sz=lib.skill[skill].kzsg_Catt;
												for(var j in sz){
													for(var a=0;a<game.kzol_e_card.length;a++){
														var pl2=game.kzol_e_card[a];
														if(j=='all'){
															if(pl2.kzsg.type!='宝物'&&pl2.kzsg.type!='术'){
																pl2.kzsg_addAttack(sz[j]);
																game.log(pl,'激励了',pl2);
															};
														}else{
															if(pl2.kzsg.type==j){
																pl2.kzsg_addAttack(sz[j]);
																game.log(pl,'激励了',pl2);
															};
														};
													};
												};
												pl.popup('激励');
											};
											if(lib.skill[skill].kzsg_CmaxHp!=undefined){
												var sz=lib.skill[skill].kzsg_CmaxHp;
												for(var j in sz){
													for(var a=0;a<game.kzol_e_card.length;a++){
														var pl2=game.kzol_e_card[a];
														if(pl2.kzsg.type==j){
															if(sz[j]>0){
																pl2.gainMaxHp(sz[j]);
																game.log(pl,'保护了',pl2);
															};
															if(sz[j]<0){
																var num=sz[j];
																if(num>pl2.maxHp) num=pl2.maxHp;
																if(num>0){
																	pl2.loseMaxHp(num);
																	if(pl2.maxHp==0) pl2.die();
																};
																pl2.gainMaxHp(sz[j]);
															};
														};
													};
												};
												pl.popup(get.translation(skill));
												game.log(pl,'发动技能【'+get.translation(skill)+'】');
											};
											if(lib.skill[skill].kzsg_Chp!=undefined){
												var sz=lib.skill[skill].kzsg_Chp;
												for(var j in sz){
													for(var a=0;a<game.kzol_e_card.length;a++){
														var pl2=game.kzol_e_card[a];
														if(pl2.kzsg.type==j){
															if(sz[j]>0){
																pl2.recover(sz[j]);
																game.log(pl,'保护了',pl2);
															};
															if(sz[j]<0){
																pl2.loseHp(sz[j]);
															};
														};
													};
												};
												pl.popup(get.translation(skill));
												game.log(pl,'发动技能【'+get.translation(skill)+'】');
											};
										};
										if(lib.skill[skill].CSQ!=undefined){
											var sz=lib.skill[skill].CSQ;
											for(var j in sz){
												pl.kzsg_damageSQ(sz[j],j);
												if(sz[j]>0){
													setTimeout(function(){
														pl.popup('降士气');
														game.log(pl,'发动技能【降士气】');
													},500);
												};
											};
										};
										if(pl.hasSkill('kzsg_军魂')){
											if(side=='p'){
												var target=game.kzol_p_card;
											}else{
												var target=game.kzol_e_card;
											};
											pl.kzsg_addAttack(target.length);
											pl.popup('军魂');
											game.log(pl,'发动技能【军魂】');
										};
										if(pl.hasSkill('kzsg_联盟')){
											if(side=='p'){
												var target=game.kzol_p_card;
											}else{
												var target=game.kzol_e_card;
											};
											var bool=false;
											for(var i=0;i<target.length;i++){
												if(target[i].group==pl.group) bool=true;
											};
											if(bool==true){
												var list4=['kzsg_横扫','kzsg_丹术2'];
												var skill1=list4.randomGet();
												pl.addSkill(skill1);
												pl.popup('联盟');
												game.log(pl,'发动技能【联盟】');
											};
										};
									};
									if(side=='p'){
										var target=game.kzol_p_card;
									}else{
										var target=game.kzol_e_card;
									};
									for(var i=0;i<target.length;i++){
										var skills=target[i].getSkills();
										for(var x=0;x<skills.length;x++){
											var skill=skills[x];
											if(lib.skill[skill].kzsg_Catt!=undefined){
												var sz=lib.skill[skill].kzsg_Catt;
												for(var j in sz){
													if(j=='all'){
														if(pl.kzsg.type!='宝物'&&pl.kzsg.type!='术'){
															pl.kzsg_addAttack(sz[j]);
															pl.popup('受激励');
															game.log(pl,'受到',target[i],'的激励');
														};
													}else{
														if(pl.kzsg.type==j){
															pl.kzsg_addAttack(sz[j]);
															pl.popup('受激励');
															game.log(pl,'受到',target[i],'的激励');
														};
													};
												};
											};
											if(lib.skill[skill].kzsg_CmaxHp!=undefined){
												var sz=lib.skill[skill].kzsg_CmaxHp;
												for(var j in sz){
													if(pl.kzsg.type==j){
														if(sz[j]>0){
															pl.gainMaxHp(sz[j]);
															pl.popup('受保护');
															game.log(pl,'受到',target[i],'的保护');
														};
														if(sz[j]<0){
															var num=sz[j];
															if(num>pl.maxHp) num=pl.maxHp;
															if(num>0){
																pl.loseMaxHp(num);
																if(pl.maxHp==0) pl.die();
															};
															pl.gainMaxHp(sz[j]);
														};
													};
												};
												
											};
											if(lib.skill[skill].kzsg_Chp!=undefined){
												var sz=lib.skill[skill].kzsg_Chp;
												for(var j in sz){
													if(pl.kzsg.type==j){
														if(sz[j]>0){
															pl.recover(sz[j]);
															pl.popup('受保护');
															game.log(pl,'受到',target[i],'的保护');
														};
														if(sz[j]<0){
															pl.loseHp(sz[j]);
														};
													};
												};
											};
										};
									};
								};
							};
							if(game.kzsg_changePrepareRound==undefined) game.kzsg_changePrepareRound=kzsg_changePrepareRound;
							for(var i=0;i<game.kzol_p_card_wait.length;i++){
								var pl=game.kzol_p_card_wait[i];
								kzsg_changePrepareRound(pl,1,'p');
							};
							for(var i=0;i<game.kzol_p_card_wait.length;i++){
								var pl=game.kzol_p_card_wait[i];
								if(pl.kzsg.prepareRound<=0) list.push(pl);
							};
							for(var i=0;i<list.length;i++){
								if(list[i].kzsg.type=='术'||list[i].kzsg.type=='宝物'){
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.p_wait,_status.kzol_kzsg_divs.p_bw,'p',list[i]);
								}else{
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.p_wait,_status.kzol_kzsg_divs.p_war,'p',list[i]);
								};
							};
							for(var i=0;i<game.kzol_e_card_wait.length;i++){
								var pl=game.kzol_e_card_wait[i];
								kzsg_changePrepareRound(pl,1,'e');
							};
							for(var i=0;i<game.kzol_e_card_wait.length;i++){
								var pl=game.kzol_e_card_wait[i];
								if(pl.kzsg.prepareRound<=0) list1.push(pl);
							};
							for(var i=0;i<list1.length;i++){
								if(list1[i].kzsg.type=='术'||list1[i].kzsg.type=='宝物'){
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.e_wait,_status.kzol_kzsg_divs.e_bw,'e',list1[i]);
								}else{
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.e_wait,_status.kzol_kzsg_divs.e_war,'e',list1[i]);
								};
							};
						//},800);
					};
					//game.phaseLoop(game.players[0]);
				},
			},
			'_kzol_kzsg_delay':{
				trigger:{
					player:'phaseBefore'
				},
				forced:true,
				popup:false,
				priority:-Infinity,
				filter:function(event,player){
					return false;
					//return game.kzol_e_card.length==0||game.kzol_p_card.length==0;
				},
				content:function(){
					//var num=3;
					//if(lib.config.game_speed=='vvfast') num=9;
					if(lib.config.mode_config.kzsg.yxsd==undefined) lib.config.mode_config.kzsg.yxsd=1;
					var num_yxsd=3/parseInt(lib.config.mode_config.kzsg.yxsd);
					game.delay(num_yxsd);
				},
			},
			'_kzol_kzsg_phaseDraw':{
				trigger:{
					player:'phaseDrawBegin'
				},
				forced:true,
				popup:false,
				priority:-Infinity,
				content:function(){
					trigger.num=0;
				},
			},
			'_kzol_kzsg_phaseDraw1':{
				trigger:{
					player:'phaseDrawAfter'
				},
				forced:true,
				popup:false,
				priority:-Infinity,
				filter:function(event,player){
					return player.kzsg.attack>0;
				},
				content:function(){
					var card=game.createCard({name:'sha'});
					card.kzol_needToRemove=true;
					player.gain(card,'gain2');
				},
			},
			'_kzol_kzsg_damage':{
				trigger:{
					source:'damageBefore'
				},
				forced:true,
				popup:false,
				priority:Infinity,
				filter:function(event,player){
					return event.kzsg_exDamage!=false;
				},
				content:function(){
					if(player.kzsg!=undefined&&player.kzsg.attack!=undefined) trigger.num+=player.kzsg.attack-1;
				},
			},
			'_kzol_kzsg_sha':{
				enable:"phaseUse",
				//usable:1,
				filterCard:function(card){
					return card.name=='sha';
				},
				discard:false,
				check:function(card){return 1},
				filter:function(event,player){
					if(game.kzol_p_card==undefined) return false;
					if(game.kzol_e_card==undefined) return false;
					var num=-1;
					//var side;
					if(game.kzol_p_card.contains(player)){
						if(game.countPlayer(function(current){
							return current.hasSkill('kzsg_零距离')&&game.kzol_e_card.contains(current);
						})>0) return false;
						num=player.kzsg_getSeat(player,'p');
						if(game.kzol_e_card[num]==undefined||(game.kzol_e_card[num]!=undefined&&game.kzol_e_card[num].classList.contains('out'))) return true;
					};
					if(game.kzol_e_card.contains(player)){
						if(game.countPlayer(function(current){
							return current.hasSkill('kzsg_零距离')&&game.kzol_p_card.contains(current);
						})>0) return false;
						num=player.kzsg_getSeat(player,'e');
						if(game.kzol_p_card[num]==undefined||(game.kzol_e_card[num]!=undefined&&game.kzol_e_card[num].classList.contains('out'))) return true;
					};
					return false;
				},
				content:function(){
					player.useCard(cards[0]);
					if(player.kzsg.attack>0) player.kzsg_damageSQ(player.kzsg.attack,true);
				},
				ai:{
					order:20,
					result:{
						player:1,
					},
				},
			},			
			'_kzol_kzsg_useShu':{
				trigger:{
					global:'roundStart',
				},
				enable:"phaseUse",
				//usable:1,
				filter:function(event,player){
					if(player.storage.kzsg_洞察==true) return false;
					//if(player.kzsg.type!='武将') return false;
					var list1=[];
					if(game.kzol_p_card.contains(player)){
						var list=game.kzol_p_card_bw;
					}else{
						var list=game.kzol_e_card_bw;
					};
					for(var j=0;j<list.length;j++){
						var pl=list[j];
						if(pl.kzsg.type=='术'){
							var skills=pl.getSkills();
							var bool=false;
							for(var i=0;i<skills.length;i++){
								var skill=skills[i];
								if(lib.skill[skill].enable!=undefined&&lib.skill[skill].filter!=undefined&&lib.skill[skill].filter(event,player)){
									bool=true;
								};
							};
							if(bool==true) list1.push(pl);
						};
					};
					return list1.length>0;
				},
				content:function(){
					'step 0'
					//if(player.kzsg.type!='武将') return false;
					var list1=[];
					if(game.kzol_p_card.contains(player)){
						var list=game.kzol_p_card_bw;
					}else{
						var list=game.kzol_e_card_bw;
					};
					for(var j=0;j<list.length;j++){
						var pl=list[j];
						if(pl.kzsg.type=='术'){
							var skills=pl.getSkills();
							var bool=false;
							for(var i=0;i<skills.length;i++){
								var skill=skills[i];
								if(lib.skill[skill].enable!=undefined&&lib.skill[skill].filter!=undefined&&lib.skill[skill].filter(_status.event,player)){
									bool=true;
								};
							};
							if(bool==true) list1.push(pl);
						};
					};
					if(list1.length>0){
						event.target=list1.randomGet();
						var target=event.target;
						var skills=target.getSkills();
						for(var i=0;i<skills.length;i++){
							var skill=skills[i];
							if(lib.skill[skill].enable!=undefined&&lib.skill[skill].filter!=undefined&&lib.skill[skill].filter(_status.event,player)){
								player.useSkill(skill);
							};
						};
						player.popup(get.translation(target.name));
					}else{
						event.finish();
					};
					'step 1'
					var target=event.target;
					if(game.kzol_e_card_bw.contains(target)){
						game.kzol_kzsg_move(_status.kzol_kzsg_divs.e_bw,_status.kzol_kzsg_divs.e_md,'e',target);
					};
					if(game.kzol_p_card_bw.contains(target)){
						game.kzol_kzsg_move(_status.kzol_kzsg_divs.p_bw,_status.kzol_kzsg_divs.p_md,'p',target);
					};
					var gl=0;
					var skills=target.getSkills();
					for(var i=0;i<skills.length;i++){
						var skill=skills[i];
						if(lib.skill[skill].kzsg_revive!=undefined) gl+=lib.skill[skill].kzsg_revive;
					};
					if(gl>0&&Math.random()<gl){
						setTimeout(function(){
							target.kzsg_revive();
						},1900);
					};
				},
				ai:{
					order:19,
					result:{
						player:1,
					},
				},
			},
			'_kzol_kzsg_useBW':{
				enable:"phaseUse",
				//usable:1,
				filter:function(event,player){
					if(player.storage.kzol_kzsg_useBW!=undefined) return false;
					var list1=[];
					if(game.kzol_p_card.contains(player)){
						var list=game.kzol_p_card_bw;
					}else{
						var list=game.kzol_e_card_bw;
					};
					for(var j=0;j<list.length;j++){
						var pl=list[j];
						if(pl.kzsg.type=='宝物'&&pl.storage.kzol_kzsg_useBW==undefined) list1.push(pl);
					};
					return list1.length>0;
				},
				content:function(){
					var list1=[];
					if(game.kzol_p_card.contains(player)){
						var list=game.kzol_p_card_bw;
					}else{
						var list=game.kzol_e_card_bw;
					};
					for(var j=0;j<list.length;j++){
						var pl=list[j];
						if(pl.kzsg.type=='宝物'&&pl.storage.kzol_kzsg_useBW==undefined) list1.push(pl);
					};
					if(list1.length>0){
						event.target=list1.randomGet();
						var target=event.target;
						var skills=target.getSkills();
						for(var i=0;i<skills.length;i++){
							var skill=skills[i];
							if(lib.skill[skill].kzsg_Catt_E!=undefined||lib.skill[skill].kzsg_CmaxHp_E!=undefined||lib.skill[skill].kzsg_Chp_E!=undefined){
								if(lib.skill[skill].kzsg_Catt_E!=undefined) player.kzsg_addAttack(lib.skill[skill].kzsg_Catt_E);
								if(lib.skill[skill].kzsg_CmaxHp_E!=undefined){
									var sz=lib.skill[skill].kzsg_CmaxHp_E;
									if(sz>0){
										player.gainMaxHp(sz);
									};
									if(sz<0){
										var num=sz;
										if(num>player.maxHp) num=player.maxHp;
										if(num>0){
											player.loseMaxHp(num);
											if(player.maxHp==0) player.die();
										};
										player.gainMaxHp(sz);
									};
								};
								if(lib.skill[skill].kzsg_Chp_E!=undefined){
									var sz=lib.skill[skill].kzsg_Chp_E;
									if(sz>0) player.recover(sz);
									if(sz<0) player.loseHp(sz);
								};
							}else{
								player.addTempSkill(skill,{player:'dieBegin'});
							};
						};
						player.popup(get.translation(target.name));
						game.log(player,'携带了',target);
						player.storage.kzol_kzsg_useBW=target;
						target.storage.kzol_kzsg_useBW=player;
						player.markSkillCharacter('_kzol_kzsg_useBW',target,'宝物：'+get.translation(target.name));
						target.markSkillCharacter('_kzol_kzsg_useBW',player,get.translation(target.name),'被'+get.translation(player.name)+'携带中');
					};
				},
				ai:{
					order:19,
					result:{
						player:1,
					},
				},
			},
		},
		translate:{
			'_kzol_kzsg_sha':'震慑',
			'_kzol_kzsg_useShu':'术',
			'_kzol_kzsg_useBW':'装备宝物',
			//'mode_kzsg_character_config':'卡战武将',
		},
		get:{
			distance:function(from,to,method){
				if(from==to) return 0;
				if(!game.players.contains(from)&&!game.dead.contains(from)) return Infinity;
				if(!game.players.contains(to)&&!game.dead.contains(to)) return Infinity;
				var player=from,m,n=1,i;
				var length=game.players.length;
				var n1=-1;
				var n2=-1;
				var p1;
				var side;
				for(i=0;i<game.kzol_p_card.length;i++){
					var pl=game.kzol_p_card[i];
					if(pl==from){
						p1=pl;
						n1=i;
						side='p';
					};
				};
				for(i=0;i<game.kzol_e_card.length;i++){
					var pl=game.kzol_e_card[i];
					if(pl==from){
						p1=pl;
						n1=i;
						side='e';
					};
				};
				if(n1!=-1){
					if(side=='p'){
						if(game.kzol_e_card.contains(to)){
							for(i=0;i<game.kzol_e_card.length;i++){
								var pl=game.kzol_e_card[i];
								if(pl==to) n2=i;
							};
							n=n1-n2;
							if(n<0) n=-n;
							n=n+1;
						};
						if(game.kzol_p_card.contains(to)){
							for(i=0;i<game.kzol_p_card.length;i++){
								var pl=game.kzol_p_card[i];
								if(pl==to) n2=i;
							};
							n=n1-n2;
							if(n<0) n=-n;
						};
					};
					if(side=='e'){
						if(game.kzol_p_card.contains(to)){
							for(i=0;i<game.kzol_p_card.length;i++){
								var pl=game.kzol_p_card[i];
								if(pl==to) n2=i;
							};
							n=n1-n2;
							if(n<0) n=-n;
							n=n+1;
						};
						if(game.kzol_e_card.contains(to)){
							for(i=0;i<game.kzol_e_card.length;i++){
								var pl=game.kzol_e_card[i];
								if(pl==to) n2=i;
							};
							n=n1-n2;
							if(n<0) n=-n;
						};
					};
				};
				if(method=='raw'||method=='pure'||method=='absolute') return n;
    
				n=game.checkMod(from,to,n,'globalFrom',from);
				n=game.checkMod(from,to,n,'globalTo',to);
				m=n;
				m=game.checkMod(from,to,m,'attackFrom',from);
				m=game.checkMod(from,to,m,'attackTo',to);
				var equips1=from.getCards('e',function(card){
					return !ui.selected.cards||!ui.selected.cards.contains(card);
				}),equips2=to.getCards('e',function(card){
					return !ui.selected.cards||!ui.selected.cards.contains(card);
				});
				for(i=0;i<equips1.length;i++){
					var info=get.info(equips1[i]).distance;
					if(!info) continue;
					if(info.globalFrom){
						m+=info.globalFrom;
						n+=info.globalFrom;
					}
					if(info.attackFrom){
						m+=info.attackFrom;
					}
				}
				for(i=0;i<equips2.length;i++){
					var info=get.info(equips2[i]).distance;
					if(!info) continue;
					if(info.globalTo){
						m+=info.globalTo;
						n+=info.globalTo;
					}
					if(info.attaclTo){
						m+=info.attaclTo;
					}
				}
				if(method=='attack') return m;
				return n;
			},
		},
		ai:{
			get:{
				rawAttitude:function(from,to){
					if(game.kzol_p_card.contains(from)){
						if(game.kzol_e_card.contains(to)) return -5;
						return 5;
					};
					if(game.kzol_e_card.contains(from)){
						if(game.kzol_p_card.contains(to)) return -5;
						return 5;
					};
					return 0;
				},
			},
		},
	},{
		translate:'卡战',
		extension:'扩展ol',
		config:{
			ckjc:{
				name:'新手教程',
				init:true,
				onclick:function(bool){
					game.saveConfig('ckjc',bool,'kzsg');
				},
				restart:true,
			},
			ydfj:{
				name:'卡牌移动分节',
				init:1,
				item:{
					1:'1',
					2:'2',
					3:'3',
					4:'4',
					5:'5',
				},
				frequent:true,
				//restart:true,
				intro:'分节越多移动起来越平滑，但也越占用资源',
			},
			yxsd:{
				name:'游戏速度（额外）',
				init:1,
				item:{
					1:'一倍',
					2:'两倍',
					3:'三倍',
					4:'四倍',
					5:'五倍',
				},
				frequent:true,
				intro:'设置额外的游戏速度（卡牌移动速度不变）',
			},
			mykps:{
				name:'每页卡牌数',
				init:18,
				item:{
					18:'18',
					36:'36',
					54:'54',
					72:'72',
					90:'90',
					108:'108',
				},
				frequent:true,
				onclick:function(bool){
					game.saveConfig('mykps',bool,'kzsg');
					if(_status.kzol_kzsg_dialogs7!=undefined&&_status.kzol_kzsg_dialogs7.dialog.style.display!='none') delete _status.kzol_kzsg_changeCK;
					if(_status.kzol_kzsg_dialogs15!=undefined&&_status.kzol_kzsg_dialogs15.dialog.style.display!='none') delete _status.kzol_kzsg_changeCardCK;
				},
			},
			jmsf:{
				name:'界面缩放',
				init:false,
				onclick:function(bool){
					game.saveConfig('jmsf',bool,'kzsg');
					if(lib.config.mode_config.kzsg.jmsf==true){
						if(ui.window.offsetWidth<1000){
							var sf_num=ui.window.offsetWidth/1000;
							game.documentZoom=Math.round(game.documentZoom*sf_num*10)/10;
							ui.updatez();
						};
						if(ui.window.offsetHeight<600){
							var sf_num=ui.window.offsetHeight/600;
							game.documentZoom=Math.round(game.documentZoom*sf_num*10)/10;
							ui.updatez();
						};
					}else{
						game.documentZoom=game.deviceZoom;
						ui.updatez();
					};
				},
				intro:'开启后界面将自动缩放至UI互不叠加的大小',
			},
			jmsf_zd:{
				name:'战斗界面缩放',
				init:true,
				onclick:function(bool){
					game.saveConfig('jmsf_zd',bool,'kzsg');
				},
				intro:'开启后战斗界面将自动缩放至UI互不叠加的大小（需刷新）',
				restart:true,
			},
			zdjmdxgd:{
				name:'战斗界面 卡片大小固定',
				init:false,
			},
			acbj_3d:{
				name:'3D战斗布局',
				init:false,
				onclick:function(bool){
					game.saveConfig('acbj_3d',bool,'kzsg');
					if(lib.config.mode_config.kzsg.acbj_3d==true){
						ui.arena.style.top='calc(50% - '+(ui.arena.offsetHeight/1.6-60)+'px)';
						ui.arena.style.transform='scale(0.9, 0.9) perspective(1em) rotateX(0.6deg)';
					}else{
						ui.arena.style.top=(_status.kzol_kzsg_arenaTop)+'px';
						ui.arena.style.transform='';
					};
				},
				intro:'非战斗界面内开启会造成战斗界面偏移<li>请在战斗界面内开启',
			},
			zdgbxzjssd:{
				name:'自动关闭限制结算速度',
				init:true,
				onclick:function(bool){
					game.saveConfig('zdgbxzjssd',bool,'kzsg');
				},
				restart:true,
			},
			zdgblsjll:{
				name:'隐藏历史记录栏',
				init:true,
				onclick:function(bool){
					game.saveConfig('zdgblsjll',bool,'kzsg');
				},
				restart:true,
			},
			kpsxfw:{
				name:'卡牌属性复位',
				onclick:function(){
					game.kzol_kzsg_changeCard();
				},
				intro:'写获得卡牌代码时候贪图方便，直接写了赋值，导致后面改动卡牌属性时同名同品质的卡牌也会跟着改动。这个问题在点击该选项后得以修复',
			},
			yddwfhd:{
				name:'移动端无法滑动时开启→',
				init:false,
				onclick:function(bool){
					game.saveConfig('yddwfhd',bool,'kzsg');
				},
				intro:'移动端无法滑动时开启',
				restart:true,
			},
			kzol_weather:{
				name:'天气变化',
				init:false,
				restart:true,
				frequent:true,
			},
			kzsg_czcd:{
				name:'重置卡战模式存档',
				frequent:true,
				onclick:function(){
					if(confirm('是否重置卡战模式存档？')){
						game.saveConfig('kzol_kzsg',{});
						alert('重置成功，即将刷新游戏');
						game.reload();
					};
				},
				clear:true
			},
			kzsg_drcd:{
				name:'导入卡战模式存档',
				frequent:true,
				onclick:function(){
					if(_status.kzol_kzsg_openedjm==undefined) _status.kzol_kzsg_openedjm=false;
					if(_status.kzol_kzsg_openedjm==false){
						_status.kzol_kzsg_openedjm=true;
						var div=ui.create.div();
						div.link_kzsgXX=true;
						div.innerHTML='<div style="white-space:nowrap;width:calc(100% - 10px)">'+
						'<input type="file" style="width:calc(100% - 40px)">'+
						'<button style="width:40px">导入</button></div>';
						div.querySelector('button').onclick=function(){
							if(!confirm('是否导入该存档？（导入后会覆盖当前存档，包括DIY卡牌）')){
								return ;
							};
							var fileToLoad=this.previousSibling.files[0];
							if(fileToLoad){
								var fileReader = new FileReader();
								fileReader.onload = function(fileLoadedEvent){
									var data = fileLoadedEvent.target.result;
									if(!data) return;
									try{
										data=JSON.parse(lib.init.decode(data));
										if(!data||typeof data!='object') throw('err');
									}
									catch(e){
										alert('导入失败');
										return;
									}
									if(data.army==undefined||
									data.army_num==undefined||
									data.card==undefined||
									data.card_num==undefined||
									data.coin==undefined||
									data.coin1==undefined){
										alert('导入失败');
										return;
									};
									alert('导入成功，即将刷新游戏');
									lib.config.kzol_kzsg=data;
									game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
									setTimeout(function(){
										game.reload();
									},1500);
								};
								fileReader.readAsText(fileToLoad, "UTF-8");
							}
						}
						this.parentNode.insertBefore(div,this.nextSibling);
					}else{
						_status.kzol_kzsg_openedjm=false;
						for(var i=0;i<this.parentNode.childNodes.length;i++){
							var div=this.parentNode.childNodes[i];
							if(div.link_kzsgXX==true){
								this.parentNode.removeChild(div);
								i--;
							};
						};
					};
				},
				clear:true
			},
			kzsg_dccd:{
				name:'导出卡战模式存档',
				frequent:true,
				onclick:function(){
					if(lib.config.kzol_kzsg==undefined){
						game.say1('未检测到卡战模式存档');
						return ;
					};
					game.export(lib.init.encode(JSON.stringify(lib.config.kzol_kzsg)),'卡战模式存档 - '+(new Date()).toLocaleString());
				},
				clear:true
			},
			kzsg_drcdDIY:{
				name:'导入卡战模式DIY卡牌包',
				frequent:true,
				onclick:function(){
					if(lib.config.kzol_kzsg==undefined||lib.config.kzol_kzsg.diy==undefined){
						game.say1('未检测到卡战模式DIY卡牌数据');
						return ;
					};
					if(_status.kzol_kzsg_openedjm==undefined) _status.kzol_kzsg_openedjm=false;
					if(_status.kzol_kzsg_openedjm==false){
						_status.kzol_kzsg_openedjm=true;
						var div=ui.create.div();
						div.link_kzsgXX=true;
						div.innerHTML='<div style="white-space:nowrap;width:calc(100% - 10px)">'+
						'<input type="file" style="width:calc(100% - 40px)">'+
						'<button style="width:40px">导入</button></div>';
						div.querySelector('button').onclick=function(){
							var fileToLoad=this.previousSibling.files[0];
							if(fileToLoad){
								if(!confirm('是否导入该DIY卡牌包？（导入后同名的DIY卡牌将会被覆盖）')){
									return ;
								};
								var fileReader=new FileReader();
								fileReader.onload=function(fileLoadedEvent){
									var data=fileLoadedEvent.target.result;
									game.kzol_loadDiyCard(data);
								};
								fileReader.readAsArrayBuffer(fileToLoad,"UTF-8");
							}else{
								game.say1('请先选择文件');
							};
							/*
							var fileToLoad=this.previousSibling.files[0];
							if(fileToLoad){
								var fileReader = new FileReader();
								fileReader.onload = function(fileLoadedEvent){
									var data = fileLoadedEvent.target.result;
									if(!data) return;
									try{
										data=JSON.parse(lib.init.decode(data));
										if(!data||typeof data!='object') throw('err');
									}
									catch(e){
										alert('导入失败');
										return;
									}
									var bool=false;
									for(var i in data){
										if(data[i].author!=undefined&&data[i].info!=undefined){
											bool=true;
										};
									};
									if(bool==false){
										alert('导入失败');
										return;
									};
									alert('导入成功，即将刷新游戏');
									if(lib.config.kzol_kzsg.diy==undefined) lib.config.kzol_kzsg.diy={};
									for(var i in data){
										lib.config.kzol_kzsg.diy[i]=data[i];
									};
									game.saveConfig('kzol_kzsg',lib.config.kzol_kzsg);
									setTimeout(function(){
										game.reload();
									},1500);
								};
								fileReader.readAsText(fileToLoad, "UTF-8");
							}
							*/
						};
						this.parentNode.insertBefore(div,this.nextSibling);
					}else{
						_status.kzol_kzsg_openedjm=false;
						for(var i=0;i<this.parentNode.childNodes.length;i++){
							var div=this.parentNode.childNodes[i];
							if(div.link_kzsgXX==true){
								this.parentNode.removeChild(div);
								i--;
							};
						};
					};
				},
				clear:true
			},
			kzsg_dccdDIY:{
				name:'导出卡战模式DIY卡牌包',
				frequent:true,
				onclick:function(){
					var div1=this;
					if(div1.onDC==true){
						game.say1('正在导出中，请稍候');
						return ;
					};
					if(lib.config.kzol_kzsg_createImageFiles!=true){
						game.say1('未检测到kzsg_image文件夹');
						return ;
					};
					if(lib.config.kzol_kzsg==undefined||lib.config.kzol_kzsg.diy==undefined){
						game.say1('未检测到卡战模式DIY卡牌数据');
						return ;
					};
					div1.innerHTML='<span style="cursor:pointer">导出中...</span>';
					div1.onDC=true;
					game.kzol_importDiyCard(function(){
						div1.innerHTML='<span style="cursor:pointer">导出卡战模式DIY卡牌包</span>';
						delete div1.onDC;
					});
					/*
					game.export(lib.init.encode(JSON.stringify(lib.config.kzol_kzsg.diy)),'卡战模式DIY卡牌包 - '+(new Date()).toLocaleString());
					*/
				},
				clear:true
			},
			duidan:{
				name:'急救对单',
				init:false,
				intro:'竞技场无效',
			},
			swljxc:{
				name:'死亡立即下场',
				init:true,
				intro:'关闭后，卡牌死亡后会先虚化（无法被选中）；每一轮开始时，以此法虚化的卡牌进入墓地<br>竞技场默认开启',
			},
		},
	});
	lib.group.push('xia');
	lib.translate.xia='侠';
}