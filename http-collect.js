const fs = require("fs");
const http = require("http");
const url = process.argv[2];

http.get(url, (response) => {
  data = "";

  response.setEncoding("utf-8");
  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on("end", () => {
    console.log(data.length);
    console.log(data);
  });
});
