class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    //we will definitely place the incoming node somewhere in the BST, not that we cannot place anywhere
    //once it is placed, the loop exits with the return statement
    let current = this.root;
    while (true) {
      if (value < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  //simply checks if the value is in the BST and returns T/F based on that
  contains(value) {
    if (this.root === null) {
      return false;
    }

    let current = this.root; //to keep track of nodes
    let found = false;

    //loop breaks if found or when currect is null and no more nodes to check
    while (!found && current) {
      if (value === current.val) {
        found = true;
      } else if (value < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return found;
  }
}
