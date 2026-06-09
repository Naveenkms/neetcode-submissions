class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let b = 0;

        for (b; b < prices.length - 1; b++) {
            let s = b + 1;
            while (s < prices.length) {
                const outcome = prices[s] - prices[b];
                if (outcome > profit) {
                    profit = outcome;
                }
                s++;
            }
        }
        return profit;
    }
}
