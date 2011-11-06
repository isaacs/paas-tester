http = require 'http'
http.createServer (req, res) ->
  res.sendHeader 200, {"content-type": "text/plain"}
  res.sendBody 'served with coffee'
  res.finish()
.listen("0.0.0.0", 80)

console.log 'server running'
