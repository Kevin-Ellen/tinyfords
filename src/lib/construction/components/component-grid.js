// lib > construction > components > component-grid.js

import { dataPages } from "../../../data/data-pages";
import dataFinder from "../../helpers/helper-dataFinder";

const itemGrid = (data, name = null) => {

  const cards = data.map(createCard).join('');

  return(`<section>
    ${name ? `<h2>${name}</h2>` : ''}

    <div class="itemsGrid">
      ${cards}
    </div>

  </section>`);

}
export default itemGrid;

const createCard = (data) => {
  const collection = dataFinder(dataPages, 'name', data.brand) || dataFinder(dataPages, 'name', 'Other');

  const arr = collection.attributes
    .filter(attrib => attrib.key !== 'name' && data[attrib.key] !== null && data[attrib.key]!== 'null')
    .map(attrib => {
      data[attrib.key] = ((attrib.key==='code')||(attrib.key==='base')) ? data[attrib.key].toUpperCase() : data[attrib.key];
      return `<li><strong>${attrib.name}:</strong> ${data[attrib.key]}</li>`
    }).join('');

  return(`<div class="card">
  <img src="${collection.slug}/images/front-250/${data.images.front250}.jpg" height="150" width="150" alt="${data.name}${data.code ? ` - ${data.code}` : ''}" loading="lazy" />
    <ul class="cardContent">
      <li><h3>${data.name}</h3></li>
        ${arr}
    </ul>
  </div>`);
  
}