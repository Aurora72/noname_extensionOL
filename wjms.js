window.func=function(lib,game,ui,get,ai,_status){
	if(lib.config.mode_config.wjms==undefined){
		lib.config.mode_config.wjms={};
		lib.config.mode_config.wjms.mode='wujin';
		game.saveConfig('mode','wujin','wjms');
		lib.config.mode_config.wjms.gk_num=3;
		game.saveConfig('gk_num',3,'wjms');
		lib.config.mode_config.wjms.change_card='disabled';
		game.saveConfig('change_card','disabled','wjms');
		lib.config.mode_config.wjms.jc='tb';
		game.saveConfig('jc','tb','wjms');
		lib.config.mode_config.wjms.zdgbcpms=true;
		game.saveConfig('zdgbcpms',true,'wjms');
		lib.config.mode_config.wjms.jcwj=true;
		game.saveConfig('jcwj',true,'wjms');
		lib.config.mode_config.wjms.wjms_fhsx=false;
		game.saveConfig('wjms_fhsx',false,'wjms');
		lib.config.mode_config.wjms.bwx_wujin1=false;
		game.saveConfig('bwx_wujin1',false,'wjms');
		lib.config.mode_config.wjms.bwx_jilue=false;
		game.saveConfig('bwx_jilue',false,'wjms');
		lib.config.mode_config.wjms.jctl=false;
		game.saveConfig('jctl',false,'wjms');
		lib.config.mode_config.wjms.onlyUseDamage=false;
		game.saveConfig('onlyUseDamage',false,'wjms');
		lib.config.mode_config.wjms.onlyPhaseDraw=false;
		game.saveConfig('onlyPhaseDraw',false,'wjms');
		lib.config.mode_config.wjms.onlyUseRecover=false;
		game.saveConfig('onlyUseRecover',false,'wjms');
		lib.config.mode_config.wjms.round_jilue=5;
		game.saveConfig('round_jilue',5,'wjms');
	};
	var gk={
		
	};
	if(lib.kzol_wjms_gk==undefined) lib.kzol_wjms_gk={};
	for(var i in gk){
		lib.kzol_wjms_gk[i]=gk[i];
	};
	game.kzol_getEvent=function(character){
		var gk=lib.kzol_wjms_gk;
		var list=[];
		var list_r=[];
		var list_r_bool=[];
		var list_forbidai=[];
		for(var i in lib.characterPack){
			if(!lib.config.characters.contains(i)){
				for(var j in lib.characterPack[i]){
					list_forbidai.push(j);
				};
			};
		};
		for(var i in gk){
			if(character==true&&gk[i].character==undefined) continue;
			if(gk[i].random!=undefined){
				list_r.push(i);
			}else{
				if(lib.config.mode_config.wjms.jc=='tb'&&list_forbidai.contains(i)) continue;
				list.push(i);
			};
		};
		var bool=list.randomGet();
		for(var i=0;i<list_r.length;i++){
			if(Math.random()<gk[list_r[i]].random) list_r_bool.push(list_r[i]);
		};
		if(list_r_bool.length>0) bool=list_r_bool.randomGet();
		return bool;
	};
	if(lib.config.kzol_wjms==undefined){
		lib.config.kzol_wjms={};
		game.saveConfig('kzol_wjms',lib.config.kzol_wjms);
	};
	var bool=false;
	if(lib.config.kzol_wjms.wjbw_equiped==undefined){
		lib.config.kzol_wjms.wjbw_equiped={};
		bool=true;
	};
	if(lib.config.kzol_wjms.maxRound==undefined){
		lib.config.kzol_wjms.maxRound=1;
		bool=true;
	};
	if(bool==true) game.saveConfig('kzol_wjms',lib.config.kzol_wjms);
	
	if(lib.config.kzol_wujin1==undefined) game.saveConfig('kzol_wujin1',{});
	if(lib.config.kzol_wujin1.maxRound==undefined){
		if(lib.config.wujinmoshiDXB!=undefined){
			lib.config.kzol_wujin1.maxRound=lib.config.wujinmoshiDXB;
		}else{
			lib.config.kzol_wujin1.maxRound=1;
		};
		game.saveConfig('kzol_wujin1',lib.config.kzol_wujin1);
	};
	
	if(lib.config.kzol_jilue==undefined) game.saveConfig('kzol_jilue',{});
	if(lib.config.kzol_jilue.record==undefined){
		lib.config.kzol_jilue.record={
			'简单':{
				lose:0,
				win:0,
			},
			'普通':{
				lose:0,
				win:0,
			},
			'困难':{
				lose:0,
				win:0,
			},
			'极限':{
				lose:0,
				win:0,
			},
		};
		game.saveConfig('kzol_jilue',lib.config.kzol_jilue);
	};
	if(lib.config['extension_扩展ol_mode_hide_wjms']==true) return ;
	lib.arenaReady.push(function(){
		ui.kzol_wjms_bs=ui.create.system('',null,true);
		ui.kzol_wjms_bs.style.display='none';
		//var str='未开始';
		//if(lib.config.kzol_wjms.round!=undefined) str='第'+lib.config.kzol_wjms.round+'轮';
		ui.kzol_wjms_bs.innerHTML='未开始';
		lib.setPopped(ui.kzol_wjms_bs,function(){
			var uiintro=ui.create.dialog('hidden');
			//uiintro.style['text-align']='justify';
			uiintro.listen(function(e){
				e.stopPropagation();
			});
			var str='';
			if(_status.mode=='wujin1'){
				str+='最高到达第'+lib.config.kzol_wujin1.maxRound+'轮';
				if(lib.config.kzol_wujin1.round!=undefined){
					var num=0.05+lib.config.kzol_wujin1.round/150;
					if(num>0.45) num=0.45;
					num=num*10000;
					num=Math.floor(num);
					num=num/100;
					str+='<span style="font-size:18px"><br><br>挑战成功奖励</span>'+
					'<span style="font-size:16px"><br>额外水晶&nbsp&nbsp'+(lib.config.kzol_wujin1.round*2)+'个'+
					'<br>灵魂碎片X1&nbsp&nbsp'+num+'%</span>';
				};
			}else if(_status.mode=='jilue'){
				var func=function(nandu){
					var num=0;
					var str='';
					var config=lib.config.kzol_jilue.record[nandu];
					if(config.win+config.lose>0) num=config.win/(config.win+config.lose);
					num=num*10000;
					num=Math.floor(num);
					num=num/100;
					str+=nandu+'&nbsp&nbsp'+num+'% ('+config.win+'/'+(config.win+config.lose)+')';
					return str;
					
				};
				str='<span style="font-size:16px">'+
				func('简单')+
				'<br>'+func('普通')+
				'<br>'+func('困难')+
				'<br>'+func('极限')+
				'<br><br></span><table style="width:100%;" border="1">'+
				'<tr>'+
				'<td width="20%" style="text-align:center;vertical-align:middle;font-size:16px"></td>'+
				'<td width="40%" style="text-align:center;vertical-align:middle;font-size:16px">开局先手</td>'+
				'<td width="40%" style="text-align:center;vertical-align:middle;font-size:16px">换将弃牌</td>'+
				'</tr>'+
				'<tr>'+
				'<td width="20%" style="text-align:center;vertical-align:middle;font-size:16px">简单</td>'+
				'<td width="40%" style="text-align:center;vertical-align:middle;font-size:16px">己方</td>'+
				'<td width="40%" style="text-align:center;vertical-align:middle;font-size:16px">X</td>'+
				'</tr>'+
				'<tr>'+
				'<td width="20%" style="text-align:center;vertical-align:middle;font-size:16px">普通</td>'+
				'<td width="40%" style="text-align:center;vertical-align:middle;font-size:16px">随机</td>'+
				'<td width="40%" style="text-align:center;vertical-align:middle;font-size:16px">√</td>'+
				'</tr>'+
				'<tr>'+
				'<td width="20%" style="text-align:center;vertical-align:middle;font-size:16px">困难</td>'+
				'<td width="40%" style="text-align:center;vertical-align:middle;font-size:16px">敌方</td>'+
				'<td width="40%" style="text-align:center;vertical-align:middle;font-size:16px">√</td>'+
				'</tr>'+
				'<tr>'+
				'<td width="20%" style="text-align:center;vertical-align:middle;font-size:16px">极限</td>'+
				'<td width="40%" style="text-align:center;vertical-align:middle;font-size:16px">敌方</td>'+
				'<td width="40%" style="text-align:center;vertical-align:middle;font-size:16px">√</td>'+
				'</tr>'+
				'<tr>'+
				'<td width="100%" style="text-align:justify;vertical-align:middle;font-size:16px" colspan="3">极限难度下，敌方人数+1（非最终轮）</td>'+
				'</tr>'+
				'</table>';
			}else{
				str+='最高到达第'+lib.config.kzol_wjms.maxRound+'轮';
			};
			uiintro.add(str);
			return uiintro;
		},220);
	});
	game.addMode('wjms',{
		start:function(){
			'step 0'
			_status.mode=get.config('mode');
			if(lib.config.mode_config.wjms.zdgbcpms==true){
				lib.config.phonelayout=false;
				ui.css.phone.href='';
				ui.arena.classList.remove('phone');
			};
			game.over=game.kzol_wjms_over;
			for(var i in lib.characterPack){
				for(var j in lib.characterPack[i]){
					var character=lib.characterPack[i][j];
					if(character[4]==undefined||(character[4]!=undefined&&!character[4].contains('forbidai'))){
						lib.kzol_wjms_gk[j]={
							name:'挑战'+get.translation(j),
							character:j,
						};
					};
				};
			};
			ui.arena.delete();
			ui.window.classList.remove('leftbar');
			ui.window.classList.remove('rightbar');
			ui.sortCard.style.display='none';
			_status.kzol_wjms_divs={};
			_status.kzol_wjms_divs1={};
			_status.kzol_wjms_divs2={};
			if(_status.mode=='wujin1'){
				ui.kzol_wjms_bs.style.display='';
				setInterval(function(){
					var str='未开始';
					if(lib.config.kzol_wujin1.round!=undefined) str='第'+lib.config.kzol_wujin1.round+'轮';
					ui.kzol_wjms_bs.innerHTML=str;
				},500);
				if(lib.config.kzol_wujin1.character==undefined){
					game.kzol_chooseCharacter();
				}else{
					game.kzol_wjms_menu();
				};
				
				
				var shuxing=ui.create.div();
				shuxing.style.width='300px';
				shuxing.style.height='300px';
				shuxing.style.right='calc(50% + 150px)';
				shuxing.style.top='calc(50% - 125px)';
				shuxing.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
				shuxing.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
				shuxing.style.borderRadius='5px';
				if(lib.config.kzol_wujin1.character==undefined) shuxing.style.display='none';
				ui.window.appendChild(shuxing);
				var shuxing_str=ui.create.div();
				shuxing_str.style.width='290px';
				shuxing_str.style.height='190px';
				shuxing_str.style.left='5px';
				shuxing_str.style.top='5px';
				shuxing_str.style['font-size']='18px';
				shuxing_str.style['font-family']='shousha';
				shuxing.appendChild(shuxing_str);
				var shuxing_skill=ui.create.div();
				shuxing_skill.style.width='290px';
				shuxing_skill.style.height='95px';
				shuxing_skill.style.left='5px';
				shuxing_skill.style.top='200px';
				shuxing_skill.style['text-align']='justify';
				shuxing_skill.style['overflow-x']='hidden';
				shuxing_skill.style['overflow-y']='scroll';
				shuxing_skill.style['font-size']='18px';
				shuxing_skill.style['font-family']='shousha';
				shuxing.appendChild(shuxing_skill);
				lib.setScroll(shuxing_skill);
				game.kzol_updateStr=function(){
					var config=lib.config.kzol_wujin1;
					var str='<span style="font-size:21px">剩余点数：'+config.dianshu+'点</span>'+
					'<br><span style="font-size:21px">体力值：'+config.hp+'/'+config.maxHp+'</span>'+
					'<br><span style="font-size:21px">己方加成：</span>'+
					'<li>体力上限加成：'+config.maxHp1+'&nbsp&nbsp&nbsp<div style="cursor:pointer;">+</div>'+
					'<li>攻击力加成：'+config.attack+'&nbsp&nbsp&nbsp<div style="cursor:pointer;">+</div>'+
					'<li>手牌上限加成：'+config.maxHandCard+'&nbsp&nbsp&nbsp<div style="cursor:pointer;">+</div>'+
					'<li>摸牌数加成：'+config.draw+'&nbsp&nbsp&nbsp<div style="cursor:pointer;">+</div>'+
					'<li>恢复量加成：'+config.recover+'&nbsp&nbsp&nbsp<div style="cursor:pointer;">+</div>'+
					'<li>额外技能：'+(config.skill==undefined?'无':get.translation(config.skill));
					shuxing_str.innerHTML=str;
					shuxing_skill.innerHTML='&nbsp&nbsp'+(config.skill==undefined?'暂无额外技能':get.translation(config.skill+'_info'));
					var div_maxHp1=shuxing_str.querySelectorAll('div')[0];
					var num_maxHp1=3;
					if(config.dianshu<num_maxHp1){
						div_maxHp1.style.display='none';
					}else{
						div_maxHp1.onclick=function(){
							if(confirm('是否消耗'+num_maxHp1+'点点数来增加一点体力上限?')){
								lib.config.kzol_wujin1.dianshu-=num_maxHp1;
								lib.config.kzol_wujin1.maxHp1+=1;
								lib.config.kzol_wujin1.maxHp+=1;
								lib.config.kzol_wujin1.hp+=1;
								game.saveConfig('kzol_wujin1',lib.config.kzol_wujin1);
								game.kzol_updateStr();
							};
						};
					};
					var div_attack=shuxing_str.querySelectorAll('div')[1];
					var num_attack=5+Math.floor(config.attack/3);
					if(config.dianshu<num_attack){
						div_attack.style.display='none';
					}else{
						div_attack.onclick=function(){
							if(confirm('是否消耗'+num_attack+'点点数来增加一点攻击力?')){
								lib.config.kzol_wujin1.dianshu-=num_attack;
								lib.config.kzol_wujin1.attack+=1;
								game.saveConfig('kzol_wujin1',lib.config.kzol_wujin1);
								game.kzol_updateStr();
							};
						};
					};
					var div_maxHandCard=shuxing_str.querySelectorAll('div')[2];
					var num_maxHandCard=1;
					if(config.dianshu<num_maxHandCard){
						div_maxHandCard.style.display='none';
					}else{
						div_maxHandCard.onclick=function(){
							if(confirm('是否消耗'+num_maxHandCard+'点点数来增加一点手牌上限?')){
								lib.config.kzol_wujin1.dianshu-=num_maxHandCard;
								lib.config.kzol_wujin1.maxHandCard+=1;
								game.saveConfig('kzol_wujin1',lib.config.kzol_wujin1);
								game.kzol_updateStr();
							};
						};
					};
					var div_draw=shuxing_str.querySelectorAll('div')[3];
					var num_draw=5;
					if(config.dianshu<num_draw){
						div_draw.style.display='none';
					}else{
						div_draw.onclick=function(){
							if(confirm('是否消耗'+num_draw+'点点数来增加一点摸牌数?')){
								lib.config.kzol_wujin1.dianshu-=num_draw;
								lib.config.kzol_wujin1.draw+=1;
								game.saveConfig('kzol_wujin1',lib.config.kzol_wujin1);
								game.kzol_updateStr();
							};
						};
					};
					var div_recover=shuxing_str.querySelectorAll('div')[4];
					var num_recover=3;
					if(config.dianshu<num_recover){
						div_recover.style.display='none';
					}else{
						div_recover.onclick=function(){
							if(confirm('是否消耗'+num_recover+'点点数来增加一点恢复量?')){
								lib.config.kzol_wujin1.dianshu-=num_recover;
								lib.config.kzol_wujin1.recover+=1;
								game.saveConfig('kzol_wujin1',lib.config.kzol_wujin1);
								game.kzol_updateStr();
							};
						};
					};
				};
				game.kzol_updateStr();
				_status.kzol_wjms_divs.shuxing=shuxing;
				
				
				var shuxing1=ui.create.div();
				shuxing1.style.width='300px';
				shuxing1.style.height='300px';
				shuxing1.style.left='calc(50% + 150px)';
				shuxing1.style.top='calc(50% - 125px)';
				shuxing1.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
				shuxing1.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
				shuxing1.style.borderRadius='5px';
				if(lib.config.kzol_wujin1.character==undefined) shuxing1.style.display='none';
				ui.window.appendChild(shuxing1);
				var shuxing1_str=ui.create.div();
				shuxing1_str.style.width='290px';
				shuxing1_str.style.height='150px';
				shuxing1_str.style.left='5px';
				shuxing1_str.style.top='5px';
				shuxing1_str.style['font-size']='18px';
				shuxing1_str.style['font-family']='shousha';
				shuxing1.appendChild(shuxing1_str);
				var shuxing1_skill=ui.create.div();
				shuxing1_skill.style.width='290px';
				shuxing1_skill.style.height='135px';
				shuxing1_skill.style.left='5px';
				shuxing1_skill.style.top='160px';
				shuxing1_skill.style['text-align']='justify';
				shuxing1_skill.style['overflow-x']='hidden';
				shuxing1_skill.style['overflow-y']='scroll';
				shuxing1_skill.style['font-size']='18px';
				shuxing1_skill.style['font-family']='shousha';
				shuxing1.appendChild(shuxing1_skill);
				lib.setScroll(shuxing1_skill);
				game.kzol_updateStr1=function(){
					var config=lib.config.kzol_wujin1;
					var str='<span style="font-size:21px">敌方加成：</span>'+
					'<li>体力上限加成：'+config.e_maxHp1+'&nbsp&nbsp&nbsp(<span style="font-size:16px">每8轮+1</span>)'+
					'<li>攻击力加成：'+config.e_attack+'&nbsp&nbsp&nbsp(<span style="font-size:16px">每15轮+1</span>)'+
					'<li>手牌上限加成：'+config.e_maxHandCard+'&nbsp&nbsp&nbsp(<span style="font-size:16px">每5轮+1</span>)'+
					'<li>摸牌数加成：'+config.e_draw+'&nbsp&nbsp&nbsp(<span style="font-size:16px">每15轮+1</span>)'+
					'<li>恢复量加成：'+config.e_recover+'&nbsp&nbsp&nbsp(<span style="font-size:16px">每10轮+1</span>)'+
					'<li>额外技能：'+(config.e_skill==undefined?'无':get.translation(config.e_skill))+'&nbsp&nbsp<div style="cursor:pointer">[刷新]</div>';
					shuxing1_str.innerHTML=str;
					shuxing1_skill.innerHTML='&nbsp&nbsp'+(config.e_skill==undefined?'暂无额外技能':get.translation(config.e_skill+'_info'));
					var div_rush=shuxing1_str.querySelectorAll('div')[0];
					div_rush.onclick=function(){
						var config=lib.config.kzol_wujin1.hadChanged;
						if(config!=undefined){
							if(lib.config.kzol_bag==undefined){
								game.say1('未检测到背包');
								return;
							};
							var num1=0;
							var item_num=-1;
							for(var i in lib.config.kzol_bag){
								var bag_item=lib.config.kzol_bag[i];
								if(bag_item.name=='shuijing') item_num=i;
							};
							if(item_num!=-1){
								num1=lib.config.kzol_bag[item_num].num;
							};
							if(confirm('是否花费30水晶刷新敌方的额外技能？（当前拥有'+num1+'水晶）')){
								if(item_num!=-1){
									if(num1<30){
										game.say1('水晶不足');
									}else{
										game.loseItem('shuijing',30);
										lib.config.kzol_wujin1.e_skill=game.kzol_randomGetSkill();
										game.saveConfig('kzol_wujin1',lib.config.kzol_wujin1);
										game.kzol_updateStr1();
										game.say1('刷新成功');
									};
								}else{
									game.say1('水晶不足');
								};
							};
						}else{
							if(confirm('是否刷新敌方的额外技能？')){
								lib.config.kzol_wujin1.e_skill=game.kzol_randomGetSkill();
								lib.config.kzol_wujin1.hadChanged=true;
								game.saveConfig('kzol_wujin1',lib.config.kzol_wujin1);
								game.kzol_updateStr1();
								game.say1('刷新成功');
							};
						};
					};
				};
				game.kzol_updateStr1();
				_status.kzol_wjms_divs.shuxing1=shuxing1;
			}else if(_status.mode=='jilue'){
				ui.kzol_wjms_bs.style.display='';
				setInterval(function(){
					var str='未开始';
					if(lib.config.kzol_jilue.round!=undefined) str='第'+lib.config.kzol_jilue.round+'轮';
					if(lib.config.kzol_jilue.nandu!=undefined) str+='&nbsp'+lib.config.kzol_jilue.nandu;
					ui.kzol_wjms_bs.innerHTML=str;
				},500);
				if(lib.config.kzol_jilue.characters==undefined){
					if(confirm('是否使用随机武将进行极略对决？')){
						lib.config.kzol_jilue.round=1;
						var name=game.kzol_getEvent(true);
						var hp=3;
						var maxHp=3;
						for(var i in lib.characterPack){
							for(var j in lib.characterPack[i]){
								var character=lib.characterPack[i][j];
								if(j==name){
									hp=get.infoHp(character[2]);
									maxHp=get.infoMaxHp(character[2]);
								};
							};
						};
						lib.config.kzol_jilue.characters={};
						lib.config.kzol_jilue.characters_num=0;
						lib.config.kzol_jilue.characters[0]={
							name:name,
							hp:hp,
							maxHp:maxHp,
							dead:false,
						};
						lib.config.kzol_jilue.characters_num+=1;
						var round_num=parseInt(lib.config.mode_config.wjms.round_jilue);
						for(var i=0;i<round_num;i++){
							var list=[];
							var character_num=i+2;
							if(i==round_num-1) character_num=character_num*2;
							for(var j=0;j<character_num;j++){
								list.push(game.kzol_getEvent(true));
							};
							lib.config.kzol_jilue['enemy_round'+(i+1)]=list;
						};
						lib.config.kzol_jilue.nandu=lib.config.mode_config.wjms.nandu==undefined?'简单':lib.config.mode_config.wjms.nandu;
						game.saveConfig('kzol_jilue',lib.config.kzol_jilue);
						game.say1('随机到的初始武将为'+get.translation(name));
						game.kzol_wjms_menu(lib.config.kzol_jilue['enemy_round'+lib.config.kzol_jilue.round].length);
					}else{
						game.kzol_chooseCharacter();
					};
				}else{
					game.kzol_wjms_menu(lib.config.kzol_jilue['enemy_round'+lib.config.kzol_jilue.round].length);
				};
				
				
				var reStart=ui.create.div('.menu','<span style="cursor:pointer;">重置</span>');
				reStart.style['font-size']='35px';
				reStart.style['line-height']='40px';
				reStart.style['font-family']="'STXinwei','xinwei'";
				reStart.style['text-align']='center';
				reStart.style.height='40px';
				reStart.style.width='110px';
				reStart.style.bottom='5px';
				reStart.style.left='5px';
				reStart.style.borderRadius='5px';
				reStart.style.animation='fadelogIn .4s';
				reStart.style['-webkit-animation']='fadelogIn .4s';
				if(lib.config.kzol_jilue.characters==undefined) reStart.style.display='none';
				reStart.onclick=function(){
					if(confirm('是否重置极略对决？')){
						for(var i in lib.config.kzol_jilue){
							if(i=='record') continue;
							delete lib.config.kzol_jilue[i];
						};
						game.saveConfig('kzol_jilue',lib.config.kzol_jilue);
						game.reload();
					};
				};
				game.kzol_clickAnimation(reStart);
				ui.window.appendChild(reStart);
				_status.kzol_wjms_divs.reStart=reStart;
				
				
				var check=ui.create.div('.menu','<span style="cursor:pointer;">武将状态</span>');
				check.style['font-size']='35px';
				check.style['line-height']='40px';
				check.style['font-family']="'STXinwei','xinwei'";
				check.style['text-align']='center';
				check.style.height='40px';
				check.style.width='160px';
				check.style.bottom='5px';
				check.style.left='120px';
				check.style.borderRadius='5px';
				check.style.animation='fadelogIn .4s';
				check.style['-webkit-animation']='fadelogIn .4s';
				if(lib.config.kzol_jilue.characters==undefined) check.style.display='none';
				check.onclick=function(){
					var background=ui.create.dialog('hidden');
					background.style.height='calc(100%)';
					background.style.width='calc(100%)';
					background.style.left='0px';
					background.style.top='0px';
					ui.window.appendChild(background);
					_status.kzol_wjms_divs2.background=background;
					var div1=ui.create.div();
					div1.style.height='100%';
					div1.style.width='100%';
					div1.style.left='0px';
					div1.style.top='0px';
					div1.onclick=function(){
						for(var i in _status.kzol_wjms_divs2){
							_status.kzol_wjms_divs2[i].delete();
							delete _status.kzol_wjms_divs2[i];
						};
					};
					background.appendChild(div1);
					var dialog=ui.create.dialog('hidden');
					dialog.classList.add('popped');
					dialog.classList.add('static');
					dialog.style.height='190px';
					dialog.style.width='780px';
					dialog.style.left='0px';
					dialog.style.bottom='50px';
					dialog.style['overflow-x']='scroll';
					dialog.style['overflow-y']='hidden';
					lib.setScroll(dialog);
					dialog.addEventListener('mousewheel',function(e){
						var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
						var move_s=delD>0?-30:30;
						this.scrollLeft+=move_s;
					});
					ui.window.appendChild(dialog);
					_status.kzol_wjms_divs2.dialog=dialog;
					dialog.innerHTML='';
					var num=0;
					for(var i in lib.config.kzol_jilue.characters){
						var character=lib.config.kzol_jilue.characters[i];
						var div=ui.create.player(null,true);
						game.kzol_jilue_init(div,character.name);
						div.style.top='5px';
						div.maxHp=character.maxHp;
						div.hp=character.hp;
						div.update();
						if(character.dead==true){
							div.style.filter='grayscale(100%)';
							div.style['-webkit-filter']='grayscale(100%)';
							div.style.opacity=0.8;
						};
						dialog.appendChild(div);
						div.style.left=(5+(5+div.offsetWidth)*num)+'px';
						num++;
					};
				};
				game.kzol_clickAnimation(check);
				ui.window.appendChild(check);
				_status.kzol_wjms_divs.check=check;
				
				
				var check1=ui.create.div('.menu','<span style="cursor:pointer;">对决详情</span>');
				check1.style['font-size']='35px';
				check1.style['line-height']='40px';
				check1.style['font-family']="'STXinwei','xinwei'";
				check1.style['text-align']='center';
				check1.style.height='40px';
				check1.style.width='160px';
				check1.style.bottom='5px';
				check1.style.left='285px';
				check1.style.borderRadius='5px';
				check1.style.animation='fadelogIn .4s';
				check1.style['-webkit-animation']='fadelogIn .4s';
				if(lib.config.kzol_jilue.characters==undefined) check1.style.display='none';
				check1.onclick=function(){
					var background=ui.create.dialog('hidden');
					background.style.height='calc(100%)';
					background.style.width='calc(100%)';
					background.style.left='0px';
					background.style.top='0px';
					ui.window.appendChild(background);
					_status.kzol_wjms_divs2.background=background;
					var div1=ui.create.div();
					div1.style.height='100%';
					div1.style.width='100%';
					div1.style.left='0px';
					div1.style.top='0px';
					div1.onclick=function(){
						for(var i in _status.kzol_wjms_divs2){
							_status.kzol_wjms_divs2[i].delete();
							delete _status.kzol_wjms_divs2[i];
						};
					};
					background.appendChild(div1);
					var dialog=ui.create.dialog('hidden');
					dialog.classList.add('popped');
					dialog.classList.add('static');
					dialog.style.height='515px';
					dialog.style.width='700px';
					dialog.style.left='calc(50% - 350px)';
					dialog.style.top='calc(50% - 257.5px)';
					dialog.style['text-align']='left';
					dialog.style['overflow-x']='hidden';
					dialog.style['overflow-y']='hidden';
					ui.window.appendChild(dialog);
					_status.kzol_wjms_divs2.dialog=dialog;
					dialog.innerHTML='';
					var divs=ui.create.dialog('hidden');
					divs.style.right='0px';
					divs.style.left='0px';
					divs.style.top='0px';
					divs.style.bottom='0px';
					divs.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
					divs.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
					dialog.appendChild(divs);
					divs.innerHTML='';
					var num=0;
					for(var i=1;i<=100;i++){
						if(lib.config.kzol_jilue['enemy_round'+i]==undefined){
							break;
						}else{
							num++;
						};
					};
					var enemysList=[];
					var linesList=[];
					var div=ui.create.div();
					div.style.top='calc(50% - 25px)';
					div.style.left='5px';
					div.style.height='50px';
					div.style.width='50px';
					div.style.borderRadius='5px';
					div.style.zIndex=1;
					div.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 1px 5px';
					div.style.backgroundSize='cover';
					div.setBackground(lib.config.kzol_jilue.characters[0].name,'character');
					div.link=lib.config.kzol_jilue.characters[0].name;
					div.link1=0;
					div.link2=1;
					lib.setIntro(div);
					div.classList.add('character');
					divs.appendChild(div);
					enemysList.push(div);
					for(var i=num;i>=1;i--){
						var enemys=lib.config.kzol_jilue['enemy_round'+i];
						var num1=1;
						for(var j=enemys.length-1;j>=0;j--){
							var enemy=enemys[j];
							var top=0,left=0;
							if(i==num){
								top=5+(55*(Math.ceil(num1/2)-1));
								left=5+i*80+65*(num1%2);
								if(j==1){
									divs.style.height=(top+55)+'px';
									divs.style.width=(left+55)+'px';
									if(divs.offsetHeight<dialog.offsetHeight){
										dialog.style.height=divs.style.height;
										dialog.style.top='calc(50% - '+(dialog.offsetHeight/2)+'px)';
									}else{
										divs.style.top=((dialog.offsetHeight-divs.offsetHeight)/2)+'px'
									};
									if(divs.offsetWidth<dialog.offsetWidth){
										dialog.style.width=divs.style.width;
										dialog.style.left='calc(50% - '+(dialog.offsetWidth/2)+'px)';
									};
								};
							}else{
								var maxTop=55*(enemys.length-1);
								top='calc(50% - '+((maxTop+50)/2-55*(num1-1))+'px)';
								left=5+i*80;
							};
							var div=ui.create.div();
							if(i==num){
								div.style.top=top+'px';
							}else{
								div.style.top=top;
							};
							div.style.left=left+'px';
							div.style.height='50px';
							div.style.width='50px';
							div.style.cursor='pointer';
							div.style.borderRadius='5px';
							div.style.zIndex=1;
							div.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 1px 5px';
							div.style.backgroundSize='cover';
							div.setBackground(enemy,'character');
							div.link=enemy;
							div.link1=i;
							div.link2=num1;
							if(i==num&&num1%2==0) div.link3=enemysList[enemysList.length-1];
							if(i==num&&num1%2==1) div.link4=enemys[j-1];
							if(i<lib.config.kzol_jilue.round){
								div.style.filter='grayscale(100%)';
								div.style['-webkit-filter']='grayscale(100%)';
							};
							lib.setIntro(div);
							div.classList.add('character');
							divs.appendChild(div);
							div.onclick=function(){
								if(this.link3!=undefined){
									this.link3.onclick();
									return;
								};
								var enemy=this.link;
								var round=this.link1;
								var round1=lib.config.kzol_jilue.round;
								var enemyNum=this.link2;
								if(round>round1){
									game.say1('请先通关前一轮挑战');
									return;
								};
								if(round<round1){
									game.say1('此轮已通关');
									return;
								};
								var config_enemy1=lib.config.kzol_jilue['enemy_round'+lib.config.kzol_jilue.round].length;
								if(round==round1&&((round!=num&&config_enemy1<2)||(round==num&&config_enemy1<=2))){
									game.say1('本轮已作出选择');
									return;
								};
								if(confirm('是否挑战'+(this.link4==undefined?'':get.translation(this.link4)+'&')+get.translation(enemy)+'？')){
									var targets=[];
									var enemysList1={};
									for(var i=0;i<enemysList.length;i++){
										var div1=enemysList[i];
										if(enemysList1[div1.link1]==undefined) enemysList1[div1.link1]={};
										enemysList1[div1.link1][div1.link2]=div1;
									};
									if(round<num){
										for(var i in enemysList1){
											if(i<round) continue;
											for(var j in enemysList1[i]){
												var div1=enemysList1[i][j];
												if(i==num){
													if(j>=2*enemyNum-1&&j<2*(enemyNum+(i-round))+1) targets.push(div1);
												}else{
													if(j>=enemyNum&&j<enemyNum+(i-round)+1) targets.push(div1);
												};
											};
										};
									}else{
										targets.push(this);
										targets.push(enemysList1[round][enemyNum+1]);
									};
									var needToDelete=[];
									for(var i=0;i<enemysList.length;i++){
										var div1=enemysList[i];
										if(div1.link1<round) continue;
										if(!targets.contains(div1)){
											var config_enemy=lib.config.kzol_jilue['enemy_round'+div1.link1];
											if(div1.link1==num){
												needToDelete.push(config_enemy.length-div1.link2);
											}else{
												config_enemy.remove(config_enemy[config_enemy.length-div1.link2]);
											};
											div1.delete();
											if(div1.link_line!=undefined){
												for(var j=0;j<div1.link_line.length;j++){
													div1.link_line[j].delete();
												};
											};
											enemysList.remove(div1);
											i--;
										};
									};
									if(needToDelete.length>0){
										var list=[];
										for(var i=0;i<lib.config.kzol_jilue['enemy_round'+num].length;i++){
											if(!needToDelete.contains(i)) list.push(lib.config.kzol_jilue['enemy_round'+num][i]);
										};
										lib.config.kzol_jilue['enemy_round'+num]=list;
									};
									game.saveConfig('kzol_jilue',lib.config.kzol_jilue);
									for(var i in _status.kzol_wjms_divs){
										if(i=='reStart'||i=='check'||i=='check1') continue;
										ui.window.removeChild(_status.kzol_wjms_divs[i]);
										delete _status.kzol_wjms_divs[i];
									};
									game.kzol_wjms_menu(lib.config.kzol_jilue['enemy_round'+lib.config.kzol_jilue.round].length,true);
								};
							};
							enemysList.push(div);
							num1++;
						};
					};
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
					var createLine=function(div0,div1,bool){
						var x0=div0.offsetLeft+div0.offsetWidth/2;
						var y0=div0.offsetTop+div0.offsetHeight/2;
						var x1=div1.offsetLeft+div1.offsetWidth/2;
						var y1=div1.offsetTop+div1.offsetHeight/2;
						var div=document.createElement('div');
						div.style.zIndex=0;
						div.style.borderRadius='2px';
						if(bool==true){
							div.style.background='#ff7800';
						}else{
							div.style.background='#ffffff';
						};
						div.style.height='2px';
						div.style.width=Math.pow(Math.pow(x1-x0,2)+Math.pow(y1-y0,2),0.5)+'px';
						div.style.left=x0+'px';
						div.style.top=y0+'px';
						div.style.transform='rotate('+getAngle(x0,y0,x1,y1)+'deg)';
						div.style['transform-origin']='0 50%';
						divs.appendChild(div);
						if(div0.link_line==undefined) div0.link_line=[];
						div0.link_line.push(div);
						if(div1.link_line==undefined) div1.link_line=[];
						div1.link_line.push(div);
						linesList.push(div);
					};
					for(var i=0;i<enemysList.length;i++){
						var div0=enemysList[i];
						if(div0.link1<num){
							for(var j=0;j<enemysList.length;j++){
								var div1=enemysList[j];
								if(div0.link1==num-1){
									if(div1.link1==div0.link1+1&&(div1.link2==2*div0.link2||div1.link2==2*(div0.link2+1))){
										createLine(div0,div1);
									};
								}else{
									if(div1.link1==div0.link1+1&&(div1.link2==div0.link2||div1.link2==div0.link2+1)) createLine(div0,div1);
								};
							};
						}else if(div0.link1==num){
							if(div0.link2%2==1){
								for(var j=0;j<enemysList.length;j++){
									var div1=enemysList[j];
									if(div1.link1==num&&div1.link2==div0.link2+1) createLine(div0,div1,true);
								};
							};
						};
					};
				};
				game.kzol_clickAnimation(check1);
				ui.window.appendChild(check1);
				_status.kzol_wjms_divs.check1=check1;
			}else{
				ui.kzol_wjms_bs.style.display='';
				setInterval(function(){
					var str='未开始';
					if(lib.config.kzol_wjms.round!=undefined) str='第'+lib.config.kzol_wjms.round+'轮';
					ui.kzol_wjms_bs.innerHTML=str;
				},500);
				ui.window.hide();
				setTimeout(function(){
					ui.window.show();
				},500);
				if(lib.config.kzol_wjms.character==undefined){
					game.kzol_chooseCharacter();
				}else{
					game.kzol_wjms_menu(lib.config.mode_config.wjms.gk_num);
				};
			};
			var background=ui.create.dialog('hidden');
			background.style.height='calc(100%)';
			background.style.width='calc(100%)';
			background.style.left='0px';
			background.style.top='0px';
			ui.window.appendChild(background);
			_status.kzol_wjms_divs1.background=background;
			var div1=ui.create.div();
			div1.style.height='100%';
			div1.style.width='100%';
			div1.style.left='0px';
			div1.style.top='0px';
			div1.onclick=function(){
				for(var i in _status.kzol_wjms_divs1){
					_status.kzol_wjms_divs1[i].hide();
				};
				for(var i in _status.kzol_wjms_divs){
					_status.kzol_wjms_divs[i].show();
				};
			};
			background.appendChild(div1);
			_status.kzol_wjms_divs1.div1=div1;
			var dialog=ui.create.dialog('hidden');
			dialog.style.height='515px';
			dialog.style.width='700px';
			dialog.style.left='calc(50% - 350px)';
			dialog.style.top='calc(50% - 257.5px)';
			dialog.classList.add('popped');
			dialog.classList.add('static');
			ui.window.appendChild(dialog);
			_status.kzol_wjms_divs1.dialog=dialog;
			for(var i in _status.kzol_wjms_divs1){
				_status.kzol_wjms_divs1[i].hide();
			};
			var avatar=ui.create.div('.player');
			avatar.style.height='250px';
			avatar.style.width='187.5px';
			avatar.style.left='36.25px';
			avatar.style.top='5px';
			if(_status.mode=='wujin1'){
				if(lib.config.kzol_wujin1.character!=undefined) avatar.setBackground(lib.config.kzol_wujin1.character,'character');
			}else if(_status.mode=='jilue'){
				if(lib.config.kzol_jilue.characters!=undefined){
					avatar.setBackground(lib.config.kzol_jilue.characters[0].name,'character');
				};
			}else{
				if(lib.config.kzol_wjms.character!=undefined) avatar.setBackground(lib.config.kzol_wjms.character,'character');
			};
			dialog.appendChild(avatar);
			_status.kzol_wjms_divs1.avatar=avatar;
			var name=ui.create.div('');
			name.style.width='25px';
			name.style.height=(avatar.offsetHeight-20)+'px';
			name.style.left='5px';
			name.style.top='5px';
			name.style['font-size']='25px';
			name.style['font-family']="'STXinwei','xinwei'";
			setInterval(function(){
				if(_status.mode=='wujin1'){
					if(lib.config.kzol_wujin1.character!=undefined) name.innerHTML=get.translation(lib.config.kzol_wujin1.character);
				}else if(_status.mode=='jilue'){
					if(lib.config.kzol_jilue.characters!=undefined){
						name.innerHTML=get.translation(lib.config.kzol_jilue.characters[0].name);
					};
				}else{
					if(lib.config.kzol_wjms.character!=undefined) name.innerHTML=get.translation(lib.config.kzol_wjms.character);
				};
			},500);
			avatar.appendChild(name);
			_status.kzol_wjms_divs1.name=name;
			var hp=ui.create.div('');
			hp.style.width='calc(100% - 10px)';
			hp.style.height='18px';
			hp.style.left='5px';
			hp.style.bottom='5px';
			hp.style['font-size']='18px';
			hp.style['text-align']='right';
			hp.style['font-family']="'STXinwei','xinwei'";
			setInterval(function(){
				if(_status.mode=='wujin1'){
					if(lib.config.kzol_wujin1.hp!=undefined&&lib.config.kzol_wujin1.maxHp!=undefined){
						hp.innerHTML='体力：'+lib.config.kzol_wujin1.hp+'/'+lib.config.kzol_wujin1.maxHp;
					};
				}else if(_status.mode=='jilue'){
					if(lib.config.kzol_jilue.characters!=undefined){
						hp.innerHTML='体力：'+lib.config.kzol_jilue.characters[0].hp+'/'+lib.config.kzol_jilue.characters[0].maxHp;
					};
				}else{
					if(lib.config.kzol_wjms.hp!=undefined&&lib.config.kzol_wjms.maxHp!=undefined){
						hp.innerHTML='体力：'+lib.config.kzol_wjms.hp+'/'+lib.config.kzol_wjms.maxHp;
					};
				};
			},500);
			avatar.appendChild(hp);
			_status.kzol_wjms_divs1.hp=hp;
			var bw=ui.create.div('.menu');
			bw.style.height='250px';
			bw.style.width='250px';
			bw.style.left='5px';
			bw.style.top='260px';
			bw.style['text-align']='left';
			dialog.appendChild(bw);
			_status.kzol_wjms_divs1.bw=bw;
			var bag=ui.create.div('.menu');
			bag.style.height='505px';
			bag.style.width='435px';
			bag.style.left='260px';
			bag.style.top='5px';
			bag.style['text-align']='left';
			bag.style['overflow-x']='hidden';
			bag.style['overflow-y']='scroll';
			lib.setScroll(bag);
			dialog.appendChild(bag);
			_status.kzol_wjms_divs1.bag=bag;
			if(lib.config.kzol_bag!=undefined){
				game.kzol_rushBag();
			};
			_status.kzol_wjms_event=event;
		},
		game:{
			kzol_jilue_init:function(div,character){
				if(!lib.character[character]) return;
				var info=lib.character[character];
				if(!info) info=['','',1,[],[]];
				if(!info[4]) info[4]=[];
				div.classList.add('fullskin');
				div.node.avatar.setBackground(character,'character');
				div.node.avatar.show();
				div.name=character;
				div.group=info[1];
				div.skills=info[3];
				div.node.name.dataset.nature=get.groupnature(div.group);
				lib.setIntro(div);
				div.node.name.innerHTML=get.slimName(character);
			},
			kzol_clickAnimation:function(div){
				div.style.transition='opacity 0.5s';
				div.addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
					this.style.transform='scale(0.95)';
				});
				div.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
					this.style.transform='';
				});
				div.onmouseout=function(){
					this.style.transform='';
				};
			},
			kzol_randomGetSkill:function(){
				var list=[];
				for(var i in lib.characterPack){
					for(var j in lib.characterPack[i]){
						var character=lib.characterPack[i][j];
						if(character[3]!=undefined){
							for(var k=0;k<character[3].length;k++){
								list.push(character[3][k]);
							};
						};
					};
				};
				return list.randomGet();
			},
			kzol_wjms_menu:function(num,bool){
				if(num==undefined) num=1;
				var str_dialog=ui.create.div();
				str_dialog.style.height='30px';
				str_dialog.style.width='calc(90%)';
				str_dialog.style.top='calc(12.5% - 15px)';
				str_dialog.style.left='calc(5%)';
				str_dialog.style['font-size']='30px';
				str_dialog.style['text-align']='center';
				str_dialog.style['font-family']="'STXinwei','xinwei'";
				str_dialog.style['line-height']='30px';
				if(_status.mode=='wujin'){
					str_dialog.innerHTML='请选择下一轮的事件（双击选择）';
				}else if(_status.mode=='jilue'){
					str_dialog.style['text-shadow']='0 0 4px rgba(0,0,0,0.6),10px -2px 6px #feec85,-4px -4px 8px #ffae34,4px -8px 10px #ec760c,-4px -12px 12px #cd4606,0 -16px 14px #973716,2px -18px 16px #451b0e';
					if(lib.config.kzol_jilue.finish==true){
						str_dialog.innerHTML='！恭喜通关！';
					}else{
						str_dialog.innerHTML='请迎接下一轮挑战';
					};
				}else{
					str_dialog.style['text-shadow']='0 0 4px rgba(0,0,0,0.6),10px -2px 6px #feec85,-4px -4px 8px #ffae34,4px -8px 10px #ec760c,-4px -12px 12px #cd4606,0 -16px 14px #973716,2px -18px 16px #451b0e';
					str_dialog.innerHTML='请迎接下一轮挑战';
				};
				ui.window.appendChild(str_dialog);
				_status.kzol_wjms_divs.str_dialog=str_dialog;
				for(var i=0;i<num;i++){
					var choice=ui.create.div('');
					choice.style.height='400px';
					choice.style.width='200px';
					if(_status.mode=='wujin1'){
						choice.style.top='calc(50% - 175px)';
						choice.style.left='calc(50% - 100px)';
					}else{
						choice.style.top='calc(20%)';
						var num1=ui.window.offsetWidth-parseInt(num)*200;
						choice.style.left=(num1/(parseInt(num)+1)*(i+1)+200*i)+'px';
					};
					if(bool==true){
						choice.style.animation='fadeShow .8s';
						choice.style['-webkit-animation']='fadeShow .8s';
					};
					choice.style['cursor']='pointer';
					choice.setBackgroundImage('extension/扩展ol/wjms_bg.png');
					choice.style.backgroundSize="100% 100%";
					if(_status.mode=='wujin1'){
						choice.link=lib.config.kzol_wujin1.enemy;
					}else if(_status.mode=='jilue'){
						choice.link=lib.config.kzol_jilue['enemy_round'+lib.config.kzol_jilue.round][i];
					}else{
						choice.link=lib.config.kzol_wjms['choice'+i];
					};
					choice.onclick=function(){
						if(_status.mode=='jilue'){
							if(lib.config.kzol_jilue.finish==true){
								game.say1('本次极略对决已结束，请重置');
								return;
							};
							var config_enemy1=lib.config.kzol_jilue['enemy_round'+lib.config.kzol_jilue.round].length;
							var config_enemy2=lib.config.kzol_jilue['enemy_round'+(lib.config.kzol_jilue.round+1)];
							if((config_enemy2!=undefined&&config_enemy1>=2)||(config_enemy2==undefined&&config_enemy1>2)){
								game.say1('请先在“对决详情”中选择本轮的挑战对象');
								return;
							};
						};
						var gk=lib.kzol_wjms_gk[this.link];
						if(_status.kzol_wjms_clicknum==undefined) _status.kzol_wjms_clicknum=0;
						_status.kzol_wjms_clicknum++;
						_status.wjms_timeout=setTimeout(function(){
							if(_status.kzol_wjms_clicknum>=2){
								if(gk.character!=undefined){
									for(var i in _status.kzol_wjms_divs){
										_status.kzol_wjms_divs[i].hide();
									};
									ui.window.appendChild(ui.arena);
									if(lib.config.show_history=='left'){
										ui.window.classList.add('leftbar');
										ui.window.classList.remove('rightbar');
									}else if(lib.config.show_history=='right'){
										ui.window.classList.remove('leftbar');
										ui.window.classList.add('rightbar');
									}else{
										ui.window.classList.remove('leftbar');
										ui.window.classList.remove('rightbar');
									};
									if(_status.mode=='jilue'){
										var config_enemy1=lib.config.kzol_jilue['enemy_round'+lib.config.kzol_jilue.round];
										if(config_enemy1.length>=2){
											game.prepareArena(3);
										}else{
											var nandu=lib.config.kzol_jilue.nandu;
											if(nandu=='极限'){
												game.prepareArena(3);
											}else{
												game.prepareArena(2);
											};
										};
									}else{
										game.prepareArena(2);
									};
									if(window.decadeUI&&window.decadeUI.animate&&window.decadeUI.animate.frames){ //十周年ui适配
										window.decadeUI.animate.arena=ui.arena.appendChild(document.createElement('canvas'));
										window.decadeUI.animate.frames[2].canvas=window.decadeUI.animate.arena;
									};
									if(ui.auto) ui.auto.show();
									for(var i=0;i<game.players.length;i++){
										var pl=game.players[i];
										pl.getId();
										if(pl==game.me){
											pl.identity='me';
										}else{
											pl.identity='enemy';
										};
									};
									if(_status.mode=='wujin1'){
										game.me.init(lib.config.kzol_wujin1.character);
										game.me.maxHp=lib.config.kzol_wujin1.maxHp;
										game.me.hp=lib.config.kzol_wujin1.hp;
									}else if(_status.mode=='jilue'){
										game.me.useSkill('kzol_jilue_chooseCharacter');
									}else{
										game.me.init(lib.config.kzol_wjms.character);
										game.me.maxHp=lib.config.kzol_wjms.maxHp;
										game.me.hp=lib.config.kzol_wjms.hp;
									};
									if(_status.mode=='jilue'){
										var config_enemy1=lib.config.kzol_jilue['enemy_round'+lib.config.kzol_jilue.round];
										if(config_enemy1.length>=2){
											game.me.next.init(config_enemy1[0]);
											game.me.next.next.init(config_enemy1[1]);
										}else{
											game.me.next.init(gk.character);
											var nandu=lib.config.kzol_jilue.nandu;
											if(nandu=='极限') game.me.next.next.init(game.kzol_getEvent(true));
										};
									}else{
										game.me.next.init(gk.character);
									};
									game.me.update();
									if(_status.mode=='wujin1'){
										for(var i=0;i<game.players.length;i++){
											var pl=game.players[i];
											var config=lib.config.kzol_wujin1;
											if(config.skill!=undefined&&pl.identity=='me') pl.addSkill(config.skill);
											if(pl.identity=='enemy'){
												if(config.e_skill!=undefined) pl.addSkill(config.e_skill);
												if(config.e_maxHp1!=undefined){
													pl.maxHp+=config.e_maxHp1;
													pl.hp+=config.e_maxHp1;
													pl.update();
												};
											};
										};
									};
									if(_status.mode=='jilue'){
										_status.kzol_jilue_beChosen1=gk.character;
									};
									game.kzol_wjms_start();
								};
							};
							clearTimeout(_status.wjms_timeout);
							delete _status.kzol_wjms_clicknum;
							delete _status.wjms_timeout;
						},250);
					};
					ui.window.appendChild(choice);
					_status.kzol_wjms_divs['choice'+i]=choice;
				};
				var zt=ui.create.div('.menu','<span style="cursor:pointer;">状态</span>');
				zt.style['font-size']='35px';
				zt.style['line-height']='40px';
				zt.style['font-family']="'STXinwei','xinwei'";
				zt.style['text-align']='center';
				zt.style.height='40px';
				zt.style.width='110px';
				zt.style.bottom='5px';
				zt.style.left='calc(100% - 115px)';
				zt.style.borderRadius='5px';
				zt.style.animation='fadelogIn .4s';
				zt.style['-webkit-animation']='fadelogIn .4s';
				zt.onclick=function(){
					for(var i in _status.kzol_wjms_divs){
						_status.kzol_wjms_divs[i].hide();
					};
					for(var i in _status.kzol_wjms_divs1){
						_status.kzol_wjms_divs1[i].show();
					};
				};
				game.kzol_clickAnimation(zt);
				ui.window.appendChild(zt);
				_status.kzol_wjms_divs.zt=zt;
				if(_status.mode=='wujin1'&&lib.config.mode_config.wjms.bwx_wujin1!=true) _status.kzol_wjms_divs.zt.style.display='none';
				if(_status.mode=='jilue'&&lib.config.mode_config.wjms.bwx_jilue!=true) _status.kzol_wjms_divs.zt.style.display='none';
				game.kzol_wjms_openChoice();
			},
			kzol_chooseCharacter:function(){
				var chooseCharacter_str=ui.create.dialog('hidden');
				chooseCharacter_str.style.height='30px';
				chooseCharacter_str.style.width='calc(90%)';
				chooseCharacter_str.style.top='calc(10% - 15px)';
				chooseCharacter_str.style.left='calc(5%)';
				chooseCharacter_str.style['font-size']='30px';
				chooseCharacter_str.style['text-align']='center';
				chooseCharacter_str.style['font-family']="'STXinwei','xinwei'";
				chooseCharacter_str.style['line-height']='30px';
				if(_status.mode=='jilue'){
					chooseCharacter_str.innerHTML='请选择进行极略对决的初始武将（双击选择）';
				}else{
					chooseCharacter_str.innerHTML='请选择进入无尽轮回的武将（双击选择）';
				};
				ui.window.appendChild(chooseCharacter_str);
				var chooseCharacter=ui.create.characterDialog('heightset');
				chooseCharacter.style.height='calc(85%)'
				chooseCharacter.style.width='calc(90%)'
				chooseCharacter.style.top='calc(15%)'
				chooseCharacter.style.left='calc(5%)'
				ui.window.appendChild(chooseCharacter);
				for(var i=0;i<chooseCharacter.buttons.length;i++){
					var button=chooseCharacter.buttons[i];
					button.onclick=function(){
						var name=this.link;
						if(_status.kzol_wjms_clicknum1==undefined) _status.kzol_wjms_clicknum1=0;
						_status.kzol_wjms_clicknum1++;
						_status.wjms_timeout1=setTimeout(function(){
							if(_status.kzol_wjms_clicknum1>=2){
								if(lib.config.kzol_jswj!=undefined&&lib.config.kzol_jswj[name]==false) return ;
								chooseCharacter_str.delete();
								chooseCharacter.delete();
								if(_status.mode=='wujin1'){
									lib.config.kzol_wujin1.round=1;
									lib.config.kzol_wujin1.character=name;
									for(var i in lib.characterPack){
										for(var j in lib.characterPack[i]){
											var character=lib.characterPack[i][j];
											if(j==name){
												lib.config.kzol_wujin1.hp=get.infoHp(character[2]);
												lib.config.kzol_wujin1.maxHp=get.infoMaxHp(character[2]);
											};
										};
									};
									if(lib.config.kzol_wujin1.enemy==undefined){
										lib.config.kzol_wujin1.enemy=game.kzol_getEvent();
										game.saveConfig('kzol_wujin1',lib.config.kzol_wujin1);
									};
									lib.config.kzol_wujin1.maxHp1=0;
									lib.config.kzol_wujin1.dianshu=0;
									lib.config.kzol_wujin1.attack=0;
									lib.config.kzol_wujin1.maxHandCard=0;
									lib.config.kzol_wujin1.draw=0;
									lib.config.kzol_wujin1.recover=0;
									//lib.config.kzol_wujin1.skill=[];
									lib.config.kzol_wujin1.e_maxHp1=0;
									lib.config.kzol_wujin1.e_attack=0;
									lib.config.kzol_wujin1.e_maxHandCard=0;
									lib.config.kzol_wujin1.e_draw=0;
									lib.config.kzol_wujin1.e_recover=0;
									lib.config.kzol_wujin1.e_skill=game.kzol_randomGetSkill();
									game.saveConfig('kzol_wujin1',lib.config.kzol_wujin1);
									_status.kzol_wjms_divs1.avatar.setBackground(lib.config.kzol_wujin1.character,'character');
									if(game.kzol_updateStr!=undefined) game.kzol_updateStr();
									if(game.kzol_updateStr1!=undefined) game.kzol_updateStr1();
									if(_status.kzol_wjms_divs.shuxing!=undefined) _status.kzol_wjms_divs.shuxing.style.display='';
									if(_status.kzol_wjms_divs.shuxing1!=undefined) _status.kzol_wjms_divs.shuxing1.style.display='';
									game.kzol_wjms_menu();
								}else if(_status.mode=='jilue'){
									lib.config.kzol_jilue.finish=false;
									lib.config.kzol_jilue.round=1;
									var hp=3;
									var maxHp=3;
									for(var i in lib.characterPack){
										for(var j in lib.characterPack[i]){
											var character=lib.characterPack[i][j];
											if(j==name){
												hp=get.infoHp(character[2]);
												maxHp=get.infoMaxHp(character[2]);
											};
										};
									};
									lib.config.kzol_jilue.characters={};
									lib.config.kzol_jilue.characters_num=0;
									lib.config.kzol_jilue.characters[0]={
										name:name,
										hp:hp,
										maxHp:maxHp,
										dead:false,
									};
									lib.config.kzol_jilue.characters_num+=1;
									var round_num=parseInt(lib.config.mode_config.wjms.round_jilue);
									for(var i=0;i<round_num;i++){
										var list=[];
										var character_num=i+2;
										if(i==round_num-1) character_num=character_num*2;
										for(var j=0;j<character_num;j++){
											list.push(game.kzol_getEvent(true));
										};
										lib.config.kzol_jilue['enemy_round'+(i+1)]=list;
									};
									lib.config.kzol_jilue.nandu=lib.config.mode_config.wjms.nandu==undefined?'简单':lib.config.mode_config.wjms.nandu;
									game.saveConfig('kzol_jilue',lib.config.kzol_jilue);
									_status.kzol_wjms_divs1.avatar.setBackground(lib.config.kzol_jilue.characters[0].name,'character');
									if(_status.kzol_wjms_divs.reStart!=undefined) _status.kzol_wjms_divs.reStart.style.display='';
									if(_status.kzol_wjms_divs.check!=undefined) _status.kzol_wjms_divs.check.style.display='';
									if(_status.kzol_wjms_divs.check1!=undefined) _status.kzol_wjms_divs.check1.style.display='';
									game.kzol_wjms_menu(lib.config.kzol_jilue['enemy_round'+lib.config.kzol_jilue.round].length);
								}else{
									lib.config.kzol_wjms.round=1;
									lib.config.kzol_wjms.character=name;
									for(var i in lib.characterPack){
										for(var j in lib.characterPack[i]){
											var character=lib.characterPack[i][j];
											if(j==name){
												lib.config.kzol_wjms.hp=get.infoHp(character[2]);
												lib.config.kzol_wjms.maxHp=get.infoMaxHp(character[2]);
											};
										};
									};
									for(var i=0;i<lib.config.mode_config.wjms.gk_num;i++){
										if(lib.config.kzol_wjms['choice'+i]==undefined){
											lib.config.kzol_wjms['choice'+i]=game.kzol_getEvent();
										};
									};
									game.saveConfig('kzol_wjms',lib.config.kzol_wjms);
									_status.kzol_wjms_divs1.avatar.setBackground(lib.config.kzol_wjms.character,'character');
									game.kzol_wjms_menu(lib.config.mode_config.wjms.gk_num);
								};
							};
							clearTimeout(_status.wjms_timeout1);
							delete _status.kzol_wjms_clicknum1;
							delete _status.wjms_timeout1;
						},250);
					};
				};
			},
			kzol_rushBag:function(){
				var bag=_status.kzol_wjms_divs1.bag;
				var bw=_status.kzol_wjms_divs1.bw;
				if(bag==undefined) return ;
				if(bw==undefined) return ;
				for(var i=0;i<bag.childNodes.length;i++){
					bag.removeChild(bag.childNodes[i]);
					i--;
				};
				for(var i=0;i<bw.childNodes.length;i++){
					bw.removeChild(bw.childNodes[i]);
					i--;
				};
				var num_left=0;
				var num_top=0;
				var num=10;
				var num1=10;
				var click_func=function(){
					var item=this;
					var h=item.offsetHeight;
					var w=item.offsetWidth;
					item.style['zIndex']=989;
					item.style['pointer-events']='none';
					item.style.top=(window.event.clientY/game.documentZoom-h/2)+'px';
					item.style.left=(window.event.clientX/game.documentZoom-w/2)+'px';
					item.style.transition='all 0s';
					ui.window.appendChild(item);
					var move_bg=ui.create.dialog('hidden');
					move_bg.style.height='calc(100%)';
					move_bg.style.width='calc(100%)';
					move_bg.style.left='0px';
					move_bg.style.top='0px';
					move_bg.style['zIndex']=99999;
					move_bg.link=this.link;
					move_bg.link1=this.link1;
					move_bg.onclick=function(){
						var x=window.event.clientX/game.documentZoom;
						var y=window.event.clientY/game.documentZoom;
						var l=_status.kzol_wjms_divs1.dialog.offsetLeft+_status.kzol_wjms_divs1.bw.offsetLeft;
						var t=_status.kzol_wjms_divs1.dialog.offsetTop+_status.kzol_wjms_divs1.bw.offsetTop;
						var w1=_status.kzol_wjms_divs1.bw.offsetWidth;
						var h1=_status.kzol_wjms_divs1.bw.offsetHeight;
						var l_b=_status.kzol_wjms_divs1.dialog.offsetLeft+_status.kzol_wjms_divs1.bag.offsetLeft;
						var t_b=_status.kzol_wjms_divs1.dialog.offsetTop+_status.kzol_wjms_divs1.bag.offsetTop;
						var w1_b=_status.kzol_wjms_divs1.bag.offsetWidth;
						var h1_b=_status.kzol_wjms_divs1.bag.offsetHeight;
						if((x-w/2>=l&&x+w/2<=l+w1&&y-h/2>=t&&y+h/2<=t+h1)||(x-w/2>=l_b&&x+w/2<=l_b+w1_b&&y-h/2>=t_b&&y+h/2<=t_b+h1_b)){
							if(x-w/2>=l&&x+w/2<=l+w1&&y-h/2>=t&&y+h/2<=t+h1){
								if(this.link.name.indexOf('lhs')!=-1&&item.link_on=='bag'){
									var bool=true;
									for(var i in lib.config.kzol_wjms.wjbw_equiped){
										if(i.indexOf('lhs')!=-1) bool=false;
									};
								};
								if(bool==false){
									game.say1('宝物匣内只能放入一个灵魂石');
									return ;
								};
								if(lib.config.kzol_wjms.wjbw_equiped[this.link.name]!=undefined&&item.link_on=='bag'){
									game.say1('宝物匣内已有同名宝物，放入失败');
									return ;
								};
								var bool=true;
								for(var i in lib.config.kzol_wjms.wjbw_equiped){
									if(i==this.link.name) continue;
									var l2=lib.config.kzol_wjms.wjbw_equiped[i].wjms_left;
									var t2=lib.config.kzol_wjms.wjbw_equiped[i].wjms_top;
									if((x-w/2)-l>=l2&&(x-w/2)-l<=l2+50&&(y-h/2)-t>=t2&&(y-h/2)-t<=t2+50) bool=false;
									if((x-w/2)-l+50>=l2&&(x-w/2)-l+50<=l2+50&&(y-h/2)-t>=t2&&(y-h/2)-t<=t2+50) bool=false;
									if((x-w/2)-l>=l2&&(x-w/2)-l<=l2+50&&(y-h/2)-t+50>=t2&&(y-h/2)-t+50<=t2+50) bool=false;
									if((x-w/2)-l+50>=l2&&(x-w/2)-l+50<=l2+50&&(y-h/2)-t+50>=t2&&(y-h/2)-t+50<=t2+50) bool=false;
								};
								if(bool==false){
									game.say1('宝物匣内宝物无法重叠，放入失败');
									return ;
								};
								if(item.link_on=='bag'){
									game.loseItem2(this.link1,1,false);
									lib.config.kzol_wjms.wjbw_equiped[this.link.name]={};
									for(var i in this.link){
										lib.config.kzol_wjms.wjbw_equiped[this.link.name][i]=this.link[i];
									};
								};
								lib.config.kzol_wjms.wjbw_equiped[this.link.name].num=1;
								lib.config.kzol_wjms.wjbw_equiped[this.link.name].wjms_left=((x-w/2)-l);
								lib.config.kzol_wjms.wjbw_equiped[this.link.name].wjms_top=((y-h/2)-t);
								game.saveConfig('kzol_wjms',lib.config.kzol_wjms);
								move_bg.delete();
								item.style.left=((x-w/2)-l)+'px';
								item.style.top=((y-h/2)-t)+'px';
								item.style['zIndex']=0;
								item.style['pointer-events']='';
								item.style.transition='';
								_status.kzol_wjms_divs1.bw.appendChild(item);
								item.link_on='bw';
								//game.say1('放入成功');
							}else{
								if(lib.config.kzol_wjms.wjbw_equiped[this.link.name]!=undefined&&item.link_on=='bw'){
									lib.config.kzol_bag[lib.config.kzol_bag_num]={};
									for(var i in lib.config.kzol_wjms.wjbw_equiped[this.link.name]){
										if(i=='wjms_left'||i=='wjms_top') continue;
										lib.config.kzol_bag[lib.config.kzol_bag_num][i]=lib.config.kzol_wjms.wjbw_equiped[this.link.name][i];
									};
									item.link1=lib.config.kzol_bag_num;
									game.saveConfig('kzol_bag',lib.config.kzol_bag);
									game.saveConfig('kzol_bag_num',lib.config.kzol_bag_num+1);
									delete lib.config.kzol_wjms.wjbw_equiped[this.link.name];
									game.saveConfig('kzol_wjms',lib.config.kzol_wjms);
								};
								move_bg.delete();
								item.style.left=((x-w/2)-l_b)+'px';
								item.style.top=((y-h/2)-t_b+_status.kzol_wjms_divs1.bag.scrollTop)+'px';
								item.style['zIndex']=0;
								item.style['pointer-events']='';
								_status.kzol_wjms_divs1.bag.appendChild(item);
								item.link_on='bag';
							};
						}else{
							game.say1('该位置无法放入宝物');
						};
					};
					ui.window.appendChild(move_bg);
					move_bg.onmousemove=function(){
						var x=window.event.clientX/game.documentZoom;
						var y=window.event.clientY/game.documentZoom;
						item.style.top=(y-h/2)+'px';
						item.style.left=(x-w/2)+'px';
					};
					move_bg.addEventListener('touchmove',function(e){
						if(e.changedTouches) e=e.changedTouches[e.changedTouches.length-1];
						var x=e.clientX/game.documentZoom;
						var y=e.clientY/game.documentZoom;
						item.style.top=(y-h/2)+'px';
						item.style.left=(x-w/2)+'px';
					});
				};
				for(var i in lib.config.kzol_bag){
					var item=lib.config.kzol_bag[i];
					if(item.type=="baowu"){
						var a=ui.create.div();
						a.style.height='50px';
						a.style.width='50px';
						a.style.top=(num_top+num1)+'px';
						a.style.left=(num_left+num)+'px';
						a.style.borderRadius='5px';
						a.style.backgroundSize="cover";
						if(item.noBorder==true){
							a.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/'+item.name+'.png'+'")';
						}else if(item.character){
							a.setBackground(item.character,'character');
							if(item.noBorder!=true){
								var str=a.style.backgroundImage;
								str='url("'+lib.assetURL+'extension/扩展ol/item.png"),'+str;
								a.style.backgroundImage=str;
							};
						}else{
							a.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/item.png"),'+'url("'+lib.assetURL+'extension/扩展ol/'+item.name+'.png'+'")';
						};
						a.link=item;
						a.link1=i;
						a.link_on='bag';
						a.onclick=click_func;
						bag.appendChild(a);
						num_left+=50;
						num+=10;
						if(num_left+50+num>bag.offsetWidth){
							num_left=0;
							num=10;
							num_top+=50;
							num1+=10;
						};
					};
				};
				for(var i in lib.config.kzol_wjms.wjbw_equiped){
					var item=lib.config.kzol_wjms.wjbw_equiped[i];
					var a=ui.create.div();
					a.style.height='50px';
					a.style.width='50px';
					a.style.top=(item.wjms_top)+'px';;
					a.style.left=(item.wjms_left)+'px';;
					a.style.borderRadius='5px';
					a.style.backgroundSize="cover";
					if(item.noBorder==true){
						a.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/'+item.name+'.png'+'")';
					}else if(item.character){
						a.setBackground(item.character,'character');
						if(item.noBorder!=true){
							var str=a.style.backgroundImage;
							str='url("'+lib.assetURL+'extension/扩展ol/item.png"),'+str;
							a.style.backgroundImage=str;
						};
					}else{
						a.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/item.png"),'+'url("'+lib.assetURL+'extension/扩展ol/'+item.name+'.png'+'")';
					};
					a.link=item;
					a.link_on='bw';
					a.onclick=click_func;
					bw.appendChild(a);
				};
			},
			kzol_loop:game.loop,
			kzol_wjms_start:function(){
				if(lib.config.show_sortcard) ui.sortCard.style.display='';
				if(ui.arena&&ui.arena.classList.contains('choose-character')) ui.arena.classList.remove('choose-character');
				if(lib.config.show_cardpile){
					ui.cardPileButton.style.display='';
				}else{
					ui.cardPileButton.style.display='none';
				};
				game.gameDraw();
				var pl=game.players.randomGet();
				if(_status.mode=='jilue'){
					var nandu=lib.config.kzol_jilue.nandu;
					if(nandu=='简单'){
						pl=game.me;
					}else if(nandu=='困难'||nandu=='极限'){
						var list=[];
						for(var i=0;i<game.players.length;i++){
							if(game.players[i]==game.me) continue;
							list.push(game.players[i]);
						};
						pl=list.randomGet();
					};
				};
				game.phaseLoop(pl);
				for(var i=0;i<game.players.length;i++){
					if(game.players[i].identity==pl.identity){
						game.players[i].setIdentity('先');
						game.players[i].node.identity.dataset.color='zhu';
					}else{
						game.players[i].setIdentity('后');
						game.players[i].node.identity.dataset.color='fan';
					};
				};
				game.loop=game.kzol_loop;
				game.loop();
				_status.event.trigger('gameStart');
			},
			kzol_wjms_openChoice:function(){
				var num=0;
				for(var i in _status.kzol_wjms_divs){
					if(i.indexOf('choice')!=-1){
						var div=_status.kzol_wjms_divs[i];
						if(_status.mode=='wujin1'){
							div.link=lib.config.kzol_wujin1.enemy;
						}else if(_status.mode=='jilue'){
							
						}else{
							div.link=lib.config.kzol_wjms['choice'+num];
						};
						var gk=lib.kzol_wjms_gk[div.link];
						if(gk==undefined&&lib.config.mode_config.wjms.jcwj==true){
							alert('未检测到当前轮次武将-'+get.translation(div.link)+'（'+div.link+'），即将刷新游戏（可能是该武将/该武将所在武将包被禁用了）');
							game.reload();
							continue;
						};
						var name=ui.create.div('');
						name.style.height='25x';
						name.style.width='calc(100% - 10px)';
						name.style.left='5px';
						name.style.bottom='90px';
						name.style['font-size']='25px';
						name.style['text-align']='center';
						name.style['font-family']="'STXinwei','xinwei'";
						//name.style['line-height']='25px';
						name.style['background-image']='linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))';
						name.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
						name.innerHTML=gk.name;
						div.appendChild(name);
						if(gk.character!=undefined){
							var character_div=ui.create.button(gk.character,'character',div,true);
							character_div.style.width='100px';
							character_div.style.height='120px';
							character_div.style.left='calc(50% - 50px)';
							character_div.style.top='110px';
							character_div.style.margin='0px';
							character_div.link=gk.character;
							lib.setIntro(character_div);
							//div.appendChild(character_div);
						};
						num++;
					};
				};
			},
			kzol_wjms_deleteChoice:function(){
				for(var i in _status.kzol_wjms_divs){
					if(i.indexOf('choice')!=-1){
						var num=0;
						for(var j=0;j<_status.kzol_wjms_divs[i].childNodes.length;j++){
							num++;
						};
						for(var j=0;j<num;j++){
							_status.kzol_wjms_divs[i].removeChild(_status.kzol_wjms_divs[i].childNodes[0]);
						};
					};
				};
			},
			kzol_wjms_over:function(result){
				if(_status.over) return;
				if(_status.mode=='wujin1'&&result==true&&lib.config.kzol_wujin1.round!=undefined){
					if(_status.kzol_gainShuijing==undefined) _status.kzol_gainShuijing=0;
					_status.kzol_gainShuijing+=lib.config.kzol_wujin1.round*2;
					var num_random=0.05+lib.config.kzol_wujin1.round/150;
					if(num_random>0.45) num_random=0.45;
					if(Math.random()<=num_random&&game.gainItem!=undefined&&lib.kzol_bag!=undefined){
						game.gainItem('kzol_bw_lhs_'+lib.config.kzol_wujin1.enemy,1);
					};
				};
				var i,j,k,num,table,tr,td,dialog;
				_status.over=true;
				ui.control.show();
				ui.clear();
				game.stopCountChoose();
				if(ui.time3){
					clearInterval(ui.time3.interval);
				}
				if((game.layout=='long2'||game.layout=='nova')&&!game.chess){
					//ui.arena.classList.add('choose-character');
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
						td.innerHTML=num;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.players[i].stat.length;j++){
							if(game.players[i].stat[j].damaged!=undefined) num+=game.players[i].stat[j].damaged;
						}
						td.innerHTML=num;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.players[i].stat.length;j++){
							if(game.players[i].stat[j].gain!=undefined) num+=game.players[i].stat[j].gain;
						}
						td.innerHTML=num;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.players[i].stat.length;j++){
							for(k in game.players[i].stat[j].card){
								num+=game.players[i].stat[j].card[k];
							}
						}
						td.innerHTML=num;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.players[i].stat.length;j++){
							if(game.players[i].stat[j].kill!=undefined) num+=game.players[i].stat[j].kill;
						}
						td.innerHTML=num;
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
						td.innerHTML=num;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.dead[i].stat.length;j++){
							if(game.dead[i].stat[j].damaged!=undefined) num+=game.dead[i].stat[j].damaged;
						}
						td.innerHTML=num;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.dead[i].stat.length;j++){
							if(game.dead[i].stat[j].gain!=undefined) num+=game.dead[i].stat[j].gain;
						}
						td.innerHTML=num;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.dead[i].stat.length;j++){
							for(k in game.dead[i].stat[j].card){
								num+=game.dead[i].stat[j].card[k];
							}
						}
						td.innerHTML=num;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.dead[i].stat.length;j++){
							if(game.dead[i].stat[j].kill!=undefined) num+=game.dead[i].stat[j].kill;
						}
						td.innerHTML=num;
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
						td.innerHTML=num;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.additionaldead[i].stat.length;j++){
							if(game.additionaldead[i].stat[j].damaged!=undefined) num+=game.additionaldead[i].stat[j].damaged;
						}
						td.innerHTML=num;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.additionaldead[i].stat.length;j++){
							if(game.additionaldead[i].stat[j].gain!=undefined) num+=game.additionaldead[i].stat[j].gain;
						}
						td.innerHTML=num;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.additionaldead[i].stat.length;j++){
							for(k in game.additionaldead[i].stat[j].card){
								num+=game.additionaldead[i].stat[j].card[k];
							}
						}
						td.innerHTML=num;
						tr.appendChild(td);
						td=document.createElement('td');
						num=0;
						for(j=0;j<game.additionaldead[i].stat.length;j++){
							if(game.additionaldead[i].stat[j].kill!=undefined) num+=game.additionaldead[i].stat[j].kill;
						}
						td.innerHTML=num;
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
				if(resultbool==true){
					var control=ui.create.control('返回',function(){
						game.kzol_wjms_deleteChoice();
						if(_status.mode=='wujin1'){
							lib.config.kzol_wujin1.round+=1;
							if(lib.config.kzol_wujin1.maxRound==undefined||
							lib.config.kzol_wujin1.round>lib.config.kzol_wujin1.maxRound) lib.config.kzol_wujin1.maxRound=lib.config.kzol_wujin1.round;
							lib.config.kzol_wujin1.enemy=game.kzol_getEvent();
							if(lib.config.mode_config.wjms.jctl==true){
								var num=game.me.hp;
								if(num>lib.config.kzol_wujin1.maxHp) num=lib.config.kzol_wujin1.maxHp;
								lib.config.kzol_wujin1.hp=num;
							};
							lib.config.kzol_wujin1.dianshu+=1;
							if(lib.config.kzol_wujin1.round%5==0) lib.config.kzol_wujin1.e_maxHandCard+=1;
							if(lib.config.kzol_wujin1.round%8==0) lib.config.kzol_wujin1.e_maxHp1+=1;
							if(lib.config.kzol_wujin1.round%10==0) lib.config.kzol_wujin1.e_recover+=1;
							if(lib.config.kzol_wujin1.round%15==0){
								lib.config.kzol_wujin1.e_attack+=1;
								lib.config.kzol_wujin1.e_draw+=1;
							};
							delete lib.config.kzol_wujin1.hadChanged;
							lib.config.kzol_wujin1.e_skill=game.kzol_randomGetSkill();
							game.saveConfig('kzol_wujin1',lib.config.kzol_wujin1);
							if(game.kzol_updateStr!=undefined) game.kzol_updateStr();
							if(game.kzol_updateStr1!=undefined) game.kzol_updateStr1();
						}else if(_status.mode=='jilue'){
							if(lib.config.kzol_jilue['enemy_round'+(lib.config.kzol_jilue.round+1)]!=undefined){
								lib.config.kzol_jilue.round+=1;
								var name=_status.kzol_jilue_beChosen1;
								var hp=3;
								var maxHp=3;
								for(var i in lib.characterPack){
									for(var j in lib.characterPack[i]){
										var character=lib.characterPack[i][j];
										if(j==name){
											hp=get.infoHp(character[2]);
											maxHp=get.infoMaxHp(character[2]);
										};
									};
								};
								lib.config.kzol_jilue.characters[lib.config.kzol_jilue.characters_num]={
									name:name,
									hp:hp,
									maxHp:maxHp,
									dead:false,
								};
								lib.config.kzol_jilue.characters_num+=1;
							}else{
								lib.config.kzol_jilue.record[lib.config.kzol_jilue.nandu].win+=1;
								lib.config.kzol_jilue.finish=true;
							};
							var character=lib.config.kzol_jilue.characters[_status.kzol_jilue_beChosen];
							var num=game.me.hp;
							if(num>character.maxHp) num=character.maxHp;
							lib.config.kzol_jilue.characters[_status.kzol_jilue_beChosen].hp=num;
							game.saveConfig('kzol_jilue',lib.config.kzol_jilue);
						}else{
							lib.config.kzol_wjms.round+=1;
							if(lib.config.kzol_wjms.maxRound==undefined||
							lib.config.kzol_wjms.round>lib.config.kzol_wjms.maxRound) lib.config.kzol_wjms.maxRound=lib.config.kzol_wjms.round;
							for(var i=0;i<lib.config.mode_config.wjms.gk_num;i++){
								lib.config.kzol_wjms['choice'+i]=game.kzol_getEvent();
							};
							var num=game.me.hp;
							if(num>lib.config.kzol_wjms.maxHp) num=lib.config.kzol_wjms.maxHp;
							lib.config.kzol_wjms.hp=num;
							game.saveConfig('kzol_wjms',lib.config.kzol_wjms);
						};
						if(lib.config.mode_config.wjms.wjms_fhsx==true){
							game.reload();
							return ;
						};
						ui.sortCard.style.display='none';
						if(_status.auto==true){
							ui.control.show();
							_status.auto=false;
							ui.auto.classList.remove('glow');
							ui.arena.classList.remove('auto');
						};
						ui.cardPileButton.style.display='none';
						game.kzol_wjms_openChoice();
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
						if(_status.mode=='jilue'){
							for(var i in _status.kzol_wjms_divs){
								if(i=='reStart'||i=='check'||i=='check1') continue;
								ui.window.removeChild(_status.kzol_wjms_divs[i]);
								delete _status.kzol_wjms_divs[i];
							};
							game.kzol_wjms_menu(lib.config.kzol_jilue['enemy_round'+lib.config.kzol_jilue.round].length,true);
						};
						setTimeout(function(){
							for(var i in _status.kzol_wjms_divs){
								_status.kzol_wjms_divs[i].show();
							};
						},500);
						if(_status.kzol_bwp_hadDiscard!=undefined) delete _status.kzol_bwp_hadDiscard;
						if(_status.kzol_changeMinskin!=undefined){
							clearInterval(_status.kzol_changeMinskin);
							delete _status.kzol_changeMinskin;
						};
					});
				}else{
					var str='轮回重启';
					if(_status.mode=='jilue') str='重置极略对决';
					var control=ui.create.control(str,function(){
						if(_status.mode=='wujin1'){
							for(var i in lib.config.kzol_wujin1){
								if(i=='maxRound') continue;
								delete lib.config.kzol_wujin1[i];
							};
							game.saveConfig('kzol_wujin1',lib.config.kzol_wujin1);
						}else if(_status.mode=='jilue'){
							lib.config.kzol_jilue.record[lib.config.kzol_jilue.nandu].lose+=1;
							for(var i in lib.config.kzol_jilue){
								if(i=='record') continue;
								delete lib.config.kzol_jilue[i];
							};
							game.saveConfig('kzol_jilue',lib.config.kzol_jilue);
						}else{
							for(var i in lib.config.kzol_wjms){
								if(i=='wjbw_equiped') continue;
								if(i=='maxRound') continue;
								delete lib.config.kzol_wjms[i];
							};
							game.saveConfig('kzol_wjms',lib.config.kzol_wjms);
						};
						game.reload();
					});
				};
			},
		},
		element:{
			player:{
				dieAfter:function(source){
					if(game.countPlayer(function(current){return current.identity=='enemy'})==0){
						game.kzol_wjms_over(true);
					};
					if(game.countPlayer(function(current){return current.identity=='me'})==0){
						game.kzol_wjms_over(false);
					};
				},
			},
			content:{
				gameDraw:function(){
					"step 0"
					if(_status.brawl&&_status.brawl.noGameDraw){
						event.finish();
						return;
					}
					var end=player;
					var numx=num;
					do{
						if(typeof num=='function'){
							numx=num(player);
						}
						player.directgain(get.cards(numx));
						if(player.singleHp===true&&get.mode()!='guozhan'){
							player.doubleDraw();
						}
						player=player.next;
					}
					while(player!=end);
					event.changeCard=get.config('change_card');
					"step 1"
					if(event.changeCard!='disabled'&&!_status.auto){
						event.dialog=ui.create.dialog('是否使用手气卡？');
						ui.create.confirm('oc');
						event.custom.replace.confirm=function(bool){
							_status.event.bool=bool;
							game.resume();
						}
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.changeCard=='once'){
						event.changeCard='disabled';
					}
					else if(event.changeCard=='twice'){
						event.changeCard='once';
					}
					else if(event.changeCard=='disabled'){
						event.bool=false;
						return;
					}
					_status.imchoosing=true;
					event.switchToAuto=function(){
						_status.event.bool=false;
						game.resume();
					}
					game.pause();
					"step 3"
					_status.imchoosing=false;
					if(event.bool){
						if(game.changeCoin){
							game.changeCoin(-3);
						}
						var hs=game.me.getCards('h');
						game.addVideo('lose',game.me,[get.cardsInfo(hs),[],[]]);
						for(var i=0;i<hs.length;i++){
							hs[i].discard(false);
						}
						game.me.directgain(get.cards(hs.length));
						event.goto(2);
					}
					else{
						if(event.dialog) event.dialog.close();
						if(ui.confirm) ui.confirm.close();
						event.finish();
					}
				},
			},
		},
		skill:{
			"_kzol_bw_wjms":{
				trigger:{
					global:'gameStart',
				},
				forced:true,
				popup:false,
				filter:function(event,player){
					if(_status.mode=='wujin1'&&lib.config.mode_config.wjms.bwx_wujin1!=true) return false;
					if(_status.mode=='jilue'&&lib.config.mode_config.wjms.bwx_jilue!=true) return false;
					return player==game.me;
				},
				content:function(){
					for(var i in lib.config.kzol_wjms.wjbw_equiped){
						var name=lib.config.kzol_wjms.wjbw_equiped[i].ext_name;
						var skill='kzol_bw_'+name;
						player.addSkill(skill);
						for(var j=0;j<player.node.marks.childNodes.length;j++){
							if(player.node.marks.childNodes[j].name==skill){
								if(lib.config.kzol_wjms.wjbw_equiped[i].character==undefined){
									player.node.marks.childNodes[j].setBackgroundImage('extension/扩展ol/'+name+'.png');
								}else{
									player.node.marks.childNodes[j].setBackground(lib.config.kzol_wjms.wjbw_equiped[i].character,'character');
								};
								player.node.marks.childNodes[j].innerHTML='';
							};
						};
					};
				},
			},
			"_kzol_wujin1_damage":{
				trigger:{
					source:'damageBefore',
				},
				filter:function(event,player){
					if(_status.mode!='wujin1') return false;
					if(lib.config.mode_config.wjms.onlyUseDamage==true){
						if(event.card==undefined) return false;
						if(event.card.name!='sha') return false;
					};
					return (player.identity=='me'&&lib.config.kzol_wujin1.attack>0)||
					(player.identity=='enemy'&&lib.config.kzol_wujin1.e_attack>0);
				},
				forced:true,
				popup:false,
				priority:Infinity,
				content:function(){
					if(player.identity=='me'){
						trigger.num+=lib.config.kzol_wujin1.attack;
					}else{
						trigger.num+=lib.config.kzol_wujin1.e_attack;
					};
				},
			},
			"_kzol_wujin1_maxHandCard":{
				mod:{
					maxHandcard:function(player,num){
						if(_status.mode=='wujin1'){
							if(player.identity=='me'&&lib.config.kzol_wujin1.maxHandCard>0) return num+lib.config.kzol_wujin1.maxHandCard;
							if(player.identity=='enemy'&&lib.config.kzol_wujin1.e_maxHandCard>0) return num+lib.config.kzol_wujin1.e_maxHandCard;
						};
						return num;
					},
				},
			},
			"_kzol_wujin1_draw":{
				trigger:{
					player:['drawBefore','phaseDrawBegin'],
				},
				filter:function(event,player){
					if(_status.mode!='wujin1') return false;
					if(lib.config.mode_config.wjms.onlyPhaseDraw==true){
						if(event.name!='phaseDraw') return false;
					}else{
						if(event.name!='draw') return false;
					};
					return (player.identity=='me'&&lib.config.kzol_wujin1.draw>0)||
					(player.identity=='enemy'&&lib.config.kzol_wujin1.e_draw>0);
				},
				forced:true,
				popup:false,
				priority:Infinity,
				content:function(){
					if(player.identity=='me'){
						trigger.num+=lib.config.kzol_wujin1.draw;
					}else{
						trigger.num+=lib.config.kzol_wujin1.e_draw;
					};
				},
			},
			"_kzol_wujin1_recover":{
				trigger:{
					player:'recoverBefore',
				},
				filter:function(event,player){
					if(_status.mode!='wujin1') return false;
					if(lib.config.mode_config.wjms.onlyUseRecover==true){
						if(event.card==undefined) return false;
						if(event.card.name!='tao') return false;
					};
					return (player.identity=='me'&&lib.config.kzol_wujin1.recover>0)||
					(player.identity=='enemy'&&lib.config.kzol_wujin1.e_recover>0);
				},
				forced:true,
				popup:false,
				priority:Infinity,
				content:function(){
					if(player.identity=='me'){
						trigger.num+=lib.config.kzol_wujin1.recover;
					}else{
						trigger.num+=lib.config.kzol_wujin1.e_recover;
					};
				},
			},
			"_kzol_wujin1_gainSkill":{
				trigger:{
					global:'dieBefore',
				},
				forced:true,
				popup:false,
				priority:Infinity,
				filter:function(event,player){
					if(_status.mode!='wujin1') return false;
					if(player!=game.me) return false;
					if(event.source!=game.me) return false;
					if(event.player.identity!='enemy') return false;
					return event.player.get('s',false,false).length>0;
				},
				createDialog:function(player,target){
					var control=ui.create.control('取消',function(){
						_status.event._result=false;
						game.resume();
						this.close();
					});
					var list=target.get('s',false,false);
					var dialog=ui.create.dialog('选择一项作为你的额外技能');
					_status.event.list=list;
					var clickItem=function(){
						_status.event._result=this.link;
						control.close();
						game.resume();
					};
					for(i=0;i<list.length;i++){
						if(lib.translate[list[i]+'_info']){
							var translation=get.translation(list[i]);
							if(translation[0]=='新'&& translation.length==3){
								translation=translation.slice(1,3);
							}else{
								translation=translation.slice(0,2);
							};
							var item=dialog.add('<div class="popup pointerdiv" style="width:50%;display:inline-block"><div class="skill">【'+
							translation+'】</div><div>'+get.translation(list[i]+'_info')+'</div></div>');
							item.firstChild.addEventListener('click',clickItem);
							item.firstChild.link=list[i];
						};
					};
					dialog.add(ui.create.div('placeholder'));
					return dialog;
				},
				content:function(){
					"step 0"
					game.me.chooseControl('确定','取消',ui.create.dialog('是否从对方身上获得额外技能？','hidden')).set('ai',function(){
						return '取消';
					});
					"step 1"
					if(result.control!='确定') event.finish();
					"step 2"
					event.dialog=lib.skill['_kzol_wujin1_gainSkill'].createDialog(player,trigger.player);
					event.switchToAuto=function(){
						event._result=event.skillai(event.list);
						game.resume();
					};
					_status.imchoosing=true;
					game.pause();
					"step 3"
					_status.imchoosing=false;
					if(event.dialog){
						event.dialog.close();
					};
					if(result!=undefined&&typeof result=='string'){
						lib.config.kzol_wujin1.skill=result;
						game.saveConfig('kzol_wujin1',lib.config.kzol_wujin1);
					};
				},
			},
			"kzol_jilue_chooseCharacter":{
				content:function(){
					'step 0'
					var num=0;
					var list=[];
					event.dialog=ui.create.dialog('请选择上场武将','hidden','forcebutton');
					for(var i in lib.config.kzol_jilue.characters){
						var character=lib.config.kzol_jilue.characters[i];
						if(character.dead==true) continue;
						var div=ui.create.player(null,true);
						game.kzol_jilue_init(div,character.name);
						div.style.margin='2px';
						div.style.transform='scale(0.9)';
						div.style.left='0px';
						div.style.top='0px';
						div.addEventListener(lib.config.touchscreen?'touchend':'click',ui.click.button);
						div.link=i;
						div.maxHp=character.maxHp;
						div.hp=character.hp;
						div.update();
						event.dialog.add(div);
						event.dialog.buttons.add(div);
						list.push(div);
						num++;
					};
					if(num==0){
						player.chooseButton(event.dialog,true);
						alert('无存活武将，即将重置极略对决');
						for(var i in lib.config.kzol_jilue){
							if(i=='record') continue;
							delete lib.config.kzol_jilue[i];
						};
						game.saveConfig('kzol_jilue',lib.config.kzol_jilue);
						game.reload();
					}else{
						event.switchToAuto=function(){
							event._result=list.randomGet();
							game.resume();
						};
						player.chooseButton(event.dialog,true);
					};
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						if(target==undefined ) target=result.buttons[0];
						var character=lib.config.kzol_jilue.characters[target.link];
						player.init(character.name);
						player.maxHp=character.maxHp;
						player.hp=character.hp;
						player.update();
						_status.kzol_jilue_beChosen=target.link;
					};
				},
			},
			"_kzol_jilue_changeCharacter":{
				trigger:{
					player:'dieBegin',
				},
				forced:true,
				popup:false,
				priority:-Infinity,
				filter:function(event,player){
					if(_status.mode!='jilue') return false;
					return player==game.me;
				},
				content:function(){
					'step 0'
					if(_status.kzol_jilue_beChosen!=undefined){
						lib.config.kzol_jilue.characters[_status.kzol_jilue_beChosen].hp=0;
						lib.config.kzol_jilue.characters[_status.kzol_jilue_beChosen].dead=true;
						game.saveConfig('kzol_jilue',lib.config.kzol_jilue);
					};
					var bool=false;
					for(var i in lib.config.kzol_jilue.characters){
						var character=lib.config.kzol_jilue.characters[i];
						if(character.dead!=true) bool=true; 
					};
					if(bool==false) event.finish();
					'step 1'
					trigger.untrigger();
					trigger.finish();
					var nandu=lib.config.kzol_jilue.nandu;
					if(nandu!='简单'){
						var cards=player.get('hej')
						player.$throw(cards,1000);
						game.cardsDiscard(cards);
					};
					player.useSkill('kzol_jilue_chooseCharacter');
					'step 2'
					player.draw(2);
				},
			},
		},
		ai:{
			get:{
				rawAttitude:function(from,to){
					if(from==undefined||to==undefined) return 0;
					if(from.identity==to.identity) return 5;
					return -5;
				},
			},
		},
		translate:{
			"kzol_jilue_chooseCharacter":"选择武将",
		},
	},{
		translate:'无尽',
		extension:'扩展ol',
		config:{
			mode:{
				name:'游戏模式',
				init:'wujin',
				item:{
					'wujin':'无尽',
					'wujin1':'旧无尽',
					'jilue':'极略对决',
				},
				restart:true,
				frequent:true,
			},
			jc:{
				name:'事件将池',
				init:'tb',
				frequent:true,
				item:{
					tb:'同步',
					qb:'全部'
				},
			},
			kzol_weather:{
				name:'天气变化',
				init:false,
				restart:true,
				frequent:true,
			},
			info:{
				name:'<p align=center>----------无尽---------</p>',
				clear:true,
				nopointer:true,
				frequent:true,
			},
			gk_num:{
				name:'每轮可选的选项',
				init:3,
				item:{
					1:'1',
					2:'2',
					3:'3',
					4:'4',
					5:'5',
				},
				frequent:true,
				onclick:function(bool){
					var bool=parseInt(bool);
					game.saveConfig('gk_num',bool,'wjms');
					if(_status.mode=='wujin'){
						for(var i=0;i<lib.config.mode_config.wjms.gk_num;i++){
							if(lib.config.kzol_wjms['choice'+i]==undefined){
								lib.config.kzol_wjms['choice'+i]=game.kzol_getEvent();
							};
						};
						game.saveConfig('kzol_wjms',lib.config.kzol_wjms);
						for(var i in _status.kzol_wjms_divs){
							ui.window.removeChild(_status.kzol_wjms_divs[i]);
							delete _status.kzol_wjms_divs[i];
						};
						game.kzol_wjms_menu(lib.config.mode_config.wjms.gk_num);
					};
				},
			},
			info1:{
				name:'<p align=center>---------旧无尽--------</p>',
				clear:true,
				nopointer:true,
				frequent:true,
			},
			bwx_wujin1:{
				name:'宝物匣',
				init:false,
				frequent:true,
				intro:"开启后，共享无尽宝物匣功能",
				onclick:function(bool){
					game.saveConfig('bwx_wujin1',bool,'wjms');
					if(_status.mode=='wujin1'&&lib.config.mode_config.wjms.bwx_wujin1!=true){
						_status.kzol_wjms_divs.zt.style.display='none';
					}else{
						_status.kzol_wjms_divs.zt.style.display='';
					};
				},
			},
			jctl:{
				name:'继承体力',
				init:false,
				frequent:true,
			},
			onlyUseDamage:{
				name:'<span style="font-size:12.5px;">攻击力加成只在使用[杀]时生效</span>',
				init:false,
				frequent:true,
			},
			onlyPhaseDraw:{
				name:'<span style="font-size:13.5px;">摸牌数加成只在摸牌阶段生效</span>',
				init:false,
				frequent:true,
			},
			onlyUseRecover:{
				name:'<span style="font-size:12.5px;">恢复量加成只在使用[桃]时生效</span>',
				init:false,
				frequent:true,
			},
			info2:{
				name:'<p align=center>--------极略对决-------</p>',
				clear:true,
				nopointer:true,
				frequent:true,
			},
			nandu:{
				name:'<p align=center><span style="cursor:pointer;">'+(lib.config.mode_config.wjms.nandu==undefined?'简单':lib.config.mode_config.wjms.nandu)+'</span></p>',
				clear:true,
				frequent:true,
				onclick:function(){
					var config=lib.config.mode_config.wjms.nandu;
					if(config=='普通'){
						game.saveConfig('nandu','困难','wjms');
						game.say1('难度切换为困难');
					}else if(config=='困难'){
						game.saveConfig('nandu','极限','wjms');
						game.say1('难度切换为极限');
					}else if(config=='极限'){
						game.saveConfig('nandu','简单','wjms');
						game.say1('难度切换为简单');
					}else{
						game.saveConfig('nandu','普通','wjms');
						game.say1('难度切换为普通');
					};
					this.innerHTML='<p align=center><span style="cursor:pointer;">'+(lib.config.mode_config.wjms.nandu==undefined?'简单':lib.config.mode_config.wjms.nandu)+'</span></p>';
				},
			},
			bwx_jilue:{
				name:'宝物匣',
				init:false,
				frequent:true,
				intro:"开启后，共享无尽宝物匣功能",
				onclick:function(bool){
					game.saveConfig('bwx_jilue',bool,'wjms');
					if(_status.mode=='jilue'&&lib.config.mode_config.wjms.bwx_jilue!=true){
						_status.kzol_wjms_divs.zt.style.display='none';
					}else{
						_status.kzol_wjms_divs.zt.style.display='';
					};
				},
			},
			round_jilue:{
				name:'轮次数',
				init:5,
				input:true,
				item:{
					5:'5',
					6:'6',
					7:'7',
					8:'8',
					9:'9',
					10:'10',
					11:'11',
					12:'12',
					13:'13',
					14:'14',
					15:'15',
					16:'16',
					17:'17',
					18:'18',
					19:'19',
					20:'20',
					21:'21',
					22:'22',
					23:'23',
					24:'24',
					25:'25',
				},
				frequent:true,
				intro:"改变后，重新进行极略对决时才能生效",
			},
			info3:{
				name:"<b><p align=center><span style=\"font-size:18px\">------------------------</span></p></b>",
				clear:true,
				nopointer:true,
				frequent:true,
			},
			change_card:{
				name:'开启手气卡',
				init:'disabled',
				//frequent:true,
				item:{
					disabled:'禁用',
					once:'一次',
					twice:'两次',
					unlimited:'无限',
				},
			},
			zdgbcpms:{
				name:'自动关闭触屏布局',
				init:true,
				restart:true,
				//frequent:true,
			},
			jcwj:{
				name:'检测武将',
				init:true,
			},
			wjms_fhsx:{
				"name":"战斗结束后返回刷新",
				"init":false,
				"intro":'当进行无尽轮回的武将再次开局后出现bug时开启',
			},
		},
	});
}