/*Question 1:
Given the root of a binary tree, return its right side view.
The right side view contains the values of the nodes you can see when looking at the tree from the right side, from top to bottom.
Example:
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4] */
var rightSideView = function (root) {
  if (!root) return [];
  let stack = [root];
  let level = [root];

  let left = [];
  let pointer = 0;
  while (pointer !== level.length) {
    let lastNode = level.at(-1);
    left.push(lastNode?.val);
    let size = level.length;
    for (pointer; pointer < size; pointer++) {
      let node = level[pointer];
      if (node?.left) level.push(node?.left);
      if (node?.right) level.push(node?.right);
    }
  }

  return left;
};
/*Question 2:
Given the root of a binary tree, determine whether it is symmetric around its center.
Example:
Input: root = [1,2,2,3,4,4,3]
Output: true */
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return;
  let helper = (rootA, rootB) => {
    if (!rootA && !rootB) return true;
    if (rootA?.val !== rootB?.val) false;

    return (
      rootA?.val === rootB?.val &&
      helper(rootA?.left, rootB?.right) &&
      helper(rootA?.right, rootB?.left)
    );
  };
  return helper(root?.left, root?.right);
};
/*Given the root of a binary tree, find the maximum path sum.
A path is any sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them.
 A node can appear at most once in the path. The path does not need to pass through the root.
Example:
Input: root = [1,2,3]
Output: 6 */
var maxPathSum = function (root) {
  let maxPathSum = -Infinity;
  function helper(root) {
    if (!root) return 0;

    let left = helper(root.left);
    let right = helper(root.right);

    let path = Math.max(left, right, 0);

    maxPathSum = Math.max(left + right + root.val, maxPathSum, path + root.val);

    return path + root.val;
  }
  helper(root);
  return maxPathSum;
};
