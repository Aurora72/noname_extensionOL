window.func=function(lib,game,ui,get,ai,_status){
	//name,info,time,condition,reward,limit_times
	var date=new Date();
	if(lib.config.finish_task==undefined) game.saveConfig('finish_task',{});
	lib.onover.push(function(result){
		if(game.checkTime('2019-10-01 00:00:00','2019-10-07 23:59:59')&&result==true){
			lib.config.finish_task.guoqingkuaike=true;
		};
		if(lib.config.finish_task.meiriliansheng1!=true){
			if(result==true){
				if(lib.config.finish_task.meiriliansheng==undefined) lib.config.finish_task.meiriliansheng=0;
				lib.config.finish_task.meiriliansheng++;
			}else{
				lib.config.finish_task.meiriliansheng=0;
			};
			if(lib.config.finish_task.meiriliansheng>=8){
				game.say1('完成每日任务【八攻八克】');
				lib.config.finish_task.meiriliansheng1=true;
			};
		};
		if(lib.config.finish_task.shouzhangaojie==undefined){
			if(result==true) game.say1('完成每日任务【首战告捷】');
			lib.config.finish_task.shouzhangaojie=result;
		};
		if(result==true&&lib.config.finish_task.yuzhanyuyon1!=true){
			if(lib.config.finish_task.yuzhanyuyon==undefined) lib.config.finish_task.yuzhanyuyon=0;
			lib.config.finish_task.yuzhanyuyon++;
			if(lib.config.finish_task.yuzhanyuyon>=5){
				game.say1('完成每日任务【愈战愈勇】');
				lib.config.finish_task.yuzhanyuyon1=true;
			};
		};
		game.saveConfig('finish_task',lib.config.finish_task);
	});
	if(lib.kzol_task==undefined) lib.kzol_task={};
	if(lib.config.kzol_task==undefined) lib.config.kzol_task={};//finished_times
	game.saveConfig('kzol_task',lib.config.kzol_task);
	if(lib.config.kzol_task_time==undefined){
		var date=new Date();
		var year=date.getFullYear();
		var month=date.getMonth()+1;
		var day=date.getDate();
		lib.config.kzol_task_time={
			year:year,
			month:month,
			day:day,
		};
		game.saveConfig('kzol_task_time',lib.config.kzol_task_time);
	};
	var tasks={
		'国庆快乐':{
			//info:'',
			time:{
				b:'2019-10-01 00:00:00',
				e:'2019-10-07 23:59:59',
			},
			condition:function(){
				return lib.config.finish_task.guoqingkuaike==true;
			},
			condition_info:'2019国庆假期期间胜利一局',
			reward:{
				'guoqinghongqi':1,
			},
			finished_func:function(){
				delete lib.config.finish_task.guoqingkuaike;
				game.saveConfig('finish_task',lib.config.finish_task);
			},
			//reward_info:'，哈哈哈',
			limit_times:1,
			reward_img:true,
		},
		'限时领取：宝珠':{
			time:{
				b:'2019-10-14 00:00:00',
				e:'2019-10-20 23:59:59',
			},
			condition:function(){
				return true;
			},
			condition_info:'2019年10月14日至20日打开游戏即可领取',
			reward:{
				'baozhu':1,
			},
			limit_times:1,
			reward_img:true,
		},
		'限时领取：千面':{
			time:{
				b:'2019-10-14 00:00:00',
				e:'2019-10-20 23:59:59',
			},
			condition:function(){
				return true;
			},
			condition_info:'2019年10月14日至20日打开游戏即可领取',
			reward:{
				'qianmian':1,
			},
			limit_times:1,
			reward_img:true,
		},
		'限时领取：虚空·大剑':{
			time:{
				b:'2019-10-22 00:00:00',
				e:'2019-10-29 23:59:59',
			},
			condition:function(){
				return true;
			},
			condition_info:'2019年10月22日至29日打开游戏即可领取',
			reward:{
				'xukongdajian':1,
			},
			limit_times:1,
			reward_img:true,
		},
		'限时领取：生命水晶':{
			time:{
				b:'2020-05-26 00:00:00',
				e:'2020-06-02 23:59:59',
			},
			condition:function(){
				return true;
			},
			condition_info:'2020年5月26日至6月2日打开游戏即可领取',
			reward:{
				'shengmingshuijing':1,
			},
			limit_times:1,
			reward_img:true,
		},
		'限时领取：细雪之舞':{
			time:{
				b:'2020-05-27 00:00:00',
				e:'2020-06-03 23:59:59',
			},
			condition:function(){
				return true;
			},
			condition_info:'2020年5月27日至6月3日打开游戏即可领取',
			reward:{
				'xixuezhiwu':1,
			},
			limit_times:1,
			reward_img:true,
		},
		'首战告捷':{
			daily_re:true,
			jd:function(){
				var num=0;
				if(lib.config.finish_task.shouzhangaojie==true) num=1;
				return '<br><br> 当前进度：'+num+'/1';
			},
			condition:function(){
				return lib.config.finish_task.shouzhangaojie==true;
			},
			condition_info:'今天内首场战斗获胜',
			reward:{
				'shuijing':100,
			},
			reward_img:true,
			limit_times:1,
		},
		'日行一善':{
			daily_re:true,
			jd:function(){
				var num=0;
				if(lib.config.finish_task.rixingyishan==true) num=1;
				return '<br><br> 当前进度：'+num+'/1';
			},
			condition:function(){
				return lib.config.finish_task.rixingyishan==true;
			},
			condition_info:'今天内使用【桃】救助一次其<br>他角色',
			reward:{
				'shuijing':50,
			},
			reward_img:true,
			limit_times:1,
		},
		'愈战愈勇':{
			daily_re:true,
			jd:function(){
				var num=0;
				if(lib.config.finish_task.yuzhanyuyon!=undefined) num=lib.config.finish_task.yuzhanyuyon;
				return '<br><br> 当前进度：'+num+'/5';
			},
			condition:function(){
				//return lib.config.finish_task.yuzhanyuyon>=5;
				return lib.config.finish_task.yuzhanyuyon1==true;
			},
			condition_info:'今天内获胜5局',
			reward:{
				'baozhu':1,
			},
			reward_img:true,
			limit_times:1,
		},
		'八攻八克':{
			daily_re:true,
			jd:function(){
				var num=0;
				if(lib.config.finish_task.meiriliansheng!=undefined) num=lib.config.finish_task.meiriliansheng;
				return '<br><br> 当前进度：'+num+'/8';
			},
			condition:function(){
				return lib.config.finish_task.meiriliansheng1==true;
			},
			condition_info:'今天内连胜8局',
			reward:{
				'qianmian':1,
				'shuijing':75,
			},
			reward_img:true,
			limit_times:1,
		},
	};
	for(var i in tasks){
		var task=tasks[i];
		lib.kzol_task[i]=task;
	};
	setTimeout(function(){
		var date=new Date();
		var year=date.getFullYear();
		var month=date.getMonth()+1;
		var day=date.getDate();
		var config_time=lib.config.kzol_task_time;
		if(config_time.year!=year||config_time.month!=month||config_time.day!=day){
			delete lib.config.finish_task.meiriliansheng;
			delete lib.config.finish_task.meiriliansheng1;
			delete lib.config.finish_task.shouzhangaojie;
			delete lib.config.finish_task.rixingyishan;
			delete lib.config.finish_task.yuzhanyuyon;
			delete lib.config.finish_task.yuzhanyuyon1;
			game.saveConfig('finish_task',lib.config.finish_task);
			var bool=false;
			for(var i in lib.kzol_task){
				if(lib.kzol_task[i].daily_re==true){
					lib.config.kzol_task[i]=0;
					bool=true;
				};
			};
			if(bool==true) game.saveConfig('kzol_task',lib.config.kzol_task);
			lib.config.kzol_task_time={
				year:year,
				month:month,
				day:day,
			};
			game.saveConfig('kzol_task_time',lib.config.kzol_task_time);
		};
	},1000);
	game.checkTime=function(bTime,eTime){
		//game.checkTime('2019-09-18 00:00:00','2019-10-22 00:00:00')
		var time;
		var month=(date.getMonth()+1).toString();
		if(month.length==1) month='0'+month;
		var day=date.getDate().toString();
		if(day.length==1) day='0'+day;
		var hour=date.getHours().toString();
		if(hour.length==1) hour='0'+hour;
		var minute=date.getMinutes().toString();
		if(minute.length==1) minute='0'+minute;
		var second=date.getSeconds().toString();
		if(second.length==1) second='0'+second;
		time=date.getFullYear()+'-'+month+'-'+day+' '+hour+':'+minute+':'+second;
		var beginTime=time;
		var endTime=bTime;
		var beginTimes=beginTime.substring(0,10).split('-');
		var endTimes=endTime.substring(0,10).split('-');
		beginTime=beginTimes[1]+'-'+beginTimes[2]+'-'+beginTimes[0]+' '+beginTime.substring(10,19);
		endTime=endTimes[1]+'-'+endTimes[2]+'-'+endTimes[0]+' '+endTime.substring(10,19);
		var a=(Date.parse(endTime)-Date.parse(beginTime))/3600/1000;
		if(a<0){
			var beginTime1=time;
			var endTime1=eTime;
			var beginTimes1=beginTime1.substring(0,10).split('-');
			var endTimes1=endTime1.substring(0,10).split('-');
			beginTime1=beginTimes1[1]+'-'+beginTimes1[2]+'-'+beginTimes1[0]+' '+beginTime1.substring(10,19);
			endTime1=endTimes1[1]+'-'+endTimes1[2]+'-'+endTimes1[0]+' '+endTime1.substring(10,19);
			var a=(Date.parse(endTime1)-Date.parse(beginTime1))/3600/1000;
			if(a>0){
				return true;
			};
		};
		return false;
	};
	game.openTask=function(){
		if(lib.config['extension_扩展ol_task_stop']!=false) game.pause2();
		var dialog1={};
		var info=ui.create.div('.menu');
		info.style.transition='left 0s,top 0s,opacity .3s';
		info.style.width='312px';
		info.style['pointer-events']='none';
		info.style['text-align']='left';
		info.style.animation='fadeShow .3s';
		info.style['-webkit-animation']='fadeShow .3s';
		info.style['z-index']=499;
		dialog1.info=info;
		var background=ui.create.dialog('hidden');
		//background.classList.add('popped');
		//background.classList.add('static');
		background.style.height='calc(100%)';
		background.style.width='calc(100%)';
		background.style.left='0px';
		background.style.top='0px';
		ui.window.appendChild(background);
		dialog1.background=background;
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
		ui.window.appendChild(bg_new);
		dialog1.bg_new=bg_new;
		var b=ui.create.div();
		b.style.height='360px';
		b.style.width='400px';
		b.style.left='113px';
		b.style.top='72px';
		b.style.borderRadius='5px';
		b.style['overflow-x']='hidden';
		b.style['overflow-y']='scroll';
		lib.setScroll(b);
		bg_new.appendChild(b);
		for(var i in lib.kzol_task){
			var tasks=lib.kzol_task;
			var task=tasks[i];
			var str4='';
			if(task.limit_times!=undefined){
				str4+='限完成'+get.cnNumber(task.limit_times)+'次)';
				if(task.daily_re!=undefined){
					str4='(每日'+str4;
				}else{
					str4='('+str4;
				};
			};
			var str5='';
			if(task.info!=undefined) str5='<br>'+task.info;
			var str='';
			str+='<span style="font-family:shousha;white-space:pre;color:#FFFFFF;">'+
			'<span style="font-size:25px;font-weight:600;">'+i+
			'</span>'+'<br>'+str4+str5;
			if(task.jd!=undefined) str+=task.jd();
			str+='<br><br> 条件：<br>&nbsp '+task.condition_info;
			var str2='';
			if(task.time!=undefined){
				if(task.reward_img!=true){
					str2+='<br><br> 限时：<br>&nbsp '+task.time.b+'至'+task.time.e;
				}else{
					str2+='<br><br> 限时：<br>&nbsp '+task.time.b+'至<br>&nbsp '+task.time.e;
				};
			};
			if(task.reward_img!=true){
				var str1='';
				if(task.reward!=undefined){
					for(var j in task.reward){
						str1+=get.translation(j)+'X'+task.reward[j]+'、';
					};
				};
				if(str1!='') str1=str1.slice(0,str1.length-1);
				if(task.reward_info!=undefined) str1+=task.reward_info;
				str+='<br><br> '+'奖励：<br>&nbsp '+str1+str2+'</span>'
			}else{
				str+=str2;
			};
			var task1=ui.create.div('',str);
			task1.style.textAlign='left';
			task1.style.display='table';
			task1.style.width='calc(100% - 5px)';
			task1.style.top='0px';
			task1.style.left='0px';
			task1.style.borderRadius='3px';
			task1.style.background='rgba(0,0,0,0.4)';
			task1.style.border='2px solid black';
			task1.style.position='relative';
			task1.style['margin-top']='5px';
			task1.link=task;
			task1.link_name=i;
			b.appendChild(task1);
			if(task.reward_img==true){
				var reward_show=ui.create.div();
				reward_show.style.bottom='4px';
				reward_show.style.right='4px';
				reward_show.style['font-family']='shousha';
				reward_show.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
				reward_show.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
				reward_show.style['text-align']='left';
				reward_show.style.height='56px';
				reward_show.style.width='162px';
				reward_show.style.borderRadius='3px';
				reward_show.style['overflow-x']='scroll';
				reward_show.style['overflow-y']='hidden';
				lib.setScroll(reward_show);
				task1.appendChild(reward_show);
				reward_show.addEventListener('mousewheel',function(e){
					var delD=e.wheelDelta?e.wheelDelta: -e.detail*40;
					var move_s=delD>0?-30:30;
					this.scrollLeft+=move_s;
				});
				if(task.reward!=undefined){
					var num1=0;
					for(var j in task.reward){
						var item;
						if(lib.kzol_bag!=undefined&&lib.kzol_bag[j]!=undefined) item=lib.kzol_bag[j];
						var div1=ui.create.div();
						div1.style.height='50px';
						div1.style.width='50px';
						div1.style.top='3px';
						div1.style.left=(3+num1*53)+'px';
						//div1.style['margin-top']='2.5px';
						//div1.style['margin-left']='2.5px';
						//div1.style.position='relative';
						div1.style.borderRadius='5px';
						if(item!=undefined){
							if(item.noBorder==true){
								div1.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/'+item.name+'.png'+'")';
							}else if(item.character){
								div1.setBackground(item.character,'character');
								if(item.noBorder!=true){
									var str=div1.style.backgroundImage;
									str='url("'+lib.assetURL+'extension/扩展ol/item.png"),'+str;
									div1.style.backgroundImage=str;
								};
							}else{
								div1.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/item.png"),'+'url("'+lib.assetURL+'extension/扩展ol/'+item.name+'.png'+'")';
							};
						}else{
							div1.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/item.png")';
							div1.innerHTML=get.translation(j);
						};
						div1.style.backgroundSize="cover";
						div1.link=item;
						div1.link1=task.reward[j];
						reward_show.appendChild(div1);
						div1.onmouseover=function(){
							if(this.link!=undefined){
								var item=this.link;
								var info2='';
								info2='可叠加';
								if(item.canLay==false) info2='不可叠加';
								var info1='';
								info1=item.info;
								var str='';
								str+='<span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">'+get.translation(item.name)+'</span><br>'+info2+'<br>'+
								get.translation(item.type)+'<br>'+
								'数量：'+this.link1;
								if(item.hg_base!=undefined&&item.hg_max!=undefined){
									str+='<br>觉醒度：'+item.hg_base+'/'+item.hg_max;
								};
								str+='<br>简介：<br>&nbsp&nbsp'+info1+'</span>';
							}else{
								str='No Data';
							};
							info.innerHTML=str;
							ui.window.appendChild(info);
							info.hide();
							info.style.left=(event.clientX/game.documentZoom+10+document.body.scrollLeft)+'px';
							info.style.top=(event.clientY/game.documentZoom+document.body.scrollTop)+'px';
							//info.style.height=(info.firstChild.offsetHeight+10)+'px';
							if(info.offsetTop+info.offsetHeight>ui.window.offsetTop+ui.window.offsetHeight){
								info.style.top=(event.clientY/game.documentZoom+document.body.scrollTop-info.offsetHeight)+'px';
							};
							info.show();
						};
						div1.onmousemove=function(){
							info.style.left=(event.clientX/game.documentZoom+10+document.body.scrollLeft)+'px';
							info.style.top=(event.clientY/game.documentZoom+document.body.scrollTop)+'px';
							if(info.offsetTop+info.offsetHeight>ui.window.offsetTop+ui.window.offsetHeight){
								info.style.top=(event.clientY/game.documentZoom+document.body.scrollTop-info.offsetHeight)+'px';
							};
						};
						div1.onmouseout=function(){
							info.hide();
						};
						var div_name=ui.create.div();
						div_name.style.height='10px';
						if(item!=undefined&&item.noBorder==true){
							div_name.style.width='calc(100% - 1px)';
							div_name.style.bottom='0px';
							div_name.style.right='1px';
						}else{
							div_name.style.width='calc(100% - 3px)';
							div_name.style.bottom='2px';
							div_name.style.right='3px';
						};
						div_name.style['font-size']='10px';
						div_name.style['text-align']='right';
						div_name.style['font-family']='shousha';
						div_name.style.color='white';
						div_name.style['text-shadow']='black 0 0 2px';
						div_name.innerHTML='<span style="font-weight:600;">'+task.reward[j]+'</span>';
						div1.appendChild(div_name);
						num1++;
					};
				};
			};
			var str3='<span style="cursor:pointer;color:#FFFFFF;">&nbsp未完成&nbsp</span>';
			if(task.condition()) str3='<span style="cursor:pointer;color:#FFFFFF;">&nbsp领取奖励&nbsp</span>';
			if(lib.config.kzol_task[i]>=task.limit_times) str3='<span style="cursor:pointer;color:#FFFFFF;">&nbsp已达上限&nbsp</span>';
			if(task.time!=undefined&&!game.checkTime(task.time.b,task.time.e)) str3='<span style="cursor:pointer;color:#FFFFFF;">&nbsp已过期&nbsp</span>';
			var finish_button=ui.create.div('',str3,function(){
				var task=this.link;
				var name=this.link_name;
				if(task.time!=undefined&&!game.checkTime(task.time.b,task.time.e)){
					game.say1('该任务已过期');
					return ;
				};
				if(lib.config.kzol_task[name]>=task.limit_times){
					game.say1('该任务完成次数已达上限');
					return ;
				};
				if(!task.condition()){
					game.say1('未完成该任务');
					return ;
				};
				if(task.reward!=undefined){
					for(var j in task.reward){
						game.gainItem(j,task.reward[j]);
					};
				};
				if(task.finished_func!=undefined) task.finished_func();
				if(lib.config.kzol_task[name]==undefined) lib.config.kzol_task[name]=0;
				lib.config.kzol_task[name]++;
				game.saveConfig('kzol_task',lib.config.kzol_task);
				if(!task.condition()) this.innerHTML='<span style="cursor:pointer;color:#FFFFFF;">&nbsp未完成&nbsp</span>';
				if(task.condition()) this.innerHTML='<span style="cursor:pointer;color:#FFFFFF;">&nbsp领取奖励&nbsp</span>';
				if(lib.config.kzol_task[name]>=task.limit_times) this.innerHTML='<span style="cursor:pointer;color:#FFFFFF;">&nbsp已达上限&nbsp</span>';
				if(task.time!=undefined&&!game.checkTime(task.time.b,task.time.e)) this.innerHTML='<span style="cursor:pointer;color:#FFFFFF;">&nbsp已过期&nbsp</span>';
			});
			finish_button.style['font-size']='28px';
			finish_button.style['line-height']='40px';
			finish_button.style['font-family']="'STXinwei','xinwei'";
			finish_button.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			finish_button.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			finish_button.style['text-align']='center';
			finish_button.style.height='40px';
			//finish_button.style.width='120px';
			finish_button.style.borderRadius='8px';
			task1.appendChild(finish_button);
			finish_button.style.top='4px';
			finish_button.style.right='4px';
			finish_button.link=task;
			finish_button.link_name=i;
			if(task.time!=undefined&&!game.checkTime(task.time.b,task.time.e)) task1.style.display='none';
		};
		var t=ui.create.div();
		t.style.height='20px';
		t.style.width='144px';
		t.style.left='calc(50% - 73px)';
		t.style.top='40px';
		t.innerHTML='<span style="color:#FFFFFF;font-size:20px;font-weight:600;font-family:shousha">任务</span>';
		bg_new.appendChild(t);
		var b1=ui.create.div();
		b1.style.height='360px';
		b1.style.width='95px';
		b1.style.left='16px';
		b1.style.top='72px';
		b1.style.borderRadius='5px';
		bg_new.appendChild(b1);
		var func3=function(){
			var type=this.link;
			for(var j=0;j<b1.childNodes.length;j++){
				b1.childNodes[j].style.backgroundColor="";
			};
			this.style.backgroundColor="#E00000";
			var task_divs=b.childNodes;
			for(var j=0;j<task_divs.length;j++){
				var div=task_divs[j];
				div.style.display='none';
			};
			if(type=='常驻'){
				for(var j=0;j<task_divs.length;j++){
					var div=task_divs[j];
					var task=div.link;
					var name=div.link_name;
					if(task.time==undefined) div.style.display='';
				};
			}else if(type=='活动'){
				for(var j=0;j<task_divs.length;j++){
					var div=task_divs[j];
					var task=div.link;
					var name=div.link_name;
					if(task.time!=undefined&&game.checkTime(task.time.b,task.time.e)) div.style.display='';
				};
			}else if(type=='过期'){
				for(var j=0;j<task_divs.length;j++){
					var div=task_divs[j];
					var task=div.link;
					var name=div.link_name;
					if(task.time!=undefined&&!game.checkTime(task.time.b,task.time.e)) div.style.display='';
				};
			}else if(type=='全部'){
				for(var j=0;j<task_divs.length;j++){
					var div=task_divs[j];
					var task=div.link;
					var name=div.link_name;
					if(task.time==undefined||(task.time!=undefined&&game.checkTime(task.time.b,task.time.e))) div.style.display='';
				};
			}else{
				for(var j=0;j<task_divs.length;j++){
					div.style.display='';
				};
			};
		};
		var div=ui.create.div('','<span style="cursor:pointer;color:#FFFFFF;">全部</span>',func3);
		div.style['font-size']='30px';
		div.style['line-height']='40px';
		div.style['font-family']="'STXinwei','xinwei'";
		div.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
		div.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
		div.style['white-space']='nowrap';
		div.style.cursor='pointer';
		div.style.height='40px';
		div.style.width='90px';
		div.style.top='0px';
		div.style.left='0px';
		div.style.borderRadius='8px';
		div.style.backgroundColor="#E00000";
		div.style.position='relative';
		div.style['margin-top']='5px';
		div.link='全部';
		b1.appendChild(div);
		var div=ui.create.div('','<span style="cursor:pointer;color:#FFFFFF;">常驻</span>',func3);
		div.style['font-size']='30px';
		div.style['line-height']='40px';
		div.style['font-family']="'STXinwei','xinwei'";
		div.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
		div.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
		div.style['white-space']='nowrap';
		div.style.cursor='pointer';
		div.style.height='40px';
		div.style.width='90px';
		div.style.top='0px';
		div.style.left='0px';
		div.style.borderRadius='8px';
		div.style.position='relative';
		div.style['margin-top']='5px';
		div.link='常驻';
		b1.appendChild(div);
		var div=ui.create.div('','<span style="cursor:pointer;color:#FFFFFF;">活动</span>',func3);
		div.style['font-size']='30px';
		div.style['line-height']='40px';
		div.style['font-family']="'STXinwei','xinwei'";
		div.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
		div.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
		div.style['white-space']='nowrap';
		div.style.cursor='pointer';
		div.style.height='40px';
		div.style.width='90px';
		div.style.top='0px';
		div.style.left='0px';
		div.style.borderRadius='8px';
		div.style.position='relative';
		div.style['margin-top']='5px';
		div.link='活动';
		b1.appendChild(div);
		var div=ui.create.div('','<span style="cursor:pointer;color:#FFFFFF;">过期</span>',func3);
		div.style['font-size']='30px';
		div.style['line-height']='40px';
		div.style['font-family']="'STXinwei','xinwei'";
		div.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
		div.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
		div.style['white-space']='nowrap';
		div.style.cursor='pointer';
		div.style.height='40px';
		div.style.width='90px';
		div.style.top='0px';
		div.style.left='0px';
		div.style.borderRadius='8px';
		div.style.position='relative';
		div.style['margin-top']='5px';
		div.link='过期';
		b1.appendChild(div);
		var div=ui.create.div();
		div.style.height='calc(100%)';
		div.style.width='calc(100%)';
		div.style.left='0px';
		div.style.top='0px';
		var func1=function(){
			if(lib.config['extension_扩展ol_task_stop']!=false) game.resume2();
			for(var i in dialog1){
				dialog1[i].delete();
				delete dialog1[i];
			};
		};
		setTimeout(function(){
			div.onclick=function(){
				func1();
			};
		},750);
		background.appendChild(div);
	};
	lib.extensionMenu.extension_扩展ol.task_title={
		"name":"<b><p align=center><span style=\"font-size:18px\">------任务------</span></b>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol.task_openTask={
		'name':'任务界面<div>&gt;</div>',
		"clear":true,
		onclick:function(){
			ui.click.configMenu();
			game.openTask();
		},
	};
	lib.extensionMenu.extension_扩展ol['task_stop']={
		"name":"打开任务界面时暂停游戏",
		"init":true
    };
}