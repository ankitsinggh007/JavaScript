////////////////////////Backtrack///////////////////////
/*
Q1. permutation of string⁄ 
*/
function solve(str) {
  const result = [];
  const chars = str.split('').sort(); // Sort so duplicates are next to each other
  const used = Array(str.length).fill(false); // Track used characters

  function generate(path) {
    if (path.length === str.length) {
      result.push(path.join(''));
      return;
    }

    for (let i = 0; i < chars.length; i++) {
      // Skip if already used
      if (used[i]) continue;

      // Skip duplicate chars at same level (prune)
      if (i > 0 && chars[i] === chars[i - 1] && !used[i - 1]) continue;

      used[i] = true;
      path.push(chars[i]);

      generate(path); // Recurse

      path.pop(); // Backtrack
      used[i] = false;
    }
  }

  generate([]);
  console.log(result);
}
/*
subset-I
 */
var subsets = function (nums) {
    let ans = []
    function helper(i = 0, path = []) {
        if (i == nums.length) {
            ans.push([...path]);
            return;
        }
        //exclude
        helper(i + 1, path);
        //include
        path.push(nums[i]);
        helper(i + 1, path);
        path.pop();



    }
    helper();
    return ans;
};
/*
Subset-II
 */
var subsetsWithDup = function(nums) {

let ans=[];
nums.sort((a,b)=>a-b);
    function backtrack(start=0,path=[]){
        ans.push([...path]);
    
        for(let i=start;i<nums.length;i++){
            if(i>start && nums[i]==nums[i-1])continue;
            path.push(nums[i]);
            backtrack(i+1,path);
            path.pop();
        }
    }
    backtrack();
return ans;
};
// Letter Combinations of a Phone Number
var letterCombinations = function(digits) {
    let ans=[]
    if(digits.length==0) return ans;

    let mb = [
        "",    "",    "abc", "def", 
        "ghi", "jkl", "mno", 
        "pqrs", "tuv", "wxyz"
    ];
   function backtrack(start=0,path=[]){
        if(path.length==digits.length){
            ans.push(path.join(""));
            return ;
        }
        let str=mb[digits[start]];
        // console.log(str,"str")
            for(let i=0;i<str.length;i++){
                path.push(str[i]);
                console.log(i,"i")
                backtrack(start+1,path);
                path.pop();
            }

    }
    backtrack();
    return ans;

};
/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
*/

function Permute(){
  let ans=[];
    let n=[1,2,3];
    let visited=Array(n.length).fill(false);
    function Solve(path=[]){
        if(path.length==n.length){
            ans.push([...path]);
            return;
        }
        for(let i=0;i<n.length;i++){
            if(visited[i]) continue;
         visited[i]=true;   
            path.push(n[i]);
            Solve(path);
            path.pop();
            visited[i]=false;
        }
        
    }
    Solve();
    console.log(ans,"ans")
}
/*
Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
*/
    let ans = [];
let n = [1, 2, 1];
let v=Array(n.length).fill(false);
    n.sort((a,b)=>a-b);
    console.log(n,"n")
function Solve(path,visited){
    // console.log(path,visited,"--")
    if(path.length==n.length){
        ans.push([...path]);
        return ;
    }
    for (let i=0;i<n.length;i++){
        if(visited[i]) continue;
        if (i>0 && n[i]==n[i-1] && !visited[i-1])continue;
        visited[i]=true;
        path.push(n[i]);
        Solve(path,visited)
        path.pop();
        visited[i]=false;
    }
}
    Solve(path=[],v);
    console.log(ans,"ans")

/*
Combination sum-I
*/
function combinationSum(candidates, target) {
  let ans = [];
  candidates.sort((a, b) => a - b);

  function backtrack(start, path, targetLeft) {
    if (targetLeft === 0) {
      ans.push([...path]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > targetLeft) break;
      path.push(candidates[i]);
      backtrack(i, path, targetLeft - candidates[i]);
      path.pop();
    }
  }

  backtrack(0, [], target); // Just one call with args

  return ans;
}
/*
Combination Sum-II
*/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(n, target) {
    let ans=[];
    n.sort((a,b)=>a-b);
    console.log(n,"n");
    function helper(start=0,path=[],target){
        if(target==0){
            ans.push([...path]);
            return;
        }
        for(let i=start;i<n.length;i++){
            if(i>start && n[i]==n[i-1]) continue;
            let temp=target-n[i];
            if(temp<0) break;
            path.push(n[i]);
            helper(i+1,path,temp);
            path.pop();
        }
    }
    helper(undefined,undefined,target);
    return ans;

};
/*
Combination Sum-3
*/
(function main() {
    
    let ans=[];
    let n=[1,2,3,4,5,6,7,8,9];
    
    function Solve(start,path,target,k){
        if(k==0){
            if(target==0){
            ans.push([...path]);
            }
            return ;   
        }
        
        for(let i=start;i<n.length;i++){
            let targ=target-n[i];
            if(targ<0) break;
            if(i>0 && n[i]==n[i-1]) continue;
            path.push(n[i]);
            Solve(i+1,path,targ,k-1);
            path.pop();
        }
    }
    Solve(start=0,path=[],3,2);
    console.log(ans,"ans")

}());
