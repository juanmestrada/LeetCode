/* 

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

*/

var mergeKLists = function(lists) {
    
    // return null if lists is empty
    if(!lists || lists.length == 0) return null;
 
    while(lists.length > 1){
        let mergedList = [];
        
        for(let i = 0; i < lists.length; i += 2){
            let left = lists[i];
            let right = (i+1) < lists.length ? lists[i+1] : null;
            mergedList.push(merge(left, right));
        }
        lists = mergedList;     
    }
    
    return lists[0];
};

var merge = function(l1,l2){
    const dummy = new ListNode(-1);
    let tail = dummy;
    
    while(l1 && l2){
        if(l1.val < l2.val){
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next
        }
        
        tail = tail.next;
    }
    
    tail.next = l1 || l2;
    
    return dummy.next;
}