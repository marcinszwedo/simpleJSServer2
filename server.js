const http = require('http');
const port = process.env.PORT || 8080;


const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("<html><body style="background-color:yellow;"><h1>parasole.gov</h1><br><h3>nr tel. 897 654 321</h3></body></html>");
}

const server = http.createServer(requestListener);
server.listen(port);