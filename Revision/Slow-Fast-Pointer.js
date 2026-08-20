/*
detect a cycle in LL
*/
var hasCycle = function(head) {
  let fast=head;
  let slow=head;
  while(fast && fast.next){
        fast=fast.next.next;
        slow=slow.next;
        if(fast==slow)return true;
  }  
  return false;
};
/*
detect the starting node of cycle in LL
*/
var detectCycle = function (head) {

    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast == slow) {

            slow = head;

            while (fast != slow) {
                fast = fast.next;
                slow = slow.next;
            }
            return fast;
        }
    }
    return null;
};
/*
find middle of LL
*/
var middleNode = function (head) {

        let slow = head, fast = head;
        while (fast && fast.next) {
            fast=fast.next.next;
            slow=slow.next;

            if(fast==slow) return -1;

        }
    return slow;

};
/*
Happy Number
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {

    let slow = getSquare(n);
    let fast = getSquare(getSquare(n));


    while (fast!=1 & fast!=slow) {
        slow = getSquare(slow);
        fast = getSquare(getSquare(fast));
        if(fast==slow) return false
    }

    return true

};

function getSquare(n) {

    let val = 0;

    while (n) {

        let num = n % 10;
        val += num * num;
        n = Math.floor(n/10);
    }
    return val
}