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
g.addEdge("halifax", "toronto");
g.addEdge("toronto", "vancouver");
console.log(g.adjacencyList);

g.removeVertex("toronto");
console.log(g.adjacencyList);
