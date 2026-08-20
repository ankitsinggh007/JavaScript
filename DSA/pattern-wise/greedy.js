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
var findMinArrowShots = function (points) {
  let count = 0;
  points.sort((a, b) => a[1] - b[1]);

  let last = -Infinity;

  for (let [s, e] of points) {
    if (last < s) {
      count++;
      last = e;
    }
  }

  return count;
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
};
/*Capacity*/

// lc 1833. Maximum Ice Cream Bars

var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);

  let count = 0;
  let i = 0;
  while (i < costs.length && coins >= costs[i]) {
    coins -= costs[i++];
    count++;
  }
  return count;
};

//lc 455. Assign Cookies
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let child = 0;
  let cookie = 0;

  while (child < g.length && cookie < s.length) {
    if (s[cookie] >= g[child]) {
      child++;
    }
    cookie++;
  }

  return child;
};
//candy distribution
var candy = function (ratings) {
  let l = [];
  for (let i = 0; i < ratings.length; i++) {
    if (i == 0) l[i] = 1;
    else if (ratings[i] > ratings[i - 1]) l[i] = l[i - 1] + 1;
    else l[i] = 1;
  }
  console.log(l);
  let r = [];
  for (let i = ratings.length - 1; i >= 0; i--) {
    if (i === ratings.length - 1) r[i] = 1;
    else if (ratings[i] > ratings[i + 1]) r[i] = r[i + 1] + 1;
    else r[i] = 1;
  }
  let count = 0;
  for (let i = 0; i < ratings.length; i++) {
    count += Math.max(l[i], r[i]);
  }
  console.log(l);

  return count;
};
/* max overlapping */
// lc 253. Meeting Rooms II
var minMeetingRooms = function (intervals) {
  let starts = intervals.map((i) => i[0]).sort((a, b) => a - b);
  let ends = intervals.map((i) => i[1]).sort((a, b) => a - b);

  let s = 0;
  let e = 0;
  let count = 0;
  let maxRooms = 0;

  while (s < starts.length) {
    if (starts[s] < ends[e]) {
      count++;
      maxRooms = Math.max(maxRooms, count);
      s++;
    } else {
      count--;
      e++;
    }
  }

  return maxRooms;
};
// minimum platform required for train
function minPlatform(arrival, departure) {
  arrival.sort((a, b) => a - b);
  departure.sort((a, b) => a - b);

  let platNeeded = 0;
  let maxPlat = 0;
  let i = 0;
  let j = 0;

  while (i < arrival.length && j < departure.length) {
    if (arrival[i] < departure[j]) {
      platNeeded++;
      maxPlat = Math.max(maxPlat, platNeeded);
      i++;
    } else {
      platNeeded--;
      j++;
    }
  }

  return maxPlat;
}
// -------------------------Greedy Algorithm---------------------//