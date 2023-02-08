// lib > construction > components > component-mainNav.js

import { dataPages } from "../../../../data/data-pages";
import widgetSearchBar from "../../../widgets/widget-searchBar";

const mainNav = (page) => {

  const arr = dataPages.map((obj) => {
    if((obj.active)&&(obj.mainNav)){
      return `<li><a href="${obj.slug}">${obj.name}</a></li>`
    }
  }).join('');
  
  return(`
    <div class="mainNav">
      <header class="mainNavHeader">
        <label class="mainNavLabel" for="mainNavBox">
          <svg viewBox="0 0 100 80" width="25" height="25">
            <rect width="100" height="20" rx="10"></rect>
            <rect y="30" width="100" height="20" rx="10"></rect>
            <rect y="60" width="100" height="20" rx="10"></rect>
          </svg>
          <span class="a11y">Open main menu</span>
        </label>
        <p class="mainNavName"><a href="/">Tiny Fords</a></p>
        <div class="mainNavRightSide">
          <label class="mainNavLabel" for="mainNavSearch">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="25" height="25">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"></path>
            </svg>
            <span class="a11y">Open search box</span>
          </label>
        </div>
        <input type="checkbox" class="mainNavBox" id="mainNavBox">
        <nav class="mainNavMenu" role="navigation" aria-label="Main menu">
          <ul class="mainMenu" role="">
            ${arr}
          </ul>
        </nav>
        <input type="checkbox" class="mainNavBox" id="mainNavSearch">
        <div class="mainSearch">
          ${widgetSearchBar('All', page.request.params)}
        </div>
      </header>
    </div>
  `);
}
export default mainNav;