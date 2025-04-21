function Print(N,i=1){
    if(N==i) {
      console.log(i);
      return;
    }
    console.log(i);
    return Print(N,i++);
  }
  // as it is tail we can convert it into iterative 
    let i=1;
  while(N!=i){
    console.log(i);
    i++;
  }
  /////////////////////////////////////////////////
  //✅ [✔] Print numbers from N to 1 using recursion
  
  function revPrint(N){
    if(N==1) {console.log(1);
    return;}
    console.log(N);
    return revPrint(N--);
  }
  // as it is tail we can convert it into iterative too
  
  while(N>=1){
    console.log(N);
    N--;
  }
  // ✅ [✔] Factorial of N using recursion
  
  function factorial(n){
    if(n==0||n==1) return n;
    return n*factorial(n-1);
  }
  // can it be convert into tail?
  // ✅ [✔] Sum of first N numbers using recursion
  
  function firstN(s){
    if(s==0) return 0; 
    return s+firstN(s-1);
  }
  // ✅ [✔] Power function (x^n) using recursion
  
  function power(x,n){
    if(n==0) return 1;
    if (n==1) return x;
    return x*power(x,n-1); 
    
  }

  /*
  A digit string is good if the digits (0-indexed) at even indices are even and the digits at odd indices are prime (2, 3, 5, or 7).

For example, "2582" is good because the digits (2 and 8) at even positions are even and the digits (5 and 2) at odd positions are prime. However, "3245" is not good because 3 is at an even index but is not even.
Given an integer n, return the total number of good digit strings of length n. Since the answer may be large, return it modulo 109 + 7.

A digit string is a string consisting of digits 0 through 9 that may contain leading zeros.
  */
 var countGoodNumbers = function(n) {
    n = BigInt(n);
    let even = (n + 1n) / 2n;
    let odd = n / 2n;

    let evenWays = modPow(5n, even);
    let oddWays = modPow(4n, odd);

    return Number((evenWays * oddWays) % mod);
};

function modPow(base, exp) {
    let result = 1n;
    base = base % mod;

    while (exp > 0n) {
        if (exp % 2n === 1n) {
            result = (result * base) % mod;
        }
        base = (base * base) % mod;
        exp = exp / 2n;
    }
    return result;
}
// Given an integer, K. Generate all binary strings of size k without consecutive 1’s.
// A utility function generate all string without
// consecutive 1'sof size K
function generateAllStringsUtil(K, str, n)
{

    // Print binary string without consecutive 1's
    if (n == K) {

        // Terminate binary string
        str[n] = "\0";
        console.log(str.join("") + " ");
        return;
    }

    // If previous character is '1' then we put
    // only 0 at end of string
    // example str = "01" then new string be "010"
    if (str[n - 1] == "1") {
        str[n] = "0";
        generateAllStringsUtil(K, str, n + 1);
    }

    // If previous character is '0' than we put
    // both '1' and '0' at end of string
    // example str = "00" then
    // new string "001" and "000"
    if (str[n - 1] == "0") {
        str[n] = "0";
        generateAllStringsUtil(K, str, n + 1);
        str[n] = "1";
        generateAllStringsUtil(K, str, n + 1);
    }
}

// Function generate all binary string without
// consecutive 1's
function generateAllStrings(K)
{
    // Base case
    if (K <= 0)
        return;

    // One by one stores every
    // binary string of length K
    var str = new Array(K);

    // Generate all Binary string
    // starts with '0'
    str[0] = "0";
    generateAllStringsUtil(K, str, 1);

    // Generate all Binary string
    // starts with '1'
    str[0] = "1";
    generateAllStringsUtil(K, str, 1);
}


/*
78. Subsets
Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.
Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:
Input: nums = [0]
Output: [[],[0]]
Constraints:
1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
*/
var subsets = function(nums) {
  function helper(i=0,res=[]){
      if(i==nums.length){
          return [[...res]];
      }

      const exclude=helper(i+1,res);

      res.push(nums[i]);
      const include=helper(i+1,res);
      res.pop();

      return exclude.concat(include);
  }
  return helper();
}

// How do I recognize and tag problems by pattern?


// How to balance new topics + revision together as i am short with time i guess?
/*
Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.
*/
var subsets = function (nums) {
  let ans = [];
  function helper(i = 0, res = []){
      if (i == nums.length) {
          return [[...res]];
          
      }
      // exclude
      const exclude=helper(i + 1, res);
      // include
      res.push(nums[i])
      const include=helper(i + 1, res);
      res.pop();

      const merge=exclude.concat(include);
      return merge;
  }
  return helper();
  
};
/*
You are given a positive integer n.
A binary string x is valid if all substrings of x of length 2 contain at least one "1".
Return all valid strings with length n, in any order.*/
var validStrings = function (n) {
  let ans = [];
  function helper(i = 0, res = "") {
      if (i == n) {
          ans.push(res);
          return;
      }
      // if(last is 0)
      helper(i + 1, res + "1");
      if (res[res.length - 1] != '0')
          helper(i + 1, res + "0");
  }
  helper();
  return ans;
};
/*
22. Generate Parentheses
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
*/
var generateParenthesis = function(n) {
  // const ans=[];
  function helper(o=0,c=0,res="",ans=[]){
      if(o==n && o==c){
          ans.push(res);
          return ans;
      }

      if(o<n) helper(o+1,c,res+"(",ans);
      if(c<o) helper(o,c+1,res+")",ans);
      return ans;
  }
  return helper();
  // return ans;
};
/*
1498. Number of Subsequences That Satisfy the Given Sum Condition
You are given an array of integers nums and an integer target.
Return the number of non-empty subsequences of nums such that the sum of 
the minimum and maximum element on it is less or equal to target.
Since the answer may be too large, return it modulo 109 + 7.
*/
let MOD = 10**9 + 7;

const modPow = (base, exp, mod) => {
    let result = 1;
    while (exp > 0) {
        if (exp % 2 === 1) {
            result = (result * base) % mod;
        }
        base = (base * base) % mod;
        exp = Math.floor(exp / 2);
    }
    return result;
};

const numSubseq = (nums, target) => {
    nums.sort((a, b) => a - b);
    const mod = 1e9 + 7;
    let res = 0;
    let r = nums.length - 1;

    for (let i = 0; i < nums.length; i++) {
        while (nums[i] + nums[r] > target && i <= r) {
            r--;
        }
        if (i <= r) {
            res = (res + modPow(2, r - i, mod)) % mod;
        }
    }

    return res;
};



/*2099. Find Subsequence of Length K With the Largest Sum
You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest sum.
Return any such subsequence as an integer array of length k.
A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
 */
var maxSubsequence = function (nums, k) {
  let map = nums.map((value, index) => [value, index]);

  map.sort((a, b) => b[0] - a[0]);

  let topKElements = map.slice(0, k);

  topKElements.sort((a, b) => a[1] - b[1]);
  
  let arr2 = topKElements.map(item => item[0]);

  return arr2;
};
/*
39. Combination Sum
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
*/
var combinationSum = function (candidates, target) {
  let ans = []
  candidates.sort((a, b) => a - b);
  console.log(candidates);
  function helper(start = 0, res = [], sum = 0) {
      if (sum == target) {
          ans.push([...res]);
      }
      // else if(sum>target) return ; not required as we already check in loop if (sum+candidates[i])

      for (let i = start; i < candidates.length; i++) {

          if (sum + candidates[i] > target) break;
          res.push(candidates[i]);
          helper(i, res, sum + candidates[i])
          res.pop();
      }
  }
  helper()
  return ans;


};
//another approach 
var combinationSum = function (candidates, target) {
  let ans = []
  candidates.sort((a, b) => a - b);
  console.log(candidates);
  function helper(i = 0, res = [], sum = 0) {
      if(i==candidates.length){
          if (sum == target) {
          ans.push([...res]);
      }
      return;
      }
      if (sum > target) return;

      // not required as we already check in loop if (sum+candidates[i])


      res.push(candidates[i]);
      helper(i, res, sum + candidates[i])
      res.pop();
      helper(i + 1, res, sum )

  }
  helper()
  return ans;


};

/*
40. Combination Sum II
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
Each number in candidates may only be used once in the combination.
Note: The solution set must not contain duplicate combinations.


*/

var combinationSum2 = function (candidates, target) {
  let ans = [];
  candidates.sort((a, b) => a - b);
  function helper(start = 0, res = [], sum = 0) {
      if (sum == target) {
          ans.push([...res]);
          return;
      }
     
      for (let i = start; i < candidates.length; i++) {
          if (i > start && candidates[i] == candidates[i - 1]) continue;
          if (sum + candidates[i] > target) break;
          res.push(candidates[i]);
          helper(i + 1, res, sum + candidates[i]);
          res.pop();
      }
  }
  helper();
  console.log(ans, "ans");
  return ans;
};
/*
216. Combination Sum III
Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
Only numbers 1 through 9 are used.
Each number is used at most once.
Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.
*/
var combinationSum3 = function (k, n) {

    let ans = [];
    function dfs(start = 1, res = [], sum = 0) {

        if (res.length === k) {
            if (sum == n) {
                ans.push([...res]);
            }
            return;
        }

        for (let i = start; i <= 9; i++) {
            if (i + sum > n) break;

            res.push(i);
            dfs(i + 1, res, sum+i);
            res.pop();
        }

    }
    dfs();
    return ans;
};
/*
17. Letter Combinations of a Phone Number
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/
var letterCombinations = function(digits) {
  if(digits.length==0) return []
const digitMap = {
  '2': "abc", '3': "def", '4': "ghi", '5': "jkl",
  '6': "mno", '7': "pqrs", '8': "tuv", '9': "wxyz"
};
let ans=[];
function dfs(start=0,str=""){
  if(str.length===digits.length){
      ans.push(str);
      return ;
  }
  
  for(let char of digitMap[digits[start]]){
      
      dfs(start+1,str+char);
      
  }
  
  
}
dfs();
// console.log(ans,"ans")
return ans;
};
// letterCombinations("23");
/*
Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
*/
var partition = function(s) {
  const ans = [];
  
  function isPalindrome(str) {
      return str === str.split('').reverse().join('');
  }

  function dfs(start, path) {
      if (start === s.length) {
          ans.push([...path]);  // Store valid partitions
          return;
      }

      for (let end = start; end < s.length; end++) {
          let sub = s.substring(start, end + 1);
          if (isPalindrome(sub)) {
              path.push(sub);   // Select valid palindrome
              dfs(end + 1, path);
              path.pop();       // Backtrack
          }
      }
  }

  dfs(0, []);
  return ans;
};

console.log(partition("aab")); // Output: [["a", "a", "b"], ["aa", "b"]]

alksjlkhklsdhlkashlkdj