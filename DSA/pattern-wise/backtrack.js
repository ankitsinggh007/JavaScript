////////////////////////Backtrack///////////////////////
/*
Q1. permutation of string⁄ 
*/
function solve(str) {
  const result = [];
  const chars = str.split('').sort(); // Sort so duplicates are next to each other
  const used = Array(str.length).fill(false); // Track used characters

  function generate(path) {
    if (path.length === str.length) {
      result.push(path.join(''));
      return;
    }

    for (let i = 0; i < chars.length; i++) {
      // Skip if already used
      if (used[i]) continue;

      // Skip duplicate chars at same level (prune)
      if (i > 0 && chars[i] === chars[i - 1] && !used[i - 1]) continue;

      used[i] = true;
      path.push(chars[i]);

      generate(path); // Recurse

      path.pop(); // Backtrack
      used[i] = false;
    }
  }

  generate([]);
  console.log(result);
}
/*
subset-I
 */
var subsets = function (nums) {
    let ans = []
    function helper(i = 0, path = []) {
        if (i == nums.length) {
            ans.push([...path]);
            return;
        }
        //exclude
        helper(i + 1, path);
        //include
        path.push(nums[i]);
        helper(i + 1, path);
        path.pop();



    }
    helper();
    return ans;
};