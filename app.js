function divideNumbers(a, b) {
// Test cases
try {
  console.log(divideNumbers(10, 2)); // should print 5
  console.log(divideNumbers(15, 0)); // should throw an error
  console.log(divideNumbers("hello", 7)); // should throw an error
  console.log(divideNumbers(12)); // should throw an error
} catch (error) {
  console.error(error.message);
}

}
