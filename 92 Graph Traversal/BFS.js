class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  //adding a vertex
  //so basically, we are adding keys to the above list whose values are empty arrays for now
  //which we gonna later populate with the vertex's connections using addEdge() method
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  //basically, takes a connection => 2 vertices as arg
  //then goes to one vertex and pushes the other vertex
  //then goes to the other vertex and pushes the earlier vertex
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  //removes a connection, so we need to send 2 vertices as arguments
  //go to V1, which is the key of the KV pair and remove V2 from its array
  //go to V2, which is the key of the KV pair and remove V1 from its array
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1].indexOf(vertex2) !== -1) {
      this.adjacencyList[vertex1].splice(
        this.adjacencyList[vertex1].indexOf(vertex2),
        1
      );
    }

    if (this.adjacencyList[vertex2].indexOf(vertex1) !== -1) {
      this.adjacencyList[vertex2].splice(
        this.adjacencyList[vertex2].indexOf(vertex1),
        1
      );
    }
  }

  //to remove vertex,
  //first we need to remove the connections with those vertices
  //and then the vertex itself
  removeVertex(vertex) {
    for (let v in this.adjacencyList) {
      this.removeEdge(v, vertex);
    }

    delete this.adjacencyList[vertex];
  }
  
  /*
  Imagine a mansion where every room has several doors. You start from the entrance hall, and you first open all the doors connected to that room (i.e., direct neighbors), adding them to a queue.
  Then, one by one, you move to each of those rooms and repeat: open all their unvisited neighboring doors.
  You continue like this, floor by floor, room by room, spreading outward from where you started.
  You never go deep down a hallway unless you’ve explored everything at your current level first."
  If there are other disconnected mansions (i.e., isolated nodes or components), you’d need to repeat the process from another unvisited room.
  */
  bfs(start) {
    let queue = [];
    let visited = new Set();

    queue.push(start);

    while (queue.length > 0) {
      let node = queue.shift();

      if (!visited.has(node)) {
        visited.add(node);

        for (let neighbour of this.adjacencyList[node]) {
          if (!visited.has(neighbour)) {
            queue.push(neighbour);
          }
        }
      }
    }
    return visited;
  }
}

let g = new Graph();

// Add vertices
["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"].forEach((v) =>
  g.addVertex(v)
);

// Add edges (some form cycles, some connect different branches)
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "F");
g.addEdge("E", "F"); // cycle between C-E-F-D-B
g.addEdge("F", "G");
g.addEdge("G", "H");
g.addEdge("H", "E"); // another cycle: E-F-G-H-E

// Disconnected nodes
// I, J, K are not connected to any other vertex

console.log("BFS");
console.log(g.bfs("I")); // Should visit A through H, but not I, J, K
