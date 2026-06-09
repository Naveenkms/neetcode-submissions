class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumeric(char) {
        return (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9');
    }

    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while (l < r && !this.isAlphanumeric(s[l])) {
                l++;
            }

            while (l < r && !this.isAlphanumeric(s[r])) {
                r--;
            }

            if (l < r) {
                if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                    return false
                }
                l++;
                r--;
            }
        }
        return true;
    }
}
