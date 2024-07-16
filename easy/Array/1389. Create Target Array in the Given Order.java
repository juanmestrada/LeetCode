/*

Given two arrays of integers nums and index. Your task is to create target array under the following rules:

Initially target array is empty.
From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to read in nums and index.
Return the target array.

It is guaranteed that the insertion operations will be valid.

*/

/*

APPROACH: Use an ArrayList, as it maintains insertion order, to first insert elements using a for loop. Then retrieve elements from it and store in target array using another for loop (to meet requirement for return type)

Step 1: Create ArrayList (tempArr) to store element nums[i] at index index[i]
        
Step 2: Traverse nums array to build ArrayList (tempArr)
    
Step 3: Create array target of type int 

Step 4: Build target array from looping through ArrayList (tempArr)

Step 5: Return target array


TIME COMPLEXITY: O(n)

Traverse through every element in nums array
Traverse through every element in tempArr ArrayList

*/


class Solution {
    public int[] createTargetArray(int[] nums, int[] index) {
        ArrayList<Integer> tempArr = new ArrayList<>();

        for (int i = 0; i < nums.length; i++) {
            tempArr.add(index[i], nums[i]);
        }

        int[] target = new int[nums.length];

        for (int i = 0; i < tempArr.size(); i++) {
            target[i] = tempArr.get(i);
        }

        return target;
    }
}