/*
Reverse a Linked List 
*/
var reverseList = function (head) {

    let prev = null, curr = head;
    while (curr) {
        let next = curr.next;

        curr.next = prev;
        prev = curr
        curr = next;
    }
    return prev
};