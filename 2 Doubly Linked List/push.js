class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current);
      current = current.next;
    }
    console.log(arr);
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      let currentTail = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.prev = currentTail;
    }

    this.length++;
    return this;
  }
}

let dll = new DoublyLinkedList();
dll.push(10);
dll.push(20);
dll.push(30);
dll.print();
