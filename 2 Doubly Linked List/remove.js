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

  get(index) {
    let current = null;
    if (index < 0 || index >= this.length) {
      return current;
    } else if (index <= this.length / 2) {
      current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
    }
    return current;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    let nodeToRemove = this.get(index);
    let beforeNode = this.get(index - 1);
    let afterNode = this.get(index + 1);
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    this.length--;

    //general cleanup before returning
    nodeToRemove.next = null;
    nodeToRemove.prev = null;
    return nodeToRemove;
  }
}
