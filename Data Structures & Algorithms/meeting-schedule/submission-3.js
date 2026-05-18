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
        let leftI = 0;
        let rightI = 0;
        while (leftI < left.length && rightI < right.length) {
            if (left[leftI].start <= right[rightI].start) {
                ans.push(left[leftI]);
                leftI++;
            } else {
                ans.push(right[rightI]);
                rightI++;
            }
        }

        while (leftI < left.length) {
            ans.push(left[leftI]);
            leftI++;
        }

        while (rightI < right.length) {
            ans.push(right[rightI]);
            rightI++;
        }

        return ans;
    }

    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        if (intervals.length < 2) return true;
        intervals = this.mergedSort(intervals, 0, intervals.length - 1);

        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i].start < intervals[i - 1].end) {
                return false;
            }
        }

        return true;
    }
}
