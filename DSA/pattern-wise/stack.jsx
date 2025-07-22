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