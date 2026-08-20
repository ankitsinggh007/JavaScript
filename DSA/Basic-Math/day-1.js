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
Q3.Given an integer x, return true if x is a 
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

        /*
Q4.Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.

 An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
 Example 1:
Input:N = 153
Output:True
Explanation: 13+53+33 = 1 + 125 + 27 = 153
Example 2:
Input:N = 371
Output: True
Explanation: 33+53+13 = 27 + 343 + 1 = 371


        */

console.log("Solution-4");

var isArmstrong= function(n) { //O(log10(x))

    let digits=Math.trunc(Math.log10(n))+1; //O(1)
    let x=n;
    let result=0;

    while(x>0){                     //O(log10(x)) or O(d) d:no. of digits in no.
        let lastDigit=x%10;
        result+=lastDigit**digits;
        x=Math.trunc(x/10);
    }
    if(result===n)  return true;
    return false;

}
console.log(isArmstrong(153));
console.log(isArmstrong(15));
/*
 Q5. Problem Statement: Given an integer N, return all divisors of N.

Example 1:
Input:N = 36
Output:[1, 2, 3, 4, 6, 9, 12, 18, 36]
Explanation: The divisors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36.
Example 2:
Input:N =12
Output: [1, 2, 3, 4, 6, 12]
Explanation: The divisors of 12 are 1, 2, 3, 4, 6, 12.
*/
    console.log("Solution-5");

    // sol-1
    const divisorAll=(n)=>{ //O(n)
        for(let i=1;i<=n;i++){
            if(n%i==0){
                console.log(i);
            }
        }
    }
    // T.C=O(n)
    divisorAll(36);
    // sol-2
    const divisorAll2=(n)=>{ //O(sqrt(n))
        for(let i=1;i*i<=n;i++){
            if(n%i==0){
                console.log(i);
                if(i!=n/i){
                    console.log(n/i);
                }
            }
        }
    }
    // T.C=O(sqrt(n))
    /*
    Q6.Problem Statement: Given an integer N, check whether it is prime or not. 
    A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2.
    */
   const checkPrime=(n)=>{
    if(n<2) return false;
    for(let i=2;i*i<=n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;





   } 
   // T.C=O(sqrt(n))


   /*
  Q7. Find GCD of two numbers
   */

    const gcd=(a,b)=>{
        while(a!=0&&b!=0){
            if(a>b){
                a=a%b;
            }else{
                b=b%a;
            }
        }
        return a+b;
    }
    // T.C=O(log(min(a,b)))