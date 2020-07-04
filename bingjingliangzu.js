window.func=function(lib,game,ui,get,ai,_status){
	if(lib.config.kzol_bingjingliangzu==undefined) game.saveConfig('kzol_bingjingliangzu','identity');
	if(lib.brawl) {
		game.bingjingliangzuSZ=false;
		lib.brawl.bingjingliangzu={
			name:'兵精粮足',
			mode:lib.config.kzol_bingjingliangzu,
			intro:[
				'游戏开始时，所有人获得一点体力上限并恢复一点体力',
				'所有人摸牌阶段多摸一张牌，出牌阶段可以额外使用一张杀',
			],
			showcase:function(init){
				if(game.bingjingliangzuSZ!=true){
					this.parentNode.childNodes[2].innerHTML='模式变换:'+
					'<select id="bingjingliangzu_choose" size="1" style="width:80px;height:20px">'+
					'<option value=identity>身份模式</option>'+
					'<option value=guozhan>国战模式</option>'+
					'<option value=versus>对决模式</option>'+
					'<option value=boss>挑战模式</option>'+
					'<option value=doudizhu>斗地主模式</option>'+
					'<option value=single>单挑模式</option>'+
					'<option value=chess>战棋模式</option>'+
					'<option value=stone>炉石模式</option>'+
					'<option value=tafang>塔防模式</option>'+
					'</select>&nbsp<button type="button" style="width:50px;height:20px"><span style="cursor:pointer">确认</span></button>'+
					this.parentNode.childNodes[2].innerHTML;
					this.parentNode.childNodes[2].querySelector('button').onclick=function(){
						var choice=document.getElementById('bingjingliangzu_choose');
						var choice1=choice.options[choice.selectedIndex].value;
						if(lib.mode[choice1]!=undefined){
							if(choice1=='versus'){
								if(lib.config.mode_config.versus.versus_mode=='four'){
									game.say1('暂不支持对决-对抗模式');
									return ;
								};
								if(lib.config.mode_config.versus.versus_mode=='three'){
									game.say1('暂不支持对决-统率模式');
									return ;
								};
								if(lib.config.mode_config.versus.versus_mode=='jiange'){
									game.say1('暂不支持对决-剑阁模式');
									return ;
								};
							};
							if(choice1=='single'){
								if(lib.config.mode_config.single.single_mode=='changban'){
									game.say1('暂不支持单挑-血战长坂坡模式');
									return ;
								};
							};
							if(choice1=='chess'){
								if(lib.config.mode_config.chess.chess_mode=='leader'){
									game.say1('暂不支持战棋-君主模式');
									return ;
								};
							};
							game.saveConfig('kzol_bingjingliangzu',choice1);
						};
						game.say1('设置成功，即将刷新游戏');
						setTimeout(function(){
							game.reload();
						},1500);
					};
					
					var bjlz=ui.create.div();
					bjlz.style.height='267px';
					bjlz.style.width='500px';
					bjlz.style.left='calc(50% - 250px)';
					bjlz.style.top='45px';
					bjlz.setBackgroundImage('extension/扩展ol/bjlz.png');
					this.appendChild(bjlz);
					
					var div_bg=this.parentNode.childNodes[3];
					setInterval(function(){
						var func=function(name){
							div_bg.style['z-index']=999;
							div_bg.link_name=name;
							div_bg.onclick=function(){
								game.say1('暂不支持'+this.link_name+'模式');
							};
						};
						var bool=true;
						if(lib.config.kzol_bingjingliangzu=='versus'){
							if(lib.config.mode_config.versus.versus_mode=='four'){
								func('对决-对抗');
								bool=false;
							};
							if(lib.config.mode_config.versus.versus_mode=='three'){
								func('对决-统率');
								bool=false;
							};
							if(lib.config.mode_config.versus.versus_mode=='jiange'){
								func('对决-剑阁');
								bool=false;
							};
						};
						if(lib.config.kzol_bingjingliangzu=='single'){
							if(lib.config.mode_config.single.single_mode=='changban'){
								func('单挑-血战长坂坡');
								bool=false;
							};
						};
						if(lib.config.kzol_bingjingliangzu=='chess'){
							if(lib.config.mode_config.chess.chess_mode=='leader'){
								func('战棋-君主');
								bool=false;
							};
						};
						if(bool==true){
							div_bg.style['z-index']=0;
							div_bg.onclick=function(){};
						};
					},500);
					game.bingjingliangzuSZ=true;
				};
			},
			content:{
				//submode:'two',
				chooseCharacterBefore:function(){
					if(lib.config.kzol_bingjingliangzu=='guozhan'&&lib.config.mode_config.guozhan.onlyguozhan==true){
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
				gameStart:function(){
					for(var i=0;i<game.players.length;i++){
						game.players[i].gainMaxHp();
						game.players[i].recover();
					};
				},
			},
			init:function(){
				game.identityVideoName='兵精粮足';
				//game.saveConfig('identity_mode','normal','identity');
				lib.skill._mopaishuzengjia={
					trigger:{
						player:"phaseDrawBegin",
					},
					forced:true,
					content:function (){
						trigger.num++;
					},
				};
				lib.skill._chushashuzengjia={
					mod:{
						cardUsable:function (card,player,num){
							if(card.name=='sha') return num+1;
						},
					},
				};
			},
		};
	};
}