window.func=function(lib,game,ui,get,ai,_status){
	lib.element.player.djl_frozen=function(){
		var next=game.createEvent('djl_frozen');
		next.player=this;
		var event=_status.event;
		next.source=event.player;
		next.setContent(lib.element.event.djl_frozen);
		return next;
	};
	lib.element.event.djl_frozen=function(){
		event.trigger('djl_frozen');
		player.addSkill('djl_冰封');
		game.broadcastAll(function(player){
			player.node.kzol_frozen=ui.create.div('.kzol_frozen',player.node.avatar);
			player.node.kzol_frozen.setBackgroundImage('extension/扩展ol/kzol_frozen.png');
			player.node.kzol_frozen2=ui.create.div('.kzol_frozen',player.node.avatar2);
			player.node.kzol_frozen2.setBackgroundImage('extension/扩展ol/kzol_frozen.png');
		},player);
	};
	game.import('character',function(lib,game,ui,get,ai,_status){
		var djl={
			name:'djl',
			characterSort:{},
			character:{
				
			},
			skill:{
				"djl_冰封":{
					init:function(player){
						game.log(player,'被冰封了');
					},
					trigger:{
						player:'phaseBefore'
					},
					forced:true,
					priority:Infinity,
					content:function (){
						trigger.cancel();
						player.phaseSkipped=true;
						player.removeSkill('djl_冰封');
					},
					onremove:function(player){
						if(player.node.kzol_frozen){
							player.node.kzol_frozen.delete();
							delete player.node.kzol_frozen;
						};
						if(player.node.kzol_frozen2){
							player.node.kzol_frozen2.delete();
							delete player.node.kzol_frozen2;
						};
						game.log(player,'解除了冰封状态');
					},
				},
			},
			translate:{
				"djl_冰封":"冰封",
				//"djl_冰封_info":"下个回合无法行动",
			},
		};
		return djl;
	});
	lib.config.all.characters.push('djl');
	if(!lib.config.characters.contains('djl')) lib.config.characters.push('djl');
	lib.translate['djl_character_config']='刀剑录';
	lib.group.push('djl');
	lib.translate.djl='刀剑录';
};