class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (let i = 0; i < matrix.length; i++) {
            const row = matrix[i]
            const lastItemInTheRow = row[row.length - 1]
            if (lastItemInTheRow === target) {
                return true;
            }

            if (lastItemInTheRow < target) {
                continue
            }

            // return this.binarySearch(target, row, 0, row.length - 1)
            return this.binarySearch(target, row)

        }
        return false
    }

    // binarySearch(target, array, l, r) {
    //     if (r <l) {
    //         return false
    //     }

    //     let m = Math.floor((r + l) / 2)

    //     if (target === array[m]) {
    //         return true
    //     }

    //     if (target < array[m]) {
    //         r = m - 1
    //         return this.binarySearch(target, array, l, r)
    //     }

    //     if (target > array[m] ) {
    //         l = m  +1
    //         return this.binarySearch(target, array, l, r)
    //     }
    // }

    binarySearch(target, array) {
        console.log("array",array)
        let l = 0;
        let r = array.length - 1

        while (r >= l) {
            let m = Math.floor((r+l) / 2)

            if (target === array[m]) {
                return true
            }

            if (target > array[m]) {
                l = m + 1
                continue;
            }

            if (target < array[m]) {
                r = m - 1
                continue;
            }
        }

        return false
    }

}
