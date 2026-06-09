// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const map = new Map();
        let temp = head;
        while (temp) {
            const node = new Node(temp.val, temp.next, null);
            map.set(temp, node);
            temp = temp.next;
        }

        let dummy = new Node(0);
        temp = head;
        let curr = dummy;
        while (temp) {
            curr.next = map.get(temp);
            curr.next.random = map.get(temp.random) || null;
            temp = temp.next;
            curr = curr.next;
        }
        console.log(map)
        return dummy.next;
    }
}


