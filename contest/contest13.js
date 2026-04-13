/*Question 1:
Given a reference of a node in a connected undirected graph, return a deep copy of the graph.
Each node contains:
val
neighbors
Example:
class Node {
  constructor(val, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
} */

function cloneGrap(root) {
  let mp = new Map();

  function helper(root) {
    if (mp.has(root)) return mp.get(root);

    let node = new Node(root.val);

    for (let nei of root.neighbors | []) {
      node.neighbors.push(nei);
    }
    return node;
  }
}

/*Question-2
Validate a given graph is tree or not .
*/

function validTree(n, edges) {
  if (edges.length !== n - 1) return false;

  let graph = new Map();
  for (let i = 0; i < n; i++) graph.set(i, []);

  for (let [u, v] of edges) {
    graph.get(u).push(v);
    graph.get(v).push(u);
  }

  let visited = new Set();

  function hasCycle(node, parent) {
    visited.add(node);

    for (let nei of graph.get(node)) {
      if (visited.has(nei)) {
        if (nei !== parent) return true;
      } else {
        if (hasCycle(nei, node)) return true;
      }
    }

    return false;
  }

  return !hasCycle(0, -1);
}
/*
Question 3:
Given an undirected graph with n nodes labeled from 0 to n - 1 and an array edges, return true if the graph contains a cycle, otherwise return false.

Example:

Input: n = 3, edges = [[0,1],[1,2]]
Output: false
*/
function hasCycle(n, edges) {
  let graph = new Map();

  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  for (let [u, v] of edges) {
    graph.get(u).push(v);
    graph.get(v).push(u);
  }

  let visited = new Set();

  function dfs(node, parent) {
    visited.add(node);

    for (let nei of graph.get(node)) {
      if (visited.has(nei)) {
        if (nei !== parent) return true;
      } else {
        if (dfs(nei, node)) return true;
      }
    }

    return false;
  }

  for (let node = 0; node < n; node++) {
    if (!visited.has(node)) {
      if (dfs(node, -1)) return true;
    }
  }

  return false;
}
