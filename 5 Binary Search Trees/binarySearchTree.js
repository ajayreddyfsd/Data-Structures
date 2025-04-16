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
}

let tree = new BinarySearchTree();
tree.root = new Node(10);

tree.root.left = new Node(5);
tree.root.right = new Node(25);

tree.root.left.left = new Node(3);
tree.root.left.right = new Node(8);

tree.root.right.left = new Node(15);
tree.root.right.right = new Node(40);
