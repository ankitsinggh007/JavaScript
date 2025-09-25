
function buildGraph(n,edges){

    let mp=new Map();
    for(let i=0;i<n;i++) mp.set(i,[]);
    for(let [u,v] of edges){
        mp.get(u).push(v);
    }
    return mp;

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