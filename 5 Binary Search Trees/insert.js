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

  //imported fancy tree print method
  printTree(node = this.root, prefix = "", isLeft = true) {
    if (node === null) return;

    if (node.right) {
      this.printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
    }

    console.log(prefix + (isLeft ? "└── " : "┌── ") + node.val);

    if (node.left) {
      this.printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
    }
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
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(30);
tree.insert(40);
tree.insert(15);
tree.insert(2);
tree.insert(8);
tree.insert(18);
tree.insert(56);
tree.insert(12);
tree.insert(136);
tree.printTree();
