

// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }


class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        return this.add(l1, l2, 0)
    }

    add(l1, l2, carry) {
        if (!l1 && !l2 && carry === 0) {
            return null;
        }

        const v1 = l1 ? l1.val : 0;
        const v2 = l2 ? l2.val : 0;

        const sumOfDigits = v1 + v2 + carry;
        const currNode = sumOfDigits % 10;
        const newCarry = Math.floor(sumOfDigits / 10);

        const nextNode = this.add(l1 ? l1.next : null, l2 ? l2.next : null, newCarry)

        return new ListNode(currNode, nextNode);
    }
}




