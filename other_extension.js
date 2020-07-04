window.func=function(lib,game,ui,get,ai,_status){
	lib.extensionMenu.extension_扩展ol.other_extension_下载a={
		"name":"<b><p align=center><span style=\"font-size:18px\">------本体更新------</span></b>",
		"clear":true,
		"nopointer":true,
	};
	var str='扩展ol   （1.17.51）';
	if(lib.config.noname_extensionOL_version1==undefined){
		str+='<br>当前版本：1.0';
	}else{
		str+='<br>当前版本：'+lib.config.noname_extensionOL_version1;
	};
	str+='<br>更新内容：<br>素材下载优化';
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
					game.download('https://aurora72.coding.net/p/noname_extensionOL/d/noname_extensionOL/git/raw/master/extension.js','extension/扩展ol/extension.js',function(){
						alert('扩展ol本体更新完毕');
                        lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>下载完成，重启生效</span>";
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
	if(lib.config.noname_extensionOL_version1=='1.17.51'){
		lib.extensionMenu.extension_扩展ol['other_extension_扩展ol_download1'].name='已是最新版';
		lib.extensionMenu.extension_扩展ol['other_extension_扩展ol_download1'].onclick=function(){};
	};
}