window.func=function(lib,game,ui,get,ai,_status){
	if(lib.config.mode_config.aolaStar==undefined){
		lib.config.mode_config.aolaStar={};
		lib.config.mode_config.aolaStar.mode='normal';
		game.saveConfig('mode','normal','aolaStar');
		lib.config.mode_config.aolaStar.players=2;
		game.saveConfig('players',2,'aolaStar');
		lib.config.mode_config.aolaStar.level=1;
		game.saveConfig('level',1,'aolaStar');
		lib.config.mode_config.aolaStar.fdlog=false;
		game.saveConfig('fdlog',false,'aolaStar');
		lib.config.mode_config.aolaStar.alx_fhsx=false;
		game.saveConfig('alx_fhsx',false,'aolaStar');
		lib.config.mode_config.aolaStar.alx_xt=true;
		game.saveConfig('alx_xt',true,'aolaStar');
		lib.config.mode_config.aolaStar.alx_xtsz='middle';
		game.saveConfig('alx_xtsz','middle','aolaStar');
		lib.config.mode_config.aolaStar.alx_xtcd='gs';
		game.saveConfig('alx_xtcd','gs','aolaStar');
		//lib.config.mode_config.aolaStar.alx_sytldz=false;
		//game.saveConfig('alx_sytldz',false,'aolaStar');
		lib.config.mode_config.aolaStar.players_ex=2;
		game.saveConfig('players_ex',2,'aolaStar');
		lib.config.mode_config.aolaStar.level_ex=8;
		game.saveConfig('level_ex',8,'aolaStar');
	};
	var bool=false;
	if(lib.config.save_alx==undefined){
		lib.config.save_alx={};
		bool=true;
	};
	if(lib.config.save_alx.pet==undefined){
		lib.config.save_alx.pet={};
		bool=true;
	};
	if(lib.config.save_alx.pet_num==undefined){
		lib.config.save_alx.pet_num=0;
		bool=true;
	};
	if(bool==true) game.saveConfig('save_alx',lib.config.save_alx);
	get.ALX_starRank=function(name){
		var num=6;
		if(lib.characterTitle[name].indexOf(lib.ALX_starRank.aola_star_7)!=-1) num=7;
		if(lib.characterTitle[name].indexOf(lib.ALX_starRank.aola_star_8)!=-1) num=8;
		if(lib.characterTitle[name].indexOf(lib.ALX_starRank.aola_star_9)!=-1) num=9;
		if(lib.characterTitle[name].indexOf(lib.ALX_starRank.aola_star_10)!=-1) num=10;
		if(lib.characterTitle[name].indexOf(lib.ALX_starRank.aola_star_11)!=-1) num=11;
		if(lib.characterTitle[name].indexOf(lib.ALX_starRank.aola_star_12)!=-1) num=12;
		if(lib.characterTitle[name].indexOf(lib.ALX_starRank.aola_star_13)!=-1) num=13;
		if(lib.characterTitle[name].indexOf(lib.ALX_starRank.aola_star_14)!=-1) num=14;
		if(lib.characterTitle[name].indexOf(lib.ALX_starRank.aola_star_15)!=-1) num=15;
		if(lib.characterTitle[name].indexOf(lib.ALX_starRank.aola_star_16)!=-1) num=16;
		return num;
	};
	if(lib.config['extension_扩展ol_mode_hide_aolaStar']==true) return ;
	if(lib.config.mode=='aolaStar') lib.config.phonelayout=false;
	game.addMode('aolaStar',{
		start:function(){
			'step 0'
			//_status.mode=get.config('mode');
			lib.skill["_ALX_gain_sytldz"]={
				trigger:{
					player:'phaseDrawBegin'
				},
				forced:true,
				popup:false,
				priority:-Infinity,
				filter:function(event,player){
					return _status.mode=='ex';
				},
				content:function(){
					trigger.num=0;
				},
			};
			var bool=false;
			for(var i in lib.config.save_alx.pet){
				var pet=lib.config.save_alx.pet[i];
				if(pet.hp==undefined){
					var pet_tj=lib.kzol_ALXYB[pet.name];
					pet.hp=(Math.round(pet_tj.hp*10)+Math.round((pet_tj.hp*9/10)*pet.lv))/100;;
					bool=true;
				};
			};
			if(bool==true) game.saveConfig('save_alx',lib.config.save_alx);
			lib.config.phonelayout=false;
			ui.css.phone.href='';
			ui.arena.classList.remove('phone');
			game.over=game.kzol_wjms_over;
			ui.sidebar.style.width='calc(100%)';
			if(ui.sortCard!=undefined) ui.sortCard.style.display='none';
			if(ui.auto!=undefined) ui.auto.style.display='none';
			
			var ALX_update=[
				'优化大乱斗EX中的技能栏显示',
				'在大乱斗EX中，恢复PP值不需要弃牌',
			];
			lib.ALX_version='1.0.17.82';//主版本号.次版本号.内部版本号.修订号
			game.ALX_update=function(){
				var ul=document.createElement('ul');
				ul.style.textAlign='left';
				var players=null,cards=null;
				for(var i=0;i<ALX_update.length;i++){
					if(ALX_update[i].indexOf('players://')==0){
						try{
							players=JSON.parse(ALX_update[i].slice(10));
						}
						catch(e){
							players=null;
						}
					}
					else if(ALX_update[i].indexOf('cards://')==0){
						try{
							cards=JSON.parse(ALX_update[i].slice(8));
						}
						catch(e){
							cards=null;
						}
					}
					else{
						var li=document.createElement('li');
						li.innerHTML=ALX_update[i];
						ul.appendChild(li);
					};
				};
				var dialog=ui.create.dialog('更新内容（奥拉星）<br>'+lib.ALX_version,'hidden');
				dialog.content.appendChild(ul);
				if(players){
					dialog.addSmall([players,'character']);
				};
				if(cards){
					for(var i=0;i<cards.length;i++){
						cards[i]=[get.translation(get.type(cards[i])),'',cards[i]]
					};
					dialog.addSmall([cards,'vcard']);
				};
				dialog.open();
				var hidden=false;
				if(!ui.auto.classList.contains('hidden')){
					ui.auto.hide();
					hidden=true;
				};
				game.pause();
				var control=ui.create.control('确定',function(){
					dialog.close();
					control.close();
					if(hidden) ui.auto.show();
					if(lib.config.save_alx.pet_num==0){
						game.alx_dialogs_show(_status.kzol_alx_dialogs2);
					}else{
						game.alx_dialogs_show(_status.kzol_alx_dialogs1);
					};
					game.resume();
				});
			};
			
			/*
			lib.skill['_ALX_change_Ability']={
				trigger:{
					global:"gameStart",
				},
				forced:true,
				priority:Infinity,
				content:function(){
					if(player==game.me){
						if(_status.kzol_alx_onBattle!=undefined){
							var pet=lib.config.save_alx.pet[_status.kzol_alx_onBattle];
							player.ability.attackC=Math.round(pet.attackC);
							player.ability.attackE=Math.round(pet.attackE);
							player.ability.defenseC=Math.round(pet.defenseC);
							player.ability.defenseE=Math.round(pet.defenseE);
							player.ability.speed=Math.round(pet.speed);
							player.storage.ALX_lv=pet.lv;
							//player.setNickname('Lv:'+pet.lv+'级');
						};
					}else{
						var list=[];
						for(var i=(get.config('level')-1)*10+1;i<get.config('level')*10;i++){
							list.push(i);
						};
						var num=list.randomGet();
						player.storage.ALX_lv=num;
						player.setNickname('Lv:'+num+'级');
						for(var i in player.ability){
							var ability=player.ability[i];
							player.ability[i]=Math.round((ability/10+(ability*9/10)*num/100));
						};
						if(Math.random()<0.05){
							player.setNickname('<span style="color:#27ff00;">Lv:'+num+'级</span>');
							player.storage.alx_can_catch=true;
						};
					};
				},
			};
			*/
			lib.skill['_ALX_catch']={
				enable:'phaseUse',
				usable:1,
				line:true,
				filter:function(event,player){
					if(player!=game.me) return false;
					return game.countPlayer(function(current){
						return current!=player&&current.storage.alx_can_catch==true;
					})>0;
				},
				filterTarget:function(card,player,target){
					return target!=player&&target.storage.alx_can_catch==true;
				},
				content:function(){
					var num=(target.maxHp-target.hp)/target.maxHp/2;
					if(Math.random()<num){
						game.say1('捕捉成功');
						game.alx_gainPet(target.name);
						target.discard(target.get('hej'));
						game.removePlayer(target);
						if(game.players.length==1){
							game.over(true);
						};
					}else{
						game.say1('捕捉失败');
					};
				},
				ai:{
					order:999,
					result:{
						player:1,
					},
				},
			};
			lib.translate['_ALX_catch']='捕捉';
			lib.translate['_ALX_catch_info']='出牌阶段限一次，对绿色等级亚比使用，捕捉成功后获得该亚比（1级）（体力越少，捕捉成功率越高）';
			lib.skill['_ALX_speed_dld']={
				trigger:{
					player:"phaseBefore",
				},
				forced:true,
				popup:false,
				priority:Infinity,
				filter:function(event,player){
					return player==game.players[game.players.length-1];
				},
				content:function (){
					game.alx_sort();
				},
			};
			
			
			if(lib.config.mode_config.aolaStar.fdlog==true){
				ui.arenalog.style.width='calc(100%)';
				ui.arenalog.style.height='calc(95% - 120px)';
				ui.arenalog.style.left='0px';
				ui.arenalog.style.top='0px';
				ui.arenalog.style['text-align']='center';
				ui.arenalog.onclick=function(){
					if(this.style['zIndex']==undefined||this.style['zIndex']==0){
						this.style['zIndex']=990;
					}else{
						this.style['zIndex']=0;
					};
				};
			};
			
			_status.kzol_alx_dialogs1={};
			_status.kzol_alx_divs1={};
			var dialog1=ui.create.dialog('hidden');
			dialog1.style.height='calc(100% - 50px)';
			dialog1.style.width='calc(100%)';
			dialog1.style.left='0px';
			dialog1.style.top='50px';
			dialog1.classList.add('popped');
			dialog1.classList.add('static');
			dialog1.style['z-index']=0;
			_status.kzol_alx_dialogs1.dialog1=dialog1;
			var title=ui.create.div();
			title.style.height='50px';
			title.style.width='350px';
			title.style.left='calc(50% - 175px)';
			title.style.top='-25px';
			title.style['font-size']='28px';
			title.style['text-align']='center';
			title.style['font-family']="'STXinwei','xinwei'";
			title.style['line-height']='50px';
			title.setBackgroundImage('extension/扩展ol/ALX_background.png');
			title.style.backgroundSize="100% 100%";
			title.style['zIndex']=0;
			title.innerHTML='<span style="color:#ffffff;">选择出战亚比</span>';
			dialog1.appendChild(title);
			var buttons_yb=ui.create.div();
			buttons_yb.style.height='calc(100% - 25px)';
			buttons_yb.style.width='calc(100% - 10px)';
			buttons_yb.style.left='5px';
			buttons_yb.style.top='25px';
			buttons_yb.style['text-align']='center';
			buttons_yb.style['overflow-x']='hidden';
			buttons_yb.style['overflow-y']='scroll';
			lib.setScroll(buttons_yb);
			dialog1.appendChild(buttons_yb);
			_status.kzol_alx_divs1.buttons_yb=buttons_yb;
			setInterval(function(){
				if(_status.kzol_alx_changeCk==undefined){
					_status.kzol_alx_changeCk=true;
					if(_status.kzol_alx_interval!=undefined){
						clearInterval(_status.kzol_alx_interval);
						delete _status.kzol_alx_interval;
					};
					var buttons_yb=_status.kzol_alx_divs1.buttons_yb;
					for(var i=0;i<buttons_yb.childNodes.length;i++){
						buttons_yb.removeChild(buttons_yb.childNodes[i]);
						i--;
					};
					var list=[];
					for(var i in lib.config.save_alx.pet){
						list.push(i);
					};
					if(list.length>0){
						_status.kzol_alx_interval=setInterval(function(){
							var num=25;
							if(num>list.length) num=list.length;
							for(var j=0;j<num;j++){
								var i=list[0];
								var pet=lib.config.save_alx.pet[i];
								var button=ui.create.button(pet.name,'character',buttons_yb,true);
								button.style.width='100px';
								button.style.height='120px';
								button.style['cursor']='pointer';
								button.style.borderRadius='5px'
								button.link=pet.name;
								button.link1=i;
								button.node.hp.style.top='84px';
								var div_lv=ui.create.div();
								div_lv.style.height='16px';
								div_lv.style.width='calc(100%)';
								div_lv.style.left='0px';
								div_lv.style.bottom='0px';
								div_lv.style.borderRadius='8px';
								div_lv.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
								div_lv.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
								button.appendChild(div_lv);
								
								var div_exp_num=pet.exp/(pet.lv*pet.lv*pet.star);
								if(div_exp_num>1) div_exp_num=1;
								var div_exp=ui.create.div();
								div_exp.style.height='16px';
								div_exp.style.width='calc('+(div_exp_num*100)+'%)';
								div_exp.style.left='0px';
								div_exp.style.bottom='0px';
								div_exp.style.background="rgba(50,240,0,0.9)";
								div_exp.style.borderRadius='8px';
								div_exp.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
								div_lv.appendChild(div_exp);
								
								var div_lv1=ui.create.div();
								div_lv1.style.height='16px';
								div_lv1.style.width='calc(100%)';
								div_lv1.style.left='0px';
								div_lv1.style.bottom='0px';
								div_lv1.style['font-size']='16px';
								div_lv1.style['text-align']='center';
								div_lv1.style['font-family']="'STXinwei','xinwei'";
								div_lv1.style['line-height']='19px';
								div_lv1.style['text-shadow']='black 0 0 2px';
								div_lv1.style.borderRadius='8px';
								div_lv1.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
								div_lv1.innerHTML='Lv:'+pet.lv;
								div_lv.appendChild(div_lv1);
								button.appendChild(div_lv);
								lib.setIntro(button);
								button.onclick=function(){
									var pet_bh=this.link1;
									var pet=lib.config.save_alx.pet[pet_bh];
									var background=ui.create.dialog('hidden');
									background.style.height='calc(100%)';
									background.style.width='calc(100%)';
									background.style.left='0px';
									background.style.top='0px';
									background.style['zIndex']=30;
									ui.window.appendChild(background);
									var div=ui.create.div();
									div.style.height='2000px';
									div.style.width='2000px';
									div.style.left='-10px';
									div.style.top='-10px';
									background.add(div);
									var dialog=ui.create.dialog('hidden');
									dialog.style.height='300px';
									dialog.style.width='610px';
									dialog.style.left='calc(50% - 305px)';
									dialog.style.top='calc(50% - 150px)';
									dialog.style['zIndex']=35;
									dialog.classList.add('popped');
									dialog.classList.add('static');
									ui.window.appendChild(dialog);
									setTimeout(function(){
										div.onclick=function(){
											background.delete();
											dialog.delete();
											//ui.window.removeChild(background);
											//ui.window.removeChild(dialog);
										};
									},500);
									var avatar=ui.create.div('.player');
									avatar.style.height='130px';
									avatar.style.width='110px';
									avatar.style.left='10px';
									avatar.style.top='10px';
									avatar.setBackground(pet.name,'character');
									dialog.appendChild(avatar);
									var info=ui.create.div();
									info.style.height='140px';
									info.style.width='100px';
									info.style.left='10px';
									info.style.top='150px';
									info.style['font-size']='20px';
									info.style['text-align']='justify';
									info.style['font-family']="shousha";
									info.style['overflow-x']='hidden';
									info.style['overflow-y']='scroll';
									lib.setScroll(info);
									if(lib.characterIntro[pet.name]!=undefined){
										info.innerHTML='简介：<br>&nbsp&nbsp&nbsp&nbsp'+lib.characterIntro[pet.name];
									}else{
										info.innerHTML='简介：<br>&nbsp&nbsp&nbsp&nbsp暂无';
									};
									dialog.appendChild(info);
									var name=ui.create.div();
									name.style.height='30px';
									name.style.width='470px';
									name.style.left='130px';
									name.style.top='10px';
									name.style['font-size']='30px';
									name.style['text-align']='center';
									name.style['font-family']="shousha";
									name.style['line-height']='30px';
									name.innerHTML=get.translation(pet.name)+'&nbsp&nbsp&nbsp'+get.translation(pet.group)+'&nbsp'+lib.ALX_starRank['aola_star_'+pet.star];
									dialog.appendChild(name);
									var skill=ui.create.dialog('hidden');
									skill.style.height='195px';
									skill.style.width='300px';
									skill.style.left='310px';
									skill.style.top='45px';
									skill.classList.add('fixed');
									for(i=0;i<pet.skills.length;i++){
										skill.add('<div class="popup pointerdiv" style="width:270px;display:inline-block;cursor:default;font-family:shousha"><div class="skill" style="white-space:normal">'+
										get.translation(pet.skills[i])+'</div><div style="text-align:justify;">'+get.translation(pet.skills[i]+'_info')+'</div></div>');
									};
									dialog.appendChild(skill);
									var sx_info=ui.create.div();
									sx_info.style.height='180px';
									sx_info.style.width='180px';
									sx_info.style.left='130px';
									sx_info.style.top='60px';
									sx_info.style['font-size']='17px';
									sx_info.style['text-align']='center';
									sx_info.style['font-family']="shousha";
									sx_info.style['overflow-x']='hidden';
									sx_info.style['overflow-y']='scroll';
									lib.setScroll(sx_info);
									var exp_num=pet.exp;
									if(pet.exp>pet.lv*pet.lv*pet.star) exp_num=pet.lv*pet.lv*pet.star;
									var str='当前等级：'+pet.lv+'级'+'<br>经验：'+
									exp_num+'/'+(pet.lv*pet.lv*pet.star)+
									'<br><br><li>体力：'+pet.hp+
									'<li>攻击：'+pet.attackC+
									'<li>特攻：'+pet.attackE+
									'<li>防御：'+pet.defenseC+
									'<li>特防：'+pet.defenseE+
									'<li>速度：'+pet.speed;
									sx_info.innerHTML=str;
									dialog.appendChild(sx_info);
									var choose=ui.create.div('.menu');
									choose.style.height='40px';
									choose.style.width='80px';
									choose.style.left='calc(50% - 40px)';
									choose.style.top='250px';
									choose.style['font-size']='35px';
									choose.style['text-align']='center';
									choose.style['font-family']="shousha";
									choose.style['line-height']='40px';
									choose.style['cursor']='pointer';
									choose.innerHTML='出战';
									dialog.appendChild(choose);
									choose.link=pet_bh;
									choose.onclick=function(){
										background.delete();
										dialog.delete();
										//ui.window.removeChild(background);
										//ui.window.removeChild(dialog);
										game.alx_dialogs_hide(_status.kzol_alx_dialogs1);
										ui.window.appendChild(ui.arena);
										_status.kzol_alx_onBattle=this.link;
										game.kzol_alx_start();
									};
									choose.style.transition='opacity 0.5s';
									if(lib.config.button_press){
										choose.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
											this.style.transform='scale(0.95)';
										});
										choose.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
											this.style.transform='';
										});
									};
								};
								list.remove(list[0]);
							};
							if(list.length==0){
								clearInterval(_status.kzol_alx_interval);
								delete _status.kzol_alx_interval;
							};
						},100);
					};
				};
			},500);
			game.alx_dialogs_open(_status.kzol_alx_dialogs1);
			
			
			if(lib.config.save_alx.pet_num==0){
				game.alx_dialogs_hide(_status.kzol_alx_dialogs1);
				
				_status.kzol_alx_dialogs2={};
				_status.kzol_alx_divs2={};
				var dialog2=ui.create.dialog('hidden');
				dialog2.style.height='calc(100% - 50px)';
				dialog2.style.width='calc(100%)';
				dialog2.style.left='0px';
				dialog2.style.top='50px';
				dialog2.classList.add('popped');
				dialog2.classList.add('static');
				_status.kzol_alx_dialogs2.dialog2=dialog2;
				var first_func=function(){
					var pet_name=this.link;
					game.alx_gainPet(pet_name);
					game.alx_dialogs_hide(_status.kzol_alx_dialogs2);
					game.alx_dialogs_show(_status.kzol_alx_dialogs1);
				};
				var chooseInitialPet=ui.create.div();
				chooseInitialPet.style.width='350px';
				chooseInitialPet.style.height='50px';
				chooseInitialPet.style.left='calc(50% - 175px)';
				chooseInitialPet.style.top='-25px';
				chooseInitialPet.style['zIndex']=20;
				chooseInitialPet.style.backgroundSize='100% 100%';
				chooseInitialPet.setBackgroundImage('extension/扩展ol/ALX_background.png');
				chooseInitialPet.style['font-size']='28px';
				chooseInitialPet.style['text-align']='center';
				chooseInitialPet.style['font-family']="'STXinwei','xinwei'";
				chooseInitialPet.style['line-height']='50px';
				chooseInitialPet.innerHTML='<span style="color:#ffffff;">请选择初始亚比</span>';
				var initialPet1=ui.create.div('.player','<b><p align=center><span style="color:#FF404A;font-size:23px;font-family:xinwei">传奇波鲁</span></b>',first_func);
				initialPet1.style.width='200px'
				initialPet1.style.height='250px';
				initialPet1.style.left='calc(20% - 100px)';
				initialPet1.style.top='calc(50% - 125px)';
				initialPet1.style['cursor']='pointer';
				initialPet1.style.backgroundSize='cover';
				initialPet1.setBackgroundImage('extension/扩展ol/ALX_chuanqibolu.jpg');
				initialPet1.link='ALX_chuanqibolu';
				var initialPet2=ui.create.div('.player','<b><p align=center><span style="color:#00C8FF;font-size:23px;font-family:xinwei">传奇莎莎</span></b>',first_func);
				initialPet2.style.width='200px'
				initialPet2.style.height='250px';
				initialPet2.style.left='calc(50% - 100px)';
				initialPet2.style.top='calc(50% - 125px)';
				initialPet2.style['cursor']='pointer';
				initialPet2.style.backgroundSize='cover';
				initialPet2.setBackgroundImage('extension/扩展ol/ALX_chuanqishasha.jpg');
				initialPet2.link='ALX_chuanqishasha';
				var initialPet3=ui.create.div('.player','<b><p align=center><span style="color:#15FF48;font-size:23px;font-family:xinwei">传奇米奥</span></b>',first_func);
				initialPet3.style.width='200px'
				initialPet3.style.height='250px';
				initialPet3.style.left='calc(80% - 100px)';
				initialPet3.style.top='calc(50% - 125px)';
				initialPet3.style['cursor']='pointer';
				initialPet3.style.backgroundSize='cover';
				initialPet3.setBackgroundImage('extension/扩展ol/ALX_chuanqimiao.jpg');
				initialPet3.link='ALX_chuanqimiao';
				dialog2.appendChild(chooseInitialPet);
				dialog2.appendChild(initialPet1);
				dialog2.appendChild(initialPet2);
				dialog2.appendChild(initialPet3);
				game.alx_dialogs_open(_status.kzol_alx_dialogs2);
			};
			
			
			if(lib.config.ALX_version!=lib.ALX_version){
				if(lib.config.save_alx.pet_num==0){
					game.alx_dialogs_hide(_status.kzol_alx_dialogs2);
				}else{
					game.alx_dialogs_hide(_status.kzol_alx_dialogs1);
				};
				game.ALX_update();
				game.saveConfig('ALX_version',lib.ALX_version);
			};
		},
		game:{
			alx_sort:function(){
				var func=function(a,b){
					var speed=(a.ability.speed+a.addedAbility.speed-a.reducedAbility.speed)*(1+a.abilityRank.speed*0.2);
					var speed1=(b.ability.speed+b.addedAbility.speed-b.reducedAbility.speed)*(1+b.abilityRank.speed*0.2);
					return speed1-speed;
				};
				game.players.sort(func);
				var players=game.players.concat(game.dead);
				for(var i=0;i<game.players.length;i++){
					if(i==0){
						game.players[i].previous=game.players[game.players.length-1];
					}else{
						game.players[i].previous=game.players[i-1];
					};
					if(i==game.players.length-1){
						game.players[i].next=game.players[0];
					}else{
						game.players[i].next=game.players[i+1];
					};
				};
				var list=[];
				for(var i=0;i<game.players.length;i++){
					var pl=game.players[i];
					pl.setIdentity(i+1);
				};
			},
			alx_gainExp:function(num_yb,num){
				if(lib.config.save_alx.pet[num_yb]!=undefined){
					var bool=false;
					var pet=lib.config.save_alx.pet[num_yb];
					pet.exp+=num;
					var func=function(){
						if(pet.exp>=pet.lv*pet.lv*pet.star&&pet.lv<100){
							bool=true;
							pet.exp-=pet.lv*pet.lv*pet.star;
							pet.lv+=1;
							if(lib.kzol_ALXYB[pet.name]!=undefined){
								for(var i in lib.kzol_ALXYB[pet.name]){
									var ability=lib.kzol_ALXYB[pet.name][i];
									pet[i]+=ability*9/1000;
									pet[i]=Math.round(pet[i]*100)/100;
								};
							};
							if(pet.exp>=pet.lv*pet.lv*pet.star) func();
						};
					};
					func();
					game.saveConfig('save_alx',lib.config.save_alx);
					game.say1(get.translation(pet.name)+'获得了'+num+'点经验');
					if(bool==true){
						game.say1(get.translation(pet.name)+'升至'+pet.lv+'级');
					};
					delete _status.kzol_alx_changeCk;
				};
			},
			alx_gainPet:function(name,num){
				if(lib.kzol_ALXYB!=undefined&&lib.kzol_ALXYB[name]!=undefined){
					if(num==undefined) num=1;
					var sx={};
					for(var i in lib.kzol_ALXYB[name]){
						sx[i]=(Math.round(lib.kzol_ALXYB[name][i]*10)+Math.round((lib.kzol_ALXYB[name][i]*9/10)*num))/100;
					};
					var skills=[];
					for(var i=0;i<lib.character[name][3].length;i++){
						skills.push(lib.character[name][3][i]);
					};
					lib.config.save_alx.pet[lib.config.save_alx.pet_num]={
						name:name,
						lv:num,
						exp:0,
						star:get.ALX_starRank(name),
						group:lib.character[name][1],
						skills:skills,
						hp:sx.hp,
						attackC:sx.attackC,
						attackE:sx.attackE,
						defenseC:sx.defenseC,
						defenseE:sx.defenseE,
						speed:sx.speed,
					};
					lib.config.save_alx.pet_num++;
					game.saveConfig('save_alx',lib.config.save_alx);
					game.say1('获得了亚比-'+get.translation(name)+'（'+num+'级）');
					delete _status.kzol_alx_changeCk;
				};
			},
			alx_dialogs_open:function(dialogs){
				for(var i in dialogs){
					ui.window.appendChild(dialogs[i]);
				};
			},
			alx_dialogs_hide:function(dialogs){
				for(var i in dialogs){
					dialogs[i].style.display='none';
				};
			},
			alx_dialogs_show:function(dialogs){
				setTimeout(function(){
					for(var i in dialogs){
						dialogs[i].style.display='';
					};
				},250);
			},
			kzol_loop:game.loop,
			kzol_alx_hide:function(){
				ui.arena.delete();
				ui.auto.hide();
			},
			kzol_alx_start:function(){
				'step 0'
				if(_status.alx_createControl) ui.create.control=_status.alx_createControl;
				if(ui.sortCard!=undefined) ui.sortCard.style.display='';
				if(ui.auto!=undefined){
					ui.auto.style.display='';
					ui.auto.classList.remove('hidden');
				};
				_status.mode=lib.config.mode_config.aolaStar.mode;
				var num=get.config('players');
				if(_status.mode=='ex') num=get.config('players_ex');
				game.prepareArena(num);
				if(window.decadeUI&&window.decadeUI.animate&&window.decadeUI.animate.frames){ //十周年ui适配
					window.decadeUI.animate.arena=ui.arena.appendChild(document.createElement('canvas'));
					window.decadeUI.animate.frames[2].canvas=window.decadeUI.animate.arena;
				};
				for(var i=0;i<game.players.length;i++){
					game.players[i].getId();
				};
				'step 1'
				if(_status.mode=='ex'){
					_status.alx_createControl=ui.create.control;
					ui.create.control=function(){
						var control=_status.alx_createControl.apply(this,arguments);
						if(control.childNodes&&control.childNodes.length>0){
							var bool=false;
							var controls;
							if(Array.isArray(arguments[0])){
								controls=arguments[0];
							}else{
								controls=arguments;
							};
							for(var i=0;i<control.childNodes.length;i++){
								var skill=controls[i];
								if(lib.skill[skill]&&lib.skill[skill].pp!=undefined){
									bool=true;
								};
							};
							if(bool==true&&ui.me!=undefined&&ui.me.childNodes!=undefined&&ui.me.childNodes.length!=undefined){
								var hc1=ui.me.childNodes[0];
								hc1.appendChild(control);
								control.style.height='calc(95%)';
								control.style.width='calc(95%)';
								control.style.transform='';
								control.style['overflow-x']='scroll';
								control.style['overflow-y']='hidden';
								control.addEventListener('mousewheel',function(e){
									var delD=e.wheelDelta?e.wheelDelta:-e.detail*40;
									var move_s=delD>0?-30:30;
									this.scrollLeft+=move_s;
								});
								lib.setScroll(control);
								control['_offset']=0;
								//control.style.left='calc(2.5%)';
								//control.style.top='calc(2.5%)';
								for(var i=0;i<control.childNodes.length;i++){
									var div=control.childNodes[i];
									div.style.height='calc(80%)';
									div.style.width='150px';
									div.style.top='calc(10% - 4px)';
									div.style.left=(10+170*i)+'px';
									div.style['font-family']='shousha';
									div.style.position='absolute';
									div.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
									div.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
									div.onmousedown=function(e){
										e.stopPropagation();
									};
									div.addEventListener('touchstart',function(e){
										e.stopPropagation();
									});
									div.style['overflow-x']='hidden';
									div.style['overflow-y']='scroll';
									lib.setScroll(div);
									div.style['white-space']='normal';
									div.style.transition='opacity 0.5s';
									if(lib.config.button_press){
										div.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
											this.style.transform='scale(0.95)';
										});
										div.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
											this.style.transform='';
										});
									};
								};
								setTimeout(function(){
									for(var i=0;i<control.childNodes.length;i++){
										var div=control.childNodes[i];
										var skill=controls[i];
										if(lib.translate[skill+'_info']!=undefined){
											div.innerHTML+='<br>'+lib.translate[skill+'_info'];
											var num;
											for(var j=0;j<div.innerHTML.length;j++){
												if(div.innerHTML[j]=='P'&&div.innerHTML[j+1]=='P'&&div.innerHTML[j+2]=='：'){
													num=j;
												};
											};
											if(num!=undefined&&game.me.storage[skill+'_pp']!=undefined){
												div.innerHTML=div.innerHTML.slice(0,num+3)+
												game.me.storage[skill+'_pp']+'/'+
												div.innerHTML.slice(num+3,div.innerHTML.length);
											};
										};
									};
								},100)
							};
						};
						return control;
					};
				};
				if(ui.arena&&ui.arena.classList.contains('choose-character')) ui.arena.classList.remove('choose-character');
				if(_status.kzol_alx_onBattle!=undefined){
					var pet=lib.config.save_alx.pet[_status.kzol_alx_onBattle];
					if(pet!=undefined) game.me.init(pet.name);
				};
				var list=[];
				for(var i in lib.characterPack['mode_extension_奥拉星S']){
					list.push(i);
				};
				if(pet!=undefined&&list.contains(pet.name)) list.remove(pet.name);
				for(var i=0;i<game.players.length;i++){
					if(game.players[i]!=game.me){
						var yb=list.randomGet();
						game.players[i].init(yb);
						list.remove(yb);
					};
				};
				game.alx_sort();
				'step 2'
				_status.kzol_alx_exp=0;
				if(lib.config.show_cardpile){
					ui.cardPileButton.style.display='';
				}else{
					ui.cardPileButton.style.display='none';
				};
				if(_status.mode!='ex') game.gameDraw();
				game.phaseLoop(game.players[0]);
				game.loop=game.kzol_loop;
				game.loop();
				_status.event.trigger('gameStart');
				if(lib.config.mode_config.aolaStar.alx_xt==true){
					for(var i=0;i<game.players.length;i++){
						var pl=game.players[i];
						var kzol_alx_hp=ui.create.div();
						if(lib.config.mode_config.aolaStar.alx_xtcd=='gd'){
							kzol_alx_hp.style.height=(pl.offsetHeight*0.5)+'px';
						}else{
							kzol_alx_hp.style.height=pl.node.hp.offsetHeight+'px';
						};
						kzol_alx_hp.style.width=pl.node.hp.offsetWidth+'px';
						if(lib.config.mode_config.aolaStar.alx_xtcd=='gd'){
							kzol_alx_hp.style.top=(pl.node.hp.offsetTop-(pl.offsetHeight*0.5-pl.node.hp.offsetHeight))+'px';
						}else{
							kzol_alx_hp.style.top=pl.node.hp.offsetTop+'px';
						};
						kzol_alx_hp.style.left=pl.node.hp.offsetLeft+'px';
						kzol_alx_hp.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
						kzol_alx_hp.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
						kzol_alx_hp.style.borderRadius='3px';
						//kzol_alx_hp.style.transform='rotate(180deg)';
						pl.appendChild(kzol_alx_hp);
						pl.node.kzol_alx_hp=kzol_alx_hp;
						
						var kzol_alx_hp1=ui.create.div('');
						kzol_alx_hp1.style.width='calc(100%)';
						kzol_alx_hp1.style.height='calc(100%)';
						kzol_alx_hp1.style.left='0px';
						kzol_alx_hp1.style.bottom='0px';
						kzol_alx_hp1.style.borderRadius='3px';
						kzol_alx_hp1.setBackgroundImage('extension/扩展ol/血条.jpg');
						kzol_alx_hp1.style.backgroundSize="100% 100%";
						kzol_alx_hp.appendChild(kzol_alx_hp1);
						pl.node.kzol_alx_hp1=kzol_alx_hp1;
						
						var kzol_alx_hp2=ui.create.div('');
						kzol_alx_hp2.style.width=(kzol_alx_hp.offsetWidth*4)+'px';
						kzol_alx_hp2.style.height=kzol_alx_hp.offsetHeight+'px';
						kzol_alx_hp2.style.left=(kzol_alx_hp.offsetLeft-kzol_alx_hp.offsetWidth*1.5)+'px';
						kzol_alx_hp2.style.top=kzol_alx_hp.offsetTop+'px';
						kzol_alx_hp2.style['text-align']='center';
						kzol_alx_hp2.style['font-family']="'STXinwei','xinwei'";
						//kzol_alx_hp2.style.transform='rotate(180deg)';
						kzol_alx_hp2.style.borderRadius='3px';
						if(lib.config.mode_config.aolaStar.alx_xtsz=='small'){
							kzol_alx_hp2.style['font-size']=(kzol_alx_hp.offsetWidth/2)+'px';
						}else if(lib.config.mode_config.aolaStar.alx_xtsz=='big'){
							kzol_alx_hp2.style['font-size']=(kzol_alx_hp.offsetWidth)+'px';
						}else{
							kzol_alx_hp2.style['font-size']=(kzol_alx_hp.offsetWidth/1.5)+'px';
						};
						kzol_alx_hp2.style['line-height']=(kzol_alx_hp.offsetHeight)+'px';
						if(pl.hp==Infinity){
							kzol_alx_hp2.innerHTML='∞';
						}else{
							kzol_alx_hp2.innerHTML=Math.round(pl.hp*1000);
						};
						pl.appendChild(kzol_alx_hp2);
						pl.node.kzol_alx_hp2=kzol_alx_hp2;
						
						pl.node.hp.style.display='none';
					};
				};
			},
			kzol_wjms_over:function(result){
				if(_status.over) return;
				var i,j,k,num,table,tr,td,dialog;
				_status.over=true;
				ui.control.show();
				ui.clear();
				game.stopCountChoose();
				if(ui.time3){
					clearInterval(ui.time3.interval);
				}
				if((game.layout=='long2'||game.layout=='nova')&&!game.chess){
					ui.arena.classList.add('choose-character');
					ui.me.hide();
					ui.mebg.hide()
					ui.autonode.hide();
					if(lib.config.radius_size!='off'){
						ui.historybar.style.borderRadius='0 0 0 4px';
					}
				}
				if(lib.config.background_audio){
					if(result===true){
						game.playAudio('effect','win');
					}
					else if(result===false){
						game.playAudio('effect','lose');
					}
					else{
						game.playAudio('effect','tie');
					}
				}
				var resultbool=result;
				if(typeof resultbool!=='boolean'){
					resultbool=null;
				}
				if(result===true) result='战斗胜利';
				if(result===false) result='战斗失败';
				if(result==undefined) result='战斗结束';
				dialog=ui.create.dialog(result);
				
				if(resultbool==true&&_status.kzol_alx_onBattle!=undefined){
					var pet=lib.config.save_alx.pet[_status.kzol_alx_onBattle];
					_status.kzol_alx_exp+=Math.round(pet.lv*pet.lv*pet.star/5);
				};
				game.alx_gainExp(_status.kzol_alx_onBattle,_status.kzol_alx_exp);
				dialog.addText(get.translation(game.me.name)+'获得了'+_status.kzol_alx_exp+'点经验');
				
				dialog.forcebutton=true;
				if(game.players.length){
					table=document.createElement('table');
					tr=document.createElement('tr');
					tr.appendChild(document.createElement('td'));
					td=document.createElement('td');
					td.innerHTML='伤害';
					tr.appendChild(td);
					td=document.createElement('td');
					td.innerHTML='受伤';
					tr.appendChild(td);
					td=document.createElement('td');
					td.innerHTML='摸牌';
					tr.appendChild(td);
					td=document.createElement('td');
					td.innerHTML='出牌';
					tr.appendChild(td);
					td=document.createElement('td');
					td.innerHTML='杀敌';
					tr.appendChild(td);
					table.appendChild(tr);
					for(i=0;i<game.players.length;i++){
						tr=document.createElement('tr');
						td=document.createElement('td');
						td.innerHTML=get.translation(game.players[i]);
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.players[i].stat.length;j++){
							if(game.players[i].stat[j].damage!=undefined) num+=game.players[i].stat[j].damage;
						}
						td.innerHTML=Math.round(num*1000)/1000;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.players[i].stat.length;j++){
							if(game.players[i].stat[j].damaged!=undefined) num+=game.players[i].stat[j].damaged;
						}
						td.innerHTML=Math.round(num*1000)/1000;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.players[i].stat.length;j++){
							if(game.players[i].stat[j].gain!=undefined) num+=game.players[i].stat[j].gain;
						}
						td.innerHTML=Math.round(num*1000)/1000;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.players[i].stat.length;j++){
							for(k in game.players[i].stat[j].card){
								num+=game.players[i].stat[j].card[k];
							}
						}
						td.innerHTML=Math.round(num*1000)/1000;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.players[i].stat.length;j++){
							if(game.players[i].stat[j].kill!=undefined) num+=game.players[i].stat[j].kill;
						}
						td.innerHTML=Math.round(num*1000)/1000;
						tr.appendChild(td);
						table.appendChild(tr);
					}
					dialog.add(ui.create.div('.placeholder'));
					dialog.content.appendChild(table);
				}
				if(game.dead.length){
					table=document.createElement('table');
					table.style.opacity='0.5';
					if(game.players.length==0){
						tr=document.createElement('tr');
						tr.appendChild(document.createElement('td'));
						td=document.createElement('td');
						td.innerHTML='伤害';
						tr.appendChild(td);
						td=document.createElement('td');
						td.innerHTML='受伤';
						tr.appendChild(td);
						td=document.createElement('td');
						td.innerHTML='摸牌';
						tr.appendChild(td);
						td=document.createElement('td');
						td.innerHTML='出牌';
						tr.appendChild(td);
						td=document.createElement('td');
						td.innerHTML='杀敌';
						tr.appendChild(td);
						table.appendChild(tr);
					}
					for(i=0;i<game.dead.length;i++){
						tr=document.createElement('tr');
						td=document.createElement('td');
						td.innerHTML=get.translation(game.dead[i]);
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.dead[i].stat.length;j++){
							if(game.dead[i].stat[j].damage!=undefined) num+=game.dead[i].stat[j].damage;
						}
						td.innerHTML=Math.round(num*1000)/1000;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.dead[i].stat.length;j++){
							if(game.dead[i].stat[j].damaged!=undefined) num+=game.dead[i].stat[j].damaged;
						}
						td.innerHTML=Math.round(num*1000)/1000;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.dead[i].stat.length;j++){
							if(game.dead[i].stat[j].gain!=undefined) num+=game.dead[i].stat[j].gain;
						}
						td.innerHTML=Math.round(num*1000)/1000;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.dead[i].stat.length;j++){
							for(k in game.dead[i].stat[j].card){
								num+=game.dead[i].stat[j].card[k];
							}
						}
						td.innerHTML=Math.round(num*1000)/1000;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.dead[i].stat.length;j++){
							if(game.dead[i].stat[j].kill!=undefined) num+=game.dead[i].stat[j].kill;
						}
						td.innerHTML=Math.round(num*1000)/1000;
						tr.appendChild(td);
						table.appendChild(tr);
					}
					dialog.add(ui.create.div('.placeholder'));
					dialog.content.appendChild(table);
				}
				if(game.additionaldead&&game.additionaldead.length){
					table=document.createElement('table');
					table.style.opacity='0.5';
					for(i=0;i<game.additionaldead.length;i++){
						tr=document.createElement('tr');
						td=document.createElement('td');
						td.innerHTML=get.translation(game.additionaldead[i]);
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.additionaldead[i].stat.length;j++){
							if(game.additionaldead[i].stat[j].damage!=undefined) num+=game.additionaldead[i].stat[j].damage;
						}
						td.innerHTML=Math.round(num*1000)/1000;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.additionaldead[i].stat.length;j++){
							if(game.additionaldead[i].stat[j].damaged!=undefined) num+=game.additionaldead[i].stat[j].damaged;
						}
						td.innerHTML=Math.round(num*1000)/1000;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.additionaldead[i].stat.length;j++){
							if(game.additionaldead[i].stat[j].gain!=undefined) num+=game.additionaldead[i].stat[j].gain;
						}
						td.innerHTML=Math.round(num*1000)/1000;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.additionaldead[i].stat.length;j++){
							for(k in game.additionaldead[i].stat[j].card){
								num+=game.additionaldead[i].stat[j].card[k];
							}
						}
						td.innerHTML=Math.round(num*1000)/1000;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.additionaldead[i].stat.length;j++){
							if(game.additionaldead[i].stat[j].kill!=undefined) num+=game.additionaldead[i].stat[j].kill;
						}
						td.innerHTML=Math.round(num*1000)/1000;
						tr.appendChild(td);
						table.appendChild(tr);
					}
					dialog.add(ui.create.div('.placeholder'));
					dialog.content.appendChild(table);
				}
				dialog.add(ui.create.div('.placeholder'));
				for(var i=0;i<game.players.length;i++){
					if(!_status.connectMode&&game.players[i].isUnderControl(true)&&game.layout!='long2') continue;
					var hs=game.players[i].getCards('h');
					if(hs.length){
						dialog.add('<div class="text center">'+get.translation(game.players[i])+'</div>');
						dialog.addSmall(hs);
					}
				}
				for(var i=0;i<game.dead.length;i++){
					if(!_status.connectMode&&game.dead[i].isUnderControl(true)&&game.layout!='long2') continue;
					var hs=game.dead[i].getCards('h');
					if(hs.length){
						dialog.add('<div class="text center">'+get.translation(game.dead[i])+'</div>');
						dialog.addSmall(hs);
					}
				}
				dialog.add(ui.create.div('.placeholder.slim'));
				game.addVideo('over',null,dialog.content.innerHTML);
				if(ui.auto) ui.auto.hide();
				for(var i=0;i<lib.onover.length;i++){
					lib.onover[i](resultbool);
				};
				var control=ui.create.control('返回',function(){
					if(lib.config.mode_config.aolaStar.alx_fhsx==true){
						game.reload();
						return ;
					};
					if(ui.sortCard!=undefined) ui.sortCard.style.display='none';
					if(ui.auto!=undefined) ui.auto.style.display='none';
					delete _status.kzol_alx_onBattle;
					delete _status.kzol_alx_exp;
					if(_status.auto==true){
						ui.control.show();
						_status.auto=false;
						ui.auto.classList.remove('glow');
						ui.arena.classList.remove('auto');
					};
					ui.cardPileButton.style.display='none';
					delete _status.over;
					dialog.delete();
					control.close();
					game.loop=function(){};
					ui.control.innerHTML='';
					ui.arenalog.innerHTML='';
					var nodes=[];
					for(var i=0;i<ui.arena.childNodes.length;i++){
						nodes.push(ui.arena.childNodes[i]);
					}
					for(var i=0;i<nodes.length;i++){
						if(nodes[i]==ui.canvas) continue;
						if(nodes[i]==ui.control) continue;
						if(nodes[i]==ui.arenalog) continue;
						if(nodes[i]==ui.roundmenu) continue;
						if(nodes[i]==ui.timer) continue;
						if(nodes[i]==ui.autonode) continue;
						nodes[i].remove();
					}
					ui.sidebar.innerHTML='';
					ui.cardPile.innerHTML='';
					ui.discardPile.innerHTML='';
					ui.special.innerHTML='';
					ui.ordering.innerHTML='';
					ui.playerids.remove();
					game.players.length=0;
					game.dead.length=0;
					game.me=null;
					ui.arena.delete();
					ui.window.classList.remove('leftbar');
					ui.window.classList.remove('rightbar');
					game.alx_dialogs_show(_status.kzol_alx_dialogs1);
					if(_status.kzol_bwp_hadDiscard!=undefined) delete _status.kzol_bwp_hadDiscard;
					if(_status.kzol_changeMinskin!=undefined){
						clearInterval(_status.kzol_changeMinskin);
						delete _status.kzol_changeMinskin;
					};
					delete _status.mode;
				});
			},
		},
		element:{
			player:{
				dieAfter:function(source){
					/*
					if(source!=undefined){
						source.recover();
						source.changeAllAbility(200);
					};
					*/
					var player=this;
					if(player!=game.me&&source==game.me){
						var lv=player.storage.ALX_lv;
						_status.kzol_alx_exp+=Math.round(lv*lv*get.ALX_starRank(player.name)/10);
					};
					if(game.me.isDead()){
						game.kzol_wjms_over(false);
					}else{
						if(game.players.length==1) game.kzol_wjms_over(true);
					};
				},
			},
		},
		ai:{
			get:{
				rawAttitude:function(from,to){
					if(from==to) return 5;
					return -5;
				},
			},
		},
		help:{
			'奥拉星':'<li>大乱斗：<ul><li>所有角色互相厮杀<li>当玩家死亡时，游戏失败；当场上只剩下玩家时，游戏胜利<li>当遇见绿色等级亚比时，玩家可以对其使用捕捉，捕捉成功后获得该亚比（1级）（被捕捉亚比体力越少，捕捉成功概率越高）<li>游戏结束后，玩家出战参与大乱斗的亚比获得经验<li>游戏开始前和每轮最后一个角色的回合开始前，根据速度（计算速度等级）调整各个角色的回合顺序</ul><li>大乱斗EX：<ul><li>大乱斗模式规则<li>在该模式下，战斗体力为亚比体力/1000，游戏开始时和摸牌阶段不摸牌<li>恢复PP值不需要弃牌</ul>',
		},
	},{
		translate:'奥拉星',
		extension:'扩展ol',
		config:{
			mode:{
				name:'模式',
				init:'normal',
				item:{
					'normal':'大乱斗',
					'ex':'大乱斗EX',
				},
				frequent:true,
				//restart:true,
			},
			info:{
				name:'<b><p align=center><span style=\"font-size:18px\">---------大乱斗--------</span></b>',
				clear:true,
				nopointer:true,
				frequent:true,
			},
			players:{
				name:'游戏人数',
				init:2,
				item:{
					2:'2',
					3:'3',
					4:'4',
					5:'5',
					6:'6',
					7:'7',
					8:'8',
					8:'8',
					9:'9',
					10:'10',
					//11:'11',
					//12:'12',
					//13:'13',
					//14:'14',
					//15:'15',
					//16:'16',
				},
				frequent:true,
				//restart:true,
			},
			level:{
				name:'对手等级',
				init:1,
				item:{
					1:'1-10级',
					2:'11-20级',
					3:'21-30级',
					4:'31-40级',
					5:'41-50级',
					6:'51-60级',
					7:'61-70级',
					8:'71-80级',
					9:'81-90级',
					10:'91-100级',
					11:'101-110级',
					12:'111-120级',
					13:'121-130级',
					14:'131-140级',
					15:'141-150级',
				},
				frequent:true,
				//restart:true,
			},
			info_ex:{
				name:'<b><p align=center><span style=\"font-size:18px\">--------大乱斗EX-------</span></p></b>',
				clear:true,
				nopointer:true,
				frequent:true,
			},
			info_ex1:{
				name:'战斗体力为亚比体力/1000，游戏开始时和摸牌阶段不摸牌',
				clear:true,
				nopointer:true,
				frequent:true,
			},
			players_ex:{
				name:'游戏人数',
				init:2,
				item:{
					2:'2',
					3:'3',
					4:'4',
					5:'5',
					6:'6',
					7:'7',
					8:'8',
					8:'8',
					9:'9',
					10:'10',
				},
				frequent:true,
			},
			level_ex:{
				name:'对手等级',
				init:8,
				item:{
					8:'71-80级',
					9:'81-90级',
					10:'91-100级',
					11:'101-110级',
					12:'111-120级',
					13:'121-130级',
					14:'131-140级',
					15:'141-150级',
				},
				frequent:true,
			},
			alx_fenge:{
				name:"<b><p align=center><span style=\"font-size:18px\">------------------------</span></p></b>",
				clear:true,
				nopointer:true,
				frequent:true,
			},
			/*
			alx_sytldz:{
				"name":"贴合亚比对战玩法",
				"init":false,
				intro:'开启后，战斗体力为亚比体力/1000，摸牌阶段摸牌数为0，游戏开始时不摸牌（设置后会刷新游戏）',
				onclick:function(bool){
					game.saveConfig('alx_sytldz',bool,'aolaStar');
					game.say1('设置成功，即将刷新游戏');
					setTimeout(function(){
						game.reload();
					},1500);
				},
			},
			*/
			fdlog:{
				name:'放大arenalog',
				init:false,
				restart:true,
				//frequent:true,
				intro:'开启后放大arenalog,且点击arenalog可以将其置于顶层',
			},
			alx_fhsx:{
				"name":"战斗结束后返回刷新",
				"init":false,
			},
			alx_xt:{
				"name":"模式血条",
				"init":true,
				intro:'设置模式血条，血条上显示的数字是当前体力的1000倍',
			},
			alx_xtcd:{
				"name":"模式血条长度",
				"init":'gs',
				item:{
					'gs':'跟随',
					'gd':'固定',
				},
			},
			alx_xtsz:{
				"name":"模式血条数字",
				"init":'middle',
				item:{
					'small':'小',
					'middle':'中',
					'big':'大',
				},
			},
		},
	});
}