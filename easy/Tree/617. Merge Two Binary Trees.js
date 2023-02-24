/*

You are given two binary trees root1 and root2.

Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

Return the merged tree.

Note: The merging process must start from the root nodes of both trees.

*/

/*

APPROACH: Use recursive function to merge node values for both trees


Step 1: 
    For two non null nodes:
    * add both node values
    * call recursive function for child nodes
    * return node

Step 2:
   Return non null node
    

TIME COMPLEXITY: O(n+m)

Traverse through every node of tree rooted at root1, O(n)
Traverse through every node of tree rooted at root2, O(m)


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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
*/


var mergeTrees = function(root1, root2) {
    if (root1 && root2){
        // add values for overlapping nodes
        root1.val += root2.val;
        // call recursive function on child nodes
        root1.left = mergeTrees(root1.left, root2.left);
        root1.right = mergeTrees(root1.right, root2.right);
        return root1;
    } else {
        // return non null node
        return root1 || root2;
    }
};