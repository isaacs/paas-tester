http = require('http')
fs = require('fs')

server = http.createServer (req, res) ->
  res.writeHead(200, {"content-type": "text/plain"})
  s = fs.createReadStream(__filename)
  s.pipe(res, { end: false })
  s.on 'end', ->
    s.write '\n\n# package.json file:\n'
    fs.createReadStream(__dirname + '/package.json').pipe(res)

server.listen(80)

console.log('serving with coffee')
