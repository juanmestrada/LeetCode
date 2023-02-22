/*

Given the root of a binary tree, return the postorder traversal of its nodes' values.

*/

/*

APPROACH: Use recursive dfs function to push node values to result array (res) in postorder traversal.

Step 1:
	Create result array (res) to store node values

Step 2: 
	Create recursive function (dfs) that takes in a node
	* Set base case, return if node is null
	* Call recursive function (dfs) for left child node
	* Call recursive function (dfs) for right child node
	* Push node value to result array (res) for leaf node

Step 3:
	Call initial recursive function (dfs) passing root node

Step 4:
	Return result array (res)


TIME COMPLEXITY: O(n)

Traverse through binary tree to push node values to result array, O(n)

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
 * @param {TreeNode} root
 * @return {number[]}
*/


var postorderTraversal = function(root) {
	// result array
    const res = [];

    // recursive function
    function dfs(node){
    	// base case
        if(!node) return;

        // call dfs function on left child
        dfs(node.left);
        // call dfs function on right child
        dfs(node.right);
        // when leaf node is reached, push value to result array
        res.push(node.val);
    }
    // initial call to recursive function
    dfs(root);

    return res;
};