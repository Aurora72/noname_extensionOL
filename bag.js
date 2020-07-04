window.func=function(lib,game,ui,get,ai,_status){
	if(lib.config.kzol_bag_num==undefined) game.saveConfig('kzol_bag_num',0);
	if(lib.kzol_bag==undefined) lib.kzol_bag={};
	if(lib.config.kzol_bag==undefined) lib.config.kzol_bag={};
	game.saveConfig('kzol_bag',lib.config.kzol_bag);
	var bag={
		'shuijing':{
			name:'shuijing',
			info:'扩展ol代币',
			type:'material',
			canLay:true,
			noBorder:true,
		},
		'guoqinghongqi':{
			name:'guoqinghongqi',
			info:'我爱中国<br>（国庆纪念物品，可无限制使用）',
			type:'consumables',//material
			canLay:false,
			//consume_num:1,
			func:"game.say1('我爱中国');",
		},
	};
	for(var i in bag){
		var item=bag[i];
		lib.kzol_bag[i]=item;
	};
	game.openBag=function(){
		if(lib.config['extension_扩展ol_bag_stop']!=false) game.pause2();
		var dialog1={};
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
		b.style.height='355px';
		b.style.width='406px';
		b.style.left='112px';
		b.style.top='77px';
		b.style.borderRadius='5px';
		b.style['text-align']='left';
		b.style['overflow-x']='hidden';
		b.style['overflow-y']='scroll';
		lib.setScroll(b);
		bg_new.appendChild(b);
		var num=0;
		var list=[];
		var list1=[];
		for(var i in lib.config.kzol_bag){
			list.push(lib.config.kzol_bag[i]);
			list1.push(i);
			num++;
		};
		//if(num%7!=0) num=Math.ceil(num/7)*7;
		var info=ui.create.div('.menu');
		info.style.transition='left 0s,top 0s,opacity .3s';
		info.style.width='312px';
		info.style['pointer-events']='none';
		info.style['text-align']='left';
		info.style.animation='fadeShow .3s';
		info.style['-webkit-animation']='fadeShow .3s';
		info.style['z-index']=499;
		dialog1.info=info;
		for(var i=0;i<num;i++){
			var div=ui.create.div('.card.fullskin');
			div.style.height='50px';
			div.style.width='50px';
			div.style.top='-8px';
			div.style.borderRadius='5px';
			if(list[i]!=undefined){
				if(list[i].noBorder==true){
					div.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/'+list[i].name+'.png'+'")';
				}else if(list[i].character){
					div.setBackground(list[i].character,'character');
					if(list[i].noBorder!=true){
						var str=div.style.backgroundImage;
						str='url("'+lib.assetURL+'extension/扩展ol/item.png"),'+str;
						div.style.backgroundImage=str;
					};
				}else{
					div.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/item.png"),'+'url("'+lib.assetURL+'extension/扩展ol/'+list[i].name+'.png'+'")';
				};
			}else{
				div.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/item.png")';
			};
			div.style.backgroundSize="cover";
			div.link=list[i];
			div.link1=list1[i];
			if(list[i]!=undefined){
				if(lib.config.extension_扩展ol_bag_showNum==true){
					var div_name=ui.create.div();
					div_name.style.height='10px';
					if(list[i].noBorder==true){
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
					div_name.innerHTML='<span style="font-weight:600;">'+lib.config.kzol_bag[list1[i]].num+'</span>';
					div.appendChild(div_name);
					div.link_name=div_name;
				};
				if(lib.device==undefined){
					div.onmouseover=function(){
						var item=this.link;
						var info2='';
						info2='可叠加';
						if(lib.config.kzol_bag[this.link1].canLay==false) info2='不可叠加';
						var info1='No Data';
						if(lib.kzol_bag[item.name]!=undefined) info1=lib.kzol_bag[item.name].info;
						if(item.ext_info!=undefined) info1=lib.config.kzol_bag[this.link1].ext_info;
						var str='';
						str+='<span style="font-family:shousha;"><span style="font-size:18px;font-weight:600">'+get.translation(item.ext_name)+'</span><br>'+info2+'<br>'+
						get.translation(item.type)+'<br>'+
						'数量：'+item.num;
						if(item.hg_base!=undefined&&item.hg_max!=undefined){
							str+='<br>觉醒度：'+item.hg_base+'/'+item.hg_max;
						};
						str+='<br>简介：<br>&nbsp&nbsp'+info1+'</span>';
						//if(info.content.firstChild==undefined) info.addText(str,false);
						//if(info.content.firstChild!=undefined&&info.content.firstChild.firstChild!=undefined) info.content.firstChild.firstChild.innerHTML=str;
						info.innerHTML=str;
						ui.window.appendChild(info);
						//info.setBackgroundImage('extension/扩展ol/Background3.jpg');
						//info.style.backgroundSize="100% 100%";
						info.hide();
						info.style.left=(event.clientX/game.documentZoom+10+document.body.scrollLeft)+'px';
						info.style.top=(event.clientY/game.documentZoom+document.body.scrollTop)+'px';
						//info.style.height=(info.content.firstChild.firstChild.offsetHeight+34)+'px';
						//info.style.height=(info.firstChild.offsetHeight+10)+'px';
						if(info.offsetTop+info.offsetHeight>ui.window.offsetTop+ui.window.offsetHeight){
							info.style.top=(event.clientY/game.documentZoom+document.body.scrollTop-info.offsetHeight)+'px';
						};
						info.show();
					};
					div.onmousemove=function(){
						info.style.left=(event.clientX/game.documentZoom+10+document.body.scrollLeft)+'px';
						info.style.top=(event.clientY/game.documentZoom+document.body.scrollTop)+'px';
						if(info.offsetTop+info.offsetHeight>ui.window.offsetTop+ui.window.offsetHeight){
							info.style.top=(event.clientY/game.documentZoom+document.body.scrollTop-info.offsetHeight)+'px';
						};
					};
					div.onmouseout=function(){
						info.hide();
					};
					//div.ondblclick=use_func;
					//div.onM_link=info;
				};
				div.onclick=function(){
					var item_div=this;
					var background1=ui.create.dialog('hidden');
					background1.style.height='calc(100%)';
					background1.style.width='calc(100%)';
					background1.style.left='0px';
					background1.style.top='0px';
					background1.style.zIndex="998";
					ui.window.appendChild(background1);
					var box=document.createElement("div");
					var button=document.createElement("div");
					var button1=document.createElement("div");
					var button2=document.createElement("div");
					var boxName={
						width:"550px",
						display:"table",
						background:'rgba(0,0,0,0.4)',
						border:"2px solid black",
						position:"absolute",
						top:"calc(50% - 90px)",
						left:"calc(50% - 275px)",
						//margin:"-90px 0 0 -250px",
						zIndex:"999",
						textAlign:"left",
						lineHeight:"21px",
						borderRadius:"3px",
						animation:'fadeShow .3s',
						'-webkit-animation':'fadeShow .3s'
					};
					for(var k in boxName){
						box.style[k]=boxName[k];
					};
					document.body.appendChild(box);
					var item=this.link;
					var info2='';
					info2='可叠加';
					if(lib.config.kzol_bag[this.link1].canLay==false) info2='不可叠加';
					var info1='';
					info1=lib.kzol_bag[item.name].info;
					if(item.ext_info!=undefined) info1=lib.config.kzol_bag[this.link1].ext_info;
					var str='';
					str+='<span style="font-family:shousha;color:#FFFFFF;"><span style="font-size:18px;font-weight:600">'+get.translation(item.ext_name)+'</span><br> '+info2+'<br> '+
					get.translation(item.type)+'<br> '+
					'数量：'+item.num;
					if(item.hg_base!=undefined&&item.hg_max!=undefined){
						str+='<br>觉醒度：'+item.hg_base+'/'+item.hg_max;
					};
					str+='<br> 简介：<br>&nbsp&nbsp'+info1+'</span><br><br><br>';
					box.innerHTML=str;
					button.innerHTML='关闭';
					button1.innerHTML='使用';
					button2.innerHTML='丢弃';
					var btnName={
						border:"1px solid #ccc",
						//backgroundColor:"#fff",
						width:"70px",
						height:"30px",
						textAlign:"center",
						lineHeight:"30px",
						outline:"none",
						position:"absolute",
						bottom:"10px",
						right:"10px",
						cursor:"pointer",
					};
					for(var j in btnName){
						button.style[j]=btnName[j];
						button1.style[j]=btnName[j];
						button2.style[j]=btnName[j];
					};
					button1.style.right='90px';
					box.appendChild(button);
					var bool2=false;
					if(lib.kzol_bag[this.link.name].func!=undefined) bool2=true;
					if(lib.kzol_bag[this.link.name].func==undefined&&lib.config.kzol_bag[this.link1].ext_func!=undefined) bool2=true;
					if(bool2){
						box.appendChild(button1);
						button2.style.right='170px';
					}else{
						button2.style.right='90px';
					};
					box.appendChild(button2);
					button.addEventListener("click",function(){
						background1.delete();
						box.delete();
						//ui.window.removeChild(box);
						//box.style.display="none";
					});
					button1.link=this.link;
					button1.link1=this.link1;
					button1.link_name=this.link_name;
					button1.addEventListener("click",function(){
						var bool=false;
						var item=this.link;
						if(item.ext_func==undefined){
							var func=lib.kzol_bag[item.name].func;
						}else{
							var func=lib.config.kzol_bag[this.link1].ext_func;
						};
						if(func==undefined) return ;
						if(lib.config.extension_扩展ol_bag_noTips==true){
							eval(func);
						}else{
							if(confirm('是否使用'+get.translation(item.name)+'?')){
								eval(func);
								game.say1('使用'+get.translation(item.name)+'完成');
								background1.delete();
								box.delete();
								//ui.window.removeChild(box);
							}else{
								return ;
							};
						};
						if(item.consume_num!=undefined&&b!=undefined&&this!=undefined){
							game.loseItem2(this.link1,item.consume_num);
							if(lib.config.kzol_bag[this.link1]==undefined){
								b.removeChild(item_div);
								//if(this.onM_link!=undefined) this.onM_link.hide();
								/*
								var div=ui.create.div('.card.fullskin');
								div.style.height='50px';
								div.style.width='50px';
								div.style.top='-8px';
								div.style.borderRadius='5px';
								div.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/item.png")';
								div.style.backgroundSize="cover";
								div.link=list[i];
								div.link1=list1[i];
								b.appendChild(div);
								*/
							}else{
								if(this.link_name!=undefined) this.link_name.innerHTML='<span style="font-weight:600;">'+lib.config.kzol_bag[this.link1].num+'</span>';
							};
						};
					});
					button2.link=this.link;
					button2.link1=this.link1;
					button2.addEventListener("click",function(){
						var item=this.link;
						var bool=false;
						if(lib.config.extension_扩展ol_bag_noTips1==true){
							bool=true;
						}else{
							if(confirm('是否丢弃'+get.translation(item.name)+'?')){
								bool=true;
							};
						};
						if(bool==true){
							delete lib.config.kzol_bag[this.link1];
							game.saveConfig('kzol_bag',lib.config.kzol_bag);
							b.removeChild(item_div);
							//if(this.onM_link!=undefined) this.onM_link.hide();
							/*
							var div=ui.create.div('.card.fullskin');
							div.style.height='50px';
							div.style.width='50px';
							div.style.top='-8px';
							div.style.borderRadius='5px';
							div.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/item.png")';
							div.style.backgroundSize="cover";
							div.link=list[i];
							div.link1=list1[i];
							b.appendChild(div);
							*/
							game.say1('丢弃'+get.translation(item.name)+'完成');
							background1.delete();
							box.delete();
							//ui.window.removeChild(box);
						};
					});
					var div1=ui.create.div('');
					div1.style.height='50px';
					div1.style.width='50px';
					div1.style.top='10px';
					div1.style.right='10px';
					div1.style.borderRadius='5px';
					if(this.link!=undefined){
						if(this.link.noBorder==true){
							div1.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/'+this.link.name+'.png'+'")';
						}else if(this.link.character){
							div1.setBackground(this.link.character,'character');
							if(this.link.noBorder!=true){
								var str=div1.style.backgroundImage;
								str='url("'+lib.assetURL+'extension/扩展ol/item.png"),'+str;
								div1.style.backgroundImage=str;
							};
						}else{
							div1.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/item.png"),'+'url("'+lib.assetURL+'extension/扩展ol/'+this.link.name+'.png'+'")';
						};
					}else{
						div1.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/item.png")';
					};
					div1.style.backgroundSize="cover";
					box.appendChild(div1);
					ui.window.appendChild(box);
				};
			};
			b.appendChild(div);
		};
		var t=ui.create.div();
		t.style.height='20px';
		t.style.width='144px';
		t.style.left='calc(50% - 73px)';
		t.style.top='40px';
		t.innerHTML='<span style="color:#FFFFFF;font-size:20px;font-weight:600;font-family:shousha">背包</span>';
		bg_new.appendChild(t);
		var b1=ui.create.div();
		b1.style.height='360px';
		b1.style.width='95px';
		b1.style.left='15px';
		b1.style.top='72px';
		b1.style.borderRadius='5px';
		bg_new.appendChild(b1);
		var func2=function(){
			for(var j=0;j<b1.childNodes.length;j++){
				b1.childNodes[j].style.backgroundColor="";
			};
			this.style.backgroundColor="#E00000";
			for(var j=0;j<b.childNodes.length;j++){
				var div=b.childNodes[j];
				if(this.link=='all'){
					div.style.display='';
				}else{
					if(div.link.type!=this.link){
						div.style.display='none';
					}else{
						div.style.display='';
					};
				};
			};
		};
		var itemType_list=[];
		for(var i in lib.kzol_bag){
			if(!itemType_list.contains(lib.kzol_bag[i].type)) itemType_list.push(lib.kzol_bag[i].type);
		};
		var div=ui.create.div('','<span style="cursor:pointer;color:#FFFFFF;">全部</span>',func2);
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
		div.link='all';
		b1.appendChild(div);
		for(var i=0;i<itemType_list.length;i++){
			var div=ui.create.div('','<span style="cursor:pointer;color:#FFFFFF;">'+get.translation(itemType_list[i])+'</span>',func2);
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
			div.link=itemType_list[i];
			b1.appendChild(div);
		};
		var div=ui.create.div();
		div.style.height='1000px';
		div.style.width='1000px';
		div.style.left='-10px';
		div.style.top='-10px';
		var func1=function(){
			if(lib.config['extension_扩展ol_bag_stop']!=false) game.resume2();
			for(var i in dialog1){
				dialog1[i].delete();
				delete dialog1[i];
			};
			delete game.closeBag;
		};
		setTimeout(function(){
			div.onclick=function(){
				func1();
			};
		},750);
		background.add(div);
		game.closeBag=func1;
	};
	game.gainItem=function(name,num,ext_name,ext_type,ext_canLay,ext_info,ext_func){
		if(ext_name==undefined) ext_name=name;
		var items=lib.config.kzol_bag;
		var result=false;
		var result1=-1;
		for(var i in items){
			var item=items[i];
			if(ext_name==item.ext_name){
				result=item.name;
				result1=i;
			};
		};
		if(result==false||(result!=false&&lib.config.kzol_bag[result1].canLay==false)){
			var item1={
				name:name,
				num:num,
				type:lib.kzol_bag[name].type,
				canLay:lib.kzol_bag[name].canLay,
				hg_base:lib.kzol_bag[name].hg_base,
				hg_max:lib.kzol_bag[name].hg_max,
				hg_finfish:lib.kzol_bag[name].hg_finfish,
				ext_name:ext_name,
			};
			if(lib.kzol_bag[name].noBorder!=undefined) item1.noBorder=lib.kzol_bag[name].noBorder;
			if(lib.kzol_bag[name].consume_num!=undefined) item1.consume_num=lib.kzol_bag[name].consume_num;
			if(lib.kzol_bag[name].character!=undefined) item1.character=lib.kzol_bag[name].character;
			if(ext_type!=undefined) item1.type=ext_type;
			if(ext_canLay!=undefined) item1.canLay=ext_canLay;
			if(ext_info!=undefined) item1.ext_info=ext_info;
			if(ext_func!=undefined) item1.ext_func=ext_func;
			lib.config.kzol_bag[lib.config.kzol_bag_num]=item1;
			game.saveConfig('kzol_bag_num',lib.config.kzol_bag_num+1);
		}else{
			lib.config.kzol_bag[result1].num+=num;
		};
		game.saveConfig('kzol_bag',lib.config.kzol_bag);
		game.say1('获得了'+get.translation(ext_name)+'X'+num);
		if(game.kzol_rushBag!=undefined) game.kzol_rushBag();
	};
	game.clearItems=function(){
		game.saveConfig('kzol_bag',{});
		game.say1('清空了背包');
	};
	game.loseItem=function(ext_name,num,bool1){
		var items=lib.config.kzol_bag;
		var bool=false;
		for(var i in items){
			var item=items[i];
			if(ext_name==item.ext_name) bool=true;
		};
		if(bool==true){
			for(var i in items){
				var item=items[i];
				if(ext_name==item.ext_name){
					lib.config.kzol_bag[i].num-=num;
					if(lib.config.kzol_bag[i].num<=0){
						delete lib.config.kzol_bag[i];
					};
				};
			};
			game.saveConfig('kzol_bag',lib.config.kzol_bag);
			if(bool1!=false) game.say1('失去了'+get.translation(ext_name)+'X'+num);
			if(game.kzol_rushBag!=undefined) game.kzol_rushBag();
		};
	};
	game.loseItem2=function(item_num,num,bool){
		var item=lib.config.kzol_bag[item_num];
		var ext_name=lib.config.kzol_bag[item_num].ext_name;
		lib.config.kzol_bag[item_num].num-=num;
		if(lib.config.kzol_bag[item_num].num<=0){
			delete lib.config.kzol_bag[item_num];
		};
		game.saveConfig('kzol_bag',lib.config.kzol_bag);
		if(bool!=false) game.say1('失去了'+get.translation(ext_name)+'X'+num);
		if(game.kzol_rushBag!=undefined) game.kzol_rushBag();
	};
	game.judgeCanUse=function(ext_name,num){
		var items=lib.config.kzol_bag;
		var bool=false;
		for(var i in items){
			var item=items[i];
			if(ext_name==item.ext_name) bool=true;
		};
		if(bool==true){
			for(var i in items){
				var item=items[i];
				if(ext_name==item.ext_name){
					if(item.num>=num) return true;
				};
			};
		};
		return false;
	};
	game.getItem=function(ext_name){
		var items=lib.config.kzol_bag;
		for(var i in items){
			var item=items[i];
			if(ext_name==item.ext_name) return i;
		};
		return false;
	};
	lib.translate.consumables='消耗品';
	lib.translate.material='材料';
	lib.translate.shuijing='水晶';
	lib.translate.guoqinghongqi='国庆红旗';
	lib.extensionMenu.extension_扩展ol.bag_title={
		"name":"<b><p align=center><span style=\"font-size:18px\">------背包------</span></b>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol.bag_noTips={
		"name":"背包物品无需确认使用",
		"init":false,
		"intro":"开启后，使用背包物品时无需确认"
    };
	lib.extensionMenu.extension_扩展ol.bag_noTips1={
		"name":"背包物品无需确认丢弃",
		"init":false,
		"intro":"开启后，丢弃背包物品时无需确认"
    };
	lib.extensionMenu.extension_扩展ol.bag_showNum={
		"name":"显示物品数量",
		"init":true
    };
	lib.extensionMenu.extension_扩展ol.bag_openBag={
		'name':'背包界面<div>&gt;</div>',
		"clear":true,
		onclick:function(){
			ui.click.configMenu();
			game.openBag();
		},
	};
	lib.extensionMenu.extension_扩展ol['bag_stop']={
		"name":"打开背包时暂停游戏",
		"init":true
    };
	lib.onover.push(function(result){
		if(_status.kzol_gainShuijing==undefined) _status.kzol_gainShuijing=0;
		if(result==true) _status.kzol_gainShuijing+=30;
		/*
		if(_status.kzol_characterAi1!=undefined&&result==true&&lib.config.wujinmoshiDXB!=undefined){
			_status.kzol_gainShuijing+=lib.config.wujinmoshiDXB*2;
			game.saveConfig('wujinmoshiDXB', lib.config.wujinmoshiDXB + 1);
		};
		*/
		if(_status.kzol_onJLDJ==true){
			if (lib.config.jilueduijueND == 'easy' && lib.config.jilueduijueDXG == 5) game.gainItem('shuijing',100);
			if (lib.config.jilueduijueND == 'medium' && lib.config.jilueduijueDXG == 5) game.gainItem('shuijing',200);
			if (lib.config.jilueduijueND == 'hard' && lib.config.jilueduijueDXG == 5) game.gainItem('shuijing',500);
		};
		if(_status.kzol_gainShuijing>0) game.gainItem('shuijing',_status.kzol_gainShuijing);
		delete _status.kzol_gainShuijing;
	});
	lib.skill._kzol_gainShuijing_kill={
		trigger:{
			player:'dieBegin',
		},
		forced:true,
		popup:false,
		filter:function(event,player){
			return event.source==game.me;
		},
		content:function(){
			if(_status.kzol_gainShuijing==undefined) _status.kzol_gainShuijing=0;
			_status.kzol_gainShuijing+=10;
		},
	};
	lib.skill._kzol_gainShuijing_save={
		trigger:{
			target:'taoBegin'
		},
		forced:true,
		popup:false,
		filter:function(event,player){
			return event.player==game.me&&event.target!=game.me;
		},
		content:function(){
			if(_status.kzol_gainShuijing==undefined) _status.kzol_gainShuijing=0;
			_status.kzol_gainShuijing+=15;
			if(lib.kzol_task!=undefined&&lib.config.finish_task!=undefined){
				if(lib.config.finish_task.rixingyishan==undefined){
					game.say1('完成每日任务【日行一善】');
					lib.config.finish_task.rixingyishan=true;
				};
			};
		},
	};
	lib.help.水晶获得="<li>常规对局(对局结算时获得)<ul><li>击杀一名角色：10水晶<li>对其他角色使用桃：15水晶<li>对局胜利：30水晶</ul><li>无尽模式（旧无尽）<ul><li>每次胜利额外获得X水晶（X为无尽轮次数X2）</ul><li>灭世魔星<ul><li>1个尸魂可以换取10水晶</ul>";
}