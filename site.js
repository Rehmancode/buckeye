(function(){
var r=document.documentElement,b=document.getElementById('tg');
function cur(){var t=r.getAttribute('data-theme');return t||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}
function lab(){if(b)b.setAttribute('aria-checked',cur()==='light'?'true':'false')}
if(b){b.addEventListener('click',function(){var n=cur()==='dark'?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem('bm-theme',n)}catch(e){}lab()});lab()}
var mb=document.getElementById('mb'),nv=document.getElementById('nv');
function set(o){nv.classList.toggle('open',o);mb.setAttribute('aria-expanded',o?'true':'false')}
var dd=document.querySelector('.dd'),ddb=dd&&dd.querySelector('.ddb');
function sdd(o){if(!dd)return;dd.classList.toggle('open',o);ddb.setAttribute('aria-expanded',o?'true':'false')}
function isM(){return matchMedia('(max-width:860px)').matches}
if(dd){ddb.addEventListener('click',function(){sdd(!dd.classList.contains('open'))});dd.querySelector('[data-dd]').addEventListener('click',function(e){if(isM()){e.preventDefault();sdd(!dd.classList.contains('open'))}});document.addEventListener('click',function(e){if(!dd.contains(e.target))sdd(false)})}
if(mb&&nv){mb.addEventListener('click',function(){set(!nv.classList.contains('open'))});nv.addEventListener('click',function(e){var a=e.target.closest('a');if(a&&!a.hasAttribute('data-dd')){set(false);sdd(false)}});document.addEventListener('keydown',function(e){if(e.key==='Escape'){set(false);sdd(false)}})}
var m=document.getElementById('mt');
if(m){m.innerHTML+=m.innerHTML.replace(/<span>/g,'<span aria-hidden="true">');var mp=document.getElementById('mp'),mq=document.querySelector('.mq');
if(mp&&mq)mp.addEventListener('click',function(){var p=mp.getAttribute('aria-pressed')!=='true';mp.setAttribute('aria-pressed',p?'true':'false');mq.classList.toggle('paused',p)})}
var f=document.getElementById('f');
if(f){var qs=new URLSearchParams(location.search).get('m'),sel=document.getElementById('m');if(qs&&sel){for(var i=0;i<sel.options.length;i++)if(sel.options[i].text===qs)sel.selectedIndex=i}
var V={
n:function(v){v=v.trim();if(!v)return 'Please enter your name.';return v.length>=2?'':'Your name needs at least 2 characters.'},
c:function(v){return v.trim()?'':'Please enter your company name.'},
e:function(v){v=v.trim();if(!v)return 'Please enter your email address.';return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)?'':'Please enter a valid email address, like name@company.com.'},
p:function(v){v=v.trim();if(!v)return '';var d=v.replace(/\D/g,'');return(/^[+()\d\s-]+$/.test(v)&&d.length>=7&&d.length<=15)?'':'Please enter a valid phone number: 7 to 15 digits, using only numbers, spaces, + and -.'},
r:function(v){v=v.trim();if(!v)return 'Please tell us what you need, such as the part, operations and quantity.';return v.length>=10?'':'Please add a little more detail (at least 10 characters).'}
};
var ids=['n','c','e','p','r'],st=document.getElementById('f-s');
function check(id){var el=document.getElementById(id),m=V[id](el.value),er=document.getElementById(id+'-e');er.textContent=m;el.setAttribute('aria-invalid',m?'true':'false');return m}
ids.forEach(function(id){var el=document.getElementById(id);el.addEventListener('blur',function(){if(el.value.trim()||el.getAttribute('aria-invalid')==='true'||id!=='p')check(id)});el.addEventListener('input',function(){if(el.getAttribute('aria-invalid')==='true')check(id)})});
f.addEventListener('submit',function(ev){ev.preventDefault();var first=null;ids.forEach(function(id){if(check(id)&&!first)first=document.getElementById(id)});
if(first){st.className='fs bad';st.textContent='Please correct the highlighted fields and try again.';first.focus();return}
var g=function(x){return document.getElementById(x).value.trim()};
var body='Name: '+g('n')+'\nCompany: '+g('c')+'\nEmail: '+g('e')+'\nPhone: '+g('p')+'\nIndustry: '+g('i')+'\nMachine: '+g('m')+'\nAnnual volume: '+g('q')+'\nTarget cycle time: '+g('t')+'\n\nRequirements:\n'+g('r');
st.className='fs ok';st.textContent='Thank you. Your email app is opening with your enquiry. If nothing opens, write to info@buckeyemachines.in.';
location.href='mailto:info@buckeyemachines.in?subject='+encodeURIComponent('RFQ: '+g('m')+' \u2013 '+g('c'))+'&body='+encodeURIComponent(body)})}
var cb=document.getElementById('cb'),cp=document.getElementById('cp'),cpx=document.getElementById('cpx');
if(cb&&cp){function cpset(o){cp.classList.toggle('open',o);cp.setAttribute('aria-hidden',o?'false':'true');cb.setAttribute('aria-expanded',o?'true':'false');if(o){setTimeout(function(){cpx.focus()},80)}else if(cp.contains(document.activeElement)){cb.focus()}}
cb.addEventListener('click',function(e){e.stopPropagation();cpset(!cp.classList.contains('open'))});
cpx.addEventListener('click',function(){cpset(false)});
document.addEventListener('click',function(e){if(cp.classList.contains('open')&&!cp.contains(e.target)&&!cb.contains(e.target))cpset(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&cp.classList.contains('open'))cpset(false)})}
})();
(function(){var y=new Date().getFullYear();[].forEach.call(document.querySelectorAll('.yr'),function(e){e.textContent=y})})();
