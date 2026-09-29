class Solution {
    isAlphanumeric(char) {
        return (
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = "";

        for (let i = 0; i < s.length; i++) {
            if (this.isAlphanumeric(s[i])) {
                str += s[i].toLowerCase()
            }

        }
        return str === str.split('').reverse().join('');

    }
}
