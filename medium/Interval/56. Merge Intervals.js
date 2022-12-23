/* 

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

*/

/*

APPROACH: Sort intervals array into ascending order for better time complexity. Traverse through intervals and merge overlapping intervals

Step 1:
	Sort array into ascending order by their start point

Step 2: 
	Merge any overlapping intervals by comparing current interval's start to previous interval's end


TIME COMPLEXITY: 0(nLogn)

Sort intervals array into ascending order, O(Logn)
Loop through array to find overlapping intervals, O(n)

*/


/*
 * @param {number[][]} intervals
 * @return {number[][]}
*/


var merge = function(intervals) {
	// sort intervals array into ascending order
    intervals.sort((a, b) => a[0] - b[0]);
  
  	// interval used for comparison
    let prev = intervals[0];
  	
  	// result
    let res = [prev];
    
    for(let curr of intervals){
    	// check if current interval overlaps with previous
        if(curr[0] <= prev[1]){
        	// update previous interval's end point
            prev[1] = Math.max(curr[1], prev[1]);
        } else{
        	// interval does not overlap, push to result
            res.push(curr);

            // update previous interval
            prev = curr;
        }
    }
    
    return res;
};