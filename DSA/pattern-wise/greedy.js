// -------------------------Greedy Algorithm---------------------

/*Interval Scheduling*/

// 435. Non-overlapping Intervals
var eraseOverlapIntervals = function (intervals) {
  let count = 0;
  intervals.sort((a, b) => a[1] - b[1]);

  let last = -Infinity;

  for (let [s, e] of intervals) {
    if (last <= s) {
      count++;
      last = e;
    }
  }

  return intervals.length - count;
};

// 452. Minimum Number of Arrows to Burst Balloons
var findMinArrowShots = function(points) {
     let count = 0;
  points.sort((a, b) => a[1] - b[1]);

  let last = -Infinity;

  for (let [s, e] of points) {
    if (last < s) {
      count++;
      last = e;
    }
  }

  return  count;



};
//646. Maximum Length of Pair Chain
var findLongestChain = function (pairs) {
  pairs.sort((a, b) => a[1] - b[1]);
  let count = 0;

  let last = -Infinity;

  for (let [s, e] of pairs) {
    if (last < s) {
      count++;
      last = e;
    }
  }
  return count;
};

/* merge interval */

// 56. Merge Intervals
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let merged = [];

  for (let interval of intervals) {
    if (merged.length === 0 || merged[merged.length - 1][1] < interval[0]) {
      merged.push(interval);
    } else {
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        interval[1]
      );
    }
  }

  return merged;
};

//57. Insert Interval
var insert = function (intervals, newInterval) {
  let result = [];
  let i = 0;
  let n = intervals.length;

  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);

  while (i < n) {
    result.push(intervals[i]);
    i++;
  }

  return result;        

// Activity Selection
// there is n meet happen given an intervals you need to find maximum no. of possible meet can happen in non-overlapping condition.

function maxInterview(start, end) {
  //   let start = [1, 3, 0, 5, 8, 5];
  // let end   = [2, 4, 6, 7, 9, 9];

  // Step 1: Combine and sort by end time
  let intervals = end.map((e, i) => [start[i], e]).sort((a, b) => a[1] - b[1]);

  console.log(intervals, "intervals");

  let lastEnd = 0;
  let count = 0;

  // Step 2: Greedy selection
  for (let i = 0; i < intervals.length; i++) {
    if (lastEnd <= intervals[i][0]) {
      count++;
      lastEnd = intervals[i][1];
    }
  }

  console.log("Max meetings:", count);
}
// Jump Game -I
// idea:-If there's any way to reach the end, maxReach will always discover it because it tracks the farthest reachable point at every step.
var canJump = function (nums) {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;

    maxReach = Math.max(maxReach, i + nums[i]);

    if (maxReach >= nums.length - 1) return true;
  }

  return true;
};

//Q. minJump to reach destination
var jump = function (nums) {
  let currRange = 0;
  let maxReach = 0;
  let jump = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxReach = Math.max(maxReach, i + nums[i]);
    if (i == currRange) {
      currRange = maxReach;
      jump++;
    }
  }

  return jump;
};
// fraction knapsack
function maximizeValue(arr, w) {
  let result = 0;

  // Sort by value/weight in descending order
  arr.sort((a, b) => b[1] / b[0] - a[1] / a[0]);

  let i = 0;
  while (w > 0 && i < arr.length) {
    let weight = arr[i][0];
    let value = arr[i][1];

    if (w >= weight) {
      result += value;
      w -= weight;
    } else {
      // Take fraction of the current item
      result += (value / weight) * w;
      w = 0;
    }

    i++;
  }

  console.log("result", result);
  return result;
}
//minimum coin change with canoncial system

function minCoins(coins, amount) {
  coins.sort((a, b) => b - a);
  let count = 0;

  for (let coin of coins) {
    if (amount === 0) break;
    if (coin <= amount) {
      let take = Math.floor(amount / coin);
      count += take;
      amount -= coin * take;
    }
  }

  return amount === 0 ? count : -1;
}

//merge Interval
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let merged = [];

  for (let i = 0; i < intervals.length; i++) {
    if (merged.length === 0) {
      merged.push(intervals[i]);
    } else {
      let [lastStart, lastEnd] = merged[merged.length - 1];
      let [currStart, currEnd] = intervals[i];

      if (lastEnd >= currStart) {
        // Merge
        merged[merged.length - 1][1] = Math.max(lastEnd, currEnd);
      } else {
        merged.push(intervals[i]);
      }
    }
  }

  return merged;
};
//insert intervals
var insert = function (intervals, newInterval) {
  let res = [];
  let i = 0,
    n = intervals.length;

  while (i < n && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i]);
    i++;
  }

  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  res.push(newInterval);

  while (i < n) {
    res.push(intervals[i]);
    i++;
  }

  return res;
};

// Job Sequencing Problem
// 1-liner greedy :-Sort jobs by max profit, and greedily schedule each on the latest available day ≤ deadline to maximize total profit.

function jobSequencing(deadline, profit) {
  // code here
  let job = profit
    .map((ele, i) => [deadline[i], profit[i]])
    .sort((a, b) => b[1] - a[1]);

  let maxDealine = Math.max(...deadline);
  let assign = Array(maxDealine + 1).fill(false);

  assign[0] = true;
  let maxProfit = 0;
  let count = 0;
  for (let i = 0; i < job.length; i++) {
    let [deadl, prof] = job[i];
    while (assign[deadl] && deadl > 0) {
      deadl--;
    }
    if (deadl > 0) {
      assign[deadl] = true;
      maxProfit += prof;
      count++;
    }
  }
  return [count, maxProfit];
}
// minimum platform
function usePlatform(arr, ari, dep) {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    if (ari >= arr[i]) {
      // if(arr[i] < ari){
      arr[i] = dep;
      flag = true;
      break;
    }
  }
  if (!flag) {
    arr.push(dep);
  }
}
function minPlatform(arrival, departure) {
  let train = arrival
    .map((ele, i) => [arrival[i], departure[i]])
    .sort((a, b) => a[0] - b[0]); // nlogn

  let array = [train[0][1]];
  for (let i = 1; i < train.length; i++) {
    let [arr, dep] = train[i];
    usePlatform(array, arr, dep);
  }
  return array.length;
}
