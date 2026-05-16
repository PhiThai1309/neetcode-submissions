class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let ans = new Array(temperatures.length).fill(0);
        let stack = [];
        for (let i = temperatures.length - 1; i >= 0; i--) {
            while(stack.length > 0 && stack[stack.length - 1].value <= temperatures[i]) {
                stack.pop()
            }

            if(stack.length > 0){
                ans[i] = stack[stack.length - 1].index - i
            }

            stack.push({ value: temperatures[i], index: i });

        }
        return ans;
    }
}
