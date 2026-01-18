const findTheOldest = function (people) {
  const currYear = new Date().getUTCFullYear();
  return people.reduce((oldestP, currP) => {
    if (
      (currP.yearOfDeath ?? currYear) - currP.yearOfBirth >
      (oldestP.yearOfDeath ?? currYear) - oldestP.yearOfBirth
    )
      oldestP = currP;

    return oldestP;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
