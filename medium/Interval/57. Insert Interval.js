/*

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

*/

/*

APPROACH: Check if newInterval goes at the start, end, or must be merged

Step 1:
	Loop through array of intervals;

Step 2: 
	check if newInterval goes at the start of array or is overlapping;
	Overlapping intervals must be merged;


TIME COMPLEXITY: O(n)

Traverse through array of intervals, 0(n)

*/

/*
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
*/


var insert = function(intervals, newInterval) {
    let res = [];
  
    for (let i in  intervals){
      
      if(newInterval[1] < intervals[i][0]){ //newInterval goes before intervals
        res.push(newInterval);
        res.push(...intervals.slice(i)); //push remaining intervals in array
        return res;
      } else if(newInterval[0] > intervals[i][1]){ // current interval goes before newInterval
        res.push(intervals[i]);
      } else {
      	// newInterval is overlapping. merge intervals
        newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]
      }
    }

    // newInterval goes at the end. push newInterval
    res.push(newInterval)
    
    return res;
};