/*

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

*/

/*

APPROACH: Use dfs recursive function to check if board contains word. Starting at (row 0, col 0, word[0]), check adjacent board cells for cell containing word[i+1], so long as conditions defined for valid cells are met

Step 1:
	Define dimensions of board
	* rows = number of rows in board
	* cols = number of columns in board

Step 2:
	Create recursive function that accepts row position, column position, word[i]
	* Set base case, return true if recursive function has reached the end of word meaning all characters were found
	* Set conditions for valid cell
	* Create pointer for current cell value
	* Update current cell value to "#" to avoid cell being checked again
	* Create variable result (res) set to value returned by calling recursive function on all adjacent cells of current cell to check for next character of word
	* Restore original value of cell
	* Return res

Step 3:
	Run for-loop on every row of board
	* For every cell of row, run inner for-loop on every column of board
	** Inner for-loop will call recursive function (dfs) to check adjacent cells of starting cell and return true if valid cell path is found meaning board contains word

Step 4:
	Return false if recursive function has not returned true meaning word was not found


TIME COMPLEXITY: O(n * m * 4^n)

Traverse through every row of board, O(n)
For each row of board, traverse through every column of board, O(m)
For each cell of board, run recursive function on all adjacent cells to check for next character of word[i+1], O(4^word.length)

*/


var exist = function(board, word) {
    // dimensions of board
    let rows = board.length,
        cols = board[0].length;
    
    function dfs(r, c, i){
        // search has reached end of word
        // all previous char of word found
        if(i == word.length) return true;
        
        // cell searched is out of bounds
        if(r < 0 || c < 0 || r >= rows || c >= cols) return false;
        
        // cell searched does not contain word[i]
        if(word[i] != board[r][c]) return false;
        
        // hold pointer to current cell value
        const tmp = board[r][c];
        
        // update cell value to avoid visiting again
        board[r][c] = "#";
        
        // run recursive function to check all adjacent (down,up,right,left) cells of current cell
        const res = (dfs(r+1, c, i+1) ||
                    dfs(r-1, c, i+1) ||
                    dfs(r, c+1, i+1) ||
                    dfs(r, c-1, i+1));
        
        // return cell value to original value
        board[r][c] = tmp;
        
        // return value  of result
        return res;
        
    }
    
    // check every cell of board
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if (dfs(i, j, 0)) return true;
        }
    }
    
    // word was not found in board
    return false;
};