function settimeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function solve() {
  await settimeout(1000);
  console.log("hi there");
  await settimeout(4000);
  console.log("hi there 2");
  await settimeout(5000);
  console.log("hi there 3");
}
solve();
console.log("after the solve function");

