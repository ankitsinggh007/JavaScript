
/////////////--------------variation - 1: -----------///////////////////

// find the first occurence of target else return -1 ;

function firstOccurrence(nums, target){

    let [l,r]=[0,nums.length-1];
    let ans=-1;
    while(l<=r){
     const mid = l + ((r - l) >> 1);

        if(nums[mid]==target){
            ans=mid; 
            r=mid-1;
             }
             else if(nums[mid]>target){
                r=mid-1;
             }
             else{
                l=mid+1;
             }

         }

         return ans;  

}


function lastoccurence(nums,target){
    let ans=-1;

    let [l,r]=[0,nums.length-1];

    while(l<=r){  // l<=r -->as we need to find exact value ;
        const mid=l+((r-l)>>1);

        if(nums[mid]==target){
            ans=mid;
            l=mid+1;
        }
        else if(nums[mid]>target){
            r=mid-1;
        }
        else{
            l=mid+1;
        }
    }
    return ans;
}

/*
You’re given an integer array nums that was originally sorted in strictly increasing order and then 
rotated at an unknown pivot. All values are distinct. Given an integer target, return its index 
if found, otherwise return -1.
*/
function searchRotated(nums, target) {
  let l = 0, r = nums.length - 1;

  while (l <= r) {
    const mid = l + ((r - l) >> 1);
    if (nums[mid] === target) return mid;

    if (nums[l] <= nums[mid]) { // left half sorted
      if (nums[l] <= target && target < nums[mid]) r = mid - 1;
      else l = mid + 1;
    } else { // right half sorted
      if (nums[mid] < target && target <= nums[r]) l = mid + 1;
      else r = mid - 1;
    }
  }
  return -1;
}
// Approach 
// s-1. we will find mid
// s-2. figuring out wich part is sorted usinf l as refrence point hence if n[l]<n[m]--> left sorted.
                                                                    //   if n[l]>n[m]-->right sorted.
// s-3 check weather target is in sorted half if yes --> apply bs on sorted half 
//                                            if no --> apply bs on opposite half
//idea:
/*
Goal = find target (exact index).

You must decide which half is sorted.

Easiest test: nums[l] <= nums[mid] → left half sorted.
Then check if target lies in [nums[l], nums[mid]).

That’s why we reference l.
*/

function findSmall(nums){

  let ans=Infinity;

  let [l,r]=[0,0];

  while(l<r){

    let mid=l+((r-l)>>1);

    if(nums[l]<nums[mid]){
      ans=Math.min(ans,nums[l]);
      l=mid+1;
    }
    else{
      ans=Math.min(ans,nums[mid]);
      r=mid-1
    }
  }
  return ans;
}
console.log(findSmall([9,8,0,2,3,4,5,6,7]));




function findMin(nums) {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    const mid = l + ((r - l) >> 1);
    if (nums[mid] > nums[r]) {
      l = mid + 1;     // min is strictly to the right of mid
    } else {
      r = mid;         // mid could be the min
    }
  }
  return nums[l];
}





/*
Goal = collapse directly to the minimum (boundary).

Easiest test: compare nums[mid] with the right boundary.

Why right? Because the minimum is the pivot point — it’s the only place where nums[mid] <= nums[r] flips.

Using r lets you shrink the interval safely toward the min.
*/
/*
find peak element in an array
 */
function findPeakElement(nums) {

  let [l,r]=[0,nums.length-1];
  while(l<r){
    let mid=l+((r-l)>>1);
    if(nums[mid]<nums[mid+1]){
      l=mid+1;
    }else{
      r=mid;
    }
  }
  return r; // or return l both will pointing to same always .
 }
