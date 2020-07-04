window.func=function(lib,game,ui,get,ai,_status){
	if(lib.brawl){
		lib.brawl.ssbx={
			name:'杀上保下',
			mode:'identity',
			intro:[
				'游戏人数：3人',
				'规则：击杀你的上家；保护你的下家'
			],
			showcase:function(init){
				if(_status.kzol_ssbx_showcase!=true){
					_status.kzol_ssbx_showcase=true;
					
					this.parentNode.style['overflow-x']='hidden';
					this.parentNode.style['overflow-y']='scroll';
					this.parentNode.childNodes[0].style.position='fixed';
					
					var players=[];
					
					var player1=ui.create.player(null,true).init('liubei');
					player1.node.count.style.display='none';
					player1.node.hp.style.display='none';
					this.appendChild(player1);
					player1.style.top=(player1.offsetHeight+100)+'px';
					player1.style.left='calc(50% - '+(player1.offsetWidth/2-6)+'px)';
					players.push(player1);
					var player2=ui.create.player(null,true).init('sunquan');
					player2.node.count.style.display='none';
					player2.node.hp.style.display='none';
					this.appendChild(player2);
					player2.style.top='0px';
					player2.style.left='6px';
					players.push(player2);
					var player3=ui.create.player(null,true).init('caocao');
					player3.node.count.style.display='none';
					player3.node.hp.style.display='none';
					this.appendChild(player3);
					player3.style.top='0px';
					player3.style.left='calc(100% - '+(player1.offsetWidth+6)+'px)';
					players.push(player3);
					
					player1.next=player3;
					player1.previous=player2;
					player2.next=player1;
					player2.previous=player3;
					player3.next=player2;
					player3.previous=player1;
					
					var player_cs=player1;
					var func=function(){
						for(var i=0;i<players.length;i++){
							var pl=players[i];
							pl.style['box-shadow']='none';
							if(pl==player_cs.next){
								pl.node.identity.firstChild.innerHTML='保';
								pl.node.identity.dataset.color='zhong';
							};
							if(pl==player_cs.previous){
								pl.node.identity.firstChild.innerHTML='杀';
								pl.node.identity.dataset.color='fan';
							};
						};
						player_cs.node.identity.firstChild.innerHTML='己';
						player_cs.node.identity.dataset.color='zhu';
						player_cs.style['box-shadow']='rgba(0, 0, 0, 0.2) 0 0 0 1px,rgba(255, 0, 0, 0.4) 0 0 5px, rgba(255, 0, 0, 0.4) 0 0 12px, rgba(255, 0, 0, 0.8) 0 0 15px';
						player_cs=player_cs.next;
					};
					func();
					setInterval(func,3000);
				};
			},
			content:{
				chooseCharacterBefore:function(){
					game.checkResult=function(){
						if(game.countPlayer(function(current){
							return current.identity=='kaol_bao';
						})==0||game.me.isDead()){
							game.over(false);
						};
						if(game.countPlayer(function(current){
							return current.identity=='kaol_sha';
						})==0){
							game.over(true);
						};
					};
					get.rawAttitude=function(from,to){
						if(from==undefined||to==undefined) return 0;
						if(from==to||from.identity==to.identity) return 3;
						if(from==game.me&&to.identity=='kaol_bao') return 5;
						if(from==game.me&&to.identity=='kaol_sha') return -5;
						if(from.identity=='kaol_bao'&&to==game.me) return -5;
						if(from.identity=='kaol_bao'&&to.identity=='kaol_sha') return 5;
						if(from.identity=='kaol_sha'&&to==game.me) return 5;
						if(from.identity=='kaol_sha'&&to.identity=='kaol_bao') return -5;
						return 0;
					};
				},
				gameStart:function(){
					if(ui.playerids) ui.playerids.style.display='none';
					game.showIdentity();
					for(var i=0;i<game.players.length;i++){
						var pl=game.players[i];
						pl.identity='';
						pl.node.identity.firstChild.innerHTML='';
						if(pl==game.me.next){
							pl.identity='kaol_bao';
							pl.node.identity.firstChild.innerHTML='保';
							pl.node.identity.dataset.color='zhong';
						};
						if(pl==game.me.previous){
							pl.identity='kaol_sha';
							pl.node.identity.firstChild.innerHTML='杀';
							pl.node.identity.dataset.color='fan';
						};
					};
					var showIdentity=game.showIdentity;
					game.showIdentity=function(me){
						showIdentity.apply(this,arguments);
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.identity=='kaol_bao'){
								pl.node.identity.firstChild.innerHTML='保';
								pl.node.identity.dataset.color='zhong';
							};
							if(pl.identity=='kaol_sha'){
								pl.node.identity.firstChild.innerHTML='杀';
								pl.node.identity.dataset.color='fan';
							};
						};
					};
				},
			},
			init:function(){
				game.identityVideoName='杀上保下';
				lib.config.mode_config.identity.player_number=3;
				lib.config.mode_config.identity.change_identity=false;
				lib.config.mode_config.identity.identity_mode='normal';
				//lib.translate.zhu2='';
				//lib.translate.zhong2='';
				//lib.translate.fan2='';
				//lib.translate.nei2='';
				lib.translate.kaol_bao='保';
				lib.translate.kaol_sha='杀';
				lib.translate.kaol_bao2='保护';
				lib.translate.kaol_sha2='击杀';
				var swapPlayer=game.swapPlayer;
				game.swapPlayer=function(player,player2){
					swapPlayer.apply(this,arguments);
					for(var i=0;i<game.players.length;i++){
						var pl=game.players[i];
						pl.identity='';
						pl.node.identity.firstChild.innerHTML='';
						if(pl==game.me.next){
							pl.identity='kaol_bao';
							pl.node.identity.firstChild.innerHTML='保';
							pl.node.identity.dataset.color='zhong';
						};
						if(pl==game.me.previous){
							pl.identity='kaol_sha';
							pl.node.identity.firstChild.innerHTML='杀';
							pl.node.identity.dataset.color='fan';
						};
					};
				};
				var swapSeat=game.swapSeat;
				game.swapSeat=function(player1,player2,prompt,behind,noanimate){
					swapSeat.apply(this,arguments);
					for(var i=0;i<game.players.length;i++){
						var pl=game.players[i];
						pl.identity='';
						pl.node.identity.firstChild.innerHTML='';
						if(pl==game.me.next){
							pl.identity='kaol_bao';
							pl.node.identity.firstChild.innerHTML='保';
							pl.node.identity.dataset.color='zhong';
						};
						if(pl==game.me.previous){
							pl.identity='kaol_sha';
							pl.node.identity.firstChild.innerHTML='杀';
							pl.node.identity.dataset.color='fan';
						};
					};
				};
			},
		};
	};
}