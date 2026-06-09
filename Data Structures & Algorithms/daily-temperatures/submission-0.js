class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let l = 0;
        const res = [];

        while (l < temperatures.length) {
            let r = l + 1;
            let val = 0;
            while (r < temperatures.length) {
                if (temperatures[r] > temperatures[l]) {
                    val = r - l;
                    break;
                }
                r++;
            }
            res.push(val)
            l++;
        }

        return res;
    }
}
