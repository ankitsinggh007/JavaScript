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
//permuatation of of set of unique numbers
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];

  function helper(temp = [], visited = new Set()) {
    if (temp.length === nums.length) {
      result.push([...temp]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited.has(i)) continue;
      temp.push(nums[i]);
      visited.add(i);
      helper(temp, visited);
      visited.delete(i);
      temp.pop();
    }
  }
  helper();

  return result;
};
//Q4. permute-II
const permuteUnique = function (nums) {
  nums.sort();
  let result = [];
  let isVisited = new Set();
  function helper(temp = []) {
    if (temp.length === nums.length) {
      result.push([...temp]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (isVisited.has(i)) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !isVisited.has(i - 1)) continue;

      temp.push(nums[i]);
      isVisited.add(i);

      helper(temp);
      temp.pop();
      isVisited.delete(i);
    }
  }
  helper();

  return result;
};

// combination sum
var combinationSum = function (candidates, target) {
  let result = [];
  candidates.sort((a, b) => a - b);
  function helper(start = 0, temp = [], t = target) {
    if (t === 0) {
      result.push([...temp]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (t - candidates[i] < 0) break;
      temp.push(candidates[i]);
      helper(i, temp, t - candidates[i]);
      temp.pop();
    }
  }
  helper();

  return result;
};

//permute-II
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);

  let result = [];

  function helper(start = 0, temp = [], t = target) {
    if (t === 0) {
      result.push([...temp]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      if (t < candidates[i]) break;

      temp.push(candidates[i]);

      helper(i + 1, temp, t - candidates[i]);

      temp.pop();
    }
  }

  helper();

  return result;
};
