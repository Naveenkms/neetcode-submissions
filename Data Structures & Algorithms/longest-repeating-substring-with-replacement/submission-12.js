class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxCount = 0;
        let l = 0;
        let r = 0;

        while (l < s.length) {
            let maxFreqOfMostFreqChar = 1;
            const freq = new Map();
            freq.set(s[r], 1);

            console.log(`l -> ${l}: maxFreqOfMostFreqChar is ${maxFreqOfMostFreqChar}`)

            while (r < s.length) {
                r++;
                const val = freq.get(s[r]) ? freq.get(s[r]) : 0;
                freq.set(s[r], val + 1)
                if (val + 1 > maxFreqOfMostFreqChar) {
                    maxFreqOfMostFreqChar = val + 1;
                }
                // if (((r - l) + 1) - maxFreqOfMostFreqChar > k) {
                //     break;
                // }
                if ((r - l) + 1 - maxFreqOfMostFreqChar > k) {
                    break;
                }
                console.log(`r -> ${r}: val ${val}, freq ${freq.get(s[r])}, maxFreqOfMostFreqChar ${maxFreqOfMostFreqChar}`)

            }

            const currLength = r - l
            console.log(`currLength is ${currLength}, maxCount s ${maxCount}`)
            if (maxCount < currLength) {
                maxCount = currLength;
            }
            l++;
            r=l;
        }
        return maxCount;

    }
}