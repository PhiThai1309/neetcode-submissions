class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let ans = []
        for(let i = 0; i < temperatures.length; i++) {
            for(let j = i + 1; j < temperatures.length; j++) {
                if(temperatures[j] > temperatures[i]) {
                    ans[i] = j - i
                    break
                }

                if(j === temperatures.length - 1 && ans[i] === undefined) {
                    ans[i] = 0
                }
            }
        }

        ans.push(0)
        return ans
    }
}
