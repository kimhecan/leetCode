/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const oneIndexs = [];
    for(let i=0; i<boxes.length; i++) {
        if(boxes[i] === "1") oneIndexs.push(i);
    };
    
    const answers = [];
    for(let i=0; i<boxes.length; i++) {
        answers.push(oneIndexs.reduce((acc,cur) => {
            return acc += Math.abs(i - cur);
        }, 0));
    };
    
    return answers;
};