/* 
Q1.Print GFG n times without the loop .
*/
console.log("solution-1")

let n=5;

const printGfg=(n)=>{
if(n<=0) return;

printGfg(n-1);
console.log("GFG",n);

}
printGfg(10);
/*Q2.
Print numbers from 1 to n without the help of loops. You only need to complete the function printNos() that takes n as a parameter and prints the number from 1 to n recursively.

Note: Don't print any newline, it will be added by the driver code.
 */
console.log("solution-2")

const printNos=(n)=>{
if(n<=0) return;

printNos(n-1);
console.log(n);

}
/*
Q3.Factorial of N numbers
*/
console.log("solution-3")

const factorial=(n)=>{
if(n<=1) return 1;

return n*factorial(n-1);

}
/**
 Q4.You are given an array of integers arr[]. Your task is to reverse the given array.
 */
console.log("solution-4")
const reverseArray=(arr)=>{
    
}