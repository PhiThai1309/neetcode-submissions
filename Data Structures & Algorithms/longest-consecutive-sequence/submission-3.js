class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length <= 1) return nums.length
        nums = nums.sort((a,b) => a-b)

        console.log(nums)
        let start = 0
        let longest = 1

        for(let i = 1; i < nums.length; i++) {
            if(Number(nums[i]) - Number(nums[i - 1]) === 1) {
                longest = Math.max(longest, i - start + 1)
                console.log(i - start)
            } else if(Number(nums[i]) - Number(nums[i - 1]) === 0) {
                start++
                continue
            } else {
                start = i
            }
        }

        return longest
    }
}
