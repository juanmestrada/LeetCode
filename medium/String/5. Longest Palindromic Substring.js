/*

Given a string s, return the longest palindromic substring in s.

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
 * @return {string}
*/

var longestPalindrome = function(s) {
	let result = "",
        resultLength = 0;
    
    // traverse through s
    for(let i = 0; i < s.length; i++){
      	
      	// odd length palindromes
    	let l = i,
          	r = i;

        // check for palindrome at i
        // expand window while valid palindrome exists
		while(l >= 0 && r < s.length && s[l] == s[r]){
			// update result
			if((r - l + 1) > resultLength){
				result = s.slice(l, r+1);
				resultLength = r - l + 1;
			}

			l--;
			r++;
		}

      	// even length palindromes
		l = i,
		r = i + 1;
      	
      	// check for palindrome at i
      	// expand window while valid palindrome exists
      	while(l >= 0 && r < s.length && s[l] == s[r]){
      		// update result
        	if((r - l + 1) > resultLength){
	        	result = s.slice(l, r+1);
	        	resultLength = r - l + 1;
	        }

	        l--;
	        r++;
      	}
    }

    return result;
};