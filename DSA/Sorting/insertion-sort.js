'use strict';
/*****************************************     Insertion sorting      ******************************************************/

// Iterative method

// logic
// 1. consider the first element as a sorted array
// 2. take the next element and insert it into the correct position in the sorted array
// 3. repeat the same process for the remaining elements 

function insertionSort(arr) {
   for(let i=1;i<arr.length;i++){
    let j=i;

    let size=j-1;
    while(size>=0){
        if(arr[size]>arr[j]){
            let temp=arr[size];
            arr[size]=arr[j];
            arr[j]=temp;
            size--;
            j--;
        }
        else{
            break;
        }

    }


   }
   return arr;      
   
}

console.log(insertionSort([5,4,3,2,1]));
console.log(insertionSort([5,4,3,2,1,2,3,4,5]));

// Time complexity: O(n^2)  time complexity is always O(n^2)
// Space complexity: O(1) time complexity is always O(n^2)
// stable: Yes  
// In-place: Yes

