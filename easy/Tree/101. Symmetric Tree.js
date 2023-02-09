/*

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

*/

/*

APPROACH: Use simple recursion to check whether binary tree is symmetric around its center

Step 1:
	Create base case
	// check whether tree is empty

Step 2:
	Create recursive function that takes left and right child nodes (l,r)
	// left and right nodes are symmetric if both are null
	// nodes are NOT symmetric if only one is null
	// if node values are the same, call recursive function passing child nodes in symmetric order
	// if node values are NOT the same, subtree is NOT symmetric

Step 3:
	Call recursive function passing child nodes of root


TIME COMPLEXITY: O(n)

Traverse through all nodes of binary tree to check if tree is symmetric around center, O(n)

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


var isSymmetric = function(root) {
    if(!root) return null;

    return isSameTree(root.left, root.right);
};

var isSameTree = function(l,r){
    if(!l && !r) return true;

    if(!l || !r) return false;

    if(l.val == r.val){
        return isSameTree(l.left, r.right) && isSameTree(l.right, r.left);
    }

    return false;
}