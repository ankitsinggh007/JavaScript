/*
1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/
var twoSum = function(nums, target) {

    nums.sort((a,b)=>a-b);

    let i=0;
    let j=nums.length-1;

    while(i<=j){
        let sum=nums[i]+nums[j];

        if(sum>target){
            j--;
        }
        else if(sum<target) {
            i++
        }
        else return [i,j];
    }

};
/*
15. 3Sum
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
*/
function twoSum(nums, i, j, target) {
    let k = nums.length - 1;
    let ans = [];
  
    while (j < k) {
      let sum = nums[j] + nums[k];
  
      if (sum > target) {
          
        k--;
      } else if (sum < target) {
  
        j++;
      } else {
        ans.push([nums[i], nums[j], nums[k]]);
        // skip duplicates
        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      }
    }
  
    return ans;
  }
  
  var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let ans = [];
  
    for (let i = 0; i < nums.length; i++) {
      while (i > 0 && nums[i] === nums[i - 1]){
          i++;
      };
      let target = -nums[i];
      let temp = twoSum(nums, i, i + 1, target);
      ans.push(...temp); // unpack result
    }
  
    return ans;
  };
  

/*
27. Remove Element
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
*/
var removeElement = function(nums, val) {
    let k=0;
    
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){
            nums[k]=nums[i];
            k++;
        }
    }
        return k;
    
    };