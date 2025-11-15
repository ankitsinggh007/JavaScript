//////////set-2//////////
/*
/*Q1.factorial of n */
function factorial(n) {
  if (n === 0 || n === 1) return n;
  return factorial(n - 1) * n;
}
console.log(factorial(5));
/* Q2.find sum of n natural number*/
function firstN(n) {
  if (n == 1) return 1;
  return firstN(n - 1) + n;
}
let str = "Ankit";
console.log(firstN(10));
/* Q3.reverse string*/

function reverseString(input, i = input.length - 1, output = "") {
  if (i < 0) return output;

  return reverseString(input, i - 1, output + input[i]);
}
console.log(reverseString("Ankit"));
/*
Q4. Subsets
*/

var subsets = function (nums) {
  let ans = [];

  function helper(start = 0, temp = []) {
    ans.push([...temp]);

    for (let i = start; i < nums.length; i++) {
      temp.push(nums[i]);
      helper(i + 1, temp);
      temp.pop();
    }
  }
  helper();
  return ans;
};
/*Q5.subset-II
 */
var subsetsWithDup = function (nums) {
  let ans = [];
  nums.sort((a, b) => a - b);
  function helper(start = 0, temp = []) {
    ans.push([...temp]);

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      temp.push(nums[i]);
      helper(i + 1, temp);
      temp.pop();
    }
  }
  helper();
  return ans;
};
    /*
    Q6. find all possible subsequence of string
    */
    
    function subsequence(str){
        
        let ans=[];
        
        function helper(start=0,temp=''){
            ans.push(temp);
                
            for(let i=start;i<str.length;i++){
                if(i>start && str[i]===str[i-1]) continue;
                helper(i+1,temp+str[i]);
            }
        }
        helper();
    return ans;
    
    }
    console.log(subsequence('abbc'))
/*

Q7. Phone Number Combinations ✅
*/
function combination(digits) {
  let ans = [];
  let mp = new Map([
    [2, "abc"],
    [3, "def"],
    [4, "ghi"],
    [5, "jkl"],
    [6, "mno"],
    [7, "pqrs"],
    [8, "tuv"],
    [9, "wxyz"],
  ]);
  function solve(start = 0, res = "") {
    if (start == digits.length) {
      ans.push(res);
      return;
    }
    let str = mp.get(+digits[start]);
    for (let i = 0; i < str.length; i++) {
      solve(start + 1, res + str[i]);
    }
  }
  solve();
  return ans;
}

//conmbination sum-1
var combinationSum = function (candidates, target) {
  let ans = [];
  function solve(start = 0, path = [], sum = 0) {
    if (sum == target) {
      ans.push([...path]);
      return;
    }
    if (sum > target) return;
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      solve(i, path, sum + candidates[i]);
      path.pop();
    }
  }
  solve();
  return ans;
};
// combination sum-2
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let ans = [];
  function solve(start = 0, path = [], sum = 0) {
    if (sum == target) {
      ans.push([...path]);
      return;
    }
    if (sum > target) return;
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] == candidates[i - 1]) continue;
      path.push(candidates[i]);
      solve(i + 1, path, sum + candidates[i]);
      path.pop();
    }
  }
  solve();
  return ans;
};

//combination sum-3
var combinationSum3 = function (k, n) {
  let ans = [];
  function solve(start = 1, path = [], sum = 0) {
    if (path.length == k) {
      if (sum == n) {
        ans.push([...path]);
      }
      return;
    }
    for (let i = start; i <= 9; i++) {
      path.push(i);
      solve(i + 1, path, sum + i);
      path.pop();
    }
  }
  solve();
  return ans;
};

////////////////////////////////////////// Constraint / Grid DFS
//word ladder
var exist = function (board, word) {
  let row = board.length;
  let col = board[0].length;
  function dfs(i, j, idx = 0) {
    if (idx >= word.length) return true;
    if (i < 0 || i >= row || j < 0 || j >= col) return false;
    if (board[i][j] != word[idx]) return false;
    let temp = board[i][j];
    board[i][j] = "#";
    const found =
      dfs(i + 1, j, idx + 1) ||
      dfs(i, j + 1, idx + 1) ||
      dfs(i - 1, j, idx + 1) ||
      dfs(i, j - 1, idx + 1);

    board[i][j] = temp;

    return found;
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] == word[0]) {
        if (dfs(i, j)) return true;
      }
    }
  }
  return false;
};
// Rate Maze

function finPath(maze) {
  let n = maze.length;
  let m = maze[0].length;
  let ans = [];
  function solve(i = 0, j = 0, res = "") {
    if (i < 0 || j < 0 || i >= n || j >= m || maze[i][j] == 0) return;
    if (i == n - 1 && j == m - 1) {
      ans.push(res);
      return;
    }
    maze[i][j] = 0;
    solve(i + 1, j, res + "D");
    solve(i, j + 1, res + "R");
    solve(i - 1, j, res + "U");
    solve(i, j - 1, res + "L");
    maze[i][j] = 1;
  }
  solve();
  return ans;
}
//n-queen
var solveNQueens = function (n) {
  let ans = [];
  function solve(
    queen = n,
    row = 0,
    path = [],
    diagLeft = new Set(),
    diagRight = new Set(),
    column = new Set()
  ) {
    if (row === n) {
      if (queen == 0) {
        ans.push([...path]);
      }
      return;
    }

    for (let col = 0; col < n; col++) {
      if (
        diagLeft.has(col + row) ||
        diagRight.has(col - row) ||
        column.has(col)
      )
        continue;
      diagLeft.add(col + row);
      diagRight.add(col - row);
      column.has(col);
      let res = ".".repeat(col) + "Q" + ".".repeat(n - col - 1);
      path.push(res);
      solve(queen - 1, row + 1, path, diagLeft, diagRight, column);
      path.pop();
      diagLeft.delete(col + row);
      diagRight.delete(col - row);
      column.delete(col);
    }
  }
  solve();
  return ans;
};

/*print all subsequence
Input : ab
Output : "", "a", "b", "ab"

Input : abc
Output : "", "a", "b", "c", "ab", "ac", "bc", "abc"
*/

function printAllSubsequence(str) {
  let n = str.length - 1;
  let count = 0;
  function helper(i, temp) {
    if (i > n) {
      console.log(temp, temp.length);
      return;
    }
    helper(i + 1, temp + str[i]);
    helper(i + 1, temp);
  }

  helper(0, "");
}
printAllSubsequence("geeks");
