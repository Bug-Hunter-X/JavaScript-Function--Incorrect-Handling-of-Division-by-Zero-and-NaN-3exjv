function foo(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Invalid input: NaN values are not allowed.');
  } else if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  } else {
    return a / b;
  }
}

console.log(foo(10, 0)); // Throws an error
console.log(foo(10, NaN)); // Throws an error
console.log(foo(10,2)); //Returns 5