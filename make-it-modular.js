const fs = require("fs");
var filePath = process.argv[2];
var fileType = process.argv[3];

const returnFilesOfType = require("./mymodule.js");

returnFilesOfType(filePath, fileType, (err, data) => {
  if (err) {
    console.log("Error: ", err);
    return;
  }

  console.log(data);

  data.forEach((filename) => {
    console.log(filename);
  });
});
