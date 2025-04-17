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

  printQueue() {
    const queue = this.queue;
    let output = "";
    let level = 0;
    let index = 0;
    const maxLevel = Math.floor(Math.log2(queue.length)) + 1;

    while (index < queue.length) {
      const levelCount = Math.pow(2, level);
      const spaceCount = Math.pow(2, maxLevel - level) - 1;
      const space = " ".repeat(spaceCount);

      let line = space;
      for (let i = 0; i < levelCount && index < queue.length; i++) {
        line +=
          `[${queue[index].val}, p=${queue[index].priority}]` + space + space;
        index++;
      }
      output += line + "\n";
      level++;
    }

    console.log(output);
    console.log("------------------------");
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



const pq = new PriorityQueue();

// Insert some tasks with priorities
pq.enqueue("Eat Breakfast", 2);
pq.enqueue("Finish Homework", 1);
pq.enqueue("Go for a Walk", 3);

console.log("After Insertions:");
pq.printQueue();

// Extract tasks based on priority
console.log("First Extraction (should be 'Finish Homework'):");
console.log(pq.dequeue()); // (lowest priority number first)

console.log("Second Extraction (should be 'Eat Breakfast'):");
console.log(pq.dequeue());

console.log("Third Extraction (should be 'Go for a Walk'):");
console.log(pq.dequeue());

console.log("Fourth Extraction (should be undefined):");
console.log(pq.dequeue());
