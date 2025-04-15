  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else if (index <= this.length / 2) {
      let current = this.head;
      for (let i = 0; i <= this.length / 2; i++) {
        if (index === i) {
          return current;
        }

        current = current.next;
      }
    } else {
      let current = this.tail;
      for (let i = this.length - 1; i > this.length / 2; i--) {
        if (index === i) {
          return current;
        }

        current = current.prev;
      }
    }
  }