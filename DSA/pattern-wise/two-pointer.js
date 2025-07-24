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
    
    /*
    88. Merge Sorted Array
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
    */
   /**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i=m-1;
    let j=n-1;
    let k=m+n-1;

    while ( i>=0 && j>=0 ){

        let max=Math.max(nums1[i],nums2[j]);
            if ( nums1[i] == nums2[j] ){

                nums1[k]=nums1[i];
                k--;
                i--;
                nums1[k]=nums2[j];
                k--;
                j--;
            }
        else if( max == nums1[i] ) {
                nums1[k] = nums1[i];
                k--;
                i--;

        } 
        else if ( max == nums2[j] ) {
                nums1[k] = nums2[j];
                k--;
                j--;
        }
    }
    while( i >= 0 ){
        nums1[k] = nums1[i];
                k--;
                i--;

    }
    while ( j >= 0){
        nums1[k] = nums2[j];
                k--;
                j--;
    }
    
};
/*
977. Squares of a Sorted Array
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arra=[];
    let index=nums.length-1;

    let i=0;
    let j=nums.length-1;
        while(i<=j){
            if(Math.abs(nums[i])<nums[j]){
                arra[index]=nums[j]*nums[j];
                j--;
            }   else{
                arra[index]=nums[i]*nums[i];
                i++;
            }
            index--;
        }
        return arra;
};
/*
11. Container With Most Water
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.
*/
var maxArea = function(height) {
    
    let i=0;
    let j=height.length-1;
    max=(j)*Math.min(height[i],height[j]);
    while(i<j){
       
        if(height[i]<height[j]){
            i++;
        }else{
            j--;
        }
         let currentMax=(j-i)*Math.min(height[i],height[j]);
       max = max<currentMax?currentMax:max;
    }
    return max;
};
/*
125. Valid Palindrome
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.
 */
var isPalindrome = function(s) {
    
    let str='';
    // extraction
    for(let i=0;i<s.length;i++){
        if('0'<=s[i] && s[i]<='9' || 'a'<=s[i] && s[i]<='z' || 'A'<=s[i] && s[i] <='Z' ){

               if('A'<=s[i] && s[i] <='Z'){
                let lowerChar = String.fromCharCode(s[i].charCodeAt(0) + 32)
                    str+=lowerChar;
               }
               else{
                str+=s[i];
               }
        }
    }

    let i=0;
    let j=str.length-1;

    while(i<j){
        if(str[i]!=str[j]) return false;
        i++;
        j--;
    }

    return true;
};
/*
680. Valid Palindrome II
Given a string s, return true if the s can be palindrome after deleting at most one character from it.
*/
var validPalindrome = function(s) {
    const isPalindrome = (left, right) => {
        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    };
    
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
        }
        left++;
        right--;
    }
    return true;
};

/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    let low=0;
    let high=nums.length-1;
    let pivot=0;
    while(pivot<=high){
        if(nums[pivot]==0){
            // swap and increament pivot && low
                [nums[pivot],nums[low]]=[nums[low],nums[pivot]];
                low++;
                pivot++;

        }else if(nums[pivot]==2){
            //swap and decreament high
            [nums[pivot],nums[high]]=[nums[high],nums[pivot]];
            high--;            
        }
        else{
            pivot++;
        }
    }
};
//trapped rain water 
var trap = function (nums) {

    let left = []
    let right = [];
    let leftMax = 0
    let rightMax = 0
    for (let i = 0; i < nums.length; i++) {

        left.push(leftMax);
        right.unshift(rightMax);
        rightMax = Math.max(rightMax, nums[nums.length - 1 - i]);

        leftMax = Math.max(leftMax, nums[i]);

    }
    console.log(left, right);

    let trappedWater = 0;
    for (let i = 0; i < nums.length; i++) {
        trappedWater += Math.max(0, Math.min(left[i], right[i]) - nums[i]);

    }
    return trappedWater

};