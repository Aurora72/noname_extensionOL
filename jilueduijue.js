window.func=function(lib,game,ui,get,ai,_status){
var jilueduijueCharacter1=[];
			for(i in lib.character){
				if(!lib.character[i][4].contains('forbidai')&&!lib.character[i][4].contains('boss')&&!lib.character[i][4].contains('hiddenboss')) jilueduijueCharacter1.push(i);
			};
			var jilueduijueCharacter=jilueduijueCharacter1.randomGets(25);
		if(lib.config.jilueduijue1==undefined) game.saveConfig('jilueduijue1',jilueduijueCharacter[0]);
		if(lib.config.jilueduijue2==undefined) game.saveConfig('jilueduijue2',jilueduijueCharacter[1]);
		if(lib.config.jilueduijue3==undefined) game.saveConfig('jilueduijue3',jilueduijueCharacter[2]);
		if(lib.config.jilueduijue4==undefined) game.saveConfig('jilueduijue4',jilueduijueCharacter[3]);
		if(lib.config.jilueduijue5==undefined) game.saveConfig('jilueduijue5',jilueduijueCharacter[4]);
		if(lib.config.jilueduijue6==undefined) game.saveConfig('jilueduijue6',jilueduijueCharacter[5]);
		if(lib.config.jilueduijue7==undefined) game.saveConfig('jilueduijue7',jilueduijueCharacter[6]);
		if(lib.config.jilueduijue8==undefined) game.saveConfig('jilueduijue8',jilueduijueCharacter[7]);
		if(lib.config.jilueduijue9==undefined) game.saveConfig('jilueduijue9',jilueduijueCharacter[8]);
		if(lib.config.jilueduijue10==undefined) game.saveConfig('jilueduijue10',jilueduijueCharacter[9]);
		if(lib.config.jilueduijue11==undefined) game.saveConfig('jilueduijue11',jilueduijueCharacter[10]);
		if(lib.config.jilueduijue12==undefined) game.saveConfig('jilueduijue12',jilueduijueCharacter[11]);
		if(lib.config.jilueduijue13==undefined) game.saveConfig('jilueduijue13',jilueduijueCharacter[12]);
		if(lib.config.jilueduijue14==undefined) game.saveConfig('jilueduijue14',jilueduijueCharacter[13]);
		if(lib.config.jilueduijue15==undefined) game.saveConfig('jilueduijue15',jilueduijueCharacter[14]);
		if(lib.config.jilueduijue16==undefined) game.saveConfig('jilueduijue16',jilueduijueCharacter[15]);
		if(lib.config.jilueduijue17==undefined) game.saveConfig('jilueduijue17',jilueduijueCharacter[16]);
		if(lib.config.jilueduijue18==undefined) game.saveConfig('jilueduijue18',jilueduijueCharacter[17]);
		if(lib.config.jilueduijue19==undefined) game.saveConfig('jilueduijue19',jilueduijueCharacter[18]);
		if(lib.config.jilueduijue20==undefined) game.saveConfig('jilueduijue20',jilueduijueCharacter[19]);
		if(lib.config.jilueduijue21==undefined) game.saveConfig('jilueduijue21',jilueduijueCharacter[20]);
		if(lib.config.jilueduijue22==undefined) game.saveConfig('jilueduijue22',jilueduijueCharacter[21]);
		if(lib.config.jilueduijue23==undefined) game.saveConfig('jilueduijue23',jilueduijueCharacter[22]);
		if(lib.config.jilueduijue24==undefined) game.saveConfig('jilueduijue24',jilueduijueCharacter[23]);
		if(lib.config.jilueduijue25==undefined) game.saveConfig('jilueduijue25',jilueduijueCharacter[24]);
		if(lib.config.gameMeHasPlayer1==undefined&&lib.config.gameMeHasPlayerA==undefined){
			game.saveConfig('gameMeHasPlayer1',lib.config.jilueduijue1);
			game.saveConfig('gameMeHasPlayerHp1',lib.character[lib.config.jilueduijue1][2]);
			game.saveConfig('gameMeHasPlayerA',true);
		};
		if(lib.config.jilueduijueDXG==undefined) game.saveConfig('jilueduijueDXG',1);
		game.saveConfig('jilueduijueYZR',undefined);
		if(lib.config.jilueduijueND==undefined) game.saveConfig('jilueduijueND','medium');
		game.saveConfig('bingjingliangzuYZR',undefined);
		if(lib.config.jilueduijueEasy==undefined) game.saveConfig('jilueduijueEasy',0);
		if(lib.config.jilueduijuemedium==undefined) game.saveConfig('jilueduijuemedium',0);
		if(lib.config.jilueduijuehard==undefined) game.saveConfig('jilueduijuehard',0);
	game.jilueduijueRE=function(){
						game.saveConfig('jilueduijue1',undefined);
						game.saveConfig('jilueduijue2',undefined);
						game.saveConfig('jilueduijue3',undefined);
						game.saveConfig('jilueduijue4',undefined);
						game.saveConfig('jilueduijue5',undefined);
						game.saveConfig('jilueduijue6',undefined);
						game.saveConfig('jilueduijue7',undefined);
						game.saveConfig('jilueduijue8',undefined);
						game.saveConfig('jilueduijue9',undefined);
						game.saveConfig('jilueduijue10',undefined);
						game.saveConfig('jilueduijue11',undefined);
						game.saveConfig('jilueduijue12',undefined);
						game.saveConfig('jilueduijue13',undefined);
						game.saveConfig('jilueduijue14',undefined);
						game.saveConfig('jilueduijue15',undefined);
						game.saveConfig('jilueduijue16',undefined);
						game.saveConfig('jilueduijue17',undefined);
						game.saveConfig('jilueduijue18',undefined);
						game.saveConfig('jilueduijue19',undefined);
						game.saveConfig('jilueduijue20',undefined);
						game.saveConfig('jilueduijue21',undefined);
						game.saveConfig('jilueduijue22',undefined);
						game.saveConfig('jilueduijue23',undefined);
						game.saveConfig('jilueduijue24',undefined);
						game.saveConfig('jilueduijue25',undefined);
						
						
						game.saveConfig('jilueduijueE',undefined);
						game.saveConfig('jilueduijueE1',undefined);
						
						
						game.saveConfig('jilueduijue2a',undefined);
						game.saveConfig('jilueduijue3a',undefined);
						game.saveConfig('jilueduijue4a',undefined);
						game.saveConfig('jilueduijue5a',undefined);
						game.saveConfig('jilueduijue6a',undefined);
						game.saveConfig('jilueduijue7a',undefined);
						game.saveConfig('jilueduijue8a',undefined);
						game.saveConfig('jilueduijue9a',undefined);
						game.saveConfig('jilueduijue10a',undefined);
						game.saveConfig('jilueduijue11a',undefined);
						game.saveConfig('jilueduijue12a',undefined);
						game.saveConfig('jilueduijue13a',undefined);
						game.saveConfig('jilueduijue14a',undefined);
						game.saveConfig('jilueduijue15a',undefined);
						game.saveConfig('jilueduijue16a',undefined);
						game.saveConfig('jilueduijue17a',undefined);
						game.saveConfig('jilueduijue18a',undefined);
						game.saveConfig('jilueduijue19a',undefined);
						game.saveConfig('jilueduijue20a',undefined);
						game.saveConfig('jilueduijue21a',undefined);
						game.saveConfig('jilueduijue22a',undefined);
						game.saveConfig('jilueduijue23a',undefined);
						game.saveConfig('jilueduijue24a',undefined);
						game.saveConfig('jilueduijue25a',undefined);
						
						
						game.saveConfig('gameMeHasPlayer1',undefined);
						game.saveConfig('gameMeHasPlayer2',undefined);
						game.saveConfig('gameMeHasPlayer3',undefined);
						game.saveConfig('gameMeHasPlayer4',undefined);
						game.saveConfig('gameMeHasPlayer5',undefined);
						game.saveConfig('gameMeHasPlayerA',undefined);
						
						
						game.saveConfig('gameMeHasPlayerHp1',undefined);
						game.saveConfig('gameMeHasPlayerHp2',undefined);
						game.saveConfig('gameMeHasPlayerHp3',undefined);
						game.saveConfig('gameMeHasPlayerHp4',undefined);
						game.saveConfig('gameMeHasPlayerHp5',undefined);
						
						
						game.saveConfig('jilueduijueDXG',undefined);
						
						
						game.reload();
					};
	if ( lib.brawl ) {
lib.brawl.jilueduijue = {
            name:'极略对决',
	        mode:'identity',
            intro:'',
            showcase:function(init){
//				window.resizeTo(1000, 650);
//				window.onresize=function(){
//					window.resizeTo(1000, 650);
//				};
				this.style.width='575px';
				if(lib.config.jilueduijueYZR!=true){
				var jilueduijueSM=ui.create.div('');
				if(lib.device){
					jilueduijueSM.innerHTML='单击选择挑战武将，点击取消或确定后弹出武将资料';
				}else{
					jilueduijueSM.innerHTML='单击弹出武将资料，双击选择挑战武将';
				};
				jilueduijueSM.style.left='100px';
				jilueduijueSM.style.top='0px';
				this.appendChild(jilueduijueSM);
				

				var jilueduijueRENDS=ui.create.div('');
				if(lib.config.jilueduijueE==undefined){
					jilueduijueRENDS.innerHTML='未选择对手';
				}else{
					if(lib.config.jilueduijueE1==undefined){
						jilueduijueRENDS.innerHTML='当前对手：'+lib.translate[lib.config.jilueduijueE];
					}else{
						jilueduijueRENDS.innerHTML='当前对手：'+lib.translate[lib.config.jilueduijueE]+'和'+lib.translate[lib.config.jilueduijueE1];
					};
				};
				jilueduijueRENDS.style.left='0px';
				jilueduijueRENDS.style.top='20px';
				this.appendChild(jilueduijueRENDS);
				setInterval(function(){
					if(lib.config.jilueduijueE==undefined){
						jilueduijueRENDS.innerHTML='未选择对手';
					}else{
						if(lib.config.jilueduijueE1==undefined){
							jilueduijueRENDS.innerHTML='当前对手：'+lib.translate[lib.config.jilueduijueE];
						}else{
							jilueduijueRENDS.innerHTML='当前对手：'+lib.translate[lib.config.jilueduijueE]+'和'+lib.translate[lib.config.jilueduijueE1];
						};
					};
				},100);
				
				
				var jilueduijueDXG=ui.create.div('');
				if(lib.config.jilueduijueDXG<=5){
					jilueduijueDXG.innerHTML='第'+get.cnNumber(lib.config.jilueduijueDXG)+'关';
				}else{
					jilueduijueDXG.innerHTML='已通关'
				};
				jilueduijueDXG.style.left='0px';
				jilueduijueDXG.style.top='0px';
				this.appendChild(jilueduijueDXG);
				setInterval(function(){
					if(lib.config.jilueduijueDXG<=5){
						jilueduijueDXG.innerHTML='第'+get.cnNumber(lib.config.jilueduijueDXG)+'关';
					}else{
						jilueduijueDXG.innerHTML='已通关'
					};
				},100);
				
				
				var jilueduijuePlayer=ui.create.div('');
				jilueduijuePlayer.innerHTML='你的阵容：';
				jilueduijuePlayer.style.left='0px';
				jilueduijuePlayer.style.top='40px';
				this.appendChild(jilueduijuePlayer);
				
				
				var jilueduijuePlayer1=ui.create.div('');
				if(lib.config.gameMeHasPlayer1!=undefined){
					jilueduijuePlayer1.innerHTML=lib.translate[lib.config.gameMeHasPlayer1]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp1)+'血';
				}else{
					jilueduijuePlayer1.innerHTML='未拥有'
				};
				jilueduijuePlayer1.style.left='0px';
				jilueduijuePlayer1.style.top='60px';
				this.appendChild(jilueduijuePlayer1);
				setInterval(function(){
					if(lib.config.gameMeHasPlayer1!=undefined){
						jilueduijuePlayer1.innerHTML=lib.translate[lib.config.gameMeHasPlayer1]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp1)+'血';;
					}else{
					jilueduijuePlayer1.innerHTML='未拥有'
					};
				},100);
				
				
				var jilueduijuePlayer2=ui.create.div('');
				if(lib.config.gameMeHasPlayer2!=undefined){
					jilueduijuePlayer2.innerHTML=lib.translate[lib.config.gameMeHasPlayer2]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp2)+'血';;
				}else{
					jilueduijuePlayer2.innerHTML='未拥有'
				};
				jilueduijuePlayer2.style.left='0px';
				jilueduijuePlayer2.style.top='80px';
				this.appendChild(jilueduijuePlayer2);
				setInterval(function(){
					if(lib.config.gameMeHasPlayer2!=undefined){
						jilueduijuePlayer2.innerHTML=lib.translate[lib.config.gameMeHasPlayer2]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp2)+'血';;
					}else{
					jilueduijuePlayer2.innerHTML='未拥有'
					};
				},100);
				
				
				var jilueduijuePlayer3=ui.create.div('');
				if(lib.config.gameMeHasPlayer3!=undefined){
					jilueduijuePlayer3.innerHTML=lib.translate[lib.config.gameMeHasPlayer3]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp3)+'血';;
				}else{
					jilueduijuePlayer3.innerHTML='未拥有'
				};
				jilueduijuePlayer3.style.left='0px';
				jilueduijuePlayer3.style.top='100px';
				this.appendChild(jilueduijuePlayer3);
				setInterval(function(){
					if(lib.config.gameMeHasPlayer3!=undefined){
						jilueduijuePlayer3.innerHTML=lib.translate[lib.config.gameMeHasPlayer3]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp3)+'血';;
					}else{
					jilueduijuePlayer3.innerHTML='未拥有'
					};
				},100);
				
				
				var jilueduijuePlayer4=ui.create.div('');
				if(lib.config.gameMeHasPlayer4!=undefined){
					jilueduijuePlayer4.innerHTML=lib.translate[lib.config.gameMeHasPlayer4]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp4)+'血';;
				}else{
					jilueduijuePlayer4.innerHTML='未拥有'
				};
				jilueduijuePlayer4.style.left='0px';
				jilueduijuePlayer4.style.top='120px';
				this.appendChild(jilueduijuePlayer4);
				setInterval(function(){
					if(lib.config.gameMeHasPlayer4!=undefined){
						jilueduijuePlayer4.innerHTML=lib.translate[lib.config.gameMeHasPlayer4]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp4)+'血';;
					}else{
					jilueduijuePlayer4.innerHTML='未拥有'
					};
				},100);
				
				
				var jilueduijuePlayer5=ui.create.div('');
				if(lib.config.gameMeHasPlayer5!=undefined){
					jilueduijuePlayer5.innerHTML=lib.translate[lib.config.gameMeHasPlayer5]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp5)+'血';;
				}else{
					jilueduijuePlayer5.innerHTML='未拥有'
				};
				jilueduijuePlayer5.style.left='0px';
				jilueduijuePlayer5.style.top='140px';
				this.appendChild(jilueduijuePlayer5);
				setInterval(function(){
					if(lib.config.gameMeHasPlayer5!=undefined){
						jilueduijuePlayer5.innerHTML=lib.translate[lib.config.gameMeHasPlayer5]+' '+get.cnNumber(lib.config.gameMeHasPlayerHp5)+'血';;
					}else{
					jilueduijuePlayer5.innerHTML='未拥有'
					};
				},100);
				
				
				var jilueduijueRE=ui.create.div('.menubutton.large','<span style="cursor:pointer;">重置</span>',function(){
					if(confirm('是否重置?')){
						game.jilueduijueRE();
					};
				});
				jilueduijueRE.style.left='500px';
				jilueduijueRE.style.top='0px';
				this.appendChild(jilueduijueRE);
				
				
				var jilueduijueJS=ui.create.div('.menubutton.large','<span style="cursor:pointer;">规则</span>',function(){
						var jilueduijueJS1=ui.create.dialog('hidden');
						jilueduijueJS1.style.height='calc(100%)';
						jilueduijueJS1.style.width='calc(100%)';
						jilueduijueJS1.style.left='0px';
						jilueduijueJS1.style.top='0px';
						jilueduijueJS1.classList.add('popped');
						jilueduijueJS1.classList.add('static');
						var jilueduijueQX=ui.create.div('.menubutton.round','×',function(){
							jilueduijueJS1.delete();
						});
						jilueduijueQX.style.left='50px';
						jilueduijueQX.style.top='50px';

						var jilueduijueJS2=ui.create.div('','');
						jilueduijueJS2.setBackgroundImage('extension/扩展ol/jilueduijueJS.png');
						jilueduijueJS2.style.height='400px';
						jilueduijueJS2.style.width='600px';
						jilueduijueJS2.style.left='50px';
						jilueduijueJS2.style.top='50px';
						
						jilueduijueJS1.add(jilueduijueJS2);
						jilueduijueJS1.add(jilueduijueQX);
						ui.window.appendChild(jilueduijueJS1);
				});
				jilueduijueJS.style.left='500px';
				jilueduijueJS.style.top='50px';
				this.appendChild(jilueduijueJS);
				

				var jilueduijueNDA=ui.create.div('.menubutton.large','<span style="cursor:pointer;">难度</span>',function(){
					if(lib.config.jilueduijueDXG==1&&lib.config.jilueduijueE==undefined){
						if(lib.config.jilueduijueND=='hard'){
							game.saveConfig('jilueduijueND','easy');
							game.say1('设置难度为简单');
						}else if(lib.config.jilueduijueND=='medium'){
							game.saveConfig('jilueduijueND','hard');
							game.say1('设置难度为困难');
						}else if(lib.config.jilueduijueND=='easy'){
							game.saveConfig('jilueduijueND','medium');
							game.say1('设置难度为普通');
						};
					}else{
						alert('对决已经开始，无法设置难度');
					};
				});
				jilueduijueNDA.style.left='500px';
				jilueduijueNDA.style.top='100px';
				this.appendChild(jilueduijueNDA);
				
				
				
				var jilueduijueND=ui.create.div('.menubutton.large','  ');
				jilueduijueND.style.left='500px';
				jilueduijueND.style.top='150px';
				this.appendChild(jilueduijueND);
				setInterval(function(){
					if(lib.config.jilueduijueND=='easy'){
						jilueduijueND.innerHTML='简单';
						jilueduijueND.style.backgroundColor='#04FF00';
					};
					if(lib.config.jilueduijueND=='medium'){
						jilueduijueND.innerHTML='普通';
						jilueduijueND.style.backgroundColor='#FFFB00';
					};
					if(lib.config.jilueduijueND=='hard'){
						jilueduijueND.innerHTML='困难';
						jilueduijueND.style.backgroundColor='red';
					};
				},100);
					
					var jilueduijueJL1=this;
					var jilueduijueJL=ui.create.div('.menubutton.large','<span style="cursor:pointer;">记录</span>',function(){
						jilueduijueJL.delete();
						var jilueduijueJLQX=ui.create.div('.menubutton.large','<span style="cursor:pointer;">关闭</span>',function(){
							jilueduijueJLQX.delete();
							jilueduijueJLJM.delete();
							jilueduijueJL1.appendChild(jilueduijueJL);
						});
						jilueduijueJLQX.style.left='500px';
						jilueduijueJLQX.style.top='200px';
						jilueduijueJL1.appendChild(jilueduijueJLQX);
						jilueduijueJLJM=ui.create.dialog('hidden');
						jilueduijueJLJM.style.height='calc(50%)';
						jilueduijueJLJM.style.width='calc(50%)';
						jilueduijueJLJM.style.left='calc(25%)';
						jilueduijueJLJM.style.top='calc(25%)';
						jilueduijueJLJM.classList.add('popped');
						jilueduijueJLJM.classList.add('static');
						var jilueduijueJLD=ui.create.div('','简单难度通关次数：'+lib.config.jilueduijueEasy+'次<br>普通难度通关次数：'+lib.config.jilueduijuemedium+'次<br>困难难度通关次数：'+lib.config.jilueduijuehard+'次');
						jilueduijueJLJM.add(jilueduijueJLD);
						
						ui.window.appendChild(jilueduijueJLJM);
					});
					jilueduijueJL.style.left='500px';
					jilueduijueJL.style.top='200px';
					this.appendChild(jilueduijueJL);
				
				
				var jilueduijue1=ui.create.div('.card.fullskin',function(){
					ui.click.charactercard(lib.config.jilueduijue1,'');
				});
				jilueduijue1.style.height='55px';
				jilueduijue1.style.width='55px';
				jilueduijue1.style.left='0px';
				jilueduijue1.style.top='155px';
				jilueduijue1.setBackground(lib.config.jilueduijue1,'character');
				this.appendChild(jilueduijue1);
				

				var jilueduijue2=ui.create.div('.card.fullskin');
				jilueduijue2.style.height='55px';
				jilueduijue2.style.width='55px';
				jilueduijue2.style.left='0px';
				jilueduijue2.style.top='122.5px';
				jilueduijue2.setBackground(lib.config.jilueduijue2,'character');
				ondblclickjilueduijue2=false;
				jilueduijue2.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==1){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue2]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue2);
						jilueduijue3.hide();
						jilueduijue6.hide();
						jilueduijue10.hide();
						jilueduijue15.hide();
						jilueduijue20.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue3a',true);
						game.saveConfig('jilueduijue6a',true);
						game.saveConfig('jilueduijue10a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue2!=1&&ondblclickjilueduijue2!=2){
							ui.click.charactercard(lib.config.jilueduijue2,'');
						}else{
							if(ondblclickjilueduijue2==2) ondblclickjilueduijue2=false;
							if(ondblclickjilueduijue2==1) ondblclickjilueduijue2=2;
						};
					},500);
				};
				jilueduijue2.ondblclick=function(){
					ondblclickjilueduijue2=1;
					if(lib.config.jilueduijueDXG==1){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue2]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue2);
						jilueduijue3.hide();
						jilueduijue6.hide();
						jilueduijue10.hide();
						jilueduijue15.hide();
						jilueduijue20.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue3a',true);
						game.saveConfig('jilueduijue6a',true);
						game.saveConfig('jilueduijue10a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue2);


				var jilueduijue3=ui.create.div('.card.fullskin');
				jilueduijue3.style.height='55px';
				jilueduijue3.style.width='55px';
				jilueduijue3.style.left='-62.5px';
				jilueduijue3.style.top='187.5px';
				jilueduijue3.setBackground(lib.config.jilueduijue3,'character');
				ondblclickjilueduijue3=false;
				jilueduijue3.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==1){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue3]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue3);
						jilueduijue2.hide();
						jilueduijue4.hide();
						jilueduijue7.hide();
						jilueduijue11.hide();
						jilueduijue16.hide();
						jilueduijue21.hide();
						game.saveConfig('jilueduijue2a',true);
						game.saveConfig('jilueduijue4a',true);
						game.saveConfig('jilueduijue7a',true);
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue21a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue3!=1&&ondblclickjilueduijue3!=2){
							ui.click.charactercard(lib.config.jilueduijue3,'');
						}else{
							if(ondblclickjilueduijue3==2) ondblclickjilueduijue3=false;
							if(ondblclickjilueduijue3==1) ondblclickjilueduijue3=2;
						};
					},500);
				};
				jilueduijue3.ondblclick=function(){
					ondblclickjilueduijue3=1;
					if(lib.config.jilueduijueDXG==1){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue3]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue3);
						jilueduijue2.hide();
						jilueduijue4.hide();
						jilueduijue7.hide();
						jilueduijue11.hide();
						jilueduijue16.hide();
						jilueduijue21.hide();
						game.saveConfig('jilueduijue2a',true);
						game.saveConfig('jilueduijue4a',true);
						game.saveConfig('jilueduijue7a',true);
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue21a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue3);

				
				var jilueduijue4=ui.create.div('.card.fullskin');
				jilueduijue4.style.height='55px';
				jilueduijue4.style.width='55px';
				jilueduijue4.style.left='-62.5px';
				jilueduijue4.style.top='90px';
				jilueduijue4.setBackground(lib.config.jilueduijue4,'character');
				ondblclickjilueduijue4=false;
				jilueduijue4.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==2){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue4]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue4);
						jilueduijue5.hide();
						jilueduijue9.hide();
						jilueduijue14.hide();
						jilueduijue19.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue5a',true);
						game.saveConfig('jilueduijue9a',true);
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue4!=1&&ondblclickjilueduijue4!=2){
							ui.click.charactercard(lib.config.jilueduijue4,'');
						}else{
							if(ondblclickjilueduijue4==2) ondblclickjilueduijue4=false;
							if(ondblclickjilueduijue4==1) ondblclickjilueduijue4=2;
						};
					},500);
				};
				jilueduijue4.ondblclick=function(){
					ondblclickjilueduijue4=1;
					if(lib.config.jilueduijueDXG==2){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue4]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue4);
						jilueduijue5.hide();
						jilueduijue9.hide();
						jilueduijue14.hide();
						jilueduijue19.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue5a',true);
						game.saveConfig('jilueduijue9a',true);
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue4);


				var jilueduijue5=ui.create.div('.card.fullskin');
				jilueduijue5.style.height='55px';
				jilueduijue5.style.width='55px';
				jilueduijue5.style.left='-125px';
				jilueduijue5.style.top='155px';
				jilueduijue5.setBackground(lib.config.jilueduijue5,'character');
				ondblclickjilueduijue5=false;
				jilueduijue5.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==2){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue5]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue5);
						jilueduijue4.hide();
						jilueduijue6.hide();
						jilueduijue7.hide();
						jilueduijue11.hide();
						jilueduijue16.hide();
						jilueduijue21.hide();
						jilueduijue10.hide();
						jilueduijue15.hide();
						jilueduijue20.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue4a',true);
						game.saveConfig('jilueduijue6a',true);
						game.saveConfig('jilueduijue7a',true);
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue21a',true);
						game.saveConfig('jilueduijue10a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue5!=1&&ondblclickjilueduijue5!=2){
							ui.click.charactercard(lib.config.jilueduijue5,'');
						}else{
							if(ondblclickjilueduijue5==2) ondblclickjilueduijue5=false;
							if(ondblclickjilueduijue5==1) ondblclickjilueduijue5=2;
						};
					},500);
				};
				jilueduijue5.ondblclick=function(){
					ondblclickjilueduijue5=1;
					if(lib.config.jilueduijueDXG==2){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue5]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue5);
						jilueduijue4.hide();
						jilueduijue6.hide();
						jilueduijue7.hide();
						jilueduijue11.hide();
						jilueduijue16.hide();
						jilueduijue21.hide();
						jilueduijue10.hide();
						jilueduijue15.hide();
						jilueduijue20.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue4a',true);
						game.saveConfig('jilueduijue6a',true);
						game.saveConfig('jilueduijue7a',true);
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue21a',true);
						game.saveConfig('jilueduijue10a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue5);


				var jilueduijue6=ui.create.div('.card.fullskin');
				jilueduijue6.style.height='55px';
				jilueduijue6.style.width='55px';
				jilueduijue6.style.left='-187.5px';
				jilueduijue6.style.top='220px';
				jilueduijue6.setBackground(lib.config.jilueduijue6,'character');
				ondblclickjilueduijue6=false;
				jilueduijue6.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==2){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue6]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue6);
						jilueduijue5.hide();
						jilueduijue8.hide();
						jilueduijue12.hide();
						jilueduijue17.hide();
						jilueduijue22.hide();
						game.saveConfig('jilueduijue5a',true);
						game.saveConfig('jilueduijue8a',true);
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue22a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue6!=1&&ondblclickjilueduijue6!=2){
							ui.click.charactercard(lib.config.jilueduijue6,'');
						}else{
							if(ondblclickjilueduijue6==2) ondblclickjilueduijue6=false;
							if(ondblclickjilueduijue6==1) ondblclickjilueduijue6=2;
						};
					},500);
				};
				jilueduijue6.ondblclick=function(){
					ondblclickjilueduijue6=1;
					if(lib.config.jilueduijueDXG==2){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue6]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue6);
						jilueduijue5.hide();
						jilueduijue8.hide();
						jilueduijue12.hide();
						jilueduijue17.hide();
						jilueduijue22.hide();
						game.saveConfig('jilueduijue5a',true);
						game.saveConfig('jilueduijue8a',true);
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue22a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue6);


				var jilueduijue7=ui.create.div('.card.fullskin');
				jilueduijue7.style.height='55px';
				jilueduijue7.style.width='55px';
				jilueduijue7.style.left='-187px';
				jilueduijue7.style.top='57.5px';
				jilueduijue7.setBackground(lib.config.jilueduijue7,'character');
				ondblclickjilueduijue7=false;
				jilueduijue7.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue7]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue7);
						jilueduijue8.hide();
						jilueduijue13.hide();
						jilueduijue18.hide();
						jilueduijue23.hide();
						game.saveConfig('jilueduijue8a',true);
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue23a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue7!=1&&ondblclickjilueduijue7!=2){
							ui.click.charactercard(lib.config.jilueduijue7,'');
						}else{
							if(ondblclickjilueduijue7==2) ondblclickjilueduijue7=false;
							if(ondblclickjilueduijue7==1) ondblclickjilueduijue7=2;
						};
					},500);
				};
				jilueduijue7.ondblclick=function(){
					ondblclickjilueduijue7=1;
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue7]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue7);
						jilueduijue8.hide();
						jilueduijue13.hide();
						jilueduijue18.hide();
						jilueduijue23.hide();
						game.saveConfig('jilueduijue8a',true);
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue23a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue7);


				var jilueduijue8=ui.create.div('.card.fullskin');
				jilueduijue8.style.height='55px';
				jilueduijue8.style.width='55px';
				jilueduijue8.style.left='-250px';
				jilueduijue8.style.top='122.5px';
				jilueduijue8.setBackground(lib.config.jilueduijue8,'character');
				ondblclickjilueduijue8=false;
				jilueduijue8.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue8]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue8);
						jilueduijue7.hide();
						jilueduijue9.hide();
						jilueduijue11.hide();
						jilueduijue16.hide();
						jilueduijue21.hide();
						jilueduijue14.hide();
						jilueduijue19.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue7a',true);
						game.saveConfig('jilueduijue9a',true);
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue21a',true);
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue8!=1&&ondblclickjilueduijue8!=2){
							ui.click.charactercard(lib.config.jilueduijue8,'');
						}else{
							if(ondblclickjilueduijue8==2) ondblclickjilueduijue8=false;
							if(ondblclickjilueduijue8==1) ondblclickjilueduijue8=2;
						};
					},500);
				};
				jilueduijue8.ondblclick=function(){
					ondblclickjilueduijue8=1;
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue8]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue8);
						jilueduijue7.hide();
						jilueduijue9.hide();
						jilueduijue11.hide();
						jilueduijue16.hide();
						jilueduijue21.hide();
						jilueduijue14.hide();
						jilueduijue19.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue7a',true);
						game.saveConfig('jilueduijue9a',true);
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue21a',true);
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue8);


				var jilueduijue9=ui.create.div('.card.fullskin');
				jilueduijue9.style.height='55px';
				jilueduijue9.style.width='55px';
				jilueduijue9.style.left='-312.75px';
				jilueduijue9.style.top='187px';
				jilueduijue9.setBackground(lib.config.jilueduijue9,'character');
				ondblclickjilueduijue9=false;
				jilueduijue9.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue9]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue9);
						jilueduijue8.hide();
						jilueduijue10.hide();
						jilueduijue12.hide();
						jilueduijue17.hide();
						jilueduijue22.hide();
						jilueduijue15.hide();
						jilueduijue20.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue8a',true);
						game.saveConfig('jilueduijue10a',true);
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue22a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue9!=1&&ondblclickjilueduijue9!=2){
							ui.click.charactercard(lib.config.jilueduijue9,'');
						}else{
							if(ondblclickjilueduijue9==2) ondblclickjilueduijue9=false;
							if(ondblclickjilueduijue9==1) ondblclickjilueduijue9=2;
						};
					},500);
				};
				jilueduijue9.ondblclick=function(){
					ondblclickjilueduijue9=1;
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue9]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue9);
						jilueduijue8.hide();
						jilueduijue10.hide();
						jilueduijue12.hide();
						jilueduijue17.hide();
						jilueduijue22.hide();
						jilueduijue15.hide();
						jilueduijue20.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue8a',true);
						game.saveConfig('jilueduijue10a',true);
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue22a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue9);


				var jilueduijue10=ui.create.div('.card.fullskin');
				jilueduijue10.style.height='55px';
				jilueduijue10.style.width='55px';
				jilueduijue10.style.left='191.5px';
				jilueduijue10.style.top='187px';
				jilueduijue10.setBackground(lib.config.jilueduijue10,'character');
				ondblclickjilueduijue10=false;
				jilueduijue10.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue10]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue10);
						jilueduijue9.hide();
						jilueduijue13.hide();
						jilueduijue18.hide();
						jilueduijue23.hide();
						game.saveConfig('jilueduijue9a',true);
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue23a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue10!=1&&ondblclickjilueduijue10!=2){
							ui.click.charactercard(lib.config.jilueduijue10,'');
						}else{
							if(ondblclickjilueduijue10==2) ondblclickjilueduijue10=false;
							if(ondblclickjilueduijue10==1) ondblclickjilueduijue10=2;
						};
					},500);
				};
				jilueduijue10.ondblclick=function(){
					ondblclickjilueduijue10=1;
					if(lib.config.jilueduijueDXG==3){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue10]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue10);
						jilueduijue9.hide();
						jilueduijue13.hide();
						jilueduijue18.hide();
						jilueduijue23.hide();
						game.saveConfig('jilueduijue9a',true);
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue23a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue10);


				var jilueduijue11=ui.create.div('.card.fullskin');
				jilueduijue11.style.height='55px';
				jilueduijue11.style.width='55px';
				jilueduijue11.style.left='193.5px';
				jilueduijue11.style.top='-40.5px';
				jilueduijue11.setBackground(lib.config.jilueduijue11,'character');
				ondblclickjilueduijue11=false;
				jilueduijue11.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue11]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue11);
						jilueduijue12.hide();
						jilueduijue17.hide();
						jilueduijue22.hide();
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue22a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue11!=1&&ondblclickjilueduijue11!=2){
							ui.click.charactercard(lib.config.jilueduijue11,'');
						}else{
							if(ondblclickjilueduijue11==2) ondblclickjilueduijue11=false;
							if(ondblclickjilueduijue11==1) ondblclickjilueduijue11=2;
						};
					},500);
				};
				jilueduijue11.ondblclick=function(){
					ondblclickjilueduijue11=1;
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue11]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue11);
						jilueduijue12.hide();
						jilueduijue17.hide();
						jilueduijue22.hide();
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue22a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue11);


				var jilueduijue12=ui.create.div('.card.fullskin');
				jilueduijue12.style.height='55px';
				jilueduijue12.style.width='55px';
				jilueduijue12.style.left='130px';
				jilueduijue12.style.top='24.5px';
				jilueduijue12.setBackground(lib.config.jilueduijue12,'character');
				ondblclickjilueduijue12=false;
				jilueduijue12.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue12]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue12);
						jilueduijue11.hide();
						jilueduijue13.hide();
						jilueduijue16.hide();
						jilueduijue18.hide();
						jilueduijue21.hide();
						jilueduijue23.hide();
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue21a',true);
						game.saveConfig('jilueduijue23a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue12!=1&&ondblclickjilueduijue12!=2){
							ui.click.charactercard(lib.config.jilueduijue12,'');
						}else{
							if(ondblclickjilueduijue12==2) ondblclickjilueduijue12=false;
							if(ondblclickjilueduijue12==1) ondblclickjilueduijue12=2;
						};
					},500);
				};
				jilueduijue12.ondblclick=function(){
					ondblclickjilueduijue12=1;
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue12]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue12);
						jilueduijue11.hide();
						jilueduijue13.hide();
						jilueduijue16.hide();
						jilueduijue18.hide();
						jilueduijue21.hide();
						jilueduijue23.hide();
						game.saveConfig('jilueduijue11a',true);
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue16a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue21a',true);
						game.saveConfig('jilueduijue23a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue12);


				var jilueduijue13=ui.create.div('.card.fullskin');
				jilueduijue13.style.height='55px';
				jilueduijue13.style.width='55px';
				jilueduijue13.style.left='67px';
				jilueduijue13.style.top='89.5px';
				jilueduijue13.setBackground(lib.config.jilueduijue13,'character');
				ondblclickjilueduijue13=false;
				jilueduijue13.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue13]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue13);
						jilueduijue12.hide();
						jilueduijue14.hide();
						jilueduijue17.hide();
						jilueduijue19.hide();
						jilueduijue22.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue22a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue13!=1&&ondblclickjilueduijue13!=2){
							ui.click.charactercard(lib.config.jilueduijue13,'');
						}else{
							if(ondblclickjilueduijue13==2) ondblclickjilueduijue13=false;
							if(ondblclickjilueduijue13==1) ondblclickjilueduijue13=2;
						};
					},500);
				};
				jilueduijue13.ondblclick=function(){
					ondblclickjilueduijue13=1;
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue13]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue13);
						jilueduijue12.hide();
						jilueduijue14.hide();
						jilueduijue17.hide();
						jilueduijue19.hide();
						jilueduijue22.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue12a',true);
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue17a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue22a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue13);


				var jilueduijue14=ui.create.div('.card.fullskin');
				jilueduijue14.style.height='55px';
				jilueduijue14.style.width='55px';
				jilueduijue14.style.left='4.5px';
				jilueduijue14.style.top='154.5px';
				jilueduijue14.setBackground(lib.config.jilueduijue14,'character');
				ondblclickjilueduijue14=false;
				jilueduijue14.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue14]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue14);
						jilueduijue13.hide();
						jilueduijue15.hide();
						jilueduijue18.hide();
						jilueduijue20.hide();
						jilueduijue23.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue23a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue14!=1&&ondblclickjilueduijue14!=2){
							ui.click.charactercard(lib.config.jilueduijue14,'');
						}else{
							if(ondblclickjilueduijue14==2) ondblclickjilueduijue14=false;
							if(ondblclickjilueduijue14==1) ondblclickjilueduijue14=2;
						};
					},500);
				};
				jilueduijue14.ondblclick=function(){
					ondblclickjilueduijue14=1;
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue14]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue14);
						jilueduijue13.hide();
						jilueduijue15.hide();
						jilueduijue18.hide();
						jilueduijue20.hide();
						jilueduijue23.hide();
						jilueduijue25.hide();
						game.saveConfig('jilueduijue13a',true);
						game.saveConfig('jilueduijue15a',true);
						game.saveConfig('jilueduijue18a',true);
						game.saveConfig('jilueduijue20a',true);
						game.saveConfig('jilueduijue23a',true);
						game.saveConfig('jilueduijue25a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue14);


				var jilueduijue15=ui.create.div('.card.fullskin');
				jilueduijue15.style.height='55px';
				jilueduijue15.style.width='55px';
				jilueduijue15.style.left='-58.5px';
				jilueduijue15.style.top='219.5px';
				jilueduijue15.setBackground(lib.config.jilueduijue15,'character');
				ondblclickjilueduijue15=false;
				jilueduijue15.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue15]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue15);
						jilueduijue14.hide();
						jilueduijue19.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue15!=1&&ondblclickjilueduijue15!=2){
							ui.click.charactercard(lib.config.jilueduijue15,'');
						}else{
							if(ondblclickjilueduijue15==2) ondblclickjilueduijue15=false;
							if(ondblclickjilueduijue15==1) ondblclickjilueduijue15=2;
						};
					},500);
				};
				jilueduijue15.ondblclick=function(){
					ondblclickjilueduijue15=1;
					if(lib.config.jilueduijueDXG==4){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue15]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue15);
						jilueduijue14.hide();
						jilueduijue19.hide();
						jilueduijue24.hide();
						game.saveConfig('jilueduijue14a',true);
						game.saveConfig('jilueduijue19a',true);
						game.saveConfig('jilueduijue24a',true);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue15);


				var jilueduijue16=ui.create.div('.card.fullskin');
				jilueduijue16.style.height='55px';
				jilueduijue16.style.width='55px';
				jilueduijue16.style.left='-40px';
				jilueduijue16.style.top='-40px';
				jilueduijue16.setBackground(lib.config.jilueduijue16,'character');
				ondblclickjilueduijue16=false;
				jilueduijue16.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue16]+'和'+lib.translate[lib.config.jilueduijue21]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue16);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue21);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue16!=1&&ondblclickjilueduijue16!=2){
							ui.click.charactercard(lib.config.jilueduijue16,'');
						}else{
							if(ondblclickjilueduijue16==2) ondblclickjilueduijue16=false;
							if(ondblclickjilueduijue16==1) ondblclickjilueduijue16=2;
						};
					},500);
				};
				jilueduijue16.ondblclick=function(){
					ondblclickjilueduijue16=1;
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue16]+'和'+lib.translate[lib.config.jilueduijue21]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue16);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue21);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue16);


				var jilueduijue17=ui.create.div('.card.fullskin');
				jilueduijue17.style.height='55px';
				jilueduijue17.style.width='55px';
				jilueduijue17.style.left='-102.5px';
				jilueduijue17.style.top='25px';
				jilueduijue17.setBackground(lib.config.jilueduijue17,'character');
				ondblclickjilueduijue17=false;
				jilueduijue17.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue17]+'和'+lib.translate[lib.config.jilueduijue22]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue17);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue22);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue17!=1&&ondblclickjilueduijue17!=2){
							ui.click.charactercard(lib.config.jilueduijue17,'');
						}else{
							if(ondblclickjilueduijue17==2) ondblclickjilueduijue17=false;
							if(ondblclickjilueduijue17==1) ondblclickjilueduijue17=2;
						};
					},500);
				};
				jilueduijue17.ondblclick=function(){
					ondblclickjilueduijue17=1;
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue17]+'和'+lib.translate[lib.config.jilueduijue22]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue17);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue22);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue17);


				var jilueduijue18=ui.create.div('.card.fullskin');
				jilueduijue18.style.height='55px';
				jilueduijue18.style.width='55px';
				jilueduijue18.style.left='-165.5px';
				jilueduijue18.style.top='90px';
				jilueduijue18.setBackground(lib.config.jilueduijue18,'character');
				ondblclickjilueduijue18=false;
				jilueduijue18.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue18]+'和'+lib.translate[lib.config.jilueduijue23]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue18);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue23);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue18!=1&&ondblclickjilueduijue18!=2){
							ui.click.charactercard(lib.config.jilueduijue18,'');
						}else{
							if(ondblclickjilueduijue18==2) ondblclickjilueduijue18=false;
							if(ondblclickjilueduijue18==1) ondblclickjilueduijue18=2;
						};
					},500);
				};
				jilueduijue18.ondblclick=function(){
					ondblclickjilueduijue18=1;
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue18]+'和'+lib.translate[lib.config.jilueduijue23]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue18);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue23);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue18);


				var jilueduijue19=ui.create.div('.card.fullskin');
				jilueduijue19.style.height='55px';
				jilueduijue19.style.width='55px';
				jilueduijue19.style.left='275px';
				jilueduijue19.style.top='89px';
				jilueduijue19.setBackground(lib.config.jilueduijue19,'character');
				ondblclickjilueduijue19=false;
				jilueduijue19.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue19]+'和'+lib.translate[lib.config.jilueduijue24]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue19);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue24);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue19!=1&&ondblclickjilueduijue19!=2){
							ui.click.charactercard(lib.config.jilueduijue19,'');
						}else{
							if(ondblclickjilueduijue19==2) ondblclickjilueduijue19=false;
							if(ondblclickjilueduijue19==1) ondblclickjilueduijue19=2;
						};
					},500);
				};
				jilueduijue19.ondblclick=function(){
					ondblclickjilueduijue19=1;
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue19]+'和'+lib.translate[lib.config.jilueduijue24]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue19);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue24);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue19);


				var jilueduijue20=ui.create.div('.card.fullskin');
				jilueduijue20.style.height='55px';
				jilueduijue20.style.width='55px';
				jilueduijue20.style.left='212.5px';
				jilueduijue20.style.top='154px';
				jilueduijue20.setBackground(lib.config.jilueduijue20,'character');
				ondblclickjilueduijue20=false;
				jilueduijue20.onclick=function(){
				if(lib.device){
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue20]+'和'+lib.translate[lib.config.jilueduijue25]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue20);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue25);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
					setTimeout(function(){
						if(ondblclickjilueduijue20!=1&&ondblclickjilueduijue20!=2){
							ui.click.charactercard(lib.config.jilueduijue20,'');
						}else{
							if(ondblclickjilueduijue20==2) ondblclickjilueduijue20=false;
							if(ondblclickjilueduijue20==1) ondblclickjilueduijue20=2;
						};
					},500);
				};
				jilueduijue20.ondblclick=function(){
					ondblclickjilueduijue20=1;
					if(lib.config.jilueduijueDXG==5){
					if(confirm('是否挑战'+lib.translate[lib.config.jilueduijue20]+'和'+lib.translate[lib.config.jilueduijue25]+'?')){
						game.saveConfig('jilueduijueE',lib.config.jilueduijue20);
						game.saveConfig('jilueduijueE1',lib.config.jilueduijue25);
					};
					}else{
						alert('已挑战或前一关未通关')
					};
				};
				this.appendChild(jilueduijue20);


				var jilueduijue21=ui.create.div('.card.fullskin',function(){
					ui.click.charactercard(lib.config.jilueduijue21,'');
				});
				jilueduijue21.style.height='55px';
				jilueduijue21.style.width='55px';
				jilueduijue21.style.left='207.5px';
				jilueduijue21.style.top='-106px';
				jilueduijue21.setBackground(lib.config.jilueduijue21,'character');
				this.appendChild(jilueduijue21);


				var jilueduijue22=ui.create.div('.card.fullskin',function(){
					ui.click.charactercard(lib.config.jilueduijue22,'');
				});
				jilueduijue22.style.height='55px';
				jilueduijue22.style.width='55px';
				jilueduijue22.style.left='146px';
				jilueduijue22.style.top='-41px';
				jilueduijue22.setBackground(lib.config.jilueduijue22,'character');
				this.appendChild(jilueduijue22);


				var jilueduijue23=ui.create.div('.card.fullskin',function(){
					ui.click.charactercard(lib.config.jilueduijue23,'');
				});
				jilueduijue23.style.height='55px';
				jilueduijue23.style.width='55px';
				jilueduijue23.style.left='83px';
				jilueduijue23.style.top='24px';
				jilueduijue23.setBackground(lib.config.jilueduijue23,'character');
				this.appendChild(jilueduijue23);


				var jilueduijue24=ui.create.div('.card.fullskin',function(){
					ui.click.charactercard(lib.config.jilueduijue24,'');
				});
				jilueduijue24.style.height='55px';
				jilueduijue24.style.width='55px';
				jilueduijue24.style.left='20px';
				jilueduijue24.style.top='89px';
				jilueduijue24.setBackground(lib.config.jilueduijue24,'character');
				this.appendChild(jilueduijue24);


				var jilueduijue25=ui.create.div('.card.fullskin',function(){
					ui.click.charactercard(lib.config.jilueduijue25,'');
				});
				jilueduijue25.style.height='55px';
				jilueduijue25.style.width='55px';
				jilueduijue25.style.left='-43px';
				jilueduijue25.style.top='154px';
				jilueduijue25.setBackground(lib.config.jilueduijue25,'character');
				this.appendChild(jilueduijue25);
				
				
				if(lib.config.jilueduijue2a==true) jilueduijue2.hide();
				if(lib.config.jilueduijue3a==true) jilueduijue3.hide();
				if(lib.config.jilueduijue4a==true) jilueduijue4.hide();
				if(lib.config.jilueduijue5a==true) jilueduijue5.hide();
				if(lib.config.jilueduijue6a==true) jilueduijue6.hide();
				if(lib.config.jilueduijue7a==true) jilueduijue7.hide();
				if(lib.config.jilueduijue8a==true) jilueduijue8.hide();
				if(lib.config.jilueduijue9a==true) jilueduijue9.hide();
				if(lib.config.jilueduijue10a==true) jilueduijue10.hide();
				if(lib.config.jilueduijue11a==true) jilueduijue11.hide();
				if(lib.config.jilueduijue12a==true) jilueduijue12.hide();
				if(lib.config.jilueduijue13a==true) jilueduijue13.hide();
				if(lib.config.jilueduijue14a==true) jilueduijue14.hide();
				if(lib.config.jilueduijue15a==true) jilueduijue15.hide();
				if(lib.config.jilueduijue16a==true) jilueduijue16.hide();
				if(lib.config.jilueduijue17a==true) jilueduijue17.hide();
				if(lib.config.jilueduijue18a==true) jilueduijue18.hide();
				if(lib.config.jilueduijue19a==true) jilueduijue19.hide();
				if(lib.config.jilueduijue20a==true) jilueduijue20.hide();
				if(lib.config.jilueduijue21a==true) jilueduijue21.hide();
				if(lib.config.jilueduijue22a==true) jilueduijue22.hide();
				if(lib.config.jilueduijue23a==true) jilueduijue23.hide();
				if(lib.config.jilueduijue24a==true) jilueduijue24.hide();
				if(lib.config.jilueduijue25a==true) jilueduijue25.hide();
				game.saveConfig('jilueduijueYZR',true);
				};
			},
            content:{
	            gameStart:function(){
					if(game.me.name==lib.config.gameMeHasPlayer1&&lib.config.gameMeHasPlayerHp1!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp1;
					if(game.me.name==lib.config.gameMeHasPlayer2&&lib.config.gameMeHasPlayerHp2!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp2;
					if(game.me.name==lib.config.gameMeHasPlayer3&&lib.config.gameMeHasPlayerHp3!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp3;
					if(game.me.name==lib.config.gameMeHasPlayer4&&lib.config.gameMeHasPlayerHp4!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp4;
					if(game.me.name==lib.config.gameMeHasPlayer5&&lib.config.gameMeHasPlayerHp5!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp5;
					game.me.update();
					game.me.next.init(lib.config.jilueduijueE);
					if(lib.config.jilueduijueDXG==5) game.me.previous.init(lib.config.jilueduijueE1);
					if(lib.config.jilueduijueND=='easy'){
						if(game.me!=game.zhu){
							for(var i=0;i<game.players.length;i++){
								game.players[i].draw(2);
							};
							game.me.insertPhase();
						};
						game.me.identity='zhu';
						game.me.next.identity='fan';
						if(lib.config.jilueduijueDXG==5) game.me.previous.identity='fan';
						game.zhu=game.me;
					}else{
						game.me.identity='fan';
						game.me.next.identity='zhu';
						game.zhu=game.me.next;
						if(game.me.next!=game.zhu){
							game.me.next.insertPhase();
						};
						if(lib.config.jilueduijueDXG==5) game.me.previous.identity='zhong';
					};
					if(lib.config.jilueduijueND=='hard'){
						var pl=game.addPlayer();
						pl.init(jilueduijueCharacter1.randomGet());
						if(lib.config.jilueduijueND=='easy'){
							pl.identity='fan';
							pl.setIdentity('fan');
							pl.node.identity.dataset.color=pl.identity;
						}else{
							pl.identity='zhong';
							pl.setIdentity('zhong');
							pl.node.identity.dataset.color=pl.identity;
						};
					};
					game.showIdentity();
					game.addPlayer=function(all){
						alert('增加角色，违反极略对决规则，重新载入游戏');
						game.reload();
					};
					game.addFellow=function(all){
						alert('增加角色，违反极略对决规则，重新载入游戏');
						game.reload();
					};
					game.swapPlayer=function(all){};
					game.swapControl=function(all){};
				},
                chooseCharacter:function(){
	                var gameMeHasPlayer=[];
	                if(lib.config.gameMeHasPlayer1!=undefined) gameMeHasPlayer.push(lib.config.gameMeHasPlayer1);
					if(lib.config.gameMeHasPlayer2!=undefined) gameMeHasPlayer.push(lib.config.gameMeHasPlayer2);
					if(lib.config.gameMeHasPlayer3!=undefined) gameMeHasPlayer.push(lib.config.gameMeHasPlayer3);
					if(lib.config.gameMeHasPlayer4!=undefined) gameMeHasPlayer.push(lib.config.gameMeHasPlayer4);
					if(lib.config.gameMeHasPlayer5!=undefined) gameMeHasPlayer.push(lib.config.gameMeHasPlayer5);
	                return gameMeHasPlayer;
                },
                chooseCharacterAi:function(player,list,list2,back){
                    return ;
                },
            },
            init:function(){
				if(lib.config.jilueduijueE==undefined){
					alert('未选择挑战武将，重新载入游戏');
					game.reload();
				};
//				ui.commandnode.classList.add('off');
				lib.config.mode_config.identity.free_choose=false;
				lib.config.mode_config.identity.change_choice=false;
				lib.config.mode_config.identity.change_identity=false;
                game.saveConfig('double_character',false,'identity');
                game.saveConfig('identity_mode','normal','identity');
                if(lib.config.jilueduijueDXG!=5){
					game.saveConfig('player_number','2','identity');
				}else{
					game.saveConfig('player_number','3','identity');
				};
			lib.skill._jilueduijueRE={
				trigger:{
					player:'dieBefore'
				},
				forced:true,
				filter:function (event,player){
					return lib.config.jilueduijueE!=undefined;
				},
				content:function(){
					if(player.name==lib.config.gameMeHasPlayer1) game.saveConfig('gameMeHasPlayer1',undefined);
					if(player.name==lib.config.gameMeHasPlayer2) game.saveConfig('gameMeHasPlayer2',undefined);
					if(player.name==lib.config.gameMeHasPlayer3) game.saveConfig('gameMeHasPlayer3',undefined);
					if(player.name==lib.config.gameMeHasPlayer4) game.saveConfig('gameMeHasPlayer4',undefined);
					if(player.name==lib.config.gameMeHasPlayer5) game.saveConfig('gameMeHasPlayer5',undefined);
					if(player==game.me){
						if(lib.config.jilueduijueND!='easy') player.discard(player.get('hej'));
						if(lib.config.gameMeHasPlayer1==undefined&&lib.config.gameMeHasPlayer2==undefined&&lib.config.gameMeHasPlayer3==undefined&&lib.config.gameMeHasPlayer4==undefined&&lib.config.gameMeHasPlayer5==undefined){
							alert('你的阵容内没有武将，重置极略对决');
							game.jilueduijueRE();
						}else{
							game.me.useSkill('jilueduijueCS');
							trigger.untrigger();
							trigger.finish();
						};
					}else{
						if(game.players.length==2&&lib.config.jilueduijueND!='hard'){
							if(lib.config.jilueduijueDXG==1){
								game.saveConfig('gameMeHasPlayer2',player.name);
								game.saveConfig('gameMeHasPlayerHp2',lib.character[lib.config.gameMeHasPlayer2][2]);
							};
							if(lib.config.jilueduijueDXG==2){
								game.saveConfig('gameMeHasPlayer3',player.name);
								game.saveConfig('gameMeHasPlayerHp3',lib.character[lib.config.gameMeHasPlayer3][2]);
							};
							if(lib.config.jilueduijueDXG==3){
								game.saveConfig('gameMeHasPlayer4',player.name);
								game.saveConfig('gameMeHasPlayerHp4',lib.character[lib.config.gameMeHasPlayer4][2]);
							};
							if(lib.config.jilueduijueDXG==4){
								game.saveConfig('gameMeHasPlayer5',player.name);
								game.saveConfig('gameMeHasPlayerHp5',lib.character[lib.config.gameMeHasPlayer5][2]);
							};
							if(lib.config.jilueduijueND=='easy'&&lib.config.jilueduijueDXG==5) game.saveConfig('jilueduijueEasy',lib.config.jilueduijueEasy+1);
							if(lib.config.jilueduijueND=='medium'&&lib.config.jilueduijueDXG==5) game.saveConfig('jilueduijuemedium',lib.config.jilueduijuemedium+1);
							if(game.me.name==lib.config.gameMeHasPlayer1) game.saveConfig('gameMeHasPlayerHp1',game.me.hp);
							if(game.me.name==lib.config.gameMeHasPlayer2) game.saveConfig('gameMeHasPlayerHp2',game.me.hp);
							if(game.me.name==lib.config.gameMeHasPlayer3) game.saveConfig('gameMeHasPlayerHp3',game.me.hp);
							if(game.me.name==lib.config.gameMeHasPlayer4) game.saveConfig('gameMeHasPlayerHp4',game.me.hp);
							if(game.me.name==lib.config.gameMeHasPlayer5) game.saveConfig('gameMeHasPlayerHp5',game.me.hp);
							game.saveConfig('jilueduijueDXG',lib.config.jilueduijueDXG+1);
							game.saveConfig('jilueduijueE',undefined);
						}else{
							if(player==game.zhu){
								if(lib.config.jilueduijueDXG==1){
									game.saveConfig('gameMeHasPlayer2',player.name);
									game.saveConfig('gameMeHasPlayerHp2',lib.character[lib.config.gameMeHasPlayer2][2]);
								};
								if(lib.config.jilueduijueDXG==2){
									game.saveConfig('gameMeHasPlayer3',player.name);
									game.saveConfig('gameMeHasPlayerHp3',lib.character[lib.config.gameMeHasPlayer3][2]);
								};
								if(lib.config.jilueduijueDXG==3){
									game.saveConfig('gameMeHasPlayer4',player.name);
									game.saveConfig('gameMeHasPlayerHp4',lib.character[lib.config.gameMeHasPlayer4][2]);
								};
								if(lib.config.jilueduijueDXG==4){
									game.saveConfig('gameMeHasPlayer5',player.name);
									game.saveConfig('gameMeHasPlayerHp5',lib.character[lib.config.gameMeHasPlayer5][2]);
								};
								if(lib.config.jilueduijueND=='medium'&&lib.config.jilueduijueDXG==5) game.saveConfig('jilueduijuemedium',lib.config.jilueduijuemedium+1);
								if(lib.config.jilueduijueND=='hard'&&lib.config.jilueduijueDXG==5) game.saveConfig('jilueduijuehard',lib.config.jilueduijuehard+1);
								if(game.me.name==lib.config.gameMeHasPlayer1) game.saveConfig('gameMeHasPlayerHp1',game.me.hp);
								if(game.me.name==lib.config.gameMeHasPlayer2) game.saveConfig('gameMeHasPlayerHp2',game.me.hp);
								if(game.me.name==lib.config.gameMeHasPlayer3) game.saveConfig('gameMeHasPlayerHp3',game.me.hp);
								if(game.me.name==lib.config.gameMeHasPlayer4) game.saveConfig('gameMeHasPlayerHp4',game.me.hp);
								if(game.me.name==lib.config.gameMeHasPlayer5) game.saveConfig('gameMeHasPlayerHp5',game.me.hp);
								game.saveConfig('jilueduijueDXG',lib.config.jilueduijueDXG+1);
								game.saveConfig('jilueduijueE',undefined);
							};
						};
					};
				},
			};
			lib.skill.jilueduijueCS={
				content:function(){
					'step 0'
	                var list=[];
					if(lib.config.gameMeHasPlayer1!=undefined) list.push(lib.config.gameMeHasPlayer1);
					if(lib.config.gameMeHasPlayer2!=undefined) list.push(lib.config.gameMeHasPlayer2);
					if(lib.config.gameMeHasPlayer3!=undefined) list.push(lib.config.gameMeHasPlayer3);
					if(lib.config.gameMeHasPlayer4!=undefined) list.push(lib.config.gameMeHasPlayer4);
					if(lib.config.gameMeHasPlayer5!=undefined) list.push(lib.config.gameMeHasPlayer5);
					player.chooseButton(ui.create.dialog('选择上场的武将',[list,'character']),true);
					'step 1'
					if(result.bool){
						player.init(result.buttons[0].link);
						if(game.me.name==lib.config.gameMeHasPlayer1&&lib.config.gameMeHasPlayerHp1!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp1;
						if(game.me.name==lib.config.gameMeHasPlayer2&&lib.config.gameMeHasPlayerHp2!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp2;
						if(game.me.name==lib.config.gameMeHasPlayer3&&lib.config.gameMeHasPlayerHp3!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp3;
						if(game.me.name==lib.config.gameMeHasPlayer4&&lib.config.gameMeHasPlayerHp4!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp4;
						if(game.me.name==lib.config.gameMeHasPlayer5&&lib.config.gameMeHasPlayerHp5!=undefined) game.me.hp=lib.config.gameMeHasPlayerHp5;
						game.me.update();
						player.draw(2);
					};
				},
			};
			lib.translate.jilueduijueCS='换将';
			if(jilueduijueJLJM) jilueduijueJLJM.delete();
            },
};
};
}