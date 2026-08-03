const mergeInventory = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return `Invalid`;
  }
  let merGe = [...arr1, ...arr2];
  return merGe;
};
console.log(mergeInventory([1, 2], [3, 4]));




const highestScore = (scores) => {
  if (!Array.isArray(scores)) {
    return `Invalid`;
  }
  let highestScores = Math.max(...scores);
  return highestScores;
};
console.log(highestScore([3, 7, 2, 9, 4]));
console.log(highestScore('3,7,2'));

//  if(typeof scores === "string"){
//      return `Invalid`
//   }
