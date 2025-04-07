function Print(N,i=1){
    if(N==i) {
      console.log(i);
      return;
    }
    console.log(i);
    return Print(N,i++);
  }
  // as it is tail we can convert it into iterative 
    let i=1;
  while(N!=i){
    console.log(i);
    i++;
  }
  /////////////////////////////////////////////////
  //✅ [✔] Print numbers from N to 1 using recursion
  
  function revPrint(N){
    if(N==1) {console.log(1);
    return;}
    console.log(N);
    return revPrint(N--);
  }
  // as it is tail we can convert it into iterative too
  
  while(N>=1){
    console.log(N);
    N--;
  }
  // ✅ [✔] Factorial of N using recursion
  
  function factorial(n){
    if(n==0||n==1) return n;
    return n*factorial(n-1);
  }
  // can it be convert into tail?
  // ✅ [✔] Sum of first N numbers using recursion
  
  function firstN(s){
    if(s==0) return 0; 
    return s+firstN(s-1);
  }
  // ✅ [✔] Power function (x^n) using recursion
  
  function power(x,n){
    if(n==0) return 1;
    if (n==1) return x;
    return x*power(x,n-1); 
    
  }

  /*
  A digit string is good if the digits (0-indexed) at even indices are even and the digits at odd indices are prime (2, 3, 5, or 7).

For example, "2582" is good because the digits (2 and 8) at even positions are even and the digits (5 and 2) at odd positions are prime. However, "3245" is not good because 3 is at an even index but is not even.
Given an integer n, return the total number of good digit strings of length n. Since the answer may be large, return it modulo 109 + 7.

A digit string is a string consisting of digits 0 through 9 that may contain leading zeros.
  */
 var countGoodNumbers = function(n) {
    n = BigInt(n);
    let even = (n + 1n) / 2n;
    let odd = n / 2n;

    let evenWays = modPow(5n, even);
    let oddWays = modPow(4n, odd);

    return Number((evenWays * oddWays) % mod);
};

function modPow(base, exp) {
    let result = 1n;
    base = base % mod;

    while (exp > 0n) {
        if (exp % 2n === 1n) {
            result = (result * base) % mod;
        }
        base = (base * base) % mod;
        exp = exp / 2n;
    }
    return result;
}
