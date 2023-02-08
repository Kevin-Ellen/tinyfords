// lib > helpers > helper-dataSearch.js -> searching the data

const dataFilter = (data, key, value) => {
  return data.filter(obj => obj[key] === value);
}

export default dataFilter;