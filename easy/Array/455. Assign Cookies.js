/*

Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

*/

/*

APPROACH: Traverse through sorted g and s array using pointer, i, to determine the number of children (g[i]) is content. Pointer i will be incremented only if s[i] >= g[i]  

Step 1:
	Sort g and s arrays to allow for use of pointer (i)

Step 2:
	Create pointer (i) to point to index of g array

Step 3:
	Create result (res) variable to track count
	** Res variable could be removed and simply use i pointer

Step 4: 
	Traverse through s array checking if s[i] >= g[i]
	* Increment i pointer only if s[i] >= g[i], meaning child (g[i]) would be satisfied with s[i] 

Step 5:
	Return result (res)


TIME COMPLEXITY: O(nlogn)

Sort g and s arrays, O(nlogn)
Traverse through s array, O(n)


*/

/*
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
*/


var findContentChildren = function(g, s) {
	// sort arrays to allow for use of pointer
    g.sort((a,b) => a-b);
    s.sort((a,b) => a-b);
    
    let i = 0,
        res = 0;
    
    for (let num of s) {
    	// check if child g[i] would be satisfied with cookie of size s[i]
        if(num >= g[i]){
            i++;
            res++;
        }
    }
    return res;
};