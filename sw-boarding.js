const CACHE='nepal-boarding-v1';
const CORE=['./boarding-practice.html'];
const AUDIO=[
'./%E5%A4%A9%E7%AC%9B%E4%B9%8B%E5%93%80%E5%91%BC%20%E8%90%AC%E8%B3%A2%E5%93%B2%E4%B9%8B%E9%A0%82%E5%9A%B4%E5%A0%AA%E5%8D%83%E7%AB%B9%E6%B8%85%E5%96%9C%E6%8E%AA%E4%BB%81%E6%B3%A2%E5%88%87%E7%A5%88%E8%AB%8B%E6%96%87.m4a',
'./23_%E5%B0%8D%E5%8B%9D%E7%BE%A9%E7%9A%84%E4%B8%89%E7%A8%AE%E7%A2%BA%E4%BF%A1.mp3',
'./%E5%8A%A0%E6%8C%81%E9%9B%A8%E9%99%8D%E4%BB%BB%E9%A1%AF%E8%B1%81%E7%84%B6%E6%9B%B2%E4%B8%8A%E5%B8%AB%E7%A5%88%E8%AB%8B%E6%96%87.m4a',
'./%E6%AE%B7%E5%88%87%E8%99%94%E6%95%AC%E6%9B%B2%20%E5%A4%A7%E6%81%A9%E4%B8%8A%E5%B8%AB%E7%A5%88%E8%AB%8B%E6%96%87.m4a'
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{if(res.ok && (e.request.url.includes('boarding-practice.html')||AUDIO.some(x=>new URL(x,self.location).href===e.request.url))){const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}return res}).catch(()=>caches.match('./boarding-practice.html'))))});