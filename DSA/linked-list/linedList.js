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
