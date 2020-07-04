window.func=function(lib,game,ui,get,ai,_status){
	if(lib.brawl) {
		lib.brawl.qxhz={
			name:'群雄混战',
			mode:'guozhan',
			intro:[
				'游戏开始时，所有势力不是吴、蜀、魏、晋的角色变为野心家',
				'该乱斗模式开始时会关闭’使用国战武将‘选项',
			],
			showcase:function(init){
				if(_status.kzol_kzol_guozhan_bg!=true){
					_status.kzol_kzol_guozhan_bg=true;
					this.parentNode.childNodes[2].innerHTML='<input type="checkbox" value="false" style="width:13px"></input>&nbsp只有国战武将'+this.parentNode.childNodes[2].innerHTML;
					if(lib.config.kzol_guozhan_gzwj==true) this.parentNode.childNodes[2].querySelector('input').checked=true;
					this.parentNode.childNodes[2].querySelector('input').onclick=function(){
						var bool=true;
						if(lib.config.kzol_guozhan_gzwj==true) bool=false;
						game.saveConfig('kzol_guozhan_gzwj',bool);
					};
				};
			},
			content:{
				chooseCharacterBefore:function(){
					if(lib.config.kzol_guozhan_gzwj==true){
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
			},
			init:function(){
				game.identityVideoName='群雄混战';
				lib.config.mode_config.guozhan.onlyguozhan=false;
				lib.skill._kzol_qxhz={
					trigger:{
						global:"gameStart",
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return _status.kzol_qxhz!=true;
					},
					content:function (){
						_status.kzol_qxhz=true;
						lib.element.content.showCharacter=function(){
							if(player.identity=='ye') player.setIdentity();
							lib.element.player.$showCharacter.apply(player,event._args);
						};
						game.showIdentity=function(started){
							if(game.phaseNumber==0&&!started) return;
							for(var i=0;i<game.players.length;i++){
								var pl=game.players[i];
								if(pl.identity=='ye') pl.setIdentity();
								pl.showCharacter(2,false);
							}
						};
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							var group=lib.character[pl.name1][1];
							var group1=lib.translate[group];
							if(group1!='吴'&&group1!='蜀'&&group1!='魏'&&group1.indexOf('晋')==-1){
								pl.identity='ye';
								//pl.setIdentity();
							};
						};
					},
				};
			},
		};
	};
}