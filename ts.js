window.func=function(lib,game,ui,get,ai,_status){
	lib.extensionMenu.extension_扩展ol['ts']={
		"name":"<b><p align=center><span style=\"font-size:18px\">----提示(game.say1)----</span></b>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol['ts_show']={
		"name":"提示记录栏",
		"init":true,
		"intro":"开启后，鼠标移至(电脑端)/点击(移动端)最右边滑出提示记录栏",
    };
	if(lib.config['extension_扩展ol_ts_show']!=false){
		var dialog_log=ui.create.dialog('hidden');
		//dialog_log.classList.add('static');
		//dialog_log.classList.add('popped');
		dialog_log.style.height='calc(100%)';
		dialog_log.style.width='160px';
		dialog_log.style.top='0px';
		dialog_log.style.left='calc(100% - 9px)';
		dialog_log.style['box-shadow']='none';
		dialog_log.style['background-image']='none';
		dialog_log.style.color='white';
		dialog_log.style['text-shadow']='black 0 0 2px';
		dialog_log.style['z-index']=1000;
		dialog_log.style['transition-property']='transform';
		dialog_log.style['font-family']='shousha';
		dialog_log.style['overflow-x']='hidden';
		dialog_log.style['overflow-y']='scroll';
		lib.setScroll(dialog_log);
		//dialog_log.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
		//dialog_log.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
		//dialog_log.innerHTML='';
		var func_logShow=function(){
			this.holdOn=true;
			this.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			this.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			this.style.transform='translateX(-151px)';
		};
		var func_logHide=function(){
			var dialog_log=this;
			setTimeout(function(){
				if(dialog_log.holdOn!=true){
					dialog_log.style['box-shadow']='none';
					dialog_log.style['background-image']='none';
				};
			},500);
			this.style.transform='';
			delete this.holdOn;
		};
		dialog_log.onmouseover=func_logShow;
		dialog_log.onmouseout=func_logHide;
		dialog_log.onmousedown=function(e){
			e.stopPropagation();
		};
		lib.arenaReady.push(function(){
			ui.window.appendChild(dialog_log);
		});
	};
	game.say1=function(str,num){
		if(game.game_say_dialog_height==undefined) game.game_say_dialog_height=-45;
		if(game.game_say_dialog_num==undefined) game.game_say_dialog_num=0;
		game.game_say_dialog_num++;
		var func=function(){
			game.game_say_dialog_onOpened=true;
			game.game_say_dialog_height+=45;
			var dialog=ui.create.dialog('hidden');
			dialog.classList.add('static');
			dialog.add('<div class="text" style="word-break:break-all;display:inline"><span style="color:#FFFFFF;">'+str+'</span></div>');
			dialog.classList.add('popped');
			dialog.style['font-family']="'STXinwei','xinwei'";
			dialog.style['background-image']='linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))';
			dialog.style['box-shadow']='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
			ui.window.appendChild(dialog);
			var width=str.length*20;
			if(num!=undefined) width-=num*20;
			dialog._mod_height=-16;
			dialog.style.width=width+'px';
			lib.placePoppedDialog(dialog,{
				clientX:(this.offsetLeft+this.offsetWidth/2)*game.documentZoom,
				clientY:(this.offsetTop+this.offsetHeight/4)*game.documentZoom
			});
			if(dialog._mod_height) dialog.content.firstChild.style.padding=0;
			dialog.style.left='calc(50% - '+(width+16)/2+'px'+')';
			dialog.style.top='calc(5% + '+game.game_say_dialog_height+'px)';
			dialog.style['z-index']=999999;
			setTimeout(function(){
				if(lib.config['extension_扩展ol_ts_show']!=false&&dialog_log!=undefined){
					var div=ui.create.caption('<div class="text center">'+str+'</div>');
					dialog_log.content.insertBefore(div,dialog_log.content.firstChild);
				};
				dialog.delete();
				if(game.game_say_dialog_height>ui.window.offsetHeight*0.95-dialog.offsetHeight*2) game.game_say_dialog_height=-45;
				setTimeout(function(){
					if(game.game_say_dialog_num<=0) game.game_say_dialog_height=-45;
				},250);
			},1500);
			setTimeout(function(){
				delete game.game_say_dialog_onOpened;
			},500);
		};
		var interval=setInterval(function(){
			if(game.game_say_dialog_onOpened==undefined){
				func();
				game.game_say_dialog_num--;
				clearInterval(interval);
			};
		},100);
	};
game.say2=function(str){
var dialog=ui.create.dialog('hidden');
dialog.classList.add('static');
dialog.add('<div class="text" style="word-break:break-all;display:inline">'+str+'</div>');
dialog.classList.add('popped');
ui.window.appendChild(dialog);
var width=dialog.content.firstChild.firstChild.offsetWidth;
if(width<500){
dialog._mod_height=-16;
}
else{
dialog.content.firstChild.style.textAlign='left';
}
dialog.style.width=(width+16)+'px';
lib.placePoppedDialog(dialog,{
clientX:(this.offsetLeft+this.offsetWidth/2)*game.documentZoom,
clientY:(this.offsetTop+this.offsetHeight/4)*game.documentZoom
});

if(dialog._mod_height){
dialog.content.firstChild.style.padding=0;
}
dialog.style.left='calc(50% - '+(width+16)/2+'px'+')';
dialog.style.top='calc(50% - 150px)';
setTimeout(function(){
dialog.delete();
},2000);
};
}