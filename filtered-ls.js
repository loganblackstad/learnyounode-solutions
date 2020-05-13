const fs = require("fs");

var fileType = process.argv[3];

var numOfFileType = fs.readdir(process.argv[2], function callback(err, list) {
  if (err) {
    return console.log(err);
  }
  for (i = 0; i < list.length; i++) {
    if (list[i].search("." + fileType) > 0) {
      console.log(list[i]);
    }
  }
});
