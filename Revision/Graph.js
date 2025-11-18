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

  /* Detect cycle in undirected graph */
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
console.log("hi");

/* toposort */
function topoSort(V, edges) {
  // code here
  if (V === 0) return true;
  let graph = new Map();
  for (let i = 0; i < V; i++) graph.set(i, []);

  for (let [u, v] of edges) {
    graph.get(u).push(v);
    graph.get(v).push(u);
  }
  // let visited=new Set();
  let toposort = [];
  let indegree = new Array(V).fill(0);
  for (let [u, v] of edges) {
    indegree[v]++;
  }
  let Q = [];
  for (let i = 0; i < V; i++) {
    if (indegree[i] === 0) Q.push(i);
  }
  // if(Q.length===0) return false;
  while (Q.length > 0) {
    let node = Q.shift();
    toposort.push(node);

    for (let nei of graph.get(node)) {
      indegree[nei]--;
      if (indegree[nei] === 0) Q.push(nei);
    }
  }
  return toposort;
}

/* Detect cycle in DAG */
function isCyclic(V, edges) {
  let graph = new Map();

  for (let i = 0; i < V; i++) graph.set(i, []);
  for (let [u, v] of edges) {
    graph.get(u).push(v);
  }
  let indegree = new Array(V).fill(0);
  for (let [u, v] of edges) {
    indegree[v]++;
  }
  let Q = [];
  for (let i = 0; i < V; i++) {
    if (indegree[i] === 0) Q.push(i);
  }
  let topo = [];
  while (Q.length > 0) {
    let node = Q.shift();
    topo.push(node);
    for (let nei of graph.get(node)) {
      indegree[nei]--;
      if (indegree[nei] === 0) Q.push(nei);
    }
  }

  return topo.length !== V ? true : false;
}
/* You are given an undirected graph with n nodes labeled 0 to n-1, represented by a 0-indexed array graph of length n, where graph[i] is a list of nodes that node i is connected to. Determine whether the graph is bipartite. A graph is bipartite if its nodes can be divided into two disjoint sets such that every edge connects a node in one set to a node in the other set (i.e., no edge connects two nodes in the same set).

Return true if and only if the graph is bipartite.

Constraints (typical LeetCode):

1 <= graph.length == n <= 100
0 <= graph[i].length < n
0 <= graph[i][j] <= n - 1
graph[i] does not contain i (no self-loops)
There are no duplicate edges: if j is in graph[i], then i is not listed multiple times for j.
The graph may be disconnected; edges are undirected. */

function isBiperaite(V,edges){
  let graph=new Map();
  for(let i=0;i<V;i++)graph.set(i,[]);
  for(let [u,v] of edges){
    graph.get(u).push(v);
    graph.get(v).push(u);
  }
  //we go for coloring the graph using bfs
  let color=new Array(V).fill(-1);
  //-1 means uncolored
  //0 and 1 will be our two colors
  let Q=[];
  while(Q.length>0){
    let node=Q.shift();
    for(let nei of graph.get(node)){
      if(color[nei]===-1){
        //not colored
        color[nei]=1-color[node];//assign opposite color
        Q.push(nei);
      }else if(color[nei]===color[node]){
        //conflict in coloring
        return false;
      }
    }
  }
  return true;  
}
/*Clone Graph*/
  function cloneGraph(graph){
    let clone=new Map();

    function helper(i=0){
        if(!graph.has(i)) return null;
        if(mp.has(graph(i))) return mp.get(graph(i));
        let newNode={val:graph(i).val,neighbors:[]};
        mp.set(graph(i),newNode);
        for(let nei of graph(i).neighbors){
            newNode.neighbors.push(helper(nei.val));
        }
        return newNode; 
          
    }
  }