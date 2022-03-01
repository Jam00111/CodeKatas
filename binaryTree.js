/**
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1


[5,1,4,null,null,3,6]


Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }

 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {


  return validate(root, null, null);
};

var validate = function(node, left, right) {

  if (node === null || node === undefined) {
    return true;
  }

  if ((left !== null && node.val <= left) || (right !== null && node.val >= right)) {
    return false
  }

  return validate(node.right, node.val, right) && validate(node.left, left, node.val);
};
