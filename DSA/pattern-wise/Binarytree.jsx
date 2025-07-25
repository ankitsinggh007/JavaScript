
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
