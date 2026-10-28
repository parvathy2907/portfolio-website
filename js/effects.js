// Pointer effects: card spotlight and cursor glow (skipped for touch screens and reduced motion).
(function(){
  var root=document.documentElement;
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* card spotlight + cursor glow */
  if(matchMedia('(pointer: fine)').matches&&!reduce){
    document.querySelectorAll('.card').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')})});
    var g=document.getElementById('cursor-glow');
    addEventListener('pointermove',function(e){g.classList.add('on');g.style.transform='translate('+e.clientX+'px,'+e.clientY+'px)'},{passive:true});
    document.addEventListener('pointerleave',function(){g.classList.remove('on')});
  }
})();
