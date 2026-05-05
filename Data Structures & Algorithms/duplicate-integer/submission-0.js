class Solution {
    /**
     * @param {number[]}
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set();
        for(let i = 0; i < nums.length; i++) {
            set.add(nums[i])
        }

        return set.size !== nums.length
    }
}
