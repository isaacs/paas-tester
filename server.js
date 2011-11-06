(function() {
  var fs, http, server;
  http = require('http');
  fs = require('fs');
  server = http.createServer(function(req, res) {
    var s;
    res.writeHead(200, {
      "content-type": "text/plain"
    });
    s = fs.createReadStream(__filename);
    s.pipe(res, {
      end: false
    });
    return s.on('end', function() {
      res.write('\n\n# package.json file:\n');
      return fs.createReadStream(__dirname + '/package.json').pipe(res);
    });
  });
  server.listen(80);
  console.log('serving with coffee');
}).call(this);
