(function(){
  /* 修正 Day 1 / Session 4：中文維那文文的完整曲目。依 2026 Nepal Umze Schedule 第 6 頁。 */
  try {
    if (typeof D !== 'undefined' && typeof common !== 'undefined') {
      D[2][3] = [
        common.ref,
        common.mah,
        common.seven,
        common.four,
        ['21 Praises to Arya Tara','聖救度佛母二十一種禮讚經',8],
        common.tara,
        common.white,
        common.tv,
        common.dechen,
        common.sky,
        common.all,
        common.joy,
        common.way,
        common.confidence,
        common.asp,
        common.rain,
        common.flute,
        common.melody,
        common.swift,
        common.hhk,
        common.dzog,
        common.alak,
        common.dilyak,
        common.mila,
        common.naga,
        common.nal,
        common.world
      ];
    }
  } catch(err) { console.error('Session 4 data patch failed', err); }

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

  /* 初始畫面已經 render 過，因此資料替換後重新渲染一次。 */
  if(typeof window.render==='function') window.render();
})();
