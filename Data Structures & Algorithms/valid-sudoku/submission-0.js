class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const boxes = Array.from({ length: board[0].length }, () => new Set());

        for (let i = 0; i < board.length; i++) {
            let row = new Set();
            let col = new Set();

            for (let j = 0; j < board[i].length; j++) {
                let boxNo = boxes[Math.floor(j / 3) + 3 * Math.floor(i / 3)]
                if (board[i][j] !== ".") {
                    if (row.has(board[i][j])) return false;
                    if (boxNo.has(board[i][j])) return false;
                    row.add(board[i][j]);
                    boxNo.add(board[i][j]);
                }

                if (board[j][i] !== ".") {
                    if (col.has(board[j][i])) return false;
                    col.add(board[j][i]);
                }
            }
        }

        return true;
    }
}
