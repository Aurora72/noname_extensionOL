window.func=function(lib,game,ui,get,ai,_status){
	if(lib.config.mode!='kzsg') return ;
	if(lib.characterPack_mode_kzsg!=undefined){
		var list1=[];
		var list2=[];
		var list3=[];
		var list4=[];
		var list5=[];
		var list6=[];
		var list7=[];
		for(var i in lib.characterPack_mode_kzsg){
			var quailty=lib.kzol_kzsg_card[i].quailty;
			if(quailty<=1){
				list1.push(i);
			}else if(quailty>1&&quailty<=2){
				list2.push(i);
			}else if(quailty>2&&quailty<=3){
				list3.push(i);
			}else if(quailty>3&&quailty<=4){
				list4.push(i);
			}else if(quailty>4&&quailty<=5){
				list5.push(i);
			}else if(quailty>5&&quailty<=6){
				list6.push(i);
			}else{
				list7.push(i);
			};
		};
		game.addCharacterPack({
			characterSort:{
				'mode_extension_卡战图鉴':{
					'kzsg_list1':list1,
					'kzsg_list2':list2,
					'kzsg_list3':list3,
					'kzsg_list4':list4,
					'kzsg_list5':list5,
					'kzsg_list6':list6,
					'kzsg_list7':list7,
				},
			},
			character:lib.characterPack_mode_kzsg,
			skill:{
				'kzsg_冲阵1':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzsg_changePrepareRound==undefined) return false;
						if(game.kzol_p_card.contains(player)){
							return game.kzol_p_card_wait.length>0;
						}else{
							return game.kzol_e_card_wait.length>0;
						};
					},
					content:function(){
						var num=1;
						if(game.kzol_p_card.contains(player)){
							var pl=game.kzol_p_card_wait.randomGet();
							pl.popup('冲阵'+num);
							game.log(pl,'发起冲锋');
							game.kzsg_changePrepareRound(pl,num,'p');
							if(pl.kzsg.prepareRound<=0){
								if(pl.kzsg.type=='术'||pl.kzsg.type=='宝物'){
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.p_wait,_status.kzol_kzsg_divs.p_bw,'p',pl);
								}else{
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.p_wait,_status.kzol_kzsg_divs.p_war,'p',pl);
								};
							};
						}else{
							var pl=game.kzol_e_card_wait.randomGet();
							pl.popup('冲阵'+num);
							game.log(pl,'发起冲锋');
							game.kzsg_changePrepareRound(pl,num,'e');
							if(pl.kzsg.prepareRound<=0){
								if(pl.kzsg.type=='术'||pl.kzsg.type=='宝物'){
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.e_wait,_status.kzol_kzsg_divs.e_bw,'e',pl);
								}else{
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.e_wait,_status.kzol_kzsg_divs.e_war,'e',pl);
								};
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_冲阵2':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzsg_changePrepareRound==undefined) return false;
						if(game.kzol_p_card.contains(player)){
							return game.kzol_p_card_wait.length>0;
						}else{
							return game.kzol_e_card_wait.length>0;
						};
					},
					content:function(){
						var num=2;
						if(game.kzol_p_card.contains(player)){
							var pl=game.kzol_p_card_wait.randomGet();
							pl.popup('冲阵'+num);
							game.log(pl,'发起冲锋');
							game.kzsg_changePrepareRound(pl,num,'p');
							if(pl.kzsg.prepareRound<=0){
								if(pl.kzsg.type=='术'||pl.kzsg.type=='宝物'){
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.p_wait,_status.kzol_kzsg_divs.p_bw,'p',pl);
								}else{
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.p_wait,_status.kzol_kzsg_divs.p_war,'p',pl);
								};
							};
						}else{
							var pl=game.kzol_e_card_wait.randomGet();
							pl.popup('冲阵'+num);
							game.log(pl,'发起冲锋');
							game.kzsg_changePrepareRound(pl,num,'e');
							if(pl.kzsg.prepareRound<=0){
								if(pl.kzsg.type=='术'||pl.kzsg.type=='宝物'){
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.e_wait,_status.kzol_kzsg_divs.e_bw,'e',pl);
								}else{
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.e_wait,_status.kzol_kzsg_divs.e_war,'e',pl);
								};
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_冲阵3':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzsg_changePrepareRound==undefined) return false;
						if(game.kzol_p_card.contains(player)){
							return game.kzol_p_card_wait.length>0;
						}else{
							return game.kzol_e_card_wait.length>0;
						};
					},
					content:function(){
						var num=3;
						if(game.kzol_p_card.contains(player)){
							var pl=game.kzol_p_card_wait.randomGet();
							pl.popup('冲阵'+num);
							game.log(pl,'发起冲锋');
							game.kzsg_changePrepareRound(pl,num,'p');
							if(pl.kzsg.prepareRound<=0){
								if(pl.kzsg.type=='术'||pl.kzsg.type=='宝物'){
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.p_wait,_status.kzol_kzsg_divs.p_bw,'p',pl);
								}else{
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.p_wait,_status.kzol_kzsg_divs.p_war,'p',pl);
								};
							};
						}else{
							var pl=game.kzol_e_card_wait.randomGet();
							pl.popup('冲阵'+num);
							game.log(pl,'发起冲锋');
							game.kzsg_changePrepareRound(pl,num,'e');
							if(pl.kzsg.prepareRound<=0){
								if(pl.kzsg.type=='术'||pl.kzsg.type=='宝物'){
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.e_wait,_status.kzol_kzsg_divs.e_bw,'e',pl);
								}else{
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.e_wait,_status.kzol_kzsg_divs.e_war,'e',pl);
								};
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_冲阵4':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzsg_changePrepareRound==undefined) return false;
						if(game.kzol_p_card.contains(player)){
							return game.kzol_p_card_wait.length>0;
						}else{
							return game.kzol_e_card_wait.length>0;
						};
					},
					content:function(){
						var num=4;
						if(game.kzol_p_card.contains(player)){
							var pl=game.kzol_p_card_wait.randomGet();
							pl.popup('冲阵'+num);
							game.log(pl,'发起冲锋');
							game.kzsg_changePrepareRound(pl,num,'p');
							if(pl.kzsg.prepareRound<=0){
								if(pl.kzsg.type=='术'||pl.kzsg.type=='宝物'){
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.p_wait,_status.kzol_kzsg_divs.p_bw,'p',pl);
								}else{
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.p_wait,_status.kzol_kzsg_divs.p_war,'p',pl);
								};
							};
						}else{
							var pl=game.kzol_e_card_wait.randomGet();
							pl.popup('冲阵'+num);
							game.log(pl,'发起冲锋');
							game.kzsg_changePrepareRound(pl,num,'e');
							if(pl.kzsg.prepareRound<=0){
								if(pl.kzsg.type=='术'||pl.kzsg.type=='宝物'){
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.e_wait,_status.kzol_kzsg_divs.e_bw,'e',pl);
								}else{
									game.kzol_kzsg_move(_status.kzol_kzsg_divs.e_wait,_status.kzol_kzsg_divs.e_war,'e',pl);
								};
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_偷袭1':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						source:'damageBegin1'
					},
					forced:true,
					filter:function(event,player){
						return player.storage.kzol_kzsg_偷袭1==undefined;
					},
					content:function(){
						player.storage.kzol_kzsg_偷袭1=true;
						/*
						if(trigger.player.hasSkill('kzsg_洞察')){
							trigger.player.popup('洞察');
							return ;
						};
						*/
						trigger.num+=1;
					},
				},
				'kzsg_偷袭2':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						source:'damageBegin1'
					},
					forced:true,
					filter:function(event,player){
						return player.storage.kzol_kzsg_偷袭2==undefined;
					},
					content:function(){
						player.storage.kzol_kzsg_偷袭2=true;
						/*
						if(trigger.player.hasSkill('kzsg_洞察')){
							trigger.player.popup('洞察');
							return ;
						};
						*/
						trigger.num+=2;
					},
				},
				'kzsg_偷袭3':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						source:'damageBegin1'
					},
					forced:true,
					filter:function(event,player){
						return player.storage.kzol_kzsg_偷袭3==undefined;
					},
					content:function(){
						player.storage.kzol_kzsg_偷袭3=true;
						/*
						if(trigger.player.hasSkill('kzsg_洞察')){
							trigger.player.popup('洞察');
							return ;
						};
						*/
						trigger.num+=3;
					},
				},
				'kzsg_蛊惑1':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzsg_changePrepareRound==undefined) return false;
						if(game.kzol_p_card.contains(player)){
							return game.kzol_e_card_wait.length>0;
						}else{
							return game.kzol_p_card_wait.length>0;
						};
					},
					content:function(){
						var num=-1;
						if(game.kzol_p_card.contains(player)){
							var pl=game.kzol_e_card_wait.randomGet();
							if(pl.hasSkill('kzsg_水镜术1')){
								pl.popup('水镜术');
								//pl.line(player);
								pl=player;
							};
							if(pl.hasSkill('kzsg_洞察')){
								pl.popup('洞察');
								return ;
							};
							pl.popup('受蛊惑'+(-num));
							game.log(player,'蛊惑了',pl);
							game.kzsg_changePrepareRound(pl,num,'e');
						}else{
							var pl=game.kzol_p_card_wait.randomGet();
							if(pl.hasSkill('kzsg_水镜术1')){
								pl.popup('水镜术');
								//pl.line(player);
								pl=player;
							};
							if(pl.hasSkill('kzsg_洞察')){
								pl.popup('洞察');
								return ;
							};
							pl.popup('受蛊惑'+(-num));
							game.log(player,'蛊惑了',pl);
							game.kzsg_changePrepareRound(pl,num,'p');
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_蛊惑2':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzsg_changePrepareRound==undefined) return false;
						if(game.kzol_p_card.contains(player)){
							return game.kzol_e_card_wait.length>0;
						}else{
							return game.kzol_p_card_wait.length>0;
						};
					},
					content:function(){
						var num=-2;
						if(game.kzol_p_card.contains(player)){
							var pl=game.kzol_e_card_wait.randomGet();
							if(pl.hasSkill('kzsg_水镜术1')){
								pl.popup('水镜术');
								//pl.line(player);
								pl=player;
							};
							if(pl.hasSkill('kzsg_洞察')){
								pl.popup('洞察');
								return ;
							};
							pl.popup('受蛊惑'+(-num));
							game.log(player,'蛊惑了',pl);
							game.kzsg_changePrepareRound(pl,num,'e');
						}else{
							var pl=game.kzol_p_card_wait.randomGet();
							if(pl.hasSkill('kzsg_水镜术1')){
								pl.popup('水镜术');
								//pl.line(player);
								pl=player;
							};
							if(pl.hasSkill('kzsg_洞察')){
								pl.popup('洞察');
								return ;
							};
							pl.popup('受蛊惑'+(-num));
							game.log(player,'蛊惑了',pl);
							game.kzsg_changePrepareRound(pl,num,'p');
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_蛊惑3':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzsg_changePrepareRound==undefined) return false;
						if(game.kzol_p_card.contains(player)){
							return game.kzol_e_card_wait.length>0;
						}else{
							return game.kzol_p_card_wait.length>0;
						};
					},
					content:function(){
						var num=-3;
						if(game.kzol_p_card.contains(player)){
							var pl=game.kzol_e_card_wait.randomGet();
							if(pl.hasSkill('kzsg_水镜术1')){
								pl.popup('水镜术');
								//pl.line(player);
								pl=player;
							};
							if(pl.hasSkill('kzsg_洞察')){
								pl.popup('洞察');
								return ;
							};
							pl.popup('受蛊惑'+(-num));
							game.log(player,'蛊惑了',pl);
							game.kzsg_changePrepareRound(pl,num,'e');
						}else{
							var pl=game.kzol_p_card_wait.randomGet();
							if(pl.hasSkill('kzsg_水镜术1')){
								pl.popup('水镜术');
								//pl.line(player);
								pl=player;
							};
							if(pl.hasSkill('kzsg_洞察')){
								pl.popup('洞察');
								return ;
							};
							pl.popup('受蛊惑'+(-num));
							game.log(player,'蛊惑了',pl);
							game.kzsg_changePrepareRound(pl,num,'p');
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_盾防1':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						player:'damageBegin3'
					},
					forced:true,
					priority:-Infinity,
					filter:function(event,player){
						return event.nature==undefined;
					},
					content:function(){
						trigger.num-=1;
					},
				},
				'kzsg_盾防2':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						player:'damageBegin3'
					},
					forced:true,
					priority:-Infinity,
					filter:function(event,player){
						return event.nature==undefined;
					},
					content:function(){
						trigger.num-=2;
					},
				},
				'kzsg_盾防3':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						player:'damageBegin3'
					},
					forced:true,
					priority:-Infinity,
					filter:function(event,player){
						return event.nature==undefined;
					},
					content:function(){
						trigger.num-=3;
					},
				},
				'kzsg_践踏':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						source:'damageBegin1'
					},
					forced:true,
					priority:-Infinity,
					filter:function(event,player){
						return event.player.kzsg.type=='弓手'||event.player.hasSkill('kzsg_冷箭');
					},
					content:function(){
						trigger.num=trigger.num*2;
					},
				},
				'kzsg_索命1':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_p_card.contains(player)){
							return game.kzol_e_card.length>0;
						}else{
							return game.kzol_p_card.length>0;
						};
					},
					content:function(){
						var targets=[];
						if(game.kzol_p_card.contains(player)){
							for(var j=0;j<game.kzol_e_card.length;j++){
								var bool=true;
								var pl=game.kzol_e_card[j];
								if(pl.isOut()) continue;
								for(var i=0;i<game.kzol_e_card.length;i++){
									if(game.kzol_e_card[i].isOut()) continue;
									if(game.kzol_e_card[i].hp<pl.hp) bool=false;
								};
								if(bool==true) targets.push(pl);
							};
						}else{
							for(var j=0;j<game.kzol_p_card.length;j++){
								var bool=true;
								var pl=game.kzol_p_card[j];
								if(pl.isOut()) continue;
								for(var i=0;i<game.kzol_p_card.length;i++){
									if(game.kzol_p_card[i].isOut()) continue;
									if(game.kzol_p_card[i].hp<pl.hp) bool=false;
								};
								if(bool==true) targets.push(pl);
							};
							
						};
						player.line(targets);
						for(var j=0;j<targets.length;j++){
							if(targets[j].hasSkill('kzsg_水镜术1')){
								targets[j].popup('水镜术');
								targets[j].line(player);
								targets[j]=player;
							};
							if(targets[j].hasSkill('kzsg_洞察')){
								targets[j].popup('洞察');
								continue ;
							};
							targets[j].damage(1).kzsg_exDamage=false;
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_索命2':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_p_card.contains(player)){
							return game.kzol_e_card.length>0;
						}else{
							return game.kzol_p_card.length>0;
						};
					},
					content:function(){
						var targets=[];
						if(game.kzol_p_card.contains(player)){
							for(var j=0;j<game.kzol_e_card.length;j++){
								var bool=true;
								var pl=game.kzol_e_card[j];
								if(pl.isOut()) continue;
								for(var i=0;i<game.kzol_e_card.length;i++){
									if(game.kzol_e_card[i].isOut()) continue;
									if(game.kzol_e_card[i].hp<pl.hp) bool=false;
								};
								if(bool==true) targets.push(pl);
							};
						}else{
							for(var j=0;j<game.kzol_p_card.length;j++){
								var bool=true;
								var pl=game.kzol_p_card[j];
								if(pl.isOut()) continue;
								for(var i=0;i<game.kzol_p_card.length;i++){
									if(game.kzol_p_card[i].isOut()) continue;
									if(game.kzol_p_card[i].hp<pl.hp) bool=false;
								};
								if(bool==true) targets.push(pl);
							};
							
						};
						player.line(targets);
						for(var j=0;j<targets.length;j++){
							if(targets[j].hasSkill('kzsg_水镜术1')){
								targets[j].popup('水镜术');
								targets[j].line(player);
								targets[j]=player;
							};
							if(targets[j].hasSkill('kzsg_洞察')){
								targets[j].popup('洞察');
								continue ;
							};
							targets[j].damage(2).kzsg_exDamage=false;
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_索命3':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_p_card.contains(player)){
							return game.kzol_e_card.length>0;
						}else{
							return game.kzol_p_card.length>0;
						};
					},
					content:function(){
						var targets=[];
						if(game.kzol_p_card.contains(player)){
							for(var j=0;j<game.kzol_e_card.length;j++){
								var bool=true;
								var pl=game.kzol_e_card[j];
								if(pl.isOut()) continue;
								for(var i=0;i<game.kzol_e_card.length;i++){
									if(game.kzol_e_card[i].isOut()) continue;
									if(game.kzol_e_card[i].hp<pl.hp) bool=false;
								};
								if(bool==true) targets.push(pl);
							};
						}else{
							for(var j=0;j<game.kzol_p_card.length;j++){
								var bool=true;
								var pl=game.kzol_p_card[j];
								if(pl.isOut()) continue;
								for(var i=0;i<game.kzol_p_card.length;i++){
									if(game.kzol_p_card[i].isOut()) continue;
									if(game.kzol_p_card[i].hp<pl.hp) bool=false;
								};
								if(bool==true) targets.push(pl);
							};
							
						};
						player.line(targets);
						for(var j=0;j<targets.length;j++){
							if(targets[j].hasSkill('kzsg_水镜术1')){
								targets[j].popup('水镜术');
								targets[j].line(player);
								targets[j]=player;
							};
							if(targets[j].hasSkill('kzsg_洞察')){
								targets[j].popup('洞察');
								continue ;
							};
							targets[j].damage(3).kzsg_exDamage=false;
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_洞察':{
					nobracket:true,
					mode:['kzsg'],
				},
				'kzsg_禁言':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						global:'phaseBegin'
					},
					forced:true,
					priority:Infinity,
					filter:function(event,player){
						if(game.kzol_p_card.contains(player)){
							return game.kzol_e_card.contains(event.player)
						}else{
							return game.kzol_p_card.contains(event.player)
						};
					},
					content:function(){
						player.line(trigger.player);
						if(trigger.player.hasSkill('kzsg_洞察')){
							trigger.player.popup('洞察');
							return ;
						};
						trigger.player.storage.kzsg_洞察=true;
						var list=[];
						for(var i=0;i<trigger.player.get('s').length;i++){
							var skill=trigger.player.get('s')[i];
							if(lib.skill[skill].enable!=undefined) list.push(skill);
						};
						trigger.player.disableSkill('',list);
					},
				},
				'_kzsg_禁言':{
					trigger:{
						player:'phaseAfter'
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return player.storage.kzsg_洞察==true;
					},
					content:function(){
						var list=[];
						for(var i=0;i<player.get('s').length;i++){
							var skill=player.get('s')[i];
							if(lib.skill[skill].enable!=undefined) list.push(skill);
						};
						player.enableSkill('',list);
						delete player.storage.kzsg_洞察;
					},
				},
				'kzsg_威势1':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					content:function(){
						player.kzsg_damageSQ(1,true);
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_威势2':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					content:function(){
						player.kzsg_damageSQ(2,true);
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_威势3':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					content:function(){
						player.kzsg_damageSQ(3,true);
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_飞行':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						player:'damageBefore'
					},
					forced:true,
					priority:Infinity,
					filter:function(event,player){
						if(event.source!=undefined&&event.source.hasSkill('kzsg_冷箭')) return false;
						if(event.source!=undefined&&event.source.storage.kzsg_飞行翼!=undefined) return false;
						if(event.kzsg_from=='刃甲') return false;
						if(event.nature!=undefined||(event.nature==undefined&&event.source!=undefined&&(event.source.kzsg.type=='弓手'||event.source.hasSkill('kzsg_飞行')))) return false;
						return true;
					},
					content:function(){
						trigger.untrigger();
						trigger.finish();
					},
				},
				'kzsg_急救1':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						var list1=[];
						if(game.kzol_p_card.contains(player)){
							var list=game.kzol_p_card;
						}else{
							var list=game.kzol_e_card;
						};
						for(var j=0;j<list.length;j++){
							if(list[j].isOut()) continue;
							if(list[j].hp<list[j].maxHp) list1.push(list[j]);
						};
						return list1.length>0;
					},
					content:function(){
						var targets=[];
						if(game.kzol_p_card.contains(player)){
							for(var j=0;j<game.kzol_p_card.length;j++){
								var bool=true;
								var pl=game.kzol_p_card[j];
								if(pl.isOut()) continue;
								for(var i=0;i<game.kzol_p_card.length;i++){
									if(game.kzol_p_card[i].isOut()) continue;
									if(game.kzol_p_card[i].hp>=game.kzol_p_card[i].maxHp) continue;
									if(game.kzol_p_card[i].hp<pl.hp) bool=false;
								};
								if(bool==true) targets.push(pl);
							};
						}else{
							for(var j=0;j<game.kzol_e_card.length;j++){
								var bool=true;
								var pl=game.kzol_e_card[j];
								if(pl.isOut()) continue;
								for(var i=0;i<game.kzol_e_card.length;i++){
									if(game.kzol_e_card[i].isOut()) continue;
									if(game.kzol_e_card[i].hp>=game.kzol_e_card[i].maxHp) continue;
									if(game.kzol_e_card[i].hp<pl.hp) bool=false;
								};
								if(bool==true) targets.push(pl);
							};
							
						};
						if(lib.config.mode_config.kzsg.duidan==true&&_status.kzol_kzsg_onbattle!=undefined&&_status.kzol_kzsg_onbattle.type!='pkc'){
							if(targets.length>0){
								var target=targets[0];
								player.line(target);
								target.recover(1);
							};
						}else{
							player.line(targets);
							for(var j=0;j<targets.length;j++){
								targets[j].recover(1);
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_急救2':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						var list1=[];
						if(game.kzol_p_card.contains(player)){
							var list=game.kzol_p_card;
						}else{
							var list=game.kzol_e_card;
						};
						for(var j=0;j<list.length;j++){
							if(list[j].isOut()) continue;
							if(list[j].hp<list[j].maxHp) list1.push(list[j]);
						};
						return list1.length>0;
					},
					content:function(){
						var targets=[];
						if(game.kzol_p_card.contains(player)){
							for(var j=0;j<game.kzol_p_card.length;j++){
								var bool=true;
								var pl=game.kzol_p_card[j];
								if(pl.isOut()) continue;
								for(var i=0;i<game.kzol_p_card.length;i++){
									if(game.kzol_p_card[i].isOut()) continue;
									if(game.kzol_p_card[i].hp>=game.kzol_p_card[i].maxHp) continue;
									if(game.kzol_p_card[i].hp<pl.hp) bool=false;
								};
								if(bool==true) targets.push(pl);
							};
						}else{
							for(var j=0;j<game.kzol_e_card.length;j++){
								var bool=true;
								var pl=game.kzol_e_card[j];
								if(pl.isOut()) continue;
								for(var i=0;i<game.kzol_e_card.length;i++){
									if(game.kzol_e_card[i].isOut()) continue;
									if(game.kzol_e_card[i].hp>=game.kzol_e_card[i].maxHp) continue;
									if(game.kzol_e_card[i].hp<pl.hp) bool=false;
								};
								if(bool==true) targets.push(pl);
							};
							
						};
						if(lib.config.mode_config.kzsg.duidan==true&&_status.kzol_kzsg_onbattle!=undefined&&_status.kzol_kzsg_onbattle.type!='pkc'){
							if(targets.length>0){
								var target=targets[0];
								player.line(target);
								target.recover(2);
							};
						}else{
							player.line(targets);
							for(var j=0;j<targets.length;j++){
								targets[j].recover(2);
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_急救3':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						var list1=[];
						if(game.kzol_p_card.contains(player)){
							var list=game.kzol_p_card;
						}else{
							var list=game.kzol_e_card;
						};
						for(var j=0;j<list.length;j++){
							if(list[j].isOut()) continue;
							if(list[j].hp<list[j].maxHp) list1.push(list[j]);
						};
						return list1.length>0;
					},
					content:function(){
						var targets=[];
						if(game.kzol_p_card.contains(player)){
							for(var j=0;j<game.kzol_p_card.length;j++){
								var bool=true;
								var pl=game.kzol_p_card[j];
								if(pl.isOut()) continue;
								for(var i=0;i<game.kzol_p_card.length;i++){
									if(game.kzol_p_card[i].isOut()) continue;
									if(game.kzol_p_card[i].hp>=game.kzol_p_card[i].maxHp) continue;
									if(game.kzol_p_card[i].hp<pl.hp) bool=false;
								};
								if(bool==true) targets.push(pl);
							};
						}else{
							for(var j=0;j<game.kzol_e_card.length;j++){
								var bool=true;
								var pl=game.kzol_e_card[j];
								if(pl.isOut()) continue;
								for(var i=0;i<game.kzol_e_card.length;i++){
									if(game.kzol_e_card[i].isOut()) continue;
									if(game.kzol_e_card[i].hp>=game.kzol_e_card[i].maxHp) continue;
									if(game.kzol_e_card[i].hp<pl.hp) bool=false;
								};
								if(bool==true) targets.push(pl);
							};
							
						};
						if(lib.config.mode_config.kzsg.duidan==true&&_status.kzol_kzsg_onbattle!=undefined&&_status.kzol_kzsg_onbattle.type!='pkc'){
							if(targets.length>0){
								var target=targets[0];
								player.line(target);
								target.recover(3);
							};
						}else{
							player.line(targets);
							for(var j=0;j<targets.length;j++){
								targets[j].recover(3);
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_闪电1':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							return game.kzol_kzsg_getCard('e').length>0;
						}else{
							return game.kzol_kzsg_getCard('p').length>0;
						};
					},
					content:function(){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							if(game.kzol_kzsg_getCard('e').length>0){
								var target=game.kzol_kzsg_getCard('e').randomGet();
								player.line(target);
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								var damage=target.damage(1);
								damage.nature='thunder';
								damage.kzsg_exDamage=false;
							};
						}else{
							if(game.kzol_kzsg_getCard('p').length>0){
								var target=game.kzol_kzsg_getCard('p').randomGet();
								player.line(target);
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								var damage=target.damage(1);
								damage.nature='thunder';
								damage.kzsg_exDamage=false;
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_闪电2':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							return game.kzol_kzsg_getCard('e').length>0;
						}else{
							return game.kzol_kzsg_getCard('p').length>0;
						};
					},
					content:function(){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							if(game.kzol_kzsg_getCard('e').length>0){
								var target=game.kzol_kzsg_getCard('e').randomGet();
								player.line(target);
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								var damage=target.damage(2);
								damage.nature='thunder';
								damage.kzsg_exDamage=false;
							};
						}else{
							if(game.kzol_kzsg_getCard('p').length>0){
								var target=game.kzol_kzsg_getCard('p').randomGet();
								player.line(target);
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								var damage=target.damage(2);
								damage.nature='thunder';
								damage.kzsg_exDamage=false;
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_闪电3':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							return game.kzol_kzsg_getCard('e').length>0;
						}else{
							return game.kzol_kzsg_getCard('p').length>0;
						};
					},
					content:function(){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							if(game.kzol_kzsg_getCard('e').length>0){
								var target=game.kzol_kzsg_getCard('e').randomGet();
								player.line(target);
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								var damage=target.damage(3);
								damage.nature='thunder';
								damage.kzsg_exDamage=false;
							};
						}else{
							if(game.kzol_kzsg_getCard('p').length>0){
								var target=game.kzol_kzsg_getCard('p').randomGet();
								player.line(target);
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								var damage=target.damage(3);
								damage.nature='thunder';
								damage.kzsg_exDamage=false;
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_毒刃1':{
					nobracket:true,
					mode:['kzsg'],
                    marktext:"毒",
                    intro:{
                        content:function (storage){
							return '毒刃1：'+(storage)+'个回合'
                        },
                    },
					trigger:{
						source:'damageBegin'
					},
					forced:true,
					filter:function(event,player){
						return event.nature==undefined;
					},
					content:function(){
						if(trigger.player.hasSkill('kzsg_洞察')){
							trigger.player.popup('洞察');
							return ;
						};
						if(trigger.player.storage.kzsg_毒刃1==undefined) trigger.player.storage.kzsg_毒刃1=0;
						trigger.player.storage.kzsg_毒刃1++;
						trigger.player.markSkill('kzsg_毒刃1');
						trigger.player.syncStorage('kzsg_毒刃1');
					},
				},
				'_kzsg_毒刃1':{
					trigger:{
						player:'phaseAfter'
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return player.storage.kzsg_毒刃1!=undefined;
					},
					content:function(){
						player.storage.kzsg_毒刃1--;
						player.syncStorage('kzsg_毒刃1');
						player.loseHp(1);
						game.log(player,'受到毒刃1伤害');
						if(player.storage.kzsg_毒刃1<=0){
							player.unmarkSkill('kzsg_毒刃1');
							delete player.storage.kzsg_毒刃1;
						};
					},
				},
				'kzsg_毒刃2':{
					nobracket:true,
					mode:['kzsg'],
                    marktext:"毒",
                    intro:{
                        content:function (storage){
							return '毒刃2：'+(storage)+'个回合'
                        },
                    },
					trigger:{
						source:'damageBegin'
					},
					forced:true,
					filter:function(event,player){
						return event.nature==undefined;
					},
					content:function(){
						if(trigger.player.hasSkill('kzsg_洞察')){
							trigger.player.popup('洞察');
							return ;
						};
						if(trigger.player.storage.kzsg_毒刃2==undefined) trigger.player.storage.kzsg_毒刃2=0;
						trigger.player.storage.kzsg_毒刃2++;
						trigger.player.markSkill('kzsg_毒刃2');
						trigger.player.syncStorage('kzsg_毒刃2');
					},
				},
				'_kzsg_毒刃2':{
					trigger:{
						player:'phaseAfter'
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return player.storage.kzsg_毒刃2!=undefined;
					},
					content:function(){
						player.storage.kzsg_毒刃2--;
						player.syncStorage('kzsg_毒刃2');
						player.loseHp(2);
						game.log(player,'受到毒刃2伤害');
						if(player.storage.kzsg_毒刃2<=0){
							player.unmarkSkill('kzsg_毒刃2');
							delete player.storage.kzsg_毒刃2;
						};
					},
				},
				'kzsg_毒刃3':{
					nobracket:true,
					mode:['kzsg'],
                    marktext:"毒",
                    intro:{
                        content:function (storage){
							return '毒刃3：'+(storage)+'个回合'
                        },
                    },
					trigger:{
						source:'damageBegin'
					},
					forced:true,
					filter:function(event,player){
						return event.nature==undefined;
					},
					content:function(){
						if(trigger.player.hasSkill('kzsg_洞察')){
							trigger.player.popup('洞察');
							return ;
						};
						if(trigger.player.storage.kzsg_毒刃3==undefined) trigger.player.storage.kzsg_毒刃3=0;
						trigger.player.storage.kzsg_毒刃3++;
						trigger.player.markSkill('kzsg_毒刃3');
						trigger.player.syncStorage('kzsg_毒刃3');
					},
				},
				'_kzsg_毒刃3':{
					trigger:{
						player:'phaseAfter'
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return player.storage.kzsg_毒刃3!=undefined;
					},
					content:function(){
						player.storage.kzsg_毒刃3--;
						player.syncStorage('kzsg_毒刃3');
						player.loseHp(3);
						game.log(player,'受到毒刃3伤害');
						if(player.storage.kzsg_毒刃3<=0){
							player.unmarkSkill('kzsg_毒刃3');
							delete player.storage.kzsg_毒刃3;
						};
					},
				},
				'kzsg_奋击':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						source:'damageAfter'
					},
					forced:true,
					filter:function(event,player){
						return event.nature==undefined;
					},
					content:function(){
						player.kzsg_addAttack();
					},
				},
				'kzsg_刃甲1':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						player:'damageBegin'
					},
					forced:true,
					filter:function(event,player){
						return event.nature==undefined&&event.source!=undefined&&event.kzsg_from!='刃甲';
					},
					content:function(){
						player.line(trigger.source);
						if(trigger.source.hasSkill('kzsg_洞察')){
							trigger.source.popup('洞察');
							return ;
						};
						var damage=trigger.source.damage(1);
						damage.kzsg_exDamage=false;
						damage.kzsg_from='刃甲';
					},
				},
				'kzsg_刃甲2':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						player:'damageBegin'
					},
					forced:true,
					filter:function(event,player){
						return event.nature==undefined&&event.source!=undefined&&event.kzsg_from!='刃甲';
					},
					content:function(){
						player.line(trigger.source);
						if(trigger.source.hasSkill('kzsg_洞察')){
							trigger.source.popup('洞察');
							return ;
						};
						var damage=trigger.source.damage(2);
						damage.kzsg_exDamage=false;
						damage.kzsg_from='刃甲';
					},
				},
				'kzsg_刃甲3':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						player:'damageBegin'
					},
					forced:true,
					filter:function(event,player){
						return event.nature==undefined&&event.source!=undefined&&event.kzsg_from!='刃甲';
					},
					content:function(){
						player.line(trigger.source);
						if(trigger.source.hasSkill('kzsg_洞察')){
							trigger.source.popup('洞察');
							return ;
						};
						var damage=trigger.source.damage(3);
						damage.kzsg_exDamage=false;
						damage.kzsg_from='刃甲';
					},
				},
				'kzsg_冷箭':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						source:'damageBegin1'
					},
					forced:true,
					priority:-Infinity,
					filter:function(event,player){
						return event.player.kzsg.type=='步兵'||event.player.hasSkill('kzsg_飞行')||event.player.storage.kzsg_飞行翼!=undefined;
					},
					content:function(){
						trigger.num=trigger.num*2;
					},
				},
				'_kzsg_冰封':{
					trigger:{
						player:'phaseBefore'
					},
					forced:true,
					popup:false,
					priority:Infinity,
					filter:function(event,player){
						return player.storage.kzsg_冰封1!=undefined;
					},
					content:function(){
						trigger.cancel();
						game.log(player,'被冰封，无法行动');
						player.phaseSkipped=true;
						player.storage.kzsg_冰封1--;
						player.syncStorage('kzsg_冰封1');
						if(player.storage.kzsg_冰封1<=0){
							player.unmarkSkill('kzsg_冰封1');
							delete player.storage.kzsg_冰封1;
						};
					},
				},
				'kzsg_冰封1':{
					nobracket:true,
					mode:['kzsg'],
                    marktext:"冰",
                    intro:{
                        content:function (storage){
							return '冰封：'+(storage)+'个回合'
                        },
                    },
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							return game.kzol_kzsg_getCard('e').length>0;
						}else{
							return game.kzol_kzsg_getCard('p').length>0;
						};
					},
					content:function(){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							if(game.kzol_kzsg_getCard('e').length>0){
								var target=game.kzol_kzsg_getCard('e').randomGet();
								player.line(target);
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								var damage=target.damage(1);
								damage.kzsg_exDamage=false;
								damage.nature='kzsg_forzen';
								if(Math.random()<0.5){
									if(target.storage.kzsg_冰封1==undefined) target.storage.kzsg_冰封1=0;
									target.storage.kzsg_冰封1++;
									target.markSkill('kzsg_冰封1');
									target.syncStorage('kzsg_冰封1');
								};
							};
						}else{
							if(game.kzol_kzsg_getCard('p').length>0){
								var target=game.kzol_kzsg_getCard('p').randomGet();
								player.line(target);
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								var damage=target.damage(1);
								damage.kzsg_exDamage=false;
								damage.nature='kzsg_forzen';
								if(Math.random()<0.5){
									if(target.storage.kzsg_冰封1==undefined) target.storage.kzsg_冰封1=0;
									target.storage.kzsg_冰封1++;
									target.markSkill('kzsg_冰封1');
									target.syncStorage('kzsg_冰封1');
								};
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_冰封2':{
					nobracket:true,
					mode:['kzsg'],
                    marktext:"冰",
                    intro:{
                        content:function (storage){
							return '冰封：'+(storage)+'个回合'
                        },
                    },
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							return game.kzol_kzsg_getCard('e').length>0;
						}else{
							return game.kzol_kzsg_getCard('p').length>0;
						};
					},
					content:function(){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							if(game.kzol_kzsg_getCard('e').length>0){
								var target=game.kzol_kzsg_getCard('e').randomGet();
								player.line(target);
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								var damage=target.damage(2);
								damage.kzsg_exDamage=false;
								damage.nature='kzsg_forzen';
								if(Math.random()<0.5){
									if(target.storage.kzsg_冰封1==undefined) target.storage.kzsg_冰封1=0;
									target.storage.kzsg_冰封1++;
									target.markSkill('kzsg_冰封1');
									target.syncStorage('kzsg_冰封1');
								};
							};
						}else{
							if(game.kzol_kzsg_getCard('p').length>0){
								var target=game.kzol_kzsg_getCard('p').randomGet();
								player.line(target);
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								var damage=target.damage(2);
								damage.kzsg_exDamage=false;
								damage.nature='kzsg_forzen';
								if(Math.random()<0.5){
									if(target.storage.kzsg_冰封1==undefined) target.storage.kzsg_冰封1=0;
									target.storage.kzsg_冰封1++;
									target.markSkill('kzsg_冰封1');
									target.syncStorage('kzsg_冰封1');
								};
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_冰封3':{
					nobracket:true,
					mode:['kzsg'],
                    marktext:"冰",
                    intro:{
                        content:function (storage){
							return '冰封：'+(storage)+'个回合'
                        },
                    },
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							return game.kzol_kzsg_getCard('e').length>0;
						}else{
							return game.kzol_kzsg_getCard('p').length>0;
						};
					},
					content:function(){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							if(game.kzol_kzsg_getCard('e').length>0){
								var target=game.kzol_kzsg_getCard('e').randomGet();
								player.line(target);
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								var damage=target.damage(3);
								damage.kzsg_exDamage=false;
								damage.nature='kzsg_forzen';
								if(Math.random()<0.5){
									if(target.storage.kzsg_冰封1==undefined) target.storage.kzsg_冰封1=0;
									target.storage.kzsg_冰封1++;
									target.markSkill('kzsg_冰封1');
									target.syncStorage('kzsg_冰封1');
								};
							};
						}else{
							if(game.kzol_kzsg_getCard('p').length>0){
								var target=game.kzol_kzsg_getCard('p').randomGet();
								player.line(target);
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								var damage=target.damage(3);
								damage.kzsg_exDamage=false;
								damage.nature='kzsg_forzen';
								if(Math.random()<0.5){
									if(target.storage.kzsg_冰封1==undefined) target.storage.kzsg_冰封1=0;
									target.storage.kzsg_冰封1++;
									target.markSkill('kzsg_冰封1');
									target.syncStorage('kzsg_冰封1');
								};
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_冰封4':{
					nobracket:true,
					mode:['kzsg'],
                    marktext:"冰",
                    intro:{
                        content:function (storage){
							return '冰封：'+(storage)+'个回合'
                        },
                    },
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							return game.kzol_kzsg_getCard('e').length>0;
						}else{
							return game.kzol_kzsg_getCard('p').length>0;
						};
					},
					content:function(){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							if(game.kzol_kzsg_getCard('e').length>0){
								var target=game.kzol_kzsg_getCard('e').randomGet();
								player.line(target);
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								var damage=target.damage(4);
								damage.kzsg_exDamage=false;
								damage.nature='kzsg_forzen';
								if(Math.random()<0.5){
									if(target.storage.kzsg_冰封1==undefined) target.storage.kzsg_冰封1=0;
									target.storage.kzsg_冰封1++;
									target.markSkill('kzsg_冰封1');
									target.syncStorage('kzsg_冰封1');
								};
							};
						}else{
							if(game.kzol_kzsg_getCard('p').length>0){
								var target=game.kzol_kzsg_getCard('p').randomGet();
								player.line(target);
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								var damage=target.damage(4);
								damage.kzsg_exDamage=false;
								damage.nature='kzsg_forzen';
								if(Math.random()<0.5){
									if(target.storage.kzsg_冰封1==undefined) target.storage.kzsg_冰封1=0;
									target.storage.kzsg_冰封1++;
									target.markSkill('kzsg_冰封1');
									target.syncStorage('kzsg_冰封1');
								};
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_长枪击':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						source:'damageBegin1'
					},
					forced:true,
					priority:-Infinity,
					filter:function(event,player){
						return event.player.kzsg.type=='骑兵';
					},
					content:function(){
						trigger.num=trigger.num*2;
					},
				},
				'_kzsg_陷阱':{
					trigger:{
						player:'phaseBefore'
					},
					forced:true,
					popup:false,
					priority:Infinity,
					filter:function(event,player){
						return player.storage.kzsg_陷阱1!=undefined;
					},
					content:function(){
						trigger.cancel();
						game.log(player,'被陷阱夹住，无法行动');
						player.phaseSkipped=true;
						player.storage.kzsg_陷阱1--;
						player.syncStorage('kzsg_陷阱1');
						if(player.storage.kzsg_陷阱1<=0){
							player.unmarkSkill('kzsg_陷阱1');
							delete player.storage.kzsg_陷阱1;
						};
					},
				},
				'kzsg_陷阱1':{
					nobracket:true,
					mode:['kzsg'],
                    marktext:"夹",
                    intro:{
                        content:function (storage){
							return '陷阱：'+(storage)+'个'
                        },
                    },
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							return game.kzol_kzsg_getCard('e').length>0;
						}else{
							return game.kzol_kzsg_getCard('p').length>0;
						};
					},
					content:function(){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							if(game.kzol_kzsg_getCard('e').length>0){
								var target=game.kzol_kzsg_getCard('e').randomGet();
								player.line(target);
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								if(Math.random()<0.75){
									if(target.storage.kzsg_陷阱1==undefined) target.storage.kzsg_陷阱1=0;
									if(target.storage.kzsg_陷阱1<1) target.storage.kzsg_陷阱1++;
									target.markSkill('kzsg_陷阱1');
									target.syncStorage('kzsg_陷阱1');
									game.log(target,'被陷阱夹住了');
								};
							};
						}else{
							if(game.kzol_kzsg_getCard('p').length>0){
								var target=game.kzol_kzsg_getCard('p').randomGet();
								player.line(target);
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								if(Math.random()<0.75){
									if(target.storage.kzsg_陷阱1==undefined) target.storage.kzsg_陷阱1=0;
									if(target.storage.kzsg_陷阱1<1) target.storage.kzsg_陷阱1++;
									target.markSkill('kzsg_陷阱1');
									target.syncStorage('kzsg_陷阱1');
									game.log(target,'被陷阱夹住了');
								};
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_瘟疫':{
					nobracket:true,
					mode:['kzsg'],
                    marktext:"瘟",
					//locked:true,
                    intro:{
                        content:function (storage,player,skill){
							var num=0;
							if(player.storage.kzsg_瘟疫!=undefined) num=player.storage.kzsg_瘟疫.length;
							return '瘟疫'+(num);
                        },
                    },
					trigger:{
						source:'damageBegin'
					},
					forced:true,
					filter:function(event,player){
						var target=event.player;
						return event.nature==undefined&&((target.storage.kzsg_瘟疫!=undefined&&!target.storage.kzsg_瘟疫.contains(player))||target.storage.kzsg_瘟疫==undefined);
					},
					content:function(){
						var target=trigger.player;
						if(target.hasSkill('kzsg_洞察')){
							target.popup('洞察');
							return ;
						};
						if(target.storage.kzsg_瘟疫==undefined) target.storage.kzsg_瘟疫=[];
						target.storage.kzsg_瘟疫.push(player);
						target.markSkill('kzsg_瘟疫');
						target.syncStorage('kzsg_瘟疫');
						target.kzsg_addAttack(-1);
						var num=1;
						if(num>target.maxHp) num=target.maxHp;
						if(num>0){
							target.loseMaxHp(num);
							if(target.maxHp==0) target.die().source=player;
						};
					},
				},
				'kzsg_嗜血术1':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							return game.kzol_kzsg_getCard('e').length>0;
						}else{
							return game.kzol_kzsg_getCard('p').length>0;
						};
					},
					content:function(){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							if(game.kzol_kzsg_getCard('e').length>0){
								var target=game.kzol_kzsg_getCard('e').randomGet();
								player.line(target);
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								target.loseHp(1);
								player.recover(1);
							};
						}else{
							if(game.kzol_kzsg_getCard('p').length>0){
								var target=game.kzol_kzsg_getCard('p').randomGet();
								player.line(target);
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								target.loseHp(1);
								player.recover(1);
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_嗜血术2':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							return game.kzol_kzsg_getCard('e').length>0;
						}else{
							return game.kzol_kzsg_getCard('p').length>0;
						};
					},
					content:function(){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							if(game.kzol_kzsg_getCard('e').length>0){
								var target=game.kzol_kzsg_getCard('e').randomGet();
								player.line(target);
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								target.loseHp(2);
								player.recover(2);
							};
						}else{
							if(game.kzol_kzsg_getCard('p').length>0){
								var target=game.kzol_kzsg_getCard('p').randomGet();
								player.line(target);
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								target.loseHp(2);
								player.recover(2);
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_嗜血术3':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							return game.kzol_kzsg_getCard('e').length>0;
						}else{
							return game.kzol_kzsg_getCard('p').length>0;
						};
					},
					content:function(){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							if(game.kzol_kzsg_getCard('e').length>0){
								var target=game.kzol_kzsg_getCard('e').randomGet();
								player.line(target);
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								target.loseHp(3);
								player.recover(3);
							};
						}else{
							if(game.kzol_kzsg_getCard('p').length>0){
								var target=game.kzol_kzsg_getCard('p').randomGet();
								player.line(target);
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								target.loseHp(3);
								player.recover(3);
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_吸血':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						source:'damageEnd'
					},
					forced:true,
					priority:-Infinity,
					filter:function(event,player){
						return event.nature==undefined;
					},
					content:function(){
						player.recover(trigger.num);
					},
				},
				"kzsg_诅咒":{
					nobracket:true,
					mode:['kzsg'],
                    marktext:"诅",
                    intro:{
                        content:'诅咒，使用的【杀】有50%几率失效',
                    },
					group:["kzsg_诅咒_1","kzsg_诅咒_2"],
					subSkill:{
						"1":{
							trigger:{
								source:'damageBegin'
							},
							forced:true,
							filter:function(event,player){
								if(event.card==undefined) return false; 
								if(event.card.name!='sha') return false; 
								return event.player.storage.kzsg_诅咒==undefined;
							},
							content:function(){
								var target=trigger.player;
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								target.storage.kzsg_诅咒=true;
								target.markSkill('kzsg_诅咒');
								target.syncStorage('kzsg_诅咒');
								game.log(target,'被诅咒了');
							},
						},
						"2":{
							trigger:{
								player:'damageBegin'
							},
							forced:true,
							filter:function(event,player){
								if(event.card==undefined) return false; 
								if(event.card.name!='sha') return false; 
								return event.player.storage.kzsg_诅咒==undefined&&event.source!=undefined;
							},
							content:function(){
								var target=trigger.source;
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									return ;
								};
								target.storage.kzsg_诅咒=true;
								target.markSkill('kzsg_诅咒');
								target.syncStorage('kzsg_诅咒');
								game.log(target,'被诅咒了');
							},
						},
					},
				},
				"_kzsg_诅咒":{
					trigger:{
						player:'shaBegin'
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						//if(event.targets==undefined) return false;
						return player.storage.kzsg_诅咒!=undefined&&Math.random()<0.5;
					},
					content:function(){
						trigger.cancel();
						game.log(player,'受到诅咒，【杀】失效了');
					},
				},
				'kzsg_重生':{
					nobracket:true,
					mode:['kzsg'],
					kzsg_revive:0.5,
				},
				'kzsg_召唤':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_p_card.contains(player)){
							return game.kzol_p_card_md.length>0;
						}else{
							return game.kzol_e_card_md.length>0;
						};
					},
					content:function(){
						if(game.kzol_p_card.contains(player)){
							var pl=game.kzol_p_card_md.randomGet();
						}else{
							var pl=game.kzol_e_card_md.randomGet();
						};
						pl.kzsg_revive();
						game.log(player,'召唤了',pl);
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_丹术1':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						player:'phaseEnd'
					},
					forced:true,
					content:function(){
						player.recover(1);
					},
				},
				'kzsg_丹术2':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						player:'phaseEnd'
					},
					forced:true,
					content:function(){
						player.recover(2);
					},
				},
				'kzsg_丹术3':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						player:'phaseEnd'
					},
					forced:true,
					content:function(){
						player.recover(3);
					},
				},
				'kzsg_横扫':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						source:'damageBegin4'
					},
					forced:true,
					priority:-Infinity,
					filter:function(event,player){
						if(event.kzsg_exDamage==false) return false;
						if(event.kzsg_from=='kzsg_横扫') return false;
						var targets=[];
						if(game.kzol_p_card.contains(player)){
							var target=game.kzol_e_card;
						}else{
							var target=game.kzol_p_card;
						};
						for(var i=0;i<target.length;i++){
							if(target[i]==event.player){
								if(target[i+1]!=undefined) targets.push(target[i+1]);
								if(target[i-1]!=undefined) targets.push(target[i-1]);
							};
						};
						return targets.length>0;
					},
					content:function(){
						var targets=[];
						if(game.kzol_p_card.contains(player)){
							var target=game.kzol_e_card;
						}else{
							var target=game.kzol_p_card;
						};
						for(var i=0;i<target.length;i++){
							if(target[i]==trigger.player){
								if(target[i+1]!=undefined) targets.push(target[i+1]);
								if(target[i-1]!=undefined) targets.push(target[i-1]);
							};
						};
						player.line(targets);
						for(var i=0;i<targets.length;i++){
							var damage=targets[i].damage(trigger.num);
							damage.kzsg_exDamage=false;
							if(trigger.nature!=undefined) damage.nature=trigger.nature;
							damage.kzsg_from='kzsg_横扫';
						};
					},
				},
				'kzsg_削弱_zd':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_p_card.contains(player)){
							return game.kzol_e_card.length>0;
						}else{
							return game.kzol_p_card.length>0;
						};
					},
					content:function(){
						if(game.kzol_p_card.contains(player)){
							player.line(game.kzol_e_card);
							for(var i=0;i<game.kzol_e_card.length;i++){
								game.kzol_e_card[i].kzsg_addAttack(-1);
							};
						}else{
							player.line(game.kzol_p_card);
							for(var i=0;i<game.kzol_p_card.length;i++){
								game.kzol_p_card[i].kzsg_addAttack(-1);
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_削弱':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						source:'damageBegin'
					},
					forced:true,
					priority:-Infinity,
					filter:function(event,player){
						return event.card!=undefined&&event.card.name=='sha';
					},
					content:function(){
						/*var num=1;
						if(num>trigger.player.maxHp) num=trigger.player.maxHp;
						if(num>0){
							trigger.player.loseMaxHp(num);
							if(trigger.player.maxHp==0) trigger.player.die().source=player;
						};*/
						if(trigger.player.hasSkill('kzsg_洞察')){
							trigger.player.popup('洞察');
							return ;
						};
						trigger.player.kzsg_addAttack(-1);
					},
				},
				'kzsg_削弱2':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						source:'damageBegin'
					},
					forced:true,
					priority:-Infinity,
					filter:function(event,player){
						return event.card!=undefined&&event.card.name=='sha';
					},
					content:function(){
						if(trigger.player.hasSkill('kzsg_洞察')){
							trigger.player.popup('洞察');
							return ;
						};
						trigger.player.kzsg_addAttack(-2);
					},
				},
				'kzsg_削弱3':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						source:'damageBegin'
					},
					forced:true,
					priority:-Infinity,
					filter:function(event,player){
						return event.card!=undefined&&event.card.name=='sha';
					},
					content:function(){
						if(trigger.player.hasSkill('kzsg_洞察')){
							trigger.player.popup('洞察');
							return ;
						};
						trigger.player.kzsg_addAttack(-3);
					},
				},
				'kzsg_自残1':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						player:'phaseEnd'
					},
					forced:true,
					content:function(){
						player.loseHp(1);
					},
				},
				'kzsg_自残2':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						player:'phaseEnd'
					},
					forced:true,
					content:function(){
						player.loseHp(2);
					},
				},
				'kzsg_自残3':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						player:'phaseEnd'
					},
					forced:true,
					content:function(){
						player.loseHp(3);
					},
				},
				'kzsg_狂暴':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						player:'damageBegin'
					},
					forced:true,
					filter:function(event,player){
						return event.card!=undefined&&event.card.name=='sha';
					},
					content:function(){
						player.kzsg_addAttack();
					},
				},
				'kzsg_联盟':{
					nobracket:true,
					mode:['kzsg'],
				},
				'kzsg_炎流星1':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_p_card.contains(player)){
							return game.kzol_e_card.length>0;
						}else{
							return game.kzol_p_card.length>0;
						};
					},
					content:function(){
						if(game.kzol_p_card.contains(player)){
							player.line(game.kzol_e_card);
							for(var i=0;i<game.kzol_e_card.length;i++){
								var target=game.kzol_e_card[i];
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									continue ;
								};
								var damage=target.damage(1);
								damage.kzsg_exDamage=false;
								damage.nature='fire';
							};
						}else{
							player.line(game.kzol_p_card);
							for(var i=0;i<game.kzol_p_card.length;i++){
								var target=game.kzol_p_card[i];
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									continue ;
								};
								var damage=target.damage(1);
								damage.kzsg_exDamage=false;
								damage.nature='fire';
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_炎流星2':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_p_card.contains(player)){
							return game.kzol_e_card.length>0;
						}else{
							return game.kzol_p_card.length>0;
						};
					},
					content:function(){
						if(game.kzol_p_card.contains(player)){
							player.line(game.kzol_e_card);
							for(var i=0;i<game.kzol_e_card.length;i++){
								var target=game.kzol_e_card[i];
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									continue ;
								};
								var damage=target.damage(2);
								damage.kzsg_exDamage=false;
								damage.nature='fire';
							};
						}else{
							player.line(game.kzol_p_card);
							for(var i=0;i<game.kzol_p_card.length;i++){
								var target=game.kzol_p_card[i];
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									continue ;
								};
								var damage=target.damage(2);
								damage.kzsg_exDamage=false;
								damage.nature='fire';
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_炎流星3':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_p_card.contains(player)){
							return game.kzol_e_card.length>0;
						}else{
							return game.kzol_p_card.length>0;
						};
					},
					content:function(){
						if(game.kzol_p_card.contains(player)){
							player.line(game.kzol_e_card);
							for(var i=0;i<game.kzol_e_card.length;i++){
								var target=game.kzol_e_card[i];
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									continue ;
								};
								var damage=target.damage(3);
								damage.kzsg_exDamage=false;
								damage.nature='fire';
							};
						}else{
							player.line(game.kzol_p_card);
							for(var i=0;i<game.kzol_p_card.length;i++){
								var target=game.kzol_p_card[i];
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									continue ;
								};
								var damage=target.damage(3);
								damage.kzsg_exDamage=false;
								damage.nature='fire';
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'_kzsg_燃烧':{
					trigger:{
						player:'phaseAfter'
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return player.storage.kzsg_燃烧!=undefined;
					},
					content:function(){
						//player.storage.kzsg_燃烧--;
						//player.syncStorage('kzsg_燃烧');
						player.loseHp(1);
						game.log(player,'受到燃烧伤害');
						/*
						if(player.storage.kzsg_燃烧<=0){
							player.unmarkSkill('kzsg_燃烧');
							delete player.storage.kzsg_燃烧;
						};
						*/
					},
				},
				'kzsg_燃烧':{
                    marktext:"燃",
                    intro:{
                        content:function (storage){
							//return '燃烧：'+(storage)+'个回合'
							return '燃烧'
                        },
                    },
				},
				'kzsg_火龙息1':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_p_card==undefined) return ;
						if(game.kzol_e_card==undefined) return ;
						var num=-1;
						if(game.kzol_p_card.contains(player)){
							num=player.kzsg_getSeat(player,'p');
							if(num!=-1) if(game.kzol_e_card[num]==undefined) return false;
						};
						if(game.kzol_e_card.contains(player)){
							num=player.kzsg_getSeat(player,'e');
							if(num!=-1) if(game.kzol_p_card[num]==undefined) return false;
						};
						return true;
					},
					content:function(){
						if(game.kzol_p_card.contains(player)){
							var target=game.kzol_e_card[player.kzsg_getSeat(player,'p')];
						}else{
							var target=game.kzol_p_card[player.kzsg_getSeat(player,'e')];
						};
						player.line(target);
						if(target.hasSkill('kzsg_水镜术1')){
							target.popup('水镜术');
							target.line(player);
							target=player;
						};
						if(target.hasSkill('kzsg_洞察')){
							target.popup('洞察');
							return ;
						};
						var damage=target.damage(1);
						damage.kzsg_exDamage=false;
						damage.nature='fire';
						if(target.storage.kzsg_燃烧==undefined) target.storage.kzsg_燃烧=0;
						target.storage.kzsg_燃烧+=3;
						target.markSkill('kzsg_燃烧');
						target.syncStorage('kzsg_燃烧');
					},
					ai:{
						order:20,
						result:{
							player:1,
						},
					},
				},
				'kzsg_火龙息2':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_p_card==undefined) return ;
						if(game.kzol_e_card==undefined) return ;
						var num=-1;
						if(game.kzol_p_card.contains(player)){
							num=player.kzsg_getSeat(player,'p');
							if(num!=-1) if(game.kzol_e_card[num]==undefined) return false;
						};
						if(game.kzol_e_card.contains(player)){
							num=player.kzsg_getSeat(player,'e');
							if(num!=-1) if(game.kzol_p_card[num]==undefined) return false;
						};
						return true;
					},
					content:function(){
						if(game.kzol_p_card.contains(player)){
							var target=game.kzol_e_card[player.kzsg_getSeat(player,'p')];
						}else{
							var target=game.kzol_p_card[player.kzsg_getSeat(player,'e')];
						};
						player.line(target);
						if(target.hasSkill('kzsg_水镜术1')){
							target.popup('水镜术');
							target.line(player);
							target=player;
						};
						if(target.hasSkill('kzsg_洞察')){
							target.popup('洞察');
							return ;
						};
						var damage=target.damage(2);
						damage.kzsg_exDamage=false;
						damage.nature='fire';
						if(target.storage.kzsg_燃烧==undefined) target.storage.kzsg_燃烧=0;
						target.storage.kzsg_燃烧+=3;
						target.markSkill('kzsg_燃烧');
						target.syncStorage('kzsg_燃烧');
					},
					ai:{
						order:20,
						result:{
							player:1,
						},
					},
				},
				'kzsg_火龙息3':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_p_card==undefined) return ;
						if(game.kzol_e_card==undefined) return ;
						var num=-1;
						if(game.kzol_p_card.contains(player)){
							num=player.kzsg_getSeat(player,'p');
							if(num!=-1) if(game.kzol_e_card[num]==undefined) return false;
						};
						if(game.kzol_e_card.contains(player)){
							num=player.kzsg_getSeat(player,'e');
							if(num!=-1) if(game.kzol_p_card[num]==undefined) return false;
						};
						return true;
					},
					content:function(){
						if(game.kzol_p_card.contains(player)){
							var target=game.kzol_e_card[player.kzsg_getSeat(player,'p')];
						}else{
							var target=game.kzol_p_card[player.kzsg_getSeat(player,'e')];
						};
						player.line(target);
						if(target.hasSkill('kzsg_水镜术1')){
							target.popup('水镜术');
							target.line(player);
							target=player;
						};
						if(target.hasSkill('kzsg_洞察')){
							target.popup('洞察');
							return ;
						};
						var damage=target.damage(3);
						damage.kzsg_exDamage=false;
						damage.nature='fire';
						if(target.storage.kzsg_燃烧==undefined) target.storage.kzsg_燃烧=0;
						target.storage.kzsg_燃烧+=3;
						target.markSkill('kzsg_燃烧');
						target.syncStorage('kzsg_燃烧');
					},
					ai:{
						order:20,
						result:{
							player:1,
						},
					},
				},
				'kzsg_火龙息4':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_p_card==undefined) return ;
						if(game.kzol_e_card==undefined) return ;
						var num=-1;
						if(game.kzol_p_card.contains(player)){
							num=player.kzsg_getSeat(player,'p');
							if(num!=-1) if(game.kzol_e_card[num]==undefined) return false;
						};
						if(game.kzol_e_card.contains(player)){
							num=player.kzsg_getSeat(player,'e');
							if(num!=-1) if(game.kzol_p_card[num]==undefined) return false;
						};
						return true;
					},
					content:function(){
						if(game.kzol_p_card.contains(player)){
							var target=game.kzol_e_card[player.kzsg_getSeat(player,'p')];
						}else{
							var target=game.kzol_p_card[player.kzsg_getSeat(player,'e')];
						};
						player.line(target);
						if(target.hasSkill('kzsg_水镜术1')){
							target.popup('水镜术');
							target.line(player);
							target=player;
						};
						if(target.hasSkill('kzsg_洞察')){
							target.popup('洞察');
							return ;
						};
						var damage=target.damage(4);
						damage.kzsg_exDamage=false;
						damage.nature='fire';
						if(target.storage.kzsg_燃烧==undefined) target.storage.kzsg_燃烧=0;
						target.storage.kzsg_燃烧+=3;
						target.markSkill('kzsg_燃烧');
						target.syncStorage('kzsg_燃烧');
					},
					ai:{
						order:20,
						result:{
							player:1,
						},
					},
				},
				'kzsg_保护步兵':{
					nobracket:true,
					mode:['kzsg'],
					kzsg_Chp:{
						'步兵':1,
					},
					kzsg_CmaxHp:{
						'步兵':1,
					},
				},
				'kzsg_保护弓手':{
					nobracket:true,
					mode:['kzsg'],
					kzsg_Chp:{
						'弓手':1,
					},
					kzsg_CmaxHp:{
						'弓手':1,
					},
				},
				'kzsg_战魂召唤':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						var targets=[];
						if(game.kzol_p_card.contains(player)){
							var target=game.kzol_p_card_md;
						}else{
							var target=game.kzol_e_card_md;
						};
						for(var i=0;i<target.length;i++){
							if(target[i].kzsg.type=='术'||target[i].kzsg.type=='宝物') continue;
							targets.push(target[i]);
						};
						return targets.length>0;
					},
					content:function(){
						var targets=[];
						if(game.kzol_p_card.contains(player)){
							var target=game.kzol_p_card_md;
						}else{
							var target=game.kzol_e_card_md;
						};
						for(var i=0;i<target.length;i++){
							if(target[i].kzsg.type=='术'||target[i].kzsg.type=='宝物') continue;
							targets.push(target[i]);
						};
						if(targets.length>0){
							var pl=targets.randomGet();
							pl.kzsg_revive(0);
							game.log(player,'召唤了',pl,'并赋予其新生');
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_残废敌军':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							return game.kzol_kzsg_getCard('e').length>0;
						}else{
							return game.kzol_kzsg_getCard('p').length>0;
						};
					},
					content:function(){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							player.line(game.kzol_kzsg_getCard('e'));
							for(var i=0;i<game.kzol_kzsg_getCard('e').length;i++){
								var target=game.kzol_kzsg_getCard('e')[i];
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									continue ;
								};
								target.kzsg_addAttack(-1);
							};
						}else{
							player.line(game.kzol_kzsg_getCard('p'));
							for(var i=0;i<game.kzol_kzsg_getCard('p').length;i++){
								var target=game.kzol_kzsg_getCard('p')[i];
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									continue ;
								};
								target.kzsg_addAttack(-1);
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_降士气1':{
					nobracket:true,
					mode:['kzsg'],
					CSQ:{
						false:1,
					},
				},
				'kzsg_降士气2':{
					nobracket:true,
					mode:['kzsg'],
					CSQ:{
						false:2,
					},
				},
				'kzsg_降士气3':{
					nobracket:true,
					mode:['kzsg'],
					CSQ:{
						false:3,
					},
				},
				'kzsg_全军突击':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							return game.kzol_kzsg_getCard('p').length>0;
						}else{
							return game.kzol_kzsg_getCard('e').length>0;
						};
					},
					content:function(){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							player.line(game.kzol_kzsg_getCard('p'));
							for(var i=0;i<game.kzol_kzsg_getCard('p').length;i++){
								game.kzol_kzsg_getCard('p')[i].kzsg_addAttack(1);
							};
						}else{
							player.line(game.kzol_kzsg_getCard('e'));
							for(var i=0;i<game.kzol_kzsg_getCard('e').length;i++){
								game.kzol_kzsg_getCard('e')[i].kzsg_addAttack(1);
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_群疗':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						var list1=[];
						if(game.kzol_kzsg_getCard('p').contains(player)){
							var list=game.kzol_kzsg_getCard('p');
						}else{
							var list=game.kzol_kzsg_getCard('e');
						};
						for(var j=0;j<list.length;j++){
							if(list[j].isOut()) continue;
							if(list[j].hp<list[j].maxHp) list1.push(list[j]);
						};
						return list1.length>0;
					},
					content:function(){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							player.line(game.kzol_kzsg_getCard('p'));
							for(var i=0;i<game.kzol_kzsg_getCard('p').length;i++){
								game.kzol_kzsg_getCard('p')[i].recover(1);
							};
						}else{
							player.line(game.kzol_kzsg_getCard('e'));
							for(var i=0;i<game.kzol_kzsg_getCard('e').length;i++){
								game.kzol_kzsg_getCard('e')[i].recover(1);
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_连锁枪1':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							return game.kzol_kzsg_getCard('e').length>0;
						}else{
							return game.kzol_kzsg_getCard('p').length>0;
						};
					},
					content:function(){
						var targets=[];
						if(game.kzol_kzsg_getCard('p').contains(player)){
							if(game.kzol_kzsg_getCard('e').length>0){
								var target=game.kzol_kzsg_getCard('e').randomGet();
								for(var i=0;i<game.kzol_kzsg_getCard('e').length;i++){
									if(get.translation(target.name)==get.translation(game.kzol_kzsg_getCard('e')[i].name)) targets.push(game.kzol_kzsg_getCard('e')[i]);
								};
								player.line(targets);
							};
						}else{
							if(game.kzol_kzsg_getCard('p').length>0){
								var target=game.kzol_kzsg_getCard('p').randomGet();
								for(var i=0;i<game.kzol_kzsg_getCard('p').length;i++){
									if(get.translation(target.name)==get.translation(game.kzol_kzsg_getCard('p')[i].name)) targets.push(game.kzol_kzsg_getCard('p')[i]);
								};
								player.line(targets);
							};
						};
						for(var i=0;i<targets.length;i++){
							var damage=targets[i].damage(1);
							damage.kzsg_exDamage=false;
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_连锁枪2':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							return game.kzol_kzsg_getCard('e').length>0;
						}else{
							return game.kzol_kzsg_getCard('p').length>0;
						};
					},
					content:function(){
						var targets=[];
						if(game.kzol_kzsg_getCard('p').contains(player)){
							if(game.kzol_kzsg_getCard('e').length>0){
								var target=game.kzol_kzsg_getCard('e').randomGet();
								for(var i=0;i<game.kzol_kzsg_getCard('e').length;i++){
									if(get.translation(target.name)==get.translation(game.kzol_kzsg_getCard('e')[i].name)) targets.push(game.kzol_kzsg_getCard('e')[i]);
								};
								player.line(targets);
							};
						}else{
							if(game.kzol_kzsg_getCard('p').length>0){
								var target=game.kzol_kzsg_getCard('p').randomGet();
								for(var i=0;i<game.kzol_kzsg_getCard('p').length;i++){
									if(get.translation(target.name)==get.translation(game.kzol_kzsg_getCard('p')[i].name)) targets.push(game.kzol_kzsg_getCard('p')[i]);
								};
								player.line(targets);
							};
						};
						for(var i=0;i<targets.length;i++){
							var damage=targets[i].damage(2);
							damage.kzsg_exDamage=false;
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_连锁枪3':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							return game.kzol_kzsg_getCard('e').length>0;
						}else{
							return game.kzol_kzsg_getCard('p').length>0;
						};
					},
					content:function(){
						var targets=[];
						if(game.kzol_kzsg_getCard('p').contains(player)){
							if(game.kzol_kzsg_getCard('e').length>0){
								var target=game.kzol_kzsg_getCard('e').randomGet();
								for(var i=0;i<game.kzol_kzsg_getCard('e').length;i++){
									if(get.translation(target.name)==get.translation(game.kzol_kzsg_getCard('e')[i].name)) targets.push(game.kzol_kzsg_getCard('e')[i]);
								};
								player.line(targets);
							};
						}else{
							if(game.kzol_kzsg_getCard('p').length>0){
								var target=game.kzol_kzsg_getCard('p').randomGet();
								for(var i=0;i<game.kzol_kzsg_getCard('p').length;i++){
									if(get.translation(target.name)==get.translation(game.kzol_kzsg_getCard('p')[i].name)) targets.push(game.kzol_kzsg_getCard('p')[i]);
								};
								player.line(targets);
							};
						};
						for(var i=0;i<targets.length;i++){
							var damage=targets[i].damage(3);
							damage.kzsg_exDamage=false;
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_军魂':{
					nobracket:true,
					mode:['kzsg'],
				},
				'kzsg_水镜术1':{
					nobracket:true,
					mode:['kzsg'],
				},
				'kzsg_旧水镜术1':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						player:'damageBegin'
					},
					forced:true,
					priority:-Infinity,
					filter:function(event,player){
						return event.kzsg_exDamage==false&&event.source!=undefined&&event.kzsg_from!='kzsg_旧水镜术'&&event.kzsg_from!='刃甲';
					},
					content:function(){
						player.line(trigger.source);
						trigger.num-=1;
						var damage=trigger.source.damage(1);
						damage.kzsg_exDamage=false;
						damage.kzsg_from='kzsg_旧水镜术';
					},
				},
				'kzsg_旧水镜术2':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						player:'damageBegin'
					},
					forced:true,
					priority:-Infinity,
					filter:function(event,player){
						return event.kzsg_exDamage==false&&event.source!=undefined&&event.kzsg_from!='kzsg_旧水镜术'&&event.kzsg_from!='刃甲';
					},
					content:function(){
						player.line(trigger.source);
						trigger.num-=2;
						var damage=trigger.source.damage(2);
						damage.kzsg_exDamage=false;
						damage.kzsg_from='kzsg_旧水镜术';
					},
				},
				'kzsg_旧水镜术3':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						player:'damageBegin'
					},
					forced:true,
					priority:-Infinity,
					filter:function(event,player){
						return event.kzsg_exDamage==false&&event.source!=undefined&&event.kzsg_from!='kzsg_旧水镜术'&&event.kzsg_from!='刃甲';
					},
					content:function(){
						player.line(trigger.source);
						trigger.num-=3;
						var damage=trigger.source.damage(3);
						damage.kzsg_exDamage=false;
						damage.kzsg_from='kzsg_旧水镜术';
					},
				},
				'_kzsg_飞行翼':{
					trigger:{
						global:'roundStart'
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return player.storage.kzsg_飞行翼!=undefined;
					},
					content:function(){
						player.storage.kzsg_飞行翼--;
						player.syncStorage('kzsg_飞行翼');
						if(player.storage.kzsg_飞行翼<=0){
							player.unmarkSkill('kzsg_飞行翼');
							delete player.storage.kzsg_飞行翼;
						};
					},
				},
				'_kzsg_飞行翼1':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						player:'damageBefore'
					},
					forced:true,
					priority:Infinity,
					filter:function(event,player){
						if(player.storage.kzsg_飞行翼==undefined) return false;
						if(event.source!=undefined&&event.source.storage.kzsg_飞行翼!=undefined) return false;
						if(event.source!=undefined&&event.source.hasSkill('kzsg_冷箭')) return false;
						if(event.kzsg_from=='刃甲') return false;
						if(event.nature!=undefined||(event.nature==undefined&&event.source!=undefined&&(event.source.kzsg.type=='弓手'||event.source.hasSkill('kzsg_飞行')))) return false;
						return true;
					},
					content:function(){
						trigger.untrigger();
						trigger.finish();
					},
				},
				'kzsg_飞行翼':{
					nobracket:true,
					mode:['kzsg'],
                    marktext:"翼",
                    intro:{
                        content:function (storage){
							return '飞行翼：'+(storage)+'个回合'
                        },
                    },
					enable:"phaseUse",
					round:1,
					trigger:{
						global:'phaseBefore'
					},
					filter:function(event,player){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							return game.kzol_kzsg_getCard('p').length>0;
						}else{
							return game.kzol_kzsg_getCard('e').length>0;
						};
					},
					content:function(){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							player.line(game.kzol_kzsg_getCard('p'));
							for(var i=0;i<game.kzol_kzsg_getCard('p').length;i++){
								var pl=game.kzol_kzsg_getCard('p')[i];
								if(pl.storage.kzsg_飞行翼==undefined) pl.storage.kzsg_飞行翼=0;
								pl.storage.kzsg_飞行翼++;
								pl.markSkill('kzsg_飞行翼');
								pl.syncStorage('kzsg_飞行翼');
								game.log(pl,'获得技能【飞行】');
							};
						}else{
							player.line(game.kzol_kzsg_getCard('e'));
							for(var i=0;i<game.kzol_kzsg_getCard('e').length;i++){
								var pl=game.kzol_kzsg_getCard('e')[i];
								if(pl.storage.kzsg_飞行翼==undefined) pl.storage.kzsg_飞行翼=0;
								pl.storage.kzsg_飞行翼++;
								pl.markSkill('kzsg_飞行翼');
								pl.syncStorage('kzsg_飞行翼');
								game.log(pl,'获得技能【飞行】');
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_驱空':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						var num=0;
						if(game.kzol_kzsg_getCard('p').contains(player)){
							for(var i=0;i<game.kzol_kzsg_getCard('e').length;i++){
								var pl=game.kzol_kzsg_getCard('e')[i];
								if(pl.hasSkill('kzsg_飞行')) num++;
								if(pl.storage.kzsg_飞行翼!=undefined) num++;
							};
						}else{
							for(var i=0;i<game.kzol_kzsg_getCard('p').length;i++){
								var pl=game.kzol_kzsg_getCard('p')[i];
								if(pl.hasSkill('kzsg_飞行')) num++;
								if(pl.storage.kzsg_飞行翼!=undefined) num++;
							};
						};
						return num>0;
					},
					content:function(){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							for(var i=0;i<game.kzol_kzsg_getCard('e').length;i++){
								var pl=game.kzol_kzsg_getCard('e')[i];
								if(pl.hasSkill('kzsg_飞行')){
									player.line(pl);
									if(pl.hasSkill('kzsg_水镜术1')){
										pl.popup('水镜术');
										pl.line(player);
										pl=player;
									};
									if(pl.hasSkill('kzsg_洞察')){
										pl.popup('洞察');
										continue ;
									};
									pl.removeSkill('kzsg_飞行');
									game.log(pl,'失去技能【飞行】');
								};
								if(pl.storage.kzsg_飞行翼!=undefined){
									player.line(pl);
									if(pl.hasSkill('kzsg_水镜术1')){
										pl.popup('水镜术');
										pl.line(player);
										pl=player;
									};
									if(pl.hasSkill('kzsg_洞察')){
										pl.popup('洞察');
										continue ;
									};
									pl.storage.kzsg_飞行翼=0;
									pl.syncStorage('kzsg_飞行翼');
									pl.unmarkSkill('kzsg_飞行翼');
									delete pl.storage.kzsg_飞行翼;
									game.log(pl,'失去飞行翼的加持');
								};
							};
						}else{
							for(var i=0;i<game.kzol_kzsg_getCard('p').length;i++){
								var pl=game.kzol_kzsg_getCard('p')[i];
								if(pl.hasSkill('kzsg_飞行')){
									player.line(pl);
									if(pl.hasSkill('kzsg_水镜术1')){
										pl.popup('水镜术');
										pl.line(player);
										pl=player;
									};
									if(pl.hasSkill('kzsg_洞察')){
										pl.popup('洞察');
										continue ;
									};
									pl.removeSkill('kzsg_飞行');
									game.log(pl,'失去技能【飞行】');
								};
								if(pl.storage.kzsg_飞行翼!=undefined){
									player.line(pl);
									if(pl.hasSkill('kzsg_水镜术1')){
										pl.popup('水镜术');
										pl.line(player);
										pl=player;
									};
									if(pl.hasSkill('kzsg_洞察')){
										pl.popup('洞察');
										continue ;
									};
									pl.storage.kzsg_飞行翼=0;
									pl.syncStorage('kzsg_飞行翼');
									pl.unmarkSkill('kzsg_飞行翼');
									delete pl.storage.kzsg_飞行翼;
									game.log(pl,'失去飞行翼的加持');
								};
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_瘟疫蔓延':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							return game.kzol_kzsg_getCard('e').length>0;
						}else{
							return game.kzol_kzsg_getCard('p').length>0;
						};
					},
					content:function(){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							player.line(game.kzol_kzsg_getCard('e'));
							for(var i=0;i<game.kzol_kzsg_getCard('e').length;i++){
								var target=game.kzol_kzsg_getCard('e')[i];
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									continue ;
								};
								if(target.storage.kzsg_瘟疫==undefined) target.storage.kzsg_瘟疫=[];
								if(!target.storage.kzsg_瘟疫.contains(player)){
									target.storage.kzsg_瘟疫.push(player);
									target.markSkill('kzsg_瘟疫');
									target.syncStorage('kzsg_瘟疫');
									target.kzsg_addAttack(-1);
									var num=1;
									if(num>target.maxHp) num=target.maxHp;
									if(num>0){
										target.loseMaxHp(num);
										if(target.maxHp==0) target.die().source=player;
									};
								};
							};
						}else{
							player.line(game.kzol_kzsg_getCard('p'));
							for(var i=0;i<game.kzol_kzsg_getCard('p').length;i++){
								var target=game.kzol_kzsg_getCard('p')[i];
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									continue ;
								};
								if(target.storage.kzsg_瘟疫==undefined) target.storage.kzsg_瘟疫=[];
								if(!target.storage.kzsg_瘟疫.contains(player)){
									target.storage.kzsg_瘟疫.push(player);
									target.markSkill('kzsg_瘟疫');
									target.syncStorage('kzsg_瘟疫');
									target.kzsg_addAttack(-1);
									var num=1;
									if(num>target.maxHp) num=target.maxHp;
									if(num>0){
										target.loseMaxHp(num);
										if(target.maxHp==0) target.die().source=player;
									};
								};
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_陷阱连阵':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							return game.kzol_kzsg_getCard('e').length>0;
						}else{
							return game.kzol_kzsg_getCard('p').length>0;
						};
					},
					content:function(){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							player.line(game.kzol_kzsg_getCard('e'));
							for(var i=0;i<game.kzol_kzsg_getCard('e').length;i++){
								var target=game.kzol_kzsg_getCard('e')[i];
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									continue ;
								};
								if(target.storage.kzsg_陷阱1==undefined) target.storage.kzsg_陷阱1=0;
								if(target.storage.kzsg_陷阱1<1) target.storage.kzsg_陷阱1++;
								target.markSkill('kzsg_陷阱1');
								target.syncStorage('kzsg_陷阱1');
								game.log(target,'被陷阱夹住了');
							};
						}else{
							player.line(game.kzol_kzsg_getCard('p'));
							for(var i=0;i<game.kzol_kzsg_getCard('p').length;i++){
								var target=game.kzol_kzsg_getCard('p')[i];
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									continue ;
								};
								if(target.storage.kzsg_陷阱1==undefined) target.storage.kzsg_陷阱1=0;
								if(target.storage.kzsg_陷阱1<1) target.storage.kzsg_陷阱1++;
								target.markSkill('kzsg_陷阱1');
								target.syncStorage('kzsg_陷阱1');
								game.log(target,'被陷阱夹住了');
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_万毒阵':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							return game.kzol_kzsg_getCard('e').length>0;
						}else{
							return game.kzol_kzsg_getCard('p').length>0;
						};
					},
					content:function(){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							player.line(game.kzol_kzsg_getCard('e'));
							for(var i=0;i<game.kzol_kzsg_getCard('e').length;i++){
								var target=game.kzol_kzsg_getCard('e')[i];
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									continue ;
								};
								if(target.storage.kzsg_毒刃1==undefined) target.storage.kzsg_毒刃1=0;
								target.storage.kzsg_毒刃1++;
								target.markSkill('kzsg_毒刃1');
								target.syncStorage('kzsg_毒刃1');
							};
						}else{
							player.line(game.kzol_kzsg_getCard('p'));
							for(var i=0;i<game.kzol_kzsg_getCard('p').length;i++){
								var target=game.kzol_kzsg_getCard('p')[i];
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									continue ;
								};
								if(target.storage.kzsg_毒刃1==undefined) target.storage.kzsg_毒刃1=0;
								target.storage.kzsg_毒刃1++;
								target.markSkill('kzsg_毒刃1');
								target.syncStorage('kzsg_毒刃1');
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_涅盘':{
					nobracket:true,
					mode:['kzsg'],
					kzsg_revive:0.5,
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_kzsg_getCard('p').contains(player)){
							return game.kzol_kzsg_getCard('e').length>0;
						}else{
							return game.kzol_kzsg_getCard('p').length>0;
						};
					},
					content:function(){
						player.loseHp(1);
						if(game.kzol_kzsg_getCard('p').contains(player)){
							player.line(game.kzol_kzsg_getCard('e'));
							for(var i=0;i<game.kzol_kzsg_getCard('e').length;i++){
								var target=game.kzol_kzsg_getCard('e')[i];
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									continue ;
								};
								var damage=target.damage(2);
								damage.kzsg_exDamage=false;
								damage.nature='fire';
							};
						}else{
							player.line(game.kzol_kzsg_getCard('p'));
							for(var i=0;i<game.kzol_kzsg_getCard('p').length;i++){
								var target=game.kzol_kzsg_getCard('p')[i];
								if(target.hasSkill('kzsg_水镜术1')){
									target.popup('水镜术');
									target.line(player);
									target=player;
								};
								if(target.hasSkill('kzsg_洞察')){
									target.popup('洞察');
									continue ;
								};
								var damage=target.damage(2);
								damage.kzsg_exDamage=false;
								damage.nature='fire';
							};
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_鸣鼓1':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					content:function(){
						player.kzsg_damageSQ(-1,false);
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_鸣鼓2':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					content:function(){
						player.kzsg_damageSQ(-2,false);
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_鸣鼓3':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					content:function(){
						player.kzsg_damageSQ(-3,false);
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_激励全军':{
					nobracket:true,
					mode:['kzsg'],
					kzsg_Catt:{
						'all':1,
					},
				},
				'kzsg_激励骑兵':{
					nobracket:true,
					mode:['kzsg'],
					kzsg_Catt:{
						'骑兵':1,
					},
				},
				'kzsg_激励弓手':{
					nobracket:true,
					mode:['kzsg'],
					kzsg_Catt:{
						'弓手':1,
					},
				},
				'kzsg_激励步兵':{
					nobracket:true,
					mode:['kzsg'],
					kzsg_Catt:{
						'步兵':1,
					},
				},
				'kzsg_火焰':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						source:'damageBegin',
						player:'damageBegin',
					},
					forced:true,
					filter:function(event,player){
						return event.card!=undefined&&event.card.name=='sha';
					},
					content:function(){
						var target=trigger.player;
						if(target==player&&trigger.source!=undefined) target=trigger.source;
						if(target.hasSkill('kzsg_洞察')){
							target.popup('洞察');
							return ;
						};
						if(target.storage.kzsg_燃烧==undefined) target.storage.kzsg_燃烧=0;
						target.storage.kzsg_燃烧+=1;
						target.markSkill('kzsg_燃烧');
						target.syncStorage('kzsg_燃烧');
					},
				},
				'kzsg_龙怒':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzol_p_card==undefined) return ;
						if(game.kzol_e_card==undefined) return ;
						var num=-1;
						if(game.kzol_p_card.contains(player)){
							num=player.kzsg_getSeat(player,'p');
							if(num!=-1) if(game.kzol_e_card[num]==undefined) return false;
						};
						if(game.kzol_e_card.contains(player)){
							num=player.kzsg_getSeat(player,'e');
							if(num!=-1) if(game.kzol_p_card[num]==undefined) return false;
						};
						return true;
					},
					content:function(){
						if(game.kzol_p_card.contains(player)){
							var target=game.kzol_e_card[player.kzsg_getSeat(player,'p')];
						}else{
							var target=game.kzol_p_card[player.kzsg_getSeat(player,'e')];
						};
						player.line(target);
						var damage=target.damage(1);
						damage.kzsg_exDamage=false;
						damage.nature='fire';
						if(target.storage.kzsg_燃烧==undefined) target.storage.kzsg_燃烧=0;
						target.storage.kzsg_燃烧+=3;
						target.markSkill('kzsg_燃烧');
						target.syncStorage('kzsg_燃烧');
						player.kzsg_damageSQ(2,true);
					},
					ai:{
						order:20,
						result:{
							player:1,
						},
					},
				},
				'kzsg_攻击1':{
					nobracket:true,
					mode:['kzsg'],
					kzsg_Catt_E:1,
				},
				'kzsg_攻击2':{
					nobracket:true,
					mode:['kzsg'],
					kzsg_Catt_E:2,
				},
				'kzsg_攻击3':{
					nobracket:true,
					mode:['kzsg'],
					kzsg_Catt_E:3,
				},
				'kzsg_攻击4':{
					nobracket:true,
					mode:['kzsg'],
					kzsg_Catt_E:4,
				},
				'kzsg_血量1':{
					nobracket:true,
					mode:['kzsg'],
					kzsg_CmaxHp_E:1,
					kzsg_Chp_E:1,
				},
				'kzsg_血量2':{
					nobracket:true,
					mode:['kzsg'],
					kzsg_CmaxHp_E:2,
					kzsg_Chp_E:2,
				},
				'kzsg_血量3':{
					nobracket:true,
					mode:['kzsg'],
					kzsg_CmaxHp_E:3,
					kzsg_Chp_E:3,
				},
				'kzsg_血量4':{
					nobracket:true,
					mode:['kzsg'],
					kzsg_CmaxHp_E:4,
					kzsg_Chp_E:4,
				},
				'kzsg_铁壁':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						player:'damageBegin4'
					},
					forced:true,
					priority:-Infinity,
					filter:function(event,player){
						return event.nature==undefined;
					},
					content:function(){
						trigger.num=1;
					},
				},
				'kzsg_死战1':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						player:'dieBefore'
					},
					forced:true,
					priority:Infinity,
					filter:function(event,player){
						var targets=[];
						var side;
						if(game.kzol_p_card.contains(player)){
							var target=game.kzol_e_card;
							side='p';
						}else{
							var target=game.kzol_p_card;
							side='e';
						};
						var num=player.kzsg_getSeat(player,side);
						if(target[num]!=undefined) targets.push(target[num]);
						if(target[num+1]!=undefined) targets.push(target[num+1]);
						if(target[num-1]!=undefined) targets.push(target[num-1]);
						return targets.length>0&&player.storage.kzsg_死战1==undefined;
					},
					content:function(){
						'step 0'
						player.storage.kzsg_死战1=true;
						var targets=[];
						var side;
						if(game.kzol_p_card.contains(player)){
							var target=game.kzol_e_card;
							side='p';
						}else{
							var target=game.kzol_p_card;
							side='e';
						};
						var num=player.kzsg_getSeat(player,side);
						if(target[num]!=undefined) targets.push(target[num]);
						if(target[num+1]!=undefined) targets.push(target[num+1]);
						if(target[num-1]!=undefined) targets.push(target[num-1]);
						player.line(targets);
						for(var i=0;i<targets.length;i++){
							var damage=targets[i].damage(1);
							damage.kzsg_exDamage=false;
						};
						'step 1'
						delete player.storage.kzsg_死战1;
					},
				},
				'kzsg_死战2':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						player:'dieBefore'
					},
					forced:true,
					priority:Infinity,
					filter:function(event,player){
						var targets=[];
						var side;
						if(game.kzol_p_card.contains(player)){
							var target=game.kzol_e_card;
							side='p';
						}else{
							var target=game.kzol_p_card;
							side='e';
						};
						var num=player.kzsg_getSeat(player,side);
						if(target[num]!=undefined) targets.push(target[num]);
						if(target[num+1]!=undefined) targets.push(target[num+1]);
						if(target[num-1]!=undefined) targets.push(target[num-1]);
						return targets.length>0&&player.storage.kzsg_死战2==undefined;
					},
					content:function(){
						'step 0'
						player.storage.kzsg_死战2=true;
						var targets=[];
						var side;
						if(game.kzol_p_card.contains(player)){
							var target=game.kzol_e_card;
							side='p';
						}else{
							var target=game.kzol_p_card;
							side='e';
						};
						var num=player.kzsg_getSeat(player,side);
						if(target[num]!=undefined) targets.push(target[num]);
						if(target[num+1]!=undefined) targets.push(target[num+1]);
						if(target[num-1]!=undefined) targets.push(target[num-1]);
						player.line(targets);
						for(var i=0;i<targets.length;i++){
							var damage=targets[i].damage(2);
							damage.kzsg_exDamage=false;
						};
						'step 1'
						delete player.storage.kzsg_死战2;
					},
				},
				'kzsg_死战3':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						player:'dieBefore'
					},
					forced:true,
					priority:Infinity,
					filter:function(event,player){
						var targets=[];
						var side;
						if(game.kzol_p_card.contains(player)){
							var target=game.kzol_e_card;
							side='p';
						}else{
							var target=game.kzol_p_card;
							side='e';
						};
						var num=player.kzsg_getSeat(player,side);
						if(target[num]!=undefined) targets.push(target[num]);
						if(target[num+1]!=undefined) targets.push(target[num+1]);
						if(target[num-1]!=undefined) targets.push(target[num-1]);
						return targets.length>0&&player.storage.kzsg_死战3==undefined;
					},
					content:function(){
						'step 0'
						player.storage.kzsg_死战3=true;
						var targets=[];
						var side;
						if(game.kzol_p_card.contains(player)){
							var target=game.kzol_e_card;
							side='p';
						}else{
							var target=game.kzol_p_card;
							side='e';
						};
						var num=player.kzsg_getSeat(player,side);
						if(target[num]!=undefined) targets.push(target[num]);
						if(target[num+1]!=undefined) targets.push(target[num+1]);
						if(target[num-1]!=undefined) targets.push(target[num-1]);
						player.line(targets);
						for(var i=0;i<targets.length;i++){
							var damage=targets[i].damage(3);
							damage.kzsg_exDamage=false;
						};
						'step 1'
						delete player.storage.kzsg_死战3;
					},
				},
				'kzsg_魅惑':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					usable:1,
					filter:function(event,player){
						if(game.kzsg_changePrepareRound==undefined) return false;
						if(game.kzol_p_card.contains(player)){
							return game.kzol_e_card_wait.length>0;
						}else{
							return game.kzol_p_card_wait.length>0;
						};
					},
					content:function(){
						var num=-4;
						if(game.kzol_p_card.contains(player)){
							var pl=game.kzol_e_card_wait.randomGet();
							if(pl.hasSkill('kzsg_水镜术1')){
								pl.popup('水镜术');
								pl=player;
							};
							if(pl.hasSkill('kzsg_洞察')){
								pl.popup('洞察');
								return ;
							};
							pl.popup('受魅惑'+(-num));
							game.log(player,'魅惑了',pl);
							game.kzsg_changePrepareRound(pl,num,'e');
						}else{
							var pl=game.kzol_p_card_wait.randomGet();
							if(pl.hasSkill('kzsg_水镜术1')){
								pl.popup('水镜术');
								pl=player;
							};
							if(pl.hasSkill('kzsg_洞察')){
								pl.popup('洞察');
								return ;
							};
							pl.popup('受魅惑'+(-num));
							game.log(player,'魅惑了',pl);
							game.kzsg_changePrepareRound(pl,num,'p');
						};
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_幻·势力':{
					nobracket:true,
					mode:['kzsg'],
				},
				'kzsg_幻·技能':{
					nobracket:true,
					mode:['kzsg'],
				},
				'kzsg_连击':{
					nobracket:true,
					mode:['kzsg'],
					trigger:{
						player:'phaseAfter',
					},
					forced:true,
					popup:false,
					kzol_cannotInit:true,
					content:function(){
						if(player.storage.exRound==undefined){
							player.logSkill('kzsg_连击');
							player.insertPhase();
							player.storage.exRound=true;
						}else{
							delete player.storage.exRound;
						};
					},
				},
				'kzsg_团结':{
					nobracket:true,
					mode:['kzsg'],
					kzol_cannotInit:true,
				},
				'kzsg_零距离':{
					nobracket:true,
					mode:['kzsg'],
					kzol_cannotInit:true,
				},
				'_kzsg_零距离':{
					mod:{
						targetInRange:function(card,player,target){
							if(((game.kzol_e_card.contains(player)&&game.kzol_p_card.contains(target))||
							(game.kzol_p_card.contains(player)&&game.kzol_e_card.contains(target)))&&
							target.hasSkill('kzsg_零距离')) return true;
						},
					},
				},
				'kzsg_摇钱树':{
					nobracket:true,
					mode:['kzsg'],
					kzol_cannotInit:true,
					trigger:{
						player:'damageAfter'
					},
					forced:true,
					priority:-Infinity,
					content:function(){
						var num=trigger.num*8;
						if(typeof num=='number'){
							if(_status.kzol_kzsg_gainCoin==undefined) _status.kzol_kzsg_gainCoin=0;
							_status.kzol_kzsg_gainCoin+=num;
							//game.kzol_changeCoin(num);
						};
					},
				},
				'kzsg_限时挑战':{
					nobracket:true,
					mode:['kzsg'],
					kzol_cannotInit:true,
					trigger:{
						global:'roundStart'
					},
					forced:true,
					popup:false,
					filter:function(event,player){
						return game.roundNumber>=8;
					},
					content:function(){
						if(_status.kzol_kzsg_gainCoin!=undefined){
							game.kzol_changeCoin(_status.kzol_kzsg_gainCoin);
							delete _status.kzol_kzsg_gainCoin;
						};
						game.kzol_winWar(true);
					},
				},
				'kzsg_永恒生命':{
					nobracket:true,
					mode:['kzsg'],
					kzol_cannotInit:true,
					enable:"phaseUse",
					round:1,
					filter:function(event,player){
						return player.kzsg.type!='召唤物';
					},
					content:function(){
						var pl=player.zhaohuan(player.name,function(player){
							player.maxHp=2;
							player.hp=2;
							player.update();
						});
						var pl=player.zhaohuan(player.name,true,function(player){
							player.maxHp=2;
							player.hp=2;
							player.update();
						});
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
				'kzsg_永恒生命_noBoss':{
					nobracket:true,
					mode:['kzsg'],
					enable:"phaseUse",
					round:1,
					filter:function(event,player){
						return player.kzsg.type!='召唤物'&&game.countPlayer(function(current){
							return current.kzsg.type=='召唤物'&&current.name==player.name;
						})<=0;
					},
					content:function(){
						var pl=player.zhaohuan(player.name,function(player){
							player.maxHp=2;
							player.hp=2;
							player.update();
						});
					},
					ai:{
						order:19,
						result:{
							player:1,
						},
					},
				},
			},
			translate:{
				'kzsg_永恒生命_noBoss':'永恒生命',
				'kzsg_永恒生命_noBoss_info':'每轮限一次，出牌阶段，若己方对战区域内没有与你同名的召唤物，你可以在己方对战区域头一侧召唤一个分身（分身体力上限为2，且不能够使用技能【永恒生命】）',
				'kzsg_永恒生命':'永恒生命',
				'kzsg_永恒生命_info':'每轮限一次，出牌阶段，你可以在己方对战区域的两边召唤一个分身（分身体力上限为2，且不能够使用技能【永恒生命】）',
				'kzsg_限时挑战':'限时挑战',
				'kzsg_限时挑战_info':'锁定技，每轮开始时，若轮次数大于或等于8，玩家胜利',
				'kzsg_摇钱树':'摇钱树',
				'kzsg_摇钱树_info':'锁定技，获胜结算时，玩家获得X五铢钱（X为本局受到伤害数X8）',
				'kzsg_零距离':'零距离',
				'kzsg_零距离_info':'锁定技，你在所有敌方卡牌的攻击范围内；你的对面位为敌方战斗区域第一张卡牌',
				'kzsg_团结':'团结',
				'kzsg_团结_info':'当拥有该技能的卡牌在军队时，该军队可以携带任意势力的卡牌',
				'kzsg_连击':'连击',
				'kzsg_连击_info':'锁定技，非额外回合结束时，你可以执行一个额外的回合',
				'kzsg_洞察':'洞察',
				'kzsg_洞察_info':'锁定技，你无视敌方所有特殊技能，例如：冰封、陷阱、瘟疫等',
				'kzsg_水镜术1':'水镜术',
				'kzsg_水镜术1_info':'锁定技，当你成为敌方炎流星，闪电或冰封等主动技能的目标时，你将该技能作用于你的效果反弹给施法者',
				'kzsg_幻·势力':'幻·势力',
				'kzsg_幻·势力_info':'编辑军队时，若卡牌在图鉴内拥有该技能且未在军队中，则你可以点击该卡牌势力框来改变其势力',
				'kzsg_幻·技能':'幻·技能',
				'kzsg_幻·技能_info':'编辑军队时，若卡牌在图鉴内拥有该技能，则你可以点击该卡牌技能框来改变其技能',
				'kzsg_魅惑':'魅惑',
				'kzsg_魅惑_info':'出牌阶段限一次，你可以增加一个准备区域中的随机敌人的4个准备回合',
				'kzsg_死战1':'死战1',
				'kzsg_死战1_info':'锁定技，死亡前，对对面和其相邻的敌人造成1点伤害（可无视【水镜术】和【洞察】）',
				'kzsg_死战2':'死战2',
				'kzsg_死战2_info':'锁定技，死亡前，对对面和其相邻的敌人造成2点伤害（可无视【水镜术】和【洞察】）',
				'kzsg_死战3':'死战3',
				'kzsg_死战3_info':'锁定技，死亡前，对对面和其相邻的敌人造成3点伤害（可无视【水镜术】和【洞察】）',
				'kzsg_铁壁':'铁壁',
				'kzsg_铁壁_info':'锁定技，受到无属性伤害时，只会受到1点伤害',
				'kzsg_forzen':'冰',
				'kzsg_燃烧':'燃烧',
				'kzsg_攻击1':'攻击1',
				'kzsg_攻击1_info':'提升1点攻击力',
				'kzsg_攻击2':'攻击2',
				'kzsg_攻击2_info':'提升2点攻击力',
				'kzsg_攻击3':'攻击3',
				'kzsg_攻击3_info':'提升3点攻击力',
				'kzsg_攻击4':'攻击4',
				'kzsg_攻击4_info':'提升4点攻击力',
				'kzsg_血量1':'血量1',
				'kzsg_血量1_info':'增加1点体力上限并恢复1点体力',
				'kzsg_血量2':'血量2',
				'kzsg_血量2_info':'增加2点体力上限并恢复2点体力',
				'kzsg_血量3':'血量3',
				'kzsg_血量3_info':'增加3点体力上限并恢复3点体力',
				'kzsg_血量4':'血量4',
				'kzsg_血量4_info':'增加4点体力上限并恢复4点体力',
				'kzsg_龙怒':'龙怒',
				'kzsg_龙怒_info':'出牌阶段限一次，你可以对对面的敌人造成1点火焰伤害并降低敌方2点士气，同时使其燃烧，每回合结束时流失1点体力（可无视【水镜术】和【洞察】））',
				'kzsg_火焰':'火焰',
				'kzsg_火焰_info':'锁定技，当【杀】造成伤害/受到【杀】造成的伤害时，令目标/伤害来源燃烧，每回合结束时流失1点体力',
				'kzsg_激励步兵':'激励步兵',
				'kzsg_激励步兵_info':'锁定技，出场前，所有步兵类型同伴提升1点攻击力；当有步兵类型同伴进入战斗区域时，提升其1点攻击力',
				'kzsg_激励弓手':'激励弓手',
				'kzsg_激励弓手_info':'锁定技，出场前，所有弓手类型同伴提升1点攻击力；当有弓手类型同伴进入战斗区域时，提升其1点攻击力',
				'kzsg_激励骑兵':'激励骑兵',
				'kzsg_激励骑兵_info':'锁定技，出场前，所有骑兵类型同伴提升1点攻击力；当有骑兵类型同伴进入战斗区域时，提升其1点攻击力',
				'kzsg_激励全军':'激励全军',
				'kzsg_激励全军_info':'锁定技，出场前，所有同伴提升1点攻击力；当有同伴进入战斗区域时，提升其1点攻击力',
				'kzsg_鸣鼓1':'鸣鼓1',
				'kzsg_鸣鼓1_info':'出牌阶段限一次，你可以提升己方1点士气',
				'kzsg_鸣鼓2':'鸣鼓2',
				'kzsg_鸣鼓2_info':'出牌阶段限一次，你可以提升己方2点士气',
				'kzsg_鸣鼓3':'鸣鼓3',
				'kzsg_鸣鼓3_info':'出牌阶段限一次，你可以提升己方3点士气',
				'kzsg_涅盘':'涅盘',
				'kzsg_涅盘_info':'出牌阶段限一次，你可以流失1点体力并对所有敌人造成2点火焰伤害；锁定技，死亡时有50%的几率重生并进入准备区域',
				'kzsg_万毒阵':'万毒阵',
				'kzsg_万毒阵_info':'出牌阶段限一次，你可以使战场中所有敌人中毒，使其在下一个回合结束时流失1点体力',
				'kzsg_陷阱连阵':'陷阱连阵',
				'kzsg_陷阱连阵_info':'出牌阶段限一次，你可以使对战场中所有敌人使用陷阱（每张卡牌最多同时被一个陷阱夹住）',
				'kzsg_瘟疫蔓延':'瘟疫蔓延',
				'kzsg_瘟疫蔓延_info':'出牌阶段限一次，你可以使战场中所有敌人，进入瘟疫状态，同一来源的瘟疫效果不可叠加',
				'kzsg_驱空':'驱空',
				'kzsg_驱空_info':'出牌阶段限一次，你可以使战场中所有敌人的飞行技能和飞行翼效果失效',
				'_kzsg_飞行翼1':'飞行',
				'_kzsg_飞行翼1_info':'锁定技，只有弓手、飞行类型敌人能对你造成无属性伤害',
				'kzsg_飞行翼':'飞行翼',
				'kzsg_飞行翼_info':'出牌阶段或任意卡牌的回合开始前，你可以使战场中所有同伴获得技能【飞行】，持续一轮（每轮开始时结算），每轮限一次',
				'kzsg_旧水镜术1':'水镜术1',
				'kzsg_旧水镜术1_info':'锁定技，当受到炎流星，闪电或冰封等技能（刃甲、水镜术及非卡战技能除外）攻击时，可反弹1点伤害给攻击者',
				'kzsg_旧水镜术2':'水镜术2',
				'kzsg_旧水镜术2_info':'锁定技，当受到炎流星，闪电或冰封等技能（刃甲、水镜术及非卡战技能除外）攻击时，可反弹2点伤害给攻击者',
				'kzsg_旧水镜术3':'水镜术3',
				'kzsg_旧水镜术3_info':'锁定技，当受到炎流星，闪电或冰封等技能（刃甲、水镜术及非卡战技能除外）攻击时，可反弹3点伤害给攻击者',
				'kzsg_军魂':'军魂',
				'kzsg_军魂_info':'锁定技，进入战场时，每一个在战场中的同伴使该卡牌提升1点攻击力',
				'kzsg_连锁枪1':'连锁枪1',
				'kzsg_连锁枪1_info':'出牌阶段限一次，你可以随机攻击一个敌人，与该敌人同名的敌人均受到1点伤害',
				'kzsg_连锁枪2':'连锁枪2',
				'kzsg_连锁枪2_info':'出牌阶段限一次，你可以随机攻击一个敌人，与该敌人同名的敌人均受到2点伤害',
				'kzsg_连锁枪3':'连锁枪3',
				'kzsg_连锁枪3_info':'出牌阶段限一次，你可以随机攻击一个敌人，与该敌人同名的敌人均受到3点伤害',
				'kzsg_群疗':'群疗',
				'kzsg_群疗_info':'出牌阶段限一次，你可以使所有同伴恢复1点体力',
				'kzsg_全军突击':'全军突击',
				'kzsg_全军突击_info':'出牌阶段限一次，你可以使战场中所有同伴提升1点攻击力',
				'kzsg_降士气1':'降士气1',
				'kzsg_降士气1_info':'锁定技，进入战场时，己方士气降低1点',
				'kzsg_降士气2':'降士气2',
				'kzsg_降士气2_info':'锁定技，进入战场时，己方士气降低2点',
				'kzsg_降士气3':'降士气3',
				'kzsg_降士气3_info':'锁定技，进入战场时，己方士气降低3点',
				'kzsg_残废敌军':'残废敌军',
				'kzsg_残废敌军_info':'出牌阶段限一次，你可以使战场中所有敌人降低1点攻击力',
				'kzsg_战魂召唤':'战魂召唤',
				'kzsg_战魂召唤_info':'出牌阶段限一次，你可以随机从墓地复活一张非术非宝物卡牌，接着该卡牌在2s后进入对战区域（以此法出场的卡牌不触发时机为“出场时”的技能）',
				'kzsg_保护步兵':'保护步兵',
				'kzsg_保护步兵_info':'锁定技，出场时，场上所有步兵类型的同伴均增加1点体力上限并恢复1点体力；当有步兵类型同伴进入战斗区域时，增加其1点体力上限并恢复其1点体力',
				'kzsg_保护弓手':'保护弓手',
				'kzsg_保护弓手_info':'锁定技，出场时，场上所有弓手类型的同伴均增加1点体力上限并恢复1点体力；当有弓手类型同伴进入战斗区域时，增加其1点体力上限并恢复其1点体力',
				'kzsg_火龙息1':'火龙息1',
				'kzsg_火龙息1_info':'出牌阶段限一次，你可以对对面的敌人造成1点火焰伤害并使其燃烧，每回合结束时流失1点体力',
				'kzsg_火龙息2':'火龙息2',
				'kzsg_火龙息2_info':'出牌阶段限一次，你可以对对面的敌人造成2点火焰伤害并使其燃烧，每回合结束时流失1点体力',
				'kzsg_火龙息3':'火龙息3',
				'kzsg_火龙息3_info':'出牌阶段限一次，你可以对对面的敌人造成3点火焰伤害并使其燃烧，每回合结束时流失1点体力',
				'kzsg_火龙息4':'火龙息4',
				'kzsg_火龙息4_info':'出牌阶段限一次，你可以对对面的敌人造成4点火焰伤害并使其燃烧，每回合结束时流失1点体力',
				'kzsg_炎流星1':'炎流星1',
				'kzsg_炎流星1_info':'出牌阶段限一次，你可以对所有敌人造成1点火焰伤害',
				'kzsg_炎流星2':'炎流星2',
				'kzsg_炎流星2_info':'出牌阶段限一次，你可以对所有敌人造成2点火焰伤害',
				'kzsg_炎流星3':'炎流星3',
				'kzsg_炎流星3_info':'出牌阶段限一次，你可以对所有敌人造成3点火焰伤害',
				'kzsg_联盟':'联盟',
				'kzsg_联盟_info':'锁定技，出场前，若己方战场中有同势力同伴，获得横扫或丹术2技能',
				'kzsg_狂暴':'狂暴',
				'kzsg_狂暴_info':'锁定技，受到【杀】造成伤害后，提升1点攻击力',
				'kzsg_自残1':'自残1',
				'kzsg_自残1_info':'锁定技，回合结束时，流失1点体力',
				'kzsg_自残2':'自残2',
				'kzsg_自残2_info':'锁定技，回合结束时，流失2点体力',
				'kzsg_自残3':'自残3',
				'kzsg_自残3_info':'锁定技，回合结束时，流失3点体力',
				'kzsg_削弱_zd':'群体削弱',
				'kzsg_削弱_zd_info':'出牌阶段限一次，你可以使战场中所有敌人降低1点攻击力',
				'kzsg_削弱':'削弱1',
				'kzsg_削弱_info':'锁定技，每次【杀】造成伤害后，使目标降低1点攻击力',
				'kzsg_削弱2':'削弱2',
				'kzsg_削弱2_info':'锁定技，每次【杀】造成伤害后，使目标降低2点攻击力',
				'kzsg_削弱3':'削弱3',
				'kzsg_削弱3_info':'锁定技，每次【杀】造成伤害后，使目标降低3点攻击力',
				'kzsg_横扫':'横扫',
				'kzsg_横扫_info':'锁定技，普通攻击会同时攻击对面和其相邻的敌人',
				'kzsg_丹术1':'丹术1',
				'kzsg_丹术1_info':'锁定技，回合结束时，恢复1点体力',
				'kzsg_丹术1':'丹术1',
				'kzsg_丹术1_info':'锁定技，回合结束时，恢复1点体力',
				'kzsg_丹术2':'丹术2',
				'kzsg_丹术2_info':'锁定技，回合结束时，恢复2点体力',
				'kzsg_丹术3':'丹术3',
				'kzsg_丹术3_info':'锁定技，回合结束时，恢复3点体力',
				'kzsg_召唤':'召唤',
				'kzsg_召唤_info':'出牌阶段限一次，你可以从墓地随机复活一张任意卡牌进入准备区域',
				'kzsg_重生':'重生',
				'kzsg_重生_info':'锁定技，死亡时有50%的几率于2s后重生并进入准备区域',
				'kzsg_诅咒':'诅咒',
				'kzsg_诅咒_info':'锁定技，任何攻击此卡或被此卡攻击的敌人会受到诅咒，使用的【杀】有50%几率失效',
				'kzsg_吸血':'吸血',
				'kzsg_吸血_info':'锁定技，每对敌人造成1点无属性伤害，自己恢复1点体力',
				'kzsg_嗜血术1':'嗜血术1',
				'kzsg_嗜血术1_info':'出牌阶段限一次，你可以吸取一个随机敌人1点体力，转移到自己身上',
				'kzsg_嗜血术2':'嗜血术2',
				'kzsg_嗜血术2_info':'出牌阶段限一次，你可以吸取一个随机敌人2点体力，转移到自己身上',
				'kzsg_嗜血术3':'嗜血术3',
				'kzsg_嗜血术3_info':'出牌阶段限一次，你可以吸取一个随机敌人3点体力，转移到自己身上',
				'kzsg_瘟疫':'瘟疫',
				'kzsg_瘟疫_info':'锁定技，对敌人造成无属性伤害时，会使其进入瘟疫状态，降低1点攻击力和1点体力上限，同一来源的瘟疫效果不可叠加',
				'kzsg_陷阱1':'陷阱',
				'kzsg_陷阱1_info':'出牌阶段限一次，你可以对一个随机敌人使用陷阱，并有75%的几率夹牢敌人，使其失去下回合行动能力（每张卡牌最多同时被一个陷阱夹住）',
				'kzsg_长枪击':'长枪击',
				'kzsg_长枪击_info':'锁定技，对骑兵类型的敌人造成双倍伤害',
				'kzsg_冰封1':'冰封1',
				'kzsg_冰封1_info':'出牌阶段限一次，你可以对一个随机敌人造成1点冰冻伤害，并有50%几率冰冻敌人，使其失去下回合行动能力',
				'kzsg_冰封2':'冰封2',
				'kzsg_冰封2_info':'出牌阶段限一次，你可以对一个随机敌人造成2点冰冻伤害，并有50%几率冰冻敌人，使其失去下回合行动能力',
				'kzsg_冰封3':'冰封3',
				'kzsg_冰封3_info':'出牌阶段限一次，你可以对一个随机敌人造成3点冰冻伤害，并有50%几率冰冻敌人，使其失去下回合行动能力',
				'kzsg_冰封4':'冰封4',
				'kzsg_冰封4_info':'出牌阶段限一次，你可以对一个随机敌人造成4点冰冻伤害，并有50%几率冰冻敌人，使其失去下回合行动能力',
				'kzsg_冷箭':'冷箭',
				'kzsg_冷箭_info':'锁定技，对步兵类型和飞行类型的敌人造成双倍伤害；你可以攻击飞行目标',
				'kzsg_刃甲1':'刃甲1',
				'kzsg_刃甲1_info':'锁定技，受到无属性且非【刃甲】伤害时，反击攻击者并造成1点伤害（可无视【飞行】）',
				'kzsg_刃甲2':'刃甲2',
				'kzsg_刃甲2_info':'锁定技，受到无属性且非【刃甲】伤害时，反击攻击者并造成2点伤害（可无视【飞行】）',
				'kzsg_刃甲3':'刃甲3',
				'kzsg_刃甲3_info':'锁定技，受到无属性且非【刃甲】伤害时，反击攻击者并造成3点伤害（可无视【飞行】）',
				'kzsg_奋击':'奋击',
				'kzsg_奋击_info':'锁定技，对敌人造成无属性伤害后，提升1点攻击力',
				'kzsg_冲阵1':'冲阵1',
				'kzsg_冲阵1_info':'出牌阶段限一次，你可以随机减少准备区域中一个同伴的1个准备回合',
				'kzsg_冲阵2':'冲阵2',
				'kzsg_冲阵2_info':'出牌阶段限一次，你可以随机减少准备区域中一个同伴的2个准备回合',
				'kzsg_冲阵3':'冲阵3',
				'kzsg_冲阵3_info':'出牌阶段限一次，你可以随机减少准备区域中一个同伴的3个准备回合',
				'kzsg_冲阵4':'冲阵4',
				'kzsg_冲阵4_info':'出牌阶段限一次，你可以随机减少准备区域中一个同伴的4个准备回合',
				'kzsg_偷袭1':'偷袭1',
				'kzsg_偷袭1_info':'锁定技，第一次攻击并命中敌人后造成额外1点伤害',
				'kzsg_偷袭2':'偷袭2',
				'kzsg_偷袭2_info':'锁定技，第一次攻击并命中敌人后造成额外2点伤害',
				'kzsg_偷袭3':'偷袭3',
				'kzsg_偷袭3_info':'锁定技，第一次攻击并命中敌人后造成额外3点伤害',
				'kzsg_蛊惑1':'蛊惑1',
				'kzsg_蛊惑1_info':'出牌阶段限一次，你可以增加一个准备区域中的随机敌人的1个准备回合',
				'kzsg_蛊惑2':'蛊惑2',
				'kzsg_蛊惑2_info':'出牌阶段限一次，你可以增加一个准备区域中的随机敌人的2个准备回合',
				'kzsg_蛊惑3':'蛊惑3',
				'kzsg_蛊惑3_info':'出牌阶段限一次，你可以增加一个准备区域中的随机敌人的3个准备回合',
				'kzsg_盾防1':'盾防1',
				'kzsg_盾防1_info':'锁定技，受到无属性伤害时，减少1点伤害',
				'kzsg_盾防2':'盾防2',
				'kzsg_盾防2_info':'锁定技，受到无属性伤害时，减少2点伤害',
				'kzsg_盾防3':'盾防3',
				'kzsg_盾防3_info':'锁定技，受到无属性伤害时，减少3点伤害',
				'kzsg_践踏':'践踏',
				'kzsg_践踏_info':'锁定技，对弓手类型或拥有技能【冷箭】的敌人造成双倍伤害',
				'kzsg_索命1':'索命1',
				'kzsg_索命1_info':'出牌阶段限一次，你可以对体力最低的敌人造成1点伤害',
				'kzsg_索命2':'索命2',
				'kzsg_索命2_info':'出牌阶段限一次，你可以对体力最低的敌人造成2点伤害',
				'kzsg_索命3':'索命3',
				'kzsg_索命3_info':'出牌阶段限一次，你可以对体力最低的敌人造成3点伤害',
				'kzsg_禁言':'禁言',
				'kzsg_禁言_info':'锁定技，敌方回合开始时，其全部主动技能失效，直至回合结束',
				'kzsg_威势1':'威势1',
				'kzsg_威势1_info':'出牌阶段限一次，降低敌军1点士气',
				'kzsg_威势2':'威势2',
				'kzsg_威势2_info':'出牌阶段限一次，降低敌军2点士气',
				'kzsg_威势3':'威势3',
				'kzsg_威势3_info':'出牌阶段限一次，降低敌军3点士气',
				'kzsg_飞行':'飞行',
				'kzsg_飞行_info':'锁定技，只有弓手、飞行类型敌人能对你造成无属性伤害',
				'kzsg_急救1':'急救1',
				'kzsg_急救1_info':'出牌阶段限一次，你可以令体力最低的受伤同伴恢复1点体力',
				'kzsg_急救2':'急救2',
				'kzsg_急救2_info':'出牌阶段限一次，你可以令体力最低的受伤同伴恢复2点体力',
				'kzsg_急救3':'急救3',
				'kzsg_急救3_info':'出牌阶段限一次，你可以令体力最低的受伤同伴恢复3点体力',
				'kzsg_闪电1':'闪电1',
				'kzsg_闪电1_info':'出牌阶段限一次，你可以对一个随机敌人造成1点闪电伤害',
				'kzsg_闪电2':'闪电2',
				'kzsg_闪电2_info':'出牌阶段限一次，你可以对一个随机敌人造成2点闪电伤害',
				'kzsg_闪电3':'闪电3',
				'kzsg_闪电3_info':'出牌阶段限一次，你可以对一个随机敌人造成3点闪电伤害',
				'kzsg_毒刃1':'毒刃1',
				'kzsg_毒刃1_info':'锁定技，对敌人造成无属性伤害时，会使其中毒，在下一个回合结束时流失1点体力',
				'kzsg_毒刃2':'毒刃2',
				'kzsg_毒刃2_info':'锁定技，对敌人造成无属性伤害时，会使其中毒，在下一个回合结束时流失2点体力',
				'kzsg_毒刃3':'毒刃3',
				'kzsg_毒刃3_info':'锁定技，对敌人造成无属性伤害时，会使其中毒，在下一个回合结束时流失3点体力',
				'kzsg_list1':'灰卡',
				'kzsg_list2':'白卡',
				'kzsg_list3':'绿卡',
				'kzsg_list4':'蓝卡',
				'kzsg_list5':'紫卡',
				'kzsg_list6':'橙卡',
				'kzsg_list7':'红卡',
			},
		},'卡战图鉴');
		for(var i in lib.characterPack['mode_extension_卡战图鉴']){
			var character=lib.characterPack['mode_extension_卡战图鉴'][i];
			if(character[4]!=undefined&&character[4][3]!=undefined){
				character[4].remove(character[4][3]);
			};
		};
	};
}