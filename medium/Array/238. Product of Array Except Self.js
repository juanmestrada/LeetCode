/*

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

*/

/*
 * @param {number[]} nums
 * @return {number[]}
*/

var productExceptSelf = function(nums) {
    let resArray = [];
    let left = 1;
    
    for (let i = 0; i < nums.length; i++){
        if(i > 0){
           left = left * nums[i-1];
        }
        resArray[i] = left;
    }
    
    let right = 1;
    
    for(let j = nums.length-1; j >= 0; j--){
        if(j < nums.length-1){
           right = right * nums[j+1];
        }
        resArray[j] *= right;
    }
    
    return resArray;
};