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
//Middle of the Linked List

var middleNode = function(head) {

    let slow=head;
    let fast=head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow ;
    
};
//happy number 
function getNumber(num) {
    let sum = 0;
    while (num) {
        let last = num % 10;
        sum += last * last;
        num = Math.floor(num / 10);
    }
    return sum;
}
var isHappy = function (n) {
    let slow = n;
    let fast = n;

    while (true) {

        slow = getNumber(slow);
        fast = getNumber(getNumber(fast));

            if(slow ==1  ) return true;

        if (slow == fast) return false;
    }
};

//reverse LL

function reverseList(head,prev=null) {
    let curr=head;

    while(curr){
        let next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;

    }
    return prev;

}