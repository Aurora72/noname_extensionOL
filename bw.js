window.func=function(lib,game,ui,get,ai,_status){
	lib.onover.push(function(result){
		if(lib.config['extension_扩展ol_bw_forbidden']==true) return;
		if(lib.config.kzol_bw[game.me.name]!=undefined){
			var item=lib.config.kzol_bw[game.me.name];
			if(item.hg_base!=undefined&&item.hg_max!=undefined&&item.hg_finfish!=undefined&&item.hg_max>item.hg_base){
				item.hg_base++;
				game.saveConfig('kzol_bw',lib.config.kzol_bw);
				game.say1(get.translation(item.name)+'觉醒度+1');
				if(item.hg_base>=item.hg_max) eval(item.hg_finfish);
			};
		};
		if(game.me.name2!=undefined&&lib.config.kzol_bw[game.me.name2]!=undefined){
			var item=lib.config.kzol_bw[game.me.name2];
			if(item.hg_base!=undefined&&item.hg_max!=undefined&&item.hg_finfish!=undefined&&item.hg_max>item.hg_base){
				item.hg_base++;
				game.saveConfig('kzol_bw',lib.config.kzol_bw);
				game.say1(get.translation(item.name)+'觉醒度+1');
				if(item.hg_base>=item.hg_max) eval(item.hg_finfish);
			};
		};
	});
	//lib.kzol_bw_skill={};
	if(lib.config.kzol_bag_num==undefined) game.saveConfig('kzol_bag_num',0);
	if(lib.kzol_bag==undefined) lib.kzol_bag={};
	if(lib.config.kzol_bag==undefined) lib.config.kzol_bag={};
	game.saveConfig('kzol_bag',lib.config.kzol_bag);
	var bag={
		'baozhu':{
			name:'baozhu',
			info:'装备后，你的首个回合开始时，随机获得一项增益效果',
			type:'baowu',
			canLay:false,
		},
		'qianmian':{
			name:'qianmian',
			info:'装备后，你可以在合适的时机发动其他角色限制回合内使用次数的技能，每局使用三次后失去身上所有宝物效果',
			type:'baowu',
			canLay:false,
		},
		'xukongdajian':{
			name:'xukongdajian',
			info:'装备后，你造成伤害时，目标不会触发技能',
			type:'baowu',
			canLay:false,
			noBorder:true,
		},
		'shengmingshuijing':{
			name:'shengmingshuijing',
			info:'装备后，你的体力上限+1',
			type:'baowu',
			canLay:false,
		},
		'xixuezhiwu':{
			name:'xixuezhiwu',
			info:'装备后，你获得技能【念雪】直至场上任意一名角色冰封后',
			type:'baowu',
			canLay:false,
			hg_base:0,
			hg_max:99,
			hg_finfish:'if(lib.config.kzol_jswj==undefined){lib.config.kzol_jswj={};};if(lib.config.kzol_jswj.djl_细雪之舞!=true){lib.config.kzol_jswj.djl_细雪之舞=true;game.saveConfig("kzol_jswj", lib.config.kzol_jswj);game.say1("解锁刀剑录武将——细雪之舞");}else{game.say1("重复解锁刀剑录武将——细雪之舞");game.gainItem("shuijing",500);};',
		},
	};
	for(var i in lib.characterPack){
		for(var j in lib.characterPack[i]){
			var character=lib.characterPack[i][j];
			if(character!=undefined){
				var bw_name='kzol_bw_lhs_'+j;
				var info='装备后，身份、成对、无尽模式中，游戏开始时，你召唤'+get.translation(j)+'为你作战三个回合';
				bag[bw_name]={
					name:bw_name,
					character:j,
					info:info,
					type:'baowu',
					canLay:false,
				};
				lib.translate[bw_name]='灵魂碎片：'+get.translation(j);
				lib.skill['kzol_bw_'+bw_name]={
					nobracket:true,
					mode:['identity','partner','wjms'],
					intro:{
						content:info.slice(4,info.length),
					},
					mark:true,
					kzol_bw_lhsCharacter:j,
				};
				lib.translate['kzol_bw_'+bw_name]='灵魂碎片：'+get.translation(j);
				lib.translate['kzol_bw_'+bw_name+'_info']=info.slice(4,info.length);
			};
		};
	};
	lib.skill._kzol_bw_lhs={
		nobracket:true,
		mode:['identity','partner','wjms'],
		trigger:{
			global:'gameStart',
		},
		forced:true,
		priority:-Infinity,
		popup:false,
		content:function(){
			for(var i in player.skills){
				if(lib.skill[player.skills[i]]&&lib.skill[player.skills[i]].kzol_bw_lhsCharacter!=undefined){
					var fellow=game.addShibing(lib.skill[player.skills[i]].kzol_bw_lhsCharacter,player);
					fellow.setIdentity('灵');
					fellow.node.identity.dataset.color='cai';
					fellow.storage.kzol_lhs=true;
				};
			};
		},
	};
	lib.skill._kzol_bw_die={
		trigger:{
			player:'phaseAfter',
		},
		forced:true,
		popup:false,
		filter:function(event,player){
			return player.storage.kzol_lhs!=undefined;
		},
		content:function(){
			if(player.storage.kzol_lhs1==undefined) player.storage.kzol_lhs1=0;
			player.storage.kzol_lhs1++;
			if(player.storage.kzol_lhs1==3) player.die();
		},
	};
	for(var i in bag){
		var item=bag[i];
		lib.kzol_bag[i]=item;
	};
	if(lib.kzol_charactercard_func==undefined) lib.kzol_charactercard_func={};
	lib.kzol_charactercard_func['createBwEquip']=function(name,sourcenode,noedit,resume,avatar){
		if(lib.config['extension_扩展ol_bw_hide']==true) return ;
		var bool=false;
		for(var j in lib.characterPack){
			for(var i in lib.characterPack[j]){
				if(i==name&&(lib.characterPack[j][i][4]==undefined||!lib.characterPack[j][i][4].contains('forbidai'))) bool=true;
			};
		};
		if(bool==false) return ;
		var dialog_info=ui.create.div('.menu');
		dialog_info.style.transition='left 0s,top 0s,opacity .3s';
		dialog_info.style.width='312px';
		dialog_info.style['pointer-events']='none';
		dialog_info.style['text-align']='left';
		dialog_info.style.animation='fadeShow .3s';
		dialog_info.style['-webkit-animation']='fadeShow .3s';
		dialog_info.style['z-index']=100000;
		var div1=ui.create.div('.dialog');
		div1.style.height='50px';
		div1.style.width='50px';
		div1.style.left='calc(50% - 115px)';
		div1.style.top='calc(50% + 45px)';
		div1.style.cursor='pointer';
		div1.style['z-index']=21;
		var item=lib.config.kzol_bw[name];
		div1.link2=item;
		if(lib.config['extension_扩展ol_bw_hide1']!=true){
			div1.onmouseover=function(){
				var item=this.link2;
				if(item==undefined) return;
				var info2='';
				info2='可叠加';
				if(item.canLay==false) info2='不可叠加';
				var info1='No Data';
				if(lib.kzol_bag[item.name]!=undefined) info1=lib.kzol_bag[item.name].info;
				if(item.ext_info!=undefined) info1=item.ext_info;
				var str='';
				str+='<span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">'+get.translation(item.ext_name)+'</span><br>'+info2+'<br>'+
				get.translation(item.type)+'<br>'+
				'数量：'+item.num;
				if(item.hg_base!=undefined&&item.hg_max!=undefined){
					str+='<br>觉醒度：'+item.hg_base+'/'+item.hg_max;
				};
				str+='<br>简介：<br>&nbsp&nbsp'+info1+'</span>';
				dialog_info.innerHTML=str;
				ui.window.appendChild(dialog_info);
				dialog_info.hide();
				dialog_info.style.left=(event.clientX/game.documentZoom+10+document.body.scrollLeft)+'px';
				dialog_info.style.top=(event.clientY/game.documentZoom+document.body.scrollTop)+'px';
				//dialog_info.style.height=(dialog_info.firstChild.offsetHeight+10)+'px';
				if(dialog_info.offsetTop+dialog_info.offsetHeight>ui.window.offsetTop+ui.window.offsetHeight){
					dialog_info.style.top=(event.clientY/game.documentZoom+document.body.scrollTop-dialog_info.offsetHeight)+'px';
				};
				dialog_info.show();
			};
			div1.onmousemove=function(){
				var item=this.link2;
				if(item==undefined) return;
				dialog_info.style.left=(event.clientX/game.documentZoom+10+document.body.scrollLeft)+'px';
				dialog_info.style.top=(event.clientY/game.documentZoom+document.body.scrollTop)+'px';
				if(dialog_info.offsetTop+dialog_info.offsetHeight>ui.window.offsetTop+ui.window.offsetHeight){
					dialog_info.style.top=(event.clientY/game.documentZoom+document.body.scrollTop-dialog_info.offsetHeight)+'px';
				};
			};
			div1.onmouseout=function(){
				var item=this.link2;
				if(item==undefined) return;
				dialog_info.hide();
			};
		};
		if(item!=undefined){
			if(item.noBorder==true){
				div1.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/'+item.name+'.png'+'")';
			}else if(item.character){
				div1.setBackground(item.character,'character');
				if(item.noBorder!=true){
					var str=div1.style.backgroundImage;
					str='url("'+lib.assetURL+'extension/扩展ol/item.png"),'+str;
					div1.style.backgroundImage=str;
				};
			}else{
				div1.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/item.png"),'+'url("'+lib.assetURL+'extension/扩展ol/'+item.name+'.png'+'")';
			};
		}else{
			div1.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/item.png")';
		};
		div1.style.backgroundSize="cover";
		var onOpen=false;
		div1.onclick=function(){
			if(onOpen==false){
				var dialog=ui.create.dialog('hidden');
				dialog.classList.add('popped');
				dialog.classList.add('static');
				dialog.style.width='300px';
				dialog.style['z-index']=99999;
				var title=ui.create.div();
				title.style.top='5px';
				title.style.width='calc(100%)';
				title.style.height='30px';
				title.style['line-height']='30px';
				title.style.position='relative';
				title.innerHTML='<span style="font-size:30px;font-weight:600;color:white;font-family:xinwei;text-shadow:black 2 2 4px;">宝物</span>';
				dialog.appendChild(title);
				var bws=ui.create.div();
				bws.style.top='6px';
				bws.style.width='calc(100%)';
				bws.style.height='116px';
				bws.style['text-align']='center';
				bws.style['overflow-x']='hidden';
				bws.style['overflow-y']='scroll';
				bws.style.position='relative';
				dialog.appendChild(bws);
				for(var i in lib.config.kzol_bag){
					var item=lib.config.kzol_bag[i];
					if(item.type=='baowu'){
						var div=ui.create.div('.card.fullskin');
						div.style.height='50px';
						div.style.width='50px';
						div.style['margin-top']='0px';
						div.style['margin-left']='2px';
						div.style['margin-right']='2px';
						div.style['margin-bottom']='4px';
						div.style.cursor='pointer';
						div.style.borderRadius='5px';
						if(item.noBorder==true){
							div.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/'+item.name+'.png'+'")';
						}else if(item.character){
							div.setBackground(item.character,'character');
							if(item.noBorder!=true){
								var str=div.style.backgroundImage;
								str='url("'+lib.assetURL+'extension/扩展ol/item.png"),'+str;
								div.style.backgroundImage=str;
							};
						}else{
							div.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/item.png"),'+'url("'+lib.assetURL+'extension/扩展ol/'+item.name+'.png'+'")';
						};
						div.style.backgroundSize="cover";
						div.link=i;
						div.link2=item;
						if(lib.config['extension_扩展ol_bw_hide1']!=true){
							div.onmouseover=div1.onmouseover;
							div.onmousemove=div1.onmousemove;
							div.onmouseout=div1.onmouseout;
						};
						div.onclick=function(){
							var str1='';
							var item=lib.config.kzol_bag[this.link];
							var info2='';
							info2='可叠加';
							if(item.canLay==false) info2='不可叠加';
							var info1='No Data';
							if(lib.kzol_bag[item.name]!=undefined) info1=lib.kzol_bag[item.name].info;
							if(item.ext_info!=undefined) info1=item.ext_info;
							str1+=get.translation(item.ext_name)+'\n'+info2+'\n'+
							get.translation(item.type)+'\n'+
							'数量：'+item.num;
							if(item.hg_base!=undefined&&item.hg_max!=undefined){
								str1+='\n觉醒度：'+item.hg_base+'/'+item.hg_max;
							};
							str1+='\n简介：\n  '+info1;
							var str='是否令'+get.translation(name)+'装备'+get.translation(item.ext_name)+'？\n注：装备时会卸下已装备的宝物\n\n'+str1+'';
							if(confirm(str)){
								game.kzol_equipBaowu(this.link,name);
								div1.link2=item;
								onOpen.delete();
								onOpen=false;
							};
						};
						bws.appendChild(div);
					};
				};
				var loadDown=ui.create.div('.menubutton.large','<span style="color:white;font-family:xinwei;text-shadow:black 0 0 2px;">卸下</span>',function(){
					if(lib.config.kzol_bw[name]==undefined){
						onOpen.delete();
						onOpen=false;
						game.say1('当前没有装备宝物');
						return ;
					};
					lib.config.kzol_bag[lib.config.kzol_bag_num]={};
					for(var i in lib.config.kzol_bw[name]){
						lib.config.kzol_bag[lib.config.kzol_bag_num][i]=lib.config.kzol_bw[name][i];
					};
					game.saveConfig('kzol_bag_num',lib.config.kzol_bag_num+1);
					game.saveConfig('kzol_bag',lib.config.kzol_bag);
					delete lib.config.kzol_bw[name];
					game.saveConfig('kzol_bw',lib.config.kzol_bw);
					if(game.kzol_rushBag!=undefined) game.kzol_rushBag();
					delete div1.link2;
					game.say1('成功卸下');
					onOpen.delete();
					onOpen=false;
				});
				loadDown.style.position='relative';
				loadDown.style['margin-top']='5px';
				loadDown.style.bottom='5px';
				loadDown.style.height='30px';
				loadDown.style.width='270px';
				loadDown.style.cursor='pointer';
				loadDown.style.borderRadius='8px';
				loadDown.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
				loadDown.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
				loadDown.style.backgroundColor="#E00000";
				dialog.appendChild(loadDown);
				ui.window.appendChild(dialog);
				dialog.setBackgroundImage('extension/扩展ol/Background3.jpg');
				dialog.style.backgroundSize="100% 100%";
				dialog.hide();
				dialog.style.left=event.clientX/game.documentZoom+10+document.body.scrollLeft+'px';
				dialog.style.top=event.clientY/game.documentZoom+document.body.scrollTop+'px';
				dialog.style.height=(loadDown.offsetTop+loadDown.offsetHeight+5)+'px';
				dialog.show();
				onOpen=dialog;
			}else{
				onOpen.delete();
				onOpen=false;
			};
		};
		ui.window.appendChild(div1);
		div1.hide();
		setTimeout(function(){
			div1.show();
		},150);
		var interval=setInterval(function(){
			if(lib.config.kzol_bw[name]!=undefined){
				if(lib.config.kzol_bw[name].noBorder==true){
					div1.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/'+lib.config.kzol_bw[name].name+'.png'+'")';
				}else if(lib.config.kzol_bw[name].character){
					div1.setBackground(lib.config.kzol_bw[name].character,'character');
					if(lib.config.kzol_bw[name].noBorder!=true){
						var str=div1.style.backgroundImage;
						str='url("'+lib.assetURL+'extension/扩展ol/item.png"),'+str;
						div1.style.backgroundImage=str;
					};
				}else{
					div1.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/item.png"),'+'url("'+lib.assetURL+'extension/扩展ol/'+lib.config.kzol_bw[name].name+'.png'+'")';
				};
			}else{
				//div1.innerHTML='<b><p align=center>+</b>';
				div1.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/item.png")';
			};
			if(_status.openingSkillSkin==true){
				div1.hide();
			}else{
				div1.show();
			};
			if((lib.config.theme=='simple'&&!ui.window.classList.contains('systempaused'))||(lib.config.theme!='simple'&&!ui.window.classList.contains('shortcutpaused'))){
				if(onOpen!=false) onOpen.delete();
				div1.delete();
				dialog_info.delete();
				clearInterval(interval);
			};
		},100);
	};
	if(lib.config.kzol_bw==undefined) game.saveConfig('kzol_bw',{});
	lib.extensionMenu.extension_扩展ol['bw']={
		"name":"<b><p align=center><span style=\"font-size:18px\">------宝物------</span></b>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol['bw_info']={
		"name":"禁选武将无法装备宝物",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol['bw_aiCanUse']={
		"name":"电脑也能使用宝物",
		"init":false,
		"intro":"开启后，电脑在开局时随机获得宝物（灵魂石除外）",
    };
	lib.extensionMenu.extension_扩展ol['bw_forbidden']={
		"name":"禁用宝物",
		"init":false,
		"intro":"开启后，开局时无法获得宝物技能"
    };
	lib.extensionMenu.extension_扩展ol['bw_all']={
		'name':'宝物图鉴<div>&gt;</div>',
		"clear":true,
		onclick:function(){
			ui.click.configMenu();
			game.kzol_showBwTj();
		},
	};
	lib.extensionMenu.extension_扩展ol['bw_stop']={
		"name":"打开宝物图鉴时暂停游戏",
		"init":true
    };
	lib.extensionMenu.extension_扩展ol['bw_title1']={
		"name":"<p align=center>技能界面</p>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol['bw_show']={
		"name":"显示宝物栏",
		"init":true,
		"intro":"开启后，在技能界面显示宝物栏",
    };
	lib.extensionMenu.extension_扩展ol['bw_Show1']={
		"name":"无宝物不显示宝物栏",
		"init":true,
	};
	lib.extensionMenu.extension_扩展ol['bw_minShow']={
		"name":"最小化宝物栏",
		"init":true,
		"intro":"开启后，在最小化栏（技能界面）显示宝物的最小化图标，在技能界面不显示宝物栏"
	};
	lib.extensionMenu.extension_扩展ol['bw_title2']={
		"name":"<p align=center>资料卡</p>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol['bw_hide']={
		"name":"隐藏宝物栏",
		"init":false,
    };
	lib.extensionMenu.extension_扩展ol['bw_hide1']={
		"name":"宝物栏内不显示宝物详情",
		"init":true,
		"intro":"开启后，鼠标移动至（PC端）/点击、长按（手机端）资料卡的宝物时不显示宝物详情"
    };
	if(lib.kzol_nodeintro==undefined) lib.kzol_nodeintro={};
	lib.kzol_nodeintro['bw']=function(uiintro,character,skills){
		var bool=false;
		for(var j in lib.characterPack){
			for(var i in lib.characterPack[j]){
				if(i==character&&(lib.characterPack[j][i][4]==undefined||!lib.characterPack[j][i][4].contains('forbidai'))) bool=true;
			};
		};
		if(bool==false) return ;
		if(lib.config['extension_扩展ol_bw_show']==false) return ;
		if(lib.config.kzol_bw[character]==undefined&&lib.config['extension_扩展ol_bw_show1']!=true) return ;
		var div1=ui.create.div('.shadowed.reduce_radius');
		div1.style.height='50px';
		div1.style.width='50px';
		div1.style.top='0px';
		div1.style['font-family']='shousha';
		div1.style['font-size']='25px';
		div1.style['text-align']='center';
		div1.style['line-height']='50px';
		if(lib.config.kzol_bw[character]!=undefined){
			if(lib.config.kzol_bw[character].noBorder==true){
				div1.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/'+lib.config.kzol_bw[character].name+'.png'+'")';
			}else if(lib.config.kzol_bw[character].character){
				div1.setBackground(lib.config.kzol_bw[character].character,'character');
				if(lib.config.kzol_bw[character].noBorder!=true){
					var str=div1.style.backgroundImage;
					str='url("'+lib.assetURL+'extension/扩展ol/item.png"),'+str;
					div1.style.backgroundImage=str;
				};
			}else{
				div1.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/item.png"),'+'url("'+lib.assetURL+'extension/扩展ol/'+lib.config.kzol_bw[character].name+'.png'+'")';
			};
		}else{
			div1.innerHTML='无';
			div1.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/item.png")';
		};
		div1.style.backgroundSize="cover";
		if(lib.config['extension_扩展ol_bw_minShow']==false){
			uiintro.addText('当前装备的宝物',true);
			uiintro.add(div1);
		}else{
			div1.style.margin='2px';
			div1.style.top='22px';
			div1.style.left='calc(50% - 25px)';
			var div=ui.create.div('.menu','<span style="font-size:18px;font-weight:300;font-family:shousha;line-height:25px">当前装备的宝物</span>');
			div.style.width='150px';
			div.style.height='78px';
			div.style.position='fixed';
			div.style.borderRadius='5px';
			div.style.transition='all 0s';
			div.style['text-align']='center';
			div.style.animation='fadeShow .3s';
			div.style['-webkit-animation']='fadeShow .3s';
			div.style['pointer-events']='none';
			div.appendChild(div1);
			var div2=ui.create.div();
			if(lib.config['extension_扩展ol_zxhxsl_show']=='img'){
				div2.style.height='30px';
				div2.style.width='30px';
				div2.style.top='0px';
				if(lib.config['extension_扩展ol_zxhxsl_pos']=='left'||lib.config['extension_扩展ol_zxhxsl_pos']=='right'){
					div2.style['margin-top']='-3px';
					div2.style['margin-left']='0px';
				}else{
					div2.style['margin-top']='0px';
					div2.style['margin-left']='1px';
				};
				div2.setBackgroundImage('extension/扩展ol/baowu.png');
				div2.style.backgroundSize="100% 100%";
			}else{
				div2.style.height='25px';
				div2.style.width='25px';
				if(lib.config['extension_扩展ol_zxhxsl_pos']=='top'||lib.config['extension_扩展ol_zxhxsl_pos']=='bottom_in') div2.style.top='8px';
				if(lib.config['extension_扩展ol_zxhxsl_pos']=='left') div2.style.left='3px';
				if(lib.config['extension_扩展ol_zxhxsl_pos']=='right') div2.style.left='-3px';
				div2.style['font-size']='20px';
				div2.style['text-align']='center';
				div2.style['font-family']='shousha';
				div2.style['line-height']='25px';
				div2.style['text-shadow']='black 0 0 2px';
				div2.style['font-weight']='600';
				div2.style.color='white';
				div2.innerHTML='宝';
			};
			div2.style.position='relative';
			div2.onclick=function(e){
				e.stopPropagation();
			};
			div2.onmouseover=function(){
				div.style.left=(event.clientX/game.documentZoom+10+document.body.scrollLeft-75)+'px';
				div.style.top=(event.clientY/game.documentZoom+document.body.scrollTop+(lib.device?0:20))+'px';
				if(div.offsetTop+div.offsetHeight>ui.window.offsetTop+ui.window.offsetHeight){
					div.style.top=(event.clientY/game.documentZoom+document.body.scrollTop-div.offsetHeight)+'px';
				};
				uiintro.appendChild(div);
			};
			div2.onmousemove=function(){
				div.style.left=(event.clientX/game.documentZoom+10+document.body.scrollLeft-75)+'px';
				div.style.top=(event.clientY/game.documentZoom+document.body.scrollTop+(lib.device?0:20))+'px';
				if(div.offsetTop+div.offsetHeight>ui.window.offsetTop+ui.window.offsetHeight){
					div.style.top=(event.clientY/game.documentZoom+document.body.scrollTop-div.offsetHeight)+'px';
				};
			};
			div2.onmouseout=function(){
				uiintro.removeChild(div);
			};
			uiintro.kzol_nodeintro.appendChild(div2);
		};
	};
	game.kzol_equipBaowu=function(item_num,character){
		if(lib.config.kzol_bw[character]!=undefined){
			lib.config.kzol_bag[lib.config.kzol_bag_num]={};
			for(var i in lib.config.kzol_bw[character]){
				lib.config.kzol_bag[lib.config.kzol_bag_num][i]=lib.config.kzol_bw[character][i];
			};
			game.saveConfig('kzol_bag',lib.config.kzol_bag);
			game.saveConfig('kzol_bag_num',lib.config.kzol_bag_num+1);
		};
		lib.config.kzol_bw[character]={};
		for(var i in lib.config.kzol_bag[item_num]){
			lib.config.kzol_bw[character][i]=lib.config.kzol_bag[item_num][i];
		};
		game.say1(get.translation(character)+'装备了'+get.translation(lib.config.kzol_bag[item_num].ext_name));
		var item=lib.config.kzol_bag[item_num];
		game.loseItem2(item_num,1,false);
		lib.config.kzol_bw[character].num=1;
		game.saveConfig('kzol_bw',lib.config.kzol_bw);
	};
	lib.skill._kzol_bw={
		trigger:{
			global:'gameStart',
		},
		forced:true,
		popup:false,
		filter:function (event,player){
			if(lib.config['extension_扩展ol_bw_forbidden']==true) return false;
			if(lib.config['extension_扩展ol_bw_aiCanUse']==true&&lib.config.kzol_bw[player.name]==undefined&&(player.name2==undefined&&lib.config.kzol_bw[player.name2]==undefined)&&player==game.me) return false;
			if(lib.config['extension_扩展ol_bw_aiCanUse']==true) return true;
			return lib.config.kzol_bw[player.name]!=undefined||(player.name2!=undefined&&lib.config.kzol_bw[player.name2]!=undefined)&&player==game.me;
		},
		content:function(){
			if(player!=game.me&&lib.config['extension_扩展ol_bw_aiCanUse']==true){
				var list=[];
				for(var i in lib.kzol_bag){
					if(lib.kzol_bag[i].type=='baowu'&&i.indexOf('kzol_bw_lhs_')==-1) list.push(lib.kzol_bag[i].name);
				};
				var name=list.randomGet();
				var skill='kzol_bw_'+name;
				player.addSkill(skill);
				player.storage.kzol_bw=name;
				setTimeout(function(){
					for(var i=0;i<player.node.marks.childNodes.length;i++){
						if(player.node.marks.childNodes[i].name==skill){
							if(lib.kzol_bag[name].character==undefined){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/'+name+'.png');
							}else{
								player.node.marks.childNodes[i].setBackground(lib.kzol_bag[name].character,'character');
							};
							player.node.marks.childNodes[i].innerHTML='';
						};
					};
				},200);
			};
			if(lib.config.kzol_bw[player.name]!=undefined&&player==game.me){
				var name=lib.config.kzol_bw[player.name].ext_name;
				var skill='kzol_bw_'+name;
				player.addSkill(skill);
				setTimeout(function(){
					for(var i=0;i<player.node.marks.childNodes.length;i++){
						if(player.node.marks.childNodes[i].name==skill){
							if(lib.config.kzol_bw[player.name].character==undefined){
								player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/'+name+'.png');
							}else{
								player.node.marks.childNodes[i].setBackground(lib.config.kzol_bw[player.name].character,'character');
							};
							player.node.marks.childNodes[i].innerHTML='';
						};
					};
				},200);
			};
			if(lib.config.kzol_bw[player.name2]!=undefined){
				var name=lib.config.kzol_bw[player.name2].ext_name;
				var skill='kzol_bw_'+name;
				player.addSkill(skill);
				setTimeout(function(){
					for(var i=0;i<player.node.marks.childNodes.length;i++){
						if(player.node.marks.childNodes[i].name==skill){
							player.node.marks.childNodes[i].setBackgroundImage('extension/扩展ol/'+name+'.png');
							player.node.marks.childNodes[i].innerHTML='';
						};
					};
				},200);
			};
		},
	};
	lib.skill['kzol_bw_'+'baozhu']={
		nobracket:true,
		intro:{
			content:lib.kzol_bag['baozhu'].info.slice(4,lib.kzol_bag['baozhu'].info.length),
		},
		mark:true,
		trigger:{
			player:'phaseBegin',
		},
		forced:true,
		filter:function (event,player){
			return player.storage.kzol_bw_baozhu==undefined;
		},
		content:function(){
			player.getBuff();
			player.storage.kzol_bw_baozhu=true;
		},
	};
	lib.skill['kzol_bw_'+'qianmian']={
		nobracket:true,
		intro:{
			content:function(storage){
				return lib.kzol_bag['qianmian'].info.slice(4,lib.kzol_bag['qianmian'].info.length)+'<br>已使用次数：'+storage;
			},
		},
		mark:true,
		init:function(player){
			if(player.storage.kzol_bw_qianmian==undefined) player.storage.kzol_bw_qianmian=0;
			for(var i=0;i<game.players.length;i++){
				var pl=game.players[i];
				if(pl!=player){
					var skills=pl.get('s');
					for(var j=0;j<skills.length;j++){
						if(lib.translate[skills[j]+'_info']!=undefined&&lib.translate[skills[j]+'_info'].indexOf('限')!=-1&&lib.translate[skills[j]+'_info'].indexOf('次')!=-1&&lib.skill[skills[j]].usable!=undefined&&lib.skill[skills[j]].content!=undefined){
							player.addSkill('kzol_bw_'+skills[j]);
						};
					};
				};
			};
		},
	};
	lib.skill['kzol_bw_'+'xukongdajian']={
		nobracket:true,
		intro:{
			content:lib.kzol_bag['xukongdajian'].info.slice(4,lib.kzol_bag['xukongdajian'].info.length),
		},
		mark:true,
		trigger:{
			source:"damageBefore",
		},
		forced:true,
		priority:Infinity,
		content:function (){
			trigger.player.addSkill('kzol_bw_xukongdajian_buff');
		},
		subSkill:{
			buff:{
				trigger:{
					player:"damageBegin",
				},
				forced:true,
				priority:Infinity,
				popup:false,
				content:function (){
					trigger._triggered=null;
					player.removeSkill('kzol_bw_xukongdajian_buff');
				},
			},
		},
	};
	lib.skill['kzol_bw_'+'shengmingshuijing']={
		nobracket:true,
		intro:{
			content:lib.kzol_bag['shengmingshuijing'].info.slice(4,lib.kzol_bag['shengmingshuijing'].info.length),
		},
		mark:true,
		init:function(player){
			player.gainMaxHp();
			player.logSkill('shengmingshuijing');
		},
	};
		lib.skill['kzol_bw_'+'xixuezhiwu']={
		nobracket:true,
		intro:{
			content:lib.kzol_bag['xixuezhiwu'].info.slice(4,lib.kzol_bag['xixuezhiwu'].info.length),
		},
		mark:true,
		init:function(player){
			player.addSkill('djl_念雪');
		},
		trigger:{
			global:'djl_frozenAfter',
		},
		forced:true,
		popup:false,
		content:function(){
			player.removeSkill('djl_念雪');
		},
	};
	var translation={
		'baozhu':'宝珠',
		'qianmian':'千面',
		'xukongdajian':'虚空·大剑',
		'shengmingshuijing':'生命水晶',
		'xixuezhiwu':'细雪之舞',
	};
	for(var i in translation){
		lib.translate[i]=translation[i];
		lib.translate['kzol_bw_'+i]='宝物：'+translation[i];
		lib.translate['kzol_bw_'+i+'_info']=lib.kzol_bag[i].info.slice(4,lib.kzol_bag[i].info.length);
	};
	lib.translate.baowu='宝物';
	for(var i in lib.skill){
		if(lib.translate[i+'_info']!=undefined&&lib.translate[i+'_info'].indexOf('限')!=-1&&lib.translate[i+'_info'].indexOf('次')!=-1&&lib.skill[i].usable!=undefined&&lib.skill[i].content!=undefined){
			lib.skill['kzol_bw_'+i]={};
			for(var j in lib.skill[i]){
				lib.skill['kzol_bw_'+i][j]=lib.skill[i][j];
			};
			var func2=lib.skill['kzol_bw_'+i].content;
			var str=func2.toString();
			str=str.slice(0,str.length-1);
			str+=";if(player.storage.kzol_bw_qianmian>=2){var skills=player.get('s');for(var j=0;j<skills.length;j++){if(skills[j].indexOf('kzol_bw_')!=-1) player.removeSkill(skills[j]);};};player.storage.kzol_bw_qianmian++;player.syncStorage('kzol_bw_qianmian');}";
			str='('+str+')';
			lib.skill['kzol_bw_'+i].content=eval(str);
			//console.log(lib.skill[i].content)
			lib.translate['kzol_bw_'+i]=lib.translate[i];
			lib.translate['kzol_bw_'+i+'_info']='<li>千面技能<br>'+lib.translate[i+'_info'];
		};
	};
	game.kzol_showBwTj=function(){
		if(lib.kzol_bag==undefined){
			game.say1('未找到背包模块');
			return ;
		};
		if(lib.config['extension_扩展ol_bw_stop']!=false) game.pause2();
		var str='<table style="width:100%;" border="1">';
		for(var i in lib.kzol_bag){
			if(lib.kzol_bag[i].type=='baowu'&&i.indexOf('kzol_bw_lhs_')==-1){
				str+='<tr>'+
				'<td width="50" height="50" style="text-align:center;vertical-align:middle;">'+
				'<img src='+lib.assetURL+'extension/扩展ol/'+i+'.png'+' width="50" height="50">'+
				'</img>'+
				'<span style="color:#FFFFFF;font-family:shousha;text-shadow:black 0 0 4px;font-size:15px;">'+
				get.translation(i)+
				'</span>'+
				'</td>'+
				'<td style="text-align:left;">'+
				'<span style="color:#FFFFFF;font-family:shousha;text-shadow:black 0 0 4px;">'+
				lib.kzol_bag[i].info.slice(4)+
				'</span>'+
				'</td>'+
				'</tr>';
			};
		};
		str+='<tr>'+
		'<td width="50" height="50" style="text-align:center;vertical-align:middle;">'+
		'<span style="color:#FFFFFF;font-family:shousha;text-shadow:black 0 0 4px;font-size:15px;">'+
		'灵魂<br>碎片'+
		'</span>'+
		'</td>'+
		'<td style="text-align:left;">'+
		'<span style="color:#FFFFFF;font-family:shousha;text-shadow:black 0 0 4px;">'+
		'身份、成对、无尽模式中，游戏开始时，你召唤一个武将为你作战三个回合'+
		'</span>'+
		'</td>'+
		'</tr>';
		str+='</table>';
		var dialog1={};
		var background=ui.create.dialog('hidden');
		//background.classList.add('popped');
		//background.classList.add('static');
		background.style.height='calc(100%)';
		background.style.width='calc(100%)';
		background.style.left='0px';
		background.style.top='0px';
		ui.window.appendChild(background);
		dialog1.background=background;
		var bg_new=ui.create.dialog('hidden');
		bg_new.classList.add('popped');
		bg_new.classList.add('static');
		bg_new.style.height='455px';
		bg_new.style.width='530px';
		bg_new.style.left='calc(50% - 265px)';
		bg_new.style.top='calc(50% - 227.5px)';
		bg_new.style['box-shadow']='none';
		bg_new.style['background']='none';
		bg_new.setBackgroundImage('extension/扩展ol/bg_new.png');
		bg_new.style.backgroundSize="100% 100%";
		ui.window.appendChild(bg_new);
		dialog1.bg_new=bg_new;
		var b=ui.create.div();
		b.style.height='346px';
		b.style.width='500px';
		b.style.left='15px';
		b.style.top='77px';
		b.style.borderRadius='5px';
		b.style['overflow-x']='hidden';
		b.style['overflow-y']='scroll';
		lib.setScroll(b);
		b.innerHTML=str;
		bg_new.appendChild(b);
		var t=ui.create.div();
		t.style.height='20px';
		t.style.width='144px';
		t.style.left='calc(50% - 73px)';
		t.style.top='40px';
		t.innerHTML='<span style="color:#FFFFFF;font-size:20px;font-weight:600;font-family:shousha">宝物图鉴</span>';
		bg_new.appendChild(t);
		var div=ui.create.div();
		div.style.height='1000px';
		div.style.width='1000px';
		div.style.left='-10px';
		div.style.top='-10px';
		var func1=function(){
			if(lib.config['extension_扩展ol_bw_stop']!=false) game.resume2();
			for(var i in dialog1){
				dialog1[i].delete();
			};
			delete game.closeBag;
		};
		setTimeout(function(){
			div.onclick=function(){
				func1();
			};
		},500);
		background.add(div);
	};
}