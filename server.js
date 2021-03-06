const app = require('./app')
const http = require('http')
const dotenv = require('dotenv')
dotenv.config()

const server = http.createServer(app)
const PORT = process.env.PORT || 3000

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port: ${PORT}`)
})