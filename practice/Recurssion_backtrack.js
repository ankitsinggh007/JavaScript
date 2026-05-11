//flatten the array

var flat = function (arr, n) {
  if (n === 0) return arr;
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      if (n > 0) temp.push(...flat(arr[i], n - 1));
    } else temp.push(arr[i]);
  }
  return temp;
};

//subsets
subsets = function (nums) {
  let result = [];
  function helper(start = 0, temp = []) {
    result.push([...temp]);

    for (let i = start; i < nums.length; i++) {
      temp.push(nums[i]);

      helper(i + 1, temp);

      temp.pop();
    }
  }
  helper();

  return result;
};

//subset-II
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  //sort

  nums.sort((a, b) => a - b);

  let result = [];

  function helper(level = 0, temp = []) {
    result.push([...temp]);

    for (let i = level; i < nums.length; i++) {
      //avoid dup
      if (i > level && nums[i] === nums[i - 1]) continue;

      temp.push(nums[i]);
      helper(i + 1, temp);
      temp.pop();
    }
  }

  helper();
  return result;
};
