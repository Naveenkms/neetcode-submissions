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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */

    dfs(p, q) {
        if (p === null && q === null) {
            return true;
        }

        if (p && q && p.val === q.val) {
            const isTrueLeft = this.dfs(p.left, q.left);
            const isTrueRight = this.dfs(p.right, q.right);
            return isTrueLeft && isTrueRight;
        }
        return false;


    }
    isSameTree(p, q) {
        return this.dfs(p, q)
    }
}
