window.func=function(lib,game,ui,get,ai,_status){
	game.import('character',function(){
		var xinSP={
			name:'xinSP',
			connect:true,
			character:{
				"xinSP_徐庶":["male","wei",3,['xinSP_缄默','xinSP_自荐'],[]],
			},
			skill:{
				'xinSP_缄默':{
					mod:{
						cardEnabled:function(card,player){
							if(get.type(card)=='trick'||get.type(card)=='delay') return false;
						},
						cardUsable:function(card,player){
							if(get.type(card)=='trick'||get.type(card)=='delay') return false;
						},
						cardRespondable:function(card,player){
							if(get.type(card)=='trick'||get.type(card)=='delay') return false;
						},
						cardSavable:function(card,player){
							if(get.type(card)=='trick'||get.type(card)=='delay') return false;
						},
						maxHandcard:function (player,num){
							return num+player.countCards('h',function(card){return get.type(card)=='trick'||get.type(card)=='delay'});
						},
					},
				},
				'xinSP_自荐':{
					trigger:{
						global:'useCardBegin'//useCardToBefore
					},
					direct:true,
					filter:function(event,player){
						if(player.countCards('h',function(card){return get.type(card)=='trick'||get.type(card)=='delay'})==0) return false;
						var list=[];
						if(event.targets==undefined) return false;
						for(var i=0;i<event.targets.length;i++){
							if(event.targets[i]!=event.player) list.push(event.targets[i]);
						};
						if(list.length==0) return false;
						var card=event.card;
						return get.type(card)=='trick'||get.type(card)=='delay';
					},
					content:function(){
						'step 0'
						event.list=[];
						for(var i=0;i<trigger.targets.length;i++){
							if(trigger.targets[i]!=trigger.player) event.list.push(trigger.targets[i]);
						};
						event.num=0;
						'step 1'
						var source=trigger.player;
						var target=event.list[event.num];
						player.chooseCard(get.translation(source.name)+'将对'+get.translation(target.name)+'使用【'+get.translation(trigger.card.name)+get.translation(get.suit(trigger.card))+(get.number(trigger.card))+'】，是否发动【自荐】？',1,function(card){return get.type(card)=='trick'||get.type(card)=='delay'}).set('ai',function(card){
							if(trigger.card.name=='tiesuo') return 0;
							if(get.attitude(player,source)<0&&get.attitude(player,target)<0&&(trigger.card.name=='taoyuan'||trigger.card.name=='wugu')) return 1;
							if(get.attitude(player,target)>0&&(trigger.card.name=='taoyuan'||trigger.card.name=='wugu')) return 0;
							return get.attitude(player,target);
    					});
						'step 2'
						var source=trigger.player;
						var target=event.list[event.num];
						if(result.bool){
							player.popup('自荐');
							player.logSkill('自荐');
							player.discard(result.cards[0]);
							var list=['令此锦囊牌对'+get.translation(target)+'无效'];
							event.num1=target.maxHp-target.hp;
							if(event.num1<1) event.num1=1;
							if(source.countCards('he')>event.num1) list.push('给予'+get.translation(target)+(event.num1)+'张牌');
							source.chooseControl(list).set('ai',function(event){
								if((trigger.card.name=='taoyuan'||trigger.card.name=='wugu')&&get.attitude(source,target)>0&&source.countCards('he')>event.num1) return '给予'+get.translation(target)+(event.num1)+'张牌';
								return '令此锦囊牌对'+get.translation(target)+'无效';
							});
						}else{
							if(event.num+1<event.list.length&&player.countCards('h',function(card){return get.type(card)=='trick'||get.type(card)=='delay'})>0){
								event.num++;
								event.goto(1);
							}else{
								event.finish();
							};
						};
						'step 3'
						var source=trigger.player;
						var target=event.list[event.num];
						if(result.control){
							source.chat(result.control);
							game.delay();
						};
						if(result.control=='令此锦囊牌对'+get.translation(target)+'无效'){
							trigger.targets.remove(target);
							if(event.num+1<event.list.length&&player.countCards('h',function(card){return get.type(card)=='trick'||get.type(card)=='delay'})>0){
								event.num++;
								event.goto(1);
							}else{
								event.finish();
							};
						};
						if(result.control=='给予'+get.translation(target)+(event.num1)+'张牌'){
							source.chooseCard('he',event.num1,true).set('ai',function(card){
								return 5-get.value(card);
    						});
						};
						'step 4'
						var source=trigger.player;
						var target=event.list[event.num];
						if(result.bool){
							source.$give(result.cards.length,target);
							target.gain(result.cards);
							game.delay();
						};
						if(event.num+1<event.list.length&&player.countCards('h',function(card){return get.type(card)=='trick'||get.type(card)=='delay'})>0){
							event.num++;
							event.goto(1);
						}else{
							event.finish();
						};
					},
				},
			},
			translate:{
				"xinSP_徐庶":"sp徐庶",
				"xinSP_缄默":"缄默",
				"xinSP_缄默_info":"锁定技，你不能使用锦囊牌；你的锦囊牌不计入手牌",
				"xinSP_自荐":"自荐",
				"xinSP_自荐_info":"当一名角色使用锦囊牌指定目标时，你可以弃置一张锦囊牌，然后令使用角色选择：交给目标角色X张牌或移除使用角色使用的锦囊牌中的该目标角色（X为目标角色已损失体力且至少为1）",
			},
		};
		if(lib.device||lib.node){
			for(var i in xinSP.character){xinSP.character[i][4].push('ext:扩展ol/'+i+'.jpg');}
		}else{
			for(var i in xinSP.character){xinSP.character[i][4].push('db:extension-扩展ol:'+i+'.jpg');}
		}
		return xinSP;
	});
	lib.config.all.characters.push('xinSP');
	if(!lib.config.characters.contains('xinSP')) lib.config.characters.push('xinSP');
	lib.translate['xinSP_character_config']='新sp';
	if(lib.config['extension_扩展ol_xinSP_first']!=true){
		game.saveConfig('extension_扩展ol_xinSP',true);
		game.saveConfig('extension_扩展ol_xinSP_first',true);
		//lib.config.characters.remove(i);
	};
}