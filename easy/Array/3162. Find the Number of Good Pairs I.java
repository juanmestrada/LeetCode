/*

You are given 2 integer arrays nums1 and nums2 of lengths n and m respectively. You are also given a positive integer k.

A pair (i, j) is called good if nums1[i] is divisible by nums2[j] * k (0 <= i <= n - 1, 0 <= j <= m - 1).

Return the total number of good pairs.

*/

/*

APPROACH: Use an inner for loop to find the number of good pairs, keep track using a counter that is incremented when condition is met

Step 1: Create a variable of type int (count) to store the number of valid pairs
        
Step 2: Traverse through each element in nums1 array
    
Step 3: For each element in nums1 array, traverse through each element in nums2 array

Step 4: Increment counter if condition for good pair is met

Step 5: Return count


TIME COMPLEXITY: O(n^2)

Traverse through each element in nums1 array, O(n)
For each element in nums1 array, traverse through each element in nums2 array, O(n^2)

*/

class Solution {
    public int numberOfPairs(int[] nums1, int[] nums2, int k) {
        int count = 0;

        for (int i = 0; i < nums1.length; i++){
            for (int j = 0; j < nums2.length; j++){
                if(nums1[i] % (nums2[j] * k) == 0) count++;
            }
        }

        return count;
    }
}