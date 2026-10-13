const C='plates-v5',F=['./','index.html','data.js','manifest.json','icon-v5-180.png','apple-touch-icon.png','icon-192.png','icon-v5-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener('fetch',e=>{if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).catch(()=>caches.match('./')));return;}e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
