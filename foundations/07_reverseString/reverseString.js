const reverseString = function (str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.at(i);
  }
  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
