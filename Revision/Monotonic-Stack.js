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

        // let mp= new Map();
        let sol=new Array(temp.length).fill(0);
            let j=0;
            let S=[];
        for(let i=0;i<temp.length;i++){
            while(S.length>0 && temp[S[S.length-1]]<temp[i]){

                    
                    let prev=S.pop();

                    sol[prev]=i-prev;
            }
            S.push(i);
        }
       
        return sol;

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