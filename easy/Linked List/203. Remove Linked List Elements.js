/*

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

*/

/*

Approach: Use recursion to traverse through linked list. Once at the tail, if node.val = val, remove node. Return node and pop off stack

Step 1:
	Set base case
	* if current node is null return null

Step 2:
	Set head.next to recursive function to traverse to end of list

Step 3:
	Have current node return itself or point to current node.next if matching target value

TIME COMPLEXITY: O(n)

Traverse through all nodes of linked list to remove nodes with target val, O(n)

*/

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
*/

/*
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
*/


var removeElements = function(head, val) {
	// node is null
    if(!head) return null;
    
    // recursive call to reach tail
    head.next = removeElements(head.next, val);

    // remove node if target val. pop off stack
    return head.val == val ? head.next : head;
};