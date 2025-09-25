
function buildGraph(n,edges){

    let mp=new Map();
    for(let i=0;i<n;i++) mp.set(i,[]);
    for(let [u,v] of edges){
        mp.get(u).push(v);
    }
    return mp;

}
