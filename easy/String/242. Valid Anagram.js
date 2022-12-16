/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

*/

/*

APPROACH: Create 2 hashmaps, for s and t, with a count of each character and compare values

Step 1:
	Check that length of s and t are equal;

Step 2: 
	Create a hashmap for s and t with the count for each character;

Step 3:
	Compare hashmaps and their character count;


TIME COMPLEXITY: O(n)

Traverse through s, O(n)
Traverse through t, O(n)

*/


/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
*/

var isAnagram = function(s, t) {
	// s and t must be the same length
    if(s.length !== t.length){
        return false;
    }
    
    // create hashmaps
    let sMap = {},
        tMap = {};
    
    // fill hashmaps
    // track character count
    for(let char in s){
        sMap[s[char]] = sMap[s[char]] ? sMap[s[char]] + 1 : 1;
        tMap[t[char]] = tMap[t[char]] ? tMap[t[char]] + 1 : 1;
    }
    s
    // compare character counter between both hashmaps
    for(let c in sMap){
        if(sMap[c] !== tMap[c]){
            return false;
        }
    }
    
    return true;
};