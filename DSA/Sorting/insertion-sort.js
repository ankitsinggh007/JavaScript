'use strict';
/*****************************************     Insertion sorting      ******************************************************/

// Iterative method

// logic
// 1. consider the first element as a sorted array
// 2. take the next element and insert it into the correct position in the sorted array
// 3. repeat the same process for the remaining elements 

function selectionSort(arr) {
        
    for(let i=0;i<arr.length;i++){
        
        let minIndex=i;
        
        for(let j=i;j<arr.length;j++){
            if(arr[minIndex]>arr[j]){
                minIndex=j;
            }
        }
        let temp =arr[i]
        arr[i]=arr[minIndex]
        arr[minIndex]=temp;
    }
}

// Time complexity: O(n^2)  time complexity is always O(n^2) no matter what the input is   
// Space complexity: O(1)   time complexity is always O(n^2) no matter what the input is    
// stable: No
// In-place: Yes

