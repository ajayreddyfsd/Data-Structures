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

  //recursive code - must need a base case
  dfs_inOrder() {
    let result = [];
    let node = this.root;

    function traverse(node, result) {
      if (node === null) {
        return result;
      }

      traverse(node.left, result);
      result.push(node.val);
      traverse(node.right, result);
    }

    traverse(node, result);
    return result;
  }
}

let bst = new BinarySearchTree();
bst.root = new Node(10);
bst.root.left = new Node(5);
bst.root.right = new Node(15);
bst.root.left.left = new Node(3);
bst.root.left.right = new Node(7);
bst.root.left.right.right = new Node(8);
bst.root.right.right = new Node(20);

// Calling inOrder with no arguments
console.log(bst.dfs_inOrder()); // Output: [3, 5, 7, 8, 10, 15, 20]
