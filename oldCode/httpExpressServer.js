const http = require('http');
const express = require('express'); //commonJS pattern
const path = require('path'); //built-in module
const chalk = require('chalk'); //colorize our log messages

const port = process.env.PORT || 3000;
const app = express();

//routing
app.get('/', function(req, res){
       res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/users', function(req,res){
    //We can use set to set the headers
    res.set('content-type', 'application/json');
    res.send({name: 'John', isValid: true, group: 'admin'});
});

//We tell http to create the server using the app object.
//It will know that app object exposes an interface that will capture those callbacks and process those.

var server = http.createServer(app);
server.listen(port, function(){
    console.log(`server is listening on port: ${chalk.green(port)}`);
});

