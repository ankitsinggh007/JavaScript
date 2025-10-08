/////////set-1//////////




//////////set-2//////////
/*
factorial   of n 
 */
  function factorial(n){
        if(n==0||n==1) return 1;
        return n*factorial(n-1);
    }
/*
Q2. Subsequences
*/
 function generate(str){
            let ans=[];
        function solve(i=0,res=""){
            if(i==str.length){
                ans.push(res);
                return ;
            }
            
            solve(i+1,res+str[i]);
            solve(i+1,res);
        }
        solve()
        return ans ;
    }
/*
Q3. Phone Number Combinations ✅
*/
function combination(digits){
    let ans=[];
    let mp=new Map([
        [2,'abc'], [3,'def'], [4,'ghi'], [5,'jkl'],
        [6,'mno'], [7,'pqrs'], [8,'tuv'], [9,'wxyz']
    ]);
    function solve(start=0,res=''){
        if(start==digits.length){
            ans.push(res);
            return ;
        }
        let str=mp.get(+digits[start]);
        for(let i=0;i<str.length;i++){
            solve(start+1,res+str[i]);
        }  
    }
    solve()
    return ans;
}
//word ladder

var exist = function (board, word) {
    let row = board.length
    let col = board[0].length
    function dfs(i, j, idx = 0) {
        if (idx >= word.length) return true;
        if (i < 0 || i >= row || j < 0 || j >= col) return false;
        if (board[i][j] != word[idx]) return false;
        let temp = board[i][j];
        board[i][j] = '#';
        const found = dfs(i + 1, j, idx + 1) || dfs(i, j + 1, idx + 1) || dfs(i - 1, j, idx + 1) || dfs(i, j - 1, idx + 1);

        board[i][j] = temp;

        return found;

    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if(board[i][j]==word[0]){
            if(dfs(i,j)) return true;
            }
        }
    }
    return false;

};
//

function finPath(maze){
    let n=maze.length;
    let m=maze[0].length;
    let ans=[];
    function solve(i=0,j=0,res=''){
        if(i<0||j<0||i>=n||j>=m||maze[i][j]==0) return ;
        if(i==n-1&&j==m-1){
            ans.push(res);
            return ;
        }
        maze[i][j]=0;
        solve(i+1,j,res+'D');
        solve(i,j+1,res+'R');
        solve(i-1,j,res+'U');
        solve(i,j-1,res+'L');
        maze[i][j]=1;
    }
    solve();
    return ans
}