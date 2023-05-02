// const cacheName = "htmlCSShw4";
// const assets = [
// "./",
// "./index.html",
// "./css/style.css",
// "./js/hamburger.js",
// "./js/main.js",
// "./js/manifest.json",
// "./images/lightblue.jpg",
// "./images/lightgold.jpg",
// "./images/gold.jpeg",
// "./images/pwwa.png"
// ];


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('cache').then(function(cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/css/style.css",
        "/js/hamburger.js",
        "/js/main.js",
        "/js/manifest.json",
        "/images/lightblue.jpg",
        "/images/lightgold.jpg",
        "/images/gold.jpeg",
        "/images/pwwa.png"
       ]);
    })
   );
});

self.addEventListener('fetch', function(event){
  event.respondWith(async function () {
     var cache = await caches.open('cache');
     var cachedResponsePromise = await cache.match(event.request);
     var networkResponsePromise = fetch(event.request);
     event.waitUntil(async function () {
        var networkResponse = await networkResponsePromise;
        await cache.put(event.request, networkResponse.clone());
     }());
     return cachedResponsePromise || networkResponsePromise;
   }());
});




