class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length <= 1) return false
        const map = {
            "}": "{",
            "]": "[",
            ")": "(",
        };

        let stack = [s[0]];

        for (let i = 1; i < s.length; i++) {
            console.log(map[s[i]])
            console.log(stack[stack.length - 1])
            console.log(stack)
            if (map[s[i]]) {
                if (map[s[i]] !== stack[stack.length - 1]) {
                    return false;
                } else {
                    stack.pop();
                }
            } else {
                stack.push(s[i]);
            }
        }

        return stack.length === 0;
    }
}
