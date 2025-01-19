'use strict';
/*****************************************     Quick sorting      ******************************************************/

// Iterative method

// logic
// select pivot as first or any random no.
// place the pivot at its correct position
// place all the elements smaller than pivot to the left of pivot
// place all the elements greater than pivot to the right of pivot



    
while(i <= j) {
    // Keep moving i right until we find element greater than pivot
    while(i <= e && arr[i] <= pivot) {
        i++;
    }
    
    // Keep moving j left until we find element smaller/equal to pivot
    while(j > s && arr[j] > pivot) {
        j--;
    }
    
    // If pointers haven't crossed, swap elements
    if(i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
let arr = [10, 7, 8, 9, 1, 5];
console.log(quickSort(arr, 0, arr.length - 1));

console.log(quickSort([5,4,3,2,1],0,4));

// Time complexity: O(nlogn) worst case: O(n^2)
// Space complexity:    
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