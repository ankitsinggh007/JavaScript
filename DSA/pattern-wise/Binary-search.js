//----------------------------------Binary Search------------------------//
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// find first and last Ocuurence
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
// search element
var search = function(nums, target) {
    

let [l,r]=[0,nums.length-1];

while(l<=r){
    
    let mid=Math.floor(r+(l-r)/2);

    if(nums[mid]==target){
        return mid;
    }else if (nums[mid]>target){
            r=mid-1;
    }
    else{
        l=mid+1;
    }
}
return -1
};
// find the hth missing element 
var findKthPositive = function(arr, k) {
    
    let [start,end]=[0,arr.length-1];

    while(start<=end){
        let mid=Math.floor((end-start)/2)+start;
        let missing=arr[mid]-mid-1;
        if(missing<k) start=mid+1;
        else end=mid-1;
    }

    return start+k
};
/*
finding square root of x 
*/
var mySqrt = function(x) {
    let ans=0;
    let [start,end]=[0,Math.floor(x/2)+1];
    while(start<=end){
        let mid=start+Math.floor((end-start)/2);
        let val=mid*mid;
        if(val==x){
            return mid;
        }else if(val<x){
            ans=mid;
            start=mid+1;

        } else end=mid-1;

    }
    return Math.floor(ans);
};