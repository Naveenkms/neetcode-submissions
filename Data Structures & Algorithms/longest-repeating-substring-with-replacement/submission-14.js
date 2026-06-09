class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
         let maxLength = 0;
    let start = 0;
    
    while (start < s.length) {
        console.log(`\nStarting from position ${start} (char '${s[start]}'):`);
        let charFreq = new Map();
        let maxFreqInWindow = 0;
        let end = start;
        
        while (end < s.length) {
            const currentChar = s[end];
            const currentFreq = (charFreq.get(currentChar) || 0) + 1;
            charFreq.set(currentChar, currentFreq);
            maxFreqInWindow = Math.max(maxFreqInWindow, currentFreq);
            
            const windowSize = end - start + 1;
            const charsToReplace = windowSize - maxFreqInWindow;
            
            const window = s.substring(start, end + 1);
            console.log(`  Window: '${window}', size: ${windowSize}, maxFreq: ${maxFreqInWindow}, need to replace: ${charsToReplace}`);
            
            if (charsToReplace > k) {
                console.log(`    → Need to replace ${charsToReplace} > ${k}, stopping`);
                break;
            }
            
            maxLength = Math.max(maxLength, windowSize);
            console.log(`    → Valid window, maxLength now: ${maxLength}`);
            
            end++;
        }
        
        start++;
    }
    
    return maxLength;
    }
}