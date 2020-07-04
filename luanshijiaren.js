window.func=function(lib,game,ui,get,ai,_status){
	game.import('character',function(){
		var luanshijiaren={
			name:'luanshijiaren',
			connect:true,
			connectBanned:["LSJR1_mifuren","LSJR_sunluyu","LSJR_bulianshi"],
			characterSort:{
				'luanshijiaren':{
					'lsjr_zhan':['LSJR_dongbai','LSJR_lvji','LSJR_wangyuanji','LSJR_xinxianying','LSJR_baosanniang','LSJR_mifuren','LSJR_zhangxingcai','LSJR_sunluban'],
				},
			},
			character:{
				"LSJR_dongbai":["female","qun",3,["LSJR_quansi","LSJR_huoshi","LSJR_luohua"],["ext:扩展ol/LSJR_dongbai.jpg"]],
				"LSJR_lvji":["female","qun",3,["LSJR_huaji","LSJR_yazi"],["ext:扩展ol/LSJR_lvji.jpg","des:吕姬:吕布与严氏之女，生卒年不详。下邳战役时吕布遭曹操围困，作为派出援军条件，吕姬与袁术之子有政治婚姻，但因出嫁途中被刘备与曹操拦截因而返回。吕布死后随母亲发往许昌，后不知所终。在光荣三国志系列，叫做吕玲绮，在电影《铜雀台》中，叫做灵雎。"]],
				"LSJR_wangyuanji":["female","wei",3,["LSJR_fuluan","LSJR_anjian"],["ext:扩展ol/LSJR_wangyuanji.jpg","des:王元姬(217年-268年4月20日)，东海郯县(今山东郯城西北)人。三国时期曹魏经学家王朗之孙女、王肃之女，晋文帝司马昭妻子，晋武帝司马炎与齐王司马攸的生母。王元姬幼时便通《诗经》、《论语》，嫁司马昭后竭尽妇道、谦虚谨慎。其人颇有远见，曾预言钟会谋反之事。泰始元年(265年)，司马炎建立西晋，尊王元姬为皇太后，宫号曰崇化宫。王元姬身处太后之位，提倡节俭，身体力行，作为众妃子的表率。在其治理之下，后宫井井有条，众人和睦相处。泰始四年(268年)，王元姬崩逝，终年五十二岁。谥号文明皇后，与司马昭合葬于崇阳陵。"]],
				"LSJR_xinxianying":["female","wei",3,["LSJR_tongshi","LSJR_yannian"],["ext:扩展ol/LSJR_xinxianying.jpg","des:辛氏(191年-269年)，字宪英，名不详。颍川阳翟人。辛毗之女，羊耽之妻、辛敞之姐。魏晋时期才女。辛宪英聪朗有才鉴，曾劝弟尽忠职守，又预言钟会将会叛变。生平见载于《晋书·卷九十六·列女传·羊耽妻辛氏传》。其外孙夏侯湛亦为其撰写传记《羊太常辛夫人传》，裴松之注《三国志》时曾于《辛毗传》中加以引用。"]],
				"LSJR_baosanniang":["female","shu",4,["LSJR_pingjiang","LSJR_huawu"],["ext:扩展ol/LSJR_baosanniang.jpg","des:鲍三娘是中国民间传说中的人物，事迹多见于《花关索传》。相传她是鲍家庄鲍凯(鲍员外)的小女儿(排行第三)，鲍丰、鲍义的妹妹。自小聪明伶俐，深受大家的喜爱。据说关羽一看到这个儿媳妇就非常喜爱，甚至亲自传授鲍三娘武艺，因此也造就了鲍三娘的文武双全。荆州失守之后鲍三娘就跟随关索一同投奔蜀汉，并随诸葛亮征讨南蛮。平定了南蛮之后，夫妻二人就此一直替诸葛亮镇守着南中，他们也的确留下了许多脍炙人口的行侠仗义故事，在民间广为流传。"]],
				"LSJR_mifuren":["female","shu",3,["LSJR_fujun","LSJR_tuogu"],["ext:扩展ol/LSJR_mifuren.jpg"]],
				"LSJR_zhangxingcai":["female","shu",3,["LSJR_xiannei","LSJR_muyi"],["ext:扩展ol/LSJR_zhangxingcai.jpg"]],
				"LSJR_sunluban":["female","wu",3,["LSJR_bengcheng","LSJR_zhengchong"],["ext:扩展ol/LSJR_sunluban.jpg"]],
				"LSJR_sunshangxiang":["female","wu",3,["LSJR_shijian"],["ext:扩展ol/LSJR_sunshangxiang.jpg"]],
				"LSJR_bulianshi":["female","wu",3,["LSJR_muyi1"],["ext:扩展ol/LSJR_bulianshi.jpg"]],
				"LSJR_sunluyu":["female","wu",3,["LSJR_wenyu"],["ext:扩展ol/LSJR_sunluyu.jpg"]],
				"LSJR_caifuren":["female","qun",3,["LSJR_qiequan"],["ext:扩展ol/LSJR_caifuren.jpg"]],
				//"LSJR_zhugeguo":["female","shu",3,["LSJR_yuhua","LSJR_xiandao"],["ext:扩展ol/LSJR_zhugeguo.jpg"]],
				"LSJR_zhangchunhua":["female","wei",3,["LSJR_shangshi"],["ext:扩展ol/LSJR_zhangchunhua.jpg"]],
				"LSJR1_mifuren":["female","shu",1,["LSJR_xianshu","LSJR_conghui"],["ext:扩展ol/LSJR1_mifuren.jpg"]],
			},
			characterTitle:{
				"LSJR_dongbai":"<span style='font-weight:bold;font-family:lishu'>魔王的传人</span>",
				"LSJR_lvji":"<span style='font-weight:bold;font-family:lishu'>不死的无双</span>",
				"LSJR_wangyuanji":"<span style='font-weight:bold;font-family:lishu'>西晋之母</span>",
				"LSJR_xinxianying":"<span style='font-weight:bold;font-family:lishu'>历史守望者</span>",
				"LSJR_baosanniang":"<span style='font-weight:bold;font-family:lishu'>战场的红颜</span>",
				"LSJR_mifuren":"<span style='font-weight:bold'>永诀的巾帼</span>",
				"LSJR_zhangxingcai":"<span style='font-weight:bold;font-family:lishu'>蜀汉之凤</span>",
				"LSJR_sunluban":"<span style='font-weight:bold;font-family:lishu'>骄奢的荆棘</span>",
			},
			skill:{
				"LSJR_shijian":{
					trigger:{
						player:"damageEnd",
					},
					direct:true,
					filter:function (event,player){
						return game.countPlayer(function(current){return current.countCards('e')>0})>0;
					},
					content:function (){
						'step 0'
						player.chooseTarget(get.prompt('LSJR_shijian'),function(card,player,target){
							return target.countCards('e')>0;
						}).ai=function(target){
							return -ai.get.attitude(player,target);
						};
						'step 1'
						if(result.bool){
							player.line(event.target1);
							player.logSkill('LSJR_shijian');
							event.target1=result.targets[0];
							player.chooseCardButton(lib.translate[result.targets[0].name]+'装备区内的牌',result.targets[0].get('e')).ai=function(button){
								return 1;
							};
						}else{
							event.finish();
						};
						'step 2'
						if(result.bool){
							event.equipCard=result.links[0];
							player.chooseTarget().ai=function(target){
								return ai.get.attitude(player,target);
							};
						}else{
							event.finish();
						};
						'step 3'
						if(result.bool){
							event.target=result.targets[0];
							player.chooseControl(['手牌区','装备区']).set('ai',function(event){
								return '装备区';
							});
						}else{
							event.finish();
						};
						'step 4'
						if(result.control=='手牌区'){
							event.target1.$give(event.equipCard,event.target);
							event.target.gain(event.equipCard,event.target1);
						};
						if(result.control=='装备区'){
							event.target1.$give(event.equipCard,event.target);
							event.target.gain(event.equipCard,event.target1);
							event.target.equip(event.equipCard);
						};
						if(get.subtype(event.equipCard)=='equip1') player.draw(2);
						if(get.subtype(event.equipCard)=='equip2') player.recover();
						if(get.subtype(event.equipCard)=='equip3'||get.subtype(event.equipCard)=='equip4'){
							player.chooseTarget('请选择【矢箭】的目标',function(card,player,target){
								if(get.subtype(event.equipCard)=='equip3') return target.countCards('h')>0;
								if(get.subtype(event.equipCard)=='equip4') return get.distance(player,target,'attack')<=1;
							}).ai=function(target){
								return -ai.get.attitude(player,target);
							};
						}else{
							event.finish();
						};
						'step 5'
						if(result.bool){
							if(get.subtype(event.equipCard)=='equip3') player.discardPlayerCard(result.targets[0],1,'h');
							if(get.subtype(event.equipCard)=='equip4') result.targets[0].damage(1,'fire');
						}else{
							event.finish();
						};
					},
				},
				"LSJR_muyi1":{
					trigger:{
						player:["loseEnd","gainEnd"],
					},
					content:function (){
						"step 0"
						player.judge(function(card){
							if(get.suit(card)=='spade') return -2;
							if(get.suit(card)=='club') return 0;
							if(get.suit(card)=='heart') return 1;
							if(get.suit(card)=='diamond') return 2;
						});
						"step 1"
						if(get.suit(result.card)=='spade') player.loseHp();
						if(get.suit(result.card)=='heart') player.gain(result.card,'gain2');
						if(get.suit(result.card)=='diamond') player.recover();
					},
				},
				"LSJR_wenyu":{
					trigger:{
						global:"useCardBefore",
					},
					filter:function (event,player){
						return event.cards&&event.cards.length>0&&
						player.countCards('he',function(card){return get.suit(card)==get.suit(event.card)&&card.name!='shan'})>0&&player!=event.player;
					},
					direct:true,
					content:function (){
						"step 0"
						player.chooseCard('是否替换'+lib.translate[trigger.player.name]+'的'+lib.translate[trigger.card.name]+'【'+lib.translate[get.suit(trigger.card)]+get.number(trigger.card)+'】？','he',function(card,player,target){return get.suit(card)==get.suit(trigger.card)&&card.name!='shan'}).set('ai',function(card){
							if(get.attitude(player,trigger.player)<0&&(card.name=='sha'||card.name=='du')) return 1;
							return 0;
						});
						"step 1"
						if(result.bool){
							player.logSkill('LSJR_wenyu');
							var card=trigger.card;
							player.gain(game.createCard(card),'gain2');
							trigger.card.name=result.cards[0].name;
							game.broadcastAll(function(card1,card2){
								card1.init(card2);
							},trigger.cards[0],result.cards[0]);
							player.lose(result.cards[0],ui.special);
						}else{
							event.finish();
						};
					},
				},
				"LSJR_qiequan":{
					trigger:{
						global:"gainBegin",
					},
					filter:function (event,player){
						return event.player!=player&&_status.currentPhase!=event.player&&player.countCards('he',{suit:'heart'})>0;
					},
					direct:true,
					content:function (){
						"step 0"
						player.chooseToDiscard(get.prompt('LSJR_qiequan'),1,'he',{suit:'heart'}).ai=function(card){
							if(get.attitude(player,trigger.player)<0&&player.hp>1) return 1;
							return 0;
						};
						"step 1"
						if(result.bool){
							player.logSkill('LSJR_qiequan');
							trigger.untrigger();
							trigger.finish();
							player.loseHp();
							player.insertPhase();
						}else{
							event.finish();
						};
					},
				},
				"LSJR_shangshi":{
					trigger:{
						global:"damageEnd",
					},
					filter:function (event,player){
						return event.player!=player;
					},
					check:function(event,player){
						return event.source&&get.attitude(player,event.player)>0&&get.attitude(player,event.source)<0&&player.hp>1;
					},
					content:function (){
						player.loseHp();
						if(trigger.source&&trigger.source.countCards('he')>0) trigger.source.chooseToDiscard(1,'he',true);
						player.draw();
					},
				},
				"LSJR_xianshu":{
					trigger:{
						player:"phaseDrawBegin",
					},
					forced:true,
					content:function (){
					  if(player.maxHp<5){
						player.gainMaxHp();
						player.recover();
					  }else{
						player.draw();
					  };
					},
				},
				"LSJR_conghui":{
					mod:{
						maxHandcard:function (player,num){
							return num+2;
						},
					},
				},
				"LSJR_quansi":{
					mod:{
						maxHandcard:function (player,num){
							var num1=player.countCards("h")-(player.hp-1);
							if(num1>num) return num1;
							return num;
						},
					},
				},
				"LSJR_huoshi":{
					trigger:{
						player:"phaseBegin",
					},
					unique:true,
					mark:true,
					skillAnimation:true,
					animationColor:'thunder',
					init:function (player){
						player.storage.LSJR_huoshi=false;
					},
					forced:true,
					filter:function (event,player){
						return !player.storage.LSJR_huoshi&&player.countCards('h')>game.countPlayer(function(current){return current.sex=="male"});
					},
					content:function (){
						player.awakenSkill('LSJR_huoshi');
						player.storage.LSJR_huoshi=true;
						player.gainMaxHp();
						player.removeSkill("LSJR_luohua");
						player.addSkill("lieren");
						setTimeout(function(){
							player.chat('成为我爷爷在天之灵的祭品吧！');
						},1000);
					},
					intro:{
						content:"limited",
					},
				},
				"LSJR_luohua":{
					trigger:{
						player:'dieBegin'
					},
					forced:true,
					filter:function(event){
						return event.source&&event.source.maxHp>2;
					},
					content:function(){
						trigger.source.loseMaxHp(trigger.source.maxHp-2);
					},
				},
				"LSJR_huaji":{
					trigger:{
						player:'shaBegin'
					},
					filter:function(event,player){
						return !event.directHit&&event.target.countCards('h')>0;
					},
					priority:-1,
					check:function(event,player){
						return get.attitude(player,event.target)<0;
					},
					content:function(){
						'step 0'
						trigger.target.chooseCard(1,'h',{type:'trick'},'是否展示一张非延时性锦囊牌？').set('ai',function(card){
							if(trigger.target.countCards('h',{name:'shan'})>0) return 1;
							return 0;
						});
						'step 1'
						if(result.bool){
							trigger.target.showCards(result.cards[0]);
						}else{
							if(typeof trigger.shanRequired=='number'){
								trigger.shanRequired++;
							}else{
								trigger.shanRequired=2;
							};
							player.chat('父亲！您的英明会继续下去的！');
						};
					},
				},
				"LSJR_yazi":{
					trigger:{
						player:"damageBegin",
					},
					forced:true,
					priority:-Infinity,
					filter:function (event,player){
						return event.num>1;
					},
					content:function (){
						if(trigger.source) trigger.source.damage(trigger.num-1,trigger.nature,trigger.source)
						trigger.num=1;
					},
				},
				"LSJR_fuluan":{
					trigger:{
						global:"damageAfter",
					},
					filter:function (event,player){
						return event.card&&player.countCards('h')>0&&event.player.isAlive();
					},
					direct:true,
					content:function (){
						'step 0'
						player.chooseCard(1,'h',{suit:get.suit(trigger.card)},get.prompt('LSJR_fuluan')).set('ai',function(card){
							if(get.attitude(player,event.player)>0) return 6-get.value(card);;
						});
						'step 1'
						if(result.bool){
							player.line(trigger.player);
							player.logSkill('LSJR_fuluan');
							player.discard(result.cards[0]);
							trigger.player.recover();
						}else{
							event.finish();
						};
					},
				},
				"LSJR_anjian":{
					trigger:{
						player:"phaseBegin",
					},
					content:function (){
						player.draw();
						player.skip('phaseDraw');
						player.skip('phaseDiscard');
						player.addTempSkill('LSJR_anjian1',{player:'phaseAfter'});
					},
				},
				"LSJR_anjian1":{
					trigger:{
						player:"phaseEnd",
					},
					forced:true,
					popup:false,
					content:function (){
						player.draw();
					},
				},
				"LSJR_tongshi":{
					trigger:{
						player:'phaseDrawBefore'
					},
					check:function(event,player){
						return false;
					},
					content:function(){
						'step 0'
						trigger.cancel();
						event.pl=player;
						event.num1=0;
						player.chat('宜威而喜，何以能久！魏其不昌乎？');
						'step 1'
						event.pl=event.pl.next;
						event.num1++;
						if(event.pl.countCards('he')>0){
							player.gainPlayerCard(1,'he',event.pl,true);
							player.chooseCard(1,'h',true).set('ai',function(card){
								return 6-get.value(card);
							});
						}else{
							if(event.num1<game.players.length-1) event.goto(1);
						};
						'step 2'
						if(result.bool){
							player.$give(1,event.pl);
							event.pl.gain(result.cards[0],player);
							if(event.num1<game.players.length-1) event.goto(1);
						}else{
							event.finish();
						};
					},
				},
				"LSJR_yannian":{
					trigger:{
						player:'dyingBegin'
					},
					filter:function(event,player){
						return player.countCards('h')>0;
					},
					direct:true,
					content:function(){
						'step 0'
						player.chooseCard(1,'h',get.prompt('LSJR_yannian')).set('ai',function(card){
							return 1;
						});
						'step 1'
						if(result.bool){
							player.logSkill('LSJR_yannian');
							player.discard(result.cards[0]);
							player.judge(function(card){
								if(get.color(card)=='black') return -2;
								return 2;
							});
						}else{
							event.finish();
						};
						'step 2'
						if(get.color(result.card)=='red'){
							player.recover();
							trigger.untrigger();
							trigger.finish();
						};
					},
				},
				"LSJR_pingjiang":{
					mod:{
						globalFrom:function(from,to,distance){
							return distance-(to.maxHp-to.hp);
						},
					},
				},
				"LSJR_huawu":{
					trigger:{
						player:'phaseDiscardEnd'
					},
					filter:function(event,player){
						if(event.cards==undefined) return false;
						for(var i=0;i<event.cards.length;i++){
							if(get.color(event.cards[i])=='red') return true;
						};
					},
					direct:true,
					content:function(){
						'step 0'
						event.num1=0;
						event.num2=0;
						for(var i=0;i<trigger.cards.length;i++){
							if(get.color(trigger.cards[i])=='red') event.num1++;
						};
						'step 1'
						event.num2++;
						player.chooseTarget('请选择【杀】的目标',function(card,player,target){
							return player!=target;
						}).ai=function(target){
							return -ai.get.attitude(player,target);
						};
						'step 2'
						if(result.bool){
							player.line(result.targets);
							player.logSkill('LSJR_huawu');
							player.useCard({name:'sha'},result.targets[0]);
							if(event.num2==1) player.chat('战场的红要用敌血染成！');
							if(event.num2<event.num1) event.goto(1);
						}else{
							event.finish();
						};
					},
				},
				"LSJR_fujun":{
					enable:'phaseUse',
					usable:1,
					filterCard:function(card){
						return get.type(card)=='trick'||get.type(card)=='delay';
					},
					filterTarget:function(card,player,target){
						return target!=player;
					},
					selectTarget:[1,2],
					content:function(){
						target.draw();
						if(player.hp==1) player.recover();
					},
					ai:{
						expose:0.3,
						order:2,
						result:{
							target:1,
						},
					},
				},
				"LSJR_tuogu":{
					trigger:{
						player:'dieBegin'
					},
					content:function(){
						'step 0'
						event.num2++;
						player.chooseTarget(get.prompt('LSJR_tuogu'),function(card,player,target){
							return player!=target&&Math.abs(target.maxHp-player.maxHp)>=1;
						}).ai=function(target){
							if(Math.abs(target.maxHp-player.maxHp)<=1) return ai.get.attitude(player,target);
							return -ai.get.attitude(player,target);
						};
						'step 1'
						if(result.bool){
							player.line(result.targets[0]);
							var pl=result.targets[0];
							var num=Math.abs(pl.maxHp-player.maxHp);
							if(pl.maxHp-num<0){
								pl.loseMaxHp(pl.maxHp);
							}else{
								pl.loseMaxHp(num);
							};
							pl.addSkill('juejing');
							player.chat('步行怎把幼君扶！');
						}else{
							event.finish();
						};
					},
				},
				"LSJR_xiannei":{
					trigger:{
						global:'phaseEnd'
					},
					filter:function(event,player){
						return event.player.countUsed()==0&&event.player!=player;
					},
					check:function(event,player){
						return get.attitude(player,event.player)>=0;
					},
					content:function(){
						'step 0'
						trigger.player.chooseControl(['摸一张牌',lib.translate[player.name]+'视为对你指定的其他角色使用一张【杀】']).set('ai',function(event){
							return '摸一张牌';
						}).set('prompt','【贤内】');
						'step 1'
						if(result.control=='摸一张牌'){
							trigger.player.draw();
						};
						if(result.control==lib.translate[player.name]+'视为对你指定的其他角色使用一张【杀】'){
							trigger.player.chooseTarget('请选择【杀】的目标',function(card,player,target){
								return player!=target&&trigger.player!=target;
							}).ai=function(target){
								return -ai.get.attitude(trigger.player,target);
							};
						}else{
							event.finish();
						};
						'step 2'
						if(result.bool){
							player.useCard({name:'sha'},result.targets[0]);
							player.chat('我守护的，是蜀汉的未来！');
						}else{
							event.finish();
						};
					},
				},
				"LSJR_muyi":{
					trigger:{
						target:'shaBegin'
					},
					forced:true,
					content:function(){
						'step 0'
						var list=['令'+lib.translate[player.name]+'摸一张牌'];
						if(trigger.player.countCards('h')>0) list.push('被'+lib.translate[player.name]+'弃置一张手牌');
						trigger.player.chooseControl(list).set('ai',function(event){
							if(trigger.player.countCards('h')>3) return '被'+lib.translate[player.name]+'弃置一张手牌';
							return '令'+lib.translate[player.name]+'摸一张牌';
						}).set('prompt','【母仪】');
						'step 1'
						if(result.control=='令'+lib.translate[player.name]+'摸一张牌'){
							player.draw();
						};
						if(result.control=='被'+lib.translate[player.name]+'弃置一张手牌'){
							player.discardPlayerCard(trigger.player,1,'h',true);
						};
					},
				},
				"LSJR_bengcheng":{
					trigger:{
						player:'phaseBegin'
					},
					check:function(event,player){
						return game.countPlayer(function(current){return player!=current&&ai.get.attitude(player,current)<0&&current.countCards('he')>=2})>0&&
						player.countCards('h')>1&&
						player.hp>1;
					},
					content:function(){
						'step 0'
						player.turnOver();
						player.skip('phaseUse');
						'step 1'
						trigger.player.chooseTarget('请选择【崩城】的目标',function(card,player,target){
							return player!=target;
						}).ai=function(target){
							if(target.countCards('he')>=2) return -ai.get.attitude(player,target);
							return 0;
						};
						'step 2'
						if(result.bool){
							player.line(result.targets[0]);
							player.discardPlayerCard(result.targets[0],[0,4],'he');
						}else{
							event.finish();
						};
					},
				},
				"LSJR_zhengchong":{
					trigger:{
						global:'discardAfter'
					},
					filter:function(event,player){
						if(event.player.sex!='male') return false;
						if(_status.currentPhase==player) return false;
						for(var i=0;i<event.cards.length;i++){
							if((event.cards[i].name=='tao'||event.cards[i].name=='jiu'||get.type(event.cards[i])=='equip')&&get.position(event.cards[i])=='d') return true;
						};
						return false;
					},
					content:function(){
						"step 0"
						player.chat('就来一杯嘛，反正你的死期也不远了。');
						if(trigger.delay==false) game.delay();
						"step 1"
						var cards=[];
						var cards1=[];
						for(var i=0;i<trigger.cards.length;i++){
							if((trigger.cards[i].name=='tao'||trigger.cards[i].name=='jiu')&&get.position(trigger.cards[i])=='d') cards.push(trigger.cards[i]);
							if(get.type(trigger.cards[i])=='equip'&&get.position(trigger.cards[i])=='d') cards1.push(trigger.cards[i]);
						};
						if(cards.length){
							player.gain(cards,'log');
							player.$gain2(cards);
						};
						for(var i=0;i<cards1.length;i++){
							player.$equip(cards1[i]);
							game.addVideo('equip',player,get.cardInfo(cards1[i]));
							game.log(player,'装备了',cards1[i]);
						};
					},
				},
			},
			translate:{
				'lsjr_zhan':'占戈DIY',
				'LSJR_dongbai':'董白',
				'LSJR_lvji':'吕姬',
				'LSJR_wangyuanji':'王元姬',
				'LSJR_xinxianying':'辛宪英',
				'LSJR_baosanniang':'鲍三娘',
				'LSJR_mifuren':'糜夫人',
				'LSJR_zhangxingcai':'张星彩',
				'LSJR_sunluban':'孙鲁班',
				'LSJR_quansi':'权嗣',
				'LSJR_quansi_info':'<span style=\"color:#1688F2\">锁定技</span>，弃牌阶段弃牌时，你至多弃置X-1张牌（X为你当前的体力值）',
				'LSJR_huoshi':'祸始',
				'LSJR_huoshi_info':'<span style=\"color:#D582E8\">觉醒技</span>，回合开始阶段开始时，若你的手牌数大于现存男性角色数量，你须加1点体力上限，失去技能“落华”，获得技能“烈刃”',
				'LSJR_luohua':'落华',
				'LSJR_luohua_info':'<span style=\"color:#1688F2\">锁定技</span>，杀死你的角色将体力上限减至2',
				'LSJR_huaji':'画戟',
				'LSJR_huaji_info':'当你使用【杀】前，你可以令此【杀】的首个目标展示一张非延时性锦囊牌，若其未展示，其需要打出两张【闪】响应此【杀】',
				'LSJR_yazi':'睚眦',
				'LSJR_yazi_info':'<span style=\"color:#1688F2\">锁定技</span>，每当你受到伤害时，若此伤害多于1点，则将多余的伤害转移给伤害来源',
				'LSJR_fuluan':'扶乱',
				'LSJR_fuluan_info':'每当一名角色受到一次伤害后，你可以弃置一张与造成伤害的牌花色相同的手牌，然后令该角色回复1点体力',
				'LSJR_anjian1':'安简',
				'LSJR_anjian':'安简',
				'LSJR_anjian_info':'回合开始阶段开始时你可以摸一张牌，若如此做，你跳过你的摸牌和弃牌阶段并在回合结束阶段开始时摸一张',
				'LSJR_tongshi':'通史',
				'LSJR_tongshi_info':'摸牌阶段，你可以放弃摸牌，改为从所有其他角色处获得一张牌，然后交给其一张手牌',
				'LSJR_yannian':'延年',
				'LSJR_yannian_info':'当你进入濒死状态前，你可以弃置一张手牌并进行一次判定，若结果为<span style=\"color:red\">红色</span>，你回复1点体力',
				'LSJR_pingjiang':'平疆',
				'LSJR_pingjiang_info':'<span style=\"color:#1688F2\">锁定技</span>，当你计算的与其他角色的距离时，始终-X（X为该角色已损失的体力值）',
				'LSJR_huawu':'花舞',
				'LSJR_huawu_info':'你每于弃牌阶段内弃置了一张红色牌后，可以视为你对一名其他角色使用一张【杀】',
				'LSJR_fujun':'辅君',
				'LSJR_fujun_info':'出牌阶段，你可以弃置一张锦囊牌，然后指定一至两名其他角色各摸一张牌，若你的体力为1，你回复一点体力，每回合限一次',
				'LSJR_tuogu':'托孤',
				'LSJR_tuogu_info':'你死亡前，可以指定一名其他角色减X点体力上限，获得技能“绝境”直到游戏结束（X为该角色与你的体力上限差的绝对值且至少为1）',
				'LSJR_xiannei':'贤内',
				'LSJR_xiannei_info':'若一名其他角色于其回合内没有使用牌，你可令其选择一项：摸一张牌，或视为你对其指定的一名角色使用一张【杀】',
				'LSJR_muyi':'母仪',
				'LSJR_muyi_info':'<span style=\"color:#1688F2\">锁定技</span>，每当一名其他角色使用【杀】指定你为目标时，需选择一项：令你摸一张牌，或令你弃置其一张手牌',
				'LSJR_bengcheng':'崩城',
				'LSJR_bengcheng_info':'你可以将你的武将牌翻面并跳过你的出牌阶段，若如此做你可以弃置一名角色至多四张牌',
				'LSJR_zhengchong':'争宠',
				'LSJR_zhengchong_info':'你的回合外，每当一名男性角色的【桃】或【酒】因弃置或判定而置入弃牌堆时，你可以获得之；每当一名男性角色的装备牌置入弃牌堆时，你将之置于你的装备区里',
				'LSJR_sunshangxiang':'孙尚香',
				'LSJR_bulianshi':'步练师',
				'LSJR_sunluyu':'孙鲁育',
				'LSJR_caifuren':'蔡夫人',
				'LSJR_zhugeguo':'诸葛果',
				'LSJR_zhangchunhua':'张春华',
				'LSJR1_mifuren':'糜夫人',
				'LSJR_shijian':'矢箭',
				'LSJR_shijian_info':'当你受到伤害时，你可以选择场上装备区一张牌移动到一个合理的位置，并执行如下效果：武器牌，你摸两张牌；防具，你回复一点体力；+1马，你弃置自己距离范围内一名目标角色一张手牌；-1马，你对自己距离范围内一名目标角色造成一点火属性伤害',
				'LSJR_muyi1':'母仪',
				'LSJR_muyi1_info':'你手牌数发生变化时，判定之，红桃牌，你获得之；黑桃牌，你减少一点体力；方片牌，你增加一点体力；梅花牌，停止判定',
				'LSJR_wenyu':'温语',
				'LSJR_wenyu_info':'其它角色卡牌效果生效之前，你选择一张花色与该卡牌花色一样的非【闪】牌替换之',
				'LSJR_qiequan':'窃权',
				'LSJR_qiequan_info':'其它人于回合外获得手牌时，你弃置一张红桃牌并失去一点体力，令其终止摸牌，然后在当前角色回合结束时，你获得一个额外的回合',
				'LSJR_shangshi':'伤逝',
				'LSJR_shangshi_info':'其他人受到伤害时，你可以减少一点体力值，令伤害来源弃置掉一张牌，然后你摸一张牌',
				'LSJR_xianshu':'贤淑',
				'LSJR_xianshu_info':'<span style=\"color:#1688F2\">锁定技</span>，摸牌阶段，若你的体力上限低于5，你增加一点体力上限并回复一点体力，否则你摸一张牌',
				'LSJR_conghui':'聪慧',
				'LSJR_conghui_info':'<span style=\"color:#1688F2\">锁定技</span>，你的手牌上限加2',
			},
		};
		return luanshijiaren;
	});
	lib.config.all.characters.push('luanshijiaren');
	if(!lib.config.characters.contains('luanshijiaren')){
		lib.config.characters.push('luanshijiaren');
	};
	lib.translate['luanshijiaren_character_config']='乱世佳人';
}