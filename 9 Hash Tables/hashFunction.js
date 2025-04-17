function simpleHash(key, hashTableSize) {
  let hashValue = 0;
  for (let i = 0; i < key.length; i++) {
    hashValue += key.charCodeAt(i); // Add ASCII value of each character
  }
  return hashValue % hashTableSize; // Ensure it fits within the table size
}

// Example usage:
const hashTableSize = 10; //this is range of outputs the hash function must give
const key = "apple";
const hashIndex = simpleHash(key, hashTableSize);
console.log(`Hash index for '${key}': ${hashIndex}`);
