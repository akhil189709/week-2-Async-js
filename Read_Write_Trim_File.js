const fs = require("fs");

//Read the file using the promise!
function readFile(filePath) {
  return new Promise((resolve) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      resolve(data);
    });
  });
}
readFile("a.txt").then((data) => {
  console.log(data);
});

//write to the file using promises
function writeFile(filePath) {
  return new Promise((resolve) => {
    let content = "this is the updated content of the file!";
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        console.log("there is an error in the file");
      } else {
        resolve(content);
      }
    });
  });
}
writeFile("b.txt").then((content) => {
  console.log("updated content of b.txt is: "+content);
});

/// clean the file i.e. remove the extra spaces from the start and from the end in the given file!
function cleanFile(filePath) {
  return new Promise((resolve) => {
    //first we have to read the data from  the file
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.log("there is an error here!");
      } else {
        return;
      }
      //now remove the spaces here
      let trimmedData = data
        .split("\n") //it splits into lines
        .map((line) => line.trim()) //trims the space from the each line
        .join("\n"); //joins the line back

      //now writes back the trimmed data to the file
      fs.writeFile(filePath, trimmedData, (err) => {
        if (err) {
          console.log("error" + err);
        } else {
          console.log("Data is trimmed successfullly");
          resolve(trimmedData);
        }
      });
    });
   });
}
cleanFile("b.txt").then(function(trimmedData) {
  console.log("the file reading,writing and the cleaning is done!");

})
