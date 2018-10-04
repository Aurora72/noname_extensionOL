window.func=function(lib,game,ui,get,ai,_status){
	lib.group.push('nyhzrlong');
	lib.translate.nyhzrlong='<span style="color:#FF7E15">龙</span>';
	game.addCharacterPack({
		character:{
			"nyhzrlielong":["male","",' ',["nyhzrlielong1"],['forbidai','boss','bossallowed','des:不同日子出现不同属性的龙'],'wu'],
			"nyhzr火龙":["male","nyhzrlong",7,["lielonghuolongjia","lielongweiyan","lielongbaoyan","niepan"],['forbidai']],
			"nyhzr水龙":["male","nyhzrlong",6,["lielongshuilongjia","lielongshilan","lielongxuanwo","lielonghaige","lielongjiliu"],['forbidai']],
			"nyhzr雷龙":["male","nyhzrlong",3,["lielongleilongjia","lielongjilei","lielongqianniao","lielongchaofu"],['forbidai']],
			"nyhzr土龙":["male","nyhzrlong",12,["lielongtulongjia","lielongmoyan","lielonghuachen","lielongdinu"],['forbidai']],
			"nyhzr木龙":["male","nyhzrlong",9,["lielongmulongjia","lielonglongxi","lielongduhua","lielongshenggen"],['forbidai']],
			"nyhzr风龙":["male","nyhzrlong",8,["lielongfenglongjia","lielongfengbao","lielongfengdun","lielongfengshi"],['forbidai']],
			"nyhzr冰龙":["male","nyhzrlong",5,["lielongbinglongjia","lielonghanxi","lielonghangu","lielongyondong"],['forbidai']],
		},
        skill:{
			"nyhzrlielong1":{
					nobracket:true,
			},
			"_nyhzrlielong2":{
				trigger:{
					global:"gameStart",
				},
				forced:true,
				popup:false,
				filter:function (event,player){
					return player.hasSkill('nyhzrlielong1');
				},
				content:function (){
					if(new Date().getDay()==1){
						player.init('nyhzr火龙');
						if(game.bossinfo!=undefined) game.bossinfo.chongzheng=4;
					};
					if(new Date().getDay()==2){
						player.init('nyhzr水龙');
						if(game.bossinfo!=undefined) game.bossinfo.chongzheng=10;
					};
					if(new Date().getDay()==3){
						player.init('nyhzr雷龙');
						if(game.bossinfo!=undefined) game.bossinfo.chongzheng=5;
					};
					if(new Date().getDay()==4){
						player.init('nyhzr土龙');
						if(game.bossinfo!=undefined) game.bossinfo.chongzheng=20;
					};
					if(new Date().getDay()==5){
						player.init('nyhzr木龙');
						if(game.bossinfo!=undefined) game.bossinfo.chongzheng=5;
					};
					if(new Date().getDay()==6){
						player.init('nyhzr风龙');
						if(game.bossinfo!=undefined) game.bossinfo.chongzheng=8;
					};
					if(new Date().getDay()==0){
						player.init('nyhzr冰龙');
						if(game.bossinfo!=undefined) game.bossinfo.chongzheng=4;
					};
				},
			},
            "lielonghuolongjia":{
    group:["lielonghuolongjia_heart","lielonghuolongjia_diamond"],
    subSkill:{
        heart:{
    trigger:{
        target:"shaBefore",
    },
    forced:true,
    priority:6,
    filter:function (event){
        return event.card&&event.card.name=='sha'&&get.suit(event.card)=='heart'
    },
    content:function (){
        trigger.untrigger();
        trigger.finish();
    },
        },
        diamond:{
trigger:{
player:"damageBegin",
},
forced:true,
filter:function (event,player){
return event.card&&event.card.name=='sha'&&get.suit(event.card)=='diamond'
},
content:function (){
trigger.num-=1;
}
        },
    },
            },
            "lielongweiyan":{
				trigger:{
					global:"gameDrawBefore",
				},
				forced:true,
				content:function (){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i]!=player) game.players[i].damage(1,'fire');
					};
				},
			},
            "lielongbaoyan":{
                        enable:"phaseUse",
						usable:1,
                        filterTarget:function (card,player,target){
                            return player!=target;
                        },
                        content:function (){
                            target.damage(3,'fire');
							player.loseHp();
                        },
                        ai:{
							order:5,
							result:{
								player:function (player,target){
									return player.hp-2;
								},
							},
                        },
                    },
            "lielongshuilongjia":{
trigger:{
player:"damageBegin",
},
forced:true,
filter:function (event,player){
return event.nature=='fire';
},
content:function (){
trigger.num-=1;
}
        },
            "lielongshilan":{
trigger:{
global:"phaseBefore",
},
forced:true,
filter:function (event,player){
return event.player!=player;
},
content:function (){
'step 0'
var list=['流失一点体力'];
if(trigger.player.num('h')>=1) list.push('弃置一张手牌');
trigger.player.chooseControl(list).set('ai',function(){
if(trigger.player.num('h')>=1) return '弃置一张手牌'
return '流失一点体力'
});
'step 1'
if(result.control=='流失一点体力') trigger.player.loseHp();
if(result.control=='弃置一张手牌') trigger.player.chooseToDiscard(1,'h',true);
}

			},
            "lielongxuanwo":{
    trigger:{
        player:"changeHp",
    },
    direct:true,
    filter:function (event,player){
        return event.num!=0;
    },
    content:function (){
        "step 0"
        player.chooseTarget(get.prompt('lielongxuanwo'),function(card,player,target){
            return player!=target
        }).ai=function(target){
            if(target.hasSkillTag('noturn')) return 0;
            var player=_status.event.player;
            if(get.attitude(_status.event.player,target)==0) return 0;
            if(get.attitude(_status.event.player,target)>0){
                if(target.classList.contains('turnedover')) return 1000-target.countCards('h');
                if(player.maxHp-player.hp<3) return -1;
                return 100-target.countCards('h');
            }
            else{
                if(target.classList.contains('turnedover')) return -1;
                if(player.maxHp-player.hp>=3) return -1;
                return 1+target.countCards('h');
            }
        }
        "step 1"
        if(result.bool){
            player.logSkill('lielongxuanwo',result.targets);
            result.targets[0].draw(result.targets[0].maxHp-result.targets[0].hp);
            result.targets[0].turnOver();
        }
    },
    ai:{
        effect:{
            target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(target.hp<=1) return;
                    if(!target.hasFriend()) return;
                    var hastarget=false;
                    var turnfriend=false;
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(get.attitude(target,players[i])<0&&!players[i].isTurnedOver()){
                            hastarget=true;
                        }
                        if(get.attitude(target,players[i])>0&&players[i].isTurnedOver()){
                            hastarget=true;
                            turnfriend=true;
                        }
                    }
                    if(get.attitude(player,target)>0&&!hastarget) return;
                    if(turnfriend||target.hp==target.maxHp) return [0.5,1];
                    if(target.hp>1) return [1,0.5];
                }
            },
        },
    },
            },
            "lielonghaige":{
trigger:{
player:"phaseEnd",
},
forced:true,
content:function (){
player.useCard({name:'tao'},player);;
}
			},
            "lielongjiliu":{
init:function (player){
player.storage.lielongjiliu=0;
},
marktext:"激",
intro:{
content:function (storage){
return '当前拥有'+storage+'个激流标记'
},
},
mark:true,
	group:["lielongjiliu_lose","lielongjiliu_use"],
    subSkill:{
        lose:{
trigger:{player:'loseAfter'},
filter:function (event,player){
return _status.currentPhase!=player;
},
forced:true,
content:function (){
player.storage.lielongjiliu++;
player.syncStorage('lielongjiliu');
}
        },
        use:{
enable:"phaseUse",
filterTarget:function (card,player,target){
return target!=player;
},
filter:function (event,player){
return player.storage.lielongjiliu>0;
},
content:function (){
target.damage(player.storage.lielongjiliu);
player.storage.lielongjiliu=0;
player.syncStorage('lielongjiliu');
},
    ai:{
		order:9,
        result:{
            player:function (player){
                return 1;
            },
        },
    },
        },
    },
	},
            "lielongleilongjia":{
trigger:{
player:"damageBegin",
},
forced:true,
filter:function (event,player){
return event.card&&get.color(event.card)=='black'
},
content:function (){
trigger.untrigger();
trigger.finish();
}
			},
            "lielongjilei":{
    group:["lielongjilei_Begin","lielongjilei_After"],
    subSkill:{
        Begin:{
    trigger:{
        player:"phaseDrawBegin",
    },
    forced:true,
    content:function (){
        trigger.num+=player.hp;
    },
        },
        After:{
    trigger:{
        player:"phaseDrawAfter",
    },
    forced:true,
	filter:function (event,player){
        return player.num('h')>player.hp*2
	},
    content:function (){
		player.skip('phaseUse');
		player.skip('phaseDiscard');
		for(var i=0;i<game.players.length;i++){
			if(game.players[i]!=player) game.players[i].damage(1,'thunder');
		};
    },
        },
    },
            },
            "lielongqianniao":{
trigger:{
player:"damageAfter",
},
filter:function (event,player){
return event.source&&_status.currentPhase!=player&&player.num('h')>=2;
},
content:function (){
player.chooseToDiscard(2,'h',true);
trigger.source.damage(2,'thunder');
}
			},
            "lielongchaofu":{
trigger:{
player:"phaseBegin",
},
forced:true,
filter:function (event,player){
return player.hp==1;
},
content:function (){
for(var i=0;i<game.players.length;i++){
if(game.players[i]!=player) player.useCard({name:'sha',nature:'thunder'},game.players[i]);
};
player.recover();
}
			},
            "lielongtulongjia":{
    group:["lielongtulongjia_card","lielongtulongjia_loseHp"],
    subSkill:{
        card:{
trigger:{
player:"damageBegin",
},
forced:true,
filter:function (event,player){
return event.card&&(event.card.name=='nanman'||event.card.name=='wanjian')
},
content:function (){
trigger.untrigger();
trigger.finish();
}
        },
        loseHp:{
trigger:{
player:"loseHpBegin",
},
forced:true,
content:function (){
trigger.num++;
}
        },
    },
},
            "lielongmoyan":{
trigger:{
player:"damageAfter",
},
forced:true,
filter:function (event,player){
return event.nature;
},
content:function (){
if(trigger.nature=='fire') player.chooseToDiscard(2,'h',true);
if(trigger.nature=='thunder') player.draw();
}
			},
            "lielonghuachen":{
    unique:true,
    mark:true,
    skillAnimation:true,
    animationStr:"化尘",
    animationColor:"thunder",
	enable:"phaseUse",
    init:function (player){
        player.storage.lielonghuachen=false;
    },
    filter:function (event,player){
        if(player.storage.lielonghuachen) return false;
        return true;
    },
    filterTarget:function (card,player,target){
         return player!=target;
    },
    content:function (){
        player.awakenSkill('lielonghuachen');
        player.storage.lielonghuachen=true;
		player.loseHp();
		target.discard(target.get("he"));
		target.damage();
    },
    ai:{
		order:13,
		result:{
			player:function (player,target){
				return 1;
			},
		},
    },
    intro:{
        content:"limited",
    },
},
            "lielongdinu":{
trigger:{
player:"phaseBegin",
},
forced:true,
filter:function (event,player){
return player.hp<5;
},
content:function (){
for(var i=0;i<game.players.length;i++){
if(game.players[i]!=player) player.useCard({name:'nanman'},game.players[i]);
};
player.recover();
}
			},
            "lielongmulongjia":{
trigger:{
player:"damageBegin",
},
forced:true,
content:function (){
if(trigger.nature!='fire'){
trigger.untrigger();
trigger.finish();
}else{
trigger.num++
}
}
            },
            "lielonglongxi":{
trigger:{
player:"phaseBegin",
},
forced:true,
content:function (){
if(player.hp<=5){
player.recover();
}else{
for(var i=0;i<game.players.length;i++){
if(game.players[i]!=player) game.players[i].loseHp();
};
};
}
			},
            "lielongduhua":{
trigger:{
player:"phaseEnd",
},
content:function (){
"step 0"
player.chooseTarget('选择【毒花】的目标',function(card,player,target){return player!=target}).ai=function(target){return -ai.get.attitude(player,target)};
"step 1"
if(result.bool){
result.targets[0].damage();
player.loseHp();
}else{
event.finish();
}
},
check:function (event,player){
return player.hp>3;
},
            },
            "lielongshenggen":{
    unique:true,
    mark:true,
    skillAnimation:true,
    animationStr:"生根",
	enable:"phaseUse",
    init:function (player){
        player.storage.lielongshenggen=false;
    },
    filter:function (event,player){
        if(player.storage.lielongshenggen) return false;
        return true;
    },
    filterTarget:function (card,player,target){
         return player!=target;
    },
    content:function (){
        player.awakenSkill('lielongshenggen');
        player.storage.lielongshenggen=true;
		target.loseHp();
		player.storage.lielongshenggen1=target.num('h');
		player.discard(player.get('h'));
		player.recover(2);
		player.addSkill('lielongshenggen1');
    },
    ai:{
		order:1,
		result:{
			player:function (player,target){
				if(player.hp<=7) return 1;
				return 0;
			},
		},
    },
    intro:{
        content:"limited",
    },
},
            "lielongshenggen1":{
trigger:{
player:"phaseEnd",
},
forced:true,
content:function (){
player.removeSkill("lielongshenggen1");
player.draw(player.storage.lielongshenggen1);
player.storage.lielongshenggen1=0;
}
},
            "lielongfenglongjia":{
trigger:{
player:"damageBegin",
},
forced:true,
filter:function (event,player){
return event.nature;
},
content:function (){
player.next.damage(trigger.nature);
player.previous.damage(trigger.nature);
},
            },
            "lielongfengbao":{
mod:{
cardUsable:function (card,player,num){
if(card.name=='sha') return Infinity;
},
},
enable:['chooseToRespond','chooseToUse'],
filterCard:function(card){
return get.color(card)=='black';
},
position:'he',
viewAs:{name:'sha',nature:'thunder'},
prompt:'将一张黑色牌当作雷杀使用或打出',
ai:{
respondSha:true,
}
            },
            "lielongfengdun":{
    mod:{
        globalTo:function (from,to,distance){
            return distance+3;
        },
    },
            },
            "lielongfengshi":{
trigger:{
player:"useCardAfter",
},
filter:function (event,player){
return event.card.name=='wanjian';
},
forced:true,
content:function (){
for(var i=0;i<game.players.length;i++){
if(game.players[i]!=player) game.players[i].loseHp();
};
},
			},
            "lielongbinglongjia":{
trigger:{
player:"damageBefore",
},
forced:true,
filter:function (event,player){
return event.source;
},
content:function (){
trigger.source.discard(trigger.source.get('h'));
},
            },
            "lielonghanxi":{
                trigger:{
                    player:"phaseBefore",
                },
                forced:true,
                content:function (){
					game.players.randomGet(player).turnOver();
                },
            },
            "lielonghangu":{
                trigger:{
                    player:"phaseAfter",
                },
                forced:true,
                content:function (){
                    for(var i=0;i<game.players.length;i++){
                        if(game.players[i].isTurnedOver()){
							game.players[i].loseHp();
							game.players[i].discard(game.players[i].get('h'));
							player.recover();
						};
                    };
                },
            },
            "lielongyondong":{
    unique:true,
    mark:true,
    skillAnimation:true,
    animationStr:"永冻",
    animationColor:"thunder",
	enable:"phaseUse",
    init:function (player){
        player.storage.lielongyondong=false;
    },
    filter:function (event,player){
        if(player.storage.lielongyondong) return false;
        return true;
    },
    content:function (){
        player.awakenSkill('lielongyondong');
        player.storage.lielongyondong=true;
        for(var i=0;i<game.players.length;i++){
			if(game.players[i]!=player&&!game.players[i].isTurnedOver()) game.players[i].turnOver();
		};
    },
    ai:{
		order:1,
		result:{
			player:function (player,target){
				return 1;
			},
		},
    },
    intro:{
        content:"limited",
    },
},
		},
        translate:{
			"nyhzr火龙":"火龙",
			"nyhzr水龙":"水龙",
			"nyhzr雷龙":"雷龙",
			"nyhzr土龙":"土龙",
			"nyhzr木龙":"木龙",
			"nyhzr风龙":"风龙",
			"nyhzr冰龙":"冰龙",
            "lielongbinglongjia":"龙甲",
            "lielongbinglongjia_info":"锁定技，当你受到伤害前，伤害来源弃置所有手牌",
            "lielonghanxi":"寒袭",
            "lielonghanxi_info":"锁定技，回合开始前，你随机令一名其他角色翻面",
            "lielonghangu":"寒骨",
            "lielonghangu_info":"锁定技，回合开始结束后，场上所有翻面角色流失一点体力并弃置所有手牌；场上每有一名翻面角色，你恢复一点体力",
            "lielonghangu":"寒骨",
            "lielonghangu_info":"锁定技，回合开始结束后，场上所有翻面角色流失一点体力并弃置所有手牌；场上每有一名翻面角色，你恢复一点体力",
            "lielongyondong":"永冻",
            "lielongyondong_info":"限定技，出牌阶段，你可以令所有其他未翻面的角色翻面",
            "lielongfenglongjia":"龙甲",
            "lielongfenglongjia_info":"锁定技，当你受到属性伤害时，你对你的上家与下家个造成一点属性伤害（属性为你受到的伤害属性）",
            "lielongfengbao":"风暴",
            "lielongfengbao_info":"你可以将一张黑色牌当作雷杀使用或打出<br>锁定技，出牌阶段，你使用的【杀】没有数量限制",
            "lielongfengdun":"风盾",
            "lielongfengdun_info":"锁定技，你的防御距离+3",
            "lielongfengshi":"风矢",
            "lielongfengshi_info":"锁定技，你使用【万箭齐发】后，其他角色流失一点体力",
            "lielongmulongjia":"龙甲",
            "lielongmulongjia_info":"锁定技，你不会受到非火焰伤害，你受到的火焰伤害+1",
            "lielonglongxi":"龙息",
            "lielonglongxi_info":"锁定技，准备阶段，若你的体力值不大于5，你恢复1点体力；若你的体力值大于5，你令其他角色流失一点体力",
            "lielongduhua":"毒花",
            "lielongduhua_info":"结束阶段，你可以对一名角色造成一点伤害，然后你失去一点体力",
            "lielongshenggen":"生根",
            "lielongshenggen1":"生根",
            "lielongshenggen_info":"限定技，出牌阶段，你可以弃置所有手牌并令一名角色流失一点体力，然后你恢复两点体力，若如此做，回合结束阶段，你摸X张牌（X为发动【生根】时，【生根】目标的手牌数，若目标死亡，你无法摸牌）",
            "lielongtulongjia":"龙甲",
            "lielongtulongjia_info":"锁定技，【南蛮入侵】和【万箭齐发】无法对你造成伤害；你流失体力时，流失量+1",
            "lielongmoyan":"魔岩",
            "lielongmoyan_info":"锁定技，当你受到雷属性伤害后，你摸一张牌，当你受到火属性伤害后，你弃置两张手牌",
            "lielonghuachen":"化尘",
            "lielonghuachen_info":"限定技，出牌阶段，你可以弃置一名角色手牌区和装备区内的所有牌，若如此做，你失去一点体力并对其造成一点伤害",
            "lielongdinu":"地怒",
            "lielongdinu_info":"锁定技，准备阶段，若你的体力值小于五，则视为你使用了1张【南蛮入侵】，然后你恢复一点体力",
            "lielonghuolongjia":"龙甲",
            "lielonghuolongjia_info":"锁定技，红桃【杀】对你无效，方片【杀】对你造成的伤害-1",
            "lielongweiyan":"威焰",
            "lielongweiyan_info":"锁定技，游戏开始时，你对所有其他角色造成一点火焰伤害",
            "lielongbaoyan":"爆炎",
            "lielongbaoyan_info":"回合开始阶段，你可以流失一点体力并对一名角色造成三点火焰伤害，每回合限一次",
            "lielongshuilongjia":"龙甲",
            "lielongshuilongjia_info":"锁定技，当你受到火焰伤害时，伤害-1",
            "lielongshilan":"噬浪",
            "lielongshilan_info":"锁定技，其他角色的回合开始前，其须选择一项：<br>1.弃置一张手牌<br>2.流失一点体力",
            "lielongxuanwo":"漩涡",
            "lielongxuanwo_info":"当你改变体力时，你可以将一名角色的武将牌翻面并令其摸X张牌。X为其当前已损失体力值",
            "lielonghaige":"海歌",
            "lielonghaige_info":"锁定技，结束阶段，你视为使用了一张【桃】",
            "lielongjiliu":"激流",
            "lielongjiliu_info":"锁定技，当你于回合外失去手牌后，你获得一个【激流】标记<br>出牌阶段，你可以清空【激流】标记，然后对一名角色造成X点伤害。X为“激流”牌的数量",
            "lielongleilongjia":"龙甲",
            "lielongleilongjia_info":"锁定技，你免疫黑色卡牌造成的伤害（免疫后仍可触发【千鸟】）",
            "lielongjilei":"疾雷",
            "lielongjilei_info":"锁定技，摸牌阶段，你多摸X张牌，若此时你的手牌数大于2X，你可以跳过出牌阶段和弃牌阶段并视为对所有其他角色造成一点雷电伤害。X为你当前体力值",
            "lielongqianniao":"千鸟",
            "lielongqianniao_info":"当你于回合外受到伤害后，你可以弃两张手牌牌并对伤害来源造成两点雷电伤害",
            "lielongchaofu":"超伏",
            "lielongchaofu_info":"锁定技，准备阶段，若你的体力值为一，你视为对所有其他角色使用了一张【雷杀】，然后你恢复一点体力",
			"nyhzrlielong":"猎龙战役",
            "nyhzrlielong1":"规则：",
            "nyhzrlielong1_info":"每天猎杀不同的龙",
            "nyhzrlielong1_append":'若今天是：<li>周一，猎火龙（4）<li>周二，猎水龙（10）<li>周三，猎雷龙（5）<li>周四，猎土龙（20）<li>周五，猎木龙（5）<li>周六，猎风龙（8）<li>周日，猎冰龙（4）<br>重整回合数为X<br>X为龙后面小括号内的数<br><br>猎杀当天的龙或猎龙方全军覆没，游戏结束',
		},
    },'<span style=\"font-size:17px;font-weight:600\">扩展ol-BOSS</span>');
}
	