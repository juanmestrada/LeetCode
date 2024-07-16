/*

You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.

*/

/*

APPROACH: Use an enhanced for loop to check if each element has a value matching the given ruleKey = ruleValue strings

Step 1: Create a variable of type int (count) to keep track of matching elements
        
Step 2: Use an enhanced for loop to check each element
    
Step 3: If an element has a matching value, increment counter

Step 4: Return counter (count)


TIME COMPLEXITY: O(n)

Traverse through each element in items array

*/

class Solution {
    public int countMatches(List<List<String>> items, String ruleKey, String ruleValue) {
        int count = 0;

        for (List<String> item : items) {
            if (ruleKey.equals("type") && item.get(0).equals(ruleValue)) count++;
            if (ruleKey.equals("color") && item.get(1).equals(ruleValue)) count++;
            if (ruleKey.equals("name") && item.get(2).equals(ruleValue)) count++;
        }

        return count;
    }
}