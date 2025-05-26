//Factorial using recursion
/*
70. Climbing Stairs
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/
var climbStairs = function(n) {
        let arr=[]
    function helper(n){
        if(n==1||n==0) return 1;
    if(arr[n]) return arr[n];
        arr[n]= helper(n-1) + helper(n-2)
        return arr[n];
    }
    return helper(n);
};
/*
Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.
Return a list of all possible strings we could create. Return the output in any order.
*/
var letterCasePermutation = function(s) {
    let ans=[];
    function helper(i=0,res=""){
        if(res.length==s.length){
            ans.push(res);
            return;
        }
        
        if("a"<=s[i] && s[i]<="z" || "A"<=s[i] && s[i]<="Z"){
             res+=s[i].toUpperCase()
            helper(i+1,res);
            res-=s[i].toUpperCase()
            helper(i+1,res);
        }
        else{
             res+=s[i];
            helper(i+1,res);
        }
    }
    
    helper();
    return ans;
    
};
// alternate with some changes 
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
let ans=[];
  function helper(i=0,str=""){
    if(i>=s.length){
        ans.push(str);
        return;
    }

    // if char make two call
    if("a"<=s[i]&& s[i]<="z" || "A"<=s[i] && s[i]<="Z"){
        helper(i+1,str+s[i].toUpperCase());
        helper(i+1,str+s[i].toLowerCase());
    }else{
        helper(i+1,str+s[i]);
    }

  }  
  helper()
  return ans;
};