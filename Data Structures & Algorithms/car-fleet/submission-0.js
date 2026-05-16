class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = []
        for (let i = 0; i < position.length; i++) {
            cars.push({
                position: position[i],
                time: (target - position[i]) / speed[i]
            });
        }

        cars.sort((a, b) => b.position - a.position);

        let ans = 0
        let slowest = 0
        for(let i = 0; i < cars.length; i++) {
            if (cars[i].time > slowest) {
                ans++;
                slowest = cars[i].time;
            }
        }

        return ans
    }
}
