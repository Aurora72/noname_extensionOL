window.func=function(lib,game,ui,get,ai,_status){
	lib.element.player.mengzhanc_showCards=function(){
		var next=game.createEvent('mengzhanc_showCards');
		next.player=this;
		for(var i=0;i<arguments.length;i++){
			if(get.itemtype(arguments[i])=='cards'){
				next.cards=arguments[i];
			};
		};
		var event=_status.event;
		next.source=event.player;
		next.setContent(lib.element.event.mengzhanc_showCards);
		return next;
	};
	lib.element.event.mengzhanc_showCards=function(){
		event.trigger('mengzhanc_showCards');
		if(player.storage.mengzhanc_showCards==undefined) player.storage.mengzhanc_showCards=[];
		player.show(cards);
		for(var i=0;i<cards.length;i++){
			var card=cards[i];
			if(!player.storage.mengzhanc_showCards.contains(card)) player.storage.mengzhanc_showCards.push(card);
		};
		player.markSkill('mengzhanc_showCards');
		player.syncStorage('mengzhanc_showCards');
		game.log(player,'明置了',cards);
	};
	lib.element.player.mengzhanc_coverCards=function(){
		var next=game.createEvent('mengzhanc_coverCards');
		next.player=this;
		for(var i=0;i<arguments.length;i++){
			if(get.itemtype(arguments[i])=='cards'){
				next.cards=arguments[i];
			};
		};
		var event=_status.event;
		next.source=event.player;
		next.setContent(lib.element.event.mengzhanc_coverCards);
		return next;
	};
	lib.element.event.mengzhanc_coverCards=function(){
		event.trigger('mengzhanc_coverCards');
		if(player.storage.mengzhanc_showCards==undefined) player.storage.mengzhanc_showCards=[];
		for(var i=0;i<cards.length;i++){
			var card=cards[i];
			if(player.storage.mengzhanc_showCards.contains(card)) player.storage.mengzhanc_showCards.remove(card);
		};
		player.markSkill('mengzhanc_showCards');
		player.syncStorage('mengzhanc_showCards');
		if(player.storage.mengzhanc_showCards.length==0) player.unmarkSkill('mengzhanc_showCards');
		game.log(player,'暗置了',cards);
	};
	lib.element.player.mengzhanc_hasShownCards=function(){
		return this.storage.mengzhanc_showCards!=undefined&&this.storage.mengzhanc_showCards.length>0;
	};
	game.import('character',function(){
		var mengzhanc={
			name:'mengzhanc',
			connect:true,
			characterSort:{
				'mengzhanc':{
					'mengzhanc_jlbkm':['mengzhanc_小智','mengzhanc_小霞','mengzhanc_古柳','mengzhanc_坂木'],
					'mengzhanc_dfp':['mengzhanc_琪露诺','mengzhanc_橙','mengzhanc_红美铃','mengzhanc_蕾米莉亚','mengzhanc_犬走椛','mengzhanc_米斯蒂娅','mengzhanc_八云紫'],
					'mengzhanc_jmqskw':['mengzhanc_凰莲严之介'],
					'mengzhanc_zgls':['mengzhanc_上杉谦信'],
					'mengzhanc_djsy':['mengzhanc_朝田诗乃'],
					'mengzhanc_lyh':['mengzhanc_逢坂大河'],
					'mengzhanc_glth':['mengzhanc_小红帽'],
					'mengzhanc_fddyly':['mengzhanc_亚里亚'],
					'mengzhanc_lscs':['mengzhanc_伊瑟拉'],
					'mengzhanc_zysjsm':['mengzhanc_优克莉伍德X海尔赛兹'],
					'mengzhanc_alsmyxj':['mengzhanc_红心女皇'],
					'mengzhanc_yxrs':['mengzhanc_空白'],
				},
			},
			character:{
				"mengzhanc_小智":["male","meng",3,['mengzhanc_收服'],[]],
				"mengzhanc_小霞":["female","meng",3,['mengzhanc_抵水','mengzhanc_涓涓'],[]],
				"mengzhanc_古柳":["male","meng",3,['mengzhanc_严冬','mengzhanc_凌寒'],[]],
				"mengzhanc_坂木":["male","meng",4,['mengzhanc_撼地','mengzhanc_复燃'],[]],
				"mengzhanc_琪露诺":["female","meng",3,['mengzhanc_冰结','mengzhanc_负寒'],[]],
				"mengzhanc_橙":["female","meng",3,['mengzhanc_式符','mengzhanc_化猫'],[]],
				"mengzhanc_红美铃":["female","meng",4,['mengzhanc_彩极','mengzhanc_虎劲'],[]],
				"mengzhanc_蕾米莉亚":["female","meng",4,['mengzhanc_神枪','mengzhanc_运命'],[]],
				"mengzhanc_犬走椛":["female","meng",4,['mengzhanc_千里之视'],[]],
				"mengzhanc_米斯蒂娅":["female","meng",3,['mengzhanc_夜盲之曲','mengzhanc_放歌高吟'],[]],
				"mengzhanc_凰莲严之介":["male","meng",4,['mengzhanc_DuriNoko'],[]],
				"mengzhanc_上杉谦信":["male","meng",4,['mengzhanc_车悬之剑'],[]],
				"mengzhanc_朝田诗乃":["female","meng",3,['mengzhanc_冰之心境','mengzhanc_幽灵子弹'],[]],
				"mengzhanc_逢坂大河":["female","meng",3,['mengzhanc_夜袭','mengzhanc_娇蛮'],[]],
				"mengzhanc_小红帽":["female","meng",3,['mengzhanc_予糕','mengzhanc_坦心'],[]],
				"mengzhanc_亚里亚":["female","meng",4,['mengzhanc_绯天双战'],[]],
				"mengzhanc_伊瑟拉":["female","meng",4,['mengzhanc_幻魇'],[]],
				"mengzhanc_优克莉伍德X海尔赛兹":["female","meng",3,['mengzhanc_不死之血','mengzhanc_魔力扰动'],[]],
				"mengzhanc_红心女皇":["female","meng",3,['mengzhanc_宣刑','mengzhanc_暴鸩'],[]],
				"mengzhanc_八云紫":["female","meng",3,['mengzhanc_神隐','mengzhanc_境界'],[]],
				"mengzhanc_空白":["","meng",3,['mengzhanc_推演','mengzhanc_掌控'],[]],
			},
			characterTitle:{
				"mengzhanc_小智":"<span style='color:#3fffed'>辰木</span>",
				"mengzhanc_小霞":"<span style='color:#3fffed'>木因</span>",
				"mengzhanc_古柳":"<span style='color:#3fffed'>木因</span>",
				"mengzhanc_坂木":"<span style='color:#3fffed'>木因&zengyouyu</span>",
				"mengzhanc_琪露诺":"<span style='color:#3fffed'>辰木</span>",
				"mengzhanc_橙":"<span style='color:#3fffed'>夜之礼赞<br>KINGDOM43<br>zengyouyu<br>南家二傻</span>",
				"mengzhanc_红美铃":"<span style='color:#3fffed'>夜之礼赞</span>",
				"mengzhanc_蕾米莉亚":"<span style='color:#3fffed'>夜之礼赞</span>",
				"mengzhanc_犬走椛":"<span style='color:#3fffed'>KINGDOM43</span>",
				"mengzhanc_米斯蒂娅":"<span style='color:#3fffed'>KINGDOM43</span>",
				"mengzhanc_凰莲严之介":"<span style='color:#3fffed'>神域</span>",
				"mengzhanc_上杉谦信":"<span style='color:#3fffed'>亚里亚</span>",
				"mengzhanc_朝田诗乃":"<span style='color:#3fffed'>小妖辰末&夜之礼赞</span>",
				"mengzhanc_逢坂大河":"<span style='color:#3fffed'>Mukoi Aoi</span>",
				"mengzhanc_小红帽":"<span style='color:#3fffed'>木因</span>",
				"mengzhanc_亚里亚":"<span style='color:#3fffed'>亚里亚</span>",
				"mengzhanc_伊瑟拉":"<span style='color:#3fffed'>七哀</span>",
				"mengzhanc_优克莉伍德X海尔赛兹":"<span style='color:#3fffed'>神域</span>",
				"mengzhanc_红心女皇":"<span style='color:#3fffed'>木因</span>",
				"mengzhanc_八云紫":"<span style='color:#3fffed'>夜之礼赞</span>",
				"mengzhanc_空白":"<span style='color:#3fffed'>辰木&忘忧</span>",
			},
			characterIntro:{
				"mengzhanc_小智":"冥忧大大早期作品~<br>作为精灵宝可梦系列的主人公，小智一路收服精灵，在实战中比二张捡垃圾跑得还快。鉴于体系内有不少拆迁和弃置烧牌的角色，小智有着不错的发挥，而X的限制也使得小智的强度有一定的上限。",
				"mengzhanc_小霞":"小霞的设计者木因作为萌c群里的早期元老，对群里的设计投稿做出了很大的贡献。<br>他本人非常佛系，而他设计的将不求华丽，但求简单实用，很适合做早期设计的基底。<br>小霞作为主要以水系宝可梦为战力的训练师，技能也和“水”有关。和甄姬有相似之处，比起甄姬来缺少爆发但更加稳定。没有惊涛骇浪，但涓涓细流足以保护她三血的脆弱身躯，在多人混战的局面中会有不错的发挥~<span style='color:red'><br>改动：使用→使用或打出（涓涓）<br></span>",
				"mengzhanc_古柳":"木因二连发，宝可梦三连发~（木因对宝可梦是真爱……）<br>古柳擅长使用冰属性宝可梦，年轻时的坎坷经历使得这位老者的内心一度如冰雪般寒冷。柳伯本身三血，提升了一技能的发动频率。为了总体平衡，二技能只能防梅花杀；但在杀的花色分布中，梅花占了相当的比重，所以凌寒还是能够提供一定的防御力。",
				"mengzhanc_坂木":"宝可梦四连发，也是萌c中的最后一位宝可梦角色。<br>没玩过精灵宝可梦的人或许不知道坂木，但一定知道火箭队，而坂木就是火箭队的老大。也是精灵宝可梦里面个人认为塑造得最经典的反派形象。<br>坂木擅长使用地面系的宝可梦对战。撼地其实就是变相的万箭，与大嘴相比削弱了爆发而放宽了限制条件；二技能作为补牌技虽然不强，但在坂木被压到2血甚至1血的时候发挥空间很大。",
				"mengzhanc_琪露诺":"冥忧大大作品第二弹<br>琪露诺是东方project里面人气超高的一只妖精。琪露诺=⑨=baka（笨蛋）这个梗早就流传到了东方圈子外，变得广为人知。<br>作为一只baka，⑨采用了双锁定技的形式，但一技能却需要稍微留意一下（尤其是AOE排在第几张开出去）。不过说到底，再怎么动脑，思考量也不会超过⑨的脑容量上限啦~<br>因为是操纵冰的妖精，所以一技能采取了封锁手牌的形式，二技能采取了卖血拆牌的收益方式。冻气可以封锁敌人的行动，而攻击⑨也会被寒气所影响。单挑较为强力，但在身份局的发挥……不管了，⑨最强！",
				"mengzhanc_橙":"唯一一位多人设计的角色。萌c的东方角色有一半都是集中在前期，或许这和早期的设计者们的个人爱好有关吧……<br>橙是八云蓝的式神，而八云蓝又是八云紫的式神。作为“式神的式神”，橙拥有八云一家子里面最朴实的辅助能力——回收弃牌。在萌c拆迁横行，且有不少人以弃牌作为cost的情况下，式符的辅助范围相当广泛。式符的缺点在于无法使被弃掉的装备第一时间返回装备区，以及保核能力有限：只能防止拆迁，不能直接挡刀子。<br>式符对手牌的消耗很大，而化猫很好地弥补了防御上的空虚。手牌较少时，橙几乎完全免疫【杀】，而且橙自身也不缺距离，契合妖怪猫敏捷的身手。",
				"mengzhanc_红美铃":"礼赞是群里对东方project和fate系列专精的一位，在对口人物的契合上常有巧思……由于是大姐姐的设定曾常年饱受冷王骚扰<br>红美铃是东方project里红魔馆的门番，精通“气”的操作。整组技能以“红/黑/无色”（明置/弃置/使用）对应美铃的“三华「崩山彩极炮」”。门番的设定使得美铃自然而然地成了保核和防反定位——不过像曹昂一样，美铃也有些依赖攻击范围/距离；由于并没有实质性的防御技能，美铃在保核的时候也需要结合自身血量和手牌数量力而行，no zuo no die。",
				"mengzhanc_蕾米莉亚":"依旧是礼赞的作品，这次是东方project里的蕾米莉亚大小姐。一设明明是兼具威严和孩子气的形象，结果因为可爱的外表和抱头蹲防的梗，到了二设常常威严全无……<br>蕾米莉亚是已有500岁以上寿命的吸血鬼，绯红的洋馆红魔馆的领主，标志性符卡是被称作“必中之枪”的冈格尼尔（二设经常随着威严崩坏变成必不中之枪233）。一技能兼具转化杀、强命和魏延三大特性，红杀的优良性能为蕾米莉亚提供了稳定的输出和回复能力。<br>蕾米莉亚不仅拥有吸血鬼强悍的身体能力和再生能力，她本人的能力还是听起来高大上的“操纵命运”，但实际上她并不能完全操控命运，只能微妙地影响命运的轨迹——因此，她只能进行不稳定的改判，但她可以从中获取收益，一定程度上弥补了神枪的消耗。",
				"mengzhanc_犬走椛":"好吧，这位是我(KINGDOM43)设计的，走了早期简洁风。<br>犬走椛是白狼天狗，视觉极其优秀，拥有“看见千里之外程度的能力”。<br>设定上并不是那种会和入侵者死磕到底的类型，而是更多地担当着哨兵+通信人的角色；因此把技能整体做成了偏向防御的类型——独具一双慧眼的椛椛可以有效地破坏敌方蓄爆，将心怀不轨之徒的歹意扼杀在摇篮中。<br>使用椛椛需要结合场上摸牌弃牌的情况，对各个角色的动向进行分析……我(KINGDOM43)编不下去了orz。<br>最后提一句，通牌小心被打哦~<span style='color:red'><br>改动：魔法牌→锦囊牌（千里之视）<br></span>",
				"mengzhanc_米斯蒂娅":"又是我(KINGDOM43)设计的拙作一枚~<br>在黑暗的夜道和无人的森林，有很多利用歌声迷惑人类的妖怪。米斯蒂娅·萝蕾拉就是其中之一。她的歌声会令人类的判断神经变得迟钝，被黑暗迷惑的人将就此消失于黑暗中。这也是黑夜会容易迷路的原因之一。同时，为了使得在被歌声引诱时看不清周围，她拥有让人类变得夜盲的能力。<br>夜雀整体的定位是控制型角色，二技能通过使用牌制造“混乱”（明牌），且在特殊情况下可以强制令一人使用明牌（比如给自己双刀buff，给被乐的队友提前用牌的机会）；一技能还原了游戏中的“熄灯”（暗置红牌）和“夜盲”（自守debuff+被强命）。<br>由于是暗置“所有”红色手牌，所以夜雀只能控一个人一回合；不会出现一个人直接被集火死的情况。用法较为灵活，可以帮助队友强命，也可当做惴恐使用。<br>特殊情况下，夜雀可以通过暗置队友的手牌来刷新ta以“明置手牌”为消耗的技能。收益与风险并存，请小心使用。<span style='color:red'><br>改动：<br>不能响应除其之外的角色使用的牌→不能响应任何牌（夜盲之曲）<br>结束阶段，你可令一名角色依次使用其所有明置手牌→结束阶段，你可令一名角色使用本回合你明置手牌目标的所有明置手牌，目标角色最多以此法使用两张牌且第二张牌只能为延时性锦囊牌（放歌高吟）<br></span>",
				"mengzhanc_凰莲严之介":"神域也是萌c早期的一位成员，不过我(KINGDOM43)进来的时候已经看不到他活跃的身影了……<br>这次的设计出自特摄剧《假面骑士铠武》。凰莲严之介是“假面骑士bravo”的原名，雇佣兵出身的他本是众多装甲骑士中的一个佼佼者，随着剧情的推进，从当初令人讨厌的大叔变为正义的伙伴为保护他人献出自己的一份力。<br>长于近战，且破坏力较大，因此技能从拆迁出发。和孙坚类似的卖血拆迁定位，同样可以辅助队友（拆判定），但比起孙坚更吃位置和-1马。可以根据情况判断要不要主动卖出第一滴血。",
				"mengzhanc_上杉谦信":"亚里亚是萌c早期成员之一，画师dalao。顺便请不要在意角色的出处，嗯。<br>整体是简洁朴素的卖血爆发路线（对又是卖血），后期修改的时候给满血状态也加了一点个人能力（强行凑了两个X+1）。已损失体力值这个设定在这里巧妙地避免了AOE过爆的问题，是需要一定的蓄爆（或者天胡）然后打出爆发的角色。",
				"mengzhanc_朝田诗乃":"刀剑神域GGO篇的诗乃。<br>作为一名狙击手，诗乃拥有强大的心理素质（可以从更远的距离外狙击）和熟练隐蔽自己的能力；但“死枪”手中的手枪始终她心里的阴影，在狙击被死枪闪过后她一度失去了冷静。<br>二技能从契合上是我(KINGDOM43)很喜欢的一个技能。如果在敌人回合，回合开始时用杀契合攻其不备，你获得了进攻机会。如果你用杀没造成伤害：（1）对手对你的队友使用杀，可以看成你的队友也因此暴露，对应小说开头和机枪男的战斗；（2）对手如果对你使用杀，可以看成被反狙击，对应和死枪对狙的战斗。<br>如果是你在你队友回合使用杀，就吹响了冲锋的号角，可以给你的队友二刀的机会。对应最后桐人和死枪拼刺刀，诗乃用瞄准线对准死枪，死枪分神从而被桐人二刀流砍翻。<br>我(KINGDOM43)个人是比较看重技能与人物的契合的，在一个不复杂的技能中能同时契合数个事迹，这是我(KINGDOM43)认为这个技能最出彩的地方。<br>受到3血身板+摸牌白的限制，诗乃打出辅助的机会并不多，如果杀不中还会失去攻击范围的加成，请珍惜你手中的每一发子弹吧。<span style='color:red'><br>改动：<br>若你使用的【杀】未造成伤害→你使用的【杀】被抵消时（冰之心境）<br>你可将一张黑色牌当【杀】使用→你可将弃置一张黑色牌并视为对其使用一张黑色花色的【杀】（幽灵子弹）<br></span>",
				"mengzhanc_逢坂大河":"各单位注意，钉宫病患者注意，前方萌虎出没~<br>《龙与虎》故事的起因便是萌虎把给班长的情书错塞给了龙儿，于是便在夜里袭击想要夺回情书——此时龙儿面临着两种选择：1.坐以待毙（受到伤害）；2.求生（开嘴炮）。当然作为本番男主，龙儿机智地选了2，通过做饭、自爆（交换秘密，让大河观看手牌）、搞笑素质三连，成功与萌虎结成“同盟”关系——就这样，这场是堪称经典的校园恋爱喜剧便轰轰烈烈地展开了。<br>萌虎虽然很“萌”，但确实也很“虎”——二技能从她“身形娇小”出发，大点牌用于进攻，小点牌用于防御，虽然只有三血身板，但联动一技能的拿牌，防御还是比较稳固的~",
				"mengzhanc_小红帽":"这次设计的角色应该是人尽皆知了，狼外婆故事里的小红帽。<br>木因的设计风格一贯是简单实用。“予糕”使得小红帽能从挎着的小篮子里给队友带来非常稳定的辅助，同时也保证了小红帽自身的生存；而二技能意味着小红帽只要有手牌就能出【闪】——但相对的，小红帽手中存留的【桃】和【无懈可击】会被敌方直接拆掉，所以……如果有队友被乐/1血吊着的条件下，可以考虑不发动。<br>总体来说，小红帽是生存能力非常强的角色，辅助也比较稳定。参照新王异在OL强度爆炸的环境下依旧有不俗的胜率，相信小红帽在实战中也会有不错的表现。",
				"mengzhanc_亚里亚":"各单位注意，钉宫病患者注意，亚里亚（也是亚里亚）作品第二弹~<br>本作中的亚里亚被设定为著名侦探夏洛克·福尔摩斯的后裔，福尔摩斯四世。没有遗传到祖先优秀推理能力的她，被家族视为废人，但性格不服输又自尊极强的亚里亚凭借自身天生的战斗感及努力，在英国武侦界闯出了名气。通称“双剑双枪 ”。善使两把手枪及双小太刀。<br>整体设计简明易懂，基本牌路就是红牌杀+（黑牌）杀。虽然双刀看似不起眼，但亚里亚的双刀十分稳定，对牌的利用率也非常高；而“与使用过的牌颜色均不同”也限制了关羽连弩一飞冲天之类的情况。",
				"mengzhanc_伊瑟拉":"好吧，其实是七哀授权然后我(KINGDOM43)改动了<br>这里的伊瑟拉并非取自魔兽世界，而是主要以炉石的伊瑟拉为蓝本。<br>伊瑟拉会在回合结束时随机获得一张“梦境”牌；考虑到强度和可控性的问题最终选择了随机扣自己的手牌。<br>黑桃对应“伊瑟拉的觉醒”，群攻效果，打全体其他角色的血；<br>梅花对应“噩梦”，这里将“加攻即死”改为类似“鸩毒”的效果；<br>方片对应“梦境”，原本的效果是随从回手，这里改为将场上的牌移回手牌，附带了解判定的功效；<br>红桃对应“欢笑的姐妹”，不受“指向法术”（锦囊牌）的影响，摸一张牌就权当是补偿吧。",
				"mengzhanc_优克莉伍德X海尔赛兹":"优克莉伍德出自的动漫作品年代比较早了，不过我(KINGDOM43)惊讶地发现依旧有一堆人喊她“老婆”……<br>优克莉伍德自身有着十分强大且危险的能力。她的手可以让伤口立即治愈，但是自身要承受伤者的痛苦，血液中蕴含着大量的能使人不老的魔力。这里体现为可以无视距离替队友抵挡任何伤害，且自身有一定量的补牌。但请注意她只有3血，而且并不比郭嘉更结实……一旦上场，她必然是敌方集火的主要目标和队友要全力保护的对象。<br>她的身体中储存着超级魔力，平常沉默寡言，是因为体内的魔力会使她的说的话会成为现实，对周围的人造成影响。这一点体现在二技能上。由于需要保护队友，优克莉伍德经常会残血多牌，此时便可利用二技能控制牌堆顶，可以控判定，也可以为下家队友传递关键的锦囊牌。<span style='color:red'><br>改动：即时魔法牌→非延时锦囊牌（魔力扰动）<br></span>",
				"mengzhanc_红心女皇":"红心女皇出自《爱丽丝梦游仙境》，她也被译作“红心王后”，性格跋扈残暴，成天叫嚷着要砍掉人们的脑袋，整个地下世界处于她的残暴统治之下。一技能非常简单粗暴——给队友（属下）【杀】，补牌+二刀，给敌人【杀】，敌人只能选择屈从于你（出杀）或违抗你并受到惩罚（掉血）。女皇嘛，不会亲自动手去砍人头的。<br>在作者卡罗尔自己的设想中，红心王后象征着某种无法控制的热情，一种盲目而没有目标的暴怒。当其他角色进入濒死状态时，红心皇后会有补牌，而如果不是她杀的（宣刑是让别人出杀），她还可以回血——这无疑提升了红皇后的续航能力，但抛去这点，红皇后平时就是无防御的三血脆皮。所以她的嘲讽较高，容易成为集火目标。",
				"mengzhanc_八云紫":"为了防止被脸滚键盘，在阅读接下来的内容前请大喊三声：永远年轻！<br>八云紫，初次登场于《东方永夜抄》，是建立了幻想乡的六位贤者之一。神出鬼没，万年黑幕役（笑）。<br>她自身拥有操纵境界程度的能力，是能够从根源开始颠覆一切事物的恐怖的能力。从本质上创造新的存在，从本质上否定已有的存在。妖怪所持有的能力中能够与神之力相匹敌的、最危险的能力之一。<br>当然……游戏里是不允许这么逆天的能力存在的。“神隐”在设计时选取了她使用能力最常见的方式——通过操纵空间，她可以出现在任何地方，神不知鬼不觉地移动物品。“神隐”拥有着极高的“灵活度”：发动时机、操作目标、发动次数、收益方式（拆牌/送牌）均十分灵活。或许我们无法还原过于BUG的能力，那就让它体现在“灵活度”上吧。<br>“境界”代表“分隔”，这里采取了操纵牌堆顶和底的方式——你可以考虑把牌堆底的牌拉到牌堆顶，以控顶或配合“神隐”将这张牌交给队友；也可以把牌堆顶的牌放到牌堆底以备控顶。<br>两个技能的联动需要记忆牌堆底的顺序，也需要对场上的局势有所判断，是萌c里面比较烧脑的几个角色。<span style='color:red'><br>改动：魔法牌→锦囊牌（神隐）<br></span>",
				"mengzhanc_空白":"<span style='color:red'>改动：额外摸X张牌→从牌堆顶获得X张牌（掌控）<br></span>",
			},
			skill:{
				"mengzhanc_showCards":{
					marktext:"明",
					intro:{
						content:'cards',
					},
				},
				"_mengzhanc_showCards":{
					trigger:{
						player:"loseAfter",
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						if(player.storage.mengzhanc_showCards==undefined) return false;
						if(event.cards==undefined) return false;
						for(var i=0;i<event.cards.length;i++){
							var card=event.cards[i];
							if(player.storage.mengzhanc_showCards.contains(card)) return true;
						};
						return false;
					},
					content:function (){
						'step 0'
						for(var i=0;i<trigger.cards.length;i++){
							var card=trigger.cards[i];
							if(player.storage.mengzhanc_showCards.contains(card)){
								player.storage.mengzhanc_showCards.remove(card);
								player.syncStorage('mengzhanc_showCards');
							};
						};
						'step 1'
						if(player.storage.mengzhanc_showCards.length==0) player.unmarkSkill('mengzhanc_showCards');
					},
				},
				"mengzhanc_收服":{
					trigger:{
						global:"discardEnd",
					},
					filter:function(event,player){
						return event.cards!=undefined&&event.cards.length>0&&event.player!=player;
					},
					check:function(event,player){
						return player.countCards('h')<player.maxHp+1;
					},
					content:function (){
						'step 0'
						player.chooseControl(['摸一张牌','获得其中一张牌']).set('ai',function(event){
							return ['摸一张牌','获得其中一张牌'].randomGet();
						});
						'step 1'
						if(result.control=='摸一张牌'){
							player.draw();
							event.goto(4);
						}else{
							if(event.isMine()==false){
								event.dialog=ui.create.dialog('请选择需要获得的牌',trigger.cards);
								game.delay(2);
							};
						};
						'step 2'
						if(event.dialog) event.dialog.close();
						var dialog=ui.create.dialog('请选择需要获得的牌',trigger.cards);
						player.chooseButton(1,dialog).set('ai',function(button){
							return get.value(button.link);
						}).filterButton=function(button){
							for(var i=0;i<ui.selected.buttons.length;i++){
								if(get.suit(button.link)==get.suit(ui.selected.buttons[i].link)) return false;
							};
							return true;
						};
						'step 3'
						if(result.buttons) player.gain(result.buttons[0].link,'gain2');
						'step 4'
						if(player.countCards('h')>player.maxHp) player.chooseToDiscard('h',player.countCards('h')-player.maxHp,true);
					},
				},
				"mengzhanc_抵水":{
					group:["mengzhanc_抵水_sha","mengzhanc_抵水_shan"],
					subSkill:{
						"sha":{
							enable:['chooseToRespond','chooseToUse'],
							filterCard:function(card,player){
								return get.color(card)=='black';
							},
							position:'he',
							viewAs:{name:'sha'},
							viewAsFilter:function(player){
								return player.countCards('he',{color:'black'})>0&&_status.currentPhase==player;
							},
							prompt:'将一张黑色牌当【杀】使用或打出',
							check:function(card){return 4-get.value(card)},
							ai:{
								skillTagFilter:function(player){
									if(!player.countCards('he',{color:'black'})) return false;
								},
								respondSha:true,
							},
						},
						"shan":{
							enable:['chooseToRespond'],
							filterCard:function(card){
								return get.color(card)=='black';
							},
							viewAs:{name:'shan'},
							viewAsFilter:function(player){
								if(player.countCards('he',{color:'black'})==0||_status.currentPhase==player) return false;
							},
							position:'he',
							prompt:'将一张黑色牌当【闪】打出',
							check:function(card){return 6-get.value(card)},
							ai:{
								respondShan:true,
								skillTagFilter:function(player){
									if(!player.countCards('he',{color:'black'})) return false;
								},
								effect:{
									target:function(card,player,target,current){
										if(get.tag(card,'respondShan')&&current<0) return 0.6
									},
								},
							},
						},
					},
				},
				"mengzhanc_涓涓":{
					trigger:{
						player:["useCardAfter","respondAfter"],
					},
					filter:function(event,player){
						return get.color(event.card)=='black'&&get.type(event.card)=='basic'&&player.storage.mengzhanc_涓涓!=true;
					},
					frequent:true,
					content:function (){
						player.draw();
						player.storage.mengzhanc_涓涓=true;
					},
				},
				"_mengzhanc_涓涓":{
					trigger:{
						player:"phaseEnd",
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return game.countPlayer(function(current){return current.storage.mengzhanc_涓涓==true})>0;
					},
					content:function (){
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.storage.mengzhanc_涓涓==true) delete pl.storage.mengzhanc_涓涓;
						};
					},
				},
				"mengzhanc_严冬":{
					trigger:{
						player:"phaseEnd",
					},
					direct:true,
					filter:function(event,player){
						return game.countPlayer(function(current){return current.countCards('h')>player.countCards('h')})>0;
					},
					content:function (){
						'step 0'
						player.chooseTarget(get.prompt('mengzhanc_严冬'),function(card,player,target){
							return target.countCards('h')>player.countCards('h');
						}).ai=function(target){
							return -get.attitude(player,target);
						};
						'step 1'
						if(result.bool){
							event.target=result.targets[0];
							player.logSkill('mengzhanc_严冬');
							player.line(event.target);
							player.discardPlayerCard(1,'he',event.target);
						}else{
							event.finish();
						};
						'step 2'
						if(result.cards!=undefined){
							if(get.color(result.cards[0])=='black') player.useCard({name:'sha'},event.target);
						};
					},
				},
				"mengzhanc_凌寒":{
					trigger:{
						global:"shaBegin",
					},
					direct:true,
					filter:function(event,player){
						return event.card!=undefined&&get.suit(event.card)=='club'&&event.targets!=undefined&&event.targets.contains(player);
					},
					content:function (){
						'step 0'
						player.chooseToDiscard(get.prompt('mengzhanc_严冬'),1,'he').set('ai',function(card){
							return 6-get.value(card);
						});
						'step 1'
						if(result.cards!=undefined){
							trigger.cancel();
							game.log(trigger.player,'的【杀】失效了');
						};
					},
				},
				"mengzhanc_撼地":{
					enable:'phaseUse',
					usable:1,
					discard:false,
					filter:function(event,player){
						return player.countCards('he',{color:'black'})>=2;
					},
					filterCard:true,
					selectCard:2,
					check:function(card){
						return 5-get.value(card);
					},
					filterTarget:function(card,player,target){
						return target!=player;
					},
					selectTarget:-1,
					content:function(){
						'step 0'
						target.chooseToRespond({name:'shan'},'请打出一张【闪】来响应【撼地】');
						'step 1'
						if(result.bool==false) target.damage();
					},
					ai:{
						expose:0.65,
						order:9,
						result:{
							player:function(player){
								if(game.countPlayer(function(current){return current.hp<=3&&get.attitude(player,current)<0})>0&&
								game.countPlayer(function(current){return current.hp<=1&&get.attitude(player,current)>0})==0) return 2;
								return 0;
							},
						},
					},
				},
				"mengzhanc_复燃":{
					trigger:{
						player:"phaseBegin",
					},
					filter:function(event,player){
						var num=player.maxHp-player.hp;
						return num>player.countCards('h');
					},
					frequent:true,
					content:function (){
						player.draw((player.maxHp-player.hp)-player.countCards('h'));
					},
				},
				"mengzhanc_冰结":{
					trigger:{
						player:"useCardBegin",
					},
					forced:true,
					filter:function(event,player){
						var bool=false;
						var targets=event.targets;
						var num=0;
						for(var i in player.getStat().card){
							num+=player.getStat().card[i];
						};
						for(var i=0;i<targets.length;i++){
							if(get.distance(player,targets[i])==num) bool=true;
						};
						return bool==true&&_status.currentPhase==player;
					},
					content:function (){
						var targets=trigger.targets;
						var num=0;
						for(var i in player.getStat().card){
							num+=player.getStat().card[i];
						};
						for(var i=0;i<targets.length;i++){
							if(get.distance(player,targets[i])==num){
								targets[i].addTempSkill('mengzhanc_冰结1',{player:'phaseAfter'});
								targets[i].markSkillCharacter('mengzhanc_冰结1',player,'冰结','无法使用或打出任何牌');
							};
						};
					},
					ai:{
						effect:{
							target:function(card,player,target){
								if(player==target&&_status.currentPhase==player){
									var num=0;
									for(var i in player.getStat().card){
										num+=player.getStat().card[i];
									};
									if(get.distance(player,target)==num&&get.attitude(player,target)<0) return 1;
									if(card.name=='tao') return 1;
									if(get.type(card)=='equip'&&player.needsToDiscard()<=1) return 1;
									if(get.distance(player,target)==num&&get.attitude(player,target)>=0) return 0;
									return 1;
								};
							},
							player:function(card,player,target){
								if(_status.currentPhase==player){
									var num=0;
									for(var i in player.getStat().card){
										num+=player.getStat().card[i];
									};
									if(get.distance(player,target)==num&&get.attitude(player,target)<0) return 1;
									if(get.distance(player,target)==num&&get.attitude(player,target)>=0) return 0;
									return 1;
								};
							},
						},
					},
				},
				'mengzhanc_冰结1':{
					mod:{
						cardEnabled:function(card,player){
							return false;
						},
						cardUsable:function(card,player){
							return false;
						},
						cardRespondable:function(card,player){
							return false;
						},
						cardSavable:function(card,player){
							return false;
						},
					},
				},
				"mengzhanc_负寒":{
					trigger:{
						player:"damageAfter",
					},
					forced:true,
					filter:function(event,player){
						if(event.source==undefined) return false;
						if(event.source.countCards('e')>0||(event.source.countCards('e')==0&&event.source.countCards('h')>0)) return true;
						return false;
					},
					content:function (){
						if(trigger.source.countCards('e')>0){
							player.discardPlayerCard(1,'e',trigger.source,true);
						}else{
							player.discardPlayerCard(1,'h',trigger.source,true);
							player.discardPlayerCard(1,'h',trigger.source,true);
						};
					},
				},
				"mengzhanc_式符":{
					trigger:{
						global:"discardEnd",
					},
					direct:true,
					filter:function(event,player){
						return event.cards!=undefined&&player.countCards('he')>=event.cards.length&&event.player!=player;
					},
					content:function (){
						'step 0'
						player.chooseToDiscard(get.prompt('mengzhanc_式符'),trigger.cards.length,'he').set('ai',function(card){
							if(get.attitude(player,trigger.player)>0&&player.countCards('he')-trigger.cards.length>=1) return 6-get.value(card);
							return -1;
						});
						'step 1'
						if(result.cards!=undefined) trigger.player.gain(trigger.cards,'gain2');
					},
				},
				"mengzhanc_化猫":{
					mod:{
						globalFrom:function(from,to){
							if(from.countCards('h')<to.countCards('h')) return 1;
						},
					},
				},
				"_mengzhanc_化猫":{
					mod:{
						attackFrom:function(from,to,distance){
							if(to.hasSkill('mengzhanc_化猫')&&from.countCards('h')>to.countCards('h')) return Infinity;
						},
					},
				},
				"mengzhanc_彩极":{
					trigger:{
						global:"shaBefore",
					},
					filter:function(event,player){
						/*if(event.targets==undefined) return false;
						for(var i=0;i<event.targets.length;i++){
							var target=event.targets[i];
							if(get.distance(player,target,'attack')<=1&&(player.countCards('h',{color:'black'})>0||(player.countCards('h',{color:'red'})>0&&target!=player))) return true;
						};*/
						var target=event.target;
						return get.distance(player,target,'attack')<=1&&(player.countCards('h',{color:'black'})>0||(player.countCards('h',{color:'red'})>0&&target!=player&&event.player!=player));
					},
					check:function(event,player){
						return (player.countCards('h',{color:'black'})>0&&(event.target.countCards('j')>0&&get.attitude(player,event.target)>0)||get.attitude(player,event.target)<0)||
						(player.countCards('h',{color:'red'})>0&&event.target!=player&&get.attitude(player,event.target)>0&&player.countCards('h',{name:'shan'})>0);
					},
					content:function (){
						'step 0'
						var list=[];
						if(player.countCards('h',{color:'black'})>0) list.push('弃置一张黑色手牌，然后弃置其一张牌');
						if(player.countCards('h',{color:'red'})>0&&trigger.target!=player&&trigger.player!=player) list.push('明置一张红色手牌，然后将此【杀】（使用者不为你）转移给你');
						player.chooseControl().set('ai',function(event){
							if(get.attitude(player,trigger.target)<0&&player.countCards('h',{color:'black'})>0) return '选项一';
							return '选项二';
						}).set('prompt','彩极').set('choiceList',list);
						'step 1'
						event.control=result.control;
						var color='';
						if(event.control=='选项一') color='black';
						if(event.control=='选项二') color='red';
						player.chooseCard(1,{color:color},'h').set('ai',function(card){
							return 6-get.value(card);
    					});
						'step 2'
						if(result.bool){
							if(event.control=='选项一'){
								player.discard(result.cards);
								player.discardPlayerCard(1,'hej',trigger.target);
							};
							if(event.control=='选项二'){
								player.mengzhanc_showCards(result.cards);
								trigger.targets.remove(trigger.target);
								trigger.targets.push(player);
								trigger.target=player;
							};
						};
					},
				},
				"mengzhanc_虎劲":{
					trigger:{
						global:"phaseAfter",
					},
					direct:true,
					filter:function(event,player){
						return player.storage.mengzhanc_虎劲==true;
					},
					content:function (){
						'step 0'
						delete player.storage.mengzhanc_虎劲;
						player.chooseTarget(get.prompt('mengzhanc_虎劲'),function(card,player,target){
							return get.distance(player,target,'attack')<=1;
						}).ai=function(target){
							return -get.attitude(player,target);
						};
						'step 1'
						if(result.bool){
							player.useCard({name:'sha'},result.targets[0]);
						};
					},
				},
				"_mengzhanc_虎劲":{
					trigger:{
						player:"damageAfter",
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return event.card!=undefined&&event.card.name=='sha'&&player.storage.mengzhanc_虎劲!=true;
					},
					content:function (){
						player.storage.mengzhanc_虎劲=true;
					},
				},
				"mengzhanc_神枪":{
					group:["mengzhanc_神枪_1","mengzhanc_神枪_2","mengzhanc_神枪_3"],
					subSkill:{
						"1":{
							mod:{
								targetInRange:function(card){
									if(_status.event.skill=='mengzhanc_神枪_1') return true;
								},
							},
							enable:'chooseToUse',
							filterCard:true,
							selectCard:2,
							viewAs:{name:'sha'},
							viewAsFilter:function(player){
								return player.countCards('h')>=2;
							},
							prompt:'将两张手牌当无距离限制的【杀】使用',
							check:function(card){
								return 5-get.value(card);
							},
							ai:{
								order:3,
							},
						},
						"2":{
							trigger:{
								player:"shaBegin",
							},
							filter:function(event,player){
								return event.card!=undefined&&get.color(event.card)=='red';
							},
							prompt:'是否发到【神枪】令此【杀】不能被【闪】响应且此【杀】造成伤害后回复1点体力？',
							content:function (){
								trigger.directHit=true;
								player.storage.mengzhanc_神枪=true;
							},
						},
						"3":{
							trigger:{
								source:"damageAfter",
							},
							filter:function(event,player){
								return player.storage.mengzhanc_神枪==true;
							},
							forced:true,
							popup:false,
							content:function (){
								player.recover();
								delete player.storage.mengzhanc_神枪;
							},
						},
					},
				},
				"mengzhanc_运命":{
					trigger:{
						global:'judge'
					},
					filter:function(event,player){
						return get.distance(player,event.player,'attack')<=1;
					},
					check:function(event,player){
						var num=0;
						var trigger=_status.event.getTrigger();
						if(trigger==undefined) return false;
						var player=_status.event.player;
						var judging=event.player.judging;
						var result=-trigger.judge(judging);
						var attitude=get.attitude(player,trigger.player);
						if(attitude==0||result==0) num=0;
						if(attitude>0){
							num+=result;
						}else{
							num+=-result;
						};
						if(num>0){
							return true;
						}else{
							return false;
						};
					},
					content:function(){
						'step 0'
						player.gain(trigger.player.judging[0],'gain2');
						'step 1'
						event.card=get.cards()[0];
						player.showCards(event.card);
						'step 2'
						event.card.discard();
						trigger.player.judging[0]=event.card;
						game.log(trigger.player,'的判定牌改为',event.card);
					},
				},
				"mengzhanc_千里之视":{
					nobracket:true,
					enable:"phaseUse",
					filter:function(event,player){
						if(player.getStat().skill.mengzhanc_千里之视>=1) return false;
						return true;
					},
					filterTarget:function(card,player,target){
						return player!=target&&target.countCards('h')>0;
					},
					line:true,
					content:function (){
						'step 0'
						player.viewCards(get.translation(target)+'的手牌',target.get('h'));
						var list=['弃置其中的一张【杀】或锦囊牌'];
						if(player.storage.mengzhanc_千里之视!=true) list.push('重置此技能的使用次数且本回合不能再选择此项');
						player.chooseControl().set('ai',function(event){
							return '选项一';
						}).set('prompt','千里之视').set('choiceList',list);
						'step 1'
						if(result.control=='选项一'){
							var cards=target.get('h');
							var cards1=[];
							for(var i=0;i<cards.length;i++){
								if(cards[i].name=='sha'||get.type(cards[i])=='trick'||get.type(cards[i])=='delay'){
									cards1.push(cards[i]);
								};
							};
							if(cards1.length>0) player.chooseCardButton(cards1).set('ai',function(button){return 1});
						}else{
							player.getStat().skill.mengzhanc_千里之视--;
							player.storage.mengzhanc_千里之视=true;
							event.finish();
						};
						'step 2'
    					if(result.bool){
							target.discard(result.links[0]);
						}else{
							event.finish();
						};
					},
					ai:{
						order:13,
						expose:0.5,
						result:{
							target:-1,
						},
					},
				},
				"_mengzhanc_千里之视":{
					trigger:{
						player:"phaseAfter",
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return player.storage.mengzhanc_千里之视==true;
					},
					content:function (){
						delete player.storage.mengzhanc_千里之视;
					},
				},
				"mengzhanc_夜盲之曲":{
					nobracket:true,
					trigger:{
						global:"phaseBefore",
					},
					filter:function(event,player){
						if(!event.player.mengzhanc_hasShownCards()) return false;
						var cards=event.player.storage.mengzhanc_showCards;
						for(var i=0;i<cards.length;i++){
							if(get.color(cards[i])=='red') return true;
						};
						return false;
					},
					check:function(event,player){
						return get.attitude(player,event.player)<0;
					},
					content:function (){
						var cards1=[];
						var cards=trigger.player.storage.mengzhanc_showCards;
						for(var i=0;i<cards.length;i++){
							if(get.color(cards[i])=='red') cards1.push(cards[i]);
						};
						trigger.player.mengzhanc_coverCards(cards1);
						trigger.player.addTempSkill('mengzhanc_夜盲之曲1',{player:'phaseAfter'});
						trigger.player.markSkillCharacter('mengzhanc_夜盲之曲1',player,'夜盲之曲','此回合不能响应任何牌，且除其之外的角色此回合不是其使用牌的合法目标');
					},
				},
				"mengzhanc_夜盲之曲1":{
					mod:{
						cardRespondable:function(card,player){
							return false;
						},
						targetInRange:function(card,player,target,now){
							if(target!=player) return false;
						},
					},
				},
				"mengzhanc_放歌高吟":{
					nobracket:true,
					group:["mengzhanc_放歌高吟_1","mengzhanc_放歌高吟_2"],
					subSkill:{
						"1":{
							trigger:{
								player:"useCardAfter",
							},
							filter:function(event,player){
								if(event.targets==undefined) return false;
								if(event.targets.length==0) return false;
								var bool=false;
								for(var i=0;i<event.targets.length;i++){
									if(event.targets[i].countCards('h')>0) bool=true;
								};
								return bool==true&&_status.currentPhase==player;
							},
							content:function (){
								if(player.storage.mengzhanc_放歌高吟==undefined) player.storage.mengzhanc_放歌高吟=[];
								var targets=trigger.targets;
								for(var i=0;i<targets.length;i++){
									if(targets[i].countCards('h')>0){
										var cards=targets[i].get('h');
										var cards1=[];
										for(var j=0;j<cards.length;j++){
											var card=cards[j];
											if(targets[i].storage.mengzhanc_showCards==undefined) targets[i].storage.mengzhanc_showCards=[];
											if(!targets[i].storage.mengzhanc_showCards.contains(card)&&card.mengzhanc_link==undefined) cards1.push(card);
										};
										if(cards1.length>0){
											var card1=cards1.randomGet();
											targets[i].mengzhanc_showCards([card1]);
											if(!player.storage.mengzhanc_放歌高吟.contains(targets[i])) player.storage.mengzhanc_放歌高吟.push(targets[i]);
										};
									};
								};
							},
						},
						"2":{
							trigger:{
								player:"phaseEnd",
							},
							direct:true,
							filter:function(event,player){
								var targets=player.storage.mengzhanc_放歌高吟;
								if(targets==undefined) return false;
								if(targets.length==0) return false;
								for(var i=0;i<targets.length;i++){
									if(targets[i].mengzhanc_hasShownCards()) return true;
								};
								return false;
							},
							content:function (){
								'step 0'
								event.num=0;
								player.chooseTarget('是否令一名角色使用明置手牌？').ai=function(target){
									return get.attitude(player,target);
								};
								'step 1'
								if(result.bool){
									event.target=result.targets[0];
									player.line(event.target);
									player.logSkill('mengzhanc_放歌高吟');
									var cards=[];
									var cards1=[];
									var targets=player.storage.mengzhanc_放歌高吟;
									for(var i=0;i<targets.length;i++){
										if(targets[i].mengzhanc_hasShownCards()){
											var cards2=targets[i].storage.mengzhanc_showCards;
											for(var j=0;j<cards2.length;j++){
												cards1.push(cards2[j]);
											};
										};
									};
									for(var i=0;i<cards1.length;i++){
										var card=cards1[i];
										var card1=game.createCard(card);
										card1.mengzhanc_link=card;
										cards.push(card1);
									};
									event.target.gain(cards);
									event.target.storage.mengzhanc_放歌高吟1=true;
								}else{
									delete player.storage.mengzhanc_放歌高吟;
									event.finish();
								};
								'step 2'
								event.target.chooseToUse('请使用明置手牌',function(card){
									if(event.num>=1&&get.type(card)!='delay') return false;
									if(!lib.filter.cardEnabled(card,_status.event.player,_status.event)) return false;
									return card.mengzhanc_link!=undefined;
								});
								'step 3'
								if(result.bool&&event.num<1){
									event.num++;
									event.goto(2);
								}else{
									var cards=event.target.get('h');
									var cards1=[];
									for(var i=0;i<cards.length;i++){
										if(cards[i].mengzhanc_link!=undefined) cards1.push(cards[i]);
									};
									event.target.lose(cards1,ui.special);
									delete event.target.storage.mengzhanc_放歌高吟1;
									delete player.storage.mengzhanc_放歌高吟;
								};
							},
						},
					},
				},
				"_mengzhanc_放歌高吟":{
					trigger:{
						player:"useCardBefore",
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						if(!event.card.isCard) return false;
						if(!event.cards) return false;
						if(!event.cards[0]) return false;
						return player.storage.mengzhanc_放歌高吟1==true&&event.cards[0].mengzhanc_link!=undefined;
					},
					content:function(){
						'step 0'
						//console.log(trigger.card.mengzhanc_link);
						for(var i=0;i<game.players.length;i++){
							var pl=game.players[i];
							if(pl.get('h').contains(trigger.cards[0].mengzhanc_link)){
								pl.lose(trigger.cards[0].mengzhanc_link,ui.special);
							};
						};
						'step 1'
						delete trigger.cards[0].mengzhanc_link;
					},
				},
				"mengzhanc_DuriNoko":{
					nobracket:true,
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						return game.countPlayer(function(current){return get.distance(player,current)<=1&&current.countCards('hej')>0})>0;
					},
					filterTarget:function(card,player,target){
						return get.distance(player,target)<=1&&target.countCards('hej')>0;
					},
					selectTarget:[1,Infinity],
					multitarget:true,
					line:false,
					content:function (){
						player.line(targets);
						for(var i=0;i<targets.length;i++){
							var target=targets[i];
							player.discardPlayerCard(1,'hej',target);
						};
						if(targets.length>player.maxHp-player.hp) player.loseHp();
					},
					ai:{
						order:12,
						expose:0.5,
						result:{
							target:function(player,target){
								var num=player.maxHp-player.hp;
								if(get.attitude(player,target)<0&&target.countCards('he')>0){
									if(num==0) return -1;
									if(ui.selected.targets.length==0&&num>0&&num<=1) return -1;
									if(ui.selected.targets.length==1&&num>1&&num<=2) return -1;
									if(ui.selected.targets.length==2&&num>2&&num<=3) return -1;
								};
								if(get.attitude(player,target)>=0&&target.countCards('j')>0){
									if(num==0) return 1;
									if(ui.selected.targets.length==0&&num>0&&num<=1) return 1;
									if(ui.selected.targets.length==1&&num>1&&num<=2) return 1;
									if(ui.selected.targets.length==2&&num>2&&num<=3) return 1;
								};
								return ;
							},
						},
					},
				},
				"mengzhanc_车悬之剑":{
					nobracket:true,
					group:["mengzhanc_车悬之剑_1","mengzhanc_车悬之剑_2","mengzhanc_车悬之剑_3"],
					subSkill:{
						"1":{
							mod:{
								cardUsable:function(card,player,num){
									if(card.name=='sha'&&player.storage.mengzhanc_车悬之剑!=undefined) return num+=player.storage.mengzhanc_车悬之剑;
								},
							},
							trigger:{
								source:"damageAfter",
							},
							frequent:true,
							filter:function(event,player){
								return player.storage.mengzhanc_车悬之剑!=undefined&&player.storage.mengzhanc_车悬之剑<player.maxHp-player.hp+1;
							},
							content:function (){
								player.draw();
								player.storage.mengzhanc_车悬之剑++;
							},
						},
						"2":{
							trigger:{
								player:"phaseUseBefore",
							},
							forced:true,
							popup:false,
							content:function (){
								player.storage.mengzhanc_车悬之剑=0;
							},
						},
						"3":{
							trigger:{
								player:"phaseUseAfter",
							},
							forced:true,
							popup:false,
							content:function (){
								delete player.storage.mengzhanc_车悬之剑;
							},
						},
					},
				},
				"mengzhanc_冰之心境":{
					nobracket:true,
					group:["mengzhanc_冰之心境_1"],
					subSkill:{
						"1":{
							mod:{
								globalFrom:function(from,to,distance){
									return distance-from.countCards('h');
								},
							},
							trigger:{
								player:'shaMiss'
							},
							forced:true,
							content:function(){
								player.disableSkill('mengzhanc_冰之心境',['mengzhanc_冰之心境']);
								player.storage.mengzhanc_冰之心境=true;
							},
						},
					},
				},
				"_mengzhanc_冰之心境":{
					mod:{
						targetInRange:function(card,player,target,now){
							var bool=true;
							for(var i in target.disabledSkills){
								if(target.disabledSkills[i].contains('mengzhanc_冰之心境')) bool=false;
							};
							if(target.hasSkill('mengzhanc_冰之心境')&&bool==true&&card.name=='sha'&&get.distance(target,player,'attack')>1) return false;
						},
					},
				},
				"_mengzhanc_冰之心境1":{
					trigger:{
						player:'phaseAfter'
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return player.storage.mengzhanc_冰之心境==true;
					},
					content:function(){
						player.enableSkill('mengzhanc_冰之心境');
						delete player.storage.mengzhanc_冰之心境;
					},
				},
				"mengzhanc_幽灵子弹":{
					nobracket:true,
					trigger:{
						global:'phaseBefore'
					},
					filter:function(event,player){
						return player.countCards('he',{color:'black'})>0&&(player.canUse('sha',event.player)||player==event.player);
					},
					direct:true,
					content:function(){
							'step 0'
							player.chooseToDiscard('是否对'+get.translation(trigger.player.name)+'使用【幽灵子弹】？',1,'he',{color:'black'}).ai=function(card){
								if(get.attitude(player,trigger.player)>0) return 0;
								if(get.attitude(player,trigger.player)<0&&trigger.player.countCards('h',{name:'shan'})==0) return 6-get.value(card);
							};
							'step 1'
							if(result.bool){
								trigger.player.storage.mengzhanc_幽灵子弹=true;
								player.useCard({name:'sha',color:'black'},trigger.player)
							}else{
								event.finish();
							};
							'step 2'
							delete trigger.player.storage.mengzhanc_幽灵子弹;
					},
				},
				"_mengzhanc_幽灵子弹":{
					trigger:{
						player:'shaMiss'
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return player.storage.mengzhanc_幽灵子弹==true;
					},
					content:function(){
						trigger.target.addTempSkill('mengzhanc_幽灵子弹1',{player:'phaseAfter'});
					},
				},
				"mengzhanc_幽灵子弹1":{
					mod:{
						cardUsable:function(card,player,num){
							if(card.name=='sha') return num+=1;
						},
					},
				},
				"mengzhanc_夜袭":{
					enable:'phaseUse',
					usable:1,
					discard:false,
					line:true,
					filterCard:function(card){
						return true;
					},
					check:function(card){
						return 5-get.value(card);
					},
					filterTarget:function(card,player,target){
						return target!=player;
					},
					content:function(){
						player.$give(cards.length,target);
						target.gain(cards);
						player.storage.mengzhanc_夜袭=target;
						target.storage.mengzhanc_夜袭1=player;
					},
					ai:{
						expose:0.35,
						order:1,
						result:{
							target:function(player,target){
								if(player.countCards('h',function(card){return (5-get.value(card))>0})>0&&(target.countCards('h')>=target.hp-1)) return -1;
								return ;
							},
						},
					},
				},
				"_mengzhanc_夜袭":{
					trigger:{
						player:'phaseUseBegin'
					},
					direct:true,
					filter:function(event,player){
						return game.countPlayer(function(current){return current.storage.mengzhanc_夜袭==player})>0;
					},
					content:function(){
						'step 0'
						event.pl=player.storage.mengzhanc_夜袭1;
						if(player.countCards('h')>player.hp){
							event.pl.logSkill('mengzhanc_夜袭');
							var list=['受到'+get.translation(event.pl.name)+'造成的1点伤害'];
							if(player.countCards('h')>0) list.push('令'+get.translation(event.pl.name)+'观看其手牌并获得其中的一张牌');
							player.chooseControl(list).set('ai',function(event){
								if(player.countCards('h')>0) return '令'+get.translation(event.pl.name)+'观看其手牌并获得其中的一张牌';
								return '受到'+get.translation(event.pl.name)+'造成的1点伤害';
							});
						}else{
							event.goto(2);
						};
						'step 1'
						if(result.control=='受到'+get.translation(event.pl.name)+'造成的1点伤害'){
							event.pl.line(player);
							player.damage().source=event.pl;
						};
						if(result.control=='令'+get.translation(event.pl.name)+'观看其手牌并获得其中的一张牌'){
							event.pl.line(player);
							event.pl.gainPlayerCard(player,'h','visible',true);
						};
						'step 2'
						delete event.pl.storage.mengzhanc_夜袭;
						delete player.storage.mengzhanc_夜袭1;
					},
				},
				"mengzhanc_娇蛮":{
					group:['mengzhanc_娇蛮_1','mengzhanc_娇蛮_2'],
					subSkill:{
						'1':{
							trigger:{
								player:'useCardBefore'
							},
							forced:true,
							filter:function(event,player){
								return event.targets!=undefined;
							},
							content:function(){
								var pls=trigger.targets;
								for(var i=0;i<pls.length;i++){
									var pl=pls[i];
									pl.addTempSkill('mengzhanc_娇蛮1',{global:'useCardAfter'});
								};
							},
						},
						'2':{
							trigger:{
								player:'damageBegin'
							},
							forced:true,
							filter:function(event,player){
								return event.card!=undefined&&get.number(event.card)!=undefined&&player.countCards('he',function(card){return get.number(card)<get.number(event.card)})>0;
							},
							content:function(){
								'step 0'
								player.chooseToDiscard('请弃置一张点数小于'+get.number(trigger.card)+'的牌',1,'he',function(card){
									return get.number(card)<get.number(trigger.card);
								});
								'step 1'
								if(result.bool){
									if(trigger.source) player.line(trigger.source);
									trigger.untrigger();
									trigger.finish();
								};
							},
						},
					},
				},
				"mengzhanc_娇蛮1":{
					mod:{
						cardRespondable:function(card,player){
							if(card!=undefined&&_status.event.parent.cards[0]!=undefined&&get.number(card)>=get.number(_status.event.parent.cards[0])) return false;
						},
					},
				},
				"mengzhanc_予糕":{
					enable:'phaseUse',
					usable:1,
					content:function(){
						'step 0'
						player.draw();
						player.chooseTarget('请选择【予糕】的目标',function(card,player,target){
							return target!=player;
						},true).ai=function(target){
							return get.attitude(target,player);
						};
						'step 1'
						if(result.bool){
							event.target=result.targets[0];
							player.chooseCard('请选择【予糕】需要给予的牌',1,'h',true).set('ai',function(card){
								if(player.maxHp>player.hp&&get.suit(card)=='heart') return 1;
								return 6-get.value(card);
							});
						}else{
							event.finish();
						};
						'step 2'
						if(result.bool){
							player.line(event.target);
							player.$give(result.cards.length,event.target);
							event.target.gain(result.cards);
							if(get.suit(result.cards[0])=='heart'){
								event.target.showCards(result.cards);
								player.recover();
							};
						};
					},
					ai:{
						expose:0.35,
						order:13,
						result:{
							target:function(player,target){
								if(player.countCards('h')>2||
								(player.countCards('h',{suit:'heart'})>0&&player.maxHp>player.hp)||
								game.countPlayer(function(current){return get.attitude(player,current)>0})) return 1;
								return ;
							},
						},
					},
				},
				"mengzhanc_坦心":{
					trigger:{
						player:"chooseToRespondBegin",
					},
					frequent:true,
					filter:function(event,player){
						return _status.currentPhase!=undefined&&player.countCards('h')>0;
					},
					content:function (){
						"step 0"
						player.showCards(player.get('h'));
						var pl=_status.currentPhase;
						pl.discardPlayerCard(player,1,'h','visible').set('ai',function(card){
    						if(get.attitude(pl,player)>0) return 5-get.value(card);
							return 0;
    					});
						"step 1"
						if(result.bool>0){
							trigger.untrigger();
							trigger.responded=true;
							trigger.result={bool:true,card:{name:'shan'}}
						}
					},
				},
				"mengzhanc_绯天双战":{
					nobracket:true,
					group:["mengzhanc_绯天双战_1","mengzhanc_绯天双战_2","mengzhanc_绯天双战_3","mengzhanc_绯天双战_4"],
					subSkill:{
						"1":{
							name:'绯天双战：红',
							enable:['chooseToUse','chooseToRespond'],
							filterCard:function(card){
								return get.color(card)=='red';
							},
							position:'he',
							viewAs:{
								name:'sha',
							},
							viewAsFilter:function(player){
								if(player.storage.countHasUsedCard==undefined) return true;
								var cards=player.storage.countHasUsedCard;
								var bool=true;
								for(var i=0;i<cards.length;i++){
									if(get.color(cards[i])=='red') bool=false;
								};
								return bool==true;
							},
							prompt:'将一张红色花色手牌当【杀】使用',
							check:function(card){
								return 5-get.value(card);
							},
							ai:{
								respondSha:true,
								skillTagFilter:function(player){
									var bool=true;
									if(player.storage.countHasUsedCard!=undefined){
										var cards=player.storage.countHasUsedCard;
										for(var i=0;i<cards.length;i++){
											if(get.color(cards[i])=='red') bool=false;
										};
									};
									return player.countCards('h',{color:'red'})>0&&bool==true;
								},
							},
						},
						"2":{
							mod:{
								cardUsable:function(card,player,num){
									if(card.name=='sha'&&get.color(card)=='red') return Infinity;
								},
							},
						},
						"3":{
							name:'绯天双战：黑',
							enable:['chooseToUse','chooseToRespond'],
							filterCard:function(card){
								return get.color(card)=='black';
							},
							position:'he',
							viewAs:{
								name:'sha',
							},
							viewAsFilter:function(player){
								if(player.storage.countHasUsedCard==undefined) return true;
								var cards=player.storage.countHasUsedCard;
								var bool=true;
								for(var i=0;i<cards.length;i++){
									if(get.color(cards[i])=='black') bool=false;
								};
								return bool==true;
							},
							prompt:'将一张红色花色手牌当【杀】使用',
							check:function(card){
								return 5-get.value(card);
							},
							ai:{
								respondSha:true,
								skillTagFilter:function(player){
									var bool=true;
									if(player.storage.countHasUsedCard!=undefined){
										var cards=player.storage.countHasUsedCard;
										for(var i=0;i<cards.length;i++){
											if(get.color(cards[i])=='black') bool=false;
										};
									};
									return player.countCards('h',{color:'black'})>0&&bool==true;
								},
							},
						},
						"4":{
							ai:{
								unequip:true,
								skillTagFilter:function (player,tag,arg){
									if(arg&&arg.name=='sha'&&get.color(arg)=='black') return true;
									return false;
								},
							},
						},
					},
				},
				"mengzhanc_幻魇":{
					intro:{
						content:'cards',
						onunmark:function(storage,player){
							if(storage&&storage.length){
								player.umarkSkill('mengzhanc_幻魇');
								player.$throw(storage,1000);
								game.cardsDiscard(storage);
								delete player.storage.mengzhanc_幻魇;
							}
						}
					},
					group:["mengzhanc_幻魇_gain","mengzhanc_幻魇_use"],
					subSkill:{
						"gain":{
							trigger:{
								player:"phaseEnd",
							},
							filter:function(event,player){
								return player.countCards('h')>0;
							},
							check:function(event,player){
								return player.countCards('h')>=2;
								//return player.countCards('h')>=2&&player.countCards('h',{name:'du'})==0;
							},
							content:function (){
								'step 0'
								event.card=player.get('h').randomGet();
								player.lose(event.card);
								player.$throw(event.card,1000);
								game.delay();
								'step 1'
								player.$gain2(event.card);
								if(player.storage.mengzhanc_幻魇==undefined) player.storage.mengzhanc_幻魇=[];
								player.storage.mengzhanc_幻魇.push(event.card);
								player.markSkill('mengzhanc_幻魇');
								player.syncStorage('mengzhanc_幻魇');
								game.cardsGotoSpecial(event.card);
								game.log(player,'将',event.card,'扣置于角色牌上');
								game.delay();
							},
						},
						"use":{
							trigger:{
								player:"phaseBegin",
							},
							filter:function(event,player){
								return player.storage.mengzhanc_幻魇&&player.storage.mengzhanc_幻魇.length>0;
							},
							direct:true,
							content:function (){
								'step 0'
								player.chooseButton(['是否发动【幻魇】？',player.storage.mengzhanc_幻魇]).set('ai',function(button){
									var card=button.link;
									if(get.suit(card)=='club'){
										if(game.countPlayer(function(current){
											return (current.maxHp==current.hp&&current.hp>1&&
											current.countCards('h',{name:'sha'})>0&&game.countPlayer(function(current1){
												return get.attitude(current,current1)<0&&current.canUse('sha',current1);
											})>0&&get.attitude(player,current)>0)
											||(current.countCards('h')<=2&&get.attitude(player,current)<0);
										})>0) return 1;
									};
									if(get.suit(card)=='diamond'){
										if(game.countPlayer(function(current){
											return (current.countCards('j')>0&&current.isEmpty(2)&&get.attitude(player,current)>0)||
											(current.countCards('e')>0&&current.countCards('j')==0&&get.attitude(player,current)<0);
										})>0) return 1;
									};
									if(get.suit(card)=='heart'){
										if(game.countPlayer(function(current){
											return get.attitude(player,current)>0;
										})>0) return 1;
									};
									if(get.suit(card)=='spade'){
										if(game.countPlayer(function(current){
											return get.attitude(player,current)<0;
										})>0&&game.countPlayer(function(current){
											return get.attitude(player,current)<=0&&current.hp<2;
										})==0) return 1;
									};
									return 0;
								});
								'step 1'
								if(result.bool){
									player.logSkill('mengzhanc_幻魇');
									var card=result.links[0];
									event.card=card;
									player.storage.mengzhanc_幻魇.remove(card);
									player.syncStorage('mengzhanc_幻魇');
									player.$throw(card,1000);
									game.cardsDiscard(card);
									game.log(player,'弃置了一张“幻魇”牌');
									if(get.suit(card)=='heart'){
										
									}else if(get.suit(card)=='diamond'){
										
									}else if(get.suit(card)=='club'){
										
									}else if(get.suit(card)=='spade'){
										for(var i=0;i<game.players.length;i++){
											var pl=game.players[i];
											if(pl==player) continue;
											player.line(pl);
											pl.damage();
										};
										event.finish();
									}else{
										event.finish();
									};
								}else{
									event.finish();
								};
								'step 2'
								player.chooseTarget('请选择【幻魇】的目标').ai=function(target){
									if(get.suit(event.card)=='club'){
										if(target.maxHp==target.hp&&target.hp>1&&
										target.countCards('h',{name:'sha'})>0&&game.countPlayer(function(current){
											return get.attitude(target,current)<0&&target.canUse('sha',current);
										})>0) return get.attitude(player,target);
										if(target.countCards('h')<=2&&get.attitude(player,target)<0) return -get.attitude(player,target);
									};
									if(get.suit(event.card)=='diamond'){
										if(target.countCards('j')>0&&target.isEmpty(2)) return get.attitude(player,target);
										if(target.countCards('e')>0&&target.countCards('j')==0) return -get.attitude(player,target);
									};
									if(get.suit(event.card)=='heart') return get.attitude(player,target);
									return 0;
								};
								'step 3'
								if(result.bool){
									var target=result.targets[0];
									player.line(target);
									if(get.suit(event.card)=='club'){
										target.loseHp();
										target.addTempSkill('mengzhanc_幻魇_sha',{player:'phaseAfter'});
										target.markSkillCharacter('mengzhanc_幻魇_sha',player,'幻魇','回合内使用【杀】造成的伤害+1');
									};
									if(get.suit(event.card)=='diamond'){
										target.gain(target.get('ej'),'gain2');
									};
									if(get.suit(event.card)=='heart'){
										target.draw();
										target.addTempSkill('mengzhanc_幻魇_noTarget',{player:'phaseBefore'});
										target.markSkillCharacter('mengzhanc_幻魇_noTarget',player,'幻魇','不能成为锦囊牌的目标');
									};
								};
							},
						},
						"sha":{
							onremove:function(player,skill){
								player.unmarkSkill('mengzhanc_幻魇_sha');
							},
							trigger:{
								source:'damageBefore'
							},
							filter:function(event,player){
								if(_status.currentPhase!=player) return false;
								return event.card&&event.card.name=='sha';
							},
							popup:false,
							forced:true,
							content:function (){
								trigger.num++;
							},
						},
						"noTarget":{
							onremove:function(player,skill){
								player.unmarkSkill('mengzhanc_幻魇_noTarget');
							},
							mod:{
								targetEnabled:function(card,player,target){
									if(get.type(card)=='trick') return false;
								},
							},
						},
					},
				},
				"mengzhanc_不死之血":{
					nobracket:true,
					trigger:{
						global:"damageBegin",
					},
					//frequent:true,
					filter:function(event,player){
						return event.player.hp<=player.hp;
					},
					check:function(event,player){
						return (get.attitude(player,event.player)>0&&player.hp>1)||event.player==player;
					},
					content:function (){
						'step 0'
						player.loseHp();
						if(trigger.player!=player) player.line(trigger.player);
						trigger.cancel();
						'step 1'
						if(player.maxHp-player.hp>0) player.draw(player.maxHp-player.hp);
					},
				},
				"mengzhanc_魔力扰动":{
					nobracket:true,
					trigger:{
						player:"useCardAfter",
						//player:"useCardToPlayered",
					},
					//frequent:true,
					filter:function(event,player){
						if(!event.cards) return false;
						if(!event.cards[0]) return false;
						if(get.type(event.cards[0])!='trick') return false;
						return player.countCards('h')>player.hp;
					},
					check:function(event,player){
						return [true,false].randomGet();
					},
					content:function (){
						ui.cardPile.insertBefore(trigger.cards[0],ui.cardPile.firstChild);
						game.log(player,'将',trigger.cards[0],'置于牌堆顶');
						game.updateRoundNumber();
						game.delay();
					},
				},
				"mengzhanc_宣刑":{
					enable:'phaseUse',
					usable:1,
					discard:false,
					lose:false,
					filter:function(event,player){
						return player.countCards('h',{name:'sha'})>0;
					},
					filterCard:function(card){
						return card.name=='sha';
					},
					check:function(card){
						return 1;
					},
					targetprompt:['选择','杀'],
					selectTarget:2,
					multitarget:true,
					filterTarget:function(card,player,target){
						if(ui.selected.targets.length==1) return ui.selected.targets[0]!=target;
						return player!=target;
					},
					content:function(){
						'step 0'
						targets[0].gain(cards,player,'giveAuto');
						targets[0].chooseControl().set('choiceList',[
							'令'+get.translation(player)+'摸一张牌，然后其对'+get.translation(targets[1])+'使用【杀】',
							'受到'+get.translation(player)+'造成的1点伤害'
						]).set('ai',function(){
							if(get.attitude(targets[0],targets[1])<=0||
							(get.attitude(targets[0],targets[1])>0&&(targets[1].countCards('h',{name:'shan'})>0||targets[1].hp>1))) return 0;
							return 1;
						});
						'step 1'
						if(result.index==0){
							targets[0].chooseToUse('宣刑：对'+get.translation(targets[1])+'使用【杀】',{name:'sha'},targets[1],-1,true).set('addCount',false);
						}else{
							targets[0].damage();
						};
					},
					ai:{
						order:11,
						result:{
							target:function(player,target){
								if(player.countCards('h',{name:'sha'})<2) return 0;
								if(ui.selected.targets.length==0){
									return -3;
								}else{
									if(get.attitude(player,target)<0) return -1;
									if(target.countCards('h',{name:'shan'})>0) return 1;
								};
							},
						},
					},
				},
				"mengzhanc_暴鸩":{
					trigger:{
						global:"dying",
					},
					forced:true,
					filter:function(event,player){
						return player!=event.player;
					},
					content:function (){
						'step 0'
						player.draw();
						'step 1'
						if(trigger.source!=player) player.recover();
					},
				},
				"mengzhanc_神隐":{
					init:function(player){
						player.storage.mengzhanc_神隐=0;
					},
					group:["mengzhanc_神隐_1","mengzhanc_神隐_2"],
					subSkill:{
						"1":{
							trigger:{
								global:"roundStart",
							},
							forced:true,
							popup:false,
							content:function(){
								player.storage.mengzhanc_神隐=0;
							},
						},
						"2":{
							trigger:{
								global:"phaseBegin",
							},
							filter:function(event,player){
								return player.countCards('h')>=player.storage.mengzhanc_神隐;
							},
							check:function(event,player){
								return player.storage.mengzhanc_神隐<=1;
							},
							content:function(){
								'step 0'
								if(player.storage.mengzhanc_神隐==undefined||player.storage.mengzhanc_神隐==0) event.goto(3);
								'step 1'
								player.chooseToDiscard(player.storage.mengzhanc_神隐,'h','神隐：弃置'+player.storage.mengzhanc_神隐+'张手牌').ai=function(card){
									return 5-get.value(card);
								};
								'step 2'
								if(!result.bool) event.finish();
								'step 3'
								var list=['亮出牌堆顶的一张牌，将此牌交给一名角色；若此牌为装备牌或延时锦囊牌，其可使用之'];
								if(game.countPlayer(function(current){
									return current.countCards('ej')>0;
								})>0) list.push('将场上的一张牌置于牌堆底');
								player.chooseControl().set('choiceList',list).set('ai',function(){
									if(list.length>0&&player.countCards('j')>0) return 1;
									return 0;
								});
								'step 4'
								if(result.index==0){
									var card=get.cards(1)[0];
									event.card=card;
									player.showCards('神隐',[card]);
									player.chooseTarget('选择给予目标').set('ai',function(target){
										var att=get.attitude(player,target);
										if(card.name=='du') return -att;
										return att;
									});
									event.goto(7);
								};
								'step 5'
								var list=['请选择置于牌堆底的牌'];
								for(var i=0;i<game.players.length;i++){
									var pl=game.players[i];
									if(pl.countCards('ej')==0) continue;
									list.push(get.translation(pl.name));
									list.push(pl.get('ej'));
								};
								player.chooseButton(list).ai=function(button){
									var card=button.link;
									var pl=get.owner(card);
									if(get.attitude(player,pl)>0&&get.type(card)=='delay') return 1;
									if(get.attitude(player,pl)<0&&get.type(card)=='equip') return 1;
									return -1;
								};
								'step 6'
								if(result.bool){
									player.$throw(result.links[0],1000);
									//player.lose(result.links[0],ui.special);
									ui.cardPile.appendChild(result.links[0]);
									player.update();
									ui.updatehl();
									game.log(player,'将',result.links[0],'置于牌堆底');
									if(player.storage.mengzhanc_神隐==undefined) player.storage.mengzhanc_神隐=0;
									player.storage.mengzhanc_神隐++;
									game.delay(1.5);
								};
								event.finish();
								'step 7'
								if(result.bool){
									var target=result.targets[0];
									player.line(target);
									target.gain(event.card,'gain2');
									if(get.type(event.card)=='equip'||get.type(event.card)=='delay'){
										target.chooseToUse('神隐：使用被给予的牌',function(card){
											if(card!=event.card) return false;
											if(!lib.filter.cardEnabled(card,target,_status.event)) return false;
											return true;
										})
									};
									if(player.storage.mengzhanc_神隐==undefined) player.storage.mengzhanc_神隐=0;
									player.storage.mengzhanc_神隐++;
								};
							},
						},
					},
				},
				"mengzhanc_境界":{
					group:["mengzhanc_境界_1","mengzhanc_境界_2","mengzhanc_境界_3"],
					subSkill:{
						"1":{
							trigger:{
								player:"phaseAfter",
							},
							forced:true,
							popup:false,
							content:function(){
								delete player.storage.mengzhanc_境界;
							},
						},
						"2":{
							trigger:{
								player:"loseEnd",
							},
							forced:true,
							popup:false,
							filter:function(event,player){
								return _status.currentPhase==player;
							},
							content:function(){
								player.storage.mengzhanc_境界=true;
							},
						},
						"3":{
							trigger:{
								player:"phaseEnd",
							},
							filter:function(event,player){
								return player.storage.mengzhanc_境界==true;
							},
							content:function(){
								'step 0'
								var card=get.cards(1)[0];
								event.card=card;
								player.viewCards('境界',[card]);
								player.chooseControl('牌堆顶','牌堆底').set('ai',function(event){
									return '牌堆顶'
								}).set('prompt','境界');
								'step 1'
								if(result.control=='牌堆底'){
									ui.cardPile.appendChild(event.card);
									game.log(player,'将一张牌置于牌堆底');
								}else{
									ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
									game.log(player,'将一张牌置于牌堆顶');
								};
								game.delay(1.5);
							},
						},
					},
				},
				"mengzhanc_推演":{
					group:["mengzhanc_推演_1","mengzhanc_推演_2","mengzhanc_推演_3"],
					subSkill:{
						"1":{
							trigger:{
								player:"phaseAfter",
							},
							forced:true,
							popup:false,
							content:function(){
								delete player.storage.mengzhanc_推演;
							},
						},
						"2":{
							trigger:{
								player:"useCardAfter",
							},
							forced:true,
							popup:false,
							filter:function(event,player){
								if(!event.card) return false;
								return _status.currentPhase==player;
							},
							content:function(){
								player.storage.mengzhanc_推演=get.number(trigger.card);
							},
						},
						"3":{
							trigger:{
								player:"useCardEnd",
							},
							//frequent:true,
							filter:function(event,player){
								if(!event.card) return false;
								return get.number(event.card)-player.storage.mengzhanc_推演==player.countCards('h')&&_status.currentPhase==player;
							},
							content:function(){
								player.draw();
							},
						},
					},
				},
				"mengzhanc_掌控":{
					trigger:{
						player:"gainAfter",
					},
					frequent:true,
					filter:function(event,player){
						if(!event.cards) return false;
						if(event.cards.length==0) return false;
						if(event.kzol_from=='mengzhanc_掌控') return false;
						return true;
					},
					content:function (){
						'step 0'
						var cards=get.cards(trigger.cards.length);
						player.gain(cards,'draw').kzol_from='mengzhanc_掌控';
						player.chooseCard('掌控：请选择置于牌堆顶的牌',trigger.cards.length,true).set('ai',function(card){
							return 6-get.value(card);
						});
						'step 1'
						if(result.bool){
							var cards=result.cards;
							player.$throw(cards.length,1000);
							//player.lose(cards,ui.special);
							for(var i=0;i<cards.length;i++){
								ui.cardPile.insertBefore(cards[i],ui.cardPile.firstChild);
							};
							player.update();
							ui.updatehl();
							game.log(player,'将'+get.cnNumber(cards.length)+'张牌置于牌堆顶');
							game.delay(1.5);
						};
					},
				},
			},
			translate:{
				"mengzhanc_jlbkm":'<span style="font-size:20px">精灵宝可梦</span>',
				"mengzhanc_dfp":'<span style="font-size:20px">东方project</span>',
				"mengzhanc_jmqskw":'<span style="font-size:18px">假面骑士凯武</span>',
				"mengzhanc_zgls":'战国兰斯',
				"mengzhanc_djsy":'刀剑神域',
				"mengzhanc_lyh":'龙与虎',
				"mengzhanc_glth":'格林童话',
				"mengzhanc_fddyly":'<span style="font-size:18px">绯弹的亚里亚</span>',
				"mengzhanc_lscs":'炉石传说',
				"mengzhanc_zysjsm":'<span style="font-size:17px">这样算僵尸吗?</span>',
				"mengzhanc_alsmyxj":'<span style="font-size:15px">爱丽丝梦游仙境</span>',
				"mengzhanc_yxrs":'游戏人生',
				
				"mengzhanc_空白":"空&白",
				"mengzhanc_推演":"推演",
				"mengzhanc_推演_info":"每当你使用牌时，若此牌与你于此回合内使用的上一张牌的点数之差为你的手牌数，你可摸一张牌",
				"mengzhanc_掌控":"掌控",
				"mengzhanc_掌控_info":"每当你不因此技能获得牌时，你可从牌堆顶获得X张牌，然后将X张牌置于牌堆顶（X为你获得牌的数量）",
				"mengzhanc_八云紫":"八云紫",
				"mengzhanc_神隐":"神隐",
				"mengzhanc_神隐_info":"一名角色的回合开始时，你可弃置X张手牌并选择一项：1.将场上的一张牌置于牌堆底；2.亮出牌堆顶的一张牌，将此牌交给一名角色；若此牌为装备牌或延时锦囊牌，其可使用之（X为你本轮发动过此技能的次数）",
				"mengzhanc_境界":"境界",
				"mengzhanc_境界_info":"你失去过牌的回合结束时，你可观看牌堆顶或牌堆底的一张牌，然后将此牌置于牌堆顶或牌堆底",
				"mengzhanc_红心女皇":"红心女皇",
				"mengzhanc_宣刑":"宣刑",
				"mengzhanc_宣刑_info":"出牌阶段限一次，你可将一张【杀】交给一名其他角色，令其选择一项：1.令你摸一张牌，然后其对由你选择的另一名其他角色使用【杀】；2.受到你造成的1点伤害",
				"mengzhanc_暴鸩":"暴鸩",
				"mengzhanc_暴鸩_info":"锁定技，每当其他角色进入濒死状态时，你摸一张牌；然后若伤害来源不为你，你回复1点体力",
				"mengzhanc_优克莉伍德X海尔赛兹":"优克莉伍德",
				"mengzhanc_不死之血":"不死之血",
				"mengzhanc_不死之血_info":"每当一名角色受到伤害时，若其体力值不大于你，则你可失去1点体力并防止此伤害，然后你摸X张牌（X为你已损失的体力值）",
				"mengzhanc_魔力扰动":"魔力扰动",
				"mengzhanc_魔力扰动_info":"每当你使用非延时锦囊牌后，若你的手牌数大于体力值，你可将此牌置于牌堆顶",
				"mengzhanc_伊瑟拉":"伊瑟拉",
				"mengzhanc_幻魇":"幻魇",
				"mengzhanc_幻魇_info":"结束阶段，你可随机将一张手牌扣置于角色牌上；准备阶段，你可弃一张“幻魇”牌，若其花色为：<br>黑桃：<br>&nbsp&nbsp你对所有其他角色造成1点伤害<br><br>梅花：<br>&nbsp&nbsp你令一名角色失去1点体力且其下回合使用【杀】造成的伤害+1<br><br>方片：<br>&nbsp&nbsp你令一名角色获得其场上的所有牌<br><br>红桃：<br>&nbsp&nbsp你令一名角色摸一张牌且其不能成为锦囊牌的目标直至其下回合开始",
				"mengzhanc_亚里亚":"亚里亚",
				"mengzhanc_绯天双战":"绯天双战",
				"mengzhanc_绯天双战_info":"你可将一张牌（若你于当前回合内使用过牌，此牌的颜色须与这些牌均不同）当【杀】使用或打出；你使用的红色【杀】不计入次数限制，黑色【杀】无视防具",
				"mengzhanc_小红帽":"小红帽",
				"mengzhanc_予糕":"予糕",
				"mengzhanc_予糕_info":"出牌阶段限一次，你可摸一张牌，然后将一张手牌交给一名其他角色；若此牌为红桃牌，则其可于获得此牌后展示之，令你回复1点体力",
				"mengzhanc_坦心":"坦心",
				"mengzhanc_坦心_info":"每当你需要使用或打出【闪】时，你可展示所有手牌，然后令当前回合角色弃置其中的一张牌；若如此做，你视为使用或打出【闪】",
				"mengzhanc_逢坂大河":"逢坂大河",
				"mengzhanc_夜袭":"夜袭",
				"mengzhanc_夜袭_info":"出牌阶段限一次，你可交给一名其他角色一张手牌；其下个出牌阶段开始时，若其手牌数大于其体力值，则其选择一项：1.受到你造成的1点伤害；2.令你观看其手牌并获得其中的一张牌",
				"mengzhanc_娇蛮":"娇蛮",
				"mengzhanc_娇蛮_info":"你的牌不能被点数小于此牌的牌响应；你受到牌造成的伤害时，可弃置一张点数小于此牌的牌，防止此伤害",
				"mengzhanc_朝田诗乃":"朝田诗乃",
				"mengzhanc_冰之心境":"冰之心境",
				"mengzhanc_冰之心境_info":"锁定技，你的攻击范围+X，你攻击范围外的角色无法对你使用【杀】；你使用的【杀】被抵消时，此技能无效直至你的回合结束（X为你的手牌数）",
				"mengzhanc_幽灵子弹":"幽灵子弹",
				"mengzhanc_幽灵子弹_info":"一名角色的回合开始时，你可将弃置一张黑色牌并视为对其使用一张黑色花色的【杀】；若此【杀】未造成伤害，则其于此回合出牌阶段使用【杀】的次数上限+1",
				"mengzhanc_上杉谦信":"上杉谦信",
				"mengzhanc_凰莲严之介":"凰莲严之介",
				"mengzhanc_车悬之剑":"车悬之剑",
				"mengzhanc_车悬之剑_info":"出牌阶段限X次，每当你造成伤害后，你可摸一张牌并令你本阶段使用【杀】的次数上限+1（X为你已损失的体力值+1）",
				"mengzhanc_DuriNoko":"Duri Noko",
				"mengzhanc_DuriNoko_info":"出牌阶段限一次，你可弃置任意名距离为1的角色区域内各一张牌；若你以此法弃置的牌多于X张，你失去1点体力（X为你已损失的体力值）",
				"mengzhanc_米斯蒂娅":"米斯蒂娅",
				"mengzhanc_夜盲之曲1":"夜盲之曲",
				"mengzhanc_夜盲之曲":"夜盲之曲",
				"mengzhanc_夜盲之曲_info":"一名角色的回合开始时，你可暗置一名有明置红色手牌的角色的红色手牌，令其此回合不能响应任何牌，且除其之外的角色此回合不是其使用牌的合法目标",
				"mengzhanc_放歌高吟":"放歌高吟",
				"mengzhanc_放歌高吟_info":"每当你于出牌阶段使用牌后，你可明置目标一张手牌；结束阶段，你可令一名角色使用本回合你明置手牌目标的所有明置手牌，目标角色最多以此法使用两张牌且第二张牌只能为延时性锦囊牌",
				"mengzhanc_犬走椛":"犬走椛",
				"mengzhanc_千里之视":"千里之视",
				"mengzhanc_千里之视_info":"出牌阶段限一次，你可观看一名角色的手牌，然后选择一项：1.弃置其中的一张【杀】或锦囊牌；2.重置此技能的使用次数且本回合不能再选择此项",
				"mengzhanc_蕾米莉亚":"蕾米莉亚",
				"mengzhanc_神枪":"神枪",
				"mengzhanc_神枪_info":"你可将两张手牌当无距离限制的【杀】使用；你使用的红色【杀】不能被【闪】响应，且此【杀】造成伤害后你回复1点体力",
				"mengzhanc_运命":"运命",
				"mengzhanc_运命_info":"每当你攻击范围内的角色的判定牌生效前，你可获得之并亮出牌堆顶的一张牌来代替",
				"mengzhanc_红美铃":"红美铃",
				"mengzhanc_彩极":"彩极",
				"mengzhanc_彩极_info":"每当你攻击范围内的一名角色成为【杀】的目标时，你可选择一项：1.弃置一张黑色手牌，然后弃置其一张牌；2.明置一张红色手牌，然后将此【杀】（使用者不为你）转移给你",
				"mengzhanc_虎劲":"虎劲",
				"mengzhanc_虎劲_info":"你受到过【杀】造成的伤害的回合结束时，你可视为对攻击范围内的一名角色使用【杀】",
				"mengzhanc_橙":"橙",
				"mengzhanc_式符":"式符",
				"mengzhanc_式符_info":"每当一名其他角色因弃置而失去牌后，你可弃置等量的手牌，令其获得被弃置的牌",
				"mengzhanc_化猫":"化猫",
				"mengzhanc_化猫_info":"锁定技，你与手牌数大于你的角色的距离视为1且视为不在其攻击范围内",
				"mengzhanc_琪露诺":"琪露诺",
				"mengzhanc_冰结1":"冰结",
				"mengzhanc_冰结":"冰结",
				"mengzhanc_冰结_info":"锁定技，每当你于回合内使用牌指定目标后，若你与目标角色距离为X，则其不能使用或打出手牌直至回合结束(X为你本回合已使用的牌数)",
				"mengzhanc_负寒":"负寒",
				"mengzhanc_负寒_info":"锁定技，每当你受到伤害后，若伤害来源装备区里：有牌，你弃置其装备区里的一张牌；无牌，你依次弃置其两张手牌",
				"mengzhanc_坂木":"坂木",
				"mengzhanc_撼地":"撼地",
				"mengzhanc_撼地_info":"出牌阶段限一次，你可弃置两张黑色牌，令所有其他角色选择一项：1.打出【闪】；2.受到你造成的1点伤害",
				"mengzhanc_复燃":"复燃",
				"mengzhanc_复燃_info":"准备阶段，你可将手牌补至X张（X为你已损失的体力值）",
				"mengzhanc_古柳":"古柳",
				"mengzhanc_严冬":"严冬",
				"mengzhanc_严冬_info":"结束阶段，你可弃置一名手牌数大于你的角色的一张牌，若此牌为黑色，则视为你对其使用【杀】",
				"mengzhanc_凌寒":"凌寒",
				"mengzhanc_凌寒_info":"每当你成为♣花色的【杀】的目标后，你可弃置一张牌，令此【杀】对你无效",
				"mengzhanc_小霞":"小霞",
				"mengzhanc_抵水":"抵水",
				"mengzhanc_抵水_info":"你于回合内可将一张黑色牌当【杀】使用或打出；你于回合外可将一张黑色牌当【闪】使用",
				"mengzhanc_涓涓":"涓涓",
				"mengzhanc_涓涓_info":"当你于一名角色的回合首次使用或打出黑色基础牌时，你可摸一张牌",
				"mengzhanc_小智":"小智",
				"mengzhanc_收服":"收服",
				"mengzhanc_收服_info":"每当其他角色的牌因弃置而置入弃牌堆后，你可选择一项：1.摸一张牌；2.获得其中的一张牌，然后若你的手牌多于X张，你将手牌弃置至X张（X为你的体力上限）",
				"mengzhanc_showCards":"明置的手牌",
			},
		};
		if(lib.device||lib.node){
			for(var i in mengzhanc.character){mengzhanc.character[i][4].push('ext:扩展ol/'+i+'.jpg');}
		}else{
			for(var i in mengzhanc.character){mengzhanc.character[i][4].push('db:extension-扩展ol:'+i+'.jpg');}
		}
		return mengzhanc;
	});
	lib.group.push('meng');
	lib.translate.meng='萌';
	lib.config.all.characters.push('mengzhanc');
	if(!lib.config.characters.contains('mengzhanc')) lib.config.characters.push('mengzhanc');
	lib.translate['mengzhanc_character_config']='<span style="font-size:15px;font-weight:600">萌战competition</span>';
}