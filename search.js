window.func=function(lib,game,ui,get,ai,_status){
	var kzol_create_characterDialog=ui.create.characterDialog;
	ui.create.characterDialog=function(){
		var list=[];
		var listen;
		for(var i=0;i<arguments.length;i++){
			list.push(arguments[i]);
		};
		var dialog=kzol_create_characterDialog.apply(null,list);
		if(lib.config.mode=='stone') return dialog;
		var content_container=dialog.childNodes[0];
		var content=content_container.childNodes[0];
		var switch_con=content.childNodes[0];
		var buttons=content.childNodes[1];
		var div=ui.create.div('');
		div.style.height='35px';
		div.style.width='calc(100%)';
		div.style.top='0px';
		div.style.left='0px';
		div.style['text-align']='center';
		div.style['line-height']='26px';
		div.innerHTML='<span style="font-size:24px;font-family:xinwei;cursor:default">全局搜索：</span><input type="text" id="kzol_search">';
		var input=div.childNodes[1];
		input.onkeydown=function(e){
			e.stopPropagation();
			if(e.keyCode==13){
				var value=this.value;
				if(value){
					if(game.say1) game.say1('搜索完成');
					//if(dialog.currentcaptnode2) dialog.currentcaptnode2.classList.remove('thundertext');
					//if(dialog.currentcaptnode) dialog.currentcaptnode.classList.remove('thundertext');
					for(var i=0;i<buttons.childNodes.length;i++){
						buttons.childNodes[i].classList.add('nodisplay');
						var name=buttons.childNodes[i].link;
						var translate=get.translation(name);
						if(translate.indexOf(value)!=-1){
							buttons.childNodes[i].classList.remove('nodisplay');
						};
					};
				}else{
					if(game.say1) game.say1('请先输入需要搜索武将的名字');
				};
			};
		};
		input.onmousedown=function(e){
			e.stopPropagation();
		};
		switch_con.insertBefore(div,switch_con.firstChild);
		/*
		for(var i=0;i<buttons.childNodes.length;i++){
			var name=buttons.childNodes[i].link;
			if(name!=undefined&&name.indexOf('kzsg_')!=-1){
				buttons.childNodes[i].style.display='none';
			};
		};
		*/
		return dialog;
	};
}