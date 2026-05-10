class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let map = new Map();
        let maxFreq = 0;
        let longest = 0

        for (let i = 0; i < s.length; i++) {
            let windowLength = i - left + 1;

            if (!map.has(s[i])) {
                map.set(s[i], 1);
            } else {
                map.set(s[i], map.get(s[i]) + 1);
            }

                maxFreq = Math.max(maxFreq, map.get(s[i]));

            if (windowLength - maxFreq > k) {
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }

            longest = Math.max(longest, i - left + 1)
        }

        return longest;
    }
}
