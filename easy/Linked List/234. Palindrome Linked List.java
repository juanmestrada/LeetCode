/*

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.


Example 1:

	1 → 2 → 2 → 1

Input: head = [1,2,2,1]
Output: true


Example 2:

	1 → 2

Input: head = [1,2]
Output: false
 

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9
 

Follow up: Could you do it in O(n) time and O(1) space?

*/

/*

APPROACH: Use Floyd's cycle detection algorithm (Tortoise and hare) to traverse linkedlist with 2 pointers, one slow one fast.
		  Once fast pointer reaches the end then slow pointer will be at the middle of the linkedlist. 

Step 1: Create variables slow, fast, prev and temp all of type ListNode
		
Step 2: Find middle of linkedlist
		* while fast and fast.next are not null continue moving pointers
	
Step 3: Reverse second half of linkedlist

Step 4: Compare pointers to check if palindrome

Step 5: If pointers do not match false will be returned, else eventually true will be returned


TIME COMPLEXITY: O(n)

Traverse every node in linkedlist, O(n)

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
    public boolean isPalindrome(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        ListNode prev;
        ListNode temp;

        // find middle
        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }

        // reverse second half
        prev = null;

        while (slow != null) {
            temp = slow.next;
            slow.next = prev;
            prev = slow;
            slow = temp;
        }

        // check if palindrome
        fast = head;
        slow = prev;

        while (slow != null) {
            if (fast.val != slow.val) return false;
            
            fast = fast.next;
            slow = slow.next;
        }

        return true;
    }
}