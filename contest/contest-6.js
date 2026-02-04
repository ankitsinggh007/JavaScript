// Valid Anagram
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let mp = new Map();

  for (let word of s) {
    mp.set(word, (mp.get(word) || 0) + 1);
  }
  for (let word of t) {
    if (mp.has(word)) mp.set(word, (mp.get(word) || 0) - 1);
    if (mp.get(word) === 0) mp.delete(word);
  }
  return mp.size > 0 ? false : true;
};
// Interval List Intersections
var intervalIntersection = function (firstList, secondList) {
  let i = 0,
    j = 0;
  const res = [];

  while (i < firstList.length && j < secondList.length) {
    const [aStart, aEnd] = firstList[i];
    const [bStart, bEnd] = secondList[j];

    const start = Math.max(aStart, bStart);
    const end = Math.min(aEnd, bEnd);

    if (start <= end) res.push([start, end]);

    if (aEnd < bEnd) i++;
    else j++;
  }

  return res;
};

// Subarray Sum Equals K
var subarraySum = function (nums, k) {
  let count = 0;
  let sum = 0;
  let mp = new Map([[0, 1]]);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (mp.has(sum - k)) count += mp.get(sum - k);
    mp.set(sum, (mp.get(sum) || 0) + 1);
  }
  return count;
};

//Container With Most Water
var maxArea = function (height) {
  let maxGLobal = 0;

  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    maxGLobal = Math.max(
      maxGLobal,
      (right - left) * Math.min(height[left], height[right]),
    );
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxGLobal;
};
