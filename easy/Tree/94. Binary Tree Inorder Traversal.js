/*

Given the root of a binary tree, return the inorder traversal of its nodes' values.

*/

/*

APPROACH: Use inorder traversal to add node values to stack. Push node values to result array as they are popped off stack.

Step 1:
    Create result array

Step 2:
    Create stack

Step 3:
    Create current node pointer (curr)

Step 4:
    Create while loop that will run as long as current node pointer != null and stack is not empty

Step 5:
    Create inner while loop to push left node values 
    // Push current node (curr) value to stack
    // Update current node (curr) to left child

Step 6:
    Push right nodes to stack
    // Push node values to result array as they are popped off stack
    // Update current node (curr) to right child

Step 7:
    Return result array


TIME COMPLEXITY: O(n)

Traverse through binary tree and add node values to stack, O(n)

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


var inorderTraversal = function(root) {
    const result = [],
          stack = [];
    
    let curr = root;
    
    // run while nodes exist and stack is not empty
    while(curr || stack.length){
        // push left and right nodes to stack
        while(curr != null){
            stack.push(curr);
            // move to left child
            curr = curr.left;
        }

        // push node values to result array as they are popped off stack
        curr = stack.pop();
        result.push(curr.val);
        // move to right child
        curr = curr.right;
    }
    
    return result;
};