/*

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

*/

/*

APPROACH: Use breadth first search to loop through nodes of every tree level and add their child nodes to a queue. Push a sub list of every tree level containing values for each node to results array 

Step 1:
	Create queue initialized with root node
	Create result array

Step 2:
	Create pointer holding queue length
	Declare sub array that will hold node values of current tree level

Step 3:
	Traverse through nodes in queue
	Push node values to current level (currLevel) array
	Push child nodes of current node (currNode) to queue

Step 4:
	Push currLevel array containing node values at current tree level to result array


TIME COMPLEXITY: O(n)

Loop through every tree node and push to queue, O(n)

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
 * @return {number[][]}
*/


var levelOrder = function(root) {

    // root is null
    if(!root) return [];
    
    // initialize queue with root node
    let queue = [root];

    let result = [];

    while(queue.length > 0){
        // pointer holding queue length
        let len = queue.length;

        // current tree depth
        let currLevel = [];

        // loop through queue
        for(let i = 0; i < len; i++){
            // current node removed from queue
            let currNode = queue.shift();

            // push current node value to current level array
            currLevel.push(currNode.val);

            // push current node's left child to queue
            if(currNode.left) queue.push(currNode.left);
            // push current node's right child to queue
            if(currNode.right) queue.push(currNode.right);
            
        }

        // push current level sub array to result array
        result.push(currLevel);

    }

    return result;
};