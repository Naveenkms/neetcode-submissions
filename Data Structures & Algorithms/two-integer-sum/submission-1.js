class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // nums = [0, 12, 23, 3, 34], target = 26 op: i = 2 & j = 3
        const prevMap = new Map();
        let i = 0;

        while (i < nums.length) {
            const difference = target - nums[i];
            if (prevMap.has(difference)) {
                return ([prevMap.get(difference), i])
            }

            prevMap.set(nums[i], i)
            i++;
        }

        return [];

    }
}
