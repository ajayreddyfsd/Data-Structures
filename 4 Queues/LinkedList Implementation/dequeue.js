class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
    return this;
  }

  dequeue() {
    if (this.size === 0) {
      return null;
    }
    let firstNode = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = firstNode.next;
    }

    this.size--;
    return firstNode;
  }
}

let q = new Queue();
q.enqueue("A");
q.enqueue("B");
q.enqueue("C");

console.log(q.dequeue().val); // A
console.log(q.dequeue().val); // B
console.log(q.dequeue().val); // C