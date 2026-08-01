//Intervals
/*Intervals — Q1: Merge Intervals
You are given an array of intervals:
intervals = [[1,3], [2,6], [8,10], [15,18]]
Return merged non-overlapping intervals.
Output:
[[1,6], [8,10], [15,18]] */

const merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [];
  result.push(intervals[0]);

  for (let i = 0; i < intervals.length; i++) {
    let curr = intervals[i];
    if (result.at(-1)[1] >= curr[0])
      result.at(-1)[1] = Math.max(curr[1], result.at(-1)[1]);
    else result.push(curr);
  }

  return result;
};

/*Intervals — Q2: Insert Interval
You are given sorted, non-overlapping intervals and one new interval.
intervals = [[1,3], [6,9]]
newInterval = [2,5]
Output:
[[1,5], [6,9]]
intervals = [[1,2], [3,5], [6,7], [8,10], [12,16]]
newInterval = [4,8]

Output:

[[1,2], [3,10], [12,16]]
*/
