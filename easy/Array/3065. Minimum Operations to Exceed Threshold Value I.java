/*

You are given a 0-indexed integer array nums, and an integer k.

In one operation, you can remove one occurrence of the smallest element of nums.

Return the minimum number of operations needed so that all elements of the array are greater than or equal to k.

*/

/*

APPROACH: Use a simple counter to keep track of elements in nums array < k

Step 1: Create variable of type int to use as a counter
        
Step 2: Use enhance for loop to check every element in nums array
    
Step 3: If element in nums array matches condition, increment counter (count)

Step 4: Return count


TIME COMPLEXITY: O(n)

Traverse through every element in nums array

*/


class Solution {
    public int minOperations(int[] nums, int k) {
        int count = 0;

        for (int num : nums){
            if(num < k) count++;
        }

        return count;
    }
}