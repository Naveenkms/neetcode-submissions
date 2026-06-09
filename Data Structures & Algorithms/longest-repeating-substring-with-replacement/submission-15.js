class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
       let maxLength = 0;
    let start = 0;
    
    // Try every possible starting position
    while (start < s.length) {
        let charFreq = new Map();
        let maxFreqInWindow = 0;
        let end = start;
        let charsToReplace = 0; // Initialize outside the loop
        
        // Move the break condition directly into while condition
        // Loop continues while: end < s.length AND charsToReplace <= k
        while (end < s.length && charsToReplace <= k) {
            const currentChar = s[end];
            
            // Update frequency of current character
            const currentFreq = (charFreq.get(currentChar) || 0) + 1;
            charFreq.set(currentChar, currentFreq);
            
            // Update max frequency in current window
            maxFreqInWindow = Math.max(maxFreqInWindow, currentFreq);
            
            const windowSize = end - start + 1;
            charsToReplace = windowSize - maxFreqInWindow;
            
            // Only proceed if window is still valid after this character
            if (charsToReplace <= k) {
                maxLength = Math.max(maxLength, windowSize);
                end++; // Move to next position
            }
            // If charsToReplace > k, the while condition will be false next iteration
        }
        
        start++; // Move to next starting position
    }
    
    return maxLength;
    }
}