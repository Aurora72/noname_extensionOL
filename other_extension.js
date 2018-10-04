window.func=function(lib,game,ui,get,ai,_status){
	var str='——————————————<br>成对模式   （1.0）';
	if(lib.config['other_extension_成对模式_version']!=undefined){
		str+='<br>当前版本：'+lib.config['other_extension_成对模式_version'];
	}else{
		str+='<br>未安装';
	};
	str+='<br>简介：玩家们两两成对，互相对抗，角逐出最强组合';
	lib.extensionMenu.extension_扩展ol['other_extension_成对模式']={
		"name":str,
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol['other_extension_成对模式_download']={
		"name":"<span style='text-decoration: underline'>下载成对模式</span>",
		"clear":true,
		"onclick":function(){
			window.open('https://pan.baidu.com/s/1zINohaB_xVynumVVS4yDwg');
		},
	};
	str='——————————————<br>扩展ol   （1.7）';
	if(lib.config.noname_extensionOL_version1==undefined){
		str+='<br>当前版本：1.0';
	}else{
		str+='<br>当前版本：'+lib.config.noname_extensionOL_version1;
	};
	str+='<br>更新内容：<br>电脑端恢复内置更新';
	lib.extensionMenu.extension_扩展ol['other_extension_扩展ol']={
		"name":str,
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol['other_extension_扩展ol_download']={
		"name":"<span style='text-decoration: underline'>更新链接</span>",
		"clear":true,
		"onclick":function(){
			window.open('https://pan.baidu.com/s/15WCRdPriFXQowQNQ-dWkUw');
		},
	};
	if(!lib.device){
		lib.extensionMenu.extension_扩展ol['other_extension_扩展ol_download1']={
			"name":"<span style='text-decoration: underline'>自动更新扩展ol</span>",
			"clear":true,
			"onclick":function(){
				game.download('https://coding.net/u/aurora72/p/noname_extensionOL/git/raw/master/下载检测.js','extension/扩展ol/下载检测.js',function(){},function(){
					alert('你的设备不支持内置更新，请手动更新');
					lib.extensionOL_checkDownload==true;
				});
				setTimeout(function(){
					if(lib.extensionOL_checkDownload==true){
						game.download('https://coding.net/u/aurora72/p/noname_extensionOL/git/raw/master/extension.js','extension/扩展ol/extension.js',function(){
							alert('扩展ol本体更新完毕');
						},function(){
							alert('扩展ol本体更新失败');
						});
					}else{
						delete lib.extensionOL_checkDownload;
					};
				},500);
			},
		};
		if(lib.config.noname_extensionOL_version1=='1.7'){
			lib.extensionMenu.extension_扩展ol['other_extension_扩展ol_download1'].name='已是最新版';
			lib.extensionMenu.extension_扩展ol['other_extension_扩展ol_download1'].onclick=function(){};
		};
	};
}