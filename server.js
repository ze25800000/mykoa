const myKoa = require('./application')
const app = new myKoa()

app.use((req, res) => {
    res.writeHead(200)
    res.end('hello world')
})

app.listen(9001, () => {
    console.log('server run on port 9001')
})