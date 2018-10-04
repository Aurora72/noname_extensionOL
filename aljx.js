window.func=function(lib,game,ui,get,ai,_status){
	lib.card.aljx_重明={
		type:'basic',
		fullimage:true,
		image:'ext:扩展ol/aljx_传奇朱雀.jpg',
		ai:{
			useful:Infinity,
			value:Infinity,
		},
	};
	lib.translate.aljx_重明='重明';
	lib.translate.aljx_重明_info='这张牌能够让传奇朱雀重生';
	lib.card.aljx_重明1={
		type:'basic',
		fullimage:true,
		image:'ext:扩展ol/aljx_传奇朱雀.jpg',
		ai:{
			useful:0,
			value:0,
		},
	};
	lib.translate.aljx_重明1='重明';
	lib.translate.aljx_重明1_info='这张牌能够让传奇朱雀重生';
	game.import('character',function(lib,game,ui,get,ai,_status){
		var aljx={
			name:'aljx',
			connect:true,
			character:{
				"aljx_星魔":["male","aljx_超暗系",3,["aljx_致命毒杀","aljx_淬毒之刃"],[]],
				"aljx_传奇朱雀":["female","aljx_超火系",4,["aljx_重明继焰","aljx_玉石俱焚"],[]],
			},
			skill:{
				'aljx_致命毒杀':{
					nobracket:true,
					enable:'phaseUse',
					round:2,
					discard:false,
					filterCard:true,
					check:function(card){
						return 5-get.value(card);
					},
					filterTarget:function(card,player,target){
						return target!=player;
					},
					content:function(){
						player.$give(cards,target);
						target.gain(cards);
						game.log(target,'的',cards[0],'转化为了【毒】');
						game.broadcastAll(function(card){
							card.init([card.suit,card.number,'du']);
						},cards[0]);
					},
					ai:{
						order:12,
						result:{
							target:function(player,target){
								return -1;
							},
						},
					},
				},
				'aljx_淬毒之刃':{
					nobracket:true,
					mod:{
    					maxHandcard:function (player,num){
            				return num+game.countPlayer(function(current){return current.countCards('h',{name:'du'})>0});
    					},
					},
					trigger:{
						player:"loseBefore",
					},
					filter:function (event,player){
						if(event.cards==undefined) return false;
						for(var i=0;i<event.cards.length;i++){
							if(event.cards[i].name=='du') return true;
						};
						return false;
					},
					forced:true,
					content:function (){
						for(var i=0;i<trigger.cards.length;i++){
							if(trigger.cards[i].name=='du'){
								game.broadcastAll(function(card){
									card.init([card.suit,card.number,'jiu']);
								},trigger.cards[i]);
								player.useCard(trigger.cards[i],player);
							};
						};
						game.delay(1.5);
					},
				},
				"aljx_重明继焰":{
					nobracket:true,
					marktext:"重",
					intro:{
						content:function (storage){
							return '已以此法重生'+storage+'次';
						},
					},
					mark:true,
					init:function (player){
						player.storage.aljx_重明继焰=0;
					},
					trigger:{
						player:"dieBefore",
					},
					direct:true,
					filter:function (event,player){
						return event.aljx_type!='skill';
					},
					content:function(){
						"step 0"
						player.chooseTarget(get.prompt('aljx_重明继焰'),function(card,player,target){
							return target!=player;
						}).ai=function(target){
							if(game.countPlayer(function(current){return current!=player&&get.attitude(current,player)>=0})>0) return get.attitude(target,player)+1;
							return -get.attitude(target,player)+1;
						};
						"step 1"
						if(result.bool){
							trigger.cancel();
							player.line(result.targets);
							player.logSkill('aljx_重明继焰');
							game.broadcastAll(function(player){
								player.classList.add('out');
							},player);
							game.log(player,'移出了游戏');
							result.targets[0].storage.aljx_重明继焰2=player;
							var card=game.createCard({name:'aljx_重明'});
							if(get.attitude(result.targets[0],player)<0) card=game.createCard({name:'aljx_重明1'});
							result.targets[0].storage.aljx_重明继焰1=card;
							result.targets[0].gain(card,'gain2');
						}else{
							event.finish();
						};
					},
				},
				"_aljx_重明继焰":{
					trigger:{
						player:"phaseAfter",
					},
					forced:true,
					popup:false,
					filter:function (event,player){
						return player.storage.aljx_重明继焰2!=undefined&&player.storage.aljx_重明继焰1!=undefined;
					},
					content:function (){
						var pl=player.storage.aljx_重明继焰2;
						var card=player.storage.aljx_重明继焰1;
						if(player.get('h').contains(card)){
							game.broadcastAll(function(pl){
								pl.classList.remove('out');
							},pl);
							game.log(player,'移回了游戏');
							player.discard(card);
							pl.logSkill('aljx_重明继焰');
							pl.storage.aljx_重明继焰++;
							pl.syncStorage('aljx_重明继焰');
							pl.recover(pl.maxHp-pl.hp);
							pl.insertPhase();
						}else{
							game.broadcastAll(function(pl){
								pl.classList.remove('out');
							},pl);
							game.log(player,'移回了游戏');
							pl.die().aljx_type='skill';
						};
						delete player.storage.aljx_重明继焰2;
						delete player.storage.aljx_重明继焰1;
					},
				},
				"_aljx_重明继焰1":{
					trigger:{
						player:"loseAfter",
					},
					forced:true,
					popup:false,
					filter:function (event,player){
						if(event.cards==undefined) return false;
						for(var i=0;i<event.cards.length;i++){
							if(event.cards[i].name=='aljx_重明'||event.cards[i].name=='aljx_重明1') return true;
						};
						return false;
					},
					content:function (){
						for(var i=0;i<trigger.cards.length;i++){
							if(trigger.cards[i].name=='aljx_重明'||trigger.cards[i].name=='aljx_重明1'){
								game.log(trigger.cards[i],'转化为了【桃】')
								game.broadcastAll(function(card){
									card.init([card.suit,card.number,'tao']);
								},trigger.cards[i]);
							};
						};
					},
				},
				'aljx_玉石俱焚':{
					nobracket:true,
					trigger:{
						source:"damageBegin",
					},
					forced:true,
					priority:-Infinity,
					filter:function (event,player){
						return player!=event.player;
					},
					content:function (){
						trigger.cancel();
						player.loseHp();
						if(player.storage.aljx_重明继焰!=undefined&&Math.random()<trigger.num*0.15+player.storage.aljx_重明继焰*0.2){
							game.log(player,'秒杀了',trigger.player);
							trigger.player.die().source=player;
						};
					},
				},
			},
			translate:{
				"aljx_传奇朱雀":"传奇朱雀",
				"aljx_星魔":"星魔",
				"aljx_致命毒杀":"致命毒杀",
				"aljx_致命毒杀_info":"出牌阶段，你可以将一张手牌给予一名其他角色，然后这张牌转化为【毒】，每两轮限一次",
				"aljx_淬毒之刃":"淬毒之刃",
				"aljx_淬毒之刃_info":"锁定技，当你失去【毒】时，你将【毒】转化为【酒】并使用之；你的手牌上限+X（X为场上拥有【毒】的角色数）",
				"aljx_重明继焰":"重明继焰",
				"aljx_重明继焰_info":"当你死亡时，你可以将你的武将牌移出游戏并给予一名其他角色一张【重明】，当其回合结束后，你将武将牌移回游戏内，若其手中没有你给予的【重明】，你立即死亡，否则其弃置之，然后你将体力回复至体力上限并执行一个额外的回合（失去的【重明】会转化为【桃】）",
				"aljx_玉石俱焚":"玉石俱焚",
				"aljx_玉石俱焚_info":"锁定技，当你对其他角色造成伤害时，你取消之并流失一点体力，然后有X%概率秒杀对方（X为伤害数*15+以【重明继焰】重生数*20）",
			},
		};
		if(lib.device||lib.node){
			for(var i in aljx.character){aljx.character[i][4].push('ext:扩展ol/'+i+'.jpg');}
		}else{
			for(var i in aljx.character){aljx.character[i][4].push('db:extension-扩展ol:'+i+'.jpg');}
		}
		return aljx;
	});
	lib.config.all.characters.push('aljx');
	if(!lib.config.characters.contains('aljx')) lib.config.characters.push('aljx');
	lib.translate['aljx_character_config']='奥拉·镜像';
	lib.group.push('aljx_超暗系');
	lib.translate.aljx_超暗系='<img src="'+lib.assetURL+'extension/扩展ol/aljx_超暗系.png" width="28" height="28">';
	lib.group.push('aljx_超火系');
	lib.translate.aljx_超火系='<img src="'+lib.assetURL+'extension/扩展ol/aljx_超火系.png" width="28" height="28">';
};