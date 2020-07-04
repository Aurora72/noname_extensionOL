window.func=function(lib,game,ui,get,ai,_status){
	game.import('character',function(lib,game,ui,get,ai,_status){
		var c_shenghen={
			name:'c_shenghen',
			connect:true,
			character:{
				"SH_夏洛特":["female","shenghen",3,["SH_圣痕1"],[]],
			},
			skill:{
				'SH_圣痕1':{
					trigger:{
						global:'gameStart'
					},
					forced:true,
					content:function(){
						var card1=game.createCard({name:'SH_夏洛特1'});
						player.gain(card1,'gain2');
						player.equip(card1);
						var card2=game.createCard({name:'SH_夏洛特2'});
						player.gain(card2,'gain2');
						player.equip(card2);
						var card3=game.createCard({name:'SH_夏洛特3'});
						player.gain(card3,'gain2');
						player.equip(card3);
					},
				},
			},
			translate:{
				'SH_夏洛特':'夏洛特',
				'SH_圣痕1':'圣痕',
				'SH_圣痕1_info':'游戏开始时，你装备一套圣痕【夏洛特】',
			},
		};
		if(lib.device||lib.node){
			for(var i in c_shenghen.character){c_shenghen.character[i][4].push('ext:扩展ol/'+i+'.jpg');}
		}else{
			for(var i in c_shenghen.character){c_shenghen.character[i][4].push('db:extension-扩展ol:'+i+'.jpg');}
		}
		return c_shenghen;
	});
	lib.config.all.characters.push('c_shenghen');
	if(!lib.config.characters.contains('c_shenghen')) lib.config.characters.push('c_shenghen');
	lib.translate['c_shenghen_character_config']='圣痕';
	lib.group.push('shenghen');
	lib.translate.shenghen='圣';
}