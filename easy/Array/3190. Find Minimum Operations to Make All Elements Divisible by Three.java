/*

You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.

Return the minimum number of operations to make all elements of nums divisible by 3.

*/

/*

APPROACH: Traverse through every element of nums array to check if each element is divisible by three, incrementing a counter if its not

Step 1: Create a counter (ans) of type integer to keep track of number of opperations
		
Step 2: Traverse through every integer in nums array
	
Step 3: If integer at current loop is not divisible by 3 increment counter (ans)

Step 4: return ans


TIME COMPLEXITY: O(n)

Traverse through every element in nums array

*/


class Solution {
    public int minimumOperations(int[] nums) {
        int ans = 0;

        for(int i = 0; i < nums.length; i++){
            if(nums[i] % 3 != 0) ans++;
        }

        return ans;
    }
}