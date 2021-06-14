const net = require("net");
const port = process.argv[2];
const strftime = require("strftime");

const server = net.createServer(function (socket) {
  //"2013-07-06 17:42"
  var date = strftime("%Y-%m-%d %H:%M\n");
  socket.end(date);
});
server.listen(port);
