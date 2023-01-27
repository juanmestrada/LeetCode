/*

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

	 1
	1 1
   1 2 1
  1 3 3 1
 1 4 6 4 1

*/

/*

APPROACH: Create Pascal's Triangle with given number of rows (numRows) by pushing new array (row) at every iterationg of numsRow created by adding values held in pointer of previous array (prev) except for first and last elements

Step 1:
	Create result array (triangle)

Step 2:
	Create array pointer (prev) that will hold previous array pushed to triangle
	* initialized to null

Step 3:
	Create for-loop to build rows of Pascal's Triangle
	* numsRow - 1 to include 0 index for arrays

Step 4:
	Create row to be pushed to final result array (triangle)

Step 5:
	For current iteration of numsRow, run inner for-loop to build row of triangle created by adding the 2 numbers above it 
	* First and last elements of current row will have a default value of 1
	* Use pointer of previous array (prev) pushed to triangle to find the sum of 2 numbers above current (prev(j) + prev(j-1))

Step 6:
	Push built row to triangle array (triangle)

Step 7:
	Update previous array pointer (prev) to last array pushed to triangle

Step 8:
	Return result array (triangle)


TIME COMPLEXITY: O(n^2)

Create rows of triangle for given number of rows (numRows), O(n)
At every iteration of rows, run inner for-loop to find values to fill row, O(n^2)

*/

/*
 * @param {number} numRows
 * @return {number[][]}
*/


var generate = function(numRows) {
	// Pascal's triangle
    const triangle = [];
    // pointer to last row pushed to triangle array
    let prev = null;
    
    // build rows for triangle
    for(let i = 0; i < numRows; i++){
        // current row to be pushed to triangle
        const row = [];

        // fill current row
        for(let j = 0; j < triangle.length+1;j++){
            // find values to push to current row based on Pascal's Triangle algorithm
            if(j == 0 || j == i){
            	// first and last elements of row will have a default value of 1
                row.push(1);
            } else {
            	// add numbers from last row pushed (prev) above current row and push to current row 
                row.push(prev[j-1] + prev[j]);
            }
        }
        // push current row to triangle
        triangle.push(row);
        // update pointer to last row pushed to triangle
        prev = row;
    }
    // return Pascal's Triangle
    return triangle;
};