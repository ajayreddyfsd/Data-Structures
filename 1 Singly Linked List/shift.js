class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }

    if (this.length === 1) {
      let head = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return head;
    }

    let head = this.head;
    let newHead = head.next;
    this.head = newHead;
    this.length--;
    return head;
  }
}

