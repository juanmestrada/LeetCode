/*

Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

*/

/*

APPROACH: If p.val and q.val are LESS than root.val, check LEFT subtree. If p.val and q.val are GREATER than root.val, check RIGHT subtree. Return parent node of both

Step 1:
	Run while loop until if statement returns

Step 2:
	Update root to either left or right subtree

Step 3:
	When if-else condition fails, return node (lowest common ancestor) of p and q



TIME COMPLEXITY: O(log n)

Traverse either left or right subtree to check for condition, O(log n)


*/

/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
*/

/*
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
*/


var lowestCommonAncestor = function(root, p, q) {
	// run while loop until if-else statement returns
    while(root){
        if(p.val < root.val && root.val > q.val){
        	// check left subtree
        	// update root
            root = root.left;
        } else if(p.val > root.val && root.val < q.val){
        	// check right subtree
        	// update root
            root = root.right;
        } else {
        	// lowest common ancestor has been found
        	// return lca
            return root;
        }
    }
};
