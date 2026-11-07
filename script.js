const intro=document.getElementById('intro');
const experience=document.getElementById('experience');
const audio=document.getElementById('bgMusic');
const soundToggle=document.getElementById('soundToggle');
const dock=document.getElementById('musicDock');
const musicPlay=document.getElementById('musicPlay');
const toast=document.getElementById('toast');
let playing=false;
function notify(message){toast.textContent=message;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2600)}
async function startMusic(){
  try{await audio.play();playing=true;updateMusicUI();}
  catch(e){playing=false;updateMusicUI();notify('Add assets/love-someone.mp3 to enable the soundtrack ♡');}
}
function updateMusicUI(){
  musicPlay.textContent=playing?'Ⅱ':'▶';
  soundToggle.innerHTML=playing?'♫ <span>Music on</span>':'♫ <span>Music off</span>';
  dock.classList.toggle('paused',!playing);
}
function toggleMusic(){if(playing){audio.pause();playing=false;updateMusicUI();}else{startMusic();}}
document.getElementById('begin').addEventListener('click',()=>{
  intro.classList.add('hidden');experience.classList.remove('hidden');dock.classList.add('visible');
  window.scrollTo({top:0,behavior:'smooth'});startMusic();celebrate();
});
soundToggle.addEventListener('click',()=>{dock.classList.add('visible');toggleMusic();});
musicPlay.addEventListener('click',toggleMusic);
audio.addEventListener('ended',()=>{playing=false;updateMusicUI();});
document.getElementById('wishBtn').addEventListener('click',()=>{
  document.getElementById('wishReveal').classList.remove('hidden');celebrate();notify('A wish sent with all my love ♡');
});
function celebrate(){
 const chars=['♥','✧','♡','✦'];const colors=['#d7b477','#d88da3','#fff0e5'];
 for(let i=0;i<42;i++){const el=document.createElement('span');el.textContent=chars[Math.floor(Math.random()*chars.length)];
 el.style.cssText=`position:fixed;z-index:12;top:-30px;left:${Math.random()*100}vw;color:${colors[i%3]};font-size:${12+Math.random()*19}px;pointer-events:none;animation:rain ${2.5+Math.random()*2}s linear forwards;animation-delay:${Math.random()*.8}s`;
 document.body.appendChild(el);setTimeout(()=>el.remove(),5200);}
}
const style=document.createElement('style');style.textContent='@keyframes rain{to{transform:translateY(110vh) rotate(560deg);opacity:0}}';document.head.appendChild(style);
