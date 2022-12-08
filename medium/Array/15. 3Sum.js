/*

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

*/

/*
 * @param {number[]} nums
 * @return {number[][]}
*/


var threeSum = function(nums) {
    let result = [];
    
    nums.sort((a,b)=> {return a-b});
  
    if(nums.length < 3 ) return result;
  
    for ( let [i, num] of nums.entries()) {
     
      if(i > 0 && num == nums[i-1]) {
        continue;
       }
      
       let l = i+1;
       let r = nums.length-1;
      
       while(l<r){
         let sum = num+nums[l]+nums[r];
         
         if (sum > 0){
          r--;
         } else if (sum < 0){
           l++;
         } else {
           result.push([num, nums[l], nums[r]]);
           l++;
           while (nums[l] == nums[l-1] && l < r){
             l++;
           }
         } 
       }
    }
  
    return result;
    
};