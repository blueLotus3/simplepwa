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




self.addEventListener("install", (event) => {
  console.log("Service Worker : Installed!")

  event.waitUntil(
      
      (async() => {
          try {
              cache_obj = await caches.open(cacheName)
              cache_obj.addAll(assets)
          }
          catch{
              console.log("error occured while caching...")
          }
      })()
  )
} )

