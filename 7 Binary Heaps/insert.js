class MaxBinaryHeap {
  constructor() {
    this.heap = [];
  }

  //just pushes the element into the heap array as the first thing and later bubbles it up to its correct position
  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  //to place the newly inserted element into its correct position by bubbling it up
  bubbleUp() {
    let e = this.heap.length - 1; //last element index = index of the newly inserted element

    while (e > 0) {
      let p = Math.floor((e - 1) / 2); //parent index
      if (this.heap[p] < this.heap[e]) {
        [this.heap[p], this.heap[e]] = [this.heap[e], this.heap[p]];
        e = p;
      } else {
        break;
      }
    }
  }
}
