class HashTable {
  constructor(size = 10) {
    this.size = size; //hash table size
    this.hashTable = new Array(this.size);
  }

  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i); // Add ASCII value of each character
    }
    return hashValue % this.size; // Return index within table size
  }

  set(key, value) {
    let indexToPlace = this.hash(key);

    //if nothing is yet placed in that place, we gonna place an empty array
    if (this.hashTable[indexToPlace] === undefined) {
      this.hashTable[indexToPlace] = [];
    }

    //this.hashTable is an array with ele in it is also an array,
    //so this.hashTable[indexToPlace] is an array
    //and we are pushing the key, value pair as an array in to that array which is part of the hash table array
    this.hashTable[indexToPlace].push([key, value]);
  }

  keys() {
    let keys = [];
    for (let arr of this.hashTable) {
      if (arr === undefined) {
        continue;
      } else {
        for (let subArr of arr) {
          keys.push(subArr[0]);
        }
      }
    }
    return keys;
  }
}

const ht = new HashTable();

// Adding some key-value pairs to the hash table
ht.set("name", "Alice");
ht.set("age", 30);
ht.set("city", "New York");
ht.set("country", "USA");
console.log(ht.keys());
