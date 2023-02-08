// lib > router > router-images.js - Router for the images

const imageRouter = async (url) => {
  const newUrl = new URL(url);
  newUrl.host = 'raw.githubusercontent.com';
  newUrl.pathname = url.pathname === '/favicon.ico' ?
    `/Kevin-Ellen/tinyfords/main/photos/icons/favicon.ico` :
    `/Kevin-Ellen/tinyfords/main/photos${newUrl.pathname.replace('/images', '')}`;

  const cacheTime = 604800;

  let response = await fetch(newUrl.toString(), {
      cf:{
        cacheTtl: cacheTime,
        cacheEverything: true,
        cacheKey: newUrl.toString()
      }
  });


  response = new Response(response.body, response);

  response.headers.set('Cache-Control', `max-age=${cacheTime}`);

  return response;
}
export default imageRouter;
