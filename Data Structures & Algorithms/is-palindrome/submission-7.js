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
        let i = 0;
        let j = s.length - 1;
        console.log(i, j)
        while(i <= j) {
            let left = s[i];
            let right = s[j];
            console.log(left, "left", right, "right")

            if(!this.isAlphanumeric(left)) {
                i++;
                continue;
            }

            if(!this.isAlphanumeric(right)) {
                j--;
                continue;
            }

            if(left.toLowerCase() !== right.toLowerCase()) {
                return false;
            }
            i++;
            j--;

        }

        return true;
    }
}
