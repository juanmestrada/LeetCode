/*  

You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b

*/

/*

APPROACH: Traverse through nums array to find valid range by adding 1 to each iteration of for loop to check if number exists in array and incrementing to find next available value in range

Step 1: 
	Create result (res) array that will hold ranges of nums

Step 2:
	Traverse through nums array

Step 3:
	In for loop:
	* Create pointer (start) to hold starting range
	* Create while loop to build current range, beginning at start -> nums[i+1] (i will be incremented so long as value exists in nums array and nums[i]+1 == nums[i+1]) 
	* Push range to result array (res)

Step 4:
	Return result array (res) of ranges found


TIME COMPLEXITY: O(n)

Traverser through every element of nums array to add range to result (res), O(n)

*/

/*
 * @param {number[]} nums
 * @return {string[]}
*/


var summaryRanges = function(nums) {
	// result array to store ranges found in nums array
    const res = [];
    
    for(let i = 0; i < nums.length; i++){
        // starting value of range
        let start = nums[i];
        
        // increment i so long as value exists in nums array 
        while(i+1 < nums.length && nums[i]+1 == nums[i+1]){
            i++; 
        }
        
        // push current range to result
        if(start != nums[i]){
        	// current range has more than one element
            res.push(""+start+"->"+nums[i]);
        } else {
        	// current range is only 1 element
            res.push(start+"");
        }
    }
    return res;
};