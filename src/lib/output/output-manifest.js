// lib > output > output-manifest.js

import { dataPages } from "../../data/data-pages";
import dataFinder from "../helpers/helper-dataFinder";

const manifest = () => {

  const content = {
    name: "Tiny Fords",
    short_name: "TinyFords",
    theme_color: "rgb(0, 84, 144)",
    background_color: "rgb(0, 84, 144)",
    display: "standalone",
    start_url: "/",
    id: "/",
    shortcuts: [
      {
        name: 'Hot Wheels',
        url: dataFinder(dataPages, 'name', 'Hot Wheels').slug,
        icons:[
          {
            src: '/icons/hot-wheels-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          }
        ]
      },{
        name: 'Matchbox',
        url: dataFinder(dataPages, 'name', 'Matchbox').slug,
        icons:[
          {
            src: '/icons/matchbox-96x96.png',
            sizes: '96x96',
          }
        ]
      },{
        name: 'Other',
        url: dataFinder(dataPages, 'name', 'Other').slug,
        icons:[
          {
            src: '/icons/all-96x96.png',
            sizes: '96x96',
          }
        ]
      },{
        name: 'All',
        url: dataFinder(dataPages, 'name', 'All').slug,
        icons:[
          {
            src: '/icons/all-96x96.png',
            sizes: '96x96',
          }
        ]
      }
    ],
    "icons": [
      {
        "src": "/icons/android-icon-36x36.png",
        "sizes": "36x36",
        "type": "image/png",
      },
      {
        "src": "/icons/android-icon-48x48.png",
        "sizes": "48x48",
        "type": "image/png",
      },
      {
        "src": "/icons/android-icon-72x72.png",
        "sizes": "72x72",
        "type": "image/png",
      },
      {
        "src": "/icons/android-icon-96x96.png",
        "sizes": "96x96",
        "type": "image/png",
      },
      {
        "src": "/icons/android-icon-144x144.png",
        "sizes": "144x144",
        "type": "image/png",
      },
      {
        "src": "/icons/android-icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
      },
      {
        "src": "/icons/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
      },
      {
        "src": "/icons/maskable-icon-48x48.png",
        "sizes": "48x48",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "/icons/maskable-icon-72x72.png",
        "sizes": "72x72",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
      "src": "/icons/maskable-icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png",
      "purpose": "maskable"
      },
      {
      "src": "/icons/maskable-icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png",
      "purpose": "maskable"
      },
      {
      "src": "/icons/maskable-icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
      },
      {
      "src": "/icons/maskable-icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png",
      "purpose": "maskable"
      },
      {
      "src": "/icons/maskable-icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
      },
      {
      "src": "/icons/maskable-icon-1024x1024.png",
      "sizes": "1024x1024",
      "type": "image/png",
      "purpose": "maskable"
      }
    ]
   };

  return new Response(JSON.stringify(content), {status: 200, headers:{'content-type':'application/json'}});
}

export default manifest;