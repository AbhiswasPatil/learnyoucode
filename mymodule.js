const fs = require("fs");

module.exports = function requiredFunction(path, extention, callback) {
  fs.readdir(path, (err, list) => {
    if (err) {
      return callback(err, null);
    }
    var newlist = list.filter((name) => {
      return name.endsWith("." + extention);
    });
    return callback(null, newlist);
  });
};
