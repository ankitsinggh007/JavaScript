//  121. Best Time to Buy and Sell Stock

var maxProfit = function (prices) {
  let len = prices.length;
  let buy = prices[0];
  let Profit = 0;
  for (let i = 1; i < len; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
    } else if (Profit < prices[i] - buy) Profit = prices[i] - buy;
  }
  return Profit;
};
//  347. Top K Frequent Elements
var topKFrequent = function (nums, k) {
  let map = new Map();

  for (let ele of nums) {
    map.set(ele, (map.get(ele) || 0) + 1);
  }
  let arr = [];
  for (let [ele, freq] of map) {
    arr.push([ele, freq]);
  }
  arr.sort((a, b) => b[1] - a[1]);

  let res = [];
  for (let i = 0; i < k; i++) {
    res.push(arr[i][0]);
  }
  return res;
};
