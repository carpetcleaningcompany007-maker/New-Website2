const t=document.querySelector('.mobile-toggle'),m=document.querySelector('.menu');if(t&&m){t.onclick=()=>{const o=m.classList.toggle('open');t.setAttribute('aria-expanded',o?'true':'false')}}

document.querySelectorAll('form[data-mailto-form]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data=new FormData(form);
    const name=(data.get('name')||'').toString().trim();
    const phone=(data.get('phone')||'').toString().trim();
    const email=(data.get('email')||'').toString().trim();
    const service=(data.get('service')||form.getAttribute('data-service')||'Quote enquiry').toString().trim();
    const area=(data.get('area')||form.getAttribute('data-area')||'').toString().trim();
    const details=(data.get('details')||'').toString().trim();
    const statusId=form.getAttribute('data-status');
    const status=statusId?document.getElementById(statusId):null;
    if(!name || !phone || !details){
      if(status) status.textContent='Please fill in your name, phone number and details.';
      return;
    }
    const subject = `${service}${area ? ' - ' + area : ''} enquiry`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || 'Not given'}`,
      `Service: ${service}`,
      area ? `Area: ${area}` : '',
      '',
      'Details:',
      details
    ].filter(Boolean).join('\n');
    const mailto = `mailto:infojwcarpetcare@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if(status) status.textContent='Opening your email app now.';
    window.location.href = mailto;
  });
});
