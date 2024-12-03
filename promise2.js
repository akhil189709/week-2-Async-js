function Random(resolve) {
  resolve();
}
let p = new Promise(Random);

function callback() {
  console.log("promise fullfiled");
}
p.then(callback);

///promise class
class Promise {
  constructor(fn) {
    function afterdone() {
     this.resolve()
    }
    fn(afterdone)
  }
  then(callback) {
    this.resolve = callback;
  }
}
