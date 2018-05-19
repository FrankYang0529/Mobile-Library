require('dotenv').config()
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const helmet = require('koa-helmet')
const cors = require('@koa/cors')
const jwt = require('koa-jwt')
const mongoose = require('mongoose')

const authRoute = require('./routes/auth')
const bookRoute = require('./routes/book')

const app = new Koa()

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = err.message
    ctx.app.emit('error', err, ctx)
  }
})

app.use(bodyParser())
app.use(helmet())
app.use(cors({
  origin: process.env.ALLOW_ORIGIN,
  credentials: true
}))
app.use(jwt({
  secret: process.env.SECRET,
  cookie: 'token'
}).unless({
  path: [/\/register/, /\/login/, /\/logout/]
}))

app.use(authRoute.routes())
app.use(bookRoute.routes())

// Not Found error
app.use(async (ctx, next) => {
  ctx.throw(404, 'Not Found')
})

// Error handler
app.on('error', (err) => {
  console.log(err.message)
})

// DB
mongoose.connect(process.env.DB_URI)

module.exports = app
