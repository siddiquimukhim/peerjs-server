const express = require("express");
const { ExpressPeerServer } = require("peer");

const app = express();

const server = app.listen(process.env.PORT || 10000, () => {
    console.log("PeerJS Server Running");
});

const peerServer = ExpressPeerServer(server, {
    debug: true
});

app.use("/peerjs", peerServer);

app.get("/", (req, res) => {
    res.send("PeerJS Running");
});
