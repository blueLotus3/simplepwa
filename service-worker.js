const cacheName = "htmlCSShw4";
const assets = [
"/",
"/index.html",
"/css/style.css",
"/js/hamburger.js",
"/js/main.js",
"/js/manifest.json",
"/images/lightblue.jpg",
"/images/lightgold.jpg"
];

/* for installing event listener */
self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll(assets);
      })
    );
  });

/* for fetching assets */
self.addEventListener('fetch', function(e) {
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  });

