class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;

        for (let i = 0; i < prices.length - 1; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                const profit = prices[j] - prices[i]
                if (profit > maxProfit) {
                    maxProfit = profit;
                }
            }
        }

        return maxProfit;
    }
}

// prices = [10, 1, 5, 6, 7, 1]

// i = 0;
// 1 - 10 = -9
// 5 - 10 = -5
// 6 - 10 = -4
// 7 - 10 = -3
// 1 - 10 = -9

// i = 1;
// 5 - 1 = 4
// 6 - 1 = 5
// 7 - 1 = 6
// 1 - 1 = 0

// i = 2
// 6 - 5 = 1
// 7 - 5 = 2
// 1 - 5 = -4

// i = 3
// 7 - 6=1
// 1 - 6=-5

// i = 4
// 1 - 7 = -6
