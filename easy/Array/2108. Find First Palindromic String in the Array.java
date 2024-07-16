/*

Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.

*/

/*

APPROACH: Use enhanced for loop to check if word in words array matches the REVERSED version of that word

Step 1: Use enhanced for loop to traverse through every word in words array
        
Step 2: Create new StringBuilder (tempString)
    
Step 3: Append current word in words array to tempString and reverse it

Step 4: If reversed word (tempString) in words array is equal to current word in for loop it is a palindrome and can be returned, else return empty string


TIME COMPLEXITY: O(n)

Traverse through every word in words array

*/

class Solution {
    public String firstPalindrome(String[] words) {
        for (String word : words){
            StringBuilder tempString = new StringBuilder();
            tempString.append(word);
            tempString.reverse();

            if(word.equals(tempString.toString())) return word;
        }

        return "";
    }
}