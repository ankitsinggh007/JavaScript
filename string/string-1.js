// console.log("starting a string");

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
/*
205. Isomorphic Strings
Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
*/
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    let sMap = {}; // Map for s -> t
    let tMap = {}; // Map for t -> s

    for (let i = 0; i < s.length; i++) {
        let sChar = s[i], tChar = t[i];

        // Check s -> t mapping
        if (sMap[sChar] && sMap[sChar] !== tChar) return false;
        // Check t -> s mapping
        if (tMap[tChar] && tMap[tChar] !== sChar) return false;

        // Store mappings
        sMap[sChar] = tChar;
        tMap[tChar] = sChar;
    }

    return true;
};
/*
796. Rotate String
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
A shift on s consists of moving the leftmost character of s to the rightmost position.
For example, if s = "abcde", then it will be "bcdea" after one shift.
 */
var rotateString = function(s, goal) {
    return s.length === goal.length && (s + s).includes(goal);
};
/*
242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
*/
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false; // If lengths differ, not an anagram

    let map = new Map();

    // Count character frequencies in `t`
    for (let i = 0; i < t.length; i++) {
        map.set(t[i], (map.get(t[i]) || 0) + 1);
    }
    for (let [key ,value] of map.entries()){
        console.log(`for ${key} : ${value}`);
    }
    console.log(map.get('n')
    ,map.get('z'))
    // Decrease count for characters in `s`
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (map.has(char) && map.get(char) > 0) {
            map.set(char, map.get(char) - 1);
        } else {
            return false;
        }
    }

    return true;
};

/*
451. Sort Characters By Frequency
Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.
Return the sorted string. If there are multiple answers, return any of them.
*/
var frequencySort = function(s) {
    let map=new Map();
    for(let i=0;i<s.length;i++){
        let char=s[i];
        map.set(char, (map.get(char) || 0) + 1);
    }
   let sortedChars = [...map.entries()].sort((a, b) => b[1] - a[1]);//nlogn

   let bucket=Array(s.length+1).fill(null).map(obj=>[]);

   for(let [char,freq] of map.entries()){

        bucket[freq].push(char);

   }

    let result="";

    for( let i=bucket.length-1;i>0;i--){

            for(let j=0;j<bucket[i].length;j++){

                result += bucket[i][j].repeat(i); 


            }

    }

    return result;

};
/*
1614. Maximum Nesting Depth of the Parentheses
Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.
 */
var maxDepth = function(s) {
    let max=0;
    let count=0;
    for(let char of s ){
        if(char==="(")count++;
        else if(char===")")count--;
        max=Math.max(count,max);
    }
    return max;
};