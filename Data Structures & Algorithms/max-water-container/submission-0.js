class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let l = 0;
        let r = heights.length - 1;
        while (l < r && l < heights.length && r >= 0 ) {
            const hr = heights[r];
            const hl = heights[l];

            const b = r - l;
            const h = Math.min(hr, hl);
            const a = b * h;

            if (a > maxArea) {
                maxArea = a;
            }
            if (hr > hl) {
                l++;
            } else {
                r--;
            }
        }
        return maxArea;
    }
}
