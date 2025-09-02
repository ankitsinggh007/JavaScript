
/*Problem 1: Non-Overlapping Intervals

You are given an array of intervals intervals[i] = [start, end].
Return the minimum number of intervals you need to remove so that the rest of the intervals are non-overlapping.

Example:

Input: [[1,2],[2,3],[3,4],[1,3]]  
Output: 1*/
function eraseOverlapIntervals(intervals) {
    intervals.sort((a,b)=>a[1]-b[1]);
    let count=0;
    let prev=-Infinity;
    for(let [s,e] of intervals){
        if(prev<=s){
            count++;
            prev=e;
        }

    }
    console.log(count,"count")
}
/*
Problem 2: Meeting Rooms II

You’re given an array of meeting intervals [[s1, e1], [s2, e2], ...].
Find the minimum number of meeting rooms required so that no meetings overlap in the same room.

Example:

Input: [[0,30],[5,10],[15,20]]
Output: 2
*/
function minMeetingRooms(intervals) {
    let starts=intervals.map(i=>i[0]).sort((a,b)=>a-b);
    let ends=intervals.map(i=>i[1]).sort((a,b)=>a-b);
  let rooms = 0, peak = 0, i = 0, j = 0;
  while (i < starts.length) {
    if (starts[i] < ends[j]) { 
      rooms++; peak = Math.max(peak, rooms); i++;
    } else {                  
      rooms--; j++;
    }
  }
  return peak;

}
