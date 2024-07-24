/*

An array is considered special if every pair of its adjacent elements contains two numbers with different parity.

You are given an array of integers nums. Return true if nums is a special array, otherwise, return false.

*/

/*

APPROACH: Compare nums[i] with adjacent element to check for parity

Step 1: Traverse through every element in nums array
		
Step 2: Return false if adjacent elements are of equal parity


TIME COMPLEXITY: O(n)

Traverse through every element in nums array

*/


class Solution {
    public boolean isArraySpecial(int[] nums) {
        
        for(int i = 0; i < nums.length - 1; i++){
            if(nums[i] % 2 == nums[i+1] % 2) return false;
        }

        return true;
    }
}