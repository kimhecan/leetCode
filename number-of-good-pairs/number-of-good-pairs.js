/**
 * @param {number[]} nums
 * @return {number}
 */
var calculation = (num) => {
  let result = 0
  while(num !== 0) {
    result += num-1
    num -= 1;
  }
  return result;
}

var numIdenticalPairs = function(nums) {
  const numsObj = nums.reduce((acc, cur) => {
      acc[`${cur}`] ? acc[`${cur}`] += 1 : acc[`${cur}`] = 1;
      return acc;
  }, {});
  return Object.values(numsObj).reduce((acc, cur) => { 
    return calculation(cur) + acc; 
  }, 0);
};
