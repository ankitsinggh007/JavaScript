'use strict';
// Q1. You have given an array  of n size with value  and  you had to store
//  in such a way that each query take O(1) time. 
// ex isPresent(x) /true or false.frequency(x) / return the frequency of x
//  0<=n<100 and 0<=x<=100.
console.log("solution-1")

class Hash{
    constructor(){
        this.arr = new Array(100).fill(0);
    }
    insert(x){
        this.arr[x]++;
    }
    isPresent(x){
        return this.arr[x] > 0;
    }
    frequency(x){
        return this.arr[x];
    }
}

const h1=new Hash();
h1.insert(5);
console.log(h1.isPresent(5)); // true
class Hash1 {
    hash ; // Class field

    constructor(size = 100) {
        this.hash = new Array(size).fill(0); // Optionally override default size
    }
}
const h2=new Hash1();
console.log(h2,"h2");

