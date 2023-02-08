// lib > helpers > helper-dataFinder.js

const dataFinder = (array, property, value) => {
  return array.find(obj => obj[property] === value);
}
export default dataFinder;