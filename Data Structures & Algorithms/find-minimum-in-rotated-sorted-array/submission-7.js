class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let res = Infinity;
        if (nums[l] <= nums[r]) {
            return res = Math.min(nums[l], nums[r]);
        }

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (nums[l] <= nums[mid]) {
                res = nums[l] < res ? nums[l] : res;
                l = mid + 1;
            } else {
                res = nums[mid] < res ? nums[mid] : res;
                r = mid - 1;
            }
        }
        return res;
    }
}






