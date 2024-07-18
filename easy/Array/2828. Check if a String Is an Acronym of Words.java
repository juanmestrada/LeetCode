/*

Given an array of strings words and a string s, determine if s is an acronym of words.

The string s is considered an acronym of words if it can be formed by concatenating the first character of each string in words in order. For example, "ab" can be formed from ["apple", "banana"], but it can't be formed from ["bear", "aardvark"].

Return true if s is an acronym of words, and false otherwise.

*/

/*

APPROACH: Use enhanced for loop to add every first character of every word in words array to new string then compare it to string s

Step 1: Create new StringBuilder (str) to store first character of every word in words array
        
Step 2: Use enhanced for loop to append first character of every word to str
    
Step 3: Return boolean value from checking if str is equal to s


TIME COMPLEXITY: O(n)

Traverse through words array

*/


class Solution {
    public boolean isAcronym(List<String> words, String s) {
        StringBuilder str = new StringBuilder();

        for(String word : words) {
            str.append(word.charAt(0));
        }

        return str.toString().equals(s);
    }
}