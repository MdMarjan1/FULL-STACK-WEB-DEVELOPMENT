

function isCondition(arr, value) {
  let em = [];
  for (let x of arr) {
    if (x > value) {
      em.push(x);
    }
  }
  return em;
}

console.log("Final output",isCondition([50, 60, 35, 122, 500, 6013, 40, 20, 79, 2005],79));
