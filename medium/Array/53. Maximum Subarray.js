/*


Given an integer array nums, find the 
subarray
 which has the largest sum and return its sum.

*/

/*
 * @param {number[]} nums
 * @return {number}
*/


var maxSubArray = function(nums) {
    let sum = nums[0];
    let max = sum;
    
    for (let i = 1; i < nums.length; i++){
        
        if ((nums[i] + sum) >= nums[i]){
            sum = sum + nums[i];
        } else{
            sum = nums[i];
        }
        
        max = Math.max(sum, max);
    }
    
    return max;
};