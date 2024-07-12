/*

There are n availabe seats and n students standing in a room. You are given an array seats of length n, where seats[i] is the position of the ith seat. You are also given the array students of length n, where students[j] is the position of the jth student.

You may perform the following move any number of times:

Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)
Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.

Note that there may be multiple seats or students in the same position at the beginning.

*/

/*

APPROACH: Start by sorting both seat and student arrays to find the least number of moves required at each index. Traverse through each element in seats array 
		  and incrementing counter (moves) by the absolute value between seat[i] and student[i]

Step 1: Sort both seats and students arrays
		
Step 2: Create variable moves of type int to keep track of number of moves needed
	
Step 3: Traverse through every element of seats array

Step 4: Increment moves counter by the difference between seats[i] - students[i]

Step 5: Return moves


TIME COMPLEXITY: O(nlogn)

Sort both seats and students arrays, O(nlogn)
Traverse through seats array, O(n)

*/


class Solution {
    public int minMovesToSeat(int[] seats, int[] students) {
        Arrays.sort(seats);
        Arrays.sort(students);
        int moves = 0;

        for(int i = 0; i < seats.length; i++){
            moves += Math.abs(seats[i] - students[i]);
        }

        return moves;
    }
}