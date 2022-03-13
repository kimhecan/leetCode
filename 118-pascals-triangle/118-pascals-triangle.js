/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let list = [[1]];
    for(let i=1; i<numRows; i++) {
        let newList = new Array(i+1).fill(1);
        for(let j=1; j<newList.length; j++) {
            let prevArray = list[i-1];
            if(j > 0 && j < newList.length -1) {
                newList[j] = prevArray[j-1] + prevArray[j]
            }
        }
        list.push(newList);
    }
    return list;
};