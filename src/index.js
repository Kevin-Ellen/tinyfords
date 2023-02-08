// > index.js - Entry point

// Loading routers
import imageRouter from './lib/routers/router-images';
import fontsRouter from './lib/routers/router-fonts';

// Loading outputs (files)
import robotsTxt from './lib/output/output-robotsTxt';
import xmlSitemap from './lib/output/output-xmlSitemap';
import browserConfig from './lib/output/output-browserConfig';
import manifest from './lib/output/output-manifest';
import sw from './lib/output/output-sw';

// Assets
import { outputAllCars, outputAllFonts, outputAllImages, outputAllPages, pageData, assetList } from './lib/output/output-allAssets';


// Loading data
import {dataPages, notFound} from './data/data-pages';

// Loading constructor
import constructorPage from './lib/construction/constructor-page';


addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})


const handleRequest = async (request) => {

  const url = new URL(request.url);

  if(url.host.startsWith('www.')===true){
    url.host = url.host.replace('www.','');
    return Response.redirect(url, 308);
  }

  const arr = ['/hotwheels/images','/matchbox/images','/other/images', '/icons', '/favicon.ico', '/social-media/images'];


  if (arr.some(item => url.pathname.startsWith(item))) {
    return imageRouter(url);
  }

  if(url.pathname.startsWith('/fonts/')){
    return fontsRouter(url);
  }

  if(url.pathname==='/robots.txt'){
    return robotsTxt(url);
  }

  if(url.pathname==='/sitemap.xml'){
    return xmlSitemap(dataPages, url);
  }

  if(url.pathname==='/manifest.json'){
    return manifest();
  }

  if(url.pathname==='/browserconfig.xml'){
    return browserConfig();
  }

  if(url.pathname==='/sw.js'){
    return sw(dataPages);
  }

  if(url.pathname==='/cache/pages.json'){
    return outputAllPages();
  }

  if(url.pathname==='/cache/fonts.json'){
    return outputAllFonts();
  }

  if(url.pathname==='/cache/images.json'){
    return outputAllImages();
  }

  if(url.pathname==='/cache/cars.json'){
    return outputAllCars();
  }

  if(url.pathname==='/cache/data-pages.json'){
    return pageData();
  }

  if(url.pathname==='/cache/asset-list.json'){
    return assetList();
  }

  url.params = new URLSearchParams(url.search);

  const page = {
    request: url,
    index: checkParams(url.params) ? 'noindex' : 'index',
  };

  page.data = dataPages.find(obj => obj.slug === url.pathname) ? dataPages.find(obj => obj.slug === url.pathname) : notFound;


  return new Response(constructorPage(page), {status: page.data.status, headers:{ 'content-type':'text/html', 'x-robots-tag':page.index}});

}

const checkParams = (params) => {
  const temp = new URLSearchParams(params);
  temp.delete('page');
  return ([...temp].length > 0);
}

