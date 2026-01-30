const CACHE_NAME = 'scx-foundry-v1';
const RUNTIME_CACHE = 'scx-runtime-v1';

const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './offline.html',
  './icons/icon-512x512.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.map(cacheName => {
        if (![CACHE_NAME, RUNTIME_CACHE].includes(cacheName)) {
          return caches.delete(cacheName);
        }
      })
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;

  if (request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) {
        return cached;
      }

      return fetch(request)
        .then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(RUNTIME_CACHE).then(cache => cache.put(request, responseToCache));
          return response;
        })
        .catch(() => {
          if (request.headers.get('Accept')?.includes('text/html')) {
            return caches.match('./offline.html');
          }
          return new Response('', { status: 503, statusText: 'Offline' });
        });
    })
  );
});
