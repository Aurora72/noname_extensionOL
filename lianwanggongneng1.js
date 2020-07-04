window.func=function(lib,game,ui,get,ai,_status){
	lib.extensionMenu.extension_扩展ol.lwgn_title={
		"name":"<b><p align=center><span style=\"font-size:18px\">-----联网功能-----</span></b>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol.lwgn_forbidden={
		"name":"禁止连接mySQL数据库",
		"init":true,
		"intro":"开启后无法使用帐号功能（进入游戏时，若没有安装mySQL模块，不会弹出安装mySQL模块的提示）（刷新游戏后生效）"
    };
	lib.extensionMenu.extension_扩展ol.lwgn_signUp={
		'name':'注册',
		"clear":true,
		onclick:function(){
			game.say1('数据库连接中...');
			return ;
			if(lib.aurora_mysql==undefined){
				if(confirm('未安装mySQL模块，无法使用该功能，是否前往下载？（须手动解压至游戏根目录/node_modules下）（提取码：5rby）')){
					window.open('https://pan.baidu.com/s/1-jo3dzzZ1iVMAN3vY4F_WQ');
				};
				return ;
			};
			if(lib.aurora_mysql_connection==false){
				game.say1('数据库连接中...');
				return ;
			};
			if(lib.aurora_sign_dialog==undefined){
				lib.aurora_sign_dialog=true;
				if(game.扩展ol_menu_config==undefined) ui.click.configMenu();
				var dialog=ui.create.dialog('hidden');
				dialog.style.height='200px';
				dialog.style.width='350px';
				//dialog.style.top=event.clientY+document.body.scrollTop+'px';
				//dialog.style.left=event.clientX+document.body.scrollLeft+'px';
				dialog.style.top='calc(50% - 150px)';
				dialog.style.left='calc(50% - 175px)';
				dialog.setBackgroundImage('extension/扩展ol/Background3.jpg');
				dialog.style.backgroundSize="cover";
				dialog.classList.add('popped');
				dialog.classList.add('static');
				var div=ui.create.div('','<span style="font-size:30px;font-weight:600;font-family:xinwei"> 注 册 </span><br><br> 用 户 ： <input type="text" id="user"><br> 密 码 ： <input type="text" id="password"><br>确认密码：<input type="text" id="password1">');
				div.style.width='300px';
				dialog.add(div);
				var div1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">确认</span>',function(){
					if(game.扩展ol_onSignUp==true){
						game.say1('注册中...');
						return ;
					};
					var user=document.getElementById('user').value;
					var password=document.getElementById('password').value;
					var password1=document.getElementById('password1').value;
					var reg=/^[a-zA-Z0-9]+$/;
					var bool=true;
					for(var i=0;i<lib.aurora_mysql_user.length;i++){
						if(lib.aurora_mysql_user[i].user==user) bool=false;
					};
					if(user==''){
						alert('请输入用户名');
					}else if(password==''){
						alert('请输入密码');
					}else if(password1==''){
						alert('请确认密码');
					}else if(!reg.test(user)){
						console.log(user)
						alert('用户名只能为数字或字母');
					}else if(!reg.test(password)){
						alert('密码只能为数字或字母');
					}else if(user.length>15){
						alert('用户名只能在15个字以内');
					}else if(password.length>15){
						alert('密码只能在15个字以内');
					}else if(bool==false){
						alert('用户名已存在');
					}else if(password!=password1){
						alert('重复密码不相同');
					}else{
						game.扩展ol_onSignUp=true;
						var st={user:user,password:password,course:'0',wu:'0',shu:'0',wei:'0',qun:'0'};
						lib.aurora_mysql.query('insert into 数据 set ?', st,function(err, result){
							if(err){
								throw err;
							}else{
								game.saveConfig('aurora_mysql_user',user);
								delete game.扩展ol_onSignUp;
								alert('注册成功，点击确认刷新游戏');
								game.reload();
							};
						});
					};
				});
				div1.style.left='-35px'
				dialog.add(div1);
				var div2=ui.create.div('.menubutton.large','<span style="cursor:pointer;">返回</span>',function(){
					dialog.close();
					delete lib.aurora_sign_dialog;
					if(game.扩展ol_menu_config==undefined){
						ui.click.configMenu();
					}else{
						delete game.扩展ol_menu_config;
					};
				});
				div2.style.left='35px'
				dialog.add(div2);
				ui.window.appendChild(dialog);
			}else{
				game.say1('请关闭当前登录/注册界面');
			};
		},
	};
	lib.extensionMenu.extension_扩展ol.lwgn_signIn={
		'name':'登陆',
		"clear":true,
		onclick:function(){
			game.say1('数据库连接中...');
			return ;
			if(lib.aurora_mysql==undefined){
				if(confirm('未安装mySQL模块，无法使用该功能，是否前往下载？（须手动解压至游戏根目录/node_modules下）（提取码：5rby）')){
					window.open('https://pan.baidu.com/s/1-jo3dzzZ1iVMAN3vY4F_WQ');
				};
				return ;
			};
			if(lib.aurora_mysql_connection==false){
				game.say1('数据库连接中...');
				return ;
			};
			if(lib.aurora_sign_dialog==undefined){
				lib.aurora_sign_dialog=true;
				if(game.扩展ol_menu_config==undefined) ui.click.configMenu();
				var dialog=ui.create.dialog('hidden');
				dialog.style.height='175px';
				dialog.style.width='350px';
				dialog.style.top='calc(50% - 170px)';
				dialog.style.left='calc(50% - 175px)';
				dialog.setBackgroundImage('extension/扩展ol/Background3.jpg');
				dialog.style.backgroundSize="cover";
				dialog.classList.add('popped');
				dialog.classList.add('static');
				var div=ui.create.div('','<span style="font-size:30px;font-weight:600;font-family:xinwei"> 登 录 </span><br><br> 用 户 ： <input type="text" id="user"><br> 密 码 ： <input type="text" id="password">');
				div.style.width='300px';
				dialog.add(div);
				var div1=ui.create.div('.menubutton.large','<span style="cursor:pointer;">确认</span>',function(){
					var user=document.getElementById('user').value;
					var password=document.getElementById('password').value;
					var reg=/^[a-zA-Z0-9]+$/;
					var bool=false;
					var bool1=false;
					for(var i=0;i<lib.aurora_mysql_user.length;i++){
						if(lib.aurora_mysql_user[i].user==user){
							bool=true;
						};
						if(lib.aurora_mysql_user[i].password==password){
							bool1=true;
						};
					};
					if(user==''){
						alert('请输入用户名');
					}else if(password==''){
						alert('请输入密码');
					}else if(!reg.test(user)){
						console.log(user)
						alert('用户名只能为数字或字母');
					}else if(!reg.test(password)){
						alert('密码只能为数字或字母');
					}else if(user.length>15){
						alert('用户名只能在15个字以内');
					}else if(password.length>15){
						alert('密码只能在15个字以内');
					}else if(bool==false){
						alert('不存在该用户名');
					}else if(bool1==false){
						alert('密码错误');
					}else{
						game.saveConfig('aurora_mysql_user',user);
						alert('登录成功，点击确认刷新游戏');
						game.reload();
					};
				});
				div1.style.left='-35px'
				dialog.add(div1);
				var div2=ui.create.div('.menubutton.large','<span style="cursor:pointer;">返回</span>',function(){
					dialog.close();
					delete lib.aurora_sign_dialog;
					if(game.扩展ol_menu_config==undefined){
						ui.click.configMenu();
					}else{
						delete game.扩展ol_menu_config;
					};
				});
				div2.style.left='35px'
				dialog.add(div2);
				ui.window.appendChild(dialog);
			}else{
				game.say1('请关闭当前登录/注册界面');
			};
		},
	};
	if(lib.config.aurora_mysql_user!=undefined){
		delete lib.extensionMenu.extension_扩展ol.lwgn_signIn;
		lib.extensionMenu.extension_扩展ol.lwgn_user={
			'name':'欢迎你，'+get.translation(lib.config.aurora_mysql_user),
			"clear":true,
			"nopointer":true,
		};
		lib.extensionMenu.extension_扩展ol.lwgn_put={
			'name':'上传数据',
			"clear":true,
			onclick:function(){
				alert('未检测到战功模块');
			},
		};
		lib.extensionMenu.extension_扩展ol.lwgn_fetch={
			'name':'读取数据',
			"clear":true,
			onclick:function(){
				alert('未检测到战功模块');
			},
		};
		lib.extensionMenu.extension_扩展ol.lwgn_exit={
			'name':'<span style="text-decoration: underline;">退出登录</span>',
			"clear":true,
			onclick:function(){
				if(confirm('是否退出登录？')){
					game.saveConfig('aurora_mysql_user',undefined);
					alert('退出登录成功，点击确认刷新游戏');
					game.reload();
				};
			},
		};
	};
	if(lib.device){
		delete lib.extensionMenu.extension_扩展ol.lwgn_title;
		delete lib.extensionMenu.extension_扩展ol.lwgn_signUp;
		delete lib.extensionMenu.extension_扩展ol.lwgn_signIn;
	};
}