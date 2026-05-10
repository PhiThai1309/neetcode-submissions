class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let arr = new Set();
        let ans = 0;
        let left = 0;

        for (let i = 0; i < s.length; i++) {
            while (arr.has(s[i])) {
                arr.delete(s[left]);
                left++;
            }

            arr.add(s[i]);
            ans = Math.max(ans, i - left + 1);
        }

        return ans;
    }
}
