const path = require('path')
const express = require('express')
const port = process.env.PORT || 4000
const http = require('http')
const app = express()
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

const DIST_DIR = path.join(__dirname, '../dist')
const HTML_FILE = path.join(DIST_DIR, 'index.html')
app.use(express.static(DIST_DIR))

app.get('/', (req, res) => {
  res.send(HTML_FILE)
})

io.on('connection', (socket) => {
  console.log(`START\t${socket.id}`)

  socket.on('disconnect', () => {
    console.log(`END\t${socket.id}`)
  })
})

server.listen(port, function () {
  console.log('App listening on port: ' + port)
})