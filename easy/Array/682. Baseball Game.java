/*

You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

An integer x.
Record a new score of x.
'+'.
Record a new score that is the sum of the previous two scores.
'D'.
Record a new score that is the double of the previous score.
'C'.
Invalidate the previous score, removing it from the record.
Return the sum of all the scores on the record after applying all the operations.

The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

*/

/*

APPROACH: Use a LinkedList combined with switch statement to perform operations on running sum of score

Step 1: Create LinkedList record to track scores in order
		
Step 2: Initialize variable score of type int to track final score
	
Step 3: Traverse through every element in operations array

Step 4: Use switch statement to perform operations on score for given element of operations array

Step 5: Return score


TIME COMPLEXITY: O(n)

Traverse through every element in operations array

*/


class Solution {
    public int calPoints(String[] operations) {
        LinkedList<Integer> record = new LinkedList<>();
        int score = 0;

        for(int i = 0; i < operations.length; i++) {

            switch (operations[i]) {
                case "C" -> score -= record.removeLast();
                case "D" -> {
                    int lastScore = record.getLast();

                    record.addLast(lastScore * 2);
                    score += lastScore * 2;
                }
                case "+" -> {
                    int sumPrevTwo = record.get(record.size() - 2) + record.getLast();

                    record.addLast(sumPrevTwo);
                    score += sumPrevTwo;
                }
                default -> { 
                    int temp = Integer.parseInt(operations[i]); 

                    record.addLast(temp);
                    score += temp;              
                }
            }
        }

        return score;
    }
}