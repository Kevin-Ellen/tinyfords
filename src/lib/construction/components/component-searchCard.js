// lib > construction > components > component-searchCard.js

import widgetSearchBar from "../../widgets/widget-searchBar";

const compSearchCard = (data, current = null) => {

  return (`
    <div class="searchCard">
      ${widgetSearchBar(data, current)}
    </div>
  `);
}

export default compSearchCard;