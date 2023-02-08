// lib > helpers > helper-dataSorter.js - sorting arrays

const dataSorter = (data, property, order = 'asc') => {
  return data.sort((a, b) => {
    if (order === 'asc') {
      if (a[property] < b[property]) {
        return -1;
      }
      if (a[property] > b[property]) {
        return 1;
      }
      return 0;
    } else {
      if (a[property] > b[property]) {
        return -1;
      }
      if (a[property] < b[property]) {
        return 1;
      }
      return 0;
    }
  });
}

export default dataSorter;