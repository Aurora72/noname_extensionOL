window.func=function(lib,game,ui,get,ai,_status){
	if(lib.config.mode_config.partner.mode=='jieyi'){
		lib.skill._CW_jieyi={
			mode:['partner'],
			enable:"phaseUse",
			usable:1,
			filterTarget:function (card,player,target){
				return player!=target&&player.identity==target.identity&&target.countCards('h')+player.countCards('h')>0&&_status.mode=='jieyi';
			},
			content:function(){
				'step 0'
				if(target.countCards('h')>0){
					target.$give(target.countCards('h'),player);
					player.gain(target.get('h'));
				};
				player.chooseCard('请选择给予'+get.translation(target.name)+'的牌',Math.ceil((target.countCards('h')+player.countCards('h'))/2),'h',true).set('ai',function(card){
					return 7-get.value(card);
				});
				'step 1'
				if(result.bool){
					player.$give(result.cards.length,target);
					target.gain(result.cards);
				};
			},
			ai:{
				order:2,
				result:{
					target:function(player,target){
						if(player.countCards('h')-target.countCards('h')>=2) return 1;
					},
				},
			},
		};
		lib.translate._CW_jieyi='结义';
		lib.translate._CW_jieyi_info='出牌阶段限一次，你可以令你的队友将其所有手牌给予你，然后由你分配双方手牌（给予队友的牌不能小于X，X为分配时你手牌数的一半（向上取整））';
	};
}