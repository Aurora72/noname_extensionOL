window.func=function(lib,game,ui,get,ai,_status){
	if ( lib.brawl ) {
lib.brawl.jiangshimoshi = {
            name:'僵尸模式',
            mode:'identity',
            intro:[
			'游戏中无法执行换位和翻面函数。',
			'移植神杀的僵尸模式，规则有改动。<br><span style=\"color:#EE7621;font-size:18px\"><p align="center">规则介绍</p></span>',
			'1.在此模式中主公、忠臣为人类，反贼、内奸为僵尸。',
			'2.游戏开始时，所有角色的身份变为人类，主公获得退治印记（每回合开始时，退治印记+1）。',
			'3.若主公死亡，则下一名人类玩家成为主公，生命与上限+1，并获取相当于原主公退治标记数-1的退治标记。',
			'4.主公的第二个回合开始时，夜幕降临，此轮中会有X个人变为反贼僵尸（X为存活人数/6（向上整取））。以此法变为反贼僵尸时，体力上限变为5。',
			'5.僵尸杀死人类后，人类与内奸僵尸组成双将。',
			'6.人类死亡后与内奸僵尸组成双将。',
			'7.内奸僵尸杀死人类或内奸僵尸后变为反贼僵尸。<br><span style=\"color:#EE7621;font-size:18px\"><p align="center">游戏结束条件</p></span>',
			'1.退治成功，所有人类胜利，僵尸以及成为僵尸的人类失败：<br>任何玩家的回合开始时，主公退治印记到达X（X为在场人数且至少为8）。<br>击杀所有僵尸。',
			'2.退治失败，所有反贼僵尸胜利，非反贼僵尸以及人类失败：<br>主公阵亡并且场上没有可以代替主公的人类。'
			],
content:{
gameStart:function(){
for(var i=0;i<game.players.length;i++){
game.players[i].turnOver=function(all){};
if(game.players[i]!=game.zhu){
game.players[i].identity='zhong';
};
};
game.zhu.storage.fzjsNumber=0;
game.showIdentity();
game.swapSeat=function(all){};
}
},
init:function(){
/*if(lib.device){
var zoom=function(num){
var zoom=num;
game.documentZoom=game.deviceZoom*zoom;
document.documentElement.style.zoom=game.documentZoom;
};
zoom(0.8);
};
if(config.IncreasePlayerNumber=='all'){
game.saveConfig('player_number',config.brawlPlayerNumber,'identity');
if(config.brawlPlayerNumber=='9') lib.config.mode_config.identity.identity.push(['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
if(config.brawlPlayerNumber=='10') lib.config.mode_config.identity.identity.push([],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
if(config.brawlPlayerNumber=='11') lib.config.mode_config.identity.identity.push([],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
if(config.brawlPlayerNumber=='12') lib.config.mode_config.identity.identity.push([],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
if(config.brawlPlayerNumber=='13') lib.config.mode_config.identity.identity.push([],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
if(config.brawlPlayerNumber=='14') lib.config.mode_config.identity.identity.push([],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
if(config.brawlPlayerNumber=='15') lib.config.mode_config.identity.identity.push([],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
if(config.brawlPlayerNumber=='16') lib.config.mode_config.identity.identity.push([],[],[],[],[],[],[],['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong','zhong']);
}else{
game.saveConfig('player_number','8','identity');
};*/
game.saveConfig('identity_mode','normal','identity');
  lib.character.jiangshifz=["male","qun",5,["xunmeng","zaibian","ganran","wansha","paoxiao"],["ext:扩展ol/jiangshifz.jpg","forbidai","des:僵尸模式配套武将"]];
  lib.character.jiangshinj=["male","qun",3,["baozou","wansha","xueji","shishi","ganran"],["ext:扩展ol/jiangshinj.jpg","forbidai","des:僵尸模式配套武将"]];
lib.skill.baozou={
    mod:{
        cardUsable:function (card,player,num){
            if(card.name=='sha') return Infinity;
        },
    },
    ai:{
        unequip:true,
        skillTagFilter:function (player,tag,arg){
            if(!get.zhu(player,'shouyue')) return false;
            if(arg&&arg.name=='sha') return true;
            return false;
        },
    },
};
            lib.skill.shishi={
				trigger:{source:'dieAfter'},
				forced:true,
				content:function(){
					player.gainMaxHp(1);
					player.recover();
				}
			};
            lib.skill.xunmeng={
				trigger:{source:'damageBegin'},
				filter:function(event){
					return event.card&&event.card.name=='sha'&&event.parent.name!='_lianhuan'&&event.parent.name!='_lianhuan2';
				},
				forced:true,
				content:function(){
					trigger.num++;
					if(player.hp>1) player.loseHp();
				}
			};
            lib.skill.zaibian={
				trigger:{player:'phaseUseBegin'},
				filter:function(event,player){
					return get.population('zhong')-get.population('fan')-get.population('nei')+2>0;
				},
				forced:true,
				content:function(){
					var num=get.population('zhong')-get.population('fan')-get.population('nei')+2;
					player.draw(num);
				}
			};
			lib.skill.ganran={
				mod:{
					cardEnabled:function(card,player){
						if(get.type(card)=='equip') return false;
					},
					cardRespondable:function(card,player){
						if(get.type(card)=='equip') return false;
					},
					cardSavable:function(card,player){
						if(get.type(card)=='equip') return false;
					},
				},
				enable:['chooseToUse'],
				filterCard:{type:'equip'},
				viewAsFilter:function(player){
					return player.num('h',{type:'equip'})>0;
				},
				viewAs:{name:'tiesuo'},
				check:function(){return 1},
				group:'ganran2',
				ai:{
					order:4,
					useful:-1,
					value:-1
				}
			};
			lib.skill.ganran2={
				enable:'phaseUse',
				filter:function(event,player){
					return player.num('h',{type:'equip'})>0;
				},
				filterCard:{type:'equip'},
				prepare:function(cards,player){
					player.$throw(cards,1000);
				},
				discard:false,
				delay:0.5,
				content:function(){
					"step 0"
					player.draw();
					"step 1"
					for(var i=0;i<cards.length;i++){
						ui.discardPile.appendChild(cards[i]);
					}
				},
				ai:{
					order:3.5,
					result:{
						player:1
					}
				}
			};
			lib.skill._jisuangailv={
				trigger:{global:'phaseAfter'},
				forced:true,
				filter:function(event,player){
					return player==game.zhu&&game.zhu.storage._tuizhi==2;
				},
				content:function(){
					if(game.zhu.storage.jisuangailv==undefined) game.zhu.storage.jisuangailv=0;
					game.zhu.storage.jisuangailv++;
				},
				intro:{
					content:'mark'
				},
			};
			lib.skill._tuizhi={
				trigger:{player:'phaseBegin'},
				forced:true,
				priority:10,
				filter:function(event,player){
					return player==game.zhu;
				},
				content:function(){
					if(player.storage._tuizhi==undefined) player.storage._tuizhi=0;
					player.storage._tuizhi++;
					player.markSkill('_tuizhi');
					player.syncStorage('_tuizhi');
				},
				intro:{
					content:'mark'
				},
			};
			lib.skill._tuizhi2={
				skillAnimation:'epic',
				animationStr:'人类胜利',
				animationColor:'metal',
				trigger:{player:'phaseBegin'},
				forced:true,
				priority:5,
				filter:function(event,player){
					var num=8;
					if(game.players.length+game.dead.length>8) num=game.players.length+game.dead.length;
					return game.zhu.storage._tuizhi>=num;
				},
				content:function(){
					if(game.me.identity=='zhu'||game.me.identity=='zhong'){
						game.over(true);
					}else{
						game.over(false);
					};
				}
			};
			lib.skill._jiangshi={
				trigger:{player:'dieBegin'},
				forced:true,
				filter:function(event,player){
					return player.identity=='zhong';
				},
				content:function(){
					if(player.storage.fzjs==0){
						player.draw(4);
						player.discard(player.get("hej"));
					    player.revive();
						player.uninit;
						player.init(player.name,'jiangshifz');
						player.maxHp=5;
						player.hp=player.maxHp;
						player.identity='fan';
					}else{
						player.draw(4);
						player.discard(player.get("hej"));
					    player.revive();
						player.uninit;
						player.init(player.name,'jiangshinj');
						player.hp=player.maxHp;
						player.identity='nei';
					};
					game.showIdentity();
					trigger.untrigger();
					trigger.finish();
				}
			};
			lib.skill._jiangshi2={
				trigger:{player:'phaseBegin'},
				forced:true,
				popup:false,
				silent:true,
				priority:15,
				filter:function(event,player){
					if(game.players.length<=6) return !player.storage._tuizhi&&game.zhu.storage._tuizhi==2&&Math.random()<=(game.zhu.storage.jisuangailv/(game.players.length-1))-game.zhu.storage.fzjsNumber;
					if(game.players.length>6&&game.players.length<=12) return !player.storage._tuizhi&&game.zhu.storage._tuizhi==2&&Math.random()<=(game.zhu.storage.jisuangailv*2/(game.players.length-1))-game.zhu.storage.fzjsNumber;
					if(game.players.length>12&&game.players.length<=18) return !player.storage._tuizhi&&game.zhu.storage._tuizhi==2&&Math.random()<=(game.zhu.storage.jisuangailv*3/(game.players.length-1))-game.zhu.storage.fzjsNumber;
				},
				content:function(){
					player.die();
					player.identity='zhong';
					player.storage.fzjs=0;
					game.zhu.storage.fzjsNumber++;
				}
			}
			lib.skill._jiangshi3={
				trigger:{source:'dieBefore'},
				forced:true,
				filter:function(event,player){
					return (event.player.identity=='zhong'||event.player.identity=='nei')&&player.identity=='nei';
				},
				content:function(){
					player.identity='fan';
					player.init(player.name,'jiangshifz');
					game.showIdentity();
				},
			};
			lib.skill._jiangshi4={
				skillAnimation:'epic',
				animationStr:'主公阵亡',
				animationColor:'metal',
				trigger:{player:'dieBegin'},
				forced:true,
				filter:function(event,player){
					return player.storage._tuizhi>0;
				},
				content:function(){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].identity=='zhong'){
							event.target=game.players[i];
							break;
						}
					}
					if(event.target){
						game.zhu.line(event.target,'thunder');
						game.log(game.zhu,'死亡',event.target,'成为了新的主公！');
						game.zhu=event.target;
						event.target.identity='zhu';
						event.target.gainMaxHp();
						event.target.recover();
						event.target.storage.fzjsNumber=player.storage.fzjsNumber;
						event.target.storage._tuizhi=player.storage._tuizhi-1;
						event.target.markSkill('_tuizhi');
						event.target.syncStorage('_tuizhi');
						game.showIdentity();
					}
				}
			}
			lib.skill._jiangshiTx={
				skillAnimation:'epic',
				animationStr:'灵魂献祭',
				forced:true,
				trigger:{player:'dieBefore'},
				filter:function(event,player){
					return player.identity=='zhong';
				},
				content:function(){
					game.log('灵魂献祭');
				}
			};
			lib.skill._jiangshiTx2={
				audio:'jiangshidie',
				skillAnimation:'epic',
				animationStr:'僵尸灭亡',
				animationColor:'thunder',
				forced:true,
				trigger:{player:'dieBefore'},
				filter:function(event,player){
					return player.identity=='fan'||player.identity=='nei';
				},
				content:function(){
					game.log('僵尸灭亡');
				}
			};
			lib.skill._jiangshiTx3={
				skillAnimation:'epic',
				animationStr:'暗夜降临',
				animationColor:'thunder',
				trigger:{player:'phaseBegin'},
				forced:true,
				filter:function(event,player){
					return player.storage._tuizhi==2&&player.storage.ayjljs!=0;
				},
				content:function(){
					for(var i=0;i<game.players.length;i++){
						game.players[i].storage.ayjljs=0;
					};
					game.log('暗夜降临');
				}
			}
			lib.skill._huzhu={
				enable:'phaseUse',
				usable:1,
				filterCard:function(card,player){
					return card.name=='tao';
				},
				filter:function(event,player){
					return player.identity=='zhong'||player.identity=='zhu';
				},
				filterTarget:function(card,player,target){
					if(player==target) return false;
					return get.distance(player,target)<=1&&target.isDamaged()&&(target.identity=='zhong'||target.identity=='zhu');
				},
				content:function(){
					player.useCard({name:'tao'},target)
				}
			}
			lib.translate._tuizhi='退治'
			lib.translate._tuizhi2='退治'
			lib.translate._jiangshi='僵尸'
			lib.translate._jiangshi2='僵尸'
			lib.translate._jiangshi3='僵尸'
			lib.translate._jiangshi4='僵尸'
			lib.translate._jiangshiTx='僵尸'
			lib.translate._jiangshiTx2='僵尸'
			lib.translate._jiangshiTx3='僵尸'
			lib.translate._huzhu='互助'
			lib.translate._huzhu_info='出牌阶段限一次，人类玩家可以弃置一张【桃】令距离一的人类玩家恢复一点体力'
			lib.translate.jiangshifz='僵尸'
			lib.translate.jiangshinj='僵尸'
			lib.translate.baozou='暴走',
			lib.translate.baozou_info=' 锁定技，出牌阶段，你可以使用任意数量的【杀】。 '
			lib.translate.shishi='噬尸'
			lib.translate.shishi_info=' 锁定技，当你杀死一名角色后，你获得一点体力上限并回复一点体力。 '
			lib.translate.xunmeng='迅猛'
			lib.translate.xunmeng_info=' 锁定技，你的杀造成的伤害+1。你的杀造成伤害时，若你体力大于1，你流失1点体力。 '
			lib.translate.zaibian='灾变'
			lib.translate.zaibian_info=' 锁定技，你的出牌阶段开始时，若人类玩家数-僵尸玩家数+1大于0，则你摸取该数目的牌。 ' 
			lib.translate.ganran='感染'
			lib.translate.ganran_info=' 锁定技，你的装备牌都视为铁锁连环'
			lib.translate.ganran2='感染·重铸'
},
};
};
}