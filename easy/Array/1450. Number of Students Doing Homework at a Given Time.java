/*

Given two integer arrays startTime and endTime and given an integer queryTime.

The ith student started doing their homework at the time startTime[i] and finished it at time endTime[i].

Return the number of students doing their homework at time queryTime. More formally, return the number of students where queryTime lays in the interval [startTime[i], endTime[i]] inclusive.

*/

/*

APPROACH: Keep count of students working in interval between startTime && endTime

Step 1: Create variable count of type int to track number of students
		
Step 2: Traverse through startTime array
	
Step 3: If queryTime is in interval between startTime && endTime, increment count

Step 4: Return count


TIME COMPLEXITY: O(n)

Traverse through startTime array


*/

class Solution {
    public int busyStudent(int[] startTime, int[] endTime, int queryTime) {
        int count = 0;

        for (int i = 0; i < startTime.length; i++){
            if(startTime[i] <= queryTime && queryTime <= endTime[i]) count++;
        }

        return count;
    }
}