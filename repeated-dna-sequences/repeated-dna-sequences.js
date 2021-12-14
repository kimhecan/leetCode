/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const firstSaveSet = new Set();
    const secondSaveSet = new Set();
    
    if(s.length < 10) return [];
    
    for(let i=0; i<=s.length-10; i++) {
        if(firstSaveSet.has(s.slice(i, i+10))) secondSaveSet.add(s.slice(i, i+10))
        else firstSaveSet.add(s.slice(i, i+10))
    }
    
    return Array.from(secondSaveSet);
};