class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //usually push adds at the end, but
  //in stack, push adds to the start
  push(val) {
    let newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let firstNode = this.first;
      this.first = newNode;
      this.first.next = firstNode;
    }

    this.size++;
    return this;
  }
}
