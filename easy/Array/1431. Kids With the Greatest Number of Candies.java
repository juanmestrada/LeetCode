/*

There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.

*/

/*

APPROACH: First iterate through candies array to find maximum number of candies. Next iterate once more through candies array to build new boolean array showing if candies[i] + extraCandies > maximum number of candies previously found 

Step 1: Create counter (max) initialized to zero to keep track of maximum number of candies in candies array
		
Step 2: Traverse through candies array and update counter (max) when new maximum is found
	
Step 3: Create an ArrayList of type boolean to track if candies[i] + extraCandies >= max

Step 4: Traverse through candies array again to build boolean array (list) 

Step 5: Return list array


TIME COMPLEXITY: O(n)

Traverse through candies array, O(n)
Traverse through candies array again, O(n)

*/

class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        int max = 0;

        for (int el : candies) {
            max = Math.max(max, el);
        }

        List<Boolean> list = new ArrayList<>();

        for (int el : candies) {
            list.add(el + extraCandies >= max);
        }

        return list;
    }
}