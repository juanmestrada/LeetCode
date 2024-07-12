/*

You are given a 0-indexed array of strings words and a character x.

Return an array of indices representing the words that contain the character x.

Note that the returned array may be in any order.

*/

/*

APPROACH: Traverse through words array and check if char x is present in each element

Step 1: Create List of type integer (list) to hold indices of elements where char x is found
		
Step 2: Traverse through every element of words array
	
Step 3: If char x is found at current element in for loop, add index [i] to list array

Step 4: Return array of indices, list
	


TIME COMPLEXITY: O(n)

Traverse through every element in words array

*/


class Solution {
    public List<Integer> findWordsContaining(String[] words, char x) {
        List<Integer> list = new ArrayList<>();

        for(int i = 0; i < words.length; i++){
            if(words[i].indexOf(x) >= 0) {
                list.add(i);
            }
        }

        return list;
    }
}