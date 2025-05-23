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

    console.log("maxPrio = ", maxPrio);
    this.printQueue();

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
