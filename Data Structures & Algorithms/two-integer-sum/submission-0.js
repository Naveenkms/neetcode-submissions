class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // nums = [0, 12, 23, 3, 34], target = 26 op: i = 2 & j = 3
        let result;

        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (j === i) continue;
                if (nums[i] + nums[j] === target) {
                    result = [i, j]
                    break; 
                }
            }
        }

        return result;
    }
}
