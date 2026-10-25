(function(){
'use strict';
var fixes = {
  '第十七世法王噶瑪巴長久住世祈請文': '第二佛陀鄔金海生尊¹　　三密門之佛業攝一舞\n諸佛之主蓮足願常固　　如海經劫常駐金剛界',
  '對勝義的三種確信': '敬禮譯師馬爾巴　　我於他鄉修行時\n於無生法得定解　　今生來生二執淨\n六道顯相成虛妄　　生死二者增益斷\n於平等性得定解　　苦樂二執得清淨\n感受體驗成虛妄　　取捨二者增益斷\n於無分別¹得定解　　輪涅二執皆清淨\n道地修習成虛妄　　希懼二者增益斷²'
};
function fix(){
  var detail=document.querySelector('.detail');
  if(!detail) return;
  var cn=detail.querySelector('.cn');
  var title=detail.querySelector('h2');
  if(!cn && !title) return;
  var text=((cn&&cn.textContent)||'')+' '+((title&&title.textContent)||'');
  var target=Object.keys(fixes).find(function(k){return text.indexOf(k)>=0;});
  if(!target) return;
  var box=detail.querySelector('.lyrics');
  if(!box) return;
  box.innerHTML=fixes[target].split('\\n').map(function(line){return '<p>'+line.replace('¹','<sup>1</sup>').replace('²','<sup>2</sup>')+'</p>';}).join('');
}
new MutationObserver(fix).observe(document.body,{childList:true,subtree:true});
fix();
})();
