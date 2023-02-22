/*

Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

*/

/*

APPROACH: Use dfs inorder traversal to keep running sum until leaf node is reached, then compare to targetSum.

Step 1: 
	Create recursive dfs function that takes a node and current sum (curSum)
	* Create base case, current node must NOT be null
	* Update value of curSum
	* Once leaf node is reached, check to compare curSum == targetSum
	* Call recursive dfs function on child nodes and continue check

Step 2:
	Call recursive dfs function initialized with root node and curSum = 0


TIME COMPLEXITY: O(n)

Traverse through binary tree to find a path where node sum == targetSum, O(n)

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
 * @param {number} targetSum
 * @return {boolean}
*/


var hasPathSum = function(root, targetSum) {
    function dfs(node, curSum){
        if(!node) return false;

        curSum += node.val;

        if(!node.left && !node.right) return curSum == targetSum;

        return (dfs(node.left, curSum) || dfs(node.right, curSum));
    }

    return dfs(root, 0);
};