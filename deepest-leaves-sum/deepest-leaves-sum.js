/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    
    let queue = [root];
    let sum = 0;
    while(queue.length > 0) {
        let qLen = queue.length;
        let tempSum = 0;
        let isDeepest = true;
        for(let i=0; i<qLen; i++) {
            let popNode = queue.shift();            
            if(popNode.left) queue.push(popNode.left);
            if(popNode.right) queue.push(popNode.right);
            if(!popNode.left && !popNode.right && isDeepest) {
                tempSum += popNode.val;
            };
            if(popNode.left || popNode.right) {
                tempSum = 0;
                isDeepest = false;
            };
        }
        sum += tempSum;

    }
    
    return sum;
    
    
};