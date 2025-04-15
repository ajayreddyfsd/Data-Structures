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

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    let currentTail = this.tail;

    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      let newTail = currentTail.prev;
      this.tail = newTail;
      this.tail.next = null;
    }

    this.length--;
    currentTail.prev = null; //optional but recommended for garbage collection
    return currentTail;
  }
}

let dll = new DoublyLinkedList();
dll.push(10);
dll.push(20);
dll.push(30);
dll.print();
dll.pop();
dll.print();
dll.pop();
dll.print();
