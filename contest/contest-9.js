function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}
/* Q1.Given the root of a binary tree, return its level order traversal as an array of arrays.
 Each inner array should contain the node values at that level from left to right.
Example:
Input: root = 
Output: [[3],[9,20],[15,7]]
Example:
Input: root = [1]
Output: [[1]]
Function signature:
function levelOrder(root) {}
*/
let levelOrder = (root) => {
  let result = [];
  if (!root) return result;
  let level = [root];

  while (level.length) {
    let size = level.length;

    let ans = [];
    for (let i = 0; i < size; i++) {
      let node = level.shift();
      ans.push(node.val);
      if (node?.left) level.push(node.left);
      if (node?.right) level.push(node.right);
    }

    result.push(ans);
  }

  console.log(result, "res");
};
console.log(levelOrder([3, 9, 20, null, null, 15, 7]));
/*Question 2:
Given the root of a binary tree and an integer targetSum, return true if the tree has any root-to-leaf path such that adding up all the values along the path equals targetSum. Otherwise, return false.

A leaf is a node with no children.

Example:

Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true */

var hasPathSum = function (root, targetSum) {
  let helper = (root, target) => {
    if (!root) {
      return false;
    }
    if (!root.left && !root.right && target === root.val) return true;

    target -= root.val;

    return helper(root?.left, target) || helper(root?.right, target);
  };

  return helper(root, targetSum);
};
/*
Question 3:
Given the root of a binary tree, determine whether it is a valid binary search tree.

A BST is valid if:

the left subtree of a node contains only nodes with values strictly less than the node’s value
the right subtree contains only nodes with values strictly greater than the node’s value
both left and right subtrees are also valid BSTs

Example:

Input: root = [2,1,3]
Output: true
*/

var isValidBST = function (root) {
  let helper = (root, left = -Infinity, right = Infinity) => {
    if (!root) return true;
    if (root.val <= left || root.val >= right) return false;
    let leftTree = helper(root?.left, left, root.val);
    let rightTree = helper(root?.right, root.val, right);
    return leftTree && rightTree;
  };
  return helper(root);
};
/*
Question 4:
Given the root of a binary tree, return the diameter of the tree.
The diameter is the length of the longest path between any two nodes in the tree.
This path may or may not pass through the root.

The length of a path is the number of edges between the nodes.

Example:

Input: root = [1,2,3,4,5]
Output: 3
*/
var diameterOfBinaryTree = function (root) {
  let helper = (root) => {
    if (!root) return [0, 0]; // [maxDiaInEdges, heightInNodes]

    let left = helper(root.left);
    let right = helper(root.right);

    let maxDia = Math.max(left[1] + right[1], left[0], right[0]);
    let height = Math.max(left[1], right[1]) + 1;

    return [maxDia, height];
  };

  return helper(root)[0];
};
