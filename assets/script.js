const toggle=document.querySelector('.mobile-toggle');
const menu=document.querySelector('.menu');
if(toggle&&menu){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false');});}

document.querySelectorAll('.dropbtn').forEach(btn=>{btn.addEventListener('click',e=>{if(window.innerWidth>760)return;e.preventDefault();const parent=btn.closest('.drop');if(parent)parent.classList.toggle('open');});});

document.querySelectorAll('form.quoteForm, #quoteForm').forEach(form=>{
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    const status=form.parentElement.querySelector('.form-status')||form.nextElementSibling;
    if(status){status.className='form-status';status.textContent='';}
    const endpoint=form.getAttribute('action');
    if(!endpoint||endpoint.includes('YOUR_FORMSPREE_ENDPOINT')){if(status){status.className='form-status error';status.textContent='Add your real Formspree endpoint in the form action first.';}return;}
    const submitButton=form.querySelector('button[type="submit"]');
    const originalText=submitButton?submitButton.textContent:'';
    if(submitButton){submitButton.disabled=true;submitButton.textContent='Sending...';}
    try{const response=await fetch(endpoint,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}});
      if(response.ok){form.reset();if(status){status.className='form-status success';status.textContent='Thanks. Your enquiry has been sent.';}}
      else{if(status){status.className='form-status error';status.textContent='Something went wrong sending your enquiry. Please call or WhatsApp instead.';}}
    }catch(error){if(status){status.className='form-status error';status.textContent='Something went wrong sending your enquiry. Please call or WhatsApp instead.';}}
    finally{if(submitButton){submitButton.disabled=false;submitButton.textContent=originalText;}}
  });
});
