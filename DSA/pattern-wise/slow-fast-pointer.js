//Linked List Cycle detect cycle 

var hasCycle = function (head) {

    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast == slow) return true;
    }
    return false;

};
// Linked List Cycle II

var detectCycle = function (head) {

    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if(slow==fast) {
            fast=head;
            while(fast!=slow){
                fast=fast.next;
                slow=slow.next;
            }
            return fast;
        }
    }
   return null
};
