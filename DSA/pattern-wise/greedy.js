
// -------------------------Greedy Algorithm---------------------
 
// Activity Selection 
// there is n meet happen given an intervals you need to find maximum no. of possible meet can happen in non-overlapping condition.

function maxInterview(start,end){
//   let start = [1, 3, 0, 5, 8, 5];
// let end   = [2, 4, 6, 7, 9, 9];

// Step 1: Combine and sort by end time
let intervals = end.map((e, i) => [start[i], e])
                   .sort((a, b) => a[1] - b[1]);

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

console.log("Max meetings:", count);  // ✅ Output: 4
  
}