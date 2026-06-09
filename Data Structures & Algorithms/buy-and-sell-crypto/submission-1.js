class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let bDay = 0;
        let sDay = 1;
        let profit = 0; // 4
        while (sDay < prices.length) {
            const outcome = prices[sDay] - prices[bDay];
            if (outcome > profit) {
                profit = outcome;
            }
            if(prices[bDay] > prices[sDay]) {
                bDay = sDay;
            }
            sDay++;
        }

        return profit;
    }
}
