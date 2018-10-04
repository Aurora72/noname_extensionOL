window.func=function(lib,game,ui,get,ai,_status){
	setInterval(function(){
		var change=false;
		var change1=false;
		if(get.mode()=='brawl'||get.mode()=='identity'||get.mode()=='guozhan'){
			if(game.players!=undefined&&game.dead!=undefined){
				if(game.players.length+game.dead.length>8){
					if(change==false){
						document.documentElement.style.zoom=game.deviceZoom*0.8;
						change=true;
						change1=false;
					};
				}else{
					if(change1==false){
						document.documentElement.style.zoom=game.deviceZoom*1;
						change1=true;
						change=false;
					};
				};
			};
		};
	},1000);
}