/*

Given the root of a binary tree, return the sum of all left leaves.

A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

*/

/*

APPROACH: Use recursive dfs function to add left leaf node values

Step 1:
	Create sum variable

Step 2: 
	Create recursive function (dfs) that takes in a node
	* Set base case, return if node is null
	* If node has left leaf node, add left leaf node value to sum
	* Call recursive function (dfs) for left child node
	* Call recursive function (dfs) for right child node

Step 3:
	Call initial recursive function (dfs) passing root node

Step 4:
	Return sum of left leaf nodes


TIME COMPLEXITY: O(n)

Traverse through binary tree to push left leaf node values to result array, O(n)

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
*/

/*
 * @param {TreeNode} root
 * @return {number}
*/


var sumOfLeftLeaves = function(root) {
    let sum = 0;

    function dfs(node){
    	// base case, node is null
        if(!node) return; 

        // left leaf node reached
        // push node value to result array 
        if(node.left && !node.left.left && !node.left.right) sum+= node.left.val;

        // check child nodes
        dfs(node.left);
        dfs(node.right);
    }
    // initial recursive call, passing root node
    dfs(root);

    return sum;
};