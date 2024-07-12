/*

A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.

*/

/*

APPROACH: Iterate through every sentence in sentences array updating a counter to keep track of max number of words

Step 1: Create counter (max) to keep track of maximum number of words
		
Step 2: Traverse through every element in sentences array
	
Step 3: Update counter (max) when new max is found

Step 4: Return max


TIME COMPLEXITY: O(n)

Traverse through every element in sentences array

*/


class Solution {
    public int mostWordsFound(String[] sentences) {
        int max = 0;

        for (String s : sentences) {
            int currentLength = s.split(" ").length;

            max = Math.max(max, currentLength);
        }

        return max;
    }
}