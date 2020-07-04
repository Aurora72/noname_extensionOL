window.func=function(lib,game,ui,get,ai,_status){
	//未完成
	//自定义边框backgroundSize
	//隐藏已有边框
	//可视化编辑
	game.kzol_border_div={};
	if(lib.config.kzol_border==undefined) game.saveConfig('kzol_border',{});
	var kzol_border={
		'bk1':{
			'name':'吴国边框1',
			'group':'wu',
			'img':'wu.png',
			'default':{
				'ext_height':0,
				'ext_width':0,
				'top':0,
				'left':0,
				'name_transformX':-3.5,
				'name_transformY':15,
				'hp_transformX':0,
				'hp_transformY':0,
			},
			'long':{
				'ext_height':0,
				'ext_width':0,
				'top':0,
				'left':0,
				'name_transformX':-8.5,
				'name_transformY':15,
				'hp_transformX':0,
				'hp_transformY':0,
			},
			'minSkin':{
				'ext_height':-8.5,
				'ext_width':20,
				'top':0,
				'left':0,
				'name_transformX':0,
				'name_transformY':0,
				'hp_transformX':0,
				'hp_transformY':0,
			},
		},
	};
	var kzol_border_bool=false;
	for(var i in kzol_border){
		//if(lib.config.kzol_border[i]==undefined){
			kzol_border_bool=true;
			lib.config.kzol_border[i]=kzol_border[i];
		//};
	};
	if(kzol_border_bool==true) game.saveConfig('kzol_border',lib.config.kzol_border);
	var border={};
	for(var i in lib.config.kzol_border){
		var border1=lib.config.kzol_border[i];
		if(border[border1.group]==undefined) border[border1.group]=[];
		border[border1.group].push(i);
	};
	lib.kzol_border=border;
	game.addBorder=function(){
		for(var i=0;i<game.players.length;i++){
			var pl=game.players[i];
			var config=lib.config['extension_扩展ol_wjbk_'+pl.group];
			if(pl!=game.me&&config!=undefined&&config!='none'){
				var border=lib.config.kzol_border[config];
				var dialog=ui.create.dialog('hidden');
				if(pl.classList.contains('minskin')){
					console.log(pl.offsetHeight+border.minSkin.ext_height)
					dialog.style.height=(pl.offsetHeight+border.minSkin.ext_height)+'px';
					dialog.style.width=(pl.offsetWidth+border.minSkin.ext_width)+'px';
					dialog.style.top=border.minSkin.top+'px';
					dialog.style.left=border.minSkin.left+'px';
					pl.node.name.style.transform='translate('+border.minSkin.name_transformX+'px, '+border.minSkin.name_transformY+'px)';
					pl.node.hp.style.transform='translate('+border.minSkin.hp_transformX+'px, '+border.minSkin.hp_transformY+'px)';
					dialog.style.backgroundSize="contain";
				}else if(lib.config.layout=='long'||lib.config.layout=='long2'){
					dialog.style.height=(pl.offsetHeight+border.long.ext_height)+'px';
					dialog.style.width=(pl.offsetWidth+border.long.ext_width)+'px';
					dialog.style.top=border.long.top+'px';
					dialog.style.left=border.long.left+'px';
					pl.node.name.style.transform='translate('+border.long.name_transformX+'px, '+border.long.name_transformY+'px)';
					pl.node.hp.style.transform='translate('+border.long.hp_transformX+'px, '+border.long.hp_transformY+'px)';
					dialog.style.backgroundSize="100% 100%";
				}else{
					dialog.style.height=(pl.offsetHeight+border.default.ext_height)+'px';
					dialog.style.width=(pl.offsetWidth+border.default.ext_width)+'px';
					dialog.style.top=border.default.top+'px';
					dialog.style.left=border.default.left+'px';
					pl.node.name.style.transform='translate('+border.default.name_transformX+'px, '+border.default.name_transformY+'px)';
					pl.node.hp.style.transform='translate('+border.default.hp_transformX+'px, '+border.default.hp_transformY+'px)';
					dialog.style.backgroundSize="100% 100%";
				};
				dialog.style['background-repeat']='no-repeat';
				dialog.style.backgroundImage='url("'+lib.assetURL+'extension/扩展ol/wu.png")';
				dialog.style['pointer-events']='none';
				pl.node.framebg.appendChild(dialog);
			};
			lib.configMenu.appearence.config.border_style.onclick('');
		};
	};
	lib.skill._addBorder={
		trigger:{
			global:"gameStart",
		},
		filter:function (event,player){
			return true;
		},
		forced:true,
		popup:false,
		content:function (){
			
game.addBorder()
			setInterval(function(){
				//game.addBorder();
			},1000);
		},
	};
}