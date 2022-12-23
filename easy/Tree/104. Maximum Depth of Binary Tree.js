/*

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

*/

/*

APPROACH: Use queue to loop through tree nodes and add children nodes to the queue. 
		  Track queue length to determine when all sibling nodes have left the queue and tree height can be incremented

Step 1: 
	Create queue, initialized with root node

Step 2:
	Track queue length
	Increment tree height

Step 3:
	Loop through queue
	Create pointer to currentNode as its removed from the queue
	Push any children nodes of currentNode to the queue


TIME COMPLEXITY: O(n)

Loop through each node of tree, O(n)

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
 * @return {number}
*/

// RECURSIVE DFS
var maxDepth = function(root) {
    if(!root){
        return 0;
    }

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// ITERATIVE BFS
var maxDepth = function(root) {
 
    if(!root) return 0;
    
    let depth = 0,
        queue = [root]; //initialize queue with root node
       
    while(queue.length > 0){
    	// increment height
        depth++;  
        
        // pointer to queue length
        const len = queue.length;

        // loop through sibling nodes at current tree depth
        for(let i = 0; i < len; i++){
        	// pointer to currentNode as its removed from queue
            let currentNode = queue.shift();
            
            // add currentNode's children
            if(currentNode.left) queue.push(currentNode.left)
            if(currentNode.right) queue.push(currentNode.right);
        }
    }
    
    return depth;
};