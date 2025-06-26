//----------------------------------Binary Search------------------------//
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


 const findFirst=(nums,target)=>{
    let [l,r]=[0,nums.length];
    let min=-1;
    while(l<=r){
        let mid=Math.floor(r+(l-r)/2);
        if(nums[mid]==target){
            min=mid;
            r=mid-1;
        }else if(nums[mid]<target){
            l=mid+1
        }
        else{
            r=mid-1;
        }

    }
    return min;
    
 }
  const findLast=(nums,target)=>{
    let [l,r]=[0,nums.length];
    let max=-1;
    while(l<=r){
        let mid=Math.floor(r+(l-r)/2);
        if(nums[mid]==target){
            max=mid;
            l=mid+1;
        }else if(nums[mid]<target){
            l=mid+1
        }
        else{
            r=mid-1;
        }

    }
    return max;
    
 }
var searchRange = function(nums, target) {
    

    return [findFirst(nums,target),findLast(nums,target)]

};