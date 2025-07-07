

// find max length of subarray having sum == k
var maxSubArrayLen = function(nums, k) {
    let mp=new Map([[0,-1]]);
        let high=-1;
        let sum=0;
        for(let i=0;i<nums.length;i++){
            sum+=nums[i];
            let val=sum-k;
            //check in lookup
            if(mp[val]!=undefined){
                high=Math.max(high,i-mp[val]);
            }
            if(mp[sum]!=undefined)
            mp[sum]=i;
            
        }
        console.log(high)
        return high;
        
};