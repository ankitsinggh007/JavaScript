// 1) DFS Postorder “return-up + global update” (power template)

// Use when result depends on children (height, diameter, max-path, balanced, LCA-style, etc.)

// function solve(root) {
//   let ans = /* INIT (e.g., -Infinity, 0, true, null) */;

//   function dfs(node) {
//     if (!node) return /* BASE for return-up (e.g., 0 / -Infinity / true / null) */;

//     const L = dfs(node.left);
//     const R = dfs(node.right);

//     // ---- compute at node using children ----
//     // const through = /* combine(L, R, node.val) */;
//     // ans = /* update global answer with through (and/or L, R, node.val) */;

//     // ---- what to return to parent (single-branch best / boolean / node) ----
//     const ret = /* choose return-up from L, R, node.val */;
//     return ret;
//   }

//   dfs(root);
//   return ans;
// }


// Map it: “Depends on both subtrees? Postorder + return-up + maybe global ans.”

// 2) DFS Preorder “carry + backtrack path”

// Use when you push info downward (root→leaf sums/paths, serialization, collecting paths).

// function solve(root) {
//   let ans = /* INIT (array/list/number/etc.) */;

//   function dfs(node, carry, path) {
//     if (!node) return;

//     // ---- prework (enter node) ----
//     path.push(node.val);
//     const nextCarry = /* update from carry & node.val */;

//     // ---- leaf check (optional) ----
//     // if (!node.left && !node.right) { /* maybe update ans using path/nextCarry */ }

//     dfs(node.left, nextCarry, path);
//     dfs(node.right, nextCarry, path);

//     // ---- backtrack ----
//     path.pop();
//   }

//   dfs(root, /* INIT_CARRY */, []);
//   return ans;
// }


// Map it: “Need path(s) or pass context downward? Preorder carry + backtrack.”

// 3) BFS Level-Order (queue with level size)

// Use when work is level-wise (views, zigzag, averages per level, min depth, etc.)

// function solve(root) {
//   if (!root) return /* BASE */;
//   const q = [root];
//   let head = 0;
//   let level = 0;
//   // let out = []; // optional per-level result

//   while (head < q.length) {
//     const size = q.length - head;
//     // let bucket = []; // optional

//     for (let i = 0; i < size; i++) {
//       const node = q[head++];

//       // ---- per-node work (collect, compute, view logic) ----
//       // bucket.push(node.val);

//       if (node.left) q.push(node.left);
//       if (node.right) q.push(node.right);
//     }

//     // out.push(bucket); // optional
//     level++;
//   }

//   return /* out or computed answer */;
// }


// Map it: “By levels or ‘first/last seen on a level’? BFS with level loop.”

// 4) BFS with coordinate/index (for Top/Bottom/Vertical Views)

// Adds a column/hd index to BFS.

// function solve(root) {
//   if (!root) return /* BASE */;
//   const q = [[root, 0]]; // [node, col]
//   let head = 0;
//   const colMap = new Map(); // col -> value(s)
//   let minCol = 0, maxCol = 0;

//   while (head < q.length) {
//     const [node, col] = q[head++];

//     // ---- choose top/bottom/vertical behavior ----
//     // Top view: if (!colMap.has(col)) colMap.set(col, node.val);
//     // Bottom view: colMap.set(col, node.val);
//     // Vertical order: (colMap.get(col) || []).push(node.val);

//     minCol = Math.min(minCol, col);
//     maxCol = Math.max(maxCol, col);

//     if (node.left) q.push([node.left, col - 1]);
//     if (node.right) q.push([node.right, col + 1]);
//   }

//   // Build ordered result from minCol..maxCol
//   // const res = [];
//   // for (let c = minCol; c <= maxCol; c++) res.push(colMap.get(c));
//   return /* res */;
// }


// Map it: “Any ‘view’ using horizontal distance? BFS + (node, col).”

// 5) Iterative Traversals (fast drop-ins)

// Inorder (L-N-R) – validation, BST ops:

// function inorder(root, visit) {
//   const st = [];
//   let cur = root;
//   while (cur || st.length) {
//     while (cur) { st.push(cur); cur = cur.left; }
//     const node = st.pop();
//     visit(node);
//     cur = node.right;
//   }
// }


// Preorder (N-L-R) – “build as you go”:

// function preorder(root, visit) {
//   if (!root) return;
//   const st = [root];
//   while (st.length) {
//     const node = st.pop();
//     visit(node);
//     if (node.right) st.push(node.right);
//     if (node.left) st.push(node.left);
//   }
// }


// Postorder (L-R-N) – two-stack (simple, reliable):

// function postorder(root, visit) {
//   if (!root) return;
//   const s1 = [root], s2 = [];
//   while (s1.length) {
//     const n = s1.pop();
//     s2.push(n);
//     if (n.left) s1.push(n.left);
//     if (n.right) s1.push(n.right);
//   }
//   while (s2.length) visit(s2.pop());
// }


// // Map it: “Need exact order only? Use iterative traversals.”

/*
Level order traversal in binary tree
*/
var levelOrder = function (root) {
    if (!root) return [];
    let ans = [];
    let Q = [root];
    while (Q.length) {

        let size = Q.length;
        let temp = []

        for (let i = 0; i < size; i++) {
            let node = Q.shift();
            temp.push(node.val);
            if (node.left) Q.push(node.left)
            if (node.right) Q.push(node.right)
        }
        ans.push([...temp]);

    }

    return ans;

};
// one-liner: apply bfs template above with per-level bucket
////////////////////////////////////////////////////////
/*
Zigzag Level order traversal in binary tree
*/
var zigzagLevelOrder = function (root) {

    if (!root) return [];
    let ans = [];
    let Q = [root];
    let reverse = false;
    while (Q.length) {

        let size = Q.length;
        let temp = []

        for (let i = 0; i < size; i++) {
            let node = Q.shift();
            temp.push(node.val);
            if (node.left) Q.push(node.left)
            if (node.right) Q.push(node.right)
        }
        if (reverse) {
            ans.push([...temp.reverse()]);
            reverse = false;
        }
        else {
            ans.push([...temp]);
            reverse = true;
        }


    }

    return ans

};
