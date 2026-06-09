class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // ())
    isValid(s) {
        const stack = [];

        for (const c of s) {
            if (c === "(" || c === "{" || c === "[") {
                stack.push(c)
            } else {
                if (stack.length > 0) {
                    const character = stack.pop();
                    if ((character === "(" && c !== ")") || (character === "{" && c !== "}") || (character === "[" && c !== "]")) {
                        return false;
                    }
                }
                else {
                    return false
                }

            }
        }
        
        return stack.length === 0;
    }
}