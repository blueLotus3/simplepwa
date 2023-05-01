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
// self.addEventListener("install", function (e) {
//     e.waitUntil(
//       caches.open(cacheName).then(function (cache) {
//         return cache.add(assets);
//       })
//     );
//   });

/* for fetching assets */
// self.addEventListener("fetch", function (e) {
//   console.log(e.request.url);
//     e.respondWith(
//       caches.match(e.request).then(function(response) {
//         return response || fetch(e.request);
//       })
//     );
//   });



self.addEventListener("install", event => {
  console.log("installing...");
  event.waitUntil(
      caches
          .open(cacheName)
          .then(cache => {
              return cache.addAll(assets);
          })
          .catch(err => console.log(err))
  );
});

self.addEventListener("fetch", event => {
  if (event.request.url === "https://fanciful-praline-5f0d16.netlify.app/") {
      // or whatever your app's URL is
      event.respondWith(
          fetch(event.request).catch(err =>
              self.cache.open(cacheName).then(cache => cache.match(assets))
          )
      );
  } else {
      event.respondWith(
          fetch(event.request).catch(err =>
              caches.match(event.request).then(response => response)
          )
      );
  }
});


