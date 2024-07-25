/*

You are given two linked lists: list1 and list2 of sizes n and m respectively.

Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

The blue edges and nodes in the following figure indicate the result:

*/

/*

APPROACH: Use 2 pointers to find the correct nodes to merge list2 in between

Step 1: Create pointer currNode of type ListNode with value list1
		
Step 2: Create pointer (counter) of type int to track index initialized to 0
	
Step 3: Use while loop to run as long as counter is less than a -1 (to get node before index a)
		* update currNode to next node
		* increment counter 

Step 4: Create variable temp of type ListNode to keep track of node before node to be removed (node at index a)

Step 5: Create while loop to run until node before tail of list2 (node at index b)
		* update currNode to next node
		* increment counter 

Step 6: Merge list2 to the end of pointer holding node before node to be removed

Step 7: Merge every node of list2

Step 8: After last node of list2, merge remaining nodes of list1 using currNode which is now pointing to node after node to be removed

Step 9: Return newly merged list1

TIME COMPLEXITY: O(n+m)

Traverse through every node in list1, O(n)
Traverse through every node in list2, O(m)

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
    public ListNode mergeInBetween(ListNode list1, int a, int b, ListNode list2) {
        ListNode currNode = list1;
        int counter = 0;

        // find node before node to be removed
        while(counter < a -1){
            currNode = currNode.next;
            counter++;
        }

        // pointer will hold node before node to be removed
        ListNode temp = currNode;

        // find node AFTER node/s to be removed
        while(counter <= b){
            currNode = currNode.next;
            counter++;
        }

        // merge list2 to list 1
        temp.next = list2;

        // merge each node of list2, stopping at last node of list 2
        while(list2.next != null){
            list2 = list2.next;
        }

        // merge remainder of list1 to the tail of list2
        list2.next = currNode;

        // return merged list
        return list1;

    }
}