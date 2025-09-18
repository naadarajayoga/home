// sw.js
self.addEventListener("install", event => {
  console.log("Service Worker: Installed");
});

self.addEventListener("activate", event => {
  console.log("Service Worker: Activated");
});

self.addEventListener("fetch", event => {
  // For now, just let requests go to the network
  event.respondWith(fetch(event.request));
});
