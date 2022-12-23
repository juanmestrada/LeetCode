/*

Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

*/

/*

APPROACH: For better time complexity, sort intervals array into ascending order by comparing starting value. Traverse through intervals comparing current interval's start value to previous interval's end value

Step 1:
	Sort array into ascending order by their start point

Step 2: 
	Keep track of previous interval's end value (prevEnd). ** Initialized with first interval and updated after every iteration

Step 3: 
	Check for overlap. (current interval's start value < previous interval's end value)

Step 4:
	Update prevEnd.
	** if overlap found, update result count. prevEnd = Math.min(current[end], prevEnd)
	** when no overlap found prevEnd = current[end]


TIME COMPLEXITY: 0(nLogn)

Sort intervals array into ascending order, O(Logn)
Loop through array to find overlapping intervals, O(n)

*/


/*
 * @param {number[][]} intervals
 * @return {number}
*/


var eraseOverlapIntervals = function(intervals) {
	// sort intervals array into ascending order by start value
    intervals.sort((a, b) => a[0] - b[0]);
    
    let result = 0,
        prevEnd = intervals[0][1];
    
    for(let i = 1; i < intervals.length; i++){
    	// check for interval overlap
        if(intervals[i][0] >= prevEnd){
        	// no overlap found
        	// update prevEnd to current interval's end value
            prevEnd = intervals[i][1];
        } else{
        	// overlap has been found
        	// update prevEnd to interval with lowest end value
            result++;
            prevEnd = Math.min(intervals[i][1], prevEnd);
        }
    }
    return result;
};
