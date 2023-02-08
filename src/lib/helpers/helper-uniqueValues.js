// lib > helpers > helper-uniqueValues.js -> Get unique valeus for a key

const uniqueValues = (arr, key) => {
  return [...new Set(arr.map(item => item[key]))];
}

export default uniqueValues;