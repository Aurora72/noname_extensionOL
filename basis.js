window.func=function(lib,game,ui,get,ai,_status){
	ui.create.characterDialog=function(){
		// if(lib.config.character_dialog_style=='newstyle'){
		//     for(var i=0;i<arguments.length;i++){
		//         if(arguments[i]=='thisiscard'){
		//             break;
		//         }
		//     }
		//     if(i==arguments.length){
		//         return ui.create.characterDialog2.apply(this,arguments);
		//     }
		// }
		var filter,str,noclick,thisiscard,seperate,expandall,onlypack,heightset,precharacter;
		for(var i=0;i<arguments.length;i++){
			if(arguments[i]==='thisiscard'){
				thisiscard=true;
			}
			else if(arguments[i]==='expandall'){
				expandall=true;
			}
			else if(arguments[i]==='heightset'){
				heightset=true;
			}
			else if(arguments[i]=='precharacter'){
				precharacter=true;
			}
			else if(typeof arguments[i]=='string'&&arguments[i].indexOf('onlypack:')==0){
				onlypack=arguments[i].slice(9);
			}
			else if(typeof arguments[i]=='object'&&typeof arguments[i].seperate=='function'){
				seperate=arguments[i].seperate;
			}
			else if(typeof arguments[i]==='string'){
				str=arguments[i];
			}
			else if(typeof arguments[i]==='function'){
				filter=arguments[i];
			}
			else if(typeof arguments[i]=='boolean'){
				noclick=arguments[i];
			}
		}
		var list=[];
		var dialog;
		var node=ui.create.div('.caption.pointerspan');
		if(get.is.phoneLayout()){
			node.style.fontSize='30px';
		}
		var namecapt=[];
		var getCapt=function(str){
			var capt;
			if(str.indexOf('_')==-1){
				capt=str[0];
			}
			else{
				capt=str[str.lastIndexOf('_')+1];
			}
			capt=capt.toLowerCase();
			if(!/[a-z]/i.test(capt)){
				capt='自定义';
			}
			return capt;
		}
		if(thisiscard){
			for(var i in lib.card){
				if(!lib.translate[i+'_info']) continue;
				if(filter&&filter(i)) continue;
				list.push(['',get.translation(lib.card[i].type),i]);
				if(namecapt.indexOf(getCapt(i))==-1){
					namecapt.push(getCapt(i));
				}
			}
		}
		else{
			for(var i in lib.character){
				if(lib.character[i][4].contains('minskin')) continue;
				if(lib.character[i][4].contains('boss')||lib.character[i][4].contains('hiddenboss')){
					if(lib.config.mode=='boss') continue;
					if(!lib.character[i][4].contains('bossallowed')) continue;
				}
				if(lib.character[i][4].contains('stonehidden')) continue;
				if(lib.character[i][4].contains('unseen')) continue;
				if(lib.config.banned.contains(i)) continue;
				if(lib.characterFilter[i]&&!lib.characterFilter[i](get.mode())) continue;
				if(filter&&filter(i)) continue;
				list.push(i);
				if(namecapt.indexOf(getCapt(i))==-1){
					namecapt.push(getCapt(i));
				}
			}
		}
		namecapt.sort(function(a,b){
			return a>b?1:-1;
		});
		if(!thisiscard){
			namecapt.remove('自定义');
			namecapt.push('newline');
			for(var i in lib.characterDialogGroup){
				namecapt.push(i);
			}
		}
		var newlined=false;
		var newlined2;
		var packsource;
		var clickCapt=function(e){
			if(_status.dragged) return;
			if(dialog.currentcapt2=='最近'&&dialog.currentcaptnode2!=this&&!dialog.currentcaptnode2.inited){
				dialog.currentcapt2=null;
				dialog.currentcaptnode2.classList.remove('thundertext');
				dialog.currentcaptnode2.inited=true;
				dialog.currentcaptnode2=null;
			}
			if(this.alphabet){
				if(this.classList.contains('thundertext')){
					dialog.currentcapt=null;
					dialog.currentcaptnode=null;
					this.classList.remove('thundertext');
					if(this.touchlink){
						this.touchlink.classList.remove('active');
					}
					for(var i=0;i<dialog.buttons.length;i++){
						if(dialog.currentgroup&&dialog.buttons[i].group!=dialog.currentgroup){
							dialog.buttons[i].classList.add('nodisplay');
						}
						else if(dialog.currentcapt2&&dialog.buttons[i].capt!=dialog.getCurrentCapt(dialog.buttons[i].link,dialog.buttons[i].capt,true)){
							dialog.buttons[i].classList.add('nodisplay');
						}
						else{
							dialog.buttons[i].classList.remove('nodisplay');
						}
					}
				}
				else{
					if(dialog.currentcaptnode){
						dialog.currentcaptnode.classList.remove('thundertext');
						if(dialog.currentcaptnode.touchlink){
							dialog.currentcaptnode.touchlink.classList.remove('active');
						}
					}
					dialog.currentcapt=this.link;
					dialog.currentcaptnode=this;
					this.classList.add('thundertext');
					if(this.touchlink){
				this.touchlink.classList.add('active');
					}
					for(var i=0;i<dialog.buttons.length;i++){
						if(dialog.buttons[i].capt!=dialog.getCurrentCapt(dialog.buttons[i].link,dialog.buttons[i].capt)){
							dialog.buttons[i].classList.add('nodisplay');
						}
						else if(dialog.currentcapt2&&dialog.buttons[i].capt!=dialog.getCurrentCapt(dialog.buttons[i].link,dialog.buttons[i].capt,true)){
							dialog.buttons[i].classList.add('nodisplay');
						}
						else if(dialog.currentgroup&&dialog.buttons[i].group!=dialog.currentgroup){
							dialog.buttons[i].classList.add('nodisplay');
						}
						else{
							dialog.buttons[i].classList.remove('nodisplay');
						}
					}
				}
			}
			else{
				if(newlined2){
					newlined2.style.display='none';
					if(!packsource.onlypack){
						packsource.classList.remove('thundertext');
						if(!get.is.phoneLayout()||!lib.config.filternode_button){
							packsource.innerHTML='武将包';
						}
					}
				}
				if(this.classList.contains('thundertext')){
					dialog.currentcapt2=null;
					dialog.currentcaptnode2=null;
					this.classList.remove('thundertext');
					if(this.touchlink){
						this.touchlink.classList.remove('active');
					}
					for(var i=0;i<dialog.buttons.length;i++){
						if(dialog.currentgroup&&dialog.buttons[i].group!=dialog.currentgroup){
							dialog.buttons[i].classList.add('nodisplay');
						}
						else if(dialog.currentcapt&&dialog.buttons[i].capt!=dialog.getCurrentCapt(dialog.buttons[i].link,dialog.buttons[i].capt)){
							dialog.buttons[i].classList.add('nodisplay');
						}
						else{
							dialog.buttons[i].classList.remove('nodisplay');
						}
					}
				}
				else{
					if(dialog.currentcaptnode2){
						dialog.currentcaptnode2.classList.remove('thundertext');
						if(dialog.currentcaptnode2.touchlink){
							dialog.currentcaptnode2.touchlink.classList.remove('active');
						}
					}
					dialog.currentcapt2=this.link;
					dialog.currentcaptnode2=this;
					this.classList.add('thundertext');
					if(this.touchlink){
						this.touchlink.classList.add('active');
					}
					else if(this.parentNode==newlined2){
						packsource.innerHTML=this.innerHTML;
						packsource.classList.add('thundertext');
					}
					for(var i=0;i<dialog.buttons.length;i++){
						if(dialog.currentcapt&&dialog.buttons[i].capt!=dialog.getCurrentCapt(dialog.buttons[i].link,dialog.buttons[i].capt)){
							dialog.buttons[i].classList.add('nodisplay');
						}
						else if(dialog.buttons[i].capt!=dialog.getCurrentCapt(dialog.buttons[i].link,dialog.buttons[i].capt,true)){
							dialog.buttons[i].classList.add('nodisplay');
						}
						else if(dialog.currentgroup&&dialog.buttons[i].group!=dialog.currentgroup){
							dialog.buttons[i].classList.add('nodisplay');
						}
						else{
							if(dialog.buttons[i].activate){
								dialog.buttons[i].activate();
							}
							dialog.buttons[i].classList.remove('nodisplay');
						}
					}
				}
			}
			if(dialog.seperate){
				for(var i=0;i<dialog.seperate.length;i++){
					if(!dialog.seperate[i].nextSibling.querySelector('.button:not(.nodisplay)')){
				dialog.seperate[i].style.display='none';
				dialog.seperate[i].nextSibling.style.display='none';
					}
					else{
				dialog.seperate[i].style.display='';
				dialog.seperate[i].nextSibling.style.display='';
					}
				}
			}
			if(filternode){
				if(filternode.querySelector('.active')){
					packsource.classList.add('thundertext');
				}
				else{
					packsource.classList.remove('thundertext');
				}
			}
			if(e) e.stopPropagation();
		};
		for(i=0;i<namecapt.length;i++){
			if(namecapt[i]=='newline'){
				newlined=document.createElement('div');
				newlined.style.marginTop='5px';
				newlined.style.display='block';
				// newlined.style.fontFamily='xinwei';
				if(get.is.phoneLayout()){
					newlined.style.fontSize='32px';
				}
				else{
					newlined.style.fontSize='22px';
				}
				newlined.style.textAlign='center';
				node.appendChild(newlined);
			}
			else if(newlined){
				var span=ui.create.div('.tdnode.pointerdiv.shadowed.reduce_radius');
				span.style.margin='3px';
				span.style.width='auto';
				span.innerHTML=' '+namecapt[i].toUpperCase()+' ';
				span.link=namecapt[i];
				span.addEventListener(lib.config.touchscreen?'touchend':'click',clickCapt);
				newlined.appendChild(span);
				node[namecapt[i]]=span;
				if(namecapt[i]=='收藏'){
					span._nature='fire';
				}
				else{
					span._nature='wood';
				}
			}
			else{
				var span=document.createElement('span');
				span.innerHTML=' '+namecapt[i].toUpperCase()+' ';
				span.link=namecapt[i];
				span.alphabet=true;
				span.addEventListener(lib.config.touchscreen?'touchend':'click',clickCapt);
				node.appendChild(span);
			}
		}
		if(!thisiscard){
			var groups=['wei','shu','wu','qun'];
			for(var i in lib.character){
				if(lib.character[i][1]=='shen'){
					groups.add('shen');break;
				}
			}
			for(var i in lib.character){
				if(lib.character[i][1]=='min'){
					groups.add('min');break;
				}
			}
			for(var i in lib.character){
				if(lib.character[i][1]=='zhi'){
					groups.add('zhi');break;
				}
			}
			for(var i in lib.character){
				if(lib.character[i][1]=='li'){
					groups.add('li');break;
				}
			}
			for(var i in lib.character){
				if(lib.character[i][1]=='shenghen'){
					groups.add('shenghen');break;
				}
			}
			for(var i in lib.character){
				if(lib.character[i][1]=='nyhzrlong'){
					groups.add('nyhzrlong');break;
				}
			}
			for(var i in lib.character){
				if(lib.character[i][1]=='WSS_jin'){
					groups.add('WSS_jin');break;
				}
			}
			for(var i in lib.character){
				if(lib.character[i][1]=='TLP'){
					groups.add('TLP');break;
				}
			}
			for(var i in lib.character){
				if(lib.character[i][1]=='gu'){
					groups.add('gu');break;
				}
			}
			for(var i in lib.character){
				if(lib.character[i][1]=='r'){
					groups.add('r');break;
				}
			}
			for(var i in lib.character){
				if(lib.character[i][1]=='sr'){
					groups.add('sr');break;
				}
			}
			for(var i in lib.character){
				if(lib.character[i][1]=='ssr'){
					groups.add('ssr');break;
				}
			}
			var natures=['water','soil','wood','metal','min','zhi','li','TLP','r','sr','ssr'];
			var span=document.createElement('span');
			newlined.appendChild(span);
			span.style.margin='8px';
			var clickGroup=function(){
				if(_status.dragged) return;
				if(dialog.currentcapt2=='最近'&&dialog.currentcaptnode2!=this&&!dialog.currentcaptnode2.inited){
					dialog.currentcapt2=null;
					dialog.currentcaptnode2.classList.remove('thundertext');
					dialog.currentcaptnode2.inited=true;
					dialog.currentcaptnode2=null;
				}
				var node=this,link=this.link;
				if(node.classList.contains('thundertext')){
					dialog.currentgroup=null;
					dialog.currentgroupnode=null;
					node.classList.remove('thundertext');
					for(var i=0;i<dialog.buttons.length;i++){
				if(dialog.currentcapt&&dialog.buttons[i].capt!=dialog.getCurrentCapt(dialog.buttons[i].link,dialog.buttons[i].capt)){
					dialog.buttons[i].classList.add('nodisplay');
				}
				else if(dialog.currentcapt2&&dialog.buttons[i].capt!=dialog.getCurrentCapt(dialog.buttons[i].link,dialog.buttons[i].capt,true)){
					dialog.buttons[i].classList.add('nodisplay');
				}
				else{
					dialog.buttons[i].classList.remove('nodisplay');
				}
					}
				}
				else{
					if(dialog.currentgroupnode){
				dialog.currentgroupnode.classList.remove('thundertext');
					}
					dialog.currentgroup=link;
					dialog.currentgroupnode=node;
					node.classList.add('thundertext');
					for(var i=0;i<dialog.buttons.length;i++){
				if(dialog.currentcapt&&dialog.buttons[i].capt!=dialog.getCurrentCapt(dialog.buttons[i].link,dialog.buttons[i].capt)){
					dialog.buttons[i].classList.add('nodisplay');
				}
				else if(dialog.currentcapt2&&dialog.buttons[i].capt!=dialog.getCurrentCapt(dialog.buttons[i].link,dialog.buttons[i].capt,true)){
					dialog.buttons[i].classList.add('nodisplay');
				}
				else if(dialog.buttons[i].group!=dialog.currentgroup){
					dialog.buttons[i].classList.add('nodisplay');
				}
				else{
					dialog.buttons[i].classList.remove('nodisplay');
				}
					}
				}
			};
			for(var i=0;i<groups.length;i++){
				var span=ui.create.div('.tdnode.pointerdiv.shadowed.reduce_radius.reduce_margin');
				span.style.margin='3px';
				newlined.appendChild(span);
				span.innerHTML=get.translation(groups[i]);
				span.link=groups[i];
				span._nature=natures[i];
				span.addEventListener(lib.config.touchscreen?'touchend':'click',clickGroup);
			}

			var span=document.createElement('span');
			newlined.appendChild(span);
			span.style.margin='8px';

			packsource=ui.create.div('.tdnode.pointerdiv.shadowed.reduce_radius.reduce_margin');
			packsource.style.margin='3px';
			newlined.appendChild(packsource);
			var filternode=null;
			var clickCaptNode=function(e){
				delete _status.filterCharacter;
				ui.window.classList.remove('shortcutpaused');
				filternode.delete();
				filternode.classList.remove('shown');
				clickCapt.call(this.link,e);
			};
			if(get.is.phoneLayout()&&lib.config.filternode_button){
				newlined.style.marginTop='';
				packsource.innerHTML='筛选';
				filternode=ui.create.div('.popup-container.filter-character.modenopause');
				ui.create.div(filternode);
				filternode.listen(function(e){
					if(this.classList.contains('removing')) return;
					delete _status.filterCharacter;
					ui.window.classList.remove('shortcutpaused');
					this.delete();
					this.classList.remove('shown');
					e.stopPropagation();
				});
				for(var i=0;i<node.childElementCount;i++){
					if(node.childNodes[i].tagName.toLowerCase()=='span'){
						node.childNodes[i].style.display='none';
						node.childNodes[i].touchlink=ui.create.div(filternode.firstChild,clickCaptNode,'.menubutton.large.capt',node.childNodes[i].innerHTML);
						node.childNodes[i].touchlink.link=node.childNodes[i];
					}
				}
				ui.create.node('br',filternode.firstChild);
			}
			else{
				if(onlypack){
					packsource.onlypack=true;
					packsource.innerHTML=get.translation(onlypack+'_character_config');
					packsource.style.display='none';
					packsource.previousSibling.style.display='none';
				}
				else{
					packsource.innerHTML='武将包';
				}
			}
			newlined2=document.createElement('div');
			newlined2.style.marginTop='5px';
			newlined2.style.display='none';
			newlined2.style.fontFamily='xinwei';
			newlined2.classList.add('pointernode');
			if(get.is.phoneLayout()){
				newlined2.style.fontSize='32px';
			}
			else{
				newlined2.style.fontSize='22px';
			}
			newlined2.style.textAlign='center';
			node.appendChild(newlined2);
			packsource.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
				if(packsource.onlypack) return;
				if(_status.dragged) return;
				if(get.is.phoneLayout()&&lib.config.filternode_button&&filternode){
					_status.filterCharacter=true;
					ui.window.classList.add('shortcutpaused');
					ui.window.appendChild(filternode);
					ui.refresh(filternode);
					filternode.classList.add('shown');
					var dh=filternode.offsetHeight-filternode.firstChild.offsetHeight;
					if(dh>0){
						filternode.firstChild.style.top=(dh/2)+'px';
					}
					else{
						filternode.firstChild.style.top='';
					}
				}
				else{
					if(newlined2.style.display=='none'){
						newlined2.style.display='block';
					}
					else{
						newlined2.style.display='none';
					}
				}
			});
			var packlist=[];
			for(var i=0;i<lib.config.all.characters.length;i++){
				if(!lib.config.characters.contains(lib.config.all.characters[i])) continue;
				packlist.push(lib.config.all.characters[i]);
			}
			for(var i in lib.characterPack){
				if(!lib.config.all.characters.contains(i)){
					packlist.push(i);
				}
			}
			for(var i=0;i<packlist.length;i++){
				var span=document.createElement('div');
				span.style.display='inline-block';
				span.style.width='auto';
				span.style.margin='5px';
				if(get.is.phoneLayout()){
					span.style.fontSize='32px';
				}
				else{
					span.style.fontSize='22px';
				}
				span.innerHTML=lib.translate[packlist[i]+'_character_config'];
				span.link=packlist[i];
				span.addEventListener(lib.config.touchscreen?'touchend':'click',clickCapt);
				newlined2.appendChild(span);
				if(filternode&&!onlypack){
					span.touchlink=ui.create.div(filternode.firstChild,clickCaptNode,'.menubutton.large',span.innerHTML);
					span.touchlink.link=span;
				}
			}
		}
		var groupSort;
		if(thisiscard){
			groupSort=function(name){
				var type=lib.card[name[2]].type;
				if(lib.cardType[type]){
					return lib.cardType[type];
				}
				switch(type){
					case 'basic':return 0;
					case 'chess':return 1.5;
					case 'trick':return 2;
					case 'delay':return 3;
					case 'equip':return 4;
					case 'zhenfa':return 5;
					default:return 6;
				}
			};
		}
		else{
			groupSort=function(name){
				if(lib.character[name][1]=='shen') return -1;
				if(lib.character[name][1]=='wei') return 0;
				if(lib.character[name][1]=='shu') return 1;
				if(lib.character[name][1]=='wu') return 2;
				if(lib.character[name][1]=='qun') return 3;
			}
		}
		list.sort(function(a,b){
			var del=groupSort(a)-groupSort(b);
			if(del!=0) return del;
			var aa=a,bb=b;
			if(a.indexOf('_')!=-1){
				a=a.slice(a.lastIndexOf('_')+1);
			}
			if(b.indexOf('_')!=-1){
				b=b.slice(b.lastIndexOf('_')+1);
			}
			if(a!=b){
				return a>b?1:-1;
			}
			return aa>bb?1:-1;
		});
		dialog=ui.create.dialog('hidden');
		dialog.classList.add('noupdate');
		dialog.classList.add('scroll1');
		dialog.classList.add('scroll2');
		dialog.classList.add('scroll3');
		dialog.addEventListener(lib.config.touchscreen?'touchend':'mouseup',function(){
			_status.clicked2=true;
		});
		if(heightset){
			dialog.style.height=(game.layout=='long2'?380:350)+'px';
			dialog._scrollset=true;
		}
		dialog.getCurrentCapt=function(link,capt,noalph){
			var currentcapt=noalph?this.currentcapt2:this.currentcapt;
			if(this.seperatelist&&noalph){
				if(this.seperatelist[currentcapt].contains(link)) return capt;
				return null;
			}
			if(lib.characterDialogGroup[currentcapt]){
				return lib.characterDialogGroup[currentcapt](link,capt);
			}
			if(lib.characterPack[currentcapt]){
				if(lib.characterPack[currentcapt][link]){
					return capt;
				}
				return null;
			}
			return this.currentcapt;
		}
		if(str){
			dialog.add(str);
		}
		dialog.add(node);
		if(thisiscard){
			if(seperate){
				seperate=seperate(list);
				dialog.seperate=[];
				dialog.seperatelist=seperate.list;
				if(dialog.seperatelist){
					newlined=document.createElement('div');
					newlined.style.marginTop='5px';
					newlined.style.display='block';
					newlined.style.fontFamily='xinwei';
					if(get.is.phoneLayout()){
						newlined.style.fontSize='32px';
					}
					else{
						newlined.style.fontSize='22px';
					}
					newlined.style.textAlign='center';
					node.appendChild(newlined);
					for(var i in dialog.seperatelist){
						var span=document.createElement('span');
						span.style.margin='3px';
						span.innerHTML=i;
						span.link=i;
						span.seperate=true;
						span.addEventListener(lib.config.touchscreen?'touchend':'click',clickCapt);
						newlined.appendChild(span);
					}
				}
				for(var i in seperate){
					if(i=='list') continue;
					var link='';
					var linkcontent=seperate[i];
					if(i.indexOf('_link:')!=-1){
				link=i.slice(i.indexOf('_link:')+6);
				i=i.slice(0,i.indexOf('_link:'));
					}
					var nodesep=dialog.add(i);
					nodesep.link=link;
					dialog.seperate.push(nodesep);
					dialog.add([linkcontent,'vcard'],noclick);
				}
			}
			else{
				dialog.add([list,'vcard'],noclick);
			}
		}
		else{
			if(precharacter){
				dialog.add([list,'precharacter'],noclick);
			}
			else{
				dialog.add([list,'character'],noclick);
			}
		}
		dialog.add(ui.create.div('.placeholder'));
		for(i=0;i<dialog.buttons.length;i++){
			if(thisiscard){
				dialog.buttons[i].capt=getCapt(dialog.buttons[i].link[2]);
			}
			else{
				dialog.buttons[i].group=lib.character[dialog.buttons[i].link][1];
				dialog.buttons[i].capt=getCapt(dialog.buttons[i].link);
			}
		}
		if(!expandall){
			if(!thisiscard&&(lib.characterDialogGroup[lib.config.character_dialog_tool]||
				lib.config.character_dialog_tool=='自创')){
				clickCapt.call(node[lib.config.character_dialog_tool]);
			}
		}
		return dialog;
	};
	get.groupnature=function(group,method){
		var nature;
		switch(group){
			case 'shen':nature='thunder';break;
			case 'wei':nature='water';break;
			case 'shu':nature='soil';break;
			case 'wu':nature='wood';break;
			case 'qun':nature='metal';break;
			case 'min':nature='min';break;
			case 'zhi':nature='zhi';break;
			case 'li':nature='li';break;
			case 'shenghen':nature='metal';break;
			case 'nyhzrlong':nature='li';break;
			case 'WSS_jin':nature='water';break;
			case 'TLP':nature='TLP';break;
			case 'gu':nature='li';break;
			case 'r':nature='r';break;
			case 'sr':nature='sr';break;
			case 'ssr':nature='ssr';break;
			default:return '';
		};
		if(method=='raw') return nature;
		return nature+'mm';
	};
	var style2=document.createElement('style');
	style2.innerHTML="div[data-nature='min'],";
	style2.innerHTML+="span[data-nature='min'] {text-shadow: black 0 0 1px,rgba(50, 240, 0,1) 0 0 2px,rgba(50, 240, 0,1) 0 0 5px,rgba(50, 240, 0,1) 0 0 10px,rgba(50, 240, 0,1) 0 0 10px}";
	style2.innerHTML+="div[data-nature='minm'],";
	style2.innerHTML+="span[data-nature='minm'] {text-shadow: black 0 0 1px,rgba(50, 240, 0,1) 0 0 2px,rgba(50, 240, 0,1) 0 0 5px,rgba(50, 240, 0,1) 0 0 5px,rgba(50, 240, 0,1) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='minmm'],";
	style2.innerHTML+="span[data-nature='minmm'] {text-shadow: black 0 0 1px,rgba(50, 240, 0,1) 0 0 2px,rgba(50, 240, 0,1) 0 0 2px,rgba(50, 240, 0,1) 0 0 2px,rgba(50, 240, 0,1) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='zhi'],";
	style2.innerHTML+="span[data-nature='zhi'] {text-shadow: black 0 0 1px,rgba(78, 117, 180,1) 0 0 2px,rgba(78, 117, 180,1) 0 0 5px,rgba(78, 117, 180,1) 0 0 10px,rgba(78, 117, 180,1) 0 0 10px}";
	style2.innerHTML+="div[data-nature='zhim'],";
	style2.innerHTML+="span[data-nature='zhim'] {text-shadow: black 0 0 1px,rgba(78, 117, 180,1) 0 0 2px,rgba(78, 117, 180,1) 0 0 5px,rgba(78, 117, 180,1) 0 0 5px,rgba(78, 117, 180,1) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='zhimm'],";
	style2.innerHTML+="span[data-nature='zhimm'] {text-shadow: black 0 0 1px,rgba(78, 117, 180,1) 0 0 2px,rgba(78, 117, 180,1) 0 0 2px,rgba(78, 117, 180,1) 0 0 2px,rgba(78, 117, 180,1) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='li'],";
	style2.innerHTML+="span[data-nature='li'] {text-shadow: black 0 0 1px,rgba(240, 50, 0,1) 0 0 2px,rgba(240, 50, 0,1) 0 0 5px,rgba(240, 50, 0,1) 0 0 10px,rgba(240, 50, 0,1) 0 0 10px}";
	style2.innerHTML+="div[data-nature='lim'],";
	style2.innerHTML+="span[data-nature='lim'] {text-shadow: black 0 0 1px,rgba(240, 50, 0,1) 0 0 2px,rgba(240, 50, 0,1) 0 0 5px,rgba(240, 50, 0,1) 0 0 5px,rgba(240, 50, 0,1) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='limm'],";
	style2.innerHTML+="span[data-nature='limm'] {text-shadow: black 0 0 1px,rgba(240, 50, 0,1) 0 0 2px,rgba(240, 50, 0,1) 0 0 2px,rgba(240, 50, 0,1) 0 0 2px,rgba(240, 50, 0,1) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='TLP'],";
	style2.innerHTML+="span[data-nature='TLP'] {text-shadow: black 0 0 1px,rgba(255, 200, 255,1) 0 0 2px,rgba(255, 200, 255,1) 0 0 5px,rgba(255, 200, 255,1) 0 0 10px,rgba(255, 200, 255,1) 0 0 10px}";
	style2.innerHTML+="div[data-nature='TLPm'],";
	style2.innerHTML+="span[data-nature='TLPm'] {text-shadow: black 0 0 1px,rgba(255, 200, 255,1) 0 0 2px,rgba(255, 200, 255,1) 0 0 5px,rgba(255, 200, 255,1) 0 0 5px,rgba(255, 200, 255,1) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='TLPmm'],";
	style2.innerHTML+="span[data-nature='TLPmm'] {text-shadow: black 0 0 1px,rgba(255, 200, 255,1) 0 0 2px,rgba(255, 200, 255,1) 0 0 2px,rgba(255, 200, 255,1) 0 0 2px,rgba(255, 200, 255,1) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='r'],";
	style2.innerHTML+="span[data-nature='r'] {text-shadow: black 0 0 1px,rgba(120, 255, 255,1) 0 0 2px,rgba(120, 255, 255,1) 0 0 5px,rgba(120, 255, 255,1) 0 0 10px,rgba(120, 255, 255,1) 0 0 10px}";
	style2.innerHTML+="div[data-nature='rm'],";
	style2.innerHTML+="span[data-nature='rm'] {text-shadow: black 0 0 1px,rgba(120, 255, 255,1) 0 0 2px,rgba(120, 255, 255,1) 0 0 5px,rgba(120, 255, 255,1) 0 0 5px,rgba(120, 255, 255,1) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='rmm'],";
	style2.innerHTML+="span[data-nature='rmm'] {text-shadow: black 0 0 1px,rgba(120, 255, 255,1) 0 0 2px,rgba(120, 255, 255,1) 0 0 2px,rgba(120, 255, 255,1) 0 0 2px,rgba(120, 255, 255,1) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='sr'],";
	style2.innerHTML+="span[data-nature='sr'] {text-shadow: black 0 0 1px,rgba(255, 30, 255,1) 0 0 2px,rgba(255, 30, 255,1) 0 0 5px,rgba(255, 30, 255,1) 0 0 10px,rgba(255, 30, 255,1) 0 0 10px}";
	style2.innerHTML+="div[data-nature='srm'],";
	style2.innerHTML+="span[data-nature='srm'] {text-shadow: black 0 0 1px,rgba(255, 30, 255,1) 0 0 2px,rgba(255, 30, 255,1) 0 0 5px,rgba(255, 30, 255,1) 0 0 5px,rgba(255, 30, 255,1) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='srmm'],";
	style2.innerHTML+="span[data-nature='srmm'] {text-shadow: black 0 0 1px,rgba(255, 30, 255,1) 0 0 2px,rgba(255, 30, 255,1) 0 0 2px,rgba(255, 30, 255,1) 0 0 2px,rgba(255, 30, 255,1) 0 0 2px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='ssr'],";
	style2.innerHTML+="span[data-nature='ssr'] {text-shadow: black 0 0 1px,rgba(255, 255, 100,1) 0 0 2px,rgba(255, 255, 100,1) 0 0 5px,rgba(255, 255, 100,1) 0 0 10px,rgba(255, 255, 100,1) 0 0 10px}";
	style2.innerHTML+="div[data-nature='ssrm'],";
	style2.innerHTML+="span[data-nature='ssrm'] {text-shadow: black 0 0 1px,rgba(255, 255, 100,1) 0 0 2px,rgba(255, 255, 100,1) 0 0 5px,rgba(255, 255, 100,1) 0 0 5px,rgba(255, 255, 100,1) 0 0 5px,black 0 0 1px;}";
	style2.innerHTML+="div[data-nature='ssrmm'],";
	style2.innerHTML+="span[data-nature='ssrmm'] {text-shadow: black 0 0 1px,rgba(255, 255, 100,1) 0 0 2px,rgba(255, 255, 100,1) 0 0 2px,rgba(255, 255, 100,1) 0 0 2px,rgba(255, 255, 100,1) 0 0 2px,black 0 0 1px;}";
	document.head.appendChild(style2);
	if(lib.config.layout=='default'||lib.config.layout=='mobile'||lib.config.layout=='long'){
		var style=document.createElement('style');
		style.innerHTML="#arena:not(.chess) .player[data-position='0']>.equips>.equip1{top: 16px;left: 3px}";
		style.innerHTML+="#arena:not(.chess) .player[data-position='0']>.equips>.equip2{top: 16px;left: 42px}";
		style.innerHTML+="#arena:not(.chess) .player[data-position='0']>.equips>.equip3{top: 68px;left: 3px}";
		style.innerHTML+="#arena:not(.chess) .player[data-position='0']>.equips>.equip4{top: 68px;left: 42px}";
		style.innerHTML+="#arena:not(.chess) .player[data-position='0']>.equips>.equip5{top: 42px;left: 22.5px}";
		style.innerHTML+="#arena:not(.chess) .player[data-position='0']>.equips>.equip6{top: 3px;left: 81px}";
		style.innerHTML+="#arena:not(.chess) .player[data-position='0']>.equips>.equip7{top: 42px;left: 81px}";
		style.innerHTML+="#arena:not(.chess) .player[data-position='0']>.equips>.equip8{top: 81px;left: 81px}";
		style.innerHTML+="#arena:not(.chess) .player[data-position='0']>.equips>div:not(.equip9){width: 36px;height: 36px;margin: 0;border-radius: 4px;position: absolute;}";
		document.head.appendChild(style);
	};
	var style1=document.createElement('style');
	style1.innerHTML="[data-number='9']>.player[data-position='1']{top:calc(200% / 3 - 145px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='9']>.player[data-position='2']{top:calc(100% / 3 - 120px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='9']>.player[data-position='3']{top:30px;left:calc(80% - 75px);}";
	style1.innerHTML+="[data-number='9']>.player[data-position='4']{top:5px;left:calc(60% - 75px);}";
	style1.innerHTML+="[data-number='9']>.player[data-position='5']{top:5px;left:calc(40% - 75px);}";
	style1.innerHTML+="[data-number='9']>.player[data-position='6']{top:30px;left:calc(20% - 75px);}";
	style1.innerHTML+="[data-number='9']>.player[data-position='7']{top:calc(100% / 3 - 120px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='9']>.player[data-position='8']{top:calc(200% / 3 - 145px);left:calc(5% - 75px);}";
	
	style1.innerHTML+="[data-number='10']>.player[data-position='1']{top:calc(200% / 3 - 145px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='10']>.player[data-position='2']{top:calc(100% / 3 - 120px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='10']>.player[data-position='3']{top:30px;left:calc(80% - 75px);}";
	style1.innerHTML+="[data-number='10']>.player[data-position='4']{top:5px;left:calc(65% - 75px);}";
	style1.innerHTML+="[data-number='10']>.player[data-position='5']{top:0;left:calc(50% - 75px);}";
	style1.innerHTML+="[data-number='10']>.player[data-position='6']{top:5px;left:calc(35% - 75px);}";
	style1.innerHTML+="[data-number='10']>.player[data-position='7']{top:30px;left:calc(20% - 75px);}";
	style1.innerHTML+="[data-number='10']>.player[data-position='8']{top:calc(100% / 3 - 120px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='10']>.player[data-position='9']{top:calc(200% / 3 - 145px);left:calc(5% - 75px);}";
	
	style1.innerHTML+="[data-number='11']>.player[data-position='1']{top:calc(200% / 3 - 100px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='11']>.player[data-position='2']{top:calc(100% / 3 - 50px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='11']>.player[data-position='3']{top:5px;left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='11']>.player[data-position='4']{top:0;left:calc(77% - 75px);}";
	style1.innerHTML+="[data-number='11']>.player[data-position='5']{top:0;left:calc(59% - 75px);}";
	style1.innerHTML+="[data-number='11']>.player[data-position='6']{top:0;left:calc(41% - 75px);}";
	style1.innerHTML+="[data-number='11']>.player[data-position='7']{top:0;left:calc(23% - 75px);}";
	style1.innerHTML+="[data-number='11']>.player[data-position='8']{top:5px;left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='11']>.player[data-position='9']{top:calc(100% / 3 - 50px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='11']>.player[data-position='10']{top:calc(200% / 3 - 100px);left:calc(5% - 75px);}";
	
	style1.innerHTML+="[data-number='12']>.player[data-position='1']{top:calc(200% / 3 - 75px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='12']>.player[data-position='2']{top:calc(100% / 3 - 25px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='12']>.player[data-position='3']{top:25;left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='12']>.player[data-position='4']{top:0;left:calc(80% - 75px);}";
	style1.innerHTML+="[data-number='12']>.player[data-position='5']{top:0;left:calc(65% - 75px);}";
	style1.innerHTML+="[data-number='12']>.player[data-position='6']{top:0;left:calc(50% - 75px);}";
	style1.innerHTML+="[data-number='12']>.player[data-position='7']{top:0;left:calc(35% - 75px);}";
	style1.innerHTML+="[data-number='12']>.player[data-position='8']{top:0;left:calc(20% - 75px);}";
	style1.innerHTML+="[data-number='12']>.player[data-position='9']{top:25;left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='12']>.player[data-position='10']{top:calc(100% / 3 - 25px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='12']>.player[data-position='11']{top:calc(200% / 3 - 75px);left:calc(5% - 75px);}";
	
	style1.innerHTML+="[data-number='13']>.player[data-position='1']{top:calc(200% / 3 - 75px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='13']>.player[data-position='2']{top:calc(100% / 3 - 25px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='13']>.player[data-position='3']{top:25;left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='13']>.player[data-position='4']{top:0;left:calc(83% - 75px);}";
	style1.innerHTML+="[data-number='13']>.player[data-position='5']{top:0;left:calc(69.8% - 75px);}";
	style1.innerHTML+="[data-number='13']>.player[data-position='6']{top:0;left:calc(56.6% - 75px);}";
	style1.innerHTML+="[data-number='13']>.player[data-position='7']{top:0;left:calc(43.4% - 75px);}";
	style1.innerHTML+="[data-number='13']>.player[data-position='8']{top:0;left:calc(30.2% - 75px);}";
	style1.innerHTML+="[data-number='13']>.player[data-position='9']{top:0;left:calc(17% - 75px);}";
	style1.innerHTML+="[data-number='13']>.player[data-position='10']{top:25;left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='13']>.player[data-position='11']{top:calc(100% / 3 - 25px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='13']>.player[data-position='12']{top:calc(200% / 3 - 75px);left:calc(5% - 75px);}";
	
	style1.innerHTML+="[data-number='14']>.player[data-position='1']{top:calc(100% / 3 + 160px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='14']>.player[data-position='2']{top:calc(100% / 3 + 30px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='14']>.player[data-position='3']{top:calc(100% / 3 - 100px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='14']>.player[data-position='4']{top:calc(100% / 3 - 230px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='14']>.player[data-position='5']{top:30px;left:calc(80% - 75px);}";
	style1.innerHTML+="[data-number='14']>.player[data-position='6']{top:5px;left:calc(65% - 75px);}";
	style1.innerHTML+="[data-number='14']>.player[data-position='7']{top:0;left:calc(50% - 75px);}";
	style1.innerHTML+="[data-number='14']>.player[data-position='8']{top:5px;left:calc(35% - 75px);}";
	style1.innerHTML+="[data-number='14']>.player[data-position='9']{top:30px;left:calc(20% - 75px);}";
	style1.innerHTML+="[data-number='14']>.player[data-position='10']{top:calc(100% / 3 - 230px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='14']>.player[data-position='11']{top:calc(100% / 3 - 100px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='14']>.player[data-position='12']{top:calc(100% / 3 + 30px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='14']>.player[data-position='13']{top:calc(100% / 3 + 160px);left:calc(5% - 75px);}";
	
	style1.innerHTML+="[data-number='15']>.player[data-position='1']{top:calc(100% / 3 + 160px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='15']>.player[data-position='2']{top:calc(100% / 3 + 30px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='15']>.player[data-position='3']{top:calc(100% / 3 - 100px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='15']>.player[data-position='4']{top:calc(100% / 3 - 230px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='15']>.player[data-position='5']{top:30px;left:calc(82.1% - 75px);}";
	style1.innerHTML+="[data-number='15']>.player[data-position='6']{top:5px;left:calc(69.25% - 75px);}";
	style1.innerHTML+="[data-number='15']>.player[data-position='7']{top:0;left:calc(56.4% - 75px);}";
	style1.innerHTML+="[data-number='15']>.player[data-position='8']{top:0;left:calc(43.55% - 75px);}";
	style1.innerHTML+="[data-number='15']>.player[data-position='9']{top:5px;left:calc(30.7% - 75px);}";
	style1.innerHTML+="[data-number='15']>.player[data-position='10']{top:30px;left:calc(17.85% - 75px);}";
	style1.innerHTML+="[data-number='15']>.player[data-position='11']{top:calc(100% / 3 - 230px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='15']>.player[data-position='12']{top:calc(100% / 3 - 100px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='15']>.player[data-position='13']{top:calc(100% / 3 + 30px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='15']>.player[data-position='14']{top:calc(100% / 3 + 160px);left:calc(5% - 75px);}";
	
	style1.innerHTML+="[data-number='16']>.player[data-position='1']{top:calc(100% / 3 + 160px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='16']>.player[data-position='2']{top:calc(100% / 3 + 30px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='16']>.player[data-position='3']{top:calc(100% / 3 - 100px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='16']>.player[data-position='4']{top:calc(100% / 3 - 230px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='16']>.player[data-position='5']{top:30px;left:calc(83.75% - 75px);}";
	style1.innerHTML+="[data-number='16']>.player[data-position='6']{top:20px;left:calc(72.5% - 75px);}";
	style1.innerHTML+="[data-number='16']>.player[data-position='7']{top:5px;left:calc(61.25% - 75px);}";
	style1.innerHTML+="[data-number='16']>.player[data-position='8']{top:0;left:calc(50% - 75px);}";
	style1.innerHTML+="[data-number='16']>.player[data-position='9']{top:5px;left:calc(38.75% - 75px);}";
	style1.innerHTML+="[data-number='16']>.player[data-position='10']{top:20px;left:calc(27.5% - 75px);}";
	style1.innerHTML+="[data-number='16']>.player[data-position='11']{top:30px;left:calc(16.25% - 75px);}";
	style1.innerHTML+="[data-number='16']>.player[data-position='12']{top:calc(100% / 3 - 230px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='16']>.player[data-position='13']{top:calc(100% / 3 - 100px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='16']>.player[data-position='14']{top:calc(100% / 3 + 30px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='16']>.player[data-position='15']{top:calc(100% / 3 + 160px);left:calc(5% - 75px);}";
	
	style1.innerHTML+="[data-number='17']>.player[data-position='1']{top:calc(100% / 3 + 160px);left:calc(50% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='2']{top:calc(100% / 3 + 160px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='3']{top:calc(100% / 3 + 30px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='4']{top:calc(100% / 3 - 100px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='5']{top:calc(100% / 3 - 230px);left:calc(95% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='6']{top:30px;left:calc(83.75% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='7']{top:20px;left:calc(72.5% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='8']{top:5px;left:calc(61.25% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='9']{top:0;left:calc(50% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='10']{top:5px;left:calc(38.75% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='11']{top:20px;left:calc(27.5% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='12']{top:30px;left:calc(16.25% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='13']{top:calc(100% / 3 - 230px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='14']{top:calc(100% / 3 - 100px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='15']{top:calc(100% / 3 + 30px);left:calc(5% - 75px);}";
	style1.innerHTML+="[data-number='17']>.player[data-position='16']{top:calc(100% / 3 + 160px);left:calc(5% - 75px);}";
	document.head.appendChild(style1);
	lib.translate.equip6='圣痕-上';
	lib.translate.equip7='圣痕-中';
	lib.translate.equip8='圣痕-下';
	lib.translate.unknown8='九号位';
	lib.translate.unknown9='十号位';
	lib.translate.unknown10='十一号位';
	lib.translate.unknown11='十二号位';
	lib.translate.unknown12='十三号位';
	lib.translate.unknown13='十四号位';
	lib.translate.unknown14='十五号位';
	lib.translate.unknown15='十六号位';
	lib.mode.identity.config.player_number.item={
		'2':'两人',
		'3':'三人',
		'4':'四人',
		'5':'五人',
		'6':'六人',
		'7':'七人',
		'8':'八人',
		'9':'九人',
		'10':'十人',
		'11':'十一人',
		'12':'十二人',
		'13':'十三人',
		'14':'十四人',
		'15':'十五人',
		'16':'十六人',
	}
	lib.mode.guozhan.config.player_number.item={
		'2':'两人',
		'3':'三人',
		'4':'四人',
		'5':'五人',
		'6':'六人',
		'7':'七人',
		'8':'八人',
		'9':'九人',
		'10':'十人',
		'11':'十一人',
		'12':'十二人',
		'13':'十三人',
		'14':'十四人',
		'15':'十五人',
		'16':'十六人',
	};
	var identity=['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_9r']=='2') identity=['zhu','zhong','zhong','nei','nei','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_9r']=='3') identity=['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_9r']=='4') identity=['zhu','zhong','zhong','zhong','fan','fan','fan','fan','fan'];
	if(lib.config.mode_config.identity.identity[7]==undefined) lib.config.mode_config.identity.identity.push(identity);
	identity=['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_10r']=='2') identity=['zhu','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_10r']=='3') identity=['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan'];
	if(lib.config.mode_config.identity.identity[8]==undefined) lib.config.mode_config.identity.identity.push(identity);
	identity=['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_11r']=='2') identity=['zhu','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_11r']=='3') identity=['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_11r']=='4') identity=['zhu','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan'];
	if(lib.config.mode_config.identity.identity[9]==undefined) lib.config.mode_config.identity.identity.push(identity);
	identity=['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_12r']=='2') identity=['zhu','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_12r']=='3') identity=['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan'];
	if(lib.config.mode_config.identity.identity[10]==undefined) lib.config.mode_config.identity.identity.push(identity);
	identity=['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_13r']=='2') identity=['zhu','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_13r']=='3') identity=['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_13r']=='4') identity=['zhu','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan'];
	if(lib.config.mode_config.identity.identity[11]==undefined) lib.config.mode_config.identity.identity.push(identity);
	identity=['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_14r']=='2') identity=['zhu','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_14r']=='3') identity=['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan'];
	if(lib.config.mode_config.identity.identity[12]==undefined) lib.config.mode_config.identity.identity.push(identity);
	identity=['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_15r']=='2') identity=['zhu','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_15r']=='3') identity=['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_15r']=='4') identity=['zhu','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan'];
	if(lib.config.mode_config.identity.identity[13]==undefined) lib.config.mode_config.identity.identity.push(identity);
	identity=['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','nei','fan','fan','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_16r']=='2') identity=['zhu','zhong','zhong','zhong','zhong','zhong','zhong','nei','fan','fan','fan','fan','fan','fan','fan','fan'];
	if(lib.config['extension_扩展ol_16r']=='3') identity=['zhu','zhong','zhong','zhong','zhong','zhong','zhong','zhong','fan','fan','fan','fan','fan','fan','fan','fan'];
	if(lib.config.mode_config.identity.identity[14]==undefined) lib.config.mode_config.identity.identity.push(identity);
	/*lib.skill._shenghen_image={
		trigger:{
			player:'gainBefore'
		},
		filter:function(event,player){
			for(var i=0;i<event.cards.length;i++){
				var card=event.cards[i];
				if(lib.card[card.name].shenghen_Image==true) return true;
			};
			return false;
		},
		forced:true,
		popup:false,
		content:function(){
			for(var i=0;i<trigger.cards.length;i++){
				var card=trigger.cards[i];
				if(lib.card[card.name].shenghen_Image==true){
					card.node.name.innerHTML='<img src="'+lib.assetURL+'extension/扩展ol/'+card.name+'_shenghen_Image.png" width="20" height="20">';
				};
			};
		},
	};*/
	lib.skill["_useCardLimit"]={
		mod:{
			targetEnabled:function(card,player,target){
				if(game.players.length+game.dead.length>10&&get.distance(player,target)>4) return false;
			},
		},
	};
	lib.skill["_minskinSJ"]={
		mode:['identity','guozhan'],
		trigger:{
			global:["gameStart","useCardBefore","phaseBefore","loseEnd","phaseBegin","phaseDradBegin","phaseUseBegin","phaseUseEnd","phaseEnd","phaseDiscardBegin","useSkillBefore","judgeAfter"],
			//player:'dieBefore',
		},
		filter:function (event,player){
			return game.players.length+game.dead.length>=12;
		},
		forced:true,
		content:function (){
			if(player!=game.me){
				player.classList.add('minskin');
				if(player.name2!=undefined){
					player.node.avatar2.hide();
					if(!player.isUnseen(1)&&player.storage.STAVA2!=0){
						player.storage.STAVA2=0;
						player.setNickname=function(){};
						var avatar2=ui.create.div(function(){if(player.name2) ui.click.charactercard(player.name2,'')});
						avatar2.style.height='40px';
						avatar2.style.width='40px';
						avatar2.style.borderRadius='40px';
						avatar2.style.boxShadow='rgba(0, 0, 0, 0.2) 0 0 0 1px';
						avatar2.style.left='-10px';
						avatar2.style.top='77px';
						avatar2.setBackground(player.name2,'character');
						player.node.nameol.appendChild(avatar2);
						player.avatar2_name=player.name2;
						setInterval(function(){
							if(player.avatar2_name!=player.name2){
								avatar2.setBackground(player.name2,'character');
								player.avatar2_name=player.name2;
							};
						},1000);
					};
				};
			}else{
				if(player.isMin()) player.classList.remove('minskin');
			};
		},
	};
	lib.skill["_ismin"]={};
	lib.skill["_minskinEquip1"]={
		mode:['identity','guozhan'],
		trigger:{
			player:"equipBefore",
		},
		filter:function (event,player){
			return game.players.length+game.dead.length>=12;
		},
		forced:true,
		content:function (){
			if(player&&player!=game.me) player.classList.remove('minskin');
		},
	};
	lib.skill["_minskinEquip2"]={
		mode:['identity','guozhan'],
		trigger:{
			player:"equipAfter",
		},
		filter:function (event,player){
			return game.players.length+game.dead.length>=12;
		},
		forced:true,
		content:function (){
			if(player&&player!=game.me) player.classList.add('minskin');
		},
	};
	lib.element.player.$equip=function(card){
		if(this.storage.lose_pos_equip!=undefined&&this.storage.lose_pos_equip.contains(get.subtype(card))){
			this.gain(card,'gain2');
			game.log(this,'装备失败');
		}else{
			game.broadcast(function(player,card){
				player.$equip(card);
			},this,card);
			card.fix();
			card.style.transform='';
			card.classList.remove('drawinghidden');
			delete card._transform;
			var player=this;
			var equipNum=get.equipNum(card);
			var equipped=false;
			for(var i=0;i<player.node.equips.childNodes.length;i++){
				if(get.equipNum(player.node.equips.childNodes[i])>=equipNum){
					player.node.equips.insertBefore(card,player.node.equips.childNodes[i]);
					equipped=true;
					break;
				}
			}
			if(!equipped){
				player.node.equips.appendChild(card);
				if(_status.discarded){
					_status.discarded.remove(card);
				}
			}
			var info=get.info(card);
			if(info.skills){
				for(var i=0;i<info.skills.length;i++){
					player.addSkillTrigger(info.skills[i]);
				}
			}
			return player;
		};
	};
	lib.extensionMenu.extension_扩展ol['16r_title']={
		"name":"<b><p align=center><span style=\"font-size:18px\">-----多人身份-----</span></b>",
		"clear":true,
		"nopointer":true,
	};
	lib.extensionMenu.extension_扩展ol['9r']={"name":'九人场身份',"init":'1',"item":{'1':'三忠四反一内','2':'二忠四反二内','3':'四忠四反零内','4':'三忠五反零内'}};
	lib.extensionMenu.extension_扩展ol['10r']={"name":'十人场身份',"init":'1',"item":{'1':'三忠四反二内','2':'三忠五反一内','3':'四忠五反零内'}};
	lib.extensionMenu.extension_扩展ol['11r']={"name":'十一人场身份',"init":'1',"item":{'1':'四忠五反一内','2':'三忠五反二内','3':'五忠五反零内','4':'四忠六反零内'}};
	lib.extensionMenu.extension_扩展ol['12r']={"name":'十二人场身份',"init":'1',"item":{'1':'四忠五反二内','2':'四忠六反一内','3':'五忠六反零内'}};
	lib.extensionMenu.extension_扩展ol['13r']={"name":'十三人场身份',"init":'1',"item":{'1':'五忠六反一内','2':'四忠六反二内','3':'六忠六反零内','4':'五忠七反零内'}};
	lib.extensionMenu.extension_扩展ol['14r']={"name":'十四人场身份',"init":'1',"item":{'1':'五忠六反二内','2':'五忠七反一内','3':'六忠七反零内'}};
	lib.extensionMenu.extension_扩展ol['15r']={"name":'十五人场身份',"init":'1',"item":{'1':'六忠七反一内','2':'五忠七反二内','3':'七忠七反零内','4':'六忠八反零内'}};
	lib.extensionMenu.extension_扩展ol['16r']={"name":'十六人场身份',"init":'1',"item":{'1':'六忠七反二内','2':'六忠八反一内','3':'七忠八反零内'}};
}