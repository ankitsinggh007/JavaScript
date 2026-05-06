function Node(val) {
  this.val = val;
  this.left = null;
  this.right == null;
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Q1.levele order traversal
var levelOrder = function (root) {
  let result = [];
  if (!root) return result;
  let queue = [root];
  let pointer = 0;
  while (pointer < queue.length) {
    let size = queue.length;
    let level = [];

    for (pointer; pointer < size; pointer++) {
      let node = queue[pointer];
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
};

// Q2. max depth of tree

var maxDepth = function (root) {
  let depth = 0;

  function helper(root) {
    if (!root) return 0;
    let left = helper(root.left);
    let right = helper(root.right);

    return Math.max(left, right) + 1;
  }

  return helper(root);
};
//Q3.diamater of binary tree
var diameterOfBinaryTree = function (root) {
  function helper(root) {
    if (!root) return [0, 0]; //[dia,longest]

    let left = helper(root.left);
    let right = helper(root.right);

    let longestPath = Math.max(left[1], right[1]) + 1;
    let maxDia = Math.max(left[0], right[0], left[1] + right[1]);

    return [maxDia, longestPath];
  }

  return helper(root)[0];
};
// Q4.zig-zag traversal

var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let result = [];

  let pointer = 0;
  while (queue.length > pointer) {
    let size = queue.length;
    let level = [];
    for (pointer; pointer < size; pointer++) {
      let node = queue[pointer];
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (result.length % 2 !== 0) {
      level.reverse();
    }
    result.push(level);
  }
  return result;
};
//Q5.right-side view
var rightSideView = function (root) {
  let queue = [root];
  let result = [];
  if (!root) return result;
  let pointer = 0;
  while (queue.length > pointer) {
    let size = queue.length;
    let level = [];

    for (pointer; pointer < size; pointer++) {
      let node = queue[pointer];
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level.at(-1));
  }

  return result;
};
//Q6.Valid BST or not
var isValidBST = function (root) {
  function helper(root, min = -Infinity, max = Infinity) {
    if (!root) return true;

    if (root.val >= max || root.val <= min) return false;

    let leftTree = helper(root.left, min, root.val);
    let rightTree = helper(root.right, root.val, max);
    return leftTree && rightTree;
  }
  return helper(root);
};
//Q7.find kth smallest value in BST

var kthSmallest = function (root, k) {
  let val = 0;
  function helper(root) {
    if (!root) return;

    helper(root.left);
    k--;
    if (k === 0) val = root.val;
    helper(root.right);
  }
  helper(root);
  return val;
};

//Q8.pathsum in target sum
var hasPathSum = function (root, targetSum) {
  function helper(root, targetSum) {
    if (root?.val === targetSum && !root.left && !root.right) return true;
    if (!root) return false;

    let left = helper(root.left, targetSum - root.val);
    let right = helper(root.right, targetSum - root.val);
    return left || right;
  }
  return helper(root, targetSum);
};

//Q9. find LCA of p and q

function findLCA(root, p, q) {
  if (!root) return null;
  if (root === p || root === q) return root;

  let left = findLCA(root.left, p, q);
  let right = findLCA(root.right, p, q);
  if (left && right) return root;
  else if (left) return left;
  else if (right) return right;
}

//Q9. Distance between two node in binary tree

function findDistance(root, p, q) {
  let LCA = findLCA(root, p, q);
  function lcaToNode(root, p, val = 0) {
    if (!root) return null;
    if (root === p) return val;
    let left = lcaToNode(root.left, p, val + 1);
    let right = lcaToNode(root.right, p, val + 1);

    return left !== null ? left : right;
  }
}

// Q10. level order traversal of n-ary tree

function Node(val, children) {
  this.val = val;
  this.children = children;
}

var levelOrder = function (root) {
  let result = [];
  if (!root) return result;
  let queue = [root];
  let pointer = 0;
  while (pointer < queue.length) {
    let size = queue.length;
    let level = [];

    for (pointer; pointer < size; pointer++) {
      let node = queue[pointer];
      level.push(node.val);
      for (let child of node.children) {
        if (child) queue.push(child);
      }
    }

    result.push(level);
  }

  return result;
};
