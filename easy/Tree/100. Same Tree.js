/*

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

*/

/*

APPROACH: Use iterative or recursive functions with proper conditions to check if nodes of both trees are the same

// RECURSIVE
Step 1: 

// ITERATIVE
Step 1: 
    Initialize queue with root nodes of p and q

Step 2:
    Loop through queue

Step 3:
    Check if nodes of both trees at current iteration exist and their values are equal
    If all conditions pass, add children nodes to queue

TIME COMPLEXITY: O(p+q)

Traverse through every node of p, O(p)
Traverse through every node of q, O(q)


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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
*/

// RECURSIVE DFS
var isSameTree = function(p, q) {
    // both nodes are null
    if(!p && !q) return true;

    // only one node is null
    if(!p || !q) return false;

    // values for each node are not the same
    if(p.val !== q.val) return false;

    return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right));
};


// ITERATIVE DFS
var isSameTree = function(p, q) {
    // initialize queue with p root node and q root node
    let queue = [p,q];

    while(queue.length > 0){
        // hold pointer for p node as it leaves the queue
        const pNode = queue.shift();

        // hold pointer for q node as it leaves the queue
        const qNode = queue.shift();

        // both nodes are equal (null), skip loop iteration 
        if(!pNode && !qNode) continue;

        // only one node is null or node values are not equal, trees are not the same
        if((!pNode || !qNode) || (pNode.val !== qNode.val)) return false;

        // all conditions passed, push children nodes to queue
        queue.push(pNode.left, qNode.left);
        queue.push(pNode.right, qNode.right);
    }

    return true;
};