const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200)
    res.end('hello yangze')
})

const port = 9001
server.listen(port, () => {
    console.log(`server start on port ${port}`)
})