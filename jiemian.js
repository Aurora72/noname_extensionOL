window.func=function(lib,game,ui,get,ai,_status){
	var str='点击该界面后，该界面悬停以拉动查看';
	var str1='<li>提示：<ul><li>素材在扩展ol界面内下载。（电脑可以使用内置下载，手机只能手动下载）'+
	'<li>扩展ol加载的武将包/手牌包只能在扩展ol界面内关闭。'+
	'<li>8人以上身份局身份可以在扩展ol界面内设置。'+
	'<li>在扩展ol界面内还可以查看更新日志、扩展本体更新。'+
	'<li>在其他-帮助-扩展ol内可以查看载入的内容。'+
	'<li>该界面可以在扩展ol界面内关闭。</ul>';
	var opened=false;
	var onjm=false;
	dialog=ui.create.dialog('hidden');
	dialog.style.height='calc(50%)';
	dialog.style.width='300px';
	dialog.style.left='calc(100% - 305px)';
	dialog.style.top='50px';
	dialog.classList.add('popped');
	dialog.classList.add('static');
	dialog.addText(str);
	dialog.addText(str1,false);
	setInterval(function(){
		if(ui.menuContainer!=undefined){
			if(lib.config['extension_扩展ol_jiemian_enable']==true&&opened==true) dialog.close();
			if(ui.menuContainer.classList.contains('hidden')){
				if(opened==true&&onjm==false) dialog.close();
			}else{
				if(lib.config['extension_扩展ol_jiemian_enable']!=true){
					ui.window.appendChild(dialog);
					//dialog.style.height=(dialog.content.firstChild.firstChild.offsetHeight+34)+'px';
					opened=true;
				};
			};
		};
		dialog.onmouseover=function(){
			onjm=true;
		};
		dialog.onmouseout=function(){
			onjm=false;
		};
	},100);
}