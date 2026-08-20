// Variation - 1:overlapping intervals
/*
leetcode:
Problem: Given intervals [s,e], return the maximum number of 
non-overlapping intervals you can schedule.
*/
function maxNonOverlappingIntervals(intervals) {

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
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [];
  result.push(intervals[0])


  for (let [s, e] of intervals) {
    let prev = result[result.length - 1][1];
    if (s <= prev) {
      result[result.length - 1][1] = Math.max(prev, e);
    }
    else {
      result.push([s, e]);
    }
  }
  return result;
};

////////////////////////Rescource Allcation//////////////////////
/*
Assign Cookies 455
problem: Assume you are an awesome parent and want to give your children some cookies. 
But, you should give each child at most one cookie. Each child i has a greed factor gi, 
which is the minimum size of a cookie that the child will be content with; 
and each cookie j has a size sj. If sj >= gi, we can assign the cookie j to the child i,
 and the child i will be content. Your goal is to maximize the number of your content children
  and output the maximum number.
*/

var findContentChildren = function (g, s) {

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let [i, j] = [0, 0];

  let count = 0;

  while (i < g.length && j < s.length) {

    if (g[i] <= s[j]) {
      count++;
      i++;
      j++;
    } else
      j++;
  }
  return count;

}

/* candies */
var candy = function (ratings) {


  let left = new Array(ratings.length).fill(1);
  let right = new Array(ratings.length).fill(1);
  //L-->R
  for (let i = 1; i < ratings.length; i++) {
    let prev = i - 1;
    let curr = i;
    if (ratings[prev] < ratings[curr]) left[curr] = left[prev] + 1;
  }
  //R-->L
  for (let i = ratings.length - 2; i >= 0; i--) {
    let next = i;
    let curr = i + 1;
    if (ratings[curr] < ratings[next]) right[next] = right[curr] + 1;

  }
  let candies = 0;

  for (let i = 0; i < ratings.length; i++) {
    candies += Math.max(left[i], right[i]);
  }
  return candies;
};


/**
leetcode 1710. Maximum Units on a Truck
 */
var maximumUnits = function(boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  
  let result = 0;
  for (const [ boxes, units ] of boxTypes) {
    const takeBoxes = Math.min(boxes, truckSize);
    result += units * takeBoxes;
    truckSize -= takeBoxes;
    if (!truckSize) break;
  }

  return result;
};

/*
  minimum cost to connect ropes
*/


 function minCost(arr) {
        // code here
        if(arr.length==1) return 0;
        arr.sort((a,b)=>a-b);
        let cost=0;
        while(arr.length>1){
            let first=arr.shift();
            let second=arr.shift();
            cost+=first+second;
            arr.push(first+second);
            arr.sort((a,b)=>a-b);
        }
        return cost;
    }

/*
    leetcode:Jump Game-I
*/
var canJump = function(nums) {
    let i=0;
    let run=nums[0];
    for(let i=1;i<=run && i<nums.length-1;i++){
        run=Math.max(run,i+nums[i]);
    }
    if(run>=nums.length-1) return true;
    return false;
};

/*
remove k digit from input, to make it smallest value.
*/

  /*
  Partition lable 
  */

