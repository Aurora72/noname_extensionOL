window.func=function(lib,game,ui,get,ai,_status){
	var date=new Date();
	if(lib.config.achievement==undefined) game.saveConfig('achievement',{course:{},wu:{},shu:{},wei:{},qun:{}});
	var player_logSkill=lib.element.player.logSkill;
	lib.element.player.logSkill=function(name,targets,nature,logv){
		var next=game.createEvent('logSkill');
		next.player=this;
		next.skill=name;
		next.targets=targets;
		next.setContent('logSkill');
		player_logSkill.apply(this,arguments);
		return next;
	};
	lib.element.content.logSkill=function(){
		var skill=event.skill;
		if(game.me!=player)return;
		if(skill=='zhenwei'){
			if(!player.storage.gangtiefangxian){
				player.storage.gangtiefangxian=0;
			}
			player.storage.gangtiefangxian++;
		}else if(skill=='moukui'){
			if(_status.event.getParent().name=='discardPlayerCard'){
				player.storage.youyongyoumou2=true;
			}
		}else if(skill=='xinfu_fangtong'){
			player.storage.rengongjiangjun2=true;
		}else if(skill=='bingzheng'){
			player.storage.bingzheng2=true;
		}else if(skill=='pingkou'){
			player.storage.yongliefenli2=true;
		}else if(skill=='kunfen'){
			player.storage.tianshuiqiliner2=true;
		}else if(skill=='qiaomeng'){
			player.storage.daomazei2=true;
		}else if(['kuanggu','xinkuanggu'].contains(skill)){
			player.storage.shixuechengxing2=true;
		}else if(skill=='shefu'){
			player.storage.chouliaojuelun2=true;
		}
	};
	var achievement={
		course:{
			//历程类
			'chuchumaolu':{
				name:'初出茅庐',
				condition:{
					1:{
						info:'进行一局游戏',
						t_name:'chuchumaolu',
						need_times:1,
					},
				},
			},
			'chushishenshou':{
				name:'初试身手',
				condition:{
					1:{
						info:'进行五局游戏',
						t_name:'chuchumaolu',
						need_times:5,
					},
				},
			},
			'xiaoshiniudao':{
				name:'小试牛刀',
				condition:{
					1:{
						info:'进行十局游戏',
						t_name:'chuchumaolu',
						need_times:10,
					},
				},
			},
			'xiaoyoumingqi':{
				name:'小有名气',
				condition:{
					1:{
						info:'进行二十局游戏',
						t_name:'chuchumaolu',
						need_times:20,
					},
				},
			},
			'fengmangbilu':{
				name:'锋芒毕露',
				condition:{
					1:{
						info:'进行三十局游戏',
						t_name:'chuchumaolu',
						need_times:30,
					},
				},
			},
			'chuchangshengguo':{
				name:'初尝胜果',
				condition:{
					1:{
						info:'获得一局胜利',
						t_name:'chuchangshengguo',
						need_times:1,
					},
				},
			},
			'chujishashou':{
				name:'初级杀手',
				condition:{
					1:{
						info:'获得五局胜利',
						t_name:'chuchangshengguo',
						need_times:5,
					},
				},
			},
			'zhongjishashou':{
				name:'中级杀手',
				condition:{
					1:{
						info:'获得十局胜利',
						t_name:'chuchangshengguo',
						need_times:10,
					},
				},
			},
			'gaojishashou':{
				name:'高级杀手',
				condition:{
					1:{
						info:'获得二十局胜利',
						t_name:'chuchangshengguo',
						need_times:20,
					},
				},
			},
			'quanzhishashou':{
				name:'全职杀手',
				condition:{
					1:{
						info:'获得三十局胜利',
						t_name:'chuchangshengguo',
						need_times:30,
					},
				},
			},
			changshengjiangjun:{
				name:'常胜将军',
				condition:{
					1:{
						info:'连胜10局游戏',
						t_name:'changshengjiangjun',
						need_times:10,
					}
				}
			},
			//身份类
			junlintianxia:{
				name:'君临天下',
				condition:{
					1:{
						info:'身为主公取得胜利累计40次',
						t_name:'junlintianxia',
						need_times:40,
					}
				}
			},
			zhishengzhiming:{
				name:'至圣至明',
				condition:{
					1:{
						info:'身为主公在一局游戏中击败所有反贼和内奸，并在忠臣全部存活的情况下获胜',
						t_name:'zhishengzhiming',
						need_times:1,
					}
				}
			},
			binggongwusi:{
				name:'秉公无私',
				condition:{
					1:{
						info:'身为主公在一局游戏从未对忠臣造成伤害，并获得胜利',
						t_name:'binggongwusi',
						need_times:1,
					}
				}
			},
			tiandaoweiyi:{
				name:'天道威仪',
				condition:{
					1:{
						info:'身为主公在一局游戏中，在忠臣全部死亡后击败至少3名角色，取得胜利',
						t_name:'tiandaoweiyi',
						need_times:1,
					}
				}
			},
			zhongxingenggeng:{
				name:'忠心耿耿',
				condition:{
					1:{
						info:'身为忠臣取得胜利累计60次',
						t_name:'zhongxingenggeng',
						need_times:60,
					}
				}
			},
			zhongganyidan:{
				name:'忠肝义胆',
				condition:{
					1:{
						info:'身为忠臣在一局游戏中存活，并且主公满血的情况下取得胜利',
						t_name:'zhongganyidan',
						need_times:1,
					}
				}
			},
			jiezhijiezhong:{
				name:'竭智竭忠',
				condition:{
					1:{
						info:'身份忠臣在一局游戏中，在自己的首回合中击败一个反贼或内奸，最后取得胜利',
						t_name:'jiezhijiezhong',
						need_times:1,
					}
				}
			},
			chidanzhongxin:{
				name:'赤胆忠心',
				condition:{
					1:{
						info:'身为忠臣在一局游戏中，击败至少两个反贼或内奸',
						t_name:'chidanzhongxin',
						need_times:1,
					}
				}
			},
			weiwoduzun:{
				name:'唯我独尊',
				condition:{
					1:{
						info:'身为内奸取得一次胜利',
						t_name:'weiwoduzun',
						need_times:1,
					}
				}
			},
			yunchouweiwo:{
				name:'运筹帷幄',
				condition:{
					1:{
						info:'身为内奸取得胜利累计20次',
						t_name:'yunchouweiwo',
						need_times:20,
					}
				}
			},
			laomoushensuan:{
				name:'老谋深算',
				condition:{
					1:{
						info:'身为内奸在一局游戏中击败至少4个反贼或忠臣并取得胜利',
						t_name:'laomoushensuan',
						need_times:1,
					}
				}
			},
			caotoutianzi:{
				name:'草头天子',
				condition:{
					1:{
						info:'身为反贼取得胜利累计100次',
						t_name:'caotoutianzi',
						need_times:100,
					}
				}
			},
			juechufengsheng:{
				name:'绝处逢生',
				condition:{
					1:{
						info:'身为反贼在一局游戏中，在其他反贼全部死亡且忠臣全部存活的情况下获胜',
						t_name:'juechufengsheng',
						need_times:1,
					}
				}
			},
			chenxuerru:{
				name:'趁虚而入',
				condition:{
					1:{
						info:'身为反贼在一局游戏中，在自己第1回合时击败主公',
						t_name:'chenxuerru',
						need_times:1,
					}
				}
			},
			luanchenzeizi:{
				name:'乱臣贼子',
				condition:{
					1:{
						info:'身为反贼在一局游戏中，击败至少两个忠臣或内奸',
						t_name:'luanchenzeizi',
						need_times:1,
					}
				}
			},
			//条件类-对其他玩家
			pingfandajiang:{
				name:'平反大将',
				condition:{
					1:{
						info:'一局游戏中击败不小于4个反贼',
						t_name:'pingfandajiang',
						need_times:1,
					}
				}
			},
			lashoucuihua:{
				name:'辣手摧花',
				condition:{
					1:{
						info:'一局游戏中击败至少2名女性角色',
						t_name:'lashoucuihua',
						need_times:1,
					}
				}
			},
			xianbatouchou:{
				name:'先拔头筹',
				condition:{
					1:{
						info:'一局游戏中，自己的首回合结束前击败至少一名非本方武将',
						t_name:'xianbatouchou',
						need_times:1,
					}
				}
			},
			hengsaoqianjun:{
				name:'横扫千军',
				condition:{
					1:{
						info:'一局游戏中，击败7名角色并且获得胜利',
						t_name:'hengsaoqianjun',
						need_times:1,
					}
				}
			},
			//条件类-对自己
			dajiangyoude:{
				name:'打酱油的',
				condition:{
					1:{
						info:'在自己回合开始前就死亡',
						t_name:'dajiangyoude',
						need_times:1,
					}
				}
			},
			gouyancanchuan:{
				name:'苟延残喘',
				condition:{
					1:{
						info:'在一局游戏中脱离濒死5次',
						t_name:'gouyancanchuan',
						need_times:1,
					}
				}
			},
			qikaidesheng:{
				name:'旗开得胜',
				condition:{
					1:{
						info:'一局游戏中，在自己首回合结束前获胜',
						t_name:'qikaidesheng',
						need_times:1,
					}
				}
			},
			//手牌类
			paohui:{
				name:'炮灰',
				condition:{
					1:{
						info:'被AOE卡牌击败累计10次',
						t_name:'paohui',
						need_times:10,
					}
				}
			},
			dapaohui:{
				name:'更大的炮灰',
				condition:{
					1:{
						info:'被AOE卡牌击败累计50次',
						t_name:'dapaohui',
						need_times:50,
					}
				}
			},
			//手牌类-延时锦囊
			mingbugaijue:{
				name:'命不该绝',
				condition:{
					1:{
						info:'被闪电劈中但是没有死',
						t_name:'mingbugaijue',
						need_times:1,
					}
				}
			},
			tianqian:{
				name:'天谴',
				condition:{
					1:{
						info:'不被改判定牌的情况下被闪电劈中战败',
						t_name:'tianqian',
						need_times:1,
					}
				}
			},
			jileshijie:{
				name:'极乐世界',
				condition:{
					1:{
						info:'一局游戏中，累计3次被乐不思蜀后判定牌都是红桃',
						t_name:'jileshijie',
						need_times:1,
					}
				}
			},
			anlegong:{
				name:'安乐公',
				condition:{
					1:{
						info:'一局游戏中，累计3次被乐不思蜀后判定牌都不是红桃',
						t_name:'anlegong',
						need_times:1,
					}
				}
			},
			jichanglulu:{
				name:'饥肠辘辘',
				condition:{
					1:{
						info:'一局游戏中，累计3次被兵粮寸断后判定牌都不是草花',
						t_name:'jichanglulu',
						need_times:1,
					}
				}
			},
			bingjingliangzu:{
				name:'兵精粮足',
				condition:{
					1:{
						info:'一局游戏中，累计3次被兵粮寸断后判定牌都是草花',
						t_name:'bingjingliangzu',
						need_times:1,
					}
				}
			},
			//手牌类-锦囊
			hongyundangtou:{
				name:'鸿运当头',
				condition:{
					1:{
						info:'在你的一回合内使用3次无中生有',
						t_name:'hongyundangtou',
						need_times:1,
					}
				}
			},
			yiqitao:{
				name:'一骑讨',
				condition:{
					1:{
						info:'累计使用决斗造成伤害30次',
						t_name:'yiqitao',
						need_times:30,
					}
				}
			},
			banshizajiao:{
				name:'搬石砸脚',
				condition:{
					1:{
						info:'受到自个的决斗伤害累计10次',
						t_name:'banshizajiao',
						need_times:10,
					}
				}
			},
			gongqibubei:{
				name:'攻其不备',
				condition:{
					1:{
						info:'一局游戏中，使用火攻成功造成伤害3次',
						t_name:'gongqibubei',
						need_times:1,
					}
				}
			},
			beikanchuanlema:{
				name:'被看穿了吗',
				condition:{
					1:{
						info:'一局游戏中，使用火攻失败3次',
						t_name:'beikanchuanlema',
						need_times:1,
					}
				}
			},
			younantongdang:{
				name:'有难同当',
				condition:{
					1:{
						info:'一局游戏中，使用铁索连环累计横置其他角色6次',
						t_name:'younantongdang',
						need_times:1,
					}
				}
			},
			datiejiang:{
				name:'打铁匠',
				condition:{
					1:{
						info:'累计将铁索连环重铸30次',
						t_name:'datiejiang',
						need_times:30,
					}
				}
			},
			yizuzhifen:{
				name:'异族之愤',
				condition:{
					1:{
						info:'使用1次南蛮入侵击败至少3名角色',
						t_name:'yizuzhifen',
						need_times:1,
					}
				}
			},
			jianwuxufa:{
				name:'箭无虚发',
				condition:{
					1:{
						info:'使用1次万箭齐发击败至少3名角色',
						t_name:'jianwuxufa',
						need_times:1,
					}
				}
			},
			//手牌类-基本牌
			taowang:{
				name:'桃王',
				condition:{
					1:{
						info:'一局游戏中给自己吃过5个或者更多的桃',
						t_name:'taowang',
						need_times:1,
					}
				}
			},
			taoxian:{
				name:'桃仙',
				condition:{
					1:{
						info:'一局游戏中,对他人使用桃至少5次',
						t_name:'taoxian',
						need_times:1,
					}
				}
			},
			heyijieyou:{
				name:'何以解忧',
				condition:{
					1:{
						info:'一局游戏中，使用酒回复体力至少2次',
						t_name:'heyijieyou',
						need_times:1,
					}
				}
			},
			weiyoudukang:{
				name:'唯有杜康',
				condition:{
					1:{
						info:'一局游戏中，使用酒后成功使用杀造成伤害3次',
						t_name:'weiyoudukang',
						need_times:1,
					}
				}
			},
			//手牌类-装备
			sherenshema:{
				name:'射人先射马',
				condition:{
					1:{
						info:'一局游戏中发动麒麟弓至少3次',
						t_name:'sherenshema',
						need_times:1,
					}
				}
			},
			rehuoshangshen:{
				name:'惹火上身',
				condition:{
					1:{
						info:'一局游戏中，装备藤甲时累计受到3次火焰伤害',
						t_name:'rehuoshangshen',
						need_times:1,
					}
				}
			},
			jueduilingdu:{
				name:'绝对零度',
				condition:{
					1:{
						info:'一局游戏中发动寒冰剑技能至少3次',
						t_name:'jueduilingdu',
						need_times:1,
					}
				}
			},
			shahenda:{
				name:'杀很大',
				condition:{
					1:{
						info:'一局游戏中发动诸葛连弩技能至少4次',
						t_name:'shahenda',
						need_times:1,
					}
				}
			},
			daoqiangburu:{
				name:'刀枪不入',
				condition:{
					1:{
						info:'一局游戏中发动仁王盾技能至少3次',
						t_name:'daoqiangburu',
						need_times:1,
					}
				}
			},
			bamenjinsuo:{
				name:'八门金锁',
				condition:{
					1:{
						info:'一局游戏中装备八卦阵连续判定红色花色至少5次',
						t_name:'bamenjinsuo',
						need_times:1,
					}
				}
			},
			luojingxiashi:{
				name:'落井下石',
				condition:{
					1:{
						info:'一局游戏中发动古锭刀技能至少3次',
						t_name:'luojingxiashi',
						need_times:1,
					}
				}
			},
			dashihuaxiao:{
				name:'大事化小',
				condition:{
					1:{
						info:'一局游戏中发动白银狮子技能减少伤害至少1次',
						t_name:'dashihuaxiao',
						need_times:1,
					}
				}
			},
			saiwengshima:{
				name:'塞翁失马',
				condition:{
					1:{
						info:'一局游戏中失去白银狮子回复体力至少2次',
						t_name:'saiwengshima',
						need_times:1,
					}
				}
			},
			tengjiabing:{
				name:'藤甲兵',
				condition:{
					1:{
						info:'一局游戏中抵挡3次南蛮万剑的伤害',
						t_name:'tengjiabing',
						need_times:1,
					}
				}
			},
			shirupozhu:{
				name:'势如破竹',
				condition:{
					1:{
						info:'一局游戏中发动3次贯石斧强制杀的命中',
						t_name:'shirupozhu',
						need_times:1,
					}
				}
			},
		},
		wu:{
			'nianqingdexianjun':{
				name:'年轻的贤君',
				condition:{
					1:{
						info:'使用孙权获得100场胜利',
						owner:'sunquan',
						t_name:'nianqingdexianjun',
						need_times:100,
					},
				},
			},
			'nianqingyouwei':{
				name:'年轻有为',
				condition:{
					1:{
						info:'使用孙权在一局游戏中被吴国武将用桃救至少3次',
						t_name:'nianqingyouwei',
						need_times:3,
					},
				},
			},
			'jinfanyouxia':{
				name:'锦帆游侠',
				condition:{
					1:{
						info:'使用甘宁获得100场胜利',
						owner:'ganning',
						t_name:'jinfanyouxia',
						need_times:100,
					},
				},
			},
			'shenchuguimo':{
				name:'神出鬼没',
				condition:{
					1:{
						info:'使用甘宁在一个回合内至少发动6次奇袭',
						t_name:'shenchuguimo',
						need_times:6,
					},
				},
			},
			'qingshenweiguo':{
				name:'轻身为国',
				condition:{
					1:{
						info:'使用黄盖获得100场胜利',
						owner:'huanggai',
						t_name:'qingshenweiguo',
						need_times:100,
					},
				},
			},
			'wujindebianta':{
				name:'无尽的鞭挞',
				condition:{
					1:{
						info:'使用黄盖在一个回合内至少发动8次苦肉',
						t_name:'wujindebianta',
						need_times:8,
					},
				},
			},
			'baiyidujiang':{
				name:'白衣渡江',
				condition:{
					1:{
						info:'使用吕蒙获得100场胜利',
						owner:'lvmeng',
						t_name:'baiyidujiang',
						need_times:100,
					},
				},
			},
			'sijidaifa':{
				name:'伺机待发',
				condition:{
					1:{
						info:'使用吕蒙将手牌囤积到20张',
						t_name:'sijidaifa',
						need_times:20,
					},
				},
			},
			'jinchizhihua':{
				name:'矜持之花',
				condition:{
					1:{
						info:'使用大乔获得100场胜利',
						owner:'daqiao',
						t_name:'jinchizhihua',
						need_times:100,
					},
				},
			},
			'yihuajiemu':{
				name:'移花接木',
				condition:{
					1:{
						info:'使用大乔在一局游戏中连续发动流离至少5次',
						t_name:'yihuajiemu',
						need_times:5,
					},
				},
			},
			'gongyaoji':{
				name:'弓腰姬',
				condition:{
					1:{
						info:'使用孙尚香获得100场胜利',
						owner:'sunshangxiang',
						t_name:'gongyaoji',
						need_times:100,
					},
				},
			},
			'yinhuodefu':{
				name:'因祸得福',
				condition:{
					1:{
						info:'使用孙尚香在一局游戏中累积失去至少5张已装备的装备牌',
						t_name:'yinhuodefu',
						need_times:5,
					},
				},
			},
			'dadudu':{
				name:'大都督',
				condition:{
					1:{
						info:'使用周瑜获得100场胜利',
						owner:'zhouyu',
						t_name:'dadudu',
						need_times:100,
					},
				},
			},
			'wujindezhengzha':{
				name:'无尽的挣扎',
				condition:{
					1:{
						info:'使用周瑜在一局游戏中使用反间击败至少3名角色',
						t_name:'wujindezhengzha',
						need_times:3,
					},
				},
			},
			'rushengxiongcai':{
				name:'儒生雄才',
				condition:{
					1:{
						info:'使用陆逊获得100场胜利',
						owner:'luxun',
						t_name:'rushengxiongcai',
						need_times:100,
					},
				},
			},
			'lianmianbujue':{
				name:'连绵不绝',
				condition:{
					1:{
						info:'使用陆逊在一个回合内发动至少10次连营',
						t_name:'lianmianbujue',
						need_times:10,
					},
				},
			},
			wuliedi:{
				name:'武烈帝',
				condition:{
					1:{
						info:'使用界孙坚在一局游戏内发动三次破虏',
						t_name:'wuliedi',
						need_times:1,
					},
				},
			},
			buxiquming:{
				name:'不惜躯命',
				condition:{
					1:{
						info:'使用周泰在一局游戏中拥有12张不屈牌',
						t_name:'buxiquming',
						need_times:1,
					}
				},
				
			},
			zhejiequxia:{
				name:'折节屈下',
				condition:{
					1:{
						info:'一局游戏中由使用步骘弃牌发动至少5次弘德',
						t_name:'zhejiequxia',
						need_times:1,
					}
				},
			},
			yongliefenli:{
				name:'勇烈奋励',
				condition:{
					1:{
						info:'使用朱恒在一局游戏中发动平寇杀死至少两名角色并获胜',
						t_name:'yongliefenli',
						need_times:1,
					}
				},
			},
			xingjiachizu:{
				name:'兴家赤族',
				condition:{
					1:{
						info:'在一局游戏中发动技能黩武令两名角色进入濒死状态',
						t_name:'xingjiachizu',
						need_times:1,
					}
				},
			},
			sanchaohuchen:{
				name:'三朝虎臣',
				condition:{
					1:{
						info:'在一局游戏中发动“醇醪”，为自己恢复至少3点体力',
						t_name:'sanchaohuchen',
						need_times:1,
					}
				},
			}
		},
		shu:{
			'luanshidexiaoxiong':{
				name:'乱世的枭雄',
				condition:{
					1:{
						info:'使用刘备获得100场胜利',
						owner:'liubei',
						t_name:'luanshidexiaoxiong',
						need_times:100,
					},
				},
			},
			'jiujiezhixin':{
				name:'纠结之心',
				condition:{
					1:{
						info:'使用刘备在一局游戏中发动雌雄双股剑特效击败至少1名女性角色',
						t_name:'jiujiezhixin',
						need_times:1,
					},
				},
			},
			'wanfubudang':{
				name:'万夫不当',
				condition:{
					1:{
						info:'使用张飞获得100场胜利',
						owner:'zhangfei',
						t_name:'wanfubudang',
						need_times:100,
					},
				},
			},
			'yanrendepaoxiao':{
				name:'燕人的咆哮',
				condition:{
					1:{
						info:'使用张飞在一局游戏中发动丈八蛇矛特效击败至少1名角色',
						t_name:'yanrendepaoxiao',
						need_times:1,
					},
				},
			},
			'yiqidangqian':{
				name:'一骑当千',
				condition:{
					1:{
						info:'使用马超获得100场胜利',
						owner:'machao',
						t_name:'yiqidangqian',
						need_times:100,
					},
				},
			},
			'quanjuntuji':{
				name:'全军突击',
				condition:{
					1:{
						info:'使用马超在一局游戏中发动铁骑连续判定红色花色至少5次',
						t_name:'quanjuntuji',
						need_times:5,
					},
				},
			},
			'meirangong':{
				name:'美髯公',
				condition:{
					1:{
						info:'使用关羽获得100场胜利',
						owner:'guanyu',
						t_name:'meirangong',
						need_times:100,
					},
				},
			},
			'wushengxianling':{
				name:'武圣显灵',
				condition:{
					1:{
						info:'使用关羽在一局游戏中发动青龙偃月刀特效击败至少1名角色（国战模式下无法完成）',
						t_name:'wushengxianling',
						need_times:1,
					},
				},
			},
			'shaonianjiangjun':{
				name:'少年将军',
				condition:{
					1:{
						info:'使用赵云获得100场胜利',
						owner:'zhaoyun',
						t_name:'shaonianjiangjun',
						need_times:100,
					},
				},
			},
			'hunshenshidan':{
				name:'浑身是胆',
				condition:{
					1:{
						info:'使用赵云在一局游戏中发动青釭剑特效击败至少1名角色',
						t_name:'hunshenshidan',
						need_times:1,
					},
				},
			},
			'guiyindejienv':{
				name:'归隐的杰女',
				condition:{
					1:{
						info:'使用黄月英获得100场胜利',
						owner:'huangyueying',
						t_name:'guiyindejienv',
						need_times:100,
					},
				},
			},
			'jinnangdai':{
				name:'锦囊袋',
				condition:{
					1:{
						info:'使用黄月英在一个回合内至少发动10次集智',
						t_name:'jinnangdai',
						need_times:10,
					},
				},
			},
			'chimudechengxiang':{
				name:'迟暮的丞相',
				condition:{
					1:{
						info:'使用诸葛亮获得100场胜利',
						owner:'zhugeliang',
						t_name:'chimudechengxiang',
						need_times:100,
					},
				},
			},
			'kongchengjuechang':{
				name:'空城绝唱',
				condition:{
					1:{
						info:'使用诸葛亮在一局游戏中有至少5个回合结束时是空城状态',
						t_name:'kongchengjuechang',
						need_times:10,
					},
				},
			},
			yinjingjudian:{
				name:'引经据典',
				condition:{
					1:{
						info:'一局游戏中，发动专对拼点至少拼赢3次',
						t_name:'yinjingjudian',
						need_times:1,
					},
				},
			},
			zhancaochugen:{
				name:'斩草除根',
				condition:{
					1:{
						info:'一局游戏中，发动潜袭使一名角色降低至少3点体力上限并获胜',
						t_name:'zhancaochugen',
						need_times:1,
					},
				},
			},
			bingzheng:{
				name:'淡泊秉正',
				condition:{
					1:{
						info:'一局游戏中，发动秉正使自己至少摸3张牌',
						t_name:'bingzheng',
						need_times:1,
					},
				},
			},
			tianshuiqiliner:{
				name:'天水麒麟儿',
				condition:{
					1:{
						info:'一局游戏中，发动困奋至少5次并获胜',
						t_name:'tianshuiqiliner',
						need_times:1,
					},
				},
			},
			wuximanwang:{
				name:'五溪蛮王',
				condition:{
					1:{
						info:'一回合内，发动蒺藜在一回合内获得至少5张牌',
						t_name:'wuximanwang',
						need_times:1,
					},
				},
			},
			zhengnanxianfeng:{
				name:'征南先锋',
				condition:{
					1:{
						info:'一局游戏中，使用关索在一局游戏中发动过武圣、当先、制蛮（夺取装备牌）各一次并获胜',
						t_name:'zhengnanxianfeng',
						need_times:1,
					},
				},
			},
			shixuechengxing:{
				name:'嗜血成性',
				condition:{
					1:{
						info:'一局游戏中，使用魏延发动狂骨回复3点体力',
						t_name:'shixuechengxing',
						need_times:1,
					},
				},
			},
			tuhao:{
				name:'土豪',
				condition:{
					1:{
						info:'在一局游戏中发动“资援”给出至少3张点数为“K”的手牌，并获得游戏胜利',
						t_name:'tuhao',
						need_times:1,
					},
				},
			},
			xianzhongqiusheng:{
				name:'险中求胜',
				condition:{
					1:{
						info:'使用夏侯霸在自己体力值不大于1的情况下获得胜利',
						t_name:'xianzhongqiusheng',
						need_times:1,
					},
				},
			},
			beidiwang:{
				name:'北地王',
				condition:{
					1:{
						info:'一局游戏中发动战绝杀死至少2名敌方角色并获胜',
						t_name:'beidiwang',
						need_times:1,
					},
				},
			},
		},
		wei:{
			'weiwudi':{
				name:'魏武帝',
				condition:{
					1:{
						info:'使用曹操获得100场胜利',
						owner:'caocao',
						t_name:'weiwudi',
						need_times:100,
					},
				},
			},
			'luanshidejianxiong':{
				name:'乱世的奸雄',
				condition:{
					1:{
						info:'使用曹操在一局游戏中发动奸雄得到至少3张南蛮入侵和1张万箭齐发<li>南蛮入侵：',
						t_name:'luanshidejianxiong1',
						need_times:3,
					},
					2:{
						info:'万箭齐发：',
						t_name:'luanshidejianxiong2',
						need_times:1,
					},
				},
			},
			'qianjiangjun':{
				name:'前将军',
				condition:{
					1:{
						info:'使用张辽获得100场胜利',
						owner:'zhangliao',
						t_name:'qianjiangjun',
						need_times:100,
					},
				},
			},
			'shenqiwubei':{
				name:'神其无备',
				condition:{
					1:{
						info:'使用张辽在一局游戏中发动至少10次突袭',
						t_name:'shenqiwubei',
						need_times:10,
					},
				},
			},
			'duyandeluocha':{
				name:'独眼的罗刹',
				condition:{
					1:{
						info:'使用夏侯惇获得100场胜利',
						owner:'xiahoudun',
						t_name:'duyandeluocha',
						need_times:100,
					},
				},
			},
			'liangbaijushang':{
				name:'两败俱伤',
				condition:{
					1:{
						info:'使用夏侯惇在一局游戏中发动刚烈击败至少一名角色',
						t_name:'liangbaijushang',
						need_times:1,
					},
				},
			},
			'huchi':{
				name:'虎痴',
				condition:{
					1:{
						info:'使用许褚获得100场胜利',
						owner:'xuzhu',
						t_name:'huchi',
						need_times:100,
					},
				},
			},
			'mawoleng':{
				name:'妈，我冷',
				condition:{
					1:{
						info:'使用许褚在一局游戏中发动裸衣至少两次并在裸衣的回合中使用杀或决斗击败过至少2名角色<li>发动裸衣：',
						t_name:'mawoleng1',
						need_times:2,
					},
					2:{
						info:'击败角色：',
						t_name:'mawoleng2',
						need_times:2,
					},
				},
			},
			'zaozhongdexianzhi':{
				name:'早终的先知',
				condition:{
					1:{
						info:'使用郭嘉获得100场胜利',
						owner:'guojia',
						t_name:'zaozhongdexianzhi',
						need_times:100,
					},
				},
			},
			'buyiyuli':{
				name:'不遗余力',
				condition:{
					1:{
						info:'使用郭嘉在一局游戏中发动遗计给其他角色发牌至少5次',
						t_name:'buyiyuli',
						need_times:5,
					},
				},
			},
			'langguzhigui':{
				name:'狼顾之鬼',
				condition:{
					1:{
						info:'使用司马懿获得100场胜利',
						owner:'simayi',
						t_name:'langguzhigui',
						need_times:100,
					},
				},
			},
			'shouyantongtian':{
				name:'手眼通天',
				condition:{
					1:{
						info:'使用司马懿在一局游戏中有至少2次发动反馈都抽到对方1张桃',
						t_name:'shouyantongtian',
						need_times:2,
					},
				},
			},
			'boxingdemeiren':{
				name:'薄幸的美人',
				condition:{
					1:{
						info:'使用甄姬获得100场胜利',
						owner:'zhenji',
						t_name:'boxingdemeiren',
						need_times:100,
					},
				},
			},
			'luoshenfu':{
				name:'洛神赋',
				condition:{
					1:{
						info:'使用甄姬一回合内发动洛神连续判定黑色花色至少8次',
						t_name:'luoshenfu',
						need_times:8,
					},
				},
			},
			fengdaowang:{
				name:'丰悼王',
				condition:{
					1:{
						info:'一局游戏中发动慷忾摸到装备牌至少3次',
						t_name:'fengdaowang',
						need_times:1,
					},
				},
			},
			shierqice:{
				name:'十二奇策',
				condition:{
					1:{
						info:'一局游戏中发动奇策至少12次',
						t_name:'shierqice',
						need_times:1,
					},
				},
			},
			yihesu:{
				name:'一和酥',
				condition:{
					1:{
						info:'一局游戏中发动啖酪至少3次',
						t_name:'yihesu',
						need_times:1,
					},
				},
			},
			gangtiefangxian:{
				name:'钢铁防线',
				condition:{
					1:{
						info:'一局游戏中发动镇卫至少5次并获胜',
						t_name:'gangtiefangxian',
						need_times:1,
					},
				},
			},
			tangbidangche:{
				name:'螳臂当车',
				condition:{
					1:{
						info:'王朗因为获得7个标记而死',
						t_name:'gangtiefangxian',
						need_times:1,
					},
				},
			},
			danjiqianli:{
				name:'单骑千里',
				condition:{
					1:{
						info:'使用SP关羽在一局游戏中发动怒斩至少3次并获胜',
						t_name:'danjiqianli',
						need_times:1,
					},
				},
			},
			yinpinghou:{
				name:'阴平侯',
				condition:{
					1:{
						info:'使用亚索发动卫境使用杀、闪至少3次并获胜',
						t_name:'yinpinghou',
						need_times:1,
					},
				},
			},
			chouliaojuelun:{
				name:'筹料绝伦',
				condition:{
					1:{
						info:'在一局游戏中发动设伏令牌无效至少3次并获胜',
						t_name:'chouliaojuelun',
						need_times:1,
					},
				},
			},
			qiezhanqieqian:{
				name:'且战且前',
				condition:{
					1:{
						info:'在移去至少两个“锋”的一个回合里杀死一名角色',
						t_name:'qiezhanqieqian',
						need_times:1,
					},
				},
			},
			xiliangxiongshi:{
				name:'西凉雄狮',
				condition:{
					1:{
						info:'在一局游戏中，使用SP马超杀死至少2名魏势力角色并获胜',
						t_name:'xiliangxiongshi',
						need_times:1,
					},
				},
			}
		},
		qun:{
			'wudehuashen':{
				name:'武的化身',
				condition:{
					1:{
						info:'使用吕布获得100场胜利',
						owner:'lvbu',
						t_name:'wudehuashen',
						need_times:100,
					},
				},
			},
			'feijiang':{
				name:'飞将',
				condition:{
					1:{
						info:'使用吕布发动方天画戟特效使用一张杀击败至少2名角色',
						t_name:'feijiang',
						need_times:2,
					},
				},
			},
			'jueshidewuji':{
				name:'绝世的舞姬',
				condition:{
					1:{
						info:'使用貂蝉获得100场胜利',
						owner:'diaochan',
						t_name:'jueshidewuji',
						need_times:100,
					},
				},
			},
			'qingguoqingcheng':{
				name:'倾国倾城',
				condition:{
					1:{
						info:'使用貂蝉在一局游戏中发动离间造成至少3名角色被击败',
						t_name:'qingguoqingcheng',
						need_times:3,
					},
				},
			},
			'shenyi':{
				name:'神医',
				condition:{
					1:{
						info:'使用华佗获得100场胜利',
						owner:'huatuo',
						t_name:'shenyi',
						need_times:100,
					},
				},
			},
			'luanshimingyi':{
				name:'乱世名医',
				condition:{
					1:{
						info:'使用华佗在一局游戏中发动急救使至少3个不同的角色脱离求桃阶段',
						t_name:'luanshimingyi',
						need_times:3,
					},
				},
			},
			'feiyangbahu':{
				name:'飞扬跋扈',
				condition:{
					1:{
						info:'使用华雄获得100场胜利',
						owner:'huaxiong',
						t_name:'feiyangbahu',
						need_times:100,
					},
				},
			},
			'yaowuyangwei':{
				name:'耀武扬威',
				condition:{
					1:{
						info:'使用华雄在一局游戏中发动耀武至少4次并获胜',
						t_name:'yaowuyangwei',
						need_times:4,
					},
				},
			},
			'yexinjianzeng':{
				name:'野心渐增',
				condition:{
					1:{
						info:'使用袁术获得100场胜利',
						owner:'yuanshu',
						t_name:'yexinjianzeng',
						need_times:100,
					},
				},
			},
			'dengjizhizun':{
				name:'登极至尊',
				condition:{
					1:{
						info:'使用袁术在一局游戏中作为反贼或内奸对主公发动妄尊至少5次并获胜',
						t_name:'dengjizhizun',
						need_times:5,
					},
				},
			},
			juwaieran:{
				name:'居外而安',
				condition:{
					1:{
						info:'一局游戏中发动问计获得4张牌并获胜',
						t_name:'juwaieran',
						need_times:5,
					},
				},
			},
			baimaxianfeng:{
				name:'白马先锋',
				condition:{
					1:{
						info:'一局游戏中发动冲阵获得6张牌并获胜',
						t_name:'baimaxianfeng',
						need_times:5,
					},
				},
			},
			youyongyoumou:{
				name:'有勇有谋',
				condition:{
					1:{
						info:'一局游戏中发动谋溃弃置掉3张闪',
						t_name:'youyongyoumou',
						need_times:1,
					},
				},
			},
			quanzhongrijiu:{
				name:'权重日久',
				condition:{
					1:{
						info:'一局游戏中发动滔乱过10次',
						t_name:'quanzhongrijiu',
						need_times:1,
					},
				},
			},
			rengongjiangjun:{
				name:'人公将军',
				condition:{
					1:{
						info:'一局游戏中发动方统造成至少6点雷电伤害',
						t_name:'rengongjiangjun',
						need_times:1,
					},
				},
			},
			pobaima:{
				name:'界桥破白马',
				condition:{
					1:{
						info:'一局游戏中使用杀造成一次不小于3点的伤害（必须通过骄恣）',
						t_name:'pobaima',
						need_times:1,
					},
				},
			},
			kuadaojiangnan:{
				name:'跨蹈江南',
				condition:{
					1:{
						info:'一局游戏中使用自守累计5次',
						t_name:'kuadaojiangnan',
						need_times:1,
					},
				},
			},
			lietuzhizong:{
				name:'裂土之宗',
				condition:{
					1:{
						info:'一局游戏中使用图射累计摸至少12张牌',
						t_name:'lietuzhizong',
						need_times:1,
					},
				},
			},
			daomazei:{
				name:'盗马贼',
				condition:{
					1:{
						info:'一局游戏中发动趫猛至少获得3张坐骑牌并获胜',
						t_name:'daomazei',
						need_times:1,
					},
				},
			},
			yongshengbiannan:{
				name:'庸生变难',
				condition:{
					1:{
						info:'一局游戏中发动兴乱获得牌6次',
						t_name:'yongshengbiannan',
						need_times:1,
					},
				},
			}
		}
	};
	if(lib.kzol_achievement==undefined) lib.kzol_achievement=[];
	for(var i in achievement){
		for(var j in achievement[i]){
			lib.kzol_achievement.push(j);
		};
	};
	var num=0;
	lib.skill._mingbugaijue={
		trigger:{
			player:'damageEnd',
		},
		forced:true,
		silent:true,
		//forceDie:true,
		filter:function(event,player){
			if(!event.card)return false;
			return ['fulei','shandian'].contains(event.card.name)&&game.me==player;
		},
		content:function(){
			if(player.isAlive()){
				var name='mingbugaijue';
				lib.config.achievement['course'][name].finished_times[name]++;
				game.saveConfig('achievement',lib.config.achievement);
			}
		},
	};
	lib.skill._tianqian={
		trigger:{
			player:'dieBegin',
		},
		silent:true,
		forceDie:true,
		filter:function(event,player){
			return game.me==player;
		},
		priority:-99999,
		content:function(){
			var evt=_status.event.getParent('damage');
			if(evt&&evt.card&&['shandian','fulei'].contains(evt.card.name)&&evt.player==game.me){
				var name='tianqian';
				lib.config.achievement['course'][name].finished_times[name]++;
			}
			if(!player.storage.startedOwnPhase){
				var name='dajiangyoude';
				lib.config.achievement['course'][name].finished_times[name]++;
			}
			if(evt&&evt.card&&get.tag(evt.card,'damage')&&get.tag(evt.card,'multitarget')){
				var name='paohui';
				lib.config.achievement['course'][name].finished_times[name]++;
				var name='dapaohui';
				lib.config.achievement['course'][name].finished_times[name]++;
			}
			game.saveConfig('achievement',lib.config.achievement);
		},
	};
	lib.skill._zgOnKill={
		trigger:{
			source:'dieBegin',
		},
		priority:-9999,
		silent:true,
		filter:function(event,player){
			return game.me==player&&event.player&&event.player!=player;
		},
		content:function(){
			if(!game.me.storage.killedPlayers){
				game.me.storage.killedPlayers=[];
			}
			if(['fan','nei'].contains(trigger.player.identity)&&game.me&&game.me.identity=='zhong'&&!game.me.storage.xianbatouchouLost){
				game.me.storage.jiezhijiezhongFilter=true;
			}
			var evt=_status.event.getParent('damage');
			if(evt.source==player&&evt.player!=player&&evt.card&&['nanman','wanjian'].contains(evt.card.name)){
				if(!player.storage._zgGroupSkill_aoeAch2)player.storage._zgGroupSkill_aoeAch2=0;
				if(player.hasSkill('_zgGroupSkill_aoeAch2')){
					player.storage._zgGroupSkill_aoeAch2++;
				}
				if(player.storage._zgGroupSkill_aoeAch2==3){
					var name='yizuzhifen';
					if(evt.card.name=='wanjian'){
						name='jianwuxufa';
					}
					lib.config.achievement['course'][name].finished_times[name]++;
				}
			}
			game.me.storage.killedPlayers.push(trigger.player);
			if(trigger.player.isEnemyOf(player)&&!player.storage.xianbatouchouLost){
				var name='xianbatouchou';
				lib.config.achievement['course'][name].finished_times[name]++;
			}
			game.saveConfig('achievement',lib.config.achievement);
		},
	};
	lib.skill._zgUseCard={
		trigger:{
			player:'useCardAfter'
		},
		silent:true,
		filter:function(event,player){
			return game.me==player;
		},
		content:function(){
			if(_status.currentPhase==player&&player.countUsed('wuzhong')==3){
				var name='hongyundangtou';
				lib.config.achievement['course'][name].finished_times[name]++;
			}
			if(trigger.card.name=='tao'){
				if(trigger.targets.contains(player)){
					var name='taowang';
					if(!player.storage.taowang)player.storage.taowang=0;
					player.storage.taowang++;
				}
				for(var i=0;i<trigger.targets.length;i++){
					if(trigger.targets[i]!=player){
						if(!player.storage.taoxian)player.storage.taoxian=0;
						player.storage.taoxian++;
					}
				}
			}
			if(trigger.card.name=='tiesuo'){
				if(!player.storage.younantongdang){
					player.storage.younantongdang=0;
				}
				for(var i=0;i<trigger.targets.length;i++){
					if(trigger.targets[i]!=player){
						player.storage.younantongdang++;
						break;
					}
				}
				if(player.storage.younantongdang==6){
					var name='younantongdang';
					lib.config.achievement['course'][name].finished_times[name]++;	
				}
			}
			game.saveConfig('achievement',lib.config.achievement);
		},
	};
	lib.skill._zgGroupSkill={
		group:["_zgGroupSkill_shirupozhu","_zgGroupSkill_tengjiabing","_zgGroupSkill_shahenda","_zgGroupSkill_daoqiangburu","_zgGroupSkill_bamenjinsuo","_zgGroupSkill_luojingxiashi","_zgGroupSkill_saiwengshima","_zgGroupSkill_dashihuaxiao","_zgGroupSkill_aoeAch","_zgGroupSkill_jueduilingdu","_zgGroupSkill_datiejiang","_zgGroupSkill_beikanchuanlema","_zgGroupSkill_heyijieyou","_zgGroupSkill_banshizajiao","_zgGroupSkill_a","_zgGroupSkill_b","_zgGroupSkill_sherenshema","_zgGroupSkill_dyingAfter","_zgGroupSkill_judge"],
		subSkill:{
			shirupozhu:{
				trigger:{
					player:'shaMiss'
				},
				silent:true,
				filter:function(event,player){
					if(!lib.skill.guanshi_skill)return false;
					if(game.me!=player)return false;
					var guanshi=lib.skill.guanshi_skill.filter;
					if(player.getEquip('guanshi')){
						return guanshi(event,player);
					}
					return false;
				},
				content:function(){
					trigger.shirupozhu2=true;
					player.addTempSkill('_zgGroupSkill_shirupozhu2',{global:'useCardAfter'});
				},
			},
			shirupozhu2:{
				trigger:{
					player:'shaHit'
				},
				silent:true,
				filter:function(event,player){
					return player==game.me&&event.shirupozhu2;
				},
				content:function(){
					if(!player.storage.shirupozhu){
						player.storage.shirupozhu=0;
					}
					player.storage.shirupozhu++;
					if(player.storage.shirupozhu==3){
						var name='shirupozhu';
						lib.config.achievement['course'][name].finished_times[name]++;
					}
					game.saveConfig('achievement',lib.config.achievement);
				},
			},
			tengjiabing:{
				trigger:{
					target:['useCardToBefore'],
				},
				silent:true,
				filter:function(event,player){
					if(!lib.skill.tengjia1)return false;
					if(game.me!=player)return false;
					var tengjia=lib.skill.tengjia1.filter;
					if(player.getEquip('tengjia')){
						return tengjia(event,player);
					}
					return false;
				},
				content:function(){
					if(!player.storage.tengjiabing){
						player.storage.tengjiabing=0;
					}
					player.storage.tengjiabing++;
					if(player.storage.tengjiabing==3){
						var name='tengjiabing';
						lib.config.achievement['course'][name].finished_times[name]++;
					}
					game.saveConfig('achievement',lib.config.achievement);
				},
			},
			tengjiabing:{
				trigger:{
					target:['useCardToBefore'],
				},
				silent:true,
				filter:function(event,player){
					if(!lib.skill.tengjia1)return false;
					if(game.me!=player)return false;
					var tengjia=lib.skill.tengjia1.filter;
					if(player.getEquip('tengjia')){
						return tengjia(event,player);
					}
					return false;
				},
				content:function(){
					if(!player.storage.tengjiabing){
						player.storage.tengjiabing=0;
					}
					player.storage.tengjiabing++;
					if(player.storage.tengjiabing==3){
						var name='tengjiabing';
						lib.config.achievement['course'][name].finished_times[name]++;
					}
					game.saveConfig('achievement',lib.config.achievement);
				},
			},
			shahenda:{
				trigger:{
					player:'useCard1'
				},
				silent:true,
				filter:function(event,player){
					if(!lib.skill.zhuge_skill)return false;
					if(game.me!=player)return false;
					var zhuge=lib.skill.zhuge_skill.filter;
					if(player.getEquip('zhuge')){
						return zhuge(event,player);
					}
					return false;
				},
				content:function(){
					if(!player.storage.shahenda){
						player.storage.shahenda=0;
					}
					player.storage.shahenda++;
					if(player.storage.shahenda==4){
						var name='shahenda';
						lib.config.achievement['course'][name].finished_times[name]++;
					}
					game.saveConfig('achievement',lib.config.achievement);
				},
			},
			daoqiangburu:{
				trigger:{
					target:'shaBegin'
				},
				priority:7,
				silent:true,
				filter:function(event,player){
					if(!lib.skill.renwang_skill)return false;
					if(game.me!=player)return false;
					var renwang=lib.skill.renwang_skill.filter;
					if(player.getEquip('renwang')){
						return renwang(event,player);
					}
					return false;
				},
				content:function(){
					if(!player.storage.daoqiangburu){
						player.storage.daoqiangburu=0;
					}
					player.storage.daoqiangburu++;
					if(player.storage.daoqiangburu==3){
						var name='daoqiangburu';
						lib.config.achievement['course'][name].finished_times[name]++;
					}
					game.saveConfig('achievement',lib.config.achievement);
				},
			},
			bamenjinsuo:{
				trigger:{
					player:['judgeEnd'],
				},
				silent:true,
				filter:function(event,player){
					return player==game.me&&event.getParent().name=='bagua_skill';
				},
				content:function(){
					if(!player.storage.bamenjinsuo){
						player.storage.bamenjinsuo=0;
					}
					if(trigger.result.judge>0){
						player.storage.bamenjinsuo++;
					}else{
						player.storage.bamenjinsuo=0;
					}
					if(player.storage.bamenjinsuo==5){
						var name='bamenjinsuo';
						lib.config.achievement['course'][name].finished_times[name]++;
					}
					game.saveConfig('achievement',lib.config.achievement);
				},
			},
			aoeAch:{
				trigger:{
					player:'useCardBefore'
				},
				forced:true,
				silent:true,
				filter:function(event,player){
					return player==game.me;
				},
				content:function(){
					if(['wanjian','nanman'].contains(trigger.card.name)){
						player.addTempSkill('_zgGroupSkill_aoeAch2',{player:'useCardAfter'});
					}
				},
			},
			aoeAch2:{
				onremove:function(player){
					delete player.storage._zgGroupSkill_aoeAch2;
				},
			},
			luojingxiashi:{
				trigger:{
					source:'damageBegin1',
				},
				silent:true,
				filter:function(event,player){
					if(!lib.skill.guding_skill)return false;
					if(game.me!=player)return false;
					var guding=lib.skill.guding_skill.filter;
					if(player.getEquip('guding')){
						return guding(event,player);
					}
					return false;
				},
				content:function(){
					if(!player.storage.luojingxiashi){
						player.storage.luojingxiashi=0;
					}
					player.storage.luojingxiashi++;
					if(player.storage.luojingxiashi==3){
						var name='luojingxiashi';
						lib.config.achievement['course'][name].finished_times[name]++;
					}
					game.saveConfig('achievement',lib.config.achievement);
				},
			},
			saiwengshima:{
				trigger:{
					player:'loseBegin',
				},
				silent:true,
				filter:function(event,player){
					if(game.me!=player)return false;
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].name=='baiyin'&&player.isDamaged()&&get.position(event.cards[i])=='e'){
							return true;
						}
					}
					return false;
				},
				content:function(){
					if(!player.storage.saiwengshima){
						player.storage.saiwengshima=0;
					}
					player.storage.saiwengshima++;
					if(player.storage.saiwengshima==2){
						var name='saiwengshima';
						lib.config.achievement['course'][name].finished_times[name]++;
					}
					game.saveConfig('achievement',lib.config.achievement);
				},
			},
			dashihuaxiao:{
				trigger:{
					player:'damageBegin4'
				},
				silent:true,
				filter:function(event,player){
					if(!lib.skill.baiyin_skill)return false;
					if(game.me!=player)return false;
					var baiyin=lib.skill.baiyin_skill.filter;
					if(player.getEquip('baiyin')&&event.num>1){
						return baiyin(event,player);
					}
					return false;
				},
				content:function(){
					if(!player.storage.dashihuaxiao){
						player.storage.dashihuaxiao=0;
					}
					player.storage.dashihuaxiao++;
					if(player.storage.dashihuaxiao==1){
						var name='dashihuaxiao';
						lib.config.achievement['course'][name].finished_times[name]++;
					}
					game.saveConfig('achievement',lib.config.achievement);
				},
			},
			jueduilingdu2:{},
			jueduilingdu:{
				trigger:{
					player:'discardPlayerCardEnd'
				},
				silent:true,
				filter:function(event,player){
					return game.me==player&&event.getParent().name=='hanbing_skill'&&!player.hasSkill('_zgGroupSkill_jueduilingdu2');
				},
				content:function(){
					player.addTempSkill('_zgGroupSkill_jueduilingdu2',{player:'useCardAfter'});
					if(!player.storage.jueduilingdu){
						player.storage.jueduilingdu=0;
					}
					player.storage.jueduilingdu++;
					if(player.storage.jueduilingdu==3){
						var name='jueduilingdu';
						lib.config.achievement['course'][name].finished_times[name]++;
					}
					game.saveConfig('achievement',lib.config.achievement);
					return;
					var skill=trigger.skill;
					if(skill=='guding_skill'){
						if(!player.storage.luojingxiashi){
							player.storage.luojingxiashi=0;
						}
						player.storage.luojingxiashi++;
						if(player.storage.luojingxiashi==3){
							var name='luojingxiashi';
							lib.config.achievement['course'][name].finished_times[name]++;
						}
					}else if(skill=='baiyin_skill'){
						
					}else if(skill=='renwang_skill'){
						if(!player.storage.daoqiangburu){
							player.storage.daoqiangburu=0;
						}
						player.storage.daoqiangburu++;
						if(player.storage.daoqiangburu==3){
							var name='dashihuaxiao';
							lib.config.achievement['course'][name].finished_times[name]++;
						}
					}else if(skill=='hanbing_skill'){
						
					}else if(skill=='zhuge_skill'){
						if(!player.storage.shahenda){
							player.storage.shahenda=0;
						}
						player.storage.shahenda++;
						if(player.storage.shahenda==4){
							var name='dashihuaxiao';
							lib.config.achievement['course'][name].finished_times[name]++;
						}
					}
				},
			},
			datiejiang:{
				trigger:{
					player:'useSkillAfter'
				},
				silent:true,
				filter:function(event,player){
					return player==game.me&&event.skill=='_chongzhu';
				},
				content:function(){
					for(var i=0;i<trigger.cards.length;i++){
						if(trigger.cards[i].name=='tiesuo'){
							var name='datiejiang';
							lib.config.achievement['course'][name].finished_times[name]++;
						}
					}
					game.saveConfig('achievement',lib.config.achievement);
				},
			},
			beikanchuanlema:{
				trigger:{
					player:'useCardBefore'
				},
				silent:true,
				filter:function(event,player){
					return player==game.me&&event.card.name=='huogong';
				},
				content:function(){
					player.addTempSkill('_zgGroupSkill_beikanchuanlema2',{player:'useCardAfter'});
				},
			},
			beikanchuanlema2:{
				init:function(player){
					if(!player.storage.beikanchuanlema){
						player.storage.beikanchuanlema=0;
					}
				},
				onremove:function(player){
					var bool=true;
					if(!player.storage._zgGroupSkill_beikanchuanlema2){
						player.storage.beikanchuanlema++;
						if(player.storage.beikanchuanlema==3){
							var name='beikanchuanlema';
							lib.config.achievement['course'][name].finished_times[name]++;
							game.saveConfig('achievement',lib.config.achievement);
						}
					}
					delete player.storage._zgGroupSkill_beikanchuanlema2;
				},
			},
			heyijieyou:{
				trigger:{
					player:'recoverEnd'
				},
				silent:true,
				filter:function(event,player){
					return player==game.me&&event.card&&event.card.name=='jiu';
				},
				content:function(){
					if(!player.storage.heyijieyou){
						player.storage.heyijieyou=0;
					}
					player.storage.heyijieyou++;
					if(player.storage.heyijieyou==2){
						var name='heyijieyou';
						lib.config.achievement['course'][name].finished_times[name]++;
						game.saveConfig('achievement',lib.config.achievement);
					}
				},
			},
			banshizajiao:{
				trigger:{
					player:'damageEnd'
				},
				silent:true,
				filter:function(event,player){
					if(player!=game.me)return false;
					if(!event.card)return false;
					if(get.owner(event.card)!=player)return false;
					return event.card.name=='juedou'&&event.source&&event.source!=player;
				},
				content:function(){
					var name='banshizajiao';
					lib.config.achievement['course'][name].finished_times[name]++;
					game.saveConfig('achievement',lib.config.achievement);
				},
			},
			judge:{
				trigger:{
					player:'judgeAfter'
				},
				forced:true,
				silent:true,
				filter:function(event,player){
					if(player!=game.me)return false;
					if(!event.card)return false;
					if(!event.result.card)return false;
					if(['bingliang','lebu'].contains(event.card.name)){
						return true;
					}
					return false;
				},
				content:function(){
					if(player.storage.bingjingliangzu==undefined){
						player.storage.bingjingliangzu=0;
						player.storage.jichanglulu=0;
						player.storage.anlegong=0;
						player.storage.jileshijie=0;
					}
					var str;
					if(trigger.card.name=='bingliang'){
						if(get.suit(trigger.result.card)=='club'){
							player.storage.bingjingliangzu++;
							str='bingjingliangzu';
						}else{
							player.storage.jichanglulu++;
							str='jichanglulu';
						}
					}else{
						if(get.suit(trigger.result.card)=='heart'){
							player.storage.jileshijie++;
							str='jileshijie';
						}else{
							player.storage.anlegong++;
							str='anlegong';
						}
					}
					if(str){
						if(player.storage.bingjingliangzu==3){
							lib.config.achievement['course'][str].finished_times[str]++;
						}
						if(player.storage.anlegong==3){
							lib.config.achievement['course'][str].finished_times[str]++;
						}
						if(player.storage.jileshijie==3){
							lib.config.achievement['course'][str].finished_times[str]++;
						}
						if(player.storage.jichanglulu==3){
							lib.config.achievement['course'][str].finished_times[str]++;
						}
					}
					game.saveConfig('achievement',lib.config.achievement);
				},
			},
			sherenshema:{
				trigger:{
					player:'useSkillAfter'
				},
				forced:true,
				silent:true,
				filter:function(event,player){
					return player==game.me&&event.skill=='qilin_skill';
				},
				content:function(){
					game.log('嗯嗯嗯');
				},
			},
			dyingAfter:{
				trigger:{
					player:'dyingAfter',
				},
				forced:true,
				silent:true,
				filter:function(event,player){
					return player==game.me;
				},
				content:function(){
					if(!player.storage.gouyancanchuan){
						player.storage.gouyancanchuan=0;
					}
					player.storage.gouyancanchuan++;
					if(player.storage.gouyancanchuan==5){
						var name='gouyancanchuan';
						lib.config.achievement['course'][name].finished_times[name]++;
						game.saveConfig('achievement',lib.config.achievement);
					}
				},
			},
			a:{
				trigger:{
					player:'phaseBegin',
				},
				filter:function(event,player){
					return player==game.me;
				},
				forced:true,
				silent:true,
				content:function(){
					player.storage.startedOwnPhase=true;
				},
			},
			b:{
				trigger:{
					player:'phaseEnd',
				},
				filter:function(event,player){
					return player==game.me;
				},
				forced:true,
				silent:true,
				content:function(){
					player.storage.xianbatouchouLost=true;
				},
			}
		}
	};
	
	lib.skill._zgGroupSkill2={
		group:[
			"_zgGroupSkill2_juwaieran",
			"_zgGroupSkill2_baimaxianfeng",
			"_zgGroupSkill2_fengdaowang",
			"_zgGroupSkill2_youyongyoumou",
			"_zgGroupSkill2_yihesu",
			"_zgGroupSkill2_yinjingjudian",
			"_zgGroupSkill2_rengongjiangjun",
			"_zgGroupSkill2_zhancaochugen",
			"_zgGroupSkill2_pobaima",
			"_zgGroupSkill2_bingzheng",
			"_zgGroupSkill2_buxiquming",
			"_zgGroupSkill2_danjiqianli",
			"_zgGroupSkill2_yongliefenli",
			"_zgGroupSkill2_yongliefenli2",
			"_zgGroupSkill2_tianshuiqiliner",
			"_zgGroupSkill2_kuadaojiangnan",
			"_zgGroupSkill2_lietuzhizong",
			"_zgGroupSkill2_yongshengbiannan",
			"_zgGroupSkill2_daomazei",
			"_zgGroupSkill2_wuximanwang",
			"_zgGroupSkill2_wuximanwang2",
			"_zgGroupSkill2_zhengnanxianfeng1",
			"_zgGroupSkill2_zhengnanxianfeng2",
			"_zgGroupSkill2_zhengnanxianfeng3",
			"_zgGroupSkill2_tuhao",
			"_zgGroupSkill2_shixuechengxing",
			"_zgGroupSkill2_shixuechengxing2",
			"_zgGroupSkill2_beidiwang",
			"_zgGroupSkill2_chouliaojuelun",
			"_zgGroupSkill2_xingjiachizu",
			"_zgGroupSkill2_qiezhanqieqian",
		],
		subSkill:{
			sanchaohuchen:{
				trigger:{
					player:'useCard'
				},
				silent:true,
				filter:function(event,player){
					return event.skill=='chunlao2';
				},
				content:function(){
					if(!player.storage.sanchaohuchen){
						player.storage.sanchaohuchen=0;
					}
					player.storage.sanchaohuchen+=1;
					if(player.storage.sanchaohuchen==3){
						var name='sanchaohuchen';
						lib.config.achievement['wu'][name].finished_times[name]++;
						game.saveConfig('achievement',lib.config.achievement);
					}
				},
			},
			qiezhanqieqian:{
				trigger:{player:'phaseZhunbeiBegin'},
				silent:true,
				priority:999,
				filter:function(event,player){
					return player.storage.tuifeng&&player.storage.tuifeng.length>=2;
				},
				content:function(){
					player.addTempSkill('_zgGroupSkill2_qiezhanqieqian2');
				}
			},
			qiezhanqieqian2:{
				trigger:{
					source:'dieBegin'
				},
				silent:true,
				priority:-9999,
				filter:function(event,player){
					return !player.storage.qiezhanqieqian2;
				},
				content:function(){
					player.storage.qiezhanqieqian2=true;
				},
				onremove:function(player){
					if(player.storage.qiezhanqieqian2){
						var name='qiezhanqieqian';
						lib.config.achievement['wei'][name].finished_times[name]++;
						game.saveConfig('achievement',lib.config.achievement);
					}
					delete player.storage.qiezhanqieqian2;
				},
			},
			xingjiachizu:{
				trigger:{
					source:'dying',
				},
				silent:true,
				filter:function(event,player){
					return event.reason&&event.reason.getParent().name=='duwu';
				},
				content:function(){
					if(!player.storage.xingjiachizu){
						player.storage.xingjiachizu=0;
					}
					player.storage.xingjiachizu+=1;
					if(player.storage.xingjiachizu==2){
						var name='xingjiachizu';
						lib.config.achievement['wu'][name].finished_times[name]++;
						game.saveConfig('achievement',lib.config.achievement);
					}
				},
			},
			yinpinghou:{
				trigger:{
					player:['useCard'],
				},
				silent:true,
				filter:function(event,player){
					return ['weijing_sha','weijing_shan'].contains(event.skill);
				},
				content:function(){
					if(trigger.card.name=='sha'){
						if(!player.storage.yinpinghou_sha){
							player.storage.yinpinghou_sha=0;
						}
						player.storage.yinpinghou_sha++;
					}else{
						if(!player.storage.yinpinghou_shan){
							player.storage.yinpinghou_shan=0;
						}
						player.storage.yinpinghou_shan++;
					}
				},
			},
			chouliaojuelun:{
				trigger:{global:['useCardCancelled']},
				silent:true,
				filter:function(event,player){
					return player.storage.chouliaojuelun2;
				},
				content:function(){
					if(!player.storage.chouliaojuelun){
						player.storage.chouliaojuelun=0;
					}
					player.storage.chouliaojuelun+=1;
					delete player.storage.chouliaojuelun2;
				},
			},
			beidiwang:{
				trigger:{
					source:'damageEnd'
				},
				silent:true,
				filter:function(event,player){
					return player.hasSkill('zhanjue')&&event.parent.skill=='zhanjue';
				},
				content:function(){
					player.addTempSkillI('_zgGroupSkill2_beidiwang2',{player:'useCardAfter'});
				},
			},
			beidiwang2:{
				trigger:{
					source:'dieBegin'
				},
				priority:-9999,
				silent:true,
				filter:function(event,player){
					return true;
				},
				content:function(){
					if(!player.storage.beidiwang){
						player.storage.beidiwang=0;
					}
					player.storage.beidiwang+=1;
					player.removeSkill('_zgGroupSkill2_beidiwang2');
				},
			},
			shixuechengxing:{
				trigger:{
					player:'recoverBegin'
				},
				silent:true,
				filter:function(event,player){
					return player.storage.shixuechengxing2;
				},
				content:function(){
					if(!player.storage.shixuechengxing){
						player.storage.shixuechengxing=0;
					}
					player.storage.shixuechengxing+=1;
					delete player.storage.shixuechengxing2;
					if(player.storage.shixuechengxing==3){
						var name='shixuechengxing';
						lib.config.achievement['shu'][name].finished_times[name]++;
						game.saveConfig('achievement',lib.config.achievement);
					}
				},
			},
			shixuechengxing2:{
				trigger:{
					player:'useCardBefore'
				},
				silent:true,
				filter:function(){
					return true;
				},
				content:function(){
					delete player.storage.shixuechengxing2;
				},
			},
			tuhao:{
				trigger:{
					global:'gainBegin',
				},
				silent:true,
				filter:function(event,player){
					return event.cards&&event.cards.length==1&&get.number(event.cards[0])==13&&event.source==player&&event.getParent().name=='ziyuan';
				},
				content:function(){
					if(!player.storage.tuhao){
						player.storage.tuhao=0;
					}
					player.storage.tuhao+=1;
					if(player.storage.tuhao==3){
						var name='tuhao';
						lib.config.achievement['shu'][name].finished_times[name]++;
						game.saveConfig('achievement',lib.config.achievement);
					}
				},
			},
			zhengnanxianfeng1:{
				trigger:{player:'useCard'},
				filter:function(event,player){
					return event.card&&event.card.name=='sha'&&event.cards&&
						event.cards.length==1&&get.color(event.cards[0])=='red';
				},
				silent:true,
				content:function(){
					player.storage.zhengnanxianfeng1=true;
				},
			},
			zhengnanxianfeng2:{
				trigger:{player:'phaseUseBegin'},
				silent:true,
				filter:function(kagari){
					return kagari.xindangxian==true;
				},
				content:function(){
					player.storage.zhengnanxianfeng2=true;
				},
			},
			zhengnanxianfeng3:{
				trigger:{player:'gainPlayerCardEnd'},
				silent:true,
				filter:function(event,player){
					return event.getParent().name=='zhiman';
				},
				content:function(){
					player.storage.zhengnanxianfeng3=true;
				},
			},
			wuximanwang:{
				trigger:{
					player:'gainEnd'
				},
				silent:true,
				filter:function(event,player){
					return event.getParent().name=='draw'&&event.getParent(2).name=='gzjili';
				},
				content:function(){
					if(!player.storage.wuximanwang){
						player.storage.wuximanwang=0;
					}
					game.log(trigger.cards.length);
					var old=player.storage.wuximanwang;
					player.storage.wuximanwang+=trigger.cards.length;
					if(player.storage.wuximanwang>=5&&old<5){
						var name='wuximanwang';
						lib.config.achievement['shu'][name].finished_times[name]++;
						game.saveConfig('achievement',lib.config.achievement);
					}
				},
			},
			wuximanwang2:{
				trigger:{
					global:'phaseAfter'
				},
				silent:true,
				filter:function(event,player){
					return true;
				},
				content:function(){
					player.storage.wuximanwang=0;
				},
			},
			daomazei:{
				trigger:{
					player:'gainEnd'
				},
				silent:true,
				filter:function(event,player){
					return player.storage.daomazei2&&event.cards&&event.cards.length&&event.cards.length==1&&['equip3','equip4'].contains(get.subtype(event.cards[0]));
				},
				content:function(){
					if(!player.storage.daomazei){
						player.storage.daomazei=0;
					}
					player.storage.daomazei+=1;
					if(player.storage.daomazei==3){
						var name='daomazei';
						lib.config.achievement['qun'][name].finished_times[name]++;
						game.saveConfig('achievement',lib.config.achievement);
					}
					delete player.storage.daomazei2;
				},
			},
			yongshengbiannan:{
				trigger:{
					player:'gainEnd'
				},
				silent:true,
				filter:function(event,player){
					return event.getParent().name=='xinfu_xingluan';
				},
				content:function(){
					if(!player.storage.yongshengbiannan){
						player.storage.yongshengbiannan=0;
					}
					var old=player.storage.yongshengbiannan;
					player.storage.yongshengbiannan+=1;
					if(player.storage.yongshengbiannan==6){
						var name='yongshengbiannan';
						lib.config.achievement['qun'][name].finished_times[name]++;
						game.saveConfig('achievement',lib.config.achievement);
					}
				},
			},
			lietuzhizong:{
				trigger:{
					player:'gainEnd'
				},
				silent:true,
				filter:function(event,player){
					return event.getParent().name=='draw'&&event.getParent(2).name=='xinfu_tushe';
				},
				content:function(){
					if(!player.storage.lietuzhizong){
						player.storage.lietuzhizong=0;
					}
					var old=player.storage.lietuzhizong;
					player.storage.lietuzhizong+=trigger.cards.length;
					if(player.storage.lietuzhizong>=14&&old<14){
						var name='lietuzhizong';
						lib.config.achievement['qun'][name].finished_times[name]++;
						game.saveConfig('achievement',lib.config.achievement);
					}
				},
			},
			tianshuiqiliner:{
				trigger:{
					player:'gainEnd'
				},
				silent:true,
				filter:function(event,player){
					return player.storage.tianshuiqiliner2;
				},
				content:function(){
					if(!player.storage.tianshuiqiliner){
						player.storage.tianshuiqiliner=0;
					}
					player.storage.tianshuiqiliner+=1;
					delete player.storage.tianshuiqiliner2;
				},
			},
			kuadaojiangnan:{
				trigger:{
					player:'phaseDrawBegin'
				},
				silent:true,
				filter:function(event,player){
					return player.getStat('skill').zishou;
				},
				content:function(){
					if(!player.storage.kuadaojiangnan){
						player.storage.kuadaojiangnan=0;
					}
					player.storage.kuadaojiangnan+=1;
					if(player.storage.kuadaojiangnan>=1){
						var name='kuadaojiangnan';
						lib.config.achievement['qun'][name].finished_times[name]++;
					}
					game.saveConfig('achievement',lib.config.achievement);
				},
			},
			yongliefenli:{
				trigger:{
					source:'dieBegin'
				},
				priority:-9999,
				silent:true,
				filter:function(event,player){
					var evt=event.getParent('damage');
					if(evt.source==player&&!evt.card){
						if(evt.yongliefenli2)return true;
					}
					return false;
				},
				content:function(){
					if(!player.storage.yongliefenli){
						player.storage.yongliefenli=0;
					}
					player.storage.yongliefenli+=1;
				},
			},
			yongliefenli2:{
				trigger:{
					source:'damageBegin'
				},
				silent:true,
				filter:function(event,player){
					return player.storage.yongliefenli2;
				},
				content:function(){
					trigger.yongliefenli2=true;
					delete player.storage.yongliefenli2;
				},
			},
			danjiqianli:{
				trigger:{
					player:'useCardAfter'
				},
				silent:true,
				filter:function(event,player){
					return (event.getParent('nuzhan1').name||event.getParent('nuzhan2').name)&&event.card.name=='sha'&&event.cards&&event.cards.length==1;
				},
				content:function(){
					if(!player.storage.danjiqianli){
						player.storage.danjiqianli=0;
					}
					player.storage.danjiqianli+=1;
				},
			},
			buxiquming:{
				trigger:{
					player:'dyingAfter'
				},
				silent:true,
				filter:function(event,player){
					if(player.name.indexOf('zhoutai')==-1)return false;
					return player.storage.buqu||player.storage.gzbuqu;
				},
				content:function(){
					var length=0;
					if(player.storage.buqu){
						length=player.storage.buqu.length;
					}else{
						length=player.storage.gzbuqu.length;
					}
					if(length<12)return;
					if(!player.storage.buxiquming){
						player.storage.buxiquming=0;
					}
					player.storage.buxiquming+=1;
					if(player.storage.buxiquming>=1){
						var name='buxiquming';
						lib.config.achievement['wu'][name].finished_times[name]++;
					}
					delete player.storage.bingzheng2;
					game.saveConfig('achievement',lib.config.achievement);
				},
			},
			bingzheng:{
				trigger:{
					player:'gainEnd'
				},
				silent:true,
				filter:function(event,player){
					return  event.getParent().name=='draw'&&player.storage.bingzheng2;
				},
				content:function(){
					if(!player.storage.bingzheng){
						player.storage.bingzheng=0;
					}
					player.storage.bingzheng+=1;
					if(player.storage.bingzheng>=3){
						var name='bingzheng';
						lib.config.achievement['shu'][name].finished_times[name]++;
					}
					delete player.storage.bingzheng2;
					game.saveConfig('achievement',lib.config.achievement);
				},
			},
			tangbidangche:{
				trigger:{
					player:'dieBegin'
				},
				priority:-9999,
				silent:true,
				filter:function(event,player){
					return player.storage.gushe>=7;
				},
				content:function(){
					if(!player.storage.tangbidangche){
						player.storage.tangbidangche=0;
					}
					player.storage.tangbidangche+=1;
					if(player.storage.tangbidangche>=1){
						var name='tangbidangche';
						lib.config.achievement['wei'][name].finished_times[name]++;
					}
					game.saveConfig('achievement',lib.config.achievement);
				},
			},
			pobaima:{
				trigger:{
					source:'damageBegin1',
				},
				priority:288,
				forced:true,
				silent:true,
				filter:function(event,player){
					return player.isMaxHandcard(true)&&player.hasSkill('jiaozi')&&event.card&&event.card.name=='sha';
				},
				content:function(){
					trigger.pobaima2=true;
					player.addTempSkill('_zgGroupSkill2_pobaima2',{global:'damageAfter'});
				},
			},
			pobaima2:{
				trigger:{
					source:'damageEnd'
				},
				silent:true,
				filter:function(event,player){
					return event.pobaima2&&event.num>=3;
				},
				content:function(){
					if(!player.storage.pobaima){
						player.storage.pobaima=0;
					}
					player.storage.pobaima+=1;
					if(player.storage.pobaima>=1){
						var name='pobaima';
						lib.config.achievement['qun'][name].finished_times[name]++;
					}
					game.saveConfig('achievement',lib.config.achievement);
				},
			},
			zhancaochugen:{
				trigger:{
					global:'loseMaxHpEnd',
				},
				silent:true,
				filter:function(event,player){
					var source=event.getParent().player;
					return game.me==player&&source==player&&event.getParent('oldqianxi').name;
				},
				content:function(){
					if(!trigger.player.storage.zhancaochugen2){
						trigger.player.storage.zhancaochugen2=0;
					}
					trigger.player.storage.zhancaochugen2+=trigger.num;
					if(trigger.player.storage.zhancaochugen2>=3){
						player.storage.zhancaochugen=true;
					}
				},
			},
			rengongjiangjun:{
				trigger:{
					source:'damageEnd'
				},
				silent:true,
				filter:function(event,player){
					return game.me==player&&player.storage.rengongjiangjun2;
				},
				content:function(){
					if(!player.storage.rengongjiangjun){
						player.storage.rengongjiangjun=0;
					}
					player.storage.rengongjiangjun+=trigger.num;
					if(player.storage.rengongjiangjun>=6){
						var name='rengongjiangjun';
						lib.config.achievement['qun'][name].finished_times[name]++;
					}
					delete player.storage.rengongjiangjun2;
					game.saveConfig('achievement',lib.config.achievement);
				},
			},
			yinjingjudian:{
				trigger:{
					player:'chooseToCompareEnd',
				},
				silent:true,
				filter:function(event,player){
					if(player!=game.me)return false;
					if(event.getParent().name=='zhuandui'){
						if(player==event.player){
							return event.num1>event.num2;
						}else{
							return event.num1<event.num2;
						}
					}
					return false;
				},
				content:function(){
					if(!player.storage.yinjingjudian){
						player.storage.yinjingjudian=0;
					}
					player.storage.yinjingjudian++;
					if(player.storage.yinjingjudian==3){
						var name='yinjingjudian';
						lib.config.achievement['shu'][name].finished_times[name]++;
					}
					game.saveConfig('achievement',lib.config.achievement);
				},
			},
			yihesu:{
				trigger:{
					player:'gainEnd'
				},
				silent:true,
				filter:function(event,player){
					return ['danlao'].contains(event.getParent(2).name)&&event.getParent().name=='draw';
				},
				content:function(){
					if(!player.storage.yihesu){
						player.storage.yihesu=0;
					}
					player.storage.yihesu++;
					if(player.storage.yihesu==3){
						var name='yihesu';
						lib.config.achievement['wei'][name].finished_times[name]++;
					}
					game.saveConfig('achievement',lib.config.achievement);
				}
			},
			youyongyoumou:{
				trigger:{
					global:'discard',
				},
				silent:true,
				filter:function(event,player){
					return player.storage.youyongyoumou2&&event.cards[0].name=='shan'&&game.me==player;
				},
				content:function(){
					if(!player.storage.youyongyoumou){
						player.storage.youyongyoumou=0;
					}
					player.storage.youyongyoumou++;
					if(player.storage.youyongyoumou==3){
						var name='youyongyoumou';
						lib.config.achievement['qun'][name].finished_times[name]++;
					}
					game.saveConfig('achievement',lib.config.achievement);
					delete player.storage.youyongyoumou2;
				}
			},
			fengdaowang:{
				trigger:{
					player:'gainEnd'
				},
				silent:true,
				filter:function(event,player){
					return event.cards&&['kaikang'].contains(event.getParent(2).name)&&get.type(event.cards[0])=='equip'&&event.getParent().name=='draw';
				},
				content:function(){
					if(!player.storage.fengdaowang){
						player.storage.fengdaowang=0;
					}
					player.storage.fengdaowang++;
					if(player.storage.fengdaowang==3){
						var name='fengdaowang';
						lib.config.achievement['wei'][name].finished_times[name]++;
					}
					game.saveConfig('achievement',lib.config.achievement);
				},
			},
			baimaxianfeng:{
				trigger:{
					player:'gainEnd',
				},
				silent:true,
				filter:function(event,player){
					return ['chongzhen1','chongzhen2'].contains(event.getParent(2).name);
				},
				content:function(){
					if(!player.storage.baimaxianfeng){
						player.storage.baimaxianfeng=0;
					}
					player.storage.baimaxianfeng++;
					if(player.storage.baimaxianfeng==6){
						var name='baimaxianfeng';
						lib.config.achievement['qun'][name].finished_times[name]++;
					}
					game.saveConfig('achievement',lib.config.achievement);
				},
			},
			juwaieran:{
				trigger:{player:'phaseUseBegin'},
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player&&current.countCards('he');
					})&&player==game.me;
				},
				silent:true,
				content:function(){
					player.addTempSkill('_zgGroupSkill2_juwaieran2',{player:'gainEnd'});
				},
			},
			juwaieran2:{
				trigger:{
					player:'chooseTargetEnd'
				},
				forced:true,
				silent:true,
				filter:function(event,player){
					return event.result&&event.result.bool&&event.result.targets;
				},
				content:function(){
					player.storage.juwaieran2=true;
				},
				onremove:function(player){
					if(player.storage.juwaieran2){
						if(!player.storage.juwaieran){
							player.storage.juwaieran=0;
						}
						player.storage.juwaieran++;
					}
					delete player.storage.juwaieran2;
				},
			}
		}
	};
	lib.skill._zgDamage={
		trigger:{
			source:'damageEnd',
			player:'damageEnd',
		},
		silent:true,
		filter:function(event,player){
			return game.me==player;
		},
		content:function(){
			if(get.mode()=='identity'&&trigger.source&&trigger.player){
				if(trigger.source==player&&trigger.player!=player){
					if(player.identity=='zhu'){
						if(trigger.player.identity=='zhong')player.storage.binggongwusiFail=true;
					}
				}
			}
			if(trigger.nature=='fire'&&trigger.player==player&&player.getEquip('tengjia')){
				if(!player.storage.rehuoshangshen)player.storage.rehuoshangshen=0;
				player.storage.rehuoshangshen++;
				if(player.storage.rehuoshangshen==3){
					var name='rehuoshangshen';
					lib.config.achievement['course'][name].finished_times[name]++;
					game.saveConfig('achievement',lib.config.achievement);
				}
			}
			if(trigger.source==player){
				if(trigger.card){
					if(trigger.card.name=='huogong'){
						if(player.hasSkill('_zgGroupSkill_beikanchuanlema2')){
							player.storage._zgGroupSkill_beikanchuanlema2=true;
						}
						if(!player.storage.gongqibubei)player.storage.gongqibubei=0;
						player.storage.gongqibubei++;
						if(player.storage.gongqibubei==3){
							var name='gongqibubei';
							lib.config.achievement['course'][name].finished_times[name]++;
							game.saveConfig('achievement',lib.config.achievement);
						}
					}
					var evt=_status.event.getParent('useCard');
					if(trigger.card.name=='sha'&&evt&&evt.jiu==true){
						if(!player.storage.weiyoudukang)player.storage.weiyoudukang=0;
						player.storage.weiyoudukang++;
						if(player.storage.weiyoudukang==3){
							var name='weiyoudukang';
							lib.config.achievement['course'][name].finished_times[name]++;
							game.saveConfig('achievement',lib.config.achievement);
						}
					}
					if(trigger.card.name=='juedou'){
						var name='yiqitao';
						lib.config.achievement['course'][name].finished_times[name]++;
						game.saveConfig('achievement',lib.config.achievement);
					}
				}
			}
		},
	};
	lib.skill._zgGameStart={
		trigger:{
			global:'gameStart',
			player:'enterGame'
		},
		silent:true,
		filter:function(event,player){
			return game.me==player;
		},
		content:function(){
			player.addSkill('_zgGroupSkill');
			player.addSkill('_zgGroupSkill2');
		},
	};
	game.addGlobalSkill('_zgGameStart');
	game.addGlobalSkill('_tianqian');
	game.addGlobalSkill('_zgUseCard');
	game.addGlobalSkill('_zgOnKill');
	game.addGlobalSkill('_zgDamage');
	game.addGlobalSkill('_mingbugaijue');
	for(var i in achievement){
		var a=achievement[i];
		
		for(var j in a){
			var b=a[j];
			if(!lib.config.achievement[i][a]){
				num++;
				delete lib.config.achievement[i][a];
			}
			if(lib.config.achievement[i][j]==undefined){
				num++;
				lib.config.achievement[i][j]={};
				lib.config.achievement[i][j].finished=false;
				lib.config.achievement[i][j].finished_times={};
				if(!b.condition){
					console.log(b);
				}
				for(var k in b.condition){
					lib.config.achievement[i][j].finished_times[b.condition[k].t_name]=0;
				};
			};
		};
	};
	for(var i in lib.config.achievement){
		var type=lib.config.achievement[i];
		for(var ach in type){
			if(!achievement[i][ach]){
				delete lib.config.achievement[i][ach];
				num++;
			}
		}
	};
	if(num>0) game.saveConfig('achievement',lib.config.achievement);
	game.qucikCompleteAchMsg=function(name){
		if(!name)return;
		//var color=['Red','Orange','Yellow','Green','Purple','Blue','Lime','Turquoise'].randomGet();
		var color=['Red','Orange','Yellow','Green','Blue','Lime','Turquoise'].randomGet();
		if(game.say1) game.say1('完成战功：<font color='+color+'>'+name+'</font>',22);
	};
	game.kzol_zgcj_check=function(){
		for(var i in lib.config.achievement){
			var a=lib.config.achievement[i];
			for(var j in a){
				var b=a[j];
				if(lib.config.gameRecord){
					if(lib.config.gameRecord.identity&&lib.config.gameRecord.identity.data){
						var bool=false;
						if(lib.config.gameRecord.identity.data.zhong){
							var zhongWins=lib.config.gameRecord.identity.data.zhong[0];
							bool=true;
						};
						if(lib.config.gameRecord.identity.data.fan){
							var fanWins=lib.config.gameRecord.identity.data.fan[0];
							bool=true;
						};
						if(lib.config.gameRecord.identity.data.nei){
							var neiWins=lib.config.gameRecord.identity.data.nei[0];
							bool=true;
						};
						if(lib.config.gameRecord.identity.data.zhu){
							var zhuWins=lib.config.gameRecord.identity.data.zhu[0];
							bool=true;
						};
						if(bool==true){
							if(j=='zhongxingenggeng'){
								if(zhongWins==undefined){
									lib.config.achievement[i][j].finished_times[j]=0;
								}else{
									lib.config.achievement[i][j].finished_times[j]=zhongWins;
								};
							}else if(j=='caotoutianzi'){
								if(fanWins==undefined){
									lib.config.achievement[i][j].finished_times[j]=0;
								}else{
									lib.config.achievement[i][j].finished_times[j]=fanWins;
								};
							}else if(j=='yunchouweiwo'){
								if(neiWins==undefined){
									lib.config.achievement[i][j].finished_times[j]=0;
								}else{
									lib.config.achievement[i][j].finished_times[j]=neiWins;
								};
							}else if(j=='junlintianxia'){
								if(zhuWins==undefined){
									lib.config.achievement[i][j].finished_times[j]=0;
								}else{
									lib.config.achievement[i][j].finished_times[j]=zhuWins;
								};
							};
						};
					}
				}
				if(b.finished!=true){
					var bool=true;
					for(var k in b.finished_times){
						var need_times=Infinity;
						for(var l in achievement[i][j].condition){
							if(achievement[i][j].condition[l].t_name==k) need_times=achievement[i][j].condition[l].need_times;
						};
						if(b.finished_times[k]<need_times) bool=false;
					};
					if(bool==true){
						lib.config.achievement[i][j].finished=true;
						lib.config.achievement[i][j].finished_data=date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate()+'日  '+date.getHours()+'时'+date.getMinutes()+'分'+date.getSeconds()+'秒';
						game.saveConfig('achievement',lib.config.achievement);
						game.qucikCompleteAchMsg(achievement[i][j].name);
						//game.say1('完成战功：'+achievement[i][j].name);
					};
				};
			};
		};
	};
	game.kzol_zgcj_check();
	lib.onover.push(function(result){
		var player=game.me;
		if(!game.me)return;
		for(var i in lib.config.achievement.course){
			var a=lib.config.achievement.course[i];
			for(var j in a.finished_times){
				if(j=='chuchumaolu'){
					lib.config.achievement.course[i].finished_times[j]+=1;
				}
				if(j=='wuliedi'&&game.me.name=='re_sunjian'){
					var poluNum=0;
					for(var k=0;k<game.me.stat.length;k++){
						if(game.me.stat[k].skill.repolu!=undefined) poluNum+=game.me.stat[k].skill.repolu;
					}
					if(poluNum>=3){
						lib.config.achievement.course[i].finished_times[j]+=1;
					}
				}
				if(j=='yinpinghou'&&result==true&&player.storage.yinpinghou_sha>=3&&player.storage.yinpinghou_shan>=3){
					lib.config.achievement.course[i].finished_times[j]+=1;
				}
				if(j=='xianzhongqiusheng'&&result==true&&player.hp<=1&&player.name.indexOf('xiahouba')!=-1){
					lib.config.achievement.course[i].finished_times[j]+=1;
				}
				if(j=='zhengnanxianfeng'&&['ol_guansuo','guansuo'].contains(player.name)){
					if(player.stroage.zhengnanxianfeng1&&player.stroage.zhengnanxianfeng2&&player.stroage.zhengnanxianfeng3){
						lib.config.achievement.course[i].finished_times[j]+=1;
					}
				}
				if(j=='tianshuiqiliner'&&result==true&&player.storage.tianshuiqiliner>=5){
					lib.config.achievement.course[i].finished_times[j]+=1;
				}
				if(j=='beidiwang'&&result==true&&player.storage.beidiwang>=2){
					lib.config.achievement.course[i].finished_times[j]+=1;
				}
				if(j=='danjiqianli'&&result==true&&player.storage.danjiqianli>=3){
					lib.config.achievement.course[i].finished_times[j]+=1;
				}
				if(j=='yongliefenli'&&result==true&&player.storage.yongliefenli>=2){
					lib.config.achievement.course[i].finished_times[j]+=1;
				}
				if(j=='yongliefenli'&&result==true&&player.storage.yongliefenli>=2){
					lib.config.achievement.course[i].finished_times[j]+=1;
				}
				if(j=='jiezhijiezhong'&&game.me&&result==true&&game.me.storage.jiezhijiezhongFilter){
					lib.config.achievement.course[i].finished_times[j]+=1;
				}
				if(j=='changshengjiangjun'){
					if(result==false){
						lib.config.achievement.course[i].finished_times[j]=0;
					}else if(result==true){
						lib.config.achievement.course[i].finished_times[j]+=1;
					}
				}
				if(j=='gangtiefangxian'&&result==true){
					if(player.storage.gangtiefangxian>=5){
						lib.config.achievement.course[i].finished_times[j]+=1;
					}
				}
				if(j=='zhancaochugen'&&result==true&&player.storage.zhancaochugen){
					lib.config.achievement.course[i].finished_times[j]+=1;
				}
				if(j=='luanchenzeizi'&&get.mode()=='identity'){
					var players=game.me.storage.killedPlayers;
					if(players&&game.me.identity=='fan'){
						var num=0;
						for(var n=0;n<players.length;n++){
							if(['zhong','nei'].contains(players[n].identity))num++;
						}
						if(num>=2)lib.config.achievement.course[i].finished_times[j]+=1;
					}
				}
				if(j=='lashoucuihua'){
					var players=game.me.storage.killedPlayers;
					if(players){
						var num=0;
						for(var n=0;n<players.length;n++){
							if(players[n].sex=='female')num++;
						}
						if(num>=2)lib.config.achievement.course[i].finished_times[j]+=1;
					}
				}
				if(j=='juwaieran'&&player.storage.juwaieran>=4&&result==true){
					lib.config.achievement.course[i].finished_times[j]+=1;
				}
				if(j=='taowang'&&game.me&&game.me.storage.taowang>=5){
					lib.config.achievement.course[i].finished_times[j]+=1;
				}
				if(j=='taoxian'&&game.me&&game.me.storage.taoxian>=5){
					lib.config.achievement.course[i].finished_times[j]+=1;
				}
				if(j=='quanzhongrijiu'&&(player.storage.xintaoluan||player.storage.taoluan)){
					if(player.storage.xintaoluan.length>=10||player.storage.taoluan.length>=10){
						lib.config.achievement.course[i].finished_times[j]+=1;
					}
				}
				if(j=='binggongwusi'&&get.mode()=='identity'){
					if(!game.me)continue;
					if(game.me.identity!='zhu')continue;
					var damaged=game.me.storage.binggongwusiFail;
					if(!damaged)lib.config.achievement.course[i].finished_times[j]+=1;
				}
				if(j=='juechufengsheng'&&get.mode()=='identity'){
					if(!game.me)continue;
					if(game.me.identity!='fan')continue;
					var bo=true;
					var bo2=false;
					var bo3=false;
					for(var p=0;p<game.dead.length;p++){
						//有反贼且
						if(game.dead[p].identity=='fan'&&game.me!=game.players[p])bo3=true;
						//忠臣不能死亡
						if(game.dead[p].identity=='zhong'&&game.players[p]!=game.me)bo=false;
					}
					for(var p=0;p<game.players.length;p++){
						//忠臣必须有存活
						if(game.players[p].identity=='zhong'&&game.me!=game.players[p])bo2=true;
						//反贼不能有存活
						if(game.players[p].identity=='fan'&&game.me!=game.players[p])bo=false;
					}
					if(bo&&bo2&&bo3)lib.config.achievement.course[i].finished_times[j]+=1;
				}
				if(j=='zhishengzhiming'){
					if(!game.me)continue;
					if(game.me.identity!='zhu')continue;
					var bo=true;
					var bo2=false;
					var bo3=false;
					for(var p=0;p<game.dead.length;p++){
						if(['nei','fan'].contains(game.dead[p].identity)&&game.me!=game.players[p])bo3=true;
						if(game.dead[p].identity=='zhong'&&game.players[p]!=game.me)bo=false;
					}
					for(var p=0;p<game.players.length;p++){
						if(game.players[p].identity=='zhong'&&game.me!=game.players[p])bo2=true;
						if(['nei','fan'].contains(game.players[p].identity)&&game.me!=game.players[p])bo=false;
					}
					if(bo&&bo2&&bo3)lib.config.achievement.course[i].finished_times[j]+=1;
				}
				if(j=='tiandaoweiyi'&&get.mode()=='identity'){
					if(!game.me)continue;
					if(game.me.identity!='zhu')continue;
					var bo=true;
					var bo2=false;
					for(var p=0;p<game.players.length;p++){
						if(game.players[p].identity=='zhong'&&game.me!=game.players[p])bo=false;
					}
					for(var p=0;p<game.dead.length;p++){
						if(['zhong'].contains(game.dead[p].identity)&&game.me!=game.players[p])bo2=true;
					}
					var players=game.me.storage.killedPlayers;
					if(players){
						var num=0;
						for(var n=0;n<players.length;n++){
							num++;
						}
					}
					if(num>=2&&bo&&bo2)lib.config.achievement.course[i].finished_times[j]+=1;
				}
				if(j=='chidanzhongxin'&&get.mode()=='identity'){
					if(!game.me)continue;
					var players=game.me.storage.killedPlayers;
					if(players&&game.me.identity=='zhong'){
						var num=0;
						for(var n=0;n<players.length;n++){
							if(['fan','nei'].contains(players[n].identity))num++;
						}
						if(num>=2)lib.config.achievement.course[i].finished_times[j]+=1;
					}
				}
				if(j=='laomoushensuan'&&get.mode()=='identity'){
					if(!game.me)continue;
					if(game.me.identity!='nei')continue;
					var players=game.me.storage.killedPlayers;
					if(players){
						var num=0;
						for(var n=0;n<players.length;n++){
							if(['fan','zhong'].contains(players[n].identity))num++;
						}
						if(num>=4)lib.config.achievement.course[i].finished_times[j]+=1;
					}
				}
				if(j=='hengsaoqianjun'&&result==true){
					if(!game.me)continue;
					var players=game.me.storage.killedPlayers;
					if(players){
						var num=0;
						for(var n=0;n<players.length;n++){
							num++;
						}
						if(num>=7)lib.config.achievement.course[i].finished_times[j]+=1;
					}
				}
				if(j=='chenxuerru'&&game.me&&game.me.identity=='fan'){
					if(!game.me)continue;
					var players=game.me.storage.killedPlayers;
					if(players&&!game.me.storage.xianbatouchouLost){
						var num=0;
						for(var n=0;n<players.length;n++){
							if(['zhu'].contains(players[n].identity))num++;
						}
						if(num>=1)lib.config.achievement.course[i].finished_times[j]+=1;
					}
				}
				if(j=='qikaidesheng'&&result==true){
					if(!game.me)continue;
					var xianbatouchouLost=game.me.storage.xianbatouchouLost;
					if(xianbatouchouLost)continue;
					lib.config.achievement.course[i].finished_times[j]+=1;
				}
				if(j=='zhongganyidan'&&result==true){
					if(!game.me)continue;
					if(game.me.isAlive()&&game.me.identity=='zhong'){
						if(game.zhu&&game.zhu.isHealthy()){
							lib.config.achievement.course[i].finished_times[j]+=1;
						}
					}
				}
				if(j=='pingfandajiang'&&get.mode()=='identity'){
					if(!game.me)continue;
					var players=game.me.storage.killedPlayers;
					if(players&&game.me.identity=='zhong'){
						var num=0;
						for(var n=0;n<players.length;n++){
							if(['fan'].contains(players[n].identity))num++;
						}
						if(num>=4)lib.config.achievement.course[i].finished_times[j]+=1;
					}
				}
				if(j=='xiliangxiongshi'&&result==true){
					var players=game.me.storage.killedPlayers;
					if(players){
						var num=0;
						for(var n=0;n<players.length;n++){
							if(['wei'].contains(players[n].group))num++;
						}
						if(num>=2)lib.config.achievement.course[i].finished_times[j]+=1;
					}
				}
				if(result==true&&j=='chuchangshengguo'){
					lib.config.achievement.course[i].finished_times[j]+=1;
				}
				if(result==true&&j=='weiwoduzun'&&game.me&&game.me.identity=='nei'){
					lib.config.achievement.course[i].finished_times[j]+=1;
				}
			};
		};
		for(var i in achievement){
			var a=achievement[i];
			for(var j in a){
				for(var k in a[j].condition){
					if(result==true&&a[j].condition[k].owner!=undefined&&(game.me.name.indexOf(a[j].condition[k].owner)!=-1||(game.me.name2!=undefined&&game.me.name2.indexOf(a[j].condition[k].owner)!=-1))){
						lib.config.achievement[i][j].finished_times[a[j].condition[k].t_name]+=1;
					};
				};
			};
		};
		if(_status.achievement1!=undefined){
			for(var i in _status.achievement1){
				for(var j in lib.config.achievement){
					var a=lib.config.achievement[j];
					for(var k in a){
						for(var l in a[k].finished_times){
							if(l==i&&lib.config.achievement[j][k].finished_times[l]<_status.achievement1[i]) lib.config.achievement[j][k].finished_times[l]=_status.achievement1[i];
						};
					};
				};
			};
		};
		if(_status.achievement2!=undefined&&result==true){
			for(var i in _status.achievement2){
				for(var j in lib.config.achievement){
					var a=lib.config.achievement[j];
					for(var k in a){
						for(var l in a[k].finished_times){
							if(l==i&&lib.config.achievement[j][k].finished_times[l]<_status.achievement2[i]) lib.config.achievement[j][k].finished_times[l]=_status.achievement2[i];
						};
					};
				};
			};
		};
		game.saveConfig('achievement',lib.config.achievement);
		game.kzol_zgcj_check();
		delete _status.achievement1;
		delete _status.achievement2;
	});
	lib.extensionMenu.extension_扩展ol['zgcj']={
		"name":"<b><p align=center><span style=\"font-size:18px\">------战功------</span></b>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol['zgcj_show']={
		"name":"显示可完成战功",
		"init":false,
		"intro":"开启后在武将技能界面显示该武将可以完成的战功"
    };
	lib.extensionMenu.extension_扩展ol['zgcj_showName']={
		"name":"显示战功名",
		"init":true,
		"intro":"开启后在战功界面的战功上显示战功名"
    };
	lib.extensionMenu.extension_扩展ol['zgcj_check']={
		name:'查看战功 <div>&gt;</div>',
		onclick:function(){
			if(game.扩展ol_menu_config==undefined) ui.click.configMenu();
			if(lib.config['extension_扩展ol_zgcj_stop']!=false) game.pause2();
			var e2;
			var dialog1={};
			var dialog2={};
			var info=ui.create.div('.menu');
			info.style.transition='left 0s,top 0s,opacity .3s';
			info.style.width='312px';
			info.style['pointer-events']='none';
			info.style['text-align']='left';
			info.style.animation='fadeShow .3s';
			info.style['-webkit-animation']='fadeShow .3s';
			info.style['z-index']=499;
			dialog1['info']=info;
			/*
			for(var i=0;i<info.childNodes.length;i++){
				info.removeChild(info.childNodes[i]);
			};
			*/
			var background1=ui.create.dialog('hidden');
			background1.style.height='calc(100%)';
			background1.style.width='calc(100%)';
			background1.style.left='0px';
			background1.style.top='0px';
			ui.window.appendChild(background1);
			background1.hide();
			dialog2.background1=background1;
			var div1=ui.create.div();
			div1.style.height='calc(100%)';
			div1.style.width='calc(100%)';
			div1.style.left='0px';
			div1.style.top='0px';
			div1.link=i;
			div1.onclick=function(){
				for(var i in dialog2){
					dialog2[i].hide();
				};
				setTimeout(function(){
					for(var i in dialog1){
						if(i=='info') continue;
						dialog1[i].show();
					};
				},250);
			};;
			background1.appendChild(div1);
			var list_achievements=[];
			for(var i in lib.config.achievement){
				list_achievements.push(i);
			};
			var func_create=function(){
				var i=list_achievements[0];
				var a=lib.config.achievement[i];
				var bg_new=ui.create.dialog('hidden');
				bg_new.classList.add('popped');
				bg_new.classList.add('static');
				bg_new.style.height='455px';
				bg_new.style.width='530px';
				bg_new.style.left='calc(50% - 265px)';
				bg_new.style.top='calc(50% - 227.5px)';
				bg_new.style['box-shadow']='none';
				bg_new.style['background']='none';
				bg_new.setBackgroundImage('extension/扩展ol/bg_new.png');
				bg_new.style.backgroundSize="100% 100%";
				var b1=ui.create.div();
				b1.style.height='360px';
				b1.style.width='505px';
				b1.style.left='12.5px';
				b1.style.top='72px';
				//b1.style.borderRadius='3px';
				b1.style['text-align']='left';
				b1.style['overflow-x']='hidden';
				b1.style['overflow-y']='scroll';
				lib.setScroll(b1);
				var list_achievement=[];
				for(var j in a){
					list_achievement.push(j);
				};
				var interval=setInterval(function(){
					var num=9;
					if(num>list_achievement.length) num=list_achievement.length;
					for(var b=0;b<num;b++){
						var j=list_achievement[0];
						var item=ui.create.div('.card.fullskin');
						item.style.height='50px';
						item.style.width='50px';
						item.style.top='-8px';
						item.style['margin-left']='3px';
						item.style['margin-right']='3px';
						item.setBackgroundImage('extension/扩展ol/'+j+'.jpg');
						item.style.backgroundSize="cover";
						if(a[j].finished!=true){
							item.style['-webkit-filter']='grayscale(100%)';
							item.style.filter='grayscale(100%)';
							item.style.opacity=0.8;
							//item.classList.add('out');
							//item.classList.add('dead');
						};
						item.link=i;
						item.link1=j;
						item.link2=a;
						item.onmouseover=function(){
							var i=this.link;
							var j=this.link1;
							var a=this.link2;
							var a1=achievement[i][j];
							var str='';
							str+='<span style="font-size:18px;font-weight:600">战功：'+a1.name+'</span><br>';
							if(a[j].finished==true){
								str+='状态：已完成<br>完成时间：'+a[j].finished_data;
							}else{
								str+='状态：未完成';
							};
							str+='<br>完成条件：';
							for(var x in a1.condition){
								var c=a1.condition[x];
								if(a[j].finished==true){
									str+='<br>&nbsp&nbsp'+c.info+'<br>--进度：'+c.need_times+'/'+c.need_times;
								}else{
									str+='<br>&nbsp&nbsp'+c.info+'<br>--进度：'+a[j].finished_times[c.t_name]+'/'+c.need_times;
								};
							};
							str='<span style="font-family:shousha">'+str+'</span>';
							//if(info.content.firstChild==undefined) info.addText(str,false);
							//if(info.content.firstChild!=undefined&&info.content.firstChild.firstChild!=undefined) info.content.firstChild.firstChild.innerHTML=str;
							info.innerHTML=str;
							ui.window.appendChild(info);
							//info.setBackgroundImage('extension/扩展ol/Background3.jpg');
							//info.style.backgroundSize="100% 100%";
							info.hide();
							info.style.left=(event.clientX/game.documentZoom+10+document.body.scrollLeft-156)+'px';
							info.style.top=(event.clientY/game.documentZoom+document.body.scrollTop+20)+'px';
							//info.style.height=(info.content.firstChild.firstChild.offsetHeight+34)+'px';
							//info.style.height=(info.firstChild.offsetHeight+4)+'px';
							if(info.offsetTop+info.offsetHeight>ui.window.offsetTop+ui.window.offsetHeight){
								info.style.top=(event.clientY/game.documentZoom+document.body.scrollTop-info.offsetHeight)+'px';
							};
							info.show();
						};
						item.onmousemove=function(){
							info.style.left=(event.clientX/game.documentZoom+10+document.body.scrollLeft-156)+'px';
							info.style.top=(event.clientY/game.documentZoom+document.body.scrollTop+20)+'px';
							if(info.offsetTop+info.offsetHeight>ui.window.offsetTop+ui.window.offsetHeight){
								info.style.top=(event.clientY/game.documentZoom+document.body.scrollTop-info.offsetHeight)+'px';
							};
						};
						item.onmouseout=function(){
							info.hide();
						};
						b1.appendChild(item);
						if(lib.config.extension_扩展ol_zgcj_showName==true){
							var div_name=ui.create.div();
							div_name.style.width='20px';
							div_name.style.bottom='0px';
							div_name.style.right='0px';
							div_name.style['font-size']='10px';
							div_name.style['text-align']='center';
							div_name.style['font-family']='shousha';
							div_name.style.color='white';
							div_name.style['text-shadow']='black 0 0 2px';
							div_name.innerHTML='<span style="font-weight:600;">'+achievement[i][j].name+'</span>';
							item.appendChild(div_name);
						};
						list_achievement.remove(list_achievement[0]);
						if(list_achievement.length==0){
							clearInterval(interval);
						};
					};
				},100);
				bg_new.appendChild(b1);
				var t2=ui.create.div();
				t2.style.height='20px';
				t2.style.width='144px';
				t2.style.left='calc(50% - 73px)';
				t2.style.top='40px';
				t2.innerHTML='<span style="color:#FFFFFF;font-size:20px;font-weight:600;font-family:shousha">战功</span>';
				bg_new.appendChild(t2);
				ui.window.appendChild(bg_new);
				bg_new.hide();
				dialog2[i]=bg_new;
				list_achievements.remove(i);
				if(list_achievements.length>0){
					func_create();
				};
			};
			func_create();
			var n=0;
			for(var i in lib.config.achievement){
				n++;
			};
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
			b.style.height='315px';
			//if(lib.device) b.style.height='calc(56%)';
			b.style.width=(n*110+40)+'px';
			b.style.left='calc(50% - '+((n*110+40)/2)+'px)';
			b.style.top='calc(25%)';
			b.classList.add('popped');
			b.classList.add('static');
			b.setBackgroundImage('extension/扩展ol/Background1.jpg');
			b.style.backgroundSize="cover";
			ui.window.appendChild(b);
			dialog1['b']=b;
			var t=ui.create.dialog('hidden','<span style="color:#FFFFFF;font-size:23px;font-weight:600;font-family:xinwei">战功</span>');
			t.style.height='55px';
			t.style.width='150px';
			t.style.left='calc(50% - 75px)';
			t.style.top='calc(25% - 37px)';
			t.classList.add('popped');
			t.classList.add('static');
			t.setBackgroundImage('extension/扩展ol/Background2.jpg');
			t.style.backgroundSize="cover";
			ui.window.appendChild(t);
			dialog1['t']=t;
			var n1=-1;
			for(var i in lib.config.achievement){
				n1++;
				var a=lib.config.achievement[i];
				var d=ui.create.dialog('hidden');
				d.style.height='200px';
				d.style.width='100px';
				d.style.left='calc(50% - '+((n*110+30)/2-(20+n1*110))+'px)';
				d.style.top='calc(30%)';
				d.classList.add('popped');
				d.classList.add('static');
				d.setBackgroundImage('extension/扩展ol/'+i+'.jpg');
				ui.window.appendChild(d);
				dialog1[i]=d;
				var e1=ui.create.div(function(){
					var bg_new=dialog2[this.link];
					for(var i in dialog1){
						dialog1[i].hide();
					};
					setTimeout(function(){
						bg_new.show();
						background1.show();
					},250);
				});
				e1.style.height='200px';
				e1.style.width='100px';
				e1.style.left='-10px';
				e1.style.top='-10px';
				e1.link=i;
				d.add(e1);
				var d1=ui.create.dialog('hidden');
				d1.style.height='55px';
				d1.style.width='100px';
				d1.style.left='calc(50% - '+((n*110+30)/2-(20+n1*110))+'px)';
				d1.style.top='calc(30% + 215px)';
				d1.classList.add('popped');
				d1.classList.add('static');
				d1.setBackgroundImage('extension/扩展ol/Background.jpg');
				d1.style.backgroundSize="cover";
				var num=0;
				var num1=0;
				for(var i in a){
					num++;
					if(a[i].finished==true) num1++;
				};
				d1.add('<span style="color:#FFFFFF">'+num1+'/'+num+'<span>');
				ui.window.appendChild(d1);
				dialog1[i+'_count']=d1;
			};
			var div=ui.create.div();
			div.style.height='calc(100%)';
			div.style.width='calc(100%)';
			div.style.left='0px';
			div.style.top='0px';
			setTimeout(function(){
				div.onclick=function(){
					if(game.扩展ol_menu_config!=undefined) delete game.扩展ol_menu_config;
					if(lib.config['extension_扩展ol_zgcj_stop']!=false) game.resume2();
					for(var i in dialog2){
						dialog2[i].delete();
						//delete dialog2[i];
					};
					for(var i in dialog1){
						dialog1[i].delete();
						//delete dialog1[i];
					};
				};
			},500);
			background.appendChild(div);
		},
		clear:true
	};
	lib.extensionMenu.extension_扩展ol['zgcj_arrange']={
		name:"<span style='text-decoration: underline'>整理战功</span>",
		onclick:function(){
			if(!lib.config.achievement) return ;
			var reachievements={};
			for(var i in achievement){
				if(lib.config.achievement[i]==undefined) continue;
				reachievements[i]={};
				var achievements=achievement[i];
				for(var j in achievements){
					var achievement1=lib.config.achievement[i][j];
					if(achievement1==undefined) continue;
					reachievements[i][j]=achievement1;
				};
			};
			lib.config.achievement=reachievements;
			game.saveConfig('achievement',lib.config.achievement);
			game.say1('整理完成');
		},
		clear:true
	};
	lib.extensionMenu.extension_扩展ol['zgcj_enable']={
		"name":"关闭标包战功记录",
		"init":false,
		"intro":"标包武将技能出现BUG时开启<br>关闭此选项后才能完成标包战功"
    };
	lib.extensionMenu.extension_扩展ol['zgcj_stop']={
		"name":"打开战功界面时暂停游戏",
		"init":true
    };
	if(lib.config.extension_扩展ol_zgcj_enable!=true){
			lib.skill.xinjianxiong={
				audio:'jianxiong',
				alter:true,
				trigger:{player:'damageEnd'},
				filter:function(event,player){
					return get.itemtype(event.cards)=='cards'&&get.position(event.cards[0])=='d';
				},
				content:function(){
					player.gain(trigger.cards);
					player.$gain2(trigger.cards);
					if(player==game.me&&((player.name.indexOf('caocao')!=-1||player.name.indexOf('曹操')!=-1)||(player.name2!=undefined&&(player.name2.indexOf('caocao')!=-1||player.name2.indexOf('曹操')!=-1)))&&lib.config.achievement.wei.luanshidejianxiong.finished!=true){
						if(_status.achievement1==undefined) _status.achievement1={};
						for(var i=0;i<trigger.cards.length;i++){
							if(trigger.cards[i].name=='nanman'){
								if(_status.achievement1.luanshidejianxiong1==undefined) _status.achievement1.luanshidejianxiong1=0;
								_status.achievement1.luanshidejianxiong1++;
							};
							if(trigger.cards[i].name=='wanjian'){
								if(_status.achievement1.luanshidejianxiong2==undefined) _status.achievement1.luanshidejianxiong2=0;
								_status.achievement1.luanshidejianxiong2++;
							};
						};
					};
					if(get.is.altered('xinjianxiong')){
						player.draw();
					};
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
							if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
							if(get.tag(card,'damage')) return [1,0.55];
						}
					}
				}
			};
			lib.skill.jianxiong={
				audio:2,
				trigger:{player:'damageEnd'},
				filter:function(event,player){
					return get.itemtype(event.cards)=='cards'&&get.position(event.cards[0])=='d';
				},
				content:function(){
					player.gain(trigger.cards);
					player.$gain2(trigger.cards);
					if(player==game.me&&((player.name.indexOf('caocao')!=-1||player.name.indexOf('曹操')!=-1)||(player.name2!=undefined&&(player.name2.indexOf('caocao')!=-1||player.name2.indexOf('曹操')!=-1)))&&lib.config.achievement.wei.luanshidejianxiong.finished!=true){
						if(_status.achievement1==undefined) _status.achievement1={};
						for(var i=0;i<trigger.cards.length;i++){
							if(trigger.cards[i].name=='nanman'){
								if(_status.achievement1.luanshidejianxiong1==undefined) _status.achievement1.luanshidejianxiong1=0;
								_status.achievement1.luanshidejianxiong1++;
							};
							if(trigger.cards[i].name=='wanjian'){
								if(_status.achievement1.luanshidejianxiong2==undefined) _status.achievement1.luanshidejianxiong2=0;
								_status.achievement1.luanshidejianxiong2++;
							};
						};
					};
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
							if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
							if(get.tag(card,'damage')) return [1,0.55];
						}
					}
				}
			};
           lib.skill.new_rejianxiong={
                audio:"rejianxiong",
                trigger:{
                    player:"damageEnd",
                },
                content:function (){
					"step 0"
					if(get.itemtype(trigger.cards)=='cards'&&get.position(trigger.cards[0])=='d'){
						player.gain(trigger.cards,"gain2");
						if(player==game.me&&((player.name.indexOf('caocao')!=-1||player.name.indexOf('曹操')!=-1)||(player.name2!=undefined&&(player.name2.indexOf('caocao')!=-1||player.name2.indexOf('曹操')!=-1)))&&lib.config.achievement.wei.luanshidejianxiong.finished!=true){
							if(_status.achievement1==undefined) _status.achievement1={};
							for(var i=0;i<trigger.cards.length;i++){
								if(trigger.cards[i].name=='nanman'){
									if(_status.achievement1.luanshidejianxiong1==undefined) _status.achievement1.luanshidejianxiong1=0;
									_status.achievement1.luanshidejianxiong1++;
								};
								if(trigger.cards[i].name=='wanjian'){
									if(_status.achievement1.luanshidejianxiong2==undefined) _status.achievement1.luanshidejianxiong2=0;
									_status.achievement1.luanshidejianxiong2++;
								};
							};
						};
					}
					player.draw('nodelay');
				},
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
							if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
							if(get.tag(card,'damage')&&player!=target) return [1,0.6];
						},
                    },
                },
            };
			lib.skill.tuxi={
				audio:2,
				trigger:{player:'phaseDrawBefore'},
				direct:true,
				content:function(){
					"step 0"
					var check;
					var i,num=game.countPlayer(function(current){
						return current!=player&&current.countCards('h')&&get.attitude(player,current)<=0;
					});
					check=(num>=2);
					player.chooseTarget(get.prompt('tuxi'),[1,2],function(card,player,target){
						return target.countCards('h')>0&&player!=target;
					},function(target){
						if(!_status.event.aicheck) return 0;
						var att=get.attitude(_status.event.player,target);
						if(target.hasSkill('tuntian')) return att/10;
						return 1-att;
					}).set('aicheck',check);
					"step 1"
					if(result.bool){
						if(player==game.me&&((player.name.indexOf('zhangliao')!=-1||
						player.name.indexOf('张辽')!=-1)||
						(player.name2!=undefined&&(player.name2.indexOf('zhangliao')!=-1||
						player.name2.indexOf('张辽')!=-1)))&&
						lib.config.achievement.wei.shenqiwubei.finished!=true){
							if(_status.achievement1==undefined) _status.achievement1={};
							if(_status.achievement1.shenqiwubei==undefined) _status.achievement1.shenqiwubei=0;
							_status.achievement1.shenqiwubei++;
						};
						player.logSkill('tuxi',result.targets);
						player.gainMultiple(result.targets);
						trigger.cancel();
					}
					else{
						event.finish();
					}
					"step 2"
					game.delay();
				},
				ai:{
					threaten:2,
					expose:0.3
				}
			};
            lib.skill.new_retuxi={
                audio:"retuxi",
                trigger:{
                    player:"phaseDrawBegin",
                },
                direct:true,
                priority:-10,
                filter:function (event){
					return event.num>0;
				},
                content:function (){
					"step 0"
					player.chooseTarget(get.prompt('new_retuxi'),[1,trigger.num],function(card,player,target){
						return target.countCards('h')>0&&player!=target;
					},function(target){
						var att=get.attitude(_status.event.player,target);
						if(target.hasSkill('tuntian')) return att/10;
						return 1-att;
					});
					"step 1"
					if(result.bool){
						if(player==game.me&&((player.name.indexOf('zhangliao')!=-1||
						player.name.indexOf('张辽')!=-1)||
						(player.name2!=undefined&&(player.name2.indexOf('zhangliao')!=-1||
						player.name2.indexOf('张辽')!=-1)))&&
						lib.config.achievement.wei.shenqiwubei.finished!=true){
							if(_status.achievement1==undefined) _status.achievement1={};
							if(_status.achievement1.shenqiwubei==undefined) _status.achievement1.shenqiwubei=0;
							_status.achievement1.shenqiwubei++;
						};
						player.logSkill('new_retuxi',result.targets);
						player.gainMultiple(result.targets);
						trigger.num-=result.targets.length;
					}
					else{
						event.finish();
					}
					"step 2"
					if(trigger.num<=0) game.delay();
				},
                ai:{
                    threaten:1.6,
                    expose:0.2,
                },
            };
		lib.skill._achieve_gl={
			trigger:{
				global:"dieBefore",
			},
			forced:true,
			popup:false,
			filter:function(event,player){
				return player.storage.achieve_gl==true;;
			},
			content:function (){
				if(player==game.me&&((player.name.indexOf('xiahoudun')!=-1||
				player.name.indexOf('夏侯惇')!=-1)||
				(player.name2!=undefined&&(player.name2.indexOf('xiahoudun')!=-1||
				player.name2.indexOf('夏侯惇')!=-1)))&&
				lib.config.achievement.wei.liangbaijushang.finished!=true){
					if(_status.achievement1==undefined) _status.achievement1={};
					if(_status.achievement1.liangbaijushang==undefined) _status.achievement1.liangbaijushang=0;
					_status.achievement1.liangbaijushang++;
				};
			},
		 };
			lib.skill.ganglie={
				audio:2,
				trigger:{player:'damageEnd'},
				filter:function(event,player){
					return (event.source!=undefined);
				},
				check:function(event,player){
					return (get.attitude(player,event.source)<=0);
				},
				logTarget:'source',
				content:function(){
					"step 0"
					player.judge(function(card){
						if(get.suit(card)=='heart') return -2;
						return 2;
					})
					"step 1"
					if(result.judge<2){
						event.finish();return;
					}
					trigger.source.chooseToDiscard(2).set('ai',function(card){
						if(card.name=='tao') return -10;
						if(card.name=='jiu'&&_status.event.player.hp==1) return -10;
						return get.unuseful(card)+2.5*(5-get.owner(card).hp);
					});
					"step 2"
					if(result.bool==false){
						player.storage.achieve_gl=true;
						trigger.source.damage();
					}else{
						event.finish();
					};
					"step 3"
					delete player.storage.achieve_gl;
				},
				ai:{
					maixie_defend:true,
					effect:{
						target:function(card,player,target){
							if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
							return 0.8;
							// if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
						}
					}
				}
			};
			lib.skill.reganglie={
				audio:2,
				trigger:{player:'damageEnd'},
				filter:function(event,player){
					return (event.source!=undefined&&event.num>0);
				},
				check:function(event,player){
					return (get.attitude(player,event.source)<=0);
				},
				logTarget:'source',
				content:function(){
					"step 0"
					event.num=trigger.num;
					"step 1"
					player.judge(function(card){
						if(get.color(card)=='red') return 1;
						return 0;
					});
					"step 2"
					if(result.color=='black'){
						if(trigger.source.countCards('he')){
							player.discardPlayerCard(trigger.source,'he',true);
						}
					}
					else if(trigger.source.isIn()){
						player.storage.achieve_gl=true;
						trigger.source.damage();
					}
					"step 3"
					delete player.storage.achieve_gl;
					event.num--;
					if(event.num>0){
						player.chooseBool(get.prompt2('reganglie'));
					}else{
						event.finish();
					}
					"step 4"
					if(result.bool){
						player.logSkill('reganglie',trigger.source);
						event.goto(1);
					}
				},
				ai:{
					maixie_defend:true,
					expose:0.4
				}
			};
			lib.skill.luoyi={
				audio:2,
				trigger:{player:'phaseDrawBegin'},
				check:function(event,player){
					if(player.countCards('h')<3) return false;
					if(!player.hasSha()) return false;
					return game.hasPlayer(function(current){
						return get.attitude(player,current)<0&&player.canUse('sha',current);
					});
				},
				content:function(){
					player.addTempSkill('luoyi2','phaseEnd');
					trigger.num--;
					if(player==game.me&&((player.name.indexOf('xuzhu')!=-1||
					player.name.indexOf('许褚')!=-1)||
					(player.name2!=undefined&&(player.name2.indexOf('xuzhu')!=-1||
					player.name2.indexOf('许褚')!=-1)))&&
					lib.config.achievement.wei.mawoleng.finished!=true){
						if(_status.achievement1==undefined) _status.achievement1={};
						if(_status.achievement1.mawoleng1==undefined) _status.achievement1.mawoleng1=0;
						_status.achievement1.mawoleng1++;
					};
				}
			};
            lib.skill.new_reluoyi={
                audio:"reluoyi",
                trigger:{
                    player:"phaseDrawBegin",
                },
                content:function (){
					"step 0"
					if(player==game.me&&((player.name.indexOf('xuzhu')!=-1||
					player.name.indexOf('许褚')!=-1)||
					(player.name2!=undefined&&(player.name2.indexOf('xuzhu')!=-1||
					player.name2.indexOf('许褚')!=-1)))&&
					lib.config.achievement.wei.mawoleng.finished!=true){
						if(_status.achievement1==undefined) _status.achievement1={};
						if(_status.achievement1.mawoleng1==undefined) _status.achievement1.mawoleng1=0;
						_status.achievement1.mawoleng1++;
					};
					event.cards=get.cards(3);
					player.showCards(event.cards,'裸衣');
					player.chooseBool("是否放弃摸牌？").ai=function(event,player){
						var num=3
						for(var i=0;i<event.cards.length;i++){
							if(get.type(event.cards[i])!='basic'&&event.cards[i].name!='juedou'&&
								(get.type(event.cards[i])!='equip'||get.subtype(event.cards[i])!='equip1')){
								num--;
							}
						}
						return num>1
					};
					"step 1"
					if(result.bool){
					for(var i=0;i<cards.length;i++){
						if(get.type(cards[i])!='basic'&&cards[i].name!='juedou'&&
							(get.type(cards[i])!='equip'||get.subtype(cards[i])!='equip1')){
							cards[i].discard();
							cards.splice(i--,1);
						}
					}
					player.gain(cards,'gain2');
					player.addTempSkill('reluoyi2',{player:'phaseBefore'});
					trigger.cancel();
					}
					else for(var i=0;i<cards.length;i++){
							cards[i].discard();
					}
				},
            };
		lib.skill._achieve_ly1={
			trigger:{
				player:"useCardBefore",
			},
			forced:true,
			popup:false,
			filter:function(event,player){
				return event.card!=undefined&&(event.card.name=='sha'||event.card.name=='juedou')&&(player.hasSkill('luoyi2')||player.hasSkill('reluoyi2'));
			},
			content:function (){
				player.storage.achieve_ly1=true;
			},
		 };
		lib.skill._achieve_ly2={
			trigger:{
				player:"useCardAfter",
			},
			forced:true,
			popup:false,
			filter:function(event,player){
				return player.storage.achieve_ly1==true;
			},
			content:function (){
				delete player.storage.achieve_ly1;
			},
		 };
		lib.skill._achieve_ly3={
			trigger:{
				player:"dieBefore",
			},
			forced:true,
			popup:false,
			filter:function(event,player){
				return event.source!=undefined&&(event.source.hasSkill('luoyi2')||event.source.hasSkill('reluoyi2'))&&event.source.storage.achieve_ly1==true;
			},
			content:function (){
				var pl=trigger.source;
				if(pl==game.me&&((pl.name.indexOf('xuzhu')!=-1||
				pl.name.indexOf('许褚')!=-1)||
				(pl.name2!=undefined&&(pl.name2.indexOf('xuzhu')!=-1||
				pl.name2.indexOf('许褚')!=-1)))&&
				lib.config.achievement.wei.mawoleng.finished!=true){
					if(_status.achievement1==undefined) _status.achievement1={};
					if(_status.achievement1.mawoleng2==undefined) _status.achievement1.mawoleng2=0;
					_status.achievement1.mawoleng2++;
				};
			},
		 };
			lib.skill.yiji={
				audio:2,
				trigger:{player:'damageEnd'},
				frequent:true,
				filter:function(event){
					return (event.num>0)
				},
				content:function(){
					"step 0"
					event.cards=get.cards(2*trigger.num);
					"step 1"
					if(event.cards.length>1){
						player.chooseCardButton('将“遗计”牌分配给任意角色',true,event.cards,[1,event.cards.length]).set('ai',function(button){
							if(ui.selected.buttons.length==0) return 1;
							return 0;
						});
					}
					else if(event.cards.length==1){
						event._result={links:event.cards.slice(0),bool:true};
					}
					else{
						event.finish();
					}
					"step 2"
					if(result.bool){
						for(var i=0;i<result.links.length;i++){
							event.cards.remove(result.links[i]);
						}
						event.togive=result.links.slice(0);
						player.chooseTarget('将'+get.translation(result.links)+'交给一名角色',true).set('ai',function(target){
							var att=get.attitude(_status.event.player,target);
							if(_status.event.enemy){
								return -att;
							}
							else if(att>0){
								return att/(1+target.countCards('h'));
							}
							else{
								return att/100;
							}
						}).set('enemy',get.value(event.togive[0])<0);
					}
					"step 3"
					if(result.targets.length){
						if(player==game.me&&((player.name.indexOf('guojia')!=-1||
						player.name.indexOf('郭嘉')!=-1)||
						(player.name2!=undefined&&(player.name2.indexOf('guojia')!=-1||
						player.name2.indexOf('郭嘉')!=-1)))&&
						lib.config.achievement.wei.buyiyuli.finished!=true&&
						result.targets[0]!=player){
							if(_status.achievement1==undefined) _status.achievement1={};
							if(_status.achievement1.buyiyuli==undefined) _status.achievement1.buyiyuli=0;
							_status.achievement1.buyiyuli++;
						};
						result.targets[0].gain(event.togive,'draw');
						player.line(result.targets[0],'green');
						game.log(result.targets[0],'获得了'+get.cnNumber(event.togive.length)+'张牌');
						event.goto(1);
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(!target.hasFriend()) return;
								var num=1;
								if(get.attitude(player,target)>0){
									if(player.needsToDiscard()){
										num=0.7;
									}
									else{
										num=0.5;
									}
								}
								if(target.hp>=4) return [1,num*2];
								if(target.hp==3) return [1,num*1.5];
								if(target.hp==2) return [1,num*0.5];
							}
						}
					}
				}
			};
           lib.skill.new_reyiji={
                audio:"reyiji",
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                filter:function (event){
					return (event.num>0)
				},
                content:function (){
					"step 0"
					event.count=1;
					"step 1"
					player.draw(2);
					event.given=0;
					"step 2"
					player.chooseCardTarget({
						filterCard:true,
						selectCard:[1,2-event.given],
						filterTarget:function(card,player,target){
							return player!=target&&target!=event.temp;
						},
						ai1:function(card){
							if(ui.selected.cards.length>0) return -1;
							if(card.name=='du') return 20;
							return (_status.event.player.countCards('h')-_status.event.player.hp);
						},
						ai2:function(target){
							var att=get.attitude(_status.event.player,target);
							if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
								if(target.hasSkillTag('nodu')) return 0;
								return 1-att;
							}
							return att-4;
						},
						prompt:'请选择要送人的卡牌'
					});
					"step 3"
					if(result.bool){
						if(player==game.me&&((player.name.indexOf('guojia')!=-1||
						player.name.indexOf('郭嘉')!=-1)||
						(player.name2!=undefined&&(player.name2.indexOf('guojia')!=-1||
						player.name2.indexOf('郭嘉')!=-1)))&&
						lib.config.achievement.wei.buyiyuli.finished!=true&&
						result.targets[0]!=player){
							if(_status.achievement1==undefined) _status.achievement1={};
							if(_status.achievement1.buyiyuli==undefined) _status.achievement1.buyiyuli=0;
							_status.achievement1.buyiyuli++;
						};
						player.$giveAuto(result.cards,result.targets[0]);
						player.line(result.targets,'green');
						result.targets[0].gain(result.cards);
						event.given+=result.cards.length;
						if(event.given<2){
							event.temp=result.targets[0];
							event.goto(2);
						}
						else if(event.count<trigger.num){
							delete event.temp;
							event.count++;
							event.goto(1);
						}
					}
					else if(event.count<trigger.num){
						delete event.temp;
						event.num=1;
						event.count++;
						event.goto(1);
					}
				},
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    result:{
                        effect:function (card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(!target.hasFriend()) return;
								var num=1;
								if(get.attitude(player,target)>0){
									if(player.needsToDiscard()){
										num=0.7;
									}
									else{
										num=0.5;
									}
								}
								if(player.hp>=4) return [1,num*2];
								if(target.hp==3) return [1,num*1.5];
								if(target.hp==2) return [1,num*0.5];
							}
						},
                    },
                    threaten:0.6,
                },
            };
			 lib.skill.fankui={
				audio:2,
				trigger:{player:'damageEnd'},
				direct:true,
				filter:function(event,player){
					return (event.source&&event.source.countGainableCards(player,'he')&&event.num>0&&event.source!=player);
				},
				content:function(){
					'step 0'
					player.gainPlayerCard(get.prompt('fankui',trigger.source),trigger.source,get.buttonValue,'he').set('logSkill',['fankui',trigger.source]);
					'step 1'
					if(result.bool){
						if(player==game.me&&((player.name.indexOf('simayi')!=-1||
						player.name.indexOf('司马懿')!=-1)||
						(player.name2!=undefined&&(player.name2.indexOf('simayi')!=-1||
						player.name2.indexOf('司马懿')!=-1)))&&
						lib.config.achievement.wei.shouyantongtian.finished!=true&&
						result.cards[0].name=='tao'){
							if(_status.achievement1==undefined) _status.achievement1={};
							if(_status.achievement1.shouyantongtian==undefined) _status.achievement1.shouyantongtian=0;
							_status.achievement1.shouyantongtian++;
						};
					};
				},
				ai:{
					maixie_defend:true,
					effect:{
						target:function(card,player,target){
							if(player.countCards('he')>1&&get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-1.5];
								if(get.attitude(target,player)<0) return [1,1];
							}
						}
					}
				}
			};
			 lib.skill.refankui={
				audio:2,
				trigger:{player:'damageEnd'},
				direct:true,
				filter:function(event,player){
					return (event.source&&event.source.countGainableCards(player,'he')&&event.num>0&&event.source!=player);
				},
				content:function(){
					'step 0'
					player.gainPlayerCard(get.prompt('fankui',trigger.source),trigger.source,get.buttonValue,'he').set('logSkill',['refankui',trigger.source]);
					'step 1'
					if(result.bool){
						if(player==game.me&&((player.name.indexOf('simayi')!=-1||
						player.name.indexOf('司马懿')!=-1)||
						(player.name2!=undefined&&(player.name2.indexOf('simayi')!=-1||
						player.name2.indexOf('司马懿')!=-1)))&&
						lib.config.achievement.wei.shouyantongtian.finished!=true&&
						result.cards[0].name=='tao'){
							if(_status.achievement1==undefined) _status.achievement1={};
							if(_status.achievement1.shouyantongtian==undefined) _status.achievement1.shouyantongtian=0;
							_status.achievement1.shouyantongtian++;
						};
					};
				},
				ai:{
					maixie_defend:true,
					effect:{
						target:function(card,player,target){
							if(player.countCards('he')>1&&get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-1.5];
								if(get.attitude(target,player)<0) return [1,1];
							}
						}
					}
				}
			};
			lib.skill.luoshen={
				audio:2,
				trigger:{player:'phaseZhunbeiBegin'},
				frequent:true,
				content:function(){
					"step 0"
					if(event.cards==undefined) event.cards=[];
					if(player==game.me&&((player.name.indexOf('zhenji')!=-1||
					player.name.indexOf('甄姬')!=-1)||
					(player.name2!=undefined&&(player.name2.indexOf('zhenji')!=-1||
					player.name2.indexOf('甄姬')!=-1)))&&
					lib.config.achievement.wei.luoshenfu.finished!=true&&
					event.cards.length>0){
						if(_status.achievement1==undefined) _status.achievement1={};
						if(_status.achievement1.luoshenfu==undefined) _status.achievement1.luoshenfu=0;
						if(_status.achievement1.luoshenfu<event.cards.length&&lib.config.achievement.wei.luoshenfu.finished_times.luoshenfu<event.cards.length) _status.achievement1.luoshenfu=event.cards.length;
					};
					var next=player.judge(function(card){
						if(get.color(card)=='black') return 1.5;
						return -1.5;
					});
					if(get.mode()!='guozhan'&&!player.hasSkillTag('rejudge')) next.set('callback',function(){
						if(event.judgeResult.color=='black'&&get.position(card,true)=='o') player.gain(card,'gain2');
					});
					else next.set('callback',function(){
						if(event.judgeResult.color=='black') event.getParent().orderingCards.remove(card);
					});
					"step 1"
					if(result.judge>0){
						event.cards.push(result.card);
						if(lib.config.autoskilllist.contains('luoshen')){
							player.chooseBool('是否再次发动【洛神】？');
						}
						else{
							event._result={bool:true};
						}
					}
					else{
						for(var i=0;i<event.cards.length;i++){
							if(get.position(event.cards[i],true)!='o'){
								event.cards.splice(i,1);i--;
							}
						}
						if(event.cards.length){
							player.gain(event.cards,'gain2');
						}
						event.finish();
					}
					"step 2"
					if(result.bool){
						event.goto(0);
					}
					else{
						if(event.cards.length){
							player.gain(event.cards,'gain2');
						}
					}
				}
			};
			lib.skill.reluoshen={
				audio:2,
				locked:false,
				trigger:{player:'phaseZhunbeiBegin'},
				frequent:true,
				content:function(){
					"step 0"
					if(!player.storage.reluoshen) player.storage.reluoshen=[];
					if(event.cards==undefined) event.cards=[];
					if(player==game.me&&((player.name.indexOf('zhenji')!=-1||
					player.name.indexOf('甄姬')!=-1)||
					(player.name2!=undefined&&(player.name2.indexOf('zhenji')!=-1||
					player.name2.indexOf('甄姬')!=-1)))&&
					lib.config.achievement.wei.luoshenfu.finished!=true&&
					event.cards.length>0){
						if(_status.achievement1==undefined) _status.achievement1={};
						if(_status.achievement1.luoshenfu==undefined) _status.achievement1.luoshenfu=0;
						if(_status.achievement1.luoshenfu<event.cards.length&&lib.config.achievement.wei.luoshenfu.finished_times.luoshenfu<event.cards.length) _status.achievement1.luoshenfu=event.cards.length;
					};
					var next=player.judge(function(card){
						if(get.color(card)=='black') return 1.5;
						return -1.5;
					});
					if(get.mode()!='guozhan'&&!player.hasSkillTag('rejudge')) next.set('callback',function(){
						if(event.judgeResult.color=='black'&&get.position(card,true)=='o'){
							player.storage.reluoshen.push(card);
							player.gain(card,'gain2');
						}
					});
					else next.set('callback',function(){
						if(event.judgeResult.color=='black') event.getParent().orderingCards.remove(card);
					});
					"step 1"
					if(result.judge>0){
						event.cards.push(result.card);
						if(lib.config.autoskilllist.contains('reluoshen')){
							player.chooseBool('是否再次发动【洛神】？');
						}
						else{
							event._result={bool:true};
						}
					}
					else{
						for(var i=0;i<event.cards.length;i++){
							if(get.position(event.cards[i],true)!='o'){
								event.cards.splice(i,1);i--;
							}
						}
						player.gain(event.cards,'gain2');
						player.storage.reluoshen.addArray(event.cards);
						event.finish();
					}
					"step 2"
					if(result.bool){
						event.goto(0);
					}
					else{
						for(var i=0;i<event.cards.length;i++){
							if(get.position(event.cards[i],true)!='o'){
								event.cards.splice(i,1);i--;
							}
						}
						if(event.cards.length){
							player.gain(event.cards,'gain2');
							player.storage.reluoshen=event.cards.slice(0);
						}
					}
				},
				mod:{
					ignoredHandcard:function(card,player){
						if(player.storage.reluoshen&&player.storage.reluoshen.contains(card)){
							return true;
						}
					},
					cardDiscardable:function(card,player,name){
						if(name=='phaseDiscard'&&player.storage.reluoshen&&player.storage.reluoshen.contains(card)){
							return false;
						}
					},
				},
				group:'reluoshen_clear',
				subSkill:{
					clear:{
						trigger:{player:'phaseAfter'},
						silent:true,
						content:function(){
							delete player.storage.reluoshen;
						}
					}
				}
			};
			lib.skill._achieve_jy={
				trigger:{
					target:'taoBegin'
				},
				forced:true,
				popup:false,
				filter:function(event,player){
					if(player.hp>0) return false;
					if(event.player.group!='wu') return false;
					var bool=false;
					if(player==game.me&&((player.name.indexOf('sunquan')!=-1||
					player.name.indexOf('孙权')!=-1)||
					(player.name2!=undefined&&(player.name2.indexOf('sunquan')!=-1||
					player.name2.indexOf('孙权')!=-1)))&&
					lib.config.achievement.wu.nianqingyouwei.finished!=true) bool=true;
					return bool;
				},
				content:function(){
					if(_status.achievement1==undefined) _status.achievement1={};
					if(_status.achievement1.nianqingyouwei==undefined) _status.achievement1.nianqingyouwei=0;
					_status.achievement1.nianqingyouwei++;
				}
			};
			lib.skill._achieve_qx={
				trigger:{
					player:'phaseAfter'
				},
				forced:true,
				popup:false,
				filter:function(event,player){
					return player.storage.ext_shenchuguimo!=undefined;
				},
				content:function(){
					delete player.storage.ext_shenchuguimo;
				}
			};
			lib.skill.qixi={
				audio:2,
				audioname:['ganning','re_ganning'],
				enable:'chooseToUse',
				filterCard:function(card){
					return get.color(card)=='black';
				},
				position:'he',
				viewAs:{name:'guohe'},
				viewAsFilter:function(player){
					if(!player.countCards('he',{color:'black'})) return false;
				},
				prompt:'将一张黑色牌当过河拆桥使用',
				check:function(card){return 4-get.value(card)},
				onuse:function(result,player){
					if(player==game.me&&((player.name.indexOf('ganning')!=-1||
					player.name.indexOf('甘宁')!=-1)||
					(player.name2!=undefined&&(player.name2.indexOf('ganning')!=-1||
					player.name2.indexOf('甘宁')!=-1)))&&
					lib.config.achievement.wu.shenchuguimo.finished!=true){
						if(_status.achievement1==undefined) _status.achievement1={};
						if(_status.achievement1.shenchuguimo==undefined) _status.achievement1.shenchuguimo=0;
						if(player.storage.ext_shenchuguimo==undefined) player.storage.ext_shenchuguimo=0;
						player.storage.ext_shenchuguimo++;
						if(_status.achievement1.shenchuguimo<player.storage.ext_shenchuguimo) _status.achievement1.shenchuguimo=player.storage.ext_shenchuguimo;
					};
				},
			};
			lib.skill._achieve_kr={
				trigger:{
					player:'phaseAfter'
				},
				forced:true,
				popup:false,
				filter:function(event,player){
					return player.storage.ext_wujindebianta!=undefined;
				},
				content:function(){
					delete player.storage.ext_wujindebianta;
				}
			};
			lib.skill.kurou={
				audio:4,
				enable:'phaseUse',
				prompt:'失去一点体力并摸两张牌',
				content:function(){
					"step 0"
					if(player==game.me&&((player.name.indexOf('huanggai')!=-1||
					player.name.indexOf('黄盖')!=-1)||
					(player.name2!=undefined&&(player.name2.indexOf('huanggai')!=-1||
					player.name2.indexOf('黄盖')!=-1)))&&
					lib.config.achievement.wu.wujindebianta.finished!=true){
						if(_status.achievement1==undefined) _status.achievement1={};
						if(_status.achievement1.wujindebianta==undefined) _status.achievement1.wujindebianta=0;
						if(player.storage.ext_wujindebianta==undefined) player.storage.ext_wujindebianta=0;
						player.storage.ext_wujindebianta++;
						if(_status.achievement1.wujindebianta<player.storage.ext_wujindebianta) _status.achievement1.wujindebianta=player.storage.ext_wujindebianta;
					};
					player.loseHp(1);
					"step 1"
					player.draw(2);
				},
				ai:{
					basic:{
						order:1
					},
					result:{
						player:function(player){
							if(player.countCards('h')>=player.hp-1) return -1;
							if(player.hp<3) return -1;
							return 1;
						}
					}
				}
			};
			lib.skill.rekurou={
				audio:2,
				enable:'phaseUse',
				usable:1,
				filterCard:true,
				check:function(card){
					return 8-get.value(card);
				},
				position:'he',
				content:function(){
					if(player==game.me&&((player.name.indexOf('huanggai')!=-1||
					player.name.indexOf('黄盖')!=-1)||
					(player.name2!=undefined&&(player.name2.indexOf('huanggai')!=-1||
					player.name2.indexOf('黄盖')!=-1)))&&
					lib.config.achievement.wu.wujindebianta.finished!=true){
						if(_status.achievement1==undefined) _status.achievement1={};
						if(_status.achievement1.wujindebianta==undefined) _status.achievement1.wujindebianta=0;
						if(player.storage.ext_wujindebianta==undefined) player.storage.ext_wujindebianta=0;
						player.storage.ext_wujindebianta++;
						if(_status.achievement1.wujindebianta<player.storage.ext_wujindebianta) _status.achievement1.wujindebianta=player.storage.ext_wujindebianta;
					};
					player.loseHp();
				},
				ai:{
					order:8,
					result:{
						player:function(player){
							if(player.hp<=2) return player.countCards('h')==0?1:0;
							if(player.countCards('h',{name:'sha',color:'red'})) return 1;
							return player.countCards('h')<=player.hp?1:0;
						}
					},
					effect:function(card,player,target){
						if(get.tag(card,'damage')){
							if(player.hasSkillTag('jueqing',false,target)) return [1,1];
							return 1.2;
						}
						if(get.tag(card,'loseHp')){
							if(player.hp<=1) return;
							return [0,0];
						}
					}
				}
			};
			lib.skill._achieve_kz={
				trigger:{
					player:'gainAfter'
				},
				forced:true,
				popup:false,
				filter:function(event,player){
					var bool=false;
					if(player==game.me&&((player.name.indexOf('lvmeng')!=-1||
					player.name.indexOf('吕蒙')!=-1)||
					(player.name2!=undefined&&(player.name2.indexOf('lvmeng')!=-1||
					player.name2.indexOf('吕蒙')!=-1)))&&
					lib.config.achievement.wu.sijidaifa.finished!=true) bool=true;
					return bool;
				},
				content:function(){
					if(_status.achievement1==undefined) _status.achievement1={};
					if(_status.achievement1.sijidaifa==undefined) _status.achievement1.sijidaifa=0;
					if(_status.achievement1.sijidaifa<player.countCards('h')) _status.achievement1.sijidaifa=player.countCards('h');
				}
			};
			lib.skill.liuli={
				audio:2,
				audioname:['re_daqiao','daxiaoqiao'],
				trigger:{target:'shaBefore'},
				direct:true,
				priority:5,
				filter:function(event,player){
					if(player.countCards('he')==0) return false;
					return game.hasPlayer(function(current){
						return get.distance(player,current,'attack')<=1&&current!=event.player&&
							current!=player&&lib.filter.targetEnabled(event.card,event.player,current);
					});
				},
				content:function(){
					"step 0"
					var next=player.chooseCardTarget({
						position:'he',
						filterCard:lib.filter.cardDiscardable,
						filterTarget:function(card,player,target){
							var trigger=_status.event.getTrigger();
							if(get.distance(player,target,'attack')<=1&&
								target!=trigger.player&&!trigger.targets.contains(target)){
								if(player.canUse(trigger.card,target)) return true;
							}
							return false;
						},
						ai1:function(card){
							return get.unuseful(card)+9;
						},
						ai2:function(target){
							if(_status.event.player.countCards('h','shan')){
								return -get.attitude(_status.event.player,target);
							}
							if(get.attitude(_status.event.player,target)<5){
								return 6-get.attitude(_status.event.player,target);
							}
							if(_status.event.player.hp==1&&player.countCards('h','shan')==0){
								return 10-get.attitude(_status.event.player,target);
							}
							if(_status.event.player.hp==2&&player.countCards('h','shan')==0){
								return 8-get.attitude(_status.event.player,target);
							}
							return -1;
						},
						prompt:get.prompt2('liuli')
					});
					"step 1"
					if(result.bool){
						if(player==game.me&&((player.name.indexOf('daqiao')!=-1||
						player.name.indexOf('大乔')!=-1)||
						(player.name2!=undefined&&(player.name2.indexOf('daqiao')!=-1||
						player.name2.indexOf('大乔')!=-1)))&&
						lib.config.achievement.wu.yihuajiemu.finished!=true){
							if(_status.achievement1==undefined) _status.achievement1={};
							if(_status.achievement1.yihuajiemu==undefined) _status.achievement1.yihuajiemu=0;
							if(player.storage.ext_yihuajiemu==undefined) player.storage.ext_yihuajiemu=0;
							player.storage.ext_yihuajiemu++;
							if(_status.achievement1.yihuajiemu<player.storage.ext_yihuajiemu) _status.achievement1.yihuajiemu=player.storage.ext_yihuajiemu;
						};
						player.discard(result.cards);
						player.logSkill(event.name,result.targets);
						trigger.target=result.targets[0];
						for(var i=0;i<trigger.targets.length;i++){
						    if(trigger.targets[i]==player) break;
						}
						var t1=trigger.targets.slice(0,i);
						var t2=trigger.targets.slice(i+1);
						trigger.targets=t1.concat([result.targets[0]]).concat(t2);
					}
					else{
						player.storage.ext_yihuajiemu=0;
						event.finish();
					}
					"step 2"
					trigger.untrigger();
					trigger.trigger('useCardToBefore');
					trigger.trigger('shaBefore');
					game.delay();
				},
				ai:{
					effect:{
						target:function(card,player,target){
							if(target.countCards('he')==0) return;
							if(card.name!='sha') return;
							var min=1;
							var friend=get.attitude(player,target)>0;
							var vcard={name:'shacopy',nature:card.nature,suit:card.suit};
							var players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(player!=players[i]&&
									get.attitude(target,players[i])<0&&
									target.canUse(card,players[i])){
									if(!friend) return 0;
									if(get.effect(players[i],vcard,player,player)>0){
										if(!player.canUse(card,players[0])){
											return [0,0.1];
										}
										min=0;
									}
								}
							}
							return min;
						}
					}
				}
			};
			lib.skill._achieve_xj={
				trigger:{
					player:'loseEnd'
				},
				forced:true,
				popup:false,
				filter:function(event,player){
					var bool=false;
					var bool1=false;
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].original=='e') bool=true;
					};
					if(player==game.me&&((player.name.indexOf('sunshangxiang')!=-1||
					player.name.indexOf('孙尚香')!=-1)||
					(player.name2!=undefined&&(player.name2.indexOf('sunshangxiang')!=-1||
					player.name2.indexOf('孙尚香')!=-1)))&&
					lib.config.achievement.wu.yinhuodefu.finished!=true) bool1=true;
					return bool&&bool1;
				},
				content:function(){
					var num=0;
					for(var i=0;i<trigger.cards.length;i++){
						if(trigger.cards[i].original=='e') num++;
					};
					if(_status.achievement1==undefined) _status.achievement1={};
					if(_status.achievement1.yinhuodefu==undefined) _status.achievement1.yinhuodefu=0;
					_status.achievement1.yinhuodefu+=num;
				},
			};
		lib.skill._achieve_fj={
			trigger:{
				global:"dieBefore",
			},
			forced:true,
			popup:false,
			filter:function(event,player){
				return player.storage.achieve_fj==true;;
			},
			content:function (){
				if(player==game.me&&((player.name.indexOf('zhouyu')!=-1||
				player.name.indexOf('周瑜')!=-1)||
				(player.name2!=undefined&&(player.name2.indexOf('zhouyu')!=-1||
				player.name2.indexOf('周瑜')!=-1)))&&
				lib.config.achievement.wu.wujindezhengzha.finished!=true){
					if(_status.achievement1==undefined) _status.achievement1={};
					if(_status.achievement1.wujindezhengzha==undefined) _status.achievement1.wujindezhengzha=0;
					_status.achievement1.wujindezhengzha++;
				};
			},
		 };
			lib.skill.fanjian={
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				filterTarget:function(card,player,target){
					return player!=target;
				},
				content:function(){
					"step 0"
					target.chooseControl('heart2','diamond2','club2','spade2').set('ai',function(event){
						switch(Math.floor(Math.random()*6)){
							case 0:return 'heart2';
							case 1:case 4:case 5:return 'diamond2';
							case 2:return 'club2';
							case 3:return 'spade2';
						}
					});
					"step 1"
					game.log(target,'选择了'+get.translation(result.control));
					event.choice=result.control;
					target.popup(event.choice);
					event.card=player.getCards('h').randomGet();
					target.gain(event.card,player);
					player.$give(event.card,target);
					game.delay();
					"step 2"
					if(get.suit(event.card)+'2'!=event.choice){
						target.damage('nocard');
						player.storage.achieve_fj=true;
					};
					"step 3"
					delete player.storage.achieve_fj;
				},
				ai:{
					order:1,
					result:{
						target:function(player,target){
							var eff=get.damageEffect(target,player);
							if(eff>=0) return 1+eff;
							var value=0,i;
							var cards=player.getCards('h');
							for(i=0;i<cards.length;i++){
								value+=get.value(cards[i]);
							}
							value/=player.countCards('h');
							if(target.hp==1) return Math.min(0,value-7);
							return Math.min(0,value-5);
						}
					}
				}
			};
			lib.skill._achieve_lying={
				trigger:{
					player:'phaseAfter'
				},
				forced:true,
				popup:false,
				filter:function(event,player){
					return player.storage.ext_lianmianbujue!=undefined;
				},
				content:function(){
					delete player.storage.ext_lianmianbujue;
				}
			};
			lib.skill.lianying={
				audio:2,
				trigger:{player:'loseEnd'},
				frequent:true,
				filter:function(event,player){
					if(player.countCards('h')) return false;
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].original=='h') return true;
					}
					return false;
				},
				content:function(){
					if(player==game.me&&((player.name.indexOf('luxun')!=-1||
					player.name.indexOf('陆逊')!=-1)||
					(player.name2!=undefined&&(player.name2.indexOf('luxun')!=-1||
					player.name2.indexOf('陆逊')!=-1)))&&
					lib.config.achievement.wu.lianmianbujue.finished!=true){
						if(_status.achievement1==undefined) _status.achievement1={};
						if(_status.achievement1.lianmianbujue==undefined) _status.achievement1.lianmianbujue=0;
						if(player.storage.ext_lianmianbujue==undefined) player.storage.ext_lianmianbujue=0;
						player.storage.ext_lianmianbujue++;
						if(_status.achievement1.lianmianbujue<player.storage.ext_lianmianbujue) _status.achievement1.lianmianbujue=player.storage.ext_lianmianbujue;
					};
					player.draw();
				},
				ai:{
					threaten:0.8,
					effect:{
						target:function(card){
							if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
						}
					},
					noh:true,
					skillTagFilter:function(player,tag){
						if(tag=='noh'){
							if(player.countCards('h')!=1) return false;
						}
					}
				}
			};
			lib.skill.relianying={
				audio:2,
				trigger:{player:'loseEnd'},
				direct:true,
				filter:function(event,player){
					if(player.countCards('h')) return false;
					for(var i=0;i<event.cards.length;i++){
						if(event.cards[i].original=='h') return true;
					}
					return false;
				},
				content:function(){
					"step 0"
					var num=0;
					for(var i=0;i<trigger.cards.length;i++){
						if(trigger.cards[i].original=='h') num++;
					}
					player.chooseTarget('选择发动连营的目标',[1,num]).ai=function(target){
						var player=_status.event.player;
						if(player==target) return get.attitude(player,target)+10;
						return get.attitude(player,target);
					}
					"step 1"
					if(result.bool){
						if(player==game.me&&((player.name.indexOf('luxun')!=-1||
						player.name.indexOf('陆逊')!=-1)||
						(player.name2!=undefined&&(player.name2.indexOf('luxun')!=-1||
						player.name2.indexOf('陆逊')!=-1)))&&
						lib.config.achievement.wu.lianmianbujue.finished!=true){
							if(_status.achievement1==undefined) _status.achievement1={};
							if(_status.achievement1.lianmianbujue==undefined) _status.achievement1.lianmianbujue=0;
							if(player.storage.ext_lianmianbujue==undefined) player.storage.ext_lianmianbujue=0;
							player.storage.ext_lianmianbujue++;
							if(_status.achievement1.lianmianbujue<player.storage.ext_lianmianbujue) _status.achievement1.lianmianbujue=player.storage.ext_lianmianbujue;
						};
						player.logSkill('relianying',result.targets);
						game.asyncDraw(result.targets);
					}
				},
				ai:{
					threaten:0.8,
					effect:{
						target:function(card){
							if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
						}
					},
					noh:true,
				}
			};
		lib.skill._achieve_cxsgj={
			trigger:{
				global:"dieBefore",
			},
			forced:true,
			popup:false,
			filter:function(event,player){
				return player.storage.achieve_cxsgj==true;;
			},
			content:function (){
				if(player==game.me&&((player.name.indexOf('liubei')!=-1||
				player.name.indexOf('刘备')!=-1)||
				(player.name2!=undefined&&(player.name2.indexOf('liubei')!=-1||
				player.name2.indexOf('刘备')!=-1)))&&
				lib.config.achievement.shu.jiujiezhixin.finished!=true&&
				trigger.player.sex=='female'){
					if(_status.achievement1==undefined) _status.achievement1={};
					if(_status.achievement1.jiujiezhixin==undefined) _status.achievement1.jiujiezhixin=0;
					_status.achievement1.jiujiezhixin++;
				};
			},
		 };
			lib.skill.cixiong_skill={
				trigger:{player:'shaBegin'},
				priority:7,
				audio:true,
				logTarget:'target',
				filter:function(event,player){
					if(player.sex=='male'&&event.target.sex=='female') return true;
					if(player.sex=='female'&&event.target.sex=='male') return true;
					return false;
				},
				content:function(){
					"step 0"
					player.storage.achieve_cxsgj=true;
					trigger.target.chooseToDiscard('弃置一张手牌，或令'+get.translation(player)+'摸一张牌').set('ai',function(card){
						var trigger=_status.event.getTrigger();
						return -get.attitude(trigger.target,trigger.player)-get.value(card);
					});
					"step 1"
					if(result.bool==false) player.draw();
				}
			};
		lib.skill._achieve_cxsgj1={
			trigger:{
				player:"shaAfter",
			},
			forced:true,
			popup:false,
			filter:function(event,player){
				return player.storage.achieve_cxsgj==true;;
			},
			content:function (){
				delete player.storage.achieve_cxsgj;
			},
		 };
		lib.skill._achieve_zbsm={
			trigger:{
				global:"dieBefore",
			},
			forced:true,
			popup:false,
			filter:function(event,player){
				return player.storage.achieve_zbsm==true;;
			},
			content:function (){
				if(player==game.me&&((player.name.indexOf('zhangfei')!=-1||
				player.name.indexOf('张飞')!=-1)||
				(player.name2!=undefined&&(player.name2.indexOf('zhangfei')!=-1||
				player.name2.indexOf('张飞')!=-1)))&&
				lib.config.achievement.shu.yanrendepaoxiao.finished!=true){
					if(_status.achievement1==undefined) _status.achievement1={};
					if(_status.achievement1.yanrendepaoxiao==undefined) _status.achievement1.yanrendepaoxiao=0;
					_status.achievement1.yanrendepaoxiao++;
				};
			},
		 };
		lib.skill._achieve_zbsm1={
			trigger:{
				player:"shaAfter",
			},
			forced:true,
			popup:false,
			filter:function(event,player){
				return player.storage.achieve_zbsm==true;
			},
			content:function (){
				delete player.storage.achieve_zbsm;
			},
		 };
			lib.skill.zhangba_skill={
				enable:['chooseToUse','chooseToRespond'],
				filterCard:true,
				selectCard:2,
				position:'h',
				viewAs:{name:'sha'},
				filter:function(event,player){
					return player.countCards('h')>=2;
				},
				audio:true,
				prompt:'将两张手牌当杀使用或打出',
				check:function(card){
					if(card.name=='sha') return 0;
					return 6-get.useful(card)
				},
				onuse:function(result,player){
					player.storage.achieve_zbsm=true;
				},
				ai:{
					respondSha:true,
					skillTagFilter:function(player){
						return player.countCards('h')>=2;
					},
				}
			};
			lib.skill.tieji={
				audio:2,
				trigger:{player:'shaBegin'},
				check:function(event,player){
					return get.attitude(player,event.target)<=0;
				},
				logTarget:'target',
				content:function(){
					"step 0"
					player.judge(function(card){
						if(get.zhu(_status.event.player,'shouyue')){
							if(get.suit(card)!='spade') return 2;
						}
						else{
							if(get.color(card)=='red') return 2;
						}
						return -0.5;
					});
					"step 1"
					if(result.bool){
						if(player==game.me&&((player.name.indexOf('machao')!=-1||
						player.name.indexOf('马超')!=-1)||
						(player.name2!=undefined&&(player.name2.indexOf('machao')!=-1||
						player.name2.indexOf('马超')!=-1)))&&
						lib.config.achievement.shu.quanjuntuji.finished!=true){
							if(_status.achievement1==undefined) _status.achievement1={};
							if(_status.achievement1.quanjuntuji==undefined) _status.achievement1.quanjuntuji=0;
							if(player.storage.ext_quanjuntuji==undefined) player.storage.ext_quanjuntuji=0;
							player.storage.ext_quanjuntuji++;
							if(_status.achievement1.quanjuntuji<player.storage.ext_quanjuntuji) _status.achievement1.quanjuntuji=player.storage.ext_quanjuntuji;
						};
						trigger.directHit=true;
					}else{
						player.storage.ext_quanjuntuji=0;
					};
				}
			};
			lib.skill.retieji={
				audio:2,
				audioname:['boss_lvbu3'],
				trigger:{player:'shaBegin'},
				check:function(event,player){
					return get.attitude(player,event.target)<0;
				},
				logTarget:'target',
				content:function(){
					"step 0"
					player.judge(function(){return 0});
					if(!trigger.target.hasSkill('fengyin')){
						trigger.target.addTempSkill('fengyin');
					}
					"step 1"
					if(get.color(result.card)=='red'){
						if(player==game.me&&((player.name.indexOf('machao')!=-1||
						player.name.indexOf('马超')!=-1)||
						(player.name2!=undefined&&(player.name2.indexOf('machao')!=-1||
						player.name2.indexOf('马超')!=-1)))&&
						lib.config.achievement.shu.quanjuntuji.finished!=true){
							if(_status.achievement1==undefined) _status.achievement1={};
							if(_status.achievement1.quanjuntuji==undefined) _status.achievement1.quanjuntuji=0;
							if(player.storage.ext_quanjuntuji==undefined) player.storage.ext_quanjuntuji=0;
							player.storage.ext_quanjuntuji++;
							if(_status.achievement1.quanjuntuji<player.storage.ext_quanjuntuji) _status.achievement1.quanjuntuji=player.storage.ext_quanjuntuji;
						};
					}else{
						player.storage.ext_quanjuntuji=0;
					};
					var suit=get.suit(result.card);
					var target=trigger.target;
					var num=target.countCards('h','shan');
					target.chooseToDiscard('请弃置一张'+get.translation(suit)+'牌，否则不能使用闪抵消此杀','he',function(card){
						return get.suit(card)==_status.event.suit;
					}).set('ai',function(card){
						var num=_status.event.num;
						if(num==0) return 0;
						if(card.name=='shan') return num>1?2:0;
						return 8-get.value(card);
					}).set('num',num).set('suit',suit);
					"step 2"
					if(!result.bool){
						trigger.directHit=true;
					}
				}
			};
		lib.skill._achieve_qlyyd={
			trigger:{
				global:"dieBefore",
			},
			forced:true,
			popup:false,
			filter:function(event,player){
				return player.storage.achieve_qlyyd==true;;
			},
			content:function (){
				if(player==game.me&&((player.name.indexOf('guanyu')!=-1||
				player.name.indexOf('关羽')!=-1)||
				(player.name2!=undefined&&(player.name2.indexOf('guanyu')!=-1||
				player.name2.indexOf('关羽')!=-1)))&&
				lib.config.achievement.shu.wushengxianling.finished!=true){
					if(_status.achievement1==undefined) _status.achievement1={};
					if(_status.achievement1.wushengxianling==undefined) _status.achievement1.wushengxianling=0;
					_status.achievement1.wushengxianling++;
				};
			},
		 };
		 lib.skill._achieve_qlyyd1={
			trigger:{
				player:"shaAfter",
			},
			forced:true,
			popup:false,
			filter:function(event,player){
				return player.storage.achieve_qlyyd==true;
			},
			content:function (){
				delete player.storage.achieve_qlyyd;
			},
		 };
			lib.skill.qinglong_skill={
				trigger:{player:'shaMiss'},
				direct:true,
				filter:function(event,player){
					if(get.mode()=='guozhan') return false;
					return player.canUse('sha',event.target)&&player.hasSha();
				},
				content:function(){
					"step 0"
					if(player.hasSkill('jiu')){
						game.broadcastAll(function(player){
							player.removeSkill('jiu');
						},player);
						event.jiu=true;
					}
					player.chooseToUse(get.prompt('qinglong'),{name:'sha'},trigger.target,-1).set('addCount',false).logSkill='qinglong_skill';
					player.storage.achieve_qlyyd=true;
					"step 1"
					if(result.bool);
					else if(event.jiu){
						player.addSkill('jiu');
					}
				}
			};
		lib.skill._achieve_qjj1={
			trigger:{
				player:"useCardBefore",
			},
			forced:true,
			popup:false,
			filter:function(event,player){
				return event.card!=undefined&&event.card.name=='sha'&&player.hasSkill('qinggang_skill');
			},
			content:function (){
				player.storage.achieve_qjj=true;
			},
		 };
		lib.skill._achieve_qjj2={
			trigger:{
				player:"useCardAfter",
			},
			forced:true,
			popup:false,
			filter:function(event,player){
				return player.storage.achieve_qjj==true;
			},
			content:function (){
				delete player.storage.achieve_qjj;
			},
		 };
		lib.skill._achieve_qjj={
			trigger:{
				player:"dieBefore",
			},
			forced:true,
			popup:false,
			filter:function(event,player){
				if(event.source==undefined) return false;
				var bool=false;
				var pl=event.source;
				if(pl==game.me&&((pl.name.indexOf('zhaoyun')!=-1||
				pl.name.indexOf('赵云')!=-1)||
				(pl.name2!=undefined&&(pl.name2.indexOf('zhaoyun')!=-1||
				pl.name2.indexOf('赵云')!=-1)))&&
				lib.config.achievement.shu.hunshenshidan.finished!=true&&
				pl.hasSkill('qinggang_skill')&&
				player.get('e','2')!=undefined&&
				pl.storage.achieve_qjj==true) bool=true;
				return bool;
			},
			content:function (){
				if(_status.achievement1==undefined) _status.achievement1={};
				if(_status.achievement1.hunshenshidan==undefined) _status.achievement1.hunshenshidan=0;
				_status.achievement1.hunshenshidan++;
			},
		 };
			lib.skill._achieve_jj={
				trigger:{
					player:'phaseAfter'
				},
				forced:true,
				popup:false,
				filter:function(event,player){
					return player.storage.ext_jinnangdai!=undefined;
				},
				content:function(){
					delete player.storage.ext_jinnangdai;
				}
			};
			lib.skill.jizhi={
				audio:2,
				audioname:['jianyong'],
				trigger:{player:'useCard'},
				frequent:true,
				filter:function(event){
					return (get.type(event.card)=='trick'&&event.card.isCard);
				},
				content:function(){
					if(player==game.me&&((player.name.indexOf('huangyueying')!=-1||
					player.name.indexOf('黄月英')!=-1)||
					(player.name2!=undefined&&(player.name2.indexOf('huangyueying')!=-1||
					player.name2.indexOf('黄月英')!=-1)))&&
					lib.config.achievement.shu.jinnangdai.finished!=true){
						if(_status.achievement1==undefined) _status.achievement1={};
						if(_status.achievement1.jinnangdai==undefined) _status.achievement1.jinnangdai=0;
						if(player.storage.ext_jinnangdai==undefined) player.storage.ext_jinnangdai=0;
						player.storage.ext_jinnangdai++;
						if(_status.achievement1.jinnangdai<player.storage.ext_jinnangdai) _status.achievement1.jinnangdai=player.storage.ext_jinnangdai;
					};
					player.draw();
				},
				ai:{
					threaten:1.4,
					noautowuxie:true,
				}
			};
			lib.skill.rejizhi={
				audio:2,
				locked:false,
				trigger:{player:'useCard'},
				frequent:true,
				filter:function(event){
					return (get.type(event.card,'trick')=='trick'&&event.card.isCard);
				},
				init:function(player){
					player.storage.rejizhi=0;
				},
				content:function(){
					'step 0'
					if(player==game.me&&((player.name.indexOf('huangyueying')!=-1||
					player.name.indexOf('黄月英')!=-1)||
					(player.name2!=undefined&&(player.name2.indexOf('huangyueying')!=-1||
					player.name2.indexOf('黄月英')!=-1)))&&
					lib.config.achievement.shu.jinnangdai.finished!=true){
						if(_status.achievement1==undefined) _status.achievement1={};
						if(_status.achievement1.jinnangdai==undefined) _status.achievement1.jinnangdai=0;
						if(player.storage.ext_jinnangdai==undefined) player.storage.ext_jinnangdai=0;
						player.storage.ext_jinnangdai++;
						if(_status.achievement1.jinnangdai<player.storage.ext_jinnangdai) _status.achievement1.jinnangdai=player.storage.ext_jinnangdai;
					};
					player.draw();
					'step 1'
					event.card=result[0];
					if(get.type(event.card)=='basic'){
						player.chooseBool('是否弃置'+get.translation(event.card)+'并令本回合手牌上限+1？').set('ai',function(evt,player){
							return _status.currentPhase==player&&player.needsToDiscard(-3)&&_status.event.value<6;
						}).set('value',get.value(event.card,player));
					}
					'step 2'
					if(result.bool){
						player.discard(event.card);
						player.storage.rejizhi++;
						if(_status.currentPhase==player){
							player.markSkill('rejizhi');
						}
					}
				},
				ai:{
					threaten:1.4,
					noautowuxie:true,
				},
				mod:{
					maxHandcard:function(player,num){
						return num+player.storage.rejizhi;
					}
				},
				intro:{
					content:'本回合手牌上限+#'
				},
				group:'rejizhi_clear',
				subSkill:{
					clear:{
						trigger:{global:'phaseAfter'},
						silent:true,
						content:function(){
							player.storage.rejizhi=0;
							player.unmarkSkill('rejizhi');
						}
					}
				}
			};
			lib.skill._achieve_kc={
				trigger:{
					player:'phaseEnd'
				},
				forced:true,
				popup:false,
				filter:function(event,player){
					var bool=false;
					if(player==game.me&&((player.name.indexOf('zhugeliang')!=-1||
					player.name.indexOf('诸葛亮')!=-1)||
					(player.name2!=undefined&&(player.name2.indexOf('zhugeliang')!=-1||
					player.name2.indexOf('诸葛亮')!=-1)))&&
					lib.config.achievement.shu.kongchengjuechang.finished!=true&&
					player.hasSkill('kongcheng')) bool=true;
					return bool;
				},
				content:function(){
					if(player.countCards('h')>0){
						player.storage.ext_kongchengjuechang=0;
					}else{
						if(_status.achievement1==undefined) _status.achievement1={};
						if(_status.achievement1.kongchengjuechang==undefined) _status.achievement1.kongchengjuechang=0;
						if(player.storage.ext_kongchengjuechang==undefined) player.storage.ext_kongchengjuechang=0;
						player.storage.ext_kongchengjuechang++;
						if(_status.achievement1.kongchengjuechang<player.storage.ext_kongchengjuechang) _status.achievement1.kongchengjuechang=player.storage.ext_kongchengjuechang;
					};
				}
			};
		lib.skill._achieve_fthj={
			trigger:{
				global:"dieBefore",
			},
			forced:true,
			popup:false,
			filter:function(event,player){
				return player.storage.achieve_fthj!=undefined;;
			},
			content:function (){
				if(player==game.me&&((player.name.indexOf('lvbu')!=-1||
				player.name.indexOf('吕布')!=-1)||
				(player.name2!=undefined&&(player.name2.indexOf('lvbu')!=-1||
				player.name2.indexOf('吕布')!=-1)))&&
				lib.config.achievement.qun.feijiang.finished!=true){
					if(_status.achievement1==undefined) _status.achievement1={};
					if(_status.achievement1.feijiang==undefined) _status.achievement1.feijiang=0;
					player.storage.achieve_fthj++;
					if(_status.achievement1.feijiang<player.storage.achieve_fthj) _status.achievement1.feijiang=player.storage.achieve_fthj;
				};
			},
		 };
		lib.skill._achieve_fthj1={
			trigger:{
				player:"useCardAfter",
			},
			forced:true,
			popup:false,
			filter:function(event,player){
				return player.storage.achieve_fthj!=undefined;
			},
			content:function (){
				delete player.storage.achieve_fthj;
			},
		 };
			lib.skill._achieve_fthj2={
				trigger:{
					player:'useCardBefore'
				},
				forced:true,
				popup:false,
				filter:function(event,player){
					var bool=false;
					if(player==game.me&&((player.name.indexOf('lvbu')!=-1||
					player.name.indexOf('吕布')!=-1)||
					(player.name2!=undefined&&(player.name2.indexOf('lvbu')!=-1||
					player.name2.indexOf('吕布')!=-1)))&&
					lib.config.achievement.qun.feijiang.finished!=true&&
					(player.hasSkill('fangtian_skill')||player.hasSkill('fangtian_guozhan'))&&
					player.countCards('h')==1&&
					player.get('h')[0].name=='sha') bool=true;
					return bool;
				},
				content:function(){
					player.storage.achieve_fthj=0;
				}
			};
			lib.skill.lijian={
				audio:2,
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return game.countPlayer(function(current){
						return current!=player&&current.sex=='male';
					})>1;
				},
				check:function(card){return 10-get.value(card)},
				filterCard:true,
				position:'he',
				filterTarget:function(card,player,target){
					if(player==target) return false;
					if(target.sex!='male') return false;
					if(ui.selected.targets.length==1){
						return target.canUse({name:'juedou'},ui.selected.targets[0]);
					}
					return true;
				},
				targetprompt:['先出杀','后出杀'],
				selectTarget:2,
				multitarget:true,
				content:function(){
					'step 0'
					targets[1].useCard({name:'juedou'},targets[0],'noai').animate=false;
					game.delay(0.5);
					'step 1'
					if(player==game.me&&((player.name.indexOf('diaochan')!=-1||
					player.name.indexOf('貂蝉')!=-1)||
					(player.name2!=undefined&&(player.name2.indexOf('diaochan')!=-1||
					player.name2.indexOf('貂蝉')!=-1)))&&
					lib.config.achievement.qun.qingguoqingcheng.finished!=true){
						if(_status.achievement1==undefined) _status.achievement1={};
						if(_status.achievement1.qingguoqingcheng==undefined) _status.achievement1.qingguoqingcheng=0;
						if(!targets[0].isAlive()) _status.achievement1.qingguoqingcheng++;
						if(!targets[1].isAlive()) _status.achievement1.qingguoqingcheng++;
					};
				},
				ai:{
					order:8,
					result:{
						target:function(player,target){
							if(ui.selected.targets.length==0){
								return -3;
							}
							else{
								return get.effect(target,{name:'juedou'},ui.selected.targets[0],target);
							}
						}
					},
					expose:0.4,
					threaten:3,
				}
			};
			lib.skill.jijiu={
				audio:2,
				audioname:['re_huatuo'],
				enable:'chooseToUse',
				filter:function(event,player){
					return _status.currentPhase!=player;
				},
				filterCard:function(card){
					return get.color(card)=='red';
				},
				position:'he',
				viewAs:{name:'tao'},
				prompt:'将一张红色牌当桃使用',
				check:function(card){return 15-get.value(card)},
				onuse:function(result,player){
					if(player==game.me&&((player.name.indexOf('huatuo')!=-1||
					player.name.indexOf('华佗')!=-1)||
					(player.name2!=undefined&&(player.name2.indexOf('huatuo')!=-1||
					player.name2.indexOf('华佗')!=-1)))&&
					lib.config.achievement.qun.luanshimingyi.finished!=true){
						if(player.storage.ext_luanshimingyi==undefined) player.storage.ext_luanshimingyi=[];
					};
				},
				ai:{
					skillTagFilter:function(player){
						return player.countCards('he',{color:'red'})>0&&_status.currentPhase!=player;
					},
					threaten:1.5,
					save:true,
					respondTao:true,
				}
			},
			lib.skill._achieve_jijiu={
				trigger:{
					target:'taoAfter'
				},
				forced:true,
				popup:false,
				filter:function(event,player){
					return event.player!=undefined&&event.player.storage.ext_luanshimingyi!=undefined&&player.hp>0;
				},
				content:function(){
					if(_status.achievement1==undefined) _status.achievement1={};
					if(_status.achievement1.luanshimingyi==undefined) _status.achievement1.luanshimingyi=0;
					if(!trigger.player.storage.ext_luanshimingyi.contains(player)){
						trigger.player.storage.ext_luanshimingyi.push(player);
						_status.achievement1.luanshimingyi++;
					};
				}
			};
			lib.skill.yaowu={
				trigger:{player:'damageEnd'},
				priority:1,
				audio:2,
				filter:function(event){
					if(event.card&&(event.card.name=='sha')){
						if(get.color(event.card)=='red') return true;
					}
					return false;
				},
				forced:true,
				check:function(){
					return false;
				},
				content:function(){
					if(player==game.me&&((player.name.indexOf('huaxiong')!=-1||
					player.name.indexOf('华雄')!=-1)||
					(player.name2!=undefined&&(player.name2.indexOf('huaxiong')!=-1||
					player.name2.indexOf('华雄')!=-1)))&&
					lib.config.achievement.qun.yaowuyangwei.finished!=true){
						if(_status.achievement2==undefined) _status.achievement2={};
						if(_status.achievement2.yaowuyangwei==undefined) _status.achievement2.yaowuyangwei=0;
						_status.achievement2.yaowuyangwei++;
					};
					trigger.source.chooseDrawRecover(true);
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(card.name=='sha'&&(get.color(card)=='red')){
								return [1,-2];
							}
						}
					}
				}
			};
            lib.skill.new_reyaowu={
                trigger:{
                    player:"damageEnd",
                },
                priority:1,
                audio:"yaowu",
                filter:function (event){
					if(event.card&&(event.card.name=='sha')){
						if(['red','black'].contains(get.color(event.card))) return true;
					}
					return false;
				},
                forced:true,
                check:function (event){
					if(event.card&&(event.card.name=='sha')){
						return get.color(event.card)=='black';
					}
				},
                content:function (){
					if(player==game.me&&((player.name.indexOf('huaxiong')!=-1||
					player.name.indexOf('华雄')!=-1)||
					(player.name2!=undefined&&(player.name2.indexOf('huaxiong')!=-1||
					player.name2.indexOf('华雄')!=-1)))&&
					lib.config.achievement.qun.yaowuyangwei.finished!=true){
						if(_status.achievement2==undefined) _status.achievement2={};
						if(_status.achievement2.yaowuyangwei==undefined) _status.achievement2.yaowuyangwei=0;
						_status.achievement2.yaowuyangwei++;
					};
					if(get.color(trigger.cards)=='black') player.draw();
					else trigger.source.chooseDrawRecover(true);
				},
                ai:{
                    effect:{
						target:function (card,player,target,current){
							if(card.name=='sha'&&(get.color(card)=='red')){
								return [1,-2];
							}
							if(card.name=='sha'&&(get.color(card)=='black')){
								return [0,-0.6];
							}
						},
                    },
                },
            };
			lib.skill.wangzun={
				audio:2,
				trigger:{global:'phaseBegin'},
				check:function(event,player){
					var att=get.attitude(player,event.player);
					return !game.hasPlayer(function(current){
						return get.attitude(player,current)<att;
					});
				},
				filter:function(event,player){
					return event.player!=player&&!player.storage.wangzun;
				},
				logTarget:'player',
				content:function(){
					if(player==game.me&&((player.name.indexOf('yuanshu')!=-1||
					player.name.indexOf('袁术')!=-1)||
					(player.name2!=undefined&&(player.name2.indexOf('yuanshu')!=-1||
					player.name2.indexOf('袁术')!=-1)))&&
					lib.config.achievement.qun.dengjizhizun.finished!=true&&
					(player.identity=='fan'||player.identity=='nei')&&
					trigger.player.identity=='zhu'){
						if(_status.achievement2==undefined) _status.achievement2={};
						if(_status.achievement2.dengjizhizun==undefined) _status.achievement2.dengjizhizun=0;
						_status.achievement2.dengjizhizun++;
					};
					player.draw();
					player.markSkill('wangzun');
					player.storage.wangzun=trigger.player;
					trigger.player.addTempSkill('wangzun3');
				},
				ai:{
					expose:0.2
				},
				intro:{
					content:'player'
				},
				group:'wangzun2'
			};
	};
		 
		 
		 
		 
		 
		
		
		
		
		
		
		
		
	if(lib.kzol_nodeintro==undefined) lib.kzol_nodeintro={};
	lib.kzol_nodeintro['zgcj']=function(uiintro,character,skills){
		var ext_div=ui.create.div('.text');
		ext_div.innerHTML='';
		var ext_num=0;
		for(var i in achievement){
			for(var j in achievement[i]){
				var achievement2=achievement[i][j];
				var condition1=achievement2.condition[1];
				if(condition1.owner!=undefined){
					if(character!=undefined&&character.indexOf(condition1.owner)!=-1){
						if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
						ext_div.innerHTML+='可用来完成【'+achievement2.name+'】';
						ext_num++;
					};
				};
			};
		};
		if(character!=undefined&&(character.indexOf('caocao')!=-1||character.indexOf('曹操')!=-1)&&(skills.contains('jianxiong')||skills.contains('xinjianxiong')||skills.contains('new_rejianxiong'))){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【乱世的奸雄】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('zhangliao')!=-1||character.indexOf('张辽')!=-1)&&(skills.contains('new_retuxi')||skills.contains('tuxi'))){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【神其无备】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('xiahoudun')!=-1||character.indexOf('夏侯惇')!=-1)&&(skills.contains('ganglie')||skills.contains('reganglie'))){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【两败俱伤】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('xuzhu')!=-1||character.indexOf('许褚')!=-1)&&(skills.contains('luoyi')||skills.contains('new_reluoyi'))){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【妈，我冷】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('guojia')!=-1||character.indexOf('郭嘉')!=-1)&&(skills.contains('yiji')||skills.contains('new_reyiji'))){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【不遗余力】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('simayi')!=-1||character.indexOf('司马懿')!=-1)&&(skills.contains('fankui')||skills.contains('refankui'))){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【手眼通天】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('zhenji')!=-1||character.indexOf('甄姬')!=-1)&&(skills.contains('luoshen')||skills.contains('reluoshen'))){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【洛神赋】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('sunquan')!=-1||character.indexOf('孙权')!=-1)){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【年轻有为】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('ganning')!=-1||character.indexOf('甘宁')!=-1)&&skills.contains('qixi')){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【神出鬼没】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('huanggai')!=-1||character.indexOf('黄盖')!=-1)&&(skills.contains('kurou')||skills.contains('rekurou'))){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【无尽的鞭挞】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('lvmeng')!=-1||character.indexOf('吕蒙')!=-1)){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【伺机待发】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('daqiao')!=-1||character.indexOf('大乔')!=-1)&&skills.contains('liuli')){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【移花接木】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('sunshangxiang')!=-1||character.indexOf('孙尚香')!=-1)){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【因祸得福】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('zhouyu')!=-1||character.indexOf('周瑜')!=-1)&&skills.contains('fanjian')){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【无尽的挣扎】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('luxun')!=-1||character.indexOf('陆逊')!=-1)&&(skills.contains('lianying')||skills.contains('relianying'))){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【连绵不绝】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('liubei')!=-1||character.indexOf('刘备')!=-1)){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【纠结之心】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('zhangfei')!=-1||character.indexOf('张飞')!=-1)){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【燕人的咆哮】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('machao')!=-1||character.indexOf('马超')!=-1)&&(skills.contains('tieji')||skills.contains('retieji'))){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【全军突击】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('guanyu')!=-1||character.indexOf('关羽')!=-1)){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【武圣显灵】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('zhaoyun')!=-1||character.indexOf('赵云')!=-1)){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【浑身是胆】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('huangyueying')!=-1||character.indexOf('黄月英')!=-1)&&(skills.contains('jizhi')||skills.contains('rejizhi'))){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【锦囊袋】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('zhugeliang')!=-1||character.indexOf('诸葛亮')!=-1)&&skills.contains('kongcheng')){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【空城绝唱】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('lvbu')!=-1||character.indexOf('吕布')!=-1)){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【飞将】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('diaochan')!=-1||character.indexOf('貂蝉')!=-1)&&skills.contains('lijian')){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【倾国倾城】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('huatuo')!=-1||character.indexOf('华佗')!=-1)&&skills.contains('jijiu')){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【乱世名医】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('huaxiong')!=-1||character.indexOf('华雄')!=-1)&&(skills.contains('yaowu')||skills.contains('new_reyaowu'))){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【耀武扬威】';
			ext_num++;
		};
		if(character!=undefined&&(character.indexOf('yuanshu')!=-1||character.indexOf('袁术')!=-1)&&skills.contains('wangzun')){
			if(ext_div.innerHTML!='') ext_div.innerHTML+='<br>';
			ext_div.innerHTML+='可用来完成【登极至尊】';
			ext_num++;
		};
		if(ext_num>0&&lib.config['extension_扩展ol_zgcj_show']==true) uiintro.add(ext_div);
	};
	if(lib.config.aurora_mysql_user!=undefined){
		lib.translate.course='游戏历程';
		lib.extensionMenu.extension_扩展ol.lwgn_put={
			'name':'上传数据',
			"clear":true,
			onclick:function(){
				if(lib.aurora_mysql_connection==false){
					game.say1('数据库连接中...');
					return ;
				};
				if(confirm('是否上传数据？')){
					var ljgn_achievement={};
					for(var i in achievement){
						var a=achievement[i];
						ljgn_achievement[i]='';
						for(var j in a){
							if(lib.config.achievement[i][j].finished==true){
								ljgn_achievement[i]+='1';
							}else{
								ljgn_achievement[i]+='2';
							};
						};
					};
					for(var i in ljgn_achievement){
						lib.aurora_mysql.query('UPDATE 数据 SET '+i+'='+ljgn_achievement[i]+' WHERE user="'+lib.config.aurora_mysql_user+'"',function(err, result){
							game.say1(get.translation(this.link)+'部分上传完成');
						}).link=i;
					};
				};
			},
		};
		lib.extensionMenu.extension_扩展ol.lwgn_fetch={
			'name':'读取数据',
			"clear":true,
			onclick:function(){
				if(lib.aurora_mysql_connection==false){
					game.say1('数据库连接中...');
					return ;
				};
				if(confirm('是否读取数据？（刚上传完的数据须刷新游戏后才能读取）')){
					var str='';
					for(var i in achievement){
						if(i!='course') str+=',';
						str+=i;
					};
					lib.aurora_mysql.query('SELECT '+str+' FROM 数据 WHERE user="'+lib.config.aurora_mysql_user+'"',function(err, result){
						if(err){
							throw err;
						}else{
							for(var i in result[0]){
								var ljgn_achievement=result[0][i];
								var list=[];
								for(var k in achievement[i]){
									list.push(k);
								};
								if(ljgn_achievement.length<list.length){
									for(var l=0;l<(list.length-ljgn_achievement.length);l++){
										ljgn_achievement+='2';
									};
								};
								for(var j=0;j<ljgn_achievement.length;j++){
									if(ljgn_achievement[j]=='1'){
										lib.config.achievement[i][list[j]].finished=true;
										lib.config.achievement[i][list[j]].finished_data=date.getFullYear()+'年'+(date.getMonth()+1)+'月'+date.getDate()+'日  '+date.getHours()+'时'+date.getMinutes()+'分'+date.getSeconds()+'秒';
									}else{
										delete lib.config.achievement[i][list[j]];
									};
								};
							};
							game.saveConfig('achievement',lib.config.achievement);
							alert('读取成功，点击确认刷新游戏');
							game.reload();
							console.log(result);
						};
					});
				};
			},
		};
	};
}