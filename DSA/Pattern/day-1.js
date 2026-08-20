
/*  Q1. *****
        *****
n=4     *****
        *****
*/

// Solution1: 
let n=4;
for(let i=0;i<n;i++) {
    let line='';
    for(let j=0;j<n;j++) {
        line +='*';
    }
console.log(line);
}
/*
Q2. *
    * *
n=4 * * *
    * * * *
*/ 

// Solution2:
n=4;
for(let i=0;i<n;i++){
    let line="";
    for(let j=0;j<i+1;j++){
        line +="* ";
    }
    console.log(line);
}

/*
    Q3. *
n=4   * * *
    * * * * *
  * * * * * * *    
  * * * * * * *    
    * * * * *     
      * * *      
        *       

*/


// Solution3:
console.log("Solution-3");
n=3;
for(let i=0; i<n*2; i++) {
    let line="";
    if(i<n){
    
        let gaps=n-(i+1);
        let stars=2*(i+1)-1;

        for(let j=0;j<gaps;j++){
                line+=" ";
        }
        for(let j=0;j<stars;j++){
                line+="*";
        }



    }
    else{
        
        let gaps=Math.abs(n-i);
        let stars=(n-gaps)*2-1;

        for(let j=0;j<gaps;j++){
                line+=" ";
        }
        for(let j=0;j<stars;j++){
                line+="*";
        }

    }
    console.log(line);
    
    
}

/*
Q4.
Input Format: N = 3
Result: 
  *  
  **
  ***  
  **
  *   */
// Solution4:
console.log("Solution-4");

n=4;
for(let i=1; i<2*n; i++) {
    let line="";
    if(i<=n){
        let star=i;
        for(let j=0;j<star;j++){
            line+="*";
        }
    }
    else{
        let star=2*n-i;
        for(let j=0;j<star;j++){
            line+="*";
        }
    }
    console.log(line);
}


/*
Q5.
Input Format: N = 3
Result: 
3 3 3 3 3 
3 2 2 2 3 
3 2 1 2 3 
3 2 2 2 3 
3 3 3 3 3

*/

// Solution5:

 console.log("Solution-5");
    n=6;

    for(let i=0; i<2*n-1; i++) {
        let line="";
        for(let j=0;j<2*n-1;j++) {
            let top=i;
            let bottom=2*n-2-i;
            let left=j;
            let right=2*n-2-j;
            line+=n- Math.min(top,left,right,bottom);
        }
        console.log(line);




    }

