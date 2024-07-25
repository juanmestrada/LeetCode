/*

Given the head of a linked list head, in which each node contains an integer value.

Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.

Return the linked list after insertion.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

*/

/*

APPROACH: Use an Euclidean algorithm to get greatest common divisor between adjacent nodes and add that node containing that value (gcd) between them

Step 1: Create variables prevNode and currNode of type ListNode
		
Step 2: Create while loop to run as long as currNode is not null
	
Step 3: Create new node with value returned from Euclidean algorithm

Step 4: Insert new node between nodes using pointers

Step 5: Return head


TIME COMPLEXITY: O(n)

Traverse through every node of linkedlist, O(n)

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
    public int gcd(int a, int b) {
        if (b==0) return a;
        return gcd(b,a%b);
    }
    public ListNode insertGreatestCommonDivisors(ListNode head) {
        ListNode prevNode = head;
        ListNode currNode = head.next;

        while(currNode != null){
            int gcd = gcd(prevNode.val, currNode.val);

            ListNode newNode = new ListNode(gcd);

            prevNode.next = newNode;
            newNode.next = currNode;
            prevNode = currNode;
            currNode = currNode.next;
        }

        return head;
    }
}