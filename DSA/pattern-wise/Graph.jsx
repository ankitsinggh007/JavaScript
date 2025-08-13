
// LeetCode 688. Knight Probability in Chessboard
// https://leetcode.com/problems/knight-probability-in-chessboard/
// Time Complexity: O(n^2 * k)
// Space Complexity: O(n^2 * k)
// Approach: BFS    
var knightProbability = function (n, k, row, column) {
    let possiblePath = [
        [1,2],[1,-2],[2,1],[2,-1],[-1,2],[-1,-2],[-2,-1],[-2,1]
    ];
    let queue = [];
    let res=0;
    queue.push([row, column,k,1]);

    while (queue.length > 0) {
        let [i, j,k,prob] = queue.shift();

        if(k==0){
            res+=prob;
            continue;
        }

        for(let [dx,dy] of possiblePath ){
            let r=i+dx;
            let c=j+dy;

            if(r>=0 && c>=0 && r<n && c<n ){
                queue.push([r,c,k-1,prob*1/8]);
            }
            
        }
        
    }
    
    return res;
};

// Example usage:
console.log(knightProbability(3, 2, 0, 0)); // Output: 0.0625
console.log(knightProbability(1, 0, 0, 0)); // Output: 1.0
console.log(knightProbability(8, 30, 6, 4)); // Output: 0.000000000000000
//flood fill

var floodFill = function (image, sr, sc, color) {
    let row = image.length
    let col = image[0].length
    let visited = Array.from({length:row}, () => new Array(col).fill(false));
 let dir=[[1,0],[0,1],[0,-1],[-1,0]];
 let org_color=image[sr][sc];

    function bfsOnGrid(x,y){

        let Q=[[x,y]];
        visited[x][y]=true;
        image[x][y]=color
        let front=0;
        while(Q.length>front){
            let [x,y]=Q[front++];

            for(let [u,v] of dir){
                let i=x+u;
                let j=y+v;

                if(i>=0 && j>=0 && i<row && j<col && !visited[i][j] && image[i][j]==org_color){
                    visited[i][j]=true;
                    image[i][j]=color;
                    Q.push([i,j]);
                }
            }
        }
    }
    bfsOnGrid(sr,sc);
    return image;
};
//graph on grid
// # of islands

var numIslands = function (grid) {
    let row = grid.length;
    let col = grid[0].length;
    let visited = Array.from({ length: row }, () => new Array(col).fill(false));
    let dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    function bfsOnGrid(x, y) {
        visited[x][y] = true;
        let Q = [[x, y]];
        let front = 0;

        while (Q.length > front) {
            let [x, y] = Q[front++];
            for (let [u, v] of dir) {

                let i = x + u
                let j = y + v
                if (i >= 0 && j >= 0 && i < row && j < col && !visited[i][j] && grid[i][j] == '1') {
                    visited[i][j] = true;
                    Q.push([i, j]);
                }

            }
        }
       

    }
     let count = 0;
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (!visited[i][j] && grid[i][j] === '1') {
                    bfsOnGrid(i, j);
                    count++;
                }
            }
        }










    return count;


};
// rotten oranges 
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let row = grid.length;
    let col = grid[0].length;
    let dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let fresh = 0;
    let  Q= [];
    let time = 0;
    // count # of fresh && push rotten in Stack
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == 2) Q.push([i, j]);
            else if (grid[i][j] == 1) fresh++;
        }
    }
    //edges-case
    //1.no fresh oranges
    console.log(fresh,"fresh")
    if (fresh == 0) return time;
    let pointer = 0;
    while (Q.length > pointer) {

        let size = Q.length ;
        let progressed = false;

        for (let k= pointer; k < size; k++) {
            let [x, y] = Q[pointer++];
            for (let [u, v] of dir) {
                let i = x + u;
                let j = y + v;
                // is valid
                if (i >= 0 && j >= 0 && i < row && j < col && grid[i][j] == 1) {
                    grid[i][j] = 2;
                    Q.push([i,j]);
                    fresh--;
                    progressed = true;
                }

            }
        }
        if(progressed)time++;
    }
    return fresh === 0 ? time : -1;
};