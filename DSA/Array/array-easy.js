/* Q1.Given an array arr[]. The task is to find the largest element and return it.
 Constraints:
 1 <= arr.size()<= 10^6
 0 <= arr[i] <= 10^6
*/
console.log("solution-1")

function largest(arr) {
    if(arr.length==0) return;
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
            
        }
      
    }
      return max;
}
/*
Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.

Note: The second largest element should not be equal to the largest element.

2 ≤ arr.size() ≤ 10^5
1 ≤ arr[i] ≤ 10^5

*/
console.log("solution-2")