const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});
const dotenv = require("dotenv");
dotenv.config();

function config() {
  return {
    details: "",
    state: "",
    largeImageKey: "",
    largeImageText: ""
  }
}

rpc.on("ready", () => {
    rpc.setActivity({
        details: config().details,
        state: config().state,
        largeImageKey: config().largeImageKey,
        largeImageText: config().largeImageTest,
    })

    console.log("RPC active");
})

rpc.login({
    clientId: process.env.clientid
})
