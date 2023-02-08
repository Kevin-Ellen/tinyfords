// lib > construction > components > component-htmlClose.js

import { structuredDataBreadcrumbs, structuredDataWebsite, thumbnailImage } from "../../../helpers/helper-structuredData";

import searchJs from '../../../../js/js-search.txt';
import swJS from '../../../../js/js-serviceWorker.txt';

const htmlClose = (page) => {
  const arr = [
    structuredDataBreadcrumbs(page),
    structuredDataWebsite(page),
  ];

  if((page.data.template!=='offline') && (page.data.template!==404)){
    arr.push(thumbnailImage(page));
  }

  return(`
        <script type="application/ld+json">
          ${JSON.stringify(arr)}
        </script>
        <script>
          ${searchJs}
          ${swJS}
        </script>
      </body>
    </html>
  `);
}
export default htmlClose;