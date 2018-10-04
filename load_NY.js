window.func=function(lib,game,ui,get,ai,_status){
  var str='<li>已加载内容：<ul><li>武将包：<br>';
  var num=0;
  for(var i in lib.program.character){
    num++;
    str+=lib.program.character[i];
    str+='、';
  };
  if(num>0){
    str=str.slice(0,str.length-1);
  }else{
    str+='无';
  };
  str+='</ul><ul><li>手牌包：<br>';
  num=0;
  for(var i in lib.program.card){
    num++;
    str+=lib.program.card[i];
    str+='、';
  };
  if(num>0){
    str=str.slice(0,str.length-1);
  }else{
    str+='无';
  };
  str+='</ul><ul><li>乱斗模式：<br>';
  num=0;
  for(var i in lib.program.submode){
    num++;
    str+=lib.program.submode[i];
    str+='、';
  };
  if(num>0){
    str=str.slice(0,str.length-1);
  }else{
    str+='无';
  };
  str+='</ul><ul><li>BOSS（挑战）：<br>';
  num=0;
  for(var i in lib.program.challenge){
    num++;
    str+=lib.program.challenge[i];
    str+='、';
  };
  if(num>0){
    str=str.slice(0,str.length-1);
  }else{
    str+='无';
  };
  str+='</ul><ul><li>主代码：<br>';
  num=0;
  for(var i in lib.program.content_function){
    num++;
    str+=lib.program.content_function[i];
    str+='、';
  };
  if(num>0){
    str=str.slice(0,str.length-1);
  }else{
    str+='无';
  };
  str+='</ul><ul><li>启动代码：<br>';
  num=0;
  for(var i in lib.program.precontent_function){
    num++;
    str+=lib.program.precontent_function[i];
    str+='、';
  };
  if(num>0){
    str=str.slice(0,str.length-1);
  }else{
    str+='无';
  };
  str+='</ul><ul>';
  lib.help.扩展ol=str;
}