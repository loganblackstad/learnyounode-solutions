const fs = require('fs');
const buf = fs.readFile(process.argv[2], 'utf8', function callback(err, data) {
    if (err) {
        return console.log(err)
    }
    var strArray = data.split("\n");
    var numLines = strArray.length - 1;
    console.log(numLines);
}); 
