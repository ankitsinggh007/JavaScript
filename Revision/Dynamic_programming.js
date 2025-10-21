// finf fib(n)
//recurise way
let fib = function (n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};
//memoization
let fib_memo = function (n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
  return memo[n];
};
//tabulation
let fib_tab = function (n) {
  if (n <= 1) return n;
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
//space optimization
let fib_space = function (n) {
  if (n <= 1) return n;
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let sum = a + b;
    a = b;
    b = sum;
  }
  return b;
};
//climibing stairs recursive
var climbStairs = function (n) {
  let dp = new Array(n + 1).fill(-1);
  function solve(n) {
    if (n == 1 || n == 0) return 1;
    if (dp[n] != -1) return dp[n];
    dp[n] = solve(n - 1) + solve(n - 2);
    return dp[n];
  }
  return solve(n);
};
//climbing stairs
let climbStairs = function (n) {
  if (n <= 1) return 1;
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

//climbing stairs optimized
var climbStairsopt = function (n) {
  let prev0 = 1;
  let prev1 = 1;
  for (let i = 2; i <= n; i++) {
    let temp = prev1;
    prev1 = prev0 + prev1;
    prev0 = temp;
  }
  return prev1;
};
//robber house
var rob = function (nums) {
  let dp = new Array(nums.length).fill(-1);
  function robber(n = nums.length - 1) {
    if (n == 0) return nums[0];
    if (n == 1) return nums[0] > nums[1] ? nums[0] : nums[1];
    if (dp[n] != -1) return dp[n];
    dp[n] = Math.max(robber(n - 2) + nums[n], robber(n - 1));
    return dp[n];
  }

  return robber();
};
//robber house optimized
function rob(nums) {
  let n = nums.length;

  let dp = new Array(n).fill(-1);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[n - 1];
}
