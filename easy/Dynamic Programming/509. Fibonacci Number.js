/*

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

	F(0) = 0, F(1) = 1
	F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).

*/

/*

APPROACH: Use memoization to improve time complexity by storing calculations into a hashmap. Recursive function will only run when n has not been previously computed

Step 1:
    Create cache hashmap

Step 2: 
    Create recursive function

Step 3:
    Check if n has already been stored in hashmap
    * Return cache[n] if it has already been computed
    * Return n if value is less then 2
    * Perform calculation and store in hashmap

Step 4:
    Call recursive function if value has not been stored in hashmap


TIME COMPLEXITY: O(n)

Perform calculations n times (values for previously computed calculations will be returned), O(n)


*/

/*
 * @param {number} n
 * @return {number}
*/


var fib = function(n) {
    // cache to store calculations
    let cache = {};

    // recursive function
    let helper = function(i) {
        // return i if previously computed
        if(i in cache) return cache[i];
            
        // return i if i < 2
        if(i < 2) return i;

        // store value returned by recursive function in hashmap
        return cache[i] = fib(i-1) + fib(i-2);
    }
    
    return helper(n);
};