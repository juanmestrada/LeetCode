/*

You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

*/

/*

APPROACH: Build a char array made by setting s.charAt(i) at index indices[i]. Return a string from char array  

Step 1: Create a new char array (strArr) of size indices.length
        
Step 2: Traverse through every element in indices array
    
Step 3: Set strArr[indices[i]] = s.charAt(i)

Step 4: Return a string from char array


TIME COMPLEXITY: O(n)

Traverse through every element in indices array

*/

class Solution {
    public String restoreString(String s, int[] indices) {
        char[] strArr = new char[indices.length];

        for (int i = 0; i < indices.length; i++){
            strArr[indices[i]] = s.charAt(i);
        }

        return String.valueOf(strArr);
    }
}