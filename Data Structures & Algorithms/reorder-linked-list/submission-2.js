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
     * @return {void}
     */
    reorderList(head) {
        const arr = [];
        let curr = head;

        while (curr) {
            arr.push(curr);
            curr = curr.next;
        }


        let l = 0;
        let h = arr.length - 1;
        let node = arr[l]
        if (h > 0) {
            node.next = arr[h];
            node = arr[h];
            l++;
            h--;
        }


        while (l < h) {
            node.next = arr[l];
            node.next.next = arr[h]
            node = arr[h];
            l++;
            h--;
        }

        if (arr.length % 2 !== 0) {
            node.next = arr[l];
            node = node.next;
        }
        node.next = null;
    }
}
