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
var numIslands = function (grid) {
  let row = grid.length;
  let col = grid[0].length;
  let count = 0;
  let mp = new Map();

  let dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  function BFS(i, j) {
    mp.set(`${i}-${j}`);

    let Q = [[i, j]];
    let pointer = 0;
    while (pointer < Q.length) {
      let [i, j] = Q[pointer++];

      for (let k = 0; k < dir.length; k++) {
        let [x, y] = dir[k];
        let hor = i + x;
        let ver = j + y;
        if (
          hor >= 0 &&
          ver >= 0 &&
          hor < row &&
          ver < col &&
          grid[hor][ver] === "1" &&
          !mp.has(`${hor}-${ver}`)
        ) {
          Q.push([hor, ver]);
          mp.set(`${hor}-${ver}`);
        }
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (!mp.has(`${i}-${j}`) && grid[i][j] === "1") {
        BFS(i, j);
        count++;
      }
    }
  }
  return count;
};
/*Q Rotting Oranges
0 = empty cell
1 = fresh orange
2 = rotten orange
up, down, left, right
*/

function orangesRotting(grid) {
  let row = grid.length;
  let col = grid[0].length;
  let dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  let time = 0;
  let fresh = 0;
  let Q = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == "1") fresh++;
      if (grid[i][j] == "2") Q.push([i, j]);
    }
  }

  if (fresh === 0) return 0;

  while (Q.length && fresh > 0) {
    let size = Q.length;

    for (let i = 0; i < size; i++) {
      let [r, c] = Q.shift();
      for (let [dx, dy] of dir) {
        let x = r + dx;
        let y = c + dy;
        if (x >= 0 && x < row && y >= 0 && y < col && grid[x][y] == "1") {
          grid[x][y] = 2;
          fresh--;
          Q.push([x, y]);
        }
      }
    }
    time++;
  }

  return fresh === 0 ? time : -1;
}

/*
Q Shortest Path in Binary Matrix

*/
var shortestPathBinaryMatrix = function (grid) {
  let n = grid.length;
  if (grid[0][0] !== 0 || grid[n - 1][n - 1] !== 0) return -1;
  if (n === 1) return 1;
  let dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
    [1, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
  ];
  let visited = Array.from({ length: n }, () => new Array(n).fill(false));
  function bfs(i, j) {
    visited[i][j] = true;
    let Q = [[i, j]];
    let step = 1;

    while (Q.length > 0) {
      let size = Q.length;

      for (let k = 0; k < size; k++) {
        let [i, j] = Q.shift();
        if (i == n - 1 && j == n - 1) return step;
        for (let [dx, dy] of dirs) {
          let rx = i + dx;
          let ry = j + dy;
          if (rx >= 0 && rx < n && ry >= 0 && ry < n && !visited[rx][ry]) {
            if (grid[rx][ry] == 0) {
              // if(rx==n-1&&ry==n-1) return step;
              visited[rx][ry] = true;
              Q.push([rx, ry]);
            }
          }
        }
      }
      step++;
    }

    // console.log(order,"order")
    return -1;
  }
  return bfs(0, 0);
};
