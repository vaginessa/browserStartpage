var CACHE_NAME = 'startpageCache';
var urlsToCache = [
  '/',
  '/data/data.json',
  '/assets/qr-codes/*',
  '/assets/thumbnails/*',
  '/assets/wallpaper/*'
];


self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache) {
			console.log('Opened cache');
			return cache.addAll(urlsToCache);
		})
	);
});
