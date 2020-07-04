window.func=function(lib,game,ui,get,ai,_status){
	lib.extensionMenu.extension_扩展ol.wjbll_title={
		"name":"<b><p align=center><span style=\"font-size:18px\">-----武将包界面-----</span></b>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol.wjbll_info={
		"name":"武将包界面下双击简介栏或武将栏可将其放大，再次双击后恢复",
		"clear":true,
		"nopointer":true,
    };
	lib.extensionMenu.extension_扩展ol.wjbll_enable={
		"name":"开启武将包界面",
		"init":true,
		"intro":"开启后，选将将样式固定为“默认”，点击扩展ol的武将包是弹出武将包浏览界面"
	};
	lib.extensionMenu.extension_扩展ol.wjbll_layout={
		name:'武将包界面布局',
		init:'lr',
		item:{
			'ud':'上下',
			'lr':'左右',
		},
		visualMenu:function(node,link){
			if(!node.created){
				node.created=true;
				node.className='menu';
				node.setBackgroundImage('theme/style/card/image/ol.png');
				node.firstChild.style.display='none';
				var packName=ui.create.div('.menu');
				packName.style.height='9px';
				packName.style.width='calc(100% - 6px)';
				packName.style.left='3px';
				packName.style.top='2.5px';
				packName.style['border-radius']='3px';
				node.appendChild(packName);
				var packInfo=ui.create.div('.menu');
				if(link=='ud'){
					packInfo.style.height='21.5px';
					packInfo.style.width='calc(100% - 6px)';
					packInfo.style.left='3px';
					packInfo.style.top='15px';
				}else{
					packInfo.style.height='31.5px';
					packInfo.style.width='calc(40% - 7px)';
					packInfo.style.left='3px';
					packInfo.style.top='15px';
				};
				packInfo.style['border-radius']='3px';
				node.appendChild(packInfo);
				var packSwith=ui.create.div('.menu');
				if(link=='ud'){
					packSwith.style.height='10px';
					packSwith.style.width='calc(100% - 6px)';
					packSwith.style.left='3px';
					packSwith.style.top='40px';
				}else{
					packSwith.style.height='36px';
					packSwith.style.width='calc(40% - 7px)';
					packSwith.style.left='3px';
					packSwith.style.top='50px';
				};
				packSwith.style['border-radius']='3px';
				node.appendChild(packSwith);
				var packCharacter=ui.create.div('.menu');
				if(link=='ud'){
					packCharacter.style.height='33px';
					packCharacter.style.width='calc(100% - 6px)';
					packCharacter.style.left='3px';
					packCharacter.style.top='52.5px';
				}else{
					packCharacter.style.height='70.5px';
					packCharacter.style.width='calc(60% - 2.4px)';
					packCharacter.style.left='calc(40% - 1px)';
					packCharacter.style.top='15px';
				};
				packCharacter.style['border-radius']='3px';
				node.appendChild(packCharacter);
			};
		},
	};
	lib.extensionMenu.extension_扩展ol.wjbll_sf={
		name:'武将包界面缩放',
		init:1,
		item:{
			0.6:'60%',
			0.7:'70%',
			0.8:'80%',
			0.9:'90%',
			0.95:'95%',
			1:'100%',
			1.05:'105%',
			1.1:'110%',
			1.2:'120%',
		},
	};
	lib.extensionMenu.extension_扩展ol.wjbll_load={
		"name":"边打开边加载",
		//"init":lib.device?false:true,
		"init":false,
		"intro":"开启后，打开武将包界面时立即加载武将"
    };
	lib.extensionMenu.extension_扩展ol.wjbll_fddh={
		"name":"放大动画",
		"init":true
    };
	lib.extensionMenu.extension_扩展ol.wjbll_showLJ={
		"name":"显示是否可以联机",
		"init":false,
		"intro":"开启后可以在扩展ol武将包界面显示武将是否可以联机"
    };
	lib.extensionMenu.extension_扩展ol.wjbll_showSS={
		"name":"显示是否拥有技能皮肤",
		"init":true,
		"intro":"开启后可以在扩展ol武将包界面显示武将是否拥有技能皮肤<br>标识：绿边框"
    };
	if(lib.config['extension_扩展ol_wjbll_enable']==false) return ;
	lib.config.buttoncharacter_style='default';
	game.wjbll_createButton=function(name,bool){
		var div=ui.create.button(name,'character');
		div.style.cursor='pointer';
		div.style.borderRadius='5px';
		if(lib.config.extension_扩展ol_wjbll_showSS==true&&lib.skillSkin_character!=undefined&&lib.skillSkin_character.contains(name)){
			div.style['box-shadow']='rgba(0, 0, 0, 0.2) 0 0 0 1px,rgba(75,255,0,0.4) 0 0 5px, rgba(75,255,0,0.4) 0 0 12px, rgba(75,255,0,0.8) 0 0 15px';
		};
		if(bool==true&&lib.config.extension_扩展ol_wjbll_showLJ==true){
			div.node.hp.style['zIndex']=1;
			div.node.name.style['zIndex']=1;
			var div1=ui.create.div('');
			div1.style.height='20px';
			div1.style.width='48px';
			div1.style.bottom='0px';
			div1.style.left='0px';
			div1.style['font-size']='15px';
			div1.style['text-align']='center';
			div1.style['font-family']='shousha';
			div1.style['line-height']='20px';
			div1.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			div1.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			div1.style['white-space']='nowrap';
			div1.style.borderRadius='5px';
			div1.innerHTML='可联机';
			if(div.node.occupation){
				div1.style.left='20px';
				div.node.hp.style.right='0px';
				div.node.hp.style.bottom='2px';
			};
			div.appendChild(div1);
		};
		var banned=lib.config.banned||[];
		if(banned.contains(name)){
			div.classList.add('banned');
		};
		return div;
	};
	var characterPackInfo={
		'yys':{
			info:'·设计者：黑暗战斗暴龙兽(三国杀diy吧)、天瑞之人(三国杀diy吧)<br>·状态：原设计部分已完结，剩下的随缘更新<br>·简介：<br>&nbsp&nbsp阴阳师的同人武将包',
			url:{
				"<span style='font-size:16px;'>黑暗战斗暴龙兽</span>":"已删贴",
				"天瑞之人":"https://tieba.baidu.com/p/5220075458?",
			},
		},
		'ding':{
			info:'·设计者：别玩一起跑(三国杀diy吧)<br>·状态：已完结<br>·简介：<br>&nbsp&nbsp该武将包中许多的角色都是有平定某地方/朝政的事例，为彰显他们的功绩，遂用“定”字做武将包名',
			url:{
				"别玩一起跑":"https://tieba.baidu.com/p/4332086610?",
			},
		},
		'wanshi':{
			info:'·设计者：极光（扩展ol作者）<br>·状态：更新中<br>·简介：<br>&nbsp&nbsp由古老兽组成的武将包。本人的早期作品，技能设计较为简单',
		},
		'luanshijiaren':{
			info:'·设计者：占戈or石皮(三国杀diy吧)、还有一个找不到原设计贴<br>·状态：已完结<br>·简介：<br>&nbsp&nbsp思往事，惜流芳，易成伤',
			url:{
				"占戈or石皮":"https://tieba.baidu.com/p/2174346198?",
			},
		},
		'TLP':{
			info:'·设计者：yoyo_ts_喵(三国杀diy吧)<br>·状态：已完结<br>·玩法介绍：<br>&nbsp&nbsp塔罗牌的获得：<br>&nbsp&nbsp&nbsp游戏开始时，塔罗牌武将可以选择两张塔罗牌武将组成塔罗牌组。若你为双将且两个武将均为塔罗牌武将，则第一张武将进入塔罗牌组，第二张武将正逆位技能均可以使用<br>&nbsp&nbsp&nbsp联机模式下随机获得两张塔罗牌组成塔罗牌组<br>&nbsp&nbsp正逆位：<br>&nbsp&nbsp&nbsp正位时拥有正位技能，逆位时拥有逆位技能，获得塔罗牌后组成的塔罗牌组中，所有武将均为正位<br>&nbsp&nbsp&nbsp回合开始和回合结束时，你可以调整一张塔罗牌的正逆位<br>&nbsp&nbsp&nbsp使用塔罗牌武将的玩家的所有武将总是处于明置状态',
			url:{
				"yoyo_ts_喵":"https://tieba.baidu.com/p/2672388237?",
			},
		},
		'naihehualuo':{
			info:'·设计者：找不到原设计贴<br>·状态：已完结<br>·简介：<br>&nbsp&nbsp这个武将包的武将翻面时有彩蛋哦~',
		},
		'wushuangsha':{
			info:'·设计者：Clark204(三国杀diy吧)<br>·状态：更新中<br>·简介：<br>&nbsp&nbsp真三国无双的同人武将包，基于原三国武将的修改与创新<br>&nbsp&nbsp(以下简介摘自设计贴4楼)<br>&nbsp&nbsp204改良版三国杀 势力组成：蜀汉势力（26）、魏晋势力（34）、东吴势力（26）、群雄势力（24）、神魔势力（18）以及日本战国势力（46） ，这时可能会有看官吐槽，为什麽会有日本人？！我们的回答是，第一，严重受到《无双大蛇》的混搭乱入情结影响（尼玛的这是神马理由）；第二，日本战国时代英雄辈出，也是一个伟大的时代，经过研究后决定，这么好的素材，不能放过（那中国的战国人物呢？放心，你怎么知道我们没有）。适宜人群：三国杀多元化玩法的倾向者、三国杀基础玩家、三国杀diy爱好者，以及各位窝在寝室或桌游吧里玩面杀的大学生。本品不适合职业玩家、专业打法研究者，因为会让他们抓狂的。本套卡牌严重不遵守几血几技能的神马diy规则，因为我们倾向于发明各种新奇又不算麻烦的玩法，而且我们都是面杀，所以有意调高了各个武将的战场生存能力，这样的话完善了一下改良后的平衡性，也能让游戏乐趣获得提高。不过在制卡的过程中，我们还是很严谨的去研究了一遍卡牌的平衡性，保证尽量不会出现马上死的武将或制霸全场的角色。',
			url:{
				"Clark204":"https://tieba.baidu.com/p/1184222767?",
			},
		},
		'xlsh':{
			info:'·设计者：yoyo_ts_喵(三国杀diy吧)<br>·状态：已完结<br>·简介：<br>&nbsp&nbsp该武将包由希腊神话内的神作为武将组成。该武将包内许多技能都给予对方选择的机会',
			url:{
				"yoyo_ts_喵":"https://tieba.baidu.com/p/3020361936?",
			},
		},
		'ljyhsl':{
			info:'·设计者：孒德丶君孒閣(三国杀diy吧)<br>·状态：已完结<br>·简介：<br>&nbsp&nbsp暂无',
			url:{
				"孒德丶君孒閣":"已删贴",
			},
		},
		'aljx':{
			info:'·设计者：极光（扩展ol作者）<br>·状态：更新中<br>·简介：<br>&nbsp&nbsp由奥拉星扩展到奥拉星S扩展再到奥拉·镜像武将包，玩法上最终脱离了固定的框架、回归到无名杀上',
		},
		'nyhzrlj':{
			info:'·设计者：极光（扩展ol作者）<br>·状态：更新中<br>·简介：<br>&nbsp&nbsp新英魂之刃包的延续。该武将包技能叙述重契合，故不大标准。该武将包部分武将需要解锁，部分武将有技能皮肤<br>·概念解释：<br>&nbsp&nbsp被动：即锁定技<br>&nbsp&nbsp❤被动：即不可移除的锁定技',
		},
		'yhzr':{
			info:'·设计者：极光（扩展ol作者）<br>·状态：已完结<br>·简介：<br>&nbsp&nbsp旧版英魂之刃包。该武将包技能叙述重契合，故不大标准。该武将包是早期编写的武将包，技能大多是其他技能改编而来，平衡做的也不好，所以该武将包默认为关闭状态且无法联机<br>·概念解释：<br>&nbsp&nbsp被动：即锁定技',
		},
		'bing':{
			info:'·设计者：cplaxf(三国杀diy吧)<br>·状态：已完结<br>·简介：<br>&nbsp&nbsp乱斗-带兵作战的配套武将包',
			url:{
				"cplaxf":"https://tieba.baidu.com/p/1315236116?",
			},
		},
		'mengzhanc':{
			info:'·设计者：鸽子实时扑杀群（QQ群）成员<br>·状态：更新中<br>·简介：<br>&nbsp&nbspACGN设计爱好者设计的武将包',
			url:{
				"鸽子实时扑杀":"https://tieba.baidu.com/p/5826394621?",
			},
		},
		'xinSP':{
			info:'·设计者：地黄肾宝糖浆♂(三国杀diy吧)<br>·状态：已完结<br>·简介：<br>&nbsp&nbsp暂无',
			url:{
				"地黄肾宝糖浆♂":"已删贴",
			},
		},
		'mrfz':{
			info:'·设计者：小妖辰末(三国杀设计吧)<br>·状态：更新中<br>·简介：<br>&nbsp&nbsp明日方舟的同人武将包<br>·注：敌方/对方/己方通过态度判断',
			url:{
				"小妖辰末":"https://tieba.baidu.com/p/6171017138?",
			},
		},
		'c_zx':{
			info:'·设计者：极光（扩展ol作者）<br>·状态：更新中<br>·简介：<br>&nbsp&nbsp个人的散装idea武将会扔进杂项包里<br>&nbsp&nbsp条件击杀武将的手牌上限默认为3',
		},
		'zombie':{
			info:'·编写者：寒鸦（无名杀僵尸模式创始者）<br>·状态：已完结<br>·简介：<br>&nbsp&nbsp乱斗-僵尸模式和联机-身份-僵尸的配套武将包',
		},
		'mode_extension_<span style="font-size:17px;font-weight:600">扩展ol-BOSS</span>':{
			info:'·神兽篇编写者：冷雨（神王包作者）<br>·非神兽篇设计者：极光（扩展ol作者）<br>·状态：更新中<br>·简介：<br>&nbsp&nbsp扩展ol挑战武将（BOSS+随从）的集合包',
		},
		'mode_extension_卡战图鉴':{
			info:'·设计者：卡战三国官方、QQ群群友<br>·状态：更新中<br>·简介：<br>&nbsp&nbsp卡战模式的配套武将包',
		},
		'mode_extension_<span>王者之战</span>':{
			info:'·编写者：原王者之战包作者（忘了是谁。。。）<br>·状态：未知<br>·简介：<br>&nbsp&nbsp王者之战的配套武将包',
		},
		'mode_extension_<span>千秋万载</span>':{
			info:'·设计者&编写者：孤城葬月落飞雪（孤城、千秋万载包作者）<br>·状态：未知<br>·当前版本：5.1(2018.12.2)<br>·简介：<br>&nbsp&nbsp特殊类皮肤武将扩展包，一统江山的前传。<br>·注：<br>&nbsp&nbsp此武将包武将在王者之战模式下会获得奋发技【回天】',
		},
		'mode_extension_<span>一统江山</span>':{
			info:'·设计者&编写者：孤城葬月落飞雪（孤城、一统江山包作者）<br>·状态：未知<br>·当前版本：5.0(2018.9.10)<br>·简介：<br>&nbsp&nbsp特殊类皮肤武将扩展包。<br>·注：<br>&nbsp&nbsp此武将包武将在王者之战模式下会获得奋发技【回天】',
		},
		'mode_extension_<span style="font-size:20px">Fate.Eternity</span>':{
			info:'·设计者&编写者：孤城葬月落飞雪（孤城、Fate.Eternity包作者）<br>·状态：未知<br>·简介：<br>&nbsp&nbsp灵感素材皆来自于手游fgo。<br>·注：<br>&nbsp&nbsp此武将包武将在王者之战模式下会获得奋发技【虚数空间】<br><br>'+
			'<table style="width:100%;" border="1">'+
			'<tr>'+
			'<td width="30%" style="text-align:center;vertical-align:middle;font-size:16px">NP</td>'+
			'<td width="70%" style="text-align:center;vertical-align:middle;font-size:16px">效果</td>'+
			'</tr>'+
			'<tr>'+
			'<td width="30%" style="text-align:center;vertical-align:middle;font-size:16px">≥100</td>'+
			'<td width="70%" style="text-align:left;vertical-align:middle;font-size:16px">摸牌+1,回复体力+1,手牌上限+1</td>'+
			'</tr>'+
			'<tr>'+
			'<td width="30%" style="text-align:center;vertical-align:middle;font-size:16px">≥200</td>'+
			'<td width="70%" style="text-align:left;vertical-align:middle;font-size:16px">受到的伤害-1并增加1点护甲</td>'+
			'</tr>'+
			'<tr>'+
			'<td width="30%" style="text-align:center;vertical-align:middle;font-size:16px">≥300</td>'+
			'<td width="70%" style="text-align:left;vertical-align:middle;font-size:16px">免疫受到的体力流失和法术伤害</td>'+
			'</tr>'+
			'</table><br>'+
			'<table style="width:100%;" border="1">'+
			'<tr>'+
			'<td width="70%" style="text-align:center;vertical-align:middle;font-size:16px">条件</td>'+
			'<td width="30%" style="text-align:center;vertical-align:middle;font-size:16px">奖励</td>'+
			'</tr>'+
			'<tr>'+
			'<td width="70%" style="text-align:center;vertical-align:middle;font-size:16px">造成/受到伤害</td>'+
			'<td width="30%" style="text-align:center;vertical-align:middle;font-size:16px">+2~20NP</td>'+
			'</tr>'+
			'<tr>'+
			'<tr>'+
			'<td width="70%" style="text-align:center;vertical-align:middle;font-size:16px">回复/流失体力</td>'+
			'<td width="30%" style="text-align:center;vertical-align:middle;font-size:16px">+2~20NP</td>'+
			'</tr>'+
			'<tr>'+
			'<td width="70%" style="text-align:center;vertical-align:middle;font-size:16px">获得/失去牌</td>'+
			'<td width="30%" style="text-align:center;vertical-align:middle;font-size:16px">+2~5NP</td>'+
			'</tr>'+
			'<tr>'+
			'<td width="70%" style="text-align:center;vertical-align:middle;font-size:16px">击杀一名角色</td>'+
			'<td width="30%" style="text-align:center;vertical-align:middle;font-size:16px">+100NP</td>'+
			'</tr>'+
			'</table>',
		},
		'bwp':{
			info:'·设计者：百闻牌官方<br>·状态：更新中<br>·简介：<br>&nbsp&nbsp百闻牌式神三国杀武将化<li>玩法：<ul><li>当整局游戏的第一个回合开始时，百闻牌武将弃置所有手牌并摸4张牌<li>当百闻牌武将获得卡牌时，这些卡牌会随机地转化为该武将的专属手牌<li>当百闻牌武将失去转化手牌时，这些转化手牌会转化回原来的牌<li>百闻牌武将可以在出牌阶段使用一次出击（造成数值等同于攻击力的伤害）<li>百闻牌武将使用专属卡牌和出击都需要消耗一点鬼火（若鬼火不足，则无法使用）<li>游戏开始时和回合开始前，系统会将鬼火恢复至上限（默认2点，双百闻牌武将4点）<li>百闻牌武将的第一、五、九个回合开始前会升一级<li>百闻牌武将不能使用比自己高级的专属卡牌<li>百闻牌武将的手牌上限固定为4<li>百闻牌的实际攻击力和实际护盾为其面板的十分之一<li>百闻牌武将濒死即为气绝，此时会重置武将牌变化状态</ul>',
			url:{
				"百闻牌官网":"https://ssr.163.com/index.html",
			},
		},
		'mode_extension_奥拉星S':{
			info:'·设计者：奥拉星官方<br>·状态：更新中<br>·简介：<br>&nbsp&nbsp奥拉星亚比三国杀武将化<li>玩法：<ul><li>以下将奥拉星亚比武将简称为亚比<li>亚比在战斗中的属性受能力值影响<li>亚比每个回合只能使用一个主动技能，且技能PP值不足时无法发动<li>出牌阶段，若有技能的PP值不足时，玩家可以弃置一张手牌并恢复所有技能的PP值2点<li>亚比技能只能指定攻击范围内的其他角色<li>亚比间属性克制时，造成伤害的伤害翻倍，受到伤害的减半（暂不设置超系克制原系）<li>受时空限制，亚比对非亚比造成的伤害最高为1<li>当两张亚比组成双将时，玩家能力属性为第一张亚比的面板</ul><li>概念介绍：<ul><li>攻击类型：<ul><li>普通攻击/特殊攻击：造成的伤害为伤害值/2000（结算增加值后）<li>属性攻击：一般不会造成直接伤害</ul><li>能力值：<ul><li>攻击/特攻：当攻击为普通攻击/特殊攻击时，该数值生效，伤害+攻击/特攻值<li>防御/特防：当受到的攻击为普通攻击/特殊攻击时，该数值生效，伤害-防御/特防值<li>速度：回合末进行一个额外回合的概率（概率为速度值/15000）</ul><li>能力等级：<li>能力等级的绝对值不会超过6<ul><li>攻击/特攻：作用于攻击/特攻值。为正数时，攻击/特攻值*（攻击/特攻等级的平方/10+1）；为负数时，攻击/特攻值*（1+攻击/特攻等级*0.12）<li>防御/特防：作用于防御/特防值。为正数时，防御/特防值*（1-防御/特防等级*0.12）；为负数时，防御/特防值*（防御/特防等级的平方/10+1）<li>速度：结算速度等级效果时作用于速度值，速度值*（1+速度等级*0.2）<li>暴击：造成伤害有暴击等级/10的概率暴击；暴击时，若此次攻击为普通/特殊攻击，伤害翻倍，否则伤害+0.25<li>命中：使用的【杀】有命中等级/10的概率直接命中<li>闪避：受到伤害时有（闪避等级-敌方命中等级）*7.5%概率免疫（闪避）</ul><li>异常状态：<ul><li>中毒/烧伤/冻伤：回合末失去最大体力值/8点体力<li>束缚：回合末失去最大体力/16点体力<li>诅咒：回合末失去最大体力/4点体力<li>麻痹：回合开始有65%的概率无法行动<li>睡眠：无法行动，受到伤害后可以解除<li>害怕：无法行动<li>衰弱：回合末失去（已损失体力*0.25+0.1）点体力<li>混乱：使用亚比技能时，75%使目标错乱<li>寄生：回合末被最后一次施加寄生的对象吸取最大体力/10点体力</ul>',
			url:{
				"奥拉星官网":"http://aola.100bt.com/",
			},
		},
		'sesx':{
			info:'·设计者：狗爷(三国杀diy吧)<br>·状态：更新中<br>·简介：<br>&nbsp&nbsp暂无<li>玩法：<ul><li>形态转化：回合开始阶段前，你可以选择是否变换形态<li>灵力：也就是法力值，使用部分的技能时需要消耗灵力<li>灵力补充：十二生肖武将的灵力是固定的，回合结束阶段后会将灵力值自动回满<li>酒：【酒】可补充灵力，回复2点灵力值；使用【酒】补充灵力后，【酒】不触发原效果<li>十二生肖武将的【酒】无使用次数限制<li>使用十二生肖武将的玩家的所有武将总是处于明置状态</ul>',
			url:{
				"狗爷":"https://tieba.baidu.com/p/1343388466?",
			},
		},
		'djl':{
			info:'·设计者：极光（扩展ol作者）<br>·状态：更新中<br>·简介：<br>&nbsp&nbsp暂无',
		},
		'tqk':{
			info:'·设计者&编写者：天气亏(列女传、武庙、诸子百家、三国标准包扩展作者)<br>·状态：未知<br>·简介：<br>&nbsp&nbsp拥有三国标准包技能的角色拥有击杀效果，每次触发时获得对应奖励。',
		},
		'ywtptjqdfyll':{
			info:'·设计者：去尼玛的保险(三国杀设计吧)<br>·状态：更新中<br>·简介：<br>&nbsp&nbsp暂无',
			url:{
				"去尼玛的保险":"https://tieba.baidu.com/p/6558734843?",
			},
		},
	};
	game.kzol_openCharacterPack=function(name,node){
		//ui.click.configMenu();
		//game.pause2();
		ui.system.style.display='none';
		ui.menuContainer.style.display='none';
		var dialog1={};
		var divs={};
		var background=ui.create.dialog('hidden');
		background.style.height='calc(100%)';
		background.style.width='calc(100%)';
		background.style.left='0px';
		background.style.top='0px';
		ui.window.appendChild(background);
		dialog1.background=background;
		var dialog=ui.create.dialog('hidden');
		dialog.classList.add('popped');
		dialog.classList.add('static');
		dialog.style.animation='faderightIn .4s';
		dialog.style['-webkit-animation']='faderightIn .4s';
		dialog.style.height='500px';
		dialog.style.width='739px';
		dialog.style.left='calc(50% - 369.5px)';
		dialog.style.top='calc(50% - 250px)';
		dialog.style.transform='scale('+lib.config['extension_扩展ol_wjbll_sf']+','+lib.config['extension_扩展ol_wjbll_sf']+')';
		ui.window.appendChild(dialog);
		dialog1.dialog=dialog;
		var packName=ui.create.div('.menu');
		packName.style.height='38px';
		packName.style.width='calc(100% - 25px)';
		packName.style.left='12.4px';
		packName.style.top='12.5px';
		packName.style['font-size']='38px';
		packName.style['text-align']='center';
		packName.style['font-family']='shousha';
		packName.style['line-height']='40px';
		packName.style['font-weight']=600;
		if(name=='ywtptjqdfyll'){
			packName.innerHTML='因为太怕痛就全点防御力了';
		}else{
			packName.innerHTML=lib.translate[name+'_character_config'];
		};
		if(lib.translate[name+'_character_config']=='<span style=\"font-size:17px;font-weight:600\">扩展ol-BOSS</span>') packName.innerHTML='扩展ol-BOSS';
		if(lib.translate[name+'_character_config']=='<span style="font-size:15px;font-weight:600">萌战competition</span>') packName.innerHTML='萌战competition';
		dialog.appendChild(packName);
		var packInfo=ui.create.div('.menu');
		if(lib.config.extension_扩展ol_wjbll_layout=='ud'){
			packInfo.style.height='87.5px';
			packInfo.style.width='calc(100% - 25px)';
			packInfo.style.left='12.5px';
			packInfo.style.top='65px';
		}else{
			packInfo.style.height='160px';
			packInfo.style.width='calc(40% - 2.5px)';
			packInfo.style.left='12.5px';
			packInfo.style.top='65px';
		};
		//packInfo.style.cursor='pointer';
		packInfo.style['font-size']='17px';
		packInfo.style['text-align']='justify';
		packInfo.style['font-family']='shousha';
		packInfo.style['line-height']='17px';
		packInfo.style['font-weight']=600;
		packInfo.style['overflow-x']='hidden';
		packInfo.style['overflow-y']='scroll';
		var str='';
		if(characterPackInfo[name]!=undefined){
			str+=characterPackInfo[name].info;
		};
		packInfo.innerHTML=str;
		dialog.appendChild(packInfo);
		if(lib.config.extension_扩展ol_wjbll_fddh!=true) packInfo.style.transition='opacity 0s';
		packInfo.ondblclick=function(e){
			e.preventDefault();
			if(this.link_kzol_clicked==true){
				delete this.link_kzol_clicked;
				if(lib.config.extension_扩展ol_wjbll_layout=='ud'){
					packInfo.style.height='87.5px';
				}else{
					packInfo.style.height='160px';
				};
				packInfo.style.top='65px';
				packInfo.style['zIndex']=0;
			}else{
				this.link_kzol_clicked=true;
				packInfo.style.height='calc(100% - 25px)';
				packInfo.style.top='12.5px';
				packInfo.style['zIndex']=5;
			};
		};
		var packSwith=ui.create.div('.menu');
		if(lib.config.extension_扩展ol_wjbll_layout=='ud'){
			packSwith.style.height='60px';
			packSwith.style.width='calc(100% - 25px)';
			packSwith.style.left='12.5px';
			packSwith.style.top='165px';
			packSwith.style['text-align']='left';
			packSwith.style['overflow-x']='scroll';
			packSwith.style['overflow-y']='hidden';
			packSwith.addEventListener('mousewheel',function(e){
				var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
				var move_s=delD>0?-30:30;
				this.scrollLeft+=move_s;
			});
		}else{
			packSwith.style.height='250px';
			packSwith.style.width='calc(40% - 2.5px)';
			packSwith.style.left='12.5px';
			packSwith.style.top='237.5px';
			packSwith.style['text-align']='center';
			packSwith.style['overflow-x']='hidden';
			packSwith.style['overflow-y']='scroll';
		};
		lib.setScroll(packSwith);
		packSwith.link_switch='all';
		packSwith.link_switch1='all';
		dialog.appendChild(packSwith);
		if(lib.config.extension_扩展ol_wjbll_fddh!=true) packSwith.style.transition='opacity 0s';
		var packSwith1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">全部</span>');
		packSwith1.style['font-size']='27px';
		packSwith1.style['line-height']='45px';
		packSwith1.style['font-family']='shousha';
		packSwith1.style['font-weight']=600;
		packSwith1.style['white-space']='nowrap';
		packSwith1.style.top='5px';
		packSwith1.style.height='40px';
		if(lib.config.extension_扩展ol_wjbll_layout=='ud'){
			packSwith1.style.left='5px';
			packSwith1.style.width='110px';
		}else{
			packSwith1.style.margin='5px';
			packSwith1.style.position='relative';
			packSwith1.style.width='126px';
		};
		packSwith1.style.borderRadius='5px';
		packSwith1.onclick=function(){
			if(packSwith.link_onTwo==undefined){
				packSwith.link_switch='all';
			}else{
				packSwith.link_switch1='all';
			};
			var div=divs.packCharacter;
			for(var i=0;i<div.childNodes.length;i++){
				if(packSwith.link_switch=='all'){
					div.childNodes[i].style.display='';
				}else{
					if(packSwith.link_switch.contains(div.childNodes[i].link)){
						div.childNodes[i].style.display='';
					};
				};
			};
		};
		packSwith1.style.transition='opacity 0.5s';
		if(lib.config.button_press){
			packSwith1.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
				this.style.transform='scale(0.95)';
			});
			packSwith1.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
				this.style.transform='';
			});
		};
		packSwith.appendChild(packSwith1);
		var groups={};
		for(var i in lib.characterPack[name]){
			var character=lib.characterPack[name][i];
			if(groups[character[1]]==undefined) groups[character[1]]=[];
			groups[character[1]].push(i);
		};
		var list=[];
		var groups_name=[];
		for(var i in groups){
			list.push(groups[i]);
			groups_name.push(i);
		};
		if(lib.characterSort!=undefined&&lib.characterSort[name]!=undefined){
			var num=0;
			var characters=[];
			for(var i in lib.characterPack[name]){
				characters.push(i);
			};
			for(var i in lib.characterSort[name]){
				for(var j=0;j<lib.characterSort[name][i].length;j++){
					characters.remove(lib.characterSort[name][i][j]);
				};
				var packSwith1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">'+get.translation(i)+'</span>');
				packSwith1.style['font-size']='27px';
				packSwith1.style['line-height']='45px';
				packSwith1.style['font-family']='shousha';
				packSwith1.style['font-weight']=600;
				packSwith1.style['white-space']='nowrap';
				packSwith1.style.top='5px';
				packSwith1.style.height='40px';
				if(lib.config.extension_扩展ol_wjbll_layout=='ud'){
					packSwith1.style.left=(5+125*(num+1))+'px';
					packSwith1.style.width='110px';
				}else{
					packSwith1.style.margin='5px';
					packSwith1.style.position='relative';
					packSwith1.style.width='126px';
				};
				packSwith1.style.borderRadius='5px';
				packSwith1.link=lib.characterSort[name][i];
				packSwith1.onclick=function(){
					packSwith.link_switch=this.link;
					if(list.length>=2){
						packSwith.link_onTwo=true;
						for(var i=0;i<packSwith.childNodes.length;i++){
							if(packSwith.childNodes[i].innerHTML!='<span style="cursor:pointer;">全部</span>') packSwith.childNodes[i].style.display='none';
							if(packSwith.childNodes[i].link_name!=undefined) packSwith.childNodes[i].style.display='';
						};
					};
					var div=divs.packCharacter;
					for(var i=0;i<div.childNodes.length;i++){
						div.childNodes[i].style.display='none';
					};
					for(var i=0;i<div.childNodes.length;i++){
						if(packSwith.link_switch=='all'){
							if(packSwith.link_switch1=='all'){
								div.childNodes[i].style.display='';
							}else{
								if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
							};
						}else{
							if(packSwith.link_switch.contains(div.childNodes[i].link)){
								if(packSwith.link_switch1=='all'){
									div.childNodes[i].style.display='';
								}else{
									if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
								};
							};
						};
					};
				};
				packSwith1.style.transition='opacity 0.5s';
				if(lib.config.button_press){
					packSwith1.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
						this.style.transform='scale(0.95)';
					});
					packSwith1.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
						this.style.transform='';
					});
				};
				packSwith.appendChild(packSwith1);
				num++;
			};
			if(characters.length>0){
				for(var j=0;j<lib.characterSort[name][i].length;j++){
					characters.remove(lib.characterSort[name][i][j]);
				};
				var packSwith1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">其他</span>');
				packSwith1.style['font-size']='27px';
				packSwith1.style['line-height']='45px';
				packSwith1.style['font-family']='shousha';
				packSwith1.style['font-weight']=600;
				packSwith1.style['white-space']='nowrap';
				packSwith1.style.top='5px';
				packSwith1.style.height='40px';
				if(lib.config.extension_扩展ol_wjbll_layout=='ud'){
					packSwith1.style.left=(5+125*(num+1))+'px';
					packSwith1.style.width='110px';
				}else{
					packSwith1.style.margin='5px';
					packSwith1.style.position='relative';
					packSwith1.style.width='126px';
				};
				packSwith1.style.borderRadius='5px';
				packSwith1.link=characters;
				packSwith1.onclick=function(){
					packSwith.link_switch=this.link;
					packSwith.link_onTwo=true;
					for(var i=0;i<packSwith.childNodes.length;i++){
						if(packSwith.childNodes[i].innerHTML!='<span style="cursor:pointer;">全部</span>') packSwith.childNodes[i].style.display='none';
						if(packSwith.childNodes[i].link_name!=undefined) packSwith.childNodes[i].style.display='';
					};
					var div=divs.packCharacter;
					for(var i=0;i<div.childNodes.length;i++){
						div.childNodes[i].style.display='none';
					};
					for(var i=0;i<div.childNodes.length;i++){
						if(packSwith.link_switch=='all'){
							if(packSwith.link_switch1=='all'){
								div.childNodes[i].style.display='';
							}else{
								if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
							};
						}else{
							if(packSwith.link_switch.contains(div.childNodes[i].link)){
								if(packSwith.link_switch1=='all'){
									div.childNodes[i].style.display='';
								}else{
									if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
								};
							};
						};
					};
				};
				packSwith1.style.transition='opacity 0.5s';
				if(lib.config.button_press){
					packSwith1.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
						this.style.transform='scale(0.95)';
					});
					packSwith1.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
						this.style.transform='';
					});
				};
				packSwith.appendChild(packSwith1);
				num++;
			};
		};
		if(list.length>=2){
			for(var i=0;i<list.length;i++){
				var packSwith1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">'+get.translation(groups_name[i])+'</span>');
				packSwith1.style['font-size']='27px';
				packSwith1.style['line-height']='45px';
				packSwith1.style['font-family']='shousha';
				packSwith1.style['font-weight']=600;
				packSwith1.style['white-space']='nowrap';
				packSwith1.style.top='5px';
				packSwith1.style.height='40px';
				if(lib.config.extension_扩展ol_wjbll_layout=='ud'){
					packSwith1.style.left=(5+125*(i+1))+'px';
					packSwith1.style.width='110px';
				}else{
					packSwith1.style.margin='5px';
					packSwith1.style.position='relative';
					packSwith1.style.width='126px';
				};
				packSwith1.style.borderRadius='5px';
				packSwith1.link=list[i];
				packSwith1.link_name=name;
				packSwith1.onclick=function(){
					packSwith.link_switch1=this.link;
					var div=divs.packCharacter;
					for(var i=0;i<div.childNodes.length;i++){
						div.childNodes[i].style.display='none';
					};
					for(var i=0;i<div.childNodes.length;i++){
						if(packSwith.link_switch=='all'){
							if(packSwith.link_switch1=='all'){
								div.childNodes[i].style.display='';
							}else{
								if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
							};
						}else{
							if(packSwith.link_switch.contains(div.childNodes[i].link)){
								if(packSwith.link_switch1=='all'){
									div.childNodes[i].style.display='';
								}else{
									if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
								};
							};
						};
					};
				};
				packSwith1.style.transition='opacity 0.5s';
				if(lib.config.button_press){
					packSwith1.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
						this.style.transform='scale(0.95)';
					});
					packSwith1.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
						this.style.transform='';
					});
				};
				packSwith.appendChild(packSwith1);
				if(lib.characterSort!=undefined&&lib.characterSort[name]!=undefined) packSwith1.style.display='none';
			};
		};
		var packSwith1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">返回</span>');
		packSwith1.style['font-size']='27px';
		packSwith1.style['line-height']='45px';
		packSwith1.style['font-family']='shousha';
		packSwith1.style['font-weight']=600;
		packSwith1.style['white-space']='nowrap';
		packSwith1.style.top='5px';
		packSwith1.style.height='40px';
		if(lib.config.extension_扩展ol_wjbll_layout=='ud'){
			packSwith1.style.left=(5+125*(list.length+1))+'px';
			packSwith1.style.width='110px';
		}else{
			packSwith1.style.margin='5px';
			packSwith1.style.position='relative';
			packSwith1.style.width='126px';
		};
		packSwith1.style.borderRadius='5px';
		packSwith1.style.display='none';
		packSwith1.link_name='返回';
		packSwith1.onclick=function(){
			packSwith.link_switch1='all';
			delete packSwith.link_onTwo;
			for(var i=0;i<packSwith.childNodes.length;i++){
				if(packSwith.childNodes[i].innerHTML!='<span style="cursor:pointer;">全部</span>') packSwith.childNodes[i].style.display='none';
				if(packSwith.childNodes[i].link_name!=undefined){
					packSwith.childNodes[i].style.display='none';
				}else{
					packSwith.childNodes[i].style.display='';
				};
			};
			var div=divs.packCharacter;
			for(var i=0;i<div.childNodes.length;i++){
				if(packSwith.link_switch=='all'){
					if(packSwith.link_switch1=='all'){
						div.childNodes[i].style.display='';
					}else{
						if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
					};
				}else{
					if(packSwith.link_switch.contains(div.childNodes[i].link)){
						if(packSwith.link_switch1=='all'){
							div.childNodes[i].style.display='';
						}else{
							if(packSwith.link_switch1.contains(div.childNodes[i].link)) div.childNodes[i].style.display='';
						};
					};
				};
			};
		};
		packSwith1.style.transition='opacity 0.5s';
		if(lib.config.button_press){
			packSwith1.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
				this.style.transform='scale(0.95)';
			});
			packSwith1.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
				this.style.transform='';
			});
		};
		packSwith.appendChild(packSwith1);
		var packCharacter=ui.create.div('.menu');
		if(lib.config.extension_扩展ol_wjbll_layout=='ud'){
			packCharacter.style.height='250px';
			packCharacter.style.width='calc(100% - 25px)';
			packCharacter.style.left='12.5px';
			packCharacter.style.top='237.5px';
		}else{
			packCharacter.style.height='422.5px';
			packCharacter.style.width='calc(60% - 35px)';
			packCharacter.style.right='12.5px';
			packCharacter.style.top='65px';
		};
		packCharacter.style['text-align']='left';
		packCharacter.style['overflow-x']='hidden';
		packCharacter.style['overflow-y']='scroll';
		lib.setScroll(packCharacter);
		dialog.appendChild(packCharacter);
		if(lib.config.extension_扩展ol_wjbll_fddh!=true) packCharacter.style.transition='opacity 0s';
		if(lib.config.extension_扩展ol_wjbll_layout=='ud'){
			packCharacter.ondblclick=function(e){
				e.preventDefault();
				if(this.link_kzol_clicked==true){
					delete this.link_kzol_clicked;
					packSwith.style.top='165px';
					packCharacter.style['zIndex']=0;
					packCharacter.style.height='250px';
					packCharacter.style.top='237.5px';
				}else{
					this.link_kzol_clicked=true;
					packSwith.style.top=(packCharacter.offsetTop+packCharacter.offsetHeight+15)+'px';
					packCharacter.style.height='calc(100% - 25px)';
					packCharacter.style.top='12.5px';
					packCharacter.style['zIndex']=5;
				};
			};
		};
		divs.packCharacter=packCharacter;
		var characterButtons=[];
		for(var i in lib.characterPack[name]){
			characterButtons.push(i);
		};
		if(characterButtons.length>0){
			var interval;
			setTimeout(function(){
				interval=setInterval(function(){
					var num=50;
					if(num>characterButtons.length) num=characterButtons.length;
					for(var i=0;i<num;i++){
						var character=lib.characterPack[name][characterButtons[0]];
						var bool=false;
						if(!lib.connectBanned.contains(characterButtons[0])&&lib.program.character[name]!=undefined&&name!='bwp'&&name!='ALX'&&name!='yhzr'&&name!='djl') bool=true;
						var characterButton=game.wjbll_createButton(characterButtons[0],bool);
						characterButton.link=characterButtons[0];
						characterButton.onclick=function(){
							if(lib.kzol_jswj_character[this.link]==undefined||
							(lib.kzol_jswj_character[this.link]!=undefined&&lib.config.kzol_jswj[this.link]==true)) ui.click.charactercard(this.link);
						};
						if(name=='mode_extension_卡战图鉴') characterButton.style.display='none';
						packCharacter.appendChild(characterButton);
						characterButtons.remove(characterButtons[0]);
					};
					if(characterButtons.length==0) clearInterval(interval);
				},100);
			},lib.config.extension_扩展ol_wjbll_load==true?10:300);
		};
		var style1={
			'zIndex':5,
			'white-space':'nowrap',
			'text-align':'center',
			'font-size':'20px',
			'line-height':'19px',
			'font-family':"'STXinwei','xinwei'",
			'cursor':'pointer',
			'borderRadius':'5px',
			'height':'40px',
			'width':'130px',
			'bottom':'3px',
			'animation':'fadelogIn .4s',
			'-webkit-animation':'fadelogIn .4s',
		};
		if(characterPackInfo[name]!=undefined&&characterPackInfo[name].url!=undefined){
			var urls=characterPackInfo[name].url;
			var num1=0;
			for(var i in urls){
				var button1=ui.create.div('.menu');
				for(var j in style1){
					button1.style[j]=style1[j];
				};
				button1.style.right=(3+135*num1)+'px';
				button1.style.transition='opacity 0.5s';
				ui.window.appendChild(button1);
				if(lib.config.button_press){
					button1.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
						this.style.transform='scale(0.95)';
					});
					button1.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
						this.style.transform='';
					});
				};
				if(i.indexOf('官网')!=-1){
					button1.style['font-size']='25px';
					button1.style['line-height']='40px';
					button1.innerHTML=i;
				}else{
					button1.innerHTML='设计贴<br>'+i;
				};
				button1.link=urls[i];
				button1.onclick=function(){
					if(this.link=='已删贴'){
						game.say1('设计贴已被删除');
					}else{
						game.open(this.link);
					};
				};
				dialog1[num1]=button1;
				num1++;
			};
		};
		if(name=='mode_extension_卡战图鉴'){
			game.say1('需加载卡牌较多，默认隐藏所有卡牌，稍等后点击选择条件即可显示');
		};
		var div=ui.create.div('');
		div.style.height='calc(100%)';
		div.style.width='calc(100%)';
		div.style.left='0px';
		div.style.top='0px';
		//if(lib.config['extension_扩展ol_'+name]!=undefined){
		if(lib.program&&lib.program.character&&lib.program.character[name]){
			var forbid=ui.create.div();
			forbid.classList.add('popped');
			forbid.classList.add('static');
			forbid.style.height='34px';
			forbid.style.width='85px';
			forbid.style.bottom='2px';
			forbid.style.right='5px';
			forbid.style.borderRadius='5px';
			forbid.style['text-align']='center';
			forbid.style['font-size']='25px';
			forbid.style['line-height']='34px';
			forbid.style['font-family']="'STXinwei','xinwei'";
			forbid.style['background-image']='linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))';
			forbid.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			forbid.style['cursor']='pointer';
			forbid.style['background-image']='linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4))';
			//forbid.style['z-index']=22;
			if(lib.config['extension_扩展ol_'+name]==true){
				forbid.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">禁用中</span>';
				forbid.style.backgroundColor="rgb(255, 0, 0)";
			}else{
				forbid.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">启用中</span>';
				forbid.style.backgroundColor="rgb(0, 255, 0)";
			};
			forbid.link=name;
			forbid.link1=node;
			forbid.onclick=function(){
				var name=this.link;
				var node=this.link1;
				if(this.innerHTML=='<span style="color:white;text-shadow:black 0 0 2px;">禁用中</span>'){
					game.saveConfig('extension_扩展ol_'+name,false);
					this.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">启用中</span>';
					forbid.style.backgroundColor="rgb(0, 255, 0)";
					node.classList.remove('off');
					game.say1('启用'+lib.program.character[name]+'包成功');
				}else{
					game.saveConfig('extension_扩展ol_'+name,true);
					this.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">禁用中</span>';
					forbid.style.backgroundColor="rgb(255, 0, 0)";
					node.classList.add('off');
					game.say1('禁用'+lib.program.character[name]+'包成功');
				};
			};
			packName.appendChild(forbid);
		};
		var func1=function(){
			ui.system.style.display='';
			//ui.menuContainer.style.display='';
			setTimeout(function(){
				//ui.click.configMenu();
				ui.menuContainer.style.display='';
			},500);
			for(var i in dialog1){
				dialog1[i].delete();
			};
		};
		setTimeout(function(){
			div.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
				func1();
				if(interval!=undefined) clearInterval(interval);
			});
		},750);
		background.appendChild(div);
	};
	var kzol_uiCreateDiv=ui.create.div;
	ui.create.div=function(){
		var list=[];
		var listen;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i]=='function'){
				listen=arguments[i];
			}else{
				list.push(arguments[i]);
			};
		};
		var node=kzol_uiCreateDiv.apply(null,list);
		if(_status.connectMode==undefined){
			if(node.innerHTML!=undefined&&node.innerHTML!=''&&arguments[0]=='.menubutton.large'&&
			node.parentNode!=undefined&&node.parentNode.classList!=undefined&&
			node.parentNode.classList[0]=='left'&&node.parentNode.classList[1]=='pane'&&node.parentNode.classList.length==2){
				var bool=false;
				if(lib.program!=undefined){
					for(var i in lib.program.character){
						if(node.innerHTML==lib.translate[i+'_character_config']){
							bool=true;
							node.link_pack=i;
						};
					};
				};
				if(node.innerHTML=='僵尸'){
					bool=true;
					node.link_pack='zombie';
				};
				if(node.innerHTML=='<span style=\"font-size:17px;font-weight:600\">扩展ol-BOSS</span>'){
					bool=true;
					node.link_pack='mode_extension_<span style="font-size:17px;font-weight:600">扩展ol-BOSS</span>';
				};
				if(node.innerHTML=='卡战图鉴'){
					bool=true;
					node.link_pack='mode_extension_卡战图鉴'
				};
				if(node.innerHTML=='<span>王者之战</span>'){
					bool=true;
					node.link_pack='mode_extension_<span>王者之战</span>';
				};
				if(node.innerHTML=='<span>千秋万载</span>'){
					bool=true;
					node.link_pack='mode_extension_<span>千秋万载</span>';
				};
				if(node.innerHTML=='<span>一统江山</span>'){
					bool=true;
					node.link_pack='mode_extension_<span>一统江山</span>';
				};
				if(node.innerHTML=='<span style="font-size:20px">Fate.Eternity</span>'){
					bool=true;
					node.link_pack='mode_extension_<span style="font-size:20px">Fate.Eternity</span>';
				};
				if(node.innerHTML=='奥拉星S'){
					bool=true;
					node.link_pack='mode_extension_奥拉星S';
				};
				if(bool==true){
					if(listen) listen=false;
					node.onclick=function(){
						game.kzol_openCharacterPack(this.link_pack,node);
					};
				};
			};
		};
		if(listen) node.listen(listen);
		return node;
	};
}