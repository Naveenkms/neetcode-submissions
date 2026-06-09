class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.toLowerCase()
        let i = 0;
        let j = str.length - 1;

        while (i < j) {
            if (!isAlphaNumeric(str[i])) {
                i++;
            }

            if (!isAlphaNumeric(str[j])) {
                j--;
                continue;
            }

            if (isAlphaNumeric(str[i]) && isAlphaNumeric(str[j])) {
                if (str[i] !== str[j]) {
                    return false;
                }
                i++;
                j--;
            }
        }
        return true;
    }
}

function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);
    // Check if it's a letter (A-Z, a-z) or digit (0-9)
    return (code >= 65 && code <= 90) ||   // A-Z
        (code >= 97 && code <= 122) ||  // a-z
        (code >= 48 && code <= 57);     // 0-9
}