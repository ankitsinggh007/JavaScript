'use strict';
/*****************************************     Bubble sorting      ******************************************************/

// Iterative method

// logic
// 1. compare the adjacent elements
// 2. if the first element is greater than the second element, swap them
// 3. repeat the same process for each element in the array


function bubbleSort(arr) {
        
    let swapped;
    for(let i = 0; i < arr.length; i++) {
        swapped=false;
        for(let j = 0; j < arr.length - i -1  ; j++) {
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped=true;

            }

        }
        if(!swapped){
            break;
        }
    }
    return arr;
}
console.log(bubbleSort([5,4,3,2,1]));

// Time complexity: O(n^2)  time complexity is always O(n^2)  
// can be optimized by using a flag to check if the array is already sorted
// Space complexity: O(1) time complexity is always O(n^2)  
// stable: Yes
// In-place: Yes

