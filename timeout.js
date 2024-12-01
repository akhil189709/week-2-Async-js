console.log("hi there");

function timeout() {
  console.log("hi there after the timeout finished");
}
setTimeout(timeout, 5000); // it takes the callback function of the timeout function and calls the timeout function after 5 secs

console.log("hello");

let sum = 0;
for (let i = 0; i < 1000000; i++) {
  sum += i;
}
console.log(sum);
console.log("the expensive operation is done!");
