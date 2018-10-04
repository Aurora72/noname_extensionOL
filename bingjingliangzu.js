window.func=function(lib,game,ui,get,ai,_status){
if(lib.brawl) {
game.saveConfig('bingjingliangzuSZ',false);
lib.brawl.bingjingliangzu = {
            name:'兵精粮足',
            mode:'identity',
            intro:[
			'游戏开始时，所有人获得一点体力上限并恢复一点体力',
			'所有人摸牌阶段多摸一张牌，出牌阶段可以额外使用一张杀',
			],
            showcase:function(init){
              if(lib.config.bingjingliangzuSZ!=true){
                	var bjlz=ui.create.div();
                	bjlz.style.height='267px';
                	bjlz.style.width='500px';
                	bjlz.style.left='calc(50% - 250px)';
                	bjlz.style.top='0px';
                	bjlz.setBackgroundImage('extension/扩展ol/bjlz.png');
                	this.appendChild(bjlz);
                	game.saveConfig('bingjingliangzuSZ',true);
              };
            },
content:{
gameStart:function(){
for(var i=0;i<game.players.length;i++){
game.players[i].gainMaxHp();
game.players[i].recover();
};
}
},
init:function(){
game.saveConfig('identity_mode','normal','identity');
lib.skill._mopaishuzengjia={
trigger:{
player:"phaseDrawBegin",
},
forced:true,
content:function (){
trigger.num++;
},
};
lib.skill._chushashuzengjia={
mod:{
cardUsable:function (card,player,num){
if(card.name=='sha') return num+1;
},
},
};
},
};
};
}