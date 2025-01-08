// Q1.extract all digits from  no. given and also total no. of digits
// input:- digits from 1987654;

    // Solution-1;

    let n=1234567;

    //to extract a digit
    let x=n;
    const arr=[];
    while(x>0){
        let digit=x%10;
        arr.unshift(digit);
        x=Math.trunc(x/10);
    }
        // t.c=O(d) d:no.of digit in no.
    console.log(arr);

    // to find total no. of digits
    console.log(arr.length);
    // t.c=O(d) d:no.of digit in no.
    
// Alternate sol    
    
    console.log(Math.log10(n));
    // Time complexity: O(1).






/* Q2.reverse of a no. noted:-if no. has zero at trail then not intinclude at reverse ex if i/p: 1400 o/p:41

Input:N = 12345
Output:54321
Explanation: The reverse of 12345 is 54321.



*/

// Solution-2;
console.log("Solution-2");
// first approach using  js method
 n=1200;
      
 let temp=String(n);
 let result="";
    for(let i=temp.length-1 ; i>=0 ; i--){
     console.log(temp[i]);
        result+=temp[i];
    }
    result=Number(result);
    console.log(result,typeof result,"result");

    // second approach w/ using js

    let flag=false;




    

























/*
Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/

var isPalindrome2= function(x) {
   
    // logic-1 reverse the number and check
        let n=x;
    let count=Math.trunc(Math.log10(n));
    
        if(n<0) return false;
        let reverse=0;
        while(n>0){
         let lastDigit=n%10;
            reverse=reverse+lastDigit*(10**count)
            n=Math.trunc(n/10);
            count--;
        }
        if(reverse==x)return true;
        return false;
    };
    // T.C=O(d) d:no. of digits in no.

const isPalindrome1=function(x) { 
        // logic-2   2 pointer


            let str=String(x); //O(d) d:no. of digits in no.
        
            for(let i=0,j=str.length-1;i<j;i++,j--){
        
                    if(str[i]!=str[j]){
                        return false;
                    }
        
            }
            return true;
        
        };
        
        // T.C=O(d) d:no. of digits in no.