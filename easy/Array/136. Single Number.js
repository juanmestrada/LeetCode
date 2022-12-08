/*

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

*/

var singleNumber = function(nums) {
    let xor = 0;
    
    for (let num of nums){
        xor ^= num
    }
    
    return xor;
};