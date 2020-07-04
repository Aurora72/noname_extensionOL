window.func=function(lib,game,ui,get,ai,_status){
//定义房间库
var room={
"1":{//起点
size:[2,2],
},
"2":{//传送
size:[4,4],
},
}
//洪水填充算法搭建迷宫地牢
game.createMGDL_data=function(x,y,rooms){
//创建指定大小的地牢并用编号为1的物品填充
var list=[];
for(var i=0;i<y;i++){
var list1=[];
for(var j=0;j<x;j++){
list1.push({item:"1",caved:false,pos:[i,j]});
};
list.push(list1);
};
//添加房间
//随机获取房间
var list2=[];
for(var i in room){
list2.push(room[i]);
};
var list3=[room["1"],room["2"]];
for(var i=0;i<rooms;i++){
list3.push(list2.randomGet());
};
//随机放置房间
//（选随机选点放置，若一个房间随机选点超过5次未能放置，则历遍放置）
var list3a=[];
var list4=[];
for(var i=0;i<list[0].length;i++){
list4.push(i);
};
var list5=[];
for(var i=0;i<list.length;i++){
list5.push(i);
};
for(var i=0;i<list3.length;i++){
var point=[list4.randomGet(),list5.randomGet()];
if(game.canLayRoom(point,list3[i].size,list)){
game.layRoom(point,list3[i],list);
}else{
var bool=false;
for(var j=0;j<5;j++){
var point=[list4.randomGet(),list5.randomGet()];
if(game.canLayRoom(point,list3[i].size,list)){
game.layRoom(point,list3[i],list);
bool=true;
};
};
if(bool==false){
var bool1=false;
for(var j=0;j<list.length;j++){
for(var k=0;k<list[j].length;k++){
var point=[list[i][j].pos[0],list[i][j].pos[1]];
if(game.canLayRoom(point,list3[i].size,list)){
game.layRoom(point,list3[i],list);
bool1=true;
};
};
};
if(bool1==false) list3a.push(list3[i]);
};
};
};
for(var i=0;i<list3a.length;i++){
list3.remove(list3a[i]);
};
console.log(list)
//洪水填充算法绘制道路
for(var i=0;i<list.length;i++){
for(var j=0;j<list[i].length;i++){
if(list[i][j].caved==false){
//var start=
};
};
};

};
//检测是否可以放下房间
game.canLayRoom=function(point,size,list){
var size1=[size[0]+4,size[1]+4];
var size2=[list[0].length,list.length];
if(point[0]+size1[0]>size2[0]) return false;
if(point[1]+size1[1]>size2[1]) return false;
var list1=game.getRoom(point,size1,list);
for(var i=0;i<list1.length;i++){
if(list1[i].caved==true) return false;
};
return true;
};
//获取选定房间
game.getRoom=function(point,size,list){
var list1=[];
for(var i=0;i<list.length;i++){
if(i>=point[1]&&i<=point[1]+size[1]){
for(var j=0;j<list[i].length;j++){
if(j>=point[0]&&j<=point[0]+size[0]) list1.push(list[i]);
};
};
};
return list1;
};
//放置房间
game.layRoom=function(point,room,list){
var size=[room.size[0]+2,room.size[1]+2];
var list1=game.getRoom(point,size,list);
for(var i=0;i<list1.length;i++){
list1[i].caved=true;
console.log(list1[i])
if(list1[i].pos[0]!=point[0]+1&&list1[i].pos[0]!=point[0]+size[0]-1&&list1[i].pos[1]!=point[1]+1&&list1[i].pos[1]!=point[1]+size[1]-1){
list1[i].item="0";
};
};
};
game.createMGDL_data(20,20,3)
}