/*

Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.

If the tree has more than one mode, return them in any order.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.

*/

/*

APPROACH: Use inorder traversal and pointers to track previous node value, it's count and overall max count. Push most frequently occuring elements to result array (modes)

Step 1:
	Create variables for modes, previous node, node count, overall max count
	* modes array will hold most frequently occurring elements
	* (prev) will point to previous node value
	* (count) will keep track of previous element occurrence count
	* (max) will track the count for max occurring element

Step 2: 
	Create recursive dfs function
	* base case returns when null node is reached
	* will call itself passing left child node
	* will update prev pointer if new value is reached or increment count for same element
	* will now call itself passing right child node

Step 3:
	Call initial dfs recursive function passing root node

Step 4:
	Return result array (modes) of most frequently occurring elements


TIME COMPLEXITY: O(n)

Traverse through binary tree to push most frequently occuring elements to result array, O(n)

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


var findMode = function(root) {
    let modes = [],
        prev = null,
        count = 0,
        max = -Infinity;
    
    function dfs(node){
        if(node == null) return;

        // inorder traversal
        // left child node
        dfs(node.left);
        
        // update pointers when current node != prev node
        if(prev != node.val){
            prev = node.val;
            count = 0;
        } 

        count++;

        if(count > max){
            modes = [node.val];
            max = count;
        } else if(count == max){
            modes.push(node.val);
        }

        // inorder traversal
        // right child node
        dfs(node.right);
    }

    // initial recursive call
    dfs(root);

    return modes;
};