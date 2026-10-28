// Navigation: mobile menu, sticky header state, scroll progress, active section, back-to-top.
(function(){
  var root=document.documentElement;
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* mobile menu */
  var burger=document.getElementById('burger'),menu=document.getElementById('menu');
  burger.addEventListener('click',function(){var o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
  menu.addEventListener('click',function(e){if(e.target.tagName==='A'){menu.classList.remove('open');burger.setAttribute('aria-expanded','false')}});

  /* nav state, progress, active link, back-to-top */
  var nav=document.getElementById('nav'),bar=document.getElementById('progress'),top=document.getElementById('to-top');
  var links=document.querySelectorAll('.menu a'),ids=['about','skills','projects','experience','contact'];
  function onScroll(){var y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
    nav.classList.toggle('scrolled',y>10);bar.style.transform='scaleX('+(h>0?y/h:0)+')';top.classList.toggle('show',y>600);
    var cur=null;ids.forEach(function(id){var s=document.getElementById(id);if(s&&s.getBoundingClientRect().top<innerHeight*.35)cur=id});
    links.forEach(function(a){a.classList.toggle('active',a.dataset.s===cur)});}
  addEventListener('scroll',onScroll,{passive:true});onScroll();
})();
