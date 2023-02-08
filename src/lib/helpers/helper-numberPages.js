// lib > helpers > helper-numberPages => Data pagination

const numberPages = (array, pageSize = 14) => {
  return  Math.ceil(array.length / pageSize);
}
export default numberPages;