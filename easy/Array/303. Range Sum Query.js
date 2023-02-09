/*

Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

*/

/*

APPROACH: Create class NumArray with function sumRange that adds elements of nums array between range nums[left] - nums[right]


TIME COMPLEXITY: O(n)

Traverse through elements of nums array to find the sum between nums[left] to nums[right], O(n)

*/

class NumArray {
    constructor(nums){
        this.data = nums;
    }

    sumRange(left,right){
        let sum = 0;
        
        for(let i = left; i <= right; i++){
            sum+= this.data[i];
        }
        
        return sum;
    }
    
};

/* 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
*/