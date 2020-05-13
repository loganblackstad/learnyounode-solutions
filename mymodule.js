const fs = require("fs");
const path = require("path");

function returnFilesOfType(dirName, ext, callback) {
  fs.readdir(filePath, function callback(err, list) {
    if (err) {
      callback(err);
      return;
    }

    for (i = 0; i < list.length; i++) {
      if (list[i].search("." + fileType)) {
        listOfFiles.push(list[i]);
      }
    }

    callback(null, listOfFiles);
  });
}

module.exports = returnFilesOfType;
