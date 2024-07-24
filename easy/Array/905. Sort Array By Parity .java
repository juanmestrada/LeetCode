/*

Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.

*/

/*

APPROACH: Use closing window technique with 2 pointers to swap elements 

Step 1: Initialize variable left of type int to 0. To keep track of left-most index for even integers
		
Step 2: Initialize variable right of type int to nums.length - 1. To keep track of right-most index for odd integers
	
Step 3: Use while loop to iterate through nums array as window method closes

Step 4: Swap elements using pointers to correct side of array

Step 5: Return nums array


TIME COMPLEXITY: O(n)

Traverse through every element in nums array

*/

class Solution {
    public int[] sortArrayByParity(int[] nums) {
        int left = 0;
        int right = nums.length - 1;

        while(left < right){
            if(nums[left] % 2 == 0) {
                left++;
            } else {
                if(nums[right] % 2 != 0) right--;

                if(nums[right] % 2 == 0) {
                    int temp = nums[left];

                    nums[left] = nums[right];
                    nums[right] = temp;
                    
                    left++;
                    right--;
                }
            }
        }

        return nums;
    }
}