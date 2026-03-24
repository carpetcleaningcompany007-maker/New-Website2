const toggle=document.querySelector('.mobile-toggle');
const menu=document.querySelector('.menu');
const drops=document.querySelectorAll('.drop');
const buttons=document.querySelectorAll('.dropbtn');
if(toggle&&menu){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false');});}
function closeDrops(except=null){drops.forEach(drop=>{if(drop!==except){drop.classList.remove('open');const btn=drop.querySelector('.dropbtn');if(btn)btn.setAttribute('aria-expanded','false');}})}
buttons.forEach(btn=>btn.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();const parent=btn.closest('.drop');const isOpen=parent.classList.contains('open');closeDrops(parent);parent.classList.toggle('open',!isOpen);btn.setAttribute('aria-expanded',!isOpen?'true':'false');}));
document.addEventListener('click',()=>closeDrops());
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDrops();});
const quoteForm=document.getElementById('quoteForm');
const formStatus=document.getElementById('formStatus');
if(quoteForm&&formStatus){quoteForm.addEventListener('submit',async e=>{e.preventDefault();formStatus.className='form-status';formStatus.textContent='';const endpoint=quoteForm.getAttribute('action');if(!endpoint||endpoint.includes('YOUR_FORMSPREE_ENDPOINT')){formStatus.className='form-status error';formStatus.textContent='Add your real Formspree endpoint in the form action first.';return;}const submitButton=quoteForm.querySelector('button[type="submit"]');const originalText=submitButton.textContent;submitButton.disabled=true;submitButton.textContent='Sending...';try{const response=await fetch(endpoint,{method:'POST',body:new FormData(quoteForm),headers:{'Accept':'application/json'}});if(response.ok){quoteForm.reset();formStatus.className='form-status success';formStatus.textContent='Thanks. Your enquiry has been sent.';}else{formStatus.className='form-status error';formStatus.textContent='Something went wrong sending your enquiry. Please call or WhatsApp instead.';}}catch(error){formStatus.className='form-status error';formStatus.textContent='Something went wrong sending your enquiry. Please call or WhatsApp instead.';}finally{submitButton.disabled=false;submitButton.textContent=originalText;}});}
