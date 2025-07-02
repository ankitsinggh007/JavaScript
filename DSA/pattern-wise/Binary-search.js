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
/*
// variation rotated array 
*/

// varitaion BS on answer

// koko eat banana
function isValid(piles,mid,h){
    let sum=0
    for (let i=0;i<piles.length;i++){
        sum+=Math.ceil(piles[i]/mid);
    }
    return sum<=h;
 }
var minEatingSpeed = function(piles, h) {
    let [s,e]=[0,Math.max(...piles)];
    while(s<e){
        let mid=s+Math.floor((e-s)/2);
        if(isValid(piles,mid,h))e=mid;
        else s=mid+1;
    }
    return e;
};
//Minimum Number of Days to Make m Bouquets
var minDays = function(bloomDay, m, k) {
    if(bloomDay.length<m*k)return -1;
    let answer=-1;
    let [s,e]=[0,Math.max(...bloomDay)];

     while(s<=e){
        let mid=s+Math.floor((e-s)/2);
        if(isValid(bloomDay,mid,m,k)){
            answer=mid;
            e=mid-1
        }
        else s=mid+1;
    }
    return answer;

};
function isValid(arr,mid,m,k){
let flower=0;
    for(let i=0;i<arr.length;i++){
        if(m==0)return true;
        if(arr[i]<=mid){
            flower++;
            if(flower==k){
                m--;
                flower=0;
            }
        }else{
            flower=0;
        }
    }
    return m==0;
}
// Find the Smallest Divisor Given a Threshold
var smallestDivisor = function(nums, threshold) {
    if(nums.length>threshold) return ;

     let [s,e]=[1,Math.max(...nums)];

     while(s<e){
        let mid=s+Math.floor((e-s)/2);
        if(isValid(nums,mid,threshold))e=mid
        else s=mid+1;
    }
return e
};
function isValid(arr,mid,k){

    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(sum>k) return false;
        sum+=Math.ceil(arr[i]/mid);
    }
    return sum<=k;
}
// Capacity To Ship Packages Within D Days
var shipWithinDays = function(weights, days) {
    
    let [s,e]=[Math.max(...weights),weights.reduce((acc,curr)=>acc+curr,0)];

    while (s<e){
        let mid=Math.floor((s+e)/2);
        if(isValid(weights,mid,days))e=mid;
        else s=mid+1;
    }
    return s;
};

function isValid(nums,mid,days){
    let w=0;
    for(let i=0;i<nums.length;i++){
            w+=nums[i];
            if(w>mid){
                days--;
                w=nums[i];
            }
    }

    return days>0;
}
//Allocate Minimum Pages
class Solution {
    // Function to find minimum number of pages.
    findPages(arr, k) {
        
        if(arr.length<k) return -1;
        
        
 let [s,e]=[Math.max(...arr),arr.reduce((acc,curr)=>acc+curr,0)];
 
            while(s<e){

                let mid=s+Math.floor((e-s)/2);

                if(this.isValid(arr,mid,k)) e=mid;
                else s=mid+1;
            }
            
            return e;
    }
    
    isValid(arr,mid,k){
            let pages=0;
            
            let student=1;
        for(let i=0;i<arr.length;i++){
            if(mid<arr[i]) return false
            pages+=arr[i];
            if(pages>mid){
                student++;
                pages=arr[i];
            }
        }
        
        return k==student;
    }
}
//The Painter's Partition Problem-II
class Solution {

    minTime(arr, k) {
        // code here
        let [s,e]=[Math.max(...arr),arr.reduce((acc,curr)=>acc+curr,0)];
        
        while(s<e){
            // console.log(s,e)
            let mid=s+Math.floor((e-s)/2);
          
            if(this.isValid(arr,mid,k))e=mid;
            else s=mid+1;
        }
        return e;
    }
    
    isValid(arr,m,k){
        let painter=1;
        let space=0;
        for(let i=0;i<arr.length;i++){
            space+=arr[i];
            if(space>m){
                painter++;
                space=arr[i];
            }
        }
        return painter<=k
    }
    
}

//split array 
 function aggressiveCows(stalls, k) {
        // your code here
        
        if(stalls.length<k) return -1;
  stalls.sort((a, b) => a - b);
    let s = 1;
    let e = stalls[stalls.length - 1] - stalls[0];
    let ans = -1;

    while (s <= e) {
        let mid = Math.floor(s + (e - s) / 2);
        if (this.isValid(stalls, mid, k)) {
            ans = mid;     // mid is valid, try for larger distance
            s = mid + 1;
        } else {
            e = mid - 1;
        }
    }
    return ans;
    }
    function isValid(arr,m,k){
        
        let cows=1;
        // one question is it always possible that first stall will always be assign .
        let lv=arr[0];
        for(let i=1;i<arr.length;i++){
            if(arr[i]-lv>=m){
                cows++;
                lv=arr[i];
            }
        }
        return cows>=k
    }