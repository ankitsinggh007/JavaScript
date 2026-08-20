/*function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
} */

/*Given the root of a binary tree, return its maximum depth.
The maximum depth is the number of nodes along the longest path from the root down to the farthest leaf node.
Example:
Input: root = [3,9,20,null,null,15,7]
Output: 3 */

var maxDepth = function (root) {
  function helper(root) {
    if (!root) return 0;
    else if (!root?.left && !root?.right && root) return 1;

    return 1 + Math.max(helper(root?.left), helper(root?.right));
  }

  return helper(root);
};

/*Question 2:
Given the root of a binary tree, determine if it is height-balanced.
A binary tree is height-balanced if the depth of the two subtrees of every node never differs by more than 1.
Example:
Input: root = [3,9,20,null,null,15,7]
Output: true */
var isBalanced = function (root) {
  function helper(root) {
    if (!root) return [0, true];
    let left = helper(root.left);
    let right = helper(root.right);

    let h = Math.max(left[0], right[0]) + 1;

    let isB = left[1] && right[1] && Math.abs(left[0] - right[0]) <= 1;

    return [h, isB];
  }

  return helper(root)[1];
};
/*Question 3:
Given the root of a binary search tree and an integer k, return the kth smallest value in the tree.
Example:
Input: root = [3,1,4,null,2], k = 1
Output: 1 */
var kthSmallest = function (root, k) {
  let ans = -1;
  function inOrder(root) {
    if (!root) return;

    inOrder(root?.left);
    k--;
    if (k === 0) ans = root.val;
    inOrder(root?.right);
  }
  inOrder(root);

  return ans;
};
/*Question 4:
Given the root of a binary tree, return the lowest common ancestor (LCA) of two given nodes p and q.
The lowest common ancestor is the lowest node in the tree that has both p and q as descendants. A node can be a descendant of itself.
Example:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3 */
var lowestCommonAncestor = function (root, p, q) {
  function helper(root) {
    if (!root) return null;
    if (root === p || root === q) return root;
    let left = helper(root?.left);
    let right = helper(root?.right);
    if (left && right) return root;
    if (left) {
      return left;
    } else {
      return right;
    }
  }
  return helper(root);
};
