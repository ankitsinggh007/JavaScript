//🧪 MOCK OA-3 (SDE-1 Frontend | Indian Unicorns)

//LeetCode 102 — Binary Tree Level Order Traversal
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let result = [];
  console.log(queue, "");
  while (queue.length) {
    let len = queue.length;
    let level = [];
    for (let i = 0; i < len; i++) {
      let front = queue.shift();
      level.push(front.val);
      if (front.left) queue.push(front.left);
      if (front.right) queue.push(front.right);
    }
    result.push(level);
  }
  return result;
};

//take 30 min
// LeetCode 200 — Number of Islands
var numIslands = function (grid) {
  let dirs = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];
  let col = grid[0].length;
  let row = grid.length;
  console.log(col, row, "len");
  function dfs(i, j) {
    grid[i][j] = 0;

    for (let [u, v] of dirs) {
      let x = i + u;
      let y = j + v;

      if (x < row && y < col && x >= 0 && y >= 0 && grid[x][y] == 1) dfs(x, y);
    }

    return;
  }
  let count = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == 1) {
        dfs(i, j);
        count++;
      }
    }
  }

  return count;
};

// 40 min to solve
