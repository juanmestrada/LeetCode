/*

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

*/

/*

APPROACH: Use preorder array to find root node and inorder array to find root's child nodes to build tree recursively. Use hash map to store inorder array value indexes, those values will be used to find position of root node and set a range within inorder array to find possible child nodes

Step 1: 
    Create hash map that will hold the values of inorder array and their indexes

Step 2:
    Traverse through inorder array to fill hash map

Step 3:
    Create pointer used to traverse through preorder array, initialized with 0

Step 4:
    Create recursive function (build) to build tree

Step 5:
    Set base case for recursive function (build) 
    *left and right are the range for finding possible valid child nodes of root

Step 6:
    Create node for root and increment preorder array pointer (p)

Step 7:
    Call recursive function (build) on child nodes of root passing range of inorder array where possible child nodes can be found


TIME COMPLEXITY: O(n)

Add n nodes to build hash map, O(n)
Create n nodes to build tree, O(n) 

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
*/


var buildTree = function(preorder, inorder) {
    //map of inorder value indexes
    let inorder_map = {};
    
    //fill inorder_map
    for(let i = 0; i < inorder.length; i++){
        inorder_map[inorder[i]] = i;
    }
    
    //pointer to traverse preorder array
    let p = 0;
    
    //recursive function to build tree
    let build = function(left, right){
        //indexes for current subtree
        if(left > right) return null;
        
        //create root node
        let root_val = preorder[p];
        let root = new TreeNode(root_val);
        
        //increment preorder array pointer
        p++;
        
        //call recursive function for child nodes of root
        //pass range of inorder array to find valid child elements for left subtree
        root.left = build(left, inorder_map[root_val] - 1);
        //pass range of inorder array to find valid child elements for right subtree
        root.right = build(inorder_map[root_val] + 1, right);
        
        return root;
    }
    
   return build(0, preorder.length - 1)
    
};