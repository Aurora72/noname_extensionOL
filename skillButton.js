window.func=function(lib,game,ui,get,ai,_status){
	var skill={
		"kzol_zhengjing":{
			audio:'zhengjing',
			enable:"phaseUse",
			usable:1,
			filter:function(event,player){
				return !player.hasSkill('zhengjing3');
			},
			createDialog:function(cards){
				ui.arena.style.display='none';
				var cards1=[];
				for(var i in cards){
					for(var j=0;j<cards[i];j++){
						cards1.push(i);
					};
				};
				if(cards1.length==0) cards1.push('sha');
				var result=[];
				var interval;
				var finished=false;
				var finish=function(){
					if(finished==true) return;
					finished=true;
					ui.arena.style.display='';
					clearInterval(interval);
					_status.event._result=result;
					game.resume();
				};
				var dialog=ui.create.dialog('hidden');
				dialog.classList.add('popped');
				dialog.classList.add('static');
				dialog.style.height='100%';
				dialog.style.width='100%';
				dialog.style.top='0px';
				dialog.style.left='0px';
				dialog.style['text-align']='left';
				ui.window.appendChild(dialog);
				dialog.innerHTML='';
				var getAngle=function(x1,y1,x2,y2){
					var x=x1-x2;
					var y=y1-y2;
					var z=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
					var cos=y/z;
					var radina=Math.acos(cos);
					var angle=180/(Math.PI/radina);
					if(x2>x1&&y2===y1) angle=0;
					if(x2>x1&&y2<y1) angle=angle-90;
					if(x2===x1&&y1>y2) angle=-90;
					if(x2<x1&&y2<y1) angle=270-angle;
					if(x2<x1&&y2===y1) angle=180;
					if(x2<x1&&y2>y1) angle=270-angle;
					if(x2===x1&&y2>y1) angle=90;
					if(x2>x1&&y2>y1) angle=angle-90;
					return angle;
				};
				var lineList=[];
				var pointList=[];
				var pointNum=0;
				var createLine=function(e){
					if(this.hadClicked==true){
						if(e.changedTouches) e=e.changedTouches[e.changedTouches.length-1];
						if(pointNum%3==0){
							pointList.push([e.clientX/game.documentZoom,e.clientY/game.documentZoom]);
							if(pointList.length>=2){
								var point0=pointList[pointList.length-2];
								var point1=pointList[pointList.length-1];
								var x0=point0[0];
								var y0=point0[1];
								var x1=point1[0];
								var y1=point1[1];
								var div=document.createElement('div');
								div.style.zIndex=1;
								div.style.borderRadius='4px';
								div.style.position='fixed';
								div.style.background='#ffffff';
								div.style.height='4px';
								div.style.width=(Math.pow(Math.pow(x1-x0,2)+Math.pow(y1-y0,2),0.5)+2)+'px';
								div.style.left=(x0+2)+'px';
								div.style.top=(y0+2)+'px';
								div.style.transform='rotate('+getAngle(x0,y0,x1,y1)+'deg)';
								div.style['transform-origin']='0 50%';
								this.appendChild(div);
								lineList.push(div);
								if(lineList.length>3){
									var div1=lineList[0];
									div1.style.transition='opacity 0.125s';
									div1.style.opacity=0;
									setTimeout(function(){
										if(div1.parentNode!=undefined) div1.parentNode.removeChild(div1);
									},125);
									lineList.remove(lineList[0]);
									pointList[0]=1;
									pointList.remove(pointList[0]);
								};
							};
						};
						pointNum++;
					};
				};
				var clearLine=function(){
					var deleteLine=function(){
						var div1=lineList[0];
						div1.style.transition='opacity 0.125s';
						div1.style.opacity=0;
						setTimeout(function(){
							if(div1.parentNode!=undefined) div1.parentNode.removeChild(div1);
						},125);
						lineList.remove(lineList[0]);
						if(lineList.length>0) deleteLine();
					};
					if(lineList.length>0) deleteLine();
					pointList=[];
				};
				dialog.addEventListener(lib.device?"touchstart":"mousedown",function(e){
					e.stopPropagation();
					this.hadClicked=true;
					pointNum=0;
				});
				dialog.addEventListener(lib.device?"touchmove":"mousemove",createLine);
				dialog.addEventListener(lib.device?"touchend":"mouseup",function(e){
					e.stopPropagation();
					delete this.hadClicked;
					clearLine();
				});
				var createCard=function(name){
					var left=Math.ceil(Math.random()*560);
					var card=ui.create.div();
					card.style.height='90px';
					card.style.width='90px';
					card.style.borderRadius='5px';
					card.name=name;
					card.style.backgroundSize='cover';
					card.style.backgroundImage='url("'+lib.assetURL+'image/card/'+name+'.png"),url("'+lib.assetURL+'theme/simple/card.png")';
					//card.init({name:name});
					if(name=='du'){
						card.style.backgroundImage='radial-gradient(ellipse closest-side at center,rgba(255,0,0,0),rgba(255,0,0,0),rgba(255,0,0,0.4)),'+card.style.backgroundImage;
						//card.style['box-shadow']='rgba(0, 0, 0, 0.2) 0 0 0 1px,rgba(255, 0, 0, 0.4) 0 0 5px, rgba(255, 0, 0, 0.4) 0 0 12px, rgba(255, 0, 0, 0.8) 0 0 15px';
					};
					card.style['pointer-events']='none';
					card.style.position='absolute';
					card.style.top=(dialog.offsetHeight-5)+'px';
					card.style.left=(left)+'px';
					card.style.transition='opacity 0.25s';
					card.style.opacity=0;
					card.link_top=dialog.offsetHeight-5;
					card.link_left=left;
					dialog.appendChild(card);
					setTimeout(function(){
						card.style.opacity=1;
					},10);
					var t_x=0,
						t_y=0,
						s_x=0,
						s_y=0,
						s_y0=0,
						v_y=[90,95,100,105,110,115,105,110,115].randomGet(),
						a_y=[9,9.2,9.4,9.6,9.8,10,10.2,10.4,10.6,10.8,11].randomGet(),
						t_x_increase=0,
						t_y_increase=0.3,
						isMovingUp=true,
						cardLeft=card.offsetLeft,
						cardTop=card.offsetTop,
						num_x=63;
					if(v_y==90){
						num_x=56;
					}else if(v_y==95){
						num_x=60;
					}else if(v_y==100){
						num_x=63;
					}else if(v_y==105){
						num_x=67;
					}else if(v_y==110){
						num_x=70;
					}else{
						num_x=74;
					};
					if([true,false].randomGet()){
						var s1=dialog.offsetWidth-card.offsetWidth-left;
						t_x_increase=(s1/num_x)*Math.random();
					}else{
						var s1=left;
						t_x_increase=-(s1/num_x)*Math.random();
					};
					var interval1=setInterval(function(){
						if(!_status.paused2){
							t_x+=t_x_increase;
							s_x=t_x;
							//card.style.left=(cardLeft+s_x)+'px';
							card.link_left=cardLeft+s_x;
							t_y+=t_y_increase;
							s_y=-(v_y*t_y-a_y*Math.pow(t_y,2)/2);
							//card.style.top=(cardTop+s_y)+'px';
							card.link_top=cardTop+s_y;
							card.style.transform='translate('+s_x+'px,'+s_y+'px)';
							if(isMovingUp==true){
								if(s_y-s_y0>0) isMovingUp=!isMovingUp;
								s_y0=s_y;
							};
							if(card.link_top>dialog.offsetHeight+5-card.offsetWidth&&
							isMovingUp==false&&card.hadHide!=true){
								card.hadHide=true;
								card.style.transition='opacity .3s';
								card.style.opacity=0;
								setTimeout(function(){
									card.delete();
									clearInterval(interval1);
								},350);
							};
							if(card.hadCut!=true){
								for(var i=0;i<pointList.length;i++){
									if(card.hadCut==true||pointList[i+1]==undefined) continue;
									var point0=pointList[i];
									var point1=pointList[i+1];
									var x0=point0[0]-dialog.offsetLeft;
									var y0=point0[1]-dialog.offsetTop;
									var x1=point1[0]-dialog.offsetLeft;
									var y1=point1[1]-dialog.offsetTop;
									var bool=false;
									var x0_card=card.link_left;
									var x1_card=card.link_left+card.offsetWidth;
									var y0_card=card.link_top;
									var y1_card=card.link_top+card.offsetHeight;
									var xiangjiao=function(line1,line2){
										var x1=line1[0][0];
										var x2=line1[1][0];
										var x3=line2[0][0];
										var x4=line2[1][0];
										var y1=line1[0][1];
										var y2=line1[1][1];
										var y3=line2[0][1];
										var y4=line2[1][1];
										if(!(Math.min(x1,x2)<=Math.max(x3,x4)&&
										Math.min(y3,y4)<=Math.max(y1,y2)&&
										Math.min(x3,x4)<=Math.max(x1,x2)&&
										Math.min(y1,y2)<=Math.max(y3,y4))){
											return false;
										}else{
											return true;
										};
									};
									var line=[[x0,y0],[x1,y1]];
									if(xiangjiao(line,[[x0_card,y0_card],[x0_card,y1_card]])==true) bool=true;
									if(xiangjiao(line,[[x0_card,y1_card],[x1_card,y1_card]])==true) bool=true;
									if(xiangjiao(line,[[x1_card,y1_card],[x1_card,y0_card]])==true) bool=true;
									if(xiangjiao(line,[[x1_card,y0_card],[x0_card,y0_card]])==true) bool=true;
									if(bool==true){
										if(card.name=='du'){
											finish();
										}else{
											result.push(card.name);
										};
										card.hadCut=true;
										card.style.transition='all .3s';
										card.style.transform+=',scale(1.5)';
										card.style.opacity=0;
										setTimeout(function(){
											card.delete();
										},350);
										clearInterval(interval1);
									};
								};
							};
						};
						if(dialog.parentNode==undefined) clearInterval(interval1);
					},25);
				};
				interval=setInterval(function(){
					if(!_status.paused2){
						var num2=[0,1,1,1,1,2,2].randomGet();
						if(num2>0){
							for(var i=0;i<num2;i++){
								if(cards1.length==0) continue;
								var card=cards1.randomGet();
								createCard(card);
								cards1.remove(card);
							};
						};
						if(cards1.length==0&&dialog.childNodes.length==0){
							finish();
						};
					};
				},750);
				/*
				var control=ui.create.control('取消',function(){
					finish();
					this.close();
				});
				control.style.left='0px';
				*/
				return dialog;
			},
			content:function(){
				"step 0"
				var cards={
					'du':15,
				};
				var pushCard=function(cardPack,num){
					var pack=lib.cardPack[cardPack];
					if(pack!=undefined){
						var list=pack.randomGets(5);
						for(var i=0;i<list.length;i++){
							var card=list[i];
							if(cards[card]==undefined) cards[card]=num;
						};
					};
				};
				pushCard('standard',1);
				pushCard('extra',1);
				pushCard('sp',1);
				event.cards1=cards;
				if(_status.auto||player!=game.me){
					var results=[];
					for(var i in event.cards1){
						if(i!='du'){
							for(var j=0;j<event.cards1[i];j++){
								results.push(game.createCard({name:i}));
							};
						};
					};
					event.cards=results.randomGets([1,2,3,4,5].randomGet());
					player.showCards(event.cards,get.translation(player)+'整理出了以下经典');
					event.goto(4);
				};
				"step 1"
				event.dialog=lib.skill['kzol_zhengjing'].createDialog(event.cards1);
				event.switchToAuto=function(){
					ui.arena.style.display='';
					var results=[];
					for(var i in event.cards1){
						if(i!='du'){
							for(var j=0;j<event.cards1[i];j++){
								results.push(i);
							};
						};
					};
					event._result=results.randomGets([1,2,3,4,5].randomGet());
					game.resume();
				};
				_status.imchoosing=true;
				game.pause();
				"step 2"
				_status.imchoosing=false;
				if(event.dialog){
					event.dialog.close();
				};
				if(result.length>0){
					event.cards=[];
					for(var i=0;i<result.length;i++){
						event.cards.push(game.createCard({name:result[i]}));
					};
					player.chooseCardButton('请对经典进行整理',event.cards,[1,5]);
				}else{
					game.log(player,'并没有整理出经典');
					player.popup('杯具');
					event.finish();
				};
				"step 3"
				if(result.bool){
					event.cards=result.links;
					player.showCards(event.cards,get.translation(player)+'整理出了以下经典');
				}else{
					game.log(player,'并没有整理出经典');
					player.popup('杯具');
					event.finish();
				};
				"step 4"
				player.chooseTarget(true,'将整理出的经典置于一名角色的武将牌上').set('ai',function(target){
					if(target.hasSkill('xinfu_pdgyingshi')) return 0;
					return get.attitude(player,target);
				});
				"step 5"
				if(result.bool){
					var target=result.targets[0];
					player.line(target,'thunder');
					target.addSkill('zhengjing2');
					target.markAuto('zhengjing2',event.cards);
					game.cardsGotoSpecial(event.cards);
					game.log(player,'将',event.cards,'置于了',target,'的武将牌上');
				}
			},
			ai:{
				order:10,
				result:{player:1},
				threaten:3.2,
			}
		},
	};
	var translate={
		kzol_zhengjing:'整经',
		kzol_zhengjing_info:'出牌阶段，你可以整理卡牌。然后，你将整理出的卡牌置于一名角色的武将牌上。该角色的准备阶段获得这些牌，跳过此回合的判定和摸牌阶段且本回合内不能发动【整经】。',
	};
	for(var i in skill){
		lib.skill[i]=skill[i];
	};
	for(var i in translate){
		lib.translate[i]=translate[i];
	};
	if(lib.config.kzol_changeSkillButton==undefined){
		game.saveConfig('kzol_changeSkillButton',{});
	};
	var changeSkill=function(name){
		for(var j in lib.characterPack){
			for(var a in lib.characterPack[j]){
				var character=lib.characterPack[j][a];
				if(kzol_changeSkillButton[name].filter(a)){
					var skills=character[3];
					for(var b=0;b<skills.length;b++){
						if(skills[b]==name) lib.characterPack[j][a][3][b]=lib.kzol_changeSkillButton[name].to;
					};
				};
			};
		};
	};
	if(lib.kzol_changeSkillButton==undefined) lib.kzol_changeSkillButton={};
	var isWSS=function(character){
		return lib.characterPack.wushuangsha[character]!=undefined;
	};
	var kzol_changeSkillButton={
		"xinpojun":{
			to:'repojun',
			filter:isWSS,
		},
		"releiji":{
			to:'xinleiji',
			filter:isWSS,
		},
		"zhengjing":{
			to:'kzol_zhengjing',
			filter:function(){
				return true;
			},
		},
	};
	lib.arenaReady.push(function(){
		for(var i in lib.characterPack.wushuangsha){
			var character=lib.characterPack.wushuangsha[i];
			var skills=character[3];
			for(var j=0;j<skills.length;j++){
				var skill=skills[j];
				if(lib.skill['re'+skill]!=undefined){
					kzol_changeSkillButton[skill]={
						to:'re'+skill,
						filter:isWSS,
					};
				};
				if(lib.skill['xin'+skill]!=undefined){
					kzol_changeSkillButton[skill]={
						to:'xin'+skill,
						filter:isWSS,
					};
				};
				if(lib.skill['new_re'+skill]!=undefined){
					kzol_changeSkillButton[skill]={
						to:'new_re'+skill,
						filter:isWSS,
					};
				};
				if(lib.skill['ol'+skill]!=undefined){
					kzol_changeSkillButton[skill]={
						to:'ol'+skill,
						filter:isWSS,
					};
				};
			};
		};
		for(var i in kzol_changeSkillButton){
			lib.kzol_changeSkillButton[i]=kzol_changeSkillButton[i];
			if(lib.config.kzol_changeSkillButton[i]==true) changeSkill(i);
		};
	});
	lib.kzol_nodeintro['changeSkill']=function(uiintro,character,skills){
		if(skills==undefined) return;
		if(skills.length==0) return;
		if(uiintro.firstChild==undefined) return;
		if(uiintro.firstChild.firstChild==undefined) return;
		for(var i=0;i<skills.length;i++){
			var skill=skills[i];
			var bool=false;
			for(var j in lib.kzol_changeSkillButton){
				if(lib.kzol_changeSkillButton[j].filter(character)&&
				lib.kzol_changeSkillButton[j].to==skill){
					bool=j;
				};
			};
			if(bool!=false) skill=bool;
			if(lib.kzol_changeSkillButton[skill]==undefined&&bool==false) continue;
			var skill1=lib.kzol_changeSkillButton[skill].to;
			var translation=lib.translate[skill+'_ab']||get.translation(skill).slice(0,2);
			var translation1=lib.translate[skill1+'_ab']||get.translation(skill1).slice(0,2);
			var info=get.skillInfoTranslation(skill);
			var info1=get.skillInfoTranslation(skill1);
			var divs=uiintro.firstChild.firstChild;
			for(var j=0;j<divs.childNodes.length;j++){
				var div=divs.childNodes[j];
				if(div.innerHTML!=undefined&&
				(div.innerHTML.indexOf(translation)!=-1&&
				div.innerHTML.indexOf(info)!=-1)||
				(div.innerHTML.indexOf(translation1)!=-1&&
				div.innerHTML.indexOf(info1)!=-1)){
					if(lib.kzol_changeSkillButton[skill]!=undefined){
						var config=lib.kzol_changeSkillButton[skill];
						if(config.filter(character)){
							var button=ui.create.div('.menu');
							button.style.position='absolute';
							button.style.height='25px';
							button.style.width='62px';
							button.style.bottom='2px';
							button.style.left='2px';
							button.style.cursor='pointer';
							button.style.fontFamily='shousha';
							button.style.textAlign='center';
							button.style.fontsize='23px';
							button.style.lineHeight='25px';
							button.style.color='white';
							button.style['text-shadow']='black 0 0 2px';
							button.style['white-space']='nowrap';
							button.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
							button.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
							button.style.transition='opacity 0.5s';
							button.innerHTML='切换';
							div.appendChild(button);
							button.link=skill;
							button.link_translation=translation;
							button.link_translation1=translation1;
							button.link_info=info;
							button.link_info1=info1;
							if(lib.config.kzol_changeSkillButton[skill]==true){
								button.style['background-image']='linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4))';
								button.style.backgroundColor="rgb(0,255,0)";
							};
							button.onclick=function(e){
								e.stopPropagation();
								var skill=this.link;
								var translation=this.link_translation;
								var translation1=this.link_translation1;
								var info=this.link_info;
								var info1=this.link_info1;
								if(lib.config.kzol_changeSkillButton[skill]==true){
									delete lib.config.kzol_changeSkillButton[skill];
								}else{
									lib.config.kzol_changeSkillButton[skill]=true;
								};
								game.saveConfig('kzol_changeSkillButton',lib.config.kzol_changeSkillButton);
								if(lib.config.kzol_changeSkillButton[skill]==true){
									changeSkill(skill);
									this.parentNode.firstChild.childNodes[0].innerHTML='【'+translation1+'】';
									this.parentNode.firstChild.childNodes[1].innerHTML=info1;
									this.style['background-image']='linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4))';
									this.style.backgroundColor="rgb(0,255,0)";
								}else{
									for(var j in lib.characterPack){
										for(var a in lib.characterPack[j]){
											var character=lib.characterPack[j][a];
											if(lib.kzol_changeSkillButton[skill].filter(a)){
												var skills=character[3];
												for(var b=0;b<skills.length;b++){
													if(skills[b]==lib.kzol_changeSkillButton[skill].to) lib.characterPack[j][a][3][b]=skill;
												};
											};
										};
									};
									this.parentNode.firstChild.childNodes[0].innerHTML='【'+translation+'】';
									this.parentNode.firstChild.childNodes[1].innerHTML=info;
									this.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
									this.style.backgroundColor="";
								};
								game.say1('切换成功');
							};
							button.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
								this.style.transform='scale(0.95)';
							});
							button.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
								this.style.transform='';
							});
							button.onmouseout=function(){
								this.style.transform='';
							};
						};
					};
				};
			};
		};
	};
}