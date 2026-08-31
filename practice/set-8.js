//Q1 level order traversal of binary tree
var levelOrder = function (root) {
  if (!root) return [];
  let Q = [root];
  let result = [];
  let pointer = 0;
  while (pointer < Q.length) {
    let size = Q.length;
    let level = [];
    for (pointer; pointer < size; pointer++) {
      let node = Q[pointer];
      if (node?.left) Q.push(node.left);
      if (node?.right) Q.push(node.right);
      level.push(node.val);
    }

    result.push(level);
  }
  return result;
};

//Q right side view  of binary tree

var rightSideView = function (root) {
  if (!root) return [];
  let Q = [root];
  let result = [];
  let pointer = 0;
  while (pointer < Q.length) {
    let size = Q.length;
    let last;
    for (pointer; pointer < size; pointer++) {
      let node = Q[pointer];
      if (node?.left) Q.push(node.left);
      if (node?.right) Q.push(node.right);
      last = node.val;
    }

    result.push(last);
  }
  return result;
};

/*
Q3: Number of Islands
Given a grid:
grid = [
  ["1","1","0","0"],
  ["1","0","0","1"],
  ["0","0","1","1"],
  ["0","0","0","0"]
]
"1" means land, "0" means water.
Return number of islands.
An island is connected land horizontally/vertically, not diagonally.
For this grid, answer is:2
*/
