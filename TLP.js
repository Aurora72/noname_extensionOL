window.func=function(lib,game,ui,get,ai,_status){
		lib.element.player.gainTLP=function(){
			var next=game.createEvent('gainTLP');
			next.player=this;
			var event=_status.event;
			next.setContent(lib.element.event.gainTLP);
			return next;
		};
		lib.element.event.gainTLP=function(){
			'step 0'
			event.trigger('gainTLP');
			'step 1'
			var list=[];
			for(var i in lib.characterPack['TLP']){
				if(i!=player.name&&i!=player.name2) list.push(i);
			};
			player.chooseButton(ui.create.dialog('请选择两张塔罗牌',[list,'character']),2,true,function(button){
				var i=Math.floor(Math.random()*list.length);
				return list[i];
			});
			'step 2'
			if(result.bool){
				game.broadcastAll(function(player,TLP1,TLP2){
					//if(lib.config.layout!='long2') lib.init.layout('long2');
					player.node.TLP=ui.create.dialog('hidden');
					player.node.TLP.style.width='88px';
					player.node.TLP.style.height='40px';
					player.node.TLP.style.bottom='0px';
					player.node.TLP.style.left='0px';
					player.node.TLP.style.borderRadius='3px';
					player.node.TLP.classList.add('fixed');
					player.node.TLP.style.backgroundSize='cover';
					player.node.TLP.setBackgroundImage('extension/扩展ol/TLPbackground.jpg');
					player.node.TLP.style.boxShadow='rgba(0, 0, 0, 0.3) 0 0 0 1px, rgba(0, 0, 0, 0.3) 0 3px 10px';
					player.node.TLP.classList.add('popped');
					player.node.TLP.classList.add('static');
					if(player.name2!=undefined){
						player.node.avatar2.appendChild(player.node.TLP);
					}else{
						player.node.avatar.appendChild(player.node.TLP);
					};
					if(lib.character[player.name]!=undefined&&lib.character[player.name][1]=='TLP'){
						player.TLP[player.name]=ui.create.div('hidden');
						player.TLP[player.name].style.width='29px';
						player.TLP[player.name].style.height='38px';
						player.TLP[player.name].style.top='1px';
						player.TLP[player.name].style.left='0px';
						player.TLP[player.name].style.transform='';
						player.TLP[player.name].style.borderRadius='3px';
						player.TLP[player.name].style.backgroundSize='cover';
						player.TLP[player.name].setBackgroundImage('extension/扩展ol/'+player.name+'.jpg');
						player.TLP[player.name].style.boxShadow='rgba(0, 0, 0, 0.3) 0 0 0 1px, rgba(0, 0, 0, 0.3) 0 3px 10px';
						player.node.TLP.appendChild(player.TLP[player.name]);
					}else if(player.name2!=undefined&&lib.character[player.name2]!=undefined&&lib.character[player.name2][1]=='TLP'){
						player.TLP[player.name2]=ui.create.div('hidden');
						player.TLP[player.name2].style.width='29px';
						player.TLP[player.name2].style.height='38px';
						player.TLP[player.name2].style.top='1px';
						player.TLP[player.name2].style.left='0px';
						player.TLP[player.name2].style.transform='';
						player.TLP[player.name2].style.borderRadius='3px';
						player.TLP[player.name2].style.backgroundSize='cover';
						player.TLP[player.name2].setBackgroundImage('extension/扩展ol/'+player.name2+'.jpg');
						player.TLP[player.name2].style.boxShadow='rgba(0, 0, 0, 0.3) 0 0 0 1px, rgba(0, 0, 0, 0.3) 0 3px 10px';
						player.node.TLP.appendChild(player.TLP[player.name2]);
					};
					player.TLP[TLP1]=ui.create.div('hidden');
					player.TLP[TLP1].style.width='29px';
					player.TLP[TLP1].style.height='38px';
					player.TLP[TLP1].style.top='1px';
					player.TLP[TLP1].style.left='29.5px';
					player.TLP[TLP1].style.transform='';
					player.TLP[TLP1].style.borderRadius='3px';
					player.TLP[TLP1].style.backgroundSize='cover';
					player.TLP[TLP1].setBackgroundImage('extension/扩展ol/'+TLP1+'.jpg');
					player.TLP[TLP1].style.boxShadow='rgba(0, 0, 0, 0.3) 0 0 0 1px, rgba(0, 0, 0, 0.3) 0 3px 10px';
					player.node.TLP.appendChild(player.TLP[TLP1]);
					player.TLP[TLP2]=ui.create.div('hidden');
					player.TLP[TLP2].style.width='29px';
					player.TLP[TLP2].style.height='38px';
					player.TLP[TLP2].style.top='1px';
					player.TLP[TLP2].style.left='59px';
					player.TLP[TLP2].style.transform='';
					player.TLP[TLP2].style.borderRadius='3px';
					player.TLP[TLP2].style.backgroundSize='cover';
					player.TLP[TLP2].setBackgroundImage('extension/扩展ol/'+TLP2+'.jpg');
					player.TLP[TLP2].style.boxShadow='rgba(0, 0, 0, 0.3) 0 0 0 1px, rgba(0, 0, 0, 0.3) 0 3px 10px';
					player.node.TLP.appendChild(player.TLP[TLP2]);
				},player,result.buttons[0].link,result.buttons[1].link);
				var TLP1=result.buttons[0].link;
				var TLP2=result.buttons[1].link;
				var list=[];
				var list1=[];
				if(lib.character[player.name]!=undefined&&lib.character[player.name][1]=='TLP'){
					game.log(player,'获得了塔罗牌-',lib.translate[player.name]);
					for(var i=0;i<lib.character[player.name][3].length;i++){
						var skill=lib.character[player.name][3][i];
						if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='zheng') list.push(skill);
					};
					for(var i=0;i<lib.character[player.name][3].length;i++){
						var skill=lib.character[player.name][3][i];
						if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='ni') list1.push(skill);
					};
				}else if(player.name2!=undefined&&lib.character[player.name2]!=undefined&&lib.character[player.name2][1]=='TLP'){
					game.log(player,'获得了塔罗牌-',lib.translate[player.name2]);
					for(var i=0;i<lib.character[player.name2][3].length;i++){
						var skill=lib.character[player.name2][3][i];
						if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='zheng') list.push(skill);
					};
					for(var i=0;i<lib.character[player.name2][3].length;i++){
						var skill=lib.character[player.name2][3][i];
						if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='ni') list1.push(skill);
					};
				};
				game.log(player,'获得了塔罗牌-',lib.translate[TLP1]);
				for(var i=0;i<lib.character[TLP1][3].length;i++){
					var skill=lib.character[TLP1][3][i];
					if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='zheng') list.push(skill);
				};
				for(var i=0;i<lib.character[TLP1][3].length;i++){
					var skill=lib.character[TLP1][3][i];
					if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='ni') list1.push(skill);
				};
				game.log(player,'获得了塔罗牌-',lib.translate[TLP2]);
				for(var i=0;i<lib.character[TLP2][3].length;i++){
					var skill=lib.character[TLP2][3][i];
					if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='zheng') list.push(skill);
				};
				for(var i=0;i<lib.character[TLP2][3].length;i++){
					var skill=lib.character[TLP2][3][i];
					if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='ni') list1.push(skill);
				};
				player.addSkill(list);
				player.removeSkill(list1);
				player.popup('获得塔罗牌');
			};
		};
		lib.element.player.turnTLP=function(){
			var next=game.createEvent('turnTLP');
			next.player=this;
			var event=_status.event;
			next.setContent(lib.element.event.turnTLP);
			return next;
		};
		lib.element.event.turnTLP=function(){
			'step 0'
			var num=0;
			for(var i in player.TLP){
				num++;
			};
			if(num==0) event.finish();
			'step 1'
			event.trigger('turnTLP');
			var list=[];
			var str='';
			for(var i in player.TLP){
				list.push(i);
				str+=lib.translate[i]+'-';
				if(player.TLP[i].style.transform.indexOf('rotate(180deg)')==-1){
					str+='正<br>';
				}else{
					str+='逆<br>';
				};
			};
			player.chooseButton(ui.create.dialog('请选择需要调整正逆位的塔罗牌',str,[list,'character']),1,function(button){
				var i=Math.floor(Math.random()*list.length);
				return list[i];
			});
			'step 2'
			if(result.bool){
				var TLP=result.buttons[0].link;
				game.broadcastAll(function(player,TLP){
					if(player.TLP[TLP].style.transform.indexOf('rotate(180deg)')==-1){
						player.TLP[TLP].style.transform+='rotate(180deg)';
					}else{
						player.TLP[TLP].style.transform='';
					};
				},player,TLP);
				if(player.TLP[TLP].style.transform.indexOf('rotate(180deg)')==-1){
					game.log(player,'将塔罗牌-',lib.translate[TLP],'调至正位');
					for(var i=0;i<lib.character[TLP][3].length;i++){
						var skill=lib.character[TLP][3][i];
						if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='zheng') player.addSkill(skill);
					};
					for(var i=0;i<lib.character[TLP][3].length;i++){
						var skill=lib.character[TLP][3][i];
						if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='ni') player.removeSkill(skill);
					};
				}else{
					game.log(player,'将塔罗牌-',lib.translate[TLP],'调至逆位');
					for(var i=0;i<lib.character[TLP][3].length;i++){
						var skill=lib.character[TLP][3][i];
						if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='ni') player.addSkill(skill);
					};
					for(var i=0;i<lib.character[TLP][3].length;i++){
						var skill=lib.character[TLP][3][i];
						if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='zheng') player.removeSkill(skill);
					};
				};
				player.popup('调整塔罗牌');
			};
		};
		lib.element.player.gainTLPOL=function(){
			var next=game.createEvent('gainTLPOL');
			next.player=this;
			var event=_status.event;
			next.setContent(lib.element.event.gainTLPOL);
			return next;
		};
		lib.element.event.gainTLPOL=function(){
			'step 0'
			event.trigger('gainTLPOL');
			var list=[];
			for(var i in lib.characterPack['TLP']){
				if(i!=player.name&&i!=player.name2){
					list.push(i);
				};
			};
			var TLP1=list.randomGet();
			list.remove(TLP1);
			var TLP2=list.randomGet();
			player.storage.TLP={};
			var list=[];
			var list1=[];
			if(lib.character[player.name][1]=='TLP'){
				game.log(player,'获得了塔罗牌-',lib.translate[player.name]);
				player.storage.TLP[player.name]='正';
				for(var i=0;i<lib.character[player.name][3].length;i++){
					var skill=lib.character[player.name][3][i];
					if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='zheng') list.push(skill);
				};
				for(var i=0;i<lib.character[player.name][3].length;i++){
					var skill=lib.character[player.name][3][i];
					if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='ni') list1.push(skill);
				};
			}else if(player.name2!=undefined&&lib.character[player.name2][1]=='TLP'){
				game.log(player,'获得了塔罗牌-',lib.translate[player.name2]);
				player.storage.TLP[player.name2]='正';
				for(var i=0;i<lib.character[player.name2][3].length;i++){
					var skill=lib.character[player.name2][3][i];
					if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='zheng') list.push(skill);
				};
				for(var i=0;i<lib.character[player.name2][3].length;i++){
					var skill=lib.character[player.name2][3][i];
					if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='ni') list1.push(skill);
				};
			};
			game.log(player,'获得了塔罗牌-',lib.translate[TLP1]);
			player.storage.TLP[TLP1]='正';
			for(var i=0;i<lib.character[TLP1][3].length;i++){
				var skill=lib.character[TLP1][3][i];
				if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='zheng') list.push(skill);
			};
			for(var i=0;i<lib.character[TLP1][3].length;i++){
				var skill=lib.character[TLP1][3][i];
				if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='ni') list1.push(skill);
			};
			game.log(player,'获得了塔罗牌-',lib.translate[TLP2]);
			player.storage.TLP[TLP2]='正';
			for(var i=0;i<lib.character[TLP2][3].length;i++){
				var skill=lib.character[TLP2][3][i];
				if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='zheng') list.push(skill);
			};
			for(var i=0;i<lib.character[TLP2][3].length;i++){
				var skill=lib.character[TLP2][3][i];
				if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='ni') list1.push(skill);
			};
			player.markSkill('TLP_mark');
			player.addSkill(list);
			player.removeSkill(list1);
			player.popup('获得塔罗牌');
		};
		lib.element.player.turnTLPOL=function(){
			var next=game.createEvent('turnTLPOL');
			next.player=this;
			var event=_status.event;
			next.setContent(lib.element.event.turnTLPOL);
			return next;
		};
		lib.element.event.turnTLPOL=function(){
			'step 0'
			if(player.storage.TLP==undefined) event.finish();
			'step 1'
			event.trigger('turnTLPOL');
			var list=[];
			var list1=[];
			for(var i in player.storage.TLP){
				list.push(i);
				var str='';
				for(var j=0;j<lib.character[i][3].length;j++){
					str+='<li>'+lib.translate[lib.character[i][3][j]+'_info'];
				};
				list1.push(lib.translate[i]+str);
			};
			list.push('cancel2');
			player.chooseControl(list).set('prompt','请选择需要调整正逆位的塔罗牌').set('ai',function(event){
				return list.randomGet();
			}).set('choiceList',list1);
			'step 2'
			var TLP=result.control;
			if(TLP!='cancel2'){
				if(player.storage.TLP[TLP]=='正'){
					player.storage.TLP[TLP]='逆';
					game.log(player,'将塔罗牌-',lib.translate[TLP],'调至逆位');
					for(var i=0;i<lib.character[TLP][3].length;i++){
						var skill=lib.character[TLP][3][i];
						if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='ni') player.addSkill(skill);
					};
					for(var i=0;i<lib.character[TLP][3].length;i++){
						var skill=lib.character[TLP][3][i];
						if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='zheng') player.removeSkill(skill);
					};
				}else{
					player.storage.TLP[TLP]='正';
					game.log(player,'将塔罗牌-',lib.translate[TLP],'调至正位');
					for(var i=0;i<lib.character[TLP][3].length;i++){
						var skill=lib.character[TLP][3][i];
						if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='zheng') player.addSkill(skill);
					};
					for(var i=0;i<lib.character[TLP][3].length;i++){
						var skill=lib.character[TLP][3][i];
						if(lib.skill[skill]!=undefined&&lib.skill[skill].TLP_type=='ni') player.removeSkill(skill);
					};
				};
				player.popup('调整塔罗牌');
			};
		};
		lib.skill.TLP_mark={
			marktext:"塔",
			locked:true,
			intro:{
				content:function (storage,player,skill){
					var str='';
					for(var i in player.storage.TLP){
						str+=lib.translate[i]+'-'+player.storage.TLP[i]+'<br>';
					};
					return str;
				},
			},
		};
		lib.translate.TLP_mark='塔罗牌组';
		if(get.mode()=='connect') lib.TLP_mode='connect';
		game.import('character',function(){
			var TLP={
				name:'TLP',
				connect:true,
				character:{
					"TLP_mofashi":["female","TLP",3,["TLP_lingju","TLP_geduan"],[]],
					"TLP_nvjisi":["female","TLP",3,["TLP_qianren","TLP_mansun"],[]],
					"TLP_nvhuang":["female","TLP",3,["TLP_yiya","TLP_rongmu"],[]],
					"TLP_huangdi":["male","TLP",3,["TLP_weiquan","TLP_zhidu"],[]],
					"TLP_jiaohuang":["male","TLP",3,["TLP_jianxin","TLP_anyan"],[]],
					"TLP_lianren":["female","TLP",3,["TLP_linai","TLP_yuzong"],[]],
					"TLP_zhanche":["male","TLP",3,["TLP_zhanhui","TLP_qienuo"],[]],
					"TLP_liliang":["female","TLP",3,["TLP_xinyong","TLP_youyi"],[]],
					"TLP_yinzhe":["female","TLP",3,["TLP_xingxin","TLP_gumi"],[]],
					"TLP_mingyunzhilun":["female","TLP",3,["TLP_fulin","TLP_wangni"],[]],
					"TLP_zhengyi":["female","TLP",3,["TLP_zhongzheng","TLP_piankui"],[]],
					"TLP_daodiaoren":["female","TLP",3,["TLP_xisheng","TLP_mangshang"],[]],
					"TLP_sishen":["female","TLP",3,["TLP_poli","TLP_bie"],[]],
					"TLP_jiezhi":["female","TLP",3,["TLP_pinghe","TLP_huadi"],[]],
					"TLP_emo":["female","TLP",3,["TLP_youyu","TLP_pojia"],[]],
					"TLP_gaota":["female","TLP",3,["TLP_shunshi","TLP_beizhan"],[]],
					"TLP_xingxing":["female","TLP",3,["TLP_yunxi","TLP_kongji"],[]],
					"TLP_yueliang":["female","TLP",3,["TLP_yuanque","TLP_yanmei"],[]],
					"TLP_taiyang":["female","TLP",3,["TLP_puyao","TLP_maidang"],[]],
					"TLP_shenpan":["female","TLP",3,["TLP_shengcai","TLP_huanmie"],[]],
					"TLP_shijie":["female","TLP",3,["TLP_dacheng","TLP_huihan"],[]],
				},
				characterTitle:{
					"TLP_mofashi":"Ⅰ",
					"TLP_nvjisi":"Ⅱ",
					"TLP_nvhuang":"Ⅲ",
					"TLP_huangdi":"Ⅳ",
					"TLP_jiaohuang":"Ⅴ",
					"TLP_lianren":"Ⅵ",
					"TLP_zhanche":"Ⅶ",
					"TLP_liliang":"Ⅷ",
					"TLP_yinzhe":"Ⅸ",
					"TLP_mingyunzhilun":"Ⅹ",
					"TLP_zhengyi":"Ⅺ",
					"TLP_daodiaoren":"Ⅻ",
					"TLP_sishen":"ⅩⅢ",
					"TLP_jiezhi":"ⅩⅣ",
					"TLP_emo":"ⅩⅤ",
					"TLP_gaota":"ⅩⅥ",
					"TLP_xingxing":"ⅩⅦ",
					"TLP_yueliang":"ⅩⅧ",
					"TLP_taiyang":"ⅩⅨ",
					"TLP_shenpan":"ⅩⅩ",
					"TLP_shijie":"ⅩⅪ",
				},
				skill:{
					"_TLP_support":{
						trigger:{
							global:"gameStart",
						},
						forced:true,
						popup:false,
						priority:Infinity,
						filter:function (event,player){
							return lib.TLP_mode!='connect';
						},
						content:function(){
							player.TLP={};
						},
					},
					"_TLP_gainTLP":{
						trigger:{
							global:"gameStart",
						},
						forced:true,
						popup:false,
						filter:function (event,player){
							return (lib.character[player.name]!=undefined&&lib.character[player.name][1]=='TLP')||(player.name2!=undefined&&lib.character[player.name2]!=undefined&&lib.character[player.name2][1]=='TLP');
						},
						content:function(){
							if(lib.TLP_mode=='connect'){
								player.gainTLPOL();
							}else{
								player.gainTLP();
							};
						},
					},
					"_turnTLP":{
						trigger:{
							player:["phaseBegin","phaseEnd"],
						},
						forced:true,
						popup:false,
						filter:function (event,player){
							var num=0;
							for(var i in player.TLP){
								num++;
							};
							return num>0&&lib.TLP_mode!='connect';
						},
						content:function(){
							player.turnTLP();
						},
					},
					"_turnTLPOL":{
						trigger:{
							player:["phaseBegin","phaseEnd"],
						},
						forced:true,
						popup:false,
						filter:function (event,player){
							return player.storage.TLP!=undefined;
						},
						content:function(){
							player.turnTLPOL();
						},
					},
					"TLP_lingju":{
						trigger:{
							player:"useCardEnd",
						},
						direct:true,
						TLP_type:'zheng',
						filter:function (event,player){
							return get.type(event.card)=='trick';
						},
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('TLP_lingju'),function(card,player,target){
								return target!=player;
							}).ai=function(target){
								return get.attitude(player,target);
							};
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								player.line(target);
								player.logSkill('TLP_lingju');
								player.popup(lib.translate['TLP_lingju']);
								target.draw();
							};
						},
					},
					"TLP_geduan":{
						trigger:{
							global:"useCardBegin",
						},
						direct:true,
						TLP_type:'ni',
						filter:function (event,player){
							return event.targets&&event.targets.length>1&&event.targets.contains(player);
						},
						content:function(){
							'step 0'
							player.chooseTarget(lib.translate[trigger.player.name]+'即将使用【'+lib.translate[trigger.card.name]+'】<br>'+get.prompt('TLP_geduan'),function(card,player,target){
								return target!=player;
							}).ai=function(target){
								if(trigger.card.name=='wugu'||trigger.card.name=='taoyuan') return get.attitude(player,target);
								return 0;
							};
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								player.line(target);
								player.logSkill('TLP_geduan');
								player.popup(lib.translate['TLP_geduan']);
								trigger.targets.remove(player);
								trigger.player.useCard(trigger.card,target);
							};
						},
					},
					"TLP_qianren":{
						trigger:{
							player:"loseBefore",
						},
						forced:true,
						TLP_type:'zheng',
						filter:function (event,player){
							return player.countCards('h')>player.hp&&_status.currentPhase!=player;
						},
						content:function(){
							player.draw();
						},
					},
					"TLP_mansun":{
						trigger:{
							player:"phaseBegin",
						},
						direct:true,
						TLP_type:'ni',
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('TLP_mansun'),[1,2],function(card,player,target){
								return target!=player&&target.countCards('h')>=target.hp;
							}).ai=function(target){
								if(game.countPlayer(function(current){return get.attitude(player,current)<0&&current.countCards('h')>0})>1&&player.countCards('h')<2) return -get.attitude(player,target);
								return 0;
							};
							'step 1'
							if(result.bool){
								player.line(result.targets);
								player.logSkill('TLP_mansun');
								player.popup(lib.translate['TLP_mansun']);
								player.turnOver();
								for(var i=0;i<result.targets.length;i++){
									player.gainPlayerCard(1,result.targets[i],'hej');
								};
							};
						},
					},
					"TLP_yiya":{
						trigger:{
							player:"damageAfter",
						},
						TLP_type:'zheng',
						filter:function(event,player){
							return player.canMoveCard();
						},
						content:function(){
							player.moveCard();
						},
					},
					"TLP_rongmu":{
						trigger:{
							global:"gainEnd",
						},
						direct:true,
						TLP_type:'ni',
						filter:function(event,player){
							return event.player!=player&&_status.currentPhase!=event.player&&player.countCards('he')>0;
						},
						content:function(){
							'step 0'
							player.chooseCard('he',get.prompt('TLP_rongmu')).set('ai',function(card){
								if(get.attitude(player,trigger.player)<0) return 6-get.value(card);
								return 0;
    						});
							'step 1'
							if(result.bool){
								player.line(trigger.player);
								player.logSkill('TLP_rongmu');
								player.popup(lib.translate['TLP_rongmu']);
								player.discard(result.cards[0]);
								player.useCard({name:'shunshou'},trigger.player);
							};
						},
					},
					"TLP_weiquan":{
						trigger:{
							global:"damageBegin",
						},
						direct:true,
						TLP_type:'zheng',
						filter:function(event,player){
							return get.distance(player,event.player)<=1&&event.player!=player&&player.countCards('h')>0;
						},
						content:function(){
							'step 0'
							player.chooseCard('h',get.prompt('TLP_weiquan')).set('ai',function(card){
								if(get.attitude(player,trigger.player)<0) return 5-get.value(card);
								return 0;
    						});
							'step 1'
							if(result.bool){
								player.line(trigger.player);
								player.logSkill('TLP_weiquan');
								player.popup(lib.translate['TLP_weiquan']);
								player.$give(result.cards[0],trigger.player);
								trigger.player.gain(result.cards[0],player);
								trigger.num++;
							};
						},
					},
					"TLP_zhidu":{
						trigger:{
							global:"useCardBegin",
						},
						TLP_type:'ni',
						filter:function(event,player){
							return event.targets&&event.targets.length>1&&event.targets.contains(player);
						},
						check:function(event,player){
							return get.attitude(player,event.player)<0&&(event.card.name=='taoyuan'||event.card.name=='wugu'||event.card.name=='tiesuo');
						},
						content:function(){
							trigger.target=player;
							trigger.targets=[player];
							trigger.player.useCard(trigger.card,player);
						},
					},
					"TLP_jianxin":{
						trigger:{
							player:["recoverAfter","damageAfter"],
						},
						direct:true,
						TLP_type:'zheng',
						filter:function (event,player){
							return player.countCards('h')>0&&game.countPlayer(function(current){return current!=player&&current.maxHp>current.hp})>0;
						},
						content:function(){
							'step 0'
							player.chooseCard('h',get.prompt('TLP_jianxin')).set('ai',function(card){
								if(game.countPlayer(function(current){return current!=player&&get.attitude(player,current)>0&&current.maxHp>current.hp})>0) return 7-get.value(card);
								return 0;
    						});
							'step 1'
							if(result.bool){
								event.card=result.cards[0];
								player.chooseTarget('请选择【兼心】的目标',function(card,player,target){
									return target!=player&&target.maxHp>target.hp;
								}).ai=function(target){
									return get.attitude(player,target);
								};
							}else{
								event.finish();
							};
							'step 2'
							if(result.bool){
								var target=result.targets[0];
								player.line(target);
								player.logSkill('TLP_jianxin');
								player.popup(lib.translate['TLP_jianxin']);
								player.discard(event.card);
								target.recover();
							};
						},
					},
					"TLP_anyan":{
						enable:"phaseUse",
						usable:1,
						TLP_type:'ni',
						filter:function(event,player){
							return player.countCards('h',{color:'black'})>0;
						},
						content:function(){
							'step 0'
							event.num=player.countCards('h',{color:'black'});
							player.showHandcards();
							if(event.num>=2) player.loseHp();
							'step 1'
							player.chooseTarget('请选择【暗言】的目标',function(card,player,target){
								return target!=player&&target.countCards('hej')>0;
							}).ai=function(target){
								return -get.attitude(player,target);
							};
							'step 2'
							if(result.bool){
								var target=result.targets[0];
								player.line(target);
								player.discardPlayerCard(target,'hej');
								event.num--;
								if(event.num>0) event.goto(1);
							};
						},
						ai:{
							order:5,
							result:{
								player:function(player){
									if(player.countCards('h',{color:'black'})<2) return 2;
								},
							},
						},
					},
					"TLP_linai":{
						trigger:{
							player:"phaseBegin",
						},
						direct:true,
						TLP_type:'zheng',
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('TLP_linai'),function(card,player,target){
								return target!=player;
							}).ai=function(target){
								if(player.maxHp>player.hp||player.countCards('j')>0) return get.attitude(player,target);
								return 0;
							};
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								player.line(target);
								player.logSkill('TLP_linai');
								player.popup(lib.translate['TLP_linai']);
								player.$give(player.get('hej'),target);
								target.gain(player.get('hej'),player);
								player.recover();
								target.recover();
							};
						},
					},
					"TLP_yuzong":{
						trigger:{
							player:"recoverAfter",
						},
						TLP_type:'ni',
						forced:true,
						content:function(){
							'step 0'
							player.chooseTarget('请选择【欲纵】的目标',function(card,player,target){
								return target!=player;
							},true).ai=function(target){
								return get.attitude(player,target);
							};
							'step 1'
							if(result.bool){
								event.target=result.targets[0];
								player.chooseControl(['令其摸两张牌','令其回复一点体力']).set('ai',function(event){
									if(get.attitude(player,event.target)<0&&event.target.maxHp==event.target.hp) return '令其摸两张牌';
									return '令其回复一点体力';
								});
							}else{
								event.finish();
							};
							'step 2'
							player.line(event.target);
							player.popup(result.control);
							if(result.control!=undefined) player.turnOver();
							if(result.control=='令其摸两张牌') event.target.draw(2);
							if(result.control=='令其回复一点体力') event.target.recover();
						},
					},
					"TLP_zhanhui":{
						trigger:{
							source:"damageAfter",
						},
						TLP_type:'zheng',
						content:function(){
							player.draw();
							trigger.player.draw();
						},
					},
					"TLP_qienuo":{
						trigger:{
							player:"damageBegin",
						},
						TLP_type:'ni',
						direct:true,
						filter:function(event,player){
							return event.source&&player.countCards('h')>0;
						},
						content:function(){
							'step 0'
							player.chooseCard('h',Math.ceil(player.countCards('h')/2),get.prompt('TLP_qienuo')).set('ai',function(card){
								if(player.countCards('h')<=2) return 6-get.value(card);
    						});
							'step 1'
							if(result.bool){
								player.line(trigger.source);
								player.logSkill('TLP_qienuo');
								player.popup(lib.translate['TLP_qienuo']);
								player.$give(result.cards,trigger.source);
								trigger.source.gain(result.cards,player);
								trigger.num--;
							};
						},
					},
					"TLP_xinyong":{
						trigger:{
							player:"useCardAfter",
						},
						TLP_type:'zheng',
						frequent:true,
						filter:function(event,player){
							return event.card.name=='sha';
						},
						content:function(){
							'step 0'
							player.judge(function(card){
								if(get.color(card)=='red') return 1;
								return -1;
							});
							'step 1'
							if(get.color(result.card)=='red') player.gain(trigger.card,'gain2');
						},
					},
					"TLP_youyi":{
						enable:"phaseUse",
						usable:1,
						TLP_type:'ni',
						filterTarget:function (card,player,target){
							return player!=target&&target.countCards('h')>0;
						},
						content:function(){
							'step 0'
							player.viewCards(lib.translate[target.name]+'的手牌',target.getCards('h'));
							player.chooseToUse('是否对其使用一张牌？',target,-1);
							'step 1'
							if(!result.bool) target.discardPlayerCard(player,1,'he');
						},
						ai:{
							order:11,
							result:{
								target:function (player,target){
									if(player.countCards('h')<=2) return ;
									return -1;
								},
							},
						},
					},
					"TLP_xingxin":{
						trigger:{
							player:"phaseBegin",
						},
						TLP_type:'zheng',
						filter:function(event,player){
							return player.countCards('j')>0;
						},
						content:function(){
							player.turnOver();
							player.gain(player.get('j'),'gain2');
						},
					},
					"TLP_gumi":{
						trigger:{
							player:"turnOverEnd",
						},
						TLP_type:'ni',
						content:function(){
							'step 0'
							var list=['摸一张牌'];
							if(game.countPlayer(function(current){return current.countCards('ej')>0})>0) list.push('将场上的一张牌置入弃牌堆');
							player.chooseControl(list).set('ai',function(event){
								return '摸一张牌';
							});
							'step 1'
							if(result.control=='摸一张牌') player.draw();
							if(result.control=='将场上的一张牌置入弃牌堆'){
								player.chooseTarget('请选择弃置场上卡牌的目标',function(card,player,target){
									return target.countCards('ej')>0;
								}).ai=function(target){
									return 1;
								};
							}else{
								event.finish();
							};
							'step 2'
							if(result.bool){
								var target=result.targets[0];
								player.line(target);
								player.discardPlayerCard(target,1,'ej');
							};
						},
					},
					"TLP_fulin":{
						trigger:{
							global:"judgeAfter",
						},
						TLP_type:'zheng',
						frequent:true,
						filter:function(event,player){
							return event.player!=player&&event.result.card&&get.color(event.result.card)=='red';
						},
						content:function(){
							player.draw();
						},
					},
					"TLP_wangni":{
						trigger:{
							global:"damageBegin",
						},
						TLP_type:'ni',
						forced:true,
						filter:function(event,player){
							return get.distance(player,event.player,'attack')<=1&&player!=event.player;
						},
						content:function(){
							player.chooseToDiscard(2,'he',true);
							trigger.num--;
						},
					},
					"TLP_zhongzheng":{
						enable:"phaseUse",
						usable:1,
						TLP_type:'zheng',
						filterTarget:function (card,player,target){
							return target.countCards('h')>0;
						},
						selectTarget:2,
						multitarget:true,
						line:true,
						content:function(){
							'step 0'
							targets[0].chooseCard(1,'h',true);
							'step 1'
							if(result.bool){
								event.card1=result.cards[0];
								targets[0].$give(event.card1,targets[1]);
								targets[1].gain(event.card1,targets[0]);
								targets[1].chooseCard(1,'h',true);
							}else{
								event.finish();
							};
							'step 2'
							if(result.bool){
								event.card2=result.cards[0];
								targets[1].$give(event.card2,targets[0]);
								targets[0].gain(event.card2,targets[1]);
								if(get.color(event.card1)==get.color(event.card2)) player.draw();
							}else{
								event.finish();
							};
						},
						ai:{
							order:11,
							result:{
								target:1,
							},
						},
					},
					"TLP_piankui":{
						trigger:{
							source:"damageBegin",
						},
						TLP_type:'ni',
						forced:true,
						filter:function(event,player){
							return event.player.countCards('h')<player.countCards('h');
						},
						content:function(){
							player.loseHp();
							trigger.num++;
						},
					},
					"TLP_xisheng":{
						enable:"phaseUse",
						usable:1,
						TLP_type:'zheng',
						filterTarget:function (card,player,target){
							return player!=target&&target.maxHp>target.hp;
						},
						content:function(){
							player.loseHp();
							target.recover();
						},
						ai:{
							order:11,
							result:{
								target:function (player,target){
									if(player.hp<=2) return ;
									return 1;
								},
							},
						},
					},
					"TLP_mangshang":{
						enable:"phaseUse",
						usable:1,
						TLP_type:'ni',
						filterTarget:function (card,player,target){
							return target.countCards('ej')>0;
						},
						content:function(){
							player.loseHp();
							player.gainPlayerCard(target,1,'ej');
						},
						ai:{
							order:11,
							result:{
								target:function (player,target){
									if(player.hp<=2) return ;
									return -1;
								},
							},
						},
					},
					"TLP_poli":{
						trigger:{
							player:"phaseUseBegin",
						},
						TLP_type:'zheng',
						filter:function(event,player){
							return player.maxHp==3||player.maxHp==4;
						},
						check:function(event,player){
							return player.maxHp==4&&player.maxHp-player.hp>=2;
						},
						content:function(){
							if(player.maxHp==3){
								player.loseHp();
								player.gainMaxHp();
							};
							if(player.maxHp==4){
								player.recover();
								player.loseMaxHp();
							};
						},
					},
					"TLP_bie":{
						enable:'chooseToUse',
						TLP_type:'ni',
						filterCard:true,
						selectCard:-1,
						viewAs:{name:'tao'},
						viewAsFilter:function(player){
							return player.hp<=0&&player.countCards('h')>0;
						},
						prompt:'将所有手牌当【桃】使用',
						check:function(card){return 1},
						ai:{
							save:true,
							skillTagFilter:function(player){
								return player.hp<=0&&player.countCards('h')>0;
							},
						},
					},
					"_TLP_pinghe":{
						trigger:{
							player:"useCardAfter",
						},
						forced:true,
						popup:false,
						filter:function(event,player){
							return _status.currentPhase==player&&event.card.name=='sha';
						},
						content:function(){
							player.storage.TLP_pinghe=true;
						},
					},
					"_TLP_pinghe1":{
						trigger:{
							player:"phaseAfter",
						},
						forced:true,
						popup:false,
						filter:function(event,player){
							return player.storage.TLP_pinghe==true;
						},
						content:function(){
							delete player.storage.TLP_pinghe;
						},
					},
					"TLP_pinghe":{
						trigger:{
							player:"phaseEnd",
						},
						TLP_type:'zheng',
						frequent:true,
						filter:function(event,player){
							return player.storage.TLP_pinghe!=true;
						},
						content:function(){
							player.recover();
						},
					},
					"TLP_huadi":{
						trigger:{
							global:"damageBegin",
						},
						TLP_type:'ni',
						forced:true,
						filter:function(event,player){
							return event.source&&get.distance(player,event.source,'attack')<=1&&get.distance(event.source,event.player,'attack')>1;
						},
						content:function(){
							player.line(trigger.source);
							trigger.untrigger();
							trigger.finish();
						},
					},
					"TLP_youyu":{
						enable:"phaseUse",
						usable:1,
						TLP_type:'zheng',
						filterTarget:function (card,player,target){
							return player!=target;
						},
						content:function(){
							'step 0'
							var list=[];
							if(target.countCards('he')>=2) list.push('交给你两张牌并回复一点体力');
							list.push('流失一点体力并摸两张牌');
							target.chooseControl(list).set('ai',function(event){
								if(target.countCards('he')>=2) return '交给你两张牌并回复一点体力';
								return '流失一点体力并摸两张牌';
							});
							'step 1'
							if(result.control=='流失一点体力并摸两张牌'){
								target.loseHp();
								target.draw(2);
							};
							if(result.control=='交给你两张牌并回复一点体力'){
								target.chooseCard(2,'he',true);
							}else{
								event.finish();
							};
							'step 2'
							if(result.bool){
								target.line(player);
								target.$give(result.cards,player);
								player.gain(result.cards,target);
								target.recover();
							};
						},
						ai:{
							order:2,
							result:{
								target:-1,
							},
						},
					},
					"TLP_pojia":{
						trigger:{
							player:"turnOverAfter",
						},
						TLP_type:'ni',
						direct:true,
						filter:function(event,player){
							return player.countCards('h')>=2;
						},
						content:function(){
							'step 0'
							player.chooseCard(get.prompt('TLP_pojia'),2,'h').set('ai',function(card){
								if(player.isTurnedOver()) return 5-get.value(card);
								return 0;
    						});
							'step 1'
							if(result.bool){
								player.logSkill('TLP_pojia');
								player.popup(lib.translate['TLP_pojia']);
								player.discard(result.cards);
								player.turnOver();
							};
						},
					},
					"TLP_shunshi":{
						trigger:{
							player:"loseEnd",
						},
						round:1,
						TLP_type:'zheng',
						filter:function (event,player){
							return _status.currentPhase!=player&&player.countCards('h')>0;
						},
						content:function(){
							'step 0'
							player.chooseCard('h','请选择一张手牌').set('ai',function(card){
								var target=_status.currentPhase;
								if(get.attitude(player,target)<0&&target.countCards('he')>=2) return 5-get.value(card);
								return 0;
    						});
							'step 1'
							if(result.bool){
								var target=_status.currentPhase;
								player.line(target);
								//player.logSkill('TLP_shunshi');
								//player.popup(lib.translate['TLP_shunshi']);
								player.discard(result.cards[0]);
								target.chooseToDiscard(2,'he',true);
							};
						},
					},
					"TLP_beizhan":{
						trigger:{
							source:"damageBegin",
						},
						TLP_type:'ni',
						filter:function (event,player){
							return event.card.name=='sha'&&player.countCards('h')==0;
						},
						check:function (event,player){
							return get.attitude(player,event.player)<0;
						},
						content:function(){
							trigger.num++;
						},
					},
					"TLP_yunxi":{
						trigger:{
							player:"recoverAfter",
						},
						direct:true,
						TLP_type:'zheng',
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('TLP_yunxi')).ai=function(target){
								return get.attitude(player,target);
							};
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								player.line(target);
								player.logSkill('TLP_yunxi');
								player.popup(lib.translate['TLP_yunxi']);
								target.draw();
							};
						},
					},
					"TLP_kongji":{
						trigger:{
							player:'loseEnd'
						},
						direct:true,
						TLP_type:'ni',
						filter:function(event,player){
							if(player.countCards('h')) return false;
							for(var i=0;i<event.cards.length;i++){
								if(event.cards[i].original=='h') return true;
							};
							return false;
						},
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('TLP_kongji'),function(card,player,target){
								return target!=player&&target.countCards('he')>0;
							}).ai=function(target){
								return -get.attitude(player,target);
							};
							'step 1'
							if(result.bool){
								event.target=result.targets[0];
								player.line(event.target);
								player.logSkill('TLP_kongji');
								player.popup(lib.translate['TLP_kongji']);
								event.target.chooseCard(1,'he',true);
							}else{
								event.finish();
							};
							'step 2'
							if(result.bool){
								event.target.line(player);
								event.target.$give(result.cards,player);
								player.gain(result.cards,event.target);
							};
						},
					},
					"TLP_yuanque":{
						trigger:{
							player:"damageEnd",
						},
						TLP_type:'zheng',
						content:function(){
							if(lib.TLP_mode=='connect'){
								player.turnTLPOL();
							}else{
								player.turnTLP();
							};
						},
					},
					"TLP_yanmei":{
						enable:"phaseUse",
						usable:1,
						TLP_type:'ni',
						filterCard:true,
						position:'he',
						check:function(card){
							return 4-get.value(card);
						},
						filterTarget:true,
						content:function(){
							target.addTempSkill('fengyin',{player:'phaseAfter'});
						},
						ai:{
							order:11,
							result:{
								target:function (player,target){
									if(player.countCards('h')<2) return ;
									return -1;
								},
							},
						},
					},
					"TLP_puyao":{
						TLP_type:'zheng',
					},
					"_TLP_puyao":{
						trigger:{
							player:"phaseEnd",
						},
						filter:function (event,player){
							return game.countPlayer(function(current){return get.distance(current,player,'attack')<=0&&current.hasSkill('TLP_puyao')})>0;
						},
						check:function (event,player){
							return player.isTurnedOver()||player.hp<=1;
						},
						content:function(){
							player.turnOver();
							player.recover();
							player.draw();
						},
					},
					"TLP_maidang":{
						trigger:{
							global:"damageBegin",
						},
						TLP_type:'ni',
						direct:true,
						filter:function(event,player){
							return get.distance(player,event.player,'attack')<=1&&player.countCards('h')>0&&event.nature!='thunder';
						},
						content:function(){
							'step 0'
							player.chooseCard('h',get.prompt('TLP_maidang')).set('ai',function(card){
								if(get.attitude(player,trigger.player)>0) return 6-get.value(card);
								return 0;
    						});
							'step 1'
							if(result.bool){
								player.line(trigger.player);
								player.logSkill('TLP_maidang');
								player.popup(lib.translate['TLP_maidang']);
								player.discard(result.cards[0]);
								trigger.num--;
							};
						},
					},
					"TLP_shengcai":{
						enable:"phaseUse",
						usable:1,
						TLP_type:'zheng',
						filterTarget:true,
						content:function(){
							'step 0'
							player.judge(function(card){
								if(get.color(card)=='red') return 1;
								return -1;
							});
							'step 1'
							for(var i=0;i<game.players.length;i++){
								var pl=game.players[i];
								if(get.color(result.card)=='red'){
									pl.draw();
								}else{
									pl.chooseToDiscard(1,'he',true);
								};
							};
							event.card=result.card;
							'step 2'
							if(target==player){
								player.gain(event.card,'gain2');
							}else{
								player.$give(event.card,target);
								target.gain(event.card,player);
							};
						},
						ai:{
							order:12,
							result:{
								player:function (player){
									if(player.countCards('h')<2) return ;
									return 1;
								},
							},
						},
					},
					"TLP_huanmie":{
						trigger:{
							player:"damageAfter",
						},
						TLP_type:'ni',
						forced:true,
						filter:function(event,player){
							return event.source;
						},
						content:function(){
							trigger.source.showHandcards();
						},
					},
					"TLP_dacheng":{
						marktext:"大",
						intro:{
							content:'cards',
						},
						enable:"phaseUse",
						usable:1,
						discard:false,
						TLP_type:'zheng',
						filterCard:function(card){
							var suit=get.suit(card);
							for(var i=0;i<ui.selected.cards.length;i++){
								if(get.suit(ui.selected.cards[i])==suit) return false;
							};
							return true;
						},
						complexCard:true,
						selectCard:[1,Infinity],
						content:function(){
							player.lose(cards,ui.special);
							player.storage.TLP_dacheng=cards;
							player.markSkill('TLP_dacheng');
							game.log(player,'将',cards,'放在武将牌上');
						},
						ai:{
							order:1,
							result:{
								player:function (player){
									if(player.countCards('h')>player.getHandcardLimit()) return 3;
									return ;
								},
							},
						},
					},
					"_TLP_dacheng":{
						trigger:{
							player:"phaseEnd",
						},
						direct:true,
						popup:false,
						filter:function(event,player){
							return player.storage.TLP_dacheng!=undefined;
						},
						content:function(){
							'step 0'
							player.chooseTarget('请选择一名角色',true).ai=function(target){
								return get.attitude(player,target);
							};
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								player.line(target);
								player.logSkill('TLP_dacheng');
								player.popup(lib.translate['TLP_dacheng']);
								target.gain(player.storage.TLP_dacheng,'gain2');
								delete player.storage.TLP_dacheng;
								player.unmarkSkill('TLP_dacheng');
							};
						},
					},
					"TLP_huihan":{
						trigger:{
							player:"useCardEnd",
						},
						TLP_type:'ni',
						round:1,
						filter:function(event,player){
							return (get.type(event.card)=='basic'||get.type(event.card)=='trick')&&player.countCards('h',{suit:get.suit(event.card)})>0;
						},
						content:function(){
							'step 0'
							player.chooseCard('h','请选择一张手牌',{suit:get.suit(trigger.card)}).set('ai',function(card){
								return 5-get.value(card);
    						});
							'step 1'
							if(result.bool){
								player.discard(result.cards[0]);
								player.gain(trigger.card,'gain2');
							};
						},
					},
				},
				translate:{
					"TLP_mofashi":"魔法师",
					"TLP_lingju":"灵聚",
					"TLP_lingju_info":"正位:每当你使用非延时类锦囊时，你可以令一名其他角色摸一张牌",
					"TLP_geduan":"隔断",
					"TLP_geduan_info":"逆位:每当你和其他角色成为一张牌的目标前，你可令此牌对一名其他角色额外结算一次，然后此牌对你无效",
					"TLP_nvjisi":"女祭司",
					"TLP_qianren":"谦忍",
					"TLP_qianren_info":"正位:锁定技，每当你于回合外失去牌前，若你的手牌数大于你的体力值，你摸一张牌",
					"TLP_mansun":"满损",
					"TLP_mansun_info":"逆位:准备阶段开始时，你可以将武将牌翻面并获得一至两名手牌数不小于其体力值的角色区域内的一张牌",
					"TLP_nvhuang":"女皇",
					"TLP_yiya":"仪雅",
					"TLP_yiya_info":"正位:每当你受到一次伤害后，你可以移动场上的一张牌",
					"TLP_rongmu":"荣慕",
					"TLP_rongmu_info":"逆位:每当一名其他角色于其出牌阶段外获得牌时，你可以弃置一张牌视为对其使用了一张【顺手牵羊】",
					"TLP_huangdi":"皇帝",
					"TLP_weiquan":"威权",
					"TLP_weiquan_info":"正位:每当一名与你的距离不大于1的其他角色受到一次伤害时，你可以交给其一张手牌并令此伤害+1",
					"TLP_zhidu":"执独",
					"TLP_zhidu_info":"逆位:每当你和其他角色成为一张牌的目标后，你可令此牌对其他角色无效，然后此牌对你额外结算一次",
					"TLP_jiaohuang":"教皇",
					"TLP_jianxin":"兼心",
					"TLP_jianxin_info":"正位:每当你回复一次体力或受到一次伤害后，你可以弃置一张牌，然后令一名其他角色回复一点体力",
					"TLP_anyan":"暗言",
					"TLP_anyan_info":"逆位:出牌阶段限一次，你可以展示你的手牌并弃置场上任意名角色至多X张牌，若X不小于2，你失去1点体力。（X为你的黑色手牌的数量）",
					"TLP_lianren":"恋人",
					"TLP_linai":"临爱",
					"TLP_linai_info":"正位:准备阶段开始时，你可令一名其他角色获得你区域内的所有牌并与你各回复一点体力",
					"TLP_yuzong":"欲纵",
					"TLP_yuzong_info":"逆位:锁定技，每当你回复体力后，你须将武将牌翻面并令一名其他角色选择一项：1.摸两张牌，2.回复一点体力",
					"TLP_zhanche":"战车",
					"TLP_zhanhui":"战辉",
					"TLP_zhanhui_info":"正位:每当你对一名角色造成伤害后，你可与其各摸一张牌",
					"TLP_qienuo":"怯懦",
					"TLP_qienuo_info":"逆位:当你受到一次伤害时，你可以将X张手牌交给伤害来源并令此伤害-1（X为你手牌数的一半，向上取整且至少为1）",
					"TLP_liliang":"力量",
					"TLP_xinyong":"信勇",
					"TLP_xinyong_info":"正位:当你使用或打出一张【杀】后，你可以做一次判定，若判定牌为红色，你获得之",
					"TLP_youyi":"犹疑",
					"TLP_youyi_info":"逆位:出牌阶段限一次，你可以观看一名其他角色的手牌，若你如此做，在观看之后你需对其使用一张牌，否则其弃置你一张牌",
					"TLP_yinzhe":"隐者",
					"TLP_xingxin":"醒心",
					"TLP_xingxin_info":"正位:准备阶段开始时，你可以将武将牌翻面，然后你获得你判定区中的牌",
					"TLP_gumi":"孤迷",
					"TLP_gumi_info":"逆位:当你的武将牌翻面时，你可以选择一项：1.摸一张牌，2.将场上的一张牌置入弃牌堆",
					"TLP_mingyunzhilun":"命运之轮",
					"TLP_fulin":"福临",
					"TLP_fulin_info":"正位:每当其他角色的红桃判定牌生效后，你可以摸一张牌",
					"TLP_wangni":"罔逆",
					"TLP_wangni_info":"逆位:锁定技，处于你攻击范围内的一名其他角色受到一次伤害时，你须弃置两张牌（不足则全弃），令该伤害-1",
					"TLP_zhengyi":"正义",
					"TLP_zhongzheng":"中正",
					"TLP_zhongzheng_info":"正位:出牌阶段限一次，你可以令两名角色分别展示并交给对方一张手牌，若两张牌的颜色相同，你可以摸一张牌",
					"TLP_piankui":"偏愧",
					"TLP_piankui_info":"逆位:锁定技，当你对一名角色造成伤害后，若其手牌数小于你的手牌数，你须流失一点体力并令此伤害+1",
					"TLP_daodiaoren":"倒吊人",
					"TLP_xisheng":"牺牲",
					"TLP_xisheng_info":"正位:出牌阶段限一次，你可以失去1点体力，令一名其他角色回复1点体力",
					"TLP_mangshang":"莽殇",
					"TLP_mangshang_info":"逆位:出牌阶段限一次，你可以失去1点体力并获得场上的一张牌",
					"TLP_sishen":"死神",
					"TLP_poli":"破立",
					"TLP_poli_info":"正位:出牌阶段开始时，若你的体力上限为3，你可以失去1点体力并增加1点体力上限，若你的体力上限为4，你可以流失1点体力上限并回复1点体力",
					"TLP_bie":"辟噩",
					"TLP_bie_info":"逆位:每当你进入濒死状态时，你可以弃置全部手牌视为你使用了一张【桃】",
					"TLP_jiezhi":"节制",
					"TLP_pinghe":"平和",
					"TLP_pinghe_info":"正位:出牌阶段结束时，若你未于本阶段内使用或打出过【杀】，你回复一点体力",
					"TLP_huadi":"画地",
					"TLP_huadi_info":"逆位:锁定技，你攻击范围内的角色不能对其攻击范围外的角色造成伤害",
					"TLP_emo":"恶魔",
					"TLP_youyu":"诱欲",
					"TLP_youyu_info":"正位:出牌阶段限一次，你可以令一名其他角色选择一项：1.交给你两张牌并回复一点体力；2.减少一点体力并摸两张牌",
					"TLP_pojia":"破枷",
					"TLP_pojia_info":"逆位:每当你的武将牌翻面后，你可以弃置两张手牌将之翻回",
					"TLP_gaota":"高塔",
					"TLP_shunshi":"顺势",
					"TLP_shunshi_info":"正位:每当你于回合外失去手牌时，你可以额外弃置一张手牌令当前回合角色弃置两张牌，每轮限一次",
					"TLP_beizhan":"背战",
					"TLP_beizhan_info":"逆位:当你使用【杀】造成伤害时，若此【杀】为你最后的手牌，此伤害+1",
					"TLP_xingxing":"星星",
					"TLP_yunxi":"孕希",
					"TLP_yunxi_info":"正位:每当你回复一次体力后，你可以令一名角色摸一张牌",
					"TLP_kongji":"空寂",
					"TLP_kongji_info":"逆位:每当你失去最后的手牌后，你可令一名其他角色交给你一张牌",
					"TLP_yueliang":"月亮",
					"TLP_yuanque":"圆缺",
					"TLP_yuanque_info":"正位:每当你受到伤害时，你可以改变你的一张塔罗牌的正逆位",
					"TLP_yanmei":"魇魅",
					"TLP_yanmei_info":"逆位:出牌阶段限一次，你可以弃置一张牌并封印一名其他角色的非锁定技，直至其回合结束",
					"TLP_taiyang":"太阳",
					"TLP_puyao":"普曜",
					"TLP_puyao_info":"正位:你攻击范围内的角色的结束阶段结束时，该角色可以将武将牌翻面，然后摸一张牌并回复一点体力",
					"_TLP_puyao":"普曜",
					"_TLP_puyao_info":"正位:你攻击范围内的角色的结束阶段结束时，该角色可以将武将牌翻面，然后摸一张牌并回复一点体力",
					"TLP_maidang":"霾当",
					"TLP_maidang_info":"逆位:每当你攻击范围内的角色受到雷属性以外的伤害时，你可以弃置一张手牌，令此伤害-1",
					"TLP_shenpan":"审判",
					"TLP_shengcai":"圣裁",
					"TLP_shengcai_info":"正位:出牌阶段限一次，你可以选择一名角色，然后做一次判定，若判定牌为红色，所有角色摸一张牌，否则所有角色弃一张牌，然后你可以将此判定牌交给目标角色",
					"TLP_huanmie":"幻灭",
					"TLP_huanmie_info":"逆位:锁定技，当你受到一次伤害后，伤害来源须展示其手牌",
					"TLP_shijie":"世界",
					"TLP_dacheng":"大成",
					"TLP_dacheng_info":"正位:出牌阶段限一次，你可将任意张不同花色的手牌置于你的武将牌上，若如此做，结束阶段，你须将这些牌依次交给一名角色",
					"TLP_huihan":"悔憾",
					"TLP_huihan_info":"逆位:每轮限一次，当你使用的基本牌或非延时性锦囊牌即将进入弃牌堆时，你可打出一张相同花色的手牌替换之",
				},
			};
			if(lib.device||lib.node){
				for(var i in TLP.character){TLP.character[i][4].push('ext:扩展ol/'+i+'.jpg');}
			}else{
				for(var i in TLP.character){TLP.character[i][4].push('db:extension-扩展ol:'+i+'.jpg');}
			}
			return TLP;
		});
		lib.group.push('TLP');
		lib.translate.TLP='<span style=\"color:#737DAB\">塔</span>';
		lib.config.all.characters.push('TLP');
		if(!lib.config.characters.contains('TLP')) lib.config.characters.push('TLP');
		lib.translate['TLP_character_config']='塔罗牌';
		lib.help.塔罗牌="<li>塔罗牌的获得：<ul><li>游戏开始时，塔罗牌武将可以选择两张塔罗牌武将组成塔罗牌组。若你为双将且两个武将均为塔罗牌武将，则第一张武将进入塔罗牌组，第二张武将正逆位技能均可以使用<li>联机模式下随机获得两张塔罗牌组成塔罗牌组</ul><li>正逆位：<ul><li>正位时拥有正位技能，逆位时拥有逆位技能，获得塔罗牌后组成的塔罗牌组中，所有武将均为正位<li>回合开始和回合结束时，你可以调整一张塔罗牌的正逆位<li>国战模式明置塔罗牌武将后可以同时拥有正逆位技能</ul>";
}