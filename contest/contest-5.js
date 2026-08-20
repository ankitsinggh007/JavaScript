/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */
/*
Meeting Rooms
Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), determine if a person could add all meetings to their schedule without any conflicts.
Note: (0,8),(8,10) is not considered a conflict at 8 */

class Solution {
  /**
   * @param {Interval[]} intervals
   * @returns {boolean}
   */
  canAttendMeetings(intervals) {
    //sort based on start time.
    //  take Prev=-1;
    // and loop over with condition if(Prev<curr_start) continue; else return false;

    intervals.sort((i, j) => i.start - j.start);

    let prev = -1;
    let arr = Array.from(intervals);

    for (let i = 0; i < arr.length; i++) {
      let { start, end } = arr[i];
      if (prev > start) return false;
      else prev = end;
    }

    return true;
  }
}
// took 15 min to solve

// 20. Valid Parentheses
var isValid = function (s) {
  let st = [];
  for (let i = 0; i < s.length; i++) {
    if (st.length === 0) {
      st.push(s[i]);
      continue;
    }
    if (
      (st.at(-1) === "{" && s[i] === "}") ||
      (st.at(-1) === "[" && s[i] === "]") ||
      (st.at(-1) === "(" && s[i] === ")")
    ) {
      st.pop();
      continue;
    }

    st.push(s[i]);
  }
  return st.length === 0 ? true : false;
};

//took 10 min to solve
