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

  printHeap() {
    const heap = this.heap;
    let output = "";
    let level = 0;
    let index = 0;
    const maxLevel = Math.floor(Math.log2(heap.length)) + 1;

    while (index < heap.length) {
      const levelCount = Math.pow(2, level);
      const spaceCount = Math.pow(2, maxLevel - level) - 1;
      const space = " ".repeat(spaceCount);

      let line = space;
      for (let i = 0; i < levelCount && index < heap.length; i++) {
        line += heap[index++] + space + space;
      }
      output += line + "\n";
      level++;
    }

    console.log(output);
    console.log("------------------------");
  }

  //extracts the root element of the heap
  //replaces it with the last element of the heap
  //and performs sink down until BH is in its correct way
  extractMax() {
    if (this.heap.length === 0) return undefined;

    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    let maxEle = this.heap.pop();
    this.sinkDown();

    console.log("maxEle = ", maxEle);
    this.printHeap();

    return maxEle;
  }

  //places the newly added root into its correct position
  sinkDown() {
    let e = 0;
    let length = this.heap.length;

    while (true) {
      let c1 = 2 * e + 1;
      let c2 = 2 * e + 2;
      let swap = null;

      if (c1 < length && this.heap[c1] > this.heap[e]) {
        swap = c1;
      }

      if (c2 < length) {
        if (
          (swap === null && this.heap[c2] > this.heap[e]) ||
          (swap !== null && this.heap[c2] > this.heap[c1])
        ) {
          swap = c2;
        }
      }

      //break if no more swaps to perform, that means heap is in order
      if (swap === null) {
        break;
      }

      [this.heap[e], this.heap[swap]] = [this.heap[swap], this.heap[e]];
      e = swap;
    }
  }
}

let heap = new MaxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

// Now start extracting
heap.extractMax();
heap.extractMax();
heap.extractMax();
