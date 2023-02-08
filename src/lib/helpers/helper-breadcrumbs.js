// lib > helpers > helper-helperBreadcrumbs.js --> all things breadcrumbs

import dataFinder from "./helper-dataFinder";
import { dataPages } from "../../data/data-pages";

export const createBreadcrumbs = (crumbNames) => {
  if(crumbNames){
    return crumbNames.map(item => {
      const foundItem = dataFinder(dataPages, 'name', item);
      return {
        name: foundItem.name,
        slug: foundItem.slug,
      }
    });
  }
  return;
}