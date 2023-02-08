// lib > constructions > components > component-pagination.js => PAGINATIOOOOON

const compPagination = (numPages, url) => {

  if(numPages===1){return false;}

  const arr= [];

  const qsp = url.params;

  for (let i = 1; i <= numPages; i++) {
    qsp.set('page', i);
    if(i===1){
      qsp.delete('page');
    }
    arr.push(`<li><a href="${url.pathname}${qsp.toString() ? `?${qsp.toString()}` : ``}">${i}</a></li>`);
  }

  return(`
    <section name="Pagination"> 
      <nav role="navigation" aria-label="Pagination Navigation" class="pagination">
        <ul class="paginationContainer">
          ${arr.join('')}
        </ul>
        <ul>

        </ul>
      </nav>
    </section>
  `);
}
export default compPagination;