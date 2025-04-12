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