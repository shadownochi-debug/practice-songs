const CACHE = 'nepal-three-day-offline-v1';
const SHELL = [
  './',
  './index.html',
  './nepal-app-v3.html?v=11',
  './rebuild-nepal-v2.js?v=4',
  './override-nepal-lyrics.js?v=3',
  './click-fix.js',
  './lyrics-fix.js'
];
const AUDIO = [
  '1_八無拒-compressed.mp3',
  '4_大手印傳承祈請文(後段重複旋律).m4a',
  '7_天龍甚深吼_5mb-compressed-2.mp3',
  '9_加持雨降任顯豁然曲上師祈請文.m4a',
  '12_吉祥光照全宇宙_5mb.mp3',
  '15_法王松贊甘布勝住開光吉祥文.mp4',
  '16_法身城.m4a',
  '17_金剛持堪千竹清嘉措仁波切_上師相應法_3mb.mp3',
  '18_殷切虔敬曲 大恩上師祈請文.m4a',
  '19_第十七世大寶法王鄔金欽列多傑長壽祈請文.mp4',
  '21_瑜伽十八樂(s)-compressed.mp3',
  '22_萬物本貌.m4a',
  '23_對勝義的三種確信.mp3',
  '24_德謙讓卓上師相應法.m4a',
  '25_樂空不二金剛舞.m4a',
  '27_蓮師七句祈請文接續蓮師心咒.m4a',
  '28_蓮師心咒.m4a',
  '29_點燈祈願文.m4a',
  '30_勸請至要誓願 堪千竹清嘉措仁波切迅速轉世祈請文.mp3',
  '世界啊(剪).mp3',
  '白度母祈請文.m4a',
  '諦雅竹奔仁波切祈請文.aac',
  '金剛持堪千竹清嘉措仁波切 上師相應法.m4a'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(SHELL);
    await Promise.all(AUDIO.map(async name => {
      try {
        const url = './' + encodeURIComponent(name);
        const res = await fetch(url, {cache:'no-cache'});
        if (res.ok) await cache.put(url, res.clone());
      } catch (_) {}
    }));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) return cached;
    try {
      const res = await fetch(req);
      if (res.ok) {
        const cache = await caches.open(CACHE);
        cache.put(req, res.clone());
      }
      return res;
    } catch (_) {
      return cached || new Response('Offline', {status:503});
    }
  })());
});
