// function setTimeoutPromisified(time) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, time);
//   });
// }
// setTimeoutPromisified(3000).then(() => {
//   console.log("Promise has been resolved");
// });

setTimeout(() => {
  console.log("hi");
  setTimeout(() => {
    console.log("hi there");
    setTimeout(() => {
      console.log("hi there 2");
    }, 5000);
  }, 3000);
}, 1000);
