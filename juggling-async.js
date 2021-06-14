const http = require("http");
const bl = require("bl");
const urlList = process.argv.slice(2);

let totalData = [];
let counter = 0;
for (let i = 0; i < urlList.length; i++) {
  http.get(urlList[i], (response) => {
    response.pipe(
      bl((err, data) => {
        if (err) {
          return console.log(error);
        }
        data = data.toString();
        totalData[i] = data;
        counter++;
        if (counter === urlList.length) {
          totalData.forEach((data) => console.log(data));
        }
      })
    );
  });
}
