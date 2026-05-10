class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let ans = 0;
        let leftMax = [height[0]];
        let rightMax = [];
        rightMax[height.length - 1] = height[height.length - 1];

        for (let i = 1; i < height.length; i++) {
            leftMax[i] = Math.max(height[i], leftMax[i - 1]);
        }

        for (let j = height.length - 2; j >= 0; j--) {
            rightMax[j] = Math.max(height[j], rightMax[j + 1]);
        }

        for (let i = 1; i < height.length - 1; i++) {
            ans +=
                Math.min(leftMax[i], rightMax[i]) < height[i]
                    ? 0
                    : Math.min(leftMax[i], rightMax[i]) - height[i];
        }

        return ans;
    }
}
