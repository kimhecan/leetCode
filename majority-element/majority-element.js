/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let result = 0;
    nums.reduce((acc, cur) => {
        acc[cur] ? acc[cur] += 1 : acc[cur] = 1;
        if(acc[cur] > Math.floor(nums.length / 2)) {
            result = cur;
        }
        return acc;
    }, {});
    return result;
};