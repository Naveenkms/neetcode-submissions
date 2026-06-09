class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let s = 0;
        let e = numbers.length - 1;

        while (s < e) {
            const sum = numbers[s] + numbers[e];

            if (sum === target) {
                return [s + 1, e + 1];
            }

            if (sum < target) {
                s++;
                continue;
            }

            if (sum > target) {
                e--;
                continue;
            }
        }
    }
}





