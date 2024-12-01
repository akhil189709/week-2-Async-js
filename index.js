///Normal function
//find the sum of two numbers
function sum(a, b) {
  return a + b;
}
let ans = sum(2, 3);
console.log(ans);
//find the sum from 1 to N
function findSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
let ans2 = findSum(100);
console.log(`The sum till 100 is: ${ans2}`);

const { log } = require("console");
const { hkdf } = require("crypto");
// //read the data from the file(synchronously);
const fs = require("fs"); // this is the file system library to read the data of the file!
const { addAbortSignal } = require("stream");

const data = fs.readFileSync("a.txt", "utf-8");
console.log(data);
const data2 = fs.readFileSync("b.txt", "utf-8");
console.log(data2);

//complex objects
let user = {
  firstName: "Akhil Kumar",
  age: function () {
    return 23;
  },
  gender: "male",
};
console.log(user.age());
console.log(user.gender); // this is the synchronous code here
console.log();

fs.readFile("a.txt", "utf-8", (err, data) => {
  /// Asynchronously
  console.log(data);
});
fs.readFile("b.txt", "utf-8", (err, data) => {
  ///Asynchronously
  console.log(data);
});
console.log("done!");

fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("file not found!");
  } else {
    console.log(data);
  }
});