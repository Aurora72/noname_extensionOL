window.func=function(lib,game,ui,get,ai,_status){
	/*生成
	var imgs={};
	game.getFileList('新建文件夹',function(folders,files){
		for(var i=0;i<files.length;i++){
			var file=files[i];
			var name=file.slice(0,file.length-7);
			imgs[name]={};
			var img_url=lib.assetURL+'新建文件夹/'+file+'?'+Date.parse(new Date());
			var img=new Image();
			img.src=img_url;
			img.link=name;
			img.onload=function(){
				imgs[this.link].width=this.width;
				imgs[this.link].height=this.height;
			};
		};
	});
	lib.kzol_imgs=imgs;
	*/
	if(lib.kzol_bigImg==undefined) lib.kzol_bigImg={};
	var bigImg={
		"djl_细雪之舞": {
			width: 580,
			height: 819,
		},
		"ciyys茨木童子": {
			width: 640,
			height: 687,
		},
		"huyys蝴蝶精": {
			width: 724,
			height: 1024,
		},
		"qingyys青行灯": {
			width: 640,
			height: 905,
		},
		"yys_一目连": {
			width: 600,
			height: 375,
		},
		"yys_两面佛": {
			width: 658,
			height: 814,
		},
		"yys_大天狗": {
			width: 643,
			height: 825,
		},
		"yys_妖刀姬": {
			width: 1200,
			height: 977,
		},
		"yys_小鹿男": {
			width: 600,
			height: 1070,
		},
		"yys_山颪": {
			width: 1000,
			height: 1492,
		},
		"yys_座敷童子": {
			width: 1012,
			height: 900,
		},
		"yys_御馔津": {
			width: 640,
			height: 903,
		},
		"yys_椒图": {
			width: 1920,
			height: 1200,
		},
		"yys_玉藻前": {
			width: 614,
			height: 830,
		},
		"yys_神乐": {
			width: 640,
			height: 465,
		},
		"yys_花鸟画": {
			width: 1240,
			height: 874,
		},
		"yys_荒": {
			width: 500,
			height: 638,
		},
		"yys_荒川之主": {
			width: 640,
			height: 1138,
		},
		"yys_辉夜姬": {
			width: 810,
			height: 810,
		},
		"yys_阎魔": {
			width: 600,
			height: 600,
		},
		"yys_雪女": {
			width: 1146,
			height: 1620,
		},
		"yys_雪童子": {
			width: 935,
			height: 473,
		},
		"yys_青行灯": {
			width: 1704,
			height: 1078,
		},
		"TLP_daodiaoren": {
			width: 814,
			height: 1160,
		},
		"TLP_emo": {
			width: 814,
			height: 1160,
		},
		"TLP_gaota": {
			width: 820,
			height: 1160,
		},
		"TLP_huangdi": {
			width: 827,
			height: 1154,
		},
		"TLP_jiaohuang": {
			width: 820,
			height: 1157,
		},
		"TLP_jiezhi": {
			width: 812,
			height: 1160,
		},
		"TLP_lianren": {
			width: 824,
			height: 1154,
		},
		"TLP_liliang": {
			width: 825,
			height: 1160,
		},
		"TLP_mingyunzhilun": {
			width: 835,
			height: 1160,
		},
		"TLP_mofashi": {
			width: 829,
			height: 1160,
		},
		"TLP_nvhuang": {
			width: 823,
			height: 1160,
		},
		"TLP_nvjisi": {
			width: 819,
			height: 1160,
		},
		"TLP_shenpan": {
			width: 817,
			height: 1160,
		},
		"TLP_shijie": {
			width: 822,
			height: 1160,
		},
		"TLP_sishen": {
			width: 819,
			height: 1160,
		},
		"TLP_taiyang": {
			width: 814,
			height: 1160,
		},
		"TLP_xingxing": {
			width: 809,
			height: 1160,
		},
		"TLP_yinzhe": {
			width: 833,
			height: 1160,
		},
		"TLP_yueliang": {
			width: 818,
			height: 1160,
		},
		"TLP_zhanche": {
			width: 824,
			height: 1160,
		},
		"TLP_zhengyi": {
			width: 824,
			height: 1160,
		},
		"xlsh_哈里斯": {
			width: 1080,
			height: 1920,
		},
		"xlsh_宙斯": {
			width: 1080,
			height: 1920,
		},
		"xlsh_德墨忒尔": {
			width: 1080,
			height: 1920,
		},
		"xlsh_波塞冬": {
			width: 1080,
			height: 1920,
		},
		"xlsh_狄俄尼索斯": {
			width: 1080,
			height: 1920,
		},
		"xlsh_赫尔墨斯": {
			width: 1080,
			height: 1920,
		},
		"xlsh_赫拉": {
			width: 1080,
			height: 1920,
		},
		"xlsh_赫菲斯托斯": {
			width: 1080,
			height: 1920,
		},
		"xlsh_阿尔忒弥斯": {
			width: 1080,
			height: 1920,
		},
		"xlsh_阿波罗": {
			width: 1080,
			height: 1920,
		},
		"xlsh_阿瑞斯": {
			width: 1080,
			height: 1920,
		},
		"xlsh_阿芙罗狄忒": {
			width: 741,
			height: 1024,
		},
		"xlsh_雅典娜": {
			width: 1080,
			height: 1920,
		},
	};
	for(var i in bigImg){
		lib.kzol_bigImg[i]=bigImg[i];
	};
	if(lib.kzol_charactercard_func==undefined) lib.kzol_charactercard_func={};
	lib.kzol_charactercard_func['ckdt']=function(name,sourcenode,noedit,resume,avatar){
		if(name!='mnyhzr灭世魔星'&&lib.kzol_bigImg[name]==undefined){
			if(name.indexOf('nyhzr')==-1||name.indexOf('ol')==-1) return ;
		};
		var div=ui.create.dialog('hidden');
		div.classList.add('popped');
		div.classList.add('static');
		div.style.height='40px';
		div.style.bottom='0px';
		div.style.left='5px';
		div.style.borderRadius='5px';
		div.style['text-align']='center';
		div.style['font-size']='25px';
		div.style['line-height']='40px';
		div.style['font-family']="'STXinwei','xinwei'";
		div.style['background-image']='linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))';
		div.style['cursor']='pointer';
		div.style['z-index']=22;
		div.style.animation='fadelogIn .4s';
		div.style['-webkit-animation']='fadelogIn .4s';
		if(lib.kzol_bigImg[name]!=undefined){
			div.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">查看大图</span>';
			div.style.width='110px';
		}else{
			div.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">查看当前皮肤大图</span>';
			div.style.width='230px';
		};
		div.link=name;
		div.onclick=function(){
			div.style.display='none';
			//div.hide();
			var name=this.link;
			if(lib.config.kzol_skillSkinEquiping!=undefined&&lib.config.kzol_skillSkinEquiping[name]!=undefined) name=lib.config.kzol_skillSkinEquiping[name];
			name=name+'_bg.jpg';
			var bg=ui.create.dialog('hidden');
			bg.style.height='calc(100%)';
			bg.style.width='calc(100%)';
			bg.style.top='0px';
			bg.style.left='0px';
			bg.style['z-index']=23;
			bg.classList.add('fixed');
			ui.window.appendChild(bg);
			var div1=ui.create.dialog('hidden');
			div1.classList.add('popped');
			div1.classList.add('static');
			if(lib.kzol_bigImg[this.link]!=undefined){
				var width=lib.kzol_bigImg[this.link].width;
				var height=lib.kzol_bigImg[this.link].height;
				if(width>ui.window.offsetWidth){
					height=height*(ui.window.offsetWidth/width);
					width=ui.window.offsetWidth;
				};
				if(height>ui.window.offsetHeight){
					width=width*(ui.window.offsetHeight/height);
					height=ui.window.offsetHeight;
				};
				div1.style.height=height+'px';
				div1.style.width=width+'px';
				div1.style.top='calc(50% - '+(height/2)+'px)';
				div1.style.left='calc(50% - '+(width/2)+'px)';
			}else{
				div1.style.height='600px';
				div1.style.width='960px';
				div1.style.top='calc(50% - 300px)';
				div1.style.left='calc(50% - 480px)';
			};
			div1.style.borderRadius='5px';
			div1.style['z-index']=23;
			div1.style['text-align']='center';
			div1.style['font-size']='35px';
			div1.style['line-height']='600px';
			div1.style['font-family']="'STXinwei','xinwei'";
			div1.style['background-image']='linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))';
			div1.style.animation='fadeInDown .3s';
			div1.style['-webkit-animation']='fadeInDown .3s';
			div1.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">加载中</span>';
			div1.link_hasDownloaded=false;
			ui.window.appendChild(div1);
			var div2=ui.create.dialog('hidden');
			div2.classList.add('popped');
			div2.classList.add('static');
			div2.style.height='40px';
			div2.style.width='190px';
			div2.style.bottom='0px';
			div2.style.left='5px';
			div2.style.borderRadius='5px';
			div2.style['text-align']='center';
			div2.style['font-size']='25px';
			div2.style['line-height']='40px';
			div2.style['font-family']="'STXinwei','xinwei'";
			div2.style['background-image']='linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))';
			div2.style['cursor']='pointer';
			div2.style['z-index']=23;
			div2.style.animation='fadelogIn .4s';
			div2.style['-webkit-animation']='fadelogIn .4s';
			div2.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">设为背景图片</span>';
			div2.link=name;
			div2.onclick=function(){
				if(div1.link_hasDownloaded!=true){
					game.say1('未下载图片');
					return ;
				};
				var name=this.link;
				lib.config.image_background=name.slice(0,name.length-4);
				ui.background.setBackgroundImage('image/background/'+lib.config.image_background+'.jpg');
				game.saveConfig('image_background',lib.config.image_background);
				game.say1('设置成功');
			};
			if(lib.kzol_bigImg[this.link]!=undefined){
				if(lib.kzol_bigImg[this.link].canSet==true) ui.window.appendChild(div2);
			}else{
				ui.window.appendChild(div2);
			};
			var div3=ui.create.dialog('hidden');
			div3.classList.add('popped');
			div3.classList.add('static');
			div3.style.height='40px';
			div3.style.width='110px';
			div3.style.bottom='0px';
			if(lib.kzol_bigImg[this.link]!=undefined){
				if(lib.kzol_bigImg[this.link].canSet==true){
					div3.style.left='200px';
				}else{
					div3.style.left='5px';
				};
			}else{
				div3.style.left='200px';
			};
			div3.style.borderRadius='5px';
			div3.style['text-align']='center';
			div3.style['font-size']='25px';
			div3.style['line-height']='40px';
			div3.style['font-family']="'STXinwei','xinwei'";
			div3.style['background-image']='linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))';
			div3.style['cursor']='pointer';
			div3.style['z-index']=23;
			div3.style.animation='fadelogIn .4s';
			div3.style['-webkit-animation']='fadelogIn .4s';
			div3.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">下载素材</span>';
			div3.link=name;
			div3.onclick=function(){
				if(div3.link_ondowaload==true){
					game.say1('已经在下载中');
					return ;
				};
				div3.link_ondowaload=true;
				var name=this.link;
				div1.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">下载中</span>';
				game.download('https://aurora72.coding.net/p/noname_extensionOL/d/noname_extensionOL/git/raw/master/image/'+name,'image/background/'+name,function(){
					alert('下载成功');
					div3.delete();
					setTimeout(function(){
						div1.innerHTML='';
						div1.link_hasDownloaded=true;
						div1.setBackgroundImage('image/background/'+name);
						div1.style.backgroundSize="cover";
					},100);
					div3.link_ondowaload=false;
				},function(){
					alert('下载失败（'+name+'）');
					div1.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">未下载</span>';
					div3.link_ondowaload=false;
				});
			};
			game.readFile('image/background/'+name,function(){
				div1.innerHTML='';
				div1.link_hasDownloaded=true;
				div1.setBackgroundImage('image/background/'+name);
				div1.style.backgroundSize="cover";
			},function(){
				div1.innerHTML='<span style="color:white;text-shadow:black 0 0 2px;">未下载</span>';
				ui.window.appendChild(div3);
			});
			var func=function(){
				//bg.style.display='none';
				//div1.style.display='none';
				//div2.style.display='none';
				//div3.style.display='none';
				bg.delete();
				div1.delete();
				div2.delete();
				div3.delete();
				div.style.display='';
				//div.show();
			};
			setTimeout(function(){
				bg.onclick=func;
				div1.onclick=func;
			},500);
		};
		ui.window.appendChild(div);
		var interval=setInterval(function(){
			if((lib.config.theme=='simple'&&
			!ui.window.classList.contains('systempaused'))||
			(lib.config.theme!='simple'&&
			!ui.window.classList.contains('shortcutpaused'))){
				div.delete();
				clearInterval(interval);
			};
		},100);
	};
}