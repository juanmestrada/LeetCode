/*

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

*/

/*

APPROACH: 

SERIALIZE TREE: 
	Use recursive function to implement pre-order traversal to push node values to array
	Return array of values (result) joined by "," to create serialized string

Step 1:
	Create global result array

Step 2: 
	Use recursive function to implement pre-order DFS
	Push node values to result array
	** push "N" to result array if node is null 

Step 3:
	Return result.join(",") to create serialized string

______________________________________________________________________________________


DESERIALIZE TREE: 	
	Use recursive function to implement pre-order DFS and create tree nodes by looping through array (values) created from splitting serialized string using pointer
	Set node.val to array[i] (values[i])

Step 1:
	Split serialized string to create array of node values

Step 2: 
	Create pointer for array index

Step 3:
	Use recursive function to implement pre-order DFS and create tree nodes by looping through array (values) using pointer
	** Set node.val to null if array[i] == "N"
	Increment pointer

Step 4:
	Return created node

______________________________________________________________________________________

TIME COMPLEXITY: O(n)

SERIALIZE TREE: O(N)

Traverse through every node in tree to push value to array, O(n)

______________________________________________________________________________________

DESERIALIZE TREE: O(N)

Traverse through values of array to create tree nodes, O(n)

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
*/

/*
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
*/


// serialize binary string
var serialize = function(root) {
    
    // array of node values
    let result = [];

    // recursive DFS
    function DFS(node){

    	// push "N" to result array if node is null
        if(!node) {
            result.push("N");
            return;
        }

        // push node value to result array
        result.push(node.val);

        // call recursive function for children of current node
        DFS(node.left);
        DFS(node.right);
    }

    // call recursive function with root node
    DFS(root);

    // create serialized string from result array
    return result.join(",");
};


/*
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
*/


// deserialize binary string
var deserialize = function(data) {

	// create array of node values
    let values = data.split(",");

    // array index pointer
    let i = 0;

    // recursive DFS
    function DFS(){

    	// set node to null
        if(values[i] == "N"){
        	// increment pointer
            i++;
            return null;
        }

        // create tree node using array pointer 
        let newNode = new TreeNode(values[i]);

        // increment pointer
        i++;

        // call recursive function for children of current node
        newNode.left = DFS();
        newNode.right = DFS();

        // return created node
        return newNode;
    }

    // call recursive function
    return DFS();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */