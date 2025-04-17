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

  get(key) {
    let indexToRetrieveFrom = this.hash(key);
    let arr = this.hashTable[indexToRetrieveFrom];

    if (arr === undefined) {
      return undefined;
    }

    //this.hashTable is an array
    //this.hashTable[indexToRetrieveFrom] returns an array
    //which inturn has so many arrays of [key, value] pairs in it.
    //we need to return the value corresponding to our key
    for (let i of arr) {
      if (i[0] === key) {
        return i[1];
      }
    }
  }

  // Fancy method to print the hash table in an easy-to-read format
  printTable() {
    for (let i = 0; i < this.hashTable.length; i++) {
      if (this.hashTable[i]) {
        console.log(`Index ${i}:`);
        for (let j = 0; j < this.hashTable[i].length; j++) {
          console.log(
            `  Key: ${this.hashTable[i][j][0]}, Value: ${this.hashTable[i][j][1]}`
          );
        }
      }
    }
  }
}

// Create a new hash table
const myHashTable = new HashTable(10);

// Insert some key-value pairs
myHashTable.set("apple", "fruit");
myHashTable.set("cucumber", "vegetable");
myHashTable.set("rose", "flower");
myHashTable.printTable();

// Retrieve and print values
console.log(myHashTable.get("apple")); // ➔ 'fruit'
console.log(myHashTable.get("cucumber")); // ➔ 'vegetable'
console.log(myHashTable.get("rose")); // ➔ 'flower'

// Try retrieving a non-existent key
console.log(myHashTable.get("banana")); // ➔ undefined
