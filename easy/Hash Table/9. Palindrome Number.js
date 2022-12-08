/* 

Given an integer x, return true if x is a palindrome, and false otherwise.

*/

var isPalindrome = function(x) {
    if (x < 0) return false;
	
    const reverse = `${x}`.split('').reverse().join('');
    
    return x == reverse;
};