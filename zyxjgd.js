window.func=function(lib,game,ui,get,ai,_status){
	lib.extensionMenu.extension_扩展ol.zyxj_tittle={
		"name":"<b><p align=center><span style=\"font-size:18px\">-------自由选将-------</span></b>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol.zyxj_zjgc={
		"name":"隐藏最近更新按钮",
		"init":false
	};
	lib.extensionMenu.extension_扩展ol.zyxj_search={
		"name":"隐藏武将搜索栏",
		"init":false
	};
	if(lib.config['extension_扩展ol_zyxj_zjgc']!=true){
		//var url='https://coding.net/u/aurora72/p/noname_extensionOL/git/raw/master';
		//var url='https://aurora72.coding.net/p/noname_extensionOL/d/noname_extensionOL/git/raw/master';
		//if(lib.config.extension_扩展ol_change=='local') url=lib.assetURL+'extension/扩展ol';
		var url=lib.assetURL+'extension/扩展ol';
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
				/*
				if(lib.characterPack.tqk!=undefined){
					return lib.characterPack.tqk[name]!=undefined?capt:null;
				}else{
					return list.contains(name)?capt:null;
				};
				*/
			};
		});
	};
	if(lib.config['extension_扩展ol_zyxj_search']!=true){
		var kzol_create_characterDialog=ui.create.characterDialog;
		ui.create.characterDialog=function(){
			var dialog=kzol_create_characterDialog.apply(this,arguments);
			if(lib.config.mode=='stone') return dialog;
			var content_container=dialog.childNodes[0];
			var content=content_container.childNodes[0];
			var switch_con=content.childNodes[0];
			var buttons=content.childNodes[1];
			var div=ui.create.div('');
			div.style.height='35px';
			div.style.width='calc(100%)';
			div.style.top='-2px';
			div.style.left='0px';
			div.style['white-space']='nowrap';
			div.style['text-align']='center';
			div.style['line-height']='26px';
			div.style['font-size']='24px';
			div.style['font-family']='xinwei';
			div.innerHTML='搜索：'+
			'<input type="text" style="width:150px;"></input>'+
			'←'+
			'<select size="1" style="width:75px;height:21px;">'+
			'<option value="name">名称翻译</option>'+
			'<option value="name1">名称</option>'+
			'<option value="skill">技能翻译</option>'+
			'<option value="skill1">技能</option>'+
			'<option value="skill2">技能叙述</option>'+
			'</select>';
			var input=div.querySelector('input');
			input.onkeydown=function(e){
				e.stopPropagation();
				if(e.keyCode==13){
					var value=this.value;
					var choice=div.querySelector('select').options[div.querySelector('select').selectedIndex].value;
					if(value){
						if(game.say1) game.say1('搜索完成');
						//if(dialog.currentcaptnode2) dialog.currentcaptnode2.classList.remove('thundertext');
						//if(dialog.currentcaptnode) dialog.currentcaptnode.classList.remove('thundertext');
						for(var i=0;i<buttons.childNodes.length;i++){
							buttons.childNodes[i].classList.add('nodisplay');
							var name=buttons.childNodes[i].link;
							var skills;
							if(lib.character[name]!=undefined){
								skills=lib.character[name][3];
							};
							if(choice=='name1'){
								if(name.indexOf(value)!=-1){
									buttons.childNodes[i].classList.remove('nodisplay');
								};
							}else if(choice=='skill'){
								if(skills!=undefined&&skills.length>0){
									for(var j=0;j<skills.length;j++){
										var skill=skills[j];
										if(get.translation(skill).indexOf(value)!=-1){
											buttons.childNodes[i].classList.remove('nodisplay');
										};
									};
								};
							}else if(choice=='skill1'){
								if(skills!=undefined&&skills.length>0){
									for(var j=0;j<skills.length;j++){
										var skill=skills[j];
										if(skill.indexOf(value)!=-1){
											buttons.childNodes[i].classList.remove('nodisplay');
										};
									};
								};
							}else if(choice=='skill2'){
								if(skills!=undefined&&skills.length>0){
									for(var j=0;j<skills.length;j++){
										var skill=skills[j];
										if(lib.translate[skill+'_info']!=undefined&&lib.translate[skill+'_info'].indexOf(value)!=-1){
											buttons.childNodes[i].classList.remove('nodisplay');
										};
									};
								};
							}else{
								if(get.translation(name).indexOf(value)!=-1){
									buttons.childNodes[i].classList.remove('nodisplay');
								};
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
	};
}