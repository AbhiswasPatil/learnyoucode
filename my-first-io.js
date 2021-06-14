const fs = require("fs");
const path = process.argv[2];
const data = fs.readFileSync(path).toString().split("\n");
console.log(data.length - 1);
