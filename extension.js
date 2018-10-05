game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"扩展ol",content:function (config,pack){
	if(lib.program!=undefined){
		for(var i in lib.program.character){
			if(lib.config['extension_扩展ol_'+i]==true){
				for(var j in lib.characterPack[i]) {
					if(lib.character[j][4].indexOf("forbidai")<0) lib.character[j][4].push("forbidai");
				};
			};
		};
		for(var i=0;i<lib.content_func.length;i++){
			lib.content_func[i](lib,game,ui,get,ai,_status);
		};
	};
},precontent:function (extensionOL){
	if(extensionOL.enable){
		if(lib.config.noname_extensionOL_version==undefined) game.saveConfig('noname_extensionOL_version','1.0.0.0');
		if(lib.config.noname_extensionOL_updateFiles==undefined) game.saveConfig('noname_extensionOL_updateFiles',{});
		if(lib.config.noname_extensionOL_version1!='1.9') game.saveConfig('noname_extensionOL_version1','1.9');
		delete lib.extensionMenu.extension_扩展ol.delete;
		delete lib.extensionMenu.extension_扩展ol.edit;
		lib.content_func=[];
		var url='https://coding.net/u/aurora72/p/noname_extensionOL/git/raw/master';
		if(lib.config.extension_扩展ol_change=='local') url=lib.assetURL+'extension/扩展ol';
		lib.init.js(url,'program',function(){
			lib.program=window.program;
			var list=[];
			var list1=[];
			lib.extensionMenu.extension_扩展ol.enableCharacter={
				"name":"<b><p align=center><span style=\"font-size:18px\">-----武将禁用-----</span></b>",
				"clear":true,
				"nopointer":true,
			};
			lib.extensionMenu.extension_扩展ol.enableCharacter1={
				"name":"设置后武将数据仍在，但ai禁用，玩家禁选（自由选择除外）",
				"clear":true,
				"nopointer":true,
			};
			for(var i in lib.program.character){
				list.push(i);
				lib.config['extension_'+lib.program.character[i]+'_enable']=false;
				game.saveConfig('extension_'+lib.program.character[i]+'_enable',false);
				lib.extensionMenu['extension_扩展ol'][i]={
					name:lib.program.character[i],
					intro:"将"+lib.program.character[i]+"包内武将设为禁用",
					init:false,
				};
			};
			lib.extensionMenu.extension_扩展ol.enableCard={
				"name":"<b><p align=center><span style=\"font-size:18px\">-----手牌禁用-----</span></b>",
				"clear":true,
				"nopointer":true,
			};
			lib.extensionMenu.extension_扩展ol.enableCard1={
				"name":"设置后移除牌堆中所有禁用包内的手牌",
				"clear":true,
				"nopointer":true,
			};
			for(var i in lib.program.card){
				lib.extensionMenu['extension_扩展ol'][i]={
					name:lib.program.card[i],
					intro:"移除牌堆中"+lib.program.card[i]+"包内的手牌",
					init:false,
				};
			};
			for(var i in lib.program.card){
				list.push(i);
			};
			for(var i in lib.program.submode){
				list1.push(i);
				lib.mode.brawl.config[i]={
					name:lib.program.submode[i],
					init:true,
					frequent:true,
				};
			};
			for(var i in lib.program.challenge){
				list1.push(i);
			};
			for(var i in lib.program.content_function){
				list1.push(i);
			};
			for(var i in lib.program.precontent_function){
				list.push(i);
				lib.config['extension_'+lib.program.precontent_function[i]+'_enable']=false;
				game.saveConfig('extension_'+lib.program.precontent_function[i]+'_enable',false);
			};
			lib.init.js(url,list,function(){
				window.func(lib,game,ui,get,ai,_status);
			});
			lib.init.js(url,list1,function(){
				lib.content_func.push(window.func);
			});
			lib.init.js('https://coding.net/u/aurora72/p/noname_extensionOL/git/raw/master','updateFiles',function(){
				var list2=[];
				for(var i=0;i<window.updateFiles.length;i++){
					if(lib.config['noname_extensionOL_updateFiles'][window.updateFiles[i]]!=true) list2.push(window.updateFiles[i]);
				};
				lib.extensionMenu.extension_扩展ol.download.onclick=function(){
					if(lib.extensionOL_onDownload!=true){
						lib.extensionOL_onDownload=true;
						for(var i in lib.program.character){
							for(var j in lib.characterPack[i]){
								if(i=='yl'){
									var str=j+'.png';
								}else if(i=='nyhzrlj'){
									var str='New'+j;
									str=str.slice(0,str.length-2);
									str=str+'.jpg';
								}else{
									var str=j+'.jpg';
								};
								if(lib.config['noname_extensionOL_updateFiles'][str]!=true) list2.push(str);
							};
						};
						if(list2.length==0){
							alert('素材已是最新');
							delete lib.extensionOL_onDownload;
						}else{
							var num=0;
							var num1=list2.length;
							lib.extensionOL_config=this;
							lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>正在下载："+num+"/"+num1+"</span>";
							var download=function(){
								game.download('https://raw.githubusercontent.com/aurora72/noname_extensionOL/master/image/'+list2[0],'extension/扩展ol/'+list2[0],function(){
									num++;
									lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>正在下载："+num+"/"+num1+"</span>";
									lib.config['noname_extensionOL_updateFiles'][list2[0]]=true;
									game.saveConfig('noname_extensionOL_updateFiles',lib.config['noname_extensionOL_updateFiles']);
									list2.remove(list2[0]);
									if(list2.length>0){
										download();
									}else{
										lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>下载完成，重启生效（点击重启）</span>";
										lib.extensionMenu.extension_扩展ol['download'].onclick=function(){window.location.reload()};
										delete lib.extensionOL_config;
										delete lib.extensionOL_onDownload;
									};
								},function(){
									alert('下载失败');
									lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>点击重新下载</span>";
									num=0;
									num1=0;
									list2=[];
									delete lib.extensionOL_config;
									delete lib.extensionOL_onDownload;
								});
							};
							download();
						};
					}else{
						alert('请等待正在更新的内容更新结束');
					};
				};
			});
		});
		lib.extensionMenu.extension_扩展ol.author={
			"name":"作者：Aurora",
			"clear":true,
			"nopointer":true,
		};
		lib.extensionMenu.extension_扩展ol.version1={
			"name":"扩展版本："+lib.config.noname_extensionOL_version1,
			"clear":true,
			"nopointer":true,
		};
		lib.extensionMenu.extension_扩展ol.version={
			"name":"coding数据版本：网络链接失败",
			"clear":true,
			"nopointer":true,
		};
		lib.extensionMenu.extension_扩展ol.version2={
			"name":"本地数据版本：未下载数据",
			"clear":true,
			"nopointer":true,
		};
		lib.extensionMenu.extension_扩展ol.changelog={
			"name":"<span style='text-decoration: underline'>查看更新日志</span>",
			"clear":true,
			"onclick":function(){
				alert('网络链接失败');
			},
		};
		lib.extensionMenu.extension_扩展ol.download1={
			"name":"<span style='text-decoration: underline'>下载扩展ol数据至本地</span>",
			"clear":true,
			"onclick":function(){
				if(lib.extensionOL_onDownload!=true){
					lib.extensionOL_onDownload=true;
					if(lib.program!=undefined){
						var list=[];
						for(var i in lib.program){
							for(var j in lib.program[i]){
								list.push(j);
							};
						};
						list.push('program');
						list.push('update');
						var num=0;
						var num1=list.length;
						lib.extensionOL_config=this;
						lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>正在下载："+num+"/"+num1+"</span>";
						var download=function(){
							game.download('https://raw.githubusercontent.com/aurora72/noname_extensionOL/master/'+list[i]+'.js','extension/扩展ol/'+list[i]+'.js',function(){
								num++;
								lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>正在下载："+num+"/"+num1+"</span>";
								list.remove(list[0]);
								if(list.length>0){
									download();
								}else{
									lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>下载完成，重启生效（点击重启）</span>";
									lib.extensionMenu.extension_扩展ol['download1'].onclick=function(){window.location.reload()};
									delete lib.extensionOL_config;
									delete lib.extensionOL_onDownload;
								};
							},function(){
								alert('下载失败');
								lib.extensionOL_config.innerHTML="<span style='text-decoration: underline'>点击重新下载</span>";
								num=0;
								num1=0;
								list2=[];
								delete lib.extensionOL_config;
								delete lib.extensionOL_onDownload;
							});
						};
						download();
					}else{
						alert('网络链接失败');
					};
				}else{
					alert('请等待正在更新的内容更新结束');
				};
			},
		};
		lib.extensionMenu.extension_扩展ol.download={
			"name":"<span style='text-decoration: underline'>更新扩展ol素材</span>",
			"clear":true,
			"onclick":function(){
				alert('网络链接失败');
			},
		};
		lib.extensionMenu.extension_扩展ol.change={
			"name":'加载数据来源',
			"init":'ol',
			"item":{
				'ol':'coding',
			},
		};
		lib.init.js('https://coding.net/u/aurora72/p/noname_extensionOL/git/raw/master','update',function(){
			lib.extensionMenu.extension_扩展ol.version.name="coding数据版本："+window.version;
			if(lib.config.noname_extensionOL_version!=window.version){
				game.saveConfig('noname_extensionOL_version',window.version);
				lib.content_func.push(function(){
					lib.arenaReady.push(function(){
						var func=function(){
							var bool=true;
							var bool1=true;
							var dialog=ui.create.dialog('hidden');
							dialog.style.height='calc(100%)';
							dialog.style.width='calc(100%)';
							dialog.style.left='0px';
							dialog.style.top='0px';
							dialog.classList.add('popped');
							dialog.classList.add('static');
							var div=ui.create.div('.menubutton.round','×',function(){
								dialog.delete();
							});
							div.style.left='calc(50% - 35px)';
							dialog.add(div);
							for(var i in window.changelog){
								dialog.addText(i+'   ('+window.changelog[i].version+')'+'<br>',false);
								dialog.addText('<li>'+window.changelog[i].info,false);
								if(window.changelog[i].players!=[]){
									for(var j=0;j<window.changelog[i].players.length;j++){
										if(lib.character[window.changelog[i].players[j]]==undefined) bool=false;
									};
								};
								if(bool==true) dialog.addSmall([window.changelog[i].players,'character']);
								if(window.changelog[i].cards!=[]){
									for(var j=0;j<window.changelog[i].cards.length;j++){
										if(lib.card[window.changelog[i].cards[j]]==undefined) bool1=false;
									};
								};
								if(bool1==true) dialog.addSmall([window.changelog[i].cards,'vcard']);
							};
							ui.window.appendChild(dialog);
						};
						ui.noname_extensionOL_update=ui.create.system('扩展ol已更新',func,true);
					});
				});
			};
			lib.extensionMenu.extension_扩展ol.changelog.onclick=function(){
				ui.click.configMenu();
				var bool=true;
				var bool1=true;
				var dialog=ui.create.dialog('hidden');
				dialog.style.height='calc(100%)';
				dialog.style.width='calc(100%)';
				dialog.style.left='0px';
				dialog.style.top='0px';
				dialog.classList.add('popped');
				dialog.classList.add('static');
				var div=ui.create.div('.menubutton.round','×',function(){
					dialog.delete();
				});
				div.style.left='calc(50% - 35px)';
				dialog.add(div);
				for(var i in window.changelog){
					dialog.addText(i+'   ('+window.changelog[i].version+')'+'<br>',false);
					dialog.addText('<li>'+window.changelog[i].info,false);
					if(window.changelog[i].players!=[]){
						for(var j=0;j<window.changelog[i].players.length;j++){
							if(lib.character[window.changelog[i].players[j]]==undefined) bool=false;
						};
					};
					if(bool==true) dialog.addSmall([window.changelog[i].players,'character']);
					if(window.changelog[i].cards!=[]){
						for(var j=0;j<window.changelog[i].cards.length;j++){
							if(lib.card[window.changelog[i].cards[j]]==undefined) bool1=false;
						};
					};
					if(bool1==true) dialog.addSmall([window.changelog[i].cards,'vcard']);
				};
				ui.window.appendChild(dialog);
			};
		});
		lib.init.js(lib.assetURL+'extension/扩展ol','update',function(){
			lib.extensionMenu.extension_扩展ol.version2.name="本地数据版本："+window.version;
			if(lib.config.noname_extensionOL_version!=window.version){
				lib.extensionMenu.extension_扩展ol.download1.name="<span style='text-decoration: underline'>更新扩展ol数据</span>";
			};
			if(lib.config.noname_extensionOL_version==window.version){
				lib.extensionMenu.extension_扩展ol.download1.name="<span style='text-decoration: underline'>本地数据已是最新</span>";
				lib.extensionMenu.extension_扩展ol.download1.onclick=function(){
					alert('本地数据已是最新');
				};
			};
			lib.extensionMenu.extension_扩展ol.change.item.local='本地';
		});
		delete lib.config.mode;
	};
},config:{
	"introduce":{
		"name":"开启该扩展且联网后加载coding上的扩展ol数据；也可将数据下载到本地，加载本地数据<br>扩展ol素材需要自行下载",
		"clear":true,
		"nopointer":true,
	},
},help:{},package:{
    character:{
        character:{
        },
        translate:{
        },
    },
    card:{
        card:{
        },
        translate:{
        },
        list:[],
    },
    skill:{
        skill:{
        },
        translate:{
        },
    },
    intro:"",
    author:"",
    diskURL:"",
    forumURL:"",
    version:"",
},files:{"character":[],"card":[],"skill":[]}}})
