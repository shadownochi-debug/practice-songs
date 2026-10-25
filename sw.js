const CACHE='nepal-boarding-v4';
const SHELL=['./boarding-practice.html'];
const AUDIO=[
 '6_天笛之哀呼 萬賢哲之頂嚴堪千竹清嘉措仁波切祈請文.m4a',
 '23_對勝義的三種確信.mp3',
 '9_加持雨降任顯豁然曲上師祈請文.m4a',
 '18_殷切虔敬曲 大恩上師祈請文.m4a',
 '11_白度母祈請文.m4a'
];
self.addEventListener('install',event=>{event.waitUntil((async()=>{const c=await caches.open(CACHE);await c.add('./boarding-practice.html');await Promise.all(AUDIO.map(async name=>{try{const url='./'+name;const r=await fetch(url,{cache:'no-cache'});if(r.ok)await c.put(url,r.clone())}catch(e){}}));self.skipWaiting()})())});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith('nepal-boarding-')&&k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim()})())});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;const u=new URL(event.request.url);if(u.origin!==self.location.origin)return;event.respondWith((async()=>{const cached=await caches.match(event.request);if(cached)return cached;try{const r=await fetch(event.request);if(r.ok){const c=await caches.open(CACHE);c.put(event.request,r.clone())}return r}catch(e){return cached||new Response('Offline',{status:503})}})())});