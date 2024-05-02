/*

Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

*/


/*

APPROACH: Traverse nums array to build new ans array where ans[i] = nums[nums[i]]

Step 1: Create new ans[] array of size nums.length

Step 2: Create for loop to interate through every element in nums array
        * fill new ans array where ans[i] = nums[nums[i]]

TIME COMPLEXITY: O(n)

Traverse nums array to build new ans array where ans[i] = nums[nums[i]]

*/

class Solution {
    public int[] buildArray(int[] nums) {
        int[] ans = new int[nums.length];

        for(int i = 0; i < nums.length; i++){
            ans[i] = nums[nums[i]];
        }

        return ans;
    }
}