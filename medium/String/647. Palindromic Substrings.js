/*

Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

*/


/*

APPROACH: Expanding window technique to improve time complexity.

ODD length palindromes:
Left and right pointers initialized at i;

EVEN length palindromes:
Left pointer initialized to i, right pointer initialized to i + 1;

Step 1: 
	Traverse through s;

Step 2: 
	While pointers are not out of bounds and s[left] == s[right], substring is valid palindrome, increment result;
	Expand window by decrementing left pointer and incrementing right pointer from i;

TIME COMPLEXITY: 0(n^2)

Traverse through s, O(n)
Check for substring palindrome at each character, O(n)

*/

/*
 * @param {string} s
 * @return {number}
*/

var countSubstrings = function(s) {
	let result = 0;
   
    for(let i = 0; i < s.length; i++){
    	// check ODD length substring palindromes
		let l = i,
			r = i;

		// expand window while valid palindrome exists
		while(l >= 0 && r < s.length && s[l] == s[r]){
			result++;
			l--;
			r++;
		}
      	
      	// check EVEN length substring palindromes
	    l = i;
	    r = i + 1;
    	
    	// expand window while valid palindrome exists
      	while(l >= 0 && r < s.length && s[l] == s[r]){
        	result++;
        	l--;
        	r++;
      	}
    }
	
	return result;  
};