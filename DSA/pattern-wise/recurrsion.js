// recursion notes

/*
CORE PRINCIPLES: 1. Fix Perception First:
- Don't blindly minimize input. Instead, solve via decision-making first.
- Use recursion trees to visualize choices and outcomes.
- Mimic mathematical induction: Base Case Induction Extra Processing.
2. When to Use Recursion:
a. If problem asks for all combinations/choices Decision-based recursion b. If smaller input leads to solution Input-reduction based recursion
c. If recursion is explicitly required Handle as recursive
3. Two Core Approaches:
Decision-making (Tree-based): Used in subsets, permutations, combinations. Base-Induction-Hypothesis: Used in factorial, sum, reverse, divide & conquer.
4. General Steps to Solve: - Identify input/output
- Choose between decision-tree vs B-I-H model
- Draw recursion tree if decision-based
- Write base case (minimum valid input)
- Use hypothesis: assume small input works
- Add extra work depending on input/output requirement - Code last

*/









/*
70. Climbing Stairs
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/
var climbStairs = function (n) {
    let arr = []
    function helper(n) {
        if (n == 1 || n == 0) return 1;
        if (arr[n]) return arr[n];
        arr[n] = helper(n - 1) + helper(n - 2)
        return arr[n];
    }
    return helper(n);
};
/*
Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.
Return a list of all possible strings we could create. Return the output in any order.
*/
var letterCasePermutation = function (s) {
    let ans = [];
    function helper(i = 0, res = "") {
        if (res.length == s.length) {
            ans.push(res);
            return;
        }

        if ("a" <= s[i] && s[i] <= "z" || "A" <= s[i] && s[i] <= "Z") {
            res += s[i].toUpperCase()
            helper(i + 1, res);
            res -= s[i].toUpperCase()
            helper(i + 1, res);
        }
        else {
            res += s[i];
            helper(i + 1, res);
        }
    }

    helper();
    return ans;

};
// alternate with some changes 
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    let ans = [];
    function helper(i = 0, str = "") {
        if (i >= s.length) {
            ans.push(str);
            return;
        }

        // if char make two call
        if ("a" <= s[i] && s[i] <= "z" || "A" <= s[i] && s[i] <= "Z") {
            helper(i + 1, str + s[i].toUpperCase());
            helper(i + 1, str + s[i].toLowerCase());
        } else {
            helper(i + 1, str + s[i]);
        }

    }
    helper()
    return ans;
};
/*
Given a string s, partition s such that every substring of the partition is a palindrome. 
Return all possible palindrome partitioning of s.
*/


const isPalindome = (s) => {
    let [left, right] = [0, s.length - 1];
    while (left < right) {
        if (s[left] != s[right]) return false;
        left++;
        right--;
    }
    return true;
}

var partition = function (s) {
    let ans = [];
    function helper(i = 0, path = []) {

        if (i == s.length) {
            ans.push([...path]);
            return;
        }
        for (let j = i; j < s.length; j++) {

            let sub = s.slice(i, j + 1);

            if (isPalindome(sub)) {
                path.push(sub);
                helper(j + 1, path);
                path.pop(sub);
            }


        }
    }
    helper()
    return ans;


};

/*
print balanced parathesis for given n
*/
     let n=3;
    function solve (l=0,r=0,res=""){
        if(l==r && l==n ){
            console.log(res);
            return;
        }
        
        if( l < n )solve(l+1, r, res + "(" );
        if( r < l )solve(l, r+1, res + ")" );
    }
   /*
   print n bit binary number
   */
  n = 3;
function solve(ones = 0, zeros = 0, res = "") {
  if (ones + zeros === n) {
    console.log(res);
    return;
  }

  solve(ones + 1, zeros, res + "1");
  if (zeros < ones) solve(ones, zeros + 1, res + "0");
}

///////////////////////////////recursion complete///////////////////////////////////////
