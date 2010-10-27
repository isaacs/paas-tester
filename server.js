var http = require("http")
  , sys = require("sys")
  , cp = require("child_process")
http.createServer(function (req, res) {
  console.log("REQUEST! "+(new Date).toISOString())
  res.writeHeader(200, {"content-type":"text/plain"})
  res.write( "Hello.\n"
           + sys.inspect(process.env)+"\n"
           + sys.inspect(req.headers)+"\n"
           )
  cp.exec("hostname", function (er, stdout, stderr) {
    if (er) return res.end("Error: "+er.stack)
    res.end("Hostname: "+stdout)
  })
}).listen(80)
