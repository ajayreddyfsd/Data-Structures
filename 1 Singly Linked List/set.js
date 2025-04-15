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

  //updates the value of the node at the so called index to a new value
  set(index, val) {
    let nodeToEdit = this.get(index);
    if (nodeToEdit) {
      nodeToEdit.val = val;
      return true;
    }

    return false;
  }
}

let list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
console.log(list.set(4, 5689));
console.log(list);
