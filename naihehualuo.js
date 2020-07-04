window.func=function(lib,game,ui,get,ai,_status){
	game.import('character',function(){
		var naihehualuo={
			name:'naihehualuo',
			connect:true,
			character:{
				"NHHL_fuqian":["male","shu",4,["NHHL_yiwei"],["ext:扩展ol/NHHL_fuqian.jpg","des:傅佥(?--263年)，义阳(治今湖北枣阳)人，傅肜之子，蜀汉后期大将。佥长于谋略，并颇有胆勇，姜维甚爱之。傅佥官至关中都督。魏国攻伐蜀汉时，傅佥防守阳安关，兵败战死。"]],
				"NHHL_zhaoguang":["male","shu",4,["NHHL_shouling"],["ext:扩展ol/NHHL_zhaoguang.jpg","des:赵广(?-263年)，三国时期蜀汉牙门将，赵云的次子，赵统之弟。随姜维前往沓中， 官拜牙门将。曹魏司马氏派五路大军伐蜀时，随大将军姜维与魏兵战于疆川口，姜维败绩还守剑阁，赵广于沓中战死。"]],
				"NHHL_guansuo":["male","shu",4,["NHHL_renqin","NHHL_huawu"],["ext:扩展ol/NHHL_guansuo.jpg"]],
				"NHHL_zhugezhan":["male","shu",4,["NHHL_yuanji","NHHL_sishou"],["ext:扩展ol/NHHL_zhugezhan.jpg","des:诸葛瞻(227年7月-263年11月)，字思远，琅邪阳都(今山东沂南县)人。三国时期蜀汉大臣，蜀汉丞相诸葛亮之子。邓艾伐蜀时，他与长子诸葛尚及蜀将张遵、李球、黄崇等人防御绵竹(今四川德阳)，因不听黄崇速占险要的建议而坐失良机，后来出城与邓艾决战，在交战时阵亡，绵竹也随后失守。"]],
				"NHHL_wenyang":["male","wei",4,["NHHL_tapo"],["ext:扩展ol/NHHL_wenyang.jpg","des:文鸯早年于曹魏为官。正元二年(256年)，随父文钦与毋丘俭在淮南起兵，讨伐执政的司马师。文钦兵败后，随父南奔吴国。诸葛诞在淮南叛魏时，吴国遣文钦父子驰援诸葛诞，由于内讧，诸葛诞手刃文钦，文鸯于是出降司马昭。西晋建立后，文鸯仍仕晋朝，任平虏护军。咸宁三年(277年)，文鸯都督凉、秦、雍州三州军力，大破鲜卑首领秃发树机能，名闻天下。官至东夷校尉、假节，封关内侯。八王之乱中，被诸葛诞的外孙东安王司马繇所杀，且惨遭灭族，时年五十五岁。"]],
				"NHHL_wutugu":["male","qun",4,["NHHL_youjia","NHHL_manyong"],["ext:扩展ol/NHHL_wutugu.jpg","des:乌戈国，国主兀突骨，身长丈二（汉尺约合现在2.77米），不食五谷，以生蛇恶兽为饭。身有鳞甲，刀箭不能侵。兀突骨乘骑巨象，头戴日月狼须帽，身披金珠缨络，两肋下露出生鳞甲，眼目中微有光芒。 手下有等军蛮兵皆使利刀钢叉，谓之“藤甲军”。其军至矮者九尺，面目丑恶，见者皆惊。洞中有一等藤，生于山涧之内，盘于石壁之上，国人采取，浸于油中，半年方取晒之；晒干复浸，凡十余遍，却才穿成铠甲。前胸并后背各用一片，两臂两片，又做成大裙五片，共为一副，穿在身上，渡江不沉，经水不湿，甚是轻巧，刀剑皆不能入。弩箭射到藤甲之上，皆不能透，俱落于地；刀砍枪刺，亦不能入，因此号为“藤甲军”。 国内有一江桃花水，若别国人饮之尽死，惟乌戈国人饮之倍添精神。"]],
				"NHHL_xiahouba":["male","wei",4,["NHHL_beili","NHHL_jiannan","NHHL_toushu"],["ext:扩展ol/NHHL_xiahouba.jpg"]],
				"NHHL_zhugedan":["male","wei",3,["NHHL_yifan","NHHL_fuwei"],["ext:扩展ol/NHHL_zhugedan.jpg"]],
				"NHHL_dongbai":["female","qun",3,["NHHL_zhongzhang","NHHL_xueshang"],["ext:扩展ol/NHHL_dongbai.jpg"]],
				"NHHL_yanbaihu":["male","qun",4,["NHHL_tuhao"],["ext:扩展ol/NHHL_yanbaihu.jpg"]],
				"NHHL_sunluban":["female","wu",3,["NHHL_chanxian","NHHL_dusi"],["ext:扩展ol/NHHL_sunluban.jpg"]],
				"NHHL_zumao":["male","wu",4,["NHHL_yinbing"],["ext:扩展ol/NHHL_zumao.jpg","des:孙坚的心腹将领。坚常著赤罽帻，乃脱帻令亲近将祖茂著之。卓骑争逐茂，故坚从间道得免。茂困迫，下马，以帻冠冢闲烧柱，因伏草中。卓骑望见，围绕数重，定近觉是柱，乃去。《三国演义》中说祖茂字大荣，《三国志》中未记载。"]],
				"NHHL_chenqun":["male","wei",3,["NHHL_zhongzheng","NHHL_bijin"],["ext:扩展ol/NHHL_chenqun.jpg","des:陈群(?-237年2月7日)，字长文。颍川许昌(今河南许昌东)人。三国时期著名政治家、曹魏重臣，魏晋南北朝选官制度'九品中正制'和曹魏律法《魏律》的主要创始人。陈群出身名门，为东汉太丘长陈寔之孙、大鸿胪陈纪之子，早年被刘备辟为豫州别驾。公元198年，曹操入主徐州，辟陈群为司空西曹掾属。后又转任参丞相军事。公元213年，曹操封魏公，陈群为魏国的御史中丞，后任吏部尚书，封昌武亭侯。曹丕代汉，陈群为尚书令，晋爵颍乡侯。公元225年，陈群为镇军大将军，领中护军，录尚书事。次年，曹丕驾崩，陈群受诏辅政。曹睿即位，任司空，录尚书事，晋封颍阴侯，增邑五百户。公元237年病逝，谥靖侯。陈群历仕曹操、曹丕、曹睿三代，以其突出的治世之才，竭忠尽职，为曹魏政权的礼制及其政治制度的建设，做出了突出的贡献。陈群撰有文集五卷，今已佚失。其余见于《全三国文》 。"]],
				"NHHL_wuanguo":["male","qun",4,["NHHL_shewan"],["ext:扩展ol/NHHL_wuanguo.jpg","des:武安国字霸候，是历史小说《三国演义》中虚构的一位猛将(另外有野史记载中说此人复姓武安名国乃是白起的后人)，是北海太守孔融的部将，兵器为一把重达一百多斤的流星铁锤，虎牢关被吕布一戟斩断手腕。"]],
				"NHHL_lukang":["male","wu",3,["NHHL_yuangong","NHHL_jujiang","NHHL_benxi"],["ext:扩展ol/NHHL_lukang.jpg","des:陆抗(226年-274年)，字幼节，吴郡吴县(今江苏苏州)人。三国时期吴国名将，陆逊次子。陆抗袭父爵为江陵侯，为建武校尉，领其父众五千人。后迁立节中郎将、镇军将军等。孙皓为帝，任镇军大将军、都督西陵、信陵、夷道、乐乡、公安诸军事，驻乐乡(今湖北江陵西南)。凤凰元年(272年)，击退晋将羊祜进攻，并攻杀叛将西陵督步阐。后拜大司马、荆州牧，卒于官，终年49岁。被誉为吴国最后的名将 。"]],
				"NHHL_zhouji":["female","wu",3,["NHHL_xuemai","NHHL_xuegong"],["ext:扩展ol/NHHL_zhouji.jpg"]],
			},
			characterTitle:{
				"NHHL_fuqian":"<span style='font-weight:bold;font-family:lishu'>命绝汉城</span>",
				"NHHL_zhaoguang":"<span style='font-weight:bold;font-family:lishu'>云龙小将</span>",
				"NHHL_guansuo":"<span style='font-weight:bold;font-family:lishu'>漫天飘零</span>",
				"NHHL_zhugezhan":"<span style='font-weight:bold;font-family:lishu'>忠义世家</span>",
				"NHHL_wenyang":"<span style='font-weight:bold;font-family:lishu'>时运迷茫</span>",
				"NHHL_wutugu":"<span style='font-weight:bold;font-family:lishu'>霸气侧漏</span>",
				"NHHL_xiahouba":"<span style='font-weight:bold;font-family:lishu'>天意弄人</span>",
				"NHHL_zhugedan":"<span style='font-weight:bold;font-family:lishu'>功狗</span>",
				"NHHL_dongbai":"<span style='font-weight:bold;font-family:lishu'>魔王之嗣</span>",
				"NHHL_yanbaihu":"<span style='font-weight:bold;font-family:lishu'>江东旧主</span>",
				"NHHL_sunluban":"<span style='font-weight:bold;font-family:lishu'>毒之花</span>",
				"NHHL_zumao":"<span style='font-weight:bold;font-family:lishu'>四大天王</span>",
				"NHHL_chenqun":"<span style='font-weight:bold;font-family:lishu'>官制之才</span>",
				"NHHL_wuanguo":"<span style='font-weight:bold;font-family:lishu'>壮士断腕</span>",
				"NHHL_lukang":"<span style='font-weight:bold;font-family:lishu'>末代名将</span>",
				"NHHL_zhouji":"<span style='font-weight:bold;font-family:lishu'>英才的血脉</span>",
			},
			characterIntro:{
				"NHHL_zhouji":"周姬，曹操之妾，生曹均。后曹均被过继给曹彬。",
			},
			skill:{
				"_NHHL_turnOver":{
					trigger:{
						player:"turnOverBegin",
					},
					forced:true,
					filter:function(event,player){
						if(lib.config['extension_扩展ol_tx_tx1_open']!=true) return false;
						if(player.name2!=undefined) return false;
						if(lib.config['extension_扩展ol_tx_tx1_set']!='nhhl') return true;
						for(var i in lib.characterPack['naihehualuo']){
							if(player.name==i) return true;
						};
						return false;
					},
					content:function(){
						game.broadcastAll(function(player){
							if(!player.isTurnedOver()){
								if(player!=game.me){
									player.style.transform='rotateY(90deg)';
									setTimeout(function(){
										player.style.transform='none';
										player.node.avatar.setBackgroundImage('extension/扩展ol/characterBackground.jpg');
										player.node.name.hide();
									},500);
								}else{
									player.node.avatar.style.transform='rotateY(90deg)';
									setTimeout(function(){
										player.node.avatar.style.transform='none';
										player.node.avatar.setBackgroundImage('extension/扩展ol/characterBackground.jpg');
										player.node.name.hide();
									},200);
								};
							};
							if(player.isTurnedOver()){
								if(player!=game.me){
									player.style.transform='rotateY(90deg)';
									setTimeout(function(){
										player.style.transform='none';
										player.node.avatar.setBackground(player.name,'character');
										player.node.name.show();
									},500);
								}else{
									player.node.avatar.style.transform='rotateY(90deg)';
									setTimeout(function(){
										player.node.avatar.style.transform='none';
										player.node.avatar.setBackground(player.name,'character');
										player.node.name.show();
									},200);
								};
							};
						},player);
					},
				},
				"NHHL_yiwei":{
					trigger:{
						player:"useCardBefore",
					},
					direct:true,
					filter:function(event,player){
						return event.card&&event.card.name=='sha';
					},
					content:function(){
						"step 0"
						player.chooseControl(['视为【决斗】','视为【过河拆桥】','cancel2']).set('ai',function(event){
							if(player.countCards('h',{name:'sha'})>1&&player.hp>1) return '视为【决斗】';
							return 'cancel2';
						});
						"step 1"
						if(result.control=='视为【决斗】'){
							player.logSkill('NHHL_yiwei');
							trigger.card.name='juedou';
							//旧写法
							/*
							game.broadcastAll(function(card){
								card.init([card.suit,card.number,'juedou']);
							},trigger.card);
							*/
							if(player.getStat().card.sha==undefined) player.getStat().card.sha=0;
							player.getStat().card.sha++;
							for(var i=0;i<game.players.length;i++){
								game.players[i].addSkill('NHHL_yiwei1');
							};
						};
						if(result.control=='视为【过河拆桥】'){
							player.logSkill('NHHL_yiwei');
							trigger.card.name='guohe';
							//旧写法
							/*
							game.broadcastAll(function(card){
								card.init([card.suit,card.number,'guohe']);
							},trigger.card);
							*/
							if(player.getStat().card.sha==undefined) player.getStat().card.sha=0;
							player.getStat().card.sha++;
							for(var i=0;i<game.players.length;i++){
								game.players[i].addSkill('NHHL_yiwei1');
							};
						};
					},
				},
				"NHHL_yiwei1":{
					mod:{
						cardEnabled:function(card,player){
							if(card.name=='wuxie') return false;
						},
					},
					trigger:{
						global:"useCardAfter",
					},
					forced:true,
					popup:false,
					filter:function (event,player){
						return event.card&&(event.card.name=='juedou'||event.card.name=='guohe');
					},
					content:function(){
						for(var i=0;i<game.players.length;i++){
							game.players[i].removeSkill('NHHL_yiwei1');
						};
					},
				},
				"NHHL_shouling":{
					group:["NHHL_shouling_sha","NHHL_shouling_shan","NHHL_shouling_tao"],
					subSkill:{
						"sha":{
							name:'杀',
							enable:['chooseToRespond','chooseToUse'],
							filterCard:{type:'basic',color:'red'},
							viewAs:{name:'sha'},
							prompt:'将一张基本牌当【杀】使用或打出',
							check:function(card){return 1},
							onuse:function(result,player){
								if(result.cards[0].name=='tao') player.draw();
							},
							ai:{
								skillTagFilter:function(player){
									if(!player.countCards('h',{type:'basic',color:'red'})) return false;
								},
								respondSha:true,
							},
						},
						"shan":{
							name:'闪',
								enable:['chooseToRespond'],
								filterCard:{type:'basic',color:'red'},
								viewAs:{name:'shan'},
								prompt:'将一张基本牌当【闪】使用或打出',
								check:function(){return 1},
								ai:{
									respondShan:true,
									skillTagFilter:function(player){
										if(!player.countCards('h',{type:'basic',color:'red'})) return false;
									},
									effect:{
										target:function(card,player,target,current){
											if(get.tag(card,'respondShan')&&current<0) return 0.6;
										},
									},
								},
						},
						"tao":{
							name:'桃',
							enable:['phaseUse','chooseToUse','chooseToRespond'],
							filterCard:{type:'basic',color:'red'},
							viewAs:{name:'tao'},
							prompt:'将一张基本牌当【桃】使用或打出',
							check:function(card){return 1},
							onuse:function(result,player){
								if(result.cards[0].name=='tao') player.draw();
							},
							ai:{
								skillTagFilter:function(player){
									return player.countCards('h',{type:'basic',color:'red'})>0;
								},
								order:function(){
									return get.order({name:'sha'})+0.1;
								},
								save:true,
								respondTao:true,
							},
						},
					},
				},
				"NHHL_renqin":{
					enable:'phaseUse',
					usable:1,
					discard:false,
					line:true,
					prepare:'give',
					filter:function(event,player){
						return player.countCards('he')>0;
					},
					filterCard:true,
					selectCard:1,
					check:function(card){
						if(card.name=='du') return 2;
						return 6-get.value(card);
					},
					filterTarget:function(card,player,target){
						return target!=player;
					},
					content:function(){
						target.gain(cards,player);
						if(target.countCards('h')>0){
							var card=target.get('h').randomGet();
							target.showCards(card);
							if(get.color(card)=='red'){
								player.addTempSkill('wusheng',{player:'phaseEnd'});
								player.draw();
							};
						};
					},
					ai:{
						expose:0.2,
						order:11,
						result:{
							target:function(player,target){
								if(player.countCards('h')<=1) return ;
								if(ui.selected.cards.length&&ui.selected.cards[0].name=='du') return -1;
								return 1;
							},
						},
					},
				},
				"NHHL_huawu":{
					trigger:{
						global:"shaBefore",
					},
					direct:true,
					filter:function(event,player){
						return _status.currentPhase==event.player&&
						game.countPlayer(function(current){
							return get.distance(player,current,'attack')<=1&&!event.targets.contains(current);
						})>0&&
						player.countCards('h')>0;
					},
					content:function(){
						"step 0"
						player.chooseCard(1,'h',get.prompt('NHHL_huawu')).set('ai',function(card){
							if(game.countPlayer(function(current){return get.attitude(trigger.player,current)<0&&get.distance(player,current,'attack')<=1&&!trigger.targets.contains(current)})>0&&
							player.countCards('h')>1&&
							get.attitude(player,trigger.player)>0) return 6-get.value(card);
							return -1;
						});
						"step 1"
						if(result.bool){
							player.discard(result.cards[0]);
							if(player!=trigger.player) player.line(trigger.player);
							trigger.player.chooseTarget('请选择【杀】的额外目标',function(card,player,target){
								return !trigger.targets.contains(target)&&get.distance(player,target,'attack')<=1;
							}).ai=function(target){
								return -ai.get.attitude(trigger.player,target);
							};
						}else{
							event.finish();
						};
						"step 2"
						if(result.bool){
							trigger.player.line(result.targets[0],trigger.nature);
							player.logSkill('NHHL_huawu');
							trigger.targets.push(result.targets[0]);
						}else{
							event.finish();
						};
					},
					ai:{
						expose:0.9,
					},
				},
				"NHHL_yuanji":{
					trigger:{
						player:"phaseBegin",
					},
					direct:true,
					filter:function(event,player){
						return !player.isTurnedOver();
					},
					content:function(){
						"step 0"
						player.chooseControl(['获得技能“观星”和“集智”','获得技能“武圣”和“天义”','cancel2']).set('ai',function(event){
							if(player.countCards('h',{type:'trick'})>1) return '获得技能“观星”和“集智”';
							if(player.countCards('h',{color:'red'})>1) return '获得技能“武圣”和“天义”';
							return 'cancel2';
						}).set('prompt','是否发动【远计】？');
						"step 1"
						if(result.control=='获得技能“观星”和“集智”'){
							player.logSkill('NHHL_yuanji');
							player.turnOver();
							game.log(player,'获得技能“观星”和“集智”直到回合结束');
							player.addTempSkill('guanxing',{player:'phaseEnd'});
							player.addTempSkill('jizhi',{player:'phaseEnd'});
						};
						if(result.control=='获得技能“武圣”和“天义”'){
							player.logSkill('NHHL_yuanji');
							player.turnOver();
							game.log(player,'获得技能“武圣”和“天义”直到回合结束');
							player.addTempSkill('wusheng',{player:'phaseEnd'});
							player.addTempSkill('tianyi',{player:'phaseEnd'});
						};
					},
				},
				"NHHL_sishou":{
					mod:{
						globalTo:function(from,to,distance){
							if(to.isTurnedOver()) return distance+1;
							return distance;
						},
					},
				},
				"NHHL_tapo":{
					trigger:{
						player:"shaMiss",
					},
					filter:function(event,player){
						return event.card;
					},
					check:function(event,player){
						if(get.attitude(player,event.target)>=0) return false;
						if(player.isTurnedOver()) return true;
						if(player.countCards('h')>0) return true;
						return false;
					},
					content:function(){
						player.turnOver();
						trigger.target.damage(2,trigger.card);
					},
					ai:{
						expose:0.95,
					},
				},
				"NHHL_youjia":{
					group:["NHHL_youjia_showCards","NHHL_youjia_nanman"],
					subSkill:{
						"showCards":{
							trigger:{
								target:'huogongEnd'
							},
							forced:true,
							filter:function(event,player){
								return player.countCards('h')>0;
							},
							content:function(){
								player.chooseToDiscard(1,'h',true);
							},
						},
						"nanman":{
							trigger:{
								target:'useCardToBefore'
							},
							forced:true,
							priority:15,
							filter:function(event,player){
								return event.card.name=='nanman';
							},
							content:function(){
								trigger.cancel();
							},
							ai:{
								effect:{
									target:function(card,player,target){
										if(card.name=='nanman') return 0;
									},
								},
							},
						},
					},
				},
				"NHHL_manyong":{
					trigger:{
						player:'phaseDiscardBegin'
					},
					direct:true,
					content:function(){
						"step 0"
						player.chooseToUse(get.prompt('NHHL_manyong'));
						"step 1"
						if(result.bool){
							player.logSkill('NHHL_manyong');
							player.draw();
						};
					},
				},
				"NHHL_beili":{
					trigger:{
						player:"phaseBegin",
					},
					direct:true,
					content:function(){
						'step 0'
						var list=['流失体力','cancel2'];
						if(player.countCards('h',function(card){return get.type(card)!='basic'})>0) var list=['流失体力','给予一名其他角色一张非基本牌','cancel2'];
						player.chooseControl(list).set('ai',function(event){
							return 'cancel2';
						});
						'step 1'
						if(result.control=='流失体力'){
							player.logSkill('NHHL_beili');
							game.log(player,'跳过了判定阶段');
							player.skip('phaseJudge');
							player.loseHp();
						};
						if(result.control=='给予一名其他角色一张非基本牌'){
							game.log(player,'跳过了判定阶段');
							player.skip('phaseJudge');
							player.chooseTarget('请选择给予对象',function(card,player,target){
								return player!=target;
							},true).ai=function(target){
								return ai.get.attitude(player,target);
							};
						}else{
							event.finish();
						};
						'step 2'
						if(result.bool){
							player.line(result.targets[0]);
							player.logSkill('NHHL_beili');
							event.target=result.targets[0];
							player.chooseCard('请选择给予的手牌',1,'h',function(card){
								return get.type(card)!='basic';
							},true).set('ai',function(card){
								return 1;
							});
						}else{
							event.finish();
						};
						'step 3'
						if(result.bool){
							player.$give(1,event.target);
							event.target.gain(result.cards[0],player);
						}else{
							event.finish();
						};
					},
				},
				"NHHL_jiannan":{
					trigger:{
						player:"phaseBegin",
					},
					priority:1,
					unique:true,
					mark:true,
					skillAnimation:true,
					animationColor:'thunder',
					init:function (player){
						player.storage.NHHL_jiannan=false;
					},
					filter:function (event,player){
						return !player.storage.NHHL_jiannan;
					},
					content:function (){
						"step 0"
						player.awakenSkill('NHHL_jiannan');
						player.storage.NHHL_jiannan=true;
						event.num=0;
						"step 1"
						player.judge(function(card){
							if(get.suit(card)=='spade') return -2;
							return 2;
						});
						"step 2"
						if(get.suit(result.card)=='spade'){
							player.damage(2,'thunder','nosource');
						};
						event.num++;
						if(event.num<3) event.goto(1);
						"step 3"
						if(player.hasSkill('NHHL_toushu')){
							player.$skill('投蜀','fire');
							if(player.hp<3) player.recover(3-player.hp);
							player.removeSkill('NHHL_beili');
							player.addSkill('baobian');
						};
					},
					intro:{
						content:"limited",
					},
				},
				"NHHL_toushu":{},
				"NHHL_yifan":{
					trigger:{
						player:'phaseDrawEnd'
					},
					direct:true,
					filter:function(event,player){
						return player.countCards('he')>0;
					},
					content:function(){
						"step 0"
						player.chooseTarget(get.prompt('NHHL_yifan'),function(card,player,target){
							return player!=target;
						}).ai=function(target){
							if(player.countCards('h')>1) return -ai.get.attitude(player,target);
							return -1;
						};
						"step 1"
						if(result.bool){
							player.line(result.targets[0]);
							player.logSkill('NHHL_yifan');
							event.target=result.targets[0];
							event.target.discardPlayerCard(player,'he',true).set('ai',function(button){
								if(get.attitude(event.target,player)<=0) return 1;
								return 0;
							});
						}else{
							event.finish();
						};
						"step 2"
						var list=['视为对其使用一张【杀】'];
						if(event.target.countCards('he')>0) list.push('弃置其一张牌');
						player.chooseControl(list).set('ai',function(event){
							if(get.attitude(player,event.target)<0) return '视为对其使用一张【杀】';
							return '弃置其一张牌';
						});
						'step 3'
						if(result.control=='视为对其使用一张【杀】'){
							player.useCard({name:'sha'},event.target,false);
						};
						if(result.control=='弃置其一张牌'){
							player.discardPlayerCard(event.target,'he',true).set('ai',function(button){
								if(get.attitude(player,event.target)<=0) return 1;
								return 0;
							});
						};
					},
				},
				"NHHL_fuwei":{
					group:["NHHL_fuwei_change","NHHL_fuwei_damage"],
					subSkill:{
						"change":{
							trigger:{
								player:'damageBefore'
							},
							direct:true,
							filter:function(event,player){
								return game.countPlayer(function(current){return player!=current&&current!=event.source})>0;
							},
							content:function(){
								"step 0"
								player.chooseTarget('是否改变伤害来源？',function(card,player,target){
									return player!=target&&target!=trigger.source;
								}).ai=function(target){
									return -ai.get.attitude(player,target);
								};
								"step 1"
								if(result.bool){
									player.logSkill('NHHL_fuwei');
									player.line(result.targets[0]);
									trigger.source=result.targets[0];
								}else{
									event.finish();
								};
							},
						},
						"damage":{
							trigger:{
								player:'damageEnd'
							},
							direct:true,
							filter:function(event,player){
								return event.source;
							},
							content:function(){
								'step 0'
								player.chooseControl(['弃置伤害来源的一张牌','与伤害来源各摸一张牌','cancel2']).set('ai',function(event){
									if(get.attitude(player,trigger.source)<0) return '弃置伤害来源的一张牌';
									return '与伤害来源各摸一张牌';
								}).set('prompt','是否发动【扶魏】？');
								'step 1'
								if(result.control=='弃置伤害来源的一张牌'){
									player.logSkill('NHHL_fuwei');
									player.discardPlayerCard(trigger.source,'he');
								};
								if(result.control=='与伤害来源各摸一张牌'){
									player.logSkill('NHHL_fuwei');
									player.draw();
									trigger.source.draw();
								};
							},
							ai:{
								expose:0.4,
							},
						},
					},
				},
				"NHHL_xueshang":{
					enable:'phaseUse',
					usable:1,
					discard:false,
					line:true,
					prepare:'give',
					filter:function(event,player){
						return player.countCards('he')>=2;
					},
					filterCard:true,
					selectCard:2,
					check:function(card){
						/*if(card.name=='tao') return 0;
						if(card.name=='shan') return 0;
						if(card.name=='du') return 1;
						if(!ui.selected.cards.length&&get.suit(card)=='spade') return 10;*/
						if(get.type(card)=='basic') return 10;
						return 0;
					},
					filterTarget:function(card,player,target){
						return target!=player;
					},
					content:function(){
						target.gain(cards,player);
						target.showCards(cards);
						var bool=false;
						for(var i=0;i<cards.length;i++){
							if(get.suit(cards[i])=='spade') bool=true;
							if(get.type(cards[i])=='basic'){
								player.draw();
								player.addTempSkill('jiuchi',{player:'phaseEnd'});
							};
						};
						if(bool) target.turnOver();
					},
					ai:{
						expose:0.5,
						order:3,
						result:{
							target:1,
						},
					},
				},
				"NHHL_zhongzhang":{
					mod:{
						suit:function(card,suit){
							if(suit=='heart') return 'spade';
						},
					},
					group:["NHHL_zhongzhang_gain","NHHL_zhongzhang_lose"],
					subSkill:{
						"gain":{
							trigger:{
								player:"phaseBegin",
							},
							forced:true,
							popup:false,
							filter:function(event,player){
								return player.hasSkill('NHHL_xueshang1');
							},
							content:function(){
								player.removeSkill('NHHL_xueshang1');
								player.addSkill('NHHL_xueshang');
							},
						},
						"lose":{
							trigger:{
								player:"phaseEnd",
							},
							forced:true,
							popup:false,
							filter:function(event,player){
								return player.hasSkill('NHHL_xueshang');
							},
							content:function(){
								player.removeSkill('NHHL_xueshang');
								player.addSkill('NHHL_xueshang1');
							},
						},
					},
				},
				"NHHL_xueshang1":{
					trigger:{
						player:'dyingBefore'
					},
					direct:true,
					filter:function(event,player){
						return player.countCards('h')>=2;
					},
					content:function(){
						"step 0"
						player.chooseTarget(get.prompt('NHHL_xueshang1'),function(card,player,target){
							return player!=target;
						}).ai=function(target){
							return ai.get.attitude(player,target);
						};
						"step 1"
						if(result.bool){
							player.line(result.targets[0]);
							event.target=result.targets[0];
							player.chooseCard('请选择给予的手牌',2,'h').set('ai',function(card){
								return 1;
							});
						}else{
							event.finish();
						};
						"step 2"
						if(result.bool){
							player.logSkill('NHHL_xueshang');
							player.$give(result.cards.length,event.target);
							event.target.gain(result.cards,player);
							event.target.showCards(result.cards);
							var bool=false;
							for(var i=0;i<result.cards.length;i++){
								if(get.suit(result.cards[i])=='spade') bool=true;
								if(get.type(result.cards[i])=='basic'){
									player.draw();
									player.addTempSkill('jiuchi',{player:'phaseEnd'});
								};
							};
							if(bool) event.target.turnOver();
						}else{
							event.finish();
						};
					},
				},
				"NHHL_tuhao":{
					trigger:{
						source:"damageAfter",
					},
					check:function(event,player){
						if(get.attitude(player,event.player)>=0) return false;
						return true;
					},
					content:function(){
						player.discardPlayerCard(trigger.player,'he');
					},
					ai:{
						expose:0.6,
					},
				},
				"NHHL_chanxian":{
					trigger:{
						player:"phaseDrawEnd",
					},
					direct:true,
					filter:function(event,player){
						return player.countCards('h')>=2;
					},
					content:function(){
						"step 0"
						player.chooseToDiscard(get.prompt('NHHL_chanxian'),1,'h').ai=function(card){
							if(player.countCards('h')>2){
								if(game.countPlayer(function(current){return player!=current&&current.countCards('h')<=4&&ai.get.attitude(player,current)<0})>0) return 5-get.value(card);
								if(game.countPlayer(function(current){return player!=current&&ai.get.attitude(player,current)>0})>0) return 1;
							};
							return 0;
						};
						"step 1"
						if(result.bool){
							player.chooseTarget('请选择目标',function(card,player,target){
								return player!=target;
							}).ai=function(target){
								if(target.isTurnedOver()) return get.attitude(player,target);
								return -get.attitude(player,target);
							};
						}else{
							event.finish();
						};
						"step 2"
						if(result.bool){
							player.line(result.targets[0]);
							player.logSkill('NHHL_chanxian');
							result.targets[0].gainPlayerCard(1,player,'h');
							result.targets[0].gainPlayerCard(1,player.next,'h');
							result.targets[0].turnOver();
						}else{
							event.finish();
						};
						
					},
				},
				"NHHL_dusi":{
					trigger:{
						player:"phaseEnd",
					},
					filter:function(event,player){
						return player.countCards('h')>0;
					},
					check:function(event,player){
						return player.countCards('h',function(card){return card.name!='tao'})<player.hp;
					},
					content:function(){
						player.discard(player.get('h'));
						player.draw(player.hp);
					},
				},
				"NHHL_yinbing":{
					trigger:{
						player:"phaseUseBegin",
					},
					check:function(event,player){
						return player.countCards('h',{name:'shan'})>0;
					},
					content:function(){
						"step 0"
						player.draw();
						player.chooseTarget('请选择目标',function(card,player,target){
							return player!=target;
						},true);
						"step 1"
						if(result.bool){
							player.line(result.targets[0]);
							event.target=result.targets[0];
							event.target.chooseControl(['弃置'+lib.translate[player.name]+'一张牌','对'+lib.translate[player.name]+'使用一张【杀】']).set('ai',function(event){
								if(get.attitude(event.target,player)<0&&event.target.countCards('h',{name:'sha'})>0) return '对'+lib.translate[player.name]+'使用一张【杀】';
								return '弃置'+lib.translate[player.name]+'一张牌';
							}).set('prompt','【引兵】');
						}else{
							event.finish();
						};
						"step 2"
						if(result.control=='弃置'+lib.translate[player.name]+'一张牌'){
							event.target.discardPlayerCard(player,'he',true);
						};
						if(result.control=='对'+lib.translate[player.name]+'使用一张【杀】'){
							event.target.chooseToUse({name:'sha'},player,-1);
						};
					},
					ai:{
						expose:0.3,
					},
				},
				"NHHL_zhongzheng":{
					trigger:{
						player:'damageAfter'
					},
					direct:true,
					filter:function(event,player){
						return player.countCards('h')>0;
					},
					content:function(){
						"step 0"
						player.chooseToDiscard(get.prompt('NHHL_zhongzheng'),1,'h').ai=function(card){
							if(trigger.card&&get.color(trigger.card)==get.color(card)) return 1;
							return 0;
						};
						"step 1"
						if(result.bool){
							player.logSkill('NHHL_zhongzheng');
							if(trigger.card&&get.color(trigger.card)==get.color(result.cards[0])) player.recover();
						};
					},
				},
				"NHHL_bijin":{
					trigger:{
						player:'discardEnd'
					},
					direct:true,
					filter:function(event,player){
						if(!event.cards) return false;
						if(_status.currentPhase==player) return false;
						for(var i=0;i<event.cards.length;i++){
							if(event.cards[i].original=='h') return true;
						};
						return false;
					},
					content:function(){
						"step 0"
						player.chooseTarget(get.prompt('NHHL_bijin'),function(card,player,target){
							return player!=target;
						},true).ai=function(target){
							return ai.get.attitude(player,target);
						};
						"step 1"
						if(result.bool){
							player.line(result.targets[0]);
							player.logSkill('NHHL_bijin');
							event.target=result.targets[0];
							event.target.judge();
						}else{
							event.finish();
						};
						"step 2"
						event.card=result.card;
						player.chooseControl(['摸一张牌','给予'+lib.translate[event.target.name]+'一张'+lib.translate[get.color(event.card)]+'牌并令其翻面']).set('ai',function(event){
							return '摸一张牌';
						});
						"step 3"
						if(result.control=='摸一张牌'){
							player.draw();
						};
						if(result.control=='给予'+lib.translate[event.target.name]+'一张'+lib.translate[get.color(event.card)]+'牌并令其翻面'){
							player.chooseCard('请选择给予的手牌',1,'h',{color:get.color(event.card)}).set('ai',function(card){
								return 5-get.value(card);
							});
						}else{
							event.finish();
						};
						"step 4"
						if(result.bool){
							player.$give(result.cards.length,event.target);
							event.target.gain(result.cards,player);
							event.target.turnOver();
						}else{
							event.finish();
						};
					},
				},
				"NHHL_shewan":{
					trigger:{
						player:'damageBegin'
					},
					direct:true,
					content:function(){
						"step 0"
						player.chooseControl(['流失一点体力','弃置一张武器牌','cancel2']).set('ai',function(event){
							if(player.countCards('he',{subtype:'equip1'})>0) return '弃置一张武器牌';
							return '流失一点体力';
						});
						"step 1"
						if(result.control=='流失一点体力'){
							player.logSkill('NHHL_shewan');
							player.loseHp();
							trigger.untrigger();
							trigger.finish();
						};
						if(result.control=='弃置一张武器牌'){
							player.chooseCard('请选择一张武器牌',1,'he',{subtype:'equip1'}).set('ai',function(card){
								return 1;
							});
						}else{
							event.finish();
						};
						"step 2"
						if(result.bool){
							player.logSkill('NHHL_shewan');
							player.discard(result.cards);
							trigger.untrigger();
							trigger.finish();
						}else{
							event.finish();
						};
					},
				},
				"NHHL_yuangong":{
					mod:{
						targetInRange:function(card,player,target,now){
							if(card.name=='sha'&&target.isLinked()) return true;
						},
					},
				},
				"NHHL_jujiang":{
					trigger:{
						player:'linkBegin'
					},
					forced:true,
					filter:function(event,player){
						return !player.isLinked();
					},
					content:function(){
						trigger.untrigger();
						trigger.finish();
					},
				},
				"NHHL_benxi":{
					trigger:{
						player:'phaseDrawBegin'
					},
					check:function(event,player){
						return game.countPlayer(function(current){return player!=current&&ai.get.attitude(player,current)<0&&current.countCards('he')>0})>0;
					},
					content:function(){
						"step 0"
						trigger.untrigger();
						trigger.finish();
						player.chooseTarget('请选择一名角色',function(card,player,target){
							return player!=target&&target.countCards('he')>0;
						},true).ai=function(target){
							return -ai.get.attitude(player,target);
						};
						"step 1"
						if(result.bool){
							player.line(result.targets[0]);
							event.target=result.targets[0];
							player.gainPlayerCard(event.target,1,'he');
						};
						player.chooseControl(['横置一名其他角色的武将牌','对其使用一张不计入回合次数的【杀】']).set('ai',function(event){
							return '对其使用一张不计入回合次数的【杀】';
						});
						"step 2"
						if(result.control=='对其使用一张不计入回合次数的【杀】'){
							player.useCard({name:'sha'},event.target,false);
						};
						if(result.control=='横置一名其他角色的武将牌'){
							player.chooseTarget('请选择一名角色',function(card,player,target){
								return player!=target&&!target.isLinked();
							},true).ai=function(target){
								return -ai.get.attitude(player,target);
							};
						}else{
							event.finish();
						};
						"step 3"
						if(result.bool){
							player.line(result.targets[0]);
							result.targets[0].link();
						}else{
							event.finish();
						};
					},
				},
				"NHHL_xuemai":{
					trigger:{
						player:'phaseUseBegin'
					},
					filter:function(event,player){
						return game.countPlayer(function(current){return player!=current&&!current.isLinked()})>0;
					},
					content:function(){
						"step 0"
						player.draw();
						player.chooseTarget('请选择一名角色',function(card,player,target){
							return player!=target&&!target.isLinked();
						}).ai=function(target){
							return 1-ai.get.attitude(player,target);
						};
						"step 1"
						if(result.bool){
							player.line(result.targets[0]);
							result.targets[0].link();
						}else{
							event.finish();
						};
					},
					ai:{
						expose:0.3,
					},
				},
				"NHHL_xuegong":{
					trigger:{
						global:'phaseBegin'
					},
					filter:function(event,player){
						return event.player!=player&&!event.player.hasSkill('NHHL_yuangong');
					},
					check:function(event,player){
						return get.attitude(player,event.player)>0&&player.countCards('h')>=2&&game.countPlayer(function(current){return player!=current&&get.attitude(player,current)<0&&current.isLinked()})>0;
					},
					content:function(){
						"step 0"
						player.chooseToDiscard(1,'h').ai=function(card){
							return 5-get.value(card);
						};
						"step 1"
						if(result.bool){
							trigger.player.addTempSkill('NHHL_yuangong',{player:'phaseEnd'});
						};
					},
					ai:{
						expose:0.8,
					},
				},
			},
			translate:{
				"NHHL_fuqian":"傅佥",
				"NHHL_zhaoguang":"赵广",
				"NHHL_guansuo":"关索",
				"NHHL_zhugezhan":"诸葛瞻",
				"NHHL_wenyang":"文鸯",
				"NHHL_wutugu":"兀突骨",
				"NHHL_xiahouba":"夏侯霸",
				"NHHL_zhugedan":"诸葛诞",
				"NHHL_dongbai":"董白",
				"NHHL_yanbaihu":"严白虎",
				"NHHL_sunluban":"孙鲁班",
				"NHHL_zumao":"祖茂",
				"NHHL_chenqun":"陈群",
				"NHHL_wuanguo":"武安国",
				"NHHL_lukang":"陆抗",
				"NHHL_zhouji":"周姬",
				"NHHL_yiwei":"义为",
				"NHHL_yiwei_info":"当你使用【杀】前，你可选择一项：1.该【杀】视为【决斗】；2.该【杀】视为【过河拆桥】，以此法转化的牌计入【杀】的使用次数且无法被【无懈可击】响应",
				"NHHL_shouling":"守陵",
				"NHHL_shouling_info":"你可将一张红色基本牌当作【杀】【闪】【桃】使用或打出，你每转化一张【桃】，你摸一张牌",
				"NHHL_renqin":"认亲",
				"NHHL_renqin_info":"出牌阶段限一次，你可交给一名其他角色一张牌，然后展示其一张手牌（没有手牌则不展示）：若该牌为红色，你摸一张牌并获得技能“武圣”直到回合结束",
				"NHHL_huawu":"花武",
				"NHHL_huawu_info":"当一名角色于出牌阶段使用【杀】指定目标后，你可弃置一张手牌并令该角色可额外指定一名你攻击范围内的角色为目标",
				"NHHL_yuanji":"远计",
				"NHHL_yuanji_info":"回合开始时，若你的武将牌正面朝上，你可将武将牌翻面，然后选择一项：1，获得技能“观星”和“集智”直到回合结束；2，获得技能“武圣”和“天义”直到回合结束",
				"NHHL_sishou":"死守",
				"NHHL_sishou_info":"锁定技，当你的武将牌背面朝上时，其他角色计算与你的距离始终+1",
				"NHHL_tapo":"踏破",
				"NHHL_tapo_info":"当你使用的【杀】被闪避时，你可将武将牌翻面，令该【杀】造成两点的伤害",
				"NHHL_youjia":"油甲",
				"NHHL_youjia_info":"锁定技，当你成为【火攻】的目标时，该牌结算后，你弃置一张手牌；【南蛮入侵】对你无效",
				"NHHL_manyong":"蛮勇",
				"NHHL_manyong_info":"弃牌阶段开始时，你可使用一张牌，若如此做，你摸一张牌",
				"NHHL_beili":"背离",
				"NHHL_beili_info":"判定阶段开始时，你可跳过之，然后失去1点体力或交给一名其他角色一张非基本牌",
				"NHHL_jiannan":"艰困",
				"NHHL_jiannan_info":"限定技，回合开始阶段，你可连续进行三次判定：每有一张黑桃，你受到2点雷电伤害",
				"NHHL_toushu":"投蜀",
				"NHHL_toushu_info":"觉醒技，当你发动“艰困”后，若你未死亡，则回复体力至3，然后失去技能“背离”并获得技能“豹变”",
				"NHHL_yifan":"义反",
				"NHHL_yifan_info":"摸牌阶段结束时，你可指定一名其他角色并令其弃置你一张牌，然后你选择一项：弃置其一张牌；或视为对其使用一张不计入回合使用次数的【杀】",
				"NHHL_fuwei":"扶魏",
				"NHHL_fuwei_info":"你可改变对你造成伤害时的来源；每当你受到一次伤害后，你可选择一项：弃置伤害来源的一张牌，或与伤害来源各摸一张牌",
				"NHHL_xueshang":"血殇",
				"NHHL_xueshang_info":"出牌阶段限一次，你可交给一名其他角色两张牌并展示之：若其中有黑桃牌，该角色将其武将牌翻面；其中每有一张基本牌，你摸一张牌并获得技能“酒池”直到回合结束",
				"NHHL_xueshang1":"血殇",
				"NHHL_xueshang1_info":"当你进入濒死状态前，你可交给一名其他角色两张牌并展示之：若其中有黑桃牌，该角色将其武将牌翻面；其中每有一张基本牌，你摸一张牌并获得技能“酒池”直到回合结束",
				"NHHL_zhongzhang":"终章",
				"NHHL_zhongzhang_info":"锁定技，你的红桃牌均视为黑桃；你的回合外，若你已进行过回合结束阶段，“血殇”描述中的“出牌阶段限一次”改为“当你进入濒死状态前”",
				"NHHL_tuhao":"土豪",
				"NHHL_tuhao_info":"当你使用【杀】对一名角色造成伤害后，你可弃置该角色一张牌",
				"NHHL_chanxian":"谗陷",
				"NHHL_chanxian_info":"摸牌阶段结束时，你可弃置一张手牌并指定一名其他角色，然后该角色可以依次获得你与你的下家各一张牌，然后将其武将牌翻面",
				"NHHL_dusi":"毒肆",
				"NHHL_dusi_info":"结束阶段开始时，你可弃置全部手牌（至少一张），然后摸X张牌（X为你当前体力值）",
				"NHHL_yinbing":"引兵",
				"NHHL_yinbing_info":"出牌阶段开始时，你可摸一张牌，然后令一名其他角色选择一项：弃置你一张牌；或对你使用一张【杀】",
				"NHHL_zhongzheng":"中正",
				"NHHL_zhongzheng_info":"当你受到伤害后，你可弃置一张手牌，若该牌与对你造成伤害的牌颜色相同，你回复1点体力",
				"NHHL_bijin":"笔矜",
				"NHHL_bijin_info":"你的回合外，每当你的手牌因弃置而进入弃牌堆时，你可令一名其他角色进行一次判定，然后选择一项：摸一张牌；或交给该角色一张与判定牌相同颜色的牌，然后将其武将牌翻面",
				"NHHL_shewan":"舍腕",
				"NHHL_shewan_info":"每当你受到一次伤害时，你可防止此伤害，然后失去1点体力或弃置一张武器牌",
				"NHHL_yuangong":"远弓",
				"NHHL_yuangong_info":"你使用【杀】可指定处于连环状态的角色为目标",
				"NHHL_jujiang":"拒江",
				"NHHL_jujiang_info":"锁定技，你的武将牌不能被横置",
				"NHHL_benxi":"奔袭",
				"NHHL_benxi_info":"摸牌阶段，你可放弃摸牌，改为获得一名其他角色的一张牌，然后你选择一项：横置一名角色的武将牌；或视为你对其使用一张【杀】",
				"NHHL_xuemai":"血脉",
				"NHHL_xuemai_info":"出牌阶段开始时，你可摸一张牌，然后可横置一名其他角色的武将牌",
				"NHHL_xuegong":"血弓",
				"NHHL_xuegong_info":"其他角色的回合开始时，你可弃置一张牌，然后该角色获得“远弓”直到回合结束",
			},
		};
		return naihehualuo;
	});
	lib.config.all.characters.push('naihehualuo');
	if(!lib.config.characters.contains('naihehualuo')){
		lib.config.characters.push('naihehualuo');
	};
	lib.translate['naihehualuo_character_config']='奈何花落';
	//lib.help.奈何花落="<li>奈何花落包武将（单将）翻面时有彩蛋哦！";
}