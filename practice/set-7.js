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
//Q find the middle of LL
function middleNode(head){
    
  let fast=head;
  let slow=head;

    while(fast!==null&&fast.next!==null){
        fast=fast.next.next;
        slow=slow.next;
    }
    return slow;

};
//Q check Plaindrom of LL
let findMiddle=(head1)=>{
let slow =head1;
let fast=head1;
while(fast!==null && fast.next!=null){
    slow=slow.next;
    fast=fast.next.next;
}
return slow;
}

let reverseLL=(head)=>{
    let prev=null;
    let curr=head;
    let next=null
    while(curr!=null){
        next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    return prev;
}



 function isPalindrome(head: ListNode | null): boolean {
    let head1=findMiddle(head);
            head1=reverseLL(head1);
            
        let p1=head;
        let p2=head1;
            console.log(p1,p2);

    while(p2){
        if(p1.val!==p2.val) return false;
        p1=p1.next
        p2=p2.next
    }
    return true;

};
//find the intersection of two LL
var getIntersectionNode = function(headA, headB) {
    let a=headA;
    let b=headB;

    while(a!=b){
        a=a?a.next:headB;
        b=b?b.next:headA;
    }
    return a;
};
//Q reorder LL
 let findMid=(head)=>{
    let fast=head;
    let slow=head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    let temp=slow.next;
    slow.next=null;
    return temp
 }

 let reverse=(head)=>{
    let prev=null;
    let curr=head;
    while(curr!=null){

        let next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    return prev;
 }

let reorderList = function(head) {
    
let mid=findMid(head);
let head1=reverse(mid);

let dummy=new ListNode(-1);
let p1=head;
let p2=head1;
let result=dummy;

while(p1 && p2){
    result.next=p1;
    p1=p1.next;
    result=result.next;
    result.next=p2
    p2=p2.next;
    result=result.next
}
let temp=p1?p1:p2

while(temp){
    result.next=temp;
    temp=temp.next;
    result=result.next;
}
return dummy.next;




return head1;
};