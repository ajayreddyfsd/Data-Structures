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

  //usually pop gives out the last element
  //but in stacks, pop gives out the first element
  pop() {
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
