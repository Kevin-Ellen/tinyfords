// lib > construction > constructor-page.js

// Import components
import htmlOpen from "./components/layout/component-htmlOpen";
import mainNav from "./components/layout/component-mainNav";
import navBreadcrumbs from "./components/layout/component-navBreadcrumbs";
import mainOpen from "./components/layout/component-mainOpen";
import mainClose from "./components/layout/component-mainClose";
import mainFooter from "./components/layout/component-mainFooter";
import htmlClose from "./components/layout/component-htmlClose";

import contentHome from "./content/content-home";
import contentCollection from "./content/content-collection";
import contentAbout from "./content/content-about";
import contentCodes from "./content/content-codes";
import contentOffline from "./content/content-offline";


const constructorPage = (page) => {
  return [
      htmlOpen(page),
      mainNav(page),
      navBreadcrumbs(page),
      mainOpen(),

      template(page),

      mainClose(),

      mainFooter(),
      htmlClose(page),
  ].join('');
}
export default constructorPage;

const template = (page) => {
  switch(page.data.template){
    case 'home': return contentHome();
    case 'collection': return contentCollection(page);
    case 'about': return contentAbout(page);
    case 'toy-number': return contentCodes(page);
    case 'offline': return contentOffline(page);
    // case 'content': return templateContent(page);
    default: return `<h1>Default</h1><p>Not set in template (pageConstructor) yet.</p>`;
  }
}
