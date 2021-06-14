const fs = require("fs");
const path = process.argv[2];
const extention = process.argv[3];

fs.readdir(path, (err, list) => {
  if (err) {
    console.log(err);
  }
  newlist = list
    .filter((name) => {
      return name.endsWith("." + extention);
    })
    .forEach((item) => console.log(item));
});
