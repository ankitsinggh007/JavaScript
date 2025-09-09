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
