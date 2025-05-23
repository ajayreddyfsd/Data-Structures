class Graph {
  constructor() {
    this.adjacencyList = {}; //same AL, but connections are stored as object with node and Weight as keys
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
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}


