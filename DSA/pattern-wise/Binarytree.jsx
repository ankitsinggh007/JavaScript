
class treeNode{
        constructor(val){
            this.val=val;
            this.left=null;
            this.right=null;
        }    
}

const myTree=new treeNode (50);
const leftTree=new treeNode(40);
leftTree.left=new treeNode(30)
leftTree.left.left=new treeNode(10)
leftTree.left.right=new treeNode(20)
myTree.left=leftTree;






function levelOrder(node){

    if(node==null) return ;
    let queue=[node];

    while(queue.length>0){
        let nod=queue.shift();
        console.log(nod.val,"he");

        if(nod.left){
            queue.push(nod.left)
        }
        if(nod.right){
            queue.push(nod.right)
        }
    }
return ;
}
levelOrder(myTree);
//------------------------------------//------------------------------------//------------------------------------//------------------------------------
// Binary level order traversale

var levelOrder = function (root) {
    let ans = [];

    if(!root) return ans;
    let queue = [root];
    while (queue.length > 0) {
        let level = [];
        let size = queue.length;
         for (let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        ans.push(level);

    }
    return ans;

};

console.log(levelOrder(myTree),"level order traversal ");
// zig-zag traversal
var zigzagLevelOrder = function (root) {

    if (!root) return [];

    let queue = [root];

    let ans = [];
    let n=0;
    while (queue.length > 0) {

        let level = [];
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let node=queue.shift();            
                level.push(node.val);
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        if(n%2!=0){
            ans.push(level.reverse())
        }else{
        ans.push(level);
        }
        n++;
    }
    return ans;
};
console.log(zigzagLevelOrder(myTree),"zigzag traversal");

//inroder Traversal

var inorderTraversal = function(root) {
    let ans=[];
    let stack=[];
    let curr=root;
    while(curr||stack.length){
        while(curr){
            stack.push(curr);
            curr=curr.left;
        }
        curr=stack.pop();
        ans.push(curr.val);
        curr=curr.right
    }
    return ans;
};
//preorder

var preorderTraversal = function(root) {
    let ansrec=[]; 
    let stack=[];
    let curr=root;
    while(curr || stack.length){
            while(curr){
                ansrec.push(curr.val);
                stack.push(curr);
                curr=curr.left;
            }
            curr=stack.pop();
            curr=curr.right;
    }
    return ansrec;
};
//[LC 104] Max Depth

var maxDepth = function (root) {
    if (!root) return 0;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return 1 + Math.max(left, right);
};
// [LC 101] Symmetric Tree
var isSymmetric = function(root) {

  function isSymmetric1(root1, root2) {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    if (root1.val !== root2.val) return false;

    return isSymmetric1(root1.left, root2.right) &&
           isSymmetric1(root1.right, root2.left);
}
return isSymmetric1(root,root);  
};
// [LC 100] Same Tree
var isSameTree = function(p, q) {
    
    if(!p && !q) return true ;
    if(!p || !q) return false;
    if(p.val !=q.val ) return false;

    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)

};
// [LC 226] Invert/Mirror Tree
var invertTree = function(root) {
    
    if(!root) return null;

    let temp=root.left;
    root.left=root.right;
    root.right=temp;
    invertTree(root.left);
    invertTree(root.right);
        return root;
};
// Size/Count Nodes
function CountNode(root){
        if(!root) return 0;
        
        return 1 + CountNode(root.left)+CountNode(root.right);
    }

    //bottom view
    function bottomView(root) {
    let queue = [[root, 0]];
    let mp = new Map();
    let [min, max] = [Infinity, -Infinity];
let i=0;
    while (i<queue.length ) {
         let [node, D] = queue[i++];

        mp.set(D, node); // always override
        if (node.left) queue.push([node.left, D - 1]);
        if (node.right) queue.push([node.right, D + 1]);
        min = Math.min(min, D);
        max = Math.max(max, D);
    }

    let ans = [];
    for (let i = min; i <= max; i++) {
        ans.push(mp.get(i).data); // assuming node.data exists
    }

    return ans;
}
//top view 
function topView(root) {
    let queue = [[root, 0]];
    let mp = new Map();
    let [min, max] = [Infinity, -Infinity];
let i=0;
    while (i<queue.length ) {
         let [node, D] = queue[i++];
        if(!mp.has(D))
        mp.set(D, node); // always override
        if (node.left) queue.push([node.left, D - 1]);
        if (node.right) queue.push([node.right, D + 1]);
        min = Math.min(min, D);
        max = Math.max(max, D);
    }

    let ans = [];
    for (let i = min; i <= max; i++) {
        ans.push(mp.get(i).data); // assuming node.data exists
    }

    return ans;
}
// left view of binary tree 
 function leftView(root){
        
        let queue=[root];
        let ans=[];
        while(queue.length>0){
            ans.push(queue[0].val);
            let size=queue.length;
            for(let i=0;i<size;i++){
                let node=queue.shift();
                
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
            }
        }
        return ans;
}
