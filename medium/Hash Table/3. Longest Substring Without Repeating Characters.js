/*

Given a string s, find the length of the longest substring without repeating characters.

*/

/*
 * @param {string} s
 * @return {number}
*/


var lengthOfLongestSubstring = function(s) {
    let start = 0,
        maxLength = 0;
  
    let seenChar = {};
  
    for (let i = 0; i < s.length; i++){
      if(s[i] in seenChar){
        start = Math.max(seenChar[s[i]] + 1, start);
      }
      seenChar[s[i]] = i;
      maxLength = Math.max(i - start + 1, maxLength);
    }
    return maxLength;
};