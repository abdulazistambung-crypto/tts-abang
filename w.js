jsself.addEventListener('install', e => {
  e.waitUntil(caches.open('tts-v1').then(c => c.addAll(['tts.html','manifest.json'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});