/*

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

*/

/*

APPROACH: 2 Pointer technique, (shrinking window)

Initialize left pointer at 0 (first index);
Initialize right pointer at s.length -1 (last index);

Step 1: 
	Traverse through s;

Step 2: 
	Check if pointers are alphanumeric, else move pointer to next valid character;

Step 3: 
	While left and right pointer are equal, increment left pointer, decrement right pointer; (shrink window)


TIME COMPLEXITY: O(n)

Traverse through s, O(n)

*/

/*
 * @param {string} s
 * @return {boolean}
*/

// function to check if character is alphanumeric 
var alphaNum = function(char) {
	const regexp = /[^a-z0-9$]/gi;
    
    return !regexp.test(char);
}

var isPalindrome = function(s) {
    let l = 0,
        r = s.length - 1;
    
    while(l < r){
    	// check if character is alphanumeric
        while(!alphaNum(s[l]) && l < r){
            l++;
        }

        while(!alphaNum(s[r]) && r > l){
            r--;
        }
        
        // check if pointers are the same
        if(s[l].toLowerCase() !== s[r].toLowerCase()){
            return false;
        }

        // shrink window
        l++;
        r--;
    }

    return true;
};