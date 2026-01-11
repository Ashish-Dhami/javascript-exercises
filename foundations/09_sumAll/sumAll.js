const sumAll = function (n1, n2) {
  if (
    typeof n1 != "number" ||
    n1 < 0 ||
    Math.floor(n1) !== n1 ||
    typeof n2 != "number" ||
    n2 < 0 ||
    Math.floor(n2) !== n2
  )
    return "ERROR";
  const greater = Math.max(n1, n2);
  const smaller = Math.min(n1, n2);
  return ((greater + smaller) * (greater - smaller + 1)) / 2;
};
// Do not edit below this line
module.exports = sumAll;
