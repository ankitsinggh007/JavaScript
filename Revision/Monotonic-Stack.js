/*
NGE
*/
var nextGreaterElement = function (nums1, nums2) {
    const mp = new Map();
    const st = [];
    for (let i = 0; i < nums2.length; i++) {
        while (st.length && nums2[i] > nums2[st[st.length - 1]]) {
            const j = st.pop();
            mp.set(nums2[j], nums2[i]);
        }
        st.push(i);
    }

    return nums1.map(x => (mp.has(x) ? mp.get(x) : -1));
};

/*
Daily temperature
*/
var dailyTemperatures = function(temp) {
    let n=temp.length;
    let st=[];
    let ans=new Array (n).fill(0);

    for(let i=0;i<n;i++){
        while(st.length && temp[i]>temp[st.at(-1)]){
            let j=st.pop();
            ans[j]=i-j;
        }a
        st.push(i);
    } 
    return ans;
};
/* Next greateest element */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(arr) {
    let n=arr.length;
    let st=[];
    let ans=new Array(n).fill(-1);

    for(let i=0;i<2*n;i++){

        while(st.length && arr[i%n]>arr[st.at(-1)]){
            ans[st.pop()]=arr[i%n]
        }
        if (i<n)
        st.push(i);
    } 
    console.log(ans,"ans");
    return ans;
};
/*
finde the maxArea in histogram
*/
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let n=heights.length
    let pse=new Array(n).fill(-1);
    let nse=new Array(n).fill(n);
    let st=[];

    for(let i=0;i<n;i++){
        while(st.length && heights[i]<heights[st.at(-1)]){
            st.pop();
        }
        if(st.length)
        pse[i]=st.at(-1);
        st.push(i);
    }
    st=[];
    for(let i=0;i<n;i++){
        while(st.length && heights[i]<heights[st.at(-1)]){
            nse[st.pop()]=i;
        }
        st.push(i);
    }
    let maxArea=0;
    for(let i=0;i<n;i++){

        let area=(nse[i]-pse[i]-1)*heights[i];
        maxArea=Math.max(maxArea,area);
    }
    return maxArea;
};