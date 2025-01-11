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
// using js built-in method 

const reverseArray=(arr)=>{
return arr.reverse();
}
const reverseArray2Helper=(arr,start,end)=>{
    if(start>end)return;
    let temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
    reverseArray2Helper(arr,start+1,end-1);

}
const reverseArray2=(arr)=>{
  let n=arr.length;
  return reverseArray2Helper(arr,0,arr.length-1);  
}

console.log(reverseArray([1,2,3,4,5]));

/**
 Q5.check if a given string is palindrome or not 
 */
console.log("solution-5")
const isPalindromeHelper=(str,start,end)=>{
    if(start>end) return true;
    if(str[start]!==str[end]) return false;
    return isPalindromeHelper(str,start+1,end-1);


}
const isPalindrome =(str)=>{
return isPalindromeHelper(str,0,str.length-1);
}
console.log(isPalindrome("jahaj"));

/*
Q6.A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/
console.log("solution-6")

// logic 1. remove all non-alphanumeric characters and convert all uppercase letters into lowercase letters
      //  2. check if the string is palindrome or not .

      const removeNonAlphanumeric=(str)=>{
        // non-alphanumeric characters are [^a-zA-Z0-9];
        let temp="";
        for(let i=0;i<str.length;i++){
          if((str[i] >='A' && str[i] <='Z') || (str[i]>='a'  && str[i]<='z') || str[i]>='0' && str[i]<='9'){
            temp+=str[i]
        }
        

      }
      return temp;
    }
    const isPalindrome2=(str,s,e)=>{
        if(s>=e) return true;
        if(str[s]!=str[e]) return false;
      return isPalindrome2(str,s+1,e-1);
    }
var isPalindromesol = function(s) {
    
          let str=removeNonAlphanumeric(s);
       str=str.toLowerCase();
    console.log(str,"str")


    return isPalindrome2(str,0,str.length-1);
};
/*
Q7. The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
*/ 
console.log("solution-7")
var fib = function(n) {

  if(n==1 ||n==0) return n;
  return fib(n-1) +fib(n-2);

};

function factryFunction(){

}
console.log(factryFunction,factryFunction.prototype)