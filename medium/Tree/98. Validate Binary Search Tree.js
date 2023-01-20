/*

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

*/

/* 

APPROACH: Use recursive DFS function to check if node meets requirements for valid BST. 

Step 1:
	Create recursive DFS function

Step 2:
	Set base case
	*null node is considered valid 

Step 3:
	Set condition for valid BST node
	*left < node.val < right

Step 4:
	Return bool value for calling recursive function on BOTH child nodes

Step 5:
	Call initial function passing root node, left limit, right limit


TIME COMPLEXITY: O(n)

Traverse through every node of tree and check if node.val passes tests, O(n)

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
 * @return {boolean}
*/


var isValidBST = function(root) {

    function valid(node, left, right) {
    	//node is null
        if(!node) return true;

        //requirement for valid BST node value
        if(!(left < node.val && node.val < right)) return false;

        //call function on child nodes and return bool result of both statements
        return (valid(node.left, left, node.val) && valid(node.right, node.val, right))
    }

    //call function initialized with root node, left and right limits
    return valid(root, -Infinity, Infinity);
    
};