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

  unshift(val) {
    let newHead = new Node(val);
    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      let currentHead = this.head;
      this.head = newHead;
      this.head.next = currentHead;
    }
    this.length++;
    return this; //to facilitate method chaining
  }

  //gets me the value of the node at this so called index
  get(val) {
    if (val < 0 || val >= this.length) {
      return null;
    }

    let current = this.head;
    let i = 0;
    while (current) {
      if (val === i) {
        return current;
      }
      current = current.next;
      i++;
    }
  }

  //adds a new node at the specified so called index
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index === this.length) {
      this.push(value);
      return true;
    }

    let prevNode = this.get(index - 1);
    let temp = prevNode.next;
    prevNode.next = new Node(value);
    prevNode.next.next = temp;
    this.length++;
    return true;
  }
}

let list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
console.log(list.insert(5, "5689"));
