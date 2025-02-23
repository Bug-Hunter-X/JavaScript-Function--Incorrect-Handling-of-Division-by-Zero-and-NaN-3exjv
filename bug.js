function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect: should handle the case where a or b is NaN
  } else {
    return a / b; 
  }
}

console.log(foo(10, 0)); // Throws an error
console.log(foo(10, NaN)); // Returns NaN, but should ideally throw an error or return a meaningful value indicating an error.