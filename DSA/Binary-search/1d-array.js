/*
Given a sorted array arr[] (with unique elements) and an integer k, find the index (0-based) of the largest 
element in arr[] that is less than or equal to k. This element is called the "floor" of k. If such an element does not exist, return -1.
*/
console.log("question-22");
 function findFloor(arr, k) {
        // your code here
        let ans=-1;
        let low=0;
        let high=arr.length-1;
        
        while(low<=high){
            let mid=Math.trunc((low+high)/2);
            
                if(arr[mid]==k){ ans=mid;
                return mid;}
                else if(arr[mid]>k){
                    high=mid-1;
                }
                else {
                    ans=mid;
                    low=mid+1;
                }
        }
        return ans;
        
    }