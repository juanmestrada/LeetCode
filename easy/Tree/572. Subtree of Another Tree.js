/*

Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

*/

/*

APPROACH: Use recursive function for depth first search of tree rooted at root to check if tree rooted at subroot is a sub tree of tree rooted at root
          ** Time complexity can be improved by hashing tree values and storing them in a map, or string serialization of both trees and matching their values


Step 1:
    Create dfs recursive function (isSubtree) to check if tree rooted at subRoot is subtree of tree rooted at root or it's child nodes
    *if root node of tree rooted at root does not contain subtree of tree rooted at subRoot, call recursive function (isSubtree) passing in child nodes

Step 2:
    Set base cases to check if root or subroot node is null
    *subRoot node can NOT be subtree of empty tree
    *null subRoot CAN be subtree of NON empty tree
    *null subRoot CAN be subtree of null root tree

Step 3:
    Create recursive function (isSameTree) that checks if subtrees are the same

Step 4:
    Set base cases for (isSameTree) that compares nodes of tree rooted at root (r) and tree rooted at subRoot (s)
    *null (r) node is identical to null (s) node

Step 5:
    Call recursive function (isSameTree) to check if nodes of root and subRoot and both of their child nodes are identical
    *recursive function will only be called if both nodes are NOT null and their values are the same

Step 6:
    If nodes are identical and base case has been met, return true. Tree rooted at subRoot has been found to be a subtree of tree rooted at root



TIME COMPLEXITY: O(n*m)

Traverse through every node of tree rooted at root, O(n)
For every n node of tree rooted at root, traverse through every node of tree rooted at subRoot to compare nodes, O(m)


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
 * @param {TreeNode} subRoot
 * @return {boolean}
*/

// dfs recursive function to check if subRoot is subtree of root
var isSubtree = function(root, subRoot) {
    // null subroot can be subtree of non empty tree
    if(!subRoot) return true;

    // subroot can not be subtree of empty tree
    if(!root) return false;

    // current node contains subtree of tree rooted at subRoot
    if(isSameTree(root, subRoot)) return true;

    // current root node does NOT contain subtree of tree rooted at subRoot
    // call recursive function on child nodes of root and check if subtree exists
    return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot))
    
};

// recursive function to check if subtrees are identical
function isSameTree(r, s){
    // nulls nodes are the same
    if(!r & !s) return true;

    // check if both nodes are not null and their values are the same
    // if condition passes, call recursive function on their child nodes
    if(r && s && r.val == s.val){
        return (isSameTree(r.left, s.left) && isSameTree(r.right, s.right))
    }

    // nodes are not the same
    return false;

}