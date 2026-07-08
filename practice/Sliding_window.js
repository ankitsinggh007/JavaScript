/*Return the number of contiguous subarrays whose sum equals k.
Input:
nums = [1, 1, 1]
k = 2

Output:
2
*/

function contigouseSubarray(arr, k) {
  let total = 0;
  let ps = 0;
  let mp = new Map();
  mp.set(0, 1);

  for (let i = 0; i < arr.length; i++) {
    ps += arr[i];
    if (mp.has(ps - k)) {
      total += mp.get(ps - k);
    }

    mp.set(arr[i], (mp.get(arr[i]) || 0) + 1);
  }
  console.log(total);
  return total;
}
contigouseSubarray([1, 1, 1], 1);
/*Given an integer array nums and an integer k, return the length of the longest contiguous subarray
 such that the difference between the maximum and minimum values in that subarray is at most k.
 */
