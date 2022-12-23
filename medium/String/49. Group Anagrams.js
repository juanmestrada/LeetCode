/*

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

*/

/*

APPROACH: Use hashmap to track character count. Use ASCII to create key for each string of array 

Step 1:
	Create hashmap;
	Traverse through each str of strs;

Step 2:
	Create new array for str that will serve as the hashmap KEY for that str;
	Traverse through every character of str;

Step 3:
	Use ASCII on each character of str to generate array (array index will be updated with each character);

Step 4:
	Use array as key to update result hashmap and update count;


TIME COMPLEXITY: O(nk)

Loop through every str of strs, O(n)
Loop through each character of str, O(k)

*/


/*
 * @param {string[]} strs
 * @return {string[][]}
*/


var groupAnagrams = function(strs) {
    let res = {};
    
    for(let str of strs){
    	// array to be used as hashmap KEY for str
        let count = new Array(26).fill(0);
        
        // use ASCII to update array index
        for(let char of str){
            count[char.charCodeAt()-97]++;
        }
        
        // convert array to hashmap key
        let key = count.join("#");

        // use generated hashmap key to update character count
        res[key] ? res[key].push(str) : res[key] = [str];
    }
    return Object.values(res);
};