var express = "not found"
try {
  express = require.resolve("express")
} catch (ex) {}

console.error("express is: "+express)

var util = require("util")

require("http").createServer(function (req, res) {
  var data = { env: process.env
             , module: module
             , express: express
             , pid: process.pid
             , argv: process.argv
             }
  data = new Buffer(util.inspect(data))
  res.writeHead(200, { "content-type":"text/plain", "content-length": data.length })
  res.end(data)
}).listen(+process.env.PORT || 80)
