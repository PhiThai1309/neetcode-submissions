/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    mergedSort(arr, startIndex, endIndex) {
        let mid = Math.floor((startIndex + endIndex) / 2);

        if (startIndex === endIndex) {
            return [arr[startIndex]];
        }

        let left = this.mergedSort(arr, startIndex, mid);
        let right = this.mergedSort(arr, mid + 1, endIndex);
        return this.merged(left, right);
    }

    merged(left, right) {
        let ans = [];
        let index = 0;
        let leftI = 0;
        let rightI = 0;
        while (leftI < left.length && rightI < right.length) {
            if (left[leftI].start <= right[rightI].start) {
                ans[index] = left[leftI];
                leftI++;
            } else {
                ans[index] = right[rightI];
                rightI++;
            }
            index++;
        }

        while (leftI < left.length) {
            ans[index] = left[leftI];
            index++;
            leftI++;
        }

        while (rightI < right.length) {
            ans[index] = right[rightI];
            index++;
            rightI++;
        }

        return ans;
    }

    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        if (intervals.length < 2) return true
        intervals = this.mergedSort(intervals, 0, intervals.length - 1);

        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i].start < intervals[i - 1].end) {
                return false;
            }
        }

        return true;
    }
}
