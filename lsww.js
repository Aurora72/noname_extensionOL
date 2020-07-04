window.func=function(lib,game,ui,get,ai,_status){
	if(lib.brawl){
		lib.brawl.lsww={
			name:'乱世称王',
			mode:'identity',
			intro:'<br>每个角色及其随从视为一个势力<br>当只剩下一个势力时结束游戏，该势力获胜',
			showcase:function(init){},
			content:{
				chooseCharacterBefore:function(){
					game.checkResult=function(){
						if(game.me.isDead()){
							game.over(false);
						}else{
							var list=[];
							game.countPlayer(function(current){
								if(!list.contains(current.identity)) list.push(current.identity);
							});
							if(list.length==1){
								/*
								for(var i=0;i<game.players.length;i++){
									var pl=game.players[i];
									pl.node.identity.firstChild.innerHTML='王';
									pl.node.identity.dataset.color='zhu';
								};
								*/
								game.over(true);
							};
						};
					};
					get.rawAttitude=function(from,to){
						if(from==undefined||to==undefined) return 0;
						if(from.identity==to.identity) return 5;
						return -1-game.countPlayer(function(current){return to.identity==current.identity})*3;
					};
				},
				gameStart:function(){
					if(ui.playerids) ui.playerids.style.display='none';
					game.showIdentity();
					for(var i=0;i<game.players.length;i++){
						var pl=game.players[i];
						pl.identity=get.cnNumber(i+1);
						pl.node.identity.firstChild.innerHTML='势';
						pl.node.identity.dataset.color='nei';
						lib.translate[get.cnNumber(i+1)+'2']='势';
					};
					var showIdentity=game.showIdentity;
					game.showIdentity=function(me){
						showIdentity.apply(this,arguments);
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							pl.node.identity.firstChild.innerHTML='势';
							pl.node.identity.dataset.color='nei';
						};
					};
				},
			},
			init:function(){
				game.identityVideoName='乱世称王';
				lib.config.mode_config.identity.change_identity=false;
				lib.config.mode_config.identity.identity_mode='normal';
				lib.config.mode_config.identity.special_identity=false;
				lib.translate.zhu2='';
				lib.translate.zhong2='';
				lib.translate.fan2='';
				lib.translate.nei2='';
			},
		};
	};
}