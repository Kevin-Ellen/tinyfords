// lib > output > output-sw.js

const sw = (data) => {

  const caches = {
    all: "v0.13", 
  };

  const endpoints = [
    '/cache/pages.json',
    '/cache/fonts.json',
    '/cache/images.json',
    '/cache/asset-list.json',
  ];

  const worker = `

  const endpoints = ${JSON.stringify(endpoints)};

  self.addEventListener('install', function(event) {
    event.waitUntil(
      Promise.all(endpoints.map(endpoint => fetch(endpoint)))
        .then(responses => Promise.all(responses.map(res => res.json())))
        .then(assets => [].concat(...assets))
        .then(urls => caches.open('${caches.all}')
          .then(cache => cache.addAll(urls)))
    );
  });

  self.addEventListener('activate', event => {
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => cacheName !== '${caches.all}')
            .map(cacheName => caches.delete(cacheName))
        );
      })
    );
  });

  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            // If the response is in the cache, return it immediately
            return response;
          } else {
            // If the response is not in the cache, fetch it from the network
            return fetch(event.request)
              .then(function(networkResponse) {
                // If the network request was successful, store the response in the cache
                if (networkResponse && networkResponse.status === 200) {
                  // Clone the response
                  let responseClone = networkResponse.clone();
                  caches.open('${caches.all}')
                    .then(function(cache) {
                      cache.put(event.request, responseClone);
                    });
                }
                // Return the network response
                return networkResponse;
              })
              // If the network request fails, check the type of resource being requested
              .catch(function() {
                if (event.request.url.endsWith('.jpg') || event.request.url.endsWith('.png')) {
                  // If the resource is an image, return the offline image placeholder
                  return caches.match('/icons/images/offline.jpg');
                } else {
                  // If the resource is not an image, return the offline HTML page
                  return caches.match('/offline');
                }
              });
          }
        })
        .then(function(response) {
          // Regardless of whether the response was from the cache or the network,
          // immediately fetch a new version from the network
          fetch(event.request)
            .then(function(networkResponse) {
              if (networkResponse && networkResponse.status === 200) {
                // If the network request was successful, store the new version in the cache
                // Clone the response
                let responseClone = networkResponse.clone();
                caches.open('${caches.all}')
                  .then(function(cache) {
                    cache.put(event.request, responseClone);
                  });
              }
            });
          // Return the cached response
          return response;
        })
    );
  });
  `;

  return new Response(worker, {status: 200, headers:{'content-type':'application/javascript'}});
}

export default sw;