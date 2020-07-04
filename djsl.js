window.func=function(lib,game,ui,get,ai,_status){
	lib.extensionMenu.extension_扩展ol.djsl_title={
		"name":"<b><p align=center><span style=\"font-size:18px\">-----单将胜率-----</span></b>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol.djsl_enable={
		"name":"显示单将胜率",
		"init":true,
		"intro":"开启后，显示每个武将的胜率（不显示但仍会记录）"
    };
	lib.extensionMenu.extension_扩展ol.djsl_enable1={
		"name":"不显示禁选/用武将的胜率",
		"init":true,
		"intro":"开启后，不会显示禁选/用武将（含forbidai）的胜率（不显示但仍会记录）"
    };
	lib.extensionMenu.extension_扩展ol.djsl_choose={
      'name':'请选择需要清空记录的武将<br>',
      "clear":true,
      "nopointer":true,
    };
	lib.extensionMenu.extension_扩展ol.djsl_rush={
		"name":"<span style='text-decoration: underline'>↑↑↑↑↑刷新↑↑↑↑↑</span>",
		"clear":true,
		"onclick":function(){
			if(this.previousSibling!=undefined){
				var character='';
				for(i in lib.character){
					if(lib.config.ZDJL_save[i]!=undefined&&lib.config.ZDJL_save[i].win+lib.config.ZDJL_save[i].lose>0){
						var all=lib.config.ZDJL_save[i].win+lib.config.ZDJL_save[i].lose;
						var win=0;
						if(all!=0) win=lib.config.ZDJL_save[i].win/all;
						character+='<option value='+i+'>'+lib.translate[i]+'（总场数：'+all+' 胜率：'+Math.round(win*10000)/100+'%）</option>';
					};
				};
				this.previousSibling.innerHTML='<span>请选择需要清空记录的武将<br><select id="djsl_choose" size="1" style="width:calc(100%)">'+character+'</select></span>';
				game.say1('刷新成功');
			};
		},
	};
	lib.extensionMenu.extension_扩展ol.djsl_delete1={
      "name":"<span style='text-decoration: underline'>清除</span>",
      "clear":true,
      "onclick":function(){
		if(_status.connectMode){
			game.say1('联机模式下无法清除');
			return ;
		};
		var country=document.getElementById('djsl_choose');
		if(country.options[country.selectedIndex]==undefined){
			game.say1('请先选择需要清除胜率的武将');
			return ;
		};
		var str=country.options[country.selectedIndex].value;
		var all=lib.config.ZDJL_save[str].win+lib.config.ZDJL_save[str].lose;
		var win=0;
		if(all!=0) win=lib.config.ZDJL_save[str].win/all;
		if(confirm('是否清空'+lib.translate[str]+'的记录（总场数：'+all+' 胜率：'+Math.round(win*10000)/100+'%）？')){
			/*
			lib.config.ZDJL_save[str]={
				win:0,
				lose:0,
			};
			*/
			delete lib.config.ZDJL_save[str];
			game.saveConfig('ZDJL_save',lib.config.ZDJL_save);
			if(this.previousSibling.previousSibling!=undefined){
				var character='';
				for(i in lib.character){
					if(lib.config.ZDJL_save[i]!=undefined&&lib.config.ZDJL_save[i].win+lib.config.ZDJL_save[i].lose>0){
						var all=lib.config.ZDJL_save[i].win+lib.config.ZDJL_save[i].lose;
						var win=0;
						if(all!=0) win=lib.config.ZDJL_save[i].win/all;
						character+='<option value='+i+'>'+lib.translate[i]+'（总场数：'+all+' 胜率：'+Math.round(win*10000)/100+'%）</option>';
					};
				};
				this.previousSibling.previousSibling.innerHTML='<span>请选择需要清空记录的武将<br><select id="djsl_choose" size="1" style="width:calc(100%)">'+character+'</select></span>';
			};
			game.say1('清除成功');
		};
      },
    };
	lib.extensionMenu.extension_扩展ol.djsl_deleteAll={
      "name":"<span style='text-decoration: underline'>全部清除</span>",
      "clear":true,
      "onclick":function(){
		if(_status.connectMode){
			game.say1('联机模式下无法清除');
			return ;
		};
		if(confirm('是否清空所有武将的记录？')){
			lib.config.ZDJL_save={};
			/*
			for(var i in lib.characterPack){
				for(var j in lib.characterPack[i]){
					if(lib.config.ZDJL_save[j]==undefined) lib.config.ZDJL_save[j]={
						win:0,
						lose:0,
					};
				};
			};
			*/
			game.saveConfig('ZDJL_save',lib.config.ZDJL_save);
			if(this.previousSibling.previousSibling.previousSibling!=undefined){
				var character='';
				for(i in lib.character){
					if(lib.config.ZDJL_save[i]!=undefined&&lib.config.ZDJL_save[i].win+lib.config.ZDJL_save[i].lose>0){
						var all=lib.config.ZDJL_save[i].win+lib.config.ZDJL_save[i].lose;
						var win=0;
						if(all!=0) win=lib.config.ZDJL_save[i].win/all;
						character+='<option value='+i+'>'+lib.translate[i]+'（总场数：'+all+' 胜率：'+Math.round(win*10000)/100+'%）</option>';
					};
				};
				this.previousSibling.previousSibling.previousSibling.innerHTML='<span>请选择需要清空记录的武将<br><select id="djsl_choose" size="1" style="width:calc(100%)">'+character+'</select></span>';
			};
			game.say1('清除成功');
		};
      },
    };
	lib.extensionMenu.extension_扩展ol.djsl_pj={
		"name":"胜率评价",
		"init":true,
		"intro":"开启后，显示单将胜率时会加上胜率评价"
	};
	lib.extensionMenu.extension_扩展ol.djsl_flslxs={
		"name":"最小化胜率显示",
		"init":true,
		"intro":"开启后，在最小化栏（技能界面）显示单将胜率的最小化图标，在技能界面不显示单将胜率"
	};
	lib.extensionMenu.extension_扩展ol.djsl_bgzs={
		"name":"以表格形式展示",
		"init":true,
		"intro":"开启后，单将胜率会以表格形式展示"
	};
    lib.translate.kzol_rm_1='——不堪一击——';
    lib.translate.kzol_rm_2='——初生之犊——';
    lib.translate.kzol_rm_3='——初露锋芒——';
    lib.translate.kzol_rm_4='——所向披靡——';
    lib.translate.kzol_rm_5='——勇冠三军——';
    lib.translate.kzol_rm_6='-|一骑当千|-';
    lib.translate.kzol_rm_7='-★举世无双★-';
    lib.translate.kzol_rm_8='★骁勇无敌，善战无前★';
	if(lib.config.ZDJL_save==undefined){
		lib.config.ZDJL_save={};
		game.saveConfig('ZDJL_save',lib.config.ZDJL_save);
	};
	/*
	for(var i in lib.characterPack){
		for(var j in lib.characterPack[i]){
			if(lib.config.ZDJL_save[j]==undefined) lib.config.ZDJL_save[j]={
				win:0,
				lose:0,
			};
		};
	};
	*/
	if(lib.config['extension_扩展ol_djsl_enable']==true&&lib.config['extension_扩展ol_djsl_flslxs']==false){
		for(var j in lib.characterPack){
			for(var i in lib.characterPack[j]){
				if(i.indexOf('kzsg_')!=-1) continue;
				if(lib.config['extension_扩展ol_djsl_enable1']!=true||
				(lib.config['extension_扩展ol_djsl_enable1']==true&&lib.character[i]!=undefined&&lib.character[i][4]!=undefined&&!lib.character[i][4].contains('forbidai'))){
					var all=0;
					if(lib.config.ZDJL_save[i]!=undefined) all=lib.config.ZDJL_save[i].win+lib.config.ZDJL_save[i].lose;
					var win=0;
					var bool=false;
					if(all!=0&&lib.config.ZDJL_save[i]!=undefined) win=lib.config.ZDJL_save[i].win/all;
					var str='';
					if(lib.config['extension_扩展ol_djsl_pj']==true){
						var Honest_level=0;
						if(win>=0.90){
							Honest_level=8;
						}else if(win>=0.80){
							Honest_level=7;
						}else if(win>=0.70){
							Honest_level=6;
						}else if(win>=0.60){
							Honest_level=5;
						}else if(win>=0.50){
							Honest_level=4;
						}else if(win>=0.40){
							Honest_level=3;
						}else if(win>=0.30){
							Honest_level=2;
						}else{
							Honest_level=1;
						};						
						var rm="kzol_rm_"+Honest_level;
						if(lib.config['extension_扩展ol_djsl_bgzs']==false){
							str='<br>评分:'+
							"<img src="+lib.assetURL+'extension/扩展ol/kzol_djsl_'+Honest_level+'.png'+" width='18' height='18'>"+
							'<br>'+get.translation(rm);
						}else{
							str='<tr>'+
							'<td width="50%" style="text-align:center;vertical-align:middle;">'+
							'评分'+
							'</td>'+
							'<td width="50%" style="text-align:center;vertical-align:middle;">'+
							"<img src="+lib.assetURL+'extension/扩展ol/kzol_djsl_'+Honest_level+'.png'+" width='18' height='18'>"+
							'</td>'+
							'</tr>'+
							'</table>'+
							'<table style="width:100%;" border="1">'+
							'<tr>'+
							'<td width="100%" style="text-align:center;vertical-align:middle;">'+
							get.translation(rm)+
							'</td>'+
							'</tr>';
						};
					};
					var str1='';
					if(lib.config['extension_扩展ol_djsl_bgzs']==false){
						str1='总场数：'+all+'<br>胜率：'+Math.round(win*10000)/100+'%'
					}else{
						str1='<table style="width:100%;" border="1">'+
						'<tr>'+
						'<td width="50%" style="text-align:center;vertical-align:middle;">'+
						'总场数'+
						'</td>'+
						'<td width="50%" style="text-align:center;vertical-align:middle;">'+
						all+
						'</td>'+
						'</tr>'+
						'<tr>'+
						'<td width="50%" style="text-align:center;vertical-align:middle;">'+
						'胜率'+
						'</td>'+
						'<td width="50%" style="text-align:center;vertical-align:middle;">'+
						Math.round(win*10000)/100+'%'+
						'</td>'+
						'</tr>';
					};
					if(lib.characterPack[j][i][4]!=undefined&&lib.characterPack[j][i][4].contains('houzhiInfo')) bool=true;
					if(lib.characterTitle[i]==undefined){
						if(lib.config['extension_扩展ol_djsl_bgzs']==false){
							lib.characterTitle[i]=str1+str;
						}else{
							lib.characterTitle[i]=str1+str+'</table>';
						};
						if(bool==true) lib.characterTitle[i]+='<br><br>'+lib.characterIntro[i];
					}else{
						if(lib.characterPack[j][i][4]!=undefined&&lib.characterPack[j][i][4].contains('ALXYB')){
							if(lib.config['extension_扩展ol_djsl_bgzs']==false){
								lib.characterTitle[i]=str1+str+'<br><br>'+lib.characterTitle[i];
							}else{
								lib.characterTitle[i]=str1+str+lib.characterTitle[i]+'</table>';
							};
						}else{
							if(lib.config['extension_扩展ol_djsl_bgzs']==false){
								lib.characterTitle[i]+='<br><br>'+str1+str;
							}else{
								lib.characterTitle[i]+='<br><br>'+str1+str+'</table>';
							};
						};
					};
				};
			};
		};
	};
	lib.onover.push(function(result){
		var pl=game.me;
		if(pl.name!=undefined){
			if(lib.config.ZDJL_save[pl.name]==undefined) lib.config.ZDJL_save[pl.name]={
				win:0,
				lose:0,
			};
			if(result==true){
				lib.config.ZDJL_save[pl.name].win++;
			}else{
				lib.config.ZDJL_save[pl.name].lose++;
			};
			game.saveConfig('ZDJL_save',lib.config.ZDJL_save);
				
		};
		if(pl.name2!=undefined){
			if(lib.config.ZDJL_save[pl.name2]==undefined) lib.config.ZDJL_save[pl.name2]={
				win:0,
				lose:0,
			};
			if(result==true){
				lib.config.ZDJL_save[pl.name2].win++;
			}else{
				lib.config.ZDJL_save[pl.name2].lose++;
			};
			game.saveConfig('ZDJL_save',lib.config.ZDJL_save);
		};
	});
	var character='';
	for(i in lib.character){
		if(lib.config.ZDJL_save[i]!=undefined&&lib.config.ZDJL_save[i].win+lib.config.ZDJL_save[i].lose>0){
			var all=lib.config.ZDJL_save[i].win+lib.config.ZDJL_save[i].lose;
			var win=0;
			if(all!=0) win=lib.config.ZDJL_save[i].win/all;
			character+='<option value='+i+'>'+lib.translate[i]+'（总场数：'+all+' 胜率：'+Math.round(win*10000)/100+'%）</option>';
		};
	};
	lib.extensionMenu.extension_扩展ol.djsl_choose.name='请选择需要清空记录的武将<br><select id="djsl_choose" size="1" style="width:calc(100%)">'+character+'</select>';
	if(lib.config['extension_扩展ol_djsl_flslxs']!=false){
		lib.kzol_nodeintro['djsl']=function(uiintro,character,skills){
			if(lib.config['extension_扩展ol_djsl_enable']!=true) return;
			var i=character;
			if(i.indexOf('kzsg_')!=-1) return;
			if(lib.config['extension_扩展ol_djsl_enable1']!=true||
			(lib.config['extension_扩展ol_djsl_enable1']==true&&lib.character[i]!=undefined&&lib.character[i][4]!=undefined&&!lib.character[i][4].contains('forbidai'))){
				var all=0;
				if(lib.config.ZDJL_save[i]!=undefined) all=lib.config.ZDJL_save[i].win+lib.config.ZDJL_save[i].lose;
				var win=0;
				var bool=false;
				if(all!=0&&lib.config.ZDJL_save[i]!=undefined) win=lib.config.ZDJL_save[i].win/all;
				var str='';
				if(lib.config['extension_扩展ol_djsl_pj']==true){
					var Honest_level=0;
					if(win>=0.90){
						Honest_level=8;
					}else if(win>=0.80){
						Honest_level=7;
					}else if(win>=0.70){
						Honest_level=6;
					}else if(win>=0.60){
						Honest_level=5;
					}else if(win>=0.50){
						Honest_level=4;
					}else if(win>=0.40){
						Honest_level=3;
					}else if(win>=0.30){
						Honest_level=2;
					}else{
						Honest_level=1;
					};						
					var rm="kzol_rm_"+Honest_level;
					if(lib.config['extension_扩展ol_djsl_bgzs']==false){
						str='<br>评分:'+
						"<img src="+lib.assetURL+'extension/扩展ol/kzol_djsl_'+Honest_level+'.png'+" width='18' height='18'>"+
						'<br>'+get.translation(rm);
					}else{
						str='<tr>'+
						'<td width="50%" style="text-align:center;vertical-align:middle;">'+
						'评分'+
						'</td>'+
						'<td width="50%" style="text-align:center;vertical-align:middle;">'+
						"<img src="+lib.assetURL+'extension/扩展ol/kzol_djsl_'+Honest_level+'.png'+" width='18' height='18'>"+
						'</td>'+
						'</tr>'+
						'</table>'+
						'<table style="width:100%;" border="1">'+
						'<tr>'+
						'<td width="100%" style="text-align:center;vertical-align:middle;">'+
						get.translation(rm)+
						'</td>'+
						'</tr>';
					};
				};
				var str1='';
				if(lib.config['extension_扩展ol_djsl_bgzs']==false){
					str1='总场数：'+all+'<br>胜率：'+Math.round(win*10000)/100+'%'
				}else{
					str1='<table style="width:100%;" border="1">'+
					'<tr>'+
					'<td width="50%" style="text-align:center;vertical-align:middle;">'+
					'总场数'+
					'</td>'+
					'<td width="50%" style="text-align:center;vertical-align:middle;">'+
					all+
					'</td>'+
					'</tr>'+
					'<tr>'+
					'<td width="50%" style="text-align:center;vertical-align:middle;">'+
					'胜率'+
					'</td>'+
					'<td width="50%" style="text-align:center;vertical-align:middle;">'+
					Math.round(win*10000)/100+'%'+
					'</td>'+
					'</tr>';
				};
			};
			if(str==undefined) return;
			var div1=ui.create.div('.menu');
			div1.style.width='220px';
			div1.style.position='fixed';
			div1.style.transition='all 0s';
			div1.style.animation='fadeShow .3s';
			div1.style['-webkit-animation']='fadeShow .3s';
			div1.style['pointer-events']='none';
			if(lib.config['extension_扩展ol_djsl_bgzs']==false){
				div1.innerHTML=str1+str;
			}else{
				div1.style.borderRadius='0px';
				div1.innerHTML=str1+str+'</table>';
			};
			var div=ui.create.div();
			if(lib.config['extension_扩展ol_zxhxsl_show']=='img'){
				div.style.height='30px';
				div.style.width='30px';
				div.style.top='0px';
				if(lib.config['extension_扩展ol_zxhxsl_pos']=='left'||lib.config['extension_扩展ol_zxhxsl_pos']=='right'){
					div.style['margin-top']='-3px';
					div.style['margin-left']='0px';
				}else{
					div.style['margin-top']='1px';
					div.style['margin-left']='1px';
				};
				div.setBackgroundImage('extension/扩展ol/djsl_icon.png');
				div.style.backgroundSize="100% 100%";
			}else{
				div.style.height='25px';
				div.style.width='25px';
				if(lib.config['extension_扩展ol_zxhxsl_pos']=='top'||lib.config['extension_扩展ol_zxhxsl_pos']=='bottom_in') div.style.top='8px';
				if(lib.config['extension_扩展ol_zxhxsl_pos']=='left') div.style.left='3px';
				if(lib.config['extension_扩展ol_zxhxsl_pos']=='right') div.style.left='-3px';
				div.style['font-size']='20px';
				div.style['text-align']='center';
				div.style['font-family']='shousha';
				div.style['line-height']='25px';
				div.style['text-shadow']='black 0 0 2px';
				div.style['font-weight']='600';
				div.style.color='white';
				div.innerHTML='胜';
			};
			div.style.position='relative';
			div.onclick=function(e){
				e.stopPropagation();
			};
			div.onmouseover=function(){
				div1.style.left=(event.clientX/game.documentZoom+10+document.body.scrollLeft-110)+'px';
				div1.style.top=(event.clientY/game.documentZoom+document.body.scrollTop+(lib.device?0:20))+'px';
				if(div1.offsetTop+div1.offsetHeight>ui.window.offsetTop+ui.window.offsetHeight){
					div1.style.top=(event.clientY/game.documentZoom+document.body.scrollTop-div1.offsetHeight)+'px';
				};
				uiintro.appendChild(div1);
			};
			div.onmousemove=function(){
				div1.style.left=(event.clientX/game.documentZoom+10+document.body.scrollLeft-110)+'px';
				div1.style.top=(event.clientY/game.documentZoom+document.body.scrollTop+(lib.device?0:20))+'px';
				if(div1.offsetTop+div1.offsetHeight>ui.window.offsetTop+ui.window.offsetHeight){
					div1.style.top=(event.clientY/game.documentZoom+document.body.scrollTop-div1.offsetHeight)+'px';
				};
			};
			div.onmouseout=function(){
				uiintro.removeChild(div1);
			};
			uiintro.kzol_nodeintro.appendChild(div);
		};
	};
}