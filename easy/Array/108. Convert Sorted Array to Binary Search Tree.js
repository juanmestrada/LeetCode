/*

Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

*/

/*

APPROACH: Use recursion with left (l), middle (mid) and right (r) pointers to build a binary tree created from tree nodes based on pointers

Step 1:
	Create recursive helper function that accepts values for left (l) and right (r) pointers

Step 2:
	For helper function:
	* Set base case, return null when left (l) pointer is greater than right pointer(r)
	* Find middle of array and set index to mid pointer
	* Create root tree node from element at mid pointer index
	* Call recursive helper function with new params to shift pointers to find left and right child nodes 
	* Return node created from element at middle (mid) index of nums

Step 3:
	Call recursive helper function with initial parameters
	* left (l) pointer will be initialized to 0 for first element of nums array
	* right (r) pointer will be intialized to (nums.length - 1) for last element of nums array


TIME COMPLEXITY: O(n)

Traverse through nums array to create tree node for each element, O(n)

*/


/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
*/

/*
 * @param {number[]} nums
 * @return {TreeNode}
*/


var sortedArrayToBST = function(nums) {
	// recursive function
    function helper(l,r){
    	// base case
    	// pointers out of bounds
        if(l>r) return null;
        
        // find middle of array
        const mid = Math.floor((l+r)/2);

        // create tree node from element at middle (mid) index of array
        const root = new TreeNode(nums[mid]);

        // find left child node
        // shift pointers to left side of mid pointer
        root.left = helper(l, mid-1);
        // find right child node
        // shift pointers to right side of mid pointer
        root.right = helper(mid+1, r);

        // return node created from element at middle (mid) index of nums array
        return root;
    }

    // initial call to helper function
    // 0 = first element of nums array
    // (nums.length - 1) = last element of nums array
    return helper(0, nums.length-1);
};
