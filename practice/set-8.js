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
Q Shortest Path in Binary Matrix */
var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] == 1) return -1;
  let dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
    [1, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
  ];
  let Q = [];
  let row = grid.length;
  let col = grid[0].length;
  if (row === 1 && col === 1) return 1;
  Q.push([0, 0]);
  let distance = 1;
  while (Q.length) {
    distance++;
    let size = Q.length;
    for (let i = 0; i < size; i++) {
      let index = Q.shift();
      for (let [dx, dy] of dir) {
        let i = dx + index[0];
        let j = dy + index[1];

        if (i >= 0 && i < row && j >= 0 && j < col && grid[i][j] == "0") {
          if (i === row - 1 && j === col - 1) return distance;
          grid[i][j] = "1";
          Q.push([i, j]);
        }
      }
    }
  }

  return -1;
};

// clone graph
var cloneGraph = function (node) {
  if (!node) return null;
  let mp = new Map();
  let Q = [];

  mp.set(node, new Node(node.val));
  Q.push(node);
  while (Q.length) {
    let parentNode = Q.shift();
    for (let nei of parentNode.neighbors || []) {
      if (!mp.has(nei)) {
        mp.set(nei, new Node(nei.val));
        Q.push(nei);
      }
      mp.get(parentNode).neighbors.push(mp.get(nei));
    }
  }
  return mp.get(node);
};

//course schedule
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (num, pre) {
  let graph = new Map();
  for (let i = 0; i < num; i++) {
    graph.set(i, []);
  }
  for (let [u, v] of pre) {
    graph.get(v).push(u);
  }
  let indgree = Array(num).fill(0);
  let leafNode = [];

  for (let [u, v] of pre) {
    indgree[u]++;
  }
  let topo = [];

  for (let i = 0; i < num; i++) {
    if (indgree[i] === 0) leafNode.push(i);
  }
  let pointer = 0;
  while (pointer < leafNode.length) {
    let front = leafNode[pointer++];
    topo.push(front);
    let arr = graph.get(front);
    for (let i = 0; i < arr.length; i++) {
      indgree[arr[i]]--;
      if (indgree[arr[i]] === 0) leafNode.push(arr[i]);
    }
  }
  return topo.length === num;
};
