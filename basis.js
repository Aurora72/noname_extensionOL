window.func=function(lib,game,ui,get,ai,_status){
	/*lib.init.css(lib.assetURL+'extension/扩展ol','style');
	document.body.classList.add('hide-system-cursor');
	var div1 = document.createElement("div"); 
	div1.classList.add('cursor');
	div1.style['pointer-events']='none';
	document.body.appendChild(div1);
	var div = document.createElement("div"); 
	div.id="horiz";
	div.classList.add('horizontal');
	div.style['pointer-events']='none';
	div1.appendChild(div);
	var div = document.createElement("div"); 
	div.id="vertical";
	div.classList.add('vertical');
	div.style['pointer-events']='none';
	div1.appendChild(div);
	var div = document.createElement("div"); 
	div.id="middle";
	div.classList.add('middle');
	div.style['pointer-events']='none';
	div1.appendChild(div);
	var horiz = document.getElementById('horiz'),
		vertical = document.getElementById('vertical'),
		middle = document.getElementById('middle'),
		moving = false;
	document.onmousemove = function (e) {
		var x = e.pageX,
			y = e.pageY;
		if (!moving) {
			horiz.classList.add('moving');
			vertical.classList.add('moving');
			middle.classList.add('moving');
			moving = true;
		}
		horiz.style.top = y - 1 + 'px';
		vertical.style.left = x - 1 + 'px';
		middle.style.left = x - 6 + 'px';
		middle.style.top = y - 6 + 'px';
	};*/
	lib.extensionMenu.extension_扩展ol['uiControl_title']={
		"name":"<b><p align=center><span style=\"font-size:18px\">------选项选择栏------</span></p></b>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol['uiControl_move']={
		"name":"选项选择栏可移动",
		"init":true,
	};
	lib.extensionMenu.extension_扩展ol['uiControl_reset']={
		"name":"<span style='text-decoration: underline'>选项选择栏复位</span>",
		"clear":true,
		"onclick":function(){
			if(ui.control!=undefined){
				ui.control.style.left=(ui.control.kzol_recordLeft)+'px';
			};
			game.say1('复位成功');
		},
	};
	lib.extensionMenu.extension_扩展ol['uiControl_reset_add']={
		"name":"菜单内添加复位按钮",
		"init":true,
		"intro":"菜单（右上）内添加选项选择栏复位按钮",
    };
	lib.arenaReady.push(function(){
		if(ui.control!=undefined){
			ui.control.addEventListener('mousewheel',function(e){
				if(this.kzol_recordLeft==undefined) this.kzol_recordLeft=this.offsetLeft;
				var num=e.wheelDelta>0?-100:100;
				if(lib.config.extension_扩展ol_uiControl_move==true) this.style.left=(this.offsetLeft+num)+'px';
			});
			ui.control.addEventListener('touchstart',function(e){
				if(this.kzol_recordLeft==undefined) this.kzol_recordLeft=this.offsetLeft;
				if(e.changedTouches) e=e.changedTouches[e.changedTouches.length-1];
				this.kzol_recordLeft1=e.clientX;
				this.kzol_recordLeft2=this.offsetLeft;
			});
			ui.control.addEventListener('touchmove',function(e){
				if(this.kzol_recordLeft1!=undefined){
					if(e.changedTouches) e=e.changedTouches[e.changedTouches.length-1];
					var num=e.clientX-this.kzol_recordLeft1;
					if(lib.config.extension_扩展ol_uiControl_move==true) this.style.left=(this.kzol_recordLeft2+num)+'px';
				};
			});
			ui.control.addEventListener('touchend',function(e){
				delete this.kzol_recordLeft1;
				delete this.kzol_recordLeft2;
			});
		};
	});
	var player_update=lib.element.player.update;
	lib.element.player.update=function(){
		if(_status.video&&arguments.length==0) return;
		if(this.node.kzol_alx_hp1!=undefined){
			var num=100;
			if(this.maxHp!=Infinity){
				num=this.hp/this.maxHp*100;
				if(num>100) num=100;
			};
			this.node.kzol_alx_hp1.style.height='calc('+num+'%)';
			game.delay(0.3);
		};
		if(this.node.kzol_alx_hp2!=undefined){
			var num1=this.hp;
			if(this.hp==Infinity){
				num1='∞';
			}else{
				num1=Math.round(num1*1000)/1000;
			};
			num1=num1*1000;
			this.node.kzol_alx_hp2.innerHTML=num1;
		};
		if(this.node.kzol_alx_hp1!=undefined&&this.node.kzol_alx_hp2!=undefined){
			var maxHp=this.maxHp;
			this.maxHp=3;
			player_update.apply(this,arguments);
			this.maxHp=maxHp;
		}else{
			player_update.apply(this,arguments);
		};
		if(this.扩展ol_type=='fellow') this.node.hp.innerHTML=this.hp+'/'+this.maxHp+'<div></div>';
	};
	if(lib.config.extension_扩展ol_16r_gz_force!=false) lib.config.mode_config.guozhan.choice_num=12;
	lib.kzol_charactercard_func={};
	var kzol_charactercard=ui.click.charactercard;
	ui.click.charactercard=function(name,sourcenode,noedit,resume,avatar){
		kzol_charactercard(name,sourcenode,noedit,resume,avatar);
		for(var i in lib.kzol_charactercard_func){
			lib.kzol_charactercard_func[i](name,sourcenode,noedit,resume,avatar);
		};
	};
	var kzol_createButton=ui.create.button;
	ui.create.button=function(item,type,position,noclick,node){
		if(type=='character'){
			if(lib.character[item]!=undefined&&lib.character[item][2]=='未解锁'){
				noclick=true;
			};
			if(typeof item=='string'&&item.indexOf('kzsg_')!=-1){
				noclick=true;
			};
		};
		var node=kzol_createButton(item,type,position,noclick,node);
		if(type=='vcard'){
			if(typeof item=='string'){
				item=[get.type(item),'',item];
			};
			if(typeof item=='object'&&item.length!=undefined&&item[2]!=undefined&&item[2].indexOf('bwp_cards_')!=-1){
				node.node.name.style.display='none';
				node.node.info.style.display='none';
				node.style.height='164px';
				node.style['box-shadow']='none';
				node.style.backgroundSize='100% 100%';
			};
		};
		if(type=='character'){
			if(typeof item=='string'&&item.indexOf('kzol_bwp_')!=-1){
				node.node.hp.style.display='none';
				node.node.name.style.display='none';
				node.node.group.style.display='none';
				node.style.height='164px';
				node.style['box-shadow']='none';
				node.style.backgroundSize='100% 100%';
			};
			if(typeof item=='string'&&item.indexOf('kzsg_')!=-1){
				var image_str='extension/扩展ol/'+lib.kzol_kzsg_card[item].name+'.jpg';
				if(lib.kzol_kzsg_card[item].image!=undefined) image_str='extension/扩展ol/kzsg_image/'+lib.kzol_kzsg_card[item].image;
				node.setBackgroundImage(image_str,'character');
				node.style.backgroundSize="cover";
			};
			if(typeof item=='string'&&item.indexOf('kzsg_')!=-1){
				
				node.node.hp.style.display='none';
				
				node.style.width='90px';
				node.style.height='120px';
				
				node.node.group.style.left='5px';
				node.node.group.style['text-align']='left';
				node.node.name.style.top='25px';
				
				node.node.type=ui.create.div('',node);
				node.node.type.style.height='20px';
				node.node.type.style.width='40px';
				node.node.type.style.top='2px';
				if(lib.kzol_kzsg_card[item].type=='武将'){
					node.node.type.style.left='22.5px';
				}else{
					node.node.type.style.left='25px';
				};
				node.node.type.style['font-size']='16px';
				node.node.type.style['text-align']='center';
				node.node.type.style['font-family']="'STXinwei','xinwei'";
				node.node.type.style['line-height']='20px';
				node.node.type.innerHTML=lib.kzol_kzsg_card[item].type;
				
				node.node.skill=ui.create.div('',node);
				node.node.skill.style.height='15px';
				node.node.skill.style.width='90px';
				node.node.skill.style.top='75px';
				node.node.skill.style.left='0px';
				node.node.skill.style['font-size']='15px';
				node.node.skill.style['text-align']='left';
				node.node.skill.style['font-family']="'STXinwei','xinwei'";
				node.node.skill.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
				node.node.skill.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
				node.node.skill.style['line-height']='15px';
				node.node.skill.style['overflow-x']='scroll';
				node.node.skill.style['overflow-y']='hidden';
				var str='';
				for(var i=0;i<lib.kzol_kzsg_card[item].skills.length;i++){
					if(i>0) str+='、'
					str+=get.translation(lib.kzol_kzsg_card[item].skills[i]);
				};
				if(str=="") node.node.skill.style.display='none';
				node.node.skill.innerHTML=str;
				
				node.node.prepareRound=ui.create.div('',node);
				node.node.prepareRound.style.height='30px';
				node.node.prepareRound.style.width='30px';
				node.node.prepareRound.style.top='90px';
				node.node.prepareRound.style.left='0px';
				node.node.prepareRound.style['font-size']='10px';
				node.node.prepareRound.style['text-align']='center';
				node.node.prepareRound.style['font-family']="'STXinwei','xinwei'";
				node.node.prepareRound.style['line-height']='30px';
				node.node.prepareRound.setBackgroundImage('extension/扩展ol/框.png');
				node.node.prepareRound.style.backgroundSize="100% 100%";
				node.node.prepareRound.innerHTML=lib.kzol_kzsg_card[item].prepareRound;
				
				node.node.prepareRound_str=ui.create.div('',node);
				node.node.prepareRound_str.style.height='10px';
				node.node.prepareRound_str.style.width='10px';
				node.node.prepareRound_str.style.top='105px';
				node.node.prepareRound_str.style.left='15px';
				node.node.prepareRound_str.style['font-family']="'STXinwei','xinwei'";
				node.node.prepareRound_str.innerHTML='回';
				
				node.node.attack=ui.create.div('',node);
				node.node.attack.style.height='30px';
				node.node.attack.style.width='30px';
				node.node.attack.style.top='90px';
				node.node.attack.style.left='30px';
				node.node.attack.style['font-size']='10px';
				node.node.attack.style['text-align']='center';
				node.node.attack.style['font-family']="'STXinwei','xinwei'";
				node.node.attack.style['line-height']='30px';
				node.node.attack.setBackgroundImage('extension/扩展ol/框.png');
				node.node.attack.style.backgroundSize="100% 100%";
				node.node.attack.innerHTML=lib.kzol_kzsg_card[item].attack;
				
				node.node.attack_str=ui.create.div('',node);
				node.node.attack_str.style.height='10px';
				node.node.attack_str.style.width='10px';
				node.node.attack_str.style.top='105px';
				node.node.attack_str.style.left='45px';
				node.node.attack_str.style['font-family']="'STXinwei','xinwei'";
				node.node.attack_str.innerHTML='攻';
				
				if(lib.kzol_kzsg_card[item].type=='武将'){
					node.node.bing=ui.create.div('',node);
					node.node.bing.style.height='30px';
					node.node.bing.style.width='30px';
					node.node.bing.style.top='0px';
					node.node.bing.style.right='0px';
					node.node.bing.style['font-size']='10px';
					node.node.bing.style['text-align']='center';
					node.node.bing.style['font-family']="'STXinwei','xinwei'";
					node.node.bing.style['line-height']='30px';
					node.node.bing.setBackgroundImage('extension/扩展ol/框.png');
					node.node.bing.style.backgroundSize="100% 100%";
					node.node.bing.innerHTML=lib.kzol_kzsg_card[item].bing;
					
					node.node.bing_str=ui.create.div('',node);
					node.node.bing_str.style.height='10px';
					node.node.bing_str.style.width='10px';
					node.node.bing_str.style.top='15px';
					node.node.bing_str.style.right='5px';
					node.node.bing_str.style['font-family']="'STXinwei','xinwei'";
					node.node.bing_str.innerHTML='兵';
					
					node.node.bao=ui.create.div('',node);
					node.node.bao.style.height='30px';
					node.node.bao.style.width='30px';
					node.node.bao.style.top='30px';
					node.node.bao.style.right='0px';
					node.node.bao.style['font-size']='10px';
					node.node.bao.style['text-align']='center';
					node.node.bao.style['font-family']="'STXinwei','xinwei'";
					node.node.bao.style['line-height']='30px';
					node.node.bao.setBackgroundImage('extension/扩展ol/框.png');
					node.node.bao.style.backgroundSize="100% 100%";
					node.node.bao.innerHTML=lib.kzol_kzsg_card[item].bao;
					
					node.node.bao_str=ui.create.div('',node);
					node.node.bao_str.style.height='10px';
					node.node.bao_str.style.width='10px';
					node.node.bao_str.style.top='45px';
					node.node.bao_str.style.right='5px';
					node.node.bao_str.style['font-family']="'STXinwei','xinwei'";
					node.node.bao_str.innerHTML='宝';
					
					node.node.shu=ui.create.div('',node);
					node.node.shu.style.height='30px';
					node.node.shu.style.width='30px';
					node.node.shu.style.top='60px';
					node.node.shu.style.right='0px';
					node.node.shu.style['font-size']='10px';
					node.node.shu.style['text-align']='center';
					node.node.shu.style['font-family']="'STXinwei','xinwei'";
					node.node.shu.style['line-height']='30px';
					node.node.shu.setBackgroundImage('extension/扩展ol/框.png');
					node.node.shu.style.backgroundSize="100% 100%";
					node.node.shu.innerHTML=lib.kzol_kzsg_card[item].shu;
					
					node.node.shu_str=ui.create.div('',node);
					node.node.shu_str.style.height='10px';
					node.node.shu_str.style.width='10px';
					node.node.shu_str.style.top='75px';
					node.node.shu_str.style.right='5px';
					node.node.shu_str.style['font-family']="'STXinwei','xinwei'";
					node.node.shu_str.innerHTML='术';
				};
				
				node.node.hp=ui.create.div('',node);
				node.node.hp.style.height='30px';
				node.node.hp.style.width='30px';
				node.node.hp.style.top='90px';
				node.node.hp.style.right='0px';
				node.node.hp.style['font-size']='10px';
				node.node.hp.style['text-align']='center';
				node.node.hp.style['font-family']="'STXinwei','xinwei'";
				node.node.hp.style['line-height']='30px';
				node.node.hp.setBackgroundImage('extension/扩展ol/框.png');
				node.node.hp.style.backgroundSize="100% 100%";
				if(lib.kzol_kzsg_card[item].hp==Infinity){
					node.node.hp.innerHTML='∞';
				}else{
					node.node.hp.innerHTML=lib.kzol_kzsg_card[item].hp;
				};
				
				node.node.hp_str=ui.create.div('',node);
				node.node.hp_str.style.height='10px';
				node.node.hp_str.style.width='10px';
				node.node.hp_str.style.top='105px';
				node.node.hp_str.style.right='5px';
				node.node.hp_str.style['font-family']="'STXinwei','xinwei'";
				node.node.hp_str.innerHTML='血';
				if(lib.kzol_kzsg_card[item].type=='术'||lib.kzol_kzsg_card[item].type=='宝物'){
					node.node.attack.style.display='none';
					node.node.attack_str.style.display='none';
					node.node.hp.style.display='none';
					node.node.hp_str.style.display='none';
					//node.node.attack.hide();
					//node.node.attack_str.hide();
					//node.node.hp.hide();
					//node.node.hp_str.hide();
				};
			};
			if(lib.character[item]!=undefined&&lib.character[item][4]!=undefined){
				for(var i=0;i<lib.character[item][4].length;i++){
					if(lib.character[item][4][i].indexOf('职业:')!=-1){
						var occupation=lib.character[item][4][i].slice(3,lib.character[item][4][i].length);
						node.node.occupation=ui.create.div(node);
						node.node.occupation.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/'+occupation+'.jpg")';
						node.node.occupation.style.backgroundSize='100% 100%';
						node.node.occupation.style.height='20px';
						node.node.occupation.style.width='20px';
						node.node.occupation.style.bottom='0px';
						node.node.occupation.style.left='0px';
						node.node.occupation.style.borderRadius='3px';
					};
				};
			};
			var infoitem=lib.character[item];
			if(lib.config.buttoncharacter_style=='default'||lib.config.buttoncharacter_style=='simple'){
				if(typeof item=='string'&&item.indexOf('kzsg_')!=-1){
					if(lib.kzol_kzsg_card!=undefined&&lib.kzol_kzsg_card[item]!=undefined){
						var quailty=lib.kzol_kzsg_card[item].quailty;
						node.node.name.dataset.nature='kzsg'+quailty;
					};
				};
			};
			if(infoitem!=undefined&&infoitem[2]=='未解锁') node.node.hp.innerHTML='<span style="color:red;font-size:18px;font-weight:600;font-family:shousha">未解锁</span>';
			if(lib.character[item]!=undefined&&lib.character[item][2]=='未解锁'){
				lib.setIntro(node);
				node.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
					game.say1('你未解锁该武将')
				});
			};
			if(typeof item=='string'&&item.indexOf('sesx_')!=-1&&lib.kzol_sesx_ll[item]!=undefined){
				node.node.name.style.left='1px';
				node.node.name.style.top='11px';
				for(var i=0;i<lib.kzol_sesx_ll[item];i++){
					var div_ll=ui.create.div();
					div_ll.style.height='10px';
					div_ll.style.width='10px';
					div_ll.style.top='0px';
					div_ll.style.left=(1+10*i)+'px';
					div_ll.style.backgroundSize='100% 100%';
					div_ll.setBackgroundImage('extension/扩展ol/kzol_sesx_ll.png');
					node.appendChild(div_ll);
				};
			};
			if(typeof item=='string'&&item.indexOf('kzsg_')!=-1){
				lib.setIntro(node);
			};
		};
		return node;
	};
	if(lib.kzol_nodeintro==undefined) lib.kzol_nodeintro={};
	if(lib.kzol_nodeintro_timeOut==undefined) lib.kzol_nodeintro_timeOut={};
	if(lib.kzol_nodeintro_card==undefined) lib.kzol_nodeintro_card={};
	var kzol_getNodeIntro=get.nodeintro;
	get.nodeintro=function(node,simple,evt){
		var uiintro=kzol_getNodeIntro(node,simple,evt);
		if(node.classList.contains('character')){
			var character=node.link;
			var infoitem=lib.character[character];
			if(infoitem==undefined){
				for(var j in lib.characterPack){
					for(var i in lib.characterPack[j]){
						if(i==character) infoitem=lib.characterPack[j][i];
					};
				};
			};
			if(infoitem!=undefined){
				var div=ui.create.div();
				if(lib.config['extension_扩展ol_zxhxsl_pos']=='left'||lib.config['extension_扩展ol_zxhxsl_pos']=='right'){
					div.style.height='calc(100%)';
					div.style.width='30px';
					div.style['text-align']='center';
					div.style['overflow-x']='hidden';
					div.style['overflow-y']='scroll';
					lib.setScroll(div);
				}else{
					div.style.height='30px';
					div.style.width='calc(100%)';
					div.style['text-align']='right';
					div.style['overflow-x']='scroll';
					div.style['overflow-y']='hidden';
					lib.setScroll(div);
					div.addEventListener('mousewheel',function(e){
						var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
						var move_s=delD>0?-30:30;
						this.scrollLeft+=move_s;
					});
				};
				if(lib.config['extension_扩展ol_zxhxsl_pos']=='left'){
					div.style.left='-30px';
				}else if(lib.config['extension_扩展ol_zxhxsl_pos']=='right'){
					div.style.right='-30px';
				}else{
					div.style.left='0px';
				};
				if(lib.config['extension_扩展ol_zxhxsl_pos']=='top_in'||
				lib.config['extension_扩展ol_zxhxsl_pos']=='left'||
				lib.config['extension_扩展ol_zxhxsl_pos']=='right'){
					div.style.top='0px';
				}else if(lib.config['extension_扩展ol_zxhxsl_pos']=='bottom_in'){
					div.style.bottom='0px';
				}else if(lib.config['extension_扩展ol_zxhxsl_pos']=='bottom'){
					div.style.bottom='-30px';
				}else{
					div.style.top='-30px';
				};
				uiintro.appendChild(div);
				uiintro.kzol_nodeintro=div;
				var skills=infoitem[3];
				for(var i in lib.kzol_nodeintro){
					lib.kzol_nodeintro[i](uiintro,character,skills);
				};
				setTimeout(function(){
					for(var i in lib.kzol_nodeintro_timeOut){
						lib.kzol_nodeintro_timeOut[i](uiintro,character,skills);
					};
				},500);
			};
		};
		if(node.classList.contains('card')){
			var card=node.link;
			for(var i in lib.kzol_nodeintro_card){
				lib.kzol_nodeintro_card[i](uiintro,card);
			};
		};
		return uiintro;
	};
	var kzol_getGroupnature=get.groupnature;
	get.groupnature=function(group,method){
		var nature=kzol_getGroupnature(group,method);
		if(method!='raw') nature=nature.slice(0,nature.length-2);
		if(group=='min') nature='min';
		if(group=='zhi') nature='zhi';
		if(group=='li') nature='li';
		if(group=='shenghen') nature='metal';
		if(group=='nyhzrlong') nature='nyhzrlong';
		//if(group=='WSS_jin') nature='WSS_jin';
		if(group=='TLP') nature='TLP';
		//if(group=='gu') nature='gu';
		if(group=='r') nature='r';
		if(group=='sr') nature='sr';
		if(group=='ssr') nature='ssr';
		if(group=='meng') nature='meng';
		if(group=='wang') nature='wang';
		if(group=='xian') nature='xian';
		if(group=='yao') nature='yao';
		if(group=='kzol_sesx') nature='kzol_sesx';
		if(group=='ly_junshenbao_sociatyBeast') nature='ly_junshenbao_sociatyBeast';
		if(group=='djl') nature='djl';
		if(group=='WSS_jin') nature='WSS_jin';
		if(group=='gu') nature='gu';
		if(group=='G') nature='G';
		if(group=='SW') nature='G';
		if(group=='Han') nature='Han';
		if(group=='lu') nature='lu';
		if(group=='qin') nature='qin';
		if(group=='chu') nature='Han';
		if(group=='qi') nature='qi';
		if(group=='yan') nature='yan';
		if(group=='zhao') nature='zhao';
		if(group=='han') nature='han';
		if(group=='mpl_dfs') nature='mpl_dfs';
		if(group=='mpl_yzdg') nature='Han';
		if(method=='raw') return nature;
		return nature+'mm';
	};
	var swapPlayer=game.swapPlayer;
	game.swapPlayer=function(player,player2){
		swapPlayer.apply(this,arguments);
		if(game.countPlayer(function(current){return current.扩展ol_type=='fellow'})>=0){
			game.reSetSeat();
		};
	};
	var swapSeat=game.swapSeat;
	game.swapSeat=function(player1,player2,prompt,behind,noanimate){
		swapSeat.apply(this,arguments);
		if(game.countPlayer(function(current){return current.扩展ol_type=='fellow'})>=0){
			game.reSetSeat();
		};
	};
	game.removePlayer1=function(player,bool){
		if(_status.roundStart==player) _status.roundStart=player.next||player.getNext()||game.players[0];
		if(player==undefined) player=game.dead[0]||game.me.next;
		if(player.isAlive()){
			player.next.previous=player.previous;
			player.previous.next=player.next;
		};
		player.nextSeat.previousSeat=player.previousSeat;
		player.previousSeat.nextSeat=player.nextSeat;
		if(bool!=true) player.delete();
		game.players.remove(player);
		game.dead.remove(player);
		player.removed=true;
		if(player==game.me){
			ui.me.hide();
			ui.auto.hide();
			ui.wuxie.hide();
		};
		game.log(player,'退场了');
		return player;
	};
	game.reSetSeat=function(){
		var owners=[];
		var fellows=[];
		for(var i=0;i<game.players.length;i++){
			if(game.players[i].扩展ol_owner==undefined){
				owners.push(game.players[i]);
			}else{
				fellows.push(game.players[i]);
			};
		};
		game.players=[];
		for(var i=0;i<owners.length;i++){
			game.players.push(owners[i]);
			for(var j=0;j<fellows.length;j++){
				if(fellows[j].扩展ol_owner==owners[i]) game.players.push(fellows[j]);
			};
		};
		var players=game.players.concat(game.dead);
		for(var i=0;i<players.length;i++){
			if(i==0){
				players[i].previousSeat=players[players.length-1];
			}else{
				players[i].previousSeat=players[i-1];
			};
			if(i==players.length-1){
				players[i].nextSeat=players[0];
			}else{
				players[i].nextSeat=players[i+1];
			};
		};
		for(var i=0;i<game.players.length;i++){
			if(i==0){
				game.players[i].previous=game.players[game.players.length-1];
			}else{
				game.players[i].previous=game.players[i-1];
			}
			if(i==game.players.length-1){
				game.players[i].next=game.players[0];
			}else{
				game.players[i].next=game.players[i+1];
			}
		};
		
		if(get.mode()!='chess'&&get.mode()!='tafang'){
			for(var i=0;i<game.players.length;i++){
				var pl=game.players[i];
				if(pl.扩展ol_owner!=undefined){
					var owner=pl.扩展ol_owner;
					var left=owner.offsetLeft;
					var top=owner.offsetTop;
					var width=owner.offsetWidth;
					var height=owner.offsetHeight;
					var left1=pl.offsetLeft;
					var top1=pl.offsetTop;
					var pos='middle';
					if(pl.扩展ol_owner==game.me){
						left+=75;
						top-=67.5;
					}else if(left<ui.window.offsetWidth/2&&top>30){
						left+=width;
						pos='left';
					}else if(left>ui.window.offsetWidth/2&top>30){
						left-=67.5;
						pos='right';
					}else{
						top+=height;
					};
					var inc=function(){
						for(var k=0;k<10;k++){
							for(var j=0;j<game.players.length;j++){
								var pl1=game.players[j];
								if(pos=='left'||pos=='right'){
									if(pl1.style.top==top+'px'&&pl1.style.left==left+'px'&&pl1!=pl){
										top+=70;
									};
								}else{
									if(pl1.style.left==left+'px'&&pl1.style.top==top+'px'&&pl1!=pl){
										left+=70;
									};
								};
							};
						};
						sort();
					};
					var sort=function(){
						if(pos=='left'||pos=='right'){
							if(top>owner.offsetTop+owner.offsetHeight){
								top=owner.offsetTop;
								if(owner.offsetLeft<game.players[Math.floor(game.players.length/2)].offsetLeft&&owner.offsetTop>30){
									left+=70;
								}else{
									left-=70;
								};
								inc();
							};
						}else{
							if(pl.扩展ol_owner!=game.me){
								if(left>owner.offsetLeft+owner.offsetWidth){
									left=owner.offsetLeft;
									top+=70;
									inc();
								};
							};
						};
					};
					inc();
					if(pl.style.left!=left+'px') pl.style.left=left+'px';
					if(pl.style.top!=top+'px') pl.style.top=top+'px';
				};
			};
		};
	};
	var kzol_get_attitude=get.attitude;
	get.attitude=function(from,to){
		if(from!=undefined&&from.扩展ol_owner!=undefined&&from.扩展ol_owner==to){
			var num=5;
			if(from.isMad()) num=-num;
			return num;
		};
		if(to!=undefined&&to.扩展ol_owner!=undefined&&to.扩展ol_owner==from){
			var num=5;
			if(from.isMad()) num=-num;
			return num;
		};
		return kzol_get_attitude(from,to);
	};
	lib.skill['_kzol_undist']={
		/*
		mod:{
			globalFrom:function(from,to,distance){
				//from是自己
				if(from.扩展ol_owner) return get.distance(to,from.扩展ol_owner);
			},
		},
		*/
		mod:{
			targetInRange:function (card,player,target,now){
				if(target.扩展ol_owner&&get.distance(player,target.扩展ol_owner,'attack')<=1) return true;
				if(player.扩展ol_owner&&get.distance(player,target,'attack')<=1) return true;
			},
		},
	};
	lib.arenaReady.push(function(){
		ui.kzol_reSetSeat=ui.create.system('士兵跟随',game.reSetSeat,false);
		ui.kzol_reSetSeat.style.display='none';
	});
	game.addShibing=function(name,player){
		_status.addingShibing=true;
		var fellow=game.addFellow(0,name);
		delete _status.addingShibing;
		fellow.hide();
		//fellow.style.left='calc(50% - '+(fellow.offsetWidth/2)+'px)';
		//fellow.style.top='calc(50% - '+(fellow.offsetHeight/2)+'px)';
		fellow.扩展ol_type='fellow';
		fellow.扩展ol_owner=player;
		//if(fellow.name.indexOf('kzol_bwp_')==-1) fellow.classList.add('minskin');
		if(get.mode()=='chess'||get.mode()=='tafang'){
			fellow.kzol_inchess=true;
			ui.chess.appendChild(fellow);
			var grids=[];
			var gridnum=ui.chessheight*ui.chesswidth;
			for(var i=0;i<gridnum;i++){
				grids.push(i);
			};
			for(var i=0;i<game.players.length;i++){
				grids.remove(parseInt(game.players[i].dataset.position));
			};
			for(var i=0;i<game.obstacles.length;i++){
				grids.remove(parseInt(game.obstacles[i].dataset.position));
			};
			for(var i=0;i<game.treasures.length;i++){
				grids.remove(parseInt(game.treasures[i].dataset.position));
			};
			ui.placeChess(fellow,grids.randomGet());
			lib.posmap[fellow.dataset.position]=fellow;
		}else{
			fellow.style.width='65px';
			fellow.style.height='65px';
			fellow.node.avatar.style.width='55px';
			fellow.node.avatar.style.height='55px';
			fellow.node.avatar.style.left='5px';
			fellow.node.avatar.style.top='5px';
			fellow.node.identity.style.left='50px';
			fellow.node.name.innerHTML='<span style="font-size:12px;">'+fellow.node.name.innerHTML+'</span>'
			fellow.node.name.style.left='6px';
			fellow.node.name.style.top='8px';
			fellow.node.name.style['font-size']='12px';
			//fellow.node.hp.style.width='20px';
			fellow.node.hp.style.left='43px';
			fellow.node.hp.style.bottom='0px';
			fellow.node.hp.style['font-size']='13px';
			fellow.node.count.style.bottom='10px';
			fellow.node.marks.style.top='8px';
			fellow.node.judges.style.top='8px';
			fellow.node.equips.style.top='60px';
			fellow.node.equips.style.left='0px';
			fellow.node.equips.style.width='90px';
		};
		if(player.side!=undefined) fellow.side=player.side;
		fellow.identity=player.identity;
		if(fellow.identity=='zhu') fellow.identity='zhong';
		fellow.setIdentity('兵');
		fellow.node.identity.dataset.color='cai';
		if(fellow.扩展ol_owner.identity=='zhu'){
			fellow.node.identity.classList.remove('guessing');
			fellow.identityShown=true;
			fellow.node.identity.dataset.color=fellow.identity;
		};
		fellow.ai.shown=1;
		fellow.addSkill('undist');
		//fellow.addSkill('kzol_undist');
		if(lib.skill['_bwp_changeAvatar']!=undefined){
			if(lib.skill['_bwp_changeAvatar'].filter(undefined,fellow)) fellow.useSkill('_bwp_changeAvatar');
		};
		if(lib.skill['_bwp_changeAbility']!=undefined){
			if(lib.skill['_bwp_changeAbility'].filter(undefined,fellow)) fellow.useSkill('_bwp_changeAbility');
		};
		fellow.update();
		game.reSetSeat();
		setTimeout(function(){
			fellow.show();
		},750);
		game.delay(1.5);
		ui.kzol_reSetSeat.style.display='';
		return fellow;
	};
	var style2=document.createElement('style');
	style2.innerHTML="div[data-nature='min'],";
	style2.innerHTML+="span[data-nature='min'] {text-shadow: black 0 0 1px,rgba(50, 240, 0,1) 0 0 2px,rgba(50, 240, 0,1) 0 0 5px,rgba(50, 240, 0,1) 0 0 10px,rgba(50, 240, 0,1) 0 0 10px}";
	style2.innerHTML+="div[data-nature='minm'],";
	style2.innerHTML+="span[data-nature='minm'] {text-shadow: black 0 0 1px,rgba(50, 240, 0,1) 0 0 2px,rgba(50, 240, 0,1) 0 0 5px,rgba(50, 240, 0,1) 0 0 5px,rgba(50, 240, 0,1) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='minmm'],";
	style2.innerHTML+="span[data-nature='minmm'] {text-shadow: black 0 0 1px,rgba(50, 240, 0,1) 0 0 2px,rgba(50, 240, 0,1) 0 0 2px,rgba(50, 240, 0,1) 0 0 2px,rgba(50, 240, 0,1) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='zhi'],";
	style2.innerHTML+="span[data-nature='zhi'] {text-shadow: black 0 0 1px,rgba(78, 117, 180,1) 0 0 2px,rgba(78, 117, 180,1) 0 0 5px,rgba(78, 117, 180,1) 0 0 10px,rgba(78, 117, 180,1) 0 0 10px}";
	style2.innerHTML+="div[data-nature='zhim'],";
	style2.innerHTML+="span[data-nature='zhim'] {text-shadow: black 0 0 1px,rgba(78, 117, 180,1) 0 0 2px,rgba(78, 117, 180,1) 0 0 5px,rgba(78, 117, 180,1) 0 0 5px,rgba(78, 117, 180,1) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='zhimm'],";
	style2.innerHTML+="span[data-nature='zhimm'] {text-shadow: black 0 0 1px,rgba(78, 117, 180,1) 0 0 2px,rgba(78, 117, 180,1) 0 0 2px,rgba(78, 117, 180,1) 0 0 2px,rgba(78, 117, 180,1) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='li'],";
	style2.innerHTML+="span[data-nature='li'] {text-shadow: black 0 0 1px,rgba(240, 50, 0,1) 0 0 2px,rgba(240, 50, 0,1) 0 0 5px,rgba(240, 50, 0,1) 0 0 10px,rgba(240, 50, 0,1) 0 0 10px}";
	style2.innerHTML+="div[data-nature='lim'],";
	style2.innerHTML+="span[data-nature='lim'] {text-shadow: black 0 0 1px,rgba(240, 50, 0,1) 0 0 2px,rgba(240, 50, 0,1) 0 0 5px,rgba(240, 50, 0,1) 0 0 5px,rgba(240, 50, 0,1) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='limm'],";
	style2.innerHTML+="span[data-nature='limm'] {text-shadow: black 0 0 1px,rgba(240, 50, 0,1) 0 0 2px,rgba(240, 50, 0,1) 0 0 2px,rgba(240, 50, 0,1) 0 0 2px,rgba(240, 50, 0,1) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='TLP'],";
	style2.innerHTML+="span[data-nature='TLP'] {text-shadow: black 0 0 1px,rgba(255, 200, 255,1) 0 0 2px,rgba(255, 200, 255,1) 0 0 5px,rgba(255, 200, 255,1) 0 0 10px,rgba(255, 200, 255,1) 0 0 10px}";
	style2.innerHTML+="div[data-nature='TLPm'],";
	style2.innerHTML+="span[data-nature='TLPm'] {text-shadow: black 0 0 1px,rgba(255, 200, 255,1) 0 0 2px,rgba(255, 200, 255,1) 0 0 5px,rgba(255, 200, 255,1) 0 0 5px,rgba(255, 200, 255,1) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='TLPmm'],";
	style2.innerHTML+="span[data-nature='TLPmm'] {text-shadow: black 0 0 1px,rgba(255, 200, 255,1) 0 0 2px,rgba(255, 200, 255,1) 0 0 2px,rgba(255, 200, 255,1) 0 0 2px,rgba(255, 200, 255,1) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='r'],";
	style2.innerHTML+="span[data-nature='r'] {text-shadow: black 0 0 1px,rgba(120, 255, 255,1) 0 0 2px,rgba(120, 255, 255,1) 0 0 5px,rgba(120, 255, 255,1) 0 0 10px,rgba(120, 255, 255,1) 0 0 10px}";
	style2.innerHTML+="div[data-nature='rm'],";
	style2.innerHTML+="span[data-nature='rm'] {text-shadow: black 0 0 1px,rgba(120, 255, 255,1) 0 0 2px,rgba(120, 255, 255,1) 0 0 5px,rgba(120, 255, 255,1) 0 0 5px,rgba(120, 255, 255,1) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='rmm'],";
	style2.innerHTML+="span[data-nature='rmm'] {text-shadow: black 0 0 1px,rgba(120, 255, 255,1) 0 0 2px,rgba(120, 255, 255,1) 0 0 2px,rgba(120, 255, 255,1) 0 0 2px,rgba(120, 255, 255,1) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='sr'],";
	style2.innerHTML+="span[data-nature='sr'] {text-shadow: black 0 0 1px,rgba(255, 30, 255,1) 0 0 2px,rgba(255, 30, 255,1) 0 0 5px,rgba(255, 30, 255,1) 0 0 10px,rgba(255, 30, 255,1) 0 0 10px}";
	style2.innerHTML+="div[data-nature='srm'],";
	style2.innerHTML+="span[data-nature='srm'] {text-shadow: black 0 0 1px,rgba(255, 30, 255,1) 0 0 2px,rgba(255, 30, 255,1) 0 0 5px,rgba(255, 30, 255,1) 0 0 5px,rgba(255, 30, 255,1) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='srmm'],";
	style2.innerHTML+="span[data-nature='srmm'] {text-shadow: black 0 0 1px,rgba(255, 30, 255,1) 0 0 2px,rgba(255, 30, 255,1) 0 0 2px,rgba(255, 30, 255,1) 0 0 2px,rgba(255, 30, 255,1) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='ssr'],";
	style2.innerHTML+="span[data-nature='ssr'] {text-shadow: black 0 0 1px,rgba(255, 255, 100,1) 0 0 2px,rgba(255, 255, 100,1) 0 0 5px,rgba(255, 255, 100,1) 0 0 10px,rgba(255, 255, 100,1) 0 0 10px}";
	style2.innerHTML+="div[data-nature='ssrm'],";
	style2.innerHTML+="span[data-nature='ssrm'] {text-shadow: black 0 0 1px,rgba(255, 255, 100,1) 0 0 2px,rgba(255, 255, 100,1) 0 0 5px,rgba(255, 255, 100,1) 0 0 5px,rgba(255, 255, 100,1) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='ssrmm'],";
	style2.innerHTML+="span[data-nature='ssrmm'] {text-shadow: black 0 0 1px,rgba(255, 255, 100,1) 0 0 2px,rgba(255, 255, 100,1) 0 0 2px,rgba(255, 255, 100,1) 0 0 2px,rgba(255, 255, 100,1) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='meng'],";
	style2.innerHTML+="span[data-nature='meng'] {text-shadow: black 0 0 1px,rgba(255, 75, 255,1) 0 0 2px,rgba(255, 75, 255,1) 0 0 5px,rgba(255, 75, 255,1) 0 0 10px,rgba(255, 75, 255,1) 0 0 10px}";
	style2.innerHTML+="div[data-nature='mengm'],";
	style2.innerHTML+="span[data-nature='mengm'] {-webkit-animation: rainBowText 4s linear infinite;animation: rainBowText 4s linear infinite;}";
	style2.innerHTML+="div[data-nature='mengmm'],";
	style2.innerHTML+="span[data-nature='mengmm'] {-webkit-animation: rainBowText 4s linear infinite;animation: rainBowText 4s linear infinite;}";
	style2.innerHTML+="div[data-nature='kzsg1'],";
	style2.innerHTML+="span[data-nature='kzsg1'] {text-shadow: black 0 0 1px,rgba(204, 204, 204,255) 0 0 2px,rgba(204, 204, 204,255) 0 0 2px,rgba(204, 204, 204,255) 0 0 2px,rgba(204, 204, 204,255) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='kzsg2'],";
	style2.innerHTML+="span[data-nature='kzsg2'] {text-shadow: black 0 0 1px,rgba(255,255,255,255) 0 0 2px,rgba(255,255,255,255) 0 0 2px,rgba(255,255,255,255) 0 0 2px,rgba(255,255,255,255) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='kzsg3'],";
	style2.innerHTML+="span[data-nature='kzsg3'] {text-shadow: black 0 0 1px,rgba(51,255,0,255) 0 0 2px,rgba(51,255,0,255) 0 0 2px,rgba(51,255,0,255) 0 0 2px,rgba(51,255,0,255) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='kzsg4'],";
	style2.innerHTML+="span[data-nature='kzsg4'] {text-shadow: black 0 0 1px,rgba(0,0,255,255) 0 0 2px,rgba(0,0,255,255) 0 0 2px,rgba(0,0,255,255) 0 0 2px,rgba(0,0,255,255) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='kzsg5'],";
	style2.innerHTML+="span[data-nature='kzsg5'] {text-shadow: black 0 0 1px,rgba(204,0,255,255) 0 0 2px,rgba(204,0,255,255) 0 0 2px,rgba(204,0,255,255) 0 0 2px,rgba(204,0,255,255) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='kzsg6'],";
	style2.innerHTML+="span[data-nature='kzsg6'] {text-shadow: black 0 0 1px,rgba(238,118,33,255) 0 0 2px,rgba(238,118,33,255) 0 0 2px,rgba(238,118,33,255) 0 0 2px,rgba(238,118,33,255) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='kzsg7'],";
	style2.innerHTML+="span[data-nature='kzsg7'] {text-shadow: black 0 0 1px,rgba(255,0,0,255) 0 0 2px,rgba(255,0,0,255) 0 0 2px,rgba(255,0,0,255) 0 0 2px,rgba(255,0,0,255) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='wang'],";
	style2.innerHTML+="span[data-nature='wang'] {text-shadow: black 0 0 1px,rgba(255,255,0,1) 0 0 2px,rgba(255,255,0,1) 0 0 5px,rgba(255,255,0,1) 0 0 10px,rgba(255,255,0,1) 0 0 10px}";
	style2.innerHTML+="div[data-nature='wangm'],";
	style2.innerHTML+="span[data-nature='wangm'] {text-shadow: black 0 0 1px,rgba(255,255,0,1) 0 0 2px,rgba(255,255,0,1) 0 0 5px,rgba(255,255,0,1) 0 0 5px,rgba(255,255,0,1) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='wangmm'],";
	style2.innerHTML+="span[data-nature='wangmm'] {text-shadow: black 0 0 1px,rgba(255,255,0,1) 0 0 2px,rgba(255,255,0,1) 0 0 2px,rgba(255,255,0,1) 0 0 2px,rgba(255,255,0,1) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='xian'],";
	style2.innerHTML+="span[data-nature='xian'] {text-shadow: black 0 0 1px,rgba(255,97,3,1) 0 0 2px,rgba(255,97,3,1) 0 0 5px,rgba(255,97,3,1) 0 0 10px,rgba(255,97,3,1) 0 0 10px}";
	style2.innerHTML+="div[data-nature='xianm'],";
	style2.innerHTML+="span[data-nature='xianm'] {text-shadow: black 0 0 1px,rgba(255,97,3,1) 0 0 2px,rgba(255,97,3,1) 0 0 5px,rgba(255,97,3,1) 0 0 5px,rgba(255,97,3,1) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='xianmm'],";
	style2.innerHTML+="span[data-nature='xianmm'] {text-shadow: black 0 0 1px,rgba(255,97,3,1) 0 0 2px,rgba(255,97,3,1) 0 0 2px,rgba(255,97,3,1) 0 0 2px,rgba(255,97,3,1) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='yao'],";
	style2.innerHTML+="span[data-nature='yao'] {text-shadow: black 0 0 1px,rgba(255,102,51,1) 0 0 2px,rgba(255,102,51,1) 0 0 5px,rgba(255,102,51,1) 0 0 10px,rgba(255,102,51,1) 0 0 10px}";
	style2.innerHTML+="div[data-nature='yaom'],";
	style2.innerHTML+="span[data-nature='yaom'] {text-shadow: black 0 0 1px,rgba(255,102,51,1) 0 0 2px,rgba(255,102,51,1) 0 0 5px,rgba(255,102,51,1) 0 0 5px,rgba(255,102,51,1) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='yaomm'],";
	style2.innerHTML+="span[data-nature='yaomm'] {text-shadow: black 0 0 1px,rgba(255,102,51,1) 0 0 2px,rgba(255,102,51,1) 0 0 2px,rgba(255,102,51,1) 0 0 2px,rgba(255,102,51,1) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='kzol_sesx'],";
	style2.innerHTML+="span[data-nature='kzol_sesx'] {text-shadow: black 0 0 1px,rgba(255, 3, 3, 0.8) 0 0 2px,rgba(255, 3, 3, 0.8) 0 0 5px,rgba(255, 3, 3, 0.8) 0 0 10px,rgba(255, 3, 3, 0.8) 0 0 10px}";
	style2.innerHTML+="div[data-nature='kzol_sesxm'],";
	style2.innerHTML+="span[data-nature='kzol_sesxm'] {text-shadow: black 0 0 1px,rgba(255, 3, 3, 0.8) 0 0 2px,rgba(255, 3, 3, 0.8) 0 0 5px,rgba(255, 3, 3, 0.8) 0 0 5px,rgba(255, 3, 3, 0.8) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='kzol_sesxmm'],";
	style2.innerHTML+="span[data-nature='kzol_sesxmm'] {text-shadow: black 0 0 1px,rgba(255, 3, 3, 0.8) 0 0 2px,rgba(255, 3, 3, 0.8) 0 0 2px,rgba(255, 3, 3, 0.8) 0 0 2px,rgba(255, 3, 3, 0.8) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='ly_junshenbao_sociatyBeast'],";
	style2.innerHTML+="span[data-nature='ly_junshenbao_sociatyBeast'] {text-shadow: black 0 0 1px,rgba(255,0,0, 0.8) 0 0 2px,rgba(255,0,0, 0.8) 0 0 5px,rgba(255,0,0, 0.8) 0 0 10px,rgba(255,0,0, 0.8) 0 0 10px}";
	style2.innerHTML+="div[data-nature='ly_junshenbao_sociatyBeastm'],";
	style2.innerHTML+="span[data-nature='ly_junshenbao_sociatyBeastm'] {text-shadow: black 0 0 1px,rgba(255,0,0, 0.8) 0 0 2px,rgba(255,0,0, 0.8) 0 0 5px,rgba(255,0,0, 0.8) 0 0 5px,rgba(255,0,0, 0.8) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='ly_junshenbao_sociatyBeastmm'],";
	style2.innerHTML+="span[data-nature='ly_junshenbao_sociatyBeastmm'] {text-shadow: black 0 0 1px,rgba(255,0,0, 0.8) 0 0 2px,rgba(255,0,0, 0.8) 0 0 2px,rgba(255,0,0, 0.8) 0 0 2px,rgba(255,0,0, 0.8) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='djl'],";
	style2.innerHTML+="span[data-nature='djl'] {text-shadow: black 0 0 1px,rgba(0,0,255, 0.8) 0 0 2px,rgba(0,0,255, 0.8) 0 0 5px,rgba(0,0,255, 0.8) 0 0 10px,rgba(0,0,255, 0.8) 0 0 10px}";
	style2.innerHTML+="div[data-nature='djlm'],";
	style2.innerHTML+="span[data-nature='djlm'] {text-shadow: black 0 0 1px,rgba(0,0,255, 0.8) 0 0 2px,rgba(0,0,255, 0.8) 0 0 5px,rgba(0,0,255, 0.8) 0 0 5px,rgba(0,0,255, 0.8) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='djlmm'],";
	style2.innerHTML+="span[data-nature='djlmm'] {text-shadow: black 0 0 1px,rgba(0,0,255, 0.8) 0 0 2px,rgba(0,0,255, 0.8) 0 0 2px,rgba(0,0,255, 0.8) 0 0 2px,rgba(0,0,255, 0.8) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='WSS_jin'],";
	style2.innerHTML+="span[data-nature='WSS_jin'] {text-shadow:0 0 2px #fff,0 0 4px #6AB5FF,0 0 6px #6AB5FF,0 0 8px #6AB5FF,0 0 14px #6AB5FF,0 0 16px #6AB5FF,0 0 20px #6AB5FF,0 0 30px #6AB5FF;}";
	style2.innerHTML+="div[data-nature='WSS_jinm'],";
	style2.innerHTML+="span[data-nature='WSS_jinm'] {text-shadow:0 0 2px #6AB5FF,0 0 4px #6AB5FF,0 0 6px #6AB5FF,0 0 8px #6AB5FF,0 0 14px #6AB5FF,0 0 16px #6AB5FF,0 0 20px #6AB5FF,0 0 30px #6AB5FF;}";
	style2.innerHTML+="div[data-nature='WSS_jinmm'],";
	style2.innerHTML+="span[data-nature='WSS_jinmm'] {text-shadow:0 0 2px #6AB5FF,0 0 4px #6AB5FF,0 0 6px #6AB5FF,0 0 8px #6AB5FF,0 0 14px #6AB5FF,0 0 16px #6AB5FF,0 0 20px #6AB5FF,0 0 30px #6AB5FF;}";
	style2.innerHTML+="div[data-nature='gu'],";
	style2.innerHTML+="span[data-nature='gu'] {text-shadow:0 0 4px #fefcc9,10px -2px 6px #feec85,-4px -4px 8px #ffae34,4px -8px 10px #ec760c,-4px -12px 12px #cd4606,0 -16px 14px #973716,2px -18px 16px #451b0e;}";
	style2.innerHTML+="div[data-nature='gum'],";
	style2.innerHTML+="span[data-nature='gum'] {text-shadow:black 0 0 1px,rgba(240, 50, 0,1) 0 0 2px,rgba(240, 50, 0,1) 0 0 5px,rgba(240, 50, 0,1) 0 0 10px,rgba(240, 50, 0,1) 0 0 10px;}";
	style2.innerHTML+="div[data-nature='gumm'],";
	style2.innerHTML+="span[data-nature='gumm'] {text-shadow:black 0 0 1px,rgba(240, 50, 0,1) 0 0 2px,rgba(240, 50, 0,1) 0 0 5px,rgba(240, 50, 0,1) 0 0 10px,rgba(240, 50, 0,1) 0 0 10px;}";
	style2.innerHTML+="div[data-nature='G'],";
	style2.innerHTML+="span[data-nature='G'] {text-shadow: black 0 0 1px,rgba(0,0,0, 0.8) 0 0 2px,rgba(0,0,0, 0.8) 0 0 5px,rgba(0,0,0, 0.8) 0 0 10px,rgba(0,0,0, 0.8) 0 0 10px}";
	style2.innerHTML+="div[data-nature='Gm'],";
	style2.innerHTML+="span[data-nature='Gm'] {text-shadow: black 0 0 1px,rgba(0,0,0, 0.8) 0 0 2px,rgba(0,0,0, 0.8) 0 0 5px,rgba(0,0,0, 0.8) 0 0 5px,rgba(0,0,0, 0.8) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='Gmm'],";
	style2.innerHTML+="span[data-nature='Gmm'] {text-shadow: black 0 0 1px,rgba(0,0,0, 0.8) 0 0 2px,rgba(0,0,0, 0.8) 0 0 2px,rgba(0,0,0, 0.8) 0 0 2px,rgba(0,0,0, 0.8) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='Han'],";
	style2.innerHTML+="span[data-nature='Han'] {text-shadow: black 0 0 1px,rgba(255,0,0, 0.8) 0 0 2px,rgba(255,0,0, 0.8) 0 0 5px,rgba(255,0,0, 0.8) 0 0 10px,rgba(255,0,0, 0.8) 0 0 10px}";
	style2.innerHTML+="div[data-nature='Hanm'],";
	style2.innerHTML+="span[data-nature='Hanm'] {text-shadow: black 0 0 1px,rgba(255,0,0, 0.8) 0 0 2px,rgba(255,0,0, 0.8) 0 0 5px,rgba(255,0,0, 0.8) 0 0 5px,rgba(255,0,0, 0.8) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='Hanmm'],";
	style2.innerHTML+="span[data-nature='Hanmm'] {text-shadow: black 0 0 1px,rgba(255,0,0, 0.8) 0 0 2px,rgba(255,0,0, 0.8) 0 0 2px,rgba(255,0,0, 0.8) 0 0 2px,rgba(255,0,0, 0.8) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='lu'],";
	style2.innerHTML+="span[data-nature='lu'] {text-shadow: black 0 0 1px,rgba(166,125,61, 0.8) 0 0 2px,rgba(166,125,61, 0.8) 0 0 5px,rgba(166,125,61, 0.8) 0 0 10px,rgba(166,125,61, 0.8) 0 0 10px}";
	style2.innerHTML+="div[data-nature='lum'],";
	style2.innerHTML+="span[data-nature='lum'] {text-shadow: black 0 0 1px,rgba(166,125,61, 0.8) 0 0 2px,rgba(166,125,61, 0.8) 0 0 5px,rgba(166,125,61, 0.8) 0 0 5px,rgba(166,125,61, 0.8) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='lumm'],";
	style2.innerHTML+="span[data-nature='lumm'] {text-shadow: black 0 0 1px,rgba(166,125,61, 0.8) 0 0 2px,rgba(166,125,61, 0.8) 0 0 2px,rgba(166,125,61, 0.8) 0 0 2px,rgba(166,125,61, 0.8) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='qin'],";
	style2.innerHTML+="span[data-nature='qin'] {text-shadow: black 0 0 1px,rgba(50,205,50, 0.8) 0 0 2px,rgba(50,205,50, 0.8) 0 0 5px,rgba(50,205,50, 0.8) 0 0 10px,rgba(50,205,50, 0.8) 0 0 10px}";
	style2.innerHTML+="div[data-nature='qinm'],";
	style2.innerHTML+="span[data-nature='qinm'] {text-shadow: black 0 0 1px,rgba(50,205,50, 0.8) 0 0 2px,rgba(50,205,50, 0.8) 0 0 5px,rgba(50,205,50, 0.8) 0 0 5px,rgba(50,205,50, 0.8) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='qinmm'],";
	style2.innerHTML+="span[data-nature='qinmm'] {text-shadow: black 0 0 1px,rgba(50,205,50, 0.8) 0 0 2px,rgba(50,205,50, 0.8) 0 0 2px,rgba(50,205,50, 0.8) 0 0 2px,rgba(50,205,50, 0.8) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='qi'],";
	style2.innerHTML+="span[data-nature='qi'] {text-shadow: black 0 0 1px,rgba(135,31,120, 0.8) 0 0 2px,rgba(135,31,120, 0.8) 0 0 5px,rgba(135,31,120, 0.8) 0 0 10px,rgba(135,31,120, 0.8) 0 0 10px}";
	style2.innerHTML+="div[data-nature='qim'],";
	style2.innerHTML+="span[data-nature='qim'] {text-shadow: black 0 0 1px,rgba(135,31,120, 0.8) 0 0 2px,rgba(135,31,120, 0.8) 0 0 5px,rgba(135,31,120, 0.8) 0 0 5px,rgba(135,31,120, 0.8) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='qimm'],";
	style2.innerHTML+="span[data-nature='qimm'] {text-shadow: black 0 0 1px,rgba(135,31,120, 0.8) 0 0 2px,rgba(135,31,120, 0.8) 0 0 2px,rgba(135,31,120, 0.8) 0 0 2px,rgba(135,31,120, 0.8) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='yan'],";
	style2.innerHTML+="span[data-nature='yan'] {text-shadow: black 0 0 1px,rgba(0,127,255, 0.8) 0 0 2px,rgba(0,127,255, 0.8) 0 0 5px,rgba(0,127,255, 0.8) 0 0 10px,rgba(0,127,255, 0.8) 0 0 10px}";
	style2.innerHTML+="div[data-nature='yanm'],";
	style2.innerHTML+="span[data-nature='yanm'] {text-shadow: black 0 0 1px,rgba(0,127,255, 0.8) 0 0 2px,rgba(0,127,255, 0.8) 0 0 5px,rgba(0,127,255, 0.8) 0 0 5px,rgba(0,127,255, 0.8) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='yanmm'],";
	style2.innerHTML+="span[data-nature='yanmm'] {text-shadow: black 0 0 1px,rgba(0,127,255, 0.8) 0 0 2px,rgba(0,127,255, 0.8) 0 0 2px,rgba(0,127,255, 0.8) 0 0 2px,rgba(0,127,255, 0.8) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='zhao'],";
	style2.innerHTML+="span[data-nature='zhao'] {text-shadow: black 0 0 1px,rgba(66,66,111, 0.8) 0 0 2px,rgba(66,66,111, 0.8) 0 0 5px,rgba(66,66,111, 0.8) 0 0 10px,rgba(66,66,111, 0.8) 0 0 10px}";
	style2.innerHTML+="div[data-nature='zhaom'],";
	style2.innerHTML+="span[data-nature='zhaom'] {text-shadow: black 0 0 1px,rgba(66,66,111, 0.8) 0 0 2px,rgba(66,66,111, 0.8) 0 0 5px,rgba(66,66,111, 0.8) 0 0 5px,rgba(66,66,111, 0.8) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='zhaomm'],";
	style2.innerHTML+="span[data-nature='zhaomm'] {text-shadow: black 0 0 1px,rgba(66,66,111, 0.8) 0 0 2px,rgba(66,66,111, 0.8) 0 0 2px,rgba(66,66,111, 0.8) 0 0 2px,rgba(66,66,111, 0.8) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='han'],";
	style2.innerHTML+="span[data-nature='han'] {text-shadow: black 0 0 1px,rgba(255,0,255, 0.8) 0 0 2px,rgba(255,0,255, 0.8) 0 0 5px,rgba(255,0,255, 0.8) 0 0 10px,rgba(255,0,255, 0.8) 0 0 10px}";
	style2.innerHTML+="div[data-nature='hanm'],";
	style2.innerHTML+="span[data-nature='hanm'] {text-shadow: black 0 0 1px,rgba(255,0,255, 0.8) 0 0 2px,rgba(255,0,255, 0.8) 0 0 5px,rgba(255,0,255, 0.8) 0 0 5px,rgba(255,0,255, 0.8) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='hanmm'],";
	style2.innerHTML+="span[data-nature='hanmm'] {text-shadow: black 0 0 1px,rgba(255,0,255, 0.8) 0 0 2px,rgba(255,0,255, 0.8) 0 0 2px,rgba(255,0,255, 0.8) 0 0 2px,rgba(255,0,255, 0.8) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='mpl_dfs'],";
	style2.innerHTML+="span[data-nature='mpl_dfs'] {text-shadow: black 0 0 1px,rgba(255,120,0, 0.8) 0 0 2px,rgba(255,120,0, 0.8) 0 0 5px,rgba(255,120,0, 0.8) 0 0 10px,rgba(255,120,0, 0.8) 0 0 10px}";
	style2.innerHTML+="div[data-nature='mpl_dfsm'],";
	style2.innerHTML+="span[data-nature='mpl_dfsm'] {text-shadow: black 0 0 1px,rgba(255,120,0, 0.8) 0 0 2px,rgba(255,120,0, 0.8) 0 0 5px,rgba(255,120,0, 0.8) 0 0 5px,rgba(255,120,0, 0.8) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='mpl_dfsmm'],";
	style2.innerHTML+="span[data-nature='mpl_dfsmm'] {text-shadow: black 0 0 1px,rgba(255,120,0, 0.8) 0 0 2px,rgba(255,120,0, 0.8) 0 0 2px,rgba(255,120,0, 0.8) 0 0 2px,rgba(255,120,0, 0.8) 0 0 2px,black 0 0 1px;}";
	document.head.appendChild(style2);
	lib.extensionMenu.extension_扩展ol['8gEquips_title']={
		"name":"<b><p align=center><span style=\"font-size:18px\">------八格装备栏------</span></b>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol['8gEquips_choice']={
		"name":"关闭8格装备栏显示",
		"init":false,
		"intro":"开启后，关闭装备区8格装备栏的显示"
	};
	lib.extensionMenu.extension_扩展ol['8gEquips_choice1']={
		"name":"关闭8格装备栏相关模块",
		"init":false,
		"intro":"开启该选项且关闭8格装备栏后，移除牌堆中与8格装备栏有关的扩展ol手牌包模块中的牌"
	};
	if(lib.config.extension_扩展ol_8gEquips_choice!=true&&(lib.config.layout=='default'||lib.config.layout=='mobile'||lib.config.layout=='long')){
		var style=document.createElement('style');
		style.innerHTML="#arena:not(.chess) .player[data-position='0']>.equips>.equip1{top: 16px;left: 3px}";
		style.innerHTML+="#arena:not(.chess) .player[data-position='0']>.equips>.equip2{top: 16px;left: 42px}";
		style.innerHTML+="#arena:not(.chess) .player[data-position='0']>.equips>.equip3{top: 68px;left: 3px}";
		style.innerHTML+="#arena:not(.chess) .player[data-position='0']>.equips>.equip4{top: 68px;left: 42px}";
		style.innerHTML+="#arena:not(.chess) .player[data-position='0']>.equips>.equip5{top: 42px;left: 22.5px}";
		style.innerHTML+="#arena:not(.chess) .player[data-position='0']>.equips>.equip6{top: 3px;left: 81px}";
		style.innerHTML+="#arena:not(.chess) .player[data-position='0']>.equips>.equip7{top: 42px;left: 81px}";
		style.innerHTML+="#arena:not(.chess) .player[data-position='0']>.equips>.equip8{top: 81px;left: 81px}";
		style.innerHTML+="#arena:not(.chess) .player[data-position='0']>.equips>div:not(.equip9){width: 36px;height: 36px;margin: 0;border-radius: 4px;position: absolute;}";
		document.head.appendChild(style);
	};
	var style1=document.createElement('style');
	style1.innerHTML="[data-number='9']>.player[data-position='1']{top:calc(200% / 3 - 145px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='9']>.player[data-position='2']{top:calc(100% / 3 - 120px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='9']>.player[data-position='3']{top:30px;left:calc(77% - 75px);}";
	style1.innerHTML+="[data-number='9']>.player[data-position='4']{top:5px;left:calc(59% - 75px);}";
	style1.innerHTML+="[data-number='9']>.player[data-position='5']{top:5px;left:calc(41% - 75px);}";
	style1.innerHTML+="[data-number='9']>.player[data-position='6']{top:30px;left:calc(23% - 75px);}";
	style1.innerHTML+="[data-number='9']>.player[data-position='7']{top:calc(100% / 3 - 120px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='9']>.player[data-position='8']{top:calc(200% / 3 - 145px);left:calc(5% - 75px);}";
	
	style1.innerHTML+="[data-number='10']>.player[data-position='1']{top:calc(200% / 3 - 145px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='10']>.player[data-position='2']{top:calc(100% / 3 - 120px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='10']>.player[data-position='3']{top:30px;left:calc(80% - 75px);}";
	style1.innerHTML+="[data-number='10']>.player[data-position='4']{top:5px;left:calc(65% - 75px);}";
	style1.innerHTML+="[data-number='10']>.player[data-position='5']{top:0px;left:calc(50% - 75px);}";
	style1.innerHTML+="[data-number='10']>.player[data-position='6']{top:5px;left:calc(35% - 75px);}";
	style1.innerHTML+="[data-number='10']>.player[data-position='7']{top:30px;left:calc(20% - 75px);}";
	style1.innerHTML+="[data-number='10']>.player[data-position='8']{top:calc(100% / 3 - 120px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='10']>.player[data-position='9']{top:calc(200% / 3 - 145px);left:calc(5% - 75px);}";
	
	style1.innerHTML+="[data-number='11']>.player[data-position='1']{top:calc(50% + 25px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='11']>.player[data-position='2']{top:calc(25% + 25px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='11']>.player[data-position='3']{top:25px;left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='11']>.player[data-position='4']{top:15px;left:calc(77% - 75px);}";
	style1.innerHTML+="[data-number='11']>.player[data-position='5']{top:5px;left:calc(59% - 75px);}";
	style1.innerHTML+="[data-number='11']>.player[data-position='6']{top:5px;left:calc(41% - 75px);}";
	style1.innerHTML+="[data-number='11']>.player[data-position='7']{top:15px;left:calc(23% - 75px);}";
	style1.innerHTML+="[data-number='11']>.player[data-position='8']{top:25px;left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='11']>.player[data-position='9']{top:calc(25% + 25px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='11']>.player[data-position='10']{top:calc(50% + 25px);left:calc(5% - 75px);}";
	
	style1.innerHTML+="[data-number='12']>.player[data-position='1']{top:calc(50% + 35px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='12']>.player[data-position='2']{top:calc(25% + 35px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='12']>.player[data-position='3']{top:35px;left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='12']>.player[data-position='4']{top:25px;left:calc(80% - 75px);}";
	style1.innerHTML+="[data-number='12']>.player[data-position='5']{top:15px;left:calc(65% - 75px);}";
	style1.innerHTML+="[data-number='12']>.player[data-position='6']{top:5px;left:calc(50% - 75px);}";
	style1.innerHTML+="[data-number='12']>.player[data-position='7']{top:15px;left:calc(35% - 75px);}";
	style1.innerHTML+="[data-number='12']>.player[data-position='8']{top:25px;left:calc(20% - 75px);}";
	style1.innerHTML+="[data-number='12']>.player[data-position='9']{top:35px;left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='12']>.player[data-position='10']{top:calc(25% + 35px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='12']>.player[data-position='11']{top:calc(50% + 35px);left:calc(5% - 75px);}";
	
	style1.innerHTML+="[data-number='13']>.player[data-position='1']{top:calc(50% + 35px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='13']>.player[data-position='2']{top:calc(25% + 35px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='13']>.player[data-position='3']{top:35px;left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='13']>.player[data-position='4']{top:25px;left:calc(82.143% - 75px);}";
	style1.innerHTML+="[data-number='13']>.player[data-position='5']{top:15px;left:calc(69.286% - 75px);}";
	style1.innerHTML+="[data-number='13']>.player[data-position='6']{top:5px;left:calc(56.429% - 75px);}";
	style1.innerHTML+="[data-number='13']>.player[data-position='7']{top:5px;left:calc(43.572% - 75px);}";
	style1.innerHTML+="[data-number='13']>.player[data-position='8']{top:15px;left:calc(30.715% - 75px);}";
	style1.innerHTML+="[data-number='13']>.player[data-position='9']{top:25px;left:calc(17.858% - 75px);}";
	style1.innerHTML+="[data-number='13']>.player[data-position='10']{top:35px;left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='13']>.player[data-position='11']{top:calc(25% + 35px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='13']>.player[data-position='12']{top:calc(50% + 35px);left:calc(5% - 75px);}";
	
	if(!lib.device){
		style1.innerHTML+="[data-number='14']>.player[data-position='1']{top:calc(100% / 3 + 190px);left:calc(95% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='2']{top:calc(100% / 3 + 60px);left:calc(95% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='3']{top:calc(100% / 3 - 70px);left:calc(95% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='4']{top:calc(100% / 3 - 200px);left:calc(95% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='5']{top:30px;left:calc(80% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='6']{top:10px;left:calc(65% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='7']{top:0px;left:calc(50% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='8']{top:10px;left:calc(35% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='9']{top:30px;left:calc(20% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='10']{top:calc(100% / 3 - 200px);left:calc(5% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='11']{top:calc(100% / 3 - 70px);left:calc(5% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='12']{top:calc(100% / 3 + 60px);left:calc(5% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='13']{top:calc(100% / 3 + 190px);left:calc(5% - 75px);}";
	}else{
		style1.innerHTML+="[data-number='14']>.player[data-position='1']{top:calc(100% / 3 + 130px);left:calc(80% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='2']{top:calc(100% / 3 + 110px);left:calc(95% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='3']{top:calc(100% / 3 - 35px);left:calc(95% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='4']{top:calc(100% / 3 - 180px);left:calc(95% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='5']{top:30px;left:calc(80% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='6']{top:10px;left:calc(65% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='7']{top:0px;left:calc(50% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='8']{top:10px;left:calc(35% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='9']{top:30px;left:calc(20% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='10']{top:calc(100% / 3 - 180px);left:calc(5% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='11']{top:calc(100% / 3 - 35px);left:calc(5% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='12']{top:calc(100% / 3 + 110px);left:calc(5% - 75px);}";
		style1.innerHTML+="[data-number='14']>.player[data-position='13']{top:calc(100% / 3 + 130px);left:calc(20% - 75px);}";
	};
	
	if(!lib.device){
		style1.innerHTML+="[data-number='15']>.player[data-position='1']{top:calc(100% / 3 + 190px);left:calc(95% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='2']{top:calc(100% / 3 + 60px);left:calc(95% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='3']{top:calc(100% / 3 - 70px);left:calc(95% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='4']{top:calc(100% / 3 - 200px);left:calc(95% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='5']{top:30px;left:calc(82.1% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='6']{top:10px;left:calc(69.25% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='7']{top:0px;left:calc(56.4% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='8']{top:0px;left:calc(43.55% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='9']{top:10px;left:calc(30.7% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='10']{top:30px;left:calc(17.85% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='11']{top:calc(100% / 3 - 200px);left:calc(5% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='12']{top:calc(100% / 3 - 70px);left:calc(5% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='13']{top:calc(100% / 3 + 60px);left:calc(5% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='14']{top:calc(100% / 3 + 190px);left:calc(5% - 75px);}";
	}else{
		style1.innerHTML+="[data-number='15']>.player[data-position='1']{top:calc(100% / 3 + 130px);left:calc(82.1% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='2']{top:calc(100% / 3 + 110px);left:calc(95% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='3']{top:calc(100% / 3 - 35px);left:calc(95% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='4']{top:calc(100% / 3 - 180px);left:calc(95% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='5']{top:30px;left:calc(82.1% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='6']{top:10px;left:calc(69.25% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='7']{top:0px;left:calc(56.4% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='8']{top:0px;left:calc(43.55% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='9']{top:10px;left:calc(30.7% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='10']{top:30px;left:calc(17.85% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='11']{top:calc(100% / 3 - 180px);left:calc(5% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='12']{top:calc(100% / 3 - 35px);left:calc(5% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='13']{top:calc(100% / 3 + 110px);left:calc(5% - 75px);}";
		style1.innerHTML+="[data-number='15']>.player[data-position='14']{top:calc(100% / 3 + 130px);left:calc(17.85% - 75px);}";
	};
	
	if(!lib.device){
		style1.innerHTML+="[data-number='16']>.player[data-position='1']{top:calc(100% / 3 + 190px);left:calc(95% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='2']{top:calc(100% / 3 + 60px);left:calc(95% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='3']{top:calc(100% / 3 - 70px);left:calc(95% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='4']{top:calc(100% / 3 - 200px);left:calc(95% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='5']{top:30px;left:calc(83.75% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='6']{top:20px;left:calc(72.5% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='7']{top:10px;left:calc(61.25% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='8']{top:0px;left:calc(50% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='9']{top:10px;left:calc(38.75% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='10']{top:20px;left:calc(27.5% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='11']{top:30px;left:calc(16.25% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='12']{top:calc(100% / 3 - 200px);left:calc(5% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='13']{top:calc(100% / 3 - 70px);left:calc(5% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='14']{top:calc(100% / 3 + 60px);left:calc(5% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='15']{top:calc(100% / 3 + 190px);left:calc(5% - 75px);}";
	}else{
		style1.innerHTML+="[data-number='16']>.player[data-position='1']{top:calc(100% / 3 + 130px);left:calc(83.75% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='2']{top:calc(100% / 3 + 110px);left:calc(95% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='3']{top:calc(100% / 3 - 35px);left:calc(95% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='4']{top:calc(100% / 3 - 180px);left:calc(95% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='5']{top:30px;left:calc(83.75% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='6']{top:20px;left:calc(72.5% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='7']{top:10px;left:calc(61.25% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='8']{top:0px;left:calc(50% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='9']{top:10px;left:calc(38.75% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='10']{top:20px;left:calc(27.5% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='11']{top:30px;left:calc(16.25% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='12']{top:calc(100% / 3 - 180px);left:calc(5% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='13']{top:calc(100% / 3 - 35px);left:calc(5% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='14']{top:calc(100% / 3 + 110px);left:calc(5% - 75px);}";
		style1.innerHTML+="[data-number='16']>.player[data-position='15']{top:calc(100% / 3 + 130px);left:calc(16.25% - 75px);}";
	};
	
	style1.innerHTML+="[data-number='17']>.player[data-position='1']{top:calc(100% / 3 + 160px);left:calc(50% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='2']{top:calc(100% / 3 + 160px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='3']{top:calc(100% / 3 + 30px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='4']{top:calc(100% / 3 - 100px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='5']{top:calc(100% / 3 - 230px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='6']{top:30px;left:calc(83.75% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='7']{top:20px;left:calc(72.5% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='8']{top:5px;left:calc(61.25% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='9']{top:0;left:calc(50% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='10']{top:5px;left:calc(38.75% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='11']{top:20px;left:calc(27.5% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='12']{top:30px;left:calc(16.25% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='13']{top:calc(100% / 3 - 230px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='14']{top:calc(100% / 3 - 100px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='15']{top:calc(100% / 3 + 30px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='16']{top:calc(100% / 3 + 160px);left:calc(5% - 75px);}";
	document.head.appendChild(style1);
/*Window.alert = function(){
　　//创建一个大盒子
    var box = document.createElement("div");
　　//创建一个关闭按钮
    var button = document.createElement("button");
　　//定义一个对象保存样式
    var boxName = {
        width:"500px",
        height:"180px",
        backgroundColor:"#f8f8f8",
        border:"1px solid #ccc",
        position:"absolute",
        top:"50%",
        left:"50%",
        margin:"-90px 0 0 -250px",
        zIndex:"999",
        textAlign:"center",
        lineHeight:"180px"
    }
　　//给元素添加元素
    for(var k in boxName){
        box.style[k] = boxName[k];
    }
　　//把创建的元素添加到body中
    document.body.appendChild(box);
　　//把alert传入的内容添加到box中
    if(arguments[0]){
        box.innerHTML = arguments[0];
    }
    button.innerHTML = "关闭";
 　　//定义按钮样式
    var btnName = {
        border:"1px solid #ccc",
        backgroundColor:"#fff",
        width:"70px",
        height:"30px",
        textAlign:"center",
        lineHeight:"30px",
        outline:"none",
        position:"absolute",
        bottom:"10px",
        right:"20px",
    }
    for(var j in btnName){
        button.style[j] = btnName[j];
    }
　　//把按钮添加到box中
    box.appendChild(button);
　　//给按钮添加单击事件
    button.addEventListener("click",function(){
        box.style.display = "none";
    })
}*/
	lib.translate.equip6='圣痕-上';
	lib.translate.equip7='圣痕-中';
	lib.translate.equip8='圣痕-下';
	lib.translate.unknown8='九号位';
	lib.translate.unknown9='十号位';
	lib.translate.unknown10='十一号位';
	lib.translate.unknown11='十二号位';
	lib.translate.unknown12='十三号位';
	lib.translate.unknown13='十四号位';
	lib.translate.unknown14='十五号位';
	lib.translate.unknown15='十六号位';
	lib.mode.identity.config.player_number.item={
		'2':'两人',
		'3':'三人',
		'4':'四人',
		'5':'五人',
		'6':'六人',
		'7':'七人',
		'8':'八人',
		'9':'九人',
		'10':'十人',
		'11':'十一人',
		'12':'十二人',
		'13':'十三人',
		'14':'十四人',
		'15':'十五人',
		'16':'十六人',
	}
	lib.mode.guozhan.config.player_number.item={
		'2':'两人',
		'3':'三人',
		'4':'四人',
		'5':'五人',
		'6':'六人',
		'7':'七人',
		'8':'八人',
		'9':'九人',
		'10':'十人',
		'11':'十一人',
		'12':'十二人',
		'13':'十三人',
		'14':'十四人',
		'15':'十五人',
		'16':'十六人',
	};
	var identity=['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_9r']=='2') identity=['zhu','zhong','zhong','nei','nei','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_9r']=='3') identity=['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_9r']=='4') identity=['zhu','zhong','zhong','zhong','fan','fan','fan','fan','fan'];
	if(lib.config.mode_config.identity.identity[7]==undefined&&get.mode() != 'connect') lib.config.mode_config.identity.identity.push(identity);
	identity=['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_10r']=='2') identity=['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_10r']=='3') identity=['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan'];
	if(lib.config.mode_config.identity.identity[8]==undefined&&get.mode() != 'connect') lib.config.mode_config.identity.identity.push(identity);
	identity=['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_11r']=='2') identity=['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_11r']=='3') identity=['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_11r']=='4') identity=['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan'];
	if(lib.config.mode_config.identity.identity[9]==undefined&&get.mode() != 'connect') lib.config.mode_config.identity.identity.push(identity);
	identity=['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_12r']=='2') identity=['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_12r']=='3') identity=['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan'];
	if(lib.config.mode_config.identity.identity[10]==undefined&&get.mode() != 'connect') lib.config.mode_config.identity.identity.push(identity);
	identity=['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_13r']=='2') identity=['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_13r']=='3') identity=['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_13r']=='4') identity=['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan'];
	if(lib.config.mode_config.identity.identity[11]==undefined&&get.mode() != 'connect') lib.config.mode_config.identity.identity.push(identity);
	identity=['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_14r']=='2') identity=['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_14r']=='3') identity=['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan'];
	if(lib.config.mode_config.identity.identity[12]==undefined&&get.mode() != 'connect') lib.config.mode_config.identity.identity.push(identity);
	identity=['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_15r']=='2') identity=['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_15r']=='3') identity=['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_15r']=='4') identity=['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan'];
	if(lib.config.mode_config.identity.identity[13]==undefined&&get.mode() != 'connect') lib.config.mode_config.identity.identity.push(identity);
	identity=['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_16r']=='2') identity=['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_16r']=='3') identity=['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan'];
	if(lib.config.mode_config.identity.identity[14]==undefined&&get.mode() != 'connect') lib.config.mode_config.identity.identity.push(identity);
	/*lib.skill._shenghen_image={
		trigger:{
			player:'gainBefore'
		},
		filter:function(event,player){
			for(var i=0;i<event.cards.length;i++){
				var card=event.cards[i];
				if(lib.card[card.name].shenghen_Image==true) return true;
			};
			return false;
		},
		forced:true,
		popup:false,
		content:function(){
			for(var i=0;i<trigger.cards.length;i++){
				var card=trigger.cards[i];
				if(lib.card[card.name].shenghen_Image==true){
					card.node.name.innerHTML='<img src="'+lib.assetURL+'extension/扩展ol/'+card.name+'_shenghen_Image.png" width="20" height="20">';
				};
			};
		},
	};*/
	lib.skill["_changeBG"]={
		//mode:['identity','guozhan','partner','aolaStar','wjms','wangzhezhizhan'],
		mode:['identity','guozhan','partner','aolaStar'],
		trigger:{
			//global:["gameStart","useCardBefore","phaseBefore","loseEnd","phaseBegin","phaseDradBegin","phaseUseBegin","phaseUseEnd","phaseEnd","phaseDiscardBegin","useSkillBefore","judgeAfter"],
			//player:'dieBefore',
			global:"gameStart",
		},
		filter:function (event,player){
			//if(get.mode()!='identity') return false;
			if(lib.config.extension_扩展ol_16r_zdbhbj!=true) return false;
			return game.players.length+game.dead.length-game.countPlayer(function(current){return current.扩展ol_type=='fellow'})>=9&&lib.config.layout!='mobile'&&_status.kzol_changeBG==undefined;
		},
		forced:true,
		popup:false,
		content:function (){
			_status.kzol_changeBG=true;
			//lib.config.layout='mobile';
			var layout=lib.config.layout;
			lib.init.layout('mobile');
			game.saveConfig('layout',layout);
			game.documentZoom=Math.floor(game.documentZoom*10)/10;
			ui.updatez();
			game.delay(2);
		},
	};
	lib.skill["_useCardLimit"]={
		mod:{
			targetEnabled:function(card,player,target){
				if(game.players.length+game.dead.length-game.countPlayer(function(current){return current.扩展ol_type=='fellow'})>10&&get.distance(player,target)>4) return false;
			},
		},
	};
	/*
	lib.skill["_minskinSJ"]={
		mode:['identity','guozhan','partner','aolaStar','wjms','wangzhezhizhan'],
		trigger:{
			//global:["gameStart","useCardBefore","phaseBefore","loseEnd","phaseBegin","phaseDradBegin","phaseUseBegin","phaseUseEnd","phaseEnd","phaseDiscardBegin","useSkillBefore","judgeAfter"],
			//player:'dieBefore',
			global:"gameStart",
		},
		filter:function (event,player){
			if(_status.kzol_changeMinskin!=undefined) return false;
			return game.players.length+game.dead.length-game.countPlayer(function(current){return current.扩展ol_type=='fellow'})>=11;
		},
		forced:true,
		popup:false,
		content:function (){
			game.broadcastAll(function(players){
				_status.kzol_changeMinskin=setInterval(function(){
					for(var i=0;i<players.length;i++){
						var player=players[i];
						if(player!=game.me){
							if(!player.isMin()&&player.kzol_equiping==undefined){
								player.classList.add('minskin');
							};
							if(player.node.FGO_condition!=undefined&&player.kzol_showFGOC==undefined){
								player.kzol_showFGOC=true;
								player.node.FGO_condition.style.bottom='0px';
							};
							if(player.node.timer!=undefined&&player.node.timer.style.top!='-50px'&&player.node.timer.style.left!='-15px'){
								player.node.timer.style.top='-50px';
								player.node.timer.style.left='-15px';
							};
							if(player.name2!=undefined){
								if(player.kzol_hideAvatar2==undefined){
									player.kzol_hideAvatar2=true;
									player.node.avatar2.hide();
									if(player.扩展ol_type=='fellow') player.node.name2.hide();
								};
								if(!player.isUnseen(1)&&(player.kzol_showAvatar2==undefined||
								(player.avatar2_name!=undefined&&player.avatar2_name!=player.name2))){
									if(player.kzol_showAvatar2==undefined){
										player.kzol_showAvatar2=true;
										player.setNickname=function(){};
										var avatar2=ui.create.div(function(){
											if(this.link) ui.click.charactercard(this.link,'');
										});
										avatar2.link=player.name2;
										avatar2.style.borderRadius='40px';
										avatar2.style.boxShadow='rgba(0, 0, 0, 0.2) 0 0 0 1px';
										if(player.扩展ol_type=='fellow'){
											avatar2.style.top='-25px';
											avatar2.style.left='-20px';
											avatar2.style.height='30px';
											avatar2.style.width='30px';
										}else{
											avatar2.style.height='40px';
											avatar2.style.width='40px';
											avatar2.style.top='77px';
											avatar2.style.left='-10px';
										};
										avatar2.setBackground(player.name2,'character');
										player.node.nameol.appendChild(avatar2);
										player.avatar2_name=player.name2;
										player.node.kzol_avatar2=avatar2;
									}else{
										player.node.avatar2.hide();
										player.node.avatar2.link=player.name2;
										player.node.kzol_avatar2.setBackground(player.name2,'character');
										player.avatar2_name=player.name2;
									};
								};
							};
						}else{
							if(player.isMin()){
								player.classList.remove('minskin');
							};
						};
					};
				},1000);
			},game.players);
		},
	};
	*/
	lib.skill["_ismin"]={};
	lib.skill["_minskinEquip1"]={
		//mode:['identity','guozhan','partner','aolaStar','wjms','wangzhezhizhan'],
		trigger:{
			player:"equipBefore",
		},
		filter:function (event,player){
			if(!player.isMin()) return false;
			return (game.players.length+game.dead.length-game.countPlayer(function(current){return current.扩展ol_type=='fellow'})>=11||player.扩展ol_type=='fellow')&&player!=game.me;
		},
		forced:true,
		popup:false,
		content:function (){
			game.broadcastAll(function(player){
				player.kzol_equiping=true;
				player.classList.remove('minskin');
			},player);
		},
	};
	lib.skill["_minskinEquip2"]={
		//mode:['identity','guozhan','partner','aolaStar','wjms','wangzhezhizhan'],
		trigger:{
			player:"equipAfter",
		},
		filter:function (event,player){
			if(player.isMin()) return false;
			return (game.players.length+game.dead.length-game.countPlayer(function(current){return current.扩展ol_type=='fellow'})>=11||player.扩展ol_type=='fellow')&&player!=game.me;
		},
		forced:true,
		popup:false,
		content:function (){
			game.broadcastAll(function(player){
				delete player.kzol_equiping;
				player.classList.add('minskin');
			},player);
		},
	};
	lib.skill._countHasUsedCard={
		trigger:{
			player:"useCardAfter",
		},
		filter:function (event,player){
			return _status.currentPhase==player&&event.card!=undefined;
		},
		forced:true,
		popup:false,
		content:function (){
			if(player.storage.countHasUsedCard==undefined) player.storage.countHasUsedCard=[];
			player.storage.countHasUsedCard.push(trigger.card);
		},
	};
	lib.skill._countHasUsedCard1={
		trigger:{
			player:"phaseAfter",
		},
		filter:function (event,player){
			return player.storage.countHasUsedCard!=undefined;
		},
		priority:Infinity,
		forced:true,
		popup:false,
		content:function (){
			delete player.storage.countHasUsedCard;
		},
	};
	/*
	lib.element.player.$equip=function(card){
		if(this.storage.lose_pos_equip!=undefined&&this.storage.lose_pos_equip.contains(get.subtype(card))){
			this.gain(card,'gain2');
			game.log(this,'装备失败');
		}else{
			game.broadcast(function(player,card){
				player.$equip(card);
			},this,card);
			card.fix();
			card.style.transform='';
			card.classList.remove('drawinghidden');
			delete card._transform;
			var player=this;
			var equipNum=get.equipNum(card);
			var equipped=false;
			for(var i=0;i<player.node.equips.childNodes.length;i++){
				if(get.equipNum(player.node.equips.childNodes[i])>=equipNum){
					player.node.equips.insertBefore(card,player.node.equips.childNodes[i]);
					equipped=true;
					break;
				}
			}
			if(!equipped){
				player.node.equips.appendChild(card);
				if(_status.discarded){
					_status.discarded.remove(card);
				}
			}
			var info=get.info(card);
			if(info.skills){
				for(var i=0;i<info.skills.length;i++){
					player.addSkillTrigger(info.skills[i]);
				}
			}
			return player;
		};
	};
	*/
	lib.extensionMenu.extension_扩展ol['16r_title']={
		"name":"<b><p align=center><span style=\"font-size:18px\">------九至十六人------</span></b>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol['16r_info']={
		"name":"当游戏人数超过10时，使用的牌不能指定距离大于4的角色",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol['16r_zdbhbj']={
		"name":"自动变换布局",
		"init":false,
		"intro":"开启后，身份、国战、成对、奥拉星模式下，游戏开始时，若非随从人数不小于9则自动将布局变换为'默认'(只改变布局，不影响设置)"
	};
	lib.extensionMenu.extension_扩展ol['16r_zdscLog']={
		"name":"自动伸长arenalog",
		"init":true,
		"intro":"开启后，对局非随从人数不小于11则自动将arenalog伸长"
	};
	lib.extensionMenu.extension_扩展ol['16r_gz']={
		"name":"<p align=center>国战模式</p>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol['16r_gz_force']={
		"name":"国战候选武将数锁定为12",
		"init":true,
		"intro":"开启后，国战候选武将数锁定为12（由于本扩展势力过多，关闭该选项后，ai选将时可能会无法选择到相同势力的武将，导致ai无法选将而卡死）"
	};
	lib.extensionMenu.extension_扩展ol['16r_sf']={
		"name":"<p align=center>身份配置</p>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol['16r_sf_info']={
		"name":"<p align=center>以下身份选项在联机中无效</p>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol['9r']={"name":'九人场身份',"init":'1',"item":{'1':'三忠四反一内','2':'二忠四反二内','3':'四忠四反零内','4':'三忠五反零内'}};
	lib.extensionMenu.extension_扩展ol['10r']={"name":'十人场身份',"init":'1',"item":{'1':'三忠四反二内','2':'三忠五反一内','3':'四忠五反零内'}};
	lib.extensionMenu.extension_扩展ol['11r']={"name":'十一人场身份',"init":'1',"item":{'1':'四忠五反一内','2':'三忠五反二内','3':'五忠五反零内','4':'四忠六反零内'}};
	lib.extensionMenu.extension_扩展ol['12r']={"name":'十二人场身份',"init":'1',"item":{'1':'四忠五反二内','2':'四忠六反一内','3':'五忠六反零内'}};
	lib.extensionMenu.extension_扩展ol['13r']={"name":'十三人场身份',"init":'1',"item":{'1':'五忠六反一内','2':'四忠六反二内','3':'六忠六反零内','4':'五忠七反零内'}};
	lib.extensionMenu.extension_扩展ol['14r']={"name":'十四人场身份',"init":'1',"item":{'1':'五忠六反二内','2':'五忠七反一内','3':'六忠七反零内'}};
	lib.extensionMenu.extension_扩展ol['15r']={"name":'十五人场身份',"init":'1',"item":{'1':'六忠七反一内','2':'五忠七反二内','3':'七忠七反零内','4':'六忠八反零内'}};
	lib.extensionMenu.extension_扩展ol['16r']={"name":'十六人场身份',"init":'1',"item":{'1':'六忠七反二内','2':'六忠八反一内','3':'七忠八反零内'}};
	lib.skill._shibing_die={
		trigger:{
			player:"dieBefore",
		},
		forced:true,
		popup:false,
		priority:Infinity,
		content:function (){
			'step 0'
			if(player.扩展ol_type=='fellow'){
				player.discard(player.get("hej"));
			}else{
				var list=[];
				for(var i=0;i<game.players.length;i++){
					if(game.players[i].扩展ol_owner==player) list.push(game.players[i]);
				};
				for(var i=0;i<list.length;i++){
					list[i].discard(list[i].get("hej"));
				};
			};
			'step 1'
			if(player.扩展ol_type=='fellow'){
				if(lib.config['extension_扩展ol_tx_tx_open']!=false&&lib.element.player.$kzol_break!=undefined&&player.kzol_inchess!=true){
					player.$kzol_break(true);
				}else{
					game.removePlayer1(player);
				};
			}else{
				var list=[];
				for(var i=0;i<game.players.length;i++){
					if(game.players[i].扩展ol_owner==player) list.push(game.players[i]);
				};
				for(var i=0;i<list.length;i++){
					if(lib.config['extension_扩展ol_tx_tx_open']!=false&&lib.element.player.$kzol_break!=undefined&&player.kzol_inchess!=true){
						list[i].$kzol_break(true);
					}else{
						game.removePlayer1(list[i]);
					};
				};
			};
			setTimeout(function(){
				if(game.countPlayer(function(current){
					return current.扩展ol_owner!=undefined;
				})<=0){
					ui.kzol_reSetSeat.style.display='none';
				};
			},5000);
		},
	};
	lib.skill._shibing_stone={
		mode:['stone'],
		trigger:{
			global:"phaseAfter",
		},
		forced:true,
		popup:false,
		priority:-Infinity,
		filter:function(event,player){
			if(player.扩展ol_owner==undefined) return false;
			var pl=player.扩展ol_owner;
			return event.player==pl;
		},
		content:function (){
			player.insertPhase();
		},
	};
	//lib.help['16人模式']="<li>当游戏人数超过10时，使用的牌不能指定距离大于4的角色<br><li>游戏开始时，若游戏人数超过8，系统会将布局切换为默认";
	lib.extensionMenu.extension_扩展ol.mode_hide={
		"name":"<b><p align=center><span style=\"font-size:18px\">----主模式隐藏----</span></b>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol.mode_hide_partner={
		"name":"隐藏成对模式",
		"init":false
	};
	lib.extensionMenu.extension_扩展ol.mode_hide_wangzhezhizhan={
		"name":"隐藏王者之战模式",
		"init":false
	};
	lib.extensionMenu.extension_扩展ol.mode_hide_wjms={
		"name":"隐藏无尽模式",
		"init":false
	};
	lib.extensionMenu.extension_扩展ol.mode_hide_aolaStar={
		"name":"隐藏奥拉星模式",
		"init":false
	};
	lib.extensionMenu.extension_扩展ol.mode_hide_kzsg={
		"name":"隐藏卡战模式",
		"init":false
	};
	lib.extensionMenu.extension_扩展ol.characterBg_title={
		"name":"<b><p align=center><span style=\"font-size:18px\">-------技能界面-------</span></b>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol.characterBg_enable={
		"name":"美化武将技能界面",
		"init":false,
		"intro":"开启后，打开武将技能界面时，界面背景设置为武将图片、字体阴影加深、自动变换界面长度（这个过程需要一段时间）"
	};
	lib.extensionMenu.extension_扩展ol.zlbh_show={
		"name":"珠联璧合显示",
		"init":true,
		"intro":"开启后，在最小化栏显示珠联璧合的最小化图标"
	};
	lib.extensionMenu.extension_扩展ol.characterIntro_show={
		"name":"武将介绍显示",
		"init":true,
		"intro":"开启后，在最小化栏显示武将介绍的最小化图标"
	};
	lib.extensionMenu.extension_扩展ol.characterIntro_show1={
		"name":"武将介绍显示内容",
		"init":'justify',
		"item":{
			'center':'居中',
			'left':'左对齐',
			'justify':'两端对齐',
		},
	};
	lib.extensionMenu.extension_扩展ol.jswj_show={
		"name":"解锁进度显示",
		"init":true,
		"intro":"开启后，在最小化栏显示武将解锁进度的最小化图标"
	};
	lib.extensionMenu.extension_扩展ol.zxhxsl_pos={
		"name":"最小化显示栏位置",
		"init":'right',
		"item":{
			'top':'上方(外)',
			'top_in':'上方(内)',
			'bottom_in':'下方(内)',
			'bottom':'下方(外)',
			'left':'左方(外)',
			'right':'右方(外)',
		},
	};
	lib.extensionMenu.extension_扩展ol.zxhxsl_show={
		"name":"最小化显示栏图标",
		"init":'font',
		"item":{
			'font':'文字',
			'img':'图片'
		},
		"intro":"不建议使用图片显示"
	};
	lib.kzol_nodeintro['characterBg']=function(uiintro,character,skills){
		if(lib.config['extension_扩展ol_characterBg_enable']!=true) return ;
		if(!uiintro||!character) return ;
		if(character.indexOf('kzol_bwp_')!=-1) return ;
		uiintro.style['text-shadow']='2px 2px 4px #000000';
		uiintro.style.color='white';
	};
	lib.kzol_nodeintro_timeOut['characterBg']=function(uiintro,character,skills){
		if(lib.config['extension_扩展ol_characterBg_enable']!=true) return ;
		if(!uiintro||!character) return ;
		if(character.indexOf('kzol_bwp_')!=-1) return ;
		uiintro.setBackground(character,'character');
		if(uiintro.offsetHeight>=uiintro.offsetWidth*1.3){
			var num=uiintro.offsetHeight-uiintro.offsetWidth*1.3;
			uiintro.style.height=(uiintro.offsetWidth*1.3)+'px';
			uiintro.style.top=(uiintro.offsetTop+num/2)+'px';
			//uiintro.style.backgroundSize='100% 100%';
		};
	};
	lib.kzol_nodeintro['zlbh']=function(uiintro,character,skills){
		if(lib.config['extension_扩展ol_zlbh_show']==false) return ;
		if(!uiintro||!character) return ;
		if(lib.perfectPair[character]==undefined) return ;
		if(lib.perfectPair[character].length==0) return ;
		var div1=ui.create.div('.menu');
		if(lib.perfectPair[character].length>3) div1.style.width='310px';
		div1.style.position='fixed';
		div1.style.borderRadius='5px';
		div1.style.transition='all 0s';
		div1.style['text-align']='center';
		div1.style.animation='fadeShow .3s';
		div1.style['-webkit-animation']='fadeShow .3s';
		div1.style['pointer-events']='none';
		div1.innerHTML='<span style="font-size:20px;font-weight:300;font-family:shousha;line-height:25px">珠联璧合</span><br>';
		for(var i=0;i<lib.perfectPair[character].length;i++){
			var name=lib.perfectPair[character][i];
			var c=ui.create.button(name,'character',div1,true);
			if(i>=0&&i<=3){
				c.style['margin-top']='1px';
			}else{
				c.style['margin-top']='3px';
			};
			c.style['margin-bottom']='3px';
		};
		var div=ui.create.div();
		//div.style.right='3px';
		if(lib.config['extension_扩展ol_zxhxsl_show']=='img'){
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
			div.innerHTML='珠';
		};
		div.style.position='relative';
		div.onclick=function(e){
			e.stopPropagation();
		};
		div.onmouseover=function(){
			div1.style.left=(event.clientX/game.documentZoom+10+document.body.scrollLeft-div1.offsetWidth/2)+'px';
			div1.style.top=(event.clientY/game.documentZoom+document.body.scrollTop+(lib.device?0:20))+'px';
			if(div1.offsetTop+div1.offsetHeight>ui.window.offsetTop+ui.window.offsetHeight){
				div1.style.top=(event.clientY/game.documentZoom+document.body.scrollTop-div1.offsetHeight)+'px';
			};
			uiintro.appendChild(div1);
		};
		div.onmousemove=function(){
			div1.style.left=(event.clientX/game.documentZoom+10+document.body.scrollLeft-div1.offsetWidth/2)+'px';
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
	var style3=document.createElement('style');
	style3.innerHTML='@keyframes fadeInDown {0% {-webkit-transform: translate3d(0, -20%, 0);transform: translate3d(0, -20%, 0);opacity: 0;}100% {-webkit-transform: none;transform: none;opacity: 1;}}';
	style3.innerHTML+='@keyframes fadelogIn {0% {-webkit-transform: translate3d(0, 100%, 0);transform: translate3d(0, 100%, 0);opacity: 0;}100% {-webkit-transform: none;transform: none;opacity: 1;}}';
	style3.innerHTML+='@keyframes fadelogIn1 {0% {-webkit-transform:  translate3d(0, 50%, 0) scaleY(0);transform: translate3d(0, 50%, 0) scaleY(0);opacity: 0;}100% {-webkit-transform: none;transform: none;opacity: 1;}}';
	style3.innerHTML+='@keyframes fadeleftIn {0% {-webkit-transform: translate3d(100%, 0, 0);transform: translate3d(100%, 0, 0);opacity: 0;}100% {-webkit-transform: none;transform: none;opacity: 1;}}';
	style3.innerHTML+='@keyframes fadeleftIn1 {0% {-webkit-transform: translate3d(50%, 0, 0);transform: translate3d(50%, 0, 0);opacity: 0;}100% {-webkit-transform: none;transform: none;opacity: 1;}}';
	style3.innerHTML+='@keyframes faderightIn {0% {-webkit-transform: translate3d(-50%, 0, 0);transform: translate3d(-50%, 0, 0);opacity: 0;}100% {-webkit-transform: none;transform: none;opacity: 1;}}';
	style3.innerHTML+='@keyframes kzol_scale {0%,50% {transform:scale(3);}100% {transform:scale(1);}}';
	style3.innerHTML+='@keyframes fadeShow {0% {opacity: 0;}100% {opacity: 1;}}';
	style3.innerHTML+='@keyframes rainBowText {'+
	'0% {text-shadow: black 0 0 1px,rgb(255, 0, 0) 0 0 2px,rgb(255, 0, 0) 0 0 5px,rgb(255, 0, 0) 0 0 10px,rgb(255, 0, 0) 0 0 10px;}'+
	'14.3% {text-shadow: black 0 0 1px,rgb(255, 165, 0) 0 0 2px,rgb(255, 165, 0) 0 0 5px,rgb(255, 165, 0) 0 0 10px,rgb(255, 165, 0) 0 0 10px;}'+
	'28.6% {text-shadow: black 0 0 1px,rgb(255, 255, 0) 0 0 2px,rgb(255, 255, 0) 0 0 5px,rgb(255, 255, 0) 0 0 10px,rgb(255, 255, 0) 0 0 10px;}'+
	'42.9% {text-shadow: black 0 0 1px,rgb(0, 255, 0) 0 0 2px,rgb(0, 255, 0) 0 0 5px,rgb(0, 255, 0) 0 0 10px,rgb(0, 255, 0) 0 0 10px;}'+
	'57.2% {text-shadow: black 0 0 1px,rgb(0, 0, 255) 0 0 2px,rgb(0, 0, 255) 0 0 5px,rgb(0, 0, 255) 0 0 10px,rgb(0, 0, 255) 0 0 10px;}'+
	'71.5% {text-shadow: black 0 0 1px,rgb(6，82，121) 0 0 2px,rgb(6，82，121) 0 0 5px,rgb(6，82，121) 0 0 10px,rgb(6，82，121) 0 0 10px;}'+
	'85.8% {text-shadow: black 0 0 1px,rgb(128, 0, 128) 0 0 2px,rgb(128, 0, 128) 0 0 5px,rgb(128, 0, 128) 0 0 10px,rgb(128, 0, 128) 0 0 10px;}'+
	'100% {text-shadow: black 0 0 1px,rgb(255, 0, 0) 0 0 2px,rgb(255, 0, 0) 0 0 5px,rgb(255, 0, 0) 0 0 10px,rgb(255, 0, 0) 0 0 10px;}'+
	'}';
	document.head.appendChild(style3);
	var style4=document.createElement('style');
	style4.innerHTML='.player .kzol_frozen {animation: game_start 0.5s;-webkit-animation: game_start 0.5s;position: absolute;width: 100%;height: 100%;left: 0;top: 0;z-index: 4;pointer-events: none;opacity: 0.7;background-image: url("extension/扩展ol/kzol_frozen.png");backgroundSize: cover;}';
	document.head.appendChild(style4);
	lib.kzol_nodeintro['characterIntro']=function(uiintro,character,skills){
		if(lib.config['extension_扩展ol_characterIntro_show']==false) return ;
		if(!uiintro||!character) return ;
		if(get.characterIntro(character).indexOf('配套武将')!=-1) return ;
		if(get.characterIntro(character).indexOf('技能皮肤')!=-1) return ;
		if(get.characterIntro(character)=='暂无武将介绍') return ;
		var div1=ui.create.div('.menu');
		if(get.characterIntro(character).length<75){
			div1.style.width='194px';
		}else if(get.characterIntro(character).length<200){
			div1.style.width='304px';
		}else{
			div1.style.width='496px';
		};
		div1.style.position='fixed';
		div1.style.borderRadius='5px';
		div1.style.transition='all 0s';
		div1.style['text-align']=lib.config['extension_扩展ol_characterIntro_show1'];
		div1.style.animation='fadeShow .3s';
		div1.style['-webkit-animation']='fadeShow .3s';
		div1.style['pointer-events']='none';
		if(lib.config['extension_扩展ol_characterIntro_show1']=='left'||lib.config['extension_扩展ol_characterIntro_show1']=='justify'){
			div1.innerHTML='<div style="width:calc(100%);top:-2px;text-align:center;"><span style="font-size:20px;font-weight:300;font-family:shousha;line-height:25px">武将介绍</span></div><br>'+get.characterIntro(character);
		}else{
			div1.innerHTML='<span style="font-size:20px;font-weight:300;font-family:shousha;line-height:25px">武将介绍</span><br>'+get.characterIntro(character);
		};
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
			div.innerHTML='介';
		};
		div.style.position='relative';
		div.onclick=function(e){
			e.stopPropagation();
		};
		div.onmouseover=function(){
			div1.style.left=(event.clientX/game.documentZoom+10+document.body.scrollLeft-div1.offsetWidth/2)+'px';
			div1.style.top=(event.clientY/game.documentZoom+document.body.scrollTop+(lib.device?0:20))+'px';
			if(div1.offsetTop+div1.offsetHeight>ui.window.offsetTop+ui.window.offsetHeight){
				var num=(div1.offsetTop+div1.offsetHeight)-(ui.window.offsetTop+ui.window.offsetHeight);
				div1.style.top=(div1.offsetTop-num)+'px';
			};
			if(div1.offsetTop<0) div1.style.top='0px';
			if(div1.offsetLeft+div1.offsetWidth>ui.window.offsetLeft+ui.window.offsetWidth){
				var num=(div1.offsetLeft+div1.offsetWidth)-(ui.window.offsetLeft+ui.window.offsetWidth);
				div1.style.left=(div1.offsetLeft-num)+'px';
			};
			if(div1.offsetLeft<0) div1.style.left='0px';
			uiintro.appendChild(div1);
		};
		div.onmousemove=function(){
			div1.style.left=(event.clientX/game.documentZoom+10+document.body.scrollLeft-div1.offsetWidth/2)+'px';
			div1.style.top=(event.clientY/game.documentZoom+document.body.scrollTop+(lib.device?0:20))+'px';
			if(div1.offsetTop+div1.offsetHeight>ui.window.offsetTop+ui.window.offsetHeight){
				var num=(div1.offsetTop+div1.offsetHeight)-(ui.window.offsetTop+ui.window.offsetHeight);
				div1.style.top=(div1.offsetTop-num)+'px';
			};
			if(div1.offsetTop<0) div1.style.top='0px';
			if(div1.offsetLeft+div1.offsetWidth>ui.window.offsetLeft+ui.window.offsetWidth){
				var num=(div1.offsetLeft+div1.offsetWidth)-(ui.window.offsetLeft+ui.window.offsetWidth);
				div1.style.left=(div1.offsetLeft-num)+'px';
			};
			if(div1.offsetLeft<0) div1.style.left='0px';
		};
		div.onmouseout=function(){
			uiintro.removeChild(div1);
		};
		uiintro.kzol_nodeintro.appendChild(div);
	};
}