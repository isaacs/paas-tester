http = require 'http'
http.createServer (req, res) ->
  res.sendHeader 200, {"Content-Type": "text/plain"}
  res.sendBody 'served with coffee'
  res.finish()
.listen 80

console.log 'server running'
