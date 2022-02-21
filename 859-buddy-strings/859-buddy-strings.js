/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if(s.length !== goal.length) return false
    const sList = [];
    const goalList = [];
    for(let i=0; i<s.length; i++) {
        if(s[i] === goal[i]) continue;
        sList.push(s[i]);
        goalList.push(goal[i])
    }
    if(sList.length === 2 && goalList.length === 2 && sList[0] === goalList[1] && sList[1] === goalList[0]) return true;
    
    const map = s.split('').reduce((acc, cur) => {
        return acc.get(cur) ? acc.set(cur, acc.get(cur) + 1) : acc.set(cur, 1);
    }, new Map());
    let isOverOne = false
    for (const value of map.values()) {
        if(value >= 2) isOverOne = true
    }
    if(isOverOne && sList.length === 0) return true;
    
    return false
};