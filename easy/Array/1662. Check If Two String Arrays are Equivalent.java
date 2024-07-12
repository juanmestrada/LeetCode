/*

Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

*/

/*

APPROACH: Concatinate words in words1 and words2 arrays then compare strings to compare if they match

Step 1: Create 2 empty strings w1 and w2
        
Step 2: Traverse through words1 array to concatinate new string w1
    
Step 3: Traverse through words2 array to concatinate new string w2

Step 4: Return the result of checking if w1 equals w2


TIME COMPLEXITY: O(n)

Traverse through every element in word1 array
Traverse through every element in word2 array

*/

class Solution {
    public boolean arrayStringsAreEqual(String[] word1, String[] word2) {
        String w1 = "";
        String w2 = "";

        for (String el : word1){
            w1 += el;
        }

        for (String el : word2){
            w2 += el;
        }
        
        return w1.equals(w2);
    }
}