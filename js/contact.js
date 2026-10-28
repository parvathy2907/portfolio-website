// Contact: the Send an Email button opens the mail app and also copies the address.
(function(){
  /* send email: opens the mail app; the address is also copied in case no mail app is set up */
  var se=document.getElementById('send-email'),msg=document.getElementById('copied'),em=document.getElementById('email');
  se.addEventListener('click',function(){var t=em.textContent;
    try{navigator.clipboard.writeText(t).then(function(){msg.textContent='Address copied: '+t},function(){msg.textContent='Email: '+t})}catch(e){msg.textContent='Email: '+t}});
})();
