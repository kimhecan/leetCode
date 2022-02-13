/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const unsortedMap = s.split('').reduce((acc, cur) => {
        return acc.get(cur) ? acc.set(cur, acc.get(cur) + 1) : acc.set(cur, 1);
    }, new Map());
  
  const sortedMap = new Map([...unsortedMap].sort((a, b) => b[1] - a[1]));
  
  const resultList = []
  sortedMap.forEach((value, key) => {
    resultList.push(...new Array(value).fill(key));
  })
  
  return resultList.join('');
  
};