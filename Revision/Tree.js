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
/*
right-side view of binary tree
*/
var rightSideView = function(root) {
    if(!root) return [];
  let queue=[root];
        let ans=[];
        while(queue.length>0){
            ans.push(queue[queue.length-1].val);
            let size=queue.length;
            for(let i=0;i<size;i++){
                let node=queue.shift();
                
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
            }
        }
        return ans;


};
/*
preorder traversal of binary tree using iterative
 */
var preorderTraversal = function(root) {
    
    let ans=[];
    let curr=root;
    let stack=[];
    while(curr||stack.length){
        while(curr){
            ans.push(curr.val);
            stack.push(curr);
            curr=curr.left;
        }
        curr=stack.pop();
        curr=curr.right;
    }
    return ans;
};
/*
Inorder traversal of binary tree using iterative
*/
var inorderTraversal = function(root) {
    let ans=[];
    let curr=root;
    let stack=[];
    while(curr||stack.length){
        while(curr){
            stack.push(curr);
            curr=curr.left;
        }
        curr=stack.pop();
        ans.push(curr.val);
        curr=curr.right;
    }
    return ans;

};
/*
postorder traversal of binary tree using iterative
*/

///////////////////////// Properties and Basics ////////////////////////
/*
find max depth of binary tree
*/
var maxDepth = function(root) {
if(!root) return 0;
const left=maxDepth(root.left)    
const right=maxDepth(root.right)
let max=Math.max(left,right);

return (1+max);
};
/*
find diameter of binary tree
*/
var diameterOfBinaryTree = function(root) {
let ans=0;

function solve(node){
    if(!node) return 0;

    let leftHeight=solve(node.left);
    let rightHeight=solve(node.right);

    ans=Math.max((leftHeight+rightHeight),ans);

    return (1+Math.max(leftHeight,rightHeight));
}
 solve(root);
 return ans;
};
// allternative without using global variable:
function solve(node){
    if(!node) return [0,0];

    let [leftDia,leftHeight]=solve(node.left)
    let [rightDia,rightHeight]=solve(node.right);
    let through=leftHeight+rightHeight;
    const dia=Math.max(through,rightDia,leftDia);
    return [dia,1+Math.max(leftHeight,rightHeight)]
}
var diameterOfBinaryTree = function(root) {
    return solve(root)[0];
};
/*
is balanced binary tree
 */
var isBalanced = function(root) {
    
   function solve(root){
     if (!root) return 0;

   let lh=solve(root.left);
    let rh=solve(root.right);
     if(lh<0 || rh<0) return -1;
     if(Math.abs(lh-rh)<=1) return 1+Math.max(lh,rh);
     return -1 
   }
   return solve(root)>=0
};
//one-liner: as we get consition of unbalanced tree we return -1 -->wich implies that tree is unbalanced,and immediately bubble up -1.
/*
check does binary tree is symmetric
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true;

    function isMirror(n1,n2){
        if(!n1 && !n2) return true ;
        if(!n1 || !n2 ) return false;

        return n1.val==n2.val && isMirror(n1.left,n2.right) && isMirror(n1.right,n2.left);
    }
    
    return isMirror(root.left,root.right);

};
///////////////////////////////Path Based/////////////////////////////////////
/*
find path sum in binary tree
*/
var hasPathSum = function(root, ts) {
    if(!root) return false;
   if(!root.left && !root.right && root.val==ts)return true;
   
   return hasPathSum(root.left,ts-root.val)||hasPathSum(root.right,ts-root.val);
};
/*
find path -II
*/
 const pathSum = function(root, ts) {
    let ans=[];
    function dfs(root,ts,path=[]){
        if(!root) return ;
        ts-=root.val;
        path.push(root.val);
        if(!root.left && !root.right){
            if(ts==0)ans.push([...path]);
        }

        dfs(root.left,ts,path);
        dfs(root.right,ts,path);
        path.pop();
    }

    dfs(root,ts)
    return ans;
};
/*
find max path sum in binary tree
*/
var maxPathSum = function(root) {
  function dfs(node) {
    if (!node) return [0, -Infinity];     // [gainUp, best]
    const [Lg, Lb] = dfs(node.left);
    const [Rg, Rb] = dfs(node.right);
    const L = Math.max(0, Lg), R = Math.max(0, Rg);
    const gainUp = node.val + Math.max(L, R);
    const bestThrough = node.val + L + R;
    const best = Math.max(Lb, Rb, bestThrough);
    return [gainUp, best];
  }
  return dfs(root)[1];
};
/*
LCA in binary tree
*/
var lowestCommonAncestor = function(root, p, q) {
        if(!root) return null;    
        if(root==p||root==q) return root;

        let left=lowestCommonAncestor(root.left,p,q);
        let right=lowestCommonAncestor(root.right,p,q);
        
        if(left && right) return root;

        return left?left:right;

};
/*
LCA in binary search tree
*/
var lowestCommonAncestorBT = function(root, p, q) {
    
    return solve(root,p,q);
};
function solve(root,p,q){
    if(!root) return null;
    if(root==p||root==q) return root;
    let left=solve(root.left,p,q)
    let right=solve(root.right,p,q)
    if(left && right) return root;
    return left?left:right;
}
function solve2(root,p,q){
    if(!root) return null;

    if(root==p||root==q) return root;
    let rval=root.val,pval=p.val,qval=q.val;
    if(rval>pval && rval>qval){
        return solve2(root.left,p,q);
    }
    else if(rval<pval && rval<qval){
        return solve2(root.right,p,q);
    }else{
        return root;
    }
}
