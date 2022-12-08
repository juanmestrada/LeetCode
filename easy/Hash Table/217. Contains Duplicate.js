/*

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

*/

var containsDuplicate = function(nums) {
    let storage = {};
    
    for (let num of nums) {
        if (storage[num] === undefined){
            storage[num] = true;
        } else {
            return true;
        }
    }
    
    return false;
};