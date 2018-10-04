window.func=function(lib,game,ui,get,ai,_status){
		game.import('character',function(lib,game,ui,get,ai,_status){
			var ding={
				name:'ding',
				connect:true,
				character:{
					"DING_guoyuan":["male","wei",3,["DING_fengtian","DING_gongqin"],["ext:扩展ol/DING_guoyuan.jpg","des:国渊，字子尼，乐安郡盖县人，三国时期曹魏官吏。汉末经学大师郑玄的高足，曾跟从管宁、邴原避乱辽东，后来回归中原，曹操任其为司空掾，而国渊亦忠于职守，在朝议上讨论问题时，经常厉言疾色，敢于发言，正直无私。曹操推行屯田制，令国渊负责处理屯田事宜。国渊发挥其管理才能，多方面平衡政策利害，将屯田的土地分配给人民，又按照人民比例安排吏员跟进，更列明屯田的各项实行措施，短短五年间就令到国家仓廪丰实，百姓亦能安居乐业。曹操征伐关中，留国渊作后勤，担任居府长史，统摄府中诸事。不久，田银、苏伯于河间造反，将军贾信破之，田银属下千余人众请求投降，程昱劝曹操不诛降众，国渊亦认为请降余党并非首恶，为其求赦，结果这千余人都得以保命。后来国渊任职太仆，位列九卿，最后卒于任内。"]],
					"DING_huanfan":["male","wei",3,["DING_lince","DING_suwang"],["ext:扩展ol/DING_huanfan.jpg","des:桓范(?-249年)，字元则，沛国龙亢(今安徽省怀远县西龙亢镇北)人。三国时期曹魏大臣、文学家，画家。建安末年，入丞相府，与王象等共撰《皇览》。延康元年(公元220年)，为羽林左监。魏明帝时，任中领军、尚书、 征虏将军、东中郎将、兖州刺史等。正始年间，任大司农，为曹爽谋划，号称“智囊”。司马懿起兵讨伐曹爽时，力劝曹爽挟魏帝到许昌，曹爽不听。高平陵政变后，被司马懿诛杀，著有《世要论》12卷或称《桓范新书》。桓范颇有文才，雅善丹青，唐朝张彦远《历代名画记》目其为中品。"]],
					"DING_huoyi":["male","shu",4,["DING_zhonglue"],["ext:扩展ol/DING_huoyi.jpg","des:霍弋（生卒年不详），字绍先，南郡枝江（今湖北枝江）人，霍峻之子，三国蜀汉至西晋初时将领。刘备时为太子舍人。后主登基为谒者。诸葛亮北驻汉中时用为丞相府记室，诸葛亮死后为黄门侍郎，刘禅立太子后为中庶子。尽言规谏太子，甚为得体。后永昌郡蛮夷作乱，刘禅以霍弋领永昌太守，率军讨伐，斩其豪帅，郡界宁静之后迁监军翊军将军，领建宁太守，统南中诸郡。景耀六年（263年），进号安南将军。邓艾偷袭阴平，霍弋想率军救援成都，但刘禅以成都已有准备，不准，后刘禅投降，霍弋在得知司马氏善待刘禅后，才率领南中六郡投降。降晋后仍为南中都督，平定交阯、日南、九真三郡，功封列侯。"]],
					"DING_zongyu":["shu","shu",3,["DING_gulian","DING_zuoan"],["ext:扩展ol/DING_zongyu.jpg","des:宗预(?-264年)，字德艳 ，荆州南阳郡安众县(今河南省南阳市)人。三国时期蜀汉官员、将领。曾随张飞入蜀助平益州，又受辟为丞相诸葛亮手下主簿，升任参军、右中郎将。诸葛亮逝世后，宗预受命出使孙吴，得到孙权的赞赏。迁后将军，出督永安，又升任征西大将军，并受封关内侯。公元258年(景耀元年)，因病回成都，受任镇军大将军。蜀汉灭亡后，宗预随后主刘禅徙往洛阳，在中途病逝。宗预为人坦率耿直，多次出使孙吴并深得孙权的敬重，为吴、汉两国同盟的巩固作出了一定的贡献。"]],
					"DING_sundeng":["male","wu",3,["DING_jianyou","DING_yijian"],["ext:扩展ol/DING_sundeng.jpg"]],
					"DING_lvju":["male","wu",4,["DING_quxian"],["ext:扩展ol/DING_lvju.jpg","des:吕据(?-256年)，字世议，汝南细阳(今安徽太和)人，三国时期吴国将领，大司马吕范次子。初因父亲功勋，授任郎官。吕范卧病时，任副军校尉，辅助掌管军事。黄武七年(228年)，吕范去世，吕据袭封南昌侯爵位，拜安军中郎将。多次征讨山越，每次皆能取胜。随潘浚讨伐五溪，并立战功;随朱然进攻樊城，与朱异攻破樊城外围。回师后任偏将军，入朝任马闲右部督、越骑校尉。太元元年(251年)，升任荡魏将军。孙权病重时，以为太子右部督。孙权死后，太子孙亮即位，以为右将军。建兴元年(252年)，率军抵御并击退魏军。建兴二年(253年)，升任骠骑将军，兼管西宫事务。五凤二年(255年)，与孙峻等进攻寿春，回军途中击败魏将曹珍。太平元年(256年)，吕据率军攻打魏国，途中孙峻已死，孙綝掌权。大怒之下率军返回，意图废除孙綝。孙綝得知后，命文钦、孙宪率兵迎击吕据。吕据自杀，夷三族。孙休即位，得到平反。"]],
					"DING_xurong":["male","qun",4,["mashu","DING_xihu"],["ext:扩展ol/DING_xurong.jpg","des:初随董卓，长沙太守孙坚率豫州诸群兵讨卓。卓先遣将荣、李蒙四出虏掠。荣遇坚于梁，与战、破坚，生禽颍川太守李旻，烹之。及坚移屯梁东，又为荣所败，复收散卒进屯阳人。后曹公军进至荥阳汴水，遇荣，与战，公兵败。后卓诛，荣侍汉。永汉三年，卓余党李傕、郭汜反，攻长安。司徒王允闻之，乃遣卓故将荣、胡轸击之于新丰。荣战死，轸以众降。"]],
					"DING_gongsundu":["male","qun",4,["DING_yuefa","DING_junge"],["ext:扩展ol/DING_gongsundu.jpg","des:公孙度 (150年-204年)，字升济，辽东襄平(今辽宁辽阳)人 ，东汉末年辽东地区割据军阀。少随父迁居玄菟郡。初为玄菟小吏，建宁二年(169年)， 继升尚书郎、冀州刺史，后被免官。初平元年(190年)， 经同乡徐荣推荐，被董卓任命为辽东太守。公孙度到任后，厉行严刑峻法，打击豪强势力，使令行政通，羽翼渐丰。不久，中原地区董卓乱起，各地军阀无暇东顾。公孙度趁机自立为辽东侯、平州牧。继则东伐高句丽，西击乌桓，南取辽东半岛，越海取胶东半岛北部东莱诸县，开疆扩土;又招贤纳士，设馆开学，广招流民，威行海外，俨然以辽东王自居。建安九年(204年)病逝，子公孙康继承其位。由于公孙度的锐意进取和苦心经营，使辽东地区在汉末三国的战乱年代，获得了暂时的安宁，推动了当地生产技术和封建文化的发展。"]],
					"DING_fanye":["male","shen",3,["DING_yuyan","DING_zhuoxin"],["ext:扩展ol/DING_fanye.jpg","des:虚拟人物"]],
				},
				characterTitle:{
					"DING_guoyuan":"<span style='font-weight:bold;font-family:xiaozhuan'>魏之国器</span>",
					"DING_huanfan":"<span style='font-weight:bold;font-family:xiaozhuan'>皓月掩辉</span>",
					"DING_huoyi":"<span style='font-weight:bold;font-family:xiaozhuan'>节御之督</span>",
					"DING_zongyu":"<span style='font-weight:bold;font-family:xiaozhuan'>敬望高风</span>",
					"DING_sundeng":"<span style='font-weight:bold;font-family:xiaozhuan'>茂雅的太子</span>",
					"DING_lvju":"<span style='font-weight:bold;font-family:xiaozhuan'>策马征越</span>",
					"DING_xurong":"<span style='font-weight:bold;font-family:xiaozhuan'>骁战龙虎</span>",
					"DING_gongsundu":"<span style='font-weight:bold;font-family:xiaozhuan'>厉法治新</span>",
					"DING_fanye":"<span style='font-weight:bold;font-family:xiaozhuan'>苍炎泯灭</span>",
				},
				skill:{
					"DING_fengtian":{
						enable:'phaseUse',
						usable:1,
						filter:function(event,player){
							return player.countCards('h')>player.hp;
						},
						filterCard:true,
						selectCard:function(card,player,target){
							var player=_status.event.player;
							if(player.countCards('h')-player.hp<3) return player.countCards('h')-player.hp;
							return 3;
						},
						filterTarget:function(card,player,target){
							return get.distance(player,target,'attack')<=1&&ui.selected.cards.length>0&&target!=player;
						},
						selectTarget:[0,3],
						check:function(card){
							return 6-get.value(card);
						},
						content:function(){
							target.draw();
						},
						ai:{
							order:11,
							result:{
								target:function(player,target){
									if(game.countPlayer(function(current){return current!=player&&get.distance(player,current,'attack')<=1&&get.attitude(player,current)>0})>0) return 1;
								},
							},
							expose:0.3,
						},
					},
					"DING_gongqin":{
						trigger:{
							target:'shaBefore'
						},
						forced:true,
						filter:function(event,player){
							return event.card.name=='sha'&&get.color(event.card)=='black'&&player.countCards('e')<event.player.countCards('e');
						},
						content:function(){
							trigger.cancel();
						},
						ai:{
							effect:{
								target:function(card,player){
									if(card.name=='sha'&&get.color(card)=='black') return 'zerotarget';
								},
							},
						},
					},
					"DING_lince":{
						enable:'phaseUse',
						usable:1,
						filterCard:function(card){
							return get.type(card)!='basic';
						},
						filterTarget:function(card,player,target){
							return target!=player;
						},
						discard:false,
						prepare:'give',
						content:function(){
							'step 0'
							target.gain(cards,player);
							'step 1'
							target.chooseControl('使用此牌','弃置所有手牌并回复一点体力').set('ai',function(event){
								if(target.hp<target.maxHp&&target.countCards('h',{name:'tao'})==0&&target.countCards('h')<=3) return '弃置所有手牌并回复一点体力';
								return '使用此牌';
							});
							'step 2'
							if(result.control=='使用此牌'){
								target.chooseToUse(function(card){return card==cards[0]});
							}else{
								event.finish();
							};
							if(result.control=='弃置所有手牌并回复一点体力'){
								target.discard(target.get('h'));
								target.recover();
							};
						},
						ai:{
							order:3,
							result:{
								target:function(player,target){
									return 1;
								},
							},
							expose:0.5,
						},
					},
					"DING_suwang":{
						trigger:{
							global:'dyingBegin'
						},
						filter:function(event,player){
							return event.player.countCards('h')>0;
						},
						check:function(event,player){
							return get.attitude(player,event.player)>=0;
						},
						content:function(){
							trigger.player.discard(trigger.player.get('h'));
							trigger.player.recover();
						},
						ai:{
							expose:0.7,
						},
					},
					"DING_zhonglue":{
						enable:'phaseUse',
						usable:1,
						filter:function(event,player){
							return player.maxHp>player.hp;
						},
						filterTarget:function(card,player,target){
							return target!=player;
						},
						content:function(){
							target.draw(2);
							player.storage.DING_zhonglue=true;
						},
						ai:{
							order:11,
							result:{
								target:function(player,target){
									if(game.countPlayer(function(current){return current!=player&&get.attitude(player,current)>0&&current.countCards('h')==0})>0) return 1;
									if(game.countPlayer(function(current){return current!=player&&get.attitude(player,current)<0&&current.isMaxHandcard()})>0) return -1;
								},
							},
							expose:0.4,
						},
					},
					"_DING_zhonglue":{
						trigger:{
							player:'phaseEnd'
						},
						filter:function(event,player){
							return player.storage.DING_zhonglue;
						},
						forced:true,
						content:function(){
							for(var i=0;i<game.players.length;i++){
								if(game.players[i].isMaxHandcard()) game.players[i].damage();
							};
							delete player.storage.DING_zhonglue;
						},
					},
					"DING_gulian":{
						enable:'phaseUse',
						usable:1,
						filterCard:function(card){
							return card.name=='sha';
						},
						filterTarget:function(card,player,target){
							return target!=player&&target.countCards('h')!=player.countCards('h');
						},
						content:function(){
							player.draw();
							target.draw();
							player.showCards(player.get('h').randomGet());
							target.showCards(target.get('h').randomGet());
						},
						ai:{
							order:2,
							result:{
								target:function(player,target){
									return 1;
								},
							},
							expose:0.6,
						},
					},
					"DING_zuoan":{
						trigger:{
							global:'loseEnd'
						},
						filter:function(event,player){
							return event.cards&&player.storage.DING_zuoan>=2&&player.storage.DING_zuoan1!=true;
						},
						direct:true,
						content:function(){
							'step 0'
							player.storage.DING_zuoan1=true;
							for(var i=0;i<trigger.cards.length;i++){
								if(trigger.cards[i].name=='sha') event.card=trigger.cards[i];
							};
							'step 1'
							player.chooseTarget(get.prompt('DING_zuoan')).ai=function(target){
								return get.attitude(player,target);
							};
							'step 2'
							if(result.bool){
								player.line(result.targets);
								player.logSkill('DING_zuoan')
								result.targets[0].gain(event.card,'gain2');
							}else{
								event.finish();
							};
						},
						group:["DING_zuoan_mark","DING_zuoan_unmark"],
						subSkill:{
							"mark":{
								trigger:{
									global:'loseBegin'
								},
								forced:true,
								popup:false,
								filter:function(event,player){
									if(!event.cards) return false;
									for(var i=0;i<event.cards.length;i++){
										if(event.cards[i].name=='sha') return event.player!=player;
									};
									return false;
								},
								content:function(){
									if(player.storage.DING_zuoan==undefined) player.storage.DING_zuoan=0;
									for(var i=0;i<trigger.cards.length;i++){
										if(trigger.cards[i].name=='sha') player.storage.DING_zuoan++;
									};
								},
							},
							"unmark":{
								trigger:{
									global:'phaseEnd'
								},
								forced:true,
								popup:false,
								content:function(){
									player.storage.DING_zuoan=0;
									delete player.storage.DING_zuoan1;
								},
							},
						},
					},
					"DING_jianyou":{
						enable:'phaseUse',
						usable:1,
						filterTarget:function(card,player,target){
							return target!=player;
						},
						content:function(){
							'step 0'
							player.draw();
							if(player.countCards('h')>=target.countCards('h')){
								player.chooseCard(1,'h',true);
							}else{
								event.finish();
							};
							'step 1'
							if(result.bool){
								player.$give(result.cards[0],target);
								target.gain(result.cards[0],player);
								target.chooseToUse(function(card){return card==result.cards[0]});
							}else{
								event.finish();
							};
						},
						ai:{
							order:9,
							result:{
								target:function(player,target){
									if(player.countCards('h')+1>=target.countCards('h')) return 1;
									return [-10,10];
								},
							},
							expose:0.2,
						},
					},
					"DING_yijian":{
						trigger:{
							global:'phaseEnd'
						},
						filter:function(event,player){
							return player.storage.DING_yijian&&player.maxHp-player.hp>0;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('DING_jianyou'),function(card,player,target){
								return target!=player;
							}).ai=function(target){
								return get.attitude(player,target);
							};
							'step 1'
							if(result.bool){
								player.line(result.targets);
								player.logSkill('DING_yijian')
								player.line(result.targets[0]);
								result.targets[0].draw(player.maxHp-player.hp);
							}else{
								event.finish();
							};
						},
						ai:{
							expose:0.2,
						},
						group:["DING_yijian_mark","DING_yijian_unmark"],
						subSkill:{
							"mark":{
								trigger:{
									player:'damageEnd'
								},
								forced:true,
								popup:false,
								content:function(){
									player.storage.DING_yijian=true;
								},
							},
							"unmark":{
								trigger:{
									global:'phaseAfter'
								},
								forced:true,
								popup:false,
								content:function(){
									delete player.storage.DING_yijian;
								},
							},
						},
					},
					"DING_quxian":{
						enable:'phaseUse',
						usable:1,
						filterCard:true,
						selectCard:-1,
						viewAs:{name:'sha'},
						viewAsFilter:function(player){
							return player.countCards('h')>0;
						},
						check:function(card){
							var player=get.owner(card);
							if(player.countCards('h')>3||player.maxHp-player.hp==0) return 0;
							return 1;
						},
						onuse:function(result,player){
							player.addTempSkill('DING_quxian1',{player:'useCardAfter'});
						},
					},
					"DING_quxian1":{
						trigger:{
							source:'damageEnd'
						},
						forced:true,
						popup:false,
						filter:function(event,player){
							return player.maxHp>player.hp;
						},
						content:function(){
							player.draw(player.maxHp-player.hp);
						},
					},
					"DING_xihu":{
						group:["DING_xihu_attack","DING_xihu_attacked"],
						subSkill:{
							"attack":{
								trigger:{
									player:'shaBegin'
								},
								filter:function(event,player){
									return event.target.hp<player.hp;
								},
								check:function(event,player){
									return get.attitude(player,event.target)<=0;
								},
								content:function(){
									player.discardPlayerCard(trigger.target,1,'hej');
								},
								ai:{
									expose:0.3,
								},
							},
							"attacked":{
								trigger:{
									target:'shaBegin'
								},
								filter:function(event,player){
									return event.player.countCards('h')>player.countCards('h');
								},
								check:function(event,player){
									return get.attitude(player,event.player)>=0;
								},
								content:function(){
									trigger.player.draw();
								},
								ai:{
									expose:0.3,
								},
							},
						},
					},
					"DING_yuefa":{
						trigger:{
							player:'phaseDrawBegin'
						},
						check:function(event,player){
							return player.countCards('h')<=2;
						},
						content:function(){
							trigger.num+=2;
							player.addTempSkill('DING_yuefa1',{player:'phaseAfter'});
						},
					},
					"DING_yuefa1":{
						mod:{
							attackFrom:function(from,to,distance){
								var list=['wei','shu','wu','qun'];
								var num=game.countPlayer(function(current){
									if(list.contains(current.group)){
										list.remove(current.group);
										return true;
									};
								});
								return distance-num;
							},
							maxHandcard:function (player,num){
								var list=['wei','shu','wu','qun'];
								var num1=game.countPlayer(function(current){
									if(list.contains(current.group)){
										list.remove(current.group);
										return true;
									};
								});
								return num-num1;
							},
						},
					},
					"_DING_yuefa":{
						trigger:{
							global:"dieBefore",
						},
						forced:true,
						filter:function (event,player){
							return player.hasSkill('DING_yuefa1')&&event.source&&event.source==player;
						},
						content:function(){
							player.removeSkill('DING_yuefa1');
						},
					},
					"DING_junge":{
						trigger:{
							global:'phaseBegin'
						},
						filter:function(event,player){
							return event.player!=player&&event.player.hp>player.hp;
						},
						check:function(event,player){
							return get.attitude(player,event.target)<0;
						},
						content:function(){
							player.useCard({name:'sha'},trigger.player);
							player.addTempSkill('DING_junge1',{player:'useCardAfter'});
						},
						ai:{
							expose:0.5,
						},
					},
					"DING_junge1":{
						trigger:{
							source:'damageAfter'
						},
						forced:true,
						popup:false,
						filter:function(event,player){
							return event.card&&event.card.name=='sha';
						},
						content:function(){
							player.draw();
							trigger.player.draw();
						},
					},
					"DING_yuyan":{
						group:["DING_yuyan_damage","DING_yuyan_sha"],
						subSkill:{
							"damage":{
								trigger:{
									source:'damageBefore'
								},
								forced:true,
								content:function(){
									trigger.nature='fire';
								},
							},
							"sha":{
								trigger:{
									player:'shaBegin'
								},
								forced:true,
								filter:function(event,player){
									return event.card&&event.card.nature=='fire';
								},
								content:function(){
									trigger.directHit=true;
								},
							},
						},
					},
					"DING_zhuoxin":{
						enable:'phaseUse',
						usable:1,
						filterCard:true,
						filterTarget:function(card,player,target){
							return target!=player&&target.countCards('hej')>0;
						},
						check:function(card){
							return 6-get.value(card);
						},
						content:function(){
							target.showHandcards();
							var cards1=target.get('hej');
							var list=[];
							for(var i=0;i<cards1.length;i++){
								if(get.type(cards1[i])==get.type(cards[0])) list.push(cards1[i]);
							};
							target.discard(list);
						},
						ai:{
							order:8,
							result:{
								target:function(player,target){
									return -1;
								},
							},
							expose:0.9,
						},
					},
				},
				translate:{
					"DING_guoyuan":"国渊",
					"DING_huanfan":"桓范",
					"DING_huoyi":"霍弋",
					"DING_zongyu":"宗预",
					"DING_sundeng":"孙登",
					"DING_lvju":"吕据",
					"DING_xurong":"徐荣",
					"DING_gongsundu":"公孙度",
					"DING_fanye":"凡野",
					"DING_fengtian":"丰田",
					"DING_fengtian_info":"出牌阶段限一次，你可以将你的手牌数弃置至等同于你的体力值。若如此做，你令你攻击范围内X名角色各摸一张牌（x为你弃置的牌数且至多为3）",
					"DING_gongqin":"躬清",
					"DING_gongqin_info":"锁定技，装备区内牌数大于你的角色对你使用的黑色【杀】无效",
					"DING_lince1":"临策",
					"DING_lince":"临策",
					"DING_lince_info":"出牌阶段限一次，你可以将一张非基本牌交给一名其他角色并令其选择一项：使用此牌；弃置所有手牌（至少一张）并回复一点体力",
					"DING_suwang":"宿望",
					"DING_suwang_info":"当一名角色进入濒死状态时，你可以令其弃置所有手牌（至少一张）然后回复一点体力",
					"DING_zhonglue":"重略",
					"DING_zhonglue_info":"出牌阶段限一次，若你已受伤，你可以令一名其他角色摸两张牌，若如此做，回合结束时，你对手牌数最多的角色造成一点伤害",
					"DING_gulian":"固联",
					"DING_gulian_info":"出牌阶段限一次，你可以弃置一张【杀】，然后与一名手牌数不等于你的其他角色各摸一张牌并分别展示一张牌",
					"DING_zuoan":"佐安",
					"DING_zuoan_info":"其他角色的【杀】置入弃牌堆时，若此牌为回合内置入弃牌堆的第二张【杀】，你可将之交给一名角色",
					"DING_jianyou":"兼优",
					"DING_jianyou_info":"出牌阶段限一次，你可以指定一名其他角色并摸一张牌，若此时你的手牌数不小于该角色，你展示并交给其一张牌，然后其可使用之",
					"DING_yijian":"遗谏",
					"DING_yijian_info":"一名角色的回合结束时，若你本回合曾受到过伤害，你可以令一名其他角色摸X张牌（x为你已损失的体力值）",
					"DING_quxian1":"驱险",
					"DING_quxian":"驱险",
					"DING_quxian_info":"出牌阶段限一次，你可以将所有手牌（至少一张）当做【杀】使用，若此【杀】造成伤害，你摸X张牌（X为你已损失的体力值）",
					"DING_xihu":"袭虎",
					"DING_xihu_info":"当你对体力值小于你的角色使用【杀】时，你可以弃置其区域内的一张牌。手牌数大于你的角色对你使用【杀】时，其可以摸一张牌",
					"DING_yuefa1":"越伐",
					"DING_yuefa":"越伐",
					"DING_yuefa_info":"摸牌阶段，你可以额外摸两张牌并令你本回合的攻击范围+X。出牌阶段结束时，若你未杀死至少一名角色，你的手牌上限-X直到回合结束（x为剩余势力数）",
					"DING_junge1":"峻革",
					"DING_junge":"峻革",
					"DING_junge_info":"其他角色的回合开始时，若其体力值大于你，你可以视为对其使用一张【杀】，此【杀】造成伤害后，你与其各摸一张牌",
					"DING_yuyan":"驭炎",
					"DING_yuyan_info":"锁定技，你造成的伤害均视为火焰伤害，你使用的【火杀】不可闪避",
					"DING_zhuoxin":"灼心",
					"DING_zhuoxin_info":"出牌阶段限一次，你可以弃置一张牌，然后令一名其他角色展示所有手牌并弃置其区域内的所有此类型的牌",
				},
			};
			return ding;
		});
		lib.config.all.characters.push('ding');
		if(!lib.config.characters.contains('ding')){
			lib.config.characters.push('ding');
		};
		lib.translate['ding_character_config']='定';
};