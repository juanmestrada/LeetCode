/*

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

*/

/*

APPROACH: Use post-order traversal to process node's children to determine their contribution to path sum. Track max sum by comparing current maxSum to current path. 
          Return the max(current node.value + left child, current node.value + right child) to meet requirements for valid path 

Step 1:
	Create global max sum to check each path

Step 2:
	Set base case to return 0 if node is null

Step 3:
	Implement a recursive function to use post-order traversal and process children nodes before parent 
    Check for negative values by finding max(0, node.value), ** adding a negative value to another negative would not contribute in finding maxSum so they can be ignored **

Step 4: 
    Compare current subtree to maxSum
    Set maxSum to max(current maxSum, current subtree(node.value + left child + right child))

Step 5:
    Return max(node.value + left child, node.value + right child), ** only left or right child can be used to be valid path **


TIME COMPLEXITY: O(n)

Traverse through every node once, 0(n)

*/

/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */


var maxPathSum = function(root) {

	let maxSum = -Infinity;

    // recursive function to implement post-order traversal
	let DFS = function(node){
		// Base case. node is null
		if(!node) return 0;

		// add the path gain from left subtree and the current node, if positive value
        let leftGain = Math.max(0, DFS(node.left));

        // add the path gain from right subtree and the current node, if positive value
        let rightGain = Math.max(0, DFS(node.right));

        // compute path sum with split, path passes through left and right subtrees, ** includes root node
        maxSum = Math.max(maxSum, leftGain + rightGain + node.val);

        // return the max sum gain from path that includes either left OR right child for a valid path 
        return Math.max(leftGain, rightGain) + node.val;
	}

    DFS(root);

    return maxSum;
};