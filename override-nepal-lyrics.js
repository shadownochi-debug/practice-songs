(function(){
'use strict';
var fixes={
 '第十七世法王噶瑪巴長久住世祈請文':'第二佛陀鄔金海生尊¹　　三密門之佛業攝一舞\n諸佛之主蓮足願常固　　如海經劫常駐金剛界',
 '對勝義的三種確信':'敬禮譯師馬爾巴　　我於他鄉修行時\n於無生法得定解　　今生來生二執淨\n六道顯相成虛妄　　生死二者增益斷\n於平等性得定解　　苦樂二執得清淨\n感受體驗成虛妄　　取捨二者增益斷\n於無分別¹得定解　　輪涅二執皆清淨\n道地修習成虛妄　　希懼二者增益斷²'
};
var audio={
 '白度母祈請文':'11_白度母祈請文.m4a','加持雨降任顯豁然曲':'9_加持雨降任顯豁然曲上師祈請文.m4a','天笛之哀呼':'6_天笛之哀呼 萬賢哲之頂嚴堪千竹清嘉措仁波切祈請文.m4a','殷切虔敬曲':'18_殷切虔敬曲 大恩上師祈請文.m4a','勸請至要誓願':'30_勸請至要誓願 堪千竹清嘉措仁波切迅速轉世祈請文.mp3','第十七世法王噶瑪巴長久住世祈請文':'19_第十七世大寶法王鄔金欽列多傑長壽祈請文.mp4','竹慶本樂仁波切長久住世&事業昌盛祈請文':'6_天笛之哀呼 萬賢哲之頂嚴堪千竹清嘉措仁波切祈請文.m4a','諦雅竹奔仁波切長久住世祈請文':'諦雅竹奔仁波切長久住世祈請文.aac','金剛持堪千竹清嘉措仁波切上師相應法':'17_金剛持堪千竹清嘉措仁波切_上師相應法_3mb.mp3','德謙讓卓上師相應法':'24_德謙讓卓上師相應法.m4a','蓮師七句祈請文':'27_蓮師七句祈請文接續蓮師心咒.m4a','蓮師心咒':'28_蓮師心咒.m4a','八無拒':'1_八無拒-compressed.mp3','大手印傳承祈請文':'4_大手印傳承祈請文(後段重複旋律).m4a','天龍甚深吼':'7_天龍甚深吼_5mb-compressed-2.mp3','瑜伽十八樂':'21_瑜伽十八樂(s)-compressed.mp3','萬物本貌':'22_萬物本貌.m4a','對勝義的三種確信':'23_對勝義的三種確信.mp3','樂空不二金剛舞':'25_樂空不二金剛舞.m4a','點燈祈願文':'29_點燈祈願文.m4a','世界啊！':'世界啊(剪).mp3','吉祥光照全宇宙':'12_吉祥光照全宇宙_5mb.mp3'};
function grab(name,next){var src=[].slice.call(document.scripts).map(function(s){return s.textContent||''}).join('\n');var p=src.indexOf('const '+name+'=');if(p<0)return{};var e=next?src.indexOf('const '+next+'=',p):src.indexOf('\n};',p);if(e<0)e=src.length;var c=src.slice(p,e),q=c.indexOf('=');try{return(new Function(c.slice(0,q+1)+'\nreturn '+name+';'))()}catch(x){return{}}}
var L=grab('L','');
function base(c){return String(c||'').replace(/\s*[—–-].*$/,'').replace(/！$/,'');}
function ly(c){return fixes[c]||L[c]||L[base(c)]||'';}
function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function findAudio(c){return audio[c]||audio[base(c)]||'';}
function showDetail(song){var en=song.querySelector('.en')?song.querySelector('.en').textContent.trim():'';var cn=song.querySelector('.cn')?song.querySelector('.cn').textContent.trim():'';var meta=song.querySelector('.meta')?song.querySelector('.meta').textContent.trim():'';var page=(meta.match(/p\.\s*([^|]+)/)||[])[1]||'';var name=cn||en;var f=findAudio(name);var text=ly(name);var app=document.getElementById('app');if(!app)return;app.innerHTML='<div class="detail"><button class="back" id="songBack">← 返回歌曲列表</button><h2>'+esc(en)+'</h2><div class="cn">'+esc(cn)+'</div><div class="page">p.'+esc(page)+'</div>'+(f?'<div class="player"><small>🎧 音檔</small><audio controls preload="metadata" src="./'+encodeURIComponent(f)+'"></audio></div>':'<div class="player"><small>🎧 尚無音檔</small></div>')+'<div class="lyrics">'+(text?text.split('\n').map(function(line){return '<p>'+line.replace(/¹/g,'<sup>1</sup>').replace(/²/g,'<sup>2</sup>')+'</p>';}).join(''):'<p>歌詞尚未加入。</p>')+'</div></div>';document.getElementById('songBack').onclick=function(){location.reload();};}
document.addEventListener('click',function(e){var song=e.target.closest&&e.target.closest('.song');if(!song)return;e.preventDefault();e.stopImmediatePropagation();showDetail(song);},true);
})();
