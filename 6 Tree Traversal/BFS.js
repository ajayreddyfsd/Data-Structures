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

  //visits each node in bfs style and finally returns all tree's node's values as an array
  bfs() {
    //no root implies return an empty array
    if (this.root === null) {
      return [];
    }

    let queue = []; //to keep track of what to visit next, level by level
    let result = [];

    queue.push(this.root); //need to visit root by default

    //as long as my queue is not empty,i need to loop
    while (queue.length > 0) {
      let node = queue.shift(); //taking out the 'first to visit' from queue
      result.push(node.val);

      if (node.left) {
        queue.push(node.left); //not visiting, we just add to our queue to visit later
      }

      if (node.right) {
        queue.push(node.right); //not visiting, we just add to our queue to visit later
      }
    }
    return result;
  }
}

