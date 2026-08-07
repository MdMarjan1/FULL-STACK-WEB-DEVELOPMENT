const arreyMarge = (arr1, arr2) => {
  const mix = [...arr1, ...arr2];
  let blank = [];
  for (let item of mix) {
    if (!blank.includes(item)) {
      blank.push(item);
    }
  }
  return blank;
};

console.log(arreyMarge([1, 2, 3], [1, 5, 6, 7]));


// ================================

const arreyMarge1 = (arr1, arr2) => {
  const mix = [...arr1, ...arr2];
  let arr = [...new Set(mix)]
  return arr
};

console.log(arreyMarge1([1, 2, 3], [1, 5, 6, 7]));

// also use Arrey.from(new Set(mix))