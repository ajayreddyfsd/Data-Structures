function fibonacciTab(n) {
  if (n <= 1) return n;

  // Step 1: Create an array to store results up to n
  let table = new Array(n + 1);

  // Step 2: Base cases
  table[0] = 0;
  table[1] = 1;

  // Step 3: Build up from bottom
  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }

  // Step 4: Return the final result
  return table[n];
}

// Example usage
console.log("Tabulation:", fibonacciTab(5)); // Output: 5
