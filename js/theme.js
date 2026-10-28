// Light / dark theme toggle. Follows the system setting until the visitor picks one.
(function(){
  var root=document.documentElement;
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* theme */
  var tbtn=document.getElementById('theme');
  function isDark(){var t=root.getAttribute('data-theme');return t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches}
  function sync(){var d=isDark();root.classList.toggle('is-dark',d);tbtn.setAttribute('aria-label',d?'Switch to light mode':'Switch to dark mode')}
  try{var s=localStorage.getItem('pk-theme');if(s==='dark'||s==='light')root.setAttribute('data-theme',s)}catch(e){}
  sync();
  tbtn.addEventListener('click',function(){var n=isDark()?'light':'dark';root.setAttribute('data-theme',n);try{localStorage.setItem('pk-theme',n)}catch(e){}sync()});
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change',sync);
  new MutationObserver(sync).observe(root,{attributes:true,attributeFilter:['data-theme']});
})();
