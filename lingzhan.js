window.func=function(lib,game,ui,get,ai,_status){
	lib.onover.push(function(result){
		if(_status.lingzhan_mode==true) game.showIdentity();
	});
	if(lib.brawl){
		lib.brawl.lingzhan={
			name:'灵战',
			mode:'identity',
			intro:[
				'十人身份局',
				'身份构成：<br>主公，反贼X2，忠臣，内奸，宦官，将军，名妓，枭雄，谋士',
				'主公：<br>胜利条件：消灭所有反贼和内奸。失败条件：你被杀害',
				'忠臣：<br>胜利条件：主公存活且消灭所有反贼和内奸。失败条件：主公被杀害',
				'反贼：<br>胜利条件：杀死主公。失败条件：场上反贼全部阵亡',
				'内奸：<br>胜利条件：所有忠臣和反贼死亡的情况下，主公死亡。失败条件：你被杀害或存在反贼或忠臣时，主公阵亡',
				'宦官：<br>胜利条件：1.消灭除主公、忠臣以外的其他角色；2.当忠臣死亡时，你可以杀死主公夺胜。失败条件：1.忠臣存活时，主公被杀害；2.忠臣死亡时，你被杀害或主公被其他人杀害',
				'将军：<br>胜利条件：消灭所有内奸、反贼、枭雄。失败条件：主公被杀害或你被杀害',
				'名妓：<br>胜利条件：消灭在场所有男性角色（默认你的武将为女性角色）。失败条件：你被杀害',
				'枭雄：<br>胜利条件：消灭在场所有其他角色。你可先杀死主公并夺位。失败条件：你被杀害',
				'谋士：<br>胜利条件：1.主公获胜。2.当你杀死一名角色时，你可以观看该角色的身份牌并替换其身份牌。失败条件：你被杀害 '
			],
			showcase:function(init){
				this.parentNode.style['overflow-x']='hidden';
				this.parentNode.style['overflow-y']='scroll';
				this.parentNode.childNodes[0].style.position='fixed';
			},
			content:{
				chooseCharacterBefore:function(){
					game.checkResult=function(){
						var me=game.me;
						var fanzei=game.countPlayer(function(current){return current.special_identity=='lingzhan_fanzei'});
						var neijian=game.countPlayer(function(current){return current.special_identity=='lingzhan_neijian'});
						var zhongchen=game.countPlayer(function(current){return current.special_identity=='lingzhan_zhongchen'});
						var huanguan=game.countPlayer(function(current){return current.special_identity=='lingzhan_huanguan'});
						var jiangjun=game.countPlayer(function(current){return current.special_identity=='lingzhan_jiangjun'});
						var mingji=game.countPlayer(function(current){return current.special_identity=='lingzhan_mingji'});
						var xiaoxiong=game.countPlayer(function(current){return current.special_identity=='lingzhan_xiaoxiong'});
						var moushi=game.countPlayer(function(current){return current.special_identity=='lingzhan_moushi'});
						if(me.special_identity=='lingzhan_zhugong'){
							if(fanzei+neijian==0){
								game.over(true);
							}else if(me.isDead()){
								game.over(false);
							};
						};
						if(me.special_identity=='lingzhan_fanzei'){
							if(game.zhu.isDead()){
								game.over(true);
							}else if(fanzei==0){
								game.over(false);
							};
						};
						if(me.special_identity=='lingzhan_neijian'){
							if(zhongchen+fan==0&&game.zhu.isDead()){
								game.over(true);
							}else if(me.isDead()||(zhongchen+fan>0&&game.zhu.isDead())){
								game.over(false);
							};
						};
						if(me.special_identity=='lingzhan_zhongchen'){
							if(fanzei+neijian==0){
								game.over(true);
							}else if(game.zhu.isDead()){
								game.over(false);
							};
						};
						if(me.special_identity=='lingzhan_huanguan'){
							if((fanzei+neijian+jiangjun+mingji+xiaoxiong+moushi==0)){
								game.over(true);
							}else if((me.isDead()&&zhongchen==0)||(zhongchen>0&&game.zhu.isDead())){
								game.over(false);
							};
						};
						if(me.special_identity=='lingzhan_jiangjun'){
							if(fanzei+neijian+xiaoxiong==0){
								game.over(true);
							}else if(me.isDead()||game.zhu.isDead()){
								game.over(false);
							};
						};
						if(me.special_identity=='lingzhan_mingji'){
							if(game.countPlayer(function(current){return current.sex=='male'})==0){
								game.over(true);
							}else if(me.isDead()){
								game.over(false);
							};
						};
						if(me.special_identity=='lingzhan_xiaoxiong'){
							if(game.players.length==xiaoxiong){
								game.over(true);
							}else if(me.isDead()){
								game.over(false);
							};
						};
						if(me.special_identity=='lingzhan_moushi'){
							if(fanzei+neijian==0){
								game.over(true);
							}else if(me.isDead()){
								game.over(false);
							};
						};
					};
					get.rawAttitude=function(from,to){//from是自己，to是目标
						if(from==undefined||to==undefined) return 0;
						if(from==to) return 3;
						if(to.ai.shown<0.9) return 0;
						var fanzei=game.countPlayer(function(current){return current.special_identity=='lingzhan_fanzei'});
						var neijian=game.countPlayer(function(current){return current.special_identity=='lingzhan_neijian'});
						var zhongchen=game.countPlayer(function(current){return current.special_identity=='lingzhan_zhongchen'});
						var huanguan=game.countPlayer(function(current){return current.special_identity=='lingzhan_huanguan'});
						var jiangjun=game.countPlayer(function(current){return current.special_identity=='lingzhan_jiangjun'});
						var mingji=game.countPlayer(function(current){return current.special_identity=='lingzhan_mingji'});
						var xiaoxiong=game.countPlayer(function(current){return current.special_identity=='lingzhan_xiaoxiong'});
						var moushi=game.countPlayer(function(current){return current.special_identity=='lingzhan_moushi'});
						var identity=from.special_identity;
						var identity1=to.special_identity;
						if(identity=='lingzhan_zhugong'){
							if(identity1=='lingzhan_fanzei'){
								return -5;
							}else if(identity1=='lingzhan_neijian'){
								if(game.players.length>neijian+1&&fanzei>0){
									return 3;
								}else{
									return -4;
								};
							}else if(identity1=='lingzhan_zhugong'||from==to){
								return 10;
							}else if(identity1=='lingzhan_zhongchen'||identity1=='lingzhan_moushi'||identity1=='lingzhan_jiangjun'){
								return 5;
							}else if(identity1=='lingzhan_huanguan'){
								if(zhongchen>0){
									return 3;
								}else{
									return -2;
								};
							}else if(identity1=='lingzhan_xiaoxiong'){
								return -2;
							}else if(identity1=='lingzhan_mingji'){
								if(from.sex=='male'){
									return -1;
								}else if(from.sex!='male'){
									return 1;
								};
							};
						};
						if(identity=='lingzhan_fanzei'){
							if(identity1=='lingzhan_zhugong'){
								return -5;
							}else if(identity1=='lingzhan_zhongchen'||identity1=='lingzhan_jiangjun'||identity1=='lingzhan_moushi'){
								return -3;
							}else if(identity1=='lingzhan_fanzei'){
								return 10;
							}else if(identity1=='lingzhan_huanguan'){
								if(zhongchen>0){
									return -3;
								}else{
									return 3;
								};
							}else if(identity1=='lingzhan_mingji'){
								if(from.sex=='male'){
									return -1;
								}else if(from.sex!='male'){
									return 1;
								};
							}else if(identity1=='lingzhan_neijian'){
								if(zhongchen>0){
									return 3;
								}else{
									return -2;
								};
							};
						};
						if(identity=='lingzhan_neijian'){
							if(identity1=='lingzhan_zhugong'){
								if(game.players.length>1+neijian){
									return 10;
								}else{
									return -8;
								};
							}else if(identity1=='lingzhan_zhongchen'){
								if(zhongchen+1>fanzei){
									return -4;
								}else{
									return 3;
								};
							}else if(identity1=='lingzhan_fanzei'){
								if(fanzei>=zhongchen+1){
									return -4;
								}else{
									return 3;
								};
							};
						};
						if(identity=='lingzhan_zhongchen'||identity=='lingzhan_moushi'){
							if(identity1=='lingzhan_fanzei'){
								return -5;
							}else if(identity1=='lingzhan_neijian'){
								if(game.players.length>neijian+1&&fanzei>0){
									return 3;
								}else{
									return -4;
								};
							}else if(identity1=='lingzhan_zhugong'){
								return 10;
							}else if(identity1=='lingzhan_zhongchen'||identity1=='lingzhan_moushi'||identity1=='lingzhan_jiangjun'){
								return 5;
							}else if(identity1=='lingzhan_huanguan'){
								if(zhongchen>0){
									return 3;
								}else{
									return -2;
								};
							}else if(identity1=='lingzhan_xiaoxiong'){
								return -2;
							}else if(identity1=='lingzhan_mingji'){
								if(from.sex=='male'){
									return -1;
								}else if(from.sex!='male'){
									return 1;
								};
							};
						};
						if(identity=='lingzhan_huanguan'){
							if(identity1=='lingzhan_zhugong'){
								if(zhongchen>0){
									return 10;
								}else{
									return -5;
								};
							}else if(identity1=='lingzhan_mingji'){
								if(from.sex=='male'){
									return -3;
								}else if(from.sex!='male'){
									return 1;
								};
							}else if(identity1=='lingzhan_fanzei'){
								if(zhongchen>0){
									return -1;
								}else{
									return 6;
								};
							}else if(identity1=='lingzhan_jiangjun'||identity1=='lingzhan_moushi'){
								return -3;
							}else if(identity1=='lingzhan_huanguan'){
								return 10;
							}else if(identity1=='lingzhan_xiaoxiong'){
								return -3;
							};
						};
						if(identity=='lingzhan_jiangjun'){
							if(identity1=='lingzhan_fanzei'){
								return -5;
							}else if(identity1=='lingzhan_neijian'){
								if(game.players.length>neijian+1&&fanzei>0){
									return 3;
								}else{
									return -4;
								};
							}else if(identity1=='lingzhan_zhugong'){
								return 10;
							}else if(identity1=='lingzhan_zhongchen'||identity1=='lingzhan_moushi'||identity1=='lingzhan_jiangjun'){
								return 5;
							}else if(identity1=='lingzhan_huanguan'){
								if(zhongchen>0){
									return 3;
								}else{
									return -2;
								};
							}else if(identity1=='lingzhan_xiaoxiong'){
								return -6;
							}else if(identity1=='lingzhan_mingji'){
								if(from.sex=='male'){
									return -1;
								}else if(from.sex!='male'){
									return 1;
								};
							};
						};
						if(identity=='lingzhan_mingji'){
							if(from.sex!='male'||from==to){
								return 5;
							}else{
								return -5;
							};
						};
						if(identity=='lingzhan_xiaoxiong'){
							if(identity1=='lingzhan_zhugong'){
								return -5;
							}else if(identity1=='lingzhan_mingji'){
								if(from.sex=='male'){
									return -1;
								}else if(from.sex!='male'){
									return 1;
								};
							};
						};
						if(from.identity=='zhu'||from.identity=='zhong'){
							if(to.identity=='nei'||to.identity=='fan') return -1;
						};
						if(to.identity=='zhu'||to.identity=='zhong'){
							if(from.identity=='nei'||from.identity=='fan') return -1;
						};
						return 0;
					};
					var list=['lingzhan_zhugong','lingzhan_fanzei','lingzhan_fanzei','lingzhan_neijian','lingzhan_zhongchen','lingzhan_huanguan','lingzhan_jiangjun','lingzhan_mingji','lingzhan_xiaoxiong','lingzhan_moushi'];
					for(var i=0;i<game.players.length;i++){
						var pl=game.players[i];
						var special_identity=list.randomGet();
						pl.special_identity=special_identity;
						list.remove(special_identity);
					};
					for(var i=0;i<game.players.length;i++){
						var pl=game.players[i];
						pl.showIdentity=function(){
							this.node.identity.classList.remove('guessing');
							this.identityShown=true;
							this.ai.shown=1;
							this.setIdentity();
							if(this.special_identity) this.node.identity.firstChild.innerHTML=get.translation(this.special_identity+'_bg');
							if(this.identity=='zhu'){
								this.isZhu=true;
							}else{
								delete this.isZhu;
							};
							if(_status.clickingidentity){
								for(var i=0;i<_status.clickingidentity[1].length;i++){
									_status.clickingidentity[1][i].delete();
									_status.clickingidentity[1][i].style.transform='';
								};
								delete _status.clickingidentity;
							};
						};
						var special_identity=pl.special_identity;
						if(special_identity=='lingzhan_zhugong'){
							pl.identity='zhu';
							game.zhu=pl;
							setTimeout(function(){game.zhu.showIdentity()},750);
						};
						if(special_identity=='lingzhan_zhongchen'||special_identity=='lingzhan_jiangjun'||special_identity=='lingzhan_moushi'){
							pl.identity='zhong';
						};
						if(special_identity=='lingzhan_fanzei'||special_identity=='lingzhan_xiaoxiong'){
							pl.identity='fan';
						};
						if(special_identity=='lingzhan_neijian'||special_identity=='lingzhan_huanguan'||special_identity=='lingzhan_mingji'){
							pl.identity='nei';
						};
					};
				},
				gameStart:function(){
					_status.lingzhan_mode=true;
					for(var i=0;i<game.players.length;i++){
						var pl=game.players[i];
						var special_identity=pl.special_identity;
						if(special_identity=='lingzhan_zhugong'){
							pl.identity='zhu';
							game.zhu=pl;
							pl.showIdentity();
							pl.maxHp++;
							pl.hp++;
							pl.update();
						};
						if(special_identity=='lingzhan_zhongchen'||special_identity=='lingzhan_jiangjun'||special_identity=='lingzhan_moushi'){
							pl.identity='zhong';
						};
						if(special_identity=='lingzhan_fanzei'||special_identity=='lingzhan_xiaoxiong'){
							pl.identity='fan';
						};
						if(special_identity=='lingzhan_neijian'||special_identity=='lingzhan_huanguan'||special_identity=='lingzhan_mingji'){
							pl.identity='nei';
						};
						if(special_identity=='lingzhan_mingji') pl.sex='female';
					};
				},
			},
			init:function(){
				game.identityVideoName='灵战';
				lib.config.mode_config.identity.identity_mode="normol";
				lib.config.mode_config.identity.special_identity=false;
				lib.config.mode_config.identity.player_number=10;
				if(lib.config.mode_config.identity.auto_mark_identity==true){
					lib.config.mode_config.identity.auto_mark_identity=false;
					lib.config.mode_config.identity.lingzhan_auto_mark_identity=true;
				};
				lib.config.mode_config.identity.change_identity=false;
				lib.config.mode_config.identity.identity[8]=['nei','nei','nei','nei','nei','nei','nei','nei','nei','nei'];
				lib.translate.lingzhan_zhugong_bg='主';
				lib.translate.lingzhan_zhugong='主公';
				lib.translate.lingzhan_fanzei_bg='反';
				lib.translate.lingzhan_fanzei='反贼';
				lib.translate.lingzhan_neijian_bg='内';
				lib.translate.lingzhan_neijian='内奸';
				lib.translate.lingzhan_zhongchen_bg='忠';
				lib.translate.lingzhan_zhongchen='忠臣';
				lib.translate.lingzhan_huanguan_bg='宦';
				lib.translate.lingzhan_huanguan='宦官';
				lib.translate.lingzhan_jiangjun_bg='将';
				lib.translate.lingzhan_jiangjun='将军';
				lib.translate.lingzhan_mingji_bg='妓';
				lib.translate.lingzhan_mingji='名妓';
				lib.translate.lingzhan_xiaoxiong_bg='枭';
				lib.translate.lingzhan_xiaoxiong='枭雄';
				lib.translate.lingzhan_moushi_bg='谋';
				lib.translate.lingzhan_moushi='谋士';
				lib.skill._lingzhan_auto_mark_identity={
					trigger:{
						player:'useCardAfter'
					},
					forced:true,
					popup:false,
					priority:-Infinity,
					filter:function(event,player){
						return lib.config.mode_config.identity.lingzhan_auto_mark_identity==true&&player.ai.shown>=0.9;
					},
					content:function(){
						player.setIdentity();
						player.node.identity.firstChild.innerHTML=get.translation(player.special_identity+'_bg');
					},
				};
				lib.skill._lingzhan_huanguan={
					trigger:{
						global:'dieAfter'
					},
					forced:true,
					popup:false,
					priority:-Infinity,
					filter:function(event,player){
						return game.me.special_identity=='lingzhan_huanguan'&&event.player==game.zhu;
					},
					content:function(){
						var num=game.countPlayer(function(current){return current.special_identity=='lingzhan_zhongchen'});
						if(num==0){
							if(trigger.source!=undefined&&trigger.source==game.me){
								game.over(true);
							}else{
								game.over(false);
							};
						};
					},
				};
				lib.skill._lingzhan_xiaoxiong={
					trigger:{
						global:'dieBegin'
					},
					forced:true,
					popup:false,
					priority:-Infinity,
					filter:function(event,player){
						return event.source!=undefined&&event.source.special_identity=='lingzhan_xiaoxiong'&&event.player==game.zhu;
					},
					content:function(){
						game.zhu=trigger.source;
						trigger.source.identity='zhu';
						trigger.source.special_identity='lingzhan_zhugong';
						trigger.source.showIdentity();
						game.log(trigger.source,'夺位，成为新的主公');
					},
				};
				lib.skill._lingzhan_moushi={
					trigger:{
						global:'dieBegin'
					},
					popup:false,
					priority:-Infinity,
					direct:true,
					filter:function(event,player){
						return event.source!=undefined&&event.source.special_identity=='lingzhan_moushi'&&event.source!=event.player;
					},
					content:function(){
						'step 0'
						trigger.source.chooseControl(['替换','不替换']).set('ai',function(event){
							return ['替换','不替换'].randomGet();
						}).set('prompt','是否替换'+lib.translate[trigger.player.name]+'（'+lib.translate[trigger.player.special_identity]+'）的身份牌？');
						'step 1'
						if(result.control=='替换'){
							if(game.zhu==trigger.player) game.zhu=trigger.source;
							var identity=trigger.player.identity;
							var identity1=trigger.player.special_identity;
							trigger.player.identity=trigger.source.identity;
							trigger.player.special_identity=trigger.source.special_identity;
							trigger.source.identity=identity;
							trigger.source.special_identity=identity1;
							trigger.player.showIdentity();
							trigger.source.showIdentity();
							game.log(trigger.source,'与',trigger.player,'互换了身份牌');
						};
					},
				};
				lib.skill._lingzhan_showCondition={
					trigger:{
						global:'gameStart'
					},
					forced:true,
					popup:false,
					priority:Infinity,
					filter:function(event,player){
						return player==game.me;
					},
					content:function(){
						var identity=player.special_identity;
						var str='';
						if(identity=='lingzhan_zhugong'){
							str='胜利条件：<br>&nbsp&nbsp消灭所有反贼和内奸<br>失败条件：<br>&nbsp&nbsp你被杀害';
						}else if(identity=='lingzhan_zhongchen'){
							str='胜利条件：<br>&nbsp&nbsp主公存活且消灭所有反贼和内奸<br>失败条件：<br>&nbsp&nbsp主公被杀害';
						}else if(identity=='lingzhan_fanzei'){
							str='胜利条件：<br>&nbsp&nbsp杀死主公<br>失败条件：<br>&nbsp&nbsp场上反贼全部阵亡';
						}else if(identity=='lingzhan_neijian'){
							str='胜利条件：<br>&nbsp&nbsp所有忠臣和反贼死亡的情况下，主公死亡<br>失败条件：<br>&nbsp&nbsp你被杀害或存在反贼或忠臣时，主公阵亡';
						}else if(identity=='lingzhan_huanguan'){
							str='胜利条件：<br>1.消灭除主公、忠臣以外的其他角色<br>2.当忠臣死亡时，你可以杀死主公夺胜。<br>失败条件：<br>1.忠臣存活时，主公被杀害<br>2.忠臣死亡时，你被杀害或主公被其他人杀害';
						}else if(identity=='lingzhan_jiangjun'){
							str='胜利条件：<br>&nbsp&nbsp消灭所有内奸、反贼、枭雄<br>失败条件：<br>&nbsp&nbsp主公被杀害或你被杀害';
						}else if(identity=='lingzhan_mingji'){
							str='胜利条件：<br>&nbsp&nbsp消灭在场所有男性角色（默认你的武将为女性角色）<br>失败条件：<br>&nbsp&nbsp你被杀害';
						}else if(identity=='lingzhan_xiaoxiong'){
							str='胜利条件：<br>&nbsp&nbsp消灭在场所有其他角色。你可先杀死主公并夺位<br>失败条件：<br>&nbsp&nbsp你被杀害';
						}else if(identity=='lingzhan_moushi'){
							str='胜利条件：<br>1.主公获胜<br>2.当你杀死一名角色时，你可以观看该角色的身份牌并替换其身份牌<br>失败条件：<br>&nbsp&nbsp你被杀害';
						};
						var dialog=ui.create.dialog('你的身份是'+get.translation(identity),'hidden','forcebutton');
						//dialog.addText(str);
						var div=ui.create.div('.buttons',str);
						div.style.width='calc(100% - 10px)';
						//div.style.top='50px';
						div.style.left='5px';
						div.style['text-align']='left';
						dialog.add(div);
						player.chooseButton(dialog);
					},
				};
			},
		};
	};
}