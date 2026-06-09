/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) {
            return true;
        }
        const leftHeight = this.height(root.left);
        const rightHeight = this.height(root.right);
        if( Math.abs(leftHeight - rightHeight) > 1) return false;
        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }

    height(root) {
        if (root === null) {
            return 0;
        }
        return 1 + Math.max(this.height(root.left), this.height(root.right))
    }
}
