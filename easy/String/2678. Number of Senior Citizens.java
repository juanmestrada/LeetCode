/*

You are given a 0-indexed array of strings details. Each element of details provides information about a given passenger compressed into a string of length 15. The system is such that:

The first ten characters consist of the phone number of passengers.
The next character denotes the gender of the person.
The following two characters are used to indicate the age of the person.
The last two characters determine the seat allotted to that person.
Return the number of passengers who are strictly more than 60 years old.

*/

/*

APPROACH: Compare the parsed substring of every element in details array, increment passenger count when that substring is greater the 60. 

Step 1: Initialize variable of type int to track number of passengers over 60
		
Step 2: Use enhanced for loop to traverse through every element in details array
	
Step 3: Parse each elements substring from char 11 to 13 to get age

Step 4: Increment passenger count if age is greater than 60

Step 5: Return passenger count


TIME COMPLEXITY: O(n)

Traverse through every element in details array

*/


class Solution {
    public int countSeniors(String[] details) {
        int passengers = 0;

        for(String passenger : details){
            int age = Integer.parseInt(passenger.substring(11,13));
            
            if(age > 60) passengers++;
        }

        return passengers;
    }
}