function buildGraph(n, edges) {
  let mp = new Map();
  for (let i = 0; i < n; i++) mp.set(i, []);
  for (let [u, v] of edges) {
    mp.get(u).push(v);
  }
  return mp;
}

// # DFS On Grid
/* Number of Island */
var numIslands = function (grid) {
  let r = grid.length;
  let c = grid[0].length;
  let count = 0;
  let v = Array.from({ length: r }, () => new Array(c).fill(false));
  let dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] === "1" && !v[i][j]) {
        dfs(i, j);
        count++;
      }
    }
  }
  function dfs(i, j) {
    v[i][j] = true;

    for (let [dx, dy] of dirs) {
      let x = dx + i;
      let y = dy + j;

      if (x >= 0 && y >= 0 && x < r && y < c && !v[x][y] && grid[x][y] === "1")
        dfs(x, y);
    }
  }

  return count;
};
// # BFS On Grid
/* Orange Rotting */
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

//isCycle in unDirected Graph
function isCycle(V, edges) {
  // Code here

  let graph = new Map();
  for (let i = 0; i < V; i++) graph.set(i, []);

  for (let [u, v] of edges) {
    graph.get(v).push(u);
    graph.get(u).push(v);
  }
  let v = new Set();
  for (let i = 0; i < V; i++) {
    if (!v.has(i)) {
      if (isCycle(i, -1)) return true;
    }
  }

  function isCycle(i, parent) {
    v.add(i);

    for (let nei of graph.get(i)) {
      if (v.has(nei) && nei !== parent) return true;
      else if (!v.has(nei)) {
        if (isCycle(nei, i)) return true;
      }
    }
    return false;
  }

  return false;
}
// function topoSort(n,edges){

//     let inDegree=new Array(n).fill(0);
//     let graph=buildGraph(n,edges);
//     for(let [u,v] of edges){
//         inDegree[v]++;
//     }
//     let Q=[];
//     for(let i=0;i<n;i++){
//         if(inDegree[i]===0) Q.push(i);
//     }
//     let topoOrder=[];
//     for(let i=0;i<Q.length;i++){
//         let node=Q[i];
//         topoOrder.push(node);
//         for(let nei of graph.get(node)){
//             inDegree[nei]--;
//             if(inDegree[nei]===0) Q.push(nei);
//         }
//     }
//     return topoOrder; ;

// }

// function DirectedCycle(n,edges){
//     let topoOrder=topoSort(n,edges);
//     return topoOrder.length!==n;
// }

// function DirectedCycleUsingDFS(n,edges){
//     let graph=buildGraph(n,edges);
//     let v=new Set();
//     let path=new Set();
//     for(let i=0;i<n;i++){
//         if(!v.has(i)){
//             if(dfs(i,v,path,graph)) return true;
//         }
//     }
//     return false;

//     function dfs(node){
//         v.add(node);
//         path.add(node);
//         for(let nei of graph.get(node)){
//             if(!v.has(nei)){
//                 if(dfs(nei)) return true;
//             }else if(path.has(nei))return true;
//         }
//         path.delete(node);
//         return false;
//     }
// }
// let n=4;
// let edges=[[0,1],[0,2],[1,2],[2,0],[2,3],[3,3]];
// console.log(topoSort(n,edges));
// console.log(DirectedCycle(n,edges));
// console.log(DirectedCycleUsingDFS(n,edges));
