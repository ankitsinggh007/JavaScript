/*
Reverse a Linked List 
*/
function reverseList(head) {

    let prev = null, curr = head;
    while (curr) {
        let next = curr.next;

        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
/* Remove from last nth node */