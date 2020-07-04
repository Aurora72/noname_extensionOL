window.func=function(lib,game,ui,get,ai,_status){
	lib.arenaReady.push(function(){
		if(lib.config.mode=='chess'&&lib.config.mode_config.chess!=undefined&&lib.config.mode_config.chess.chess_mode=='leader'){
			/*game.kzol_chess_gainCharacter1=function(name){
				//game.data.character.push('lnyhzr咯哩咯哩');
				//game.saveData();
				var reg=/[\u4e00-\u9fa5]/g;
				var buttons=document.querySelectorAll("div[class='buttons']")[1];
				var divs=buttons.childNodes;
				var names=[];
				for(var j=0;j<divs.length;j++){
					var str=divs[j].firstChild.innerHTML;
					str=str.match(reg);
					var str1='';
					for(var k=0;k<str.length;k++){
						str1+=str[k];
					};
					console.log(str1);
				};
				
			};*/
			ui.kzol_wjhc=ui.create.system('武将合成',function(){
				if(_status.kzol_onOpen_wjhc==true) return;
				_status.kzol_onOpen_wjhc=true;
				ui.control.hide();
				var dialog1={};
				var str2='<b><p align=center><span style=\"font-size:25px;font-family:xinwei\"><br>选<br>择<br>武<br>将</span></b>';
				var str3='<b><p align=center><span style=\"font-size:25px;font-family:xinwei\"><br>&ensp;<br>&ensp;<br>&ensp;<br>&ensp;</span></b>';
				var str4='<b><p align=center><span style=\"font-size:25px;font-family:xinwei\"><br>&ensp;<br>结<br>果<br>&ensp;</span></b>';
				var background=ui.create.dialog('hidden');
				//background.classList.add('popped');
				//background.classList.add('static');
				background.style.height='calc(100%)';
				background.style.width='calc(100%)';
				background.style.left='0px';
				background.style.top='0px';
				ui.window.appendChild(background);
				dialog1.background=background;
				var b=ui.create.dialog('hidden');
				b.style.height='calc(85%)';
				b.style.width='590px';
				b.style.left='calc(50% - 295px)';
				b.style.top='calc(10%)';
				if(lib.device) b.style.top='calc(10%)';
				b.classList.add('popped');
				b.classList.add('static');
				b.setBackgroundImage('extension/扩展ol/Background3.jpg');
				b.style.backgroundSize="100% 100%";
				ui.window.appendChild(b);
				dialog1.b=b;
				var t=ui.create.dialog('hidden','<span style="color:#FFFFFF;font-size:23px;font-weight:600;font-family:xinwei;">武将合成</span>');
				t.style.height='55px';
				t.style.width='150px';
				t.style.left='calc(50% - 75px)';
				t.style.top='calc(10% - 37px)';
				if(lib.device) t.style.top='calc(10% - 37px)';
				t.classList.add('popped');
				t.classList.add('static');
				t.setBackgroundImage('extension/扩展ol/Background2.jpg');
				t.style.backgroundSize="cover";
				ui.window.appendChild(t);
				dialog1.t=t;
				var hc={};
				var func2=function(pos){
					var dialog2={};
					var func3=function(){
						for(var i in dialog2){
							dialog2[i].delete();
							delete dialog2[i];
						};
					};
					var background1=ui.create.dialog('hidden');
					background1.style.height='calc(100%)';
					background1.style.width='calc(100%)';
					background1.style.left='0px';
					background1.style.top='0px';
					ui.window.appendChild(background1);
					dialog2.background1=background1;
					var b1=ui.create.dialog('hidden');
					b1.style.height='calc(85%)';
					b1.style.width='590px';
					b1.style.left='calc(50% - 295px)';
					b1.style.top='calc(10%)';
					if(lib.device) b1.style.top='calc(10%)';
					b1.classList.add('popped');
					b1.classList.add('static');
					b1.setBackgroundImage('extension/扩展ol/Background3.jpg');
					b1.style.backgroundSize="100% 100%";
					ui.window.appendChild(b1);
					dialog2.b1=b1;
					var data_characters=game.data.character;
					for(var i=0;i<data_characters.length;i++){
						var item=data_characters[i];
						var node=ui.create.div('.button.character',function(){
							var bool=true;
							for(var j in hc){
								if(hc[j].link==this.link) bool=false;
							};
							if(bool==true){
								pos.link=this.link;
								pos.innerHTML=str3;
								pos.setBackground(this.link,'character');
								character4.innerHTML=str4;
								character4.style.background='';
								setTimeout(function(){func3()},100);
							}else{
								game.say1('该武将已处于合成列表中');
							};
						});
						node.link=item;
						node.setBackground(item,'character');
						node.node={
							name:ui.create.div('.name',node),
							hp:ui.create.div('.hp',node),
							intro:ui.create.div('.intro',node),
							group:ui.create.div('.identity',node)
						};
						var infoitem=lib.character[item];
						if(!infoitem){
							for(var itemx in lib.characterPack){
								if(lib.characterPack[itemx][item]){
									infoitem=lib.characterPack[itemx][item];break;
								};
							};
						};
						node.node.name.innerHTML=get.slimName(item);
						if(lib.config.buttoncharacter_style=='default'||lib.config.buttoncharacter_style=='simple'){
							if(lib.config.buttoncharacter_style=='simple') node.node.group.style.display='none';
							node.node.name.dataset.nature=get.groupnature(infoitem[1]);
							node.node.group.dataset.nature=get.groupnature(infoitem[1],'raw');
							node.classList.add('newstyle');
							ui.create.div(node.node.hp);
							var textnode=ui.create.div('.text',get.numStr(infoitem[2]),node.node.hp);
							if(infoitem[2]==0){
								node.node.hp.hide();
							}else if(get.infoHp(infoitem[2])<=3){
								node.node.hp.dataset.condition='mid';
							}else{
								node.node.hp.dataset.condition='high';
							};
						}else{
							if(typeof infoitem[2]=='string'||infoitem[2]>14){
								if(typeof infoitem[2]=='string') node.node.hp.innerHTML=infoitem[2];
								else node.node.hp.innerHTML=get.numStr(infoitem[2]);
								node.node.hp.classList.add('text');
							}else{
								for(var j=0;j<infoitem[2];j++){
									ui.create.div('',node.node.hp);
								};
							};
						};
						if(node.node.hp.childNodes.length==0) node.node.name.style.top='8px';
						if(node.node.name.querySelectorAll('br').length>=4){
							node.node.name.classList.add('long');
							if(lib.config.buttoncharacter_style=='old'){
								node.addEventListener('mouseenter',ui.click.buttonnameenter);
								node.addEventListener('mouseleave',ui.click.buttonnameleave);
							};
						};
						node.node.intro.innerHTML=lib.config.intro;
						if(infoitem[1]){
							node.node.group.innerHTML='<div>'+get.translation(infoitem[1])+'</div>';
							node.node.group.style.backgroundColor=get.translation(infoitem[1]+'Color');
						}else{
							node.node.group.style.display='none';
						};
						var rarity=game.getRarity(node.link);
						if(rarity!='common'){
							var intro=node.node.intro;
							intro.classList.add('showintro');
							intro.style.fontFamily='huangcao';
							intro.style.fontSize='20px';
							intro.style.top='67px';
							intro.style.left='2px';
							switch(rarity){
								case 'rare':intro.dataset.nature='waterm';break;
								case 'epic':intro.dataset.nature='thunderm';break;
								case 'legend':intro.dataset.nature='metalm';break;
							};
							intro.innerHTML=get.translation(rarity);
						};
						node.style.top='13px';
						b1.add(node);
					};
					var t1=ui.create.dialog('hidden','<span style="color:#FFFFFF;font-size:23px;font-weight:600;font-family:xinwei">选择武将</span>');
					t1.style.height='55px';
					t1.style.width='150px';
					t1.style.left='calc(50% - 75px)';
					t1.style.top='calc(10% - 37px)';
					if(lib.device) t1.style.top='calc(10% - 37px)';
					t1.classList.add('popped');
					t1.classList.add('static');
					t1.setBackgroundImage('extension/扩展ol/Background2.jpg');
					t1.style.backgroundSize="cover";
					ui.window.appendChild(t1);
					dialog2.t1=t1;
					var div1=ui.create.div();
					div1.style.height='1000px';
					div1.style.width='1000px';
					div1.style.left='-10px';
					div1.style.top='-10px';
					setTimeout(function(){
						div1.onclick=function(){
							func3();
						};
					},750);
					background1.add(div1);
				};
				hc.character1=ui.create.div('.player');
				hc.character1.onclick=function(){func2(hc.character1)};
				hc.character1.style.left='0px';
				hc.character1.style.top='13px';
				b.add(hc.character1);
				hc.character2=ui.create.div('.player');
				hc.character2.onclick=function(){func2(hc.character2)};
				hc.character2.style.left='0px';
				hc.character2.style.top='13px';
				b.add(hc.character2);
				hc.character3=ui.create.div('.player');
				hc.character3.onclick=function(){func2(hc.character3)};
				hc.character3.style.left='0px';
				hc.character3.style.top='13px';
				b.add(hc.character3);
				for(var i in hc){
					hc[i].innerHTML=str2;
				};
				var character4=ui.create.div('.player');
				character4.style.left='0px';
				character4.style.top='13px';
				character4.innerHTML=str4;
				var button=ui.create.div('.menubutton.large','<span style="cursor:pointer;color:#FFFFFF;">合成</span>',function(){
					if(game.data.character.length<6){
						game.say1('合成后至少保留三名武将');
						return ;
					};
					var bool=true;
					for(var i in hc){
						if(hc[i].link==undefined)  bool=false;
					};
					if(bool==true){
						var coverDialog=ui.create.dialog('hidden');
						coverDialog.style.height='calc(100%)';
						coverDialog.style.width='calc(100%)';
						coverDialog.style.left='0px';
						coverDialog.style.top='0px';
						coverDialog.style['z-index']=999999;
						ui.window.appendChild(coverDialog);
						dialog1.coverDialog=coverDialog;
						for(var i in hc){
							game._linexy([
								b.offsetLeft+hc[i].offsetLeft+47.5,
								b.offsetTop+hc[i].offsetTop+50,
								b.offsetLeft+character4.offsetLeft+47.5,
								b.offsetTop+character4.offsetTop+50
							]);
						};
						setTimeout(function(){
							_status.kzol_hashc=true;
							/*var characters=[];
							for(var i in lib.rank.rarity){
								for(var j=0;j<lib.rank.rarity[i].length;j++){
									characters.push(lib.rank.rarity[i][j]);
								};
							};
							var gain_character=characters.randomGet();*/
							var hc_character=[];
							for(var i in hc){
								hc_character.push(hc[i].link);
							};
							var hc_character_rarity=[];
							for(var i in hc){
								hc_character_rarity.push(game.getRarity(hc[i].link));
							};
							var value=0;
							for(var i=0;i<hc_character_rarity.length;i++){
								if(hc_character_rarity[i]=='legend'){
									value+=27;
								}else if(hc_character_rarity[i]=='epic'){
									value+=9;
								}else if(hc_character_rarity[i]=='rare'){
									value+=3;
								}else{
									value+=1;
								};
							};
							if(Math.random()<=value/81){
								var gain_character=lib.rank.rarity.legend.randomGet();
							}else if(Math.random()<=value/27){
								var gain_character=lib.rank.rarity.epic.randomGet();
							}else if(Math.random()<=value/9){
								var gain_character=lib.rank.rarity.rare.randomGet();
							}else{
								var gain_character=lib.rank.rarity.common.randomGet();
							};
							for(var i in hc){
								game.data.character.remove(hc[i].link);
								hc[i].hide();
							};
							game.data.character.push(gain_character);
							game.saveData();
							setTimeout(function(){
								character4.hide();
							},500)
							setTimeout(function(){
								for(var i in hc){
									hc[i].innerHTML=str2;
									hc[i].style.background='';
									delete hc[i].link;
								};
							},750);
							setTimeout(function(){
								character4.innerHTML=str3;
								character4.setBackground(gain_character,'character');
							},1000);
							setTimeout(function(){
								for(var i in hc){
									hc[i].show();
								};
								dialog1.coverDialog.delete();
								delete dialog1.coverDialog;
							},1250);
							setTimeout(function(){
								character4.show();
								game.say1('合成了武将：'+get.translation(gain_character)+'（'+get.translation(game.getRarity(gain_character))+'）');
							},1500);
						},1050);
					}else{
						game.say1('请先选择用于合成的三名武将');
					};
				});
				button.style.height='30px';
				button.style.width='calc(90%)';
				button.style.left='0px';
				button.style.top='13px';
				button.style.borderRadius='8px';
				button.style.backgroundColor="#E00000";
				b.add(button);
				b.add(character4);
				var show=ui.create.div('');
				var interval=setInterval(function(){
					var list=[];
					for(var i in hc){
						if(hc[i].link!=undefined) list.push(hc[i].link);
					};
					if(list.length<3){
						show.innerHTML='<span style="color:#FFFFFF;">普通:0% 稀有:0% 史诗:0% 传说:0%</span>';
					}else{
						var hc_character_rarity=[];
						for(var i in hc){
							hc_character_rarity.push(game.getRarity(hc[i].link));
						};
						var value=0;
						for(var i=0;i<hc_character_rarity.length;i++){
							if(hc_character_rarity[i]=='legend'){
								value+=27;
							}else if(hc_character_rarity[i]=='epic'){
								value+=9;
							}else if(hc_character_rarity[i]=='rare'){
								value+=3;
							}else{
								value+=1;
							};
						};
						var num_l=Math.floor(value/81*100);
						if(num_l>100) num_l=100;
						var num_e=Math.floor(value/27*100);
						if(num_e>100) num_e=100;
						if(num_l==100) num_e=0;
						var num_r=Math.floor(value/9*100);
						if(num_r>100) num_r=100;
						if(num_e==100||num_l==100) num_r=0;
						var num_c=Math.floor(value/3*100);
						if(num_c>100) num_c=100;
						if(num_r==100||num_e==100||num_l==100) num_c=0;
						show.innerHTML='<span style="color:#FFFFFF;">普通:'+(num_c)+'% 稀有:'+(num_r)+'% 史诗:'+(num_e)+'% 传说:'+(num_l)+'%</span>';
					};
				},100);
				show.style.height='20px';
				show.style['font-size']='20px';
				show.style['line-height']='21px';
				show.style['font-family']="'STXinwei','xinwei'";
				show.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
				show.style.width='calc(90%)';
				show.style.left='0px';
				show.style.top='33px';
				show.style.borderRadius='8px';
				b.add(show);
				var div=ui.create.div();
				div.style.height='1000px';
				div.style.width='1000px';
				div.style.left='-10px';
				div.style.top='-10px';
				var func1=function(){
					if(_status.kzol_hashc==true) game.say1('合成结果刷新游戏后才能显示');
					for(var i in dialog1){
						dialog1[i].delete();
						delete dialog1[i];
					};
					delete game.closewjhc;
					delete _status.kzol_onOpen_wjhc;
					delete _status.kzol_hashc;
					clearInterval(interval);
					ui.control.show();
				};
				setTimeout(function(){
					div.onclick=function(){
						func1();
					};
				},750);
				background.add(div);
				game.closewjhc=func1;
			},true);
		};
	});
}