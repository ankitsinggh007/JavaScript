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