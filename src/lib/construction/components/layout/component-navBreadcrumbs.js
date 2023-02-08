// lib > construction > components > component-navBreadcrumbs.js

import { createBreadcrumbs } from "../../../helpers/helper-breadcrumbs";

const navBreadcrumbs = (page) => {

  
  if(page.data.breadcrumbList){
    const arr = createBreadcrumbs(page.data.breadcrumbList).map((obj, index) => {
      const isLastItem = index === page.data.breadcrumbList.length - 1;
    
      return (`
        <li ${isLastItem ? 'aria-current="page"' : ''}>
          <a href="${obj.slug}">${obj.name}</a>
        </li>
        ${isLastItem ? '' : `<li aria-hidden="true">/</li>`}
      `);
    }).join('');

    return(`
      <nav class="breadBin" aria-label="Breadcrumb">
        <ul class="breadcrumbs">
          ${arr}
        </ul>
      </nav>
    `);
  }
  return;
}
export default navBreadcrumbs;