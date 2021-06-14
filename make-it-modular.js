const mymodule = require("./mymodule.js");

const path = process.argv[2];
const extention = process.argv[3];

mymodule(path, extention, function (err, list) {
  if (err) {
    return err;
  }
  list.forEach((element) => {
    console.log(element);
  });
});
