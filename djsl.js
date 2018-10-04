window.func=function(lib,game,ui,get,ai,_status){
	lib.arenaReady.push(function(){
		if(lib.config.ZDJL_save==undefined) lib.config.ZDJL_save={};
		for(var i in lib.character){
			if(lib.config.ZDJL_save[i]==undefined) lib.config.ZDJL_save[i]={
				win:0,
				lose:0,
			};
		};
		game.saveConfig('ZDJL_save',lib.config.ZDJL_save);
		if(lib.config['extension_扩展ol_djsl_enable']==true){
			for(var i in lib.character){
				var all=lib.config.ZDJL_save[i].win+lib.config.ZDJL_save[i].lose;
				var win=0;
				if(all!=0) win=lib.config.ZDJL_save[i].win/all;
				if(lib.characterTitle[i]==undefined){
					lib.characterTitle[i]='总场数：'+all+'<br>胜率：'+Math.round(win*10000)/100+'%';
				}else{
					lib.characterTitle[i]+='<br>总场数：'+all+'<br>胜率：'+Math.round(win*10000)/100+'%';
				};
			};
		};
		lib.onover.push(function(result){
			var pl=game.me;
			if(pl.name!=undefined){
				if(lib.config.ZDJL_save[pl.name]!=undefined){
					if(result==true){
						lib.config.ZDJL_save[pl.name].win++;
					}else{
						lib.config.ZDJL_save[pl.name].lose++;
					};
					game.saveConfig('ZDJL_save',lib.config.ZDJL_save);
				};
			};
			if(pl.name2!=undefined){
				if(lib.config.ZDJL_save[pl.name2]!=undefined){
					if(result==true){
						lib.config.ZDJL_save[pl.name2].win++;
					}else{
						lib.config.ZDJL_save[pl.name2].lose++;
					};
					game.saveConfig('ZDJL_save',lib.config.ZDJL_save);
				};
			};
		});
		var character='';
		for(i in lib.character){
			if(lib.config.ZDJL_save[i]!=undefined&&lib.config.ZDJL_save[i].win+lib.config.ZDJL_save[i].lose>0) character+='<option value='+i+'>'+lib.translate[i]+'</option>';
		};
		lib.extensionMenu.extension_扩展ol.djsl_choose.name='请选择需要清空记录的武将<br><select id="djsl_choose" size="1" style="width:180px">'+character+'</select>';
	});
}