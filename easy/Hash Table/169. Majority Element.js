/*

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

*/

var majorityElement = function(nums) {
    let major = nums[0],
        counter = 1;
  
    for(let i = 1; i < nums.length; i++) {
      if (counter == 0) {
        major = nums[i];
        counter++;
      } else if (major == nums[i]){
        counter++;
      } else {
        counter--;
      }
    }
  
    return major;
};