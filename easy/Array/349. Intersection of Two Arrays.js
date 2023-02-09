/*

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

*/

/*

APPROACH: Add all elements of nums1 array to a hash map with a counter for each element. Loop through nums2 array adding elements to result array if that element exists in hash map and its counter is greater than zero. Elements already found in hash map will have their counter set to 0 to prevent duplicate elements in result array

Step 1:
	Create result (res) array

Step 2:
	Create hash map (map)

Step 3:
	Add all elements of nums1 array to hash map
	* Elements that already exist in hash map will have their values incremented by 1

Step 4: 
	Traverse through nums2 array to check if those elements exist in hash map
	* Elements found in hash map will be pushed to result (res) array and have their counter set to 0

Step 5:
	Return result (res) array


TIME COMPLEXITY: O(n+m)

Add all elements of nums1 array to hash map, O(n)
Traverse through nums2 array to check if those elements exist in hash map, O(m)

*/


/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
*/


var intersection = function(nums1, nums2) {
	// result array
    const res = [];
    
    // hash map
    const map = {};
    
    // add elements of nums1 to hash map
    for(let i = 0; i < nums1.length; i++){
    	// if element already exists in map, add 1 to its counter 
        map[nums1[i]] =  map[nums1[i]] ? ++map[nums1[i]] : 1;
    } 
    
    // check if elements of nums2 exist in hash map
    for(let j = 0; j < nums2.length; j++){
    	// element's counter must be greater than 0 to prevent duplicate elements in result
        if(nums2[j] in map && map[nums2[j]] > 0){
        	// push nums2[j] to result array
            res.push(nums2[j]);
            // set value of key to 0
            map[nums2[j]] = 0;
        }
    }
    
    return res;
};