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