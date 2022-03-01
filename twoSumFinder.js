/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 * My solution has a run time of n +n so it is linear
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

  let result = [];
  let k = 0;
  let numMap = new Map();
  nums.map((val, i) => {
    numMap.set(val, i);
  });
  for (let k = 0; k < nums.length; k++) {
    if (numMap.has(target - nums[k]) & k !== numMap.get(target - nums[k])) {
      return [numMap.get(target - nums[k]), k];
    }
  }
  return result;

};
