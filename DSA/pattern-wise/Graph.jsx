// implementation of graph
// using adjancey list
let edges=[[0,5],[0,1],[0,2],[2,0],[2,3],[5,0],[1,0],[3,2],[3,4]];


let graph=new Map();

for(let i=0;i<edges.length;i++){

    let [key,value]=edges[i];
    graph.set(key,graph.get(key)?graph.get(key).push(value):[value]);

}

