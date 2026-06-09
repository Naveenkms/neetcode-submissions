/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    // 1, 2, 3, 4 ; n = 2
    removeNthFromEnd(head, n) {
        let count = 0;
        let curr = head;

        while (curr) {
            count++;
            curr = curr.next;
        }

        console.log(count, n)
        let node = head;
        if (count === n) {
            head = node.next;
            return head;
        }

        const prevIndex = count - n;
        let count2 = 1;
        while (count2 < prevIndex) {
            count2++;
            node = node.next;
        }
        node.next = node.next.next;
        return head;
    }
}


