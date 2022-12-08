/*

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

*/

var removeElement = function(nums, val) {
    let x = 0;
    for (let num of nums) {
        if(num != val){
            nums[x] = num;
            x++;
        }
    }
    return x;
};