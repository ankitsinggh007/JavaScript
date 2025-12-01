// Q1. Maximum Product of Two Elements in an Array?
var maxProduct = function (nums) {
  let greatest = 0;
  let prevGreatest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= greatest) {
      prevGreatest = greatest;
      greatest = nums[i];
    } else if (nums[i] > prevGreatest) prevGreatest = nums[i];
  }
  return (greatest - 1) * (prevGreatest - 1);
};
//it take almost 15 min to solve 🥲
// --------------------------------------------------------------
// Q2.Subarray Sums Divisible by K
var subarraysDivByK = function (nums, k) {
  let sum = 0;
  let pref = new Map([[0, 1]]);
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let mod = ((sum % k) + k) % k;
    if (pref.has(mod)) count += pref.get(mod);

    pref.set(mod, (pref.get(mod) || 0) + 1);
  }
  return count;
};
// take 20 min 🥲
// --------------------------------------------------------------
// Q3.Find Minimum Number Of Arrows Needed To Burst All Balloons
//not able to solve this question
// --------------------------------------------------------------
//Q4.Target Sum
var findTargetSumWays = function (nums, target) {
  function helper(i, s) {
    if (i === nums.length) {
      return s === target ? 1 : 0;
    }

    let pos = helper(i + 1, s - nums[i]);
    let neg = helper(i + 1, s + nums[i]);
    return pos + neg;
  }
  return helper(0, 0);
};
// --------------------------------------------------------------

