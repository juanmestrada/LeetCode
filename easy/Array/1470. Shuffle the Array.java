/*

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

*/


/*

APPROACH: Shuffle the given array by alternating the elements at index nums[i] and nums[i+n], (offsetting by n)

Step 1: Create result array of type int with size n * 2

Step 2: Traverse through every element in nums array and build new ans array
        * alternate (shuffle) between elements by adding to new result array, offsetting by n

TIME COMPLEXITY: O(n)

Traverse through every element in nums array

*/


class Solution {
    public int[] shuffle(int[] nums, int n) {
        int[] res = new int[n * 2];

        for(int i = 0; i < n; i++){
            res[2 * i] = nums[i];
            res[2 * i + 1] = nums[n+i];
        }

        return res;
    }
}