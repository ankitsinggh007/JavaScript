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
            this.head = newNode;  // New node becomes the head
            return this.head;
        }

        let temp = this.head;
        while (temp.next !== null) {
            temp = temp.next;
        }
        temp.next = newNode;  // Insert at the end

        return this.head;
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

var deleteNode = function(node) {
    // Copy the next node's value into the current node
    node.val = node.next.val;  // 🔥 Use `val` instead of `data`

    // Skip over the next node
    node.next = node.next.next;
};

