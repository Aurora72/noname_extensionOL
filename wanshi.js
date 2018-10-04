window.func=function(lib,game,ui,get,ai,_status){
            game.import('character',function(lib,game,ui,get,ai,_status){
                var wanshi = {
                    name: 'wanshi',
                    connect:true,				
                    character:{
            qws青龙:["male","gu",4,["ws滔天","guicai"],["des:<li>青龙是古代神话传说中的灵兽，属于传统文化中的四象之一，四象即是青龙、白虎、朱雀、玄武四圣兽。<li>从先秦时代开始它就是代表太昊与东方七宿的神兽，而到了汉代五行学说开始兴起，它的象征含义又多了甲乙与春季<li>《淮南子》卷三 记载：天神之贵者，莫贵于青龙<li>故而青龙或为四象之首。"]],
            zws朱雀:["female","gu",4,["ws赤炎","ws焚天"],["des:<li>朱雀是传统文化中的四象之一，《三辅黄图》所谓的“天之四灵”之一。<li>从殷商时代开始它就是代表炎帝与南方七宿的神兽，而五行学说开始兴起之后，它的象征含义又多了丙丁与夏季。<li>很多人将其认为是凤凰或是凤凰的一种，但实际上朱雀与凤凰存在极大的不同，且作为天之四灵与四方星宿之一的朱雀比礼记四灵之一的凤凰更加尊贵。<li>亓鑫铭所著《泛亚论》称古越国以朱雀为图腾。"]],
            xws玄武:["female","gu",4,["ws忠臣","ws龟背"],["des:<li>玄武是古代神话传说中的灵兽，属于传统文化中的四象之一，四象即是青龙、白虎、朱雀、玄武四圣兽。 <li>从先秦时代开始它就是代表颛顼与北方七宿的神兽，而到了汉代五行学说开始兴起，它的象征含义又多了壬癸与冬季。<li>二十八宿，玄武是北方七宿（斗、牛、女、虚、危、室、壁）的总称。"]],
            bws白虎:["male","gu",4,["ws兽性","ws虎跃"],["des:<li>白虎也是战神、杀伐之神，源于上古星宿崇拜。白虎具有避邪、禳灾、祈丰及惩恶扬善、发财致富、喜结良缘等多种神力。它是四灵之一，当然也是由星宿变成的。是由二十八星宿之中位西方的七宿：奎、娄、胃、昴、毕、觜、参组成。所以是西方的代表，而它的白，是因西方在五行中属金，色是白。所以白色是从五行中说的。 <li>除了道教中的四灵包括青龙白虎之外，连在风水师探勘墓地时，在地形前方左右两边突起的地形，可以当作墓穴的地方，都有独特的称号，称之左青龙、右白虎，取其护卫之意，而在公堂中也有相同的装饰，在左右堂柱上绘有青龙白虎，以其镇压邪灵。而在道教兴起之后，龙虎被借用为道家炼丹的术语，就是指“铅汞、坎离、水火、阴阳”等的同意词。而另外一种说法是，性属木，木代表东方，于卦为震，故比为青龙；情属金，金代表西方，于卦为兑，金白色，故喻为白虎。金能够克木，故情多损性，而用二八之真精气，使之交合为一，则金木无间，龙虎自伏而成丹，在人体中则以肝为龙、肾为虎，而外丹则仍取阴阳之意，以龙为铅，虎为汞。 <li>由于白虎是战伐之神，所以有多位猛将被说成为白虎星转世，如：唐代大将罗成、薛仁贵父子等人。<li>在中国传统文化中是道家西方七宿星君四象之一，根据五行学说，它是代表西方的灵兽，为白的老虎，代表的季节是秋季。 二十八宿的西方七宿（奎、娄、胃、昴、毕、觜、参），其形象虎，位于西方，属金，色白，总称白虎。<li>在中国四圣兽中,另外一个常常跟龙相提并论的就是‘白虎’，跟青龙同样，白虎也非“虎”。 在中国的神话传说中，白虎是战神、杀伐之神。同时，白虎具有避邪、禳灾、祈丰及惩恶的扬善、发财致富、喜结良缘等多种神力。而它是四灵之一，当然也是由星宿变成的。<li>象征 白虎象征着威武和军队，所以古代很多以白虎冠名的地方都与兵家之事有关，例如古代军队里的白虎旗和兵符上的白虎像。 白虎一般出现在汉代画像石墓的墓门上，或与青龙分别作为单独画像刻在墓室的过梁两侧，用以辟邪。<li>《风俗通义》云：“虎者，阳物，百兽之长也，能执搏挫锐，噬食鬼魅。”在汉代五行观念中，白虎被视作西方神兽。"]],
            zws烛龙:["male","gu",3,["ws火烛","ws苍龙"],["des:<li>烛龙，别名烛九阴，中国古代神话中的钟山之神<li>据《山海经》中记载，烛龙也称烛九阴，是人面蛇身的形象，赤红色，身长千里，睁开眼就为白昼，闭上眼则为夜晚，吸气为冬天，呼气为夏天，又能呼风唤雨，不喝水不进食，不睡觉也不休息。"]],
            qws麒麟:["male","gu",4,["ws四象"],["des:<li>麒麟，中国传统祥兽，是中国古籍中记载的一种神物，与凤、龟、龙共称为“四灵”，是神的坐骑，古人把麒麟当作仁宠，雄性称麒，雌性称麟。麒麟与貔貅的区别：麒麟是吉祥神宠，主太平、长寿、吉祥。貔貅是凶猛的瑞宠，且护主心特别强，有招财纳福、镇宅避邪的作用，它以财为食，能食四方之财，目前以尚修堂开光貔貅的效果较为明显。民间一般用麒麟主太平长寿，用貔貅来主招财、镇宅、辟邪。麒麟和貔貅因其深厚的文化内涵，在中国传统民俗礼仪中，被制成各种饰物和摆件用于佩戴和安置家中，有祈福和安佑的用意。"]],
            hws浑沌:["male","gu",4,["ws混沌","ws肆暴"],["des:<li>混沌，是古代的凶神。传说它形状肥圆、像火一样通红，长有四只翅膀、六条腿，虽然没有五官，但是却能够通晓歌舞曲乐。还有一种说法称浑沌是象狗或熊一样的动物，人类无法看见它、也无法听见它.<li>它经常咬自己的尾巴并且傻笑；如果遇到高尚的人，浑沌便会大肆施暴；<li>如果遇到恶人，浑沌便会听从他的指挥"]],
            tws饕餮:["male","gu",4,["ws绝戮","ws暴食"],["des:<li>传说轩辕黄帝大战蚩尤，蚩尤被斩，其首落地化为饕餮。<li>《山海经.北山经》有云：“钩吾之山其上多玉，其下多铜。有兽焉，其状如羊身人面，其目在腋下，虎齿人爪，其音如婴儿，名曰狍鸮，是食人。”根据晋代郭璞对《山海经》的注解，这里说的狍鸮即是指饕餮。<li>《神异经.西荒经》中有云：“饕餮，兽名，身如牛，人面，目在腋下，食人。” 后来，饕餮变成了图腾，刻于各种祭祀用的器皿之上。《吕氏春秋.先识览》有云：“周鼎著饕餮，有首无身，食人未咽害及其身，以言报更也。”殷周时代鼎彝上常刻的就是饕餮，其脑袋狰狞，双目炯炯，赫然有神，鼻梁凸出；首部有一双弯曲的兽角或足，其弯曲的方向似无定制，或内勾似羊角，或外曲似牛角；巨嘴大张，利齿如锯，嘴略弯曲内勾，或嘴巴紧锁。则作正面盘踞状，身躯拱起，头着地或水云气，两边有一对利爪，象狗爪或虎爪。两侧有一对肉翅，形如耳朵。 因富贪欲故后世喻贪婪之人为‘饕餮‘。<li>《左传.文公十八年》有云：“缙云氏有不才子，贪于饮食，冒于货贿，天下谓之饕餮。” 饕餮好食，举凡目之所及，无所不食，若天下食尽，则将自食己身；是四大凶兽中物理杀伤力最强的怪兽，传说为三苗氏死后所化，纵使大罗金仙，也难逃饕餮吞噬。"]],
            tws梼杌:["male","gu",4,["ws横断","ws明德"],["des:<li>梼杌(táo wù)，中国神话中上古时期的四凶之一。<li>所谓”四凶“，最早指的是上古年间四位残暴的部落首领，后来被杜撰为他们部落图腾的四种怪物。 <li>《左传·文公十八年》:“颛顼有不才子，不可教训，不知诎言，告之则顽，舍之则嚣，傲狠明德，以乱天常。天下之民，谓之梼杌。” 唐人张守节《史记正义》引《神异经》注道：其状如虎而犬毛，长二尺，人面，虎足，猪口牙，尾长一丈八尺，搅乱荒中，名梼杌。一名傲狠（ào hěn），一名难训。<li>（梼杌体格像老虎而毛类犬，毛很长，脸有点像人，腿有点像老虎，猪口牙，尾长，常被用来比喻顽固不化、态度凶恶的人） <li>《山海经.西山经》：“三危之山，.....有兽焉，其状如牛（体格像牛一样大），白身（肤色苍白），四角（四根獠牙），其豪如披蓑，其名曰獓骃，是食人。” 其实梼杌和獓骃的原型就是疣猪。"]],
            qws穷奇:["male","gu",3,["ws洪荒"],["des:<li>穷奇，中国神话传说中的古代四凶之一，主要记载于《山海经》中，《山海经·海内北经》所载，指穷奇外貌像老虎，长有一双翅膀，喜欢吃人，更会从人的头部开始进食，是一头凶恶的异兽。可是，同样在《山海经》中。<li>《山海经·西山经》一篇却提到穷奇的另一种形象，该篇中的穷奇，外貌像牛，长著刺猬的毛发，与《海内北经》所述者有很大的差别。不过二者都是喜欢食人的凶兽，这方面则没有分别。据说穷奇经常飞到打斗的现场，将有理的一方鼻子咬掉；如果有人犯下恶行，穷奇会捕捉野兽送给他，并且鼓励他多做坏事。古人也把那种不重心意、远君子近小人的人称为穷奇"]],
            tws腾蛇:["male","gu",4,["ws腾空","ws羽落"],["des:<li>螣蛇又称腾蛇，中国民间传说中的一种能飞的蛇，在中国古代文献中有许多这方面的记载，称为“神兽”，有诸多代表意义。 <li>螣蛇一词的典故出于《荀子·劝学》“螣蛇无足而飞，鼯鼠五技而穷”，指螣蛇虽然无足，却比多技的鼯鼠更能腾云驾雾，游走空中，借此比喻凡人做事理当专心一致，最终必能取得成功。<li>《尔雅·释鱼》中亦有提及“螣”即“螣蛇”，东晋郭璞为其作注，指螣蛇为“龙类也，能兴云雾而游其中”。"]],
            yws雨师妾:["female","gu",4,["ws祈雨","ws蓄精"],["des:《山海经·海外东经》：“ 雨师妾在其北，其为人黑，两手各操一蛇，左耳有青蛇，右耳有赤蛇。”"]],
            fws风生兽:["female","gu",2,["ws化风"],["des:炎洲在南海中，地方二千里，去北岸九万里。上有风生兽，似豹，青色，大如狸。张网取之，积薪数车以烧之，薪尽而不然，灰中而立，毛亦不燋;斫刺不入，打之如皮囊，以铁锤锻其头数十下乃死，而张口向风，须臾复活"]],
            //ws_貘:["male","gu",4,["ws_汲梦","ws_食噩","ws_恨遗"],["des:"]],
        },
                    skill:{
            ws化风:{
    group:["ws化风_1","ws化风_2"],
    subSkill:{
        1:{
                trigger:{
                    player:"dyingBefore",
                },
				filter:function (event,player){
                return game.players.length==2;
                },
                forced:true,
                content:function (){
player.gainMaxHp(1);
player.recover(player.maxHp-player.hp);
player.recover(1);
player.removeSkill('ws化风');
},  
        },
        2:{
                mod:{
                    maxHandcard:function (player,num){
            return 3;
        },
                },
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                content:function (){
for(var i=0;i<game.players.length;i++){
game.players[i].storage.ws化风=1;
game.players[i].addSkill('ws化风1');
}
        },
        },
    },				
            },            
			ws化风1:{                
			trigger:{
                    player:"phaseBefore",
                },
                forced:true,
                content:function (){
for(var i=0;i<game.dead.length;i++){
if(game.dead[i].hasSkill('ws化风')){
game.dead[i].logSkill('ws化风')
game.dead[i].revive(game.dead[i].maxHp);    
}
}
for(var j=0;j<game.players.length;j++){
delete game.players[j].storage.ws化风;
game.players[j].removeSkill('ws化风1');
}
}},						
            ws滔天:{
                filter:function (event,player){
        return player.num('he',{color:'red'})>0;
    },
                enable:"chooseToUse",
                filterCard:function (card){
        return get.color(card)=='red';
    },
                position:"he",
                viewAs:{
                    name:"hongshui",
                    suit:"diamond",
                    number:9,
                },
                prompt:"将一张红色手牌当洪水使用",
                check:function (card){return 6-ai.get.value(card)},
                ai:{
                    threaten:1.5,
                    basic:{
                        order:1,
                        useful:1,
                        value:8,
                    },
                    result:{
                        target:function (player,target){
                var num=target.hp-target.num('h')-2;
                if(num>-1) return -0.01;
                if(target.hp<3) num--;
                if(target.isTurnedOver()) num/=2;
                var dist=get.distance(player,target,'absolute');
                if(dist<1) dist=1;
                return num/Math.sqrt(dist);
            },
                    },
                    tag:{
                        skip:"phaseUse",
                    },
                    order:1,
                },
            },
            ws焚天:{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
return player.num('hej')>0;
},
                content:function (){
trigger.nature='fire';
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                    },
                },
            },
            ws赤炎:{
                mod:{
                    suit:function (card,suit){
            if(suit=='spade') return 'heart';			
        },
                },
				filter:function(event,player){
					return player.countCards('he',{suit:'diamond'})>0;
				},
				enable:'chooseToUse',
				filterCard:function(card){
					return get.color(card)=='red';
				},
				position:'h',
				viewAs:{name:'sha'},
				prompt:'将一张红色手牌当【杀】使用',
				check:function(card){return 6-get.value(card)},
				ai:{
					threaten:1.5
				}
							
            },
            ws忠臣:{
                trigger:{
                    global:"damageBegin",
                },
                priority:9,
                filter:function (event,player){
return player.identity=='zhong'&&event.player.identity=='zhu';
},
                content:function (){
trigger.num-=1;
player.loseHp();                    
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-1;
             },
                    },
                },
            },
            ws龟背:{
                mod:{
                    targetEnabled:function (card,player,target){
            if(card.name=='wanjian'){
                return false;
            }                        
        },
                },
            },
            ws兽性:{
                trigger:{
                    global:"damageBegin",
                },
                forced:true,
                filter:function (event,player){
        return event.source!=player&&event.player!=player;
    },
                content:function (){
        trigger.source=player;
    },
            },
            ws虎跃:{
                trigger:{
                    source:"damageEnd",
                },
                forced:true,
                content:function (){
player.draw();
},
            },
            ws火烛:{
                group:["ws火烛_1111","ws火烛_2222"],
                subSkill:{
                    1111:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        direct:true,
                        filter:function (event,player){
            return game.players.length>2;
        },
                        content:function (){
            "step 0"
            player.chooseTarget(function(card,player,target){
                return target!=player;
            }).ai=function(){
                return -ai.get.attitude(player,target);
            }
            "step 1"
            if(result.bool){
                player.loseHp
                player.logSkill('ws火烛_1111',result.targets);
                result.targets[0].goMad();
            }
        },
                    },
                    2222:{
                        trigger:{
                            player:"phaseBegin",
                        },
                        forced:true,
                        popup:false,
                        content:function (){
            var players=game.players.concat(game.dead);
            for(var i=0;i<players.length;i++){
                if(players[i].isMad()){
                    players[i].unMad();
                }
            }
        },
                    },
                },
            },
            ws苍龙:{
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
            return game.players.length<=3;
        },
                content:function (){
            player.changeHujia();
        },
            },
            ws四象:{
                trigger:{
                    player:["phaseBefore","changeHp"],
                },
                forced:true,
                popup:false,
                unique:true,
                derivation:["ws咆哮","ws离间","ws八卦","ws再起"],
                content:function (){
        player.removeAdditionalSkill('ws四象');
        var list=[];
        if(player.hp==4){
            list.push('ws咆哮');
        }
        if(player.hp==3){
            list.push('ws离间');
        }
        if(player.hp==2){
            list.push('ws八卦');
        }
        if(player.hp==1){
            list.push('ws再起');
        }
        if(list.length){
            player.addAdditionalSkill('ws四象',list);
        }
    },
                ai:{
                    maixie:true,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(!target.hasFriend()) return;
                    if(target.hp>=4) return [0,1];
                }
                if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
            },
                    },
                },
            },
            ws咆哮:{
                mod:{
                    cardUsable:function (card,player,num){
            if(card.name=='sha') return Infinity;
        },
                },
            },
            ws离间:{
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return game.countPlayer(function(current){
            return current!=player&&current.sex=='male';
        })>1;
    },
                check:function (card){return 10-ai.get.value(card)},
                filterCard:true,
                position:"he",
                filterTarget:function (card,player,target){
        if(player==target) return false;
        if(target.sex!='male') return false;
        if(ui.selected.targets.length==1){
            return target.canUse({name:'juedou'},ui.selected.targets[0]);
        }
        return true;
    },
                targetprompt:["先出杀","后出杀"],
                selectTarget:2,
                multitarget:true,
                content:function (){
        targets[1].useCard({name:'juedou'},targets[0],'noai').animate=false;
        game.delay(0.5);
    },
                ai:{
                    order:8,
                    result:{
                        target:function (player,target){
                if(ui.selected.targets.length==0){
                    return -3;
                }
                else{
                    return ai.get.effect(target,{name:'juedou'},ui.selected.targets[0],target);
                }
            },
                    },
                    expose:0.4,
                    threaten:3,
                },
            },
            ws八卦:{
                inherit:"bagua_skill",
                filter:function (event,player){
        if(!event.filterCard({name:'shan'})) return false;
        if(event.getParent().player.num('s','unequip')) return false;
        if(player.get('e','2')) return false;
        return true;
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(player==target&&get.subtype(card)=='equip2'){
                    if(ai.get.equipValue(card)<=8) return 0;
                }
                if(target.get('e','2')) return;
                if(player.hasSkill('unequip')) return;
                if(get.tag(card,'respondShan')) return [0.5,0];
            },
                    },
                },
                trigger:{
                    player:"chooseToRespondBegin",
                },
                check:function (event,player){
        if(ai.get.damageEffect(player,event.player,player)>=0) return false;
        return true;
    },
                content:function (){
        "step 0"
        player.judge('bagua',function(card){return (get.color(card)=='red')?1.5:-0.5});
        "step 1"
        if(result.judge>0){
            trigger.untrigger();
            trigger.responded=true;
            trigger.result={bool:true,card:{name:'shan'}}
        }
    },
                audio:"ext:万世神兽:true",
            },
            ws再起:{
                trigger:{
                    player:"phaseDrawBefore",
                },
                filter:function (event,player){
        return player.hp<player.maxHp;
    },
                check:function (event,player){
        if(player.maxHp-player.hp<2){
            return false;
        }
        else if(player.maxHp-player.hp==2){
            return player.num('h')>=2;
        }
        return true;
    },
                content:function (){
        "step 0"
        trigger.untrigger();
        trigger.finish();
        event.cards=get.cards(player.maxHp-player.hp);
        player.showCards(event.cards);
        "step 1"
        var num=0;
        for(var i=0;i<event.cards.length;i++){
            if(get.suit(event.cards[i])=='heart'){
                num++;
                ui.discardPile.appendChild(event.cards[i]);
                event.cards.splice(i--,1);
            }
        }
        if(num){
            player.recover(num);
        }
        "step 2"
        if(event.cards.length){
            player.gain(event.cards);
            player.$gain2(event.cards);
            game.delay();
        }
    },
                ai:{
                    threaten:function (player,target){
            if(target.hp==1) return 2;
            if(target.hp==2) return 1.5;
            return 1;
        },
                },
            },
            ws混沌:{
                trigger:{
                    player:"dying",
                },
                unique:true,
                content:function (){
        "step 0"
        event.players=get.players(player);
        event.players.remove(player);
        "step 1"
        if(event.players.length){
            event.players.shift().damage();
            event.redo();
        }
    },
            },
            ws肆暴:{
                trigger:{
                    player:"damageAfter",
                },
                filter:function (event){
                    return event.nature;
                },
                forced:true,
                content:function (){
                    if(trigger.nature=='fire'){
                        player.recover(2);		
				    }
                    if(trigger.nature=='thunder'){
		    		    player.loseHp();
			    	}
                },
            },
            ws绝戮:{
                mod:{
                    selectTarget:function (card,player,range){
            if(card.name!='sha') return;
            if(range[1]==-1) return;
            var cards=player.get('h');
            range[1]+=2;
        },
                },				
			},
            ws暴食:{
                group:["ws暴食_1111","ws暴食_2222"],
                subSkill:{
                    1111:{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function (event,player){
                        return player.hp>2;
                        },
                        forced:true,
                        content:function (){
                        trigger.num++;
                        },
                    },
                    2222:{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        filter:function (event,player){
                        return player.hp>2;
                        },
                        content:function (){
                        trigger.num++;
                        },
                    },
                },
            },
            ws横断:{
                trigger:{
                    player:"damageBegin",
                },
                filter:function (event,player){
return player.num('h')>1;
},
                content:function (){ 
player.discardPlayerCard(2,player,true);      
trigger.num--;
},
            },
            ws明德:{
                global:"ws明德_1",
                subSkill:{
                    1:{
                        trigger:{
                            player:"phaseBegin",
                        },
                        filter:function (event,player){
if(player.group!='gu') return false;
return true;
},
                        forced:true,
                        content:function (){
player.draw();
            },
                    },
                },
            },
            ws洪荒:{
                mod:{
                    targetEnabled:function (card,player,target){
            if(card.name=='tao'){
                return false;
            }                        
            if(card.name=='sha'){
                return false;
            }
            if(card.name=='taoyuan'){
                return false;
            }
        },
                },
            },
            ws腾空:{
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
return player.num('h')>0;
},
                content:function (){ 
player.discardPlayerCard(1,player,true);       
player.addSkill('ws腾飞');
player.addSkill('ws俯冲');    
player.addSkill('ws落地');            
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-0;
             },
                    },
                },
            },
            ws腾飞:{
                mod:{
                    globalFrom:function (from,to,current){
return current-3;
},
                    globalTo:function (from,to,current){
return current+3;
},
                },
            },
            ws俯冲:{
                trigger:{
                    player:"phaseBegin",
                },
                priority:1,
                content:function (){
        "step 0"
        game.delay(0.5);
        player.chooseTarget('请选择落地点',function(card,player,target){
            return player!=target;
        }).ai=function(target){
            if(target.isTurnedOver()) return -1;
            return 1;
        }
        "step 1"
        if(result.bool){
            result.targets[0].damage();
            player.damage();
        }
},
                ai:{
                    order:1,
                    result:{
                        player:function (player){
            return  player.hp-2;
             },
                    },
                },
            },
            ws落地:{
                trigger:{
                    player:"phaseBegin",
                },
                priority:0,
                forced:true,
                content:function (){
player.removeSkill('ws俯冲');
player.removeSkill('ws落地');
player.removeSkill('ws腾飞');        
},
            },
            ws羽落:{
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                filter:function (event,source){
return event.source;    
},
                content:function (){
player.discardPlayerCard(1,trigger.source,true);
    },
            },
            ws祈雨:{
                global:"ws祈雨_1",
                subSkill:{
                    1:{
                        trigger:{
                            player:"phaseBegin",
                        },
                        forced:true,
                        content:function (){
"step 0"
        player.judge(function(card){return (get.color(card)=='red')?1.5:-0.5});
        "step 1"
        if(result.judge>0){
        player.recover();    
        }
            else{
          player.loseHp();  
        }
},
                    },
                },
            },
            ws蓄精:{
                trigger:{
                    player:"phaseDiscardBegin",
                },
                forced:true,
                filter:function (event,player){
        return event.parent.name=='phaseDiscard'&&player.num('h',{type:'basic'})<player.num('h');
    },
                content:function (){},
                mod:{
                    maxHandcard:function (player,num){
            var hs=player.get('h');
            for(var i=0;i<hs.length;i++){
                if(get.type(hs[i])!='basic'){
                    num++;
                }
            }
            return num;
        },
                    cardDiscardable:function (card,player,name){
            if(name=='phaseDiscard'&&get.type(card)!='basic') return false;
        },
                },
            },
        },
                    translate:{
            qws青龙:"青龙",
            zws朱雀:"朱雀",
            xws玄武:"玄武",
            bws白虎:"白虎",
            zws烛龙:"烛龙",
            qws麒麟:"麒麟",
            hws浑沌:"浑沌",
            tws饕餮:"饕餮",
            tws梼杌:"梼杌",
            qws穷奇:"穷奇",
            tws腾蛇:"腾蛇",
            yws雨师妾:"雨师妾",
            ws滔天:"滔天",
            ws滔天_info:"你可以将一张红色的手牌当[洪水]使用",
            ws焚天:"焚天",
            ws焚天_info:"当你造成伤害时，你可以令伤害转变为火属性伤害",
            ws赤炎:"赤炎",
            ws赤炎_info:"锁定技，你的黑桃牌均视为红桃；出牌阶段，你的红色手牌可当【杀】",
            ws忠臣:"忠臣",
            ws忠臣_info:"忠臣技，当主公受到伤害时，你可以流失一点体力并令伤害-1",
            ws龟背:"龟背",
            ws龟背_info:"锁定技，你不能成为[万箭齐发]的目标",
            ws兽性:"兽性",
            ws兽性_info:" 锁定技，任何伤害都视为由你造成",
            ws虎跃:"虎跃",
            ws虎跃_info:"锁定技，当你造成伤害时可以摸一张牌",
            ws火烛:"火烛",
            ws火烛_info:"<li>出牌阶段，若游戏人数大于二，你可以流失一点体力并指定一名角色令其混乱<li>锁定技，回合开始阶段，你解除所有混乱状态中的角色的混乱状态",
            ws苍龙:"苍龙",
            ws苍龙_info:"锁定技，你受到伤害后，若游戏人数不大于三，你获得一点护甲",
            ws四象:"四象",
            ws四象_info:"锁定技，若你的体力值:<li>等于四时，你拥有技能[咆哮];<li>等于三时，拥有技能[离间];<li>等于二时，拥有技能[八卦];<li>等于一时，拥有技能[再起]",
            ws咆哮:"咆哮",
            ws咆哮_info:"出牌阶段，你使用[杀]无数量限制",
            ws离间:"离间",
            ws离间_info:"出牌阶段，你可以弃一张牌，视为一名男性角色对另一名男性角色使用一张[决斗]，每阶段限一次",
            ws八卦:"八卦",
            ws八卦_info:"当你没装备防具时，始终视为你装备着【八卦阵】。",
            ws再起:"再起",
            ws再起_info:"摸牌阶段，若你已受伤，你可以改为展示牌堆顶的X张牌，X为你已损失的体力值，其中每有一张♥牌，你回复1点体力，然后弃掉这些♥牌，将其余的牌收入手牌。",
            ws混沌:"混沌",
            ws混沌_info:"当你处于濒死阶段时，你可以对除你以外的所有角色造成一点伤害",
            ws肆暴:"肆暴",
            ws肆暴_info:"锁定技，当你受到火属性伤害后，你恢复两点体力；当你受到雷属性伤害后，你流失一点体力",
            ws绝戮:"绝戮",
            ws绝戮_info:"锁定技，你使用的【杀】可以额外选择至多两个目标",
            ws暴食:"暴食",
            ws暴食_info:"锁定技，当你的体力大于二时，你造成的伤害+1，你受到的伤害+1",
            ws横断:"横断",
            ws横断_info:"当你受到伤害时，你可以弃置两张牌令伤害-1",
            ws明德:"明德",
            ws明德_info:"锁定技，当你曾经在场时，所有万世神兽都会在回合开始阶段摸一张牌",
            ws洪荒:"洪荒",
            ws洪荒_info:"锁定技，你不能成为【杀】，【桃】和【桃园结义】的目标",
            ws腾空:"腾空",
            ws腾空_info:"每回合限一次，出牌阶段，你可以弃一张牌令自己腾空（防御距离+3，进攻距离+3），持续一个回合，落地前可以对一名角色与自己各造成一点伤害",
            ws腾飞:"腾飞",
            ws腾飞_info:"腾蛇高高飞起！",
            ws俯冲:"俯冲",
            ws俯冲_info:"",
            ws落地:"落地",
            ws落地_info:"",
            ws羽落:"羽落",
            ws羽落_info:"锁定技，对你造成伤害的玩家须弃置一张牌",
            ws祈雨:"祈雨",
            ws祈雨_info:"锁定技，所有人于其回合开始阶段进行一次判定，若判定结果为红色这该角色恢复一点体力，否则流失一点体力",
            ws蓄精:"蓄精",
            ws蓄精_info:"锁定技，弃牌阶段内，你的非基本牌不计入手牌数，且你不能弃置你的非基本牌",
            ws化风:"化风",
            ws化风_info:"<li>锁定技，每当有其他角色回合开始时，若你已死亡，你复活<li>锁定技，你的手牌上限为3<li>锁定技，你濒死前，若游戏人数为2，你增加一点体力并恢复体力至体力上限",
			ws化风_1:"化风",
			ws化风_2:"化风",
			fws风生兽:"风生兽",
        },
                };				
                if(lib.device||lib.node){
                    for(var i in wanshi.character){wanshi.character[i][4].push('ext:扩展ol/'+i+'.jpg');}
                }else{
                    for(var i in wanshi.character){wanshi.character[i][4].push('db:extension-扩展ol:'+i+'.jpg');}
                }
                return wanshi;
            });
            lib.group.push('gu');
            lib.translate.gu='古';			
            lib.config.all.characters.push('wanshi');
            if(!lib.config.characters.contains('wanshi')){
                lib.config.characters.push('wanshi');
            }
            lib.translate['wanshi_character_config'] = '万世神兽';
}