const GetExpensiveProduct = (obj) => {
  let key = Object.keys(obj);
  let hight = 0;
  let higestproduct = '';
  for (let i of key) {
    if (obj[i] > hight) {
      hight = obj[i];
      higestproduct = i;
    }
  }
  return { hight, higestproduct };
};
console.log(GetExpensiveProduct({ pen: 20, book: 250, bag: 1000 }));
