// lib > helpers > helper-structuredData.js --> all things structured data

import { createBreadcrumbs } from "./helper-breadcrumbs";

export const structuredDataBreadcrumbs = (page) => {
  if(page.data.breadcrumbList){
    const arr = createBreadcrumbs(page.data.breadcrumbList).map((obj, index) => {
      return {
        "@type": "ListItem",
        position: index+1,
        name: obj.name,
        item: `${page.request.protocol}//${page.request.host}${obj.slug}`
      }
    });
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": arr,
    }
  }
  return;
}

export const structuredDataWebsite = (page) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tiny Fords",
    url: `${page.request.protocol}//${page.request.host}/`,
    potentialAction:{
      "@type": "SearchAction",
      target: `${page.request.protocol}//${page.request.host}/all?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }
}

export const thumbnailImage = (page) => {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    url: `${page.request.protocol}//${page.request.host}/social-media/images/256/${page.data.socialMedia.imageName}-256.jpg`
  }
}