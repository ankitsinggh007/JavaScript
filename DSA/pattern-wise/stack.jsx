let proto={
        //method
        push(value){
            this.arr.push(value);
            return;
        },
        pop(){
            this.arr.pop();
        },
    isEmpty(){
        return this.arr.length==0;
    },
    top(){
      return this.arr.slice(-1);
    }

    }
 function Stack(){
    this.arr=[];  
 }
 Stack.prototype=proto;
    
    // ------------------------------------------------------------------------------------------
    
    // balanced paranthesis 
var isValid = function(s) {
    let arr=[];

    for(let symbol of s ){
        
        if(symbol===")" && arr[arr.length-1]=="("){
            arr.pop();
            continue;
        }
        if(symbol==="]" && arr[arr.length-1]=="["){
            arr.pop();
            continue;

        }
        if(symbol==="}" && arr[arr.length-1]=="{"){
            arr.pop();
            continue;
        }
        arr.push(symbol);
        
    }

    return (arr.length)!=0 ?false:true;

};

//Next greatest Element
var nextGreaterElement = function (nums1, nums2) {
    let arr = [];
    let mp = new Map();
    for (let i = nums2.length - 1; i >= 0; i--) {
        while (arr.length != 0 && nums2[i] > arr[arr.length - 1]) {
            arr.pop();
        }

        mp.set(nums2[i], arr.length === 0 ? -1 : arr[arr.length - 1]);
        arr.push(nums2[i]);
    }

    let ans = [];
    for (let i = 0; i < nums1.length; i++) {
        ans[i] = mp.get(nums1[i]);
    }
    return ans;
};
// next greater element-II
var nextGreaterElements = function (nums) {

    let arr = [];
    let answer = [];
    let n = nums.length;
    for (let i = 2 * n - 1; i >= 0; i--) {
        let idx = i % n;
        while (arr.length != 0 && nums[idx] >= arr[arr.length - 1]) {
            arr.pop();
        }
        if (i < n)
            answer[idx] = arr.length == 0 ? -1 : arr[arr.length - 1];

        arr.push(nums[idx]);
    }

    return answer;

};
// Next Smallest Elements
 function NSE(arr){
//         stack
        let stack=[];
        let lookup=[];
        
        for(let i=arr.length-1;i>=0;i--){
            
            while(stack.length!=0 && stack[stack.length-1]>arr[i]){
                stack.pop();
            }
            lookup[i]=stack.length==0?-1:stack[stack.length-1];
            stack.push(arr[i]);
        }
        return lookup;
    }
    // largest histogram
    //brute force using formula for i=0-->n => (pse[i]-nse[i]-1)*element
    function previousSmallestIndex(ip,stack){
            let arr=[];
        for(let i=0;i<ip.length;i++){
            while(stack.length!=0 && ip[i]<=ip[stack[stack.length-1]])
                stack.pop();
        
        arr[i]=stack.length!=0?stack[stack.length-1]:-1;
        stack.push(i);
        }
        return arr;
    }
     function nextSmallestIndex(ip,stack){
            let arr=[];
        for(let i=ip.length-1;i>=0;i--){
            while(stack.length!=0 && ip[i]<=ip[stack[stack.length-1]])
                stack.pop();
        
        arr[i]=stack.length!=0?stack[stack.length-1]:ip.length;
        stack.push(i);
        }
         return arr;
    }
    
        var largestRectangleArea = function(heights) {
            let stack=[];
            let pse=previousSmallestIndex(heights,stack);
            stack=[];
            let nse=nextSmallestIndex(heights,stack);
            let maxHeights=0;
            console.log(nse,pse)
            for(let i=0;i<heights.length;i++){
                maxHeights=Math.max(maxHeights,(nse[i]-pse[i]-1)*heights[i]);
            }
            return maxHeights;
            
};
// optimized
function largestRectangleArea(heights) {
    let stack = [];
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        let start = i;

        while (stack.length && stack[stack.length - 1][1] > heights[i]) {
            let [index, height] = stack.pop();
            maxArea = Math.max(maxArea, height * (i - index));
            start = index;
        }

        stack.push([start, heights[i]]);
    }

    while (stack.length) {
        let [index, height] = stack.pop();
        maxArea = Math.max(maxArea, height * (heights.length - index));
    }

    return maxArea;
}
