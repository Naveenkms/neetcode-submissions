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

        includedCharacters.add(s[r]);
        do {
            const length = (r - l) + 1;
            if (length > res) {
                res = length;
            }

            r++;


            while (includedCharacters.has(s[r]) && r < s.length) {
                includedCharacters.delete(s[l])
                l++;
            }

            if (r < s.length) {
                includedCharacters.add(s[r]);
            }

        } while (l <= r && r < s.length)

        return res;
    }
}
