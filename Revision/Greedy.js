
/*Problem 1: Non-Overlapping Intervals

You are given an array of intervals intervals[i] = [start, end].
Return the minimum number of intervals you need to remove so that the rest of the intervals are non-overlapping.

Example:

Input: [[1,2],[2,3],[3,4],[1,3]]  
Output: 1*/
function eraseOverlapIntervals(intervals) {
  intervals.sort((a,b)=>a[1]-b[1]);
  let kept = 0, lastEnd = -Infinity;
  for (const [s,e] of intervals) {
    if (s >= lastEnd) { kept++; lastEnd = e; }
  }
  return intervals.length - kept;
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
/*
Problem 3: Job Sequencing for Max Profit
You’re given n jobs. Each job i has a deadline d[i] (finish by or before that time slot) and profit p[i] (earned only if completed before/at its deadline).
You can do at most one job per time slot. Each job takes 1 unit time.
Return the maximum total profit achievable.
Example
Jobs: [(d=2,p=100), (d=1,p=19), (d=2,p=27), (d=1,p=25), (d=3,p=15)] → Output: 142
*/
function jobScheduling(jobs){
    jobs.sort((a,b)=>b.p-a.p);

    let maxDeadline=Math.max(...jobs.map(job=>job.d));
    let slots=Array(maxDeadline+1).fill(false);
    let totalProfit=0;

    for(let job of jobs){
        for(let j=job.d;j>0;j--){
            if(!slots[j]){
                slots[j]=true;
                totalProfit+=job.p;
                break;
            }
        }
    }
    return totalProfit;


}
/*
Gas Station
You have two arrays gas[i] and cost[i] for i=0..n-1 around a circular route.
Starting with 0 fuel at some station, you gain gas[i] there and need cost[i] to go to the next station.
Return the starting index from which you can complete the full circle once; if impossible, return -1.
Example:
gas = [1,2,3,4,5], cost = [3,4,5,1,2] → 3
*/
function canCompleteCircuit(gas,cost){
    let totalGas=0,totalCost=0,currentGas=0,startIndex=0;
    
    for(let i=0;i<gas.length;i++){
        totalGas+=gas[i];
        totalCost+=cost[i];
        currentGas+=gas[i]-cost[i];
        if(currentGas<0){
            startIndex=i+1;
            currentGas=0;
        }
    }
    return totalGas<totalCost?-1:startIndex;
}
