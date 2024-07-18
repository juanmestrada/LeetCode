/*

There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

*/

/*

APPROACH: Keep a running sum of between elements in gain array. Update max when new max is found

Step 1: Initialize variable max and currGain, both of type int
		
Step 2: Traverse through gains array
	
Step 3: Increment currGain at each element and update max when new max is found

Step 4: return max


TIME COMPLEXITY: O(n)

Traverse through gains array


*/


class Solution {
    public int largestAltitude(int[] gain) {
        int max = 0;
        int currGain = 0;

        for(int i = 0; i < gain.length; i++){
            currGain += gain[i];
            max = Math.max(currGain, max);
        }

        return max;
    }
}