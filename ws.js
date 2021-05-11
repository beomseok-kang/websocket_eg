let WebSocketServer = require("ws").Server;
let wss = new WebSocketServer({ port: 40510 });

const { separateMsgStr, refineMsg } = require("./msgLogic");

wss.broadcast = function (data) {
  wss.clients.forEach((client) => client.send(data));
};

wss.on("connection", function (ws) {
  ws.on("message", function (message) {
    console.log(message);
    try {
      const [type, msg] = separateMsgStr(message);
      wss.broadcast(refineMsg(type, msg));
    } catch (e) {
      console.error(e);
    }
  });

  ws.on("close", function () {
    console.log("closed");
  });

  // setInterval( () => {
  //     try {
  //       ws.send(`${new Date()}`);
  //     } catch (e) {};
  //   },
  //   1000
  // );
});
