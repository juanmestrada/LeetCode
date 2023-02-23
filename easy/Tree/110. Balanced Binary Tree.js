/*

Given a binary tree, determine if it is height-balanced.

*/

/*

APPROACH: Use dfs recursive function to return subtree height, unbalanced subtree will return -1


Step 1: 
    Create recursive function (dfs) that accepts a node
    * base case: return 0 for null nodes
    * call recursive function for left and right child nodes, assign return values to their respective variables
    * return -1 if left == -1, right == -1, Math.abs(left - right) > 1
    * return tree height of either (left or right) + 1

Step 2:
    Check if dfs function returns -1
    * Return true if dfs returns tree height, false if dfs returns -1 (tree unbalanced)
    

TIME COMPLEXITY: O(n)

Traverse through all nodes of binary tree to check if tree is balanced at given node, O(n)

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


var isBalanced = function(root) {
    // recursive function
    function dfs(node){
        // base case
        if(node == null) return 0;

        // assign -1 or subtree height to variables
        let left = dfs(node.left),
            right = dfs(node.right);

        // return -1 if:
        // either left or right subtree is unbalanced
        // difference between left and right subtree height is greater that 1
        if(left == -1 || right == -1 ||  Math.abs(left - right) > 1) return -1;

        // previous subtree height + 1
        return Math.max(left, right) + 1;
    }

    // check if dfs returns -1, subtree unbalanced
    return dfs(root) != -1;
}