/*

There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked for hours[i] hours in the company.

The company requires each employee to work for at least target hours.

You are given a 0-indexed array of non-negative integers hours of length n and a non-negative integer target.

Return the integer denoting the number of employees who worked at least target hours.

*/

/*

APPROACH: Traverse through every element of hours array, increment counter (ans) if hours[i] >= target. (hours[i] == employee[i])

Step 1: Create counter (ans) for number of employees meeting target
		
Step 2: Traverse through hours array
	
Step 3: Increment counter (ans) if hours[i] >= target

Step 4: Return ans


TIME COMPLEXITY: O(n)

Traverse through hours array

*/

class Solution {
    public int numberOfEmployeesWhoMetTarget(int[] hours, int target) {
        int ans = 0;

        for (int el : hours){
            if(el >= target){
                ans++;
            }
        }

        return ans;
    }
}