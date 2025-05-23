class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.queue.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let e = this.queue.length - 1;
    while (e > 0) {
      let p = Math.floor((e - 1) / 2);
      if (this.queue[p].priority > this.queue[e].priority) {
        [this.queue[p], this.queue[e]] = [this.queue[e], this.queue[p]];
        e = p;
      } else {
        break;
      }
    }
  }

  dequeue() {
    if (this.queue.length === 0) return undefined;

    [this.queue[0], this.queue[this.queue.length - 1]] = [
      this.queue[this.queue.length - 1],
      this.queue[0],
    ];
    let maxPrio = this.queue.pop();
    this.sinkDown();

    return maxPrio;
  }

  sinkDown() {
    let e = 0;
    let length = this.queue.length;

    while (true) {
      let c1 = 2 * e + 1;
      let c2 = 2 * e + 2;
      let swap = null;

      if (c1 < length && this.queue[c1].priority < this.queue[e].priority) {
        swap = c1;
      }

      if (c2 < length) {
        if (
          (swap === null && this.queue[c2].priority < this.queue[e].priority) ||
          (swap !== null && this.queue[c2].priority < this.queue[c1].priority)
        ) {
          swap = c2;
        }
      }

      //break if no more swaps to perform, that means queue is in order
      if (swap === null) {
        break;
      }

      [this.queue[e], this.queue[swap]] = [this.queue[swap], this.queue[e]];
      e = swap;
    }
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  dijkstra(start, end) {
    const distances = {}; // Stores shortest distance from start to each node
    const previous = {}; // Stores the path: which node we came from to reach a node
    const pq = new PriorityQueue(); // Priority Queue to pick the closest node
    const visitedOrder = []; // Keeps track of the order in which nodes were visited

    // Step 1: Set initial distances and enqueue all vertices
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0; // Distance to start is 0
        pq.enqueue(vertex, 0); // Enqueue start with priority 0
      } else {
        distances[vertex] = Infinity; // Other nodes have "infinite" distance initially
        pq.enqueue(vertex, Infinity); // Enqueue with max priority
      }
      previous[vertex] = null; // No known previous node yet
    }

    // Step 2: Start visiting nodes from the priority queue
    while (pq.queue.length) {
      const { val: current } = pq.dequeue(); // Get the node with the smallest distance
      visitedOrder.push(current); // Mark it as visited

      if (current === end) break; // If we reached the destination, stop

      // Step 3: Explore neighbors of current node
      for (let neighbor of this.adjacencyList[current]) {
        const candidate = distances[current] + neighbor.weight; // New potential distance
        if (candidate < distances[neighbor.node]) {
          // If the new distance is shorter, update it
          distances[neighbor.node] = candidate;
          previous[neighbor.node] = current; // Remember the path
          pq.enqueue(neighbor.node, candidate); // Re-enqueue with new shorter distance
        }
      }
    }

    // Step 4: Build the shortest path from end to start using the `previous` map
    const path = [];
    let currentNode = end;
    while (currentNode) {
      path.unshift(currentNode); // Add current node to the beginning of the path
      currentNode = previous[currentNode]; // Move to previous node
    }

    // If the start node is not at the beginning, path was not found
    if (path[0] !== start) {
      console.log("No path found.");
      return [];
    }

    // Step 5: Print all helpful debug information
    console.log("Visited Order:", visitedOrder); // Order of node processing
    console.log("Previous Map:", previous); // How we reached each node
    console.log("Distances:", distances); // Final shortest distances
    console.log("Shortest Path:", path); // Final path from start to end
    console.log("Shortest Distance:", distances[end]);

    return path; // Return the final path
  }
}

const g = new Graph();

// Add vertices
["A", "B", "C", "D", "E", "F", "G", "H", "I"].forEach((v) => g.addVertex(v));

// Add edges (weighted)
g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "G", 1);
g.addEdge("E", "H", 2);
g.addEdge("F", "G", 2);
g.addEdge("G", "H", 1);
g.addEdge("H", "I", 1);
g.addEdge("F", "I", 8);

// Test path from A to I
const path = g.dijkstra("A", "I");
