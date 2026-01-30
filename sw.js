const cacheName = 'biography-v1';
const assets = [
  '/Biography-of-the-Righteous/',
  '/Biography-of-the-Righteous/index.html',
  '/Biography-of-the-Righteous/manifest.json',
  '/Biography-of-the-Righteous/icon-192.png'
];

// تثبيت الخدمة وتخزين الملفات
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// جلب الملفات من الكاش عند انقطاع الشبكة
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
