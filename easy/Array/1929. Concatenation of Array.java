/*

Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

*/


/*

APPROACH: Built new ans array by traversing given nums array and adding element at index nums[i] to ans[i] and ans[i+nums.length]

Step 1: Create variable n of type int equal to nums.length

Step 2: Create new int array of size nums.length * 2

Step 3: Traverse through every element in nums array and build new ans array
        * fill ans array by adding element from nums[i] to 2 indices of ans array simultaneously, at index ans[i] and ans[i+nums.length]

TIME COMPLEXITY: O(n)

Traverse nums array to build new ans array

*/

class Solution {
    public int[] getConcatenation(int[] nums) {
        int n = nums.length;
        int[] ans = new int[n * 2];

        for(int i = 0; i < n; i++){
            ans[i] = nums[i];
            ans[i+n] = nums[i];
        }

        return ans;
    }
}