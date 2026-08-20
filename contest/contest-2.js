// 🧪 MOCK OA-1 (SDE-1 Frontend | Indian Unicorns)
/*
📌 Rules
	•	Solve on LeetCode directly
	•	No hints
	•	Treat it like real OA
	•	After finishing, come back with:
	•	Which solved / partial
	•	Time spent per question
	•	Where you felt stuck
*/

/*LeetCode 424 — Longest Repeating Character Replacement */
let getMaxFreq = (mp) => {
  let max = 0;
  for (let [key, val] of mp.entries()) {
    max = Math.max(val, max);
  }
  return max;
};
var characterReplacement = function (s, k) {
  let [i, j, len, maxLen] = [0, 0, s.length - 1, 0];
  let mp = new Map();
  while (j <= len) {
    mp.set(s[j], (mp.get(s[j]) || 0) + 1);
    let maxfreq = getMaxFreq(mp);
    j++;
    while (j - i - maxfreq > k) {
      mp.set(s[i], (mp.get(s[i]) || 0) - 1);
      //  maxfreq=getMaxFreq(mp);

      if (mp.get(s[i]) <= 0) mp.delete(s[i]);
      i++;
    }
    maxLen = Math.max(maxLen, j - i);
  }
  return maxLen;
};

/*LeetCode 209 — Minimum Size Subarray Sum */

var minSubArrayLen = function (target, nums) {
  let globalMin = Infinity;

  let [i, j, sum, len] = [0, 0, 0, nums.length];

  while (j < len) {
    sum += nums[j];

    while (sum >= target) {
      globalMin = Math.min(globalMin, j - i + 1);
      sum -= nums[i];
      i++;
    }
    j++;
  }

  return globalMin === Infinity ? 0 : globalMin;
};

// /take 20 min to solve. take 1 min to map sliding window 1 extra min for varaition detection [variable size]
