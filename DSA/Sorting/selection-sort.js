'use strict';
/*****************************************     Selection sorting      ******************************************************/

// Iterative method

// logic
// 1.find the minimum element in the array
// 2. swap the minimum element with the first element
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

