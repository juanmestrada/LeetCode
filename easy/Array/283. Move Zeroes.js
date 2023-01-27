/*  

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

*/

/*

APPROACH: While traversing nums array, use slow pointer (l) to move non 0 integers to left of array by swapping element at nums[i] to position of slow pointer, incrementing (l) after every swap. After for loop has completed, all 0s will be at the end of nums array

Step 1: 
	Create slow/left pointer (l)
	* Initialized to 0, (0 index of nums array)

Step 2:
	Create for-loop to traverse through nums array

Step 3:
	Set condition for swapping elements, elements not equal to 0 will be swapped to the left
	* create temporary variable (tmp) to hold element at index of slow/left (l), (where non 0 element of current iteration will be moved)
	* swap current non 0 element to index of slow/left (l) pointer
	* swap element from tmp pointer to position of current iteration of nums array
	* increment slow/left (l) pointer after every swap 


TIME COMPLEXITY: O(n)

Traverse through nums array and move all 0s to end of array, O(n)

*/

/*
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
*/


var moveZeroes = function(nums) {
	// slow/left pointer
    let l = 0;
    
    for(let r = 0; r < nums.length; r++){
    	// only move non 0 elements
        if(nums[r] != 0){
        	// hold pointer to element at position of slow/left pointer
            let tmp = nums[l];
            // move current element to the left (position at slow/left (l) pointer)
            nums[l] = nums[r];
            // swap element at nums[l] to position at current index
            nums[r] = tmp;
            // increment slow/left pointer
            l++;
        }
    }
};