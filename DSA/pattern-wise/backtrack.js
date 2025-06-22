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