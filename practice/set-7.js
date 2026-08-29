//Q reverse a Linked List

var reverseList = function (head) {
  if (!head) return null;
  let prev = null;
  let curr = head;
  let next = null;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};
//Q merge Sorted LL
mergeTwoLists = function (list1, list2) {
  let result = new ListNode(1);
  let tail = result;

  let H1 = list1;
  let H2 = list2;

  while (H1 && H2) {
    if (H1.val > H2.val) {
      tail.next = H2;
      H2 = H2.next;
    } else {
      tail.next = H1;
      H1 = H1.next;
    }
    tail = tail.next;
  }

  H1 === null ? (tail.next = H2) : (tail.next = H1);
  return result.next;
};
//Q Detect Cycle in LL
var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};
//Q Delete Nth Nide from End of LL
var removeNthFromEnd = function (head, n) {
  let tail = head;
  let mark = null;
  let count = n;
  while (tail) {
    tail = tail.next;
    count--;
    if (count === 0) break;
  }
  mark = head;
  if (!tail) {
    head = head.next;
  }
  while (tail && tail.next !== null) {
    mark = mark.next;
    tail = tail.next;
  }
  if (mark && mark.next) mark.next = mark.next.next;

  return head;
};
