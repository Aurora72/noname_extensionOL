window.func=function(lib,game,ui,get,ai,_status){
	if(lib.config.kzol_jswj==undefined) game.saveConfig('kzol_jswj',{});
	lib.kzol_jswj_character={
		'mnyhzr灭世魔星':{
			info:["male","li",4,['nyhzr小僵尸dj'],["ext:扩展ol/mnyhzr灭世魔星.jpg","des:<li>并不是每一个婴孩的诞生都得到祝福，犼面锁灵想起初见破靡的景象，一念竟觉已千年。<li>是时魔星出世，天象异乱，来自于太虚混沌的上神们急于知寻襁褓下落，围攻走影谷。破靡双亲虽贵为尸王尸后，也难敌神罚，不死之身归于尘土。谷中密道内通洪流，怒江之水直逼外界天地，肤体冥蓝的婴孩安睡于骨床中顺流疾走，周身尸气盘附，水不沾襟。上神们逐密道而出，却看那安胎骨床经过之处水流一退千里，河岸接壤处草被衰败，这刚出世的尸气便要枯了一整条水路，好在方圆几里渺无人畜，上神们及时截下这灭世胎，护天地人间一份安宁。<li>尸者，集天界晦气,取阴界死气,汇人界怨气而生。僵尸与僵尸所诞之子，溶混沌为体肉，赤瞳冥肤，无魄却任可生长，有别于一般走尸，唤为魔星。所幸世上仅会存有一位魔星，破靡不死，便无后者。上神们为绝后患，决定以神力铸成犼面锁缠绕骨床，贴附上古灵文封印魔星尸气，使其不生不长，永为婴孩，隐于落神坡。<li>当犼面锁因神力产生灵识之时，它陪护破靡已有数百年，从锁孔释放幽蓝色魂光，生成双手，小心翼翼地包裹着破靡。怀里的婴孩由于封印已无尸气，柔弱地好似一般胎儿，时而清醒，因双手被缠住有些恼怒，锁灵便偷偷放松链条，让他动个快活，这泼劲差点没把符文给撕扯坏；如若昏睡，锁灵便为他挡雨遮阳，驱虫赶兽，图个安眠。年华见长，符文越发残破，封印渐失，锁链被尸气灼断，本应及时向上神传信的锁灵，却有了心事，看着魔星从牙牙学语到少年模样，一拖再拖。不知是天资过人还是其他，破靡学话极快，缠着锁灵说自己会乖乖的不想再被捆着，心软彻底变为宠溺。<li>锁灵从初见继续想到破靡第一次落地。那时破靡跑到落神坡脚的花田，脚踏处花草枯竭，他开始意识到自己的尸气会给周围带来不幸，一路大跑直入锁灵怀抱哭诉，让尸气烧坏了犼面锁身的其他地方，发现后懊恼的趴在地上捶骂自己，他抬头，瞪着赤红大眼小心翼翼地问，“我以后还能抱你吗。”真是无可奈何，锁灵花了好久的功夫刚把这小东西哄好，破靡立马又被蛇吞兔吸引了注意，一个飞扑上前，用尸气让两者皆幻为走影，赋予永生，他拍拍蛇与兔的头告诫二位要友好往来，完后对锁灵挑着眉毛，“我的尸气有时候还是蛮有用的嘛！”。<li>眼下犼面锁身已千穿百孔，破靡忧心忡忡，碰也不是不碰也不是。锁灵暗暗决定要保护这个少年，哪怕要违逆上神，它也愿意相信自己所看到的纯粹。它对破靡说，“我的身已残败不堪，一旦损毁，上神便会有所感应。你虽有不死之身却盖不住尸气，而我的灵力可助你迷惑上神，无论你逃之何处，我只愿你童心依旧，天真长久。”语罢，魂光移体，那锁不再是锁，在灵气与尸气交融下越长越大，附着于破靡肩背，灵志尽失。<li>待合魂完毕，破靡方才露出一丝邪魅的笑容。对空一声口哨，唤来了尸蛇与兔，蹲下不耐烦地歪着头，听着尸兽的倾吐。末了兴奋地一拍腿，“找到村庄了？好啊，这场戏演了千年，终于可以吃人了。”<li>只见少年走向落神坡脚，信步缓缓，踩蔫了整片花田。"]],
			pack:'nyhzrlj',
			info_condition:function(){
				var num=0;
				var str2='未开始';
				if(lib.config.尸魂!=undefined){
					num=lib.config.尸魂/100;
					str2=lib.config.尸魂+'/'+100;
				};
				var str1=parseFloat((num*100).toFixed(2))+'%';
				return ['集满100尸魂',str1,str2];
			},
		},
		'djl_细雪之舞':{
			info:["female","djl",3,['djl_念雪','djl_轻盈'],["ext:扩展ol/djl_细雪之舞.jpg","des:蕴含有寒冬冰雪气息的刀。"]],
			pack:'djl',
			info_condition:function(){
				var num=0;
				var str2='未开始';
				for(var i in lib.config.kzol_bag){
					var item=lib.config.kzol_bag[i];
					if(item.ext_name!='xixuezhiwu') continue;
					if(item.hg_base==undefined||item.hg_max==undefined) continue;
					var num1=item.hg_base/item.hg_max;
					if(num1>num){
						num=num1;
						str2=item.hg_base+'/'+item.hg_max;
					};
				};
				for(var i in lib.config.kzol_bw){
					var item=lib.config.kzol_bw[i];
					if(item.ext_name!='xixuezhiwu') continue;
					if(item.hg_base==undefined||item.hg_max==undefined) continue;
					var num1=item.hg_base/item.hg_max;
					if(num1>num){
						num=num1;
						str2=item.hg_base+'/'+item.hg_max;
					};
				};
				var str1=parseFloat((num*100).toFixed(2))+'%';
				return ['宝物【细雪之舞】满觉醒度',str1,str2];
			},
		},
	};
	var character=lib.kzol_jswj_character;
	for(var i in character){
		lib.connectBanned.push(i);
		var info=character[i].info;
		if(lib.config.kzol_jswj[i]==true){
			lib.character[i]=info;
		}else{
			if(info[4]!=undefined) info[4].push('forbidai');
			lib.character[i]=[info[0],info[1],'未解锁',[],info[4]];
		};
		if(lib.characterPack[character[i].pack]!=undefined){
			lib.characterPack[character[i].pack][i]=lib.character[i];
		}else if(lib.characterPack['c_zx']!=undefined){
			lib.characterPack['c_zx'][i]=lib.character[i];
		};
		if(lib.config['extension_扩展ol_'+character[i].pack]==true){
			if(lib.character[i][4]!=undefined) lib.character[i][4].push('forbidai');
		};
	};
	lib.kzol_nodeintro['jswj_skill']=function(uiintro,character,skills){
		if(lib.kzol_jswj_character[character]==undefined) return ;
		if(lib.config.kzol_jswj&&lib.config.kzol_jswj[character]==true) return ;
		var skills=lib.kzol_jswj_character[character].info[3];
		for(i=0;i<skills.length;i++){
			if(lib.translate[skills[i]+'_info']){
				translation=lib.translate[skills[i]+'_ab']||get.translation(skills[i]).slice(0,2);
				if(lib.skill[skills[i]]&&lib.skill[skills[i]].nobracket){
					uiintro.add('<div><div class="skill">'+get.translation(skills[i])+'</div><div>'+get.skillInfoTranslation(skills[i])+'</div></div>');
				}
				else{
					uiintro.add('<div><div class="skill">【'+translation+'】</div><div>'+get.skillInfoTranslation(skills[i])+'</div></div>');
				}
				if(lib.translate[skills[i]+'_append']){
					uiintro._place_text=uiintro.add('<div class="text">'+lib.translate[skills[i]+'_append']+'</div>')
				}
			}
		}
	};
	var skill={
		"nyhzr小僵尸dj":{
			nobracket:true,
			trigger:{
				player:"phaseAfter",
			},
			filter:function (event,player){
				return player.storage.nyhzr小僵尸!=0;
			},
			forced:true,
			content:function (){
				var fellow=game.addFellow(1,'nyhzr小僵尸');
				fellow.style.left='calc(80%)';
				fellow.style.top='calc(50%)';
				fellow.classList.add('minskin');
				fellow.side=player.side;
				fellow.identity=player.identity;
				if(fellow.identity=='zhu') fellow.identity='zhong';
				fellow.setIdentity('小僵尸');
				fellow.draw(4)
				fellow.node.identity.dataset.color=fellow.identity;
				player.storage.nyhzr小僵尸=0;
			},
		},
		"djl_念雪":{
			trigger:{
				source:'damageAfter'
			},
			filter:function(event,player){
				return event.player!=player&&!event.player.hasSkill('djl_念雪1');
			},
			content:function (){
				"step 0"
				player.judge('djl_念雪',function(card){
					return (get.color(card)=='black')?1:-1;
				});
				"step 1"
				if(result.judge>0){
					player.line(trigger.player,'water');
					trigger.player.djl_frozen();
				};
			},
		},
		"djl_轻盈":{
			trigger:{
				player:'gainAfter'
			},
			filter:function(event,player){
				return event.cards&&event.cards.length>0&&event.kzol_reason!='djl_轻盈';
			},
			check:function(event,player){
				if(!event.cards) return false;
				if(event.cards.length==0) return false;
				var value=0;
				for(var i=0;i<event.cards.length;i++){
					var card=event.cards[i];
					if(card.name=='du') return false;
					value+=get.value(card);
				};
				if(value>event.cards.length*5) return false;
				return true;
			},
			content:function (){
				'step 0'
				player.discard(trigger.cards);
				'step 1'
				player.gain(get.cards(trigger.cards.length),'draw').kzol_reason='djl_轻盈';
			},
		},
	};
	var translate={
		"djl_细雪之舞":"细雪之舞",
		"djl_念雪":"念雪",
		"djl_念雪_info":"当你对其他角色造成伤害后，你可以进行一次判定，若判定结果为黑色，其进入冰封状态",
		"djl_念雪_append":"冰封:下个回合无法行动",
		"djl_轻盈":"轻盈",
		"djl_轻盈_info":"当你不以此法获得牌后，你可以弃置这些牌，然后从牌堆顶获得等量的牌",
		"mnyhzr灭世魔星":"灭世魔星",
		"nyhzr小僵尸dj":"小僵尸",
		"nyhzr小僵尸dj_info":"<span class=\"bluetext\" style=\"color:#EE7621\">被动：</span><br>回合结束阶段，若你没有召唤过小僵尸，你在左下角召唤一只小僵尸，势力与你相同（若你为主公，小僵尸则为忠臣）",
	};
	for(var i in skill){
		lib.skill[i]=skill[i];
	};
	for(var i in translate){
		lib.translate[i]=translate[i];
	};
	lib.kzol_nodeintro['jswj']=function(uiintro,character,skills){
		if(lib.config['extension_扩展ol_jswj_show']==false) return ;
		if(!uiintro||!character) return ;
		if(lib.kzol_jswj_character[character]==undefined) return ;
		if(lib.kzol_jswj_character[character].info_condition==undefined) return ;
		if(lib.config.kzol_jswj[character]==true) return ;
		var list=lib.kzol_jswj_character[character].info_condition();
		if(list==undefined||list.length!=3) return ;
		var div1=ui.create.div('.menu');
		div1.style.width='246px';
		div1.style.position='fixed';
		div1.style.borderRadius='5px';
		div1.style.transition='all 0s';
		div1.style['text-align']='center';
		div1.style.animation='fadeShow .3s';
		div1.style['-webkit-animation']='fadeShow .3s';
		div1.style['pointer-events']='none';
		var str='<table style="width:100%;" border="1">'+
		'<tr>'+
		'<td width="30%" style="text-align:center;vertical-align:middle;">'+
		'解锁条件'+
		'</td>'+
		'<td width="70%" style="text-align:center;vertical-align:middle;">'+
		list[0]+
		'</td>'+
		'</tr>'+
		'<tr>'+
		'<td width="30%" style="text-align:center;vertical-align:middle;">'+
		'解锁进度'+
		'</td>'+
		'<td width="70%" style="text-align:center;vertical-align:middle;">'+
		list[1]+'（'+list[2]+'）'+
		'</td>'+
		'</tr>'+
		'</table>';
		div1.innerHTML=str;
		var div=ui.create.div();
		//div.style.right='3px';
		//if(lib.config['extension_扩展ol_zxhxsl_show']=='img'){
		//暂无图片显示
		if(false){
			div.style.height='30px';
			div.style.width='30px';
			div.style.top='0px';
			if(lib.config['extension_扩展ol_zxhxsl_pos']=='left'||lib.config['extension_扩展ol_zxhxsl_pos']=='right'){
				div.style['margin-top']='-3px';
				div.style['margin-left']='-1px';
			}else{
				div.style['margin-top']='-1px';
				div.style['margin-left']='1px';
			};
			div.setBackgroundImage('extension/扩展ol/zhulianbihe.png');
			div.style.backgroundSize="100% 100%";
		}else{
			div.style.height='25px';
			div.style.width='25px';
			if(lib.config['extension_扩展ol_zxhxsl_pos']=='top'||lib.config['extension_扩展ol_zxhxsl_pos']=='bottom_in') div.style.top='8px';
			if(lib.config['extension_扩展ol_zxhxsl_pos']=='left') div.style.left='3px';
			if(lib.config['extension_扩展ol_zxhxsl_pos']=='right') div.style.left='-3px';
			div.style['font-size']='20px';
			div.style['text-align']='center';
			div.style['font-family']='shousha';
			div.style['line-height']='25px';
			div.style['text-shadow']='black 0 0 2px';
			div.style['font-weight']='600';
			div.style.color='white';
			div.innerHTML='锁';
		};
		div.style.position='relative';
		div.onclick=function(e){
			e.stopPropagation();
		};
		div.onmouseover=function(){
			div1.style.left=(event.clientX/game.documentZoom+10+document.body.scrollLeft-123)+'px';
			div1.style.top=(event.clientY/game.documentZoom+document.body.scrollTop+(lib.device?0:20))+'px';
			if(div1.offsetTop+div1.offsetHeight>ui.window.offsetTop+ui.window.offsetHeight){
				div1.style.top=(event.clientY/game.documentZoom+document.body.scrollTop-div1.offsetHeight)+'px';
			};
			uiintro.appendChild(div1);
		};
		div.onmousemove=function(){
			div1.style.left=(event.clientX/game.documentZoom+10+document.body.scrollLeft-123)+'px';
			div1.style.top=(event.clientY/game.documentZoom+document.body.scrollTop+(lib.device?0:20))+'px';
			if(div1.offsetTop+div1.offsetHeight>ui.window.offsetTop+ui.window.offsetHeight){
				div1.style.top=(event.clientY/game.documentZoom+document.body.scrollTop-div1.offsetHeight)+'px';
			};
		};
		div.onmouseout=function(){
			uiintro.removeChild(div1);
		};
		uiintro.kzol_nodeintro.appendChild(div);
	};
}