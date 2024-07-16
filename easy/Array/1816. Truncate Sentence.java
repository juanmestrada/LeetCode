/*

A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
You are given a sentence s and an integer k. You want to truncate s such that it contains only the first k words. Return s after truncating it.

*/

/*

APPROACH: Use a counter for spaces as well as a counter for index to determine the position to truncate the substring

Step 1: Create 3 variables of type int
        * (idx) to keep track of index of s
        * (spaceCount) to tack number of spaces in s
        * (len) the length of string s

Step 2: Traverse through string s using idx as the index
    
Step 3: Increment spaceCount when s[idx] == ' '

Step 4: Return the substring of s using idx and spaceCount to determine where to truncate


TIME COMPLEXITY: O(n)

Traverse through every char in string s

*/

class Solution {
    public String truncateSentence(String s, int k) {
        int idx = 0;
        int spaceCount = 0;
        int len = s.length();

        while (idx < len && spaceCount < k) {
            if(s.charAt(idx) == ' ') spaceCount++;

            idx++;
        }

        return spaceCount == k ? s.substring(0, idx-1) : s;
    }
}