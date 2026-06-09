class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    backtracking(open, close, choice, res, stack) {
        if (open === close && open === choice) {
            res.push(stack);
            return;
        }
        if (open < choice) {
            this.backtracking(open + 1, close, choice, res, stack + "(");
        } if (open > close) {
            this.backtracking(open, close + 1, choice, res, stack + ")")
        }
    }
    generateParenthesis(n) {
        const res = [];
        this.backtracking(0, 0, n, res, "");
        return res;
    }
}
