window.func=function(lib,game,ui,get,ai,_status){
	if(lib.program!=undefined){
		for(var i in lib.program.character){
			if(lib.config['extension_扩展ol_'+i]==true){
				lib.config.characters.remove(i)
			};
		};
	};
}