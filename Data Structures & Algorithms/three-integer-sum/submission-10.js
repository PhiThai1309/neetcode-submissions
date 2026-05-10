class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let ans = [];
        nums = nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            let left = i + 1;
            let right = nums.length - 1;

            if (nums[i] === nums[i - 1]) continue;

            while (left < right) {
                if (nums[i] + nums[left] + nums[right] === 0) {
                    ans.push([nums[i], nums[left], nums[right]]);
                    right--;
                    left++;

                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }

                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }

                    continue;
                }

                if (nums[i] + nums[left] + nums[right] > 0) {
                    right--;
                } else {
                    left++;
                }
            }
        }

        return ans;
    }
}
