
/////////////--------------variation - 1: -----------///////////////////

// find the first occurence of target else return -1 ;

function firstOccurrence(nums, target){

    let [l,r]=[0,nums.length-1];
    let ans=-1;
    while(l<=r){
     const mid = l + ((r - l) >> 1);

        if(nums[mid]==target){
            ans=mid; 
            r=mid-1;
             }
             else if(nums[mid]>target){
                r=mid-1;
             }
             else{
                l=mid+1;
             }

         }

         return ans;  

}


function lastoccurence(nums,target){
    let ans=-1;

    let [l,r]=[0,nums.length-1];

    while(l<=r){
        const mid=l+((r-l)>>1);

        if(nums[mid]==target){
            ans=mid;
            l=mid+1;
        }
        else if(nums[mid]>target){
            r=mid-1;
        }
        else{
            l=mid+1;
        }
    }
    return ans;
}