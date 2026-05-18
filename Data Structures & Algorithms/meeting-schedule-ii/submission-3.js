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
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (intervals.length < 2) return intervals.length;

        intervals.sort((a, b) => a.start - b.start);
        let ans = 0;
        let arr = Array.from({ length: intervals.length }, () => []);
        arr[ans].push(intervals[0]);

        for (let i = 1; i < intervals.length; i++) {
            let placed = false;

            for (let j = 0; j <= ans; j++) {
                if (intervals[i].start >= arr[j][arr[j].length - 1].end) {
                    arr[j].push(intervals[i]);
                    placed = true;
                    break;
                }
            }

            if (!placed) {
                ans++;
                arr[ans].push(intervals[i]);
            }
        }

        return ans + 1;
    }
}
