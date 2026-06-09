class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};
        for (let s of strs) {
            const sortedS = s.split('').sort().join('');
            if (!res[sortedS]) {
                res[sortedS] = [];
            }
            res[sortedS].push(s);
        }

        return Object.values(res);
    }
}

// approach 1
// strs = ["act","pots","tops","cat","stop","hat"]
// strs[0] = act, sort -> act, res = {act: [act]}
// strs[1] = pots, sort -> pots, res = {act: [act], pots: [pots]}
// strs[2] = tops, sort -> pots, res = {act: [act], pots: [pots, tops]}
// strs[3] = cat, sort -> act, res = {act: [act, cat], pots: [pots, tops]}
// strs[4] = stop, sort -> pots, res = {act: [act, cat], pots: [pots, stop, stop]}
// strs[5] = hat, sort -> hat, res = {act: [act, cat], pots: [pots, tops, tops], hat: [hat]}
// Object.values(res)
