(function(){
var items=[].slice.call(document.querySelectorAll('.gx figure'));if(!items.length||!window.HTMLDialogElement)return;
var d=document.createElement('dialog');d.id='lb';d.setAttribute('aria-label','Image viewer');
d.innerHTML='<div class="lbh"><span class="lbc" aria-live="polite"></span><div class="lbb"><button type="button" class="lbz" aria-pressed="false">Zoom</button><button type="button" class="lbx">Close \u2715</button></div></div><div class="lbs"><img alt=""></div><button type="button" class="lbp" aria-label="Previous image">\u2039</button><button type="button" class="lbn" aria-label="Next image">\u203a</button><p class="lbt"></p>';
document.body.appendChild(d);if(items.length<2){d.querySelector('.lbp').hidden=true;d.querySelector('.lbn').hidden=true}
var box=d.querySelector('.lbs'),img=box.querySelector('img'),cnt=d.querySelector('.lbc'),cap=d.querySelector('.lbt'),zb=d.querySelector('.lbz'),cur=0,from=null;
function zoom(on){box.classList.toggle('z',on);zb.setAttribute('aria-pressed',on?'true':'false');if(on){box.scrollLeft=(box.scrollWidth-box.clientWidth)/2;box.scrollTop=(box.scrollHeight-box.clientHeight)/2}else{box.scrollLeft=0;box.scrollTop=0}}
function show(i){cur=(i+items.length)%items.length;var f=items[cur],im=f.querySelector('img');img.src=im.currentSrc||im.src;img.alt=im.alt;cap.textContent=f.querySelector('figcaption').textContent;cnt.textContent=items.length>1?(cur+1)+' / '+items.length:'';zoom(false)}
function open(i){from=items[i];show(i);d.showModal()}
items.forEach(function(f,i){f.addEventListener('click',function(){open(i)});f.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open(i)}})});
d.querySelector('.lbp').addEventListener('click',function(){show(cur-1)});
d.querySelector('.lbn').addEventListener('click',function(){show(cur+1)});
d.querySelector('.lbx').addEventListener('click',function(){d.close()});
zb.addEventListener('click',function(){zoom(!box.classList.contains('z'))});
img.addEventListener('click',function(){zoom(!box.classList.contains('z'))});
d.addEventListener('click',function(e){if(e.target===d)d.close()});
d.addEventListener('close',function(){if(from)from.focus()});
d.addEventListener('keydown',function(e){if(e.key==='ArrowLeft')show(cur-1);else if(e.key==='ArrowRight')show(cur+1)});
var x0=null;box.addEventListener('touchstart',function(e){x0=box.classList.contains('z')?null:e.changedTouches[0].clientX},{passive:true});
box.addEventListener('touchend',function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>50)show(cur+(dx<0?1:-1));x0=null},{passive:true});
})();
