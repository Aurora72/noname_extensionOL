window.func=function(lib,game,ui,get,ai,_status){
	var change=false;
	var change1=false;
	lib.extensionMenu.extension_扩展ol['jmsf_title']={
		"name":"<b><p align=center><span style=\"font-size:18px\">-------界面缩放-------</span></b>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol['jmsf_info']={
		"name":"身份、国战、成对、奥拉星、无尽、王者之战模式下，当游戏人数"+(lib.device?'超过8':'超过12或等于9、10')+"时，缩小界面（否则恢复）",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol['jmsf_disable']={
		name:'关闭界面缩放',
		init:false,
		intro:'刷新游戏生效',
	};
	lib.extensionMenu.extension_扩展ol['jmsf_rate']={
		name:'缩小比例',
		init:0.8,
		item:{
			0.6:'60%',
			0.65:'65%',
			0.7:'70%',
			0.75:'75%',
			0.8:'80%',
			0.85:'85%',
			0.9:'90%',
			0.95:'95%',
			1:'100%',
		},
		onclick:function(zoom){
			game.saveConfig('extension_扩展ol_jmsf_rate',zoom);
			change1=true;
			change=false;
		},
	};
	lib.extensionMenu.extension_扩展ol['jmsf_disable1']={
		name:'关闭武将牌缩小',
		init:false,
		intro:'有十周年UI扩展时可以开启',
	};
	setInterval(function(){
		if(get.mode()=='identity'||get.mode()=='guozhan'||get.mode()=='partner'||get.mode()=='aolaStar'||get.mode()=='wjms'||get.mode()=='wangzhezhizhan'){
			if(game.players!=undefined&&game.dead!=undefined){
				var zoom1=lib.config.ui_zoom;
				switch(zoom1){
					case 'esmall':zoom1=0.8;break;
					case 'vsmall':zoom1=0.9;break;
					case 'small':zoom1=0.93;break;
					case 'big':zoom1=1.05;break;
					case 'vbig':zoom1=1.1;break;
					case 'ebig':zoom1=1.2;break;
					default:zoom1=1;
				};
				var num=game.players.length+game.dead.length-game.countPlayer(function(current){return current.扩展ol_type=='fellow'});
				if((lib.device&&num>8)||(!lib.device&&(num>12||num==9||num==10))){
					if(change==false){
						if(lib.config['extension_扩展ol_jmsf_disable']!=true){
							var rate=0.8;
							if(lib.config['extension_扩展ol_jmsf_rate']!=undefined) rate=lib.config['extension_扩展ol_jmsf_rate'];
							game.documentZoom=game.deviceZoom*rate*zoom1;
							var width=document.documentElement.offsetWidth;
							var height=document.documentElement.offsetHeight;
							var zoom=game.documentZoom;
							document.body.style.width=(width/zoom)+'px';
							document.body.style.height=(height/zoom)+'px';
							document.body.style.transform='scale('+zoom+')';
						};
						change=true;
						change1=false;
					};
				}else{
					if(change1==false){
						if(lib.config['extension_扩展ol_jmsf_disable']!=true){
							game.documentZoom=game.deviceZoom*1*zoom1;
							if(ui.updatez!=undefined) ui.updatez();
						};
						change1=true;
						change=false;
					};
				};
				if(num>=11&&_status.gameStarted==true){
					if(lib.config.extension_扩展ol_16r_zdscLog==true&&ui.arenalog){
						if(_status.kzol_uiArenalog_changed!=true){
							_status.kzol_uiArenalog_changed=true;
							ui.arenalog.style.height='calc(100% - 320px)';
							ui.arenalog.style.top='150px';
						};
					};
					for(var i=0;i<game.players.length;i++){
						var player=game.players[i];
						if(player!=game.me){
							if(!player.isMin()&&player.kzol_equiping==undefined){
								player.classList.add('minskin');
								if(game.bwp_changeAvatar) game.bwp_changeAvatar(player);
							};
							if(player.node.FGO_condition!=undefined&&player.kzol_showFGOC==undefined){
								player.kzol_showFGOC=true;
								player.node.FGO_condition.style.top='';
								player.node.FGO_condition.style.bottom='0px';
							};
							if(player.node.timer!=undefined&&player.node.timer.style.top!='-50px'&&player.node.timer.style.left!='-15px'){
								player.node.timer.style.top='-50px';
								player.node.timer.style.left='-15px';
							};
							if(lib.config['extension_扩展ol_jmsf_disable1']!=true){
								if(player.name2!=undefined){
									if(player.kzol_hideAvatar2==undefined){
										player.kzol_hideAvatar2=true;
										player.node.avatar2.hide();
										if(player.扩展ol_type=='fellow') player.node.name2.hide();
									};
									if(!player.isUnseen(1)){
										if(player.node.kzol_avatar2==undefined){
											var avatar2=ui.create.div(ui.click.avatar2);
											avatar2.link=player.name2;
											avatar2.style.borderRadius='40px';
											avatar2.style.cursor='pointer';
											avatar2.style.boxShadow='rgba(0, 0, 0, 0.4) 0 0 0 1px, rgba(0, 0, 0, 0.2) 0 3px 10px';
											avatar2.style.animation='fadeShow .3s';
											avatar2.style['-webkit-animation']='fadeShow .3s';
											if(player.扩展ol_type=='fellow'){
												avatar2.style.top='-15px';
												avatar2.style.left='-15px';
												avatar2.style.height='30px';
												avatar2.style.width='30px';
											}else{
												avatar2.style.bottom='-12px';
												avatar2.style.left='-12px';
												avatar2.style.height='40px';
												avatar2.style.width='40px';
											};
											avatar2.setBackground(player.name2,'character');
											player.appendChild(avatar2);
											player.node.kzol_avatar2=avatar2;
											player.avatar2_name=player.name2;
										}
									};
								};
								if(!player.isUnseen(1)){
									if(player.avatar2_name!=player.name2){
										player.node.avatar2.hide();
										if(player.name2==undefined){
											player.node.kzol_avatar2.hide();
											delete player.avatar2_name;
										}else{
											if(player.avatar2_name==undefined) player.node.kzol_avatar2.show();
											player.node.kzol_avatar2.setBackground(player.name2,'character');
											player.node.kzol_avatar2.link=player.name2;
											player.avatar2_name=player.name2;
										};
									};
								};
							};
						}else{
							if(player.isMin()){
								player.classList.remove('minskin');
							};
						};
					};
				};
			};
		};
	},1000);
}