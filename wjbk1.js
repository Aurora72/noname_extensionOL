window.func=function(lib,game,ui,get,ai,_status){
	lib.extensionMenu.extension_扩展ol.wjbk_title={
		"name":"<b><p align=center><span style=\"font-size:18px\">-----边框功能-----</span></b>",
		"clear":true,
		"nopointer":true,
	};
	for(var i in lib.kzol_border){
		var item={
			'none':'无边框',
		};
		for(var j=0;j<lib.kzol_border[i].length;j++){
			item[lib.kzol_border[i][j]]=lib.config.kzol_border[lib.kzol_border[i][j]].name
		};
		lib.extensionMenu.extension_扩展ol['wjbk_'+i]={
			"name":get.translation(i),
			"init":'none',
			"item":item,
		};
	};
}