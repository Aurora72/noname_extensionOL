window.func=function(lib,game,ui,get,ai,_status){
	if(!lib.device){
		lib.extensionMenu.extension_扩展ol.menu_qp_title={
			"name":"<b><p align=center><span style=\"font-size:18px\">-----全屏设置-----</span></b>",
			"clear":true,
			"nopointer":true,
		};
		lib.extensionMenu.extension_扩展ol.menu_qp_info={
			"name":"卡战模式下，进入全屏模式前需先将游戏窗口放大，否则对局卡牌显示可能过宽",
			"clear":true,
			"nopointer":true,
		};
		lib.extensionMenu.extension_扩展ol.menu_qp_enable={
			"name":"隐藏全屏按钮",
			"init":false
		};
		//lib.extensionMenu.extension_扩展ol.menu_qp_keep={
		//	"name":"保持全屏模式",
		//	"init":false
		//};
		//无法保持原因:这个方法只能由浏览器点击button事件来实现,不能用js
	};
	lib.arenaReady.push(function(){
		ui.扩展ol_menu=ui.create.system('菜单',null,true);
		lib.setPopped(ui.扩展ol_menu,function(){
			var uiintro=ui.create.dialog('hidden');
			uiintro.listen(function(e){
				e.stopPropagation();
			});
			var uiintro_buttons={};
			var bag=ui.create.div('.menubutton.large','<span style="cursor:pointer;">背包</span>',function(){
				game.openBag();
				uiintro.hide();
			});
			bag.style.height='30px';
			bag.style.width='175px';
			bag.style.cursor='pointer';
			bag.style.borderRadius='8px';
			bag.style.backgroundColor="#E00000";
			uiintro.add(bag);
			uiintro_buttons.bag=bag;
			var task=ui.create.div('.menubutton.large','<span style="cursor:pointer;">任务</span>',function(){
				game.openTask();
				uiintro.hide();
			});
			task.style.height='30px';
			task.style.width='175px';
			task.style.cursor='pointer';
			task.style.borderRadius='8px';
			task.style.backgroundColor="#E00000";
			uiintro.add(task);
			uiintro_buttons.task=task;
			var achievement=ui.create.div('.menubutton.large','<span style="cursor:pointer;">战功</span>',function(){
				game.扩展ol_menu_config=true;
				lib.extensionMenu.extension_扩展ol['zgcj_check'].onclick();
				uiintro.hide();
			});
			achievement.style.height='30px';
			achievement.style.width='175px';
			achievement.style.cursor='pointer';
			achievement.style.borderRadius='8px';
			achievement.style.backgroundColor="#E00000";
			uiintro.add(achievement);
			uiintro_buttons.achievement=achievement;
			var bw=ui.create.div('.menubutton.large','<span style="cursor:pointer;">宝物图鉴</span>',function(){
				game.kzol_showBwTj();
				uiintro.hide();
			});
			bw.style.height='30px';
			bw.style.width='175px';
			bw.style.cursor='pointer';
			bw.style.borderRadius='8px';
			bw.style.backgroundColor="#E00000";
			uiintro.add(bw);
			uiintro_buttons.bw=bw;
			if(lib.config.extension_扩展ol_tx_skillAnimation_show==true){
				var skillAnimation=ui.create.div('.menubutton.large','<span style="cursor:pointer;">图片特效</span>',function(){
					game.openskillAnimationEditor();
					uiintro.hide();
				});
				skillAnimation.style.height='30px';
				skillAnimation.style.width='175px';
				skillAnimation.style.borderRadius='8px';
				skillAnimation.style.backgroundColor="#E00000";
				uiintro.add(skillAnimation);
				uiintro_buttons.skillAnimation=skillAnimation;
			};
			var changeLog=ui.create.div('.menubutton.large','<span style="cursor:pointer;">更新日志</span>',function(){
				game.kzol_showChangeLog();
				uiintro.hide();
			});
			changeLog.style.height='30px';
			changeLog.style.width='175px';
			changeLog.style.borderRadius='8px';
			changeLog.style.backgroundColor="#E00000";
			uiintro.add(changeLog);
			uiintro_buttons.changeLog=changeLog;
			/*
			var user=ui.create.div('.menubutton.large','<span style="cursor:pointer;">帐号</span>',function(){
				game.say1('数据库已注销，无法打开');
				return ;
				//改
				if(lib.config.extension_扩展ol_lwgn_forbidden==true){
					game.say1('请先关闭禁止连接mySQL数据库选项');
					return ;
				};
				if(!lib.device){
					var dialog=ui.create.dialog('hidden');
					dialog.style.height='280px';
					dialog.style.width='350px';
					//dialog.style.top=event.clientY+document.body.scrollTop+'px';
					//dialog.style.left=event.clientX+document.body.scrollLeft+'px';
					dialog.style.top='calc(50% - 200px)';
					dialog.style.left='calc(50% - 175px)';
					dialog.setBackgroundImage('extension/扩展ol/Background3.jpg');
					dialog.style.backgroundSize="cover";
					dialog.classList.add('popped');
					dialog.classList.add('static');
					var str='<span style="cursor:pointer;">登录</span>';
					if(lib.config.aurora_mysql_user!=undefined) str=get.translation(lib.config.aurora_mysql_user);
					var div1=ui.create.div('.menubutton.large',str,function(){
						if(lib.config.aurora_mysql_user==undefined){
							game.扩展ol_menu_config=true;
							lib.extensionMenu.extension_扩展ol.lwgn_signIn.onclick();
						}else{
							game.say1('欢迎你，'+get.translation(lib.config.aurora_mysql_user));
						};
					});
					div1.style.height='30px';
					div1.style.width='300px';
					dialog.add(div1);
					var div2=ui.create.div('.menubutton.large','<span style="cursor:pointer;">注册</span>',function(){
						game.扩展ol_menu_config=true;
						lib.extensionMenu.extension_扩展ol.lwgn_signUp.onclick();
					});
					div2.style.height='30px';
					div2.style.width='300px';
					dialog.add(div2);
					var div3=ui.create.div('.menubutton.large','<span style="cursor:pointer;">上传</span>',function(){
						if(lib.config.aurora_mysql_user==undefined){
							game.say1('请先登录');
						}else{
							lib.extensionMenu.extension_扩展ol.lwgn_put.onclick();
						};
					});
					div3.style.height='30px';
					div3.style.width='300px';
					dialog.add(div3);
					var div4=ui.create.div('.menubutton.large','<span style="cursor:pointer;">读取</span>',function(){
						if(lib.config.aurora_mysql_user==undefined){
							game.say1('请先登录');
						}else{
							lib.extensionMenu.extension_扩展ol.lwgn_fetch.onclick();
						};
					});
					div4.style.height='30px';
					div4.style.width='300px';
					dialog.add(div4);
					var div5=ui.create.div('.menubutton.large','<span style="cursor:pointer;">退出登录</span>',function(){
						if(lib.config.aurora_mysql_user==undefined){
							game.say1('请先登录');
						}else{
							lib.extensionMenu.extension_扩展ol.lwgn_exit.onclick();
						};
					});
					div5.style.height='30px';
					div5.style.width='300px';
					dialog.add(div5);
					ui.window.appendChild(dialog);
					var close=ui.create.control('关闭',function(){
						dialog.close();
						close.close();
					});
					uiintro.hide();
				}else{
					game.say1('手机暂时无法使用');
				};
			});
			user.style.height='30px';
			user.style.width='175px';
			user.style.borderRadius='8px';
			user.style.backgroundColor="#E00000";
			uiintro.add(user);
			*/
			if(!lib.device&&lib.config.extension_扩展ol_menu_qp_enable!=true){
				var func_fullscreen=function(){
					if((document.fullScreenElement!==undefined&&document.fullScreenElement===null)||
					(document.msFullscreenElement!==undefined&&document.msFullscreenElement===null)||
					(document.mozFullScreen!==undefined&&!document.mozFullScreen)||
					(document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) return false;
					return true;
				};
				var fullscreen=ui.create.div('.menubutton.large',function(){
					if(func_fullscreen()==false){
						if(lib.config.mode=='kzsg'&&window.screen){
							var w=screen.availWidth;
							var h=screen.availHeight;
							window.moveTo(0,0);
							window.resizeTo(w,h);
							game.say1('已将窗口放大，请刷新游戏后重新进入全屏模式以获得更好的体验');
						};
						if(document.documentElement.requestFullScreen){
							document.documentElement.requestFullScreen();
						}else if(document.documentElement.mozRequestFullScreen){
							document.documentElement.mozRequestFullScreen();
						}else if(document.documentElement.webkitRequestFullScreen){
							document.documentElement.webkitRequestFullScreen();
						}else if(document.documentElement.msRequestFullscreen){
							document.documentElement.msRequestFullscreen();
						};
						this.innerHTML='<span style="cursor:pointer;">退出全屏</span>';
					}else{
						if(document.cancelFullScreen){
							document.cancelFullScreen();
						}else if(document.mozCancelFullScreen){
							document.mozCancelFullScreen();
						}else if(document.webkitCancelFullScreen){
							document.webkitCancelFullScreen();
						}else if(document.msExitFullscreen){
							document.msExitFullscreen();
						};
						this.innerHTML='<span style="cursor:pointer;">进入全屏</span>';
					};
				});
				if(func_fullscreen()==false){
					fullscreen.innerHTML='<span style="cursor:pointer;">进入全屏</span>';
				}else{
					fullscreen.innerHTML='<span style="cursor:pointer;">退出全屏</span>';
				};
				fullscreen.style.height='30px';
				fullscreen.style.width='175px';
				fullscreen.style.cursor='pointer';
				fullscreen.style.borderRadius='8px';
				fullscreen.style.backgroundColor="#E00000";
				uiintro.add(fullscreen);
				uiintro_buttons.fullscreen=fullscreen;
			};
			if(lib.config.extension_扩展ol_uiControl_reset_add==true){
				var fw=ui.create.div('.menubutton.large','<span style="cursor:pointer;">选择栏复位</span>',function(){
					lib.extensionMenu.extension_扩展ol['uiControl_reset'].onclick();
					uiintro.hide();
				});
				fw.style.height='30px';
				fw.style.width='175px';
				fw.style.borderRadius='8px';
				fw.style.backgroundColor="#E00000";
				uiintro.add(fw);
				uiintro_buttons.fw=fw;
			};
			var more=ui.create.div('.menubutton.large','<span style="cursor:pointer;">更多选项</span>',function(){
				ui.click.configMenu();
				ui.click.extensionTab('扩展ol');
				//ui.click.menuTab('扩展');
				//game.say1('点击扩展ol以查看更多选项');
				uiintro.hide();
			});
			more.style.height='30px';
			more.style.width='175px';
			more.style.cursor='pointer';
			more.style.borderRadius='8px';
			more.style.backgroundColor="#E00000";
			uiintro.add(more);
			uiintro_buttons.more=more;
			for(var i in uiintro_buttons){
				uiintro_buttons[i].style.transition='opacity 0.5s';
				uiintro_buttons[i].addEventListener(lib.config.touchscreen?'touchstart':'mousedown',function(){
					this.style.transform='scale(0.95)';
				});
				uiintro_buttons[i].addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
					this.style.transform='';
				});
			};
			return uiintro;
		},220);
	});
}