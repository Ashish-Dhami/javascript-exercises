const palindromes = function (str) {
  const sanitizedStr = str
    .replace(/[!"#$%&'()*+,-.\/:;<=>?@[\]^_`{|}~\s]/g, "")
    .toLowerCase();
  for (let i = 0; i < Math.floor(sanitizedStr.length / 2); i++) {
    if (sanitizedStr.at(i) != sanitizedStr.at(-i - 1)) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
