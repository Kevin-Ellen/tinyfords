// lib > helpers > helper-dataSearch.js -> searching the data

const dataSearch = (arr, search) => {
  if(!search){
    return (
      {
        searchdetails: false,
        data: array
      }
    );
  }

  const obj = {
    searchDetails: {
      value: search,
    }
  }

  obj.data = arr.filter(obj => {
    for (const key in obj) {
      if (typeof obj[key] === 'string' && obj[key].toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
    }
    return false;
  });

  obj.searchDetails.number = obj.data.length;

  return obj;
}

export default dataSearch;