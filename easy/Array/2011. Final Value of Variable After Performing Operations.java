/*

There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

*/


/*

APPROACH: Traverse through every string in given operations array. Determine the ASCII value for char at index 1, char will either be '+' or '-', for every string in array. Use ASCII value to icrement or decrement x.

Step 1: Initialize variable x of type int to 0

Step 2: Traverse through every element of operations array
        * increment x by adding 44 (middle operation character) to ASCII value for the char at position 1

TIME COMPLEXITY: O(n)

Traverse through every string in operations array

*/

class Solution {
    public int finalValueAfterOperations(String[] operations) {
        int x = 0;

        for(int i = 0; i < operations.length; i++){
            x += (44 - operations[i].charAt(1));
        }

        return x;
    }
}