class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let result = 0;
        this.height = height;

        for (let i = 0; i < height.length; i++) {
            const waterAtIndex = this.heightOfWaterAtIndex(i)
            result += waterAtIndex
        }
        return result;
    }

    heightOfWaterAtIndex(index) {
        const maxHL = this.maxHL(index)
        const maxHR = this.maxHR(index)

        const heightOfWaterThatCanBeRetained = Math.min(maxHL, maxHR) - this.height[index]
        return heightOfWaterThatCanBeRetained < 0 ? 0 : heightOfWaterThatCanBeRetained
    }

    maxHL(index) {
        let max = 0;

        for (let i = 0; i < index; i++) {
            if (this.height[i] > max) {
                max = this.height[i]
            }
        }
        return max
    }

    maxHR(index) {
        let max = 0;

        for (let i = index + 1; i < this.height.length; i++) {
            if (this.height[i] > max) {
                max = this.height[i]
            }
        }

        return max
    }
}








