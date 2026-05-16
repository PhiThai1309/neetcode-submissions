class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for (let i = 0; i < tokens.length; i++) {
            let number = Number(tokens[i])
            let token = tokens[i];

            if (!Number.isNaN(Number(token))) {
                stack.push(number);
                continue;
            }

            console.log(stack)

            let right = stack.pop();
            let left = stack.pop();

            console.log(left, right)

            if (tokens[i] === "+") {
                stack.push(left + right);
            } else if (tokens[i] === "-") {
                stack.push(left - right);
            } else if (tokens[i] === "*") {
                stack.push(left * right);
            } else if (tokens[i] === "/") {
                stack.push(Math.trunc(left / right));
            }
        }

        return stack.pop();
    }
}
