class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const map = new Map();

        for (let num of nums) {
            if (!map.get(num)) {
                map.set(num, true);
            } else {
                return num
            }

        }
    }
}

