/*

Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

For example, the following two linked lists begin to intersect at node c1:

	a1 → a2 ↘
			  c1 → c2 → c3
	b2 → b2 ↗ 


The test cases are generated such that there are no cycles anywhere in the entire linked structure.

Note that the linked lists must retain their original structure after the function returns.

Custom Judge:

The inputs to the judge are given as follows (your program is not given these inputs):

	intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.

	listA - The first linked list.
	listB - The second linked list.
	skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
	skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.


The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. 
If you correctly return the intersected node, then your solution will be accepted.

*/

/*

APPROACH: Use 2 pointers to traverse both linkedlists regardless of length by setting the value of each pointer to the head of the other linkedlist once tail node is reached. 
		  Eventually both pointers will reach the intersecting node if one exists or they will both be null, if no intersecting node is found 

Step 1: Create edge case to test if either head node is null, as there can be no intersection
		
Step 2: Create variables, a_pointer and b_pointer, of type ListNode initialized to both heads of given linkedlists
	
Step 3: Create while loop to run as long as both pointers are not equal

Step 4: Update pointers to check next node or set value to head of other linkedlist

Step 5: return either pointer


TIME COMPLEXITY: O(m+n)

Traverse every node in linkedlist where headA is head, O(m)
Traverse every node in linkedlist where headB is head, O(n)


*/


/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
*/

public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if (headA == null || headB == null) return null;
        
        ListNode a_pointer = headA;
        ListNode b_pointer = headB;

        while(a_pointer != b_pointer){
            a_pointer = a_pointer == null ? headB : a_pointer.next;
            b_pointer = b_pointer == null ? headA : b_pointer.next;
        }

        return a_pointer;
    }
}