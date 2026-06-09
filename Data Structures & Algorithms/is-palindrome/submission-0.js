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
        let text = "";
        for (let c of s) {
            if (this.isAlphanumeric(c)) {
                text += c.toLowerCase();
            }
        }
        return text === text.split('').reverse().join('');
    }
}
