window.func=function(lib,game,ui,get,ai,_status){
	lib.extensionMenu.extension_扩展ol.djsl_title={
		"name":"<b><p align=center><span style=\"font-size:18px\">-----单将胜率-----</span></b>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol.djsl_enable={
		"name":"显示单将胜率",
		"init":true,
		"intro":"开启后显示每个武将的胜率（不显示但仍会记录）"
    };
	lib.extensionMenu.extension_扩展ol.djsl_choose={
      'name':'',
      "clear":true,
      "nopointer":true,
    };
	lib.extensionMenu.extension_扩展ol.djsl_delete1={
      "name":"清除",
      "clear":true,
      "onclick":function(){
		if(_status.connectMode){
			game.say1('联机模式下无法清除');
			return ;
		};
		var country=document.getElementById('djsl_choose');
		var str=country.options[country.selectedIndex].value;
		var all=lib.config.ZDJL_save[str].win+lib.config.ZDJL_save[str].lose;
		var win=0;
		if(all!=0) win=lib.config.ZDJL_save[str].win/all;
		if(confirm('是否清空'+lib.translate[str]+'的记录（总场数：'+all+' 胜率：'+Math.round(win*10000)/100+'%）？')){
			lib.config.ZDJL_save[str]={
				win:0,
				lose:0,
			};
			game.saveConfig('ZDJL_save',lib.config.ZDJL_save);
			alert('清除成功');
		};
      },
    };
	lib.extensionMenu.extension_扩展ol.djsl_deleteAll={
      "name":"全部清除",
      "clear":true,
      "onclick":function(){
		if(_status.connectMode){
			game.say1('联机模式下无法清除');
			return ;
		};
		if(confirm('是否清空所有武将的记录？')){
			lib.config.ZDJL_save={};
			for(var i in lib.characterPack){
				for(var j in lib.characterPack[i]){
					if(lib.config.ZDJL_save[j]==undefined) lib.config.ZDJL_save[j]={
						win:0,
						lose:0,
					};
				};
			};
			game.saveConfig('ZDJL_save',lib.config.ZDJL_save);
			game.say1('清除成功');
		};
      },
    };
}