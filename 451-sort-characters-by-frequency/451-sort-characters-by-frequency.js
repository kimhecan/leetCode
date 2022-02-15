/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    
    // Map객체 생성
   const unsortedMap = s.split('').reduce((acc, cur) => {
       return acc.get(cur) ? acc.set(cur, acc.get(cur) + 1) : acc.set(cur, 1);
    }, new Map());
  
  
  // array prototype 빌려서 sort로 많은 순 정렬
  const sortedMap = new Map([...unsortedMap].sort((a, b) => b[1] - a[1]));
  
  // spread로 push
  const resultList = []
  sortedMap.forEach((value, key) => {
    resultList.push(...new Array(value).fill(key));
  })
  
  return resultList.join('');
  
};