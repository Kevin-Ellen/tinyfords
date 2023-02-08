// lib > helpers > helper-dataPagination => Data pagination

const dataPagination = (array, pageNumber, pageSize = 14) => {
  const start = (pageNumber - 1) * pageSize;
  const end = start + pageSize;
  return array.slice(start, end);
}
export default dataPagination;