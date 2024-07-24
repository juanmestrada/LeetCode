/*

An ant is on a boundary. It sometimes goes left and sometimes right.

You are given an array of non-zero integers nums. The ant starts reading nums from the first element of it to its end. At each step, it moves according to the value of the current element:

If nums[i] < 0, it moves left by -nums[i] units.
If nums[i] > 0, it moves right by nums[i] units.
Return the number of times the ant returns to the boundary.

Notes:

There is an infinite space on both sides of the boundary.
We check whether the ant is on the boundary only after it has moved |nums[i]| units. In other words, if the ant crosses the boundary during its movement, it does not count.

*/

/*

APPROACH: Keep track of number of times the ant returns to boundary using position and counter

Step 1: Create variable position of type int to calculate ant's position
		
Step 2: Create variable counter of type int to calculate ant's number of times the ant returns to boundary
	
Step 3: Traverse through nums array
		* update position for every step the ant moves

Step 4: If ant returns to boundary increment counter

Step 5: Return counter


TIME COMPLEXITY: O(n)

Traverse through every element in nums array

*/


class Solution {
    public int returnToBoundaryCount(int[] nums) {
        int position = 0;
        int counter = 0;

        for (int num : nums) {
            position += num;

            if(position == 0) counter++;
        }

        return counter;
    }
}