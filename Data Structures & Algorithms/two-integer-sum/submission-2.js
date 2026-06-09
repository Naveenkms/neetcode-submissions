class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i = 0; i < nums.length - 1; i++) {// i = 1
            const firstElement = nums[i]; /// 5
            for (let j = i + 1; j < nums.length; j++) { // j = 2
                const secondElement = nums[j]; // 6
                if (firstElement + secondElement === target) { // 5 + 6 === 11
                    return [i, j]
                }
            }
        }
    }
}


