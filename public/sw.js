self.addEventListener('install', function (event) {
    console.log('[Service Worker] Installing Service Worker ...', event);
});

self.addEventListener('fetch', function (event) {
    console.log('[Service Worker] fetching', event);
});