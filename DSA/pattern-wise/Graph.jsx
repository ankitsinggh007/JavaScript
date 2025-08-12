
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
    let queue = [[sr, sc]];
    let dir = [[0, -1], [0, 1], [1, 0], [-1, 0]];
    let n = image[0].length;
    let m = image.length;
    let visited = Array.from({ length: m }, () => new Array(n).fill(false))
    visited[sr][sc]=true;
    let initialColor = image[sr][sc];
    image[sr][sc] = color;
    while (queue.length > 0) {
        let [x, y] = queue.shift();

        for (let i = 0; i < dir.length; i++) {
            let [dx, dy] = dir[i];
            let nx = x + dx;
            let ny = y + dy;
             if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
             
              if (visited[nx][ny]) continue;
              if (image[nx][ny] !== initialColor) continue;

      visited[nx][ny] = true;
      image[nx][ny] = color;
      queue.push([nx, ny]);


        }
    }
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