window.func=function(lib,game,ui,get,ai,_status){
	var url='https://coding.net/u/aurora72/p/noname_extensionOL/git/raw/master';
	if(lib.config.extension_扩展ol_change=='local') url=lib.assetURL+'extension/扩展ol';
	lib.init.js(url,'program',function(){
		var list=[];
		var changelog=window.changelog;
		for(var i in changelog){
			if(changelog[i].players.length>0){
				list=changelog[i].players;
				break;
			};
		};
		lib.characterDialogGroup['最近更新']=function(name,capt){
			return list.contains(name)?capt:null;
		};
	});
}