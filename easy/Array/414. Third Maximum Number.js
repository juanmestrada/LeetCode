/*

Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

*/

/*

APPROACH: Use pointers to track first, second and third max values in nums array, ignoring non unique elements

Step 1:
	Create pointers of max1 (first), max2 (second), max3 (third) values

Step 2: 
	Traverse through nums array

Step 3:
	Update pointers for nums[i] 

Step 4:
	If third max value (max3) exists, return it. Else, return first max value (max1)


TIME COMPLEXITY: O(n)

Traverse through nums array to find third maximum element, O(n)

*/


/*
 * @param {number[]} nums
 * @return {number}
*/

var thirdMax = function(nums) {
	// pointers
    let max1 = null,
        max2 = null,
        max3 = null;
    
    for(num of nums){
    	// skip non unique elements
        if((num == max1) || (num == max2) || (num == max3)) continue;
        
        // update pointer values
        if(!max1 || num > max1){
        	// update pointer values
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if(!max2 || num > max2){
        	// update max2 and max3 values
            max3 = max2;
            max2 = num;
        } else if(!max3 || num > max3){
        	// update max3 value
            max3 = num;
        }
    }
    // return third max value if it exists, else return first max value
    return max3 == null ? max1 : max3;
};