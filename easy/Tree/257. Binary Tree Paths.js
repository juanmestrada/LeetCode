/*

Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.

*/

/*

APPROACH: Use dfs recursive function that accepts (node,string) which pushes child node values to result array (res) with path string ("->")

Step 1: 
	Create recursive dfs function that takes a node and a string
	* Create base case, current node must NOT be null
	* Push node values with relevant path string to result array (res)
	* Call recursive function for child nodes with path string 

Step 2:
	Call recursive dfs function initialized with root node and empty string

Step 3:
	Return result array (res) with paths


TIME COMPLEXITY: O(n)

Traverse through binary tree to find paths, O(n)

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
 * @return {string[]}
*/


var binaryTreePaths = function(root) {
	// result array with paths
    let res = [];

    // recursive function
    function dfs(node, str){
    	// base case
        if(node == null) return;

        // leaf node reached
        if(!node.left && !node.right) return res.push(str+node.val);

        // recursive call for left child node, with path string
        dfs(node.left, str + node.val + "->");
        // recursive call for right child node, with path string
        dfs(node.right, str + node.val + "->");
    }

    // initial recursive call passing root node and empty string
    dfs(root, "");

    return res;
};