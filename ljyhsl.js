window.func=function(lib,game,ui,get,ai,_status){
		game.import('character',function(){
			var ljyhsl={
				name:'ljyhsl',
				connect:true,
				character:{
					"ljyhsl_drlz_chendao":["male","shu",4,['ljyhsl_drlz_baier'],[]],
					"ljyhsl_drlz_zhoucang":["male","shu",4,['ljyhsl_drlz_yanju'],[]],
					"ljyhsl_drlz_xiangchong":["male","shu",3,['ljyhsl_drlz_longmen','ljyhsl_drlz_zaizheng'],[]],
					"ljyhsl_drlz_sunhao":["male","wu",4,['ljyhsl_drlz_baodao','ljyhsl_drlz_luzheng','ljyhsl_drlz_shichun'],['zhu']],
					"ljyhsl_drlz_jiangqin":["male","wu",4,['ljyhsl_drlz_taoni'],[]],
					"ljyhsl_drlz_chenwu":["male","wu",4,['ljyhsl_drlz_yongzhan','ljyhsl_drlz_renhou'],[]],
					"ljyhsl_drlz_caozhen":["male","wei",4,['ljyhsl_drlz_zhiyong'],[]],
					"ljyhsl_drlz_xingdaorong":["male","wei",4,['ljyhsl_drlz_kuizhan','ljyhsl_drlz_gousheng'],[]],
					"ljyhsl_drlz_wangshuang":["male","wei",4,['ljyhsl_drlz_siji'],[]],
					"ljyhsl_drlz_lijueguosi":["male","qun",7,['ljyhsl_drlz_luanguo','ljyhsl_drlz_fuzheng','ljyhsl_drlz_canluan'],[]],
					"ljyhsl_drlz_quyi":["male","qun",4,['ljyhsl_drlz_xiandeng','ljyhsl_drlz_jiaozi'],[]],
					"ljyhsl_drlz_hansui":["male","qun",4,['mashu','ljyhsl_drlz_yimou'],[]],
					"ljyhsl_lrfj_wangping":["male","shu",4,['ljyhsl_lrfj_wudang','ljyhsl_lrfj_feijun'],[]],
					"ljyhsl_lrfj_shamoke":["male","shu",4,['ljyhsl_lrfj_manshi'],[]],
					"ljyhsl_lrfj_mayunlu":["female","shu",3,['ljyhsl_lrfj_longji','ljyhsl_lrfj_chuoyue'],[]],
					"ljyhsl_lrfj_caorui":["male","wei",3,['ljyhsl_lrfj_mingyu','ljyhsl_lrfj_yingjing','ljyhsl_lrfj_dizong'],['zhu']],
					"ljyhsl_lrfj_caochun":["male","wei",4,['mashu','ljyhsl_lrfj_huqi'],[]],
					"ljyhsl_lrfj_chengyu":["male","wei",3,['ljyhsl_lrfj_quanli','ljyhsl_lrfj_zhiyong'],[]],
					"ljyhsl_lrfj_sunhuan":["male","wu",4,['ljyhsl_lrfj_haoao'],[]],
					"ljyhsl_lrfj_dongxi":["male","wu",4,['ljyhsl_lrfj_duanxie','ljyhsl_lrfj_youhun'],[]],
					"ljyhsl_lrfj_zhuhuan":["male","wu",4,['ljyhsl_lrfj_danju'],[]],
					"ljyhsl_lrfj_wangyue":["male","qun",4,['ljyhsl_lrfj_xiaji','ljyhsl_lrfj_longlie'],[]],
					"ljyhsl_lrfj_zhangsong":["male","qun",3,['ljyhsl_lrfj_sipan','ljyhsl_lrfj_zhiru'],[]],
					"ljyhsl_lrfj_zhangren":["male","qun",4,['ljyhsl_lrfj_weisha','ljyhsl_lrfj_anshi'],[]],
					"ljyhsl_nzry_liyan":["male","shu",4,['ljyhsl_nzry_liangwu','ljyhsl_nzry_wangquan'],[]],
					"ljyhsl_nzry_yangyi":["male","shu",3,['ljyhsl_nzry_edao','ljyhsl_nzry_xiace'],[]],
					"ljyhsl_nzry_feiyi":["male","shu",3,['ljyhsl_nzry_zhizhan','ljyhsl_nzry_wanjian','ljyhsl_nzry_hequan'],[]],
					"ljyhsl_nzry_caoying":["female","wei",3,['ljyhsl_nzry_xieji','ljyhsl_nzry_shexin'],[]],
					"ljyhsl_nzry_jianggan":["male","wei",3,['ljyhsl_nzry_daoshu','ljyhsl_nzry_yixiao'],[]],
					"ljyhsl_nzry_xuyou":["male","wei",3,['ljyhsl_nzry_kuangyan','ljyhsl_nzry_yexi'],[]],
					"ljyhsl_nzry_kanze":["male","wu",3,['ljyhsl_nzry_xianshu','ljyhsl_nzry_zhaixing'],[]],
					"ljyhsl_nzry_zhoufang":["male","wu",4,['ljyhsl_nzry_zhajiang'],[]],
					"ljyhsl_nzry_fanjiangzhangda":["male","wu",4,['ljyhsl_nzry_weishi'],[]],
					"ljyhsl_nzry_wangyun":["male","qun",3,['ljyhsl_nzry_lianji','ljyhsl_nzry_liemu'],[]],
					"ljyhsl_nzry_simahui":["male","qun",3,['ljyhsl_nzry_yinshi','ljyhsl_nzry_liuxian'],[]],
					"ljyhsl_gmrh_huangquan":["male","shu",3,['ljyhsl_gmrh_zhonghu','ljyhsl_gmrh_mingyi'],[]],
					"ljyhsl_gmrh_mengda":["male","shu",4,['ljyhsl_gmrh_weijiang','ljyhsl_gmrh_qianshi'],[]],
					"ljyhsl_gmrh_dengzhi":["male","shu",3,['ljyhsl_gmrh_hemeng','ljyhsl_gmrh_hujun'],[]],
					"ljyhsl_gmrh_zumao":["male","wu",4,['ljyhsl_gmrh_shesheng','ljyhsl_gmrh_quyi'],[]],
					"ljyhsl_gmrh_quancong":["male","wu",4,['ljyhsl_gmrh_yinxi'],[]],
					"ljyhsl_gmrh_lukang":["male","wu",3,['ljyhsl_gmrh_fenji','ljyhsl_gmrh_dezong'],[]],
					"ljyhsl_gmrh_simazhao":["male","wei",3,['ljyhsl_gmrh_zhaoxin','ljyhsl_gmrh_quanqing','ljyhsl_gmrh_shijun'],[]],
					"ljyhsl_gmrh_huaxin":["male","wei",3,['ljyhsl_gmrh_lichi','ljyhsl_gmrh_conglong'],[]],
					"ljyhsl_gmrh_chenqun":["male","wei",3,['ljyhsl_gmrh_jiupin','ljyhsl_gmrh_zhongzheng'],[]],
					"ljyhsl_gmrh_jiping":["male","qun",3,['ljyhsl_gmrh_duanzhi','ljyhsl_gmrh_shidu'],[]],
					"ljyhsl_gmrh_nanhualaoxian":["male","qun",3,['ljyhsl_gmrh_xiandao','ljyhsl_gmrh_chuanshu','ljyhsl_gmrh_qimen','ljyhsl_gmrh_dunjia'],[]],
					"ljyhsl_gmrh_guanlu":["male","qun",3,['ljyhsl_gmrh_bodao','ljyhsl_gmrh_shuwu'],[]],
					"ljyhsl_gmrh_miheng":["male","qun",3,['ljyhsl_gmrh_luochi','ljyhsl_gmrh_qunru'],[]],
					"ljyhsl_hyrs_liuchen":["male","shu",3,['ljyhsl_hyrs_zhenzhong','ljyhsl_hyrs_sijie','ljyhsl_hyrs_guoye'],['zhu']],
					"ljyhsl_hyrs_yanyan":["male","shu",4,['ljyhsl_hyrs_haolie'],[]],
					"ljyhsl_hyrs_jiangwan":["male","shu",3,['ljyhsl_hyrs_yangzhan','tiandu'],[]],
					"ljyhsl_hyrs_guyong":["male","wu",3,['ljyhsl_hyrs_fengdao','ljyhsl_hyrs_xunyou'],[]],
					"ljyhsl_hyrs_weiwen":["male","wu",4,['ljyhsl_hyrs_yuanhang','ljyhsl_hyrs_mengzhi'],[]],
					"ljyhsl_hyrs_quaxiaojiang":["male","wu","4<img src='"+lib.assetURL+"theme/style/hp/image/official4.png' width='12' height='12'>4",['ljyhsl_hyrs_zhanhun'],[]],
					"ljyhsl_hyrs_caoang":["male","wei",4,['ljyhsl_hyrs_longkui','ljyhsl_hyrs_sheqi'],[]],
					"ljyhsl_hyrs_lidian":["male","wei",4,['ljyhsl_hyrs_yide','ljyhsl_hyrs_qingxin'],[]],
					"ljyhsl_hyrs_haozhao":["male","wei",4,['ljyhsl_hyrs_hanwei'],[]],
					"ljyhsl_hyrs_mateng":["male","qun",4,['ljyhsl_hyrs_qidao','ljyhsl_hyrs_xiongyi','ljyhsl_hyrs_canyi'],[]],
					"ljyhsl_hyrs_zhanglu":["male","qun",4,['ljyhsl_hyrs_fugu','ljyhsl_hyrs_shidao'],[]],
					"ljyhsl_hyrs_wutugu":["male","qun",4,['ljyhsl_hyrs_linjia','ljyhsl_hyrs_mangli'],[]],
					"ljyhsl_lyb_jikang":["male","wei",3,['ljyhsl_lyb_duanjiao','ljyhsl_lyb_juediao'],[]],
					"ljyhsl_lyb_wanglang":["male","wei",6,['ljyhsl_lyb_shizhi'],[]],
					"ljyhsl_lyb_simashi":["male","wei",4,['ljyhsl_lyb_shiquan'],[]],
					"ljyhsl_lyb_guanyu":["male","wei",4,['wusheng','ljyhsl_lyb_wudian'],[]],
					"ljyhsl_lyb_huanghao":["male","shu",3,['ljyhsl_lyb_luanhuan','ljyhsl_lyb_qingjun'],[]],
					"ljyhsl_lyb_zhouchu":["male","wu",4,['ljyhsl_lyb_shuhuo','ljyhsl_lyb_zhijiang'],[]],
					"ljyhsl_lyb_qiaoguolao":["male","wu",3,['ljyhsl_lyb_fuwu','ljyhsl_lyb_xuzi'],[]],
					"ljyhsl_lyb_huangchengyan":["male","qun",3,['ljyhsl_lyb_zexu','ljyhsl_lyb_dushi'],[]],
					"ljyhsl_lyb_tadun":["male","qun",4,['ljyhsl_lyb_chiji'],[]],
				},
				characterIntro:{
					"ljyhsl_drlz_chendao":"陈到，字叔至，生卒年不详，豫州汝南(今河南驻马店平舆县)人。 三国时期蜀汉将领，刘备帐下白毦兵统领，名位常亚于赵云，以忠勇著称。蜀汉建兴年间，任征西将军、永安都督，封亭侯。在任期间去世。",
					"ljyhsl_drlz_zhoucang":"周仓，字元福，是历史小说《三国演义》中的人物，真实历史上不存在。其形象为身材高大、黑面虬髯的关西大汉，本是黄巾军出身，关羽千里寻兄之时请求跟随，自此对关羽忠心不二;在听说关羽兵败被杀后，周仓也自刎而死。在《演义》及此后的各种民间传说中，周仓均以关羽护卫的形象出现，在各地的关帝庙中，关羽神像的两侧也经常供奉周仓、关平(关羽之子)的神像。",
					"ljyhsl_drlz_xiangchong":"向宠（？—240年），向朗胞弟之子。刘备时，历任牙门将（类似于主将帐下的偏将），诸葛亮北伐时，以向宠为中领军，封都亭侯。诸葛亮北行汉中前，特意在《出师表》中向刘禅推荐向宠。延熙三年（公元240年），南征汉嘉（今四川雅安北）蛮夷时，遇害，尸体被其部下夺回。",
					"ljyhsl_drlz_sunhao":"孙皓(242年-284年)，字元宗(一说字元景，出自《册府元龟》)一名彭祖，字皓宗。264年-280年在位。吴大帝孙权之孙，废太子孙和之子，三国时期吴国末代皇帝。在位初期虽施行过明政，但不久即沉溺酒色，专于杀戮，变得昏庸暴虐。280年，吴国被西晋所灭，孙皓投降西晋，被封为归命侯，四年后在洛阳去世。",
					"ljyhsl_drlz_jiangqin":"孙策袭袁术，钦随从事。与策定三郡、豫章。平盗贼，迁西部都尉。讨会稽贼吕合、秦狼等，徙讨越中郎将。与贺齐并力，黟贼平定。从征合肥，钦因功迁荡寇将军，领濡须督。后召还都拜右护军，典领辞讼。钦贵守约，母妾布衣。性豁达，昔解隙徐盛，论者美焉。从讨关羽，钦督水还，道病卒。",
					"ljyhsl_drlz_chenwu":"孙策在寿春，武往脩谒，时年十八，长七尺七寸，因从渡江，征讨有功，拜别部司马。策破刘勋，多得庐江人，料其精锐，乃以武为督，所向无前。及权统事，转督五校。仁厚好施，乡里远方客多依讬之。尤为权所亲爱，数至其家。累有功劳，进位偏将军。建安二十年，从击合肥，奋命战死。权哀之，自临其葬，命以其爱妾殉葬，复客二百家。",
					"ljyhsl_drlz_caozhen":"曹真(?-231年)，字子丹。沛国谯(今安徽亳州)人。三国时期曹魏名将，魏武帝曹操族子。其父曹邵为曹操募兵时遇害，曹真遂被曹操收为养子。因赞赏曹真的勇猛而让他参与虎豹骑。历任偏将军、中领军、征蜀护军等职，并参与汉中之战。曹丕袭封魏王后，拜曹真为镇西将军、都督雍州及凉州诸军事，负责镇守西北边境，期间表现突出。于黄初二年(221年)，督众将大破羌胡联军，平定河西。黄初三年(222年)，率军包围江陵，击破吴将孙盛。回师后，转中军大将军，加给事中。曹丕病重时，曹真受遗诏辅政。魏明帝曹睿即位后，拜大将军，进爵邵陵侯。太和二年(228年)，曹真率军抵御蜀汉丞相诸葛亮的北伐。太和四年(230年)，代曹休为大司马。次年因病去世，谥号“元侯”。正始四年(243年)，配享魏太祖庙庭。",
					"ljyhsl_drlz_xingdaorong":"刑道荣是零陵太守刘度手下大将，先投降刘备，后又反水被秒杀。出自《三国演义》第五十二回 诸葛亮智辞鲁肃 赵子龙计取桂阳",
					"ljyhsl_drlz_wangshuang":"王双，字子全，陇西郡狄道县(今甘肃临洮县)人(字及籍贯均出自《三国演义》)。三国时曹魏将领。蜀后主刘禅建兴六年(228)，诸葛亮攻祁山，王双率领军队追击诸葛亮，为魏延所斩。",
					"ljyhsl_drlz_lijueguosi":"李傕(?-198年)，字稚然。北地郡泥阳县(今陕西省耀县)人，汉末群雄之一。东汉末年汉献帝时的军阀、权臣，官至大司马、车骑将军、开府、领司隶校尉、假节。本为董卓部将，曾被董卓派为说客出使反董联军的孙坚军中，欲游说孙坚和亲结盟，但被孙坚拒绝。后被董卓的女婿牛辅派遣至中牟与朱儁交战，大破朱儁，进而至陈留、颍川等地劫掠。192年董卓和牛辅被杀后，李傕归无所依，于是采用贾诩之谋，伙同郭汜、张济、樊稠等原董卓部曲将攻向长安，击败吕布，杀死王允等人，占领长安，把持朝廷大权。后诸将不和，李傕在会议上杀死了樊稠，又与郭汜分别劫持了汉献帝和众臣，相互交战，张济率兵赶来和解，于是二人罢兵，李傕出屯池阳黄白城，郭汜、张济等人随汉献帝东归前往弘农。后来，李傕、郭汜、张济反悔，联合起来追击汉献帝，与杨奉、董承等人几番交战。汉献帝一路逃亡，狼狈不堪，到达安邑，与李傕等人讲和。不久，汉献帝被曹操迎往许都。198年，曹操派谒者仆射裴茂召集关西诸将段煨等人征讨李傕，灭其三族。<br><br>郭汜(?-197年)，又名郭多，凉州张掖(今甘肃张掖西北)人，东汉末年将领、军阀，献帝时权臣。郭汜出身马贼，后投靠董卓，成为其得力部下，初平三年(192年)四月，董卓被杀后，郭汜、李傕等人采用贾诩之谋，率军攻打长安，吕布兵败逃走，王允被害，汉献帝被挟持之下只得封李傕为扬武将军、郭汜为扬烈将军，初平三年(192年)九月，又晋封后将军，封美阳侯，兴平元年(194年)三月，因击败马腾、韩遂之功，加开府之权。兴平二年(195年)，李傕、郭汜、樊稠开始互相攻击、争夺权力，樊稠在一次会议上被杀之后，李傕、郭汜开始互相猜忌，甚至将汉献帝劫持到自己营中以防李傕暗害，但是被李傕抢先下手将献帝劫走，郭汜遂将来劝和的公卿大臣劫为人质，不久二人和解，七月，晋升车骑将军。八月，郭汜欲劫汉献帝回长安，但计划败露，郭汜仓惶逃走，之后，被部将伍习杀死。",
					"ljyhsl_drlz_quyi":"麴义可谓三国时期数一数二的大将，据《英雄记》记载：“…合战界桥南二十里，瓒步兵三万余为方陈，骑马为两翼，左右各五千余匹，白马义从为中坚，亦分作两校。…对绍令麴义以八百兵为先登，强弩千张夹承之，绍自以步兵数万结陈于后。…瓒见其兵少，便放骑欲陵蹈之。义兵皆伏盾下不动，未至数十步，乃同时俱起，扬尘大叫，直前冲突，强弩雨发，所中必倒，临陈斩瓒所署冀州剌史严纲甲首千余级。瓒军败绩，步骑奔走，不复还营。义追至界侨，瓒殿兵还战桥上，义复破之，遂到瓒营，拔其牙门，营中余众皆复散走。…（绍本营少兵）瓒部迸骑二千余匹卒至，便围绍数重，弓矢雨下…会麴义来迎，乃散去。”",
					"ljyhsl_drlz_hansui":"韩遂(?-215年)，字文约。凉州金城郡人。东汉末年军阀、将领，汉末群雄之一。原名韩约，后改名遂。最初闻名于西州，被羌胡叛军劫持并推举为首领，以诛宦官为名举兵造反，聚众十万，先后败皇甫嵩、张温、董卓、孙坚等名将，后受朝廷招安，拥兵割据一方长达三十余年。他曾与马腾结为异姓兄弟，后二人关系破裂。袁绍、曹操相争之际，马腾、韩遂被钟繇说服，依附于曹操。马腾入京后，留其子马超统领部队。马超推举韩遂为都督起兵反叛曹操，为曹操所败，韩遂逃奔凉州，后又为夏侯渊所败，病死(一说被杀)，享年七十余岁。",
					"ljyhsl_lrfj_wangping":"王平是巴西宕渠人，因为小时候被姓何的人收养，所以又叫何平，后来姓回本来的王姓。建安二十年（公元215年）九月，巴西郡七姓夷王朴胡、賨邑侯杜濩举巴夷、賨民依附曹操，王平随杜濩、朴胡等被迁往洛阳，被任命为一名代理校尉。",
					"ljyhsl_lrfj_shamoke":"沙摩柯(?-222年)，东汉末三国时期五溪蛮首领。蜀章武元年(221年)初，为报关羽被东吴杀害之仇，刘备亲自领兵攻孙权，以金锦爵赏诱沙摩柯助战。沙摩柯率一万余人响应蜀军，表现活跃，很是让吴军头痛。章武二年(222年)，吴大都督陆逊以火攻破刘备，率诸军齐击，蜀军四十多个营寨被攻破，沙摩柯在大乱中匹马奔逃，被乱军杀死。",
					"ljyhsl_lrfj_mayunlu":"马超的妹妹，自幼习武，女中无双。在为马腾复仇的战事中跟随马超来到中原，与赵云一见钟情，闪电结婚。个性纯真率直，有时会十分调皮，故意使坏，让赵云不知所措。对于在战场厮杀的赵云来说，云騄不小心流露出来的温情，也给了困境中的赵云许多慰藉。",
					"ljyhsl_lrfj_caorui":"魏明帝曹叡（204年－239年1月22日），字元仲，沛国谯县（今安徽亳州）人，魏文帝曹丕长子，母文昭皇后甄氏，三国时期曹魏第二位皇帝，公元226年－239年在位。曹叡能诗文，与曹操、曹丕并称魏氏“三祖”，文学成就不及曹操、曹丕。原有集，已散佚，后人辑有其散文二卷、乐府诗十余首。 曹叡二十三岁即位，在位期间指挥曹真、司马懿等人成功防御了吴、蜀的多次攻伐，并且平定鲜卑，攻灭公孙渊，颇有建树。然而统治后期，大兴土木，耽于享乐。景初二年（238年），曹叡病逝于洛阳，时年36岁，庙号烈祖，谥号明皇帝，葬于高平陵。因其临终前托孤不当，导致后来朝政动荡。",
					"ljyhsl_lrfj_caochun":"曹纯(170年-210年)，字子和，沛国谯(今安徽亳州)人。东汉末年曹操麾下将领，曹仁之弟。曹纯是曹操部下精锐部队'虎豹骑'的统领者之一，因在平定北方的战役中颇有功绩，被加封为高陵亭侯。死后谥曰威侯。曹纯擅战，甚得人心，为人重纲纪，不失理智，好学问，敬爱学士，闻名天下。",
					"ljyhsl_lrfj_chengyu":"程昱(yù)(141年-220年)，字仲德，兖州东郡东阿(今山东东阿)人，东汉后期至三国时期曹魏谋士、名臣。本名程立，因梦中在泰山捧日，更名程昱。曾于东阿率领民众抗击黄巾。初平三年(192年)，被曹操征辟为寿张令，从此为其出谋献策、征战四方。曹操征徐州时，程昱与荀彧留守后方，阻吕布、陈宫大军，保住三城，因功受封为东平相，屯于范县。曹操将汉献帝迁往许都后，任命程昱为尚书，后又为东中郎将，领济阴太守，都督兖州事宜。讨平袁谭、袁尚后，拜为奋武将军，封安国亭侯。黄初元年(220年)，曹丕代汉称帝，拜程昱为卫尉，进封安乡侯。同年逝世，享年八十岁，曹丕亦为之流涕，追赠车骑将军，谥曰肃侯。",
					"ljyhsl_lrfj_sunhuan":"孙桓(198年-223年)，吴郡富春(今浙江杭州富阳)人。三国时期吴国建武将军，孙河第三子。仪容端正，器怀聪明，博学强记，能论议应对，孙权常称为'宗室颜渊'，擢为武卫都尉。建安二十四年(219年)，参与由吕蒙指挥的袭击荆州行动，从讨关羽于华容，招揽关羽余众，得五千人以及大量牛马器械。黄武元年(222年)，孙桓二十五岁，拜安东中郎将，跟随陆逊抗击进攻东吴的刘备。当时刘备率领众多兵众进攻，满山都是蜀军，孙桓奋战，与陆逊等协力击破蜀军。刘备兵败逃走，孙桓截击，'斩上夔道，扼要径'，差点生擒刘备。刘备忿恨地感叹:'吾昔初至京城，(孙)桓尚小儿，而今迫孤至此也!'战后孙桓因功拜建武将军，封丹徒侯，督牛渚，修筑横江坞，期间逝世。",
					"ljyhsl_lrfj_dongxi":"董袭(?-213年)，字元代，会稽馀姚(今浙江余姚)人。东汉末年江东孙氏部将。跟随孙策讨伐山阴宿贼黄龙罗、周勃等，策自出讨，袭身斩罗、勃首，迁扬武都尉。从策攻皖，讨刘勋，伐黄祖。主策薨，袭讨鄱阳贼彭虎等众数万人，旬日尽平，拜威越校尉，迁偏将军。建安十三年，袭随权讨黄祖。袭身以刀断两绁，使祖蒙冲横流，大兵遂进。斩祖。濡须战，袭督五楼船住濡须口。夜卒暴风船覆，袭死。",
					"ljyhsl_lrfj_zhuhuan":"朱桓(177年-238年)，字休穆，吴郡吴县(今江苏苏州)人，三国时期吴国名将，骠骑将军朱据从兄、镇南将军朱异之父、朱桓官至前将军、青州牧，假节，封为嘉兴侯。 孙权统事后，朱桓成为余姚长，为当地人民解决瘟疫，又招募士卒，讨伐当地山贼，所到之处，山贼都平定。后来代替周泰成为濡须督。夷陵之战后，曹仁率领几万步骑出征濡须，扬言攻打羡溪，朱桓分兵救羡溪，军队出发之后，才突然得知曹仁要进军濡须，但要追回救羡溪的军队已经来不及了。当时朱然手下只有五千军队，诸将都十分恐惧，然而朱桓用兵法中攻守关系和自己与曹仁的能力对比分析战斗，鼓舞士气。又设计引诱曹仁派兵攻城，于是斩常雕，生擒王双，斩溺魏军千余人。周鲂引诱曹休出兵皖城，朱桓为右督，助陆逊破曹休，吴军斩获万余人。朱桓又献计阻塞曹休退路，进图寿春，但陆逊认为不可行，于是没有实施。庐江主簿打算开城迎接吴军，全琮和朱桓率军接应，但事情败露，被迫退军。退军时吴军渡河，魏军打算出击拦截，但见到朱桓押后，于是不敢出击。后来朱桓狂病发作，回建业治病，并于第二年(赤乌元年)病死，时年六十二岁。朱桓为人高傲，不喜欢为人所驱使，而又善养士卒，轻财重义，与人一见，数十年不忘，死时部下无不哭啼。",
					"ljyhsl_lrfj_wangyue":"王越(生卒年不详)，辽东燕山人，东汉末年知名武术家，擅使剑术，三国史阿的师父，曹丕的师公，虎贲将军。在史书《典论》中有记载。",
					"ljyhsl_lrfj_zhangsong":"张松（?－212年），字子乔，东汉末年蜀郡成都（今属四川）人，益州别驾，益州牧刘璋的部下。建安十三年（208），为益州牧刘璋别驾从事，被派遣至曹操处而不为其所存录，因而怀怨恨。回蜀后，劝刘璋与曹操断绝关系，并说璋连好刘备；其后，又说璋迎备以击张鲁，皆为璋所采纳。十七年（212），暗助刘备，为其兄张肃所告发，刘璋怒而将他斩杀。",
					"ljyhsl_lrfj_zhangren":"张任(?-213年)，益州蜀郡(治今四川省成都市)人，东汉末年益州牧刘璋的属下，官至益州从事。公元213年(建安十八年)，在刘备进攻刘璋的战争中，张任率军迎战刘备，战败被杀。",
					"ljyhsl_nzry_liyan":"李严(?-234年)，后改名李平，字正方，南阳(今河南南阳)人。三国时期蜀汉重臣，与诸葛亮同为刘备临终前的托孤之臣。公元231年，蜀军北伐时，李严押运粮草因为下雨道路泥泞延误时日，为推卸责任反而怪罪诸葛亮的北伐，使诸葛亮不得不退兵，因而获罪，最终被废为平民，迁徙到梓潼郡(治今四川梓潼)。公元234年，诸葛亮病逝，李严得知这个消息后，认为以后再也不会有人能够起用自己了，因此心怀激愤而病死。",
					"ljyhsl_nzry_yangyi":"杨仪(约189年-235年)，字威公，襄阳(今湖北襄阳)人，三国时期蜀汉政治家。最初，为荆州刺史傅群的主簿，后投奔关羽，任为功曹。羽遣其至成都，大受刘备赞赏，擢为尚书。因与尚书令刘巴不和，调为弘农太守。建兴三年(225年)任丞相参军，此后一直跟随诸葛亮战斗。亮卒，他部署安全退军。亮生前定蒋琬继己任，仪仅拜中军师。建兴十三年(235年)，因多出怨言，被削职流放至汉嘉郡。但杨仪仍不自省，又上书诽谤，言辞激烈，最后下狱，自杀身亡。",
					"ljyhsl_nzry_feiyi":"费祎(?-253年)，字文伟，荆州江夏鄳县(湖北孝感市孝昌县)人，三国时蜀汉名臣，与诸葛亮、蒋琬、董允并称为蜀汉四相。深得诸葛亮所器重，曾出使东吴，孙权、诸葛恪、羊茞等人以辞锋论难，而费祎据理以答，辞义兼至，始终不为所屈。孙权甚异其才，自礼遇之，费祎也因常使吴。北伐时为中护军，又转为司马。当时将军魏延与长史杨仪不和，坐常争论，费祎常为二人谏喻，两相匡护，以尽其用。诸葛亮死后，初为后军师，再为尚书令，再迁大将军，执行休养生息的政策，为蜀汉的发展尽心竭力。性格谦素甚廉，家无余财。后为魏降将郭循行刺身死。死后，葬于今广元市昭化古城城西，墓碑为清朝光绪年间昭化知县吴光耀所立，墓志铭为其长女所书。",
					"ljyhsl_nzry_caoying":"曹婴是在电影《三国志之见龙卸甲》中登场的虚拟人物，由李美琪饰演。曹婴是曹操的孙女，弓马娴熟，文武双全，深得曹操的用兵之道及心术。于凤鸣山一战中担任魏军大都督阻止诸葛亮北伐并因罗平安的告密而全歼关兴、张苞、赵云率领的蜀军部队。曹婴，有两种说法，第一种说法：据记载曹操死后，也就是曹丕称帝后，她总揽了魏国大权。而且她在数个月内就掌控了魏国所有兵马以及政权，与魏国的经济，她其实没有野心，但只是她的才华出卖了她，可以说她就像电影说的一样，完全的继承了曹操的心得，以及兵法，甚至还比周瑜，等郭嘉等类人物更胜一筹。另一种说法：三国时代不可能有曹婴此人。曹氏源自夏侯氏，《后汉书》中对曹操的父亲曹嵩有如此记载：“嵩，夏侯氏之子，夏侯惇之叔父。太祖（即曹操）与惇为从夫兄弟。”而夏侯一族的祖先是开汉大将夏侯婴。古代人取名字应避祖讳，所以曹操家族不能以“婴”为名。",
					"ljyhsl_nzry_jianggan":"蒋干，字子翼，汉末三国时期的人物，九江(治今安徽寿县)人。历史上的蒋干是当时的名士，而罗贯中在历史小说《三国演义》中则将蒋干刻画成了被周瑜所愚弄的小丑形象。",
					"ljyhsl_nzry_xuyou":"许攸(?-204年)，字子远，南阳(治今河南南阳)人。本为袁绍帐下谋士，官渡之战时其家人因犯法而被收捕，许攸因此背袁投曹，并为曹操设下偷袭袁绍军屯粮之所乌巢的计策，袁绍因此而大败于官渡。后许攸随曹操平定冀州，因自恃其功而屡屡口出狂言，终因触怒曹操而被许褚斩杀。",
					"ljyhsl_nzry_kanze":"阚泽(?-243年)，字德润。会稽郡山阴县(今浙江绍兴) 。三国时期吴国学者、大臣。阚泽少年时家贫，只得向别人抄书，于是博学多闻。汉末被举为孝廉，出任钱塘长，升郴县令。孙权为骠骑将军时，征召他为西曹掾。后官至中书令、太子太傅，封都乡侯。虞翻称其为'盖蜀之扬雄'、'今之仲舒'。赤乌六年(243年)去世，孙权为之痛惜，数日不食。阚泽曾撰有《乾象历注》一书，今已佚。另有《九章算术》，亦不存。据传，阚泽对圆周率也很有研究，祖冲之对圆周率的精确计算就是借鉴了他的成果。",
					"ljyhsl_nzry_zhoufang":"父宾，为咨议参军。少好学，举孝廉，为宁国长，转在怀安。钱唐大帅彭式等蚁聚为寇，以鲂为钱唐侯相，旬月之间，斩式首及其支党，迁丹杨西部都尉。黄武中，鄱阳大帅彭绮作乱，攻没属城，乃以鲂为鄱阳太守，与胡综戮力攻讨，遂生禽绮，送诣武昌，加昭义校尉。被命密求山中旧族名帅为北敌所闻知者，令谲挑魏大司马扬州牧曹休。鲂初建密计时，频有郎官奉诏诘问诸事，鲂乃诣部郡门下，因下发谢，故休闻之，不复疑虑。事捷军旋，加裨将军，赐爵关内侯。贼帅董嗣负阻劫钞，豫章、临川并受其害。鲂遣间谍，授以方策，诱狙杀嗣。鲂在郡十三年卒，赏善罚恶，威恩并行。",
					"ljyhsl_nzry_fanjiangzhangda":"范疆，本名范强，小说《三国演义》中误写作范疆。初为蜀汉车骑将军张飞帐下将。先主伐吴，飞当率兵万人，自阆中会江州。临发，其帐下将强、张达杀飞，持其首，顺流而奔孙权。三国时蜀张飞部将。蜀章武元年，刘备伐吴，张飞率军从阆中前往江州，出发前，张达与范疆杀死张飞，带着张飞的首级投奔了东吴。演义里刘备率军讨伐东吴，东吴交出了范疆与张达，张达与范疆被张飞之子张苞所杀祭父。",
					"ljyhsl_nzry_wangyun":"王允(137年-192年)，字子师，太原祁(今山西祁县)人(据《后汉书》)。东汉末年大臣。王允出身官宦世家。他十九岁就开始任公职，壮年时任豫州刺史。因为在和中常侍张让的斗争中失败，王允被迫去官隐居，在中平六年，何进掌权之后重新出仕，历任从事中郎和河南尹。在何进被宦官诛杀，董卓掌权时，他已经代替杨彪成为了司徒兼尚书令。身为地方官勤政爱民，由于朝廷腐败而被迫在此为官，从而密谋刺杀董卓。董卓死后，王允与吕布共执朝政，但是董卓余党李傕、郭汜、樊稠等率军攻破长安，吕布出逃，王允被处死，时年56岁。",
					"ljyhsl_nzry_simahui":"司马徽(?-208年)，字德操，颍川阳翟(今河南禹州)人。东汉末年名士，精通道学、奇门、兵法、经学。有'水镜先生'之称。司马徽为人清雅，学识广博，有知人之明，并向刘备推荐了诸葛亮、庞统等人，受到世人的敬重。",
					"ljyhsl_gmrh_huangquan":"黄权(?-240年4月)，字公衡。巴西阆中(今四川阆中)人。三国时期蜀汉、曹魏将领。黄权年轻时为郡吏，后被州牧刘璋召为主薄。曾劝谏刘璋不要迎接刘备，因而被外放为广汉县长。刘璋败，才降刘备，被拜为偏将军。建计取汉中，拜护军。刘备为汉中王，仍领益州牧，以黄权为治中从事。及刘备称帝，将伐吴，黄权劝谏而不纳。以其为镇北将军，督江北军以防魏师进攻。刘备伐吴败还，而归途隔绝，黄权不得归，无奈之下率部降魏。被魏文帝所赏识，拜镇南将军，封育阳侯，加侍中，使同车陪乘。后领益州刺史，进驻河南。景初三年(239年)，迁车骑将军、仪同三司。正始元年(240年)去世，谥号景侯。",
					"ljyhsl_gmrh_mengda":"孟达（？－228），字子度（小说《三国演义》中字子庆），本字子敬，因刘备的叔父名叫刘子敬，为避讳而改字。扶风郡郿人，三国时期人物。本为刘璋属下，后降刘备。关羽围樊城、襄阳时因不发兵救关羽而触怒刘备，于是投奔曹魏，在魏官至散骑常侍、建武将军，封平阳亭侯。此后又欲反曹魏而归蜀汉，事败而死。",
					"ljyhsl_gmrh_dengzhi":"邓芝(?-251年)，字伯苗。义阳新野(今河南新野)人。东汉名将邓禹之后，三国时蜀汉重臣。早年就曾被预言，认为其能位至大将。后被刘备任为郫令，升迁为广汉太守。因任官清廉、严谨，有治绩，被征入朝为尚书。刘备逝世后，奉命出使吴国，成功修复两国关系，并深为孙权所欣赏。建兴六年(228年)，诸葛亮屯兵汉中，准备北伐，以邓芝为中监军、扬武将军，命其与赵云佯攻郿城，吸引曹真主力。建兴十二年(234年)，迁前军师、前将军，领兖州刺史，封阳武亭侯，不久督领江州。孙权在此期间多次联络邓芝，赠赐丰厚。延熙六年(243年)，迁车骑将军，后授假节。平定涪陵叛乱。延熙十四年(251年)，病逝。邓芝性格正直、简单，不会修饰情绪。他为将二十多年，赏罚明断，体恤士卒。身上的衣食从官府资取，从未经营过私有财产，妻子甚至有饥寒的日子，死时家中也没有多余财物。",
					"ljyhsl_gmrh_zumao":"祖茂，东汉末年武将。孙坚的心腹将领。坚常著赤罽帻，乃脱帻令亲近将祖茂著之。卓骑争逐茂，故坚从间道得免。茂困迫，下马，以帻冠冢闲烧柱，因伏草中。卓骑望见，围绕数重，定近觉是柱，乃去。《三国演义》中说祖茂字大荣，《三国志·吴书·孙破虏传》中有记载。",
					"ljyhsl_gmrh_quancong":"全琮(198年-249年) ，字子璜，吴郡钱唐(今浙江杭州西)人，三国时期吴国名将。全琮很有谋略，曾参与多场重要战役的谋划。孙权将自己的女儿孙鲁班嫁给了全琮，全琮的家族也成为吴国的名门;但全琮本人并不因此而骄横跋扈，仍然以十分谦恭的态度对待他人。",
					"ljyhsl_gmrh_lukang":"陆抗(226年-274年)，字幼节，吴郡吴县(今江苏苏州)人。三国时期吴国名将，陆逊次子。陆抗袭父爵为江陵侯，为建武校尉，领其父众五千人。后迁立节中郎将、镇军将军等。孙皓为帝，任镇军大将军、都督西陵、信陵、夷道、乐乡、公安诸军事，驻乐乡(今湖北江陵西南)。凤凰元年(272年)，击退晋将羊祜进攻，并攻杀叛将西陵督步阐。后拜大司马、荆州牧，卒于官，终年49岁。被誉为吴国最后的名将 。",
					"ljyhsl_gmrh_simazhao":"司马昭（211年－265年9月6日），字子上，河内温县（今河南温县）人。三国时期曹魏权臣，西晋王朝的奠基人之一。为晋宣帝司马懿与宣穆皇后张春华次子、晋景帝司马师之弟、晋武帝司马炎之父。司马昭早年随父抗击蜀汉，多有战功。累官洛阳典农中郎将，封新城乡侯。正元二年（255年），继兄司马师为大将军，专揽国政。甘露五年（260年），魏帝曹髦被弑杀，司马昭立曹奂为帝。景元四年（263年），分兵遣钟会、邓艾、诸葛绪三路灭亡蜀汉，受封晋公。次年，进爵晋王。咸熙二年（265年），司马昭病逝，年五十四，葬于崇阳陵。数月后，其子司马炎代魏称帝，建立晋朝，追尊司马昭为文帝，庙号太祖。",
					"ljyhsl_gmrh_huaxin":"华歆(157年-232年1月30日)，字子鱼。平原高唐人(今山东聊城高唐县)。 汉末魏初时名士，曹魏重臣。华歆早年拜太尉陈球为师，与卢植、郑玄、管宁等为同门 ，又与管宁、邴原共称一龙，华歆为龙头。汉灵帝时华歆被举为孝廉，任郎中，因病去官。又被何进征召为尚书郎。后任豫章太守，甚得民心。孙策破刘繇后，华歆举豫章降，被奉为上宾。官渡之战时，被征为议郎，参司空军事。入为尚书，转侍中，又代荀彧为尚书令。曹操讨孙权，以华歆为军师。后为魏王国御史大夫。曹丕即王位，拜华歆相国，封安乐乡侯。曹丕代汉建魏，改御史大夫为司徒。魏明帝即位，代钟繇为太尉，晋封博平侯。232年1月30日去世，谥敬侯。",
					"ljyhsl_gmrh_chenqun":"陈群(?-237年2月7日)，字长文。颍川许昌(今河南许昌东)人。三国时期著名政治家、曹魏重臣，魏晋南北朝选官制度“九品中正制”和曹魏律法《魏律》的主要创始人。东汉太丘长陈寔之孙、大鸿胪陈纪之子。陈群出身名门，早年被刘备辟为豫州别驾。曹操入主徐州时，被辟为司空西曹掾属，后转任参丞相军事。曹操封魏公时，任魏国的御史中丞。后拜吏部尚书，封昌武亭侯。曹魏建立后，历任尚书令、镇军大将军、中护军、录尚书事。曹丕驾崩后，陈群受诏辅政。曹睿即位，任司空、录尚书事，累封颍阴侯。青龙四年十二月(237年2月)病逝，谥号“靖”。正始四年(243年)，配享曹操庙庭。陈群历仕曹操、曹丕、曹睿三代，以其突出的治世之才，竭忠尽职，为曹魏政权的礼制及其政治制度的建设，做出了突出的贡献。陈群撰有文集五卷，今已佚失。其余见于《全三国文》 。",
					"ljyhsl_gmrh_jiping":"吉平，汉随朝太医。因字称平，人皆呼为吉平，当时名医也。建安五年，元旦朝贺，国舅董承见曹公骄横愈甚，感愤成疾。帝知国舅染病，令随朝太医平前去医治。平到承府用药调治，旦夕不离，知其有杀曹之心，遂与之谋，咬指为誓。后承家奴泄密，曹公诈患头风，召平用药。平暗下毒药，公知之，将平执下至后园严刑拷问。后公以平与承对质，截平九指，平起身望阙拜曰：“臣不能为国家除贼，乃天数也！”拜毕，撞阶而死。公令分其肢体号令。",
					"ljyhsl_gmrh_nanhualaoxian":"南华老仙，古典小说《三国演义》中张角的师傅，在《三国演义》中将三卷天书太平要术传给张角，让他普救世人。",
					"ljyhsl_gmrh_guanlu":"管辂(209年-256年)，字公明，平原(今山东德州平原县)人。三国时期曹魏术士。年八九岁，便喜仰观星辰。成人后，精通《周易》，善于卜筮、相术，习鸟语，相传每言辄中，出神入化。体性宽大，常以德报怨。正元初，为少府丞。北宋时被追封为平原子。",
					"ljyhsl_gmrh_miheng":"祢衡(173年~198年)，字正平，平原郡(今山东德州临邑德平镇)人，东汉末年辞赋家，时任江夏太守书记，代表作《鹦鹉赋》、《吊张衡文》。个性恃才傲物，和孔融交好。孔融著有《荐祢衡表》，向曹操推荐祢衡，但是祢衡称病不肯去，曹操封他为鼓手，想要羞辱祢衡，却反而被祢衡裸身击鼓而羞辱。后来祢衡骂曹操，曹操就把他遣送给刘表，祢衡对刘表也很轻慢，刘表又把他送去给江夏太守黄祖，最后因为和黄祖言语冲突而被杀，时年二十六岁。黄祖对杀害祢衡一事感到十分后悔，便将其加以厚葬。",
					"ljyhsl_hyrs_liuchen":"刘谌(?~263)，益州蜀郡(今四川成都)人，蜀汉昭烈帝刘备之孙，蜀汉后主刘禅第五子，三国时期蜀汉北地王。景耀二年(259年)，刘禅封其为北地王。景耀六年(263年)，邓艾军队兵临成都门下，其父刘禅决定投降，刘谌劝阻无效之后，自杀于昭烈庙。",
					"ljyhsl_hyrs_yanyan":"严颜，东汉末年武将，初为刘璋部下，担任巴郡太守。建安十九年，刘备进攻江州，严颜战败被俘，张飞对严颜说:“大军至，何以不降而敢拒战?”，严颜回答说:“卿等无状，侵夺我州，我州但有断头将军，无降将军也!”，张飞生气，命左右将严颜牵去砍头，严颜表情不变地说“砍头便砍头，何为怒邪!”张飞敬佩严颜的勇气，遂释放严颜并以严颜为宾客，之后的事迹不在正史中出现。",
					"ljyhsl_hyrs_jiangwan":"蒋琬（？—246年），字公琰。零陵湘乡（今湖南省湘乡县）人。三国时期蜀汉宰相。与诸葛亮、董允、费祎合称“蜀汉四相”。蒋琬初随刘备入蜀，被任命为广都长，后因不理政事激怒刘备，在诸葛亮的劝说下，蒋琬免于一死，后重新被启用，诸葛亮将其悉心培养，并密表刘禅可以作为诸葛亮的接班人。 建兴十二年（234年），诸葛亮死后，蒋琬继其执政，拜尚书令，又加行都护、假节，领益州刺史，再迁大将军，录尚书事，封安阳亭侯。延熙元年（238年），受命开府，加大司马，总揽蜀汉军政。曾制定由水路进攻曹魏的计划，但未被采纳。延熙九年（246年）病卒，谥号“恭”。",
					"ljyhsl_hyrs_guyong":"顾雍（168年—243年），字元叹，吴郡吴县（今江苏苏州）人。三国时吴国重臣、政治家。少时受学于蔡邕，弱冠即任合肥长，后转任娄、曲阿、上虞县长，所在之处皆有治绩。孙权领会稽太守，不到郡，以顾雍为丞，行太守事，讨平寇贼，安定郡县。数年后，入孙权幕府为左司马。后迁大理、奉常，又领尚书令，封阳遂乡侯。 黄武四年（225年），迁太常，同年代孙邵为丞相、平尚书事，进封醴陵侯。为相十九年，多有匡弼辅正之词。赤乌六年（243年）十一月，去世，谥肃侯。《唐会要》将顾雍等八人评为“魏晋八君子”。",
					"ljyhsl_hyrs_weiwen":"卫温 (?--231年)，三国时东吴将领，曾任将军职。230年(黄龙二年)，东吴皇帝孙权命他与诸葛直率领甲士万人，浮海求夷州(台湾)、亶州。虽未找到亶州，却在台湾停留近一年。回来后，以“违诏无功”入狱被杀。此后台湾在经济，文化等方面同大陆的联系逐渐密切，开始成为中国不可分割的领土。",
					"ljyhsl_hyrs_quaxiaojiang":"小说《三国演义》登场人物，因种种原因而成为在三国迷网民中脍炙人口的“名将”。“慈时独与一【骑卒】遇策。策从骑十三，皆韩当、宋谦、黄盖辈也。慈便前斗，正与策对。策刺慈马，而揽得慈项上手戟，慈亦得策兜鍪。会两家兵骑并各来赴，於是解散。”",
					"ljyhsl_hyrs_caoang":"曹昂（177年-197年），字子修，沛国谯县人曹操的长子，刘氏所生，但生母早亡是以由正室丁氏抚养大。聪明且性情谦和，为曹操所喜爱，二十岁时即举孝廉。《后汉书》记载，建安二年（197年）年随曹操出征张绣，大军到宛城，张绣假投降，而后趁曹军庆功之时，突然出兵夜袭，曹昂为救曹操负责断後，与大将典韦一同战死於宛城。魏文帝黄初二年（221年），追封谥号丰悼公，黄初五年（224年）又进一步追封为丰悼王。太和三年（229年）年改谥号丰愍王。",
					"ljyhsl_hyrs_lidian":"李典，字曼成，曹操麾下将领。山阳郡钜野县(今山东巨野)人。李典深明大义，不与人争功，崇尚学习与高贵儒雅，尊重博学之士，在军中被称为长者。李典有长者之风，官至破虏将军，三十六岁去世。魏文帝曹丕继位后追谥号为愍侯。",
					"ljyhsl_hyrs_haozhao":"郝昭(生卒年不详)，字伯道，太原人，中国东汉末年至曹魏初年著名将领。郝昭少年从军，屡立战功，逐渐晋升为杂号将军，后受司马懿的推荐镇守陈仓，防御蜀汉。太和二年(228年)，诸葛亮率军北伐，为郝昭所阻，劝降不成，昼夜相攻二十余日后被迫退军。魏明帝因此封其为关内侯。不久因染疾而病死。",
					"ljyhsl_hyrs_mateng":"马腾（？－212年），字寿成。扶风茂陵（今陕西兴平）人，东汉末年割据凉州一带的军阀，伏波将军马援的后代，马超、马休、马铁之父。马腾身长八尺馀，身体洪大，面鼻雄异，性格贤良忠厚，受众人尊敬。汉灵帝末年，被州郡署为军从事，掌领部众。累迁至偏将军。凉州刺史耿鄙为叛军所杀后，马腾与边章、韩遂等在凉州共同起事。初平三年（192年），与韩遂共同率众前往长安，被任命为征西将军。兴平元年（194年），马腾企图连结种邵等诛杀权臣李傕、郭汜，但为其所败，只得回到凉州。不久被赦免，拜安狄将军。其后与韩遂结为异姓兄弟。建安七年（202年），转为征南将军，开府。后与韩遂不和，互相攻击。建安十三年（208年），被徵为前将军，假节，封槐里侯，屯槐里。 之后，马腾听从张既的建议，入朝担任卫尉。建安十六年（211年），其子马超起兵抗拒曹操。次年，马腾与其二子皆为曹操所杀，夷灭三族。",
					"ljyhsl_hyrs_zhanglu":"张鲁（？—216年、245年或259年），字公祺（《后汉书》作公旗）。祖籍沛国丰县（今江苏丰县）。东汉末年割据汉中一带的军阀，据传是西汉留侯张良的十世孙、天师道（五斗米道）教祖张陵之孙。张鲁为五斗米道的第三代天师（称系师），在杀张修后继续在汉中一带传播五斗米道，并自称“师君”。雄据汉中近三十年，后投降曹操，官拜镇南将军，封阆中侯，食邑万户。张鲁去世后谥号为“原”，葬于邺城东。",
					"ljyhsl_hyrs_wutugu":"兀突骨，古典小说《三国演义》中的虚构人物。乌戈国，国主兀突骨，身长丈二（汉尺约合现在2.77米），不食五谷，以生蛇恶兽为饭。身有鳞甲，刀箭不能侵。兀突骨乘骑巨象，头戴日月狼须帽，身披金珠缨络，两肋下露出生鳞甲，眼目中微有光芒。手下有等军蛮兵皆使利刀钢叉，谓之“藤甲军”。其军至矮者九尺，面目丑恶，见者皆惊。洞中有一等藤，生于山涧之内，盘于石壁之上，国人采取，浸于油中，半年方取晒之；晒干复浸，凡十余遍，却才穿成铠甲。前胸并后背各用一片，两臂两片，又做成大裙五片，共为一副，穿在身上，渡江不沉，经水不湿，甚是轻巧，刀剑皆不能入。弩箭射到藤甲之上，皆不能透，俱落于地；刀砍枪刺，亦不能入，因此号为“藤甲军”。 国内有一江桃花水，若别国人饮之尽死，惟乌戈国人饮之倍添精神。",
					"ljyhsl_lyb_jikang":"嵇康(224年-263年)，字叔夜。汉族，谯国铚县(今安徽省濉溪县)人 。三国时期曹魏思想家、音乐家、文学家。嵇康为曹魏宗室的女婿，娶曹操曾孙女长乐亭主为妻 。官至中散大夫，世称“嵇中散”。后隐居不仕，屡拒为官。因得罪钟会，遭其构陷，而被司马昭处死，时年四十岁。嵇康与阮籍等竹林名士共倡玄学新风，主张“越名教而任自然”、“审贵贱而通物情” ，为“竹林七贤”的精神领袖，袁宏称其为“竹林名士”之一 。他的事迹与遭遇对于后世的时代风气与价值取向有着巨大影响。嵇康亦善文，工于诗，风格清峻。他注重养生，曾著《养生论》。有《嵇康集》传世。他的作品反映出时代思想，并且给后世思想界、文学界带来许多启发。",
					"ljyhsl_lyb_wanglang":"王朗(?-228年11月)，本名王严 ，字景兴。东海郯(今山东临沂市郯城西北)人。汉末至三国曹魏时期重臣、经学家。王朗早年师从太尉杨赐，因通晓经籍而被拜为郎中。后为曹操所征，因战乱辗转数年后才抵达，被拜为谏议大夫、参司空军事。建安十八年(213年)，魏国建立，王朗以军祭酒身份领魏郡太守，又任少府、奉常、大理等职。曹丕继王位时，迁御史大夫，封安陵亭侯。曹丕受禅建魏后，王朗改任司空，又进封乐平乡侯。曹睿继位后，代华歆为司徒，进封兰陵侯。太和二年(228年)，王朗去世，谥号成。其孙女王元姬，嫁于晋王司马昭，生晋武帝司马炎、齐献王司马攸。王朗学识渊博，与其子王肃都为经学大家。著有《周易传》、《春秋传》、《孝经传》、《周官传》等，有文集三十四卷。",
					"ljyhsl_lyb_simashi":"司马师(208-255年3月23日)，字子元，河内温县(今河南温县西)人。三国时期曹魏权臣，官至大将军，西晋奠基人之一。他是司马懿与张春华的长子，司马昭的兄长，西晋开国皇帝司马炎的伯父。司马师沉着坚强，雄才大略。与夏侯玄、何晏齐名。与其父司马懿谋划诛杀曹爽，以功封长平乡侯食邑千户，旋加卫将军。司马懿死后，以抚军大将军辅政，独揽朝廷大权。掌权后，制定选拔官吏的法规，命百官推荐贤才，整顿纲纪，任命文武大臣使各有职掌，朝野肃然。司马师也有卓越的军事才能，曾用计击灭吴国诸葛恪的大军。公元254年，魏帝曹芳与中书令李丰等密谋除司马师，事情泄露，司马师杀死参与者，迫郭太后废掉魏帝曹芳，从太后命以高贵乡公曹髦为帝。次年，司马师亲率兵平定毋丘俭、文钦之乱，途中病死。晋朝建立后，追尊为景皇帝，庙号世宗。",
					"ljyhsl_lyb_guanyu":"关羽（161－220年），字云长，河东解良（今山西运城）人，东汉末年蜀国名将。早期跟随刘备辗转各地，曾被曹操生擒，于白马坡斩杀袁绍大将颜良，与张飞一同被称为万人敌。赤壁之战后，刘备助东吴周瑜攻打南郡曹仁，别遣关羽绝北道，阻挡曹操援军，曹仁退走后，关羽被封为襄阳太守。刘备入益州，关羽留守荆州。建安二十四年，关羽围襄樊，曹操派于禁前来增援，关羽擒获于禁，斩杀庞德，威震华夏，曹操曾想迁都以避其锐。后曹操派徐晃前来增援，东吴吕蒙又偷袭荆州，关羽腹背受敌，兵败被杀。",
					"ljyhsl_lyb_huanghao":"黄皓，三国时蜀国的宦官，生卒年不详。董允死后，与侍中陈祗互为表里，开始参与朝政。陈祗死后，黄皓从黄门令一跃成为中常侍、奉车都尉，总揽朝政、操弄威权，并排挤在北伐前线的大将军姜维。",
					"ljyhsl_lyb_zhouchu":"周处(236-297年)，字子隐。义兴阳羡(今江苏宜兴)人，鄱阳太守周鲂之子。周处年少时纵情肆欲，为祸乡里，为了改过自新去找名人陆机、陆云，后来浪子回头，改过自新，功业更胜乃父，留下“周处除三害”的传说。吴亡后周处仕西晋，刚正不阿，得罪权贵，被派往西北讨伐氐羌叛乱，遇害于沙场。",
					"ljyhsl_lyb_qiaoguolao":"乔国老，又称桥公，《三国演义》和一些京剧中的登场人物，二乔之父，演义中未提及其姓名。不过一些设定明显参照汉太尉乔玄。不过其原型“桥公”更有可能是仲家大将军桥蕤。",
					"ljyhsl_lyb_huangchengyan":"黄承彦，汉末三国时期襄阳名士，诸葛亮岳父，黄月英之父。南郡大士蔡讽的女婿，与襄阳名士上层社会圈子:庞统(凤雏)、庞德公、司马徽、徐庶等人交好。《三国志》:黄承彦者，高爽开列，为沔南名士，谓诸葛孔明曰:“闻君择妇，身有丑女，黄头黑色，而才堪配。”孔明许，即载送之。时人以为笑乐，乡里为之谚曰:“莫作孔明择妇，正得阿承丑女。”",
					"ljyhsl_lyb_tadun":"蹋顿(?-207年)，东汉末年辽西乌桓(亦称乌丸)的首领，乌桓大人丘力居的从子，总摄三王部。在袁绍与公孙瓒相争之际，蹋顿曾出兵协助袁绍，击破公孙瓒。袁绍因此假传朝廷诏命，赐予蹋顿及三王难楼、苏仆延、乌延等人单于称号及印绶。后来，难楼、苏仆延率其部众奉立楼班为单于，蹋顿于是退位为王。袁绍死后，继承人袁尚被曹操打败，转而求助蹋顿，当时幽州、冀州官吏百姓奔逃到乌桓有十万多户，袁尚企图凭著这些兵力及人力，夺回河北。东汉建安十二年(207年)，曹操亲自出征乌桓。八月，在柳城白狼山大破乌桓、袁氏的军队，蹋顿在此战中被曹操的先锋张辽所斩杀。曹操挥军追击，收降胡、汉人口二十多万人。",
				},
				characterTitle:{
					"ljyhsl_drlz_chendao":"帝的近侍",
					"ljyhsl_drlz_zhoucang":"武圣的死随",
					"ljyhsl_drlz_xiangchong":"国将",
					"ljyhsl_drlz_sunhao":"暴堪桀纣",
					"ljyhsl_drlz_jiangqin":"荡寇将军",
					"ljyhsl_drlz_chenwu":"江东虎臣",
					"ljyhsl_drlz_caozhen":"陇西战神",
					"ljyhsl_drlz_xingdaorong":"荆南上将",
					"ljyhsl_drlz_wangshuang":"威猛的追击者",
					"ljyhsl_drlz_lijueguosi":"乱臣",
					"ljyhsl_drlz_quyi":"死士的先锋",
					"ljyhsl_drlz_hansui":"分庭叛邦",
					"ljyhsl_lrfj_wangping":"飞军的统帅",
					"ljyhsl_lrfj_shamoke":"武夷蛮王",
					"ljyhsl_lrfj_mayunlu":"一姬当千",
					"ljyhsl_lrfj_caorui":"明国之君",
					"ljyhsl_lrfj_caochun":"帝国的铁骑",
					"ljyhsl_lrfj_chengyu":"世之奇士",
					"ljyhsl_lrfj_sunhuan":"豪迈的皇侄",
					"ljyhsl_lrfj_dongxi":"江东的爪牙",
					"ljyhsl_lrfj_zhuhuan":"勇烈将军",
					"ljyhsl_lrfj_wangyue":"天下第一剑客",
					"ljyhsl_lrfj_zhangsong":"丑恶的叛徒",
					"ljyhsl_lrfj_zhangren":"川的忠",
					"ljyhsl_nzry_liyan":"延机的重臣",
					"ljyhsl_nzry_yangyi":"狭义之辈",
					"ljyhsl_nzry_feiyi":"鸽派",
					"ljyhsl_nzry_caoying":"殇魏女督",
					"ljyhsl_nzry_jianggan":"贻笑万年",
					"ljyhsl_nzry_xuyou":"狂傲诡智",
					"ljyhsl_nzry_kanze":"稳性斋心",
					"ljyhsl_nzry_zhoufang":"轻发魏国",
					"ljyhsl_nzry_fanjiangzhangda":"暗弑者",
					"ljyhsl_nzry_wangyun":"汉室的遗忠",
					"ljyhsl_nzry_simahui":"世之隐贤",
					"ljyhsl_gmrh_huangquan":"忠实守义",
					"ljyhsl_gmrh_mengda":"因局变势",
					"ljyhsl_gmrh_dengzhi":"智勇兼备",
					"ljyhsl_gmrh_zumao":"诚忠的良将",
					"ljyhsl_gmrh_quancong":"背后的杀手",
					"ljyhsl_gmrh_lukang":"最后的曙光",
					"ljyhsl_gmrh_simazhao":"狼子野心",
					"ljyhsl_gmrh_huaxin":"开国戾相",
					"ljyhsl_gmrh_chenqun":"新朝冗择",
					"ljyhsl_gmrh_jiping":"烈医",
					"ljyhsl_gmrh_nanhualaoxian":"乱世祸首",
					"ljyhsl_gmrh_guanlu":"易天卜地",
					"ljyhsl_gmrh_miheng":"狂傲不羁",
					"ljyhsl_hyrs_liuchen":"殉国的太子",
					"ljyhsl_hyrs_yanyan":"宁死不屈",
					"ljyhsl_hyrs_jiangwan":"蜀汉之萧何",
					"ljyhsl_hyrs_guyong":"犀利的丞相",
					"ljyhsl_hyrs_weiwen":"访夷使",
					"ljyhsl_hyrs_quaxiaojiang":"独战天下",
					"ljyhsl_hyrs_caoang":"世门烈子",
					"ljyhsl_hyrs_lidian":"长者之风",
					"ljyhsl_hyrs_haozhao":"陈仓的守护神",
					"ljyhsl_hyrs_mateng":"驰骋西陲",
					"ljyhsl_hyrs_zhanglu":"玉帝之孙",
					"ljyhsl_hyrs_wutugu":"硬如莽铁",
					"ljyhsl_lyb_jikang":"千古绝唱",
					"ljyhsl_lyb_wanglang":"傻公",
					"ljyhsl_lyb_simashi":"未冕之公",
					"ljyhsl_lyb_guanyu":"汉寿亭侯",
					"ljyhsl_lyb_huanghao":"亡国之宦",
					"ljyhsl_lyb_zhouchu":"浪子回头",
					"ljyhsl_lyb_qiaoguolao":"名满江东",
					"ljyhsl_lyb_huangchengyan":"荆襄名士",
					"ljyhsl_lyb_tadun":"狼王",
				},
				skill:{
					"ljyhsl_drlz_baier":{
						trigger:{
							player:"phaseDrawBegin",
						},
						direct:true,
						filter:function (event,player){
							return game.players.length>=3;
						},
						content:function (){
							'step 0'
							player.chooseTarget(get.prompt('ljyhsl_drlz_baier'),function(card,player,target){
								return player!=target;
							}).ai=function(target){
								return get.attitude(player,target);
							};
							'step 1'
							if(result.bool){
								player.line(result.targets);
								player.logSkill('ljyhsl_drlz_baier');
								event.target=result.targets[0];
								trigger.untrigger();
								trigger.finish();
								event.target.phaseDraw();
								player.chooseTarget(function(card,player,target){
									return player!=target&&event.target!=target;
								},true).ai=function(target){
									return -get.attitude(player,target);
								};
							}else{
								event.finish();
							};
							'step 2'
							if(result.bool) event.target.useCard({name:'sha'},result.targets[0]);
						},
					},
					"ljyhsl_drlz_yanju":{
						trigger:{
							global:"useCardAfter",
						},
						direct:true,
						filter:function (event,player){
							return event.card.name=='sha'&&event.player!=player&&_status.currentPhase!=player;
						},
						content:function (){
							'step 0'
							player.chooseToUse(get.prompt('ljyhsl_drlz_yanju'),{name:'sha'},trigger.player,-1);
							'step 1'
							if(result.bool){
								player.logSkill('ljyhsl_drlz_yanju');
								if(get.color(trigger.card)=='red') player.draw();
							}else{
								event.finish();
							};
						},
					},
					"ljyhsl_drlz_longmen":{
						trigger:{
							global:"loseEnd",
						},
						filter:function (event,player){
							return event.player!=player&&_status.currentPhase==player&&event.player.countCards('hej')>0;
						},
						check:function(event,player){
							return get.attitude(player,event.player)<0;
						},
						content:function (){
							'step 0'
							event.num=0;
							'step 1'
							player.judge(function(card){
								if(get.color(card)=='red') return 1;
								return -1;
							});
							'step 2'
							if(get.color(result.card)=='red') trigger.player.chooseToDiscard(1,'he',true);
							event.num++;
							if(event.num<trigger.num&&trigger.player.countCards('hej')>0) event.goto(1);
						},
					},
					"_ljyhsl_drlz_zaizheng":{
						trigger:{
							global:"loseEnd",
						},
						forced:true,
						filter:function (event,player){
							return event.player!=player&&_status.currentPhase==player&&player.hasSkill('ljyhsl_drlz_zaizheng');
						},
						content:function (){
							if(player.storage.ljyhsl_drlz_zaizheng==undefined) player.storage.ljyhsl_drlz_zaizheng=0;
							player.storage.ljyhsl_drlz_zaizheng+=trigger.num;
						},
					},
					"ljyhsl_drlz_zaizheng":{
						trigger:{
							player:"phaseAfter",
						},
						forced:true,
						content:function (){
							if(player.storage.ljyhsl_drlz_zaizheng>=10) player.insertPhase();
							delete player.storage.ljyhsl_drlz_zaizheng;
						},
					},
					"ljyhsl_drlz_zhiyong":{
						enable:'phaseUse',
						usable:1,
						filter:function(event,player){
							return !player.isTurnedOver()&&player.maxHp-player.hp>=1;
						},
						filterTarget:function(card,player,target){
							return get.distance(player,target,'attack')<=1&&player!=target;
						},
						selectTarget:function(){
							var player=_status.event.player;
							return [1,player.maxHp-player.hp];
						},
						content:function(){
							target.damage();
							if(!player.isTurnedOver()) player.turnOver();
						},
						ai:{
							order:1,
							result:{
								target:-1,
							},
						},
					},
					"ljyhsl_drlz_kuizhan":{
						trigger:{
							player:"damageAfter",
						},
						check:function(event,player){
							return player.hp>1;
						},
						content:function (){
							'step 0'
							event.num=0;
							'step 1'
							if(event.num>=1){
								player.chooseControl(['再次判定','cancel2']).set('ai',function(event){
									if(player.hp>1) return '再次判定';
									return 'cancel2';
								});
							};
							'step 2'
							if(result.control!='再次判定'&&event.num>=1) event.finish();
							'step 3'
							player.judge(function(card){
								if(get.suit(card)=='heart') return -2;
								return 1.5;
							});
							'step 4'
							if(get.suit(result.card)=='heart'){
								var damage=player.damage();
								if(trigger.source){
									damage.source=trigger.source;
									trigger.source.line(player);
								};
								event.num++;
								if(event.num<trigger.num) event.goto(1);
								event.finish();
							}else{
								player.chooseTarget().ai=function(target){
									return get.attitude(player,target);
								};
							};
							'step 5'
							if(result.bool){
								player.line(result.targets);
								event.target=result.targets[0];
								player.chooseControl(['判定阶段','摸牌阶段','出牌阶段']).set('ai',function(event){
									return '摸牌阶段';
								});
							}else{
								event.num++;
								if(event.num<trigger.num) event.goto(1);
								event.finish();
							};
							'step 6'
							if(result.control=='判定阶段') event.target.phaseJudge();
							if(result.control=='摸牌阶段') event.target.phaseDraw();
							if(result.control=='出牌阶段') event.target.phaseUse();
							event.num++;
							if(event.num<trigger.num) event.goto(1);
						},
					},
					"_ljyhsl_drlz_gousheng":{
						trigger:{
							player:"damageEnd",
						},
						forced:true,
						filter:function (event,player){
							return event.player==player&&player.hasSkill('ljyhsl_drlz_gousheng');
						},
						content:function (){
							if(player.storage.ljyhsl_drlz_gousheng==undefined) player.storage.ljyhsl_drlz_gousheng=0;
							player.storage.ljyhsl_drlz_gousheng+=trigger.num;
						},
					},
					"ljyhsl_drlz_gousheng":{
						trigger:{
							global:"phaseAfter",
						},
						direct:true,
						content:function (){
							'step 0'
							if(player.storage.ljyhsl_drlz_gousheng<2||
							player.storage.ljyhsl_drlz_gousheng==undefined) event.finish();
							delete player.storage.ljyhsl_drlz_gousheng;
							'step 1'
							player.chooseControl(['使用【苟生】','cancel2']).set('ai',function(event){
								return '使用【苟生】';
							});
							'step 2'
							if(result.control!='使用【苟生】'){
								event.finish();
							}else{
								player.logSkill('ljyhsl_drlz_gousheng');
							};
							'step 3'
							event.pl=_status.currentPhase;
							var list=['其回复一点体力'];
							if(event.pl.countCards('he',{color:'red'})>0) list.push('交给其一张红色手牌');
							event.pl.chooseControl(list).set('ai',function(event){
								return '其回复一点体力';
							});
							'step 4'
							if(result.control=='其回复一点体力'){
								player.recover();
								event.pl.line(player);
							};
							if(result.control=='交给其一张红色手牌'){
								event.pl.chooseCard(1,'he',{color:'red'},true);
							}else{
								event.finish();
							};
							'step 5'
							if(result.bool){
								event.pl.line(player);
								event.pl.$give(result.cards[0],player);
								player.gain(result.cards[0],event.pl);
							};
						},
					},
					"ljyhsl_drlz_siji":{
						trigger:{
							player:"shaMiss",
						},
						direct:true,
						content:function (){
							'step 0'
							if(player.storage.ljyhsl_drlz_siji==undefined) player.storage.ljyhsl_drlz_siji=0;
							'step 1'
							player.chooseCard(get.prompt('ljyhsl_drlz_siji'),{name:'sha'}).set('ai',function(card){
								return get.attitude(player,trigger.target);
							});
							'step 2'
							if(result.bool){
								player.logSkill('ljyhsl_drlz_siji');
								event.a=true;
								event.card=result.cards[0];
								event.card.skill='ljyhsl_drlz_siji';
								player.useCard(event.card,trigger.target);
								player.storage.ljyhsl_drlz_siji++;
							}else{
								if(player.storage.ljyhsl_drlz_siji>0&&player.storage.ljyhsl_drlz_siji1==true){
									trigger.target.chooseCard(1,'h',{type:'basic'}).set('ai',function(card){
										return -get.attitude(player,trigger.target);
									});
								}else{
									delete player.storage.ljyhsl_drlz_siji;
									delete player.storage.ljyhsl_drlz_siji1;
									event.finish();
								};
							};
							'step 3'
							if(event.card) delete event.card.skill;
							if(event.a!=true&&result.bool){
								trigger.target.discard(result.cards[0]);
								trigger.target.line(player);
								player.damage().source=trigger.target;
								delete player.storage.ljyhsl_drlz_siji;
								delete player.storage.ljyhsl_drlz_siji1;
							};
						},
					},
					"_ljyhsl_drlz_siji":{
						trigger:{
							source:"damageEnd",
						},
						forced:true,
						filter:function (event,player){
							return event.card&&event.card.name=='sha'&&event.card.skill=='ljyhsl_drlz_siji';
						},
						content:function (){
							player.discardPlayerCard(1,'he',trigger.player);
						},
					},
					"_ljyhsl_drlz_siji1":{
						trigger:{
							player:"shaMiss",
						},
						forced:true,
						filter:function (event,player){
							return event.card.skill=='ljyhsl_drlz_siji';
						},
						content:function (){
							if(player.storage.ljyhsl_drlz_siji1==undefined) player.storage.ljyhsl_drlz_siji1=true;
						},
					},
					"ljyhsl_drlz_baodao":{
						trigger:{
							player:"useCardAfter",
						},
						frequent:true,
						filter:function (event,player){
							return get.type(event.card)=='basic';
						},
						content:function (){
							player.draw();
						},
					},
					"ljyhsl_drlz_luzheng":{
						skillAnimation:true,
						unique:true,
						trigger:{
							player:'phaseBegin'
						},
						forced:true,
						filter:function(event,player){
							return player.countCards('h')<player.hp&&!player.storage.ljyhsl_drlz_luzheng;
						},
						content:function(){
							player.loseMaxHp();
							player.draw(2);
							player.addSkill('ljyhsl_drlz_canglu');
							player.storage.ljyhsl_drlz_luzheng=true;
							player.awakenSkill('ljyhsl_drlz_luzheng');
						},
					},
					"ljyhsl_drlz_canglu":{
						trigger:{
							source:"damageEnd",
						},
						content:function (){
							'step 0'
							var list=['摸一张牌'];
							if(trigger.player.countCards('hej')>0) list.push('弃置目标角色一张牌');
							player.chooseControl(list).set('ai',function(event){
								if(get.attitude(player,trigger.player)>0&&trigger.player.countCards('j')>0) return '弃置目标角色一张牌';
								if(get.attitude(player,trigger.player)<0&&trigger.player.countCards('he')>0&&player.countCards('h')>0) return '弃置目标角色一张牌';
								return '摸一张牌';
							});
							'step 1'
							if(result.control=='弃置目标角色一张牌') player.discardPlayerCard(1,'hej',trigger.player);
							if(result.control=='摸一张牌') player.draw();
						},
					},
					"ljyhsl_drlz_shichun":{
						enable:'chooseToUse',
						zhuSkill:true,
						round:1,
						filter:function(event,player){
							if(event.parent.name=='phaseUse') return lib.filter.filterCard({name:'jiu'},player,event);
							if(event.type!='dying') return false;
							if(player!=event.dying) return false;
							return game.zhu&&game.zhu.hasSkill('ljyhsl_drlz_shichun');
						},
						content:function(){
							'step 0'
							if(_status.event.getParent(2).type=='dying') event.dying=player;
							event.target=player.next;
							'step 1'
							if(event.target.group!='wu') event.goto(4);
							'step 2'
							event.target.chooseCard({type:'equip'}).set('ai',function(card){
								if(get.attitude(event.target,player)>0) return 1;
								return 0;
    						});
							'step 3'
							if(result.bool){
								event.target.discard(result.cards);
								event.target.useCard({name:'jiu'},player);
							};
							'step 4'
							if(event.target.next!=player){
								event.target=event.target.next;
								event.goto(1);
							};
						},
						ai:{
							save:true,
						},
					},
					"ljyhsl_drlz_taoni":{
						trigger:{
							player:"shaMiss",
						},
						frequent:true,
						content:function (){
							if(trigger.target.countCards('e')==0){
								player.draw();
							}else{
								player.moveCard(true);
							};
						},
					},
					"ljyhsl_drlz_yongzhan":{
						group:["ljyhsl_drlz_yongzhan_sha","ljyhsl_drlz_yongzhan_shan","ljyhsl_drlz_yongzhan_tao"],
						subSkill:{
							"sha":{
								name:'杀',
								enable:['chooseToRespond','chooseToUse'],
								position:'e',
								filterCard:true,
								viewAsFilter:function(player){
									return player.countCards('h')==0;
								},
								viewAs:{name:'sha'},
								prompt:'将一张装备区内的牌当【杀】使用或打出',
								ai:{
									skillTagFilter:function(player){
										if(!player.countCards('e')) return false;
									},
									respondSha:true,
								},
							},
							"shan":{
								name:'闪',
								enable:['chooseToRespond'],
								position:'e',
								filterCard:true,
								viewAsFilter:function(player){
									return player.countCards('h')==0;
								},
								viewAs:{name:'shan'},
								prompt:'将一张装备区内的牌当【闪】使用或打出',
								ai:{
									respondShan:true,
									skillTagFilter:function(player){
										if(!player.countCards('e')) return false;
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
								position:'e',
								filterCard:true,
								viewAsFilter:function(player){
									return player.countCards('h')==0;
								},
								viewAs:{name:'tao'},
								prompt:'将一张装备区内的牌当【桃】使用或打出',
								ai:{
									skillTagFilter:function(player){
										return player.countCards('e')>0;
									},
									save:true,
									respondTao:true,
								},
							},
						},
					},
					"ljyhsl_drlz_renhou":{
						trigger:{
							source:"damageBegin",
						},
						filter:function(event,player){
							return event.player.countCards('e')>0||player.countCards('he',{type:'equip'})>0;
						},
						check:function(event,player){
							return get.attitude(player,event.player)<=0;
						},
						content:function (){
							'step 0'
							trigger.untrigger();
							trigger.finish();
							var list=[];
							if(trigger.player.countCards('e')>0) list.push('得到其装备区里一张牌');
							if(player.countCards('he',{type:'equip'})>0) list.push('交给其一张装备牌并可以令其装备之');
							player.chooseControl(list).set('ai',function(event){
								if(get.attitude(player,trigger.player)<=0&&trigger.player.countCards('e')>0) return '得到其装备区里一张牌';
								if(get.attitude(player,trigger.player)>0&&player.countCards('he',{type:'equip'})>0) return '交给其一张装备牌并可以令其装备之';
							});
							'step 1'
							if(result.control=='得到其装备区里一张牌') player.gainPlayerCard(1,'e',true,trigger.player);
							if(result.control=='交给其一张装备牌并可以令其装备之'){
								player.chooseCard(1,'he',{type:'equip'}).set('ai',function(card){
									return 1;
    							});
							}else{
								event.finish();
							};
							'step 2'
							if(result.bool){
								player.line(trigger.player);
								event.card=result.cards[0];
								player.$give(event.card,trigger.player);
								trigger.player.gain(event.card,player);
							}else{
								event.finish();
							};
							'step 3'
							var chooseControl=player.chooseControl(['是','否']);
							chooseControl.set('ai',function(event){
								return '否';
							});
							chooseControl.set('prompt','是否令其装备你给予的装备牌？');
							'step 4'
							if(result.control=='是') trigger.player.useCard(event.card,trigger.player);
						},
					},
					"ljyhsl_drlz_luanguo":{
						enable:'phaseUse',
						usable:1,
						filterCard:function(card){
							var type=get.type(card);
							for(var i=0;i<ui.selected.cards.length;i++){
								if(get.type(ui.selected.cards[i])==type) return false;
							};
							return true;
						},
						complexCard:true,
						selectCard:3,
						selectTarget:-1,
						filterTarget:true,
						line:'fire',
						check:function(card){
							return 6-get.value(card);
						},
						content:function(){
							if(target.hp<player.hp) target.damage();
							if(target==player) target.loseHp();
						},
						ai:{
							order:1,
							result:{
								player:function(player){
									if(game.countPlayer(function(current){return current.hp<player.hp&&get.attitude(player,current)<0})>0&&
									game.countPlayer(function(current){return current.hp<player.hp&&get.attitude(player,current)>0})==0&&
									player.hp>2) return 2;
									return 0;
								},
							},
						},
					},
					"ljyhsl_drlz_fuzheng":{
						trigger:{
							player:"phaseEnd",
						},
						forced:true,
						priority:Infinity,
						filter:function(event,player){
							return player.maxHp-player.hp>=2;
						},
						content:function (){
							player.recover();
							player.loseMaxHp();
						},
					},
					"ljyhsl_drlz_canluan":{
						trigger:{
							player:"phaseEnd",
						},
						forced:true,
						filter:function(event,player){
							return (player.hp>0&&player.hp<=3)||(player.hp>=7&&player.hp<=8);
						},
						content:function (){
							"step 0"
							player.chooseControl('体力','体力上限',function(event,player){
								if(player.hp==player.maxHp) return '体力';
								if(player.hp<player.maxHp-1||player.hp<=2) return '体力上限';
								return '体力';
							});
							"step 1"
							if(result.control=='体力'){
								player.loseHp();
							}else{
								player.loseMaxHp(true);
							};
						},
					},
					"ljyhsl_drlz_xiandeng":{
						trigger:{
							player:"phaseDrawBefore",
						},
						check:function(event,player){
							return player.countCards('h')>1&&game.players.length>=3;
						},
						content:function (){
							'step 0'
							trigger.cancel();
							event.card=get.cards()[0];
							player.showCards(event.card);
							player.gain(event.card,'gain2');
							if(get.color(event.card)=='black'){
								player.chooseTarget(function(card,player,target){
									return player!=target;
								},'是否弃置获得的牌并视为对一名其他角色使用【杀】？').ai=function(target){
									return -get.attitude(player,target)
								};
							}else{
								player.addTempSkill('ljyhsl_drlz_xiandeng1',{player:'phaseAfter'});
								event.finish();
							};
							'step 1'
							if(result.bool){
								player.discard(event.card);
								player.useCard({name:'sha'},result.targets[0],false);
							};
						},
					},
					"ljyhsl_drlz_xiandeng1":{
						mod:{
							globalFrom:function(from,to,distance){
								return -1;
							},
						},
					},
					"ljyhsl_drlz_jiaozi":{
						trigger:{
							global:"shaMiss",
						},
						//frequent:true,
						filter:function(event,player){
							return event.target==player;
						},
						content:function (){
							player.draw(2);
							trigger.player.draw();
						},
					},
					"_ljyhsl_drlz_yimou":{
						trigger:{
							player:"phaseAfter",
						},
						forced:true,
						filter:function(event,player){
							return player.hasSkill('ljyhsl_drlz_yimou');
						},
						content:function (){
							delete player.storage.ljyhsl_drlz_yimou;
						},
					},
					"ljyhsl_drlz_yimou":{
						enable:'phaseUse',
						filterTarget:function(card,player,target){
							return target!=player&&
							get.distance(player,target)<=1&&
							target.countCards('h')>0&&
							player.countCards('h')>0&&(
							player.storage.ljyhsl_drlz_yimou==undefined||(
							player.storage.ljyhsl_drlz_yimou&&
							!player.storage.ljyhsl_drlz_yimou.contains(target)));
						},
						selectTarget:1,
						content:function(){
							'step 0'
							if(player.storage.ljyhsl_drlz_yimou==undefined) player.storage.ljyhsl_drlz_yimou=[];
							player.storage.ljyhsl_drlz_yimou.push(target);
							target.chooseCard(1,'h',true);
							'step 1'
							if(result.bool){
								event.card=result.cards[0];
								target.showCards(event.card);
								game.delay();
								target.choosePlayerCard(1,'h',true,player);
							}else{
								event.finish();
							};
							'step 2'
							if(result.bool){
								var card=result.links[0];
								player.showCards(card);
								game.delay();
								if(get.suit(event.card)==get.suit(card)){
									player.$give(card,target);
									target.gain(card,player);
								}else{
									player.addTempSkill('ljyhsl_drlz_yimou1',{player:'phaseAfter'});
								};
							}else{
								event.finish();
							};
						},
						ai:{
							order:12,
							result:{
								target:function(player,target){
									if(player.countCards('h')>2) return 1;
									return ;
								},
							},
						},
					},
					"ljyhsl_drlz_yimou1":{
						group:["ljyhsl_drlz_yimou1_guohe","ljyhsl_drlz_yimou1_huogong","ljyhsl_drlz_yimou1_shunshou","ljyhsl_drlz_yimou1_juedou"],
						subSkill:{
							"guohe":{
								name:'过河',
								enable:'chooseToUse',
								position:'h',
								filterCard:function (card){
									return get.suit(card)=='spade';
								},
								viewAs:{name:'guohe'},
								prompt:'将一张黑桃手牌当【过河拆桥】使用',
							},
							"huogong":{
								name:'火攻',
								enable:'chooseToUse',
								position:'h',
								filterCard:function (card){
									return get.suit(card)=='club';
								},
								viewAs:{name:'huogong'},
								prompt:'将一张草花手牌当【火攻】使用',
							},
							"shunshou":{
								name:'顺手',
								enable:'chooseToUse',
								position:'h',
								filterCard:function (card){
									return get.suit(card)=='heart';
								},
								viewAs:{name:'shunshou'},
								prompt:'将一张红桃手牌当【顺手牵羊】使用',
							},
							"juedou":{
								name:'决斗',
								enable:'chooseToUse',
								position:'h',
								filterCard:function (card){
									return get.suit(card)=='diamond';
								},
								viewAs:{name:'juedou'},
								prompt:'将一张方块手牌当【决斗】使用',
							},
						},
					},
					"ljyhsl_lrfj_wudang":{
						trigger:{
							source:"damageAfter",
						},
						direct:true,
						filter:function (event,player){
							return event.card&&event.card.name=='sha';
						},
						content:function (){
							'step 0'
							player.chooseToDiscard(get.prompt('ljyhsl_lrfj_wudang'),1,'h',{type:'basic'}).ai=function(card){
								if(get.attitude(player,trigger.player)<0) return 1;
								return 0;
							};
							'step 1'
							if(result.bool){
								player.line(trigger.player);
								player.logSkill('ljyhsl_lrfj_wudang');
								trigger.player.damage();
							};
						},
					},
					"ljyhsl_lrfj_feijun":{
						mod:{
							cardEnabled:function(card,player){
								return card.name!='nanman';
							},
							targetInRange:function(card){
								if(_status.event.skill=='ljyhsl_lrfj_feijun') return true;
							},
						},
						enable:['chooseToRespond','chooseToUse'],
						filterCard:function(card,player){
							return card.name=='nanman';
						},
						position:'he',
						viewAs:{name:'sha'},
						prompt:'将一张【南蛮入侵】当【杀】使用或打出',
						onuse:function(result,player){
							player.addTempSkill('ljyhsl_lrfj_feijun1',{player:'useCardAfter'});
							player.addTempSkill('ljyhsl_lrfj_feijun2',{player:'useCardAfter'});
						},
						ai:{
							respondSha:true,
						},
					},
					"ljyhsl_lrfj_feijun1":{
						trigger:{
							source:'damageEnd'
						},
						forced:true,
						popup:false,
						content:function(){
							trigger.player.discard(trigger.player.get('e'));
						},
					},
					"ljyhsl_lrfj_feijun2":{
						ai:{
							unequip:true,
							skillTagFilter:function (player,tag,arg){
								if(arg&&arg.name=='sha') return true;
								return false;
							},
						},
					},
					"ljyhsl_lrfj_manshi":{
						trigger:{
							player:"phaseEnd",
						},
						direct:true,
						filter:function (event,player){
							return player.countCards('h')>0;
						},
						content:function (){
							'step 0'
							player.chooseTarget(get.prompt('ljyhsl_lrfj_manshi'),function(card,player,target){
								return player!=target;
							}).ai=function(target){
								return -get.attitude(player,target);
							};
							'step 1'
							if(result.bool){
								player.line(result.targets);
								player.logSkill('ljyhsl_lrfj_manshi');
								event.target=result.targets[0];
								player.chooseToCompare(event.target);
							}else{
								event.finish();
							};
							'step 2'
							if(result.bool) event.target.damage();
						},
					},
					"ljyhsl_lrfj_longji":{
						enable:'phaseUse',
						usable:1,
						discard:false,
						line:true,
						prepare:'give',
						filterCard:function(card){
							return card.name=='sha';
						},
						filterTarget:function(card,player,target){
							return target!=player;
						},
						content:function(){
							'step 0'
							target.gain(cards,player);
							'step 1'
							target.chooseControl(['视为对一名角色使用【杀】','令'+lib.translate[player.name]+'回复一点体力'],true).set('ai',function(event){
								if(get.attitude(target,player)<0) return '视为对一名角色使用【杀】';
								if(get.attitude(target,player)>=0&&player.hp==player.maxHp){
									return '视为对一名角色使用【杀】';
								}else{
									return '令'+lib.translate[player.name]+'回复一点体力';
								};
							}).set('prompt','【龙姬】');
							'step 2'
							if(result.control=='令'+lib.translate[player.name]+'回复一点体力') player.recover();
							if(result.control=='视为对一名角色使用【杀】'){
								target.chooseTarget(function(card,player,target){
									return player!=target;
								},true).ai=function(target){
									return -get.attitude(player,target);
								};
							}else{
								event.finish();
							};
							'step 3'
							if(result.bool){
								target.useCard({name:'sha'},result.targets[0]);
							};
						},
						ai:{
							expose:0.35,
							order:11,
							result:{
								target:1,
							},
						},
					},
					"ljyhsl_lrfj_chuoyue":{
						trigger:{
							target:'shaBegin'
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseToDiscard(get.prompt('ljyhsl_lrfj_chuoyue'),1,'he').ai=function(card){
								if(game.countPlayer()>2) return 5-get.value(card);
							};
							'step 1'
							if(result.bool){
								player.logSkill('ljyhsl_lrfj_chuoyue');
								trigger.player.chooseControl(['此【杀】造成的伤害-1','令'+lib.translate[player.name]+'指定使用【杀】'],true).set('ai',function(event){
									if(get.attitude(trigger.player,player)>=0) return '此【杀】造成的伤害-1';
									return '令'+lib.translate[player.name]+'指定使用【杀】'
								}).set('prompt','【绰约】');
							}else{
								event.finish();
							};
							'step 2'
							if(result.control=='此【杀】造成的伤害-1') trigger.card.ljyhsl_lrfj_JS=true;
							if(result.control=='令'+lib.translate[player.name]+'指定使用【杀】'){
								player.chooseTarget(function(card,player,target){
									return player!=target&&trigger.player!=target;
								}).ai=function(target){
									return true;
								};
							}else{
								event.finish();
							};
							'step 3'
							if(result.bool){
								player.line(result.targets);
								result.targets[0].chooseToUse({name:'sha'},trigger.player,-1);
							}else{
								event.finish();
							};
							'step 4'
							if(!result.bool) player.draw(2);
						},
					},
					"_ljyhsl_lrfj_chuoyue1":{
						trigger:{
							player:"damageBefore",
						},
						forced:true,
						popup:false,
						filter:function (event,player){
							return event.card&&event.card.ljyhsl_lrfj_JS==true
						},
						content:function (){
							trigger.num--;
							delete trigger.card.ljyhsl_lrfj_JS;
						},
					},
					"ljyhsl_lrfj_mingyu":{
						trigger:{
							player:'phaseDrawAfter'
						},
						direct:true,
						content:function(){
							"step 0"
							player.chooseTarget(get.prompt('ljyhsl_lrfj_mingyu'),function(card,player,target){
								return player!=target;
							}).ai=function(target){
								return get.attitude(player,target);
							};
							"step 1"
							if(result.bool){
								player.line(result.targets);
								player.logSkill('ljyhsl_lrfj_mingyu');
								event.target=result.targets[0];
								player.chooseCard('请选择给予的手牌',1,'h',function(card){
									return trigger.cards.contains(card);
								},true);
							}else{
								event.finish();
							};
							"step 2"
							if(result.bool){
								player.$give(result.cards[0],event.target);
								event.target.gain(result.cards[0]);
								game.delay();
								event.target.storage.ljyhsl_lrfj_mingyu1=result.cards[0];
								event.target.syncStorage('ljyhsl_lrfj_mingyu1');
								event.target.addTempSkill('ljyhsl_lrfj_mingyu1',{player:'phaseEnd'});
							}else{
								event.finish();
							};
						},
						global:'ljyhsl_lrfj_mingyu2',
					},
					"ljyhsl_lrfj_mingyu1":{
						mark:'card',
						intro:{
							content:'card'
						}
					},
					"ljyhsl_lrfj_mingyu2":{
						mod:{
							cardEnabled:function(card,player){
								if(player.storage.ljyhsl_lrfj_mingyu1==undefined) return ;
								if(get.color(card)==get.color(player.storage.ljyhsl_lrfj_mingyu1)) return false;
							},
							cardUsable:function(card,player){
								if(player.storage.ljyhsl_lrfj_mingyu1==undefined) return ;
								if(get.color(card)==get.color(player.storage.ljyhsl_lrfj_mingyu1)) return false;
							},
							cardRespondable:function(card,player){
								if(player.storage.ljyhsl_lrfj_mingyu1==undefined) return ;
								if(get.color(card)==get.color(player.storage.ljyhsl_lrfj_mingyu1)) return false;
							},
							cardSavable:function(card,player){
								if(player.storage.ljyhsl_lrfj_mingyu1==undefined) return ;
								if(get.color(card)==get.color(player.storage.ljyhsl_lrfj_mingyu1)) return false;
							},
						},
					},
					"ljyhsl_lrfj_yingjing":{
						trigger:{
							player:'damageEnd'
						},
						direct:true,
						content:function(){
							"step 0"
							player.chooseTarget(get.prompt('ljyhsl_lrfj_yingjing'),function(card,player,target){
								return player!=target;
							}).ai=function(target){
								return get.attitude(player,target);
							};
							"step 1"
							if(result.bool){
								player.line(result.targets);
								player.logSkill('ljyhsl_lrfj_yingjing');
								event.target=result.targets[0];
								var list=["回复一点体力","摸X张牌"];
								if(event.target.isTurnedOver()) list.push("令其翻至正面");
								player.chooseControl(list).set('ai',function(event){
									if(event.target.isTurnedOver()) return '令其翻至正面';
									if(event.target.maxHp>event.target.hp) return '回复一点体力';
									return '摸X张牌';
								}).set('prompt','请选择一项');
							}else{
								event.finish();
							};
							"step 2"
							if(result.control=='回复一点体力') event.target.recover();
							if(result.control=='摸X张牌') event.target.draw(event.target.hp);
							if(result.control=='令其翻至正面') event.target.turnOver();
						},
					},
					"ljyhsl_lrfj_dizong":{
						trigger:{
							global:'damageAfter'
						},
						zhuSkill:true,
						filter:function(event,player){
							return event.player!=player&&event.player.group=="wei";
						},
						direct:true,
						content:function(){
							"step 0"
							trigger.player.chooseControl(["令"+lib.translate[player.name]+"摸一张牌","取消"]).set('ai',function(event){
								if(get.attitude(trigger.player,player)>0) return "令"+lib.translate[player.name]+"摸一张牌";
								return "取消";
							}).set('prompt','请选择一项');
							"step 1"
							if(result.control=="令"+lib.translate[player.name]+"摸一张牌"){
								player.logSkill('ljyhsl_lrfj_dizong');
								player.draw();
							};
						},
					},
					"ljyhsl_lrfj_huqi":{
						trigger:{
							source:"damageBegin",
						},
						direct:true,
						filter:function (event,player){
							return event.card&&event.card.name=='sha'&&get.distance(player,event.player)<=1;
						},
						content:function (){
							'step 0'
							player.chooseToDiscard(get.prompt('ljyhsl_lrfj_huqi'),1,'h').ai=function(card){
								if(get.attitude(player,trigger.player)<0) return 1;
								return 0;
							};
							'step 1'
							if(result.bool){
								player.logSkill('ljyhsl_lrfj_huqi');
								var card=result.cards[0];
								if(get.type(card)=='basic'){
									if(player.getStat().card.sha>=1) player.getStat().card.sha--;
								};
								if(get.type(card)=='equip'){
									var num=trigger.player.hp;
									if(num>2) num=2;
									trigger.player.chooseToDiscard(num,'he',true);
								};
								if(get.type(card)=='delay'||get.type(card)=='trick'){
									trigger.num++;
								};
							};
						},
					},
					"ljyhsl_lrfj_quanli":{
						enable:'phaseUse',
						usable:1,
						discard:false,
						line:true,
						prepare:'give',
						filterCard:function(card){
							return get.type(card)=='trick';
						},
						filterTarget:function(card,player,target){
							return target!=player;
						},
						content:function(){
							'step 0'
							target.gain(cards[0],player);
							'step 1'
							if(lib.card[cards[0].name].filterTarget!=undefined&&(lib.card[cards[0].name].selectTarget==1||lib.card[cards[0].name].toself==true)){
								player.chooseTarget('请选择一名角色').ai=function(target){
									if(cards[0].name=='wuzhong') return get.attitude(player,target);
									return -get.attitude(player,target);
								};
							}else{
								event.finish();
							}
							'step 2'
							if(result.bool){
								target.useCard(game.createCard(cards[0]),result.targets[0]);
							}else{
								event.finish();
							};
						},
						ai:{
							expose:0.75,
							order:5,
							result:{
								target:1,
							},
						},
					},
					"ljyhsl_lrfj_zhiyong":{
						trigger:{
							player:"damageAfter",
						},
						content:function (){
							'step 0'
							event.c=get.cards(3);
							player.viewCards(event.c,'牌堆顶的三张牌');
							player.chooseControl(['亮出其中的非基本牌并获得之','你得到其中的一张牌']).set('ai',function(event){
								var card=[];
								for(var i=0;i<event.c.length;i++){
									if(get.type(event.c[i])!='basic') card.push(event.c[i]);
								};
								if(card.length>0||(trigger.source&&get.attitude(player,trigger.source)>0)) return '亮出其中的非基本牌并获得之';
								return '你得到其中的一张牌';
							}).set('prompt','请选择一项');
							'step 1'
							if(result.control=='亮出其中的非基本牌并获得之'){
								var card=[];
								for(var i=0;i<event.c.length;i++){
									if(get.type(event.c[i])!='basic') card.push(event.c[i]);
								};
								player.showCards(card);
								player.gain(card,'gain2');
							};
							if(result.control=='你得到其中的一张牌'){
								player.chooseCardButton(event.c,'请选择一张牌并获得之',true);
							}else{
								event.finish();
							};
							'step 2'
							if(result.bool){
								player.gain(result.links[0],'gain2');
								event.c.remove(result.links[0]);
								if(trigger.source){
									trigger.source.discardPlayerCard(player,'hej',true);
									player.useCard({name:'sha'},event.c,trigger.source);
								};
							};
						},
					},
					"ljyhsl_lrfj_haoao":{
						group:["ljyhsl_lrfj_haoao_gainMark","ljyhsl_lrfj_haoao_draw"],
						subSkill:{
							"gainMark":{
								trigger:{
									player:'damageEnd',
									source:'damageEnd'
								},
								forced:true,
								popup:false,
								content:function(){
									if(player.storage.ljyhsl_lrfj_haoao==undefined) player.storage.ljyhsl_lrfj_haoao=0;
									player.storage.ljyhsl_lrfj_haoao+=trigger.num;
								},
							},
							"draw":{
								trigger:{
									global:'phaseEnd'
								},
								filter:function(event,player){
									return player.storage.ljyhsl_lrfj_haoao!=undefined;
								},
								content:function(){
									var num=player.storage.ljyhsl_lrfj_haoao;
									if(num>2) num=2;
									player.draw(num);
									delete player.storage.ljyhsl_lrfj_haoao;
								},
							},
						},
					},
					"ljyhsl_lrfj_duanxie":{
						trigger:{
							player:'loseEnd'
						},
						direct:true,
						filter:function(event,player){
							for(var i=0;i<event.cards.length;i++){
								if(event.cards[i].original=='e') return true;
							}
							return false;
						},
						content:function(){
							'step 0'
							event.c=[];
							for(var i=0;i<trigger.cards.length;i++){
								if(trigger.cards[i].original=='e') event.c.push(trigger.cards[i]);
							};
							'step 1'
							player.chooseTarget(get.prompt('ljyhsl_lrfj_duanxie'),function(card,player,target){
								return target.countCards('e',{subtype:get.subtype(event.c[0])});
							}).ai=function(target){
								return -get.attitude(player,target);
							};
							'step 2'
							if(result.bool){
								player.line(result.targets);
								player.logSkill('ljyhsl_lrfj_duanxie');
								var card;
								for(var i=0;i<result.targets[0].get('e').length;i++){
									if(get.subtype(event.c[0])==get.subtype(result.targets[0].get('e')[i])) var card=result.targets[0].get('e')[i];
								};
								player.gain(card,'gain2');
								player.equip(card);
								event.c.remove(event.c[0]);
								if(event.c.length>0) event.goto(1);
							}else{
								event.finish();
							};
						},
					},
					"ljyhsl_lrfj_youhun":{
						unique:true,
						mark:true,
						skillAnimation:true,
						init:function(player){
							player.storage.ljyhsl_lrfj_youhun=false;
						},
						enable:'phaseUse',
						filter:function(event,player){
							return !player.storage.ljyhsl_lrfj_youhun;
						},
						filterTarget:function(card,player,target){
							return player!=target;
						},
						content:function(){
							player.awakenSkill('ljyhsl_lrfj_youhun');
							player.storage.ljyhsl_lrfj_youhun=true;
							target.recover(2);
							target.draw(3);
							player.die();
						},
						ai:{
							order:1,
							expose:0.8,
							result:{
								target:function(player,target){
									if(player.hp<=1) return 1;
									return ;
								},
							},
						},
						intro:{
							content:'limited'
						},
					},
					"ljyhsl_lrfj_danju":{
						trigger:{
							target:'shaBefore'
						},
						direct:true,
						content:function(){
							'step 0'
							var list=['对其使用【杀】'];
							if(player.countCards('he')>=2) list.push('弃牌，转移【杀】的目标');
							list.push('cancel2');
							player.chooseControl(list).set('ai',function(event){
								if(player.countCards('h')>=2) return '弃牌，转移【杀】的目标';
								if(player.countCards('h',{name:'sha'})>0&&get.attitude(player,trigger.player)<0) return '对其使用【杀】';
								return 'cancel2';
							});
							'step 1'
							if(result.control!='cancel2') player.logSkill('ljyhsl_lrfj_danju');
							if(result.control=='对其使用【杀】') player.chooseToUse('是否对此【杀】的使用者使用一张【杀】？',{name:'sha'},trigger.player);
							if(result.control=='弃牌，转移【杀】的目标'){
								player.chooseToDiscard(2,'he',true);
								trigger.target=trigger.player;
								trigger.targets.remove(player);
								trigger.targets.push(trigger.player);
							};
						},
					},
					"ljyhsl_lrfj_xiaji":{
						trigger:{
							global:'gameStart'
						},
						content:function(){
							var card=get.cardPile(function(card){return card.name=='zixin'});
							if(card!=undefined){
								player.gain(card,'gain2');
								player.equip(card);
							};
							var card1=get.cardPile(function(card){return get.type(card)=='equip'&&
							get.subtype(card)=='equip1'&&
							lib.card[card.name].distance!=undefined&&
							lib.card[card.name].distance.attackFrom==-1});
							if(card1!=undefined){
								player.gain(card1,'gain2');
								player.equip(card1);
							};
						},
					},
					"ljyhsl_lrfj_longlie":{
						enable:'phaseUse',
						usable:1,
						filter:function(event,player){
							return player.countCards('h')>=player.hp;
						},
						filterCard:true,
						selectCard:function(card){
							return _status.event.player.hp;
						},
						check:function(card){
							return 6-get.value(card);
						},
						filterTarget:function(card,player,target){
							return player!=target&&get.distance(player,target,'attack')<=1;
						},
						content:function(){
							target.damage();
						},
						ai:{
							order:1,
							expose:0.8,
							result:{
								target:function(player,target){
									if(player.hp<=2) return -1;
									return ;
								},
							},
						},
					},
					"ljyhsl_lrfj_sipan":{
						trigger:{
							global:'useCardAfter'
						},
						direct:true,
						filter:function(event,player){
							return event.targets.length==1&&event.targets.contains(player)&&(event.card.name=='sha'||get.type(event.card)=='trick');
						},
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('ljyhsl_lrfj_sipan'),function(card,player,target){
								return player!=target&&get.distance(player,target)<=2;
							}).ai=function(target){
								if(trigger.card.name=='wuzhong') return get.attitude(player,target);
								return -get.attitude(player,target);
							};
							'step 1'
							if(result.bool){
								player.logSkill('ljyhsl_lrfj_sipan');
								player.useCard(game.createCard(trigger.card),result.targets[0]);
							}else{
								event.finish();
							};
						},
					},
					"ljyhsl_lrfj_zhiru":{
						trigger:{
							source:'damageBegin'
						},
						check:function(event,player){
							return event.num<=0;
						},
						filter:function(event,player){
							return event.player.countCards('h')>0;
						},
						content:function(){
							'step 0'
							trigger.num--;
							player.chooseCardButton(lib.translate[trigger.player.name]+'的手牌',trigger.player.get('h'),true);
							'step 1'
							if(result.bool) trigger.player.discard(result.links[0]);
						},
					},
					"ljyhsl_lrfj_weisha":{
						trigger:{
							global:'dyingBegin'
						},
						forced:true,
						filter:function(event,player){
							return _status.currentPhase==player&&event.source==player;
						},
						content:function(){
							trigger.player.storage.ljyhsl_lrfj_weisha=player;
						},
					},
					"_ljyhsl_lrfj_weisha":{
						mod:{
							cardSavable:function(card,player){
								if(game.countPlayer(function(current){return current.storage.ljyhsl_lrfj_weisha!=undefined})>0&&card.name!='tao') return false;
							},
						},
						trigger:{
							player:'useCardEnd'
						},
						forced:true,
						filter:function(event,player){
							if(event.card.name!='tao') return false;
							for(var i=0;i<event.targets.length;i++){
								if(event.targets[i].storage.ljyhsl_lrfj_weisha!=undefined) return true;
							};
							return false;
						},
						content:function(){
							'step 0'
							player.chooseToDiscard(1,'he',{color:'red'});
							'step 1'
							if(!result.bool){
								var pl;
								for(var i=0;i<trigger.targets.length;i++){
									if(trigger.targets[i].storage.ljyhsl_lrfj_weisha!=undefined) pl=trigger.targets[i].storage.ljyhsl_lrfj_weisha;
								};
								player.damage().source=pl;
							};
							delete player.storage.ljyhsl_lrfj_weisha;
						},
					},
					"_ljyhsl_lrfj_weisha1":{
						trigger:{
							player:'phaseEnd'
						},
						forced:true,
						filter:function(event,player){
							return game.countPlayer(function(current){return current.storage.ljyhsl_lrfj_weisha!=undefined})>0;
						},
						content:function(){
							for(var i=0;i<game.players.length;i++){
								if(game.players[i].storage.ljyhsl_lrfj_weisha!=undefined) delete game.players[i].storage.ljyhsl_lrfj_weisha;
							};
						},
					},
					"ljyhsl_lrfj_anshi":{
						trigger:{
							player:['useCardAfter','respondAfter'],
						},
						round:2,
						filter:function(event,player){
							return _status.currentPhase!=player;
						},
						content:function(){
							'step 0'
							player.chooseTarget('请选择一名角色',function(card,player,target){
								return player!=target;
							}).ai=function(target){
								return -get.attitude(player,target);
							};
							'step 1'
							if(result.bool){
								player.line(result.targets);
								event.target=result.targets[0];
								event.target.chooseToDiscard(1,'he',{color:get.color(trigger.card)});
							}else{
								event.finish();
							};
							'step 2'
							if(!result.bool){
								event.target.damage();
							};
						},
					},
					"ljyhsl_nzry_liangwu":{
						trigger:{
							player:'phaseDrawBefore'
						},
						direct:true,
						content:function(){
							"step 0"
							player.chooseTarget(get.prompt('ljyhsl_nzry_liangwu'),1,function(card,player,target){
								return target.countCards('hej')>0;
							}).ai=function(target){
								if(player.countCards('h')>2) return -get.attitude(player,target);
								return ;
							};
							"step 1"
							if(result.bool){
								player.line(result.targets);
								player.logSkill('ljyhsl_nzry_liangwu');
								player.gainPlayerCard(result.targets[0],1,'hej',true);
								trigger.cancel();
							}else{
								event.finish();
							};
							"step 2"
							game.delay();
						},
					},
					"ljyhsl_nzry_wangquan":{
						trigger:{
							player:'phaseBegin'
						},
						direct:true,
						filter:function(event,player){
							return player.hp>player.countCards('h');
						},
						content:function(){
							"step 0"
							player.chooseTarget(get.prompt('ljyhsl_nzry_wangquan'),1,function(card,player,target){
								return target!=player&&target.countCards('h')>0;
							}).ai=function(target){
								return get.attitude(player,target);
							};
							"step 1"
							if(result.bool){
								player.line(result.targets);
								player.logSkill('ljyhsl_nzry_wangquan');
								event.target=result.targets[0];
								player.chooseToCompare(event.target);
							}else{
								event.finish();
							};
							"step 2"
							if(result.bool){
								player.draw(2);
							}else{
								event.target.draw(2);
							};
						},
					},
					"ljyhsl_nzry_edao":{
						mod:{
							globalTo:function (from,to,distance){
								var num=to.maxHp-to.hp;
								if(num>2) num=2;
								return distance+num;
							},
						},
					},
					"ljyhsl_nzry_xiace":{
						enable:"phaseUse",
						usable:1,
						filterCard:function(card){
							return get.type(card)=='basic';
						},
						filterTarget:function (card,player,target){
							return target!=player;
						},
						content:function (){
							'step 0'
							var cards=get.cards(3);
							target.chooseCardButton(cards,true,3,'请以任意顺序摆放牌');
							'step 1'
							if(result.bool){
								var cards=result.links;
								var cards1=cards.randomGets(2);
								player.showCards(cards1);
								game.delay();
								if(get.color(cards1[0])==get.color(cards1[1])){
									player.gain(cards1,'gain2');
								}else{
									target.gain(cards1,'gain2');
									target.loseHp();
									cards.remove(cards1[0]);
									cards.remove(cards1[1]);
									player.gain(cards,'gain2');
								};
							}else{
								event.finish();
							};
						},
						ai:{
							order:5,
							result:{
								target:-1,
							},
						},
					},
					"ljyhsl_nzry_zhizhan":{
						enable:"phaseUse",
						usable:1,
						content:function (){
							'step 0'
							var list=['将你的武将牌翻面'];
							if(player.countCards('h',{type:'basic'})>=2) list.push('弃置两张基本牌');
							player.chooseControl(list).set('ai',function(event){
								return '将你的武将牌翻面';
							});
							'step 1'
							event.control=result.control;
							if(event.control=='将你的武将牌翻面'){
								player.turnOver();
							}else{
								player.chooseToDiscard(2,'h',{type:'basic'},true);
							};
							player.chooseTarget(1,function(card,player,target){
								return target!=player;
							}).ai=function(target){
								return -get.attitude(player,target);
							};
							"step 2"
							if(result.bool){
								player.line(result.targets);
								var target=result.targets[0];
								if(event.control=='将你的武将牌翻面'){
									target.turnOver();
								}else{
									target.chooseToDiscard(2,'h',{type:'basic'},true);
								};
							}else{
								event.finish();
							};
						},
						ai:{
							order:1,
							result:{
								target:function(player,target){
									if(player.isTurnedOver()) return -1;
									return ;
								},
							},
						},
					},
					"ljyhsl_nzry_wanjian":{
						group:["ljyhsl_nzry_wanjian_sha","ljyhsl_nzry_wanjian_shan"],
						subSkill:{
							"sha":{
								name:'完谏',
								enable:['chooseToRespond','chooseToUse'],
								viewAsFilter:function(player){
									return _status.currentPhase!=player&&player.countCards('h')>0;
								},
								filterCard:true,
								selectCard:-1,
								viewAs:{name:'sha'},
								prompt:'将所有手牌当【杀】使用或打出',
								check:function(card){
									var player=get.owner(card);
									if(player.countCards('h',{name:'sha'})==0) return 1;
									return -1;
								},
								ai:{
									skillTagFilter:function(player){
										if(!player.countCards('h')) return false;
									},
									respondSha:true,
								},
							},
							"shan":{
								name:'完谏',
								enable:['chooseToRespond'],
								viewAsFilter:function(player){
									return _status.currentPhase!=player&&player.countCards('h')>0;
								},
								filterCard:true,
								selectCard:-1,
								viewAs:{name:'shan'},
								prompt:'将所有手牌当【闪】使用或打出',
								check:function(card){
									var player=get.owner(card);
									if(player.countCards('h',{name:'shan'})==0) return 1;
									return -1;
								},
								ai:{
									respondShan:true,
									skillTagFilter:function(player){
										if(!player.countCards('h')) return false;
									},
									effect:{
										target:function(card,player,target,current){
											if(get.tag(card,'respondShan')&&current<0) return 0.6;
										},
									},
								},
							},
						},
					},
					"ljyhsl_nzry_hequan":{
						trigger:{
							global:'damageAfter'
						},
						filter:function(event,player){
							return get.distance(player,event.player,'attack')<=1;
						},
						check:function(event,player){
							if(event.player==player) return true;
							return player.countCards('h')>=2&&get.attitude(player,event.player)>0;
						},
						content:function(){
							trigger.player.draw();
							player.chooseToDiscard(true);
							if(trigger.source) trigger.source.chooseToDiscard(true);
						},
					},
					"ljyhsl_nzry_xieji":{
						init:function (player){
							player.storage.ljyhsl_nzry_xieji=[];
						},
    					intro:{
    						content:'cards',
    					},
						marktext:"蝎",
						trigger:{
							player:'phaseDrawBegin'
						},
						filter:function(event,player){
							return player.countCards('h')>0;
						},
						check:function(event,player){
							return player.countCards('h')>=2;
						},
						content:function(){
							'step 0'
							trigger.num--;
							for(var i=0;i<player.get('h').length;i++){
								player.storage.ljyhsl_nzry_xieji.push(player.get('h')[i]);
							};
							player.markSkill('ljyhsl_nzry_xieji');
							player.lose(player.get('h'),ui.special);
							'step 1'
							player.judge(function(card){
								for(var i=0;i<player.storage.ljyhsl_nzry_xieji.length;i++){
									var card1=player.storage.ljyhsl_nzry_xieji[i];
									if(get.suit(card)==get.suit(card1)) return 1;
								};
								return -0.5;
							});
							'step 2'
							var card;
							for(var i=0;i<player.storage.ljyhsl_nzry_xieji.length;i++){
								var card1=player.storage.ljyhsl_nzry_xieji[i];
								if(get.suit(card1)==get.suit(result.card)) card=card1;
							};
							if(card!=undefined){
								player.storage.ljyhsl_nzry_xieji.remove(card);
								player.discard(game.createCard(card));
								player.draw(2);
								if(player.storage.ljyhsl_nzry_xieji.length>0) event.goto(1);
							};
						},
					},
					"ljyhsl_nzry_shexin":{
						trigger:{
							player:'damageAfter'
						},
						check:function(event,player){
							return player.isTurnedOver()||player.storage.ljyhsl_nzry_xieji.length>2;
						},
						content:function(){
							player.turnOver();
							player.draw(player.storage.ljyhsl_nzry_xieji.length);
							if(player.storage.ljyhsl_nzry_xieji.length<player.hp) player.recover();
						},
					},
					"ljyhsl_nzry_daoshu":{
						enable:"phaseUse",
						usable:1,
						filterTarget:function (card,player,target){
							return player!=target&&target.countCards('h')>0;
						},
						content:function (){
							"step 0"
							player.chooseControl('heart2','diamond2','club2','spade2').set('ai',function(event){
								switch(Math.floor(Math.random()*6)){
									case 0:return 'heart2';
									case 1:case 4:case 5:return 'diamond2';
									case 2:return 'club2';
									case 3:return 'spade2';
								};
							});
							"step 1"
							game.log(player,'选择了'+get.translation(result.control));
							event.choice=result.control;
							player.popup(event.choice);
							event.card=target.getCards('h').randomGet();
							player.gain(event.card,'gain2');
							player.showCards(event.card);
							game.delay();
							"step 2"
							if(get.suit(event.card)+'2'!=event.choice){
								target.line(player);
								player.damage().source=target;
							};
						},
						ai:{
							order:11,
							result:{
								target:function(player,target){
									if(player.countCards('h')<2&&player.hp>1) return -1;
									return ;
								},
							},
						},
					},
					"ljyhsl_nzry_yixiao":{
						trigger:{
							player:'damageAfter'
						},
						check:function(event,player){
							return player.isTurnedOver()||player.maxHp-player.hp>=2;
						},
						content:function(){
							'step 0'
							player.turnOver();
							'step 1'
							if(player.isTurnedOver()){
								player.draw(player.maxHp-player.hp);
							}else{
								player.recover();
							};
						},
					},
					"ljyhsl_nzry_kuangyan":{
						trigger:{
							player:'damageBegin'
						},
						forced:true,
						priority:-Infinity,
						filter:function(event,player){
							return (event.num==1&&event.nature==undefined)||event.num>=2;
						},
						content:function(){
							if(trigger.num==1&&trigger.nature==undefined){
								trigger.untrigger();
								trigger.finish();
							};
							if(trigger.num>=2) trigger.num++;
						},
					},
					"ljyhsl_nzry_yexi":{
						trigger:{
							player:'phaseEnd'
						},
						direct:true,
						filter:function(event,player){
							return player.countCards('h')>0;
						},
						content:function(){
							"step 0"
							player.chooseTarget(get.prompt('ljyhsl_nzry_yexi'),1,function(card,player,target){
								return target!=player;
							}).ai=function(target){
								if(player.countCards('h')>2) return get.attitude(player,target);
								return ;
							};
							"step 1"
							if(result.bool){
								player.logSkill('ljyhsl_nzry_yexi');
								player.chooseToDiscard(1,'h',true);
								player.line(result.targets);
								result.targets[0].addTempSkill('ljyhsl_nzry_yexi1',{player:'phaseAfter'});
							}else{
								event.finish();
							};
						},
					},
					"ljyhsl_nzry_yexi1":{
						mod:{
							targetInRange:function (card,player,target,now){
								if(card.name=='sha'&&get.color(card)=='red') return true;
							},
						},
						ai:{
							unequip:true,
							skillTagFilter:function (player,tag,arg){
								if(arg&&arg.name=='sha'&&get.color(arg)=='black') return true;
								return false;
							},
						},
					},
					"ljyhsl_nzry_xianshu":{
						enable:'phaseUse',
						usable:1,
						discard:false,
						prepare:function(cards,player,targets){
							player.$give(cards,targets[0],false);
						},
						filter:function(event,player){
							return player.countCards('h',{type:'equip'})>0;
						},
						filterCard:function(card){
							return get.type(card)=='equip';
						},
						check:function(card){
							var player=_status.currentPhase;
							if(player.countCards('he',{subtype:get.subtype(card)})>1){
								return 11-get.equipValue(card);
							};
							return 6-get.value(card);
						},
						filterTarget:function(card,player,target){
							return player!=target&&!target.getEquip(card);
						},
						content:function(){
							target.equip(cards[0]);
							target.loseHp();
						},
						ai:{
							order:3,
							result:{
								target:function (player,target){
									if(target.hp>=2&&get.attitude(player,target)>0) return 1;
									return -1;
								},
							},
						},
					},
					"ljyhsl_nzry_zhaixing":{
						trigger:{
							global:'shaBegin'
						},
						filter:function(event,player){
							return event.targets.contains(player);
						},
						check:function(event,player){
							return get.attitude(player,event.player)<=0;
						},
						content:function(){
							player.discardPlayerCard(trigger.player);
						},
					},
					"ljyhsl_nzry_zhajiang":{
						enable:"phaseUse",
						filterTarget:function (card,player,target){
							return player!=target&&target.countCards('hej')>0;
						},
						content:function (){
							"step 0"
							player.loseHp();
							"step 1"
							player.chooseControl(['手牌区','装备区','判定区']).set('ai',function(event){
								if(target.countCards('e')>0) return '装备区';
								if(target.countCards('h')>0) return '手牌区';
								return '判定区';
							});
							"step 2"
							var str;
							if(result.control=='手牌区'){
								str='h';
							}else if(result.control=='装备区'){
								str='e';
							}else{
								str='j';
							};
							target.chooseToDiscard(1,str,true);
							if(event.HT!=true) event.goto(1);
							event.HT=true;
						},
						ai:{
							order:12,
							result:{
								target:function(player,target){
									if(player.hp>1&&target.countCards('he')>2) return -1;
									return ;
								},
							},
						},
					},
					"ljyhsl_nzry_weishi":{
						init:function (player){
							player.storage.ljyhsl_nzry_weishi=[];
						},
    					intro:{
    						content:'cards',
    					},
						marktext:"畏",
						mark:true,
						mod:{
							globalTo:function (from,to,distance){
								if(to.storage.ljyhsl_nzry_weishi!=undefined) return distance+to.storage.ljyhsl_nzry_weishi.length;
							},
						},
						group:["ljyhsl_nzry_weishi_gainMark","ljyhsl_nzry_weishi_gainMark1","ljyhsl_nzry_weishi_clearMark"],
						subSkill:{
							"gainMark":{
								trigger:{
									player:'loseAfter'
								},
								filter:function(event,player){
									for(var i=0;i<event.cards.length;i++){
										if(get.color(event.cards[i])=='red'&&
										_status.currentPhase!=player&&
										_status.currentPhase.countCards('he')>0) return true;
									};
									return false;
								},
								check:function(event,player){
									return get.attitude(player,_status.currentPhase)<=0;
								},
								content:function(){
									'step 0'
									event.target=_status.currentPhase;
									event.num=0;
									for(var i=0;i<trigger.cards.length;i++){
										if(get.color(trigger.cards[i])=='red') event.num++;
									};
									event.num1=0;
									'step 1'
									player.choosePlayerCard('he',event.target);
									'step 2'
									if(result.bool){
										player.storage.ljyhsl_nzry_weishi.push(result.links[0]);
										player.syncStorage('ljyhsl_nzry_weishi');
										event.target.$give(result.links[0],player);
										//player.$gain(result.links[0]);
										event.target.lose(result.links[0],ui.special);
										event.num1++;
										if(event.num>event.num1) event.goto(1);
									}else{
										event.finish();
									};
								},
							},
							"gainMark1":{
								trigger:{
									player:'damageAfter'
								},
								filter:function(event,player){
									return _status.currentPhase!=player&&_status.currentPhase.countCards('he')>0;
								},
								check:function(event,player){
									return get.attitude(player,_status.currentPhase)<=0;
								},
								content:function(){
									'step 0'
									event.target=_status.currentPhase;
									player.choosePlayerCard('he',event.target);
									'step 1'
									if(result.bool){
										player.storage.ljyhsl_nzry_weishi.push(result.links[0]);
										player.syncStorage('ljyhsl_nzry_weishi');
										event.target.$give(result.links[0],player);
										//player.$gain(result.links[0]);
										event.target.lose(result.links[0],ui.special);
									}else{
										event.finish();
									};
								},
							},
							"clearMark":{
								trigger:{
									player:'phaseBegin'
								},
								forced:true,
								filter:function(event,player){
									return player.storage.ljyhsl_nzry_weishi.length>0;
								},
								content:function(){
									var cards=[];
									for(var i=0;i<player.storage.ljyhsl_nzry_weishi.length;i++){
										cards.push(game.createCard(player.storage.ljyhsl_nzry_weishi[i]));
									};
									player.discard(cards);
									player.storage.ljyhsl_nzry_weishi=[];
									player.syncStorage('ljyhsl_nzry_weishi');
								},
							},
						},
					},
					"ljyhsl_nzry_lianji":{
						trigger:{
							player:'useCardAfter'
						},
						filter:function(event,player){
							return get.type(event.card)=='trick'||get.type(event.card)=='delay';
						},
						frequent:true,
						content:function(){
							'step 0'
							event.cards=get.cards(3);
							player.showCards(event.cards);
							'step 1'
							var cards=[];
							for(var i=0;i<event.cards.length;i++){
								if(get.type(event.cards[i])=='trick'||get.type(event.cards[i])=='delay') cards.add(event.cards[i]);
							};
							if(cards.length>0) player.gain(cards,'gain2');
							if(cards.length<3){
								for(var i=0;i<cards.length;i++){
									event.cards.remove(cards[i]);
								};
								for(var i=0;i<event.cards.length;i++){
									ui.cardPile.appendChild(event.cards[i]);
								};
							};
						},
					},
					"ljyhsl_nzry_liemu":{
						init:function (player){
							player.storage.ljyhsl_nzry_liemu=0;
						},
						trigger:{
							player:'gainAfter'
						},
						filter:function(event,player){
							var list=['wu','shu','wei','qun'];
							var num=game.countPlayer(function(current){
								if(list.contains(current.group)){
									list.remove(current.group);
									return true;
								};
							});
							if(player.storage.ljyhsl_nzry_liemu>=num) return false;
							return player.storage.ljyhsl_nzry_liemu1==true;
						},
						direct:true,
						content:function(){
							'step 0'
							player.storage.ljyhsl_nzry_liemu++;
							player.chooseCard(get.prompt('ljyhsl_nzry_liemu'),1,'h').set('ai',function(card){
								if(game.countPlayer(function(current){return get.attitude(player,current)>0})>0) return 5-get.value(card);
								return -1;
    						});
							'step 1'
							if(result.bool){
								player.logSkill('ljyhsl_nzry_liemu');
								event.card=result.cards[0];
								player.showCards(event.card);
								player.chooseTarget('请选择一名角色',1,function(card,player,target){
									return player!=target;
								}).ai=function(target){
									return get.attitude(player,target);
								};
							}else{
								event.finish();
							};
							'step 2'
							if(result.bool){
								player.line(result.targets);
								event.target=result.targets[0];
								event.target.chooseCard(1,'h',{color:get.color(event.card)}).set('ai',function(card){
									if(get.attitude(event.target,player)>0) return -1;
									return 7-get.value(card);
    							});
							}else{
								event.finish();
							};
							'step 3'
							if(result.bool){
								event.target.discard(result.cards[0]);
								event.target.useCard({name:'sha'},player);
							}else{
								player.draw();
							};
						},
					},
					"_ljyhsl_nzry_liemu1":{
						trigger:{
							player:'phaseAfter'
						},
						forced:true,
						filter:function(event,player){
							return player.storage.ljyhsl_nzry_liemu!=undefined;
						},
						content:function(){
							player.storage.ljyhsl_nzry_liemu=0;
						},
					},
					"_ljyhsl_nzry_liemu2":{
						trigger:{
							player:'phaseUseBegin'
						},
						forced:true,
						filter:function(event,player){
							return player.hasSkill('ljyhsl_nzry_liemu');
						},
						content:function(){
							player.storage.ljyhsl_nzry_liemu1=true;
						},
					},
					"_ljyhsl_nzry_liemu3":{
						trigger:{
							player:'phaseUseEnd'
						},
						forced:true,
						filter:function(event,player){
							return player.hasSkill('ljyhsl_nzry_liemu');
						},
						content:function(){
							delete player.storage.ljyhsl_nzry_liemu1;
						},
					},
					"ljyhsl_nzry_yinshi":{
						trigger:{
							player:'phaseEnd'
						},
						priority:Infinity,
						filter:function(event,player){
							return !player.isTurnedOver();
						},
						check:function(event,player){
							var list=['wu','shu','wei','qun'];
							var num=game.countPlayer(function(current){
								if(list.contains(current.group)){
									list.remove(current.group);
									if(get.attitude(player,current)<0) return true;
								};
							});
							return num>=2;
						},
						content:function(){
							'step 0'
							player.turnOver();
							var list=['wu','shu','wei','qun'];
							event.num=game.countPlayer(function(current){
								if(list.contains(current.group)){
									list.remove(current.group);
									return true;
								};
							});
							'step 1'
							player.chooseTarget('请选择目标',event.num,function(card,player,target){
								return target!=player&&target.countCards('h')>0;
							}).ai=function(target){
								return -get.attitude(player,target);
							};
							'step 2'
							if(result.bool){
								player.line(result.targets);
								for(var i=0;i<result.targets.length;i++){
									player.gainPlayerCard(1,'h',result.targets[i]);
								};
							}else{
								event.finish();
							};
						},
					},
					"ljyhsl_nzry_liuxian":{
						trigger:{
							player:'phaseEnd'
						},
						filter:function(event,player){
							return !player.isTurnedOver();
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseCard(get.prompt('ljyhsl_nzry_liuxian'),1,'h').set('ai',function(card){
								if(player.countCards('h')>=2) return 6-get.value(card);
								return -1;
    						});
							'step 1'
							if(result.bool){
								event.card=result.cards[0];
								player.discard(event.card);
								player.chooseTarget('请选择一名角色',1).ai=function(target){
									return get.attitude(player,target);
								};
							}else{
								event.finish();
							};
							'step 2'
							if(result.bool){
								player.line(result.targets);
								player.logSkill('ljyhsl_nzry_liuxian');
								var str;
								if(get.color(event.card)=='red'){
									str='bazhen';
								}else{
									str='kanpo';
								};
								if(!result.targets[0].hasSkill(str)) result.targets[0].storage.ljyhsl_nzry_liuxian=str;
								result.targets[0].addSkill(str);
								game.log(result.targets[0],'获得技能【',lib.translate[str],'】');
							}else{
								event.finish();
							};
						},
					},
					"_ljyhsl_nzry_liuxian":{
						trigger:{
							player:'phaseBegin'
						},
						forced:true,
						filter:function(event,player){
							return player.hasSkill('ljyhsl_nzry_liuxian')
							&&game.countPlayer(function(current){
								return current.storage.ljyhsl_nzry_liuxian!=undefined;
							})>0;
						},
						content:function(){
							for(var i=0;i<game.players.length;i++){
								var pl=game.players[i];
								if(pl.storage.ljyhsl_nzry_liuxian!=undefined){
									pl.removeSkill(pl.storage.ljyhsl_nzry_liuxian);
									game.log(pl,'失去技能【',lib.translate[pl.storage.ljyhsl_nzry_liuxian],'】');
									delete pl.storage.ljyhsl_nzry_liuxian;
								};
							};
						},
					},
					"ljyhsl_gmrh_zhonghu":{
						enable:"phaseUse",
						usable:1,
						discard:false,
						prepare:'give',
						filterCard:true,
						selectCard:function(card){
							var pl=get.owner(card);
							return [pl.hp,Infinity];
						},
						filterTarget:function(card,player,target){
							return player!=target;
						},
						content:function (){
							'step 0'
							player.showCards(cards);
							target.gain(cards,player);
							player.chooseControl(['回复一点体力','对一名角色使用【杀】']).set('ai',function(event){
								if(player.hp!=player.maxHp) return '回复一点体力';
								return '对一名角色使用【杀】';
							});
							'step 1'
							if(result.control=='回复一点体力') player.recover();
							if(result.control=='对一名角色使用【杀】'){
								player.chooseTarget('请选择【杀】的目标',function(card,player,target){
									return target!=player&&get.distance(player,target,'attack')<=1;
								}).ai=function(target){
									return -get.attitude(player,target);
								};
							}else{
								event.finish();
							};
							'step 2'
							if(result.bool) player.useCard({name:'sha'},result.targets[0],false);
						},
						ai:{
							order:5,
							result:{
								target:function(player,target){
									if(player.hp<=2&&
									game.countPlayer(function(current){return get.distance(player,current,'attack')<=1&&current!=player&&get.attitude(player,current)<0})>0&&
									game.countPlayer(function(current){return current!=player&&get.attitude(player,current)>0})>0) return 1;
									return ;
								},
							},
						},
					},
					"ljyhsl_gmrh_mingyi":{
						trigger:{
							player:'damageAfter'
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('ljyhsl_gmrh_mingyi')).ai=function(target){
								return get.attitude(player,target);
							};
							'step 1'
							if(result.bool){
								var pl=result.targets[0];
								player.line(pl);
								player.logSkill('ljyhsl_gmrh_mingyi');
								pl.draw(pl.maxHp-pl.hp+1);
							};
						},
					},
					"ljyhsl_gmrh_weijiang":{
						enable:"phaseUse",
						discard:false,
						prepare:'give',
						filterCard:true,
						selectCard:2,
						filterTarget:function(card,player,target){
							return player!=target&&((player.storage.ljyhsl_gmrh_weijiang!=undefined&&!player.storage.ljyhsl_gmrh_weijiang.contains(target))||player.storage.ljyhsl_gmrh_weijiang==undefined);
						},
						content:function (){
							if(player.storage.ljyhsl_gmrh_weijiang==undefined) player.storage.ljyhsl_gmrh_weijiang=[];
							player.storage.ljyhsl_gmrh_weijiang.push(target);
							target.gain(cards,player);
							player.addTempSkill('ljyhsl_gmrh_weijiang1',{player:'phaseBegin'});
							target.addTempSkill('ljyhsl_gmrh_weijiang2',{player:'phaseEnd'});
						},
						ai:{
							order:8,
							result:{
								target:function(player,target){
									if(player.countCards('h')>2) return 1;
									return ;
								},
							},
						},
					},
					"ljyhsl_gmrh_weijiang1":{
						marktext:'伪',
						intro:{
							content:'',
						},
						mark:true,
						mod:{
							targetEnabled:function(card,player,target){
								if(player.hasSkill('ljyhsl_gmrh_weijiang2')) return false;
							},
						},
					},
					"ljyhsl_gmrh_weijiang2":{},
					"_ljyhsl_gmrh_weijiang":{
						trigger:{
							player:'phaseAfter'
						},
						forced:true,
						filter:function(event,player){
							return player.storage.ljyhsl_gmrh_weijiang!=undefined;
						},
						content:function(){
							delete player.storage.ljyhsl_gmrh_weijiang;
						},
					},
					"ljyhsl_gmrh_qianshi":{
						trigger:{
							global:'damageBefore'
						},
						filter:function(event,player){
							return get.distance(player,event.player,'attack')<=1;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseCard(get.prompt('ljyhsl_gmrh_qianshi'),2,'he').set('ai',function(card){
								if(get.attitude(player,trigger.player)>0) return 1;
								return -1;
							});
							'step 1'
							if(result.bool){
								player.logSkill('ljyhsl_gmrh_qianshi');
								player.discard(result.cards);
								player.line(trigger.player);
								trigger.untrigger();
								trigger.finish();
							};
						},
					},
					"ljyhsl_gmrh_hemeng":{
						enable:"phaseUse",
						filter:function(event,player){
							if(player.countCards('h')==0) return false;
							var num=player.maxHp-player.hp;
							if(num<=0) num=1
							if(player.getStat().skill.ljyhsl_gmrh_hemeng>=num) return false;
							return true;
						},
						filterTarget:function(card,player,target){
							return player!=target&&target.countCards('h')>0;
						},
						line:true,
						content:function (){
							'step 0'
							target.chooseCardButton(player.get('h'),true).set('ai',function(button){
								return 1;
							});
							'step 1'
    						if(result.bool){
								player.$give(1,target);
								target.gain(result.links[0],player);
								player.chooseCardButton(target.get('h'),true).set('ai',function(button){
									return 1;
								});
							}else{
								event.finish();
							};
							'step 2'
    						if(result.bool){
								target.$give(1,player);
								player.gain(result.links[0],target);
							}else{
								event.finish();
							};
						},
						ai:{
							order:3,
							result:{
								target:1,
							},
						},
					},
					"ljyhsl_gmrh_hujun":{
						trigger:{
							global:'shaBegin'
						},
						filter:function(event,player){
							return get.distance(player,event.target,'attack')<=1&&event.target!=player;
						},
						check:function(event,player){
							return get.attitude(player,event.target)>0&&player.countCards('h',{name:'shan'})>0;
						},
						content:function(){
							player.moveCard();
							trigger.targets.remove(trigger.target);
							trigger.targets.push(player);
							trigger.target=player;
							game.log(player,'代替',trigger.target,'成为目标');
						},
					},
					"ljyhsl_gmrh_zhaoxin":{
						trigger:{
							player:'damageAfter'
						},
						filter:function(event,player){
							return player.maxHp-player.hp>=1&&event.source;
						},
						check:function(event,player){
							if(player.maxHp-player.hp<=1) return get.attitude(player,event.source)>0;
							return get.attitude(player,event.source)<0;
						},
						content:function(){
							'step 0'
							var num=player.maxHp-player.hp;
							if(num>THCN) num=THCN;
							var THCN=trigger.source.countCards('h');
							var THC=trigger.source.get('h');
							var list=[];
							for(var i=0;i<num;i++){
								list.push(THC[i]);
							};
							player.viewCards(lib.translate[trigger.source.name]+'的手牌',list);
							game.delay();
							'step 1'
							var num=player.maxHp-player.hp;
							event.cards=get.cards(num);
							player.viewCards('牌堆顶'+num+'张牌',event.cards);
							game.delay();
							player.chooseCardButton('请选择其获得的牌',event.cards,true).set('ai',function(button){
								return 1;
							});
							'step 2'
    						if(result.bool){
								trigger.source.gain(result.links[0],'gain2');
								event.cards.remove(result.links[0]);
								if(event.cards.length>0) player.gain(event.cards,'gain2');
							}else{
								event.finish();
							};
						},
					},
					"ljyhsl_gmrh_quanqing":{
						trigger:{
							global:'dieBegin'
						},
						frequent:true,
						content:function(){
							player.addSkill('ljyhsl_gmrh_quanqing1');
						},
					},
					"ljyhsl_gmrh_quanqing1":{
						trigger:{
							global:'phaseEnd'
						},
						forced:true,
						popup:false,
						content:function(){
							player.draw();
							player.insertPhase();
							player.removeSkill('ljyhsl_gmrh_quanqing1');
						},
					},
					"ljyhsl_gmrh_shijun":{
						unique:true,
						intro:{
							content:'limited'
						},
						mark:true,
						skillAnimation:true,
						init:function(player){
							player.storage.ljyhsl_gmrh_shijun=false;
						},
						enable:'phaseUse',
						filter:function(event,player){
							return !player.storage.ljyhsl_gmrh_shijun;
						},
						filterTarget:function(card,player,target){
							return target!=player;
						},
						content:function(){
							'step 0'
							player.awakenSkill('ljyhsl_gmrh_shijun');
							player.storage.ljyhsl_gmrh_shijun=true;
							event.targets=[];
							for(var i=0;i<game.players.length;i++){
								if(get.distance(game.players[i],target,'attack')<=1&&game.players[i]!=target) event.targets.push(game.players[i]);
							};
							if(event.targets.length==0) event.finish();
							'step 1'
							event.targets[0].chooseToUse('是否对'+lib.translate[target.name]+'使用一张【杀】？',{name:'sha'},target);
							'step 2'
							if(!result.bool){
								var list=['令'+lib.translate[player.name]+'摸两张牌'];
								if(player.maxHp>player.hp) list.push('令'+lib.translate[player.name]+'回复一点体力');
								event.targets[0].chooseControl(list).set('ai',function(event){
									if(player.maxHp>player.hp) return '令'+lib.translate[player.name]+'回复一点体力';
									return '令'+lib.translate[player.name]+'摸两张牌';
								});
							}else{
								event.targets.remove(event.targets[0]);
								if(event.targets.length>0){
									event.goto(1);
								}else{
									event.finish();
								};
							};
							'step 3'
							event.targets[0].line(player);
							if(result.control=='令'+lib.translate[player.name]+'摸两张牌') player.draw(2);
							if(result.control=='令'+lib.translate[player.name]+'回复一点体力') player.recover();
							event.targets.remove(event.targets[0]);
							if(event.targets.length>0) event.goto(1);
						},
						ai:{
							order:3,
							result:{
								target:function(player,target){
									if(player.maxHp==player.hp) return ;
									if(game.countPlayer(function(current){return get.distance(current,target,'attack')<=1&&current!=target})>0) return -1;
								},
							},
						},
					},
					"ljyhsl_gmrh_lichi":{
						trigger:{
							player:'damageAfter'
						},
						filter:function(event,player){
							return event.source;
						},
						content:function(){
							'step 0'
							player.judge(function(card){
								return 1;
							});
							'step 1'
							if(get.color(result.card)=='black'){
								player.turnOver();
								player.line(trigger.source);
								trigger.source.damage();
							};
							if(get.color(result.card)=='red'){
								player.chooseControl(['令伤害来源翻面','弃置伤害来源两张牌']).set('ai',function(event){
									if(get.attitude(player,trigger.source)>0&&trigger.source.isTurnedOver()) return '令伤害来源翻面';
									if(get.attitude(player,trigger.source)<0&&trigger.source.isTurnedOver()) return '弃置伤害来源两张牌';
									return '令伤害来源翻面';
								});
							}else{
								event.finish();
							};
							'step 2'
							player.line(trigger.source);
							if(result.control=='令伤害来源翻面') trigger.source.turnOver();
							if(result.control=='弃置伤害来源两张牌') player.discardPlayerCard(trigger.source,2,'he');
						},
					},
					"ljyhsl_gmrh_conglong":{
						trigger:{
							player:'turnOverAfter'
						},
						filter:function(event,player){
							return player.countCards('he')>0&&_status.currentPhase!=player&&event.player.isTurnedOver();
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseToDiscard(get.prompt('ljyhsl_gmrh_conglong'),'he',1).set('ai',function(card){
								if(get.attitude(player,event.player)>0) return 6-get.value(card);
								return 0;
							});
							'step 1'
    						if(result.bool){
								player.logSkill('ljyhsl_gmrh_conglong');
								player.judge(function(card){
									return 1;
								});
							}else{
								event.finish();
							};
							'step 2'
							if(get.type(result.card)=='basic'){
								trigger.player.recover();
							}else{
								trigger.player.draw(2);
							};
						},
					},
					"ljyhsl_gmrh_jiupin":{
						marktext:'榜',
						intro:{
							content:'cards',
						},
						enable:"phaseUse",
						usable:1,
						filterCard:true,
						selectCard:function(card){
							var pl=get.owner(card);
							return pl.hp;
						},
						filterTarget:true,
						content:function (){
							'step 0'
							player.judge(function(card){
								return 1;
							});
							'step 1'
							target.$gain2(result.card);
							if(target.storage.ljyhsl_gmrh_jiupin==undefined) target.storage.ljyhsl_gmrh_jiupin=[];
							target.storage.ljyhsl_gmrh_jiupin.push(result.card);
							target.markSkill('ljyhsl_gmrh_jiupin');
							target.syncStorage('ljyhsl_gmrh_jiupin');
							game.log(target,'将',result.card,'置于武将牌上');
						},
						ai:{
							order:13,
							result:{
								target:function(player,target){
									if(player.hp<2&&player.countCards('')>=2) return 1;
									return ;
								},
							},
						},
					},
					"_ljyhsl_gmrh_jiupin":{
						trigger:{
							player:'damageAfter'
						},
						filter:function(event,player){
							return event.source&&player.storage.ljyhsl_gmrh_jiupin!=undefined;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseCardButton('是否弃置“榜”来发动技能？',player.storage.ljyhsl_gmrh_jiupin).set('ai',function(button){
								return 1;
							});
							'step 1'
							if(result.bool){
								player.logSkill('ljyhsl_gmrh_jiupin');
								player.discard(game.createCard(result.links[0]));
								player.storage.ljyhsl_gmrh_jiupin.remove(result.links[0]);
								player.syncStorage('ljyhsl_gmrh_jiupin');
								if(player.storage.ljyhsl_gmrh_jiupin.length==0){
									delete player.storage.ljyhsl_gmrh_jiupin;
									player.unmarkSkill('ljyhsl_gmrh_jiupin');
								};
								if(get.color(result.links[0])=='red'){
									player.gainPlayerCard(get.prompt('fankui',trigger.source),trigger.source,get.buttonValue,'he').set('logSkill',['fankui',trigger.source]);
									event.finish();
								};
							}else{
								event.finish();
							};
							"step 2"
							player.chooseTarget(get.prompt('jieming'),[1,trigger.num],function(card,player,target){
								return target.countCards('h')<Math.min(target.maxHp,5);
							}).set('ai',function(target){
								var att=get.attitude(_status.event.player,target);
								if(att>2) return Math.min(5,target.maxHp)-target.countCards('h');
								return att/3;
							});
							"step 3"
							if(result.bool){
								player.logSkill('jieming',result.targets);
								for(var i=0;i<result.targets.length;i++){
									result.targets[i].draw(Math.min(5,result.targets[i].maxHp)-result.targets[i].countCards('h'));
								};
							};
						},
					},
					"ljyhsl_gmrh_zhongzheng":{
						trigger:{
							player:'damageAfter'
						},
						frequent:true,
						content:function(){
							"step 0"
							event.cards=get.cards(4);
							if(event.isMine()==false){
								event.dialog=ui.create.dialog('中正',event.cards);
								game.delay(2);
							};
							"step 1"
							if(event.dialog) event.dialog.close();
							var dialog=ui.create.dialog('中正',event.cards);
							player.chooseButton([0,5],dialog,true).set('ai',function(button){
								return get.value(button.link);
							}).filterButton=function(button){
								for(var i=0;i<ui.selected.buttons.length;i++){
									if(get.suit(button.link)==get.suit(ui.selected.buttons[i].link)) return false;
								};
								return true;
							};
							"step 2"
							var cards2=[];
							for(var i=0;i<result.buttons.length;i++){
								cards2.push(result.buttons[i].link);
								cards.remove(result.buttons[i].link);
							};
							player.gain(cards2,'log');
							if(cards2.length) player.$gain2(cards2);
							for(var i=0;i<cards.length;i++){
								cards[i].discard();
							};
							game.delay(2);
						},
					},
					"ljyhsl_gmrh_shesheng":{
						trigger:{
							global:'phaseUseBegin'
						},
						priority:Infinity,
						filter:function(event,player){
							return event.player!=player;
						},
						check:function(event,player){
							return get.attitude(player,event.player)>0&&player.hp>2&&event.player.maxHp>event.player.hp;
						},
						content:function(){
							player.line(trigger.player);
							trigger.player.recover();
							player.loseHp();
							player.draw();
						},
					},
					"ljyhsl_gmrh_quyi":{
						trigger:{
							global:'damageBegin'
						},
						filter:function(event,player){
							return event.card&&event.card.name=='sha';
						},
						check:function(event,player){
							return get.attitude(player,event.player)>0&&player.hp>2;
						},
						content:function(){
							player.line(trigger.player);
							trigger.untrigger();
							trigger.finish();
							player.loseHp();
							if(trigger.player.hp==1) player.draw();
						},
					},
					"ljyhsl_gmrh_yinxi":{
						trigger:{
							player:'damageAfter'
						},
						filter:function(event,player){
							return player.countCards('h',{name:'sha'})>0&&event.source;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseToUse(get.prompt('ljyhsl_gmrh_yinxi'),{name:'sha'},trigger.source,-1);
							'step 1'
							if(result.bool){
								player.logSkill('ljyhsl_gmrh_yinxi');
								player.gainPlayerCard(trigger.source,1,'e');
							}else{
								event.finish();
							};
							'step 2'
							if(result.bool){
								player.lose(result.links[0],ui.special);
								player.$equip(game.createCard(result.links[0]));
								game.log(player,'装备了',result.links[0]);
							};
						},
					},
					"ljyhsl_gmrh_fenji":{
						trigger:{
							player:'shaBegin'
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseCard(get.prompt('ljyhsl_gmrh_fenji'),1,function(card){
								return get.color(card)!=get.color(trigger.card);
							}).set('ai',function(card){
								if(game.countPlayer(function(current){
									return get.attitude(player,current)<0&&
									!trigger.targets.contains(current)&&
									get.distance(player,current,'attack')<=1
								})>0) return 5-get.value(card);
								return 0;
    						});
							'step 1'
							if(result.bool){
								player.logSkill('ljyhsl_gmrh_fenji');
								player.discard(result.cards[0]);
								player.chooseTarget('请选择【杀】的额外目标',function(card,player,target){
									return !trigger.targets.contains(target)&&get.distance(player,target,'attack')<=1;
								}).ai=function(target){
									return -get.attitude(player,target);
								};
							}else{
								event.finish();
							};
							'step 2'
							if(result.bool) trigger.targets.push(result.targets[0]);
						},
					},
					"ljyhsl_gmrh_dezong":{
						trigger:{
							player:'phaseEnd'
						},
						/*filter:function(event,player){
							return game.countPlayer(function(current){return current.countCards('e')>0})>0;
						},*/
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('ljyhsl_gmrh_dezong')).ai=function(target){
								if(target.countCards('e')>player.countCards('e')&&get.attitude(player,target)<0) return 1;
								if(player.countCards('e')==0) return 1;
								return 0;
							};
							'step 1'
							if(result.bool){
								var pl=result.targets[0];
								player.line(pl);
								player.logSkill('ljyhsl_gmrh_dezong');
								game.log(player,'和',pl,'交换了装备牌');
								var cards=[player.getCards('e'),pl.getCards('e')];
								player.lose(cards[0],ui.special);
								pl.lose(cards[1],ui.special);
								if(cards[0].length) player.$give(cards[0],pl);
								if(cards[1].length) pl.$give(cards[1],player);
								for(var i=0;i<cards[1].length;i++){
									player.equip(cards[1][i]);
								};
								for(var i=0;i<cards[0].length;i++){
									pl.equip(cards[0][i]);
								};
								if(cards[0].length<=player.hp) player.draw();
							};
						},
					},
					"ljyhsl_gmrh_duanzhi":{
						mod:{
							maxHandcard:function (player,num){
								return num+(player.maxHp-player.hp);
							},
						},
						trigger:{
							player:'phaseDrawBegin'
						},
						filter:function(event,player){
							return player.maxHp>player.hp;
						},
						forced:true,
						content:function(){
							trigger.num+=player.maxHp-player.hp;
						},
					},
					"ljyhsl_gmrh_shidu":{
						trigger:{
							global:'dyingBegin'
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseCard(get.prompt('ljyhsl_gmrh_shidu'),1,{color:'black'}).set('ai',function(card){
								if(trigger.player.hp>=-1) return -get.attitude(player,trigger.player);
								return 0;
    						});
							'step 1'
							if(result.bool){
								player.logSkill('ljyhsl_gmrh_shidu');
								player.line(trigger.player);
								player.discard(result.cards[0]);
								trigger.player.damage();
							};
						},
					},
					"ljyhsl_gmrh_xiandao":{
						trigger:{
							global:'judge'
						},
						direct:true,
						filter:function(event,player){
							return player.countCards('h')>0;
						},
						content:function(){
							"step 0"
							player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+get.translation(trigger.player.judging[0])+'，'+get.prompt('ljyhsl_gmrh_xiandao')).set('ai',function(card){
								var trigger=_status.event.getTrigger();
								var player=_status.event.player;
								var judging=_status.event.judging;
								var result=trigger.judge(card)-trigger.judge(judging);
								var attitude=get.attitude(player,trigger.player);
								if(attitude==0||result==0) return 0;
								if(attitude>0){
									return result-get.value(card)/2;
								}else{
									return -result-get.value(card)/2;
								};
							}).set('judging',trigger.player.judging[0]);
							"step 1"
							if(result.bool){
								player.respond(result.cards,'highlight');
							}else{
								event.finish();
							};
							"step 2"
							if(result.bool){
								player.logSkill('ljyhsl_gmrh_xiandao');
								if(trigger.player.judging[0].clone){
									trigger.player.judging[0].clone.classList.remove('thrownhighlight');
									game.broadcast(function(card){
										if(card.clone) card.clone.classList.remove('thrownhighlight');
									},trigger.player.judging[0]);
									game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
								};
								trigger.player.judging[0].discard();
								trigger.player.judging[0]=result.cards[0];
								if(!get.owner(result.cards[0],'judge')) trigger.position.appendChild(result.cards[0]);
								game.log(trigger.player,'的判定牌改为',result.cards[0]);
								game.delay(2);
							};
						},
						ai:{
							tag:{
								rejudge:1,
							},
						},
					},
					"ljyhsl_gmrh_chuanshu":{
						enable:'phaseUse',
						usable:1,
						filterCard:true,
						position:'e',
						check:function(card){
							return 9-get.value(card)
						},
						filterTarget:function(card,player,target){
							if(target.hp>=target.maxHp) return false;
							return true;
						},
						content:function(){
							'step 0'
							player.judge(function(card){
								if(get.suit(card)=='heart') return 2;
								return -2.5;
							});
							'step 1'
							if(get.suit(result.card)=='heart') target.recover();
						},
						ai:{
							order:9,
							result:{
								target:function(player,target){
									if(player.countCards('h',{suit:'heart'})==0) return ;
									if(target.hp==1) return 5;
									if(player==target&&player.countCards('h')>player.hp) return 5;
									return 2;
								},
							},
						},
					},
					"ljyhsl_gmrh_qimen":{
						trigger:{
							player:'loseEnd'
						},
						filter:function(event,player){
							for(var i=0;i<event.cards.length;i++){
								if(_status.currentPhase!=player&&(event.cards[i].original=='e'||(get.color(event.cards[i])=='black'&&event.cards[i].original=='h'))) return true;
							};
							return false;
						},
						content:function(){
							'step 0'
							player.judge(function(card){
								if(get.suit(card)=='spade') return 4;
    							return -1;
							});
							'step 1'
							if(get.suit(result.card)=='spade'){
								player.chooseTarget('请选择一名角色').ai=function(target){
									return -get.attitude(player,target);
								};
							}else{
								event.finish();
							};
							'step 2'
							if(result.bool){
								player.line(result.targets[0]);
								result.targets[0].damage('thunder');
							};
						},
					},
					"ljyhsl_gmrh_dunjia":{
						group:["ljyhsl_gmrh_dunjia_sha","ljyhsl_gmrh_dunjia_shan"],
						subSkill:{
							"sha":{
								name:'杀',
								enable:['chooseToRespond','chooseToUse'],
								filterCard:{color:'black'},
								viewAs:{name:'sha'},
								prompt:'将一张黑色牌当【杀】使用或打出',
								check:function(card){return 1},
								viewAsFilter:function(player){
									return player.countCards('e')==0&&_status.currentPhase!=player;
								},
								ai:{
									skillTagFilter:function(player){
										if(!player.countCards('h',{color:'black'})) return false;
									},
									respondSha:true,
								},
							},
							"shan":{
								name:'闪',
								enable:['chooseToRespond'],
								filterCard:{color:'red'},
								viewAs:{name:'shan'},
								prompt:'将一张红色牌当【闪】使用或打出',
								check:function(){return 1},
								viewAsFilter:function(player){
									return player.countCards('e')==0&&_status.currentPhase!=player;
								},
								ai:{
									respondShan:true,
									skillTagFilter:function(player){
										if(!player.countCards('h',{color:'red'})) return false;
									},
									effect:{
									target:function(card,player,target,current){
											if(get.tag(card,'respondShan')&&current<0) return 0.6;
										},
									},
								},
							},
						},
					},
					"ljyhsl_gmrh_bodao":{
						mod:{
							judge:function (player,result){
								if(_status.event.type=='phase'){
									if(result.bool==false) result.bool=null;
								};
							},
						},
					},
					"ljyhsl_gmrh_shuwu":{
						trigger:{
							player:'loseAfter'
						},
						filter:function(event,player){
							return _status.currentPhase!=player;
						},
						content:function(){
							'step 0'
							player.judge(function(card){
    							return 1;
							});
							'step 1'
							if(get.suit(result.card)=='spade') event.bool='loseHp';
							if(get.suit(result.card)=='club') event.bool='draw';
							if(get.suit(result.card)=='heart') event.bool='viewAs';
							if(get.suit(result.card)=='diamond') event.bool='link';
							'step 2'
							var num=1;
							if(event.bool=='link') num=[0,2];
							player.chooseTarget('请选择目标',num).ai=function(target){
								if(event.bool=='draw') return get.attitude(trigger.player,target);
								if(player.hp<=2&&event.bool=='loseHp') return 0;
								return -get.attitude(trigger.player,target);
							};
							'step 3'
							if(result.bool){
								player.line(result.targets);
								if(event.bool=='loseHp'){
									player.loseHp();
									result.targets[0].loseHp();
								};
								if(event.bool=='draw') result.targets[0].draw(2);
								if(event.bool=='viewAs') player.useCard(game.createCard({name:'lebu'}),result.targets[0]);
								if(event.bool=='link'){
									for(var i=0;i<result.targets.length;i++){
										result.targets[i].link();
									};
								};
							};
						},
					},
					"ljyhsl_gmrh_luochi":{
						enable:'phaseUse',
						usable:1,
						filter:function(event,player){
							return player.countCards('h')>0;
						},
						filterCard:true,
						selectCard:-1,
						filterTarget:function(card,player,target){
							return target!=player;
						},
						selectTarget:function(){
							var player=_status.event.player
							return [1,player.maxHp-player.hp+1];
						},
						line:true,
						content:function(){
							'step 0'
							target.chooseToDiscard(1,'h',{type:'basic'});
							'step 1'
							if(!result.bool){
								target.line(player);
								player.draw(2);
							};
						},
						ai:{
							order:1,
							result:{
								player:function(player){
									if(player.maxHp-player.hp>=1&&player.countCards('h')<=2) return 1;
								},
							},
						},
					},
					"ljyhsl_gmrh_qunru":{
						trigger:{
							global:'useCardBegin'
						},
						filter:function(event,player){
							return get.type(event.card)=='trick'&&event.targets&&event.targets.length>1&&event.targets.contains(player);
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseCard(lib.translate[trigger.player.name]+'即将使用【'+lib.translate[trigger.card.name]+'】<br>'+get.prompt('ljyhsl_gmrh_qunru'),{color:get.color(trigger.card)}).set('ai',function(card){
								return 0;
    						});
							'step 1'
							if(result.bool){
								player.logSkill('ljyhsl_gmrh_qunru');
								player.discard(result.cards[0]);
								trigger.player=player;
								game.log(trigger.card,'的使用者变成了',player);
							};
						},
					},
					"ljyhsl_hyrs_qidao":{
						mod:{
							globalFrom:function(from,to,distance){
								return distance-2;
							},
						},
					},
					"ljyhsl_hyrs_xiongyi":{
						skillAnimation:true,
						unique:true,
						trigger:{
							player:'phaseBegin'
						},
						forced:true,
						filter:function(event,player){
							return player.hp==1&&!player.storage.ljyhsl_hyrs_xiongyi;
						},
						content:function(){
							player.loseMaxHp();
							player.recover();
							player.draw(2);
							player.addSkill('ljyhsl_hyrs_jixi');
							player.addSkill('ljyhsl_hyrs_changqu');
							player.storage.ljyhsl_hyrs_xiongyi=true;
							player.awakenSkill('ljyhsl_hyrs_xiongyi');
						},
					},
					"ljyhsl_hyrs_jixi":{
						enable:'chooseToUse',
						filterCard:function(card){
							return card.name=='shan'||card.name=='tao';
						},
						position:'h',
						check:function(card){
							var player=get.owner(card);
							if(card.name=='tao'&&player.maxHp==player.hp) return 1;
							if(card.name=='shan'&&player.countCards('h','shan')>=2) return 1;
							return -1;
						},
						viewAs:{name:'shunshou'},
						prompt:'将【闪】或【桃】当【顺手牵羊】使用',
					},
					"ljyhsl_hyrs_changqu":{
						trigger:{
							player:'shaBegin'
						},
						filter:function(event,player){
							return event.card;
						},
						direct:true,
						content:function(){
							"step 0"
							player.chooseToDiscard(get.prompt('ljyhsl_hyrs_changqu'),1,'h',{color:get.color(trigger.card)}).ai=function(card){
								if(get.attitude(player,trigger.targets[0])<0&&
								trigger.targets[0].countCards('h','shan')>0) return 5-get.value(card);
								return -1;
							};
							"step 1"
							if(result.bool){
								player.logSkill('ljyhsl_hyrs_changqu');
								trigger.directHit=true;
							}else{
								event.finish();
							}
						}
					},
					"ljyhsl_hyrs_canyi":{
						skillAnimation:true,
						unique:true,
						trigger:{
							player:'phaseEnd'
						},
						forced:true,
						filter:function(event,player){
							return player.hp==1&&!player.storage.ljyhsl_hyrs_canyi;
						},
						derivation:['weimu','yizhong'],
						content:function(){
							player.loseMaxHp();
							player.recover();
							player.draw(2);
							player.addSkill('weimu');
							player.addSkill('yizhong');
							player.storage.ljyhsl_hyrs_canyi=true;
							player.awakenSkill('ljyhsl_hyrs_canyi');
						},
					},
					"ljyhsl_hyrs_fugu":{
						enable:'phaseUse',
						usable:1,
						filterCard:function(card){
							return get.suit(card)=='heart';
						},
						check:function(card){
							return 5-get.value(card);
						},
						content:function(){
							'step 0'
							player.judge(function(card){
								if(get.suit(card)=='spade') return 2;
								return 0;
							});
							'step 1'
							if(get.suit(result.card)=='spade'){
								player.useCard({name:'wuzhong'},player);
							}else{
								player.useCard({name:'wugu'},game.players);
							};
						},
						ai:{
							order:13,
							result:{
								player:1,
							},
						},
					},
					"ljyhsl_hyrs_shidao":{
						trigger:{
							player:'judgeEnd'
						},
						direct:true,
						filter:function(event,player){
							return player.countCards('h','sha')>0;
						},
						content:function(){
							'step 0'
							player.addSkill('ljyhsl_hyrs_shidao1');
							'step 1'
							player.chooseToUse(get.prompt('ljyhsl_hyrs_shidao'),{name:'sha'});
							'step 2'
							player.removeSkill('ljyhsl_hyrs_shidao1');
						},
					},
					"ljyhsl_hyrs_shidao1":{
						trigger:{
							player:'shaBegin'
						},
						filter:function(event,player){
							return _status.currentPhase==player;
						},
						forced:true,
						popup:false,
						content:function(){
							player.getStat().card.sha--;
						},
					},
					"ljyhsl_hyrs_linjia":{
						intro:{
							content:'cards'
						},
						marktext:'柯',
						trigger:{
							player:'damageBegin'
						},
						direct:true,
						filter:function(event,player){
							return event.nature==undefined&&event.source;
						},
						content:function(){
							'step 0'
							player.chooseCard(1,'he').set('ai',function(card){
								return 8-get.value(card);
    						});
							'step 1'
							if(result.bool){
								player.logSkill('ljyhsl_hyrs_linjia');
								trigger.untrigger();
								trigger.finish();
								player.line(trigger.source);
								if(trigger.source.storage.ljyhsl_hyrs_linjia==undefined){
									trigger.source.storage.ljyhsl_hyrs_linjia=[];
									trigger.source.markSkill('ljyhsl_hyrs_linjia');
								};
								trigger.source.storage.ljyhsl_hyrs_linjia.push(result.cards[0]);
								trigger.source.syncStorage('ljyhsl_hyrs_linjia');
								player.$give(result.cards[0],trigger.source);
								player.lose(result.cards[0],ui.special);
								game.log(player,'将',result.cards[0],'放在',trigger.source,'的武将牌上');
							}else{
								event.finish();
							};
						},
					},
					"_ljyhsl_hyrs_linjia":{
						enable:'phaseUse',
						usable:1,
						filter:function(event,player){
							return game.countPlayer(function(current){
								return current.storage.ljyhsl_hyrs_linjia!=undefined&&
								current.storage.ljyhsl_hyrs_linjia.length>=2;
							})>0&&!player.hasSkill('ljyhsl_hyrs_linjia');
						},
						filterTarget:function(card,player,target){
							return target.storage.ljyhsl_hyrs_linjia!=undefined&&
							target.storage.ljyhsl_hyrs_linjia.length>=2;
						},
						content:function(){
							'step 0'
							player.chooseControl(['摸两张牌','对一名拥有【鳞甲】的角色造成一点火焰伤害']).set('ai',function(event){
								var pl;
								for(var i=0;i<game.players.length;i++){
									if(game.players[i].hasSkill('ljyhsl_hyrs_linjia')) pl=game.players[i];
								};
								if(get.attitude(player,pl)>=0) return '摸两张牌';
								return '对一名拥有【鳞甲】的角色造成一点火焰伤害';
							});
							'step 1'
							var cards=target.storage.ljyhsl_hyrs_linjia;
							target.discard(game.createCard(cards[0]));
							target.discard(game.createCard(cards[1]));
							cards.remove(cards[0]);
							cards.remove(cards[0]);
							target.syncStorage('ljyhsl_hyrs_linjia');
							if(cards.length<=0){
								target.unmarkSkill('ljyhsl_hyrs_linjia');
								delete target.storage.ljyhsl_hyrs_linjia;
							};
							if(result.control=='摸两张牌') player.draw(2);
							if(result.control=='对一名拥有【鳞甲】的角色造成一点火焰伤害'){
								var pl;
								for(var i=0;i<game.players.length;i++){
									if(game.players[i].hasSkill('ljyhsl_hyrs_linjia')) pl=game.players[i];
								};
								player.line(pl,'fire');
								pl.damage(1,'fire');
							};
						},
						ai:{
							order:12,
							result:{
								player:1,
							},
						},
					},
					"ljyhsl_hyrs_mangli":{
						enable:'phaseUse',
						filter:function(event,player){
							return game.countPlayer(function(current){
								return current.storage.ljyhsl_hyrs_linjia!=undefined;
							})>0;
						},
						filterCard:true,
						selectCard:2,
						filterTarget:function(card,player,target){
							return target.storage.ljyhsl_hyrs_linjia!=undefined;
						},
						content:function(){
							var cards=target.storage.ljyhsl_hyrs_linjia;
							target.discard(game.createCard(cards[0]));
							cards.remove(cards[0]);
							target.syncStorage('ljyhsl_hyrs_linjia');
							if(cards.length<=0){
								target.unmarkSkill('ljyhsl_hyrs_linjia');
								delete target.storage.ljyhsl_hyrs_linjia;
							};
						},
					},
					"ljyhsl_hyrs_zhenzhong":{
						enable:'phaseUse',
						usable:1,
						filterTarget:function(card,player,target){
							return target.maxHp>target.countCards('h');
						},
						content:function(){
							player.loseHp();
							var num=target.maxHp-target.countCards('h');
							if(num>5) num=5;
							target.draw(num);
						},
						ai:{
							order:11,
							result:{
								target:function(target,player){
									if(player.maxHp-player.hp<2&&
									target.maxHp-target.countCards('h')>=2&&
									get.attitude(player,target)>0) return 1;
									return ;
								},
							},
						},
					},
					"ljyhsl_hyrs_sijie":{
						enable:'phaseUse',
						usable:1,
						filterCard:true,
						selectCard:[2,Infinity],
						check:function(card){
							return 6-get.value(card);
						},
						filterTarget:function(card,player,target){
							return target!=player;
						},
						content:function(){
							target.chooseToDiscard(cards.length-1,'h',true);
						},
						ai:{
							order:12,
							result:{
								target:function(target,player){
									if(player.countCards('h')>2&&target.countCards('h')>=2&&get.attitude(player,target)<0) return -1;
									return ;
								},
							},
						},
					},
					"ljyhsl_hyrs_guoye":{
						unique:true,
						global:'ljyhsl_hyrs_guoye1',
						zhuSkill:true,
					},
					"ljyhsl_hyrs_guoye1":{
						enable:'phaseUse',
						usable:1,
						filter:function(event,player){
							if(player.group!='shu') return false;
							return game.hasPlayer(function(target){
								return target!=player&&target.hasZhuSkill('ljyhsl_hyrs_guoye',player)&&target.maxHp>target.hp;
							});
						},
						filterTarget:function(card,player,target){
							return target!=player&&target.hasZhuSkill('ljyhsl_hyrs_guoye',player);
						},
						content:function(){
							player.loseHp();
							target.recover();
						},
						ai:{
							order:10,
							result:{
								target:function(player,target){
									if(get.attitude(player.target)>0&&player.hp>2) return 4;
									return ;
								},
							},
						},
					},
					"ljyhsl_hyrs_haolie":{
						trigger:{
							global:'damageAfter'
						},
						filter:function(event,player){
							return event.card&&event.card.name=='sha'&&event.source&&_status.currentPhase==event.source;
						},
						check:function(event,player){
							if(event.source==undefined) return false;
							return (player.countCards('h')>2&&get.attitude(player,event.source)<0)||
							(player.countCards('h')<=2&&get.attitude(player,event.source)>=0);
						},
						content:function(){
							player.draw();
							trigger.source.draw();
							var evt=_status.event;
							for(var i=0;i<10;i++){
								if(evt&&evt.getParent) evt=evt.getParent();
								if(evt.name=='phaseUse'){
									evt.skipped=true;
									break;
								};
							};
						},
					},
					"ljyhsl_hyrs_yangzhan":{
						enable:'phaseUse',
						filterCard:true,
						selectCard:1,
						check:function(card){
							return 6-get.value(card);
						},
						filterTarget:function(card,player,target){
							return target!=player&&target.countCards('j')>0;
						},
						content:function(){
							'step 0'
							player.gainPlayerCard(1,'j',target,true);
							'step 1'
							if(result.bool) player.useCard(result.cards[0],player);
							player.addTempSkill('ljyhsl_hyrs_yangzhan1',{player:'phaseAfter'});
						},
						ai:{
							order:7,
							result:{
								target:function(target,player){
									if(player.countCards('h')>1&&target.countCards('j')>0&&get.attitude(player,target)>0) return 1;
									return ;
								},
							},
						},
					},
					"ljyhsl_hyrs_yangzhan1":{
						trigger:{
							player:'phaseEnd'
						},
						content:function(){
							player.phaseJudge();
						},
					},
					"ljyhsl_hyrs_longkui":{
						trigger:{
							player:'phaseDrawBegin'
						},
						filter:function(event,player){
							return player.maxHp>player.hp;
						},
						check:function(event,player){
							var num=player.maxHp-player.hp;
							return num>=2&&player.countCards('h')<10;
							/*&&player.countCards('h')+num<=player.getHandcardLimit();*/
						},
						content:function(){
							player.skip('phaseUse');
							player.skip('phaseDiscard');
							player.draw(player.maxHp-player.hp);
						},
					},
					"ljyhsl_hyrs_sheqi":{
						trigger:{
							player:'dieBegin'
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseTarget(get.prompt('ljyhsl_hyrs_sheqi'),1,function(card,player,target){
								return target!=player;
							},true).ai=function(target){
								if(!target.hasSkill('feiying')) return get.attitude(player,target);
							};
							'step 1'
							if(result.bool){
								player.logSkill('ljyhsl_hyrs_sheqi');
								player.line(result.targets[0]);
								result.targets[0].addSkill('feiying');
								game.log(result.targets[0],'获得技能【飞影】');
							}else{
								event.finish();
							};
						},
					},
					"ljyhsl_hyrs_yide":{
						enable:'phaseUse',
						usable:1,
						content:function(){
							'step 0'
							player.chooseControl(['失去一点体力，令所有其他角色弃一张牌','回复一点体力，令所有其他角色摸一张牌']).set('ai',function(event){
								if(player.maxHp>player.hp) return '回复一点体力，令所有其他角色摸一张牌';
								return '失去一点体力，令所有其他角色弃一张牌';
							});
							'step 1'
							if(result.control=='失去一点体力，令所有其他角色弃一张牌'){
								player.loseHp();
							}else{
								player.recover();
							};
							for(var i=0;i<game.players.length;i++){
								if(game.players[i]!=player){
									player.line(game.players[i]);
									if(result.control=='失去一点体力，令所有其他角色弃一张牌'){
										game.players[i].chooseToDiscard(1,'he',true);
									}else{
										game.players[i].draw();
									};
								};
							};
						},
						ai:{
							order:1,
							result:{
								player:function(player){
									if(player.maxHp>player.hp) return 1;
									return ;
								},
							},
						},
					},
					"ljyhsl_hyrs_qingxin":{
						trigger:{
							player:'phaseDrawBegin'
						},
						check:function(event,player){
							return player.countCards('j')>0
						},
						content:function(){
							trigger.num--;
							player.addTempSkill('ljyhsl_hyrs_qingxin1',{player:'phaseAfter'});
						},
					},
					"ljyhsl_hyrs_qingxin1":{
						trigger:{
							player:'phaseEnd'
						},
						forced:true,
						popup:false,
						content:function(){
							player.draw();
						},
					},
					"ljyhsl_hyrs_hanwei":{
						trigger:{
							player:'phaseBegin'
						},
						frequent:true,
						content:function(){
							'step 0'
							event.num=player.maxHp-player.hp+2;
							event.cards=get.cards(event.num);
							event.chosen=[];
							if(player.countCards('he')==0) event.goto(4);
							'step 1'
							player.chooseCardButton('【捍卫】:请选择需要替换的牌',event.cards,[0,player.countCards('he')]).ai=function(button){
								return get.value(button.link)-5;
							};
							'step 2'
							if(result.bool){
								event.cards1=result.links;
								player.chooseCard(event.cards1.length,'he',true).set('ai',function(card){
									return 1;
    							});
							}else{
								event.goto(4);
							};
							'step 3'
							if(result.bool){
								var cards=result.cards;
								var cards1=[];
								var cards2=[];
								for(var i=0;i<event.cards1.length;i++){
									var card=event.cards1[i];
									cards1.push(card);
									event.cards.remove(event.cards1[i]);
								};
								player.gain(cards1);
								for(var i=0;i<cards.length;i++){
									var card1=cards[i];
									cards2.push(card1);
									event.cards.add(game.createCard(cards[i]));
								};
								player.lose(cards2,ui.special);
							};
							'step 4'
							var js=player.getCards('j');
							var pos;
							var choice=-1;
							var getval=function(card,pos){
								if(js[pos]){
									return (get.judge(js[pos]))(card);
								}else{
									return get.value(card);
								};
							};
							for(pos=0;pos<Math.min(event.cards.length,js.length+2);pos++){
								var max=getval(event.cards[pos],pos);
								for(var j=pos+1;j<event.cards.length;j++){
									var current=getval(event.cards[j],pos);
									if(current>max){
										choice=j;
										max=current;
									};
								};
								if(choice!=-1) break;
							};
							player.chooseCardButton('【捍卫】:选择要移动的牌（还能移动'+event.num+'张）',event.cards).set('filterButton',function(button){
								return !_status.event.chosen.contains(button.link);
							}).set('chosen',event.chosen).set('ai',function(button){
								return button.link==_status.event.choice?1:0;
							}).set('choice',event.cards[choice]);
							event.pos=pos;
							'step 5'
							if(result.bool){
								var card=result.links[0];
								var index=event.cards.indexOf(card);
								event.card=card;
								event.chosen.push(card);
								event.cards.remove(event.card);
								var buttons=event.cards.slice(0);
								player.chooseControl(function(){
									return _status.event.controlai;
								}).set('controlai',event.pos||0).set('sortcard',buttons).set('tosort',card);
							}else{
								event.goto(7);
							}
							'step 6'
							if(typeof result.index=='number'){
								if(result.index>event.cards.length){
									ui.cardPile.appendChild(event.card);
								}else{
									event.cards.splice(result.index,0,event.card);
								};
								event.num--;
								if(event.num>0) event.goto(4);
							};
							'step 7'
							while(event.cards.length){
								ui.cardPile.insertBefore(event.cards.pop(),ui.cardPile.firstChild);
							};
						},
					},
					"ljyhsl_hyrs_fengdao":{
						trigger:{
							global:'damageAfter'
						},
						direct:true,
						filter:function(event,player){
							return event.card&&
							(event.card.name=='sha'||event.card.name=='juedou')&&
							get.distance(player,event.player,'attack')<=1;
						},
						content:function(){
							'step 0'
							player.chooseCard(get.prompt('ljyhsl_hyrs_fengdao'),1,'h').set('ai',function(card){
								if((trigger.source&&
								trigger.source.countCards('he')>=2&&
								get.attitude(player,trigger.source)<0&&
								get.type(card)!='basic')||
								(get.attitude(player,trigger.player)>0&&
								trigger.player.isTurnedOver()&&
								get.type(card)=='basic')||
								(get.attitude(player,trigger.player)<0&&
								trigger.player.hp<=1&&
								!trigger.player.isTurnedOver()&&
								get.type(card)=='basic')) return 6-get.value(card);
								return -1;
    						});
							'step 1'
							if(result.bool){
								player.logSkill('ljyhsl_hyrs_fengdao');
								var card=result.cards[0];
								player.discard(card);
								if(get.type(card)=='basic'){
									trigger.player.draw(trigger.player.hp);
									trigger.player.turnOver();
								}else{
									if(trigger.source) trigger.source.chooseToDiscard(2,'he',true);
								};
							}else{
								event.finish();
							};
						},
					},
					"ljyhsl_hyrs_xunyou":{
						trigger:{
							target:'shaBegin'
						},
						direct:true,
						filter:function(event,player){
							return player.countCards('h')>0;
						},
						content:function(){
							'step 0'
							player.chooseCard(get.prompt('ljyhsl_hyrs_xunyou'),1,'h').set('ai',function(card){
								return 1;
    						});
							'step 1'
							if(result.bool){
								player.logSkill('ljyhsl_hyrs_xunyou');
								var card=result.cards[0];
								player.showCards(card);
								trigger.player.chooseCard(1,'h',{color:get.color(card)}).set('ai',function(card){
									if(get.attitude(trigger.player,player)>0) return -1;
									return 1;
    							});
							}else{
								event.finish();
							};
							'step 2'
							if(result.bool){
								var card=result.cards[0];
								trigger.player.discard(card);
							}else{
								trigger.cancel();
							};
						},
					},
					"ljyhsl_hyrs_yuanhang":{
						mod:{
							globalFrom:function(from,to,distance){
								return -1;
							},
						},
					},
					"ljyhsl_hyrs_mengzhi":{
						trigger:{
							global:'phaseBegin'
						},
						direct:true,
						filter:function(event,player){
							return event.player!=player;
						},
						content:function(){
							'step 0'
							player.chooseCard(get.prompt('ljyhsl_hyrs_mengzhi'),1,'h').set('ai',function(card){
								if(player.countCards('h')>1&&
								get.attitude(player,trigger.player)<0&&
								get.distance(trigger.player,player,'attack')<=1) return 5-get.value(card);
								return -1;
    						});
							'step 1'
							if(result.bool){
								player.logSkill('ljyhsl_hyrs_mengzhi');
								event.card=result.cards[0];
								player.showCards(event.card);
								player.judge(function(card){
									return 0.5;
								});
							}else{
								event.finish();
							};
							'step 2'
							if(get.color(result.card)==get.color(event.card)){
								player.discard(event.card);
								trigger.player.addTempSkill('ljyhsl_hyrs_mengzhi1',{player:'phaseAfter'});
							};
						},
					},
					"ljyhsl_hyrs_mengzhi1":{
						mod:{
							globalFrom:function(from,to,distance){
								if(to.hasSkill('ljyhsl_hyrs_mengzhi')) return Infinity;
								return distance;
							},
						},
					},
					"ljyhsl_hyrs_zhanhun":{
						group:["ljyhsl_hyrs_zhanhun_gainMaxHp","ljyhsl_hyrs_zhanhun_changeHp"],
						subSkill:{
							"gainMaxHp":{
								trigger:{
									global:'gameStart'
								},
								forced:true,
								content:function(){
									player.maxHp=8;
									player.hp=4;
									player.update();
								},
							},
							"changeHp":{
								trigger:{
									player:'phaseEnd'
								},
								forced:true,
								priority:Infinity,
								filter:function(event,player){
									return player.maxHp>player.hp;
								},
								content:function(){
									player.hp=player.maxHp-player.hp;
									player.update();
								},
							},
						},
					},
					"ljyhsl_lyb_duanjiao":{
						trigger:{
							player:'recoverAfter'
						},
						filter:function(event,player){
							return event.source&&event.source!=player&&event.source.countCards('he')>0;
						},
						check:function(event,player){
							return player.hp<player.maxHp;
						},
						content:function(){
							player.discardPlayerCard(1,'he',trigger.source,true);
							player.recover();
						},
					},
					"ljyhsl_lyb_juediao":{
						trigger:{
							player:'damageAfter'
						},
						filter:function(event,player){
							return event.source;
						},
						forced:true,
						/*check:function(event,player){
							return event.source&&get.attitude(player,event.source)<0;
						},*/
						content:function(){
							'step 0'
							var N=[1,2,3,4,5,6,7,8,9,10].randomGet();
							trigger.source.chooseCard('请弃置一张点数为'+(N*(player.maxHp-player.hp+1))+'的牌','he',1,function(card,player,target){
								return get.number(card)==N*(player.maxHp-player.hp+1);
							}).set('ai',function(card){
								return 1;
							});
							'step 1'
							if(result.bool){
								trigger.source.discard(result.cards[0]);
							}else{
								trigger.source.loseHp();
							};
						},
					},
					"ljyhsl_lyb_shizhi":{
						trigger:{
							target:'shaBegin',
						},
						filter:function(event,player){
							return event.player.countCards('h')==0;
						},
						forced:true,
						content:function(){
							if(typeof trigger.shanRequired=='number'){
								trigger.shanRequired++;
							}else{
								trigger.shanRequired=2;
							};
							player.addTempSkill('ljyhsl_lyb_shizhi1',{target:'shaAfter'});
						},
					},
					"ljyhsl_lyb_shizhi1":{
						trigger:{
							player:'damageEnd',
						},
						forced:true,
						popup:false,
						content:function(){
							player.loseMaxHp();
						},
					},
					"ljyhsl_lyb_shiquan":{
						trigger:{
							source:'damageAfter',
						},
						forced:true,
						filter:function(event,player){
							return event.card&&event.card.name=='sha'&&player.maxHp-player.hp>0;
						},
						content:function(){
							player.draw(player.maxHp-player.hp);
						},
					},
					"ljyhsl_lyb_wudian":{
						skillAnimation:true,
						unique:true,
						trigger:{
							player:'phaseBegin'
						},
						forced:true,
						filter:function(event,player){
							return player.countCards('h')>player.hp&&!player.storage.ljyhsl_lyb_wudian;
						},
						/*check:function(event,player){
							return player.maxHp-player.hp>=2;
						},*/
						//derivation:'ljyhsl_lyb_tuodao',
						content:function(){
							player.loseMaxHp();
							player.recover(2);
							player.addSkill('ljyhsl_lyb_tuodao');
							player.storage.ljyhsl_lyb_wudian=true;
							player.awakenSkill('ljyhsl_lyb_wudian');
						},
					},
					"ljyhsl_lyb_tuodao":{
						trigger:{
							player:"chooseToRespondAfter",
						},
						direct:true,
						filter:function(event,player){
							return event.result!=undefined&&
							event.result.bool==true&&
							event.filterCard({name:'shan'})&&
							_status.currentPhase!=player&&
							event.source&&
							get.distance(player,event.source,'attack')<=1;
						},
						content:function(){
							'step 0'
							player.addSkill('ljyhsl_lyb_tuodao1');
							'step 1'
							player.chooseToUse(get.prompt('ljyhsl_lyb_tuodao'),{name:'sha'},event.source,-1);
							'step 2'
							player.removeSkill('ljyhsl_lyb_tuodao1');
						},
					},
					"ljyhsl_lyb_tuodao1":{
						ai:{
							unequip:true,
							skillTagFilter:function (player,tag,arg){
								if(arg&&arg.name=='sha') return true;
								return false;
							},
						},
						trigger:{
							player:'shaBegin'
						},
						forced:true,
						popup:false,
						content:function(){
							trigger.directHit=true;
						},
					},
					"ljyhsl_lyb_luanhuan":{
						trigger:{
							global:"shaMiss",
						},
						filter:function(event,player){
							return player.countCards('he')>=2;
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseToDiscard(get.prompt('ljyhsl_lyb_luanhuan'),'he',2).set('ai',function(card){
								if(get.attitude(player,trigger.targets[0])<0) return 6-get.value(card);
								return 0;
							});
							'step 1'
							if(result.bool){
								player.logSkill('ljyhsl_lyb_luanhuan');
								trigger.player.line(trigger.targets[0]);
								trigger.targets[0].damage().source=trigger.player;
							}else{
								event.finish();
							};
						},
					},
					"ljyhsl_lyb_qingjun":{
						trigger:{
							player:"dieBegin",
						},
						forced:true,
						content:function(){
							'step 0'
							event.pl=_status.currentPhase;
							event.pl.judge(function(card){
								if(get.suit(card)!='heart') return -2;
								return 2;
							});
							'step 1'
							if(get.suit(result.card)!='heart'){
								event.pl.loseMaxHp();
								event.pl.loseHp();
							}else{
								event.pl.recover();
							};
						},
					},
					"ljyhsl_lyb_shuhuo":{
						init:function(player){
							player.storage.ljyhsl_lyb_shuhuo=[];
						},
						mod:{
							globalFrom:function(from,to,distance){
								return distance-from.storage.ljyhsl_lyb_shuhuo.length*2;
							},
						},
						intro:{
							content:'cards'
						},
						marktext:'黩',
						mark:true,
						trigger:{
							source:"damageEnd",
						},
						direct:true,
						content:function(){
							'step 0'
							player.chooseCard(get.prompt('ljyhsl_lyb_shuhuo'),1,'he').set('ai',function(card){
								if(player.storage.ljyhsl_lyb_shuhuo.length<3) return 5-get.value(card);
    						});
							'step 1'
							if(result.bool){
								player.logSkill('ljyhsl_lyb_shuhuo');
								player.storage.ljyhsl_lyb_shuhuo.push(result.cards[0]);
								player.lose(result.cards[0],ui.special);
								game.log(player,'将',lib.translate[result.cards[0].name],'放在武将牌上');
							}else{
								event.finish();
							};
						},
					},
					"ljyhsl_lyb_zhijiang":{
						skillAnimation:true,
						unique:true,
						trigger:{
							player:'phaseBegin'
						},
						forced:true,
						filter:function(event,player){
							return !player.storage.ljyhsl_lyb_zhijiang&&player.storage.ljyhsl_lyb_shuhuo.length>=3;
						},
						content:function(){
							player.loseMaxHp();
							player.addSkill('ljyhsl_lyb_yeshuai');
							player.storage.ljyhsl_lyb_zhijiang=true;
							player.awakenSkill('ljyhsl_lyb_zhijiang');
						},
					},
					"ljyhsl_lyb_yeshuai":{
						group:["ljyhsl_lyb_yeshuai_to","ljyhsl_lyb_yeshuai_from"],
						subSkill:{
							"to":{
								trigger:{
									player:"shaBegin",
								},
								check:function(event,player){
									return get.attitude(player,event.targets[0])<=0;
								},
								content:function(){
									player.draw();
									trigger.targets[0].chooseToDiscard(1,'he',true);
								},
							},
							"from":{
								trigger:{
									target:"shaBegin",
								},
								check:function(event,player){
									return get.attitude(player,event.player)<=0;
								},
								content:function(){
									player.draw();
									trigger.player.chooseToDiscard(1,'he',true);
								},
							},
						},
					},
					"ljyhsl_lyb_fuwu":{
						enable:'phaseUse',
						usable:1,
						filterTarget:true,
						selectTarget:function(){
							var pl=_status.event.player;
							return [1,pl.maxHp-pl.hp+1];
						},
						content:function(){
							target.draw(2);
							target.chooseToDiscard(2,'he',true);
						},
						ai:{
							order:13,
							result:{
								target:1,
							},
						},
					},
					"ljyhsl_lyb_xuzi":{
						trigger:{
							player:'phaseDrawBegin'
						},
						direct:true,
						content:function(){
							"step 0"
							player.chooseTarget(get.prompt('ljyhsl_lyb_xuzi'),1,function(card,player,target){
								return target!=player;
							}).ai=function(target){
								if(target.countCards('h')>0) return get.attitude(player,target);
							};
							"step 1"
							if(result.bool){
								player.logSkill('ljyhsl_lyb_xuzi');
								event.target=result.targets[0];
								event.target.draw();
								event.target.chooseCard(1,'h',true);
							}else{
								event.finish();
							};
							"step 2"
							if(result.bool){
								event.target.$give(result.cards[0],player);
								event.target.line(player);
								player.gain(result.cards[0],event.target);
							}else{
								event.finish();
							};
						},
					},
					"ljyhsl_lyb_zexu":{
						enable:'phaseUse',
						usable:1,
						discard:false,
						prepare:function(cards,player,targets){
							player.$give(cards,targets[0],false);
						},
						filterCard:function(card){
							return get.type(card)=='basic'||get.type(card)=='equip';
						},
						check:function(card){
							var player=_status.currentPhase;
							if(player.countCards('he',{subtype:get.subtype(card)})>1) return 11-get.equipValue(card);
							return 6-get.value(card);
						},
						filterTarget:function(card,player,target){
							return player!=target&&!target.getEquip(card);
						},
						content:function(){
							if(get.type(cards[0])=='equip') target.equip(cards[0]);
							if(get.type(cards[0])=='basic') target.gain(cards[0],'gain2');
							player.draw(2);
						},
						ai:{
							order:9,
							result:{
								target:1,
							},
						},
					},
					"ljyhsl_lyb_dushi":{
						trigger:{
							global:'loseAfter'
						},
						filter:function(event,player){
							return event.player.countCards('h')==0&&
							(event.player.countCards('he')>0||(event.player.maxHp>event.player.hp&&player.countCards('he')>0));
						},
						content:function(){
							"step 0"
							var list=[];
							if(trigger.player.maxHp>trigger.player.hp&&player.countCards('he')>0) list.push('弃一张牌，令其回复一点体力');
							if(trigger.player.countCards('he')>0) list.push('弃置其一张牌');
							list.push('cancel2');
							player.chooseControl(list).set('ai',function(event){
								if(get.attitude(player,trigger.player)>0){
									if(trigger.player.countCards('j')>0) return '弃置其一张牌';
									if(player.countCards('he')>0) return '弃一张牌，令其回复一点体力';
									return 'cancel2';
								};
								return '弃置其一张牌';
							}).set('prompt','【度势】:请选择一项');
							"step 1"
							if(result.control=='弃一张牌，令其回复一点体力'){
								player.chooseToDiscard(1,'he',true);
								trigger.player.recover();
							};
							if(result.control=='弃置其一张牌') player.discardPlayerCard(1,trigger.player,'hej');
						},
					},
					"ljyhsl_lyb_chiji":{
						trigger:{
							player:'damageAfter'
						},
						filter:function(event,player){
							return event.source;
						},
						check:function(event,player){
							return event.source&&get.attitude(player,event.source)<=0;
						},
						content:function(){
							player.useCard({name:'sha',nature:'thunder',skill:'ljyhsl_lyb_chiji'},trigger.source);
						},
					},
					"_ljyhsl_lyb_chiji":{
						trigger:{
							source:'damageEnd'
						},
						forced:true,
						filter:function(event,player){
							return event.card&&event.card.skill=='ljyhsl_lyb_chiji';
						},
						content:function(){
							player.draw();
						},
					},
				},
				translate:{
					"ljyhsl_drlz_chendao":"陈到",
					"ljyhsl_drlz_baier":"白耳",
					"ljyhsl_drlz_baier_info":"摸牌阶段，你可以放弃摸牌，改为令一名其他角色进行一个额外的摸牌阶段，然后视为该角色对你指定的另一名其他角色使用一张【杀】",
					"ljyhsl_drlz_zhoucang":"周仓",
					"ljyhsl_drlz_yanju":"艳锯",
					"ljyhsl_drlz_yanju_info":"你的回合外，其他角色使用的【杀】结算完毕后，你可以对该角色使用一张无视距离的【杀】，若该角色使用的【杀】为红色，你可以摸一张牌",
					"ljyhsl_drlz_xiangchong":"向宠",
					"ljyhsl_drlz_longmen":"龙门",
					"ljyhsl_drlz_longmen_info":"每当其他角色在你的回合内失去一张牌时，你可以进行一次判定，若为红色则该角色须弃一张牌",
					"ljyhsl_drlz_zaizheng":"再征",
					"ljyhsl_drlz_zaizheng_info":"锁定技，当其他角色在你的回合内失去的牌总数为十张或更多，你进行一个额外的回合",
					"ljyhsl_drlz_sunhao":"孙皓",
					"ljyhsl_drlz_baodao":"暴道",
					"ljyhsl_drlz_baodao_info":"当你使用基本牌时，你可以摸一张牌",
					"ljyhsl_drlz_luzheng":"戮政",
					"ljyhsl_drlz_luzheng_info":"觉醒技，出牌阶段开始时，若你的手牌数少于当前体力值，你须减少一点体力上限然后摸两张牌，获得技能“残戮”（当你造成一次伤害后，你可以弃置目标角色一张牌或摸一张牌）",
					"ljyhsl_drlz_canglu":"残戮",
					"ljyhsl_drlz_canglu_info":"当你造成一次伤害后，你可以弃置目标角色一张牌或摸一张牌",
					"ljyhsl_drlz_shichun":"嗜醇",
					"ljyhsl_drlz_shichun_info":"主公技，当你需要使用一张【酒】时，其它吴势力角色可以弃置一张武器牌，视为你使用了一张【酒】，每轮限一次",
					"ljyhsl_drlz_jiangqin":"蒋钦",
					"ljyhsl_drlz_taoni":"讨逆",
					"ljyhsl_drlz_taoni_info":"当你使用的【杀】被闪避后，若目标角色装备区内没有牌，你可以摸一张牌，否则你可以移动场上的一张牌",
					"ljyhsl_drlz_chenwu":"陈武",
					"ljyhsl_drlz_yongzhan":"勇战",
					"ljyhsl_drlz_yongzhan_info":"当你没有手牌时，你可以将装备区里的一张牌当作【杀】、【闪】或【桃】使用或打出",
					"ljyhsl_drlz_renhou":"仁厚",
					"ljyhsl_drlz_renhou_info":"当你造成伤害时，你可以防止此伤害改为得到目标角色装备区里一张牌或交给其一张装备牌并可以令其装备之",
					"ljyhsl_drlz_caozhen":"曹真",
					"ljyhsl_drlz_zhiyong":"鸷勇",
					"ljyhsl_drlz_zhiyong_info":"出牌阶段限一次，若你的武将牌正面朝上，你可以翻面，然后你对至多X名在你攻击范围之内的其他角色各造成一点伤害（X为你已损失的体力值）",
					"ljyhsl_drlz_xingdaorong":"刑道荣",
					"ljyhsl_drlz_kuizhan":"溃战",
					"ljyhsl_drlz_kuizhan_info":"你每受到一次伤害后，你可以进行一次判定，若为红桃，则你再受到伤害来源造成的一点伤害，否则你可以指定任意一名角色立即执行一个你指定的额外的阶段（弃牌阶段除外）",
					"ljyhsl_drlz_gousheng":"苟生",
					"ljyhsl_drlz_gousheng_info":"任意角色的回合内，若你受到2点或更多伤害，则在该回合结束阶段你可令当前回合角色选择：你回复一点体力或交给你一张红色手牌",
					"ljyhsl_drlz_wangshuang":"王双",
					"ljyhsl_drlz_siji":"肆击",
					"ljyhsl_drlz_siji_info":"当你使用的【杀】被闪避后，你可以再对目标角色使用一张【杀】，直到造成伤害或你不使用为止，若造成了伤害，你可以弃置目标角色一张牌，若全被闪避，目标角色可以弃置一张基本牌并对你造成一点伤害",
					"ljyhsl_drlz_lijueguosi":"李傕郭汜",
					"ljyhsl_drlz_luanguo":"乱国",
					"ljyhsl_drlz_luanguo_info":"出牌阶段限一次，你可以将三张不同类别的牌当做一个“炸弹”使用，使所有体力少于你的角色受到你造成的一点伤害，结算完毕后你失去一点体力",
					"ljyhsl_drlz_fuzheng":"腐政",
					"ljyhsl_drlz_fuzheng_info":"锁定技，回合结束阶段开始时，若你已损失的体力≥2，则你须回复一点体力并减少一点体力上限",
					"ljyhsl_drlz_canluan":"残乱",
					"ljyhsl_drlz_canluan_info":"锁定技，回合结束阶段，若你的体力在(0,3]U[7,8]内，你须失去一点体力或减少一点体力上限",
					"ljyhsl_drlz_quyi":"麴义",
					"ljyhsl_drlz_xiandeng1":"先登",
					"ljyhsl_drlz_xiandeng":"先登",
					"ljyhsl_drlz_xiandeng_info":"摸牌阶段，你可以放弃摸牌，改为亮出牌堆顶一张牌并获得之，若为黑色，则你可以弃置这张牌并视为对一名其他角色使用一张没有距离限制且不计入回合使用次数的【杀】，若为红色，则该回合内，你与其他所有角色距离皆为1",
					"ljyhsl_drlz_jiaozi":"骄恣",
					"ljyhsl_drlz_jiaozi_info":"每当你闪避【杀】后，你可以摸两张牌并令此【杀】的使用者摸一张牌",
					"ljyhsl_drlz_hansui":"韩遂",
					"ljyhsl_drlz_yimou1":"夷谋",
					"ljyhsl_drlz_yimou":"夷谋",
					"ljyhsl_drlz_yimou_info":"出牌阶段对每名角色限一次，你可令与你距离为1的一名角色亮出一张手牌然后其展示你的一张手牌，若花色相同则目标角色获得该牌，否则该回合内你可以将黑桃手牌当【过河拆桥】、草花手牌当【火攻】、红桃手牌当【顺手牵羊】，方块手牌当【决斗】使用",
					"ljyhsl_lrfj_wangping":"王平",
					"ljyhsl_lrfj_wudang":"无当",
					"ljyhsl_lrfj_wudang_info":"当你使用的【杀】造成了伤害且结算完毕后，你可以弃置一张基本牌，然后对目标造成一点伤害",
					"ljyhsl_lrfj_feijun2":"飞军",
					"ljyhsl_lrfj_feijun1":"飞军",
					"ljyhsl_lrfj_feijun":"飞军",
					"ljyhsl_lrfj_feijun_info":"锁定技，你的【南蛮入侵】皆视为【杀】；以此法使用的【杀】无视距离与防具；若以此法造成了伤害，目标须弃置其装备区内所有的牌",
					"ljyhsl_lrfj_shamoke":"沙摩柯",
					"ljyhsl_lrfj_manshi":"蛮矢",
					"ljyhsl_lrfj_manshi_info":"回合结束阶段，你可以与一名其他角色进行拼点，若你赢，则你对其造成一点伤害",
					"ljyhsl_lrfj_mayunlu":"马云騄",
					"ljyhsl_lrfj_longji":"龙姬",
					"ljyhsl_lrfj_longji_info":"出牌阶段限一次，你可以交给一名其他角色一张【杀】，该角色选择一项：视为对一名角色使用了一张【杀】；令你回复一点体力",
					"ljyhsl_lrfj_chuoyue":"绰约",
					"ljyhsl_lrfj_chuoyue_info":"当其他角色使用【杀】指定你为目标后，你可以弃一张牌，令其选择一项：此【杀】造成的伤害-1；或在此【杀】结算后令你指定除其之外一名角色对其使用一张【杀】，若指定角色没有对其使用【杀】，则你摸两张牌",
					"ljyhsl_lrfj_caorui":"曹睿",
					"ljyhsl_lrfj_mingyu2":"明御",
					"ljyhsl_lrfj_mingyu1":"明御",
					"ljyhsl_lrfj_mingyu":"明御",
					"ljyhsl_lrfj_mingyu_info":"摸牌阶段结束前，你可以展示并交给一名其他角色一张你所摸的牌，该角色不能使用或打出与该牌颜色相同的牌直到其回合结束",
					"ljyhsl_lrfj_yingjing":"莹镜",
					"ljyhsl_lrfj_yingjing_info":"你每受到一次伤害后，你可令一名其他角色回复一点体力或摸X张牌（X为该角色当前体力值），或令一名背面向上的武将翻至正面，然后你摸一张牌",
					"ljyhsl_lrfj_dizong":"帝纵",
					"ljyhsl_lrfj_dizong_info":"主公技，其它魏势力角色每受到一次伤害后可令你摸一张牌",
					"ljyhsl_lrfj_caochun":"曹纯",
					"ljyhsl_lrfj_huqi":"虎骑",
					"ljyhsl_lrfj_huqi_info":"当你对距离为1的角色使用【杀】造成了伤害后，你可以弃置一张手牌执行以下效果：基本牌：使该【杀】不计入回合使用限制；装备牌：你可令目标角色弃置至多X张牌，X为目标角色当前的体力值且至多为2；锦囊牌：该伤害+1",
					"ljyhsl_lrfj_chengyu":"程昱",
					"ljyhsl_lrfj_quanli":"权立",
					"ljyhsl_lrfj_quanli_info":"出牌阶段限一次，你可以交给一名其他角色一张非延时类锦囊牌，若该锦囊所能指定的目标仅为1个，则你可以视为该角色立即对一名你指定的角色使用该锦囊牌",
					"ljyhsl_lrfj_zhiyong":"智勇",
					"ljyhsl_lrfj_zhiyong_info":"每当你受到一次伤害后，你可以观看牌堆顶三张牌，然后选择一项：1.亮出其中的非基本牌并获得之；2.你得到其中的一张牌，然后伤害来源弃置你一张牌，最后你将剩下的两张牌当【杀】对伤害来源使用",
					"ljyhsl_lrfj_sunhuan":"孙桓",
					"ljyhsl_lrfj_haoao":"豪傲",
					"ljyhsl_lrfj_haoao_info":"任意角色的回合结束阶段，你可以摸X张牌。X为该回合内你造成和受到的伤害之和且最多为2",
					"ljyhsl_lrfj_dongxi":"董袭",
					"ljyhsl_lrfj_duanxie":"断绁",
					"ljyhsl_lrfj_duanxie_info":"当你失去装备区内的牌时，你可以将场上一张同类别的装备区内的牌置于你的装备区内",
					"ljyhsl_lrfj_youhun":"游魂",
					"ljyhsl_lrfj_youhun_info":"限定技，出牌阶段，你可以令一名其他角色回复两点体力并摸三张牌，然后你立即死亡",
					"ljyhsl_lrfj_zhuhuan":"朱桓",
					"ljyhsl_lrfj_danju":"胆据",
					"ljyhsl_lrfj_danju_info":"当你成为【杀】的目标后，你可以二选一：1.弃两张牌，使该【杀】的目标转移给该【杀】的使用者； 2.你可以对该【杀】的使用者使用一张【杀】",
					"ljyhsl_lrfj_wangyue":"王越",
					"ljyhsl_lrfj_xiaji":"侠迹",
					"ljyhsl_lrfj_xiaji_info":"游戏开始时，你可以将牌堆中一张攻击范围为2的武器牌和【紫骍】置于你的装备区内",
					"ljyhsl_lrfj_longlie":"龙烈",
					"ljyhsl_lrfj_longlie_info":"出牌阶段限一次。你可以弃置X张手牌，对你攻击范围内的一名其他角色造成一点伤害（X为你当前的体力值）",
					"ljyhsl_lrfj_zhangsong":"张松",
					"ljyhsl_lrfj_sipan":"肆叛",
					"ljyhsl_lrfj_sipan_info":"当仅指定你为目标的【杀】或非延时类锦囊结算完毕后，你可以视为对你距离为2以内的一名角色（不能是你自己）使用该【杀】或锦囊",
					"ljyhsl_lrfj_zhiru":"智辱",
					"ljyhsl_lrfj_zhiru_info":"当你造成伤害时，你可以令该伤害-1，然后观看目标角色的手牌并弃置其中的一张",
					"ljyhsl_lrfj_zhangren":"张任",
					"ljyhsl_lrfj_weisha":"围杀",
					"ljyhsl_lrfj_weisha_info":"锁定技，你的回合内，因你造成伤害而进入濒死状态的角色，只能被【桃】救回，然后使用【桃】的角色须弃置一张红色牌，否则受到你造成的一点伤害（每次濒死只能触发一次）",
					"ljyhsl_lrfj_anshi":"暗矢",
					"ljyhsl_lrfj_anshi_info":"你的回合外，每当你使用或打出一张牌后，你可令一名其它角色弃置一张与该牌颜色相同的牌，否则你对其造成一点伤害,每两轮限一次",
					"ljyhsl_nzry_liyan":"李严",
					"ljyhsl_nzry_liangwu":"粮误",
					"ljyhsl_nzry_liangwu_info":"摸牌阶段，你可以放弃摸牌，改为获得场上的一张牌",
					"ljyhsl_nzry_wangquan":"妄权",
					"ljyhsl_nzry_wangquan_info":"回合开始阶段，若你体力值大于手牌数，则你可以与一名角色拼点，若你赢，则你摸两张牌，若你没赢，目标角色摸两张牌",
					"ljyhsl_nzry_yangyi":"杨仪",
					"ljyhsl_nzry_edao":"扼道",
					"ljyhsl_nzry_edao_info":"锁定技，其他角色与你计算距离时，始终+X（X为你已损失体力值且最多为2）",
					"ljyhsl_nzry_xiace":"狭策",
					"ljyhsl_nzry_xiace_info":"出牌阶段限一次。你可以弃置一张基本牌，令一名其他角色观看牌堆顶三张牌并以任意顺序放回，然后你随机抽取其中两张，若颜色相同则你获得之，否则该角色得到这两张牌并失去一点体力，然后你得到另一张牌",
					"ljyhsl_nzry_feiyi":"费祎",
					"ljyhsl_nzry_zhizhan":"止战",
					"ljyhsl_nzry_zhizhan_info":"出牌阶段限一次。你可以选择一项：①弃置两张基本牌；②将你的武将牌翻面，然后令一名其他角色也如此做",
					"ljyhsl_nzry_wanjian":"完谏",
					"ljyhsl_nzry_wanjian_info":"你的回合外，你可以将所有手牌（至少一张）当作一张【杀】或【闪】使用或打出",
					"ljyhsl_nzry_hequan":"和权",
					"ljyhsl_nzry_hequan_info":"当你攻击范围内的任意一名角色受到了一次伤害后，你可令其摸一张牌，然后你和伤害来源各弃一张牌",
					"ljyhsl_nzry_caoying":"曹婴",
					"ljyhsl_nzry_xieji":"蝎计",
					"ljyhsl_nzry_xieji_info":"摸牌阶段，你可以少摸一张牌，然后将所有的手牌置于你的武将牌上，称为“计”，之后你须进行一次判定，然后弃置一张与判定牌相同花色的“计”并摸两张牌，然后你须继续进行判定，直到你无法弃置与判定牌相同花色的“计”为止",
					"ljyhsl_nzry_shexin":"蛇心",
					"ljyhsl_nzry_shexin_info":"每受到一次伤害后，你可将武将牌翻面并摸X张牌（X为你武将牌上“计”的数量，若X小于你当前的体力值，你回复一点体力）",
					"ljyhsl_nzry_jianggan":"蒋干",
					"ljyhsl_nzry_daoshu":"盗书",
					"ljyhsl_nzry_daoshu_info":"出牌阶段限一次。你选择一种花色然后抽取一名其它角色的一张手牌并亮出，若此牌与你所选的花色不吻合，则目标角色对你造成一点伤害",
					"ljyhsl_nzry_yixiao":"贻笑",
					"ljyhsl_nzry_yixiao_info":"每受到一次伤害后，你可将你的武将牌翻面，若是正面翻到背面向上，你回复一点体力；若是背面翻到正面向上，你摸X张牌（X为你已损失的体力）",
					"ljyhsl_nzry_xuyou":"许攸",
					"ljyhsl_nzry_kuangyan":"狂言",
					"ljyhsl_nzry_kuangyan_info":"锁定技，你不会受到一点无属性伤害。当你一次受到伤害大于或等于2时，该伤害+1",
					"ljyhsl_nzry_yexi1":"夜袭",
					"ljyhsl_nzry_yexi":"夜袭",
					"ljyhsl_nzry_yexi_info":"回合结束阶段，你可以弃置一张手牌并指定一名其它角色，目标角色使用的红色【杀】无视距离，黑色【杀】无视防具，直至其回合结束阶段",
					"ljyhsl_nzry_kanze":"阚泽",
					"ljyhsl_nzry_xianshu":"献书",
					"ljyhsl_nzry_xianshu_info":"出牌阶段限一次，你可以将手牌中的一张装备牌置于一名其他角色的装备区内（不可替换原装备）然后该角色失去一点体力",
					"ljyhsl_nzry_zhaixing":"斋性",
					"ljyhsl_nzry_zhaixing_info":"当你成为【杀】的目标后，你可以弃置该【杀】的使用者一张牌",
					"ljyhsl_nzry_zhoufang":"周鲂",
					"ljyhsl_nzry_zhajiang":"诈降",
					"ljyhsl_nzry_zhajiang_info":"出牌阶段，你可以失去一点体力，令一名其它角色弃置其你指定区域内一张牌，弃牌过程重复两次",
					"ljyhsl_nzry_fanjiangzhangda":"范疆张达",
					"ljyhsl_nzry_weishi":"畏弑",
					"ljyhsl_nzry_weishi_info":"你的回合外，每当你一张红色牌进入了弃牌堆时或受到一次伤害后，你可以将当前回合角色的一张牌置于你的武将牌上，称为“悟”。每有一张“悟”，其他角色与你计算距离时便+1。你的回合开始阶段，你须弃置所有“悟”",
					"ljyhsl_nzry_wangyun":"王允",
					"ljyhsl_nzry_lianji":"连计",
					"ljyhsl_nzry_lianji_info":"每当你使用了一张锦囊牌（结算完毕后），你可以亮出牌堆顶三张牌并获得其中的锦囊牌，然后将余下的牌置于牌堆底",
					"ljyhsl_nzry_liemu":"烈穆",
					"ljyhsl_nzry_liemu_info":"出牌阶段限X次。每当你于出牌阶段获得一次牌后，你可以展示一张手牌并令一名其他角色弃一张与该牌花色相同的手牌，视为对你使用了一张【杀】，否则你摸一张牌（X为场上的势力数）",
					"ljyhsl_nzry_simahui":"司马徽",
					"ljyhsl_nzry_yinshi":"隐世",
					"ljyhsl_nzry_yinshi_info":"回合结束阶段开始时，若你武将牌正面朝上，则你可以将之翻面，然后从X名其它角色的手牌区内各拿一张牌（X为场上势力数）",
					"ljyhsl_nzry_liuxian":"留贤",
					"ljyhsl_nzry_liuxian_info":"回合结束阶段，你可以弃置一张手牌并指定一名角色，若为红色，该角色获得技能“八阵”直到你下个回合开始；若为黑色，该角色获得技能“看破”直到你下个回合开始",
					"ljyhsl_gmrh_huangquan":"黄权",
					"ljyhsl_gmrh_zhonghu":"忠护",
					"ljyhsl_gmrh_zhonghu_info":"出牌阶段限一次，你可以展示至少X张手牌并令一名其他角色获得之（X为你当前的体力值），然后你回复一点体力或视为对目标角色攻击范围内的一名其他角色使用了一张【杀】（此【杀】不计入回合使用次数）",
					"ljyhsl_gmrh_mingyi":"明义",
					"ljyhsl_gmrh_mingyi_info":"你每受到一次伤害后，你可令任意一名角色摸Y+1张牌（Y为该角色已损失的体力）",
					"ljyhsl_gmrh_mengda":"孟达",
					"ljyhsl_gmrh_weijiang2":"伪降",
					"ljyhsl_gmrh_weijiang1":"伪降",
					"ljyhsl_gmrh_weijiang":"伪降",
					"ljyhsl_gmrh_weijiang_info":"出牌阶段对每名角色限一次，你可以交给一名其他角色两张手牌，若如此做，该角色的下个回合内不可对你使用牌",
					"ljyhsl_gmrh_qianshi":"黔势",
					"ljyhsl_gmrh_qianshi_info":"当你攻击范围内的一名角色受到伤害前，你可以弃置两张牌防止之",
					"ljyhsl_gmrh_dengzhi":"邓芝",
					"ljyhsl_gmrh_hemeng":"和盟",
					"ljyhsl_gmrh_hemeng_info":"出牌阶段限X次，你可另一名其他角色观看你的手牌并获得其中一张，然后你观看该角色的手牌并获得其中一张（X为你已损失的体力值且至少为1）",
					"ljyhsl_gmrh_hujun":"护军",
					"ljyhsl_gmrh_hujun_info":"当你攻击范围内的一名角色成为【杀】的目标后，你可以移动场上一张牌，然后你代替其成为此【杀】的目标",
					"ljyhsl_gmrh_zumao":"祖茂",
					"ljyhsl_gmrh_shesheng":"舍生",
					"ljyhsl_gmrh_shesheng_info":"其他角色的出牌阶段开始时，你可以令其回复一点体力，若如此做，你失去一点体力并摸一张牌",
					"ljyhsl_gmrh_quyi":"取义",
					"ljyhsl_gmrh_quyi_info":"任意角色受到【杀】造成的伤害时，你可以失去一点体力并防止此伤害，若目标体力为1，你摸一张牌",
					"ljyhsl_gmrh_quancong":"全琮",
					"ljyhsl_gmrh_yinxi":"隐袭",
					"ljyhsl_gmrh_yinxi_info":"当你受到伤害后，你可以对伤害来源使用一张无距离限制的【杀】，然后你可以获得其装备区内的一张牌并装备之（不替换原有装备，额外装备）",
					"ljyhsl_gmrh_lukang":"陆抗",
					"ljyhsl_gmrh_fenji":"分击",
					"ljyhsl_gmrh_fenji_info":"当你使用【杀】指定目标后，你可以弃一张与该【杀】颜色不同的手牌，然后你可以额外指定一个目标",
					"ljyhsl_gmrh_dezong":"德纵",
					"ljyhsl_gmrh_dezong_info":"回合结束阶段，你可以将你装备区内的牌与其他角色交换装备区内的牌，若你失去的牌不大于X，你摸一张牌（X为你当前的体力值）",
					"ljyhsl_gmrh_simazhao":"司马昭",
					"ljyhsl_gmrh_zhaoxin":"昭心",
					"ljyhsl_gmrh_zhaoxin_info":"当你受到一次伤害后，你可以观看伤害来源至多X张手牌并观看牌堆顶X张牌，你从这些牌中交给伤害来源一张，然后你获得余下的（X为你已损失的体力值）",
					"ljyhsl_gmrh_quanqing1":"权倾",
					"ljyhsl_gmrh_quanqing":"权倾",
					"ljyhsl_gmrh_quanqing_info":"当一名角色死亡，则你可以在当前回合角色回合结束后摸一张牌并获得一个额外的回合",
					"ljyhsl_gmrh_shijun":"弑君",
					"ljyhsl_gmrh_shijun_info":"限定技，出牌阶段，你可以指定一名其他角色，攻击范围内包括该角色的所有其他角色选择一项：对该角色使用一张【杀】；令你摸两张牌或回复一点体力",
					"ljyhsl_gmrh_huaxin":"华歆",
					"ljyhsl_gmrh_lichi":"戾斥",
					"ljyhsl_gmrh_lichi_info":"你每受到一次伤害后，你可以进行一次判定，若为黑色，则你将武将牌翻面并对伤害来源造成一点伤害，否则你可令伤害来源将其武将牌翻面或弃之两张牌",
					"ljyhsl_gmrh_conglong":"从龙",
					"ljyhsl_gmrh_conglong_info":"你的回合外，当有角色正面向上的武将牌翻面后，你可以弃一张牌然后进行一次判定，若是基本牌，其回复一点体力，否则其摸两张牌",
					"ljyhsl_gmrh_chenqun":"陈群",
					"_ljyhsl_gmrh_jiupin":"九品",
					"ljyhsl_gmrh_jiupin":"九品",
					"ljyhsl_gmrh_jiupin_info":"出牌阶段，你可以弃置X张手牌并选择任意一名角色，然后进行一次判定，目标武将将判定牌置于其武将牌下，称为“榜”，当其受到伤害后，其可以弃置一张“榜”发动技能：黑色“节命”；红色“反馈”（X为你当前的体力值）",
					"ljyhsl_gmrh_zhongzheng":"中正",
					"ljyhsl_gmrh_zhongzheng_info":"当你受到伤害后，你可以亮出牌堆顶四张牌，取花色不同的牌各一张，然后将余下的置入弃牌堆",
					"ljyhsl_gmrh_jiping":"吉平",
					"ljyhsl_gmrh_duanzhi":"断指",
					"ljyhsl_gmrh_duanzhi_info":"锁定技，你摸牌阶段额外摸X张牌，你的手牌上限+X（X为你已损失的体力值）",
					"ljyhsl_gmrh_shidu":"施毒",
					"ljyhsl_gmrh_shidu_info":"当任意角色进入濒死状态时，你可以弃置一张黑色牌并对其造成一点伤害",
					"ljyhsl_gmrh_nanhualaoxian":"南华老仙",
					"ljyhsl_gmrh_xiandao":"仙道",
					"ljyhsl_gmrh_xiandao_info":"在你的判定牌生效前，你可以用一张牌替换之",
					"ljyhsl_gmrh_chuanshu":"传术",
					"ljyhsl_gmrh_chuanshu_info":"出牌阶段限一次，你可以弃置装备区里的一张牌并选择任意一名角色，然后进行一次判定，若为红桃，目标回复一点体力",
					"ljyhsl_gmrh_qimen":"奇门",
					"ljyhsl_gmrh_qimen_info":"你的回合外，当你的黑色手牌进入弃牌堆或你的装备区失去牌时，你可以进行一次判定，若为黑桃，你可以对一名角色造成一点雷电属性伤害",
					"ljyhsl_gmrh_dunjia":"遁甲",
					"ljyhsl_gmrh_dunjia_info":"你的回合外，当你的装备区没有牌时，你可以将你的一张黑色手牌当【杀】、红色手牌当【闪】使用或打出",
					"ljyhsl_gmrh_guanlu":"管辂",
					'ljyhsl_gmrh_bodao':'卜道',
					'ljyhsl_gmrh_bodao_info':'锁定技，你判定区的牌判定结果均为不生效',
					'ljyhsl_gmrh_shuwu':'术巫',
					'ljyhsl_gmrh_shuwu_info':'当你于回合外失去牌后，你可以进行一次判定：黑桃:你和一名角色失去一点体力；草花:你令一名角色摸两张牌；红桃:你视为对一名角色使用一张【乐不思蜀】；方块:你可以横置最多两名角色的武将牌',
					"ljyhsl_gmrh_miheng":"祢衡",
					'ljyhsl_gmrh_luochi':'裸斥',
					'ljyhsl_gmrh_luochi_info':'出牌阶段限一次，你可以弃置所有手牌并指定至多X+1名其他角色，每个目标角色须弃置一张基本牌，否则你摸两张牌（X为你已损失的体力值）',
					'ljyhsl_gmrh_qunru':'群辱',
					'ljyhsl_gmrh_qunru_info':'当一张锦囊的目标指定了你与其他角色时，你可以弃置一张与该锦囊颜色相同的手牌，该锦囊的使用者变成你',
					"ljyhsl_hyrs_liuchen":"刘谌",
					"ljyhsl_hyrs_zhenzhong":"贞忠",
					"ljyhsl_hyrs_zhenzhong_info":"出牌阶段限一次，你可以失去一点体力，令一名角色将其手牌数补至其体力上限（最多补至五张）",
					"ljyhsl_hyrs_sijie":"死节",
					"ljyhsl_hyrs_sijie_info":"出牌阶段限一次，你可以弃置任意数量的手牌，然后令一名其他角色弃置该数量-1的手牌",
					"ljyhsl_hyrs_guoye1":"国邺",
					"ljyhsl_hyrs_guoye":"国邺",
					"ljyhsl_hyrs_guoye_info":"主公技，其他蜀势力角色在其出牌阶段可以失去一点体力，然后令你回复一点体力，每阶段限一次",
					"ljyhsl_hyrs_yanyan":"严颜",
					"ljyhsl_hyrs_haolie":"豪烈",
					"ljyhsl_hyrs_haolie_info":"任意角色于其回合内使用【杀】造成伤害后，你可令其摸一张牌，然后你摸一张牌，结算完毕后其结束该回合",
					"ljyhsl_hyrs_jiangwan":"蒋琬",
					"ljyhsl_hyrs_yangzhan1":"养战",
					"ljyhsl_hyrs_yangzhan":"养战",
					"ljyhsl_hyrs_yangzhan_info":"出牌阶段，你可以弃一张牌并将其他角色判定区内的一张牌置于你的判定区内，然后该回合结束阶段结束时，你可以进行一个额外的判定阶段",
					"ljyhsl_hyrs_guyong":"顾雍",
					"ljyhsl_hyrs_fengdao":"讽道",
					"ljyhsl_hyrs_fengdao_info":"当你攻击范围内的一名角色受到【杀】或【决斗】造成的伤害后，你可以弃一张牌，若此牌为基本牌，该角色摸X张牌并翻面（X为该角色当前体力值），否则伤害来源弃两张牌",
					"ljyhsl_hyrs_xunyou":"循诱",
					"ljyhsl_hyrs_xunyou_info":"当你成为【杀】的目标后，你可以展示一张手牌并令对方弃一张与此牌颜色相同的手牌，否则此【杀】无效",
					"ljyhsl_hyrs_weiwen":"卫温",
					"ljyhsl_hyrs_yuanhang":"远航",
					"ljyhsl_hyrs_yuanhang_info":"锁定技，你与其他角色计算距离时，始终为1",
					"ljyhsl_hyrs_mengzhi1":"艨志",
					"ljyhsl_hyrs_mengzhi":"艨志",
					"ljyhsl_hyrs_mengzhi_info":"其他角色进入回合开始阶段时，你可以展示一张手牌然后进行一次判定，若颜色相同则你弃置此牌且该角色与你的距离为正无穷直到其回合结束",
					"ljyhsl_hyrs_quaxiaojiang":"曲阿小将",
					"ljyhsl_hyrs_zhanhun":"战魂",
					"ljyhsl_hyrs_zhanhun_info":"锁定技，游戏开始时，你增加四点体力上限；回合结束阶段开始时，若你已受伤，须将你的体力值调整为你至损失的体力值",
					"ljyhsl_hyrs_caoang":"曹昂",
					"ljyhsl_hyrs_longkui":"龙魁",
					"ljyhsl_hyrs_longkui_info":"摸牌阶段，你可以额外摸X张牌（X为你已损失的体力值），然后跳过出牌阶段和弃牌阶段",
					"ljyhsl_hyrs_sheqi":"舍骑",
					"ljyhsl_hyrs_sheqi_info":"你死亡时，可以指定一名其他角色获得技能“飞影”直到游戏结束",
					"ljyhsl_hyrs_lidian":"李典",
					"ljyhsl_hyrs_yide":"义德",
					"ljyhsl_hyrs_yide_info":"出牌阶段限一次，你可以选择一项：①失去一点体力，令所有其他角色弃一张牌；②回复一点体力，令所有其他角色摸一张牌",
					"ljyhsl_hyrs_qingxin1":"擎心",
					"ljyhsl_hyrs_qingxin":"擎心",
					"ljyhsl_hyrs_qingxin_info":"摸牌阶段，你可以少摸一张牌，然后回合结束阶段你摸一张牌",
					"ljyhsl_hyrs_haozhao":"郝昭",
					"ljyhsl_hyrs_hanwei":"捍卫",
					"ljyhsl_hyrs_hanwei_info":"回合开始阶段，你可以亮出牌堆顶至多X张牌并以任意数量的牌替换之，然后将余下的牌以任意顺序置于牌堆顶或牌堆底（X为你已损失的体力值+2）",
					"ljyhsl_hyrs_mateng":"马腾",
					"ljyhsl_hyrs_qidao":"骑道",
					"ljyhsl_hyrs_qidao_info":"锁定技，你与其他角色计算距离时，始终-2",
					"ljyhsl_hyrs_xiongyi":"雄异",
					"ljyhsl_hyrs_xiongyi_info":"觉醒技，回合开始阶段，若你体力值为1，则你须减少 一点体力上限，然后回复一点体力并摸两张牌获得技能“疾袭”（你可以将【闪】或【桃】当【顺手牵羊】使用）和“长驱”（当你使用的【杀】指定了目标后，你可以弃一张与该【杀】颜色相同的手牌使之不可被闪避）",
					"ljyhsl_hyrs_jixi":"疾袭",
					"ljyhsl_hyrs_jixi_info":"你可以将【闪】或【桃】当【顺手牵羊】使用",
					"ljyhsl_hyrs_changqu":"长驱",
					"ljyhsl_hyrs_changqu_info":"当你使用的【杀】指定了目标后，你可以弃一张与该【杀】颜色相同的手牌使之不可被闪避",
					"ljyhsl_hyrs_canyi":"残毅",
					"ljyhsl_hyrs_canyi_info":"觉醒技，回合结束阶段，若你体力值为1，则你须减少一点体力上限，然后回复一点体力并摸两张牌获得技能“帷幕”与“毅重”",
					"ljyhsl_hyrs_zhanglu":"张鲁",
					"ljyhsl_hyrs_fugu":"符谷",
					"ljyhsl_hyrs_fugu_info":"出牌阶段限一次，你可以弃置一张红桃手牌并进行一次判定。若非黑桃则视为你使用了一张【五谷丰登】，若是黑桃则视为你使用了一张【无中生有】",
					"ljyhsl_hyrs_shidao1":"师道",
					"ljyhsl_hyrs_shidao":"师道",
					"ljyhsl_hyrs_shidao_info":"当你的判定牌生效后（在结算前），你可以立即使用一张【杀】（此【杀】不计入回合使用限制）",
					"ljyhsl_hyrs_wutugu":"兀突骨",
					"_ljyhsl_hyrs_linjia":"鳞甲",
					"ljyhsl_hyrs_linjia":"鳞甲",
					"ljyhsl_hyrs_linjia_info":"你可以受到属性伤害，然后将你的一张牌置于伤害来源的武将牌下，称为“柯”。其他角色可以在其出牌阶段弃置一名角色两张“柯”并①摸等量的牌；②对一名拥有【鳞甲】的角色造成一点火焰伤害，每阶段限一次",
					"ljyhsl_hyrs_mangli":"莽力",
					"ljyhsl_hyrs_mangli_info":"出牌阶段，你可以弃置两张牌，然后弃置一张“柯”",
					"ljyhsl_lyb_jikang":"嵇康",
					"ljyhsl_lyb_duanjiao":"断交",
					"ljyhsl_lyb_duanjiao_info":"你可弃置令你回复一点体力的角色（不为你）一张牌，然后你额外回复一点体力",
					"ljyhsl_lyb_juediao":"绝调",
					"ljyhsl_lyb_juediao_info":"锁定技，对你造成伤害的角色须交给你一张数字为N*（X+1）的手牌，否则该角色失去一点体力（N为1-10内的正整数，X为你已损失的体力值）",
					"ljyhsl_lyb_wanglang":"王朗",
					"ljyhsl_lyb_shizhi1":"恃智",
					"ljyhsl_lyb_shizhi":"恃智",
					"ljyhsl_lyb_shizhi_info":"锁定技，当你成为【杀】的目标后，若该【杀】是其使用者的最后一张手牌，你须连续使用两张【闪】才能响应，若以法对你造成了伤害，你减一点体力上限",
					"ljyhsl_lyb_simashi":"司马师",
					"ljyhsl_lyb_shiquan":"嗜权",
					"ljyhsl_lyb_shiquan_info":"锁定技，你每使用【杀】造成了伤害且结算完毕后，你摸X张牌（X为你已损失的体力值）",
					"ljyhsl_lyb_guanyu":"关羽",
					"ljyhsl_lyb_wudian":"武巅",
					"ljyhsl_lyb_wudian_info":"觉醒技，回合开始阶段，若你的手牌数量大于你的体力值，则你须减少一点体力上限，然后回复两点体力，永久获得技能“拖刀”（每当你于回合外使用了一张【闪】响应牌时，若该牌的使用者在你的攻击范围之内，你可以对其使用一张【杀】且该【杀】无视防具且不可被闪避）",
					"ljyhsl_lyb_tuodao1":"拖刀",
					"ljyhsl_lyb_tuodao":"拖刀",
					"ljyhsl_lyb_tuodao_info":"每当你于回合外使用了一张【闪】响应牌时，若该牌的使用者在你的攻击范围之内，你可以对其使用一张【杀】且该【杀】无视防具且不可被闪避",
					"ljyhsl_lyb_huanghao":"黄皓",
					"ljyhsl_lyb_luanhuan":"乱宦",
					"ljyhsl_lyb_luanhuan_info":"任意角色使用的【杀】被闪避后，你可以弃置两张牌，使该【杀】的使用者对其目标造成一点伤害",
					"ljyhsl_lyb_qingjun":"清君",
					"ljyhsl_lyb_qingjun_info":"锁定技，你死亡时，当前回合角色须进行一次判定，若为红桃，其回复一点体力，否则其减少一点体力上限并失去一点体力",
					"ljyhsl_lyb_zhouchu":"周处",
					"ljyhsl_lyb_shuhuo":"束祸",
					"ljyhsl_lyb_shuhuo_info":"每当你造成伤害后，你可以将你的的一张牌置于你的武将牌上，称为“黩”。每有一张“黩”，你的进攻距离便+2",
					"ljyhsl_lyb_zhijiang":"执将",
					"ljyhsl_lyb_zhijiang_info":"觉醒技，回合开始阶段，若你的“黩”数量为3张或更多，则你须减少一点体力上限然后获得技能“邺帅”（当你成为【杀】的目标或使用【杀】指定了目标后，你可以摸一张牌，然后令对方弃一张牌）",
					"ljyhsl_lyb_yeshuai":"邺帅",
					"ljyhsl_lyb_yeshuai_info":"当你成为【杀】的目标或使用【杀】指定了目标后，你可以摸一张牌，然后令对方弃一张牌",
					"ljyhsl_lyb_qiaoguolao":"乔国老",
					"ljyhsl_lyb_fuwu":"辅吴",
					"ljyhsl_lyb_fuwu_info":"出牌阶段限一次，你可以令至多X+1名角色摸两张牌然后弃两张牌（X为你已损失体力值）",
					"ljyhsl_lyb_xuzi":"婿姿",
					"ljyhsl_lyb_xuzi_info":"摸牌阶段，你可以少摸一张牌，然后你令一名其他角色摸一张牌再交给你一张手牌",
					"ljyhsl_lyb_huangchengyan":"黄承彦",
					"ljyhsl_lyb_zexu":"择婿",
					"ljyhsl_lyb_zexu_info":"出牌阶段限一次，你可以将一张基本牌置于一名其他角色的手牌区内或将一张装备牌置于一名其他角色的装备区内（不得替换原装备），然后你摸两张牌",
					"ljyhsl_lyb_dushi":"度势",
					"ljyhsl_lyb_dushi_info":"当一名角色失去了最后一张手牌后。你可以：①弃一张牌，令其回复一点体力；②弃置其一张牌",
					"ljyhsl_lyb_tadun":"蹋顿",
					"ljyhsl_lyb_chiji":"驰击",
					"ljyhsl_lyb_chiji_info":"当你受到伤害后，你可以视为对伤害来源使用了一张雷电属性的【杀】，若此【杀】造成了伤害，你摸一张牌",
				},
			};
			if(lib.device||lib.node){
				for(var i in ljyhsl.character){ljyhsl.character[i][4].push('ext:扩展ol/'+i+'.jpg');}
			}else{
				for(var i in ljyhsl.character){ljyhsl.character[i][4].push('db:extension-扩展ol:'+i+'.jpg');}
			}
			return ljyhsl;
		});
		lib.config.all.characters.push('ljyhsl');
		if(!lib.config.characters.contains('ljyhsl')) lib.config.characters.push('ljyhsl');
		lib.translate['ljyhsl_character_config']='雷金阴洪石';
}