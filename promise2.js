function Random(resolve) {
  resolve();
}
let p = new Promise(Random);

function callback() {
  console.log("promise fullfiled");
}
p.then(callback);
