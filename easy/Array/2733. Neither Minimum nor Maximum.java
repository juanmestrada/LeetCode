/*

Given an integer array nums containing distinct positive integers, find and return any number from the array that is neither the minimum nor the maximum value in the array, or -1 if there is no such number.

Return the selected integer.

*/

/*

APPROACH: Find the min and max integers in nums array. Because the problem asks for ANY number that is not the min or max, 
		  only 3 elements need to be checked as they are all distinct. The element that is not the min or max will be the answer 

Step 1: Create edge case to check if nums array length is greater than 3. Requirement cannot be met with less than 3 elements
		
Step 2: Set variable max of type int to max of nums[0], nums[1], nums[2]
	
Step 3: Set variable min of type int to min of nums[0], nums[1], nums[2]

Step 4: Check if the remaining element is neither max nor min and return it if true

Step 5: Return -1 if false


TIME COMPLEXITY: O(1)

Traverse through first 3 elements in nums array

*/

class Solution {
    public int findNonMinOrMax(int[] nums) {
        if(nums.length < 3) return -1;

        int max = Math.max(nums[0], Math.max(nums[1], nums[2]));
        int min = Math.min(nums[0], Math.min(nums[1], nums[2]));

        for (int i = 0; i < 3; ++i) {
            if(nums[i] > min && nums[i] < max) return nums[i];
        }

        return -1;
    }
}