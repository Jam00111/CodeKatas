//create list data structure that will hold inf list


// write the function isAnagram

var isAnagram = function(test, original) {

  if (test.length !== original.length) {
    return false;
  }
  if (test === original) {
    return true;
  }

  let testCount = countLetters(test);
  let origCount = countLetters(original);

  let testCountKeys = Object.keys(testCount);

  if (testCountKeys.length !== Object.keys(origCount).length) {
    return false;
  }

  return testCountKeys.every(letter => {
    return testCount[letter] === origCount[letter];
  });

}

function countLetters(word) {
  return [...word.toLowerCase().split('')].reduce((counts, letter) => {
    counts[letter] = counts[letter] || 0;
    counts[letter]++;
    return counts;
  }, {});

};
