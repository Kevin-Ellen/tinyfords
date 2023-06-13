const sw = (data) => {
  const cacheVersion = 'v0.3';
  const cacheName = `cache-${cacheVersion}`;
  const swVersion = 0.25;

  const endpoints = [
    '/cache/pages.json',
    '/cache/fonts.json',
    '/cache/images.json',
    '/cache/asset-list.json',
  ];

  const worker = `
    const endpoints = ${JSON.stringify(endpoints)};

    self.addEventListener('install', function(event) {
      console.log('SW version: ${swVersion}');
      event.waitUntil(
        Promise.all(
          endpoints.map(endpoint =>
            fetch(endpoint)
              .then(response => {
                if (!response.ok) {
                  throw new Error('Request for ' + endpoint + ' failed with status ' + response.status);
                }
                return response;
              })
              .catch(error => {
                console.error('Fetch error for ' + endpoint + ':', error);
                return Promise.reject(error);
              })
          )
        )
          .then(responses => Promise.all(responses.map(res => res.json())))
          .then(assets => [].concat(...assets))
          .then(urls => {
            console.log('URLs to be cached:');
            return urls.reduce((promise, url) => {
              return promise.then(() => {
                console.log(url);
                return caches.open('${cacheName}')
                  .then(cache => cache.add(url));
              });
            }, Promise.resolve());
          })
          .catch(error => {
            console.error('Cache.addAll error:', error);
          })
      );
    });

    // Rest of the code...
  `;

  return new Response(worker, { status: 200, headers: { 'content-type': 'application/javascript' } });
};

export default sw;
