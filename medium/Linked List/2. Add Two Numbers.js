/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

*/

/*

APPROACH: Create new linked list by adding values of list rooted at l1 and list rooted at l2, substitute 0 for null nodes and keep track of carry for sum of l1 + l2.

Step 1:
	Create dummy node

Step 2:
	Create pointer for current node
	// initialized to dummy node

Step 3:
	Create variable (carry) to track carry value of l1 + l2

Step 4:
	Create while loop to run as long as l1 node != null, l2 node != null, carry value != 0

Step 5:
	Find single digit value for next node by adding node values with previous carry
	// Substitute null nodes with 0
	// Update carry for sum of l1 + l2
	// Update sum to include only ones place digit, carry removed

Step 6:
	Create new node using new single digit sum of l1 + l2 

Step 7:
	Update all pointers

Step 8:
	Return root of new list
	// dummy.next


TIME COMPLEXITY: O(max(m,n)) // size of linked list of greatest length

Traverse through linked list of root l1, O(m)
Traverse through linked list of root l2, O(n)

*/

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
*/

/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
*/


var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode();
    let curr = dummy;
    
    let carry = 0;
    
    while(l1 || l2 || carry){
        //node values to be added
        //null nodes replaced with 0
        let val1 = l1 ? l1.val : 0,
            val2 = l2 ? l2.val : 0;

        //find value for next node
        //add node values and previous carry
        let sum = val1 + val2 + carry;
        //update carry value for current node sum
        carry = Math.floor(sum / 10);
        //update sum to include only ones place digit, remove carry
        sum = sum % 10;
        //create new node
        curr.next = new ListNode(sum);

        // update pointers
        curr = curr.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;    
    }
    
    return dummy.next;
};