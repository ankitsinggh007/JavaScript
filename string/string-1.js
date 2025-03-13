// console.log("starting a string");

/*
1021. Remove Outermost Parentheses
A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.
For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.
Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.
Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.
*/
var removeOuterParentheses = function (s) {
  let decomposition = []; // Stores primitive substrings
  let balance = 0,
    start = 0;

  // Step 1: Find all primitive decompositions
  for (let i = 0; i < s.length; i++) {
    balance += s[i] === "(" ? 1 : -1;
    if (balance === 0) {
      // Found a complete primitive substring
      decomposition.push(s.slice(start, i + 1)); // Store substring
      start = i + 1; // Move start to next primitive
    }
  }

  // Step 2: Remove outer parentheses from each primitive
  let result = decomposition.map((sub) => sub.slice(1, -1)).join("");

  return result;
};
/*151. Reverse Words in a String
Given an input string s, reverse the order of the words.
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.
Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
*/
var reverseWords = function (s) {
  let formated = s.trim().split(/\s+/);
  return formated.reverse().join(" ");
};
/*
903. Largest Odd Number in String
You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.
A substring is a contiguous sequence of characters within a string.
*/
var largestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] % 2 == 0) continue;
    else return num.slice(0, i + 1);
  }
  return "";
};
/*
14. Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/
var longestCommonPrefix = function (strs) {
  if (strs.length < 2) {
    return strs[0];
  }

  let common = commonner(strs[0], strs[1]);

  for (let i = 2; i < strs.length; i++) {
    common = commonner(common, strs[i]);
    if (common == "") return "";
  }
  return common;
};

function commonner(str1, str2) {
  let common = "";
  let i = 0;
  let j = 0;

  while (i < str1.length && i < str2.length && str1[i] === str2[i]) {
    i++;
  }
  return str1.slice(0, i);
}
// t.c-->O(n*m)
//space-->O(1);
/*
205. Isomorphic Strings
Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
*/
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  let sMap = {}; // Map for s -> t
  let tMap = {}; // Map for t -> s

  for (let i = 0; i < s.length; i++) {
    let sChar = s[i],
      tChar = t[i];

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
var rotateString = function (s, goal) {
  return s.length === goal.length && (s + s).includes(goal);
};
/*
242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
*/
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false; // If lengths differ, not an anagram

  let map = new Map();

  // Count character frequencies in `t`
  for (let i = 0; i < t.length; i++) {
    map.set(t[i], (map.get(t[i]) || 0) + 1);
  }
  for (let [key, value] of map.entries()) {
    console.log(`for ${key} : ${value}`);
  }
  console.log(map.get("n"), map.get("z"));
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
var frequencySort = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    map.set(char, (map.get(char) || 0) + 1);
  }
  let sortedChars = [...map.entries()].sort((a, b) => b[1] - a[1]); //nlogn

  let bucket = Array(s.length + 1)
    .fill(null)
    .map((obj) => []);

  for (let [char, freq] of map.entries()) {
    bucket[freq].push(char);
  }

  let result = "";

  for (let i = bucket.length - 1; i > 0; i--) {
    for (let j = 0; j < bucket[i].length; j++) {
      result += bucket[i][j].repeat(i);
    }
  }

  return result;
};
/*
1614. Maximum Nesting Depth of the Parentheses
Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.
 */
var maxDepth = function (s) {
  let max = 0;
  let count = 0;
  for (let char of s) {
    if (char === "(") {
      count++;
      max = Math.max(count, max);
    } else if (char === ")") count--;
  }
  return max;
};
/*
13. Roman to Integer
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
*/
var romanToInt = function(s) {
    const map=new Map()
    map.set('I',1);
    map.set('V',5);
    map.set('X',10);
    map.set('L',50);
    map.set('C',100);
    map.set('D',500);
    map.set('M',1000);
let result=0;


    for(let i=0;i<s.length;i++){

        let num1=map.get(s[i]);
        let num2=map.get(s[i+1]);

        if(i<s.length-1 && num1<num2){
            result-=num1; 
        }
        else{
            result+=num1;
        }
    }
    return result;
    
};
/*
8. String to Integer (atoi)
Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
The algorithm for myAtoi(string s) is as follows:
1. Whitespace: Ignore any leading whitespace (" ").
2. Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
3. Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
4. Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
Return the integer as the final result.
*/
var myAtoi = function(s) {
    let INT_MAX = 2**31 - 1;
    let INT_MIN = -(2**31);

    // Step 1: Ignore leading whitespace
    let temp = s.trimStart();
    let num = 0, sign = 1, i = 0;

    // Step 2: Handle optional sign
    if (temp[i] === '-' || temp[i] === '+') {
        sign = temp[i] === '-' ? -1 : 1;
        i++;
    }

    // Step 3: Process numerical digits
    while (i < temp.length && temp[i] >= '0' && temp[i] <= '9') {
        let digit = temp[i] - '0';

        // Step 4: Overflow check
        if (num > Math.floor(INT_MAX / 10) || 
           (num === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        num = num * 10 + digit;
        i++;
    }

    // Step 5: Apply sign and return result
    return num * sign;
};
