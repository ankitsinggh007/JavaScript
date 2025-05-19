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