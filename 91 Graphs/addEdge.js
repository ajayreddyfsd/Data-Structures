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
}

let g = new Graph();

//adds "key" = [], KV pair to AL JS Object
g.addVertex(["toronto"]);
g.addVertex(["vancouver"]);
g.addVertex(["halifax"]);
g.addVertex(["montreal"]);
console.log(g.adjacencyList);

//populates the emmpty values of above with values based on their connections
g.addEdge("toronto", "montreal");
g.addEdge("halifax", "montreal");
g.addEdge("halifax", "vancouver");
console.log(g.adjacencyList);
