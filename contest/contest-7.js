var isPalindrome = function (s) {
  let i = 0,
    j = s.length - 1;
  const isAlphaNum = (c) => (c >= "a" && c <= "z") || (c >= "0" && c <= "9");

  s = s.toLowerCase();

  while (i < j) {
    while (i < j && !isAlphaNum(s[i])) i++;
    while (i < j && !isAlphaNum(s[j])) j--;
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }
  return true;
};

//take 10 min
var groupAnagrams = function (strs) {
  let res = strs.map((str) => [...str]);
  res = res.map((arr) => arr.sort().join(""));

  let mp = new Map();
  for (let i = 0; i < res.length; i++) mp.set(res[i], []);
  for (let i = 0; i < res.length; i++) {
    mp.get(res[i]).push(strs[i]);
  }
  let result = [];
  for (let obj of mp.keys()) {
    result.push(mp.get(obj));
  }

  return result;
};

//took 40 min.
function isSame(smp, tmp) {
  for (let key of tmp.keys()) {
    if (smp.has(key) && smp.get(key) >= tmp.get(key)) continue;
    else return false;
  }
  return true;
}
var minWindow = function (s, t) {
  let min = Infinity;
  let minString = "";
  let tmp = new Map();
  for (let letter of t) {
    tmp.set(letter, (tmp.get(letter) || 0) + 1);
  }

  let i = 0;
  j = 0;
  let smp = new Map();
  while (j < s.length) {
    smp.set(s[j], (smp.get(s[j]) || 0) + 1);

    while (isSame(smp, tmp)) {
      if (j - i + 1 < min) {
        min = j - i + 1;
        minString = s.slice(i, j + 1);
      }
      if (smp.get(s[i]) === 1) smp.delete(s[i]);
      else smp.set(s[i], smp.get(s[i]) - 1);
      i++;
    }

    j++;
  }

  return minString;
};
//took 20 min to solve
