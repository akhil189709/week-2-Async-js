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
  console.log("updated content of b.txt is: " + content);
});

/// clean the file i.e. remove the extra spaces from the start and from the end in the given file!
function cleanFile(filePath) {
  return new Promise((resolve, reject) => {
    // First, read the data from the file
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.log("There is an error here!");
        reject(err); // Reject the promise in case of an error
        return;
      }

      // Now remove the spaces
      let trimmedData = data
        .split("\n") // Split into lines
        .map((line) => line.trim()) // Trim spaces from each line
        .join("\n"); // Join the lines back

      // Now write back the trimmed data to the file
      fs.writeFile(filePath, trimmedData, (err) => {
        if (err) {
          console.log("Error:", err);
          reject(err); // Reject if writing fails
        } else {
          console.log("Data is trimmed successfully");
          resolve(trimmedData); // Resolve the promise with trimmed data
        }
      });
    });
  });
}

// Call the function
cleanFile("b.txt")
  .then(function (trimmedData) {
    console.log("The file reading, writing, and cleaning is done!");
    console.log("Trimmed Data:", trimmedData);
  })
  .catch(function (err) {
    console.error("An error occurred:", err);
  });
