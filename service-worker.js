const CACHE_NAME = 'kids-paint-app-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    // Assuming icons are in /icons/ folder at the root, as per manifest.json
    'paint.png',
    'https://cdn.tailwindcss.com/', // Cache the Tailwind CSS CDN
    // Add any other static assets your app relies on (e.g., custom fonts, other images)
];

// Install event: caches all necessary assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Service Worker: Opened cache');
                return cache.addAll(urlsToCache);
            })
            .catch(error => {
                console.error('Service Worker: Failed to open cache or add URLs:', error);
            })
    );
});

// Activate event: cleans up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Service Worker: Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch event: serves cached content first, then fetches from network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                // No cache hit - fetch from network
                return fetch(event.request).catch(error => {
                    console.error('Service Worker: Fetch failed or offline:', event.request.url, error);
                    // Optionally, return an offline page if the request is for an HTML page
                    // if (event.request.mode === 'navigate') {
                    //     return caches.match('/offline.html'); // Assuming you have an offline.html
                    // }
                });
            })
    );
});
