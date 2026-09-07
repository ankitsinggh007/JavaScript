// comit message:-practice:set-9 p-I
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
