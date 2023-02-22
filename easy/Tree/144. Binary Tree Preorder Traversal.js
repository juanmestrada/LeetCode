/*

Given the root of a binary tree, return the preorder traversal of its nodes' values.

*/

/*

APPROACH: Use dfs preorder traversal to push node values to result (res) array

Step 1:
	Create result (res) array

Step 2: 
	Create recursive dfs function that takes a node
	* Create base case, current node must NOT be null
	* Push current node.val to result (res) array
	* Call recursive dfs function on child nodes 

Step 3:
	Call recursive dfs function initialized with root node


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


var preorderTraversal = function(root) {
    const res = [];

    function dfs(node){
        if(!node) return;
        
        res.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    return res;
    
};