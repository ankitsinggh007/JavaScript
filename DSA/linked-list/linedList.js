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

func