window.func=function(lib,game,ui,get,ai,_status){
game.saveConfig('wujinmoshiYZR',undefined);
game.wujinmoshiRE=function(){
game.saveConfig('wujinmoshiP',undefined);
game.saveConfig('wujinmoshiDXB',undefined);
game.saveConfig('wujinmoshiDS',undefined);
game.saveConfig('wujinmoshiDamage',undefined);
game.saveConfig('wujinmoshiMaxHp',undefined);
game.saveConfig('wujinmoshiMaxHandCard',undefined);
game.saveConfig('wujinmoshiDraw',undefined);
game.saveConfig('wujinmoshiRecover',undefined);
game.saveConfig('wujinmoshiESkill',undefined);
game.saveConfig('wujinmoshiDamageI',undefined);
game.saveConfig('wujinmoshiMaxHpI',undefined);
game.saveConfig('wujinmoshiMaxHandCardI',undefined);
game.saveConfig('wujinmoshiDrawI',undefined);
game.saveConfig('wujinmoshiRecoverI',undefined);
game.saveConfig('wujinmoshiESkillE',undefined);
game.reload();
};
if(lib.config.wujinmoshiDXB==undefined) game.saveConfig('wujinmoshiDXB',1);
if(lib.config.wujinmoshiDS==undefined) game.saveConfig('wujinmoshiDS',1);
if(lib.config.wujinmoshiDamage==undefined) game.saveConfig('wujinmoshiDamage',0);
if(lib.config.wujinmoshiMaxHp==undefined) game.saveConfig('wujinmoshiMaxHp',0);
if(lib.config.wujinmoshiMaxHandCard==undefined) game.saveConfig('wujinmoshiMaxHandCard',0);
if(lib.config.wujinmoshiDraw==undefined) game.saveConfig('wujinmoshiDraw',0);
if(lib.config.wujinmoshiRecover==undefined) game.saveConfig('wujinmoshiRecover',0);
if(lib.config.wujinmoshiDamageI==undefined) game.saveConfig('wujinmoshiDamageI',0);
if(lib.config.wujinmoshiMaxHpI==undefined) game.saveConfig('wujinmoshiMaxHpI',0);
if(lib.config.wujinmoshiMaxHandCardI==undefined) game.saveConfig('wujinmoshiMaxHandCardI',0);
if(lib.config.wujinmoshiDrawI==undefined) game.saveConfig('wujinmoshiDrawI',0);
if(lib.config.wujinmoshiRecoverI==undefined) game.saveConfig('wujinmoshiRecoverI',0);
if(lib.config.wujinmoshiMAXLC==undefined) game.saveConfig('wujinmoshiMAXLC',0);
if(lib.config.wujinmoshiMAXLCWJ==undefined) game.saveConfig('wujinmoshiMAXLCWJ','');
if(lib.config.wujinmoshiMAXLC<lib.config.wujinmoshiDXB-1){
game.saveConfig('wujinmoshiMAXLC',lib.config.wujinmoshiDXB-1);
game.saveConfig('wujinmoshiMAXLCWJ','（'+lib.translate[lib.config.wujinmoshiP]+'）');
};
if(lib.config.wujinmoshiHJK==undefined) game.saveConfig('wujinmoshiHJK',0);
if(lib.config.wujinmoshiXRK==undefined) game.saveConfig('wujinmoshiXRK',0);
var wujinmoshiESkillESkills=[];
for(i in lib.character){
for(var j=0;j<lib.character[i][3].length;j++){
wujinmoshiESkillESkills.push(lib.character[i][3][j]);
};
};
if(lib.config.wujinmoshiESkillE==undefined) game.saveConfig('wujinmoshiESkillE',wujinmoshiESkillESkills.randomGet());
			game.WJchangeCharacter=function(){
				var WJchangeCharacter=ui.create.dialog('hidden');
				WJchangeCharacter.style.height='calc(100%)';
				WJchangeCharacter.style.width='calc(100%)';
				WJchangeCharacter.style.left='0px';
				WJchangeCharacter.style.top='0px';
				WJchangeCharacter.classList.add('popped');
				WJchangeCharacter.classList.add('static');
						
						
				var WJchangeCharacterCC=ui.create.div();
              	WJchangeCharacterCC.style.left='50px';
                WJchangeCharacterCC.style.top='30px';
				var character='';
				for(i in lib.character){
					if(!lib.character[i][4].contains('forbidai')) character+='<option value='+i+'>'+lib.translate[i]+'</option>';
				};
				WJchangeCharacterCC.innerHTML='请选择武将<br><select id="chooseCharacter" size="18" style="width:75px">'+character+'</select>';
						
						
				var WJchangeCharacterYES=ui.create.div('.menubutton.large','<span style="cursor:pointer;">确认</span>',function(){
					var country=document.getElementById('chooseCharacter');
					var str=country.options[country.selectedIndex].value;
					if(confirm('是否选择'+lib.translate[str]+'？')){
						WJchangeCharacter.delete();
						game.saveConfig('wujinmoshiP',str);
					};
				});
				WJchangeCharacterYES.style.left='-40.55px';
				WJchangeCharacterYES.style.top='70px';

						
				WJchangeCharacter.add(WJchangeCharacterCC);
				WJchangeCharacter.add(WJchangeCharacterYES);
				ui.window.appendChild(WJchangeCharacter);
			};
if(lib.brawl){
lib.brawl.wujinmoshi={
            name:'无尽模式',
            mode:'identity',
            intro:'曾通过的最高轮次：'+get.cnNumber(lib.config.wujinmoshiMAXLC)+'轮'+lib.config.wujinmoshiMAXLCWJ,
			showcase:function(init){
				if(lib.config.wujinmoshiYZR!=true){
					this.style.width='575px';
					var wujinmoshichooseCharacter1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">选择<br>武将</span>',function(){
						var wujinmoshichooseCharacter=ui.create.dialog('hidden');
						wujinmoshichooseCharacter.style.height='calc(100%)';
						wujinmoshichooseCharacter.style.width='calc(100%)';
						wujinmoshichooseCharacter.style.left='0px';
						wujinmoshichooseCharacter.style.top='0px';
						wujinmoshichooseCharacter.classList.add('popped');
						wujinmoshichooseCharacter.classList.add('static');
						
						
						var wujinmoshiCharacter=ui.create.div();
                		wujinmoshiCharacter.style.left='50px';
                		wujinmoshiCharacter.style.top='30px';
						var character='';
						for(i in lib.character){
							if(!lib.character[i][4].contains('forbidai')) character+='<option value='+i+'>'+lib.translate[i]+'</option>';
						};
						wujinmoshiCharacter.innerHTML='请选择武将<br><select id="chooseCharacter" size="18" style="width:75px">'+character+'</select>';
						
						
						var wujinmoshiYES=ui.create.div('.menubutton.large','<span style="cursor:pointer;">确认</span>',function(){
							var country=document.getElementById('chooseCharacter');
							var str=country.options[country.selectedIndex].value;
							if(confirm('是否选择'+lib.translate[str]+'？')){
								wujinmoshichooseCharacter.delete();
								wujinmoshichooseCharacter1.hide();
								wujinmoshiDXB.show();
								wujinmoshiDS.show();
								wujinmoshiharacter.show();
								wujinmoshiDamage.show();
								wujinmoshiMaxHp.show();
								wujinmoshiMaxHandCard.show();
								wujinmoshiDraw.show();
								wujinmoshiRecover.show();
								wujinmoshiESkill.show();
								wujinmoshiDSDJC.show();
								wujinmoshiDamageE.show();
								wujinmoshiMaxHpE.show();
								wujinmoshiMaxHandCardE.show();
								wujinmoshiDrawE.show();
								wujinmoshiRecoverE.show();
								wujinmoshiESkillE.show();
								game.saveConfig('wujinmoshiP',str);
							};
						});
						wujinmoshiYES.style.left='-40.55px';
						wujinmoshiYES.style.top='70px';

						
						wujinmoshichooseCharacter.add(wujinmoshiCharacter);
						wujinmoshichooseCharacter.add(wujinmoshiYES);
						ui.window.appendChild(wujinmoshichooseCharacter);
					});
					wujinmoshichooseCharacter1.style.left='0px';
					wujinmoshichooseCharacter1.style.top='0px';
					this.appendChild(wujinmoshichooseCharacter1);
					if(lib.config.wujinmoshiP!=undefined) wujinmoshichooseCharacter1.hide();
					
					
					var wujinmoshiDXB=ui.create.div();
					wujinmoshiDXB.style.left='0px';
					wujinmoshiDXB.style.top='0px';
					this.appendChild(wujinmoshiDXB);
					setInterval(function(){
						if(lib.config.wujinmoshiDXB==undefined){
							wujinmoshiDXB.innerHTML='未开始';
						}else{
							wujinmoshiDXB.innerHTML='第'+get.cnNumber(lib.config.wujinmoshiDXB)+'轮';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiDXB.hide();
					
					
					var wujinmoshiDS=ui.create.div();
					wujinmoshiDS.style.left='120px';
					wujinmoshiDS.style.top='0px';
					this.appendChild(wujinmoshiDS);
					setInterval(function(){
						if(lib.config.wujinmoshiDS==undefined){
							wujinmoshiDS.innerHTML='拥有点数：0点';
						}else{
							wujinmoshiDS.innerHTML='拥有点数：'+lib.config.wujinmoshiDS+'点';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiDS.hide();

					
					var wujinmoshiharacter=ui.create.div();
					wujinmoshiharacter.style.left='0px';
					wujinmoshiharacter.style.top='20px';
					this.appendChild(wujinmoshiharacter);
					setInterval(function(){
						if(lib.config.wujinmoshiP==undefined){
							wujinmoshiharacter.innerHTML='拥有武将：未选择';
						}else{
							wujinmoshiharacter.innerHTML='拥有武将：'+lib.translate[lib.config.wujinmoshiP];
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiharacter.hide();

					
					var wujinmoshiDamage=ui.create.div();
					wujinmoshiDamage.style.left='0px';
					wujinmoshiDamage.style.top='40px';
					this.appendChild(wujinmoshiDamage);
					setInterval(function(){
						if(lib.config.wujinmoshiDamage==undefined){
							wujinmoshiDamage.innerHTML='攻击力加成：0';
						}else{
							wujinmoshiDamage.innerHTML='攻击力加成：'+lib.config.wujinmoshiDamage;
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiDamage.hide();

					
					var wujinmoshiDamageAdd=ui.create.div(function(){
						if(confirm('消耗'+(5+Math.floor(lib.config.wujinmoshiDamage/3))+'点点数来增加一点攻击力?')){
							game.saveConfig('wujinmoshiDamage',lib.config.wujinmoshiDamage+1);
							game.saveConfig('wujinmoshiDS',lib.config.wujinmoshiDS-(5+Math.floor(lib.config.wujinmoshiDamage/3)));
						};
					});
					wujinmoshiDamageAdd.style.left='150px';
					wujinmoshiDamageAdd.style.top='40px';
					wujinmoshiDamageAdd.innerHTML='<span style="cursor:pointer">+</span>';
					this.appendChild(wujinmoshiDamageAdd);
					wujinmoshiDamageAdd.hide();
					setInterval(function(){
						if(lib.config.wujinmoshiDS>=(5+Math.floor(lib.config.wujinmoshiDamage/3))){
							wujinmoshiDamageAdd.show();
						}else{
							wujinmoshiDamageAdd.hide();
						};
					},100);

					
					var wujinmoshiMaxHp=ui.create.div();
					wujinmoshiMaxHp.style.left='0px';
					wujinmoshiMaxHp.style.top='60px';
					this.appendChild(wujinmoshiMaxHp);
					setInterval(function(){
						if(lib.config.wujinmoshiMaxHp==undefined){
							wujinmoshiMaxHp.innerHTML='体力上限加成：0';
						}else{
							wujinmoshiMaxHp.innerHTML='体力上限加成：'+lib.config.wujinmoshiMaxHp;
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiMaxHp.hide();

					
					var wujinmoshiMaxHpAdd=ui.create.div(function(){
						if(confirm('消耗3点点数来增加一点体力上限?')){
							game.saveConfig('wujinmoshiMaxHp',lib.config.wujinmoshiMaxHp+1);
							game.saveConfig('wujinmoshiDS',lib.config.wujinmoshiDS-3);
						};
					});
					wujinmoshiMaxHpAdd.style.left='150px';
					wujinmoshiMaxHpAdd.style.top='60px';
					wujinmoshiMaxHpAdd.innerHTML='<span style="cursor:pointer">+</span>';
					this.appendChild(wujinmoshiMaxHpAdd);
					wujinmoshiMaxHpAdd.hide();
					setInterval(function(){
						if(lib.config.wujinmoshiDS>=3){
							wujinmoshiMaxHpAdd.show();
						}else{
							wujinmoshiMaxHpAdd.hide();
						};
					},100);

					
					var wujinmoshiMaxHandCard=ui.create.div();
					wujinmoshiMaxHandCard.style.left='0px';
					wujinmoshiMaxHandCard.style.top='80px';
					this.appendChild(wujinmoshiMaxHandCard);
					setInterval(function(){
						if(lib.config.wujinmoshiMaxHandCard==undefined){
							wujinmoshiMaxHandCard.innerHTML='手牌上限加成：0';
						}else{
							wujinmoshiMaxHandCard.innerHTML='手牌上限加成：'+lib.config.wujinmoshiMaxHandCard;
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiMaxHandCard.hide();

					
					var wujinmoshiMaxHandCardAdd=ui.create.div(function(){
						if(confirm('消耗1点点数来增加一点手牌上限?')){
							game.saveConfig('wujinmoshiMaxHandCard',lib.config.wujinmoshiMaxHandCard+1);
							game.saveConfig('wujinmoshiDS',lib.config.wujinmoshiDS-1);
						};
					});
					wujinmoshiMaxHandCardAdd.style.left='150px';
					wujinmoshiMaxHandCardAdd.style.top='80px';
					wujinmoshiMaxHandCardAdd.innerHTML='<span style="cursor:pointer">+</span>';
					this.appendChild(wujinmoshiMaxHandCardAdd);
					wujinmoshiMaxHandCardAdd.hide();
					setInterval(function(){
						if(lib.config.wujinmoshiDS>=1&&lib.config.wujinmoshiP!=undefined){
							wujinmoshiMaxHandCardAdd.show();
						}else{
							wujinmoshiMaxHandCardAdd.hide();
						};
					},100);

					
					var wujinmoshiDraw=ui.create.div();
					wujinmoshiDraw.style.left='0px';
					wujinmoshiDraw.style.top='100px';
					this.appendChild(wujinmoshiDraw);
					setInterval(function(){
						if(lib.config.wujinmoshiDraw==undefined){
							wujinmoshiDraw.innerHTML='摸牌数加成：0';
						}else{
							wujinmoshiDraw.innerHTML='摸牌数加成：'+lib.config.wujinmoshiDraw;
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiDraw.hide();

					
					var wujinmoshiDrawAdd=ui.create.div(function(){
						if(confirm('消耗5点点数来增加一点摸牌数?')){
							game.saveConfig('wujinmoshiDraw',lib.config.wujinmoshiDraw+1);
							game.saveConfig('wujinmoshiDS',lib.config.wujinmoshiDS-5);
						};
					});
					wujinmoshiDrawAdd.style.left='150px';
					wujinmoshiDrawAdd.style.top='100px';
					wujinmoshiDrawAdd.innerHTML='<span style="cursor:pointer">+</span>';
					this.appendChild(wujinmoshiDrawAdd);
					wujinmoshiDrawAdd.hide();
					setInterval(function(){
						if(lib.config.wujinmoshiDS>=5&&lib.config.wujinmoshiDraw<3){
							wujinmoshiDrawAdd.show();
						}else{
							wujinmoshiDrawAdd.hide();
						};
					},100);

					
					var wujinmoshiRecover=ui.create.div();
					wujinmoshiRecover.style.left='0px';
					wujinmoshiRecover.style.top='120px';
					this.appendChild(wujinmoshiRecover);
					setInterval(function(){
						if(lib.config.wujinmoshiRecover==undefined){
							wujinmoshiRecover.innerHTML='恢复量加成：0';
						}else{
							wujinmoshiRecover.innerHTML='恢复量加成：'+lib.config.wujinmoshiRecover;
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiRecover.hide();

					
					var wujinmoshiRecoverAdd=ui.create.div(function(){
						if(confirm('消耗3点点数来增加一点恢复量?')){
							game.saveConfig('wujinmoshiRecover',lib.config.wujinmoshiRecover+1);
							game.saveConfig('wujinmoshiDS',lib.config.wujinmoshiDS-3);
						};
					});
					wujinmoshiRecoverAdd.style.left='150px';
					wujinmoshiRecoverAdd.style.top='120px';
					wujinmoshiRecoverAdd.innerHTML='<span style="cursor:pointer">+</span>';
					this.appendChild(wujinmoshiRecoverAdd);
					wujinmoshiRecoverAdd.hide();
					setInterval(function(){
						if(lib.config.wujinmoshiDS>=3){
							wujinmoshiRecoverAdd.show();
						}else{
							wujinmoshiRecoverAdd.hide();
						};
					},100);

					
					var wujinmoshiESkill=ui.create.div();
					wujinmoshiESkill.style.left='0px';
					wujinmoshiESkill.style.top='140px';
					this.appendChild(wujinmoshiESkill);
					setInterval(function(){
						if(lib.config.wujinmoshiESkill==undefined){
							wujinmoshiESkill.innerHTML='额外技能：未获得（只能拥有一个）';
						}else{
							wujinmoshiESkill.innerHTML='额外技能：'+lib.translate[lib.config.wujinmoshiESkill]+'（只能拥有一个）';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiESkill.hide();

					
					var wujinmoshiDSDJC=ui.create.div();
					wujinmoshiDSDJC.style.left='0px';
					wujinmoshiDSDJC.style.top='180px';
					wujinmoshiDSDJC.innerHTML='对手的加成：'
					this.appendChild(wujinmoshiDSDJC);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiDSDJC.hide();

					
					var wujinmoshiDamageE=ui.create.div();
					wujinmoshiDamageE.style.left='0px';
					wujinmoshiDamageE.style.top='200px';
					this.appendChild(wujinmoshiDamageE);
					setInterval(function(){
						if(lib.config.wujinmoshiDXB!=undefined){
							wujinmoshiDamageE.innerHTML='攻击力加成：'+(Math.floor(lib.config.wujinmoshiDXB/15)-lib.config.wujinmoshiDamageI)+'（每15轮+1）';
						}else{
							wujinmoshiDamageE.innerHTML='攻击力加成：0（每15轮+1）';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiDamageE.hide();

					
					var wujinmoshiMaxHpE=ui.create.div();
					wujinmoshiMaxHpE.style.left='0px';
					wujinmoshiMaxHpE.style.top='220px';
					this.appendChild(wujinmoshiMaxHpE);
					setInterval(function(){
						if(lib.config.wujinmoshiDXB!=undefined){
							wujinmoshiMaxHpE.innerHTML='体力上限加成：'+(Math.floor(lib.config.wujinmoshiDXB/8)-lib.config.wujinmoshiMaxHpI)+'（每8轮+1）';
						}else{
							wujinmoshiMaxHpE.innerHTML='体力上限加成：0（每8轮+1）';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiMaxHpE.hide();

					
					var wujinmoshiMaxHandCardE=ui.create.div();
					wujinmoshiMaxHandCardE.style.left='0px';
					wujinmoshiMaxHandCardE.style.top='240px';
					this.appendChild(wujinmoshiMaxHandCardE);
					setInterval(function(){
						if(lib.config.wujinmoshiDXB!=undefined){
							wujinmoshiMaxHandCardE.innerHTML='手牌上限加成：'+(Math.floor(lib.config.wujinmoshiDXB/5)-lib.config.wujinmoshiMaxHandCardI)+'（每5轮+1）';
						}else{
							wujinmoshiMaxHandCardE.innerHTML='手牌上限加成：0（每5轮+1）';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiMaxHandCardE.hide();

					
					var wujinmoshiDrawE=ui.create.div();
					wujinmoshiDrawE.style.left='0px';
					wujinmoshiDrawE.style.top='260px';
					this.appendChild(wujinmoshiDrawE);
					setInterval(function(){
						if(lib.config.wujinmoshiDXB!=undefined){
							if(Math.floor(lib.config.wujinmoshiDXB/15)-lib.config.wujinmoshiDrawI<3){
								wujinmoshiDrawE.innerHTML='摸牌数加成：'+(Math.floor(lib.config.wujinmoshiDXB/15)-lib.config.wujinmoshiDrawI)+'（每15轮+1，上限+3）';
							}else{
								wujinmoshiDrawE.innerHTML='摸牌数加成：3（每15轮+1，上限+3）';
							};
						}else{
							wujinmoshiDrawE.innerHTML='摸牌数加成：0（每15轮+1，上限+5）';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiDrawE.hide();

					
					var wujinmoshiRecoverE=ui.create.div();
					wujinmoshiRecoverE.style.left='0px';
					wujinmoshiRecoverE.style.top='280px';
					this.appendChild(wujinmoshiRecoverE);
					setInterval(function(){
						if(lib.config.wujinmoshiDXB!=undefined){
							wujinmoshiRecoverE.innerHTML='回复量加成：'+(Math.floor(lib.config.wujinmoshiDXB/10)-lib.config.wujinmoshiRecoverI)+'（每10轮+1）';
						}else{
							wujinmoshiRecoverE.innerHTML='回复量加成：0（每10轮+1）';
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiRecoverE.hide();

					
					var wujinmoshiESkillE=ui.create.div();
					wujinmoshiESkillE.style.left='0px';
					wujinmoshiESkillE.style.top='300px';
					this.appendChild(wujinmoshiESkillE);
					setInterval(function(){
						if(lib.config.wujinmoshiESkillE==undefined){
							wujinmoshiESkillE.innerHTML='额外技能：未获得';
						}else{
							wujinmoshiESkillE.innerHTML='额外技能：'+lib.translate[lib.config.wujinmoshiESkillE];
						};
					},100);
					if(lib.config.wujinmoshiP==undefined) wujinmoshiESkillE.hide();
					

					var wujinmoshiRE=ui.create.div('.menubutton.large','<span style="cursor:pointer;">重置</span>',function(){
						if(confirm('是否重置?')){
							game.wujinmoshiRE();
						};
					});
					wujinmoshiRE.style.left='500px';
					wujinmoshiRE.style.top='0px';
					this.appendChild(wujinmoshiRE);
					
					
					var wujinmoshiBAGQX1=this;
					var wujinmoshiBAG=ui.create.div('.menubutton.large','<span style="cursor:pointer;">背包</span>',function(){
						wujinmoshiBAG.delete();
						var wujinmoshiBAGQX=ui.create.div('.menubutton.large','<span style="cursor:pointer;">关闭</span>',function(){
							wujinmoshiBAGQX.delete();
							wujinmoshiBAGJM.delete();
							wujinmoshiBAGQX1.appendChild(wujinmoshiBAG);
						});
						wujinmoshiBAGQX.style.left='500px';
						wujinmoshiBAGQX.style.top='50px';
						wujinmoshiBAGQX1.appendChild(wujinmoshiBAGQX);
						wujinmoshiBAGJM=ui.create.dialog('hidden');
						wujinmoshiBAGJM.style.height='calc(50%)';
						wujinmoshiBAGJM.style.width='calc(50%)';
						wujinmoshiBAGJM.style.left='calc(25%)';
						wujinmoshiBAGJM.style.top='calc(25%)';
						wujinmoshiBAGJM.classList.add('popped');
						wujinmoshiBAGJM.classList.add('static');
						
						
						var wujinmoshiHJK=ui.create.div('','<span style="cursor:pointer;">换将卡<br>'+lib.config.wujinmoshiHJK+'张</span>',function(){
							if(lib.config.wujinmoshiHJK>0){
								if(lib.config.wujinmoshiP!=undefined){
									if(confirm('是否使用换将卡?')){
										game.saveConfig('wujinmoshiHJK',lib.config.wujinmoshiHJK-1);
										game.WJchangeCharacter();
										wujinmoshiBAGQX.delete();
										wujinmoshiBAGJM.delete();
										wujinmoshiBAGQX1.appendChild(wujinmoshiBAG);
									};
								}else{
									alert('游戏未开始，无法使用');
								};
							};
						});
						if(lib.config.wujinmoshiHJK>0) wujinmoshiBAGJM.add(wujinmoshiHJK);
						setInterval(function(){
							if(lib.config.wujinmoshiHJK<=0) wujinmoshiHJK.delete();
						},1000);
						
						
						var wujinmoshiXRK=ui.create.div('','<span style="cursor:pointer;">削弱卡<br>'+lib.config.wujinmoshiXRK+'张</span>',function(){
							if(lib.config.wujinmoshiXRK>0){
								if(lib.config.wujinmoshiP!=undefined){
									if(confirm('是否使用削弱卡?')){
										game.saveConfig('wujinmoshiXRK',lib.config.wujinmoshiXRK-1);
										game.saveConfig('wujinmoshiDamageI',lib.config.wujinmoshiDamageI+1);
										game.saveConfig('wujinmoshiMaxHpI',lib.config.wujinmoshiMaxHpI+1);
										game.saveConfig('wujinmoshiMaxHandCardI',lib.config.wujinmoshiMaxHandCardI+1);
										game.saveConfig('wujinmoshiDrawI',lib.config.wujinmoshiDrawI+1);
										game.saveConfig('wujinmoshiRecoverI',lib.config.wujinmoshiRecoverI+1);
										wujinmoshiBAGQX.delete();
										wujinmoshiBAGJM.delete();
										wujinmoshiBAGQX1.appendChild(wujinmoshiBAG);
									};
								}else{
									alert('游戏未开始，无法使用');
								};
							};
						});
						if(lib.config.wujinmoshiXRK>0) wujinmoshiBAGJM.add(wujinmoshiXRK);
						setInterval(function(){
							if(lib.config.wujinmoshiXRK<=0) wujinmoshiXRK.delete();
						},1000);
						
						
						ui.window.appendChild(wujinmoshiBAGJM);
					});
					wujinmoshiBAG.style.left='500px';
					wujinmoshiBAG.style.top='50px';
					this.appendChild(wujinmoshiBAG);
				
				
					var wujinmoshiJS=ui.create.div('.menubutton.large','<span style="cursor:pointer;">规则</span>',function(){
							var wujinmoshiJS1=ui.create.dialog('hidden');
							wujinmoshiJS1.style.height='calc(100%)';
							wujinmoshiJS1.style.width='calc(100%)';
							wujinmoshiJS1.style.left='0px';
							wujinmoshiJS1.style.top='0px';
							wujinmoshiJS1.classList.add('popped');
							wujinmoshiJS1.classList.add('static');
							var wujinmoshiJSQX=ui.create.div('.menubutton.round','×',function(){
								wujinmoshiJS1.delete();
							});
							wujinmoshiJSQX.style.left='50px';
							wujinmoshiJSQX.style.top='50px';
	
							var wujinmoshiJS2=ui.create.div('','');
							wujinmoshiJS2.setBackgroundImage('extension/扩展ol/wujinmoshiJS.png');
							wujinmoshiJS2.style.height='400px';
							wujinmoshiJS2.style.width='600px';
							wujinmoshiJS2.style.left='50px';
							wujinmoshiJS2.style.top='50px';
						
							wujinmoshiJS1.add(wujinmoshiJS2);
							wujinmoshiJS1.add(wujinmoshiJSQX);
							ui.window.appendChild(wujinmoshiJS1);
					});
					wujinmoshiJS.style.left='500px';
					wujinmoshiJS.style.top='100px';
					this.appendChild(wujinmoshiJS);
					
					
					game.saveConfig('wujinmoshiYZR',true);
				};
        	},
            content:{
	            gameStart:function(){
					var characterAi=[];
                    for(i in lib.character){
                        if(!lib.character[i][4].contains('forbidai')&&!lib.character[i][4].contains('boss')&&!lib.character[i][4].contains('hiddenboss')) characterAi.push(i);
                    };
					game.me.next.init(characterAi.randomGet());
					if(lib.config.wujinmoshiMaxHp>0){
						game.me.gainMaxHp(lib.config.wujinmoshiMaxHp);
						game.me.recover(lib.config.wujinmoshiMaxHp);
					};
					if(-(Math.floor(lib.config.wujinmoshiDXB/8)-lib.config.wujinmoshiMaxHpI)<game.me.next.maxHp){
						game.me.next.gainMaxHp(Math.floor(lib.config.wujinmoshiDXB/8)-lib.config.wujinmoshiMaxHpI);
						game.me.next.recover(Math.floor(lib.config.wujinmoshiDXB/8)-lib.config.wujinmoshiMaxHpI);
					}else{
						game.me.next.maxHp=0;
						game.me.next.update();
						game.me.next.die();
					};
					if(lib.config.wujinmoshiESkillE!=undefined) game.me.next.addSkill(lib.config.wujinmoshiESkillE);
					game.me.storage.wujinmoshiRE=lib.character[game.me.next.name][3];
					if(lib.config.wujinmoshiESkill!=undefined) game.me.addSkill(lib.config.wujinmoshiESkill);
					game.addPlayer=function(all){
						alert('增加角色，违反无尽模式规则，重新载入游戏');
						game.reload();
					};
					game.addFellow=function(all){
						alert('增加角色，违反无尽模式规则，重新载入游戏');
						game.reload();
					};
					game.swapPlayer=function(all){};
					game.swapControl=function(all){};
				},
                chooseCharacter:function(){
	                if(lib.config.wujinmoshiP!=undefined) return [lib.config.wujinmoshiP];
					var characterAi=[];
                    for(i in lib.character){
                        if(!lib.character[i][4].contains('forbidai')&&!lib.character[i][4].contains('boss')&&!lib.character[i][4].contains('hiddenboss')) characterAi.push(i);
                    };
					return [characterAi.randomGet()];
                },
                chooseCharacterAi:function(){
                    return ;
                },
			},
            init:function(){
				lib.config.mode_config.identity.free_choose=false;
				lib.config.mode_config.identity.change_choice=false;
				lib.config.mode_config.identity.change_identity=false;
				game.saveConfig('player_number','2','identity');
				lib.skill._wujinmoshiRE={
					trigger:{
						player:'dieBefore'
					},
					forced:true,
					filter:function (event,player){
						return lib.config.wujinmoshiP!=undefined;
					},
					content:function(){
						if(player==game.me){
							alert('进行无尽模式的武将死亡，重置游戏');
							game.wujinmoshiRE();
						}else{
							if(Math.random()<=0.05){
								var DJlist=['wujinmoshiHJK','wujinmoshiXRK'];
								var DJ=DJlist.randomGet();
								game.saveConfig(DJ,lib.config[DJ]+1);
								if(DJ=='wujinmoshiHJK') game.say1('你获得一张换将卡');
								if(DJ=='wujinmoshiXRK') game.say1('你获得一张削弱卡');
							};
							if(Math.random()<=0.05){
								game.saveConfig('wujinmoshiHJK',lib.config.wujinmoshiHJK+1);
								game.say2('你获得一张换将卡');
							};
							if(Math.random()<=0.01){
								game.saveConfig('wujinmoshiXRK',lib.config.wujinmoshiXRK+1);
								game.say2('你获得一张削弱卡');
							};
							game.saveConfig('wujinmoshiESkillE',undefined);
							game.saveConfig('wujinmoshiDXB',lib.config.wujinmoshiDXB+1);
							game.saveConfig('wujinmoshiDS',lib.config.wujinmoshiDS+1);
							game.me.useSkill('wujinmoshiRE1');
						};
					},
				};
				lib.skill.wujinmoshiRE1={
					content:function (){
						'step 0'
						game.me.chooseControl('确定','取消',ui.create.dialog('是否从对方身上获得额外技能？','hidden'));
						'step 1'
						if(result.control=='确定') game.me.useSkill('wujinmoshiRE2');
					},
				};
				lib.skill.wujinmoshiRE2={
                	createDialog:function (player,target,onlylist){
						var list=target.storage.wujinmoshiRE;
							if(onlylist) return list;
						var dialog=ui.create.dialog('选择一项作为你的额外技能');
						_status.event.list=list;
						var clickItem=function(){
							_status.event._result=this.link;
							game.resume();
						};
						for(i=0;i<list.length;i++){
							if(lib.translate[list[i]+'_info']){
								var translation=get.translation(list[i]);
								if(translation[0]=='新'&&translation.length==3){
									translation=translation.slice(1,3);
									}else{
									translation=translation.slice(0,2);
								}
								var item=dialog.add('<div class="popup pointerdiv" style="width:50%;display:inline-block"><div class="skill">【'+translation+'】</div><div>'+lib.translate[list[i]+'_info']+'</div></div>');
								item.firstChild.addEventListener('click',clickItem);
								item.firstChild.link=list[i];
							};
						};
						dialog.add(ui.create.div('placeholder'));
						return dialog;
                	},
                	content:function (){
                    	"step 0"
                    	event.dialog=lib.skill.wujinmoshiRE2.createDialog(target,player);
                    	event.switchToAuto=function(){
                        	event._result=event.skillai(event.list);
                        	game.resume();
                    	};
                    	_status.imchoosing=true;
                    	game.pause();
                    	"step 1"
                    	_status.imchoosing=false;
                    	if(event.dialog){
                        	event.dialog.close();
                    	};
						game.saveConfig('wujinmoshiESkill',result);
                	},
				};
				lib.translate.wujinmoshiRE1='获取技能';
				lib.translate.wujinmoshiRE2='获取技能';
				lib.skill._wujinmoshiDamage={
					trigger:{
						source:'damageBefore'
					},
					filter:function (event,player){
						return lib.config.wujinmoshiDamage>0&&player==game.me;
					},
					forced:true,
					content:function (){
						trigger.num+=lib.config.wujinmoshiDamage;
					},
				};
				lib.skill._wujinmoshiDamageE={
					trigger:{
						source:'damageBefore'
					},
					filter:function (event,player){
						return player!=game.me;
					},
					forced:true,
					content:function (){
						trigger.num+=Math.floor(lib.config.wujinmoshiDXB/15)-lib.config.wujinmoshiDamageI;
					},
				};
            	lib.skill._wujinmoshiMaxHandCard={
					mod:{
    					maxHandcard:function (player,num){
            				if(player==game.me&&lib.config.wujinmoshiMaxHandCard>0) return num+lib.config.wujinmoshiMaxHandCard;
            				return num;
    					},
					},
				};
            	lib.skill._wujinmoshiMaxHandCardE={
					mod:{
    					maxHandcard:function (player,num){
            				if(player!=game.me) return num+Math.floor(lib.config.wujinmoshiDXB/5)-lib.config.wujinmoshiMaxHandCardI;
            				return num;
    					},
					},
				};
            	lib.skill._wujinmoshiDraw={
					trigger:{
						player:'drawBefore'
					},
					filter:function (event,player){
						return lib.config.wujinmoshiDraw>0&&player==game.me;
					},
					forced:true,
					content:function (){
						trigger.num+=lib.config.wujinmoshiDraw;
					},
				};
            	lib.skill._wujinmoshiDrawE={
					trigger:{
						player:'drawBefore'
					},
					filter:function (event,player){
						return player!=game.me;
					},
					forced:true,
					content:function (){
						if(Math.floor(lib.config.wujinmoshiDXB/15)-lib.config.wujinmoshiDrawI<3){
							trigger.num+=Math.floor(lib.config.wujinmoshiDXB/15)-lib.config.wujinmoshiDrawI;
						}else{
							trigger.num+=3;
						};
					},
				};
            	lib.skill._wujinmoshiRecover={
					trigger:{
						player:'recoverBefore'
					},
					filter:function (event,player){
						return lib.config.wujinmoshiRecover>0&&player==game.me;
					},
					forced:true,
					content:function (){
						trigger.num+=lib.config.wujinmoshiRecover;
					},
				};
            	lib.skill._wujinmoshiRecoverE={
					trigger:{
						player:'recoverBefore'
					},
					filter:function (event,player){
						return player!=game.me;
					},
					forced:true,
					content:function (){
						trigger.num+=Math.floor(lib.config.wujinmoshiDXB/10)-lib.config.wujinmoshiRecoverI;
					},
				};
				if(lib.config.wujinmoshiP==undefined){
					alert('未选择进行无尽模式的武将，重新载入游戏');
					game.reload();
				};
				if(wujinmoshiBAGJM) wujinmoshiBAGJM.delete();
			},
};
};
}