//1.Promisified version of the setTimeout!
function setTimeoutPromisied(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
function callback() {
  console.log("Promise is resolved after 5 seconds");
}
setTimeoutPromisied(5000).then(callback);
//Here setTimeoutPromisfied function is returning the object of the Promise class

//2.Promisified version of fs.readFile!
const fs = require("fs");
function readFile(filePath) {
  return new Promise((resolve) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.log(`file not found!`);
      } else {
        resolve(data);
      }
    });
  });
}
function LogData(data) {
  console.log("The data form the given file is : " + data);
}
readFile("b.txt").then(LogData);

//3.Promisified version of fs.readFile using setTimeout function
function readFile(filePath) {
  return new Promise((resolve) => {
    function readFile2() {
      fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
          console.log(`file not found!`);
        } else {
          resolve(data);
        }
      });
    }
    setTimeout(readFile2, 6000);
  });
}
function LogData2(data) {
  console.log("The data form the given file is : " + data);
}
readFile("a.txt").then(LogData2);

///writing the promise class on our own


