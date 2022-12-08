/*

Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

*/

/*
 * @param {number[]} nums
 * @return {number}
*/

var maxProduct = function(nums) {
    let n = nums.length,
        res = nums[0],
        pref = 0,
        suf = 0;
  
    for(let i = 0; i < n; i++) {
      pref = (pref == 0 ? 1 : pref) * nums[i];
      suf = (suf == 0 ? 1 : suf) * nums[n - 1 - i];
      res = Math.max(res, Math.max(pref, suf));
    }
    
    return res;
};