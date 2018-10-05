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
	str='——————————————<br>扩展ol   （1.9）';
	if(lib.config.noname_extensionOL_version1==undefined){
		str+='<br>当前版本：1.0';
	}else{
		str+='<br>当前版本：'+lib.config.noname_extensionOL_version1;
	};
	str+='<br>更新内容：<br>手机端恢复内置更新';
	lib.extensionMenu.extension_扩展ol['other_extension_扩展ol']={
		"name":str,
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol['other_extension_扩展ol_download1']={
		"name":"<span style='text-decoration: underline'>更新扩展ol</span>",
		"clear":true,
		"onclick":function(){
			if(lib.extensionOL_onDownload!=true){
				lib.extensionOL_onDownload=true;
					lib.extensionOL_config=this;
					lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>正在下载...</span>";
					game.download('https://raw.githubusercontent.com/aurora72/noname_extensionOL/master/extension.js','extension/扩展ol/extension.js',function(){
						alert('扩展ol本体更新完毕');
                        lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>下载完成，重启生效（点击重启）</span>";
                        lib.extensionMenu.extension_扩展ol['other_extension_扩展ol_download1'].onclick=function(){window.location.reload()};
						delete lib.extensionOL_config;
						delete lib.extensionOL_onDownload;
					},function(){
						alert('扩展ol本体更新失败');
                        lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>点击重新下载</span>";
						delete lib.extensionOL_config;
						delete lib.extensionOL_onDownload;
					});
				}else{
					alert('请等待正在更新的内容更新结束');
				};
		},
	};
	if(lib.config.noname_extensionOL_version1=='1.9'){
		lib.extensionMenu.extension_扩展ol['other_extension_扩展ol_download1'].name='已是最新版';
		lib.extensionMenu.extension_扩展ol['other_extension_扩展ol_download1'].onclick=function(){};
	};
}
