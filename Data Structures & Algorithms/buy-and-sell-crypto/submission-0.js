class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = left + 1;
        let ans = 0;
        
        while (right < prices.length) {
            ans = Math.max(ans, prices[right] - prices[left]);

            if (prices[left] < prices[right]) {
                right++;
            } else {
                left = right;
                right++;
            }
        }

        return ans
    }
}
