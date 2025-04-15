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

  remove(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }

    if (index === this.length) {
      return this.pop();
    }

    if (index === 0) {
      return this.shift();
    }

    let prevNode = this.get(index - 1);
    let nodeToRemove = this.get(index);
    let nextNode = this.get(index + 1);
    prevNode.next = nextNode;
    this.length--;
    return nodeToRemove;
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
}

let list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
console.log(list.remove(1, "5689"));
console.log(list);
