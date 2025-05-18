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

  //a mansion of nested doors. start from the top floor, visit all doors, only one per room, till u reach dead end
  //then go back to prev door and visit its neighbours, ...
  //isolated nodes are not taken care
  dfs_recursive(start, visited = new Set()) {
    visited.add(start);

    for (let neighbour of this.adjacencyList[start]) {
      if (!visited.has(neighbour)) {
        this.dfs_recursive(neighbour, visited);
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

console.log("DFS from A:");
console.log(g.dfs_recursive("A")); // Should visit A through H, but not I, J, K

console.log("DFS from I:");
console.log(g.dfs_recursive("I")); // Should return just ["I"]
