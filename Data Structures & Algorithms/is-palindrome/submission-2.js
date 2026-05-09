class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left <= right) {
            while (left <= right && !this.isAlphaNumeric(s[left])) {
                left++;
            }

            while (left <= right && !this.isAlphaNumeric(s[right])) {
                right--;
            }

if (left > right) break;

            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    isAlphaNumeric(ch) {
        return (
            (ch >= 'a' && ch <= 'z') ||
            (ch >= 'A' && ch <= 'Z') ||
            (ch >= '0' && ch <= '9')
        );
    }
}