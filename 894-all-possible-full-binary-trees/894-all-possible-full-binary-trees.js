/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    if(n === 1) return [new TreeNode(0)]
    if(n % 2 === 0) return [];
    const result = [];
    // 3부터 시작
    for(let i=1; i<n-1; i+=2) {
        let left = allPossibleFBT(i);
        let right = allPossibleFBT(n-i-1);
        for(let j=0; j<left.length; j++) {
            for(let k=0; k<right.length; k++) {
                let node = new TreeNode(0);
                node.left = left[j];
                node.right = right[k];
                result.push(node);
            }
        }
    }
    return result;
    
};