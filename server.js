const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();

const server = app.listen(process.env.PORT || 9000, () => {
    console.log('PeerJS Server Running');
});

app.get('/', (req, res) => {
    res.send('PeerJS Server Running');
});

const peerServer = ExpressPeerServer(server, {
    debug: true,
    path: '/'
});

app.use('/peerjs', peerServer);
