window.func = function (lib, game, ui, get, ai, _status) {
	if (lib.brawl) {
		lib.brawl.gcms = {
			name: '攻城模式',
			mode: 'chess',
			intro: [
				'棋盘大小固定为15X15',
				'游戏开始时，创建两座城池，位置分别为[2,2]和[12,12]，然后将玩家分布位置在己方城池附近',
				'回合内，距离大于5的角色视为在游戏外',
				'回合开始前，若玩家与己方城池距离小于或等于一，该玩家恢复一点体力。',
				'当城池体力将为零时，游戏结束。'
			],
			content: {
				gameStart: function () {
					
				},
			},
			init: function () {
				game.identityVideoName='攻城模式';
				var zoom1=lib.config.ui_zoom;
				switch(zoom1){
					case 'esmall':zoom1=0.8;break;
					case 'vsmall':zoom1=0.9;break;
					case 'small':zoom1=0.93;break;
					case 'big':zoom1=1.05;break;
					case 'vbig':zoom1=1.1;break;
					case 'ebig':zoom1=1.2;break;
					default:zoom1=1;
				};
				game.documentZoom=game.deviceZoom*0.8*zoom1;
				var width=document.documentElement.offsetWidth;
				var height=document.documentElement.offsetHeight;
				var zoom=game.documentZoom;
				document.body.style.width=(width/zoom)+'px';
				document.body.style.height=(height/zoom)+'px';
				document.body.style.transform='scale('+zoom+')';
				Object.defineProperty(ui, 'chessheight', {
					get: function () {
						return chessheight;
					},
					set: function () {
						chessheight = 15;
					}
				});
				Object.defineProperty(ui, 'chesswidth', {
					get: function () {
						return chesswidth;
					},
					set: function () {
						chesswidth = 15;
					}
				});
				lib.config.mode_config.chess.chess_obstacle='0';
				lib.config.mode_config.chess.single_control=false;
				lib.config.mode_config.chess.seat_order='交替';
				lib.config.mode_config.chess.chess_mode='combat';
				var character = {
					"蓝方城池": ["", "", 20, ["threatencfz"],["ext:扩展ol/城池.jpg","forbidai"]],
					"红方城池": ["", "", 20, ["threatencfz"],["ext:扩展ol/城池.jpg","forbidai"]],
				};
				for(var i in character){
					lib.character[i]=character[i];
				};
				lib.element.player.moveTo1=function(x,y){
					game.addVideo('moveTo',this,[x,y]);
					if(x>=ui.chesswidth){
						x=ui.chesswidth-1;
					}
					if(y>=ui.chessheight){
						y=ui.chessheight-1;
					}

					var pos=y*ui.chesswidth+x;
					if(!lib.posmap[pos]){
						delete lib.posmap[this.dataset.position];
						// this.changeSeat(pos,false);
						ui.placeChess(this,pos);
						lib.posmap[pos]=this;
						this.chessFocus();
					}else{
						var me=lib.posmap[this.dataset.position];
						var target=lib.posmap[pos];
						delete lib.posmap[this.dataset.position];
						delete lib.posmap[pos];
						ui.placeChess(target,this.dataset.position);
						lib.posmap[pos]=target;
						ui.placeChess(this,pos);
						lib.posmap[pos]=this;
					};
					return this;
				};
				var skill = {
					_addcheng: {
						trigger: {
							player: "gameDrawAfter",
						},
						forced: true,
						filter:function(event,player){
							return _status.hasAddcheng!=true;
						},
						content: function () {
							_status.hasAddcheng=true;
							var chengFriend = game.addChessPlayer("红方城池",true,0);
							chengFriend.moveTo1(12, 12);
							//chengFriend.setIdentity('城');
							chengFriend.phase=function(){};
							chengFriend.draw=function(){};
							chengFriend.recover=function(){};
							chengFriend.moveTo=function(){};
							var chengEnemy = game.addChessPlayer("蓝方城池",false,0);
							chengEnemy.moveTo1(2, 2);
							//chengEnemy.setIdentity('城');
							chengEnemy.phase=function(){};
							chengEnemy.draw=function(){};
							chengEnemy.recover=function(){};
							chengEnemy.moveTo=function(){};
							var e_num_x=1;
							var e_num_y=1;
							var e_num_count=0;
							var f_num_x=13;
							var f_num_y=13;
							var f_num_count=0;
							var list_players=[];
							for(var i=0;i<game.players.length;i++){
								list_players.push(game.players[i]);
							};
							for(var i=0;i<list_players.length;i++){
								var bool=true;
								var pl=list_players[i];
								if(pl==chengFriend||chengEnemy==chengFriend) continue;
								if(pl.side==chengFriend.side){
									pl.moveTo1(f_num_x,f_num_y);
									f_num_count++;
									if(f_num_count==1){
										f_num_x--;
									}else if(f_num_count==2){
										f_num_x--;
									}else if(f_num_count==3){
										f_num_y--;
									}else if(f_num_count==4){
										f_num_y--;
									}else if(f_num_count==5){
										f_num_x++;
									}else if(f_num_count==6){
										f_num_x++;
									}else if(f_num_count==7){
										f_num_y++;
									};
								}else{
									pl.moveTo1(e_num_x,e_num_y);
									e_num_count++;
									if(e_num_count==1){
										e_num_x++;
									}else if(e_num_count==2){
										e_num_x++;
									}else if(e_num_count==3){
										e_num_y++;
									}else if(e_num_count==4){
										e_num_y++;
									}else if(e_num_count==5){
										e_num_x--;
									}else if(e_num_count==6){
										e_num_x--;
									}else if(e_num_count==7){
										e_num_y--;
									};
								};
							};
						},
					},
					_cheng_die: {
						trigger: {
							player: "dying",
						},
						forced: true,
						popup:false,
						filter:function(event,player){
							return player.name=='蓝方城池'||player.name=='红方城池';
						},
						content: function () {
							if (game.me.side == player.side) {
								game.over(false);
							}else {
								game.over(true);
							};
						},
					},
					threatencfz: {
						ai: {
							threaten: 10,
						}
					},
					_chengBuff: {
						trigger: {
							player: 'phaseBefore'
						},
						forced: true,
						popup:false,
						content: function () {
							for (var i = 0; i < game.players.length; i++) {
								if (game.players[i].name=='蓝方城池'||game.players[i].name=='红方城池') {
									if (game.players[i] !== player && get.distance(player, game.players[i]) <= 1) {
										if (player.side == game.players[i].side) player.recover();
									};
								};
							};
						},
					},
					_cheng_out:{
						trigger:{
							player:'phaseBefore'
						},
						forced:true,
						popup:false,
						priority:Infinity,
						filter:function(event,player){
							return player.name!='蓝方城池'&&player.name!='红方城池';
						},
						content:function(){
							player.gcms_interval=setInterval(function(){
								var player=_status.currentPhase;
								for(var i=0;i<game.players.length;i++) {
									if(game.players[i]!==player&&get.distance(player,game.players[i])>5&&game.players[i].name!='蓝方城池'&&game.players[i].name!='红方城池'){
										if(!game.players[i].classList.contains('out')) game.players[i].classList.add('out');
									};
									if(game.players[i]!==player&&get.distance(player,game.players[i])<=5&&game.players[i].name!='蓝方城池'&&game.players[i].name!='红方城池'){
										if(game.players[i].classList.contains('out')) game.players[i].classList.remove('out');
									};
								};
							},500);
							for(var i=0;i<game.players.length;i++) {
								if(game.players[i]!==player&&get.distance(player,game.players[i])>5&&game.players[i].name!='蓝方城池'&&game.players[i].name!='红方城池'){
									game.players[i].classList.add('out');
								};
							};
						},
					},
					_cheng_out_delete:{
						trigger:{
							player:'phaseAfter'
						},
						forced:true,
						popup:false,
						priority:-Infinity,
						filter:function(event,player){
							return player.name!='蓝方城池'&&player.name!='红方城池';
						},
						content:function(){
							clearInterval(player.gcms_interval);
							delete player.gcms_interval;
							for(var i=0;i<game.players.length;i++) {
								game.players[i].classList.remove('out');
							};
						},
					},
				};
				for(var i in skill){
					lib.skill[i]=skill[i];
				};
				var translate = {
					"蓝方城池": "城池",
					"红方城池": "城池",
				};
				for(var i in translate){
					lib.translate[i]=translate[i];
				};
			},
		};
	};
}