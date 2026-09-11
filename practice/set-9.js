// Q Maximum Depth of Binary Tree
var maxDepth = function (root) {
  function helper(root) {
    if (!root) return 0;
    else return Math.max(helper(root?.left), helper(root?.right)) + 1;
  }
  return helper(root);
};

//Same Tree in Binary Tree
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

//Invert Binary tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var invertTree = function (root) {
  function helper(root) {
    if (!root) return null;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    helper(root.left);
    helper(root.right);
  }
  helper(root);
  return root;
};
//Q check Balanced Binary Tree
isBalanced = function (root) {
  function helper(root) {
    if (!root) return [true, 0];

    let [left, leftH] = helper(root.left);
    let [right, rightH] = helper(root.right);

    return [
      Math.abs(leftH - rightH) <= 1 && left && right,
      Math.max(leftH, rightH) + 1,
    ];
  }
  return helper(root)[0];
};
// Diameter of Binary Tree
var diameterOfBinaryTree = function (root) {
  function helper(root) {
    if (!root) return [0, 0];
    let [leftD, leftH] = helper(root.left);
    let [rightD, rightH] = helper(root.right);

    return [
      Math.max(leftD, rightD, leftH + rightH),
      Math.max(leftH, rightH) + 1,
    ];
  }
  return helper(root)[0];
};
// path Sum
var hasPathSum = function (root, targetSum) {
  let rootToLeaf = [];
  function helper(root, targetSum) {
    if (root && !root.left && !root.right) return root.val === targetSum;
    if (!root) return false;

    return (
      helper(root.left, targetSum - root.val) ||
      helper(root.right, targetSum - root.val)
    );
  }
  return helper(root, targetSum);
};
//7. Lowest Common Ancestor

var lowestCommonAncestor = function (root, p, q) {


    function helper(root) {
        if (!root) return null;
        if (root === p || root == q) return root;
        let left = helper(root.left);
        let right = helper(root.right);
        if (left && right) return root;
        return left ? left : right;

    }x

return helper(root);


};