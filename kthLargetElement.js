/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

  let largest = '0';

  nums.forEach(number => {
    let str = String(number);
    if (str.length > largest.length) {
      largest = str;
    }
  });


  let sortedArr = radix(nums, largest);
  return sortedArr[sortedArr.length - k];
};

var radix = function(arr, largest) {
  for (let i = 0; i < largest.length; i++) {
    let buckets = Array.from({
      length: 11
    }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let num = getNum(arr[j], i);
      if (arr !== undefined) {
        if (num === '-') {
          buckets[0].unshift(arr[j]);
        } else {
          buckets[num].push(arr[j]);
        }
      }
    };
    arr = buckets.flat();
  };

  return arr;
};

var getNum = function(number, i) {
  const str = String(number);
  let end = str.length - 1;
  const num = str[end - i];
  if (num === undefined) {
    return 0;
  } else {
    console.log(num);
    return num;
  }
};
