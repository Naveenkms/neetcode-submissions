class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // 6
        let maxProfit = 0;

        let i = 0;
        let j = 1;
        const length = prices.length;

        while (i < length && j < length) {
            // 0
            const profit = prices[j] - prices[i];

            if (profit < 0) {
                i = j; // i =1
            } else {
                if (profit > maxProfit) {
                    maxProfit = profit;
                }
            }
            // j = 6
            j++;
        }

        return maxProfit;
    }
}

// prices = [10, 1, 5, 6, 7, 1]

// i = 0;
// j=1;
// 1-10 = -9, since negative -> i = 1, j = i + 1

// i = 1;
// j = 2;
// 5-1 = 4
// j=3 
// 6-1 = 5
// j=4
// 7-1 = 6
// j=5 
// 1-1 = 0
