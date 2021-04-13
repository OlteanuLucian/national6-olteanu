const fs = require("fs");

console.log("Run with NodeJS");

fs.readFile("newFile.txt", "utf8", function (err, data) {
    if (err) throw err;
    console.log("OK");
    console.log(data);
});