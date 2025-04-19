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
}

let g = new Graph();

//adds "key" = [], KV pair to AL JS Object
g.addVertex(["toronto"]);
g.addVertex(["vancouver"]);
g.addVertex(["halifax"]);
g.addVertex(["montreal"]);
g.addVertex(["montreal"]);

console.log(g.adjacencyList);
