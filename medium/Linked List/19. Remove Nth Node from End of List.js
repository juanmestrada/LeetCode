/*

Given the head of a linked list, remove the nth node from the end of the list and return its head.

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
 * @param {number} n
 * @return {ListNode}
*/

/*

Two Pointer approach. 

Left pointer will be initialized at dummy node.
Right pointer will be initialized at head.

Increment both pointers by 1 and decrement n by 1 until right pointer reaches the end (tail.next). Left pointer will be
at nth node (node being deleted) -1.

By initializing left pointer to dummy node, left pointer will be at node before node being deleted. 

*/

var removeNthFromEnd = function(head, n) {
    
    let dummy = new ListNode(-1, head);
    
    // initialize pointers.
    let left = dummy;
    let right = head;
    
    // shift right pointer by n.
    while(n > 0 && right){
        right = right.next;
        n--;
    }
    
    // shift both pointers until right is at the end (null). 
    while(right){
        left = left.next;
        right = right.next;
    }
    
    // left pointer is at nth node from the end -1. 
    // set left.next to left.next.next removing nth node.
    left.next = left.next.next;
    
    // return head.
    return dummy.next;
};