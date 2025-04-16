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
  dfs_preOrder() {
    let result = [];
    let node = this.root;

    function traverse(node, result) {
      if (node === null) {
        return result;
      }

      result.push(node.val);
      traverse(node.left, result);
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

// Calling preOrder with no arguments
console.log(bst.dfs_preOrder()); // Output: [10, 5, 3, 7, 8, 15, 20]
