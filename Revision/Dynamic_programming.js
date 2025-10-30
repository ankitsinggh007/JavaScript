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
//subset target sum
function subsetSumToK(arr, k) {
  let n = arr.length - 1;
  let dp = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(-1));
  function solve(n, k) {
    if (sum < 0) return false;
    if (sum == 0) return true;
    if (n == 0) return arr[0] == sum;
    if (dp[n][sum] != -1) return dp[n][sum];
    dp[n][sum] = solve(n - 1, sum) || solve(n - 1, sum - arr[n]);
    return dp[n][sum];
  }
  return solve(n, k);
}
//subset target sum tabulation
function subsetSumToK_tab(arr, k) {
  let n = arr.length;
  let dp = Array.from({ length: n }, () => new Array(k + 1).fill(false));
  for (let i = 0; i <= n; i++) dp[i][0] = true;

  for (let i = 1; i < n; i++) {
    for (let sum = 1; sum <= k; sum++) {
      let notTake = dp[i - 1][sum];
      let take = false;
      if (arr[i] <= sum) {
        take = dp[i - 1][sum - arr[i]];
      }
      dp[i][sum] = take || notTake;
    }
  }
  return dp[n - 1][k];
}

function Kanpsack01(weights, values, n, capacity) {
  function solve(n, capacity) {
    if (n == 0) {
      if (weights[0] <= capacity) return values[0];
      else return 0;
    }
    let notTake = solve(n - 1, capacity);
    let take = -Infinity;
    if (weights[n] <= capacity) {
      take = values[n] + solve(n - 1, capacity - weights[n]);
    }
    return Math.max(take, notTake);
  }
  return solve(n - 1, capacity);
}
function alternateKnapSack(weights, values, n, capacity) {
  function solve(i = 0, cap = capacity) {
    if (i == n) {
      return 0;
    }
    let notTake = solve(i + 1, cap);
    let take = -Infinity;
    if (weights[i] <= cap) {
      take = values[i] + solve(i + 1, cap - weights[i]);
    }
    return Math.max(take, notTake);
  }
  return solve(0, capacity);
}

function knapSack01_tab(weights, values, n, capacity) {
  let dp = Array.from({ length: n }, () => new Array(capacity + 1).fill(-1));
  for (let w = weights[0]; w <= capacity; w++) {
    dp[0][w] = values[0];
  }
}

function unBoundKnapsack(V, W, C) {
  let n = V.length;
  function solve(i = 0, cap = C) {
    if (i == n) {
      return 0;
    }
    let notTake = solve(i + 1, cap);
    let take = -Infinity;
    if (W[i] <= cap) {
      take = V[i] + solve(i, cap - W[i]);
    }
    return Math.max(take, notTake);
  }
  return solve(0, C);
}

function unBoundKnapsack_tab(V, W, C) {
  let n = V.length;
  let dp = Array.from({ length: n }, () => new Array(C + 1).fill(-1));
  for (let cap = 0; cap <= C; cap++) {
    dp[0][cap] = Math.floor(cap / W[0]) * V[0];
  }
  for (let i = 1; i < n; i++) {
    for (let cap = 0; cap <= C; cap++) {
      let notTake = dp[i - 1][cap];
      let take = -Infinity;
      if (W[i] <= cap) {
        take = V[i] + dp[i][cap - W[i]];
      }
      dp[i][cap] = Math.max(take, notTake);
    }
  }
}
//coin change-1
var coinChange = function (coins, amount) {
  let n = coins.length;
  let dp = Array.from({ length: n }, () =>
    new Array(amount + 1).fill(Infinity)
  );
  for (let i = 0; i <= amount; i++) {
    dp[0][i] = i % coins[0] === 0 ? i / coins[0] : Infinity;
  }
  for (let i = 0; i < n; i++) dp[i][0] = 0;

  for (let i = 1; i < n; i++) {
    for (let amt = 1; amt <= amount; amt++) {
      let notTake = dp[i - 1][amt];
      let take = amt >= coins[i] ? 1 + dp[i][amt - coins[i]] : Infinity;
      dp[i][amt] = Math.min(take, notTake);
    }
  }
  return dp[n - 1][amount] === Infinity ? -1 : dp[n - 1][amount];
};
//coin chane-2
var change = function (amount, coins) {
  let n = coins.length;

  function solve(n, amt) {
    if (n === 0) return amt % coins[0] === 0 ? 1 : 0;

    let count = solve(n - 1, amt);
    if (amt >= coins[n]) count += solve(n, amt - coins[n]);
    return count;
  }

  return solve(n - 1, amount);
};
//coin change-2 memoization
var change = function (amount, coins) {
  let n = coins.length;
  let dp = Array.from({ length: n }, () => new Array(amount + 1).fill(-1));
  function solve(n, amt) {
    if (n === 0) return amt % coins[0] === 0 ? 1 : 0;
    if (dp[n][amt] !== -1) return dp[n][amt];
    let count = solve(n - 1, amt);
    if (amt >= coins[n]) count += solve(n, amt - coins[n]);
    return (dp[n][amt] = count);
  }

  return solve(n - 1, amount);
};
//coin change-2 tabulation
function tabulation(coins, n, amount) {
  let dp = Array.from({ length: n }, () => new Array(amount + 1).fill(0));

  //by base case if n==0 hence size of array if 1 then it always give eaither1 or 0 based on amount/coins[0];
  for (let amt = 0; amt <= amount; amt++) {
    dp[0][amt] = amt % coins[0] === 0 ? 1 : 0;
  }
  // for amt=0 there is always 1 way for any size array
  for (let i = 0; i < n; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (amt = 1; amt <= amount; amt++) {
      let count = dp[i - 1][amt];
      if (amt >= coins[i]) count += dp[i][amt - coins[i]];
      dp[i][amt] = count;
    }
  }

  return dp[n - 1][amount];
}

////////////////////////////////////// 2 D DP PROBLEMS //////////////////////////////////////

//longest common subsequence
var longestCommonSubsequence = function (text1, text2) {
  let n1 = text1.length;
  let n2 = text2.length;
  let dp = Array.from({ length: n1 }, () => new Array(n2).fill(-1));
  function lcs(n1, n2) {
    if (n1 < 0 || n2 < 0) return 0;
    if (dp[n1][n2] !== -1) return dp[n1][n2];
    if (text1[n1] === text2[n2]) {
      dp[n1][n2] = 1 + lcs(n1 - 1, n2 - 1);
    } else dp[n1][n2] = Math.max(lcs(n1 - 1, n2), lcs(n1, n2 - 1));

    return dp[n1][n2];
  }

  return lcs(n1 - 1, n2 - 1);
};
//tabulation LCS
function longestCommonSubsequence(text1, text2) {
  const n1 = text1.length, n2 = text2.length;
  const dp = Array.from({ length: n1 }, () => new Array(n2).fill(0));

  // first row
  let found = false;
  for (let j = 0; j < n2; j++) {
    if (text1[0] === text2[j]) found = true;
    dp[0][j] = found ? 1 : 0;
  }

  // first column
  found = false;
  for (let i = 0; i < n1; i++) {
    if (text2[0] === text1[i]) found = true;
    dp[i][0] = found ? 1 : 0;
  }

  for (let i = 1; i < n1; i++) {
    for (let j = 1; j < n2; j++) {
      if (text1[i] === text2[j]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[n1 - 1][n2 - 1];
}