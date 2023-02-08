// lib > output > allAssets

import { dataPages } from "../../data/data-pages";
import dataCars from "../../data/data-allCars";

import numberPages from "../helpers/helper-numberPages";
import uniqueValues from "../helpers/helper-uniqueValues";
import dataFinder from "../helpers/helper-dataFinder";

export const outputAllPages = () => {

  const arr = dataPages.filter(obj => obj.active === true)
    .map(obj => {
    
    const numPages = numberPages(dataCars().filter(cars => obj.name === cars.category));

    let urls = [];
    for(let i = 0; i <= numPages; i++) {
      if(i === 0 || i === 1) {
        urls.push(`${obj.slug}`);
      } else {
        urls.push(`${obj.slug}?page=${i}`);
      }
    }
    return urls;
  })
  .flat()
  .filter((item, index, self) => self.indexOf(item) === index);

  return new Response(JSON.stringify(arr), {status: 200, headers:{'content-type':'application/json'}});

}

export const outputAllFonts = () => {
  const arr = [
    '/fonts/montserratalternates/v17/mFTiWacfw6zH4dthXcyms1lPpC8I_b0juU0xQIXFB7xG-GNxkg.woff2',
    '/fonts/montserratalternates/v17/mFTiWacfw6zH4dthXcyms1lPpC8I_b0juU0xNIPFB7xG-GNxkg.woff2',
    '/fonts/quicksand/v30/6xKtdSZaM9iE8KbpRA_hK1QNYuDyPw.woff2',
  ];
  return new Response(JSON.stringify(arr), {status: 200, headers:{'content-type':'application/json'}});
}

export const outputAllImages = () => {
  const set = new Set();
  const arr =  dataCars().map(obj => {
    return `${dataFinder(dataPages, 'name', obj.category).slug}/images/front-250/${obj.images.front250}.jpg`;
  }).filter(img => set.has(img) ? false : set.add(img));
  arr.push('/icons/images/offline.jpg');
  return new Response(JSON.stringify(arr), {status: 200, headers:{'content-type':'application/json'}});
}


export const outputAllCars = () => {

  return new Response(JSON.stringify(dataCars()), {status: 200, headers:{'content-type':'application/json'}});
}

export const pageData = () => {

  return new Response(JSON.stringify(dataPages), {status: 200, headers:{'content-type':'application/json'}});
}

export const assetList = () => {
  const arr = [
    '/cache/cars.json',
    '/cache/data-pages.json',
    '/manifest.json',
  ];
  return new Response(JSON.stringify(arr), {status: 200, headers:{'content-type':'application/json'}});
}