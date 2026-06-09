class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {   // p, w, w, k, e, w
        let l = 0;
        let r = 0;
        let res = 0; // 1

        const includedCharacters = new Set(); // p,

        if (s.length === 0) {
            return res;
        }

        while (r < s.length) {
            while (includedCharacters.has(s[r]) && r < s.length) {
                includedCharacters.delete(s[l])
                l++;
            }

            includedCharacters.add(s[r]);

            const length = (r - l) + 1;
            if (length > res) {
                res = length;
            }

            r++;
        }

        return res;
    }
}
