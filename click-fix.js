(function(){
  function bind(){
    if(typeof window.openSong !== 'function') return;
    document.querySelectorAll('.song').forEach(function(btn){
      if(btn.dataset.clickFixed) return;
      var cnEl=btn.querySelector('.cn');
      var enEl=btn.querySelector('.en');
      var meta=btn.querySelector('.meta');
      if(!cnEl||!enEl) return;
      var cn=cnEl.textContent.trim();
      var en=enEl.textContent.trim();
      var pg='—';
      if(meta){var m=meta.textContent.match(/p\.([^\s]+)/); if(m) pg=m[1];}
      btn.dataset.clickFixed='1';
      btn.removeAttribute('onclick');
      btn.addEventListener('click',function(e){e.preventDefault();window.openSong(cn,en,pg);});
    });
  }
  bind();
  new MutationObserver(bind).observe(document.body,{childList:true,subtree:true});
})();