/*

You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.

*/

/*

APPROACH: Use a HashMap to track the number of times an element is in nums array. Add the element to sum at first instance of that element, subtract it from sum at the second instance it appears in the array. 
		  If the element appears more than twice, subtract 0 from sum since it has already been canceled out.  

Step 1: Create a HashMap (map) to count the number of times an element appears in nums array
		
Step 2: Create a variable sum of type integer to keep track of the sum of unique elements 
	
Step 3: Use enhanced for loop to iterate through each element in nums array
		* If element already exists in map increment its count value, else initialize it to 1
		* add current element nums[i] to running sum of unique elements the first time it appears in map
		* The second time it appears in map subtract it from sum
		* After the second time the element appears in map subtract 0 to avoid a negative sum

Step 4: Return sum


TIME COMPLEXITY: O(n)

Traverse through nums array

*/


class Solution {
    public int sumOfUnique(int[] nums) {
        HashMap<Integer, Integer> map = new HashMap<>();

        int sum = 0;

        for(int num : nums){
            map.put(num, map.getOrDefault(num, 0) + 1);

            int currentNum = map.get(num);

            sum = currentNum == 1 ? sum + num : currentNum > 2 ? sum - 0 : sum - num;
        }

        return sum;
    }
}