const https = require("http");

const server = https.createServer((request, response) =>{
    response.end("Hello");
})

const port = 3000;;
const ip = "127.0.0.1";

server.listen(port, ip, () => {
    console.log(`Server is running at http://${ip}:${port}`);
})