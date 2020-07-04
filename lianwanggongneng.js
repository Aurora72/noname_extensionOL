window.func=function(lib,game,ui,get,ai,_status){
	lib.aurora_mysql_connection=false;
	if(false){
	//if(lib.config.extension_扩展ol_lwgn_forbidden!=true&&!lib.device){
		lib.init.js(lib.assetURL+'node_modules/mysql','confirm',function(){
			var mysql=require('mysql');
			lib.aurora_mysql=mysql.createConnection({
				host:'us-cp.aikeba.com',
				user:'s9663959',		
				password : '13536201722',
				port:'3306',
				database:'s9663959'
			});
			lib.aurora_mysql.connect();
			lib.aurora_mysql.query('SELECT 1 + 1 AS solution',function(error,results,fields){
				if(error){
					alert('连接扩展ol数据库失败（'+error+'）');
				}else{
					lib.aurora_mysql_connection=true;
					if(ui.window==undefined){
						alert('连接扩展ol数据库成功');
					}else{
						game.say1('连接扩展ol数据库成功');
					};
				};
				if(results) console.log('The solution is: ',results[0].solution);
			});
			lib.aurora_mysql_user=[];
			lib.aurora_mysql.query('SELECT user,password FROM 数据',function(err, result){
				if(err){
					throw err;
				}else{
					lib.aurora_mysql_user=result;
				};
			});
		},function(){
			if(confirm('检测到未安装mySQL模块，是否前往下载？（须手动解压至游戏根目录/node_modules下）（提取码：5rby）')){
				window.open('https://pan.baidu.com/s/1-jo3dzzZ1iVMAN3vY4F_WQ');
			};
		});
	};
	
	
	
	
	
	
	
	
	/*var usr={user:'222',password:'222'};
	lib.aurora_mysql.query('insert into 数据 set ?', usr,function(err, result){
		if(err) throw err;
		console.log(result);
		console.log('\n');
	});*/
	/*lib.aurora_mysql.query('SELECT user,password,aaa FROM 数据',function(err, result){
		if(err) throw err;
		lib.user=result[0]
		console.log(result);
	});*/
	/*lib.aurora_mysql.query('DELETE FROM 数据 WHERE user=111',function(err, result){
		if(err) throw err;
		console.log(result);
	});*/
}