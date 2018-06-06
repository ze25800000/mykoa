const myKoa = require('./application')
const app = new myKoa()

app.use(async ctx => {
    ctx.body = 'hello yangze' + ctx.url
})

app.listen(9001, () => {
    console.log('server run on port 9001')
})