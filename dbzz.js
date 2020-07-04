window.func=function(lib,game,ui,get,ai,_status){
	if(lib.config.kzol_dbzz==undefined) game.saveConfig('kzol_dbzz','identity');
	if(lib.brawl) {
		lib.brawl.dbzz={
			name:'带兵作战',
			mode:lib.config.kzol_dbzz,
			intro:[
				'士兵包附属模式',
				'游戏开始时，所有角色获得一个同势力士兵（没有同势力士兵则改为获得群雄士兵）',
				'出牌阶段，所有非士兵角色都可以弃置三张手牌，然后获得一个同势力士兵（没有同势力士兵则改为获得群雄士兵），每回合限一次',
				'计算距离时，士兵不算在内',
				'主将死亡时，士兵退场',
				'士兵不会触发死亡，士兵会在死亡前退场',
			],
			showcase:function(init){
				if(game.dbzzSZ!=true){
					this.parentNode.childNodes[2].innerHTML='模式变换:'+
					'<select id="dbzz_choose" size="1" style="width:80px;height:20px">'+
					'<option value=identity>身份模式</option>'+
					//'<option value=guozhan>国战模式</option>'+
					//'<option value=versus>对决模式</option>'+
					//'<option value=boss>挑战模式</option>'+
					//'<option value=doudizhu>斗地主模式</option>'+
					//'<option value=single>单挑模式</option>'+
					'<option value=chess>战棋模式</option>'+
					'<option value=stone>炉石模式</option>'+
					//'<option value=tafang>塔防模式</option>'+
					'</select>&nbsp<button type="button" style="width:50px;height:20px"><span style="cursor:pointer">确认</span></button>'+
					this.parentNode.childNodes[2].innerHTML;
					this.parentNode.childNodes[2].querySelector('button').onclick=function(){
						var choice=document.getElementById('dbzz_choose');
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
							game.saveConfig('kzol_dbzz',choice1);
						};
						game.say1('设置成功，即将刷新游戏');
						setTimeout(function(){
							game.reload();
						},1500);
					};
					
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
						if(lib.config.kzol_dbzz=='versus'){
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
						if(lib.config.kzol_dbzz=='single'){
							if(lib.config.mode_config.single.single_mode=='changban'){
								func('单挑-血战长坂坡');
								bool=false;
							};
						};
						if(lib.config.kzol_dbzz=='chess'){
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
					game.dbzzSZ=true;
				};
				this.parentNode.style['overflow-x']='hidden';
				this.parentNode.style['overflow-y']='scroll';
				this.parentNode.childNodes[0].style.position='fixed';
				var node=this;
				var getList=function(){
					var list=[['bing_羽林卫','bing_毒齿材官','bing_宿卫虎骑','bing_丹阳兵','bing_蛟鳄军'],
					['bing_西凉军','bing_白耳兵','bing_夜叉行','bing_无当飞军'],
					['bing_青州兵','bing_虎豹骑','bing_虎卫军','bing_八百死士'],
					['bing_新募兵','bing_白马义从','bing_先登死士','bing_大戟士','bing_陷阵营','bing_黄巾军']];
					list.randomSort();
					var list2=[];
					for(var i=0;i<list.length;i++){
						list2=list2.concat(list[i]);
					};
					node.list=list2;
				};
				var func=function(){
					if(!node.list.length){
						getList();
					}
					var card=ui.create.player(null,true);
					card.init(node.list.shift());
					card.node.marks.remove();
					card.node.count.remove();
					card.node.hp.remove();
					node.nodes.push(card);
					card.style.position='absolute';
					var rand1=Math.round(Math.random()*100);
					var rand2=Math.round(Math.random()*100);
					var rand3=Math.round(Math.random()*40)-20;
					card.style.left='calc('+rand1+'% - '+(rand1*1.5)+'px)';
					card.style.top='calc('+rand2+'% - '+(rand2*1.8)+'px)';
					card.style.transform='scale(1.2) rotate('+rand3+'deg)';
					card.style.opacity=0;
					ui.refresh(card);
					node.appendChild(card);
					ui.refresh(card);
					card.style.transform='scale(0.9) rotate('+rand3+'deg)';
					card.style.opacity=1;
					if(node.nodes.length>4){
						setTimeout(function(){
							while(node.nodes.length>3){
								node.nodes.shift().delete();
							}
						},500);
					};
				};
				node.list=[];
				if(init){
					node.nodes=[];
					for(var i=0;i<3;i++){
						func();
					};
				};
				node.showcaseinterval=setInterval(func,1000);
			},
			content:{
				gameStart:function(){
					if(game.players.length>6){
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
					};
				},
				chooseCharacterBefore:function(){
					if(lib.config.kzol_dbzz=='guozhan'&&lib.config.mode_config.guozhan.onlyguozhan==true){
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
				game.identityVideoName='带兵作战';
				lib.config.mode_config.identity.identity_mode='normal';
				if(lib.device&&lib.config.mode_config.identity.player_number>=14){
					game.say1('手机端无法进行14人及以上的带兵作战，已将游戏人数设置为13人');
					lib.config.mode_config.identity.player_number=13;
				};
				lib.skill._shibing_add={
					trigger:{
						global:"gameStart",
					},
					forced:true,
					popup:false,
					content:function (){
						'step 0'
						var list=[];
						for(var i in lib.character){
							var c=lib.character[i];
							if(c[4]!=undefined&&c[4].contains('shibing')){
								if(player.group=='wu'||player.group=='shu'||player.group=='wei'){
									if(c[1]==player.group) list.push(i);
								}else{
									if(c[1]=='qun') list.push(i);
								};
							};
						};
						event.list=list;
						if(list.length==0) event.finish();
						'step 1'
						player.chooseButton(ui.create.dialog('请选择需要招募的士兵',[event.list,'character']),function(button){
							return event.list.randomGet();
						},true);
						'step 2'
						if(result.bool){
							game.addShibing(result.buttons[0].link,player);
							player.popup('征集士兵');
						};
					},
				};
				lib.skill._shibing_add1={
					enable:'phaseUse',
					usable:1,
					filter:function(event,player){
						var list=[];
						for(var i in lib.character){
							var c=lib.character[i];
							if(c[4]!=undefined&&c[4].contains('shibing')){
								if(player.group=='wu'||player.group=='shu'||player.group=='wei'){
									if(c[1]==player.group) list.push(i);
								}else{
									if(c[1]=='qun') list.push(i);
								};
							};
						};
						return list.length>0&&player.countCards('h')>0&&game.countPlayer(function(current){return current.扩展ol_owner==player})<10&&player.扩展ol_type!='fellow';
					},
					filterCard:true,
					selectCard:3,
					check:function(card){
						return 5-get.value(card)
					},
					content:function (){
						'step 0'
						var list=[];
						for(var i in lib.character){
							var c=lib.character[i];
							if(c[4]!=undefined&&c[4].contains('shibing')){
								if(player.group=='wu'||player.group=='shu'||player.group=='wei'){
									if(c[1]==player.group) list.push(i);
								}else{
									if(c[1]=='qun') list.push(i);
								};
							};
						};
						event.list=list;
						if(list.length==0) event.finish();
						'step 1'
						player.chooseButton(ui.create.dialog('请选择出战士兵',[event.list,'character']),function(button){
							return event.list.randomGet();
						},true);
						'step 2'
						if(result.bool){
							var fellow=game.addShibing(result.buttons[0].link,player);
							game.delay(2);
							fellow.draw(2);
						};
					},
					ai:{
						order:5,
						result:{
							player:function(player){
								if(game.countPlayer(function(current){return current.扩展ol_owner==player})<3) return 1;
							},
						},
					},
				};
				lib.translate._shibing_add1='征兵';
				lib.translate._shibing_add1_info='出牌阶段，所有非士兵角色都可以弃置三张手牌，然后获得一个同势力士兵（没有同势力士兵则改为获得群雄士兵），每回合限一次';
			},
		};
	};
}