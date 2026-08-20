// fibonacci
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// fibonacci with memoization
function fibonacciMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}
// fibonacci with tabulation
function fibonacciTab(n) {
    if (n <= 1) return n;
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
    }   
//house robber
function houseRobber(nums){
    let dp=Array(nums.length).fill(-1);
    function rob(n){
        if(n==0) return nums[0];
        if(n<0) return 0;
        if(dp[n]!==-1) return dp[n];
        let include=nums[n]+rob(n-2);
        let exclude=rob(n-1);
        dp[n]=Math.max(include,exclude);
        return dp[n];

    }
}

//house robber with tabulation
function houseRobberTab(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    const dp = Array(nums.length).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
    }
    return dp[nums.length - 1];
}
// house robber-2
function houseRobber2(nums) {
    if (nums.length === 1) return nums[0];
    const rob1 = houseRobberTab(nums.slice(0, nums.length - 1));
    const rob2 = houseRobberTab(nums.slice(1));
    return Math.max(rob1, rob2);
}