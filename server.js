let express = require('express');
let app = express();
let path = require('path');
let PORT = process.env.PORT || 80;

let http = require('http').Server(app);

// public folder
app.use(express.static(path.join(__dirname, 'public')));

// start with index.html
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/");
});

http.listen(PORT, function () {
    console.log('Listening on ' + PORT);
});