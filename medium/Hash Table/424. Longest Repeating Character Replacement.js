/*

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

*/

/*
 * @param {string} s
 * @param {number} k
 * @return {number}
*/


var characterReplacement = function(s, k) {
    let l = 0,
        res = 0,
        max = 0;
  
    let seenChar = {};
  
    for (let r in s){
      seenChar[s[r]] = seenChar[s[r]] ? seenChar[s[r]] + 1: 1;
      max = Math.max(seenChar[s[r]], max);
      
      if((r - l + 1 - max) > k){
        seenChar[s[l]]--;
        l++;
      }
       
      res = Math.max(r-l + 1, res);
    }
    
    return res;
};