/*

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

*/

/*

APPROACH: Use Binary search algorithm to achieve O(log n) time complexity by using divide and conquer to update pointers for left (l), right (r) and middle (mid) to move boundary window depending on value of middle pointer (mid) compared to target value

Step 1: 
	Create pointers to set boundary for binary search
	* left (l) boundary initialized to 0
	* right (r) boundary initialized to nums.length - 1

Step 2:
	Create while loop to run as long as left (l) boundary is <= right (r) boundary

Step 3:
	Create variable mid to find middle index of array

Step 4:
	Set if statement to check if target == nums[mid], return mid index if true

Step 5:
	Create if statement to update left (l) and right (r) boundaries depending on target value
	* Move left (l) boundary to right side of middle (mid) if target is greater than mid. Find new middle (mid)
	* Move right (r) boundary to left side of middle (mid) if target is less than mid. Find new middle (mid)

Step 6:
	Return left (l) pointer if while loop exits


TIME COMPLEXITY: O(log n)

Use Binary search algorithm to divide array using left(l), right(r), middle(mid) pointers. O(log n)

*/

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/


var searchInsert = function(nums, target) {
	// left and right boundaries
    let l = 0,
        r = nums.length - 1;

    while(l <= r){
    	// middle of array
        let mid = Math.floor((l+r) / 2);

        // target == nums[mid]
        // target found
        if(target == nums[mid]) return mid;

        // update left (l) and right (r) boundaries
        if(target > nums[mid]){
        	// move left (l) boundary to right side of mid
            l = mid + 1;
        } else {
        	// move right (r) boundary to left side of mid
            r = mid - 1;
        }
    }

    return l;
};