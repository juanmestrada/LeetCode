/*

You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

*/


/*

APPROACH: Use slow and fast pointer to find the middle of the linked list.

Reverse second half of the list and utilize temp pointers to merge both halves of the list. 

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
 * @return {void} Do not return anything, modify head in-place instead.
*/

var reorderList = function(head) {
    
    if(!head) return head;
    
    let slow = head,
        fast = head.next;
    
    // find middle of list
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // reverse second half
    let second = slow.next;
    slow.next = null;
    let prev = null;
    
    while(second){
        let tmp = second.next;
        second.next = prev;
        prev = second;
        second = tmp;
    }

    // merge two halves
    let first = head;
    second = prev;
    
    while(second){
        let tmp1 = first.next,
            tmp2 = second.next;
        first.next = second;
        second.next = tmp1;
        first = tmp1;
        second = tmp2;
        
    }
    
};