class HashTable {
  constructor(size = 10) {
    this.table = new Array(10);
    this.size = size; //hash table size
  }

  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i); // Add ASCII value of each character
    }
    return hashValue % this.size; // Return index within table size
  }
}
