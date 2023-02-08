// lib > helpers > helper-dataSlicer.js - Slice of data

const dataSlicer = (data, number = 14, end = data.length, start = end - number) => {
  return data.slice(start, end);
}

export default dataSlicer;