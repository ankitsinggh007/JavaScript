/*
factorial   of n 
 */
  function factorial(n){
        if(n==0||n==1) return 1;
        return n*factorial(n-1);
    }
/*
Q2. Subsequences
*/
 function generate(str){
            let ans=[];
        function solve(i=0,res=""){
            if(i==str.length){
                ans.push(res);
                return ;
            }
            
            solve(i+1,res+str[i]);
            solve(i+1,res);
        }
        solve()
        return ans ;
    }
/*
Q3. Phone Number Combinations ✅
*/
function combination(digits){
    let ans=[];
    let mp=new Map([
        [2,'abc'], [3,'def'], [4,'ghi'], [5,'jkl'],
        [6,'mno'], [7,'pqrs'], [8,'tuv'], [9,'wxyz']
    ]);
    function solve(start=0,res=''){
        if(start==digits.length){
            ans.push(res);
            return ;
        }
        let str=mp.get(+digits[start]);
        for(let i=0;i<str.length;i++){
            solve(start+1,res+str[i]);
        }  
    }
    solve()
    return ans;
}
