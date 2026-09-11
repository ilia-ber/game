const CACHE = 'carloquest-v1';
const FILES = ['/', '/game/', '/game/index.html', '/game/manifest.json', '/game/icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
