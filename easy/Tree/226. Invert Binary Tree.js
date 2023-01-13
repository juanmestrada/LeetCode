/*

Given the root of a binary tree, invert the tree, and return its root.

*/

/*

APPROACH: Use DFS recursive function to invert tree by using a pointer to hold the value of one child of root (root.left) and swapping it for the other child (root.right). Repeat process for child nodes  

Step 1:
	Create recursive function (invertTree)

Step 2:
	Set base case
	*return null if node is empty

Step 3:
	Create pointer (temp) to hold value of one child of root (root.left)

Step 4:
	Swap child nodes
	*root.left = root.right
	*root.right = temp

Step 5:
	Call recursive function on child nodes

Step 6:
	Return root


TIME COMPLEXITY: O(n)

Traverse through every node of tree and swap values, O(n)

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
 * @return {TreeNode}
*/

// Recursive dfs function
var invertTree = function(root) {
	// base case
    // check if node is null
    if(!root) return null;
    
    //pointer holding value to be changed
    let temp = root.left;
    
    //swap child nodes of root
    root.left = root.right;
    root.right = temp;
    
    //call dfs recursive function on child nodes 
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
};