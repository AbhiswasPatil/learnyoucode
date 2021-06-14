const http = require("http");
const urlList = process.argv.slice(2);

let totalData = [];
let counter = 0;

for (let i = 0; i < urlList.length; i++) {
  totalData[i] = "";
}

function getData(url, index) {}

for (let i = 0; i < urlList.length; i++) {
  http.get(urlList[i], (response) => {
    response.setEncoding("utf-8");

    response.on("data", (chunk) => {
      totalData[i] += chunk;
    });

    response.on("end", () => {
      counter++;
    });

    if (counter === urlList.length) {
      for (let i = 0; i < urlList.length; i++) {
        console.log(totalData[i]);
      }
    }
  });
}
