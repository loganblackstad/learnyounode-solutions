const fs = require('fs');
const buf = fs.readFileSync(process.argv[2]); //returns a buffer obj
const str = buf.toString();
var strArray = str.split("\n");
var numLines = strArray.length - 1;
if (numLines < 1) {
    numLines = 0;
}

console.log(numLines);