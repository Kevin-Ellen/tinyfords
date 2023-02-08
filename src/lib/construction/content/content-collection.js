// lib > construction > content > content-collection.js

import dataCars from '../../../data/data-allCars';

import dataSorter from "../../helpers/helper-dataSorter";
import dataFilter from '../../helpers/helper-dataFilter';
import numberPages from '../../helpers/helper-numberPages';

import dataSearch from '../../helpers/helper-dataSearch';
import dataPagination from '../../helpers/helper-dataPagination';

import itemGrid from '../components/component-grid';
import compSearchCard from '../components/component-searchCard';
import compPagination from '../components/component-pagination';

const contentCollection = (page) => {

  const activePage = parseInt(page.request.params.get('page')) || 1;

  const lookup = {
    '/hotwheels': dataFilter(dataCars(),'category','Hot Wheels'),
    '/matchbox': dataFilter(dataCars(),'category','Matchbox'),
    '/other': dataFilter(dataCars(),'category','Other'),
    '/all': dataCars(),
    'default': null
  }

  let items = {
    data: null,
  }

  items.data = dataSorter(lookup[page.request.pathname] || lookup.default, 'added', 'desc');

  if(!items.data){ 
    return (`
      <h1>Collection not found!</h1>
      <p>Why don't you try to search?</p>
      ${widgetSearchBar('All', page.request.params)}
    `);
  }

  if(page.request.params.has('q')){
    items = dataSearch(items.data, page.request.params.get('q'));
  }

  items.paginated = dataPagination(items.data, activePage); 

  return(`
      <div class="compContent">
        <h1>${page.data.name}</h1>
        ${showFilterDetails(items) || showNumber(items.data.length)}
        ${compSearchCard(page.data.name, page.request.params)}
      </div>
      
      ${items.data.length>0 ? itemGrid(items.paginated, `Results ${activePage > 1 ? ` - Page: ${activePage}` : ``}`) : ''}
      ${numberPages(items.data) > 1 ? compPagination(numberPages(items.data), page.request) : ``}
      
    `);
}
export default contentCollection;


const showFilterDetails = (data) => {
  if(!data.searchDetails){ return false }

  return(`
    <section name="filter details">
      <h2 class="a11y">Search details</h2>
      <p>Current active search is for looking for <strong><em>"${data.searchDetails.value}"</em></strong>. This search has found <strong>${data.searchDetails.number}</strong> result${data.searchDetails.number !== 1 ? 's' : ''}.</p>
    </section>
  `);
}

const showNumber = (number) => {
  return (`
    <p>There are <strong>${number}</strong> items within this collection.</p>
  `);
}