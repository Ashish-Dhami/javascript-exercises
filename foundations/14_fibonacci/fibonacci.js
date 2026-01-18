const fibonacci = function (num) {
  num = +num;
  if (num < 0) return "OOPS";
  if (num === 0) return 0;
  let [a, b] = [0, 1];
  for (let i = 0; i < num - 1; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
