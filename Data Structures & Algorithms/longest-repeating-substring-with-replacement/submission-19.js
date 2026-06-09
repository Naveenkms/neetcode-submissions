class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        let l = 0;
        let r = 0;
        const freq = new Map();
        let maxFreqCharInWindow = 0;

        while (r < s.length) {
            freq.set(s[r], (freq.get(s[r]) || 0) + 1);

            maxFreqCharInWindow = Math.max(maxFreqCharInWindow, freq.get(s[r]))

            const isValidWindow = (r - l + 1) - maxFreqCharInWindow <= k
            if (isValidWindow) {
                res = Math.max(res, r - l + 1)
            } else {
                freq.set(s[l], freq.get(s[l]) - 1)
                let maxFreq = 0;
                freq.forEach(function (value, key) {
                    if (value > maxFreq) {
                        maxFreq = value;
                    }
                })
                maxFreqCharInWindow = maxFreq;
                l++;
            }

            r++;
        }



        return res;
    }
}