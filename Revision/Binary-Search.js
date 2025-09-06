
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
