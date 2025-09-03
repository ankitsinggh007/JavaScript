// Variation - 1:non-overlapping intervals
  /*
  Problem: Given intervals [s,e], return the maximum number of 
  non-overlapping intervals you can schedule.
  */
  maxNonOverlappingIntervals(intervals) {

    intervals.sort((a, b) => a[1] - b[1]);
    // console.log(intervals);
    let count = 0;// non overlapping count
    let prev = -Infinity;
    for (let [s, e] of intervals) {
      if (s >= prev) {
        count++;
        prev = e;
      }
    }
    return count;
  }

  /*
  Given an array of intervals intervals where intervals[i] = 
  [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
  */
  eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let count = 0;
    let prev = -Infinity;

    for (let [s, e] of intervals) {
      if (s < prev) {
        count++;
      } else {
        prev = e;
      }
    }
    return count;
  };


let intervals = [[1, 5], [7, 10], [0, 6], [4, 8]];
console.log(maxNonOverlappingIntervals(intervals));


/*
meeting room-II
*/
function minMeetingRooms(start, end) {
  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);
  let [count, max, i, j] = [0, 0, 0, 0];

  while (i < start.length) {
    if (start[i] < end[j]) {
      count++;
      max = Math.max(max, count);
      i++;
    }
    else {
      count--;
      j++;
    }
  }
  return max;
}
//min platforms
function minPlatform(start, end) {
  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);
  let [count, max, i, j] = [0, 0, 0, 0];

  while (i < start.length && j < end.length) {
    if (start[i] <= end[j]) {
      count++;
      max = Math.max(max, count);
      i++;
    }
    else {
      count--;
      j++;
    }
  }
  return max;

}

/*
452. Minimum Number of Arrows to Burst Balloons
*/

var findMinArrowShots = function (points) {

  let prev = -Infinity;
  let count = 0;
  points.sort((a, b) => a[1] - b[1]);
  for (let [s, e] of points) {
    if (s > prev) {
      count++;
      prev = e;
    }
  }
  return count;

};

/*
Merge intervals 56
*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0]);
    
    let result=[];
    result.push(intervals[0])


    for(let [s,e] of intervals){
   let prev= result[result.length-1][1];
   if(s<=prev) {
    result[result.length-1][1]=Math.max(prev,e);
   }
   else{
    result.push([s,e]);
   }
    }
    return result;
};

