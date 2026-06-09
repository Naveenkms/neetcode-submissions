class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};
        for (let s of strs) {
            const count = new Array(26).fill(0);
            for (let c of s) {
                const countIndex = c.charCodeAt(0) - "a".charCodeAt(0);
                count[countIndex] += 1;
            }
            const key = count.join(",");
            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(s);
        }

        return Object.values(res);
    }
}

// approach 2
// strs[0] -> act, count = [0], count = [1, 0, 1, 0, 0, 0, 1, 0, 0, 0]

