/*

Given an array nums of integers, return how many of them contain an even number of digits.

*/

/*

APPROACH: Increment counter when each element in nums array meets requirement for even number of digits

Step 1: Initialize variable count of type int to 0. To keep track of even number digit elements
		
Step 2: Traverse through nums array
	
Step 3: Increment counter when each element in nums array meets requirement for even number of digits

Step 4: Return count


TIME COMPLEXITY: O(n)

Traverse through every element in nums array

*/


class Solution {
    public int findNumbers(int[] nums) {
        int count = 0;

        for (int num : nums) {
            count += (num > 9 && num < 100) || (num > 999 && num < 10000) || (num == 100000) ? 1 : 0;
        }

        return count;
    }
}