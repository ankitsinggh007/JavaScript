'use strict';
/*****************************************     Merge sorting      ******************************************************/

// Iterative method

// logic
// 1. divide the array into two halves
// 2. sort the two halves
// 3. merge the two halves


function merge(arr1,arr2){
    let i=0;
    let j=0;
    let result=[];


        while(i<arr1.length && j<arr2.length){

            if(arr1[i]==arr2[j]){
                result.push(arr1[i]);
                result.push(arr2[j]);
                i++;
                j++;
            }
            else if(arr1[i]<arr2[j]){
                result.push(arr1[i]);
                i++;
            }
            else{
                result.push(arr2[j]);
                j++;
            }

        }
        while(i<arr1.length){
            result.push(arr1[i]);
            i++;
        }
        while(j<arr2.length){
            result.push(arr2[j]);
            j++;
        }
return result;


}
function mergeSort(arr,s,e) {
  if(e<=s){
    return [arr[s]];
  }
  let mid = Math.trunc((s + e) / 2);
  let arr1=mergeSort(arr,s,mid);
  let arr2=mergeSort(arr,mid+1,e);
  return merge(arr1,arr2);
   
}

console.log(mergeSort([5,4,3,2,1],0,4));

// Time complexity: O(nlogn)  time complexity is always O(nlogn)
// Space complexity: O(n) time complexity is always O(nlogn)
// stable: Yes
// In-place: No

// what is the difference between arr[0] and [arr[0]]?
// arr[0] is the first element of the array
// [arr[0]] is an array containing the first element of the array
// what is the difference between e-s+1 and e-s and s+e ?
// e-s+1 is the number of elements between s and e inclusive
// e-s is the number of elements between s and e exclusive
// s+e is the sum of the two indices
// To find the mid of an array ?
// mid = Math.trunc((s + e) / 2);