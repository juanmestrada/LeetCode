/*

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

*/

/*

APPROACH: Use recursive function to find the shortest path from root to leaf node. 

Step 1: 
	Create base case
	* Return 0 for null node

Step 2:
	When leaf node is reached, return 1

Step 3:
	Return depth of available subtree + 1
	* continue down right subtree if left child node is null
	* continue down left subtree if right child node is null

Step 4:
	Return minimum path found + 1


TIME COMPLEXITY: O(n)

Traverse through each node of tree, O(n)

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
 * @return {number}
*/


var minDepth = function(root) {
	// base case
    if(root == null) return 0;

    // leaf node
    if(root.left == null && root.right == null) return 1;

    // return depth of right subtree
    if(root.left == null) return 1 + minDepth(root.right);

    // return depth of left subtree
    if(root.right == null) return 1 + minDepth(root.left);

    // find minimum path, + 1
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};