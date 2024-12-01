// the synchronous way of the set timeout
function setTimeoutSync(timeout) {
  let startTime = new Date();
  while (true) {
    let currentTime = new Date();
    if (currentTime - startTime > timeout) {
      break;
    }
  }
}
setTimeoutSync(1000);
console.log("hi there");

// the asynchronous way of the setTimeout
function timeout() {
  console.log("hi there");
}
setTimeout(timeout, 1000);
