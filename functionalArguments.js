function sum(a, b) {
  return a + b;
}
function mul(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function sub(a, b) {
  return a - b;
}
function doOperation(a, b, fn) {
  return fn(a, b);
}
const ans = doOperation(1, 3, sum);
console.log(`The ans from the function is : ${ans}`);
