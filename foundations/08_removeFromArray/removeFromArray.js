const removeFromArray = function (arr, ...remove) {
  const obj = {};
  for (let i of arr) obj[i] = i; //O(n)
  for (let r of remove) {
    if (obj[r] === r) delete obj[r]; //O(1)
  }
  return Object.values(obj);
};

// Do not edit below this line
module.exports = removeFromArray;
