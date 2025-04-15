class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var first = new Node(5);
first.next = new Node(8);
first.next.next = new Node(14);
first.next.next.next = new Node(27);
