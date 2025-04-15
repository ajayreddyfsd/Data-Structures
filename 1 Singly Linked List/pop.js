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

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      //2 changes
      //if only did this.tail.next, this.tail will still be pointing to the old one and not new one, so need to do this.tail = newNode too
      //if only did this.tail, newNode will be hanging somewhere instead of connecting with the chain, so need to change first tail.next, and then tail as well.
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this; //for method chaining to be successful
  }

  pop() {
    //edge case when list is empty
    if (this.length === 0) return undefined;

    //edge case when list has only one element
    if (this.length === 1) {
      let tail = this.tail;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return tail;
    }

    //remaining cases
    let current = this.head;
    let newTail = current;

    //by the end of this loop, we get the tail(current) and we get the node next to tail(newTail)
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    return current;
  }
}

let sll = new SinglyLinkedList();
sll.push("20");
sll.push("30");
sll.push("50");
sll.push("70");
console.log(sll.pop());
console.log(sll);
