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

  //simply checks if the value is in the BST and returns the node if it is found
  find(value) {
    if (this.root === null) {
      return undefined;
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

    if (!found) {
      return undefined;
    }

    return current;
  }
}

// Test 1: Creating the BST and inserting nodes
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(17);

// Test 2: Finding an existing value (should return the node)
console.log(bst.find(7)); // Expected: Node with value 7
console.log(bst.find(15)); // Expected: Node with value 15

// Test 3: Trying to find a non-existing value (should return undefined)
console.log(bst.find(20)); // Expected: undefined
console.log(bst.find(100)); // Expected: undefined

// Test 4: Finding the root value (should return the root node)
console.log(bst.find(10)); // Expected: Node with value 10

// Test 5: Check an empty tree (should return undefined)
const emptyBST = new BinarySearchTree();
console.log(emptyBST.find(5)); // Expected: undefined

// Test 6: Find a value after multiple insertions
bst.insert(25);
console.log(bst.find(25)); // Expected: Node with value 25

// Test 7: Test boundary cases (smallest and largest values)
console.log(bst.find(3)); // Expected: Node with value 3
console.log(bst.find(17)); // Expected: Node with value 17
