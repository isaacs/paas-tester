http = require('http')
fs = require('fs')

server = http.createServer (req, res) ->
  res.sendHeader(200, {"content-type": "text/plain"})
  # fs.createReadStream(__filename).pipe(res)
  res.end("hello with coffee")

server.listen(80)

console.log('serving with coffee')
