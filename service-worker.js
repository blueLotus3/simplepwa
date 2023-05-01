const cacheName = "htmlCSShw4";
const assets = [
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
];

/* for installing event listener */
self.addEventListener("install", function (e) {
    e.waitUntil(
      caches.open(cacheName).then(function (cache) {
        return cache.addAll(["/"]);
      })
    );
  });

/* for fetching assets */
self.addEventListener("fetch", function (event) {
  console.log(event.request.url);
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });

