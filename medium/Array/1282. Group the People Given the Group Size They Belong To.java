/*

There are n people that are split into some unknown number of groups. Each person is labeled with a unique ID from 0 to n - 1.

You are given an integer array groupSizes, where groupSizes[i] is the size of the group that person i is in. For example, if groupSizes[1] = 3, then person 1 must be in a group of size 3.

Return a list of groups such that each person i is in a group of size groupSizes[i].

Each person should appear in exactly one group, and every person must be in a group. If there are multiple answers, return any of them. It is guaranteed that there will be at least one valid solution for the given input.

*/

/*

APPROACH: Use a HashMap as temporary (efficient) storage to track the users in each group. Once max number of people in each group is reached, 
		  add group to expected List return type

Step 1: Create a hashMap (groupMap) to map groups of given size
        
Step 2: Create a List of Lists (resArr) of type integer that will hold final groups
    
Step 3: Traverse through groupSizes to find groups
		* Add each element of groupSizes to hashMap (groupMap) until max group size is reached
		* Once maximum number of elements for that group is reached, add group to final result array (resArr). Clear list in hashMap (groupMap) 

Step 4: Return List of groups (resArr)


TIME COMPLEXITY: O(n)

Traverse through groupSizes array


*/

class Solution {
    public List<List<Integer>> groupThePeople(int[] groupSizes) {
        Map<Integer, List<Integer>> groupMap = new HashMap<>();
        List<List<Integer>> resArr = new ArrayList();

        for(int i = 0; i < groupSizes.length; i++){
            int groupSize = groupSizes[i];

            groupMap.putIfAbsent(groupSize, new ArrayList<>());
            groupMap.get(groupSize).add(i);

            if(groupMap.get(groupSize).size() == groupSize){
                resArr.add(new ArrayList<>(groupMap.get(groupSize)));
                groupMap.get(groupSize).clear();
            }
        }

        return resArr;
    }
}