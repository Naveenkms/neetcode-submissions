class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const sortedS1 = s1.split('').sort().join('');

        let s = 0;
        let e = s1.length - 1;

        while (e < s2.length) {
            const subsOfS2 = s2.slice(s, e + 1);
            const sortedSubsOfS2 = subsOfS2.split('').sort().join('');;
            if (sortedSubsOfS2 === sortedS1) {
                return true;
            }

            s++;
            e++;
        }
        return false;

    }
}





