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
//Imp
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

/*Intervals — Q3: Meeting Rooms I
You are given meeting intervals:
intervals = [[0,30], [5,10], [15,20]]
Return true if a person can attend all meetings, otherwise false.
For this example:false
 */

function canAttendMeetings(intervals) {
  let prevE = -1;
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length; i++) {
    let [currS, currE] = intervals[i];
    if (prevE > currS) return false;
    else prevE = currE;
  }
  return true;
}

// Imp;
/*Intervals — Q4: Meeting Rooms II
You are given meeting intervals:
intervals = [[0,30], [5,10], [15,20]]
Return the minimum number of meeting rooms required.
Output:2
 */
function minMeetingRooms(intervals) {
  let events = [];

  for (let i = 0; i < intervals.length; i++) {
    let [start, end] = intervals[i];
    events.push([start, 1]);
    events.push([end, -1]);
  }

  events.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  let active = 0;
  let maxRooms = 0;

  for (let i = 0; i < events.length; i++) {
    active += events[i][1];
    maxRooms = Math.max(maxRooms, active);
  }

  return maxRooms;
}

// Intervals — Q5: Non-overlapping Intervals

var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  console.log(intervals);

  let count = 0;
  prev = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let [prevS, prevE] = prev;
    let [currS, currE] = intervals[i];

    if (prevE > currS) count++;
    else prev = intervals[i];
  }

  return count;
};
