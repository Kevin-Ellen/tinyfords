// lib > router > router-fonts.js - Router for the fonts

const fontsRouter = async (url) => {
  
  const newUrl = new URL(url);
  newUrl.host = 'fonts.gstatic.com';
  newUrl.pathname = `/s/${newUrl.pathname.replace('/fonts/', '')}`;

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
export default fontsRouter;
