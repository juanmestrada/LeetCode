/*

You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.

For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.

Return the head of the modified linked list.

*/

/*

APPROACH: Using a dummy node, create a new node with the running sum of all nodes between node whose value is 0 and add it to the tail of dummy node

Step 1: Initialize pointers, currNode, dummy and tail all of type ListNode
		
Step 2: Create while loop to run as long as node.next is not null
	
Step 3: Create a new ListNode with a default value of 0

Step 4: Increment new ListNode.val to the current node.val as long as its value is not 0

Step 5: Add new ListNode to the tail of dummy node


TIME COMPLEXITY: O(n)

Traverse through every node in linkedlist, O(n)

*/


/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
*/

class Solution {
    public ListNode mergeNodes(ListNode head) {
        ListNode currNode = head;
        ListNode dummy = head;
        ListNode tail = dummy;

        while(currNode.next != null){
            ListNode newNode = new ListNode(0);

            while(currNode.next.val != 0){
                newNode.val += currNode.next.val;
                currNode = currNode.next;
            }

            tail.next = newNode;
            tail = tail.next;
            currNode = currNode.next;
        }
        
        return dummy.next;
    }
}