class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groups = new Map();

        for(let i = 0; i < strs.length; i++) {
            let count = new Array(26).fill(0);

            for(let j = 0; j < strs[i].length; j++) {
                let ch = strs[i][j]
                let idx = ch.charCodeAt(0) - "a".charCodeAt(0);
                count[idx]++;
            }

            let key = count.join("#");

            if (!groups.has(key)) {
                groups.set(key, []);
            }

            groups.get(key).push(strs[i]);
        }

        return Array.from(groups.values());
    }
}
