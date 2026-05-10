class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let ans = 0;
        for (let i = 1; i < height.length - 1; i++) {
            let left = i - 1;
            let right = i + 1;
            let leftTalest = 0;
            let rightTalest = 0;
            while (left >= 0) {
                leftTalest = Math.max(leftTalest, height[left]);
                left--;
            }

            while (right < height.length) {
                rightTalest = Math.max(rightTalest, height[right]);
                right++;
            }

            ans +=
                Math.min(leftTalest, rightTalest) < height[i]
                    ? 0
                    : Math.min(leftTalest, rightTalest) - height[i];
        }

        return ans;
    }
}
