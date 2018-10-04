window.func=function(lib,game,ui,get,ai,_status){
game.say1=function(str){
var dialog=ui.create.dialog('hidden');
dialog.classList.add('static');
dialog.add('<div class="text" style="word-break:break-all;display:inline">'+str+'</div>');
dialog.classList.add('popped');
ui.window.appendChild(dialog);
var width=dialog.content.firstChild.firstChild.offsetWidth;
if(width<500){
dialog._mod_height=-16;
}
else{
dialog.content.firstChild.style.textAlign='left';
}
dialog.style.width=(width+16)+'px';
lib.placePoppedDialog(dialog,{
clientX:(this.offsetLeft+this.offsetWidth/2)*game.documentZoom,
clientY:(this.offsetTop+this.offsetHeight/4)*game.documentZoom
});

if(dialog._mod_height){
dialog.content.firstChild.style.padding=0;
}
dialog.style.left='calc(50% - '+(width+16)/2+'px'+')';
dialog.style.top='calc(50% - 200px)';
setTimeout(function(){
dialog.delete();
},1500);
};
game.say2=function(str){
var dialog=ui.create.dialog('hidden');
dialog.classList.add('static');
dialog.add('<div class="text" style="word-break:break-all;display:inline">'+str+'</div>');
dialog.classList.add('popped');
ui.window.appendChild(dialog);
var width=dialog.content.firstChild.firstChild.offsetWidth;
if(width<500){
dialog._mod_height=-16;
}
else{
dialog.content.firstChild.style.textAlign='left';
}
dialog.style.width=(width+16)+'px';
lib.placePoppedDialog(dialog,{
clientX:(this.offsetLeft+this.offsetWidth/2)*game.documentZoom,
clientY:(this.offsetTop+this.offsetHeight/4)*game.documentZoom
});

if(dialog._mod_height){
dialog.content.firstChild.style.padding=0;
}
dialog.style.left='calc(50% - '+(width+16)/2+'px'+')';
dialog.style.top='calc(50% - 150px)';
setTimeout(function(){
dialog.delete();
},2000);
};
}