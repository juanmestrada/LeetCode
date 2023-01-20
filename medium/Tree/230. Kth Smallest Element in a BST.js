/*

Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

*/

/*

APPROACH: Use dfs inorder traversal to add elements to a stack. When node cannot traverse down left child then no smaller values are found so node is popped from stack and k is decremented by 1 (1 element processed) and continue down right child node until k = 0 (kth elements processed).   

Step 1:
	Initialize current node pointer (curr) to root

Step 2:
	Create stack that will hold nodes in inorder

Step 3:
	Run while loop as long as root is not null or stack has elements
	* While loop will exit once kth element has been processed

Step 4:
	Run inner while loop as long as current node pointer (curr) is not null
	* Push current node (curr) to stack
	* traverse through left child

Step 5:
	When current node pointer (curr) is null:
	* (empty child node has been reached), update curr to stack.pop(), (last node with lowest value)
	* decrement k by 1 (1 element processed)

Step 6:
	If k elements have been processed, return node.val for current node

Step 7:
	If number of elements processed != k, continue to right subtree



TIME COMPLEXITY: O(log n + k)

Traverse through either left or right subtree, O(log n)
Traverse through k nodes of stack, O(k)

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
 * @param {number} k
 * @return {number}
*/


var kthSmallest = function(root, k) {
	// current node
    let curr = root;

    // stack of inorder nodes
    let stack = [];

    // Run until all nodes have been checked
    while(curr || stack.length){
    	// Run while current node is not empty
        while(curr){
        	// push current node to stack
            stack.push(curr);

            // continue down left subtree
            curr = curr.left;
        }

        // empty node has been reached
        // update curr to last non null node
        // pop last non null node from stack
        curr = stack.pop();

        // element has been processed, decrement k
        k--;

        // if elements processed == k, return last non empty node
        if(k == 0){
            return curr.val;
        }

        // elements processed != k
        // continue traversing right subtree
        curr = curr.right;
    }
};