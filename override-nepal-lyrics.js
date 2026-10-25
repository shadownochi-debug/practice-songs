(function(){
'use strict';
var target = '第十七世法王噶瑪巴長久住世祈請文';
var lyrics = '第二佛陀鄔金海生尊¹　　三密門之佛業攝一舞\n諸佛之主蓮足願常固　　如海經劫常駐金剛界';
function fix(){
  var detail=document.querySelector('.detail');
  if(!detail) return;
  var cn=detail.querySelector('.cn');
  var title=detail.querySelector('h2');
  if(!cn && !title) return;
  var text=((cn&&cn.textContent)||'')+' '+((title&&title.textContent)||'');
  if(text.indexOf(target)<0 && text.indexOf('Long Life Supplication for HHK XVII')<0) return;
  var box=detail.querySelector('.lyrics');
  if(!box) return;
  box.innerHTML=lyrics.split('\n').map(function(line){return '<p>'+line.replace('¹','<sup>1</sup>')+'</p>';}).join('');
}
new MutationObserver(fix).observe(document.body,{childList:true,subtree:true});
fix();
})();
