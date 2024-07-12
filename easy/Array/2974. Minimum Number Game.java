/*

You are given a 0-indexed integer array nums of even length and there is also an empty array arr. Alice and Bob decided to play a game where in every round Alice and Bob will do one move. The rules of the game are as follows:

Every round, first Alice will remove the minimum element from nums, and then Bob does the same.
Now, first Bob will append the removed element in the array arr, and then Alice does the same.
The game continues until nums becomes empty.
Return the resulting array arr.

*/

/*

APPROACH: Start by sorting nums array to find minimum elements easier. Next build new array (res) by first adding Bob's element (nums[i + 1]) then Alice's element (nums[i])

Step 1: Create new int array (res) of size nums.length
		
Step 2: Sort nums array
	
Step 3: Traverse through nums array, incrementing i by 2 each time
		* first add Bob's element (nums[i + 1]) to new int array (res)
		* next add Alice's element (nums[i]) to new int array (res)

Step 4: return res array


TIME COMPLEXITY: O(nlogn)

Sort nums array, O(nlogn)
Traverse through nums array, O(n)

*/


class Solution {
    public int[] numberGame(int[] nums) {
        int[] res = new int[nums.length];

        Arrays.sort(nums);

        for (int i = 0; i < nums.length; i += 2) {
            res[i] = nums[i + 1];
            res[i+1] = nums[i];
        }

        return res;
    }
}