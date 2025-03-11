console.log("starting a string");

/*
1021. Remove Outermost Parentheses
A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.
For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.
Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.
Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.
*/
var removeOuterParentheses = function(s) {
    let decomposition = []; // Stores primitive substrings
    let balance = 0, start = 0;

    // Step 1: Find all primitive decompositions
    for (let i = 0; i < s.length; i++) {
        balance += s[i] === '(' ? 1 : -1;
        if (balance === 0) { // Found a complete primitive substring
            decomposition.push(s.slice(start, i + 1)); // Store substring
            start = i + 1; // Move start to next primitive
        }
    }

    // Step 2: Remove outer parentheses from each primitive
    let result = decomposition.map(sub => sub.slice(1, -1)).join("");
    
    return result;
};
/*151. Reverse Words in a String
Given an input string s, reverse the order of the words.
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.
Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
*/
var reverseWords = function(s) {

    let formated= s.trim().split(/\s+/);
     return formated.reverse().join(' ');



};
/*
903. Largest Odd Number in String
You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.
A substring is a contiguous sequence of characters within a string.
*/
var largestOddNumber = function(num) {
    for(let i=num.length-1;i>=0;i--){

               if(num[i]%2==0) continue;
               else return num.slice(0,i+1);
       }
       return "";
};
/*
14. Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/
var longestCommonPrefix = function(strs) {
    

    if(strs.length<2) {
            return strs[0];
    }

    let common=commonner(strs[0],strs[1]);

    
    for(let i=2;i<strs.length;i++){
        common=commonner(common,strs[i]);
        if(common=="") return "";
    }
    return common;
};

function commonner(str1,str2){
    let common="";
    let i=0;
    let j=0;

    while (i < str1.length && i < str2.length && str1[i] === str2[i]) {
        i++;
    }
    return str1.slice(0,i);

}
// t.c-->O(n*m)
//space-->O(1);