

function isCondition(arr) {
  let fixed = 50;
  let em = [];
  for (let x of arr) {
    if (x > fixed) {
      em.push(x);
    }
  }
  return em;
}

console.log("Final output",isCondition([50, 60, 35, 122, 500, 6013, 40, 20, 79, 2005]));
