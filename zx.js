window.func=function(lib,game,ui,get,ai,_status){
  			var list=[];
  			if(lib.config['extension_扩展ol_zx']!=true){
				list=[
					['club',7,'zx_月饼'],
					['club',9,'zx_月饼'],
					['club',3,'zx_月饼'],
				];
			};
            game.import('card',function(lib,game,ui,get,ai,_status){
                var zx={
                    name:'zx',
                    connect:true,
                    card:{
                        'zx_月饼':{
                            type:'basic',
                            enable:true,
                            fullskin:true,
                            image:'ext:扩展ol/zx_月饼.png',
                            filterTarget:true,
                            content:function(){
                                target.getBuff();
                            },
                            ai:{
                                order:4,
                                value:[8,3],
                                useful:[6,3],
                                result:{
                                    target:function(player,target){
                                        var eff=get.recoverEffect(target,player,target);
                                        if(eff<=0) return 0;
                                        var num=target.maxHp-target.hp;
                                        if(num<1) return 0;
                                        if(num==1) return 1;
                                        if(target.hp==1) return 2.5;
                                        return 2;
                                    },
                                },
                                tag:{
                                    recover:1
                                },
                            },
                        },
                    },
                    skill:{},
                    translate:{
                        'zx_月饼':'月饼',
                        'zx_月饼_info':'出牌阶段，对一名角色使用，其获得随机的正面效果',
                    },
                    list:list,
                };	
                return zx;
            });	
            lib.translate['zx_card_config']='杂项';
            lib.config.all.cards.push('zx');
            if(!lib.config.cards.contains('zx')){
                lib.config.cards.push('zx');
            };
}