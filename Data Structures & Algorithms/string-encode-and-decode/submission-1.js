class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let ans = ""
        for(let i = 0; i < strs.length; i++) {
            ans += strs[i].length
            ans += "#"
            ans += strs[i]
        }

        return ans
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        let ans = []
        let end = 0
        for(let i = 0; i < str.length; i++) {
             if(str[i] >= "0" && str[i] <= "9") {
                end = end * 10 + Number(str[i])
                continue
             }

             if (str[i] === "#") {
                ans.push(str.slice(i + 1, i + 1 + end));
                i += end;
                end = 0;
            }
        }

        return ans
    }
}
