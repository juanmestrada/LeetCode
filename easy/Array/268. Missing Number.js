/*

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

*/

/*

APPROACH: Use XOR to find the missing value between completed sequence (range [0-n+1]) and the given nums array

Step 1:
	Create result (res) variable

Step 2:
	Create for loop to traverse through nums array

Step 3:
	In for loop:
	* XOR result (res) with completed sequence
	* XOR result (res) again now with element in array

Step 4:
	Return result (res)
	* values in completed sequence and nums array with cancel each other out and missing value will be left 


TIME COMPLEXITY: O(n)

Traverse through nums array to find missing number between completed sequence and nums, O(n)


*/

var missingNumber = function(nums) {
    let res = 0;
    
    for(let i = 0; i < nums.length; i++){
    	// XOR result with completed sequence
        res ^= i+1;
        // XOR result with element in nums array
        res ^= nums[i];
    }
    
    // Same values will cancel out
    // Missing number will remain
    return res;
};