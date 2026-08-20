/*Question 1:
You are given an m x n grid of characters grid where each cell is either '1' (land) or '0' (water). Return the number of islands.
An island is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are surrounded by water.
Example:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1 
function numIslands(grid) {}
*/
var numIslands = function (grid) {
  let cnt = 0;
  let dir = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];
  let row = grid.length;
  let col = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === "1") {
        cnt++;
        dfs(i, j);
      }
    }
  }

  function dfs(i, j) {
    grid[i][j] = 0;

    for (let [dx, dy] of dir) {
      let x = i + dx;
      let y = j + dy;

      if (x >= 0 && y >= 0 && x < row && y < col && grid[x][y] === "1") {
        dfs(x, y);
      }
    }
  }
  return cnt;
};
/*Question 2:
You are given an image represented by an m x n integer grid image, where image[i][j] represents the pixel value of the image.

You are also given three integers: sr, sc, and color. Perform a flood fill starting from the pixel image[sr][sc].

To perform a flood fill:

Begin with the starting pixel
Change its color to color
Change the color of all connected pixels (4-directionally) that have the same original color

Return the modified image.

Example:

Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]] 
function floodFill(image, sr, sc, color) {}
*/
var floodFill = function (image, sr, sc, color) {
  let initialColor = image[sr][sc];
  let dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let col = image[0].length;
  let row = image.length;

  function dfs(i, j) {
    image[i][j] = color;
    for (let [dx, dy] of dir) {
      let x = dx + i;
      let y = dy + j;
      if (
        x >= 0 &&
        y >= 0 &&
        x < row &&
        y < col &&
        image[x][y] != color &&
        image[x][y] === initialColor
      )
        dfs(x, y);
    }
  }
  dfs(sr, sc);

  return image;
};
/*Question 3:
There are n courses labeled from 0 to n - 1. You are given an array prerequisites where prerequisites[i] = [a, b] means you must take course b before course a.

Return true if it is possible to finish all courses. Otherwise, return false.

Example:

Input: n = 2, prerequisites = [[1,0]]
Output: true
function canFinish(n, prerequisites) {}
*/
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

/*Question 4:
You are given an m x n grid where:

0 = empty cell
1 = fresh orange
2 = rotten orange

Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

Example:

Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
function orangesRotting(grid) {}
*/
var orangesRotting = function (grid) {
  let rotten = 0;
  let fresh = 0;
  let Q = [];

  let r = grid.length;
  let c = grid[0].length;

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] === 1) fresh++;
      if (grid[i][j] === 2) {
        Q.push([[i, j], 0]);
      }
    }
  }
  let dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let time = 0;
  while (Q.length > 0) {
    let [index, t] = Q.shift();
    time = t;
    let [i, j] = index;
    for (let [dx, dy] of dir) {
      let x = dx + i;
      let y = dy + j;

      if (x >= 0 && y >= 0 && x < r && y < c && grid[x][y] === 1) {
        grid[x][y] = 2;
        Q.push([[x, y], t + 1]);
        fresh--;
      }
    }
  }

  if (fresh === 0) return time;
  return -1;
};
