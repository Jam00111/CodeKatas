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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let result = [];
    return getZigZag(root, 0, result);
};

    var getZigZag = function(root, i, result){
    if(!root){
        return result;
    }else {
        if(result[i]){
            if(i%2 === 0){
                result[i].push(root.val);
            }else{
                result[i].unshift(root.val);
            }
        }else{
            result[i] = [root.val];
        }
        getZigZag(root.left, ++i, result);
        getZigZag(root.right, i++, result);
        
    }
        return result;
};
