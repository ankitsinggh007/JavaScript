
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
