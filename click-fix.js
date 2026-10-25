(function(){
  function handle(e){
    var el=e.target;
    while(el && el!==document && !el.classList.contains('song')) el=el.parentElement;
    if(!el || !el.classList.contains('song')) return;
    var cnEl=el.querySelector('.cn'), enEl=el.querySelector('.en'), meta=el.querySelector('.meta');
    if(!cnEl || !enEl || typeof window.openSong!=='function') return;
    var cn=cnEl.textContent.trim();
    var en=enEl.textContent.trim();
    var pg='—';
    if(meta){var m=meta.textContent.match(/p\.([^\s]+)/);if(m)pg=m[1];}
    e.preventDefault();
    e.stopImmediatePropagation();
    window.openSong(cn,en,pg);
  }
  document.addEventListener('click',handle,true);
  document.addEventListener('touchend',handle,true);
})();