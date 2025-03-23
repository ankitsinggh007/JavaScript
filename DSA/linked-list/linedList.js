class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtEnd(x) {
    let newNode = new Node(x);

    // If the list is empty
    if (!this.head) {
      this.head = newNode; // New node becomes the head
      return this.head;
    }

    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newNode; // Insert at the end

    return this.head;
  }
  getCount(head) {
    let len = 0;
    let temp = head;
    while (temp != null) {
      len++;
      temp = temp.next;
    }
    return len;
  }

  print() {
    let temp = this.head;
    let result = "";
    while (temp) {
      result += `${temp.data} → `;
      temp = temp.next;
    }
    console.log(result + "null");
  }
}

/*
237. Delete Node in a Linked List
There is a singly-linked list head and we want to delete a node node in it.
You are given the node to be deleted node. You will not be given access to the first node of head.
All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.
Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:
The value of the given node should not exist in the linked list.
The number of nodes in the linked list should decrease by one.
All the values before node should be in the same order.
All the values after node should be in the same order.
Custom testing:
For the input, you should provide the entire linked list head and the node to be given node. node should not be the last node of the list and should be an actual node in the list.
We will build the linked list and pass the node to your function.
The output will be the entire list after calling your function.
 
*/

var deleteNode = function (node) {
  // Copy the next node's value into the current node
  node.val = node.next.val; // 🔥 Use `val` instead of `data`

  // Skip over the next node
  node.next = node.next.next;
};

/*
Count Linked List Nodes
Given a singly linked list. The task is to find the length of the linked list, where length is defined as the number of nodes in the linked list
*/
/*
Search in Linked List
Given a linked list of n nodes and a key, the task is to check if the key is present in the linked list or not.
*/
const searchKey = (n, head, key) => {
  let count = 0;
  let temp = head;
  while (count !== n) {
    count++;

    if (temp.data == key) return true;
    temp = temp.next;
  }

  return false;
};

class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

/*
Given a doubly-linked list, a position p, and an integer x. The task is to add a new node with value x at 
the position just after pth node in the doubly linked list and return the head of the updated list.
*/
// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//         this.prev = null;
//     }
// }
function addNode(head, p, x) {
  let temp = head;
  if (!temp) return head;
  let count = 1;
  while (temp != null && count !== p) {
    temp = temp.next;
    count++;
  }
  if (!temp) return head;
  let newNode = new Node(x);
  let upcoming = temp.next;


  newNode.next = upcoming;
  newNode.prev = temp;
  temp.next = newNode;
  if (upcoming) {
    upcoming.prev = newNode;
  }
  return head;
}
/*
delete node in dll
*/
function  deleteNode(head, x) {

    let temp=head;

    if(x==1){

        let nextNode = temp.next;
        if(!nextNode) return null;
        temp.next = null;
        nextNode.prev=null;
        return nextNode;
    }

    let pos=1;
    while(temp!=null && pos!=x){

        temp=temp.next;
        pos++;
    }
    if(temp==null) return head;
    // if last element
    if(temp.next==null) {
        temp.prev.next=null;
    
    temp.prev=null;

    return head;
    }

    let prev=temp.prev;
    let next=temp.next;

        prev.next=next;

        next.prev=prev;

        temp.prev=null;
        temp.next=null;
        return head

}

/*
Reverse a Doubly Linked List
 */
function reverseDLL(head) {
    // code here
    
    let temp=head;
    let newHead=null;
    
    while(temp!=null){
        let prev=temp.prev;
        let next=temp.next;
        temp.next=prev;
        temp.prev=next;
         newHead = temp;    // Store the last node as new head
    temp = next;
        
    }
    return newHead;
    
    
    
}
/*
876. Middle of the Linked List
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.
*/
var middleNode = function(head) {

    let turtle =head;
    let rabbit=head;

    while(rabbit != null && rabbit.next !=null){
        rabbit=rabbit.next?.next;
        turtle=turtle.next;
    }
    return turtle;
    
};
// Given the head of a singly linked list, reverse the list, and return the reversed list.


var reverseList = function(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        let next = current.next; 
        current.next = prev;     
        prev = current;          
        current = next;          
    }
    
    return prev; // New head of the reversed list
};
// recursive way 
var reverseList = function(head) {
    // Base case: If the list is empty or has one node, return head
    if (head === null || head.next === null) {
        return head;
    }

    // Recursive call on the rest of the list
    let newHead = reverseList(head.next);

    // Reverse the current node's pointer
    head.next.next = head;   // Point the next node's next to current
    head.next = null;        // Break the current node's next pointer

    return newHead;  // Return the new head of the reversed list
};
/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached 
again by continuously following the next pointer. Internally, pos is used to denote the
 index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.

 */
var hasCycle = function(head) {


  let slow=head;
  let fast=head;

  while(fast!=null && fast.next!=null){

      slow=slow.next;

      fast=fast?.next?.next;    
      if(slow==fast) return true;

  }
  return false;
};
/*
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. 
Note that pos is not passed as a parameter.
Do not modify the linked list.
*/
var detectCycle = function(head) {


  let slow=head;
  let fast=head;

  while(fast!=null && fast.next!=null){

      slow=slow.next;
      fast=fast.next.next;
      if(slow==fast) {
          slow=head;
          break;
      }

  }
  if(fast==null || fast.next==null) return null;

  while(true){
      if(fast==slow) return slow;

      slow=slow.next;
      fast=fast.next;
  }
            
};
/*
Given the head of a linked list, determine whether the list contains a loop. If a loop is present, 
return the number of nodes in the loop, otherwise return 0.
*/
function  countNodesinLoop(head) {
  if (!head || !head.next) return 0;  

  let slow = head;
  let fast = head;

  // Detect the loop
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {  
          // Loop detected, now count the cycle length
          let len = 1;
          let temp = slow.next;

          while (temp !== slow) {   // Count the nodes in the loop
              len++;
              temp = temp.next;
          }

          return len;  
      }
  }

  return 0;  // No loop found
}
