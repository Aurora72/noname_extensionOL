window.func=function(lib,game,ui,get,ai,_status){
	if(lib.config.kzol_kzol_lucky_mode==undefined) game.saveConfig('kzol_kzol_lucky_mode','identity');
	if(lib.brawl){
		lib.brawl.kzol_lucky={
			name:'幸运666',
			mode:lib.config.kzol_kzol_lucky_mode,
			intro:[
				'游戏中，每当有一名角色使用或打出一张点数为6的牌时，可从幸运牌堆中抽取一张卡牌，然后立即执行其效果。',
				'幸运牌结算完成后移出幸运牌堆，直到幸运牌堆最后一张牌被抽取后，将6张幸运牌重新洗混形成新的幸运牌堆。',
				'幸运牌堆：<br>'+
				'&nbsp&nbsp<img width="65" src="'+lib.assetURL+'extension/扩展ol/lucky_tao.png">'+
				' <img width="65" src="'+lib.assetURL+'extension/扩展ol/lucky_tao.png">'+
				' <img width="65" src="'+lib.assetURL+'extension/扩展ol/lucky_wuzhong.png">'+
				' <img width="65" src="'+lib.assetURL+'extension/扩展ol/lucky_wuzhong.png">'+
				' <img width="65" src="'+lib.assetURL+'extension/扩展ol/lucky_zhuanyun.png">'+
				' <img width="65" src="'+lib.assetURL+'extension/扩展ol/lucky_tianqian.png">'
			],
			showcase:function(init){
				if(_status.kzol_kzol_lucky_bg!=true){
					_status.kzol_kzol_lucky_bg=true;
					this.parentNode.style['overflow-x']='hidden';
					this.parentNode.style['overflow-y']='scroll';
					this.parentNode.childNodes[0].style.position='fixed';
					this.parentNode.childNodes[2].style.left='-10px';
					this.parentNode.childNodes[2].innerHTML='模式变换:'+
					'<select id="kzol_lucky_choose" size="1" style="width:80px;height:20px">'+
					'<option value=identity>身份模式</option>'+
					'<option value=guozhan>国战模式</option>'+
					'<option value=versus>对决模式</option>'+
					'<option value=boss>挑战模式</option>'+
					'<option value=doudizhu>斗地主模式</option>'+
					'<option value=single>单挑模式</option>'+
					'<option value=chess>战棋模式</option>'+
					'<option value=stone>炉石模式</option>'+
					'<option value=tafang>塔防模式</option>'+
					'</select>&nbsp<button type="button" style="width:50px;height:20px"><span style="cursor:pointer;">确认</span></button>'+
					this.parentNode.childNodes[2].innerHTML;
					this.parentNode.childNodes[2].querySelector('button').onclick=function(){
						var choice=document.getElementById('kzol_lucky_choose');
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
							game.saveConfig('kzol_kzol_lucky_mode',choice1);
						};
						game.say1('设置成功，即将刷新游戏');
						setTimeout(function(){
							game.reload();
						},1500);
					};
					
					var lucky_show=ui.create.div();
					lucky_show.style.height='336px';
					lucky_show.style.width='628px';
					lucky_show.style.left='calc(50% - 314px)';
					lucky_show.style.top='-70px';
					lucky_show.setBackgroundImage('extension/扩展ol/kzol_lucky.png');
					this.appendChild(lucky_show);
					
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
						if(lib.config.kzol_kzol_lucky_mode=='versus'){
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
						if(lib.config.kzol_kzol_lucky_mode=='single'){
							if(lib.config.mode_config.single.single_mode=='changban'){
								func('单挑-血战长坂坡');
								bool=false;
							};
						};
						if(lib.config.kzol_kzol_lucky_mode=='chess'){
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
				};
			},
			init:function(){
				game.identityVideoName='幸运666';
				_status.kzol_lucky_cardPile=['lucky_tao','lucky_tao','lucky_wuzhong','lucky_wuzhong','lucky_zhuanyun','lucky_tianqian'];
				lib.translate['lucky_tao']='幸运桃';
				lib.translate['lucky_wuzhong']='幸运生财';
				lib.translate['lucky_zhuanyun']='转运卡';
				lib.translate['lucky_tianqian']='天谴';
				game.kzol_changeLuckyCard=function(){
					var list=[];
					for(var i=0;i<_status.kzol_lucky_cardPile.length;i++){
						var card=_status.kzol_lucky_cardPile.randomGet();
						list.push(card);
						_status.kzol_lucky_cardPile.remove(card);
						i--;
					};
					_status.kzol_lucky_cardPile=list;
				};
				game.kzol_changeLuckyCard();
				lib.skill['_kzol_lucky_use']={
					trigger:{
						player:["useCardAfter","respondAfter"],
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return event.card&&get.number(event.card)==6;
					},
					content:function(){
						'step 0'
						event.list=_status.kzol_lucky_cardPile;
						event.dialog=ui.create.dialog('请选取一张幸运卡牌','hidden','forcebutton');
						for(var i=0;i<event.list.length;i++){
							var name=event.list[i];
							var card=ui.create.card(null,'noclick',true);
							card.style.width='93px';
							card.style.height='120px';
							card.style.backgroundSize='100% 100%';
							card.setBackgroundImage('theme/style/cardback/image/official.png');
							card.addEventListener(lib.config.touchscreen?'touchend':'click',ui.click.button);
							card.link=card;
							card.name=name;
							event.dialog.add(card);
							event.dialog.buttons.add(card);
						};
						player.chooseButton(event.dialog);
						'step 1'
						if(result.bool&&result.links){
							event.lucky_card=result.links[0];
							event.list.remove(event.lucky_card.name);
							if(_status.kzol_lucky_cardPile.length==0){
								_status.kzol_lucky_cardPile=['lucky_tao','lucky_tao','lucky_wuzhong','lucky_wuzhong','lucky_zhuanyun','lucky_tianqian'];
								game.kzol_changeLuckyCard();
							};
							event.lucky_card.setBackgroundImage('extension/扩展ol/'+event.lucky_card.name+'.png');
							player.$gain2(event.lucky_card);
							game.log(player,'获得了',event.lucky_card);
							game.delay(1.5);
							event.lucky_result=event.lucky_card.name;
						}else{
							event.finish();
						};
						'step 2'
						player.$throw(event.lucky_card);
						game.log(event.lucky_card,'对',player,'生效了');
						game.delay(1.5);
						'step 3'
						if(event.lucky_card.name=='lucky_tao'){
							player.recover();
						}else if(event.lucky_card.name=='lucky_wuzhong'){
							player.draw(2);
						}else if(event.lucky_card.name=='lucky_tianqian'){
							if(player.isTurnedOver()!=true) player.turnOver();
						};
						if(event.lucky_card.name!='lucky_zhuanyun'){
							event.finish();
						};
						'step 4'
						player.chooseToDiscard('he',[1,Infinity]).set('ai',function(card){
							if(get.is.altered('xinzhiheng')&&get.position(card)=='h'&&!player.countCards('h',function(card){
								return get.value(card)>=8;
							})){
								return 8-get.value(card);
							}
							return 6-get.value(card)
						}).set('prompt','弃置任意张牌，然后摸等量的牌');
						'step 5'
						if(result.cards&&result.cards.length>0){
							player.draw(result.cards.length);
						};
					},
				};
			},
			content:{
				chooseCharacterBefore:function(){
					if(lib.config.kzol_kzol_lucky_mode=='guozhan'&&lib.config.mode_config.guozhan.onlyguozhan==true){
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
		};
	};
}