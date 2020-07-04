window.func=function(lib,game,ui,get,ai,_status){
	game.import('character',function(lib,game,ui,get,ai,_status){
		var tqk={
			name:'tqk',
			connect:true,
			characterSort:{
				tqk:{
					'tqk_lnz':[],
					'tqk_zzbj':[],
					'tqk_sgbzb':[],
					'tqk_wm':[],
				},
			},
			perfectPair:{
				wm_sb:['wm_sw'],
				wm_hx:['wm_zl'],
			},
			character:{
				"ln_zwj": ["female", 'Han', 3, ['LN_QIYIN', 'LN_BTY', 'n称号'], ['des:卓文君（公元前175年—公元前121年），原名文后，西汉时期蜀郡临邛（今四川省成都市邛崃市）人，汉代才女。中国古代四大才女之一、蜀中四大才女之一。卓文君为蜀郡临邛的冶铁巨商卓王孙之女，姿色娇美，精通音律，善弹琴，有文名。卓文君与汉代著名文人司马相如的一段爱情佳话至今被人津津乐道。她也有不少佳作，如《白头吟》，诗中“愿得一心人，白头不相离”堪称经典佳句。']],
				"ln_wzt": ["female", 'qun', 3, ['n称号', 'ln_huoni', 'ln_lugong'], ['des:武则天（624年－705年12月16日），名曌（zhào），并州文水（今山西文水县东）人。中国历史上唯一的正统的女皇帝，也是即位年龄最大（67岁即位）、寿命最长的皇帝之一（终年82岁）。']],
				"ln_lqz": ["female", 'qun', 3, ['LN_YOUGUI', 'LN_QINGKU', 'LN_CIDIAO', 'LN_SHINAN', 'n称号'], ['des:李清照（1084年3月13日—1155年？），号易安居士，汉族，齐州济南（今山东省济南市章丘区）人。宋代女词人，婉约词派代表，有“千古第一才女”之称。李清照出生于书香门第，早期生活优裕，其父李格非藏书甚富，她小时候就在良好的家庭环境中打下文学基础。出嫁后与夫赵明诚共同致力于书画金石的搜集整理。金兵入据中原时，流寓南方，境遇孤苦。所作词，前期多写其悠闲生活，后期多悲叹身世，情调感伤。形式上善用白描手法，自辟途径，语言清丽。论词强调协律，崇尚典雅，提出词“别是一家”之说，反对以作诗文之法作词。能诗，留存不多，部分篇章感时咏史，情辞慷慨，与其词风不同，有《易安居士文集》《易安词》，已散佚。后人有《漱玉词》辑本。今有《李清照集校注》']],
				"ln_qly": ["female", 'qun', 4, ['LN_JIANGF', 'LN_MASHU', 'LN_ZHENLIE', 'n称号'], ['des:秦良玉（1574年―1648年7月11日），字贞素，四川忠州（今重庆忠县）人，明朝末年著名女将。丈夫马千乘是汉伏波将军马援后人，世袭石砫宣慰使（俗称土司），马千乘被害后，因其子马祥麟年幼，秦良玉于是代领夫职。秦良玉率领兄弟秦邦屏、秦民屏先后参加抗击清军、奢崇明之乱、张献忠之乱等战役，战功显赫，被封为二品诰命夫人。崇祯皇帝曾作诗四首赞颂秦良玉。秦良玉死后后世文人赞颂秦良玉所作的诗词非常多，近代冰心、郭沫若也对秦良玉大加称赞，爱国将领冯玉祥也曾说到：“纪念花木兰，要学秦良玉。”明朝灭亡后，南明王朝追谥秦良玉为“忠贞侯”。历朝历代修史，女性名人都是被记载到列女传里，而秦良玉是历史上唯一一位作为王朝名将被单独立传记载到正史将相列传里的巾帼英雄。']],
				"ln_cy": ["female", 'Han', 3, ['LN_GH', 'LN_BG', 'LN_DUANC', 'n称号'], ["des:中国四大才女之一，堪称三国时期第一才女，善于诗文和音乐，幼时便可以分辨出弦音，其父也精通音律，其父死后，蔡琰因战乱而为匈奴人所虏，后来为魏国花钱买回，终于再次回到了故乡，与曹操是忘隙之交；"]],
				"ln_lz": ["female", 'Han', 3, ['LN_ZHIXIN', 'LN_DUZHI', 'n称号'], ["des:吕雉（公元前241年－公元前180年8月18日），字娥姁[é xū]，通称吕后，或称汉高后、吕太后等等。砀郡单父县（今山东菏泽市单县）人。汉高祖刘邦（前202年-前195年在位）的皇后，高祖死后，被尊为皇太后（前195年—前180年），是中国历史上有记载的第一位皇后和皇太后。同时吕雉也是秦始皇统一中国，实行皇帝制度之后，第一个临朝称制的女性，被司马迁列入记录帝王政事的本纪，后来班固作汉书仍然沿用。她开启了汉代外戚专权的先河。吕雉统治期间实行黄老之术与民休息的政策，废除挟书律，下令鼓励民间藏书、献书，恢复旧典。为后来的文景之治打下了很好的基础，司马迁在《史记·吕后本纪》中对她的评价是“政不出房户，天下晏然；刑罚罕用，罪人是希；民务稼穑，衣食滋殖。”给予吕后施政极大的肯定。"]],
				"ln_wzf": ["female", 'Han', 3, ['LN_XHOU', 'LN_CN', 'n称号'], ["des:卫子夫（？－前91年），名不详，字子夫，河东平阳（今山西临汾）人。卫子夫是汉武帝刘彻的第二任皇后，史称孝武卫皇后，也是中国历史上第一位拥有独立谥号的皇后，卫子夫原为平阳公主家歌女。于建元二年（前139年）入宫，建元三年（前138年）封为夫人，元朔元年（前128年）立为皇后，征和二年（前91年）在巫蛊之祸中自杀身亡。谥思后，葬桐柏亭。身驻汉宫凡49年，在皇后位38年，育有一男三女。"]],
				"ln_ds": ["female", 'Han', 3, ['LN_XINGWEN', 'LN_JINGZI', 'n称号'], ["des:邓绥（81年－121年4月17日），南阳新野人，东汉王朝著名的女政治家，东汉王朝第四代皇帝汉和帝的皇后。邓绥系出名门，其祖父正是以向光武帝刘秀进献了“图天下策”的东汉开国重臣、云台二十八将之首的太傅高密侯邓禹。邓绥15岁入宫，22岁被册封为皇后。东汉延平元年（公元106年），年仅27岁的汉和帝突然驾崩，面对着“主幼国危”的局面，25岁的邓绥临朝称制。邓绥执政期间，对内帮助东汉王朝度过了“水旱十年”的艰难局面，对外则坚决派兵镇压了西羌之乱，使得危机四伏的东汉王朝转危为安，被誉为“兴灭国，继绝世”。但另一方面，邓绥亦有专权之嫌，其废长立幼，临朝称制达十六年而不愿还政于刘氏，朝中多有非议。东汉永宁二年（公元121年），邓绥驾崩，谥号“和熹”，与汉和帝合葬于慎陵。"]],
				"ln_bz": ["female", 'Han', 4, ['LN_CX', 'LN_JJ', 'LN_CJ', 'n称号'], ["des:西汉史学家、文学家、思想家。以才学著称，曾经几度入宫传授学识，班昭继承兄长遗志，坚决修订完《汉书》，而也只有她才能修订完，故而十分得人敬佩，是皇太后邓绥之师，名望很高"]],
				"ln_wzj": ["female", "Han", 3, ['LN_LY', 'LN_CQ', 'n称号'], ["des:中国四大美女之一，年少之时以民间女子身份被选为宫女，之后，匈奴单于向元帝请求娶汉人为妻（其间又有两种说法，一种是从昭君入宫之后到出塞的这段时间内元帝从未见过昭君，因此当发现她是绝世美女后，颇为后悔。另一种则是，昭君入宫后，过了几年，为元帝发现，两人爱的死去活来，之所以后来送她出塞，则是元帝出于顾及大家的原因），遂许昭君与之，几年后，昭君丧夫（昭君请求回归大汉，但是为皇帝所拒绝），又按照匈奴习俗嫁给了另一个单于，过了11年，又再度丧夫，王昭君经历了悲苦的一生，最终无法忍受而服毒自杀；"]],
				"ln_zwy": ["female", 'qi', 4, ['LN_DZ', 'LN_MJ', 'n称号'], ["des:齐国人，不学女工，好为治国之术，又名钟离春、钟无盐，相传相貌极丑，故而四十而未加，不甘心的她直谏齐王，使得齐王颇有建树。"]],
				"ln_mjn": ["female", "qin", 3, ['LN_QT', 'n称号'], ["des:秦王政时期人物，相传为寻未谋面的夫君而将长城哭倒。"]],
				"ln_hyy": ["female", "shu", 4, ["LX", "dc", "LN_JIQIAO", 'bazhen', 'n称号'], ["des:诸葛亮之妻，诸葛瞻之母，有奇才，上通天文，下察地理，精通兵法，近乎诸略无所不晓，善于发明制造，传授诸葛亮很多学识，在诸葛亮病逝之后不久也随之仙逝，死前以“忠孝”勉励其子诸葛瞻；"]],
				"ln_nw": ["female", "G", 4, ["SD", "SN", "n称号"], ["des:上古传说中的人物，华胥氏之女，人首蛇身，有圣德(五行属土德)，与伏羲兄妹通婚，创造婚姻制度，结束了只知其母不知其父的原始社会，有补天造人、治水平乱等的传说，和伏羲一起治理族人，制造乐器等物品，对后世产生了极大的影响（由于女娲伏羲属于一家人，故而“三皇”中只选取其中一人为代表）；"]],
				"ln_ehny": ["female", "SW", 5, ["DX", "JF", 'n称号'], ["des:娥皇女英，又称皇英。长曰娥皇，次曰女英，是中国古代神话传说中帝尧的两个女儿，姐妹同嫁帝舜为妻。舜父顽，母嚣，弟劣，曾多次欲置舜于死地，终因娥皇女英助之而脱险。舜继尧位，娥皇女英之其妃，后舜至南方巡视，死于苍梧。二妃往寻，得知舜帝已死，埋在九嶷山下，抱竹痛哭，泪染青竹，泪尽而死，因称“潇湘竹”或“湘妃竹”。自秦汉时起，湘江之神湘君与湘夫人的爱情神话，被演变成舜与娥皇、女英的传说。后世因附会称二女为“湘夫人”。"]],
				"ln_tss": ["female", "SW", 4, ["HX", "启夏", "n称号"], ["des:大禹之妻，传说为狐仙化身，协助大禹，在禹治水之时，将内事管理得条条有理，特别是对于夏启的管教。民间流传许多关于夏禹和涂山氏的美好的爱情故事。"]],
				"ln_fh": ["female", "SW", 4, ["LN_JG", "n称号", 'mashu'], ["des:武丁最宠幸的妃子，也是中国历史上最早最杰出的女将，能征善战而且精于政务，文武全才，深得武丁宠爱，死后更是以极其崇高的礼节厚葬；"]],
				"ln_qj": ["female", "qi", 3, ["LN_GZ", "LN_DY", 'n称号'], ["des:齐国奇女子，姜小白堂妹，嫁给晋文公为妻，协助晋文公登上国君之位，素有国姿，善于舞乐等文艺之才，为人又深明大义，称得上一代奇女子，姜奇得知晋文公沉迷于自己的美色之中，便密谋将之送回晋国，并且杀死了可能泄密的婢女，然后想办法将晋文公送回了晋国，晋文公后来成为“五霸之一”；"]],
				"ln_fj": ["female", "chu", 3, ["明辨", "jinxian", 'n称号'], ["des:樊姬，楚庄王的王后。樊姬为了劝阻楚庄王不要因打猎，玩物丧志，就不吃禽兽肉，以此来打动楚庄王。而楚庄王从此改过自新。张说曾说：“楚国所以霸，樊姬有力。”，除此之外，樊姬还有进贤之功、知人之明，孙叔敖可以说是她间接引进的。"]],
				"ln_mm": ["female", "qi", 3, ["严母", "惟德", 'n称号'], ["des:叔敖母，即孙叔敖之母，深知天道。叔敖见蛇，两头岐首，杀而埋之，泣恐不及。母曰阴德，不死必寿。孟母，仉氏，生卒年不可考，孟子的母亲。战国时人，以教子有方著称。孟子三岁丧父，靠母亲教养长大成人，并成为后世儒家追慕向往的亚圣，孟母也留下了“孟母三迁”、“断机教子”等教子佳话。"]],
				"ln_dmsj": ["female", "chu", 3, ["预谚", "鉴师", "识天", 'n称号'], ["des:邓曼，曼姓，邓城（今湖北襄阳西北）人，春秋时邓侯之女，楚武王夫人。邓曼为人贤惠聪颖，常对楚武王的某些活动进行劝谋。生子熊赀，后为楚文王。羊舌叔姬，晋国大夫羊舌职之妻，叔向之母，以慧著称，多次准确预言其家人命运。"]],
				"ln_djj": ["female", "lu", 3, ["LN_YH", "LN_XJ", "方绩", 'n称号'], ["des:敬姜，齐侯之女，姜姓，谥曰敬，是鲁国大夫公父文伯的母亲。与孔子同时。世称贤母敬姜的《论劳逸》是春秋战国时期家训的代表之作。其事迹散见於《国语》、《列女传》、《韩诗外传》、《礼记·檀弓》。定姜，姜姓，定是跟从丈夫的谥号，春秋时期卫国国君卫定公的夫人，卫献公嫡母。"]],
				"ln_jhwj": ["female", "lu", 3, ["秩秩", "罪谏", "救卫", 'n称号'], ["des:姜后，是西周第十一代天子周宣王的王后，齐国君主之女。她因为周宣王早卧晏起，于是在永巷待罪，将发簪耳环脱下，称君王耽色，源罪于自己。周宣王感动，励精图治，才有宣王中兴。齐桓卫姬，忠款诚信。公好淫乐，姬为修身。望色请罪，桓公加焉，厥使治内，立为夫人，曾经阻止齐桓公攻卫，并且颇有谏言。"]],
				"ln_jtxn": ["female", "SW", 5, ["LN_SN", 'n称号'], ["des:上古传说人物，鸟身人首。传说曾经在黄帝苦战蚩尤不胜之时，传授黄帝兵法，最终黄帝终于打败了蚩尤。"]],
				"ln_xs": ["female", "chu", 3, ['LN_CY', 'LN_XS', 'n称号'], ["des:春秋时期美女，为四大美女之一，曾经协助越王勾践，以美人计迷惑夫差，最终导致夫差败亡，吴国被灭，勾践一雪前耻，而且传说西施德才兼备，但最后的归宿不得而知，《墨子》中称其被丢进河中溺水而亡。"]],
				"wm_zgl": ["male", "shu", 3, ["BJ"], ["des:诸葛亮（181年－234年10月8日[1]），字孔明，号卧龙（也作伏龙），汉族，徐州琅琊阳都（今山东临沂市沂南县）人，三国时期蜀汉丞相，杰出的政治家、军事家、外交家、散文家、书法家、发明家、文学家。早年随叔父诸葛玄到荆州，诸葛玄死后，诸葛亮就在南阳郡耕种。后刘备三顾茅庐请出，辅佐刘备建立蜀汉。 蜀汉建立后，诸葛亮被封为丞相、武乡侯，对内抚百姓，示仪轨，约官职，从权制，开诚心，布公道，对外联吴抗魏，为实现兴复汉室的政治理想，数次北伐，但因各种不同因素而失败，最后病逝于五丈原。刘禅追谥其为忠武侯，后世常以武侯、诸葛武侯尊称诸葛亮。东晋政权因其军事才能特追封他为武兴王。 诸葛亮散文代表作有《出师表》、《诫子书》等。曾发明木牛流马、孔明灯等，并改造连弩，叫做诸葛连弩，可一弩十矢俱发。 诸葛亮一生“鞠躬尽瘁、死而后已”，是中国传统文化中忠臣与智者的代表人物。"]],
				"wm_zl": ["male", "qun", 4, ["SM", "归林"], ["des:张良（约前250—前186年），字子房，颍川城父人，秦末汉初杰出的谋士、大臣，与韩信、萧何并称为“汉初三杰”。 张良的祖父、父亲等先辈在韩国的首都阳翟（今河南禹州）任过五代韩王之相。 曾劝刘邦在鸿门宴上卑辞言和，保存实力，并疏通项羽叔父项伯，使刘邦得以脱身。后又以出色的智谋，协助汉高祖刘邦在楚汉战争中最终夺得天下，帮助吕后扶持刘盈登上太子之位，被封为留侯。 他精通黄老之道，不留恋权位，晚年据说跟随赤松子云游。张良去世后，谥为文成侯。《史记·留侯世家》专门记载了张良的生平。汉高祖刘邦在洛阳南宫评价他说：“夫运筹策帷帐之中，决胜于千里之外，吾不如子房。”，表现出张良的机智谋划、文韬武略。后世敬其谋略出众，称其为“谋圣”。"]],
				"wm_lw": ["male", "qun", 4, ["宗师", "YS", "yx"], ["des:姜子牙（约前1156年—约前1017年），亦作姜尚，中国著名历史人物，商末周初人。姜姓，吕氏，名尚，一名望，字子牙，或单呼牙，别号飞熊，因其先祖辅佐大禹平水土有功被封于吕，故以吕为氏，也称吕尚。 相传姜子牙72岁时在渭水之滨的磻溪垂钓，遇到了求贤若渴的周文王，被封为“太师”（武官名），称“太公望”，俗称太公，被周武王尊为“师尚父”。姜子牙辅佐武王伐纣建立了周朝，是齐国的缔造者，周文王倾商，武王克纣的首席谋主、最高军事统帅与西周的开国元勋，齐文化的创始人，亦是中国古代的一位影响久远的杰出的韬略家、军事家与政治家,为各家所推崇，视为祖先。吕望为《武庙》主祭对象，同《文庙》的孔子相辉映。"]],
				"wm_trj": ["male", "qun", 3, ["RB", "yb", "CY"], ["des:田穰苴（生卒不详），又称司马穰苴，春秋末期齐国人，是田完（陈完）的后代，齐田氏家族的支庶。田穰苴是齐国继姜尚之后一位承上启下的著名军事家，曾率齐军击退晋、燕入侵之军，因功被封为大司马，子孙后世称司马氏。后因齐景公听信谗言，田穰苴被罢黜，未几抑郁发病而死。由于年代久远，其事迹流传不多，但其军事思想却影响巨大。唐肃宗时将田穰苴等历史上十位武功卓著的名将供奉于武成王庙内，被称为武庙十哲。"]],
				"wm_wq": ["male", "wei", 3, ["wd", "JS"], ["des:吴起（前440年－前381年），中国战国初期军事家、政治家、改革家，兵家代表人物。卫国左氏（一说今山东省菏泽市曹县，一说今山东菏泽市定陶区）人。吴起一生历仕鲁、魏、楚三国，通晓兵家、法家、儒家三家思想，在内政、军事上都有极高的成就。在楚国时，曾主持“吴起变法”。后因变法得罪贵族，遭其杀害。唐肃宗时位列武成王庙内，被称为武庙十哲。"]],
				"wm_gz": ["male", "wu", 4, ["YX", "ZB"], ["des:管仲，字夷吾，齐国人，出身贫困，与老母相依为命，性至孝，曾经为老母诈死当了逃兵，被天下人笑话，和鲍叔牙联合经商之时也占他便宜，被视为小人，但鲍叔牙视之为知己，后来管仲和鲍叔牙各奔东西，分别成为了公子白和公子纠幕僚，齐国乱，姜白姜纠回国争位，管仲事先预料好之后，埋伏姜小白，并向他射箭，差点射死小白，小白装死，管仲大意离开，导致小白成功获得王位，因此记恨管仲，但是因鲍叔牙劝说，姜小白同意原谅管仲，并且让人前往鲁国接他，管仲一向热爱自己的国家，不愿轻生，所以帮助小白，后来小白不听管仲之说，在“长勺之战”，齐国大败，后来，齐桓公一再不听言，而连续如此败了几场，以至于后来小白才认识到管仲的远见，因此对其信任有加。管仲对齐国进行了很大程度的改革，使得齐国大大强盛起来，不仅发动经济战争，而且锄强扶弱，匡扶正义，打击非华夏族的异族，扶持周天子，史称“九合诸侯，一匡天下”。齐国成为天下至霸，齐桓公成为“五霸之首”，因其功勋以及极其非凡的才华，管仲被称为“华夏第一相”，并且被列入“武庙十哲”为后世供奉；"]],
				"wm_sb": ["male", "wu", 3, ["BD", "FX"], ["des:孙膑（生卒年不详），其本名孙伯灵（山东孙氏族谱可查），是中国战国时期军事家，华夏族，山东鄄城人。出生于阿、鄄之间（今山东省菏泽市鄄城县北），是孙武的后代。 孙膑曾与庞涓为同窗，因受庞涓迫害遭受膑刑，身体残疾，后在齐国使者的帮助下投奔齐国，被齐威王任命为军师，辅佐齐国大将田忌两次击败庞涓，取得了桂陵之战和马陵之战的胜利，奠定了齐国的霸业。 唐德宗时将孙膑等历史上六十四位武功卓著的名将供奉于武成王庙内，被称为武成王庙六十四将。宋徽宗时追尊孙膑为武清伯，位列宋武庙七十二将之一。"]],
				"wm_yy": ["male", "wei", 4, ["CG", "LP"], ["des:乐毅（yuè yì），生卒年不详，子姓，乐氏，名毅，字永霸。中山灵寿人，战国后期杰出的军事家，魏将乐羊后裔，拜燕上将军，受封昌国君，辅佐燕昭王振兴燕国。 公元前284年，他统帅燕国等五国联军攻打齐国，连下70余城，创造了中国古代战争史上以弱胜强的著名战例，报了强齐伐燕之仇。后因受燕惠王猜忌，投奔赵国，被封于观津，号为望诸君。"]],
				"wm_bq": ["male", "wei", 4, ["SS", "ZL"], ["des:四名将之首，兵家代表人物之一，出身行伍，为秦国征战天下，所向披靡，因杀人无数而号称“人屠”，“长平之战”、“郢都之战”等为其戎马一生的代表，六国之军，无不畏惧白起，但后来白起为秦昭王赐死。"]],
				"wm_lj": ["male", "shu", 3, ["bs", "HZ", "YB", "ZX"], ["des:卫国景武公李靖（571年－649年7月2日），字药师，雍州三原（今陕西三原县东北）人。隋末唐初将领，是唐朝文武兼备的著名军事家。后封卫国公，世称李卫公。 李靖善于用兵，长于谋略，原为隋将，后效力李唐，为唐王朝的建立发展立下赫赫战功，南平萧铣、辅公祏，北灭东突厥，西破吐谷浑。去世后谥曰景武，陪葬昭陵。著有数种兵书，惟多亡佚。"]],
				"wm_sw": ["male", "wu", 4, ["BS", "JZ", "SJ", "XS"], ["des:孙武，字长卿，齐国人，出生于军事世家，齐国混乱时，孙武离开齐国，到了吴国，在哪里隐居了一段时间，后来被吴王阖闾赏识，于是孙武“吴宫教战”，当上了大将军，从此，吴国称霸中原，《史记》上称在孙武为将期间吴国“北威齐晋”“西破强楚”“南服夷越”，“郢都之战\"时，孙武以兵3万打败21万楚国军队，攻破郢都，几近灭亡楚国，直到阖闾薨，夫差继位后，孙武离开了吴国，隐居山林，重新编订《孙子兵法》(又称《吴孙子兵法》，是世界上仅存的最早兵书，被誉为“兵学圣典”，孙武也被誉为“兵学之父”)，因其军事才华，后世之人称其“兵圣”，唐代时，孙武被列入“武庙十哲”，并且为将首，而《孙子兵法》为武经七书之首，还为国外军事学院必修之书，可见《孙子兵法》的高明智慧无可比拟；"]],
				"wm_hx": ["male", "shu", 3, ["BX", "QZ", "NX", "DB"], ["des:汉初三杰之一，号称“兵仙”，没落贵族，靠蹭饭过活，后来韩信投靠项羽，但是并未得到重用，于是韩信投靠了刘邦，几经波折后，韩信成为刘邦的大元帅，于是，韩信“暗度陈仓”，灭亡了赵国，战死了龙苴，攻灭了齐国，横扫四海，所向披靡，为刘邦一统天下，立下了赫赫战功；"]],
				"道家x庄周": ["male", "chu", 3, ["梦蝶"], ["des:道家创始人之一，楚国贵族，但是不问世事，追求精神上的绝对自由，将为官之人称为“牲畜”。"]],
				"阴阳x徐福": ["male", "qin", 8, ["炼丹", "噬魂"], ["des:阴阳家人物，方士，相传为秦始皇寻找长生药而跑去日本，成了日本人的祖先，"]],
				"兵家x尉缭": ["male", "wei", 3, ["zz_yanzhan", "zz_zhanwei"], ["des:尉缭，梁惠王时期的人物，为鬼谷子高弟，精通兵法，著有《尉缭子》一书。《尉缭子》的军事思想，是比较可观的，既是对前人，如《孙武兵法》的理解延伸，也有着自己的特色，因此，在兵家中，享有较高地位。"]],
				"阴阳x邹衍": ["male", "qi", 3, ["wuxing", "tantian"], ["des:邹衍（约公元前305年至公元前240年），齐国（今山东淄博市临淄）人，阴阳家的代表人物，因其学问迂大而宏辩，人称为谈天衍，又称邹子。"]],
				"杂家x吕不韦": ["male", "zhao", 3, ["居货", "千金"], ["des:吕不韦主持编纂《吕氏春秋》（又名《吕览》），有八览、六论、十二纪共20余万言，汇合了先秦各派学说，“兼儒墨，合名法”，故史称“杂家”。书成之日，悬于国门，声称能改动一字者赏千金。此为“一字千金”。执政时曾攻取周、赵、卫的土地，立三川、太原、东郡，对秦王政兼并六国的事业有重大贡献。后因嫪毐集团叛乱事受牵连，被免除相邦职务，出居河南封地。不久，秦王政复命让其举家迁蜀，吕不韦担心被诛杀，于是饮鸩自尽"]],
				"zz_HYY": ["female", "shu", 2, ["zz_ML", "zz_GY"], ["des:诸葛亮之妻，诸葛瞻之母，有奇才，上通天文，下察地理，精通兵法，近乎诸略无所不晓，善于发明制造，传授诸葛亮很多学识，在诸葛亮病逝之后不久也随之仙逝，死前以“忠孝”勉励其子诸葛瞻；"]],
				"zz_ZGL": ["male", "shu", 2, ["zz_WL", "zz_JH"], ["des:三国时期蜀国丞相，号卧龙(伏龙)，躬耕南阳，隐居隆中，后因徐庶举荐，刘备三顾出山，协助刘备三分天下，在刘备死后独掌大权，在平定南中之后数度北伐，病逝于五丈原"]],
				"兵家x项羽": ["male", "chu", 4, ["神勇"], ["zhu", "des:项羽（公元前232年―公元前202年），项氏，芈姓，名籍，字羽，楚国下相（今江苏宿迁）人，楚国名将项燕之孙，他是中国军事思想“兵形势”代表人物（兵家四势：兵形势、兵权谋、兵阴阳、兵技巧） 的军事家，也是以个人武力出众而闻名的武将。李晚芳对其有“羽之神勇，千古无二”的评价。"]],
				"墨家x禽滑离": ["male", "han", 3, ["圄城", "守御"], ["des:禽子，禽滑厘（qín gǔlí），本作禽滑口（㫥，上殹下康，lí），根据《汉语大字典》和《辞海》的解释，“㫥”同“釐（lí）”，用于人名。禽滑釐又作滑黎、骨釐、屈釐等。“釐”现今简化为“厘”。战国初人，传说是墨子的首席弟子，他的字为慎子。他的后代以他的字作为姓氏，形成慎姓。 禽滑釐曾是儒门弟子，学于子夏，自转投墨子后，便一直潜心墨学。禽滑釐与慎到不是同一个人，一个是魏国人墨子的弟子，另一个是赵国人学老子的学说。但从战国历史地理楚国、魏国、赵国相邻，试想慎邑、禽滑釐、慎到三者之间虽无历史文献记载，也并不能排除没有关系。"]],
				"法家x李斯": ["male", "qin", 3, ["营党", "焚书"], ["des:李斯（约公元前284年—公元前208年），李氏，名斯，字通古。战国末期楚国上蔡（今河南省上蔡县芦冈乡李斯楼村人。秦代著名的政治家、文学家和书法家。秦始皇死后，他与赵高合谋，伪造遗诏，迫令始皇长子扶苏自杀，立少子胡亥为二世皇帝。后为赵高所忌，于秦二世二年（前208年）被腰斩于咸阳闹市，并夷三族。"]],
				"法家x慎到": ["male", "qi", 3, ["因循", "威德"], ["des:慎到（约公元前395～约前315），先秦诸子之一。赵国人，早年曾“学黄老道德之术”，其学术倾向至今有争议，有人认为属于黄老道家，有人认为属于法家，也有人鉴于其道法结合的思想倾向，称之为道法家。他长期在齐国稷下讲学，是稷下学宫的学术领袖人物之一。《史记》说他有《十二论》，《汉书·艺文志》的法家类著录了《慎子》四十二篇。后来很多都失传了，《慎子》现存有《威德》、《因循》、《民杂》、《德立》、《君人》五篇，《群书治要》里有《知忠》、《君臣》两篇，清朝时，钱熙祚合编为七篇，刻入《守山阁丛书》。此外，还有佚文数十条。"]],
				"法家x申不害": ["male", "han", 3, ["权术", "辅法"], ["des:申不害（公元前385－前337，或前420年－前337年），亦称申子，郑韩时期人物（今河南新郑）人。战国时期法家重要代表人物之一、思想家。以“术”著称，著有《申子》是春秋战国时期，百家争鸣中的代表人物。申不害原是郑国京邑（今郑州荥阳东南京襄城）人，曾为郑国小吏，公元前375年（韩哀侯二年），韩国灭掉郑国，遂成为韩人，并做了韩国的低级官员。公元前337年，申不害卒于韩都（今新郑）。"]],
				"zz_WQ": ["male", "chu", 4, ["无敌", "先机"], ["des:兵家亚圣，地位仅次于孙武，吴起著有《吴起兵法》，且吴起儒法兼修，在军事上，吴起一生大小七十多战，胜利六十多场，其余近十场也并未败绩，有战神之称。"]],
				"zz_LE": ["male", "lu", 3, ["zz_dunyin", "zz_xuanmiao", "zz_tiandao"], ["des:即为老聃，老子，道家创始人之一，隐居于世，曾经授学孔子，老子主张“无为而治”“顺其自然”“遵循大道”等思想，著有《道德经》这部国际文化名书，也因此称颂于后世，他的思想成了与儒家思想并肩的大思想，为世界上很多人学习；"]],
				"zz_GZ": ["male", "qi", 4, ["zz_KY", "zz_geqi"], ["des:管仲，齐国人，被誉为“华夏第一相”，中国历史上著名的政治家、军事家、经济学家、改革家。同时也是法家的代表人物，管仲辅佐齐桓公，施行“尊王攘夷”等策略，称霸天下，令齐桓公成为“五霸之首”，无人能及。"]],
				"zz_TRJ": ["male", "qi", 3, ["zz_renben", "zz_yibing", "zz_chiyan"], ["des:齐国著名军事家，著有《司马法》，在兵家也有相当大的地位，司马子以“未出兵而国土收”出名，威慑燕国，收复了国土，立下了功勋，司马法中强调“正义”，主张战争是政治的延续，因此需要尽力发展政治，并且认为只有正义之师才能攻无不克，战无不胜，认为杀人应该安人，以兵制兵，以战止战，好战必亡，忘战必危等等；"]],
				"zz_KQ": ["male", "lu", 3, ["zz_SR", "zz_SW", "zz_SY"], ["des:孔丘，字仲尼，鲁国人，中国历史上影响最为深远嗯思想家，孔子精通六艺，博学古今，但是，命运又是比较坎坷的，孔丘并非人们意识中的一名导师而已，实际上，他的政治谋略和智慧，也是相当的高。因其功勋和地位，孔丘被列为文庙主祭，是为“文圣人”"]],
				"zz_XMB": ["male", "wei", 4, ["治邺", "畯法"], ["des:西门豹（生卒年不详），战国时期魏国安邑（今山西省运城市盐湖区安邑一带）人。魏文侯时任邺令，是著名的政治家、水利家，曾立下赫赫功勋。初到邺城 （今河南安阳北一带)）时，看到这里人烟稀少，田地荒芜萧条，一片冷清，百业待兴，于是立志改善现状。后来趁河伯娶妻的机会，惩治了地方恶霸势力，随后颁布律令，禁止巫风。教育了广大的百姓。原先出走人家也回到了自己的家园。同时，他又亲自率人勘测水源，发动百姓在漳河开围挖掘了12渠，使大片田地成为旱涝保收的良田。在发展农业生产的同时，还实行“寓兵于农、藏粮于民”的政策，很快就使邺城民富兵强，成为战国时期魏国的东北重镇。"]],
				"zz_QY": ["male", "chu", 4, ["离骚", "天问", "zz_MZ"], ["des:屈原（约公元前340或339年～公元前278年），战国时期楚国诗人、政治家，出生地楚国丹阳，湖北省宜昌市，芈姓，屈氏，名平，字原；又自云名正则，字灵均，战国时。楚武王熊通之子屈瑕的后代。少年时受过良好的教育，博闻强志，志向远大。早年受楚怀王信任，任左徒、三闾大夫，兼管内政外交大事。 他提倡“美政”，主张对内举贤任能，修明法度，对外力主联齐抗秦。因遭贵族排挤毁谤，被先后流放至汉北和沅湘流域。秦将白起攻破楚都郢（今湖北江陵）后，屈原自沉于汨罗江，以身殉国。 屈原是中国历史上第一位伟大的爱国诗人，中国浪漫主义文学的奠基人，“楚辞”的创立者和代表作者，开辟了“香草美人”的传统，被誉为“中华诗祖”、“辞赋之祖”。屈原的出现，标志着中国诗歌进入了一个由集体歌唱到个人独创的新时代。屈原的主要作品有《离骚》《九歌》《九章》《天问》等。以屈原作品为主体的《楚辞》是中国浪漫主义文学的源头，与《诗经》并称“风骚”，对后世诗歌产生了深远影响。"]],
				"zz_ZH": ["male", "Han", 3, ["木圣", "zz_TY"], ["des:东汉著名文学家和大科学家，大发明家，几乎涉及所有领域，科学上，张衡发明了“浑天仪”“地动仪”等领先世界的伟大发明，对许多科技品进行了改进和更新发展，文学上则精于汉赋，张衡因其宏伟之才而被人尊为“木(科)圣”；"]],
				"zz_ZC": ["male", "lu", 4, ["zz_xinzheng", "zz_xinfa"], ["des:子产，郑国上大夫，对郑国进行改革，是春秋时期的大政治家，同时也是军事家、外交家，子产为政初期，人民很不满意，但是，后来才发现，子产的新法新政是利国利民之道，郑国也因此焕然一新，强大了起来，而郑国人民也因此非常爱戴子产。子产是法家的代表人物之一，他的政治主张，对后来的法家兴起，是有较大的影响的。而他死前说的那番话，则成了哲理，广为流传，即“火容易烧伤人们，所以很少有人被火所烧伤，而水性温，所以常常有人会溺水而死”。"]],
				"zz_ZL": ["male", "Han", 3, ["zz_QM", "zz_CQ"], ["des:汉初三杰之一，儒雅有胆识，曾经散尽家财，刺杀秦始皇，失败流亡，得到了黄石公的赏识，赐予他《六轁》《素书》等，并收他为徒，后来张良学成，拥有王佐之才，并且得到了刘邦的赏识，替刘邦运筹帷幄，谋功为高，在刘邦一统天下时，离开刘邦，保全了性命，相比之下，萧何，韩信皆惹来了杀身之祸，而张良独退山林；"]],
				"zz_HX": ["male", "Han", 3, ["兵仙", "因势"], ["des:汉初三杰之一，号称“兵仙”，没落贵族，靠蹭饭过活，后来韩信投靠项羽，但是并未得到重用，于是韩信投靠了刘邦，几经波折后，韩信成为刘邦的大元帅，于是，韩信“暗度陈仓”，灭亡了赵国，战死了龙苴，攻灭了齐国，横扫四海，所向披靡，为刘邦一统天下，立下了赫赫战功；"]],
				"zz_sunwu": ["male", "qi", 4, ["zz_bingsheng", "zz_jiubian"], ["des:兵家代表人物之一，著有兵学圣典《孙武兵法》，此书至今仍为兵书之最，孙武是齐国人，吴国将领，协助吴王阖闾制霸天下，无人能敌，曾经带领三万吴军对抗二十万楚军，一举击败之，并且攻破楚国国都，孙武在兵家的地位最高。"]],
				"zz_caocao": ["male", "wei", 4, ["zz_JX"], ["zhu", "des:东汉末年著名的政治家，军事家，文学家，诗人，曹操被誉为“治世之能臣，乱世之奸雄”，曹操的一生是在马背上的，自古用兵者莫如曹操的评价也是因此而来，曹操还是当时的文学代表，富有文采，史称“三曹”，曹操未能统一中原，带着遗憾而死；"]],
				"zz_sb": ["male", "qi", 4, ["诱敌", "伏袭"], ["des:兵家代表人物之一，孙武之后，著有《孙膑兵法》，在兵家中享有极高地位，曾经几度击败魏国，功勋卓著，特别是“马陵之战”，“围魏救赵”等成语皆出自于孙膑。"]],
				"zz_hf": ["male", "han", 3, ["法学", "大成"], ["des:法家集大成者，著有《韩非子》一书，对后世法学的影响极大。"]],
				"zz_bq": ["male", "qin", 3, ["佯敌", "诈利"], ["des:四名将之首，兵家代表人物之一，出身行伍，为秦国征战天下，所向披靡，因杀人无数而号称“人屠”，“长平之战”、“郢都之战”等为其戎马一生的代表，六国之军，无不畏惧白起，但后来白起为秦昭王赐死。"]],
				"zz_yy": ["male", "yan", 3, ["元帅"], ["des:兵家代表人物之一，曾在赵国为官，后来感激燕昭王之恩，遂辅佐燕昭王，使燕国强大起来，带领五国联军击败齐军之后，乐毅独自带领燕国军队乘胜追击，一举攻破齐国七十二座城池，几近灭亡齐国。"]],
				"zz_sz": ["male", "qin", 3, ["合纵", "连横"], ["des:苏秦（？－前284年），字季子，东周雒阳（河南洛阳）人，战国时期著名的纵横家、外交家和谋略家。苏秦师从鬼谷子，学成后，外出游历多年，潦倒而归；随后刻苦攻读《阴符》，一年后游说列国，被燕文公赏识，出使赵国。苏秦到赵国后，提出合纵六国以抗秦的战略思想，并最终组建合纵联盟；任“从约长”，兼佩六国相印，使秦十五年不敢出函谷关；联盟解散后，齐国攻打燕国，苏秦说齐归还燕国城池；后自燕至齐，从事反间活动，被齐国任为客卿，齐国众大夫因争宠派人刺杀，苏秦死前献策诛杀了刺客。张仪（？－前309年），魏国安邑（今山西万荣）张仪村人，魏国贵族后裔，战国时期著名的纵横家、外交家和谋略家。张仪首创连横的外交策略，游说入秦。秦惠王封张仪为相，后来张仪出使游说各诸侯国，以“横”、破、“纵”，使各国纷纷由合纵抗秦转变为连横亲秦。张仪也因此被秦王封为武信君。秦惠王死后，因为即位的秦武王在当太子的时候就不喜欢张仪，张仪出逃魏国，并出任魏相，一年后去世。"]],
				"zz_xx": ["male", "chu", 3, ["饔飧", "zz_ailei"], ["des:东周战国时期著名农学家、思想家。华夏族，楚国之随人，生于楚宣王至楚怀王时期，约与孟子同一时代，在《孟子．滕文公上》记载有许行其人“为神农之言”，所以被归为农家，后世也将许行视为先秦时代农家的代表人物，但因没有著作流传于世，详细思想内容与其他事迹皆不可考。"]],
				"zz_gg": ["male", "wei", 3, ["裨阖", "反应"], ["des:纵横家，战国时期人物，充满神秘色彩，教有诸多学生，其中孙膑、庞涓、张仪、苏秦等为最，著有纵横书之最《鬼谷子》。"]],
				"zz_dzs": ["male", "Han", 3, ["天人", "合一"], ["des:西汉著名政治家，文学家，他的“罢逐百家，独尊儒术”，“天人合一”等思想影响了整个汉朝乃至整个封建王朝，董仲舒曾经有一段时间闭门不出，专门专研治国利民之术，后来终于学成，得到了武帝的赏识，推行了自己的主张，使得大汉帝国更加强盛；"]],
				"zz_huishi": ["male", "wei", 3, ["zz_mingshi", "坚白"], ["des:惠施，宋（今河南商丘）人，生于公元前370年（或公元前380年），传卒于公元前310年，战国中期宋国著名学者，名家鼻祖，与庄子为友，曾做过魏（梁惠王）的相国；后惠施联合齐、楚的活动遭到失败，被张仪驱逐。"]],
				"zz_lyk": ["male", "lu", 3, ["zz_chongxu", "zz_yufeng"], ["des:道家学派的杰出代表人物，先秦天下十豪之一，著名的思想家、文学家。对后世哲学、文学、科技、养生、乐曲、宗教影响非常深远。著有《列子》，其学说本于黄帝老子，归同于老、庄。创立了先秦哲学学派贵虚学派（列子学）。是介于老子与庄子之间道家学派承前启后的重要传承人物。"]],
				"zz_xk": ["male", "zhao", 3, ["胜天", "舟水"], ["des:儒家代表人物之一，主张“人定胜天”、“人性本恶”等思想，并有著名论断“水能载舟，亦能覆舟”，警告为政者关爱百姓，著有《荀子》。"]],
				"zz_lk": ["male", "wei", 3, ["地力", "fajing"], ["des:李悝（lǐ kuī）（前455—前395年），河南濮阳人。中国战国时期的政治人物。法家重要代表人物。曾任魏文侯相，主持变法。经济上推行“尽地力”和“善平籴”的政策，鼓励农民精耕细作，增强产量。他汇集当时各国法律编成《法经》，是我国古代第一部比较完整的法典，现已失传。其“重农”与“法治”结合的思想对商鞅、韩非影响极大"]],
				"zz_mk": ["male", "qi", 4, ["王霸", "三迁"], ["des:儒家亚圣，继孔子之后又一儒家大圣人，孟轲主张“民贵君轻”等思想，周游列国，传颂儒道，著有《孟子》。"]],
				"zz_md": ["male", "han", 3, ["义驰", "墨守"], ["des:墨家创始人，主张兼爱平等，非攻自强、非命非乐等等一系列思想，是中国哲学史上一颗耀眼的星。"]],
				"zz_gsl": ["male", "zhao", 3, ["诡辩", "非马"], ["des:公孙龙能言善辩，曾经做过平原君的门客，其主要著作为《公孙龙子》，西汉时共有14篇，唐代时分为三卷，北宋时遗失了8篇，至今只残留6篇，共一卷。其中最重要的两篇是《白马论》和《坚白论》，提出了“白马非马”和“离坚白”等论点，认为对于 “坚白石”，“视不得其所坚而得其所白者，无坚也”；“拊不得其所白而得其所坚者，无白也”，强调视觉与触觉的差异故“坚白石二”。又分析一般与个别的关系，强调“白马”（个别）与“马”（一般）的区别，得出“白马非马”的结论。与他齐名的是另一名家惠施。"]],
				"zz_wy": ["male", "qin", 3, ["图强", "变法"], ["des:法家代表人物之一。辅佐秦孝公，使得秦国空前强盛，并且为统一六国奠定了重大基础。"]],
				"zz_yz": ["male", "lu", 3, ["贵己", "不拔"], ["des:杨朱主张“贵己” “重生” “人人不损一毫”的思想。是道家杨朱学派的创始人。他的见解散见于《列子》，《庄子》，《孟子》，《韩非子》，《吕氏春秋》等。在战国时期，有“天下之言不归杨则归墨的现象”，可见其学说影响之大。"]],
				"dw_bz_zhouyu": ["male", "wu", 3, ["DW_FENGYA", "DW_YEYAN"], ["des:<font color=red>美周郎</font> <br>级别：S级<br>星级：★★☆<br>定位：反手 威压<br>特点：附带火攻能力"]],
				"dw_bz_sunquan": ["male", "wu", 4, ["DW_SANSI", "DW_ZHIHENG", "jiuyuan"], ["zhu", "des:<font color=red>江东雄君</font> <br>级别：S级<br>星级：★★<br>定位：换牌 自愈<br>特点：体力值低时，有自愈能力，但攻击性略低，适合当主公或内奸"]],
				"dw_bz_sunce": ["male", "wu", 3, ["DW_XBW", "DW_SAODANG"], ["zhu", "des:<font color=red>江东小霸王</font> <br>级别：A+级<br>星级：★★<br>定位：攻坚<br>特点：攻中带守"]],
				"dw_bz_lusu": ["male", "wu", 3, ["DW_JIEMING", "DW_YUANLV"], ["des:<font color=red>竭虑的忠臣</font> <br>级别：A+级<br>星级：★★<br>定位：辅助<br>特点：能为队友提供额外手牌收入"]],
				"dw_bz_luxun": ["male", "wu", 3, ["DW_QIANXUN", "DW_ZHIDI"], ["des:<font color=red>书生意气</font> <br>级别：S级<br>星级：★★☆<br>定位：反手 迂回<br>特点：生存力高，且带有攻击性"]],
				"dw_bz_daqiao": ["female", "wu", 3, ["DW_GUOSE", "DW_LIULI"], ["des:<font color=red>矜持的美人</font> <br>级别：B+级<br>星级：★☆<br>定位：控制 减距<br>特点：稳稳的【兵粮寸断】，但防守距离亦减少"]],
				"dw_bz_xiaoqiao": ["female", "wu", 3, ["DW_TIANXIANG", "DW_HONGYAN"], ["des:<font color=red>天之芳馨</font> <br>级别：B+级<br>星级：★★<br>定位：控制<br>特点：对男性可以双控制"]],
				"cw_bz_caocao": ["male", "wei", 3, ["CW_JIANXIONG", "CW_NENGCHEN", "hujia"], ["zhu", "des:<font color=red>乱世奸雄</font> <br>级别：S级<br>星级：★★<br>定位：争掠<br>特点：可以反压和正压敌人"]],
				"cw_bz_xiahoudun": ["male", "wei", 4, ["CW_GANGLIE"], ["des:<font color=red>独眼狼</font> <br>级别：B级<br>星级：★☆<br>定位：反手<br>特点：让敌人弃置，但得慎用"]],
				"cw_bz_caoren": ["male", "wei", 4, ["CW_JUSHOU", "CW_QIANGGONG"], ["des:<font color=red>大魏上将</font><br>级别：B+级<br>星级：★★<br>定位：攻坚<br>特点：以牌为守，以体为攻 "]],
				"cw_bz_caiyan": ["female", "wei", 3, ["CW_BEIGE", "CW_DUANCHANG"], ["des:<font color=red>异乡孤魂</font><br>级别：A级<br>星级：★★<br>定位：反伤 控制<br>适当掉血，团队得益 "]],
				"cw_bz_jiaxu": ["male", "wei", 3, ["CW_YINSHEN", "CW_DUMIE"], ["des:<font color=red>隐身的毒士</font><br>级别：S级<br>星级：★★<br>定位：弱化 强化<br>特点：能有效令团队抑制对面牌少者，但条件较为苛刻 "]],
				"cw_bz_zhenfu": ["female", "wei", 3, ["CW_LUOSHEN"], ["des:<font color=red>洛神</font><br>级别：B+级<br>星级：★★<br>定位：弱化<br>特点：全数弱化敌队男性 "]],
				"cw_bz_xunyu": ["male", "wei", 4, ["CW_JIEMING", "CW_WANGZUO"], ["des:<font color=red>辅汉大臣</font><br>级别：S级<br>星级：★★☆<br>定位：辅助 攻势<br>特点：最强辅助 "]],
				"sh_bz_guanyu": ["male", "shu", 3, ["SH_WUSHENG", "SH_TUODAO"], ["des:<font color=red>武圣</font> <br>级别：S级<br>星级：★★☆<br>定位：暴击<br>特点：【酒】圣"]],
				"sh_bz_xushu": ["male", "shu", 4, ["SH_JIJIAN", "SH_XIAKEXING"], ["des:<font color=red>至孝的游子</font> <br>级别：A+级<br>星级：★★☆<br>定位：弱化 攻辅<br>特点：可以通过弃牌弱化敌人，且手牌上限恒等于体力上限"]],
				"sh_bz_pangtong": ["male", "shu", 3, ["SH_FENGCHU", "SH_HAOYAN"], ["des:<font color=red>凤雏先生</font> <br>级别：S级<br>星级：★★<br>定位：辅助 豪杰 协愈<br>特点：豪赌之后，可以由队友为你刷牌和回血"]],
				"sh_bz_zhangfei": ["male", "shu", 4, ["SH_PAOXIAO", "SH_YISHI"], ["des:<font color=red>万人敌</font> <br>级别：S级<br>星级：★★☆<br>定位：猛将 弱化<br>特点：可以通过弃牌弱化敌人对你的【杀】的防御力"]],
				"sh_bz_liubei": ["male", "shu", 4, ["SH_XIAOXIONG", "jijiang"], ["zhu", "des:<font color=red>潜渊之龙</font> <br>级别：S级<br>星级：★★<br>定位：弱化 除弊<br>特点：拥有除去判定牌的能力"]],
				"sh_bz_zhaoyun": ["male", "shu", 4, ["SH_LONGDAN", "SH_DANJI"], ["des:<font color=red>常胜将军</font> <br>级别：S级<br>星级：★★☆<br>定位：攻坚 单骑<br>特点：【杀】必中，但无法【闪】，需要调控好"]],
				"sh_bz_huangyueying": ["female", "shu", 3, ["SH_GUIYIN", "SH_QICAI"], ["des:<font color=red>归隐的杰女</font> <br>级别：S级<br>星级：★★☆<br>定位：场外 收割<br>特点：观战、参战皆可，且强效有力，但后劲不足，需要谨慎，否则需数回合恢复元气"]],
				"qx_bz_yuanshao": ["male", "qun", 4, ["QX_XURONG", "QX_SULI", "QX_YUANMEN"], ["zhu", "des:<font color=red>四世三公</font> <br>级别：B级<br>星级：★☆<br>定位：协助 威压<br>特点：需慎用技能，但效果不错"]],
				"qx_bz_lvbu": ["male", "qun", 4, ["QX_WUSHUANG"], ["des:<font color=red>人中吕布</font> <br>级别：S级<br>星级：★★☆<br>定位：猛将<br>特点：有加强版【无双】的能力"]],
				"qx_bz_diaochan": ["female", "qun", 3, ["QX_BIYUE", "QX_LIJIAN"], ["des:<font color=red>闭月</font> <br>级别：A+级<br>星级：★★☆<br>定位：损势 去伤<br>特点：保留【离间】，死去不视为被击杀"]],
				"qx_bz_dongzhuo": ["male", "qun", 4, ["QX_BAOZHENG"], ["zhu", "des:<font color=red>噬血魔王</font><br>级别：A级<br>星级：★★<br>定位：弱化 刷牌<br>特点：能刷大量的牌，但需谨慎 "]],
				"qx_bz_zhangjiao": ["male", "qun", 3, ["QX_HUANGTIAN", "QX_LUOLEI"], ["zhu", "des:<font color=red>广贤良师</font> <br>级别：S级<br>星级：★★<br>定位：反手 迂回<br>特点：牌可当【闪】，【闪】连技能"]],
				"qx_bz_zhaoyun": ["male", "qun", 4, ["QX_LONGQIANG", "QX_YIYAN"], ["des:<font color=red>少年将军</font> <br>级别：B+级<br>星级：★★<br>定位：攻坚 辅助<br>特点：双重攻击"]],
				"qx_bz_huangshuo": ["female", "qun", 3, ["QX_QIAOSI", "QX_BOCAI"], ["des:<font color=red>奇博士</font> <br>级别：A级<br>星级：★★<br>定位：器神<br>特点：装备生产，装备重铸"]],
				"qx_bz_gongsunzan": ["male", "qun", 4, ["QX_YICONG"], ["zhu", "des:<font color=red>白马将军</font> <br>级别：B级<br>星级：★☆<br>定位：沉稳<br>特点：有一定的被动攻击性和防御性，算得上攻守兼备"]],
				"cw_bz_zhangliao": ["male", "wei", 4, ["CW_TUXI"], ["des:<font color=red>威震逍遥</font> <br>级别：A+级<br>星级：★★<br>定位：收割<br>特点：对低牌数角色的压制性很高"]],
				"sh_bz_machao": ["male", "shu", 4, ["SH_JICHI", "mashu"], ["des:<font color=red>锦马超</font> <br>级别：S级<br>星级：★★<br>定位：猛将<br>特点：【马术】是关键"]],
				"dw_bz_ganning": ["male", "wu", 4, ["DW_JIEXI", "DW_SHUIDAO"], ["des:<font color=red>水上锦帆</font><br>级别：A级<br>星级：★★<br>定位：弱化<br>特点：操作性高 "]],
				"sh_bz_zhugeliang": ["male", "shu", 3, ["SH_ZHISHENG", "SH_DONGCHA", "SH_WEIWO"], ["des:<font color=red>军师将军</font><br>级别：S级<br>星级：★★☆<br>定位：沉稳 均衡 免疫<br>特点：攻守兼备，其中，以【洞察】为主防 "]],
				"dw_bz_sunjian": ["male", "wu", 4, ["DW_CHUANGZHEN"], ["zhu", "des:<font color=red>江东英魂</font><br>级别：B+级<br>星级：★★<br>定位：攻坚<br>特点：能有效实施打压 "]],
				"cw_bz_zhangchunhua": ["female", "wei", 3, ["CW_JUEQING", "CW_MIEKOU"], ["des:<font color=red>绝情才女</font> <br>级别：B级<br>星级：★★<br>定位：收割 流失<br>特点：免疫伤害带来的反手技能"]],
				"qx_bz_liubiao": ["male", "qun", 4, ["QX_ZISHOU"], ["zhu", "des:<font color=red>自守之君</font><br>级别：B级 <br>星级：★★<br>定位：留牌<br>特点：有时候会有不弱的爆发"]],
				"dw_bz_xusheng": ["male", "wu", 3, ["DW_POJUN"], ["des:<font color=red>奋先之将</font><br>级别：B级<br>星级：★☆<br>定位：猛将 攻坚<br>特点：增加优势 "]],
				"cw_bz_guojia": ["male", "wei", 3, ["CW_GUICAI", "CW_BUJI", "CW_QIZUO"], ["des:<font color=red>早逝先知</font><br>级别：S级<br>星级：★★☆<br>定位：输出<br>特点：【不羁】充分配合【鬼才】 "]],
				"dw_bz_dinfeng": ["male", "wu", 3, ["DW_ROUBO"], ["des:<font color=red>轻装老军</font> <br>级别：B级<br>星级：★☆<br>定位：攻坚<br>特点：可无距离短兵交战，但需谨慎"]],
				"dw_bz_zhangzhao": ["male", "wu", 3, ["DW_CHAOCHEN", "DW_GUZHENG"], ["des:<font color=red>江东肱骨</font> <br>级别：B+级<br>星级：★★<br>定位：辅助<br>特点：增加团队的留牌数"]],
				"qx_bz_guanning": ["male", "qun", 3, ["QX_DANBO", "QX_DUANXI"], ["zhu", "des:<font color=red>断席清心</font><br>级别：B-级<br>星级：★☆<br>定位：反手 迂回<br>特点：动力源成为【杀】的目标是"]],
				"sh_bz_fazheng": ["male", "shu", 3, ["SH_ENYUAN"], ["des:<font color=red>恩怨必报</font><br>级别：A级<br>星级：★★<br>定位：反手 协助<br>特点：恩怨必报 "]],
				"sh_bz_huangzhong": ["male", "shu", 4, ["SH_JIGONG"], ["des:<font color=red>神射手</font> <br>级别：S级<br>星级：★★☆<br>定位：输出 置办<br>特点：无距离压力"]],
				"sh_bz_weiyan": ["male", "shu", 4, ["SH_KUANGGU"], ["des:<font color=red>狂骨镇将</font> <br>级别：A+级<br>星级：★★<br>定位：猛将 攻坚<br>特点：压制流"]],
				"cw_bz_chengyu": ["male", "wei", 3, ["CW_DANMOU", "CW_WEICHENG", "CW_HUALAO"], ["des:<font color=red>心定之谋士</font><br>级别：A级<br>星级：★★<br>定位：弱化 逆流<br> 特点：【画牢】随配合【胆谋】，但需慎重"]],
				"cw_bz_simayi": ["male", "wei", 3, ["CW_LANGGU", "CW_MIAOSUAN"], ["des:<font color=red>狼顾之鬼</font> <br>级别：S级<br>星级：★★☆<br>定位：洗牌 爆发<br>特点：手牌越少，技能越强"]],
				"qx_bz_wenchou": ["male", "qun", 3, ["QX_LANGLUE"], ["des:<font color=red>河北狼</font><br>级别：B级<br>星级：★☆<br>定位：猛将 掠夺<br>特点：成功的【杀】有回益和弱化 "]],
				"qx_bz_yanliang": ["male", "qun", 4, ["QX_HUBU"], ["des:<font color=red>河北虎</font><br>级别：B级<br>星级：★☆<br>定位：攻坚<br>特点：没有不收益的杀 "]],
			},
			skill:{
				ln_lugong: {
					trigger: {
						player: "loseEnd"
					},
					direct: true,
					filter: function (event, player) {
						return event.cards && event.cards.length > 2;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('ln_lugong'), function (card, player, target) {
							return target != player && target.hp > 0;
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);

						});
						'step 1'
						if(result.bool) {
							player.logSkill('lu_lugong', result.targets);
							result.targets[0].damage();
							player.gainMaxHp();
							player.draw(player.maxHp - player.hp);
							if(player.maxHp > 5) player.recover(player.hp);
							if(player.maxHp > 5) player.loseMaxHp(3);

						}
					},
				},
				ln_huoni: {
					audio: "ext:扩展ol:2",
					trigger: {
						player: "phaseUseBegin",
					},
					filter: function (event, player) {
						return player.num('h') > 0;
					},
					content: function () {
						'step 0'
						player.chooseToDiscard(999, 'h', true);
						'step 1'
						player.chooseTarget(get.prompt('ln_huoni'), function (card, player, target) {
							return target != player && target.num('h') > 0 && target.sex == 'male';
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player); 
						});
						'step 2'
						if(result.bool) {
							player.logSkill('ln_huoni', result.tatgets)
							result.targets[0].chooseToDiscard(999, 'h', true)
						}
					},
				},
				n称号: {
					trigger: {
						global: 'gameStart'
					},
					forced: true,
					popup: false,
					filter: function (event, player) {
						return game.players.length > 0;
					},
					content: function () {
						game.broadcastAll(function(player){
							if(player.name == 'ln_mjn') player.node.name.innerHTML = '<font color=red>泣天<br>浸地</font> ';
							if(player.name == 'ln_qly') player.node.name.innerHTML = '<font color=red>妇好<br>之风</font> ';
							if(player.name == 'ln_ds') player.node.name.innerHTML = '<font color=red>文昭<br>日月</font> ';
							if(player.name == 'ln_lz') player.node.name.innerHTML = '<font color=red>大汉<br>毒后</font> ';
							if(player.name == 'ln_zwy') player.node.name.innerHTML = '<font color=red>奇<br>女<br>子</font> ';
							if(player.name == 'ln_wzf') player.node.name.innerHTML = '<font color=red>大汉<br>贤后</font> ';
							if(player.name == 'ln_bz') player.node.name.innerHTML = '<font color=red>学动<br>神州</font> ';
							if(player.name == 'ln_tss') player.node.name.innerHTML = '<font color=red>狐仙<br>化身</font> ';
							if(player.name == 'ln_fj') player.node.name.innerHTML = '<font color=red>神智<br>过人</font> ';
							if(player.name == 'ln_mm') player.node.name.innerHTML = '<font color=red>慈心<br>严笃</font> ';
							if(player.name == 'ln_jtxn') player.node.name.innerHTML = '<font color=red>九天<br>娘娘</font> ';
							if(player.name == 'ln_xs') player.node.name.innerHTML = '<font color=red>浣纱<br>仙女</font> ';
							if(player.name == 'ln_ehny') player.node.name.innerHTML = '<font color=red>有虞<br>二姚</font> ';
							if(player.name == 'ln_zwj') player.node.name.innerHTML = '<font color=red>凤于<br>九天</font> ';
							if(player.name == 'ln_wzj') player.node.name.innerHTML = '<font color=red>塞外<br>美人</font> ';
							if(player.name == 'ln_nw') player.node.name.innerHTML = '<font color=red>神<br>圣<br>女</font> ';
							if(player.name == 'ln_hyy') player.node.name.innerHTML = '<font color=red>归隐<br>杰女</font> ';
							if(player.name == 'ln_fh') player.node.name.innerHTML = '<font color=red>第一<br>女将</font> ';
							if(player.name == 'ln_cy') player.node.name.innerHTML = '<font color=red>异乡<br>孤魂</font> ';
							if(player.name == 'ln_lqz') player.node.name.innerHTML = '<font color=red>千古<br>才女</font> ';
							if(player.name == 'ln_wzt') player.node.name.innerHTML = '<font color=red>一代<br>女皇</font> ';
							if(player.name == 'ln_dmsj') player.node.name.innerHTML = '<font color=red>晓明<br>天道</font> ';
							if(player.name == 'ln_djj') player.node.name.innerHTML = '<font color=red>绝代<br>双姜</font> ';
							if(player.name == 'ln_jhwj') player.node.name.innerHTML = '<font color=red>国之<br>茴后</font> ';
							if(player.name == 'ln_qj') player.node.name.innerHTML = '<font color=red>深明<br>大义</font> ';
						},player);
					}
				},
				LN_QIYIN: {
					enable: 'phaseUse',
					usable: 1,
					filterCard: true,
					filterTarget: function (card, player, target) {
						return player != target && target.sex == 'male';
					},
					content: function () {
						player.showCards(cards);
						player.gain(cards);
						game.log(player, '收回了', cards);
						var targetCard = target.get('h').randomGet();
						target.showCards(targetCard);
						if(get.color(cards) == get.color(targetCard)) {
							player.recover();
							player.draw();
							target.recover();
							target.draw();
							var chat = ['执子之手，与子偕老——《诗经》', '永以为好也——《诗经》'].randomGet()
							player.say(chat)
						};
					},
					ai: {
						order: 9,
						result: {
							player: 0.5,
							target: function (target, player) {
								return get.effect(target, {
									name: 'wangmei'
								}, player, player);
							},
						},
					},
				},
				LN_BTY: {
					trigger: {
						player: "phaseDiscardBegin",
					},
					filter: function (event, player) {
						return player.num('h') > player.hp;
					},
					content: function () {
						'step 0'
						trigger.untrigger();
						trigger.finish();
						'step 1'
						player.chooseTarget(get.prompt('LN_BTY'), function (card, player, target) {
							return target != player && target.sex == 'male';
						}).set('ai', function (target) {
							return ai.get.attitude(player, target);
						});
						'step 2'
						if(result.bool) {
							player.logSkill('LN_BTY', result.tatgets)
							result.targets[0].draw(player.num('h') - player.hp);
							if(result.targets[0].hp < result.targets[0].maxHp) player.chooseToDiscard(true);
							var chat = ['有美人兮，见之不忘——《凤求凰》', '皑如山上雪，皎若云间月——《白头吟》'].randomGet()
							player.say(chat)
						}
						'step 3'
						if(player.num('h') > 4 && player.hp > 1) player.loseHp();
						var chat = ['闻君有两意，特来相决绝——《白头吟》'].randomGet()
						player.say(chat)
					},
				},
				LN_YOUGUI: {
					trigger: {
						global: "gameStart",
					},
					frequent: true,

					filter: function (event, player) {
						return game.players.length > 3;
					},
					content: function () {
						player.maxHp = game.players.length;
						player.update();
						var chat = ['天上星河转，人间帘幕垂！'].randomGet()
						player.say(chat);
					},
				},
				LN_QINGKU: {
					audio: "ext:扩展ol:1",
					trigger: {
						player: "phaseDrawBegin",
					},
					frequent: true,
					content: function () {
						trigger.num--;
						var chat = ['寻寻觅觅，冷冷清清，凄凄惨惨戚戚！'].randomGet()
						player.say(chat);
					},
					ai: {
						threaten: 1.3,
					},
					group: 'LN_QINGKU_1',
					subSkill: {
						1: {
							trigger: {
								player: "damageEnd",
							},


							filter: function (event, player) {
								return player.hp > 0 && player.num('h') > 0;
							},
							content: function () {
								player.chooseToDiscard(1, 'h', true)
								var chat = ['守着窗儿，独自怎生得黑！', '这次第，怎一个愁字了得！'].randomGet()
								player.say(chat);
							}

						},

					},
				},
				LN_SHINAN: {
					trigger: {
						player: "chooseToCompareBefore",
						target: "chooseToCompareBefore",
					},
					content: function () {
						'step 0'
						player.draw();
						var chat = ['绣面芙蓉一笑开,斜飞宝鸭衬香腮。'].randomGet()
						player.say(chat)
							'step 1'
						player.chooseToDiscard(1, 'h', true)

					},
				},
				LN_CAIMING: {
					enable: "phaseUse",
					usable: 1,
					filterTarget: function (card, player, target) {
						return target.countCards('h') >= player.countCards('h') && player != target;
					},
					filter: function (event, player) {
						return player.countCards('h') > 0;
					},
					content: function () {
						player.swapHandcards(target);
						var chat = ['一面风情深有韵，半笺娇恨寄幽怀。月移花影约重来。'].randomGet()
						player.say(chat);
					},
					ai: {
						order: 1,
						result: {
							player: function (player, target) {
								return player.countCards('h') - player.countCards('h');
							},
							target: function (player, target) {
								return target.countCards('h') - target.countCards('h');
							},
						},
					},
				},
				LN_LIULI: {
					trigger: {
						player: "phaseUseEnd",
					},
					frequent: true,
					content: function () {
						if(player.hp < player.maxHp) player.loseMaxHp();
						if(player.hp == player.maxHp) player.loseHp();
						var chat = ['只恐双溪舴艋舟，载不动许多愁！', '风住尘香花已尽，日晚倦梳头！'].randomGet()
						player.say(chat);

					},
				},
				LN_CIDIAO: {
					audio: "ext:扩展ol:1",
					trigger: {
						player: "phaseBegin",
					},
					filter: function (event, player) {
						return player.hp > 0 && player.num('h') > 0;
					},
					content: function () {
						"step 0"
						player.chooseTarget(get.prompt('LN_CIDIAO'), function (card, player, target) {
							return player != target && target.countCards('h') > 0;
						}).set('ai', function (target) {
							return -get.attitude(_status.event.player, target) / target.countCards('h');
						});
						"step 1"
						if(result.bool) {
							player.logSkill('LN_CIDIAO', result.targets[0]);
							player.chooseToCompare(result.targets[0]);
						} else {
							event.finish();
						}
						"step 2"
						if(result.bool) {
							player.addTempSkill('LN_CAIMING');
							var chat = ['露浓花瘦，薄汗轻衣透！'].randomGet()
							player.say(chat);
						} else {
							player.addTempSkill('LN_LIULI');
							var chat = ['才下眉头，却向心头！'].randomGet()
							player.say(chat);
						}
					},
				},
				LN_ZHENLIE: {
					trigger: {
						player: "damageEnd",
					},
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						'step 0'
						trigger.source.chooseToDiscard(2, 'he', true)
							'step 1'
						player.chooseToUse({
							name: 'sha'
						}, '是否使用一张【杀】？');
						var chat = ['纵使孤军奋战，也绝不后退！', '誓杀国贼！'].randomGet()
						player.say(chat)
					}
				},
				LN_MASHU: {
					mod: {
						globalFrom: function (from, to, distance) {
							return distance - 1;
						},
					},
				},
				LN_JIANGF: {
					trigger: {
						player: ["useCard", "respond"],
					},
					forced: true,
					filter: function (event, player) {
						return event.card && event.card.name == 'sha';
					},
					content: function () {
						player.draw();
						var chat = ['忌一巾帼妇人，汝当自愧！', '败于贼者，唯恐人之胜，怯于贼者，唯恐人之强'].randomGet()
						player.say(chat)
					},
				},
				LN_BG: {
					audio: "beige",
					trigger: {
						player: "loseHpEnd",
					},
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('LN_BG'), [1, player.maxHp - player.hp], function (card, player, target) {
							return target != player;
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);

						});
						'step 1'
						if(result.bool) {

							for(var i = 0; i < result.targets.length; i++) {
								player.logSkill('LN_BG', result.targets);
								if(result.targets[i].hp > 2) result.targets[i].chooseToDiscard(2, 'he', true);
								result.targets[i].loseHp();
								var chat = ['悲歌当泣，远望当归！', '拟排忧，心转愁！'].randomGet()
								player.say(chat)
							};
						}
					},
				},
				LN_GH: {
					audio: "beige",
					trigger: {
						player: "phaseEnd",
					},
					frequent: true,
					filter: function (event, player) {
						return player.hp > 1;
					},
					content: function () {
						player.chooseToDiscard(1, 'he', true)
						player.loseHp();
						var chat = ['欲死不能得,欲生无一可', '不能相随兮愁断肠'].randomGet()
						player.say(chat);

					},
				},
				LN_DUANC: {
					audio: "duanchang",
					forbid: ["boss"],
					trigger: {
						player: "dieBegin",
					},
					forced: true,
					filter: function (event) {
						return event.source && event.source.isIn();
					},
					content: function () {
						trigger.source.loseHp();
						trigger.source.chooseToDiscard(999, 'hej', true)
						var chat = ['此之长别兮断肠曲！'].randomGet()
						player.say(chat)
					},
					logTarget: "source",
					ai: {
						threaten: function (player, target) {
							if(target.hp == 1) return 0.2;
							return 1.5;
						},
						effect: {
							target: function (card, player, target, current) {
								if(!target.hasFriend()) return;
								if(target.hp <= 1 && get.tag(card, 'damage')) return [1, 0, 0, -2];
							},
						},
					},
				},
				LN_DUZHI: {
					trigger: {
						global: "loseHpBegin",
					},
					filter: function (event, player) {
						return event.player != player && _status.currentPhase == player && player.num('h', 'sha') > 0;
					},
					content: function () {
						'step 0'
						var card = player.num('h', 'sha');
						player.chooseToDiscard(card, true);
						'step 1'
						trigger.player.chooseToDiscard(trigger.player.num('h'), 'h', true)
						var chat = ['为了大汉天下，即使是你，也得死！'].randomGet()
						player.say(chat);
					},
				},
				LN_ZHIXIN: {
					trigger: {
						source: "damageBefore",
					},
					forced: true,

					priority: 16,
					check: function () {
						return false;
					},
					content: function () {
						trigger.untrigger();
						trigger.finish();
						var chat = ["汉家天下，终归是我们吕氏的！", "不怕一万，就怕万一！"].randomGet()
						player.say(chat);
						var ex = 0;
						if(trigger.card && trigger.card.name == 'sha') {
							if(player.hasSkill('jiu')) ex++;
							if(player.hasSkill('luoyi2')) ex++;
							if(player.hasSkill('reluoyi2')) ex++;
						}
						trigger.player.loseHp(trigger.num + ex);
					},
					ai: {
						jueqing: true,
					},
				},
				LN_JINGZI: {
					trigger: {
						global: "gainAfter",
					},

					filter: function (event, player) {
						return event.player != player && _status.currentPhase == player && event.cards && event.cards.length > 1;
					},
					content: function () {
						player.gainPlayerCard(1, trigger.player, 'hej', true);
					},
					mod: {
						maxHandcard: function (player, num) {
							var list = ['wei', 'shu', 'wu', 'qun', 'qi', 'qin', 'Han', 'SW', 'G', 'han', 'lu', 'zhao', 'yan', 'chu'];
							var num2 = game.countPlayer(function (current) {
								if(list.contains(current.group)) {
									list.remove(current.group);
									return true;
								}
							});
							return num + num2;
						},
					},
				},
				LN_XINGWEN: {
					enable: "phaseUse",
					usable: 2,
					filter: function (event, player) {
						return player.hp > 0;
					},
					filterTarget: function (card, player, target) {
						return target.num('e') > 0 && target != player;

					},
					content: function () {
						'step 0'
						player.chooseToDiscard(5, 'e', true);
						'step 1'
						target.chooseToDiscard(5, 'e', true);
						'step 2'
						target.draw(2);
						var chat = ['经文治世，百姓不辛！', '圣王以教化为先，汝等亦须修文！'].randomGet()
						player.say(chat);
					},
					ai: {
						order: 9,
						result: {
							player: 0.5,
							target: function (target, player) {
								return get.effect(target, {
									name: 'guohe'
								}, player, player);
							},
						},
					},
				},
				LN_CN: {
					trigger: {
						player: "phaseBegin",
					},
					frequent: true,
					filter: function (event, player) {
						return player.num('e') < 1 && player.num('h', 'sha') < 3;
					},
					content: function () {
						"step 0"
						player.draw(player.hp);
						"step 1"
						event.cards = result;
						"step 2"
						player.chooseCardTarget({
							filterCard: function (card) {
								return _status.event.getParent().cards.contains(card);
							},
							selectCard: [1, event.cards.length],
							filterTarget: function (card, player, target) {
								return player != target;
							},
							ai1: function (card) {
								if(ui.selected.cards.length > 0) return -1;
								if(card.name == 'du') return 20;
								return(_status.event.player.countCards('h') - _status.event.player.hp);
							},
							ai2: function (target) {
								var att = get.attitude(_status.event.player, target);
								if(ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
									if(target.hasSkillTag('nodu')) return 0;
									return 1 - att;
								}
								return att - 4;
							},
							prompt: '请选择要送人的卡牌'
						});
						"step 3"
						if(result.bool) {
							var chat = ['陛下勿忧，凡事尽可交于子夫！'].randomGet()
							player.say(chat)
							player.line(result.targets, 'green');
							result.targets[0].gain(result.cards, player);
							player.$give(result.cards.length, result.targets[0]);
							for(var i = 0; i < result.cards.length; i++) {
								event.cards.remove(result.cards[i]);
							}
							if(event.cards.length) event.goto(2);
						}
					},
					ai: {
						maixie: true,
							"maixie_hp": true,
						effect: {
							target: function (card, player, target) {
								if(get.tag(card, 'damage')) {
									if(player.hasSkillTag('jueqing', false, target)) return [1, -2];
									if(!target.hasFriend()) return;
									if(target.hp >= 4) return [1, get.tag(card, 'damage') * 2];
									if(target.hp == 3) return [1, get.tag(card, 'damage') * 1.5];
									if(target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
								}
							},
						},
					},
				},
				LN_XHOU: {
					trigger: {
						target: ["shaBegin", "juedouBegin"],
					},
					filter: function (event, player) {
						return player.hp > 0 && player.num('h') > 0 && player.num('e') < 2;
					},
					content: function () {
						'step 0'
						player.draw();
						var chat = ['大汉之仪不可有所失！', '贤者自德，不肖者不久！'].randomGet()
						player.say(chat)
							'step 1'
						player.chooseToDiscard(1, 'e', true);
						'step 2'
						trigger.player.chooseToDiscard(1, 'h', true)
						trigger.player.chooseToDiscard(1, 'e', true)
						trigger.player.chooseToDiscard(1, 'j', true)
					}
				},
				LN_HX: {
					enable: "phaseUse",
					usable: 3,
					filterTarget: function (card, player, target) {
						return player != target && target.countCards('h');
					},
					content: function () {
						"step 0"
						player.chooseCardButton(target, target.getCards('h')).set('filterButton', function (button) {
							return get.color(button.link) == 'black';
						});
						"step 1"
						if(result.bool) {
							target.discard(result.links[0]);
							var chat = ['既学，当无拘', '汝何至于此？', '致汝迂腐不化，吾之过也！'].randomGet()
							player.say(chat);
						}
					},
					ai: {
						order: 11,
						result: {
							target: function (player, target) {
								return -target.countCards('h');
							},
						},
						threaten: 1.1,
					},
				},
				LN_CX: {
					trigger: {
						player: "phaseEnd",
					},
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						player.draw()
						var chat = ['不学则无所成！', '非学不才，非才不有功！'].randomGet()
						player.say(chat)
					},
					mod: {
						maxHandcard: function (player, num) {
							return num += 1;
						},
					},
					mod: {
						globalTo: function (from, to, distance) {
							return distance + 1;

						},
					},
				},
				LN_JJ: {
					trigger: {
						player: "phaseBegin",
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('LN_JJ'), [1, Infinity], function (card, player, target) {
							return target != player && target.sex == 'female';
						}).set('ai', function (target) {
							return ai.get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {
							for(var i = 0; i < result.targets.length; i++) {
								player.logSkill('LN_JJ', result.targets);
								player.discardPlayerCard(result.targets[i], 'hej', true)
								var chat = ['嫁鸡随鸡，嫁狗随狗！', '三从者，此三从也！'].randomGet()
								player.say(chat)
							};
						};
					},
				},
				LN_CJ: {
					skillAnimation: true,
					unique: true,
					derivation: "LN_HX",
					mark: true,
					intro: {
						content: "limited",
					},
					trigger: {
						player: "phaseBefore",
					},
					forced: true,
					filter: function (event, player) {
						if(player.storage.LN_CJ) return false;
						return player.num('h') > player.hp + 2;
					},
					content: function () {
						player.storage.LN_CJ = true;
						player.loseMaxHp();
						player.addSkill('LN_HX');
						player.awakenSkill("LN_CJ");
						player.awakenSkill("LN_JJ");
						var chat = ['善学者，不止于学，不惑于所学！'].randomGet()
						player.say(chat);
					},
				},
				LN_QT: {
					trigger: {
						player: ["damageEnd", "loseHpBegin"],
					},
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('LN_QT'), [1, Infinity], function (card, player, target) {
							return target != player && target.num('he') >= 0;
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);

						});
						'step 1'
						if(result.bool) {

							for(var i = 0; i < result.targets.length; i++) {
								player.logSkill('LN_QT', result.targets);
								player.discardPlayerCard(player.maxHp - player.hp, result.targets[i], 'he', true)
								if(player.num('h') < 1) result.targets[i].loseHp();
								var chat = ['嗟我怀人，窴彼周行——《诗经》', '我仆矣，云何吁矣——《诗经》'].randomGet()
								player.say(chat)
							};
						};
					},
				},
				LN_DZ: {
					trigger: {
						player: "damageBegin",
					},
					content: function () {
						'step 0'
						player.gain(game.createCard('wuzhong'));
						'step 1'
						player.discardPlayerCard(1, trigger.source, 'he', true)
						var chat = ['不达吾志，决不罢休！'].randomGet()
						player.say(chat)
					},
				},
				LN_MJ: {
					trigger: {
						player: "phaseDiscardBefore",
					},
					filter: function (event, player) {
						return player.num('h') > player.hp;
					},

					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('LN_MJ'), function (card, player, target) {
							return target != player;
						}).set('ai', function (target) {
							return get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('LN_MJ', result.targets);
							result.targets[0].gainPlayerCard(player, player.num('h') - player.hp, 'h', true)

							var chat = ['眼下之务，当在养民'].randomGet()
							player.say(chat)
						}
					},
				},
				LN_CQ: {
					trigger: {
						player: "phaseEnd",
					},
					filter: function (event, player) {
						return player.hp > 0;
					},

					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('LN_CQ'), function (card, player, target) {
							return target != player && target.maxHp > target.hp && target.sex == 'male';
						}).set('ai', function (target) {
							return get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('LN_CQ', result.targets);
							result.targets[0].draw();
							result.targets[0].recover();
							player.loseHp();
							var chat = ['天若有情天亦老！'].randomGet()
							player.say(chat)
						}
					},
				},
				LN_LY: {
					trigger: {
						global: "phaseDiscardAfter",
					},
					filter: function (event, player) {
						return player.maxHp > player.hp && event.player.sex == 'male';
					},
					content: function () {
						'step 0'
						player.draw();
						'step 1'
						trigger.player.chooseToDiscard(player.maxHp - player.hp, 'he', true); 
						var chat = ['静女其姝——《诗经》'].randomGet()
						player.say(chat)

						 
					},
				},
				LN_XS: {
					trigger: {
						player: "phaseEnd",
					},

					filter: function (event, player) {
						return player.num('he') > 1;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('LN_XS'), function (card, player, target) {
							return target != player && target.sex == 'male';
						}).set('ai', function (target) {
							return get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('LN_XS', result.targets);
							player.chooseToDiscard(4, 'he', true);
							result.targets[0].draw(player.hp);
						};
					},
					ai: {
						order: 3,
						result: {
							player: -0.2,
							target: 1,
						}
					}
				},
				LN_CY: {
					trigger: {
						player: "phaseDrawBegin",
					},
					content: function () {
						player.draw();
						var chat = ['吾必尽力而行！'].randomGet()
						player.say(chat)
						if(player.maxHp > player.hp) player.draw();

					},
					mod: {
						maxHandcard: function (player, num) {
							return num += game.countPlayer(function (current) {
								return current != player && current.sex == 'male';
							});
						},
					},
				},
				LX: {
					audio: "ext:扩展ol:2",
					audioname: ["jianyong"],
					trigger: {
						player: "useCard",
					},
					frequent: true,
					filter: function (event) {
						return(get.type(event.card) == 'trick' && event.cards[0] && event.cards[0] == event.card);
					},
					content: function () {
						player.draw();
						if(player.num('e') > 1) player.draw();
						if(player.num('e') > 0) player.addTempSkill('qicai');
						var chat = ['不竭如江河，循环如日月——《孙武兵法》'].randomGet()
						player.say(chat)
					},
					ai: {
						threaten: 1.4,
						noautowuxie: true,
					},
					mod: {
						maxHandcard: function (player, num) {
							return num += player.num('e');
						},
					},
				},
				dc: {
					audio: "ext:扩展ol:3",
					enable: "chooseToUse",
					position: "hej",
					filterCard: function (card) {
						return get.color(card) == 'black' || get.color(card) == 'red';
					},
					viewAsFilter: function (player) {
						return player.num('hej', {
							color: ['black', 'red']
						}) > 0;
					},
					viewAs: {
						name: "wuxie",
						suit: "club",
						number: 12,
						cards: [{
							"node": {
								"image": {},
								"info": {},
								"name": {},
								"name2": {},
								"background": {},
								"intro": {},
								"range": {}
							},
							"storage": {},
							"vanishtag": [],
							"_uncheck": [],
							"suit": "club",
							"number": 12,
							"name": "sha",
							"cardid": "6804275322",
							"_transform": "translateX(0px)",
							"clone": {
								"name": "sha",
								"suit": "club",
								"number": 12,
								"node": {
									"name": {},
									"info": {},
									"intro": {},
									"background": {},
									"image": {}
								},
								"_transitionEnded": true,
								"timeout": 2065
							},
							"timeout": 1889,
							"original": "h"
						}],
					},
					prompt: "将一张牌当无懈可击使用",
					check: function (card) {
						return 8 - ai.get.value(card)
					},
					threaten: 1.2,
					ai: {
						basic: {
							useful: [6, 4],
							value: [6, 4],
						},
						result: {
							player: 1,
						},
						expose: 0.2,
					},
				},
				"LN_JIQIAO": {
					audio: "ext:扩展ol:2",
					trigger: {
						global: "phaseEnd",
					},
					direct: true,
					filter: function (event, player) {
						return event.player != player && player.num('e') > 0 && player.num('h');
					},
					content: function () {
						'step 0'
						if(player.hp > 0) {
							if(player.hp > 0) {
								var next = player.chooseTarget('请选择目标', 2, function (card, player, target) {
									if(ui.selected.targets.length) {
										var from = ui.selected.targets[0];
										var judges = from.get('j');
										for(var i = 0; i < judges.length; i++) {
											if(!target.hasJudge(judges[i].viewAs || judges[i].name)) return true;
										}
										if(target.isMin()) return false;
										if((from.get('e', '1') && !target.get('e', '1')) || (from.get('e', '2') && !target.get('e', '2')) || (from.get('e', '3') && !target.get('e', '3')) || (from.get('e', '4') && !target.get('e', '4')) || (from.get('e', '5') && !target.get('e', '5'))) return true;
										return false;
									} else {
										return target.num('ej') > 0;
									}
								}).set('complexTarget', true);;
								next.ai = function (target) {
									if(check) return 0;
									var player = _status.event.player;
									if(ui.selected.targets.length == 0) {
										if(target.num('j') && get.attitude(player, target) > 0) return 10;
										if(get.attitude(player, target) < 0) {
											for(var i = 0; i < game.players.length; i++) {
												if(get.attitude(player, game.players[i]) > 0) {
													if((target.get('e', '1') && !game.players[i].get('e', '1')) || (target.get('e', '2') && !game.players[i].get('e', '2')) || (target.get('e', '3') && !game.players[i].get('e', '3')) || (target.get('e', '4') && !game.players[i].get('e', '4')) || (target.get('e', '5') && !game.players[i].get('e', '5'))) return -get.attitude(player, target);
												}
											}
										}
										return 0;
									}
									return -get.attitude(player, target) * get.attitude(player, ui.selected.targets[0]);
								}
							}
						}
						'step 1'
						if(!result.bool) {
							event.finish();
							return;
						}
						player.line2(result.targets);
						event.targets = result.targets;
						player.chooseToDiscard('h', true)
							'step 2'
						if(targets.length == 2) {
							player.choosePlayerCard('ej', function (button) {
								var player = _status.event.player;
								var targets0 = _status.event.targets0;
								var targets1 = _status.event.targets1;
								if(get.attitude(player, targets0) > get.attitude(player, targets1)) {
									return get.position(button.link) == 'j' ? 10 : 0;
								} else {
									if(get.position(button.link) == 'j') return -10;
									return get.equipValue(button.link);
								}
							}, targets[0]).set('targets0', targets[0]).set('targets1', targets[1]).set('filterButton', function (button) {
								var targets1 = _status.event.targets1;
								if(get.position(button.link) == 'j') {
									return !targets1.hasJudge(button.link.viewAs || button.link.name);
								} else {
									return !targets1.num('e', {
										subtype: get.subtype(button.link)
									});
								}
							});
						}
						'step 3'
						if(result.bool) {
							var link = result.links[0];
							if(get.position(link) == 'e') {
								event.targets[1].equip(link);
							} else if(result.buttons[0].link.viewAs) {
								event.targets[1].addJudge({
									name: link.viewAs
								}, [link]);
							} else {
								event.targets[1].addJudge(link);
							}
							event.targets[0].$give(link, event.targets[1])
							game.delay();
						}
					},
				},
				SD: {
					audio: "ext:扩展ol:2",
					trigger: {
						player: ["phaseEnd", "phaseBegin"],
					},
					frequent: true,
					content: function () {
						var n = [1, 2, 3, 4].randomGet();
						if(n == 1) player.turnOver();
						if(n == 2) player.damage();
						if(n == 3) player.recover();
						if(n == 4) player.draw(2);
						var chat = ['地势坤，君子以厚德载物——《周易》'].randomGet()
						player.say(chat);
					},
					group: ["SD_SD1", "SD_SD2", "SD_SD3"],
					subSkill: {
						"SD1": {
							audio: "ext:扩展ol:1",
							trigger: {
								player: "damageEnd",
							},
							forced: true,
							content: function () {
								'step 0'
								player.chooseTarget(get.prompt('SD'), '选择一名其他角色，令之受到一点伤害，然后你摸取等同于已损失体力值的牌', function (card, player, target) {
									return target != player;
								}).set("ai", function (target) {
									return get.damageEffect(target, player, player);
								});
								'step 1'
								if(result.bool) {
									player.logSkill('SD', result.targets);
									result.targets[0].damage();
									player.draw(player.maxHp - player.hp);
									var chat = ['犯吾领地者，定教尔等伤痕累累！'].randomGet()
									player.say(chat);

								};
							},
							sub: true,
						},
						"SD2": {
							trigger: {
								player: "recoverAfter",
							},
							forced: true,
							content: function () {
								'step 0'
								player.chooseTarget(get.prompt('SD'), '选择一名其他角色，令之摸取两张牌，然后你摸取一张牌', function (card, player, target) {
									return target != player;
								}).set('ai', function (target) {
									return ai.get.attitude(player, target);
								});
								'step 1'
								if(result.bool) {
									player.logSkill('SD', result.targets);
									result.targets[0].draw(2);
									player.draw();
									var chat = ['四海一家！'].randomGet()
									player.say(chat);
								};

							},
							sub: true,
						},
						"SD3": {
							trigger: {
								player: "turnOverAfter",
							},
							forced: true,
							content: function () {
								'step 0'
								player.chooseTarget(get.prompt('SD'), '选择一名其他角色，将之翻面', function (card, player, target) {
									return target != player;
								}).set("ai", function (target) {
									return get.damageEffect(target, player, player);

								});
								'step 1'
								if(result.bool) {
									player.logSkill('SD', result.targets);
									result.targets[0].turnOver();

									var chat = ['平四极，破八荒！'].randomGet()
									player.say(chat);
								};
							},
							sub: true,
						},
					},
				},
				DX: {
					trigger: {
						player: "turnOverBefore",
					},
					forced: true,
					content: function () {
						trigger.untrigger();
						trigger.finish();
						player.draw(2);
						var chat = ['圣王重德，不为物扰！'].randomGet()
						player.say(chat);
					},
					ai: {
						noturnOver: true,
						effect: {
							target: function (card, player, target, current) {
								if(get.tag(card, 'turnOver')) return [0, 0];
							},
						},
					},
					group: "DX_DX1",
					subSkill: {
						"DX1": {
							trigger: {
								player: "loseHpBefore",
							},
							forced: true,
							unique: true,
							content: function () {
								trigger.untrigger();
								trigger.finish();
								player.draw(2);
							},
							ai: {
								effect: {
									target: function (card) {
										if(get.tag(card, 'loseHp')) {
											return [0, 2];
										}
									},
								},
							},
							sub: true,
						},
					},
				},
				JF: {
					trigger: {
						global: "damageEnd",
					},
					frequent: true,
					checkx: function (event, player) {
						var att1 = get.attitude(player, event.player);
						var att2 = get.attitude(player, event.source);
						return att1 > 0 && att2 <= 0;
					},
					filter: function (event, player) {
						return player.num('hej') > 0 && event.player.hp > 0 && event.player.sex == 'male';
					},
					content: function () {
						"step 0"
						var next = player.chooseToDiscard('hej', get.prompt('JF'));
						var check = lib.skill.JF.checkx(trigger, player);
						next.set('ai', function (card) {
							if(_status.event.goon) return 8 - get.value(card);
							return 0;
						});
						next.set('logSkill', 'JF');
						next.set('goon', check);
						"step 1"
						if(result.bool) {
							trigger.player.judge();
						} else {
							event.finish();
						}
						"step 2"
						switch(get.suit(result.card)) {
							case 'heart':
								trigger.player.changeHujia();
								trigger.player.draw();
								break;
							case 'diamond':
								trigger.player.draw(2);
								trigger.player.chooseToDiscard('hej', true);
								break;
							case 'club':
								player.loseHp();
								break;
							case 'spade':
								player.turnOver();
								break;
						}
					},
					ai: {
						expose: 0.3,
					},
				},
				SN: {
					unique: true,
					enable: "chooseToUse",
					mark: true,
					skillAnimation: "epic",
					init: function (player) {
						player.storage.SN = false;
					},
					filter: function (event, player) {
						if(event.type != 'dying') return false;
						if(player != event.dying) return false;
						if(player.storage.SN) return false;
						return true;
					},
					filterTarget: function (card, player, target) {
						return player != target;

					},
					content: function () {
						"step 0"
						player.awakenSkill('SN');
						player.recover(player.maxHp - player.hp);
						player.storage.SN = true;
						"step 1"
						player.draw(2);
						player.insertPhase();
						"step 2"
						target.damage();
						target.turnOver();
						// if(lib.config.mode=='identity'){
						//     player.node.identity.style.backgroundColor=get.translation('weiColor');
						//     player.group='wei';
						// }
					},
					ai: {
						skillTagFilter: function (player) {
							if(player.storage.SN) return false;
							if(player.hp > 0) return false;
						},
						save: true,
						result: {
							player: 4,
							target: function (player, target) {
								if(target.hp == target.maxHp) return 2;
								return 4;
							},
						},
						threaten: function (player, target) {
							if(!target.storage.SN) return 0.8;
						},
					},
					intro: {
						content: "limited",
					},
				},
				HX: {
					trigger: {
						player: "loseEnd",
					},
					forced: true,
					filter: function (event, player) {
						return _status.currentPhase != player;
					},
					content: function () {
						player.draw()
						var chat = ['本仙暂时放你一马！'].randomGet()
						player.say(chat)
					},
					ai: {
						threaten: 1.8,
					},
				},
				"启夏": {
					trigger: {
						player: "damageEnd",
					},
					forced: true,
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('启夏'), function (card, player, target) {
							return target != player;
						}).set('ai', function (target) {
							return ai.get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('启夏', result.targets);
							result.targets[0].draw(player.hp);
							var chat = ['夫君放心，启儿交于我！'].randomGet()
							player.say(chat);
						};
					},
				},
				"LN_JG": {
					trigger: {
						player: "phaseBefore",
					},
					direct: true,
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						"step 0"
						player.chooseControl('①', '②', function () {
							var player = _status.event.player;
							if(player.countCards('h') > 3 && player.countCards('h', 'sha') > 1) {
								return '①';
							}
							if(player.countCards('h', 'sha') > 2 && player.countCards('h') > 2) {
								return '①';
							}
							if(player.hp - player.countCards('h') > 1) {
								return '②';
							}
							return true;

						});

						"step 1"
						if(result.control == '①') {
							player.loseHp();
							if(player.hujia > 0) player.changeHujia(-1);
							player.addTempSkill('LN_ZF', 'phaseEnd');
							player.logSkill('LN_JG');
							var chat = ['见识见识我大商的力量吧！'].randomGet()
							player.say(chat);
						} else if(result.control == '②') {
							player.recover();
							if(player.hujia < 1) player.changeHujia();
							player.addTempSkill('LN_LZ', 'phaseEnd');
							player.logSkill('LN_JG');
							var chat = ['养民生息，备战待敌！'].randomGet()
							player.say(chat);
						}
					},
				},
				"LN_ZF": {
					group: ["LN_ZF_1", "LN_ZF_2"],
					subSkill: {
						"1": {
							enable: "phaseUse",
							usable: 1,
							filterCard: true,
							position: "h",
							viewAs: {
								name: "sha",
								suit: "diamond",
								number: 7,
								cards: [{
									"node": {
										"image": {},
										"info": {},
										"name": {},
										"name2": {},
										"background": {},
										"intro": {},
										"range": {}
									},
									"storage": {},
									"vanishtag": [],
									"_uncheck": [],
									"suit": "diamond",
									"number": 7,
									"name": "shan",
									"cardid": "4456236267",
									"_transform": "translateX(336px)",
									"clone": {
										"name": "shan",
										"suit": "diamond",
										"number": 7,
										"node": {
											"name": {},
											"info": {},
											"intro": {},
											"background": {},
											"image": {}
										},
										"_transitionEnded": true,
										"timeout": 622
									},
									"timeout": 513,
									"original": "h"
								}],
							},
							ai: {
								wuxie: function (target, card, player, viewer) {
									if(get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
										if(!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
									}
								},
								basic: {
									order: 9,
									useful: 1,
									value: 5,
								},
								result: {
									target: function (player, target) {
										if(player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
										var nh = target.countCards('h');
										if(get.mode() == 'identity') {
											if(target.isZhu && nh <= 2 && target.hp <= 1) return -100;
										}
										if(nh == 0) return -2;
										if(nh == 1) return -1.7
										return -1.5;
									},
								},
								tag: {
									respond: 1,
									respondShan: 1,
									damage: 1,
									multitarget: 1,
									multineg: 1,
									natureDamage: function (card) {
										if(card.nature) return 1;
									},
									fireDamage: function (card, nature) {
										if(card.nature == 'fire') return 1;
									},
									thunderDamage: function (card, nature) {
										if(card.nature == 'thunder') return 1;
									},
									poisonDamage: function (card, nature) {
										if(card.nature == 'poison') return 1;
									},
								},
								order: function () {
									if(_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
									return 3;
								},
							},
							sub: true,
						},
						"2": {
							trigger: {
								source: "damageBegin",
							},
							filter: function (event) {
								return event.card && (event.card.name == 'sha') && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
							},
							forced: true,
							content: function () {
								player.draw();
								trigger.num += 1;
								var chat = ['臣服于大商的力量之下吧！'].randomGet()
								player.say(chat);
							},
							sub: true,
						},
					},
				},
				"LN_LZ": {
					trigger: {
						player: ["phaseUseBefore", "phaseUseEnd"],
					},
					content: function () {
						player.draw();
						var chat = ['军械武斗，治民在前！'].randomGet()
						player.say(chat);
					},
					mod: {
						cardUsable: function (card, player, num) {
							if(card.name == 'sha') return 0;
						},
					},
					ai: {
						unequip: true,
						skillTagFilter: function (player, tag, arg) {
							if(!get.zhu(player, 'shouyue')) return false;
							if(arg && arg.name == 'sha') return true;
							return false;
						},
					},
				},
				"LN_GZ": {
					trigger: {
						source: "damageBegin",
					},
					filter: function (event, player) {
						return event.player.sex == 'male';
					},
					content: function () {
						trigger.num++;
						player.draw();
						var chat = ['汝之不义，必反于汝！', '窈窕淑女，君子好逑——《诗经》', '英雄难过美人关！'].randomGet()
						player.say(chat);
					},
				},
				"LN_DY": {
					trigger: {
						player: "damageEnd",
					},
					filter: function (event, player) {
						return player.hp > 0;
					},
					filterTarget: function (card, player, target) {
						return target.sex == 'male' && player != target;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('LN_DY'), function (card, player, target) {
							return target != player && target.sex == 'male';
						}).set('ai', function (target) {
							return ai.get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('LN_DY', result.targets);
							result.targets[0].draw();
							result.targets[0].recover();
							player.draw();
							var chat = ['大业为重，切勿以我为虑！', '夫君，请回晋国吧！'].randomGet()
							player.say(chat)
						};
					},
				},
				"LN_YH": {
					trigger: {
						global: "shaBegin",
					},
					filter: function (event, player) {
						return player.num('hej') > 0;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('LN_YH'), function (card, player, target) {
							return target == trigger.target;
						}).set('ai', function (target) {
							return ai.get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('LN_YH', result.targets);
							result.targets[0].draw();
							var chat = ['虽恶之，不犹于亡乎？——《列女传》', ].randomGet()
							player.say(chat)
						};
					},
				},
				"LN_XJ": {
					trigger: {
						global: "damageBegin",
					},
					filter: function (event, player) {
						return event.card && event.card.name == 'sha' && event.source != player && event.source.num('hej') > 0;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('LN_XJ'), function (card, player, target) {
							return target == trigger.source;
						}).set('ai', function (target) {
							return ai.get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('LN_XJ', result.targets);
							result.targets[0].chooseToDiscard(1, 'hej', true)
							result.targets[0].draw()

							var chat = ['画者，所以均不均，服不服也——《列女传》', '幅者，所以正曲枉也——《列女传》'].randomGet()
							player.say(chat)
						};
					},
				},
				"方绩": {
					trigger: {
						player: "recoverAfter",
					},
					filter: function (event, player) {
						return player.num('hej') > player.hp;
					},
					content: function () {

						'step 0'
						player.chooseTarget(get.prompt('方绩'), function (card, player, target) {
							return target != player;
						}).set('ai', function (target) {
							return ai.get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('方绩', result.targets);
							result.targets[0].recover();
							player.draw();
							var chat = ['明而动，晦而休——《列女传》'].randomGet()
							player.say(chat)
						};
					},
				},
				"惟德": {
					trigger: {
						player: "shaBegin",
						target: "shaBegin",
					},
					check: function () {
						return 1
					},
					content: function () {
						var card = get.cardPile(function (card) {
							return get.subtype(card) == 'equip2';
						});
						if(card) {
							player.gain(card, 'gain2');
							var chat = ['皇天无亲，惟德是辅——《列女传》'].randomGet()
							player.say(chat);
							game.log(player, '从牌堆获得了', card);
						}
					},
					ai: {
						order: function () {
							return lib.card.sha.ai.order - 1;
						},
						result: {
							target: function (player, target) {
								return get.damageEffect(target, player);
							},
						},
					},
					mod: {
						maxHandcard: function (player, num) {
							if(player.num('e') > 0) return num + 1;
						},
					},
				},
				"严母": {
					trigger: {
						player: "phaseUseBefore",
					},
					filter: function (event, player) {
						return player.num('h') > player.hp;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('严母'), function (card, player, target) {
							return target != player;
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);

						});
						'step 1'
						if(result.bool) {
							player.logSkill('严母', result.targets);
							result.targets[0].skip('phaseDraw');
							var chat = ['此非吾子之居所也——《列女传》'].randomGet()
							player.say(chat)
						};


					},
					ai: {
						expose: 0.2,
					},
				},
				"预谚": {
					trigger: {
						global: "phaseBegin",
					},
					filter: function (event, player) {
						return event.player != player && player.num('h') > 0;
					},
					content: function () {
						"step 0"
						var next = player.chooseToDiscard('he', get.prompt('预谚'));
						var check = lib.skill.beige.checkx(trigger, player);
						next.set('ai', function (card) {
							if(_status.event.goon) return 8 - get.value(card);
							return 0;
						});
						next.set('logSkill', '预谚');
						next.set('goon', check);
						"step 1"
						if(result.bool) {
							trigger.player.judge();

							var chat = ['有奇福者，必有奇祸——《列女传》', '有甚美者，必有甚恶——《列女传》'].randomGet()
							player.say(chat)
						} else {
							event.finish();
						}
						"step 2"
						switch(get.suit(result.card)) {
							case 'heart':
								trigger.player.draw();
								player.draw();
								break;
							case 'diamond':
								if(trigger.player.hujia < 1) trigger.player.changeHujia();
								if(trigger.player.hujia > 0) trigger.player.draw();
								break;
							case 'club':
								trigger.player.chooseToDiscard('he', 1, true);
								break;
							case 'spade':
								if(trigger.player.hujia > 0) trigger.player.changeHujia(-1);
								if(trigger.player.hujia < 1) trigger.player.chooseToDiscard(1, 'he', true);
								break;
						}
					},
					ai: {
						expose: 0.3,
					},
				},
				"鉴师": {
					trigger: {
						player: "phaseBefore",
					},
					filter: function (player) {
						var num = 0;
						for(var i = 0; i < game.players.length; i++) {
							num += game.players[i].hujia;
						}
						if(num > 0) return true;
						return false;
					},
					filterTarget: function (card, player, target) {
						return target.hujia > 0 && player != target;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('鉴师'), [1, 2], function (card, player, target) {
							return target != player && target.hujia > 0;

						}).set('ai', function (target) {
							return ai.get.attitude(player, target);

						})
							'step 1'
						if(result.bool) {
							for(var i = 0; i < result.targets.length; i++) {
								player.logSkill('鉴师', result.targets);
								player.draw(2)
								result.targets[i].changeHujia(-1);
								result.targets[i].draw(2);
								var chat = ['举趾高，心不固也——《列女传》', '莫敖必败——《列女传》'].randomGet()
								player.say(chat)
							};
						}
					},
				},
				"识天": {
					trigger: {
						player: "phaseEnd",
					},
					filter: function (player) {
						var num = 0;
						for(var i = 0; i < game.players.length; i++) {
							num += game.players[i].hujia;
						}
						if(num > 0) return true;
						return false;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('识天'), [1, 2], function (card, player, target) {
							return target != player && target.hujia > 0;
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);


						});
						'step 1'
						if(result.bool) {

							for(var i = 0; i < result.targets.length; i++) {


								player.logSkill('识天', result.targets);
								result.targets[0].changeHujia(-1);
								result.targets[0].loseHp();
								result.targets[0].chooseToDiscard(2, 'h', true)
								if(player.maxHp > player.hp) player.draw(2);
								var chat = ['物盛必衰，日中必移——《列女传》', '若王薨，国之福也——《列女传》'].randomGet()
								player.say(chat)
							};
						};
					},
				},
				"秩秩": {
					trigger: {
						player: "phaseEnd",
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('秩秩'), [1, Infinity], function (card, player, target) {
							return target != player;
						}).set('ai', function (target) {
							return ai.get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {

							for(var i = 0; i < result.targets.length; i++) {
								player.logSkill('秩秩', result.targets);
								result.targets[i].draw()
								var chat = ['威仪抑抑，德音秩秩——《诗经》'].randomGet()
								player.say(chat)
							};
						};
					},
				},
				"罪谏": {
					trigger: {
						player: "phaseBegin",
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('罪谏'), function (card, player, target) {
							return target != player && target.num('j') > 0;
						}).set('ai', function (target) {
							return ai.get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('识天', result.targets);
							result.targets[0].chooseToDiscard(1, 'j', true)
							result.targets[0].draw(player.hp);
							result.targets[0].phaseUse();
							var chat = ['好奢穷欲，乱之所兴，请妾之罪——《列女传》'].randomGet()
							player.say(chat)
						};
					},
				},
				"救卫": {
					trigger: {
						global: "dying",
					},
					filter: function (event, player) {
						return event.player.hp <= 0 && player.num('h') > 0;
					},
					content: function () {
						'step 0'
						player.chooseToDiscard(player.num('h'), 'h', true)
						var chat = ['卫何罪之有？', '若要伐卫，就请先惩治我吧！'].randomGet()
						player.say(chat);
						'step 1'
						trigger.player.recover();
						trigger.player.changeHujia();
						if(trigger.player != player) player.changeHujia();
					},
					ai: {
						expose: 0.2,
					},
				},
				"明辨": {
					trigger: {
						global: "drawAfter",
					},
					filter: function (event, player) {
						return event.player.sex == 'male' && event.result && event.result.length == 1 && event.player != player && _status.currentPhase != player;
					},
					content: function () {
						"step 0"
						player.chooseControl('①', '②', function () {


							if(player.countCards('h') < 3) {
								return '②';
							}
							if(player.countCards('h', 'shan') < 1) {
								return '②';
							}
							if(player.countCards('he') > 3) {
								return '①';
							}
							return 'cancel2';
						})
							"step 1"
						if(result.control == '①') {
							player.discardPlayerCard('he', trigger.player, true);
							player.logSkill('明辨');
							var chat = ['知贤不进，是不忠——《列女传》'].randomGet()
							player.say(chat);
						} else if(result.control == '②') {
							player.gainPlayerCard(trigger.player, 1, 'he', true)
							player.logSkill('明辨');
							var chat = ['不知其贤，是不智——《列女传》'].randomGet()
							player.say(chat);
						}
					},
				},
				jinxian: {
					trigger: {
						global: "damageEnd",
					},
					filter: function (event, player) {
						return event.player.sex == 'male' && event.player.hp > 0;
					},
					checkx: function (event, player) {
						var att1 = get.attitude(player, event.player);
						var att2 = get.attitude(player, event.source);
						return att1 > 0 && att2 <= 0;
					},
					content: function () {
						"step 0"
						player.chooseControl('①', '②', 'cancel2', function () {
							var attitude = get.attitude(player, trigger.player)
							if(trigger.player.countCards('h') < 5) {
								return '①';
							}
							if(trigger.source.countCards('he') > 3) {
								return '②';
							}
							if(trigger.player.countCards('h') > 0) {
								return '①';
							}
							return 'cancel2';
						})
							"step 1"
						if(result.control == '①') {
							trigger.player.draw();
							if(trigger.player.num('j') > 0) trigger.player.chooseToDiscard(1, 'j', true)
							trigger.player.logSkill('jinxian');
							var chat = ['虞丘贤则贤矣，未忠也——《列女传》'].randomGet()
							player.say(chat);
						} else if(result.control == '②') {
							trigger.player.gainPlayerCard(trigger.source, 1, 'he', true)
							trigger.player.logSkill('jinxian');
							var chat = ['堂上兼女，所以观人能也——《列女传》'].randomGet()
							player.say(chat);
						}
					},
					ai: {
						expose: 0.3,
					},
				},
				"LN_SN": {
					trigger: {
						player: "phaseBegin",
					},
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						'step 0'
						player.draw();
						player.changeHujia(-99);
						var chat = ['吾乃玄女也——《黄帝问玄女兵法》'].randomGet()
						player.say(chat)
							'step 1'
						var skills = [];
						for(var i in lib.character) {
							for(var j = 0; j < lib.character[i][3].length; j++) {
								var info = lib.skill[lib.character[i][3][j]];
								if(info && (info.gainable || !info.unique) && !info.zhuSkill) {
									skills.add(lib.character[i][3][j]);
								}
							}
						}
						var link = skills.randomGet();
						player.addTempSkill(link);
						game.log(player, '获得技能', '【' + get.translation(link) + '】');
						'step 2'
						var skill = [];
						for(var i in lib.character) {
							for(var j = 0; j < lib.character[i][3].length; j++) {
								var info = lib.skill[lib.character[i][3][j]];
								if(info && (info.gainable || !info.unique) && !info.zhuSkill) {
									skill.add(lib.character[i][3][j]);
								}
							}
						}
						var links = skill.randomGet();
						player.addTempSkill(links);
						game.log(player, '获得技能', '【' + get.translation(links) + '】');

					},
					group: "LN_SN_1",
					subSkill: {
						"1": {
							trigger: {
								player: "phaseEnd",
							},
							content: function () {
								var pl = player
								pl.changeHujia()
								var chat = ['万战万胜，万隐万匿——《黄帝问玄女兵法》'].randomGet()
								player.say(chat)

							},
							sub: true,
						},
					},
				},
				BX: {
					mark: true,
					unique: true,
					init: function (player) {
						player.storage.BX = 3;
						game.addVideo('storage', player, ['BX', player.storage.BX]);
					},
					intro: {
						content: function (storage) {
							return '当前值：' + storage + '/10';
						},
					},
					trigger: {
						player: ["useCard", "respond"],
					},
					forced: true,
					filter: function (event, player) {
						if(typeof player.storage.B == 'boolean' && player.storage.B == true) return false;
						if(player.storage.BX >= 10) return false;
						return true;
					},
					content: function () {
						player.$damagepop(1, 'unknownx');
						player.storage.BX += 1;
						var chat = ['吾乃大汉元帅，尔等受降吧！', '降则安，不降则死！！'].randomGet()
						player.say(chat)
						if(player.storage.BX > 10) player.storage.BX = 10;
						game.addVideo('storage', player, ['BX', player.storage.BX]);
					},
				},
				QZ: {
					enable: "phaseUse",
					usable: 1,
					filter: function (event, player) {
						return player.storage.BX >= 5;
					},
					content: function () {
						player.$damagepop(-5, 'unknownx');
						player.storage.BX -= 5;
						var chat = ['栈道已成，静等出兵！'].randomGet()
						player.say(chat);
						player.syncStorage('BX');
						player.addSkill('QZ_QZ1');
					},
					subSkill: {
						"QZ1": {
							mark: true,
							intro: {
								content: "当你造对一名其他角色成伤害后，视为对目标使用了一张【顺手牵羊】",
							},
							forced: true,
							trigger: {
								source: "damageEnd",
							},
							filter: function (event, player) {
								return event.player.num('hej') > 0;
							},
							content: function () {
								player.useCard({
									name: 'shunshou'
								}, trigger.player);
								var chat = ['回家练练吧！', '降还是不降？', '此之谓动于九天之上！'].randomGet()
								player.say(chat);
							},
							group: "QZ_QZ2",
							sub: true,
						},
						"QZ2": {
							trigger: {
								player: "phaseEnd",
							},
							forced: true,
							content: function () {
								player.storage.QZ = false;
								var chat = ['大功告成！'].randomGet()
								player.say(chat);
								player.removeSkill('QZ_QZ1');
							},
							sub: true,
						},
					},
				},
				NX: {
					enable: "phaseUse",
					usable: 1,
					filter: function (event, player) {
						return player.storage.BX > 3;
					},
					content: function () {
						player.$damagepop(-1, 'unknownx');
						player.storage.BX -= 1;
						player.syncStorage('BX');
						playwr.chooseToDiscard(true);
						player.draw();
						player.addTempSkill('mashu');
						var chat = ['销声匿迹，兵如天降！'].randomGet()
						player.say(chat);
					},
				},
				DB: {
					enable: "phaseUse",
					usable: false,
					filter: function (event, player) {
						return player.storage.BX >= 1;
					},
					content: function () {
						player.$damagepop(-1, 'unknownx');
						player.storage.BX -= 1;
						player.syncStorage('BX');
						player.draw();
						player.chooseToDiscard('he', true)
						var chat = ['吾带兵，自然是多多益善！', '你，你，还有你！'].randomGet()
						player.say(chat);
					},
				},
				BS: {
					mark: true,
					unique: true,
					init: function (player) {
						player.storage.BS = 7;
						game.addVideo('storage', player, ['BS', player.storage.BS]);
					},
					intro: {
						content: function (storage) {
							return '当前值：' + storage + '/15';
						},
					},
					trigger: {
						player: ["useCard", "respond"],
					},
					forced: true,
					filter: function (event, player) {
						if(typeof player.storage.B == 'boolean' && player.storage.B == true) return false;
						if(player.storage.BS >= 15) return false;
						return true;
					},
					content: function () {
						player.$damagepop(1, 'unknownx');
						player.storage.BS += 1;
						var chat = ['有提兵三万而天下莫能敌者，孙武也——《尉缭子》'].randomGet()
						player.say(chat);
						if(player.storage.BS > 15) player.storage.BS = 15;
						game.addVideo('storage', player, ['BS', player.storage.BS]);
					},
				},
				JZ: {
					group: ["JZ_1", "JZ_2"],
					subSkill: {
						"1": {
							enable: "phaseUse",
							usable: 1,
							filter: function (event, player) {
								return player.storage.BS > 14;
							},
							content: function () {
								player.$damagepop(-15, 'unknownx');
								player.storage.BS -= 15;
								player.syncStorage('BS');
								player.insertPhase();
								var chat = ['谋当者神速！', '后人发，先人至——《孙武兵法》'].randomGet()
								player.say(chat);
							},
							sub: true,
						},
						"2": {
							trigger: {
								player: "phaseBegin",
							},
							frequent: true,
							content: function () {
								player.draw()
								player.$damagepop(1, 'unknownx');
								player.storage.BS += 1;
								player.syncStorage('BS');
								var chat = ['先趋战地者佚——《孙武兵法》'].randomGet()
								player.say(chat);
							},
							sub: true,
						},
					},
				},
				XS: {
					group: ["XS_1", "XS_2"],
					subSkill: {
						"1": {
							unique: true,
							trigger: {
								target: "useCardToBefore",
							},
							forced: true,
							filter: function (event, player) {
								return event.card.name == 'sha' && player.storage.BS > 5;
							},
							content: function () {
								trigger.player.chooseToDiscard(player.num('e'), 'he', true)
								var chat = ['众者，使人备己也——《孙武兵法》', '无所不备，无所不寡——《孙武兵法》'].randomGet()
								player.say(chat);
							},
							sub: true,
						},
						"2": {
							unique: true,
							trigger: {
								target: "useCardToBefore",
							},
							forced: true,
							filter: function (event, player) {
								return event.card.name == 'sha' && player.storage.BS <= 5;
							},
							content: function () {
								player.draw(player.num('e'));
								var chat = ['寡者，备人者也——《孙武兵法》', '昼战多旌旗，夜战多火鼓——《孙武兵法》'].randomGet()
								player.say(chat);
							},
							sub: true,
						},
					},
				},
				SJ: {
					enable: "phaseUse",
					usable: 1,
					filter: function (event, player) {
						return player.storage.BS > 5;
					},
					content: function () {
						player.$damagepop(-6, 'unknownx');
						player.storage.BS -= 6;
						player.syncStorage('BS');
						player.addTempSkill('zhiheng');
						player.addTempSkill('wansha');
						player.addTempSkill('JIAOZHAN');
						var chat = ['多算者胜，少算者亡——《孙武兵法》', '吾以此观之，胜负见矣——《孙武兵法》'].randomGet()
						player.say(chat);
					},
				},
				JIAOZHAN: {
					trigger: {
						source: "damageEnd",
					},
					forced: true,
					content: function () {
						player.$damagepop(1, 'unknownx');
						player.storage.BS += 1;
						player.syncStorage('BS');
						player.draw();
						var chat = ['三申五令，则军士见长！', '令行禁止，则敌莫能敌！'].randomGet()
						player.say(chat);
					},
				},
				bs: {
					mark: true,
					unique: true,
					init: function (player) {
						player.storage.bs = 2;
						game.addVideo('storage', player, ['bs', player.storage.bs]);
					},
					intro: {
						content: function (storage) {
							return '当前值：' + storage + '/10';
						},
					},
					trigger: {
						player: ["useCard", "respond"],
					},
					forced: true,
					filter: function (event, player) {
						if(typeof player.storage.B == 'boolean' && player.storage.B == true) return false;
						if(player.storage.bs >= 10) return false;
						return true;
					},
					content: function () {
						player.$damagepop(1, 'unknownx');
						player.storage.bs += 1;
						var chat = ['以小善胜不善，不可谓知兵——《卫公问对》', '古者，多以小善之军胜不善之军，如谢玄者，吾不屑也！'].randomGet()
						player.say(chat)
						if(player.storage.bs > 10) player.storage.bs = 10;
						game.addVideo('storage', player, ['bs', player.storage.bs]);
					},
				},
				HZ: {
					enable: "phaseUse",
					usable: 1,
					filter: function (event, player) {
						return player.storage.bs > 5 && player.num('e') > 0;
					},
					content: function () {
						player.$damagepop(-5, 'unknownx');
						player.storage.bs -= 5;
						player.chooseToDiscard(true, 'e');
						var chat = ['三令五申，三散三合——《卫公问对》'].randomGet()
						player.say(chat);
						player.syncStorage('bs');
						player.addSkill('HZ_HZ1');
					},
					subSkill: {
						"HZ1": {
							unique: true,
							mark: true,
							intro: {
								content: "当你被杀指定时，摸取一张牌并令目标弃置一张手牌",
							},
							forced: true,
							trigger: {
								target: "useCardToBefore",
							},
							filter: function (event, player) {
								return event.player.num('h') > 0 && event.card.name == 'sha';
							},
							content: function () {
								player.draw();
								trigger.player.chooseToDiscard(true, 'h')
								var chat = ['以散为奇，复归于正——《卫公问对》'].randomGet()
								player.say(chat);
							},
							group: "HZ_HZ2",
							sub: true,
						},
						"HZ2": {
							trigger: {
								player: "phaseBegin",
							},
							forced: true,
							content: function () {
								player.storage.HZ = false;
								var chat = ['贼军已破，原地修整，待我号令，再行追击！'].randomGet()
								player.say(chat);
								player.removeSkill('HZ_HZ1');
							},
							sub: true,
						},
					},
				},
				YB: {
					trigger: {
						player: ["shaBegin", "shanBegin"],
					},
					check: function () {
						return 1
					},
					content: function () {
						var card = get.cardPile(function (card) {
							return get.subtype(card) == 'equip1';
						});
						if(card) {
							player.gain(card, 'gain2');
							game.log(player, '从牌堆获得了', card);
							var chat = ['吾依古法，推陈演兵，甚有所得焉！', '以此为基，布下六花阵法！'].randomGet()
							player.say(chat);
						}
					},
				},
				ZX: {
					enable: "phaseUse",
					usable: 1,
					filter: function (event, player) {
						return player.storage.bs > 4;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('ZX'), function (card, player, target) {
							return target != player;
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('ZX', result.targets);
							result.targets[0].damage()
						};
						player.$damagepop(-4, 'unknownx');
						player.storage.bs -= 4;
						player.syncStorage('bs');
						var chat = ['臣以正兵——《卫公问对》', '非正兵，安能致远？——《卫公问对》'].randomGet()
						player.say(chat)
					},
				},
				SS: {
					mark: true,
					unique: true,
					init: function (player) {
						player.storage.SS = 3;
						game.addVideo('storage', player, ['SS', player.storage.SS]);
					},
					intro: {
						content: function (storage) {
							return '当前值：' + storage + '/10';
						},
					},
					trigger: {
						player: ["useCard", "respond"],
					},
					forced: true,
					filter: function (event, player) {
						if(typeof player.storage.SS == 'boolean' && player.storage.SS == true) return false;
						if(player.storage.SS >= 10) return false;
						return true;
					},
					content: function () {
						player.$damagepop(1, 'unknownx');
						player.storage.SS += 1;
						var chat = ['地狱之门，即将打开！', '唯有死亡，才是你们的归宿！'].randomGet()
						player.say(chat)
						if(player.storage.SS > 10) player.storage.SS = 10;
						game.addVideo('storage', player, ['SS', player.storage.SS]);
					},
				},
				RT: {
					mod: {
						cardUsable: function (card, player, num) {
							if(card.name == 'sha') return Infinity;
						},
						targetInRange: function (card) {
							if(card.name == 'sha') return true;
						},
					},
				},
				ZL: {
					enable: "phaseUse",
					usable: 1,
					filter: function (event, player) {
						return player.storage.SS > 9;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('ZL'), function (card, player, target) {
							return target != player;
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('ZL', result.targets);
							result.targets[0].damage()
						};
						player.$damagepop(-10, 'unknownx');
						player.storage.SS -= 10;
						player.syncStorage('SS');
						player.addTempSkill('RT');
						player.draw(player.hp + 1)
						var chat = ['愚昧之徒，只得鹿死吾手！', '佯装败退，只为今日！', '鱼已上钩，合围，歼灭他们！'].randomGet()
						player.say(chat)
					},
				},
				CG: {
					group: ["CG_1", "CG_2"],
					subSkill: {
						"1": {
							unique: true,
							trigger: {
								player: ["phaseBegin", "phaseEnd"],
							},
							forced: true,
							content: function () {
								'step 0'
								player.chooseTarget(get.prompt('CG'), function (card, player, target) {
									return true;
								}).set('ai', function (target) {
									return ai.get.attitude(player, target);
								});
								'step 1'
								if(result.bool) {
									player.logSkill('CG', result.targets);
									result.targets[0].draw();
									var chat = ['臣秉承先王之教，感激先王之恩，如此者，为报于先王也！', '臣闻忠臣去国不洁其名——《报燕王书》'].randomGet()
									player.say(chat);
								};
							},
							sub: true,
						},
						"2": {
							trigger: {
								player: "phaseBegin",
							},
							forced: true,
							content: function () {
								if(player.hp > 1) player.loseHp();
								player.addTempSkill('ZW')
							},
							sub: true,
						},
					},
				},
				ZW: {
					enable: "phaseUse",
					usable: 3,
					filter: function (event, player) {
						return player.num('hej') >= 2;
					},
					content: function () {
						player.chooseToDiscard(2, 'hej', true);
						player.draw(player.maxHp - player.hp);
						var chat = ['修军整武，备战待敌！', '革新军制，则战无不胜！'].randomGet()
						player.say(chat);
					},
				},
				LP: {
					group: ["LP_1", "LP_2"],
					subSkill: {
						"1": {
							trigger: {
								source: "damageEnd",
							},
							forced: true,
							content: function () {
								player.draw(player.maxHp - player.hp)
								player.changeHujia();
								var chat = ['厉兵十年，只为此一战！'].randomGet()
								player.say(chat);
							},
							sub: true,
						},
						"2": {
							trigger: {
								player: "phaseEnd",
							},
							forced: true,
							filter: function (event, player) {
								return player.hujia > 0;
							},
							content: function () {
								player.changeHujia(-(player.hp + 1));
								player.recover();
								player.draw(player.hujia)
								var chat = ['臣奉先王之志，不敢苟同大王！'].randomGet()
								player.say(chat);
							},
							sub: true,
						},
					},
				},
				BD: {
					group: ["BD_1", "BD_2"],
					subSkill: {
						"1": {
							unique: true,
							trigger: {
								player: "shaBegin",
							},
							forced: true,
							content: function () {
								'step 0'
								player.chooseTarget(get.prompt('BD'), function (card, player, target) {
									return target != player && target.num('he') > 0;
								}).set("ai", function (target) {
									return get.damageEffect(target, player, player);
								});
								'step 1'
								if(result.bool) {
									player.logSkill('BD', result.targets);
									result.targets[0].chooseToDiscard(true, 'he');
									var chat = ['围魏救赵，是为上策！', '此之谓后发之兵！', '东而示之西——《孙武兵法》'].randomGet()
									player.say(chat);
								};
							},
							sub: true,
						},
						"2": {
							unique: true,
							trigger: {
								target: "shaBegin",
							},
							filter: function (event, player) {
								return event.player.countCards('h') && player.countCards('h');
							},
							forced: true,
							content: function () {
								'step 0'
								trigger.player.chooseToCompare(player);
								'step 1'
								if(result.bool) {
									player.chooseToDiscard(player.num('h'), true);
									var chat = ['无妨，此为诱敌之计！'].randomGet()
									player.say(chat);
								} else {
									trigger.untrigger();
									trigger.finish();
									trigger.player.chooseToDiscard(trigger.player.num('h'), true);
									var chat = ['此地就是你的坟墓！'].randomGet()
									player.say(chat);
								}
							},
							sub: true,
						},
					},
					mod: {
						maxHandcard: function (player, num) {
							return num + 1;
						},
					},
				},
				FX: {
					unique: true,
					trigger: {
						player: "loseEnd",
					},
					forced: true,
					filter: function (event, player) {
						for(var i = 0; i < event.cards.length; i++) {
							if(event.cards[i].original == 'h') return _status.currentPhase != player && player.num('h') < 1;
						}
					},
					content: function () {
						'step 0'
						player.draw(player.hp + 1);
						player.chooseTarget(get.prompt('FX'), function (card, player, target) {
							return target != player;
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('FX', result.targets);
							result.targets[0].damage();
							var chat = ['师兄，结束了！', '早知今日，何必当初？'].randomGet()
							player.say(chat);
						};
					},
				},
				YX: {
					mark: true,
					unique: true,
					init: function (player) {
						player.storage.YX = 5;
						game.addVideo('storage', player, ['YX', player.storage.YX]);
					},
					intro: {
						content: function (storage) {
							return '当前值：' + storage + '/12';
						},
					},
					trigger: {
						player: ["useCard", "respond"],
					},
					forced: true,
					filter: function (event, player) {
						if(typeof player.storage.B == 'boolean' && player.storage.B == true) return false;
						if(player.storage.YX >= 12) return false;
						return true;
					},
					content: function () {
						player.$damagepop(1, 'unknownx');
						player.storage.YX += 1;
						var chat = ['政善治，心善渊——《道德经》', '圣人学不学，欲不欲——《道德经》', '心渊不可测，不可测则无敌！'].randomGet()
						player.say(chat)
						if(player.storage.YX > 12) player.storage.YX = 12;
						game.addVideo('storage', player, ['YX', player.storage.YX]);
					},
				},
				SL: {
					enable: "phaseUse",
					usable: 1,
					filter: function (event, player) {
						return player.storage.YX >= 6;
					},
					content: function () {
						player.$damagepop(-6, 'unknownx');
						player.storage.YX -= 6;
						var chat = ['智者千虑，无有一失！！'].randomGet()
						player.say(chat);
						player.syncStorage('YX');
						player.addSkill('SL_SL1');
					},
					subSkill: {
						"SL1": {
							unique: true,
							mark: true,
							intro: {
								content: "令你于回合外拥有“渊”而被卡牌为指定唯一目标时，取消之",
							},
							forced: true,
							trigger: {
								target: "useCardToBefore",
							},
							filter: function (event, player) {
								return event.targets.length < 2 && player.storage.YX > 0;
							},
							content: function () {
								trigger.untrigger();
								trigger.finish();
								var chat = ['哼，不自量力！', '王霸之师，动如雷霆，止如高山！'].randomGet()
								player.say(chat);
							},
							group: "SL_SL2",
							sub: true,
						},
						"SL2": {
							trigger: {
								player: "phaseBegin",
							},
							forced: true,
							content: function () {
								player.storage.SL = false;
								player.draw(player.maxHp - player.hp)
								var chat = ['上不遗民，则下不死难——《诸子》', '上下同道，则无不胜——《诸子》'].randomGet()
								player.say(chat);
								player.removeSkill('SL_SL1');
							},
							sub: true,
						},
					},
				},
				jt: {
					enable: "phaseUse",
					usable: 3,
					filter: function (event, player) {
						return player.storage.YX > 0;
					},
					content: function () {
						'step 0'
						player.$damagepop(-1, 'unknownx');
						player.storage.YX -= 1;
						player.syncStorage('YX');
						player.chooseTarget(get.prompt('jt'), function (card, player, target) {
							return target != player;
						}).set('ai', function (target) {
							return ai.get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('jt', result.targets);
							result.targets[0].draw();
							var chat = ['君上，霸王之道，重在国本！', '有我在，则齐国必霸天下！'].randomGet()
							player.say(chat);
						};
					},
				},
				KW: {
					unique: true,
					trigger: {
						global: "gainEnd",
					},
					forced: true,
					filter: function (event, player) {
						if(_status.currentPhase != player) return false;
						return event.player != player;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('KW'), function (card, player, target) {
							return target != player;
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('KW', result.targets);
							result.targets[0].chooseToDiscard('hej', true);
							var chat = ['尔等蛮夷，来送死的吧？', '天子在上，盟军在前，汝等还是投降吧！', '违背我大周，只有死路一条！'].randomGet()
							player.say(chat);
						}
					},
				},
				ZB: {
					mark: true,
					skillAnimation: true,
					unique: true,
					derivation: ["SL", "jt", "KW"],
					trigger: {
						player: "phaseBegin",
					},
					forced: true,
					filter: function (event, player) {
						if(player.storage.ZB) return false;
						return player.storage.YX > 11;
					},
					content: function () {
						player.storage.ZB = true;
						player.loseMaxHp();
						player.$damagepop(-12, 'unknownx');
						player.storage.YX -= 12;
						player.syncStorage('YX');
						player.recover(player.maxHp - player.hp);
						player.addSkill('SL');
						player.addSkill('jt');
						player.addSkill('KW');
						player.awakenSkill('ZB');
						player.draw(game.players.length)
						var chat = ['九合诸侯，一匡天下！'].randomGet()
						player.say(chat);
					},
				},
				wd: {
					unique: true,
					trigger: {
						player: "damageEnd",
					},
					forced: true,
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						player.recover()
						player.draw();
						var chat = ['垂死挣扎是无用的！', '哼，毫无作用！', '不动如山，难知如阴——《孙武兵法》'].randomGet()
						player.say(chat);
					},
					mod: {
						maxHandcard: function (player, num) {
							if(player.hp < player.maxHp) return num + 1;
						},
					},
				},
				JS: {
					trigger: {
						player: "shaBegin",
					},
					forced: true,
					filter: function (event, player) {
						return player.hp > 1;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('JS'), function (card, player, target) {
							return target != player;
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('JS', result.targets);
							result.targets[0].damage();
							player.loseHp()
							var chat = ['这，才是力量！', '霸王之师，岂是汝等可以阻挡？', '动如雷霆——《孙武兵法》'].randomGet()
							player.say(chat);
						};
					},
					ai: {
						expose: 0.3,
						threaten: 1.6,
					},
				},
				yx: {
					group: ["yx_1", "yx_2"],
					subSkill: {
						"1": {
							enable: "phaseUse",
							filter: function (event, player) {
								return player.hp > 0;
							},
							filterTarget: function (card, player, target) {
								return target.num('he') > target.hp && !target.hasSkill('yx2');
							},
							content: function () {
								target.addTempSkill('yx2', 'phaseAfter');
								player.discardPlayerCard('hej', target, true);
								var chat = ['福祸在君，而不在天——《太公兵法》', '天下熙熙，一盈一虚——《太公兵法》'].randomGet()
								player.say(chat);
							},
							sub: true,
						},
						"2": {
							enable: "phaseUse",
							filter: function (event, player) {
								return player.hp > 0;
							},
							filterTarget: function (card, player, target) {
								return target.num('he') <= target.hp && !target.hasSkill('yx2');
							},
							content: function () {
								target.addTempSkill('yx2', 'phaseAfter');
								target.draw();
								var chat = ['天下熙熙，一盈一虚——《太公兵法》', '福祸在君，而不在天——《太公兵法》'].randomGet()
								player.say(chat);
							},
							sub: true,
						},
					},
				},
				YS: {
					unique: true,
					trigger: {
						global: "discardAfter",
					},
					filter: function (event, player) {
						for(var i = 0; i < event.cards.length; i++) {
							if(get.position(event.cards[i]) == 'd') {
								return player.num('e') > 0;
							}
						}
						return true;
					},
					frequent: true,
					popup: false,
					content: function () {
						"step 0"
						var chat = ['鬼神莫测！', '是以圣人有阴书！'].randomGet()
						player.say(chat);
						player.draw();
						var cards = [];
						for(var i = 0; i < trigger.cards.length; i++) {
							if(get.position(trigger.cards[i]) == 'd') {
								cards.push(trigger.cards[i]);
							}
						}
						player.chooseCardButton(cards, [1, cards.length], '阴书：将弃置的牌按任意顺序置于牌堆顶（先选择的在上）').set('ai', function () {
							return -1;
						});
						"step 1"
						if(result && result.bool && result.links && result.links.length) {
							var cards = result.links.slice(0);
							while(cards.length) {
								ui.cardPile.insertBefore(cards.pop(), ui.cardPile.firstChild);
							}
							player.logSkill('YS');
						}
					},
				},
				"yx2": {},
				RB: {
					trigger: {
						player: "shaBegin",
					},
					forced: true,
					content: function () {
						'step 0'
						player.draw();
						player.chooseTarget(get.prompt('RB'), function (card, player, target) {
							return target != player;
						}).set('ai', function (target) {
							return ai.get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('RB', result.targets);
							result.targets[0].draw();
							var chat = ['杀人安人，杀之可也——《司马法》', '圣王之师，以义决焉！'].randomGet()
							player.say(chat);
						};
					},
				},
				CY: {
					trigger: {
						source: "damageEnd",
					},
					forced: true,
					usable: 1,
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('CY'), function (card, player, target) {
							return true;
						}).set('ai', function (target) {
							return ai.get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('CY', result.targets);
							result.targets[0].changeHujia();
							var chat = ['以战止战，以兵制兵——《司马法》', '君上勿忧，且待我击破敌军！'].randomGet()
							player.say(chat);
						};
					},
				},
				yb: {
					trigger: {
						player: "shaBegin",
					},
					filter: function (event, player) {
						return player.num('h') > 0 && event.target.num('h') > 0;
					},
					usable: 1,
					forced: true,
					content: function () {
						'step 0'
						player.chooseToCompare(trigger.target);
						'step 1'
						if(result.bool) {
							trigger.directHit = true;
							player.discardPlayerCard(trigger.target, 'he', true);
							var chat = ['多行不义必自毙——《左传》'].randomGet()
							player.say(chat);
						} else {
							trigger.untrigger();
							trigger.finish();
							var chat = ['此乃义军，撤退！', '罪过罪过！'].randomGet()
							player.say(chat);
						}
					},
				},
				"宗师": {
					group: ["宗师_1", "宗师_2", "宗师_3"],
					subSkill: {
						"1": {
							trigger: {
								player: "phaseDrawBefore",
							},
							forced: true,
							content: function () {
								player.draw();
								var chat = ['善用兵者，必先养民！'].randomGet()
								player.say(chat);
							},
							sub: true,
						},
						"2": {
							trigger: {
								player: "phaseDiscardAfter",
							},
							forced: true,
							content: function () {
								player.draw();
								var chat = ['有失必有得！'].randomGet()
								player.say(chat);
							},
							sub: true,
						},
						"3": {
							trigger: {
								player: "damageEnd",
								source: "damageEnd",
							},
							forced: true,
							content: function () {
								player.draw();
								var chat = ['越战愈强！'].randomGet()
								player.say(chat)
							},
							sub: true,
						},
					},
					mod: {
						maxHandcard: function (player, num) {
							if(player.hp < player.maxHp) return num + player.maxHp - player.hp;
						},
					},
				},
				"归林": {
					trigger: {
						player: "phaseEnd",
					},
					forced: true,
					unique: true,
					filter: function (event, player) {
						return player.num('hej') > 0;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('归林'), function (card, player, target) {
							return target == player;
						}).set('ai', function (target) {
							return ai.get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {
							player.changeHujia(-player.hujia);
							player.logSkill('归林', result.targets);
							result.targets[0].chooseToDiscard(player.num('hej'), 'hej', true);
							player.changeHujia(player.hp);
							var chat = ['众乐乐，不如独乐乐！', '此仙捷也！', '圣人唯不争，故无尤——《道德经》'].randomGet()
							player.say(chat);
						};
					},
				},
				SM: {
					group: ["SM_1", "SM_2", "SM_3"],
					subSkill: {
						"1": {
							enable: "phaseUse",
							usable: 1,
							filter: function (event, player) {
								return player.num('hej') > 0 && player.hujia > 0;
							},
							content: function () {
								player.changeHujia(-player.hujia);
								player.chooseToDiscard(player.num('hej'), 'hej', true)
								player.draw(game.players.length)
								var chat = ['运筹帷幄之中，决胜千里之外！'].randomGet()
								player.say(chat);
							},
							sub: true,
						},
						"2": {
							enable: "phaseUse",
							usable: 1,
							filter: function (event, player) {
								return player.hp > 0;
							},
							content: function () {
								player.loseHp()
								player.addSkill('MS')
								var chat = ['谋者，帝王之策也'].randomGet()
								player.say(chat);
							},
							sub: true,
						},
						"3": {
							trigger: {
								player: "phaseBegin",
							},
							forced: true,
							content: function () {
								player.removeSkill('MS');
							},
							sub: true,
						},
					},
				},
				MS: {
					mod: {
						targetEnabled: function (card) {
							if(get.type(card) == 'trick' || get.type(card) == 'delay') {
								return false;
							}
						},
					},
				},
				DC: {
					audio: "kanpo1",
					enable: "chooseToUse",
					position: "hej",
					filterCard: function (card) {
						return get.color(card) == 'black' || get.color(card) == 'red';
					},
					viewAsFilter: function (player) {
						return player.num('hej', {
							color: ['black', 'red']
						}) > 0;
					},
					viewAs: {
						name: "wuxie",
						suit: "club",
						number: 12,
						cards: [{
							"node": {
								"image": {},
								"info": {},
								"name": {},
								"name2": {},
								"background": {},
								"intro": {},
								"range": {}
							},
							"storage": {},
							"vanishtag": [],
							"_uncheck": [],
							"suit": "club",
							"number": 12,
							"name": "sha",
							"cardid": "6804275322",
							"_transform": "translateX(0px)",
							"clone": {
								"name": "sha",
								"suit": "club",
								"number": 12,
								"node": {
									"name": {},
									"info": {},
									"intro": {},
									"background": {},
									"image": {}
								},
								"_transitionEnded": true,
								"timeout": 2065
							},
							"timeout": 1889,
							"original": "h"
						}],
					},
					prompt: "将一张牌当无懈可击使用",
					check: function (card) {
						return 8 - ai.get.value(card)
					},
					threaten: 1.2,
					ai: {
						basic: {
							useful: [6, 4],
							value: [6, 4],
						},
						result: {
							player: 1,
						},
						expose: 0.2,
					},
				},
				BJ: {
					trigger: {
						player: "phaseBegin",
					},
					forced: true,
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('BJ'), function (card, player, target) {
							return target == player;
						}).set('ai', function (target) {
							return ai.get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('BJ', result.targets);
							player.changeHujia(-player.hujia);
							result.targets[0].draw(player.hp + 1);
							result.targets[0].skip('phaseDraw')
							result.targets[0].skip('phaseUse')
							result.targets[0].skip('phaseDiscard')
							result.targets[0].skip('phaseJudge')
							player.addSkill('DC');
							player.changeHujia();
							player.removeSkill('BJ');
							player.addSkill('CS')
							player.addSkill('SF')
							var chat = ['苟全性命于乱世，不求闻达于诸侯——《出师表》', '先为不可胜，以待敌之可胜——《孙武兵法》'].randomGet()
							player.say(chat)
						};
					},
				},
				CS: {
					trigger: {
						player: "phaseBegin",
					},
					forced: true,
					content: function () {
						'step 0'
						player.draw()
						player.addSkill('JH')
						player.phaseUse();
						'step 1'
						player.getStat().card = {};
						var chat = ['遂许先帝以驱驰——《出师表》'].randomGet()
						player.say(chat);
					},
					group: "CS_CS2",
					subSkill: {
						"CS2": {
							trigger: {
								player: "damageEnd",
							},
							forced: true,
							content: function () {
								var chat = ['诚如是，汉室可兴也——《隆中对》'].randomGet()
								player.say(chat);
								player.removeSkill('DC')
								player.removeSkill('SF')
								player.removeSkill('CS');
								player.removeSkill('JH');
								player.addSkill('BJ')
								player.draw(player.maxHp - player.hp + 1)
							},
							sub: true,
						},
					},
				},
				SF: {
					trigger: {
						global: "shaBegin",
					},
					forced: true,
					filter: function (event, player) {
						return _status.currentPhase != player && event.target.hp <= event.player.hp;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('SF'), function (card, player, target) {
							return target == trigger.player;
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('SF', result.targets);
							result.targets[0].chooseToDiscard('he', true);
							player.draw();
							var chat = ['将军可取荆州、益州，以成三足鼎立之势——《隆中对》'].randomGet()
							player.say(chat);
						};
					},
				},
				JH: {
					group: ["JH_huo", "JH_mie"],
					subSkill: {
						huo: {
							audio: "huoji",
							enable: "phaseUse",
							usable: 1,
							filterCard: true,
							position: "he",
							viewAs: {
								name: "huogong",
								suit: "club",
								number: 10,
							},
							ai: {
								basic: {
									order: 4,
									value: [3, 1],
									useful: 1,
								},
								wuxie: function (target, card, player, current, state) {
									if(get.attitude(current, player) >= 0 && state > 0) return false;
								},
								result: {
									player: function (player) {
										var nh = player.countCards('h');
										if(nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
											if(typeof _status.event.filterCard == 'function' && _status.event.filterCard({
												name: 'huogong'
											})) {
												return -10;
											}
											if(_status.event.skill) {
												var viewAs = get.info(_status.event.skill).viewAs;
												if(viewAs == 'huogong') return -10;
												if(viewAs && viewAs.name == 'huogong') return -10;
											}
										}
										return 0;
									},
									target: function (player, target) {
										if(target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
										if(player.countCards('h') <= 1) return 0;
										if(target == player) {
											if(typeof _status.event.filterCard == 'function' && _status.event.filterCard({
												name: 'huogong'
											})) {
												return -1.5;
											}
											if(_status.event.skill) {
												var viewAs = get.info(_status.event.skill).viewAs;
												if(viewAs == 'huogong') return -1.5;
												if(viewAs && viewAs.name == 'huogong') return -1.5;
											}
											return 0;
										}
										return -1.5;
									},
								},
								tag: {
									damage: 1,
									fireDamage: 1,
									natureDamage: 1,
									norepeat: 1,
								},
							},
							sub: true,
						},
						mie: {
							unique: true,
							mod: {
								selectTarget: function (card, player, range) {
									if(range[1] == -1) return;
									if(card.name == 'huogong') range[1] += 1;
								},
							},
							sub: true,
						},
					},
				},
				"图强": {
					trigger: {
						player: "phaseEnd",
					},
					frequent: true,
					content: function () {
						player.draw(2)
						player.turnOver();
						var chat = ['圣王不贵义，而贵法！_《商君书》'].randomGet()
						player.say(chat);
					},
				},
				"变法": {
					trigger: {
						player: "chooseToRespondBegin",
					},
					frequent: true,
					filter: function (event, player) {
						return player.isTurnedOver();
					},
					content: function () {
						player.chooseToDiscard(1, 'h');
						player.draw(3);
						player.turnOver()
						var chat = ['治世不一道，便国不法古！_《商君书》'].randomGet()
						player.say(chat);
					},
				},
				"义驰": {
					enable: "phaseUse",
					usable: 1,
					filterTarget: function (player, target) {
						return player != target && target.hp >= 0
					},
					content: function () {
						player.loseHp(1);
						target.draw(2)
						var chat = ['兼相爱，交相利！_《墨子》', '吾为义驱驰！'].randomGet()
						player.say(chat);
					},
				},
				"墨守": {
					mark: true,
					intro: {
						content: "兼爱非攻",
					},
					trigger: {
						player: "phaseEnd",
					},
					forced: true,
					filter: function (event, player) {
						return player.hp < player.maxHp;
					},
					content: function () {
						player.chooseToDiscard('hej', player.hp, true)
						player.recover()
						player.addSkill('kongcheng')
						player.addSkill('qianxun')
						var chat = ['非攻自强，墨守成规！'].randomGet()
						player.say(chat);
					},
				},
				"梦蝶": {
					group: ["梦蝶_1", "梦蝶_2"],
					subSkill: {
						"1": {
							trigger: {
								player: "phaseEnd",
							},
							forced: true,
							content: function () {
								player.turnOver();
								player.recover();
								player.draw(2);
								var chat = ['周为蝶乎？蝶为周乎？'].randomGet()
								player.say(chat);
							},
							sub: true,
						},
						"2": {
							mod: {
								targetEnabled: function (card, player, target, now) {
									if(target.isTurnedOver()) {
										if(card.name == 'sha' || card.name == 'juedou' || card.name == 'guohe' || card.name == 'shunshou' || card.name == 'lebu' || card.name == 'bingliang' || card.name == 'shandian' || card.name == 'nanman' || card.name == 'wanjian' || card.name == 'liuxinghuoyu' || card.name == 'tiesuo' || card.name == 'jiedao' || card.name == 'fudi' || card.name == 'huogong' || card.name == 'touliang') return false;
									}
								},
							},
							sub: true,
						},
					},
				},
				"法学": {
					enable: "phaseUse",
					usable: 1,
					filterCard: true,
					selectCard: 1,
					filterTarget: true,
					selectTarget: 1,
					content: function () {
						target.damage();
						target.draw();
						var chat = ['弱乱难为计，治强常有功！_《韩非子》'].randomGet()
						player.say(chat);
						if(target.hp <= player.hp) {
							player.draw();
						}
					},
					check: function (card) {
						return 6 - ai.get.value(card);
					},
				},
				"大成": {
					trigger: {
						player: "gainEnd",
					},
					forced: true,
					filter: function (event, player) {
						return player.num('h') > player.hp;
					},
					content: function () {
						player.recover();
						var chat = ['集前圣之智，为吾所用！'].randomGet()
						player.say(chat);
					},
				},
				"裨阖": {
					trigger: {
						global: "phaseBegin",
					},
					forced: true,
					filter: function (event, player) {
						return player.hp < player.maxHp;
					},
					content: function () {
						player.draw(player.maxHp - player.hp);
						player.chooseToDiscard('裨阖:请弃置一张牌', 'he', true);
						var chat = ['圣人之在天地间也！_《鬼谷子》', '反以观彼,复以知己！_《鬼谷子》', '知己反可知彼！'].randomGet()
						player.say(chat);
					},
				},
				"反应": {
					trigger: {
						target: "useCardToBefore",
					},
					forced: true,
					filter: function (event, player) {
						return event.card.name == 'sha';
					},
					content: function () {
						trigger.player.chooseToDiscard(true)
						var chat = ['象者象其事，比者比其辞！_《鬼谷子》', '重之袭之，反之复之！_《鬼谷子》'].randomGet()
						player.say(chat);
					},
				},
				"王霸": {
					trigger: {
						player: "loseEnd",
					},
					forced: true,
					filter: function (event, player) {
						for(var i = 0; i < event.cards.length; i++) {
							if(event.cards[i].original == 'h') return _status.currentPhase != player && (player.num('h') < player.maxHp);
						}
					},
					content: function () {
						player.draw(player.maxHp - player.num('h'));
						var chat = ['王霸之道，在乎民生！'].randomGet()
						player.say(chat);
					},
					ai: {
						threaten: 1.8,
					},
				},
				"三迁": {
					trigger: {
						player: ["damageAfter", "loseHpAfter"],
					},
					forced: true,
					content: function () {
						player.draw(2)
						player.chooseToDiscard(1, 'he', true);
						var chat = ['母之三迁，使吾完人也！'].randomGet()
						player.say(chat);
					},
				},
				"炼丹": {
					enable: "phaseUse",
					filterCard: true,
					position: "h",
					viewAs: {
						name: "wuzhong",
						suit: "club",
						number: 13,
						cards: [{
							"node": {
								"image": {},
								"info": {},
								"name": {},
								"name2": {},
								"background": {},
								"intro": {},
								"range": {}
							},
							"storage": {
								"uncheck": [],
								"vanishtag": []
							},
							"suit": "club",
							"number": 13,
							"name": "jinchan",
							"cardid": "7807738247",
							"_transform": "translateX(437.14285714285717px)",
							"clone": {
								"name": "jinchan",
								"suit": "club",
								"number": 13,
								"node": {
									"name": {},
									"info": {},
									"intro": {},
									"background": {},
									"image": {}
								},
								"_transitionEnded": true,
								"timeout": 529
							},
							"timeout": 429,
							"original": "h"
						}],
					},
					ai: {
						basic: {
							order: 1,
							useful: 4.5,
							value: 9.2,
						},
						result: {
							player: function (player) {
								if(player.countCards('h') >= player.hp - 1) return -1;
								if(player.hp < 3) return -1;
								return 1;
							},
							target: 2,
						},
						tag: {
							draw: 2,
						},
					},
				},
				"噬魂": {
					trigger: {
						player: "gainEnd",
					},
					forced: true,
					filter: function (event, player) {
						if(_status.currentPhase != player) return false;
						return event.cards && event.cards.length > 1;
					},
					content: function () {
						player.loseHp();
						player.draw();
					},
				},
				"胜天": {
					audio: "ext:诸子百家_战国:2",
					trigger: {
						global: "judge",
					},
					direct: true,
					filter: function (event, player) {
						return player.countCards('h') > 0;
					},
					content: function () {
						"step 0"
						player.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + '，' + get.prompt('胜天')).set('ai', function (card) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							var judging = _status.event.judging;
							var result = trigger.judge(card) - trigger.judge(judging);
							var attitude = get.attitude(player, trigger.player);
							if(attitude == 0 || result == 0) return 0;
							if(attitude > 0) {
								return result - get.value(card) / 2;
							} else {
								return -result - get.value(card) / 2;
							}
						}).set('judging', trigger.player.judging[0]);
						"step 1"
						if(result.bool) {
							player.respond(result.cards, 'highlight');
						} else {
							event.finish();
						}
						"step 2"
						if(result.bool) {
							player.logSkill('胜天');
							if(trigger.player.judging[0].clone) {
								trigger.player.judging[0].clone.classList.remove('thrownhighlight');
								game.broadcast(function (card) {
									if(card.clone) {
										card.clone.classList.remove('thrownhighlight');
									}
								}, trigger.player.judging[0]);
								game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
							}
							ui.discardPile.appendChild(trigger.player.judging[0]);
							trigger.player.judging[0] = result.cards[0];
							if(!get.owner(result.cards[0], 'judge')) {
								trigger.position.appendChild(result.cards[0]);
							}
							game.log(trigger.player, '的判定牌改为', result.cards[0]);
							game.delay(2);
						}
					},
					ai: {
						tag: {
							rejudge: 1,
						},
					},
				},
				"舟水": {
					trigger: {
						global: "judge",
					},
					direct: true,
					filter: function (event, player) {
						return player.hp < player.maxHp;
					},
					content: function () {
						trigger.player.chooseToDiscard('he', true);
						player.draw();
						var chat = ['水能载舟，亦能覆舟！_《荀子》'].randomGet()
						player.say(chat);
					},
				},
				"诱敌": {
					audio: "ext:诸子百家_战国:4",
					enable: "phaseUse",
					usable: 1,
					filterTarget: function (card, player, target) {
						return target.canUse({
							name: 'sha'
						}, player) && target.countCards('he');
					},
					content: function () {
						"step 0"
						target.chooseToUse({
							name: 'sha'
						}, player, -1, '诱敌：对' + get.translation(player) + '使用一张杀，或令其弃置你的两张牌').set('targetRequired', true);
						"step 1"
						if(result.bool == false && target.countCards('he') > 0) {
							player.discardPlayerCard(target, 2, 'hej', true);
						} else {
							event.finish();
						}
					},
					ai: {
						order: 4,
						expose: 0.2,
						result: {
							target: -1,
							player: function (player, target) {
								if(target.countCards('h') == 0) return 0;
								if(target.countCards('h') == 1) return -0.1;
								if(player.hp <= 2) return -2;
								if(player.countCards('h', 'shan') == 0) return -1;
								return -0.5;
							},
						},
						threaten: 1.1,
					},
				},
				"伏袭": {
					trigger: {
						target: "useCardToBefore",
					},
					forced: true,
					filter: function (event, player) {
						if(_status.currentPhase != player) return false;
						return event.card.name == 'sha';
					},
					content: function () {
						trigger.player.damage();
						trigger.player.chooseToDiscard(true);
						player.draw();
						var chat = ['兵者！以诈利，以利动！_《孙武兵法》', '以利动之，以卒待之！_《孙武兵法》', '明年的今天，我会祭祀你的！'].randomGet()
						player.say(chat);
					},
				},
				"诈利": {
					trigger: {
						target: "useCardToBefore",
					},
					forced: true,
					filter: function (event, player) {
						if(_status.currentPhase != player) return false;
						return event.card.name == 'sha';
					},
					content: function () {
						trigger.player.turnOver();
						trigger.player.chooseToDiscard(true);
						var chat = ['你中计了！', '到此为止了！'].randomGet()
						player.say(chat);
					},
				},
				"佯敌": {
					audio: "ext:诸子百家_战国:4",
					enable: "phaseUse",
					usable: 1,
					filterTarget: function (card, player, target) {
						return target.canUse({
							name: 'sha'
						}, player) && target.countCards('he');
					},
					content: function () {
						"step 0"
						target.chooseToUse({
							name: 'sha'
						}, player, -1, '佯敌：对' + get.translation(player) + '使用一张杀，或令其弃置你的x张牌').set('targetRequired', true);
						"step 1"
						if(result.bool == false && target.countCards('he') > 0) {
							player.discardPlayerCard(target, target.hp, 'he', true);
						} else {
							event.finish();
						}
					},
					ai: {
						order: 4,
						expose: 0.2,
						result: {
							target: -1,
							player: function (player, target) {
								if(target.countCards('h') == 0) return 0;
								if(target.countCards('h') == 1) return -0.1;
								if(player.hp <= 2) return -2;
								if(player.countCards('h', 'shan') == 0) return -1;
								return -0.5;
							},
						},
						threaten: 1.1,
					},
				},
				"元帅": {
					trigger: {
						player: "phaseBefore",
					},
					frequent: true,
					content: function () {
						'step 0'
						player.skip('phaseDraw');
						'step 1'
						player.draw(game.players.length)
						var chat = ['元帅之任，非常也！', '五国不进，那我就独进！'].randomGet()
						player.say(chat);
					},
					ai: {
						threaten: 1.3,
					},
				},
				"无敌": {
					mod: {
						maxHandcard: function (player, num) {
							return num += player.hp;
						},
					},
				},
				"先机": {
					group: ["先机_1", "先机_2"],
					subSkill: {
						"1": {
							trigger: {
								player: "phaseBegin",
							},
							frequent: true,
							content: function () {
								player.draw();
							},
							sub: true,
						},
						"2": {
							trigger: {
								global: "gameStart",
							},
							frequent: true,
							content: function () {
								player.draw(3)
								player.addSkill('shensu')
								player.addSkill('tieji');
							},
							sub: true,
						},
					},
				},
				"zz_bingsheng": {
					trigger: {
						player: ["useCard", "respond"],
					},
					forced: true,
					filter: function (event, player) {
						return(get.type(event.card) == 'basic' && event.cards[0] && event.cards[0] == event.card);;
					},
					content: function () {
						player.draw();
						var chat = ['兵者，国之大事，死生之地，存亡之道，不可不察也——《孙武兵法》', '不知三军之务而为军政，是谓縻军——《孙武兵法》'].randomGet()
						player.say(chat);
					},
					ai: {
						threaten: 1.4,
						noautowuxie: true,
					},
				},
				"zz_jiubian": {
					trigger: {
						player: "gainEnd",
					},
					usable: 3,
					direct: true,
					filter: function (event, player) {
						return event.cards && event.cards.length > 0;
					},
					content: function () {
						'step 0'
						game.delay(0.5);
						player.chooseTarget(get.prompt('zz_jiubian'), function (card, player, target) {
							return target != player && target.num('he') > 0;
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('zz_jiubian', result.targets);
							result.targets[0].chooseToDiscard(true, 'he');
							var chat = ['不能知九变之利者，不能得地利——《孙武兵法》', '无恃其不来，恃吾有以待——《孙武兵法》', '无恃其不攻，恃吾有所不可攻——《孙武兵法》'].randomGet()
							player.say(chat);
						}
					},
					ai: {
						expose: 0.2,
					},
				},
				"zz_yuanxin": {
					group: ["zz_yuanxin_1", "zz_yuanxin_2"],
					subSkill: {
						"1": {
							trigger: {
								player: "damageEnd",
							},
							forced: true,
							filter: function (event) {
								return event.source != undefined;
							},
							content: function () {
								trigger.source.loseHp(player.maxHp - player.hp);
								var chat = ['政善治，心善渊！——《道德经》', '心若深渊，则敌不可测！——《诸子》'].randomGet()
								player.say(chat);
							},
							ai: {
								threaten: 0.7,
							},
							sub: true,
						},
						"2": {
							mod: {
								targetEnabled: function (card, player, target) {
									if(get.type(card) == 'delay') {
										return false;
									}
								},
							},
							sub: true,
						},
					},
				},
				"zz_geqi": {
					skillAnimation: true,
					unique: true,
					derivation: "zz_yuanxin",
					trigger: {
						player: "phaseEnd",
					},
					mark: true,
					intro: {
						content: "limited",
					},
					forced: true,
					filter: function (event, player) {
						if(player.storage.zz_geqi) return false;
						return player.hp < 3;
					},
					content: function () {
						player.storage.zz_geqi = true;
						player.loseMaxHp();
						player.recover(player.maxHp - player.hp);
						player.draw(get.population('fan', 'zhong', 'zhu', 'nei'));
						player.insertPhase();
						player.addSkill('zz_yuanxin');
						player.awakenSkill('zz_geqi');
						var chat = ['若要图霸，我在这里！'].randomGet()
						player.say(chat);
					},
				},
				"zz_xinfa": {
					trigger: {
						player: "phaseBefore",
					},
					forced: true,
					filter: function (event, player) {
						return player.num('e') > 0;
					},
					content: function () {
						player.draw(player.num('e'));
						player.chooseToDiscard(player.num('e'), 'hej', true);
						var chat = ['穷则变，变则通，通则久——《周易》'].randomGet()
						player.say(chat);
					},
				},
				"zz_xinzheng": {
					trigger: {
						player: "discardAfter",
					},
					frequent: true,
					filter: function (event, player) {
						return event.cards && event.cards.length > 1;
					},
					content: function () {
						player.draw();
						player.phaseUse();
						var chat = ['水之性善，不能育民！', '火之性烈，可以安国！'].randomGet()
						player.say(chat);
					},
				},
				"zz_yanzhan": {
					trigger: {
						source: "damageEnd",
					},
					usable: 1,
					forced: true,
					filter: function (event, player) {
						if(_status.currentPhase != player) return false;
						return player.hp > 0;
					},
					content: function () {
						player.useCard({
							name: 'sha'
						}, trigger.player);
						var chat = ['战不必胜，不可以言战，攻不必取，不可以言攻——《尉缭子》', '兴亡安危，在于枹端——《尉缭子》'].randomGet()
						player.say(chat);
					},
				},
				"zz_zhanwei": {
					trigger: {
						source: "damageEnd",
					},
					forced: true,
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						trigger.player.chooseToDiscard(true, 'e');
						player.draw();
						var chat = ['善用兵者，夺人而不夺于人——《尉缭子》', '夺者心之机，令者一众心——《尉缭子》', '此威胜也——《尉缭子》', '止如堵墙，动如风雨——《尉缭子》'].randomGet()
						player.say(chat);
					},
					mod: {
						targetInRange: function (card) {
							if(card.name == 'sha') return true;
						},
					},
				},
				"zz_renben": {
					trigger: {
						player: "shaBegin",
					},
					forced: true,
					content: function () {
						player.draw()
						trigger.target.draw()
						player.changeHujia();
						var chat = ['杀人安人，杀之可也——《司马法》', '攻其国，亲其民——《司马法》', '古者，以仁为本——《司马法》'].randomGet()
						player.say(chat);
					},
				},
				"zz_yibing": {
					trigger: {
						player: "phaseEnd",
					},
					forced: true,
					filter: function (event, player) {
						return player.hujia ? true : false;
					},
					content: function () {
						"step 0"
						player.draw()
						player.gainMaxHp();
						var chat = ['吾为正义而战！', '义兵者，民心所向！'].randomGet()
						player.say(chat);
						"step 1"
						player.changeHujia(-1);
					},
					mod: {
						maxHandcard: function (player, num) {
							return num += player.hujia;
						},
					},
				},
				"zz_chiyan": {
					skillAnimation: true,
					unique: true,
					mark: true,
					intro: {
						content: "limited",
					},
					derivation: "zz_xianchan",
					trigger: {
						player: "phaseBegin",
					},
					forced: true,
					filter: function (event, player) {
						if(player.storage.zz_chiyan) return false;
						return player.maxHp > 4;
					},
					content: function () {
						player.storage.zz_chiyan = true;
						player.recover(player.maxHp - player.hp)
						player.awakenSkill('zz_yibing');
						player.awakenSkill('zz_chiyan');
						player.addSkill('zz_xianchan');
						var chat = ['犯我大齐者，吾必诛之！'].randomGet()
						player.say(chat);
					},
				},
				"zz_xianchan": {
					trigger: {
						player: "damageEnd",
						source: "damageEnd",
					},
					forced: true,
					content: function () {
						player.loseHp();
						var chat = ['吾为国尽忠，竟为尔等所陷！'].randomGet()
						player.say(chat);
					},
				},
				"zz_xuanmiao": {
					trigger: {
						target: "useCardToBefore",
					},
					forced: true,
					filter: function (event, player) {
						return event.card.name == 'sha';
					},
					content: function () {
						player.changeHujia();
						var chat = ['玄之又玄，众妙之门——《道德经》', '此之谓物化——《庄子》'].randomGet()
						player.say(chat);
					},
				},
				"zz_dunyin": {
					group: ["zz_dunyin_1", "zz_dunyin_2", "zz_dunyin_3"],
					subSkill: {
						"1": {
							mod: {
								targetEnabled: function (card, player, target) {
									if(target.hujia > 0) {
										if(get.type(card) == 'trick') return false;
									}
								},
							},
							sub: true,
						},
						"2": {
							mod: {
								targetEnabled: function (card, player, target) {
									if(target.hujia > 0) {
										if(get.type(card) == 'delay') return false;
									}
								},
							},
							sub: true,
						},
						"3": {
							mod: {
								maxHandcard: function (player, num) {
									return num += player.num('e');
								},
							},
							sub: true,
						},
					},
				},
				"zz_tiandao": {
					group: ["zz_tiandao_1", "zz_tiandao_2"],
					subSkill: {
						"1": {
							trigger: {
								global: "damageAfter",
							},
							direct: true,
							filter: function (event, player) {
								return event.player != player && player.hujia > 0;
							},
							content: function () {
								'step 0'
								player.chooseTarget(get.prompt('zz_tiandao'), function (card, player, target) {
									return target != player;
								}).ai = function (target) {
									return ai.get.attitude(player, target);
								};
								'step 1'
								if(result.bool) {
									player.logSkill('zz_tiandao', result.targets);
									result.targets[0].draw(player.hujia);
									player.draw(player.hujia);
									player.changeHujia(-player.hujia);
									var chat = ['苍天不佑，唯赖自己！', '天道酬勤也！', '合抱之木，生于毫末——《道德经》'].randomGet()
									player.say(chat);
								}
							},
							ai: {
								expose: 0.1,
							},
							sub: true,
						},
						"2": {
							trigger: {
								player: "phaseBegin",
							},
							forced: true,
							filter: function (event, player) {
								return player.hujia > 0;
							},
							content: function () {
								player.changeHujia(-player.hujia)
								player.skip('phaseDraw');
								var chat = ['为者败之，执者失之——《道德经》', '福兮祸所伏——《道德经》'].randomGet()
								player.say(chat)
							},
							sub: true,
						},
					},
				},
				"zz_yufeng": {
					group: ["zz_yufeng_1", "zz_yufeng_2", "zz_yufeng_3"],
					subSkill: {
						"1": {
							mod: {
								globalFrom: function (from, to, distance) {
									return distance - 1;
								},
							},
							sub: true,
						},
						"2": {
							mod: {
								globalTo: function (from, to, distance) {
									return distance + 1;
								},
							},
							sub: true,
						},
						"3": {
							mod: {
								maxHandcard: function (player, num) {
									return num + 1;
								},
							},
							sub: true,
						},
					},
				},
				"zz_chongxu": {
					trigger: {
						player: "damageBegin",
					},
					forced: true,
					priority: -999999,
					unique: true,
					filter: function (event) {
						return event.num > 1;
					},
					content: function () {
						trigger.untrigger();
						trigger.finish();
						player.draw(2);
						var chat = ['吾已飞登太虚，汝伤不到我！', '天下之大，无奇不有！'].randomGet()
						player.say(chat);
					},
				},
				"地力": {
					trigger: {
						player: ["phaseBegin", "phaseEnd"],
					},
					frequent: true,
					content: function () {
						player.draw()
					},
				},
				fajing: {
					group: ["fajing_1", "fajing_2"],
					subSkill: {
						"1": {
							enable: "phaseUse",
							filterCard: {
								color: "black",
							},
							position: "he",
							intro: {
								content: "cards",
								onunmark: "throw",
							},
							mark: true,
							filter: function (event, player) {
								return player.countCards('he', {
									color: 'black'
								}) > 0 && player.storage.fajing.length < 3;
							},
							filterTarget: function (card, player, target) {
								return target.countCards('he') > 0 && target != player;
							},
							init: function (player) {
								player.storage.fajing = [];
							},
							check: function (card) {
								return 6 - get.value(card);
							},
							content: function () {
								'step 0'
								player.choosePlayerCard('hej', target, true);
								var chat = ['法者，一国人也！', '刻不容缓！'].randomGet()
								player.say(chat);
								'step 1'
								if(result.bool && result.links && result.links.length) {
									target.$give(result.links, player);
									target.lose(result.links, ui.special);
									player.storage.fajing.push(result.links[0]);
									player.markSkill('fajing');
									player.syncStorage('fajing');
								}
							},
							ai: {
								order: 10.1,
								expose: 0.1,
								result: {
									target: function (player, target) {
										if(target.hasSkill('tuntian')) return 0;
										var es = target.getCards('e');
										var nh = target.countCards('h');
										var noe = (es.length == 0 || target.hasSkillTag('noe'));
										var noe2 = (es.length == 1 && es[0].name == 'baiyin' && target.hp < target.maxHp);
										var noh = (nh == 0 || target.hasSkillTag('noh'));
										if(noh && noe) return 0;
										if(noh && noe2) return 0.01;
										if(get.attitude(player, target) <= 0) return(target.countCards('he')) ? -1.5 : 1.5;
										var js = target.getCards('j');
										if(js.length) {
											var jj = js[0].viewAs ? {
												name: js[0].viewAs
											} : js[0];
											if(jj.name == 'guohe') return 3;
											if(js.length == 1 && get.effect(target, jj, target, player) >= 0) {
												return -1.5;
											}
											return 2;
										}
										return -1.5;
									},
								},
							},
							sub: true,
						},
						"2": {
							trigger: {
								player: "damageEnd",
							},
							forced: true,
							filter: function (event, player) {
								return player.storage.fajing.length >= 3;
							},
							content: function () {
								"step 0"
								player.storage.fajing.length -= 3;
								"step 1"
								player.draw();
								player.insertPhase();
								var chat = ['施之于国，必将强国！', '不循古，不守旧！'].randomGet()
								player.say(chat)
							},
							sub: true,
						},
					},
				},
				tantian: {
					trigger: {
						global: "judgeBefore",
					},
					content: function () {
						'step 0'
						player.showCards(ui.cardPile.firstChild);
						var chat = ['这就是天命！'].randomGet()
						player.say(chat);
						event.chosed = false;
						'step 1'
						player.chooseCard('是否将一张手牌置于牌堆顶？').set('ai', function (card) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							var judging = ui.cardPile.firstChild;
							var result = trigger.judge(card) - trigger.judge(judging);
							var attitude = get.attitude(player, trigger.player);
							if(attitude == 0 || result == 0) return 0;
							if(attitude > 0) {
								return result - get.value(card) / 2;
							} else {
								return -result - get.value(card) / 2;
							}
						});
						event.current = player;
						'step 2'
						if(result && result.cards) {
							event.card = result.cards[0];
							event.current.lose(result.cards, ui.special);
							game.broadcastAll(function (player) {
								var cardx = ui.create.card();
								cardx.classList.add('infohidden');
								cardx.classList.add('infoflip');
								player.$throw(cardx, 1000, 'nobroadcast');
							}, event.current);
						} else {
							if(trigger.player == player) {
								event.finish();
							} else if(event.chosed) {
								event.finish();
							} else {
								trigger.player.chooseCard('将一张手牌置于牌堆顶？', true).set('ai', function (card) {
									var trigger = _status.event.getTrigger();
									var player = trigger.player;
									var judging = ui.cardPile.firstChild;
									var result = trigger.judge(card) - trigger.judge(judging);
									var attitude = get.attitude(player, trigger.player);
									if(attitude == 0 || result == 0) return 0;
									if(attitude > 0) {
										return result - get.value(card) / 2;
									} else {
										return -result - get.value(card) / 2;
									}
									return -get.value(card);
								});
								event.chosed = true;
								event.current = trigger.player;
								event.goto(2);
							}
						}
						'step 3'
						if(event.current == game.me) game.delay(0.5);
						'step 4'
						if(event.card) {
							event.card.fix();
							ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
						}
					},
				},
				wuxing: {
					group: ["wuxing_1", "wuxing_2"],
					subSkill: {
						"1": {
							trigger: {
								player: "damageBefore",
							},
							forced: true,
							unique: true,
							filter: function (event) {
								return event.nature == 'fire';
							},
							content: function () {
								trigger.untrigger();
								trigger.finish();
								player.recover();
								var chat = ['相生相克，不可穷尽！'].randomGet()
								player.say(chat);
							},
							ai: {
								effect: {
									target: function (card) {
										if(get.tag(card, 'fireDamage')) {
											return [0, 2];
										}
									},
								},
							},
							sub: true,
						},
						"2": {
							trigger: {
								player: "damageBefore",
							},
							forced: true,
							unique: true,
							filter: function (event) {
								return event.nature == 'thunder';
							},
							content: function () {
								trigger.untrigger();
								trigger.finish();
								player.recover();
								var chat = ['相生相克，不可穷尽！'].randomGet()
								player.say(chat);
							},
							ai: {
								effect: {
									target: function (card) {
										if(get.tag(card, 'fireDamage')) {
											return [0, 2];
										}
									},
								},
							},
							sub: true,
						},
					},
					mod: {
						maxHandcard: function (player, num) {
							if(player.hp < player.maxHp) return num + player.maxHp - player.hp;
						},
					},
				},
				"坚白": {
					trigger: {
						player: ["chooseToCompareAfter", "compareMultipleAfter"],
						target: ["chooseToCompareAfter", "compareMultipleAfter"],
					},
					filter: function (event, player) {
						if(event.preserve) return false;
						if(player == event.player) {
							if(event.card1.number > event.card2.number) {
								return !get.owner(event.card2);
							} else {
								return !get.owner(event.card1);
							}
						} else {
							if(event.card1.number < event.card2.number) {
								return !get.owner(event.card1);
							} else {
								return !get.owner(event.card2);
							}
						}
					},
					check: function (event, player) {
						if(player == event.player) {
							if(event.card1.number > event.card2.number) {
								return event.card2.name != 'du';
							} else {
								return event.card1.name != 'du';
							}
						} else {
							if(event.card1.number < event.card2.number) {
								return event.card1.name != 'du';
							} else {
								return event.card2.name != 'du';
							}
						}
					},
					content: function () {
						if(player == trigger.player) {
							if(trigger.card1.number > trigger.card2.number) {
								player.gain(trigger.card2, 'gain2');
								player.draw(2);
								var chat = ['阁下之言，真是愚昧无知！'].randomGet()
								player.say(chat);
							} else {
								player.chooseToDiscard(true, 'j');
								var chat = ['恕在下直言！'].randomGet()
								player.say(chat);
								player.gain(trigger.card1, 'gain2');
							}
						} else {
							if(trigger.card1.number < trigger.card2.number) {
								player.gain(trigger.card1, 'gain2');
							} else {
								player.gain(trigger.card2, 'gain2');
							}
						}
					},
				},
				"zz_mingshi": {
					trigger: {
						player: "phaseUseBegin",
					},
					direct: true,
					filter: function (event, player) {
						return player.countCards('h') > 0;
					},
					content: function () {
						"step 0"
						player.chooseTarget(get.prompt('zz_mingshi'), function (card, player, target) {
							return player != target && target.countCards('h') > 0;
						}).set('ai', function (target) {
							return -get.attitude(_status.event.player, target) / target.countCards('h');
						});
						"step 1"
						if(result.bool) {
							player.logSkill('zz_mingshi', result.targets[0]);
							player.chooseToCompare(result.targets[0]);
						} else {
							event.finish();
						}
						"step 2"
						if(result.bool) {
							player.addTempSkill('qiaoshui3');
						} else {
							player.addTempSkill('qiaoshui2');
						}
					},
					ai: {
						expose: 0.1,
					},
				},
				"贵己": {
					mod: {
						globalTo: function (from, to, distance) {
							return distance + 2;
						},
					},
				},
				"不拔": {
					trigger: {
						player: "loseEnd",
					},
					forced: true,
					filter: function (event, player) {
						return player.num('h') < player.maxHp;
					},
					content: function () {
						player.draw();
						var chat = ['不取一毫，不利天下！', '余不利人，一毫不与！'].randomGet()
						player.say(chat);
					},
					ai: {
						threaten: 1.8,
					},
				},
				"饔飧": {
					enable: "phaseUse",
					filterCard: true,
					usable: 1,
					position: "e",
					viewAs: {
						name: "tao",
						suit: "diamond",
						number: 5,
						cards: [{
							"node": {
								"image": {},
								"info": {},
								"name": {},
								"name2": {},
								"background": {},
								"intro": {},
								"range": {}
							},
							"storage": {
								"uncheck": [],
								"vanishtag": []
							},
							"suit": "diamond",
							"number": 5,
							"name": "muniu",
							"cardid": "1602077314",
							"clone": {
								"name": "muniu",
								"suit": "diamond",
								"number": 5,
								"node": {
									"name": {},
									"info": {},
									"intro": {},
									"background": {},
									"image": {}
								},
								"_transitionEnded": true,
								"timeout": 2542
							},
							"original": "e",
							"timeout": 2458
						}],
					},
					ai: {
						basic: {
							order: function (card, player) {
								if(player.hasSkillTag('pretao')) return 5;
								return 2;
							},
							useful: [8, 6.5, 5, 4],
							value: [8, 6.5, 5, 4],
						},
						result: {
							target: function (player, target) {
								// if(player==target&&player.hp<=0) return 2;
								var nd = player.needsToDiscard();
								var keep = false;
								if(nd <= 0) {
									keep = true;
								} else if(nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
									keep = true;
								}
								var mode = get.mode();
								if(target.hp >= 2 && keep && target.hasFriend()) {
									if(target.hp > 2 || nd == 0) return 0;
									if(target.hp == 2) {
										if(game.hasPlayer(function (current) {
											if(target != current && get.attitude(target, current) >= 3) {
												if(current.hp <= 1) return true;
												if((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
											}
										})) {
											return 0;
										}
									}
								}
								if(target.hp < 0 && target != player && target.identity != 'zhu') return 0;
								var att = get.attitude(player, target);
								if(att < 3 && att >= 0 && player != target) return 0;
								var tri = _status.event.getTrigger();
								if(mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
									if(tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
										var num = game.countPlayer(function (current) {
											if(current.identity == 'fan') {
												return current.countCards('h', 'tao');
											}
										});
										if(num > 1 && player == target) return 2;
										return 0;
									}
								}
								if(mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
									if(tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
										return 0;
									}
								}
								if(mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) {
									return 0;
								}
								return 2;
							},
						},
						tag: {
							recover: 1,
							save: 1,
						},
					},
				},
				"zz_ailei": {
					audio: "ext:诸子百家:2",
					trigger: {
						player: "recoverAfter",
					},
					direct: true,
					content: function () {
						"step 0"
						var chat = ['饔飧而治，缗者自安！', '天道酬勤，切勿不劳而获！'].randomGet()
						player.say(chat);
						player.chooseTarget(get.prompt('zz_ailei'), function (card, player, target) {
							return target != player;
						}).set('ai', function (target) {
							return get.attitude(_status.event.player, target);
						});
						"step 1"
						if(result.bool) {
							player.logSkill('zz_ailei', result.targets);
							result.targets[0].chooseDrawRecover(2, true);
						}
					},
					ai: {
						threaten: 0.8,
						expose: 0.1,
					},
				},
				"居货": {
					group: ["居货_1", "居货_2"],
					subSkill: {
						"1": {
							trigger: {
								global: ["turnOverAfter", "linkAfter"],
							},
							filter: function (event, player) {
								if(event.name == 'link') return event.player.isLinked();
								return true;
							},
							check: function (event, player) {
								return get.attitude(player, event.player) > 0;
							},
							logTarget: "player",
							content: function () {
								player.draw();
								var chat = ['贱买贵卖，才是商人本色！', '这货色，不值钱！', '看到了吗？这才是宝物！'].randomGet()
								player.say(chat)
							},
							ai: {
								expose: 0.2,
							},
							sub: true,
						},
						"2": {
							mod: {
								maxHandcard: function (player, num) {
									return num += 2;
								},
							},
							sub: true,
						},
					},
				},
				"千金": {
					mod: {
						targetEnabled: function (card) {
							if((get.type(card) == 'trick' || get.type(card) == 'delay') && get.color(card) == 'red') return false;
						},
					},
				},
				"天人": {
					trigger: {
						global: "judge",
					},
					direct: true,
					filter: function (event, player) {
						return player.countCards('h') > player.hp;
					},
					content: function () {
						"step 0"
						player.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + '，' + get.prompt('天人')).set('ai', function (card) {
							var trigger = _status.event.getTrigger();
							var player = _status.event.player;
							var judging = _status.event.judging;
							var result = trigger.judge(card) - trigger.judge(judging);
							var attitude = get.attitude(player, trigger.player);
							if(attitude == 0 || result == 0) return 0;
							if(attitude > 0) {
								return result - get.value(card) / 2;
							} else {
								return -result - get.value(card) / 2;
							}
						}).set('judging', trigger.player.judging[0]);
						"step 1"
						if(result.bool) {
							player.respond(result.cards, 'highlight');
							var chat = ['大道恒在，天命难违！'].randomGet()
							player.say(chat);
						} else {
							event.finish();
						}
						"step 2"
						if(result.bool) {
							player.logSkill('天人');
							if(trigger.player.judging[0].clone) {
								trigger.player.judging[0].clone.classList.remove('thrownhighlight');
								game.broadcast(function (card) {
									if(card.clone) {
										card.clone.classList.remove('thrownhighlight');
									}
								}, trigger.player.judging[0]);
								game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
							}
							ui.discardPile.appendChild(trigger.player.judging[0]);
							trigger.player.judging[0] = result.cards[0];
							if(!get.owner(result.cards[0], 'judge')) {
								trigger.position.appendChild(result.cards[0]);
							}
							game.log(trigger.player, '的判定牌改为', result.cards[0]);
							game.delay(2);
						}
					},
					ai: {
						tag: {
							rejudge: 1,
						},
					},
					group: "天人_1",
					subSkill: {
						"1": {
							trigger: {
								global: "judge",
							},
							direct: true,
							filter: function (event, player) {
								return player.countCards('h') <= player.hp;
							},
							content: function () {
								player.draw();
								var chat = ['时机未到！', '修心养性，以待君命！'].randomGet()
								player.say(chat)
							},
							sub: true,
						},
					},
				},
				"合一": {
					trigger: {
						player: "phaseBefore",
					},
					filter: function (event, player) {
						return player.num('h') == player.hp;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('合一'), function (card, player, target) {
							return target != player;
						}).set('ai', function (target) {
							return ai.get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('合一', result.targets);
							result.targets[0].draw(2);
							result.targets[0].recover();
							player.draw(2);
							player.recover();
							var chat = ['君上，此即天人之际！'].randomGet()
							player.say(chat);
						};
					},
				},
				"兵仙": {
					enable: "phaseUse",
					filterCard: true,
					position: "hej",
					usable: 3,
					viewAs: {
						name: "sha",
						suit: "diamond",
						number: 12,
						cards: [{
							"node": {
								"image": {},
								"info": {},
								"name": {},
								"name2": {},
								"background": {},
								"intro": {},
								"range": {}
							},
							"storage": {},
							"vanishtag": [],
							"_uncheck": [],
							"suit": "diamond",
							"number": 12,
							"name": "shan",
							"cardid": "6021129382",
							"original": "h",
							"_transform": "translateX(0px)",
							"clone": {
								"name": "shan",
								"suit": "diamond",
								"number": 12,
								"node": {
									"name": {},
									"info": {},
									"intro": {},
									"background": {},
									"image": {}
								},
								"_transitionEnded": true,
								"timeout": 7604
							},
							"timeout": 7394
						}],
					},
					ai: {
						basic: {
							useful: [5, 1],
							value: [5, 1],
						},
						order: function () {
							if(_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
							return 3;
						},
						result: {
							target: function (player, target) {
								if(player.hasSkill('jiu') && !target.getEquip('baiyin')) {
									if(get.attitude(player, target) > 0) {
										return -6;
									} else {
										return -3;
									}
								}
								return -1.5;
							},
						},
						tag: {
							respond: 1,
							respondShan: 1,
							damage: function (card) {
								if(card.nature == 'poison') return;
								return 1;
							},
							natureDamage: function (card) {
								if(card.nature) return 1;
							},
							fireDamage: function (card, nature) {
								if(card.nature == 'fire') return 1;
							},
							thunderDamage: function (card, nature) {
								if(card.nature == 'thunder') return 1;
							},
							poisonDamage: function (card, nature) {
								if(card.nature == 'poison') return 1;
							},
						},
					},
				},
				"因势": {
					mod: {
						cardUsable: function (card, player, num) {
							if(card.name == 'sha') return game.players.length;
						},
					},
					ai: {
						unequip: true,
						skillTagFilter: function (player, tag, arg) {
							if(!get.zhu(player, 'shouyue')) return false;
							if(arg && arg.name == 'sha') return true;
							return false;
						},
					},
				},
				"zz_ML": {
					trigger: {
						player: "phaseBefore",
					},
					unique: true,
					content: function () {
						player.init('zz_ZGL')
						player.removeSkill('zz_GY')
						player.removeSkill('zz_ML')
						player.draw();
						var chat = ['亮，让我们一起努力吧！'].randomGet()
						player.say(chat)
					},
				},
				"zz_GY": {
					trigger: {
						player: "phaseEnd",
					},
					content: function () {
						player.chooseToDiscard([1, player.num('hej')], 'hej', true)
						var chat = ['你别去归隐，不复奢望！'].randomGet()
						player.say(chat)
					},
					mod: {
						targetEnabled: function (card, player, target) {
							if(_status.currentPhase == player && target.num('hej') < player.num('hej')) return false;
						},
					},
				},
				"zz_WL": {
					trigger: {
						player: "phaseUseAfter",
					},
					unique: true,
					content: function () {
						player.init('zz_HYY')
						player.removeSkill('zz_WL')
						player.removeSkill('zz_JH')
						var chat = ['潜居待时，是为神智！'].randomGet()
						player.say(chat)
					},
				},
				"zz_JH": {
					trigger: {
						player: "huogongBegin",
					},
					content: function () {
						player.draw();
						var chat = ['发火有日，起火有时——《孙武兵法》', '齐备硫磺焰硝，待命引火！'].randomGet()
						player.say(chat)
					},
					group: "zz_JH_1",
					subSkill: {
						"1": {
							enable: "phaseUse",
							filterCard: true,
							position: "hej",
							usable: 1,
							viewAs: {
								name: "huogong",
								suit: "club",
								number: 13,
								cards: [{
									"node": {
										"image": {},
										"info": {},
										"name": {},
										"name2": {},
										"background": {},
										"intro": {},
										"range": {}
									},
									"storage": {},
									"vanishtag": [],
									"_uncheck": [],
									"suit": "club",
									"number": 13,
									"name": "sha",
									"cardid": "4536044426",
									"clone": {
										"name": "sha",
										"suit": "club",
										"number": 13,
										"node": {
											"name": {},
											"info": {},
											"intro": {},
											"background": {},
											"image": {}
										},
										"_transitionEnded": true,
										"timeout": 10043
									},
									"timeout": 9996,
									"original": "h"
								}],
							},
							ai: {
								basic: {
									order: 4,
									value: [3, 1],
									useful: 1,
								},
								wuxie: function (target, card, player, current, state) {
									if(get.attitude(current, player) >= 0 && state > 0) return false;
								},
								result: {
									player: function (player) {
										var nh = player.countCards('h');
										if(nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
											if(typeof _status.event.filterCard == 'function' && _status.event.filterCard({
												name: 'huogong'
											})) {
												return -10;
											}
											if(_status.event.skill) {
												var viewAs = get.info(_status.event.skill).viewAs;
												if(viewAs == 'huogong') return -10;
												if(viewAs && viewAs.name == 'huogong') return -10;
											}
										}
										return 0;
									},
									target: function (player, target) {
										if(target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
										if(player.countCards('h') <= 1) return 0;
										if(target == player) {
											if(typeof _status.event.filterCard == 'function' && _status.event.filterCard({
												name: 'huogong'
											})) {
												return -1.5;
											}
											if(_status.event.skill) {
												var viewAs = get.info(_status.event.skill).viewAs;
												if(viewAs == 'huogong') return -1.5;
												if(viewAs && viewAs.name == 'huogong') return -1.5;
											}
											return 0;
										}
										return -1.5;
									},
								},
								tag: {
									damage: 1,
									fireDamage: 1,
									natureDamage: 1,
									norepeat: 1,
								},
							},
							sub: true,
						},
					},
				},
				"zz_QM": {
					trigger: {
						player: "phaseBefore",
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('zz_QM'), function (card, player, target) {
							return target != player;
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('zz_QM', result.targets);
							result.targets[0].goMad({
								player: 'phaseAfter'
							})
							var chat = ['谋当者胜，不当者亡！', '谋者，帝王术也！'].randomGet()
							player.say(chat)
						};
					},
				},
				"zz_CQ": {
					trigger: {
						player: "phaseEnd",
					},
					filter: function (event, player) {
						return player.num('h') > 0 && player.num('e') > 0;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('zz_CQ'), function (card, player, target) {
							return target != player;
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('zz_CQ', result.targets);
							result.targets[0].changeHujia(-100);
							result.targets[0].damage();
							result.targets[0].skip('phaseUse')
							player.chooseToDiscard(player.num('h'), 'h', true);
							player.chooseToDiscard(1, 'e', true);
							player.changeHujia(-100);
							player.changeHujia()
							var chat = ['秦王政，拿命来！', '我要你血债血偿！'].randomGet()
							player.say(chat)
						};
					},
				},
				"zz_JX": {
					trigger: {
						player: "damageEnd",
					},
					content: function () {
						var n = [1, 2, 3, 4].randomGet();
						if(n == 1) trigger.source.chooseToDiscard(1, 'e', true);
						if(n == 2) trigger.source.chooseToDiscard(1, 'h', true);
						if(n == 3) player.recover();
						if(n == 4) player.draw(2);
						var chat = ['宁我负人，毋人负我——《三国志》', '混账，拖出去斩了！'].randomGet()
						player.say(chat)
					},
				},
				"zz_TY": {
					srlose: true,
					trigger: {
						global: "phaseBegin",
					},
					frequent: true,
					content: function () {
						"step 0"
						if(player.isUnderControl()) {
							game.modeSwapPlayer(player);
						}
						var cards = get.cards(Math.min(2, game.players.length));
						event.cards = cards;
						var switchToAuto = function () {
							_status.imchoosing = false;
							if(event.dialog) event.dialog.close();
							if(event.control) event.control.close();
							var top = [];
							if(event.triggername == 'phaseBegin') {
								var judges = player.node.judges.childNodes;
								var stopped = false;
								if(!player.countCards('h', 'wuxie')) {
									for(var i = 0; i < judges.length; i++) {
										var judge = get.judge(judges[i]);
										cards.sort(function (a, b) {
											return judge(b) - judge(a);
										});
										if(judge(cards[0]) < 0) {
											stopped = true;
											break;
										} else {
											top.unshift(cards.shift());
										}
									}
								}
							} else {
								var judges = player.next.node.judges.childNodes;
								var stopped = false;
								if(get.attitude(player, player.next) > 0) {
									for(var i = 0; i < judges.length; i++) {
										var judge = get.judge(judges[i]);
										cards.sort(function (a, b) {
											return judge(b) - judge(a);
										});
										if(judge(cards[0]) < 0) {
											stopped = true;
											break;
										} else {
											top.unshift(cards.shift());
										}
									}
								}
							}
							var bottom;
							if(!stopped) {
								cards.sort(function (a, b) {
									return get.value(b, player) - get.value(a, player);
								});
								while(cards.length) {
									if(get.value(cards[0], player) <= 5) break;
									top.unshift(cards.shift());
								}
							}
							bottom = cards;
							for(var i = 0; i < top.length; i++) {
								ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
							}
							for(i = 0; i < bottom.length; i++) {
								ui.cardPile.appendChild(bottom[i]);
							}
							player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
							game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
							game.delay(2);
						}
						var chooseButton = function (online, player, cards) {
							var event = _status.event;
							player = player || event.player;
							cards = cards || event.cards;
							event.top = [];
							event.bottom = [];
							event.status = true;
							event.dialog = ui.create.dialog('按顺序选择置于牌堆顶的牌（先选择的在上）', cards);
							event.switchToAuto = function () {
								event._result = 'ai';
								event.dialog.close();
								event.control.close();
								_status.imchoosing = false;
							},
							event.control = ui.create.control('ok', 'pileTop', 'pileBottom', function (link) {
								var event = _status.event;
								if(link == 'ok') {
									if(online) {
										event._result = {
											top: [],
											bottom: []
										}
										for(var i = 0; i < event.top.length; i++) {
											event._result.top.push(event.top[i].link);
										}
										for(var i = 0; i < event.bottom.length; i++) {
											event._result.bottom.push(event.bottom[i].link);
										}
									} else {
										var i;
										for(i = 0; i < event.top.length; i++) {
											ui.cardPile.insertBefore(event.top[i].link, ui.cardPile.firstChild);
										}
										for(i = 0; i < event.bottom.length; i++) {
											ui.cardPile.appendChild(event.bottom[i].link);
										}
										for(i = 0; i < event.dialog.buttons.length; i++) {
											if(event.dialog.buttons[i].classList.contains('glow') == false && event.dialog.buttons[i].classList.contains('target') == false) ui.cardPile.appendChild(event.dialog.buttons[i].link);
										}
										player.popup(get.cnNumber(event.top.length) + '上' + get.cnNumber(event.cards.length - event.top.length) + '下');
										game.log(player, '将' + get.cnNumber(event.top.length) + '张牌置于牌堆顶');
									}
									event.dialog.close();
									event.control.close();
									game.resume();
									_status.imchoosing = false;
								} else if(link == 'pileTop') {
									event.status = true;
									event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆顶的牌';
								} else {
									event.status = false;
									event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆底的牌';
								}
							})
							for(var i = 0; i < event.dialog.buttons.length; i++) {
								event.dialog.buttons[i].classList.add('selectable');
							}
							event.custom.replace.button = function (link) {
								var event = _status.event;
								if(link.classList.contains('target')) {
									link.classList.remove('target');
									event.top.remove(link);
								} else if(link.classList.contains('glow')) {
									link.classList.remove('glow');
									event.bottom.remove(link);
								} else if(event.status) {
									link.classList.add('target');
									event.top.unshift(link);
								} else {
									link.classList.add('glow');
									event.bottom.push(link);
								}
							}
							event.custom.replace.window = function () {
								for(var i = 0; i < _status.event.dialog.buttons.length; i++) {
									_status.event.dialog.buttons[i].classList.remove('target');
									_status.event.dialog.buttons[i].classList.remove('glow');
									_status.event.top.length = 0;
									_status.event.bottom.length = 0;
								}
							}
							game.pause();
							game.countChoose();
						}
						event.switchToAuto = switchToAuto;
						if(event.isMine()) {
							chooseButton();
							event.finish();
						} else if(event.isOnline()) {
							event.player.send(chooseButton, true, event.player, event.cards);
							event.player.wait();
							game.pause();
						} else {
							event.switchToAuto();
							event.finish();
						}
						"step 1"
						if(event.result == 'ai' || !event.result) {
							event.switchToAuto();
						} else {
							var top = event.result.top || [];
							var bottom = event.result.bottom || [];
							for(var i = 0; i < top.length; i++) {
								ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
							}
							for(i = 0; i < bottom.length; i++) {
								ui.cardPile.appendChild(bottom[i]);
							}
							for(i = 0; i < event.cards.length; i++) {
								if(!top.contains(event.cards[i]) && !bottom.contains(event.cards[i])) {
									ui.cardPile.appendChild(event.cards[i]);
								}
							}
							player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(event.cards.length - top.length) + '下');
							game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
							game.delay(2);
						}
					},
					ai: {
						threaten: 1.2,
					},
				},
				"木圣": {
					enable: "chooseToRespond",
					filterCard: true,
					position: "he",
					viewAs: {
						name: "shan",
					},
					ai: {
						basic: {
							useful: [7, 2],
							value: [7, 2],
						},
					},
				},
				"非马": {
					trigger: {
						target: "chooseToCompareBefore",
					},
					content: function () {
						trigger.untrigger();
						trigger.finish();
						player.draw(2);
						var chat = ['此白马耶？此非马也！', '白马非马，汝等非人！'].randomGet()
						player.say(chat);
					},
				},
				"诡辩": {
					trigger: {
						player: "phaseBefore",
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('诡辩'), [1, player.maxHp - player.hp], function (card, player, target) {
							return target != player;
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);
						});
						'step 1'
						if(result.bool) {
							for(var i = 0; i < result.targets.length; i++) {
								player.logSkill('诡辩', result.targets);
								result.targets[i].chooseToCompare(player);
								result.targets[i].chooseToDiscard(1, 'h', true)
								var chat = ['一较高下吧！'].randomGet()
								player.say(chat)
							}
						}
					},
				},
				"离骚": {
					mod: {
						judge: function (player, result) {
							if(_status.event.type == 'phase') {
								if(result.bool == false) {
									result.bool = null;
								} else {
									result.bool = false;
								}
							}
						},
					},
				},
				"zz_MZ": {
					enable: "phaseUse",
					filter: function (event, player) {
						return player.hp > 0;
					},
					filterTarget: function (card, player, target) {
						return target.num('hej') > 0 && !target.hasSkill('zz_MZ2');
					},
					content: function () {
						target.addTempSkill('zz_MZ2', 'phaseAfter');
						target.chooseToDiscard(1, 'hej', true)
						target.draw();
						var chat = ['忽奔走以先后兮，及前王之崇武——《离骚》', '高余冠之岌岌兮，长余佩之陆离——《离骚》'].randomGet()
						player.say(chat);
					},
				},
				"天问": {
					trigger: {
						player: "phaseBefore",
					},
					content: function () {
						"step 0"
						player.judge();
						var chat = ['欲少留此灵锁兮，日乎乎其将暮——《离骚》', '应龙何画？河海何历？——《天问》', '羲和之未杨，若华何光？——《天问》'].randomGet()
						player.say(chat);
						"step 1"
						switch(get.suit(result.card)) {
							case 'heart':
								player.recover();
								break;
							case 'diamond':
								player.draw(2);
								break;
							case 'club':
								player.chooseToDiscard('he', 1, true);
								break;
							case 'spade':
								player.damage();
								break;
						}
					},
					ai: {
						expose: 0.3,
					},
				},
				"zz_MZ2": {},
				"神勇": {
					trigger: {
						source: "damageEnd",
					},
					filter: function (event, player) {
						return player.hp > event.player.hp && event.player.hp > 0;
					},
					content: function () {
						"step 0"
						var att = get.attitude(trigger.player, player);
						var bool = 0;
						if(att < 0) {
							if(trigger.player.countCards('e') == 0 && trigger.player.countCards('h') > 2) bool = 1;
							else if(trigger.player.countCards('he') == 0) bool = 1;
						} else if(att == 0 && trigger.player.countCards('he') == 0) {
							bool = 1;
						}
						player.chooseControl(function () {
							return bool;
						}).set('prompt', '神勇').set('choiceList', ['令其弃置所有手牌', '令其弃置所有装备区里的牌']);
						"step 1"
						if(result.control == '选项一') {
							trigger.player.chooseToDiscard(999, 'h', true);
							event.finish();
							var chat = ['无能之辈，也想阻挡我？'].randomGet()
							player.say(chat);
						} else if(trigger.player.countCards('he')) {
							var chat = ['神当杀神，佛当杀佛！'].randomGet()
							player.say(chat)
							trigger.player.chooseToDiscard(999, 'e', true)
						} else {
							event.finish();
						}
					},
					ai: {
						threaten: 1.2,
					},
				},
				"圄城": {
					trigger: {
						player: "loseHpBefore",
					},
					forced: true,
					unique: true,
					content: function () {
						trigger.untrigger();
						trigger.finish();
						player.draw();
					},
					ai: {
						effect: {
							target: function (card) {
								if(get.tag(card, 'loseHp')) {
									return [0, 2];
								}
							},
						},
					},
				},
				"守御": {
					trigger: {
						player: "phaseUseBefore",
					},
					filter: function (event, player) {
						return player.num('he') > 5;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('守御'), [1, player.hp], function (card, player, target) {
							return true;
						}).set('ai', function (target) {
							return ai.get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {
							for(var i = 0; i < result.targets.length; i++) {
								var chat = ['足下放心，吾深得师父之法！', '哪里有进攻，哪里就有我！'].randomGet()
								player.say(chat)
								player.logSkill('守御', result.targets);
								result.targets[i].draw();
								player.chooseToDiscard(2, 'he', true)
								result.targets[i].changeHujia();
							}
						};
					},
					mod: {
						maxHandcard: function (player, num) {
							return num += game.players.length;
						},
					},
				},
				"营党": {
					enable: "phaseUse",
					usable: 1,
					filterCard: {
						name: "sha",
					},
					position: "h",
					viewAs: {
						name: "tiesuo",
						suit: "club",
						number: 11,
						cards: [{
							"node": {
								"image": {},
								"info": {},
								"name": {},
								"name2": {},
								"background": {},
								"intro": {},
								"range": {}
							},
							"storage": {},
							"vanishtag": [],
							"_uncheck": [],
							"suit": "club",
							"number": 11,
							"name": "sha",
							"cardid": "1000233289",
							"_transform": "translateX(336px)",
							"clone": {
								"name": "sha",
								"suit": "club",
								"number": 11,
								"node": {
									"name": {},
									"info": {},
									"intro": {},
									"background": {},
									"image": {}
								},
								"_transitionEnded": true,
								"timeout": 575
							},
							"timeout": 550,
							"original": "h"
						}],
					},
					ai: {
						wuxie: function () {
							if(Math.random() < 0.5) return 0;
						},
						basic: {
							useful: 4,
							value: 4,
							order: 7,
						},
						result: {
							target: function (player, target) {
								if(target.isLinked()) return 1;
								if(get.attitude(player, target) >= 0) return -1;
								if(ui.selected.targets.length) return -1;
								if(game.hasPlayer(function (current) {
									return get.attitude(player, current) <= -1 && current != target && !current.isLinked();
								})) {
									return -1;
								}
								return 0;
							},
						},
						tag: {
							multitarget: 1,
							multineg: 1,
							norepeat: 1,
						},
					},
				},
				"焚书": {
					enable: "phaseUse",
					usable: 1,
					filter: function (event, player) {
						return player.hp > 0 && player.num('e') > 0;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('焚书'), function (card, player, target) {
							return target != player;
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('焚书', result.targets);
							result.targets[0].damage('fire');
							result.targets[0].chooseToDiscard(true)
							player.loseHp()
							player.chooseToDiscard(1, 'e', true)
							var chat = ['烧吧烧吧，让六国从此不存！'].randomGet()
							player.say(chat)
						};
					},
				},
				"治邺": {
					enable: "phaseUse",
					usable: 1,
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('治邺'), function (card, player, target) {
							return target != player && target.num('h') > player.num('h');
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('治邺', result.targets);
							result.targets[0].chooseToDiscard(2, 'h', true)
							player.chooseToDiscard(1, 'h', true)
							var chat = ['君上放心，吾必令邺大治！', '大胆刁民,胆敢犯我大魏之法！'].randomGet()
							player.say(chat)
						};
					},
				},
				"畯法": {
					trigger: {
						global: "discardAfter",
					},
					usable: 1,
					filter: function (event, player) {
						return event.player != player && _status.currentPhase == player && event.cards && event.cards.length > 1;;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('畯法'), function (card, player, target) {
							return target != player;
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('畯法', result.targets);
							result.targets[0].damage();
							player.chooseToDiscard(1, 'he', true)
							var chat = ['刑法严明，才是兴国之道！', '来人，把她给我丢下去！', '妖言惑众，罪该诛！'].randomGet()
							player.say(chat);
						};
					},
				},
				"威德": {
					trigger: {
						source: "damageBegin",
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('威德'), function (card, player, target) {
							return target != player;
						}).set('ai', function (target) {
							return ai.get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('威德', result.targets);
							result.targets[0].draw();
							trigger.player.chooseToDiscard('he', true)
							var chat = ['君威之下，必出忠臣！', '威者所以御下也，德者所以得人心也！'].randomGet()
							player.say(chat)
						};
					},
				},
				"因循": {
					trigger: {
						player: "phaseDiscardBefore",
					},
					filter: function (event, player) {
						return player.num('h') > player.hp;
					},
					content: function () {
						trigger.untrigger();
						trigger.finish();
						player.draw();
						var chat = ['循循不可败也！', '因其势，循其道！'].randomGet()
						player.say(chat);
					},
				},
				"权术": {
					enable: "phaseUse",
					usable: 1,
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('权术'), function (card, player, target) {
							return target != player && target.num('hej') > 0;
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('权术', result.targets);
							result.targets[0].draw()
							player.gainPlayerCard(result.targets[0], 2, true, 'hej');
							event.finish();
							var chat = ['不明权谋而国强者，未之有也！'].randomGet()
							player.say(chat)
						};
					},
				},
				"辅法": {
					trigger: {
						player: "gainEnd",
					},
					direct: true,
					filter: function (event, player) {
						return event.cards && event.cards.length > 1;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('辅法'), function (card, player, target) {
							return true;
						}).set('ai', function (target) {
							return get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('辅法', result.targets);
							result.targets[0].draw();
							var chat = ['法者，国之辅也！'].randomGet()
							player.say(chat)
						}
					},
				},
				"合纵": {
					trigger: {
						player: "damageEnd",
					},
					filter: function (event, player) {
						return player.hp > 0 && player.hujia < 1;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('合纵'), function (card, player, target) {
							return target != player;
						}).set('ai', function (target) {
							return ai.get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('合纵', result.targets);
							result.targets[0].draw();
							result.targets[0].changeHujia();
							player.draw();
							player.changeHujia(2);
							var chat = ['欲抗秦国，非合纵不可！', '一人之斗，不若二人也！'].randomGet()
							player.say(chat);
						};
					},
				},
				"连横": {
					trigger: {
						player: "phaseBefore",
					},
					filter: function (event, player) {
						return player.hujia > 0 && player.num('h') > 0;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('连横'), function (card, player, target) {
							return target != player;
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('连横', result.targets);
							result.targets[0].changeHujia(-999);
							result.targets[0].damage();
							result.targets[0].chooseToDiscard('he', true);
							player.changeHujia(-999);
							player.draw();
							player.skip('phaseDraw');
							var chat = ['分而破之！', '朋友，也是敌人！'].randomGet()
							player.say(chat);
						};
					},
				},
				"zz_KY": {
					trigger: {
						global: "phaseEnd",
					},
					frequent: true,
					filter: function (event, player) {
						return event.player != player && player.hp < player.maxHp;
					},
					content: function () {
						player.draw()
						player.discardPlayerCard(trigger.player, [1, trigger.player.maxHp - trigger.player.hp], 'hej');
						event.finish();
						var chat = ['北冥有鱼，其名为鲲——《庄子》', '鲲鹏之意，汝等岂能知晓？'].randomGet()
						player.say(chat);
					},
				},
				"zz_SR": {
					group: ["zz_SR_1", "zz_SR_2"],
					subSkill: {
						"1": {
							mod: {
								targetEnabled: function (card, player, target) {
									if(get.type(card) == 'delay') {
										return false;
									}
								},
							},
							sub: true,
						},
						"2": {
							trigger: {
								global: "phaseBegin",
							},
							frequent: true,
							filter: function (event, player) {
								return event.player != player && player.hp > 0;
							},
							content: function () {
								player.draw()
								var chat = ['圣人常无心，以百姓之心为心——《道德经》'].randomGet()
								player.say(chat);
							},
							sub: true,
						},
					},
				},
				"zz_SW": {
					trigger: {
						player: "phaseBegin",
					},
					direct: true,
					content: function () {
						"step 0"
						player.chooseTarget(get.prompt('师威'), function (card, player, target) {
							return target.isEnemyOf(player);
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);
						})
						"step 1"
						if(result.bool) {
							player.logSkill('师威', result.targets);
							result.targets[0].turnOver();
							player.chooseToDiscard(player.hp, true, 'h');
							var chat = ['师者，所以传道授业解惑也——《师说', '学生，就得要有学生的模样！'].randomGet()
							player.say(chat);
						}
					},
					ai: {
						threaten: 1.7,
					},
				},
				"zz_SY": {
					enable: "phaseUse",
					unique: true,
					skillAnimation: true,
					position: "he",
					mark: true,
					filter: function (event, player) {
						return !player.storage.sheyu;
					},
					filterCard: function (card) {
						var suit = get.suit(card);
						for(var i = 0; i < ui.selected.cards.length; i++) {
							if(get.suit(ui.selected.cards[i]) == suit) return false;
						}
						return true;
					},
					selectCard: [1, 2],
					check: function (card) {
						return 8 - ai.get.value(card)
					},
					init: function (player) {
						player.storage.sheyu = false;
					},
					content: function () {
						"step 0"
						player.storage.sheyu = true;
						for(var i = 0; i < cards.length; i++) {
							if(get.suit(cards[i]) == 'heart') {
								player.addSkill('mashu');
								lib.skill.guanxing.audioname = ['mashu'];
							}
							if(get.suit(cards[i]) == 'spade') {
								player.addSkill('wushuang');
								lib.skill.wansha.audioname = ['wushuang'];
							}
						}
						"step 1"
						player.unmarkSkill('射御');
					},
					ai: {
						order: 6,
						result: {
							player: function (player) {
								var cards = player.get('he');
								var suits = [];
								for(var i = 0; i < cards.length; i++) {
									if(!suits.contains(get.suit(cards[i]))) {
										suits.push(get.suit(cards[i]));
									}
								}
								if(suits.length < 3) return -1;
								return suits.length;
							},
						},
					},
					intro: {
						content: "limited",
					},
				},
				"DW_FENGYA": {
					group: ["bz_ch", "bz_yisha"],
					audio: "yingzi",
					trigger: {
						player: ["useCard", "respond"],
					},
					forced: true,
					filter: function (event, player) {
						return event.card && event.card.name == 'shan';;
					},
					content: function () {
						'step 0'
						player.draw();
						'step 1'
						player.chooseToUse('是否使用一张牌？');
					},
					ai: {
						threaten: 1.4,
						noautowuxie: true,
					},
				},
				"DW_YEYAN": {
					usable: 1,
					audio: "yeyan",
					enable: "chooseToUse",
					filterCard: function (card) {
						return get.color(card) == 'red';
					},
					position: "he",
					viewAs: {
						name: "huogong",
						suit: "diamond",
						number: 5,
						cards: [{
							"node": {
								"image": {},
								"info": {},
								"name": {},
								"name2": {},
								"background": {},
								"intro": {},
								"range": {}
							},
							"storage": {},
							"vanishtag": [],
							"_uncheck": [],
							"suit": "diamond",
							"number": 5,
							"name": "shan",
							"cardid": "8578300272",
							"clone": {
								"name": "shan",
								"suit": "diamond",
								"number": 5,
								"node": {
									"name": {},
									"info": {},
									"intro": {},
									"background": {},
									"image": {}
								},
								"_transitionEnded": true,
								"timeout": 5882
							},
							"original": "h",
							"timeout": 5846
						}],
					},
					ai: {
						basic: {
							useful: [7, 2],
							value: [7, 2],
							order: 4,
						},
						wuxie: function (target, card, player, current, state) {
							if(get.attitude(current, player) >= 0 && state > 0) return false;
						},
						result: {
							player: function (player) {
								var nh = player.countCards('h');
								if(nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
									if(typeof _status.event.filterCard == 'function' && _status.event.filterCard({
										name: 'huogong'
									})) {
										return -10;
									}
									if(_status.event.skill) {
										var viewAs = get.info(_status.event.skill).viewAs;
										if(viewAs == 'huogong') return -10;
										if(viewAs && viewAs.name == 'huogong') return -10;
									}
								}
								return 0;
							},
							target: function (player, target) {
								if(target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
								if(player.countCards('h') <= 1) return 0;
								if(target == player) {
									if(typeof _status.event.filterCard == 'function' && _status.event.filterCard({
										name: 'huogong'
									})) {
										return -1.5;
									}
									if(_status.event.skill) {
										var viewAs = get.info(_status.event.skill).viewAs;
										if(viewAs == 'huogong') return -1.5;
										if(viewAs && viewAs.name == 'huogong') return -1.5;
									}
									return 0;
								}
								return -1.5;
							},
						},
						tag: {
							damage: 1,
							fireDamage: 1,
							natureDamage: 1,
							norepeat: 1,
						},
					},
				},
				"DW_SANSI": {
					group: ["bz_yisha", "bz_ch"],
					audio: "zhiheng",
					enable: "phaseUse",
					usable: 1,
					position: "h",
					filterCard: true,
					selectCard: [1, Infinity],
					check: function (card) {
						return 6 - get.value(card)
					},
					prompt: "弃置任意张手牌并摸一张牌",
					content: function () {
						player.draw();
					},
					ai: {
						order: 1,
						result: {
							player: 1,
						},
						threaten: 1.5,
					},
				},
				"DW_ZHIHENG": {
					audio: "zhiheng",
					trigger: {
						player: "loseEnd",
					},
					forced: true,
					filter: function (event, player) {
						return event.cards && event.cards.length > 2;
					},
					content: function () {
						'step 0'
						player.draw()
						'step 1'
						if(player.hp < 3) player.recover();
					},
					ai: {
						threaten: 1.8,
					},
				},
				"DW_XBW": {
					group: ["bz_yisha", "bz_ch"],
					audio: "jiang",
					trigger: {
						player: "useCard",
					},
					forced: true,
					filter: function (event, player) {
						return event.card && event.card.name == 'sha';;
					},
					content: function () {
						'step 0'
						player.changeHujia(-999)
						'step 1'
						player.changeHujia();
					},
					ai: {
						threaten: 1.4,
						noautowuxie: true,
					},
				},
				"DW_SAODANG": {
					audio: "hunzi",
					trigger: {
						player: "phaseBegin",
					},
					frequent: true,
					filter: function (event, player) {
						return player.hujia > 0;
					},
					content: function () {
						'step 0'
						player.changeHujia(-999);
						'step 1'
						player.draw();
					},
				},
				"DW_JIEMING": {
					group: ["bz_yisha", "bz_ch"],
					audio: "haoshi",
					trigger: {
						global: "phaseBegin",
					},
					check: function (event, player) {
						if(ai.get.attitude(player, event.player) <= 0) return false;
						if(player.num('h') == 1 && player.num('h', 'tao') > 0) return false;
						if(player.num('h') == 1 && player.num('h', 'jiu') > 0) return false;
						return player.hp > 1 && player.num('h') > 1;
					},
					filter: function (event, player) {
						return event.player != player && player.num('h') > 0;
					},
					content: function () {
						'step 0'
						player.chooseToDiscard(1, 'h', true)
						'step 1'
						trigger.player.draw();
					},
					ai: {
						result: {
							player: -0.6,
							target: 0.5,
						},
					},
				},
				"DW_YUANLV": {
					audio: "dimeng",
					trigger: {
						player: "phaseEnd",
					},
					frequent: true,
					filter: function (event, player) {
						return player.num('h') < player.maxHp;
					},
					content: function () {
						if(game.players.length > 4) player.draw(player.maxHp - player.num('h'));
						if(game.players.length <= 4) player.draw()
					},
				},
				"DW_QIANXUN": {
					group: ["bz_ch", "bz_yisha"],
					audio: "reqianxun",
					enable: ["chooseToRespond"],
					filterCard: true,
					viewAs: {
						name: "shan",
						suit: "heart",
						number: 3,
					},
					viewAsFilter: function (player) {
						if(player.num('h') == 0) return false;
					},
					check: function () {
						return 1
					},
					prompt: "将一张手牌当闪打出",
					ai: {
						respondShan: true,
						skillTagFilter: function (player) {
							if(player.num('h') < 1) return false;
						},
						basic: {
							useful: [7, 2],
							value: [7, 2],
						},
					},
				},
				"DW_ZHIDI": {
					audio: "relianying",
					trigger: {
						player: ["useCard", "respond"],
					},
					forced: true,
					filter: function (event, player) {
						return event.card && event.card.name == 'shan';;
					},
					content: function () {
						'step 0'
						game.delay(0.5);
						player.chooseTarget(get.prompt('DW_ZHIDI'), function (card, player, target) {
							return target != player && target.num('he') > 0;
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('DW_ZHIDI', result.targets);
							player.discardPlayerCard(result.targets[0], true, 'he');
						}
					},
					ai: {
						threaten: 1.4,
						noautowuxie: true,
					},
				},
				"DW_LIULI": {
					group: ["bz_yisha", "bz_ch"],
					audio: "liuli",
					enable: "phaseUse",
					usable: 1,
					selectCard: 2,
					filterCard: function (card) {
						return get.color(card) == 'black';
					},
					position: "h",
					prompt: "将一张黑色手牌当【兵粮寸断】使用",
					viewAs: {
						name: "bingliang",
						suit: "club",
						number: 3,
						cards: [{
							"node": {
								"image": {},
								"info": {},
								"name": {},
								"name2": {},
								"background": {},
								"intro": {},
								"range": {}
							},
							"storage": {},
							"vanishtag": [],
							"_uncheck": [],
							"suit": "spade",
							"number": 7,
							"name": "sha",
							"cardid": "1448501251",
							"clone": {
								"name": "sha",
								"suit": "spade",
								"number": 7,
								"node": {
									"name": {},
									"info": {},
									"intro": {},
									"background": {},
									"image": {}
								},
								"_transitionEnded": true,
								"fixed": true,
								"timeout": 454
							},
							"original": "h",
							"_transform": "translateY(0px)",
							"viewAs": "bingliang"
						}, {
							"node": {
								"image": {},
								"info": {},
								"name": {},
								"name2": {},
								"background": {},
								"intro": {},
								"range": {}
							},
							"storage": {},
							"vanishtag": [],
							"_uncheck": [],
							"suit": "spade",
							"number": 9,
							"name": "jiu",
							"cardid": "6644622254",
							"clone": {
								"name": "jiu",
								"suit": "spade",
								"number": 9,
								"node": {
									"name": {},
									"info": {},
									"intro": {},
									"background": {},
									"image": {}
								},
								"_transitionEnded": true,
								"timeout": 444
							},
							"timeout": 423,
							"original": "h"
						}],
					},
					ai: {
						basic: {
							useful: [7, 2],
							value: [7, 2],
							order: 4,
						},
						wuxie: function (target, card, player, current, state) {
							if(get.attitude(current, player) >= 0 && state > 0) return false;
						},
						result: {
							player: function (player) {
								var nh = player.countCards('h');
								if(nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
									if(typeof _status.event.filterCard == 'function' && _status.event.filterCard({
										name: 'huogong'
									})) {
										return -10;
									}
									if(_status.event.skill) {
										var viewAs = get.info(_status.event.skill).viewAs;
										if(viewAs == 'huogong') return -10;
										if(viewAs && viewAs.name == 'huogong') return -10;
									}
								}
								return 0;
							},
							target: function (player, target) {
								if(target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
								if(player.countCards('h') <= 1) return 0;
								if(target == player) {
									if(typeof _status.event.filterCard == 'function' && _status.event.filterCard({
										name: 'huogong'
									})) {
										return -1.5;
									}
									if(_status.event.skill) {
										var viewAs = get.info(_status.event.skill).viewAs;
										if(viewAs == 'huogong') return -1.5;
										if(viewAs && viewAs.name == 'huogong') return -1.5;
									}
									return 0;
								}
								return -1.5;
							},
						},
						tag: {
							damage: 1,
							fireDamage: 1,
							natureDamage: 1,
							norepeat: 1,
							skip: "phaseDraw",
						},
					},
				},
				"DW_GUOSE": {
					mod: {
						globalFrom: function (from, to, distance) {
							return distance - 2;
						},
					},
					group: "DW_GUOSE_1",
					subSkill: {
						"1": {
							mod: {
								globalTo: function (from, to, distance) {
									return distance - 1;
								},
							},
							sub: true,
						},
					},
				},
				"DW_HONGYAN": {
					group: ["bz_yisha", "bz_ch"],
					audio: "tianxiang",
					enable: "phaseUse",
					usable: 1,
					selectCard: 2,
					filterCard: function (card) {
						return get.color(card) == 'red';
					},
					position: "h",
					prompt: "将一张红色手牌当【乐不思蜀】使用",
					viewAs: {
						name: "lebu",
						suit: "diamond",
						number: 6,
						cards: [{
							"node": {
								"image": {},
								"info": {},
								"name": {},
								"name2": {},
								"background": {},
								"intro": {},
								"range": {}
							},
							"storage": {},
							"vanishtag": [],
							"_uncheck": [],
							"suit": "heart",
							"number": 8,
							"name": "shan",
							"cardid": "8072247291",
							"clone": {
								"name": "shan",
								"suit": "heart",
								"number": 8,
								"node": {
									"name": {},
									"info": {},
									"intro": {},
									"background": {},
									"image": {}
								},
								"_transitionEnded": true,
								"timeout": 6970
							},
							"original": "h",
							"_transform": "translateX(112px)",
							"viewAs": "lebu",
							"timeout": 6963
						}, {
							"node": {
								"image": {},
								"info": {},
								"name": {},
								"name2": {},
								"background": {},
								"intro": {},
								"range": {}
							},
							"storage": {},
							"vanishtag": [],
							"_uncheck": [],
							"suit": "heart",
							"number": 9,
							"name": "tao",
							"cardid": "5424502293",
							"clone": {
								"name": "tao",
								"suit": "heart",
								"number": 9,
								"node": {
									"name": {},
									"info": {},
									"intro": {},
									"background": {},
									"image": {}
								},
								"_transitionEnded": true,
								"timeout": 7184
							},
							"original": "h",
							"_transform": "translateX(0px)",
							"timeout": 7160
						}],
					},
					ai: {
						basic: {
							useful: [7, 2],
							value: [7, 2],
							order: 4,
						},
						wuxie: function (target, card, player, current, state) {
							if(get.attitude(current, player) >= 0 && state > 0) return false;
						},
						result: {
							player: function (player) {
								var nh = player.countCards('h');
								if(nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
									if(typeof _status.event.filterCard == 'function' && _status.event.filterCard({
										name: 'huogong'
									})) {
										return -10;
									}
									if(_status.event.skill) {
										var viewAs = get.info(_status.event.skill).viewAs;
										if(viewAs == 'huogong') return -10;
										if(viewAs && viewAs.name == 'huogong') return -10;
									}
								}
								return 0;
							},
							target: function (player, target) {
								if(target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
								if(player.countCards('h') <= 1) return 0;
								if(target == player) {
									if(typeof _status.event.filterCard == 'function' && _status.event.filterCard({
										name: 'huogong'
									})) {
										return -1.5;
									}
									if(_status.event.skill) {
										var viewAs = get.info(_status.event.skill).viewAs;
										if(viewAs == 'huogong') return -1.5;
										if(viewAs && viewAs.name == 'huogong') return -1.5;
									}
									return 0;
								}
								return -1.5;
							},
						},
						tag: {
							damage: 1,
							fireDamage: 1,
							natureDamage: 1,
							norepeat: 1,
							skip: "phaseDraw",
						},
					},
				},
				"DW_TIANXIANG": {
					group: "bz_yisha",
					audio: "tianxiang",
					trigger: {
						target: "shaBegin",
					},
					forced: true,
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						'step 0'
						player.chooseTarget(get.prompt('DW_TIANXIANG'), function (card, player, target) {
							return target != player && target.num('h') > 0 && target.sex == 'male';
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);
						});
						'step 1'
						if(result.bool) {
							player.logSkill('DW_TIANXIANG', result.targets);
							player.discardPlayerCard(result.targets[0], true, 'h');
						}
					},
					ai: {
						threaten: 1.4,
						noautowuxie: true,
					},
				},
				"CW_NENGCHEN": {
					audio: "rejianxoing",
					trigger: {
						global: "gameStart",
					},
					frequent: true,
					filter: function (event, player) {
						return player.identity != 'zhu';
					},
					content: function () {
						'step 0'
						player.gainMaxHp()
						'step 1'
						player.recover();
					},
				},
				"CW_GANGLIE": {
					forced: true,
					group: ["bz_yisha", "bz_ch"],
					audio: "ganglie",
					trigger: {
						player: "damageEnd",
					},
					check: function (event, player) {
						if(ai.get.attitude(player, event.player) > 0) return false;
						return player.hp > 0;
					},
					filter: function (event, player) {
						return player.hp > 0 && event.source && event.source.num('he') > 0;
					},
					content: function () {
						trigger.source.chooseToDiscard(2, 'he', true)
					},
				},
				"CW_JIANXIONG": {
					audio: "jianxiong",
					trigger: {
						player: "damageEnd",
					},
					filter: function (event, player) {
						return player.hp > 0 && event.source && event.source.num('hej') > 0;
					},
					check: function (event, player) {
						if(ai.get.attitude(player, event.source) > 0 && event.source.num('he') < 5) return false;
					},
					content: function () {
						player.gainPlayerCard(1, trigger.source, 'hej', true)
					},
					group: ["CW_JIANXIONG_1", "bz_yisha", "bz_ch"],
					subSkill: {
						"1": {
							audio: "jianxiong",
							trigger: {
								source: "damageEnd",
							},
							check: function (event, player) {
								if(ai.get.attitude(player, event.player) >= 0) return false;
							},
							filter: function (event, player) {
								return player.hp > 0 && event.player.num('hej') > 0;
							},
							content: function () {
								player.gainPlayerCard(1, trigger.player, 'hej', true)
							},
							sub: true,
						},
					},
				},
				"CW_JUSHOU": {
					group: ["bz_yisha", "bz_ch"],
					audio: "jushou",
					trigger: {
						target: "shaBegin",
					},
					filter: function (event, player) {
						return player.hp > 0 && player.num('h') > 1;
					},
					check: function (event, player) {
						if(player.num('h', 'shan') > 0) return false;
						return player.num('h') > 1;
					},
					content: function () {
						'step 0'
						player.chooseToDiscard(2, 'h', true)
						'step 1'
						trigger.untrigger();
						trigger.finish();
					},
				},
				"CW_QIANGGONG": {
					audio: "kuiwei",
					trigger: {
						player: "shaMiss",
					},
					filter: function (event, player) {
						return player.hp > 0;
					},
					usable: 1,
					check: function (event, player) {
						if(player.hp < 2) return false;
					},
					content: function () {
						'step 0'
						player.loseHp();
						'step 1'
						player.useCard({
							name: 'sha'
						}, trigger.target);
					},
				},
				"CW_BEIGE": {
					audio: "beige",
					trigger: {
						player: ["damageEnd", "loseHpEnd"],
					},
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						'step 0'
						player.chooseTarget('请选择一名目标，弃置其x张牌', get.prompt('CW_BEIGE'), 1, function (card, player, target) {
							return target != player && target.num('he') > 0;
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);
						});
						'step 1'
						if(result.bool) {
							for(var i = 0; i < result.targets.length; i++) {
								player.logSkill('CW_BEIGE', result.targets);
								player.discardPlayerCard(player.maxHp - player.hp, result.targets[i], 'he', true)
							};
						};
					},
				},
				"CW_DUANCHANG": {
					group: ["bz_yisha", "bz_ch"],
					audio: "duanchang",
					trigger: {
						player: "damageEnd",
					},
					filter: function (event, player) {
						return player.hp > 0 && event.source && event.source.hp > 0;
					},
					check: function (event, player) {
						if(ai.get.attitude(player, event.source) > 0) return false;
					},
					content: function () {
						trigger.source.loseHp()
					},
				},
				"CW_YINSHEN": {
					group: ["bz_yisha", "bz_ch"],
					audio: "weimu",
					enable: "phaseUse",
					usable: 1,
					position: "h",
					filterCard: {
						name: "sha",
					},
					selectCard: [1, Infinity],
					prompt: "弃置任意手中的【杀】，然后获得一层护甲",
					content: function () {
						player.changeHujia()
					},
					ai: {
						order: 1,
						result: {
							player: 1,
						},
						threaten: 1.5,
					},
				},
				"CW_DUMIE": {
					audio: "luanwu",
					trigger: {
						player: "phaseBegin",
					},
					frequent: true,
					filter: function (event, player) {
						return player.hujia > 0;
					},
					content: function () {
						'step 0'
						player.chooseTarget('请选择一名目标，弃置其所有手牌', get.prompt('CW_DUMIE'), 1, function (card, player, target) {
							return target != player && 0 < target.num('h') < 4;
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);
						});
						'step 1'
						if(result.bool) {
							for(var i = 0; i < result.targets.length; i++) {
								player.logSkill('CW_DUMIE', result.targets);
								player.discardPlayerCard(999, result.targets[i], 'h', true);
								player.changeHujia(-1);
								player.draw()
							}
						}
					},
				},
				"CW_LUOSHEN": {
					group: ["bz_yisha", "bz_ch"],
					audio: "luoshen",
					trigger: {
						player: "phaseBegin",
					},
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						'step 0'
						player.chooseTarget('选择任意名男性角色，弃置其手中、装备区内各一张牌', get.prompt('CW_LUOSHEN'), [1, Infinity], function (card, player, target) {
							return target != player && target.num('h') > 0 && target.sex == 'male';
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);
						});
						'step 1'
						if(result.bool) {
							for(var i = 0; i < result.targets.length; i++) {
								player.logSkill('CW_LUOSHEN', result.targets);
								player.discardPlayerCard(result.targets[i], 'h', true)
							};
						};
					},
				},
				"CW_JIEMING": {
					group: "bz_ch",
					audio: "jieming",
					trigger: {
						global: "damageEnd",
					},
					check: function (event, player) {
						if(ai.get.attitude(player, event.player) < 0) return false;
						if(player.num('h', 'shan') < 1 || player.num('h') < 3) return false;
						return player.hp >= 2;
					},
					filter: function (event, player) {
						return player.hp > 1 && event.player != player && event.player.hp > 0;
					},
					content: function () {
						'step 0'
						player.loseHp()
						'step 1'
						trigger.player.draw(2);
					},
				},
				"CW_WANGZUO": {
					audio: "jieming",
					skillAnimation: true,
					unique: true,
					derivation: "CW_FUHAN",
					mark: true,
					intro: {
						content: "limited",
					},
					trigger: {
						player: "phaseBegin",
					},
					forced: true,
					filter: function (event, player) {
						if(player.storage.CW_WANGZUO) return false;
						return player.hp < 2;
					},
					content: function () {
						player.storage.CW_WANGZUO = true;
						player.loseMaxHp();
						player.draw(2);
						player.recover(99);
						player.addSkill('CW_FUHAN');
						player.awakenSkill("CW_WANGZUO");
						player.awakenSkill("CW_JIEMING");
					},
				},
				"CW_FUHAN": {
					group: "bz_yisha",
					audio: "jieming",
					trigger: {
						global: "shaBegin",
					},
					filter: function (event, player) {
						return player.hp > 0 && event.player.hp < event.player.maxHp && event.player != player;
					},
					content: function () {
						'step 0'
						trigger.player.draw()
						'step 1'
						if(player.num('h', 'sha') > 0) player.chooseToUse({
							name: 'sha'
						}, '是否使用一张【杀】？');
						'step 2'
						player.draw()
					},
				},
				"SH_WUSHENG": {
					audio: "wusheng",
					enable: "phaseUse",
					filterCard: true,
					position: "h",
					prompt: "将一张手牌当【杀】使用",
					viewAs: {
						name: "sha",
						suit: "heart",
						number: 6,
						cards: [{
							"node": {
								"image": {},
								"info": {},
								"name": {},
								"name2": {},
								"background": {},
								"intro": {},
								"range": {}
							},
							"storage": {},
							"vanishtag": [],
							"_uncheck": [],
							"suit": "heart",
							"number": 6,
							"name": "lebu",
							"cardid": "9168134339",
							"clone": {
								"name": "lebu",
								"suit": "heart",
								"number": 6,
								"node": {
									"name": {},
									"info": {},
									"intro": {},
									"background": {},
									"image": {}
								},
								"_transitionEnded": true,
								"timeout": 6862
							},
							"original": "j",
							"_transform": "translateX(0px)",
							"timeout": 6852
						}],
					},
					ai: {
						respondShan: true,
						wuxie: function (target, card, player, current, state) {
							if(get.attitude(current, player) >= 0 && state > 0) return false;
						},
						result: {
							player: function (player) {
								var nh = player.countCards('h');
								if(nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
									if(typeof _status.event.filterCard == 'function' && _status.event.filterCard({
										name: 'huogong'
									})) {
										return -10;
									}
									if(_status.event.skill) {
										var viewAs = get.info(_status.event.skill).viewAs;
										if(viewAs == 'huogong') return -10;
										if(viewAs && viewAs.name == 'huogong') return -10;
									}
								}
								return 0;
							},
							target: function (player, target) {
								if(target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
								if(player.countCards('h') <= 1) return 0;
								if(target == player) {
									if(typeof _status.event.filterCard == 'function' && _status.event.filterCard({
										name: 'huogong'
									})) {
										return -1.5;
									}
									if(_status.event.skill) {
										var viewAs = get.info(_status.event.skill).viewAs;
										if(viewAs == 'huogong') return -1.5;
										if(viewAs && viewAs.name == 'huogong') return -1.5;
									}
									return 0;
								}
								return -1.5;
							},
						},
						tag: {
							damage: 1,
							fireDamage: 1,
							natureDamage: 1,
							norepeat: 1,
							skip: "phaseDraw",
							respond: 1,
							respondShan: 1,
							thunderDamage: function (card, nature) {
								if(card.nature == 'thunder') return 1;
							},
							poisonDamage: function (card, nature) {
								if(card.nature == 'poison') return 1;
							},
						},
						order: function () {
							if(_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
							return 3;
						},
						basic: {
							useful: [5, 1],
							value: [5, 1],
						},
					},
				},
				"SH_TUODAO": {
					group: ["bz_yisha", "bz_ch"],
					audio: "wusheng",
					trigger: {
						player: ["useCard", "respond"],
					},
					forced: true,
					filter: function (event, player) {
						return event.card && event.card.name == 'shan';;
					},
					content: function () {
						'step 0'
						player.gain(game.createCard('jiu'));
					},
					ai: {
						threaten: 1.4,
						noautowuxie: true,
					},
				},
				"SH_JIJIAN": {
					group: ["jijian", "bz_yisha", "bz_ch"],
					audio: "zhuhai",
					trigger: {
						player: "shaBegin",
					},
					filter: function (event, player) {
						return player.num('he') > 0 && event.target.num('h') > 0;
					},
					content: function () {
						'step 0'
						player.chooseToDiscard(1, 'he', true);
						'step 1'
						trigger.target.chooseToDiscard(1, 'h', true);
					},
					mod: {
						globalFrom: function (from, to, distance) {
							return distance - 1;
						},
					},
				},
				jijian: {
					audio: "zhuhai",
					trigger: {
						target: "shaBegin",
					},
					filter: function (event, player) {
						return player.num('he') > 0 && event.player.num('h') > 0;
					},
					content: function () {
						'step 0'
						player.chooseToDiscard(1, 'he', true);
						'step 1'
						trigger.player.chooseToDiscard(1, 'h', true);
					},
				},
				"SH_XIAKEXING": {
					mod: {
						maxHandcard: function (player, num) {
							if(player.hp < player.maxHp) return num + player.maxHp - player.hp;
						},
					},
				},
				"SH_FENGCHU": {
					group: ["SH_FENGCHU_1", "SH_FENGCHU_2", "bz_ch"],
					subSkill: {
						"1": {
							audio: "niepan",
							trigger: {
								player: "damageBefore",
							},
							forced: true,
							unique: true,
							filter: function (event) {
								return event.nature == 'fire';
							},
							content: function () {
								'step 0'
								trigger.untrigger();
								trigger.finish();
								'step 1'
								player.recover();
								player.draw(2);
							},
							ai: {
								effect: {
									target: function (card) {
										if(get.tag(card, 'fireDamage')) {
											return [0, 2];
										}
									},
								},
							},
							sub: true,
						},
						"2": {
							audio: "niepan",
							trigger: {
								player: "damageBefore",
							},
							forced: true,
							unique: true,
							filter: function (event) {
								return event.nature == 'thunder';
							},
							content: function () {
								'step 0'
								trigger.untrigger();
								trigger.finish();
								'step 1'
								player.recover();
								player.draw(2);
							},
							ai: {
								effect: {
									target: function (card) {
										if(get.tag(card, 'thunderDamage')) {
											return [0, 2];
										}
									},
								},
							},
							sub: true,
						},
					},
				},
				"SH_HAOYAN": {
					group: "bz_yisha",
					audio: "zuixiang",
					enable: "phaseUse",
					usable: 1,
					filterCard: true,
					filterTarget: function (card, player, target) {
						return player != target && target.num('h') > 0;
					},
					content: function () {
						var targetCard = target.get('h').randomGet();
						player.showCards(targetCard);
						if(get.color(targetCard) == 'red') {
							target.draw(3);
						};
						if(get.color(targetCard) != 'red') {
							player.chooseToDiscard(999, 'h', true)
						};
					},
					ai: {
						order: 3,
						result: {
							player: 0.4,
							target: 1,
						},
					},
				},
				"bz_yisha": {
					//global: "bz_yisha",
					skillAnimation: "epic",
					animationStr: "一战成名",
					animationColor: "fire",
					trigger: {
						source: "dieBegin",
					},
					forced: true,
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						'step 0'
						trigger.tqk_hadTrigger=true;
						player.addSkill('bz_ersha');
						player.draw();
						//ui.backgroundMusic.src = lib.assetURL + 'extension/扩展ol/YZCM.mp3';
						//ui.background.setBackgroundImage("extension/扩展ol/ysyzcm.jpg");
						//game.log(player, '将场地切换为一战成名');
						'step 1'
						player.awakenSkill("bz_yisha");
					},
				},
				"bz_ersha": {
					skillAnimation: "epic",
					animationStr: "锋芒毕露",
					animationColor: "fire",
					trigger: {
						source: "dieBegin",
					},
					forced: true,
					filter: function (event, player) {
						if(_status.connectMode) return false;
						return player.hp > 0&&event.tqk_hadTrigger!=true;
					},
					content: function () {
						'step 0'
						trigger.tqk_hadTrigger=true;
						player.addSkill('bz_sansha');
						player.recover();
						//ui.backgroundMusic.src = lib.assetURL + 'extension/扩展ol/FMBL.mp3';
						//ui.background.setBackgroundImage("extension/扩展ol/ssfmbl.jpg");
						//game.log(player, '将场地切换为锋芒毕露');
						'step 1'
						player.awakenSkill("bz_ersha");
					},
				},
				"bz_sansha": {
					skillAnimation: "epic",
					animationStr: "绝代风华",
					animationColor: "thunder",
					trigger: {
						source: "dieBegin",
					},
					forced: true,
					filter: function (event, player) {
						if(_status.connectMode) return false;
						return player.hp > 0&&event.tqk_hadTrigger!=true;
					},
					content: function () {
						'step 0'
						trigger.tqk_hadTrigger=true;
						player.addSkill('bz_sisha');
						player.draw(2);
						player.recover();
						//ui.backgroundMusic.src = lib.assetURL + 'extension/扩展ol/JDFH.mp3';
						//ui.background.setBackgroundImage("extension/扩展ol/ssjdfh.jpg");
						//game.log(player, '将场地切换为绝代风华');
						'step 1'
						player.awakenSkill("bz_sansha");
					},
				},
				"bz_sisha": {
					skillAnimation: "epic",
					animationStr: "狂战似魔",
					animationColor: "thunder",
					trigger: {
						source: "dieBegin",
					},
					forced: true,
					filter: function (event, player) {
						if(_status.connectMode) return false;
						return player.hp > 0&&event.tqk_hadTrigger!=true;
					},
					content: function () {
						'step 0'
						player.draw(4);
						player.gainMaxHp();
						player.recover();
						'step 1'
						//ui.backgroundMusic.src = lib.assetURL + 'extension/扩展ol/KZSM.mp3';
						//ui.background.setBackgroundImage("extension/扩展ol/sskzsm.jpg");
						//game.log(player, '将场地切换为狂战似魔');
						'step 2'
						player.awakenSkill("bz_sisha");
					},
				},
				"SH_PAOXIAO": {
					group: ["bz_yisha", "bz_ch"],
					audio: "paoxiao",
					enable: "phaseUse",
					usable: 1,
					filterTarget: function (card, player, target) {
						return player != target && target.num('he') > 0;
					},
					content: function () {
						'step 0'
						player.chooseToDiscard(1, 'he', true).ai = function (card) {
							return 8 - ai.get.value(card);
						};
						'step 1'
						target.chooseToDiscard(1, 'he', true);
						'step 2'
						player.useCard({
							name: 'jiu'
						}, player)
					},
					ai: {
						expose: 0.5,
						order: 9,
						result: {
							player: 0.6,
							target: function (player, target) {
								if(target.num('he') > 0) return -1;
								if(target.num('he') > 1) return -1;
							},
						},
					},
				},
				"SH_YISHI": {
					audio: "tishen",
					trigger: {
						player: "shaMiss",
					},
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						'step 0'
						player.draw();
						'step 1'
						trigger.target.draw();
					},
				},
				"SH_XIAOXIONG": {
					group: ["bz_yisha", "bz_ch"],
					audio: "rende",
					enable: "phaseUse",
					usable: 1,
					filterTarget: function (card, player, target) {
						return player != target && target.num('h') > 0;
					},
					content: function () {
						'step 0'
						player.chooseToDiscard(1, 'h', true);
						'step 1'
						player.gainPlayerCard(1, target, 'h', true);
					},
					ai: {
						expose: 0.1,
						order: 9,
						result: {
							player: 0.2,
							target: -0.5,
						},
					},
				},
				"SH_JUEJING": {
					mod: {
						cardEnabled: function (card, player) {
							if(card.name == 'shan') return false;
						},
						cardUsable: function (card, player) {
							if(card.name == 'shan') return false;
						},
						cardRespondable: function (card, player) {
							if(card.name == 'shan') return false;
						},
						cardSavable: function (card, player) {
							if(card.name == 'shan') return false;
						},
					},
					audio: "relongdan",
					enable: ["chooseToRespond", "chooseToUse"],
					filter: function (event, player) {
						return player.countCards('h', {
							name: 'shan'
						}) > 0;
					},
					filterCard: {
						name: "shan",
					},
					viewAs: {
						name: "sha",
						suit: "heart",
						number: 13,
						cards: [{
							"node": {
								"image": {},
								"info": {},
								"name": {},
								"name2": {},
								"background": {},
								"intro": {},
								"range": {}
							},
							"storage": {},
							"vanishtag": [],
							"_uncheck": [],
							"suit": "heart",
							"number": 13,
							"name": "shan",
							"cardid": "7311808327",
							"_transform": "translateX(87.42857142857143px)",
							"clone": {
								"name": "shan",
								"suit": "heart",
								"number": 13,
								"node": {
									"name": {},
									"info": {},
									"intro": {},
									"background": {},
									"image": {}
								},
								"fixed": true,
								"_transitionEnded": true,
								"timeout": 5957
							},
							"original": "h",
							"timeout": 5945
						}],
					},
					check: function () {
						return 1
					},
					ai: {
						effect: {
							target: function (card, player, target, current) {
								if(get.tag(card, 'respondSha') && current < 0) return 0.6
							},
						},
						order: 4,
						useful: -1,
						value: -1,
						basic: {
							order: 5,
							useful: 1,
							value: 4.5,
						},
						result: {
							respondSha: true,
							target: -1.5,
							player: function (player, target) {
								if(get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
									return 0;
								}
								var hs1 = target.getCards('h', 'shan');
								var hs2 = player.getCards('h', 'shan');
								if(hs1.length > hs2.length + 1) {
									return -2;
								}
								var hsx = target.getCards('h');
								if(hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
									return -2;
								}
								if(hsx.length > 3 && hs2.length == 0) {
									return -2;
								}
								if(hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
									return -2;
								}
								return -0.5;
							},
						},
						tag: {
							respond: 2,
							respondSha: 2,
							damage: 1,
							respondShan: 1,
							natureDamage: function (card) {
								if(card.nature) return 1;
							},
							fireDamage: function (card, nature) {
								if(card.nature == 'fire') return 1;
							},
							thunderDamage: function (card, nature) {
								if(card.nature == 'thunder') return 1;
							},
							poisonDamage: function (card, nature) {
								if(card.nature == 'poison') return 1;
							},
						},
					},
				},
				"SH_LONGDAN": {
					group: ["bz_yisha", "SH_JUEJING", "bz_ch"],
					audio: "ext:扩展ol:2",
					trigger: {
						player: "shaBegin",
						target: "shaBegin",
					},
					forced: true,
					filter: function (event, player) {
						return player.hp > 0;;
					},
					content: function () {
						'step 0'
						trigger.directHit = true;
					},
				},
				"SH_DANJI": {
					unique: true,
					audio: "reyajiao",
					trigger: {
						target: ["wuguBegin", "nanmanBegin", "taoyuanBegin", "wanjianBegin"],
					},
					forced: true,
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						'step 0'
						trigger.untrigger();
						trigger.finish();
					},
					group: ["SH_DANJI_1", "SH_DANJI_2"],
					subSkill: {
						"1": {
							forced: true,
							audio: "reyajiao",
							unique: true,
							trigger: {
								player: "damageBegin",
							},
							filter: function (event, player) {
								if(event.nature == 'fire') return event.num > 1;
							},
							content: function () {
								'step 0'
								trigger.untrigger();
								trigger.finish();
								'step 1'
								player.loseHp()
							},
							sub: true,
						},
						"2": {
							forced: true,
							audio: "reyajiao",
							unique: true,
							trigger: {
								player: "damageBegin",
							},
							filter: function (event, player) {
								return event.num > 1;
							},
							content: function () {
								'step 0'
								trigger.untrigger();
								trigger.finish();
								'step 1'
								player.loseHp()
							},
							sub: true,
						},
					},
				},
				"SH_GUIYIN": {
					unique: true,
					audio: "ext:扩展ol:2",
					trigger: {
						player: "phaseBegin",
					},
					filter: function (event, player) {
						return player.hp > 0;
					},
					forced: true,
					content: function () {
						'step 0'
						player.changeHujia(-999)
						'step 1'
						if(game.players.length > 2) {
							player.skip('phaseJudge')
							player.skip('phaseDraw');
							player.skip('phaseUse');
							player.skip('phaseDiscard');
							if(player.hp < player.maxHp) player.draw();
							if(player.hp < 2) player.changeHujia();
						} else {
							if(player.num('h') > 3) player.skip('phaseDraw');
							if(player.num('h') < 4) player.skip('phaseDiscard');
							if(player.num('h') == 0 || player.num('e') == 0) player.changeHujia();
						}
					},
				},
				"SH_QICAI": {
					group: ["bz_yisha", "bz_ch"],
					audio: "ext:扩展ol:2",
					unique: true,
					trigger: {
						global: "phaseBegin",
					},
					forced: true,
					filter: function (event, player) {
						return event.player != player;
					},
					content: function () {
						'step 0'
						if(player.num('h') == 6) player.chooseToDiscard(1, 'h', true);
						if(player.num('h') < 6) player.draw();
						'step 1'
						if(player.num('h') > 2) player.chooseToUse('是否使用一张牌？');
						if(game.players.length < 3) player.addSkill('kanpo');
						if(game.players.length < 3) player.addSkill('SH_SHENCAI');
					},
				},
				"QX_XURONG": {
					group: ["bz_yisha", "bz_ch"],
					audio: "luanji",
					enable: "phaseUse",
					usable: 1,
					filterCard: true,
					selectCard: 2,
					position: "he",
					prompt: "将两张牌当【决斗】使用",
					viewAs: {
						name: "juedou",
						suit: "club",
						number: 1,
						cards: [{
							"node": {
								"image": {},
								"info": {},
								"name": {},
								"name2": {},
								"background": {},
								"intro": {},
								"range": {}
							},
							"storage": {},
							"vanishtag": [],
							"_uncheck": [],
							"suit": "diamond",
							"number": 12,
							"name": "huogong",
							"cardid": "2436895419",
							"clone": {
								"name": "huogong",
								"suit": "diamond",
								"number": 12,
								"node": {
									"name": {},
									"info": {},
									"intro": {},
									"background": {},
									"image": {}
								},
								"_transitionEnded": true,
								"timeout": 10352
							},
							"original": "h",
							"timeout": 10322
						}, {
							"node": {
								"image": {},
								"info": {},
								"name": {},
								"name2": {},
								"background": {},
								"intro": {},
								"range": {}
							},
							"storage": {},
							"vanishtag": [],
							"_uncheck": [],
							"suit": "diamond",
							"number": 5,
							"name": "guanshi",
							"cardid": "5287174394",
							"clone": {
								"name": "guanshi",
								"suit": "diamond",
								"number": 5,
								"node": {
									"name": {},
									"info": {},
									"intro": {},
									"background": {},
									"image": {}
								},
								"_transitionEnded": true,
								"timeout": 14425
							},
							"original": "h",
							"timeout": 14416
						}],
					},
					ai: {
						basic: {
							useful: [7, 2],
							value: [7, 2],
							order: 5,
						},
						wuxie: function (target, card, player, current, state) {
							if(get.attitude(current, player) >= 0 && state > 0) return false;
						},
						result: {
							player: function (player) {
								var nh = player.countCards('h');
								if(nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
									if(typeof _status.event.filterCard == 'function' && _status.event.filterCard({
										name: 'huogong'
									})) {
										return -10;
									}
									if(_status.event.skill) {
										var viewAs = get.info(_status.event.skill).viewAs;
										if(viewAs == 'huogong') return -10;
										if(viewAs && viewAs.name == 'huogong') return -10;
									}
								}
								return 0;
							},
							target: function (player, target) {
								if(target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
								if(player.countCards('h') <= 1) return 0;
								if(target == player) {
									if(typeof _status.event.filterCard == 'function' && _status.event.filterCard({
										name: 'huogong'
									})) {
										return -1.5;
									}
									if(_status.event.skill) {
										var viewAs = get.info(_status.event.skill).viewAs;
										if(viewAs == 'huogong') return -1.5;
										if(viewAs && viewAs.name == 'huogong') return -1.5;
									}
									return 0;
								}
								return -1.5;
							},
						},
						tag: {
							damage: 1,
							fireDamage: 1,
							natureDamage: 1,
							norepeat: 1,
							skip: "phaseDraw",
							respond: 2,
							respondSha: 2,
						},
					},
				},
				"QX_YUANMEN": {
					audio: "luanji",
					unique: true,
					zhuSkill: true,
					trigger: {
						player: "chooseToRespondBegin",
					},
					filter: function (event, player) {
						if(event.responded) return false;
						if(player.storage.QX_YUANMEN) return false;
						if(!player.hasZhuSkill('QX_YUANMEN')) return false;
						if(event.filterCard({
							name: 'sha'
						}) == false) return false;
						return game.hasPlayer(function (current) {
							return current != player && current.group == 'qun';
						});
					},
					check: function (event, player) {
						if(get.damageEffect(player, event.player, player) >= 0) return false;
						return true;
					},
					content: function () {
						"step 0"
						if(event.current == undefined) event.current = player.next;
						if(event.current == player) {
							event.finish();
						} else if(event.current.group == 'qun') {
							if((event.current == game.me && !_status.auto) || (
							get.attitude(event.current, player) > 2) || event.current.isOnline()) {
								player.storage.QX_YUANMEN = true;
								var next = event.current.chooseToRespond('是否替' + get.translation(player) + '打出一张杀？', {
									name: 'sha'
								});
								next.set('ai', function () {
									var event = _status.event;
									return(get.attitude(event.player, event.source) - 2);
								});
								next.autochoose = lib.filter.autoRespondSha;
								next.set('source', player);
							}
						}
						"step 1"
						player.storage, QX_YUANMEN = false;
						if(result.bool) {
							event.finish();
							trigger.result = result;
							trigger.responded = true;
							trigger.animate = false;
							if(typeof event.current.ai.shown == 'number' && event.current.ai.shown < 0.95) {
								event.current.ai.shown += 0.3;
								if(event.current.ai.shown > 0.95) event.current.ai.shown = 0.95;
							}
						} else {
							event.current = event.current.next;
							event.goto(0);
						}
					},
					ai: {
						respondSha: true,
					},
				},
				"QX_SULI": {
					mod: {
						maxHandcard: function (player, num) {
							return num - 1;
						},
					},
				},
				"QX_WUSHUANG": {
					group: ["bz_ch", "bz_yisha"],
					audio: "wushuang",
					trigger: {
						player: "shaBegin",
					},
					forced: true,
					filter: function (event, player) {
						return event.target.num('h', 'shan') > 0;
					},
					content: function () {
						'step 0'
						if(trigger.target.num('h', 'shan') < 2) trigger.directHit = true;
					},
				},
				"QX_LIJIAN": {
					audio: "lijian",
					enable: "phaseUse",
					usable: 1,
					filter: function (event, player) {
						return game.countPlayer(function (current) {
							return current != player && current.sex == 'male';
						}) > 1;
					},
					check: function (card) {
						return 10 - get.value(card)
					},
					filterCard: true,
					position: "he",
					filterTarget: function (card, player, target) {
						if(player == target) return false;
						if(target.sex != 'male') return false;
						if(ui.selected.targets.length == 1) {
							return target.canUse({
								name: 'juedou'
							}, ui.selected.targets[0]);
						}
						return true;
					},
					targetprompt: ["先出杀", "后出杀"],
					selectTarget: 2,
					multitarget: true,
					content: function () {
						targets[1].useCard({
							name: 'juedou'
						}, targets[0], 'noai').animate = false;
						game.delay(0.5);
					},
					ai: {
						order: 8,
						result: {
							target: function (player, target) {
								if(ui.selected.targets.length == 0) {
									return -3;
								} else {
									return get.effect(target, {
										name: 'juedou'
									}, ui.selected.targets[0], target);
								}
							},
						},
						expose: 0.4,
						threaten: 3,
					},
				},
				"QX_BIYUE": {
					group: ["bz_ch", "bz_yisha"],
					forced: true,
					audio: "biyue",
					unique: true,
					trigger: {
						player: "damageBegin",
					},
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						'step 0'
						trigger.untrigger();
						trigger.finish();
						'step 1'
						player.loseHp(trigger.num)
						player.draw();
					},
				},
				"QX_BAOZHENG": {
					group: ["bz_yisha", "bz_ch"],
					audio: "hengzheng",
					trigger: {
						player: "phaseEnd",
					},
					filter: function (event, player) {
						return player.hp > 0;
					},
					check: function (event, player) {
						if(player.hp < 2) return false;
						return player.hp > 1;
					},
					content: function () {
						'step 0'
						player.chooseTarget('选择至多三名其他角色，获得其一张手牌', get.prompt('QX_BAOZHENG'), [1, 3], function (card, player, target) {
							return target != player && target.num('h') > 0;
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);
						});
						'step 1'
						if(result.bool) {
							for(var i = 0; i < result.targets.length; i++) {
								player.logSkill('QX_BAOZHENG', result.targets);
								player.gainPlayerCard(result.targets[i], 'h', true)
							}
							if(result.targets.length > 1) player.loseHp();
						} else {
							event.finish();
						}
					},
				},
				"QX_HUANGTIAN": {
					group: ["bz_yisha", "bz_ch"],
					audio: "huangtian",
					enable: ["chooseToRespond"],
					filterCard: true,
					position: "he",
					selectCard: 2,
					viewAs: {
						name: "shan",
					},
					viewAsFilter: function (player) {
						if(player.num('he') < 2) return false;
					},
					check: function () {
						return 2
					},
					prompt: "将两张牌当闪打出",
					ai: {
						respondShan: true,
						skillTagFilter: function (player) {
							if(player.num('he') < 2) return false;
						},
						basic: {
							useful: [7, 2],
							value: [7, 2],
						},
					},
				},
				"QX_LUOLEI": {
					audio: "leiji",
					trigger: {
						player: "respond",
					},
					filter: function (event, player) {
						return event.card.name == 'shan';
					},
					direct: true,
					content: function () {
						"step 0";
						player.chooseTarget(get.prompt('releiji')).ai = function (target) {
							if(target.hasSkill('hongyan')) return 0;
							return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
						};
						"step 1"
						if(result.bool) {
							player.logSkill('releiji', result.targets, 'thunder');
							event.target = result.targets[0];
							event.target.judge(function (card) {
								var suit = get.suit(card);
								if(suit == 'spade') return -4;
								if(suit == 'club') return -2;
								return 0;
							});
						} else {
							event.finish();
						}
						"step 2"
						if(result.suit == 'club') {
							player.draw(2);
						} else if(result.suit == 'spade') {
							event.target.damage('thunder');
						}
					},
					ai: {
						useShan: true,
						effect: {
							target: function (card, player, target, current) {
								if(get.tag(card, 'respondShan')) {
									var hastarget = game.hasPlayer(function (current) {
										return get.attitude(target, current) < 0;
									});
									var be = target.countCards('e', {
										color: 'black'
									});
									if(target.countCards('h', 'shan') && be) {
										if(!target.hasSkill('guidao')) return 0;
										return [0, hastarget ? target.countCards('he') / 2 : 0];
									}
									if(target.countCards('h', 'shan') && target.countCards('h') > 2) {
										if(!target.hasSkill('guidao')) return 0;
										return [0, hastarget ? target.countCards('h') / 4 : 0];
									}
									if(target.countCards('h') > 3 || (be && target.countCards('h') >= 2)) {
										return [0, 0];
									}
									if(target.countCards('h') == 0) {
										return [1.5, 0];
									}
									if(target.countCards('h') == 1 && !be) {
										return [1.2, 0];
									}
									if(!target.hasSkill('guidao')) return [1, 0.05];
									return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
								}
							},
						},
					},
				},
				"bz_ch": {
					trigger: {
						global: "gameStart",
					},
					forced: true,
					popup:false,
					filter: function (event, player) {
						return game.players.length > 0;
					},
					content: function () {
						game.broadcastAll(function(player){
							if(player.name == 'qx_bz_wenchou') player.node.name.innerHTML = '<font color=#FF0>河<br>北<br>狼</font> ';
							if(player.name == 'qx_bz_yanliang') player.node.name.innerHTML = '<font color=#FF0>河<br>北<br>虎</font> ';
							if(player.name == 'cw_bz_chengyu') player.node.name.innerHTML = '<font color=#FF0>心<br>定<br>之<br>谋<br>士</font> ';
							if(player.name == 'cw_bz_simayi') player.node.name.innerHTML = '<font color=#FF0>狼顾<br>之鬼</font> ';
							if(player.name == 'sh_bz_huangzhong') player.node.name.innerHTML = '<font color=#FF0>神<br>射<br>手</font> ';
							if(player.name == 'sh_bz_weiyan') player.node.name.innerHTML = '<font color=#FF0>傲骨<br>镇将</font> ';
							if(player.name == 'sh_bz_fazheng') player.node.name.innerHTML = '<font color=#FF0>恩怨<br>必报</font> ';
							if(player.name == 'qx_bz_guanning') player.node.name.innerHTML = '<font color=#FF0>断席<br>清心</font> ';
							if(player.name == 'dw_bz_zhangzhao') player.node.name.innerHTML = '<font color=#FF0>江东<br>肱骨</font> ';
							if(player.name == 'cw_bz_guojia') player.node.name.innerHTML = '<font color=#FF0>早逝<br>先知</font> ';
							if(player.name == 'dw_bz_dinfeng') player.node.name.innerHTML = '<font color=#FF0>轻装<br>老军</font> ';
							if(player.name == 'dw_bz_xusheng') player.node.name.innerHTML = '<font color=#FF0>奋先<br>之将</font> ';
							if(player.name == 'qx_bz_liubiao') player.node.name.innerHTML = '<font color=#FF0>自守<br>之君</font> ';
							if(player.name == 'cw_bz_zhangchunhua') player.node.name.innerHTML = '<font color=#FF0>冷艳<br>才女</font> ';
							if(player.name == 'dw_bz_sunjian') player.node.name.innerHTML = '<font color=#FF0>江东<br>英魂</font> ';
							if(player.name == 'sh_bz_zhugeliang') player.node.name.innerHTML = '<font color=#FF0>军师<br>将军</font> ';
							if(player.name == 'sh_bz_machao') player.node.name.innerHTML = '<font color=#FF0>锦<br>马<br>超</font> ';
							if(player.name == 'dw_bz_ganning') player.node.name.innerHTML = '<font color=#FF0>水上<br>锦帆</font> ';
							if(player.name == 'cw_bz_zhangliao') player.node.name.innerHTML = '<font color=#FF0>威震<br>逍遥</font> ';
							if(player.name == 'qx_bz_gongsunzan') player.node.name.innerHTML = '<font color=#FF0>白马<br>将军</font> ';
							if(player.name == 'qx_bz_huangshuo') player.node.name.innerHTML = '<font color=#FF0>奇<br>博<br>士</font> ';
							if(player.name == 'qx_bz_zhaoyun') player.node.name.innerHTML = '<font color=#FF0>少年<br>将军</font> ';
							if(player.name == 'cw_bz_caocao') player.node.name.innerHTML = '<font color=#FF0>乱世<br>奸雄</font> ';
							if(player.name == 'cw_bz_xunyu') player.node.name.innerHTML = '<font color=#FF0>大汉<br>辅臣</font> ';
							if(player.name == 'cw_bz_caiyan') player.node.name.innerHTML = '<font color=#FF0>异乡<br>孤魂</font> ';
							if(player.name == 'cw_bz_caoren') player.node.name.innerHTML = '<font color=#FF0>大魏<br>上将</font> ';
							if(player.name == 'cw_bz_xiahoudun') player.node.name.innerHTML = '<font color=#FF0>独<br>眼<br>狼</font> ';
							if(player.name == 'cw_bz_jiaxu') player.node.name.innerHTML = '<font color=#FF0>隐<br>身<br>的<br>毒<br>士</font> ';
							if(player.name == 'cw_bz_zhenfu') player.node.name.innerHTML = '<font color=#FF0>洛<br>神</font> ';
							if(player.name == 'dw_bz_zhouyu') player.node.name.innerHTML = '<font color=#FF0>美<br>周<br>郎</font> ';
							if(player.name == 'dw_bz_sunquan') player.node.name.innerHTML = '<font color=#FF0>江东<br>雄君</font> ';
							if(player.name == 'dw_bz_sunce') player.node.name.innerHTML = '<font color=#FF0>江<br>东<br>小<br>霸<br>王</font> ';
							if(player.name == 'dw_bz_daqiao') player.node.name.innerHTML = '<font color=#FF0>矜<br>持<br>的<br>美<br>人</font> ';
							if(player.name == 'dw_bz_xiaoqiao') player.node.name.innerHTML = '<font color=#FF0>天之<br>芳馨</font> ';
							if(player.name == 'dw_bz_luxun') player.node.name.innerHTML = '<font color=#FF0>书生<br>意气</font> ';
							if(player.name == 'dw_bz_lusu') player.node.name.innerHTML = '<font color=#FF0>竭<br>虑<br>的<br>忠<br>臣</font> ';
							if(player.name == 'sh_bz_liubei') player.node.name.innerHTML = '<font color=#FF0>潜渊<br>之龙</font> ';
							if(player.name == 'sh_bz_guanyu') player.node.name.innerHTML = '<font color=#FF0>武<br>圣</font> ';
							if(player.name == 'sh_bz_huangyueying') player.node.name.innerHTML = '<font color=#FF0>归<br>隐<br>的<br>杰<br>女</font> ';
							if(player.name == 'sh_bz_zhaoyun') player.node.name.innerHTML = '<font color=#FF0>常胜<br>将军</font> ';
							if(player.name == 'sh_bz_zhangfei') player.node.name.innerHTML = '<font color=#FF0>万<br>人<br>敌</font> ';
							if(player.name == 'sh_bz_pangtong') player.node.name.innerHTML = '<font color=#FF0>凤雏<br>先生</font> ';
							if(player.name == 'sh_bz_xushu') player.node.name.innerHTML = '<font color=#FF0>至<br>孝<br>的<br>游<br>子</font> ';
							if(player.name == 'qx_bz_diaochan') player.node.name.innerHTML = '<font color=#FF0>闭<br>月</font> ';
							if(player.name == 'qx_bz_lvbu') player.node.name.innerHTML = '<font color=#FF0>人中<br>吕布</font> ';
							if(player.name == 'qx_bz_dongzhuo') player.node.name.innerHTML = '<font color=#FF0>噬血<br>魔王</font> ';
							if(player.name == 'qx_bz_yuanshao') player.node.name.innerHTML = '<font color=#FF0>四世<br>三公</font> ';
							if(player.name == 'qx_bz_zhangjiao') player.node.name.innerHTML = '<font color=#FF0>广贤<br>良师</font> ';
						},player);
					},
				},
				"QX_LONGQIANG": {
					audio: "reyajiao",
					trigger: {
						player: "shaMiss",
					},
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						'step 0'
						player.chooseToUse('是否使用一张【杀】？', {
							name: 'sha'
						});
					},
				},
				"QX_YIYAN": {
					group: ["bz_yisha", "bz_ch"],
					audio: "reyajiao",
					trigger: {
						source: "damageEnd",
					},
					filter: function (event, player) {
						return event.card && event.card.name == 'sha';
					},
					content: function () {
						'step 0'
						player.chooseTarget('选择一名目标，令其摸取一张牌', get.prompt('QX_YIYAN'), 1, function (card, player, target) {
							return target.hp > 0;
						}).set('ai', function (target) {
							return ai.get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {
							for(var i = 0; i < result.targets.length; i++) {
								player.logSkill('QX_YIYAN', result.targets);
								result.targets[i].draw()
							};
						};
					},
				},
				"QX_BOCAI": {
					audio: "jizhi",
					trigger: {
						global: "phaseBefore",
					},
					filter: function (event, player) {
						if(event.player == player && !event.player.skills) return false;
						return true;
					},
					forced: true,
					content: function () {
						player.addTempSkill(trigger.player.skills.randomGet(), {
							player: 'phaseAfter'
						});
					},
				},
				"QX_QIAOSI": {
					group: ["bz_yisha", "bz_ch"],
					trigger: {
						player: "useSkillBegin",
					},
					filter: function (event, player) {
						return _status.currentPhase == player
					},
					content: function () {
						'step 0'
						player.draw()
					},
				},
				"QX_YICONG": {
					group: ["bz_yisha", "bz_ch"],
					mod: {
						globalTo: function (from, to, distance) {
							return distance + 1;
						},
						globalFrom: function (from, to, distance) {
							return distance - 1;
						},
					},
				},
				"CW_TUXI": {
					audio: "tuxi",
					group: ["bz_yisha", "bz_ch"],
					trigger: {
						global: "phaseBegin",
					},
					filter: function (event, player) {
						return player.num('he') > 1 && event.player != player;
					},
					check: function (event, player) {
						if(ai.get.attitude(player, event.player) >= 0) return false;
						if(event.player.num('he') > player.num('he')) return false;
						return player.num('he') > 2 && player.num('h', 'sha') > 0;
					},
					content: function () {
						'step 0'
						player.chooseToDiscard(2, true, 'he');
						'step 1'
						player.gainPlayerCard(1, trigger.player, 'he', true);
						'step 2'
						if(trigger.player.num('h') == 0 || trigger.player.num('e') == 0) player.chooseToUse('是否对之使用一张杀', {
							name: 'sha'
						}, trigger.player);
					},
					ai: {
						expose: 0.3,
					},
				},
				"SH_JICHI": {
					audio: "tieji",
					group: ["bz_yisha", "bz_ch"],
					trigger: {
						player: "phaseEnd",
					},
					filter: function (event, player) {
						return player.num('e') > 0 && player.num('h', 'sha') > 0;
					},
					check: function (event, player) {
						if(player.num('e') < 2) return false;
						return player.num('h') > 1;
					},
					content: function () {
						'step 0'
						player.chooseToDiscard(true, 'e');
						'step 1'
						player.chooseToUse('是否使用一张杀', {
							name: 'sha'
						});
					},
					ai: {
						expose: 0.3,
					},
				},
				"DW_JIEXI": {
					audio: "qixi",
					group: ["bz_yisha", "bz_ch"],
					trigger: {
						global: "phaseBegin",
					},
					filter: function (event, player) {
						return player.num('h') > 0 && event.player != player && event.player.num('hej') > 0;
					},
					check: function (event, player) {
						if(ai.get.attitude(player, event.player) > 0) return false;
						if(player.num('h') == 1 && player.num('h', 'tao') > 0) return false;
						if(player.num('h') == 1 && player.num('h', 'jiu') > 0) return false;
						if(player.hp < 3 && player.num('h') < 2) return false;
						return player.num('h') > 0;
					},
					content: function () {
						'step 0'
						player.chooseToDiscard(true, 'h');
						'step 1'
						player.useCard({
							name: 'guohe'
						}, trigger.player);
					},
					ai: {
						expose: 0.3,
					},
				},
				"DW_SHUIDAO": {
					audio: "qixi",
					trigger: {
						player: "damageEnd",
					},
					filter: function (event, player) {
						return event.source && event.source.num('h') > 2;
					},
					content: function () {
						'step 0'
						player.gainPlayerCard(1, trigger.source, 'h', true)
					},
				},
				"BZMS_JUEDOU": {
					forced: true,
					skillAnimation: "epic",
					animationStr: "兵临城下",
					animationColor: "thunder",
					trigger: {
						player: "juedouBegin",
					},
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {},
				},
				"BZMS_TAO": {
					forced: true,
					skillAnimation: "epic",
					animationStr: "修明政理",
					animationColor: "recover",
					trigger: {
						player: "taoBegin",
					},
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {},
				},
				"BZMS_BING1": {
					forced: true,
					skillAnimation: "epic",
					animationStr: "奋甲百万",
					animationColor: "thunder",
					trigger: {
						player: "phaseBegin",
					},
					filter: function (event, player) {
						return player.num('h', 'sha') > 4;
					},
					content: function () {},
				},
				"BZMS_BING2": {
					forced: true,
					skillAnimation: "epic",
					animationStr: "带甲十万",
					animationColor: "thunder",
					trigger: {
						player: "phaseBegin",
					},
					filter: function (event, player) {
						return player.num('h', 'sha') > 2;
					},
					content: function () {},
				},
				"BZMS_FANG1": {
					forced: true,
					skillAnimation: "epic",
					animationStr: "守圄有余",
					animationColor: "recover",
					trigger: {
						player: "phaseEnd",
					},
					filter: function (event, player) {
						return player.num('h', 'shan') > 1;
					},
					content: function () {},
				},
				"BZMS_FANG2": {
					forced: true,
					skillAnimation: "epic",
					animationStr: "天佑之国",
					animationColor: "recover",
					trigger: {
						player: "phaseEnd",
					},
					filter: function (event, player) {
						return player.num('h', 'shan') > 3;
					},
					content: function () {},
				},
				"BZMS_FANG3": {
					forced: true,
					skillAnimation: "epic",
					animationStr: "围困之城",
					animationColor: "thunder",
					trigger: {
						player: "phaseEnd",
					},
					filter: function (event, player) {
						return player.hp < 3 && player.num('h', 'shan') < 0;
					},
					content: function () {},
				},
				"BZMS_BING3": {
					forced: true,
					skillAnimation: "epic",
					animationStr: "无用之兵",
					animationColor: "thunder",
					trigger: {
						player: "phaseBegin",
					},
					filter: function (event, player) {
						return player.num('h', 'sha') < 1
					},
					content: function () {},
				},
				"BZMS_FANG4": {
					forced: true,
					skillAnimation: "epic",
					animationStr: "困兽犹斗",
					animationColor: "thunder",
					trigger: {
						player: "phaseEnd",
					},
					filter: function (event, player) {
						return player.num('h', 'shan') < 1 && player.num('h', 'sha') > 0 && player.hp > 1
					},
					content: function () {},
				},
				"BZMS_MOU1": {
					forced: true,
					skillAnimation: "epic",
					animationStr: "天时地利",
					animationColor: "fire",
					trigger: {
						player: "huogongBegin",
					},
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {},
				},
				"BZMS_MOU2": {
					forced: true,
					skillAnimation: "epic",
					animationStr: "上兵伐谋",
					animationColor: "thunder",
					trigger: {
						player: ["shunshouBegin", "wuzhongBegin"],
					},
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {},
				},
				"BZMS_ZSKP": {
					trigger: {
						global: "gameStart",
					},
					forced: true,
					popup:false,
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						'step 0'
						if(player.name == 'sh_bz_zhugeliang') player.gain(game.createCard('bz_longzhongdui'));
						if(player.name == 'cw_bz_caocao') player.gain(game.createCard('bz_zhaoxianling'));
						if(player.name == 'sh_bz_guanyu') player.gain(game.createCard('bz_kanglongyouhui'));
						'step 1'
						if(player.name == 'sh_bz_zhugeliang') player.addSkill('LZD');
						if(player.name == 'cw_bz_caocao') player.addSkill('ZXL')
						if(player.name == 'sh_bz_guanyu') player.addSkill('KLYH')
					},
				},
				ZXL: {
					mark: true,
					intro: {
						content: "招贤令",
					},
					audio: "rejianxiong",
					forced: true,
					skillAnimation: "epic",
					animationStr: "青青子衿",
					animationColor: "recover",
					trigger: {
						player: "phaseBegin",
					},
					filter: function (event, player) {
						return player.num('h') < 2;
					},
					content: function () {
						'step 0'
						player.gain(game.createCard('bz_zhaoxianling'));
					},
				},
				KLYH: {
					audio: "wusheng",
					mark: true,
					intro: {
						content: "亢龙有悔",
					},
					forced: true,
					skillAnimation: "epic",
					animationStr: "亢龙有悔",
					animationColor: "thunder",
					trigger: {
						player: "damageEnd",
					},
					filter: function (event, player) {
						return player.hp > 0;
					},
					content: function () {
						'step 0'
						player.gain(game.createCard('bz_kanglongyouhui'));
					},
				},
				"QXZL_CF": {
					forced: true,
					skillAnimation: true,
					animationStr: "天子册封",
					animationColor: "fire",
					trigger: {
						global: "gameStart",
					},
					filter: function (event, player) {
						return game.hasPlayer(function (current) {
							return current != player && current.group == player.group;
						});
					},
					content: function () {
						'step 0'
						player.chooseTarget('选择一名势力与你一致的角色，封其为辅臣', get.prompt('QXZL_CF'), function (card, player, target) {
							return target != player && target.group == player.group && target.identity != 'zhong';
						}).set("ai", function (target) {
							return get.damageEffect(target, player, player);
						});
						'step 1'
						if(result.bool) {
							//player.logSkill('QXZL_CF', result.targets);
							player.line(result.targets);
							result.targets[0].identity = 'zhong';
							result.targets[0].addSkill('FC_YW')
							result.targets[0].removeSkill('ZH_JB')
							player.removeSkill('QXZL_CF');
							result.targets[0].draw(2)
							game.showIdentity();
						}
					},
				},
				"ZH_PH": {
					skillAnimation: "epic",
					animationStr: "势力消亡",
					animationColor: "thunder",
					forced: true,
					trigger: {
						player: "dieBegin",
					},
					filter: function (event, player) {
						return player.identity != 'zhong' && player.group != game.zhu.group;
					},
					content: function () {
						'step 0'
						var n = [1, 2].randomGet();
						if(n == 1) {};
						if(n == 2) {
							player.identity = 'fan';
							trigger.untrigger();
							trigger.finish();
							player.chooseToDiscard(999, 'hej', true)
							player.draw(4);
							player.recover(999);
							player.maxHp--;
							player.removeSkill('ZH_PH')
							player.removeSkill('ZH_JB')
							player.removeSkill('zl_sljb');
							player.removeSkill('ZH_TQ1')
							player.removeSkill('ZH_TQ2')
							player.addSkill('PZ_XY');
							player.addSkill('zl_fklx')
							if(get.population('fan') > 1) player.insertPhase();
						};
						'step 1'
						lib.translate.fan = '叛贼';
						game.showIdentity();
					},
				},
				"zl_sljb": {
					forced: true,
					skillAnimation: "epic",
					animationStr: "势力扩大",
					animationColor: "recover",
					trigger: {
						source: "dieBegin",
					},
					filter: function (event, player) {
						if(event.tqk_hadTrigger1==true) return false;
						return player.hp > 0 && player.identity == 'nei';
					},
					content: function () {
						'step 0'
						trigger.tqk_hadTrigger1=true;
						player.recover()
						player.addSkill('ZH_TQ1');
						'step 1'
						player.removeSkill('zl_sljb');
						player.addSkill('zl_yfbz');
					},
				},
				"zl_ygql": {
					unique: true,
					skillAnimation: "epic",
					animationStr: "一股清流",
					animationColor: "recover",
					trigger: {
						source: "dieBegin",
					},
					forced: true,
					filter: function (event, player) {
						if(event.tqk_hadTrigger1==true) return false;
						return player.identity == 'zhong' && event.player.identity != 'zhu';
					},
					content: function () {
						'step 0'
						trigger.tqk_hadTrigger1=true;
						player.addSkill('zl_kfhs');
						player.removeSkill('zl_ygql');
						'step 1'
						player.addSkill('FC_TQ1');
						player.draw(2)
						game.zhu.draw(2)
					},
				},
				"zl_fklx": {
					unique: true,
					skillAnimation: "epic",
					animationStr: "郡县沦陷",
					animationColor: "recover",
					trigger: {
						source: "dieBegin",
					},
					forced: true,
					filter: function (event, player) {
						if(event.tqk_hadTrigger1==true) return false;
						return player.identity == 'fan' && event.player.identity != 'zhu';
					},
					content: function () {
						'step 0'
						trigger.tqk_hadTrigger1=true;
						player.addSkill('zl_txzd');
						player.removeSkill('zl_fklx');
						'step 1'
						for(var i = 0; i < game.players.length; i++) {
							if(game.players[i].identity == 'zhu' || game.players[i].identity == 'nei' || game.players[i].identity == 'zhong') continue
							game.players[i].draw();
						}
						'step 2'
						game.zhu.chooseToDiscard(2, 'h', true)
					},
				},
				"zl_kfhs": {
					unique: true,
					skillAnimation: "epic",
					animationStr: "匡扶汉室",
					animationColor: "fire",
					trigger: {
						source: "dieBegin",
					},
					forced: true,
					filter: function (event, player) {
						if(event.tqk_hadTrigger1==true) return false;
						return player.identity == 'zhong' && event.player.identity != 'zhu';
					},
					content: function () {
						'step 0'
						trigger.tqk_hadTrigger1=true;
						player.addSkill('zl_yktx');
						player.removeSkill('zl_kfhs');
						'step 1'
						player.removeSkill('FC_TQ1')
						player.addSkill('FC_TQ2');
						player.recover()
						player.draw();
						game.zhu.recover()
						game.zhu.draw()
					},
				},
				"zl_yktx": {
					unique: true,
					skillAnimation: "epic",
					animationStr: "一匡天下",
					animationColor: "thunder",
					trigger: {
						source: "dieBegin",
					},
					forced: true,
					filter: function (event, player) {
						if(event.tqk_hadTrigger1==true) return false;
						return player.identity == 'zhong' && event.player.identity != 'zhu';
					},
					content: function () {
						'step 0'
						trigger.tqk_hadTrigger1=true;
						player.addSkill('FC_CX');
						player.removeSkill('zl_yktx');
						player.removeSkill('FC_YW');
						'step 1'
						game.zhu.draw(4)
						player.draw(4)
						player.recover()
						game.zhu.recover()
					},
				},
				"zl_yfbz": {
					unique: true,
					skillAnimation: "epic",
					animationStr: "一方霸主",
					animationColor: "fire",
					trigger: {
						source: "dieBegin",
					},
					forced: true,
					filter: function (event, player) {
						if(event.tqk_hadTrigger1==true) return false;
						return player.identity == 'nei';
					},
					content: function () {
						'step 0'
						trigger.tqk_hadTrigger1=true;
						player.changeHujia()
						player.draw(2);
						player.removeSkill('ZH_TQ1');
						player.addSkill('zl_txzb');
						player.removeSkill('zl_yfbz');
						'step 1'
						player.addSkill('ZH_TQ2')
					},
				},
				"zl_txzb": {
					unique: true,
					skillAnimation: "epic",
					animationStr: "天下至霸",
					animationColor: "thunder",
					trigger: {
						source: "dieBegin",
					},
					forced: true,
					filter: function (event, player) {
						if(event.tqk_hadTrigger1==true) return false;
						return player.identity == 'nei';
					},
					content: function () {
						'step 0'
						trigger.tqk_hadTrigger1=true;
						player.recover();
						player.removeSkill('ZH_PH')
						player.removeSkill('ZH_JB');
						player.draw(4);
						player.removeSkill('zl_txzb');
						'step 1'
						player.addSkill('ZH_XH');
					},
				},
				"zl_txzd": {
					unique: true,
					skillAnimation: "epic",
					animationStr: "天下震动",
					animationColor: "thunder",
					trigger: {
						source: "dieBegin",
					},
					forced: true,
					filter: function (event, player) {
						if(event.tqk_hadTrigger1==true) return false;
						return player.identity == 'fan' && event.player.identity != 'zhu';
					},
					content: function () {
						'step 0'
						trigger.tqk_hadTrigger1=true;
						player.addSkill('zl_qsjj');
						player.removeSkill('zl_txzd');
						'step 1'
						for(var i = 0; i < game.players.length; i++) {
							if(game.players[i].identity == 'zhu' || game.players[i].identity == 'nei' || game.players[i].identity == 'zhong') continue
							game.players[i].draw();
						}
						'step 2'
						game.zhu.loseHp()
						game.zhu.chooseToDiscard(true)
						'step 3'
						player.insertPhase();
					},
				},
				"zl_qsjj": {
					unique: true,
					skillAnimation: "epic",
					animationStr: "气数将尽",
					animationColor: "thunder",
					trigger: {
						source: "dieBegin",
					},
					forced: true,
					filter: function (event, player) {
						if(event.tqk_hadTrigger1==true) return false;
						return player.identity == 'fan' && event.player.identity != 'zhu';
					},
					content: function () {
						'step 0'
						trigger.tqk_hadTrigger1=true;
						player.addSkill('PC_ZS');
						player.removeSkill('zl_qsjj');
						player.removeSkill('PZ_XY')
						'step 1'
						for(var i = 0; i < game.players.length; i++) {
							if(game.players[i].identity == 'zhu' || game.players[i].identity == 'nei' || game.players[i].identity == 'zhong') continue
							game.players[i].draw();
							game.players[i].addSkill('PC_NL');
							game.players[i].skip('phaseUse');
						}
						'step 2'
						game.zhu.loseHp()
					},
				},
				"ZH_TQ1": {
					mod: {
						globalFrom: function (from, to, distance) {
							return distance - 1;
						},
					},
				},
				"ZH_TQ2": {
					mod: {
						globalTo: function (from, to, distance) {
							return distance + 1;
						},
						globalFrom: function (from, to, distance) {
							return distance - 1;
						},
						maxHandcard: function (player, num) {
							return num + 1;
						},
					},
				},
				"FC_TQ1": {
					mod: {
						maxHandcard: function (player, num) {
							return num++;
						},
					},
				},
				"FC_TQ2": {
					mod: {
						globalTo: function (from, to, distance) {
							return distance + 1;
						},
						globalFrom: function (from, to, distance) {
							return distance - 1;
						},
					},
				},
				"ZH_XH": {
					mark: true,
					intro: {
						content: "乱世奸雄",
					},
					//skillAnimation: "epic",
					//animationStr: "挟天子以令诸侯",
					//animationColor: "fire",
					audio: "rejianxiong",
					enable: "phaseUse",
					usable: 1,
					filterCard: true,
					filterTarget: function (card, player, target) {
						return player != target && target.identity == 'zhu';
					},
					content: function () {
						'step 0'
						target.skip('phaseUse')
						'step 1'
						lib.translate.zhu = '傀儡';
						game.showIdentity();
						'step 2'
						if(game.players.length < 3) target.chooseToDiscard(2, 'he', true);
					},
					ai: {
						order: 9,
						result: {
							player: 1,
							target: -1,
						},
					},
				},
				"FC_CX": {
					mark: true,
					intro: {
						content: "大汉丞相",
					},
					trigger: {
						global: "damageEnd",
					},
					filter: function (event, player) {
						return event.source && event.player.hp > 0 && event.player.identity == 'zhu';
					},
					content: function () {
						'step 0'
						player.chooseToUse('是否使用一张【杀】？', {
							name: "sha"
						});
						'step 1'
						trigger.player.draw(2)
					},
				},
				"SH_ZHISHENG": {
					skillAnimation: true,
					animationStr: "谋定天下",
					animationColor: "fire",
					enable: "phaseUse",
					usable: 1,
					audio: "huoji",
					filter: function (event, player) {
						return player.countCards('he') > 0
					},
					chooseButton: {
						dialog: function () {
							var list = ['taoyuan', 'wugu', 'juedou', 'huogong', 'jiedao', 'tiesuo', 'guohe', 'shunshou', 'wuzhong', 'wanjian', 'nanman'];
							for(var i = 0; i < list.length; i++) {
								list[i] = ['锦囊', '', list[i]];
							}
							return ui.create.dialog([list, 'vcard']);
						},
						check: function (button) {
							var player = _status.event.player;
							var recover = 0,
								lose = 1,
								players = game.filterPlayer();
							for(var i = 0; i < players.length; i++) {
								if(!players[i].isOut()) {
									if(players[i].hp < players[i].maxHp) {
										if(get.attitude(player, players[i]) > 0) {
											if(players[i].hp < 2) {
												lose--;
												recover += 0.5;
											}
											lose--;
											recover++;
										} else if(get.attitude(player, players[i]) < 0) {
											if(players[i].hp < 2) {
												lose++;
												recover -= 0.5;
											}
											lose++;
											recover--;
										}
									} else {
										if(get.attitude(player, players[i]) > 0) {
											lose--;
										} else if(get.attitude(player, players[i]) < 0) {
											lose++;
										}
									}
								}
							}
							if(lose > recover && lose > 0) return(button.link[2] == 'nanman') ? 1 : -1;
							if(lose < recover && recover > 0) return(button.link[2] == 'taoyuan') ? 1 : -1;
							return(button.link[2] == 'wuzhong') ? 1 : -1;
						},
						backup: function (links, player) {
							return {
								filterCard: true,
								filterCard: true,
								selectCard: 1,
								position: 'he',
								popname: true,
								viewAs: {
									name: links[0][2]
								},
							}
						},
						prompt: function (links, player) {
							return '选择任意一张牌当作' + get.translation(links[0][2]) + '使用';
						},
					},
					ai: {
						order: 4,
						result: {
							player: function (player) {
								var num = 0;
								var cards = player.getCards('h');
								if(cards.length > 0 && player.hp > 1) return 1;
								for(var i = 0; i < cards.length; i++) {
									num += Math.max(0, get.value(cards[i], player, 'raw'));
								}
								num /= cards.length;
								num *= Math.min(cards.length, player.hp);
								return 12 - num;
							},
						},
						threaten: 1.6,
					},
				},
				"SH_DONGCHA": {
					audio: "kanpo",
					enable: "chooseToUse",
					position: "hej",
					filterCard: function (card) {
						return get.color(card) == 'black' || get.color(card) == 'red';
					},
					viewAsFilter: function (player) {
						return player.num('hej', {
							color: ['black', 'red']
						}) > 0;
					},
					viewAs: {
						name: "wuxie",
						suit: "diamond",
						number: 12,
						cards: [{
							"node": {
								"image": {},
								"info": {},
								"name": {},
								"name2": {},
								"background": {},
								"intro": {},
								"range": {}
							},
							"storage": {},
							"vanishtag": [],
							"_uncheck": [],
							"suit": "diamond",
							"number": 12,
							"name": "fangtian",
							"cardid": "7446296388",
							"clone": {
								"name": "fangtian",
								"suit": "diamond",
								"number": 12,
								"node": {
									"name": {},
									"info": {},
									"intro": {},
									"background": {},
									"image": {}
								},
								"_transitionEnded": true,
								"timeout": 5438
							},
							"original": "e",
							"timeout": 5419
						}],
					},
					prompt: "将一张牌当无懈可击使用",
					check: function (card) {
						return 8 - ai.get.value(card)
					},
					threaten: 1.2,
					ai: {
						basic: {
							useful: [6, 4],
							value: [6, 4],
						},
						result: {
							player: 1,
						},
						expose: 0.2,
					},
				},
				"SH_WEIWO": {
					group: ["bz_yisha", "bz_ch"],
					mod: {
						globalTo: function (from, to, distance) {
							return distance + 1;
						},
						globalFrom: function (from, to, distance) {
							return distance - 1;
						},
					},
				},
				"DW_CHUANGZHEN": {
					group: ["bz_yisha", "bz_ch"],
					audio: "yinghun",
					trigger: {
						player: "shaBegin",
					},
					filter: function (event, player) {
						return player.num('h') > 0 && event.target.num('h') > 0;
					},
					check: function (event, player) {
						if(player.num('h') < 2) return false;
						if(1 < player.num('h') < 4 && player.hp < 2) return false;
						return player.hp > 1 && player.num('h') > 1;
					},
					content: function () {
						'step 0'
						player.chooseToDiscard(2, 'h', true);
						'step 1'
						trigger.target.chooseToDiscard(2, 'h', true);
					},
				},
				"CW_JUEQING": {
					trigger: {
						source: "damageBefore",
					},
					forced: true,
					audio: "jueqing",
					priority: 16,
					check: function () {
						return false;
					},
					content: function () {
						trigger.untrigger();
						trigger.finish();
						var ex = 0;
						if(trigger.card && trigger.card.name == 'sha') {
							if(player.hasSkill('jiu')) ex++;
							if(player.hasSkill('luoyi2')) ex++;
							if(player.hasSkill('reluoyi2')) ex++;
						}
						trigger.player.loseHp(trigger.num + ex);
						player.draw();
						player.chooseToDiscard(true)
					},
					ai: {
						jueqing: true,
					},
				},
				"CW_MIEKOU": {
					mod: {
						cardSavable: function (card, player) {
							if(!_status.currentPhase) return;
							if(_status.currentPhase.hasSkill('CW_MIEKOU') && _status.currentPhase != player) {
								if(card.name == 'tao' && _status.event.dying != player) return false;
							}
						},
					},
				},
				"QX_ZISHOU": {
					group: ["bz_yisha", "bz_ch"],
					mod: {
						maxHandcard: function (player, num) {
							return num += player.hp;
						},
						globalFrom: function (from, to, distance) {
							return distance += 1;
						},
					},
				},
				LZD: {
					audio: "kongcheng",
					mark: true,
					intro: {
						content: "三分天下",
					},
					forced: true,
					skillAnimation: "epic",
					animationStr: "卧龙出山",
					animationColor: "thunder",
					trigger: {
						player: "phaseBegin",
					},
					filter: function (event, player) {
						return game.players.length == 3
					},
					content: function () {
						'step 0'
						player.gain(game.createCard('bz_longzhongdui'));
					},
				},
				"DW_POJUN": {
					group: ["bz_yisha", "bz_ch"],
					audio: "pojun",
					trigger: {
						source: "damageEnd",
					},
					check: function (event, player) {
						if(ai.get.attitude(player, event.player) > 0) return false;
					},
					filter: function (event, player) {
						return event.player.num('he') > 0 && event.card && event.card.name == 'sha';
					},
					content: function () {
						player.discardPlayerCard(1, trigger.player, 'he', true)
					},
				},
				"CW_BUJI": {
					mod: {
						globalFrom: function (from, to, distance) {
							return distance - 1;
						},
					},
					group: "CW_BUJI_1",
					subSkill: {
						"1": {
							mod: {
								globalTo: function (from, to, distance) {
									return distance - 1;
								},
							},
							sub: true,
						},
					},
				},
				"CW_GUICAI": {
					group: ["bz_ch", "bz_yisha"],
					mod: {
						cardUsable: function (card, player, num) {
							if(card.name == 'sha') return 2;
						},
					},
					ai: {
						unequip: true,
						skillTagFilter: function (player, tag, arg) {
							if(!get.zhu(player, 'shouyue')) return false;
							if(arg && arg.name == 'sha') return true;
							return false;
						},
					},
				},
				"DW_GUZHENG": {
					group: ["bz_ch", "bz_yisha"],
					mod: {
						maxHandcard: function (player, num) {
							return num + 1;
						},
					},
				},
				"DW_ROUBO": {
					group: ["bz_yisha", "bz_ch"],
					audio: "duanbing",
					trigger: {
						global: "phaseBegin",
					},
					filter: function (event, player) {
						return event.player != player && event.player.num('h') >= player.num('h');
					},
					check: function (event, player) {
						if(ai.get.attitude(player, event.player) > 0) return false;
						return player.num('h', 'sha') > 0 && player.num('h', 'shan') > 0;
					},
					content: function () {
						'step 0'
						player.chooseToUse('是否使用一张【杀】？', {
							name: 'sha'
						}, trigger.player);
						'step 1'
						trigger.player.chooseToUse('是否使用一张【杀】？', player, {
							name: 'sha'
						});
					},
				},
				"QX_DANBO": {
					group: ["bz_ch", "bz_yisha"],
					trigger: {
						player: "phaseDrawBegin",
					},
					forced: true,
					unique: true,
					content: function () {
						trigger.num--;
					},
					ai: {
						threaten: 1.3,
					},
				},
				"DW_CHAOCHEN": {
					audio: "guzheng",
					trigger: {
						player: "damageEnd",
					},
					filter: function (event, player) {
						return player.hp > 0 && player.num('h') > player.hp && player.num('h') > 1;
					},
					content: function () {
						'step 0'
						player.chooseTarget('请选择一名目标，令之获得【固政】', get.prompt('DW_GUZHENG'), 1, function (card, player, target) {
							return target != player;
						}).set('ai', function (target) {
							return ai.get.attitude(player, target);
						});
						'step 1'
						if(result.bool) {
							for(var i = 0; i < result.targets.length; i++) {
								player.chooseToDiscard(2, true);
								player.logSkill('DW_GUZHENG', result.targets);
								result.targets[i].addSkill('DW_GUZHENG')
							};
						};
					},
				},
				"QX_DUANXI": {
					group: ["bz_yisha", "bz_ch"],
					trigger: {
						target: "shaBegin",
					},
					filter: function (event, player) {
						return player.hp > 0;
					},
					check: function (event, player) {
						if(ai.get.attitude(player, event.player) > 0) return false;
					},
					content: function () {
						'step 0'
						player.chooseToDiscard().ai = function (card) {
							return 3 - ai.get.value(card);
						}
						'step 1'
						if(player.num('h') <= trigger.player.num('h')) player.discardPlayerCard(1, trigger.player, 'he', true)
							'step 2'
						player.draw()
					},
				},
				"SH_ENYUAN": {
					audio: "enyuan",
					trigger: {
						player: "damageEnd",
					},
					check: function (event, player) {
						var att = get.attitude(player, event.source);
						var num = event.source.countCards('h');
						if(att <= 0) return true;
						if(num > 2) return true;
						if(num) return att < 4;
						return false;
					},
					filter: function (event, player) {
						return event.source && event.source != player && event.num > 0 && event.source.isAlive();
					},
					content: function () {
						"step 0"
						event.num = trigger.num;
						"step 1"
						trigger.source.chooseCard('交给' + get.translation(player) + '一张手牌或流失一点体力').set('ai', function (card) {
							if(get.attitude(_status.event.player, _status.event.getParent().player) > 0) {
								return 11 - get.value(card);
							} else {
								return 7 - get.value(card);
							}
						});
						"step 2"
						if(result.bool) {
							player.gain(result.cards[0], trigger.source);
							trigger.source.$give(1, player);
						} else {
							trigger.source.loseHp();
						}
						if(event.num > 1) {
							event.num--;
							event.goto(1);
						}
					},
					ai: {
						effect: {
							target: function (card, player, target) {
								if(player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
								if(!target.hasFriend()) return;
								if(get.tag(card, 'damage')) return [1, 0, 0, -0.7];
							},
						},
					},
					group: ["xinenyuan2", "bz_ch", "bz_yisha"],
				},
				"SH_JIGONG": {
					group: ["bz_ch", "bz_yisha"],
					mod: {
						globalFrom: function (from, to, distance) {
							return distance - Infinity;
						},
					},
				},
				"SH_KUANGGU": {
					group: ["bz_ch", "bz_yisha"],
					trigger: {
						source: "damageEnd",
					},
					filter: function (event, player) {
						return get.distance(player, event.player) <= 1 && event.num > 0;
					},
					forced: true,
					direct: true,
					audio: "kuanggu",
					content: function () {
						'step 0'
						event.num = trigger.num;
						'step 1'
						player.draw(trigger.num);
					},
				},
				"CW_DANMOU": {
					group: ["bz_yisha", "bz_ch"],
					audio: "shefu",
					enable: "phaseUse",
					usable: 1,
					filter: function (event, player) {
						return player.hp > 1;
					},
					filterTarget: function (card, player, target) {
						return player != target && target.num('he') > 0;
					},
					check: function (event, player) {
						if(player.hp < 2) return false;
						if(player.num('h') < 3 && player.hp < 2) return false;
						return player.hp > 1;
					},
					content: function () {
						'step 0'
						player.loseHp()
						'step 1'
						player.discardPlayerCard(2, target, 'he', true);
					},
					ai: {
						expose: 0.5,
						order: 8,
						result: {
							player: -0.5,
							target: function (player, target) {
								if(target.num('he') > 1) return -1;
								if(target.num('he') < 2) return -1;
							},
						},
					},
				},
				"CW_HUALAO": {
					mod: {
						targetEnabled: function (card, player, target, now) {
							if(target.hp == 1) {
								if(card.name == 'sha') return false;
							}
						},
					},
					ai: {
						noh: true,
						skillTagFilter: function (player, tag) {
							if(tag == 'noh') {
								if(player.hp != 1) return false;
							}
						},
					},
				},
				"CW_WEICHENG": {
					mod: {
						globalTo: function (from, to, distance) {
							return distance - 1;
						},
					},
				},
				"CW_LANGGU": {
					group: ["bz_yisha", "bz_ch"],
					audio: "fankui",
					trigger: {
						global: "damageEnd",
					},
					filter: function (event, player) {
						if(player.hasSkill('CW_LANGGU2')) return false;
						return event.player != player && event.player.num('he') > 0 && _status.currentPhase != player
					},
					check: function (event, player) {
						if(ai.get.attitude(player, event.player) > 3) return false;
					},
					content: function () {
						'step 0'
						player.gainPlayerCard(1, 'he', true, trigger.player);
						'step 1'
						player.chooseCard('交给' + get.translation(trigger.player) + '一张手牌', true)
						'step 2'
						trigger.player.gain(result.cards[0], player)
						player.$give(result.cards[0], trigger.player, true)
						player.addTempSkill('CW_LANGGU2')
					},
				},
				"CW_MIAOSUAN": {
					audio: "guicai",
					trigger: {
						player: "phaseBegin",
					},
					filter: function (event, player) {
						return player.num('h') > 0;
					},
					content: function () {
						"step 0"
						player.showHandcards();
						"step 1"
						var cards = player.getCards('h');
						for(var i = 1; i < cards.length; i++) {
							if(get.color(cards[i]) != get.color(cards[0])) return;
						}
						player.draw(2);
					},
					ai: {
						threaten: 0.9,
					},
				},
				"QX_HUBU": {
					group: ["bz_ch", "bz_yisha"],
					audio: "shuangxiong",
					trigger: {
						player: "shaMiss",
					},
					filter: function (event, player) {
						return player.hp > 0 && event.player.num('e') > 0;
					},
					usable: 1,
					check: function (event, player) {
						if(ai.get.attitude(player, event.player) >= 0) return false;
					},
					content: function () {
						'step 0'
						player.diacardPlayerCard(1, 'e', trigger.player, true)
					},
				},
				"QX_LANGLUE": {
					group: ["bz_ch", "bz_yisha"],
					audio: "shuangxiong",
					trigger: {
						source: "damageEnd",
					},
					check: function (event, player) {
						if(ai.get.attitude(player, event.player) > 0) return false;
					},
					filter: function (event, player) {
						return event.card && event.card.name == 'sha' && event.player.num('h') > 0;
					},
					content: function () {
						player.gainPlayerCard(1, trigger.player, 'h', true)
					},
				},
				"PC_NL": {
					skillAnimation: "epic",
					animationStr: "自相残杀",
					animationColor: "thunder",
					forced: true,
					trigger: {
						player: "phaseBegin",
					},
					filter: function (event, player) {
						return player.identity == 'fan' && player.group != game.zhu.group;
					},
					content: function () {
						'step 0'
						var n = [1, 2].randomGet();
						if(n == 1) {};
						if(n == 2) {
							if(get.population('nei') < 3) {
								player.identity = 'nei';
								player.chooseToDiscard(true);
								player.removeSkill('PC_ZS')
								player.removeSkill('PC_NL')
								game.showIdentity();
								for(var i = 0; i < game.players.length; i++) {
									if(game.players[i].identity == 'zhu' || game.players[i].identity == 'nei' || game.players[i].identity == 'zhong') continue
									game.players[i].chooseToDiscard(true)
									game.players[i].removeSkill('PC_NL');
								}
							} else {
								player.chooseToDiscard(true)
							}
						}
					},
				},
				"PC_ZS": {
					mod: {
						globalFrom: function (from, to, distance) {
							return distance - 1;
						},
						cardUsable: function (card, player, num) {
							if(card.name == 'sha') return 2;
						},
					},
				},
				"CW_LANGGU2": {},
				"SH_SHENCAI": {
					mod: {
						cardUsable: function (card) {
							if(get.info(card) && get.info(card).forceUsable) return;
							return Infinity;
						},
						targetInRange: function () {
							return true;
						},
					},
				},
				"CW_QIZUO": {
					group: "CW_QIZUO_1",
					trigger: {
						player: "phaseUseEnd",
					},
					filter: function (event, player) {
						return player.num('h', 'sha') > (player.num('h') - 2);
					},
					content: function () {
						'step 0'
						player.skip('phaseDiscard')
					},
					subSkill: {
						"1": {
							trigger: {
								player: "phaseEnd",
							},
							filter: function (event, player) {
								return player.maxHp > player.num('h');
							},
							content: function () {
								'step 0'
								player.gain(game.createCard('sha'));
							},
							sub: true,
						},
					},
				},
				"SYMS_BN": {
					audio: "ext:扩展ol:1",
					skillAnimation: true,
					animationColor: "fire",
					animationStr: "<img src="+lib.assetURL+"extension/扩展ol/暴怒.png width='800' height='440'>",
					unique: true,
					trigger: {
						player: "changeHp",
					},
					forced: true,
					priority: 100,
					filter: function (event, player) {
						return player.hp <= 4;
					},
					content: function () {
						'step 0'
						ui.backgroundMusic.src = lib.assetURL + 'extension/扩展ol/眉间雪-HITA.mp3';
						ui.backgroundMusic.addEventListener('ended',function(){
							if(lib.config.background_music=='music_off'){
								ui.backgroundMusic.src='';
							}else{
								ui.backgroundMusic.src=lib.assetURL+'extension/扩展ol/眉间雪-HITA.mp3';
							};
						});
						ui.background.setBackgroundImage("extension/扩展ol/symszt.jpg");
						if(player.hp > 4) {
							game.delay();
						}
						'step 1'
						player.reinit('sy_lvbu1', 'sy_lvbu2');
						player.removeSkill('syms_th');
						player.removeSkill('SYMS_BN')
						player.addSkill('syms_cc');
						player.update();
						ui.clear();
						player.link(false);
						player.turnOver(false);
						player.discard(player.getCards('ej'));
						'step 2'
						while(_status.event.name != 'phaseLoop') {
							_status.event = _status.event.parent;
						}
						_status.paused = false;
						_status.event.player = player;
						_status.event.step = 0;
					},
					ai: {
						effect: {
							target: function (card, player, target) {
								if(get.tag(card, 'damage') || get.tag(card, 'loseHp')) {
									if(player.hp == 5) {
										if(game.players.length < 4) return [0, 5];
										var num = 0
										for(var i = 0; i < game.players.length; i++) {
											if(game.players[i] != game.boss && game.players[i].hp == 1) {
												num++;
											}
										}
										if(num > 1) return [0, 2];
										if(num && Math.random() < 0.7) return [0, 1];
									}
								}
							},
						},
					},
				},
			},
			translate:{
				'tqk_lnz':'列女传',
				'tqk_zzbj':'诸子百家',
				'tqk_sgbzb':'<span style="font-size:24px">三国标准包</span>',
				'tqk_wm':'武庙',
				G: "古",
				GColor: "#000000",
				SW: "王",
				SWColor: "#000000",
				Han: "汉",
				HanColor: "#000000",
				lu: "鲁",
				luColor: "#000000",
				qin: "秦",
				qinColor: "#000000",
				chu: "楚",
				chuColor: "#A67D3D",
				qi: "齐",
				qiColor: "#871F78",
				yan: "燕",
				yanColor: "#007FFF",
				zhao: "赵",
				zhaoColor: "#42426F",
				han: "韩",
				hanColor: "#32CD32",
				"ln_hyy": "黄月英",
				"ln_nw": "女娲",
				"ln_ehny": "娥皇女英",
				"ln_tss": "涂山氏",
				"ln_fh": "妇好",
				"ln_qj": "齐姜",
				"ln_fj": "樊姬",
				"ln_mm": "孟母&叔敖母",
				"ln_dmsj": "邓曼&叔姬",
				"ln_djj": "定姜&敬姜",
				"ln_jhwj": "姜后&卫姬",
				"ln_jtxn": "九天玄女",
				'ln_xs': '西施',
				'ln_wzj': '王昭君',
				'ln_zwy': '钟无艳',
				'ln_mjn': '孟姜女',
				'ln_bz': '班昭',
				'ln_wzf': '卫子夫',
				'ln_ds': '邓绥',
				'ln_lz': '吕雉',
				'ln_cy': '蔡琰',
				'ln_qly': '秦良玉',
				'ln_lqz': '李清照',
				'ln_wzt': '武则天',
				'ln_zwj': '卓文君',
				'LN_QIYIN': '齐音',
				'LN_BTY': '白头吟',
				'LN_QIYIN_info': '出牌阶段限一次，你可以展示一张手牌，然后令一名男性角色也展示一张手牌，若颜色相同，你与之一同恢复一点体力和摸取一张牌。 ',
				'LN_BTY_info': '你的弃牌阶段开始时，你可以跳过之，然后令一名男性角色摸取等同于你超出体力值张数的牌。<font color=#F0F>私意</font> :若目标已受伤，你需要弃置一张手牌，然后若此时你的手牌数不小于5且体力值大于1，你需要失去一点体力。',
				'ln_huoni': '祸逆',
				'ln_huoni_info': '出牌阶段开始时，你可以弃置所有手牌，然后选择一名男性角色，令之亦如此做。',
				'ln_lugong': '戮功',
				'ln_lugong_info': '当你失去牌后，若失去的牌数不小于3张，那么你可以指定一名其他角色，令之受到一点伤害，然后你获得一点体力上限并摸取等同于你已损失体力值的牌。<font color=#F0F>封天</font> ：<font color=red>被动</font> :当你发动【戮功】时，若你体力上限大于5，那么你恢复等同于当前体力数的体力值，再失去三点体力上限。',
				'LN_CAIMING': '才名',
				'LN_QINGKU': '清苦',
				'LN_YOUGUI': '优贵',
				'LN_YOUGUI_info': '游戏开始时，若游戏人数大于3，那么你将体力上限调整到等于当前游戏人数',
				'LN_QINGKU_info': '摸牌阶段你少摸取一张牌。当你受到伤害后，可以弃置一张手牌',
				'LN_CIDIAO': '词调',
				'LN_CIDIAO_info': '回合开始时，你可以选择一名其他角色，与之拼点，若你赢，你获得技能【才名】到回合结束:“出牌阶段一次，你可以与一名其他手牌数大于等于你的角色交换手牌”，若你输，你获得【流离】到回合结束。【流离】：“出牌阶段结束时，若你未受伤，那么你失去一点体力，若你已受伤，那么你失去一点体力上限”',
				'LN_SHINAN': '诗囊',
				'LN_SHINAN_info': '当你需要拼点前，你可以摸取一张牌再弃置一张牌。',
				'LN_ZHENLIE': '贞烈',
				'LN_ZHENLIE_info': '当你受到伤害后，你可以令来源弃置两张牌，然后你可以使用一张【杀】',
				'LN_JIANGF': '将风',
				'LN_JIANGF_info': '当你打出或者使用一张【杀】时，摸取一张牌。锁定技：你拥有技能【马术】。',
				'LN_GH': '孤魂',
				'LN_GH_info': '你的回合结束时,若你体力值大于1，那么你须失去一点体力并且弃置一张牌（可以取消自动发动）。',
				'LN_BG': '悲歌',
				'LN_BG_info': '当你失去体力后，可以指定一到x名其他角色（x为你已损失体力值）,令这些角色各失去一点体力且若这些角色体力值大于2，将弃置两张牌。',
				'LN_DUANC': '断肠',
				'LN_DUANC_info': '当你死亡时（若存在伤害来源），杀死你的角色弃置所有牌并失去一点体力。',
				'LN_DUZHI': '毒治',
				'LN_ZHIXIN': '雉心',
				'LN_ZHIXIN_info': '你造成的伤害均视为体力流失，',
				'LN_DUZHI_info': '当场上有其他角色在你回合内流失体力时若你手中拥有【杀】，你可以先弃置等同于手中的【杀】数量的牌再令之弃置所有手牌。',
				'LN_JINGZI': '经资',
				'LN_JINGZI_info': '每当有其他角色在你回合内获得不小于2张牌时，你可以获得其一张牌（包括判定区内的牌）。锁定技：场上每有一种势力，其中包括上古、三王、秦、齐、汉等等，你上升一点手牌上限。',
				'LN_XINGWEN': '行文',
				'LN_XINGWEN_info': '出牌阶段限2次，你可以弃置装备区内所有的牌并且令一名装备区内有牌的角色弃置其装备区内所有牌，然后其摸取两张牌。',
				'LN_CN': '持内',
				'LN_CN_info': '你的回合开始时，若你的装备区内没有牌及手中的【杀】小于3，那么你可以从牌顶堆中摸取x张牌，x为你当前体力值，然后可以将之任意分配给其他的角色。',
				'LN_XHOU': '贤后',
				'LN_XHOU_info': '每当你于你拥有手牌及装备区内的牌不大于1时被指定为【杀】、【决斗】的目标，你可以摸取一张牌再弃置一张装备区里的牌，然后令来源弃置其手牌、装备、判定区里各一张牌。',
				'LN_CX': '才学',
				'LN_CX_info': '锁定技：你的手牌上限以及你的防御距离加一。你的回合结束时，你摸取一张牌。',
				'LN_JJ': '枷禁',
				'LN_JJ_info': '你的回合开始时，可以指定任意名其他女性角色，令你弃置其一张牌',
				'LN_CJ': '长卷',
				'LN_CJ_info': '觉醒技：你的回合开始前，若你的手牌数大于体力值加二，那么你失去一点体力上限，并获得技能【会心】，再失去技能【枷禁】',
				'LN_HX': '会心',
				'LN_HX_info': '出牌阶段限三次，你可以观看一名其他角色的手牌，若其中有黑色牌，则你可以弃置其中一张。',
				'LN_QT': '泣天',
				'LN_QT_info': '当你受到伤害或者流失体力后，可以指定任意名其他角色，你依次弃置这些角色各x张牌，x为你已损失体力值,而且，若你没有手牌，还将令这些角色失去一点体力。',
				'LN_DZ': '笃志',
				'LN_DZ_info': '每当你受到伤害时，你获得一张【无中生有】并且弃置伤害来源一张牌。',
				'LN_MJ': '明谏',
				'LN_MJ_info': '你的弃牌阶段开始前，若你的手牌数大于体力值，那么你可以选择一名其他角色，令之获得你多出的那部分牌。',
				'LN_CQ': '痴情',
				'LN_CQ_info': '你的回合结束时，你可以指定一名已受伤的男性角色，令之摸取一张牌并且回血一点，然后你失去一点体力。',
				'LN_LY': '落雁',
				'LN_LY_info': '每当场上男性角色在你已受伤之时进行了弃牌阶段后（只要不跳过，你皆可发动此技能），你摸取一张牌并且令之弃置x张牌（x为你已损失体力值）。',
				'LN_CY': '沉鱼',
				'LN_CY_info': '锁定技：场上每有一名男性角色，你的手牌上限便加一。当你的摸牌阶段开始时，你可以摸取一张牌并且若你已受伤，则额外多摸取一张牌。',
				'LN_XS': '献身',
				'LN_XS_info': "回合结束时，你可以弃置四张牌，然后令一名男性角色摸取等同于你体力值的牌",
				LX: "灵心",
				"LX_info": "每当你使用一张非转化的普通锦囊牌，可以摸一张牌，且若你的装备区内有牌，你获得技能【奇才】到回合结束，若你装备区内的牌不小于2，额外多摸取一张牌。锁定技：你的手牌上限加x，x为你装备区内的牌。",
				dc: "洞察",
				"dc_info": "在你拥有手牌或者区域内有牌时，你可以将你的任意一张牌当【无懈可击】使用。",
				"LN_JIQIAO": "机巧",
				"LN_JIQIAO_info": "每当一名其他角色的回合结束时，若你的装备区和手中有牌，则你可以选择一名角色，将其区域内的牌移动到另一名角色的相应区域内，然后你弃置一张手牌。",
				SD: "圣德",
				"SD_info": "<font color=#F0F>被动技能</font> :每当你回合开始或结束时，你随机将你的武将牌翻面或受到一点伤害或恢复一点体力或摸取两张牌。<font color=#F0F>平治</font> ：每当你武将牌翻面后，你可以选择一名其他角色，令之将武将牌翻面。<font color=#F0F>神音</font> :当你恢复体力后，可以选择一名其他角色，令之摸取两张牌然后你摸取一张牌。<font color=#F0F>补天</font> :当你受到伤害后，你摸取等同于已损失体力值的牌并指定一名其他角色，令之受到一点伤害。",
				DX: "德馨",
				"DX_info": "当你的武将牌将要被翻面时，你防止之，并且摸取两张牌。每当你将要体力流失时，你防止之，改为令你摸取两张牌。",
				JF: "鉴夫",
				"JF_info": "每当场上有男性角色受到伤害后，若你区域里有牌以及其未死亡，那么你可以弃置一张牌，令该名角色进行一次判定，若为♠，你将武将牌翻面，若为♣，你受到一点体力流失，若为♥，目标角色摸取一张牌并且获得一层护甲，若为♦，目标角色摸取两张牌再弃置区域内的一张牌。",
				SN: "圣女",
				"SN_info": "限定技，当你进入濒死状态时，可以指定一名其他角色，令之受到伤害一点以及翻面，然后你上升体力值至上限并摸两张牌，并且在当前游戏回合结束后，你开始一个新的回合。",
				HX: "狐仙",
				"HX_info": "当你于回合外失去牌后，摸取一张牌。",
				"启夏": "启夏",
				"启夏_info": "当你受到伤害后，可以令一名其他角色摸取等同于你当前体力值的牌。",
				"LN_JG": "巾帼",
				"LN_JG_info": "在你的回合开始前，你可以选择一项：①：自损体力一点，获得技能【征伐】到回合结束,且若你当前拥有护甲，你失去一层。②：恢复一点体力，获得技能【理政】到回合结束时且若你没有护甲，获得一层。",
				"LN_ZF": "征伐",
				"LN_ZF_info": "出牌阶段限一次，你可以将一张手牌当【杀】使用。你使用的【杀】造成的伤害加一且当你如此造成伤害后，摸取一张牌。",
				"LN_LZ": "理政",
				"LN_LZ_info": "锁定技：出牌阶段，你使用[杀]次数为零。你可以在出牌阶段开始前和结束时各摸取一张牌。",
				"LN_GZ": "国姿",
				"LN_GZ_info": "当一名男性角色受到伤害时，若伤害来源为你，那么该伤害加一，且你摸取一张牌。",
				"LN_DY": "大义",
				"LN_DY_info": "每当你受到伤害后，你可以指定一名其他男性角色，令之回复体力一点以及同你共同摸取一张牌。",
				"LN_YH": "远患",
				"LN_YH_info": "每当场上有角色成为【杀】的目标时，若你有牌，那么你可以令之摸取一张牌。",
				"LN_XJ": "训谏",
				"LN_XJ_info": "每当场上有一名其他角色以【杀】造成伤害时，若其有牌，你可以令之弃置一张牌然后摸取一张牌。",
				"方绩": "方绩",
				"方绩_info": "当你回复体力后，若你当前的体力值小于你的总牌数，可以指定一名其他角色，令之也回复体力一点然后你摸取一张牌。",
				"惟德": "惟德",
				"惟德_info": "每当你使用【杀】或者成为【杀】的目标时，你可以从牌堆或者弃牌堆里随机获得一张【防具牌】。锁定技：当你装备区内有牌时，你的手牌上限加一。",
				"严母": "严母",
				"严母_info": "你的出牌阶段开始前，若你的手牌数大于体力值，那么你可以指定一名其他角色，令之跳过他的下个摸牌阶段。",
				"预谚": "预谚",
				"预谚_info": "每当一名其他角色回合开始时，你可以弃置一张手牌，令之判定一次，根据判定结果获得如下效果：♥：其摸取一张牌，然后你摸取一张牌。♦：若其没有护甲，其获得一层护甲，若其拥有护甲，摸取一张牌，♣：其弃置一张牌，♠：若其有护甲，其失去一层护甲，若没有护甲，弃置一张牌。",
				"鉴师": "鉴师",
				"鉴师_info": "你的回合开始之前，若场上有角色拥有护甲，你先摸取两张牌，然后选择至多两名其他拥有护甲的角色，令之失去护甲一层并摸取两张牌。",
				"识天": "识天",
				"识天_info": "你的回合结束时，你可以指定至多两名其他拥有护甲的角色，令之失去一层护甲，然后流失一点体力，并且其弃置两张手牌,此时，若你已受伤，你摸取两张牌。",
				"秩秩": "秩秩",
				"秩秩_info": "你的回合结束时，可以令任意名其他角色摸取一张牌。",
				"罪谏": "罪谏",
				"罪谏_info": "你的回合开始时，你令一名判定区内有牌的角色弃置一张判定区里的牌，然后其摸取等同于你体力值的牌并且获得一个出牌阶段。",
				"救卫": "救卫",
				"救卫_info": "每当场上有角色进入濒死状态，你可以弃置所有手牌，令之回复一点体力并且获得一层护甲,且若你救的为其他角色，那么你也获得一层护甲。",
				"明辨": "明辨",
				"明辨_info": "每当场上有男性角色摸取一张牌后，你可以选择一项：①：你弃置其一张牌。②：你获得其一张牌。",
				jinxian: "进贤",
				"jinxian_info": "每当场上有男性角色受到伤害后，你可以令之选择一项：①：你令该角色摸取一张牌并且若其判定区内有牌，其弃置其中一张。②：其获得伤害来源一张牌。",
				"LN_SN": "神鸟",
				"LN_SN_info": "你的回合开始时，你先摸取一张牌并且失去所有护甲，然后随机获得两项未加入游戏的非锁定、觉醒、主公技技能到回合结束。你的回合结束时，你获得一层护甲。",
				"wm_zgl": "卧龙·诸葛亮",
				"wm_zl": "谋圣·张良",
				"wm_lw": "宗师·吕望",
				"wm_trj": "义师·田禳苴",
				"wm_wq": "军神·吴起",
				"wm_gz": "第一相·管仲",
				"wm_sb": "国师·孙膑",
				"wm_yy": "元帅·乐毅",
				"wm_bq": "人屠·白起",
				"wm_lj": "兵神·李靖",
				"wm_sw": "兵圣·孙武",
				"wm_hx": "兵仙·韩信",
				BX: "兵仙",
				"BX_info": "<font color=#F0F>被动技能</font> ：游戏开始时，你拥有“兵仙”值3点。每当你打出或者使用一张牌时，上升一点，你的“兵仙”值至多10点。",
				QZ: "奇战",
				"QZ_info": "出牌阶段限一次，你可以利用“兵仙”值5点，然后获得【奇战】。【奇战】：当你对一名其他角色造成伤害后，若其有牌，那么视为你对之使用了一张【顺手牵羊】，持续到回合结束。",
				NX: "匿行",
				"NX_info": "出牌阶段时一次，若你的“兵仙”值大于3，那么你可以利用一点，弃置一张手牌然后摸取一张牌，再获得技能【马术】到回合结束。",
				DB: "点兵",
				"DB_info": "出牌阶段，你可以使用一点“兵仙”值，摸取一张牌然后弃置一张牌。",
				BS: "兵圣",
				"BS_info": "<font color=#F0F>被动技能</font> ：游戏开始时，你拥有“兵圣”值7点。每当你打出或者使用一张牌时，上升一点，你的“兵圣”值至多15点。",
				JZ: "军争",
				"JZ_info": "出牌阶段限一次，若你拥有“兵圣”15点，你可以使用之，然后在当前回合结束时进行一个新的回合。每当你的回合开始时，你摸取一张牌以及获得一点“兵圣”。",
				XS: "虚实",
				"XS_info": "当你的被其他角色的【杀】指定为目标时，若你的“兵圣”值大于五，那么目标弃置x张牌，若不大于五，那么你摸取x张牌,x为你装备区内的牌数。",
				SJ: "始计",
				"SJ_info": "出牌阶段限一次，若你的“兵圣”值不小于六，你可以使用六点“兵圣”值，然后获得技能【完杀】、【制衡】、【教战】到回合结束。",
				JIAOZHAN: "教战",
				"JIAOZHAN_info": "当你造成伤害后，获得一点“兵圣”并且摸取一张牌,你以此法造成伤害后，获得的“兵圣”值可以突破上限。",
				bs: "兵神",
				"bs_info": "<font color=#F0F>被动技能</font> ：游戏开始时，你拥有“兵神”值2点。每当你打出或者使用一张牌时，上升一点，你的“兵神”值至多10点。",
				HZ: "花阵",
				"HZ_info": "若你的“兵神”值大于5且装备区内有牌那么你可以在出牌阶段时发动此技能，你使用5点“兵神”值，布下“六花阵法”直到下个回合开始时（六花阵法：当你被其他角色的【杀】指定为目标时，你摸取一张牌并且令目标弃置一张牌）。",
				YB: "演兵",
				"YB_info": "当你使用一张【杀】时，可以从弃牌堆或者牌堆里随机获得一张武器牌。",
				ZX: "正袭",
				"ZX_info": "出牌阶段限一次，你可以使用4点“兵神”值（需要你的“兵神”值大于4点），然后对一名其他角色造成一点伤害。",
				SS: "死神",
				"SS_info": "<font color=#F0F>被动技能</font> ：游戏开始时，你拥有“死神”值3点。每当你打出或者使用一张牌时，上升一点，你的“死神”值至多10点。",
				RT: "人屠",
				"RT_info": "锁定技：出牌阶段，你使用的【杀】无距离限制和次数限制。",
				ZL: "诈利",
				"ZL_info": "出牌阶段限一次，你可以使用10点“死神”值，对一名其他角色造成一点伤害，然后摸取x张牌（x为你当前体力值加一）并获得【人屠】到回合结束。",
				CG: "昌国",
				"CG_info": "每当你回合开始时或者结束时，你都可以令一名角色摸取一张牌。回合开始时，若你体力值大于1，失去一点体力，获得技能【整武】到回合结束。",
				ZW: "整武",
				"ZW_info": "出牌阶段，若你区域里的牌不小于2，你可以发动此技能，弃置两张牌后摸取x张牌(x为已损失体力值)。出牌阶段至多三次。",
				LP: "连破",
				"LP_info": "当你造成伤害后，摸取x张牌(x你为已损失体力值)，然后获得一层护甲。当你的回合结束时，若你拥有护甲，那么你失去x层护甲（x为你当前体力值加一），恢复一点体力值并摸取等同于你剩余护甲值的牌。",
				BD: "兵道",
				"BD_info": "每当你使用一张【杀】时，可以指定一名其他角色，令之弃置一张牌，每当你被【杀】指定为目标时，若你与使用者均有手牌，你们进行拼点，若你赢，目标弃置所有手牌并且该【杀】无效，若你输，则你弃置所有手牌。锁定技：你的手牌上限始终加一。",
				FX: "伏袭",
				"FX_info": "当你于回合外失去手牌时，若此时，你的手牌数小于1，那么你可以摸取x张牌（x为你当前体力值加一）并且对一名其他角色造成一点伤害。",
				YX: "渊心",
				"YX_info": "<font color=#F0F>被动技能</font> ：游戏开始时，你拥有“渊”值5点。每当你打出或者使用一张牌时，上升一点，你的“渊”值至多12点",
				SL: "神虑",
				"SL_info": "<font color=#F0F>渊心被动</font> ：出牌阶段限一次，若你的“渊”不小于6，你可以使用6点，发动本技能：令你于回合外拥有“渊”而被卡牌指定为唯一目标时，取消之。持续至下个回合开始，然后摸取x张牌，x为你已损失体力值。",
				jt: "骏途",
				"jt_info": "出牌阶段限三次，若你拥有“渊”，你可以使用一点令一名其他角色摸取一张牌。",
				KW: "匡威",
				"KW_info": "每当你的回合内有其他角色获得牌时，你可以选择一名其他角色，令之弃置一张牌（包括判定区）。",
				ZB: "制霸",
				"ZB_info": "<font color=#F0F>觉醒技</font> ：你的回合开始时，若你的“渊”到达12点，那么你失去所有的“渊”，回复体力至体力上限，摸取等同于游戏人数的卡牌，获得技能【神虑】、【骏途】、【匡威】，然后失去技能【制霸】和一点体力上限。",
				wd: "无敌",
				"wd_info": "锁定技：当你受到伤害后，若你未死亡，你恢复一点体力并摸取一张牌。锁定技：在你已经受伤时，你的手牌上限始终加一。",
				JS: "军神",
				"JS_info": "当你使用一张【杀】指定目标时，你可以失去一点体力，然后选择一名除你外的角色，令之受到来自于你的一点伤害（需要你的体力大于1）。",
				yx: "盈虚",
				"yx_info": "出牌阶段每名角色限一次。你可以弃置手牌区加上装备区里的牌的总和大于体力值的一名角色的一张牌（包括判定区里的）或者令手牌区及装备区里的牌的总和不大于体力值的一名角色摸取一张牌。",
				YS: "阴书",
				"YS_info": "每当有角色在你装备区内有牌而被弃置牌时，你可以先摸取一张牌，然后将被弃置的牌按任意顺序置于牌堆顶",
				"yx2": "盈虚",
				"yx2_info": "你不能再成为【盈虚】的目标。",
				RB: "仁本",
				"RB_info": "当你使用【杀】时，你摸取一张牌后可以令一名其他角色摸取一张牌。",
				CY: "斥燕",
				"CY_info": "每当你造成伤害后，可以令一名角色获得一层护甲。若在出牌阶段时，则限一次。",
				yb: "义兵",
				"yb_info": "出牌阶段限一次。你使用【杀】指定一名其他角色时，若你与他均有手牌，那么你们二者拼点，若你赢，此【杀】不可被【闪】响应，并且你弃置他一张牌。若你输，此【杀】无效。",
				"宗师": "宗师",
				"宗师_info": "摸牌阶段你多摸一张牌。弃牌阶段后你可以摸取一张牌。当你受到伤害或者造成伤害后，你摸取一张牌。你的手牌上限始终等于体力上限。",
				"归林": "归林",
				"归林_info": "回合结束时，若你区域内有牌，则你可以弃置所有区域里的牌，然后获得x点护甲，x为你当前体力值（若你原先拥有护甲，需要先清空之）。",
				SM: "神谋",
				"SM_info": "出牌阶段限一次。若你拥有护甲和区域里有牌，可以发动此技能，你弃置所有区域内的牌以及所有护甲，然后摸取等同于当前游戏人数的牌。出牌阶段限一次，你可以失去一点体力，获得技能【谋圣】到下回合开始时。",
				MS: "谋圣",
				"MS_info": "锁定技：锦囊牌对你无效。",
				DC: "洞察",
				"DC_info": "在你拥有手牌或者区域内有牌时，你可以将你的任意一张牌当【无懈可击】使用。",
				BJ: "抱居",
				"BJ_info": "<font color=#F0F>准备技能</font> :在你的准备阶段开始时，你可以令自己跳过本回合并且摸取等同于当前体力值加一的牌，然后获得一层护甲（若你原本拥有护甲，需要失去之），再失去技能【抱居】，获得【洞察】、【出山】和【三分】。",
				CS: "出山",
				"CS_info": "<font color=#F0F>准备技能</font> :你的回合开始之时，你摸取一张牌以及进行一个出牌阶段并且获得技能【劫火】。隐卧：<font color=#F0F>出山被动</font> ：在你受到伤害后，你失去所拥有的技能，然后获得技能【抱居】并摸取等同于已损失体力值加一的牌。",
				SF: "三分",
				"SF_info": "每当场上有角色在你的回合外使用【杀】时，若【杀】的目标体力值不大于使用者，你可以令使用者弃置一张牌然后你摸取一张牌。",
				JH: "劫火",
				"JH_info": "出牌阶段限一次，你将任意一张牌当火攻使用。你使用的火攻能够指定任意名角色。",
				"道家x庄周": "道家·庄周",
				"阴阳x徐福": "阴阳·徐福",
				"兵家x尉缭": "兵家·尉缭",
				"阴阳x邹衍": "阴阳·邹衍",
				"杂家x吕不韦": "杂家·吕不韦",
				"zz_HYY": "兵家·黄月英",
				"zz_ZGL": "兵家·诸葛亮",
				"兵家x项羽": "兵家·项羽",
				"墨家x禽滑离": "墨家·禽滑离",
				"法家x李斯": "法家·李斯",
				"法家x慎到": "法家·慎到",
				"法家x申不害": "法家·申不害",
				"zz_WQ": "兵家·吴起",
				"zz_LE": "道家·李耳",
				"zz_GZ": "法家·管仲",
				"zz_TRJ": "兵家·田禳苴",
				"zz_KQ": "儒家·孔丘",
				"zz_XMB": "法家·西门豹",
				"zz_QY": "法家·屈原",
				"zz_ZH": "科学家·张衡",
				"zz_ZC": "法家·子产",
				"zz_ZL": "儒家·张良",
				"zz_HX": "兵家·韩信",
				"zz_sunwu": "兵家·孙武",
				"zz_caocao": "兵家·曹操",
				"zz_sb": "兵家·孙膑",
				"zz_hf": "法家·韩非",
				"zz_bq": "兵家·白起",
				"zz_yy": "兵家·乐毅",
				"zz_sz": "纵横·苏张",
				"zz_xx": "农家·许行",
				"zz_gg": "纵横·鬼谷子",
				"zz_dzs": "儒家·董仲舒",
				"zz_huishi": "名家·惠施",
				"zz_lyk": "道家·列御寇",
				"zz_xk": "儒家·荀况",
				"zz_lk": "法家·李悝",
				"zz_mk": "儒家·孟轲",
				"zz_md": "墨家·墨翟",
				"zz_gsl": "名家·公孙龙",
				"zz_wy": "法家·卫鞅",
				"zz_yz": "道家·杨朱",
				"图强": "图强",
				"图强_info": "锁定技：你的回合结束时，可以将武将牌翻面，然后摸取2张牌。",
				"变法": "变法",
				"变法_info": "锁定技：在你打出牌响应之前，若你的武将牌反面向上，你弃置一张手牌，然后将武将牌翻面以及摸取三张牌。",
				"义驰": "义驰",
				"义驰_info": "锁定技：出牌阶段限一次，你可以失去一点体力，然后令一名角色摸取两张牌。",
				"墨守": "墨守",
				"墨守_info": "锁定技：当你回合结束时，若你已受伤，你需要弃置等同于你当前体力值的牌并回血一点。<font color=#F0F>自强</font> ：第一次发动【墨守】时永久获得【谦逊】、【空城】。",
				"梦蝶": "梦蝶",
				"梦蝶_info": "锁定技：当你回合结束时，你将武将牌翻面然后摸牌两张以及恢复一点体力，在你武将牌反面向上时，你无视诸多卡牌。",
				"法学": "法学",
				"法学_info": "出牌阶段限一次，你弃置一张牌并选择一名其他角色，对之造成一点伤害，然后其摸取一张牌，此时，若你的体力值大于等于目标的体力值，你可以摸取一张牌。",
				"大成": "大成",
				"大成_info": "锁定技：每当你获得手牌后，若此时你的手牌数大于你的体力值，你可以恢复一点体力。",
				"裨阖": "裨阖",
				"裨阖_info": "每当一名角色回合开始时，若你已受伤，你可以摸取等同于已损失体力值的牌，然后弃置一张牌。",
				"反应": "反应",
				"反应_info": "锁定技：当你被杀指定时，使用者需要弃置一张牌。",
				"王霸": "王霸",
				"王霸_info": "当你于回合外失去手牌时，若你的手牌数小于体力上限，你可以补充至体力上限。",
				"三迁": "三迁",
				"三迁_info": "锁定技，每当你体力减少时，你须摸两张牌并弃一张牌",
				"炼丹": "炼丹",
				"炼丹_info": "锁定技：出牌阶段，你可以将一张手牌当成无中生有使用。",
				"噬魂": "噬魂",
				"噬魂_info": "锁定技：在你的回合内，当你获得至少2张牌后，你需要失去一点体力然后摸取一张牌。",
				"胜天": "胜天",
				"胜天_info": "在任意角色的判定牌生效前，你可以打出一张手牌代替之",
				"舟水": "舟水",
				"舟水_info": "锁定技：每当一名角色判定阶段开始时，若你的已受伤，其需要弃置一张牌，然后你摸取一张牌。",
				"诱敌": "诱敌",
				"诱敌_info": "出牌阶段一次，你指定一名其他角色，令其对你使用一张杀，若其不对你使用，弃置其两张牌（包括判定区内的牌）。",
				"伏袭": "伏袭",
				"伏袭_info": "锁定技：当你于你的回合内被杀指定为目标后，你可以对目标造成一点伤害然后其弃置一张牌，并且由你摸牌一张。",
				"诈利": "诈利",
				"诈利_info": "锁定技：当你于回合内被杀指定时，你令使用者弃置一张牌然后将武将牌翻面。",
				"佯敌": "佯敌",
				"佯敌_info": "出牌阶段一次，你指定一名其他角色，令其对你使用一张杀，若其不对你使用，其弃置x张牌（x为其当前体力值）。",
				"元帅": "元帅",
				"元帅_info": "在你的回合开始前，你将跳过你的摸牌阶段，然后摸取等同于当前游戏人数的牌。",
				"无敌": "无敌",
				"无敌_info": "锁定技：你的手牌上限增加x点（x为你的体力值）。",
				"先机": "先机",
				"先机_info": "限定技：游戏开始时，你摸取三张牌。然后获得技能【神速】、【铁骑】。锁定技：你的回合开始时，摸取一张牌。",
				"zz_bingsheng": "兵圣",
				"zz_bingsheng_info": "每当你打出或者使用一张非转化的【杀】、【闪】、【酒】、【桃】时(即基本牌)，你摸取一张牌。",
				"zz_jiubian": "九变",
				"zz_jiubian_info": "每当你获得牌时，你可以令一名其他角色弃置一张牌（你的回合内至多三次）。",
				"zz_yuanxin": "渊心",
				"zz_yuanxin_info": "当你受伤后，对你造成伤害的角色流失x点体力(x为你已损失体力值)。锁定技：你无视延时锦囊牌。",
				"zz_geqi": "革齐",
				"zz_geqi_info": "觉醒技、限定技：当你的回合结束时，若你的体力小于3，你失去一点体力上限之后回复体力至上限，摸取x张牌（x为场上存活角色身份数），然后开始一个新的回合，失去本技能，获得技能【渊心】。",
				"zz_xinfa": "新法",
				"zz_xinfa_info": "你回合开始前，若你装备区内有牌，你摸取等同于装备区里牌数的牌，然后弃置等量的任意区域内的牌。",
				"zz_xinzheng": "新政",
				"zz_xinzheng_info": "每当你在一次弃牌时，弃置大于一张的牌，那么你摸取一张牌并且获得一个出牌阶段。",
				"zz_yanzhan": "言战",
				"zz_yanzhan_info": "每当你于回合内对一名其他角色造成伤害后，可以视为你对之使用了一张【杀】(出牌阶段仅限一次)。",
				"zz_zhanwei": "战威",
				"zz_zhanwei_info": "每当你造成伤害后，可以摸取一张牌并令目标弃置一张装备区里的牌。锁定技：你使用的【杀】无视距离。",
				"zz_renben": "仁本",
				"zz_renben_info": "当你使用一张杀指定一名其他角色时，你需要同其一同摸取一张牌，然后你获得一层护甲。",
				"zz_yibing": "义兵",
				"zz_yibing_info": "在你的回合结束时，若你拥有护甲，那么你需要失去一层护甲，然后摸取一张牌并且上升一点体力上限。锁定技：你的手牌上限加x(x为护甲数)",
				"zz_chiyan": "斥燕",
				"zz_chiyan_info": "觉醒技：当你的回合开始时，若你的体力上限大于4时，那么你失去技能【义兵】、【斥燕】，获得技能【陷谗】，再将体力值调整到等同于体力上限。",
				"zz_xianchan": "陷谗",
				"zz_xianchan_info": "每当你造成或者受到伤害后，你失去一点体力。",
				"zz_xuanmiao": "玄妙",
				"zz_xuanmiao_info": "锁定技：每当你被一名其他角色的【杀】指定时，你获得一层护甲。",
				"zz_dunyin": "遁隐",
				"zz_dunyin_info": "锁定技：当你拥有护甲时，你不能成为锦囊牌的目标。锁定技：你的手牌上限加x（x为你装备区内的牌）。",
				"zz_tiandao": "天道",
				"zz_tiandao_info": "当任意一名其他角色造成伤害后，若你的护甲数大于零，那么你可以选择一名其他角色，令之和你摸取x张牌(x为护甲数),然后你失去所有的护甲。你的回合开始时，若你有护甲，那么你失去之并且跳过摸牌阶段。",
				"zz_yufeng": "御风",
				"zz_yufeng_info": "锁定技：当你计算与其他角色的距离时始终减一。当其他角色计算与你的距离时始终加一。你的手牌上限加一。",
				"zz_chongxu": "冲虚",
				"zz_chongxu_info": "锁定技：每当你受到大于一点的伤害时，取消之，然后摸取两张牌。",
				"地力": "地力",
				"地力_info": "你的回合开始时、结束时，都能摸取一张牌。",
				fajing: "法经",
				"fajing_info": "出牌阶段，你可以弃置一张黑色牌并指定一名其他角色。若如此做，你获得其一张牌并置于你的武将牌上，称为“法经”（数量最多为三）。当你受到伤害后，若你的“法经”数目不小于3，那么你失去所有的“法经”，摸取一张牌，然后在当前回合结束时你进行一个新的回合。",
				tantian: "谈天",
				"tantian_info": "每当一名角色将要进行判定时，你可以展示牌堆顶牌，然后可以选择一项：将一张手牌置于牌堆顶，或令其将一张手牌置于牌堆顶。",
				wuxing: "五行",
				"wuxing_info": "每当你受到属性伤害时，取消之，并且回复一点体力。锁定技：你的手牌上限始终等于体力上限。",
				"坚白": "坚白",
				"坚白_info": "每当你拼点赢，你可以获得对方此次拼点的牌然后摸取两张牌；每当你拼点没赢，你可以收回你此次拼点的牌然后弃置一张判定区内的牌",
				"zz_mingshi": "名实",
				"zz_mingshi_info": "出牌阶段开始时，你可以选择一名其他角色，与之进行拼点，若你赢，你获得【巧说】效果：你下一次使用的基本牌或普通锦囊牌可以增加或者减少一名指定目标。若你输，获得【巧说】效果：你不能使用锦囊牌到回合结束。",
				"贵己": "贵己",
				"贵己_info": "锁定技：其他角色计算与你的距离的时候，始终加2。",
				"不拔": "不拔",
				"不拔_info": "每当你失去一次牌后，此时若你的手牌数小于体力上限，那么你摸取一张牌。",
				"饔飧": "饔飧",
				"饔飧_info": "出牌阶段限一次，你可以将任意一张装备区里的牌当【桃】使用。",
				"zz_ailei": "爱类",
				"zz_ailei_info": "当你回复1点体力时，你可以令一名其他角色回复1点体力或摸两张牌",
				"居货": "居货",
				"居货_info": "每当一名角色的武将牌翻面或横置时，你可以发动此技能，立即摸一张牌。锁定技：你的手牌上限加2。",
				"千金": "千金",
				"千金_info": "锁定技：你不能成为红色锦囊牌的目标。",
				"天人": "天人",
				"天人_info": "在任意角色的判定牌生效前，若你的手牌大于当前体力值，你可以打出一张手牌代替之，在任意角色的判定时，若你的手牌数不大于当前体力值，你可以摸取一张牌。",
				"合一": "合一",
				"合一_info": "你的回合开始前，若你的手牌数等于当前体力值，那么你选择一名其他角色，令之回复体力一点然后你恢复体力一点，再摸取两张牌。",
				"兵仙": "兵仙",
				"兵仙_info": "出牌阶段限三次，你可以将任意的牌当【杀】使用。",
				"因势": "因势",
				"因势_info": "出牌阶段，你使用[杀]的次数为当前游戏人物数量。",
				"zz_ML": "明亮",
				"zz_ML_info": "<font color=#F0F>被动技能</font>：在你的回合开始之前，你可以变身为“兵家·诸葛亮” 并摸取一张牌，然后失去护甲，再将体力值补满。",
				"zz_GY": "归隐",
				"zz_GY_info": "你可以在你的回合结束后弃置任意张牌。锁定技，总牌数比你多的角色无法在回合内对你使用卡牌",
				"zz_WL": "卧龙",
				"zz_WL_info": "<font color=#F0F>被动技能</font> ：你可以在你的出牌阶段结束后变身为“兵家·黄月英”,变身后，体力值回复至满血。",
				"zz_JH": "劫火",
				"zz_JH_info": "每当你使用一张【火攻】时，可以摸取一张牌。出牌阶段限一次，你可以将任意一张牌当【火攻】使用。",
				"zz_QM": "奇谋",
				"zz_QM_info": "你的回合开始时，你可以指定一名角色，令之进入混乱状态，至其下个回合结束。",
				"zz_CQ": "刺秦",
				"zz_CQ_info": "当你的回合结束时，若你装备区内有牌和手牌不为零，那么你可以弃置所有的手牌和装备区内一张牌，然后选择一名其他角色，对其造成一点伤害（若目标角色有护甲，其先破除之），然后你获得一层护甲（若你有护甲，你先失去之）并令目标角色跳过其下个出牌阶段。",
				"zz_JX": "奸雄",
				"zz_JX_info": "<font color=#F0F>被动技能</font> ：每当你受到伤害后，你随机进行一项：①伤害来源弃置一张手牌，②伤害来源弃置一张装备区内的牌，③你摸取两张牌，④你恢复一点体力。",
				"zz_TY": "天仪",
				"zz_TY_info": "每名角色回合开始阶段时，你可以观看牌堆顶的Ｘ张牌（Ｘ为存活角色的数量，且最多为2），将其中任意数量的牌以任意顺序置于牌堆顶，其余以任意顺序置于牌堆底。",
				"木圣": "木圣",
				"木圣_info": "在你需要打出【闪】响应时，你可以将任意一张装备区里的或手牌区里的牌当之打出。",
				"非马": "非马",
				"非马_info": "当你被指定为拼点目标即将拼点时，你取消之，然后摸取两张牌。",
				"诡辩": "诡辩",
				"诡辩_info": "在你的回合开始前，你可以指定一到x名其他角色（x为你已损失体力值），令之指定你为目标，同你拼点，然后其弃置一张手牌。",
				"离骚": "离骚",
				"离骚_info": "每当你判定区内的牌的效果要生效时，你将之反转。",
				"zz_MZ": "美政",
				"zz_MZ_info": "出牌阶段每名角色限一次，若其区域内有牌，那么你令之弃置一张牌再摸取一张牌。",
				"天问": "天问",
				"天问_info": "你的回合开始前，你可以进行一次判定，若为♥：你恢复一点体力，若为♦：你摸取两张牌，若为♣：你弃置一张牌，若为♠：你受到一点伤害。",
				"zz_MZ2": "美政",
				"zz_MZ2_info": "你不能再成为【美政】的目标。",
				"神勇": "神勇",
				"神勇_info": "当一名角色受到你造成的伤害后，若其体力值小于你，你可以选择弃置其所有的手牌或装备区内的牌。",
				"圄城": "圄城",
				"圄城_info": "当你将要受到体力流失时，你取消之，并且摸取一张牌。",
				"守御": "守御",
				"守御_info": "若你的手牌数加上装备区里的牌不小于六，你可以在出牌阶段开始前发动此技能，选择至多三名角色，令之摸取一张牌并且获得一层护甲，每分配一名，你需要弃置两张牌。锁定技：你的手牌上限加x，x为当前游戏人数。",
				"营党": "营党",
				"营党_info": "出牌阶段时限一次，你可以将一张【杀】当【铁索连环】使用。",
				"焚书": "焚书",
				"焚书_info": "出牌阶段限一次，若你装备区内有牌，你可以自损体力一点并弃置一张装备区内的牌指定一名其他角色，令之受到一点火焰伤害和弃置一张牌。",
				"治邺": "治邺",
				"治邺_info": "出牌阶段限一次，你可以令一名手牌数大于你的其他角色弃置两张牌然后你弃置一张牌。",
				"畯法": "畯法",
				"畯法_info": "在你的回合内，若有其他角色一次弃置大于一张牌，你可以在此之后弃置一张牌，令一名其他角色受到一点伤害。每回合至多一次。",
				"威德": "威德",
				"威德_info": "每当你造成伤害前，目标需要弃置一张牌，然后你选择一名其他角色，令其摸取一张牌。",
				"因循": "因循",
				"因循_info": "当你的弃牌阶段开始前，若你的手牌数大于当前体力值，你可以跳过此弃牌阶段，并摸取一张牌。",
				"权术": "权术",
				"权术_info": "出牌阶段限一次，你可以令一名区域内有牌的其他角色摸取一张牌，然后你获得其两张牌（包括判定区）。",
				"辅法": "辅法",
				"辅法_info": "当你一次获得至少两张牌后，你可以令一名角色摸一张牌",
				"合纵": "合纵",
				"合纵_info": "当你受到伤害后，若你没有护甲，那么你可以选择一名其他角色，同之摸取一张牌并且其获得一层护甲，你获得两层。",
				"连横": "连横",
				"连横_info": "你的回合开始前，若你拥有护甲和手牌，则可以发动此技能，你选择一名其他角色，对之造成一点伤害(若其拥有护甲，其先破除之)，然后他弃置一张牌，再由你摸取一张牌和失去所有护甲并跳过摸牌阶段。",
				"zz_KY": "鲲意",
				"zz_KY_info": "每当一名其他角色回合结束时，若此时你的体力值不等于体力上限，那么你摸取一张牌并且可以弃置目标1~x张牌（x为其已损失体力值，至少为零）。",
				"zz_SR": "圣人",
				"zz_SR_info": "每名其他角色回合开始时你可以摸取一张牌。锁定技：你无视延时锦囊牌。",
				"zz_SW": "师威",
				"zz_SW_info": "你的回合开始时，你可以弃置x张手牌（x为当前体力值，不足则全弃），然后选择一名其他角色将其武将牌翻面",
				"zz_SY": "射御",
				"zz_SY_info": "限定技，出牌阶段你可以弃置任意花色不同的牌，然后根据以下技能获得相应技能:黑桃·无双。 红桃·马术。",
				"dw_bz_zhouyu": "周瑜",
				"dw_bz_sunquan": "孙权",
				"dw_bz_sunce": "孙策",
				"dw_bz_lusu": "鲁肃",
				"dw_bz_luxun": "陆逊",
				"dw_bz_daqiao": "大乔",
				"dw_bz_xiaoqiao": "小乔",
				"cw_bz_caocao": "曹操",
				"cw_bz_xiahoudun": "夏侯惇",
				"cw_bz_caoren": "曹仁",
				"cw_bz_caiyan": "蔡琰",
				"cw_bz_jiaxu": "贾诩",
				"cw_bz_zhenfu": "甄姬",
				"cw_bz_xunyu": "荀彧",
				"sh_bz_guanyu": "关羽",
				"sh_bz_xushu": "徐庶",
				"sh_bz_pangtong": "庞统",
				"sh_bz_zhangfei": "张飞",
				"sh_bz_liubei": "刘备",
				"sh_bz_zhaoyun": "赵云",
				"sh_bz_huangyueying": "黄月英",
				"qx_bz_yuanshao": "袁绍",
				"qx_bz_lvbu": "吕布",
				"qx_bz_diaochan": "貂蝉",
				"qx_bz_dongzhuo": "董卓",
				"qx_bz_zhangjiao": "张角",
				"qx_bz_zhaoyun": "赵子龙",
				"qx_bz_huangshuo": "黄硕",
				"qx_bz_gongsunzan": "公孙瓒",
				"cw_bz_zhangliao": "张辽",
				"sh_bz_machao": "马超",
				"dw_bz_ganning": "甘宁",
				"sh_bz_zhugeliang": "诸葛亮",
				"dw_bz_sunjian": "孙坚",
				"cw_bz_zhangchunhua": "张春华",
				"qx_bz_liubiao": "刘表",
				"dw_bz_xusheng": "徐盛",
				"cw_bz_guojia": "郭嘉",
				"dw_bz_dinfeng": "丁奉",
				"dw_bz_zhangzhao": "张昭",
				"qx_bz_guanning": "管宁",
				"sh_bz_fazheng": "法正",
				"sh_bz_huangzhong": "黄忠",
				"sh_bz_weiyan": "魏延",
				"cw_bz_chengyu": "程昱",
				"cw_bz_simayi": "司马懿",
				"qx_bz_wenchou": "文丑",
				"qx_bz_yanliang": "颜良",
				"DW_FENGYA": "风雅",
				"DW_FENGYA_info": "每当你打出或者使用一张【闪】，你可以摸取一张牌。<font color=#F0F>反间</font> ：被动：当你发动【风雅】时，可以使用一张牌。",
				"DW_YEYAN": "业炎",
				"DW_YEYAN_info": "出牌阶段或你需要使用一张牌时，可以将任意一张红色牌当【火攻】使用。出牌阶段时限一次。",
				"DW_SANSI": "三思",
				"DW_SANSI_info": "出牌阶段限一次，你可以弃置任意张手牌，然后摸取一张牌。",
				"DW_ZHIHENG": "制衡",
				"DW_ZHIHENG_info": "每当你失去大于2张的牌后，你摸取一张牌，且此时若你体力值小于3，你恢复一点体力。",
				"DW_XBW": "小霸王",
				"DW_XBW_info": "每当你使用一张【杀】，你获得一层护甲，若你拥有护甲，你需要先失去之。",
				"DW_SAODANG": "扫荡",
				"DW_SAODANG_info": "开始阶段，若你拥有护甲，你失去之，然后摸取一张牌。",
				"DW_JIEMING": "竭命",
				"DW_JIEMING_info": "每名其他角色的回合开始时，你可以弃置一张手牌，然后令之摸取一张牌",
				"DW_YUANLV": "远虑",
				"DW_YUANLV_info": "你的回合结束时，若游戏人数不大于4，你摸取一张牌，若游戏人数大于4，你将手牌补充到体力上限",
				"DW_QIANXUN": "谦逊",
				"DW_QIANXUN_info": "你可以将一张手牌当[闪]使用或打出",
				"DW_ZHIDI": "制敌",
				"DW_ZHIDI_info": "每当你打出或者使用一张【闪】时，可以弃置一名其他角色的一张牌。",
				"DW_LIULI": "流离",
				"DW_LIULI_info": "出牌阶段限一次，你可以将两张黑色手牌当【兵粮寸断】使用。",
				"DW_GUOSE": "国色",
				"DW_GUOSE_info": "<font color=red>锁定技</font> ：你计算与其他角色的距离时，始终减二，其他角色计算与你的距离时，始终减一。",
				"DW_HONGYAN": "红颜",
				"DW_HONGYAN_info": "出牌阶段限一次，你可以将两张红色手牌当【乐不思蜀】使用。",
				"DW_TIANXIANG": "天香",
				"DW_TIANXIANG_info": "当你成为【杀】的目标时，你可以弃置一名男性角色的一张手牌。",
				"CW_NENGCHEN": "能臣",
				"CW_NENGCHEN_info": "游戏开始时，若你的身份不为主公，你获得一点体力上限再恢复一点体力。",
				"CW_GANGLIE": "刚烈",
				"CW_GANGLIE_info": "<font color=red>锁定技</font> ：当你受到伤害后，你可以令来源弃置两张牌。",
				"CW_JIANXIONG": "奸雄",
				"CW_JIANXIONG_info": "每当你造成或者受到伤害后，你可以获得目标/来源一张牌，包括判定区内。",
				"CW_JUSHOU": "据守",
				"CW_JUSHOU_info": "当你成为【杀】的目标时，你可以弃置两张手牌，令此杀无效。",
				"CW_QIANGGONG": "强攻",
				"CW_QIANGGONG_info": "当你的【杀】被闪避时，你可以自损体力一点，视为对目标使用了一张【杀】，出牌阶段限一次。",
				"CW_BEIGE": "悲歌",
				"CW_BEIGE_info": "当你受到伤害或者体力流失后，可以指定一名其他角色，弃置其x张牌，x为你已损失体力值。",
				"CW_DUANCHANG": "断肠",
				"CW_DUANCHANG_info": "当你受到伤害后，来源需要失去一点体力。",
				"CW_YINSHEN": "隐身",
				"CW_YINSHEN_info": "出牌阶段限一次，你可以弃置任意张手中的【杀】，然后获得一层护甲。",
				"CW_DUMIE": "毒灭",
				"CW_DUMIE_info": "开始阶段，若你拥有护甲，你失去之，然后弃置一名手牌数小于4的角色的所有手牌再摸取一张牌。",
				"CW_LUOSHEN": "洛神",
				"CW_LUOSHEN_info": "你的回合开始时，你可以选择任意名男性角色，弃置这些角色各一张手牌。",
				"CW_JIEMING": "节命",
				"CW_JIEMING_info": "当其他角色受到伤害后，若你体力值大于1，你可以失去一点体力，令之摸取两张牌。",
				"CW_WANGZUO": "王佐",
				"CW_WANGZUO_info": "<font color=blue>觉醒技</font> ：你的回合开始时，若你的体力值小于二，那么你失去一点体力上限，并获得技能【辅汉】，再失去技能【节命】并将体力值补满，然后摸取两张牌。",
				"CW_FUHAN": "辅汉",
				"CW_FUHAN_info": "当一名已受伤的其他角色使用【杀】时，你可以令之摸取一张牌，若此时你手中有【杀】，你可以使用一张【杀】，且不论你使不使用，在此之后，你都可以摸取一张牌。",
				"SH_WUSHENG": "武圣",
				"SH_WUSHENG_info": "出牌阶段，你可以将一张手牌当【杀】使用。",
				"SH_TUODAO": "拖刀",
				"SH_TUODAO_info": "每当你打出或者使用一张【闪】，你可以获得一张【酒】。",
				"SH_JIJIAN": "击剑",
				"SH_JIJIAN_info": "当你使用【杀】时，你可以弃置一张牌，再令目标弃置一张牌。当你被【杀】指定时，你可以弃置一张牌，再令来源弃置一张手牌。",
				jijian: "击剑",
				"jijian_info": "",
				"SH_XIAKEXING": "侠客行",
				"SH_XIAKEXING_info": "<font color=red>锁定技</font> ：你的手牌上限始终等于体力上限。你的进攻距离加一。",
				"SH_FENGCHU": "凤雏",
				"SH_FENGCHU_info": "每当你受到属性伤害时，取消之，并且回复一点体力，然后摸取两张牌。",
				"SH_HAOYAN": "豪言",
				"SH_HAOYAN_info": "出牌阶段限一次，你可以选择弃置一张手牌，再随机展示一名其他角色的一张手牌，若为红色，其摸取三张牌，若为黑色，你弃置所有手牌。 ",
				"bz_yisha": "一杀",
				"bz_yisha_info": "",
				"bz_ersha": "双杀",
				"bz_ersha_info": "",
				"bz_sansha": "三杀",
				"bz_sansha_info": "",
				"bz_sisha": "四杀",
				"bz_sisha_info": "",
				"SH_PAOXIAO": "咆哮",
				"SH_PAOXIAO_info": "出牌阶段限一次，你可以选择一名有牌的其他角色，然后你弃置一张牌再由目标弃置一张牌，并且视为你使用了一张【酒】。",
				"SH_YISHI": "义释",
				"SH_YISHI_info": "当你的【杀】被闪避时，你可以同目标共同摸取一张牌。",
				"SH_XIAOXIONG": "枭雄",
				"SH_XIAOXIONG_info": "出牌阶段限一次，你可以选择一名有手牌的其他角色，然后你弃置一张手牌再获得目标一张手牌",
				"SH_JUEJING": "绝境",
				"SH_JUEJING_info": "",
				"SH_LONGDAN": "龙胆",
				"SH_LONGDAN_info": "你使用的【杀】不可闪避。<font color=#F0F>绝境</font> ：被动技能：锁定技：你的【闪】可以视为【杀】使用或打出。你无法打出【闪】来响应【杀】。",
				"SH_DANJI": "单骑",
				"SH_DANJI_info": "锁定技：【南蛮入侵】、【万箭齐发】和【桃园结义】、【五谷丰登】对你无效。且当你受到大于一点的伤害时，你将之改为流失你一点体力。",
				"SH_GUIYIN": "归隐",
				"SH_GUIYIN_info": "<font color=red>锁定技</font> ：你的回合开始时，若游戏人数大于2，你跳过你的判定阶段、摸牌阶段和出牌阶段，然后跳过你的弃牌阶段，且若你已受伤，还将摸取一张牌，并且若此时体力值小于2，你将获得一层护甲直至下次回合开始。否则，若你的手牌数不小于4，跳过你的摸牌阶段，你的手牌数小于4，跳过你的弃牌阶段，且若你的手牌区或者装备区里没牌，你获得一层护甲",
				"SH_QICAI": "奇才",
				"SH_QICAI_info": "<font color=orange>特殊技</font> :当一名其他角色的回合开始时，若你的手牌数等于6，你弃置一张手牌，若你手牌数小于6，你摸取一张牌，且若你手牌数大于2，你可以使用一张牌，且若游戏人数不足三名，你获得【看破】和【神才】。",
				"QX_XURONG": "虚荣",
				"QX_XURONG_info": "出牌阶段限一次，你可以将两张牌当【决斗】使用。",
				"QX_YUANMEN": "袁门",
				"QX_YUANMEN_info": "主公技，群势力角色可以替你打出[杀]",
				"QX_SULI": "俗丽",
				"QX_SULI_info": "<font color=red>锁定技</font> ：你的手牌上限始终减一。",
				"QX_WUSHUANG": "无双",
				"QX_WUSHUANG_info": "当你使用【杀】时，若目标手中有且只有一张【闪】，其不可打出【闪】响应你的【杀】。",
				"QX_LIJIAN": "离间",
				"QX_LIJIAN_info": "出牌阶段，你可以弃一张牌，视为一名男性角色对另一名男性角色使用一张[决斗]，每阶段限一次",
				"QX_BIYUE": "闭月",
				"QX_BIYUE_info": "<font color=red>锁定技</font> ：当你受到伤害时，将之改为流失等量的体力并且由你摸取一张牌。",
				"QX_BAOZHENG": "暴征",
				"QX_BAOZHENG_info": "你的回合结束时，你可以选择任意名其他角色（至多3名），获得其一张手牌，若目标超过一名，你需要先失去一点体力",
				"QX_HUANGTIAN": "黄天",
				"QX_HUANGTIAN_info": "你可以将两张牌当[闪]使用或打出",
				"QX_LUOLEI": "落雷",
				"QX_LUOLEI_info": "每当你打出一张【闪】，可令任意一名角色进行一次判定，若结果为梅花，你摸取两张牌，若结果为黑桃，其受到一点雷电伤害",
				"bz_ch": "称号",
				"bz_ch_info": "",
				"QX_LONGQIANG": "龙枪",
				"QX_LONGQIANG_info": "当你的【杀】被闪避时，你可以再次使用一张【杀】。",
				"QX_YIYAN": "义言",
				"QX_YIYAN_info": "你使用【杀】造成伤害后，可以令一名角色摸取一张牌。",
				"QX_BOCAI": "博采",
				"QX_BOCAI_info": "<font color=red>锁定技</font> ：每当一名其他角色的回合开始时，你随机获得其一项技能到你回合结束阶段",
				"QX_QIAOSI": "巧思",
				"QX_QIAOSI_info": "每当你在回合内使用技能时，你摸取一张牌。",
				"QX_YICONG": "义从",
				"QX_YICONG_info": "<font color=red>锁定技</font> ：你的防御距离加一。你的进攻距离加一。",
				"CW_TUXI": "突袭",
				"CW_TUXI_info": "其他角色的回合开始时，若你的牌不小于2，你可弃置两张牌，再获得该名角色一张牌，且若此时，其手牌数或者装备区内的牌数为零，你可以对之使用一张【杀】",
				"SH_JICHI": "急驰",
				"SH_JICHI_info": "你的回合结束时，若你装备区里有牌，你可以弃置其中一张牌，再使用一张【杀】",
				"DW_JIEXI": "劫袭",
				"DW_JIEXI_info": "其他角色的回合开始时，你可以弃置一张手牌，视为对之使用了一张【过河拆桥】。",
				"DW_SHUIDAO": "水盗",
				"DW_SHUIDAO_info": "当你受到伤害后，若来源手牌数大于2，你可以获得其一张手牌",
				"BZMS_JUEDOU": "兵临城下",
				"BZMS_JUEDOU_info": "",
				"BZMS_TAO": "修明政理",
				"BZMS_TAO_info": "",
				"BZMS_BING1": "奋甲百万",
				"BZMS_BING1_info": "",
				"BZMS_BING2": "带甲十万",
				"BZMS_BING2_info": "",
				"BZMS_FANG1": "守圄有余",
				"BZMS_FANG1_info": "",
				"BZMS_FANG2": "天佑之国",
				"BZMS_FANG2_info": "",
				"BZMS_FANG3": "围困之城",
				"BZMS_FANG3_info": "",
				"BZMS_BING3": "无用之兵",
				"BZMS_BING3_info": "",
				"BZMS_FANG4": "困兽犹斗",
				"BZMS_FANG4_info": "",
				"BZMS_MOU1": "以逸待劳",
				"BZMS_MOU1_info": "",
				"BZMS_MOU2": "上兵伐谋",
				"BZMS_MOU2_info": "",
				"BZMS_ZSKP": "专属卡牌",
				"BZMS_ZSKP_info": "",
				ZXL: "招贤令",
				"ZXL_info": "<font color=breen>卡牌技</font> ：你的回合开始时，若你的手牌数小于2，你获得一张【招贤令】",
				KLYH: "亢龙有悔",
				"KLYH_info": "<font color=breen>卡牌技</font> ：当你受到伤害后，你可以获得一张【亢龙有悔】",
				"QXZL_CF": "册封",
				"QXZL_CF_info": "",
				"ZH_PH": "叛汉",
				"ZH_PH_info": "<font color=orange>诸侯技</font> ：当你死亡时，若你势力不同于天子，你有50%的机率因各种因素变为叛贼，然后将体力值补满再失去一点体力上限以及摸取4张牌",
				"zl_sljb": "势力兼并",
				"zl_sljb_info": "",
				"zl_ygql": "一股清流",
				"zl_ygql_info": "",
				"zl_fklx": "府库沦陷",
				"zl_fklx_info": "",
				"zl_kfhs": "匡扶汉室",
				"zl_kfhs_info": "",
				"zl_yktx": "一匡天下",
				"zl_yktx_info": "",
				"zl_yfbz": "一方霸主",
				"zl_yfbz_info": "",
				"zl_txzb": "天下至霸",
				"zl_txzb_info": "",
				"zl_txzd": "天下震动",
				"zl_txzd_info": "",
				"zl_qsjj": "气数将尽",
				"zl_qsjj_info": "",
				"ZH_TQ1": "特权",
				"ZH_TQ1_info": "<font color=red>锁定技</font> ：你的进攻距离加一。",
				"ZH_TQ2": "特权",
				"ZH_TQ2_info": "<font color=red>锁定技</font> ：你的防御距离加一。你的进攻距离加一。你的手牌上限加一。",
				"FC_TQ1": "特权",
				"FC_TQ1_info": "<font color=red>锁定技</font> ：你的手牌上限加一。",
				"FC_TQ2": "特权",
				"FC_TQ2_info": "<font color=red>锁定技</font> ：你的进攻距离加一。你的防御距离加一。",
				"ZH_XH": "挟汉",
				"ZH_XH_info": "<font color=orange>诸侯进阶技</font>：出牌阶段限一次，你可以弃置一张手牌，然后对主公使用，令其跳过其下个出牌阶段，且若此时仅有主公与你，那么其弃置两张牌 ",
				"FC_CX": "丞相",
				"FC_CX_info": "<font color=orange>辅臣进阶技</font> ：每当主公受到伤害后，你可以使用一张【杀】，同时，主公摸取两张牌",
				"SH_ZHISHENG": "智圣",
				"SH_ZHISHENG_info": "<font color=#F0F>被动</font> ：出牌阶段限一次。你可以将任意一张牌当任意一张普通锦囊牌使用",
				"SH_DONGCHA": "洞察",
				"SH_DONGCHA_info": "在你拥有手牌或者区域内有牌时，你可以将你的任意一张牌当【无懈可击】使用。",
				"SH_WEIWO": "帷幄",
				"SH_WEIWO_info": "<font color=red>锁定技</font> ：你计算与其他角色的距离时，始终减一，其他角色计算与你的距离时，始终加一。",
				"DW_CHUANGZHEN": "闯阵",
				"DW_CHUANGZHEN_info": "当你使用【杀】时，若你和目标均有手牌，你可以弃置两张手牌，然后令目标亦弃置两张手牌",
				"CW_JUEQING": "绝情",
				"CW_JUEQING_info": "<font color=red>锁定技</font> ：你即将造成的伤害均视为失去体力。<font color=#F0F>被动</font> ：当你发动【绝情】时，你需摸取一张牌再弃置一张手牌。",
				"CW_MIEKOU": "灭口",
				"CW_MIEKOU_info": "<font color=red>锁定技</font> ：在你的回合，除你以外，只有处于濒死状态的角色才能使用【桃】。",
				"QX_ZISHOU": "自守",
				"QX_ZISHOU_info": "<font color=red>锁定技</font> ：你的手牌上限增加等同于体力的值，同时，你计算与其他角色的距离时，始终加一。",
				LZD: "隆中对",
				"LZD_info": "<font color=breen>卡牌技</font> ：你的回合开始时，若场上角色为三名，你获得一张【隆中对】",
				"DW_POJUN": "破军",
				"DW_POJUN_info": "当你使用【杀】对一名角色造成伤害后，可以弃置其一张牌",
				"CW_BUJI": "不羁",
				"CW_BUJI_info": "<font color=red>锁定技</font> ：你计算与其他角色的距离时，始终减一，其他角色计算与你的距离时，始终减一。",
				"CW_GUICAI": "鬼才",
				"CW_GUICAI_info": "<font color=red></font> ：出牌阶段，你使用【杀】的次数加一。",
				"DW_GUZHENG": "固政",
				"DW_GUZHENG_info": "<font color=red>锁定技</font> ：你的手牌上限加一。",
				"DW_ROUBO": "肉搏",
				"DW_ROUBO_info": "当一名手牌数不小于你的其他角色回合开始时，你可以对之使用一张【杀】，然后其可以对你使用一张【杀】",
				"QX_DANBO": "淡泊",
				"QX_DANBO_info": "<font color=red>锁定技</font> ：摸牌阶段，你少摸一张牌",
				"DW_CHAOCHEN": "朝臣",
				"DW_CHAOCHEN_info": "当你受到伤害后，若你的手牌数不小于2且大于当前体力值，你可以弃置两张牌令一名其他角色获得技能【固政】",
				"QX_DUANXI": "断席",
				"QX_DUANXI_info": "当你成为【杀】的目标时，你可以先弃置一张手牌，然后若此时你的手牌数不大于来源，你可以弃置来源一张牌，然后你再摸取一张牌。",
				"SH_ENYUAN": "恩怨",
				"SH_ENYUAN_info": "当你获得一名其他角色两张或更多的牌后，你可以令其摸一张牌；当你受到1点伤害后，你可以令伤害来源选择一项：1、将一张手牌交给你；2、失去1点体力",
				"SH_JIGONG": "极弓",
				"SH_JIGONG_info": "<font color=red>锁定技</font> ：你计算与其他角色的距离时，始终减少任意点",
				"SH_KUANGGU": "狂骨",
				"SH_KUANGGU_info": "当你对距离1以内的一名角色造成1点伤害后，你可以摸一张牌",
				"CW_DANMOU": "胆谋",
				"CW_DANMOU_info": "出牌阶段限一次，若你的体力值大于1，你可以失去一点体力然后弃置一名其他角色的两张牌。",
				"CW_HUALAO": "画牢",
				"CW_HUALAO_info": "<font color=red>锁定技</font> ：当你体力值为1时，你不能成为【杀】的目标",
				"CW_WEICHENG": "危城",
				"CW_WEICHENG_info": "<font color=red>锁定技</font> ：其他角色计算与你的距离时，始终减一",
				"CW_LANGGU": "狼顾",
				"CW_LANGGU_info": "你的回合外当场上有其他角色受到伤害后，你可以获得其一张牌再交给其一张牌，每名角色回合内限一次",
				"CW_MIAOSUAN": "妙算",
				"CW_MIAOSUAN_info": "回合开始时，你可以展示所有手牌，若颜色均相同，你可以摸取两张牌",
				"QX_HUBU": "虎步",
				"QX_HUBU_info": "当你使用的【杀】被闪避时，若目标装备区内有牌，你可以弃置其中一张",
				"QX_LANGLUE": "狼掠",
				"QX_LANGLUE_info": "每当你使用【杀】对一名其他角色造成伤害后，可以获得其一手牌",
				"PC_NL": "内乱",
				"PC_NL_info": "<font color=orange>叛贼限制技</font> ：你的回合开始时，你有50%的机会触发以下效果：1，若场上内奸数小于3，你变为内奸并令所有叛贼和你一同弃置一张手牌，同时，这些叛贼将失去【内乱】。2，你弃置一张手牌。",
				"PC_ZS": "贼首",
				"PC_ZS_info": "<font color=orange>叛贼进阶技</font> ：你计算与其他角色的距离始终减一。你出牌阶段时使用【杀】的次数为2。",
				"CW_LANGGU2": "狼顾",
				"CW_LANGGU2_info": "",
				"SH_SHENCAI": "神才",
				"SH_SHENCAI_info": "<font color=#FF0>神之力</font> ：出牌阶段内，你使用的任何牌均没有任何限制。",
				"CW_QIZUO": "奇佐",
				"CW_QIZUO_info": "当你的回合开始时，若你的手牌数小于体力上限，你可以获得一张【杀】。你的出牌阶段结束时，若你的手中的【杀】大于体力值减去二，你可以跳过你的弃牌阶段",
				"SYMS_BN": "暴怒",
				"SYMS_BN_info": "",
			},
		};
		var zzbjLis=["法家x申不害","法家x慎到","法家x李斯","墨家x禽滑离","兵家x项羽","杂家x吕不韦","阴阳x邹衍","道家x庄周","阴阳x徐福","兵家x尉缭"];
		for(var i in tqk.character){
			if(i.indexOf('ln_')!=-1){
				tqk.characterSort.tqk.tqk_lnz.push(i);
			}else if(i.indexOf('wm_')!=-1){
				tqk.characterSort.tqk.tqk_wm.push(i);
			}else if(i.indexOf('zz_')!=-1||zzbjLis.contains(i)){
				tqk.characterSort.tqk.tqk_zzbj.push(i);
			}else{
				tqk.characterSort.tqk.tqk_sgbzb.push(i);
			};
		};
		if(lib.device||lib.node){
			for(var i in tqk.character){tqk.character[i][4].push('ext:扩展ol/'+i+'.jpg');}
		}else{
			for(var i in tqk.character){tqk.character[i][4].push('db:extension-扩展ol:'+i+'.jpg');}
		}
		return tqk;
	});
	lib.config.all.characters.push('tqk');
	if(!lib.config.characters.contains('tqk')) lib.config.characters.push('tqk');
	lib.translate['tqk_character_config']='天气亏';
	if(lib.config['extension_扩展ol_tqk_first']!=true){
		game.saveConfig('extension_扩展ol_tqk',true);
		game.saveConfig('extension_扩展ol_tqk_first',true);
	};
};